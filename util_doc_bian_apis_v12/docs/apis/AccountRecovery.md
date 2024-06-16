---
id: AccountRecovery
title: AccountRecovery
---

<h1 style='color:red;'>AccountRecovery</h1>

**BIAN Documentation:** [AccountRecovery v12](https://app.swaggerhub.com/apis/BIAN-3/AccountRecovery/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /AccountRecovery/Initiate</span></summary>

  **Description**

  This service domain handles the restructuring of a distressed account (loan) after standard recovery procedures have been exhausted InCR Initiate the account recovery procedure

  **Documentation**

  This API path "/AccountRecovery/Initiate" allows users to initiate the process of restructuring a distressed account, such as a loan, after standard recovery procedures have been unsuccessful. It creates a new resource to start the account recovery procedure for accounts that are in financial distress.

  **Limitations**

  POST: A RESTful naming convention for the path '/AccountRecovery/Initiate' could be '/accounts/recovery/initiate'. This naming convention follows the principle of using lowercase letters, using plural nouns for resources, and using hyphens to separate words.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountRecovery/{accountrecoveryid}/Update</span></summary>

  **Description**

  This service domain handles the restructuring of a distressed account (loan) after standard recovery procedures have been exhausted UpCR Update details of an active account recovery case

  **Documentation**

  This API path allows you to update the details of an active account recovery case by providing the `accountrecoveryid`. This is typically used when standard recovery procedures have been tried but have not been successful in resolving the distressed account (loan) situation. It allows for restructuring the account to potentially recover it and improve its status.

  **Limitations**

  PUT: The appropriate name for the path '/AccountRecovery/{accountrecoveryid}/Update' following REST best practices would be:

PATCH /AccountRecovery/{accountrecoveryid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /AccountRecovery/{accountrecoveryid}/Retrieve</span></summary>

  **Description**

  This service domain handles the restructuring of a distressed account (loan) after standard recovery procedures have been exhausted ReCR Retrieve details about an active account recovery case

  **Documentation**

  This API path allows you to retrieve details about an active account recovery case. It is specifically designed to assist in restructuring distressed accounts, such as loans, after traditional recovery methods have been tried and exhausted. By providing the account recovery ID as a parameter, this API allows you to access information related to the ongoing recovery process for a specific account, helping financial institutions manage and address accounts facing financial difficulties.

  **Limitations**

  GET: The name of the path should be:

'/accounts/{accountId}/recovery'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountRecovery/{accountrecoveryid}/Assessment/{assessmentid}/Update</span></summary>

  **Description**

  This service domain handles the restructuring of a distressed account (loan) after standard recovery procedures have been exhausted UpBQ Update details of an active case assessment

  **Documentation**

  This API endpoint allows users to update the details of an active case assessment related to account recovery. Specifically, it deals with restructuring distressed accounts (loans) after standard recovery procedures have been tried and did not work. By using a PUT request to this path with the appropriate IDs, users can modify the information in the case assessment to help in the recovery process of the account.

  **Limitations**

  PUT: The name of the path `/AccountRecovery/{accountrecoveryid}/Assessment/{assessmentid}/Update` should be named as follows to follow RESTful best practices:

`PUT /account-recoveries/{accountrecoveryid}/assessments/{assessmentid}`

In this naming convention:
- `PUT` method is used to update an existing resource.
- `account-recoveries` and `assessments` are in plural form to represent collections of resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /AccountRecovery/{accountrecoveryid}/Assessment/{assessmentid}/Retrieve</span></summary>

  **Description**

  This service domain handles the restructuring of a distressed account (loan) after standard recovery procedures have been exhausted ReBQ Retrieve details of an active case assessment

  **Documentation**

  This API path `/AccountRecovery/{accountrecoveryid}/Assessment/{assessmentid}/Retrieve` allows you to retrieve details of an active case assessment within the context of restructuring a distressed account, such as a loan, after standard recovery procedures have been tried and failed. By providing the specific `accountrecoveryid` and `assessmentid`, you can access information related to the assessment process for the troubled account.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

`/accounts/{accountID}/assessments/{assessmentID}`

This path follows the pattern of using plural nouns for resources and using specific IDs to identify each resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountRecovery/{accountrecoveryid}/Writedown/{writedownid}/Update</span></summary>

  **Description**

  This service domain handles the restructuring of a distressed account (loan) after standard recovery procedures have been exhausted UpBQ Update details of an active case write-down

  **Documentation**

  This API path allows you to update the details of an active case write-down within an account recovery process for a distressed loan. This means that you can make changes or revisions to the specific information related to reducing the outstanding amount on the loan when the standard recovery methods have not been successful.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/accounts/{accountId}/recovery/{recoveryId}/writedowns/{writedownId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountRecovery/{accountrecoveryid}/Planning/{planningid}/Update</span></summary>

  **Description**

  This service domain handles the restructuring of a distressed account (loan) after standard recovery procedures have been exhausted UpBQ Update details of an active case recovery plan

  **Documentation**

  This BIAN API path allows you to update the details of an active case recovery plan for a specific account recovery and planning ID. It is used in the process of restructuring a distressed account (loan) when standard recovery procedures have not been successful. With this API, you can modify and adjust the recovery plan to better address the specific needs of the distressed account.

  **Limitations**

  PUT: The name of the path should be:

'/accounts/{accountid}/planning/{planningid}/update'

</details>

<details open>
  <summary><span style='color:red;'>GET: /AccountRecovery/{accountrecoveryid}/Planning/{planningid}/Retrieve</span></summary>

  **Description**

  This service domain handles the restructuring of a distressed account (loan) after standard recovery procedures have been exhausted ReBQ Retrieve details of an active case recovery plan

  **Documentation**

  This API path retrieves details about an active case recovery plan for a distressed account (loan) that has gone through standard recovery procedures but still needs restructuring. It helps in managing and monitoring the plan for recovery of the account, providing essential information for facilitating the restructuring process.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be: 

/AccountRecoveries/{accountrecoveryid}/Plannings/{planningid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountRecovery/{accountrecoveryid}/Negotiation/{negotiationid}/Update</span></summary>

  **Description**

  This service domain handles the restructuring of a distressed account (loan) after standard recovery procedures have been exhausted UpBQ Update details of an active case negotiation

  **Documentation**

  This BIAN API path allows for updating the details of an active case negotiation within the context of restructuring a distressed account (loan) after standard recovery procedures have been exhausted. It specifies the path as /AccountRecovery/{accountrecoveryid}/Negotiation/{negotiationid}/Update and uses the PUT method to update an existing resource related to the negotiation of a distressed account.

  **Limitations**

  PUT: Based on RESTful best practices, a suitable name for the path '/AccountRecovery/{accountrecoveryid}/Negotiation/{negotiationid}/Update' could be:

PUT /account-recoveries/{accountrecoveryid}/negotiations/{negotiationid}

This path communicates that a PUT request should be used to update a specific negotiation within an account recovery resource, following the principles of RESTful design.

</details>

<details open>
  <summary><span style='color:red;'>GET: /AccountRecovery/{accountrecoveryid}/Negotiation/{negotiationid}/Retrieve</span></summary>

  **Description**

  This service domain handles the restructuring of a distressed account (loan) after standard recovery procedures have been exhausted ReBQ Retrieve details of an active case negotiation

  **Documentation**

  This API path, `/AccountRecovery/{accountrecoveryid}/Negotiation/{negotiationid}/Retrieve`, is used to retrieve information about an active negotiation related to a distressed account or loan that is undergoing restructuring after standard recovery procedures have been unsuccessful. It allows users to access details about a specific negotiation within a particular account recovery case, specified by the `accountrecoveryid` and `negotiationid` parameters.

  **Limitations**

  GET: Based on REST best practices, the name of the path could be: 

'/accounts/{accountId}/recoveries/{recoveryId}/negotiations/{negotiationId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AccountRecovery/{accountrecoveryid}/Restructuring/{restructuringid}/Update</span></summary>

  **Description**

  This service domain handles the restructuring of a distressed account (loan) after standard recovery procedures have been exhausted UpBQ Update details of case restructuring tasks

  **Documentation**

  This API path allows you to update the details of case restructuring tasks for a distressed account (loan) after all standard recovery procedures have been tried and failed. It is used to modify and keep the information related to restructuring efforts on a specific account recovery case.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/AccountRecovery/{accountrecoveryid}/Restructuring/{restructuringid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /AccountRecovery/{accountrecoveryid}/Restructuring/{restructuringid}/Retrieve</span></summary>

  **Description**

  This service domain handles the restructuring of a distressed account (loan) after standard recovery procedures have been exhausted ReBQ Retrieve details of case restructuring tasks

  **Documentation**

  This API path allows you to retrieve information about the restructuring tasks associated with a distressed account (loan) that has undergone standard recovery procedures and still needs further restructuring. By providing the specific account recovery ID and restructuring ID, you can access details about the tasks involved in restructuring the account to help it recover from financial distress.

  **Limitations**

  GET: The name of the path should be `/account-recovery/{accountRecoveryId}/restructuring/{restructuringId}/retrieve`.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
