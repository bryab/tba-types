/// <reference path="../../shared/qtscript.d.ts" />
/**
 * Undocumented File access modes for `File.open()`
 */
 declare const enum FileAccessMode {
  READ = 1,
  WRITE = 2,
  APPEND = 4,
}

/**
 * Include contents of a Javascript file.
 */
declare function include(jsPath: string);

/**
 * The Toon Boom File object
 */
declare class File {
  /**
   * Open the file with specific access mode.
   */
  open(accessMode: FileAccessMode): void;

  /**
   * Close the file.
   */
  close(): void;

  /**
   * Remove the file.
   */
  remove(): void;

  /**
   * Read the next char of the file.
   */
  readByte(): int;

  /**
   * Read all the file.
   */
  read(): string;

  /**
   * Read one line of the file.
   */
  readLine(): string;

  /**
   * Read each line of the file.
   */
  readLines(): StringList;

  /**
   * Write a char in the file.
   */
  writeByte(byte: int): void;

  /**
   * Write a string in the file.
   */
  write(data: string, length?: int): void;

  /**
   * Write a string in the file and go next line.
   */
  writeLine(data: string): void;

  constructor(file: string);

  /**
   * file name
   */
  name: string;

  /**
   * file path
   */
  path: string;

  /**
   * file name
   */
  fullName: string;

  baseName: string;

  /**
   * file extension
   */
  extension: string;

  symLink: string;

  /**
   * file exist
   */
  exists: boolean;

  /**
   * file readable flag
   */
  readable: boolean;

  /**
   * file writable flag
   */
  writable: boolean;

  /**
   * file executable flag
   */
  executable: boolean;

  /**
   * file hidden flag
   */
  hidden: boolean;

  /**
   * file reach end
   */
  eof: boolean;

  /**
   * Date when the file was created.
   */
  created: QDateTime;

  /**
   * Date when the file was modified.
   */
  lastModified: QDateTime;

  /**
   * date when the file was readed
   */
  lastRead: QDateTime;

  /**
   * Size of he file.
   */
  size: int;
}

declare namespace Dir {
  const enum FilterSpec {
    NONE = 0,
    DIRS = 1,
    FILES = 2,
    ALL = 3,
  }

  const enum SortSpec {
    ALPHA = 0,
    NATURAL = 1,
    UNKNOWN2 = 2,
    UNKNOWN3 = 3,
  }
}

/**
 * The Dir JavaScript class. Interface to operating system Dir operations, e.g. mkdir, rmdir, rename, etc
 */
declare class Dir extends QObject {
  /**
   * Get file path form current directory from filename give in parameter.
   */
  public filePath(file?: string): string;

  /**
   * Get absolute file path form filename give in parameter.
   */
  public absFilePath(file?: string): string;

  /**
   * change directory to the given directory name
   */
  public cd(dirName: string): void;

  /**
   * Go up in directory hierarchy.
   */
  public cdUp(): void;

  /**
   * Returns a list of the names of all the files and directories in the directory, ordered according to the name and attribute filters.
   */
  public entryList(
    filter: string,
    filterSpec?: Dir.FilterSpec,
    sortSpec?: Dir.SortSpec
  ): StringList;

  /**
   * Create a directory with given name.
   */
  public mkdir(dirName?: string): void;

  /**
   * Remove a directory with given name.
   */
  public rmdir(dirName?: string): void;

  /**
   * Create directory recursively if a path of directory not created is given.
   * NOTE: Does not appear to work on Windows paths.
   */
  public mkdirs(dirName?: string): void;

  /**
   * Remove directory recursively if a path of directory is given.
   */
  public rmdirs(dirName?: string): void;

  /**
   * Remove a file with the given name.
   */
  public remove(fileName: string): void;

  /**
   * Rename a file/folder with the name given to the new name.
   */
  public rename(oldName: string, newName: string): void;

  /**
   * Check if the file/folder exist.
   */
  public fileExists(fileName: string): boolean;

  /**
   * Sets the application's current working directory to path.
   */
  public setCurrent(): void;

  /**
   * Construct a Dir from a directory path.
   */
  constructor(path?: string);

  /**
   * Name of the directory.
   */
  name: string;

  /**
   * Path of the directory.
   */
  path: string;

  /**
   * Absolute path of the directory.
   */
  absPath: string;

  /**
   * Canonical path of the directory.
   */
  canonicalPath: string;

  /**
   * Say if the directory is readable.
   */
  readable: boolean;

  /**
   * Say if the directory exist.
   */
  exists: boolean;
}

/**
 * Enum for directory operations
 */
declare namespace DirSpec {
  // function DirSpec (): void;
  // function DirSpec (parent: QObject): void;
  // function DirSpec (rhs: DirSpec): void;
}

/**
 * The UiLoader JavaScript global object allows the user to load pre-defined Qt forms that define Qt widgets (generally built within Qt Designer)
 */
declare namespace UiLoader {
  /**
   * Takes a path to a predefined Qt widget form and loads that form.
   */
  function load(context: QScriptContext, engine?: QScriptEngine): QDialog;

  /**
   * Equivalent of QAppliction::exec for those scripts that wish to run their loaded UI as a separate app.
   */
  function exec(context: QScriptContext, engine?: QScriptEngine): QScriptValue;

  function setSvgIcon(
    context: QScriptContext,
    engine?: QScriptEngine
  ): QScriptValue;

  /**
   * Takes a DPI-independent pixel dimension (100% DPI scaling on an HD screen) and scales it to the current DPI setting.
   */
  function dpiScale(
    context: QScriptContext,
    engine?: QScriptEngine
  ): QScriptValue;
}

/**
 * Simplified FileDialog interface
 */
declare namespace FileDialog {
  /**
   * function that returns an existing file selected by the user
   */
  function getOpenFileName(
    filter?: string,
    title?: string,
    parent?: QWidget
  ): string;

  /**
   * function that will return a file name selected by the user
   */
  function getSaveFileName(
    filter?: string,
    title?: string,
    parent?: QWidget
  ): string;

  /**
   * function that will return an existing directory selected by the user
   */
  function getExistingDirectory(
    dir?: string,
    title?: string,
    parent?: QWidget
  ): string;

  /**
   * function that will return one or more existing files selected by the user
   */
  function getOpenFileNames(
    dir?: string,
    filter?: string,
    title?: string,
    parent?: QWidget
  ): StringList;
}

/**
 * The FileAccess JavaScript global object. Enum to define file operation
 */
declare class FileAccess extends QObject {
  constructor();

  constructor(parent: QObject);

  constructor(rhs: FileAccess);
}

/**
 * Simplified NumberEdit widget
 */
declare class NumberEdit extends Labeled {
  /**
   * the value shown
   */
  value: double;

  /**
   * precision of the NumberEdit
   */
  decimals: double;

  /**
   * minimum value allowed
   */
  minimum: double;

  /**
   * maximum value allowed
   */
  maximum: double;
}

/**
 * The LineEdit JavaScript class. Simplified LineEdit Qt widget
 */
declare class LineEdit extends Labeled {
  /**
   * text shown in LineEdit
   */
  text: string;
}

/**
 * The Slider JavaScript class. A simplified Slider Qt widget
 */
declare class Slider extends Labeled {
  /**
   * set the value in the slider, triggering the callback
   */
  public valueChanged(value: int): void;

  /**
   * value of the slider
   */
  value: int;

  /**
   * minimum value of the slider
   */
  minimum: int;

  /**
   * maximum value of the slider
   */
  maximum: int;

  /**
   * horizontal or vertical
   */
  orientation: string;

  /**
   * use this to assign the name of another function. This function will be triggered automatically when the slider value is modified
   */
  callback: string;
}

/**
 * The SpinBox JavaScript class. A simplified SpinBox Qt widget
 */
declare class SpinBox extends Labeled {
  /**
   * the value shown in the spinBox
   */
  value: int;

  /**
   * the minimum value that the spinBox will descend to
   */
  minimum: int;

  /**
   * the maximum value that the spinBox will ascend to
   */
  maximum: int;

  label: string;
}

/**
 * The TimeEdit JavaScript class. A simplified TimeEdit Qt widget
 */
declare class TimeEdit extends Labeled {
  /**
   * whether to show seconds
   */
  showSeconds: boolean;

  /**
   * whether to show the AM : PM display
   */
  showAMPM: boolean;

  /**
   * the current time
   */
  time: QTime;

  /**
   * the minimum time
   */
  minimum: QTime;

  /**
   * the maximum time
   */
  maximum: QTime;
}

/**
 * The ComboBox JavaScript class. A simplified ComboBox Qt widget
 */
declare class ComboBox extends Labeled {
  /**
   * stringlist of items
   */
  itemList: StringList;

  /**
   * currently selected item
   */
  currentItem: string;

  /**
   * whether the combo box may be edited by the user
   */
  editable: boolean;

  /**
   * index of the current item
   */
  currentItemPos: int;
}

/**
 * The DateEdit JavaScript class. A simplified DateEdit Qt widget
 */
declare class DateEdit extends Labeled {
  /**
   * whether the order shown is DMY, MDY, YMD, or YDM
   */
  order: int;

  /**
   * the date shown
   */
  date: QDate;

  /**
   * the minimum date allowed
   */
  minimum: QDate;

  /**
   * the maximum date allowed
   */
  maximum: QDate;
}

/**
 * Enum class for simplified DateEdit class - specifies display order of day, month, year
 */
declare class DateEditEnum extends QObject {}

/**
 * The GroupBox JavaScript class. A simplified GroupBox Qt widget
 */
declare class GroupBox extends SCRIPT_QSWidget {
  /**
   * add widget to groupBox
   */
  public add(widget: SCRIPT_QSWidget): void;

  /**
   * clear all the widget in the group box
   */
  public clear(): void;

  /**
   * create a newColumn in the groupbox. It will be used by all subsequent add operations.
   */
  public newColumn(): void;

  /**
   * add a spacer to the groupbox.
   */
  public addSpace(space: int): void;

  /**
   * Title of groupBox.
   */
  title: string;
}

/**
 * The Label JavaScript class. Simplified Label Qt widget
 */
declare class Label extends SCRIPT_QSWidget {
  /**
   * text shown on label
   */
  text: string;
}

/**
 * The RadioButton JavaScript class. A simplified RadioButton Qt widget
 */
declare class RadioButton extends SCRIPT_QSWidget {
  /**
   * text for label
   */
  text: string;

  /**
   * whether or not the radio button is checked
   */
  checked: boolean;
}

/**
 * The Input JavaScript global object. A simplified Qt input dialogs
 */
declare namespace Input {
  /**
   * Function to get a string from the user.
   */
  function getText(
    label?: string,
    text?: string,
    title?: string,
    parent?: QWidget
  ): string;

  /**
   * Function to get a number from the user.
   */
  function getNumber(
    label?: string,
    value?: double,
    decimals?: int,
    minValue?: double,
    maxValue?: double,
    title?: string,
    parent?: QWidget
  ): number;

  /**
   * Function to get an item from the user.
   */
  function getItem(
    label: string,
    itemList: StringList,
    currentItem?: string,
    editable?: boolean,
    title?: string,
    parent?: QWidget
  ): string;

  /**
   * Function to get an item from the user.
   */
  function getItem(
    itemList: StringList,
    currentItem?: string,
    editable?: boolean,
    parent?: QWidget
  ): string;
}

/**
 *
 */
declare namespace KeyModifiers {
  /**
   * Check if the Shift key is pressed.
   */
  function IsShiftPressed(): boolean;

  /**
   * Check if the Ctrl key is pressed.
   */
  function IsControlPressed(): boolean;

  /**
   * Check if the Alt key is pressed.
   */
  function IsAlternatePressed(): boolean;

  /**
   * Check if the space key is pressed.
   */
  function IsSpacePressed(): boolean;
}

/**
 * Simplified TextEdit widget
 */
declare class TextEdit extends SCRIPT_QSWidget {
  /**
   * text string shown in the widget
   */
  text: string;
}

/**
 * The Vector2d JavaScript class. Defines a two dimensional vector
 */
declare class Vector2d extends QObject {
  /**
   * Test if Vector2d is zero.
   */
  public isZero(): boolean;

  /**
   * Test if the two vectors are equals.
   */
  public isEqual(v2: Vector2d): boolean;

  /**
   * Test if the two vectors are not equals.
   */
  public isNotEqual(v2: Vector2d): boolean;

  /**
   * Retrieve length of Vector2d.
   */
  public length(): double;

  /**
   * Retrieve square length of Vector2d.
   */
  public lengthSq(): double;

  /**
   * Retrieve radian angle defined by Vector2d.
   */
  public radianAngle(): double;

  /**
   * Retrieve degree angle defined by Vector2d.
   */
  public degreeAngle(): double;

  /**
   * Calculate dot product between current Vector2d and specified Vector2d.
   */
  public dot(v2: Vector2d): double;

  /**
   * Rotate Vector2d counter-clockwise of specified radian angle.
   */
  public rotate(rad: double): Vector2d;

  /**
   * Rotate Vector2d counter-clockwise of 90 degrees.
   */
  public rotate90(): void;

  /**
   * Rotate Vector2d counter-clockwise of 270 degrees.
   */
  public rotate270(): void;

  /**
   * Project current Vector2d onto specified Vector2d.
   */
  public project(v2: Vector2d): Vector2d;

  /**
   * Project current Vector2d onto specified Vector2d.
   */
  public getProjection(v2: Vector2d): Vector2d;

  /**
   * Normalize current Vector2d.
   */
  public normalize(): Vector2d;

  /**
   * Normalize current Vector2d.
   */
  public getNormalized(): Vector2d;

  /**
   * Negate current Vector2d.
   */
  public negate(): Vector2d;

  /**
   * Create a new empty Vector2d.
   */
  constructor();

  /**
   * Create a new Vector2d.
   */
  constructor(x: double, y: double);

  /**
   * x value
   */
  x: double;

  /**
   * y value
   */
  y: double;
}

/**
 * The Point2d JavaScript class. Defines a two dimensional point
 */
declare class Point2d extends QObject {
  /**
   * Set the value of x, y coordinate.
   */
  public setXY(unknown_0: double, unknown_1: double): void;

  /**
   * round x and y to floor with a resolution of 1.0/64.0
   */
  public round(): Point2d;

  /**
   * round x and y to floor with a resolution given
   */
  public round(quantum: double): Point2d;

  /**
   * Rounds this point in the direction of the given vector and using the resolution of 1.0/64.0.
   */
  public round(v: Vector2d): Point2d;

  /**
   * Rounds this point in the direction of the given vector and using the given resolution.
   */
  public round(v: Vector2d, quantum: double): Point2d;

  /**
   * Copy Point2d into a Vector2d container.
   */
  public toVector2d(): Vector2d;

  /**
   * Calculate distance between two points.
   */
  public distance(p2: Point2d): double;

  /**
   * Calculate square distance between two points.
   */
  public distanceSq(p2: Point2d): double;

  /**
   * Substracts current Point2d with specified Point2d.
   */
  public minus(p2: Point2d | Vector2d): Point2d;

  /**
   * Add specified Vector2d to current Point2d.
   */
  public add(v: Vector2d): Point2d;

  /**
   * Add specified Vector2d to current Point2d.
   */
  public addEq(v: Vector2d): Point2d;

  /**
   * Substract current Point2d with specified Vector2d.
   */
  public minusEq(v: Vector2d): Point2d;

  /**
   * Calculate Point2d as interpolation between two points.
   */
  public interpolate(t: double, p1: Point2d, p2: Point2d): Point2d;

  /**
   * Create a new empty Point2d.
   */
  constructor();

  /**
   * Create a new Point2d.
   */
  constructor(x: double, y: double);

  /**
   * x value
   */
  x: double;

  /**
   * y value
   */
  y: double;
}

/**
 * The Point3d JavaScript class. Defines a three dimensional point
 */
declare class Point3d extends QObject {
  /**
   * Set the x, y, z coordinate to the given.
   */
  public setXYZ(x: double, y: double, z: double): void;

  /**
   * Test if Point3d is at origin.
   */
  public isOrigin(): boolean;

  /**
   * Test if current Point3d is equal to specified Point3d.
   */
  public isEqual(p2: Point3d): boolean;

  /**
   * Test if current Point3d is not equal to specified Point3d.
   */
  public isNotEqual(p2: Point3d): boolean;

  /**
   * Calculate distance between current Point3d and specified Point3d.
   */
  public distance(p2: Point3d): double;

  /**
   * Calculate square distance between current Point3d and specified Point3d.
   */
  public distanceSq(p2: Point3d): double;

  /**
   * Round x, y coordinate to floor with the given resolution.
   */
  public round(quantum: double): Point3d;

  /**
   * Calculate Point3d as interpolation between two points.
   */
  public interpolate(t: double, p1: Point3d, p2: Point3d): Point3d;

  /**
   * Add specified Vector3d to current Point3d.
   */
  public add(v: Vector3d): Point3d;

  /**
   * Substracts current Point3d with specified Vector3d.
   */
  public minus(v: Vector3d): Point3d;

  /**
   * Substracts current Point3d with specified Point3d.
   */
  public minus(p2: Point3d): Point3d;

  /**
   * Add specified Vector3d to current Point3d.
   */
  public addEq(v: Vector3d): Point3d;

  /**
   * Substract current Point3d with specified Vector3d.
   */
  public minusEq(v: Vector3d): Point3d;

  /**
   * Convert current Point3d to bi-dimensional Point2d.
   */
  public toPoint2d(): Point2d;

  /**
   * Create a new empty Point3d.
   */
  constructor();

  /**
   * Create a new Point3d.
   */
  constructor(x: double, y: double, z: double);

  x: double;

  y: double;

  z: double;
}

/**
 * The Vector3d JavaScript class. Defines a three dimensional vector
 */
declare class Vector3d extends QObject {
  /**
   * Set the x, y, z coordinate to the given.
   */
  public setXYZ(x: double, y: double, z: double): void;

  /**
   * Test if Vector3d is zero.
   */
  public isZero(): boolean;

  /**
   * Test if the two vectors are equals.
   */
  public isEqual(v2: Vector3d): boolean;

  /**
   * Test if the two vectors are not equals.
   */
  public isNotEqual(v2: Vector3d): boolean;

  /**
   * Retrieve length of Vector3d.
   */
  public length(): double;

  /**
   * Retrieve square length of Vector3d.
   */
  public lengthSq(): double;

  /**
   * Calculate cosine angle between current Vector3d and specified Vector3d.
   */
  public getCos(v2: Vector3d): double;

  /**
   * Calculate sine angle between current Vector3d and specified Vector3d.
   */
  public getSin(v2: Vector3d): double;

  /**
   * Calculate dot product between current Vector3d and specified Vector3d.
   */
  public dot(v2: Vector3d): double;

  /**
   * Calculate cross product between current Vector3d and specified Vector3d.
   */
  public cross(v2: Vector3d): Vector3d;

  /**
   * Project current Vector3d onto specified Vector3d.
   */
  public project(v2: Vector3d): Vector3d;

  /**
   * Project current Vector3d onto specified Vector3d.
   */
  public getProjection(v2: Vector3d): Vector3d;

  /**
   * Get ratio from projection of current Vector3d onto specified Vector3d.
   */
  public getProjectionRatio(v2: Vector3d): double;

  /**
   * Normalize current Vector3d.
   */
  public normalize(): Vector3d;

  /**
   * Normalize current Vector3d.
   */
  public getNormalized(): Vector3d;

  /**
   * Negate current Vector3d.
   */
  public negate(): Vector3d;

  /**
   * Create a new empty Vector3d.
   */
  constructor();

  /**
   * Create a new Vector3d.
   */
  constructor(x: double, y: double, z: double);

  /**
   * x value
   */
  x: double;

  /**
   * y value
   */
  y: double;

  /**
   * z value
   */
  z: double;
}

/**
 * The Matrix4x4 JavaScript class. Defines a four by four matrix container
 */
declare class Matrix4x4 extends QObject {
  /**
   * Retrieve single value from Matrix4x4.
   */
  public value(row: int, column: int): double;

  /**
   * Set matrix rotation from Euler angles.
   */
  public setFromEulerAngles(rx: double, ry: double, rz: double): Matrix4x4;

  /**
   * Retrieve axis from Matrix4x4.
   */
  public axis(idx: int): Vector3d;

  /**
   * Retrieve Matrix4x4 origin.
   */
  public origin(): Point3d;

  /**
   * Test if Matrix4x4 is empty.
   */
  public isEmpty(): boolean;

  /**
   * Clear current Matrix4x4.
   */
  public clear(): Matrix4x4;

  /**
   * Normalize current Matrix4x4.
   */
  public normalize(): Matrix4x4;

  /**
   * Multiply current Matrix4x4 with specified Matrix4x4.
   */
  public multiplyEq(m2: Matrix4x4): Matrix4x4;

  /**
   * Multiply current Matrix4x4 with specified Matrix4x4.
   */
  public multiply(m2: Matrix4x4): QObject;

  /**
   * Multiply specified Point3d with current Matrix4x4.
   */
  public multiply(p: Point3d): Point3d;

  /**
   * Multiply specified Vector3d with current Matrix4x4.
   */
  public multiply(v: Vector3d): QObject;

  /**
   * Translate current Matrix4x4 with specified Vector3d.
   */
  public translate(v: Vector3d): Matrix4x4;

  /**
   * Translate current Matrix4x4.
   */
  public translate(dx: double, dy: double, dz?: double): Matrix4x4;

  /**
   * Scale current Matrix4x4.
   */
  public scale(sx: double, sy: double, sz?: double): Matrix4x4;

  /**
   * Rotate current Matrix4x4.
   */
  public rotatePlane(v: Vector3d, p: Point3d): Matrix4x4;

  /**
   * Rotate current Matrix4x4.
   */
  public rotateRadians(rad: double, v: Vector3d): Matrix4x4;

  /**
   * Rotate current Matrix4x4.
   */
  public rotateDegrees(deg: double, v: Vector3d): Matrix4x4;

  /**
   * Shear current Matrix4x4.
   */
  public skew(sk: double): Matrix4x4;

  /**
   * Calculate an orthogonal projection Matrix4x4.
   */
  public orthogonalProject(
    left: double,
    right: double,
    bottom: double,
    top: double,
    zNear: double,
    zFar: double
  ): Matrix4x4;

  /**
   * Calculate a perspective projection Matrix4x4.
   */
  public perspectiveProject(
    left: double,
    right: double,
    bottom: double,
    top: double,
    zNear: double,
    zFar: double
  ): Matrix4x4;

  /**
   * Calculate a perspective projection Matrix4x4.
   */
  public perspectiveProject(
    fovy: double,
    ratio: double,
    zNear: double,
    zFar: double
  ): Matrix4x4;

  /**
   * Invert current Matrix4x4.
   */
  public inverse(): Matrix4x4;

  /**
   * Invert current Matrix4x4.
   */
  public getInverse(): Matrix4x4;

  /**
   * Transpose current Matrix4x4.
   */
  public transpose(): Matrix4x4;

  /**
   * Transpose current Matrix4x4.
   */
  public getTranspose(): Matrix4x4;

  /**
   * Extract position from matrix.
   */
  public extractPosition(pivot?: Point3d, force3d?: boolean): Point3d;

  /**
   * Extract scale from matrix.
   */
  public extractScale(pivot?: Point3d, force3d?: boolean): Point3d;

  /**
   * Extract rotation from matrix.
   */
  public extractRotation(pivot?: Point3d, force3d?: boolean): Point3d;

  /**
   * Extract skew from matrix.
   */
  public extractSkew(pivot?: Point3d): double;

  public print(label: string): void;

  /**
   * Create a new empty Matrix4x4.
   */
  constructor();

  /**
   * 1st row and 1st column value
   */
  m00: double;

  /**
   * 1st row and 2nd column value
   */
  m01: double;

  /**
   * 1st row and 3rd column value
   */
  m02: double;

  /**
   * 1st row and 4th column value
   */
  m03: double;

  /**
   * 2nd row and 1st column value
   */
  m10: double;

  /**
   * 2nd row and 2nd column value
   */
  m11: double;

  /**
   * 2nd row and 3rd column value
   */
  m12: double;

  /**
   * 2nd row and 4th column value
   */
  m13: double;

  /**
   * 3rd row and 1st column value
   */
  m20: double;

  /**
   * 3rd row and 2nd column value
   */
  m21: double;

  /**
   * 3rd row and 3rd column value
   */
  m22: double;

  /**
   * 3rd row and 4th column value
   */
  m23: double;

  /**
   * 4th row and 1st column value
   */
  m30: double;

  /**
   * 4th row and 2nd column value
   */
  m31: double;

  /**
   * 4th row and 3rd column value
   */
  m32: double;

  /**
   * 4th row and 4th column value
   */
  m33: double;
}

/**
 * The System JavaScript global object. Call system specific command directly
 */
declare namespace System {
  function println(arg: string): void;

  function getenv(str: string): string;

  function processOneEvent(): void;

  var globalObject: any;
}

/**
 * Returns information about the current application running the script and its environment. You can use it in both Script Editor and scriptModule
 */
declare namespace about {
  /**
   * Query if current platform is Windows.
   */
  function isWindowsArch(): boolean;

  /**
   * Query if current platform is Linux.
   */
  function isLinuxArch(): boolean;

  /**
   * Query if current platform is Mac.
   */
  function isMacArch(): boolean;

  /**
   * Query if current platform is Mac Intel.
   */
  function isMacIntelArch(): boolean;

  /**
   * Query if current platform is Mac Power PC.
   */
  function isMacPpcArch(): boolean;

  /**
   * Query current application folder.
   */
  function getApplicationPath(): string;

  /**
   * Query common binary folder.
   */
  function getBinaryPath(): string;

  /**
   * Query common resources folder.
   */
  function getResourcesPath(): string;

  /**
   * returns a string that represents the flavour of the application, e.g. Harmony,
   */
  function getFlavorString(): string;

  /**
   * returns the version info string.
   */
  function getVersionInfoStr(): string;

  /**
   * returns a string that is the name of application.
   */
  function productName(): string;

  /**
   * returns true whenever this application is a Commercial/Full variant.
   */
  function isFullVersion(): boolean;

  /**
   * returns true whenever this application is a Demo variant.
   */
  function isDemoVersion(): boolean;

  /**
   * returns true whenever this application is an Educational variant.
   */
  function isEducVersion(): boolean;

  /**
   * true when connected to a database or when compiled with Harmony.
   */
  function isHarmony(): boolean;

  /**
   * only true when running as Stage Essentials.
   */
  function isStageEssentials(): boolean;

  /**
   * only true when running as Stage Advanced
   */
  function isStageAdvanced(): boolean;

  /**
   * only true when running as Stage.
   */
  function isStage(): boolean;

  /**
   * only true when running as Storyboard.
   */
  function isStoryboard(): boolean;

  /**
   * returns true when running on Windows.
   */
  function isWindowsArch(): boolean;

  /**
   * returns true when running on linux.
   */
  function isLinuxArch(): boolean;

  /**
   * returns true when running on MacOS.
   */
  function isMacArch(): boolean;

  /**
   * returns true when running on an Apple OS X operating system and on a Mac Intel.
   */
  function isMacIntelArch(): boolean;

  /**
   * returns true when running on an Apple OS X operating system and on a Mac PowerPC.
   */
  function isMacPpcArch(): boolean;

  /**
   * returns true whenever this application is interactive. All application capable of running scripts are interactive.
   */
  function isInteractiveApp(): boolean;

  /**
   * true when this application is Scan.
   */
  function isScanApp(): boolean;

  /**
   * returns true when this application is Stage, or Storyboard, and not a peripheral application.
   */
  function isMainApp(): boolean;

  /**
   * returns true whenever this application running application is ControlCenter
   */
  function isControlCenterApp(): boolean;

  /**
   * returns true when this application is in Paint mode.
   */
  function isPaintMode(): boolean;

  /**
   * returns true when this application is in Xsheet mode.
   */
  function isXsheetMode(): boolean;

  /**
   * returns the application. Identical to property "applicationPath".
   */
  function getApplicationPath(): string;

  /**
   * returns the folder where the binaries can be found.
   */
  function getBinaryPath(): string;

  /**
   * returns the folder where the resources can be found.
   */
  function getResourcesPath(): string;

  /**
   * Return the user name.
   */
  function getUserName(): string;

  /**
   * Current platform is Windows.
   */
  var windowsArch: boolean;

  /**
   * Current platform is Linux.
   */
  var linuxArch: boolean;

  /**
   * Current platform is Mac.
   */
  var macArch: boolean;

  /**
   * Current platform is Mac Intel.
   */
  var macIntelArch: boolean;

  /**
   * Current platform is Mac Power PC.
   */
  var macPpcArch: boolean;

  /**
   * Application with GUI folder (different than binFolder on Mac. Same for all other platforms ).
   */
  var applicationPath: string;

  /**
   * Common binary folder.
   */
  var binaryPath: string;

  /**
   * Common resources folder.
   */
  var resourcesPath: string;

  /**
   * See isFullVersion.
   */
  var fullVersion: boolean;

  /**
   * See isDemoVersion.
   */
  var demoVersion: boolean;

  /**
   * See isEducVersion.
   */
  var educVersion: boolean;

  /**
   * See isHarmony.
   */
  var harmony: boolean;

  /**
   * See isStageEssentials.
   */
  var essentials: boolean;

  /**
   * See isStageAdvanced.
   */
  var advanced: boolean;

  /**
   * See isStage.
   */
  var state: boolean;

  /**
   * See isStoryboard.
   */
  var storyboard: boolean;

  /**
   * See isMainApp.
   */
  var mainApp: boolean;

  /**
   * See isInteractiveApp.
   */
  var interactiveApp: boolean;

  /**
   * See isScanApp.
   */
  var scanApp: boolean;

  /**
   * See isControlCenterApp.
   */
  var controlCenterApp: boolean;

  /**
   * See isPaintMode.
   */
  var paintMode: boolean;

  /**
   * See isXsheetMode.
   */
  var xsheetMode: boolean;

  var userName: string;
}

/**
 * Action interface is used to perform menu or tool bar functions
 */
declare namespace Action {
  /**
   * using action manager, perform the requested action (slot - menu item, toolbar item,...)
   */
  function perform(slot: string): void;

  /**
   * using action manager, perform the requested action (slot - menu item, toolbar item,...)
   */
  function perform(slot: string, responder: string): void;
}

/**
 * This interface is used to access caption properties. Note that the text in captions is in html format
 */
declare class CaptionManager extends QObject {
  /**
   * returns number of panel captions
   */
  public numberOfPanelCaptions(): int;

  /**
   * returns name of the panel caption at index
   */
  public nameOfPanelCaption(index: int): string;

  /**
   * returns text of the panel caption
   */
  public textOfPanelCaption(name: string, panelId: string): string;

  /**
   * adds a panel caption
   */
  public addPanelCaption(name: string): boolean;

  /**
   * adds a panel sketch
   */
  public addPanelSketch(name: string, panelId: string): boolean;

  /**
   * deletes a panel caption
   */
  public deletePanelCaption(name: string): boolean;

  /**
   * deletes a panel sketch
   */
  public deletePanelSketch(name: string, panelId: string): boolean;

  /**
   * renames a panel caption
   */
  public renamePanelCaption(name: string, newName: string): boolean;

  /**
   * renames a panel sketch
   */
  public renamePanelSketch(
    name: string,
    panelId: string,
    newName: string
  ): boolean;

  /**
   * sets text on a panel caption
   */
  public setPanelCaptionText(
    name: string,
    panelId: string,
    text: string
  ): boolean;

  /**
   * returns number of project captions
   */
  public numberOfProjectCaptions(): int;

  /**
   * returns name of the panel caption at index
   */
  public nameOfProjectCaption(index: int): string;

  /**
   * adds a project caption
   */
  public addProjectCaption(name: string): boolean;

  /**
   * returns text of the project caption
   */
  public textOfProjectCaption(name: string): string;

  /**
   * deletes a project caption
   */
  public deleteProjectCaption(name: string): boolean;

  /**
   * renames a project caption
   */
  public renameProjectCaption(name: string, newName: string): boolean;

  /**
   * sets new text in a project caption
   */
  public setProjectCaptionText(name: string, text: string): boolean;
}

/**
 * Simplified CheckBox widget
 */
declare class CheckBox extends SCRIPT_QSWidget {
  /**
   * the text shown alongside the checkbox
   */
  text: string;

  /**
   * whether or not the checkbox is checked
   */
  checked: boolean;
}

/**
 *
 */
declare class ColorRGBA extends QObject {
  /**
   * Create a new default ColorRGBA (ie. opaque white).
   */
  constructor();

  /**
   * Create a new ColorRGBA.
   */
  constructor(r: double, g: double, b: double, a: double);

  /**
   * red value [ 0, 255 ]
   */
  r: int;

  /**
   * green value [ 0, 255 ]
   */
  g: int;

  /**
   * blue value [ 0, 255 ]
   */
  b: int;

  /**
   * alpha value [ 0, 255 ]
   */
  a: int;
}

/**
 * Simplified Dialog widget. This class and the associated widget classes are used to build simple dialogs
 */
declare class Dialog extends SCRIPT_QSWidget {
  /**
   * add a new tab to the dialog
   */
  public newTab(label: string): void;

  /**
   * add a new column to the dialog
   */
  public newColumn(): void;

  /**
   * add spacers to the dialog layout
   */
  public addSpace(space: int): void;

  /**
   * add widgets to the dialog
   */
  public add(widget: SCRIPT_QSWidget): void;

  /**
   * run the dialog in modal mode. Pressing ok accepts the dialog input. Pressing cancel cancels the dialog.
   */
  public exec(): boolean;

  /**
   * it is the title of the dialog
   */
  title: string;

  /**
   * it is the width of the dialog
   */
  width: int;

  /**
   * it is the name of the ok button
   */
  okButtonText: string;

  /**
   * it is the name of the cancel button
   */
  cancelButtonText: string;
}

/**
 * DrawingTool params class - used as parameters in drawingTools calls
 */
declare class DrawingToolParams extends QObject {
  public applyAllDrawings(): boolean;

  public setApplyAllDrawings(b: boolean): void;
}

/**
 *
 */
declare namespace DrawingTools {
  /**
   * sets the current art to be one of the following : underlayArt, colourArt, lineArt or overlayArt
   */
  function setCurrentArt(int: any): void;

  /**
   * sets the current drawing to be from column columnName at frame frame
   */
  function setCurrentDrawingFromColumnName(
    columnName: string,
    frame?: int
  ): boolean;

  /**
   * sets the current drawing to be from node nodeName at frame frame
   */
  function setCurrentDrawingFromNodeName(
    nodeName: string,
    frame?: int
  ): boolean;

  /**
   * converts the selected pencil lines in layer of the current drawing using params
   */
  function convertPencilToBrush(art?: int, params?: DrawingToolParams): void;

  /**
   * extracts the centreline from srcLayer and puts the extracted line in dstLayer using params.
   */
  function extractCenterline(
    srcArt?: int,
    dstArt?: int,
    params?: DrawingToolParams
  ): void;

  /**
   * computes the breaking triangles of the current layer using params.
   */
  function computeBreakingTriangles(params?: DrawingToolParams): void;

  /**
   * readonly property - returns underlayArt mask
   */
  var underlayArt: int;

  /**
   * readonly property - returns colourArt mask
   */
  var colourArt: int;

  /**
   * readonly property - returns lineArt mask
   */
  var lineArt: int;

  /**
   * readonly property - returns overlayArt mask
   */
  var overlayArt: int;

  /**
   * readonly property - returns mask for all 4 art layers
   */
  var allArts: int;
}

declare type MovieFormat = "jpg" | "mov" | "tga";
declare type BitmapFormat = "jpg" | "psd" | "tga";

/**
 * This interface is used to export the storyboard project
 */
declare class ExportManager extends QObject {
  /**
   * Export storyboard to bitmap file.
   */
  public exportToBitmap(
    exportDir: string,
    filePattern: string,
    bitmapFormat: BitmapFormat,
    resX: int,
    resY: int
  ): boolean;

  /**
   * Export storyboard to movie file.
   */
  public exportToMovie(
    exportDir: string,
    filePattern: string,
    movieFormat: MovieFormat,
    resX: int,
    resY: int
  ): boolean;

  /**
   * Export storyboard panels, taking into consideration the scene camera (layout )
   */
  public exportLayout(
    exportDir: string,
    filePattern: string,
    movieFormat: BitmapFormat,
    resX: int,
    resY: int
  ): boolean;

  /**
   * Export storyboard to pdf file.
   */
  public exportToPDF(fileName: string): boolean;

  /**
   * Export storyboard to Final Cut Pro XML format.
   */
  public exportToFCPXML(
    exportFilePath: string,
    filePattern: string,
    movieFormat: MovieFormat
  ): boolean;

  /**
   * Sets a selection of scenes to be exported.
   */
  public setSelectedScenes(scenes: StringList): void;

  /**
   * Sets a selection of panels to be exported.
   */
  public setSelectedPanels(panels: StringList): void;

  /**
   * Export the current scene.
   */
  public setUseCurrentScene(flag: boolean): boolean;

  /**
   * Export the current panel.
   */
  public setUseCurrentPanel(flag: boolean): boolean;

  /**
   * Export the tracked panel(s)
   */
  public setUseTrackedPanels(flag: boolean): boolean;

  /**
   * Export the selected panel(s)
   */
  public setUseSelectedPanels(flag: boolean): boolean;

  /**
   * Allow Camera Scaling.
   */
  public setCameraScaling(flag: boolean): void;

  /**
   * Exports the camera frames black border.
   */
  public setShowCamera(flag: boolean): void;

  /**
   * Prints each camera keyframe on the exported images.
   */
  public setShowCameraKeyFrames(flag: boolean): void;

  /**
   * Sets a transparent background. This is only useful when exporting to photoshop ( psd files ).
   */
  public setTransparentBG(flag: boolean): void;

  /**
   * Set Fit Camera Path.
   */
  public setBitmapFitCameraPath(flag: boolean): void;

  /**
   * Set Rectify Static Camera.
   */
  public setBitmapRectifyStatic(flag: boolean): void;

  /**
   * Sets the magnification of the image. By default there is no magnification.
   */
  public setZoomFactor(zoom: double): void;

  /**
   * Maintain Size Through Scene. This ensures that all images exported are the same size.
   */
  public setMaintainSize(flag: boolean): void;

  /**
   * Show the reference frame.
   */
  public setShowReference(flag: boolean): void;

  /**
   * Export one image for each layer.
   */
  public setExportOneImagePerLayer(flag: boolean): void;

  /**
   * By default, this is false.
   */
  public setApplyLayerMotionCamera(flag: boolean): void;

  /**
   * Display the camera labels.
   */
  public setShowCameraLabel(flag: boolean): void;

  /**
   * Set the pdf profile to be used during the pdf export.
   */
  public setPDFProfile(profile: string): boolean;

  /**
   * Returns the names of known pdf profiles.
   */
  public getPDFProfiles(): StringList;

  /**
   * Specify the granularity of movie clip generation.
   */
  public setOneMovieClipPer(
    perWhat: "project" | "sequence" | "scene" | "shot"
  ): boolean;

  /**
   * Set the audio/video export settings ( for Quicktime export )
   *
   * This is provided as a work-around to specify explicit QuickTime settings. The easiest way to access a given QuickTime settings string to to save the given setting in the exportMovie dialog, and consult the EXPORT_DLG_MOVIE_VIDEO_CONFIG preference in your user preferences.
   */
  public setMovieConfig(config: string): void;

  /**
   * Export caption as comments in FCP XML.
   */
  public setExportCaptions(flag: boolean): void;

  /**
   * Export markers at scene beginning.
   */
  public setExportMarkers(flag: boolean): void;

  /**
   * Export scenes reference track.
   */
  public setExportScenesReferenceTrack(flag: boolean): void;

  /**
   * Render scene/panel name overlay.
   */
  public setShowScenePanelNamesOverlay(flag: boolean): void;

  /**
   * Render project safety overlay.
   */
  public setShowProjectSafetyOverlay(flag: boolean): void;

  /**
   * Render 4:3 safety overlay.
   */
  public setShow43SafetyOverlay(flag: boolean): void;

  /**
   * Notify flix server when exporting to FCP XML.
   */
  public setNotifyFlix(flag: boolean): void;

  /**
   * Signal emitted if export was successful.
   */
  public exportReady(): void;
}

/**
 * The FileMapper function, toNativePath( String&) will return the complete path of the passed path resolving shortcuts in windows. Will also convert the path separator to
 */
declare namespace fileMapper {
  /**
   * returns the complete path of the passed path resolving shortcuts in windows
   */
  function toNativePath(path: string): string;
}

/**
 * With the Function Manager, you can manipulate the camera functions and the layer functions. Note that for all methods you must give the unique id. For the camera, this is the sceneId. For a layer functions, this is the panelId
 */
declare class FunctionManager extends QObject {
  /**
   * returns the Start value from the Hold Value Editor dialog box, for Bezier and Velo-based Function Editors.
   */
  public holdStartFrame(shotId: string, columnName: string): int;

  /**
   * returns the Stop value from the Hold Value Editor dialog box, for Bezier, Ease and Velo-based Function Editors
   */
  public holdStopFrame(shotId: string, columnName: string): int;

  /**
   * returns the Step value from the Hold Value Editor dialog box, for Bezier, Ease and Velo-based Function Editors
   */
  public holdStep(shotId: string, columnName: string): int;

  /**
   * sets a value on a column at the given frame
   */
  public setEntry(
    shotId: string,
    columnName: string,
    subColumn: int,
    AtFrame: double,
    value: string
  ): boolean;

  /**
   * gets a value from a column at the given frame
   */
  public getEntry(
    shotId: string,
    columnName: string,
    subColumn: int,
    AtFrame: double
  ): string;

  /**
   * sets a keyframe on a column
   */
  public setKeyFrame(
    shotId: string,
    columnName: string,
    AtFrame: double
  ): boolean;

  /**
   * clears a keyframe on a column
   */
  public clearKeyFrame(
    shotId: string,
    columnName: string,
    AtFrame: double
  ): boolean;

  /**
   * returns the number of keyframes and control points on a curve
   */
  public numberOfPoints(shotId: string, columnName: string): int;

  /**
   * returns the type of the function ( Bezier, Ease, VeloBased or 3dPath )
   */
  public functionType(shotId: string, columnName: string): string;

  /**
   * returns the X value (frame number) of a point on a function curve
   */
  public pointX(shotId: string, columnName: string, point: int): double;

  /**
   * returns the Y value of a point on a function curve
   */
  public pointY(shotId: string, columnName: string, point: int): double;

  /**
   * returns a 1 (one) to indicate that the point is on a ant segment, or a 0 (zero) to indicate that the point is not on a ant segment
   */
  public pointConstSeg(shotId: string, columnName: string, point: int): boolean;

  /**
   * returns the continuity of the curve that follows the point. One of the following values will be returned, in upper-case: SMOOTH, CORNER or STRAIGHT
   */
  public pointContinuity(
    shotId: string,
    columnName: string,
    point: int
  ): string;

  /**
   * returns the X value of the left handle of a point on a curve
   */
  public pointHandleLeftX(
    shotId: string,
    columnName: string,
    point: int
  ): double;

  /**
   * returns the Y value of the left handle of a point on a curve.
   */
  public pointHandleLeftY(
    shotId: string,
    columnName: string,
    point: int
  ): double;

  /**
   * returns the X value of the right handle of a point on a curve.
   */
  public pointHandleRightX(
    shotId: string,
    columnName: string,
    point: int
  ): double;

  /**
   * returns the Y value of the right handle of a point on a curve
   */
  public pointHandleRightY(
    shotId: string,
    columnName: string,
    point: int
  ): double;

  /**
   * returns the number of frames in the ease-in
   */
  public pointEaseIn(shotId: string, columnName: string, point: int): double;

  /**
   * returns the angle of the ease-in handle
   */
  public angleEaseIn(shotId: string, columnName: string, point: int): double;

  /**
   * returns the number of frames in the ease-out
   */
  public pointEaseOut(shotId: string, columnName: string, point: int): double;

  /**
   * returns the angle of the ease-out handle
   */
  public angleEaseOut(shotId: string, columnName: string, point: int): double;

  /**
   * returns the number of keyframes and control points on the 3D Path
   */
  public numberOfPointsPath3d(shotId: string, columnName: string): int;

  /**
   * returns the value of the specified point on the X path
   */
  public pointXPath3d(shotId: string, columnName: string, point: int): double;

  /**
   * returns the value of the specified point on the Y path
   */
  public pointYPath3d(shotId: string, columnName: string, point: int): double;

  /**
   * returns the value of the specified point on the Z path
   */
  public pointZPath3d(shotId: string, columnName: string, point: int): double;

  /**
   * returns the tension value for the specified point on the 3D Path
   */
  public pointTensionPath3d(
    shotId: string,
    columnName: string,
    point: int
  ): double;

  /**
   * returns the continuity value (STRAIGHT, SMOOTH or CORNER) for the specified point on the 3D Path.
   */
  public pointContinuityPath3d(
    shotId: string,
    columnName: string,
    point: int
  ): double;

  /**
   * returns the bias value for the specified point on the 3D Path
   */
  public pointBiasPath3d(
    shotId: string,
    columnName: string,
    point: int
  ): double;

  /**
   * returns the frame at which it's locked, or returns 0 if the point is not locked.
   */
  public pointLockedAtFrame(
    shotId: string,
    columnName: string,
    point: int
  ): double;

  /**
   * sets the Start value in the Hold Value Editor dialog box, for Bezier, Ease and Velo-based Function Editors
   */
  public setHoldStartFrame(
    shotId: string,
    columnName: string,
    start: int
  ): boolean;

  /**
   * sets the Stop value in the Hold Value Editor dialog box, for Bezier, Ease and Velo-based Function Editors
   */
  public setHoldStopFrame(
    shotId: string,
    columnName: string,
    stop: int
  ): boolean;

  /**
   * sets the Hold value in the Hold Value Editor dialog box, for Bezier, Ease and Velo-based Function Editors.
   */
  public setHoldStep(shotId: string, columnName: string, step: int): boolean;

  /**
   * sets the values of a point on a Bezier function curve
   */
  public setBezierPoint(
    shotId: string,
    columnName: string,
    frame: int,
    y: double,
    handleLeftX: double,
    handleLeftY: double,
    handleRightX: double,
    handleRightY: double,
    Seg: boolean,
    continuity: string
  ): boolean;

  /**
   * sets the values of a point on an Velobased function curve
   */
  public setVeloBasePoint(
    shotId: string,
    columnName: string,
    frame: int,
    y: double
  ): boolean;

  /**
   * sets the values of a point on an Ease function curve
   */
  public setEasePoint(
    shotId: string,
    columnName: string,
    frame: int,
    y: double,
    easeIn: double,
    angleEaseIn: double,
    easeOut: double,
    angleEaseOut: double,
    Seg: boolean,
    continuity: string
  ): boolean;

  /**
   * adds a keyframe to a 3D Path and sets the X, Y and Z value, as well as the tension, continuity and bias.
   */
  public addKeyFramePath3d(
    shotId: string,
    columnName: string,
    frame: int,
    x: double,
    y: double,
    z: double,
    tension: double,
    continuity: double,
    bias: double
  ): boolean;

  /**
   * adds a keyframe after a point on a 3D Path and sets the X, Y and Z values, as well as the tension, continuity and bias
   */
  public addCtrlPointAfterPath3d(
    shotId: string,
    columnName: string,
    point: int,
    x: double,
    y: double,
    z: double,
    tension: double,
    continuity: double,
    bias: double
  ): boolean;

  /**
   * removePointPath3d may be used to remove either a key frame, or a control point
   */
  public removePointPath3d(
    shotId: string,
    columnName: string,
    point: int
  ): boolean;

  /**
   * setPointPath3d may be used to set values in either a key frame, or a control point, but cannot change a key frame into a control point or a control point into a key frame. To change a key frame into a control point or a control point into a key frame, you must remove the point and add a new point.
   */
  public setPointPath3d(
    shotId: string,
    columnName: string,
    point: int,
    x: double,
    y: double,
    z: double,
    tension: double,
    continuity: double,
    bias: double
  ): boolean;

  /**
   * sets the ant segment flag of point i of path p to b.
   */
  public setPath3dPointConstantSegment(
    shotId: string,
    columnName: string,
    point: int,
    ant: boolean
  ): boolean;

  /**
   * sets the ant segment flag of point found at frame f of path p to b.
   */
  public setPath3dPointConstantSegmentForFrame(
    shotId: string,
    columnName: string,
    point: double,
    ant: boolean
  ): boolean;
}

/**
 * This interface is used to access the layers within a given panel
 */
declare class LayerManager extends QObject {
  /**
   * returns number of layers in a panel
   */
  public numberOfLayers(panelId: string): int;

  /**
   * Adds a vector Layer.
   */
  public addVectorLayer(
    panelId: string,
    targetLayerIdx: int,
    before: boolean,
    suggestedName: string
  ): boolean;

  /**
   * Adds a bitmap Layer.
   */
  public addBitmapLayer(
    panelId: string,
    targetLayerIdx: int,
    before: boolean,
    suggestedName: string
  ): boolean;

  /**
   * Returns if layer is Vector.
   */
  public isVectorLayer(panelId: string, index: int): boolean;

  /**
   * Returns if layer is 3D.
   */
  public is3DLayer(panelId: string, index: int): boolean;

  /**
   * Returns if layer is Bitmap.
   */
  public isBitmapLayer(panelId: string, index: int): boolean;

  /**
   * Deletes a given layer.
   */
  public deleteLayer(panelId: string, index: int): boolean;

  /**
   * Renames a given layer.
   */
  public renameLayer(
    panelId: string,
    index: int,
    suggestedName: string
  ): boolean;

  /**
   * Returns name of layer.
   */
  public layerName(panelId: string, index: int): string;

  /**
   * Imports image and creates a new layer at index 0, returns if successful.
   */
  public importImageAsLayer(
    panelId: string,
    fullPathAndFileName: string
  ): boolean;

  /**
   * Set layers visiblility flag.
   */
  public setLayerVisible(
    panelId: string,
    index: int,
    visible: boolean
  ): boolean;

  /**
   * Get layers visiblility flag.
   */
  public layerVisibility(panelId: string, index: int): boolean;

  /**
   * Set layers opacity value.
   */
  public setLayerOpacity(panelId: string, index: int, opacity: double): boolean;

  /**
   * Get layers opacity value.
   */
  public layerOpacity(panelId: string, index: int): double;

  /**
   * Set layers alignment value.
   */
  public setLayerAlignment(
    panelId: string,
    index: int,
    alignment: string
  ): boolean;

  /**
   * Get layers Alignment value.
   */
  public layerAlignment(panelId: string, index: int): string;

  /**
   * Get the path to a layer's drawing.
   */
  public getLayerDrawingName(
    panelId: string,
    index: int,
    fullPath: boolean
  ): string;

  /**
   * Return the elementId of the layer. Useful for the element/Drawing interface.
   */
  public getLayerElementId(panelId: string, index: int): int;
}

/**
 * Simplified MessageBox widget
 */
declare namespace MessageBox {
  /**
   * information box. One button, OK.
   */
  function information(
    unknown_0: QScriptContext,
    unknown_1?: QScriptEngine
  ): QScriptValue;

  /**
   * warning box. Two buttons are Abort and Retry.
   */
  function warning(
    unknown_0: QScriptContext,
    unknown_1?: QScriptEngine
  ): QScriptValue;

  /**
   * critical box. One button, Retry.
   */
  function critical(
    unknown_0: QScriptContext,
    unknown_1?: QScriptEngine
  ): QScriptValue;
}

/**
 * Allows the user to print messages to the message log window
 */
declare namespace MessageLog {
  /**
   * writes the message to the message log
   */
  function trace(message: string): void;

  /**
   * writes the message to the message log if debug mode is on
   */
  function debug(messageIfDebug: string): void;

  /**
   * sets debug mode to on/off
   */
  function setDebug(b: boolean): void;

  /**
   * returns whether debug mode is set
   */
  function isDebug(): boolean;
}

/**
 * This interface is used to access the shot cameras or the panel layers, and add or remove motion to them
 */
declare class MotionManager extends QObject {
  /**
   * adds a Keyframe to the camera
   */
  public addCameraKeyFrame(shotId: string, offset: int): boolean;

  /**
   * remove Keyframe from the camera
   */
  public removeCameraKeyFrame(shotId: string, offset: int): boolean;

  /**
   * clears all Motion from the camera
   */
  public clearCameraMotion(shotId: string): boolean;

  /**
   * retrieves a specific function from the camera, which may be manipulated using the FunctionManager attributes for camera pegs are position.attr3dpath, scale.x, scale.y, scale.z, rotation.anglez, skew
   */
  public linkedCameraFunction(shotId: string, attrName: string): string;

  /**
   * adds a Keyframe to the layer
   */
  public addLayerKeyFrame(
    panelId: string,
    layerIndex: int,
    offset: int
  ): boolean;

  /**
   * remove Keyframe from the layer
   */
  public removeLayerKeyFrame(
    panelId: string,
    layerIndex: int,
    offset: int
  ): boolean;

  /**
   * clears all Motion from the layer
   */
  public clearLayerMotion(panelId: string, layerIndex: int): boolean;

  /**
   * retrieves a specific function from the layer, which may be manipulated using the FunctionManager attributes for layers are offset.attr3dpath, scale.x, scale.y, scale.z, rotation.anglez, skew
   */
  public linkedLayerFunction(
    panelId: string,
    layerIndex: int,
    attrName: string
  ): string;

  /**
   * returns the linked function name for the given node and attribute, which may be manipulated using the FunctionManager
   */
  public getLinkedFunction(
    idString: string,
    nodeName: string,
    attrName: string
  ): string;

  /**
   * sets the linked function for the given node and attribute
   */
  public setLinkedFunction(
    idString: string,
    nodeName: string,
    attrName: string,
    functionName: string
  ): boolean;

  /**
   * creates a new function of the given type within the project or shot or panel
   */
  public addFunction(idString: string, name: string, type: string): boolean;

  /**
   * Changes the attributes of a module.
   */
  public setTextAttr(
    idString: string,
    nodeName: string,
    attrName: string,
    atFrame: double,
    attrValue: string
  ): boolean;

  /**
   * Gets the value of a attribute in a module.
   */
  public getTextAttr(
    idString: string,
    nodeName: string,
    attrName: string,
    atFrame: double
  ): string;

  /**
   * returns the model matrix for the given node.
   */
  public getNodeMatrix(
    idString: string,
    nodeName: string,
    atFrame: double
  ): Matrix4x4;
}

/**
 * This set of functions is used to query/modify the current penstyle and list of penstyles. The list of penstyles includes the brush, pencil and texture styles
 */
declare namespace PenstyleManager {
  /**
   * Gets the number of penstyles.
   */
  function getNumberOfPenstyles(): int;

  /**
   * Gets the name of the penstyle.
   */
  function getPenstyleName(index: int): string;

  /**
   * Gets the index of the current penstyle.
   */
  function getCurrentPenstyleIndex(): int;

  /**
   * Gets the name of the current penstyle.
   */
  function getCurrentPenstyleName(): string;

  /**
   * sets the current penstyle
   */
  function setCurrentPenstyleByName(name: string): void;

  /**
   * sets the current penstyle
   */
  function setCurrentPenstyleByIndex(index: int): void;

  /**
   * set the current penstyle minimum size
   */
  function changeCurrentPenstyleMinimumSize(minimum: double): void;

  /**
   * set the current penstyle maximum size
   */
  function changeCurrentPenstyleMaximumSize(maximum: double): void;

  /**
   * set the current penstyle outline smoothness
   */
  function changeCurrentPenstyleOutlineSmoothness(smooth: double): void;

  /**
   * set the current penstyle centreline smoothness
   */
  function changeCurrentPenstyleCenterlineSmoothness(smooth: double): void;

  /**
   * set the current penstyle eraser flag
   */
  function getCurrentPenstyleMinimumSize(): double;

  /**
   * Gets the current penstyle maximum size.
   */
  function getCurrentPenstyleMaximumSize(): double;

  /**
   * Gets the current penstyle outline smoothness.
   */
  function getCurrentPenstyleOutlineSmoothness(): double;

  /**
   * Gets the current penstyle center line smoothness.
   */
  function getCurrentPenstyleCenterlineSmoothness(): double;

  /**
   * Gets the current penstyle eraser flag.
   */
  function getCurrentPenstyleEraserFlag(): boolean;

  /**
   * Create a string representing the penstyle which can be used to store the penstyle and import it later.
   */
  function exportPenstyleToString(index: int): string;

  /**
   * Formats the penstyle list into a string, which can be used to store the penstyle list and import it later.
   */
  function exportPenstyleListToString(): string;

  /**
   * Imports a penstyle list from a previously formatted penstyle string.
   */
  function importPenstyleListFromString(str: string): void;

  /**
   * Saves the penstyles.
   */
  function savePenstyles(): void;
}

/**
 * Used to represent an actual image file on disk which will not be deleted after script execution. Permanent files can be instantiated in the scripting environment or retrieved in an SM_InputPortWrapper object
 */
declare class PermanentFile extends QObject {
  /**
   * Remove physical file manually. Cannot remove file if there is an open stream.
   */
  public remove(): PermanentFile;

  /**
   * Create a new SCR_FileWrapper.
   */
  constructor();

  /**
   * Create a new PermanentFile.
   */
  constructor(path: string);
}

/**
 * With the Preferences functions, you can retrieve information about the whole preference system. The user can set and retrieve the value of any preferences in the software
 */
declare namespace preferences {
  /**
   * get the color from the given preference name
   */
  function getColor(name: string, defaultValue: ColorRGBA): ColorRGBA;

  /**
   * set the color for the given preference name
   */
  function setColor(name: string, color: ColorRGBA): void;

  /**
   * get the double value from the given preference name
   */
  function getDouble(name: string, defaultValue: double): double;

  /**
   * set the double value for the given preference name
   */
  function setDouble(name: string, value: double): void;

  /**
   * get the integer value from the given preference name
   */
  function getInt(name: string, defaultValue: int): double;

  /**
   * set the integer value for the given preference name
   */
  function setInt(name: string, value: int): void;

  /**
   * get the boolean value from the given preference name
   */
  function getBool(name: string, defaultValue: boolean): boolean;

  /**
   * get the boolean value for the given preference name
   */
  function setBool(name: string, value: boolean): void;

  /**
   * get the string value from the given preference name
   */
  function getString(name: string, defaultValue: string): string;

  /**
   * set the string value for the given preference name
   */
  function setString(name: string, value: string): void;

  function getEnumValue(name: string, defaultValue: int): double;

  function setEnumValue(name: string, value: int): void;

  function preferences(parent: QObject, name: char): void;
}

/**
 * This interface is used to merge/extract another storyboard into the main storyboard
 */
declare class PrjMgtManager extends QObject {
  /**
   * Set the flag to merge sound clips from the source project.
   */
  public setMergeSoundClips(flag: boolean): void;

  /**
   * Set the flag to respect locked sound tracks.
   */
  public setRespectLockedSoundTracks(flag: boolean): void;

  /**
   * Set the flag to keep the original scenes ( when overwriting ) and move them to the end of the project.
   */
  public setKeepOriginalScenes(flag: boolean): void;

  /**
   * Loads the specified storyboard project to be used as a source for insertion.
   */
  public loadSourceProject(scenePath: string): boolean;

  /**
   * Returns a list of sceneIds from the loaded storyboard project.
   */
  public sourceProjectSceneIds(): StringList;

  /**
   * Returns a list of panelIds from the specified scene of the loaded storyboard project.
   */
  public sourceProjectPanelIds(sceneId: string): StringList;

  /**
   * Returns a list of captions from the loaded storyboard project.
   */
  public sourceProjectCaptionNames(): StringList;

  /**
   * Map source Captions by caption name, on insert. True by default.
   */
  public setCaptionRemapByName(flag: boolean): void;

  /**
   * Returns the scene Name for a given source project scene Id.
   */
  public sourceProjectSceneName(sceneId: string): string;

  /**
   * Returns the sequence Name for a given source project scene Id.
   */
  public sourceProjectSequenceName(sceneId: string): string;

  /**
   * Inserts the specified source scene Id into the project.
   */
  public insertScene(
    srcSceneId: string,
    dstSceneId: string,
    overwrite: boolean,
    before: boolean
  ): string;

  /**
   * Inserts the specified source panel Id into the project.
   */
  public insertPanel(
    srcSceneId: string,
    dstSceneId: string,
    overwrite: boolean,
    before: boolean
  ): string;

  /**
   * Extracts the specified range of scenes, and creates a new project with them.
   */
  public extractRange(
    newProjectPath: string,
    newProjectName: string,
    fromShotId: string,
    toShotId: string,
    removeScenes: boolean
  ): boolean;
}

/**
 * Used to launch an external process. Processes can be instantiated in the scripting environment
 */
declare class Process extends QObject {
  /**
   * Launch process.
   */
  public launch(): int;

  /**
   * Launch process and detach it from application.
   */
  public launchAndDetach(): int;

  /**
   * Fetch command line to be executed in this process.
   */
  public commandLine(): string;

  /**
   * Fetch error code.
   */
  public errorCode(): int;

  /**
   * Fetch error message.
   */
  public errorMessage(): string;

  /**
   * Terminate process.
   */
  public terminate(): void;

  /**
   * Verify if process is still alive.
   */
  public isAlive(): boolean;

  /**
   * Fetch process PID.
   */
  public pid(): int;

  /**
   * Create a new Process. A process created with a pid cannot be launched as it already should have been. terminate() and isAlive() functions can still be called with such a process.
   */
  constructor(pid: int);

  /**
   * Create a new Process.
   */
  constructor(name: string, ...args: any[]);

  /**
   * Create a new Process.
   */
  constructor(name: string, list: StringList);

  /**
   * Create a new Process.
   */
  constructor(commandLine: string);
}

/**
 * This interface is used to access the properties of the storyboard project
 */
declare class PropertiesManager extends QObject {
  /**
   * returns the duration of the project in frames
   */
  public getDuration(): int;

  /**
   * sets the project title
   */
  public setTitle(title: string): boolean;

  /**
   * gets the project title
   */
  public getTitle(): string;

  /**
   * sets the project sub title
   */
  public setSubTitle(title: string): boolean;

  /**
   * gets the project sub title
   */
  public getSubTitle(): string;

  /**
   * sets the edisode title
   */
  public setEpisodeTitle(title: string): boolean;

  /**
   * gets the episode title
   */
  public getEpisodeTitle(): string;

  /**
   * sets the project copyright text
   */
  public setCopyright(text: string): boolean;

  /**
   * gets the copyright string
   */
  public getCopyright(): string;

  /**
   * sets the project start time
   */
  public setStartTime(nbFrames: int): boolean;

  /**
   * returns the project start time
   */
  public getStartTime(): int;

  /**
   * sets the project film width
   */
  public setFilmWidth(width: double): boolean;

  /**
   * returns the project film width
   */
  public getFilmWidth(): double;
}

/**
 * With the Scene functions, you can retrieve and set global scene attributes, like the aspect ratio of the cells in the scene grid
 */
declare namespace scene {
  /**
   * returns the ID of the current version.
   */
  function currentVersion(): int;

  /**
   * returns the name or the number of the current scene version.
   */
  function currentVersionName(): string;

  /**
   * returns the name of the current environment.
   */
  function currentEnvironment(): string;

  /**
   * returns the name of the current job.
   */
  function currentJob(): string;

  /**
   * returns the name of the current scene.
   */
  function currentScene(): string;

  /**
   * Return the current project path.
   */
  function currentProjectPath(): string;

  /**
   * For windows, returns the remapped path.
   */
  function currentProjectPathRemapped(): string;

  /**
   * Return the temporary project path.
   */
  function tempProjectPath(): string;

  /**
   * For windows, returns the remapped temporary project path.
   */
  function tempProjectPathRemapped(): string;

  /**
   * This function starts the accumulation of all of the functions between it and the endUndoRedoAccum function as one command that will appear in the undo/redo list. If you do not use this function with endUndoRedoAccum, each function in the script generates a separate undo/redo entry.
   */
  function beginUndoRedoAccum(commandName: string): void;

  /**
   * This function ends the accumulation all of the functions between it and the beginUndoRedoAccum function as one command that will appear in the undo/redo list. If you do not use this function with beginUndoRedoAccum, each function in the script generates a separate undo/redo entry.
   */
  function endUndoRedoAccum(): void;

  /**
   * This function cancels the accumulation of undo/redo commands. No command will be added to the undo/redo list and all commands that have already been executed will be rolled-back (undone).
   */
  function cancelUndoRedoAccum(): void;

  /**
   * undoes the last n operation. If n is not specified, it will be 1
   */
  function undo(depth?: int): void;

  /**
   * redoes the last n operation. If n is not specified, it will be 1
   */
  function redo(depth?: int): void;

  /**
   * Clear command history.
   */
  function clearHistory(): void;

  /**
   * returns the X value of the aspect ratio of the cells in the scene grid.
   */
  function unitsAspectRatioX(): double;

  /**
   * returns the Y value of the aspect ratio of the cells in the scene grid.
   */
  function unitsAspectRatioY(): double;

  /**
   * returns the number of units in the X axis of the scene grid.
   */
  function numberOfUnitsX(): int;

  /**
   * returns the number of units in the Y axis of the scene grid.
   */
  function numberOfUnitsY(): int;

  /**
   * returns the number of units in the Z axis of the scene grid.
   */
  function numberOfUnitsZ(): int;

  /**
   * returns the X value of the centre coordinate of the scene grid.
   */
  function coordAtCenterX(): int;

  /**
   * returns the Y value of the centre coordinate of the scene grid.
   */
  function coordAtCenterY(): int;

  /**
   * returns the current preview resolution. For example, when the current resolution is 720x540 pixels this function will return 720.
   */
  function currentResolutionX(): int;

  /**
   * returns the current preview resolution. For example, when the current resolution is 720x540 pixels this function will return 540.
   */
  function currentResolutionY(): int;

  /**
   * returns the default resolution name. The resolution name is a global parameter saved with the project. It may be empty when the project is used as a custom resolution, which is not one of the pre-defined resolutions.
   */
  function defaultResolutionName(): string;

  /**
   * returns the default resolution. This resolution is a global parameter saved with the project, not the current preview resolution. For example, when the default scene resolution is 720x540 pixels this function will return 720.
   */
  function defaultResolutionX(): int;

  /**
   * returns the default resolution. This resolution is a global parameter saved with the project, not the current preview resolution. For example, when the default scene resolution is 720x540 pixels this function will return 540.
   */
  function defaultResolutionY(): int;

  /**
   * returns the default resolution field of view (FOV). The default FOV is a global scene parameter.
   */
  function defaultResolutionFOV(): double;

  /**
   * returns the list of known resolution
   */
  function namedResolutions(): StringList;

  /**
   * returns the named resolution. For example, when the named resolution is 720x540 pixels this function will return 720.
   */
  function namedResolutionX(name: string): int;

  /**
   * returns the named resolution. For example, when the named resolution is 720x540 pixels this function will return 540.
   */
  function namedResolutionY(name: string): int;

  /**
   * returns the frame rate, as frame per seconds.
   */
  function getFrameRate(): int;

  /**
   * performs the " save all " command. Effectively, this saves the entire project and all modified files.
   */
  function saveAll(): boolean;

  /**
   * saves the project as a new version.
   */
  function saveAsNewVersion(name: string, markAsDefault: boolean): boolean;

  /**
   * sets the aspect ratio of the scene. The scene's final aspect ratio will be: X * numberOfUnitsX()/Y * numberOfUnitsY()
   */
  function setUnitsAspectRatio(x: double, y: double): boolean;

  /**
   * sets the number of X, Y, and Z units in the scene grid.
   */
  function setNumberOfUnits(x: int, y: int, z: int): boolean;

  /**
   * sets the value of the centre (X, Y) coordinates.
   */
  function setCoordAtCenter(x: int, y: int): boolean;

  /**
   * allows the default scene resolution and field of view to be changed.
   */
  function setDefaultResolution(x: int, y: int, fov: double): boolean;

  /**
   * This function allows the default scene resolution name to be changed.
   */
  function setDefaultResolutionName(name: string): boolean;

  /**
   * This function allows the default frame rate of the project to be changed. The frame rate is expressed as frame per second. Typical value is 12, 24 or 30.
   */
  function setFrameRate(frameRate: int): boolean;

  /**
   * returns the model matrix for the default camera.
   */
  function getCameraMatrix(frame: int): Matrix4x4;

  /**
   * converts a field coordinate into an OGL coordinate
   */
  function toOGL(pointOrVector: QObject): QObject;

  /**
   * converts an OGL coordinate into a field coordinate.
   */
  function fromOGL(pointOrVector: QObject): QObject;

  /**
   * retrieves default display set in current scene.
   */
  function getDefaultDisplay(): string;

  /**
   * closes the current scene.
   */
  function closeScene(): void;

  /**
   * closes the current scene and exits.
   */
  function closeSceneAndExit(): void;

  /**
   * closes the current scene and open the scene specified by env, job, scene and version
   */
  function closeSceneAndOpen(
    envName: string,
    jobName: string,
    sceneName: string,
    versionName: string
  ): boolean;

  /**
   * returns all palettes that were either unrecovered or recovered but not yet saved, depending on the arguments of the function.
   */
  function getMissingPalettes(
    unrecovered: boolean,
    recoveredNotYetSaved: boolean
  ): StringList;

  function getMetadataList(): QScriptValue;
}

/**
 *
 */
declare class SCR_FileIOTypeWrapper extends QObject {}

/**
 * Base class to TemporaryFile and PermanentFile
 */
declare class SCR_FileWrapper extends QObject {
  /**
   * Specify absolute path of this image file. Name of file can be changed only if there is an open stream.
   */
  public setPath(path: string): SCR_FileWrapper;

  /**
   * Retrieve file path.
   */
  public path(): string;

  /**
   * Retrieve file extension.
   */
  public extension(): string;

  /**
   * Verify if file exists on disk.
   */
  public exists(): boolean;

  /**
   * Check if file is opened.
   */
  public isOpen(): boolean;

  /**
   * Check if file is closed.
   */
  public isClose(): boolean;

  /**
   * Open file stream for read/write.
   */
  public open(m?: int): boolean;

  /**
   * Close file stream.
   */
  public close(): boolean;

  /**
   * Write string in current stream.
   */
  public write(text: string): void;

  /**
   * Write string line in current stream.
   */
  public writeLine(text: string): void;

  /**
   * Write entire content of parameter file in current stream.
   */
  public write(file: SCR_FileWrapper): void;

  /**
   * Read entire content of stream.
   */
  public read(): string;

  /**
   * Read single line of stream.
   */
  public readLine(): string;

  public move(dest: SCR_FileWrapper): boolean;

  public copy(dest: SCR_FileWrapper): boolean;
}

/**
 *
 */
declare namespace SCR_SystemInterfaceImpl {
  function println(arg: string): void;

  function getenv(str: string): string;

  function processOneEvent(): void;
}

/**
 * This interface is used to access the GUI storyboard selection. In batch mode, this interface is a no-op
 */
declare class SelectionManager extends QObject {
  /**
   * returns list of selected sequences
   */
  public getSequenceSelection(): StringList;

  /**
   * returns list of selected scenes
   */
  public getSceneSelection(): StringList;

  /**
   * returns list of selected panels
   */
  public getPanelSelection(): StringList;

  /**
   * Clear selection.
   */
  public clearSelection(): boolean;

  /**
   * Select All.
   */
  public selectAll(): boolean;

  /**
   * set Selected Panels
   */
  public setPanelSelection(l: StringList): boolean;

  /**
   * set Selected Scenes
   */
  public setSceneSelection(l: StringList): boolean;

  /**
   * set Selected Sequences
   */
  public setSequenceSelection(l: StringList): boolean;

  /**
   * sets the current panel and moves the playhead
   */
  public setCurrentPanel(panelId: string): boolean;
}

/**
 *
 */
declare class soundColumnInterface extends QObject {
  public sequences(): QScriptValue;

  public column(): string;
}

/**
 *
 */
declare class soundSequenceInterface extends QObject {
  constructor(
    startFrame: any,
    endFrame: any,
    startTime: float,
    stopTime: float,
    name: string,
    filename: string
  );

  public startFrame(): void;

  public stopFrame(): void;

  public startTime(): float;

  public stopTime(): float;

  public name(): string;

  public filename(): string;

  _startFrame: void;

  _stopFrame: void;

  _startTime: float;

  _stopTime: float;

  _name: string;

  _filename: string;
}

/**
 * This interface is used to access the audio tracks of a storyboard project
 */
declare class SoundTrackManager extends QObject {
  /**
   * return the number of Audio tracks
   */
  public numberOfSoundTracks(): int;

  /**
   * return the columnName of the audio track at index
   */
  public nameOfSoundTrack(index: int): string;

  /**
   * add a new empty audio track
   */
  public addSoundTrack(): string;

  /**
   * delete audio track
   */
  public deleteSoundTrack(columnName: string): boolean;

  /**
   * import a sound file into a given audio track at the specified frame
   */
  public importSoundBuffer(
    columnName: string,
    soundFile: string,
    targetFrame: int
  ): boolean;

  /**
   * returns a SoundColumnInterface object that contains a reference to that sound column. The SoundColumnInterface object contains a useful interface to introspecting the sound and its sound sequences.
   */
  public soundColumn(columnName: string): QObject;
}

/**
 * By using the SpecialFolders functions, you can retrieve information about the different folders (directories) used by the application. All of the functions are read-only. They return strings that represent folders in use by the various applications. Depending on the application (e.g. Toon Boom Harmony versus Toon Boom AnimatePro), the same content is stored in a different location
 */
declare namespace specialFolders {
  /**
   * read-only property for the root installation folder
   */
  var root: string;

  /**
   * read-only property that contains the folder where application configuration files are stored. Normally, this is the /etc folder.
   */
  var config: string;

  /**
   * read-only property that contains where the resources files are stored.
   */
  var resource: string;

  /**
   * read-only property that indicates where the <install>/etc folder is.
   */
  var etc: string;

  /**
   * read-only property that contains the folder where the language files are stored.
   */
  var lang: string;

  /**
   * read-only property that contains the platform specific folder.
   */
  var platform: string;

  /**
   * A read-only property containing the folder where the platforms specific applications are stored. Application and Binary folders are different on OS X, but are identical on all other platforms.
   */
  var app: string;

  /**
   * This is a read-only property that contains the folder where the platforms specific binaries are stored. Application and Binary folders are different on OS X. They are identical on all other platforms.
   */
  var bin: string;

  /**
   * This is a read-only property that contains the folder where the platforms specific 32-bit binaries are stored.
   */
  var bin32: string;

  /**
   * This is a read-only property that contains the folder where the platforms specific libraries are stored.
   */
  var library: string;

  /**
   * Location where the plugins that were designed for the previous SDK are stored. Replaces the plugins property.
   */
  var legacyPlugins: string;

  /**
   * Location where the plugins that comply with the current SDK are stored.
   */
  var plugins: string;

  /**
   * This is a read-only property that contains where the application will create its temporary files.
   */
  var temp: string;

  /**
   * This is a read-only property that contains the folder where the user configuration is stored.
   */
  var userConfig: string;

  /**
   * This is a read-only property that contains the folder where the html help folder is.
   */
  var htmlHelp: string;
}

/**
 * This interface is used to access the main storyboard project. It can be used to query the sequences, scenes, panels and transitions of the project. As well, it can be used to create, delete or rename project objects
 */
declare class StoryboardManager extends QObject {
  /**
   * Returns the number of sequences in the project.
   */
  public numberOfSequencesInProject(): int;

  /**
   * Returns the sequenceId of the ith sequence in project.
   */
  public sequenceInProject(i: int): string;

  /**
   * Returns sequenceId of the sequence of the given scene.
   */
  public sequenceIdOfScene(sceneId: string): string;

  /**
   * returns the number of scenes in a sequence
   */
  public numberOfScenesInSequence(sequenceId: string): int;

  /**
   * Returns sceneId of the ith scene in sequence.
   */
  public sceneInSequence(sequenceId: string, i: int): string;

  /**
   * returns the number of scenes in project
   */
  public numberOfScenesInProject(): int;

  /**
   * Returns sceneId of the ith scene in project.
   */
  public sceneInProject(i: int): string;

  /**
   * Returns sceneId of the panel.
   */
  public sceneIdOfPanel(panelId: string): string;

  /**
   * Returns the number of panels in a scene.
   */
  public numberOfPanelsInScene(sceneId: string): int;

  /**
   * Returns the panelId of the ith panel in the scene.
   */
  public panelInScene(sceneId: string, index: int): string;

  /**
   * returns the number of panels in project
   */
  public numberOfPanelsInProject(): int;

  /**
   * Returns panelId of the ith panel in project.
   */
  public panelInProject(i: int): string;

  /**
   * Returns the name of the sequence.
   */
  public nameOfSequence(sequenceId: string): string;

  /**
   * Returns the name of the scene.
   */
  public nameOfScene(sceneId: string): string;

  /**
   * Returns the name of the panel.
   */
  public nameOfPanel(panelId: string): string;

  /**
   * Returns the unique id of the sequence.
   */
  public sequenceId(sequenceName: string): string;

  /**
   * Returns the unique id of the scene.
   */
  public sceneId(sequenceName: string, sceneName: string): string;

  /**
   * Returns the unique id of the panel.
   */
  public panelId(
    sequenceName: string,
    sceneName: string,
    panelName: string
  ): string;

  /**
   * Creates a new sequence.
   */
  public createSequence(firstShotId: string, lastShotId: string): string;

  /**
   * Inserts a new scene.
   */
  public insertScene(after: boolean, shotId: string, name: string): string;

  /**
   * Append a scene at the end of the project.
   */
  public appendScene(name: string): string;

  /**
   * Inserts a new panel.
   */
  public insertPanel(after: boolean, panelId: string, name: string): string;

  /**
   * Append a panel at the end of the project.
   */
  public appendPanel(name: string): string;

  /**
   * Split a panel into 2 panels.
   */
  public splitPanel(panelId: string, atFrame: int): boolean;

  /**
   * Deletes a sequence.
   */
  public deleteSequence(seqId: string): boolean;

  /**
   * Deletes a scene.
   */
  public deleteScene(sceneId: string): boolean;

  /**
   * Deletes a panel.
   */
  public deletePanel(panelId: string): boolean;

  /**
   * Renames a sequence.
   */
  public renameSequence(seqId: string, newName: string): boolean;

  /**
   * Renames a scene.
   */
  public renameScene(sceneId: string, newName: string): boolean;

  /**
   * Renames a panel.
   */
  public renamePanel(panelId: string, newName: string): boolean;

  /**
   * gets the panel Duration
   */
  public getPanelDuration(panelId: string): int;

  /**
   * sets the panel duration
   */
  public setPanelDuration(panelId: string, frames: int): boolean;

  /**
   * returns the start frame of a scene
   */
  public sceneStartFrame(shotId: string): int;

  /**
   * returns the last frame of a scene
   */
  public sceneEndFrame(shotId: string): int;

  /**
   * returns a list of the sceneIds of scenes that have leading transitions
   */
  public scenesWithTrx(): StringList;

  /**
   * returns the sceneId of the shot to the right of the transition
   */
  public sceneIdOfTrx(trxId: string): string;

  /**
   * returns the transition ID of the transition to the left of the shot
   */
  public trxIdOfScene(shotId: string): string;

  /**
   * returns whether a scene has a leading transition
   */
  public sceneHasTrx(shotId: string): boolean;

  /**
   * returns a string identifying the transition type
   */
  public trxType(trxId: string): string;

  /**
   * returns the length of the transition
   */
  public trxLength(trxId: string): int;

  /**
   * Create a transition ( at the beginning of the target shot ), and return the unique ID of the transition.
   */
  public createTrx(
    shotId: string,
    length: int,
    stringType: string,
    angle?: int,
    reverse?: boolean
  ): string;

  /**
   * modify the transition
   */
  public modifyTrx(
    trxId: string,
    stringType: string,
    angle?: int,
    revers?: boolean
  ): boolean;

  /**
   * resize a transition
   */
  public resizeTrx(trxId: string, length: int): boolean;

  /**
   * delete a transition
   */
  public deleteTrx(trxId: string): boolean;
}

/**
 * Used to represent an actual image file on disk which will be deleted after script execution. Temporary files can be instantiated in the scripting environment or retrieved in an SM_InputPortWrapper object
 */
declare class TemporaryFile extends QObject {
  /**
   * Change extension from automatically generated file name. Extension won't change if there is an open stream.
   */
  public setExtension(ext: string): TemporaryFile;

  /**
   * Create a new TemporaryFile.
   */
  constructor();

  /**
   * Create a new TemporaryFile.
   */
  constructor(extension: string);
}

/**
 * The View functions provide information about the contents of selected View windows
 */
declare namespace view {
  /**
   * returns a unique identifier for the current, active View.
   */
  function currentView(): string;

  /**
   * returns a string that indicates what type of View the currentView is.
   */
  function type(viewName: string): string;

  /**
   * forces a refresh of the drawing and scene planning views.
   */
  function refreshViews(): void;

  /**
   * returns the drawing tool manager.
   */
  function currentToolManager(): QObject;
}