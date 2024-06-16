---
id: UnitTrustAdministration
title: UnitTrustAdministration
---

<h1 style='color:red;'>UnitTrustAdministration</h1>

**BIAN Documentation:** [UnitTrustAdministration v12](https://app.swaggerhub.com/apis/BIAN-3/UnitTrustAdministration/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/Control</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Control Unit Trust Administrative Plan

  **Documentation**

  This API path `/UnitTrustAdministration/{unittrustadministrationid}/Control` allows you to update an existing resource related to unit investment trusts within the unit trust administration service domain. It specifically deals with managing and implementing the administrative plan for control units of unit investment trusts. By using the PUT method, you can make changes or updates to the control aspects of a unit trust administration based on the provided `unittrustadministrationid`.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

`/unit-trust-administration/{unittrustadministrationid}/control`

</details>

<details open>
  <summary><span style='color:red;'>POST: /UnitTrustAdministration/Create</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Create Unit Trust Administrative Plan

  **Documentation**

  This API path `/UnitTrustAdministration/Create` allows you to create a new administrative plan for unit investment trusts within the Unit Trust Administration Service Domain. In simpler terms, you can use this API to set up and manage the details and processes related to unit investment trusts.

  **Limitations**

  POST: If the path '/UnitTrustAdministration/Create' followed REST best practices, it could be named as '/unit-trust-administrations'. This naming scheme is more aligned with the convention of using plural nouns in RESTful URLs to represent collections of resources. The 'Create' action would typically be represented by a POST request to this URL to create a new UnitTrustAdministration resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Exchange Unit Trust Administrative Plan

  **Documentation**

  This BIAN API path is used to update an existing resource related to unit investment trusts within the Unit Trust Administration service domain. Specifically, it deals with the Exchange Unit Trust Administrative Plan for a specified unit trust administration ID. By making a PUT request to this path, users can modify the details or parameters associated with the exchange of unit trust administrative plans, such as updating information or making changes to existing plans.

  **Limitations**

  PUT: The name of the path could simply be `/unit-trust-administration/{unittrustadministrationid}/exchanges`, following REST best practices of using lowercase letters and hyphens to separate words in the path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/Grant</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Grant Unit Trust Administrative Plan

  **Documentation**

  This BIAN API path allows you to update an existing resource related to Unit Trust Administration. Specifically, it pertains to the implementation and fulfillment of unit investment trusts' Grant Unit Trust Administrative Plan identified by the {unittrustadministrationid}. By using the PUT method, you can modify information or settings associated with this administrative plan within the unit trust system.

  **Limitations**

  PUT: The name of the path should be:

/UnitTrustAdministration/{unittrustadministrationid}/Grants

</details>

<details open>
  <summary><span style='color:red;'>GET: /UnitTrustAdministration/{unittrustadministrationid}/Notify</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Notify Unit Trust Administrative Plan

  **Documentation**

  This BIAN API path allows you to retrieve information about a specific unit trust administrative plan by providing the unique identifier (unittrustadministrationid) associated with it. The API is part of the Unit Trust Administration service domain, which manages unit investment trusts. By using this API, you can access details related to the implementation and fulfillment of unit trust administrative plans within the system.

  **Limitations**

  GET: The name of the path should be:

```
/UnitTrustAdministration/{unittrustadministrationid}/notifications
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/Request</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Request Unit Trust Administrative Plan

  **Documentation**

  This API path is used to update an existing unit trust administrative plan associated with a specific unit trust administration ID. It is part of a service domain that manages the implementation and administration of unit investment trusts. By sending a PUT request to this path with the necessary data, users can modify and update the administrative plan for a particular unit trust.

  **Limitations**

  PUT: The name of the path should be: /unit-trust-administration/{unitTrustAdministrationId}/requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /UnitTrustAdministration/{unittrustadministrationid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Retrieve Unit Trust Administrative Plan

  **Documentation**

  This API path allows you to retrieve information about a specific unit trust administrative plan identified by the "unittrustadministrationid". It is part of the Unit Trust Administration service domain, which deals with managing and fulfilling unit investment trusts. By making a GET request to this endpoint, you can access details about a particular unit trust administrative plan within the system.

  **Limitations**

  GET: The name of the path should be '/unit-trust-administrations/{unittrustadministrationid}'.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/Update</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Update Unit Trust Administrative Plan

  **Documentation**

  This API path is used to update an existing Unit Trust Administrative Plan. In simpler terms, it allows you to make changes and modifications to the plan that governs the administration and fulfillment of unit investment trusts. By sending a PUT request to this endpoint with the necessary data, you can update the details and configurations of the Unit Trust Administrative Plan identified by the {unittrustadministrationid} parameter.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/unit-trust-administration/{unittrustadministrationid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/FundAccounting/{fundaccountingid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Exchange Fund Accounting Routine

  **Documentation**

  This API path (/UnitTrustAdministration/{unittrustadministrationid}/FundAccounting/{fundaccountingid}/Exchange) allows you to update an existing resource related to unit investment trusts Exchange Fund Accounting Routine. You can modify specific information or data associated with a particular unit trust administration and fund accounting within the context of exchange activities.

  **Limitations**

  PUT: The name of the path should typically represent a resource or a collection of resources. Based on the path you provided, following REST best practices, the name of the path could be:

`/unittrust-administration/{unittrust-administration-id}/fund-accounting/{fund-accounting-id}/exchanges`

In this naming convention, the words are separated by hyphens for better readability and the resource names are kept in lowercase to adhere to common REST conventions.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/FundEnrolment/{fundenrolmentid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Exchange Fund Enrolment Routine

  **Documentation**

  This BIAN API path allows you to update an existing resource related to unit investment trusts' exchange fund enrolment routine within the unit trust administration service domain. Specifically, it pertains to modifying information or data associated with a particular unit trust administration and fund enrolment ID for exchanging funds.

  **Limitations**

  PUT: The name of the path should be: 

`/unit-trust-administration/{unittrustadministrationid}/fund-enrolment/{fundenrolmentid}/exchange` 

Following REST best practices, the path should be in lowercase and use hyphens to separate words.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/FundFinancialReporting/{fundfinancialreportingid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Exchange Fund Financial Reporting Routine

  **Documentation**

  This BIAN API path allows you to update an existing resource relating to the Exchange Fund Financial Reporting Routine for a specific unit investment trust within the Unit Trust Administration service domain. Specifically, you can update the details associated with a particular fund financial reporting ID related to a specific unit trust administration ID.

  **Limitations**

  PUT: The name of the path should be:

/unit-trust-administration/{unittrustadministrationid}/fund-financial-reporting/{fundfinancialreportingid}/exchange

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/FundInvestor_MiddleandBackOfficeService/{fundinvestor_middleandbackofficeserviceid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Exchange Fund Investor, Middle and Back Office Service Routine

  **Documentation**

  This API path is used to update an existing resource related to the implementation and fulfillment of unit investment trusts. Specifically, it deals with the Exchange Fund Investor, Middle, and Back Office Service Routine within the Unit Trust Administration service domain. By using a PUT request to this API, you can make changes to the specified resource identified by the unique IDs provided in the path.

  **Limitations**

  PUT: Following REST best practices, the name of the path should describe the resource it represents rather than describing the actions performed on it. A suggested name for the path could be:

'/unit-trust-administration/{unittrustadministrationid}/fund-investor-services/{fundinvestor_middleandbackofficeserviceid}/exchanges' 

This name follows the convention of using lowercase letters, hyphens for readability, and pluralized nouns for collections of resources.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/FundManagementFee/{fundmanagementfeeid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Exchange Fund Management Fee Routine

  **Documentation**

  This BIAN API path allows you to update information related to the management fee of a specific unit investment trust. Specifically, it pertains to the fund management fee within the context of an exchange. By sending a PUT request to this path with the appropriate identifiers, you can modify and maintain details associated with the exchange fund management fee routine for the unit trust administration service.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be structured to clearly represent the hierarchy and relationship between resources. Here is a suggestion for the path name:

"/unit-trust-administration/{unittrustadministrationid}/fund-management-fees/{fundmanagementfeeid}/exchange"

In this naming convention:
- The path is in lowercase to maintain consistency and readability.
- Words are hyphenated to improve readability and adherence to naming conventions.
- Resource names are singular to represent individual instances of the

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/FundTaxAdministration/{fundtaxadministrationid}/Exchange</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Exchange Fund Tax Administration Routine

  **Documentation**

  This API path allows you to update an existing resource related to the unit investment trust Exchange Fund Tax Administration Routine. Specifically, you can update information related to a specific unit trust administration and its associated fund tax administration in order to manage the implementation and fulfillment of exchange fund tax administration tasks within the unit investment trusts.

  **Limitations**

  PUT: The name of the path should be:

/unit-trust-administration/{unittrustadministrationid}/fund-tax-administration/{fundtaxadministrationid}/exchange

This naming convention follows REST best practices by using lowercase letters, hyphens to separate words, and descriptive resource names that represent the hierarchical structure of the API.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/FundAccounting/{fundaccountingid}/Grant</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Grant Fund Accounting Routine

  **Documentation**

  This API path allows you to update an existing grant within the fund accounting routine of a specific unit investment trust administration. It is a part of the process that handles the management and administration of unit trusts, specifically pertaining to fund accounting for grant-related activities.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/UnitTrustAdministration/{unittrustadministrationid}/FundAccounting/{fundaccountingid}/Grant

This path follows the convention of using resource names (e.g., UnitTrustAdministration, FundAccounting, Grant) instead of verbs. It also includes the IDs of the specific resources that the endpoint is dealing with.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/FundEnrolment/{fundenrolmentid}/Grant</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Grant Fund Enrolment Routine

  **Documentation**

  This API path allows you to update an existing resource related to the Grant Fund Enrolment Routine for a specific unit investment trust administration. It is used to make changes or modifications to the grant fund enrolment process within the unit trust administration system.

  **Limitations**

  PUT: For REST best practices, the name of the path should be formulated using nouns to represent resources and not actions. Based on the given information, a more appropriate name for the path could be:

`/unit-trust-administrations/{unittrustadministrationid}/fund-enrolments/{fundenrolmentid}/grant` 

This path represents a hierarchical structure where 'Unit Trust Administrations' contain 'Fund Enrolments', and a specific 'Grant' resource is associated with a particular 'Fund

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/FundFinancialReporting/{fundfinancialreportingid}/Grant</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Grant Fund Financial Reporting Routine

  **Documentation**

  This API path allows you to update information related to grant fund financial reporting for a specific unit trust administration and fund financial reporting ID. It is used to manage and track financial data and reporting specifically for unit investment trusts within the system.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

'/unit-trust-administration/{unittrustadministrationid}/fund-financial-reporting/{fundfinancialreportingid}/grant'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/FundInvestor_MiddleandBackOfficeService/{fundinvestor_middleandbackofficeserviceid}/Grant</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Grant Fund Investor, Middle and Back Office Service Routine

  **Documentation**

  This API path allows you to update an existing resource related to the administration of unit investment trusts. Specifically, it pertains to the Grant Fund Investor, Middle, and Back Office Service Routine within the Unit Trust Administration service domain. By making a PUT request to this path with the necessary identifiers for the unit trust administration and the specific service routine, you can update information or perform actions associated with managing these unit trusts.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/UnitTrustAdministration/{unittrustadministrationid}/FundInvestorMiddleBackOfficeService/{fundinvestor_middleandbackofficeserviceid}/Grant

This name follows the convention of using lowercase letters, separating words with hyphens or using camel case for better readability, and accurately represents the resource hierarchy and actions being performed.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/FundManagementFee/{fundmanagementfeeid}/Grant</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Grant Fund Management Fee Routine

  **Documentation**

  This API path allows you to update the Grant Fund Management Fee Routine associated with a specific Unit Trust Administration and Fund Management Fee. It is used to manage and fulfill the requirements related to unit investment trusts, particularly in relation to the grant fund management fee process. By making a PUT request to this API, you can modify the details and settings related to the grant fund management fee in the specified unit trust administration and fund management fee.

  **Limitations**

  PUT: The name of the path should be:

```
/UnitTrustAdministration/{unittrustadministrationid}/FundManagementFee/{fundmanagementfeeid}/Grant
```

This path follows REST best practices by using resource names that are descriptive and hierarchical, and it includes relevant identifiers to represent the specific resources being operated on.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/FundTaxAdministration/{fundtaxadministrationid}/Grant</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Grant Fund Tax Administration Routine

  **Documentation**

  This PUT API path is used to update an existing grant fund tax administration routine associated with a specific unit trust administration and fund tax administration. It essentially allows you to modify details or information related to the grant fund tax administration process for a specific unit investment trust.

  **Limitations**

  PUT: Based on REST best practices, a suitable name for the path could be:

'/unit-trust-administration/{unittrustadministrationid}/fund-tax-administration/{fundtaxadministrationid}/grant'

</details>

<details open>
  <summary><span style='color:red;'>GET: /UnitTrustAdministration/{unittrustadministrationid}/FundAccounting/{fundaccountingid}/Notify</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Notify Fund Accounting Routine

  **Documentation**

  This API path is used to retrieve information about the implementation and fulfillment of unit investment trusts Notify Fund Accounting Routine. It takes parameters for the unit trust administration ID and fund accounting ID to specify the resource to retrieve information about. The API helps manage the communication and processing related to fund accounting notifications for unit investment trusts within a unit trust administration system.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

/UnitTrustAdministrations/{unitTrustAdministrationId}/FundAccountings/{fundAccountingId}/Notify

</details>

<details open>
  <summary><span style='color:red;'>GET: /UnitTrustAdministration/{unittrustadministrationid}/FundEnrolment/{fundenrolmentid}/Notify</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Notify Fund Enrolment Routine

  **Documentation**

  This API path retrieves information related to the Notify Fund Enrolment Routine for a specific unit trust administration and fund enrolment. It is part of the Unit Trust Administration service domain, which is responsible for managing unit investment trusts. In simpler terms, it allows you to access details about the process of notifying fund enrolment for a particular unit trust and fund enrolment ID.

  **Limitations**

  GET: The name of the path following REST best practices should be:

```
/UnitTrustAdministration/{unittrustadministrationid}/FundEnrolment/{fundenrolmentid}/Notify
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /UnitTrustAdministration/{unittrustadministrationid}/FundFinancialReporting/{fundfinancialreportingid}/Notify</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Notify Fund Financial Reporting Routine

  **Documentation**

  This API path allows you to retrieve information related to the notification process for fund financial reporting within the context of unit investment trusts administration. It specifically pertains to a routine that notifies about financial reporting activities for a specific fund identified by its ID within the unit trust administration.

  **Limitations**

  GET: The name of the path should be:
'/unit-trust-administration/{unittrustadministrationid}/fund-financial-reporting/{fundfinancialreportingid}/notify'

</details>

<details open>
  <summary><span style='color:red;'>GET: /UnitTrustAdministration/{unittrustadministrationid}/FundInvestor_MiddleandBackOfficeService/{fundinvestor_middleandbackofficeserviceid}/Notify</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Notify Fund Investor, Middle and Back Office Service Routine

  **Documentation**

  This API path allows you to retrieve information about the implementation and fulfillment of unit investment trusts related to notifying a fund investor as part of the middle and back office service routine. By using this API, you can access details and data associated with this specific process within the Unit Trust Administration service domain.

  **Limitations**

  GET: Based on REST best practices, a suitable name for the given path would be:

```
/units/{unitId}/services/{serviceId}/notifications
```

This path conveys the resource hierarchy (units and services) and the action being taken (notifications), following RESTful conventions.

</details>

<details open>
  <summary><span style='color:red;'>GET: /UnitTrustAdministration/{unittrustadministrationid}/FundManagementFee/{fundmanagementfeeid}/Notify</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Notify Fund Management Fee Routine

  **Documentation**

  This API path is designed to retrieve information about the implementation and fulfillment process of unit investment trusts related to notifying fund management fees. By accessing this specific endpoint, users can gather details about a particular unit trust administration and its associated fund management fee notification routine. This information can be useful for tracking and managing unit investment trusts within a financial system.

  **Limitations**

  GET: The recommended name for the path '/UnitTrustAdministration/{unittrustadministrationid}/FundManagementFee/{fundmanagementfeeid}/Notify' following REST best practices would be:

/UnitTrustAdministration/{unittrustadministrationid}/FundManagementFee/{fundmanagementfeeid}/notifications

</details>

<details open>
  <summary><span style='color:red;'>GET: /UnitTrustAdministration/{unittrustadministrationid}/FundTaxAdministration/{fundtaxadministrationid}/Notify</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Notify Fund Tax Administration Routine

  **Documentation**

  This BIAN API path is used to retrieve information about the implementation and fulfillment of unit investment trusts' routine for notifying fund tax administration. It specifically focuses on handling tasks related to unit trust administration and notifying fund tax administration for a specific unit trust administration ID and fund tax administration ID.

  **Limitations**

  GET: The name of the path should ideally be:

```
/units/{unittrustadministrationid}/funds/{fundtaxadministrationid}/notify
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/FundAccounting/{fundaccountingid}/Request</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Request Fund Accounting Routine

  **Documentation**

  This API path is used to update an existing resource related to unit investment trusts in the Unit Trust Administration domain. Specifically, it is called when requesting fund accounting routine for a particular unit trust administration and fund accounting ID. It essentially updates information or triggers actions related to managing unit investment trust funds and accounting processes.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/UnitTrustAdministration/{unittrustadministrationid}/FundAccounting/{fundaccountingid}/Requests
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/FundEnrolment/{fundenrolmentid}/Request</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Request Fund Enrolment Routine

  **Documentation**

  This API path allows you to update an existing request for enrolling a fund in a unit investment trust within the Unit Trust Administration service domain. It is specifically for handling the implementation and fulfillment of the fund enrollment routine for unit investment trusts.

  **Limitations**

  PUT: A suitable name for the path could be:

'/unit-trust-administration/{unittrustadministrationid}/fund-enrolment/{fundenrolmentid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/FundFinancialReporting/{fundfinancialreportingid}/Request</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Request Fund Financial Reporting Routine

  **Documentation**

  This API path allows you to update an existing request for fund financial reporting within the unit trust administration system. You can make changes or modifications to specific details related to a fund financial reporting request identified by the unique IDs provided in the URL.

  **Limitations**

  PUT: Based on REST best practices, a clearer and more structured naming convention for the path '/UnitTrustAdministration/{unittrustadministrationid}/FundFinancialReporting/{fundfinancialreportingid}/Request' would be:

'/unit-trust-administration/{unittrustadministrationid}/fund-financial-reporting/{fundfinancialreportingid}/request'

This naming convention uses lowercase letters and hyphens to separate words for better readability and consistency with RESTful URI guidelines.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/FundInvestor_MiddleandBackOfficeService/{fundinvestor_middleandbackofficeserviceid}/Request</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Request Fund Investor, Middle and Back Office Service Routine

  **Documentation**

  This API path allows you to update an existing resource related to unit investment trusts within the Unit Trust Administration service domain. Specifically, it deals with handling requests from fund investors for middle and back office services. By using the PUT method on this path, you can make changes or updates to the information or services associated with a particular fund investor request for the middle and back office services in the context of unit investment trusts.

  **Limitations**

  PUT: According to REST best practices, the name of the path should be:

'/unit-trust-administration/{unittrustadministrationid}/fund-investor-middle-and-back-office-service/{fundinvestor_middleandbackofficeserviceid}/requests' 

The path should be in lowercase letters with hyphens separating words for better readability and consistency. Additionally, the noun should be pluralized when referring to a collection of resources as in the case of "/requests".

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/FundManagementFee/{fundmanagementfeeid}/Request</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Request Fund Management Fee Routine

  **Documentation**

  This BIAN API path allows you to update an existing request for a fund management fee related to a specific unit investment trust within the unit trust administration service domain. By making a PUT request to this path with the appropriate IDs, you can modify or update the details of the fund management fee request to ensure it is accurate and up-to-date for the specific unit trust.

  **Limitations**

  PUT: Based on REST best practices, the path should be named in a resource-centric and plural form that represents the hierarchy of resources. 

A suitable name for the path could be:

/unit-trust-administrations/{unittrustadministrationid}/fund-management-fees/{fundmanagementfeeid}/requests

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/FundTaxAdministration/{fundtaxadministrationid}/Request</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Request Fund Tax Administration Routine

  **Documentation**

  This API path /UnitTrustAdministration/{unittrustadministrationid}/FundTaxAdministration/{fundtaxadministrationid}/Request with the PUT method is used to update an existing resource related to the implementation and fulfillment of unit investment trusts' Fund Tax Administration Routine. Essentially, it enables users to make modifications to the specific information or data associated with a unit trust administration and fund tax administration within the context of unit investment trusts.

  **Limitations**

  PUT: A suitable name for the path would be: 

'/unit-trust-administrations/{unittrustadministrationid}/fund-tax-administrations/{fundtaxadministrationid}/requests' 

This name follows the REST best practice of using lowercase letters, using hyphens as word separators, and keeping the resource names in plural form.

</details>

<details open>
  <summary><span style='color:red;'>GET: /UnitTrustAdministration/{unittrustadministrationid}/FundAccounting/{fundaccountingid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Retrieve Fund Accounting Routine

  **Documentation**

  This BIAN API path allows you to retrieve information related to fund accounting routines for a specific unit investment trust within the unit trust administration system. By providing the unit trust administration ID and the fund accounting ID, you can access details about the fund accounting activities associated with that specific unit investment trust. This API is designed to assist in managing and tracking fund accounting processes within the unit trust administration domain.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

GET /unit-trust-administrations/{unittrustadministrationid}/fund-accountings/{fundaccountingid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /UnitTrustAdministration/{unittrustadministrationid}/FundEnrolment/{fundenrolmentid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Retrieve Fund Enrolment Routine

  **Documentation**

  This API path retrieves information about fund enrolment for a specific unit investment trust within the Unit Trust Administration service domain. It allows users to access details related to a particular fund enrolment, such as the fund enrolment ID and other relevant information. It is a read-only operation that provides information about fund enrolment routines for unit investment trusts.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:
"/unit-trust-administration/{unittrustadministrationid}/fund-enrolment/{fundenrolmentid}"

</details>

<details open>
  <summary><span style='color:red;'>GET: /UnitTrustAdministration/{unittrustadministrationid}/FundFinancialReporting/{fundfinancialreportingid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Retrieve Fund Financial Reporting Routine

  **Documentation**

  This API path allows you to retrieve information related to unit investment trusts and fund financial reporting routines within the Unit Trust Administration service domain. By providing the unit trust administration ID and the fund financial reporting ID as parameters in the URL, you can access specific details about the fund's financial reporting. It enables you to retrieve important data and reports associated with unit investment trusts for further analysis and decision-making purposes.

  **Limitations**

  GET: Based on REST best practices, a more appropriate name for the path would be:
'/unit-trust-administration/{unittrustadministrationid}/fund-financial-reporting/{fundfinancialreportingid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /UnitTrustAdministration/{unittrustadministrationid}/FundInvestor_MiddleandBackOfficeService/{fundinvestor_middleandbackofficeserviceid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Retrieve Fund Investor, Middle and Back Office Service Routine

  **Documentation**

  This API path is used to retrieve information related to unit investment trusts and the services associated with fund investors, middle office, and back office tasks. By specifying the unique IDs for unit trust administration and the specific service routine, users can retrieve details about these services and processes. This API facilitates access to data and operations within the unit trust administration system, providing insights into fund investor activities and middle and back office functions.

  **Limitations**

  GET: Following REST best practices, a suitable name for this path could be:

GET /unit-trust-administration/{unittrustadministrationid}/fund-investor-middle-back-office-service/{fundinvestor_middleandbackofficeserviceid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /UnitTrustAdministration/{unittrustadministrationid}/FundManagementFee/{fundmanagementfeeid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Retrieve Fund Management Fee Routine

  **Documentation**

  This API path is used to retrieve information about a specific fund management fee related to a unit investment trust under the Unit Trust Administration service domain. By providing the unit trust administration ID and the fund management fee ID, users can access details about the fund management fee associated with that particular unit investment trust. This API helps users get information about the fees involved in managing their unit investment trust within the system.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:

GET '/unit-trust-administration/{unittrustadministrationid}/fund-management-fee/{fundmanagementfeeid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /UnitTrustAdministration/{unittrustadministrationid}/FundTaxAdministration/{fundtaxadministrationid}/Retrieve</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Retrieve Fund Tax Administration Routine

  **Documentation**

  This API path allows you to retrieve information related to the tax administration routine for a specific fund within a unit investment trust. By providing the IDs of the unit trust administration and fund tax administration, you can access details about how taxes are managed for that particular fund.

  **Limitations**

  GET: Following REST best practices, the name of the path should be something that clearly represents the resource being retrieved without including any action verbs. 

A suitable name for the path could be:
'/unit-trust-administration/{unittrustadministrationid}/fund-tax-administration/{fundtaxadministrationid}' 

This path represents the specific resource being retrieved and follows RESTful naming conventions by using lowercase words separated by hyphens.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/FundAccounting/{fundaccountingid}/Update</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Update Fund Accounting Routine

  **Documentation**

  This API path allows you to update the fund accounting routine for a specific unit investment trust within the unit trust administration system. By sending a PUT request to this path with the relevant unit trust administration ID and fund accounting ID, you can make changes to the fund accounting information associated with that particular trust.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/unit-trust-administration/{unittrustadministrationid}/fund-accounting/{fundaccountingid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/FundEnrolment/{fundenrolmentid}/Update</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Update Fund Enrolment Routine

  **Documentation**

  This API path allows you to update the fund enrollment routine for a specific unit trust administration and fund enrollment ID. It is part of the Unit Trust Administration Service Domain, which deals with the management of unit investment trusts. By sending a PUT request to this endpoint with the necessary data, you can make changes to the fund enrollment routine associated with the specified IDs.

  **Limitations**

  PUT: The name for this RESTful path could be:

PUT /unit-trust-administration/{unittrustadministrationid}/fund-enrolment/{fundenrolmentid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/FundFinancialReporting/{fundfinancialreportingid}/Update</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Update Fund Financial Reporting Routine

  **Documentation**

  This API path allows you to update the financial reporting routine for a specific fund within a unit investment trust that is being administered. By making a PUT request to this endpoint with the relevant unit trust administration ID and fund financial reporting ID, you can update the financial reporting details for that particular fund. This functionality helps in managing and maintaining accurate financial reporting within the unit investment trust.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

"/unit-trust-administration/{unittrustadministrationid}/fund-financial-reporting/{fundfinancialreportingid}"

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/FundInvestor_MiddleandBackOfficeService/{fundinvestor_middleandbackofficeserviceid}/Update</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Update Fund Investor, Middle and Back Office Service Routine

  **Documentation**

  This API path allows you to update information related to unit investment trusts within the Unit Trust Administration system. Specifically, you can update details related to Fund Investors, Middle Office, and Back Office services. By making a PUT request to this endpoint with the appropriate IDs, you can modify existing information or routines associated with these services in the system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be:

`PATCH /unit-trust-administration/{unittrustadministrationid}/fund-investor-middle-and-back-office-service/{fundinvestor_middleandbackofficeserviceid}`

This naming convention uses all lowercase letters, separates words with hyphens, and expresses the intention of updating a specific resource within the URI path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/FundManagementFee/{fundmanagementfeeid}/Update</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Update Fund Management Fee Routine

  **Documentation**

  This API path allows you to update the fund management fee for a specific unit investment trust within the Unit Trust Administration system. By making a PUT request to this endpoint along with the relevant unit trust administration ID and fund management fee ID, you can update the details and values of the fund management fee associated with that particular unit trust. This API path is designed to facilitate the management and adjustment of fund management fees for unit investment trusts within the system.

  **Limitations**

  PUT: The name of the path should be as follows according to REST best practices:

PUT /unit-trust-administration/{unittrustadministrationid}/fund-management-fee/{fundmanagementfeeid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /UnitTrustAdministration/{unittrustadministrationid}/FundTaxAdministration/{fundtaxadministrationid}/Update</span></summary>

  **Description**

  This Service Domain handles the implementation and fulfillment of unit investment trusts Update Fund Tax Administration Routine

  **Documentation**

  This BIAN API path allows you to update the fund tax administration routine for a specific unit trust administration and fund tax administration. It is used to make changes to the tax administration process related to unit investment trusts.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:
   
   /unit-trust-administration/{unittrustadministrationid}/fund-tax-administration/{fundtaxadministrationid}/update

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
