// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { GetAudioChapter200Response } from '../models/GetAudioChapter200Response.ts';
import { GetChapter200Response } from '../models/GetChapter200Response.ts';
import { GetChapters200Response } from '../models/GetChapters200Response.ts';

/**
 * no description
 */
export class ChaptersApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Gets a single `Chapter` object for a given `audioBibleId` and `chapterId`. This AudioChapter object also includes an `resourceUrl` property with a HTTP URL to the mp3 audio resource for the chapter.  The `resourceUrl` is unique per request and expires in XX minutes.  The `expiresAt` property provides the Unix time value of `resourceUrl` expiration. 
     * @param audioBibleId Id of Bible whose Chapter to fetch
     * @param chapterId Id of the Chapter to fetch
     */
    public async getAudioChapter(audioBibleId: string, chapterId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'audioBibleId' is not null or undefined
        if (audioBibleId === null || audioBibleId === undefined) {
            throw new RequiredError("ChaptersApi", "getAudioChapter", "audioBibleId");
        }


        // verify required parameter 'chapterId' is not null or undefined
        if (chapterId === null || chapterId === undefined) {
            throw new RequiredError("ChaptersApi", "getAudioChapter", "chapterId");
        }


        // Path Params
        const localVarPath = '/v1/audio-bibles/{audioBibleId}/chapters/{chapterId}'
            .replace('{' + 'audioBibleId' + '}', encodeURIComponent(String(audioBibleId)))
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
     * Gets an array of `Chapter` objects for a given `audioBibleId` and `bookId` 
     * @param audioBibleId Id of Bible whose Chapters to fetch
     * @param bookId Id of the Book whose Chapters to fetch
     */
    public async getAudioChapters(audioBibleId: string, bookId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'audioBibleId' is not null or undefined
        if (audioBibleId === null || audioBibleId === undefined) {
            throw new RequiredError("ChaptersApi", "getAudioChapters", "audioBibleId");
        }


        // verify required parameter 'bookId' is not null or undefined
        if (bookId === null || bookId === undefined) {
            throw new RequiredError("ChaptersApi", "getAudioChapters", "bookId");
        }


        // Path Params
        const localVarPath = '/v1/audio-bibles/{audioBibleId}/books/{bookId}/chapters'
            .replace('{' + 'audioBibleId' + '}', encodeURIComponent(String(audioBibleId)))
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
     * Gets a single `Chapter` object for a given `bibleId` and `chapterId`. This Chapter object also includes an `content` property with all verses for the Chapter. 
     * @param bibleId Id of Bible whose Chapter to fetch
     * @param chapterId Id of the Chapter to fetch
     * @param contentType Content type to be returned in the content property.  Supported values are &#x60;html&#x60; (default), &#x60;json&#x60; (beta), and &#x60;text&#x60; (beta)
     * @param includeNotes Include footnotes in content
     * @param includeTitles Include section titles in content
     * @param includeChapterNumbers Include chapter numbers in content
     * @param includeVerseNumbers Include verse numbers in content.
     * @param includeVerseSpans Include spans that wrap verse numbers and verse text for bible content.
     * @param parallels Comma delimited list of bibleIds to include
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
        const localVarPath = '/v1/bibles/{bibleId}/chapters/{chapterId}'
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
     * Gets an array of `Chapter` objects for a given `bibleId` and `bookId` 
     * @param bibleId Id of Bible whose Chapters to fetch
     * @param bookId Id of the Book whose Chapters to fetch
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
        const localVarPath = '/v1/bibles/{bibleId}/books/{bookId}/chapters'
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
     * @params response Response returned by the server for a request to getAudioChapter
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAudioChapter(response: ResponseContext): Promise<GetAudioChapter200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetAudioChapter200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetAudioChapter200Response", ""
            ) as GetAudioChapter200Response;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid ID supplied", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized for API access.  Missing or Invalid API Token provided.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not authorized to retrieve Chapters for this Bible", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Chapter not found", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetAudioChapter200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetAudioChapter200Response", ""
            ) as GetAudioChapter200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAudioChapters
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAudioChapters(response: ResponseContext): Promise<GetChapters200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetChapters200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetChapters200Response", ""
            ) as GetChapters200Response;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid ID supplied", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized for API access.  Missing or Invalid API Token provided.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not authorized to retrieve Chapters for this Bible", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Book not found", undefined, response.headers);
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
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid ID supplied", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized for API access.  Missing or Invalid API Token provided.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not authorized to retrieve Chapters for this Bible", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Chapter not found", undefined, response.headers);
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
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid ID supplied", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized for API access.  Missing or Invalid API Token provided.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not authorized to retrieve Chapters for this Bible", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Book not found", undefined, response.headers);
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
