---
id: ServicingMandate
title: ServicingMandate
---

<h1 style='color:red;'>ServicingMandate</h1>

**BIAN Documentation:** [ServicingMandate v12](https://app.swaggerhub.com/apis/BIAN-3/ServicingMandate/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /ServicingMandate/Evaluate</span></summary>

  **Description**

  This service domain maintains the allowed customer servicing arrangements for a service provider covering general access to the bank's products and services and optionally customer specific arrangements EvCR Agree terms for a third party servicing mandate

  **Documentation**

  This API path is used for evaluating and creating new customer servicing arrangements for a service provider, specifically in terms of access to the bank's products and services. It provides a way for the bank and a third party service provider to agree on the terms for customer servicing, including how the services will be provided and what specific arrangements are in place for each customer.

  **Limitations**

  POST: If the path '/ServicingMandate/Evaluate' followed all REST best practices, the name of the path should reflect a resource, not a verb. A suitable name for this path could be '/servicing-mandates'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ServicingMandate/{servicingmandateid}/Update</span></summary>

  **Description**

  This service domain maintains the allowed customer servicing arrangements for a service provider covering general access to the bank's products and services and optionally customer specific arrangements UpCR Update terms for a third part mandate

  **Documentation**

  This API path allows you to update existing customer servicing arrangements for a service provider related to general access to the bank's products and services. It also provides the option to update specific arrangements for a third-party mandate.

  **Limitations**

  PUT: The name of the path '/ServicingMandate/{servicingmandateid}/Update' should ideally be '/ServicingMandates/{servicingmandateid}'. This follows REST best practices by using a plural noun ('ServicingMandates') to represent a collection of resources and a specific identifier ('{servicingmandateid}') to uniquely identify a single resource within that collection.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ServicingMandate/{servicingmandateid}/Control</span></summary>

  **Description**

  This service domain maintains the allowed customer servicing arrangements for a service provider covering general access to the bank's products and services and optionally customer specific arrangements CoCR Control the handling of a third party mandate (e.g. terminate)

  **Documentation**

  This API path is used to update the control of a specific customer servicing arrangement linked to a service provider within a bank. The servicing mandate includes arrangements for accessing the bank's products and services, as well as any specific agreements tailored to individual customers. Through this path, the bank can manage the handling of third-party mandates associated with the servicing arrangement, such as terminating those mandates if necessary.

  **Limitations**

  PUT: The name of the path should be:

`/servicingmandates/{servicingmandateid}/controls`

Following REST best practices:
- Use lowercase letters in the path
- Use plural nouns for collections (i.e., 'servicingmandates')
- Use the specific resource name ('controls') for actions on an individual resource

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ServicingMandate/{servicingmandateid}/Exchange</span></summary>

  **Description**

  This service domain maintains the allowed customer servicing arrangements for a service provider covering general access to the bank's products and services and optionally customer specific arrangements EcCR Accept, verify, reject, etc a third party servicing mandate

  **Documentation**

  This API path allows you to update an existing servicing mandate by providing a specific servicing mandate ID as a parameter. The servicing mandate manages the allowed customer servicing arrangements for a service provider related to accessing the bank's products and services. It also allows for managing customer-specific arrangements such as accepting, verifying, or rejecting a third-party servicing mandate. By using this PUT method, you can make changes to the specified servicing mandate within the system.

  **Limitations**

  PUT: The name of the path should be `/servicing-mandates/{servicingmandateid}/exchanges` following REST best practices. It is recommended to use lowercase letters, use hyphens to separate words, and use plural nouns for resource names in the URL path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ServicingMandate/{servicingmandateid}/Request</span></summary>

  **Description**

  This service domain maintains the allowed customer servicing arrangements for a service provider covering general access to the bank's products and services and optionally customer specific arrangements RqCR Request manual intervention in a third party mandate (e.g. reinstate after production issues)

  **Documentation**

  This API path allows you to update an existing customer servicing mandate request manually. For example, if there were production issues that affected a third party mandate, you can use this API to request manual intervention, such as reinstating the mandate. It is aimed at maintaining customer servicing arrangements for a service provider related to the bank's products and services.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/ServicingMandates/{servicingmandateId}/Request

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ServicingMandate/{servicingmandateid}/Grant</span></summary>

  **Description**

  This service domain maintains the allowed customer servicing arrangements for a service provider covering general access to the bank's products and services and optionally customer specific arrangements GrCR Grant access under the third party mandate

  **Documentation**

  This API path allows you to update an existing resource related to customer servicing arrangements for a service provider. Specifically, it is used to grant access under a third-party mandate for a servicing mandate identified by a unique ID (servicingmandateid). This update could involve general access to the bank's products and services, as well as any customer-specific arrangements that may be in place.

  **Limitations**

  PUT: The name of the path could be '/servicing-mandates/{servicingmandateid}/grant'. Using lowercase letters and hyphens to separate words is a common practice in REST API naming conventions.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ServicingMandate/{servicingmandateid}/Retrieve</span></summary>

  **Description**

  This service domain maintains the allowed customer servicing arrangements for a service provider covering general access to the bank's products and services and optionally customer specific arrangements ReCR Retrieve details about a third party mandate

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific customer servicing mandate by providing the unique identifier (servicingmandateid) associated with it. The mandate may include information about the customer's access to the bank's products and services, as well as any customer-specific arrangements that have been agreed upon. This API is useful for accessing information related to third-party mandates within the banking system.

  **Limitations**

  GET: The name of the path should be `/servicing-mandates/{servicingmandateid}`.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ServicingMandate/{servicingmandateid}/CustomerMandate/Evaluate</span></summary>

  **Description**

  This service domain maintains the allowed customer servicing arrangements for a service provider covering general access to the bank's products and services and optionally customer specific arrangements EvBQ Agree terms for a customer mandate under the service mandate

  **Documentation**

  This specific API path allows you to create a new customer mandate evaluation under a servicing mandate for a service provider. The customer mandate evaluation involves determining and agreeing to the terms for a customer to access the bank's products and services based on the service mandate. This process involves evaluating and potentially establishing specific arrangements tailored to the customer's needs within the servicing mandate framework.

  **Limitations**

  POST: Based on RESTful API naming conventions, the path '/ServicingMandate/{servicingmandateid}/CustomerMandate/Evaluate' could be simplified and improved in a more RESTful way. 

A better naming convention could be something like '/servicingmandates/{servicingmandateid}/customermandates/evaluate', where the resources are represented in a clear and hierarchical manner. 

This naming convention conveys a clear structure and hierarchy to the API endpoints, making it easier

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ServicingMandate/{servicingmandateid}/CustomerMandate/{customermandateid}/Update</span></summary>

  **Description**

  This service domain maintains the allowed customer servicing arrangements for a service provider covering general access to the bank's products and services and optionally customer specific arrangements UpBQ Update details of the customer mandate

  **Documentation**

  This API path allows you to update details of a customer mandate within the servicing mandate service domain for a service provider. The mandate specifies the allowed customer servicing arrangements, including general access to the bank's products and services, as well as any specific arrangements for individual customers. By using a PUT request, you can modify the existing information related to a specific customer mandate identified by the customer mandate ID within the servicing mandate identified by the servicing mandate ID.

  **Limitations**

  PUT: The name of the path could be: 

`/servicingmandates/{servicingmandateid}/customermandates/{customermandateid}`

This path follows REST best practices by using all lowercase letters, using plural nouns for resources, and using resource IDs to uniquely identify specific resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ServicingMandate/{servicingmandateid}/CustomerMandate/{customermandateid}/Control</span></summary>

  **Description**

  This service domain maintains the allowed customer servicing arrangements for a service provider covering general access to the bank's products and services and optionally customer specific arrangements CoBQ Control the handling of the customer mandate (e.g. suspend)

  **Documentation**

  This API path allows you to update the control settings related to a specific customer mandate within a servicing mandate. For example, you can adjust how a customer mandate is handled, such as suspending it. This is part of a service domain that manages the customer servicing arrangements for a service provider, including access to the bank's products and services.

  **Limitations**

  PUT: The name for the path should be:
'/servicing-mandates/{servicingmandateid}/customer-mandates/{customermandateid}/controls'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ServicingMandate/{servicingmandateid}/CustomerMandate/{customermandateid}/Exchange</span></summary>

  **Description**

  This service domain maintains the allowed customer servicing arrangements for a service provider covering general access to the bank's products and services and optionally customer specific arrangements EcBQ Accept, verify, reject etc. a customer mandate

  **Documentation**

  This API path allows you to update an existing customer mandate within the servicing mandate service domain. A customer mandate refers to the allowed arrangements between a service provider (such as a bank) and a customer for accessing products and services. By using this API, you can modify the general access arrangements as well as any specific customer-related arrangements, such as accepting, verifying, or rejecting a mandate.

  **Limitations**

  PUT: A suitable name for the path could be:

`/servicing-mandates/{servicingmandateid}/customer-mandates/{customermandateid}/exchanges`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ServicingMandate/{servicingmandateid}/CustomerMandate/{customermandateid}/Grant</span></summary>

  **Description**

  This service domain maintains the allowed customer servicing arrangements for a service provider covering general access to the bank's products and services and optionally customer specific arrangements GrBQ Grant access under the customer mandate

  **Documentation**

  This API path allows you to update an existing customer mandate under a servicing mandate. It is used to manage the customer servicing arrangements provided by a service provider, which includes granting access to the bank's products and services based on specific customer mandates. By making a PUT request to this endpoint with the servicing mandate ID and customer mandate ID, you can update the permissions and access levels granted to customers under their respective mandates.

  **Limitations**

  PUT: The name of the path should be:

'/servicing-mandates/{servicingmandateid}/customer-mandates/{customermandateid}/grant'

</details>

<details open>
  <summary><span style='color:red;'>GET: /ServicingMandate/{servicingmandateid}/CustomerMandate/{customermandateid}/Retrieve</span></summary>

  **Description**

  This service domain maintains the allowed customer servicing arrangements for a service provider covering general access to the bank's products and services and optionally customer specific arrangements ReBQ Retrieve details about the customer mandate

  **Documentation**

  This API path allows you to retrieve details about a specific customer mandate within the servicing mandate system. It provides information about the allowed customer servicing arrangements for a service provider, including general access to the bank's products and services, as well as any customer-specific arrangements that may be in place. By using this API endpoint, you can access specific details about a customer's mandate within the system.

  **Limitations**

  GET: A RESTful naming convention for the path you provided could be:

'/servicing-mandates/{servicingmandateid}/customer-mandates/{customermandateid}/retrieve'

This path uses lowercase letters, separates words with hyphens, and identifies resources in a hierarchical manner according to the relationships between servicing mandates and customer mandates.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
