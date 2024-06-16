---
id: VirtualAccount
title: VirtualAccount
---

<h1 style='color:red;'>VirtualAccount</h1>

**BIAN Documentation:** [VirtualAccount v12](https://app.swaggerhub.com/apis/BIAN-3/VirtualAccount/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/Capture</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  CaCR Capture Virtual Account Facility activity or event related information

  **Documentation**

  This API path allows you to update information related to a Virtual Account by capturing activity or events specific to that account. A Virtual Account is a type of bank account connected to a real account, but it appears as a separate account to external parties. By using this API, you can record and update details about transactions or activities occurring within the Virtual Account.

  **Limitations**

  PUT: Following REST best practices, the name of the path '/VirtualAccount/{virtualaccountid}/Capture' should be named as:

- POST /virtual-accounts/{virtualaccountid}/captures

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/Control</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  CoCR Control the processing of Virtual Account Facility

  **Documentation**

  This API path allows you to update and control the processing of a Virtual Account facility. A Virtual Account is essentially a bank account that is linked to a real account but appears as a separate account to external users. By using this API, you can manage and adjust the functionalities associated with the Virtual Account, such as sending and receiving payments on behalf of the underlying real account.

  **Limitations**

  PUT: A suitable name for the path '/VirtualAccount/{virtualaccountid}/Control' following REST best practices would be:

GET /virtual-accounts/{virtualaccountid}/controls

This naming convention is in lower case, uses plural nouns, and separates words with hyphens for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/Exchange</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  EcCR Accept, verify, etc. aspects of Virtual Account Facility processing

  **Documentation**

  This API path allows you to update an existing Virtual Account by exchanging information related to it. A Virtual Account is like a separate bank account that is tied to a real account and can handle payments on behalf of that real account while appearing to function independently to external parties. The PUT method here would be used to make changes or updates to the Virtual Account's attributes or settings. So, by accessing this API path with the appropriate virtual account ID, you can perform actions related to the Virtual Account's processing and functionality.

  **Limitations**

  PUT: The name of the path should be "/virtual-accounts/{virtualaccountid}/exchanges" following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/Execute</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  ExCR Execute an available automated action for Virtual Account Facility

  **Documentation**

  This BIAN API path allows you to trigger and execute an available automated action for a specific Virtual Account identified by its ID. Essentially, it enables you to perform a predefined action related to the Virtual Account functionality, such as processing payments or managing account settings. The action is carried out within the context of the Virtual Account, which operates as a distinct account but is connected to a real underlying account.

  **Limitations**

  PUT: The name for the path '/VirtualAccount/{virtualaccountid}/Execute' following REST best practices could be:

/virtual-accounts/{virtualaccountid}/execute

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/Grant</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  GrCR Obtain permission to act in relation to Virtual Account Facility

  **Documentation**

  This API path allows you to update an existing Virtual Account by granting permission to act in relation to the Virtual Account Facility. In simpler terms, you can use this API to give authorization or permission for certain actions or operations related to a Virtual Account, which is essentially a bank account that operates as a separate account but is linked to a real underlying account.

  **Limitations**

  PUT: The name of the path should be "/virtual-accounts/{virtualaccountid}/grants" to follow REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>POST: /VirtualAccount/Initiate</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  InCR Instantiate a new Virtual Account Facility

  **Documentation**

  This API path allows you to create a new Virtual Account facility. A Virtual Account is essentially a bank account that is associated with a real account but operates as a separate account to the outside world. With this API, you can set up a Virtual Account that can send and receive payments on behalf of the underlying real account, all while appearing as an independent account externally.

  **Limitations**

  POST: If the path '/VirtualAccount/Initiate' followed all REST best practices, it could be something like '/virtual-accounts' to represent a collection of virtual accounts.

</details>

<details open>
  <summary><span style='color:red;'>GET: /VirtualAccount/{virtualaccountid}/Retrieve</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  ReCR Retrieve details about any aspect of Virtual Account Facility

  **Documentation**

  This BIAN API path "/VirtualAccount/{virtualaccountid}/Retrieve" allows you to retrieve details about a Virtual Account facility by providing the specific virtual account ID. A Virtual Account is a bank account that is linked to a real underlying account but appears as a separate account externally. By using this API endpoint, you can access information about the virtual account, such as transactions, balances, and other relevant details associated with that specific virtual account ID.

  **Limitations**

  GET: Based on RESTful best practices, the name of the path should be:

GET /virtual-accounts/{virtualaccountid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/Request</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  RqCR Request manual intervention or a decision with respect to Virtual Account Facility

  **Documentation**

  This API path allows you to make a request for manual intervention or a decision regarding the Virtual Account facility associated with a specific Virtual Account. It pertains to updating an existing resource related to Virtual Accounts. A Virtual Account is essentially a bank account that exists on top of a real account and acts independently for external transactions, even though it is linked to the real account internally.

  **Limitations**

  PUT: The name of the path `/VirtualAccount/{virtualaccountid}/Request` should ideally be named based on the resource it represents. Following REST best practices, you could name it something like:

`/virtual-accounts/{virtualaccountid}/requests`

This naming convention is more in line with standard RESTful URL structures, where resources are often represented in plural form.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/Update</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  UpCR Update details relating to Virtual Account Facility

  **Documentation**

  This API path allows you to update the details of a Virtual Account by specifying the Virtual Account ID. Essentially, a Virtual Account is a bank account that operates based on an underlying real account. With this API, you can modify information related to the Virtual Account facility, such as account settings, permissions, or any other relevant details.

  **Limitations**

  PUT: Based on REST best practices, the path should be named `/VirtualAccounts/{virtualAccountId}`. This path clearly represents the resource of updating a virtual account identified by its unique `virtualAccountId`.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/DirectDebit/{directdebitid}/Capture</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  CaBQ Capture Direct Debit activity or event related information

  **Documentation**

  This API path allows you to update and capture information related to a specific Direct Debit activity or event within a Virtual Account. You can use this endpoint by specifying the Virtual Account ID and Direct Debit ID, and then updating the relevant details using a PUT request. This operation helps in managing transactions and activities associated with Direct Debit payments through the Virtual Account.

  **Limitations**

  PUT: A suitable name for this path following REST best practices would be:

'/virtual-accounts/{virtualaccountid}/direct-debits/{directdebitid}/captures'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/StandingOrder/{standingorderid}/Capture</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  CaBQ Capture Standing Order activity or event related information

  **Documentation**

  This API path allows you to update information related to capturing a standing order activity or event for a specific standing order within a Virtual Account. The Virtual Account acts as a separate account but is tied to a real underlying account. By using this endpoint with a PUT request, you can modify details or capture specific information related to a standing order transaction associated with the Virtual Account identified by {virtualaccountid} and the standing order identified by {standingorderid}.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should reflect the resource and action it represents. Here are a few options for the path you provided:

1. /virtual-accounts/{virtualaccountid}/standing-orders/{standingorderid}/capture
2. /virtual-accounts/{virtualaccountid}/standing-orders/{standingorderid}/capture-payment
3. /virtual-accounts/{virtualaccountid}/standing-orders/{standingorderid}/process-capture

These paths follow the convention of using lowercase letters

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/DirectDebit/{directdebitid}/Control</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  CoBQ Control the processing of Direct Debit

  **Documentation**

  This API path allows you to update the processing control settings for a specific Direct Debit associated with a Virtual Account. By using a PUT request to this endpoint with the corresponding virtual account ID and direct debit ID, you can modify the way the Direct Debit transactions are handled for that particular virtual account. This functionality helps in managing and controlling how Direct Debits are processed for the Virtual Account, which operates as a separate account linked to a real bank account.

  **Limitations**

  PUT: Based on REST best practices, the path should be named as follows:

"/virtual-accounts/{virtualaccountid}/direct-debits/{directdebitid}/control"

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/ServiceFees/{servicefeesid}/Exchange</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  EcBQ Accept, verify, etc. aspects of Fee processing

  **Documentation**

  This API path allows you to update an existing service fee associated with a specific virtual account. The virtual account is a bank account that is created based on a real underlying account but operates independently. By using this API, you can modify various aspects related to fee processing for the virtual account, such as accepting, verifying, and managing fees.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/virtual-accounts/{virtualAccountId}/service-fees/{serviceFeesId}/exchange'

Here are a few key principles reflected in this naming convention:

1. Use lowercase letters: REST endpoints typically use lowercase letters for consistency and readability.
2. Use hyphens to separate words: Hyphens are preferred over underscores to separate words in URLs.
3. Use singular nouns for resource names: Resource names are usually singular to

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/Interest/{interestid}/Exchange</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  EcBQ Accept, verify, etc. aspects of Interest processing

  **Documentation**

  This API path allows you to update an existing resource related to interest processing for a Virtual Account. Specifically, it pertains to a Virtual Account designated by its unique ID and a specific interest identified by its interest ID. By utilizing the PUT method, you can modify and manage the exchange or processing of interest related to the Virtual Account. This operation enables you to handle aspects such as accepting, verifying, and other actions related to interest processing within the context of the Virtual Account system.

  **Limitations**

  PUT: A suitable name for the path '/VirtualAccount/{virtualaccountid}/Interest/{interestid}/Exchange' following REST best practices could be:

'/virtual-accounts/{virtualaccountid}/interests/{interestid}/exchanges'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/Statement/{statementid}/Exchange</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  EcBQ Accept, verify, etc. aspects of Statement processing

  **Documentation**

  This API path allows you to update information related to a statement within a Virtual Account. Specifically, you can update details for a particular statement by providing the Virtual Account ID and the Statement ID. This API is useful for managing and processing statements for Virtual Accounts that are linked to real accounts. Through this API, you can perform actions like accepting, verifying, and other aspects of statement processing for Virtual Accounts.

  **Limitations**

  PUT: The name of the path should be:

'/virtual-accounts/{virtualAccountId}/statements/{statementId}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/ServiceFees/{servicefeesid}/Execute</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  Execute Apply Service Fee

  **Documentation**

  This API path allows you to execute the application of a service fee for a specific virtual account. By making a PUT request to this path with the virtual account ID and the service fee ID provided, you can update the resource to apply the service fee to that virtual account. This means that the service fee will be deducted from the virtual account balance or otherwise implemented according to the fee policy in place for that account.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/virtual-accounts/{virtualaccountid}/service-fees/{servicefeesid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/Interest/{interestid}/Execute</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  ExBQ Execute Apply Interest

  **Documentation**

  This API path allows you to update and execute the interest associated with a virtual account. By specifying the virtual account ID and the interest ID in the URL, you can trigger the application of interest to the virtual account. This means that the interest calculations and transactions related to the specified interest will be applied to the virtual account.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should ideally be:

```
POST /virtual-accounts/{virtualaccountid}/interests/{interestid}/execute
```

Here are some key points to consider while naming the path:

1. Use lowercase letters: Path names should be in lowercase to maintain consistency and simplicity.

2. Use plural nouns for collections: In this case, "virtual-accounts" and "interests" are plural nouns to represent collections of resources.

3.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/DirectDebit/{directdebitid}/Grant</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  GrBQ Obtain permission to act in relation to Direct Debit

  **Documentation**

  This API path allows you to update an existing resource for a Virtual Account in relation to Direct Debit. By using the PUT method, you can grant permission for the Virtual Account to perform actions related to Direct Debit transactions. This means that the Virtual Account will be authorized to participate in Direct Debit activities, such as sending and receiving payments, within the context of its associated real account while appearing as a separate account to external observers.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be structured in a resource-oriented way to clearly represent the relationships between resources. 

A suitable name for the path could be: 
'/virtual-accounts/{virtualaccountid}/direct-debits/{directdebitid}/grant'

This naming convention uses lowercase letters and hyphens to separate words in the URI path. It accurately describes the hierarchy and relationship between the Virtual Account, Direct Debit, and Grant resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/StandingOrder/{standingorderid}/Grant</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  GrBQ Obtain permission to act in relation to Standing Order

  **Documentation**

  This API path allows you to update or grant permission for a virtual account to act on a standing order. Essentially, it enables the virtual account to perform actions related to a standing order that is linked to it. This could involve tasks such as making payments or receiving funds in accordance with the standing order instructions.

  **Limitations**

  PUT: The name of the path should be: 

'/virtual-accounts/{virtualAccountId}/standing-orders/{standingOrderId}/grant' 

This follows REST best practices by using lowercase letters, hyphens for readability, and using plural nouns for resource names.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/Statement/{statementid}/Grant</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  GrBQ Obtain permission to act in relation to Statement

  **Documentation**

  This API path allows you to update permission settings related to a statement within a Virtual Account. By making a PUT request to this endpoint with the virtual account ID and statement ID specified, you can grant permission for certain actions to be taken in relation to that specific statement. This could involve allowing access to view, edit, or perform other actions on the statement within the Virtual Account.

  **Limitations**

  PUT: A suitable name for this path following REST best practices could be:

GET /virtual-accounts/{virtualaccountid}/statements/{statementid}/grant

</details>

<details open>
  <summary><span style='color:red;'>POST: /VirtualAccount/{virtualaccountid}/DirectDebit/Initiate</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  InBQ Instantiate a new Direct Debit

  **Documentation**

  This API endpoint allows you to create a new Direct Debit initiation for a specific Virtual Account identified by the virtual account ID. A Direct Debit is an automated authorization given by an account holder to allow a third party to withdraw funds from their account for payments. By initiating a Direct Debit through this API, you are setting up the process for payments to be automatically debited from the Virtual Account to fulfill financial transactions.

  **Limitations**

  POST: The name of the path could be `/virtual-accounts/{virtualAccountId}/direct-debits/initiate`, following REST best practices of using lowercase letters and hyphens to separate words in the URI path.

</details>

<details open>
  <summary><span style='color:red;'>POST: /VirtualAccount/{virtualaccountid}/ServiceFees/Initiate</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  InBQ Instantiate a new Fee

  **Documentation**

  This API path allows you to create a new service fee for a specific virtual account identified by {virtualaccountid}. A virtual account is a bank account that is linked to a real account and can perform transactions independently of the real account. By using this API, you can initiate the process of setting up a new fee structure for the specified virtual account.

  **Limitations**

  POST: The REST path should be named as: 

'/virtual-accounts/{virtualAccountId}/service-fees/initiate'

Following REST best practices, the path should be in lowercase letters with hyphens separating words. Parameters should be enclosed in curly brackets and descriptive of the resource they represent.

</details>

<details open>
  <summary><span style='color:red;'>POST: /VirtualAccount/{virtualaccountid}/Interest/Initiate</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  InBQ Instantiate a new Interest

  **Documentation**

  This BIAN API path allows you to initiate the process of creating a new interest on a virtual account identified by the {virtualaccountid}. Virtual accounts are bank accounts that are associated with a real underlying account but can operate independently for receiving and sending payments. By using this API, you can start the procedure for setting up an interest component for a specific virtual account.

  **Limitations**

  POST: Following REST best practices, the name of the path should be:

'/virtual-accounts/{virtualAccountId}/interest/initiate'

</details>

<details open>
  <summary><span style='color:red;'>POST: /VirtualAccount/{virtualaccountid}/StandingOrder/Initiate</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  InBQ Instantiate a new Standing Order

  **Documentation**

  This API path allows you to create a new standing order for a specific virtual account. A virtual account is like a separate bank account that is linked to a real account, but can operate independently for sending and receiving payments. By using this API, you can set up recurring payments or transfers for the virtual account, which will be processed according to the specified instructions.

  **Limitations**

  POST: A suitable name for the path '/VirtualAccount/{virtualaccountid}/StandingOrder/Initiate' according to REST best practices could be:

POST /virtual-accounts/{virtualaccountid}/standing-orders

</details>

<details open>
  <summary><span style='color:red;'>POST: /VirtualAccount/{virtualaccountid}/Statement/Initiate</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  InBQ Instantiate a new Statement

  **Documentation**

  This API path allows you to create a new statement for a specific Virtual Account identified by its ID. The statement is initiated for the Virtual Account, which is essentially a bank account that is linked to a real account but appears as a separate account to external parties. The statement will document the account's financial transactions, such as incoming and outgoing payments, providing a record of the account's activity.

  **Limitations**

  POST: The name of the path '/VirtualAccount/{virtualaccountid}/Statement/Initiate' following REST best practices could be:

GET '/virtual-accounts/{virtualaccountid}/statements/initiate'

</details>

<details open>
  <summary><span style='color:red;'>GET: /VirtualAccount/{virtualaccountid}/DirectDebit/{directdebitid}/Retrieve</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  ReBQ Retrieve details about any aspect of Direct Debit

  **Documentation**

  This API path allows you to retrieve details about a specific Direct Debit associated with a Virtual Account. By providing the Virtual Account ID and Direct Debit ID as parameters, the API will return information related to the Direct Debit transaction. This can include details on the payment, the recipient, the amount, and other relevant information about the Direct Debit transaction.

  **Limitations**

  GET: The name of the path should be: 

GET /virtual-accounts/{virtualAccountId}/direct-debits/{directDebitId}

</details>

<details open>
  <summary><span style='color:red;'>GET: /VirtualAccount/{virtualaccountid}/ServiceFees/{servicefeesid}/Retrieve</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  ReBQ Retrieve details about any aspect of Fee

  **Documentation**

  This BIAN API path allows you to retrieve details about service fees related to a specific Virtual Account. By providing the Virtual Account ID and the Service Fees ID, you can access information about the fees associated with this virtual account. This functionality helps in understanding the costs and charges applied to the virtual account for its services.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

GET /virtual-accounts/{virtualaccountid}/service-fees/{servicefeesid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /VirtualAccount/{virtualaccountid}/Interest/{interestid}/Retrieve</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  ReBQ Retrieve details about any aspect of Interest

  **Documentation**

  This API path (/VirtualAccount/{virtualaccountid}/Interest/{interestid}/Retrieve) allows you to retrieve details about a specific aspect of interest related to a virtual account. You can specify the virtual account ID and the interest ID to get information about the interest details associated with that particular virtual account. This information could include details such as interest rates, accrued interest, or any other relevant interest-related data for the specified virtual account.

  **Limitations**

  GET: Based on REST best practices, a more suitable name for the path '/VirtualAccount/{virtualaccountid}/Interest/{interestid}/Retrieve' could be:

GET /virtual-accounts/{virtualaccountid}/interests/{interestid}

This naming convention follows the practice of using lowercase letters with hyphens to separate words in the URI, making the endpoint more readable and aligned with REST principles.

</details>

<details open>
  <summary><span style='color:red;'>GET: /VirtualAccount/{virtualaccountid}/StandingOrder/{standingorderid}/Retrieve</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  ReBQ Retrieve details about any aspect of Standing Order

  **Documentation**

  This API path allows you to retrieve details about a specific standing order associated with a Virtual Account. By providing the Virtual Account ID and the Standing Order ID in the path, you can get information about the standing order, such as the payment details, frequency, and any other relevant information related to the standing order linked to that particular Virtual Account.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

GET /virtual-accounts/{virtualAccountId}/standing-orders/{standingOrderId}

</details>

<details open>
  <summary><span style='color:red;'>GET: /VirtualAccount/{virtualaccountid}/Statement/{statementid}/Retrieve</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  ReBQ Retrieve details about any aspect of Statement

  **Documentation**

  This API path allows you to retrieve details about a statement related to a specific virtual account. By providing the virtual account ID and the statement ID, you can access information about transactions, balances, or any other aspects of the statement associated with that particular virtual account. This retrieval can help you to track and manage the financial activities and status of the virtual account effectively.

  **Limitations**

  GET: The name of the path following REST best practices could be something like: GET /virtual-accounts/{virtualaccountid}/statements/{statementid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/DirectDebit/{directdebitid}/Request</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  RqBQ Request manual intervention or a decision with respect to Direct Debit

  **Documentation**

  This API path allows you to update a request for manual intervention or a decision regarding a Direct Debit transaction associated with a specific Direct Debit ID within a Virtual Account. It provides the capability to manage and handle Direct Debit requests that may require manual review or decision-making actions to be taken.

  **Limitations**

  PUT: The name of the path should be:

```
/VirtualAccounts/{virtualaccountid}/DirectDebits/{directdebitid}/Requests
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/ServiceFees/{servicefeesid}/Request</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  RqBQ Request manual intervention or a decision with respect to Fee

  **Documentation**

  This BIAN API path allows you to update a specific service fee related to a virtual account. By making a PUT request to this endpoint with the appropriate virtual account ID and service fee ID, you can trigger a manual intervention or decision process regarding fees associated with the virtual account. This functionality enables you to manage and adjust service fees for virtual accounts as needed through manual intervention or decision-making.

  **Limitations**

  PUT: The name of the path should be:

'/virtual-accounts/{virtualAccountId}/service-fees/{serviceFeesId}/request'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/Interest/{interestid}/Request</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  RqBQ Request manual intervention or a decision with respect to Interest

  **Documentation**

  This API path allows you to update a request related to interest for a specific virtual account. It is designed for manual intervention or decision-making processes regarding the interest associated with the virtual account. By making a PUT request to this path with the appropriate parameters, you can update and manage interest-related requests for the specified virtual account.

  **Limitations**

  PUT: A good name for the path '/VirtualAccount/{virtualaccountid}/Interest/{interestid}/Request' following REST best practices could be:

```
/VirtualAccounts/{virtualaccountid}/Interests/{interestid}/Requests
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/StandingOrder/{standingorderid}/Request</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  RqBQ Request manual intervention or a decision with respect to Standing Order

  **Documentation**

  This API path allows you to update an existing request concerning a standing order associated with a specific virtual account. It provides a way to request manual intervention or a decision regarding the standing order for that virtual account. Essentially, it enables you to manage and control the standing orders related to the virtual account through manual actions or decisions.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/VirtualAccounts/{virtualAccountId}/StandingOrders/{standingOrderId}/Requests
```

Here are some key points to consider in the naming of the path:
1. Use plural nouns for consistency and to indicate that multiple resources can be accessed.
2. Use camelCase for readability and consistency.
3. Utilize relevant resource names to provide a clear understanding of the path structure.
4. Avoid the use of verbs in the

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/Statement/{statementid}/Request</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  RqBQ Request manual intervention or a decision with respect to Statement

  **Documentation**

  This API path allows you to update a request related to a specific statement for a Virtual Account. It enables manual intervention or a decision to be made regarding that particular statement. The Virtual Account is essentially a bank account that operates as a separate account externally but is linked to a real underlying account.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:
'/virtual-accounts/{virtualaccountid}/statements/{statementid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/DirectDebit/{directdebitid}/Update</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  UpBQ Update details relating to Direct Debit

  **Documentation**

  This API path allows you to update details related to a Direct Debit associated with a specific Virtual Account. By making a PUT request to this endpoint with the Virtual Account ID and Direct Debit ID, you can modify information such as payment amounts, schedules, or any other details pertaining to the Direct Debit arrangement for the Virtual Account.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/virtual-accounts/{virtualAccountId}/direct-debits/{directDebitId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/ServiceFees/{servicefeesid}/Update</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  Update details about an applied service fee

  **Documentation**

  This API path allows you to update the details of a service fee applied to a specific virtual account. By making a PUT request to this path with the virtual account ID and service fee ID, you can modify information related to the service fee, such as the amount, type, or any other relevant details. This helps in managing and adjusting service fees associated with virtual accounts within the banking system.

  **Limitations**

  PUT: The name of the path should be:

PUT /VirtualAccount/{virtualaccountid}/ServiceFees/{servicefeesid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/Interest/{interestid}/Update</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  UpBQ Update details relating to Interest

  **Documentation**

  This BIAN API path allows you to update details related to interest for a specific virtual account. By using this endpoint, you can modify information such as interest rates or other interest-related details associated with the virtual account identified by {virtualaccountid} and {interestid}. This action helps in managing and customizing the interest terms for the virtual account within the banking system.

  **Limitations**

  PUT: The name of the path '/VirtualAccount/{virtualaccountid}/Interest/{interestid}/Update' following REST best practices could be: PUT /virtual-accounts/{virtualaccountid}/interests/{interestid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/StandingOrder/{standingorderid}/Update</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  UpBQ Update details relating to Standing Order

  **Documentation**

  This API path allows you to update details related to a standing order within a specific virtual account. A virtual account is essentially a bank account that is linked to a real account but operates as a separate account to the outside world. By using this API call with the appropriate virtual account ID and standing order ID, you can make changes to the standing order details associated with that specific virtual account.

  **Limitations**

  PUT: Following REST best practices, the name of the path could be:

```
PUT /virtual-accounts/{virtualAccountId}/standing-orders/{standingOrderId}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/Statement/{statementid}/Update</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  UpBQ Update details relating to Statement

  **Documentation**

  This API path allows you to update details related to a statement of a specific virtual account. By making a PUT request to this endpoint with the virtual account ID and statement ID specified, you can modify information such as transaction details, balances, or other statement-related data for that particular virtual account.

  **Limitations**

  PUT: A suitable name for the path '/VirtualAccount/{virtualaccountid}/Statement/{statementid}/Update' that adheres to REST best practices would be:

PUT /virtual-accounts/{virtualaccountid}/statements/{statementid}

</details>

<details open>
  <summary><span style='color:red;'>POST: /VirtualAccount/{virtualaccountid}/AmountBlock/Initiate</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  Initiate an amount block

  **Documentation**

  This BIAN API path allows you to initiate a block on a specific amount within a Virtual Account. When you create a new resource using this API, you are essentially setting aside a specific amount of money within the Virtual Account for a certain purpose or transaction. This block ensures that the designated funds are reserved and cannot be used until the block is released.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

```
POST /virtual-accounts/{virtualAccountId}/amount-block/initiate
``` 

In this name:
- `POST` indicates the HTTP method to be used to initiate the amount block.
- `virtual-accounts` is in a plural form to represent a collection of resources.
- `{virtualAccountId}` is a placeholder for the specific identifier of the virtual account.
- `amount-block` describes the action being taken on the

</details>

<details open>
  <summary><span style='color:red;'>GET: /VirtualAccount/{virtualaccountid}/AmountBlock/{amountblockid}/Retrieve</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  Retrieve details about an amount block

  **Documentation**

  This API path allows you to retrieve details about a specific amount block within a Virtual Account. A Virtual Account is a bank account that is created based on an existing real account. The amount block represents a specific portion or block of funds within the Virtual Account. By using this API, you can get information about a particular amount block, such as its status, balance, transactions, or any other relevant details associated with it.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be something like:

GET /virtual-accounts/{virtualaccountid}/amount-blocks/{amountblockid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/AmountBlock/{amountblockid}/Update</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  Update details of an amount block

  **Documentation**

  This API path allows you to update the details of an amount block within a Virtual Account. A Virtual Account is essentially a bank account that operates as a separate account to the outside world but is linked to a real underlying account. By using this API, you can modify specific information related to a block of funds within the Virtual Account, such as the amount, restrictions, or any other relevant details.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
PATCH /virtual-accounts/{virtualaccountid}/amount-blocks/{amountblockid}
```

</details>

<details open>
  <summary><span style='color:red;'>POST: /VirtualAccount/{virtualaccountid}/IssuedDevice/Initiate</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  Initiate Provision of Issued Device

  **Documentation**

  This BIAN API path initiates the process of provisioning an issued device for a specific Virtual Account. The Virtual Account is a bank account that is linked to a real account but appears as a separate account to external entities. By using this API, you can trigger the creation of a new device associated with the Virtual Account for conducting transactions such as receiving and sending payments.

  **Limitations**

  POST: The appropriate name for this path should be:

`POST /virtual-accounts/{virtualaccountid}/issued-devices/initiate`

Following REST best practices, the path should use lowercase letters with hyphens to separate words and avoid using uppercase letters, underscores, or special characters. Additionally, the path should use nouns to represent resources and HTTP methods to indicate the action taken on the resource.

</details>

<details open>
  <summary><span style='color:red;'>GET: /VirtualAccount/{virtualaccountid}/IssuedDevice/{issueddeviceid}/Retrieve</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  Retrieve Details about Issued Device

  **Documentation**

  This API path allows you to retrieve details about an issued device associated with a specific virtual account. This means you can access information related to a device, such as a card or token, that has been issued for use with a particular virtual account. The API provides the ability to gather specific information about the issued device in order to manage and track its usage within the virtual account system.

  **Limitations**

  GET: A possible name for this path following REST best practices could be:

`/virtual-accounts/{virtualaccountid}/issued-devices/{issueddeviceid}`

This naming convention follows the RESTful approach of using lowercase letters, using hyphens to separate words, and using plural nouns for collections.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/IssuedDevice/{issueddeviceid}/Update</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  Update Details of Issued Device Allocated to This Account

  **Documentation**

  This API path allows you to update the details of a specific device that has been allocated to a Virtual Account. By making a PUT request to this endpoint with appropriate parameters, you can provide new or updated information about the issued device assigned to the Virtual Account identified by {virtualaccountid}. This can be useful for managing and maintaining accurate records of devices associated with Virtual Accounts, ensuring that the account operates seamlessly and securely.

  **Limitations**

  PUT: A possible name for the path could be '/virtual-accounts/{virtualAccountId}/issued-devices/{issuedDeviceId}'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /VirtualAccount/{virtualaccountid}/BookingAuthorization/{bookingauthorizationid}/Execute</span></summary>

  **Description**

  A Virtual Account is a bank account that is defined on an underlying real account. It can receive and send payments for the underlying account while behaving towards the outside as a separate account.  Execute Authorization of Booking

  **Documentation**

  This API path allows you to update and execute the authorization of a booking for a specific Virtual Account identified by {virtualaccountid} and a Booking Authorization identified by {bookingauthorizationid}. In simpler terms, it enables the system to process and validate a payment transaction associated with the Virtual Account and the booking authorization, ensuring that the payment is authorized and executed correctly.

  **Limitations**

  PUT: The name of the path should be:
'/virtual-accounts/{virtualAccountId}/booking-authorizations/{bookingAuthorizationId}/execute'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
