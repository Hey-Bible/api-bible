import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import { Configuration} from '../configuration.ts'

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

import { ObservableBiblesApi } from "./ObservableAPI.ts";
import { BiblesApiRequestFactory, BiblesApiResponseProcessor} from "../apis/BiblesApi.ts";

export interface BiblesApiGetAudioBibleRequest {
    /**
     * Id of audio Bible to be fetched
     * @type string
     * @memberof BiblesApigetAudioBible
     */
    audioBibleId: string
}

export interface BiblesApiGetAudioBiblesRequest {
    /**
     * ISO 639-3 three digit language code used to filter results
     * @type string
     * @memberof BiblesApigetAudioBibles
     */
    language?: string
    /**
     * Bible abbreviation to search for
     * @type string
     * @memberof BiblesApigetAudioBibles
     */
    abbreviation?: string
    /**
     * Bible name to search for
     * @type string
     * @memberof BiblesApigetAudioBibles
     */
    name?: string
    /**
     * Comma separated list of Bible Ids to return
     * @type string
     * @memberof BiblesApigetAudioBibles
     */
    ids?: string
    /**
     * bibleId of related text Bible used to filter audio bible results
     * @type string
     * @memberof BiblesApigetAudioBibles
     */
    bibleId?: string
    /**
     * Boolean to include full Bible details (e.g. copyright and promo info)
     * @type boolean
     * @memberof BiblesApigetAudioBibles
     */
    includeFullDetails?: boolean
}

export interface BiblesApiGetBibleRequest {
    /**
     * Id of Bible to be fetched
     * @type string
     * @memberof BiblesApigetBible
     */
    bibleId: string
}

export interface BiblesApiGetBiblesRequest {
    /**
     * ISO 639-3 three digit language code used to filter results
     * @type string
     * @memberof BiblesApigetBibles
     */
    language?: string
    /**
     * Bible abbreviation to search for
     * @type string
     * @memberof BiblesApigetBibles
     */
    abbreviation?: string
    /**
     * Bible name to search for
     * @type string
     * @memberof BiblesApigetBibles
     */
    name?: string
    /**
     * Comma separated list of Bible Ids to return
     * @type string
     * @memberof BiblesApigetBibles
     */
    ids?: string
    /**
     * Boolean to include full Bible details (e.g. copyright and promo info)
     * @type boolean
     * @memberof BiblesApigetBibles
     */
    includeFullDetails?: boolean
}

export class ObjectBiblesApi {
    private api: ObservableBiblesApi

    public constructor(configuration: Configuration, requestFactory?: BiblesApiRequestFactory, responseProcessor?: BiblesApiResponseProcessor) {
        this.api = new ObservableBiblesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a single audio `Bible` for a given `audioBibleId` 
     * @param param the request object
     */
    public getAudioBible(param: BiblesApiGetAudioBibleRequest, options?: Configuration): Promise<GetAudioBible200Response> {
        return this.api.getAudioBible(param.audioBibleId,  options).toPromise();
    }

    /**
     * Gets an array of audio `Bible` objects authorized for current API Key 
     * @param param the request object
     */
    public getAudioBibles(param: BiblesApiGetAudioBiblesRequest = {}, options?: Configuration): Promise<GetBibles200Response> {
        return this.api.getAudioBibles(param.language, param.abbreviation, param.name, param.ids, param.bibleId, param.includeFullDetails,  options).toPromise();
    }

    /**
     * Gets a single `Bible` for a given `bibleId` 
     * @param param the request object
     */
    public getBible(param: BiblesApiGetBibleRequest, options?: Configuration): Promise<GetBible200Response> {
        return this.api.getBible(param.bibleId,  options).toPromise();
    }

    /**
     * Gets an array of `Bible` objects authorized for current API Key 
     * @param param the request object
     */
    public getBibles(param: BiblesApiGetBiblesRequest = {}, options?: Configuration): Promise<GetBibles200Response> {
        return this.api.getBibles(param.language, param.abbreviation, param.name, param.ids, param.includeFullDetails,  options).toPromise();
    }

}

import { ObservableBooksApi } from "./ObservableAPI.ts";
import { BooksApiRequestFactory, BooksApiResponseProcessor} from "../apis/BooksApi.ts";

export interface BooksApiGetAudioBookRequest {
    /**
     * Id of audio Bible whose Book to fetch
     * @type string
     * @memberof BooksApigetAudioBook
     */
    audioBibleId: string
    /**
     * Id of the Book to fetch
     * @type string
     * @memberof BooksApigetAudioBook
     */
    bookId: string
    /**
     * Boolean indicating if an array of chapter summaries should be included in the results. Defaults to false. 
     * @type boolean
     * @memberof BooksApigetAudioBook
     */
    includeChapters?: boolean
}

export interface BooksApiGetAudioBooksRequest {
    /**
     * Id of audio Bible whose Book to fetch
     * @type string
     * @memberof BooksApigetAudioBooks
     */
    audioBibleId: string
    /**
     * Boolean indicating if an array of chapter summaries should be included in the results. Defaults to false. 
     * @type boolean
     * @memberof BooksApigetAudioBooks
     */
    includeChapters?: boolean
    /**
     * Boolean indicating if an array of chapter summaries and an array of sections should be included in the results. Defaults to false. 
     * @type boolean
     * @memberof BooksApigetAudioBooks
     */
    includeChaptersAndSections?: boolean
}

export interface BooksApiGetBookRequest {
    /**
     * Id of Bible whose Book to fetch
     * @type string
     * @memberof BooksApigetBook
     */
    bibleId: string
    /**
     * Id of the Book to fetch
     * @type string
     * @memberof BooksApigetBook
     */
    bookId: string
    /**
     * Boolean indicating if an array of chapter summaries should be included in the results. Defaults to false. 
     * @type boolean
     * @memberof BooksApigetBook
     */
    includeChapters?: boolean
}

export interface BooksApiGetBooksRequest {
    /**
     * Id of Bible whose Book to fetch
     * @type string
     * @memberof BooksApigetBooks
     */
    bibleId: string
    /**
     * Boolean indicating if an array of chapter summaries should be included in the results. Defaults to false. 
     * @type boolean
     * @memberof BooksApigetBooks
     */
    includeChapters?: boolean
    /**
     * Boolean indicating if an array of chapter summaries and an array of sections should be included in the results. Defaults to false. 
     * @type boolean
     * @memberof BooksApigetBooks
     */
    includeChaptersAndSections?: boolean
}

export class ObjectBooksApi {
    private api: ObservableBooksApi

    public constructor(configuration: Configuration, requestFactory?: BooksApiRequestFactory, responseProcessor?: BooksApiResponseProcessor) {
        this.api = new ObservableBooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a single `Book` object for a given `audioBibleId` and `bookId` 
     * @param param the request object
     */
    public getAudioBook(param: BooksApiGetAudioBookRequest, options?: Configuration): Promise<GetBook200Response> {
        return this.api.getAudioBook(param.audioBibleId, param.bookId, param.includeChapters,  options).toPromise();
    }

    /**
     * Gets an array of `Book` objects for a given `audioBibleId` 
     * @param param the request object
     */
    public getAudioBooks(param: BooksApiGetAudioBooksRequest, options?: Configuration): Promise<GetBooks200Response> {
        return this.api.getAudioBooks(param.audioBibleId, param.includeChapters, param.includeChaptersAndSections,  options).toPromise();
    }

    /**
     * Gets a single `Book` object for a given `bibleId` and `bookId` 
     * @param param the request object
     */
    public getBook(param: BooksApiGetBookRequest, options?: Configuration): Promise<GetBook200Response> {
        return this.api.getBook(param.bibleId, param.bookId, param.includeChapters,  options).toPromise();
    }

    /**
     * Gets an array of `Book` objects for a given `bibleId` 
     * @param param the request object
     */
    public getBooks(param: BooksApiGetBooksRequest, options?: Configuration): Promise<GetBooks200Response> {
        return this.api.getBooks(param.bibleId, param.includeChapters, param.includeChaptersAndSections,  options).toPromise();
    }

}

import { ObservableChaptersApi } from "./ObservableAPI.ts";
import { ChaptersApiRequestFactory, ChaptersApiResponseProcessor} from "../apis/ChaptersApi.ts";

export interface ChaptersApiGetAudioChapterRequest {
    /**
     * Id of Bible whose Chapter to fetch
     * @type string
     * @memberof ChaptersApigetAudioChapter
     */
    audioBibleId: string
    /**
     * Id of the Chapter to fetch
     * @type string
     * @memberof ChaptersApigetAudioChapter
     */
    chapterId: string
}

export interface ChaptersApiGetAudioChaptersRequest {
    /**
     * Id of Bible whose Chapters to fetch
     * @type string
     * @memberof ChaptersApigetAudioChapters
     */
    audioBibleId: string
    /**
     * Id of the Book whose Chapters to fetch
     * @type string
     * @memberof ChaptersApigetAudioChapters
     */
    bookId: string
}

export interface ChaptersApiGetChapterRequest {
    /**
     * Id of Bible whose Chapter to fetch
     * @type string
     * @memberof ChaptersApigetChapter
     */
    bibleId: string
    /**
     * Id of the Chapter to fetch
     * @type string
     * @memberof ChaptersApigetChapter
     */
    chapterId: string
    /**
     * Content type to be returned in the content property.  Supported values are &#x60;html&#x60; (default), &#x60;json&#x60; (beta), and &#x60;text&#x60; (beta)
     * @type &#39;html&#39; | &#39;json&#39; | &#39;text&#39;
     * @memberof ChaptersApigetChapter
     */
    contentType?: 'html' | 'json' | 'text'
    /**
     * Include footnotes in content
     * @type boolean
     * @memberof ChaptersApigetChapter
     */
    includeNotes?: boolean
    /**
     * Include section titles in content
     * @type boolean
     * @memberof ChaptersApigetChapter
     */
    includeTitles?: boolean
    /**
     * Include chapter numbers in content
     * @type boolean
     * @memberof ChaptersApigetChapter
     */
    includeChapterNumbers?: boolean
    /**
     * Include verse numbers in content.
     * @type boolean
     * @memberof ChaptersApigetChapter
     */
    includeVerseNumbers?: boolean
    /**
     * Include spans that wrap verse numbers and verse text for bible content.
     * @type boolean
     * @memberof ChaptersApigetChapter
     */
    includeVerseSpans?: boolean
    /**
     * Comma delimited list of bibleIds to include
     * @type string
     * @memberof ChaptersApigetChapter
     */
    parallels?: string
}

export interface ChaptersApiGetChaptersRequest {
    /**
     * Id of Bible whose Chapters to fetch
     * @type string
     * @memberof ChaptersApigetChapters
     */
    bibleId: string
    /**
     * Id of the Book whose Chapters to fetch
     * @type string
     * @memberof ChaptersApigetChapters
     */
    bookId: string
}

export class ObjectChaptersApi {
    private api: ObservableChaptersApi

    public constructor(configuration: Configuration, requestFactory?: ChaptersApiRequestFactory, responseProcessor?: ChaptersApiResponseProcessor) {
        this.api = new ObservableChaptersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a single `Chapter` object for a given `audioBibleId` and `chapterId`. This AudioChapter object also includes an `resourceUrl` property with a HTTP URL to the mp3 audio resource for the chapter.  The `resourceUrl` is unique per request and expires in XX minutes.  The `expiresAt` property provides the Unix time value of `resourceUrl` expiration. 
     * @param param the request object
     */
    public getAudioChapter(param: ChaptersApiGetAudioChapterRequest, options?: Configuration): Promise<GetAudioChapter200Response> {
        return this.api.getAudioChapter(param.audioBibleId, param.chapterId,  options).toPromise();
    }

    /**
     * Gets an array of `Chapter` objects for a given `audioBibleId` and `bookId` 
     * @param param the request object
     */
    public getAudioChapters(param: ChaptersApiGetAudioChaptersRequest, options?: Configuration): Promise<GetChapters200Response> {
        return this.api.getAudioChapters(param.audioBibleId, param.bookId,  options).toPromise();
    }

    /**
     * Gets a single `Chapter` object for a given `bibleId` and `chapterId`. This Chapter object also includes an `content` property with all verses for the Chapter. 
     * @param param the request object
     */
    public getChapter(param: ChaptersApiGetChapterRequest, options?: Configuration): Promise<GetChapter200Response> {
        return this.api.getChapter(param.bibleId, param.chapterId, param.contentType, param.includeNotes, param.includeTitles, param.includeChapterNumbers, param.includeVerseNumbers, param.includeVerseSpans, param.parallels,  options).toPromise();
    }

    /**
     * Gets an array of `Chapter` objects for a given `bibleId` and `bookId` 
     * @param param the request object
     */
    public getChapters(param: ChaptersApiGetChaptersRequest, options?: Configuration): Promise<GetChapters200Response> {
        return this.api.getChapters(param.bibleId, param.bookId,  options).toPromise();
    }

}

import { ObservablePassagesApi } from "./ObservableAPI.ts";
import { PassagesApiRequestFactory, PassagesApiResponseProcessor} from "../apis/PassagesApi.ts";

export interface PassagesApiGetPassageRequest {
    /**
     * Id of Bible for passage
     * @type string
     * @memberof PassagesApigetPassage
     */
    bibleId: string
    /**
     * String reference id for the requested passage.
     * @type string
     * @memberof PassagesApigetPassage
     */
    passageId: string
    /**
     * Content type to be returned in the content property.  Supported values are &#x60;html&#x60; (default), &#x60;json&#x60; (beta), and &#x60;text&#x60; (beta)
     * @type &#39;html&#39; | &#39;json&#39; | &#39;text&#39;
     * @memberof PassagesApigetPassage
     */
    contentType?: 'html' | 'json' | 'text'
    /**
     * Include footnotes in content
     * @type boolean
     * @memberof PassagesApigetPassage
     */
    includeNotes?: boolean
    /**
     * Include section titles in content
     * @type boolean
     * @memberof PassagesApigetPassage
     */
    includeTitles?: boolean
    /**
     * Include chapter numbers in content
     * @type boolean
     * @memberof PassagesApigetPassage
     */
    includeChapterNumbers?: boolean
    /**
     * Include verse numbers in content.
     * @type boolean
     * @memberof PassagesApigetPassage
     */
    includeVerseNumbers?: boolean
    /**
     * Include spans that wrap verse numbers and verse text for bible content.
     * @type boolean
     * @memberof PassagesApigetPassage
     */
    includeVerseSpans?: boolean
    /**
     * Comma delimited list of bibleIds to include
     * @type string
     * @memberof PassagesApigetPassage
     */
    parallels?: string
    /**
     * Use the supplied id(s) to match the verseOrgId instead of the verseId
     * @type boolean
     * @memberof PassagesApigetPassage
     */
    useOrgId?: boolean
}

export class ObjectPassagesApi {
    private api: ObservablePassagesApi

    public constructor(configuration: Configuration, requestFactory?: PassagesApiRequestFactory, responseProcessor?: PassagesApiResponseProcessor) {
        this.api = new ObservablePassagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a `Passage` object for a given `bibleId` and `passageId`. This Passage object also includes an `content` property with all verses corresponding to the passageId. The `passageId` parameter can represent a chapter, verse, or range of verses. 
     * @param param the request object
     */
    public getPassage(param: PassagesApiGetPassageRequest, options?: Configuration): Promise<GetPassage200Response> {
        return this.api.getPassage(param.bibleId, param.passageId, param.contentType, param.includeNotes, param.includeTitles, param.includeChapterNumbers, param.includeVerseNumbers, param.includeVerseSpans, param.parallels, param.useOrgId,  options).toPromise();
    }

}

import { ObservableSearchApi } from "./ObservableAPI.ts";
import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi.ts";

export interface SearchApiSearchBibleRequest {
    /**
     * Id of Bible to search
     * @type string
     * @memberof SearchApisearchBible
     */
    bibleId: string
    /**
     * Search keywords or passage reference.  Supported wildcards are * and ?.   The * wildcard matches any character sequence (e.g. searching for \&quot;wo*d\&quot; finds text such as \&quot;word\&quot;, \&quot;world\&quot;, and \&quot;worshipped\&quot;).   The ? wildcard matches any matches any single character (e.g. searching for \&quot;l?ve\&quot; finds text such as \&quot;live\&quot; and \&quot;love\&quot;). 
     * @type string
     * @memberof SearchApisearchBible
     */
    query?: string
    /**
     * Integer limit for how many matching results to return. Default is 10.
     * @type number
     * @memberof SearchApisearchBible
     */
    limit?: number
    /**
     * Offset for search results. Used to paginate results
     * @type number
     * @memberof SearchApisearchBible
     */
    offset?: number
    /**
     * Sort order of results.  Supported values are &#x60;relevance&#x60; (default), &#x60;canonical&#x60; and &#x60;reverse-canonical&#x60;
     * @type &#39;relevance&#39; | &#39;canonical&#39; | &#39;reverse-canonical&#39;
     * @memberof SearchApisearchBible
     */
    sort?: 'relevance' | 'canonical' | 'reverse-canonical'
    /**
     * One or more, comma seperated, passage ids (book, chapter, verse) which the search will be limited to.  (i.e. gen.1,gen.5 or gen-num or gen.1.1-gen.3.5) 
     * @type string
     * @memberof SearchApisearchBible
     */
    range?: string
    /**
     * Sets the fuzziness of a search to account for misspellings. Values can be 0, 1, 2, or AUTO. Defaults to AUTO which varies depending on the 
     * @type &#39;AUTO&#39; | &#39;0&#39; | &#39;1&#39; | &#39;2&#39;
     * @memberof SearchApisearchBible
     */
    fuzziness?: 'AUTO' | '0' | '1' | '2'
}

export class ObjectSearchApi {
    private api: ObservableSearchApi

    public constructor(configuration: Configuration, requestFactory?: SearchApiRequestFactory, responseProcessor?: SearchApiResponseProcessor) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets search results for a given `bibleId` and query string.  Searches will match all verses with the list of keywords provided in the query string. Order of the keywords does not matter. However all keywords must be present in a verse for it to be considered a match. The total number of results returned from a search can be limited by populating the `limit` attribute in the query string with a non-negative integer value.  If no limit value is provide a default of 10 is used. `offset` can be used to traverse paginated results.  So for example if you are using the default `limit` of 10, using an `offset` of 10 will return the second page of results, namely results 11-20. The `text` property of each verse object contains only the verse text.  It does not contain footnote references. However, those can be queried directly using the `/bibles/{bibleId}/verses/{verseId}` endpoint. 
     * @param param the request object
     */
    public searchBible(param: SearchApiSearchBibleRequest, options?: Configuration): Promise<SearchBible200Response> {
        return this.api.searchBible(param.bibleId, param.query, param.limit, param.offset, param.sort, param.range, param.fuzziness,  options).toPromise();
    }

}

import { ObservableSectionsApi } from "./ObservableAPI.ts";
import { SectionsApiRequestFactory, SectionsApiResponseProcessor} from "../apis/SectionsApi.ts";

export interface SectionsApiGetBookSectionsRequest {
    /**
     * Id of Bible whose Sections to fetch
     * @type string
     * @memberof SectionsApigetBookSections
     */
    bibleId: string
    /**
     * Id of the Book whose Sections to fetch
     * @type string
     * @memberof SectionsApigetBookSections
     */
    bookId: string
}

export interface SectionsApiGetChapterSectionsRequest {
    /**
     * Id of Bible whose Sections to fetch
     * @type string
     * @memberof SectionsApigetChapterSections
     */
    bibleId: string
    /**
     * Id of the Chapter whose Sections to fetch
     * @type string
     * @memberof SectionsApigetChapterSections
     */
    chapterId: string
}

export interface SectionsApiGetSectionRequest {
    /**
     * Id of Bible whose Section to fetch
     * @type string
     * @memberof SectionsApigetSection
     */
    bibleId: string
    /**
     * Id of the Section to fetch
     * @type string
     * @memberof SectionsApigetSection
     */
    sectionId: string
    /**
     * Content type to be returned in the content property.  Supported values are &#x60;html&#x60; (default), &#x60;json&#x60; (beta), and &#x60;text&#x60; (beta)
     * @type &#39;html&#39; | &#39;json&#39; | &#39;text&#39;
     * @memberof SectionsApigetSection
     */
    contentType?: 'html' | 'json' | 'text'
    /**
     * Include footnotes in content
     * @type boolean
     * @memberof SectionsApigetSection
     */
    includeNotes?: boolean
    /**
     * Include section titles in content
     * @type boolean
     * @memberof SectionsApigetSection
     */
    includeTitles?: boolean
    /**
     * Include chapter numbers in content
     * @type boolean
     * @memberof SectionsApigetSection
     */
    includeChapterNumbers?: boolean
    /**
     * Include verse numbers in content.
     * @type boolean
     * @memberof SectionsApigetSection
     */
    includeVerseNumbers?: boolean
    /**
     * Include spans that wrap verse numbers and verse text for bible content.
     * @type boolean
     * @memberof SectionsApigetSection
     */
    includeVerseSpans?: boolean
    /**
     * Comma delimited list of bibleIds to include
     * @type string
     * @memberof SectionsApigetSection
     */
    parallels?: string
}

export class ObjectSectionsApi {
    private api: ObservableSectionsApi

    public constructor(configuration: Configuration, requestFactory?: SectionsApiRequestFactory, responseProcessor?: SectionsApiResponseProcessor) {
        this.api = new ObservableSectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets an array of `Section` objects for a given `bibleId` and `bookId` 
     * @param param the request object
     */
    public getBookSections(param: SectionsApiGetBookSectionsRequest, options?: Configuration): Promise<GetBookSections200Response> {
        return this.api.getBookSections(param.bibleId, param.bookId,  options).toPromise();
    }

    /**
     * Gets an array of `Section` objects for a given `bibleId` and `chapterId` 
     * @param param the request object
     */
    public getChapterSections(param: SectionsApiGetChapterSectionsRequest, options?: Configuration): Promise<GetBookSections200Response> {
        return this.api.getChapterSections(param.bibleId, param.chapterId,  options).toPromise();
    }

    /**
     * Gets a single `Section` object for a given `bibleId` and `sectionId`. This Section object also includes an `content` property with all verses for the Section. 
     * @param param the request object
     */
    public getSection(param: SectionsApiGetSectionRequest, options?: Configuration): Promise<GetSection200Response> {
        return this.api.getSection(param.bibleId, param.sectionId, param.contentType, param.includeNotes, param.includeTitles, param.includeChapterNumbers, param.includeVerseNumbers, param.includeVerseSpans, param.parallels,  options).toPromise();
    }

}

import { ObservableVersesApi } from "./ObservableAPI.ts";
import { VersesApiRequestFactory, VersesApiResponseProcessor} from "../apis/VersesApi.ts";

export interface VersesApiGetVerseRequest {
    /**
     * Id of Bible for passage
     * @type string
     * @memberof VersesApigetVerse
     */
    bibleId: string
    /**
     * String reference id for the requested verse.
     * @type string
     * @memberof VersesApigetVerse
     */
    verseId: string
    /**
     * Content type to be returned in the content property.  Supported values are &#x60;html&#x60; (default), &#x60;json&#x60; (beta), and &#x60;text&#x60; (beta)
     * @type &#39;html&#39; | &#39;json&#39; | &#39;text&#39;
     * @memberof VersesApigetVerse
     */
    contentType?: 'html' | 'json' | 'text'
    /**
     * Include footnotes in content
     * @type boolean
     * @memberof VersesApigetVerse
     */
    includeNotes?: boolean
    /**
     * Include section titles in content
     * @type boolean
     * @memberof VersesApigetVerse
     */
    includeTitles?: boolean
    /**
     * Include chapter numbers in content
     * @type boolean
     * @memberof VersesApigetVerse
     */
    includeChapterNumbers?: boolean
    /**
     * Include verse numbers in content.
     * @type boolean
     * @memberof VersesApigetVerse
     */
    includeVerseNumbers?: boolean
    /**
     * Include spans that wrap verse numbers and verse text for bible content.
     * @type boolean
     * @memberof VersesApigetVerse
     */
    includeVerseSpans?: boolean
    /**
     * Comma delimited list of bibleIds to include
     * @type string
     * @memberof VersesApigetVerse
     */
    parallels?: string
    /**
     * Use the supplied id(s) to match the verseOrgId instead of the verseId
     * @type boolean
     * @memberof VersesApigetVerse
     */
    useOrgId?: boolean
}

export interface VersesApiGetVersesRequest {
    /**
     * Id of Bible whose Verses to fetch
     * @type string
     * @memberof VersesApigetVerses
     */
    bibleId: string
    /**
     * Id of the Chapter whose Verses to fetch
     * @type string
     * @memberof VersesApigetVerses
     */
    chapterId: string
}

export class ObjectVersesApi {
    private api: ObservableVersesApi

    public constructor(configuration: Configuration, requestFactory?: VersesApiRequestFactory, responseProcessor?: VersesApiResponseProcessor) {
        this.api = new ObservableVersesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a `Verse` object for a given `bibleId` and `verseId`. This Verse object also includes an `content` property with the verse corresponding to the verseId. 
     * @param param the request object
     */
    public getVerse(param: VersesApiGetVerseRequest, options?: Configuration): Promise<GetVerse200Response> {
        return this.api.getVerse(param.bibleId, param.verseId, param.contentType, param.includeNotes, param.includeTitles, param.includeChapterNumbers, param.includeVerseNumbers, param.includeVerseSpans, param.parallels, param.useOrgId,  options).toPromise();
    }

    /**
     * Gets an array of `Verse` objects for a given `bibleId` and `chapterId` 
     * @param param the request object
     */
    public getVerses(param: VersesApiGetVersesRequest, options?: Configuration): Promise<GetVerses200Response> {
        return this.api.getVerses(param.bibleId, param.chapterId,  options).toPromise();
    }

}
