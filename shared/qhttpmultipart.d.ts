declare namespace QHttpMultiPart {
  /**
   * List of known content types for a multipart subtype as described in RFC 2046 and others.
   */
  enum ContentType {
    RelatedType,
    FormDataType,
    AlternativeType
  }
}

declare class QHttpMultiPart {
  /**
   * Appends httpPart to this multipart.
   */
  public append(httpPart: QHttpPart): void;

  /**
   * returns the boundary.
   */
  public boundary(): QByteArray;

  /**
   * Constructs a QHttpMultiPart with content type MixedType and sets parent as the parent object.
   */
  constructor(parent: QObject);

  /**
   * Constructs a QHttpMultiPart with content type contentType and sets parent as the parent object.
   */
  constructor(contentType: QHttpMultiPart.ContentType, parent: QObject);

  /**
   * Sets the boundary to boundary.
   */
  public setBoundary(boundary: QByteArray): void;

  /**
   * Sets the content type to contentType.
   */
  public setContentType(contentType: QHttpMultiPart.ContentType): void;
}
