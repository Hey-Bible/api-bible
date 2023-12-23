import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import { Configuration} from '../configuration.ts'
import { Observable, of, from } from '../rxjsStub.ts';
import {mergeMap, map} from  '../rxjsStub.ts';
import { AudioBible } from '../models/AudioBible.ts';
import { AudioBibleSummary } from '../models/AudioBibleSummary.ts';
import { AudioChapter } from '../models/AudioChapter.ts';
import { AudioChapterTimecodesInner } from '../models/AudioChapterTimecodesInner.ts';
import { Bible } from '../models/Bible.ts';
import { BibleSummary } from '../models/BibleSummary.ts';
import { BibleSummaryCountriesInner } from '../models/BibleSummaryCountriesInner.ts';
import { Book } from '../models/Book.ts';
import { Chapter } from '../models/Chapter.ts';
import { ChapterNext } from '../models/ChapterNext.ts';
import { ChapterSummary } from '../models/ChapterSummary.ts';
import { GetAudioBible200Response } from '../models/GetAudioBible200Response.ts';
import { GetAudioChapter200Response } from '../models/GetAudioChapter200Response.ts';
import { GetBible200Response } from '../models/GetBible200Response.ts';
import { GetBibles200Response } from '../models/GetBibles200Response.ts';
import { GetBook200Response } from '../models/GetBook200Response.ts';
import { GetBookSections200Response } from '../models/GetBookSections200Response.ts';
import { GetBooks200Response } from '../models/GetBooks200Response.ts';
import { GetChapter200Response } from '../models/GetChapter200Response.ts';
import { GetChapters200Response } from '../models/GetChapters200Response.ts';
import { GetPassage200Response } from '../models/GetPassage200Response.ts';
import { GetSection200Response } from '../models/GetSection200Response.ts';
import { GetVerse200Response } from '../models/GetVerse200Response.ts';
import { GetVerses200Response } from '../models/GetVerses200Response.ts';
import { Language } from '../models/Language.ts';
import { Meta } from '../models/Meta.ts';
import { Passage } from '../models/Passage.ts';
import { SearchBible200Response } from '../models/SearchBible200Response.ts';
import { SearchResponse } from '../models/SearchResponse.ts';
import { SearchVerse } from '../models/SearchVerse.ts';
import { Section } from '../models/Section.ts';
import { SectionNext } from '../models/SectionNext.ts';
import { SectionSummary } from '../models/SectionSummary.ts';
import { Verse } from '../models/Verse.ts';
import { VerseNext } from '../models/VerseNext.ts';
import { VerseSummary } from '../models/VerseSummary.ts';

import { BiblesApiRequestFactory, BiblesApiResponseProcessor} from "../apis/BiblesApi.ts";
export class ObservableBiblesApi {
    private requestFactory: BiblesApiRequestFactory;
    private responseProcessor: BiblesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BiblesApiRequestFactory,
        responseProcessor?: BiblesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BiblesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BiblesApiResponseProcessor();
    }

    /**
     * Gets a single audio `Bible` for a given `audioBibleId` 
     * @param audioBibleId Id of audio Bible to be fetched
     */
    public getAudioBible(audioBibleId: string, _options?: Configuration): Observable<GetAudioBible200Response> {
        const requestContextPromise = this.requestFactory.getAudioBible(audioBibleId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAudioBible(rsp)));
            }));
    }

    /**
     * Gets an array of audio `Bible` objects authorized for current API Key 
     * @param language ISO 639-3 three digit language code used to filter results
     * @param abbreviation Bible abbreviation to search for
     * @param name Bible name to search for
     * @param ids Comma separated list of Bible Ids to return
     * @param bibleId bibleId of related text Bible used to filter audio bible results
     * @param includeFullDetails Boolean to include full Bible details (e.g. copyright and promo info)
     */
    public getAudioBibles(language?: string, abbreviation?: string, name?: string, ids?: string, bibleId?: string, includeFullDetails?: boolean, _options?: Configuration): Observable<GetBibles200Response> {
        const requestContextPromise = this.requestFactory.getAudioBibles(language, abbreviation, name, ids, bibleId, includeFullDetails, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAudioBibles(rsp)));
            }));
    }

    /**
     * Gets a single `Bible` for a given `bibleId` 
     * @param bibleId Id of Bible to be fetched
     */
    public getBible(bibleId: string, _options?: Configuration): Observable<GetBible200Response> {
        const requestContextPromise = this.requestFactory.getBible(bibleId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBible(rsp)));
            }));
    }

    /**
     * Gets an array of `Bible` objects authorized for current API Key 
     * @param language ISO 639-3 three digit language code used to filter results
     * @param abbreviation Bible abbreviation to search for
     * @param name Bible name to search for
     * @param ids Comma separated list of Bible Ids to return
     * @param includeFullDetails Boolean to include full Bible details (e.g. copyright and promo info)
     */
    public getBibles(language?: string, abbreviation?: string, name?: string, ids?: string, includeFullDetails?: boolean, _options?: Configuration): Observable<GetBibles200Response> {
        const requestContextPromise = this.requestFactory.getBibles(language, abbreviation, name, ids, includeFullDetails, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBibles(rsp)));
            }));
    }

}

import { BooksApiRequestFactory, BooksApiResponseProcessor} from "../apis/BooksApi.ts";
export class ObservableBooksApi {
    private requestFactory: BooksApiRequestFactory;
    private responseProcessor: BooksApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BooksApiRequestFactory,
        responseProcessor?: BooksApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BooksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BooksApiResponseProcessor();
    }

    /**
     * Gets a single `Book` object for a given `audioBibleId` and `bookId` 
     * @param audioBibleId Id of audio Bible whose Book to fetch
     * @param bookId Id of the Book to fetch
     * @param includeChapters Boolean indicating if an array of chapter summaries should be included in the results. Defaults to false. 
     */
    public getAudioBook(audioBibleId: string, bookId: string, includeChapters?: boolean, _options?: Configuration): Observable<GetBook200Response> {
        const requestContextPromise = this.requestFactory.getAudioBook(audioBibleId, bookId, includeChapters, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAudioBook(rsp)));
            }));
    }

    /**
     * Gets an array of `Book` objects for a given `audioBibleId` 
     * @param audioBibleId Id of audio Bible whose Book to fetch
     * @param includeChapters Boolean indicating if an array of chapter summaries should be included in the results. Defaults to false. 
     * @param includeChaptersAndSections Boolean indicating if an array of chapter summaries and an array of sections should be included in the results. Defaults to false. 
     */
    public getAudioBooks(audioBibleId: string, includeChapters?: boolean, includeChaptersAndSections?: boolean, _options?: Configuration): Observable<GetBooks200Response> {
        const requestContextPromise = this.requestFactory.getAudioBooks(audioBibleId, includeChapters, includeChaptersAndSections, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAudioBooks(rsp)));
            }));
    }

    /**
     * Gets a single `Book` object for a given `bibleId` and `bookId` 
     * @param bibleId Id of Bible whose Book to fetch
     * @param bookId Id of the Book to fetch
     * @param includeChapters Boolean indicating if an array of chapter summaries should be included in the results. Defaults to false. 
     */
    public getBook(bibleId: string, bookId: string, includeChapters?: boolean, _options?: Configuration): Observable<GetBook200Response> {
        const requestContextPromise = this.requestFactory.getBook(bibleId, bookId, includeChapters, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBook(rsp)));
            }));
    }

    /**
     * Gets an array of `Book` objects for a given `bibleId` 
     * @param bibleId Id of Bible whose Book to fetch
     * @param includeChapters Boolean indicating if an array of chapter summaries should be included in the results. Defaults to false. 
     * @param includeChaptersAndSections Boolean indicating if an array of chapter summaries and an array of sections should be included in the results. Defaults to false. 
     */
    public getBooks(bibleId: string, includeChapters?: boolean, includeChaptersAndSections?: boolean, _options?: Configuration): Observable<GetBooks200Response> {
        const requestContextPromise = this.requestFactory.getBooks(bibleId, includeChapters, includeChaptersAndSections, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBooks(rsp)));
            }));
    }

}

import { ChaptersApiRequestFactory, ChaptersApiResponseProcessor} from "../apis/ChaptersApi.ts";
export class ObservableChaptersApi {
    private requestFactory: ChaptersApiRequestFactory;
    private responseProcessor: ChaptersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ChaptersApiRequestFactory,
        responseProcessor?: ChaptersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ChaptersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ChaptersApiResponseProcessor();
    }

    /**
     * Gets a single `Chapter` object for a given `audioBibleId` and `chapterId`. This AudioChapter object also includes an `resourceUrl` property with a HTTP URL to the mp3 audio resource for the chapter.  The `resourceUrl` is unique per request and expires in XX minutes.  The `expiresAt` property provides the Unix time value of `resourceUrl` expiration. 
     * @param audioBibleId Id of Bible whose Chapter to fetch
     * @param chapterId Id of the Chapter to fetch
     */
    public getAudioChapter(audioBibleId: string, chapterId: string, _options?: Configuration): Observable<GetAudioChapter200Response> {
        const requestContextPromise = this.requestFactory.getAudioChapter(audioBibleId, chapterId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAudioChapter(rsp)));
            }));
    }

    /**
     * Gets an array of `Chapter` objects for a given `audioBibleId` and `bookId` 
     * @param audioBibleId Id of Bible whose Chapters to fetch
     * @param bookId Id of the Book whose Chapters to fetch
     */
    public getAudioChapters(audioBibleId: string, bookId: string, _options?: Configuration): Observable<GetChapters200Response> {
        const requestContextPromise = this.requestFactory.getAudioChapters(audioBibleId, bookId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAudioChapters(rsp)));
            }));
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
    public getChapter(bibleId: string, chapterId: string, contentType?: 'html' | 'json' | 'text', includeNotes?: boolean, includeTitles?: boolean, includeChapterNumbers?: boolean, includeVerseNumbers?: boolean, includeVerseSpans?: boolean, parallels?: string, _options?: Configuration): Observable<GetChapter200Response> {
        const requestContextPromise = this.requestFactory.getChapter(bibleId, chapterId, contentType, includeNotes, includeTitles, includeChapterNumbers, includeVerseNumbers, includeVerseSpans, parallels, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChapter(rsp)));
            }));
    }

    /**
     * Gets an array of `Chapter` objects for a given `bibleId` and `bookId` 
     * @param bibleId Id of Bible whose Chapters to fetch
     * @param bookId Id of the Book whose Chapters to fetch
     */
    public getChapters(bibleId: string, bookId: string, _options?: Configuration): Observable<GetChapters200Response> {
        const requestContextPromise = this.requestFactory.getChapters(bibleId, bookId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChapters(rsp)));
            }));
    }

}

import { PassagesApiRequestFactory, PassagesApiResponseProcessor} from "../apis/PassagesApi.ts";
export class ObservablePassagesApi {
    private requestFactory: PassagesApiRequestFactory;
    private responseProcessor: PassagesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PassagesApiRequestFactory,
        responseProcessor?: PassagesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PassagesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PassagesApiResponseProcessor();
    }

    /**
     * Gets a `Passage` object for a given `bibleId` and `passageId`. This Passage object also includes an `content` property with all verses corresponding to the passageId. The `passageId` parameter can represent a chapter, verse, or range of verses. 
     * @param bibleId Id of Bible for passage
     * @param passageId String reference id for the requested passage.
     * @param contentType Content type to be returned in the content property.  Supported values are &#x60;html&#x60; (default), &#x60;json&#x60; (beta), and &#x60;text&#x60; (beta)
     * @param includeNotes Include footnotes in content
     * @param includeTitles Include section titles in content
     * @param includeChapterNumbers Include chapter numbers in content
     * @param includeVerseNumbers Include verse numbers in content.
     * @param includeVerseSpans Include spans that wrap verse numbers and verse text for bible content.
     * @param parallels Comma delimited list of bibleIds to include
     * @param useOrgId Use the supplied id(s) to match the verseOrgId instead of the verseId
     */
    public getPassage(bibleId: string, passageId: string, contentType?: 'html' | 'json' | 'text', includeNotes?: boolean, includeTitles?: boolean, includeChapterNumbers?: boolean, includeVerseNumbers?: boolean, includeVerseSpans?: boolean, parallels?: string, useOrgId?: boolean, _options?: Configuration): Observable<GetPassage200Response> {
        const requestContextPromise = this.requestFactory.getPassage(bibleId, passageId, contentType, includeNotes, includeTitles, includeChapterNumbers, includeVerseNumbers, includeVerseSpans, parallels, useOrgId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPassage(rsp)));
            }));
    }

}

import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi.ts";
export class ObservableSearchApi {
    private requestFactory: SearchApiRequestFactory;
    private responseProcessor: SearchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchApiRequestFactory,
        responseProcessor?: SearchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SearchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SearchApiResponseProcessor();
    }

    /**
     * Gets search results for a given `bibleId` and query string.  Searches will match all verses with the list of keywords provided in the query string. Order of the keywords does not matter. However all keywords must be present in a verse for it to be considered a match. The total number of results returned from a search can be limited by populating the `limit` attribute in the query string with a non-negative integer value.  If no limit value is provide a default of 10 is used. `offset` can be used to traverse paginated results.  So for example if you are using the default `limit` of 10, using an `offset` of 10 will return the second page of results, namely results 11-20. The `text` property of each verse object contains only the verse text.  It does not contain footnote references. However, those can be queried directly using the `/bibles/{bibleId}/verses/{verseId}` endpoint. 
     * @param bibleId Id of Bible to search
     * @param query Search keywords or passage reference.  Supported wildcards are * and ?.   The * wildcard matches any character sequence (e.g. searching for \&quot;wo*d\&quot; finds text such as \&quot;word\&quot;, \&quot;world\&quot;, and \&quot;worshipped\&quot;).   The ? wildcard matches any matches any single character (e.g. searching for \&quot;l?ve\&quot; finds text such as \&quot;live\&quot; and \&quot;love\&quot;). 
     * @param limit Integer limit for how many matching results to return. Default is 10.
     * @param offset Offset for search results. Used to paginate results
     * @param sort Sort order of results.  Supported values are &#x60;relevance&#x60; (default), &#x60;canonical&#x60; and &#x60;reverse-canonical&#x60;
     * @param range One or more, comma seperated, passage ids (book, chapter, verse) which the search will be limited to.  (i.e. gen.1,gen.5 or gen-num or gen.1.1-gen.3.5) 
     * @param fuzziness Sets the fuzziness of a search to account for misspellings. Values can be 0, 1, 2, or AUTO. Defaults to AUTO which varies depending on the 
     */
    public searchBible(bibleId: string, query?: string, limit?: number, offset?: number, sort?: 'relevance' | 'canonical' | 'reverse-canonical', range?: string, fuzziness?: 'AUTO' | '0' | '1' | '2', _options?: Configuration): Observable<SearchBible200Response> {
        const requestContextPromise = this.requestFactory.searchBible(bibleId, query, limit, offset, sort, range, fuzziness, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchBible(rsp)));
            }));
    }

}

import { SectionsApiRequestFactory, SectionsApiResponseProcessor} from "../apis/SectionsApi.ts";
export class ObservableSectionsApi {
    private requestFactory: SectionsApiRequestFactory;
    private responseProcessor: SectionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SectionsApiRequestFactory,
        responseProcessor?: SectionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SectionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SectionsApiResponseProcessor();
    }

    /**
     * Gets an array of `Section` objects for a given `bibleId` and `bookId` 
     * @param bibleId Id of Bible whose Sections to fetch
     * @param bookId Id of the Book whose Sections to fetch
     */
    public getBookSections(bibleId: string, bookId: string, _options?: Configuration): Observable<GetBookSections200Response> {
        const requestContextPromise = this.requestFactory.getBookSections(bibleId, bookId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBookSections(rsp)));
            }));
    }

    /**
     * Gets an array of `Section` objects for a given `bibleId` and `chapterId` 
     * @param bibleId Id of Bible whose Sections to fetch
     * @param chapterId Id of the Chapter whose Sections to fetch
     */
    public getChapterSections(bibleId: string, chapterId: string, _options?: Configuration): Observable<GetBookSections200Response> {
        const requestContextPromise = this.requestFactory.getChapterSections(bibleId, chapterId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChapterSections(rsp)));
            }));
    }

    /**
     * Gets a single `Section` object for a given `bibleId` and `sectionId`. This Section object also includes an `content` property with all verses for the Section. 
     * @param bibleId Id of Bible whose Section to fetch
     * @param sectionId Id of the Section to fetch
     * @param contentType Content type to be returned in the content property.  Supported values are &#x60;html&#x60; (default), &#x60;json&#x60; (beta), and &#x60;text&#x60; (beta)
     * @param includeNotes Include footnotes in content
     * @param includeTitles Include section titles in content
     * @param includeChapterNumbers Include chapter numbers in content
     * @param includeVerseNumbers Include verse numbers in content.
     * @param includeVerseSpans Include spans that wrap verse numbers and verse text for bible content.
     * @param parallels Comma delimited list of bibleIds to include
     */
    public getSection(bibleId: string, sectionId: string, contentType?: 'html' | 'json' | 'text', includeNotes?: boolean, includeTitles?: boolean, includeChapterNumbers?: boolean, includeVerseNumbers?: boolean, includeVerseSpans?: boolean, parallels?: string, _options?: Configuration): Observable<GetSection200Response> {
        const requestContextPromise = this.requestFactory.getSection(bibleId, sectionId, contentType, includeNotes, includeTitles, includeChapterNumbers, includeVerseNumbers, includeVerseSpans, parallels, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSection(rsp)));
            }));
    }

}

import { VersesApiRequestFactory, VersesApiResponseProcessor} from "../apis/VersesApi.ts";
export class ObservableVersesApi {
    private requestFactory: VersesApiRequestFactory;
    private responseProcessor: VersesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VersesApiRequestFactory,
        responseProcessor?: VersesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VersesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VersesApiResponseProcessor();
    }

    /**
     * Gets a `Verse` object for a given `bibleId` and `verseId`. This Verse object also includes an `content` property with the verse corresponding to the verseId. 
     * @param bibleId Id of Bible for passage
     * @param verseId String reference id for the requested verse.
     * @param contentType Content type to be returned in the content property.  Supported values are &#x60;html&#x60; (default), &#x60;json&#x60; (beta), and &#x60;text&#x60; (beta)
     * @param includeNotes Include footnotes in content
     * @param includeTitles Include section titles in content
     * @param includeChapterNumbers Include chapter numbers in content
     * @param includeVerseNumbers Include verse numbers in content.
     * @param includeVerseSpans Include spans that wrap verse numbers and verse text for bible content.
     * @param parallels Comma delimited list of bibleIds to include
     * @param useOrgId Use the supplied id(s) to match the verseOrgId instead of the verseId
     */
    public getVerse(bibleId: string, verseId: string, contentType?: 'html' | 'json' | 'text', includeNotes?: boolean, includeTitles?: boolean, includeChapterNumbers?: boolean, includeVerseNumbers?: boolean, includeVerseSpans?: boolean, parallels?: string, useOrgId?: boolean, _options?: Configuration): Observable<GetVerse200Response> {
        const requestContextPromise = this.requestFactory.getVerse(bibleId, verseId, contentType, includeNotes, includeTitles, includeChapterNumbers, includeVerseNumbers, includeVerseSpans, parallels, useOrgId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVerse(rsp)));
            }));
    }

    /**
     * Gets an array of `Verse` objects for a given `bibleId` and `chapterId` 
     * @param bibleId Id of Bible whose Verses to fetch
     * @param chapterId Id of the Chapter whose Verses to fetch
     */
    public getVerses(bibleId: string, chapterId: string, _options?: Configuration): Observable<GetVerses200Response> {
        const requestContextPromise = this.requestFactory.getVerses(bibleId, chapterId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVerses(rsp)));
            }));
    }

}
