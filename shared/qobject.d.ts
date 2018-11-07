declare class QObject {
  /**
   * Schedules this object for deletion.
   */
  public deleteLater(): void;

  /**
   * This signal is emitted immediately before the object obj is destroyed, and can not be blocked.
   */
  destroyed: QSignal<(unknown: QObject) => void>;

  /**
   * If block is true, signals emitted by this object are blocked (i.e., emitting a signal will not invoke anything connected to it).
   */
  public blockSignals(b: boolean): boolean;

  /**
   * Returns a list of child objects.
   */
  public children(): QObjectList;

  public connect(sender: QObject, signal: char, member: char, type: Qt.ConnectionType): boolean;

  public disconnect(signal: char, receiver: QObject, member: char): boolean;

  public disconnect(receiver: QObject, member: char): boolean;

  /**
   * Dumps information about signal connections, etc.
   */
  public dumpObjectInfo(): void;

  /**
   * Dumps a tree of children to the debug output.
   */
  public dumpObjectTree(): void;

  /**
   * Returns the names of all properties that were dynamically added to the object using setProperty().
   */
  public dynamicPropertyNames(): QList<QByteArray>;

  /**
   * This virtual function receives events to an object and should return true if the event e was recognized and processed.
   */
  public event(unknown: QEvent): boolean;

  /**
   * Filters events if this object has been installed as an event filter for the watched object.
   */
  public eventFilter(unknown_1: QObject, unknown_2: QEvent): boolean;

  /**
   * Returns true if this object is an instance of a class that inherits className or a QObject subclass that inherits className; otherwise returns false.
   */
  public inherits(classname: char): boolean;

  /**
   * Installs an event filter filterObj on this object.
   */
  public installEventFilter(unknown: QObject): void;

  /**
   * Returns true if the object is a widget; otherwise returns false.
   */
  public isWidgetType(): boolean;

  /**
   * Kills the timer with timer identifier, id.
   */
  public killTimer(id: int): void;

  /**
   * Returns a pointer to the meta-object of this object.
   */
  public metaObject(): QMetaObject;

  /**
   * Changes the thread affinity for this object and its children.
   */
  public moveToThread(thread: QThread): void;

  /**
   * Returns a pointer to the parent object.
   */
  public parent(): QObject;

  /**
   * Returns the value of the object's name property.
   */
  public property(name: char): QVariant;

  /**
   * Constructs an object with parent object parent.
   */
  constructor(parent: QObject);

  /**
   * Removes an event filter object obj from this object.
   */
  public removeEventFilter(unknown: QObject): void;

  public setObjectName(name: QString): void;

  /**
   * Makes the object a child of parent.
   */
  public setParent(unknown: QObject): void;

  /**
   * Sets the value of the object's name property to value.
   */
  public setProperty(name: char, value: QVariant): boolean;

  public setUserData(id: uint, data: QObjectUserData): void;

  /**
   * Returns true if signals are blocked; otherwise returns false.
   */
  public signalsBlocked(): boolean;

  /**
   * Starts a timer and returns a timer identifier, or returns zero if it could not start a timer.
   */
  public startTimer(interval: int): int;

  /**
   * Returns the thread in which the object lives.
   */
  public thread(): QThread;

  public userData(id: uint): QObjectUserData;

  /**
   * the name of this object
   */
  objectName: QString;
}
