---
id: FinancialAccounting
title: FinancialAccounting
---

<h1 style='color:red;'>FinancialAccounting</h1>

**BIAN Documentation:** [FinancialAccounting v12](https://app.swaggerhub.com/apis/BIAN-3/FinancialAccounting/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /FinancialAccounting/Initiate</span></summary>

  **Description**

  The Financial Accounting Service Domain takes in financial facts and based on these, creates accounting instructions that will update the general ledger and sub ledger accounts InCR Initiate a financial accounting log (account)

  **Documentation**

  This API path is used to create a new financial accounting log or account. It takes in financial information as input and generates accounting instructions. These instructions help update the general ledger and sub ledger accounts with the relevant financial information. Essentially, this API initiates a new financial accounting record that tracks financial transactions.

  **Limitations**

  POST: Following REST best practices, the name of the path should be `/financial-accounting/initiate`, using lowercase letters and dashes to separate words. This convention improves readability and consistency in the URL structure.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialAccounting/{financialaccountingid}/Update</span></summary>

  **Description**

  The Financial Accounting Service Domain takes in financial facts and based on these, creates accounting instructions that will update the general ledger and sub ledger accounts UpCR Update details for an active financial account

  **Documentation**

  This API path allows you to update the details for an active financial account within the Financial Accounting Service Domain. By providing the necessary financial information, the API will generate accounting instructions that will then be used to update both the general ledger and sub ledger accounts associated with the specified financial account.

  **Limitations**

  PUT: The name of the path should be `/financial-accounting/{financialAccountId}` instead of `/FinancialAccounting/{financialaccountId}/Update` to follow REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialAccounting/{financialaccountingid}/Retrieve</span></summary>

  **Description**

  The Financial Accounting Service Domain takes in financial facts and based on these, creates accounting instructions that will update the general ledger and sub ledger accounts ReCR Retrieve information about the log

  **Documentation**

  This API path allows you to retrieve information about a specific financial accounting log identified by the financialaccountingid. It is related to the Financial Accounting Service Domain, which processes financial data to create accounting instructions for updating general ledger and sub ledger accounts. By accessing this endpoint with a GET request, you can retrieve details about the log associated with the provided financial accounting ID.

  **Limitations**

  GET: Based on RESTful best practices, the name of the path should be:

/financial-accounting/{financialaccountingid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialAccounting/{financialaccountingid}/LedgerPosting/{ledgerpostingid}/Update</span></summary>

  **Description**

  The Financial Accounting Service Domain takes in financial facts and based on these, creates accounting instructions that will update the general ledger and sub ledger accounts UpBQ Update details of a posting (repair)

  **Documentation**

  This API path allows you to update details of a ledger posting within the Financial Accounting service domain. By providing the financial accounting ID and ledger posting ID, you can make changes to specific accounting instructions related to general ledger and sub ledger accounts. This update operation is used for repairing or modifying existing financial posting details.

  **Limitations**

  PUT: The name of the path should be:

'/FinancialAccounts/{financialaccountid}/LedgerPostings/{ledgerpostingid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialAccounting/{financialaccountingid}/LedgerPosting/{ledgerpostingid}/Capture</span></summary>

  **Description**

  The Financial Accounting Service Domain takes in financial facts and based on these, creates accounting instructions that will update the general ledger and sub ledger accounts CaBQ Post to the financial account

  **Documentation**

  This API path is used to update financial accounting information in a specific ledger posting within the Financial Accounting service domain. The path includes the financial accounting ID and ledger posting ID to identify the specific resources that need to be updated. By using this API, financial facts are processed to generate accounting instructions that will then be used to update the general ledger and sub ledger accounts to ensure accurate financial records.

  **Limitations**

  PUT: The name of the path should be structured in a RESTful manner by using nouns to represent resources and avoiding specific actions or verbs in the path. Based on the path structure you provided, a more RESTful naming convention could be:

"/financial-accounting/{financialaccountingid}/ledger-posting/{ledgerpostingid}/capture"

This path name emphasizes the hierarchy and relationships between the resources while maintaining a clear and descriptive format.

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialAccounting/{financialaccountingid}/LedgerPosting/{ledgerpostingid}/Retrieve</span></summary>

  **Description**

  The Financial Accounting Service Domain takes in financial facts and based on these, creates accounting instructions that will update the general ledger and sub ledger accounts ReBQ Retrieve details of postings from the account

  **Documentation**

  This API path retrieves details of postings from a specific ledger posting within the Financial Accounting service domain. It allows you to access information related to financial transactions and accounting instructions that update the general ledger and sub ledger accounts. By using this API, you can retrieve specific details about a posting in the financial system based on the provided financial accounting ID and ledger posting ID.

  **Limitations**

  GET: The name of the path '/FinancialAccounting/{financialaccountingid}/LedgerPosting/{ledgerpostingid}/Retrieve' following REST best practices could be simplified to:

GET '/financial-accounting/{financialaccountingid}/ledger-posting/{ledgerpostingid}'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
