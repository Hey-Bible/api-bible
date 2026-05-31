# .ChaptersApi

All URIs are relative to *https://rest.api.bible/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getChapter**](ChaptersApi.md#getChapter) | **GET** /bibles/{bibleId}/chapters/{chapterId} | Get a Chapter
[**getChapters**](ChaptersApi.md#getChapters) | **GET** /bibles/{bibleId}/books/{bookId}/chapters | List Chapters in a Book


# **getChapter**
> GetChapter200Response getChapter()

Gets a single `Chapter` object for a given `bibleId` and `chapterId`.  A `Chapter` object represents a single chapter of the Bible. Each Chapter is accessible via its **Chapter ID**, a string consisting of a [Book](https://docs.api.bible/guides/books) ID and a chapter number. A few examples are:  | Chapter       | Chapter ID | | ------------- | ---------- | | Genesis 1     | `GEN.1`    | | John 3        | `JHN.3`    | | Revelation 22 | `REV.22`   |  In addition to information about the given chapter, this endpoint will also return all verse content included in that chapter within the `content` field.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChaptersApi(configuration);

let body:.ChaptersApiGetChapterRequest = {
  // string | The ID of the Bible you are looking to fetch
  bibleId: "65eec8e0b60e656b-01",
  // string | The Chapter ID you are looking to fetch
  chapterId: "GEN.1",
  // 'html' | 'json' | 'text' | Determines the structure of returned verse content (optional)
  contentType: "html",
  // boolean | When `true`, returns footnotes in verse content (optional)
  includeNotes: false,
  // boolean | When `true`, returns section titles in verse content (optional)
  includeTitles: true,
  // boolean | When `true`, returns chapter numbers in verse content (optional)
  includeChapterNumbers: false,
  // boolean | When `true`, returns verse numbers in verse content (optional)
  includeVerseNumbers: true,
  // boolean | When `true`, returns spans that wrap verse numbers and verse text in content (optional)
  includeVerseSpans: false,
  // string | Comma-separated list of Bible IDs. When included, returns parallel verses from the given Bibles (optional)
  parallels: "78a9f6124f344018-01,a761ca71e0b3ddcf-01",
};

apiInstance.getChapter(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bibleId** | [**string**] | The ID of the Bible you are looking to fetch | defaults to undefined
 **chapterId** | [**string**] | The Chapter ID you are looking to fetch | defaults to undefined
 **contentType** | [**&#39;html&#39; | &#39;json&#39; | &#39;text&#39;**]**Array<&#39;html&#39; &#124; &#39;json&#39; &#124; &#39;text&#39;>** | Determines the structure of returned verse content | (optional) defaults to 'html'
 **includeNotes** | [**boolean**] | When &#x60;true&#x60;, returns footnotes in verse content | (optional) defaults to false
 **includeTitles** | [**boolean**] | When &#x60;true&#x60;, returns section titles in verse content | (optional) defaults to true
 **includeChapterNumbers** | [**boolean**] | When &#x60;true&#x60;, returns chapter numbers in verse content | (optional) defaults to false
 **includeVerseNumbers** | [**boolean**] | When &#x60;true&#x60;, returns verse numbers in verse content | (optional) defaults to true
 **includeVerseSpans** | [**boolean**] | When &#x60;true&#x60;, returns spans that wrap verse numbers and verse text in content | (optional) defaults to false
 **parallels** | [**string**] | Comma-separated list of Bible IDs. When included, returns parallel verses from the given Bibles | (optional) defaults to undefined


### Return type

**GetChapter200Response**

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
**404** | #### Not Found    Unable to find a chapter with the given &#x60;{chapterId}&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getChapters**
> GetChapters200Response getChapters()

Lists `Chapter` objects for a given `bibleId` and `bookId`  A `Chapter` object represents a single chapter of the Bible. Each Chapter is accessible via its **Chapter ID**, a string consisting of a [Book](#/components/schemas/Book) ID and a chapter number. A few examples are:  | Chapter       | Chapter ID | | ------------- | ---------- | | Genesis 1     | `GEN.1`    | | John 3        | `JHN.3`    | | Revelation 22 | `REV.22`   |  *Note: This endpoint does not return verse content*

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChaptersApi(configuration);

let body:.ChaptersApiGetChaptersRequest = {
  // string | The ID of the Bible you are looking to fetch
  bibleId: "65eec8e0b60e656b-01",
  // string | The Book ID you are looking to fetch
  bookId: "GEN",
};

apiInstance.getChapters(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bibleId** | [**string**] | The ID of the Bible you are looking to fetch | defaults to undefined
 **bookId** | [**string**] | The Book ID you are looking to fetch | defaults to undefined


### Return type

**GetChapters200Response**

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
**404** | #### Not Found    Unable to find a book with the given &#x60;{bookId}&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


