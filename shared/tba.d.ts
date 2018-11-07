/// <reference path="./tba-unknown.d.ts" />
/**
 * Undocumented File access modes for `File.open()`
 */
declare const enum FileAccessMode {
  READ = 1,
  WRITE = 2
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
    ALL = 3
  }

  const enum SortSpec {
    ALPHA = 0,
    NATURAL = 1,
    UNKNOWN2 = 2,
    UNKNOWN3 = 3
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
  public entryList(filter: string, filterSpec?: Dir.FilterSpec, sortSpec?: Dir.SortSpec): StringList;

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

  function setSvgIcon(context: QScriptContext, engine?: QScriptEngine): QScriptValue;

  /**
   * Takes a DPI-independent pixel dimension (100% DPI scaling on an HD screen) and scales it to the current DPI setting.
   */
  function dpiScale(context: QScriptContext, engine?: QScriptEngine): QScriptValue;
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
 * Simplified FileDialog interface
 */
declare namespace FileDialog {
  /**
   * function that returns an existing file selected by the user
   */
  function getOpenFileName(filter?: string, title?: string, parent?: QWidget): string;

  /**
   * function that will return a file name selected by the user
   */
  function getSaveFileName(filter?: string, title?: string, parent?: QWidget): string;

  /**
   * function that will return an existing directory selected by the user
   */
  function getExistingDirectory(dir?: string, title?: string, parent?: QWidget): string;

  /**
   * function that will return one or more existing files selected by the user
   */
  function getOpenFileNames(dir?: string, filter?: string, title?: string, parent?: QWidget): StringList;
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
  function getText(label?: string, text?: string, title?: string, parent?: QWidget): string;

  /**
   * Function to get a number from the user.
   */
  function getNumber(label?: string, value?: double, decimals?: int, minValue?: double, maxValue?: double, title?: string, parent?: QWidget): number;

  /**
   * Function to get an item from the user.
   */
  function getItem(label: string, itemList: StringList, currentItem?: string, editable?: boolean, title?: string, parent?: QWidget): string;

  /**
   * Function to get an item from the user.
   */
  function getItem(itemList: StringList, currentItem?: string, editable?: boolean, parent?: QWidget): string;
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
  public orthogonalProject(left: double, right: double, bottom: double, top: double, zNear: double, zFar: double): Matrix4x4;

  /**
   * Calculate a perspective projection Matrix4x4.
   */
  public perspectiveProject(left: double, right: double, bottom: double, top: double, zNear: double, zFar: double): Matrix4x4;

  /**
   * Calculate a perspective projection Matrix4x4.
   */
  public perspectiveProject(fovy: double, ratio: double, zNear: double, zFar: double): Matrix4x4;

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
