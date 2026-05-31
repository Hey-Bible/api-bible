// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { GetPassage200Response } from '../models/GetPassage200Response.ts';

/**
 * no description
 */
export class PassagesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Gets a `Passage` object for a given `bibleId` and `passageId`.  A `Passage` object represents an arbitrary range of verses from the Bible. These ranges are not predefined values, but instead depend on the given input, known as a **Passage ID**. A **Passsage ID** consists of two [Verse](https://docs.api.bible/guides/verses) IDs separated by a `-`. These **Verse IDs** can span chapters and books, though passages are limited to 200 verses. A few passage examples are:  | Verse Range                             | Passage ID          | | --------------------------------------- | ------------------- | | Genesis 1:1 - Genesis 2:3               | `GEN.1.1-GEN.2.3`   | | John 3:1 - John 3:16                    | `JHN.3:1-JHN.3.16`  | | 1 Corinthians 16:1 - 2 Corinthians 1:23 | `1CO.16.1-2CO.1.23` |  In addition to information about the given passage, this endpoint will also return all verse content included in that passage within the `content` field. 
     * Get a Passage
     * @param bibleId The ID of the Bible you are looking to fetch
     * @param passageId The Passage ID you are looking to fetch
     * @param contentType Determines the structure of returned verse content
     * @param includeNotes When &#x60;true&#x60;, returns footnotes in verse content
     * @param includeTitles When &#x60;true&#x60;, returns section titles in verse content
     * @param includeChapterNumbers When &#x60;true&#x60;, returns chapter numbers in verse content
     * @param includeVerseNumbers When &#x60;true&#x60;, returns verse numbers in verse content
     * @param includeVerseSpans When &#x60;true&#x60;, returns spans that wrap verse numbers and verse text in content
     * @param parallels Comma-separated list of Bible IDs. When included, returns parallel verses from the given Bibles
     * @param useOrgId When &#x60;true&#x60;, uses the supplied id(s) to match the &#x60;verseOrgId&#x60; instead of the &#x60;verseId&#x60;
     */
    public async getPassage(bibleId: string, passageId: string, contentType?: 'html' | 'json' | 'text', includeNotes?: boolean, includeTitles?: boolean, includeChapterNumbers?: boolean, includeVerseNumbers?: boolean, includeVerseSpans?: boolean, parallels?: string, useOrgId?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bibleId' is not null or undefined
        if (bibleId === null || bibleId === undefined) {
            throw new RequiredError("PassagesApi", "getPassage", "bibleId");
        }


        // verify required parameter 'passageId' is not null or undefined
        if (passageId === null || passageId === undefined) {
            throw new RequiredError("PassagesApi", "getPassage", "passageId");
        }










        // Path Params
        const localVarPath = '/bibles/{bibleId}/passages/{passageId}'
            .replace('{' + 'bibleId' + '}', encodeURIComponent(String(bibleId)))
            .replace('{' + 'passageId' + '}', encodeURIComponent(String(passageId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (contentType !== undefined) {
            requestContext.setQueryParam("content-type", ObjectSerializer.serialize(contentType, "'html' | 'json' | 'text'", ""));
        }

        // Query Params
        if (includeNotes !== undefined) {
            requestContext.setQueryParam("include-notes", ObjectSerializer.serialize(includeNotes, "boolean", ""));
        }

        // Query Params
        if (includeTitles !== undefined) {
            requestContext.setQueryParam("include-titles", ObjectSerializer.serialize(includeTitles, "boolean", ""));
        }

        // Query Params
        if (includeChapterNumbers !== undefined) {
            requestContext.setQueryParam("include-chapter-numbers", ObjectSerializer.serialize(includeChapterNumbers, "boolean", ""));
        }

        // Query Params
        if (includeVerseNumbers !== undefined) {
            requestContext.setQueryParam("include-verse-numbers", ObjectSerializer.serialize(includeVerseNumbers, "boolean", ""));
        }

        // Query Params
        if (includeVerseSpans !== undefined) {
            requestContext.setQueryParam("include-verse-spans", ObjectSerializer.serialize(includeVerseSpans, "boolean", ""));
        }

        // Query Params
        if (parallels !== undefined) {
            requestContext.setQueryParam("parallels", ObjectSerializer.serialize(parallels, "string", ""));
        }

        // Query Params
        if (useOrgId !== undefined) {
            requestContext.setQueryParam("use-org-id", ObjectSerializer.serialize(useOrgId, "boolean", ""));
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

export class PassagesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPassage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPassage(response: ResponseContext): Promise<GetPassage200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetPassage200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPassage200Response", ""
            ) as GetPassage200Response;
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
            throw new ApiException<undefined>(response.httpStatusCode, "#### Not Found    Unable to find a passage with the given &#x60;{passageId}&#x60;", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetPassage200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPassage200Response", ""
            ) as GetPassage200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
