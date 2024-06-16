---
id: SystemsAdministration
title: SystemsAdministration
---

<h1 style='color:red;'>SystemsAdministration</h1>

**BIAN Documentation:** [SystemsAdministration v12](https://app.swaggerhub.com/apis/BIAN-3/SystemsAdministration/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /SystemsAdministration/{systemsadministrationid}/Capture</span></summary>

  **Description**

  Administer the configuration, maintenance, assignment and track usage and status of all IT assets deployed in development and production across the enterprise CaCR Capture IT System Administrative Plan activity or event related information

  **Documentation**

  This API path allows you to update information related to the administration, configuration, maintenance, assignment, usage, and status of IT assets within an enterprise system called CaCR Capture IT System. By using this API, you can make changes to activity or event information related to the IT assets deployed in both development and production environments.

  **Limitations**

  PUT: The name of the path should be:  

'/systems-administration/{systemsadministrationid}/capture'  

In RESTful API design, it is recommended to use lowercase letters, hyphens for readability, and plural nouns for consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SystemsAdministration/{systemsadministrationid}/Control</span></summary>

  **Description**

  Administer the configuration, maintenance, assignment and track usage and status of all IT assets deployed in development and production across the enterprise CoCR Control the processing of IT System Administrative Plan

  **Documentation**

  This API path allows users to update and manage the configuration, maintenance, assignment, usage tracking, and status monitoring of IT assets deployed in development and production within an enterprise. It helps control the processing of an IT System Administrative Plan, enabling administrators to efficiently oversee and manage IT systems across the organization.

  **Limitations**

  PUT: Based on REST best practices, the path should be named as follows:
'/systems-administration/{systemsadministrationid}/control'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SystemsAdministration/{systemsadministrationid}/Exchange</span></summary>

  **Description**

  Administer the configuration, maintenance, assignment and track usage and status of all IT assets deployed in development and production across the enterprise EcCR Accept, verify, etc. aspects of IT System Administrative Plan processing

  **Documentation**

  This API path "/SystemsAdministration/{systemsadministrationid}/Exchange" with the PUT method allows you to update an existing resource related to Systems Administration. Specifically, it helps to manage the configuration, maintenance, assignment, and tracking of IT assets deployed in development and production within an organization. It also involves verifying aspects of the IT System Administrative Plan to ensure that everything is functioning correctly and efficiently.

  **Limitations**

  PUT: The name of the path should be: '/systems-administration/{systemsadministrationid}/exchange'. 

This path follows REST best practices by using lowercase letters, using hyphens to separate words, and using plural nouns for resource names.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SystemsAdministration/{systemsadministrationid}/Grant</span></summary>

  **Description**

  Administer the configuration, maintenance, assignment and track usage and status of all IT assets deployed in development and production across the enterprise GrCR Obtain permission to act in relation to IT System Administrative Plan

  **Documentation**

  This API path allows you to update the permission for a specific systems administration ID in the context of IT system administration plan. It is used to administer the configuration, maintenance, assignment, and tracking of IT assets in development and production environments within the enterprise. By sending a PUT request to this path with the appropriate data, you can grant permission for a particular systems administration ID to carry out administrative tasks related to the IT System Administrative Plan.

  **Limitations**

  PUT: The name of the path should be something like: 

'/systems-administration/{systemsadministrationid}/grant' 

Following REST best practices, the path should be in lowercase letters, use hyphens to separate words for readability, and should describe the resource that is being accessed in a clear and intuitive way.

</details>

<details open>
  <summary><span style='color:red;'>POST: /SystemsAdministration/Initiate</span></summary>

  **Description**

  Administer the configuration, maintenance, assignment and track usage and status of all IT assets deployed in development and production across the enterprise InCR Instantiate a new IT System Administrative Plan

  **Documentation**

  This API path allows you to create a new IT System Administrative Plan for managing IT assets across the enterprise. It is used to administer the configuration, maintenance, assignment, and tracking of usage and status of all IT assets deployed in development and production. Essentially, this API helps in setting up a plan to efficiently manage and keep track of various IT assets within an organization.

  **Limitations**

  POST: In order to follow REST best practices, the name of the path should be standardized by using a noun that represents a resource. In this case, '/SystemsAdministration/Initiate' could be named as '/system-administrations'.

</details>

<details open>
  <summary><span style='color:red;'>GET: /SystemsAdministration/{systemsadministrationid}/Retrieve</span></summary>

  **Description**

  Administer the configuration, maintenance, assignment and track usage and status of all IT assets deployed in development and production across the enterprise ReCR Retrieve details about any aspect of IT System Administrative Plan

  **Documentation**

  This BIAN API path allows you to retrieve details about any aspect of an IT System Administrative Plan. It involves administering the configuration, maintenance, assignment, and tracking usage and status of all IT assets deployed in development and production across an organization. By making a GET request to this API path with a specific identifier, you can access information related to system administration activities within the enterprise.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

`/systems-administration/{systemsadministrationid}`

RESTful URLs typically use lowercase letters and hyphens to separate words in the path. Additionally, the path should be structured in a way that reflects the resource hierarchy, with the specific resource identifier (`systemsadministrationid`) included in the path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SystemsAdministration/{systemsadministrationid}/Request</span></summary>

  **Description**

  Administer the configuration, maintenance, assignment and track usage and status of all IT assets deployed in development and production across the enterprise RqCR Request manual intervention or a decision with respect to IT System Administrative Plan

  **Documentation**

  This API path is used to update an existing system administration request. It allows users to make changes related to the configuration, maintenance, assignment, and tracking of IT assets deployed in both development and production environments within the organization. This update may require manual intervention or decision-making according to the IT System Administrative Plan.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/systems-administration/{systemsadministrationid}/requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SystemsAdministration/{systemsadministrationid}/Update</span></summary>

  **Description**

  Administer the configuration, maintenance, assignment and track usage and status of all IT assets deployed in development and production across the enterprise UpCR Update details relating to IT System Administrative Plan

  **Documentation**

  This API path allows you to update details related to an IT System Administrative Plan within Systems Administration. It is used to administer the configuration, maintenance, assignment, and tracking of usage and status of all IT assets deployed in development and production across the enterprise. By sending a PUT request to this endpoint with the appropriate data, you can make changes to the existing information associated with a particular Systems Administration ID.

  **Limitations**

  PUT: The name of the path should be:

'/systems-administration/{systemsadministrationid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SystemsAdministration/{systemsadministrationid}/Assurance/{assuranceid}/Capture</span></summary>

  **Description**

  Administer the configuration, maintenance, assignment and track usage and status of all IT assets deployed in development and production across the enterprise CaBQ Capture Assurance activity or event related information

  **Documentation**

  This API path allows you to update information related to the administration of IT assets in a systems administration context. Specifically, it covers configuring, maintaining, assigning, and tracking the usage and status of these assets. It pertains to activities or events related to the CaBQ Capture Assurance process within an enterprise. By providing the relevant IDs, you can make updates to this information through the PUT method in the specified path.

  **Limitations**

  PUT: The name of the path should be `/systems-administration/{systemsadministrationid}/assurance/{assuranceid}/capture` if it followed REST best practices. This name follows the convention of using lowercase letters, separating words with hyphens, and including specific resource identifiers for the dynamic parts of the path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SystemsAdministration/{systemsadministrationid}/CapacityPlanningandResilience/{capacityplanningandresilienceid}/Capture</span></summary>

  **Description**

  Administer the configuration, maintenance, assignment and track usage and status of all IT assets deployed in development and production across the enterprise CaBQ Capture Capacity Planning and Resilience activity or event related information

  **Documentation**

  This API path allows you to update or modify the information related to capturing capacity planning and resilience activity of IT assets within the enterprise. It involves administering the configuration, maintenance, assignment, usage tracking, and status monitoring of IT assets in both development and production environments. The endpoint helps manage and track the necessary information for activities related to capacity planning and resilience within the enterprise's IT infrastructure.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/systems-administration/{systemsadministrationid}/capacity-planning-and-resilience/{capacityplanningandresilienceid}/capture'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SystemsAdministration/{systemsadministrationid}/Configuration/{configurationid}/Capture</span></summary>

  **Description**

  Administer the configuration, maintenance, assignment and track usage and status of all IT assets deployed in development and production across the enterprise CaBQ Capture Configuration activity or event related information

  **Documentation**

  This API endpoint allows you to update information related to the configuration of IT assets within an enterprise system administration. Specifically, it facilitates administrators in managing the settings, maintenance, assignment, and tracking of usage and status for various IT assets in development and production environments. The "CaBQ Capture Configuration" activity or event information can be modified through this API to ensure accurate and up-to-date records of the configuration settings.

  **Limitations**

  PUT: The name of the path should be:

```
/SystemsAdministration/{systemAdministrationId}/Configurations/{configurationId}/Capture
```

Following REST best practices:
- Use lowercase letters for resource names.
- Use plural nouns for resource names.
- Use camelCase for multi-word resource names.
- Avoid unnecessary words like "of" and "with".
- Use specific resource names that clearly define the target endpoint.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SystemsAdministration/{systemsadministrationid}/Inventory/{inventoryid}/Capture</span></summary>

  **Description**

  Administer the configuration, maintenance, assignment and track usage and status of all IT assets deployed in development and production across the enterprise CaBQ Capture Inventory activity or event related information

  **Documentation**

  This API path allows you to update information related to capturing inventory activity or event specifically for IT assets that are deployed in development and production within an enterprise. It is used for administering the configuration, maintenance, assignment, and tracking of usage and status of these IT assets.

  **Limitations**

  PUT: The name of the path should ideally be: 

`/systemsAdministration/{systemsadministrationid}/inventory/{inventoryid}/capture` 

Following REST best practices, all path components should be in lowercase and use hyphens for multi-word identifiers.

</details>

<details open>
  <summary><span style='color:red;'>GET: /SystemsAdministration/{systemsadministrationid}/Assurance/{assuranceid}/Retrieve</span></summary>

  **Description**

  Administer the configuration, maintenance, assignment and track usage and status of all IT assets deployed in development and production across the enterprise ReBQ Retrieve details about any aspect of Assurance

  **Documentation**

  This API path `/SystemsAdministration/{systemsadministrationid}/Assurance/{assuranceid}/Retrieve` allows you to retrieve details about a specific aspect of an Assurance related to Systems Administration. It helps in managing the configuration, maintenance, assignment, and tracking of IT assets across different stages like development and production within an enterprise. By providing the relevant `systemsadministrationid` and `assuranceid`, you can access information about the status and usage of the assurance aspect tied to system administration.

  **Limitations**

  GET: Based on REST best practices, the name of the endpoint would ideally follow a noun that represents the resource being retrieved. In this case, a possible name for the endpoint could be:

```
GET /SystemsAdministration/{systemsadministrationid}/Assurance/{assuranceid}
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /SystemsAdministration/{systemsadministrationid}/CapacityPlanningandResilience/{capacityplanningandresilienceid}/Retrieve</span></summary>

  **Description**

  Administer the configuration, maintenance, assignment and track usage and status of all IT assets deployed in development and production across the enterprise ReBQ Retrieve details about any aspect of Capacity Planning and Resilience

  **Documentation**

  This API path allows you to retrieve details about any aspect of Capacity Planning and Resilience within the Systems Administration module. It helps in managing the configuration, maintenance, assignment, usage, and status of IT assets deployed in development and production environments across the organization. By using this API, you can access specific information related to capacity planning and resilience measures implemented within the IT systems.

  **Limitations**

  GET: Based on REST best practices, the name of the path should ideally be:

'/systems-administration/{systemsadministrationid}/capacity-planning-and-resilience/{capacityplanningandresilienceid}/retrieve'

In RESTful URLs, it is recommended to use lowercase letters, hyphens to separate words, and avoid using camel case or underscores. This naming convention helps improve readability and maintain consistency in the URL structure.

</details>

<details open>
  <summary><span style='color:red;'>GET: /SystemsAdministration/{systemsadministrationid}/Configuration/{configurationid}/Retrieve</span></summary>

  **Description**

  Administer the configuration, maintenance, assignment and track usage and status of all IT assets deployed in development and production across the enterprise ReBQ Retrieve details about any aspect of Configuration

  **Documentation**

  This API path allows you to retrieve details about a specific aspect of the configuration related to systems administration. By providing the `systemsadministrationid` and `configurationid`, you can access information about the setup, maintenance, assignment, usage, and status of IT assets within your organization's development and production environments. This API is designed to help you manage and monitor the configuration of IT assets effectively across the enterprise.

  **Limitations**

  GET: The name of the path should be:

```
/SystemsAdministration/{systemsadministrationid}/Configuration/{configurationid}
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /SystemsAdministration/{systemsadministrationid}/Inventory/{inventoryid}/Retrieve</span></summary>

  **Description**

  Administer the configuration, maintenance, assignment and track usage and status of all IT assets deployed in development and production across the enterprise ReBQ Retrieve details about any aspect of Inventory

  **Documentation**

  This API path allows you to retrieve details about a specific aspect of inventory within a Systems Administration system. By providing the system administration ID and inventory ID, you can access information related to the configuration, maintenance, assignment, usage, and status of IT assets used in development and production across the enterprise. This API helps in tracking and managing various details about inventory items within the systems administration domain.

  **Limitations**

  GET: Based on RESTful best practices, the name of the path should be:

`/systems-administration/{systemsadministrationid}/inventory/{inventoryid}`

This path follows the convention of using lowercase letters and hyphens to separate words, which is the recommended practice for URL paths in RESTful APIs.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SystemsAdministration/{systemsadministrationid}/Assurance/{assuranceid}/Request</span></summary>

  **Description**

  Administer the configuration, maintenance, assignment and track usage and status of all IT assets deployed in development and production across the enterprise RqBQ Request manual intervention or a decision with respect to Assurance

  **Documentation**

  This BIAN API path is used to update an existing resource related to systems administration and assurance. Specifically, it is used to administer the configuration, maintenance, assignment, and tracking of IT assets deployed in development and production within an enterprise. The request requires manual intervention or a decision regarding assurance related tasks.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/systems-administration/{systemsadministrationid}/assurance/{assuranceid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SystemsAdministration/{systemsadministrationid}/CapacityPlanningandResilience/{capacityplanningandresilienceid}/Request</span></summary>

  **Description**

  Administer the configuration, maintenance, assignment and track usage and status of all IT assets deployed in development and production across the enterprise RqBQ Request manual intervention or a decision with respect to Capacity Planning and Resilience

  **Documentation**

  This API path allows you to update an existing resource related to Systems Administration. Specifically, it deals with Capacity Planning and Resilience within the context of IT asset management. It enables administrators to make requests for manual intervention or decisions regarding capacity planning and resilience for IT assets deployed in development and production within the enterprise.

  **Limitations**

  PUT: Based on RESTful best practices, a suitable name for the path could be:

'/systems-administration/{systemsadministrationid}/capacity-planning-and-resilience/{capacityplanningandresilienceid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SystemsAdministration/{systemsadministrationid}/Configuration/{configurationid}/Request</span></summary>

  **Description**

  Administer the configuration, maintenance, assignment and track usage and status of all IT assets deployed in development and production across the enterprise RqBQ Request manual intervention or a decision with respect to Configuration

  **Documentation**

  This API path allows for updating information related to the configuration of IT assets within a systems administration setup. It specifically deals with making requests for manual intervention or decision-making regarding a specific configuration. This can involve tasks such as adjusting settings, assigning resources, and tracking usage and status of IT assets.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/systems-administration/{systemsadministrationid}/configurations/{configurationid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SystemsAdministration/{systemsadministrationid}/Inventory/{inventoryid}/Request</span></summary>

  **Description**

  Administer the configuration, maintenance, assignment and track usage and status of all IT assets deployed in development and production across the enterprise RqBQ Request manual intervention or a decision with respect to Inventory

  **Documentation**

  This API path allows a user to update information related to inventory within the Systems Administration module. Specifically, it enables the user to request manual intervention or a decision regarding inventory items identified by their unique IDs. This operation is intended to help manage and track IT assets in development and production environments within the enterprise.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/systems-administration/{systemsadministrationid}/inventory/{inventoryid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SystemsAdministration/{systemsadministrationid}/Assurance/{assuranceid}/Update</span></summary>

  **Description**

  Administer the configuration, maintenance, assignment and track usage and status of all IT assets deployed in development and production across the enterprise UpBQ Update details relating to Assurance

  **Documentation**

  This API path allows you to update details related to assurance for a specific system administration ID. It is used to make changes or modifications to the configuration, maintenance, assignment, and tracking of usage and status of IT assets deployed in development and production within the enterprise.

  **Limitations**

  PUT: Following REST best practices, the name for the specified path should be:

PATCH /systems-administration/{systemsadministrationid}/assurance/{assuranceid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SystemsAdministration/{systemsadministrationid}/CapacityPlanningandResilience/{capacityplanningandresilienceid}/Update</span></summary>

  **Description**

  Administer the configuration, maintenance, assignment and track usage and status of all IT assets deployed in development and production across the enterprise UpBQ Update details relating to Capacity Planning and Resilience

  **Documentation**

  This API path allows you to update details related to Capacity Planning and Resilience for a specific system administration ID within an enterprise. By using a PUT request, you can modify and manage the configuration, maintenance, assignment, and tracking of IT assets in development and production. This helps you keep track of the capacity planning and resilience aspects of the IT systems being used across the organization.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be: 

'/systems-administration/{systemsadministrationid}/capacity-planning-and-resilience/{capacityplanningandresilienceid}'

And the HTTP verb PUT should be used to update the resource at this path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SystemsAdministration/{systemsadministrationid}/Configuration/{configurationid}/Update</span></summary>

  **Description**

  Administer the configuration, maintenance, assignment and track usage and status of all IT assets deployed in development and production across the enterprise UpBQ Update details relating to Configuration

  **Documentation**

  This API path allows you to update details related to the configuration of IT assets. It is used for administering and maintaining the configuration of IT assets deployed in development and production within an enterprise. By making a PUT request to this API, you can modify specific details or parameters associated with a particular configuration, such as settings, assignments, usage tracking, and status monitoring.

  **Limitations**

  PUT: A possible name for the path could be: `/systems-administration/{systemsadministrationid}/configurations/{configurationid}`.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SystemsAdministration/{systemsadministrationid}/Inventory/{inventoryid}/Update</span></summary>

  **Description**

  Administer the configuration, maintenance, assignment and track usage and status of all IT assets deployed in development and production across the enterprise UpBQ Update details relating to Inventory

  **Documentation**

  This API path allows users to update details related to inventory within the Systems Administration section. It specifically deals with configuring, maintaining, assigning, and tracking the usage and status of IT assets in both development and production environments. By making a PUT request to this endpoint with the appropriate parameters, users can modify existing information about inventory to keep track of IT assets effectively.

  **Limitations**

  PUT: The name of the path should be:

'/systems-administration/{systemsadministrationid}/inventory/{inventoryid}'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
