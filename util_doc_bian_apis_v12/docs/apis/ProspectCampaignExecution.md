---
id: ProspectCampaignExecution
title: ProspectCampaignExecution
---

<h1 style='color:red;'>ProspectCampaignExecution</h1>

**BIAN Documentation:** [ProspectCampaignExecution v12](https://app.swaggerhub.com/apis/BIAN-3/ProspectCampaignExecution/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /ProspectCampaignExecution/Initiate</span></summary>

  **Description**

  Execute a prospect campaign (version) and track and respond to impact InCR Initiate prospect campaign processing

  **Documentation**

  This API path allows you to initiate the processing of a prospect campaign execution. By making a POST request to this path, you can create a new resource that will execute a specific version of a prospect campaign. This API is designed to help track and respond to the impact of the campaign, allowing you to monitor its progress and outcomes.

  **Limitations**

  POST: If the path '/ProspectCampaignExecution/Initiate' followed REST best practices, it should be named based on the resource it represents rather than the action being taken. A more appropriate name for the path could be '/ProspectCampaigns' to represent the collection of prospect campaigns, with a POST method used to initiate a new campaign creation.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProspectCampaignExecution/{prospectcampaignexecutionid}/Retrieve</span></summary>

  **Description**

  Execute a prospect campaign (version) and track and respond to impact ReCR Retrieve details about an active prospect campaign

  **Documentation**

  This API's path allows you to retrieve details about an active prospect campaign execution by providing the ID of the specific prospect campaign execution. It helps track and respond to the impact of the campaign, providing information about the progress and effectiveness of the campaign targeting potential customers.

  **Limitations**

  GET: The name of the path could be `/prospect-campaign-executions/{prospectcampaignexecutionid}`. This path follows REST best practices by using lowercase letters, using hyphens to separate words, and providing a clear and concise description of the resource being accessed.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProspectCampaignExecution/{prospectcampaignexecutionid}/CandidateSelection/{candidateselectionid}/Update</span></summary>

  **Description**

  Execute a prospect campaign (version) and track and respond to impact UpBQ Update a campaign candidate list

  **Documentation**

  This API path allows you to update the candidate list for a specific prospect campaign execution. By providing the IDs for the prospect campaign execution and the candidate selection, you can make updates to the list of potential candidates for the campaign. This API helps in managing and optimizing the targeted audience for the campaign, allowing you to track and respond to the impact of the campaign effectively.

  **Limitations**

  PUT: Following REST best practices, the name of the path should ideally be:

/ prospect-campaign-executions / {prospect-campaign-execution-id} / candidate-selection / {candidate-selection-id} / update

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProspectCampaignExecution/{prospectcampaignexecutionid}/CandidateSelection/{candidateselectionid}/Retrieve</span></summary>

  **Description**

  Execute a prospect campaign (version) and track and respond to impact ReBQ Retrieve details about a campaign candidate list

  **Documentation**

  This BIAN API path is used to retrieve details about a campaign candidate list within a prospect campaign execution process. It allows you to access information about a specific candidate selection within the campaign execution identified by the prospect campaign execution ID and candidate selection ID provided in the path. This can help track and respond to the impact of the campaign on the selected candidates.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

/ProspectCampaignExecutions/{prospectCampaignExecutionId}/CandidateSelections/{candidateSelectionId}/Retrieve

Here are the key changes made to follow best practices:
1. Use plural nouns for resource names where appropriate.
2. Ensure consistent and clear naming conventions for resources and path parameters.
3. Use camelCase for path parameters.

If you have any more questions or need further assistance, feel free to ask!

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProspectCampaignExecution/{prospectcampaignexecutionid}/Execution/Initiate</span></summary>

  **Description**

  Execute a prospect campaign (version) and track and respond to impact InBQ Initiate a campaign execution task

  **Documentation**

  This API path allows you to initiate a task to execute a prospect campaign. It involves creating a new resource, which signifies starting the process of carrying out a specific campaign version and keeping track of its impact. Additionally, it enables you to respond to the outcomes and results of the campaign execution.

  **Limitations**

  POST: The RESTful path should ideally be named in a way that reflects the resource and the action being performed on it. A good name for the path '/ProspectCampaignExecution/{prospectcampaignexecutionid}/Execution/Initiate' while following REST best practices could be:

POST /prospect-campaign-executions/{prospectcampaignexecutionid}/initiate

This path indicates that a new action (POST) is being performed on a specific prospect campaign execution identified by {prospectcampaignexecutionid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProspectCampaignExecution/{prospectcampaignexecutionid}/Execution/{executionid}/Update</span></summary>

  **Description**

  Execute a prospect campaign (version) and track and respond to impact UpBQ Update details of a campaign execution task

  **Documentation**

  This API path allows you to update the details of a campaign execution task within a prospect campaign. By using this endpoint and providing the relevant IDs, you can make changes to the execution of a specific version of the campaign. This could include updating information about how the campaign is being carried out, tracking its progress, and responding to any impact or results that have been observed.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be:

'/prospect-campaign-executions/{prospectcampaignexecutionid}/executions/{executionid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProspectCampaignExecution/{prospectcampaignexecutionid}/Execution/{executionid}/Request</span></summary>

  **Description**

  Execute a prospect campaign (version) and track and respond to impact RqBQ Request manual intervention in a campaign execution task

  **Documentation**

  This API path allows you to update an existing prospect campaign execution by requesting manual intervention during the campaign execution task. By using the PUT method, you can trigger the manual intervention process within the execution of the campaign. This can be helpful when you need human involvement to address any issues or changes during the campaign execution process.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

/ProspectCampaignExecutions/{prospectcampaignexecutionid}/Executions/{executionid}/Requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProspectCampaignExecution/{prospectcampaignexecutionid}/Execution/{executionid}/Retrieve</span></summary>

  **Description**

  Execute a prospect campaign (version) and track and respond to impact ReBQ Retrieve details about a campaign execution task

  **Documentation**

  This API path is used to retrieve information about a specific campaign execution task within a prospect campaign. It allows you to view details related to the execution of a particular version of the campaign, track its progress, and respond to its impact. By using this API, you can access data about how the campaign is performing and make decisions based on the information gathered during its execution.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

GET /prospect-campaign-executions/{prospectcampaignexecutionid}/executions/{executionid}

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProspectCampaignExecution/{prospectcampaignexecutionid}/AnalysisFeedback/Initiate</span></summary>

  **Description**

  Execute a prospect campaign (version) and track and respond to impact InBQ Initiate campaign execution analysis

  **Documentation**

  This BIAN API path `/ProspectCampaignExecution/{prospectcampaignexecutionid}/AnalysisFeedback/Initiate` allows you to initiate the execution analysis of a prospect campaign version. By specifying the `prospectcampaignexecutionid` in the URL, you can trigger the tracking and response to the impact of the campaign. This API helps in monitoring and assessing the effectiveness of the prospect campaign, enabling you to make data-driven decisions for future marketing efforts.

  **Limitations**

  POST: Based on REST best practices, a suitable name for the path '/ProspectCampaignExecution/{prospectcampaignexecutionid}/AnalysisFeedback/Initiate' could be:

POST /prospect-campaign-executions/{prospectcampaignexecutionid}/analysis-feedback

This naming convention follows RESTful guidelines by using all lowercase letters, separating words with hyphens, and using the appropriate HTTP method (POST) for initiating a new analysis feedback related to a specific prospect campaign execution.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProspectCampaignExecution/{prospectcampaignexecutionid}/AnalysisFeedback/{analysisfeedbackid}/Update</span></summary>

  **Description**

  Execute a prospect campaign (version) and track and respond to impact UpBQ Update details of campaign execution activity/performance analysis

  **Documentation**

  This BIAN API path allows you to update details related to the execution of a prospect campaign and the feedback from analysis of its performance. Specifically, you can update information about the campaign execution activities and the analysis feedback received. This helps track the progress and impact of the campaign and allows for responses to be made based on the analysis data.

  **Limitations**

  PUT: The path should be named as follows, according to RESTful best practices:

/ProspectCampaignExecutions/{prospectCampaignExecutionId}/AnalysisFeedbacks/{analysisFeedbackId}

Then, to update a specific analysis feedback, you could use the HTTP PUT method on this path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProspectCampaignExecution/{prospectcampaignexecutionid}/AnalysisFeedback/{analysisfeedbackid}/Request</span></summary>

  **Description**

  Execute a prospect campaign (version) and track and respond to impact ReBQ Request manual intervention in campaign analysis

  **Documentation**

  This API path allows you to update an existing analysis feedback for a prospect campaign execution. The prospect campaign execution involves running a campaign targeted at potential customers. After the campaign is executed, the impact and results are tracked and assessed. The analysis feedback can be updated with any necessary information, such as requesting manual intervention for further analysis by a human expert.

  **Limitations**

  PUT: Based on REST best practices, the path could be named:

```
/ProspectCampaignExecutions/{prospectcampaignexecutionid}/AnalysisFeedbacks/{analysisfeedbackid}/Requests
``` 

Here are some key points considered in the naming:
- Use plural nouns for resource names ('AnalysisFeedbacks', 'Requests').
- Use lowercase letters for resource names.
- Use camelCase for compound words within resource names.
- Use descriptive and meaningful resource names.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProspectCampaignExecution/{prospectcampaignexecutionid}/AnalysisFeedback/{analysisfeedbackid}/Retrieve</span></summary>

  **Description**

  Execute a prospect campaign (version) and track and respond to impact ReBQ Retrieve details about prospect campaign analysis activity

  **Documentation**

  This BIAN API path allows you to retrieve details about prospect campaign analysis activity. Specifically, it lets you access information related to the execution of a prospect campaign (version) and tracking and responding to its impact. By making a GET request to this path with the appropriate identifiers, you can retrieve feedback and analysis details regarding a prospect campaign execution.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

GET /prospect-campaign-executions/{prospectcampaignexecutionid}/analysis-feedback/{analysisfeedbackid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
