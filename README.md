# BoldBI Embedding NodeJS Samples

This Bold BI Node.js sample contains the Dashboard embedding sample. This sample demonstrates the dashboard rendering available in your Bold BI server.

This section guides you in using the Bold BI dashboard in your Node.js sample application.

 * [Requirements to run the demo](#requirements-to-run-the-demo)
 * [Using the NodeJS sample](#using-the-nodejs-sample)
 * [Online Demos](#online-demos)
 * [Documentation](#documentation)

 ## Requirements to run the demo

The samples require the following requirements to run.

 * [Node.js](https://nodejs.org/en/)
 * [Visual Studio Code](https://code.visualstudio.com/download)

## Using the NodeJS sample
 
 * Open the Node.js sample in Visual studio code, then open the embed.js file in the following location, /NodeJs/embed.js.
 * Please change the following properties in the `embed.js` file as per your Bold BI Server.

    <meta charset="utf-8"/>
    <table>
    <tbody>
        <tr>
            <td align="left">EmbedSecret</td>
            <td align="left">Get your EmbedSecret key from the Embed tab by enabling the `Enable embed authentication` on the Administration page https://help.boldbi.com/embedded-bi/site-administration/embed-settings/.</td>
        </tr>
        <tr>
            <td align="left">UserEmail</td>
            <td align="left">UserEmail of the Admin in your Bold BI server or have permission to view the dashbaord, which would be used to render the dashboard.</td>
        </tr>
    </tbody>
    </table>
	
  * Open the `index.html` file in NodeJs sample and provide the value for following properties,
  
    <meta charset="utf-8"/>
        <table>
        <tbody>
            <tr>
                <td align="left">RootUrl</td>
                <td align="left">Dashboard Server URL (Eg: http://localhost:5000/bi, http://demo.boldbi.com/bi).</td>
            </tr>
            <tr>
                <td align="left">SiteIdentifier</td>
                <td align="left">For the Bold BI Enterprise edition, it should be like `site/site1`. For Bold BI Cloud, it should be an empty string.</td>
            </tr>
            <tr>
                <td align="left">Environment</td>
                <td align="left">Your Bold BI application environment. (If Cloud, you should use `cloud,` if Enterprise, you should use `enterprise`).</td>
            </tr>
            <tr>
                <td align="left">dashboardId</td>
                <td align="left">Provide the dashboard id of the dashboard you want to embed in view or edit mode. Ignore this property to create new dashboard.</td>
            </tr>
            <tr>
                <td align="left">authorizationUrl</td>
                <td align="left">Url of the 'GetDetails' action in the ASP.NET application.</td>
            </tr>
        </tbody>
        </table>

### Install npm

To install all dependent packages, use the below command

```bash
npm install
```
### Run/Serve

To run the samples, use the below command

```bash
node embed.js
```

Please refer to the [help documentation](https://help.boldbi.com/embedded-bi/javascript-based/samples/v3.3.40-or-later/node-js/#how-to-run-the-sample) to know how to run the sample.

## Online Demos

Look at the Bold BI Embedding sample to live demo [here](https://samples.boldbi.com/embed).


## Documentation

A complete Bold BI Embedding documentation can be found on [Bold BI Embedding Help](https://help.boldbi.com/embedded-bi/javascript-based/).
