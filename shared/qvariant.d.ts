declare namespace QVariant {
  /**
   * This enum type defines the types of variable that a QVariant can contain.
   */
  enum Type {
    Bool,
    Int,
    UInt,
    ULongLong,
    Double,
    Char,
    List,
    String,
    StringList,
    BitArray,
    Date,
    Time,
    Url,
    Locale,
    Rect,
    Size,
    SizeF,
    Line,
    Point,
    PointF,
    RegExp,
    EasingCurve,
    LastCoreType,
    Font,
    Brush,
    Color,
    Palette,
    Image,
    Polygon,
    Region,
    Cursor,
    SizePolicy,
    KeySequence,
    TextLength,
    TextFormat,
    Matrix,
    Matrix4x4,
    Vector2D,
    Vector3D,
    Quaternion,
    LastGuiType,
    UserType
  }
}

declare class QVariant {
  /**
   * Returns true if the variant's type can be cast to the requested type, t.
   */
  public canConvert(t: QVariant.Type): boolean;

  /**
   * Convert this variant to type Invalid and free up any resources used.
   */
  public clear(): void;

  public constData(): void;

  /**
   * Casts the variant to the requested type, t.
   */
  public convert(t: QVariant.Type): boolean;

  public data(): void;

  public data_ptr(): DataPtr;

  public detach(): void;

  public isDetached(): boolean;

  /**
   * Returns true if this is a NULL variant, false otherwise.
   */
  public isNull(): boolean;

  /**
   * Returns true if the storage type of this variant is not QVariant::Invalid; otherwise returns false.
   */
  public isValid(): boolean;

  /**
   * Internal function for loading a variant from stream s.
   */
  public load(ds: QDataStream): void;

  /**
   * Constructs an invalid variant.
   */
  constructor();

  /**
   * Internal function for saving a variant to the stream s.
   */
  public save(ds: QDataStream): void;

  /**
   * Swaps variant other with this variant.
   */
  public swap(other: QVariant): void;

  /**
   * Returns the variant as a QBitArray if the variant has type() BitArray ; otherwise returns an empty bit array.
   */
  public toBitArray(): QBitArray;

  /**
   * Returns the variant as a bool if the variant has type() Bool.
   */
  public toBool(): boolean;

  /**
   * Returns the variant as a QByteArray if the variant has type() ByteArray or String (converted using QString::fromAscii()); otherwise returns an empty byte array.
   */
  public toByteArray(): QByteArray;

  /**
   * Returns the variant as a QChar if the variant has type() Char , Int , or UInt ; otherwise returns an invalid QChar.
   */
  public toChar(): QChar;

  /**
   * Returns the variant as a QDate if the variant has type() Date , DateTime , or String ; otherwise returns an invalid date.
   */
  public toDate(): QDate;

  /**
   * Returns the variant as a QDateTime if the variant has type() DateTime , Date , or String ; otherwise returns an invalid date/time.
   */
  public toDateTime(): QDateTime;

  /**
   * Returns the variant as a double if the variant has type() Double , QMetaType::Float , Bool , ByteArray , Int , LongLong , String , UInt , or ULongLong ; otherwise returns 0.0.
   */
  public toDouble(ok: boolean): double;

  /**
   * Returns the variant as a QEasingCurve if the variant has type() EasingCurve ; otherwise returns a default easing curve.
   */
  public toEasingCurve(): QEasingCurve;

  /**
   * Returns the variant as a float if the variant has type() Double , QMetaType::Float , Bool , ByteArray , Int , LongLong , String , UInt , or ULongLong ; otherwise returns 0.0.
   */
  public toFloat(ok: boolean): float;

  /**
   * Returns the variant as a QHash<QString, QVariant> if the variant has type() Hash ; otherwise returns an empty map.
   */
  public toHash(): QHash<QString, QVariant>;

  /**
   * Returns the variant as an int if the variant has type() Int , Bool , ByteArray , Char , Double , LongLong , String , UInt , or ULongLong ; otherwise returns 0.
   */
  public toInt(ok: boolean): int;

  /**
   * Returns the variant as a QLine if the variant has type() Line ; otherwise returns an invalid QLine.
   */
  public toLine(): QLine;

  /**
   * Returns the variant as a QLineF if the variant has type() LineF ; otherwise returns an invalid QLineF.
   */
  public toLineF(): QLineF;

  /**
   * Returns the variant as a QVariantList if the variant has type() List or StringList ; otherwise returns an empty list.
   */
  public toList(): QList<QVariant>;

  /**
   * Returns the variant as a QLocale if the variant has type() Locale ; otherwise returns an invalid QLocale.
   */
  public toLocale(): QLocale;

  /**
   * Returns the variant as a long long int if the variant has type() LongLong , Bool , ByteArray , Char , Double , Int , String , UInt , or ULongLong ; otherwise returns 0.
   */
  public toLongLong(ok: boolean): qlonglong;

  /**
   * Returns the variant as a QMap<QString, QVariant> if the variant has type() Map ; otherwise returns an empty map.
   */
  public toMap(): QMap<QString, QVariant>;

  /**
   * Returns the variant as a QPoint if the variant has type() Point or PointF ; otherwise returns a null QPoint.
   */
  public toPoint(): QPoint;

  /**
   * Returns the variant as a QPointF if the variant has type() Point or PointF ; otherwise returns a null QPointF.
   */
  public toPointF(): QPointF;

  /**
   * Returns the variant as a qreal if the variant has type() Double , QMetaType::Float , Bool , ByteArray , Int , LongLong , String , UInt , or ULongLong ; otherwise returns 0.0.
   */
  public toReal(ok: boolean): qreal;

  /**
   * Returns the variant as a QRect if the variant has type() Rect ; otherwise returns an invalid QRect.
   */
  public toRect(): QRect;

  /**
   * Returns the variant as a QRectF if the variant has type() Rect or RectF ; otherwise returns an invalid QRectF.
   */
  public toRectF(): QRectF;

  /**
   * Returns the variant as a QRegExp if the variant has type() RegExp ; otherwise returns an empty QRegExp.
   */
  public toRegExp(): QRegExp;

  /**
   * Returns the variant as a QSize if the variant has type() Size ; otherwise returns an invalid QSize.
   */
  public toSize(): QSize;

  /**
   * Returns the variant as a QSizeF if the variant has type() SizeF ; otherwise returns an invalid QSizeF.
   */
  public toSizeF(): QSizeF;

  /**
   * Returns the variant as a QString if the variant has type() String , Bool , ByteArray , Char , Date , DateTime , Double , Int , LongLong , StringList , Time , UInt , or ULongLong ; otherwise returns an empty string.
   */
  public toString(): QString;

  /**
   * Returns the variant as a QStringList if the variant has type() StringList, String , or List of a type that can be converted to QString; otherwise returns an empty list.
   */
  public toStringList(): QStringList;

  /**
   * Returns the variant as a QTime if the variant has type() Time , DateTime , or String ; otherwise returns an invalid time.
   */
  public toTime(): QTime;

  /**
   * Returns the variant as an unsigned int if the variant has type() UInt , Bool , ByteArray , Char , Double , Int , LongLong , String , or ULongLong ; otherwise returns 0.
   */
  public toUInt(ok: boolean): uint;

  /**
   * Returns the variant as as an unsigned long long int if the variant has type() ULongLong , Bool , ByteArray , Char , Double , Int , LongLong , String , or UInt ; otherwise returns 0.
   */
  public toULongLong(ok: boolean): qulonglong;

  /**
   * Returns the variant as a QUrl if the variant has type() Url ; otherwise returns an invalid QUrl.
   */
  public toUrl(): QUrl;

  /**
   * Returns the storage type of the value stored in the variant.
   */
  public type(): QVariant.Type;

  /**
   * Returns the name of the type stored in the variant.
   */
  public typeName(): char;

  /**
   * Returns the storage type of the value stored in the variant.
   */
  public userType(): int;
}
