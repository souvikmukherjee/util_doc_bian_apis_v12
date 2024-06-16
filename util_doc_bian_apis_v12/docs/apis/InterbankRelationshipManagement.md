---
id: InterbankRelationshipManagement
title: InterbankRelationshipManagement
---

<h1 style='color:red;'>InterbankRelationshipManagement</h1>

**BIAN Documentation:** [InterbankRelationshipManagement v12](https://app.swaggerhub.com/apis/BIAN-3/InterbankRelationshipManagement/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /InterbankRelationshipManagement/Create</span></summary>

  **Description**

  Manage the bank's relationship with other banks, covering any specific agreements that may be in place and overseeing operational issues. CrCR Create an initial bank relationship management plan

  **Documentation**

  This API path allows users to create a new resource for managing the bank's relationships with other banks. It involves creating an initial bank relationship management plan which covers specific agreements in place and oversees operational issues. The POST method is used to create this new plan within the Interbank Relationship Management system.

  **Limitations**

  POST: If the path '/InterbankRelationshipManagement/Create' followed all REST best practices, it should be renamed to '/interbank-relationships'. 

In RESTful design, resource names should be in plural form and represent the concept of the resource itself rather than specific actions like 'Create'. The naming should be consistent, descriptive, and follow a hierarchical structure.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InterbankRelationshipManagement/{interbankrelationshipmanagementid}/Update</span></summary>

  **Description**

  Manage the bank's relationship with other banks, covering any specific agreements that may be in place and overseeing operational issues. UpCR Update details of an active bank relationship plan

  **Documentation**

  This API path allows you to update the details of an active bank relationship plan within the Interbank Relationship Management system. It helps manage the bank's relationship with other banks by modifying any specific agreements, overseeing operational issues, and making necessary changes to the existing plan.

  **Limitations**

  PUT: The name of this path should be `/interbank-relationship-management/{interbank_relationship_management_id}`.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InterbankRelationshipManagement/{interbankrelationshipmanagementid}/Request</span></summary>

  **Description**

  Manage the bank's relationship with other banks, covering any specific agreements that may be in place and overseeing operational issues. RqCR Request intervention with a bank relationship plan

  **Documentation**

  This BIAN API path allows users to update an existing resource related to managing a bank's relationship with other banks. Specifically, it enables users to request intervention with a bank relationship plan by providing a unique identifier for the interbank relationship management. This API is designed to facilitate the management of agreements and operational issues between banks, ensuring smooth and effective interactions.

  **Limitations**

  PUT: The name of the path should be '/interbank-relationships/{interbankrelationshipmanagementid}/requests' for following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /InterbankRelationshipManagement/{interbankrelationshipmanagementid}/Retrieve</span></summary>

  **Description**

  Manage the bank's relationship with other banks, covering any specific agreements that may be in place and overseeing operational issues. ReCR Retrieve details about a bank relationship plan and associated activity

  **Documentation**

  This API path allows you to retrieve details about a specific bank relationship plan and associated activities within the context of interbank relationship management. It helps manage the bank's interactions with other banks by providing information about any agreements in place and overseeing operational issues related to those relationships. By making a GET request to this API endpoint with the appropriate interbank relationship management ID, you can access the relevant information about the bank's interactions with other financial institutions.

  **Limitations**

  GET: The name of the path should be:

'/interbank-relationship-management/{interbankRelationshipManagementId}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /InterbankRelationshipManagement/{interbankrelationshipmanagementid}/Contact/Create</span></summary>

  **Description**

  Manage the bank's relationship with other banks, covering any specific agreements that may be in place and overseeing operational issues. CrBQ Create a bank contact

  **Documentation**

  This BIAN API path allows users to create a new bank contact within the Interbank Relationship Management system. Users can input information about the new contact such as name, position, contact details, and any relevant agreements. This feature helps manage a bank's relationships with other banks by keeping track of key contacts and operational issues.

  **Limitations**

  POST: The name of the path should be:

POST /interbankrelationships/{id}/contacts

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InterbankRelationshipManagement/{interbankrelationshipmanagementid}/Contact/{contactid}/Update</span></summary>

  **Description**

  Manage the bank's relationship with other banks, covering any specific agreements that may be in place and overseeing operational issues. UpBQ Update details about the bank contact schedule or a contact record

  **Documentation**

  This BIAN API path allows you to update details about the bank's contact schedule or a specific contact record within the Interbank Relationship Management system. It helps manage the bank's interactions and agreements with other banks, ensuring that operational issues are overseen effectively. By using the PUT method, you can modify existing contact information associated with interbank relationship management, enabling banks to maintain accurate and up-to-date records for smooth communication and collaboration with other financial institutions.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/interbank-relationship-management/{interbankrelationshipmanagementid}/contacts/{contactid}
```

This path follows the convention of using lowercase letters, separating words with hyphens, and making the resource names plural where appropriate.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /InterbankRelationshipManagement/{interbankrelationshipmanagementid}/Contact/{contactid}/Request</span></summary>

  **Description**

  Manage the bank's relationship with other banks, covering any specific agreements that may be in place and overseeing operational issues. RqBQ Request manual intervention with the bank relationship

  **Documentation**

  This BIAN API path allows you to update a specific contact's request for manual intervention related to the bank's relationship with other banks. This could involve managing agreements or addressing operational issues that require manual handling.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:
'/interbank-relationships/{interbankrelationshipmanagementid}/contacts/{contactid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /InterbankRelationshipManagement/{interbankrelationshipmanagementid}/Contact/{contactid}/Retrieve</span></summary>

  **Description**

  Manage the bank's relationship with other banks, covering any specific agreements that may be in place and overseeing operational issues. ReBQ Retrieve details about the contact schedule or specific contacts

  **Documentation**

  This API path allows you to retrieve details about the contact schedule or specific contacts related to the management of the bank's relationships with other banks. It provides information on the agreements in place, oversees operational issues, and helps manage interactions with other financial institutions. By using this API, you can access specific contact details or schedules for maintaining effective interbank relationships.

  **Limitations**

  GET: The name of the path should be:

GET /interbank-relationship-management/{interbankrelationshipmanagementid}/contacts/{contactid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
