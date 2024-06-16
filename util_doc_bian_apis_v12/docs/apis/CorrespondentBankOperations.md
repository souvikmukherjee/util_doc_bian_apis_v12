---
id: CorrespondentBankOperations
title: CorrespondentBankOperations
---

<h1 style='color:red;'>CorrespondentBankOperations</h1>

**BIAN Documentation:** [CorrespondentBankOperations v12](https://app.swaggerhub.com/apis/BIAN-3/CorrespondentBankOperations/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CorrespondentBankOperations/Initiate</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Initiate a correspondent fulfillment arrangement

  **Documentation**

  This BIAN API path, /CorrespondentBankOperations/Initiate, allows you to create a new correspondent banking arrangement between a bank and its correspondent banking partners. It enables the handling of payments to and from these correspondent banks, usually done through the secure SWIFT payment network. By initiating a correspondent fulfillment arrangement using this API, banks can efficiently manage their correspondent banking operations and facilitate international financial transactions.

  **Limitations**

  POST: The name of the path should ideally be '/correspondent-bank-operations/initiate' following REST best practices. It is recommended to use lowercase letters and hyphens to separate words in the path names for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorrespondentBankOperations/{correspondentbankoperationsid}/Update</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Update correspondent fulfillment arrangement

  **Documentation**

  This API path allows you to update an existing correspondent banking arrangement. Correspondent banking involves the relationship between a bank and its correspondent banking partners, managing payment transactions through networks like SWIFT. By using this path with a PUT method, you can make changes to the fulfillment arrangement of your correspondent banking operations identified by the correspondentbankoperationsid.

  **Limitations**

  PUT: The name of the path /CorrespondentBankOperations/{correspondentbankoperationsid}/Update should be `/correspondentBankOperations/{correspondentBankOperationsId}` following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorrespondentBankOperations/{correspondentbankoperationsid}/Control</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Control the handling of an arrangement

  **Documentation**

  This BIAN API path allows you to update and control the handling of correspondent banking arrangements between a bank and its correspondent banking partners. It involves managing the clearing and settlement of payments made to or received from the correspondent banks, often done through the SWIFT payment network. This API provides a way to adjust and manage the operations related to these banking arrangements.

  **Limitations**

  PUT: The path name should be `/correspondent-bank-operations/{correspondentbankoperationsid}/control` for following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorrespondentBankOperations/{correspondentbankoperationsid}/Retrieve</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Retrieve a correspondent fulfillment arrangement

  **Documentation**

  This API path allows you to retrieve information about a specific correspondent banking arrangement. Correspondent banking involves the bank working with its partner banks to process payments, such as clearing and settling transactions using the SWIFT payment network. By using this API, you can access details about the fulfillment arrangement between the bank and its correspondent banking partners.

  **Limitations**

  GET: The name of the path should be:

`GET /correspondent-bank-operations/{correspondentbankoperationsid}`

Following REST best practices, the path should use lowercase letters, separate words with hyphens, and should specify the resource being retrieved (in this case, `correspondent-bank-operations`) without including the action such as "Retrieve".

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorrespondentBankOperations/{correspondentbankoperationsid}/Exchange</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Exchange Correspondent Bank Operating Session

  **Documentation**

  This API path is used to update an existing resource related to correspondent bank operations. It specifically pertains to handling the clearing and settlement of payments between the bank and its correspondent banking partners. The update occurs within a session that facilitates communication and transactions with the correspondent bank, often utilizing the SWIFT payment network.

  **Limitations**

  PUT: The name of the path should be:

'/correspondent-bank-operations/{correspondent-bank-operations-id}/exchange'

Following REST best practices, it is recommended to use lowercase letters, separate words with hyphens, and use descriptive names that accurately reflect the resource being accessed.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorrespondentBankOperations/{correspondentbankoperationsid}/Execute</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Execute Correspondent Bank Operating Session

  **Documentation**

  This API path allows you to execute a correspondent bank operating session by updating an existing resource related to correspondent banking operations. It facilitates the management of correspondent banking arrangements between the bank and its correspondent banking partners. This involves handling the clearing and settlement of payments to and from the correspondent banks, usually done through the SWIFT payment network.

  **Limitations**

  PUT: The path '/CorrespondentBankOperations/{correspondentbankoperationsid}/Execute' seems to be indicating an action of executing a correspondent bank operation. Following REST best practices, the name of the path should be a noun that represents a resource. 

Given that the resource seems to be related to correspondent bank operations, a more appropriate name for the path could be '/CorrespondentBankOperationExecutions/{correspondentbankoperationsid}'. This name reflects the idea of executing operations related to correspondent

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorrespondentBankOperations/{correspondentbankoperationsid}/Notify</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Notify Correspondent Bank Operating Session

  **Documentation**

  This API path allows you to retrieve information about notifying a correspondent bank operating session within the correspondent bank operations service domain. It is used to facilitate correspondent banking activities between the bank and its correspondent banking partners, such as handling payment clearing and settlement through the SWIFT payment network.

  **Limitations**

  GET: The name of the path should ideally be:

'/correspondent-bank-operations/{correspondentbankoperationsid}/notifications' 

This name follows REST best practices by using lowercase letters, separating words with hyphens for readability, and using plural nouns for collections.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorrespondentBankOperations/{correspondentbankoperationsid}/Request</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Request Correspondent Bank Operating Session

  **Documentation**

  This API path allows you to update an existing resource related to correspondent bank operations. It specifically enables you to request a correspondent bank operating session for handling payments with correspondent banking partners, often done through the SWIFT payment network.

  **Limitations**

  PUT: A possible name for the path based on REST best practices could be:

'/correspondent-bank-operations/{correspondentbankoperationsid}/request'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorrespondentBankOperations/{correspondentbankoperationsid}/InboundPayments/{inboundpaymentsid}/Update</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Update inbound payment transactions

  **Documentation**

  This API path allows you to update inbound payment transactions in the correspondent bank operations system. It is used to make changes or modifications to existing payment information related to transactions received from correspondent banks. This update process helps ensure accurate and up-to-date records for payments being processed through the correspondent banking arrangements.

  **Limitations**

  PUT: The name of the path should be:
'/correspondent-bank-operations/{correspondentbankoperationsid}/inbound-payments/{inboundpaymentsid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorrespondentBankOperations/{correspondentbankoperationsid}/InboundPayments/{inboundpaymentsid}/Execute</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Execute inbound payment transactions from a correspondent

  **Documentation**

  This API path allows the bank to execute inbound payment transactions received from its correspondent banking partners. It is used to update and process the payments coming in from these partners through the SWIFT payment network, which is commonly used for international transactions. Essentially, this path handles the clearing and settlement of payments received from correspondent banks.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/correspondent-bank-operations/{correspondent-bank-operations-id}/inbound-payments/{inbound-payments-id}/execute'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorrespondentBankOperations/{correspondentbankoperationsid}/InboundPayments/{inboundpaymentsid}/Retrieve</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Retrieve inbound payments

  **Documentation**

  This BIAN API path allows you to retrieve information about inbound payments related to correspondent bank operations. It specifically fetches details about payments that are coming from correspondent banks to your bank. This service assists in managing the clearing and settlement of these payments, which are often processed through the SWIFT payment network. By using this API, you can access specific data and details regarding incoming payments within the correspondent banking arrangements.

  **Limitations**

  GET: Based on REST best practices, the path "/CorrespondentBankOperations/{correspondentbankoperationsid}/InboundPayments/{inboundpaymentsid}/Retrieve" should be renamed to:

GET /correspondent-bank-operations/{correspondentbankoperationsid}/inbound-payments/{inboundpaymentsid}

Following REST conventions, it is recommended to use lowercase letters, hyphens for better readability, and avoid using verbs in the path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorrespondentBankOperations/{correspondentbankoperationsid}/OutboundPayments/{outboundpaymentsid}/Update</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Update outbound payment transactions

  **Documentation**

  This API path allows you to update existing outbound payment transactions within the correspondent bank operations. It is used to make changes or modifications to specific payment transactions that are being sent to or received from correspondent banking partners using the SWIFT payment network.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should focus on the resource being accessed and the action being performed. A possible name for the path could be:

'/correspondent-bank-operations/{correspondentbankoperationsid}/outbound-payments/{outboundpaymentsid}'

You can adjust the naming convention based on your specific requirements and naming conventions.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorrespondentBankOperations/{correspondentbankoperationsid}/OutboundPayments/{outboundpaymentsid}/Execute</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Execute outbound payment transactions to a correspondent

  **Documentation**

  This API path allows the bank to execute outbound payment transactions to a correspondent bank partner. It is part of the correspondent bank operations service, which manages the clearing and settlement of payments between the bank and its correspondent banking partners. The transactions are typically processed using the SWIFT payment network. By using this API, the bank can update and execute specific outbound payment transactions to ensure timely and accurate processing of funds to the correspondent bank.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:
```
/CorrespondentBankOperations/{correspondentbankoperationsid}/OutboundPayments/{outboundpaymentsid}
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorrespondentBankOperations/{correspondentbankoperationsid}/OutboundPayments/{outboundpaymentsid}/Retrieve</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Retrieve outbound payments

  **Documentation**

  This API path allows you to retrieve information about outbound payments processed through correspondent banking arrangements between a bank and its correspondent banking partners. It specifically enables access to details related to a specific outbound payment transaction, identified by unique IDs within the correspondent bank operations system. The information retrieved may include payment status, transaction details, and other relevant data pertaining to the specific outbound payment.

  **Limitations**

  GET: Based on REST best practices, the path should be named based on the resource it represents rather than the action it performs. Therefore, a more appropriate name for the path '/CorrespondentBankOperations/{correspondentbankoperationsid}/OutboundPayments/{outboundpaymentsid}/Retrieve' could be:

'/CorrespondentBanks/{correspondentbankid}/OutboundPayments/{outboundpaymentid}'

This path clearly identifies the resources involved (Correspondent Banks and Outbound Payments

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorrespondentBankOperations/{correspondentbankoperationsid}/ClearingandSettlement/{clearingandsettlementid}/Update</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Update a clearing and settlement transaction

  **Documentation**

  This BIAN API path allows you to update a specific clearing and settlement transaction within the correspondent banking operations. It provides a way to make changes or modifications to details related to the clearing and settlement of payments made to or received from correspondent banks using the SWIFT payment network. By sending a PUT request to this path with the corresponding transaction IDs, you can update the information associated with that particular transaction.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:
'/correspondent-bank-operations/{correspondentbankoperationsid}/clearing-and-settlement/{clearingandsettlementid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorrespondentBankOperations/{correspondentbankoperationsid}/ClearingandSettlement/{clearingandsettlementid}/Exchange</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Exchange a clearing and settlement task

  **Documentation**

  This API path allows you to update an existing clearing and settlement task related to correspondent banking operations. It is specifically designed for managing the processing of payments between the bank and its correspondent banking partners, often using the SWIFT payment network. By making a PUT request to this path, you can exchange information or update details for a specific clearing and settlement task identified by the correspondent bank operations ID and clearing and settlement ID provided in the path.

  **Limitations**

  PUT: A suitable name for this path following REST best practices could be:  
'/correspondent-bank-operations/{correspondentbankoperationsid}/clearing-and-settlement/{clearingandsettlementid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorrespondentBankOperations/{correspondentbankoperationsid}/ClearingandSettlement/{clearingandsettlementid}/Request</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Request clearing and settlement processing for a correspondent

  **Documentation**

  This API path allows you to update an existing resource related to correspondent banking operations. Specifically, it is used to request processing for clearing and settlement transactions with a correspondent bank through the SWIFT payment network.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be structured in a meaningful and descriptive manner without including any action verbs or CRUD operations. It should focus on the resource being manipulated.

A possible name for the path could be:

'/correspondent-bank-operations/{correspondent-bank-operation-id}/clearing-and-settlement/{clearing-and-settlement-id}/request'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorrespondentBankOperations/{correspondentbankoperationsid}/ClearingandSettlement/{clearingandsettlementid}/Retrieve</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Retrieve clearing and settlement activity with a correspondent

  **Documentation**

  This API path allows users to retrieve information about clearing and settlement activities with a correspondent bank. It is part of the Correspondent Bank Operations service domain, which manages the bank's relationships and transactions with its correspondent banking partners. By using this API, users can access details about specific clearing and settlement transactions, typically processed through the SWIFT payment network.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/correspondent-bank-operations/{correspondent-bank-operations-id}/clearing-and-settlement/{clearing-and-settlement-id}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorrespondentBankOperations/{correspondentbankoperationsid}/Reconciliation/{reconciliationid}/Update</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Update a reconciliation task

  **Documentation**

  This BIAN API path allows you to update a reconciliation task within the Correspondent Bank Operations service domain. The reconciliation task involves managing the process of matching and verifying financial transactions between the bank and its correspondent banking partners. By using this API path with the PUT method, you can make changes to an existing reconciliation task to ensure accuracy and consistency in the clearing and settlement of payments through the SWIFT payment network.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be structured as follows:
'/correspondent-bank-operations/{correspondent_bank_operations_id}/reconciliation/{reconciliation_id}'
This naming convention uses lowercase letters, separates words with hyphens, and uses descriptive terms that represent the resources in the path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorrespondentBankOperations/{correspondentbankoperationsid}/Reconciliation/{reconciliationid}/Exchange</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Exchange  a reconciliation task

  **Documentation**

  This BIAN API path allows you to update an existing reconciliation task related to correspondent bank operations. It is used to manage the process of reconciling payments between the bank and its correspondent banking partners, typically done through the SWIFT payment network. By making a PUT request to this path with the appropriate identifiers, you can exchange information or updates regarding a specific reconciliation task within the correspondent bank operations.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be something that accurately describes the resource it represents. One suggestion could be:

'/correspondent-bank-operations/{correspondentbankoperationsid}/reconciliation/{reconciliationid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorrespondentBankOperations/{correspondentbankoperationsid}/Reconciliation/{reconciliationid}/Request</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Request reconciliation processing for a correspondent

  **Documentation**

  This specific API path allows users to update an existing request for reconciliation processing related to correspondent banking operations. It facilitates the communication and coordination between a bank and its correspondent banking partners to handle payments via the SWIFT network. By using this endpoint, users can initiate the request for reconciliation processing for a specific correspondent bank operation identified by the provided IDs.

  **Limitations**

  PUT: Based on REST best practices, the path could be named as follows:

`/correspondent-banks/{correspondent-bank-id}/reconciliation/{reconciliation-id}/request`

In this naming convention:
- Paths are in lowercase.
- Plural nouns are used for collections (e.g., correspondent-banks).
- A dash (-) is used for separating words in URIs for better readability.
- Variables are enclosed in curly braces 

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorrespondentBankOperations/{correspondentbankoperationsid}/Reconciliation/{reconciliationid}/Retrieve</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Retrieve reconciliation activity with a correspondent

  **Documentation**

  This API path allows you to retrieve reconciliation activity information with a specific correspondent bank. It is part of the Correspondent Bank Operations service domain, which manages the relationships and transactions between the bank and its correspondent banking partners. By using this path, you can obtain details about the clearing and settlement of payments to and from the correspondent bank, typically processed through the SWIFT payment network.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

GET /correspondent-bank-operations/{correspondentbankoperationsid}/reconciliation/{reconciliationid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorrespondentBankOperations/{correspondentbankoperationsid}/InboundPayments/{inboundpaymentsid}/Exchange</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Exchange Inbound Payments

  **Documentation**

  This API path allows you to update existing inbound payment exchanges within correspondent bank operations. It is used to manage the clearing and settlement of payments coming into the bank from its correspondent banking partners. The updates are typically made through the SWIFT payment network, which is commonly used for international transactions.

  **Limitations**

  PUT: The name of the path should be:

'/correspondent-bank-operations/{correspondent-bank-operation-id}/inbound-payments/{inbound-payment-id}/exchange'

I have made the path more user-friendly and easier to read by using all lowercase letters, separating words with hyphens, and using singular nouns for resource names.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorrespondentBankOperations/{correspondentbankoperationsid}/OutboundPayments/{outboundpaymentsid}/Exchange</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Exchange Outbound Payments

  **Documentation**

  This BIAN API path allows you to update existing outbound payment information related to correspondent banking operations. It is specifically focused on handling the transfer of funds to and from correspondent banks using the SWIFT payment network. By making a PUT request to this endpoint with the correspondent bank operations ID and outbound payments ID, you can update details associated with these outbound payments within the correspondent banking system.

  **Limitations**

  PUT: The name of the path should be:

'/correspondent-bank-operations/{correspondentBankOperationsId}/outbound-payments/{outboundPaymentsId}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorrespondentBankOperations/{correspondentbankoperationsid}/Reconciliation/{reconciliationid}/Execute</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Execute Reconciliation

  **Documentation**

  This API path allows you to update and execute a reconciliation process for correspondent bank operations. It is used to manage the clearing and settlement of payments made to or received from correspondent banks, a process often carried out through the SWIFT payment network. By using this path, you can ensure that the reconciliation of transactions between your bank and its correspondent banking partners is accurately and efficiently executed.

  **Limitations**

  PUT: The name of the path should be '/correspondent-bank-operations/{id}/reconciliation/{id}/execute'.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CorrespondentBankOperations/{correspondentbankoperationsid}/InboundPayments/Initiate</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Initiate Inbound Payments

  **Documentation**

  This API path allows users to create a new resource to initiate inbound payments within the correspondent banking operations domain. It facilitates the process of handling payments between the bank and its correspondent banking partners, utilizing the SWIFT payment network for clearing and settlement. By using this API, users can initiate inbound payments smoothly and efficiently.

  **Limitations**

  POST: Based on REST best practices, the name for the path '/CorrespondentBankOperations/{correspondentbankoperationsid}/InboundPayments/Initiate' should ideally be:

'/correspondent-bank-operations/{correspondent-bank-operations-id}/inbound-payments/initiate'

In this revised version, the path uses lowercase letters, separates words with hyphens for readability, and keeps the URL segments descriptive while also maintaining adherence to RESTful conventions.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CorrespondentBankOperations/{correspondentbankoperationsid}/OutboundPayments/Initiate</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Initiate Outbound Payments

  **Documentation**

  This API path allows the bank to initiate outbound payments as part of its correspondent banking operations. It facilitates the processing of payments to and from correspondent banks through the SWIFT payment network. By creating a new resource using a POST request, the bank can begin the clearing and settlement of payments with its correspondent banking partners.

  **Limitations**

  POST: A possible name for the path '/CorrespondentBankOperations/{correspondentbankoperationsid}/OutboundPayments/Initiate' following REST best practices could be:

POST /correspondent-bank-operations/{correspondentbankoperationsid}/outbound-payments

This path name specifies the action of initiating outbound payments belonging to a specific correspondent bank operation resource.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorrespondentBankOperations/{correspondentbankoperationsid}/InboundPayments/{inboundpaymentsid}/Notify</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Notify Inbound Payments

  **Documentation**

  This API path allows you to retrieve information about notifying inbound payments in the context of correspondent bank operations. It is part of the process where a bank communicates with its correspondent banking partners regarding incoming payments. This communication may involve details such as payment notifications, processing updates, or status information related to payments received from correspondent banks. The path specifically focuses on retrieving data related to notifying inbound payments within the correspondent banking arrangement.

  **Limitations**

  GET: The name of the path should be `/correspondent-bank-operations/{cboid}/inbound-payments/{ipid}/notify` to adhere to REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorrespondentBankOperations/{correspondentbankoperationsid}/OutboundPayments/{outboundpaymentsid}/Notify</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Notify Outbound Payments

  **Documentation**

  This API path retrieves information about notifying outbound payments within the correspondent bank operations. It is part of the process that manages transactions between the bank and its correspondent banking partners. The system clears and settles payments sent to or received from these correspondent banks, often using the SWIFT payment network. This specific endpoint allows users to retrieve details related to notifying outbound payments within this correspondent banking system.

  **Limitations**

  GET: The name of the path should simply be: /CorrespondentBankOperations/{correspondentbankoperationsid}/OutboundPayments/{outboundpaymentsid}/Notify

</details>

<details open>
  <summary><span style='color:red;'>GET: /CorrespondentBankOperations/{correspondentbankoperationsid}/Reconciliation/{reconciliationid}/Notify</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Notify Reconciliation

  **Documentation**

  This API path allows you to retrieve information about notifying reconciliation within correspondent bank operations. It is part of the process that manages the arrangements between a bank and its correspondent banking partners, including clearing and settling payments through the SWIFT payment network. By using this path, you can access details related to notifying reconciliation in the correspondent banking operations.

  **Limitations**

  GET: Based on REST best practices, the path should be named as follows: 

'/correspondent-bank-operations/{correspondent-bank-operations-id}/reconciliation/{reconciliation-id}/notify'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorrespondentBankOperations/{correspondentbankoperationsid}/InboundPayments/{inboundpaymentsid}/Request</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Request Inbound Payments

  **Documentation**

  This BIAN API path is used to update a specific request for inbound payments within the Correspondent Bank Operations service domain. It involves managing the processing of payments between the bank and its correspondent banking partners, usually done through the SWIFT payment network. By using this API, you can modify details related to inbound payments that are part of correspondent banking arrangements.

  **Limitations**

  PUT: Based on REST best practices, the name of the path `/CorrespondentBankOperations/{correspondentbankoperationsid}/InboundPayments/{inboundpaymentsid}/Request` can be simplified and standardized as follows:

`/correspondent-bank-operations/{id}/inbound-payments/{id}/request`

In this way, hyphens are used to separate words for readability, and curly braces indicating placeholders are omitted as it is implied in a RESTful URL structure.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CorrespondentBankOperations/{correspondentbankoperationsid}/OutboundPayments/{outboundpaymentsid}/Request</span></summary>

  **Description**

  This service domain fulfils correspondent banking arrangements between the bank and its correspondent banking partners.  This includes handling the clearing and settlement of payments to/from the correspondent banks, typically using the SWIFT payment network. Request Outbound Payments

  **Documentation**

  This BIAN API path allows you to update an existing request for outbound payments within the Correspondent Bank Operations service domain. It is part of the process that manages correspondent banking arrangements between the bank and its correspondent partners. This involves facilitating the clearing and settlement of payments to and from these correspondent banks, usually through the SWIFT payment network. By using this API path with the PUT method, you can modify the details or status of a specific outbound payment request associated with a correspondent bank operation.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/correspondent-bank-operations/{correspondent-bank-operations-id}/outbound-payments/{outbound-payments-id}/request'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
