---
id: CardAuthorization
title: CardAuthorization
---

<h1 style='color:red;'>CardAuthorization</h1>

**BIAN Documentation:** [CardAuthorization v12](https://app.swaggerhub.com/apis/BIAN-3/CardAuthorization/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CardAuthorization/Evaluate</span></summary>

  **Description**

  This service domain is responsible for the real time card authorization decisions for credit/charge cards. EvCR Evaluate a card transaction authorization assessment

  **Documentation**

  This API path (/CardAuthorization/Evaluate) is used to create a new resource for evaluating card transaction authorization requests in real-time for credit/charge cards. It allows for a decision to be made regarding whether a specific card transaction should be authorized or declined based on certain assessment criteria.

  **Limitations**

  POST: Following REST best practices, the name of the path should be:

`POST /card-authorizations`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardAuthorization/{cardauthorizationid}/Update</span></summary>

  **Description**

  This service domain is responsible for the real time card authorization decisions for credit/charge cards. UpCR Update details of a card transaction authorization assessment

  **Documentation**

  This BIAN API path allows you to update the details of a card transaction authorization assessment for a specific card authorization ID. It is used to make changes or provide additional information related to the authorization decision for credit or charge cards in real time.

  **Limitations**

  PUT: The name of the path should be:

```
/CardAuthorizations/{cardauthorizationid}
``` 

In RESTful API design, it is recommended to use plural nouns for resource names. In this case, "CardAuthorizations" is more appropriate than "CardAuthorization". The specific action of updating a card authorization resource can be indicated by using the HTTP verb `PUT` when making a request to this endpoint.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardAuthorization/{cardauthorizationid}/Retrieve</span></summary>

  **Description**

  This service domain is responsible for the real time card authorization decisions for credit/charge cards. ReCR Retrieve details about an active car transaction authorization task

  **Documentation**

  This BIAN API path allows you to retrieve details about an active card transaction authorization task. Specifically, it provides information related to real-time decisions made for credit or charge cards during the authorization process. By using this endpoint with a specific card authorization ID, you can access details about the ongoing authorization task for a card transaction.

  **Limitations**

  GET: Based on REST best practices, the path '/CardAuthorization/{cardauthorizationid}/Retrieve' can be rephrased as '/card-authorizations/{cardauthorizationid}'. This naming convention uses lowercase letters, separates words with hyphens, and provides a clear and descriptive structure that follows RESTful principles.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardAuthorization/{cardauthorizationid}/DeviceCheck/{devicecheckid}/Update</span></summary>

  **Description**

  This service domain is responsible for the real time card authorization decisions for credit/charge cards. UpBQ Update details for the device check

  **Documentation**

  This API path allows you to update the details related to a device check that is part of a card authorization process. By specifying the unique IDs for both the card authorization and device check, you can use this API to make updates to specific information or data relevant to the device check procedure.

  **Limitations**

  PUT: The name of the path should be:

```
/CardAuthorizations/{cardauthorizationId}/DeviceChecks/{devicecheckId}
```

Here's a breakdown of the naming conventions used:
- Use plural nouns for collection resources: `/CardAuthorizations`, `/DeviceChecks`
- Use camel case for resource identifiers: `{cardauthorizationId}`, `{devicecheckId}`
- Use nouns to represent resources
- Avoid imperative verbs like "Update" since RESTful APIs use HTTP methods (PUT, PATCH, etc

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardAuthorization/{cardauthorizationid}/DeviceCheck/{devicecheckid}/Retrieve</span></summary>

  **Description**

  This service domain is responsible for the real time card authorization decisions for credit/charge cards. ReBQ Retrieve details about the device check

  **Documentation**

  This API path allows you to retrieve information about a device check related to a specific card authorization. It is used for real-time decision-making processes for credit or charge cards. By providing the card authorization ID and the device check ID, you can access details about the specific device check conducted in relation to the card authorization.

  **Limitations**

  GET: The name of the path should be:

"/card-authorizations/{cardauthorizationid}/device-checks/{devicecheckid}"

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CardAuthorization/{cardauthorizationid}/Authentication/{authenticationid}/Update</span></summary>

  **Description**

  This service domain is responsible for the real time card authorization decisions for credit/charge cards. UpBQ Update details for the card holder authentication check

  **Documentation**

  This API path allows you to update the details related to the authentication check for a specific card authorization. You can specify the card authorization ID and the authentication ID to identify the specific authentication check you want to update. By making a PUT request to this path, you can modify and update information relevant to the card holder's authentication process in real time, such as verifying their identity or confirming their authorization for a credit or charge card transaction.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/card-authorizations/{cardauthorizationid}/authentications/{authenticationid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardAuthorization/{cardauthorizationid}/Authentication/{authenticationid}/Retrieve</span></summary>

  **Description**

  This service domain is responsible for the real time card authorization decisions for credit/charge cards. ReBQ Retrieve details about the card holder authentication check

  **Documentation**

  This API path allows you to retrieve information about the authentication check for a specific card authorization and authentication ID. It relates to real-time decision-making for credit or charge card authorizations. You can use this to access details regarding the card holder's authentication process.

  **Limitations**

  GET: Based on REST best practices, the name of the path should reflect the resource it represents. One possible naming convention for the path you provided could be:

'/card-authorizations/{cardauthorizationid}/authentications/{authenticationid}'

This naming convention uses lowercase letters and hyphens to separate words in the path, making it more readable and consistent with RESTful guidelines.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardAuthorization/{cardauthorizationid}/CreditCheck/{creditcheckid}/Retrieve</span></summary>

  **Description**

  This service domain is responsible for the real time card authorization decisions for credit/charge cards. ReBQ Retrieve details about the credit check

  **Documentation**

  This API path allows you to retrieve information about a specific credit check associated with a card authorization. It is used to get details about the decision-making process for approving or denying credit/charge card transactions in real-time.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

```
/CardAuthorizations/{cardauthorizationid}/CreditChecks/{creditcheckid}
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardAuthorization/{cardauthorizationid}/FraudCheck/{fraudcheckid}/Retrieve</span></summary>

  **Description**

  This service domain is responsible for the real time card authorization decisions for credit/charge cards. ReBQ Retrieve details about the fraud check

  **Documentation**

  This API path allows you to retrieve details about a fraud check that was performed during the card authorization process for a specific credit or charge card transaction. By providing the card authorization ID and the fraud check ID, you can access information related to the fraud check decision that was made in real time for that particular transaction.

  **Limitations**

  GET: Following REST best practices, the name of the path should be: 

```
/CardAuthorizations/{cardauthorizationid}/FraudChecks/{fraudcheckid}
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /CardAuthorization/{cardauthorizationid}/StandIn/{standinid}/Retrieve</span></summary>

  **Description**

  This service domain is responsible for the real time card authorization decisions for credit/charge cards. ReBQ Retrieve details about the stand in check

  **Documentation**

  This API path is used to retrieve details about a stand-in check in the context of card authorization. It allows you to get information about a specific stand-in check that was performed for a particular card authorization transaction identified by the provided IDs. The stand-in check is a process used for making real-time card authorization decisions for credit or charge cards.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

GET /card-authorizations/{cardauthorizationid}/stand-ins/{standinid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
