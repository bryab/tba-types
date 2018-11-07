declare class QMap<Key, T> {
  /**
   * Returns an STL-style iterator pointing to the first item in the map.
   */
  public begin(): iterator;

  /**
   * Removes all items from the map.
   */
  public clear(): void;

  /**
   * Returns a const STL-style iterator pointing to the first item in the map.
   */
  public constBegin(): _iterator;

  /**
   * Returns a const STL-style iterator pointing to the imaginary item after the last item in the map.
   */
  public constEnd(): _iterator;

  /**
   * Returns an const iterator pointing to the item with key key in the map.
   */
  public constFind(key: Key): _iterator;

  /**
   * Returns true if the map contains an item with key key; otherwise returns false.
   */
  public contains(key: Key): boolean;

  /**
   * Returns the number of items associated with key key.
   */
  public count(key: Key): int;

  /**
   * Detaches this map from any other maps with which it may share data.
   */
  public detach(): void;

  /**
   * This function is provided for STL compatibility.
   */
  public empty(): boolean;

  /**
   * Returns an STL-style iterator pointing to the imaginary item after the last item in the map.
   */
  public end(): iterator;

  /**
   * Removes the (key, value) pair pointed to by the iterator pos from the map, and returns an iterator to the next item in the map.
   */
  public erase(it: iterator): iterator;

  /**
   * Returns an iterator pointing to the item with key key in the map.
   */
  public find(key: Key): iterator;

  /**
   * Inserts a new item with the key key and a value of value.
   */
  public insert(key: Key, value: T): iterator;

  /**
   * Inserts a new item with the key key and a value of value.
   */
  public insertMulti(key: Key, value: T): iterator;

  /**
   * Returns true if the map's internal data isn't shared with any other map object; otherwise returns false.
   */
  public isDetached(): boolean;

  /**
   * Returns true if the map contains no items; otherwise returns false.
   */
  public isEmpty(): boolean;

  public isSharedWith(other: QMap<Key, T>): boolean;

  /**
   * Returns the first key with value value.
   */
  public key(value: T): Key;

  /**
   * Returns a list containing all the keys in the map in ascending order.
   */
  public keys(): QList<Key>;

  /**
   * Returns an iterator pointing to the first item with key key in the map.
   */
  public lowerBound(key: Key): iterator;

  /**
   * Constructs an empty map.
   */
  constructor();

  /**
   * Removes all the items that have the key key from the map.
   */
  public remove(key: Key): int;

  public setInsertInOrder(ordered: boolean): void;

  public setSharable(sharable: boolean): void;

  /**
   * Returns the number of (key, value) pairs in the map.
   */
  public size(): int;

  /**
   * Swaps map other with this map.
   */
  public swap(other: QMap<Key, T>): void;

  /**
   * Removes the item with the key key from the map and returns the value associated with it.
   */
  public take(key: Key): T;

  /**
   * Returns an STL map equivalent to this QMap.
   */
  public toStdMap(): std.map<Key, T>;

  /**
   * Returns a list containing all the keys in the map in ascending order.
   */
  public uniqueKeys(): QList<Key>;

  /**
   * Inserts all the items in the other map into this map.
   */
  public unite(other: QMap<Key, T>): QMap<Key, T>;

  /**
   * Returns an iterator pointing to the item that immediately follows the last item with key key in the map.
   */
  public upperBound(key: Key): iterator;

  /**
   * Returns the value associated with the key key.
   */
  public value(key: Key): T;

  /**
   * Returns a list containing all the values in the map, in ascending order of their keys.
   */
  public values(): QList<T>;

  /**
   * Qt-style synonym for QMap::const_iterator.
   */
  ConstIterator: _iterator;

  /**
   * Typedef for ptrdiff_t.
   */
  difference_type: qptrdiff;

  /**
   * Qt-style synonym for QMap::iterator.
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
