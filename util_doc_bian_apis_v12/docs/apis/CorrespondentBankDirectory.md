---
id: CorrespondentBankDirectory
title: CorrespondentBankDirectory
---

<h1 style='color:red;'>CorrespondentBankDirectory</h1>

**BIAN Documentation:** [CorrespondentBankDirectory v12](https://app.swaggerhub.com/apis/BIAN-3/CorrespondentBankDirectory/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CorrespondentBankDirectory/Register</span></summary>

  **Description**

  This service domain maintains correspondent bank reference details. This includes correspondent bank payment parameters in particular bank limits and capturing transaction activity to track reciprocity InCR Register a new correspondent bank in the catalog

  **Documentation**

  This API path allows you to register a new correspondent bank in the correspondent bank directory catalog. You can add details such as payment parameters, bank limits, and transaction activity related to the correspondent bank. This API helps in managing and tracking information about correspondent banks for financial transactions and reciprocity monitoring.

  **Limitations**

  POST: The name of the path should be `/correspondent-bank-directory/register` to follow REST best practices. It is recommended to use lowercase letters and hyphens to separate words in the path name for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorrespondentBankDirectory/{correspondentbankdirectoryid}/Update</span></summary>

  **Description**

  This service domain maintains correspondent bank reference details. This includes correspondent bank payment parameters in particular bank limits and capturing transaction activity to track reciprocity UpCR Update details of a correspondent bank in the catalog

  **Documentation**

  This API path allows users to update the details of a correspondent bank in the directory. Users can modify information such as payment parameters, bank limits, and transaction activity for a specific correspondent bank. This update helps in keeping track of the reciprocity and maintaining accurate information about the correspondent banks in the catalog.

  **Limitations**

  PUT: The name of the path following REST best practices should ideally be:

PUT /correspondent-bank-directories/{correspondent-bank-directory-id}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorrespondentBankDirectory/{correspondentbankdirectoryid}/Request</span></summary>

  **Description**

  This service domain maintains correspondent bank reference details. This includes correspondent bank payment parameters in particular bank limits and capturing transaction activity to track reciprocity RqCR Request that an existing entry is updated or revised

  **Documentation**

  This BIAN API path allows you to update or revise information about a correspondent bank in the correspondent bank directory. It includes details such as payment parameters, bank limits, and transaction activity for tracking reciprocity. By making a PUT request to this path with the correspondent bank directory ID, you can specify the changes or updates you want to make to an existing entry in the directory.

  **Limitations**

  PUT: The name of the path should be:

'/correspondent-banks/{correspondentbankdirectoryid}/requests' 

Following REST best practices, it is recommended to use lowercase letters, hyphens instead of underscores, and singular nouns for resource names in the URI path. The resource names should be descriptive and properly represent the data they are related to.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorrespondentBankDirectory/{correspondentbankdirectoryid}/Retrieve</span></summary>

  **Description**

  This service domain maintains correspondent bank reference details. This includes correspondent bank payment parameters in particular bank limits and capturing transaction activity to track reciprocity ReCR Retrieve correspondent bank details from the catalog

  **Documentation**

  This API path allows you to retrieve details about a specific correspondent bank from the correspondent bank directory. It provides information such as payment parameters, bank limits, and transaction activity related to the correspondent bank. This functionality helps track reciprocity and facilitates accessing important details about correspondent banks for banking transactions.

  **Limitations**

  GET: The name of the path should be `/correspondent-banks/{correspondentbankId}`. 

In RESTful API design, it is recommended to use lowercase letters and hyphens to separate words in the URL paths. Additionally, resource names should be in plural form and the path should represent the resource the endpoint is dealing with.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
