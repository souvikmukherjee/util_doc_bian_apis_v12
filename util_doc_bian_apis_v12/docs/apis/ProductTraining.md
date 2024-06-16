---
id: ProductTraining
title: ProductTraining
---

<h1 style='color:red;'>ProductTraining</h1>

**BIAN Documentation:** [ProductTraining v12](https://app.swaggerhub.com/apis/BIAN-3/ProductTraining/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /ProductTraining/{producttrainingid}/Control</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) CoCR Control the processing of Product Training Procedure

  **Documentation**

  This BIAN API path allows you to update an existing product training resource by controlling the processing of the Product Training Procedure. It is used to develop and provide product-specific training to employees using various training methods such as online, self-taught, or classroom training. This API is designed to manage and regulate the delivery of training materials and mechanisms within an organization.

  **Limitations**

  PUT: The name of the path should be:

'/product-training/{producttrainingid}/control'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductTraining/{producttrainingid}/Exchange</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) EcCR Accept, verify, etc. aspects of Product Training Procedure processing

  **Documentation**

  This API path allows you to update an existing product training resource identified by a specific product training ID. It is used to develop and provide training tailored to a particular product within an organization's workforce. The training can be delivered through various methods such as online, self-taught, or classroom training. It also involves verifying and accepting aspects related to the processing of the product training procedure.

  **Limitations**

  PUT: A suitable name for the path '/ProductTraining/{producttrainingid}/Exchange' following REST best practices would be:

'/product-training/{producttrainingid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductTraining/{producttrainingid}/Execute</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) ExCR Execute an available automated action for Product Training Procedure

  **Documentation**

  This BIAN API path allows you to update an existing resource related to product training. It specifically pertains to executing an available automated action for a product training procedure. By using this API, you can trigger a specific action that is part of the product training process. This action could be related to providing training through various media types, such as online, self-taught, or classroom sessions, to educate the workforce on product-specific information.

  **Limitations**

  PUT: A suitable name for the path '/ProductTraining/{producttrainingid}/Execute' following REST best practices could be:

- POST /producttrainings/{producttrainingid}/execute

This path follows REST conventions by using a POST method for executing an action on a specific resource (product training identified by producttrainingid) and using lowercase letters for the resource names.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProductTraining/Initiate</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) InCR Instantiate a new Product Training Procedure

  **Documentation**

  This API path, /ProductTraining/Initiate, allows you to create a new resource for developing and providing product-specific training across your workforce. It helps in establishing a procedure for training related to your products using various media and training methods such as online courses, self-paced learning, or classroom training. By initiating this API call, you can set up a structured approach to train your employees on the specifics of your products.

  **Limitations**

  POST: A good name for this path following REST best practices could be "/products/initiate-training".

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductTraining/{producttrainingid}/Retrieve</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) ReCR Retrieve details about any aspect of Product Training Procedure

  **Documentation**

  This API path allows you to retrieve details about a specific aspect of the Product Training procedure by providing the Product Training ID as a parameter. This can include information about the different types of training offered for a particular product, such as online courses, self-taught modules, or classroom sessions. You can use this API to access specific details related to product training within your organization.

  **Limitations**

  GET: The path could be named as '/product-trainings/{productTrainingId}'. Remember that according to REST best practices, paths should be in lowercase and separated by hyphens instead of camelCase or snake_case.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductTraining/{producttrainingid}/Request</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) RqCR Request manual intervention or a decision with respect to Product Training Procedure

  **Documentation**

  This BIAN API path allows you to update an existing product training resource identified by a specific product training ID. You can use this API to request manual intervention or a decision regarding the product training procedure. The API is designed to assist in developing and providing specific training for products within the workforce, utilizing various training methods such as online, self-taught, or classroom training.

  **Limitations**

  PUT: Based on REST best practices, the name of the path '/ProductTraining/{producttrainingid}/Request' could be simplified to "POST /product-trainings/{producttrainingid}/requests". This naming convention follows the guidelines of using lowercase letters, using hyphens for readability, and keeping the resource names in the plural form.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductTraining/{producttrainingid}/Update</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) UpCR Update details relating to Product Training Procedure

  **Documentation**

  This API path is used to update details related to a specific product training procedure identified by a unique product training ID. It allows for modifying information about product-specific training provided throughout the organization, covering various training methods such as online, self-taught, and classroom training. The API is designed to enable changes or enhancements to be made to the existing product training process.

  **Limitations**

  PUT: The name of the path should be:

'/producttraining/{producttrainingid}' 

This path follows REST best practices by using all lowercase letters, using plural nouns for resource names, and avoiding specific actions like 'Update' in the path. The HTTP methods like PUT or PATCH can be used to update the product training resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductTraining/{producttrainingid}/ContentDevelopment/{contentdevelopmentid}/Exchange</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) EcBQ Accept, verify, etc. aspects of Content Development processing

  **Documentation**

  This API path allows you to update an existing resource related to product-specific training and content development. It is used to develop and provide training for a specific product within a workforce. The path includes various training methods such as online training, self-taught modules, and classroom sessions. It also involves aspects related to accepting, verifying, and processing content development within the training materials.

  **Limitations**

  PUT: The name of the path should be:

/ProductTraining/{producttrainingid}/ContentDevelopment/{contentdevelopmentid}/Exchange

This path follows REST best practices by using clear and descriptive resource names, using nouns to represent resources, and organizing resources hierarchically to reflect their relationships.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductTraining/{producttrainingid}/ServiceDelivery/{servicedeliveryid}/Exchange</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) EcBQ Accept, verify, etc. aspects of Service Delivery processing

  **Documentation**

  This BIAN API path allows you to update existing product-specific training for a particular training session identified by 'producttrainingid' related to the service delivery process identified by 'servicedeliveryid'. The update can include various training methods such as online, self-taught, or classroom training. The goal is to enhance the knowledge and skills of the workforce in understanding and verifying the aspects of service delivery processing for the specified product.

  **Limitations**

  PUT: The name of the path '/ProductTraining/{producttrainingid}/ServiceDelivery/{servicedeliveryid}/Exchange' should be named in a way that reflects the resource it represents in a clear and concise manner. Following REST best practices, a descriptive and resource-centered naming convention should be applied.

A suggestion for the name of this path could be something like '/product-trainings/{producttrainingid}/service-deliveries/{servicedeliveryid}/exchanges'. This naming convention follows a pattern of

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductTraining/{producttrainingid}/ServiceEvaluation/{serviceevaluationid}/Exchange</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) EcBQ Accept, verify, etc. aspects of Service Evaluation processing

  **Documentation**

  This API path allows you to update an existing resource related to product training and service evaluation. It is specifically designed to manage product-specific training for employees within an organization. The path involves accepting, verifying, and other aspects of service evaluation processing for the product training program. This update can include various training methods such as online courses, self-paced learning, and classroom sessions.

  **Limitations**

  PUT: The name of the path following REST best practices could be:

'/product-training/{product-training-id}/service-evaluation/{service-evaluation-id}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductTraining/{producttrainingid}/ServiceScheduling/{serviceschedulingid}/Exchange</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) EcBQ Accept, verify, etc. aspects of Service Scheduling processing

  **Documentation**

  This API path is used to update existing resources related to product training and service scheduling. It allows for the development and provision of product-specific training for employees using various training methods such as online, self-taught, or classroom sessions. The API focuses on ensuring proper understanding and acceptance of the service scheduling processes within the workforce. It is designed to help manage product training and service scheduling efficiently within the organization.

  **Limitations**

  PUT: The RESTful naming convention suggests that resource names should be nouns that represent the resource being accessed. Based on this, the name for the path '/ProductTraining/{producttrainingid}/ServiceScheduling/{serviceschedulingid}/Exchange' could be simplified to:

/ProductTrainings/{producttrainingid}/ServiceSchedules/{serviceschedulingid}/Exchanges

This naming convention uses plural nouns for resource collections, making it more clear and understandable.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductTraining/{producttrainingid}/ServiceDelivery/{servicedeliveryid}/Execute</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) ExBQ Execute an available automated action for Service Delivery

  **Documentation**

  This API path is used to update an existing resource related to product training and service delivery. It allows for executing an available automated action specifically designed for service delivery in the context of providing product specific training to employees. The action could involve various training mechanisms such as online training, self-taught modules, or classroom sessions.

  **Limitations**

  PUT: A suitable name for the path would be:

```
/ product-trainings /{producttrainingid}/ service-deliveries /{servicedeliveryid}/ execute
``` 

In this naming convention, each resource in the URL path is represented by a plural noun separated by a hyphen for readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductTraining/{producttrainingid}/ServiceScheduling/{serviceschedulingid}/Execute</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) ExBQ Execute an available automated action for Service Scheduling

  **Documentation**

  This API path is intended for updating an existing resource related to product training and service scheduling. It allows you to execute an available automated action specifically for service scheduling within a product training context. This action can include developing and providing specialized training for employees using various methods such as online learning, self-taught materials, or classroom sessions.

  **Limitations**

  PUT: A suitable RESTful naming convention for this path could be:

`/product-training/{producttrainingid}/service-scheduling/{serviceschedulingid}/execute`

This naming convention uses lowercase letters, separates words with hyphens, and provides a clear and logical structure to represent the resources and hierarchy in the URI.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProductTraining/{producttrainingid}/ContentDevelopment/Initiate</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) InBQ Instantiate a new Content Development

  **Documentation**

  This BIAN API path allows you to create and initiate new content development for product-specific training within your organization. This can include various training methods such as online courses, self-taught materials, and classroom sessions to ensure that all employees have the necessary training on the products.

  **Limitations**

  POST: The name of the path should be:

```
/Products/{productId}/ContentDevelopment
``` 

Following REST best practices usually involves using nouns for resources and avoiding verbs in the URL.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProductTraining/{producttrainingid}/ServiceDelivery/Initiate</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) InBQ Instantiate a new Service Delivery

  **Documentation**

  This API path allows a user to initiate a new service delivery related to product training. By using a POST request, a new resource can be created to develop and provide product-specific training across the workforce using various training methods like online, self-taught, and classroom training.

  **Limitations**

  POST: The name of this path should be `/product-training/{producttrainingid}/service-delivery/initiate` following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProductTraining/{producttrainingid}/ServiceScheduling/Initiate</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) InBQ Instantiate a new Service Scheduling

  **Documentation**

  This API path initiates the process of creating a new service scheduling for product training. It allows you to develop and provide product-specific training to employees using various training methods such as online courses, self-taught materials, or classroom sessions. By calling this API with the appropriate product training ID, you can begin the setup of a new service scheduling for training purposes.

  **Limitations**

  POST: The name of the path should be:

`/product-trainings/{producttrainingid}/service-scheduling/initiate`

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductTraining/{producttrainingid}/ContentDevelopment/{contentdevelopmentid}/Retrieve</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) ReBQ Retrieve details about any aspect of Content Development

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific aspect of content development within a product training program. You can access details related to the content development by providing the IDs for the product training and content development components. This API is designed to assist in developing and providing training for a specific product within an organization's workforce, using various training methods such as online, self-taught, or classroom-based mechanisms.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

`GET /ProductTraining/{producttrainingid}/ContentDevelopment/{contentdevelopmentid}`

This path indicates that you are retrieving content development information associated with a specific product training ID and content development ID. The "Retrieve" part is not necessary as the HTTP method `GET` already implies a retrieval operation.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductTraining/{producttrainingid}/ServiceDelivery/{servicedeliveryid}/Retrieve</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) ReBQ Retrieve details about any aspect of Service Delivery

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific aspect of Service Delivery within the context of Product Training. By providing the specific IDs for both Product Training and Service Delivery, you can access details related to how the training is delivered or any other relevant information about the service delivery process.

  **Limitations**

  GET: A suitable name for the path '/ProductTraining/{producttrainingid}/ServiceDelivery/{servicedeliveryid}/Retrieve' following REST best practices could be:

GET /product-training/{producttrainingid}/service-delivery/{servicedeliveryid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductTraining/{producttrainingid}/ServiceEvaluation/{serviceevaluationid}/Retrieve</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) ReBQ Retrieve details about any aspect of Service Evaluation

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific service evaluation within a product training program. This information can include details about how the service evaluation is conducted, what aspects are evaluated, and other relevant data that may be important for assessing the effectiveness of the training program.

  **Limitations**

  GET: Based on REST best practices, the naming convention for the path should be:

GET /producttrainings/{producttrainingid}/serviceevaluations/{serviceevaluationid}

This format follows the standard of using lowercase letters for paths and plural nouns for resource names.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProductTraining/{producttrainingid}/ServiceScheduling/{serviceschedulingid}/Retrieve</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) ReBQ Retrieve details about any aspect of Service Scheduling

  **Documentation**

  This API path allows you to retrieve information about a specific aspect of Service Scheduling within a Product Training program. By providing the producttrainingid and serviceschedulingid, you can access detailed information about service scheduling related to the given product training. This could include various training mechanisms and materials used, such as online modules, self-taught resources, or classroom sessions.

  **Limitations**

  GET: The name of the path should be:

`/product-training/{producttrainingid}/service-scheduling/{serviceschedulingid}`

This path uses lowercase letters and hyphens to separate words, following REST best practices for creating clean and readable URLs.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductTraining/{producttrainingid}/ContentDevelopment/{contentdevelopmentid}/Request</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) RqBQ Request manual intervention or a decision with respect to Content Development

  **Documentation**

  This API path allows you to update an existing request for manual intervention or a decision related to the content development process for product training. It is designed to manage and track the creation and delivery of product-specific training materials to employees using various training methods such as online, self-taught, classroom training, etc.

  **Limitations**

  PUT: The name of the path should be as follows:  
'/product-training/{producttrainingid}/content-development/{contentdevelopmentid}/request'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductTraining/{producttrainingid}/ServiceDelivery/{servicedeliveryid}/Request</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) RqBQ Request manual intervention or a decision with respect to Service Delivery

  **Documentation**

  This BIAN API path allows you to update an existing resource related to product training and service delivery. Specifically, it is used to request manual intervention or a decision with respect to service delivery associated with a particular product training session identified by the {producttrainingid} and {servicedeliveryid}. This API is used to manage and track product-specific training across the workforce, utilizing various training methods such as online, self-taught, and classroom training.

  **Limitations**

  PUT: The name of the path should be: `/products/{producttrainingid}/services/{servicedeliveryid}/requests`. 

Following REST best practices, the path should use lowercase letters and hyphens to separate words for better readability. The path should also use plural nouns to indicate collections of resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductTraining/{producttrainingid}/ServiceEvaluation/{serviceevaluationid}/Request</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) RqBQ Request manual intervention or a decision with respect to Service Evaluation

  **Documentation**

  This BIAN API path allows you to update an existing resource related to product training and service evaluation. It is used to develop and provide training for a specific product within a company's workforce. The training can be delivered through various methods such as online, self-taught, or classroom training. Additionally, it provides a mechanism to request manual intervention or a decision in relation to service evaluation for the product training program.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

/ProductTraining/{producttrainingid}/ServiceEvaluation/{serviceevaluationid}/Request

This path reflects a resource-oriented approach, using resource names that accurately describe the purpose and context of the data being accessed. It also follows the convention of using plural nouns for resource names and includes the necessary identifiers ({producttrainingid} and {serviceevaluationid}) to uniquely identify specific instances of the resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductTraining/{producttrainingid}/ServiceScheduling/{serviceschedulingid}/Request</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) RqBQ Request manual intervention or a decision with respect to Service Scheduling

  **Documentation**

  This API path allows you to update an existing resource for product-specific training related to service scheduling within a workforce. It involves providing training through various media and mechanisms like online, self-taught, and classroom trainings. Additionally, it includes a request for manual intervention or a decision specifically related to service scheduling.

  **Limitations**

  PUT: The name of the path should be '/productTrainings/{productTrainingId}/serviceSchedulings/{serviceSchedulingId}/requests' as per REST best practices. It is recommended to use lowercase letters and use plural nouns to represent resources in the URL paths.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductTraining/{producttrainingid}/ContentDevelopment/{contentdevelopmentid}/Update</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) UpBQ Update details relating to Content Development

  **Documentation**

  This BIAN API path allows you to update existing details related to content development for a specific product training session. This could involve updating information about the content being developed for the training, such as online materials, self-paced modules, or classroom resources. You can use this API to make changes to the content development process for a particular product training program.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/ productTraining/{productTrainingId}/contentDevelopment/{contentDevelopmentId}
```

The endpoint method should be 'PUT' to achieve an update operation.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductTraining/{producttrainingid}/ServiceDelivery/{servicedeliveryid}/Update</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) UpBQ Update details relating to Service Delivery

  **Documentation**

  This API path allows you to update details related to service delivery within a specific product training session. It is used to modify information such as the content or delivery methods of the training provided for a particular product within an organization's workforce development program.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

PUT /ProductTraining/{producttrainingid}/ServiceDelivery/{servicedeliveryid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductTraining/{producttrainingid}/ServiceEvaluation/{serviceevaluationid}/Update</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) UpBQ Update details relating to Service Evaluation

  **Documentation**

  This API path allows you to update details related to service evaluation within a specific product training session. It enables you to make changes or modifications to the content, methods, or materials used in the training program. You can specify the product training session (identified by producttrainingid) and the service evaluation within that session (identified by serviceevaluationid) that you want to update. The PUT method is used for updating existing resources, such as training content or evaluation details, to ensure that the information remains current and relevant.

  **Limitations**

  PUT: The name of the path should be:

'/products/{productId}/trainings/{trainingId}/services/{serviceId}/evaluations/{evaluationId}'

REST best practices recommend using nouns to represent resources and avoiding verbs in the path. The path should also be descriptive and follow a hierarchical structure to represent the relationships between resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProductTraining/{producttrainingid}/ServiceScheduling/{serviceschedulingid}/Update</span></summary>

  **Description**

  Develop and provide product specific training across the workforce. This includes all media and training mechanisms (on-line, self taught, classroom etc.) UpBQ Update details relating to Service Scheduling

  **Documentation**

  This API path allows you to update details related to service scheduling within the product training system. It is used to modify existing resources by making changes or updates to service scheduling information associated with a specific product training program.

  **Limitations**

  PUT: The name of the path following REST best practices could be:

PUT /product-training/{producttrainingid}/service-scheduling/{serviceschedulingid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
