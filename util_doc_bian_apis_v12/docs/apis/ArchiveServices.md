---
id: ArchiveServices
title: ArchiveServices
---

<h1 style='color:red;'>ArchiveServices</h1>

**BIAN Documentation:** [ArchiveServices v12](https://app.swaggerhub.com/apis/BIAN-3/ArchiveServices/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /ArchiveServices/{archiveservicesid}/Control</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Control Archive Operating Session

  **Documentation**

  This API path allows the bank to update the control settings for a specific Archive Services operating session identified by "{archiveservicesid}". It enables the bank to manage and maintain important documents that are not frequently accessed but may be needed in the future. By using this API, the bank can make changes to how the archived documents are stored, accessed, and managed within the Archive Services system.

  **Limitations**

  PUT: A suitable name for the endpoint could be: 

`/archiveservices/{archiveservicesid}/control`

Using lowercase letters and using plural nouns would be in line with REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ArchiveServices/{archiveservicesid}/Exchange</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Exchange Archive Operating Session

  **Documentation**

  This API path allows for updating information related to Archive Services within a bank. Specifically, it is used to manage and access important documents that are not frequently used but may be needed in the future. Users can exchange data related to the Archive Services, such as updating details or making changes during an operating session.

  **Limitations**

  PUT: The name of the path should be `/archiveservices/{archiveservicesid}/exchange` where:
- `archiveservices` is in plural form since it indicates a collection of archive services.
- `{archiveservicesid}` is a placeholder for the unique identifier of the specific archive service.
- `exchange` represents a resource or action related to exchanging data or services within the context of the archive service identified by `{archiveservicesid}`.
- All path components are in lowercase as per REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ArchiveServices/{archiveservicesid}/Execute</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Execute Archive Operating Session

  **Documentation**

  This API path allows the bank to update an existing archive operating session within the Archive Services domain. This means the bank can manage and access important documents that are no longer regularly used but may be needed in the future. By executing this API call, the bank can perform actions related to maintaining and organizing these archived documents.

  **Limitations**

  PUT: According to REST best practices, the name of the path should be:

/ArchiveServices/{archiveservicesid}/Actions/execute

</details>

<details open>
  <summary><span style='color:red;'>POST: /ArchiveServices/Initiate</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Initiate Archive Operating Session

  **Documentation**

  This API path allows the bank to start a new session for archiving important documents that are not regularly used but may be needed in the future. It enables the bank to organize, store, and retrieve these significant documents efficiently.

  **Limitations**

  POST: If the path '/ArchiveServices/Initiate' followed REST best practices, it should be named using a noun that represents the resource being accessed or manipulated. 

A more appropriate name for the path could be '/archives' if it represents a collection of archives, or '/archive/initiate' if it specifically refers to the initiation action on an archive. 

Remember that RESTful API design principles recommend using nouns for resources and avoiding verbs or actions in the path names.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ArchiveServices/{archiveservicesid}/Notify</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Notify Archive Operating Session

  **Documentation**

  This API path allows you to retrieve information about notifying an archive operating session within the Archive Services domain of a bank. The purpose of Archive Services is to help the bank store and manage important documents that are not frequently accessed but may be needed in the future. By using this API, you can notify about an archive operating session, which is a designated time when the bank takes actions related to maintaining and accessing these documents in the archive system.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

```
/ArchiveServices/{archiveservicesid}/Notifications
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ArchiveServices/{archiveservicesid}/Request</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Request Archive Operating Session

  **Documentation**

  This API path allows for the updating of an existing archive operating session within the Archive Services Service Domain. It enables the bank to manage important documents that are not regularly used but may be needed in the future. By making a "PUT" request to this endpoint with the specified archive services ID, the bank can initiate or update a session related to accessing and maintaining archived documents.

  **Limitations**

  PUT: Based on REST best practices, a suitable name for the path '/ArchiveServices/{archiveservicesid}/Request' could be 'GET /ArchiveServices/{archiveservicesid}/Requests'. This path follows the convention of using the plural form for resource names and using standard HTTP methods like GET to retrieve resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ArchiveServices/{archiveservicesid}/Retrieve</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Retrieve Archive Operating Session

  **Documentation**

  This API path is used to retrieve information about a specific archive operating session within the Archive Services service domain of a bank. This operating session allows the bank to manage important documents that are no longer frequently accessed but may be needed in the future. By using this API, the bank can access and retrieve details related to the documents stored in the archive, facilitating efficient management and retrieval of archived information.

  **Limitations**

  GET: One possible naming convention for this path could be:

`GET /archive-services/{archiveServiceId}`

Following REST best practices, the path should use lowercase letters, separate words with hyphens, and clearly indicate the resource being retrieved. By using the HTTP method `GET`, it indicates that the client is retrieving information or data related to a specific archive service identified by `archiveServiceId`.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ArchiveServices/{archiveservicesid}/Update</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Update Archive Operating Session

  **Documentation**

  This API path allows the bank to update an existing archive operating session within the Archive Services Service Domain. The bank can use this functionality to make changes or modifications to the way significant documents are stored and accessed, ensuring that important information remains available for future needs even if it is no longer actively used.

  **Limitations**

  PUT: The REST best practice for naming paths is to use plural nouns to represent collections of resources. In this case, the path '/ArchiveServices/{archiveservicesid}/Update' should be updated to '/ArchiveServices/{archiveservicesid}' to follow the convention of using the resource name (ArchiveServices) in the path and using the specific identifier (archiveservicesid) to identify a resource within that collection.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ArchiveServices/{archiveservicesid}/DocumentCapture/{documentcaptureid}/Exchange</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Exchange Document Capture Function

  **Documentation**

  This BIAN API path allows the bank to update or modify an existing document capture function within the Archive Services. Essentially, it enables the bank to manage and store important documents that are not frequently used but may be needed in the future. By using this API, the bank can make changes to how specific documents are captured and stored for future access and retrieval.

  **Limitations**

  PUT: The name of the path should be:

```
/ArchiveServices/{archiveservicesid}/DocumentCapture/{documentcaptureid}/Exchange
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ArchiveServices/{archiveservicesid}/DocumentMaintenance/{documentmaintenanceid}/Exchange</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Exchange Document Maintenance Function

  **Documentation**

  This API path allows the bank to update or exchange documents in the Archive Services system. Specifically, it deals with maintaining and managing documents that are no longer frequently accessed but may be needed in the future. By using the PUT method, the bank can update existing resources related to document maintenance within the Archive Services Service Domain.

  **Limitations**

  PUT: A good name for this path following REST best practices could be:

```
/ArchiveServices/{archiveservicesid}/DocumentMaintenance/{documentmaintenanceid}/Exchange
```

This path name provides a clear hierarchical structure that reflects the relationships between the resources involved. Remember to use nouns to represent resources and avoid including verbs or actions in the path name.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ArchiveServices/{archiveservicesid}/DocumentRetrieval/{documentretrievalid}/Exchange</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Exchange Document Retrieval Function

  **Documentation**

  This API path allows you to update an existing document retrieval exchange in the Archive Services Service Domain of the bank. It is specifically used to manage significant documents that are no longer frequently accessed but may be needed in the future. By using the PUT method on this path, you can make changes or updates to the document retrieval process, ensuring efficient access to important documents stored within the bank's archive services.

  **Limitations**

  PUT: The name of the path should be:

`/archiveservices/{archiveservicesid}/documentretrieval/{documentretrievalid}/exchange`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ArchiveServices/{archiveservicesid}/DocumentCapture/{documentcaptureid}/Execute</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Execute Document Capture Function

  **Documentation**

  This BIAN API path allows the bank to update an existing document capture task within the Archive Services domain. By calling this path with the appropriate IDs, the bank can execute the document capture function for a specific document capture task, ensuring that important documents are properly retained and accessible for future needs.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

"/archiveservices/{archiveServicesId}/documentCapture/{documentCaptureId}/execute"

In RESTful API design, paths are typically in lowercase letters, and words are separated by hyphens or underscores. Additionally, resource names in the path are usually pluralized and should represent the logical hierarchy of the resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ArchiveServices/{archiveservicesid}/DocumentMaintenance/{documentmaintenanceid}/Execute</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Execute Document Maintenance Function

  **Documentation**

  This BIAN API path allows a bank to execute document maintenance functions within the Archive Services service domain. Specifically, it updates an existing resource related to document maintenance using the unique identifiers provided in the URL path. This functionality is designed to help the bank retain, maintain, and access important documents that are no longer regularly used but may be needed in the future.

  **Limitations**

  PUT: A possible name for this path that follows REST best practices would be:

'/archiveservices/{archiveservicesid}/documentmaintenance/{documentmaintenanceid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ArchiveServices/{archiveservicesid}/DocumentRetrieval/{documentretrievalid}/Execute</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Execute Document Retrieval Function

  **Documentation**

  This API path allows the bank to execute the document retrieval function within the Archive Services Service Domain. By providing the `archiveservicesid` and `documentretrievalid` parameters, the bank can update an existing resource related to the retrieval of significant documents that are not currently in active use but may be needed in the future. This function helps the bank efficiently manage and access important documents stored within its archive services.

  **Limitations**

  PUT: A possible RESTful naming convention for this path could be:

'/archiveservices/{archiveservicesId}/documentRetrieval/{documentRetrievalId}/execute'

The path is in lowercase letters and uses hyphens to separate words for improved readability. It also follows the convention of using resource names in the plural form ('archiveservices', 'documentRetrieval') and includes specific identifiers for each resource ('archiveservicesId', 'documentRetrievalId').

</details>

<details open>
  <summary><span style='color:red;'>POST: /ArchiveServices/{archiveservicesid}/DocumentCapture/Initiate</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Initiate Document Capture Function

  **Documentation**

  This API path allows the bank to start the process of capturing significant documents that are no longer frequently used but might be needed in the future. It creates a new resource for initiating the document capture function within the Archive Services Service Domain.

  **Limitations**

  POST: The RESTful naming convention for this path could be:

`/archiveservices/{archiveservicesid}/document-capture/initiate`

In this convention:
- Path parameters (`archiveservicesid`) are in lowercase
- Words are separated by hyphens to improve readability
- The path represents a hierarchical structure with resources nested inside each other

</details>

<details open>
  <summary><span style='color:red;'>POST: /ArchiveServices/{archiveservicesid}/DocumentMaintenance/Initiate</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Initiate Document Maintenance Function

  **Documentation**

  This BIAN API path "/ArchiveServices/{archiveservicesid}/DocumentMaintenance/Initiate" is used to initiate a document maintenance function within the Archive Services Service Domain of a bank. This function allows the bank to retain, maintain, and access important documents that are not frequently accessed but may be needed in the future. By creating a new resource through a POST request, the bank can activate the process of maintaining these documents to ensure they are available when required.

  **Limitations**

  POST: The name of the path could be `/archiveservices/{archiveservicesid}/documentmaintenance/initiate`. 

In the RESTful convention, it is recommended to use lowercase letters and separate words with a hyphen for readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ArchiveServices/{archiveservicesid}/DocumentRetrieval/Initiate</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Initiate Document Retrieval Function

  **Documentation**

  This API path allows the bank to initiate the process of retrieving significant documents that are stored in the archive services. These documents are no longer actively used but may be required in the future. By making a POST request to this path with the necessary information, the bank can initiate the retrieval process for specific archived documents.

  **Limitations**

  POST: A RESTful path should be designed to be resource-based and hierarchical. Following REST best practices, the name of the path '/ArchiveServices/{archiveservicesid}/DocumentRetrieval/Initiate' can be simplified to something like:

'/archiveservices/{archiveservicesid}/document-retrieval/initiate'

This path follows the convention of using lowercase letters with hyphens to separate words for better readability. It also maintains a clear hierarchy and resource-based structure.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ArchiveServices/{archiveservicesid}/DocumentCapture/{documentcaptureid}/Notify</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Notify Document Capture Function

  **Documentation**

  This API path is used to retrieve information about notifying the Document Capture function within the Archive Services service domain. Essentially, it allows the bank to access and maintain important documents that are not frequently used but may be needed in the future. The retrieval of information about notifying the Document Capture function can help in managing and organizing these documents effectively within the system.

  **Limitations**

  GET: A suitable name for the path could be:

`/archive-services/{archiveservicesid}/document-capture/{documentcaptureid}/notify` 

Following REST best practices, it is recommended to use lowercase letters, hyphens for multi-word resources, and use plurals for collection resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ArchiveServices/{archiveservicesid}/DocumentMaintenance/{documentmaintenanceid}/Notify</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Notify Document Maintenance Function

  **Documentation**

  This API path allows you to retrieve information about notifying the document maintenance function within the Archive Services service domain of a bank. It is specifically related to notifying about significant documents that are stored and maintained for future access but are not currently actively used. This function helps in managing and accessing important documents that may be needed later on.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

`/archive-services/{archive-services-id}/document-maintenance/{document-maintenance-id}/notify`

</details>

<details open>
  <summary><span style='color:red;'>GET: /ArchiveServices/{archiveservicesid}/DocumentRetrieval/{documentretrievalid}/Notify</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Notify Document Retrieval Function

  **Documentation**

  This API path allows the bank to retrieve information about a specific document retrieval request within the Archive Services service domain. It enables the bank to access important documents that are not regularly used but may be needed in the future. The "Notify Document Retrieval" function informs the bank or relevant parties about the status or details of a document retrieval request.

  **Limitations**

  GET: For this endpoint, a RESTful naming convention could be as follows:
```
/ArchiveServices/{archiveservicesid}/DocumentRetrieval/{documentretrievalid}/Notify
```

This path already appears suitable and follows RESTful principles by using resource identifiers such as `ArchiveServices` and `DocumentRetrieval` with their respective IDs. It is recommended to keep the path clear, concise, and meaningful, which this path accomplishes.

If a more detailed version of the operation could be

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ArchiveServices/{archiveservicesid}/DocumentCapture/{documentcaptureid}/Request</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Request Document Capture Function

  **Documentation**

  This BIAN API path allows the bank to update an existing document capture request within the Archive Services service domain. It enables the bank to manage and store important documents that are not frequently accessed but may be needed in the future. The PUT method is used to update the details of a specific document capture request identified by the {documentcaptureid} within the {archiveservicesid}.

  **Limitations**

  PUT: The name for the path '/ArchiveServices/{archiveservicesid}/DocumentCapture/{documentcaptureid}/Request' should ideally reflect the action being performed on the resource. Following RESTful best practices, a possible name for this path could be:

'/ArchiveServices/{archiveservicesid}/DocumentCapture/{documentcaptureid}/CreateRequest'

This name conveys the intent of the endpoint to create a new document capture request within the specified archive service and document capture IDs.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ArchiveServices/{archiveservicesid}/DocumentMaintenance/{documentmaintenanceid}/Request</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Request Document Maintenance Function

  **Documentation**

  This API path allows users to update a specific document maintenance request within the Archive Services Service Domain. By making a PUT request to the specified URL with the relevant IDs, users can update details or make changes to a document maintenance request associated with archive services in a bank. This functionality helps banks retain and manage important documents that are not regularly accessed but may be needed in the future.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/ArchiveServices/{archiveservicesid}/DocumentMaintenance/{documentmaintenanceid}/Requests
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ArchiveServices/{archiveservicesid}/DocumentRetrieval/{documentretrievalid}/Request</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Request Document Retrieval Function

  **Documentation**

  This API path allows users to request the retrieval of a specific document within the Archive Services service domain. Users can provide the archive service ID and document retrieval ID to update and make a request for accessing significant documents that are no longer actively used but may be needed in the future.

  **Limitations**

  PUT: For a RESTful naming convention, the path should be structured in a way that reflects the resources and actions being performed. 

A more suitable name for the path could be:

`/archiveservices/{archiveservicesid}/documentretrieval/{documentretrievalid}/request`

This path follows REST best practices by using lowercase letters, separating words with hyphens or underscores, and accurately representing the resources and actions being accessed in the API.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ArchiveServices/{archiveservicesid}/DocumentCapture/{documentcaptureid}/Retrieve</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Retrieve Document Capture Function

  **Documentation**

  This API path allows the bank to retrieve information about a specific document capture within their archive services. It is used to access important documents that are no longer regularly used but may be needed in the future. This function helps the bank maintain and access significant documents efficiently.

  **Limitations**

  GET: The name of this path following REST best practices could be:

'/archive-services/{archive_services_id}/document-capture/{document_capture_id}/retrieve'

Following REST naming conventions, we use lowercase letters and hyphens to separate words in the path. Additionally, we use plural nouns for collections and singular nouns for resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ArchiveServices/{archiveservicesid}/DocumentMaintenance/{documentmaintenanceid}/Retrieve</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Retrieve Document Maintenance Function

  **Documentation**

  This API path allows a bank to retrieve information about a specific document maintenance function within its archive services. The archive services help the bank to store and manage important documents that are not frequently used but may be needed in the future. By using this API path with the provided IDs, the bank can access details about how a particular document is being maintained within the archive system.

  **Limitations**

  GET: Based on the REST best practices, the name of the path should focus on the resource being accessed rather than the action being performed. Following this naming convention, the path could be named as '/ArchiveServices/{archiveservicesid}/DocumentMaintenance/{documentmaintenanceid}/Document'. This reflects the resource being retrieved (document) in the context of the archive services and document maintenance.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ArchiveServices/{archiveservicesid}/DocumentRetrieval/{documentretrievalid}/Retrieve</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Retrieve Document Retrieval Function

  **Documentation**

  This API path is used to retrieve information about a specific document within the Archive Services of the bank. The bank can access important documents that are not actively used but may be needed in the future. By providing the appropriate Archive Services ID and Document Retrieval ID, the bank can retrieve the specific document they are looking for using this API endpoint.

  **Limitations**

  GET: The name of the path should be `/archive-services/{archiveservicesid}/document-retrieval/{documentretrievalid}/retrieve`, following REST best practices of using lowercase letters and hyphens to separate words in the URL path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ArchiveServices/{archiveservicesid}/DocumentCapture/{documentcaptureid}/Update</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Update Document Capture Function

  **Documentation**

  This API path allows you to update an existing document capture within the Archive Services service domain. It enables the bank to manage and store important documents that are not frequently accessed but may be needed in the future. By using this API, you can make changes or updates to a specific document capture record identified by its unique IDs within the Archive Services system.

  **Limitations**

  PUT: The name of the path following REST best practices should be:

`PUT /ArchiveServices/{archiveservicesid}/DocumentCapture/{documentcaptureid}`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ArchiveServices/{archiveservicesid}/DocumentMaintenance/{documentmaintenanceid}/Update</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Update Document Maintenance Function

  **Documentation**

  This API path is used to update an existing document maintenance function within the Archive Services Service Domain of a bank. It allows the bank to modify and manage significant documents that are not frequently accessed but may be needed in the future. The Update method with a PUT request is used to make changes to specific document maintenance functionalities identified by their IDs within the archive services.

  **Limitations**

  PUT: The name of the path should be `/archive-services/{archiveServiceId}/document-maintenance/{documentMaintenanceId}`.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ArchiveServices/{archiveservicesid}/DocumentRetrieval/{documentretrievalid}/Update</span></summary>

  **Description**

  The Archive Services Service Domain enables the bank to retain, maintain and access significant documents that are no longer actively accessed but that might be required in the future Update Document Retrieval Function

  **Documentation**

  This API path allows the bank to update an existing document retrieval function within the Archive Services Service Domain. The bank can make changes to how significant documents are accessed and maintained, ensuring that important documents are retained and easily accessible even if they are not actively used.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

`PUT /ArchiveServices/{archiveservicesid}/DocumentRetrieval/{documentretrievalid}`

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
