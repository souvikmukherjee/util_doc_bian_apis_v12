---
id: ECMAndDCM
title: ECMAndDCM
---

<h1 style='color:red;'>ECMAndDCM</h1>

**BIAN Documentation:** [ECMAndDCM v12](https://app.swaggerhub.com/apis/BIAN-3/ECMAndDCM/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /ECMAndDCM/Initiate</span></summary>

  **Description**

  Supports the specification, pricing and issuance of equity and debt (bond) primary capital market products for corporate financing services InCR initiate an ECM And DCM transaction for a corporate customer

  **Documentation**

  This API path allows users to initiate a new ECM (Equity Capital Market) and DCM (Debt Capital Market) transaction for a corporate customer. It supports the process of specifying, pricing, and issuing equity and debt (bond) primary capital market products for corporate financing services.

  **Limitations**

  POST: A more appropriate name for the path '/ECMAndDCM/Initiate' that follows REST best practices could be '/ecm-dcm/initiate'. This name uses all lowercase letters, separates words with hyphens, and represents a clear and concise resource URI.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ECMAndDCM/{ecmanddcmid}/Update</span></summary>

  **Description**

  Supports the specification, pricing and issuance of equity and debt (bond) primary capital market products for corporate financing services UpCR Update details of an active ECM And DCM transaction

  **Documentation**

  This API path "/ECMAndDCM/{ecmanddcmid}/Update" allows users to update details of an active Equity Capital Market (ECM) and Debt Capital Market (DCM) transaction. It enables the modification of information related to the specification, pricing, and issuance of equity and debt (bond) products for corporate financing services. Specifically, it allows for updating specific details of a transaction identified by the "ecmanddcmid." This can be useful for maintaining accuracy and relevance of transaction data in ECM and DCM processes.

  **Limitations**

  PUT: The name of the path should be something descriptive and indicative of the resource being updated. Following REST best practices, a suitable name for the path could be:

PATCH /ECMAndDCM/{ecmanddcmid} 

This path reflects the intent of updating the resource identified by {ecmanddcmid} within the ECMAndDCM collection using the HTTP method PATCH.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ECMAndDCM/{ecmanddcmid}/Request</span></summary>

  **Description**

  Supports the specification, pricing and issuance of equity and debt (bond) primary capital market products for corporate financing services RqCR Request manual intervention to an active ECM And DCM transaction

  **Documentation**

  This API path allows you to make a request for manual intervention in an active equity and debt (bond) primary capital market transaction that is being handled by ECM And DCM services. You can update an existing transaction by specifying and pricing equity and debt products for corporate financing purposes with manual intervention.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

`/ecm-and-dcm/{ecmanddcmid}/requests` 

This follows the convention of using lowercase letters, using hyphens to separate words in the path, and using plural nouns for collections of resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ECMAndDCM/{ecmanddcmid}/Retrieve</span></summary>

  **Description**

  Supports the specification, pricing and issuance of equity and debt (bond) primary capital market products for corporate financing services ReCR Retrieve details about an active ECM And DCM transaction

  **Documentation**

  This BIAN API path allows users to retrieve information about an active ECM (Equity Capital Market) and DCM (Debt Capital Market) transaction by specifying the unique ID associated with that transaction. This API supports the specification, pricing, and issuance of equity and debt (bond) primary capital market products for corporate financing services. It provides details about the transaction related to equity and debt capital markets, enabling users to access essential information about ongoing ECM and DCM activities.

  **Limitations**

  GET: A suitable name for the path '/ECMAndDCM/{ecmanddcmid}/Retrieve' following REST best practices could be:

```
GET /ecm-and-dcm/{ecmanddcmid}
``` 

This name avoids unnecessary capitalization, uses lowercase letters, and uses hyphens to separate words for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ECMAndDCM/{ecmanddcmid}/InstrumentDefinition/{instrumentdefinitionid}/Update</span></summary>

  **Description**

  Supports the specification, pricing and issuance of equity and debt (bond) primary capital market products for corporate financing services UpBQ Update details of the ECM And DCM instrument specification

  **Documentation**

  This API path allows you to update the details of a specific instrument definition within the ECM And DCM (Equity Capital Market and Debt Capital Market) primary capital market products. It supports specifying, pricing, and issuing equity and debt financial products for corporate financing services. By using the PUT method with the provided IDs, you can make updates to the instrument details within the ECM And DCM framework.

  **Limitations**

  PUT: The name of the path should be `/ecm-and-dcm/{ecmanddcmid}/instrument-definition/{instrumentdefinitionid}/update` in kebab case to follow REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ECMAndDCM/{ecmanddcmid}/InstrumentDefinition/{instrumentdefinitionid}/Request</span></summary>

  **Description**

  Supports the specification, pricing and issuance of equity and debt (bond) primary capital market products for corporate financing services RqBQ Request manual intervention to the instrument definition

  **Documentation**

  This API path allows users to make a request for manual intervention to the instrument definition for equity and debt primary capital market products related to corporate financing services within the ECM and DCM context. Essentially, it provides a way to trigger a manual review or adjustment to the details of a specific financial instrument within the primary capital market product issuance process. This could involve changes to specifications, pricing, or other details that require human intervention.

  **Limitations**

  PUT: A possible RESTful name for the path you mentioned could be:

'/ecm-and-dcm/{ecmanddcmid}/instrument-definition/{instrumentdefinitionid}/request'

</details>

<details open>
  <summary><span style='color:red;'>GET: /ECMAndDCM/{ecmanddcmid}/InstrumentDefinition/{instrumentdefinitionid}/Retrieve</span></summary>

  **Description**

  Supports the specification, pricing and issuance of equity and debt (bond) primary capital market products for corporate financing services ReBQ Retrieve details about the ECM And DCM instrument definition

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific instrument definition related to equity and debt (bond) primary capital market products used in corporate financing services. By providing the appropriate IDs for the ECM And DCM and the instrument definition, you can access information about the specifications, pricing, and issuance of these financial products.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/ecm-and-dcm/{ecmanddcmid}/instrument-definition/{instrumentdefinitionid}/retrieve'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ECMAndDCM/{ecmanddcmid}/Prospectus/{prospectusid}/Update</span></summary>

  **Description**

  Supports the specification, pricing and issuance of equity and debt (bond) primary capital market products for corporate financing services UpBQ Update details of the ECM And DCM prospectus

  **Documentation**

  This API path allows you to update the details of a prospectus related to equity and debt primary capital market products for corporate financing services within the ECM (Equity Capital Market) and DCM (Debt Capital Market) framework. By using a PUT request, you can modify existing information related to the prospectus identified by {prospectusid} for a specific ECM and DCM capital market product identified by {ecmanddcmid}.

  **Limitations**

  PUT: A good name for the path '/ECMAndDCM/{ecmanddcmid}/Prospectus/{prospectusid}/Update' while following REST best practices could be:

PUT /ecm-dcm/{ecmanddcmid}/prospectus/{prospectusid}

This naming convention follows the recommended practices for RESTful APIs, such as using HTTP methods like PUT to indicate updating resources and using lowercase letters for improved readability.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ECMAndDCM/{ecmanddcmid}/Prospectus/{prospectusid}/Request</span></summary>

  **Description**

  Supports the specification, pricing and issuance of equity and debt (bond) primary capital market products for corporate financing services RqBQ Request manual intervention with the prospectus development

  **Documentation**

  This API path is used to request manual intervention in the development of a prospectus for equity and debt (bond) primary capital market products. It allows users to update an existing resource by specifying, pricing, and issuing these products for corporate financing services. The manual intervention is requested in order to ensure that the prospectus development meets specific requirements or needs additional input or review.

  **Limitations**

  PUT: A suitable name for the described path following REST best practices would be:

'/ecm-and-dcm/{ecm-and-dcm-id}/prospectus/{prospectus-id}/request'

</details>

<details open>
  <summary><span style='color:red;'>GET: /ECMAndDCM/{ecmanddcmid}/Prospectus/{prospectusid}/Retrieve</span></summary>

  **Description**

  Supports the specification, pricing and issuance of equity and debt (bond) primary capital market products for corporate financing services ReBQ Retrieve details about the ECM And DCM prospectus development

  **Documentation**

  This BIAN API path allows you to retrieve details about the prospectus development for equity and debt primary capital market products in the ECM and DCM services. It supports accessing information related to the specification, pricing, and issuance of these financial products for corporate financing services. By providing the specific ECM And DCM ID and prospectus ID, you can retrieve relevant details about the prospectus development process.

  **Limitations**

  GET: A suitable name for this path following REST best practices could be:

`GET /ecm-and-dcm/{ecmanddcmid}/prospectus/{prospectusid}`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ECMAndDCM/{ecmanddcmid}/Placement/{placementid}/Update</span></summary>

  **Description**

  Supports the specification, pricing and issuance of equity and debt (bond) primary capital market products for corporate financing services UpBQ Update details of ECM And DCM placement activity

  **Documentation**

  This BIAN API path allows users to update the details of a specific placement activity within the ECM (Equity Capital Market) and DCM (Debt Capital Market) primary capital market products for corporate financing services. Users can specify, price, and issue equity and debt products such as bonds. The "PUT" method is used to update existing information related to the placement activity, enabling users to modify and manage the details of ECM and DCM placements effectively.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

`/ecm-dcm/{ecmanddcmid}/placement/{placementid}/update`

In this naming convention, the path parameters are in lowercase and separated by hyphens for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ECMAndDCM/{ecmanddcmid}/Placement/{placementid}/Request</span></summary>

  **Description**

  Supports the specification, pricing and issuance of equity and debt (bond) primary capital market products for corporate financing services RqBQ Request manual intervention in the placement activity

  **Documentation**

  This API path allows you to update an existing resource related to the specification, pricing, and issuance of equity and debt primary capital market products for corporate financing services in the ECM and DCM domain. Specifically, it allows you to request manual intervention in the placement activity by making a PUT request to update certain information associated with a placement within the ECM and DCM process.

  **Limitations**

  PUT: The name of the path should be:

GET /ecm-and-dcm/{ecmanddcmid}/placements/{placementid}/requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /ECMAndDCM/{ecmanddcmid}/Placement/{placementid}/Retrieve</span></summary>

  **Description**

  Supports the specification, pricing and issuance of equity and debt (bond) primary capital market products for corporate financing services ReBQ Retrieve details about the ECM And DCM placement actions

  **Documentation**

  This BIAN API path allows you to retrieve details about placement actions related to equity and debt (bond) primary capital market products within the ECM And DCM (Equity Capital Market and Debt Capital Market) category. You can access specific information about a placement identified by its unique IDs, including specifications, pricing, and issuance details for corporate financing services.

  **Limitations**

  GET: A possible name for this path following REST best practices could be:

GET /ecm-dcm/{ecmanddcmid}/placement/{placementid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
