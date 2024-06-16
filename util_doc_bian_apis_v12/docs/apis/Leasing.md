---
id: Leasing
title: Leasing
---

<h1 style='color:red;'>Leasing</h1>

**BIAN Documentation:** [Leasing v12](https://app.swaggerhub.com/apis/BIAN-3/Leasing/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /Leasing/{leasingid}/Control</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary CoCR Control the processing of Leasing Facility

  **Documentation**

  This API path allows users to update or modify an existing leasing facility by controlling its processing. Users can make changes to the leasing terms or other related details associated with a specific leasing agreement identified by its leasing ID. This functionality is designed to enable customers to manage and monitor the processing of the leasing facility, potentially adjusting financing conditions or collateral requirements as needed.

  **Limitations**

  PUT: The name of the path could be:

```
/leasing/{leasingid}/control
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Leasing/{leasingid}/Exchange</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary EcCR Accept, verify, etc. aspects of Leasing Facility processing

  **Documentation**

  This API path allows you to update an existing leasing facility by exchanging data related to the leasing transaction identified by the "leasingid." It facilitates the process of financing equipment purchases through leasing, where the leased item serves as collateral, and involves accepting, verifying, and managing different aspects of the leasing facility.

  **Limitations**

  PUT: Following REST best practices, the name of the path '/Leasing/{leasingid}/Exchange' should appropriately represent the action it performs. 

A suitable name for this path could be '/Leasing/{leasingid}/ExchangeAsset', which conveys that the endpoint is used to exchange or replace an asset related to the specified leasing ID. 

It is important to use clear and meaningful names for paths in REST APIs to enhance usability and maintainability.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Leasing/{leasingid}/Execute</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary ExCR Execute an available automated action for Leasing Facility

  **Documentation**

  This API path allows you to update an existing leasing facility by executing an automated action associated with that facility. The leasing facility refers to a financing arrangement where customers can use the purchased equipment as collateral when needed. By using this API, you can trigger automated actions related to the leasing facility, such as processing payments or updating terms and conditions.

  **Limitations**

  PUT: The name of the path '/Leasing/{leasingid}/Execute' should be something like '/leasing/{leasingid}/execution'. It's best to use words that represent resources and actions in a clear and consistent way according to RESTful design principles.

</details>

<details open>
  <summary><span style='color:red;'>POST: /Leasing/Initiate</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary InCR Instantiate a new Leasing Facility

  **Documentation**

  This BIAN API path allows you to create a new Leasing Facility. It enables customers to finance their equipment purchases by using the leased item as collateral when needed. This API is designed to help initiate the process of setting up a new lease agreement for equipment financing.

  **Limitations**

  POST: The name of the path '/Leasing/Initiate' should ideally be changed to '/leasing' following REST best practices. RESTful URIs should be in all lowercase letters and use hyphens to separate words for improved readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>GET: /Leasing/{leasingid}/Retrieve</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary ReCR Retrieve details about any aspect of Leasing Facility

  **Documentation**

  This API path allows you to retrieve information about a specific leasing facility identified by a leasing ID. This leasing facility is a product that enables customers to finance equipment purchases by using the purchased equipment itself as collateral when required. You can use this API to get details about any aspect of the leasing facility, such as terms, conditions, and other relevant information.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

GET /leasing/{leasingid}

This path indicates that a GET request can be made to the "/leasing/{leasingid}" endpoint to retrieve a specific leasing resource identified by the leasingid parameter.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Leasing/{leasingid}/Request</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary RqCR Request manual intervention or a decision with respect to Leasing Facility

  **Documentation**

  This API path allows you to update and make changes to an existing leasing request identified by the leasing ID. It is used for requesting manual intervention or a decision regarding the leasing facility. Customers can use this API to manage their leasing arrangements, especially when additional decisions or approvals are needed for their equipment financing using the leased item as collateral.

  **Limitations**

  PUT: A more appropriate name for the path '/Leasing/{leasingid}/Request' following REST best practices could be '/leasings/{leasingid}/requests'. 

In RESTful API design, it is common to use plural nouns for resource names to denote collections. Using lowercase letters and separating words with hyphens is also a good practice for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Leasing/{leasingid}/Update</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary UpCR Update details relating to Leasing Facility

  **Documentation**

  This BIAN API path allows users to update specific details related to a leasing facility by using the unique identifier for that particular leasing facility. It enables customers to make changes or modifications to information about their leased equipment purchase finance arrangements. Users can update various aspects of the leasing facility using this API endpoint.

  **Limitations**

  PUT: The name of the path should be:

PATCH /Leasing/{leasingid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Leasing/{leasingid}/Fees/{feesid}/Exchange</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary EcBQ Accept, verify, etc. aspects of Fees processing

  **Documentation**

  This API path is used to update information related to fees within a leasing transaction. Specifically, it allows you to update details of a fee associated with a particular leasing ID and fee ID. This can include modifying the amount of the fee, its due date, or any other relevant information.

  **Limitations**

  PUT: The name of the path '/Leasing/{leasingid}/Fees/{feesid}/Exchange' following REST best practices could be something like:

'/leasing/{leasingid}/fees/{feesid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Leasing/{leasingid}/Lien/{lienid}/Exchange</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary EcBQ Accept, verify, etc. aspects of Lien processing

  **Documentation**

  This specific BIAN API path (/Leasing/{leasingid}/Lien/{lienid}/Exchange) allows you to update an existing resource related to the lien processing within the leasing system. It specifically involves the exchange of information or actions related to a particular leasing contract (identified by {leasingid}) and the associated lien (identified by {lienid}). By using a PUT method, you can modify or update details, such as accepting, verifying, or managing aspects of the lien processing within the leasing agreement. This API is designed to facilitate the necessary actions or changes related to the collateral (the leased item) used for financing equipment purchases in the leasing process.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/leasing/{leasingid}/liens/{lienid}/exchanges

In this naming convention:
- Use lowercase letters for paths.
- Use plural nouns for same-level paths to indicate collections.
- Use singular nouns for paths representing specific resources.
- Use hierarchical path structures to represent relationships between resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Leasing/{leasingid}/Payments/{paymentsid}/Exchange</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary EcBQ Accept, verify, etc. aspects of Payments processing

  **Documentation**

  This API path allows you to update a specific payment exchange related to a leasing transaction. It is used in the context of leasing products where customers are financing equipment purchases by using the leased item as collateral. The API helps with processing payments, including accepting, verifying, and managing aspects of the payment exchange to ensure the transaction is completed successfully.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/leasing/{leasingId}/payments/{paymentsId}/exchange

In RESTful APIs, it is common practice to use lowercase letters and separate words with dashes in URLs for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Leasing/{leasingid}/Sweep/{sweepid}/Exchange</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary EcBQ Accept, verify, etc. aspects of Sweep processing

  **Documentation**

  This API path allows you to update an existing resource related to leasing. Specifically, it deals with the Sweep processing aspect of a leasing transaction. Sweep processing refers to the action of using the leased equipment as collateral when needed. By making a PUT request to this path with the appropriate identifiers (leasingid and sweepid), you can update and manage the details related to the leasing transaction, such as accepting, verifying, and processing the sweep transaction.

  **Limitations**

  PUT: A possible name for this path following REST best practices could be:

'/leasing/{leasingid}/sweeps/{sweepid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>POST: /Leasing/{leasingid}/Collateral/Initiate</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary InBQ Instantiate a new Collateral

  **Documentation**

  This API path `/Leasing/{leasingid}/Collateral/Initiate` allows users to create a new collateral for a leasing agreement. When customers want to finance equipment purchases using the leased item as collateral, they can use this API to initiate the process of adding a new collateral to the leasing contract.

  **Limitations**

  POST: The name of the path '/Leasing/{leasingid}/Collateral/Initiate' could be improved following REST best practices by using a more specific and descriptive naming convention, such as:

POST /leasing/{leasingid}/collateral-initiation

This naming convention follows the HTTP method (POST) and uses a clear and concise description of the action being performed ('collateral-initiation') while also maintaining the hierarchy within the URI path.

</details>

<details open>
  <summary><span style='color:red;'>POST: /Leasing/{leasingid}/CorporateAction/Initiate</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary InBQ Instantiate a new Corporate Action

  **Documentation**

  This BIAN API path allows you to create a new corporate action for a specific leasing transaction identified by the leasing ID. Corporate actions could include important events or decisions related to the leasing agreement, such as updating terms, changing ownership, or addressing any issues that arise during the leasing process. This endpoint helps facilitate the management and processing of corporate actions within the context of leasing activities.

  **Limitations**

  POST: The name of the path should be: 

```
POST /leasing/{leasingId}/corporate-actions
```

Following REST best practices, it is recommended to use lowercase letters and hyphens for readability. Also, plural nouns should be used for endpoint names.

</details>

<details open>
  <summary><span style='color:red;'>POST: /Leasing/{leasingid}/Deposits/Initiate</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary InBQ Instantiate a new Deposits

  **Documentation**

  This BIAN API path allows users to initiate a new deposit for a specific leasing ID. When a customer wants to finance equipment purchases through a leasing agreement, they may need to provide a deposit as collateral. Using this API, users can create a new deposit transaction linked to the leasing agreement.

  **Limitations**

  POST: The name of the path should be "/leasing/{leasingid}/deposits/initiate" to follow REST best practices. The path should use lowercase letters and hyphens to separate words for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>POST: /Leasing/{leasingid}/Fees/Initiate</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary InBQ Instantiate a new Fees

  **Documentation**

  This API path allows a user to initiate new fees associated with a specific leasing transaction identified by the leasing ID. By making a POST request to this endpoint, users can create a new resource for calculating and processing fees related to financing equipment purchases through leasing. This functionality is useful for managing and tracking fees that may be incurred during the leasing process.

  **Limitations**

  POST: The name of the path '/Leasing/{leasingid}/Fees/Initiate' should be something like '/leasings/{leasingid}/fees/initiate' following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>POST: /Leasing/{leasingid}/FinancialInstrument/Initiate</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary InBQ Instantiate a new Financial Instrument

  **Documentation**

  This BIAN API path allows users to initiate a new financial instrument for leasing a specific item. Users can use this API to create a new resource that enables them to finance equipment purchases by leveraging the leased item as collateral if needed.

  **Limitations**

  POST: The name of the path should be:

```
POST /leasing/{leasingid}/financial-instruments
``` 

This path follows REST best practices by using lowercase letters, dashes for readability, and includes the appropriate HTTP method 'POST' to initiate a new financial instrument for a specific leasing account identified by {leasingid}.

</details>

<details open>
  <summary><span style='color:red;'>POST: /Leasing/{leasingid}/IssuedDevice/Initiate</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary InBQ Instantiate a new Issued Device

  **Documentation**

  This API path is used to initiate the creation of a new Issued Device for a specific leasing ID. It allows customers to finance their equipment purchases by using the leased item as collateral. Basically, this API helps in starting the process of setting up a new device that is being issued as part of a leasing agreement.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

```
/leasing/{leasingId}/issued-devices/initiate
```

</details>

<details open>
  <summary><span style='color:red;'>POST: /Leasing/{leasingid}/Lien/Initiate</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary InBQ Instantiate a new Lien

  **Documentation**

  This BIAN API path (/Leasing/{leasingid}/Lien/Initiate) is used to create a new resource for initiating a lien related to a specific leasing transaction identified by a leasing ID. A lien is a legal right or interest that a lender has over a customer's asset (the leased item) as collateral. By using this API path, customers can start the process of establishing a lien to secure the financing of their equipment purchase through the leasing arrangement.

  **Limitations**

  POST: A RESTful name for the path '/Leasing/{leasingid}/Lien/Initiate' could be:

POST /leasings/{leasingid}/liens

</details>

<details open>
  <summary><span style='color:red;'>POST: /Leasing/{leasingid}/Payments/Initiate</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary InBQ Instantiate a new Payments

  **Documentation**

  This BIAN API path `/Leasing/{leasingid}/Payments/Initiate` allows you to create a new payment for a leasing transaction. It is used when customers want to finance equipment purchases by leasing the item and using it as collateral if needed. This API initiates the process of setting up a new payment related to a specific leasing ID.

  **Limitations**

  POST: The name of the path '/Leasing/{leasingid}/Payments/Initiate' should be structured as a RESTful resource endpoint. Referring to best practices, the name should be descriptive, use nouns to represent resources, and avoid including actions in the endpoint name.

Following these guidelines, a more suitable name for the described path could be:

'/leasing/{leasingid}/payments'

This endpoint is focused on the "payments" resource within a specific "leasing" context, and it allows for initiating

</details>

<details open>
  <summary><span style='color:red;'>POST: /Leasing/{leasingid}/Sweep/Initiate</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary InBQ Instantiate a new Sweep

  **Documentation**

  This API path allows users to initiate a new sweep in the leasing system. A sweep is a financial operation where funds are automatically transferred between accounts to maintain a target balance. By using this API, customers can initiate a new sweep, which can help them finance equipment purchases by using the leased item as collateral if needed.

  **Limitations**

  POST: Following REST best practices, the name of the path '/Leasing/{leasingid}/Sweep/Initiate' can be named as follows:

```
POST /leasing/{leasingid}/sweep
``` 

In this updated version, the method is changed to POST (as it is an operation to initiate a sweep) and the resource name 'sweep' is kept in lowercase as per convention. The action 'Initiate' is implied by the POST request to the 'sweep' resource

</details>

<details open>
  <summary><span style='color:red;'>POST: /Leasing/{leasingid}/Withdrawals/Initiate</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary InBQ Instantiate a new Withdrawals

  **Documentation**

  This BIAN API path `/Leasing/{leasingid}/Withdrawals/Initiate` allows customers to initiate the process of withdrawing money against a leasing agreement they have for a specific item. This withdrawal can be used to finance equipment purchases by using the leased item as collateral. The API helps create a new resource for the withdrawal transaction.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

```
POST /leasing/{leasingid}/withdrawals
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /Leasing/{leasingid}/ClearingandSettlement/{clearingandsettlementid}/Retrieve</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary ReBQ Retrieve details about any aspect of Clearing and Settlement

  **Documentation**

  This API path is used to retrieve specific details about the clearing and settlement process within a leasing transaction. It enables customers who are using leasing products to finance equipment purchases to access information related to the clearing and settlement activities associated with their transaction. The API allows users to retrieve details about the specific clearing and settlement ID provided within the context of a leasing agreement. This information might include important steps, timelines, or requirements related to the process of clearing payments and settling transactions within the leasing arrangement.

  **Limitations**

  GET: Following REST best practices, a more appropriate name for the path would be:

```
/leasing/{leasingId}/clearing-and-settlement/{clearingAndSettlementId}
```

This path better reflects the resource hierarchy and uses lowercase letters with hyphens to separate words for better readability.

</details>

<details open>
  <summary><span style='color:red;'>GET: /Leasing/{leasingid}/Collateral/{collateralid}/Retrieve</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary ReBQ Retrieve details about any aspect of Collateral

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific aspect of collateral related to a leasing transaction. The API is designed for leasing products that involve financing equipment purchases by using the leased item as collateral when required. By using this API path, you can access detailed information about a particular collateral associated with a specific leasing transaction.

  **Limitations**

  GET: In following REST best practices, the name of the path should be:

GET /leasing/{leasingid}/collateral/{collateralid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /Leasing/{leasingid}/CorporateAction/{corporateactionid}/Retrieve</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary ReBQ Retrieve details about any aspect of Corporate Action

  **Documentation**

  This BIAN API path `/Leasing/{leasingid}/CorporateAction/{corporateactionid}/Retrieve` allows users to retrieve information about a specific corporate action related to a leasing transaction. By providing the `leasingid` and `corporateactionid` in the request, users can access details about a corporate action that has occurred within the context of a leasing arrangement. This API is useful for obtaining specific information about corporate actions taken in relation to a leasing agreement, such as changes or events that may impact the leased equipment or financing terms.

  **Limitations**

  GET: Based on REST best practices, the path `/Leasing/{leasingid}/CorporateAction/{corporateactionid}/Retrieve` should be simplified to be more resource-oriented and focus on nouns rather than verbs. 

A more appropriate resource-based path following REST best practices could be:

```
/leasings/{leasingid}/corporateActions/{corporateactionid}
```

This path indicates the hierarchy of the resources (leasing and corporate action) and specifies a specific corporate action under a particular leasing

</details>

<details open>
  <summary><span style='color:red;'>GET: /Leasing/{leasingid}/Deposits/{depositsid}/Retrieve</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary ReBQ Retrieve details about any aspect of Deposits

  **Documentation**

  This API path allows you to retrieve details about a specific deposit associated with a leasing product. By providing the leasing ID and the deposit ID in the URL, you can access information related to the deposit, such as its status, amount, or other relevant details. This functionality is useful for users who need specific information about deposits within the context of leasing agreements.

  **Limitations**

  GET: The name of the path should be: GET /leasing/{leasingid}/deposits/{depositsid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /Leasing/{leasingid}/Fees/{feesid}/Retrieve</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary ReBQ Retrieve details about any aspect of Fees

  **Documentation**

  This BIAN API path is used to retrieve details about a specific fee associated with a leasing agreement. By providing the leasing ID and fee ID as parameters in the path, this API allows users to access information about the fees charged as part of the leasing process. This can include details such as the amount of the fee, when it is due, and what it is for. It provides a way for customers and financial institutions to access and understand the costs associated with leasing equipment.

  **Limitations**

  GET: A more appropriate name for the path '/Leasing/{leasingid}/Fees/{feesid}/Retrieve' following REST best practices could be:

GET /leases/{leasingid}/fees/{feesid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /Leasing/{leasingid}/FinancialInstrument/{financialinstrumentid}/Retrieve</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary ReBQ Retrieve details about any aspect of Financial Instrument

  **Documentation**

  This API endpoint allows you to retrieve details about a specific financial instrument associated with a leasing transaction. You provide the leasing id and the financial instrument id as parameters in the URL, and the API will return information about that particular financial instrument. This information could include details such as terms, conditions, interest rates, and other relevant information related to the financial instrument used for leasing a specific equipment purchase.

  **Limitations**

  GET: The name for this path should be: 

GET /leasing/{leasingid}/financial-instrument/{financialinstrumentid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /Leasing/{leasingid}/Interest/{interestid}/Retrieve</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary ReBQ Retrieve details about any aspect of Interest

  **Documentation**

  This API path `/Leasing/{leasingid}/Interest/{interestid}/Retrieve` is used to retrieve details about a specific aspect of interest related to a leasing agreement. It allows users to access information about the interest associated with a particular leasing transaction identified by the `leasingid` and the specific interest aspect identified by the `interestid`. This API is part of the leasing functionality that enables customers to finance equipment purchases by using the leased item as collateral if needed.

  **Limitations**

  GET: To follow REST best practices, the name of the path should be:

`/leasing/{leasingid}/interests/{interestid}`

This path should represent a specific resource within the general collection of interests associated with a particular leasing contract.

</details>

<details open>
  <summary><span style='color:red;'>GET: /Leasing/{leasingid}/IssuedDevice/{issueddeviceid}/Retrieve</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary ReBQ Retrieve details about any aspect of Issued Device

  **Documentation**

  This API path allows you to retrieve details about a specific issued device that is associated with a particular leasing agreement. By providing the leasing ID and the issued device ID, you can request information about any aspect of that issued device within the context of the leasing transaction. This can include details such as the type of equipment, current status, usage history, or any other relevant information related to the leased item.

  **Limitations**

  GET: A RESTful approach to naming this path could be:

```
GET /leasing/{leasingid}/issuedDevices/{issueddeviceid}
```

In RESTful conventions, plural nouns are preferred for resources and individual resource identifiers should be in lowercase.

</details>

<details open>
  <summary><span style='color:red;'>GET: /Leasing/{leasingid}/Lien/{lienid}/Retrieve</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary ReBQ Retrieve details about any aspect of Lien

  **Documentation**

  This API path `/Leasing/{leasingid}/Lien/{lienid}/Retrieve` allows you to retrieve specific details about a lien associated with a particular leasing transaction. A lien is a legal right or interest that a lender has in the equipment being financed through the lease. By using this API, you can provide the `leasingid` and `lienid` as parameters to access detailed information about the lien, such as its status, validity, or other related data. This can be useful for customers and financial institutions to track and manage the liens associated with equipment leasing agreements.

  **Limitations**

  GET: The name of the path should be:

```
GET /leasing/{leasingid}/lien/{lienid}
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /Leasing/{leasingid}/Payments/{paymentsid}/Retrieve</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary ReBQ Retrieve details about any aspect of Payments

  **Documentation**

  This API path allows you to retrieve details about a specific payment associated with a leasing contract. By providing the `leasingid` and `paymentsid` as part of the path, you can access information related to the payments made within the leasing agreement. This feature is useful for tracking and managing payment information for leased equipment purchases.

  **Limitations**

  GET: Based on REST best practices, the path naming should focus on the resource being accessed rather than the action being performed. A possible name for the given path could be:

GET '/leasing/{leasingid}/payments/{paymentsid}'

This URL structure clearly identifies the resources being accessed (leasing and payments) and the specific instance of each resource (identified by {leasingid} and {paymentsid}). The use of "Retrieve" in the path is redundant in RESTful design as the HTTP verb "GET

</details>

<details open>
  <summary><span style='color:red;'>GET: /Leasing/{leasingid}/Sweep/{sweepid}/Retrieve</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary ReBQ Retrieve details about any aspect of Sweep

  **Documentation**

  This API path is used to retrieve details about any aspect of a sweep within a leasing context. Customers who are using the leasing products to finance equipment purchases can use this API to retrieve specific information related to a particular sweep transaction. It allows users to gather information about the sweep identified by the sweepid within the context of the provided leasingid.

  **Limitations**

  GET: The name for this path, following REST best practices, should be:  
GET /leasing/{leasingid}/sweep/{sweepid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /Leasing/{leasingid}/Withdrawals/{withdrawalsid}/Retrieve</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary ReBQ Retrieve details about any aspect of Withdrawals

  **Documentation**

  This API path is designed to retrieve details about a specific withdrawal associated with a leasing transaction. It allows you to access information related to a withdrawal made in the context of a leasing agreement. This could include details such as the amount withdrawn, the date of the withdrawal, and other relevant information tied to that specific transaction.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:
'/leasing/{leasingid}/withdrawals/{withdrawalsid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Leasing/{leasingid}/Collateral/{collateralid}/Request</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary RqBQ Request manual intervention or a decision with respect to Collateral

  **Documentation**

  This API path allows for updating an existing request related to collateral in the leasing process. It enables customers to use leased equipment as collateral for financing purposes. Specifically, it triggers a request for manual intervention or a decision regarding the collateral involved in the leasing transaction.

  **Limitations**

  PUT: A good name for the path '/Leasing/{leasingid}/Collateral/{collateralid}/Request' following REST best practices could be:

'/leases/{leasingid}/collaterals/{collateralid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Leasing/{leasingid}/Fees/{feesid}/Request</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary RqBQ Request manual intervention or a decision with respect to Fees

  **Documentation**

  This API path allows you to update an existing fee associated with a specific leasing agreement. It is used for requesting manual intervention or making a decision regarding the fees related to a particular leasing transaction. In essence, it provides a way to manage and modify fees within the leasing process by specifying the leasing ID and the corresponding fee ID.

  **Limitations**

  PUT: The name of the path '/Leasing/{leasingid}/Fees/{feesid}/Request' should be named in a way that is descriptive and follows REST best practices. A potential name for this path could be:

'/leasing/{leasingid}/fees/{feesid}/request'

It is recommended to use lowercase letters, separate words with hyphens, and keep the path descriptive of the resources it represents.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Leasing/{leasingid}/ClearingandSettlement/{clearingandsettlementid}/Update</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary UpBQ Update details relating to Clearing and Settlement

  **Documentation**

  This BIAN API path allows you to update the details related to the clearing and settlement process for a specific leasing transaction. This could include information about how payments are processed or how the collateral is managed for the leased equipment purchase.

  **Limitations**

  PUT: The name of the path should be:

/leasing/{leasingId}/clearing-and-settlement/{clearingAndSettlementId}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Leasing/{leasingid}/Collateral/{collateralid}/Update</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary UpBQ Update details relating to Collateral

  **Documentation**

  This API path allows you to update specific details related to collateral in a leasing transaction. For example, if a customer is using a piece of equipment as collateral to finance their purchase, this API can be used to update information about that collateral, such as any changes in ownership or condition.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should follow a resource-oriented approach and should not include actions like "Update". A more appropriate name for the path could be:

'/leasing/{leasingid}/collateral/{collateralid}'

This naming convention focuses on the resources being manipulated (leasing and collateral) rather than the operation being performed (update). The HTTP method used (e.g., PUT or PATCH) on this path would indicate the intention to update the resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Leasing/{leasingid}/CorporateAction/{corporateactionid}/Update</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary UpBQ Update details relating to Corporate Action

  **Documentation**

  This BIAN API path allows users to update details related to a corporate action for a specific leasing product identified by {leasingid}. Users can make modifications to the corporate action information by specifying the {corporateactionid} and sending a PUT request to update the resource. This feature is useful for managing and keeping track of corporate actions associated with leasing transactions.

  **Limitations**

  PUT: A possible name for that path following REST best practices could be:

PATCH /leasing/{leasingid}/corporate-action/{corporateactionid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Leasing/{leasingid}/Deposits/{depositsid}/Update</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary UpBQ Update details relating to Deposits

  **Documentation**

  This API endpoint allows you to update specific details related to deposits in a leasing transaction. The deposits are associated with a particular leasing agreement identified by {leasingid}. By making a PUT request to this path with the relevant {depositsid}, you can modify the information stored about the deposits within that leasing agreement. This API is designed to help manage and track financial details linked to leasing transactions.

  **Limitations**

  PUT: In adherence to REST best practices, the name of the path '/Leasing/{leasingid}/Deposits/{depositsid}/Update' could be simplified to:

PUT /leasing/{leasingid}/deposits/{depositsid}

This naming convention reflects the use of HTTP methods to perform CRUD operations (in this case, update) on specific resources (leasing and deposits) identified by their unique identifiers (leasingid and depositsid).

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Leasing/{leasingid}/Fees/{feesid}/Update</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary UpBQ Update details relating to Fees

  **Documentation**

  This API path allows you to update specific details related to fees for a leasing product. By using the provided {leasingid} and {feesid} placeholders in the path, you can target a specific leasing transaction and its associated fee. The PUT method is used to update the existing information related to fees. This can include adjusting the fee amounts, due dates, terms, or any other fee-related details linked to the leasing agreement.

  **Limitations**

  PUT: A suitable name for this path could be: PUT /leasing/{leasingid}/fees/{feesid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Leasing/{leasingid}/FinancialInstrument/{financialinstrumentid}/Update</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary UpBQ Update details relating to Financial Instrument

  **Documentation**

  This API path, "/Leasing/{leasingid}/FinancialInstrument/{financialinstrumentid}/Update", allows users to update the details related to a financial instrument that is being used in a leasing agreement. By making a HTTP PUT request to this path with the appropriate leasing ID and financial instrument ID, users can modify specific information about the financial instrument tied to a leasing contract. This API is designed to provide a way to make updates to financial details in a leasing context efficiently.

  **Limitations**

  PUT: The name of the path should be:
```
PUT /leasing/{leasingid}/financial-instrument/{financialinstrumentid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Leasing/{leasingid}/Interest/{interestid}/Update</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary UpBQ Update details relating to Interest

  **Documentation**

  This API path allows you to update details related to the interest associated with a specific leasing agreement. By specifying the leasing ID and the interest ID in the path, you can make changes to the interest terms, rates, or any other relevant information for that particular leasing agreement. This API can be used to help manage and modify the interest details for leasing products offered to customers.

  **Limitations**

  PUT: The name for the path '/Leasing/{leasingid}/Interest/{interestid}/Update' based on REST best practices could be something like:

PUT /leasing/{leasingid}/interest/{interestid}

This name indicates that a PUT request should be used to update the specific interest associated with the leasing ID. It follows the convention of using the HTTP method to convey the action and resource being affected.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Leasing/{leasingid}/IssuedDevice/{issueddeviceid}/Update</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary UpBQ Update details relating to Issued Device

  **Documentation**

  This API path allows you to update information related to an issued device within a specific leasing transaction. For example, you could use this to change details about the device being leased, such as updating its serial number or warranty information.

  **Limitations**

  PUT: The name of the path should be PUT /leasing/{leasingid}/issueddevices/{issueddeviceid}.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Leasing/{leasingid}/Lien/{lienid}/Update</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary UpBQ Update details relating to Lien

  **Documentation**

  This API path is used to update details related to a lien within a specific leasing agreement. It allows users to modify information associated with a particular lien, which is a legal claim that a lender may have on the leased equipment as collateral. By making a PUT request to this endpoint with the relevant leasing ID and lien ID, users can update and maintain accurate records and information about the lien secured against the equipment being financed through the leasing agreement.

  **Limitations**

  PUT: The name of the path should be:

PUT /Leasing/{leasingid}/Lien/{lienid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Leasing/{leasingid}/Payments/{paymentsid}/Update</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary UpBQ Update details relating to Payments

  **Documentation**

  This API endpoint allows you to update details related to payments for a specific leasing agreement. By providing the leasing ID and payments ID, you can make changes to payment information such as the amount, due date, or payment method. This is useful for keeping track of payments and ensuring accurate payment records for leasing transactions.

  **Limitations**

  PUT: The appropriate name for this path following REST best practices would be:

PUT /leasing/{leasingid}/payments/{paymentsid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Leasing/{leasingid}/Sweep/{sweepid}/Update</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary UpBQ Update details relating to Sweep

  **Documentation**

  This API path allows you to update specific details related to a sweep within a leasing agreement. The sweep may involve using the leased item as collateral for financing equipment purchases. By sending a PUT request to this path with the appropriate leasing ID and sweep ID, you can modify and update information related to the sweep within the leasing agreement.

  **Limitations**

  PUT: The name of the path should be: 

PUT /leasing/{leasingid}/sweep/{sweepid}

This path follows REST best practices by using the HTTP method PUT to update a specific resource identified by the leasingid and sweepid in the URI. The path is in lower case, uses plural nouns for resource names, and uses hyphens to separate multiple words in a resource name.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /Leasing/{leasingid}/Withdrawals/{withdrawalsid}/Update</span></summary>

  **Description**

  The leasing products enables customers to finance equipment purchases using the leased item as collateral when necessary UpBQ Update details relating to Withdrawals

  **Documentation**

  This BIAN API path allows the user to update details related to withdrawals for a specific leasing product transaction. It enables customers to modify information about withdrawals made in the context of financing equipment purchases using the leased item as collateral, if necessary. By sending a PUT request to this endpoint with the appropriate parameters, users can update specific details regarding withdrawals associated with a particular leasing transaction.

  **Limitations**

  PUT: The name of the path should be:

PATCH /Leasing/{leasingid}/Withdrawals/{withdrawalsid}

This follows REST best practices by using the HTTP method PATCH to update resources and by including the IDs of the related resources in the URL path.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
