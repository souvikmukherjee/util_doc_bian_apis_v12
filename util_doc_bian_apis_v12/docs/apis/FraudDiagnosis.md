---
id: FraudDiagnosis
title: FraudDiagnosis
---

<h1 style='color:red;'>FraudDiagnosis</h1>

**BIAN Documentation:** [FraudDiagnosis v12](https://app.swaggerhub.com/apis/BIAN-3/FraudDiagnosis/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /FraudDiagnosis/Evaluate</span></summary>

  **Description**

  This service domain handles the evaluation of detected possible fraud to support an appropriate response to contain the exposure EvCR Start a fraud diagnosis evaluation on a transaction

  **Documentation**

  This BIAN API path initiates a fraud diagnosis evaluation on a transaction. It is used to assess cases where fraud is suspected, in order to determine the validity of the suspicion and decide on an appropriate response to address the potential fraud.

  **Limitations**

  POST: The path '/FraudDiagnosis/Evaluate' would be best named using a noun and not a verb based on RESTful best practices. A more appropriate name for this path could be '/fraud-diagnosis-evaluations' to better align with REST conventions.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FraudDiagnosis/{frauddiagnosisid}/Update</span></summary>

  **Description**

  This service domain handles the evaluation of detected possible fraud to support an appropriate response to contain the exposure UpCR Update details for an active fraud diagnosis

  **Documentation**

  This API path (/FraudDiagnosis/{frauddiagnosisid}/Update) allows you to update details for an active fraud diagnosis. It is used to provide additional information or modify existing information related to a specific fraud diagnosis identified by the {frauddiagnosisid}. The purpose is to support the evaluation of detected possible fraud and ensure an appropriate response to contain any potential risks or exposure.

  **Limitations**

  PUT: If the path `/FraudDiagnosis/{frauddiagnosisid}/Update` followed REST best practices, it could be named as PUT '/fraud-diagnosis/{frauddiagnosisid}'. 

In the RESTful convention:
- Use HTTP methods to perform CRUD operations. PUT is typically used to update an existing resource.
- Use lowercase letters and hyphens to separate words in the URI.
- Use singular nouns in the URI to represent a resource.

Therefore, the recommended RESTful path

</details>

<details open>
  <summary><span style='color:red;'>GET: /FraudDiagnosis/{frauddiagnosisid}/Retrieve</span></summary>

  **Description**

  This service domain handles the evaluation of detected possible fraud to support an appropriate response to contain the exposure ReCR Retrieve details about a fraud diagnosis

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific fraud diagnosis. It is designed to support the evaluation of possible fraud cases and help in responding appropriately to contain any potential exposure. By providing the fraud diagnosis ID in the path, you can gather information related to the detected fraud case for further analysis and actions.

  **Limitations**

  GET: The name of the path should be:

GET /fraud-diagnosis/{fraud-diagnosis-id}

</details>

<details open>
  <summary><span style='color:red;'>GET: /FraudDiagnosis/{frauddiagnosisid}/CustomerBehavior/{customerbehaviorid}/Retrieve</span></summary>

  **Description**

  This service domain handles the evaluation of detected possible fraud to support an appropriate response to contain the exposure ReBQ Retrieve details about a customer behavior analysis

  **Documentation**

  This API path allows you to retrieve details about a customer behavior analysis within the context of fraud diagnosis. By providing the "frauddiagnosisid" and "customerbehaviorid" as parameters in the URL, you can access information related to the analysis of customer behavior that is being evaluated for possible fraud detection. This data can help in deciding on appropriate actions to address and prevent fraudulent activities.

  **Limitations**

  GET: A good RESTful name for this path would be: 
'/fraud-diagnosis/{frauddiagnosisid}/customer-behavior/{customerbehaviorid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /FraudDiagnosis/{frauddiagnosisid}/EconomicModel/{economicmodelid}/Retrieve</span></summary>

  **Description**

  This service domain handles the evaluation of detected possible fraud to support an appropriate response to contain the exposure ReBQ Retrieve details about an economic model analysis

  **Documentation**

  This BIAN API path allows you to retrieve details about an economic model analysis within the context of a fraud diagnosis. It is used to obtain information about an economic model that has been utilized in the evaluation of detected possible fraud, helping in determining the appropriate response to address the fraud.

  **Limitations**

  GET: Based on RESTful best practices, the name of the path should be:

`/fraud-diagnosis/{fraud_diagnosis_id}/economic-model/{economic_model_id}`

This path reflects the use of lowercase letters and hyphens to separate words in the endpoint, making it more readable and consistent with RESTful conventions. Additionally, the action "Retrieve" is implied in a RESTful design when accessing a specific resource using its identifier in the path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /FraudDiagnosis/{frauddiagnosisid}/AnalystReview/{analystreviewid}/Request</span></summary>

  **Description**

  This service domain handles the evaluation of detected possible fraud to support an appropriate response to contain the exposure RqBQ Request access to an analist for an active diagnosis

  **Documentation**

  This API path is used to request access to an analyst for an active diagnosis related to a detected fraud case. By providing the fraud diagnosis ID and analyst review ID, the system can initiate a request for a specialist to review the potential fraud and provide an appropriate response to mitigate any risks or exposure. It is designed to support the evaluation process for suspected fraudulent activities and facilitate a prompt and effective course of action.

  **Limitations**

  PUT: A suitable name for the path based on REST best practices could be:

'/fraud-diagnosis/{fraud-diagnosis-id}/analyst-review/{analyst-review-id}/request'

</details>

<details open>
  <summary><span style='color:red;'>GET: /FraudDiagnosis/{frauddiagnosisid}/AnalystReview/{analystreviewid}/Retrieve</span></summary>

  **Description**

  This service domain handles the evaluation of detected possible fraud to support an appropriate response to contain the exposure ReBQ Retrieve details about a analyst review of a transaction

  **Documentation**

  This API path allows you to retrieve details about an analyst review of a transaction in the context of evaluating a possible fraud diagnosis. It provides information related to the analyst review identified by the analyst review ID within the specific fraud diagnosis scenario identified by the fraud diagnosis ID. This information can help in understanding the analysis conducted on a transaction flagged for potential fraud, which is essential for taking appropriate actions to address and mitigate the fraud exposure.

  **Limitations**

  GET: A suitable name for this path following REST best practices could be '/fraud-diagnosis/{frauddiagnosisid}/analyst-review/{analystreviewid}'. 

It uses lowercase letters, separated by hyphens, and clearly indicates the resources and identifiers in the path.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
