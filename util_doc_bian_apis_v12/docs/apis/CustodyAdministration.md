---
id: CustodyAdministration
title: CustodyAdministration
---

<h1 style='color:red;'>CustodyAdministration</h1>

**BIAN Documentation:** [CustodyAdministration v12](https://app.swaggerhub.com/apis/BIAN-3/CustodyAdministration/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /CustodyAdministration/{custodyadministrationid}/Control</span></summary>

  **Description**

  A service to provide safe custody services for marketable securities for bank customers CoCR Control the processing of Custody Facility

  **Documentation**

  This API path allows you to update the control settings for the custody facility associated with a specific custody administration ID. It is designed to manage the processing of safe custody services for marketable securities provided to bank customers. The PUT method is used to make changes to an existing resource, in this case, the control settings of the custody facility.

  **Limitations**

  PUT: A suitable name for this path following REST best practices could be:

`/custody-administration/{custodyadministrationid}/controls`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustodyAdministration/{custodyadministrationid}/Exchange</span></summary>

  **Description**

  A service to provide safe custody services for marketable securities for bank customers EcCR Accept, verify, etc. aspects of Custody Facility processing

  **Documentation**

  This BIAN API path is used to update an existing resource related to custody administration in a bank. It specifically deals with the exchange of marketable securities for bank customers, ensuring safe custody services are provided. The PUT method is used to make updates to the information or processes related to this custody facility processing.

  **Limitations**

  PUT: The name of the path should be `/custody-administrations/{custodyadministrationid}/exchanges` following REST best practices. It should be in lowercase letters and use hyphens to separate words for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustodyAdministration/{custodyadministrationid}/Execute</span></summary>

  **Description**

  A service to provide safe custody services for marketable securities for bank customers ExCR Execute an available automated action for Custody Facility

  **Documentation**

  This BIAN API path is used to execute an available automated action for a Custody Facility within the Custody Administration service. It allows for the update of an existing resource related to safe custody services for marketable securities provided to bank customers. By calling this PUT method with the specific Custody Administration ID, you can trigger automated actions associated with managing custody services, such as handling transactions or maintaining security protocols.

  **Limitations**

  PUT: The name of the path should be `/custody-administrations/{custodyadministrationid}/execute` in kebab case, following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustodyAdministration/Initiate</span></summary>

  **Description**

  A service to provide safe custody services for marketable securities for bank customers InCR Instantiate a new Custody Facility

  **Documentation**

  This API path `/CustodyAdministration/Initiate` is used to create a new Custody Facility for providing safe custody services for marketable securities to bank customers. When called using a POST method, it will instantiate a new facility that can securely hold and manage customers' securities.

  **Limitations**

  POST: The path should be named as follows according to REST best practices:

```
POST /custody-administration/initiate
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustodyAdministration/{custodyadministrationid}/Retrieve</span></summary>

  **Description**

  A service to provide safe custody services for marketable securities for bank customers ReCR Retrieve details about any aspect of Custody Facility

  **Documentation**

  This API path allows you to retrieve details about a specific aspect of a Custody Administration service provided by a bank. It is used to access information about safe custody services for marketable securities offered to bank customers. By specifying the custody administration ID in the path, you can retrieve specific information related to that particular Custody Facility within the service.

  **Limitations**

  GET: The name of the path should be:

GET /custody-administrations/{custodyadministrationid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustodyAdministration/{custodyadministrationid}/Request</span></summary>

  **Description**

  A service to provide safe custody services for marketable securities for bank customers RqCR Request manual intervention or a decision with respect to Custody Facility

  **Documentation**

  This BIAN API path allows you to update an existing request for manual intervention or a decision related to the custody facility for marketable securities held by bank customers. The service is part of the Custody Administration system, which ensures the safekeeping of these securities.

  **Limitations**

  PUT: A good name for that path following REST best practices could be something like: 

```
/CustodyAdminRequests/{custodyadministrationid}
``` 

This path is clean, descriptive, and follows the convention of using plural nouns for resource names.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustodyAdministration/{custodyadministrationid}/Update</span></summary>

  **Description**

  A service to provide safe custody services for marketable securities for bank customers UpCR Update details relating to Custody Facility

  **Documentation**

  This BIAN API path is used to update details related to a specific Custody Facility within the Custody Administration service. It allows users to modify and make changes to information and settings associated with the custody services provided for marketable securities for bank customers. This API helps in managing and maintaining accurate and up-to-date data for the custody facility.

  **Limitations**

  PUT: The name of the path should be:

PUT /custody-administrations/{custodyadministrationid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustodyAdministration/{custodyadministrationid}/SafeKeeping/{safekeepingid}/Control</span></summary>

  **Description**

  A service to provide safe custody services for marketable securities for bank customers CoBQ Control the processing of Safe Keeping

  **Documentation**

  This API path allows you to update the control settings for safekeeping services related to marketable securities held in custody for bank customers. By calling this API with the specified custody administration ID and safekeeping ID, you can modify and manage the processing controls for safekeeping activities, ensuring the security and management of assets according to the bank's guidelines.

  **Limitations**

  PUT: The name of the path should be: '/custody-administration/{custodyadministrationid}/safekeeping/{safekeepingid}/control'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustodyAdministration/{custodyadministrationid}/Fees/{feesid}/Exchange</span></summary>

  **Description**

  A service to provide safe custody services for marketable securities for bank customers EcBQ Accept, verify, etc. aspects of Fees processing

  **Documentation**

  This BIAN API path is for updating information related to fees associated with custody administration services for marketable securities provided to bank customers. The path includes the unique identifiers for the custody administration and fees, and specifies that the update operation is for an exchange of information. The API is used to manage and process fees related to safe custody services for marketable securities, ensuring accurate and reliable fee processing for bank customers.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

`/custody-administration/{custodyadministrationid}/fees/{feesid}/exchange`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustodyAdministration/{custodyadministrationid}/SecuritiesReporting/{securitiesreportingid}/Execute</span></summary>

  **Description**

  A service to provide safe custody services for marketable securities for bank customers ExBQ Execute an available automated action for Securities Reporting

  **Documentation**

  This API path updates an existing entry related to securities reporting within a custody administration service provided by a bank. It allows for the execution of an automated action specific to securities reporting, which ensures that marketable securities held in custody for bank customers are accurately monitored and managed.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be structured in a way that is clear, concise, and follows a resource-oriented design. Here is a suggestion for the name of the path:

'/custody-administrations/{custodyadministrationid}/securities-reportings/{securitiesreportingid}/execute'

This naming convention uses lowercase letters, hyphens to separate words, and uses plural nouns to represent resources. It also includes specific identifiers for the custody administration and securities reporting

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustodyAdministration/{custodyadministrationid}/Settlement/{settlementid}/Execute</span></summary>

  **Description**

  A service to provide safe custody services for marketable securities for bank customers ExBQ Execute an available automated action for Settlement

  **Documentation**

  This BIAN API path is designed for the Custody Administration service that offers safe storage services for marketable securities to bank customers. The specific purpose of this path is to execute an automated action related to settlement for a particular custody administration and settlement ID. Essentially, it allows users to trigger a predefined automated process associated with settling transactions or activities related to the custody of securities.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should ideally reflect the resource it represents. Since the path seems to involve executing a settlement within a custody administration context, a more descriptive and resource-oriented path name could be:

```
/CustodyAdministrations/{custodyadministrationid}/Settlements/{settlementid}/Execute
``` 

In this revised path, the resource names are in plural form and the action of executing a settlement is clearly indicated by the endpoint name.

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustodyAdministration/{custodyadministrationid}/DividendsandInterest/Initiate</span></summary>

  **Description**

  A service to provide safe custody services for marketable securities for bank customers InBQ Instantiate a new Dividends and Interest

  **Documentation**

  This API path allows you to create a new instance of Dividends and Interest as part of the Custody Administration service. It is used for managing and providing safe custody services for marketable securities held by bank customers. By making a POST request to this path with the necessary data, you can initiate a new record for Dividends and Interest related to the custody administration.

  **Limitations**

  POST: The name of the path should be:
/CustodyAdministration/{custodyadministrationid}/DividendsandInterestInitialization

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustodyAdministration/{custodyadministrationid}/Fees/Initiate</span></summary>

  **Description**

  A service to provide safe custody services for marketable securities for bank customers InBQ Instantiate a new Fees

  **Documentation**

  This API path for Custody Administration allows customers of a bank to initiate a new fee related to the safe custody services provided for marketable securities. By making a POST request to this endpoint with the necessary parameters, customers can create a new fee for the custody services they are utilizing.

  **Limitations**

  POST: The name of the path '/CustodyAdministration/{custodyadministrationid}/Fees/Initiate' following REST best practices could be something like:

- POST /custody-administrations/{custodyadministrationid}/fees/initiate

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustodyAdministration/{custodyadministrationid}/SecuritiesReporting/Initiate</span></summary>

  **Description**

  A service to provide safe custody services for marketable securities for bank customers InBQ Instantiate a new Securities Reporting

  **Documentation**

  This API path allows you to create a new Securities Reporting instance for a specific custody administration ID. It is a service provided by a bank to offer safe custody services for marketable securities to their customers. By initiating a new Securities Reporting, the bank can keep track of the securities held in custody for a particular customer under the specified custody administration ID.

  **Limitations**

  POST: A more RESTful and descriptive name for the path could be: 

`/custody-administration/{custodyadministrationid}/securities-reporting/initiate`

</details>

<details open>
  <summary><span style='color:red;'>POST: /CustodyAdministration/{custodyadministrationid}/Settlement/Initiate</span></summary>

  **Description**

  A service to provide safe custody services for marketable securities for bank customers InBQ Instantiate a new Settlement

  **Documentation**

  This API path allows you to create a new settlement related to custody administration for marketable securities for bank customers. It initiates the process of setting up a new settlement within the custody administration service, ensuring safe keeping and management of securities on behalf of the customers.

  **Limitations**

  POST: A RESTful naming convention for the path '/CustodyAdministration/{custodyadministrationid}/Settlement/Initiate' could be:

```
PUT /custody-administrations/{custodyadministrationid}/settlement
```

In this convention:
- The HTTP method is 'PUT' to update a resource.
- Resource names are in lowercase and plural form, following a hyphen-separated style.
- Path parameters are in lowercase and include the resource's identifier.
- The action 'Init

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustodyAdministration/{custodyadministrationid}/DividendsandInterest/{dividendsandinterestid}/Retrieve</span></summary>

  **Description**

  A service to provide safe custody services for marketable securities for bank customers ReBQ Retrieve details about any aspect of Dividends and Interest

  **Documentation**

  This BIAN API path is for retrieving specific details about dividends and interest related to custody administration for marketable securities of bank customers. By providing the custody administration ID and dividends/interest ID, this endpoint allows users to retrieve precise information about dividends and interest associated with the safe custody services offered by the bank.

  **Limitations**

  GET: Based on REST best practices, a more suitable name for this path could be: 

`/custody-administrations/{custodyadministrationid}/dividends-and-interest/{dividendsandinterestid}`

This path is more descriptive and follows the convention of using lowercase letters and hyphens to separate words in URLs.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustodyAdministration/{custodyadministrationid}/Fees/{feesid}/Retrieve</span></summary>

  **Description**

  A service to provide safe custody services for marketable securities for bank customers ReBQ Retrieve details about any aspect of Fees

  **Documentation**

  This BIAN API path allows users to retrieve details about the fees associated with safe custody services for marketable securities provided to bank customers. Users can specify the unique ID of the custody administration and the fees to retrieve specific information about the fees related to the custody services.

  **Limitations**

  GET: Based on REST best practices, the path '/CustodyAdministration/{custodyadministrationid}/Fees/{feesid}/Retrieve' can be named as:

```
GET /custody-administrations/{custodyadministrationid}/fees/{feesid}
``` 

In RESTful naming conventions:
- Resource names are typically in plural lowercase format.
- Path parameters such as {custodyadministrationid} and {feesid} should be included in the URL path to identify specific

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustodyAdministration/{custodyadministrationid}/SafeKeeping/{safekeepingid}/Retrieve</span></summary>

  **Description**

  A service to provide safe custody services for marketable securities for bank customers ReBQ Retrieve details about any aspect of Safe Keeping

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific aspect of safekeeping services related to marketable securities for bank customers who use custody administration services. By providing the relevant custodyadministrationid and safekeepingid, you can access information about the safekeeping arrangements in place for a particular customer. This API helps you obtain important details and data about the safekeeping of assets held by the bank on behalf of customers, ensuring transparency and security in custody administration.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be '/custody-administrations/{custodyadministrationid}/safe-keeping/{safekeepingid}/retrieve'. 

Note the following adjustments:
- Path segments should be in lower case.
- Use hyphens to separate words in the path segments for better readability.
- Path segment names should be in plural form if they represent collections of resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustodyAdministration/{custodyadministrationid}/SecuritiesReporting/{securitiesreportingid}/Retrieve</span></summary>

  **Description**

  A service to provide safe custody services for marketable securities for bank customers ReBQ Retrieve details about any aspect of Securities Reporting

  **Documentation**

  This API path allows you to retrieve details about any aspect of Securities Reporting within the Custody Administration service provided by a bank for its customers. By specifying the appropriate Custody Administration ID and Securities Reporting ID, you can access information related to the safe custody services offered for marketable securities stored on behalf of customers. This helps users to view specific details and data pertaining to the securities reporting aspect of the custody administration service.

  **Limitations**

  GET: The name of the path following REST best practices could be:

`/custody-administrations/{custodyadministrationid}/securities-reportings/{securitiesreportingid}`

This path structure uses lowercase letters, separates words with hyphens, and represents a hierarchical relationship between "CustodyAdministrations" and "SecuritiesReportings" resources.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CustodyAdministration/{custodyadministrationid}/Settlement/{settlementid}/Retrieve</span></summary>

  **Description**

  A service to provide safe custody services for marketable securities for bank customers ReBQ Retrieve details about any aspect of Settlement

  **Documentation**

  This API path allows you to retrieve details about any aspect of a settlement related to safe custody services for marketable securities for bank customers. You can specify the unique identification numbers for the custody administration and the settlement to get specific information about it.

  **Limitations**

  GET: The name of the path should be: "/custody-administration/{custodyadministrationid}/settlement/{settlementid}/retrieve"

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustodyAdministration/{custodyadministrationid}/SafeKeeping/{safekeepingid}/Request</span></summary>

  **Description**

  A service to provide safe custody services for marketable securities for bank customers RqBQ Request manual intervention or a decision with respect to Safe Keeping

  **Documentation**

  This API path allows users to update an existing request for manual intervention or decision related to the safe keeping of marketable securities for bank customers. The path includes the IDs for the custody administration and safekeeping entities that are being referenced in the update request.

  **Limitations**

  PUT: A possible name for the path could be '/custody-administrations/{custodyadministrationid}/safekeeping/{safekeepingid}/requests' as it uses lowercase letters and words are separated by hyphens, following REST best practices for URLs.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustodyAdministration/{custodyadministrationid}/SecuritiesReporting/{securitiesreportingid}/Request</span></summary>

  **Description**

  A service to provide safe custody services for marketable securities for bank customers RqBQ Request manual intervention or a decision with respect to Securities Reporting

  **Documentation**

  This API path is used to update a request for manual intervention or a decision related to Securities Reporting within the Custody Administration service provided by the bank for its customers' marketable securities. By making a PUT request to this path with the specific custody administration ID and securities reporting ID, users can update information or make a request for manual intervention or decision related to securities reporting processes.

  **Limitations**

  PUT: The name of the path should be:

```
GET /custodyAdministration/{custodyAdministrationId}/securitiesReporting/{securitiesReportingId}/request
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustodyAdministration/{custodyadministrationid}/Settlement/{settlementid}/Request</span></summary>

  **Description**

  A service to provide safe custody services for marketable securities for bank customers RqBQ Request manual intervention or a decision with respect to Settlement

  **Documentation**

  This BIAN API path allows you to update an existing request for manual intervention or a decision related to a settlement within the Custody Administration service. It is specifically related to providing safe custody services for marketable securities for bank customers. By using this API path with a PUT request, you can make changes to the settlement request linked to the specified custody administration ID.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

`/custody-administrations/{custodyadministrationid}/settlements/{settlementid}/requests`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustodyAdministration/{custodyadministrationid}/Fees/{feesid}/Update</span></summary>

  **Description**

  A service to provide safe custody services for marketable securities for bank customers UpBQ Update details relating to Fees

  **Documentation**

  This API path allows you to update the details related to fees in a custody administration service provided by a bank for marketable securities. It specifically targets a particular fee within a custody administration and allows you to make changes to its details using a PUT request.

  **Limitations**

  PUT: The name of this path should ideally be something like: 

PUT /custodyadministrations/{custodyadministrationId}/fees/{feesId}

This path name follows RESTful best practices by using the HTTP method PUT to update a specific resource identified by custodyadministrationId and feesId in a hierarchical structure. Make sure to keep the path lowercase and use plural nouns for resource names.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustodyAdministration/{custodyadministrationid}/SafeKeeping/{safekeepingid}/Update</span></summary>

  **Description**

  A service to provide safe custody services for marketable securities for bank customers UpBQ Update details relating to Safe Keeping

  **Documentation**

  This API path is used to update details related to safe keeping of marketable securities for bank customers. It specifically targets a resource identified by the custody administration ID and safe keeping ID, allowing users to make changes to the information associated with safe custody services provided by the bank. The PUT method is used to perform the update operation on the existing resource.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:
```
PUT /custody-administrations/{custodyadministrationid}/safe-keeping/{safekeepingid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CustodyAdministration/{custodyadministrationid}/Settlement/{settlementid}/Update</span></summary>

  **Description**

  A service to provide safe custody services for marketable securities for bank customers UpBQ Update details relating to Settlement

  **Documentation**

  This API path allows you to update the details related to a settlement within the custody administration service for marketable securities provided to bank customers. By making a PUT request to this endpoint with the specified custody administration ID and settlement ID, you can modify and update information regarding a specific settlement transaction.

  **Limitations**

  PUT: The name of the path should be: 

````
PUT /custody-administrations/{custodyadministrationid}/settlements/{settlementid}
````

Here are some key points to consider in following REST best practices for naming the path:

1. Use lowercase letters for the path segments.
2. Use hyphens to separate words in the path segments.
3. Use plural nouns for collection resources (e.g., `custody-administrations`, `settlements`

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
