// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { SearchBible200Response } from '../models/SearchBible200Response.ts';

/**
 * no description
 */
export class SearchApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * A search will attempt to match all verses with the list of keywords provided in the query string. The order of the keywords does not matter, however _all listed keywords must be present in a verse for it to be considered a match_.  Wildcard searches are supported, and can be used to match partial results:  | Wildcard | Description                    | Example                                                      | | -------- | ------------------------------ | ------------------------------------------------------------ | | `*`      | Matches any character sequence | \"wo\\*d\" finds text such as \"word\", \"world\", and \"worshipped\" | | `?`      | Matches any single character   | \"l?ve\" finds text such as \"live\" and \"love\"                  |  The `text` property of each search result contains only the verse text, it does not contain footnote references or additional formatting. However, more information on a verse can be queried directly by [fetching a single verse](https://docs.api.bible/guides/verses#fetching-a-single-verse). 
     * Search a Bible
     * @param bibleId The ID of the Bible you are looking to fetch
     * @param query Comma-separated search keywords or a passage reference. Supported wildcards are &#x60;*&#x60; and &#x60;?&#x60;. The &#x60;*&#x60; wildcard matches any character sequence (e.g. searching for \&quot;wo*d\&quot; finds text such as \&quot;word\&quot;, \&quot;world\&quot;, and \&quot;worshipped\&quot;). The &#x60;?&#x60; wildcard matches any matches any single character (e.g. searching for \&quot;l?ve\&quot; finds text such as \&quot;live\&quot; and \&quot;love\&quot;).
     * @param limit Limits the number of search results returned. Used with the &#x60;offset&#x60; parameter to paginate results.
     * @param offset Offsets results by the given amount. Used with the &#x60;limit&#x60; parameter to paginate results.
     * @param sort Sorts search results
     * @param range Comma-separated list of Passage IDs which the search will be limited to. 
     * @param fuzziness Sets the fuzziness of a search to account for misspellings. Values can be 0, 1, 2, or AUTO. Defaults to AUTO which varies depending on the 
     */
    public async searchBible(bibleId: string, query?: string, limit?: number, offset?: number, sort?: 'relevance' | 'canonical' | 'reverse-canonical', range?: string, fuzziness?: 'AUTO' | '0' | '1' | '2', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bibleId' is not null or undefined
        if (bibleId === null || bibleId === undefined) {
            throw new RequiredError("SearchApi", "searchBible", "bibleId");
        }








        // Path Params
        const localVarPath = '/bibles/{bibleId}/search'
            .replace('{' + 'bibleId' + '}', encodeURIComponent(String(bibleId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'relevance' | 'canonical' | 'reverse-canonical'", ""));
        }

        // Query Params
        if (range !== undefined) {
            requestContext.setQueryParam("range", ObjectSerializer.serialize(range, "string", ""));
        }

        // Query Params
        if (fuzziness !== undefined) {
            requestContext.setQueryParam("fuzziness", ObjectSerializer.serialize(fuzziness, "'AUTO' | '0' | '1' | '2'", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class SearchApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchBible
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchBible(response: ResponseContext): Promise<SearchBible200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SearchBible200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SearchBible200Response", ""
            ) as SearchBible200Response;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "#### Bad Request     Invalid Bible ID supplied", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "#### Unauthorized    Missing or Invalid API Token provided.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "#### Forbidden    Not authorized to access this Bible", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "#### Not Found    Unable to find a section with the given &#x60;{sectionId}&#x60;", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SearchBible200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SearchBible200Response", ""
            ) as SearchBible200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
