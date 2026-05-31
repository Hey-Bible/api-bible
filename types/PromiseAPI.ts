import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import { Configuration} from '../configuration.ts'

import { AudioBibleSummary } from '../models/AudioBibleSummary.ts';
import { AudioChapter } from '../models/AudioChapter.ts';
import { AudioChapterNext } from '../models/AudioChapterNext.ts';
import { AudioChapterPrevious } from '../models/AudioChapterPrevious.ts';
import { AudioChapterTimecodesInner } from '../models/AudioChapterTimecodesInner.ts';
import { Bible } from '../models/Bible.ts';
import { BibleCountriesInner } from '../models/BibleCountriesInner.ts';
import { Book } from '../models/Book.ts';
import { Chapter } from '../models/Chapter.ts';
import { ChapterNext } from '../models/ChapterNext.ts';
import { ChapterPrevious } from '../models/ChapterPrevious.ts';
import { ChapterSummary } from '../models/ChapterSummary.ts';
import { GetAudioBible200Response } from '../models/GetAudioBible200Response.ts';
import { GetAudioBibles200Response } from '../models/GetAudioBibles200Response.ts';
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
import { SearchResponseVersesInner } from '../models/SearchResponseVersesInner.ts';
import { Section } from '../models/Section.ts';
import { SectionNext } from '../models/SectionNext.ts';
import { SectionPrevious } from '../models/SectionPrevious.ts';
import { SectionSummary } from '../models/SectionSummary.ts';
import { Verse } from '../models/Verse.ts';
import { VerseNext } from '../models/VerseNext.ts';
import { VersePrevious } from '../models/VersePrevious.ts';
import { VerseSummary } from '../models/VerseSummary.ts';
import { ObservableAudioBiblesApi } from './ObservableAPI.ts';

import { AudioBiblesApiRequestFactory, AudioBiblesApiResponseProcessor} from "../apis/AudioBiblesApi.ts";
export class PromiseAudioBiblesApi {
    private api: ObservableAudioBiblesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AudioBiblesApiRequestFactory,
        responseProcessor?: AudioBiblesApiResponseProcessor
    ) {
        this.api = new ObservableAudioBiblesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a single `AudioBible` for a given `bibleId`  An `AudioBible` object represents a single auditory translation (NIV, ESV, etc.) of the Bible. Each Bible is accessible via its **Bible ID**, a string consisting of a 16-digit unique string followed by a _publication number_ (`-01`, `-02`). A few popular examples are:  | Bible                                  | Bible ID              | | -------------------------------------- | --------------------- | | New International Version (**NIV**)    | `78a9f6124f344018-01` | | New American Standard Bible (**NASB**) | `a761ca71e0b3ddcf-01` | | Christian Standard Bible (**CSB**)     | `a556c5305ee15c3f-01` |
     * Get an Audio Bible
     * @param bibleId The ID of the Bible you are looking to fetch
     */
    public getAudioBible(bibleId: string, _options?: Configuration): Promise<GetAudioBible200Response> {
        const result = this.api.getAudioBible(bibleId, _options);
        return result.toPromise();
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
    public getAudioBibles(language?: string, abbreviation?: string, name?: string, ids?: string, bibleId?: string, includeFullDetails?: boolean, _options?: Configuration): Promise<GetAudioBibles200Response> {
        const result = this.api.getAudioBibles(language, abbreviation, name, ids, bibleId, includeFullDetails, _options);
        return result.toPromise();
    }

    /**
     * Gets a single `Book` object for a given `bibleId` and `bookId`  A `Book` object represents a single book (Matthew, Mark, etc.) of a single Bible. Each `Book` is accessible via a **Book ID**, a 3-digit code representing the book\'s name. A few examples are:  | Book Name | Book ID | | --------- | ------- | | Genesis   | `GEN`   | | Mark      | `MRK`   | | 1 John    | `1JN`   | 
     * Get an Audio Book
     * @param bibleId The ID of the Bible you are looking to fetch
     * @param bookId The Book ID you are looking to fetch
     * @param includeChapters When &#x60;true&#x60;, returns available chapter information for each book
     */
    public getAudioBook(bibleId: string, bookId: string, includeChapters?: boolean, _options?: Configuration): Promise<GetBook200Response> {
        const result = this.api.getAudioBook(bibleId, bookId, includeChapters, _options);
        return result.toPromise();
    }

    /**
     * Lists `Book` objects for a given `bibleId`  A `Book` object represents a single book (Matthew, Mark, etc.) of a single Bible. Each `Book` is accessible via a **Book ID**, a 3-digit code representing the book\'s name. A few examples are:  | Book Name | Book ID | | --------- | ------- | | Genesis   | `GEN`   | | Mark      | `MRK`   | | 1 John    | `1JN`   |
     * List Books in an Audio Bible
     * @param bibleId The ID of the Bible you are looking to fetch
     * @param includeChapters When &#x60;true&#x60;, returns available chapter information for each book
     * @param includeChaptersAndSections When &#x60;true&#x60;, returns available chapter and section (if available) information for each book
     */
    public getAudioBooks(bibleId: string, includeChapters?: boolean, includeChaptersAndSections?: boolean, _options?: Configuration): Promise<GetBooks200Response> {
        const result = this.api.getAudioBooks(bibleId, includeChapters, includeChaptersAndSections, _options);
        return result.toPromise();
    }

    /**
     * Gets a single `AudioChapter` object for a given `bible` and `chapterId`.  A presigned link to the mp3 audio file for this audio chapter will be included in the `resourceUrl` field. This link is unique to your request and will will expire, so it is recommended to download that audio file using that link as quickly as you are able. It is **not** recommended that you stream audio directly from the provided link, as you will run into a number of ongoing issues.  Some audio chapters will include `timecodes`. These allow you to match verses in a chapter to a specific time code in the audio file. This can be helpful if you are using both text and audio Bibles and would like to highlight the verse as it is being read.
     * Get an Audio Chapter
     * @param bibleId The ID of the Bible you are looking to fetch
     * @param chapterId The Chapter ID you are looking to fetch
     */
    public getAudioChapter(bibleId: string, chapterId: string, _options?: Configuration): Promise<GetAudioChapter200Response> {
        const result = this.api.getAudioChapter(bibleId, chapterId, _options);
        return result.toPromise();
    }

    /**
     * Lists `Chapter` objects for a given `bibleId` and `bookId`  A `Chapter` object represents a single chapter of the Bible. Each Chapter is accessible via its **Chapter ID**, a string consisting of a [Book](https://docs.api.bible/guides/books) ID and a chapter number. A few examples are:  | Chapter       | Chapter ID | | ------------- | ---------- | | Genesis 1     | `GEN.1`    | | John 3        | `JHN.3`    | | Revelation 22 | `REV.22`   |  *Note: This endpoint does not return verse content* 
     * List Audio Chapters in an Audio Book
     * @param bibleId The ID of the Bible you are looking to fetch
     * @param bookId The Book ID you are looking to fetch
     */
    public getAudioChapters(bibleId: string, bookId: string, _options?: Configuration): Promise<GetChapters200Response> {
        const result = this.api.getAudioChapters(bibleId, bookId, _options);
        return result.toPromise();
    }


}



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
     * Gets a single `Bible` object using the given `bibleId`.   A `Bible` object represents a single translation (NIV, ESV, etc.) of the Bible. Each Bible is accessible via its **Bible ID**, a string consisting of a 16-digit unique string followed by a _publication number_ (`-01`, `-02`). A few popular examples are:  | Bible                                  | Bible ID              | | -------------------------------------- | --------------------- | | New International Version (**NIV**)    | `78a9f6124f344018-01` | | New American Standard Bible (**NASB**) | `a761ca71e0b3ddcf-01` | | Christian Standard Bible (**CSB**)     | `a556c5305ee15c3f-01` |
     * Get a Bible
     * @param bibleId The ID of the Bible you are looking to fetch
     */
    public getBible(bibleId: string, _options?: Configuration): Promise<GetBible200Response> {
        const result = this.api.getBible(bibleId, _options);
        return result.toPromise();
    }

    /**
     * Lists `Bible` objects authorized for the current API Key. This includes Creative Commons and Public Domain Bibles, as well as any Bibles licensed via a **Starter** or **Pro Plan**.  A `Bible` object represents a single translation (NIV, ESV, etc.) of the Bible. Each Bible is accessible via its **Bible ID**, a string consisting of a 16-digit unique string followed by a _publication number_ (`-01`, `-02`). A few popular examples are:  | Bible                                  | Bible ID              | | -------------------------------------- | --------------------- | | New International Version (**NIV**)    | `78a9f6124f344018-01` | | New American Standard Bible (**NASB**) | `a761ca71e0b3ddcf-01` | | Christian Standard Bible (**CSB**)     | `a556c5305ee15c3f-01` |
     * List Available Bibles
     * @param language ISO 639-3 three digit language code used to filter results
     * @param abbreviation Bible abbreviation to search for
     * @param name Bible name to search for
     * @param ids Comma separated list of Bible Ids to return
     * @param includeFullDetails When &#x60;true&#x60;, the returned Bibles will include additional Bible details (e.g. copyright and promo info)
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
     * Gets a single `Book` object for a given `bibleId` and `bookId`.   A `Book` object represents a single book (Matthew, Mark, etc.) of a single Bible. Each `Book` is accessible via a **Book ID**, a 3-digit code representing the book\'s name. A few examples are:  | Book Name | Book ID | | --------- | ------- | | Genesis   | `GEN`   | | Mark      | `MRK`   | | 1 John    | `1JN`   |
     * Get a Book
     * @param bibleId The ID of the Bible you are looking to fetch
     * @param bookId The Book ID you are looking to fetch
     * @param includeChapters When &#x60;true&#x60;, returns available chapter information for each book
     */
    public getBook(bibleId: string, bookId: string, includeChapters?: boolean, _options?: Configuration): Promise<GetBook200Response> {
        const result = this.api.getBook(bibleId, bookId, includeChapters, _options);
        return result.toPromise();
    }

    /**
     * Lists `Book` objects for a given `bibleId`  A `Book` object represents a single book (Matthew, Mark, etc.) of a single Bible. Each `Book` is accessible via a **Book ID**, a 3-digit code representing the book\'s name. A few examples are:  | Book Name | Book ID | | --------- | ------- | | Genesis   | `GEN`   | | Mark      | `MRK`   | | 1 John    | `1JN`   |
     * List Books in a Bible
     * @param bibleId The ID of the Bible you are looking to fetch
     * @param includeChapters When &#x60;true&#x60;, returns available chapter information for each book
     * @param includeChaptersAndSections When &#x60;true&#x60;, returns available chapter and section (if available) information for each book
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
    public getChapter(bibleId: string, chapterId: string, contentType?: 'html' | 'json' | 'text', includeNotes?: boolean, includeTitles?: boolean, includeChapterNumbers?: boolean, includeVerseNumbers?: boolean, includeVerseSpans?: boolean, parallels?: string, _options?: Configuration): Promise<GetChapter200Response> {
        const result = this.api.getChapter(bibleId, chapterId, contentType, includeNotes, includeTitles, includeChapterNumbers, includeVerseNumbers, includeVerseSpans, parallels, _options);
        return result.toPromise();
    }

    /**
     * Lists `Chapter` objects for a given `bibleId` and `bookId`  A `Chapter` object represents a single chapter of the Bible. Each Chapter is accessible via its **Chapter ID**, a string consisting of a [Book](#/components/schemas/Book) ID and a chapter number. A few examples are:  | Chapter       | Chapter ID | | ------------- | ---------- | | Genesis 1     | `GEN.1`    | | John 3        | `JHN.3`    | | Revelation 22 | `REV.22`   |  *Note: This endpoint does not return verse content*
     * List Chapters in a Book
     * @param bibleId The ID of the Bible you are looking to fetch
     * @param bookId The Book ID you are looking to fetch
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
     * Lists `Section` objects for a given `bibleId` and `bookId`  A `Section` object represents a known range of verses in the Bible, typically tied to a story. Each Section is accessible via its **Section ID**, a string consisting of a [Book](https://docs.api.bible/guides/books) ID and a section number. Not every Bible has sections enabled. For Bibles with sections enabled, sections are sequential and _should_ cover nearly every verse if queried in order. A few examples from the book of Genesis are:  | Section Title | Verse Range                | Section ID | | ------------- | -------------------------- | ---------- | | The Beginning | Genesis 1:1 - Genesis 2:3  | `GEN.S1`   | | Adam and Eve  | Genesis 2:4 - Genesis 2:25 | `GEN.S2`   | | The Fall      | Genesis 3:1 - Genesis 3:24 | `GEN.S3`   |  *Note: This endpoint does not return verse content* 
     * List Sections in a Book
     * @param bibleId The ID of the Bible you are looking to fetch
     * @param bookId The Book ID you are looking to fetch
     */
    public getBookSections(bibleId: string, bookId: string, _options?: Configuration): Promise<GetBookSections200Response> {
        const result = this.api.getBookSections(bibleId, bookId, _options);
        return result.toPromise();
    }

    /**
     * Lists `Section` objects for a given `bibleId` and `chapterId`  Lists `Section` objects for a given `bibleId` and `bookId`  A `Section` object represents a known range of verses in the Bible, typically tied to a story. Each Section is accessible via its **Section ID**, a string consisting of a [Book](https://docs.api.bible/guides/books) ID and a section number. Not every Bible has sections enabled. For Bibles with sections enabled, sections are sequential and _should_ cover nearly every verse if queried in order. A few examples from the book of Genesis are:  | Section Title | Verse Range                | Section ID | | ------------- | -------------------------- | ---------- | | The Beginning | Genesis 1:1 - Genesis 2:3  | `GEN.S1`   | | Adam and Eve  | Genesis 2:4 - Genesis 2:25 | `GEN.S2`   | | The Fall      | Genesis 3:1 - Genesis 3:24 | `GEN.S3`   |  *Note: This endpoint does not return verse content* 
     * List Sections in a Chapter
     * @param bibleId The ID of the Bible you are looking to fetch
     * @param chapterId The Chapter ID you are looking to fetch
     */
    public getChapterSections(bibleId: string, chapterId: string, _options?: Configuration): Promise<GetBookSections200Response> {
        const result = this.api.getChapterSections(bibleId, chapterId, _options);
        return result.toPromise();
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
     * Gets a `Verse` object for a given `bibleId` and `verseId`.  A `Verse` object represents a verse in the Bible. Each Verse is accessible via its **Verse ID**, a string consisting of a [Book](https://docs.api.bible/guides/books) ID, a chapter number, and a verse number. A few examples are:  | Verse           | Verse ID   | | --------------- | ---------- | | Genesis 1:1     | `GEN.1.1`  | | John 3:16       | `JHN.3.16` | | Revelation 21.4 | `REV.21.4` |  In addition to information about the given verse, this endpoint will also return all verse content within the `content` field. 
     * Get a Verse
     * @param bibleId The ID of the Bible you are looking to fetch
     * @param verseId The Verse ID you are looking to fetch
     * @param contentType Determines the structure of returned verse content
     * @param includeNotes When &#x60;true&#x60;, returns footnotes in verse content
     * @param includeTitles When &#x60;true&#x60;, returns section titles in verse content
     * @param includeChapterNumbers When &#x60;true&#x60;, returns chapter numbers in verse content
     * @param includeVerseNumbers When &#x60;true&#x60;, returns verse numbers in verse content
     * @param includeVerseSpans When &#x60;true&#x60;, returns spans that wrap verse numbers and verse text in content
     * @param parallels Comma-separated list of Bible IDs. When included, returns parallel verses from the given Bibles
     * @param useOrgId When &#x60;true&#x60;, uses the supplied id(s) to match the &#x60;verseOrgId&#x60; instead of the &#x60;verseId&#x60;
     */
    public getVerse(bibleId: string, verseId: string, contentType?: 'html' | 'json' | 'text', includeNotes?: boolean, includeTitles?: boolean, includeChapterNumbers?: boolean, includeVerseNumbers?: boolean, includeVerseSpans?: boolean, parallels?: string, useOrgId?: boolean, _options?: Configuration): Promise<GetVerse200Response> {
        const result = this.api.getVerse(bibleId, verseId, contentType, includeNotes, includeTitles, includeChapterNumbers, includeVerseNumbers, includeVerseSpans, parallels, useOrgId, _options);
        return result.toPromise();
    }

    /**
     * Lists `Verse` objects for a given `bibleId` and `chapterId`  A `Verse` object represents a verse in the Bible. Each Verse is accessible via its **Verse ID**, a string consisting of a [Book](https://docs.api.bible/guides/books) ID, a chapter number, and a verse number. A few examples are:  | Verse           | Verse ID   | | --------------- | ---------- | | Genesis 1:1     | `GEN.1.1`  | | John 3:16       | `JHN.3.16` | | Revelation 21.4 | `REV.21.4` |  *Note: This endpoint does not return verse content* 
     * List Verses in a Chapter
     * @param bibleId The ID of the Bible you are looking to fetch
     * @param chapterId The Chapter ID you are looking to fetch
     */
    public getVerses(bibleId: string, chapterId: string, _options?: Configuration): Promise<GetVerses200Response> {
        const result = this.api.getVerses(bibleId, chapterId, _options);
        return result.toPromise();
    }


}



