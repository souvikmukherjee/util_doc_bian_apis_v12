---
id: PartyReferenceDataDirectory
title: PartyReferenceDataDirectory
---

<h1 style='color:red;'>PartyReferenceDataDirectory</h1>

**BIAN Documentation:** [PartyReferenceDataDirectory v12](https://app.swaggerhub.com/apis/BIAN-3/PartyReferenceDataDirectory/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /PartyReferenceDataDirectory/Register</span></summary>

  **Description**

  This service domain maintains a range of party reference information covering aspects including general reference details, contacts and associations and demographic information InCR Register a customer entity in the catalog

  **Documentation**

  This BIAN API path allows you to create and register a new customer entity in the Party Reference Data Directory. This API captures various details about the customer such as general information, contacts, associations, and demographic data. By using this API, you can add a new customer entry to the directory, making it easier to manage and access customer-related information within the system.

  **Limitations**

  POST: If the path '/PartyReferenceDataDirectory/Register' were following REST best practices, it would ideally be named in a more resource-oriented manner. A more appropriate naming convention for this path could be '/party-reference-data/register'. This naming scheme uses lowercase letters and dash separators, which is a common convention for RESTful API paths.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyReferenceDataDirectory/{partyreferencedatadirectoryid}/Update</span></summary>

  **Description**

  This service domain maintains a range of party reference information covering aspects including general reference details, contacts and associations and demographic information UpCR Update details about the customer's directory entry

  **Documentation**

  This BIAN API path allows you to update information about a specific party reference entry in the directory. You can modify details such as general references, contacts, associations, and demographic information related to a particular party. This endpoint enables you to update the information about a customer's directory entry within the system.

  **Limitations**

  PUT: The path "/PartyReferenceDataDirectories/{partyReferenceDataDirectoryId}" would be more aligned with REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyReferenceDataDirectory/{partyreferencedatadirectoryid}/Control</span></summary>

  **Description**

  This service domain maintains a range of party reference information covering aspects including general reference details, contacts and associations and demographic information CoCR Control the handling of a customer entry (e.g. terminate)

  **Documentation**

  This BIAN API path allows you to update an existing party reference data directory by controlling the handling of a customer entry. For example, you can perform actions like terminating a customer entry using this API. The service domain manages various details about parties, such as their general information, contacts, associations, and demographic data.

  **Limitations**

  PUT: Based on REST best practices, a more suitable name for the path '/PartyReferenceDataDirectory/{partyreferencedatadirectoryid}/Control' could be:

'/PartyReferenceDataDirectory/{partyreferencedatadirectoryid}/Settings'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyReferenceDataDirectory/{partyreferencedatadirectoryid}/Request</span></summary>

  **Description**

  This service domain maintains a range of party reference information covering aspects including general reference details, contacts and associations and demographic information RqCR Request manual intervention with an entry (e.g. refresh content)

  **Documentation**

  This BIAN API path allows you to update existing party reference data directory information by requesting manual intervention with a specific entry. For example, you can request to refresh or update the content of a particular entry in the directory.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:
'/party-reference-data-directory/{partyreferencedatadirectoryid}/request'

</details>

<details open>
  <summary><span style='color:red;'>GET: /PartyReferenceDataDirectory/{partyreferencedatadirectoryid}/Retrieve</span></summary>

  **Description**

  This service domain maintains a range of party reference information covering aspects including general reference details, contacts and associations and demographic information ReCR Retrieve details about a customer directory entry

  **Documentation**

  This BIAN API path allows you to retrieve specific details about a customer directory entry within the Party Reference Data Directory service domain. It provides information about various aspects of the customer, such as general reference details, contacts, associations, and demographic information. By using this API, you can access and view the details related to a specific customer entry stored in the directory.

  **Limitations**

  GET: The name of the path should be '/party-reference-data-directory/{partyreferencedatadirectoryid}'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyReferenceDataDirectory/{partyreferencedatadirectoryid}/Exchange</span></summary>

  **Description**

  This service domain maintains a range of party reference information covering aspects including general reference details, contacts and associations and demographic information EcCR Accept, verify, reject a directory entry

  **Documentation**

  This API path allows you to update an existing entry in the Party Reference Data Directory. The directory stores various information about parties, such as their contact details, associations, and demographic information. By using this API, you can make changes to the information in the directory, such as accepting, verifying, or rejecting a directory entry.

  **Limitations**

  PUT: The name of the path could be:
'/party-reference-data-directories/{party-reference-data-directory-id}/exchanges'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyReferenceDataDirectory/{partyreferencedatadirectoryid}/Execute</span></summary>

  **Description**

  This service domain maintains a range of party reference information covering aspects including general reference details, contacts and associations and demographic information ExCR Execute an automated action against an entry

  **Documentation**

  This BIAN API path allows you to update an existing entry in the Party Reference Data Directory and execute an automated action against that entry. It means that you can make changes to the reference details, contacts, associations, or demographic information related to a party in the directory and trigger an automated action for that specific entry.

  **Limitations**

  PUT: The name of the path should be:

```
/PartyReferenceDataDirectories/{partyreferencedatadirectoryid}/actions/execute
```

Following REST best practices, the path should use lowercase letters, use plural nouns for resource names, include the specific resource identifier (partyreferencedatadirectoryid), and use the "actions" subpath to indicate an action to be performed.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyReferenceDataDirectory/{partyreferencedatadirectoryid}/Demographics/{demographicsid}/Exchange</span></summary>

  **Description**

  This service domain maintains a range of party reference information covering aspects including general reference details, contacts and associations and demographic information EcBQ Accept, verify, reject etc. details of a customer directory entry

  **Documentation**

  This API path allows you to update demographic information for a specific party reference data entry within the Party Reference Data Directory. You can accept, verify, reject, or make changes to details related to a customer's demographics in this directory.

  **Limitations**

  PUT: Following REST best practices, the name of the path could be:

/party-reference-data-directory/{partyReferenceDataDirectoryId}/demographics/{demographicsId}/exchange

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyReferenceDataDirectory/{partyreferencedatadirectoryid}/Reference/{referenceid}/Update</span></summary>

  **Description**

  This service domain maintains a range of party reference information covering aspects including general reference details, contacts and associations and demographic information UpBQ Update details about a reference entry for the customer

  **Documentation**

  This API path allows you to update specific details about a reference entry related to a party in the Party Reference Data Directory. The path specifies the ID of the party reference data directory and the ID of the reference entry that you want to update. By using a PUT request, you can modify existing information such as general details, contacts, associations, and demographic data associated with the reference entry for a customer.

  **Limitations**

  PUT: The name of the path can be `/party-reference-data-directories/{partyreferencedatadirectoryid}/references/{referenceid}` based on REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PartyReferenceDataDirectory/{partyreferencedatadirectoryid}/Reference/{referenceid}/Retrieve</span></summary>

  **Description**

  This service domain maintains a range of party reference information covering aspects including general reference details, contacts and associations and demographic information ReBQ Retrieve details about reference entries in the directory

  **Documentation**

  This BIAN API path allows you to retrieve information about reference entries in the Party Reference Data Directory. You can specify a specific party reference data directory ID and reference ID to access details such as general reference information, contacts, associations, and demographic data related to a party. The API helps in fetching comprehensive information about specific references within the directory.

  **Limitations**

  GET: Based on RESTful best practices, a more appropriate name for the path would be:

'/party-reference-data-directory/{partyreferencedatadirectoryid}/reference/{referenceid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyReferenceDataDirectory/{partyreferencedatadirectoryid}/Associations/{associationsid}/Update</span></summary>

  **Description**

  This service domain maintains a range of party reference information covering aspects including general reference details, contacts and associations and demographic information UpBQ Update details about an association entry for the customer

  **Documentation**

  This API path allows you to update the details of an association entry for a customer in the Party Reference Data Directory. You can modify information related to the association, such as contact details, general reference details, and demographic information. By making a PUT request to this path with the appropriate parameters, you can update and save changes to the association entry for the specified customer.

  **Limitations**

  PUT: The name of the path should be:

```
/PartyReferenceDataDirectories/{partyReferenceDataDirectoryId}/Associations/{associationsId}
```

Assuming that "Associations" is a sub-resource of "PartyReferenceDataDirectories", "partyReferenceDataDirectoryId" is the identifier for a specific Party Reference Data Directory, and "associationsId" is the identifier for a specific association within that directory.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PartyReferenceDataDirectory/{partyreferencedatadirectoryid}/Associations/{associationsid}/Retrieve</span></summary>

  **Description**

  This service domain maintains a range of party reference information covering aspects including general reference details, contacts and associations and demographic information ReBQ Retrieve details about association entries in the directory record

  **Documentation**

  This API path allows you to retrieve information about association entries in a party reference data directory record. You can specify the directory record ID and the association ID to retrieve details about the specific association entry you are interested in. The information may include general reference details, contacts, associations, and demographic information related to the party referenced in the directory.

  **Limitations**

  GET: The name of the path should be:

GET /party-reference-data-directory/{partyreferencedatadirectoryid}/associations/{associationsid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyReferenceDataDirectory/{partyreferencedatadirectoryid}/Demographics/{demographicsid}/Update</span></summary>

  **Description**

  This service domain maintains a range of party reference information covering aspects including general reference details, contacts and associations and demographic information UpBQ Update details about a customer's demographic entry

  **Documentation**

  This API path allows you to update the demographic information of a specific customer within a party reference data directory. By sending a PUT request to this endpoint with the necessary parameters, you can modify and update details such as age, gender, occupation, or any other demographic data related to a customer in the system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/PartyReferenceDataDirectory/{partyreferencedatadirectoryid}/Demographics/{demographicsid}

The verb "Update" is typically not included in the path as it represents the action to be performed on the resource, which can be indicated using the appropriate HTTP method (e.g., PUT or PATCH) when making the request.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PartyReferenceDataDirectory/{partyreferencedatadirectoryid}/Demographics/{demographicsid}/Retrieve</span></summary>

  **Description**

  This service domain maintains a range of party reference information covering aspects including general reference details, contacts and associations and demographic information ReBQ Retrieve details about customer demographics entries in the directory

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific customer's demographics entry in the Party Reference Data Directory. It is part of a service domain that manages various types of reference information related to parties, such as contact details, associations, and demographic data. This specific endpoint helps you access and view details about a customer's demographics, which can include information like age, gender, income, and other relevant data stored in the directory.

  **Limitations**

  GET: The name of the path according to REST best practices could be:  
GET /party-reference-data-directory/{party-reference-data-directory-id}/demographics/{demographics-id}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PartyReferenceDataDirectory/{partyreferencedatadirectoryid}/BankRelations/{bankrelationsid}/Update</span></summary>

  **Description**

  This service domain maintains a range of party reference information covering aspects including general reference details, contacts and associations and demographic information UpBQ Update details about a customer's bank relations entry for the customer

  **Documentation**

  This BIAN API path allows you to update details about a customer's bank relations entry in the Party Reference Data Directory. You can specify the specific party reference data directory ID and bank relations ID that you want to update, and then make changes to the customer's bank relations information, such as their banking relationships and associated details. The PUT method is used to update the existing resource with the new information provided.

  **Limitations**

  PUT: A suitable name for this path following REST best practices could be:

PATCH /party-reference-data-directory/{partyreferencedatadirectoryid}/bank-relations/{bankrelationsid}

This path utilizes the PATCH method to update specific details of a bank relation within a party reference data directory. The use of hyphens for multi-word identifiers and lowercase letters for consistency with REST conventions is also included.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PartyReferenceDataDirectory/{partyreferencedatadirectoryid}/BankRelations/{bankrelationsid}/Retrieve</span></summary>

  **Description**

  This service domain maintains a range of party reference information covering aspects including general reference details, contacts and associations and demographic information ReBQ Retrieve details about customer bank relations entries in the directory

  **Documentation**

  This API path allows you to retrieve information about customer bank relations entries stored in the Party Reference Data Directory. This directory contains various details such as general reference information, contacts, associations, and demographic information related to parties. By using this path with the specified IDs, you can access specific data about customer bank relations entries within the directory.

  **Limitations**

  GET: Based on REST best practices, the name of the path should indicate the resource it represents and use nouns to describe the endpoints. Therefore, a suitable name for the given path would be:

```
/PartyReferenceDataDirectories/{partyreferencedatadirectoryid}/BankRelations/{bankrelationsid}/Retrieve
```

</details>

<details open>
  <summary><span style='color:red;'>POST: /PartyReferenceDataDirectory/{partyreferencedatadirectoryid}/Associations/Register</span></summary>

  **Description**

  This service domain maintains a range of party reference information covering aspects including general reference details, contacts and associations and demographic information Capture Association Details

  **Documentation**

  This API path allows you to capture association details within the Party Reference Data Directory. By sending a POST request to this endpoint, you can create a new resource that maintains information on party references, including general details, contacts, associations, and demographic data. This feature helps in organizing and storing information related to different parties and their associations within the system.

  **Limitations**

  POST: The name of the path should be:
```plaintext
/PartyReferenceDataDirectory/{partyreferencedatadirectoryid}/Associations
```

The additional segment "Register" at the end of the path is not following RESTful best practices. In REST, URIs should represent resources, not actions. If "Register" represents creating a new association, it can be achieved using HTTP methods like POST on the /Associations resource, for example.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
