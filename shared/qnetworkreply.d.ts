declare namespace QNetworkReply {
  /**
   * Indicates all possible error conditions found during the processing of the request.
   */
  enum NetworkError {
    ConnectionRefusedError,
    RemoteHostClosedError,
    HostNotFoundError,
    OperationCanceledError,
    SslHandshakeFailedError,
    TemporaryNetworkFailureError,
    ProxyConnectionRefusedError,
    ProxyConnectionClosedError,
    ProxyNotFoundError,
    ProxyAuthenticationRequiredError,
    UnknownProxyError,
    ContentAccessDenied,
    ContentNotFoundError,
    AuthenticationRequiredError,
    ContentReSendError,
    ProtocolUnknownError,
    ProtocolInvalidOperationError,
    ProtocolFailure
  }
}

declare class QNetworkReply extends QIODevice {
  /**
   * If this function is called, SSL errors related to network connection will be ignored, including certificate validation errors.
   */
  public ignoreSslErrors(): void;

  /**
   * This signal is emitted to indicate the progress of the download part of this network request, if there's any.
   */
  downloadProgress: QSignal<(bytesReceived: qint64, bytesTotal: qint64) => void>;

  /**
   * This signal is emitted when the reply detects an error in processing.
   */
  error: QSignal<(unknown_1: QNetworkReply.NetworkError) => void>;

  /**
   * This signal is emitted when the reply has finished processing.
   */
  finished: QSignal<() => void>;

  /**
   * This signal is emitted whenever the metadata in this reply changes.
   */
  metaDataChanged: QSignal<() => void>;

  /**
   * This signal is emitted if the SSL/TLS session encountered errors during the set up, including certificate verification errors.
   */
  sslErrors: QSignal<(errors: QList<QSslError>) => void>;

  /**
   * This signal is emitted to indicate the progress of the upload part of this network request, if there's any.
   */
  uploadProgress: QSignal<(bytesSent: qint64, bytesTotal: qint64) => void>;

  /**
   * Aborts the operation immediately and close down any network connections still open.
   */
  public abort(): void;

  /**
   * Returns the attribute associated with the code code.
   */
  public attribute(code: QNetworkRequest.Attribute): QVariant;

  /**
   * Closes this device for reading.
   */
  public close(): void;

  /**
   * Returns the error that was found during the processing of this request.
   */
  //public error(): NetworkError;

  /**
   * Returns true if the raw header of name headerName was sent by the remote server.
   */
  public hasRawHeader(headerName: QByteArray): boolean;

  /**
   * Returns the value of the known header header, if that header was sent by the remote server.
   */
  public header(header: QNetworkRequest.KnownHeaders): QVariant;

  /**
   * If this function is called, the SSL errors given in errors will be ignored.
   */
  public ignoreSslErrors(errors: QList<QSslError>): void;

  /**
   * Returns true when the reply has finished or was aborted.
   */
  public isFinished(): boolean;

  /**
   * Returns true when the request is still processing and the reply has not finished or was aborted yet.
   */
  public isRunning(): boolean;

  public isSequential(): boolean;

  /**
   * Returns the QNetworkAccessManager that was used to create this QNetworkReply object.
   */
  public manager(): QNetworkAccessManager;

  /**
   * Returns the operation that was posted for this reply.
   */
  public operation(): QNetworkAccessManager.Operation;

  /**
   * Returns the raw contents of the header headerName as sent by the remote server.
   */
  public rawHeader(headerName: QByteArray): QByteArray;

  /**
   * Returns a list of headers fields that were sent by the remote server, in the order that they were sent.
   */
  public rawHeaderList(): QList<QByteArray>;

  /**
   * Returns a list of raw header pairs.
   */
  public rawHeaderPairs(): QList<RawHeaderPair>;

  /**
   * Returns the size of the read buffer, in bytes.
   */
  public readBufferSize(): qint64;

  /**
   * Returns the request that was posted for this reply.
   */
  public request(): QNetworkRequest;

  /**
   * Sets the size of the read buffer to be size bytes.
   */
  public setReadBufferSize(size: qint64): void;

  /**
   * Sets the SSL configuration for the network connection associated with this request, if possible, to be that of config.
   */
  public setSslConfiguration(configuration: QSslConfiguration): void;

  /**
   * Returns the SSL configuration and state associated with this reply, if SSL was used.
   */
  public sslConfiguration(): QSslConfiguration;

  /**
   * Returns the URL of the content downloaded or uploaded.
   */
  public url(): QUrl;

  /**
   * RawHeaderPair is a QPair<QByteArray, QByteArray> where the first QByteArray is the header name and the second is the header.
   */
  RawHeaderPair: QPair<QByteArray, QByteArray>;
}
