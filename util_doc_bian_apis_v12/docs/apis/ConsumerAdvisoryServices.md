---
id: ConsumerAdvisoryServices
title: ConsumerAdvisoryServices
---

<h1 style='color:red;'>ConsumerAdvisoryServices</h1>

**BIAN Documentation:** [ConsumerAdvisoryServices v12](https://app.swaggerhub.com/apis/BIAN-3/ConsumerAdvisoryServices/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /ConsumerAdvisoryServices/Initiate</span></summary>

  **Description**

  Offer financial advisory services to consumer customers, possibly for a fee InCR Initiate a consumer advisory session

  **Documentation**

  This API path "/ConsumerAdvisoryServices/Initiate" allows you to create a new resource to initiate a consumer advisory session for financial advisory services offered to consumer customers. This could potentially involve providing guidance on managing finances, investments, or other financial matters. The session may also include discussing any fees or charges associated with the advisory services.

  **Limitations**

  POST: The name of the path '/ConsumerAdvisoryServices/Initiate' should be converted to a more RESTful format. In RESTful API design, resource names should be nouns representing the data entities, and action names should be HTTP verbs that act on those resources.

A more RESTful path for initiating a consumer advisory service could be something like '/consumer-advisories'. The action of initiating could be represented by an HTTP POST request to this path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ConsumerAdvisoryServices/{consumeradvisoryservicesid}/Update</span></summary>

  **Description**

  Offer financial advisory services to consumer customers, possibly for a fee UpCR Update details for a consumer advisory session

  **Documentation**

  This API path allows you to update the details of a consumer advisory session within the Consumer Advisory Services system. By using a PUT request, you can modify specific information related to a consumer advisory session identified by its unique ID. This could include updating financial advice provided to consumer customers or any other relevant details associated with the advisory session.

  **Limitations**

  PUT: The name of the path should be as follows:

'/ConsumerAdvisoryServices/{consumeradvisoryservicesid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ConsumerAdvisoryServices/{consumeradvisoryservicesid}/Request</span></summary>

  **Description**

  Offer financial advisory services to consumer customers, possibly for a fee RqCR Request manual intervention in a session

  **Documentation**

  This API path ("/ConsumerAdvisoryServices/{consumeradvisoryservicesid}/Request") is used to update an existing resource related to financial advisory services offered to consumer customers. The specific "consumeradvisoryservicesid" identifies the unique service request that needs to be updated. This action may trigger a manual intervention in a session, which could involve additional steps or approvals from human users. The overall purpose is to manage and modify consumer advisory services provided by the system, potentially involving fees for the services offered.

  **Limitations**

  PUT: The name of the path should be:

/consumer-advisory-services/{consumeradvisoryservicesid}/request

Following REST best practices, the path should use lowercase letters and separate words with hyphens for readability.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ConsumerAdvisoryServices/{consumeradvisoryservicesid}/Retrieve</span></summary>

  **Description**

  Offer financial advisory services to consumer customers, possibly for a fee ReCR Retrieve details about a consumer advisory session

  **Documentation**

  This API path allows you to retrieve details about a specific consumer advisory session within the Consumer Advisory Services. You can access information about a particular session by providing the unique identifier (consumeradvisoryservicesid) associated with that session. This feature enables you to retrieve important details related to financial advisory services provided to consumer customers, including possibly any fees associated with the session. It allows you to access this information using a GET request method.

  **Limitations**

  GET: The name of the path following REST best practices should be:

'/consumer-advisory-services/{consumer-advisory-services-id}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /ConsumerAdvisoryServices/{consumeradvisoryservicesid}/FinancialPlanning/Initiate</span></summary>

  **Description**

  Offer financial advisory services to consumer customers, possibly for a fee InBQ Initiate financial planning advisory session

  **Documentation**

  This API path allows a financial institution to offer financial advisory services to consumer customers by initiating a financial planning advisory session. The financial institution can create a new resource for this purpose and potentially charge a fee for the advisory services provided to consumers.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

/ConsumerAdvisoryServices/{consumeradvisoryservicesid}/FinancialPlanning/Initiation

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ConsumerAdvisoryServices/{consumeradvisoryservicesid}/FinancialPlanning/{financialplanningid}/Update</span></summary>

  **Description**

  Offer financial advisory services to consumer customers, possibly for a fee UpBQ Update details about a financial planning advisory session

  **Documentation**

  This API path allows you to update details about a financial planning advisory session within the Consumer Advisory Services. Essentially, it enables you to make changes or modifications to the information related to a specific financial planning session that was provided to a consumer customer. This can help keep the financial advisory services up to date and accurately reflect any changes or updates in the session details.

  **Limitations**

  PUT: The name of the path could be `/consumer-advisory-services/{consumeradvisoryservicesid}/financial-planning/{financialplanningid}` for following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ConsumerAdvisoryServices/{consumeradvisoryservicesid}/FinancialPlanning/{financialplanningid}/Retrieve</span></summary>

  **Description**

  Offer financial advisory services to consumer customers, possibly for a fee ReBQ Retrieve details about a financial planning advisory session

  **Documentation**

  This API path allows you to retrieve details about a specific financial planning advisory session within a consumer advisory service. By using the provided consumer advisory services ID and financial planning ID, you can access information such as the date of the session, topics covered, recommendations made, or any other relevant details related to the financial planning advisory session. This can help users access specific information about their financial planning sessions for consumer customers.

  **Limitations**

  GET: A more RESTful name for this path could be:

GET /consumer-advisory-services/{consumeradvisoryservicesid}/financial-planning/{financialplanningid}

In this updated path:
- The resource names are in lowercase and separated by hyphens for better readability.
- The HTTP method (GET) is explicitly included to indicate the action to retrieve.
- The path structure follows a more organized and descriptive pattern.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ConsumerAdvisoryServices/{consumeradvisoryservicesid}/TaxOptimization/Initiate</span></summary>

  **Description**

  Offer financial advisory services to consumer customers, possibly for a fee InBQ Initiate tax optimization advisory session

  **Documentation**

  This BIAN API path allows users to create a new resource to initiate a tax optimization advisory session within the Consumer Advisory Services. It offers financial advisory services to consumer customers, possibly for a fee. This API helps users to kickstart the process of providing advice on tax optimization to clients within the realm of consumer financial services.

  **Limitations**

  POST: The name of the path should ideally be:

/consumer-advisory-services/{consumeradvisoryservicesid}/tax-optimization/initiate

This naming convention follows REST best practices by using all lowercase letters, separated by dashes for better readability, and using plural forms for resource names where appropriate.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ConsumerAdvisoryServices/{consumeradvisoryservicesid}/TaxOptimization/{taxoptimizationid}/Update</span></summary>

  **Description**

  Offer financial advisory services to consumer customers, possibly for a fee UpBQ Update details about a tax optimization advisory session

  **Documentation**

  This API path allows you to update details about a tax optimization advisory session within the Consumer Advisory Services system. Specifically, it provides a way to make changes or revisions to information related to a tax optimization session for a consumer customer. By using the PUT method, you can modify existing data related to the tax optimization advisory session specified by the unique IDs provided in the path.

  **Limitations**

  PUT: A possible name for the path following REST best practices could be:

PUT /consumer-advisory-services/{consumeradvisoryservicesid}/tax-optimization/{taxoptimizationid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /ConsumerAdvisoryServices/{consumeradvisoryservicesid}/TaxOptimization/{taxoptimizationid}/Retrieve</span></summary>

  **Description**

  Offer financial advisory services to consumer customers, possibly for a fee ReBQ Retrieve details about a tax optimization advisory session

  **Documentation**

  This API path allows you to retrieve details about a specific tax optimization advisory session within the context of consumer advisory services. By providing the consumer advisory services ID and the tax optimization ID as parameters in the request, you can access information related to a particular tax optimization advisory session that was provided to a consumer customer. This information may include details such as tax optimization strategies, recommendations, and any other relevant data associated with the advisory session.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

/ConsumerAdvisoryServices/{consumeradvisoryservicesid}/TaxOptimizations/{taxoptimizationid}

</details>

<details open>
  <summary><span style='color:red;'>POST: /ConsumerAdvisoryServices/{consumeradvisoryservicesid}/ProductGuidance/Initiate</span></summary>

  **Description**

  Offer financial advisory services to consumer customers, possibly for a fee InBQ Initiate product guidance advisory session

  **Documentation**

  This API path allows clients to create a new resource to initiate a product guidance advisory session as part of the Consumer Advisory Services. Clients can offer financial advisory services to consumer customers by using this API to start a session where they provide guidance on financial products.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

'/consumer-advisory-services/{consumer-advisory-services-id}/product-guidance/initiate'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ConsumerAdvisoryServices/{consumeradvisoryservicesid}/ProductGuidance/{productguidanceid}/Update</span></summary>

  **Description**

  Offer financial advisory services to consumer customers, possibly for a fee UpBQ Update details about a product guidance advisory session

  **Documentation**

  This API path allows you to update the details of a product guidance advisory session within the Consumer Advisory Services system. You can use this to modify specific information related to a product guidance session that was previously created, such as updating recommendations or any other relevant details. It provides a way to keep this information current and accurate for consumer customers seeking financial advisory services.

  **Limitations**

  PUT: The name of the path should be `/consumer-advisory-services/{consumer-advisory-services-id}/product-guidance/{product-guidance-id}` for following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ConsumerAdvisoryServices/{consumeradvisoryservicesid}/ProductGuidance/{productguidanceid}/Retrieve</span></summary>

  **Description**

  Offer financial advisory services to consumer customers, possibly for a fee ReBQ Retrieve details about a product guidance advisory session

  **Documentation**

  This API path allows you to retrieve details about a product guidance advisory session within the Consumer Advisory Services. You can access specific information related to a session identified by the consumer advisory services ID and the product guidance ID. This can help provide insight and guidance to consumers seeking financial advice, potentially for a fee.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

GET /consumer-advisory-services/{consumer-advisory-services-id}/product-guidance/{product-guidance-id}

</details>

<details open>
  <summary><span style='color:red;'>POST: /ConsumerAdvisoryServices/{consumeradvisoryservicesid}/ServiceFees/Initiate</span></summary>

  **Description**

  Offer financial advisory services to consumer customers, possibly for a fee InBQ Initialize service fee processing for an advisory session

  **Documentation**

  This BIAN API path initializes the processing of service fees for a financial advisory session provided to consumer customers. It allows the system to create a new resource for handling the service fee aspect of the advisory services offered. This could involve charging a fee to consumers for the financial advice they receive.

  **Limitations**

  POST: The name of the path should be:

/ConsumerAdvisoryServices/{consumeradvisoryservicesid}/ServiceFees

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ConsumerAdvisoryServices/{consumeradvisoryservicesid}/ServiceFees/{servicefeesid}/Update</span></summary>

  **Description**

  Offer financial advisory services to consumer customers, possibly for a fee UpBQ Update details of service fees for an advisory session

  **Documentation**

  This API path allows you to update the details of service fees for an advisory session within the Consumer Advisory Services system. By making a PUT request to the specified endpoint, you can modify and save changes to the service fees associated with a specific consumer advisory service ID and service fee ID. This can include updating values such as the fee amount, type of fee, or any other relevant information related to the service fees for the advisory session.

  **Limitations**

  PUT: The name of the path should be `/consumer-advisory-services/{consumeradvisoryservicesid}/service-fees/{servicefeesid}`.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ConsumerAdvisoryServices/{consumeradvisoryservicesid}/ServiceFees/{servicefeesid}/Execute</span></summary>

  **Description**

  Offer financial advisory services to consumer customers, possibly for a fee ExBQ Execute/apply a fee for an advisory session

  **Documentation**

  This API path allows you to update and apply a fee for a financial advisory session provided to a consumer customer. By using the endpoint, you can manage and execute the service fee associated with a specific consumer advisory service.

  **Limitations**

  PUT: Based on REST best practices, the path should be named:

/ConsumerAdvisoryServices/{consumeradvisoryservicesid}/ServiceFees/{servicefeesid}/Execution

</details>

<details open>
  <summary><span style='color:red;'>GET: /ConsumerAdvisoryServices/{consumeradvisoryservicesid}/ServiceFees/{servicefeesid}/Retrieve</span></summary>

  **Description**

  Offer financial advisory services to consumer customers, possibly for a fee ReBQ Retrieve details about service fees for an advisory session

  **Documentation**

  This BIAN API path allows you to retrieve details about the service fees for a specific consumer advisory service session. By accessing this path with the appropriate IDs, you can gather information on the fees associated with providing financial advisory services to consumer customers. This could include the amount or structure of the fees charged for the advisory session.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

/consumer-advisory-services/{consumeradvisoryservicesid}/service-fees/{servicefeesid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
