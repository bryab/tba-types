declare namespace QNetworkRequest {
  /**
   * Attribute codes for the QNetworkRequest and QNetworkReply.
   */
  enum Attribute {
    HttpReasonPhraseAttribute,
    RedirectionTargetAttribute,
    ConnectionEncryptedAttribute,
    CacheSaveControlAttribute,
    SourceIsFromCacheAttribute,
    DoNotBufferUploadDataAttribute,
    HttpPipeliningWasUsedAttribute,
    CustomVerbAttribute,
    CookieLoadControlAttribute,
    CookieSaveControlAttribute,
    MaximumDownloadBufferSizeAttribute,
    DownloadBufferAttribute,
    User,
    UserMax
  }

  /**
   * Controls the caching mechanism of QNetworkAccessManager.
   */
  enum CacheLoadControl {
    PreferNetwork,
    PreferCache,
    AlwaysCache
  }

  /**
   * List of known header types that QNetworkRequest parses.
   */
  enum KnownHeaders {
    ContentTypeHeader,
    ContentLengthHeader,
    LocationHeader,
    LastModifiedHeader,
    SetCookieHeader,
    ContentDispositionHeader
  }

  /**
   * Indicates if an aspect of the request's loading mechanism has been manually overridden, e.
   */
  enum LoadControl {
    Manual
  }

  /**
   * This enum lists the possible network request priorities.
   */
  enum Priority {
    NormalPriority,
    LowPriority
  }
}

declare class QNetworkRequest {
  /**
   * Returns the attribute associated with the code code.
   */
  public attribute(code: QNetworkRequest.Attribute, defaultValue: QVariant): QVariant;

  /**
   * Returns true if the raw header headerName is present in this network request.
   */
  public hasRawHeader(headerName: QByteArray): boolean;

  /**
   * Returns the value of the known network header header if it is present in this request.
   */
  public header(header: QNetworkRequest.KnownHeaders): QVariant;

  /**
   * Returns a reference to the object that initiated this network request; returns 0 if not set or the object has been destroyed.
   */
  public originatingObject(): QObject;

  /**
   * Return the priority of this request.
   */
  public priority(): Priority;

  /**
   * Constructs a QNetworkRequest object with url as the URL to be requested.
   */
  constructor(url: QUrl);

  /**
   * Creates a copy of other.
   */
  constructor(other: QNetworkRequest);

  /**
   * Returns the raw form of header headerName.
   */
  public rawHeader(headerName: QByteArray): QByteArray;

  /**
   * Returns a list of all raw headers that are set in this network request.
   */
  public rawHeaderList(): QList<QByteArray>;

  /**
   * Sets the attribute associated with code code to be value value.
   */
  public setAttribute(code: QNetworkRequest.Attribute, value: QVariant): void;

  /**
   * Sets the value of the known header header to be value, overriding any previously set headers.
   */
  public setHeader(header: QNetworkRequest.KnownHeaders, value: QVariant): void;

  /**
   * Allows setting a reference to the object initiating the request.
   */
  public setOriginatingObject(object: QObject): void;

  /**
   * Set the priority of this request to priority.
   */
  public setPriority(priority: QNetworkRequest.Priority): void;

  /**
   * Sets the header headerName to be of value headerValue.
   */
  public setRawHeader(headerName: QByteArray, value: QByteArray): void;

  /**
   * Sets this network request's SSL configuration to be config.
   */
  public setSslConfiguration(configuration: QSslConfiguration): void;

  /**
   * Sets the URL this network request is referring to to be url.
   */
  public setUrl(url: QUrl): void;

  /**
   * Returns this network request's SSL configuration.
   */
  public sslConfiguration(): QSslConfiguration;

  /**
   * Returns the URL this network request is referring to.
   */
  public url(): QUrl;

  d: QSharedDataPointer<QNetworkRequestPrivate>;
}
