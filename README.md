# Bold BI Embedded Sample in NodeJS

This project was created using NodeJS 18.18. This application aims to demonstrate how to render the dashboard available on your Bold BI server.

## Dashboard view

![Dashboard View](/images/dashboard.png)

## Requirements/Prerequisites

* [Node.js](https://nodejs.org/en/)
* [Python 3.8](https://www.python.org/downloads/release/python-383/)

> **NOTE:** Node.js versions 18.18 to 20.15 are supported.

### Supported browsers
  
* Google Chrome, Microsoft Edge, and Mozilla Firefox.

## Configuration

* Please ensure you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](https://help.boldbi.com/site-administration/embed-settings/#get-embed-secret-code?utm_source=github&utm_medium=backlinks) to enable it.

   ![Embed Settings](/images/enable-embedsecretkey.png)

* To download the `embedConfig.json` file, please follow this [link](https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file?utm_source=github&utm_medium=backlinks) for reference. Additionally, you can refer to the following image for visual guidance.

    ![Embed Settings Download](/images/download-embedsecretkey.png)
    ![EmbedConfig Properties](/images/embedconfig-file.png)

* Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/nodejs-sample) within the application. Please ensure you have placed it in the application, as shown in the following image.

    ![EmbedConfig image](/images/embedconfig-location.png)

## Run a Sample Using Command Line Interface

  1. Open the command line interface and navigate to the specified file [location](https://github.com/boldbi/nodejs-sample) where the project is located.

  2. To install all dependent packages, use the following command

     ```bash
     npm install
     ```

  3. Finally, run the application using the following command

     ```bash
     node embed.js
     ```

  4. After the application has started, it will display a URL in the `command line interface`, typically something like (e.g., <http://localhost:8080/>). Copy this URL and paste it into your default web browser.

## Developer IDE

* [Visual Studio Code](https://code.visualstudio.com/download>)

### Run a Sample Using Visual Studio Code

* Open the NodeJS sample in Visual Studio Code.

* Open the terminal in Visual Studio Code and install all dependent packages by executing the following command in the terminal

    ```bash
    npm install
    ```

* Finally, run the application using the following command.
  
    ```bash
    node embed.js
    ```

* After the application has started, it will display a URL in the `command line interface`, typically something like (e.g., <http://localhost:8080/>). Copy this URL and paste it into your default web browser.

    ![dashboard view](/images/dashboard.png)

Please refer to the [help documentation](https://help.boldbi.com/embedding-options/embedding-sdk/samples/node-js/#how-to-run-the-sample?utm_source=github&utm_medium=backlinks) to know how to run the sample.

## Important notes

It is recommended not to store passwords and sensitive information in configuration files for security reasons in a real-world application. Instead, it would be best to consider using a secure application, such as Key Vault, to safeguard your credentials.

## Online demos

Look at the Bold BI Embedding sample to live demo [here](https://samples.boldbi.com/embed?utm_source=github&utm_medium=backlinks).

## Documentation

A complete Bold BI Embedding documentation can be found on [Bold BI Embedding Help](https://help.boldbi.com/embedded-bi/javascript-based/?utm_source=github&utm_medium=backlinks).
