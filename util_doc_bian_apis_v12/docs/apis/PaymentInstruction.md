---
id: PaymentInstruction
title: PaymentInstruction
---

<h1 style='color:red;'>PaymentInstruction</h1>

**BIAN Documentation:** [PaymentInstruction v12](https://app.swaggerhub.com/apis/BIAN-3/PaymentInstruction/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /PaymentInstruction/{paymentinstructionid}/Control</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Control Payment Instruction Procedure

  **Documentation**

  This API path allows you to update an existing payment instruction by processing pre-checks to ensure that all required arrangements are in place. It also helps in organizing and sending out payment requests received from third-party payment services.

  **Limitations**

  PUT: The name of the path should be `/payment-instructions/{paymentinstructionid}/controls`, following REST best practices of using lowercase letters and using plural nouns for resource names.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentInstruction/{paymentinstructionid}/Exchange</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Exchange Payment Instruction Procedure

  **Documentation**

  This API path allows you to update an existing payment instruction by exchanging or modifying the information related to the payment request. It involves performing pre-checks to ensure all necessary arrangements are in place and routing payment requests received from third-party payment services. Essentially, it helps to manage and process payment instructions efficiently within a financial system.

  **Limitations**

  PUT: The name of the path should ideally be: `/payment-instructions/{paymentinstructionid}/exchange` 

Following REST best practices, paths should use lowercase letters, use hyphens to separate words, and be descriptive of the resource being accessed.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentInstruction/{paymentinstructionid}/Execute</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Execute Payment Instruction Procedure

  **Documentation**

  This API path allows you to update and execute a payment instruction based on a specific payment instruction ID. It involves processing pre-checks to ensure that all necessary arrangements are in place, and then organizing and sending out payment-related requests to third-party payment services. Essentially, it is a procedure for handling and carrying out payment instructions efficiently and securely.

  **Limitations**

  PUT: A suitable name for the path '/PaymentInstruction/{paymentinstructionid}/Execute' following REST best practices could be:

- POST /PaymentInstructions/{paymentinstructionid}/Execution

</details>

<details open>
  <summary><span style='color:red;'>POST: /PaymentInstruction/Initiate</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Initiate Payment Instruction Procedure

  **Documentation**

  This API path (/PaymentInstruction/Initiate) allows users to create a new resource for initiating payment instructions. It processes pre-checks to confirm that all necessary arrangements are in place and then assembles and routes payment-related requests received from third-party payment services. In simple terms, this API helps start the process of making a payment instruction by checking requirements and handling payment requests.

  **Limitations**

  POST: The path '/PaymentInstructions' would be a more appropriate name in adherence with REST best practices. This path should use nouns to represent resources rather than verbs, which are more action-oriented. This way, the path indicates a collection of payment instructions, making it more semantic and aligned with REST conventions.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentInstruction/{paymentinstructionid}/Notify</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Notify Payment Instruction Procedure

  **Documentation**

  This API path retrieves information related to a payment instruction by providing the unique identifier of the payment instruction. The purpose of this API is to process checks to ensure that all necessary arrangements are in place before sending payment-related requests to third-party payment services. It helps in notifying about the payment instruction procedure.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/payment-instructions/{paymentinstructionid}/notify'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentInstruction/{paymentinstructionid}/Request</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Request Payment Instruction Procedure

  **Documentation**

  This BIAN API path allows you to update an existing payment instruction by processing pre-checks to ensure that the required arrangements are in place. It also helps in gathering and routing payment requests received from third-party payment services. In simple terms, it helps manage and update payment instructions securely.

  **Limitations**

  PUT: The name of the path should be `/payment-instructions/{paymentinstructionid}/request`. 

In RESTful API design, it is recommended to use lowercase letters and hyphens to separate words in the URL path as it helps improve readability and maintain consistency.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentInstruction/{paymentinstructionid}/Retrieve</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Retrieve Payment Instruction Procedure

  **Documentation**

  This API path allows you to retrieve information about a specific payment instruction based on its unique ID. The Payment Instruction Service Domain verifies the required arrangements and organizes payment requests from third-party payment services. By using this API, you can access details and data related to a particular payment instruction.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

'/payments/{paymentId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentInstruction/{paymentinstructionid}/Update</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Update Payment Instruction Procedure

  **Documentation**

  This API path allows you to update an existing payment instruction. It involves processing pre-checks to ensure all necessary arrangements are in place, and then routing payment-related requests received from third-party payment services. In simpler terms, it is a way to change or modify the instructions for a payment in the system.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

```
/PaymentInstructions/{paymentinstructionid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentInstruction/{paymentinstructionid}/AgreementConfirmation/{agreementconfirmationid}/Exchange</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Exchange Agreement Confirmation Workstep

  **Documentation**

  This API path is used to update an existing resource related to payment instruction. It specifically updates information related to an agreement confirmation within the payment instruction process. The API processes pre-checks to ensure that all necessary arrangements are in place and then routes payment requests received from third-party payment services.

  **Limitations**

  PUT: The appropriate name for this path, following REST best practices, would be:

/payment-instructions/{paymentinstructionid}/agreement-confirmations/{agreementconfirmationid}/exchange

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentInstruction/{paymentinstructionid}/ComplianceCheck/{compliancecheckid}/Exchange</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Exchange Compliance Check Workstep

  **Documentation**

  This API path is used to update an existing resource related to the Exchange Compliance Check Workstep within the Payment Instruction service domain. It processes pre-checks to confirm arrangements are in place and facilitates the handling of payment requests from third-party payment services.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/payment-instructions/{paymentinstructionid}/compliance-checks/{compliancecheckid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentInstruction/{paymentinstructionid}/PaymentInstruction/{paymentinstructionid}/Exchange</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Exchange Payment Instruction Workstep

  **Documentation**

  This API path is used to update an existing payment instruction by exchanging payment-related requests with third-party payment services. It involves confirming necessary arrangements, performing pre-checks, and routing payment instructions as part of the payment processing workflow.

  **Limitations**

  PUT: Following REST best practices, the path name should be simplified and structured in a more resource-oriented way. One possible suggestion for the path name would be '/payment-instructions/{paymentinstructionid}/exchange'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentInstruction/{paymentinstructionid}/AgreementConfirmation/{agreementconfirmationid}/Execute</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Execute Agreement Confirmation Workstep

  **Documentation**

  This API path allows you to update an existing resource related to a payment instruction and agreement confirmation. It involves processing checks to ensure everything is in order and forwarding payment requests from external payment services. The "Execute Agreement Confirmation Workstep" specifically refers to carrying out a step in confirming the agreement related to the payment instruction.

  **Limitations**

  PUT: A suitable name for the path based on REST best practices could be:

/payment-instructions/{paymentinstructionid}/agreement-confirmations/{agreementconfirmationid}/execute

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentInstruction/{paymentinstructionid}/ComplianceCheck/{compliancecheckid}/Execute</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Execute Compliance Check Workstep

  **Documentation**

  This API path is used to update an existing resource related to the execution of a compliance check workstep within the Payment Instruction service domain. It involves processing pre-checks to ensure that required arrangements are in place and then sending payment-related requests from third-party payment services for routing and execution.

  **Limitations**

  PUT: A suitable name for the path '/PaymentInstruction/{paymentinstructionid}/ComplianceCheck/{compliancecheckid}/Execute' following REST best practices could be:

POST /payments/{paymentId}/compliance-checks/{checkId}/execute 

This name effectively conveys the action to be performed (execute the compliance check) on a specific payment instruction in compliance with RESTful principles.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentInstruction/{paymentinstructionid}/PaymentInstruction/{paymentinstructionid}/Execute</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Execute Payment Instruction Workstep

  **Documentation**

  This BIAN API path allows you to update an existing payment instruction by executing a workstep related to processing payment-related requests received from third-party payment services. The API performs pre-checks to ensure that all necessary arrangements are in place before assembling and routing the payment instruction.

  **Limitations**

  PUT: The name of the path should be something like '/payment-instructions/{paymentinstructionid}/execute'. It is recommended to use lowercase letters, hyphens to separate words, and avoid repeating the resource name 'PaymentInstruction'.

</details>

<details open>
  <summary><span style='color:red;'>POST: /PaymentInstruction/{paymentinstructionid}/AgreementConfirmation/Initiate</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Initiate Agreement Confirmation Workstep

  **Documentation**

  This API path allows you to create a new resource to initiate the process of confirming agreements related to payment instructions. It involves performing pre-checks to ensure all necessary arrangements are in place, and then routing payment requests received from third-party payment services. The "Initiate Agreement Confirmation Workstep" indicates the start of this confirmation process within the system.

  **Limitations**

  POST: If the path '/PaymentInstruction/{paymentinstructionid}/AgreementConfirmation/Initiate' is following REST best practices, a more suitable name for it could be:

'/payment-instructions/{paymentinstructionid}/agreement-confirmations/initiate'

</details>

<details open>
  <summary><span style='color:red;'>POST: /PaymentInstruction/{paymentinstructionid}/ComplianceCheck/Initiate</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Initiate Compliance Check Workstep

  **Documentation**

  This API path allows you to initiate a compliance check workstep within the Payment Instruction service domain. It helps confirm that all required arrangements are in place and gathers payment-related requests from third-party payment services. By making a POST request to this path with the specific payment instruction ID, you can start the process of pre-checks and compliance verification for payment instructions.

  **Limitations**

  POST: A RESTful naming convention for this path could be `/payment-instructions/{paymentinstructionid}/compliance-check/initiate`. 

Here are some key points:

1. Use lowercase letters and separate words with hyphens for better readability.
2. Use plural nouns for collections and singular nouns for individual resources.
3. Include resource identifiers in the path (e.g., `{paymentinstructionid}`).
4. Use verbs only for operations (e.g., `initiate`).

This naming convention follows

</details>

<details open>
  <summary><span style='color:red;'>POST: /PaymentInstruction/{paymentinstructionid}/PaymentInstruction/Initiate</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Initiate Payment Instruction Workstep

  **Documentation**

  This API path allows you to initiate a payment instruction by creating a new resource. It involves performing pre-checks to ensure all necessary arrangements are in place, and then collecting and processing payment requests that are received from third party payment services. In simple terms, you can use this API to start the process of making a payment by providing the required information and triggering the necessary actions to carry out the payment instruction.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

`/payment-instructions/{paymentinstructionid}/initiate-payment`

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentInstruction/{paymentinstructionid}/AgreementConfirmation/{agreementconfirmationid}/Notify</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Notify Agreement Confirmation Workstep

  **Documentation**

  This API path retrieves information related to notifying an agreement confirmation workstep within the Payment Instruction service domain. It processes pre-checks, confirms necessary arrangements, and handles payment requests from third-party payment services. It essentially triggers the notification process for confirming an agreement within the payment instruction system.

  **Limitations**

  GET: A suitable name for this path following REST best practices could be:

```
/PaymentInstructions/{paymentinstructionid}/AgreementConfirmations/{agreementconfirmationid}/Notify
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentInstruction/{paymentinstructionid}/ComplianceCheck/{compliancecheckid}/Notify</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Notify Compliance Check Workstep

  **Documentation**

  This API path allows you to retrieve information about a specific Compliance Check workstep within a Payment Instruction process. It is used to process pre-checks to ensure that all required arrangements are in place before routing payment requests from third-party payment services. The Notify operation likely informs relevant parties or systems about the status or completion of the Compliance Check workstep.

  **Limitations**

  GET: A name that follows REST best practices for the given path could be: 

/PaymentInstructions/{paymentinstructionid}/ComplianceChecks/{compliancecheckid}/Notify

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentInstruction/{paymentinstructionid}/PaymentInstruction/{paymentinstructionid}/Notify</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Notify Payment Instruction Workstep

  **Documentation**

  This API path retrieves information about a payment instruction with a specific ID. It is used to check if the necessary arrangements are in place and to route payment requests from third-party payment services. The Notify Payment Instruction Workstep is used to trigger notifications related to the payment instruction process.

  **Limitations**

  GET: The name of the path should be:

/payment-instructions/{paymentinstructionid}/notify

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentInstruction/{paymentinstructionid}/AgreementConfirmation/{agreementconfirmationid}/Request</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Request Agreement Confirmation Workstep

  **Documentation**

  This API path is used to update an existing resource related to payment instructions and agreement confirmations. It is specifically designed to handle pre-checks required to verify that all necessary arrangements are in order. The API also assists in organizing and directing payment requests received from third-party payment services.

  **Limitations**

  PUT: The name of the path should be:

/payment-instructions/{paymentinstructionid}/agreement-confirmations/{agreementconfirmationid}/requests

Make sure to use lowercase letters and hyphens to separate words in the path to follow REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentInstruction/{paymentinstructionid}/ComplianceCheck/{compliancecheckid}/Request</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Request Compliance Check Workstep

  **Documentation**

  This API path is used to update an existing resource related to payment instructions. Specifically, it is used to process pre-checks to ensure that the required arrangements are in place and to gather and route payment requests from third-party payment services. The request compliance check workstep is updated through this API, which involves verifying that the necessary compliance checks have been completed before processing payment instructions.

  **Limitations**

  PUT: A suitable name for this path following REST best practices could be:  
'/payment-instructions/{paymentinstructionid}/compliance-checks/{compliancecheckid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentInstruction/{paymentinstructionid}/PaymentInstruction/{paymentinstructionid}/Request</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Request Payment Instruction Workstep

  **Documentation**

  This API path allows you to update an existing payment instruction by sending a request to process pre-checks, confirm necessary arrangements, and route payment-related requests received from third-party payment services. It helps manage the workflow for payment instructions within a financial service system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:
'/payment-instructions/{paymentinstructionid}/requests' 

In this format:
- Use lowercase letters and hyphens to separate words in the path
- Use plural nouns to represent collections of resources
- Avoid repeating resource names in the path

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentInstruction/{paymentinstructionid}/AgreementConfirmation/{agreementconfirmationid}/Retrieve</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Retrieve Agreement Confirmation Workstep

  **Documentation**

  This API path allows you to retrieve information about a specific agreement confirmation related to a payment instruction. It helps to confirm that all the necessary arrangements are in place before processing payment requests received from third-party payment services.

  **Limitations**

  GET: The appropriate name for the path would be:

'/payment-instructions/{paymentinstructionid}/agreement-confirmations/{agreementconfirmationid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentInstruction/{paymentinstructionid}/ComplianceCheck/{compliancecheckid}/Retrieve</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Retrieve Compliance Check Workstep

  **Documentation**

  This API path retrieves information about a specific compliance check workstep associated with a payment instruction. The compliance check workstep is part of the process that ensures all necessary arrangements are in place before processing payment requests received from third party payment services. This API allows users to retrieve details about the compliance check workstep identified by the payment instruction ID and the compliance check ID provided in the path.

  **Limitations**

  GET: The name of the path '/PaymentInstruction/{paymentinstructionid}/ComplianceCheck/{compliancecheckid}/Retrieve' following REST best practices could be simplified to '/payment-instructions/{paymentinstructionid}/compliance-checks/{compliancecheckid}'.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentInstruction/{paymentinstructionid}/PaymentInstruction/{paymentinstructionid}/Retrieve</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Retrieve Payment Instruction Workstep

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific payment instruction by providing its unique ID. The API helps in processing pre-checks, confirming necessary arrangements, and handling payment requests received from third-party payment services. It essentially assists in managing and routing payment-related instructions efficiently.

  **Limitations**

  GET: The name of the path could simply be:

/paymentInstructions/{paymentInstructionId}

In RESTful design, it's important to use plural nouns for resource names. In this case, "paymentInstructions" is used in its plural form to represent a collection of payment instruction resources. The path parameter {paymentInstructionId} should be singular to represent a specific payment instruction within the collection.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentInstruction/{paymentinstructionid}/AgreementConfirmation/{agreementconfirmationid}/Update</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Update Agreement Confirmation Workstep

  **Documentation**

  This API path allows you to update an existing agreement confirmation workstep within a payment instruction. It involves processing pre-checks, confirming arrangements, and handling payment requests from third-party payment services. The purpose is to efficiently manage and update payment-related information for a specific payment instruction.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be descriptive and clearly indicate its function. Perhaps a suitable name for this path could be:

`/payment-instructions/{paymentinstructionid}/agreement-confirmations/{agreementconfirmationid}/update`

This naming convention uses lowercase letters, dashes to separate words, and uses plural nouns to represent resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentInstruction/{paymentinstructionid}/ComplianceCheck/{compliancecheckid}/Update</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Update Compliance Check Workstep

  **Documentation**

  This API path allows you to update an existing compliance check workstep associated with a specific payment instruction. It is used in a service domain that handles pre-checks to ensure required arrangements are in place before processing payment requests received from third-party services. By making a PUT request to this path with the necessary information, you can modify the details of the compliance check workstep for the specified payment instruction.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should ideally be:

/PaymentInstructions/{paymentinstructionid}/ComplianceChecks/{compliancecheckid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentInstruction/{paymentinstructionid}/PaymentInstruction/{paymentinstructionid}/Update</span></summary>

  **Description**

  This Service Domain processes the pre-checks needed to confirm the necessary arrangements are in place and assemble and rout payment related requests received from third party payment services. Update Payment Instruction Workstep

  **Documentation**

  This API path allows you to update an existing payment instruction by providing the payment instruction ID in the URL. The service will then perform pre-checks to ensure all necessary arrangements are in place and handle any payment-related requests received from third-party payment services. Essentially, it allows you to modify an existing payment instruction within the system.

  **Limitations**

  PUT: The name of the path should be:

`/payment-instructions/{paymentinstructionid}/update`

Following REST best practices, the path should use lowercase letters and hyphens to separate words for better readability and consistency.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
