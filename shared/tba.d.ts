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
  open(accessMode: int): void;

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
  public entryList(filter: string, filterSpec?: int, sortSpec?: int): StringList;

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
declare module DirSpec {
  // function DirSpec (): void;

  // function DirSpec (parent: QObject): void;

  // function DirSpec (rhs: DirSpec): void;

}

/**
* The UiLoader JavaScript global object allows the user to load pre-defined Qt forms that define Qt widgets (generally built within Qt Designer) 
*/
declare module UiLoader {
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
declare module about {
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
declare module FileDialog {
  /**
  * function that returns an existing file selected by the user
  */
  function getOpenFileName(filter?: string, title?: string, parent?: QWidget): QVariant;

  /**
  * function that will return a file name selected by the user
  */
  function getSaveFileName(filter?: string, title?: string, parent?: QWidget): QVariant;

  /**
  * function that will return an existing directory selected by the user
  */
  function getExistingDirectory(dir?: string, title?: string, parent?: QWidget): QVariant;

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
declare class DateEditEnum extends QObject {
}

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
declare module Input {
  /**
  * Function to get a string from the user.
  */
  function getText(label?: string, text?: string, title?: string, parent?: QWidget): QVariant;

  /**
  * Function to get a number from the user.
  */
  function getNumber(label?: string, value?: double, decimals?: int, minValue?: double, maxValue?: double, title?: string, parent?: QWidget): QVariant;

  /**
  * Function to get an item from the user.
  */
  function getItem(label: string, itemList: StringList, currentItem?: string, editable?: boolean, title?: string, parent?: QWidget): QVariant;

  /**
  * Function to get an item from the user.
  */
  function getItem(itemList: StringList, currentItem?: string, editable?: boolean, parent?: QWidget): QVariant;

}

/**
* 
*/
declare module KeyModifiers {
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