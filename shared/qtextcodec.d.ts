declare namespace QTextCodec {
  enum ConversionFlag {
    ConvertInvalidToNull,
    IgnoreHeader,
    FreeFunction
  }
}

declare class QTextCodec {
  /**
   * Subclasses can return a number of aliases for the codec in question.
   */
  public aliases(): QList<QByteArray>;

  /**
   * Returns true if the Unicode character ch can be fully encoded with this codec; otherwise returns false.
   */
  public canEncode(unknown_1: QChar): boolean;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.s contains the string being tested for encode-ability.
   */
  public canEncode(unknown_1: QString): boolean;

  /**
   * Converts str from Unicode to the encoding of this codec, and returns the result in a QByteArray.
   */
  public fromUnicode(uc: QString): QByteArray;

  /**
   * Converts the first number of characters from the input array from Unicode to the encoding of this codec, and returns the result in a QByteArray.
   */
  public fromUnicode(_in: QChar, length: int, state: ConverterState): QByteArray;

  /**
   * Creates a QTextDecoder which stores enough state to decode chunks of char * data to create chunks of Unicode data.
   */
  public makeDecoder(): QTextDecoder;

  public makeDecoder(flags: ConversionFlags): QTextDecoder;

  /**
   * Creates a QTextEncoder which stores enough state to encode chunks of Unicode data as char * data.
   */
  public makeEncoder(): QTextEncoder;

  public makeEncoder(flags: ConversionFlags): QTextEncoder;

  /**
   * Subclasses of QTextCodec must reimplement this function.
   */
  public mibEnum(): int;

  /**
   * QTextCodec subclasses must reimplement this function.
   */
  public name(): QByteArray;

  /**
   * Converts a from the encoding of this codec to Unicode, and returns the result in a QString.
   */
  public toUnicode(unknown_1: QByteArray): QString;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.chars contains the source characters.
   */
  public toUnicode(chars: char): QString;

  /**
   * Converts the first size characters from the input from the encoding of this codec to Unicode, and returns the result in a QString.
   */
  public toUnicode(_in: char, length: int, state: ConverterState): QString;

  /**
   * Returns the list of all available codecs, by name.
   */
  public static availableCodecs(): QList<QByteArray>;

  /**
   * Returns the list of MIBs for all available codecs.
   */
  public static availableMibs(): QList<int>;

  /**
   * Returns the codec used by QString to convert to and from const char * and QByteArrays.
   */
  public static codecForCStrings(): QTextCodec;

  /**
   * Tries to detect the encoding of the provided snippet of HTML in the given byte array, ba, by checking the BOM (Byte Order Mark) and the content-type meta header and returns a QTextCodec instance that is capable of decoding the html to unicode.
   */
  public static codecForHtml(ba: QByteArray): QTextCodec;

  /**
   * Tries to detect the encoding of the provided snippet of HTML in the given byte array, ba, by checking the BOM (Byte Order Mark) and the content-type meta header and returns a QTextCodec instance that is capable of decoding the html to unicode.
   */
  public static codecForHtml(ba: QByteArray, defaultCodec: QTextCodec): QTextCodec;

  /**
   * Returns a pointer to the codec most suitable for this locale.
   */
  public static codecForLocale(): QTextCodec;

  /**
   * Returns the QTextCodec which matches the MIBenum mib.
   */
  public static codecForMib(mib: int): QTextCodec;

  /**
   * Searches all installed QTextCodec objects and returns the one which best matches name; the match is case-insensitive.
   */
  public static codecForName(name: QByteArray): QTextCodec;

  /**
   * Searches all installed QTextCodec objects and returns the one which best matches name; the match is case-insensitive.
   */
  public static codecForName(name: char): QTextCodec;

  /**
   * Returns the codec used by QObject::tr() on its argument.
   */
  public static codecForTr(): QTextCodec;

  /**
   * Tries to detect the encoding of the provided snippet ba by using the BOM (Byte Order Mark) and returns a QTextCodec instance that is capable of decoding the text to unicode.
   */
  public static codecForUtfText(ba: QByteArray): QTextCodec;

  /**
   * Tries to detect the encoding of the provided snippet ba by using the BOM (Byte Order Mark) and returns a QTextCodec instance that is capable of decoding the text to unicode.
   */
  public static codecForUtfText(ba: QByteArray, defaultCodec: QTextCodec): QTextCodec;

  public static setCodecForCStrings(c: QTextCodec): void;

  /**
   * Set the codec to c; this will be returned by codecForLocale().
   */
  public static setCodecForLocale(c: QTextCodec): void;

  public static setCodecForTr(c: QTextCodec): void;
}
