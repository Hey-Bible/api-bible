# .ChaptersApi

All URIs are relative to *https://api.scripture.api.bible*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAudioChapter**](ChaptersApi.md#getAudioChapter) | **GET** /v1/audio-bibles/{audioBibleId}/chapters/{chapterId} | 
[**getAudioChapters**](ChaptersApi.md#getAudioChapters) | **GET** /v1/audio-bibles/{audioBibleId}/books/{bookId}/chapters | 
[**getChapter**](ChaptersApi.md#getChapter) | **GET** /v1/bibles/{bibleId}/chapters/{chapterId} | 
[**getChapters**](ChaptersApi.md#getChapters) | **GET** /v1/bibles/{bibleId}/books/{bookId}/chapters | 


# **getAudioChapter**
> GetAudioChapter200Response getAudioChapter()

Gets a single `Chapter` object for a given `audioBibleId` and `chapterId`. This AudioChapter object also includes an `resourceUrl` property with a HTTP URL to the mp3 audio resource for the chapter.  The `resourceUrl` is unique per request and expires in XX minutes.  The `expiresAt` property provides the Unix time value of `resourceUrl` expiration. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChaptersApi(configuration);

let body:.ChaptersApiGetAudioChapterRequest = {
  // string | Id of Bible whose Chapter to fetch
  audioBibleId: "audioBibleId_example",
  // string | Id of the Chapter to fetch
  chapterId: "chapterId_example",
};

apiInstance.getAudioChapter(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **audioBibleId** | [**string**] | Id of Bible whose Chapter to fetch | defaults to undefined
 **chapterId** | [**string**] | Id of the Chapter to fetch | defaults to undefined


### Return type

**GetAudioChapter200Response**

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
**403** | Not authorized to retrieve Chapters for this Bible |  -  |
**404** | Chapter not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAudioChapters**
> GetChapters200Response getAudioChapters()

Gets an array of `Chapter` objects for a given `audioBibleId` and `bookId` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChaptersApi(configuration);

let body:.ChaptersApiGetAudioChaptersRequest = {
  // string | Id of Bible whose Chapters to fetch
  audioBibleId: "audioBibleId_example",
  // string | Id of the Book whose Chapters to fetch
  bookId: "bookId_example",
};

apiInstance.getAudioChapters(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **audioBibleId** | [**string**] | Id of Bible whose Chapters to fetch | defaults to undefined
 **bookId** | [**string**] | Id of the Book whose Chapters to fetch | defaults to undefined


### Return type

**GetChapters200Response**

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
**403** | Not authorized to retrieve Chapters for this Bible |  -  |
**404** | Book not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getChapter**
> GetChapter200Response getChapter()

Gets a single `Chapter` object for a given `bibleId` and `chapterId`. This Chapter object also includes an `content` property with all verses for the Chapter. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChaptersApi(configuration);

let body:.ChaptersApiGetChapterRequest = {
  // string | Id of Bible whose Chapter to fetch
  bibleId: "bibleId_example",
  // string | Id of the Chapter to fetch
  chapterId: "chapterId_example",
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

apiInstance.getChapter(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bibleId** | [**string**] | Id of Bible whose Chapter to fetch | defaults to undefined
 **chapterId** | [**string**] | Id of the Chapter to fetch | defaults to undefined
 **contentType** | [**&#39;html&#39; | &#39;json&#39; | &#39;text&#39;**]**Array<&#39;html&#39; &#124; &#39;json&#39; &#124; &#39;text&#39;>** | Content type to be returned in the content property.  Supported values are &#x60;html&#x60; (default), &#x60;json&#x60; (beta), and &#x60;text&#x60; (beta) | (optional) defaults to 'html'
 **includeNotes** | [**boolean**] | Include footnotes in content | (optional) defaults to false
 **includeTitles** | [**boolean**] | Include section titles in content | (optional) defaults to true
 **includeChapterNumbers** | [**boolean**] | Include chapter numbers in content | (optional) defaults to false
 **includeVerseNumbers** | [**boolean**] | Include verse numbers in content. | (optional) defaults to true
 **includeVerseSpans** | [**boolean**] | Include spans that wrap verse numbers and verse text for bible content. | (optional) defaults to false
 **parallels** | [**string**] | Comma delimited list of bibleIds to include | (optional) defaults to undefined


### Return type

**GetChapter200Response**

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
**403** | Not authorized to retrieve Chapters for this Bible |  -  |
**404** | Chapter not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getChapters**
> GetChapters200Response getChapters()

Gets an array of `Chapter` objects for a given `bibleId` and `bookId` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChaptersApi(configuration);

let body:.ChaptersApiGetChaptersRequest = {
  // string | Id of Bible whose Chapters to fetch
  bibleId: "bibleId_example",
  // string | Id of the Book whose Chapters to fetch
  bookId: "bookId_example",
};

apiInstance.getChapters(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bibleId** | [**string**] | Id of Bible whose Chapters to fetch | defaults to undefined
 **bookId** | [**string**] | Id of the Book whose Chapters to fetch | defaults to undefined


### Return type

**GetChapters200Response**

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
**403** | Not authorized to retrieve Chapters for this Bible |  -  |
**404** | Book not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


