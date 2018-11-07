declare class QList<T> {
  /**
   * Inserts value at the end of the list.
   */
  public append(t: T): void;

  /**
   * Appends the items of the value list to this list.
   */
  public append(t: QList<T>): void;

  /**
   * Returns the item at index position i in the list.
   */
  public at(i: int): T;

  /**
   * This function is provided for STL compatibility.
   */
  public back(): T;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public back(): T;

  /**
   * Returns an STL-style iterator pointing to the first item in the list.
   */
  public begin(): iterator;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public begin(): _iterator;

  /**
   * Removes all items from the list.
   */
  public clear(): void;

  /**
   * Returns a const STL-style iterator pointing to the first item in the list.
   */
  public constBegin(): _iterator;

  /**
   * Returns a const STL-style iterator pointing to the imaginary item after the last item in the list.
   */
  public constEnd(): _iterator;

  /**
   * Returns true if the list contains an occurrence of value; otherwise returns false.
   */
  public contains(t: T): QBool;

  /**
   * Returns the number of occurrences of value in the list.
   */
  public count(t: T): int;

  /**
   * Returns the number of items in the list.
   */
  public count(): int;

  public detach(): void;

  /**
   * This prevents needless mallocs, and makes QList more exception safe in case of cleanup work done in destructors on empty lists.
   */
  public detachShared(): void;

  /**
   * This function is provided for STL compatibility.
   */
  public empty(): boolean;

  /**
   * Returns an STL-style iterator pointing to the imaginary item after the last item in the list.
   */
  public end(): iterator;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public end(): _iterator;

  /**
   * Returns true if this list is not empty and its last item is equal to value; otherwise returns false.
   */
  public endsWith(t: T): boolean;

  /**
   * Removes the item associated with the iterator pos from the list, and returns an iterator to the next item in the list (which may be end()).
   */
  public erase(pos: iterator): iterator;

  /**
   * Removes all the items from begin up to (but not including) end.
   */
  public erase(first: iterator, last: iterator): iterator;

  /**
   * Returns a reference to the first item in the list.
   */
  public first(): T;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public first(): T;

  /**
   * This function is provided for STL compatibility.
   */
  public front(): T;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public front(): T;

  /**
   * Returns the index position of the first occurrence of value in the list, searching forward from index position from.
   */
  public indexOf(t: T, from: int): int;

  /**
   * Inserts value at index position i in the list.
   */
  public insert(i: int, t: T): void;

  /**
   * Inserts value in front of the item pointed to by the iterator before.
   */
  public insert(before: iterator, t: T): iterator;

  public isDetached(): boolean;

  /**
   * Returns true if the list contains no items; otherwise returns false.
   */
  public isEmpty(): boolean;

  public isSharedWith(other: QList<T>): boolean;

  /**
   * Returns a reference to the last item in the list.
   */
  public last(): T;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public last(): T;

  /**
   * Returns the index position of the last occurrence of value in the list, searching backward from index position from.
   */
  public lastIndexOf(t: T, from: int): int;

  /**
   * This function is identical to count().
   */
  public length: int;

  /**
   * Returns a list whose elements are copied from this list, starting at position pos.
   */
  public mid(pos: int, length: int): QList<T>;

  /**
   * Moves the item at index position from to index position to.
   */
  public move(from: int, to: int): void;

  /**
   * This function is provided for STL compatibility.
   */
  public pop_back(): void;

  /**
   * This function is provided for STL compatibility.
   */
  public pop_front(): void;

  /**
   * Inserts value at the beginning of the list.
   */
  public prepend(t: T): void;

  /**
   * This function is provided for STL compatibility.
   */
  public push_back(t: T): void;

  /**
   * This function is provided for STL compatibility.
   */
  public push_front(t: T): void;

  /**
   * Constructs an empty list.
   */
  constructor();

  /**
   * Constructs a copy of other.
   */
  constructor(l: QList<T>);

  /**
   * Removes all occurrences of value in the list and returns the number of entries removed.
   */
  public removeAll(t: T): int;

  /**
   * Removes the item at index position i.
   */
  public removeAt(i: int): void;

  /**
   * Removes the first item in the list.
   */
  public removeFirst(): void;

  /**
   * Removes the last item in the list.
   */
  public removeLast(): void;

  /**
   * Removes the first occurrence of value in the list and returns true on success; otherwise returns false.
   */
  public removeOne(t: T): boolean;

  /**
   * Replaces the item at index position i with value.
   */
  public replace(i: int, t: T): void;

  /**
   * Reserve space for alloc elements.
   */
  public reserve(size: int): void;

  public setSharable(sharable: boolean): void;

  /**
   * Returns the number of items in the list.
   */
  public size(): int;

  /**
   * Returns true if this list is not empty and its first item is equal to value; otherwise returns false.
   */
  public startsWith(t: T): boolean;

  /**
   * Swaps list other with this list.
   */
  public swap(other: QList<T>): void;

  /**
   * Exchange the item at index position i with the item at index position j.
   */
  public swap(i: int, j: int): void;

  /**
   * Removes the item at index position i and returns it.
   */
  public takeAt(i: int): T;

  /**
   * Removes the first item in the list and returns it.
   */
  public takeFirst(): T;

  /**
   * Removes the last item in the list and returns it.
   */
  public takeLast(): T;

  /**
   * Returns a QSet object with the data contained in this QList.
   */
  public toSet(): QSet<T>;

  /**
   * Returns a std::list object with the data contained in this QList.
   */
  public toStdList(): std.list<T>;

  /**
   * Returns a QVector object with the data contained in this QList.
   */
  public toVector(): QVector<T>;

  /**
   * Returns the value at index position i in the list.
   */
  public value(i: int): T;

  /**
   * If the index i is out of bounds, the function returns defaultValue.
   */
  public value(i: int, defaultValue: T): T;
}
