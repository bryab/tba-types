declare namespace QIODevice {
  /**
   * This enum is used with open() to describe the mode in which a device is opened.
   */
  enum OpenModeFlag {
    ReadOnly,
    WriteOnly,
    ReadWrite,
    Truncate,
    Text,
    Unbuffered
  }
}

declare class QIODevice {
  /**
   * This signal is emitted when the device is about to close.
   */
  aboutToClose: QSignal<() => void>;

  /**
   * This signal is emitted every time a payload of data has been written to the device.
   */
  bytesWritten: QSignal<(bytes: qint64) => void>;

  /**
   * This signal is emitted when the input (reading) stream is closed in this device.
   */
  readChannelFinished: QSignal<() => void>;

  /**
   * This signal is emitted once every time new data is available for reading from the device.
   */
  readyRead: QSignal<() => void>;

  /**
   * Returns true if the current read and write position is at the end of the device (i.e.
   */
  public atEnd(): boolean;

  /**
   * Returns the number of bytes that are available for reading.
   */
  public bytesAvailable(): qint64;

  /**
   * For buffered devices, this function returns the number of bytes waiting to be written.
   */
  public bytesToWrite(): qint64;

  /**
   * Returns true if a complete line of data can be read from the device; otherwise returns false.
   */
  public canReadLine(): boolean;

  /**
   * First emits aboutToClose(), then closes the device and sets its OpenMode to NotOpen.
   */
  public close(): void;

  /**
   * Returns a human-readable description of the last device error that occurred.
   */
  public errorString(): QString;

  /**
   * Reads one character from the device and stores it in c.
   */
  public getChar(c: char): boolean;

  /**
   * Returns true if the device is open; otherwise returns false.
   */
  public isOpen(): boolean;

  /**
   * Returns true if data can be read from the device; otherwise returns false.
   */
  public isReadable(): boolean;

  /**
   * Returns true if this device is sequential; otherwise returns false.
   */
  public isSequential(): boolean;

  /**
   * Returns true if the Text flag is enabled; otherwise returns false.
   */
  public isTextModeEnabled(): boolean;

  /**
   * Returns true if data can be written to the device; otherwise returns false.
   */
  public isWritable(): boolean;

  /**
   * Opens the device and sets its OpenMode to mode.
   */
  public open(mode: OpenMode): boolean;

  /**
   * Returns the mode in which the device has been opened; i.e.
   */
  public openMode(): OpenMode;

  /**
   * Reads at most maxSize bytes from the device into data, without side effects (i.
   */
  public peek(data: char, maxlen: qint64): qint64;

  /**
   * Peeks at most maxSize bytes from the device, returning the data peeked as a QByteArray.
   */
  public peek(maxlen: qint64): QByteArray;

  /**
   * For random-access devices, this function returns the position that data is written to or read from.
   */
  public pos(): qint64;

  /**
   * Writes the character c to the device.
   */
  public putChar(c: char): boolean;

  /**
   * Constructs a QIODevice object.
   */
  constructor();

  /**
   * Constructs a QIODevice object with the given parent.
   */
  constructor(parent: QObject);

  /**
   * Reads at most maxSize bytes from the device into data, and returns the number of bytes read.
   */
  public read(data: char, maxlen: qint64): qint64;

  /**
   * Reads at most maxSize bytes from the device, and returns the data read as a QByteArray.
   */
  public read(maxlen: qint64): QByteArray;

  /**
   * Reads all available data from the device, and returns it as a QByteArray.
   */
  public readAll(): QByteArray;

  /**
   * This function reads a line of ASCII characters from the device, up to a maximum of maxSize - 1 bytes, stores the characters in data, and returns the number of bytes read.
   */
  public readLine(data: char, maxlen: qint64): qint64;

  /**
   * Reads a line from the device, but no more than maxSize characters, and returns the result as a QByteArray.
   */
  public readLine(maxlen: qint64): QByteArray;

  /**
   * Seeks to the start of input for random-access devices.
   */
  public reset(): boolean;

  /**
   * For random-access devices, this function sets the current position to pos, returning true on success, or false if an error occurred.
   */
  public seek(pos: qint64): boolean;

  /**
   * If enabled is true, this function sets the Text flag on the device; otherwise the Text flag is removed.
   */
  public setTextModeEnabled(enabled: boolean): void;

  /**
   * For open random-access devices, this function returns the size of the device.
   */
  public size(): qint64;

  /**
   * Puts the character c back into the device, and decrements the current position unless the position is 0.
   */
  public ungetChar(c: char): void;

  /**
   * For buffered devices, this function waits until a payload of buffered written data has been written to the device and the bytesWritten() signal has been emitted, or until msecs milliseconds have passed.
   */
  public waitForBytesWritten(msecs: int): boolean;

  /**
   * Blocks until new data is available for reading and the readyRead() signal has been emitted, or until msecs milliseconds have passed.
   */
  public waitForReadyRead(msecs: int): boolean;

  /**
   * Writes at most maxSize bytes of data from data to the device.
   */
  public write(data: char, len: qint64): qint64;

  /**
   * Writes data from a zero-terminated string of 8-bit characters to the device.
   */
  public write(data: char): qint64;

  /**
   * Writes the content of byteArray to the device.
   */
  public write(data: QByteArray): qint64;
}
