# .BooksApi

All URIs are relative to *https://api.scripture.api.bible*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAudioBook**](BooksApi.md#getAudioBook) | **GET** /v1/audio-bibles/{audioBibleId}/books/{bookId} | 
[**getAudioBooks**](BooksApi.md#getAudioBooks) | **GET** /v1/audio-bibles/{audioBibleId}/books | 
[**getBook**](BooksApi.md#getBook) | **GET** /v1/bibles/{bibleId}/books/{bookId} | 
[**getBooks**](BooksApi.md#getBooks) | **GET** /v1/bibles/{bibleId}/books | 


# **getAudioBook**
> GetBook200Response getAudioBook()

Gets a single `Book` object for a given `audioBibleId` and `bookId` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiGetAudioBookRequest = {
  // string | Id of audio Bible whose Book to fetch
  audioBibleId: "audioBibleId_example",
  // string | Id of the Book to fetch
  bookId: "bookId_example",
  // boolean | Boolean indicating if an array of chapter summaries should be included in the results. Defaults to false.  (optional)
  includeChapters: true,
};

apiInstance.getAudioBook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **audioBibleId** | [**string**] | Id of audio Bible whose Book to fetch | defaults to undefined
 **bookId** | [**string**] | Id of the Book to fetch | defaults to undefined
 **includeChapters** | [**boolean**] | Boolean indicating if an array of chapter summaries should be included in the results. Defaults to false.  | (optional) defaults to undefined


### Return type

**GetBook200Response**

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
**403** | Not authorized to retrieve Books for this Bible |  -  |
**404** | Book not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAudioBooks**
> GetBooks200Response getAudioBooks()

Gets an array of `Book` objects for a given `audioBibleId` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiGetAudioBooksRequest = {
  // string | Id of audio Bible whose Book to fetch
  audioBibleId: "audioBibleId_example",
  // boolean | Boolean indicating if an array of chapter summaries should be included in the results. Defaults to false.  (optional)
  includeChapters: true,
  // boolean | Boolean indicating if an array of chapter summaries and an array of sections should be included in the results. Defaults to false.  (optional)
  includeChaptersAndSections: true,
};

apiInstance.getAudioBooks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **audioBibleId** | [**string**] | Id of audio Bible whose Book to fetch | defaults to undefined
 **includeChapters** | [**boolean**] | Boolean indicating if an array of chapter summaries should be included in the results. Defaults to false.  | (optional) defaults to undefined
 **includeChaptersAndSections** | [**boolean**] | Boolean indicating if an array of chapter summaries and an array of sections should be included in the results. Defaults to false.  | (optional) defaults to undefined


### Return type

**GetBooks200Response**

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
**403** | Not authorized to retrieve Books for this Bible |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBook**
> GetBook200Response getBook()

Gets a single `Book` object for a given `bibleId` and `bookId` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiGetBookRequest = {
  // string | Id of Bible whose Book to fetch
  bibleId: "bibleId_example",
  // string | Id of the Book to fetch
  bookId: "bookId_example",
  // boolean | Boolean indicating if an array of chapter summaries should be included in the results. Defaults to false.  (optional)
  includeChapters: true,
};

apiInstance.getBook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bibleId** | [**string**] | Id of Bible whose Book to fetch | defaults to undefined
 **bookId** | [**string**] | Id of the Book to fetch | defaults to undefined
 **includeChapters** | [**boolean**] | Boolean indicating if an array of chapter summaries should be included in the results. Defaults to false.  | (optional) defaults to undefined


### Return type

**GetBook200Response**

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
**403** | Not authorized to retrieve Books for this Bible |  -  |
**404** | Book not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBooks**
> GetBooks200Response getBooks()

Gets an array of `Book` objects for a given `bibleId` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiGetBooksRequest = {
  // string | Id of Bible whose Book to fetch
  bibleId: "bibleId_example",
  // boolean | Boolean indicating if an array of chapter summaries should be included in the results. Defaults to false.  (optional)
  includeChapters: true,
  // boolean | Boolean indicating if an array of chapter summaries and an array of sections should be included in the results. Defaults to false.  (optional)
  includeChaptersAndSections: true,
};

apiInstance.getBooks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bibleId** | [**string**] | Id of Bible whose Book to fetch | defaults to undefined
 **includeChapters** | [**boolean**] | Boolean indicating if an array of chapter summaries should be included in the results. Defaults to false.  | (optional) defaults to undefined
 **includeChaptersAndSections** | [**boolean**] | Boolean indicating if an array of chapter summaries and an array of sections should be included in the results. Defaults to false.  | (optional) defaults to undefined


### Return type

**GetBooks200Response**

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
**403** | Not authorized to retrieve Books for this Bible |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


