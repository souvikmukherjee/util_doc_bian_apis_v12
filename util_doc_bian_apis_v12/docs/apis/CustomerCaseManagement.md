---
id: CustomerCaseManagement
title: CustomerCaseManagement
---

<h1 style='color:red;'>CustomerCaseManagement</h1>

**BIAN Documentation:** [CustomerCaseManagement v12](https://app.swaggerhub.com/apis/BIAN-3/CustomerCaseManagement/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CustomerCaseManagement/Create</span></summary>

  **Description**

  Track and assess case load and resolution activity - allocate resources as necessary to optimize case resolution performance CrCR Create the management plan for customer case handling

  **Documentation**

  This API path (/CustomerCaseManagement/Create) allows users to create a new resource related to customer case management. It is used to track and evaluate customer case load and resolution activities. This API helps in assigning resources effectively to improve the performance of resolving customer cases. With this API, users can create a management plan for handling customer cases efficiently.

  **Limitations**

  POST: The name of the path should be `/customers` as per REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCaseManagement/{customercasemanagementid}/Update</span></summary>

  **Description**

  Track and assess case load and resolution activity - allocate resources as necessary to optimize case resolution performance UpCR Update aspects of the customer case handling management plan

  **Documentation**

  This BIAN API path allows you to update an existing customer case management plan identified by a specific ID. By using a PUT request, you can modify details related to tracking case load, assessing resolution activity, and allocating resources to enhance case resolution performance. This API helps you optimize the management of customer cases by enabling you to make adjustments and improvements to the handling and resolution processes.

  **Limitations**

  PUT: In RESTful design, the path naming convention should use nouns to represent resources and HTTP methods to represent actions. Given that the operation in question is updating a customer case management entity, a suitable name for the path could be:

```
PUT /CustomerCaseManagements/{customercasemanagementid}
``` 

This path effectively communicates that the HTTP method `PUT` is used to update a specific customer case management resource identified by its `customercasemanagementid`.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCaseManagement/{customercasemanagementid}/Request</span></summary>

  **Description**

  Track and assess case load and resolution activity - allocate resources as necessary to optimize case resolution performance RqCR Request manual intervention with the plan

  **Documentation**

  This API path allows you to update an existing customer case management record to request manual intervention with the plan. It is used to track and analyze the progress of customer cases, allocate resources where needed, and optimize the resolution process. By making a PUT request to this path with a specific customer case management ID, you can indicate the need for manual intervention in order to improve the efficiency and effectiveness of resolving customer cases.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/CustomerCaseManagement/{customercasemanagementid}/Requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerCaseManagement/{customercasemanagementid}/Retrieve</span></summary>

  **Description**

  Track and assess case load and resolution activity - allocate resources as necessary to optimize case resolution performance ReCR Retrieve details about the customer case handling management plan

  **Documentation**

  This API endpoint allows you to retrieve details about a specific customer case management plan using the unique identifier "customercasemanagementid". By accessing this endpoint with a GET request, you can track and evaluate case load and resolution activity, as well as allocate resources to improve the performance of resolving customer cases efficiently. Essentially, this API path provides information on how customer cases are being handled and managed within the system.

  **Limitations**

  GET: Based on REST best practices, the name of the path '/CustomerCaseManagement/{customercasemanagementid}/Retrieve' could be updated to '/customer-case-management/{customercasemanagementid}'. 

Here are some key points to consider:

1. Use lowercase letters to represent resources in the URL path.
2. Use plural nouns to represent collections of resources.
3. Use hyphens to separate words in URLs for better readability.
4. Avoid using action words or verbs in the URLs

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCaseManagement/{customercasemanagementid}/Rules/{rulesid}/Update</span></summary>

  **Description**

  Track and assess case load and resolution activity - allocate resources as necessary to optimize case resolution performance UpBQ Update details of the case resolution criterion

  **Documentation**

  This API path allows you to update the details related to a specific rule within a customer case management system. By making a PUT request to this endpoint, you can modify the criteria or requirements used to determine the resolution of a case. This can help in tracking and assessing the workload and activity related to resolving customer cases, and can also assist in allocating resources effectively to improve the performance of case resolution processes.

  **Limitations**

  PUT: The name of the path should be:

/CustomerCaseManagement/{customercasemanagementid}/Rules/{rulesid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCaseManagement/{customercasemanagementid}/Rules/{rulesid}/Request</span></summary>

  **Description**

  Track and assess case load and resolution activity - allocate resources as necessary to optimize case resolution performance RqBQ Request manual intervention in the case resolution rules

  **Documentation**

  This API path allows users to update an existing rule within the Customer Case Management system. Specifically, it provides a way to request manual intervention in the case resolution rules. By making a PUT request to this path with the appropriate parameters, users can trigger the system to allocate additional resources or adjust the rules in order to optimize the resolution of a customer case.

  **Limitations**

  PUT: The name of the path should be: `/customer-case-management/{customercasemanagementid}/rules/{rulesid}/request` 

Following REST best practices, the path should be all lowercase, use hyphens for multi-word identifiers, and be descriptive of the resource it represents.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerCaseManagement/{customercasemanagementid}/Rules/{rulesid}/Retrieve</span></summary>

  **Description**

  Track and assess case load and resolution activity - allocate resources as necessary to optimize case resolution performance ReBQ Retrieve details about the customer case criterion

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific rule related to a customer case within a customer case management system. The information can help track and assess the workload and resolution activities of cases, as well as allocate resources effectively to optimize the performance of resolving cases. It provides specific criteria about customer cases that can be used for analysis and decision-making within the customer case management process.

  **Limitations**

  GET: The name of the path should be:

'/customer-case-management/{customercasemanagementid}/rules/{rulesid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCaseManagement/{customercasemanagementid}/Performance/{performanceid}/Update</span></summary>

  **Description**

  Track and assess case load and resolution activity - allocate resources as necessary to optimize case resolution performance UpBQ Update performance analysis related information

  **Documentation**

  This API path allows you to update performance analysis related information for a specific customer case management record. You can track and evaluate the workload and resolution activity for a particular case, and make adjustments to optimize performance as needed. By updating the performance analysis information, you can allocate resources more effectively to improve the resolution of cases.

  **Limitations**

  PUT: The recommended naming for the path would be:

'/customer-case-management/{customercasemanagementid}/performance/{performanceid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCaseManagement/{customercasemanagementid}/Performance/{performanceid}/Request</span></summary>

  **Description**

  Track and assess case load and resolution activity - allocate resources as necessary to optimize case resolution performance RqBQ Request manual intervention in unit performance analysis

  **Documentation**

  This API path allows you to update an existing resource in the Customer Case Management system related to performance analysis. Specifically, it enables you to request manual intervention in analyzing the performance of a particular unit within the case management system. This intervention can help optimize case resolution performance by allocating resources as needed based on the assessment of case load and resolution activity.

  **Limitations**

  PUT: The name of the path following REST best practices could be:

'/customer-case-management/{customercasemanagementid}/performances/{performanceid}/request'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerCaseManagement/{customercasemanagementid}/Performance/{performanceid}/Retrieve</span></summary>

  **Description**

  Track and assess case load and resolution activity - allocate resources as necessary to optimize case resolution performance ReBQ Retrieve details about business unit performance assessment activity

  **Documentation**

  This BIAN API path allows you to retrieve details about the performance assessment activity of a specific customer case within a customer case management system. You can view information related to the case load, resolution activity, and resource allocation in order to optimize the performance of resolving cases effectively. Additionally, you can retrieve specific details about the business unit's performance assessment activity related to the customer case management.

  **Limitations**

  GET: Based on REST best practices, a more appropriate name for this path would be:

'/customer-case-management/{customercasemanagementid}/performances/{performanceid}'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
