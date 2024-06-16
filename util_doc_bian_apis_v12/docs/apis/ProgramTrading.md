---
id: ProgramTrading
title: ProgramTrading
---

<h1 style='color:red;'>ProgramTrading</h1>

**BIAN Documentation:** [ProgramTrading v12](https://app.swaggerhub.com/apis/BIAN-3/ProgramTrading/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /ProgramTrading/{programtradingid}/Control</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Control Program Trading Operating Session

  **Documentation**

  This BIAN API path allows a user to update an existing program trading session by providing control over the trading decisions made based on predefined rules and policies. It supports manual oversight and monitoring of the trading activities to ensure they align with the set guidelines and objectives of the program trading operation.

  **Limitations**

  PUT: The name of the path should be:

```
/program-trading/{programtradingid}/controls
```

Here are some key points to consider for following REST best practices with the naming:
- Use lowercase letters for paths and resource names.
- Use hyphens to separate words in the resource names.
- Use plural nouns for collections, which indicates that there are multiple items within that resource.
- Avoid using verbs in the path names, as the HTTP methods (GET, POST, PUT

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProgramTrading/{programtradingid}/Exchange</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Exchange Program Trading Operating Session

  **Documentation**

  This API path allows you to update an existing program trading session on an exchange. Program trading involves making trading decisions based on pre-set rules and policies. This API supports the functionality of managing program trading sessions, including manual oversight and monitoring as needed during the trading session on the exchange.

  **Limitations**

  PUT: The name of the path should be `/programTrading/{programTradingId}/exchange` following REST best practices. The path should be in lowercase letters and use hyphens to separate words for better readability.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProgramTrading/{programtradingid}/Execute</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Execute Program Trading Operating Session

  **Documentation**

  This API path allows you to update and execute a program trading operating session with a specific program trading ID. Program trading involves making trading decisions based on pre-defined rules and policies set in the program. This API supports the activation of the program trading session, including any manual oversight and monitoring that may be needed during the trading process.

  **Limitations**

  PUT: Based on REST best practices, the name of the path '/ProgramTrading/{programtradingid}/Execute' could be simplified to '/program-trading/{programtradingid}/execute'. This name is in lower case, uses hyphens to separate words, and conveys the intended action in a clear and concise manner.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProgramTrading/Initiate</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Initiate Program Trading Operating Session

  **Documentation**

  This API path allows users to create a new "Program Trading Operating Session" within the Program Trading service domain. Program trading involves making trading decisions based on preset rules and policies without manual intervention. This path initiates a session where program trading activities can be carried out, with support for manual oversight and monitoring as needed.

  **Limitations**

  POST: The name of the path '/ProgramTrading/Initiate' might be updated to follow REST best practices by using nouns instead of verbs and avoiding implementation details. For example, a more appropriate name for the path could be something like '/programs/initiate' or '/trading/programs'.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProgramTrading/{programtradingid}/Notify</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Notify Program Trading Operating Session

  **Documentation**

  This API path `/ProgramTrading/{programtradingid}/Notify` is used to retrieve information about a specific program trading session identified by `{programtradingid}`. It supports a program trading capability where trading decisions are automated based on predefined rules and policies. It also allows for manual oversight and monitoring of the trading activities if needed. The API is used to notify about the current operating session of the program trading, providing relevant details or updates about the trading activities taking place.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

/programs/{programtradingid}/notifications

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProgramTrading/{programtradingid}/Request</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Request Program Trading Operating Session

  **Documentation**

  This API path allows you to update an existing program trading operation session by making a request using the specified program trading ID. Program trading involves making trading decisions based on predetermined rules and policies. This API also supports manual oversight and monitoring of the program trading activities as needed.

  **Limitations**

  PUT: The path should be named as follows to follow REST best practices:

/program-trading/{programtradingid}/requests

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProgramTrading/{programtradingid}/Retrieve</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Retrieve Program Trading Operating Session

  **Documentation**

  This API path allows you to retrieve information about a specific program trading operating session identified by a unique program trading ID. Program trading involves making trading decisions based on pre-programmed rules and policies, and this API provides access to details about the operating session related to a particular program trading activity. It supports the ability to gather data for monitoring and oversight purposes, giving insights into the trading activities and decisions made within that session.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:

/program-trading/{programtradingid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProgramTrading/{programtradingid}/Update</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Update Program Trading Operating Session

  **Documentation**

  This API path allows you to update an existing program trading operating session identified by a specific program trading ID. Program trading involves making trading decisions based on pre-set rules and policies. This API supports the ability to modify and manage program trading sessions, including making changes to the rules and policies that guide the trading decisions.

  **Limitations**

  PUT: Following RESTful best practices, the name of the path should be:

'/program-trading/{programtradingid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProgramTrading/{programtradingid}/ProgramTradeExecution/{programtradeexecutionid}/Exchange</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Exchange Program Trade Execution Function

  **Documentation**

  This API path (/ProgramTrading/{programtradingid}/ProgramTradeExecution/{programtradeexecutionid}/Exchange) is used to update an existing resource related to program trading. Specifically, it relates to the exchange function within program trade execution. Program trading involves making trading decisions based on predefined rules and policies, with the ability to manually oversee and monitor the trades as needed. By utilizing this API, users can update information or perform actions related to the exchange function within program trade execution for a specific program trading ID and program trade execution ID.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/program-trading/{programTradingId}/program-trade-execution/{programTradeExecutionId}/exchange

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProgramTrading/{programtradingid}/ProgramTradedPortfolioAlgorithm/{programtradedportfolioalgorithmid}/Exchange</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Exchange Program Traded Portfolio Algorithm Function

  **Documentation**

  This API path allows you to update an existing program traded portfolio algorithm associated with program trading. It is used to modify the rules and policies that govern trading decisions within a program trading system. This can include making changes to the algorithm that dictates how assets are traded based on preset conditions. Additionally, the API supports manual oversight and monitoring of the trading activities to ensure compliance with relevant policies and regulations.

  **Limitations**

  PUT: For the given path `/ProgramTrading/{programtradingid}/ProgramTradedPortfolioAlgorithm/{programtradedportfolioalgorithmid}/Exchange`, following RESTful best practices, a recommended resource naming scheme could be:

`/program-trading/{programtradingid}/traded-portfolio-algorithm/{programtradedportfolioalgorithmid}/exchange`

In this naming convention:
- Resource names should be in lowercase.
- Hyphens can be used to separate multiple words in the resource names to make them

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProgramTrading/{programtradingid}/ProgramTradedPortfolioMaintenance/{programtradedportfoliomaintenanceid}/Exchange</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Exchange Program Traded Portfolio Maintenance Function

  **Documentation**

  This API path allows users to update a specific program traded portfolio maintenance function related to program trading. Program trading involves making trading decisions based on predefined rules and policies, with the option for manual oversight and monitoring. By using this API, users can exchange information or make changes to the program traded portfolio maintenance function, ensuring that the program trading operations are updated and managed effectively.

  **Limitations**

  PUT: The name of the path following REST best practices could be something like:

/programs/{programtradingid}/traded-portfolios/{programtradedportfoliomaintenanceid}/exchange

Using lowercase letters, hyphens to separate words, and including only nouns in the path can help make it more easily understandable and consistent with REST conventions.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProgramTrading/{programtradingid}/ProgramTradeExecution/{programtradeexecutionid}/Execute</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Execute Program Trade Execution Function

  **Documentation**

  This API path allows users to update and execute a program trade execution within a program trading service. Program trading involves making trading decisions based on pre-set rules and policies. Users can oversee and monitor the execution of the program trade manually as needed. By utilizing this API, users can trigger the execution of a specific program trade within the program trading service identified by the "programtradingid" and "programtradeexecutionid".

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be:
'/program-trading/{programtradingid}/program-trade-execution/{programtradeexecutionid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProgramTrading/{programtradingid}/ProgramTradedPortfolioAlgorithm/{programtradedportfolioalgorithmid}/Execute</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Execute Program Traded Portfolio Algorithm Function

  **Documentation**

  This API path allows you to update or execute a program traded portfolio algorithm within a program trading service domain. It enables the execution of trading decisions based on predefined rules and policies that are programmed into the system. Additionally, it supports manual oversight and monitoring functionalities as needed for managing program trading activities.

  **Limitations**

  PUT: Based on RESTful best practices, the name of the path could be:

/programs/{programtradingid}/portfolio-algorithms/{programtradedportfolioalgorithmid}/execute

This path follows the guidelines of using lowercase letters, using plural nouns for collections (e.g., programs, portfolio-algorithms), and using hyphens to separate words.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProgramTrading/{programtradingid}/ProgramTradedPortfolioMaintenance/{programtradedportfoliomaintenanceid}/Execute</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Execute Program Traded Portfolio Maintenance Function

  **Documentation**

  This API path allows you to update an existing resource related to program trading. Specifically, it supports the execution of program traded portfolio maintenance functions by providing the ability to execute a specific action tied to a program traded portfolio maintenance ID within the context of a program trading ID. This means that you can perform tasks, such as maintenance or updates, on program traded portfolios that are governed by programmed rules and policies, with manual oversight and monitoring capabilities available as needed.

  **Limitations**

  PUT: Following REST best practices, a suitable name for this path could be:

```
/program-trading/{programTradingId}/program-traded-portfolio-maintenance/{programTradedPortfolioMaintenanceId}/execute
``` 

Remember to use lowercase letters, hyphens to separate words, and indicative resource names for more readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProgramTrading/{programtradingid}/ProgramTradeExecution/Initiate</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Initiate Program Trade Execution Function

  **Documentation**

  This API path allows you to initiate the execution of a program trade based on predefined rules and policies. Program trading involves making trading decisions based on automated rules or programs rather than manual decisions. This API supports the initiation of executing a program trade, which can help automate trading processes while still allowing for manual oversight and monitoring as needed.

  **Limitations**

  POST: Following REST best practices, the name of the path should be:

```
/program-trading/{programtradingid}/program-trade-execution/initiate
``` 

In this path name:
- The words are in lowercase.
- Words are separated by dashes.
- The resource names are in singular form.
- The path is hierarchical and descriptive, indicating the relationship between resources.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProgramTrading/{programtradingid}/ProgramTradedPortfolioAlgorithm/Initiate</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Initiate Program Traded Portfolio Algorithm Function

  **Documentation**

  This BIAN API path allows the initiation of a program traded portfolio algorithm function within the program trading service domain. It enables the creation of a new resource where trading decisions are made based on predefined rules and policies. This function supports automated trading based on programmed algorithms, with manual oversight and monitoring capabilities available as needed.

  **Limitations**

  POST: Based on REST best practices, the name of the path should emphasize the resource being acted upon rather than the action itself. For the path '/ProgramTrading/{programtradingid}/ProgramTradedPortfolioAlgorithm/Initiate', a more suitable name could be:

'/ProgramTradedPortfolioAlgorithms/{programtradingid}/Initiate'

This naming convention reflects that we are initiating a specific program traded portfolio algorithm associated with a program trading ID.

</details>

<details open>
  <summary><span style='color:red;'>POST: /ProgramTrading/{programtradingid}/ProgramTradedPortfolioMaintenance/Initiate</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Initiate Program Traded Portfolio Maintenance Function

  **Documentation**

  This API path allows users to initiate the program traded portfolio maintenance function for a specific program trading ID. Essentially, it enables users to create a new resource for managing program trading activities based on predefined rules and policies. This function supports automated trading decisions as well as manual oversight and monitoring capabilities when needed.

  **Limitations**

  POST: The name of the path should be: 

```
/program-trading/{programTradingId}/program-traded-portfolio-maintenance/initiate
```

Make sure to use lowercase letters and hyphens to separate words for better readability and adherence to REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProgramTrading/{programtradingid}/ProgramTradeExecution/{programtradeexecutionid}/Notify</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Notify Program Trade Execution Function

  **Documentation**

  This API path allows you to retrieve information about a specific program trade execution within a program trading system. It supports a program trading capability where trading decisions are made based on predefined rules. It also allows for manual oversight and monitoring of the trading process. The "Notify" function in this API path likely sends notifications or alerts related to the program trade execution.

  **Limitations**

  GET: Based on REST best practices, the path should be named as follows:

/program-trading/{programTradingId}/program-trade-execution/{programTradeExecutionId}/notify

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProgramTrading/{programtradingid}/ProgramTradedPortfolioAlgorithm/{programtradedportfolioalgorithmid}/Notify</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Notify Program Traded Portfolio Algorithm Function

  **Documentation**

  This API path "/ProgramTrading/{programtradingid}/ProgramTradedPortfolioAlgorithm/{programtradedportfolioalgorithmid}/Notify" is used to retrieve information about notifying a specific program traded portfolio algorithm within the program trading system. In simpler terms, it allows you to get details about how a specific trading algorithm is being notified or alerted within the program trading setup.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:
/programs/{programtradingid}/algorithms/{programtradedportfolioalgorithmid}/notify

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProgramTrading/{programtradingid}/ProgramTradedPortfolioMaintenance/{programtradedportfoliomaintenanceid}/Notify</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Notify Program Traded Portfolio Maintenance Function

  **Documentation**

  This API path allows you to retrieve information about notifying a function related to program trading and portfolio maintenance. In simpler terms, it provides access to a service that supports program trading actions, which involve making trading decisions based on preset rules and policies. Additionally, manual oversight and monitoring features are available, ensuring the trading process is supervised when necessary.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be as follows: 

'/program-trading/{programTradingId}/program-traded-portfolio-maintenance/{programTradedPortfolioMaintenanceId}/notify'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProgramTrading/{programtradingid}/ProgramTradeExecution/{programtradeexecutionid}/Request</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Request Program Trade Execution Function

  **Documentation**

  This API path allows you to update an existing program trade execution request in the Program Trading service domain. Program trading involves making trading decisions based on predefined rules and policies. This specific function allows you to request the execution of a program trade within the designated program trading ID and program trade execution ID. It supports manual oversight and monitoring capabilities, ensuring that trading activities are conducted according to the specified rules and policies.

  **Limitations**

  PUT: Following RESTful best practices, the name of the path should be:

/program-trading/{programtradingid}/program-trade-executions/{programtradeexecutionid}/request

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProgramTrading/{programtradingid}/ProgramTradedPortfolioAlgorithm/{programtradedportfolioalgorithmid}/Request</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Request Program Traded Portfolio Algorithm Function

  **Documentation**

  This API path allows you to update an existing program traded portfolio algorithm within a program trading service domain. It supports the implementation of trading decisions based on predefined rules and policies set in the program. Manual oversight and monitoring features are also available as needed.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should reflect the resource being accessed. It should be noun-based and use lowercase letters with words separated by hyphens. 

A possible name for the path could be:

`/program-trading/{programtradingid}/portfolio-algorithm/{programtradedportfolioalgorithmid}/requests`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProgramTrading/{programtradingid}/ProgramTradedPortfolioMaintenance/{programtradedportfoliomaintenanceid}/Request</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Request Program Traded Portfolio Maintenance Function

  **Documentation**

  This API path allows you to update a specific program traded portfolio maintenance function within a program trading service. Program trading involves automated trading decisions based on predefined rules and policies. This API supports the ability to make changes or updates to the program traded portfolio maintenance function, with manual oversight and monitoring capabilities as needed.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should ideally be:

/program-trading/{program-trading-id}/program-traded-portfolio-maintenance/{program-traded-portfolio-maintenance-id}/request

Remember that in RESTful APIs, it is recommended to use lowercase letters and hyphens to separate words in the URL path for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProgramTrading/{programtradingid}/ProgramTradeExecution/{programtradeexecutionid}/Retrieve</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Retrieve Program Trade Execution Function

  **Documentation**

  This API path allows you to retrieve information about a specific program trade execution within the program trading functionality. Program trading involves making trading decisions based on predetermined rules and policies without human intervention. With this API, you can access details about a particular program trade execution, including any manual oversight and monitoring that has been implemented.

  **Limitations**

  GET: Based on REST best practices, the recommended naming for the path would be:

/programs/{programtradingid}/executions/{programtradeexecutionid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProgramTrading/{programtradingid}/ProgramTradedPortfolioAlgorithm/{programtradedportfolioalgorithmid}/Retrieve</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Retrieve Program Traded Portfolio Algorithm Function

  **Documentation**

  This API path allows you to retrieve information about a specific program traded portfolio algorithm within the program trading service domain. The algorithm represents the rules and policies that guide trading decisions in program trading. By using this API, you can access details about the algorithm to understand how trading decisions are made within the program trading system.

  **Limitations**

  GET: Based on REST best practices, a potential name for the path could be:

```
/program-trading/{programTradingId}/traded-portfolios/{programTradedPortfolioAlgorithmId}
```

</details>

<details open>
  <summary><span style='color:red;'>GET: /ProgramTrading/{programtradingid}/ProgramTradedPortfolioMaintenance/{programtradedportfoliomaintenanceid}/Retrieve</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Retrieve Program Traded Portfolio Maintenance Function

  **Documentation**

  This API path allows you to retrieve information about program traded portfolio maintenance within the Program Trading service domain. It enables you to access details related to a specific program trading ID and program traded portfolio maintenance ID, giving you insights into the trading decisions made based on predefined rules and policies. Additionally, it supports manual oversight and monitoring capabilities as needed.

  **Limitations**

  GET: The name of the path should be:

GET /program-trading/{programtradingid}/program-traded-portfolio-maintenance/{programtradedportfoliomaintenanceid}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProgramTrading/{programtradingid}/ProgramTradeExecution/{programtradeexecutionid}/Update</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Update Program Trade Execution Function

  **Documentation**

  This API path allows you to update a specific program trade execution within a program trading system. Program trading involves making trading decisions based on predefined rules and policies programmed into the system. With this API, you can modify the details or parameters of a particular program trade execution. This capability includes manual oversight and monitoring features to ensure the trading activities align with the intended rules and policies.

  **Limitations**

  PUT: A suitable name for the path could be:

/program-trading/{programTradingId}/program-trade-execution/{programTradeExecutionId}

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProgramTrading/{programtradingid}/ProgramTradedPortfolioAlgorithm/{programtradedportfolioalgorithmid}/Update</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Update Program Traded Portfolio Algorithm Function

  **Documentation**

  This BIAN API path allows you to update the algorithm function used in a program traded portfolio within the Program Trading service domain. Program trading involves making trading decisions based on predefined rules and policies. By using this API, you can modify the algorithm function that guides how the program traded portfolio is managed. It also mentions that manual oversight and monitoring capabilities are available as needed, indicating that human supervision is still involved in the trading process.

  **Limitations**

  PUT: Following REST best practices, the name of the path should be something like:

`/program-trading/{programtradingId}/program-traded-portfolio-algorithms/{programtradedportfolioalgorithmId}`

For the update operation in REST, the HTTP method `PUT` is typically used, so the complete path would be:

`PUT /program-trading/{programtradingId}/program-traded-portfolio-algorithms/{programtradedportfolioalgorithmId}`

This naming convention is using lowercase

</details>

<details open>
  <summary><span style='color:red;'>PUT: /ProgramTrading/{programtradingid}/ProgramTradedPortfolioMaintenance/{programtradedportfoliomaintenanceid}/Update</span></summary>

  **Description**

  This Service Domain supports a program trading capability where the trading decisions are made based on predefined/programmed rules and policies. Manual oversight and monitoring capabilities are supported as appropriate Update Program Traded Portfolio Maintenance Function

  **Documentation**

  This API path allows users to update an existing resource related to program trading. Specifically, it pertains to Program Traded Portfolio Maintenance, where the trading decisions are automated based on predefined rules and policies. The update function enables users to make changes to the program trading portfolio maintenance for a specific program trading ID and portfolio maintenance ID. This ensures that manual oversight and monitoring capabilities are supported as needed, allowing for efficient management of program trading activities.

  **Limitations**

  PUT: Based on REST best practices, a more appropriate name for the path '/ProgramTrading/{programtradingid}/ProgramTradedPortfolioMaintenance/{programtradedportfoliomaintenanceid}/Update' could be:

PUT /program-trading/{programtradingid}/portfolio-maintenance/{programtradedportfoliomaintenanceid}

This new path follows the HTTP PUT method to update an existing resource specified by the program trading and program traded portfolio maintenance identifiers. The use of lowercase letters, hyphens

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
