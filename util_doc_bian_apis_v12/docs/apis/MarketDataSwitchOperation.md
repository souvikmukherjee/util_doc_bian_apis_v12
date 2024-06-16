---
id: MarketDataSwitchOperation
title: MarketDataSwitchOperation
---

<h1 style='color:red;'>MarketDataSwitchOperation</h1>

**BIAN Documentation:** [MarketDataSwitchOperation v12](https://app.swaggerhub.com/apis/BIAN-3/MarketDataSwitchOperation/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /MarketDataSwitchOperation/Initiate</span></summary>

  **Description**

  This service domain operates the internal information distribution facility/switch in compliance with administered external subscription information feed service access rights. Note the content is retrieved by the Market Feed Operation service domain from the various external feed services. Internal information can also be published over the switch from various bank sources (such as bank rates provided by treasury). InCR Initiate a market data switch operating session

  **Documentation**

  This API path allows users to start a new session for operating the internal information distribution facility/switch. It ensures that the distribution of market data complies with access rights for external subscription information feeds. The data can be sourced from external feed services as well as internal bank sources like bank rates. This API helps in managing and controlling the flow of market data within a financial institution.

  **Limitations**

  POST: The name of the path should ideally be a noun representing a resource, so a more RESTful name for the path '/MarketDataSwitchOperation/Initiate' could be '/MarketDataSwitchOperations' or '/MarketDataSwitch'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketDataSwitchOperation/{marketdataswitchoperationid}/Update</span></summary>

  **Description**

  This service domain operates the internal information distribution facility/switch in compliance with administered external subscription information feed service access rights. Note the content is retrieved by the Market Feed Operation service domain from the various external feed services. Internal information can also be published over the switch from various bank sources (such as bank rates provided by treasury). UpCR Update details for the market data switch operating session

  **Documentation**

  This API path allows for the updating of information related to how the internal information distribution facility/switch operates in accordance with external subscription access rights. It manages the flow of information from external data feeds and internal sources, such as bank rates, ensuring compliance with subscription agreements. The API facilitates the updating of details for the market data switch operation session.

  **Limitations**

  PUT: The name of the path should be:

'/market-data-switch-operations/{marketdataswitchoperationid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /MarketDataSwitchOperation/{marketdataswitchoperationid}/Retrieve</span></summary>

  **Description**

  This service domain operates the internal information distribution facility/switch in compliance with administered external subscription information feed service access rights. Note the content is retrieved by the Market Feed Operation service domain from the various external feed services. Internal information can also be published over the switch from various bank sources (such as bank rates provided by treasury). ReCR Retrieve details about the market data switch operating session

  **Documentation**

  This BIAN API path allows users to retrieve details about the market data switch operation session. It operates an internal information distribution switch that complies with external subscription access rights. The switch can retrieve content from external feed services managed by the Market Feed Operation domain and can also publish internal information, such as bank rates from different bank sources like treasury.

  **Limitations**

  GET: Based on REST best practices, the recommended name for this path would be:

'/market-data-switch-operations/{marketdataswitchoperationid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketDataSwitchOperation/{marketdataswitchoperationid}/FeedUpload/{feeduploadid}/Update</span></summary>

  **Description**

  This service domain operates the internal information distribution facility/switch in compliance with administered external subscription information feed service access rights. Note the content is retrieved by the Market Feed Operation service domain from the various external feed services. Internal information can also be published over the switch from various bank sources (such as bank rates provided by treasury). UpBQ Update details for the feed upload

  **Documentation**

  This API path is used to update details for a specific feed upload within the Market Data Switch Operation service domain. This service domain manages the distribution of internal information through a switch, ensuring compliance with external subscription rights. The content for the switch is sourced from external feed services and can also include internal information from various bank sources. The update operation allows for modifications to be made to specific feed uploads to ensure accurate and up-to-date information is being distributed correctly.

  **Limitations**

  PUT: The name of the path should ideally represent a resource and an action associated with it. 
One suggestion could be:

PUT /MarketDataSwitchOperations/{marketdataswitchoperationid}/FeedUploads/{feeduploadid} 

In this path:
- "PUT" method indicates an update operation, following REST conventions.
- "MarketDataSwitchOperations" represents the resource for market data switch operations.
- "{marketdataswitchoperationid}" is a placeholder for the specific ID of a market data switch operation

</details>

<details open>
  <summary><span style='color:red;'>GET: /MarketDataSwitchOperation/{marketdataswitchoperationid}/FeedUpload/{feeduploadid}/Retrieve</span></summary>

  **Description**

  This service domain operates the internal information distribution facility/switch in compliance with administered external subscription information feed service access rights. Note the content is retrieved by the Market Feed Operation service domain from the various external feed services. Internal information can also be published over the switch from various bank sources (such as bank rates provided by treasury). ReBQ Retrieve details about the feed upload activity

  **Documentation**

  This API path allows you to retrieve details about the feed upload activity within the Market Data Switch Operation service domain. It specifically provides information about a resource related to a feed upload, identified by the market data switch operation ID and the feed upload ID. This service ensures that the internal information distribution facility follows the rules set for accessing external subscription information feeds. It includes information about content retrieved from external feeds and internal information published through the switch from various bank sources.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/market-data-switch-operations/{marketdataswitchoperationid}/feed-uploads/{feeduploadid}/retrieve'

</details>

<details open>
  <summary><span style='color:red;'>POST: /MarketDataSwitchOperation/{marketdataswitchoperationid}/InternalPublication/Initiate</span></summary>

  **Description**

  This service domain operates the internal information distribution facility/switch in compliance with administered external subscription information feed service access rights. Note the content is retrieved by the Market Feed Operation service domain from the various external feed services. Internal information can also be published over the switch from various bank sources (such as bank rates provided by treasury). InBQ Initiate internal publication of information

  **Documentation**

  This API path allows users to create a new resource for initiating the internal publication of information within the Market Data Switch Operation service domain. This involves distributing internal information through a switch while adhering to access rights from external subscription information feed services. The internal content can come from external feed services or various bank sources like bank rates provided by treasury.

  **Limitations**

  POST: A suitable name for this path following REST best practices could be:

```
POST /marketDataSwitchOperations/{marketdataswitchoperationid}/internalPublication/initiate
``` 

In this naming convention, the path uses lowercase letters and follows the guideline of using nouns for resource names and verbs for actions.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketDataSwitchOperation/{marketdataswitchoperationid}/InternalPublication/{internalpublicationid}/Update</span></summary>

  **Description**

  This service domain operates the internal information distribution facility/switch in compliance with administered external subscription information feed service access rights. Note the content is retrieved by the Market Feed Operation service domain from the various external feed services. Internal information can also be published over the switch from various bank sources (such as bank rates provided by treasury). UpBQ Update details of internal publication

  **Documentation**

  This API path allows you to update details of internal publications within the Market Data Switch Operation service domain. It works by managing the distribution of information within the system, ensuring compliance with external subscription access rights. The API can be used to modify existing internal publication information, such as bank rates provided by treasury, which is then distributed through the information switch within the system.

  **Limitations**

  PUT: The name of the path should be:

'/market-data-switch-operations/{marketdataswitchoperationid}/internal-publications/{internalpublicationid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /MarketDataSwitchOperation/{marketdataswitchoperationid}/InternalPublication/{internalpublicationid}/Retrieve</span></summary>

  **Description**

  This service domain operates the internal information distribution facility/switch in compliance with administered external subscription information feed service access rights. Note the content is retrieved by the Market Feed Operation service domain from the various external feed services. Internal information can also be published over the switch from various bank sources (such as bank rates provided by treasury). ReBQ Retrieve details about the internal publication task

  **Documentation**

  This API path allows you to retrieve details about a specific internal publication task within the Market Data Switch Operation service domain. The internal publication task involves the distribution of information through a switch, ensuring compliance with external subscription service access rights. This service retrieves content from external feed services and can also publish internal information sourced from various banks, such as bank rates provided by treasury. Through this API, you can access specific information related to internal publication tasks within the Market Data Switch Operation domain.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/market-data-switch-operations/{marketdataswitchoperationid}/internal-publications/{internalpublicationid}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /MarketDataSwitchOperation/{marketdataswitchoperationid}/Distribution/Initiate</span></summary>

  **Description**

  This service domain operates the internal information distribution facility/switch in compliance with administered external subscription information feed service access rights. Note the content is retrieved by the Market Feed Operation service domain from the various external feed services. Internal information can also be published over the switch from various bank sources (such as bank rates provided by treasury). InBQ User subscription to the switch

  **Documentation**

  This API path is used to initiate the operation of the internal information distribution facility/switch within the Market Data system. It ensures that external subscription information feeds are accessed appropriately and that content is retrieved from external feed services. Additionally, internal information, such as bank rates provided by the treasury, can be published through this switch. Users can subscribe to this switch to access market data efficiently.

  **Limitations**

  POST: If the path '/MarketDataSwitchOperation/{marketdataswitchoperationid}/Distribution/Initiate' followed REST best practices, a more appropriate name might be:

'/market-data-switch-operations/{marketdataswitchoperationid}/distribution/initiate'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketDataSwitchOperation/{marketdataswitchoperationid}/Distribution/{distributionid}/Update</span></summary>

  **Description**

  This service domain operates the internal information distribution facility/switch in compliance with administered external subscription information feed service access rights. Note the content is retrieved by the Market Feed Operation service domain from the various external feed services. Internal information can also be published over the switch from various bank sources (such as bank rates provided by treasury). UpBQ User subscription details

  **Documentation**

  This API path allows users to update an existing resource related to the Market Data Switch Operation service domain. It involves managing the internal information distribution facility/switch in accordance with the access rights for external subscription information feed services. This means the API enables the update of how information is retrieved from external feed services and how internal information from bank sources, such as bank rates from the treasury, is published over the switch. Essentially, it helps ensure that the distribution of market data is handled appropriately and in compliance with subscription access rights.

  **Limitations**

  PUT: The name of the path should be something descriptive and indicative of the resource and action it represents. A suitable name for the path '/MarketDataSwitchOperation/{marketdataswitchoperationid}/Distribution/{distributionid}/Update' following REST best practices could be:

'/market-data-switch-operations/{marketdataswitchoperationid}/distribution/{distributionid}' 

This path indicates the resource being updated (distribution) within a specific market data switch operation.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketDataSwitchOperation/{marketdataswitchoperationid}/Distribution/{distributionid}/Execute</span></summary>

  **Description**

  This service domain operates the internal information distribution facility/switch in compliance with administered external subscription information feed service access rights. Note the content is retrieved by the Market Feed Operation service domain from the various external feed services. Internal information can also be published over the switch from various bank sources (such as bank rates provided by treasury). ExBQ Execute an automated action to the service (e.g. select content)

  **Documentation**

  This BIAN API path allows you to update an existing resource related to the operation of the internal information distribution facility/switch. It ensures that the internal information distribution is done in compliance with externally administered subscription information feed service access rights. This operation involves selecting content that has been retrieved from external feed services by the Market Feed Operation service domain. Additionally, internal information, such as bank rates from various bank sources, can also be published over the switch through this API path.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be: 

/operations/{marketdataswitchoperationid}/distributions/{distributionid}/execute

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketDataSwitchOperation/{marketdataswitchoperationid}/Distribution/{distributionid}/Request</span></summary>

  **Description**

  This service domain operates the internal information distribution facility/switch in compliance with administered external subscription information feed service access rights. Note the content is retrieved by the Market Feed Operation service domain from the various external feed services. Internal information can also be published over the switch from various bank sources (such as bank rates provided by treasury). RqBQ Request manual intervention for  the service (e.g. request a usage profile change)

  **Documentation**

  This API path allows you to update an existing resource related to the operation of an internal information distribution facility/switch that manages market data. This service ensures that information from external subscription feed services is distributed in compliance with access rights. It also enables the publication of internal information, such as bank rates, over the switch. Additionally, you can request manual intervention for the service, like changing the usage profile.

  **Limitations**

  PUT: Based on REST best practices, the suggested name for the path would be:

'/market-data-switch-operations/{marketdataswitchoperationid}/distributions/{distributionid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /MarketDataSwitchOperation/{marketdataswitchoperationid}/Distribution/{distributionid}/Retrieve</span></summary>

  **Description**

  This service domain operates the internal information distribution facility/switch in compliance with administered external subscription information feed service access rights. Note the content is retrieved by the Market Feed Operation service domain from the various external feed services. Internal information can also be published over the switch from various bank sources (such as bank rates provided by treasury). ReBQ Retrieve details about the user switch session

  **Documentation**

  This BIAN API path allows you to retrieve information about a user switch session within the Market Data Switch Operation service domain. The switch facilitates the distribution of internal information in accordance with external subscription access rights. The content can come from external feed services or internal bank sources, such as bank rates provided by the treasury. This API provides details about the specific user switch session, allowing you to access relevant information stored within the system.

  **Limitations**

  GET: The name of the path should be something like: 
GET /market-data-switch-operations/{marketdataswitchoperationid}/distributions/{distributionid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
