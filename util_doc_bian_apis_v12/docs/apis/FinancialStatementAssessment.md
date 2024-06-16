---
id: FinancialStatementAssessment
title: FinancialStatementAssessment
---

<h1 style='color:red;'>FinancialStatementAssessment</h1>

**BIAN Documentation:** [FinancialStatementAssessment v12](https://app.swaggerhub.com/apis/BIAN-3/FinancialStatementAssessment/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /FinancialStatementAssessment/Evaluate</span></summary>

  **Description**

  This Service Domain supports a range of financial analyses that can be used to extract specific insights (e.g. valuations, liquidity, risk, market sensitivities) from an entity's financial statements Evaluate Financial Statement Assessment

  **Documentation**

  This API path allows you to submit a request to evaluate a range of financial analyses based on an entity's financial statements. This evaluation can provide specific insights such as valuations, liquidity, risk, and market sensitivities. By using this API, you can gain a deeper understanding of the financial health and performance of the entity in question.

  **Limitations**

  POST: The name of the path '/FinancialStatementAssessment/Evaluate' should follow REST best practices by being descriptive and noun-based rather than verb-based. A more suitable name for this path could be '/financial-statement-assessments'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialStatementAssessment/{financialstatementassessmentid}/Execute</span></summary>

  **Description**

  This Service Domain supports a range of financial analyses that can be used to extract specific insights (e.g. valuations, liquidity, risk, market sensitivities) from an entity's financial statements Execute Financial Statement Assessment

  **Documentation**

  This API path allows you to update and execute a financial statement assessment identified by a specific financial statement assessment ID. It supports various financial analyses to extract specific insights such as valuations, liquidity, risk, and market sensitivities from an entity's financial statements. This means you can use this API to perform detailed analysis and evaluations based on financial data to generate valuable insights regarding the entity's financial health and performance.

  **Limitations**

  PUT: Based on REST best practices, the path should ideally be named in a way that clearly represents the resource and action being performed. A suitable name for the endpoint might be: 

/financial-statements/{financialstatementid}/execute

This naming convention uses lowercase letters and dashes to separate words, making the endpoint more readable and aligned with RESTful principles.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialStatementAssessment/{financialstatementassessmentid}/Grant</span></summary>

  **Description**

  This Service Domain supports a range of financial analyses that can be used to extract specific insights (e.g. valuations, liquidity, risk, market sensitivities) from an entity's financial statements Grant Financial Statement Assessment

  **Documentation**

  This API path allows you to update an existing financial statement assessment by providing a specific financial statement assessment ID. It supports various financial analyses to help extract insights like valuations, liquidity, risk, and market sensitivities from an entity's financial statements. By using this API, you can update and manage the financial assessment data for a particular entity.

  **Limitations**

  PUT: The name of the path following REST best practices would typically be:
'/financial-statement-assessments/{financialstatementassessmentid}/grant'

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialStatementAssessment/{financialstatementassessmentid}/Notify</span></summary>

  **Description**

  This Service Domain supports a range of financial analyses that can be used to extract specific insights (e.g. valuations, liquidity, risk, market sensitivities) from an entity's financial statements Notify Financial Statement Assessment

  **Documentation**

  This API path allows you to retrieve information related to a financial statement assessment by providing a specific identifier (financialstatementassessmentid). The API supports various financial analyses that can help extract valuable insights such as valuations, liquidity, risk, and market sensitivities from the financial statements of an entity. By accessing this API, you can retrieve important information derived from the financial statements analysis.

  **Limitations**

  GET: The name of the path should be "/financial-statement-assessments/{financialstatementassessmentid}/notifications" in accordance with REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialStatementAssessment/{financialstatementassessmentid}/Request</span></summary>

  **Description**

  This Service Domain supports a range of financial analyses that can be used to extract specific insights (e.g. valuations, liquidity, risk, market sensitivities) from an entity's financial statements Request Financial Statement Assessment

  **Documentation**

  This API path allows you to update an existing financial statement assessment by providing specific insights such as valuations, liquidity, risk, and market sensitivities extracted from an entity's financial statements.

  **Limitations**

  PUT: The name of the path should be: 

'/financial-statement-assessments/{financialstatementassessmentid}/requests' 

This path follows REST best practices by using lowercase letters, separating words with hyphens, and using plural nouns for collection resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialStatementAssessment/{financialstatementassessmentid}/Retrieve</span></summary>

  **Description**

  This Service Domain supports a range of financial analyses that can be used to extract specific insights (e.g. valuations, liquidity, risk, market sensitivities) from an entity's financial statements Retrieve Financial Statement Assessment

  **Documentation**

  This API path allows you to retrieve information related to a specific financial statement assessment identified by a unique financialstatementassessmentid. The API supports various financial analyses such as valuations, liquidity, risk assessments, and market sensitivities derived from an entity's financial statements. This can help users extract specific insights and information about the financial health and performance of the entity being analyzed.

  **Limitations**

  GET: The name of the path should be:

'/financial-statement-assessments/{financialStatementAssessmentId}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /FinancialStatementAssessment/{financialstatementassessmentid}/AssetandLiabilityValuationTest/Evaluate</span></summary>

  **Description**

  This Service Domain supports a range of financial analyses that can be used to extract specific insights (e.g. valuations, liquidity, risk, market sensitivities) from an entity's financial statements Evaluate Asset and Liability Valuation Test

  **Documentation**

  This API path allows you to create a new resource for evaluating asset and liability valuation tests within the context of financial statement assessments. It supports conducting various financial analyses to extract specific insights such as valuations, liquidity, risk, and market sensitivities from an entity's financial statements. By utilizing this API, you can assess the value and worth of assets and liabilities held by an entity to gain a better understanding of its financial health and performance.

  **Limitations**

  POST: A more RESTful name for the path could be: 

'/financial-statement-assessments/{financialstatementassessmentid}/asset-liability-valuation-tests/{testid}/evaluate'

</details>

<details open>
  <summary><span style='color:red;'>POST: /FinancialStatementAssessment/{financialstatementassessmentid}/LiquidityandCashFlowTest/Evaluate</span></summary>

  **Description**

  This Service Domain supports a range of financial analyses that can be used to extract specific insights (e.g. valuations, liquidity, risk, market sensitivities) from an entity's financial statements Evaluate Liquidity and Cash Flow Test

  **Documentation**

  This API path allows users to evaluate the liquidity and cash flow test of a financial statement assessment by creating a new resource. It supports financial analyses to extract insights such as valuations, liquidity, risk, and market sensitivities from an entity's financial statements. This specific endpoint focuses on assessing the liquidity and cash flow aspects of the financial statement to provide valuable insights for financial analysis purposes.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

/financial-statement-assessments/{financialstatementassessmentid}/liquidity-and-cash-flow-tests/{testid}/evaluate

</details>

<details open>
  <summary><span style='color:red;'>POST: /FinancialStatementAssessment/{financialstatementassessmentid}/RiskTest/Evaluate</span></summary>

  **Description**

  This Service Domain supports a range of financial analyses that can be used to extract specific insights (e.g. valuations, liquidity, risk, market sensitivities) from an entity's financial statements Evaluate Risk Test

  **Documentation**

  This API path allows users to evaluate the risk associated with a specific financial statement assessment identified by {financialstatementassessmentid}. By sending a POST request, users can create a new resource that performs a risk test on the financial data, providing insights such as valuations, liquidity, risk factors, and market sensitivities related to the entity's financial statements.

  **Limitations**

  POST: Following REST best practices, the name of the path should be:
'/financial-statement-assessments/{financialstatementassessmentid}/risk-tests/evaluate'

</details>

<details open>
  <summary><span style='color:red;'>POST: /FinancialStatementAssessment/{financialstatementassessmentid}/SensitivityTest/Evaluate</span></summary>

  **Description**

  This Service Domain supports a range of financial analyses that can be used to extract specific insights (e.g. valuations, liquidity, risk, market sensitivities) from an entity's financial statements Evaluate Sensitivity Test

  **Documentation**

  This BIAN API path allows users to create a new resource for evaluating sensitivity tests related to financial statement assessments. It supports conducting various financial analyses to extract insights such as valuations, liquidity, risk, and market sensitivities from an entity's financial statements. The endpoint enables users to perform sensitivity tests on the financial data to assess how changes in different variables may impact the overall financial health and performance of the entity.

  **Limitations**

  POST: A RESTful approach to naming this path would be '/financial-statement-assessments/{financialStatementAssessmentId}/sensitivity-tests/evaluate'. This format follows the convention of using lowercase letters and hyphens to separate words in the path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialStatementAssessment/{financialstatementassessmentid}/AssetandLiabilityValuationTest/{assetandliabilityvaluationtestid}/Execute</span></summary>

  **Description**

  This Service Domain supports a range of financial analyses that can be used to extract specific insights (e.g. valuations, liquidity, risk, market sensitivities) from an entity's financial statements Execute Asset and Liability Valuation Test

  **Documentation**

  This API path allows you to update and execute a specific financial analysis test called Asset and Liability Valuation Test within the context of a financial statement assessment. By providing the necessary IDs for the financial statement assessment and the test itself, you can trigger the execution of this test to extract insights such as valuations, liquidity, risk, and market sensitivities from the financial statements of an entity.

  **Limitations**

  PUT: Based on RESTful principles, the name of the path should be:

'/financial-statements/{financialstatementId}/asset-liability-valuation-tests/{valuationTestId}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialStatementAssessment/{financialstatementassessmentid}/LiquidityandCashFlowTest/{liquidityandcashflowtestid}/Execute</span></summary>

  **Description**

  This Service Domain supports a range of financial analyses that can be used to extract specific insights (e.g. valuations, liquidity, risk, market sensitivities) from an entity's financial statements Execute Liquidity and Cash Flow Test

  **Documentation**

  This BIAN API allows users to update an existing resource related to financial statement assessment. Specifically, it focuses on executing a Liquidity and Cash Flow Test for a particular financial statement assessment ID and test ID. This test helps analyze various financial aspects such as liquidity, cash flow, valuations, risk, and market sensitivities derived from an entity's financial statements. By utilizing this API path, users can extract specific insights and assess the financial health of the entity in question.

  **Limitations**

  PUT: A more RESTful name for the path could be:

'/financial-statement-assessments/{financialstatementassessmentid}/liquidity-cash-flow-tests/{liquidityandcashflowtestid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialStatementAssessment/{financialstatementassessmentid}/RiskTest/{risktestid}/Execute</span></summary>

  **Description**

  This Service Domain supports a range of financial analyses that can be used to extract specific insights (e.g. valuations, liquidity, risk, market sensitivities) from an entity's financial statements Execute Risk Test

  **Documentation**

  This API path allows you to update an existing resource related to a financial statement assessment and a risk test. Specifically, it supports conducting a range of financial analyses to extract insights such as valuations, liquidity, risk, and market sensitivities from an entity's financial statements when executing a risk test identified by a unique risk test ID associated with a financial statement assessment identified by a unique financial statement assessment ID.

  **Limitations**

  PUT: The name of the path should ideally be something like:

'/financial-statements/{financialstatementId}/risk-tests/{riskTestId}/execute'

In this naming convention:
- Replace curly braces with dashes to represent resource hierarchy more clearly.
- Use lowercase letters and separate words with dashes to improve readability.
- Use plural form for resource names when possible.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialStatementAssessment/{financialstatementassessmentid}/SensitivityTest/{sensitivitytestid}/Execute</span></summary>

  **Description**

  This Service Domain supports a range of financial analyses that can be used to extract specific insights (e.g. valuations, liquidity, risk, market sensitivities) from an entity's financial statements Execute Sensitivity Test

  **Documentation**

  This API path allows you to update and execute a sensitivity test within the Financial Statement Assessment service domain. The sensitivity test is a financial analysis tool that helps extract insights such as valuations, liquidity, risk, and market sensitivities from an entity's financial statements. By using this API, you can input specific parameters related to the sensitivity test and run the analysis to gain valuable insights into the financial health and performance of the entity.

  **Limitations**

  PUT: The name of the path should be:

'/financial-statement-assessments/{financialstatementassessmentid}/sensitivity-tests/{sensitivitytestid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialStatementAssessment/{financialstatementassessmentid}/AssetandLiabilityValuationTest/{assetandliabilityvaluationtestid}/Notify</span></summary>

  **Description**

  This Service Domain supports a range of financial analyses that can be used to extract specific insights (e.g. valuations, liquidity, risk, market sensitivities) from an entity's financial statements Notify Asset and Liability Valuation Test

  **Documentation**

  This API path is part of the Financial Statement Assessment service domain and is used to retrieve information about notifying the Asset and Liability Valuation Test. It supports various financial analyses such as valuations, liquidity, risk assessment, and market sensitivities based on an entity's financial statements. The Notify endpoint allows users to access specific insights or results related to the valuation test conducted on assets and liabilities in a straightforward manner.

  **Limitations**

  GET: The name of the path should be:

/financial-statement-assessment/{financial-statement-assessment-id}/asset-liability-valuation-test/{asset-liability-valuation-test-id}/notify

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialStatementAssessment/{financialstatementassessmentid}/LiquidityandCashFlowTest/{liquidityandcashflowtestid}/Notify</span></summary>

  **Description**

  This Service Domain supports a range of financial analyses that can be used to extract specific insights (e.g. valuations, liquidity, risk, market sensitivities) from an entity's financial statements Notify Liquidity and Cash Flow Test

  **Documentation**

  This API path allows users to retrieve information related to a Liquidity and Cash Flow Test that is conducted as part of a financial statement assessment process. The test assesses an entity's ability to meet its short-term financial obligations and manage its cash flow effectively. By retrieving information through this API path, users can gain insights into the liquidity and cash flow performance of the entity being analyzed.

  **Limitations**

  GET: A possible RESTful name for this path could be:

'/financial-statements/{financialstatementassessmentid}/liquidity-and-cash-flow-tests/{liquidityandcashflowtestid}/notify'

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialStatementAssessment/{financialstatementassessmentid}/RiskTest/{risktestid}/Notify</span></summary>

  **Description**

  This Service Domain supports a range of financial analyses that can be used to extract specific insights (e.g. valuations, liquidity, risk, market sensitivities) from an entity's financial statements Notify Risk Test

  **Documentation**

  This API path allows you to retrieve information about notifying a risk test within the context of a financial statement assessment. It supports various financial analyses that help extract specific insights from an entity's financial statements, such as valuations, liquidity, risk, and market sensitivities. This API can be used to access details related to notifying a risk test for assessing risk within financial statements.

  **Limitations**

  GET: Based on REST best practices, the appropriate name for this path would be: `/financial-statement-assessments/{financialStatementAssessmentId}/risk-tests/{riskTestId}/notify`

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialStatementAssessment/{financialstatementassessmentid}/SensitivityTest/{sensitivitytestid}/Notify</span></summary>

  **Description**

  This Service Domain supports a range of financial analyses that can be used to extract specific insights (e.g. valuations, liquidity, risk, market sensitivities) from an entity's financial statements Notify Sensitivity Test

  **Documentation**

  This API path allows you to retrieve information about a specific sensitivity test within the financial statement assessment domain. It supports various financial analyses to extract insights such as valuations, liquidity, risk, and market sensitivities from an entity's financial statements. By using this path, you can access details about a particular sensitivity test associated with a financial statement assessment.

  **Limitations**

  GET: The appropriate name for the path `/FinancialStatementAssessment/{financialstatementassessmentid}/SensitivityTest/{sensitivitytestid}/Notify` while following REST best practices could be:

`/financial-statement-assessments/{financialstatementassessmentid}/sensitivity-tests/{sensitivitytestid}/notify`

This naming convention uses lowercase letters, separates words with hyphens, and provides a clear and descriptive hierarchy for the resource endpoints.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialStatementAssessment/{financialstatementassessmentid}/AssetandLiabilityValuationTest/{assetandliabilityvaluationtestid}/Request</span></summary>

  **Description**

  This Service Domain supports a range of financial analyses that can be used to extract specific insights (e.g. valuations, liquidity, risk, market sensitivities) from an entity's financial statements Request Asset and Liability Valuation Test

  **Documentation**

  This API path allows users to update an existing Asset and Liability Valuation Test within the Financial Statement Assessment service domain. This test is used to analyze an entity's financial statements to extract insights such as valuations, liquidity, risk, and market sensitivities. By making a PUT request to this endpoint with the specific IDs for the financial statement assessment and the valuation test, users can update and request this particular financial analysis.

  **Limitations**

  PUT: Based on REST best practices, a suitable name for the path could be: 

'/financial-statement-assessment/{financialstatementassessmentid}/asset-liability-valuation-test/{assetandliabilityvaluationtestid}/request' 

Ensure to use lowercase letters and hyphens to separate words in the path for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialStatementAssessment/{financialstatementassessmentid}/LiquidityandCashFlowTest/{liquidityandcashflowtestid}/Request</span></summary>

  **Description**

  This Service Domain supports a range of financial analyses that can be used to extract specific insights (e.g. valuations, liquidity, risk, market sensitivities) from an entity's financial statements Request Liquidity and Cash Flow Test

  **Documentation**

  This API path allows you to update an existing resource for conducting a Liquidity and Cash Flow Test as part of the Financial Statement Assessment service. This test helps analyze and extract insights related to an entity's financial statements, such as valuations, liquidity, risk, and market sensitivities. By making a PUT request to this endpoint with the appropriate IDs, you can request specific analyses to be performed on the financial data to assess the entity's liquidity and cash flow.

  **Limitations**

  PUT: A suitable name for the path '/FinancialStatementAssessment/{financialstatementassessmentid}/LiquidityandCashFlowTest/{liquidityandcashflowtestid}/Request' following REST best practices could be:

'/financial-statement-assessments/{financialstatementassessmentid}/liquidity-cashflow-tests/{liquidityandcashflowtestid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialStatementAssessment/{financialstatementassessmentid}/RiskTest/{risktestid}/Request</span></summary>

  **Description**

  This Service Domain supports a range of financial analyses that can be used to extract specific insights (e.g. valuations, liquidity, risk, market sensitivities) from an entity's financial statements Request Risk Test

  **Documentation**

  This API path allows you to update an existing resource related to financial statement assessment and risk testing. It supports financial analyses that can provide insights like valuations, liquidity, risk, and market sensitivities based on an entity's financial statements. By using this path with the appropriate IDs, you can request a risk test within the context of financial statement assessment.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/FinancialStatementAssessments/{financialstatementassessmentid}/RiskTests/{risktestid}/Requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FinancialStatementAssessment/{financialstatementassessmentid}/SensitivityTest/{sensitivitytestid}/Request</span></summary>

  **Description**

  This Service Domain supports a range of financial analyses that can be used to extract specific insights (e.g. valuations, liquidity, risk, market sensitivities) from an entity's financial statements Request Sensitivity Test

  **Documentation**

  This API path allows you to update a specific sensitivity test associated with a financial statement assessment. It is part of a service domain that offers various financial analyses to extract insights from financial statements related to valuations, liquidity, risk, and market sensitivities. By making a PUT request to this path, you can modify the details or parameters of the sensitivity test within the context of the financial statement assessment identified by the financialstatementassessmentid and sensitivity test identified by the sensitivitytestid.

  **Limitations**

  PUT: The name of the path based on REST best practices should be:

/financial-statements/{financialstatementid}/sensitivity-tests/{sensitivitytestid}/request

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialStatementAssessment/{financialstatementassessmentid}/AssetandLiabilityValuationTest/{assetandliabilityvaluationtestid}/Retrieve</span></summary>

  **Description**

  This Service Domain supports a range of financial analyses that can be used to extract specific insights (e.g. valuations, liquidity, risk, market sensitivities) from an entity's financial statements Retrieve Asset and Liability Valuation Test

  **Documentation**

  This API path allows you to retrieve specific information related to asset and liability valuation tests from a financial statement assessment. You can use this API to extract insights such as valuations, liquidity, risk, and market sensitivities from the financial statements of an entity.

  **Limitations**

  GET: Based on RESTful best practices, the name of the path could be something like this:

'/financial-statements/{financialstatementId}/valuation-tests/{valuationTestId}/retrieve'

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialStatementAssessment/{financialstatementassessmentid}/LiquidityandCashFlowTest/{liquidityandcashflowtestid}/Retrieve</span></summary>

  **Description**

  This Service Domain supports a range of financial analyses that can be used to extract specific insights (e.g. valuations, liquidity, risk, market sensitivities) from an entity's financial statements Retrieve Liquidity and Cash Flow Test

  **Documentation**

  This API path allows you to retrieve information related to a Liquidity and Cash Flow Test within the context of Financial Statement Assessment. It is designed to support various financial analyses that help extract insights such as valuations, liquidity, risk, and market sensitivities from an entity's financial statements. By using this API, you can access specific data and assessments related to liquidity and cash flow within financial statements for analysis and decision-making purposes.

  **Limitations**

  GET: Based on REST best practices, a suitable name for the path would be:

'/financial-statement-assessments/{financialStatementAssessmentId}/liquidity-cash-flow-tests/{liquidityAndCashFlowTestId}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialStatementAssessment/{financialstatementassessmentid}/RiskTest/{risktestid}/Retrieve</span></summary>

  **Description**

  This Service Domain supports a range of financial analyses that can be used to extract specific insights (e.g. valuations, liquidity, risk, market sensitivities) from an entity's financial statements Retrieve Risk Test

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific risk test within a financial statement assessment. It is part of a service domain that offers various financial analyses to gain insights such as valuations, liquidity, risk, and market sensitivities from an entity's financial statements. By using this API, you can access details related to a particular risk test within the specified financial statement assessment.

  **Limitations**

  GET: A more appropriate name for this path following REST best practices could be: 

'/financial-statements/{financialstatementId}/risk-tests/{riskTestId}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /FinancialStatementAssessment/{financialstatementassessmentid}/SensitivityTest/{sensitivitytestid}/Retrieve</span></summary>

  **Description**

  This Service Domain supports a range of financial analyses that can be used to extract specific insights (e.g. valuations, liquidity, risk, market sensitivities) from an entity's financial statements Retrieve Sensitivity Test

  **Documentation**

  This API path allows users to retrieve information about a specific sensitivity test within a financial statement assessment. The sensitivity test provides insights into various financial aspects such as valuations, liquidity, risk, and market sensitivities of an entity based on its financial statements. By accessing this API, users can obtain detailed analysis results that help in understanding how changes in certain factors can impact the entity's financial health and performance.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

GET /financial-statements/{financialstatementassessmentid}/sensitivity-tests/{sensitivitytestid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
