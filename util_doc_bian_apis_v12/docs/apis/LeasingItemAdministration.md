---
id: LeasingItemAdministration
title: LeasingItemAdministration
---

<h1 style='color:red;'>LeasingItemAdministration</h1>

**BIAN Documentation:** [LeasingItemAdministration v12](https://app.swaggerhub.com/apis/BIAN-3/LeasingItemAdministration/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /LeasingItemAdministration/{leasingitemadministrationid}/Capture</span></summary>

  **Description**

  Track the status of the assets underlying leasing agreements as they represent collateral items that could be accessed in the event of account recovery CaCR Capture Leasing Item Administrative Plan activity or event related information

  **Documentation**

  This API path allows you to update the status and details of leasing items associated with leasing agreements. The leasing items are assets that serve as collateral and can be used in case of account recovery. By using this API, you can capture and update information about leasing items and any related activities or events.

  **Limitations**

  PUT: The path could be named as follows to adhere to REST best practices: 

'/leasing-item-administration/{leasingItemAdministrationId}/capture'

In this naming convention:
- The path segments are in lowercase letters.
- Hyphens are used to separate words within each path segment.
- Path parameters are included within curly braces {} and are in camel case starting with a lowercase letter. 

This naming convention helps to ensure consistency and readability in your API design, which are important aspects of adhering to REST

</details>

<details open>
  <summary><span style='color:red;'>PUT: /LeasingItemAdministration/{leasingitemadministrationid}/Control</span></summary>

  **Description**

  Track the status of the assets underlying leasing agreements as they represent collateral items that could be accessed in the event of account recovery CoCR Control the processing of Leasing Item Administrative Plan

  **Documentation**

  This BIAN API path allows you to update and control the processing of the Leasing Item Administrative Plan for a specific leasing item administration identified by {leasingitemadministrationid}. This involves tracking the status of assets that serve as collateral in leasing agreements and managing the administrative tasks related to these assets, particularly in the context of account recovery processes. Essentially, this API is designed to facilitate the monitoring and management of valuable assets tied to leasing agreements for operational and risk management purposes.

  **Limitations**

  PUT: A RESTful path should represent a resource and its relationships in a clear and structured manner. Based on the path '/LeasingItemAdministration/{leasingitemadministrationid}/Control', following REST best practices, the resource name should be singular and represent a specific entity related to item administration. 

A suitable name for the resource in this case could be '/LeasingItemControl/{leasingitemcontrolid}'. This path indicates that it relates to the control aspects of a specific leasing item within the administration context. It

</details>

<details open>
  <summary><span style='color:red;'>PUT: /LeasingItemAdministration/{leasingitemadministrationid}/Exchange</span></summary>

  **Description**

  Track the status of the assets underlying leasing agreements as they represent collateral items that could be accessed in the event of account recovery EcCR Accept, verify, etc. aspects of Leasing Item Administrative Plan processing

  **Documentation**

  This API path allows you to update the status of leasing items in a leasing agreement. It is used to track the assets that serve as collateral for the agreement, which could be accessed if needed for account recovery. You can use this API to manage and verify the details related to the leasing item administrative processing within the system.

  **Limitations**

  PUT: The name of the path should be:

/leasing-items/{leasingitemadministrationid}/exchange

</details>

<details open>
  <summary><span style='color:red;'>PUT: /LeasingItemAdministration/{leasingitemadministrationid}/Grant</span></summary>

  **Description**

  Track the status of the assets underlying leasing agreements as they represent collateral items that could be accessed in the event of account recovery GrCR Obtain permission to act in relation to Leasing Item Administrative Plan

  **Documentation**

  This API path allows you to update the grant permission related to the leasing item administration plan. By specifying the ID of the leasing item administration, you can modify the status of assets linked to leasing agreements, which serve as collateral. This is important for tracking the availability of assets that could be utilized in case of account recovery.

  **Limitations**

  PUT: The name of the path should be:

/leasing-items/{leasingItemId}/grant

</details>

<details open>
  <summary><span style='color:red;'>POST: /LeasingItemAdministration/Initiate</span></summary>

  **Description**

  Track the status of the assets underlying leasing agreements as they represent collateral items that could be accessed in the event of account recovery InCR Instantiate a new Leasing Item Administrative Plan

  **Documentation**

  This BIAN API path allows you to create a new Leasing Item Administrative Plan. The purpose of this plan is to help track the status of assets that are held as collateral in leasing agreements. These assets can be accessed in case there is a need for account recovery. By initiating this plan, you can better manage and monitor the leasing items and ensure that they are accounted for and accessible when necessary.

  **Limitations**

  POST: If the path '/LeasingItemAdministration/Initiate' followed REST best practices, a more appropriate name for it could be '/leasing-items/initiate'. This naming convention follows the RESTful approach of using lowercase letters and hyphens to separate words in the URL paths, making them more readable and consistent.

</details>

<details open>
  <summary><span style='color:red;'>GET: /LeasingItemAdministration/{leasingitemadministrationid}/Retrieve</span></summary>

  **Description**

  Track the status of the assets underlying leasing agreements as they represent collateral items that could be accessed in the event of account recovery ReCR Retrieve details about any aspect of Leasing Item Administrative Plan

  **Documentation**

  This API path allows you to retrieve details about a specific aspect of a Leasing Item Administration Plan. It is used to track the status of assets that are part of leasing agreements, which serve as collateral items that could be used in case there is a need for account recovery. By making a GET request to this endpoint with the ID of the Leasing Item Administration, you can access information about the administrative plan related to these leasing items.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

/leasing-items/{leasingItemAdministrationId}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /LeasingItemAdministration/{leasingitemadministrationid}/Request</span></summary>

  **Description**

  Track the status of the assets underlying leasing agreements as they represent collateral items that could be accessed in the event of account recovery RqCR Request manual intervention or a decision with respect to Leasing Item Administrative Plan

  **Documentation**

  This API path allows you to update the status of specific leasing items that are part of leasing agreements. These items serve as collateral that can be accessed in case there is a need for account recovery. By making a PUT request to this path with the relevant leasing item administration ID, you can request manual intervention or update the administrative plan for handling these leasing items.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/leasing-items/{leasingitemadministrationid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /LeasingItemAdministration/{leasingitemadministrationid}/Update</span></summary>

  **Description**

  Track the status of the assets underlying leasing agreements as they represent collateral items that could be accessed in the event of account recovery UpCR Update details relating to Leasing Item Administrative Plan

  **Documentation**

  This BIAN API path allows you to update details related to a Leasing Item Administrative Plan by specifying the ID of the leasing item administration you want to update. The API is designed to track the status of assets that are part of leasing agreements and serve as collateral items. This information is crucial for managing accounts and may be used in the event of account recovery. By making a PUT request to this path, you can modify and maintain the accurate and up-to-date information regarding the administration of leasing items.

  **Limitations**

  PUT: The RESTful path should be named according to the resource it is addressing. In this case, the resource appears to be a "Leasing Item Administration", so a suitable RESTful path naming convention could be:

```
/leasing-items/{leasingItemId}/update
```

This path is more generic, easy to understand, and follows the RESTful naming conventions by using lowercase letters, hyphens to separate words, and including the specific resource identifier in the path (`leasingItemId`).

</details>

<details open>
  <summary><span style='color:red;'>PUT: /LeasingItemAdministration/{leasingitemadministrationid}/Assurance/{assuranceid}/Capture</span></summary>

  **Description**

  Track the status of the assets underlying leasing agreements as they represent collateral items that could be accessed in the event of account recovery CaBQ Capture Assurance activity or event related information

  **Documentation**

  This BIAN API path allows you to update the status of the assets that are part of leasing agreements. These assets act as collateral and can be accessed in case of account recovery. By using this API, you can track and manage information related to the assets in order to ensure their availability for potential use during account recovery activities.

  **Limitations**

  PUT: The name of the path should be:

/leasing-item-administration/{leasingitemadministrationid}/assurance/{assuranceid}/capture

</details>

<details open>
  <summary><span style='color:red;'>PUT: /LeasingItemAdministration/{leasingitemadministrationid}/Registration/{registrationid}/Capture</span></summary>

  **Description**

  Track the status of the assets underlying leasing agreements as they represent collateral items that could be accessed in the event of account recovery CaBQ Capture Registration activity or event related information

  **Documentation**

  This BIAN API path allows you to update the status of assets that are part of leasing agreements. These assets serve as collateral and can be utilized during the recovery of an account or other related activities. By making a PUT request to this path, you can modify and track information related to the assets associated with a specific leasing item administration and registration ID.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be structured in a way that indicates the hierarchy and relationship between the resources. It should be concise, descriptive, and use nouns to represent resources.

For the given path, a more RESTful naming convention could be:

/leasing-items/{leasingitemadministrationid}/registrations/{registrationid}/capture

This path clearly indicates the relationship between leasing items, registrations, and the capture action, while using lowercase letters and hyphens for word separation

</details>

<details open>
  <summary><span style='color:red;'>PUT: /LeasingItemAdministration/{leasingitemadministrationid}/Valuation/{valuationid}/Capture</span></summary>

  **Description**

  Track the status of the assets underlying leasing agreements as they represent collateral items that could be accessed in the event of account recovery CaBQ Capture Valuation activity or event related information

  **Documentation**

  This BIAN API path allows you to update the status of assets linked to leasing agreements. These assets serve as collateral and can be utilized during account recovery processes or events where valuation information needs to be captured. By using this API path with a PUT method, you can modify existing resource data related to the leasing item administration and valuation details.

  **Limitations**

  PUT: The name of the path should be:

/leasing-items/{leasing-item-id}/valuations/{valuation-id}/capture

Following REST best practices, it is recommended to use lowercase letters, separate words with hyphens, and use plural nouns for resource names where applicable.

</details>

<details open>
  <summary><span style='color:red;'>POST: /LeasingItemAdministration/{leasingitemadministrationid}/Assurance/Initiate</span></summary>

  **Description**

  Track the status of the assets underlying leasing agreements as they represent collateral items that could be accessed in the event of account recovery InBQ Instantiate a new Assurance

  **Documentation**

  This API path allows you to create a new Assurance for tracking the status of assets connected to leasing agreements. The Assurance helps monitor these assets, which serve as collateral and can be accessed if needed during account recovery. By initiating a new Assurance, you can keep better track of the leasing item administration and ensure proper management of collateral items.

  **Limitations**

  POST: The name of the path should be:

```
POST /leasingitemadministration/{leasingitemadministrationid}/assurance
```

</details>

<details open>
  <summary><span style='color:red;'>POST: /LeasingItemAdministration/{leasingitemadministrationid}/Registration/Initiate</span></summary>

  **Description**

  Track the status of the assets underlying leasing agreements as they represent collateral items that could be accessed in the event of account recovery InBQ Instantiate a new Registration

  **Documentation**

  This API path allows users to create a new registration for tracking the status of assets that serve as collateral in leasing agreements. It is used to initiate the process of recording information about the assets that can be used in the event of account recovery.

  **Limitations**

  POST: The path should be named in a way that describes the action being taken on the resource. Based on the path you provided, a more RESTful naming convention could be:

/leasing-items/{leasingitemId}/registrations/initiate

In this naming convention:
- "leasing-items" is the plural form of the resource being acted upon
- "{leasingItemId}" is the specific identifier of the resource
- "registrations" indicates the action being performed on the resource
- "initiate" describes

</details>

<details open>
  <summary><span style='color:red;'>POST: /LeasingItemAdministration/{leasingitemadministrationid}/Valuation/Initiate</span></summary>

  **Description**

  Track the status of the assets underlying leasing agreements as they represent collateral items that could be accessed in the event of account recovery InBQ Instantiate a new Valuation

  **Documentation**

  This BIAN API path, `/LeasingItemAdministration/{leasingitemadministrationid}/Valuation/Initiate`, allows users to create a new Valuation for a specific leasing item administration identified by `{leasingitemadministrationid}`. This Valuation is used to track the status of the assets tied to leasing agreements, which serve as collateral that could be utilized in case of account recovery. By initiating a new Valuation, users can update and monitor the value and condition of the assets associated with the leasing agreements.

  **Limitations**

  POST: The name of the path should be:

```
POST /leasing-item-administrations/{leasingItemAdministrationId}/valuation/initiate
``` 

This name follows the RESTful convention of using lowercase letters, hyphens for multi-word endpoints, and using plural nouns for collections. It also specifies the HTTP method `POST` to indicate the action of initiating a valuation.

</details>

<details open>
  <summary><span style='color:red;'>GET: /LeasingItemAdministration/{leasingitemadministrationid}/Assurance/{assuranceid}/Retrieve</span></summary>

  **Description**

  Track the status of the assets underlying leasing agreements as they represent collateral items that could be accessed in the event of account recovery ReBQ Retrieve details about any aspect of Assurance

  **Documentation**

  This API path allows you to retrieve details about any aspect of Assurance related to a specific Leasing Item Administration. It helps you track the status of the assets that are part of leasing agreements. These assets act as collateral items that could be accessed in case of account recovery. By using this API, you can access information about the assurance associated with a particular leasing item administration, helping you manage and monitor the collateral assets efficiently.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

/leasingitems/{leasingItemId}/assurances/{assuranceId}/retrieve

</details>

<details open>
  <summary><span style='color:red;'>GET: /LeasingItemAdministration/{leasingitemadministrationid}/Registration/{registrationid}/Retrieve</span></summary>

  **Description**

  Track the status of the assets underlying leasing agreements as they represent collateral items that could be accessed in the event of account recovery ReBQ Retrieve details about any aspect of Registration

  **Documentation**

  This API path allows you to retrieve details about a specific registration associated with a leasing item administration. By providing the leasing item administration ID and the registration ID as parameters, you can access information about the assets involved in the leasing agreement. This could be useful for tracking the status of these assets, especially as they serve as collateral that may be accessed in case of account recovery.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/leasing-item-administration/{leasingitemadministrationid}/registration/{registrationid}/retrieve'

Here are some key points to consider:

1. Use lowercase letters for path segments to maintain consistency.
2. Use hyphens to separate words in the path segments for better readability.
3. Use descriptive names that clearly indicate the resources and actions being performed in the path.
4. Avoid using unnecessary words or abbreviations.
5. Express

</details>

<details open>
  <summary><span style='color:red;'>GET: /LeasingItemAdministration/{leasingitemadministrationid}/Valuation/{valuationid}/Retrieve</span></summary>

  **Description**

  Track the status of the assets underlying leasing agreements as they represent collateral items that could be accessed in the event of account recovery ReBQ Retrieve details about any aspect of Valuation

  **Documentation**

  This API path allows you to retrieve details about the valuation of assets that are linked to a specific leasing item administration ID. You can access information about the status of these assets, which serve as collateral items in leasing agreements. This data can be useful for monitoring the value of these assets and assessing their importance in the event of account recovery.

  **Limitations**

  GET: Based on REST best practices, the name of the path could be:

GET /leasing-items/{leasingItemId}/valuations/{valuationId}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /LeasingItemAdministration/{leasingitemadministrationid}/Assurance/{assuranceid}/Update</span></summary>

  **Description**

  Track the status of the assets underlying leasing agreements as they represent collateral items that could be accessed in the event of account recovery UpBQ Update details relating to Assurance

  **Documentation**

  This API path allows users to update details related to Assurance for a specific leasing item administration. Assurance refers to the security or collateral items associated with leasing agreements. By using this API endpoint with a PUT method, users can modify and track the status of these collateral assets, which may be accessed in case of account recovery or other specified situations.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be something more aligned with the resource it represents rather than its actions. How about something like '/leasing-items/{leasingItemId}/assurances/{assuranceId}' for this path?

</details>

<details open>
  <summary><span style='color:red;'>PUT: /LeasingItemAdministration/{leasingitemadministrationid}/Registration/{registrationid}/Update</span></summary>

  **Description**

  Track the status of the assets underlying leasing agreements as they represent collateral items that could be accessed in the event of account recovery UpBQ Update details relating to Registration

  **Documentation**

  This BIAN API path allows you to update details related to the registration of assets under a leasing agreement. It lets you track the current status of these assets, which serve as collateral items that could potentially be used for account recovery purposes. By using a PUT method, you can modify the information associated with the registration to keep it accurate and up to date.

  **Limitations**

  PUT: The name of the path could be `/leasing-item-administration/{leasingitemadministrationid}/registration/{registrationid}` for updating a registration within a leasing item administration resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /LeasingItemAdministration/{leasingitemadministrationid}/Valuation/{valuationid}/Update</span></summary>

  **Description**

  Track the status of the assets underlying leasing agreements as they represent collateral items that could be accessed in the event of account recovery UpBQ Update details relating to Valuation

  **Documentation**

  This BIAN API path allows users to update details related to the valuation of assets tied to specific leasing items in the leasing item administration system. This update helps track the status of these assets, which serve as collateral for leasing agreements. The API ensures that information regarding the valuation of these assets is accurate and up-to-date for activities like account recovery. By using this API, users can modify the valuation details associated with specific leasing items to maintain accurate records.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/leasing-item-administration/{leasing_item_administration_id}/valuation/{valuation_id}'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
