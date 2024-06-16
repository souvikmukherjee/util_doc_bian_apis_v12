---
id: FraudModel
title: FraudModel
---

<h1 style='color:red;'>FraudModel</h1>

**BIAN Documentation:** [FraudModel v12](https://app.swaggerhub.com/apis/BIAN-3/FraudModel/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /FraudModel/Create</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of fraud models used across all production activity to detect potential fraud on the part of customers, merchants and other involved parties CrCR Create or register an imported fraud model

  **Documentation**

  This API path allows users to create or register a new fraud model within a system that is used to detect potential fraudulent activities by customers, merchants, and other parties involved in production activities. It is a feature that helps manage and maintain a collection of fraud detection models to enhance security and minimize risks related to fraudulent behaviors.

  **Limitations**

  POST: If the path '/FraudModel/Create' followed all REST best practices, it should be named as '/fraud-models'. The Create operation in REST is typically represented via an HTTP POST request to create a new resource under the specified collection, which in this case is the "fraud models" collection.

</details>

<details open>
  <summary><span style='color:red;'>GET: /FraudModel/{fraudmodelid}/Retrieve</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of fraud models used across all production activity to detect potential fraud on the part of customers, merchants and other involved parties ReCR Retrieve details about a fraud model

  **Documentation**

  This API path allows you to retrieve details about a specific fraud model by providing its unique identifier (fraudmodelid). The fraud model is part of a portfolio used to detect potential fraud involving customers, merchants, and other parties. By making a GET request to this path, you can access information about how the fraud model is designed and maintained for use in detecting fraudulent activities within production operations.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

GET /fraudmodels/{fraudmodelid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FraudModel/{fraudmodelid}/FunctionalRequirements/{functionalrequirementsid}/Update</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of fraud models used across all production activity to detect potential fraud on the part of customers, merchants and other involved parties UpBQ Update the requirements or other properties of a model

  **Documentation**

  This BIAN API path allows users to update the requirements or properties of a specific fraud model within a portfolio of models used to detect potential fraud involving customers, merchants, and other parties. Users can make changes or adjustments to the functional requirements of a particular model by specifying its unique identifiers in the path. The PUT method is used to update the existing resource with the new information provided, ensuring that the fraud model remains effective in detecting fraudulent activities.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

PUT /fraudModels/{fraudModelId}/functionalRequirements/{functionalRequirementsId}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FraudModel/{fraudmodelid}/FunctionalRequirements/{functionalrequirementsid}/Capture</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of fraud models used across all production activity to detect potential fraud on the part of customers, merchants and other involved parties CaBQ Capture usage reports for a fraud model

  **Documentation**

  This API path allows you to update or capture usage reports for a specific functional requirement within a particular fraud model. It is used to maintain and manage fraud detection models that are implemented to identify potential fraudulent activities involving customers, merchants, and other parties.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be structured in a resource-oriented way, focusing on the collection of resources instead of actions or verbs. 

One possible name for the path could be:  
`/fraudmodels/{fraudmodelid}/functionalrequirements/{functionalrequirementsid}/capture`

This path communicates the hierarchical relationship between the resources "fraud models" and "functional requirements", with "capture" being a potential sub-resource or action related to functional requirements within a specific fraud

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FraudModel/{fraudmodelid}/FunctionalRequirements/{functionalrequirementsid}/Request</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of fraud models used across all production activity to detect potential fraud on the part of customers, merchants and other involved parties RqBQ Request changes or improvements to a model

  **Documentation**

  This API path allows you to update a specific request for changes or improvements to a fraud model within the fraud model portfolio. It is used to manage and maintain various fraud detection models used to identify potential fraudulent activities by customers, merchants, and other involved parties. By making a PUT request to this path with the appropriate fraud model ID and functional requirements ID, you can update the details of a specific request related to enhancing the fraud model.

  **Limitations**

  PUT: A suitable name for this path following RESTful best practices could be:

/fraud-models/{fraudmodelid}/functional-requirements/{functionalrequirementsid}/requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /FraudModel/{fraudmodelid}/FunctionalRequirements/{functionalrequirementsid}/Retrieve</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of fraud models used across all production activity to detect potential fraud on the part of customers, merchants and other involved parties ReBQ Retrieve details about the model specification and properties

  **Documentation**

  This API path allows users to retrieve details about the model specification and properties of a specific fraud model within a portfolio of fraud models that are used to detect potential fraud. By providing the fraud model ID and functional requirements ID, users can access information about the specific characteristics and requirements of the fraud model, helping them better understand how it works and how it is used to identify potential fraudulent activities involving customers, merchants, and other parties.

  **Limitations**

  GET: A suitable name for the path '/FraudModel/{fraudmodelid}/FunctionalRequirements/{functionalrequirementsid}/Retrieve' following REST best practices would be:

GET /fraud-models/{fraudmodelid}/functional-requirements/{functionalrequirementsid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FraudModel/{fraudmodelid}/Testing/{testingid}/Update</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of fraud models used across all production activity to detect potential fraud on the part of customers, merchants and other involved parties UpBQ Update user testing content

  **Documentation**

  This API path allows users to update testing content for a specific fraud model within a portfolio. This is important for ensuring that fraud detection models are regularly tested and fine-tuned to maintain effectiveness in identifying potential fraudulent activity by customers, merchants, and other parties involved in financial transactions.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

PATCH /fraudModels/{fraudModelId}/testing/{testingId}

</details>

<details open>
  <summary><span style='color:red;'>GET: /FraudModel/{fraudmodelid}/Testing/{testingid}/Retrieve</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of fraud models used across all production activity to detect potential fraud on the part of customers, merchants and other involved parties ReBQ Retrieve details and testing results

  **Documentation**

  This API path, "/FraudModel/{fraudmodelid}/Testing/{testingid}/Retrieve", allows users to retrieve details and testing results for a specific fraud model and its associated testing. Users can input the ID of the fraud model and the ID of the testing they are interested in to access information about how the fraud model performs in detecting potential fraud involving customers, merchants, and other parties. The API provides a way to access important data and results related to fraud detection within the system.

  **Limitations**

  GET: The name of the path should be:

/fraud-models/{fraudmodelid}/testing/{testingid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FraudModel/{fraudmodelid}/Production/{productionid}/Execute</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of fraud models used across all production activity to detect potential fraud on the part of customers, merchants and other involved parties ExBQ Get automated support for model deployment

  **Documentation**

  This API path allows you to update and execute a fraud model within a specific production activity. It is part of a service domain dedicated to managing fraud detection models for customers, merchants, and other involved parties, providing automated support for deploying and maintaining these models effectively.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/FraudModels/{fraudmodelid}/Productions/{productionid}/Executions
```

Here are some key points to consider in naming the path according to REST principles:

1. Use plural nouns to represent collections. In this case, "FraudModels" and "Productions" are used in plural form to indicate collections of resources.

2. Use lowercase letters and separate words with hyphens or underscores

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FraudModel/{fraudmodelid}/Production/{productionid}/Request</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of fraud models used across all production activity to detect potential fraud on the part of customers, merchants and other involved parties RqBQ Request production support for a deployed model

  **Documentation**

  This API path allows you to request production support for a specific fraud model that has been deployed. By providing the fraud model ID and production ID, you can update the existing resource related to that model. This service is part of managing fraud models to detect potential fraudulent activities involving customers, merchants, and other parties.

  **Limitations**

  PUT: A suitable name for the path '/FraudModel/{fraudmodelid}/Production/{productionid}/Request' following REST best practices could be:

'/fraud-models/{fraudmodelid}/productions/{productionid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /FraudModel/{fraudmodelid}/Production/{productionid}/Retrieve</span></summary>

  **Description**

  This service domain handles the design and maintenance of a portfolio of fraud models used across all production activity to detect potential fraud on the part of customers, merchants and other involved parties ReBQ Retrieve details and documentation covering model production deployment

  **Documentation**

  This API path allows you to retrieve details and documentation related to the production deployment of a specific fraud model. It is part of a system that manages various fraud models used to detect potential fraudulent activities involving customers, merchants, and other parties. By using this API, you can access information about how a particular fraud model is being used in production to help identify and prevent fraud.

  **Limitations**

  GET: A potential name for this path following REST best practices could be:

GET /fraud-models/{fraudmodelid}/productions/{productionid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
