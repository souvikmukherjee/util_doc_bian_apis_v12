---
id: SalesProductAgreement
title: SalesProductAgreement
---

<h1 style='color:red;'>SalesProductAgreement</h1>

**BIAN Documentation:** [SalesProductAgreement v12](https://app.swaggerhub.com/apis/BIAN-3/SalesProductAgreement/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /SalesProductAgreement/Evaluate</span></summary>

  **Description**

  This service domain maintains a structured legal agreement defining the contractual terms and conditions for an in-force product for a customer. It is subordinate to the customer's master agreement that is maintained by the Customer Agreement service domain EvCR Establish a sales product agreement

  **Documentation**

  This API path is used to create a new resource for a structured legal agreement related to a sales product or service. This agreement defines the contractual terms and conditions specifically for a customer's in-force product. It is a part of the larger customer agreement maintained by the Customer Agreement service. The purpose is to establish and set the terms for the sales product agreement within the context of the customer's overall contractual arrangements.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be more resource-oriented and focused on the resource being manipulated. 

A suggestion for a more resource-oriented path name could be: 

/sales-products/agreements/{agreementId}/evaluate

In this path structure:
- "sales-products" represents the collection of sales products.
- "agreements" represents the collection of agreements related to sales products.
- "{agreementId}" is a placeholder for the specific agreement being evaluated.

This naming

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SalesProductAgreement/{salesproductagreementid}/Update</span></summary>

  **Description**

  This service domain maintains a structured legal agreement defining the contractual terms and conditions for an in-force product for a customer. It is subordinate to the customer's master agreement that is maintained by the Customer Agreement service domain UpCR Update details of an active sales product agreement

  **Documentation**

  This API path allows you to update the details of an existing sales product agreement by specifying the ID of the agreement you wish to modify. The agreement contains the specific terms and conditions that define the contractual relationship between the customer and the product being offered. By utilizing this API, you can make changes to the agreement's content, ensuring that it accurately reflects the current arrangement in place for the product being sold to the customer.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/sales-product-agreements/{salesproductagreementid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SalesProductAgreement/{salesproductagreementid}/Control</span></summary>

  **Description**

  This service domain maintains a structured legal agreement defining the contractual terms and conditions for an in-force product for a customer. It is subordinate to the customer's master agreement that is maintained by the Customer Agreement service domain CoCR Control the processing of an agreement

  **Documentation**

  This API path allows you to update an existing structured legal agreement that defines the terms and conditions of a product sold to a customer. The agreement is specific to the sales product and is part of the customer's overall master agreement. By using this API, you can control and update the processing of this agreement information.

  **Limitations**

  PUT: A suitable name for the path '/SalesProductAgreement/{salesproductagreementid}/Control' following REST best practices might be:

'/sales-product-agreements/{salesproductagreementid}/controls'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SalesProductAgreement/{salesproductagreementid}/Exchange</span></summary>

  **Description**

  This service domain maintains a structured legal agreement defining the contractual terms and conditions for an in-force product for a customer. It is subordinate to the customer's master agreement that is maintained by the Customer Agreement service domain EcCR Accept, reject etc an agreement

  **Documentation**

  This API path allows you to update an existing sales product agreement by exchanging or modifying the contractual terms and conditions for a particular product that a customer has with your business. It is a part of the overall legal framework that governs the relationship between your business and the customer. The update can involve accepting, rejecting, or making changes to the agreement, ensuring that both parties are aware of and agree to the terms outlined.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/SalesProductAgreement/{salesproductagreementid}/Exchanges

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SalesProductAgreement/{salesproductagreementid}/Request</span></summary>

  **Description**

  This service domain maintains a structured legal agreement defining the contractual terms and conditions for an in-force product for a customer. It is subordinate to the customer's master agreement that is maintained by the Customer Agreement service domain RqCR Request check of a proposed activity is compatible

  **Documentation**

  This API path allows you to update an existing sales product agreement by providing a request to check if a proposed activity aligns with the terms and conditions of the agreement. The sales product agreement outlines the contractual terms and conditions of a product or service for a customer, and it is part of the overall customer agreement managed by a separate service domain. By using this API, you can ensure that any proposed activities comply with the existing sales product agreement.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/sales-product-agreements/{salesproductagreementid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SalesProductAgreement/{salesproductagreementid}/Grant</span></summary>

  **Description**

  This service domain maintains a structured legal agreement defining the contractual terms and conditions for an in-force product for a customer. It is subordinate to the customer's master agreement that is maintained by the Customer Agreement service domain GrCR Obtain grant authority to act under the terms of the agreement

  **Documentation**

  This API path allows you to update an existing sales product agreement by granting authority to act under the terms of the agreement. It is used to define and update the contractual terms and conditions for a specific product that a customer has. The agreement is part of the overall customer agreement maintained by another service domain. Using this path, you can make changes to the agreement to ensure that both parties abide by the agreed-upon terms and conditions.

  **Limitations**

  PUT: A recommended name for the specified path following REST best practices would be: 

```
/SalesProductAgreements/{salesproductagreementid}/Grant
``` 

Key points to consider are using plural nouns in the path and using curly braces to indicate a variable in the path.

</details>

<details open>
  <summary><span style='color:red;'>GET: /SalesProductAgreement/{salesproductagreementid}/Retrieve</span></summary>

  **Description**

  This service domain maintains a structured legal agreement defining the contractual terms and conditions for an in-force product for a customer. It is subordinate to the customer's master agreement that is maintained by the Customer Agreement service domain ReCR Retrieve details about a sales product agreement

  **Documentation**

  This API path allows you to retrieve detailed information about a specific sales product agreement identified by the salesproductagreementid. The sales product agreement is a formal legal document that outlines the terms and conditions of a product that a customer has purchased or subscribed to. This agreement is specific to an individual product and is part of the overall contractual framework managed by the Customer Agreement service domain. By using this API, you can access key details of the sales product agreement for reference or further processing as needed.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:
/SalesProductAgreements/{salesproductagreementid}

</details>

<details open>
  <summary><span style='color:red;'>POST: /SalesProductAgreement/{salesproductagreementid}/LegalTerms/Evaluate</span></summary>

  **Description**

  This service domain maintains a structured legal agreement defining the contractual terms and conditions for an in-force product for a customer. It is subordinate to the customer's master agreement that is maintained by the Customer Agreement service domain EvBQ Establish the legal terms for a sales product agreement

  **Documentation**

  This API path allows for the creation of a new resource that evaluates and establishes the legal terms for a sales product agreement. It is part of a service domain that manages structured legal agreements defining the terms and conditions for a specific product purchased by a customer. These legal terms are important in ensuring that both the customer and the provider abide by the agreed-upon contractual terms. The service works within the framework of a larger customer agreement maintained by another service domain.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

`/sales-product-agreements/{salesproductagreementid}/legal-terms/evaluate`

In this format, the words are lowercase and separated by hyphens to make the URL more readable and user-friendly.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SalesProductAgreement/{salesproductagreementid}/LegalTerms/{legaltermsid}/Update</span></summary>

  **Description**

  This service domain maintains a structured legal agreement defining the contractual terms and conditions for an in-force product for a customer. It is subordinate to the customer's master agreement that is maintained by the Customer Agreement service domain UpBQ Update the legal terms for a sales product agreement

  **Documentation**

  This API path is used to update the legal terms for a sales product agreement. It allows you to modify the contractual terms and conditions of a product that is currently active for a customer. The legal terms are defined within a structured agreement and are specifically related to the sales product agreement. This update operation is done within the context of the customer's master agreement, which is managed by the Customer Agreement service domain.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

PUT /sales-product-agreements/{salesproductagreementid}/legal-terms/{legaltermsid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /SalesProductAgreement/{salesproductagreementid}/LegalTerms/{legaltermsid}/Retrieve</span></summary>

  **Description**

  This service domain maintains a structured legal agreement defining the contractual terms and conditions for an in-force product for a customer. It is subordinate to the customer's master agreement that is maintained by the Customer Agreement service domain ReBQ Retrieve details about the legal terms of an agreement

  **Documentation**

  This API path allows you to retrieve information about the legal terms and conditions of a sales product agreement for a customer. It is specifically for an in-force product and provides details about the contractual terms outlined in the agreement. This API operates within the Sales Product Agreement service domain and is linked to the customer's master agreement through the Customer Agreement service domain.

  **Limitations**

  GET: The name of the path should be:

GET /sales-product-agreements/{salesproductagreementid}/legal-terms/{legaltermsid}

</details>

<details open>
  <summary><span style='color:red;'>POST: /SalesProductAgreement/{salesproductagreementid}/RegulatoryTerms/Evaluate</span></summary>

  **Description**

  This service domain maintains a structured legal agreement defining the contractual terms and conditions for an in-force product for a customer. It is subordinate to the customer's master agreement that is maintained by the Customer Agreement service domain EvBQ Establish the regulatory terms for a sales product agreement

  **Documentation**

  This API path allows you to create and evaluate the regulatory terms associated with a sales product agreement. It is used to define and confirm the legal terms and conditions for a specific product that a customer has purchased. The regulatory terms are part of the overall agreement between the customer and the service provider, outlining the rules and requirements that both parties must adhere to. By using this API, you can ensure that the necessary regulatory terms are established correctly for the sales product agreement.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

/sales-product-agreements/{salesproductagreementid}/regulatory-terms/evaluate

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SalesProductAgreement/{salesproductagreementid}/RegulatoryTerms/{regulatorytermsid}/Update</span></summary>

  **Description**

  This service domain maintains a structured legal agreement defining the contractual terms and conditions for an in-force product for a customer. It is subordinate to the customer's master agreement that is maintained by the Customer Agreement service domain UpBQ Update the regulatory terms for a sales product agreement

  **Documentation**

  This BIAN API path allows you to update the regulatory terms associated with a specific sales product agreement identified by {salesproductagreementid} and {regulatorytermsid}. Regulatory terms are the legal requirements and conditions that govern the agreement for a product or service that a customer has purchased. By using this API endpoint with the PUT method, you can make changes to the regulatory terms within an existing sales product agreement. This ensures that the agreement reflects any updated regulations or compliance requirements related to the product being provided to the customer.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

PUT /salesproductagreements/{salesproductagreementid}/regulatoryterms/{regulatorytermsid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /SalesProductAgreement/{salesproductagreementid}/RegulatoryTerms/{regulatorytermsid}/Retrieve</span></summary>

  **Description**

  This service domain maintains a structured legal agreement defining the contractual terms and conditions for an in-force product for a customer. It is subordinate to the customer's master agreement that is maintained by the Customer Agreement service domain ReBQ Retrieve details about the regulatory terms of an agreement

  **Documentation**

  This API path allows you to retrieve details about the regulatory terms of a specific sales product agreement. It is designed to provide access to information related to the contractual terms and conditions for a product that is currently in effect for a customer. By using this API, you can access information about the legal agreement governing the product and understand the regulatory terms associated with it.

  **Limitations**

  GET: Based on RESTful best practices, the name for the path should be:
`/sales-product-agreements/{salesproductagreementid}/regulatory-terms/{regulatorytermsid}`

</details>

<details open>
  <summary><span style='color:red;'>POST: /SalesProductAgreement/{salesproductagreementid}/PolicyTerms/Evaluate</span></summary>

  **Description**

  This service domain maintains a structured legal agreement defining the contractual terms and conditions for an in-force product for a customer. It is subordinate to the customer's master agreement that is maintained by the Customer Agreement service domain EvBQ Establish the corporate policy terms for a sales product agreement

  **Documentation**

  This API path allows you to create a new resource for evaluating the corporate policy terms of a sales product agreement. It deals with defining the contractual terms and conditions for a product that a customer has purchased. The agreement is a legal document that outlines the specific details related to the product and its use, and it is part of the overall agreement maintained by the Customer Agreement service domain. By utilizing this API path, you can establish and evaluate the policies associated with sales product agreements in a structured and organized manner.

  **Limitations**

  POST: The name of the path `/SalesProductAgreement/{salesproductagreementid}/PolicyTerms/Evaluate` following REST best practices should be something like:

`GET /sales-product-agreements/{salesproductagreementid}/policy-terms/evaluation`

Ensure to use lowercase letters with hyphens to separate words for better readability and consistency with REST conventions.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /SalesProductAgreement/{salesproductagreementid}/PolicyTerms/{policytermsid}/Update</span></summary>

  **Description**

  This service domain maintains a structured legal agreement defining the contractual terms and conditions for an in-force product for a customer. It is subordinate to the customer's master agreement that is maintained by the Customer Agreement service domain UpBQ Update the corporate policy terms for a sales product agreement

  **Documentation**

  This API path allows users to update the corporate policy terms for a specific sales product agreement. The user needs to provide the ID of the sales product agreement and the ID of the policy terms that they want to update. By sending a PUT request, the user can modify the policy terms within the structured legal agreement that defines the terms and conditions for a product being offered to a customer. This update is part of the overall management of the contractual agreements related to the sales product within the organization's system.

  **Limitations**

  PUT: A possible name following REST best practices for the path '/SalesProductAgreement/{salesproductagreementid}/PolicyTerms/{policytermsid}/Update' could be:

'/sales-product-agreements/{salesproductagreementid}/policy-terms/{policytermsid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /SalesProductAgreement/{salesproductagreementid}/PolicyTerms/{policytermsid}/Retrieve</span></summary>

  **Description**

  This service domain maintains a structured legal agreement defining the contractual terms and conditions for an in-force product for a customer. It is subordinate to the customer's master agreement that is maintained by the Customer Agreement service domain ReBQ Retrieve details about the corporate policy terms of an agreement

  **Documentation**

  This BIAN API path allows you to retrieve information about the corporate policy terms of a specific sales product agreement. It is a part of a service that manages legal agreements that outline the terms and conditions for products provided to customers. By using this API endpoint with the appropriate IDs, you can access details about the policy terms associated with a particular sales product agreement. This information is essential for understanding and complying with the contractual obligations set out in the agreement.

  **Limitations**

  GET: Based on REST best practices, the name of the path could be simplified as follows:

/salesproducts/{salesproductagreementid}/policyterms/{policytermsid}/retrieve

This naming convention follows the guidelines of using lowercase letters, plural nouns for collections, and specific IDs for resource identifiers.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
