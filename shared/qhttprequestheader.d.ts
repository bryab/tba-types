declare class QHttpRequestHeader extends QHttpHeader {
  /**
   * Returns the major protocol-version of the HTTP request header.
   */
  public majorVersion(): int;

  /**
   * Returns the method of the HTTP request header.
   */
  public method(): QString;

  /**
   * Returns the minor protocol-version of the HTTP request header.
   */
  public minorVersion(): int;

  /**
   * Returns the request-URI of the HTTP request header.
   */
  public path(): QString;

  /**
   * Constructs an empty HTTP request header.
   */
  constructor();

  /**
   * Constructs a HTTP request header for the method method, the request-URI path and the protocol-version majorVer and minorVer.
   */
  constructor(method: QString, path: QString, majorVer?: int, minorVer?: int);

  /**
   * Constructs a copy of header.
   */
  constructor(header: QHttpRequestHeader);

  /**
   * Constructs a HTTP request header from the string str.
   */
  constructor(str: QString);

  /**
   * This function sets the request method to method, the request-URI to path and the protocol-version to majorVer and minorVer.
   */
  public setRequest(method: QString, path: QString, majorVer: int, minorVer: int): void;
}
