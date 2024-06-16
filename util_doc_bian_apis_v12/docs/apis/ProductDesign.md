---
id: ProductDesign
title: ProductDesign
---

<h1 style='color:red;'>ProductDesign</h1>

**BIAN Documentation:** [ProductDesign v12](https://app.swaggerhub.com/apis/BIAN-3/ProductDesign/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /ProductDesign/Create</span></summary>

  **Description**

  Develop/refine product designs and supporting specification details CrCR Create or register an imported product or service specification

  **Documentation**

  This API path `/ProductDesign/Create` allows you to create or register a new product design along with its detailed specifications for a particular product or service. It is used to develop or refine the design and specifications of a product. The POST method is used to create a new resource within this API, enabling you to input the necessary information to define the product design and its specifications.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be '/products' since it represents a collection of resources (products), and the action of creating a new product can be indicated by making a POST request to this endpoint.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductDesign/{productdesignid}/Execute</span></summary>

  **Description**

  Develop/refine product designs and supporting specification details ExCR Execute an automated action against a product or service specification

  **Documentation**

  This API path allows you to update an existing product design by executing an automated action against a specific product or service specification. It is used to develop or refine product designs and supporting specification details by triggering an automated process.

  **Limitations**

  PUT: The name of the path should be "/products/{productdesignid}/execute" while following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductDesign/{productdesignid}/Request</span></summary>

  **Description**

  Develop/refine product designs and supporting specification details RqCR Request manual intervention to a specification

  **Documentation**

  This BIAN API path allows you to update an existing product design and specify the need for manual intervention in the design process. It is used to request additional help or review from a person or team to ensure that the product design and related specification details are refined accurately.

  **Limitations**

  PUT: The name of the path should be:

'/product-designs/{productdesignid}/request'

In RESTful API design, it is recommended to use lowercase letters and hyphens to separate words in the URL paths. This naming convention improves readability and consistency across endpoints. Additionally, having a plural noun like "product-designs" rather than "product-design" is preferable to indicate that the endpoint deals with a collection of resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductDesign/{productdesignid}/Retrieve</span></summary>

  **Description**

  Develop/refine product designs and supporting specification details ReCR Retrieve details about a product or service specification

  **Documentation**

  This API path allows you to retrieve information about a specific product design by providing the product design ID. It helps in developing and refining product designs by accessing the supporting specification details for a product or service. It enables you to view the specifics of a product design or service specification through the GET method.

  **Limitations**

  GET: A suitable name for the path '/ProductDesign/{productdesignid}/Retrieve', following REST best practices, could be:

GET /productdesigns/{productdesignid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductDesign/{productdesignid}/FunctionalRequirements/{functionalrequirementsid}/Update</span></summary>

  **Description**

  Develop/refine product designs and supporting specification details UpBQ Update the functional requirements or other properties of a the specification

  **Documentation**

  This BIAN API path allows users to update the functional requirements or other properties of a specific product design specification. By sending a PUT request to this endpoint with the appropriate product design ID and functional requirements ID, users can modify the details related to the functional requirements of the product design. This update could involve refining the design or making changes to specific features based on updated information or requirements.

  **Limitations**

  PUT: The name of the path should be:

PUT /products/{productid}/functional-requirements/{requirementid} 

This path reflects the REST best practices by using clear and concise naming conventions, following the plural form for resources, and using HTTP method PUT to update an existing resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductDesign/{productdesignid}/FunctionalRequirements/{functionalrequirementsid}/Capture</span></summary>

  **Description**

  Develop/refine product designs and supporting specification details CaBQ Capture usage reports for the product or service specification

  **Documentation**

  This BIAN API path allows users to update existing resource information related to product design and functional requirements. Specifically, it enables users to refine product designs, provide supporting specification details, and capture usage reports for the product or service specification. By making a PUT request to this endpoint with the relevant IDs, users can update and maintain the details of the product design and functional requirements in a standardized and structured manner.

  **Limitations**

  PUT: Following REST best practices, the recommended name for the path '/ProductDesign/{productdesignid}/FunctionalRequirements/{functionalrequirementsid}/Capture' should be something like '/products/{productId}/functional-requirements/{requirementId}/capture'. This naming convention uses lower case letters, separates words with dashes, and represents resources using plural nouns.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductDesign/{productdesignid}/FunctionalRequirements/{functionalrequirementsid}/Request</span></summary>

  **Description**

  Develop/refine product designs and supporting specification details RqBQ Request changes or improvements to the specification

  **Documentation**

  This API path allows you to update an existing request for changes or improvements to a product design's functional requirements. You can modify the details of the request related to the design specifications in order to refine the product design and make any necessary improvements.

  **Limitations**

  PUT: A good name for this path following REST best practices could be: '/products/{productid}/functional-requirements/{functionalrequirementsid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductDesign/{productdesignid}/FunctionalRequirements/{functionalrequirementsid}/Retrieve</span></summary>

  **Description**

  Develop/refine product designs and supporting specification details ReBQ Retrieve details about the product or service specification and any associated properties

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific product design and its functional requirements. By providing the unique identifiers for both the product design and functional requirements, you can access information about the design specifications and any associated properties related to the product or service. This API is useful for developers and designers working on developing or refining product designs and specifications.

  **Limitations**

  GET: The name of the path should ideally be:

    /products/{productId}/functional-requirements/{requirementsId}

This path follows RESTful best practices by using lowercase letters, using plural nouns for collections (products, functional-requirements), and using hyphens to separate words in the URL for improved readability.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductDesign/{productdesignid}/Testing/{testingid}/Update</span></summary>

  **Description**

  Develop/refine product designs and supporting specification details UpBQ Update user specification testing content

  **Documentation**

  This API path allows you to update the specification testing content for a specific product design. You can make changes to the testing content related to a particular testing ID for a specific product design ID. This helps in refining and updating the details related to the testing specifications for the product design.

  **Limitations**

  PUT: The name of the path '/ProductDesign/{productdesignid}/Testing/{testingid}/Update' following REST best practices could be named as PUT '/productdesigns/{productdesignid}/testing/{testingid}'.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductDesign/{productdesignid}/Testing/{testingid}/Retrieve</span></summary>

  **Description**

  Develop/refine product designs and supporting specification details ReBQ Retrieve details of the specification testing results

  **Documentation**

  This API path allows you to retrieve details of the specification testing results for a specific product design. By providing the product design ID and the testing ID as parameters in the path, you can fetch information related to the testing outcomes and results associated with that particular product design. This API is useful for accessing and analyzing data from the testing phase of product development, helping to ensure that the design meets the specified requirements and standards.

  **Limitations**

  GET: Based on REST best practices, the name of the path could be '/products/{productdesignid}/testing/{testingid}'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductDesign/{productdesignid}/Production/{productionid}/Execute</span></summary>

  **Description**

  Develop/refine product designs and supporting specification details ExBQ Get automated support for product or service specification deployment

  **Documentation**

  This API path is used to update and execute an existing product design within a production process. It is specifically used for refining and developing product designs along with the necessary specification details. The goal is to receive automated assistance in deploying the product or service specifications.

  **Limitations**

  PUT: A suitable name for the path '/ProductDesign/{productdesignid}/Production/{productionid}/Execute' according to REST best practices could be: 

POST /product-designs/{productdesignid}/productions/{productionid}/execute

This name is more descriptive, uses lowercase letters, and separates words with hyphens. Additionally, it follows the convention of using nouns for resources and using HTTP methods to indicate actions.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductDesign/{productdesignid}/Production/{productionid}/Request</span></summary>

  **Description**

  Develop/refine product designs and supporting specification details RqBQ Request production support for a product or service specification

  **Documentation**

  This API path allows you to update an existing production request for a specific product design. You can use this path to make changes or request support for the production of a product or service based on the design specifications provided.

  **Limitations**

  PUT: The name of the path should be: 

`/product-designs/{productdesignid}/productions/{productionid}/requests` 

In RESTful API design, it is preferred to use lowercase letters and hyphens to separate words in the path. Additionally, plural nouns are typically used for resource names to indicate collections of resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductDesign/{productdesignid}/Production/{productionid}/Retrieve</span></summary>

  **Description**

  Develop/refine product designs and supporting specification details ReBQ Retrieve details and documentation covering product or service production deployment

  **Documentation**

  This API path allows you to retrieve details and documentation related to the production deployment of a specific product design. You can access information about the product design, its specifications, and any supporting details that are needed for the production or deployment of that product. This API provides a way to gather all the necessary information for successfully implementing the product design in a production environment.

  **Limitations**

  GET: A RESTful name for the path '/ProductDesign/{productdesignid}/Production/{productionid}/Retrieve' would be:

- GET /product-designs/{productdesignid}/productions/{productionid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
