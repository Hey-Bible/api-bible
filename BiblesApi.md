# .BiblesApi

All URIs are relative to *https://rest.api.bible/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBible**](BiblesApi.md#getBible) | **GET** /bibles/{bibleId} | Get a Bible
[**getBibles**](BiblesApi.md#getBibles) | **GET** /bibles | List Available Bibles


# **getBible**
> GetBible200Response getBible()

Gets a single `Bible` object using the given `bibleId`.   A `Bible` object represents a single translation (NIV, ESV, etc.) of the Bible. Each Bible is accessible via its **Bible ID**, a string consisting of a 16-digit unique string followed by a _publication number_ (`-01`, `-02`). A few popular examples are:  | Bible                                  | Bible ID              | | -------------------------------------- | --------------------- | | New International Version (**NIV**)    | `78a9f6124f344018-01` | | New American Standard Bible (**NASB**) | `a761ca71e0b3ddcf-01` | | Christian Standard Bible (**CSB**)     | `a556c5305ee15c3f-01` |

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BiblesApi(configuration);

let body:.BiblesApiGetBibleRequest = {
  // string | The ID of the Bible you are looking to fetch
  bibleId: "65eec8e0b60e656b-01",
};

apiInstance.getBible(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bibleId** | [**string**] | The ID of the Bible you are looking to fetch | defaults to undefined


### Return type

**GetBible200Response**

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

# **getBibles**
> GetBibles200Response getBibles()

Lists `Bible` objects authorized for the current API Key. This includes Creative Commons and Public Domain Bibles, as well as any Bibles licensed via a **Starter** or **Pro Plan**.  A `Bible` object represents a single translation (NIV, ESV, etc.) of the Bible. Each Bible is accessible via its **Bible ID**, a string consisting of a 16-digit unique string followed by a _publication number_ (`-01`, `-02`). A few popular examples are:  | Bible                                  | Bible ID              | | -------------------------------------- | --------------------- | | New International Version (**NIV**)    | `78a9f6124f344018-01` | | New American Standard Bible (**NASB**) | `a761ca71e0b3ddcf-01` | | Christian Standard Bible (**CSB**)     | `a556c5305ee15c3f-01` |

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BiblesApi(configuration);

let body:.BiblesApiGetBiblesRequest = {
  // string | ISO 639-3 three digit language code used to filter results (optional)
  language: "eng",
  // string | Bible abbreviation to search for (optional)
  abbreviation: "NIV",
  // string | Bible name to search for (optional)
  name: "New International Version",
  // string | Comma separated list of Bible Ids to return (optional)
  ids: "78a9f6124f344018-01,a761ca71e0b3ddcf-01",
  // boolean | When `true`, the returned Bibles will include additional Bible details (e.g. copyright and promo info) (optional)
  includeFullDetails: false,
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
 **includeFullDetails** | [**boolean**] | When &#x60;true&#x60;, the returned Bibles will include additional Bible details (e.g. copyright and promo info) | (optional) defaults to false


### Return type

**GetBibles200Response**

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


