// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { GetChapter200Response } from '../models/GetChapter200Response.ts';
import { GetChapters200Response } from '../models/GetChapters200Response.ts';

/**
 * no description
 */
export class ChaptersApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Gets a single `Chapter` object for a given `bibleId` and `chapterId`.  A `Chapter` object represents a single chapter of the Bible. Each Chapter is accessible via its **Chapter ID**, a string consisting of a [Book](https://docs.api.bible/guides/books) ID and a chapter number. A few examples are:  | Chapter       | Chapter ID | | ------------- | ---------- | | Genesis 1     | `GEN.1`    | | John 3        | `JHN.3`    | | Revelation 22 | `REV.22`   |  In addition to information about the given chapter, this endpoint will also return all verse content included in that chapter within the `content` field.
     * Get a Chapter
     * @param bibleId The ID of the Bible you are looking to fetch
     * @param chapterId The Chapter ID you are looking to fetch
     * @param contentType Determines the structure of returned verse content
     * @param includeNotes When &#x60;true&#x60;, returns footnotes in verse content
     * @param includeTitles When &#x60;true&#x60;, returns section titles in verse content
     * @param includeChapterNumbers When &#x60;true&#x60;, returns chapter numbers in verse content
     * @param includeVerseNumbers When &#x60;true&#x60;, returns verse numbers in verse content
     * @param includeVerseSpans When &#x60;true&#x60;, returns spans that wrap verse numbers and verse text in content
     * @param parallels Comma-separated list of Bible IDs. When included, returns parallel verses from the given Bibles
     */
    public async getChapter(bibleId: string, chapterId: string, contentType?: 'html' | 'json' | 'text', includeNotes?: boolean, includeTitles?: boolean, includeChapterNumbers?: boolean, includeVerseNumbers?: boolean, includeVerseSpans?: boolean, parallels?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bibleId' is not null or undefined
        if (bibleId === null || bibleId === undefined) {
            throw new RequiredError("ChaptersApi", "getChapter", "bibleId");
        }


        // verify required parameter 'chapterId' is not null or undefined
        if (chapterId === null || chapterId === undefined) {
            throw new RequiredError("ChaptersApi", "getChapter", "chapterId");
        }









        // Path Params
        const localVarPath = '/bibles/{bibleId}/chapters/{chapterId}'
            .replace('{' + 'bibleId' + '}', encodeURIComponent(String(bibleId)))
            .replace('{' + 'chapterId' + '}', encodeURIComponent(String(chapterId)));

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

    /**
     * Lists `Chapter` objects for a given `bibleId` and `bookId`  A `Chapter` object represents a single chapter of the Bible. Each Chapter is accessible via its **Chapter ID**, a string consisting of a [Book](#/components/schemas/Book) ID and a chapter number. A few examples are:  | Chapter       | Chapter ID | | ------------- | ---------- | | Genesis 1     | `GEN.1`    | | John 3        | `JHN.3`    | | Revelation 22 | `REV.22`   |  *Note: This endpoint does not return verse content*
     * List Chapters in a Book
     * @param bibleId The ID of the Bible you are looking to fetch
     * @param bookId The Book ID you are looking to fetch
     */
    public async getChapters(bibleId: string, bookId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bibleId' is not null or undefined
        if (bibleId === null || bibleId === undefined) {
            throw new RequiredError("ChaptersApi", "getChapters", "bibleId");
        }


        // verify required parameter 'bookId' is not null or undefined
        if (bookId === null || bookId === undefined) {
            throw new RequiredError("ChaptersApi", "getChapters", "bookId");
        }


        // Path Params
        const localVarPath = '/bibles/{bibleId}/books/{bookId}/chapters'
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

}

export class ChaptersApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getChapter
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getChapter(response: ResponseContext): Promise<GetChapter200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetChapter200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetChapter200Response", ""
            ) as GetChapter200Response;
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
            throw new ApiException<undefined>(response.httpStatusCode, "#### Not Found    Unable to find a chapter with the given &#x60;{chapterId}&#x60;", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetChapter200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetChapter200Response", ""
            ) as GetChapter200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getChapters
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getChapters(response: ResponseContext): Promise<GetChapters200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetChapters200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetChapters200Response", ""
            ) as GetChapters200Response;
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
            const body: GetChapters200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetChapters200Response", ""
            ) as GetChapters200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
