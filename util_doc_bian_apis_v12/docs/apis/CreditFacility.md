---
id: CreditFacility
title: CreditFacility
---

<h1 style='color:red;'>CreditFacility</h1>

**BIAN Documentation:** [CreditFacility v12](https://app.swaggerhub.com/apis/BIAN-3/CreditFacility/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /CreditFacility/Initiate</span></summary>

  **Description**

  The Credit Facility Service Domain manages the Credit Facilities that a Corporate Customer has with the bank. A Credit Facility is an agreement between the bank and a (corporate) customer to allow the customer to acquire asset products from the bank up to the limit of the credit facility without the need for a full due diligence and underwriting for each of these products. InCR Initiate a credit facility

  **Documentation**

  This API path allows you to create a new credit facility for a corporate customer within a bank's system. A credit facility is an agreement between the bank and the corporate customer that enables the customer to obtain asset products from the bank up to a defined limit without requiring a full review process for each product. By initiating a credit facility through this API, the bank can streamline the process for providing credit to the corporate customer for various asset products.

  **Limitations**

  POST: In following RESTful best practices, the name of the path should represent a resource rather than an action. Therefore, a more suitable name for the path '/CreditFacility/Initiate' in a RESTful API could be '/creditFacilities' to reflect the collection of credit facilities or '/creditFacility' if referring to a single credit facility.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CreditFacility/{creditfacilityid}/Update</span></summary>

  **Description**

  The Credit Facility Service Domain manages the Credit Facilities that a Corporate Customer has with the bank. A Credit Facility is an agreement between the bank and a (corporate) customer to allow the customer to acquire asset products from the bank up to the limit of the credit facility without the need for a full due diligence and underwriting for each of these products. UpCR Update details for an existing credit facility

  **Documentation**

  This API path allows you to update the details of an existing credit facility that a corporate customer has with the bank. A credit facility is an agreement between the bank and the customer that allows the customer to acquire asset products from the bank up to a certain limit without having to go through a full due diligence and underwriting process for each product. By using this API, you can make changes or updates to the information related to a specific credit facility.

  **Limitations**

  PUT: The name of the path should be:
'/credit-facilities/{creditfacilityid}' - Considering REST best practices, the path should reflect the resource being manipulated, i.e., 'credit-facilities', and include the specific identifier for the resource, {creditfacilityid}. This name is more meaningful and follows RESTful URL conventions.

</details>

<details open>
  <summary><span style='color:red;'>GET: /CreditFacility/{creditfacilityid}/Retrieve</span></summary>

  **Description**

  The Credit Facility Service Domain manages the Credit Facilities that a Corporate Customer has with the bank. A Credit Facility is an agreement between the bank and a (corporate) customer to allow the customer to acquire asset products from the bank up to the limit of the credit facility without the need for a full due diligence and underwriting for each of these products. ReCR Retrieve details about a credit facility

  **Documentation**

  This API path allows you to retrieve details about a specific credit facility held by a Corporate Customer at the bank. A credit facility is an agreement that lets the customer acquire asset products from the bank up to a certain limit without requiring a full evaluation each time they make a purchase. By using this API endpoint with the credit facility ID, you can access information about the terms, limits, and usage of that particular credit facility.

  **Limitations**

  GET: A good name for the path '/CreditFacility/{creditfacilityid}/Retrieve' following REST best practices could be:

GET /credit-facilities/{creditfacilityid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CreditFacility/{creditfacilityid}/ServiceFees/{servicefeesid}/Execute</span></summary>

  **Description**

  The Credit Facility Service Domain manages the Credit Facilities that a Corporate Customer has with the bank. A Credit Facility is an agreement between the bank and a (corporate) customer to allow the customer to acquire asset products from the bank up to the limit of the credit facility without the need for a full due diligence and underwriting for each of these products. ExBQ Execute Apply Service Fee

  **Documentation**

  This API path allows you to update and execute the application of service fees for a specific service fee within a Credit Facility that a Corporate Customer has with the bank. The Credit Facility is an agreement that enables the customer to access asset products from the bank up to a certain limit without needing a complete review process for each product. By using this API, you can apply service fees to the credit facility, making sure that the necessary charges are accurately recorded and processed.

  **Limitations**

  PUT: The name of the path should be:

'/credit-facilities/{creditfacilityid}/service-fees/{servicefeesid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CreditFacility/{creditfacilityid}/ServiceFees/{servicefeesid}/Retrieve</span></summary>

  **Description**

  The Credit Facility Service Domain manages the Credit Facilities that a Corporate Customer has with the bank. A Credit Facility is an agreement between the bank and a (corporate) customer to allow the customer to acquire asset products from the bank up to the limit of the credit facility without the need for a full due diligence and underwriting for each of these products. ReBQ Retrieve details about a credit facility's applied fees

  **Documentation**

  This API path allows you to retrieve information about the applied fees associated with a specific credit facility. It is part of a system that manages the credit facilities that a corporate customer has with the bank. A credit facility is an agreement that allows the customer to acquire asset products from the bank up to a certain limit without needing a full evaluation process for each product. Using this API, you can access details about the fees that have been applied to a particular credit facility.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

GET /credit-facilities/{creditfacilityid}/service-fees/{servicefeesid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /CreditFacility/{creditfacilityid}/Maintenance/{maintenanceid}/Request</span></summary>

  **Description**

  The Credit Facility Service Domain manages the Credit Facilities that a Corporate Customer has with the bank. A Credit Facility is an agreement between the bank and a (corporate) customer to allow the customer to acquire asset products from the bank up to the limit of the credit facility without the need for a full due diligence and underwriting for each of these products. RqBQ Request a maintenance activity for a credit facility

  **Documentation**

  This API path allows a user to request a maintenance activity for a specific credit facility identified by the {creditfacilityid} parameter. The maintenance activity is further specified by the {maintenanceid} parameter. By sending a PUT request to this API path, the user can update an existing maintenance request associated with the credit facility. Maintenance activities could involve tasks such as adjustments, updates, or changes related to the credit facility, enabling the bank to efficiently manage and handle maintenance requests from corporate customers.

  **Limitations**

  PUT: A good name for this path following REST best practices could be:

'/credit-facilities/{creditfacilityid}/maintenance/{maintenanceid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /CreditFacility/{creditfacilityid}/Maintenance/{maintenanceid}/Retrieve</span></summary>

  **Description**

  The Credit Facility Service Domain manages the Credit Facilities that a Corporate Customer has with the bank. A Credit Facility is an agreement between the bank and a (corporate) customer to allow the customer to acquire asset products from the bank up to the limit of the credit facility without the need for a full due diligence and underwriting for each of these products. ReBQ Retrieve details about maintenance processing for a credit facility

  **Documentation**

  This API endpoint allows you to retrieve details about maintenance processing for a specific credit facility within the Credit Facility Service Domain. By providing the credit facility ID and the maintenance ID as parameters in the request, you can access information related to the agreement between the bank and a corporate customer to allow the customer to acquire asset products up to the credit facility limit without requiring a full due diligence and underwriting process for each product. In simpler terms, this API helps you get specific information about the maintenance processes associated with a credit facility.

  **Limitations**

  GET: The path '/CreditFacilities/{creditfacilityid}/Maintenance/{maintenanceid}' typically represents a specific resource identified by both Credit Facility ID and Maintenance ID. To retrieve a specific maintenance resource under a particular credit facility, a common practice would be to use a GET request to the following path:

'/CreditFacilities/{creditfacilityid}/Maintenance/{maintenanceid}'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
