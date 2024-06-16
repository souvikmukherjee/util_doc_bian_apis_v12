---
id: ConsumerLoan
title: ConsumerLoan
---

<h1 style='color:red;'>ConsumerLoan</h1>

**BIAN Documentation:** [ConsumerLoan v12](https://app.swaggerhub.com/apis/BIAN-3/ConsumerLoan/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /ConsumerLoan/Initiate</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks InCR Initiate a consumer loan

  **Documentation**

  This API path `/ConsumerLoan/Initiate` allows you to create a new consumer loan. It initiates the process for setting up a consumer loan facility, handling various tasks related to the loan processing, and managing the product throughout its lifecycle. By making a POST request to this path, you can start the process of establishing a consumer loan product.

  **Limitations**

  POST: In RESTful API design, the path should represent a resource or collection of resources. So, if the path '/ConsumerLoan/Initiate' were following REST best practices, it might be named more descriptively based on the resource it represents. For example, if the endpoint is used to initiate a new consumer loan application, a more appropriate path could be '/consumer-loans' to represent the collection of consumer loan resources or '/consumer-loans/{loanId}/initiate' to represent initiating

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ConsumerLoan/{consumerloanid}/Update</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks UpCR Update details for an existing consumer loan

  **Documentation**

  This API path allows you to update the details of an existing consumer loan identified by a unique consumerloanid. By sending a PUT request to this path, you can make changes to the information related to a specific consumer loan, such as updating personal details, loan terms, or any other relevant data associated with that loan. This can be useful for ensuring that the loan information is accurate and up to date in the system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:  
/consumer-loans/{consumerloanid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ConsumerLoan/{consumerloanid}/Control</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks CoCR Control a consumer loan (e.g. suspend, terminate)

  **Documentation**

  This BIAN API path allows you to update an existing consumer loan by controlling its status. You can perform actions such as suspending or terminating the loan. It is part of a service domain that handles the processing and management of consumer loans, including setting up the loan facility and carrying out various tasks related to the loan product.

  **Limitations**

  PUT: The name of the path should be '/ConsumerLoans/{consumerloanid}/Controls'. 

In RESTful API design, it is recommended to use plural nouns for resource names to represent collections of resources. Additionally, using appropriate and descriptive names for resources can improve the readability and understandability of the API.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ConsumerLoan/{consumerloanid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ReCR Retrieve details about a consumer loan

  **Documentation**

  This API path allows users to retrieve details about a specific consumer loan by providing the consumer loan ID as a parameter in the URL. The API will return information related to the consumer loan, such as its setup details, scheduled tasks, and any other relevant processing tasks associated with the loan product. This API is useful for accessing specific information about a consumer loan within the system.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

GET /consumer-loans/{consumerloanid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /ConsumerLoan/{consumerloanid}/Interest/{interestid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ReBQ Retrieve details about interest applied to a consumer loan

  **Documentation**

  This API path allows you to retrieve details about the interest applied to a specific consumer loan. By providing the consumer loan ID and interest ID as parameters in the path, you can access information about how interest has been calculated and applied to that loan. This can help you understand the financial aspects of the loan and track how interest payments are affecting the overall loan amount.

  **Limitations**

  GET: A more appropriate name for the path '/ConsumerLoan/{consumerloanid}/Interest/{interestid}/Retrieve' following RESTful best practices could be:

GET '/consumerloans/{consumerloanid}/interests/{interestid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ConsumerLoan/{consumerloanid}/ServiceFees/{servicefeesid}/Execute</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ExBQ Execute Apply Service Fee

  **Documentation**

  This API path `/ConsumerLoan/{consumerloanid}/ServiceFees/{servicefeesid}/Execute` with the method PUT allows you to update an existing resource related to a consumer loan. Specifically, it focuses on executing the application of service fees associated with a consumer loan. This process may involve applying scheduled or additional service fees to the loan account as part of the loan management and fulfillment activities.

  **Limitations**

  PUT: The name of the path should be:
/consumer-loans/{consumerLoanId}/service-fees/{serviceFeesId}/execute

Here are some reasons for following REST best practices with this naming convention:
1. Lowercase letters are used consistently for better readability and consistency.
2. Hyphens are used to separate words in the path for improved clarity.
3. Parameters like consumerLoanId and serviceFeesId are enclosed in curly braces to indicate variables.
4. The endpoint name '

</details>

<details open>
  <summary><span style='color:red;'>GET: /ConsumerLoan/{consumerloanid}/ServiceFees/{servicefeesid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ReBQ Retrieve details about a consumer loan fees

  **Documentation**

  This API path allows you to retrieve details about the fees associated with a specific consumer loan. By providing the consumer loan ID and service fees ID in the URL, you can access information about the fees related to that particular loan. It helps you understand the charges involved in the loan facility, aiding in transparency and clarity for both customers and financial institutions.

  **Limitations**

  GET: A more appropriate name for the path '/ConsumerLoan/{consumerloanid}/ServiceFees/{servicefeesid}/Retrieve' following REST best practices could be:

GET /consumer-loans/{consumerloanid}/service-fees/{servicefeesid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /ConsumerLoan/{consumerloanid}/Disbursement/{disbursementid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ReBQ Retrieve details about a disbursement paid against a consumer loan

  **Documentation**

  This API path allows you to retrieve details about a disbursement that has been paid against a consumer loan. By providing the consumer loan ID and the disbursement ID as parameters in the request, you can access specific information related to a payment made in the context of a consumer loan. This can include details such as the amount paid, the date of payment, and any other relevant information associated with the disbursement.

  **Limitations**

  GET: The name of the path should be:

GET /consumer-loans/{consumerloanid}/disbursements/{disbursementid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ConsumerLoan/{consumerloanid}/Maintenance/{maintenanceid}/Request</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks RqBQ Request a maintenance activity for a consumer load (e.g. obtain a fee statement)

  **Documentation**

  This API path allows you to request a maintenance activity for a specific consumer loan. For example, you can use this to obtain a fee statement for a consumer loan by providing the loan ID and maintenance ID in the request. This API helps in managing and updating consumer loan details and performing various maintenance tasks related to the loan product.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should convey the resource it represents. A clear and meaningful name for the path '/ConsumerLoan/{consumerloanid}/Maintenance/{maintenanceid}/Request' could be:

'/consumer-loans/{consumerloanid}/maintenance-requests/{maintenanceid}'.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ConsumerLoan/{consumerloanid}/Maintenance/{maintenanceid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ReBQ Retrieve details about maintenance processing for a consumer loan

  **Documentation**

  This API path allows you to retrieve details about maintenance processing for a specific consumer loan. By providing the consumer loan ID and maintenance ID in the URL, you can access information related to the ongoing servicing and upkeep tasks associated with that particular loan. This can include scheduled maintenance activities as well as any additional processing tasks that may need to be carried out to ensure the smooth functioning of the loan facility.

  **Limitations**

  GET: Based on REST best practices, the name of the path '/ConsumerLoan/{consumerloanid}/Maintenance/{maintenanceid}/Retrieve' could be simplified to '/consumer-loans/{consumerloanid}/maintenance/{maintenanceid}'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ConsumerLoan/{consumerloanid}/Withdrawal/{withdrawalid}/Update</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks UpBQ Update details of a withdrawal from a consumer loan

  **Documentation**

  This API path allows you to update the details of a withdrawal from a consumer loan. By using a PUT request, you can modify information related to a specific withdrawal associated with a consumer loan identified by the consumerloanid and withdrawalid provided in the path. This capability is part of handling the fulfillment of consumer loan products, enabling you to manage and adjust withdrawal details as needed.

  **Limitations**

  PUT: Based on REST best practices, the path should be named in a concise and descriptive manner. Here is a suggestion for the path name based on the provided URI:

'/consumer-loans/{consumerLoanId}/withdrawals/{withdrawalId}'

This naming convention follows the guidelines for using lowercase letters, separating words with hyphens, and using plural nouns where appropriate.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ConsumerLoan/{consumerloanid}/Withdrawal/{withdrawalid}/Execute</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ExBQ Execute an automated withdrawal against a consumer loan

  **Documentation**

  This API path is for executing an automated withdrawal against a specific consumer loan. It allows you to update an existing resource related to a consumer loan by triggering a withdrawal transaction specified by the withdrawal ID. Essentially, this API enables you to process a withdrawal request for a consumer loan, which could be part of scheduled payments or initiated as an ad-hoc transaction.

  **Limitations**

  PUT: Based on REST best practices, a more appropriate name for the path '/ConsumerLoan/{consumerloanid}/Withdrawal/{withdrawalid}/Execute' could be:

PUT /consumer-loans/{consumerloanid}/withdrawals/{withdrawalid}/execute

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ConsumerLoan/{consumerloanid}/Withdrawal/{withdrawalid}/Request</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks RqBQ Request handling of a withdrawal (e.g. negotiate an exception)

  **Documentation**

  This API path allows you to update and handle requests related to a withdrawal for a consumer loan. It is specifically for handling exceptions or negotiations related to a withdrawal request within the context of managing a consumer loan product. The path includes the consumer loan ID, withdrawal ID, and allows you to update existing information or handle specific requests related to the withdrawal process.

  **Limitations**

  PUT: The name of the path should be:

'/consumer-loans/{consumerLoanId}/withdrawals/{withdrawalId}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /ConsumerLoan/{consumerloanid}/Withdrawal/{withdrawalid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ReBQ Retrieve details about a consumer loan withdrawal

  **Documentation**

  This API path allows you to retrieve details about a specific withdrawal from a consumer loan. By providing the consumer loan ID and withdrawal ID in the path, you can access information about the particular withdrawal transaction associated with the loan. This API helps in tracking and managing consumer loan withdrawals efficiently.

  **Limitations**

  GET: Based on REST best practices, the name of the path '/ConsumerLoan/{consumerloanid}/Withdrawal/{withdrawalid}/Retrieve' could be simplified to '/consumer-loans/{consumerloanid}/withdrawals/{withdrawalid}' for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ConsumerLoan/{consumerloanid}/Repayment/{repaymentid}/Update</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks UpBQ Update a repayment transaction made to the consumer loan

  **Documentation**

  This API path allows you to update a repayment transaction made to a consumer loan. By providing the consumer loan ID and repayment ID, you can make changes to the repayment transaction details, such as modifying the amount or updating any related information. This PUT method allows you to update an existing repayment record for a specific consumer loan within the system.

  **Limitations**

  PUT: The name of the path based on REST best practices could be: PUT /consumer-loans/{consumerloanid}/repayments/{repaymentid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ConsumerLoan/{consumerloanid}/Repayment/{repaymentid}/Execute</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ExBQ Execute an automated repayment transaction

  **Documentation**

  This API path allows you to update an existing resource related to a consumer loan repayment. Specifically, it enables you to trigger the execution of an automated repayment transaction for a consumer loan identified by the consumerloanid and repayment identified by repaymentid. This action is a part of managing a consumer loan product and includes setting up the loan facility and completing various tasks related to processing loan repayments.

  **Limitations**

  PUT: A suitable name for the path '/ConsumerLoan/{consumerloanid}/Repayment/{repaymentid}/Execute' that adheres to REST best practices could be:

POST /consumer-loans/{consumerloanid}/repayments/{repaymentid}/execute

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ConsumerLoan/{consumerloanid}/Repayment/{repaymentid}/Request</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks RqBQ Request handling of an exceptional repayment

  **Documentation**

  This API path is used to handle a request for an exceptional repayment on a consumer loan. It allows updating an existing resource related to a specific consumer loan and repayment. This can be used to process a special repayment request outside of the regular loan repayment schedule.

  **Limitations**

  PUT: Based on REST best practices, a suitable naming convention for the path '/ConsumerLoan/{consumerloanid}/Repayment/{repaymentid}/Request' could be:

'/consumer-loans/{consumerloanid}/repayments/{repaymentid}/requests'

In this convention:
- Resource names should be in lowercase.
- Use singular nouns for resource names.
- Use hyphens to separate words in a resource name, improving readability.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ConsumerLoan/{consumerloanid}/Repayment/{repaymentid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ReBQ Retrieve details about a consumer loan repayment

  **Documentation**

  This API path allows you to retrieve details about a specific consumer loan repayment by providing the consumer loan ID and repayment ID as parameters. This service relates to managing consumer loans, including setting up the loan facility and processing various tasks related to the loan product. By using this API, you can access information about a particular repayment associated with a consumer loan.

  **Limitations**

  GET: The name of the path following REST best practices could be:

GET /consumer-loans/{consumerloanid}/repayments/{repaymentid}

</details>

<details open>
  <summary><span style='color:red;'>POST: /ConsumerLoan/{consumerloanid}/Restructuring/Initiate</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks InBQ Initiate consumer loan account restructuring

  **Documentation**

  This API path `/ConsumerLoan/{consumerloanid}/Restructuring/Initiate` allows you to initiate the process of restructuring a consumer loan account. By making a POST request to this endpoint with the specific consumer loan ID, you can create a new resource that starts the restructuring process for that particular loan account. This service domain manages all the tasks related to modifying the terms or structure of the loan to accommodate changes requested by the consumer.

  **Limitations**

  POST: The name of the path '/ConsumerLoan/{consumerloanid}/Restructuring/Initiate' following REST best practices could be:

'/consumer-loans/{consumerloanid}/restructuring/initiate'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ConsumerLoan/{consumerloanid}/Restructuring/{restructuringid}/Update</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks UpBQ Update details of a consumer loan or restructuring activities

  **Documentation**

  This API path allows you to update details of a consumer loan or restructuring activities. By sending a PUT request to this endpoint with the specific consumer loan ID and restructuring ID, you can make changes to existing consumer loan information or restructuring activities associated with the loan. This functionality is part of a service domain that manages consumer loan products, from their initial setup to ongoing processing tasks.

  **Limitations**

  PUT: Based on REST best practices, a possible name for the path could be:

PUT /consumer-loans/{consumerloanid}/restructurings/{restructuringid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ConsumerLoan/{consumerloanid}/Restructuring/{restructuringid}/Exchange</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks EcBQ Accept, reject etc a consumer loan restructuring proposal

  **Documentation**

  This API path allows you to update an existing consumer loan restructuring proposal by providing the consumer loan ID and the restructuring ID. It is used to process tasks such as accepting or rejecting a consumer loan restructuring proposal within the consumer loan product fulfillment system.

  **Limitations**

  PUT: The name of the path should be:

/consumer-loans/{consumerloanid}/restructurings/{restructuringid}/exchanges

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ConsumerLoan/{consumerloanid}/Restructuring/{restructuringid}/Request</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks RqBQ Request activity associated with a restructuring effort (e.g. negotiate)

  **Documentation**

  This API path allows you to update a request related to a restructuring activity of a consumer loan. For example, if there are negotiations or other tasks involved in restructuring a consumer loan, this API can be used to update and manage those requests.

  **Limitations**

  PUT: The name of the path should follow these REST best practices principles:

1. Nouns over verbs: Use nouns to represent resources rather than verbs.
2. Use plural nouns: Use plural nouns for consistency and to represent collections.
3. Use lowercase letters: Keep all letters lowercase for simplicity and consistency.

Based on these principles, the name of the path could be:  
/consumerloans/{consumerloanid}/restructurings/{restructuringid}/requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /ConsumerLoan/{consumerloanid}/Restructuring/{restructuringid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks ReBQ Retrieve details about a consumer loan restructuring task

  **Documentation**

  This API path is used to retrieve details about a consumer loan restructuring task. It allows you to access information related to a specific consumer loan and its restructuring process by providing the consumer loan ID and the restructuring ID as parameters. This information can include details about the changes made to the loan terms, the status of the restructuring task, and any other relevant data associated with the loan reconfiguration process.

  **Limitations**

  GET: The name of the path should be `/consumer-loans/{consumerloanId}/restructurings/{restructuringId}`.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ConsumerLoan/{consumerloanid}/ServiceFees/{servicefeesid}/Update</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks Update details about an applied service fee

  **Documentation**

  This API path allows you to update details about a service fee that is associated with a specific consumer loan. By making a PUT request to this path with the relevant consumer loan ID and service fee ID, you can modify information about the service fee, such as its amount or description, within the context of the consumer loan product.

  **Limitations**

  PUT: The name of the path should be:

PUT /consumer-loans/{consumerloanid}/service-fees/{servicefeesid}

</details>

<details open>
  <summary><span style='color:red;'>POST: /ConsumerLoan/{consumerloanid}/AmountBlock/Initiate</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks Initiate an amount block

  **Documentation**

  This API path, `/ConsumerLoan/{consumerloanid}/AmountBlock/Initiate`, allows you to create a new resource for a consumer loan by initiating an amount block associated with a specific consumer loan ID. This action is part of the process of setting up a consumer loan facility and carrying out various scheduled and on-demand tasks related to the loan product. The amount block initiation likely involves reserving or blocking a specific amount of funds for the consumer loan within the system.

  **Limitations**

  POST: The name of the path should be:

/consumer-loans/{consumerLoanId}/amount-block/initiate

In REST best practices, it is recommended to use lowercase letters and separate words with hyphens in URIs for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ConsumerLoan/{consumerloanid}/AmountBlock/{amountblockid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks Retrieve details about an amount block

  **Documentation**

  This API path allows you to retrieve details about a specific amount block related to a consumer loan. By providing the consumer loan ID and the amount block ID as parameters in the request, you can access information about the blocked amount associated with the loan. This information can include details such as the amount blocked, the reasons for the block, and any relevant processing tasks related to the blocked amount.

  **Limitations**

  GET: Following REST best practices, the path should be named in a way that clearly indicates the resource being interacted with. Based on the path provided, a suitable name could be:

GET /consumer-loans/{consumerloanid}/amount-blocks/{amountblockid}

This naming convention follows the guidelines of using lowercase letters and hyphens to separate words in the path, making it more readable and consistent.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ConsumerLoan/{consumerloanid}/AmountBlock/{amountblockid}/Update</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks Update details of an amount block

  **Documentation**

  This API path allows clients to update the details of an amount block associated with a specific consumer loan. The client needs to provide the consumer loan ID and the amount block ID to specify which amount block they want to update. By using a PUT request method, clients can modify the information related to the amount block, such as changing the amount or other details linked to it.

  **Limitations**

  PUT: The name of the path should be:

/ConsumerLoans/{consumerloanid}/AmountBlocks/{amountblockid}/Update

This follows the REST best practices by using plural nouns to represent the resources and using a descriptive path that clearly identifies the hierarchy of resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ConsumerLoan/{consumerloanid}/BookingAuthorization/{bookingauthorizationid}/Execute</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks Execute Authorization of Booking

  **Documentation**

  This BIAN API path `/ConsumerLoan/{consumerloanid}/BookingAuthorization/{bookingauthorizationid}/Execute` allows you to update an existing resource related to a consumer loan. Specifically, it focuses on executing the authorization of a booking for a consumer loan. This means that through this API, you can carry out the necessary actions to authorize and process a booking associated with a consumer loan product.

  **Limitations**

  PUT: The name of the path should be:

/consumer-loans/{consumerloanid}/booking-authorizations/{bookingauthorizationid}/execute

Following REST best practices, the path should be in all lowercase letters, use hyphens to separate words, and use plural nouns for resources where applicable.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ConsumerLoan/{consumerloanid}/IssuedDevice/Initiate</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks Initiate Provision of Issued Device

  **Documentation**

  This API path allows you to initiate the provision of an issued device for a consumer loan using a POST request. It is a part of the consumer loan fulfillment process and allows you to set up the loan facility and complete any necessary processing tasks related to providing the device to the consumer.

  **Limitations**

  POST: The name of the path should be:

/ConsumerLoans/{consumerloanid}/IssuedDevices/Initiate

I have made the following adjustments based on REST best practices:
- "ConsumerLoans" is in plural form to indicate that it represents a collection of consumer loans.
- "{consumerloanid}" is singular and in camelCase format to represent a specific consumer loan identifier.
- "IssuedDevices" is in plural form to indicate that it represents a collection of issued devices associated with

</details>

<details open>
  <summary><span style='color:red;'>GET: /ConsumerLoan/{consumerloanid}/IssuedDevice/{issueddeviceid}/Retrieve</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks Retrieve Details about Issued Device

  **Documentation**

  This API path allows you to retrieve details about a specific issued device related to a consumer loan. By providing the consumer loan ID and the issued device ID, you can access information about the particular device that has been issued as part of the consumer loan process.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

`GET /consumer-loans/{consumerloanid}/issued-devices/{issueddeviceid}`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ConsumerLoan/{consumerloanid}/IssuedDevice/{issueddeviceid}/Update</span></summary>

  **Description**

  This service domain handles the fulfillment of a consumer loan product. This includes the initial set-up of the loan facility and the completion of scheduled and ad-hoc product processing tasks Update Details of Issued Device Allocated to This Account

  **Documentation**

  This API path allows you to update the details of a device that has been allocated to a specific consumer loan account. By using this API, you can modify the information related to the issued device, such as changing its attributes or updating any associated data with the device in the context of the consumer loan account.

  **Limitations**

  PUT: The name of the path '/ConsumerLoan/{consumerloanid}/IssuedDevice/{issueddeviceid}/Update' following REST best practices could be:

PUT /consumer-loans/{consumerloanid}/issued-devices/{issueddeviceid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
