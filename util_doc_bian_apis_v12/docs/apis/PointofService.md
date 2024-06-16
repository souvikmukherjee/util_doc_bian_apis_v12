---
id: PointofService
title: PointofService
---

<h1 style='color:red;'>PointofService</h1>

**BIAN Documentation:** [PointofService v12](https://app.swaggerhub.com/apis/BIAN-3/PointofService/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /PointofService/Initiate</span></summary>

  **Description**

  This service domain operates servicing positions within the bank. It administers all media connections, inventory holdings (e.g. cash), provides access to support utilities and tracks servicing activity -e.g. time spent, activity logs, capturing servicing events including commission and training related actions. In cases servicing positions can be automated InCR Initiate a point of service session

  **Documentation**

  This API path allows users to create a new session for servicing positions within a bank. It handles tasks like managing connections, tracking inventory (such as cash), providing access to support tools, and recording servicing activities like time spent and logs. It also captures events related to servicing, such as commissions and training actions. This API can also enable automated servicing positions in some cases.

  **Limitations**

  POST: Based on REST best practices, the path '/PointofService/Initiate' should be named using nouns to represent resources rather than using verbs. A more appropriate name for this path could be '/point-of-service/initiations' or '/point-of-service/initiate-orders' to better reflect the resource that is being interacted with.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PointofService/{pointofserviceid}/Update</span></summary>

  **Description**

  This service domain operates servicing positions within the bank. It administers all media connections, inventory holdings (e.g. cash), provides access to support utilities and tracks servicing activity -e.g. time spent, activity logs, capturing servicing events including commission and training related actions. In cases servicing positions can be automated UpCR Update details for a point of service session

  **Documentation**

  This API path allows you to update details for a specific point of service session within the bank. This includes managing media connections, inventory holdings such as cash, accessing support utilities, and tracking servicing activity like time spent and activity logs. You can also capture servicing events such as commissions and training actions. This update can be used to automate servicing positions if needed.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

PATCH /PointofServices/{pointofserviceid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PointofService/{pointofserviceid}/Execute</span></summary>

  **Description**

  This service domain operates servicing positions within the bank. It administers all media connections, inventory holdings (e.g. cash), provides access to support utilities and tracks servicing activity -e.g. time spent, activity logs, capturing servicing events including commission and training related actions. In cases servicing positions can be automated ExCR Execute an automated task (e.g. assign a contact)

  **Documentation**

  This BIAN API path allows you to update an existing resource related to servicing positions within a bank's Point of Service domain. It provides functionality to execute various tasks such as assigning a contact or automating certain actions for servicing positions. This API helps manage media connections, inventory holdings like cash, access support utilities, and track servicing activities like time spent, activity logs, and events such as commissions and training actions.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

`/point-of-service/{pointofserviceid}/execute`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PointofService/{pointofserviceid}/Request</span></summary>

  **Description**

  This service domain operates servicing positions within the bank. It administers all media connections, inventory holdings (e.g. cash), provides access to support utilities and tracks servicing activity -e.g. time spent, activity logs, capturing servicing events including commission and training related actions. In cases servicing positions can be automated RqCR Request manual intervention (e.g. book future time)

  **Documentation**

  This API path allows you to update an existing service position within the bank's Point of Service system. It is designed to manage various aspects of servicing positions, including media connections, inventory (e.g., cash), access to support tools, and tracking servicing activities such as time spent and activity logs. Additionally, it can capture servicing events like commissions and training actions. In cases where servicing positions can be automated, this API can be used to request manual intervention, for instance, scheduling future servicing time.

  **Limitations**

  PUT: The name of the path should be:

```
/point-of-services/{pointofserviceid}/requests
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /PointofService/{pointofserviceid}/Retrieve</span></summary>

  **Description**

  This service domain operates servicing positions within the bank. It administers all media connections, inventory holdings (e.g. cash), provides access to support utilities and tracks servicing activity -e.g. time spent, activity logs, capturing servicing events including commission and training related actions. In cases servicing positions can be automated ReCR Retrieve details about a servicing position session

  **Documentation**

  This API path retrieves specific details about a servicing position session within the bank's Point of Service service domain. It provides information on the media connections, inventory holdings such as cash, access to support utilities, and tracks servicing activities like time spent, activity logs, and servicing events including commission and training actions. If servicing positions are automated, this API can retrieve details about the session.

  **Limitations**

  GET: A commonly used naming convention for a GET endpoint in a RESTful API is to use the resource noun in plural form followed by an optional identifier. Based on that convention, an appropriate name for the path '/PointofService/{pointofserviceid}/Retrieve' could be:

GET /PointofServices/{pointofserviceid}

By using the plural form "PointofServices", it indicates that this endpoint is responsible for retrieving multiple instances of the "PointofService" resource, with an optional identifier

</details>

<details open>
  <summary><span style='color:red;'>POST: /PointofService/{pointofserviceid}/Assisted/Initiate</span></summary>

  **Description**

  This service domain operates servicing positions within the bank. It administers all media connections, inventory holdings (e.g. cash), provides access to support utilities and tracks servicing activity -e.g. time spent, activity logs, capturing servicing events including commission and training related actions. In cases servicing positions can be automated InBQ Initiate an assisted contact

  **Documentation**

  This API path allows you to create a new assisted contact for a servicing position within a bank. It involves initiating a contact with support utilities, tracking the activity related to this contact (such as time spent and activity logs), and capturing details of the servicing event, including any commissions or training actions. Additionally, it provides access to media connections and inventory holdings like cash. This path is used when a servicing position requires assistance, and it can also be automated in certain cases.

  **Limitations**

  POST: A suitable name for the path '/PointofService/{pointofserviceid}/Assisted/Initiate' following REST best practices could be:

'/point-of-services/{pointofserviceid}/assisted/initiate'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PointofService/{pointofserviceid}/Assisted/{assistedid}/Update</span></summary>

  **Description**

  This service domain operates servicing positions within the bank. It administers all media connections, inventory holdings (e.g. cash), provides access to support utilities and tracks servicing activity -e.g. time spent, activity logs, capturing servicing events including commission and training related actions. In cases servicing positions can be automated UpBQ Update details about an assisted contact

  **Documentation**

  This API path allows you to update the details of an assisted contact at a specific servicing point within the bank. It provides access to manage various aspects such as media connections, inventory holdings (like cash), support utilities, and tracking of servicing activities including time spent, activity logs, and capturing events related to servicing like commissions and training actions. This functionality can also be used to automate servicing positions if needed.

  **Limitations**

  PUT: The name of the path should be:

```
PATCH /point-of-service/{pointofserviceid}/assisted/{assistedid}
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /PointofService/{pointofserviceid}/Assisted/{assistedid}/Retrieve</span></summary>

  **Description**

  This service domain operates servicing positions within the bank. It administers all media connections, inventory holdings (e.g. cash), provides access to support utilities and tracks servicing activity -e.g. time spent, activity logs, capturing servicing events including commission and training related actions. In cases servicing positions can be automated ReBQ Retrieve details about an assisted contact

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific assisted contact within the Point of Service domain of a bank. By providing the Point of Service ID and the Assisted ID, you can access details related to the assisted contact, such as their servicing activity, time spent, activity logs, commission information, and training actions. This API helps track the interactions and servicing events of assisted contacts, providing valuable insights for servicing positions within the bank.

  **Limitations**

  GET: The name of the path should be `/point-of-service/{pointofserviceid}/assisted/{assistedid}` based on REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>POST: /PointofService/{pointofserviceid}/Automated/Initiate</span></summary>

  **Description**

  This service domain operates servicing positions within the bank. It administers all media connections, inventory holdings (e.g. cash), provides access to support utilities and tracks servicing activity -e.g. time spent, activity logs, capturing servicing events including commission and training related actions. In cases servicing positions can be automated InBQ Initiate an automated contact

  **Documentation**

  This API endpoint allows a user to initiate an automated contact for a specific point of service within the bank. It provides access to various functions such as managing media connections, inventory holdings like cash, accessing support utilities, and tracking servicing activities such as time spent, activity logs, and capturing events related to servicing like commissions and training. It enables automation of certain servicing tasks for increased efficiency and convenience.

  **Limitations**

  POST: The path '/PointofServices/{pointofserviceid}/AutomatedInitiation' would be a more RESTful name that follows best practices. This name follows the convention of using plural nouns for resource names and avoids unnecessary slashes and verb forms.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PointofService/{pointofserviceid}/Automated/{automatedid}/Update</span></summary>

  **Description**

  This service domain operates servicing positions within the bank. It administers all media connections, inventory holdings (e.g. cash), provides access to support utilities and tracks servicing activity -e.g. time spent, activity logs, capturing servicing events including commission and training related actions. In cases servicing positions can be automated UpBQ Update details about an automated contact

  **Documentation**

  This API path allows users to update details about an automated contact within the Point of Service service domain at a bank. It provides a way to make changes to information related to automated servicing positions, such as media connections, inventory holdings like cash, support utilities access, and tracking servicing activity. Users can modify details about automated contacts, such as time spent, activity logs, servicing events, commissions, and training actions. This API helps manage and maintain automated servicing positions within the bank's Point of Service operations.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

```
PATCH /point-of-service/{pointofserviceid}/automated/{automatedid}
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /PointofService/{pointofserviceid}/Automated/{automatedid}/Retrieve</span></summary>

  **Description**

  This service domain operates servicing positions within the bank. It administers all media connections, inventory holdings (e.g. cash), provides access to support utilities and tracks servicing activity -e.g. time spent, activity logs, capturing servicing events including commission and training related actions. In cases servicing positions can be automated ReBQ Retrieve details about an automated contact

  **Documentation**

  This API path allows you to retrieve details about an automated contact within the Point of Service domain of a bank. It provides information on servicing positions, media connections, inventory holdings such as cash, support utilities access, and tracking of servicing activities. These activities include monitoring time spent, maintaining activity logs, capturing servicing events like commissions and training actions. The API also supports automated servicing positions and can retrieve specific details about these automated contacts.

  **Limitations**

  GET: Based on REST best practices, a more suitable name for the path could be:

```
/point-of-service/{pointofserviceid}/automated/{automatedid}
```

This name incorporates the use of lowercase letters, hyphens for readability, and descriptive path segments that reflect the resource hierarchy.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PointofService/{pointofserviceid}/Interaction/{interactionid}/Update</span></summary>

  **Description**

  This service domain operates servicing positions within the bank. It administers all media connections, inventory holdings (e.g. cash), provides access to support utilities and tracks servicing activity -e.g. time spent, activity logs, capturing servicing events including commission and training related actions. In cases servicing positions can be automated UpBQ Update details for a customer interaction session

  **Documentation**

  This BIAN API path allows you to update details for a customer interaction session within the Point of Service service domain of a bank. It specifically targets a specific point of service and interaction ID. By making a PUT request to this API, you can modify information related to the customer interaction, such as time spent, activity logs, servicing events, commission, and training actions. This API provides a way to make changes and updates to the servicing activities that occur at specific points of service within the bank.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/point-of-services/{pointofserviceid}/interactions/{interactionid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /PointofService/{pointofserviceid}/Interaction/{interactionid}/Retrieve</span></summary>

  **Description**

  This service domain operates servicing positions within the bank. It administers all media connections, inventory holdings (e.g. cash), provides access to support utilities and tracks servicing activity -e.g. time spent, activity logs, capturing servicing events including commission and training related actions. In cases servicing positions can be automated ReBQ Retrieve details about a customer interaction session

  **Documentation**

  This API path allows you to retrieve information about a specific customer interaction session at a servicing position within the bank. It provides details such as media connections, inventory status (like cash), support utilities access, and tracks servicing activity like time spent, activity logs, servicing events, commissions, and training actions. Additionally, if servicing positions are automated, this API can also retrieve details about customer interactions for those automated positions.

  **Limitations**

  GET: The name of the path could be '/point-of-services/{pointofserviceid}/interactions/{interactionid}'. It uses lowercase letters, uses hyphens to separate words, and clearly indicates the resource hierarchy in a RESTful manner.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PointofService/{pointofserviceid}/Inventory/{inventoryid}/Update</span></summary>

  **Description**

  This service domain operates servicing positions within the bank. It administers all media connections, inventory holdings (e.g. cash), provides access to support utilities and tracks servicing activity -e.g. time spent, activity logs, capturing servicing events including commission and training related actions. In cases servicing positions can be automated UpBQ Update inventory details

  **Documentation**

  This API path allows you to update inventory details for a specific servicing position within the bank. It is used to keep track of items such as cash holdings and other resources available at that particular servicing position. The API also helps in monitoring servicing activities, recording time spent on tasks, maintaining activity logs, and capturing events like commissions and training actions related to that position. Additionally, this API can support automated servicing positions within the bank.

  **Limitations**

  PUT: The name of the path should be `/pointofservices/{pointofserviceid}/inventory/{inventoryid}` for updating a specific inventory item associated with a particular point of service.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PointofService/{pointofserviceid}/Inventory/{inventoryid}/Execute</span></summary>

  **Description**

  This service domain operates servicing positions within the bank. It administers all media connections, inventory holdings (e.g. cash), provides access to support utilities and tracks servicing activity -e.g. time spent, activity logs, capturing servicing events including commission and training related actions. In cases servicing positions can be automated ExBQ Execute transactions against the inventory position

  **Documentation**

  This BIAN API path allows you to update an existing resource related to a specific point of service and inventory within a bank. It is designed to facilitate transactions and operations carried out by servicing positions, such as managing cash holdings, connecting to media, accessing support tools, and tracking various activities like time spent and event logs. The API also supports automated transactions for servicing positions.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be something like:

'/point-of-services/{pointofserviceid}/inventory/{inventoryid}/execute'

It's important to use all lowercase letters, separate words with hyphens, and use plural nouns for consistency and readability.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PointofService/{pointofserviceid}/Inventory/{inventoryid}/Retrieve</span></summary>

  **Description**

  This service domain operates servicing positions within the bank. It administers all media connections, inventory holdings (e.g. cash), provides access to support utilities and tracks servicing activity -e.g. time spent, activity logs, capturing servicing events including commission and training related actions. In cases servicing positions can be automated ReBQ Retrieve details about inventory holdings and usage

  **Documentation**

  This API path allows you to retrieve information about inventory holdings and usage at a specific servicing position within the bank. By providing the Point of Service ID and Inventory ID, you can access details such as cash holdings, media connections, support utilities access, and tracking of servicing activities like time spent, activity logs, commission, and training actions. This API helps in monitoring and managing inventory and servicing activities efficiently.

  **Limitations**

  GET: A suitable name for the path '/PointofService/{pointofserviceid}/Inventory/{inventoryid}/Retrieve' following REST best practices could be:

GET /point-of-service/{pointofserviceid}/inventory/{inventoryid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PointofService/{pointofserviceid}/CashPosition/{cashpositionid}/Update</span></summary>

  **Description**

  This service domain operates servicing positions within the bank. It administers all media connections, inventory holdings (e.g. cash), provides access to support utilities and tracks servicing activity -e.g. time spent, activity logs, capturing servicing events including commission and training related actions. In cases servicing positions can be automated UpBQ Update the cash position

  **Documentation**

  This API path allows you to update the cash position of a specific servicing point within the bank. It is used to manage and track the amount of cash held at that position, ensuring accurate inventory management. By using this path, you can adjust the cash position as needed, whether manually or through automation, to reflect any changes in the amount of cash available at that particular servicing point.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
PATCH /point-of-service/{pointofserviceid}/cash-positions/{cashpositionid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /PointofService/{pointofserviceid}/CashPosition/{cashpositionid}/Execute</span></summary>

  **Description**

  This service domain operates servicing positions within the bank. It administers all media connections, inventory holdings (e.g. cash), provides access to support utilities and tracks servicing activity -e.g. time spent, activity logs, capturing servicing events including commission and training related actions. In cases servicing positions can be automated ExBQ Execute transactions against the cash position

  **Documentation**

  This BIAN API path allows you to update and execute transactions against the cash position associated with a specific point of service within a bank. It is used to manage the servicing activities carried out at a particular service position, such as handling cash, accessing support utilities, and tracking servicing events like commission payouts and training actions. The API helps in automating certain servicing tasks and tracks the time spent and activity logs for each transaction.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/point-of-service/{pointofserviceid}/cash-position/{cashpositionid}/execute

Note that the path should use lowercase letters and separate words with hyphens for readability.

</details>

<details open>
  <summary><span style='color:red;'>GET: /PointofService/{pointofserviceid}/CashPosition/{cashpositionid}/Retrieve</span></summary>

  **Description**

  This service domain operates servicing positions within the bank. It administers all media connections, inventory holdings (e.g. cash), provides access to support utilities and tracks servicing activity -e.g. time spent, activity logs, capturing servicing events including commission and training related actions. In cases servicing positions can be automated ReBQ Retrieve details about the cash inventory

  **Documentation**

  This API path allows you to retrieve information about the cash inventory in a specific servicing position within the bank. It provides details such as the amount of cash available at that position. This information is useful for managing the cash flow and ensuring that servicing activities can be carried out smoothly.

  **Limitations**

  GET: A possible name for the path following REST best practices could be:

GET /point-of-service/{pointofserviceid}/cash-position/{cashpositionid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
