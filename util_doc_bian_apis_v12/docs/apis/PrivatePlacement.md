---
id: PrivatePlacement
title: PrivatePlacement
---

<h1 style='color:red;'>PrivatePlacement</h1>

**BIAN Documentation:** [PrivatePlacement v12](https://app.swaggerhub.com/apis/BIAN-3/PrivatePlacement/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /PrivatePlacement/{privateplacementid}/Control</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Control Private Placement Facility

  **Documentation**

  This PUT method for the /PrivatePlacement/{privateplacementid}/Control API path allows you to update an existing private placement facility for corporate customers. It involves managing the various functions and services related to private placement services within a corporate setting.

  **Limitations**

  PUT: The name of the path should be:

`/private-placements/{privateplacementid}/controls`

In this naming convention:
- Path segments are in lowercase
- Plural nouns are used to represent collections
- Hyphens are used to separate words in multi-word path segments

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PrivatePlacement/{privateplacementid}/Exchange</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Exchange Private Placement Facility

  **Documentation**

  This API path allows you to update an existing resource related to a private placement service for corporate customers. Specifically, it pertains to exchanging information or facilities within a private placement service identified by a unique private placement ID. By using the PUT method, you can make modifications or updates to the private placement facility in question.

  **Limitations**

  PUT: The name of the path should be `/private-placements/{privateplacementid}/exchange` in kebab case format, following REST best practices. Each part of the path should be in lowercase and separated by hyphens for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PrivatePlacement/{privateplacementid}/Execute</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Execute Private Placement Facility

  **Documentation**

  This API path allows you to update or execute a private placement facility for a specific private placement ID within the private placement service domain provided to corporate customers. In simple terms, it enables you to carry out actions related to private placement services for a particular private placement transaction using the provided private placement ID.

  **Limitations**

  PUT: A suitable name for the path '/PrivatePlacement/{privateplacementid}/Execute' that follows REST best practices could be:

```
POST /private-placements/{privateplacementid}/execute
```

</details>

<details open>
  <summary><span style='color:red;'>POST: /PrivatePlacement/Initiate</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Initiate Private Placement Facility

  **Documentation**

  This BIAN API path allows you to initiate a private placement facility for corporate customers. It involves creating a new resource to provide private placement services, which are financial transactions where a company raises capital from a select group of investors without offering the securities to the general public.

  **Limitations**

  POST: The name of the path '/PrivatePlacement/Initiate' following REST best practices could be simplified to something like '/private-placements'. This new path provides a more general and resource-oriented name that better aligns with REST principles.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PrivatePlacement/{privateplacementid}/Notify</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Notify Private Placement Facility

  **Documentation**

  This API path `/PrivatePlacement/{privateplacementid}/Notify` allows you to retrieve information about notifying a private placement facility related to a specific private placement transaction identified by the `privateplacementid`. This functionality is part of the Private Placement Service Domain and is used to handle communication and notifications regarding private placement services provided to corporate customers.

  **Limitations**

  GET: The name of the path should be `/private-placements/{privateplacementid}/notify` following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PrivatePlacement/{privateplacementid}/Request</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Request Private Placement Facility

  **Documentation**

  This API path allows you to update or make a request for a private placement facility for a specific private placement ID associated with a corporate customer. It is part of a service domain that handles all functions related to offering private placement services to corporate clients. By sending a PUT request to this path with the private placement ID, you can request or update a private placement facility as needed for the customer.

  **Limitations**

  PUT: Based on RESTful API naming conventions, the path should be named as follows: 

'/private-placements/{privateplacementid}/requests'

This naming convention typically uses lowercase letters for paths and plural nouns for collections of resources. Additionally, it separates words with hyphens for readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PrivatePlacement/{privateplacementid}/Retrieve</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Retrieve Private Placement Facility

  **Documentation**

  This API path allows you to retrieve information about a specific private placement facility by providing the unique private placement ID as a parameter. It is part of a service domain that handles all the functions related to providing private placement services to corporate customers.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

/ private-placements /{privateplacementid} /retrieve

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PrivatePlacement/{privateplacementid}/Update</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Update Private Placement Facility

  **Documentation**

  This BIAN API path allows you to update a specific private placement facility identified by the private placement ID. It provides functionality to make changes to the details or configurations of the private placement service being provided to corporate customers.

  **Limitations**

  PUT: A suitable name for this path following REST best practices would be: 

```
PUT /PrivatePlacements/{privateplacementid}
``` 

This path suggests that a PUT request should be made to update a specific Private Placement resource identified by {privateplacementid}.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PrivatePlacement/{privateplacementid}/PrivatePlacement/{privateplacementid}/Exchange</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Exchange Private Placement Fulfillment

  **Documentation**

  This API path allows you to update an existing private placement fulfillment process. It is part of a service domain that provides various functions related to offering private placement services to corporate customers. By using this path and the specified method, you can make changes or modifications to the private placement fulfillment for a specific private placement ID.

  **Limitations**

  PUT: The name of the path should be:

/ private-placements / {privateplacementid} / exchanges

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PrivatePlacement/{privateplacementid}/PrivatePlacementInstrumentMaintenance/{privateplacementinstrumentmaintenanceid}/Exchange</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Exchange Private Placement Instrument Maintenance Fulfillment

  **Documentation**

  This API path allows you to update a specific private placement instrument maintenance for a private placement. It provides functions related to managing and maintaining private placement services for corporate customers. By using this path with the PUT method, you can make changes or updates to a private placement instrument maintenance fulfillment within the context of a private placement.

  **Limitations**

  PUT: The name of the path could be following REST best practices:

```
/ private-placements /{privateplacementid}/instrument-maintenance /{privateplacementinstrumentmaintenanceid}/exchange
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PrivatePlacement/{privateplacementid}/PrivatePlacementInstrumentSpecification/{privateplacementinstrumentspecificationid}/Exchange</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Exchange Private Placement Instrument Specification Fulfillment

  **Documentation**

  This API path allows you to update a private placement instrument specification within a private placement service for corporate customers. It involves fulfilling the exchange transactions related to the specified private placement instrument. Essentially, this path facilitates the management and modification of private placement details for corporate clients.

  **Limitations**

  PUT: The name of the path should be:

'/private-placements/{privatePlacementId}/instrument-specifications/{instrumentSpecificationId}/exchanges'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PrivatePlacement/{privateplacementid}/PrivatePlacement/{privateplacementid}/Execute</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Execute Private Placement Fulfillment

  **Documentation**

  This BIAN API path allows you to update an existing private placement by executing the private placement fulfillment process for a specific private placement ID. Essentially, it enables you to carry out all necessary actions to provide private placement services to corporate customers related to the specified private placement.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:
'/private-placements/{privateplacementid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PrivatePlacement/{privateplacementid}/PrivatePlacementInstrumentMaintenance/{privateplacementinstrumentmaintenanceid}/Execute</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Execute Private Placement Instrument Maintenance Fulfillment

  **Documentation**

  This API path allows you to update an existing private placement instrument maintenance fulfillment within a private placement service for corporate customers. It provides a way to execute tasks related to maintaining and fulfilling private placement instruments as part of the private placement services offered to the customers.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be structured according to the resource hierarchy and should use nouns to represent resources. 

A suggestion for the name of the path could be:

'/private-placements/{privateplacementid}/instrument-maintenance/{privateplacementinstrumentmaintenanceid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PrivatePlacement/{privateplacementid}/PrivatePlacementInstrumentSpecification/{privateplacementinstrumentspecificationid}/Execute</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Execute Private Placement Instrument Specification Fulfillment

  **Documentation**

  This BIAN API path allows users to update an existing private placement instrument specification fulfillment within a private placement service provided to corporate customers. It involves executing the fulfillment of a specific private placement instrument specification identified by the privateplacementinstrumentspecificationid associated with a particular private placement identified by privateplacementid.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/private-placements/{privateplacementid}/instrument-specifications/{privateplacementinstrumentspecificationid}/execute'

Ensure to use lowercase letters, hyphens for readability, and focus on resource naming conventions for better clarity and consistency.

</details>

<details open>
  <summary><span style='color:red;'>POST: /PrivatePlacement/{privateplacementid}/PrivatePlacement/Initiate</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Initiate Private Placement Fulfillment

  **Documentation**

  This API path allows you to initiate the process of fulfilling a private placement service for a specific private placement identified by {privateplacementid}. By making a POST request to this path, you can create a new resource to kickstart the private placement fulfillment process for corporate customers. It provides functions related to offering private placement services to businesses.

  **Limitations**

  POST: Following REST best practices, the name of the path '/PrivatePlacement/{privateplacementid}/PrivatePlacement/Initiate' could be restructured to reflect a more resource-centric approach. One possible alternative name for the path could be '/private-placements/{privateplacementid}/initiate'. 

This naming convention uses all lowercase letters and separates words with hyphens for better readability while also indicating the specific resource being accessed ('private-placements' in this case) followed by the unique identifier ('privateplacement

</details>

<details open>
  <summary><span style='color:red;'>POST: /PrivatePlacement/{privateplacementid}/PrivatePlacementInstrumentMaintenance/Initiate</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Initiate Private Placement Instrument Maintenance Fulfillment

  **Documentation**

  This API path is used to initiate the process of maintaining a private placement instrument for a specific private placement identified by {privateplacementid}. It allows users to create a new resource to fulfill the maintenance requirements for the private placement instrument. In simpler terms, this API helps in managing and updating private placement investments for corporate customers.

  **Limitations**

  POST: A possible RESTful name for the path could be: 

```
/ private-placements / {privateplacementid} / instruments / initiate 
```

</details>

<details open>
  <summary><span style='color:red;'>POST: /PrivatePlacement/{privateplacementid}/PrivatePlacementInstrumentSpecification/Initiate</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Initiate Private Placement Instrument Specification Fulfillment

  **Documentation**

  This BIAN API path allows users to initiate the process of fulfilling a private placement instrument specification for a specific private placement. In simpler terms, it provides a way to start setting up the details and requirements needed for a private placement service for a corporate customer.

  **Limitations**

  POST: The name of the path should be:

/ private-placements / {privateplacementid} / instrument-specifications / initiate

Following REST best practices, it is recommended to use all lowercase letters, separate words with hyphens, and use plural nouns for resource names.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PrivatePlacement/{privateplacementid}/PrivatePlacement/{privateplacementid}/Notify</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Notify Private Placement Fulfillment

  **Documentation**

  This API path allows you to retrieve information about a specific private placement by providing its unique identifier (privateplacementid). It is related to providing private placement services to corporate customers. The Notify Private Placement Fulfillment operation likely triggers a notification process related to the fulfillment of the private placement service, informing relevant parties about progress or completion.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

```
/PrivatePlacements/{privateplacementid}/Notify
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /PrivatePlacement/{privateplacementid}/PrivatePlacementInstrumentMaintenance/{privateplacementinstrumentmaintenanceid}/Notify</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Notify Private Placement Instrument Maintenance Fulfillment

  **Documentation**

  This API path allows you to retrieve information related to notifying the fulfillment of a private placement instrument maintenance within a specific private placement service for corporate customers. It helps you access details about the completion of a maintenance task for a specific private placement instrument.

  **Limitations**

  GET: The name of the path based on REST best practices should be:

```
/ private-placements / {privateplacementid} / instrument-maintenance / {privateplacementinstrumentmaintenanceid} / notify
``` 

In RESTful API design, it is recommended to use lowercase letters, use hyphens to separate words, and use plural nouns for resources. Also, it's a good practice to keep the path segments descriptive and concise.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PrivatePlacement/{privateplacementid}/PrivatePlacementInstrumentSpecification/{privateplacementinstrumentspecificationid}/Notify</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Notify Private Placement Instrument Specification Fulfillment

  **Documentation**

  This API path, `/PrivatePlacement/{privateplacementid}/PrivatePlacementInstrumentSpecification/{privateplacementinstrumentspecificationid}/Notify`, allows you to retrieve information about notifying the fulfillment of a private placement instrument specification within a private placement service. It pertains to activities related to offering private placement services to corporate clients.

  **Limitations**

  GET: The name of the path should be:
'/private-placements/{privatePlacementId}/instrument-specifications/{privatePlacementInstrumentSpecificationId}/notify'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PrivatePlacement/{privateplacementid}/PrivatePlacement/{privateplacementid}/Request</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Request Private Placement Fulfillment

  **Documentation**

  This BIAN API path allows you to update an existing private placement request for a corporate customer. It is specific to private placement services and is used to request the fulfillment of a private placement transaction tied to a particular private placement ID. The PUT method is utilized to update the details of the private placement request, indicating that the request for private placement fulfillment is being made or updated for a specified private placement ID.

  **Limitations**

  PUT: For following REST best practices, the name of the path should be:
`/private-placements/{privateplacementid}/requests`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PrivatePlacement/{privateplacementid}/PrivatePlacementInstrumentMaintenance/{privateplacementinstrumentmaintenanceid}/Request</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Request Private Placement Instrument Maintenance Fulfillment

  **Documentation**

  This API path allows you to update a request for private placement instrument maintenance fulfillment for a specific private placement and instrument maintenance ID. It is used in the process of providing private placement services to corporate customers. By making a PUT request to this path with the necessary information, you can update and fulfill a request related to the maintenance of private placement instruments within the private placement service domain.

  **Limitations**

  PUT: The name of the path should be:

```
/PrivatePlacements/{privatePlacementId}/PrivatePlacementInstrumentMaintenances/{privatePlacementInstrumentMaintenanceId}/Requests
``` 

This path follows REST best practices by using plural nouns for resource names and using camel case for multi-word resource names.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PrivatePlacement/{privateplacementid}/PrivatePlacementInstrumentSpecification/{privateplacementinstrumentspecificationid}/Request</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Request Private Placement Instrument Specification Fulfillment

  **Documentation**

  This BIAN API path allows users to update an existing Private Placement Instrument Specification Fulfillment for a specific private placement. It is part of a service domain that helps corporate customers with private placement services. By sending a PUT request to this path with the private placement ID and the instrument specification ID, users can update and request fulfillment of a specific private placement instrument specification.

  **Limitations**

  PUT: Based on REST best practices, the name of the path for accessing a specific Request resource related to a Private Placement Instrument Specification within a Private Placement would be as follows:

```
/PrivatePlacements/{privateplacementid}/PrivatePlacementInstrumentSpecifications/{privateplacementinstrumentspecificationid}/Requests
``` 

Here are some key points in the suggested path:
- Resource names should be in plural form.
- Path parameters (e.g., privateplacementid, privateplacementinstrumentspecificationid) should be

</details>

<details open>
  <summary><span style='color:red;'>GET: /PrivatePlacement/{privateplacementid}/PrivatePlacement/{privateplacementid}/Retrieve</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Retrieve Private Placement Fulfillment

  **Documentation**

  This BIAN API path is used to retrieve information related to a specific private placement fulfillment. It provides access to details and data associated with a private placement service provided to corporate customers. By making a GET request to this path with the appropriate private placement ID, you can fetch information about the private placement fulfillment such as transaction details, agreements, or other related data.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be simplified and descriptive. It should use nouns to represent resources and verbs to represent actions. 

A possible name for the path could be: 
'/private-placements/{privateplacementid}' 

This naming convention is clear and concise, representing the resource 'private placements' and the action of retrieving a specific private placement based on its ID.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PrivatePlacement/{privateplacementid}/PrivatePlacementInstrumentMaintenance/{privateplacementinstrumentmaintenanceid}/Retrieve</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Retrieve Private Placement Instrument Maintenance Fulfillment

  **Documentation**

  This BIAN API path allows you to retrieve information related to a specific private placement instrument maintenance fulfillment within the context of private placement services for corporate customers. By specifying the private placement ID and the instrument maintenance ID, you can obtain details about the fulfillment process for that specific instrument. This API is designed to provide complete functionality for managing private placement services within a corporate setting.

  **Limitations**

  GET: A possible name for the path '/PrivatePlacement/{privateplacementid}/PrivatePlacementInstrumentMaintenance/{privateplacementinstrumentmaintenanceid}/Retrieve' following RESTful best practices could be:

GET /private-placements/{privateplacementid}/instrument-maintenance/{privateplacementinstrumentmaintenanceid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /PrivatePlacement/{privateplacementid}/PrivatePlacementInstrumentSpecification/{privateplacementinstrumentspecificationid}/Retrieve</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Retrieve Private Placement Instrument Specification Fulfillment

  **Documentation**

  This API path allows you to retrieve information about a specific Private Placement Instrument Specification Fulfillment associated with a private placement through a unique identifier. It is a part of the services provided in the Private Placement domain for corporate customers. This function gives you access to detailed specifications and information related to the fulfillment of a private placement instrument.

  **Limitations**

  GET: Following REST best practices, a more suitable name for this path could be:

'/private-placements/{privateplacementid}/instrument-specifications/{privateplacementinstrumentspecificationid}/retrieve'

In this revised path name:
- The path segments are all in lowercase for consistency.
- The use of plural form ('private-placements' and 'instrument-specifications') aligns with REST conventions.
- The action 'retrieve' indicates a specific operation to be performed on the resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PrivatePlacement/{privateplacementid}/PrivatePlacement/{privateplacementid}/Update</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Update Private Placement Fulfillment

  **Documentation**

  This API path allows you to update the fulfillment details of a specific private placement service for corporate customers. By sending a request using the PUT method to the specified path, you can make changes to the details of the private placement service, such as updating the fulfillment status or details related to the service provided.

  **Limitations**

  PUT: The name of the path should be: "/PrivatePlacements/{privateplacementid}/Update". 

Ensuring consistency and clarity in the naming convention is essential in following REST best practices. This path structure is concise, reflects the resource being updated, and adheres to the standard of using plural nouns for resource names.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PrivatePlacement/{privateplacementid}/PrivatePlacementInstrumentMaintenance/{privateplacementinstrumentmaintenanceid}/Update</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Update Private Placement Instrument Maintenance Fulfillment

  **Documentation**

  This API path allows you to update a specific private placement instrument maintenance fulfillment within a private placement service provided to corporate customers. By using a PUT request, you can modify the details or status of a private placement instrument maintenance fulfillment identified by its unique IDs within the system. This update process helps in managing and maintaining the private placement services for corporate clients effectively.

  **Limitations**

  PUT: The name of the path should be:
'/private-placements/{privateplacementid}/instruments/{privateplacementinstrumentmaintenanceid}/update'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PrivatePlacement/{privateplacementid}/PrivatePlacementInstrumentSpecification/{privateplacementinstrumentspecificationid}/Update</span></summary>

  **Description**

  This Service Domain provides the complete range of functions involved in providing private placement services to corporate customers. Update Private Placement Instrument Specification Fulfillment

  **Documentation**

  This BIAN API path allows you to update the fulfillment details of a specific private placement instrument specification within a private placement service for corporate customers. By sending a PUT request to this endpoint with the relevant IDs, you can modify the fulfillment information associated with that specific instrument specification. This functionality helps in managing and updating the details related to private placement services provided to corporate clients.

  **Limitations**

  PUT: The name of the path should be:

/ private-placements/{privateplacementid}/instrument-specifications/{privateplacementinstrumentspecificationid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
