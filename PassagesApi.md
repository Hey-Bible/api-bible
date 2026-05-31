# .PassagesApi

All URIs are relative to *https://rest.api.bible/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPassage**](PassagesApi.md#getPassage) | **GET** /bibles/{bibleId}/passages/{passageId} | Get a Passage


# **getPassage**
> GetPassage200Response getPassage()

Gets a `Passage` object for a given `bibleId` and `passageId`.  A `Passage` object represents an arbitrary range of verses from the Bible. These ranges are not predefined values, but instead depend on the given input, known as a **Passage ID**. A **Passsage ID** consists of two [Verse](https://docs.api.bible/guides/verses) IDs separated by a `-`. These **Verse IDs** can span chapters and books, though passages are limited to 200 verses. A few passage examples are:  | Verse Range                             | Passage ID          | | --------------------------------------- | ------------------- | | Genesis 1:1 - Genesis 2:3               | `GEN.1.1-GEN.2.3`   | | John 3:1 - John 3:16                    | `JHN.3:1-JHN.3.16`  | | 1 Corinthians 16:1 - 2 Corinthians 1:23 | `1CO.16.1-2CO.1.23` |  In addition to information about the given passage, this endpoint will also return all verse content included in that passage within the `content` field. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PassagesApi(configuration);

let body:.PassagesApiGetPassageRequest = {
  // string | The ID of the Bible you are looking to fetch
  bibleId: "65eec8e0b60e656b-01",
  // string | The Passage ID you are looking to fetch
  passageId: "GEN.1.1-GEN.2.1",
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

apiInstance.getPassage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bibleId** | [**string**] | The ID of the Bible you are looking to fetch | defaults to undefined
 **passageId** | [**string**] | The Passage ID you are looking to fetch | defaults to undefined
 **contentType** | [**&#39;html&#39; | &#39;json&#39; | &#39;text&#39;**]**Array<&#39;html&#39; &#124; &#39;json&#39; &#124; &#39;text&#39;>** | Determines the structure of returned verse content | (optional) defaults to 'html'
 **includeNotes** | [**boolean**] | When &#x60;true&#x60;, returns footnotes in verse content | (optional) defaults to false
 **includeTitles** | [**boolean**] | When &#x60;true&#x60;, returns section titles in verse content | (optional) defaults to true
 **includeChapterNumbers** | [**boolean**] | When &#x60;true&#x60;, returns chapter numbers in verse content | (optional) defaults to false
 **includeVerseNumbers** | [**boolean**] | When &#x60;true&#x60;, returns verse numbers in verse content | (optional) defaults to true
 **includeVerseSpans** | [**boolean**] | When &#x60;true&#x60;, returns spans that wrap verse numbers and verse text in content | (optional) defaults to false
 **parallels** | [**string**] | Comma-separated list of Bible IDs. When included, returns parallel verses from the given Bibles | (optional) defaults to undefined
 **useOrgId** | [**boolean**] | When &#x60;true&#x60;, uses the supplied id(s) to match the &#x60;verseOrgId&#x60; instead of the &#x60;verseId&#x60; | (optional) defaults to false


### Return type

**GetPassage200Response**

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


