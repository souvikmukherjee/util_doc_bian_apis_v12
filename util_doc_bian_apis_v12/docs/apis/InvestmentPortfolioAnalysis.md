---
id: InvestmentPortfolioAnalysis
title: InvestmentPortfolioAnalysis
---

<h1 style='color:red;'>InvestmentPortfolioAnalysis</h1>

**BIAN Documentation:** [InvestmentPortfolioAnalysis v12](https://app.swaggerhub.com/apis/BIAN-3/InvestmentPortfolioAnalysis/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /InvestmentPortfolioAnalysis/Evaluate</span></summary>

  **Description**

  Assess and report on investment portfolio make-up, valuation and performance EvCR perform an evaluation of an investment portfolio

  **Documentation**

  This API path allows you to create a new resource for assessing and reporting on an investment portfolio. By sending a POST request to this path with the necessary data, you can trigger an evaluation of the investment portfolio, which will analyze and provide information on the portfolio's composition, valuation, and performance. This API is designed to help users understand and make informed decisions about their investments by providing detailed insights into their portfolio's status.

  **Limitations**

  POST: Following REST best practices, the name of the path should be something that represents a resource, rather than an action. A more appropriate name for the path '/InvestmentPortfolioAnalysis/Evaluate' could be something like '/investment-portfolios' to represent the collection of investment portfolios or '/evaluate' to represent the evaluation process as a resource. Choose a name that describes the resource being accessed or manipulated rather than the action being performed.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InvestmentPortfolioAnalysis/{investmentportfolioanalysisid}/Execute</span></summary>

  **Description**

  Assess and report on investment portfolio make-up, valuation and performance ExCR Execute an automated task for a evaluation

  **Documentation**

  This BIAN API path allows you to update an existing resource for Investment Portfolio Analysis by executing an automated task for evaluation. It assesses and reports on the make-up, valuation, and performance of an investment portfolio identified by the investmentportfolioanalysisid.

  **Limitations**

  PUT: A RESTful name for this path could be '/investment-portfolios/{investmentportfolioanalysisid}/execute'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InvestmentPortfolioAnalysis/{investmentportfolioanalysisid}/Request</span></summary>

  **Description**

  Assess and report on investment portfolio make-up, valuation and performance RqCR Request manual intervention for an evaluation

  **Documentation**

  This API path allows you to update a specific investment portfolio analysis by requesting manual intervention for an evaluation. You can trigger a request for a human evaluator to assess and report on the makeup, valuation, and performance of the investment portfolio associated with the provided ID. This can be helpful when you need additional expert analysis or intervention for a more thorough evaluation of the portfolio.

  **Limitations**

  PUT: The name of the path should be `/investment-portfolio-analyses/{investmentportfolioanalysisid}/requests` in kebab case. This path follows the REST best practices by using lowercase letters and hyphens to separate words in the URL.

</details>

<details open>
  <summary><span style='color:red;'>GET: /InvestmentPortfolioAnalysis/{investmentportfolioanalysisid}/Retrieve</span></summary>

  **Description**

  Assess and report on investment portfolio make-up, valuation and performance ReCR Retrieve details about an investment portfolio analysis

  **Documentation**

  This API path allows you to retrieve information about a specific investment portfolio analysis by providing its unique identifier (investmentportfolioanalysisid). The API will then assess and report on various aspects of the investment portfolio, including its composition, valuation, and performance. This information can be useful for analyzing how well the portfolio is performing and understanding its overall makeup.

  **Limitations**

  GET: The name of the path should be:

'/investment-portfolio-analysis/{investmentportfolioanalysisid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InvestmentPortfolioAnalysis/{investmentportfolioanalysisid}/PerformanceAnalysis/{performanceanalysisid}/Execute</span></summary>

  **Description**

  Assess and report on investment portfolio make-up, valuation and performance ExBQ Execute an automated task for a specific type of analysis

  **Documentation**

  This API path allows you to update an existing resource related to Investment Portfolio Analysis by executing an automated task for a specific type of performance analysis. It helps to assess and report on the make-up, valuation, and performance of an investment portfolio identified by `investmentportfolioanalysisid` using a particular analysis identified by `performanceanalysisid`. By updating the resource through this API, you can trigger the system to perform the designated analysis and provide you with the relevant insights and results.

  **Limitations**

  PUT: Following REST best practices, a more appropriate name for the path could be something like:

'/investment-portfolios/{investmentPortfolioId}/performance-analyses/{performanceAnalysisId}/execute' 

In this naming convention:
- Path segments are in lowercase.
- Hyphens are used to separate words within segments.
- Path parameters are in curly braces and use camelCase.
- The path segments are named in a way that is consistent with the resource they represent.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InvestmentPortfolioAnalysis/{investmentportfolioanalysisid}/PerformanceAnalysis/{performanceanalysisid}/Request</span></summary>

  **Description**

  Assess and report on investment portfolio make-up, valuation and performance RqBQ Request manual intervention for a specific type of analysis

  **Documentation**

  This API path allows you to update an existing performance analysis within a specific investment portfolio analysis. It enables you to request manual intervention for a specific type of analysis within the portfolio, such as assessing the make-up, valuation, and overall performance of the investments.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/InvestmentPortfolios/{investmentportfolioanalysisid}/PerformanceAnalyses/{performanceanalysisid}/Requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /InvestmentPortfolioAnalysis/{investmentportfolioanalysisid}/PerformanceAnalysis/{performanceanalysisid}/Retrieve</span></summary>

  **Description**

  Assess and report on investment portfolio make-up, valuation and performance ReBQ Retrieve details about a specific type of investment portfolio analysis

  **Documentation**

  This API path allows you to retrieve details about a specific type of investment portfolio analysis, focusing on the performance analysis aspect. It helps assess and report on the composition, valuation, and performance of an investment portfolio identified by `investmentportfolioanalysisid` and `performanceanalysisid`.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

`/investment-portfolios/{investmentportfolioanalysisid}/performance-analyses/{performanceanalysisid}`

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
