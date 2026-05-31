// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { GetAudioBible200Response } from '../models/GetAudioBible200Response.ts';
import { GetAudioBibles200Response } from '../models/GetAudioBibles200Response.ts';
import { GetAudioChapter200Response } from '../models/GetAudioChapter200Response.ts';
import { GetBook200Response } from '../models/GetBook200Response.ts';
import { GetBooks200Response } from '../models/GetBooks200Response.ts';
import { GetChapters200Response } from '../models/GetChapters200Response.ts';

/**
 * no description
 */
export class AudioBiblesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Gets a single `AudioBible` for a given `bibleId`  An `AudioBible` object represents a single auditory translation (NIV, ESV, etc.) of the Bible. Each Bible is accessible via its **Bible ID**, a string consisting of a 16-digit unique string followed by a _publication number_ (`-01`, `-02`). A few popular examples are:  | Bible                                  | Bible ID              | | -------------------------------------- | --------------------- | | New International Version (**NIV**)    | `78a9f6124f344018-01` | | New American Standard Bible (**NASB**) | `a761ca71e0b3ddcf-01` | | Christian Standard Bible (**CSB**)     | `a556c5305ee15c3f-01` |
     * Get an Audio Bible
     * @param bibleId The ID of the Bible you are looking to fetch
     */
    public async getAudioBible(bibleId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bibleId' is not null or undefined
        if (bibleId === null || bibleId === undefined) {
            throw new RequiredError("AudioBiblesApi", "getAudioBible", "bibleId");
        }


        // Path Params
        const localVarPath = '/audio-bibles/{bibleId}'
            .replace('{' + 'bibleId' + '}', encodeURIComponent(String(bibleId)));

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
     * Lists `AudioBible` objects authorized for current API Key.  **Audio Bibles** are nearly identical to [Bibles](https://docs.api.bible/guides/bibles), including their content structure. Audio Bibles, however, have one audio file for each chapter and therefore cannot be queried at the verse level. This is why Audio Bibles are queried separately from normal Bibles.  Audio Bible availability via API.Bible requires special licensing. For more information, please reach out to [support@api.bible](mailto:support@api.bible). 
     * List Available Audio Bibles
     * @param language ISO 639-3 three digit language code used to filter results
     * @param abbreviation Bible abbreviation to search for
     * @param name Bible name to search for
     * @param ids Comma separated list of Bible Ids to return
     * @param bibleId &#x60;bibleId&#x60; of related text Bible used to filter audio Bible results
     * @param includeFullDetails When &#x60;true&#x60;, the returned Bibles will include additional Bible details (e.g. copyright and promo info)
     */
    public async getAudioBibles(language?: string, abbreviation?: string, name?: string, ids?: string, bibleId?: string, includeFullDetails?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/audio-bibles';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (language !== undefined) {
            requestContext.setQueryParam("language", ObjectSerializer.serialize(language, "string", ""));
        }

        // Query Params
        if (abbreviation !== undefined) {
            requestContext.setQueryParam("abbreviation", ObjectSerializer.serialize(abbreviation, "string", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }

        // Query Params
        if (ids !== undefined) {
            requestContext.setQueryParam("ids", ObjectSerializer.serialize(ids, "string", ""));
        }

        // Query Params
        if (bibleId !== undefined) {
            requestContext.setQueryParam("bibleId", ObjectSerializer.serialize(bibleId, "string", ""));
        }

        // Query Params
        if (includeFullDetails !== undefined) {
            requestContext.setQueryParam("include-full-details", ObjectSerializer.serialize(includeFullDetails, "boolean", ""));
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
     * Gets a single `Book` object for a given `bibleId` and `bookId`  A `Book` object represents a single book (Matthew, Mark, etc.) of a single Bible. Each `Book` is accessible via a **Book ID**, a 3-digit code representing the book\'s name. A few examples are:  | Book Name | Book ID | | --------- | ------- | | Genesis   | `GEN`   | | Mark      | `MRK`   | | 1 John    | `1JN`   | 
     * Get an Audio Book
     * @param bibleId The ID of the Bible you are looking to fetch
     * @param bookId The Book ID you are looking to fetch
     * @param includeChapters When &#x60;true&#x60;, returns available chapter information for each book
     */
    public async getAudioBook(bibleId: string, bookId: string, includeChapters?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bibleId' is not null or undefined
        if (bibleId === null || bibleId === undefined) {
            throw new RequiredError("AudioBiblesApi", "getAudioBook", "bibleId");
        }


        // verify required parameter 'bookId' is not null or undefined
        if (bookId === null || bookId === undefined) {
            throw new RequiredError("AudioBiblesApi", "getAudioBook", "bookId");
        }



        // Path Params
        const localVarPath = '/audio-bibles/{bibleId}/books/{bookId}'
            .replace('{' + 'bibleId' + '}', encodeURIComponent(String(bibleId)))
            .replace('{' + 'bookId' + '}', encodeURIComponent(String(bookId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeChapters !== undefined) {
            requestContext.setQueryParam("include-chapters", ObjectSerializer.serialize(includeChapters, "boolean", ""));
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
     * Lists `Book` objects for a given `bibleId`  A `Book` object represents a single book (Matthew, Mark, etc.) of a single Bible. Each `Book` is accessible via a **Book ID**, a 3-digit code representing the book\'s name. A few examples are:  | Book Name | Book ID | | --------- | ------- | | Genesis   | `GEN`   | | Mark      | `MRK`   | | 1 John    | `1JN`   |
     * List Books in an Audio Bible
     * @param bibleId The ID of the Bible you are looking to fetch
     * @param includeChapters When &#x60;true&#x60;, returns available chapter information for each book
     * @param includeChaptersAndSections When &#x60;true&#x60;, returns available chapter and section (if available) information for each book
     */
    public async getAudioBooks(bibleId: string, includeChapters?: boolean, includeChaptersAndSections?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bibleId' is not null or undefined
        if (bibleId === null || bibleId === undefined) {
            throw new RequiredError("AudioBiblesApi", "getAudioBooks", "bibleId");
        }




        // Path Params
        const localVarPath = '/audio-bibles/{bibleId}/books'
            .replace('{' + 'bibleId' + '}', encodeURIComponent(String(bibleId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeChapters !== undefined) {
            requestContext.setQueryParam("include-chapters", ObjectSerializer.serialize(includeChapters, "boolean", ""));
        }

        // Query Params
        if (includeChaptersAndSections !== undefined) {
            requestContext.setQueryParam("include-chapters-and-sections", ObjectSerializer.serialize(includeChaptersAndSections, "boolean", ""));
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
     * Gets a single `AudioChapter` object for a given `bible` and `chapterId`.  A presigned link to the mp3 audio file for this audio chapter will be included in the `resourceUrl` field. This link is unique to your request and will will expire, so it is recommended to download that audio file using that link as quickly as you are able. It is **not** recommended that you stream audio directly from the provided link, as you will run into a number of ongoing issues.  Some audio chapters will include `timecodes`. These allow you to match verses in a chapter to a specific time code in the audio file. This can be helpful if you are using both text and audio Bibles and would like to highlight the verse as it is being read.
     * Get an Audio Chapter
     * @param bibleId The ID of the Bible you are looking to fetch
     * @param chapterId The Chapter ID you are looking to fetch
     */
    public async getAudioChapter(bibleId: string, chapterId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bibleId' is not null or undefined
        if (bibleId === null || bibleId === undefined) {
            throw new RequiredError("AudioBiblesApi", "getAudioChapter", "bibleId");
        }


        // verify required parameter 'chapterId' is not null or undefined
        if (chapterId === null || chapterId === undefined) {
            throw new RequiredError("AudioBiblesApi", "getAudioChapter", "chapterId");
        }


        // Path Params
        const localVarPath = '/audio-bibles/{bibleId}/chapters/{chapterId}'
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
     * Lists `Chapter` objects for a given `bibleId` and `bookId`  A `Chapter` object represents a single chapter of the Bible. Each Chapter is accessible via its **Chapter ID**, a string consisting of a [Book](https://docs.api.bible/guides/books) ID and a chapter number. A few examples are:  | Chapter       | Chapter ID | | ------------- | ---------- | | Genesis 1     | `GEN.1`    | | John 3        | `JHN.3`    | | Revelation 22 | `REV.22`   |  *Note: This endpoint does not return verse content* 
     * List Audio Chapters in an Audio Book
     * @param bibleId The ID of the Bible you are looking to fetch
     * @param bookId The Book ID you are looking to fetch
     */
    public async getAudioChapters(bibleId: string, bookId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bibleId' is not null or undefined
        if (bibleId === null || bibleId === undefined) {
            throw new RequiredError("AudioBiblesApi", "getAudioChapters", "bibleId");
        }


        // verify required parameter 'bookId' is not null or undefined
        if (bookId === null || bookId === undefined) {
            throw new RequiredError("AudioBiblesApi", "getAudioChapters", "bookId");
        }


        // Path Params
        const localVarPath = '/audio-bibles/{bibleId}/books/{bookId}/chapters'
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

export class AudioBiblesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAudioBible
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAudioBible(response: ResponseContext): Promise<GetAudioBible200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetAudioBible200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetAudioBible200Response", ""
            ) as GetAudioBible200Response;
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
            throw new ApiException<undefined>(response.httpStatusCode, "#### Not Found    Unable to find a Bible with the given &#x60;{bibleId}&#x60;", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetAudioBible200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetAudioBible200Response", ""
            ) as GetAudioBible200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAudioBibles
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAudioBibles(response: ResponseContext): Promise<GetAudioBibles200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetAudioBibles200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetAudioBibles200Response", ""
            ) as GetAudioBibles200Response;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "#### Bad Request\\r\\n\\r\\nInvalid language code provided", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "#### Unauthorized    Missing or Invalid API Token provided.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetAudioBibles200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetAudioBibles200Response", ""
            ) as GetAudioBibles200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAudioBook
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAudioBook(response: ResponseContext): Promise<GetBook200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetBook200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetBook200Response", ""
            ) as GetBook200Response;
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
            const body: GetBook200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetBook200Response", ""
            ) as GetBook200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAudioBooks
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAudioBooks(response: ResponseContext): Promise<GetBooks200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetBooks200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetBooks200Response", ""
            ) as GetBooks200Response;
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

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetBooks200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetBooks200Response", ""
            ) as GetBooks200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

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
