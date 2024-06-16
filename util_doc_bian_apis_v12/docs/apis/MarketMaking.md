---
id: MarketMaking
title: MarketMaking
---

<h1 style='color:red;'>MarketMaking</h1>

**BIAN Documentation:** [MarketMaking v12](https://app.swaggerhub.com/apis/BIAN-3/MarketMaking/12.0.0)

<details open>
  <summary><span style='color:red;'>PUT: /MarketMaking/{marketmakingid}/Control</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Control Market Making Facility

  **Documentation**

  This API path allows a bank to update and control its market making activities within a trading exchange. It involves managing buy and sell quotes for supported securities, and accepting buy and sell orders as requested. The bank can use this endpoint to adjust its market making operations and maintain updated information related to buy and sell quotes for the securities it deals with.

  **Limitations**

  PUT: The RESTful path '/MarketMaking/{marketmakingid}/Control' can be named using a noun that accurately describes the resource being accessed. In this case, the name for the path could be '/MarketMakers/{marketmakingid}/Controls'. This name is more standardized, descriptive, and in line with RESTful best practices.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketMaking/{marketmakingid}/Exchange</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Exchange Market Making Facility

  **Documentation**

  This BIAN API path allows the bank to update its market making activities in collaboration with a trading exchange. It enables the bank to maintain buying and selling quotes for supported securities as a market maker. The bank can also accept buy and sell orders upon request through the Exchange Market Making Facility.

  **Limitations**

  PUT: It is recommended to use a consistent and meaningful naming convention for RESTful APIs. In this case, the following could be a suitable name for the path:

```
/MarketMaking/{marketmakingId}/Exchange
```

This path reflects a hierarchical structure where a particular "MarketMaking" resource identified by "marketmakingId" may have an "Exchange" sub-resource. Using camelCase for parameter names is a common practice in REST APIs.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketMaking/{marketmakingid}/Execute</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Execute Market Making Facility

  **Documentation**

  This API path allows the bank to update and execute market making activities for a specific market maker identified by 'marketmakingid'. Market making involves the bank maintaining buy and sell quotes for securities it supports and accepting buy/sell orders upon request through collaboration with a trading exchange. By using this API, the bank can facilitate its market making function efficiently within the financial ecosystem.

  **Limitations**

  PUT: A RESTful name for this path could be:

```
/MarketMaking/{marketmakingid}/Execution
```

</details>

<details open>
  <summary><span style='color:red;'>POST: /MarketMaking/Initiate</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Initiate Market Making Facility

  **Documentation**

  This API path allows a bank to establish a market making facility. Market making involves the bank maintaining both buy and sell prices for specific securities it supports. Through this API, the bank can create a new resource for initiating market making activities, typically in partnership with a trading exchange. The bank can accept buy and sell orders for the specified securities and facilitate trading activities as a market maker.

  **Limitations**

  POST: The name of the path '/MarketMaking/Initiate' could be updated to align with REST best practices by simplifying it to '/marketMaking'. This path should be used to initiate a new market-making activity. Remember to use lowercase letters and hyphens to separate words for better readability and adherence to REST conventions.

</details>

<details open>
  <summary><span style='color:red;'>GET: /MarketMaking/{marketmakingid}/Notify</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Notify Market Making Facility

  **Documentation**

  This API path allows the bank to retrieve information about the market making process using a specific ID associated with market making. It enables the bank to collaborate with a trading exchange to maintain buy and sell quotes for securities it supports. Additionally, it allows the bank to accept buy and sell orders upon request through the Notify Market Making Facility.

  **Limitations**

  GET: Based on REST best practices, the name of the path for '/MarketMaking/{marketmakingid}/Notify' should simply be:

'/marketmaking/{marketmakingid}/notify'

Note that all lowercase letters and hyphens (instead of camel case or underscores) are typically used in RESTful URLs for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketMaking/{marketmakingid}/Request</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Request Market Making Facility

  **Documentation**

  This API path allows a bank to update a specific market making facility identified by its unique ID. The bank uses this service to perform market making activities in collaboration with a trading exchange. Market making involves the bank providing buying and selling prices for certain securities and accepting buy and sell orders from customers upon request.

  **Limitations**

  PUT: The name of the path could be "/marketmaking/{marketmakingid}/requests" following REST best practices.

</details>

<details open>
  <summary><span style='color:red;'>GET: /MarketMaking/{marketmakingid}/Retrieve</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Retrieve Market Making Facility

  **Documentation**

  This API path allows you to retrieve information about a specific Market Making facility identified by "marketmakingid". It enables the bank to carry out its market making activities, which involve maintaining buy/sell quotes for supported securities as a market maker. By using this API, the bank can access details about the market making facility and handle buy/sell orders as required.

  **Limitations**

  GET: Following REST best practices, the name of the path should be:  
`/market-making/{marketmakingid}`

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketMaking/{marketmakingid}/Update</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Update Market Making Facility

  **Documentation**

  This API path allows the bank to update a specific market making facility identified by a unique ID. Market making is a function where the bank provides buy and sell quotes for securities it supports, acting as a market maker. By using this API, the bank can make changes or updates to its market making facility, which involves collaborating with a trading exchange and accepting buy/sell orders for the supported securities.

  **Limitations**

  PUT: The name of the path should be:

```
PUT /market-making/{marketmakingid}
``` 

This path reflects the best practices of using lowercase letters, hyphens for readability, and using the appropriate HTTP method for updating a resource.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketMaking/{marketmakingid}/MarketMakingBuyandSellOrder/{marketmakingbuyandsellorderid}/Exchange</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Exchange Market Making Buy and Sell Order Fulfillment

  **Documentation**

  This API path allows the bank to update the fulfillment of buy and sell orders related to market making activities. It involves maintaining buy/sell quotes for specific securities as a market maker and executing buy/sell orders in collaboration with a trading exchange. The PUT method is used to update existing resources, ensuring that the market making function operates smoothly and efficiently.

  **Limitations**

  PUT: The name of the path following REST best practices could be:

'/market-making/{marketmakingid}/orders/{marketmakingbuyandsellorderid}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketMaking/{marketmakingid}/MarketMakingQuote/{marketmakingquoteid}/Exchange</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Exchange Market Making Quote Fulfillment

  **Documentation**

  This BIAN API path allows the bank to update and fulfill market making quotes for specific securities in collaboration with a trading exchange. The bank, acting as a market maker, maintains buy/sell quotes for the supported securities and processes buy/sell orders upon request. This API facilitates the exchange of securities based on market making activities between the bank and the trading exchange.

  **Limitations**

  PUT: Based on RESTful best practices, the name of the path you provided should be something like:
'/marketmaking/{marketmakingId}/marketmakingquote/{marketmakingQuoteId}/exchange'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketMaking/{marketmakingid}/MarketMakingSecurityTradedPosition/{marketmakingsecuritytradedpositionid}/Exchange</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Exchange Market Making Security Traded Position Fulfillment

  **Documentation**

  This API path allows the bank to update and manage the market making service it provides in collaboration with a trading exchange. Through this service, the bank maintains buy and sell quotes for specific securities that it supports as a market maker. It also enables the bank to accept buy and sell orders upon request for fulfilling its market making obligations related to security trades on the exchange platform.

  **Limitations**

  PUT: The name of the path should be:

'/market-making/{marketmakingid}/market-making-security-traded-position/{marketmakingsecuritytradedpositionid}/exchange' 

Following REST best practices, it is recommended to use lowercase letters and hyphens to separate words in the path for better readability and consistency.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketMaking/{marketmakingid}/MarketMakingBuyandSellOrder/{marketmakingbuyandsellorderid}/Execute</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Execute Market Making Buy and Sell Order Fulfillment

  **Documentation**

  This API path allows the bank to execute buy and sell orders for a specific market making activity identified by the {marketmakingid}. It enables the bank to fulfill its role as a market maker in collaboration with a trading exchange by maintaining buy/sell quotes for securities and accepting buy/sell orders upon request. The PUT method is used to update an existing resource related to executing market making buy and sell orders for a particular {marketmakingbuyandsellorderid}.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

/MarketMaking/{marketmakingid}/MarketMakingBuyandSellOrders/{marketmakingbuyandsellorderid}/Execute

Keep in mind that it's recommended to use plural nouns for collections, so "Orders" is used instead of "Order" in the path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketMaking/{marketmakingid}/MarketMakingQuote/{marketmakingquoteid}/Execute</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Execute Market Making Quote Fulfillment

  **Documentation**

  This API path allows a bank to fulfill its market making function in cooperation with a trading exchange. Specifically, it pertains to updating or executing a buying or selling quote for securities that the bank supports as a market maker. It enables the bank to accept buy or sell orders upon request to fulfill the market making quote.

  **Limitations**

  PUT: Based on REST best practices, the name of the path could be:  
"/market-makings/{marketmakingid}/quotes/{marketmakingquoteid}/execute"

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketMaking/{marketmakingid}/MarketMakingSecurityTradedPosition/{marketmakingsecuritytradedpositionid}/Execute</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Execute Market Making Security Traded Position Fulfillment

  **Documentation**

  This BIAN API path allows the bank, acting as a market maker in collaboration with a trading exchange, to update and fulfill the market making function for a specific security traded position. It involves maintaining buy/sell quotes for securities, accepting buy/sell orders, and executing the necessary actions to fulfill the market making obligations for that particular security.

  **Limitations**

  PUT: A suitable name for the path '/MarketMaking/{marketmakingid}/MarketMakingSecurityTradedPosition/{marketmakingsecuritytradedpositionid}/Execute' following REST best practices would be:

'/market-making/{marketmakingid}/security-traded-positions/{marketmakingsecuritytradedpositionid}/execute'

</details>

<details open>
  <summary><span style='color:red;'>POST: /MarketMaking/{marketmakingid}/MarketMakingBuyandSellOrder/Initiate</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Initiate Market Making Buy and Sell Order Fulfillment

  **Documentation**

  This API path allows a bank to initiate and fulfill market making buy and sell orders for securities it supports as a market maker. The bank maintains buy/sell quotes and collaborates with a trading exchange to accept and execute buy/sell orders upon request.

  **Limitations**

  POST: Based on REST best practices, the name of the path '/MarketMaking/{marketmakingid}/MarketMakingBuyandSellOrder/Initiate' could be rewritten as:

'/market-making/{marketmakingid}/buy-sell-order/initiate'

</details>

<details open>
  <summary><span style='color:red;'>POST: /MarketMaking/{marketmakingid}/MarketMakingQuote/Initiate</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Initiate Market Making Quote Fulfillment

  **Documentation**

  This API path is used to create a new resource for initiating market making quote fulfillment within a banking service domain. In simpler terms, it enables the bank to carry out its market making function in partnership with a trading exchange. The bank sets and maintains buying and selling prices for securities it supports as a market maker, and it accepts buying and selling orders upon request. This API path specifically focuses on the initiation of the process for fulfilling market making quotes.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

`POST /market-making/{marketmakingid}/quotes/initiate`

</details>

<details open>
  <summary><span style='color:red;'>POST: /MarketMaking/{marketmakingid}/MarketMakingSecurityTradedPosition/Initiate</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Initiate Market Making Security Traded Position Fulfillment

  **Documentation**

  This API path is used to initiate the fulfillment of market making activities by a bank in collaboration with a trading exchange. Essentially, it allows the bank to maintain buy and sell quotes for the securities it supports as a market maker, and accept buy and sell orders upon request to fulfill the market making position for those securities.

  **Limitations**

  POST: Based on REST best practices, the name of the path should be:

/MarketMaking/{marketmakingid}/market-making-security-traded-position/initiate

</details>

<details open>
  <summary><span style='color:red;'>GET: /MarketMaking/{marketmakingid}/MarketMakingBuyandSellOrder/{marketmakingbuyandsellorderid}/Notify</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Notify Market Making Buy and Sell Order Fulfillment

  **Documentation**

  This API path allows users to retrieve information related to the fulfillment of buy and sell orders within the Market Making service domain of a bank. Market making involves the bank setting buy and sell quotes for specific securities and facilitating trades on behalf of clients. By accessing this path, users can receive details about the fulfillment status of specific buy and sell orders processed within the market making function.

  **Limitations**

  GET: The name of the path should be:

'/market-making/{marketmakingid}/market-making-buy-and-sell-order/{marketmakingbuyandsellorderid}/notify'

Following REST best practices, it is recommended to use all lowercase letters, separate words with hyphens, and avoid using camel case in URLs.

</details>

<details open>
  <summary><span style='color:red;'>GET: /MarketMaking/{marketmakingid}/MarketMakingQuote/{marketmakingquoteid}/Notify</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Notify Market Making Quote Fulfillment

  **Documentation**

  This API path retrieves information related to notifying the fulfillment of a market making quote within a specific market making service. The bank, acting as a market maker in collaboration with a trading exchange, establishes buying and selling prices for supported securities. When a buy or sell order is placed and fulfilled, this API allows accessing details about the market making quote fulfillment process for a specific market making quote ID.

  **Limitations**

  GET: The path should be named as follows:

/MarketMaking/{marketmakingid}/MarketMakingQuote/{marketmakingquoteid}/Notify

Following REST best practices, the path should be named based on the resource it is interacting with and the action being performed. In this case, the path is interacting with a specific market making quote resource and notifying it.

</details>

<details open>
  <summary><span style='color:red;'>GET: /MarketMaking/{marketmakingid}/MarketMakingSecurityTradedPosition/{marketmakingsecuritytradedpositionid}/Notify</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Notify Market Making Security Traded Position Fulfillment

  **Documentation**

  This API path is used to retrieve information about a specific market making security traded position notification associated with a particular market making activity. It enables the bank to fulfill its market making function by interacting with a trading exchange. The bank, acting as a market maker, maintains buy/sell quotes for securities and accepts buy/sell orders upon request. This API allows the bank to notify or retrieve information related to the fulfillment of a specific security traded position within the market making activity.

  **Limitations**

  GET: The appropriate name for the path would be:

'/market-making/{marketmakingid}/security-traded-positions/{marketmakingsecuritytradedpositionid}/notify'

Following REST best practices, the path should be in all lowercase letters, separated by hyphens, and should use plural nouns wherever possible.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketMaking/{marketmakingid}/MarketMakingBuyandSellOrder/{marketmakingbuyandsellorderid}/Request</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Request Market Making Buy and Sell Order Fulfillment

  **Documentation**

  This API path allows the bank to update and fulfill buy and sell orders for securities as a market maker within a specific market making context. It involves maintaining quotes for securities and executing buy/sell orders upon request in collaboration with a trading exchange.

  **Limitations**

  PUT: A possible name for the path '/MarketMaking/{marketmakingid}/MarketMakingBuyandSellOrder/{marketmakingbuyandsellorderid}/Request' following REST best practices could be:

'/markets/{marketId}/orders/{orderId}/request'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketMaking/{marketmakingid}/MarketMakingQuote/{marketmakingquoteid}/Request</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Request Market Making Quote Fulfillment

  **Documentation**

  This API path allows a bank to update and fulfill requests for market making quotes. In the context of financial trading, market making involves the bank maintaining prices (buy/sell quotes) for specific securities. When a client requests a market making quote fulfillment, this API enables the bank to update and provide the necessary information to facilitate trading activities effectively.

  **Limitations**

  PUT: The name of the path should be:  
'/market-making/{marketmakingid}/quotes/{marketmakingquoteid}/request'  
Following REST best practices, path names should be in lowercase letters, use hyphens to separate words, and resource names should be in plural form.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketMaking/{marketmakingid}/MarketMakingSecurityTradedPosition/{marketmakingsecuritytradedpositionid}/Request</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Request Market Making Security Traded Position Fulfillment

  **Documentation**

  This BIAN API path allows the bank to update a request for fulfilling the market making function for a specific security traded position. The bank, as a market maker, maintains buy/sell quotes for securities it supports and can accept buy/sell orders for those securities upon request. This API facilitates the process of fulfilling market making obligations in collaboration with a trading exchange.

  **Limitations**

  PUT: Based on REST best practices, the name for the path '/MarketMaking/{marketmakingid}/MarketMakingSecurityTradedPosition/{marketmakingsecuritytradedpositionid}/Request' should be:

'/marketmakings/{marketmakingid}/securitytradedpositions/{marketmakingsecuritytradedpositionid}/requests'

</details>

<details open>
  <summary><span style='color:red;'>GET: /MarketMaking/{marketmakingid}/MarketMakingBuyandSellOrder/{marketmakingbuyandsellorderid}/Retrieve</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Retrieve Market Making Buy and Sell Order Fulfillment

  **Documentation**

  This API path allows a bank to retrieve information about fulfilling buy and sell orders related to market making activities. Market making involves the bank maintaining buy and sell quotes for specific securities and accepting orders from customers. By using this API, the bank can access details about specific buy and sell orders that have been fulfilled within the market making process.

  **Limitations**

  GET: The name of the path should be:  
`/market-making/{marketmakingid}/buy-sell-orders/{marketmakingbuyandsellorderid}`

</details>

<details open>
  <summary><span style='color:red;'>GET: /MarketMaking/{marketmakingid}/MarketMakingQuote/{marketmakingquoteid}/Retrieve</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Retrieve Market Making Quote Fulfillment

  **Documentation**

  This API path allows the bank to retrieve information related to a specific market making quote fulfillment. Market making is the practice of providing buy and sell quotes for securities supported by the bank as a market maker. By using this API, the bank can access details about a particular market making quote fulfillment, which helps in maintaining its market making function, especially when working with a trading exchange.

  **Limitations**

  GET: A good name for this path following REST best practices could be:

GET /market-making/{marketmakingid}/quotes/{marketmakingquoteid}

</details>

<details open>
  <summary><span style='color:red;'>GET: /MarketMaking/{marketmakingid}/MarketMakingSecurityTradedPosition/{marketmakingsecuritytradedpositionid}/Retrieve</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Retrieve Market Making Security Traded Position Fulfillment

  **Documentation**

  This API path allows the bank to retrieve information related to fulfilling its market making function in collaboration with a trading exchange. It specifically focuses on retrieving details about the securities traded position within the market making activities. By accessing this endpoint, the bank can view the buy/sell quotes it maintains as a market maker for the supported securities and handle buy/sell orders upon request. In essence, it facilitates the monitoring and management of the bank's market making activities for specific securities.

  **Limitations**

  GET: Based on REST best practices, the name of the path should be:
'/market-making/{marketmakingid}/securities-traded/{marketmakingsecuritytradedpositionid}'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketMaking/{marketmakingid}/MarketMakingBuyandSellOrder/{marketmakingbuyandsellorderid}/Update</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Update Market Making Buy and Sell Order Fulfillment

  **Documentation**

  This API path allows the bank to update the fulfillment of buy and sell orders within the Market Making function. Specifically, it enables the bank, acting as a market maker, to maintain and adjust buy/sell quotes for securities in collaboration with a trading exchange. The bank can accept buy and sell orders upon request and update the fulfillment status of these orders using this API endpoint.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

'/market-making/{marketmakingid}/buy-and-sell-orders/{marketmakingbuyandsellorderid}/update'

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketMaking/{marketmakingid}/MarketMakingQuote/{marketmakingquoteid}/Update</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Update Market Making Quote Fulfillment

  **Documentation**

  This API path allows the bank to update a specific market making quote within the market making service domain. The bank, acting as a market maker, maintains buy and sell quotes for securities and accepts buy and sell orders from customers. By using this API, the bank can update the details of a specific market making quote to accurately reflect current market conditions or other relevant factors. This helps ensure that the quotes provided to customers are up to date and accurate.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```plaintext
/MarketMaking/{marketmakingid}/MarketMakingQuote/{marketmakingquoteid}
```

The endpoint should ideally be a representation of a resource, and the action to update it can be inferred from the HTTP method used (e.g., PUT or PATCH). The action to update the resource would typically be performed by sending a PUT or PATCH request to the above path.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketMaking/{marketmakingid}/MarketMakingSecurityTradedPosition/{marketmakingsecuritytradedpositionid}/Update</span></summary>

  **Description**

  This Service Domain enables the bank to fulfill its market making function typically in collaboration with a trading exchange. The bank maintains a buy/sell quote for the securities it supports as a market maker and accepts buy/sell orders on request Update Market Making Security Traded Position Fulfillment

  **Documentation**

  This BIAN API path allows the bank to update the market making security traded position fulfillment within a specific market making service instance. In simpler terms, it enables the bank to adjust the buy/sell quotes and accept buy/sell orders for the securities it supports as a market maker in collaboration with a trading exchange.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

`/market-making/{marketmakingid}/securities/{marketmakingsecuritytradedpositionid}`

This path structure follows the convention of using lowercase letters and hyphens to separate words in the URI.

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
