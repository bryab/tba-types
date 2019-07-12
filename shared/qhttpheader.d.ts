declare class QHttpHeader {
  /**
   * Adds a new entry with the key and value.
   */
  public addValue(key: QString, value: QString): void;

  /**
   * Returns all the entries with the given key.
   */
  public allValues(key: QString): QStringList;

  /**
   * Returns the value of the special HTTP header field content-length.
   */
  public contentLength(): uint;

  /**
   * Returns the value of the special HTTP header field content-type.
   */
  public contentType(): QString;

  /**
   * Returns true if the header has an entry for the special HTTP header field content-length; otherwise returns false.
   */
  public hasContentLength(): boolean;

  /**
   * Returns true if the header has an entry for the special HTTP header field content-type; otherwise returns false.
   */
  public hasContentType(): boolean;

  /**
   * Returns true if the HTTP header has an entry with the given key; otherwise returns false.
   */
  public hasKey(key: QString): boolean;

  /**
   * Returns true if the HTTP header is valid; otherwise returns false.
   */
  public isValid(): boolean;

  /**
   * Returns a list of the keys in the HTTP header.
   */
  public keys(): QStringList;

  /**
   * Returns the major protocol-version of the HTTP header.
   */
  public majorVersion(): int;

  /**
   * Returns the minor protocol-version of the HTTP header.
   */
  public minorVersion(): int;

  /**
   * Constructs an empty HTTP header.
   */
  constructor();

  /**
   * Constructs a copy of header.
   */
  constructor(header: QHttpHeader);

  /**
   * Constructs a HTTP header for str.
   */
  constructor(str: QString);

  /**
   * Removes all the entries with the key key from the HTTP header.
   */
  public removeAllValues(key: QString): void;

  /**
   * Removes the entry with the key key from the HTTP header.
   */
  public removeValue(key: QString): void;

  /**
   * Sets the value of the special HTTP header field content-length to len.
   */
  public setContentLength(len: int): void;

  /**
   * Sets the value of the special HTTP header field content-type to type.
   */
  public setContentType(type: QString): void;

  /**
   * Sets the value of the entry with the key to value.
   */
  public setValue(key: QString, value: QString): void;

  /**
   * Sets the header entries to be the list of key value pairs in values.
   */
  public setValues(values: QList<QPair<QString, QString>>): void;

  /**
   * Returns a string representation of the HTTP header.
   */
  public toString(): QString;

  /**
   * Returns the first value for the entry with the given key.
   */
  public value(key: QString): QString;

  /**
   * Returns all the entries in the header.
   */
  public values(): QList<QPair<QString, QString>>;
}
