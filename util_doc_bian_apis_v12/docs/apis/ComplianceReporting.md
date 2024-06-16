---
id: ComplianceReporting
title: ComplianceReporting
---

<h1 style='color:red;'>ComplianceReporting</h1>

**BIAN Documentation:** [ComplianceReporting v12](https://app.swaggerhub.com/apis/BIAN-3/ComplianceReporting/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /ComplianceReporting/{compliancereportingid}/Capture</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to apply and report on internal audit control and reporting activity CaCR Capture Compliance Reporting Administrative Plan activity or event related information

  **Documentation**

  This API path allows you to update existing compliance reporting information identified by a specific ID. It is used to administer and manage tasks related to internal audit controls and reporting. Users can capture and update administrative plan activity or event-related information for compliance reporting through this API.

  **Limitations**

  PUT: A suitable name for the path '/ComplianceReporting/{compliancereportingid}/Capture' following REST best practices could be:

POST /compliance-reporting/{compliance-reporting-id}/captures

</details>

<details open>
  <summary><span style='color:red;'>POST: /ComplianceReporting/Initiate</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to apply and report on internal audit control and reporting activity InCR Instantiate a new Compliance Reporting Administrative Plan

  **Documentation**

  This BIAN API path `/ComplianceReporting/Initiate` allows users to create a new Compliance Reporting Administrative Plan. The API helps in setting up and managing tasks related to internal audit control and reporting activities within an organization. By initiating this API call, a new plan for compliance reporting will be created, enabling users to apply and report on internal audit controls effectively.

  **Limitations**

  POST: The name of the path should be "/compliance-reports" as per REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ComplianceReporting/{compliancereportingid}/Retrieve</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to apply and report on internal audit control and reporting activity ReCR Retrieve details about any aspect of Compliance Reporting Administrative Plan

  **Documentation**

  This BIAN API path, when accessed with a GET request, allows you to retrieve information about a specific aspect of a Compliance Reporting Administrative Plan. This service helps in managing and reporting on internal audit controls and activities related to compliance reporting. By providing the compliance reporting ID in the path, you can access details about that specific aspect of the administrative plan.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

GET /ComplianceReports/{compliancereportingid} (assuming 'compliancereportingid' is a placeholder for a specific compliance report ID)

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ComplianceReporting/{compliancereportingid}/Request</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to apply and report on internal audit control and reporting activity RqCR Request manual intervention or a decision with respect to Compliance Reporting Administrative Plan

  **Documentation**

  This API path allows you to update an existing compliance reporting resource by submitting a request for manual intervention or a decision regarding the Compliance Reporting Administrative Plan. It is designed to administer and manage tasks related to internal audit control and reporting activities within the compliance reporting domain.

  **Limitations**

  PUT: The name of the path should be `/compliance-reportings/{compliance-reporting-id}/requests` to follow REST best practices. The path segments should be in lowercase and separated by hyphens, and resource names should be in plural form. Additionally, using snake case for variable names like `compliance_reporting_id` is also a good convention to follow.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ComplianceReporting/{compliancereportingid}/Update</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to apply and report on internal audit control and reporting activity UpCR Update details relating to Compliance Reporting Administrative Plan

  **Documentation**

  This API path allows you to update details related to a Compliance Reporting Administrative Plan by making a PUT request to the specified endpoint with the appropriate compliance reporting ID. The API is designed to manage and facilitate tasks necessary for internal audit controls and reporting activities within an organization. By using this API, you can modify specific information or data related to compliance reporting to ensure accurate and up-to-date administrative planning for compliance activities.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:
PUT /ComplianceReporting/{compliancereportingid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ComplianceReporting/{compliancereportingid}/ComplianceAssessment/{complianceassessmentid}/Capture</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to apply and report on internal audit control and reporting activity CaBQ Capture Compliance Assessment activity or event related information

  **Documentation**

  This API path is used to update existing information related to compliance assessments within the Compliance Reporting system. It allows users to capture and report on internal audit control activities and information pertaining to a specific compliance assessment event. By making a PUT request to this path with the relevant IDs, users can update data related to compliance assessment activities, helping to ensure that accurate and up-to-date information is stored and accessible within the system.

  **Limitations**

  PUT: The path could be named as follows using REST best practices: /compliance-reporting/{compliance-reporting-id}/compliance-assessment/{compliance-assessment-id}/capture

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ComplianceReporting/{compliancereportingid}/Consolidation/{consolidationid}/Capture</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to apply and report on internal audit control and reporting activity CaBQ Capture Consolidation activity or event related information

  **Documentation**

  This API path is used to update specific information related to the compliance reporting process. It allows you to make changes to details associated with internal audit control and reporting activities. By providing the compliance reporting ID and consolidation ID, you can update information related to the capture of specific events or activities within the compliance reporting system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should focus on the resource itself rather than the action being performed. A suitable name for the path would be something like: 

`/ComplianceReports/{compliancereportingid}/Consolidations/{consolidationid}/Captures`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ComplianceReporting/{compliancereportingid}/Remediation/{remediationid}/Capture</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to apply and report on internal audit control and reporting activity CaBQ Capture Remediation activity or event related information

  **Documentation**

  This API path allows you to update an existing remediation activity related to compliance reporting. It is used to capture and store information about internal audit controls and reporting activities within the compliance reporting system. Users can input data related to a specific compliance reporting ID and remediation ID to keep track of events and activities within the system for reporting purposes.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/compliance-reporting/{compliancereportingid}/remediation/{remediationid}/capture'

</details>

<details open>
  <summary><span style='color:red;'>POST: /ComplianceReporting/{compliancereportingid}/Remediation/Initiate</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to apply and report on internal audit control and reporting activity InBQ Instantiate a new Remediation

  **Documentation**

  This API path allows you to create a new remediation task within the Compliance Reporting service domain. By sending a POST request with the necessary information, you can initialize a new remediation activity as part of internal audit control and reporting. This API helps in managing and tracking tasks related to compliance and reporting activities within a system.

  **Limitations**

  POST: The name of the path '/ComplianceReporting/{compliancereportingid}/Remediation/Initiate' following REST best practices could be:

PUT /compliance-reports/{compliance-report-id}/remediation/initiate

</details>

<details open>
  <summary><span style='color:red;'>GET: /ComplianceReporting/{compliancereportingid}/ComplianceAssessment/{complianceassessmentid}/Retrieve</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to apply and report on internal audit control and reporting activity ReBQ Retrieve details about any aspect of Compliance Assessment

  **Documentation**

  This API path allows you to retrieve details about a specific Compliance Assessment within the Compliance Reporting service domain. By providing the compliance reporting ID and the compliance assessment ID, you can access information about internal audit control and reporting activities related to compliance assessment. This API helps to gather data regarding compliance assessments for reporting and monitoring purposes within a system.

  **Limitations**

  GET: Based on REST best practices, a more appropriate name for the path '/ComplianceReporting/{compliancereportingid}/ComplianceAssessment/{complianceassessmentid}/Retrieve' could be:

"/compliance-reports/{compliancereportingid}/assessments/{complianceassessmentid}"

This naming convention makes the path more clear and concise, conveying the hierarchy of the resources being accessed.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ComplianceReporting/{compliancereportingid}/Consolidation/{consolidationid}/Retrieve</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to apply and report on internal audit control and reporting activity ReBQ Retrieve details about any aspect of Consolidation

  **Documentation**

  This API path allows you to retrieve details about a specific aspect of consolidation within the Compliance Reporting service domain. By providing the compliance reporting ID and the consolidation ID, you can access information related to internal audit control and reporting activities for that particular consolidation. This API helps you gather specific data related to consolidation for reporting and compliance purposes.

  **Limitations**

  GET: Following REST best practices, the name of the path should reflect the resource it is addressing rather than the action it performs. A more appropriate name for this path could be '/ComplianceReports/{compliancereportingid}/Consolidations/{consolidationid}'.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ComplianceReporting/{compliancereportingid}/Remediation/{remediationid}/Retrieve</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to apply and report on internal audit control and reporting activity ReBQ Retrieve details about any aspect of Remediation

  **Documentation**

  This API path allows you to retrieve details about a specific remediation associated with compliance reporting. It is designed to help you access information related to internal audit control and reporting activities for a particular compliance reporting ID and remediation ID. By making a GET request to this path, you can gather specific details about the remediation process to ensure compliance with regulatory requirements.

  **Limitations**

  GET: To follow REST best practices, the name of the path should be structured in a way that reflects the resource hierarchy and actions being taken. Here's a suggestion for the path name based on the provided structure:

'/compliance-reporting/{compliancereportingid}/remediation/{remediationid}' - This represents the hierarchy of resources, with 'compliance-reporting' and 'remediation' as resources, and their respective IDs in the path.

For the action

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ComplianceReporting/{compliancereportingid}/ComplianceAssessment/{complianceassessmentid}/Request</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to apply and report on internal audit control and reporting activity RqBQ Request manual intervention or a decision with respect to Compliance Assessment

  **Documentation**

  This API path is used to update an existing Compliance Assessment within the Compliance Reporting service domain. It specifically deals with requesting manual intervention or a decision regarding the Compliance Assessment identified by the 'complianceassessmentid' within the context of the 'compliancereportingid'. This allows for adjustments or decisions to be made related to internal audit control and reporting activities to ensure compliance with relevant regulations or standards.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be:

/ComplianceReports/{complianceReportingId}/ComplianceAssessments/{complianceAssessmentId}/Requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ComplianceReporting/{compliancereportingid}/Consolidation/{consolidationid}/Request</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to apply and report on internal audit control and reporting activity RqBQ Request manual intervention or a decision with respect to Consolidation

  **Documentation**

  This API path, "/ComplianceReporting/{compliancereportingid}/Consolidation/{consolidationid}/Request" with the PUT method, is used to update an existing resource related to compliance reporting and consolidation. It is designed to facilitate the management and coordination of tasks associated with internal audit controls and reporting activities. Specifically, it allows users to request manual intervention or decision-making in the context of consolidation processes within compliance reporting.

  **Limitations**

  PUT: Following REST best practices, the path should be named as:

`/compliance-reports/{compliance-report-id}/consolidations/{consolidation-id}/requests` 

This name is in lowercase letters, separates words with hyphens, and uses plural nouns to represent collections of resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ComplianceReporting/{compliancereportingid}/Remediation/{remediationid}/Request</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to apply and report on internal audit control and reporting activity RqBQ Request manual intervention or a decision with respect to Remediation

  **Documentation**

  This API path is used to update a request for manual intervention or a decision regarding the remediation process within the Compliance Reporting service. Specifically, it deals with tasks related to internal audit control and reporting activities. By sending a PUT request to this path with the necessary parameters, users can request and update information regarding remediation decisions that require manual intervention or approval.

  **Limitations**

  PUT: A suitable name for the path following REST best practices would be:

'/compliance-reporting/{compliancereportingid}/remediation/{remediationid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ComplianceReporting/{compliancereportingid}/ComplianceAssessment/{complianceassessmentid}/Update</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to apply and report on internal audit control and reporting activity UpBQ Update details relating to Compliance Assessment

  **Documentation**

  This API path allows you to update details related to a Compliance Assessment within the Compliance Reporting service domain. By providing the compliance reporting ID and the compliance assessment ID, you can modify or update information necessary for internal audit control and reporting activities. This API ensures that compliance assessment details can be accurately maintained and reported on as needed.

  **Limitations**

  PUT: A suitable name for the path could be: 

'/compliance-reports/{compliance-report-id}/compliance-assessments/{compliance-assessment-id}/update'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ComplianceReporting/{compliancereportingid}/Consolidation/{consolidationid}/Update</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to apply and report on internal audit control and reporting activity UpBQ Update details relating to Consolidation

  **Documentation**

  This API path allows users to update details related to a consolidation within the Compliance Reporting service domain. This includes making changes to internal audit control and reporting activities. The PUT method is used to update an existing resource with new information.

  **Limitations**

  PUT: The name of the path should be:

'/compliance-reporting/{compliance-reporting-id}/consolidation/{consolidation-id}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ComplianceReporting/{compliancereportingid}/Remediation/{remediationid}/Update</span></summary>

  **Description**

  This service domain administers and orchestrates the tasks required to apply and report on internal audit control and reporting activity UpBQ Update details relating to Remediation

  **Documentation**

  This API path allows you to update details related to remediation within the Compliance Reporting service. Specifically, you can modify specific information associated with a remediation task identified by {remediationid} under a compliance report identified by {compliancereportingid}. This can involve changing or adding information related to internal audit control and reporting activities within the remediation process.

  **Limitations**

  PUT: Based on REST best practices, the suggested name for the path would be:

PUT /compliance-reports/{compliance-report-id}/remediations/{remediation-id}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
