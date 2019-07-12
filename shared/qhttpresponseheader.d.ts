declare class QHttpResponseHeader extends QHttpHeader {
  /**
   * Returns the major protocol-version of the HTTP response header.
   */
  public majorVersion(): int;

  /**
   * Returns the minor protocol-version of the HTTP response header.
   */
  public minorVersion(): int;

  /**
   * Constructs an empty HTTP response header.
   */
  constructor();

  /**
   * Constructs a copy of header.
   */
  constructor(header: QHttpResponseHeader);

  /**
   * Constructs a HTTP response header from the string str.
   */
  constructor(str: QString);

  /**
   * Constructs a QHttpResponseHeader, setting the status code to code, the reason phrase to text and the protocol-version to majorVer and minorVer.
   */
  constructor(code: int, text: QString, majorVer: int, minorVer: int);

  /**
   * Returns the reason phrase of the HTTP response header.
   */
  public reasonPhrase(): QString;

  /**
   * Sets the status code to code, the reason phrase to text and the protocol-version to majorVer and minorVer.
   */
  public setStatusLine(code: int, text: QString, majorVer: int, minorVer: int): void;

  /**
   * Returns the status code of the HTTP response header.
   */
  public statusCode(): int;
}
