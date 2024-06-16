---
id: FinancialGateway
title: FinancialGateway
---

<h1 style='color:red;'>FinancialGateway</h1>

**BIAN Documentation:** [FinancialGateway v12](https://app.swaggerhub.com/apis/BIAN-3/FinancialGateway/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /FinancialGateway/Initiate</span></summary>

  **Description**

  This service domain operates automated message interfaces to secure networks such as SWIFT, TELEX, ACH and Financial Market/Exchange reporting services InCR Initiate the financial gateway service session

  **Documentation**

  This API path `/FinancialGateway/Initiate` allows you to create a new financial gateway service session. It operates automated message interfaces to connect to secure networks such as SWIFT, TELEX, ACH, and financial market/exchange reporting services. By initiating this service, you can establish a secure connection to facilitate financial transactions and reporting within these networks.

  **Limitations**

  POST: If the path '/FinancialGateway/Initiate' followed REST best practices, it should be named based on the action it performs rather than the implementation details. An appropriate name could be something like '/transactions/initiate' or '/payments/initiate'. This naming convention makes the API more clear, consistent, and easier to understand for clients.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialGateway/{financialgatewayid}/Update</span></summary>

  **Description**

  This service domain operates automated message interfaces to secure networks such as SWIFT, TELEX, ACH and Financial Market/Exchange reporting services UpCR Update the gateway service details

  **Documentation**

  This BIAN API path allows users to update the details of an existing Financial Gateway resource identified by the {financialgatewayid}. The Financial Gateway service operates automated message interfaces to secure networks like SWIFT, TELEX, ACH, and provides Financial Market/Exchange reporting services. By using the PUT method on this path, users can modify and update the configuration or settings of the Financial Gateway service as needed.

  **Limitations**

  PUT: Based on REST best practices, the name of the API endpoint should be:

PATCH /FinancialGateway/{financialgatewayid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialGateway/{financialgatewayid}/Request</span></summary>

  **Description**

  This service domain operates automated message interfaces to secure networks such as SWIFT, TELEX, ACH and Financial Market/Exchange reporting services RqCR Report an issue with the production service

  **Documentation**

  This API path allows you to update an existing resource within the Financial Gateway service. You can report issues with the production service through this API by providing the ID of the specific financial gateway you are referring to. It operates automated message interfaces to secure networks like SWIFT, TELEX, ACH, and financial market/exchange reporting services.

  **Limitations**

  PUT: The name of the path should be:  
/FinancialGateways/{financialgatewayid}/Requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialGateway/{financialgatewayid}/Retrieve</span></summary>

  **Description**

  This service domain operates automated message interfaces to secure networks such as SWIFT, TELEX, ACH and Financial Market/Exchange reporting services ReCR Retrieve details and statistics relating to a session

  **Documentation**

  This API path allows you to retrieve details and statistics relating to a session within the Financial Gateway service domain. It operates automated message interfaces to secure networks such as SWIFT, TELEX, ACH, and Financial Market/Exchange reporting services. By providing the `financialgatewayid`, you can access information about a specific session associated with the Financial Gateway service, helping you track and analyze relevant data and statistics.

  **Limitations**

  GET: The path name should be `/financial-gateways/{financialgatewayid}` for retrieving a specific financial gateway resource.

</details>

<details open>
  <summary><span style='color:red;'>POST: /FinancialGateway/{financialgatewayid}/Inbound/Initiate</span></summary>

  **Description**

  This service domain operates automated message interfaces to secure networks such as SWIFT, TELEX, ACH and Financial Market/Exchange reporting services InBQ Initiate inbound financial message handling

  **Documentation**

  This API path allows users to create a new resource to initiate the processing of inbound financial messages through the Financial Gateway service. Users can interact with secure networks like SWIFT, TELEX, ACH, and Financial Market/Exchange reporting services by using this API to handle incoming financial messages efficiently.

  **Limitations**

  POST: The name of the path should ideally be something succinct, descriptive, and in line with REST best practices. One possible name could be:

```
/financial-gateways/{financialgatewayid}/inbound/initiate
```

In this example:
- "/financial-gateways" is in lowercase and represents the collection of financial gateways.
- "{financialgatewayid}" is a placeholder for the specific financial gateway identifier.
- "inbound" specifies the direction of the action.
- "init

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialGateway/{financialgatewayid}/Inbound/{inboundid}/Retrieve</span></summary>

  **Description**

  This service domain operates automated message interfaces to secure networks such as SWIFT, TELEX, ACH and Financial Market/Exchange reporting services ReBQ Retrieve details about an inbound financial message

  **Documentation**

  This API path allows you to retrieve details about an inbound financial message within a specific financial gateway. It operates message interfaces for secure networks such as SWIFT, TELEX, ACH, and financial market reporting services. You can use this API to access information related to a specific inbound message in the system.

  **Limitations**

  GET: A potentially suitable name for this path following REST best practices could be:

GET /financialgateways/{financialgatewayid}/inbound/{inboundid}

</details>

<details open>
  <summary><span style='color:red;'>POST: /FinancialGateway/{financialgatewayid}/Outbound/Initiate</span></summary>

  **Description**

  This service domain operates automated message interfaces to secure networks such as SWIFT, TELEX, ACH and Financial Market/Exchange reporting services InBQ Initiate outbound financial message handling

  **Documentation**

  This API path, /FinancialGateway/{financialgatewayid}/Outbound/Initiate, allows you to create a new outbound financial message through the specified financial gateway identified by {financialgatewayid}. This service domain connects to secure networks like SWIFT, TELEX, ACH, and financial market/exchange reporting services to initiate the handling of financial messages such as transactions or reports.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

/financial-gateways/{financialgatewayid}/outbound/initiate

Key points to consider for following REST best practices in the path naming:

1. Use all lowercase letters for consistency.
2. Separate words with hyphens for better readability.
3. Use plural nouns for resource collections (e.g., financial-gateways).
4. Use specific resource identifiers for individual resources (e.g., {financialgatewayid}).

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialGateway/{financialgatewayid}/Outbound/{outboundid}/Retrieve</span></summary>

  **Description**

  This service domain operates automated message interfaces to secure networks such as SWIFT, TELEX, ACH and Financial Market/Exchange reporting services ReBQ Retrieve details about an outbound financial message

  **Documentation**

  This API path allows you to retrieve information about a specific outbound financial message within a financial gateway service. The Financial Gateway service operates automated message interfaces on secure networks like SWIFT, TELEX, ACH, and Financial Market/Exchange reporting services. By using this API path with the specified {financialgatewayid} and {outboundid}, you can get details about the outbound financial message sent through the system. This information can be useful for tracking, monitoring, and analyzing financial transactions.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be as follows:

/financialgateways/{financialgatewayid}/outbound/{outboundid}/retrieve

Here are some key points to follow when naming paths in REST APIs:
1. Use lowercase letters for path segments.
2. Use nouns to describe resources.
3. Use plural nouns for collections.
4. Use verbs for specific actions (like retrieve, create, update, delete).

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
