# .VersesApi

All URIs are relative to *https://rest.api.bible/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getVerse**](VersesApi.md#getVerse) | **GET** /bibles/{bibleId}/verses/{verseId} | Get a Verse
[**getVerses**](VersesApi.md#getVerses) | **GET** /bibles/{bibleId}/chapters/{chapterId}/verses | List Verses in a Chapter


# **getVerse**
> GetVerse200Response getVerse()

Gets a `Verse` object for a given `bibleId` and `verseId`.  A `Verse` object represents a verse in the Bible. Each Verse is accessible via its **Verse ID**, a string consisting of a [Book](https://docs.api.bible/guides/books) ID, a chapter number, and a verse number. A few examples are:  | Verse           | Verse ID   | | --------------- | ---------- | | Genesis 1:1     | `GEN.1.1`  | | John 3:16       | `JHN.3.16` | | Revelation 21.4 | `REV.21.4` |  In addition to information about the given verse, this endpoint will also return all verse content within the `content` field. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VersesApi(configuration);

let body:.VersesApiGetVerseRequest = {
  // string | The ID of the Bible you are looking to fetch
  bibleId: "65eec8e0b60e656b-01",
  // string | The Verse ID you are looking to fetch
  verseId: "GEN.1.1",
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
  // boolean | When `true`, uses the supplied id(s) to match the `verseOrgId` instead of the `verseId` (optional)
  useOrgId: false,
};

apiInstance.getVerse(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bibleId** | [**string**] | The ID of the Bible you are looking to fetch | defaults to undefined
 **verseId** | [**string**] | The Verse ID you are looking to fetch | defaults to undefined
 **contentType** | [**&#39;html&#39; | &#39;json&#39; | &#39;text&#39;**]**Array<&#39;html&#39; &#124; &#39;json&#39; &#124; &#39;text&#39;>** | Determines the structure of returned verse content | (optional) defaults to 'html'
 **includeNotes** | [**boolean**] | When &#x60;true&#x60;, returns footnotes in verse content | (optional) defaults to false
 **includeTitles** | [**boolean**] | When &#x60;true&#x60;, returns section titles in verse content | (optional) defaults to true
 **includeChapterNumbers** | [**boolean**] | When &#x60;true&#x60;, returns chapter numbers in verse content | (optional) defaults to false
 **includeVerseNumbers** | [**boolean**] | When &#x60;true&#x60;, returns verse numbers in verse content | (optional) defaults to true
 **includeVerseSpans** | [**boolean**] | When &#x60;true&#x60;, returns spans that wrap verse numbers and verse text in content | (optional) defaults to false
 **parallels** | [**string**] | Comma-separated list of Bible IDs. When included, returns parallel verses from the given Bibles | (optional) defaults to undefined
 **useOrgId** | [**boolean**] | When &#x60;true&#x60;, uses the supplied id(s) to match the &#x60;verseOrgId&#x60; instead of the &#x60;verseId&#x60; | (optional) defaults to false


### Return type

**GetVerse200Response**

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
**404** | #### Not Found    Unable to find a passage with the given &#x60;{passageId}&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getVerses**
> GetVerses200Response getVerses()

Lists `Verse` objects for a given `bibleId` and `chapterId`  A `Verse` object represents a verse in the Bible. Each Verse is accessible via its **Verse ID**, a string consisting of a [Book](https://docs.api.bible/guides/books) ID, a chapter number, and a verse number. A few examples are:  | Verse           | Verse ID   | | --------------- | ---------- | | Genesis 1:1     | `GEN.1.1`  | | John 3:16       | `JHN.3.16` | | Revelation 21.4 | `REV.21.4` |  *Note: This endpoint does not return verse content* 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VersesApi(configuration);

let body:.VersesApiGetVersesRequest = {
  // string | The ID of the Bible you are looking to fetch
  bibleId: "65eec8e0b60e656b-01",
  // string | The Chapter ID you are looking to fetch
  chapterId: "GEN.1",
};

apiInstance.getVerses(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bibleId** | [**string**] | The ID of the Bible you are looking to fetch | defaults to undefined
 **chapterId** | [**string**] | The Chapter ID you are looking to fetch | defaults to undefined


### Return type

**GetVerses200Response**

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


