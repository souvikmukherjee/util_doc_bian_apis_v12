---
id: InformationProviderOperation
title: InformationProviderOperation
---

<h1 style='color:red;'>InformationProviderOperation</h1>

**BIAN Documentation:** [InformationProviderOperation v12](https://app.swaggerhub.com/apis/BIAN-3/InformationProviderOperation/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /InformationProviderOperation/{informationprovideroperationid}/Control</span></summary>

  **Description**

   Control Information Feed Operating Session

  **Documentation**

  This API path allows you to update and control the operating session of a specific information provider operation. You can make changes or adjustments to how the information feed is being operated by sending a PUT request to this path with the relevant information provider operation ID.

  **Limitations**

  PUT: The name of the path could be: 
'/information-providers/{informationproviderId}/operations/{operationId}/control'

This path follows the REST best practices of using lowercase letters, hyphens for readability, resource names in plural form, and using resource identifiers in the path rather than action names.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InformationProviderOperation/{informationprovideroperationid}/Exchange</span></summary>

  **Description**

   Exchange Information Feed Operating Session

  **Documentation**

  This BIAN API path allows you to update an existing Information Feed Operating Session for a specific Information Provider Operation identified by informationprovideroperationid. It enables you to exchange information within the operating session related to the specified operation.

  **Limitations**

  PUT: The name of the path should be:

/InformationProviderOperations/{informationprovideroperationid}/Exchanges

It follows REST best practices by using plural nouns for resource naming and keeping the path organized and descriptive.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InformationProviderOperation/{informationprovideroperationid}/Execute</span></summary>

  **Description**

   Execute Information Feed Operating Session

  **Documentation**

  This BIAN API path allows you to execute an information feed operating session by updating an existing resource identified by the information provider operation ID. In simpler terms, it means you can trigger a process to retrieve and provide information during a session related to an existing operation.

  **Limitations**

  PUT: Following REST best practices, the name of the path could be:

/information-providers/{informationprovideroperationid}/execute

</details>

<details open>
  <summary><span style='color:red;'>POST: /InformationProviderOperation/Initiate</span></summary>

  **Description**

   Initiate Information Feed Operating Session

  **Documentation**

  This BIAN API path allows you to create a new session for operating an information feed from an information provider. It initiates the process for collecting and providing information from the provider, enabling you to interact with and access the feed during the operating session.

  **Limitations**

  POST: The name of the path '/InformationProviderOperation/Initiate' should ideally be simplified to represent a resource or action in RESTful API design. 

A more RESTful naming convention for the path could be something like '/information-providers/initiate', where 'information-providers' represents the resource and 'initiate' represents the action to be performed on that resource. 

Remember that in RESTful design, paths should use lowercase letters and hyphens to separate words for better readability and usability.

</details>

<details open>
  <summary><span style='color:red;'>GET: /InformationProviderOperation/{informationprovideroperationid}/Notify</span></summary>

  **Description**

   Notify Information Feed Operating Session

  **Documentation**

  This BIAN API path is used to retrieve information about an Information Provider Operation that is designated by a specific information provider operation ID. By making a GET request to this path, users can receive details and notifications related to the Information Feed Operating Session associated with the specified information provider operation ID.

  **Limitations**

  GET: The name of the path following REST best practices could be:

```
/information-provider-operations/{informationprovideroperationid}/notify
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InformationProviderOperation/{informationprovideroperationid}/Request</span></summary>

  **Description**

   Request Information Feed Operating Session

  **Documentation**

  This API path allows you to update an existing resource related to an information provider operation. By making a PUT request to this path with the specific information provider operation ID, you can request an information feed operating session to be initiated or updated.

  **Limitations**

  PUT: The path should be named as follows to adhere to REST best practices:

/InformationProviderOperations/{informationprovideroperationid}/Requests

Remember to use plural nouns in the URL segment names, avoid capitalization, and use camelCase for multi-word segment names.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
