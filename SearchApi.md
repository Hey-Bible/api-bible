# .SearchApi

All URIs are relative to *https://rest.api.bible/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchBible**](SearchApi.md#searchBible) | **GET** /bibles/{bibleId}/search | Search a Bible


# **searchBible**
> SearchBible200Response searchBible()

A search will attempt to match all verses with the list of keywords provided in the query string. The order of the keywords does not matter, however _all listed keywords must be present in a verse for it to be considered a match_.  Wildcard searches are supported, and can be used to match partial results:  | Wildcard | Description                    | Example                                                      | | -------- | ------------------------------ | ------------------------------------------------------------ | | `*`      | Matches any character sequence | \"wo\\*d\" finds text such as \"word\", \"world\", and \"worshipped\" | | `?`      | Matches any single character   | \"l?ve\" finds text such as \"live\" and \"love\"                  |  The `text` property of each search result contains only the verse text, it does not contain footnote references or additional formatting. However, more information on a verse can be queried directly by [fetching a single verse](https://docs.api.bible/guides/verses#fetching-a-single-verse). 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SearchApi(configuration);

let body:.SearchApiSearchBibleRequest = {
  // string | The ID of the Bible you are looking to fetch
  bibleId: "65eec8e0b60e656b-01",
  // string | Comma-separated search keywords or a passage reference. Supported wildcards are `*` and `?`. The `*` wildcard matches any character sequence (e.g. searching for \"wo*d\" finds text such as \"word\", \"world\", and \"worshipped\"). The `?` wildcard matches any matches any single character (e.g. searching for \"l?ve\" finds text such as \"live\" and \"love\"). (optional)
  query: "love,world",
  // number | Limits the number of search results returned. Used with the `offset` parameter to paginate results. (optional)
  limit: 10,
  // number | Offsets results by the given amount. Used with the `limit` parameter to paginate results. (optional)
  offset: 0,
  // 'relevance' | 'canonical' | 'reverse-canonical' | Sorts search results (optional)
  sort: "relevance",
  // string | Comma-separated list of Passage IDs which the search will be limited to.  (optional)
  range: "GEN.1.1-EXO.1.1",
  // 'AUTO' | '0' | '1' | '2' | Sets the fuzziness of a search to account for misspellings. Values can be 0, 1, 2, or AUTO. Defaults to AUTO which varies depending on the  (optional)
  fuzziness: "AUTO",
};

apiInstance.searchBible(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bibleId** | [**string**] | The ID of the Bible you are looking to fetch | defaults to undefined
 **query** | [**string**] | Comma-separated search keywords or a passage reference. Supported wildcards are &#x60;*&#x60; and &#x60;?&#x60;. The &#x60;*&#x60; wildcard matches any character sequence (e.g. searching for \&quot;wo*d\&quot; finds text such as \&quot;word\&quot;, \&quot;world\&quot;, and \&quot;worshipped\&quot;). The &#x60;?&#x60; wildcard matches any matches any single character (e.g. searching for \&quot;l?ve\&quot; finds text such as \&quot;live\&quot; and \&quot;love\&quot;). | (optional) defaults to undefined
 **limit** | [**number**] | Limits the number of search results returned. Used with the &#x60;offset&#x60; parameter to paginate results. | (optional) defaults to 10
 **offset** | [**number**] | Offsets results by the given amount. Used with the &#x60;limit&#x60; parameter to paginate results. | (optional) defaults to 0
 **sort** | [**&#39;relevance&#39; | &#39;canonical&#39; | &#39;reverse-canonical&#39;**]**Array<&#39;relevance&#39; &#124; &#39;canonical&#39; &#124; &#39;reverse-canonical&#39;>** | Sorts search results | (optional) defaults to 'relevance'
 **range** | [**string**] | Comma-separated list of Passage IDs which the search will be limited to.  | (optional) defaults to undefined
 **fuzziness** | [**&#39;AUTO&#39; | &#39;0&#39; | &#39;1&#39; | &#39;2&#39;**]**Array<&#39;AUTO&#39; &#124; &#39;0&#39; &#124; &#39;1&#39; &#124; &#39;2&#39;>** | Sets the fuzziness of a search to account for misspellings. Values can be 0, 1, 2, or AUTO. Defaults to AUTO which varies depending on the  | (optional) defaults to undefined


### Return type

**SearchBible200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ##### OK |  -  |
**400** | #### Bad Request     Invalid Bible ID supplied |  -  |
**401** | #### Unauthorized    Missing or Invalid API Token provided. |  -  |
**403** | #### Forbidden    Not authorized to access this Bible |  -  |
**404** | #### Not Found    Unable to find a section with the given &#x60;{sectionId}&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


