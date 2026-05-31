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

import { ObservableAudioBiblesApi } from "./ObservableAPI.ts";
import { AudioBiblesApiRequestFactory, AudioBiblesApiResponseProcessor} from "../apis/AudioBiblesApi.ts";

export interface AudioBiblesApiGetAudioBibleRequest {
    /**
     * The ID of the Bible you are looking to fetch
     * @type string
     * @memberof AudioBiblesApigetAudioBible
     */
    bibleId: string
}

export interface AudioBiblesApiGetAudioBiblesRequest {
    /**
     * ISO 639-3 three digit language code used to filter results
     * @type string
     * @memberof AudioBiblesApigetAudioBibles
     */
    language?: string
    /**
     * Bible abbreviation to search for
     * @type string
     * @memberof AudioBiblesApigetAudioBibles
     */
    abbreviation?: string
    /**
     * Bible name to search for
     * @type string
     * @memberof AudioBiblesApigetAudioBibles
     */
    name?: string
    /**
     * Comma separated list of Bible Ids to return
     * @type string
     * @memberof AudioBiblesApigetAudioBibles
     */
    ids?: string
    /**
     * &#x60;bibleId&#x60; of related text Bible used to filter audio Bible results
     * @type string
     * @memberof AudioBiblesApigetAudioBibles
     */
    bibleId?: string
    /**
     * When &#x60;true&#x60;, the returned Bibles will include additional Bible details (e.g. copyright and promo info)
     * @type boolean
     * @memberof AudioBiblesApigetAudioBibles
     */
    includeFullDetails?: boolean
}

export interface AudioBiblesApiGetAudioBookRequest {
    /**
     * The ID of the Bible you are looking to fetch
     * @type string
     * @memberof AudioBiblesApigetAudioBook
     */
    bibleId: string
    /**
     * The Book ID you are looking to fetch
     * @type string
     * @memberof AudioBiblesApigetAudioBook
     */
    bookId: string
    /**
     * When &#x60;true&#x60;, returns available chapter information for each book
     * @type boolean
     * @memberof AudioBiblesApigetAudioBook
     */
    includeChapters?: boolean
}

export interface AudioBiblesApiGetAudioBooksRequest {
    /**
     * The ID of the Bible you are looking to fetch
     * @type string
     * @memberof AudioBiblesApigetAudioBooks
     */
    bibleId: string
    /**
     * When &#x60;true&#x60;, returns available chapter information for each book
     * @type boolean
     * @memberof AudioBiblesApigetAudioBooks
     */
    includeChapters?: boolean
    /**
     * When &#x60;true&#x60;, returns available chapter and section (if available) information for each book
     * @type boolean
     * @memberof AudioBiblesApigetAudioBooks
     */
    includeChaptersAndSections?: boolean
}

export interface AudioBiblesApiGetAudioChapterRequest {
    /**
     * The ID of the Bible you are looking to fetch
     * @type string
     * @memberof AudioBiblesApigetAudioChapter
     */
    bibleId: string
    /**
     * The Chapter ID you are looking to fetch
     * @type string
     * @memberof AudioBiblesApigetAudioChapter
     */
    chapterId: string
}

export interface AudioBiblesApiGetAudioChaptersRequest {
    /**
     * The ID of the Bible you are looking to fetch
     * @type string
     * @memberof AudioBiblesApigetAudioChapters
     */
    bibleId: string
    /**
     * The Book ID you are looking to fetch
     * @type string
     * @memberof AudioBiblesApigetAudioChapters
     */
    bookId: string
}

export class ObjectAudioBiblesApi {
    private api: ObservableAudioBiblesApi

    public constructor(configuration: Configuration, requestFactory?: AudioBiblesApiRequestFactory, responseProcessor?: AudioBiblesApiResponseProcessor) {
        this.api = new ObservableAudioBiblesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a single `AudioBible` for a given `bibleId`  An `AudioBible` object represents a single auditory translation (NIV, ESV, etc.) of the Bible. Each Bible is accessible via its **Bible ID**, a string consisting of a 16-digit unique string followed by a _publication number_ (`-01`, `-02`). A few popular examples are:  | Bible                                  | Bible ID              | | -------------------------------------- | --------------------- | | New International Version (**NIV**)    | `78a9f6124f344018-01` | | New American Standard Bible (**NASB**) | `a761ca71e0b3ddcf-01` | | Christian Standard Bible (**CSB**)     | `a556c5305ee15c3f-01` |
     * Get an Audio Bible
     * @param param the request object
     */
    public getAudioBible(param: AudioBiblesApiGetAudioBibleRequest, options?: Configuration): Promise<GetAudioBible200Response> {
        return this.api.getAudioBible(param.bibleId,  options).toPromise();
    }

    /**
     * Lists `AudioBible` objects authorized for current API Key.  **Audio Bibles** are nearly identical to [Bibles](https://docs.api.bible/guides/bibles), including their content structure. Audio Bibles, however, have one audio file for each chapter and therefore cannot be queried at the verse level. This is why Audio Bibles are queried separately from normal Bibles.  Audio Bible availability via API.Bible requires special licensing. For more information, please reach out to [support@api.bible](mailto:support@api.bible). 
     * List Available Audio Bibles
     * @param param the request object
     */
    public getAudioBibles(param: AudioBiblesApiGetAudioBiblesRequest = {}, options?: Configuration): Promise<GetAudioBibles200Response> {
        return this.api.getAudioBibles(param.language, param.abbreviation, param.name, param.ids, param.bibleId, param.includeFullDetails,  options).toPromise();
    }

    /**
     * Gets a single `Book` object for a given `bibleId` and `bookId`  A `Book` object represents a single book (Matthew, Mark, etc.) of a single Bible. Each `Book` is accessible via a **Book ID**, a 3-digit code representing the book\'s name. A few examples are:  | Book Name | Book ID | | --------- | ------- | | Genesis   | `GEN`   | | Mark      | `MRK`   | | 1 John    | `1JN`   | 
     * Get an Audio Book
     * @param param the request object
     */
    public getAudioBook(param: AudioBiblesApiGetAudioBookRequest, options?: Configuration): Promise<GetBook200Response> {
        return this.api.getAudioBook(param.bibleId, param.bookId, param.includeChapters,  options).toPromise();
    }

    /**
     * Lists `Book` objects for a given `bibleId`  A `Book` object represents a single book (Matthew, Mark, etc.) of a single Bible. Each `Book` is accessible via a **Book ID**, a 3-digit code representing the book\'s name. A few examples are:  | Book Name | Book ID | | --------- | ------- | | Genesis   | `GEN`   | | Mark      | `MRK`   | | 1 John    | `1JN`   |
     * List Books in an Audio Bible
     * @param param the request object
     */
    public getAudioBooks(param: AudioBiblesApiGetAudioBooksRequest, options?: Configuration): Promise<GetBooks200Response> {
        return this.api.getAudioBooks(param.bibleId, param.includeChapters, param.includeChaptersAndSections,  options).toPromise();
    }

    /**
     * Gets a single `AudioChapter` object for a given `bible` and `chapterId`.  A presigned link to the mp3 audio file for this audio chapter will be included in the `resourceUrl` field. This link is unique to your request and will will expire, so it is recommended to download that audio file using that link as quickly as you are able. It is **not** recommended that you stream audio directly from the provided link, as you will run into a number of ongoing issues.  Some audio chapters will include `timecodes`. These allow you to match verses in a chapter to a specific time code in the audio file. This can be helpful if you are using both text and audio Bibles and would like to highlight the verse as it is being read.
     * Get an Audio Chapter
     * @param param the request object
     */
    public getAudioChapter(param: AudioBiblesApiGetAudioChapterRequest, options?: Configuration): Promise<GetAudioChapter200Response> {
        return this.api.getAudioChapter(param.bibleId, param.chapterId,  options).toPromise();
    }

    /**
     * Lists `Chapter` objects for a given `bibleId` and `bookId`  A `Chapter` object represents a single chapter of the Bible. Each Chapter is accessible via its **Chapter ID**, a string consisting of a [Book](https://docs.api.bible/guides/books) ID and a chapter number. A few examples are:  | Chapter       | Chapter ID | | ------------- | ---------- | | Genesis 1     | `GEN.1`    | | John 3        | `JHN.3`    | | Revelation 22 | `REV.22`   |  *Note: This endpoint does not return verse content* 
     * List Audio Chapters in an Audio Book
     * @param param the request object
     */
    public getAudioChapters(param: AudioBiblesApiGetAudioChaptersRequest, options?: Configuration): Promise<GetChapters200Response> {
        return this.api.getAudioChapters(param.bibleId, param.bookId,  options).toPromise();
    }

}

import { ObservableBiblesApi } from "./ObservableAPI.ts";
import { BiblesApiRequestFactory, BiblesApiResponseProcessor} from "../apis/BiblesApi.ts";

export interface BiblesApiGetBibleRequest {
    /**
     * The ID of the Bible you are looking to fetch
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
     * When &#x60;true&#x60;, the returned Bibles will include additional Bible details (e.g. copyright and promo info)
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
     * Gets a single `Bible` object using the given `bibleId`.   A `Bible` object represents a single translation (NIV, ESV, etc.) of the Bible. Each Bible is accessible via its **Bible ID**, a string consisting of a 16-digit unique string followed by a _publication number_ (`-01`, `-02`). A few popular examples are:  | Bible                                  | Bible ID              | | -------------------------------------- | --------------------- | | New International Version (**NIV**)    | `78a9f6124f344018-01` | | New American Standard Bible (**NASB**) | `a761ca71e0b3ddcf-01` | | Christian Standard Bible (**CSB**)     | `a556c5305ee15c3f-01` |
     * Get a Bible
     * @param param the request object
     */
    public getBible(param: BiblesApiGetBibleRequest, options?: Configuration): Promise<GetBible200Response> {
        return this.api.getBible(param.bibleId,  options).toPromise();
    }

    /**
     * Lists `Bible` objects authorized for the current API Key. This includes Creative Commons and Public Domain Bibles, as well as any Bibles licensed via a **Starter** or **Pro Plan**.  A `Bible` object represents a single translation (NIV, ESV, etc.) of the Bible. Each Bible is accessible via its **Bible ID**, a string consisting of a 16-digit unique string followed by a _publication number_ (`-01`, `-02`). A few popular examples are:  | Bible                                  | Bible ID              | | -------------------------------------- | --------------------- | | New International Version (**NIV**)    | `78a9f6124f344018-01` | | New American Standard Bible (**NASB**) | `a761ca71e0b3ddcf-01` | | Christian Standard Bible (**CSB**)     | `a556c5305ee15c3f-01` |
     * List Available Bibles
     * @param param the request object
     */
    public getBibles(param: BiblesApiGetBiblesRequest = {}, options?: Configuration): Promise<GetBibles200Response> {
        return this.api.getBibles(param.language, param.abbreviation, param.name, param.ids, param.includeFullDetails,  options).toPromise();
    }

}

import { ObservableBooksApi } from "./ObservableAPI.ts";
import { BooksApiRequestFactory, BooksApiResponseProcessor} from "../apis/BooksApi.ts";

export interface BooksApiGetBookRequest {
    /**
     * The ID of the Bible you are looking to fetch
     * @type string
     * @memberof BooksApigetBook
     */
    bibleId: string
    /**
     * The Book ID you are looking to fetch
     * @type string
     * @memberof BooksApigetBook
     */
    bookId: string
    /**
     * When &#x60;true&#x60;, returns available chapter information for each book
     * @type boolean
     * @memberof BooksApigetBook
     */
    includeChapters?: boolean
}

export interface BooksApiGetBooksRequest {
    /**
     * The ID of the Bible you are looking to fetch
     * @type string
     * @memberof BooksApigetBooks
     */
    bibleId: string
    /**
     * When &#x60;true&#x60;, returns available chapter information for each book
     * @type boolean
     * @memberof BooksApigetBooks
     */
    includeChapters?: boolean
    /**
     * When &#x60;true&#x60;, returns available chapter and section (if available) information for each book
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
     * Gets a single `Book` object for a given `bibleId` and `bookId`.   A `Book` object represents a single book (Matthew, Mark, etc.) of a single Bible. Each `Book` is accessible via a **Book ID**, a 3-digit code representing the book\'s name. A few examples are:  | Book Name | Book ID | | --------- | ------- | | Genesis   | `GEN`   | | Mark      | `MRK`   | | 1 John    | `1JN`   |
     * Get a Book
     * @param param the request object
     */
    public getBook(param: BooksApiGetBookRequest, options?: Configuration): Promise<GetBook200Response> {
        return this.api.getBook(param.bibleId, param.bookId, param.includeChapters,  options).toPromise();
    }

    /**
     * Lists `Book` objects for a given `bibleId`  A `Book` object represents a single book (Matthew, Mark, etc.) of a single Bible. Each `Book` is accessible via a **Book ID**, a 3-digit code representing the book\'s name. A few examples are:  | Book Name | Book ID | | --------- | ------- | | Genesis   | `GEN`   | | Mark      | `MRK`   | | 1 John    | `1JN`   |
     * List Books in a Bible
     * @param param the request object
     */
    public getBooks(param: BooksApiGetBooksRequest, options?: Configuration): Promise<GetBooks200Response> {
        return this.api.getBooks(param.bibleId, param.includeChapters, param.includeChaptersAndSections,  options).toPromise();
    }

}

import { ObservableChaptersApi } from "./ObservableAPI.ts";
import { ChaptersApiRequestFactory, ChaptersApiResponseProcessor} from "../apis/ChaptersApi.ts";

export interface ChaptersApiGetChapterRequest {
    /**
     * The ID of the Bible you are looking to fetch
     * @type string
     * @memberof ChaptersApigetChapter
     */
    bibleId: string
    /**
     * The Chapter ID you are looking to fetch
     * @type string
     * @memberof ChaptersApigetChapter
     */
    chapterId: string
    /**
     * Determines the structure of returned verse content
     * @type &#39;html&#39; | &#39;json&#39; | &#39;text&#39;
     * @memberof ChaptersApigetChapter
     */
    contentType?: 'html' | 'json' | 'text'
    /**
     * When &#x60;true&#x60;, returns footnotes in verse content
     * @type boolean
     * @memberof ChaptersApigetChapter
     */
    includeNotes?: boolean
    /**
     * When &#x60;true&#x60;, returns section titles in verse content
     * @type boolean
     * @memberof ChaptersApigetChapter
     */
    includeTitles?: boolean
    /**
     * When &#x60;true&#x60;, returns chapter numbers in verse content
     * @type boolean
     * @memberof ChaptersApigetChapter
     */
    includeChapterNumbers?: boolean
    /**
     * When &#x60;true&#x60;, returns verse numbers in verse content
     * @type boolean
     * @memberof ChaptersApigetChapter
     */
    includeVerseNumbers?: boolean
    /**
     * When &#x60;true&#x60;, returns spans that wrap verse numbers and verse text in content
     * @type boolean
     * @memberof ChaptersApigetChapter
     */
    includeVerseSpans?: boolean
    /**
     * Comma-separated list of Bible IDs. When included, returns parallel verses from the given Bibles
     * @type string
     * @memberof ChaptersApigetChapter
     */
    parallels?: string
}

export interface ChaptersApiGetChaptersRequest {
    /**
     * The ID of the Bible you are looking to fetch
     * @type string
     * @memberof ChaptersApigetChapters
     */
    bibleId: string
    /**
     * The Book ID you are looking to fetch
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
     * Gets a single `Chapter` object for a given `bibleId` and `chapterId`.  A `Chapter` object represents a single chapter of the Bible. Each Chapter is accessible via its **Chapter ID**, a string consisting of a [Book](https://docs.api.bible/guides/books) ID and a chapter number. A few examples are:  | Chapter       | Chapter ID | | ------------- | ---------- | | Genesis 1     | `GEN.1`    | | John 3        | `JHN.3`    | | Revelation 22 | `REV.22`   |  In addition to information about the given chapter, this endpoint will also return all verse content included in that chapter within the `content` field.
     * Get a Chapter
     * @param param the request object
     */
    public getChapter(param: ChaptersApiGetChapterRequest, options?: Configuration): Promise<GetChapter200Response> {
        return this.api.getChapter(param.bibleId, param.chapterId, param.contentType, param.includeNotes, param.includeTitles, param.includeChapterNumbers, param.includeVerseNumbers, param.includeVerseSpans, param.parallels,  options).toPromise();
    }

    /**
     * Lists `Chapter` objects for a given `bibleId` and `bookId`  A `Chapter` object represents a single chapter of the Bible. Each Chapter is accessible via its **Chapter ID**, a string consisting of a [Book](#/components/schemas/Book) ID and a chapter number. A few examples are:  | Chapter       | Chapter ID | | ------------- | ---------- | | Genesis 1     | `GEN.1`    | | John 3        | `JHN.3`    | | Revelation 22 | `REV.22`   |  *Note: This endpoint does not return verse content*
     * List Chapters in a Book
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
     * The ID of the Bible you are looking to fetch
     * @type string
     * @memberof PassagesApigetPassage
     */
    bibleId: string
    /**
     * The Passage ID you are looking to fetch
     * @type string
     * @memberof PassagesApigetPassage
     */
    passageId: string
    /**
     * Determines the structure of returned verse content
     * @type &#39;html&#39; | &#39;json&#39; | &#39;text&#39;
     * @memberof PassagesApigetPassage
     */
    contentType?: 'html' | 'json' | 'text'
    /**
     * When &#x60;true&#x60;, returns footnotes in verse content
     * @type boolean
     * @memberof PassagesApigetPassage
     */
    includeNotes?: boolean
    /**
     * When &#x60;true&#x60;, returns section titles in verse content
     * @type boolean
     * @memberof PassagesApigetPassage
     */
    includeTitles?: boolean
    /**
     * When &#x60;true&#x60;, returns chapter numbers in verse content
     * @type boolean
     * @memberof PassagesApigetPassage
     */
    includeChapterNumbers?: boolean
    /**
     * When &#x60;true&#x60;, returns verse numbers in verse content
     * @type boolean
     * @memberof PassagesApigetPassage
     */
    includeVerseNumbers?: boolean
    /**
     * When &#x60;true&#x60;, returns spans that wrap verse numbers and verse text in content
     * @type boolean
     * @memberof PassagesApigetPassage
     */
    includeVerseSpans?: boolean
    /**
     * Comma-separated list of Bible IDs. When included, returns parallel verses from the given Bibles
     * @type string
     * @memberof PassagesApigetPassage
     */
    parallels?: string
    /**
     * When &#x60;true&#x60;, uses the supplied id(s) to match the &#x60;verseOrgId&#x60; instead of the &#x60;verseId&#x60;
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
     * Gets a `Passage` object for a given `bibleId` and `passageId`.  A `Passage` object represents an arbitrary range of verses from the Bible. These ranges are not predefined values, but instead depend on the given input, known as a **Passage ID**. A **Passsage ID** consists of two [Verse](https://docs.api.bible/guides/verses) IDs separated by a `-`. These **Verse IDs** can span chapters and books, though passages are limited to 200 verses. A few passage examples are:  | Verse Range                             | Passage ID          | | --------------------------------------- | ------------------- | | Genesis 1:1 - Genesis 2:3               | `GEN.1.1-GEN.2.3`   | | John 3:1 - John 3:16                    | `JHN.3:1-JHN.3.16`  | | 1 Corinthians 16:1 - 2 Corinthians 1:23 | `1CO.16.1-2CO.1.23` |  In addition to information about the given passage, this endpoint will also return all verse content included in that passage within the `content` field. 
     * Get a Passage
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
     * The ID of the Bible you are looking to fetch
     * @type string
     * @memberof SearchApisearchBible
     */
    bibleId: string
    /**
     * Comma-separated search keywords or a passage reference. Supported wildcards are &#x60;*&#x60; and &#x60;?&#x60;. The &#x60;*&#x60; wildcard matches any character sequence (e.g. searching for \&quot;wo*d\&quot; finds text such as \&quot;word\&quot;, \&quot;world\&quot;, and \&quot;worshipped\&quot;). The &#x60;?&#x60; wildcard matches any matches any single character (e.g. searching for \&quot;l?ve\&quot; finds text such as \&quot;live\&quot; and \&quot;love\&quot;).
     * @type string
     * @memberof SearchApisearchBible
     */
    query?: string
    /**
     * Limits the number of search results returned. Used with the &#x60;offset&#x60; parameter to paginate results.
     * @type number
     * @memberof SearchApisearchBible
     */
    limit?: number
    /**
     * Offsets results by the given amount. Used with the &#x60;limit&#x60; parameter to paginate results.
     * @type number
     * @memberof SearchApisearchBible
     */
    offset?: number
    /**
     * Sorts search results
     * @type &#39;relevance&#39; | &#39;canonical&#39; | &#39;reverse-canonical&#39;
     * @memberof SearchApisearchBible
     */
    sort?: 'relevance' | 'canonical' | 'reverse-canonical'
    /**
     * Comma-separated list of Passage IDs which the search will be limited to. 
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
     * A search will attempt to match all verses with the list of keywords provided in the query string. The order of the keywords does not matter, however _all listed keywords must be present in a verse for it to be considered a match_.  Wildcard searches are supported, and can be used to match partial results:  | Wildcard | Description                    | Example                                                      | | -------- | ------------------------------ | ------------------------------------------------------------ | | `*`      | Matches any character sequence | \"wo\\*d\" finds text such as \"word\", \"world\", and \"worshipped\" | | `?`      | Matches any single character   | \"l?ve\" finds text such as \"live\" and \"love\"                  |  The `text` property of each search result contains only the verse text, it does not contain footnote references or additional formatting. However, more information on a verse can be queried directly by [fetching a single verse](https://docs.api.bible/guides/verses#fetching-a-single-verse). 
     * Search a Bible
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
     * The ID of the Bible you are looking to fetch
     * @type string
     * @memberof SectionsApigetBookSections
     */
    bibleId: string
    /**
     * The Book ID you are looking to fetch
     * @type string
     * @memberof SectionsApigetBookSections
     */
    bookId: string
}

export interface SectionsApiGetChapterSectionsRequest {
    /**
     * The ID of the Bible you are looking to fetch
     * @type string
     * @memberof SectionsApigetChapterSections
     */
    bibleId: string
    /**
     * The Chapter ID you are looking to fetch
     * @type string
     * @memberof SectionsApigetChapterSections
     */
    chapterId: string
}

export interface SectionsApiGetSectionRequest {
    /**
     * The ID of the Bible you are looking to fetch
     * @type string
     * @memberof SectionsApigetSection
     */
    bibleId: string
    /**
     * The Section ID you are looking to fetch
     * @type string
     * @memberof SectionsApigetSection
     */
    sectionId: string
    /**
     * Determines the structure of returned verse content
     * @type &#39;html&#39; | &#39;json&#39; | &#39;text&#39;
     * @memberof SectionsApigetSection
     */
    contentType?: 'html' | 'json' | 'text'
    /**
     * When &#x60;true&#x60;, returns footnotes in verse content
     * @type boolean
     * @memberof SectionsApigetSection
     */
    includeNotes?: boolean
    /**
     * When &#x60;true&#x60;, returns section titles in verse content
     * @type boolean
     * @memberof SectionsApigetSection
     */
    includeTitles?: boolean
    /**
     * When &#x60;true&#x60;, returns chapter numbers in verse content
     * @type boolean
     * @memberof SectionsApigetSection
     */
    includeChapterNumbers?: boolean
    /**
     * When &#x60;true&#x60;, returns verse numbers in verse content
     * @type boolean
     * @memberof SectionsApigetSection
     */
    includeVerseNumbers?: boolean
    /**
     * When &#x60;true&#x60;, returns spans that wrap verse numbers and verse text in content
     * @type boolean
     * @memberof SectionsApigetSection
     */
    includeVerseSpans?: boolean
    /**
     * Comma-separated list of Bible IDs. When included, returns parallel verses from the given Bibles
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
     * Lists `Section` objects for a given `bibleId` and `bookId`  A `Section` object represents a known range of verses in the Bible, typically tied to a story. Each Section is accessible via its **Section ID**, a string consisting of a [Book](https://docs.api.bible/guides/books) ID and a section number. Not every Bible has sections enabled. For Bibles with sections enabled, sections are sequential and _should_ cover nearly every verse if queried in order. A few examples from the book of Genesis are:  | Section Title | Verse Range                | Section ID | | ------------- | -------------------------- | ---------- | | The Beginning | Genesis 1:1 - Genesis 2:3  | `GEN.S1`   | | Adam and Eve  | Genesis 2:4 - Genesis 2:25 | `GEN.S2`   | | The Fall      | Genesis 3:1 - Genesis 3:24 | `GEN.S3`   |  *Note: This endpoint does not return verse content* 
     * List Sections in a Book
     * @param param the request object
     */
    public getBookSections(param: SectionsApiGetBookSectionsRequest, options?: Configuration): Promise<GetBookSections200Response> {
        return this.api.getBookSections(param.bibleId, param.bookId,  options).toPromise();
    }

    /**
     * Lists `Section` objects for a given `bibleId` and `chapterId`  Lists `Section` objects for a given `bibleId` and `bookId`  A `Section` object represents a known range of verses in the Bible, typically tied to a story. Each Section is accessible via its **Section ID**, a string consisting of a [Book](https://docs.api.bible/guides/books) ID and a section number. Not every Bible has sections enabled. For Bibles with sections enabled, sections are sequential and _should_ cover nearly every verse if queried in order. A few examples from the book of Genesis are:  | Section Title | Verse Range                | Section ID | | ------------- | -------------------------- | ---------- | | The Beginning | Genesis 1:1 - Genesis 2:3  | `GEN.S1`   | | Adam and Eve  | Genesis 2:4 - Genesis 2:25 | `GEN.S2`   | | The Fall      | Genesis 3:1 - Genesis 3:24 | `GEN.S3`   |  *Note: This endpoint does not return verse content* 
     * List Sections in a Chapter
     * @param param the request object
     */
    public getChapterSections(param: SectionsApiGetChapterSectionsRequest, options?: Configuration): Promise<GetBookSections200Response> {
        return this.api.getChapterSections(param.bibleId, param.chapterId,  options).toPromise();
    }

    /**
     * Gets a single `Section` object for a given `bibleId` and `sectionId`.   Lists `Section` objects for a given `bibleId` and `bookId`  A `Section` object represents a known range of verses in the Bible, typically tied to a story. Each Section is accessible via its **Section ID**, a string consisting of a [Book](https://docs.api.bible/guides/books) ID and a section number. Not every Bible has sections enabled. For Bibles with sections enabled, sections are sequential and _should_ cover nearly every verse if queried in order. A few examples from the book of Genesis are:  | Section Title | Verse Range                | Section ID | | ------------- | -------------------------- | ---------- | | The Beginning | Genesis 1:1 - Genesis 2:3  | `GEN.S1`   | | Adam and Eve  | Genesis 2:4 - Genesis 2:25 | `GEN.S2`   | | The Fall      | Genesis 3:1 - Genesis 3:24 | `GEN.S3`   |  In addition to information about the given section, this endpoint will also return all verse content included in that section within the `content` field. 
     * Get a Section
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
     * The ID of the Bible you are looking to fetch
     * @type string
     * @memberof VersesApigetVerse
     */
    bibleId: string
    /**
     * The Verse ID you are looking to fetch
     * @type string
     * @memberof VersesApigetVerse
     */
    verseId: string
    /**
     * Determines the structure of returned verse content
     * @type &#39;html&#39; | &#39;json&#39; | &#39;text&#39;
     * @memberof VersesApigetVerse
     */
    contentType?: 'html' | 'json' | 'text'
    /**
     * When &#x60;true&#x60;, returns footnotes in verse content
     * @type boolean
     * @memberof VersesApigetVerse
     */
    includeNotes?: boolean
    /**
     * When &#x60;true&#x60;, returns section titles in verse content
     * @type boolean
     * @memberof VersesApigetVerse
     */
    includeTitles?: boolean
    /**
     * When &#x60;true&#x60;, returns chapter numbers in verse content
     * @type boolean
     * @memberof VersesApigetVerse
     */
    includeChapterNumbers?: boolean
    /**
     * When &#x60;true&#x60;, returns verse numbers in verse content
     * @type boolean
     * @memberof VersesApigetVerse
     */
    includeVerseNumbers?: boolean
    /**
     * When &#x60;true&#x60;, returns spans that wrap verse numbers and verse text in content
     * @type boolean
     * @memberof VersesApigetVerse
     */
    includeVerseSpans?: boolean
    /**
     * Comma-separated list of Bible IDs. When included, returns parallel verses from the given Bibles
     * @type string
     * @memberof VersesApigetVerse
     */
    parallels?: string
    /**
     * When &#x60;true&#x60;, uses the supplied id(s) to match the &#x60;verseOrgId&#x60; instead of the &#x60;verseId&#x60;
     * @type boolean
     * @memberof VersesApigetVerse
     */
    useOrgId?: boolean
}

export interface VersesApiGetVersesRequest {
    /**
     * The ID of the Bible you are looking to fetch
     * @type string
     * @memberof VersesApigetVerses
     */
    bibleId: string
    /**
     * The Chapter ID you are looking to fetch
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
     * Gets a `Verse` object for a given `bibleId` and `verseId`.  A `Verse` object represents a verse in the Bible. Each Verse is accessible via its **Verse ID**, a string consisting of a [Book](https://docs.api.bible/guides/books) ID, a chapter number, and a verse number. A few examples are:  | Verse           | Verse ID   | | --------------- | ---------- | | Genesis 1:1     | `GEN.1.1`  | | John 3:16       | `JHN.3.16` | | Revelation 21.4 | `REV.21.4` |  In addition to information about the given verse, this endpoint will also return all verse content within the `content` field. 
     * Get a Verse
     * @param param the request object
     */
    public getVerse(param: VersesApiGetVerseRequest, options?: Configuration): Promise<GetVerse200Response> {
        return this.api.getVerse(param.bibleId, param.verseId, param.contentType, param.includeNotes, param.includeTitles, param.includeChapterNumbers, param.includeVerseNumbers, param.includeVerseSpans, param.parallels, param.useOrgId,  options).toPromise();
    }

    /**
     * Lists `Verse` objects for a given `bibleId` and `chapterId`  A `Verse` object represents a verse in the Bible. Each Verse is accessible via its **Verse ID**, a string consisting of a [Book](https://docs.api.bible/guides/books) ID, a chapter number, and a verse number. A few examples are:  | Verse           | Verse ID   | | --------------- | ---------- | | Genesis 1:1     | `GEN.1.1`  | | John 3:16       | `JHN.3.16` | | Revelation 21.4 | `REV.21.4` |  *Note: This endpoint does not return verse content* 
     * List Verses in a Chapter
     * @param param the request object
     */
    public getVerses(param: VersesApiGetVersesRequest, options?: Configuration): Promise<GetVerses200Response> {
        return this.api.getVerses(param.bibleId, param.chapterId,  options).toPromise();
    }

}
