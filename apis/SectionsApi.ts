// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { GetBookSections200Response } from '../models/GetBookSections200Response.ts';
import { GetSection200Response } from '../models/GetSection200Response.ts';

/**
 * no description
 */
export class SectionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Lists `Section` objects for a given `bibleId` and `bookId`  A `Section` object represents a known range of verses in the Bible, typically tied to a story. Each Section is accessible via its **Section ID**, a string consisting of a [Book](https://docs.api.bible/guides/books) ID and a section number. Not every Bible has sections enabled. For Bibles with sections enabled, sections are sequential and _should_ cover nearly every verse if queried in order. A few examples from the book of Genesis are:  | Section Title | Verse Range                | Section ID | | ------------- | -------------------------- | ---------- | | The Beginning | Genesis 1:1 - Genesis 2:3  | `GEN.S1`   | | Adam and Eve  | Genesis 2:4 - Genesis 2:25 | `GEN.S2`   | | The Fall      | Genesis 3:1 - Genesis 3:24 | `GEN.S3`   |  *Note: This endpoint does not return verse content* 
     * List Sections in a Book
     * @param bibleId The ID of the Bible you are looking to fetch
     * @param bookId The Book ID you are looking to fetch
     */
    public async getBookSections(bibleId: string, bookId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bibleId' is not null or undefined
        if (bibleId === null || bibleId === undefined) {
            throw new RequiredError("SectionsApi", "getBookSections", "bibleId");
        }


        // verify required parameter 'bookId' is not null or undefined
        if (bookId === null || bookId === undefined) {
            throw new RequiredError("SectionsApi", "getBookSections", "bookId");
        }


        // Path Params
        const localVarPath = '/bibles/{bibleId}/books/{bookId}/sections'
            .replace('{' + 'bibleId' + '}', encodeURIComponent(String(bibleId)))
            .replace('{' + 'bookId' + '}', encodeURIComponent(String(bookId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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

    /**
     * Lists `Section` objects for a given `bibleId` and `chapterId`  Lists `Section` objects for a given `bibleId` and `bookId`  A `Section` object represents a known range of verses in the Bible, typically tied to a story. Each Section is accessible via its **Section ID**, a string consisting of a [Book](https://docs.api.bible/guides/books) ID and a section number. Not every Bible has sections enabled. For Bibles with sections enabled, sections are sequential and _should_ cover nearly every verse if queried in order. A few examples from the book of Genesis are:  | Section Title | Verse Range                | Section ID | | ------------- | -------------------------- | ---------- | | The Beginning | Genesis 1:1 - Genesis 2:3  | `GEN.S1`   | | Adam and Eve  | Genesis 2:4 - Genesis 2:25 | `GEN.S2`   | | The Fall      | Genesis 3:1 - Genesis 3:24 | `GEN.S3`   |  *Note: This endpoint does not return verse content* 
     * List Sections in a Chapter
     * @param bibleId The ID of the Bible you are looking to fetch
     * @param chapterId The Chapter ID you are looking to fetch
     */
    public async getChapterSections(bibleId: string, chapterId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bibleId' is not null or undefined
        if (bibleId === null || bibleId === undefined) {
            throw new RequiredError("SectionsApi", "getChapterSections", "bibleId");
        }


        // verify required parameter 'chapterId' is not null or undefined
        if (chapterId === null || chapterId === undefined) {
            throw new RequiredError("SectionsApi", "getChapterSections", "chapterId");
        }


        // Path Params
        const localVarPath = '/bibles/{bibleId}/chapters/{chapterId}/sections'
            .replace('{' + 'bibleId' + '}', encodeURIComponent(String(bibleId)))
            .replace('{' + 'chapterId' + '}', encodeURIComponent(String(chapterId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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

    /**
     * Gets a single `Section` object for a given `bibleId` and `sectionId`.   Lists `Section` objects for a given `bibleId` and `bookId`  A `Section` object represents a known range of verses in the Bible, typically tied to a story. Each Section is accessible via its **Section ID**, a string consisting of a [Book](https://docs.api.bible/guides/books) ID and a section number. Not every Bible has sections enabled. For Bibles with sections enabled, sections are sequential and _should_ cover nearly every verse if queried in order. A few examples from the book of Genesis are:  | Section Title | Verse Range                | Section ID | | ------------- | -------------------------- | ---------- | | The Beginning | Genesis 1:1 - Genesis 2:3  | `GEN.S1`   | | Adam and Eve  | Genesis 2:4 - Genesis 2:25 | `GEN.S2`   | | The Fall      | Genesis 3:1 - Genesis 3:24 | `GEN.S3`   |  In addition to information about the given section, this endpoint will also return all verse content included in that section within the `content` field. 
     * Get a Section
     * @param bibleId The ID of the Bible you are looking to fetch
     * @param sectionId The Section ID you are looking to fetch
     * @param contentType Determines the structure of returned verse content
     * @param includeNotes When &#x60;true&#x60;, returns footnotes in verse content
     * @param includeTitles When &#x60;true&#x60;, returns section titles in verse content
     * @param includeChapterNumbers When &#x60;true&#x60;, returns chapter numbers in verse content
     * @param includeVerseNumbers When &#x60;true&#x60;, returns verse numbers in verse content
     * @param includeVerseSpans When &#x60;true&#x60;, returns spans that wrap verse numbers and verse text in content
     * @param parallels Comma-separated list of Bible IDs. When included, returns parallel verses from the given Bibles
     */
    public async getSection(bibleId: string, sectionId: string, contentType?: 'html' | 'json' | 'text', includeNotes?: boolean, includeTitles?: boolean, includeChapterNumbers?: boolean, includeVerseNumbers?: boolean, includeVerseSpans?: boolean, parallels?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bibleId' is not null or undefined
        if (bibleId === null || bibleId === undefined) {
            throw new RequiredError("SectionsApi", "getSection", "bibleId");
        }


        // verify required parameter 'sectionId' is not null or undefined
        if (sectionId === null || sectionId === undefined) {
            throw new RequiredError("SectionsApi", "getSection", "sectionId");
        }









        // Path Params
        const localVarPath = '/bibles/{bibleId}/sections/{sectionId}'
            .replace('{' + 'bibleId' + '}', encodeURIComponent(String(bibleId)))
            .replace('{' + 'sectionId' + '}', encodeURIComponent(String(sectionId)));

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

export class SectionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBookSections
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBookSections(response: ResponseContext): Promise<GetBookSections200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetBookSections200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetBookSections200Response", ""
            ) as GetBookSections200Response;
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
            throw new ApiException<undefined>(response.httpStatusCode, "#### Not Found    Unable to find a book with the given &#x60;{bookId}&#x60;", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetBookSections200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetBookSections200Response", ""
            ) as GetBookSections200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getChapterSections
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getChapterSections(response: ResponseContext): Promise<GetBookSections200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetBookSections200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetBookSections200Response", ""
            ) as GetBookSections200Response;
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
            throw new ApiException<undefined>(response.httpStatusCode, "#### Not Found    Unable to find a book with the given &#x60;{bookId}&#x60;", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetBookSections200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetBookSections200Response", ""
            ) as GetBookSections200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSection(response: ResponseContext): Promise<GetSection200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetSection200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetSection200Response", ""
            ) as GetSection200Response;
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
            const body: GetSection200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetSection200Response", ""
            ) as GetSection200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
