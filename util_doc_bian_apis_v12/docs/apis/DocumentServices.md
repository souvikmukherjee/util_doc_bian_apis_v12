---
id: DocumentServices
title: DocumentServices
---

<h1 style='color:red;'>DocumentServices</h1>

**BIAN Documentation:** [DocumentServices v12](https://app.swaggerhub.com/apis/BIAN-3/DocumentServices/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /DocumentServices/{documentservicesid}/Control</span></summary>

  **Description**

  The Document Services Service Domain manages the creation and maintenance of documents throughout the bank. Control Document Service Procedure

  **Documentation**

  This API path allows you to update an existing control document service procedure within the Document Services Service Domain of the bank. It is used to manage the creation and maintenance of documents throughout the bank, specifically in relation to the control document service procedure. By sending a PUT request to this path with the appropriate document service ID, you can make changes to the control document service procedure as needed.

  **Limitations**

  PUT: The path '/DocumentServices/{documentservicesid}/Control' could be named in a more RESTful way by considering the resource being manipulated. A more suitable name for the path might be '/DocumentServices/{documentservicesid}/Settings'. This name conveys the idea of accessing or updating configurations or settings specific to the document service identified by {documentservicesid}.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DocumentServices/{documentservicesid}/Exchange</span></summary>

  **Description**

  The Document Services Service Domain manages the creation and maintenance of documents throughout the bank. Exchange Document Service Procedure

  **Documentation**

  This API path `/DocumentServices/{documentservicesid}/Exchange` with the `PUT` method is used to update an existing document service within the bank's system. The `{documentservicesid}` is a parameter that identifies the specific document service that needs to be updated. This API is part of the Document Services Service Domain, which is responsible for creating and maintaining documents across the bank. By using this API, users can modify or exchange information related to document services to ensure accurate and up-to-date documentation within the bank's operations.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

"/document-services/{document_services_id}/exchange"

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DocumentServices/{documentservicesid}/Execute</span></summary>

  **Description**

  The Document Services Service Domain manages the creation and maintenance of documents throughout the bank. Execute Document Service Procedure

  **Documentation**

  This API path allows you to update an existing resource related to Document Services. Specifically, it pertains to executing a procedure within the Document Services Service Domain which is responsible for creating and maintaining documents within the bank. By sending a PUT request to this path with the appropriate Document Services ID, you can trigger the execution of a specific procedure or action within the document management system of the bank.

  **Limitations**

  PUT: The name of the path should be: '/document-services/{documentServiceId}/execute'

This follows REST best practices by using lowercase letters, separating words with hyphens, and using singular nouns for resource names. The path parameters are also enclosed in curly braces to indicate dynamic values.

</details>

<details open>
  <summary><span style='color:red;'>POST: /DocumentServices/Initiate</span></summary>

  **Description**

  The Document Services Service Domain manages the creation and maintenance of documents throughout the bank. Initiate Document Service Procedure

  **Documentation**

  This API path is used to initiate the Document Services in a bank. Specifically, it allows you to create a new document or resource within the Document Services system. This function is part of a larger service domain that is responsible for managing documents across the bank, including their creation and maintenance. By using this API path with a POST method, you can kick start the process of creating a new document within the bank's document management system.

  **Limitations**

  POST: If the path '/DocumentServices/Initiate' followed REST best practices, it could be named more intuitively and descriptively to represent an action or resource. One suggestion could be '/documents/initiate'. This name clearly indicates that the endpoint is related to initiating a document process and follows REST principles by using lowercase letters and using plural nouns for resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /DocumentServices/{documentservicesid}/Notify</span></summary>

  **Description**

  The Document Services Service Domain manages the creation and maintenance of documents throughout the bank. Notify Document Service Procedure

  **Documentation**

  This API path allows you to retrieve information about a specific document service by providing the ID of the document service as part of the path. The Document Services Service Domain is responsible for handling the creation and upkeep of various documents within the bank. By making a GET request to this path, you can gather details related to how the document service notification procedure is carried out.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/document-services/{document-services-id}/notify'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DocumentServices/{documentservicesid}/Request</span></summary>

  **Description**

  The Document Services Service Domain manages the creation and maintenance of documents throughout the bank. Request Document Service Procedure

  **Documentation**

  This API path allows you to update a specific document service request within the bank's Document Services Domain. By making a PUT request to this path with the appropriate document service ID, you can submit updates or modifications to an existing document service request. This helps in managing the creation and maintenance of documents effectively within the bank's system.

  **Limitations**

  PUT: A suitable name for the path '/DocumentServices/{documentservicesid}/Request' following REST best practices could be:

`/document-services/{documentservicesid}/requests`

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
