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
import { ObservableBiblesApi } from './ObservableAPI.ts';

import { BiblesApiRequestFactory, BiblesApiResponseProcessor} from "../apis/BiblesApi.ts";
export class PromiseBiblesApi {
    private api: ObservableBiblesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BiblesApiRequestFactory,
        responseProcessor?: BiblesApiResponseProcessor
    ) {
        this.api = new ObservableBiblesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a single audio `Bible` for a given `audioBibleId` 
     * @param audioBibleId Id of audio Bible to be fetched
     */
    public getAudioBible(audioBibleId: string, _options?: Configuration): Promise<GetAudioBible200Response> {
        const result = this.api.getAudioBible(audioBibleId, _options);
        return result.toPromise();
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
    public getAudioBibles(language?: string, abbreviation?: string, name?: string, ids?: string, bibleId?: string, includeFullDetails?: boolean, _options?: Configuration): Promise<GetBibles200Response> {
        const result = this.api.getAudioBibles(language, abbreviation, name, ids, bibleId, includeFullDetails, _options);
        return result.toPromise();
    }

    /**
     * Gets a single `Bible` for a given `bibleId` 
     * @param bibleId Id of Bible to be fetched
     */
    public getBible(bibleId: string, _options?: Configuration): Promise<GetBible200Response> {
        const result = this.api.getBible(bibleId, _options);
        return result.toPromise();
    }

    /**
     * Gets an array of `Bible` objects authorized for current API Key 
     * @param language ISO 639-3 three digit language code used to filter results
     * @param abbreviation Bible abbreviation to search for
     * @param name Bible name to search for
     * @param ids Comma separated list of Bible Ids to return
     * @param includeFullDetails Boolean to include full Bible details (e.g. copyright and promo info)
     */
    public getBibles(language?: string, abbreviation?: string, name?: string, ids?: string, includeFullDetails?: boolean, _options?: Configuration): Promise<GetBibles200Response> {
        const result = this.api.getBibles(language, abbreviation, name, ids, includeFullDetails, _options);
        return result.toPromise();
    }


}



import { ObservableBooksApi } from './ObservableAPI.ts';

import { BooksApiRequestFactory, BooksApiResponseProcessor} from "../apis/BooksApi.ts";
export class PromiseBooksApi {
    private api: ObservableBooksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BooksApiRequestFactory,
        responseProcessor?: BooksApiResponseProcessor
    ) {
        this.api = new ObservableBooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a single `Book` object for a given `audioBibleId` and `bookId` 
     * @param audioBibleId Id of audio Bible whose Book to fetch
     * @param bookId Id of the Book to fetch
     * @param includeChapters Boolean indicating if an array of chapter summaries should be included in the results. Defaults to false. 
     */
    public getAudioBook(audioBibleId: string, bookId: string, includeChapters?: boolean, _options?: Configuration): Promise<GetBook200Response> {
        const result = this.api.getAudioBook(audioBibleId, bookId, includeChapters, _options);
        return result.toPromise();
    }

    /**
     * Gets an array of `Book` objects for a given `audioBibleId` 
     * @param audioBibleId Id of audio Bible whose Book to fetch
     * @param includeChapters Boolean indicating if an array of chapter summaries should be included in the results. Defaults to false. 
     * @param includeChaptersAndSections Boolean indicating if an array of chapter summaries and an array of sections should be included in the results. Defaults to false. 
     */
    public getAudioBooks(audioBibleId: string, includeChapters?: boolean, includeChaptersAndSections?: boolean, _options?: Configuration): Promise<GetBooks200Response> {
        const result = this.api.getAudioBooks(audioBibleId, includeChapters, includeChaptersAndSections, _options);
        return result.toPromise();
    }

    /**
     * Gets a single `Book` object for a given `bibleId` and `bookId` 
     * @param bibleId Id of Bible whose Book to fetch
     * @param bookId Id of the Book to fetch
     * @param includeChapters Boolean indicating if an array of chapter summaries should be included in the results. Defaults to false. 
     */
    public getBook(bibleId: string, bookId: string, includeChapters?: boolean, _options?: Configuration): Promise<GetBook200Response> {
        const result = this.api.getBook(bibleId, bookId, includeChapters, _options);
        return result.toPromise();
    }

    /**
     * Gets an array of `Book` objects for a given `bibleId` 
     * @param bibleId Id of Bible whose Book to fetch
     * @param includeChapters Boolean indicating if an array of chapter summaries should be included in the results. Defaults to false. 
     * @param includeChaptersAndSections Boolean indicating if an array of chapter summaries and an array of sections should be included in the results. Defaults to false. 
     */
    public getBooks(bibleId: string, includeChapters?: boolean, includeChaptersAndSections?: boolean, _options?: Configuration): Promise<GetBooks200Response> {
        const result = this.api.getBooks(bibleId, includeChapters, includeChaptersAndSections, _options);
        return result.toPromise();
    }


}



import { ObservableChaptersApi } from './ObservableAPI.ts';

import { ChaptersApiRequestFactory, ChaptersApiResponseProcessor} from "../apis/ChaptersApi.ts";
export class PromiseChaptersApi {
    private api: ObservableChaptersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ChaptersApiRequestFactory,
        responseProcessor?: ChaptersApiResponseProcessor
    ) {
        this.api = new ObservableChaptersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a single `Chapter` object for a given `audioBibleId` and `chapterId`. This AudioChapter object also includes an `resourceUrl` property with a HTTP URL to the mp3 audio resource for the chapter.  The `resourceUrl` is unique per request and expires in XX minutes.  The `expiresAt` property provides the Unix time value of `resourceUrl` expiration. 
     * @param audioBibleId Id of Bible whose Chapter to fetch
     * @param chapterId Id of the Chapter to fetch
     */
    public getAudioChapter(audioBibleId: string, chapterId: string, _options?: Configuration): Promise<GetAudioChapter200Response> {
        const result = this.api.getAudioChapter(audioBibleId, chapterId, _options);
        return result.toPromise();
    }

    /**
     * Gets an array of `Chapter` objects for a given `audioBibleId` and `bookId` 
     * @param audioBibleId Id of Bible whose Chapters to fetch
     * @param bookId Id of the Book whose Chapters to fetch
     */
    public getAudioChapters(audioBibleId: string, bookId: string, _options?: Configuration): Promise<GetChapters200Response> {
        const result = this.api.getAudioChapters(audioBibleId, bookId, _options);
        return result.toPromise();
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
    public getChapter(bibleId: string, chapterId: string, contentType?: 'html' | 'json' | 'text', includeNotes?: boolean, includeTitles?: boolean, includeChapterNumbers?: boolean, includeVerseNumbers?: boolean, includeVerseSpans?: boolean, parallels?: string, _options?: Configuration): Promise<GetChapter200Response> {
        const result = this.api.getChapter(bibleId, chapterId, contentType, includeNotes, includeTitles, includeChapterNumbers, includeVerseNumbers, includeVerseSpans, parallels, _options);
        return result.toPromise();
    }

    /**
     * Gets an array of `Chapter` objects for a given `bibleId` and `bookId` 
     * @param bibleId Id of Bible whose Chapters to fetch
     * @param bookId Id of the Book whose Chapters to fetch
     */
    public getChapters(bibleId: string, bookId: string, _options?: Configuration): Promise<GetChapters200Response> {
        const result = this.api.getChapters(bibleId, bookId, _options);
        return result.toPromise();
    }


}



import { ObservablePassagesApi } from './ObservableAPI.ts';

import { PassagesApiRequestFactory, PassagesApiResponseProcessor} from "../apis/PassagesApi.ts";
export class PromisePassagesApi {
    private api: ObservablePassagesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PassagesApiRequestFactory,
        responseProcessor?: PassagesApiResponseProcessor
    ) {
        this.api = new ObservablePassagesApi(configuration, requestFactory, responseProcessor);
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
    public getPassage(bibleId: string, passageId: string, contentType?: 'html' | 'json' | 'text', includeNotes?: boolean, includeTitles?: boolean, includeChapterNumbers?: boolean, includeVerseNumbers?: boolean, includeVerseSpans?: boolean, parallels?: string, useOrgId?: boolean, _options?: Configuration): Promise<GetPassage200Response> {
        const result = this.api.getPassage(bibleId, passageId, contentType, includeNotes, includeTitles, includeChapterNumbers, includeVerseNumbers, includeVerseSpans, parallels, useOrgId, _options);
        return result.toPromise();
    }


}



import { ObservableSearchApi } from './ObservableAPI.ts';

import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi.ts";
export class PromiseSearchApi {
    private api: ObservableSearchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchApiRequestFactory,
        responseProcessor?: SearchApiResponseProcessor
    ) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
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
    public searchBible(bibleId: string, query?: string, limit?: number, offset?: number, sort?: 'relevance' | 'canonical' | 'reverse-canonical', range?: string, fuzziness?: 'AUTO' | '0' | '1' | '2', _options?: Configuration): Promise<SearchBible200Response> {
        const result = this.api.searchBible(bibleId, query, limit, offset, sort, range, fuzziness, _options);
        return result.toPromise();
    }


}



import { ObservableSectionsApi } from './ObservableAPI.ts';

import { SectionsApiRequestFactory, SectionsApiResponseProcessor} from "../apis/SectionsApi.ts";
export class PromiseSectionsApi {
    private api: ObservableSectionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SectionsApiRequestFactory,
        responseProcessor?: SectionsApiResponseProcessor
    ) {
        this.api = new ObservableSectionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets an array of `Section` objects for a given `bibleId` and `bookId` 
     * @param bibleId Id of Bible whose Sections to fetch
     * @param bookId Id of the Book whose Sections to fetch
     */
    public getBookSections(bibleId: string, bookId: string, _options?: Configuration): Promise<GetBookSections200Response> {
        const result = this.api.getBookSections(bibleId, bookId, _options);
        return result.toPromise();
    }

    /**
     * Gets an array of `Section` objects for a given `bibleId` and `chapterId` 
     * @param bibleId Id of Bible whose Sections to fetch
     * @param chapterId Id of the Chapter whose Sections to fetch
     */
    public getChapterSections(bibleId: string, chapterId: string, _options?: Configuration): Promise<GetBookSections200Response> {
        const result = this.api.getChapterSections(bibleId, chapterId, _options);
        return result.toPromise();
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
    public getSection(bibleId: string, sectionId: string, contentType?: 'html' | 'json' | 'text', includeNotes?: boolean, includeTitles?: boolean, includeChapterNumbers?: boolean, includeVerseNumbers?: boolean, includeVerseSpans?: boolean, parallels?: string, _options?: Configuration): Promise<GetSection200Response> {
        const result = this.api.getSection(bibleId, sectionId, contentType, includeNotes, includeTitles, includeChapterNumbers, includeVerseNumbers, includeVerseSpans, parallels, _options);
        return result.toPromise();
    }


}



import { ObservableVersesApi } from './ObservableAPI.ts';

import { VersesApiRequestFactory, VersesApiResponseProcessor} from "../apis/VersesApi.ts";
export class PromiseVersesApi {
    private api: ObservableVersesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VersesApiRequestFactory,
        responseProcessor?: VersesApiResponseProcessor
    ) {
        this.api = new ObservableVersesApi(configuration, requestFactory, responseProcessor);
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
    public getVerse(bibleId: string, verseId: string, contentType?: 'html' | 'json' | 'text', includeNotes?: boolean, includeTitles?: boolean, includeChapterNumbers?: boolean, includeVerseNumbers?: boolean, includeVerseSpans?: boolean, parallels?: string, useOrgId?: boolean, _options?: Configuration): Promise<GetVerse200Response> {
        const result = this.api.getVerse(bibleId, verseId, contentType, includeNotes, includeTitles, includeChapterNumbers, includeVerseNumbers, includeVerseSpans, parallels, useOrgId, _options);
        return result.toPromise();
    }

    /**
     * Gets an array of `Verse` objects for a given `bibleId` and `chapterId` 
     * @param bibleId Id of Bible whose Verses to fetch
     * @param chapterId Id of the Chapter whose Verses to fetch
     */
    public getVerses(bibleId: string, chapterId: string, _options?: Configuration): Promise<GetVerses200Response> {
        const result = this.api.getVerses(bibleId, chapterId, _options);
        return result.toPromise();
    }


}



