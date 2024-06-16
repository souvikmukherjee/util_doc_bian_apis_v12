---
id: CustomerRelationshipManagement
title: CustomerRelationshipManagement
---

<h1 style='color:red;'>CustomerRelationshipManagement</h1>

**BIAN Documentation:** [CustomerRelationshipManagement v12](https://app.swaggerhub.com/apis/BIAN-3/CustomerRelationshipManagement/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CustomerRelationshipManagement/Create</span></summary>

  **Description**

  This service domain develops and executes a customer plan to maintain and build a customer relationship. Activities include ongoing customer contact, tracking internal and external events and activity of interest and relevance, product and service matching and sales, processing ad-hoc queries, trouble shooting and issue resolution including the initial phases of troubled account recovery CrCR Create an initial relationship management plan

  **Documentation**

  This API path `/CustomerRelationshipManagement/Create` allows users to create a new resource related to Customer Relationship Management. Specifically, it is used to develop and execute a plan to maintain and enhance relationships with customers. This involves tasks such as continuous customer communication, tracking relevant events, matching products and services to customer needs, handling inquiries, resolving issues, and managing troubled accounts. By utilizing this API, users can initiate the creation of an initial relationship management plan to effectively engage with customers and provide necessary support.

  **Limitations**

  POST: If the path '/CustomerRelationshipManagement/Create' followed REST best practices, it should ideally be named as POST '/customers' because it follows the convention of using nouns (customers) to represent resources and using the HTTP method POST to create a new resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerRelationshipManagement/{customerrelationshipmanagementid}/Update</span></summary>

  **Description**

  This service domain develops and executes a customer plan to maintain and build a customer relationship. Activities include ongoing customer contact, tracking internal and external events and activity of interest and relevance, product and service matching and sales, processing ad-hoc queries, trouble shooting and issue resolution including the initial phases of troubled account recovery UpCR Update details of an active relationship plan

  **Documentation**

  This API path allows users to update details of an active customer relationship plan within the Customer Relationship Management service domain. It involves activities such as maintaining customer contact, tracking events, matching products and services, and resolving issues. Users can use this API to make changes or updates to an existing customer relationship plan.

  **Limitations**

  PUT: The name of the path should be '/customers/{customerId}/relationships/{relationshipId}'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerRelationshipManagement/{customerrelationshipmanagementid}/Control</span></summary>

  **Description**

  This service domain develops and executes a customer plan to maintain and build a customer relationship. Activities include ongoing customer contact, tracking internal and external events and activity of interest and relevance, product and service matching and sales, processing ad-hoc queries, trouble shooting and issue resolution including the initial phases of troubled account recovery CoCR Control the processing of a relationship plan (e.g. suspend)

  **Documentation**

  This API path allows you to control a customer relationship plan by updating an existing resource related to customer relationship management. You can use this endpoint to modify and execute a plan that focuses on maintaining and enhancing customer relationships. This includes activities such as contacting customers, tracking events, matching products and services, resolving issues, and taking steps to recover troubled accounts. The PUT method is used to update specific details or suspend the processing of a relationship plan.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

"/customer-relationship-management/{customerrelationshipmanagementid}/control"

Where:
- "customer-relationship-management" is in lowercase with words separated by hyphens for better readability.
- {customerrelationshipmanagementid} is a variable representing the specific id of the customer relationship management resource.
- "control" is in lowercase to specify the specific action or resource related to control within the customer relationship management context.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerRelationshipManagement/{customerrelationshipmanagementid}/Exchange</span></summary>

  **Description**

  This service domain develops and executes a customer plan to maintain and build a customer relationship. Activities include ongoing customer contact, tracking internal and external events and activity of interest and relevance, product and service matching and sales, processing ad-hoc queries, trouble shooting and issue resolution including the initial phases of troubled account recovery EcCR Accept, verify, reject aspects of the plan

  **Documentation**

  This API path is used to update an existing customer relationship management plan identified by a specific ID. The purpose of this API is to manage and enhance customer relationships by executing various customer-oriented activities such as ongoing communication, tracking relevant events, matching products and services, resolving issues, and recovering troubled accounts. It allows users to accept, verify, or reject certain aspects of the customer plan in order to maintain and strengthen the relationship with the customers.

  **Limitations**

  PUT: The name of the path following REST best practices should be:

'/customer-relationship-management/{customerrelationshipmanagementid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerRelationshipManagement/{customerrelationshipmanagementid}/Request</span></summary>

  **Description**

  This service domain develops and executes a customer plan to maintain and build a customer relationship. Activities include ongoing customer contact, tracking internal and external events and activity of interest and relevance, product and service matching and sales, processing ad-hoc queries, trouble shooting and issue resolution including the initial phases of troubled account recovery RqCR Request intervention with a relationship plan (e.g. arrange a customer meeting)

  **Documentation**

  This API path allows you to update an existing customer relationship management request by specifying the unique ID associated with that request. It involves developing and implementing a plan to maintain and enhance relationships with customers. This can include activities such as contacting customers regularly, tracking important events, matching products and services to customer needs, handling inquiries and resolving issues. Specifically, this API enables the intervention of a relationship plan, like setting up a customer meeting, to address any concerns or issues related to the customer relationship.

  **Limitations**

  PUT: A good name for the path '/CustomerRelationshipManagement/{customerrelationshipmanagementid}/Request' following REST best practices could be:

'/customer-relationship-managements/{customerrelationshipmanagementid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerRelationshipManagement/{customerrelationshipmanagementid}/Grant</span></summary>

  **Description**

  This service domain develops and executes a customer plan to maintain and build a customer relationship. Activities include ongoing customer contact, tracking internal and external events and activity of interest and relevance, product and service matching and sales, processing ad-hoc queries, trouble shooting and issue resolution including the initial phases of troubled account recovery GrCR Grant authorization for actions that impact the plan (e.g. qualify eligibility for a campaign)

  **Documentation**

  This API path allows you to update an existing customer relationship management plan by granting authorization for specific actions that impact the plan. For example, you can qualify eligibility for a marketing campaign or other activities related to maintaining and improving customer relationships. This can include tasks such as ongoing customer communication, tracking events and activities, matching products and services, handling customer inquiries, and resolving issues related to customer accounts.

  **Limitations**

  PUT: The name of the path should be:

"/customer-relationship-management/{customerrelationshipmanagementid}/grant" 

following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerRelationshipManagement/{customerrelationshipmanagementid}/Retrieve</span></summary>

  **Description**

  This service domain develops and executes a customer plan to maintain and build a customer relationship. Activities include ongoing customer contact, tracking internal and external events and activity of interest and relevance, product and service matching and sales, processing ad-hoc queries, trouble shooting and issue resolution including the initial phases of troubled account recovery ReCR Retrieve details about a relationship plan

  **Documentation**

  This API path allows you to retrieve details about a customer relationship plan identified by a specific Customer Relationship Management ID. It provides information on activities such as maintaining and building customer relationships, ongoing customer contact, tracking events, product matching, troubleshooting, and issue resolution. It helps in understanding and managing customer interactions and improving customer satisfaction.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/customer-relationship-management/{customerrelationshipmanagementid}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerRelationshipManagement/{customerrelationshipmanagementid}/Development/Create</span></summary>

  **Description**

  This service domain develops and executes a customer plan to maintain and build a customer relationship. Activities include ongoing customer contact, tracking internal and external events and activity of interest and relevance, product and service matching and sales, processing ad-hoc queries, trouble shooting and issue resolution including the initial phases of troubled account recovery CrBQ Create customer development capability  (initialize the capability)

  **Documentation**

  This API path is used to create a new customer development capability within the Customer Relationship Management service domain. It allows for the initialization of a customer plan to maintain and enhance customer relationships. The activities involved include regular customer communication, tracking relevant events, matching products and services, addressing customer inquiries, troubleshooting issues, and beginning the process of recovering troubled accounts.

  **Limitations**

  POST: The name of the path should be:

'/customer-relationship-managements/{customer-relationship-management-id}/developments/create'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerRelationshipManagement/{customerrelationshipmanagementid}/Development/{developmentid}/Update</span></summary>

  **Description**

  This service domain develops and executes a customer plan to maintain and build a customer relationship. Activities include ongoing customer contact, tracking internal and external events and activity of interest and relevance, product and service matching and sales, processing ad-hoc queries, trouble shooting and issue resolution including the initial phases of troubled account recovery UpBQ Update details about a relationship development task

  **Documentation**

  This API path allows you to update details about a specific task related to the development and maintenance of a customer relationship. You can modify information such as ongoing customer contact, tracking events, matching products and services, addressing customer inquiries, troubleshooting, and resolving issues. This tool is designed to help businesses effectively manage and enhance their relationships with customers by keeping track of relevant activities and providing necessary support.

  **Limitations**

  PUT: The name of the path should be:

'/customer-relationship-management/{customerrelationshipmanagementid}/development/{developmentid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerRelationshipManagement/{customerrelationshipmanagementid}/Development/{developmentid}/Exchange</span></summary>

  **Description**

  This service domain develops and executes a customer plan to maintain and build a customer relationship. Activities include ongoing customer contact, tracking internal and external events and activity of interest and relevance, product and service matching and sales, processing ad-hoc queries, trouble shooting and issue resolution including the initial phases of troubled account recovery EcBQ Accept, reject, verify a development activity

  **Documentation**

  This API path allows you to update a specific development activity that is part of the Customer Relationship Management service. You need to provide the Customer Relationship Management ID and the Development ID to specify the exact activity you want to update. This could involve tasks such as ongoing customer communication, tracking relevant events, matching products and services, handling customer queries, and resolving issues. The update could involve accepting, rejecting, or verifying a development activity within this customer relationship management plan.

  **Limitations**

  PUT: A suitable name for the given path following REST best practices could be:

'/customer-relationship-management/{customerrelationshipmanagementid}/development/{developmentid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerRelationshipManagement/{customerrelationshipmanagementid}/Development/{developmentid}/Request</span></summary>

  **Description**

  This service domain develops and executes a customer plan to maintain and build a customer relationship. Activities include ongoing customer contact, tracking internal and external events and activity of interest and relevance, product and service matching and sales, processing ad-hoc queries, trouble shooting and issue resolution including the initial phases of troubled account recovery RqBQ Request a relationship development task

  **Documentation**

  This API path allows you to update an existing relationship development task for a specific customer within the Customer Relationship Management service domain. By making a PUT request to this endpoint with the appropriate IDs, you can modify or make changes to the task associated with the customer relationship management process. This task could involve activities such as ongoing customer contact, tracking relevant events, product matching, sales, resolving issues, or other activities aimed at maintaining and enhancing the relationship with the customer.

  **Limitations**

  PUT: The name of the path should be:

'/customer-relationship-management/{customer-relationship-management-id}/development/{development-id}/request'

Following REST best practices, it is recommended to use lowercase letters and hyphens to separate words in the path. Additionally, resource names should be plural nouns to indicate a collection of resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerRelationshipManagement/{customerrelationshipmanagementid}/Development/{developmentid}/Retrieve</span></summary>

  **Description**

  This service domain develops and executes a customer plan to maintain and build a customer relationship. Activities include ongoing customer contact, tracking internal and external events and activity of interest and relevance, product and service matching and sales, processing ad-hoc queries, trouble shooting and issue resolution including the initial phases of troubled account recovery ReBQ Retrieve details about relationship development activity

  **Documentation**

  This API path allows you to retrieve details about a specific relationship development activity within the Customer Relationship Management service domain. This activity involves developing and carrying out a plan to maintain and enhance the relationship with a customer. It includes various tasks such as staying in touch with the customer, tracking relevant events, matching products and services, handling inquiries, troubleshooting issues, and starting the process of recovering troubled accounts. By using this API, you can access information related to a particular development activity for a specific customer relationship.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

'/customers/{customerid}/developments/{developmentid}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerRelationshipManagement/{customerrelationshipmanagementid}/Incident/Create</span></summary>

  **Description**

  This service domain develops and executes a customer plan to maintain and build a customer relationship. Activities include ongoing customer contact, tracking internal and external events and activity of interest and relevance, product and service matching and sales, processing ad-hoc queries, trouble shooting and issue resolution including the initial phases of troubled account recovery CrBQ Create customer incident reporting capability (initialize the capability)

  **Documentation**

  This API path allows you to create a new customer incident report within the Customer Relationship Management system. It is used to report and track any issues, problems, or queries related to customers. This helps in managing and maintaining customer relationships by promptly addressing and resolving any concerns that may arise.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

'/CustomerRelationshipManagements/{customerrelationshipmanagementid}/Incidents' 

This path follows the convention of using plural nouns for resource names and maintains a clear hierarchy. The use of plural nouns for the 'CustomerRelationshipManagements' and 'Incidents' resources helps to indicate that a collection of resources is being accessed.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerRelationshipManagement/{customerrelationshipmanagementid}/Incident/{incidentid}/Update</span></summary>

  **Description**

  This service domain develops and executes a customer plan to maintain and build a customer relationship. Activities include ongoing customer contact, tracking internal and external events and activity of interest and relevance, product and service matching and sales, processing ad-hoc queries, trouble shooting and issue resolution including the initial phases of troubled account recovery UpBQ Update details about a customer incident

  **Documentation**

  This API path allows you to update details about a specific customer incident within the context of Customer Relationship Management. You can use this path to modify information related to a particular incident that occurred while maintaining and building customer relationships. This can include updating records, notes, or any relevant details about the incident to ensure accurate tracking and resolution.

  **Limitations**

  PUT: Based on REST best practices, the following could be a good name for the path:
'/customers/{customerId}/incidents/{incidentId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerRelationshipManagement/{customerrelationshipmanagementid}/Incident/{incidentid}/Control</span></summary>

  **Description**

  This service domain develops and executes a customer plan to maintain and build a customer relationship. Activities include ongoing customer contact, tracking internal and external events and activity of interest and relevance, product and service matching and sales, processing ad-hoc queries, trouble shooting and issue resolution including the initial phases of troubled account recovery CoBQ Control the processing of a customer incident (e.g. raise priority)

  **Documentation**

  This API path is used to update the processing of a customer incident within the Customer Relationship Management system. By providing the customer relationship management ID and incident ID, this endpoint allows users to control the handling of an existing customer incident, such as raising its priority level. It is part of a service domain focused on maintaining and enhancing customer relationships through activities like customer contact, event tracking, issue resolution, and troubleshooting.

  **Limitations**

  PUT: The name of the REST resource should be based on the overarching concept it represents. In this case, it seems to be a specific control related to a customer relationship management incident. Therefore, a suitable name for the path could be:

`/CustomerRelationships/{customerrelationshipid}/Incidents/{incidentid}/Controls`

This path aligns with RESTful best practices by using plural nouns to represent collections and hierarchical structuring to convey the relationship between the resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerRelationshipManagement/{customerrelationshipmanagementid}/Incident/{incidentid}/Exchange</span></summary>

  **Description**

  This service domain develops and executes a customer plan to maintain and build a customer relationship. Activities include ongoing customer contact, tracking internal and external events and activity of interest and relevance, product and service matching and sales, processing ad-hoc queries, trouble shooting and issue resolution including the initial phases of troubled account recovery EcBQ Accept, reject, confirm details about a customer incident

  **Documentation**

  This API path allows you to update details related to a customer incident within the Customer Relationship Management service domain. It is used to manage ongoing customer interactions, track events and activities of interest, match products and services to customer needs, process queries, troubleshoot issues, and work on recovering troubled accounts. By using this API, you can accept, reject, or confirm specific information about a customer incident to ensure effective customer relationship management.

  **Limitations**

  PUT: The name of the path should be:
'/customers/{customerId}/incidents/{incidentId}/exchanges'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerRelationshipManagement/{customerrelationshipmanagementid}/Incident/{incidentid}/Capture</span></summary>

  **Description**

  This service domain develops and executes a customer plan to maintain and build a customer relationship. Activities include ongoing customer contact, tracking internal and external events and activity of interest and relevance, product and service matching and sales, processing ad-hoc queries, trouble shooting and issue resolution including the initial phases of troubled account recovery CaBQ Capture details of a new customer incident

  **Documentation**

  This API path allows you to update details of a new customer incident within the Customer Relationship Management system. It is used to capture information related to the incident, such as customer interactions, events, sales activities, issue resolution, and account recovery efforts. This helps in maintaining and improving customer relationships by tracking and addressing customer concerns effectively.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be structured in a resource-oriented way. Here is a suggestion:

'/customer-relationship-management/{customerrelationshipmanagementid}/incidents/{incidentid}/capture'

In this suggestion:
- 'customer-relationship-management' represents the main resource.
- '{customerrelationshipmanagementid}' is the unique identifier of a specific customer relationship management entity.
- 'incidents' represent a collection of incidents related to the customer relationship management entity.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerRelationshipManagement/{customerrelationshipmanagementid}/Incident/{incidentid}/Retrieve</span></summary>

  **Description**

  This service domain develops and executes a customer plan to maintain and build a customer relationship. Activities include ongoing customer contact, tracking internal and external events and activity of interest and relevance, product and service matching and sales, processing ad-hoc queries, trouble shooting and issue resolution including the initial phases of troubled account recovery ReBQ Retrieve details about a customer incident

  **Documentation**

  This API path allows you to retrieve details about a specific customer incident within the Customer Relationship Management domain. Through this service, you can access information related to the incident, such as customer interactions, troubleshooting activities, and resolutions. The purpose is to help you track and manage customer issues effectively to maintain and improve customer relationships.

  **Limitations**

  GET: A good name for the path following REST best practices would be:

GET /customer-relationship-management/{customer_relationship_management_id}/incidents/{incident_id}

In this path, the resources are represented in a more user-friendly format using hyphens, and the IDs are in lowercase to improve readability and maintain consistency.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustomerRelationshipManagement/{customerrelationshipmanagementid}/Contact/Create</span></summary>

  **Description**

  This service domain develops and executes a customer plan to maintain and build a customer relationship. Activities include ongoing customer contact, tracking internal and external events and activity of interest and relevance, product and service matching and sales, processing ad-hoc queries, trouble shooting and issue resolution including the initial phases of troubled account recovery CrBQ Create contact handling capability (initialize and track)

  **Documentation**

  This API path allows users to create a new contact handling capability for a specific customer relationship management ID. It is used in managing and enhancing customer relationships by enabling activities like ongoing customer contact, tracking relevant events, matching products and services, and resolving any issues or queries that may arise. This API helps in initializing and tracking the contact handling process for a customer relationship, which is essential for maintaining and building strong customer relationships.

  **Limitations**

  POST: The name of the path following REST best practices would be:

/customer-relationship-management/{customer_relationship_management_id}/contacts

RESTful paths should be in lowercase and use hyphens to separate words for better readability and consistency. Also, it is recommended to pluralize resource names in the path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerRelationshipManagement/{customerrelationshipmanagementid}/Contact/{contactid}/Update</span></summary>

  **Description**

  This service domain develops and executes a customer plan to maintain and build a customer relationship. Activities include ongoing customer contact, tracking internal and external events and activity of interest and relevance, product and service matching and sales, processing ad-hoc queries, trouble shooting and issue resolution including the initial phases of troubled account recovery UpCR Update details of a customer contact

  **Documentation**

  This API path allows you to update the details of a customer contact within the Customer Relationship Management service domain. It helps in maintaining and building relationships with customers by enabling activities such as tracking events, matching products and services, resolving issues, and recovering troubled accounts. Using this API, you can update specific information related to a customer contact, such as contact details, preferences, or other relevant data.

  **Limitations**

  PUT: The name of the path should be:

`/customer-relationship-management/{customerrelationshipmanagementid}/contacts/{contactid}`

In RESTful design, it's best practice to use lowercase letters for path segments and use plural nouns for collections (e.g., 'contacts' instead of 'contact'). Also, the 'update' action is typically represented by an HTTP method like PUT or PATCH on the resource identified by the URI above, instead of including it in the URI itself.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustomerRelationshipManagement/{customerrelationshipmanagementid}/Contact/{contactid}/Request</span></summary>

  **Description**

  This service domain develops and executes a customer plan to maintain and build a customer relationship. Activities include ongoing customer contact, tracking internal and external events and activity of interest and relevance, product and service matching and sales, processing ad-hoc queries, trouble shooting and issue resolution including the initial phases of troubled account recovery RqBQ Request a customer contact

  **Documentation**

  This BIAN API path allows you to update a request for customer contact within the Customer Relationship Management service domain. It is used to manage activities related to maintaining and building customer relationships, such as ongoing contact with customers, tracking events of interest, matching products and services, handling inquiries, and resolving issues. By sending a PUT request to this path with the specified customer relationship ID and contact ID, you can request or update customer contact information as part of the CRM process.

  **Limitations**

  PUT: The name of the path should be:
'/customer-relationship-management/{customerrelationshipmanagementid}/contacts/{contactid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustomerRelationshipManagement/{customerrelationshipmanagementid}/Contact/{contactid}/Retrieve</span></summary>

  **Description**

  This service domain develops and executes a customer plan to maintain and build a customer relationship. Activities include ongoing customer contact, tracking internal and external events and activity of interest and relevance, product and service matching and sales, processing ad-hoc queries, trouble shooting and issue resolution including the initial phases of troubled account recovery ReBQ Retrieve details about customer contacts

  **Documentation**

  This API path allows you to retrieve details about customer contacts within the Customer Relationship Management system. By providing the specific customer relationship management ID and contact ID, you can access information related to customer interactions, events, product matching, sales activities, issue resolution, and more. This helps in maintaining and improving customer relationships by tracking and managing various aspects of customer engagement.

  **Limitations**

  GET: The name of the path following REST best practices could be:

`/customer-relationship-management/{customer_relationship_management_id}/contacts/{contact_id}`

In RESTful naming conventions:
- Use lowercase letters
- Use hyphens to separate words in URL paths
- Use plurals for collections (e.g., `contacts` instead of `contact`)
- Avoid using verbs in the URL path, as the HTTP method (GET in this case) indicates the action to be performed

Inserting a

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
