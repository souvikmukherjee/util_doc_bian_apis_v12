---
id: PaymentInitiation
title: PaymentInitiation
---

<h1 style='color:red;'>PaymentInitiation</h1>

**BIAN Documentation:** [PaymentInitiation v12](https://app.swaggerhub.com/apis/BIAN-3/PaymentInitiation/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /PaymentInitiation/Initiate</span></summary>

  **Description**

  This service domain provides a customer payment service. It captures the payer and payee details and other key properties of the payment and orchestrates the transaction. It provides support for repeating/scheduled payments InCR Initiate a payment transaction

  **Documentation**

  This API path allows users to initiate a payment transaction by providing information about the payer and payee involved, as well as other important details related to the payment. Users can specify key properties of the payment, such as the amount and timing, and schedule repeating or one-time payments. The API orchestrates the transaction, ensuring that the payment is processed correctly.

  **Limitations**

  POST: If the path '/PaymentInitiation/Initiate' followed all REST best practices, it should be named something more resource-oriented and following the principle of using nouns for resources. One possible name could be '/payments'. This name is more concise, focuses on the resource being manipulated (payments), and follows the convention of using plural nouns for collections.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentInitiation/{paymentinitiationid}/Update</span></summary>

  **Description**

  This service domain provides a customer payment service. It captures the payer and payee details and other key properties of the payment and orchestrates the transaction. It provides support for repeating/scheduled payments UpCR Update details of a payment transaction instruction

  **Documentation**

  This API path allows you to update the details of a payment transaction instruction identified by the `paymentinitiationid`. It is part of a service that handles customer payments, allowing you to change information related to the payer, payee, and other important aspects of the payment transaction. This service also supports functionalities like repeating or scheduling payments. The `PUT` method is used to update an existing payment instruction.

  **Limitations**

  PUT: The name of the path '/PaymentInitiation/{paymentinitiationid}/Update' following REST best practices should be:

PUT /PaymentInitiation/{paymentinitiationid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentInitiation/{paymentinitiationid}/Retrieve</span></summary>

  **Description**

  This service domain provides a customer payment service. It captures the payer and payee details and other key properties of the payment and orchestrates the transaction. It provides support for repeating/scheduled payments ReCR Retrieve details about a payment transaction

  **Documentation**

  This API path allows you to retrieve details about a specific payment transaction identified by the payment initiation ID. The service captures information about the payer, payee, and other important properties of the payment. It helps to orchestrate the transaction and supports repeating or scheduled payments. By making a GET request to this API path with the appropriate payment initiation ID, you can access information related to that specific payment transaction.

  **Limitations**

  GET: The name of the path should be `/payments/{paymentId}`.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentInitiation/{paymentinitiationid}/Compliance/{complianceid}/Retrieve</span></summary>

  **Description**

  This service domain provides a customer payment service. It captures the payer and payee details and other key properties of the payment and orchestrates the transaction. It provides support for repeating/scheduled payments ReBQ Retrieve details about a payment transaction compliance check

  **Documentation**

  This API path allows you to retrieve details about a payment transaction compliance check within the Payment Initiation service domain. By providing the specific payment initiation ID and compliance ID, you can access information related to the compliance verification process for a payment transaction. This can include details about the payer, payee, and other key payment properties to ensure that the transaction meets regulatory requirements and guidelines.

  **Limitations**

  GET: The name of the path should be:
'/payments/{paymentId}/compliance/{complianceId}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentInitiation/{paymentinitiationid}/FundingCheck/{fundingcheckid}/Retrieve</span></summary>

  **Description**

  This service domain provides a customer payment service. It captures the payer and payee details and other key properties of the payment and orchestrates the transaction. It provides support for repeating/scheduled payments ReBQ Retrieve details about a payment transaction funds available

  **Documentation**

  This BIAN API path is used to retrieve information about a specific funding check within a payment initiation process. The path includes the payment initiation ID and the funding check ID to identify the specific transaction. The purpose of this API is to provide details about the payment transaction, such as funds availability and related properties, to support the orchestration and processing of payments between payers and payees.

  **Limitations**

  GET: A possible RESTful name for the path '/PaymentInitiation/{paymentinitiationid}/FundingCheck/{fundingcheckid}/Retrieve' could be:

GET /payments/{paymentinitiationid}/funding-checks/{fundingcheckid}

This naming aligns with REST best practices by using lowercase letters, plural nouns for collections, and descriptive resource names.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentInitiation/{paymentinitiationid}/OrderInitiation/{orderinitiationid}/Retrieve</span></summary>

  **Description**

  This service domain provides a customer payment service. It captures the payer and payee details and other key properties of the payment and orchestrates the transaction. It provides support for repeating/scheduled payments ReBQ Retrieve details about the payment order initiation

  **Documentation**

  This API path allows you to retrieve details about a specific payment order initiation by providing the payment initiation ID and order initiation ID. It helps you access information related to the payer, payee, and other important aspects of the payment transaction that has been orchestrated. This API supports repeating/scheduled payments as well. In essence, it helps you retrieve specific details about a payment order initiation within the Payment Initiation service domain.

  **Limitations**

  GET: A suitable name for this path following REST best practices could be:

```
GET /payments/{paymentId}/orders/{orderId}
```

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
