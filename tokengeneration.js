var fs = require("fs");
var http = require("http");
var https = require("https");
var url = require("url");
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Read JSON as UTF-8 and strip BOM if present to avoid parse errors
var appconfig = JSON.parse(fs.readFileSync('embedConfig.json', 'utf8').replace(/^\uFEFF/, ''));

var configjson ={"DashboardId": appconfig.DashboardId, "ServerUrl":appconfig.ServerUrl, "SiteIdentifier": appconfig.SiteIdentifier, "Environment": appconfig.Environment, "EmbedType": appconfig.EmbedType};

app.post('/TokenGeneration', function (req, response) {
  //object models
  const embedDetails = {
    email: appconfig.UserEmail,
    serverurl: appconfig.ServerUrl,
    siteidentifier: appconfig.SiteIdentifier,
    embedsecret: appconfig.EmbedSecret,
    dashboard: {  // Dashboard ID property is mandatory only when using BoldBI version 14.1.11.
      id: appconfig.DashboardId
    }
  }

  const parsedUrl = new URL(embedDetails.serverurl);
  const postData = JSON.stringify(embedDetails);
  const client = parsedUrl.protocol === 'https:' ? https : http;
  const options = {
    hostname: parsedUrl.hostname,
    port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
    path: `${parsedUrl.pathname}/api/${embedDetails.siteidentifier}/embed/authorize`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  const requ = client.request(options, res => {
    let result = '';
    res.setEncoding('utf8');
    res.on('data', chunk => result += chunk);
    res.on('end', () => {
      const resultparse = JSON.parse(result); // Parse the response
      response.send(resultparse?.Data?.access_token);
    });
  });

  requ.on('error', (e) => {
    console.error("Error fetching embed token:", e.message);
  });

  requ.write(postData);
  requ.end();
})

app.get("/",function (request, response) {

  var pathname = url.parse(request.url).pathname;
  console.log("Request for " + pathname + " received.");

  response.writeHead(200);

  if(pathname == "/") {
      html = fs.readFileSync("index.html", "utf8");
    html = html.replace("<script>","<script>var configjsonstring='"+JSON.stringify(configjson)+"';var configjson=JSON.parse(configjsonstring);");
      response.write(html);
  }
  response.end();
})

var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})