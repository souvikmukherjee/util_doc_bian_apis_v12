---
id: PaymentRailOperations
title: PaymentRailOperations
---

<h1 style='color:red;'>PaymentRailOperations</h1>

**BIAN Documentation:** [PaymentRailOperations v12](https://app.swaggerhub.com/apis/BIAN-3/PaymentRailOperations/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /PaymentRailOperations/{paymentrailoperationsid}/Control</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Control Payment Rail Operating Session

  **Documentation**

  This API path allows you to update and control the operational sessions related to payment rail operations. It manages the interactions with payment service providers, formatting outbound transactions, routing inbound transactions, and handling net payments through holding account facilities during scheduled operating sessions. By using this endpoint, you can make changes and manage the operations of payment rail sessions effectively.

  **Limitations**

  PUT: Based on REST best practices, the path '/PaymentRailOperations/{paymentrailoperationsid}/Control' should be named as '/payment-rail-operations/{paymentrailoperationsid}/controls'. It is recommended to use lowercase letters and hyphens to separate words in the path for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentRailOperations/{paymentrailoperationsid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Exchange Payment Rail Operating Session

  **Documentation**

  This API path allows users to update an existing resource related to Payment Rail Operations. Specifically, it pertains to the operational interaction with payment service providers. It involves formatting outgoing transactions and directing incoming transactions during planned operational sessions. Additionally, it connects to holding account facilities for managing net payments within the Payment Rail Operating Session.

  **Limitations**

  PUT: The RESTful path name for the resource should reflect the resource itself. Based on the information given, a suitable name for the path '/PaymentRailOperations/{paymentrailoperationsid}/Exchange' following RESTful best practices would be:

'/PaymentRailOperations/{paymentrailoperationsid}/Exchanges'

This naming convention conveys that the resource represents multiple exchanges related to a specific payment rail operation identified by {paymentrailoperationsid}.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentRailOperations/{paymentrailoperationsid}/Execute</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Execute Payment Rail Operating Session

  **Documentation**

  This BIAN API path allows you to trigger the execution of a payment rail operating session identified by a specific payment rail operation ID. This operation involves managing interactions with payment service providers, formatting outgoing transactions, routing incoming transactions, and handling net payments through holding account facilities during the scheduled operating session. By calling this API with the appropriate details, you can initiate the necessary actions for processing payments efficiently and securely.

  **Limitations**

  PUT: Based on REST best practices, the recommended name for the path '/PaymentRailOperations/{paymentrailoperationsid}/Execute' could be:

```
POST /PaymentRailOperations/{paymentrailoperationsid}/execution
```

This name follows the convention of using nouns for resources and using specific actions as part of the URI to represent the operation being performed. By using `execution` instead of `execute`, it helps to indicate that the action is being triggered for a specific resource identified by `paymentrailoperations

</details>

<details open>
  <summary><span style='color:red;'>POST: /PaymentRailOperations/Initiate</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Initiate Payment Rail Operating Session

  **Documentation**

  This API path allows you to start a new operating session for payment rail operations. It involves managing the communication with payment service providers, arranging transactions going out, and receiving incoming transactions. This also involves connecting with holding account services for processing net payments. By initiating this operation session, you can streamline the handling of payment transactions through the payment rail system.

  **Limitations**

  POST: Following REST best practices, the path '/PaymentRailOperations/Initiate' should be renamed to '/payment-rails/transactions'. 

This name aligns better with REST conventions by using lowercase letters, separating words with hyphens, and focusing on the resource being interacted with ('transactions' in this case).

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentRailOperations/{paymentrailoperationsid}/Notify</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Notify Payment Rail Operating Session

  **Documentation**

  This API path allows you to retrieve information on notifying a payment rail operating session identified by a specific ID. It relates to the operational interaction with payment service providers for processing outbound and inbound transactions during scheduled operating sessions. Additionally, it connects to holding account services for managing net payment transactions.

  **Limitations**

  GET: The name of the path should be:

```
/PaymentRailOperations/{paymentrailoperationsid}/notifications
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentRailOperations/{paymentrailoperationsid}/Request</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Request Payment Rail Operating Session

  **Documentation**

  This API path allows you to update an existing resource related to Payment Rail Operations. Specifically, it is used to request a Payment Rail Operating Session by providing the ID of the payment rail operations. This operation facilitates the interaction with payment service providers, formats outbound payment transactions, routes incoming transactions, and manages payments through holding account facilities.

  **Limitations**

  PUT: The name of the path should be '/payment-rail-operations/{paymentrailoperationsid}/request' following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentRailOperations/{paymentrailoperationsid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Retrieve Payment Rail Operating Session

  **Documentation**

  This API path allows you to retrieve information related to a specific payment rail operating session. It provides details about how the system interacts with payment service providers to process outgoing transactions and route incoming transactions. Additionally, it includes connections to holding account facilities for managing net payments. By using this API, you can access information about the operations and transactions conducted within a particular payment rail operating session.

  **Limitations**

  GET: The name of the path should be:

'/payment-rail-operations/{paymentrailoperationsid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentRailOperations/{paymentrailoperationsid}/Update</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Update Payment Rail Operating Session

  **Documentation**

  This API path allows you to update an existing Payment Rail Operating Session. This session manages the communication with payment service providers, processes outbound and inbound transactions, and connects to holding account facilities for handling net payments. By using this API, you can make changes or updates to the operation of the payment rail system during its scheduled operating sessions.

  **Limitations**

  PUT: The name of the path should be:

```
PUT /paymentrailoperations/{paymentrailoperationsid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentRailOperations/{paymentrailoperationsid}/InboundTransaction/{inboundtransactionid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Exchange Inbound Transaction Function

  **Documentation**

  This API path is used to update an existing inbound transaction associated with a specific payment rail operation. It involves formatting outbound transactions, routing inbound transactions, and linking to holding account facilities for processing net payments. The PUT method is used to modify or exchange information related to the inbound transaction within the specified payment rail operation.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

`/payment-rails/{paymentrailoperationsid}/inbound-transactions/{inboundtransactionid}/exchange`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentRailOperations/{paymentrailoperationsid}/OutboundTransaction/{outboundtransactionid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Exchange Outbound Transaction Function

  **Documentation**

  This API path allows you to update an existing outbound transaction related to payment rail operations. It involves interacting with payment service providers, formatting transactions, and routing them during operating sessions. The function also manages holding account facilities for processing net payments.

  **Limitations**

  PUT: Based on REST best practices, the name for this path should be: 
`/payment-rail-operations/{paymentrailoperationsid}/outbound-transactions/{outboundtransactionid}/exchange`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentRailOperations/{paymentrailoperationsid}/PaymentAccountReconciliation/{paymentaccountreconciliationid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Exchange Payment Account Reconciliation Function

  **Documentation**

  This BIAN API path allows you to update an existing resource related to the Payment Rail Operations service domain. Specifically, it focuses on the Payment Account Reconciliation function within Payment Rail Operations. By using a PUT method, you can make changes or updates to the Exchange Payment Account Reconciliation aspect, which involves managing transactions with payment service providers, formatting outgoing transactions, routing incoming transactions, and handling payment accounts for reconciling net payments.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be structured in a way that conveys the resource hierarchy and actions being performed. Here is a suggested path name following REST conventions:

`/payment-rail-operations/{paymentrailoperationsid}/payment-account-reconciliation/{paymentaccountreconciliationid}/exchange`

In this structure, all words are in lowercase, separated by hyphens to enhance readability and maintain consistency. The path communicates the relationships between the resources and the action being performed.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentRailOperations/{paymentrailoperationsid}/PaymentClearingandSettlement/{paymentclearingandsettlementid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Exchange Payment Clearing and Settlement Function

  **Documentation**

  This API path allows you to update and manage the process of payment clearing and settlement within the Payment Rail Operations service domain. It involves formatting outgoing transactions, routing incoming transactions, and linking to holding account facilities for handling net payments. This API helps facilitate the exchange of payments, ensuring they are processed correctly and settled efficiently.

  **Limitations**

  PUT: The name of the path should be: 
'/payment-rail-operations/{payment_rail_operations_id}/payment-clearing-and-settlement/{payment_clearing_and_settlement_id}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentRailOperations/{paymentrailoperationsid}/InboundTransaction/{inboundtransactionid}/Execute</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Execute Inbound Transaction Function

  **Documentation**

  This API path is used to execute an inbound transaction within the Payment Rail Operations service domain. It specifically updates an existing resource related to inbound transactions. The function handles interactions with payment service providers, formats outbound transactions, routes inbound transactions, and manages holding account facilities for net payment transactions during scheduled operating sessions.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/PaymentRailOperations/{paymentrailoperationsid}/InboundTransaction/{inboundtransactionid}/Execution

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentRailOperations/{paymentrailoperationsid}/OutboundTransaction/{outboundtransactionid}/Execute</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Execute Outbound Transaction Function

  **Documentation**

  This API path allows you to update and execute an existing outbound transaction within the Payment Rail Operations service domain. It handles interactions with payment service providers, formats outbound transactions, routes inbound transactions, and links to holding account facilities for managing payments. By using this API, you can trigger the execution of a specific outbound transaction identified by a unique ID.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be structured in a noun-centric way that represents the resource being acted upon. 

A suggestion for the path name could be:
'/payments/{paymentId}/outboundTransactions/{transactionId}/execute' 

This name is descriptive and follows the convention of using lowercase letters and hyphens to separate words in the path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentRailOperations/{paymentrailoperationsid}/PaymentAccountReconciliation/{paymentaccountreconciliationid}/Execute</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Execute Payment Account Reconciliation Function

  **Documentation**

  This API path allows you to update and execute the Payment Account Reconciliation function within the Payment Rail Operations service domain. It involves handling interactions with payment service providers to format outbound transactions and route inbound transactions as scheduled. Additionally, it connects to holding account facilities for managing net payments. By making a PUT request to this path with the appropriate IDs, you can trigger the execution of the Payment Account Reconciliation function.

  **Limitations**

  PUT: The name of the path should be:

```
/PaymentRailOperations/{paymentrailoperationsid}/PaymentAccountReconciliation/{paymentaccountreconciliationid}/Execution
``` 

This path follows REST best practices by using nouns to represent resources and using singular nouns for resource names.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentRailOperations/{paymentrailoperationsid}/PaymentClearingandSettlement/{paymentclearingandsettlementid}/Execute</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Execute Payment Clearing and Settlement Function

  **Documentation**

  This API path is used to execute the payment clearing and settlement function within the Payment Rail Operations service domain. It involves updating an existing resource related to a specific payment rail operations ID and a payment clearing and settlement ID. This function manages the operational communication with payment service providers to format outgoing transactions and route incoming transactions. It also connects to holding account facilities for processing net payments during scheduled operating sessions.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be structured to convey the resource and action being taken. 

A more suitable name for the path '/PaymentRailOperations/{paymentrailoperationsid}/PaymentClearingandSettlement/{paymentclearingandsettlementid}/Execute' following REST best practices could be: 

'/payment-rail-operations/{paymentrailoperationsid}/payment-clearing-settlement/{paymentclearingandsettlementid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>POST: /PaymentRailOperations/{paymentrailoperationsid}/InboundTransaction/Initiate</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Initiate Inbound Transaction Function

  **Documentation**

  This API path is used to initiate an inbound transaction within the Payment Rail Operations service domain. It allows for creating a new resource related to handling operational interactions with payment service providers. This process involves formatting outbound transactions and routing inbound transactions during specified operating sessions. Additionally, it integrates with holding account facilities for managing net payment transactions. The "Initiate Inbound Transaction Function" essentially kicks off the process of receiving and processing incoming transactions within the payment rail operations system.

  **Limitations**

  POST: Following REST best practices, the name of the path should be:

```
/PaymentRailOperations/{paymentrailoperationsid}/InboundTransactions
```

</details>

<details open>
  <summary><span style='color:red;'>POST: /PaymentRailOperations/{paymentrailoperationsid}/OutboundTransaction/Initiate</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Initiate Outbound Transaction Function

  **Documentation**

  This API path initiates the process of creating a new outbound transaction within the Payment Rail Operations service domain. It specifically handles interactions with payment service providers to format outbound transactions and route inbound transactions during scheduled operating sessions. Additionally, it connects to holding account facilities for managing net payment processing. The "Initiate Outbound Transaction" function triggers the start of setting up a new outbound transaction for processing within this system.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

'/payment-rail-operations/{payment-rail-operations-id}/outbound-transactions/initiate'

</details>

<details open>
  <summary><span style='color:red;'>POST: /PaymentRailOperations/{paymentrailoperationsid}/PaymentAccountReconciliation/Initiate</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Initiate Payment Account Reconciliation Function

  **Documentation**

  This API path allows you to initiate a payment account reconciliation function within the Payment Rail Operations service domain. It helps manage the interface with payment service providers, processes outbound and inbound transactions, and ensures proper routing of these transactions during operating sessions. Additionally, it facilitates the handling of net payments through linking to holding account facilities. By using this API, you can create a new resource to initiate the payment account reconciliation process.

  **Limitations**

  POST: Following RESTful best practices, the name of the path should be:

```
/PaymentRailOperations/{paymentrailoperationsid}/PaymentAccountReconciliations
```

</details>

<details open>
  <summary><span style='color:red;'>POST: /PaymentRailOperations/{paymentrailoperationsid}/PaymentClearingandSettlement/Initiate</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Initiate Payment Clearing and Settlement Function

  **Documentation**

  This API path allows users to initiate the process of clearing and settling payments through a payment rail system. It involves formatting outgoing transactions to payment service providers and routing incoming transactions. This API also links to holding account facilities for managing net payment processing. By using this API, users can create new resources to facilitate payment clearing and settlement functions within the designated service domain.

  **Limitations**

  POST: Based on REST best practices, the name of the path should reflect the resource being acted upon. In this case, the resource being acted upon is a payment clearing and settlement process initiated for a specific payment rail operations ID. Therefore, the name of the path could be:

`/PaymentRailOperations/{paymentrailoperationsid}/PaymentClearingAndSettlement`

This path indicates that it is specifically for initiating the payment clearing and settlement process related to a particular payment rail operations ID.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentRailOperations/{paymentrailoperationsid}/InboundTransaction/{inboundtransactionid}/Notify</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Notify Inbound Transaction Function

  **Documentation**

  This API path allows users to retrieve information about a specific inbound transaction related to a particular payment rail operation. The API facilitates the communication with payment service providers, formats transactions, and routes them during operational sessions. It also manages interactions with holding account facilities for processing net payments. The "Notify Inbound Transaction" function within this API serves to inform users about incoming transactions for further processing and handling.

  **Limitations**

  GET: The name of the path should be:

'/payment-rail-operations/{payment-rail-operations-id}/inbound-transactions/{inbound-transaction-id}/notify'

Following REST best practices, the path should be in lowercase, use hyphens to separate words, and include only nouns to represent resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentRailOperations/{paymentrailoperationsid}/OutboundTransaction/{outboundtransactionid}/Notify</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Notify Outbound Transaction Function

  **Documentation**

  This API path allows users to retrieve information about notifying an outbound transaction within the Payment Rail Operations service domain. It is specifically related to formatting and routing outbound transactions to payment service providers during scheduled operating sessions. This function may also involve linking to holding account facilities for managing net payments.

  **Limitations**

  GET: The name of the path should be:

/PaymentRailOperations/{paymentrailoperationsid}/OutboundTransaction/{outboundtransactionid}/Notify

This path follows REST best practices by using nouns for resource names and URIs that are hierarchical and use of path parameters to identify specific resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentRailOperations/{paymentrailoperationsid}/PaymentAccountReconciliation/{paymentaccountreconciliationid}/Notify</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Notify Payment Account Reconciliation Function

  **Documentation**

  This API path is used to retrieve information related to the notification of payment account reconciliation within the Payment Rail Operations service domain. It specifically focuses on the handling of operational interactions with payment service providers, the formatting of outbound transactions, routing inbound transactions, and linking to holding account facilities during scheduled operating sessions. By making a GET request to this path with the appropriate IDs, you can access details about the notification process for payment account reconciliation.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

```
/PaymentRailOperations/{paymentrailoperationsid}/PaymentAccountReconciliation/{paymentaccountreconciliationid}/Notify
```

This path reflects the resource hierarchy and uses plural nouns for resource names.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentRailOperations/{paymentrailoperationsid}/PaymentClearingandSettlement/{paymentclearingandsettlementid}/Notify</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Notify Payment Clearing and Settlement Function

  **Documentation**

  This API path allows you to retrieve information about the notification function related to payment clearing and settlement within the Payment Rail Operations service domain. It helps in managing interactions with payment service providers, processing outbound and inbound transactions, and facilitating the handling of net payments. The Notify function notifies relevant parties about the clearing and settlement of payments, ensuring smooth operations during scheduled payment sessions.

  **Limitations**

  GET: Based on REST best practices, a more appropriate naming for this path would be:

'/payment-rail-operations/{paymentRailOperationsId}/payment-clearing-and-settlement/{paymentClearingAndSettlementId}/notify'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentRailOperations/{paymentrailoperationsid}/InboundTransaction/{inboundtransactionid}/Request</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Request Inbound Transaction Function

  **Documentation**

  This BIAN API path is used to update an existing inbound transaction request under the Payment Rail Operations service domain. It specifies the PUT method, which means that it is used to make changes or updates to the existing inbound transaction identified by the inbound transaction ID within the specified Payment Rail Operations ID. This API function facilitates the handling of transactions with payment service providers, formatting outbound transactions, routing inbound transactions, and managing net payment handling through holding account facilities during scheduled operating sessions.

  **Limitations**

  PUT: Following REST best practices, the name of the path could be "/payment-rail-operations/{paymentRailOperationsId}/inbound-transactions/{inboundTransactionId}/requests". 

Key principles to consider in naming the path include using lowercase characters, separating words with hyphens, using plural nouns for collections, using singular nouns for individual resources, and organizing resources hierarchically.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentRailOperations/{paymentrailoperationsid}/OutboundTransaction/{outboundtransactionid}/Request</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Request Outbound Transaction Function

  **Documentation**

  This API path allows you to update an existing outbound transaction request within the Payment Rail Operations service domain. The service domain is responsible for managing the communication with payment service providers, formatting outbound transactions, and routing inbound transactions during scheduled operating sessions. Additionally, it facilitates the handling of net payments through holding account facilities. By using this API path, you can make changes to specific outbound transaction requests associated with a payment rail operations ID.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:
`/payment-rail-operations/{paymentrailoperationsid}/outbound-transactions/{outboundtransactionid}/request`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentRailOperations/{paymentrailoperationsid}/PaymentAccountReconciliation/{paymentaccountreconciliationid}/Request</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Request Payment Account Reconciliation Function

  **Documentation**

  This API path is used to update an existing resource related to payment account reconciliation within the Payment Rail Operations service domain. It handles interactions with payment service providers, formats outbound transactions, and routes inbound transactions during scheduled operating sessions. Additionally, it connects to holding account facilities for managing net payment transactions.

  **Limitations**

  PUT: The name of the path should be:

/payment-rail-operations/{paymentrailoperationsid}/payment-account-reconciliation/{paymentaccountreconciliationid}/request 

By using lowercase letters and hyphens to separate words, we adhere to the REST best practices for naming conventions.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentRailOperations/{paymentrailoperationsid}/PaymentClearingandSettlement/{paymentclearingandsettlementid}/Request</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Request Payment Clearing and Settlement Function

  **Documentation**

  This API path is used to update an existing resource related to Payment Clearing and Settlement within the Payment Rail Operations service domain. It involves handling the communication with payment service providers, arranging outgoing transactions, receiving and processing incoming transactions, and linking to accounts for managing net payments. Essentially, it facilitates the request for clearing and settling payments within the system during specific operating sessions.

  **Limitations**

  PUT: Based on REST best practices, a suitable name for the path '/PaymentRailOperations/{paymentrailoperationsid}/PaymentClearingandSettlement/{paymentclearingandsettlementid}/Request' could be:

/payment-rail-operations/{paymentrailoperationsid}/clearing-and-settlement/{paymentclearingandsettlementid}/request

This naming convention uses lowercase letters, hyphens to separate words, and follows a hierarchy where resources are organized in a meaningful manner.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentRailOperations/{paymentrailoperationsid}/InboundTransaction/{inboundtransactionid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Retrieve Inbound Transaction Function

  **Documentation**

  This API path allows you to retrieve information about a specific inbound transaction associated with a payment rail operation. The service manages the communication and routing of transactions between payment service providers during operational sessions. It also connects to holding account facilities for processing net payments. By using this API, you can access details about inbound transactions for further analysis or processing.

  **Limitations**

  GET: The name of the path should follow RESTful naming conventions, which typically use nouns to represent resources. One suggestion for the path name could be: 

'/payment-rail-operations/{paymentrailoperationsid}/inbound-transactions/{inboundtransactionid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentRailOperations/{paymentrailoperationsid}/OutboundTransaction/{outboundtransactionid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Retrieve Outbound Transaction Function

  **Documentation**

  This API path allows you to retrieve information about a specific outbound transaction associated with a payment rail operation. By providing the payment rail operation ID and outbound transaction ID, you can access details such as the transaction amount, date, and any related processing information. This functionality helps in monitoring and managing outgoing payments through the payment service providers efficiently.

  **Limitations**

  GET: Based on REST best practices, a more appropriate name for the path '/PaymentRailOperations/{paymentrailoperationsid}/OutboundTransaction/{outboundtransactionid}/Retrieve' could be:

'/payment-rail-operations/{paymentrailoperationsid}/outbound-transactions/{outboundtransactionid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentRailOperations/{paymentrailoperationsid}/PaymentAccountReconciliation/{paymentaccountreconciliationid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Retrieve Payment Account Reconciliation Function

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific Payment Account Reconciliation within the Payment Rail Operations service domain. It handles the interactions with payment service providers, processes outbound and inbound transactions, and manages the reconciliation of payment accounts. It provides access to details related to reconciliation functions for payment accounts within the overall operational process of payment rail operations.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/payment-rail-operations/{paymentRailOperationsId}/payment-account-reconciliation/{paymentAccountReconciliationId}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentRailOperations/{paymentrailoperationsid}/PaymentClearingandSettlement/{paymentclearingandsettlementid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Retrieve Payment Clearing and Settlement Function

  **Documentation**

  This API path allows you to retrieve information related to payment clearing and settlement within the Payment Rail Operations service domain. It specifically focuses on handling interactions with payment service providers, processing outbound and inbound transactions, and managing payment flows during scheduled operating sessions. Additionally, it facilitates connections to holding account facilities for managing net payments. By calling this API endpoint with the specified IDs, you can access details about the clearing and settlement functions associated with payment operations.

  **Limitations**

  GET: The name of the path should be:

GET /payment-rail-operations/{paymentrailoperationsid}/clearing-and-settlement/{paymentclearingandsettlementid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentRailOperations/{paymentrailoperationsid}/InboundTransaction/{inboundtransactionid}/Update</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Update Inbound Transaction Function

  **Documentation**

  This API path allows you to update an existing inbound transaction within the Payment Rail Operations service domain. It provides functionality to modify details related to how payment transactions are received and processed from external sources during scheduled operating sessions. This could include updating transaction information, processing status, or any other relevant data associated with inbound transactions.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
PATCH /PaymentRailOperations/{paymentrailoperationsid}/InboundTransaction/{inboundtransactionid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentRailOperations/{paymentrailoperationsid}/OutboundTransaction/{outboundtransactionid}/Update</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Update Outbound Transaction Function

  **Documentation**

  This API path allows you to update an existing outbound transaction within the Payment Rail Operations service domain. You can make modifications to the transaction details like the payment amount, recipient information, or any other relevant data. This helps in managing and processing outbound transactions effectively during scheduled operating sessions.

  **Limitations**

  PUT: The name of the path should be `/payment-rail-operations/{paymentrailoperationsid}/outbound-transactions/{outboundtransactionid}` as per REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentRailOperations/{paymentrailoperationsid}/PaymentAccountReconciliation/{paymentaccountreconciliationid}/Update</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Update Payment Account Reconciliation Function

  **Documentation**

  This API path allows you to update an existing payment account reconciliation function within the Payment Rail Operations service domain. It is used to make changes or modifications to the process of reconciling payment accounts within the system. This function manages interactions with payment service providers and ensures that outbound and inbound transactions are formatted correctly and routed accordingly. Additionally, it links to holding account facilities to handle net payment processing efficiently.

  **Limitations**

  PUT: The name of the path should be: 

PUT /payment-rail-operations/{payment_rail_operations_id}/payment-account-reconciliation/{payment_account_reconciliation_id}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentRailOperations/{paymentrailoperationsid}/PaymentClearingandSettlement/{paymentclearingandsettlementid}/Update</span></summary>

  **Description**

  This Service Domain handles the operational interface with payment service providers, formatting outbound transactions and onward routing inbound transactions during scheduled operating sessions. It also links to holding account facilities for net payment handling Update Payment Clearing and Settlement Function

  **Documentation**

  This API path allows you to update an existing resource related to Payment Rail Operations. Specifically, it pertains to the Payment Clearing and Settlement function within the Payment Rail Operations domain. It enables you to modify information or settings related to how payment transactions are processed, including formatting outbound transactions, routing inbound transactions, and managing net payment handling.

  **Limitations**

  PUT: A more appropriate name for this path following REST best practices could be:

PATCH /payment-rail-operations/{paymentRailOperationsId}/payment-clearing-and-settlement/{paymentClearingAndSettlementId}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
