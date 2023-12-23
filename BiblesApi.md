# .BiblesApi

All URIs are relative to *https://api.scripture.api.bible*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAudioBible**](BiblesApi.md#getAudioBible) | **GET** /v1/audio-bibles/{audioBibleId} | 
[**getAudioBibles**](BiblesApi.md#getAudioBibles) | **GET** /v1/audio-bibles | 
[**getBible**](BiblesApi.md#getBible) | **GET** /v1/bibles/{bibleId} | 
[**getBibles**](BiblesApi.md#getBibles) | **GET** /v1/bibles | 


# **getAudioBible**
> GetAudioBible200Response getAudioBible()

Gets a single audio `Bible` for a given `audioBibleId` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BiblesApi(configuration);

let body:.BiblesApiGetAudioBibleRequest = {
  // string | Id of audio Bible to be fetched
  audioBibleId: "audioBibleId_example",
};

apiInstance.getAudioBible(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **audioBibleId** | [**string**] | Id of audio Bible to be fetched | defaults to undefined


### Return type

**GetAudioBible200Response**

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
**403** | Not authorized to retrieve this Bible |  -  |
**404** | Bible not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAudioBibles**
> GetBibles200Response getAudioBibles()

Gets an array of audio `Bible` objects authorized for current API Key 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BiblesApi(configuration);

let body:.BiblesApiGetAudioBiblesRequest = {
  // string | ISO 639-3 three digit language code used to filter results (optional)
  language: "language_example",
  // string | Bible abbreviation to search for (optional)
  abbreviation: "abbreviation_example",
  // string | Bible name to search for (optional)
  name: "name_example",
  // string | Comma separated list of Bible Ids to return (optional)
  ids: "ids_example",
  // string | bibleId of related text Bible used to filter audio bible results (optional)
  bibleId: "bibleId_example",
  // boolean | Boolean to include full Bible details (e.g. copyright and promo info) (optional)
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
 **bibleId** | [**string**] | bibleId of related text Bible used to filter audio bible results | (optional) defaults to undefined
 **includeFullDetails** | [**boolean**] | Boolean to include full Bible details (e.g. copyright and promo info) | (optional) defaults to undefined


### Return type

**GetBibles200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Not authorized to retrieve any Bibles or invalid language_code provided |  -  |
**401** | Unauthorized for API access.  Missing or Invalid API Key provided. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBible**
> GetBible200Response getBible()

Gets a single `Bible` for a given `bibleId` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BiblesApi(configuration);

let body:.BiblesApiGetBibleRequest = {
  // string | Id of Bible to be fetched
  bibleId: "bibleId_example",
};

apiInstance.getBible(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bibleId** | [**string**] | Id of Bible to be fetched | defaults to undefined


### Return type

**GetBible200Response**

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
**403** | Not authorized to retrieve this Bible |  -  |
**404** | Bible not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBibles**
> GetBibles200Response getBibles()

Gets an array of `Bible` objects authorized for current API Key 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BiblesApi(configuration);

let body:.BiblesApiGetBiblesRequest = {
  // string | ISO 639-3 three digit language code used to filter results (optional)
  language: "language_example",
  // string | Bible abbreviation to search for (optional)
  abbreviation: "abbreviation_example",
  // string | Bible name to search for (optional)
  name: "name_example",
  // string | Comma separated list of Bible Ids to return (optional)
  ids: "ids_example",
  // boolean | Boolean to include full Bible details (e.g. copyright and promo info) (optional)
  includeFullDetails: true,
};

apiInstance.getBibles(body).then((data:any) => {
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
 **includeFullDetails** | [**boolean**] | Boolean to include full Bible details (e.g. copyright and promo info) | (optional) defaults to undefined


### Return type

**GetBibles200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Not authorized to retrieve any Bibles or invalid language_code provided |  -  |
**401** | Unauthorized for API access.  Missing or Invalid API Key provided. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


