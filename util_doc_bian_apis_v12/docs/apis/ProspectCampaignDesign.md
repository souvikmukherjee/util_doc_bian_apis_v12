---
id: ProspectCampaignDesign
title: ProspectCampaignDesign
---

<h1 style='color:red;'>ProspectCampaignDesign</h1>

**BIAN Documentation:** [ProspectCampaignDesign v12](https://app.swaggerhub.com/apis/BIAN-3/ProspectCampaignDesign/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /ProspectCampaignDesign/Create</span></summary>

  **Description**

  Design and refine prospect campaign specifications based on their impact CrCR Create or register an imported prospect campaign design

  **Documentation**

  This API path allows users to create and refine specifications for prospect campaigns. Users can design and customize campaign details to make an impact. The API enables the creation or registration of new prospect campaign designs, making it easier for users to manage and track their campaigns effectively.

  **Limitations**

  POST: If the path '/ProspectCampaignDesign/Create' followed REST best practices, it should be named using a noun that represents the resource being created. A better name for the path could be '/prospect-campaigns' since it represents creating a new prospect campaign resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProspectCampaignDesign/{prospectcampaigndesignid}/Update</span></summary>

  **Description**

  Design and refine prospect campaign specifications based on their impact UpCr Update details of a prospect campaign specification or usage record

  **Documentation**

  This API endpoint allows for updating an existing prospect campaign design specification. Users can modify the details of a prospect campaign, such as its target audience, messaging, and goals. This update is intended to refine the campaign specifications based on their impact or to correct any errors in the information provided. It provides a way to manage and fine-tune prospect campaigns to make them more effective and successful.

  **Limitations**

  PUT: The name of the path should be:
PATCH /prospect-campaign-designs/{id}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProspectCampaignDesign/{prospectcampaigndesignid}/Capture</span></summary>

  **Description**

  Design and refine prospect campaign specifications based on their impact CaCR Capture impact feedback against a prospect campaign specification

  **Documentation**

  This BIAN API path allows you to update an existing prospect campaign design by capturing feedback on its impact. Specifically, it helps in refining the specifications of a prospect campaign based on the feedback received. The feedback is related to the impact of the campaign on the Capture rate against cost revenue (CaCR). This API path is used to make adjustments and improvements to prospect campaign designs by incorporating feedback on their effectiveness.

  **Limitations**

  PUT: The name of the path should be:

```
/ProspectCampaignDesign/{prospectcampaigndesignid}/Capture
```

It is following REST best practices by including the resource identifier ({prospectcampaigndesignid}) and using a clear, descriptive name ('Capture') to indicate the action being performed on that specific resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProspectCampaignDesign/{prospectcampaigndesignid}/Execute</span></summary>

  **Description**

  Design and refine prospect campaign specifications based on their impact ExCR Execute an automated action for a prospect campaign specification

  **Documentation**

  This BIAN API path allows you to update and execute a specific prospect campaign design based on its impact and effectiveness. By providing the prospect campaign design ID, you can refine the specifications of the campaign and automatically execute actions related to it. This path is used to manage and optimize prospect campaigns to ensure they are effective and reaching their intended audience.

  **Limitations**

  PUT: Following REST best practices, the name of the path could be:

```
/prospect-campaign-designs/{prospectCampaignDesignId}/execute
```

In this naming convention:
- Path segments are in lowercase
- Resource names are in plural form
- Resource IDs are typically singular
- Use hyphens to separate words rather than camel case

This naming convention helps to make the endpoint more readable and maintain consistency in the API design.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProspectCampaignDesign/{prospectcampaigndesignid}/Request</span></summary>

  **Description**

  Design and refine prospect campaign specifications based on their impact RqCR Request manual intervention with a prospect campaign specification

  **Documentation**

  This BIAN API path allows users to update an existing prospect campaign design by requesting manual intervention with a specific aspect of the campaign specification. The purpose is to refine and design the campaign specifications based on their impact.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/prospect-campaign-designs/{prospect-campaign-design-id}/requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProspectCampaignDesign/{prospectcampaigndesignid}/Retrieve</span></summary>

  **Description**

  Design and refine prospect campaign specifications based on their impact ReCR Retrieve details about a prospect campaign specification

  **Documentation**

  This BIAN API path allows you to retrieve details about a prospect campaign design by specifying the prospect campaign design ID. It helps you access information about the specific specifications and details of a prospect campaign, such as its impact and design elements. This can assist in designing and refining prospect campaign strategies based on their effectiveness and specific requirements.

  **Limitations**

  GET: The name of the path should be: '/prospect-campaign-designs/{prospectCampaignDesignId}'. 

Here's an explanation of the changes made:
- The path now uses lowercase letters and words are separated by hyphens for better readability and consistency.
- The path now uses the plural form 'prospect-campaign-designs' instead of 'prospectcampaigndesign' to represent a collection of resources.
- The path parameter 'prospectcampaigndesignid

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
