---
id: CustomerCampaignDesign
title: CustomerCampaignDesign
---

<h1 style='color:red;'>CustomerCampaignDesign</h1>

**BIAN Documentation:** [CustomerCampaignDesign v12](https://app.swaggerhub.com/apis/BIAN-3/CustomerCampaignDesign/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CustomerCampaignDesign/Create</span></summary>

  **Description**

  Design and refine customer campaign specifications based on their impact CrCR Create or register an imported customer campaign design

  **Documentation**

  This BIAN API path, /CustomerCampaignDesign/Create, allows users to create and register a new customer campaign design. Users can specify and refine the details of the campaign, taking into account the potential impact it may have on customers. This API is used to design and manage customer campaigns effectively.

  **Limitations**

  POST: If the path '/CustomerCampaignDesign/Create' followed REST best practices, it should be named as '/customer-campaign-designs' using the plural form of the resource name. The HTTP POST method should be used to create a new customer campaign design resource under this path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCampaignDesign/{customercampaigndesignid}/Update</span></summary>

  **Description**

  Design and refine customer campaign specifications based on their impact UpCr Update details of a customer campaign specification or usage record

  **Documentation**

  This BIAN API path allows you to update and refine the specifications of a customer campaign design based on its impact. Specifically, you can modify the details of a customer campaign specification or usage record to ensure that it aligns with the desired outcomes of the campaign.

  **Limitations**

  PUT: The name of the path should be:

'/customer-campaign-design/{customercampaigndesignid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCampaignDesign/{customercampaigndesignid}/Capture</span></summary>

  **Description**

  Design and refine customer campaign specifications based on their impact CaCR Capture impact feedback against a customer campaign specification

  **Documentation**

  This API path is used to capture impact feedback related to a specific customer campaign design. It allows the updating of an existing resource by specifying the customer campaign design ID and providing feedback on the impact of the campaign based on certain specifications. Essentially, it helps in refining and designing customer campaigns by capturing feedback on their impact.

  **Limitations**

  PUT: The name of the path should be `/customer-campaign-designs/{customercampaigndesignid}/capture` following REST best practices. This naming convention uses lowercase letters with hyphens to separate words for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCampaignDesign/{customercampaigndesignid}/Execute</span></summary>

  **Description**

  Design and refine customer campaign specifications based on their impact ExCR Execute an automated action for a customer campaign specification

  **Documentation**

  This API path `/CustomerCampaignDesign/{customercampaigndesignid}/Execute` allows you to update an existing customer campaign design based on the specified campaign design ID. When you execute this API call, it triggers an automated action to refine and enhance the customer campaign specifications for better impact and effectiveness.

  **Limitations**

  PUT: The name of the path should be:

'/customer-campaign-design/{customercampaigndesignid}/execute'

Here are the reasons behind the choices made in the path name:

1. Lowercase letters: REST best practices recommend using lowercase letters for endpoint paths to maintain consistency and simplicity.

2. Hyphens for readability: Using hyphens instead of underscores enhances readability and follows common conventions in REST API design.

3. Descriptive yet concise: The path segments are descriptive and indicate the

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerCampaignDesign/{customercampaigndesignid}/Request</span></summary>

  **Description**

  Design and refine customer campaign specifications based on their impact RqCR Request manual intervention with a customer campaign specification

  **Documentation**

  This API path is used to update an existing customer campaign design by requesting manual intervention with a specific customer campaign specification identified by the customercampaigndesignid. The purpose is to refine and design the campaign based on its impact and potentially address any issues or make improvements to the campaign design.

  **Limitations**

  PUT: The name of the path should be:

'/customer-campaign-designs/{customercampaigndesignid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerCampaignDesign/{customercampaigndesignid}/Retrieve</span></summary>

  **Description**

  Design and refine customer campaign specifications based on their impact ReCR Retrieve details about a customer campaign specification

  **Documentation**

  This API path allows you to retrieve details about a specific customer campaign design. By providing the ID of the customer campaign design, you can access information about its specifications, such as its impact and other relevant details. This API is useful for accessing and reviewing the specifics of a customer campaign design for analysis or further refinement.

  **Limitations**

  GET: A suitable name for the path '/CustomerCampaignDesign/{customercampaigndesignid}/Retrieve' that adheres to REST best practices could be:

GET /customer-campaign-designs/{customercampaigndesignid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
