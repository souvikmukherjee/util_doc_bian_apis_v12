---
id: PaymentExecution
title: PaymentExecution
---

<h1 style='color:red;'>PaymentExecution</h1>

**BIAN Documentation:** [PaymentExecution v12](https://app.swaggerhub.com/apis/BIAN-3/PaymentExecution/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /PaymentExecution/Initiate</span></summary>

  **Description**

  This service domains processes the movement of funds between accounts within the bank or to/from an account held with another bank, selecting the appropriate payment mechanism InCR Initiate a payment execution procedure

  **Documentation**

  This API path allows you to initiate a payment execution procedure within a bank. It helps move funds between accounts within the bank or to and from an account held with another bank. By selecting the appropriate payment mechanism, you can start the process of transferring money securely and efficiently.

  **Limitations**

  POST: If the path '/PaymentExecution/Initiate' were following REST best practices, it could be renamed to something like '/payments/initiate'. This name reflects the resource being accessed ('payments') and the action being performed ('initiate'), which is a more standard naming convention in RESTful APIs.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentExecution/{paymentexecutionid}/Update</span></summary>

  **Description**

  This service domains processes the movement of funds between accounts within the bank or to/from an account held with another bank, selecting the appropriate payment mechanism UpCR Update details of a payment execution instruction

  **Documentation**

  This API path allows the user to update details of a payment execution instruction using a PUT request. The service enables the movement of funds between accounts within the bank or to/from an account held with another bank by selecting the appropriate payment mechanism. The user can specify the payment execution ID in the path to update the specific payment execution instruction.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be something like this:

```
/PaymentExecutions/{paymentexecutionid}
```

This path indicates the resource type (PaymentExecution) and the specific instance identified by its unique identifier (paymentexecutionid). The "Update" operation can be achieved by using an appropriate HTTP method, such as PUT or PATCH, on this resource endpoint.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentExecution/{paymentexecutionid}/Retrieve</span></summary>

  **Description**

  This service domains processes the movement of funds between accounts within the bank or to/from an account held with another bank, selecting the appropriate payment mechanism ReCR Retrieve details about a payment execution instruction

  **Documentation**

  This BIAN API path, /PaymentExecution/{paymentexecutionid}/Retrieve, is used to retrieve details about a payment execution instruction. It allows users to access specific information related to the movement of funds between bank accounts or to/from an account held with another bank. By providing the paymentexecutionid parameter in the request, users can retrieve information about a particular payment execution transaction, such as the payment mechanism used and any other relevant details associated with it.

  **Limitations**

  GET: Based on REST best practices, the name of the path should describe the resource that will be retrieved rather than the action to be performed. A suitable name for the path '/PaymentExecution/{paymentexecutionid}/Retrieve' could be '/PaymentExecutions/{paymentexecutionid}' or '/PaymentExecutions/{id}'. This name aligns better with REST conventions and focuses on the resource being retrieved, which is the PaymentExecution identified by its unique ID.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentExecution/{paymentexecutionid}/PaymentMechanism/{paymentmechanismid}/Retrieve</span></summary>

  **Description**

  This service domains processes the movement of funds between accounts within the bank or to/from an account held with another bank, selecting the appropriate payment mechanism ReBQ Retrieve details about the payment mechanism selection

  **Documentation**

  This API path allows you to retrieve details about the payment mechanism selection for a specific payment execution. It is useful for accessing information about how funds are moved between accounts within the bank or to/from an account held with another bank. By making a GET request to this endpoint with the relevant payment execution ID and payment mechanism ID, you can retrieve specific information regarding the payment mechanism chosen for the transaction.

  **Limitations**

  GET: Following REST best practices, the path name should be:
'/payment-executions/{paymentexecutionid}/payment-mechanisms/{paymentmechanismid}/retrieve'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PaymentExecution/{paymentexecutionid}/PaymentExecution/{paymentexecutionid}/Control</span></summary>

  **Description**

  This service domains processes the movement of funds between accounts within the bank or to/from an account held with another bank, selecting the appropriate payment mechanism CoBQ Control the execution of the gateway transaction

  **Documentation**

  This API path is used to update and control the execution of a payment transaction within a banking system. It allows for the movement of funds between accounts within the same bank or to/from an external bank account, using the appropriate payment method. The "PUT" method is used to update an existing resource related to payment execution. The service ensures that the payment transaction is processed correctly and securely.

  **Limitations**

  PUT: The name of the path should be:

`/payment-executions/{paymentexecutionid}/control`

Following REST best practices, it is recommended to use lowercase letters and hyphens to separate words in the path segments. Additionally, the path should use plural nouns for collections to denote a resource.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PaymentExecution/{paymentexecutionid}/PaymentExecution/{paymentexecutionid}/Retrieve</span></summary>

  **Description**

  This service domains processes the movement of funds between accounts within the bank or to/from an account held with another bank, selecting the appropriate payment mechanism ReBQ Retrieve details about the gateway transaction

  **Documentation**

  This API path allows you to retrieve details about a specific payment execution transaction identified by its payment execution ID. The service handles the transfer of funds between accounts within the bank or to/from an account held with another bank. By using this API, you can access information related to the gateway transaction associated with the payment execution process.

  **Limitations**

  GET: The name of the path should be:

"/payment-executions/{paymentexecutionid}/retrieve"

According to REST best practices:
- Use lowercase letters for path segments.
- Use hyphens to separate words in the path segments.
- Use plural nouns for resource names where appropriate.
- Avoid redundant words like "PaymentExecution" since it is already clear from the context.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
