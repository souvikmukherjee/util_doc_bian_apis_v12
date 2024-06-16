---
id: ContactHandler
title: ContactHandler
---

<h1 style='color:red;'>ContactHandler</h1>

**BIAN Documentation:** [ContactHandler v12](https://app.swaggerhub.com/apis/BIAN-3/ContactHandler/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /ContactHandler/Initiate</span></summary>

  **Description**

  This service domain handles a customer's interactive contact with the bank. This will typically involve launching of one or more channel/device specific dialogue sessions as necessary within the customer contact InCR Initiate a contact

  **Documentation**

  This API path `/ContactHandler/Initiate` is used to start an interactive contact session between a customer and the bank. It allows for the creation of a new resource where the customer can initiate contact with the bank through various communication channels or devices. This could involve starting dialogue sessions tailored to the specific channel or device being used by the customer. In simple terms, this API helps kickstart a conversation or interaction between a customer and the bank using different communication methods.

  **Limitations**

  POST: In keeping with REST best practices, the name of the path should ideally be something that represents a resource or collection of resources on the server. 
For example, it could be named something like '/contacts' or '/contact-initiations' to better reflect the resource being interacted with.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ContactHandler/{contacthandlerid}/Update</span></summary>

  **Description**

  This service domain handles a customer's interactive contact with the bank. This will typically involve launching of one or more channel/device specific dialogue sessions as necessary within the customer contact UpCR Update details for a customer contact

  **Documentation**

  This API path allows you to update the details of a customer's interactive contact with the bank. It involves managing dialogue sessions specific to different channels or devices that the customer may be using during the contact. The update can include changes to various contact-related information.

  **Limitations**

  PUT: The name of the path should be:

```
/contacts/{contactId}
``` 

Following REST best practices, it is recommended to use resource names in plural form and avoid using action verbs like "Update" in the path. Instead, the HTTP methods (like PUT, POST, PATCH) should be used to indicate the action to be taken on the resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ContactHandler/{contacthandlerid}/Execute</span></summary>

  **Description**

  This service domain handles a customer's interactive contact with the bank. This will typically involve launching of one or more channel/device specific dialogue sessions as necessary within the customer contact ExCR Execute an automated task for a contact (e.g. route to specialist)

  **Documentation**

  This API path allows you to update an existing resource within the "Contact Handler" service domain by executing an automated task for a customer's interactive contact with the bank. This task could involve launching specific dialogue sessions on different channels or devices as needed. For example, it could be used to route a customer to a specialist within the bank's system based on the nature of their contact.

  **Limitations**

  PUT: The name of the path should be:

/contact-handlers/{contacthandlerid}/execute

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ContactHandler/{contacthandlerid}/Request</span></summary>

  **Description**

  This service domain handles a customer's interactive contact with the bank. This will typically involve launching of one or more channel/device specific dialogue sessions as necessary within the customer contact RqCR Request manual intervention in a contact (e.g. override routing decision)

  **Documentation**

  This API path is a way to update an existing resource related to handling a customer's contact with the bank. It allows for launching specific dialogue sessions on different devices or channels as needed during the customer contact process. Additionally, it provides the ability to manually intervene in a contact by overriding routing decisions when necessary.

  **Limitations**

  PUT: A suitable name for the path could be '/contacts/{contactId}/requests'. This path follows REST best practices by using plural nouns to represent resources (contacts, requests) and using the specific identifier for the resource (contactId) instead of a generic term like 'contacthandlerid'.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ContactHandler/{contacthandlerid}/Retrieve</span></summary>

  **Description**

  This service domain handles a customer's interactive contact with the bank. This will typically involve launching of one or more channel/device specific dialogue sessions as necessary within the customer contact ReCR Retrieve details about a customer contact

  **Documentation**

  This API path `/ContactHandler/{contacthandlerid}/Retrieve` allows you to retrieve information about a specific customer contact handled by the bank's Contact Handler service. By providing the `contacthandlerid` parameter in the URL, you can access details related to the customer's interactive contact with the bank. This information may include communication sessions initiated with the customer via various channels or devices used during the contact process.

  **Limitations**

  GET: The name of the path should be:

/contact-handlers/{contacthandlerid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /ContactHandler/{contacthandlerid}/Authentication/{authenticationid}/Retrieve</span></summary>

  **Description**

  This service domain handles a customer's interactive contact with the bank. This will typically involve launching of one or more channel/device specific dialogue sessions as necessary within the customer contact ReBQ Retrieve details about an authentication task

  **Documentation**

  This API path allows you to retrieve information about an authentication task within the Contact Handler service domain. It is specifically related to a customer's interactive contact with the bank. By making a GET request to this path with the appropriate IDs, you can retrieve details about the specific authentication task associated with a contact handler interaction. This information may include specific dialogue sessions and other related details relevant to the authentication process.

  **Limitations**

  GET: A possible name for the path could be:

/contact-handlers/{contacthandlerId}/authentications/{authenticationId}/retrieve

</details>

<details open>
  <summary><span style='color:red;'>GET: /ContactHandler/{contacthandlerid}/Routing/{routingid}/Retrieve</span></summary>

  **Description**

  This service domain handles a customer's interactive contact with the bank. This will typically involve launching of one or more channel/device specific dialogue sessions as necessary within the customer contact ReBQ Retrieve details about a routing task

  **Documentation**

  This API path retrieves information about a routing task within the Contact Handler service domain. Specifically, it allows you to retrieve details about how a customer's interactive contact with the bank is being handled. This may involve launching dialogue sessions through specific channels or devices to facilitate communication with the customer. The API provides access to information related to routing tasks within the customer contact process.

  **Limitations**

  GET: A suitable name for the path could be: `/contact-handlers/{contacthandlerId}/routings/{routingId}`.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ContactHandler/{contacthandlerid}/Session/Initiate</span></summary>

  **Description**

  This service domain handles a customer's interactive contact with the bank. This will typically involve launching of one or more channel/device specific dialogue sessions as necessary within the customer contact InBQ Initiate a servicing session

  **Documentation**

  This API path initiates a new interactive session for customer contact with the bank through the Contact Handler service domain. It allows the bank to launch specific dialogue sessions tailored for different channels or devices based on the customer's needs. This can include starting a servicing session to address the customer's inquiries or requests.

  **Limitations**

  POST: Following REST best practices, the name of the path should be structured in a resource-centric way to accurately represent the action being performed. Therefore, a suitable name for the path '/ContactHandler/{contacthandlerid}/Session/Initiate' could be:

POST /ContactHandlers/{contacthandlerid}/Sessions

This path accurately conveys the intent of initiating a session within the context of a specific contact handler resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ContactHandler/{contacthandlerid}/Session/{sessionid}/Update</span></summary>

  **Description**

  This service domain handles a customer's interactive contact with the bank. This will typically involve launching of one or more channel/device specific dialogue sessions as necessary within the customer contact UpBQ Update details about a servicing session

  **Documentation**

  This API path allows you to update details about a customer contact session with the bank. It is designed to facilitate communication between the customer and the bank through various channels or devices. By making a PUT request to this path with the appropriate contact handler ID and session ID, you can modify information related to a servicing session, ensuring that the session details are accurate and up-to-date.

  **Limitations**

  PUT: A good name for the path '/ContactHandler/{contacthandlerid}/Session/{sessionid}/Update' following REST best practices could be:

PUT /contact-handlers/{contacthandlerid}/sessions/{sessionid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ContactHandler/{contacthandlerid}/Session/{sessionid}/Execute</span></summary>

  **Description**

  This service domain handles a customer's interactive contact with the bank. This will typically involve launching of one or more channel/device specific dialogue sessions as necessary within the customer contact ExBQ Execute an automated task in a session (e.g. re-authenticate)

  **Documentation**

  This BIAN API path allows you to update an existing resource related to handling a customer's interactive contact with the bank. Specifically, it pertains to executing an automated task within a session, such as re-authenticating the customer. By utilizing this path, you can trigger specific actions within a dialogue session to manage customer interactions effectively.

  **Limitations**

  PUT: Based on REST best practices, the name of the path '/ContactHandler/{contacthandlerid}/Session/{sessionid}/Execute' could be simplified to something more readable and descriptive, such as '/contact-handlers/{contacthandlerid}/sessions/{sessionid}/execute'.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ContactHandler/{contacthandlerid}/Session/{sessionid}/Retrieve</span></summary>

  **Description**

  This service domain handles a customer's interactive contact with the bank. This will typically involve launching of one or more channel/device specific dialogue sessions as necessary within the customer contact ReBQ Retrieve details about a customer servicing session

  **Documentation**

  This API path allows you to retrieve information about a customer servicing session within the Contact Handler service domain of a bank. It specifically retrieves details about a session identified by the session ID within a contact handler identified by the contact handler ID. This information may include dialogue sessions and interactions related to a customer's contact with the bank through various channels or devices.

  **Limitations**

  GET: The name of the path following REST best practices could be something like:

/contact-handlers/{contacthandlerid}/sessions/{sessionid}/retrieve

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ContactHandler/{contacthandlerid}/History/{historyid}/Update</span></summary>

  **Description**

  This service domain handles a customer's interactive contact with the bank. This will typically involve launching of one or more channel/device specific dialogue sessions as necessary within the customer contact UpBQ Update a contact history record content

  **Documentation**

  This API path allows you to update the content of a contact history record within the Contact Handler service of a bank. It specifically targets a contact handler identified by {contacthandlerid} and a history record identified by {historyid}. By using the PUT method, you can modify the information stored in this particular contact history record. This update capability is useful for maintaining accurate and up-to-date information related to customer interactions within the bank's system.

  **Limitations**

  PUT: A suitable name for the path '/ContactHandler/{contacthandlerid}/History/{historyid}/Update' following REST best practices could be:

PUT /contact-handlers/{contacthandlerid}/histories/{historyid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /ContactHandler/{contacthandlerid}/History/{historyid}/Retrieve</span></summary>

  **Description**

  This service domain handles a customer's interactive contact with the bank. This will typically involve launching of one or more channel/device specific dialogue sessions as necessary within the customer contact ReBQ Retrieve historical details about a contact event

  **Documentation**

  This API path allows you to retrieve historical details about a specific contact event within the Contact Handler service domain. By providing the contact handler ID and history ID in the URL, you can retrieve information about a past interaction between a customer and the bank. This information may include details about the dialogue sessions that took place during the contact event. It helps in tracking and accessing historical data related to customer interactions with the bank.

  **Limitations**

  GET: A potential name for the path '/ContactHandler/{contacthandlerid}/History/{historyid}/Retrieve' that follows REST best practices could be:

GET /contacts/{contactid}/history/{historyid}

This naming convention makes the path more generic and resource-focused, which aligns with REST principles.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
