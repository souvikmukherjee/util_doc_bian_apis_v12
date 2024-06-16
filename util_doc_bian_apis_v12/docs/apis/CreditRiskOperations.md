---
id: CreditRiskOperations
title: CreditRiskOperations
---

<h1 style='color:red;'>CreditRiskOperations</h1>

**BIAN Documentation:** [CreditRiskOperations v12](https://app.swaggerhub.com/apis/BIAN-3/CreditRiskOperations/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /CreditRiskOperations/{creditriskoperationsid}/Control</span></summary>

  **Description**

  This Service Domain monitors counterparty credit limits in the trading unit Control Trading Credit Position Measurement

  **Documentation**

  This BIAN API path allows you to update an existing resource related to monitoring counterparty credit limits in the trading unit Control Trading Credit Position Measurement within the Credit Risk Operations service domain. By using the PUT method on this path, you can make changes or modifications to the data or settings associated with this monitoring process.

  **Limitations**

  PUT: Following REST best practices, the path '/CreditRiskOperations/{creditriskoperationsid}/Control' should be named as:

'/credit-risk-operations/{creditriskoperationsid}/control'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CreditRiskOperations/Evaluate</span></summary>

  **Description**

  This Service Domain monitors counterparty credit limits in the trading unit Evaluate Trading Credit Position Measurement

  **Documentation**

  This BIAN API path for Credit Risk Operations with the endpoint /CreditRiskOperations/Evaluate is responsible for creating a new resource related to monitoring and evaluating counterparty credit limits in the trading unit that handles the measurement of trading credit positions. This API is used to track and manage credit limits for counterparties involved in trading activities to ensure that the trading unit's credit positions are assessed accurately and effectively.

  **Limitations**

  POST: Following REST best practices, the name of the path should be:

```
GET /credit-risk-operations/evaluate
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CreditRiskOperations/{creditriskoperationsid}/Execute</span></summary>

  **Description**

  This Service Domain monitors counterparty credit limits in the trading unit Execute Trading Credit Position Measurement

  **Documentation**

  This API path allows you to update an existing resource related to monitoring counterparty credit limits in the trading unit Execute Trading Credit Position Measurement within the Credit Risk Operations service domain. It specifically deals with managing and adjusting credit limits for trading activities to ensure that the credit risk is being monitored effectively.

  **Limitations**

  PUT: The name of the path should be: "/credit-risk-operations/{creditriskoperationsid}/execute"

</details>

<details open>
  <summary><span style='color:red;'>GET: /CreditRiskOperations/{creditriskoperationsid}/Notify</span></summary>

  **Description**

  This Service Domain monitors counterparty credit limits in the trading unit Notify Trading Credit Position Measurement

  **Documentation**

  This API path allows you to retrieve information related to monitoring counterparty credit limits in the trading unit for the Credit Risk Operations Service Domain. The specific resource being accessed here is the notification for Trading Credit Position Measurement. By using the GET method on this path, you can access data and details associated with monitoring credit limits for counterparties in the trading unit within the context of credit risk operations.

  **Limitations**

  GET: The name of the path should be: 

`/credit-risk-operations/{creditriskoperationsid}/notify`

Following REST best practices, it's recommended to use lowercase letters and separate words with hyphens in the URL path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CreditRiskOperations/{creditriskoperationsid}/Request</span></summary>

  **Description**

  This Service Domain monitors counterparty credit limits in the trading unit Request Trading Credit Position Measurement

  **Documentation**

  This BIAN API path is used to update an existing resource related to monitoring counterparty credit limits in the trading unit for requesting trading credit position measurements within the Credit Risk Operations service domain. This path allows you to make changes or updates to specific data or settings associated with credit risk operations.

  **Limitations**

  PUT: A good RESTful path name for that endpoint could be:
'/creditriskoperations/{creditriskoperationsid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CreditRiskOperations/{creditriskoperationsid}/TradingCounterpartyCreditLimitIndicator/Evaluate</span></summary>

  **Description**

  This Service Domain monitors counterparty credit limits in the trading unit Evaluate Trading Counterparty Credit Limit Indicator

  **Documentation**

  This BIAN API path is used to evaluate the credit limit indicator for a trading counterparty within the Credit Risk Operations service domain. By making a POST request to this endpoint, a new resource is created to monitor and assess the credit limits associated with a specific trading counterparty in the system. This evaluation is crucial for managing and mitigating credit risk within the trading unit.

  **Limitations**

  POST: The name of the path should be:

'/credit-risk-operations/{credit-risk-operations-id}/trading-counterparty-credit-limit-indicator/evaluate'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CreditRiskOperations/{creditriskoperationsid}/TradingCounterpartyCreditLimitIndicator/{tradingcounterpartycreditlimitindicatorid}/Execute</span></summary>

  **Description**

  This Service Domain monitors counterparty credit limits in the trading unit Execute Trading Counterparty Credit Limit Indicator

  **Documentation**

  This API path is used to update the execution status of a counterparty credit limit indicator for a specific credit risk operation within the context of trading activities. It allows users to modify or update information related to monitoring the credit limits of counterparties involved in trading transactions.

  **Limitations**

  PUT: Based on REST best practices, a clearer and more concise name for this path could be:

 '/credit-risk/{creditriskoperationsid}/counterparty-credit-limit/{tradingcounterpartycreditlimitindicatorid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CreditRiskOperations/{creditriskoperationsid}/TradingCounterpartyCreditLimitIndicator/{tradingcounterpartycreditlimitindicatorid}/Notify</span></summary>

  **Description**

  This Service Domain monitors counterparty credit limits in the trading unit Notify Trading Counterparty Credit Limit Indicator

  **Documentation**

  This API path allows you to retrieve information related to monitoring counterparty credit limits in a trading unit. Specifically, it involves notifying about the credit limit indicator for a trading counterparty within the Credit Risk Operations service domain. By making a GET request to this API path with the appropriate IDs, you can access details about the credit limit indicator for a specific trading counterparty and understand the status of their credit limit monitoring within the trading unit.

  **Limitations**

  GET: The name of the path could be `/credit-risk-operations/{creditriskoperationsid}/trading-counterparty-credit-limit-indicator/{tradingcounterpartycreditlimitindicatorid}/notify` if following REST best practices. Make sure to use lowercase letters, dashes for readability, and keep the path descriptive and representative of the resources being accessed.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CreditRiskOperations/{creditriskoperationsid}/TradingCounterpartyCreditLimitIndicator/{tradingcounterpartycreditlimitindicatorid}/Request</span></summary>

  **Description**

  This Service Domain monitors counterparty credit limits in the trading unit Request Trading Counterparty Credit Limit Indicator

  **Documentation**

  This BIAN API path allows you to update an existing resource related to monitoring counterparty credit limits in a trading unit. It specifically pertains to requesting the trading counterparty credit limit indicator within the credit risk operations service domain. By making a PUT request to this path, you can update the information or status of the trading counterparty credit limit indicator associated with a particular credit risk operations ID and trading counterparty credit limit indicator ID.

  **Limitations**

  PUT: A good name for this path following REST best practices could be:

`/credit-risk-operations/{creditriskoperationsid}/trading-counterparty-credit-limit-indicators/{tradingcounterpartycreditlimitindicatorid}/requests`

</details>

<details open>
  <summary><span style='color:red;'>GET: /CreditRiskOperations/{creditriskoperationsid}/TradingCounterpartyCreditLimitIndicator/{tradingcounterpartycreditlimitindicatorid}/Retrieve</span></summary>

  **Description**

  This Service Domain monitors counterparty credit limits in the trading unit Retrieve Trading Counterparty Credit Limit Indicator

  **Documentation**

  This BIAN API path allows you to retrieve information about the credit limit indicator for a specific trading counterparty within the Credit Risk Operations Service Domain. This API is used to monitor and manage the credit limits associated with trading activities to ensure compliance with established limits and assess the financial risk of counterparties involved in trading transactions.

  **Limitations**

  GET: Based on REST best practices, a more standard naming convention for this path could be '/credit-risk-operations/{credit-risk-operations-id}/trading-counterparty-credit-limit-indicators/{trading-counterparty-credit-limit-indicator-id}'.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
