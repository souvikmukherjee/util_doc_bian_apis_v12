---
id: CustomerEventHistory
title: CustomerEventHistory
---

<h1 style='color:red;'>CustomerEventHistory</h1>

**BIAN Documentation:** [CustomerEventHistory v12](https://app.swaggerhub.com/apis/BIAN-3/CustomerEventHistory/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CustomerEventHistory/Initiate</span></summary>

  **Description**

  This service domain captures, classifies and stores relationship, servicing and product fulfillment related customer events. In addition to servicing and product transaction details, the log can capture life/relationship events that are revealed during customer exchanges InCR Initiate customer event history tracking for a customer

  **Documentation**

  This API path `/CustomerEventHistory/Initiate` allows you to start tracking the history of customer events. It captures and stores details of events related to customer relationships, services, and product fulfillment. It also logs any significant life or relationship events that may have been shared during interactions with the customer. By making a POST request to this path, you can create a new resource for tracking and recording customer event history.

  **Limitations**

  POST: If the path '/CustomerEventHistory/Initiate' followed all REST best practices, a more appropriate name could be '/customers/{customerId}/events'. This new path reflects the resource (customers) and the action (events) being taken, which is preferable in RESTful design.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerEventHistory/{customereventhistoryid}/Update</span></summary>

  **Description**

  This service domain captures, classifies and stores relationship, servicing and product fulfillment related customer events. In addition to servicing and product transaction details, the log can capture life/relationship events that are revealed during customer exchanges UpCR Update details about the log

  **Documentation**

  This API path allows you to update an existing customer event log in the Customer Event History service domain. You can modify and enhance the details related to relationship, servicing, and product events that are captured for customers. It enables you to keep a record of interactions and transactions with customers, as well as significant life or relationship events that may be disclosed during customer interactions. By using the PUT method, you can make changes or updates to the customer event log stored in the system.

  **Limitations**

  PUT: A RESTful name for the path '/CustomerEventHistory/{customereventhistoryid}/Update' could be '/CustomerEventHistory/{customereventhistoryid}'. 

This is because in RESTful design, the HTTP methods like PUT or PATCH are typically used to update a resource identified by its unique identifier within the path, rather than including the action 'Update' in the path itself. The HTTP method used on this path to update the resource would indicate the action being performed.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerEventHistory/{customereventhistoryid}/Retrieve</span></summary>

  **Description**

  This service domain captures, classifies and stores relationship, servicing and product fulfillment related customer events. In addition to servicing and product transaction details, the log can capture life/relationship events that are revealed during customer exchanges ReCR Retrieve details about the customer event log

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific customer event log identified by the customereventhistoryid. The customer event log captures and categorizes various events related to customer relationships, servicing, and product fulfillment. It can include details of transactions, as well as any significant life or relationship events that may have been shared during interactions with the customer.

  **Limitations**

  GET: Based on REST best practices, the path '/CustomerEventHistory/{customereventhistoryid}/Retrieve' can be simplified by removing the action-specific term "Retrieve" and replacing it with a more generic term that represents the resource being accessed. 

A more RESTful path for retrieving a specific customer event history resource could be:
`/CustomerEventHistory/{customereventhistoryid}`

This path focuses on the resource being accessed (customer event history) and uses the identifier in the URI to specify

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerEventHistory/{customereventhistoryid}/Relationship/{relationshipid}/Update</span></summary>

  **Description**

  This service domain captures, classifies and stores relationship, servicing and product fulfillment related customer events. In addition to servicing and product transaction details, the log can capture life/relationship events that are revealed during customer exchanges UpBQ Update captured relationship management event details

  **Documentation**

  This API path allows you to update an existing customer event related to a specific relationship. It captures and stores details about customer interactions, servicing activities, product transactions, and relationship events. It provides a way to manage and update information related to customer relationships, servicing, and product fulfillment within the customer event history system.

  **Limitations**

  PUT: The name of the path following REST best practices could be: 

'/customer-event-history/{customereventhistoryid}/relationship/{relationshipid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerEventHistory/{customereventhistoryid}/Relationship/{relationshipid}/Capture</span></summary>

  **Description**

  This service domain captures, classifies and stores relationship, servicing and product fulfillment related customer events. In addition to servicing and product transaction details, the log can capture life/relationship events that are revealed during customer exchanges CaBQ Capture relationship management event details

  **Documentation**

  This API path allows you to update existing relationship management event details for a specific customer event history and relationship. It captures, classifies, and stores customer events related to relationship management, servicing, and product fulfillment. Additionally, it can capture life/relationship events that are disclosed during customer interactions.

  **Limitations**

  PUT: The name of the path should be:

'/customer-event-history/{customereventhistoryid}/relationship/{relationshipid}/capture'

In the path names, it is recommended to use lowercase letters and separate words with hyphens, following the REST best practices for naming resources in a URL.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerEventHistory/{customereventhistoryid}/Relationship/{relationshipid}/Retrieve</span></summary>

  **Description**

  This service domain captures, classifies and stores relationship, servicing and product fulfillment related customer events. In addition to servicing and product transaction details, the log can capture life/relationship events that are revealed during customer exchanges ReBQ Retrieve relationship management event details

  **Documentation**

  This BIAN API path allows you to retrieve relationship management event details from the Customer Event History service domain. Specifically, you can retrieve information related to a customer event history ID and a relationship ID. This service domain stores various customer events such as servicing, product fulfillment, and life/relationship events that occur during customer interactions. By using this API, you can access details about relationship-related events logged in the system.

  **Limitations**

  GET: The name of the path should be: 

'/customer-event-history/{customereventhistoryid}/relationships/{relationshipid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerEventHistory/{customereventhistoryid}/Sales/{salesid}/Update</span></summary>

  **Description**

  This service domain captures, classifies and stores relationship, servicing and product fulfillment related customer events. In addition to servicing and product transaction details, the log can capture life/relationship events that are revealed during customer exchanges UpBQ Update captured sales event details

  **Documentation**

  This API path allows you to update sales event details in the customer event history log. It is used to capture and store various customer events related to relationships, servicing, and product fulfillment. By sending a PUT request to this path with the specific customer event history ID and sales ID, you can update the details of a sales event that has been captured in the log. The log can contain information about customer interactions, transactions, as well as any other relevant events that occur during customer exchanges.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/customer-event-history/{customereventhistoryid}/sales/{salesid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerEventHistory/{customereventhistoryid}/Sales/{salesid}/Capture</span></summary>

  **Description**

  This service domain captures, classifies and stores relationship, servicing and product fulfillment related customer events. In addition to servicing and product transaction details, the log can capture life/relationship events that are revealed during customer exchanges CaBQ Capture sales event details

  **Documentation**

  This API path allows for updating existing sales event details associated with a specific customer event history. It is a part of a service domain that records and categorizes various customer events related to relationships, service interactions, and product fulfillment. Additionally, it can store details of life or relationship events that come up during customer interactions. By utilizing this API path with a PUT method, you can update the sales event information within the customer event history log.

  **Limitations**

  PUT: A recommended name for the path would be:

```
/CustomerEventHistory/{customereventhistoryid}/Sales/{salesid}/Capture
```

This path closely follows RESTful best practices by using clear and descriptive resource names that are hierarchical and reflect the relationships between the resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerEventHistory/{customereventhistoryid}/Sales/{salesid}/Retrieve</span></summary>

  **Description**

  This service domain captures, classifies and stores relationship, servicing and product fulfillment related customer events. In addition to servicing and product transaction details, the log can capture life/relationship events that are revealed during customer exchanges ReBQ Retrieve sales event details

  **Documentation**

  This API path allows you to retrieve sales event details related to a specific customer event in the Customer Event History log. It captures and stores information about customer events, such as relationship interactions, servicing activities, and product fulfillment. By accessing this path with the appropriate identifiers, you can retrieve specific details about sales events that occurred during customer interactions. It helps in understanding the customer's journey, relationship, and past transactions.

  **Limitations**

  GET: The name of the path should be:

GET /customer-event-history/{customereventhistoryid}/sales/{salesid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerEventHistory/{customereventhistoryid}/Servicing/{servicingid}/Update</span></summary>

  **Description**

  This service domain captures, classifies and stores relationship, servicing and product fulfillment related customer events. In addition to servicing and product transaction details, the log can capture life/relationship events that are revealed during customer exchanges UpBQ Update captured servicing event details

  **Documentation**

  This API path allows you to update details of a specific servicing event within a customer's event history log. Servicing events could include interactions related to customer service, product fulfillment, or any other activities related to servicing the customer. By making a PUT request to this path with the appropriate IDs, you can update the information associated with a particular servicing event in the customer's event history. The log not only includes transaction details but also records life events or relationship details that may have been shared during customer interactions.

  **Limitations**

  PUT: The name of the path should be:

'/customer-event-history/{customereventhistoryid}/servicing/{servicingid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerEventHistory/{customereventhistoryid}/Servicing/{servicingid}/Capture</span></summary>

  **Description**

  This service domain captures, classifies and stores relationship, servicing and product fulfillment related customer events. In addition to servicing and product transaction details, the log can capture life/relationship events that are revealed during customer exchanges CaBQ Capture servicing event details

  **Documentation**

  This API path allows you to update an existing record of a servicing event related to a customer within the Customer Event History service domain. It captures, classifies, and stores various customer events, including relationship events, servicing details, and product fulfillment information. Additionally, it can record any significant life or relationship events that may be disclosed during customer interactions. By providing the necessary parameters, you can update specific details related to a servicing event within the Customer Event History log.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be as follows:  
`/customer-event-history/{customereventhistoryid}/servicing/{servicingid}/capture`

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerEventHistory/{customereventhistoryid}/Servicing/{servicingid}/Retrieve</span></summary>

  **Description**

  This service domain captures, classifies and stores relationship, servicing and product fulfillment related customer events. In addition to servicing and product transaction details, the log can capture life/relationship events that are revealed during customer exchanges ReBQ Retrieve servicing event details

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific servicing event within the Customer Event History domain. By providing the customer event history ID and the servicing ID as parameters, you can access details related to relationship, servicing, and product fulfillment events that have occurred. This information includes transaction details as well as any life or relationship events that may have been recorded during customer interactions.

  **Limitations**

  GET: The name of the path should be:
'/customer-event-history/{customereventhistoryid}/servicing/{servicingid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerEventHistory/{customereventhistoryid}/ProductProcessing/{productprocessingid}/Update</span></summary>

  **Description**

  This service domain captures, classifies and stores relationship, servicing and product fulfillment related customer events. In addition to servicing and product transaction details, the log can capture life/relationship events that are revealed during customer exchanges UpBQ Update captured product processing event details

  **Documentation**

  This API path allows you to update existing product processing event details within the Customer Event History system. It helps in storing and classifying customer-related events, including details about product processing. The information stored may include service-related transactions, product fulfillment data, and other events that occur during customer interactions. By using this API, you can ensure accurate and up-to-date records of product processing events related to customer activities.

  **Limitations**

  PUT: To follow REST best practices, the name of the path should be:

'/customer-event-history/{customereventhistoryid}/product-processing/{productprocessingid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerEventHistory/{customereventhistoryid}/ProductProcessing/{productprocessingid}/Capture</span></summary>

  **Description**

  This service domain captures, classifies and stores relationship, servicing and product fulfillment related customer events. In addition to servicing and product transaction details, the log can capture life/relationship events that are revealed during customer exchanges CaBQ Capture product processing event details

  **Documentation**

  This API path allows users to update an existing resource related to customer event history. Specifically, it pertains to capturing and storing details of product processing events for a specific customer event history and product processing ID. This information includes classification of relationship, servicing, and product fulfillment events, as well as any life or relationship events that may have been disclosed during customer interactions. The PUT method is used to update the details of these events in the log maintained for customer event history.

  **Limitations**

  PUT: The name of the path could be:

'/customer-events/{customerEventId}/product-processing/{productProcessingId}/capture'

In this naming convention:
- Use lowercase letters for path segments
- Use plural nouns for collections (e.g., customer-events)
- Use singular nouns for resources (e.g., product-processing)
- Use hyphens to separate words in a segment, rather than underscores or camel case
- Avoid unnecessary nesting or hierarchical structures in the path naming

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerEventHistory/{customereventhistoryid}/ProductProcessing/{productprocessingid}/Retrieve</span></summary>

  **Description**

  This service domain captures, classifies and stores relationship, servicing and product fulfillment related customer events. In addition to servicing and product transaction details, the log can capture life/relationship events that are revealed during customer exchanges ReBQ Retrieve product processing event details

  **Documentation**

  This API path allows you to retrieve information about a specific product processing event within the context of a customer's event history. It captures and stores various customer-related events such as servicing, product transactions, and life/relationship events. By providing the customer event history ID and product processing ID, you can access details about how a product was processed or fulfilled for that particular customer.

  **Limitations**

  GET: The name of the path should ideally be:

'/customer-event-history/{customereventhistoryid}/product-processing/{productprocessingid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerEventHistory/{customereventhistoryid}/Fraud/{fraudid}/Update</span></summary>

  **Description**

  This service domain captures, classifies and stores relationship, servicing and product fulfillment related customer events. In addition to servicing and product transaction details, the log can capture life/relationship events that are revealed during customer exchanges UpBQ Update captured fraud event details

  **Documentation**

  This API path is used to update the details of a fraud event related to a specific customer event in the Customer Event History database. It allows users to modify and store information about fraudulent activities that may have occurred during customer interactions. The purpose of this API is to keep track of any fraud incidents that are associated with the customer events recorded in the system.

  **Limitations**

  PUT: The name of the path following REST best practices would be:

'/customer-event-history/{customereventhistoryid}/fraud/{fraudid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerEventHistory/{customereventhistoryid}/Fraud/{fraudid}/Capture</span></summary>

  **Description**

  This service domain captures, classifies and stores relationship, servicing and product fulfillment related customer events. In addition to servicing and product transaction details, the log can capture life/relationship events that are revealed during customer exchanges CaBQ Capture fraud event details

  **Documentation**

  This API path allows you to update existing resources related to capturing fraud event details within the Customer Event History service domain. It helps classify and store customer events, including relationship, servicing, and product fulfillment details. Additionally, the API can record any life/relationship events that are shared during interactions with customers. The PUT method is used to update information related to fraud events within the Customer Event History.

  **Limitations**

  PUT: Based on REST best practices, the name of the path '/CustomerEventHistory/{customereventhistoryid}/Fraud/{fraudid}/Capture' could be simplified like this:

'/customer-event-history/{eventId}/fraud/{fraudId}/capture'

It is recommended to use lowercase letters, hyphens for word separation, no camel case, and keep the URI descriptive and concise.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerEventHistory/{customereventhistoryid}/Fraud/{fraudid}/Retrieve</span></summary>

  **Description**

  This service domain captures, classifies and stores relationship, servicing and product fulfillment related customer events. In addition to servicing and product transaction details, the log can capture life/relationship events that are revealed during customer exchanges ReBQ Retrieve fraud event details

  **Documentation**

  This BIAN API path is used to retrieve information about fraud events related to a specific customer event in the Customer Event History service domain. It allows users to access details about fraud incidents that have been captured and classified within the system. This can include information about fraudulent activities, transactions, or any other events related to servicing and product fulfillment for a customer.

  **Limitations**

  GET: Based on REST best practices, the appropriate name for this path would be:

'/customer-event-history/{customer_event_history_id}/fraud/{fraud_id}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerEventHistory/{customereventhistoryid}/Life/{lifeid}/Update</span></summary>

  **Description**

  This service domain captures, classifies and stores relationship, servicing and product fulfillment related customer events. In addition to servicing and product transaction details, the log can capture life/relationship events that are revealed during customer exchanges UpBQ Update captured customer life event details

  **Documentation**

  This API path allows you to update details related to a specific life event of a customer in the Customer Event History database. This could include important life events or relationship milestones that were shared or discovered during interactions with the customer. By providing the appropriate identifier for the customer event and the specific life event, you can make updates to the information stored in the database regarding that particular life event.

  **Limitations**

  PUT: Based on REST best practices, a possible name for the path could be:

'/customer-event-histories/{customereventhistoryid}/lives/{lifeid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerEventHistory/{customereventhistoryid}/Life/{lifeid}/Capture</span></summary>

  **Description**

  This service domain captures, classifies and stores relationship, servicing and product fulfillment related customer events. In addition to servicing and product transaction details, the log can capture life/relationship events that are revealed during customer exchanges CaBQ Capture customer life event details

  **Documentation**

  This API path allows you to update existing information about a customer's life event in the Customer Event History system. Specifically, it captures and categorizes various customer events related to relationships, services, and product fulfillment. It is designed to store details about customer transactions and interactions, including any significant events that may impact the customer's life or relationship status. By using this path with a PUT method, you can add or modify information about a specific life event associated with a customer.

  **Limitations**

  PUT: A commonly used pattern for naming RESTful paths is to use nouns that represent resources rather than actions. Following this convention, the name of the path could be:

`/customer-event-history/{customereventhistoryid}/life/{lifeid}/capture`

Here, the path components represent resources (customer event history, life) with identifiers (customereventhistoryid, lifeid) and the action "capture" is described in a way that aligns with REST principles. Remember to use lowercase letters

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerEventHistory/{customereventhistoryid}/Life/{lifeid}/Retrieve</span></summary>

  **Description**

  This service domain captures, classifies and stores relationship, servicing and product fulfillment related customer events. In addition to servicing and product transaction details, the log can capture life/relationship events that are revealed during customer exchanges ReBQ Retrieve customer life event details

  **Documentation**

  This API path allows you to retrieve information about specific customer life event details from the Customer Event History service. It captures and stores various customer events related to relationships, servicing, and product fulfillment. In addition to transaction details, this API can provide insights into life and relationship events that are disclosed during interactions with customers. By using this path with the appropriate identifiers, you can access specific information about a customer's life events stored in the system.

  **Limitations**

  GET: Based on REST best practices, the following naming convention for the given path can be suggested:
 
'/customer-event-history/{customereventhistoryid}/life/{lifeid}'

This naming convention emphasizes the use of lowercase letters, hyphens for multi-word resources, and uses meaningful resource names.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
