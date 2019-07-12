declare namespace QHttp {
  /**
   * This enum is used to specify the mode of connection to use:
   */
  enum ConnectionMode {
    ConnectionModeHttps
  }

  /**
   * This enum identifies the error that occurred.
   */
  enum Error {
    UnknownError,
    HostNotFound,
    ConnectionRefused,
    InvalidResponseHeader,
    WrongContentLength,
    Aborted,
    ProxyAuthenticationRequiredError
  }

  /**
   * This enum is used to specify the state the client is in:
   */
  enum State {
    HostLookup,
    Connecting,
    Sending,
    Connected,
    Closing
  }
}

declare class QHttp {
  /**
   * Aborts the current request and deletes all scheduled requests.
   */
  public abort(): void;

  /**
   * Tells the QSslSocket used for the Http connection to ignore the errors reported in the sslErrors() signal.
   */
  public ignoreSslErrors(): void;

  authenticationRequired: QSignal<(hostname: QString, port: quint16, unknown_3: QAuthenticator) => void>;

  /**
   * This signal is emitted when this object reads data from a HTTP server to indicate the current progress of the download.
   */
  dataReadProgress: QSignal<(unknown_1: int, unknown_2: int) => void>;

  /**
   * This signal is emitted when this object sends data to a HTTP server to inform it about the progress of the upload.
   */
  dataSendProgress: QSignal<(unknown_1: int, unknown_2: int) => void>;

  /**
   * This signal is emitted when the last pending request has finished; (it is emitted after the last request's requestFinished() signal).
   */
  done: QSignal<(unknown_1: boolean) => void>;

  proxyAuthenticationRequired: QSignal<(proxy: QNetworkProxy, unknown_2: QAuthenticator) => void>;

  /**
   * This signal is emitted when there is new response data to read.
   */
  readyRead: QSignal<(resp: QHttpResponseHeader) => void>;

  /**
   * This signal is emitted when processing the request identified by id has finished.
   */
  requestFinished: QSignal<(unknown_1: int, unknown_2: boolean) => void>;

  /**
   * This signal is emitted when processing the request identified by id starts.
   */
  requestStarted: QSignal<(unknown_1: int) => void>;

  /**
   * This signal is emitted when the HTTP header of a server response is available.
   */
  responseHeaderReceived: QSignal<(resp: QHttpResponseHeader) => void>;

  /**
   * Forwards the sslErrors signal from the QSslSocket used in QHttp.
   */
  sslErrors: QSignal<(errors: QList<QSslError>) => void>;

  /**
   * This signal is emitted when the state of the QHttp object changes.
   */
  stateChanged: QSignal<(unknown_1: int) => void>;

  /**
   * Returns the number of bytes that can be read from the response content at the moment.
   */
  public bytesAvailable(): qint64;

  /**
   * Deletes all pending requests from the list of scheduled requests.
   */
  public clearPendingRequests(): void;

  /**
   * Closes the connection; this is useful if you have a keep-alive connection and want to close it.
   */
  public close(): int;

  /**
   * Behaves the same as close().
   */
  public closeConnection(): int;

  /**
   * Returns the QIODevice pointer that is used as to store the data of the HTTP request being executed.
   */
  public currentDestinationDevice(): QIODevice;

  /**
   * Returns the identifier of the HTTP request being executed or 0 if there is no request being executed (i.e.
   */
  public currentId(): int;

  /**
   * Returns the request header of the HTTP request being executed.
   */
  public currentRequest(): QHttpRequestHeader;

  /**
   * Returns the QIODevice pointer that is used as the data source of the HTTP request being executed.
   */
  public currentSourceDevice(): QIODevice;

  /**
   * Returns the last error that occurred.
   */
  public error(): Error;

  /**
   * Returns a human-readable description of the last error that occurred.
   */
  public errorString(): QString;

  /**
   * Sends a get request for path to the server set by setHost() or as specified in the constructor.
   */
  public get(path: QString, to: QIODevice): int;

  /**
   * Returns true if there are any requests scheduled that have not yet been executed; otherwise returns false.
   */
  public hasPendingRequests(): boolean;

  /**
   * Sends a header request for path to the server set by setHost() or as specified in the constructor.
   */
  public head(path: QString): int;

  /**
   * Returns the received response header of the most recently finished HTTP request.
   */
  public lastResponse(): QHttpResponseHeader;

  /**
   * Sends a post request for path to the server set by setHost() or as specified in the constructor.
   */
  public post(path: QString, data: QIODevice, to: QIODevice): int;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.data is used as the content data of the HTTP request.
   */
  public post(path: QString, data: QByteArray, to: QIODevice): int;

  /**
   * Constructs a QHttp object.
   */
  constructor(parent: QObject);

  /**
   * Constructs a QHttp object.
   */
  constructor(hostname: QString, port: quint16, parent: QObject);

  /**
   * Constructs a QHttp object.
   */
  constructor(hostname: QString, mode: QHttp.ConnectionMode, port: quint16, parent: QObject);

  /**
   * Reads maxlen bytes from the response content into data and returns the number of bytes read.
   */
  public read(data: char, maxlen: qint64): qint64;

  /**
   * Reads all the bytes from the response content and returns them.
   */
  public readAll(): QByteArray;

  /**
   * Sends a request to the server set by setHost() or as specified in the constructor.
   */
  public request(header: QHttpRequestHeader, device: QIODevice, to: QIODevice): int;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.data is used as the content data of the HTTP request.
   */
  public request(header: QHttpRequestHeader, data: QByteArray, to: QIODevice): int;

  /**
   * Sets the HTTP server that is used for requests to hostName on port port.
   */
  public setHost(hostname: QString, port: quint16): int;

  /**
   * Sets the HTTP server that is used for requests to hostName on port port using the connection mode mode.
   */
  public setHost(hostname: QString, mode: QHttp.ConnectionMode, port: quint16): int;

  /**
   * Enables HTTP proxy support, using the proxy server host on port port.
   */
  public setProxy(host: QString, port: int, username: QString, password: QString): int;

  /**
   * Enables HTTP proxy support using the proxy settings from proxy.
   */
  public setProxy(proxy: QNetworkProxy): int;

  /**
   * Replaces the internal QTcpSocket that QHttp uses with socket.
   */
  public setSocket(socket: QTcpSocket): int;

  /**
   * This function sets the user name userName and password password for web pages that require authentication.
   */
  public setUser(username: QString, password: QString): int;

  /**
   * Returns the current state of the object.
   */
  public state(): State;
}
