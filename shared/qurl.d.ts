declare namespace QUrl {
  /**
   * The formatting options define how the URL is formatted when written out as text.
   */
  enum FormattingOption {
    RemoveScheme,
    RemovePassword,
    RemoveUserInfo,
    RemoveAuthority,
    RemovePath,
    RemoveQuery,
    StripTrailingSlash
  }

  /**
   * The parsing mode controls the way QUrl parses strings.
   */
  enum ParsingMode {
    StrictMode
  }
}

declare class QUrl {
  /**
   * Inserts the pair key = value into the query string of the URL.
   */
  public addEncodedQueryItem(key: QByteArray, value: QByteArray): void;

  /**
   * Inserts the pair key = value into the query string of the URL.
   */
  public addQueryItem(key: QString, value: QString): void;

  /**
   * Returns the a list of query string values whose key is equal to key from the URL.
   */
  public allEncodedQueryItemValues(key: QByteArray): QList<QByteArray>;

  /**
   * Returns the a list of query string values whose key is equal to key from the URL.
   */
  public allQueryItemValues(key: QString): QStringList;

  /**
   * Returns the authority of the URL if it is defined; otherwise an empty string is returned.
   */
  public authority(): QString;

  /**
   * Resets the content of the QUrl.
   */
  public clear(): void;

  public data_ptr(): DataPtr;

  /**
   * Forces a detach.
   */
  public detach(): void;

  /**
   * Returns the fragment of the URL if it is defined; otherwise an empty string is returned.
   */
  public encodedFragment(): QByteArray;

  /**
   * Returns the host part of the URL if it is defined; otherwise an empty string is returned.
   */
  public encodedHost(): QByteArray;

  /**
   * Returns the password of the URL if it is defined; otherwise an empty string is returned.
   */
  public encodedPassword(): QByteArray;

  /**
   * Returns the path of the URL if it is defined; otherwise an empty string is returned.
   */
  public encodedPath(): QByteArray;

  /**
   * Returns the query string of the URL in percent encoded form.
   */
  public encodedQuery(): QByteArray;

  /**
   * Returns the query string of the URL, as a map of encoded keys and values.
   */
  public encodedQueryItems(): QList<QPair<QByteArray, QByteArray>>;

  /**
   * Returns the first query string value whose key is equal to key from the URL.
   */
  public encodedQueryItemValue(key: QByteArray): QByteArray;

  /**
   * Returns the user name of the URL if it is defined; otherwise an empty string is returned.
   */
  public encodedUserName(): QByteArray;

  /**
   * Returns a text string that explains why an URL is invalid in the case being; otherwise returns an empty string.
   */
  public errorString(): QString;

  /**
   * Returns the fragment of the URL.
   */
  public fragment(): QString;

  /**
   * Returns true if there is a query string pair whose key is equal to key from the URL.
   */
  public hasEncodedQueryItem(key: QByteArray): boolean;

  /**
   * Returns true if this URL contains a fragment (i.
   */
  public hasFragment(): boolean;

  /**
   * Returns true if this URL contains a Query (i.
   */
  public hasQuery(): boolean;

  /**
   * Returns true if there is a query string pair whose key is equal to key from the URL.
   */
  public hasQueryItem(key: QString): boolean;

  /**
   * Returns the host of the URL if it is defined; otherwise an empty string is returned.
   */
  public host(): QString;

  public isDetached(): boolean;

  /**
   * Returns true if the URL has no data; otherwise returns false.
   */
  public isEmpty(): boolean;

  /**
   * Returns true if this URL is pointing to a local file path.
   */
  public isLocalFile(): boolean;

  /**
   * Returns true if this URL is a parent of childUrl.
   */
  public isParentOf(url: QUrl): boolean;

  /**
   * Returns true if the URL is relative; otherwise returns false.
   */
  public isRelative(): boolean;

  /**
   * Returns true if the URL is valid; otherwise returns false.
   */
  public isValid(): boolean;

  /**
   * Returns the password of the URL if it is defined; otherwise an empty string is returned.
   */
  public password(): QString;

  /**
   * Returns the path of the URL.
   */
  public path(): QString;

  /**
   * Returns the port of the URL, or -1 if the port is unspecified.
   */
  public port(): int;

  /**
   * Returns the port of the URL, or defaultPort if the port is unspecified.
   */
  public port(defaultPort: int): int;

  /**
   * Returns the query string of the URL, as a map of keys and values.
   */
  public queryItems(): QList<QPair<QString, QString>>;

  /**
   * Returns the first query string value whose key is equal to key from the URL.
   */
  public queryItemValue(key: QString): QString;

  /**
   * Returns the character used to delimit between key-value pairs in the query string of the URL.
   */
  public queryPairDelimiter(): char;

  /**
   * Returns the character used to delimit between keys and values in the query string of the URL.
   */
  public queryValueDelimiter(): char;

  /**
   * Constructs an empty QUrl object.
   */
  constructor();

  /**
   * Constructs a URL by parsing url.
   */
  constructor(url: QString);

  /**
   * Parses the url using the parser mode parsingMode.
   */
  constructor(url: QString, mode: QUrl.ParsingMode);

  /**
   * Constructs a copy of other.
   */
  constructor(copy: QUrl);

  /**
   * Removes all the query string pairs whose key is equal to key from the URL.
   */
  public removeAllEncodedQueryItems(key: QByteArray): void;

  /**
   * Removes all the query string pairs whose key is equal to key from the URL.
   */
  public removeAllQueryItems(key: QString): void;

  /**
   * Removes the first query string pair whose key is equal to key from the URL.
   */
  public removeEncodedQueryItem(key: QByteArray): void;

  /**
   * Removes the first query string pair whose key is equal to key from the URL.
   */
  public removeQueryItem(key: QString): void;

  /**
   * Returns the result of the merge of this URL with relative.
   */
  public resolved(relative: QUrl): QUrl;

  /**
   * Returns the scheme of the URL.
   */
  public scheme(): QString;

  /**
   * Sets the authority of the URL to authority.
   */
  public setAuthority(authority: QString): void;

  /**
   * Sets the URL's fragment to the percent-encoded fragment.
   */
  public setEncodedFragment(fragment: QByteArray): void;

  /**
   * Sets the URL's host to the ACE- or percent-encoded host.
   */
  public setEncodedHost(host: QByteArray): void;

  /**
   * Sets the URL's password to the percent-encoded password.
   */
  public setEncodedPassword(password: QByteArray): void;

  /**
   * Sets the URL's path to the percent-encoded path.
   */
  public setEncodedPath(path: QByteArray): void;

  /**
   * Sets the query string of the URL to query.
   */
  public setEncodedQuery(query: QByteArray): void;

  /**
   * Sets the query string of the URL to the encoded version of query.
   */
  public setEncodedQueryItems(query: QList<QPair<QByteArray, QByteArray>>): void;

  /**
   * Constructs a URL by parsing the contents of encodedUrl.
   */
  public setEncodedUrl(url: QByteArray): void;

  /**
   * Constructs a URL by parsing the contents of encodedUrl using the given parsingMode.
   */
  public setEncodedUrl(url: QByteArray, mode: QUrl.ParsingMode): void;

  /**
   * Sets the URL's user name to the percent-encoded userName.
   */
  public setEncodedUserName(userName: QByteArray): void;

  /**
   * Sets the fragment of the URL to fragment.
   */
  public setFragment(fragment: QString): void;

  /**
   * Sets the host of the URL to host.
   */
  public setHost(host: QString): void;

  /**
   * Sets the URL's password to password.
   */
  public setPassword(password: QString): void;

  /**
   * Sets the path of the URL to path.
   */
  public setPath(path: QString): void;

  /**
   * Sets the port of the URL to port.
   */
  public setPort(port: int): void;

  /**
   * Sets the characters used for delimiting between keys and values, and between key-value pairs in the URL's query string.
   */
  public setQueryDelimiters(valueDelimiter: char, pairDelimiter: char): void;

  /**
   * Sets the query string of the URL to an encoded version of query.
   */
  public setQueryItems(query: QList<QPair<QString, QString>>): void;

  /**
   * Sets the scheme of the URL to scheme.
   */
  public setScheme(scheme: QString): void;

  /**
   * Constructs a URL by parsing the contents of url.
   */
  public setUrl(url: QString): void;

  /**
   * Parses url using the parsing mode parsingMode.
   */
  public setUrl(url: QString, mode: QUrl.ParsingMode): void;

  /**
   * Sets the user info of the URL to userInfo.
   */
  public setUserInfo(userInfo: QString): void;

  /**
   * Sets the URL's user name to userName.
   */
  public setUserName(userName: QString): void;

  /**
   * Swaps URL other with this URL.
   */
  public swap(other: QUrl): void;

  /**
   * Returns the encoded representation of the URL if it's valid; otherwise an empty QByteArray is returned.
   */
  public toEncoded(options: FormattingOptions): QByteArray;

  /**
   * Returns the path of this URL formatted as a local file path.
   */
  public toLocalFile(): QString;

  /**
   * Returns the TLD (Top-Level Domain) of the URL, (e.
   */
  public topLevelDomain(): QString;

  /**
   * Returns the human-displayable string representation of the URL.
   */
  public toString(options: FormattingOptions): QString;

  /**
   * Returns the user info of the URL, or an empty string if the user info is undefined.
   */
  public userInfo(): QString;

  /**
   * Returns the user name of the URL if it is defined; otherwise an empty string is returned.
   */
  public userName(): QString;

  /**
   * Returns the Unicode form of the given domain name domain, which is encoded in the ASCII Compatible Encoding (ACE).
   */
  public static fromAce(unknown_1: QByteArray): QString;

  /**
   * Parses input and returns the corresponding QUrl.
   */
  public static fromEncoded(url: QByteArray): QUrl;

  /**
   * Parses the URL using parsingMode.
   */
  public static fromEncoded(url: QByteArray, mode: QUrl.ParsingMode): QUrl;

  /**
   * Returns a QUrl representation of localFile, interpreted as a local file.
   */
  public static fromLocalFile(localfile: QString): QUrl;

  /**
   * Returns a decoded copy of input.
   */
  public static fromPercentEncoding(unknown_1: QByteArray): QString;

  /**
   * Returns the Punycode decoded representation of pc.
   */
  public static fromPunycode(unknown_1: QByteArray): QString;

  /**
   * Returns a valid URL from a user supplied userInput string if one can be deducted.
   */
  public static fromUserInput(userInput: QString): QUrl;

  /**
   * Returns the current whitelist of top-level domains that are allowed to have non-ASCII characters in their compositions.
   */
  public static idnWhitelist(): QStringList;

  /**
   * Sets the whitelist of Top-Level Domains (TLDs) that are allowed to have non-ASCII characters in domains to the value of list.
   */
  public static setIdnWhitelist(unknown_1: QStringList): void;

  /**
   * Returns the ASCII Compatible Encoding of the given domain name domain.
   */
  public static toAce(unknown_1: QString): QByteArray;

  /**
   * Returns an encoded copy of input.
   */
  public static toPercentEncoding(unknown_1: QString, exclude: QByteArray, include: QByteArray): QByteArray;

  /**
   * Returns a uc in Punycode encoding.
   */
  public static toPunycode(unknown_1: QString): QByteArray;

  DataPtr: QUrlPrivate;

  d: QUrlPrivate;
}
