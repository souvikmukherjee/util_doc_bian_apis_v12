---
id: DirectDebit
title: DirectDebit
---

<h1 style='color:red;'>DirectDebit</h1>

**BIAN Documentation:** [DirectDebit v12](https://app.swaggerhub.com/apis/BIAN-3/DirectDebit/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /DirectDebit/{directdebitid}/Control</span></summary>

  **Description**

  Fulfils a direct debit agreement.  Handles the creditor side of direct debits. CoCR Control the processing of Direct Debit Facility

  **Documentation**

  This BIAN API path allows you to update an existing resource related to fulfilling a direct debit agreement from the creditor side. It controls the processing of the Direct Debit Facility by providing the ability to make changes or updates to the direct debit agreement using the provided Direct Debit ID.

  **Limitations**

  PUT: The name of the resource should be noun-based and indicate the functionality it provides. In this case, the name could be "/DirectDebitControls" to represent a collection of controls related to direct debit operations.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DirectDebit/{directdebitid}/Exchange</span></summary>

  **Description**

  Fulfils a direct debit agreement.  Handles the creditor side of direct debits. EcCR Accept, verify, etc. aspects of Direct Debit Facility processing

  **Documentation**

  This API endpoint allows you to update an existing direct debit agreement by fulfilling certain actions related to the creditor side of direct debits. It handles aspects such as accepting, verifying, and processing the direct debit facility within the context of EcCR (Electronic Credit Creditor Reference).

  **Limitations**

  PUT: The name of the path should be `/direct-debit/{directdebitid}/exchanges` using lowercase letters and separating words with hyphens for better readability and consistency with REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DirectDebit/{directdebitid}/Execute</span></summary>

  **Description**

  Fulfils a direct debit agreement.  Handles the creditor side of direct debits. ExCR Execute an available automated action for Direct Debit Facility

  **Documentation**

  This API path allows you to update an existing direct debit agreement by executing an available automated action related to the Direct Debit Facility. Essentially, it enables the creditor to fulfill a direct debit agreement by carrying out a specified action through the API, thus handling the creditor side of direct debits.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

```
/DirectDebits/{directdebitid}/Execute
``` 

Ensure that the resource identifier 'directdebitid' is pluralized in the path and that the verb 'Execute' remains in the path to represent an action being taken on the specific Direct Debit identified by 'directdebitid'.

</details>

<details open>
  <summary><span style='color:red;'>POST: /DirectDebit/Initiate</span></summary>

  **Description**

  Fulfils a direct debit agreement.  Handles the creditor side of direct debits. InCR Instantiate a new Direct Debit Facility

  **Documentation**

  This API path `/DirectDebit/Initiate` allows you to create a new direct debit agreement for handling payments from customers. It is specifically designed for the creditor side of direct debits, meaning it helps organizations set up arrangements to collect payments directly from customers' bank accounts. By initiating this API call, you are instantiating a new direct debit facility, which enables you to establish a direct debit agreement with a customer for recurring payments.

  **Limitations**

  POST: Based on REST best practices, the name of the path '/DirectDebit/Initiate' should be structured using nouns rather than verbs. It should represent a resource or entity. A more suitable path name following REST conventions could be '/direct-debits' to represent a collection of direct debit resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /DirectDebit/{directdebitid}/Retrieve</span></summary>

  **Description**

  Fulfils a direct debit agreement.  Handles the creditor side of direct debits. ReCR Retrieve details about any aspect of Direct Debit Facility

  **Documentation**

  This API path allows you to retrieve details related to a specific direct debit agreement by providing the direct debit ID as a parameter. It is designed to help with managing direct debit agreements from the creditor side, giving you access to information about various aspects of the direct debit facility. By making a GET request to this endpoint with the direct debit ID, you can retrieve relevant details about the direct debit agreement.

  **Limitations**

  GET: The name of the path should be `/directdebits/{directdebitid}`. This follows REST best practices by using plural nouns for resources and utilizing the direct debit identifier directly in the path rather than including an action like "Retrieve".

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DirectDebit/{directdebitid}/Request</span></summary>

  **Description**

  Fulfils a direct debit agreement.  Handles the creditor side of direct debits. RqCR Request manual intervention or a decision with respect to Direct Debit Facility

  **Documentation**

  This API endpoint allows you to update an existing direct debit agreement by requesting manual intervention or a decision regarding the direct debit facility. It is specifically designed to handle tasks related to the creditor side of direct debits, enabling you to make changes or request actions that require human intervention or decision-making in relation to direct debit processing.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/DirectDebits/{directdebitid}/Requests
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DirectDebit/{directdebitid}/Update</span></summary>

  **Description**

  Fulfils a direct debit agreement.  Handles the creditor side of direct debits. UpCR Update details relating to Direct Debit Facility

  **Documentation**

  This API endpoint allows you to update details related to a specific direct debit agreement. It is used to modify information or settings associated with the direct debit facility from the creditor's side. By making a PUT request to this path with the direct debit ID and providing the updated details, you can effectively update the information in the system.

  **Limitations**

  PUT: The name of the path should be '/direct-debits/{directdebitid}'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DirectDebit/{directdebitid}/PaymentTracking/{paymenttrackingid}/Control</span></summary>

  **Description**

  Fulfils a direct debit agreement.  Handles the creditor side of direct debits. CoBQ Control the processing of Payment Tracking

  **Documentation**

  This API path allows you to update the processing control for a specific payment tracking associated with a direct debit agreement. It is used on the creditor side of direct debits to manage the handling of payment tracking information. By making a PUT request to this endpoint with the relevant direct debit ID and payment tracking ID, you can control how the payment tracking is processed.

  **Limitations**

  PUT: The name of the path should be:
'/direct-debits/{directdebitid}/payment-trackings/{paymenttrackingid}/control'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DirectDebit/{directdebitid}/FundsAvailableCheck/{fundsavailablecheckid}/Execute</span></summary>

  **Description**

  Fulfils a direct debit agreement.  Handles the creditor side of direct debits. EcBQ Accept, verify, etc. aspects of Funds Available Check processing

  **Documentation**

  This API path is used to update an existing resource related to fulfilling a direct debit agreement from the creditor side. It specifically handles the processing aspects of verifying and accepting funds availability checks. It allows for the execution of necessary actions for ensuring that the direct debit agreement is fulfilled successfully.

  **Limitations**

  PUT: The name of the path should be:

`/direct-debits/{directdebitId}/funds-available-checks/{fundsAvailableCheckId}/execute`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DirectDebit/{directdebitid}/PaymentInitiation/{paymentinitiationid}/Execute</span></summary>

  **Description**

  Fulfils a direct debit agreement.  Handles the creditor side of direct debits. EcBQ Accept, verify, etc. aspects of Payment Initiation processing

  **Documentation**

  This BIAN API endpoint allows you to execute the fulfillment of a direct debit agreement. Specifically, it handles the creditor side of direct debits by processing payment initiations. By making a PUT request to this endpoint with the appropriate direct debit ID and payment initiation ID, you can trigger actions such as accepting, verifying, and executing the payment initiation to fulfill the direct debit agreement.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be something that reflects the resource being acted upon with the HTTP method used. It should be descriptive, hierarchical, and use nouns to represent resources.

A suitable name for the path could be:
/direct-debits/{directdebitid}/payment-initiations/{paymentinitiationid}/execute

This name clearly indicates the hierarchy of resources starting from direct debits to payment initiations and finally executing a payment initiation. It uses lowercase letters and hy

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DirectDebit/{directdebitid}/VerifyMandate/{verifymandateid}/Execute</span></summary>

  **Description**

  Fulfils a direct debit agreement.  Handles the creditor side of direct debits. EcBQ Accept, verify, etc. aspects of Verify Mandate processing

  **Documentation**

  This API path is used to update an existing direct debit agreement by fulfilling it. It handles the creditor side of direct debits and focuses on accepting, verifying, and processing the verification mandate related to the agreement. The purpose is to execute the necessary actions to ensure the direct debit agreement is properly verified and processed on the creditor side.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should ideally be more resource-centric and descriptive. A more suitable name for the path could be something like:

/direct-debits/{directdebitid}/verify-mandates/{verifymandateid}/execute

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DirectDebit/{directdebitid}/PaymentTracking/{paymenttrackingid}/Execute</span></summary>

  **Description**

  Fulfils a direct debit agreement.  Handles the creditor side of direct debits. ExBQ Execute an available automated action for Payment Tracking

  **Documentation**

  This API path is used to execute an available automated action for payment tracking related to a specific direct debit agreement. It is intended for handling the creditor side of direct debits. By using this path with a PUT request, you can update and fulfill the direct debit agreement by carrying out the necessary payment tracking tasks.

  **Limitations**

  PUT: In following REST best practices, a suitable name for the path '/DirectDebit/{directdebitid}/PaymentTracking/{paymenttrackingid}/Execute' could be:

```
/ direct-debits/{directdebitid}/payment-tracking/{paymenttrackingid}/execute
```

</details>

<details open>
  <summary><span style='color:red;'>POST: /DirectDebit/{directdebitid}/PaymentTracking/Initiate</span></summary>

  **Description**

  Fulfils a direct debit agreement.  Handles the creditor side of direct debits. InBQ Instantiate a new Payment Tracking

  **Documentation**

  This API path is used to initiate a new payment tracking process for a specific direct debit agreement identified by {directdebitid}. It allows the creditor to create a new resource for tracking payments related to that specific direct debit agreement. By using a POST request, the creditor can start the process of tracking payments to ensure that the direct debit agreement is fulfilled successfully.

  **Limitations**

  POST: The name of the path should be:

'/direct-debits/{directdebitid}/payment-tracking/initiate' 

This follows REST best practices by using lowercase letters, separating words with dashes for readability, and using plural nouns for collections.

</details>

<details open>
  <summary><span style='color:red;'>POST: /DirectDebit/{directdebitid}/Reporting/Initiate</span></summary>

  **Description**

  Fulfils a direct debit agreement.  Handles the creditor side of direct debits. InBQ Instantiate a new Reporting

  **Documentation**

  This BIAN API path allows you to initiate a new reporting process for fulfilling a direct debit agreement on the creditor side. By sending a POST request to "/DirectDebit/{directdebitid}/Reporting/Initiate", you can create a new reporting resource to handle the necessary steps and documentation involved in fulfilling the direct debit agreement.

  **Limitations**

  POST: A suitable name for this RESTful path could be something like: 

'/direct-debits/{directdebitid}/reporting/initiate' 

In this naming convention, the words are kept lowercase and hyphens are used to separate words for readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>GET: /DirectDebit/{directdebitid}/FundsAvailableCheck/{fundsavailablecheckid}/Retrieve</span></summary>

  **Description**

  Fulfils a direct debit agreement.  Handles the creditor side of direct debits. ReBQ Retrieve details about any aspect of Funds Available Check

  **Documentation**

  This BIAN API path is used to retrieve details related to the funds available check for a specific direct debit agreement. With this API, you can get information about the funds available check identified by a particular ID within the context of a direct debit agreement identified by another ID. This API is designed to assist in managing direct debit agreements from the creditor side and allows users to access specific details about the funds available check associated with these agreements.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

```
/DirectDebit/{directdebitid}/FundsAvailableCheck/{fundsavailablecheckid}
```

This path structure follows the principles of REST by using resource names (DirectDebit and FundsAvailableCheck) and identifiers (directdebitid and fundsavailablecheckid) to represent the hierarchical relationship between resources. The action (Retrieve) is implied by the HTTP method used (GET), and it is best to keep the

</details>

<details open>
  <summary><span style='color:red;'>GET: /DirectDebit/{directdebitid}/PaymentInitiation/{paymentinitiationid}/Retrieve</span></summary>

  **Description**

  Fulfils a direct debit agreement.  Handles the creditor side of direct debits. ReBQ Retrieve details about any aspect of Payment Initiation

  **Documentation**

  This API path is used to retrieve details about a specific Payment Initiation related to a Direct Debit. By providing the Direct Debit ID and the Payment Initiation ID as parameters in the request, this endpoint allows you to access information about a specific payment transaction associated with a direct debit agreement. It is specifically designed to assist with managing direct debit agreements from the creditor's perspective, providing access to various aspects of the payment initiation process.

  **Limitations**

  GET: Based on REST best practices, the path could be named as follows: 

GET /direct-debits/{directdebitid}/payment-initiations/{paymentinitiationid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /DirectDebit/{directdebitid}/PaymentTracking/{paymenttrackingid}/Retrieve</span></summary>

  **Description**

  Fulfils a direct debit agreement.  Handles the creditor side of direct debits. ReBQ Retrieve details about any aspect of Payment Tracking

  **Documentation**

  This API path allows you to retrieve details about a specific payment tracking associated with a direct debit agreement. By providing the direct debit ID and the payment tracking ID, you can get information on various aspects of payment tracking related to the direct debit transaction. This helps creditors manage and monitor the progress of direct debit payments efficiently.

  **Limitations**

  GET: A possible name following REST best practices for the path '/DirectDebit/{directdebitid}/PaymentTracking/{paymenttrackingid}/Retrieve' could be:

GET '/direct-debits/{directdebitid}/payment-tracking/{paymenttrackingid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /DirectDebit/{directdebitid}/Reporting/{reportingid}/Retrieve</span></summary>

  **Description**

  Fulfils a direct debit agreement.  Handles the creditor side of direct debits. ReBQ Retrieve details about any aspect of Reporting

  **Documentation**

  This BIAN API path is used to retrieve details about a specific aspect of reporting related to a direct debit agreement. It operates on the creditor side of direct debits and allows users to access information about the reporting process by providing the relevant direct debit ID and reporting ID. The retrieved information can include various details about the reporting aspect of the direct debit handling.

  **Limitations**

  GET: A better name for the path '/DirectDebit/{directdebitid}/Reporting/{reportingid}/Retrieve' following REST best practices would be '/direct-debits/{directdebitid}/reporting/{reportingid}'.

</details>

<details open>
  <summary><span style='color:red;'>GET: /DirectDebit/{directdebitid}/VerifyMandate/{verifymandateid}/Retrieve</span></summary>

  **Description**

  Fulfils a direct debit agreement.  Handles the creditor side of direct debits. ReBQ Retrieve details about any aspect of Verify Mandate

  **Documentation**

  This API path allows you to retrieve details about a specific aspect of a Verify Mandate within a direct debit agreement. It handles the creditor side of the direct debit process, providing information related to verifying the mandate for processing payments. By accessing this API, you can obtain specific details or data associated with the Verify Mandate, aiding in the fulfillment of the direct debit agreement.

  **Limitations**

  GET: The name of the path following REST best practices should be:

'/direct-debits/{directdebitid}/mandates/{verifymandateid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /DirectDebit/{directdebitid}/FundsAvailableCheck/{fundsavailablecheckid}/Request</span></summary>

  **Description**

  Fulfils a direct debit agreement.  Handles the creditor side of direct debits. RqBQ Request manual intervention or a decision with respect to Funds Available Check

  **Documentation**

  This API path is used to fulfill a direct debit agreement from the creditor side. It specifically requests manual intervention or a decision regarding the funds available check associated with a direct debit. In simple terms, it allows for updating and handling direct debit agreements by requesting assistance or decision-making related to the availability of funds.

  **Limitations**

  PUT: A suitable name for this path following REST best practices could be:

/direct_debits/{directdebitid}/funds_available_checks/{fundsavailablecheckid}/requests

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
