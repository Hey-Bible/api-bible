# .SearchApi

All URIs are relative to *https://api.scripture.api.bible*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchBible**](SearchApi.md#searchBible) | **GET** /v1/bibles/{bibleId}/search | 


# **searchBible**
> SearchBible200Response searchBible()

Gets search results for a given `bibleId` and query string.  Searches will match all verses with the list of keywords provided in the query string. Order of the keywords does not matter. However all keywords must be present in a verse for it to be considered a match. The total number of results returned from a search can be limited by populating the `limit` attribute in the query string with a non-negative integer value.  If no limit value is provide a default of 10 is used. `offset` can be used to traverse paginated results.  So for example if you are using the default `limit` of 10, using an `offset` of 10 will return the second page of results, namely results 11-20. The `text` property of each verse object contains only the verse text.  It does not contain footnote references. However, those can be queried directly using the `/bibles/{bibleId}/verses/{verseId}` endpoint. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SearchApi(configuration);

let body:.SearchApiSearchBibleRequest = {
  // string | Id of Bible to search
  bibleId: "bibleId_example",
  // string | Search keywords or passage reference.  Supported wildcards are * and ?.   The * wildcard matches any character sequence (e.g. searching for \"wo*d\" finds text such as \"word\", \"world\", and \"worshipped\").   The ? wildcard matches any matches any single character (e.g. searching for \"l?ve\" finds text such as \"live\" and \"love\").  (optional)
  query: "query_example",
  // number | Integer limit for how many matching results to return. Default is 10. (optional)
  limit: 1,
  // number | Offset for search results. Used to paginate results (optional)
  offset: 1,
  // 'relevance' | 'canonical' | 'reverse-canonical' | Sort order of results.  Supported values are `relevance` (default), `canonical` and `reverse-canonical` (optional)
  sort: "relevance",
  // string | One or more, comma seperated, passage ids (book, chapter, verse) which the search will be limited to.  (i.e. gen.1,gen.5 or gen-num or gen.1.1-gen.3.5)  (optional)
  range: "range_example",
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
 **bibleId** | [**string**] | Id of Bible to search | defaults to undefined
 **query** | [**string**] | Search keywords or passage reference.  Supported wildcards are * and ?.   The * wildcard matches any character sequence (e.g. searching for \&quot;wo*d\&quot; finds text such as \&quot;word\&quot;, \&quot;world\&quot;, and \&quot;worshipped\&quot;).   The ? wildcard matches any matches any single character (e.g. searching for \&quot;l?ve\&quot; finds text such as \&quot;live\&quot; and \&quot;love\&quot;).  | (optional) defaults to undefined
 **limit** | [**number**] | Integer limit for how many matching results to return. Default is 10. | (optional) defaults to undefined
 **offset** | [**number**] | Offset for search results. Used to paginate results | (optional) defaults to undefined
 **sort** | [**&#39;relevance&#39; | &#39;canonical&#39; | &#39;reverse-canonical&#39;**]**Array<&#39;relevance&#39; &#124; &#39;canonical&#39; &#124; &#39;reverse-canonical&#39;>** | Sort order of results.  Supported values are &#x60;relevance&#x60; (default), &#x60;canonical&#x60; and &#x60;reverse-canonical&#x60; | (optional) defaults to 'relevance'
 **range** | [**string**] | One or more, comma seperated, passage ids (book, chapter, verse) which the search will be limited to.  (i.e. gen.1,gen.5 or gen-num or gen.1.1-gen.3.5)  | (optional) defaults to undefined
 **fuzziness** | [**&#39;AUTO&#39; | &#39;0&#39; | &#39;1&#39; | &#39;2&#39;**]**Array<&#39;AUTO&#39; &#124; &#39;0&#39; &#124; &#39;1&#39; &#124; &#39;2&#39;>** | Sets the fuzziness of a search to account for misspellings. Values can be 0, 1, 2, or AUTO. Defaults to AUTO which varies depending on the  | (optional) defaults to undefined


### Return type

**SearchBible200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Invalid ID supplied |  -  |
**401** | Unauthorized for API access.  Missing or Invalid API Token provided. |  -  |
**403** | Not authorized to retrieve Sections for this Bible |  -  |
**404** | Section not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


