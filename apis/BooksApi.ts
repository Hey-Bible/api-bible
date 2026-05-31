// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { GetBook200Response } from '../models/GetBook200Response.ts';
import { GetBooks200Response } from '../models/GetBooks200Response.ts';

/**
 * no description
 */
export class BooksApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Gets a single `Book` object for a given `bibleId` and `bookId`.   A `Book` object represents a single book (Matthew, Mark, etc.) of a single Bible. Each `Book` is accessible via a **Book ID**, a 3-digit code representing the book\'s name. A few examples are:  | Book Name | Book ID | | --------- | ------- | | Genesis   | `GEN`   | | Mark      | `MRK`   | | 1 John    | `1JN`   |
     * Get a Book
     * @param bibleId The ID of the Bible you are looking to fetch
     * @param bookId The Book ID you are looking to fetch
     * @param includeChapters When &#x60;true&#x60;, returns available chapter information for each book
     */
    public async getBook(bibleId: string, bookId: string, includeChapters?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bibleId' is not null or undefined
        if (bibleId === null || bibleId === undefined) {
            throw new RequiredError("BooksApi", "getBook", "bibleId");
        }


        // verify required parameter 'bookId' is not null or undefined
        if (bookId === null || bookId === undefined) {
            throw new RequiredError("BooksApi", "getBook", "bookId");
        }



        // Path Params
        const localVarPath = '/bibles/{bibleId}/books/{bookId}'
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
     * List Books in a Bible
     * @param bibleId The ID of the Bible you are looking to fetch
     * @param includeChapters When &#x60;true&#x60;, returns available chapter information for each book
     * @param includeChaptersAndSections When &#x60;true&#x60;, returns available chapter and section (if available) information for each book
     */
    public async getBooks(bibleId: string, includeChapters?: boolean, includeChaptersAndSections?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bibleId' is not null or undefined
        if (bibleId === null || bibleId === undefined) {
            throw new RequiredError("BooksApi", "getBooks", "bibleId");
        }




        // Path Params
        const localVarPath = '/bibles/{bibleId}/books'
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

}

export class BooksApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBook
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBook(response: ResponseContext): Promise<GetBook200Response > {
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
     * @params response Response returned by the server for a request to getBooks
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBooks(response: ResponseContext): Promise<GetBooks200Response > {
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

}
