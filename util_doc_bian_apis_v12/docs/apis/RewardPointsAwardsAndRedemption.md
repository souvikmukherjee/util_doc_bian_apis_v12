---
id: RewardPointsAwardsAndRedemption
title: RewardPointsAwardsAndRedemption
---

<h1 style='color:red;'>RewardPointsAwardsAndRedemption</h1>

**BIAN Documentation:** [RewardPointsAwardsAndRedemption v12](https://app.swaggerhub.com/apis/BIAN-3/RewardPointsAwardsAndRedemption/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /RewardPointsAwardsAndRedemption/{rewardpointsawardsandredemptionid}/Exchange</span></summary>

  **Description**

  Handle the allocation and redemption of rewards points for customer transaction activity EcCR Accept, verify, etc. aspects of Reward Points Transaction processing

  **Documentation**

  This API path allows you to update an existing resource related to the allocation and redemption of rewards points for customer transactions. It is used to manage the process of exchanging rewards points for various customer activities, such as verifying transactions and processing points allocation and redemption.

  **Limitations**

  PUT: The name for the path '/RewardPointsAwardsAndRedemption/{rewardpointsawardsandredemptionid}/Exchange' following REST best practices should be:

'/rewards/{id}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /RewardPointsAwardsAndRedemption/{rewardpointsawardsandredemptionid}/Execute</span></summary>

  **Description**

  Handle the allocation and redemption of rewards points for customer transaction activity ExCR Execute an available automated action for Reward Points Transaction

  **Documentation**

  This BIAN API path is used to execute an available automated action for the allocation and redemption of rewards points related to customer transaction activities. By making a PUT request to this path with the specific reward points awards and redemption ID, you can trigger the system to update and process reward points transactions for customers. This API allows for the management and execution of reward points activities within a financial service environment.

  **Limitations**

  PUT: The name of the path should be '/reward-points-awards-and-redemption/{id}/execute'.

</details>

<details open>
  <summary><span style='color:red;'>POST: /RewardPointsAwardsAndRedemption/Initiate</span></summary>

  **Description**

  Handle the allocation and redemption of rewards points for customer transaction activity InCR Instantiate a new Reward Points Transaction

  **Documentation**

  This API path allows you to create a new transaction for awarding or redeeming reward points to customers based on their transaction activities. When a customer engages in a transaction, such as making a purchase, this API can be used to allocate or deduct reward points accordingly. It helps to track and manage the reward points system for customers.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be something that represents a resource or action in a more noun-based format. Here are some suggestions:

- /reward-points-awards-and-redemption/initiate
- /reward-points/awards-and-redemption/initiate
- /reward-programs/initiate

</details>

<details open>
  <summary><span style='color:red;'>GET: /RewardPointsAwardsAndRedemption/{rewardpointsawardsandredemptionid}/Retrieve</span></summary>

  **Description**

  Handle the allocation and redemption of rewards points for customer transaction activity ReCR Retrieve details about any aspect of Reward Points Transaction

  **Documentation**

  This BIAN API path allows you to retrieve details related to the allocation and redemption of reward points for customer transactions. By specifying the ID of a specific reward points transaction in the URL, you can gather information about that transaction, such as the points awarded or redeemed. This API is useful for tracking and managing customer interaction with reward points systems.

  **Limitations**

  GET: Based on REST best practices, the name of the path could be "/reward-points-awards-and-redemption/{rewardpointsawardsandredemptionid}".

</details>

<details open>
  <summary><span style='color:red;'>PUT: /RewardPointsAwardsAndRedemption/{rewardpointsawardsandredemptionid}/Request</span></summary>

  **Description**

  Handle the allocation and redemption of rewards points for customer transaction activity RqCR Request manual intervention or a decision with respect to Reward Points Transaction

  **Documentation**

  This BIAN API path allows you to update an existing resource related to the allocation and redemption of rewards points for customer transaction activity. Specifically, it facilitates the process of requesting manual intervention or a decision regarding a Reward Points Transaction. By using this API path with a PUT method, you can make changes or updates to the resource identified by the rewardpointsawardsandredemptionid.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be '/reward-points-awards-redemption/{rewardpointsawardsandredemptionid}/request'. 

It uses lowercase letters, separates words with hyphens, and clearly indicates the resource being accessed ('request') within the context of the parent resource ('reward-points-awards-redemption').

</details>

<details open>
  <summary><span style='color:red;'>PUT: /RewardPointsAwardsAndRedemption/{rewardpointsawardsandredemptionid}/Update</span></summary>

  **Description**

  Handle the allocation and redemption of rewards points for customer transaction activity UpCR Update details relating to Reward Points Transaction

  **Documentation**

  This BIAN API path allows you to update the details related to a specific Reward Points Transaction. The purpose of this API is to handle the allocation and redemption of rewards points for customer transaction activities. By using the PUT method with this path, you can make changes to the information associated with a particular Reward Points Transaction.

  **Limitations**

  PUT: The name of the path should be:

'/reward-points-awards-and-redemption/{rewardpointsawardsandredemptionid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /RewardPointsAwardsAndRedemption/{rewardpointsawardsandredemptionid}/Award/{awardid}/Exchange</span></summary>

  **Description**

  Handle the allocation and redemption of rewards points for customer transaction activity EcBQ Accept, verify, etc. aspects of Award processing

  **Documentation**

  This API path allows you to update an existing resource related to the allocation and redemption of reward points for customer transaction activities. Specifically, it deals with handling the process of awarding and exchanging reward points for customer transactions. It includes functions such as verifying, accepting, and processing awards associated with reward points.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be: 

/reward-points-awards-and-redemption/{rewardpointsawardsandredemptionid}/awards/{awardid}/exchange

</details>

<details open>
  <summary><span style='color:red;'>PUT: /RewardPointsAwardsAndRedemption/{rewardpointsawardsandredemptionid}/Redemption/{redemptionid}/Exchange</span></summary>

  **Description**

  Handle the allocation and redemption of rewards points for customer transaction activity EcBQ Accept, verify, etc. aspects of Redemption processing

  **Documentation**

  This API path allows for the updating of an existing resource related to the allocation and redemption of rewards points for customer transactions. Specifically, it focuses on handling the exchange process for redeeming rewards points. This could involve accepting, verifying, and other necessary steps in processing redemptions.

  **Limitations**

  PUT: The name of that endpoint should be:

`/reward-points-awards-and-redemption/{rewardpointsawardsandredemptionid}/redemption/{redemptionid}/exchange`

This naming convention follows REST best practices by using lowercase letters, hyphens to separate words, and utilizing descriptive names that reflect the resource structure and hierarchy.

</details>

<details open>
  <summary><span style='color:red;'>POST: /RewardPointsAwardsAndRedemption/{rewardpointsawardsandredemptionid}/Award/Initiate</span></summary>

  **Description**

  Handle the allocation and redemption of rewards points for customer transaction activity InBQ Instantiate a new Award

  **Documentation**

  This API path allows you to create a new resource for handling the allocation and redemption of rewards points for customer transaction activity. More specifically, it is used to initiate the process of allocating or redeeming rewards points for a specific award identified by the `rewardpointsawardsandredemptionid`. By using a POST request to this path, you can instantiate a new award within the rewards points program.

  **Limitations**

  POST: A good name for the path '/RewardPointsAwardsAndRedemption/{rewardpointsawardsandredemptionid}/Award/Initiate' following REST best practices could be:

```
POST /rewardpoints/{rewardpointsawardsandredemptionid}/award
``` 

This name reflects the HTTP method (POST) to initiate a new award for a specific reward points transaction identified by `rewardpointsawardsandredemptionid`.

</details>

<details open>
  <summary><span style='color:red;'>POST: /RewardPointsAwardsAndRedemption/{rewardpointsawardsandredemptionid}/Redemption/Initiate</span></summary>

  **Description**

  Handle the allocation and redemption of rewards points for customer transaction activity InBQ Instantiate a new Redemption

  **Documentation**

  This API path allows you to create a new redemption for reward points earned or used by customers in transaction activities. By initiating a new redemption, you can allocate or redeem rewards points based on customer actions. This API is part of the system that manages the awarding and usage of reward points within a customer rewards program.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be something like:
'/reward-points-awards-and-redemption/{id}/redemption/initiate'

</details>

<details open>
  <summary><span style='color:red;'>GET: /RewardPointsAwardsAndRedemption/{rewardpointsawardsandredemptionid}/Award/{awardid}/Retrieve</span></summary>

  **Description**

  Handle the allocation and redemption of rewards points for customer transaction activity ReBQ Retrieve details about any aspect of Award

  **Documentation**

  This API path allows you to retrieve details about a specific award in the context of reward points awards and redemption system. By providing the ID of the reward points awards and redemption as well as the ID of the award, you can access information about that specific award. This could include details such as the type of award, the number of points required for redemption, or any other relevant information related to the award within the system.

  **Limitations**

  GET: The name of the path should be:
'/reward-points-awards-redemption/{rewardpointsawardsandredemptionid}/awards/{awardid}'

</details>

<details open>
  <summary><span style='color:red;'>GET: /RewardPointsAwardsAndRedemption/{rewardpointsawardsandredemptionid}/Redemption/{redemptionid}/Retrieve</span></summary>

  **Description**

  Handle the allocation and redemption of rewards points for customer transaction activity ReBQ Retrieve details about any aspect of Redemption

  **Documentation**

  This BIAN API path allows you to retrieve details about a specific redemption within the Reward Points Awards and Redemption system. By providing the IDs for both the overall reward points allocation and the specific redemption, you can retrieve information about that particular redemption transaction. The API helps manage the allocation and redemption of rewards points for customer transactions and allows you to obtain specific information about a redemption process.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be: 

GET '/reward-points-awards-and-redemption/{reward-points-awards-and-redemption-id}/redemption/{redemption-id}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /RewardPointsAwardsAndRedemption/{rewardpointsawardsandredemptionid}/Award/{awardid}/Update</span></summary>

  **Description**

  Handle the allocation and redemption of rewards points for customer transaction activity UpBQ Update details relating to Award

  **Documentation**

  This API path `/RewardPointsAwardsAndRedemption/{rewardpointsawardsandredemptionid}/Award/{awardid}/Update` allows you to update details related to a specific award within a rewards points program. It is part of the functionality that manages the allocation and redemption of rewards points for customer transaction activities. You can use this API to make changes or updates to specific award details within the rewards points system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/rewardpointsawardsandredemption/{rewardpointsawardsandredemptionid}/award/{awardid}' - to represent the resource endpoint for updating a specific award associated with a reward points awards and redemption entity.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /RewardPointsAwardsAndRedemption/{rewardpointsawardsandredemptionid}/Redemption/{redemptionid}/Update</span></summary>

  **Description**

  Handle the allocation and redemption of rewards points for customer transaction activity UpBQ Update details relating to Redemption

  **Documentation**

  This BIAN API path allows users to update specific details related to the redemption of rewards points within the Reward Points Awards and Redemption system. By using a PUT request method, users can make changes or adjustments to the redemption details associated with a particular redemption ID. This API is part of the functionality that manages the allocation and redemption of rewards points for customer transaction activities in the system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/reward-points-awards-and-redemption/{rewardpointsawardsandredemptionid}/redemption/{redemptionid}'

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
