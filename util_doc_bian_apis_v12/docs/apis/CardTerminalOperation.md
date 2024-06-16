---
id: CardTerminalOperation
title: CardTerminalOperation
---

<h1 style='color:red;'>CardTerminalOperation</h1>

**BIAN Documentation:** [CardTerminalOperation v12](https://app.swaggerhub.com/apis/BIAN-3/CardTerminalOperation/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CardTerminalOperation/Initiate</span></summary>

  **Description**

  This service domain handle POS operations including processing, capture and tracking of the transactions originating at the Point of Sale devices. InCR Initiate a card POS network operation session

  **Documentation**

  This API path is used to initiate a card Point of Sale (POS) network operation session. It handles various POS operations such as processing, capturing, and tracking transactions that originate from POS devices. When a POST request is made to this specific path, it creates a new resource to facilitate the initiation of a card POS network operation session.

  **Limitations**

  POST: For a RESTful path that follows best practices, the name of the path '/CardTerminalOperation/Initiate' could be simplified and made more intuitive by utilizing a more descriptive and resource-oriented approach. A more appropriate naming convention could be something like:

```
POST /card-terminals
```

This new naming convention uses HTTP methods like POST to create a new resource, in this case, a card terminal operation. The endpoint '/card-terminals' is more resource-focused and reiterates the

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardTerminalOperation/{cardterminaloperationid}/Update</span></summary>

  **Description**

  This service domain handle POS operations including processing, capture and tracking of the transactions originating at the Point of Sale devices. UpCR Update details of a card POS session

  **Documentation**

  This API path allows you to update the details of a specific card Point of Sale (POS) session identified by the provided cardterminaloperationid. It is used to modify and maintain information related to transactions that occur at POS devices, like processing, capturing, and tracking transactions initiated at the point of sale. This API helps in managing and updating the specifics of a card POS session within the system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
PATCH /card-terminal-operations/{card_terminal_operation_id}
``` 

Here are some of the reasons for this naming convention:
- Using lowercase letters and separating words with dashes improves readability and is a common practice.
- The method `PATCH` is typically used for partial updates to a resource.
- The path parameter should follow a clear and consistent naming convention.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardTerminalOperation/{cardterminaloperationid}/Retrieve</span></summary>

  **Description**

  This service domain handle POS operations including processing, capture and tracking of the transactions originating at the Point of Sale devices. ReCR Retrieve details about the card POS session

  **Documentation**

  This API path allows you to retrieve information about a specific card terminal operation. It is designed to handle various Point of Sale (POS) operations, such as processing, capturing, and tracking transactions made through POS devices. By using this API, you can access details about a card POS session identified by the provided card terminal operation ID.

  **Limitations**

  GET: The path should be named in a way that reflects the resource it is representing. Following REST best practices, the name should be descriptive, specific, and follow a noun-centric approach. 

A suitable name for the path '/CardTerminalOperation/{cardterminaloperationid}/Retrieve' could be:

'/CardTerminalOperations/{cardterminaloperationid}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CardTerminalOperation/{cardterminaloperationid}/Capture/Initiate</span></summary>

  **Description**

  This service domain handle POS operations including processing, capture and tracking of the transactions originating at the Point of Sale devices. InBQ Initiate transaction capture at the POS

  **Documentation**

  This API path allows you to initiate a transaction capture at a Point of Sale (POS) terminal identified by {cardterminaloperationid}. Essentially, it enables the POS device to process, capture, and track transactions that occur at the physical point of sale. Using this API, you can create a new resource to initiate the capture of transaction data from the POS terminal, aiding in the smooth processing of transactions at the point of sale.

  **Limitations**

  POST: Following REST best practices, the name of the path should be:
'/card-terminal-operations/{card-terminal-operation-id}/capture/initiate'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardTerminalOperation/{cardterminaloperationid}/Capture/{captureid}/Update</span></summary>

  **Description**

  This service domain handle POS operations including processing, capture and tracking of the transactions originating at the Point of Sale devices. UpBQ Update details of the card capture transaction

  **Documentation**

  This API path allows you to update the details of a card capture transaction that originated from a Point of Sale device. You can update specific information related to the transaction by making a PUT request to this endpoint using the appropriate identifiers for the card terminal operation and the capture. This operation is part of a service domain that manages various POS operations and helps track and process transactions efficiently.

  **Limitations**

  PUT: Based on RESTful best practices, the name of the path should be:

```plaintext
/CardTerminalOperation/{cardterminaloperationid}/Capture/{captureid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardTerminalOperation/{cardterminaloperationid}/Capture/{captureid}/Request</span></summary>

  **Description**

  This service domain handle POS operations including processing, capture and tracking of the transactions originating at the Point of Sale devices. RqBQ Request manual intervention with a capture transaction

  **Documentation**

  This API path allows you to request manual intervention with a capture transaction for a specific card terminal operation and capture ID. It enables you to update an existing resource related to processing transactions from Point of Sale devices. This intervention may involve human interaction to handle the transaction capture process.

  **Limitations**

  PUT: Following REST best practices, the naming convention for the path should be:

'/card-terminal-operations/{cardterminaloperationid}/captures/{captureid}/request'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardTerminalOperation/{cardterminaloperationid}/Capture/{captureid}/Retrieve</span></summary>

  **Description**

  This service domain handle POS operations including processing, capture and tracking of the transactions originating at the Point of Sale devices. ReBQ Retrieve details about a card capture transaction

  **Documentation**

  This API path allows you to retrieve details about a specific card capture transaction that originated at a Point of Sale device. You would need to provide the `cardterminaloperationid` and `captureid` in the URL to specifically identify which transaction you want information about. The API helps in processing, capturing, and tracking transactions made through POS devices.

  **Limitations**

  GET: A suitable name for this path following REST best practices could be: '/card-terminal-operations/{card_terminal_operation_id}/captures/{capture_id}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CardTerminalOperation/{cardterminaloperationid}/Authorization/Initiate</span></summary>

  **Description**

  This service domain handle POS operations including processing, capture and tracking of the transactions originating at the Point of Sale devices. InBQ Initiate authorization for a card transaction

  **Documentation**

  This API path allows users to initiate authorization for a card transaction through a Point of Sale device. It creates a new resource for processing, capturing, and tracking transactions made using the card terminal system. This service domain handles various Point of Sale operations related to card transactions.

  **Limitations**

  POST: A possible name for the path could be '/card-terminal-operations/{cardterminaloperationid}/authorizations/initiate'. 

This name follows REST best practices by using lowercase letters, separating words with hyphens, and clearly indicating the hierarchy of resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardTerminalOperation/{cardterminaloperationid}/Authorization/{authorizationid}/Request</span></summary>

  **Description**

  This service domain handle POS operations including processing, capture and tracking of the transactions originating at the Point of Sale devices. RqBQ Request manual intervention for a card authorization (e.g. engage specialist)

  **Documentation**

  This API path allows you to update an existing resource related to card terminal operations. Specifically, it is used for requesting manual intervention for a card authorization process. For example, if there is a need to involve a specialist in the authorization of a card transaction, this API can be used to trigger that request.

  **Limitations**

  PUT: The name of the path following REST best practices could be:

`/card-terminal-operations/{card_terminal_operation_id}/authorizations/{authorization_id}/requests`

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardTerminalOperation/{cardterminaloperationid}/Authorization/{authorizationid}/Retrieve</span></summary>

  **Description**

  This service domain handle POS operations including processing, capture and tracking of the transactions originating at the Point of Sale devices. ReBQ Retrieve details about a card authorization transaction

  **Documentation**

  This API path allows you to retrieve details about a card authorization transaction that originated at a Point of Sale device. It is part of a service domain that handles POS operations such as processing, capturing, and tracking transactions. By using this API, you can access specific information related to a transaction, identified by the card terminal operation ID and authorization ID.

  **Limitations**

  GET: Based on REST best practices, the name of the path could be:

'/card-terminals/{card_terminal_id}/authorizations/{authorization_id}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CardTerminalOperation/{cardterminaloperationid}/Batch/Initiate</span></summary>

  **Description**

  This service domain handle POS operations including processing, capture and tracking of the transactions originating at the Point of Sale devices. InBQ Initiate a batch transaction POS capture

  **Documentation**

  This API path allows you to create a new batch transaction for processing Point of Sale (POS) operations at a card terminal. It initiates the capturing and tracking of transactions made at the POS device, enabling the efficient management of multiple transactions in a batch format.

  **Limitations**

  POST: Following REST best practices, the path should use nouns to represent resources and avoid verbs in the endpoint names. Using this guideline, a suitable name for the path would be:

'/batchInitiation/{cardTerminalOperationId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardTerminalOperation/{cardterminaloperationid}/Batch/{batchid}/Update</span></summary>

  **Description**

  This service domain handle POS operations including processing, capture and tracking of the transactions originating at the Point of Sale devices. UpBQ Update details of a transaction batch

  **Documentation**

  This API path allows you to update the details of a transaction batch that was processed through a Point of Sale (POS) device. It is used to make changes or corrections to the information related to a specific batch of transactions. The update can include various details such as transaction amounts, dates, or any other relevant data associated with the batch of transactions.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/card-terminal-operations/{card_terminal_operation_id}/batches/{batch_id}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardTerminalOperation/{cardterminaloperationid}/Batch/{batchid}/Request</span></summary>

  **Description**

  This service domain handle POS operations including processing, capture and tracking of the transactions originating at the Point of Sale devices. RqBQ Request manual intervention for a batch (e.g. adjust scheduling)

  **Documentation**

  This API path allows you to request manual intervention for a specific batch of transactions originating from a Point of Sale device. This could involve tasks such as adjusting scheduling or other manual actions needed for processing, capturing, and tracking transactions. By sending a PUT request to this path with the appropriate identifiers (cardterminaloperationid and batchid), you can initiate the request for manual intervention on the specified batch.

  **Limitations**

  PUT: Following REST best practices, the path should be named as '/card-terminal-operations/{cardterminaloperationid}/batches/{batchid}/requests'. 

Path names should be all lowercase and hyphens should be used to separate words for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardTerminalOperation/{cardterminaloperationid}/Batch/{batchid}/Retrieve</span></summary>

  **Description**

  This service domain handle POS operations including processing, capture and tracking of the transactions originating at the Point of Sale devices. ReBQ Retrieve details about a card capture batch

  **Documentation**

  This BIAN API path allows you to retrieve details about a card capture batch from the Card Terminal Operation service domain. Specifically, when you provide the card terminal operation ID and the batch ID as parameters in the request, this API will return information related to that specific card capture batch. This information may include transaction details, processing status, and other relevant data about transactions originating from Point of Sale devices.

  **Limitations**

  GET: The name of the path should ideally be:

'/card-terminal-operations/{cardTerminalOperationId}/batches/{batchId}' 

Keeping the path in lowercase letters and using plural nouns can help in following REST best practices. Also, consider using hyphens to separate words for better readability.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
