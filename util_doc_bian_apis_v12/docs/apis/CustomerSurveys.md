---
id: CustomerSurveys
title: CustomerSurveys
---

<h1 style='color:red;'>CustomerSurveys</h1>

**BIAN Documentation:** [CustomerSurveys v12](https://app.swaggerhub.com/apis/BIAN-3/CustomerSurveys/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CustomerSurveys/Initiate</span></summary>

  **Description**

  Define and execute and analyze customer surveys InCR Initiate customer survey processing

  **Documentation**

  This BIAN API path allows you to create and initiate customer surveys. It is used to define, execute, and analyze surveys aimed at collecting feedback from customers. By initiating the survey processing through this API, you can gather valuable information from customers to understand their opinions, preferences, and satisfaction levels.

  **Limitations**

  POST: Following REST best practices, the path '/CustomerSurveys/Initiate' should be named using nouns to represent a resource. A more appropriate name for this path based on REST conventions could be '/customer-surveys'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerSurveys/{customersurveysid}/Update</span></summary>

  **Description**

  Define and execute and analyze customer surveys UpCR Update details of an active customer survey process

  **Documentation**

  This API path allows you to update details of an active customer survey process. By sending a PUT request to this endpoint with the specific customer survey ID, you can modify or adjust the parameters, questions, or any other information related to the survey. This can be useful for making changes to an ongoing survey and ensuring that the survey process is up-to-date and accurate.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be `/CustomerSurveys/{customersurveysid}` for updating a specific customer survey resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerSurveys/{customersurveysid}/Request</span></summary>

  **Description**

  Define and execute and analyze customer surveys RqCR Request manual intervention to the survey process

  **Documentation**

  This API path allows you to update an existing customer survey by requesting manual intervention in the survey process. It means that you can make changes to the survey, start or stop the survey process, and analyze the survey results by requesting manual assistance. This is useful for scenarios where you need human intervention to handle specific aspects of the survey process.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/CustomerSurveys/{customersurveysid}/Requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerSurveys/{customersurveysid}/Retrieve</span></summary>

  **Description**

  Define and execute and analyze customer surveys ReCR Retrieve details about a customer survey process

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific customer survey process identified by the customersurveyid. It helps you access details related to defining, executing, and analyzing customer surveys. By using a GET method, you can retrieve information about the customer survey process stored within the system.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/customersurveys/{customersurveysid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerSurveys/{customersurveysid}/Definition/{definitionid}/Update</span></summary>

  **Description**

  Define and execute and analyze customer surveys UpBQ Update aspects of a customer survey definition/specification

  **Documentation**

  This BIAN API path allows you to update specific aspects of a customer survey definition or specification. By providing the customer survey ID and the definition ID, you can make changes to details, questions, or any other elements of the survey. This update operation helps in refining and customizing the survey to better gather feedback and insights from customers.

  **Limitations**

  PUT: A suitable name for the given path following REST best practices could be: 

'/customer-surveys/{customersurveysid}/definition/{definitionid}/update'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerSurveys/{customersurveysid}/Definition/{definitionid}/Retrieve</span></summary>

  **Description**

  Define and execute and analyze customer surveys ReBQ Retrieve details about customer survey related activity

  **Documentation**

  This BIAN API path allows you to retrieve details about customer survey-related activity. By providing the customer survey ID and definition ID, you can access information related to defining, executing, and analyzing customer surveys. This API is helpful for gathering data and insights from customer surveys in order to understand customer preferences and improve business practices.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

GET /customer-surveys/{customersurveysid}/definitions/{definitionid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerSurveys/{customersurveysid}/ReviewerSelection/{reviewerselectionid}/Update</span></summary>

  **Description**

  Define and execute and analyze customer surveys UpBQ Update reviewer selection details

  **Documentation**

  This BIAN API path allows you to update the details of a reviewer selection within a specific customer survey. By making a PUT request to this path with the appropriate customer survey ID and reviewer selection ID, you can modify and update information related to the selection process for reviewers assigned to that particular survey. This action enables you to manage and adjust reviewer selection criteria and details to ensure the success and accuracy of your customer survey efforts.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be structured in a resource-based format and should not include actions like 'Update'. It should focus on the resource being manipulated. 

A better name for the path could be:

`/CustomerSurveys/{customersurveysid}/ReviewerSelection/{reviewerselectionid}`

This path signifies the specific Resource/Entity being targeted and can convey the action of updating by using appropriate HTTP methods, such as PUT/PATCH.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerSurveys/{customersurveysid}/ReviewerSelection/{reviewerselectionid}/Request</span></summary>

  **Description**

  Define and execute and analyze customer surveys RqBQ Request manual intervention in survey reviewer selection

  **Documentation**

  This API path allows you to update an existing request for manual intervention in the selection of a reviewer for a customer survey. By sending a PUT request to this path with specific IDs for the customer survey and reviewer selection, you can define and execute the survey and analyze the results. This functionality is useful when you need human input or oversight in the process of selecting a reviewer for a survey.

  **Limitations**

  PUT: A suitable name for the path '/CustomerSurveys/{customersurveysid}/ReviewerSelection/{reviewerselectionid}/Request' following REST best practices could be:

'/customer-surveys/{customersurveysid}/reviewer-selection/{reviewerselectionid}/request'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerSurveys/{customersurveysid}/ReviewerSelection/{reviewerselectionid}/Retrieve</span></summary>

  **Description**

  Define and execute and analyze customer surveys ReBQ Retrieve details about survey reviewer selection activity

  **Documentation**

  This API path allows you to retrieve details about the activity related to the selection of reviewers for a specific customer survey. By using this endpoint, you can access information about the reviewer selection process for a particular customer survey, such as the reviewers chosen, their qualifications, timeline, and any other relevant details. This information can help you analyze and track the progress of selecting reviewers for your customer surveys.

  **Limitations**

  GET: Based on REST best practices, the name of the path should represent a resource and an action, using nouns to represent resources and verbs to represent actions. 

For the given path, a suggested RESTful name could be:

GET /CustomerSurveys/{customersurveysid}/ReviewerSelection/{reviewerselectionid} 

This name follows the convention of using HTTP methods (in this case, GET) to represent the action of retrieving a specific reviewer selection under a particular customer survey.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerSurveys/{customersurveysid}/Execution/Initiate</span></summary>

  **Description**

  Define and execute and analyze customer surveys InBQ Initiate customer survey execution task

  **Documentation**

  This BIAN API path `/CustomerSurveys/{customersurveysid}/Execution/Initiate` initiates the task of executing a customer survey identified by `{customersurveysid}`. In simpler terms, it allows you to start the process of conducting and collecting responses for a specific customer survey.

  **Limitations**

  POST: The name for the path '/CustomerSurveys/{customersurveysid}/Execution/Initiate' should ideally be structured using nouns to represent resources rather than verbs. A more RESTful name for this path could be:

'/customer-surveys/{customersurveysid}/executions'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerSurveys/{customersurveysid}/Execution/{executionid}/Update</span></summary>

  **Description**

  Define and execute and analyze customer surveys UpBQ Update details of a survey execution task

  **Documentation**

  This API path is used to update the details of a survey execution task related to customer surveys. By providing the customersurveysid and executionid, users can make changes to the information or parameters associated with the execution of a specific survey. This could include updating deadlines, modifying target customers, or adjusting other execution-related elements. The PUT method is used to send the updated information to the API, allowing users to make necessary adjustments to the survey execution process.

  **Limitations**

  PUT: A suitable name for the path '/CustomerSurveys/{customersurveysid}/Execution/{executionid}/Update' following REST best practices could be:

PATCH /CustomerSurveys/{customersurveysid}/Execution/{executionid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerSurveys/{customersurveysid}/Execution/{executionid}/Capture</span></summary>

  **Description**

  Define and execute and analyze customer surveys CaBQ Capture input from a survey execution task

  **Documentation**

  This API path is used to update or modify the data captured during the execution of a customer survey. It specifies the specific customer survey and execution for which the input data needs to be captured. By sending a PUT request to this path with the relevant information, users can update the data collected during the survey execution task. This helps in managing and analyzing customer survey information effectively.

  **Limitations**

  PUT: The name of the path should be:
'/customer-surveys/{customer-survey-id}/execution/{execution-id}/capture'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerSurveys/{customersurveysid}/Execution/{executionid}/Execute</span></summary>

  **Description**

  Define and execute and analyze customer surveys ExBQ Execute an automated action for survey execution

  **Documentation**

  This API path allows you to define and execute customer surveys. You can specify the unique identifier for the customer survey (`customersurveysid`) and the execution identifier (`executionid`) to execute specific surveys. By sending a PUT request to this endpoint, you can update and trigger an automated action for survey execution. This API helps in managing and analyzing customer surveys efficiently.

  **Limitations**

  PUT: A possible name for the path could be:  
`/customer-surveys/{customerSurveyId}/execution/{executionId}/execute`  
The key REST best practices followed in this naming convention include using lowercase letters, using hyphens to separate words, and using plural nouns for collections.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerSurveys/{customersurveysid}/Execution/{executionid}/Request</span></summary>

  **Description**

  Define and execute and analyze customer surveys RqBQ Request manual intervention in survey execution

  **Documentation**

  This API path `/CustomerSurveys/{customersurveysid}/Execution/{executionid}/Request` with the method PUT is used to update an existing customer survey execution by requesting manual intervention. This means that if there are any issues or special requests that require manual handling during the survey execution process, this API allows you to flag and request intervention. It is part of the Customer Surveys API which is used to define, execute, and analyze customer surveys.

  **Limitations**

  PUT: Based on REST best practices, the name of the path for the endpoint should be:

`/customer-surveys/{customerSurveysId}/execution/{executionId}/request`

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerSurveys/{customersurveysid}/Execution/{executionid}/Retrieve</span></summary>

  **Description**

  Define and execute and analyze customer surveys ReBQ Retrieve details about customer survey execution activity

  **Documentation**

  This API path allows you to retrieve information about the execution activity of a customer survey. You can specify the ID of the customer survey and the ID of the execution to retrieve details such as responses, completion status, and any other relevant data related to the execution of the survey. This information can help you analyze the effectiveness of the survey in gathering feedback from customers.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be as follows:

'/customer-surveys/{customer-survey-id}/executions/{execution-id}/retrieve' 

This naming convention uses lowercase letters, separates words with hyphens, and uses plural forms for resource names where applicable.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerSurveys/{customersurveysid}/SurveyAnalysis/Initiate</span></summary>

  **Description**

  Define and execute and analyze customer surveys InBQ Initiate survey result consolidation and analysis

  **Documentation**

  This BIAN API path `/CustomerSurveys/{customersurveysid}/SurveyAnalysis/Initiate` allows you to initiate the consolidation and analysis of survey results for a specific customer survey identified by `{customersurveysid}`. By sending a POST request to this API, you are creating a new resource to begin the process of defining, executing, and analyzing customer surveys. It helps you gather and process feedback from customers in order to gain insights and make informed decisions based on survey results.

  **Limitations**

  POST: Following REST best practices, the name of the path should be:

'/customer-surveys/{customersurveysid}/survey-analysis/initiate'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerSurveys/{customersurveysid}/SurveyAnalysis/{surveyanalysisid}/Update</span></summary>

  **Description**

  Define and execute and analyze customer surveys UpBQ Update details about customer survey analysis

  **Documentation**

  This BIAN API path allows you to update the details of a specific customer survey analysis within a customer survey. By making a PUT request to this path with the appropriate parameters (customersurveysid and surveyanalysisid), you can modify and update the information related to the survey analysis. This helps in managing and improving the analysis process for customer feedback and insights gathered through surveys.

  **Limitations**

  PUT: The name of the path should be:

'/customer-surveys/{customerSurveysId}/survey-analysis/{surveyAnalysisId}'

Following REST best practices, we use lowercase letters and hyphens to separate words in the URL path. Additionally, resource names should generally be in plural form.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerSurveys/{customersurveysid}/SurveyAnalysis/{surveyanalysisid}/Request</span></summary>

  **Description**

  Define and execute and analyze customer surveys ReBQ Request manual intervention in survey analysis

  **Documentation**

  This BIAN API path allows you to update an existing customer survey analysis by requesting manual intervention in the survey analysis process. By sending a PUT request to this path with the specific customer survey ID and survey analysis ID, you can define, execute, and analyze customer surveys while also requesting manual intervention in the analysis if needed.

  **Limitations**

  PUT: The name of the path should be:

'/customer-surveys/{customerSurveysId}/survey-analysis/{surveyAnalysisId}/request'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerSurveys/{customersurveysid}/SurveyAnalysis/{surveyanalysisid}/Retrieve</span></summary>

  **Description**

  Define and execute and analyze customer surveys ReBQ Retrieve details about a customer survey analysis

  **Documentation**

  This API path allows you to retrieve details about a specific survey analysis related to a customer survey. By providing the IDs for both the customer survey and the survey analysis, you can access information such as the results, feedback, and conclusions from the survey analysis. This can help you gather insights and data related to customer satisfaction, preferences, or other feedback provided through the survey.

  **Limitations**

  GET: Based on REST best practices, the name for this path could be:

GET /customer-surveys/{customersurveysid}/survey-analysis/{surveyanalysisid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
