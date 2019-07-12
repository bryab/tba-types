declare namespace QChar {
  /**
   * This enum maps the Unicode character categories.
   */
  enum Category {
    Mark_NonSpacing,
    Mark_SpacingCombining,
    Mark_Enclosing,
    Number_Letter,
    Number_Other,
    Separator_Space,
    Separator_Paragraph,
    Other_Control,
    Other_Format,
    Other_PrivateUse,
    Other_NotAssigned,
    Letter_Uppercase,
    Letter_Titlecase,
    Letter_Modifier,
    Letter_Other,
    Punctuation_Dash,
    Punctuation_Open,
    Punctuation_Close,
    Punctuation_FinalQuote,
    Punctuation_Other,
    Symbol_Math,
    Symbol_Modifier,
    Symbol_Other,
    Punctuation_Dask
  }

  /**
   * This enum type defines names for some of the Unicode combining classes.
   */
  enum CombiningClass {
    Combining_BelowAttached,
    Combining_BelowRightAttached,
    Combining_LeftAttached,
    Combining_AboveLeftAttached,
    Combining_AboveAttached,
    Combining_AboveRightAttached,
    Combining_Below,
    Combining_BelowRight,
    Combining_Left,
    Combining_AboveLeft,
    Combining_Above,
    Combining_AboveRight,
    Combining_DoubleAbove,
    Combining_IotaSubscript
  }

  /**
   * This enum type defines the Unicode decomposition attributes.
   */
  enum Decomposition {
    Canonical,
    Font,
    NoBreak,
    Medial,
    Final,
    Isolated,
    Super,
    Sub,
    Vertical,
    Narrow,
    Small,
    Square,
    Fraction
  }

  /**
   * This enum type defines the Unicode direction attributes.
   */
  enum Direction {
    DirR,
    DirEN,
    DirES,
    DirAN,
    DirCS,
    DirB,
    DirWS,
    DirON,
    DirLRE,
    DirAL,
    DirRLE,
    DirRLO,
    DirNSM,
    DirBN
  }

  /**
   * This enum type defines the Unicode joining attributes.
   */
  enum Joining {
    Dual,
    Right,
    Center
  }

  enum SpecialCharacter {
    Nbsp,
    ReplacementCharacter,
    ObjectReplacementCharacter,
    ByteOrderSwapped,
    ParagraphSeparator,
    LineSeparator
  }

  /**
   * Specifies which version of the [Unicode standard](http://www.
   */
  enum UnicodeVersion {
    Unicode_1_1,
    Unicode_2_0,
    Unicode_2_1_2,
    Unicode_3_1,
    Unicode_3_2,
    Unicode_4_0,
    Unicode_5_0
  }
}

declare class QChar {
  /**
   * Returns the character's category.
   */
  public category(): QChar.Category;

  /**
   * Returns the cell (least significant byte) of the Unicode character.
   */
  public cell(): uchar;

  /**
   * Returns the combining class for the character as defined in the Unicode standard.
   */
  public combiningClass(): char;

  /**
   * Decomposes a character into its parts.
   */
  public decomposition(): QString;

  /**
   * Returns the tag defining the composition of the character.
   */
  public decompositionTag(): QChar.Decomposition;

  /**
   * Returns the numeric value of the digit, or -1 if the character is not a digit.
   */
  public digitValue(): int;

  /**
   * Returns the character's direction.
   */
  public direction(): QChar.Direction;

  /**
   * Returns true if the character should be reversed if the text direction is reversed; otherwise returns false.
   */
  public hasMirrored(): boolean;

  /**
   * Returns true if the character is a decimal digit (Number_DecimalDigit); otherwise returns false.
   */
  public isDigit(): boolean;

  /**
   * Returns true if the QChar is the high part of a utf16 surrogate (ie.
   */
  public isHighSurrogate(): boolean;

  /**
   * Returns true if the character is a letter (Letter_* categories); otherwise returns false.
   */
  public isLetter(): boolean;

  /**
   * Returns true if the character is a letter or number (Letter_* or Number_* categories); otherwise returns false.
   */
  public isLetterOrNumber(): boolean;

  /**
   * Returns true if the character is a lowercase letter, i.
   */
  public isLower(): boolean;

  /**
   * Returns true if the QChar is the low part of a utf16 surrogate (ie.
   */
  public isLowSurrogate(): boolean;

  /**
   * Returns true if the character is a mark (Mark_* categories); otherwise returns false.
   */
  public isMark(): boolean;

  /**
   * Returns true if the character is the Unicode character 0x0000 ('\0'); otherwise returns false.
   */
  public isNull(): boolean;

  /**
   * Returns true if the character is a number (Number_* categories, not just 0-9); otherwise returns false.
   */
  public isNumber(): boolean;

  /**
   * Returns true if the character is a printable character; otherwise returns false.
   */
  public isPrint(): boolean;

  /**
   * Returns true if the character is a punctuation mark (Punctuation_* categories); otherwise returns false.
   */
  public isPunct(): boolean;

  /**
   * Returns true if the character is a separator character (Separator_* categories); otherwise returns false.
   */
  public isSpace(): boolean;

  /**
   * Returns true if the character is a symbol (Symbol_* categories); otherwise returns false.
   */
  public isSymbol(): boolean;

  /**
   * Returns true if the character is a titlecase letter, i.
   */
  public isTitleCase(): boolean;

  /**
   * Returns true if the character is an uppercase letter, i.
   */
  public isUpper(): boolean;

  /**
   * Returns information about the joining properties of the character (needed for certain languages such as Arabic).
   */
  public joining(): QChar.Joining;

  /**
   * Returns the mirrored character if this character is a mirrored character; otherwise returns the character itself.
   */
  public mirroredChar(): QChar;

  /**
   * Constructs a null QChar ('\0').
   */
  constructor();

  /**
   * Constructs a QChar corresponding to ASCII/Latin-1 character ch.
   */
  constructor(c: char);

  /**
   * Constructs a QChar corresponding to ASCII/Latin-1 character ch.
   */
  constructor(c: uchar);

  /**
   * Constructs a QChar corresponding to ASCII/Latin-1 character ch.
   */
  constructor(ch: QLatin1Char);

  /**
   * Constructs a QChar for Unicode cell cell in row row.
   */
  constructor(c: uchar, r: uchar);

  /**
   * Constructs a QChar for the character with Unicode code point code.
   */
  constructor(rc: ushort);

  /**
   * Constructs a QChar for the character with Unicode code point code.
   */
  constructor(rc: short);

  /**
   * Constructs a QChar for the character with Unicode code point code.
   */
  constructor(rc: uint);

  /**
   * Constructs a QChar for the character with Unicode code point code.
   */
  constructor(rc: int);

  /**
   * Constructs a QChar for the predefined character value ch.
   */
  constructor(sc: QChar.SpecialCharacter);

  /**
   * Returns the row (most significant byte) of the Unicode character.
   */
  public row(): uchar;

  public setCell(cell: uchar): void;

  public setRow(row: uchar): void;

  /**
   * Returns the character value of the QChar obtained using the current codec used to read C strings, or 0 if the character is not representable using this codec.
   */
  public toAscii(): char;

  /**
   * Returns the case folded equivalent of the character.
   */
  public toCaseFolded(): QChar;

  /**
   * Returns the Latin-1 character equivalent to the QChar, or 0.
   */
  public toLatin1(): char;

  /**
   * Returns the lowercase equivalent if the character is uppercase or titlecase; otherwise returns the character itself.
   */
  public toLower(): QChar;

  /**
   * Returns the title case equivalent if the character is lowercase or uppercase; otherwise returns the character itself.
   */
  public toTitleCase(): QChar;

  /**
   * Returns the uppercase equivalent if the character is lowercase or titlecase; otherwise returns the character itself.
   */
  public toUpper(): QChar;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public unicode(): ushort;

  /**
   * Returns a reference to the numeric Unicode value of the QChar.
   */
  public unicode(): ushort;

  /**
   * Returns the Unicode version that introduced this character.
   */
  public unicodeVersion(): QChar.UnicodeVersion;

  /**
   * Returns the category of the UCS-4-encoded character specified by ucs4.
   */
  public static category(ucs4: uint): QChar.Category;

  /**
   * Returns the category of the UCS-2-encoded character specified by ucs2.
   */
  public static category(ucs2: ushort): QChar.Category;

  /**
   * Returns the combining class for the UCS-4-encoded character specified by ucs4, as defined in the Unicode standard.
   */
  public static combiningClass(ucs4: uint): char;

  /**
   * Returns the combining class for the UCS-2-encoded character specified by ucs2, as defined in the Unicode standard.
   */
  public static combiningClass(ucs2: ushort): char;

  /**
   * Returns the most recent supported Unicode version.
   */
  public static currentUnicodeVersion(): QChar.UnicodeVersion;

  /**
   * Decomposes the UCS-4-encoded character specified by ucs4 into its constituent parts.
   */
  public static decomposition(ucs4: uint): QString;

  /**
   * Returns the tag defining the composition of the UCS-4-encoded character specified by ucs4.
   */
  public static decompositionTag(ucs4: uint): QChar.Decomposition;

  /**
   * Returns the numeric value of the digit specified by the UCS-4-encoded character, ucs4, or -1 if the character is not a digit.
   */
  public static digitValue(ucs4: uint): int;

  /**
   * Returns the numeric value of the digit, specified by the UCS-2-encoded character, ucs2, or -1 if the character is not a digit.
   */
  public static digitValue(ucs2: ushort): int;

  /**
   * Returns the direction of the UCS-4-encoded character specified by ucs4.
   */
  public static direction(ucs4: uint): QChar.Direction;

  /**
   * Returns the direction of the UCS-2-encoded character specified by ucs2.
   */
  public static direction(ucs2: ushort): QChar.Direction;

  /**
   * Converts the ASCII character c to its equivalent QChar.
   */
  public static fromAscii(c: char): QChar;

  /**
   * Converts the Latin-1 character c to its equivalent QChar.
   */
  public static fromLatin1(c: char): QChar;

  /**
   * Returns the high surrogate value of a ucs4 code point.
   */
  public static highSurrogate(ucs4: uint): ushort;

  /**
   * Returns true if the UCS-4-encoded character specified by ucs4 is the high part of a utf16 surrogate (ie.
   */
  public static isHighSurrogate(ucs4: uint): boolean;

  /**
   * Returns true if the UCS-4-encoded character specified by ucs4 is the low part of a utf16 surrogate (ie.
   */
  public static isLowSurrogate(ucs4: uint): boolean;

  /**
   * Returns information about the joining properties of the UCS-4-encoded character specified by ucs4 (needed for certain languages such as Arabic).
   */
  public static joining(ucs4: uint): QChar.Joining;

  /**
   * Returns information about the joining properties of the UCS-2-encoded character specified by ucs2 (needed for certain languages such as Arabic).
   */
  public static joining(ucs2: ushort): QChar.Joining;

  /**
   * Returns the low surrogate value of a ucs4 code point.
   */
  public static lowSurrogate(ucs4: uint): ushort;

  /**
   * Returns the mirrored character if the UCS-4-encoded character specified by ucs4 is a mirrored character; otherwise returns the character itself.
   */
  public static mirroredChar(ucs4: uint): uint;

  /**
   * Returns the mirrored character if the UCS-2-encoded character specified by ucs2 is a mirrored character; otherwise returns the character itself.
   */
  public static mirroredChar(ucs2: ushort): ushort;

  /**
   * Returns true if the UCS-4-encoded character specified by ucs4 can be split into the high and low parts of a utf16 surrogate (ie.
   */
  public static requiresSurrogates(ucs4: uint): boolean;

  /**
   * Converts a UTF16 surrogate pair with the given high and low values to its UCS-4 code point.
   */
  public static surrogateToUcs4(high: ushort, low: ushort): uint;

  /**
   * Converts a utf16 surrogate pair (high, low) to its ucs4 code point.
   */
  public static surrogateToUcs4(high: QChar, low: QChar): uint;

  /**
   * Returns the case folded equivalent of the UCS-4-encoded character specified by ucs4.
   */
  public static toCaseFolded(ucs4: uint): uint;

  /**
   * Returns the case folded equivalent of the UCS-2-encoded character specified by ucs2.
   */
  public static toCaseFolded(ucs2: ushort): ushort;

  /**
   * Returns the lowercase equivalent of the UCS-4-encoded character specified by ucs4 if the character is uppercase or titlecase; otherwise returns the character itself.
   */
  public static toLower(ucs4: uint): uint;

  /**
   * Returns the lowercase equivalent of the UCS-2-encoded character specified by ucs2 if the character is uppercase or titlecase; otherwise returns the character itself.
   */
  public static toLower(ucs2: ushort): ushort;

  /**
   * Returns the title case equivalent of the UCS-4-encoded character specified by ucs4 if the character is lowercase or uppercase; otherwise returns the character itself.
   */
  public static toTitleCase(ucs4: uint): uint;

  /**
   * Returns the title case equivalent of the UCS-2-encoded character specified by ucs2 if the character is lowercase or uppercase; otherwise returns the character itself.
   */
  public static toTitleCase(ucs2: ushort): ushort;

  /**
   * Returns the uppercase equivalent of the UCS-4-encoded character specified by ucs4 if the character is lowercase or titlecase; otherwise returns the character itself.
   */
  public static toUpper(ucs4: uint): uint;

  /**
   * Returns the uppercase equivalent of the UCS-2-encoded character specified by ucs2 if the character is lowercase or titlecase; otherwise returns the character itself.
   */
  public static toUpper(ucs2: ushort): ushort;

  /**
   * Returns the Unicode version that introduced the character specified in its UCS-4-encoded form as ucs4.
   */
  public static unicodeVersion(ucs4: uint): QChar.UnicodeVersion;

  /**
   * Returns the Unicode version that introduced the character specified in its UCS-2-encoded form as ucs2.
   */
  public static unicodeVersion(ucs2: ushort): QChar.UnicodeVersion;

  ucs: ushort;
}
