---
id: ChequeLockBox
title: ChequeLockBox
---

<h1 style='color:red;'>ChequeLockBox</h1>

**BIAN Documentation:** [ChequeLockBox v12](https://app.swaggerhub.com/apis/BIAN-3/ChequeLockBox/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /ChequeLockBox/{chequelockboxid}/Control</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Control Lock Box Facility

  **Documentation**

  This API path allows you to update the control settings of a specific Cheque Lock Box facility identified by its unique ID. The Cheque Lock Box service supports paper cheque processing services for corporate customers, and this particular endpoint lets you modify the control settings of a specific lock box facility.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/ChequeLockBoxes/{chequelockboxid}/Controls
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ChequeLockBox/{chequelockboxid}/Exchange</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Exchange Lock Box Facility

  **Documentation**

  This BIAN API path allows you to update an existing resource related to the paper cheque processing services offered to corporate customers through the Exchange Lock Box Facility.

  **Limitations**

  PUT: The name of the path should be:

`/cheque-lock-boxes/{chequelockboxid}/exchanges`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ChequeLockBox/{chequelockboxid}/Execute</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Execute Lock Box Facility

  **Documentation**

  This API path `/ChequeLockBox/{chequelockboxid}/Execute` allows you to execute the lock box facility for a specific paper cheque processing service provided to corporate customers. By calling this API with a particular `chequelockboxid`, you can update or execute the processing service associated with a specific lock box.

  **Limitations**

  PUT: Based on REST best practices, a suitable name for the path '/ChequeLockBox/{chequelockboxid}/Execute' could be:

`POST /ChequeLockBox/{chequelockboxid}/Actions/Execute`

This naming convention follows the best practice of using resource-oriented URLs and keeping the endpoint names consistent and descriptive.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ChequeLockBox/Initiate</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Initiate Lock Box Facility

  **Documentation**

  This BIAN API path `/ChequeLockBox/Initiate` allows corporate customers to initiate a lockbox facility for processing paper cheques. By making a POST request to this endpoint, customers can set up and activate a service that helps streamline the processing of cheque payments.

  **Limitations**

  POST: A RESTful approach suggests naming resources using nouns rather than verbs. Therefore, a more appropriate name for the path '/ChequeLockBox/Initiate' might be '/cheque-lockboxes'.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ChequeLockBox/{chequelockboxid}/Notify</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Notify Lock Box Facility

  **Documentation**

  This API path allows you to retrieve information about a specific "Cheque Lock Box" by providing its unique identifier (chequelockboxid). The Cheque Lock Box service is designed to support paper cheque processing services for corporate customers who have opted for the Notify Lock Box Facility. By using this API, you can access details and data related to a particular Cheque Lock Box within this service domain.

  **Limitations**

  GET: The name of the path should be '/cheque-lock-box/{chequelockboxid}/notify'. It follows REST best practices by using lowercase letters, separating words with hyphens, and including resource identifiers for clear path structuring.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ChequeLockBox/{chequelockboxid}/Request</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Request Lock Box Facility

  **Documentation**

  This API path allows corporate customers to request a lock box facility for paper cheque processing services. By using a PUT request to update an existing resource identified by {chequelockboxid}, customers can request the activation or modification of a lock box service for handling their paper cheque transactions.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:
'/cheque-lock-boxes/{chequeLockBoxId}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /ChequeLockBox/{chequelockboxid}/Retrieve</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Retrieve Lock Box Facility

  **Documentation**

  This BIAN API path allows users to retrieve information related to a specific Cheque Lock Box facility identified by the chequelockboxid. The Cheque Lock Box service supports paper cheque processing services provided to corporate customers. By using this API, users can access details about the Lock Box Facility to retrieve relevant information and manage cheque processing activities efficiently.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

`/cheque-lock-box/{chequelockboxid}`

For the endpoint to retrieve a ChequeLockBox resource with a specific ID, you would typically use HTTP GET method along with the resource identifier in the URL. In this case, `{chequelockboxid}` represents the unique identifier of the specific ChequeLockBox resource that needs to be retrieved.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ChequeLockBox/{chequelockboxid}/Update</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Update Lock Box Facility

  **Documentation**

  This BIAN API path allows you to update the lock box facility associated with a specific cheque lock box identified by `{chequelockboxid}`. This API is part of the Cheque Lock Box service domain, which supports paper cheque processing services for corporate customers. By making a PUT request to this path with the necessary details, you can modify the lock box facility settings for the specified cheque lock box.

  **Limitations**

  PUT: Based on REST best practices, the name of the path '/ChequeLockBox/{chequelockboxid}/Update' can be simplified to '/cheque-lock-boxes/{chequelockboxid}'. This path follows the convention of using all lowercase letters, separating words with hyphens, and using the resource name in the plural form. It is concise, descriptive, and adheres to RESTful URL naming standards.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ChequeLockBox/{chequelockboxid}/CheckClearingandSettlement/{checkclearingandsettlementid}/Exchange</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Exchange Check Clearing and Settlement Fulfillment

  **Documentation**

  This API path allows you to update an existing resource related to paper check processing services for corporate customers. Specifically, it pertains to the exchange, clearing, and settlement of checks within a cheque lock box system. By providing the appropriate identifiers for the cheque lock box and check clearing and settlement, you can make updates to the exchange process through this API endpoint.

  **Limitations**

  PUT: The name of the path should be:

'/cheque-lock-box/{chequelockboxid}/check-clearing-and-settlement/{checkclearingandsettlementid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ChequeLockBox/{chequelockboxid}/LockBoxReportingandIssueResolution/{lockboxreportingandissueresolutionid}/Exchange</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Exchange Lock Box Reporting and Issue Resolution Fulfillment

  **Documentation**

  This API path allows you to update an existing resource related to paper cheque processing services offered to corporate customers. Specifically, it pertains to the Exchange Lock Box Reporting and Issue Resolution Fulfillment within the Cheque Lock Box service domain. By using the PUT method, you can make changes or modifications to the specified resource identified by the {chequelockboxid} and {lockboxreportingandissueresolutionid} parameters.

  **Limitations**

  PUT: The name of the path should be:

`/cheque-lock-box/{cheque-lock-box-id}/lock-box-reporting-and-issue-resolution/{lock-box-reporting-and-issue-resolution-id}/exchange` 

Following REST best practices, the path should be in lowercase, use hyphens to separate words, and utilize singular nouns for resource names.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ChequeLockBox/{chequelockboxid}/PaperCheckProcessing/{papercheckprocessingid}/Exchange</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Exchange Paper Check Processing Fulfillment

  **Documentation**

  This BIAN API path allows you to update or exchange paper check processing fulfillment for a specific cheque lock box and paper check processing within that lock box. In simpler terms, it enables corporate customers to make changes or updates to the processing of paper checks within a specific service domain related to cheque processing.

  **Limitations**

  PUT: The name of the path should be:

'/cheque-lock-box/{chequelockboxid}/paper-check-processing/{papercheckprocessingid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ChequeLockBox/{chequelockboxid}/CheckClearingandSettlement/{checkclearingandsettlementid}/Execute</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Execute Check Clearing and Settlement Fulfillment

  **Documentation**

  This API path is used to update or execute the process of paper check clearing and settlement fulfillment for corporate customers using the Cheque Lock Box service. By providing the specific Cheque Lock Box ID and Check Clearing and Settlement ID, this API allows the system to perform the necessary actions to complete the check clearing and settlement process for a particular transaction.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

`POST /cheque-lock-box/{chequeLockBoxId}/check-clearing-and-settlement/{checkClearingAndSettlementId}/execution`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ChequeLockBox/{chequelockboxid}/LockBoxReportingandIssueResolution/{lockboxreportingandissueresolutionid}/Execute</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Execute Lock Box Reporting and Issue Resolution Fulfillment

  **Documentation**

  This API path is used to update and execute lock box reporting and issue resolution for a specific paper cheque lock box belonging to a corporate customer. It allows users to handle and process paper cheques efficiently by executing necessary reporting and issue resolution tasks to fulfill lock box services for corporate customers.

  **Limitations**

  PUT: Based on REST best practices, the name of the path following the hierarchy you provided could be:

'/cheque-lock-box/{cheque-lock-box-id}/lock-box-reporting-and-issue-resolution/{lock-box-reporting-and-issue-resolution-id}/execute'

In RESTful naming conventions, paths are typically written in lowercase and words are separated by hyphens for better readability.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ChequeLockBox/{chequelockboxid}/PaperCheckProcessing/{papercheckprocessingid}/Execute</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Execute Paper Check Processing Fulfillment

  **Documentation**

  This BIAN API path allows you to update and execute the paper check processing fulfillment for a specific paper check processing ID associated with a cheque lock box. It supports the paper cheque processing services offered to corporate customers, enabling the execution of paper check processing tasks for fulfilling a specific check processing request. By using this API, users can trigger the processing of paper checks within a cheque lock box system for corporate customers.

  **Limitations**

  PUT: The name of the path should be:
'/cheque-lock-box/{chequelockboxid}/paper-check-processing/{papercheckprocessingid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>POST: /ChequeLockBox/{chequelockboxid}/CheckClearingandSettlement/Initiate</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Initiate Check Clearing and Settlement Fulfillment

  **Documentation**

  This API path is used to initiate the process of clearing and settling paper cheques within a cheque lock box service provided to corporate customers. By making a POST request to this endpoint with the specified 'chequelockboxid', a new resource is created to start the check clearing and settlement fulfillment process for the specified cheque lock box.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:
'/cheque-lock-box/{chequelockboxid}/check-clearing-and-settlement/initiate'

</details>

<details open>
  <summary><span style='color:red;'>POST: /ChequeLockBox/{chequelockboxid}/LockBoxReportingandIssueResolution/Initiate</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Initiate Lock Box Reporting and Issue Resolution Fulfillment

  **Documentation**

  This API path allows you to create a new resource for initiating lock box reporting and issue resolution fulfillment related to paper cheque processing services for corporate customers. It is used to start the process of handling and resolving issues related to paper cheques received through a lock box service provided by the bank or financial institution.

  **Limitations**

  POST: A more suitable name for the path would be: 

```
POST /cheque-lock-boxes/{chequelockboxid}/lock-box-issues
``` 

This path follows REST best practices by using lowercase letters, separating words with hyphens, and clearly indicating the resource being accessed.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ChequeLockBox/{chequelockboxid}/PaperCheckProcessing/Initiate</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Initiate Paper Check Processing Fulfillment

  **Documentation**

  This API path is used to initiate the paper check processing fulfillment service for a specific cheque lock box identified by `{chequelockboxid}`. In other words, it allows corporate customers to start the process of processing paper checks that have been deposited into a specific lock box. The POST method is used to create a new resource for initiating the paper check processing service.

  **Limitations**

  POST: The name of the path should be:

`/cheque-lock-box/{chequeLockBoxId}/paper-check-processing/initiate`

Following REST best practices, the path should use lowercase letters, separate words with hyphens, and use nouns to represent resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ChequeLockBox/{chequelockboxid}/CheckClearingandSettlement/{checkclearingandsettlementid}/Notify</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Notify Check Clearing and Settlement Fulfillment

  **Documentation**

  This API path called Cheque Lock Box allows you to retrieve information related to the process of notifying corporate customers about the check clearing and settlement fulfillment in the paper cheque processing service. It supports the functionality of informing customers about the status and completion of the clearing and settlement process for their checks.

  **Limitations**

  GET: The RESTful path for the endpoint should be structured as follows: 

```
/ChequeLockBoxes/{chequelockboxId}/CheckClearingAndSettlements/{checkclearingandsettlementId}/Notify
``` 

Following REST best practices, the path should use plural nouns to represent collections of resources and utilize CamelCase for multi-word identifiers.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ChequeLockBox/{chequelockboxid}/LockBoxReportingandIssueResolution/{lockboxreportingandissueresolutionid}/Notify</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Notify Lock Box Reporting and Issue Resolution Fulfillment

  **Documentation**

  This API path retrieves information related to the Notify Lock Box Reporting and Issue Resolution Fulfillment service within the Cheque Lock Box service domain. This service is designed to support corporate customers in processing paper cheques. Specifically, it allows users to view details about a specific Lock Box Reporting and Issue Resolution instance identified by the {lockboxreportingandissueresolutionid} within the broader Cheque Lock Box service identified by {chequelockboxid}.

  **Limitations**

  GET: Based on REST best practices, the name of the path could be:

'/cheque-lock-boxes/{cheque-lock-box-id}/reporting-and-issue-resolutions/{reporting-and-issue-resolution-id}/notify'

</details>

<details open>
  <summary><span style='color:red;'>GET: /ChequeLockBox/{chequelockboxid}/PaperCheckProcessing/{papercheckprocessingid}/Notify</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Notify Paper Check Processing Fulfillment

  **Documentation**

  This API path allows you to retrieve information about the paper check processing fulfillment related to a specific cheque lock box and paper check processing ID. This service is designed to support corporate customers who utilize paper cheque processing services. The "Notify" function is likely used to provide updates or notifications regarding the processing of paper checks within the cheque lock box system.

  **Limitations**

  GET: The name of the path should be:

`/cheque-lock-box/{chequeLockBoxId}/paper-check-processing/{paperCheckProcessingId}/notify`

Following REST best practices, the path should use lowercase letters, separate words with hyphens, and use specific resource names that accurately describe the entities being accessed.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ChequeLockBox/{chequelockboxid}/CheckClearingandSettlement/{checkclearingandsettlementid}/Request</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Request Check Clearing and Settlement Fulfillment

  **Documentation**

  This API path allows you to update an existing request for paper cheque clearing and settlement fulfillment in the Cheque Lock Box service domain for a specific chequelockbox and checkclearingandsettlement. In simpler terms, it allows corporate customers to make changes or updates to their requests related to the processing of paper cheques.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/cheque-lock-box/{chequelockboxid}/check-clearing-and-settlement/{checkclearingandsettlementid}/request' 

In REST API design, it is common to use lowercase letters and hyphens to separate words in the URL path for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ChequeLockBox/{chequelockboxid}/LockBoxReportingandIssueResolution/{lockboxreportingandissueresolutionid}/Request</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Request Lock Box Reporting and Issue Resolution Fulfillment

  **Documentation**

  This BIAN API path allows you to update an existing request for Lock Box Reporting and Issue Resolution Fulfillment in the Cheque Lock Box service domain. It pertains to paper cheque processing services provided to corporate customers.

  **Limitations**

  PUT: The name of the path should be:

`/cheque-lock-boxes/{chequeLockBoxId}/lock-box-reporting-and-issue-resolution/{lockBoxReportingAndIssueResolutionId}/requests` 

Following REST best practices, the path should use lowercase letters, hyphens to separate words, and be descriptive of the resource it represents.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ChequeLockBox/{chequelockboxid}/PaperCheckProcessing/{papercheckprocessingid}/Request</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Request Paper Check Processing Fulfillment

  **Documentation**

  This API path allows you to update an existing paper check processing request for a specific cheque lock box and paper check processing ID. It is used by corporate customers to request fulfillment of paper check processing services within the cheque lock box service domain.

  **Limitations**

  PUT: The name of the path following REST best practices could be: 

'/cheque-lock-box/{chequeLockBoxId}/paper-check-processing/{paperCheckProcessingId}/request'

</details>

<details open>
  <summary><span style='color:red;'>GET: /ChequeLockBox/{chequelockboxid}/CheckClearingandSettlement/{checkclearingandsettlementid}/Retrieve</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Retrieve Check Clearing and Settlement Fulfillment

  **Documentation**

  This API endpoint allows you to retrieve information about paper check clearing and settlement fulfillment services provided to corporate customers within the Cheque Lock Box service domain. You can access details related to a specific check clearing and settlement transaction by providing the relevant IDs in the endpoint path.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/cheque-lock-box/{cheque-lock-box-id}/check-clearing-and-settlement/{check-clearing-and-settlement-id}/retrieve'

</details>

<details open>
  <summary><span style='color:red;'>GET: /ChequeLockBox/{chequelockboxid}/LockBoxReportingandIssueResolution/{lockboxreportingandissueresolutionid}/Retrieve</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Retrieve Lock Box Reporting and Issue Resolution Fulfillment

  **Documentation**

  This BIAN API path allows you to retrieve information about the lock box reporting and issue resolution related to a specific paper cheque processing service for corporate customers. By using this API, you can access details and data associated with the lock box reporting and issue resolution fulfillment process for a particular service instance identified by the provided IDs.

  **Limitations**

  GET: The name of the path should be:

GET /cheque-lock-box/{chequelockboxid}/lock-box-reporting-and-issue-resolution/{lockboxreportingandissueresolutionid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /ChequeLockBox/{chequelockboxid}/PaperCheckProcessing/{papercheckprocessingid}/Retrieve</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Retrieve Paper Check Processing Fulfillment

  **Documentation**

  This BIAN API path allows you to retrieve information about paper check processing fulfillment within the Cheque Lock Box service domain. It is specifically designed for corporate customers who use paper checks for their transactions. By accessing this API path with the appropriate IDs, you can retrieve details related to the processing of paper checks, such as status updates or completion information.

  **Limitations**

  GET: Based on REST best practices, a suitable name for the path '/ChequeLockBox/{chequelockboxid}/PaperCheckProcessing/{papercheckprocessingid}/Retrieve' could be:

GET '/cheque-lock-boxes/{chequelockboxid}/paper-check-processing/{papercheckprocessingid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ChequeLockBox/{chequelockboxid}/CheckClearingandSettlement/{checkclearingandsettlementid}/Update</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Update Check Clearing and Settlement Fulfillment

  **Documentation**

  This BIAN API path is used to update the check clearing and settlement fulfillment for a specific cheque lock box identified by {chequelockboxid} and {checkclearingandsettlementid}. It is designed to support paper cheque processing services provided to corporate customers, allowing for the modification of details related to the clearing and settlement of checks within the designated lock box.

  **Limitations**

  PUT: The name of the path should be:

`PUT /cheque-lock-box/{chequelockboxid}/check-clearing-and-settlement/{checkclearingandsettlementid}`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ChequeLockBox/{chequelockboxid}/LockBoxReportingandIssueResolution/{lockboxreportingandissueresolutionid}/Update</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Update Lock Box Reporting and Issue Resolution Fulfillment

  **Documentation**

  This BIAN API path allows you to update the Lock Box Reporting and Issue Resolution information associated with a specific paper cheque processing service provided to corporate customers. By using a PUT request method, you can modify the details related to a particular lock box reporting and issue resolution within the Cheque Lock Box service domain.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be something like:

'/cheque-lockboxes/{chequeLockBoxId}/lockbox-reporting-and-issue-resolutions/{lockBoxReportingAndIssueResolutionId}/update'

Note that the path should be in lowercase, separate words using hyphens for readability, and include resource identifiers in camelCase format.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ChequeLockBox/{chequelockboxid}/PaperCheckProcessing/{papercheckprocessingid}/Update</span></summary>

  **Description**

  This Service Domain support paper cheque processing services offered to corporate customers Update Paper Check Processing Fulfillment

  **Documentation**

  This BIAN API path allows you to update the details of a paper check processing fulfillment associated with a specific cheque lock box and paper check processing ID for corporate customers. By making a PUT request to this endpoint with the necessary information, you can modify and update the existing paper check processing fulfillment related to the given identifiers.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

PUT /ChequeLockBox/{chequelockboxid}/PaperCheckProcessing/{papercheckprocessingid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
