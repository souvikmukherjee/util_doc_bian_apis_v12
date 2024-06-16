---
id: ContractorandSupplierAgreement
title: ContractorandSupplierAgreement
---

<h1 style='color:red;'>ContractorandSupplierAgreement</h1>

**BIAN Documentation:** [ContractorandSupplierAgreement v12](https://app.swaggerhub.com/apis/BIAN-3/ContractorandSupplierAgreement/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /ContractorandSupplierAgreement/{contractorandsupplieragreementid}/Control</span></summary>

  **Description**

  This Service Domain maintains appropriate supplier agreements/contracts Control Supplier Agreement

  **Documentation**

  This BIAN API path allows you to update an existing contractor and supplier agreement in the system. The purpose is to manage and control the agreements/contracts with suppliers to ensure they are appropriate and up to date. It provides a way to make changes or updates to the details of a specific agreement identified by its unique ID.

  **Limitations**

  PUT: The name of the path should be:

/contractor-and-supplier-agreements/{contractor-and-supplier-agreement-id}/controls

Remember to use lowercase letters, separate words with hyphens, and use plural nouns for consistency with REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ContractorandSupplierAgreement/Evaluate</span></summary>

  **Description**

  This Service Domain maintains appropriate supplier agreements/contracts Evaluate Supplier Agreement

  **Documentation**

  This API path allows users to create a new resource to evaluate supplier agreements or contracts within the Contractor and Supplier Agreement service domain. This evaluation process helps ensure that the agreements with suppliers are appropriate and compliant.

  **Limitations**

  POST: The path '/contractor-supplier-agreements/evaluate' would be a good choice following REST best practices. It uses lowercase letters, words are separated by hyphens, and it is clear and descriptive.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ContractorandSupplierAgreement/{contractorandsupplieragreementid}/Exchange</span></summary>

  **Description**

  This Service Domain maintains appropriate supplier agreements/contracts Exchange Supplier Agreement

  **Documentation**

  This BIAN API path allows you to update an existing contractor and supplier agreement by exchanging supplier agreement information. It is used within the Service Domain related to managing supplier agreements and contracts. By sending a PUT request to this path with the specific contractor and supplier agreement ID, you can update the details of the agreement with new information related to suppliers.

  **Limitations**

  PUT: Based on REST best practices, the path should be named in a way that communicates the resource it represents. 

A descriptive and meaningful name for the path '/ContractorandSupplierAgreement/{contractorandsupplieragreementid}/Exchange' could be:

'/contracts/{contractId}/exchanges' 

or 

'/agreements/{agreementId}/exchanges' 

These names are clear, concise, and accurately represent the resource being accessed.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ContractorandSupplierAgreement/{contractorandsupplieragreementid}/Grant</span></summary>

  **Description**

  This Service Domain maintains appropriate supplier agreements/contracts Grant Supplier Agreement

  **Documentation**

  This BIAN API path allows you to update an existing Supplier Agreement by granting specific rights or permissions to a contractor or supplier identified by the contractorandsupplieragreementid. It is used to maintain and modify Supplier Agreements in a system that manages contracts with contractors and suppliers.

  **Limitations**

  PUT: The name of the path could be: 

/contractor-and-supplier-agreements/{contractor-and-supplier-agreement-id}/grant

</details>

<details open>
  <summary><span style='color:red;'>GET: /ContractorandSupplierAgreement/{contractorandsupplieragreementid}/Notify</span></summary>

  **Description**

  This Service Domain maintains appropriate supplier agreements/contracts Notify Supplier Agreement

  **Documentation**

  This API path retrieves information about a specific contractor and supplier agreement by its unique ID. It is used to access details about an agreement between a company and a supplier, such as terms and conditions, deliverables, and other relevant contract information.

  **Limitations**

  GET: The name of the path should be: 
'/contractor-and-supplier-agreements/{contractorandsupplieragreementid}/notify' 

Following REST best practices, it is recommended to use lowercase letters, hyphens to separate words, and plural nouns for resource names.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ContractorandSupplierAgreement/{contractorandsupplieragreementid}/Request</span></summary>

  **Description**

  This Service Domain maintains appropriate supplier agreements/contracts Request Supplier Agreement

  **Documentation**

  This API path is used to update an existing contractor and supplier agreement by making a request for the agreement. It is a part of a service domain that handles the management of supplier agreements and contracts. By calling this API with the specific ID of the agreement, you can update the details or status of the agreement.

  **Limitations**

  PUT: The name of the path should be as follows:
'/contractor-and-supplier-agreements/{contractor-and-supplier-agreement-id}/request'

</details>

<details open>
  <summary><span style='color:red;'>GET: /ContractorandSupplierAgreement/{contractorandsupplieragreementid}/Retrieve</span></summary>

  **Description**

  This Service Domain maintains appropriate supplier agreements/contracts Retrieve Supplier Agreement

  **Documentation**

  This BIAN API path allows users to retrieve information about a specific contractor and supplier agreement by providing the unique identifier of the agreement (contractorandsupplieragreementid). It is used to access and view details of supplier agreements or contracts that are stored in the system.

  **Limitations**

  GET: The name of the path should be:

GET '/contractor-supplier-agreements/{contractor-and-supplier-agreement-id}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ContractorandSupplierAgreement/{contractorandsupplieragreementid}/Update</span></summary>

  **Description**

  This Service Domain maintains appropriate supplier agreements/contracts Update Supplier Agreement

  **Documentation**

  This API path allows a user to update an existing contractor or supplier agreement by specifying the ID of the agreement they wish to update. The user can use this endpoint to make changes to the details or terms of the agreement as needed.

  **Limitations**

  PUT: The name of the path should be 
'/contractor-and-supplier-agreements/{contractorandsupplieragreementid}' for updating a specific contractor and supplier agreement resource.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ContractorandSupplierAgreement/{contractorandsupplieragreementid}/LegalTerm/Evaluate</span></summary>

  **Description**

  This Service Domain maintains appropriate supplier agreements/contracts Evaluate Legal Term

  **Documentation**

  This BIAN API path allows you to create a new resource for evaluating the legal terms of a specific contractor and supplier agreement. This API is part of a service that manages contracts and agreements with suppliers and contractors, ensuring that legal terms are properly assessed and evaluated for compliance and effectiveness.

  **Limitations**

  POST: The name of the path should be:

/contractor-and-supplier-agreements/{contractor-and-supplier-agreement-id}/legal-terms/evaluate

</details>

<details open>
  <summary><span style='color:red;'>POST: /ContractorandSupplierAgreement/{contractorandsupplieragreementid}/PolicyTerm/Evaluate</span></summary>

  **Description**

  This Service Domain maintains appropriate supplier agreements/contracts Evaluate Policy Term

  **Documentation**

  This API path allows a user to create a new resource related to evaluating policy terms within a specific contractor and supplier agreement. It is a part of a service domain that manages supplier agreements and contracts. By making a POST request to this path with the necessary data, users can assess and analyze the policy terms within a particular agreement. This functionality helps in ensuring that the supplier agreements are appropriate and in compliance with the required terms.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

'/contractor-supplier-agreements/{contractorandsupplieragreementid}/policy-terms/evaluate'

</details>

<details open>
  <summary><span style='color:red;'>POST: /ContractorandSupplierAgreement/{contractorandsupplieragreementid}/RegulatoryTerm/Evaluate</span></summary>

  **Description**

  This Service Domain maintains appropriate supplier agreements/contracts Evaluate Regulatory Term

  **Documentation**

  This API path allows the creation of a new regulatory term evaluation related to a specific contractor and supplier agreement. The purpose is to ensure that the agreements/contracts with suppliers are compliant with relevant regulations.

  **Limitations**

  POST: A more RESTful naming for the path '/ContractorandSupplierAgreement/{contractorandsupplieragreementid}/RegulatoryTerm/Evaluate' could be:

'/contractor-supplier-agreements/{agreementId}/regulatory-terms/evaluate'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ContractorandSupplierAgreement/{contractorandsupplieragreementid}/LegalTerm/{legaltermid}/Exchange</span></summary>

  **Description**

  This Service Domain maintains appropriate supplier agreements/contracts Exchange Legal Term

  **Documentation**

  This API path allows you to update an existing legal term related to a specific contractor and supplier agreement. By providing the IDs of the agreement and the legal term, you can make changes to the legal terms of that agreement. This can be useful for ensuring that supplier contracts are up to date and reflect the latest terms and conditions.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be structured in a resource-oriented manner. It should be descriptive, easy to understand, and follow a hierarchy based on the resources being accessed. 

A possible name for the path could be:

/contractor-and-supplier-agreements/{contractor-and-supplier-agreement-id}/legal-terms/{legal-term-id}/exchanges

Remember to use lowercase letters, hyphens for readability, and avoid using camel case in path names.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ContractorandSupplierAgreement/{contractorandsupplieragreementid}/PolicyTerm/{policytermid}/Exchange</span></summary>

  **Description**

  This Service Domain maintains appropriate supplier agreements/contracts Exchange Policy Term

  **Documentation**

  This API path allows you to update information related to the exchange policy term within a specific contractor and supplier agreement. By sending a PUT request to this endpoint with the relevant IDs, you can modify details such as policies, terms, and agreements associated with the exchange between contractors and suppliers.

  **Limitations**

  PUT: The name of the path should be:

`/contractor-supplier-agreements/{contractorandsupplieragreementid}/policy-terms/{policytermid}/exchanges`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ContractorandSupplierAgreement/{contractorandsupplieragreementid}/RegulatoryTerm/{regulatorytermid}/Exchange</span></summary>

  **Description**

  This Service Domain maintains appropriate supplier agreements/contracts Exchange Regulatory Term

  **Documentation**

  This BIAN API path is used to update specific information related to a regulatory term within a contractor and supplier agreement. By making a PUT request to this path with the correct IDs for the contractor and supplier agreement as well as the regulatory term, users can update details related to the exchange of regulatory terms in the agreement.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

/contractor-supplier-agreements/{contractor-and-supplier-agreement-id}/regulatory-terms/{regulatory-term-id}/exchange

</details>

<details open>
  <summary><span style='color:red;'>GET: /ContractorandSupplierAgreement/{contractorandsupplieragreementid}/LegalTerm/{legaltermid}/Notify</span></summary>

  **Description**

  This Service Domain maintains appropriate supplier agreements/contracts Notify Legal Term

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific legal term within a contractor and supplier agreement. By making a GET request to this path with the relevant IDs for the contractor and supplier agreement as well as the legal term, you can access details related to the notification requirements or terms outlined within the agreement.

  **Limitations**

  GET: The name of the path following REST best practices could be:

`/contractor-and-supplier-agreements/{contractorandsupplieragreementid}/legal-terms/{legaltermid}/notify`

</details>

<details open>
  <summary><span style='color:red;'>GET: /ContractorandSupplierAgreement/{contractorandsupplieragreementid}/PolicyTerm/{policytermid}/Notify</span></summary>

  **Description**

  This Service Domain maintains appropriate supplier agreements/contracts Notify Policy Term

  **Documentation**

  This API path is used to retrieve information about the notification policy term within a specific contractor and supplier agreement. It allows access to details related to how notifications are handled in the agreement, such as when and how notifications should be made. This API is part of a service domain that manages supplier agreements and contracts to ensure that appropriate policies are in place.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

'/contractor-and-supplier-agreements/{contractor-and-supplier-agreement-id}/policy-terms/{policy-term-id}/notify'

</details>

<details open>
  <summary><span style='color:red;'>GET: /ContractorandSupplierAgreement/{contractorandsupplieragreementid}/RegulatoryTerm/{regulatorytermid}/Notify</span></summary>

  **Description**

  This Service Domain maintains appropriate supplier agreements/contracts Notify Regulatory Term

  **Documentation**

  This BIAN API path allows you to retrieve information about notifying a regulatory term associated with a specific contractor and supplier agreement. In essence, it helps manage and maintain the necessary agreements and contracts with suppliers, ensuring compliance with regulatory terms.

  **Limitations**

  GET: The name of the path following RESTful best practices could be:

/contractor-and-supplier-agreements/{contractor-and-supplier-agreement-id}/regulatory-terms/{regulatory-term-id}/notify

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ContractorandSupplierAgreement/{contractorandsupplieragreementid}/LegalTerm/{legaltermid}/Request</span></summary>

  **Description**

  This Service Domain maintains appropriate supplier agreements/contracts Request Legal Term

  **Documentation**

  This BIAN API path allows you to update the legal terms associated with a specific contractor and supplier agreement. By making a PUT request to this path with the relevant IDs for the agreement and legal term, you can update the legal terms within the agreement. This API is part of a service domain that manages supplier agreements and ensures that the legal terms within these agreements are maintained appropriately.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should ideally be:

/contractor-supplier-agreements/{contractorandsupplieragreementid}/legal-terms/{legaltermid}/requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ContractorandSupplierAgreement/{contractorandsupplieragreementid}/PolicyTerm/{policytermid}/Request</span></summary>

  **Description**

  This Service Domain maintains appropriate supplier agreements/contracts Request Policy Term

  **Documentation**

  This BIAN API path allows you to update an existing resource related to a contractor and supplier agreement's policy term. It is used to maintain the necessary agreements or contracts with suppliers and contractors within a specific policy term. By making a PUT request to this path, you can update and manage the details associated with the supplier agreements or contracts for a particular policy term identified by the provided IDs.

  **Limitations**

  PUT: Based on REST best practices, a more appropriate name for the path would be:

`/contractor-and-supplier-agreements/{contractorandsupplieragreementid}/policy-terms/{policytermid}/requests`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ContractorandSupplierAgreement/{contractorandsupplieragreementid}/RegulatoryTerm/{regulatorytermid}/Request</span></summary>

  **Description**

  This Service Domain maintains appropriate supplier agreements/contracts Request Regulatory Term

  **Documentation**

  This API path allows you to update a specific regulatory term associated with a contractor and supplier agreement. By making a PUT request to this path with the relevant IDs of the agreement and the regulatory term, you can modify and request changes to the regulatory terms within the agreement.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/contractor-supplier-agreements/{contractorandsupplieragreementid}/regulatory-terms/{regulatorytermid}/requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /ContractorandSupplierAgreement/{contractorandsupplieragreementid}/LegalTerm/{legaltermid}/Retrieve</span></summary>

  **Description**

  This Service Domain maintains appropriate supplier agreements/contracts Retrieve Legal Term

  **Documentation**

  This API path retrieves information about a legal term associated with a specific contractor and supplier agreement. It is part of a service domain that manages agreements and contracts with suppliers. The API allows users to access details about a legal term within a specific agreement by providing the agreement ID and legal term ID as parameters.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

```
/contractor-supplier-agreements/{contractor-and-supplier-agreement-id}/legal-terms/{legal-term-id}/retrieve
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /ContractorandSupplierAgreement/{contractorandsupplieragreementid}/PolicyTerm/{policytermid}/Retrieve</span></summary>

  **Description**

  This Service Domain maintains appropriate supplier agreements/contracts Retrieve Policy Term

  **Documentation**

  This BIAN API path allows you to retrieve information related to a specific policy term within a contractor and supplier agreement. By providing the contractor and supplier agreement ID and the policy term ID, you can access details about the policy term associated with that agreement. This API helps in managing supplier agreements and contracts by retrieving specific policy term information as needed.

  **Limitations**

  GET: The name of the path should be:

GET '/contractor-supplier-agreements/{contractor-supplier-agreement-id}/policy-terms/{policy-term-id}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /ContractorandSupplierAgreement/{contractorandsupplieragreementid}/RegulatoryTerm/{regulatorytermid}/Retrieve</span></summary>

  **Description**

  This Service Domain maintains appropriate supplier agreements/contracts Retrieve Regulatory Term

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific regulatory term associated with a contractor and supplier agreement. By providing the IDs for the contractor and supplier agreement as well as the regulatory term, you can access details related to regulatory requirements and terms within the agreement. This API is part of a service domain that ensures the maintenance of proper contracts and agreements with suppliers.

  **Limitations**

  GET: Based on REST best practices, the path should be named using nouns to represent resources and actions. Here is a suggestion for the path name:

GET '/contractors/{contractorId}/suppliers/{supplierId}/agreement/{agreementId}/regulatoryterms/{regulatoryTermId}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ContractorandSupplierAgreement/{contractorandsupplieragreementid}/LegalTerm/{legaltermid}/Update</span></summary>

  **Description**

  This Service Domain maintains appropriate supplier agreements/contracts Update Legal Term

  **Documentation**

  This BIAN API path allows you to update the legal term for a specific supplier agreement/contract associated with a contractor or supplier. By providing the contractor and supplier agreement ID, as well as the legal term ID, you can make changes to the legal terms specified in the agreement. The method used for this action is 'PUT', which means you can update an existing legal term resource with new information.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be something like:

```
PUT /contractor-supplier-agreements/{contractorandsupplieragreementid}/legal-terms/{legaltermid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ContractorandSupplierAgreement/{contractorandsupplieragreementid}/PolicyTerm/{policytermid}/Update</span></summary>

  **Description**

  This Service Domain maintains appropriate supplier agreements/contracts Update Policy Term

  **Documentation**

  This BIAN API path is used to update a specific policy term within a Contractor and Supplier Agreement. By making a PUT request to this path with the contractorandsupplieragreementid and policytermid specified, users can modify the details of a particular policy term in the agreement. This API is a part of a service domain that is responsible for managing supplier agreements and contracts.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/contractor-and-supplier-agreements/{contractor-and-supplier-agreement-id}/policy-terms/{policy-term-id}/updates'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ContractorandSupplierAgreement/{contractorandsupplieragreementid}/RegulatoryTerm/{regulatorytermid}/Update</span></summary>

  **Description**

  This Service Domain maintains appropriate supplier agreements/contracts Update Regulatory Term

  **Documentation**

  This API path allows you to update a specific regulatory term within a contractor and supplier agreement. By making a PUT request to this endpoint with the relevant IDs, you can modify the details of the regulatory term associated with the agreement. This functionality helps in ensuring that supplier agreements and contracts remain up to date and compliant with regulations.

  **Limitations**

  PUT: Based on REST best practices, the path name should communicate the action being performed on the resource. So, a more RESTful name for the path could be:

PUT /contractor-and-supplier-agreements/{contractor_and_supplier_agreement_id}/regulatory-terms/{regulatory_term_id}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
