---
id: CardTransactionCapture
title: CardTransactionCapture
---

<h1 style='color:red;'>CardTransactionCapture</h1>

**BIAN Documentation:** [CardTransactionCapture v12](https://app.swaggerhub.com/apis/BIAN-3/CardTransactionCapture/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /CardTransactionCapture/{cardtransactioncaptureid}/Control</span></summary>

  **Description**

  A distributed facility to capture card transactions at the point of sale CoCR Control the processing of Credit Charge Card Financial Capture Transaction

  **Documentation**

  This BIAN API path allows you to update the control settings for a specific card transaction capture at the point of sale. It provides a way to modify the processing of credit card financial transactions to ensure accuracy and security.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

```
/CardTransactionCaptures/{cardtransactioncaptureid}/Control
```

In this naming convention, the resources are typically named in plural form to indicate that they represent collections of resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardTransactionCapture/{cardtransactioncaptureid}/Exchange</span></summary>

  **Description**

  A distributed facility to capture card transactions at the point of sale EcCR Accept, verify, etc. aspects of Credit Charge Card Financial Capture Transaction processing

  **Documentation**

  This BIAN API path allows you to update an existing card transaction capture by providing the specific ID of the transaction you want to update. It is used to manage card transactions at the point of sale, including functions like accepting, verifying, and handling various aspects of credit card financial transactions.

  **Limitations**

  PUT: The name of the path should be: `/cardtransactioncaptures/{cardtransactioncaptureid}/exchange` 

REST best practices typically suggest using all lowercase letters and using the plural form for resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardTransactionCapture/{cardtransactioncaptureid}/Execute</span></summary>

  **Description**

  A distributed facility to capture card transactions at the point of sale ExCR Execute an available automated action for Credit Charge Card Financial Capture Transaction

  **Documentation**

  This BIAN API path `/CardTransactionCapture/{cardtransactioncaptureid}/Execute` is used to update an existing card transaction capture resource by executing an automated action for a credit charge card financial capture transaction. In simpler terms, it allows you to trigger a specific automated process related to capturing card transactions, such as processing a credit card payment, by providing the ID of the transaction capture.

  **Limitations**

  PUT: The name of the path should be:

'/card-transaction-capture/{cardtransactioncaptureid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CardTransactionCapture/Initiate</span></summary>

  **Description**

  A distributed facility to capture card transactions at the point of sale InCR Instantiate a new Credit Charge Card Financial Capture Transaction

  **Documentation**

  This API path allows you to create a new credit card transaction capture at the point of sale. It enables the initiation of a financial capture transaction for credit card purchases. The API is designed to facilitate processing and recording of card transactions, ensuring accuracy and efficiency.

  **Limitations**

  POST: The name of the path '/CardTransactionCapture/Initiate' following REST best practices should ideally be a noun representing a resource. For example, a more appropriate name for this path could be '/CardTransactions' if it represents a collection of card transactions.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardTransactionCapture/{cardtransactioncaptureid}/Retrieve</span></summary>

  **Description**

  A distributed facility to capture card transactions at the point of sale ReCR Retrieve details about any aspect of Credit Charge Card Financial Capture Transaction

  **Documentation**

  This API path allows you to retrieve details about a specific card transaction capture by providing the unique identifier of the transaction (cardtransactioncaptureid). It is a part of a system that captures card transactions at the point of sale, allowing you to access information related to Credit Charge Card Financial Capture Transactions. This API is used to retrieve specific details or aspects of a transaction that has been processed through the system.

  **Limitations**

  GET: The name of the path should be: 

GET /card-transactions/{cardtransactioncaptureid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardTransactionCapture/{cardtransactioncaptureid}/Request</span></summary>

  **Description**

  A distributed facility to capture card transactions at the point of sale RqCR Request manual intervention or a decision with respect to Credit Charge Card Financial Capture Transaction

  **Documentation**

  This API path allows you to update an existing card transaction capture request by providing the specific ID of the transaction (denoted by {cardtransactioncaptureid}). The purpose of this operation is to request manual intervention or decision-making related to a credit charge card financial capture transaction at the point of sale. In simpler terms, this API allows you to make changes or request human input on a card transaction that was captured electronically at a store or merchant location.

  **Limitations**

  PUT: The most appropriate name for the path would be: 

'/card-transaction-captures/{cardtransactioncaptureid}/request'

Following REST best practices, the path should be in lowercase letters and use hyphens to separate words for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardTransactionCapture/{cardtransactioncaptureid}/Update</span></summary>

  **Description**

  A distributed facility to capture card transactions at the point of sale UpCR Update details relating to Credit Charge Card Financial Capture Transaction

  **Documentation**

  This API path allows you to update details related to a credit card transaction capture at the point of sale. It is used to modify information about a specific credit card transaction identified by its unique ID.

  **Limitations**

  PUT: The name of the path should be '{cardtransactioncaptureid}' since REST best practices recommend using resource identifiers (such as the unique ID of the resource) rather than action words in the URL paths.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardTransactionCapture/{cardtransactioncaptureid}/TransactionConsolidation/{transactionconsolidationid}/Control</span></summary>

  **Description**

  A distributed facility to capture card transactions at the point of sale CoBQ Control the processing of Transaction Consolidation

  **Documentation**

  This API path allows users to update and control the processing of card transactions that have been captured at the point of sale. Specifically, it focuses on managing the transaction consolidation process associated with the identified card transaction capture and control the corresponding operations using the specified ID parameters. The PUT method is used to modify or update existing resources within the system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/CardTransactionCapture/{cardtransactioncaptureid}/TransactionConsolidation/{transactionconsolidationid}/Control
```

This path follows the convention of using nouns to represent resources and utilizing camel case for readability. It includes specific identifiers for the card transaction capture and transaction consolidation resources, which helps in identifying and accessing the desired data in a structured manner.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardTransactionCapture/{cardtransactioncaptureid}/TransactionConsolidation/{transactionconsolidationid}/Exchange</span></summary>

  **Description**

  A distributed facility to capture card transactions at the point of sale EcBQ Accept, verify, etc. aspects of Transaction Consolidation processing

  **Documentation**

  This API path is used to update information related to card transactions captured at the point of sale. It allows for modifying details associated with a specific card transaction capture and its transaction consolidation. This involves processing aspects such as verification and acceptance of the transaction. Essentially, it facilitates managing and updating data related to card transactions in a distributed manner within the system.

  **Limitations**

  PUT: The name of the path should follow RESTful conventions and be descriptive of the resource being accessed. Based on the given path, a suggestion for the name could be:

'/card-transactions/{cardtransactioncaptureid}/consolidations/{transactionconsolidationid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardTransactionCapture/{cardtransactioncaptureid}/TransactionConsolidation/{transactionconsolidationid}/Execute</span></summary>

  **Description**

  A distributed facility to capture card transactions at the point of sale ExBQ Execute an available automated action for Transaction Consolidation

  **Documentation**

  This API path allows you to update an existing transaction consolidation resource within the Card Transaction Capture system. By sending a PUT request to this path with the appropriate IDs for the card transaction capture and transaction consolidation, you can trigger an automated action for transaction consolidation. This action helps to organize and consolidate card transactions that have been captured at the point of sale, streamlining the process for better efficiency and management.

  **Limitations**

  PUT: Based on REST best practices, the name of this path could be '/card-transaction-capture/{cardtransactioncaptureid}/transaction-consolidation/{transactionconsolidationid}/execute'. 

Here are some key points to consider:

1. Use lowercase letters and hyphens to separate words in the path for readability and consistency.
2. Avoid unnecessary capitalization and special characters.
3. The path should be descriptive and accurately represent the resources being accessed.
4. Use singular nouns for resource names

</details>

<details open>
  <summary><span style='color:red;'>POST: /CardTransactionCapture/{cardtransactioncaptureid}/TransactionAuthorization/Initiate</span></summary>

  **Description**

  A distributed facility to capture card transactions at the point of sale InBQ Instantiate a new Transaction Authorization

  **Documentation**

  This API path allows you to create a new Transaction Authorization for a card transaction capture process at a point of sale. It initiates the process of authorizing a card transaction by generating a new authorization for the transaction using a distributed facility.

  **Limitations**

  POST: The name of the path should be:

'/card-transaction-capture/{cardtransactioncaptureid}/transaction-authorization/initiate'

Following REST best practices, it is recommended to use lowercase letters and separate words with hyphens in the path names.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CardTransactionCapture/{cardtransactioncaptureid}/TransactionCapture/Initiate</span></summary>

  **Description**

  A distributed facility to capture card transactions at the point of sale InBQ Instantiate a new Transaction Capture

  **Documentation**

  This API path allows you to create a new transaction capture for card transactions at the point of sale. It is a way to initiate a transaction capture process for a specific card transaction capture ID. This process helps in capturing and processing card transactions at the point of sale using a distributed facility.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

'/card-transaction-captures/{card-transaction-capture-id}/transaction-capture/initiate'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CardTransactionCapture/{cardtransactioncaptureid}/TransactionConsolidation/Initiate</span></summary>

  **Description**

  A distributed facility to capture card transactions at the point of sale InBQ Instantiate a new Transaction Consolidation

  **Documentation**

  This API path initiates the creation of a new Transaction Consolidation in the context of capturing card transactions at the point of sale. When a card transaction is captured, this API call sets up a new Transaction Consolidation process to consolidate and manage the captured transaction data efficiently.

  **Limitations**

  POST: Based on REST best practices, a suitable name for the path you described could be:

'/card-transaction-capture/{cardtransactioncaptureid}/transaction-consolidation/initiate'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CardTransactionCapture/{cardtransactioncaptureid}/TransactionReversal/Initiate</span></summary>

  **Description**

  A distributed facility to capture card transactions at the point of sale InBQ Instantiate a new Transaction Reversal

  **Documentation**

  This API path is used to initiate a new transaction reversal within the context of a card transaction capture process. Essentially, it allows for the creation of a new resource that triggers the reversal of a previous transaction that was captured during a card transaction at a point of sale. This functionality is part of a distributed system designed to handle card transactions efficiently.

  **Limitations**

  POST: The name of the path should be:

```
PUT /card-transaction-capture/{cardtransactioncaptureid}/transaction-reversal
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardTransactionCapture/{cardtransactioncaptureid}/TransactionAuthorization/{transactionauthorizationid}/Retrieve</span></summary>

  **Description**

  A distributed facility to capture card transactions at the point of sale ReBQ Retrieve details about any aspect of Transaction Authorization

  **Documentation**

  This API path (/CardTransactionCapture/{cardtransactioncaptureid}/TransactionAuthorization/{transactionauthorizationid}/Retrieve) allows you to retrieve details about a specific transaction authorization within a card transaction capture process. By providing the IDs of the card transaction capture and transaction authorization, you can gather information about any aspect related to the authorization of the transaction, such as approval status or transaction details. This API provides a way to access and retrieve specific information about transaction authorizations for card transactions captured at the point of sale.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/card-transaction-capture/{cardtransactioncaptureid}/transaction-authorization/{transactionauthorizationid}/retrieve'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardTransactionCapture/{cardtransactioncaptureid}/TransactionCapture/{transactioncaptureid}/Retrieve</span></summary>

  **Description**

  A distributed facility to capture card transactions at the point of sale ReBQ Retrieve details about any aspect of Transaction Capture

  **Documentation**

  This API path `/CardTransactionCapture/{cardtransactioncaptureid}/TransactionCapture/{transactioncaptureid}/Retrieve` is used to retrieve details about a specific transaction capture within a card transaction capture system. By providing the `cardtransactioncaptureid` and `transactioncaptureid` in the URL, users can get information about a particular transaction capture that occurred during a card transaction at a point of sale. The GET method is used to retrieve information about the requested resource, which may include details such as the transaction amount, date, time, and any other relevant information related to the transaction.

  **Limitations**

  GET: Based on REST best practices, the name of the path should preferably be descriptive and focus on the resource being accessed. A possible name for the path could be:
'/card-transactions/{cardtransactioncaptureid}/capture/{transactioncaptureid}/retrieve'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardTransactionCapture/{cardtransactioncaptureid}/TransactionConsolidation/{transactionconsolidationid}/Retrieve</span></summary>

  **Description**

  A distributed facility to capture card transactions at the point of sale ReBQ Retrieve details about any aspect of Transaction Consolidation

  **Documentation**

  This BIAN API path allows you to retrieve details about a transaction consolidation associated with a specific card transaction capture. It is used to get information about how various transactions are consolidated and managed in the system. For example, you can use this path to access specific details or data related to a particular transaction consolidation process within the card transaction capture system.

  **Limitations**

  GET: Based on REST best practices, the name of the path should reflect the resource it represents. Therefore, the name of the path could be something like:

```
/CardTransactionCaptures/{cardtransactioncaptureid}/TransactionConsolidations/{transactionconsolidationid}/RetrieveTransaction
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardTransactionCapture/{cardtransactioncaptureid}/TransactionReversal/{transactionreversalid}/Retrieve</span></summary>

  **Description**

  A distributed facility to capture card transactions at the point of sale ReBQ Retrieve details about any aspect of Transaction Reversal

  **Documentation**

  This API path is for retrieving details about a specific transaction reversal related to a card transaction capture. It allows you to retrieve information about the reversal process for a particular transaction, identified by the provided IDs. This can be useful for tracking and investigating transaction reversals within the card transaction capture system.

  **Limitations**

  GET: Based on REST best practices, the name of the path could be:

'/card-transaction-capture/{cardtransactioncaptureid}/transaction-reversal/{transactionreversalid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardTransactionCapture/{cardtransactioncaptureid}/TransactionAuthorization/{transactionauthorizationid}/Update</span></summary>

  **Description**

  A distributed facility to capture card transactions at the point of sale UpBQ Update details relating to Transaction Authorization

  **Documentation**

  This BIAN API path allows you to update the details related to a transaction that has been authorized during a card transaction capture process. By using a PUT request to this endpoint with the respective IDs for the card transaction capture and transaction authorization, you can modify or add information to the transaction authorization details. This API path is part of a system designed to capture card transactions at the point of sale and manage the authorization process efficiently.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/card-transaction-captures/{cardtransactioncaptureid}/transaction-authorizations/{transactionauthorizationid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardTransactionCapture/{cardtransactioncaptureid}/TransactionCapture/{transactioncaptureid}/Update</span></summary>

  **Description**

  A distributed facility to capture card transactions at the point of sale UpBQ Update details relating to Transaction Capture

  **Documentation**

  This API path allows you to update details related to a specific transaction capture within a card transaction capture process. By using a PUT request, you can modify information about a transaction capture identified by the `transactioncaptureid` under a specific `cardtransactioncaptureid`. This helps in managing and maintaining accurate records of card transactions captured at the point of sale.

  **Limitations**

  PUT: Based on REST best practices, the name for this path should be:

'/cardtransactioncaptures/{cardtransactioncaptureid}/transactioncaptures/{transactioncaptureid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardTransactionCapture/{cardtransactioncaptureid}/TransactionConsolidation/{transactionconsolidationid}/Update</span></summary>

  **Description**

  A distributed facility to capture card transactions at the point of sale UpBQ Update details relating to Transaction Consolidation

  **Documentation**

  This API path is used to update details related to transaction consolidation at the point of sale when capturing card transactions. It allows for making changes to existing transaction consolidation information by specifying the ID of the card transaction capture and the ID of the transaction consolidation to be updated.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/CardTransactionCapture/{cardtransactioncaptureid}/TransactionConsolidation/{transactionconsolidationid}
```

This path represents a hierarchical structure where resources are accessed in a consistent and predictable manner. The "Update" operation should be represented by using the HTTP verb PATCH or PUT on this resource URL.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardTransactionCapture/{cardtransactioncaptureid}/TransactionReversal/{transactionreversalid}/Update</span></summary>

  **Description**

  A distributed facility to capture card transactions at the point of sale UpBQ Update details relating to Transaction Reversal

  **Documentation**

  This BIAN API path allows you to update details related to a transaction reversal within the Card Transaction Capture system. Specifically, you can update information pertaining to a transaction reversal identified by the transactionreversalid within a specific card transaction capture identified by cardtransactioncaptureid. This allows for the modification or correction of transaction reversal details for more accurate record-keeping and management within the system.

  **Limitations**

  PUT: The name of the path should be '/card-transaction-captures/{cardtransactioncaptureid}/transaction-reversals/{transactionreversalid}'.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
