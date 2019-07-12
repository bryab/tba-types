declare namespace QNetworkAccessManager {
  /**
   * Indicates whether the network is accessible via this network access manager.
   */
  enum NetworkAccessibility {
    NotAccessible,
    Accessible
  }

  /**
   * Indicates the operation this reply is processing.
   */
  enum Operation {
    GetOperation,
    PutOperation,
    PostOperation,
    CustomOperation,
    UnknownOperation
  }
}

declare class QNetworkAccessManager {
  /**
   * This signal is emitted whenever a final server requests authentication before it delivers the requested contents.
   */
  authenticationRequired: QSignal<(reply: QNetworkReply, authenticator: QAuthenticator) => void>;

  /**
   * This signal is emitted whenever a pending network reply is finished.
   */
  finished: QSignal<(reply: QNetworkReply) => void>;

  /**
   * This signal is emitted when the value of the networkAccessible property changes.
   */
  networkAccessibleChanged: QSignal<(accessible: QNetworkAccessManager.NetworkAccessibility) => void>;

  /**
   * This signal is emitted when the status of the network session changes into a usable (Connected) state.
   */
  networkSessionConnected: QSignal<() => void>;

  /**
   * This signal is emitted whenever a proxy requests authentication and QNetworkAccessManager cannot find a valid, cached credential.
   */
  proxyAuthenticationRequired: QSignal<(proxy: QNetworkProxy, authenticator: QAuthenticator) => void>;

  /**
   * This signal is emitted if the SSL/TLS session encountered errors during the set up, including certificate verification errors.
   */
  sslErrors: QSignal<(reply: QNetworkReply, errors: QList<QSslError>) => void>;

  /**
   * Returns the current active network configuration.
   */
  public activeConfiguration(): QNetworkConfiguration;

  /**
   * Returns the cache that is used to store data obtained from the network.
   */
  public cache(): QAbstractNetworkCache;

  /**
   * Returns the network configuration that will be used to create the QNetworkSession{network session} which will be used when processing network requests.
   */
  public configuration(): QNetworkConfiguration;

  /**
   * Returns the QNetworkCookieJar that is used to store cookies obtained from the network as well as cookies that are about to be sent.
   */
  public cookieJar(): QNetworkCookieJar;

  /**
   * Sends a request to delete the resource identified by the URL of request.
   */
  public deleteResource(request: QNetworkRequest): QNetworkReply;

  /**
   * Posts a request to obtain the contents of the target request and returns a new QNetworkReply object opened for reading which emits the readyRead() signal whenever new data arrives.
   */
  public get(request: QNetworkRequest): QNetworkReply;

  /**
   * Posts a request to obtain the network headers for request and returns a new QNetworkReply object which will contain such headers.
   */
  public head(request: QNetworkRequest): QNetworkReply;

  /**
   * Sends an HTTP POST request to the destination specified by request and returns a new QNetworkReply object opened for reading that will contain the reply sent by the server.
   */
  public post(request: QNetworkRequest, data: QIODevice): QNetworkReply;

  /**
   * Sends the contents of the data byte array to the destination specified by request.
   */
  public post(request: QNetworkRequest, data: QByteArray): QNetworkReply;

  /**
   * Sends the contents of the multiPart message to the destination specified by request.
   */
  public post(request: QNetworkRequest, multiPart: QHttpMultiPart): QNetworkReply;

  /**
   * Returns the QNetworkProxy that the requests sent using this QNetworkAccessManager object will use.
   */
  public proxy(): QNetworkProxy;

  public proxyFactory(): QNetworkProxyFactory;

  /**
   * Uploads the contents of data to the destination request and returnes a new QNetworkReply object that will be open for reply.
   */
  public put(request: QNetworkRequest, data: QIODevice): QNetworkReply;

  /**
   * Sends the contents of the data byte array to the destination specified by request.
   */
  public put(request: QNetworkRequest, data: QByteArray): QNetworkReply;

  /**
   * Sends the contents of the multiPart message to the destination specified by request.
   */
  public put(request: QNetworkRequest, multiPart: QHttpMultiPart): QNetworkReply;

  /**
   * Constructs a QNetworkAccessManager object that is the center of the Network Access API and sets parent as the parent object.
   */
  constructor(parent: QObject);

  /**
   * Sends a custom request to the server identified by the URL of request.
   */
  public sendCustomRequest(request: QNetworkRequest, verb: QByteArray, data: QIODevice): QNetworkReply;

  /**
   * Sets the manager's network cache to be the cache specified.
   */
  public setCache(cache: QAbstractNetworkCache): void;

  /**
   * Sets the network configuration that will be used when creating the QNetworkSession{network session} to config.
   */
  public setConfiguration(config: QNetworkConfiguration): void;

  /**
   * Sets the manager's cookie jar to be the cookieJar specified.
   */
  public setCookieJar(cookieJar: QNetworkCookieJar): void;

  /**
   * Overrides the reported network accessibility.
   */
  public setNetworkAccessible(accessible: QNetworkAccessManager.NetworkAccessibility): void;

  /**
   * Sets the proxy to be used in future requests to be proxy.
   */
  public setProxy(proxy: QNetworkProxy): void;

  /**
   * Sets the proxy factory for this class to be factory.
   */
  public setProxyFactory(factory: QNetworkProxyFactory): void;

  /**
   * whether the network is currently accessible via this network access manager.
   */
  networkAccessible: NetworkAccessibility;
}
