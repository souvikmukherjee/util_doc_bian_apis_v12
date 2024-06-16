---
id: IssuedDeviceAdministration
title: IssuedDeviceAdministration
---

<h1 style='color:red;'>IssuedDeviceAdministration</h1>

**BIAN Documentation:** [IssuedDeviceAdministration v12](https://app.swaggerhub.com/apis/BIAN-3/IssuedDeviceAdministration/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /IssuedDeviceAdministration/Initiate</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate PrCR Allocate an issued device (selected type will internally invoke assignment type)

  **Documentation**

  This API path allows users to initiate the issuance of authentication tokens, which can be physical devices like cards and fobs, or intangible devices like passwords. It helps in tracking the versions of tokens, replacing them when needed, and setting limits on how long and how often they can be used. Users can also associate specific permissions for accessing products or services with the tokens they are issued.

  **Limitations**

  POST: If the path '/IssuedDeviceAdministration/Initiate' followed all REST best practices, it should be named based on the resource being acted upon rather than the action being taken. It should reflect a noun that represents the resource. For example, it could be named as '/devices' if the resource being administered or initiated is a device.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceAdministration/{issueddeviceadministrationid}/Update</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate UpCR Update details of an allocation

  **Documentation**

  This API path allows you to update the details of an allocated issued device in the Issued Device Administration system. This could include making changes to the device's version, replacing the device, setting limits on how often the device can be issued, and associating specific access permissions with the device. The API is designed to manage the issuance of various types of authentication tokens, such as physical cards or virtual passwords, to customers and third-party service providers.

  **Limitations**

  PUT: The name of the path should be:

'/issued-device-administrations/{issueddeviceadministrationid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceAdministration/{issueddeviceadministrationid}/Control</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate CoCR Control an issued device allocation (e.g. suspend)

  **Documentation**

  This BIAN API path allows users to update an existing resource related to the administration of issued authentication tokens. It deals with managing tokens such as cards, fobs, readers, passwords, and secret questions by tracking versions, handling replacements, and setting limits on their duration and frequency of use. Users can also associate specific access permissions with these tokens. The Control operation in this path enables actions like suspending an issued device allocation.

  **Limitations**

  PUT: The name of the path should be:

`/issued-device-administrations/{issueddeviceadministrationid}/control`

Following REST best practices, it is recommended to use all lowercase letters and separate words with hyphens in the path names.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceAdministration/{issueddeviceadministrationid}/Exchange</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate EcCR Accept, verify, etc aspects of an allocation

  **Documentation**

  This API path allows you to update information related to the administration of issued authentication tokens. For example, you can update details about physical devices like cards or fobs, as well as intangible devices like passwords. This includes tracking different versions, managing replacements, and setting limits on how often they can be used. You can also associate specific access permissions with the tokens. This API helps you manage the allocation and administration of authentication tokens for customers and third-party service providers.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:  
'/issued-device-administrations/{issueddeviceadministrationid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>GET: /IssuedDeviceAdministration/{issueddeviceadministrationid}/Retrieve</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate ReCR Retrieve details about an allocation

  **Documentation**

  This API path allows you to retrieve details about a specific allocation in the Issued Device Administration service domain. It is used for managing the issuance of authentication tokens to customers and third party service providers. These tokens can be physical devices like cards, fobs, and readers, or intangible items like passwords and secret questions. With this API, you can track versions of tokens, manage replacements, set limits on how long they are valid for, and how frequently they can be issued. Additionally, you can associate specific permissions for accessing products or services with these issued tokens.

  **Limitations**

  GET: The name of the path should be:

```
/issued-device-administrations/{issueddeviceadministrationid}
``` 

This naming convention adheres to REST best practices by using lowercase letters, hyphens to separate words, and only including the necessary information to uniquely identify the resource.

</details>

<details open>
  <summary><span style='color:red;'>POST: /IssuedDeviceAdministration/{issueddeviceadministrationid}/PasswordAssignment/Initiate</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate PrBQ Provide a password assignment

  **Documentation**

  This API path allows you to initiate the assignment of a password to a specific issued device administration ID within the system. This is part of the process of administering authentication tokens, which can be physical devices like cards or digital items like passwords. By creating a new resource through this API, you can manage the issuance of these tokens, track their versions, set limits on their use, and associate them with specific access permissions for products or services when needed.

  **Limitations**

  POST: Based on REST best practices, the name of the path should ideally be: 

```
/issued-devices/{issuedDeviceId}/password-assignments/initiate
``` 

Here are some key points to consider:

1. Use lowercase letters and separate words with hyphens for better readability and consistency.
2. Avoid using uppercase letters for paths.
3. Use plural nouns for collections (e.g., devices) and singular nouns for specific resources (e.g., device).
4. Use descriptive and

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceAdministration/{issueddeviceadministrationid}/PasswordAssignment/{passwordassignmentid}/Update</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate UpBQ Update details of an assigned password

  **Documentation**

  This API path allows you to update the details of an assigned password within the context of the Issued Device Administration service domain. It is used to manage the issuance of authentication tokens like passwords to customers and third party service providers. This update operation can include modifying information related to the assigned password, such as version tracking, replacement, and setting duration/frequency limits. Additionally, specific product or service access permissions may be linked to the assigned password as needed.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

PUT /issued-devices/{issueddeviceadministrationid}/password-assignments/{passwordassignmentid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceAdministration/{issueddeviceadministrationid}/PasswordAssignment/{passwordassignmentid}/Control</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate CoBQ Control an assigned password (e.g. suspend)

  **Documentation**

  This API path allows you to update and control the assignment of passwords for issued authentication tokens within a system. It is used for managing various types of authentication tokens such as cards, fobs, readers, passwords, and secret questions. You can use this path to make changes to the passwords associated with specific tokens, including actions like suspending passwords.

  **Limitations**

  PUT: Based on REST best practices, the path could be named as follows:

/issued-device-administrations/{issueddeviceadministrationid}/password-assignments/{passwordassignmentid}/control

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceAdministration/{issueddeviceadministrationid}/PasswordAssignment/{passwordassignmentid}/Exchange</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate EcBQ Accept, verify, reject etc. an assigned password

  **Documentation**

  This API path allows you to update an existing password assignment within the Issued Device Administration service domain. It pertains to the administration of authentication tokens like passwords and secret questions given to customers and third-party service providers. The update could involve actions such as accepting, verifying, or rejecting the assigned password. The service also manages version tracking, replacement, and limits on how frequently or for how long a token can be used. Additionally, specific access permissions for products or services can be associated with the issued token as needed.

  **Limitations**

  PUT: A RESTful path should be descriptive and follow the resource-oriented approach. Based on the provided context, a suitable name for the path could be:

'/issued-devices/{issuedDeviceId}/password-assignments/{passwordAssignmentId}/exchange'

This naming convention follows the best practices of using lowercase letters, hyphens to separate words, and plural nouns for collections where applicable.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceAdministration/{issueddeviceadministrationid}/PasswordAssignment/{passwordassignmentid}/Capture</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate CaBQ Capture usage details of an assigned password

  **Documentation**

  This API path allows you to update the usage details of an assigned password in the context of managing issued authentication tokens. It is part of the Issued Device Administration service that handles the issuance of various types of tokens like cards, fobs, passwords, etc., to customers and third-party service providers. By capturing the usage details of a specific assigned password, you can track how it is being used and manage it effectively within the token issuance system.

  **Limitations**

  PUT: The name of the path should be:

/issued-device-administrations/{issueddeviceadministrationid}/password-assignments/{passwordassignmentid}/capture

According to REST best practices:
- Use lowercase letters for the path segments
- Separate words with hyphens instead of underscores
- Use plural nouns for collections (e.g., `issued-device-administrations`, `password-assignments`)

</details>

<details open>
  <summary><span style='color:red;'>GET: /IssuedDeviceAdministration/{issueddeviceadministrationid}/PasswordAssignment/{passwordassignmentid}/Retrieve</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate ReBQ Retrieve details about an assigned password

  **Documentation**

  This API path allows you to retrieve details about an assigned password within the context of Issued Device Administration. In simpler terms, it helps you access information about a specific password that has been assigned to a customer or third party service provider. The API provides functionality for managing and tracking the issuance of authentication tokens, including passwords, to ensure secure access to products or services.

  **Limitations**

  GET: The name of the path should be:

```
/issued-device-administrations/{issueddeviceadministrationid}/password-assignments/{passwordassignmentid}/retrieve
```

</details>

<details open>
  <summary><span style='color:red;'>POST: /IssuedDeviceAdministration/{issueddeviceadministrationid}/QuestionAssignment/Initiate</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate PrBQ Provide a secret question assignment

  **Documentation**

  This API path allows you to initiate the assignment of a secret question to an issued device within the administration system. It is part of the process of managing authentication tokens for customers and third-party service providers. The secret question assignment is important for enhancing security measures associated with the issued device.

  **Limitations**

  POST: The name of the path should be:

```
/issued-device-administrations/{issueddeviceadministrationid}/question-assignments/initiate
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceAdministration/{issueddeviceadministrationid}/QuestionAssignment/{questionassignmentid}/Update</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate UpBQ Update details of an assigned secret question

  **Documentation**

  This API path allows you to update the details of a secret question that has been assigned to a specific issued device administration. This means you can make changes to the secret question associated with a particular authentication token, like updating the question itself or other relevant information.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/issued-device-administrations/{issueddeviceadministrationid}/question-assignments/{questionassignmentid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceAdministration/{issueddeviceadministrationid}/QuestionAssignment/{questionassignmentid}/Control</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate CoBQ Control an assigned secret question (e.g. suspend)

  **Documentation**

  This API path allows users to update the control settings for a specific assigned secret question within the system for issued device administration. Users can modify parameters like suspension status related to the assigned secret question.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be structured like this:

/issued-device-administrations/{issueddeviceadministrationid}/question-assignments/{questionassignmentid}/controls

It is important to use lowercase letters, separate words with hyphens (-) instead of camel case or underscores, and use plural nouns when naming resources in a RESTful API.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceAdministration/{issueddeviceadministrationid}/QuestionAssignment/{questionassignmentid}/Exchange</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate EcBQ Accept, verify, reject etc. an assigned secret question

  **Documentation**

  This API path allows you to update an assigned secret question within the system for issued device administration. It is used to manage the issuance of authentication tokens to customers and third-party service providers. You can update details related to secret questions, such as modifying the question or answer assigned to a specific token. This helps ensure the security and access control of the issued tokens.

  **Limitations**

  PUT: The name of the path should be:

'/issued-device-administrations/{issueddeviceadministrationid}/question-assignments/{questionassignmentid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceAdministration/{issueddeviceadministrationid}/QuestionAssignment/{questionassignmentid}/Capture</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate CaBQ Capture usage details of an assigned secret question

  **Documentation**

  This API path allows you to update the usage details of a secret question that has been assigned to a specific issued device administration. This service domain is responsible for managing the issuance of authentication tokens, which could be physical devices or intangible items like passwords. The update can include information such as how the assigned secret question is being used. This helps keep track of the authentication process and ensure security measures are being followed.

  **Limitations**

  PUT: The name of the path according to REST best practices could be:

/issued-device-administrations/{issueddeviceadministrationid}/question-assignments/{questionassignmentid}/capture

</details>

<details open>
  <summary><span style='color:red;'>GET: /IssuedDeviceAdministration/{issueddeviceadministrationid}/QuestionAssignment/{questionassignmentid}/Retrieve</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate ReBQ Retrieve details about an assigned ser=AndAnd password

  **Documentation**

  This API path allows you to retrieve details about a specific question assignment associated with an issued device administration. It is related to administering the issuance of authentication tokens, which can include physical devices like cards or fobs, as well as intangible items like passwords or secret questions. The API helps with tracking versions, replacing tokens, setting limits on usage duration, and associating specific access permissions with the issued tokens. By using this path, you can access information about a particular assigned question related to device administration.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

/issued-device-administrations/{issueddeviceadministrationid}/question-assignments/{questionassignmentid}/retrieve

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceAdministration/{issueddeviceadministrationid}/DeviceAssignment/{deviceassignmentid}/Update</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate UpBQ Update details of an assigned device

  **Documentation**

  This API path allows you to update specific details of an assigned device within the Issued Device Administration system. It is used to make changes to information related to authentication tokens issued to customers and service providers, which can include physical devices like cards or fobs, as well as intangible devices like passwords or secret questions. You can use this path to manage version tracking, replacement, duration limits, and access permissions associated with the assigned device.

  **Limitations**

  PUT: The name for the path should be:

'/issued-device-administrations/{issueddeviceadministrationid}/device-assignments/{deviceassignmentid}'

This path uses lowercase letters and hyphens to separate words, which is a common practice in REST APIs.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceAdministration/{issueddeviceadministrationid}/DeviceAssignment/{deviceassignmentid}/Control</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate CoBQ Control an assigned device (e.g. out of service)

  **Documentation**

  This API path allows you to update information related to the control of an assigned device within the Issued Device Administration service domain. This could involve actions such as marking a device as out of service. The administration includes managing different types of authentication tokens like cards, fobs, readers, passwords, and secret questions, tracking versions, issuing replacements, and setting limits on how long and how frequently tokens can be used. Additionally, specific access permissions for products or services can be linked to a token when needed.

  **Limitations**

  PUT: Based on REST best practices, a possible naming convention for this path could be:

/issued-device-administrations/{issueddeviceadministrationid}/device-assignments/{deviceassignmentid}/control

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceAdministration/{issueddeviceadministrationid}/DeviceAssignment/{deviceassignmentid}/Capture</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate CaBQ Capture usage details of an assigned device

  **Documentation**

  This API path allows you to update the usage details of an assigned device within the Issued Device Administration service domain. It is used to capture information about how a specific authentication token (such as a card, fob, reader, password, or secret question) is being used. This could include details like when and how the device is being used, for monitoring and tracking purposes.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be as follows:

`/issued-device-administrations/{issueddeviceadministrationid}/device-assignments/{deviceassignmentid}/captures`

</details>

<details open>
  <summary><span style='color:red;'>GET: /IssuedDeviceAdministration/{issueddeviceadministrationid}/DeviceAssignment/{deviceassignmentid}/Retrieve</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate ReBQ Retrieve details about an assigned device

  **Documentation**

  This API path allows you to retrieve details about an assigned device within the Issued Device Administration service domain. It is used to access information about authentication tokens issued to customers and third-party service providers. This includes physical devices like cards and fobs, as well as intangible devices like passwords and secret questions. The API enables you to track the version of the device, manage replacements, and set limits on its duration and frequency of use. Additionally, it allows for associating specific permissions for accessing certain products or services with the issued token.

  **Limitations**

  GET: Based on REST best practices, a suitable name for the path '/IssuedDeviceAdministration/{issueddeviceadministrationid}/DeviceAssignment/{deviceassignmentid}/Retrieve' could be:

GET '/issued-device-administrations/{issueddeviceadministrationid}/device-assignments/{deviceassignmentid}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /IssuedDeviceAdministration/{issueddeviceadministrationid}/BiometricAssignment/Initiate</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate PrBQ Provide a biometric assignment

  **Documentation**

  This API path allows you to initiate the process of assigning a biometric identifier (such as a fingerprint or facial recognition) to a specific issued device administration ID. This means that you can link a biometric feature to a specific token or authentication device, enhancing security and access control for customers and third-party service providers.

  **Limitations**

  POST: Based on REST best practices, the name of the path could be:

/issued-devices/{issueddeviceadministrationid}/biometric-assignments/initiate

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceAdministration/{issueddeviceadministrationid}/BiometricAssignment/{biometricassignmentid}/Update</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate UpBQ Update details of an assigned biometric

  **Documentation**

  This API path allows you to update the details of a biometric assignment that is associated with a specific issued device administration. This means you can make changes to the information related to a biometric assignment, which is part of the authentication token issuance process. This could involve updating biometric data or any other related information that helps in managing the authentication process efficiently.

  **Limitations**

  PUT: The name of the path could be:  
PUT /issued-device-administrations/{issuedDeviceAdministrationId}/biometric-assignments/{biometricAssignmentId}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceAdministration/{issueddeviceadministrationid}/BiometricAssignment/{biometricassignmentid}/Control</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate CoBQ Control an assigned biometric (e.g. suspend)

  **Documentation**

  This API path allows you to update and control the assignment of a biometric identifier within the administration of issued devices. Essentially, it helps manage the authentication tokens (devices like cards, fobs, passwords) that are given to customers and third-party service providers for accessing specific products or services. You can use this path to make changes or suspend a biometric assignment associated with an issued device.

  **Limitations**

  PUT: The name for the path `/IssuedDeviceAdministration/{issueddeviceadministrationid}/BiometricAssignment/{biometricassignmentid}/Control` following REST best practices could be something like:

`/issued-device-administrations/{issueddeviceadministrationid}/biometric-assignments/{biometricassignmentid}/control`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceAdministration/{issueddeviceadministrationid}/BiometricAssignment/{biometricassignmentid}/Exchange</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate EcBQ Accept, verify, reject etc. an assigned biometric

  **Documentation**

  This API path is used to update an existing biometric assignment within the Issued Device Administration service. The biometric assignment refers to the association of a biometric identifier (like a fingerprint or facial scan) with an issued authentication token (such as a card or password). By using this API, you can make changes or updates to the biometric assignment, such as accepting, verifying, or rejecting a biometric identification assigned to a specific token.

  **Limitations**

  PUT: The name of the path should be:

/issued-device-administrations/{issueddeviceadministrationid}/biometric-assignments/{biometricassignmentid}/exchanges

</details>

<details open>
  <summary><span style='color:red;'>GET: /IssuedDeviceAdministration/{issueddeviceadministrationid}/BiometricAssignment/{biometricassignmentid}/Retrieve</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate ReBQ Retrieve details about an assigned biometric

  **Documentation**

  This API path allows you to retrieve details about a specific assigned biometric within the context of Issued Device Administration. It is part of the process of managing authentication tokens, which can be physical devices like cards or fobs, or intangible items like passwords and secret questions. By using this API, you can access information about a particular biometric assignment, such as version tracking, replacement status, and any specific permissions associated with it. This functionality helps in effectively managing authentication processes and ensuring secure access to products or services.

  **Limitations**

  GET: The name of the path should be:

`/issued-device-administrations/{issueddeviceadministrationid}/biometric-assignments/{biometricassignmentid}`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceAdministration/{issueddeviceadministrationid}/ReaderAssignment/{readerassignmentid}/Update</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate UpBQ Update details of an assigned reader device

  **Documentation**

  This API path allows you to update the details of a specific assigned reader device within the system that administers the issuance of authentication tokens. This system manages various types of tokens, such as physical devices (e.g., cards, fobs, readers) and intangible devices (e.g., passwords, secret questions). By making a PUT request to this endpoint with the relevant IDs, you can modify information related to a reader device assignment, such as version tracking, replacement details, and limits on how often it can be used. Additionally, you can associate specific access permissions for products or services with the assigned reader device if needed.

  **Limitations**

  PUT: The name of the path should be:

`PUT /issued-device-administrations/{issueddeviceadministrationid}/reader-assignments/{readerassignmentid}`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceAdministration/{issueddeviceadministrationid}/ReaderAssignment/{readerassignmentid}/Control</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate CoBQ Control an assigned reader (e.g. out of service)

  **Documentation**

  This API path allows you to update the control status of a reader that has been assigned as part of the Issued Device Administration service. For example, you can use this API to mark a reader as "out of service". This helps in managing the authentication tokens issued to customers and third-party service providers by keeping track of the devices used for authentication, such as cards, fobs, and readers, and ensuring they are functioning correctly.

  **Limitations**

  PUT: The RESTful path should ideally be named based on resources rather than actions. It should focus on nouns that represent the resources being manipulated. 

A more appropriate name for the path could be:

/IssuedDevices/{issueddeviceid}/ReaderAssignments/{readerassignmentid}/Controls

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceAdministration/{issueddeviceadministrationid}/ReaderAssignment/{readerassignmentid}/Capture</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate CaBQ Capture usage details of an assigned reader

  **Documentation**

  This API path allows you to update the usage details of a specific reader that has been assigned to a particular issued device administration. It is a part of the overall service that manages the issuance of authentication tokens (devices like cards, fobs, readers, passwords, etc.) to customers and third party service providers. The update can include information about how the assigned reader is being used, such as tracking its usage for access to specific products or services.

  **Limitations**

  PUT: The name of the path should be:
/issued-device-administrations/{issueddeviceadministrationid}/reader-assignments/{readerassignmentid}/captures

</details>

<details open>
  <summary><span style='color:red;'>GET: /IssuedDeviceAdministration/{issueddeviceadministrationid}/ReaderAssignment/{readerassignmentid}/Retrieve</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate ReBQ Retrieve details about an assigned reader

  **Documentation**

  This API path allows you to retrieve details about an assigned reader within the context of issued device administration. It is part of the service domain that manages the issuance of authentication tokens, such as cards, fobs, and passwords, to customers and third-party service providers. With this API, you can access information related to a specific reader assignment, including version tracking, replacement details, and any associated product/service access permissions.

  **Limitations**

  GET: Based on REST best practices, a potentially more descriptive and user-friendly name for the path could be:

GET '/issued-devices/{issueddeviceadministrationid}/reader-assignments/{readerassignmentid}'

</details>

<details open>
  <summary><span style='color:red;'>POST: /IssuedDeviceAdministration/{issueddeviceadministrationid}/ChequesAssignment/Initiate</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate PrBQ Provide cheques

  **Documentation**

  This API path initiates the process of assigning cheques to a specific issued device administration ID. It is part of a service that manages the issuance of authentication tokens, which can be physical devices like cards or readers, or intangible ones like passwords or secret questions. The administration includes tracking different versions of tokens, replacing them when needed, and setting limits on how often they can be issued. Additionally, specific product or service access permissions can be linked to a token if required.

  **Limitations**

  POST: The name of the path should ideally be something that represents a resource and an action in a RESTful manner. Following REST best practices, a suitable name for the path could be:

'/issued-devices/{issued-device-id}/cheques-assignment/initiate'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceAdministration/{issueddeviceadministrationid}/ChequesAssignment/{chequesassignmentid}/Control</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate CoBQ Control issued cheques (e.g. cancel)

  **Documentation**

  This API path allows you to update information related to the assignment of cheques associated with authentication tokens issued to customers or third-party service providers. It is part of the Issued Device Administration service, which manages the issuance of various types of authentication tokens like cards, fobs, passwords, etc. The update can include changes to permissions, version tracking, replacement, and limits on how often tokens can be issued or used. Additionally, it allows for actions to be taken on controlling issued cheques, such as cancelling them if needed.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be: 

/issued-device-administrations/{issueddeviceadministrationid}/cheques-assignments/{chequesassignmentid}/control

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceAdministration/{issueddeviceadministrationid}/ChequesAssignment/{chequesassignmentid}/Exchange</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate EcBQ Accept, verify receipt etc. of issued cheques

  **Documentation**

  This API path is for updating an existing resource related to the administration of issued authentication tokens. It specifically focuses on the assignment and exchange of cheques within the Issued Device Administration system. This service domain handles the issuance of various types of authentication tokens like cards, fobs, readers, passwords, and secret questions to customers and third-party service providers. It includes managing the versions of tokens, replacing them when needed, and setting limits on their duration and frequency of use. Additionally, the API allows for assigning specific product or service access permissions to tokens if necessary.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/issued-device-administrations/{issueddeviceadministrationid}/cheques-assignments/{chequesassignmentid}/exchange

</details>

<details open>
  <summary><span style='color:red;'>GET: /IssuedDeviceAdministration/{issueddeviceadministrationid}/ChequesAssignment/{chequesassignmentid}/Retrieve</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate ReBQ Retrieve details about issued cheques

  **Documentation**

  This BIAN API path allows you to retrieve details about assigned cheques associated with a specific issued device administration. In other words, it provides information about the cheques that have been assigned to a particular authentication token issued to customers or third-party service providers. The API helps in tracking, replacing, and setting limits on the usage of authentication tokens, which can include physical devices like cards or intangible devices like passwords. It also allows the association of specific product/service access permissions with the issued tokens when necessary.

  **Limitations**

  GET: Based on REST best practices, a suitable name for the path '/IssuedDeviceAdministration/{issueddeviceadministrationid}/ChequesAssignment/{chequesassignmentid}/Retrieve' could be:

GET /issued-device-administrations/{issueddeviceadministrationid}/cheques-assignments/{chequesassignmentid}

This naming convention follows the best practice guidelines for REST APIs, which typically use lowercase letters and hyphens to separate words in the endpoint path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceAdministration/{issueddeviceadministrationid}/TokenAssignment/{tokenassignmentid}/Capture</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate Capture Assigned Token

  **Documentation**

  This API path allows you to update information related to the assignment of authentication tokens in the Issued Device Administration system. You can capture details about a specific token assignment by using this endpoint. This includes managing physical devices like cards and readers, as well as intangible items like passwords. Additionally, you can track versions, set replacement rules, and establish limits on how frequently tokens can be issued. This API also supports associating specific access permissions with the assigned token.

  **Limitations**

  PUT: The name of the path should be:

'/issued-device-administrations/{issueddeviceadministrationid}/token-assignments/{tokenassignmentid}/capture' 

Following REST best practices, the path should use lowercase letters, separate words with dashes, and be descriptive of the resource it represents.

</details>

<details open>
  <summary><span style='color:red;'>GET: /IssuedDeviceAdministration/{issueddeviceadministrationid}/TokenAssignment/{tokenassignmentid}/Retrieve</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate Retrieve Details about Assigned Token

  **Documentation**

  This API path allows you to retrieve detailed information about an assigned token within the Issued Device Administration service. This token could be a physical device like a card or fob, or it could be an intangible token like a password or secret question. The service manages the issuance of these tokens to customers and third-party service providers, tracking versions, handling replacements, and setting limits on how long and how often tokens can be used. Additionally, the API allows for specific product or service access permissions to be associated with each issued token.

  **Limitations**

  GET: The name of the path should be:

'/issued-device-administrations/{issueddeviceadministrationid}/token-assignments/{tokenassignmentid}/retrieve'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceAdministration/{issueddeviceadministrationid}/TokenAssignment/{tokenassignmentid}/Update</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate Update Details of Assigned Token

  **Documentation**

  This API path allows you to update the details of an assigned token within the Issued Device Administration service domain. It is used to make changes or modifications to the information related to a specific token assignment. This could include updating the token's version, setting replacement options, adjusting duration or frequency limits, and associating specific access permissions with the token if needed.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be:

PUT /IssuedDeviceAdministration/{issueddeviceadministrationid}/TokenAssignment/{tokenassignmentid}

</details>

<details open>
  <summary><span style='color:red;'>POST: /IssuedDeviceAdministration/{issueddeviceadministrationid}/TokenAssignment/Provide</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate Provide Details about Assigned Token

  **Documentation**

  This API path is used to create a new resource for providing details about assigned tokens in the Issued Device Administration service domain. It helps in administering the issuance of authentication tokens to customers and third-party service providers. The tokens can be physical devices like cards, fobs, readers, or intangible devices like passwords and secret questions. The administration includes tracking the version of tokens, replacing them when needed, setting limits on their duration and frequency of use. Additionally, specific access permissions for products or services can be associated with the issued tokens as required.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

```
/issued-device-administrations/{issueddeviceadministrationid}/token-assignments/provide
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /IssuedDeviceAdministration/{issueddeviceadministrationid}/TokenAssignment/{tokenassignmentid}/Execute</span></summary>

  **Description**

  This service domain administers the issuance of authentication tokens to customers and third party service providers. Tokens here include physical devices such as cards, fobs, readers and intangible 'devices' such as passwords and secret questions. Administration includes version tracking, replacement and duration/frequency limits. Specific product/service access permissions may be associated with an issued token when appropriate Execute token assignment amend permission

  **Documentation**

  This BIAN API path allows you to update the details of an existing token assignment within the Issued Device Administration service domain. This service domain manages the issuance of authentication tokens to customers and third-party service providers, which can be physical devices like cards or passwords. The update could involve modifying permissions associated with the token assignment, such as product or service access permissions.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
/issued-device-administrations/{issueddeviceadministrationid}/token-assignments/{tokenassignmentid}/execute
```

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
