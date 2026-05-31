# .AudioBiblesApi

All URIs are relative to *https://rest.api.bible/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAudioBible**](AudioBiblesApi.md#getAudioBible) | **GET** /audio-bibles/{bibleId} | Get an Audio Bible
[**getAudioBibles**](AudioBiblesApi.md#getAudioBibles) | **GET** /audio-bibles | List Available Audio Bibles
[**getAudioBook**](AudioBiblesApi.md#getAudioBook) | **GET** /audio-bibles/{bibleId}/books/{bookId} | Get an Audio Book
[**getAudioBooks**](AudioBiblesApi.md#getAudioBooks) | **GET** /audio-bibles/{bibleId}/books | List Books in an Audio Bible
[**getAudioChapter**](AudioBiblesApi.md#getAudioChapter) | **GET** /audio-bibles/{bibleId}/chapters/{chapterId} | Get an Audio Chapter
[**getAudioChapters**](AudioBiblesApi.md#getAudioChapters) | **GET** /audio-bibles/{bibleId}/books/{bookId}/chapters | List Audio Chapters in an Audio Book


# **getAudioBible**
> GetAudioBible200Response getAudioBible()

Gets a single `AudioBible` for a given `bibleId`  An `AudioBible` object represents a single auditory translation (NIV, ESV, etc.) of the Bible. Each Bible is accessible via its **Bible ID**, a string consisting of a 16-digit unique string followed by a _publication number_ (`-01`, `-02`). A few popular examples are:  | Bible                                  | Bible ID              | | -------------------------------------- | --------------------- | | New International Version (**NIV**)    | `78a9f6124f344018-01` | | New American Standard Bible (**NASB**) | `a761ca71e0b3ddcf-01` | | Christian Standard Bible (**CSB**)     | `a556c5305ee15c3f-01` |

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AudioBiblesApi(configuration);

let body:.AudioBiblesApiGetAudioBibleRequest = {
  // string | The ID of the Bible you are looking to fetch
  bibleId: "65eec8e0b60e656b-01",
};

apiInstance.getAudioBible(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bibleId** | [**string**] | The ID of the Bible you are looking to fetch | defaults to undefined


### Return type

**GetAudioBible200Response**

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
**404** | #### Not Found    Unable to find a Bible with the given &#x60;{bibleId}&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAudioBibles**
> GetAudioBibles200Response getAudioBibles()

Lists `AudioBible` objects authorized for current API Key.  **Audio Bibles** are nearly identical to [Bibles](https://docs.api.bible/guides/bibles), including their content structure. Audio Bibles, however, have one audio file for each chapter and therefore cannot be queried at the verse level. This is why Audio Bibles are queried separately from normal Bibles.  Audio Bible availability via API.Bible requires special licensing. For more information, please reach out to [support@api.bible](mailto:support@api.bible). 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AudioBiblesApi(configuration);

let body:.AudioBiblesApiGetAudioBiblesRequest = {
  // string | ISO 639-3 three digit language code used to filter results (optional)
  language: "language_example",
  // string | Bible abbreviation to search for (optional)
  abbreviation: "abbreviation_example",
  // string | Bible name to search for (optional)
  name: "name_example",
  // string | Comma separated list of Bible Ids to return (optional)
  ids: "ids_example",
  // string | `bibleId` of related text Bible used to filter audio Bible results (optional)
  bibleId: "bibleId_example",
  // boolean | When `true`, the returned Bibles will include additional Bible details (e.g. copyright and promo info) (optional)
  includeFullDetails: true,
};

apiInstance.getAudioBibles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | [**string**] | ISO 639-3 three digit language code used to filter results | (optional) defaults to undefined
 **abbreviation** | [**string**] | Bible abbreviation to search for | (optional) defaults to undefined
 **name** | [**string**] | Bible name to search for | (optional) defaults to undefined
 **ids** | [**string**] | Comma separated list of Bible Ids to return | (optional) defaults to undefined
 **bibleId** | [**string**] | &#x60;bibleId&#x60; of related text Bible used to filter audio Bible results | (optional) defaults to undefined
 **includeFullDetails** | [**boolean**] | When &#x60;true&#x60;, the returned Bibles will include additional Bible details (e.g. copyright and promo info) | (optional) defaults to undefined


### Return type

**GetAudioBibles200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ##### OK |  -  |
**400** | #### Bad Request\\r\\n\\r\\nInvalid language code provided |  -  |
**401** | #### Unauthorized    Missing or Invalid API Token provided. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAudioBook**
> GetBook200Response getAudioBook()

Gets a single `Book` object for a given `bibleId` and `bookId`  A `Book` object represents a single book (Matthew, Mark, etc.) of a single Bible. Each `Book` is accessible via a **Book ID**, a 3-digit code representing the book\'s name. A few examples are:  | Book Name | Book ID | | --------- | ------- | | Genesis   | `GEN`   | | Mark      | `MRK`   | | 1 John    | `1JN`   | 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AudioBiblesApi(configuration);

let body:.AudioBiblesApiGetAudioBookRequest = {
  // string | The ID of the Bible you are looking to fetch
  bibleId: "65eec8e0b60e656b-01",
  // string | The Book ID you are looking to fetch
  bookId: "GEN",
  // boolean | When `true`, returns available chapter information for each book (optional)
  includeChapters: false,
};

apiInstance.getAudioBook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bibleId** | [**string**] | The ID of the Bible you are looking to fetch | defaults to undefined
 **bookId** | [**string**] | The Book ID you are looking to fetch | defaults to undefined
 **includeChapters** | [**boolean**] | When &#x60;true&#x60;, returns available chapter information for each book | (optional) defaults to false


### Return type

**GetBook200Response**

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

# **getAudioBooks**
> GetBooks200Response getAudioBooks()

Lists `Book` objects for a given `bibleId`  A `Book` object represents a single book (Matthew, Mark, etc.) of a single Bible. Each `Book` is accessible via a **Book ID**, a 3-digit code representing the book\'s name. A few examples are:  | Book Name | Book ID | | --------- | ------- | | Genesis   | `GEN`   | | Mark      | `MRK`   | | 1 John    | `1JN`   |

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AudioBiblesApi(configuration);

let body:.AudioBiblesApiGetAudioBooksRequest = {
  // string | The ID of the Bible you are looking to fetch
  bibleId: "65eec8e0b60e656b-01",
  // boolean | When `true`, returns available chapter information for each book (optional)
  includeChapters: false,
  // boolean | When `true`, returns available chapter and section (if available) information for each book (optional)
  includeChaptersAndSections: false,
};

apiInstance.getAudioBooks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bibleId** | [**string**] | The ID of the Bible you are looking to fetch | defaults to undefined
 **includeChapters** | [**boolean**] | When &#x60;true&#x60;, returns available chapter information for each book | (optional) defaults to false
 **includeChaptersAndSections** | [**boolean**] | When &#x60;true&#x60;, returns available chapter and section (if available) information for each book | (optional) defaults to false


### Return type

**GetBooks200Response**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAudioChapter**
> GetAudioChapter200Response getAudioChapter()

Gets a single `AudioChapter` object for a given `bible` and `chapterId`.  A presigned link to the mp3 audio file for this audio chapter will be included in the `resourceUrl` field. This link is unique to your request and will will expire, so it is recommended to download that audio file using that link as quickly as you are able. It is **not** recommended that you stream audio directly from the provided link, as you will run into a number of ongoing issues.  Some audio chapters will include `timecodes`. These allow you to match verses in a chapter to a specific time code in the audio file. This can be helpful if you are using both text and audio Bibles and would like to highlight the verse as it is being read.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AudioBiblesApi(configuration);

let body:.AudioBiblesApiGetAudioChapterRequest = {
  // string | The ID of the Bible you are looking to fetch
  bibleId: "65eec8e0b60e656b-01",
  // string | The Chapter ID you are looking to fetch
  chapterId: "GEN.1",
};

apiInstance.getAudioChapter(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bibleId** | [**string**] | The ID of the Bible you are looking to fetch | defaults to undefined
 **chapterId** | [**string**] | The Chapter ID you are looking to fetch | defaults to undefined


### Return type

**GetAudioChapter200Response**

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

# **getAudioChapters**
> GetChapters200Response getAudioChapters()

Lists `Chapter` objects for a given `bibleId` and `bookId`  A `Chapter` object represents a single chapter of the Bible. Each Chapter is accessible via its **Chapter ID**, a string consisting of a [Book](https://docs.api.bible/guides/books) ID and a chapter number. A few examples are:  | Chapter       | Chapter ID | | ------------- | ---------- | | Genesis 1     | `GEN.1`    | | John 3        | `JHN.3`    | | Revelation 22 | `REV.22`   |  *Note: This endpoint does not return verse content* 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AudioBiblesApi(configuration);

let body:.AudioBiblesApiGetAudioChaptersRequest = {
  // string | The ID of the Bible you are looking to fetch
  bibleId: "65eec8e0b60e656b-01",
  // string | The Book ID you are looking to fetch
  bookId: "GEN",
};

apiInstance.getAudioChapters(body).then((data:any) => {
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


