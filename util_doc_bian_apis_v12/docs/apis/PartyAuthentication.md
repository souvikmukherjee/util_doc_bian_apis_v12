---
id: PartyAuthentication
title: PartyAuthentication
---

<h1 style='color:red;'>PartyAuthentication</h1>

**BIAN Documentation:** [PartyAuthentication v12](https://app.swaggerhub.com/apis/BIAN-3/PartyAuthentication/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /PartyAuthentication/Evaluate</span></summary>

  **Description**

  This service domain provides a customer identify authentication service covering all channels and devices to support access to the banks products and services EvCR Evaluate a customer's authenticity

  **Documentation**

  This API path allows you to evaluate a customer's authenticity for accessing the bank's products and services across various channels and devices. It provides a customer identity authentication service to verify the legitimacy of the customer. By using this API, you can ensure secure access for customers to the bank's offerings.

  **Limitations**

  POST: The path '/PartyAuthentication/Evaluate' should be renamed using nouns rather than verbs following REST best practices. A better name for the path could be '/party-authentications'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyAuthentication/{partyauthenticationid}/Update</span></summary>

  **Description**

  This service domain provides a customer identify authentication service covering all channels and devices to support access to the banks products and services UpCR Update details of a customer authentication assessment

  **Documentation**

  This API path allows updating specific details related to a customer's identity authentication assessment. It is a part of the Party Authentication service domain, which enables customers to access the bank's products and services securely across various channels and devices. By making a PUT request to this path with the appropriate partyauthenticationid, one can update information regarding how a customer's identity is authenticated.

  **Limitations**

  PUT: The name of the path '/PartyAuthentication/{partyauthenticationid}/Update' following REST best practices could be simply: PATCH /PartyAuthentication/{partyauthenticationid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyAuthentication/{partyauthenticationid}/Execute</span></summary>

  **Description**

  This service domain provides a customer identify authentication service covering all channels and devices to support access to the banks products and services ExCR Execute an automated action for an assessment (e.g. submit data)

  **Documentation**

  This API path is used to execute an automated action for an assessment related to customer identity authentication. It allows you to update an existing resource by providing a specific party authentication ID and triggering a process to submit data for authentication purposes across various channels and devices. This action is essential for granting access to the bank's products and services securely.

  **Limitations**

  PUT: A suitable name for the path '/PartyAuthentication/{partyauthenticationid}/Execute' following REST best practices would be:

```
/PartyAuthentication/{partyauthenticationid}/Invoke
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyAuthentication/{partyauthenticationid}/Request</span></summary>

  **Description**

  This service domain provides a customer identify authentication service covering all channels and devices to support access to the banks products and services RqCR Request manual interventions in an assessment (e.g. engage specialist)

  **Documentation**

  This API path allows for updating a specific customer's identify authentication request within the party authentication system using the provided party authentication ID. The purpose is to manage and support access to the bank's products and services across various channels and devices. Additionally, it allows for requesting manual interventions in an assessment, such as involving a specialist for further evaluation or assistance.

  **Limitations**

  PUT: A possible RESTful name for the path could be: GET /party-authentications/{partyauthenticationid}/requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /PartyAuthentication/{partyauthenticationid}/Retrieve</span></summary>

  **Description**

  This service domain provides a customer identify authentication service covering all channels and devices to support access to the banks products and services ReCR Retrieve details about an authentication assessment

  **Documentation**

  This API path allows you to retrieve information about a customer's identity authentication assessment for accessing the bank's products and services. By providing the party authentication ID, you can get details about how the bank verifies the customer's identity across various channels and devices. This service is essential for ensuring the security and access control measures are in place for customers using the bank's services.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

/partyAuthentications/{partyauthenticationid}

</details>

<details open>
  <summary><span style='color:red;'>POST: /PartyAuthentication/{partyauthenticationid}/Password/Evaluate</span></summary>

  **Description**

  This service domain provides a customer identify authentication service covering all channels and devices to support access to the banks products and services EvBQ Evaluate customer authenticity using passwords

  **Documentation**

  This BIAN API path is for the Party Authentication service, specifically for evaluating a customer's authentication using passwords. The path allows for creating a new resource where the customer's authentication credentials are checked to verify their identity. This service is designed to support secure access to the bank's products and services across different channels and devices.

  **Limitations**

  POST: The name of the path should be:

```
/PartyAuthentication/{partyauthenticationid}/PasswordEvaluation
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /PartyAuthentication/{partyauthenticationid}/Password/{passwordid}/Retrieve</span></summary>

  **Description**

  This service domain provides a customer identify authentication service covering all channels and devices to support access to the banks products and services ReBQ Retrieve details about a password evaluation

  **Documentation**

  This API path allows you to retrieve details about a password evaluation related to a specific party authentication and password ID. It belongs to the Party Authentication service domain, which is responsible for authenticating customer identities across various channels and devices to enable access to the bank's products and services. By using this API, you can obtain information about how a particular password was evaluated within the authentication process for a specific customer.

  **Limitations**

  GET: A good name for this path, following REST best practices, could be:

`/parties/{partyId}/passwords/{passwordId}`

This path is more succinct and adheres to RESTful conventions by using lowercase letters and avoiding unnecessary words like "Authentication" and "Retrieve."

</details>

<details open>
  <summary><span style='color:red;'>POST: /PartyAuthentication/{partyauthenticationid}/Question/Evaluate</span></summary>

  **Description**

  This service domain provides a customer identify authentication service covering all channels and devices to support access to the banks products and services EvBQ Evaluate customer authenticity using secret questions

  **Documentation**

  This BIAN API path is used for evaluating the authenticity of a customer by answering secret questions. The method "POST" is used to create a new resource for this purpose. The service domain covers all channels and devices to support access to the bank's products and services. It aims to provide customer identification authentication to ensure secure access for customers.

  **Limitations**

  POST: The name of the path should be:

`/party-authentications/{partyauthenticationid}/questions/evaluations`

</details>

<details open>
  <summary><span style='color:red;'>GET: /PartyAuthentication/{partyauthenticationid}/Question/{questionid}/Retrieve</span></summary>

  **Description**

  This service domain provides a customer identify authentication service covering all channels and devices to support access to the banks products and services ReBQ Retrieve details about a secret question evaluation

  **Documentation**

  This API path is used to retrieve information about a secret question evaluation for customer identity authentication. It allows access to details about a specific question evaluation within the party authentication process based on the provided party authentication ID and question ID. The purpose is to assist in the process of verifying and confirming the identity of customers across various channels and devices when accessing the bank's products and services.

  **Limitations**

  GET: A more appropriate name for the path following REST best practices could be:

```
GET /parties/{partyId}/authentications/{authenticationId}/questions/{questionId}
```

</details>

<details open>
  <summary><span style='color:red;'>POST: /PartyAuthentication/{partyauthenticationid}/Document/Evaluate</span></summary>

  **Description**

  This service domain provides a customer identify authentication service covering all channels and devices to support access to the banks products and services EvBQ Evaluate customer authenticity using documents

  **Documentation**

  This API path is used for evaluating the authenticity of a customer's identity using documents. It is a service provided by a bank to verify the identity of a customer accessing their products and services across various channels and devices. The POST method allows for creating a new resource related to the authentication process for a specific party authentication ID.

  **Limitations**

  POST: The name of the path should be `/party-authentications/{partyauthenticationid}/documents/evaluate` to follow REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PartyAuthentication/{partyauthenticationid}/Document/{documentid}/Retrieve</span></summary>

  **Description**

  This service domain provides a customer identify authentication service covering all channels and devices to support access to the banks products and services ReBQ Retrieve details about a document evaluation

  **Documentation**

  This API path allows you to retrieve details about a document evaluation related to a specific customer identity authentication process. It supports accessing the bank's products and services by providing information about the authentication status of a particular document for a specific party identification.

  **Limitations**

  GET: A possible name for this path, following REST best practices, could be:

GET /parties/{partyId}/authentications/{authenticationId}/documents/{documentId}

</details>

<details open>
  <summary><span style='color:red;'>POST: /PartyAuthentication/{partyauthenticationid}/Device/Evaluate</span></summary>

  **Description**

  This service domain provides a customer identify authentication service covering all channels and devices to support access to the banks products and services EvBQ Evaluate customer authenticity using a device

  **Documentation**

  This API path is used for evaluating the authenticity of a customer by using a device. When a party authentication ID is provided, a new resource is created to assess whether the customer is genuine or not. This process helps ensure secure access to the bank's products and services through various channels and devices.

  **Limitations**

  POST: A more appropriate name for the path '/PartyAuthentication/{partyauthenticationid}/Device/Evaluate' following REST best practices could be:

'/party-authentications/{partyauthenticationid}/devices/evaluation'

</details>

<details open>
  <summary><span style='color:red;'>GET: /PartyAuthentication/{partyauthenticationid}/Device/{deviceid}/Retrieve</span></summary>

  **Description**

  This service domain provides a customer identify authentication service covering all channels and devices to support access to the banks products and services ReBQ Retrieve details about a device evaluation

  **Documentation**

  This API path is used to retrieve information about a specific device evaluation that is related to customer identity authentication for accessing the bank's products and services. It covers various channels and devices to ensure secure access for customers. The path includes parameters for the party authentication ID and the device ID, allowing for the retrieval of detailed information about the particular device evaluation associated with a customer's authentication process.

  **Limitations**

  GET: A suitable name for this path following REST best practices could be:

GET /party-authentications/{partyauthenticationid}/devices/{deviceid}

</details>

<details open>
  <summary><span style='color:red;'>POST: /PartyAuthentication/{partyauthenticationid}/Biometric/Evaluate</span></summary>

  **Description**

  This service domain provides a customer identify authentication service covering all channels and devices to support access to the banks products and services EvBQ Evaluate customer authenticity using biometrics

  **Documentation**

  This API path, "/PartyAuthentication/{partyauthenticationid}/Biometric/Evaluate", allows users to evaluate the authenticity of a customer using biometrics. This means that customers can prove their identity using features like fingerprints or facial recognition to securely access the bank's products and services across different channels and devices. The endpoint is used to create a new resource for evaluating customer authenticity through biometrics.

  **Limitations**

  POST: The name of the path should be:

'/parties/{partyId}/biometric/evaluations' 

or 

'/party/authentications/{partyAuthenticationId}/biometric/evaluations' 

following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PartyAuthentication/{partyauthenticationid}/Biometric/{biometricid}/Retrieve</span></summary>

  **Description**

  This service domain provides a customer identify authentication service covering all channels and devices to support access to the banks products and services ReBQ Retrieve details about a biometric evaluation

  **Documentation**

  This BIAN API path is used to retrieve details about a biometric evaluation for a specific party authentication ID and biometric ID. It is part of a customer identity authentication service that supports access to a bank's products and services across various channels and devices. This API allows you to retrieve specific information related to a biometric evaluation for authentication purposes.

  **Limitations**

  GET: A suitable name for the given path that follows REST best practices could be:

GET /parties/{partyId}/biometrics/{biometricId}

</details>

<details open>
  <summary><span style='color:red;'>POST: /PartyAuthentication/{partyauthenticationid}/Behavior/Evaluate</span></summary>

  **Description**

  This service domain provides a customer identify authentication service covering all channels and devices to support access to the banks products and services EvBQ Evaluate customer authenticity using behaviors

  **Documentation**

  This API path (/PartyAuthentication/{partyauthenticationid}/Behavior/Evaluate) is used to evaluate the authenticity of a customer's identity by analyzing their behaviors. It is part of a service domain that offers customer identification authentication across different channels and devices for accessing a bank's products and services. By using this API, the bank can verify the customer's identity based on their behaviors, helping to enhance security and prevent unauthorized access.

  **Limitations**

  POST: The name of the path should be:

```
/PartyAuthentications/{partyauthenticationid}/Behaviors/Evaluations
``` 

Here are the reasons behind this suggestion:
1. The resource name should be in plural form, hence 'Behaviors' instead of 'Behavior'.
2. 'Evaluation' should be in plural form 'Evaluations' to indicate that the endpoint deals with multiple evaluations.
3. 'PartyAuthentications' should be in camel case with the first letter in

</details>

<details open>
  <summary><span style='color:red;'>GET: /PartyAuthentication/{partyauthenticationid}/Behavior/{behaviorid}/Retrieve</span></summary>

  **Description**

  This service domain provides a customer identify authentication service covering all channels and devices to support access to the banks products and services ReBQ Retrieve details about a behavior evaluation

  **Documentation**

  This API path allows you to retrieve details about a behavior evaluation associated with a specific customer's identity authentication within a banking system. It is used to access information related to how a customer's behavior has been evaluated to ensure secure access to the bank's products and services across various channels and devices.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/parties/{partyId}/behaviors/{behaviorId}'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
