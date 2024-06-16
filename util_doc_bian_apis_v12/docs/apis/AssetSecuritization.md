---
id: AssetSecuritization
title: AssetSecuritization
---

<h1 style='color:red;'>AssetSecuritization</h1>

**BIAN Documentation:** [AssetSecuritization v12](https://app.swaggerhub.com/apis/BIAN-3/AssetSecuritization/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /AssetSecuritization/{assetsecuritizationid}/Control</span></summary>

  **Description**

  Determine and select assets for securitization as needed to maintain and optimize the Bank's portfolio. Administer the securitization process CoCR Control the processing of Asset Securitization Transaction

  **Documentation**

  This API path is used to update an existing Asset Securitization transaction by controlling the processing of the transaction identified by its unique ID (assetsecuritizationid). It involves selecting assets for securitization to manage and improve the Bank's portfolio. The goal is to oversee and manage the securitization process effectively to ensure the transaction is processed according to the Bank's standards and requirements.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

/asset-securitization/{assetsecuritizationid}/control

- Use lowercase letters
- Separate words with hyphens
- Use plural noun forms for collections (such as asset-securitization)

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AssetSecuritization/{assetsecuritizationid}/Exchange</span></summary>

  **Description**

  Determine and select assets for securitization as needed to maintain and optimize the Bank's portfolio. Administer the securitization process EcCR Accept, verify, etc. aspects of Asset Securitization Transaction processing

  **Documentation**

  This BIAN API path allows you to update an existing asset securitization resource by determining and selecting assets for securitization to improve the Bank's portfolio. It involves managing the securitization process, including acceptance, verification, and other transaction processing tasks related to asset securitization.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/asset-securitizations/{assetsecuritizationid}/exchange
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AssetSecuritization/{assetsecuritizationid}/Execute</span></summary>

  **Description**

  Determine and select assets for securitization as needed to maintain and optimize the Bank's portfolio. Administer the securitization process ExCR Execute an available automated action for Asset Securitization Transaction

  **Documentation**

  This BIAN API path allows users to update an existing resource related to Asset Securitization by executing an available automated action for an Asset Securitization Transaction. It involves determining and selecting assets for securitization to improve the Bank's portfolio.

  **Limitations**

  PUT: The name of the path should be:

```
/AssetSecuritizations/{assetsecuritizationId}/Execution
```

</details>

<details open>
  <summary><span style='color:red;'>POST: /AssetSecuritization/Initiate</span></summary>

  **Description**

  Determine and select assets for securitization as needed to maintain and optimize the Bank's portfolio. Administer the securitization process InCR Instantiate a new Asset Securitization Transaction

  **Documentation**

  This BIAN API path allows users to initiate a new asset securitization transaction. Users can determine and select assets for securitization to enhance the bank's portfolio. This process helps optimize the bank's asset management by securitizing selected assets effectively.

  **Limitations**

  POST: A recommended name for the path "/AssetSecuritization/Initiate" following REST best practices would be something like "/asset-securitization/initiate" to make it more clear and aligned with URL conventions.

</details>

<details open>
  <summary><span style='color:red;'>GET: /AssetSecuritization/{assetsecuritizationid}/Retrieve</span></summary>

  **Description**

  Determine and select assets for securitization as needed to maintain and optimize the Bank's portfolio. Administer the securitization process ReCR Retrieve details about any aspect of Asset Securitization Transaction

  **Documentation**

  This BIAN API path allows users to retrieve information about a specific Asset Securitization transaction identified by an "assetsecuritizationid." The purpose of this API is to help in the selection of assets for securitization to optimize the bank's portfolio. Users can use this path to access details about various aspects of Asset Securitization transactions, aiding in the administration of the securitization process.

  **Limitations**

  GET: The name of the path should be:

```
/asset-securitizations/{assetsecuritizationid}
```

This path follows REST best practices by using lowercase letters, hyphens for readability, and using a resource-centric approach.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AssetSecuritization/{assetsecuritizationid}/Request</span></summary>

  **Description**

  Determine and select assets for securitization as needed to maintain and optimize the Bank's portfolio. Administer the securitization process RqCR Request manual intervention or a decision with respect to Asset Securitization Transaction

  **Documentation**

  This API path allows the bank to update an existing asset securitization request by determining and selecting assets to maintain and optimize the bank's portfolio. It involves administering the process of securitizing assets and requesting manual intervention or a decision related to asset securitization transactions.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

/asset-securitizations/{assetsecuritizationid}/requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AssetSecuritization/{assetsecuritizationid}/Update</span></summary>

  **Description**

  Determine and select assets for securitization as needed to maintain and optimize the Bank's portfolio. Administer the securitization process UpCR Update details relating to Asset Securitization Transaction

  **Documentation**

  This BIAN API path allows users to update details related to asset securitization transactions by specifying the asset securitization ID. The purpose is to manage and optimize the bank's portfolio by selecting assets for securitization and overseeing the securitization process. The API operation allows for modifications or updates to be made to existing asset securitization information.

  **Limitations**

  PUT: The name of the path should be '/asset-securitizations/{assetsecuritizationid}'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AssetSecuritization/{assetsecuritizationid}/Placement/{placementid}/Exchange</span></summary>

  **Description**

  Determine and select assets for securitization as needed to maintain and optimize the Bank's portfolio. Administer the securitization process EcBQ Accept, verify, etc. aspects of Placement processing

  **Documentation**

  This API path allows the user to update an existing resource related to asset securitization within a bank. It specifically focuses on selecting assets for securitization to ensure the bank's portfolio is maintained and optimized. The process includes administering various aspects of securitization, such as accepting and verifying information, as part of the placement processing. By using this API, users can manage and update asset securitization activities efficiently.

  **Limitations**

  PUT: The name of the path following REST best practices would be:

'/asset-securitization/{asset-securitization-id}/placement/{placement-id}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AssetSecuritization/{assetsecuritizationid}/Securitization/{securitizationid}/Exchange</span></summary>

  **Description**

  Determine and select assets for securitization as needed to maintain and optimize the Bank's portfolio. Administer the securitization process EcBQ Accept, verify, etc. aspects of Securitization processing

  **Documentation**

  This API path is used to update an existing resource related to asset securitization. It allows the Bank to determine and select assets for securitization in order to maintain and optimize its portfolio. The path also involves administering the securitization process by accepting, verifying, and handling various aspects of the securitization processing.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be structured in a clear and hierarchical manner to represent the resources it is addressing. In this case, a suggested name for the path '/AssetSecuritization/{assetsecuritizationid}/Securitization/{securitizationid}/Exchange' could be:

'/asset-securitizations/{assetsecuritizationid}/securitizations/{securitizationid}/exchanges'

This naming convention follows

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AssetSecuritization/{assetsecuritizationid}/Selection/{selectionid}/Exchange</span></summary>

  **Description**

  Determine and select assets for securitization as needed to maintain and optimize the Bank's portfolio. Administer the securitization process EcBQ Accept, verify, etc. aspects of Selection processing

  **Documentation**

  This API path, `/AssetSecuritization/{assetsecuritizationid}/Selection/{selectionid}/Exchange`, allows users to update an existing resource related to determining and selecting assets for securitization within a bank's portfolio. Users can perform tasks related to administering the securitization process, including accepting, verifying, and managing various aspects of the asset selection processing. The API provides a structured way to manage and optimize the bank's asset securitization activities.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

/asset-securitization/{asset_securitization_id}/selection/{selection_id}/exchange

</details>

<details open>
  <summary><span style='color:red;'>POST: /AssetSecuritization/{assetsecuritizationid}/Placement/Initiate</span></summary>

  **Description**

  Determine and select assets for securitization as needed to maintain and optimize the Bank's portfolio. Administer the securitization process InBQ Instantiate a new Placement

  **Documentation**

  This BIAN API path allows the Bank to initiate a new placement for securitization of assets. It involves determining and selecting assets to include in the securitization process in order to maintain and optimize the Bank's portfolio. By using this API, the Bank can administer the securitization process effectively.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be as follows:

/asset-securitizations/{assetSecuritizationId}/placement/initiate

</details>

<details open>
  <summary><span style='color:red;'>POST: /AssetSecuritization/{assetsecuritizationid}/Securitization/Initiate</span></summary>

  **Description**

  Determine and select assets for securitization as needed to maintain and optimize the Bank's portfolio. Administer the securitization process InBQ Instantiate a new Securitization

  **Documentation**

  This BIAN API path allows users to initiate a new securitization process for assets selected to maintain and optimize the bank's portfolio. It involves determining and selecting assets that are suitable for securitization, and then administering the process of securitizing these assets. By using this API, users can create a new securitization resource within the bank's system to manage this process effectively.

  **Limitations**

  POST: The name of the path should be:

'/asset-securitization/{assetSecuritizationId}/securitization/initiate'

</details>

<details open>
  <summary><span style='color:red;'>POST: /AssetSecuritization/{assetsecuritizationid}/Selection/Initiate</span></summary>

  **Description**

  Determine and select assets for securitization as needed to maintain and optimize the Bank's portfolio. Administer the securitization process InBQ Instantiate a new Selection

  **Documentation**

  This API path is used to initiate the process of determining and selecting assets for securitization in order to manage and optimize a bank's portfolio. By making a POST request to this path with the necessary information, a new selection for asset securitization is created. This process helps the bank in administering the securitization process effectively.

  **Limitations**

  POST: The name of the path should be:
/asset-securitizations/{assetSecuritizationId}/selection/initiate

</details>

<details open>
  <summary><span style='color:red;'>GET: /AssetSecuritization/{assetsecuritizationid}/Placement/{placementid}/Retrieve</span></summary>

  **Description**

  Determine and select assets for securitization as needed to maintain and optimize the Bank's portfolio. Administer the securitization process ReBQ Retrieve details about any aspect of Placement

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific placement within the asset securitization process. It helps in selecting assets for securitization to optimize the Bank's portfolio. By using this API, you can access information related to placements, which are crucial aspects of administering the securitization process.

  **Limitations**

  GET: The name of the path following REST best practices could be:

'/asset-securitization/{assetsecuritizationid}/placement/{placementid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /AssetSecuritization/{assetsecuritizationid}/Securitization/{securitizationid}/Retrieve</span></summary>

  **Description**

  Determine and select assets for securitization as needed to maintain and optimize the Bank's portfolio. Administer the securitization process ReBQ Retrieve details about any aspect of Securitization

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific aspect of asset securitization. You can use this API to access information related to selecting assets for securitization, managing the securitization process, and optimizing the bank's portfolio. By providing the relevant asset securitization and securitization IDs in the request, you can retrieve specific data related to the securitization activities within the bank.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be more resource-oriented and focus on the action being performed. A more suitable name for the path could be:

```
/asset-securitizations/{assetsecuritizationid}/securitizations/{securitizationid}/retrieve
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /AssetSecuritization/{assetsecuritizationid}/Selection/{selectionid}/Retrieve</span></summary>

  **Description**

  Determine and select assets for securitization as needed to maintain and optimize the Bank's portfolio. Administer the securitization process ReBQ Retrieve details about any aspect of Selection

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific selection made during the asset securitization process. It helps in determining and selecting assets to maintain and optimize a bank's portfolio. The API provides access to information related to the selection of assets for securitization, which is an important step in managing the bank's investment portfolio effectively.

  **Limitations**

  GET: Based on REST best practices, a suitable name for this path could be:

GET '/asset-securitization/{assetsecuritizationid}/selections/{selectionid}'

It is recommended to use lowercase letters, hyphens for readability, and resource URIs in the plural form.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AssetSecuritization/{assetsecuritizationid}/Placement/{placementid}/Request</span></summary>

  **Description**

  Determine and select assets for securitization as needed to maintain and optimize the Bank's portfolio. Administer the securitization process RqBQ Request manual intervention or a decision with respect to Placement

  **Documentation**

  This BIAN API path is used for updating an existing resource related to asset securitization within a bank's portfolio. Specifically, it allows for determining and selecting assets for securitization in order to manage and improve the bank's portfolio. The API also handles the administration of the securitization process, including requesting manual intervention or decision-making in relation to a placement within the securitization process.

  **Limitations**

  PUT: Based on REST best practices, a suitable name for the path '/AssetSecuritization/{assetsecuritizationid}/Placement/{placementid}/Request' could be:

/asset-securitizations/{assetsecuritizationid}/placements/{placementid}/requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AssetSecuritization/{assetsecuritizationid}/Securitization/{securitizationid}/Request</span></summary>

  **Description**

  Determine and select assets for securitization as needed to maintain and optimize the Bank's portfolio. Administer the securitization process RqBQ Request manual intervention or a decision with respect to Securitization

  **Documentation**

  This BIAN API path allows you to update an existing asset securitization request by determining and selecting assets for securitization in order to optimize the bank's portfolio. It also involves administering the securitization process and requesting manual intervention or a decision related to securitization.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/asset-securitization/{asset-securitization-id}/securitization/{securitization-id}/request

In this naming convention, paths use lowercase letters, words are separated by hyphens, and parameters are identified by curly braces.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AssetSecuritization/{assetsecuritizationid}/Selection/{selectionid}/Request</span></summary>

  **Description**

  Determine and select assets for securitization as needed to maintain and optimize the Bank's portfolio. Administer the securitization process RqBQ Request manual intervention or a decision with respect to Selection

  **Documentation**

  This API path is used to update an existing resource related to asset securitization within a bank. Specifically, it is used to determine and select assets for securitization to manage and enhance the bank's portfolio. It also involves administering the securitization process and requesting manual intervention or a decision regarding asset selection. Essentially, this API path helps the bank optimize its portfolio by selecting assets for securitization and handling any manual intervention or decision-making required in the selection process.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should follow a resource-oriented approach and a consistent naming convention. One possible name for the path could be:

/asset-securitizations/{assetsecuritizationid}/selections/{selectionid}/requests

This naming convention uses lowercase letters, separates words with hyphens, and represents a hierarchical structure in the URL path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AssetSecuritization/{assetsecuritizationid}/Placement/{placementid}/Update</span></summary>

  **Description**

  Determine and select assets for securitization as needed to maintain and optimize the Bank's portfolio. Administer the securitization process UpBQ Update details relating to Placement

  **Documentation**

  This BIAN API path is related to the Asset Securitization process. Specifically, it allows you to update details related to a placement within a securitization process. By calling this API with a specific asset securitization ID and placement ID, you can modify and maintain the information for that placement in order to optimize the bank's portfolio. This can include tasks such as adjusting asset selections for securitization and administering the overall securitization process.

  **Limitations**

  PUT: The name of the path should be something like:  
'/asset-securitization/{assetsecuritizationid}/placement/{placementid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AssetSecuritization/{assetsecuritizationid}/Securitization/{securitizationid}/Update</span></summary>

  **Description**

  Determine and select assets for securitization as needed to maintain and optimize the Bank's portfolio. Administer the securitization process UpBQ Update details relating to Securitization

  **Documentation**

  This BIAN API path allows users to update details related to asset securitization within a bank's portfolio. Users can select assets for securitization, administer the securitization process, and modify specific information pertaining to securitized assets. The API helps banks manage and optimize their asset portfolios by providing a means to adjust details associated with securitization activities.

  **Limitations**

  PUT: The name of the path should be `/asset-securitizations/{assetsecuritizationid}/securitizations/{securitizationid}` if it follows REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /AssetSecuritization/{assetsecuritizationid}/Selection/{selectionid}/Update</span></summary>

  **Description**

  Determine and select assets for securitization as needed to maintain and optimize the Bank's portfolio. Administer the securitization process UpBQ Update details relating to Selection

  **Documentation**

  This API path allows users to update details related to the selection of assets for securitization within a bank's portfolio. It is used to manage the process of choosing specific assets to include in a securitization deal, with the goal of maintaining and optimizing the bank's overall portfolio. By making a PUT request to this endpoint with the necessary parameters, users can modify and update information about a particular asset selection within the asset securitization process.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

`PATCH /asset-securitization/{assetsecuritizationid}/selection/{selectionid}`

In this naming convention:
- We use the HTTP method `PATCH` to update a specific resource.
- We use all lowercase letters and separate words with hyphens for better readability.
- The path reflects the hierarchy of resources with identifiers (`asset-securitization` and `selection`) included as path parameters.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
