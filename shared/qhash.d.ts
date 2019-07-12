declare class QHash<Key, T> {
  /**
   * Returns an STL-style iterator pointing to the first item in the hash.
   */
  public begin(): iterator;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public begin(): _iterator;

  /**
   * Returns the number of buckets in the QHash's internal hash table.
   */
  public capacity(): int;

  /**
   * Removes all items from the hash.
   */
  public clear(): void;

  /**
   * Returns a const STL-style iterator pointing to the first item in the hash.
   */
  public constBegin(): _iterator;

  /**
   * Returns a const STL-style iterator pointing to the imaginary item after the last item in the hash.
   */
  public constEnd(): _iterator;

  /**
   * Returns an iterator pointing to the item with the key in the hash.
   */
  public constFind(key: Key): _iterator;

  /**
   * Returns true if the hash contains an item with the key; otherwise returns false.
   */
  public contains(key: Key): boolean;

  /**
   * Returns the number of items associated with the key.
   */
  public count(key: Key): int;

  /**
   * Same as size().
   */
  public count(): int;

  /**
   * Detaches this hash from any other hashes with which it may share data.
   */
  public detach(): void;

  /**
   * This function is provided for STL compatibility.
   */
  public empty(): boolean;

  /**
   * Returns an STL-style iterator pointing to the imaginary item after the last item in the hash.
   */
  public end(): iterator;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public end(): _iterator;

  /**
   * Removes the (key, value) pair associated with the iterator pos from the hash, and returns an iterator to the next item in the hash.
   */
  public erase(it: iterator): iterator;

  /**
   * Returns an iterator pointing to the item with the key in the hash.
   */
  public find(key: Key): iterator;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public find(key: Key): _iterator;

  /**
   * Inserts a new item with the key and a value of value.
   */
  public insert(key: Key, value: T): iterator;

  /**
   * Inserts a new item with the key and a value of value.
   */
  public insertMulti(key: Key, value: T): iterator;

  /**
   * Returns true if the hash's internal data isn't shared with any other hash object; otherwise returns false.
   */
  public isDetached(): boolean;

  /**
   * Returns true if the hash contains no items; otherwise returns false.
   */
  public isEmpty(): boolean;

  public isSharedWith(other: QHash<Key, T>): boolean;

  /**
   * Returns the first key mapped to value.
   */
  public key(value: T): Key;

  /**
   * Returns the first key mapped to value, or defaultKey if the hash contains no item mapped to value.
   */
  public key(value: T, defaultKey: Key): Key;

  /**
   * Returns a list containing all the keys in the hash, in an arbitrary order.
   */
  public keys(): QList<Key>;

  /**
   * Returns a list containing all the keys associated with value value, in an arbitrary order.
   */
  public keys(value: T): QList<Key>;

  /**
   * Constructs an empty hash.
   */
  constructor();

  /**
   * Constructs a copy of other.
   */
  constructor(other: QHash<Key, T>);

  /**
   * Removes all the items that have the key from the hash.
   */
  public remove(key: Key): int;

  /**
   * Ensures that the QHash's internal hash table consists of at least size buckets.
   */
  public reserve(size: int): void;

  public setSharable(sharable: boolean): void;

  /**
   * Returns the number of items in the hash.
   */
  public size(): int;

  /**
   * Reduces the size of the QHash's internal hash table to save memory.
   */
  public squeeze(): void;

  /**
   * Swaps hash other with this hash.
   */
  public swap(other: QHash<Key, T>): void;

  /**
   * Removes the item with the key from the hash and returns the value associated with it.
   */
  public take(key: Key): T;

  /**
   * Returns a list containing all the keys in the map.
   */
  public uniqueKeys(): QList<Key>;

  /**
   * Inserts all the items in the other hash into this hash.
   */
  public unite(other: QHash<Key, T>): QHash<Key, T>;

  /**
   * Returns the value associated with the key.
   */
  public value(key: Key): T;

  /**
   * If the hash contains no item with the given key, the function returns defaultValue.
   */
  public value(key: Key, defaultValue: T): T;

  /**
   * Returns a list containing all the values in the hash, in an arbitrary order.
   */
  public values(): QList<T>;

  /**
   * Returns a list of all the values associated with the key, from the most recently inserted to the least recently inserted.
   */
  public values(key: Key): QList<T>;

  /**
   * Qt-style synonym for QHash::const_iterator.
   */
  ConstIterator: _iterator;

  /**
   * Typedef for ptrdiff_t.
   */
  difference_type: qptrdiff;

  /**
   * Qt-style synonym for QHash::iterator.
   */
  Iterator: iterator;

  /**
   * Typedef for Key.
   */
  key_type: Key;

  /**
   * Typedef for T.
   */
  mapped_type: T;

  /**
   * Typedef for int.
   */
  size_type: int;
}
