declare class QByteArray {
  /**
   * Appends the character ch to this byte array.
   */
  public append(c: char): QByteArray;

  /**
   * Appends the string str to this byte array.
   */
  public append(s: char): QByteArray;

  public append(s: char, len: int): QByteArray;

  /**
   * Appends the byte array ba onto the end of this byte array.
   */
  public append(a: QByteArray): QByteArray;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.Appends the string str to this byte array.
   */
  public append(s: QString): QByteArray;

  /**
   * Returns the character at index position i in the byte array.
   */
  public at(i: int): char;

  public begin(): iterator;

  public begin(): _iterator;

  /**
   * Returns the maximum number of bytes that can be stored in the byte array without forcing a reallocation.
   */
  public capacity(): int;

  /**
   * Removes n bytes from the end of the byte array.
   */
  public chop(n: int): void;

  /**
   * Clears the contents of the byte array and makes it empty.
   */
  public clear(): void;

  public constBegin(): _iterator;

  /**
   * Returns a pointer to the data stored in the byte array.
   */
  public constData(): char;

  public constEnd(): _iterator;

  /**
   * Returns true if the byte array contains the character ch; otherwise returns false.
   */
  public contains(c: char): QBool;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.Returns true if the byte array contains the string str; otherwise returns false.
   */
  public contains(a: char): QBool;

  /**
   * Returns true if the byte array contains an occurrence of the byte array ba; otherwise returns false.
   */
  public contains(a: QByteArray): QBool;

  /**
   * Returns the number of occurrences of character ch in the byte array.
   */
  public count(c: char): int;

  /**
   * Returns the number of (potentially overlapping) occurrences of string str in the byte array.
   */
  public count(a: char): int;

  /**
   * Returns the number of (potentially overlapping) occurrences of byte array ba in this byte array.
   */
  public count(a: QByteArray): int;

  /**
   * Same as size().
   */
  public count(): int;

  /**
   * Returns a pointer to the data stored in the byte array.
   */
  public data(): char;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public data(): char;

  public data_ptr(): DataPtr;

  public detach(): void;

  public end(): iterator;

  public end(): _iterator;

  /**
   * Returns true if this byte array ends with byte array ba; otherwise returns false.
   */
  public endsWith(a: QByteArray): boolean;

  /**
   * Returns true if this byte array ends with character ch; otherwise returns false.
   */
  public endsWith(c: char): boolean;

  /**
   * Returns true if this byte array ends with string str; otherwise returns false.
   */
  public endsWith(c: char): boolean;

  /**
   * Sets every byte in the byte array to character ch.
   */
  public fill(c: char, size: int): QByteArray;

  /**
   * Returns the index position of the first occurrence of the character ch in the byte array, searching forward from index position from.
   */
  public indexOf(c: char, from: int): int;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.Returns the index position of the first occurrence of the string str in the byte array, searching forward from index position from.
   */
  public indexOf(c: char, from: int): int;

  /**
   * Returns the index position of the first occurrence of the byte array ba in this byte array, searching forward from index position from.
   */
  public indexOf(a: QByteArray, from: int): int;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.Returns the index position of the first occurrence of the string str in the byte array, searching forward from index position from.
   */
  public indexOf(s: QString, from: int): int;

  /**
   * Inserts character ch at index position i in the byte array.
   */
  public insert(i: int, c: char): QByteArray;

  /**
   * Inserts the string str at position i in the byte array.
   */
  public insert(i: int, s: char): QByteArray;

  /**
   * Inserts len bytes of the string str at position i in the byte array.
   */
  public insert(i: int, s: char, len: int): QByteArray;

  /**
   * Inserts the byte array ba at index position i and returns a reference to this byte array.
   */
  public insert(i: int, a: QByteArray): QByteArray;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.Inserts the string str at index position i in the byte array.
   */
  public insert(i: int, s: QString): QByteArray;

  public isDetached(): boolean;

  /**
   * Returns true if the byte array has size 0; otherwise returns false.
   */
  public isEmpty(): boolean;

  /**
   * Returns true if this byte array is null; otherwise returns false.
   */
  public isNull(): boolean;

  public isSharedWith(other: QByteArray): boolean;

  /**
   * Returns the index position of the last occurrence of character ch in the byte array, searching backward from index position from.
   */
  public lastIndexOf(c: char, from: int): int;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.Returns the index position of the last occurrence of the string str in the byte array, searching backward from index position from.
   */
  public lastIndexOf(c: char, from: int): int;

  /**
   * Returns the index position of the last occurrence of the byte array ba in this byte array, searching backward from index position from.
   */
  public lastIndexOf(a: QByteArray, from: int): int;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.Returns the index position of the last occurrence of the string str in the byte array, searching backward from index position from.
   */
  public lastIndexOf(s: QString, from: int): int;

  /**
   * Returns a byte array that contains the leftmost len bytes of this byte array.
   */
  public left(len: int): QByteArray;

  /**
   * Returns a byte array of size width that contains this byte array padded by the fill character.
   */
  public leftJustified(width: int, fill: char, truncate: boolean): QByteArray;

  /**
   * Same as size().
   */
  public length(): int;

  /**
   * Returns a byte array containing len bytes from this byte array, starting at position pos.
   */
  public mid(index: int, len: int): QByteArray;

  /**
   * Prepends the character ch to this byte array.
   */
  public prepend(c: char): QByteArray;

  /**
   * Prepends the string str to this byte array.
   */
  public prepend(s: char): QByteArray;

  /**
   * Prepends len bytes of the string str to this byte array.
   */
  public prepend(s: char, len: int): QByteArray;

  /**
   * Prepends the byte array ba to this byte array and returns a reference to this byte array.
   */
  public prepend(a: QByteArray): QByteArray;

  /**
   * Same as append(ch).
   */
  public push_back(c: char): void;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.Same as append(str).
   */
  public push_back(c: char): void;

  /**
   * This function is provided for STL compatibility.
   */
  public push_back(a: QByteArray): void;

  /**
   * Same as prepend(ch).
   */
  public push_front(c: char): void;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.Same as prepend(str).
   */
  public push_front(c: char): void;

  /**
   * This function is provided for STL compatibility.
   */
  public push_front(a: QByteArray): void;

  /**
   * Constructs an empty byte array.
   */
  constructor();

  /**
   * Constructs a byte array initialized with the string str.
   */
  constructor(unknown: char);

  /**
   * Constructs a byte array containing the first size bytes of array data.
   */
  constructor(unknown_1: char, size: int);

  /**
   * Constructs a byte array of size size with every byte set to character ch.
   */
  constructor(size: int, c: char);

  /**
   * Constructs a byte array of size size with uninitialized contents.
   */
  constructor(size: int, unknown_2: Qt.Initialization);

  /**
   * Constructs a copy of other.
   */
  constructor(unknown_1: QByteArray);

  /**
   * Removes len bytes from the array, starting at index position pos, and returns a reference to the array.
   */
  public remove(index: int, len: int): QByteArray;

  /**
   * Returns a copy of this byte array repeated the specified number of times.
   */
  public repeated(times: int): QByteArray;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.Replaces len bytes from index position pos with the zero terminated string after.
   */
  public replace(index: int, len: int, s: char): QByteArray;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.Replaces len bytes from index position pos with alen bytes from the string after.
   */
  public replace(index: int, len: int, s: char, alen: int): QByteArray;

  /**
   * Replaces len bytes from index position pos with the byte array after, and returns a reference to this byte array.
   */
  public replace(index: int, len: int, s: QByteArray): QByteArray;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.Replaces every occurrence of the character before with the string after.
   */
  public replace(before: char, after: char): QByteArray;

  /**
   * Replaces every occurrence of the character before with the byte array after.
   */
  public replace(before: char, after: QByteArray): QByteArray;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.Replaces every occurrence of the string before with the string after.
   */
  public replace(before: char, after: char): QByteArray;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.Replaces every occurrence of the string before with the string after.
   */
  public replace(before: char, bsize: int, after: char, asize: int): QByteArray;

  /**
   * Replaces every occurrence of the byte array before with the byte array after.
   */
  public replace(before: QByteArray, after: QByteArray): QByteArray;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.Replaces every occurrence of the byte array before with the string after.
   */
  public replace(before: QByteArray, after: char): QByteArray;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.Replaces every occurrence of the string before with the byte array after.
   */
  public replace(before: char, after: QByteArray): QByteArray;

  /**
   * Replaces every occurrence of the character before with the character after.
   */
  public replace(before: char, after: char): QByteArray;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.Replaces every occurrence of the string before with the string after.
   */
  public replace(before: QString, after: char): QByteArray;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.Replaces every occurrence of the character before with the string after.
   */
  public replace(c: char, after: QString): QByteArray;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.Replaces every occurrence of the string before with the byte array after.
   */
  public replace(before: QString, after: QByteArray): QByteArray;

  /**
   * Attempts to allocate memory for at least size bytes.
   */
  public reserve(size: int): void;

  /**
   * Sets the size of the byte array to size bytes.
   */
  public resize(size: int): void;

  /**
   * Returns a byte array that contains the rightmost len bytes of this byte array.
   */
  public right(len: int): QByteArray;

  /**
   * Returns a byte array of size width that contains the fill character followed by this byte array.
   */
  public rightJustified(width: int, fill: char, truncate: boolean): QByteArray;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public setNum(unknown_1: short, base: int): QByteArray;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public setNum(unknown_1: ushort, base: int): QByteArray;

  /**
   * Sets the byte array to the printed value of n in base base (10 by default) and returns a reference to the byte array.
   */
  public setNum(unknown_1: int, base: int): QByteArray;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public setNum(unknown_1: uint, base: int): QByteArray;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public setNum(unknown_1: qlonglong, base: int): QByteArray;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public setNum(unknown_1: qulonglong, base: int): QByteArray;

  /**
   * Sets the byte array to the printed value of n, formatted in format f with precision prec, and returns a reference to the byte array.
   */
  public setNum(unknown_1: float, f: char, prec: int): QByteArray;

  /**
   * Sets the byte array to the printed value of n, formatted in format f with precision prec, and returns a reference to the byte array.
   */
  public setNum(unknown_1: double, f: char, prec: int): QByteArray;

  /**
   * Resets the QByteArray to use the first size bytes of the data array.
   */
  public setRawData(a: char, n: uint): QByteArray;

  /**
   * Returns a byte array that has whitespace removed from the start and the end, and which has each sequence of internal whitespace replaced with a single space.
   */
  public simplified(): QByteArray;

  /**
   * Returns the number of bytes in this byte array.
   */
  public size(): int;

  /**
   * Splits the byte array into subarrays wherever sep occurs, and returns the list of those arrays.
   */
  public split(sep: char): QList<QByteArray>;

  /**
   * Releases any memory not required to store the array's data.
   */
  public squeeze(): void;

  /**
   * Returns true if this byte array starts with byte array ba; otherwise returns false.
   */
  public startsWith(a: QByteArray): boolean;

  /**
   * Returns true if this byte array starts with character ch; otherwise returns false.
   */
  public startsWith(c: char): boolean;

  /**
   * Returns true if this byte array starts with string str; otherwise returns false.
   */
  public startsWith(c: char): boolean;

  /**
   * Swaps byte array other with this byte array.
   */
  public swap(other: QByteArray): void;

  /**
   * Returns a copy of the byte array, encoded as Base64.
   */
  public toBase64(): QByteArray;

  /**
   * Returns the byte array converted to a double value.
   */
  public toDouble(ok: boolean): double;

  /**
   * Returns the byte array converted to a float value.
   */
  public toFloat(ok: boolean): float;

  /**
   * Returns a hex encoded copy of the byte array.
   */
  public toHex(): QByteArray;

  /**
   * Returns the byte array converted to an int using base base, which is 10 by default and must be between 2 and 36, or 0.
   */
  public toInt(ok: boolean, base: int): int;

  public toLong(ok: boolean, base: int): long;

  /**
   * Returns the byte array converted to a {long long} using base base, which is 10 by default and must be between 2 and 36, or 0.
   */
  public toLongLong(ok: boolean, base: int): qlonglong;

  /**
   * Returns a lowercase copy of the byte array.
   */
  public toLower(): QByteArray;

  /**
   * Returns a URI/URL-style percent-encoded copy of this byte array.
   */
  public toPercentEncoding(exclude: QByteArray, include: QByteArray, percent: char): QByteArray;

  /**
   * Returns the byte array converted to a short using base base, which is 10 by default and must be between 2 and 36, or 0.
   */
  public toShort(ok: boolean, base: int): short;

  /**
   * Returns the byte array converted to an {unsigned int} using base base, which is 10 by default and must be between 2 and 36, or 0.
   */
  public toUInt(ok: boolean, base: int): uint;

  public toULong(ok: boolean, base: int): ulong;

  /**
   * Returns the byte array converted to an {unsigned long long} using base base, which is 10 by default and must be between 2 and 36, or 0.
   */
  public toULongLong(ok: boolean, base: int): qulonglong;

  /**
   * Returns an uppercase copy of the byte array.
   */
  public toUpper(): QByteArray;

  /**
   * Returns the byte array converted to an {unsigned short} using base base, which is 10 by default and must be between 2 and 36, or 0.
   */
  public toUShort(ok: boolean, base: int): ushort;

  /**
   * Returns a byte array that has whitespace removed from the start and the end.
   */
  public trimmed(): QByteArray;

  /**
   * Truncates the byte array at index position pos.
   */
  public truncate(pos: int): void;

  /**
   * Returns a decoded copy of the Base64 array base64.
   */
  public static fromBase64(base64: QByteArray): QByteArray;

  /**
   * Returns a decoded copy of the hex encoded array hexEncoded.
   */
  public static fromHex(hexEncoded: QByteArray): QByteArray;

  /**
   * Returns a decoded copy of the URI/URL-style percent-encoded input.
   */
  public static fromPercentEncoding(pctEncoded: QByteArray, percent: char): QByteArray;

  /**
   * Constructs a QByteArray that uses the first size bytes of the data array.
   */
  public static fromRawData(unknown_1: char, size: int): QByteArray;

  /**
   * Returns a byte array containing the string equivalent of the number n to base base (10 by default).
   */
  public static number(unknown_1: int, base: int): QByteArray;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public static number(unknown_1: uint, base: int): QByteArray;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public static number(unknown_1: qlonglong, base: int): QByteArray;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public static number(unknown_1: qulonglong, base: int): QByteArray;

  /**
   * Returns a byte array that contains the printed value of n, formatted in format f with precision prec.
   */
  public static number(unknown_1: double, f: char, prec: int): QByteArray;

  const_iterator: char;

  const_reference: char;

  ConstIterator: _iterator;

  DataPtr: Data;

  iterator: char;

  Iterator: iterator;

  reference: char;

  value_type: char;

  d: Data;
}
