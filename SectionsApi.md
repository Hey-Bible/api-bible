# .SectionsApi

All URIs are relative to *https://api.scripture.api.bible*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBookSections**](SectionsApi.md#getBookSections) | **GET** /v1/bibles/{bibleId}/books/{bookId}/sections | 
[**getChapterSections**](SectionsApi.md#getChapterSections) | **GET** /v1/bibles/{bibleId}/chapters/{chapterId}/sections | 
[**getSection**](SectionsApi.md#getSection) | **GET** /v1/bibles/{bibleId}/sections/{sectionId} | 


# **getBookSections**
> GetBookSections200Response getBookSections()

Gets an array of `Section` objects for a given `bibleId` and `bookId` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SectionsApi(configuration);

let body:.SectionsApiGetBookSectionsRequest = {
  // string | Id of Bible whose Sections to fetch
  bibleId: "bibleId_example",
  // string | Id of the Book whose Sections to fetch
  bookId: "bookId_example",
};

apiInstance.getBookSections(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bibleId** | [**string**] | Id of Bible whose Sections to fetch | defaults to undefined
 **bookId** | [**string**] | Id of the Book whose Sections to fetch | defaults to undefined


### Return type

**GetBookSections200Response**

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
**404** | Book not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getChapterSections**
> GetBookSections200Response getChapterSections()

Gets an array of `Section` objects for a given `bibleId` and `chapterId` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SectionsApi(configuration);

let body:.SectionsApiGetChapterSectionsRequest = {
  // string | Id of Bible whose Sections to fetch
  bibleId: "bibleId_example",
  // string | Id of the Chapter whose Sections to fetch
  chapterId: "chapterId_example",
};

apiInstance.getChapterSections(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bibleId** | [**string**] | Id of Bible whose Sections to fetch | defaults to undefined
 **chapterId** | [**string**] | Id of the Chapter whose Sections to fetch | defaults to undefined


### Return type

**GetBookSections200Response**

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
**404** | Book not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSection**
> GetSection200Response getSection()

Gets a single `Section` object for a given `bibleId` and `sectionId`. This Section object also includes an `content` property with all verses for the Section. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SectionsApi(configuration);

let body:.SectionsApiGetSectionRequest = {
  // string | Id of Bible whose Section to fetch
  bibleId: "bibleId_example",
  // string | Id of the Section to fetch
  sectionId: "sectionId_example",
  // 'html' | 'json' | 'text' | Content type to be returned in the content property.  Supported values are `html` (default), `json` (beta), and `text` (beta) (optional)
  contentType: "html",
  // boolean | Include footnotes in content (optional)
  includeNotes: false,
  // boolean | Include section titles in content (optional)
  includeTitles: true,
  // boolean | Include chapter numbers in content (optional)
  includeChapterNumbers: false,
  // boolean | Include verse numbers in content. (optional)
  includeVerseNumbers: true,
  // boolean | Include spans that wrap verse numbers and verse text for bible content. (optional)
  includeVerseSpans: false,
  // string | Comma delimited list of bibleIds to include (optional)
  parallels: "parallels_example",
};

apiInstance.getSection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bibleId** | [**string**] | Id of Bible whose Section to fetch | defaults to undefined
 **sectionId** | [**string**] | Id of the Section to fetch | defaults to undefined
 **contentType** | [**&#39;html&#39; | &#39;json&#39; | &#39;text&#39;**]**Array<&#39;html&#39; &#124; &#39;json&#39; &#124; &#39;text&#39;>** | Content type to be returned in the content property.  Supported values are &#x60;html&#x60; (default), &#x60;json&#x60; (beta), and &#x60;text&#x60; (beta) | (optional) defaults to 'html'
 **includeNotes** | [**boolean**] | Include footnotes in content | (optional) defaults to false
 **includeTitles** | [**boolean**] | Include section titles in content | (optional) defaults to true
 **includeChapterNumbers** | [**boolean**] | Include chapter numbers in content | (optional) defaults to false
 **includeVerseNumbers** | [**boolean**] | Include verse numbers in content. | (optional) defaults to true
 **includeVerseSpans** | [**boolean**] | Include spans that wrap verse numbers and verse text for bible content. | (optional) defaults to false
 **parallels** | [**string**] | Comma delimited list of bibleIds to include | (optional) defaults to undefined


### Return type

**GetSection200Response**

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


