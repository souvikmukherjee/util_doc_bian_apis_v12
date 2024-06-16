---
id: SuitabilityChecking
title: SuitabilityChecking
---

<h1 style='color:red;'>SuitabilityChecking</h1>

**BIAN Documentation:** [SuitabilityChecking v12](https://app.swaggerhub.com/apis/BIAN-3/SuitabilityChecking/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /SuitabilityChecking/Evaluate</span></summary>

  **Description**

  Confirm that all involved counterparties are suitable for a proposed market trade. EvCR Evaluate the suitability of a proposed transaction

  **Documentation**

  This BIAN API path, "/SuitabilityChecking/Evaluate" with the method POST, is used to assess and determine if the involved counterparties are appropriate and suitable to engage in a proposed market trade. It evaluates the suitability of the planned transaction to ensure that all parties involved meet the necessary requirements and criteria. This API helps in making informed decisions before proceeding with the trade to minimize risks and ensure compliance with regulations.

  **Limitations**

  POST: In RESTful design, the name of the path should represent a resource rather than an action. Therefore, a more suitable name for the path '/SuitabilityChecking/Evaluate' could be '/SuitabilityChecks' or '/Evaluations'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SuitabilityChecking/{suitabilitycheckingid}/Update</span></summary>

  **Description**

  Confirm that all involved counterparties are suitable for a proposed market trade. UpCR Update details of a suitability evaluation

  **Documentation**

  This API path allows you to update the details of a suitability evaluation for confirming if all parties involved in a proposed market trade are suitable. By using a PUT request to this path with a specific suitability checking ID, you can make changes to the evaluation criteria or update information related to the counterparties to ensure they meet the suitability requirements for the trade.

  **Limitations**

  PUT: Based on RESTful best practices, the path should be named as follows:

PUT /SuitabilityCheckings/{suitabilitycheckingid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SuitabilityChecking/{suitabilitycheckingid}/Request</span></summary>

  **Description**

  Confirm that all involved counterparties are suitable for a proposed market trade. RqCR Request manual intervention into an active evaluation

  **Documentation**

  This BIAN API path is used for confirming whether all parties involved in a market trade are suitable for that specific trade. The PUT method is used to update an existing resource related to the suitability checking process. Additionally, there is a functionality to request manual intervention if needed during the evaluation process.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/SuitabilityCheckings/{suitabilitycheckingid}/Requests

The URL should use plural nouns for consistency and clarity.

</details>

<details open>
  <summary><span style='color:red;'>GET: /SuitabilityChecking/{suitabilitycheckingid}/Retrieve</span></summary>

  **Description**

  Confirm that all involved counterparties are suitable for a proposed market trade. ReCR Retrieve details about a suitability evaluation

  **Documentation**

  This API path allows users to retrieve details about a suitability evaluation related to confirming if all involved counterparties are suitable for a proposed market trade. By accessing this path, users can obtain information about the evaluation process and the results to ensure that all parties involved are suitable for the trade.

  **Limitations**

  GET: A suitable name for this path following REST best practices could  be:

GET /suitabilitycheckings/{suitabilitycheckingid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
