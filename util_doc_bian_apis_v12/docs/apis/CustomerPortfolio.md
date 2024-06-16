---
id: CustomerPortfolio
title: CustomerPortfolio
---

<h1 style='color:red;'>CustomerPortfolio</h1>

**BIAN Documentation:** [CustomerPortfolio v12](https://app.swaggerhub.com/apis/BIAN-3/CustomerPortfolio/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CustomerPortfolio/Evaluate</span></summary>

  **Description**

  Maintain a portfolio of analytical views of the customer base to support customer segment profitability and performance analysis EvCR Evaluate customer segment performance

  **Documentation**

  This BIAN API path, /CustomerPortfolio/Evaluate, allows you to create a new resource that maintains a portfolio of analytical views of the customer base. This resource is used to support the analysis of customer segment profitability and performance. Specifically, it enables the evaluation of customer segment performance within the customer portfolio. By posting data to this path, you can generate insights into how different customer segments are performing financially and in terms of overall performance.

  **Limitations**

  POST: If the path '/CustomerPortfolio/Evaluate' followed all REST best practices, the name of the endpoint should be structured in a resource-oriented way to reflect the action being performed. A suggestion for a more RESTful naming convention for this path could be '/customers/{customerId}/portfolio/evaluation'. This name clearly indicates the resource being accessed (customers) and the action being performed (evaluation of a customer's portfolio).

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerPortfolio/{customerportfolioid}/Update</span></summary>

  **Description**

  Maintain a portfolio of analytical views of the customer base to support customer segment profitability and performance analysis UpCR Update settings or content for customer segment analysis activity

  **Documentation**

  This API path allows you to update settings or content for customer segment analysis within a customer portfolio. It is used to maintain analytical views of the customer base to support analyzing the profitability and performance of specific customer segments. By making a PUT request to this path with the appropriate customer portfolio ID, you can modify the settings or content related to customer segment analysis activities.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/customers/{customerid}/portfolio'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerPortfolio/{customerportfolioid}/Request</span></summary>

  **Description**

  Maintain a portfolio of analytical views of the customer base to support customer segment profitability and performance analysis RqCR Request manual intervention in the customer segment analysis activity

  **Documentation**

  This BIAN API path allows you to update an existing customer portfolio by requesting manual intervention in the customer segment analysis activity. This means that you can trigger a manual review or adjustment in the analysis of customer segments to better understand their profitability and performance. This updating process helps in maintaining a set of analytical views related to the customer base for more accurate and informed decision-making.

  **Limitations**

  PUT: The appropriate name for the path `/CustomerPortfolio/{customerportfolioid}/Request` following REST best practices would be something like `/customer-portfolios/{customerportfolioid}/requests`. It is recommended to use lowercase letters and hyphens to separate words for better readability and consistency in RESTful URI naming conventions.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerPortfolio/{customerportfolioid}/Retrieve</span></summary>

  **Description**

  Maintain a portfolio of analytical views of the customer base to support customer segment profitability and performance analysis ReCR Retrieve details about customer segment analysis activity

  **Documentation**

  This BIAN API path allows you to retrieve details about customer segment analysis activity within a customer portfolio. Essentially, it helps you access information related to the analysis of different customer segments to understand their profitability and performance better. This can assist in making strategic decisions based on the insights gained from analyzing customer segments within the portfolio.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

'/customerportfolios/{customerportfolioid}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerPortfolio/{customerportfolioid}/PerformanceAnalysis/Evaluate</span></summary>

  **Description**

  Maintain a portfolio of analytical views of the customer base to support customer segment profitability and performance analysis EvBQ Evaluate customer segment performance using a specific type of analysis

  **Documentation**

  This BIAN API path allows users to create a new resource for evaluating customer segment performance within a customer portfolio. By using a specific type of analysis, the API helps maintain analytical views of the customer base to support assessing customer segment profitability and performance.

  **Limitations**

  POST: The name of the path should be:

'/customerportfolios/{customerportfolioid}/performance-analysis/evaluate'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerPortfolio/{customerportfolioid}/PerformanceAnalysis/{performanceanalysisid}/Update</span></summary>

  **Description**

  Maintain a portfolio of analytical views of the customer base to support customer segment profitability and performance analysis UpBQ Update details of a specific customer segment performance analysis

  **Documentation**

  This BIAN API path allows you to update details of a specific customer segment performance analysis within a customer portfolio. This API is part of a system that maintains analytical views of customers to help analyze their profitability and performance within different segments. By using this API, you can modify the details of a particular customer segment's analysis within the portfolio.

  **Limitations**

  PUT: The name of the path should be:

PUT /customer-portfolios/{customerPortfolioid}/performance-analyses/{performanceAnalysisid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerPortfolio/{customerportfolioid}/PerformanceAnalysis/{performanceanalysisid}/Execute</span></summary>

  **Description**

  Maintain a portfolio of analytical views of the customer base to support customer segment profitability and performance analysis ExBQ Execute an automated action against on-going analysis

  **Documentation**

  This API path allows you to update an existing resource related to customer portfolio performance analysis. You specify the customer portfolio ID and the performance analysis ID to target the specific analysis you want to update. By executing a PUT request to this path, you can make necessary changes or perform automated actions on the ongoing analysis to support the evaluation of customer segment profitability and performance.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/customer-portfolios/{customerPortfolioId}/performance-analysis/{performanceAnalysisId}/execute' 

In this path:
- Use lowercase letters
- Use hyphens to separate words
- Use plural nouns for collections
- Use singular nouns for resources
- Use unique identifiers for specific resource instances

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerPortfolio/{customerportfolioid}/PerformanceAnalysis/{performanceanalysisid}/Request</span></summary>

  **Description**

  Maintain a portfolio of analytical views of the customer base to support customer segment profitability and performance analysis RqBQ Request manual intervention to on-going analysis

  **Documentation**

  This API path allows you to update a specific performance analysis within a customer portfolio. By making a PUT request to this path with the customer portfolio ID and performance analysis ID, you can maintain analytical views of the customer base for conducting profitability and performance analysis. Additionally, the API allows you to request manual intervention for any ongoing analysis that may be required.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be structured as follows:
'/customer-portfolios/{customerPortfolioId}/performance-analyses/{performanceAnalysisId}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerPortfolio/{customerportfolioid}/PerformanceAnalysis/{performanceanalysisid}/Retrieve</span></summary>

  **Description**

  Maintain a portfolio of analytical views of the customer base to support customer segment profitability and performance analysis ReBQ Retrieve details about a specific customer segment performance analysis

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific customer segment performance analysis within a customer portfolio. It is used to access analytical views that help analyze the profitability and performance of different customer segments. By providing the customer portfolio ID and performance analysis ID in the path, you can retrieve specific information related to the performance analysis of the chosen customer segment. This API is helpful for tracking and evaluating the performance of various customer groups to support strategic decision-making and improve overall customer satisfaction.

  **Limitations**

  GET: The name of the path should be:

GET /customers/{customerId}/portfolios/{portfolioId}/performanceAnalyses/{analysisId}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
