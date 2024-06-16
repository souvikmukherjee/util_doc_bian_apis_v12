---
id: CustomerCase
title: CustomerCase
---

<h1 style='color:red;'>CustomerCase</h1>

**BIAN Documentation:** [CustomerCase v12](https://app.swaggerhub.com/apis/BIAN-3/CustomerCase/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CustomerCase/Initiate</span></summary>

  **Description**

  This service domain handles the initiation, tracking, resolution and reporting on customer cases (issues that typically require corrective response to some financial transaction) InCR Initiate a customer case procedure

  **Documentation**

  This API path allows users to create a new customer case by initiating a procedure. It is designed to handle the process of tracking, resolving, and reporting on customer issues related to financial transactions that require corrective action. By making a POST request to this path, users can start the process of addressing and resolving a customer case within the system.

  **Limitations**

  POST: If the path '/CustomerCase/Initiate' is following REST best practices, it should ideally be named based on the resource it represents rather than an action. 

A more appropriate path name based on the resource could be '/CustomerCases' where a POST request to this endpoint could be used to initiate a new customer case or create a new customer case resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCase/{customercaseid}/Update</span></summary>

  **Description**

  This service domain handles the initiation, tracking, resolution and reporting on customer cases (issues that typically require corrective response to some financial transaction) UpCR Update details about a customer case

  **Documentation**

  This API path allows you to update details about a specific customer case identified by its unique customercaseid. By sending a PUT request to this path, you can modify information related to the customer case, such as updating the case details, status, or any other relevant data. This helps in managing and tracking customer cases effectively, especially those requiring corrective actions in financial transactions.

  **Limitations**

  PUT: A suitable name for the path '/CustomerCase/{customercaseid}/Update' following REST best practices would be:

PATCH /CustomerCases/{customercaseid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerCase/{customercaseid}/Retrieve</span></summary>

  **Description**

  This service domain handles the initiation, tracking, resolution and reporting on customer cases (issues that typically require corrective response to some financial transaction) ReCR Retrieve details about a customer case

  **Documentation**

  This BIAN API path allows you to retrieve specific details about a customer case by providing the customer case ID as a parameter. It is part of a service domain that deals with managing customer cases, which are issues related to financial transactions that require corrective action. By using this API, you can access information about a particular customer case, such as its status, history, and resolution details.

  **Limitations**

  GET: A suitable name for the given path, following REST best practices, would be: 

'/customer-cases/{customercaseid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCase/{customercaseid}/Analysis/{analysisid}/Update</span></summary>

  **Description**

  This service domain handles the initiation, tracking, resolution and reporting on customer cases (issues that typically require corrective response to some financial transaction) UpBQ Update details of the analysis in a customer case

  **Documentation**

  This API path allows you to update the details of the analysis within a specific customer case. You would need to provide the customer case ID and the analysis ID to specify the exact analysis you want to update. This functionality is useful for maintaining accurate and up-to-date information related to customer cases, especially when any changes or corrections need to be recorded in the analysis section of a case.

  **Limitations**

  PUT: A suitable name for the path '/CustomerCase/{customercaseid}/Analysis/{analysisid}/Update' following REST best practices could be:

PUT /customer-cases/{caseId}/analyses/{analysisId}

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerCase/{customercaseid}/Analysis/{analysisid}/Retrieve</span></summary>

  **Description**

  This service domain handles the initiation, tracking, resolution and reporting on customer cases (issues that typically require corrective response to some financial transaction) ReBQ Retrieve details about the analysis of a customer case

  **Documentation**

  This API path allows you to retrieve details about the analysis of a specific customer case. You need to provide the IDs of the customer case and the analysis you are interested in. This will give you information about the analysis conducted on the customer case, which is typically related to resolving issues regarding financial transactions.

  **Limitations**

  GET: The RESTful path should be named based on its resource and action. Following REST best practices, the name of the path could be:

'/customer-cases/{customercaseid}/analyses/{analysisid}' 

This path reflects the hierarchy of resources and their relationship. The HTTP method used to retrieve the resource will depend on the specific implementation, typically GET is used for retrieving resources in RESTful APIs.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCase/{customercaseid}/Determination/{determinationid}/Update</span></summary>

  **Description**

  This service domain handles the initiation, tracking, resolution and reporting on customer cases (issues that typically require corrective response to some financial transaction) UpBQ Update details of the determination in a customer case

  **Documentation**

  This API path allows you to update the details of the determination made in a specific customer case. By providing the customer case ID and determination ID, you can make changes or additions to the information related to how the issue was resolved in the case. This is useful for maintaining accurate records and ensuring that all relevant details are properly documented for reporting purposes.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be `/customer-cases/{customercaseid}/determinations/{determinationid}`. This path follows the conventions of using lowercase letters, separating words with hyphens instead of camel case, and using plural nouns for resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerCase/{customercaseid}/Determination/{determinationid}/Retrieve</span></summary>

  **Description**

  This service domain handles the initiation, tracking, resolution and reporting on customer cases (issues that typically require corrective response to some financial transaction) ReBQ Retrieve details about the determination of a customer case

  **Documentation**

  This BIAN API path allows you to retrieve information about the determination of a specific customer case. You can provide the customer case ID and determination ID to retrieve details related to the resolution and reporting of the issue that requires corrective action, usually related to a financial transaction.

  **Limitations**

  GET: A suitable name for the path would be:

'/customer-cases/{customercaseid}/determinations/{determinationid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCase/{customercaseid}/Resolution/{resolutionid}/Update</span></summary>

  **Description**

  This service domain handles the initiation, tracking, resolution and reporting on customer cases (issues that typically require corrective response to some financial transaction) UpBQ Update details of the resolution tasks of a customer case

  **Documentation**

  This API path allows you to update the details of the resolution tasks associated with a specific customer case. You need to provide the ID of the customer case and the ID of the resolution task that you want to update. By making a PUT request to this endpoint, you can modify the details related to resolving the customer case, such as updating progress, adding notes, or changing status.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be:

'/customer-cases/{customercaseid}/resolutions/{resolutionid}/updates'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerCase/{customercaseid}/Resolution/{resolutionid}/Retrieve</span></summary>

  **Description**

  This service domain handles the initiation, tracking, resolution and reporting on customer cases (issues that typically require corrective response to some financial transaction) ReBQ Retrieve details about the resolution actions for a customer case

  **Documentation**

  This API path allows you to retrieve details about the resolution actions taken for a specific customer case. By providing the customer case ID and resolution ID, you can access information related to how a particular issue or problem was addressed in response to a financial transaction. This service is designed to help track and report on the actions taken to resolve customer cases effectively.

  **Limitations**

  GET: A suitable name for the path could be:

```
GET /customer-cases/{customercaseid}/resolutions/{resolutionid}
```

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
