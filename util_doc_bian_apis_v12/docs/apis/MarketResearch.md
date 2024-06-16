---
id: MarketResearch
title: MarketResearch
---

<h1 style='color:red;'>MarketResearch</h1>

**BIAN Documentation:** [MarketResearch v12](https://app.swaggerhub.com/apis/BIAN-3/MarketResearch/12.0.0)

<details open>
  <summary><span style='color:red;'>POST: /MarketResearch/Register</span></summary>

  **Description**

  This service domain handles the capture of market research from multiple external sources. This can include live feeds, analysis and reports in any form. The information is classified/catalogued and stored for retrieval. InCR Register or establish a market research viewpoint

  **Documentation**

  This API path allows users to create and register new market research viewpoints by capturing information from various external sources such as live feeds, analysis, and reports. The collected data is then organized, classified, and stored for easy retrieval. Essentially, it helps in consolidating market research data into a structured format for further analysis and decision-making.

  **Limitations**

  POST: Based on REST best practices, the name of the resource in the path '/MarketResearch/Register' should simply be 'MarketResearch'. The HTTP method POST should be used to register a new resource within the 'MarketResearch' collection.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketResearch/{marketresearchid}/Update</span></summary>

  **Description**

  This service domain handles the capture of market research from multiple external sources. This can include live feeds, analysis and reports in any form. The information is classified/catalogued and stored for retrieval. UpCR Update the details or make-up of a market research viewpoint

  **Documentation**

  This API path allows you to update the details or content of a specific market research entry identified by its unique ID. It is used to modify information related to market research captured from external sources, such as live feeds, analysis, and reports. By sending a PUT request to this path with the relevant market research ID and updated data, you can make changes to the existing market research viewpoint stored in the system.

  **Limitations**

  PUT: Based on REST best practices, the name of the path should be:

```
PUT /MarketResearch/{marketresearchid}
```

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketResearch/{marketresearchid}/Execute</span></summary>

  **Description**

  This service domain handles the capture of market research from multiple external sources. This can include live feeds, analysis and reports in any form. The information is classified/catalogued and stored for retrieval. ExCR Automatically extract details of a maintained market research viewpoint

  **Documentation**

  This API path is used to update an existing market research resource identified by a specific ID. It allows users to execute an automated extraction process that retrieves and updates details related to a specific market research viewpoint. This can include capturing data from various external sources such as live feeds, analysis, and reports, which are then stored and organized for future retrieval.

  **Limitations**

  PUT: The name of the path should be `/market-research/{marketresearchid}/execute` in order to follow REST best practices. This naming convention uses lowercase letters, dashes to separate words, and descriptive resource names.

</details>

<details open>
  <summary><span style='color:red;'>PUT: /MarketResearch/{marketresearchid}/Request</span></summary>

  **Description**

  This service domain handles the capture of market research from multiple external sources. This can include live feeds, analysis and reports in any form. The information is classified/catalogued and stored for retrieval. RqCR Request a viewpoint is refreshed or adjusted in some manner

  **Documentation**

  This BIAN API path allows you to update an existing market research request by refreshing or adjusting a viewpoint. The service domain captures market research data from various sources, such as live feeds, analyses, and reports. The information is organized, stored, and can be easily retrieved when needed. By making a PUT request to this path with the specific market research ID, you can modify or update the requested viewpoint in some way.

  **Limitations**

  PUT: The name of the path should be `/MarketResearch/{marketresearchid}/Requests`, following REST best practices for plural nouns in URIs.

</details>

<details open>
  <summary><span style='color:red;'>GET: /MarketResearch/{marketresearchid}/Retrieve</span></summary>

  **Description**

  This service domain handles the capture of market research from multiple external sources. This can include live feeds, analysis and reports in any form. The information is classified/catalogued and stored for retrieval. ReCR Retrieve details about and the content of a maintained market research viewpoint

  **Documentation**

  This API path allows you to retrieve information and content related to a specific market research viewpoint that is stored within the system. In simpler terms, it lets you access and view the details of a particular market research data or report that has been gathered from different external sources.

  **Limitations**

  GET: The name of the path should be:

/MarketResearch/{marketresearchid}

</details>

> **Disclaimer:** This guide was created with OpenAI and might not be perfect. Enjoy the insights, but double-check important details!
