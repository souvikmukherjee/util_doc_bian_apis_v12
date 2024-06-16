---
id: TransactionAuthorization
title: TransactionAuthorization
---

<h1 style='color:red;'>TransactionAuthorization</h1>

**BIAN Documentation:** [TransactionAuthorization v12](https://app.swaggerhub.com/apis/BIAN-3/TransactionAuthorization/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /TransactionAuthorization/Evaluate</span></summary>

  **Description**

  This service domain handles risk based authorization for interactive customer transactions. This combines the context (channel) transaction, customer details and recent activity analysis as appropriate. The authorization may require a specific level of party/customer authentication to get approval. EvCR Evaluate a proposed interactive transaction for authorization

  **Documentation**

  This BIAN API path is used for evaluating interactive customer transactions to determine if they should be authorized. It considers various factors such as transaction context, customer details, and recent activity analysis to assess the level of risk involved. The authorization process may also require a specific level of customer authentication for approval. Overall, this API path helps in determining whether a proposed transaction should be approved or not based on risk assessment and authentication requirements.

  **Limitations**

  POST: If the path '/TransactionAuthorization/Evaluate' were to follow RESTful best practices, it could be named using nouns that represent resources rather than actions. A more RESTful name for this path could be '/TransactionAuthorizations'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TransactionAuthorization/{transactionauthorizationid}/Update</span></summary>

  **Description**

  This service domain handles risk based authorization for interactive customer transactions. This combines the context (channel) transaction, customer details and recent activity analysis as appropriate. The authorization may require a specific level of party/customer authentication to get approval. UpCR Update details of a proposed transaction for authorization

  **Documentation**

  This API path allows you to update the details of a proposed transaction that requires authorization. It encompasses risk-based authorization for customer transactions by analyzing various factors such as the transaction context, customer details, and recent activity. The update may involve adjusting the information related to the transaction, and it might also require a certain level of authentication from the customer to be approved.

  **Limitations**

  PUT: The name of the path should be:

'/TransactionAuthorizations/{transactionAuthorizationId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TransactionAuthorization/{transactionauthorizationid}/Execute</span></summary>

  **Description**

  This service domain handles risk based authorization for interactive customer transactions. This combines the context (channel) transaction, customer details and recent activity analysis as appropriate. The authorization may require a specific level of party/customer authentication to get approval. ExCR Execute an automated action for transaction authorization (e.g. upload data)

  **Documentation**

  This API path is used to update a specific transaction authorization by executing an automated action. This action could involve uploading data or performing other operations required for the risk-based authorization of interactive customer transactions. The API combines various factors such as transaction context, customer details, and recent activity analysis to determine the level of authorization needed, which may include specific customer authentication.

  **Limitations**

  PUT: If the path `/TransactionAuthorization/{transactionauthorizationid}/Execute` followed all REST best practices, a suitable name for it could be:

`POST /TransactionAuthorizations/{transactionauthorizationid}/Execute`

In this naming convention:
- The HTTP method `POST` indicates that the request will be creating a new resource or triggering a specific action on the server.
- The resource segment is pluralized as `TransactionAuthorizations` to follow the convention of using plural nouns for collections of resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /TransactionAuthorization/{transactionauthorizationid}/Request</span></summary>

  **Description**

  This service domain handles risk based authorization for interactive customer transactions. This combines the context (channel) transaction, customer details and recent activity analysis as appropriate. The authorization may require a specific level of party/customer authentication to get approval. RqCR Request manual intervention (e.g. engage a specialist)

  **Documentation**

  This API path allows you to update an existing transaction authorization request by providing the transaction ID. The service analyzes the risk associated with the customer transaction based on various factors such as the channel used, the customer's details, and recent activity. It may require additional authentication from the customer to approve the authorization. In cases where manual intervention is needed, such as involving a specialist, a request can be made for this purpose.

  **Limitations**

  PUT: The path should be named as follows: '/transaction-authorizations/{transactionAuthorizationId}/requests' to follow REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /TransactionAuthorization/{transactionauthorizationid}/Retrieve</span></summary>

  **Description**

  This service domain handles risk based authorization for interactive customer transactions. This combines the context (channel) transaction, customer details and recent activity analysis as appropriate. The authorization may require a specific level of party/customer authentication to get approval. ReCR Retrieve details about an interactive transaction authorization

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific interactive transaction authorization using the transaction authorization ID. It provides information related to risk-based authorization for customer transactions by analyzing the context of the transaction, customer details, and recent activity. Additionally, it may require a certain level of authentication to approve the authorization.

  **Limitations**

  GET: The name of the path should be `/transaction-authorizations/{transactionAuthorizationId}` in accordance with REST best practices.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
