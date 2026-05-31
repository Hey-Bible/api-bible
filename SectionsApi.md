# .SectionsApi

All URIs are relative to *https://rest.api.bible/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBookSections**](SectionsApi.md#getBookSections) | **GET** /bibles/{bibleId}/books/{bookId}/sections | List Sections in a Book
[**getChapterSections**](SectionsApi.md#getChapterSections) | **GET** /bibles/{bibleId}/chapters/{chapterId}/sections | List Sections in a Chapter
[**getSection**](SectionsApi.md#getSection) | **GET** /bibles/{bibleId}/sections/{sectionId} | Get a Section


# **getBookSections**
> GetBookSections200Response getBookSections()

Lists `Section` objects for a given `bibleId` and `bookId`  A `Section` object represents a known range of verses in the Bible, typically tied to a story. Each Section is accessible via its **Section ID**, a string consisting of a [Book](https://docs.api.bible/guides/books) ID and a section number. Not every Bible has sections enabled. For Bibles with sections enabled, sections are sequential and _should_ cover nearly every verse if queried in order. A few examples from the book of Genesis are:  | Section Title | Verse Range                | Section ID | | ------------- | -------------------------- | ---------- | | The Beginning | Genesis 1:1 - Genesis 2:3  | `GEN.S1`   | | Adam and Eve  | Genesis 2:4 - Genesis 2:25 | `GEN.S2`   | | The Fall      | Genesis 3:1 - Genesis 3:24 | `GEN.S3`   |  *Note: This endpoint does not return verse content* 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SectionsApi(configuration);

let body:.SectionsApiGetBookSectionsRequest = {
  // string | The ID of the Bible you are looking to fetch
  bibleId: "65eec8e0b60e656b-01",
  // string | The Book ID you are looking to fetch
  bookId: "GEN",
};

apiInstance.getBookSections(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bibleId** | [**string**] | The ID of the Bible you are looking to fetch | defaults to undefined
 **bookId** | [**string**] | The Book ID you are looking to fetch | defaults to undefined


### Return type

**GetBookSections200Response**

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

# **getChapterSections**
> GetBookSections200Response getChapterSections()

Lists `Section` objects for a given `bibleId` and `chapterId`  Lists `Section` objects for a given `bibleId` and `bookId`  A `Section` object represents a known range of verses in the Bible, typically tied to a story. Each Section is accessible via its **Section ID**, a string consisting of a [Book](https://docs.api.bible/guides/books) ID and a section number. Not every Bible has sections enabled. For Bibles with sections enabled, sections are sequential and _should_ cover nearly every verse if queried in order. A few examples from the book of Genesis are:  | Section Title | Verse Range                | Section ID | | ------------- | -------------------------- | ---------- | | The Beginning | Genesis 1:1 - Genesis 2:3  | `GEN.S1`   | | Adam and Eve  | Genesis 2:4 - Genesis 2:25 | `GEN.S2`   | | The Fall      | Genesis 3:1 - Genesis 3:24 | `GEN.S3`   |  *Note: This endpoint does not return verse content* 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SectionsApi(configuration);

let body:.SectionsApiGetChapterSectionsRequest = {
  // string | The ID of the Bible you are looking to fetch
  bibleId: "65eec8e0b60e656b-01",
  // string | The Chapter ID you are looking to fetch
  chapterId: "GEN.1",
};

apiInstance.getChapterSections(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bibleId** | [**string**] | The ID of the Bible you are looking to fetch | defaults to undefined
 **chapterId** | [**string**] | The Chapter ID you are looking to fetch | defaults to undefined


### Return type

**GetBookSections200Response**

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

# **getSection**
> GetSection200Response getSection()

Gets a single `Section` object for a given `bibleId` and `sectionId`.   Lists `Section` objects for a given `bibleId` and `bookId`  A `Section` object represents a known range of verses in the Bible, typically tied to a story. Each Section is accessible via its **Section ID**, a string consisting of a [Book](https://docs.api.bible/guides/books) ID and a section number. Not every Bible has sections enabled. For Bibles with sections enabled, sections are sequential and _should_ cover nearly every verse if queried in order. A few examples from the book of Genesis are:  | Section Title | Verse Range                | Section ID | | ------------- | -------------------------- | ---------- | | The Beginning | Genesis 1:1 - Genesis 2:3  | `GEN.S1`   | | Adam and Eve  | Genesis 2:4 - Genesis 2:25 | `GEN.S2`   | | The Fall      | Genesis 3:1 - Genesis 3:24 | `GEN.S3`   |  In addition to information about the given section, this endpoint will also return all verse content included in that section within the `content` field. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SectionsApi(configuration);

let body:.SectionsApiGetSectionRequest = {
  // string | The ID of the Bible you are looking to fetch
  bibleId: "65eec8e0b60e656b-01",
  // string | The Section ID you are looking to fetch
  sectionId: "GEN.S1",
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

apiInstance.getSection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bibleId** | [**string**] | The ID of the Bible you are looking to fetch | defaults to undefined
 **sectionId** | [**string**] | The Section ID you are looking to fetch | defaults to undefined
 **contentType** | [**&#39;html&#39; | &#39;json&#39; | &#39;text&#39;**]**Array<&#39;html&#39; &#124; &#39;json&#39; &#124; &#39;text&#39;>** | Determines the structure of returned verse content | (optional) defaults to 'html'
 **includeNotes** | [**boolean**] | When &#x60;true&#x60;, returns footnotes in verse content | (optional) defaults to false
 **includeTitles** | [**boolean**] | When &#x60;true&#x60;, returns section titles in verse content | (optional) defaults to true
 **includeChapterNumbers** | [**boolean**] | When &#x60;true&#x60;, returns chapter numbers in verse content | (optional) defaults to false
 **includeVerseNumbers** | [**boolean**] | When &#x60;true&#x60;, returns verse numbers in verse content | (optional) defaults to true
 **includeVerseSpans** | [**boolean**] | When &#x60;true&#x60;, returns spans that wrap verse numbers and verse text in content | (optional) defaults to false
 **parallels** | [**string**] | Comma-separated list of Bible IDs. When included, returns parallel verses from the given Bibles | (optional) defaults to undefined


### Return type

**GetSection200Response**

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


