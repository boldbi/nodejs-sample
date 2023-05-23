 # BoldBI Embedded Sample in NodeJS

This project was generated using NodeJS 12.13 or a later version that is installed on your system before it was compiled. This Bold BI Node.js sample contains the Dashboard embedding sample. This sample demonstrates the dashboard rendering available in your Bold BI server.

 ## Dashboard view

![Dashboard View](https://github.com/boldbi/aspnet-core-sample/assets/91586758/cb2dc2de-8327-4848-8ec5-1acf01888064)

 ## Requirements/Prerequisites

 * [Node.js](https://nodejs.org/en/)
 * [Python 3.8](https://www.python.org/downloads/release/python-383/)

 ### Help link

 * https://help.boldbi.com/embedded-bi/faq/where-can-i-find-the-product-version/

 ### Supported browsers
  
  * Google Chrome, Microsoft Edge, Mozilla Firefox.

 ## Configuration

 * Ensure that you have enabled embed authentication on the embed settings [page](https://help.boldbi.com/embedded-bi/site-administration/embed-settings/#get-embed-configuration-file). If it is not enabled, enable it. Please refer to the below image.

   ![Embed Settings](https://github.com/boldbi/aspnet-core-sample/assets/91586758/b3a81978-9eb4-42b2-92bb-d1e2735ab007)

 * Download the embedConfig.json file by referring to this [link](https://help.boldbi.com/embedded-bi/site-administration/embed-settings/#get-embed-configuration-file). Please refer to the below image.

    ![Embed Settings Download](https://github.com/boldbi/aspnet-core-sample/assets/91586758/d27d4cfc-6a3e-4c34-975e-f5f22dea6172)
    ![EmbedConfig Properties](https://github.com/boldbi/aspnet-core-sample/assets/91586758/d6ce925a-0d4c-45d2-817e-24d6d59e0d63)

 * Copy the downloaded embedConfig.json file and place it into the following [location](https://github.com/boldbi/nodejs-sample) of the application. Please refer to the below image.

   ![EmbedConfig image](https://github.com/boldbi/aspnet-core-sample/assets/91586758/5475fe01-2f43-4388-b91d-c6447f101aa4)

 ## How to run sample using command prompt 
    
  1. Open command prompt in this file [location](https://github.com/boldbi/nodejs-sample).

  2. To install all dependent packages, use the below command

     ```bash
     npm install
     ```
  
  3. To run the samples, use the below command:
 
     ```bash
     node embed.js
     ```

 ## Developer IDE

  * Visual studio code(https://code.visualstudio.com/download)

  ### How to run sample using visual studio code
 
  * Open the NodeJS sample in Visual Studio Code. 
   
  * Open the terminal in Visual Studio Code, install all dependent packages by executing the following command in the terminal: 
    ```bash
    npm install
    ```
 
  * Run the application using the below command.
    ```bash
    node embed.js
    ```

  Once execute above command the sample will be hosted in http://localhost:8080/. Please refer to the following image.

  ![dashboard view](https://github.com/boldbi/aspnet-core-sample/assets/91586758/cb2dc2de-8327-4848-8ec5-1acf01888064)

Please refer to the [help documentation](https://help.boldbi.com/embedded-bi/javascript-based/samples/v3.3.40-or-later/node-js/#how-to-run-the-sample) to know how to run the sample.

## Important notes

It is recommended to not store passwords and sensitive information in configuration files for security reasons, in a real-world application. Instead, you should consider using a secure application, such as Key Vault, to safeguard your credentials.

## Online demos

Look at the Bold BI Embedding sample to live demo [here](https://samples.boldbi.com/embed).


## Documentation

A complete Bold BI Embedding documentation can be found on [Bold BI Embedding Help](https://help.boldbi.com/embedded-bi/javascript-based/).
