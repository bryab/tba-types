/**
 * QString is included here, however it cannot be used  directly because QString has an implicit conversion to/from "string", which Typescript doesn't understand.
 * Where you want to use QString, use _QString and run a find/replace on your code after compilation.
 */
declare namespace _QString {
  /**
   * This enum describes the various normalized forms of Unicode text.
   */
  enum NormalizationForm {
    NormalizationForm_C,
    NormalizationForm_KD,
    NormalizationForm_KC
  }

  /**
   * This enum specifies flags that can be used to affect various aspects of the section() function's behavior with respect to separators and empty fields.
   */
  enum SectionFlag {
    SectionSkipEmpty,
    SectionIncludeLeadingSep,
    SectionIncludeTrailingSep
  }

  /**
   * This enum specifies how the split() function should behave with respect to empty strings.
   */
  enum SplitBehavior {
    SkipEmptyParts
  }
}

declare class _QString {
  public append(c: QChar): _QString;

  /**
   * Appends the string str onto the end of this string.
   */
  public append(s: _QString): _QString;

  /**
   * Appends the given string reference to this string and returns the result.
   */
  public append(s: QStringRef): _QString;

  public append(s: QLatin1String): _QString;

  public append(s: char): _QString;

  public append(s: QByteArray): _QString;

  public arg(a: qlonglong, fieldwidth: int, base: int, fillChar: QChar): _QString;

  public arg(a: qulonglong, fieldwidth: int, base: int, fillChar: QChar): _QString;

  public arg(a: long, fieldwidth: int, base: int, fillChar: QChar): _QString;

  public arg(a: ulong, fieldwidth: int, base: int, fillChar: QChar): _QString;

  public arg(a: int, fieldWidth: int, base: int, fillChar: QChar): _QString;

  public arg(a: uint, fieldWidth: int, base: int, fillChar: QChar): _QString;

  /**
   * fieldWidth specifies the minimum amount of space that a is padded to and filled with the character fillChar.
   */
  public arg(a: short, fieldWidth: int, base: int, fillChar: QChar): _QString;

  public arg(a: ushort, fieldWidth: int, base: int, fillChar: QChar): _QString;

  public arg(a: double, fieldWidth: int, fmt: char, prec: int, fillChar: QChar): _QString;

  public arg(a: char, fieldWidth: int, fillChar: QChar): _QString;

  public arg(a: QChar, fieldWidth: int, fillChar: QChar): _QString;

  /**
   * Returns a copy of this string with the lowest numbered place marker replaced by string a, i.e., %1, %2, ..., %99.
   */
  public arg(a: _QString, fieldWidth: int, fillChar: QChar): _QString;

  public arg(a1: _QString, a2: _QString): _QString;

  public arg(a1: _QString, a2: _QString, a3: _QString): _QString;

  public arg(a1: _QString, a2: _QString, a3: _QString, a4: _QString): _QString;

  public arg(a1: _QString, a2: _QString, a3: _QString, a4: _QString, a5: _QString): _QString;

  public arg(a1: _QString, a2: _QString, a3: _QString, a4: _QString, a5: _QString, a6: _QString): _QString;

  public arg(a1: _QString, a2: _QString, a3: _QString, a4: _QString, a5: _QString, a6: _QString, a7: _QString): _QString;

  public arg(a1: _QString, a2: _QString, a3: _QString, a4: _QString, a5: _QString, a6: _QString, a7: _QString, a8: _QString): _QString;

  public arg(a1: _QString, a2: _QString, a3: _QString, a4: _QString, a5: _QString, a6: _QString, a7: _QString, a8: _QString, a9: _QString): _QString;

  /**
   * Returns the character at the given index position in the string.
   */
  public at(i: int): QChar;

  /**
   * Returns an STL-style iterator pointing to the first character in the string.
   */
  public begin(): iterator;

  public begin(): _iterator;

  /**
   * Returns the maximum number of characters that can be stored in the string without forcing a reallocation.
   */
  public capacity(): int;

  /**
   * Removes n characters from the end of the string.
   */
  public chop(n: int): void;

  /**
   * Clears the contents of the string and makes it empty.
   */
  public clear(): void;

  public compare(s: _QString): int;

  public compare(s: _QString, cs: Qt.CaseSensitivity): int;

  public compare(other: QLatin1String, cs: Qt.CaseSensitivity): int;

  public compare(s: QStringRef, cs: Qt.CaseSensitivity): int;

  /**
   * Returns a const STL-style iterator pointing to the first character in the string.
   */
  public constBegin(): _iterator;

  /**
   * Returns a pointer to the data stored in the _QString.
   */
  public constData(): QChar;

  /**
   * Returns a const STL-style iterator pointing to the imaginary item after the last item in the list.
   */
  public constEnd(): _iterator;

  public contains(c: QChar, cs: Qt.CaseSensitivity): QBool;

  /**
   * Returns true if this string contains an occurrence of the string str; otherwise returns false.
   */
  public contains(s: _QString, cs: Qt.CaseSensitivity): QBool;

  /**
   * Returns true if this string contains an occurrence of the string reference str; otherwise returns false.
   */
  public contains(s: QStringRef, cs: Qt.CaseSensitivity): QBool;

  public contains(rx: QRegExp): QBool;

  public contains(rx: QRegExp): QBool;

  public count(): int;

  public count(c: QChar, cs: Qt.CaseSensitivity): int;

  /**
   * Returns the number of (potentially overlapping) occurrences of the string str in this string.
   */
  public count(s: _QString, cs: Qt.CaseSensitivity): int;

  public count(s: QStringRef, cs: Qt.CaseSensitivity): int;

  public count(unknown_1: QRegExp): int;

  /**
   * Returns a pointer to the data stored in the _QString.
   */
  public data(): QChar;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public data(): QChar;

  public data_ptr(): DataPtr;

  public detach(): void;

  /**
   * Returns an STL-style iterator pointing to the imaginary character after the last character in the string.
   */
  public end(): iterator;

  public end(): _iterator;

  /**
   * Returns true if the string ends with s; otherwise returns false.
   */
  public endsWith(s: _QString, cs: Qt.CaseSensitivity): boolean;

  public endsWith(s: QStringRef, cs: Qt.CaseSensitivity): boolean;

  public endsWith(s: QLatin1String, cs: Qt.CaseSensitivity): boolean;

  public endsWith(c: QChar, cs: Qt.CaseSensitivity): boolean;

  /**
   * Sets every character in the string to character ch.
   */
  public fill(c: QChar, size?: int): _QString;

  public indexOf(c: QChar, from: int, cs: Qt.CaseSensitivity): int;

  /**
   * Returns the index position of the first occurrence of the string str in this string, searching forward from index position from.
   */
  public indexOf(s: _QString, from: int, cs: Qt.CaseSensitivity): int;

  /**
   * Returns the index position of the first occurrence of the string str in this string, searching forward from index position from.
   */
  public indexOf(s: QLatin1String, from: int, cs: Qt.CaseSensitivity): int;

  public indexOf(s: QStringRef, from: int, cs: Qt.CaseSensitivity): int;

  public indexOf(unknown_1: QRegExp, from: int): int;

  public indexOf(unknown_1: QRegExp, from: int): int;

  public insert(i: int, c: QChar): _QString;

  public insert(i: int, uc: QChar, len: int): _QString;

  /**
   * Inserts the string str at the given index position and returns a reference to this string.
   */
  public insert(i: int, s: _QString): _QString;

  public insert(i: int, s: QLatin1String): _QString;

  public isDetached(): boolean;

  /**
   * Returns true if the string has no characters; otherwise returns false.
   */
  public isEmpty(): boolean;

  /**
   * Returns true if this string is null; otherwise returns false.
   */
  public isNull(): boolean;

  /**
   * Returns true if the string is read right to left.
   */
  public isRightToLeft(): boolean;

  public isSharedWith(other: _QString): boolean;

  public isSimpleText(): boolean;

  public lastIndexOf(c: QChar, from: int, cs: Qt.CaseSensitivity): int;

  /**
   * Returns the index position of the last occurrence of the string str in this string, searching backward from index position from.
   */
  public lastIndexOf(s: _QString, from: int, cs: Qt.CaseSensitivity): int;

  public lastIndexOf(s: QLatin1String, from: int, cs: Qt.CaseSensitivity): int;

  public lastIndexOf(s: QStringRef, from: int, cs: Qt.CaseSensitivity): int;

  public lastIndexOf(unknown_1: QRegExp, from: int): int;

  public lastIndexOf(unknown_1: QRegExp, from: int): int;

  /**
   * Returns a substring that contains the n leftmost characters of the string.
   */
  public left(n: int): _QString;

  /**
   * Returns a string of size width that contains this string padded by the fill character.
   */
  public leftJustified(width: int, fill: QChar, trunc: boolean): _QString;

  /**
   * Returns a substring reference to the n leftmost characters of the string.
   */
  public leftRef(n: int): QStringRef;

  /**
   * Returns the number of characters in this string.
   */
  public length(): int;

  public localeAwareCompare(s: _QString): int;

  public localeAwareCompare(s: QStringRef): int;

  /**
   * Returns a string that contains n characters of this string, starting at the specified position index.
   */
  public mid(position: int, n: int): _QString;

  /**
   * Returns a substring reference to n characters of this string, starting at the specified position.
   */
  public midRef(position: int, n: int): QStringRef;

  /**
   * Returns the string in the given Unicode normalization mode.
   */
  public normalized(mode: _QString.NormalizationForm): _QString;

  /**
   * Returns the string in the given Unicode normalization mode, according to the given version of the Unicode standard.
   */
  public normalized(mode: _QString.NormalizationForm, version: QChar.UnicodeVersion): _QString;

  public prepend(c: QChar): _QString;

  /**
   * Prepends the string str to the beginning of this string and returns a reference to this string.
   */
  public prepend(s: _QString): _QString;

  public prepend(s: QLatin1String): _QString;

  public prepend(s: char): _QString;

  public prepend(s: QByteArray): _QString;

  /**
   * Appends the given ch character onto the end of this string.
   */
  public push_back(c: QChar): void;

  /**
   * This function is provided for STL compatibility, appending the given other string onto the end of this string.
   */
  public push_back(s: _QString): void;

  /**
   * Prepends the given ch character to the beginning of this string.
   */
  public push_front(c: QChar): void;

  /**
   * This function is provided for STL compatibility, prepending the given other string to the beginning of this string.
   */
  public push_front(s: _QString): void;

  /**
   * Constructs a null string.
   */
  constructor();

  /**
   * Constructs a string initialized with the first size characters of the QChar array unicode.
   */
  constructor(unicode: QChar, size?: int);

  /**
   * Constructs a string initialized with the characters of the QChar array unicode, which must be terminated with a 0.
   */
  constructor(unicode: QChar);

  /**
   * Constructs a string of size 1 containing the character ch.
   */
  constructor(c: QChar);

  /**
   * Constructs a string of the given size with every character set to ch.
   */
  constructor(size: int, c: QChar);

  /**
   * Constructs a copy of the Latin-1 string str.
   */
  constructor(latin1: QLatin1String);

  /**
   * Constructs a copy of other.
   */
  constructor(unknown_1: _QString);

  /**
   * Constructs a string initialized with the 8-bit string str.
   */
  constructor(ch: char);

  /**
   * Constructs a string initialized with the byte array ba.
   */
  constructor(a: QByteArray);

  constructor(unknown_1: Null);

  /**
   * Constructs a string of the given size without initializing the characters.
   */
  constructor(size: int, unknown_2: Qt.Initialization);

  /**
   * Removes n characters from the string, starting at the given position index, and returns a reference to the string.
   */
  public remove(i: int, len: int): _QString;

  /**
   * Removes every occurrence of the character ch in this string, and returns a reference to this string.
   */
  public remove(c: QChar, cs: Qt.CaseSensitivity): _QString;

  /**
   * Removes every occurrence of the given str string in this string, and returns a reference to this string.
   */
  public remove(s: _QString, cs: Qt.CaseSensitivity): _QString;

  /**
   * Removes every occurrence of the regular expression rx in the string, and returns a reference to the string.
   */
  public remove(rx: QRegExp): _QString;

  /**
   * Returns a copy of this string repeated the specified number of times.
   */
  public repeated(times: int): _QString;

  public replace(i: int, len: int, after: QChar): _QString;

  public replace(i: int, len: int, s: QChar, slen: int): _QString;

  /**
   * Replaces n characters beginning at index position with the string after and returns a reference to this string.
   */
  public replace(i: int, len: int, after: _QString): _QString;

  public replace(before: QChar, after: QChar, cs: Qt.CaseSensitivity): _QString;

  public replace(before: QChar, blen: int, after: QChar, alen: int, cs: Qt.CaseSensitivity): _QString;

  public replace(before: QLatin1String, after: QLatin1String, cs: Qt.CaseSensitivity): _QString;

  public replace(before: QLatin1String, after: _QString, cs: Qt.CaseSensitivity): _QString;

  public replace(before: _QString, after: QLatin1String, cs: Qt.CaseSensitivity): _QString;

  public replace(before: _QString, after: _QString, cs: Qt.CaseSensitivity): _QString;

  public replace(c: QChar, after: _QString, cs: Qt.CaseSensitivity): _QString;

  public replace(c: QChar, after: QLatin1String, cs: Qt.CaseSensitivity): _QString;

  public replace(rx: QRegExp, after: _QString): _QString;

  /**
   * Attempts to allocate memory for at least size characters.
   */
  public reserve(size?: int): void;

  /**
   * Sets the size of the string to size characters.
   */
  public resize(size?: int): void;

  /**
   * Returns a substring that contains the n rightmost characters of the string.
   */
  public right(n: int): _QString;

  /**
   * Returns a string of size() width that contains the fill character followed by the string.
   */
  public rightJustified(width: int, fill: QChar, trunc: boolean): _QString;

  /**
   * Returns a substring reference to the n rightmost characters of the string.
   */
  public rightRef(n: int): QStringRef;

  /**
   * This function returns a section of the string.
   */
  public section(sep: QChar, start: int, end: int, flags: SectionFlags): _QString;

  public section(in_sep: _QString, start: int, end: int, flags: SectionFlags): _QString;

  public section(reg: QRegExp, start: int, end: int, flags: SectionFlags): _QString;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public setNum(unknown_1: short, base: int): _QString;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public setNum(unknown_1: ushort, base: int): _QString;

  /**
   * Sets the string to the printed value of n in the specified base, and returns a reference to the string.
   */
  public setNum(unknown_1: int, base: int): _QString;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public setNum(unknown_1: uint, base: int): _QString;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public setNum(unknown_1: long, base: int): _QString;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public setNum(unknown_1: ulong, base: int): _QString;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public setNum(unknown_1: qlonglong, base: int): _QString;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public setNum(unknown_1: qulonglong, base: int): _QString;

  /**
   * Sets the string to the printed value of n, formatted according to the given format and precision, and returns a reference to the string.
   */
  public setNum(unknown_1: float, f: char, prec: int): _QString;

  /**
   * Sets the string to the printed value of n, formatted according to the given format and precision, and returns a reference to the string.
   */
  public setNum(unknown_1: double, f: char, prec: int): _QString;

  /**
   * Resets the _QString to use the first size Unicode characters in the array unicode.
   */
  public setRawData(unicode: QChar, size?: int): _QString;

  /**
   * Resizes the string to size characters and copies unicode into the string.
   */
  public setUnicode(unicode: QChar, size?: int): _QString;

  /**
   * Resizes the string to size characters and copies unicode into the string.
   */
  public setUtf16(utf16: ushort, size?: int): _QString;

  /**
   * Returns a string that has whitespace removed from the start and the end, and that has each sequence of internal whitespace replaced with a single space.
   */
  public simplified(): _QString;

  /**
   * Returns the number of characters in this string.
   */
  public size(): int;

  /**
   * Splits the string into substrings wherever sep occurs, and returns the list of those strings.
   */
  public split(sep: _QString, behavior: _QString.SplitBehavior, cs: Qt.CaseSensitivity): QStringList;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public split(sep: QChar, behavior: _QString.SplitBehavior, cs: Qt.CaseSensitivity): QStringList;

  /**
   * Splits the string into substrings wherever the regular expression rx matches, and returns the list of those strings.
   */
  public split(sep: QRegExp, behavior: _QString.SplitBehavior): QStringList;

  /**
   * Safely builds a formatted string from the format string cformat and an arbitrary list of arguments.
   */
  public sprintf(format: char, unknown_2: any): _QString;

  /**
   * Releases any memory not required to store the character data.
   */
  public squeeze(): void;

  /**
   * Returns true if the string starts with s; otherwise returns false.
   */
  public startsWith(s: _QString, cs: Qt.CaseSensitivity): boolean;

  /**
   * Returns true if the string starts with the string reference s; otherwise returns false.
   */
  public startsWith(s: QStringRef, cs: Qt.CaseSensitivity): boolean;

  public startsWith(s: QLatin1String, cs: Qt.CaseSensitivity): boolean;

  public startsWith(c: QChar, cs: Qt.CaseSensitivity): boolean;

  /**
   * Swaps string other with this string.
   */
  public swap(other: _QString): void;

  /**
   * Returns an 8-bit representation of the string as a QByteArray.
   */
  public toAscii(): QByteArray;

  /**
   * Returns the case folded equivalent of the string.
   */
  public toCaseFolded(): _QString;

  /**
   * Returns the string converted to a double value.
   */
  public toDouble(ok: boolean): double;

  public toFloat(ok: boolean): float;

  /**
   * Returns the string converted to an int using base base, which is 10 by default and must be between 2 and 36, or 0.
   */
  public toInt(ok: boolean, base: int): int;

  /**
   * Returns a Latin-1 representation of the string as a QByteArray.
   */
  public toLatin1(): QByteArray;

  /**
   * Returns the local 8-bit representation of the string as a QByteArray.
   */
  public toLocal8Bit(): QByteArray;

  /**
   * Returns the string converted to a long using base base, which is 10 by default and must be between 2 and 36, or 0.
   */
  public toLong(ok: boolean, base: int): long;

  /**
   * Returns the string converted to a long long using base base, which is 10 by default and must be between 2 and 36, or 0.
   */
  public toLongLong(ok: boolean, base: int): qlonglong;

  /**
   * Returns a lowercase copy of the string.
   */
  public toLower(): _QString;

  /**
   * Returns the string converted to a short using base base, which is 10 by default and must be between 2 and 36, or 0.
   */
  public toShort(ok: boolean, base: int): short;

  /**
   * Returns a std::string object with the data contained in this _QString.
   */
  public toStdString(): string; // std.string;

  /**
   * Returns a std::wstring object with the data contained in this _QString.
   */
  public toStdWString(): std.wstring;

  /**
   * Returns a UCS-4/UTF-32 representation of the string as a QVector<uint>.
   */
  public toUcs4(): QVector<uint>;

  /**
   * Returns the string converted to an unsigned int using base base, which is 10 by default and must be between 2 and 36, or 0.
   */
  public toUInt(ok: boolean, base: int): uint;

  /**
   * Returns the string converted to an unsigned long using base base, which is 10 by default and must be between 2 and 36, or 0.
   */
  public toULong(ok: boolean, base: int): ulong;

  /**
   * Returns the string converted to an unsigned long long using base base, which is 10 by default and must be between 2 and 36, or 0.
   */
  public toULongLong(ok: boolean, base: int): qulonglong;

  /**
   * Returns an uppercase copy of the string.
   */
  public toUpper(): _QString;

  /**
   * Returns the string converted to an unsigned short using base base, which is 10 by default and must be between 2 and 36, or 0.
   */
  public toUShort(ok: boolean, base: int): ushort;

  /**
   * Returns a UTF-8 representation of the string as a QByteArray.
   */
  public toUtf8(): QByteArray;

  /**
   * Fills the array with the data contained in this _QString object.
   */
  public toWCharArray(array: wchar_t): int;

  /**
   * Returns a string that has whitespace removed from the start and the end.
   */
  public trimmed(): _QString;

  /**
   * Truncates the string at the given position index.
   */
  public truncate(pos: int): void;

  /**
   * Returns a '\0'-terminated Unicode representation of the string.
   */
  public unicode(): QChar;

  /**
   * Returns the _QString as a '\0\'-terminated array of unsigned shorts.
   */
  public utf16(): ushort;

  /**
   * Equivalent method to sprintf(), but takes a va_list ap instead a list of variable arguments.
   */
  public vsprintf(format: char, ap: va_list): _QString;

  public static compare(s1: _QString, s2: _QString): int;

  /**
   * Compares s1 with s2 and returns an integer less than, equal to, or greater than zero if s1 is less than, equal to, or greater than s2.
   */
  public static compare(s1: _QString, s2: _QString, cs: Qt.CaseSensitivity): int;

  public static compare(s1: _QString, s2: QLatin1String, cs: Qt.CaseSensitivity): int;

  public static compare(s1: QLatin1String, s2: _QString, cs: Qt.CaseSensitivity): int;

  public static compare(s1: _QString, s2: QStringRef, unknown_3: Qt.CaseSensitivity): int;

  /**
   * Returns a _QString initialized with the first size characters from the string str.
   */
  public static fromAscii(unknown_1: char, size?: int): _QString;

  /**
   * Returns a _QString initialized with the first size characters of the Latin-1 string str.
   */
  public static fromLatin1(unknown_1: char, size?: int): _QString;

  /**
   * Returns a _QString initialized with the first size characters of the 8-bit string str.
   */
  public static fromLocal8Bit(unknown_1: char, size?: int): _QString;

  /**
   * Constructs a _QString that uses the first size Unicode characters in the array unicode.
   */
  public static fromRawData(unknown_1: QChar, size?: int): _QString;

  /**
   * Returns a copy of the str string.
   */
  public static fromStdString(s: string): _QString;

  /**
   * Returns a copy of the str string.
   */
  public static fromStdWString(s: std.wstring): _QString;

  /**
   * Returns a _QString initialized with the first size characters of the Unicode string unicode (ISO-10646-UCS-4 encoded).
   */
  public static fromUcs4(unknown_1: uint, size?: int): _QString;

  /**
   * Returns a _QString initialized with the first size characters of the Unicode string unicode (ISO-10646-UTF-16 encoded).
   */
  public static fromUtf16(unknown_1: ushort, size?: int): _QString;

  /**
   * Returns a _QString initialized with the first size bytes of the UTF-8 string str.
   */
  public static fromUtf8(unknown_1: char, size?: int): _QString;

  /**
   * Returns a copy of the string, where the encoding of string depends on the size of wchar.
   */
  public static fromWCharArray(unknown_1: wchar_t, size?: int): _QString;

  /**
   * Compares s1 with s2 and returns an integer less than, equal to, or greater than zero if s1 is less than, equal to, or greater than s2.
   */
  public static localeAwareCompare(s1: _QString, s2: _QString): int;

  public static localeAwareCompare(s1: _QString, s2: QStringRef): int;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public static number(unknown_1: int, base: int): _QString;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public static number(unknown_1: uint, base: int): _QString;

  /**
   * Returns a string equivalent of the number n according to the specified base.
   */
  public static number(unknown_1: long, base: int): _QString;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public static number(unknown_1: ulong, base: int): _QString;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public static number(unknown_1: qlonglong, base: int): _QString;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public static number(unknown_1: qulonglong, base: int): _QString;

  /**
   * Returns a string equivalent of the number n, formatted according to the specified format and precision.
   */
  public static number(unknown_1: double, f: char, prec: int): _QString;

  /**
   * The _QString::const_iterator typedef provides an STL-style const iterator for _QString.
   */
  const_iterator: QChar;

  /**
   * The _QString::const_reference typedef provides an STL-style const reference for _QString.
   */
  const_reference: QChar;

  /**
   * Qt-style synonym for _QString::const_iterator.
   */
  ConstIterator: _iterator;

  DataPtr: Data;

  /**
   * The _QString::iterator typedef provides an STL-style non-const iterator for _QString.
   */
  iterator: QChar;

  /**
   * Qt-style synonym for _QString::iterator.
   */
  Iterator: iterator;

  /**
   * The _QString::const_reference typedef provides an STL-style reference for _QString.
   */
  reference: QChar;

  /**
   * The _QString::const_reference typedef provides an STL-style value type for _QString.
   */
  value_type: QChar;

  d: Data;
}
