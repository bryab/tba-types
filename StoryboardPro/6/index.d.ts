/// <reference path="../../shared/qtscript.d.ts" />

declare class BAPP_SpecialFolders {}
declare class GlobalObject {}
declare class QScriptable {}
declare class SCR_BaseInterface {}

/**
 * By using the SpecialFolders functions, you can retrieve information about the different folders
 * (directories) used by the application. All of the functions are read-only. They return strings that
 * represent folders in use by the various applications. Depending on the application (e.g. Toon Boom
 * Harmony versus Toon Boom AnimatePro), the same content is stored in a different location.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classspecialFolders.html}
 */
declare class specialFolders extends BAPP_SpecialFolders {
  /**
   * A read-only property containing the folder where the platforms specific applications are stored.
   * Application and Binary folders are different on OS X, but are identical on all other platforms.
   * @returns {string}
   */
  static app: string;

  /**
   * This is a read-only property that contains the folder where the platforms specific binaries are
   * stored. Application and Binary folders are different on OS X. They are identical on all other
   * platforms.
   * @returns {string}
   */
  static bin: string;

  /**
   * This is a read-only property that contains the folder where the platforms specific 32-bit binaries
   * are stored.
   * @returns {string}
   */
  static bin32: string;

  /**
   * read-only property that contains the folder where application configuration files are stored.
   * Normally, this is the /etc folder.
   * @returns {string}
   */
  static config: string;

  /**
   * read-only property that indicates where the <install>/etc folder is.
   * @returns {string}
   */
  static etc: string;

  /**
   * This is a read-only property that contains the folder where the html help folder is.
   * @returns {string}
   */
  static htmlHelp: string;

  /**
   * read-only property that contains the folder where the language files are stored.
   * @returns {string}
   */
  static lang: string;

  /**
   * Location where the plugins that were designed for the previous SDK are stored. Replaces the plugins
   * property.
   * @returns {string}
   */
  static legacyPlugins: string;

  /**
   * This is a read-only property that contains the folder where the platforms specific libraries are
   * stored.
   * @returns {string}
   */
  static library: string;

  /**
   * read-only property that contains the platform specific folder.
   * @returns {string}
   */
  static platform: string;

  /**
   * Location where the plugins that comply with the current SDK are stored.
   * @returns {string}
   */
  static plugins: string;

  /**
   * read-only property that contains where the resources files are stored.
   * @returns {string}
   */
  static resource: string;

  /**
   * read-only property for the root installation folder
   * @returns {string}
   */
  static root: string;

  /**
   * This is a read-only property that contains where the application will create its temporary files.
   * @returns {string}
   */
  static temp: string;

  /**
   * This is a read-only property that contains the folder where the user configuration is stored.
   * @returns {string}
   */
  static userConfig: string;
}

/**
 * Simplified ComboBox widget.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classComboBox.html}
 */
declare class ComboBox extends Labeled {
  /**
   * currently selected item
   * @returns {string}
   */
  currentItem: string;

  /**
   * index of the current item
   * @returns {int}
   */
  currentItemPos: int;

  /**
   * whether the combo box may be edited by the user
   * @returns {boolean}
   */
  editable: boolean;

  /**
   * stringlist of items
   * @returns {StringList}
   */
  itemList: StringList;
}

/**
 * Simplified DateEdit widget.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classDateEdit.html}
 * @example
 * widget.order = DateEditEnum.YDM;
 */
declare class DateEdit extends Labeled {
  /**
   * the date shown
   * @returns {QDate}
   */
  date: QDate;

  /**
   * the maximum date allowed
   * @returns {QDate}
   */
  maximum: QDate;

  /**
   * the minimum date allowed
   * @returns {QDate}
   */
  minimum: QDate;

  /**
   * whether the order shown is DMY, MDY, YMD, or YDM
   * @returns {int}
   */
  order: int;
}

/**
 * Simplified LineEdit widget. Note that this widget is derived from Label, so also has a label
 * property.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classLineEdit.html}
 */
declare class LineEdit extends Labeled {
  /**
   * text shown in LineEdit
   * @returns {string}
   */
  text: string;
}

/**
 * Simplified NumberEdit widget.
 * Derived from Label, so also has a label property.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classNumberEdit.html}
 */
declare class NumberEdit extends Labeled {
  /**
   * precision of the NumberEdit
   * @returns {double}
   */
  decimals: double;

  /**
   * maximum value allowed
   * @returns {double}
   */
  maximum: double;

  /**
   * minimum value allowed
   * @returns {double}
   */
  minimum: double;

  /**
   * the value shown
   * @returns {double}
   */
  value: double;
}

/**
 * Simplified slider widget.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classSlider.html}
 */
declare class Slider extends Labeled {
  /**
   * set the value in the slider, triggering the callback
   * @param {int} value
   * @returns {void}
   */
  public valueChanged(value: int): void;

  /**
   * use this to assign the name of another function. This function will be triggered automatically when
   * the slider value is modified
   * @returns {string}
   */
  callback: string;

  /**
   * maximum value of the slider
   * @returns {int}
   */
  maximum: int;

  /**
   * minimum value of the slider
   * @returns {int}
   */
  minimum: int;

  /**
   * horizontal or vertical
   * @returns {string}
   */
  orientation: string;

  /**
   * value of the slider
   * @returns {int}
   */
  value: int;
}

/**
 * Simplified SpinBox widget.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classSpinBox.html}
 */
declare class SpinBox extends Labeled {
  /**
   * the maximum value that the spinBox will ascend to
   * @returns {int}
   */
  maximum: int;

  /**
   * the minimum value that the spinBox will descend to
   * @returns {int}
   */
  minimum: int;

  /**
   * the value shown in the spinBox
   * @returns {int}
   */
  value: int;
}

/**
 * Simplified TimeEdit widget.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classTimeEdit.html}
 */
declare class TimeEdit extends Labeled {
  /**
   * the maximum time
   * @returns {QTime}
   */
  maximum: QTime;

  /**
   * the minimum time
   * @returns {QTime}
   */
  minimum: QTime;

  /**
   * whether to show the AM : PM display
   * @returns {boolean}
   */
  showAMPM: boolean;

  /**
   * whether to show seconds
   * @returns {boolean}
   */
  showSeconds: boolean;

  /**
   * the current time
   * @returns {QTime}
   */
  time: QTime;
}

/**
 * Returns information about the current application running the script and its environment. You can
 * use it in both Script Editor and scriptModule.
 * The about class allows to query platform and application specific ants.
 * You can use it in both Script Editor and scriptModule.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classabout.html}
 * @example
 * function printAbout() {
 *     // Application: normal, deom or educationals
 *     print("");
 *     print("full (commercial) version: " + about.fullVersion);
 *     print("demo version: " + about.demoVersion);
 *     print("educational version: " + about.educVersion);
 *     print("harmony product : " + about.harmony);
 *     print("");
 *     print("stage: " + about.stage);
 *
 *     // Software /product
 *     print("Windows architecture: " + about.windowsArch);
 *     print("OSX architecture: " + about.macArch);
 *     print("OSX PowerPC architecture: " + about.macPpcArch);
 *     print("OSX Intel architecture: " + about.macIntelArch);
 *     print("Linux architecture: " + about.linuxArch);
 *     print("Interactive: " + about.interactiveApp);
 *
 *     // Architecture
 *     print("StageMain Mode: " + about.mainApp);
 *     print("Paint mode: " + about.paintMode);
 *     print("XSheet mode: " + about.xsheetMode);
 *
 *
 *     // type of application
 *     print("Scan application: " + about.scanApp);
 *     print("ControlCenter application: " + about.controlCenterApp);
 *     print("application path: " + about.applicationPath);
 * }
 */
declare class about extends QObject {
  /**
   * Query current application folder.
   * @returns {string}
   */
  public getApplicationPath(): string;

  /**
   * returns the application. Identical to property "applicationPath".
   * @returns {string}
   */
  public getApplicationPath(): string;

  /**
   * Query common binary folder.
   * @returns {string}
   */
  public getBinaryPath(): string;

  /**
   * returns the folder where the binaries can be found.
   * @returns {string}
   */
  public getBinaryPath(): string;

  /**
   * returns a string that represents the flavour of the application, e.g. Harmony,
   * @returns {string}
   */
  public getFlavorString(): string;

  /**
   * Query common resources folder.
   * @returns {string}
   */
  public getResourcesPath(): string;

  /**
   * returns the folder where the resources can be found.
   * @returns {string}
   */
  public getResourcesPath(): string;

  /**
   * Return the user name.
   * @returns {string}
   */
  public getUserName(): string;

  /**
   * returns the version info string.
   * @returns {string}
   */
  public getVersionInfoStr(): string;

  /**
   * returns true whenever this application running application is ControlCenter
   * @returns {boolean}
   */
  public isControlCenterApp(): boolean;

  /**
   * returns true whenever this application is a Demo variant.
   * @returns {boolean}
   */
  public isDemoVersion(): boolean;

  /**
   * returns true whenever this application is an Educational variant.
   * @returns {boolean}
   */
  public isEducVersion(): boolean;

  /**
   * returns true whenever this application is a Commercial/Full variant.
   * @returns {boolean}
   */
  public isFullVersion(): boolean;

  /**
   * true when connected to a database or when compiled with Harmony.
   * @returns {boolean}
   */
  public isHarmony(): boolean;

  /**
   * returns true whenever this application is interactive. All application capable of running scripts
   * are interactive.
   * @returns {boolean}
   */
  public isInteractiveApp(): boolean;

  /**
   * Query if current platform is Linux.
   * @returns {boolean}
   */
  public isLinuxArch(): boolean;

  /**
   * returns true when running on linux.
   * @returns {boolean}
   */
  public isLinuxArch(): boolean;

  /**
   * Query if current platform is Mac.
   * @returns {boolean}
   */
  public isMacArch(): boolean;

  /**
   * returns true when running on MacOS.
   * @returns {boolean}
   */
  public isMacArch(): boolean;

  /**
   * Query if current platform is Mac Intel.
   * @returns {boolean}
   */
  public isMacIntelArch(): boolean;

  /**
   * returns true when running on an Apple OS X operating system and on a Mac Intel.
   * @returns {boolean}
   */
  public isMacIntelArch(): boolean;

  /**
   * Query if current platform is Mac Power PC.
   * @returns {boolean}
   */
  public isMacPpcArch(): boolean;

  /**
   * returns true when running on an Apple OS X operating system and on a Mac PowerPC.
   * @returns {boolean}
   */
  public isMacPpcArch(): boolean;

  /**
   * returns true when this application is Stage, or Storyboard, and not a peripheral application.
   * @returns {boolean}
   */
  public isMainApp(): boolean;

  /**
   * returns true when this application is in Paint mode.
   * @returns {boolean}
   */
  public isPaintMode(): boolean;

  /**
   * true when this application is Scan.
   * @returns {boolean}
   */
  public isScanApp(): boolean;

  /**
   * only true when running as Stage.
   * @returns {boolean}
   */
  public isStage(): boolean;

  /**
   * only true when running as Stage Advanced
   * @returns {boolean}
   */
  public isStageAdvanced(): boolean;

  /**
   * only true when running as Stage Essentials.
   * @returns {boolean}
   */
  public isStageEssentials(): boolean;

  /**
   * only true when running as Storyboard.
   * @returns {boolean}
   */
  public isStoryboard(): boolean;

  /**
   * Query if current platform is Windows.
   * @returns {boolean}
   */
  public isWindowsArch(): boolean;

  /**
   * returns true when running on Windows.
   * @returns {boolean}
   */
  public isWindowsArch(): boolean;

  /**
   * returns true when this application is in Xsheet mode.
   * @returns {boolean}
   */
  public isXsheetMode(): boolean;

  /**
   * returns a string that is the name of application.
   * @returns {string}
   */
  public productName(): string;

  /**
   * See isStageAdvanced.
   * @returns {boolean}
   */
  advanced: boolean;

  /**
   * Application with GUI folder (different than binFolder on Mac. Same for all other platforms ).
   * application with GUI folder (different than binFolder on Mac. Same for all other platforms )
   * @returns {string}
   */
  applicationPath: string;

  /**
   * Common binary folder.
   * See getBinaryPath.
   * @returns {string}
   */
  binaryPath: string;

  /**
   * See isControlCenterApp.
   * @returns {boolean}
   */
  controlCenterApp: boolean;

  /**
   * See isDemoVersion.
   * @returns {boolean}
   */
  demoVersion: boolean;

  /**
   * See isEducVersion.
   * @returns {boolean}
   */
  educVersion: boolean;

  /**
   * See isStageEssentials.
   * @returns {boolean}
   */
  essentials: boolean;

  /**
   * See isFullVersion.
   * @returns {boolean}
   */
  fullVersion: boolean;

  /**
   * See isHarmony.
   * @returns {boolean}
   */
  harmony: boolean;

  /**
   * See isInteractiveApp.
   * @returns {boolean}
   */
  interactiveApp: boolean;

  /**
   * Current platform is Linux.
   * See isLinuxArch.
   * @returns {boolean}
   */
  linuxArch: boolean;

  /**
   * Current platform is Mac.
   * See isMasArch.
   * @returns {boolean}
   */
  macArch: boolean;

  /**
   * Current platform is Mac Intel.
   * See isMacIntelArch.
   * @returns {boolean}
   */
  macIntelArch: boolean;

  /**
   * Current platform is Mac Power PC.
   * See isMacIntelArch.
   * @returns {boolean}
   */
  macPpcArch: boolean;

  /**
   * See isMainApp.
   * @returns {boolean}
   */
  mainApp: boolean;

  /**
   * See isPaintMode.
   * @returns {boolean}
   */
  paintMode: boolean;

  /**
   * Common resources folder.
   * See getResourcesPath.
   * @returns {string}
   */
  resourcesPath: string;

  /**
   * See isScanApp.
   * @returns {boolean}
   */
  scanApp: boolean;

  /**
   * See isStage.
   * @returns {boolean}
   */
  state: boolean;

  /**
   * See isStoryboard.
   * @returns {boolean}
   */
  storyboard: boolean;

  /**
   * @returns {string}
   */
  userName: string;

  /**
   * Current platform is Windows.
   * See isWindorsArch.
   * @returns {boolean}
   */
  windowsArch: boolean;

  /**
   * See isXsheetMode.
   * @returns {boolean}
   */
  xsheetMode: boolean;
}

/**
 * The CaptionManager JavaScript class. Access the caption properties of a panel.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classCaptionManager.html}
 * @example
 *  var cm = new CaptionManager();
 *  var sb = new StoryboardManager();
 *
 *  // Retrieve the first panel in the project.
 *  var panelId = sb.panelInProject(0);
 *
 *  var str = "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0//EN\" \"http://www.w3.org/TR/REC-html40/strict.dtd\">\
 *  <html>\
 *    <head>\
 *      <meta name=\"qrichtext\" content=\"1\" />\
 *      <style type=\"text/css\">p, li { white-space: pre-wrap; }</style>\
 *    </head>\
 *    <body style=\" font-family:'Sans Serif'; font-size:9pt; font-weight:400; font-style:normal;\">\
 *     <p style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\">New Text</p>\
 *    </body>\
 *  </html>";
 *
 *  // Add a caption named Private Notes, and assign the string to the caption in the first panel
 *  if (cm.addPanelCaption("Private Notes"))
 *      cm.setPanelCaptionText("Private Notes", panelId, str);
 */
declare class CaptionManager extends QObject {
  /**
   * Add a panel caption.
   * @param {string} name - The title of the caption
   * @returns {boolean}
   */
  public addPanelCaption(name: string): boolean;

  /**
   * Add a panel sketch.
   * @param {string} name - The title of the caption
   * @param {string} panelId - The uniqueId of panel
   * @returns {boolean}
   */
  public addPanelSketch(name: string, panelId: string): boolean;

  /**
   * Add a project caption.
   * @param {string} name - The title of Caption
   * @returns {boolean}
   */
  public addProjectCaption(name: string): boolean;

  /**
   * Delete a panel caption.
   * @param {string} name - The title of the caption
   * @returns {boolean}
   */
  public deletePanelCaption(name: string): boolean;

  /**
   * Delete a panel sketch.
   * @param {string} name - The title of the caption
   * @param {string} panelId - The uniqueId of panel
   * @returns {boolean}
   */
  public deletePanelSketch(name: string, panelId: string): boolean;

  /**
   * Delete a project caption.
   * @param {string} name - The title of the caption
   * @returns {boolean}
   */
  public deleteProjectCaption(name: string): boolean;

  /**
   * Return the name of the panel caption at the given index.
   * @param {int} index - The index of the ith caption in the scene
   * @returns {string}
   */
  public nameOfPanelCaption(index: int): string;

  /**
   * Return the name of the panel caption at the given index.
   * @param {int} index - The position of the caption
   * @returns {string}
   */
  public nameOfProjectCaption(index: int): string;

  /**
   * Return the number of panel captions.
   * @returns {int}
   */
  public numberOfPanelCaptions(): int;

  /**
   * Return the number of project captions.
   * @returns {int}
   */
  public numberOfProjectCaptions(): int;

  /**
   * Rename a panel caption.
   * @param {string} name - The existing title of the caption
   * @param {string} newName - The new title of the caption
   * @returns {boolean}
   */
  public renamePanelCaption(name: string, newName: string): boolean;

  /**
   * Rename a panel sketch.
   * @param {string} name - The title of the caption
   * @param {string} panelId - The uniqueId of panel
   * @param {string} newName - The new title of the caption
   * @returns {boolean}
   */
  public renamePanelSketch(
    name: string,
    panelId: string,
    newName: string
  ): boolean;

  /**
   * Rename a project caption.
   * @param {string} name - The title of the caption
   * @param {string} newName - The new title of the caption
   * @returns {boolean}
   */
  public renameProjectCaption(name: string, newName: string): boolean;

  /**
   * Set text on a panel caption.
   * @param {string} name - The title of the caption
   * @param {string} panelId - The uniqueId of the panel
   * @param {string} text - The new text formated in HTML
   * @returns {boolean}
   */
  public setPanelCaptionText(
    name: string,
    panelId: string,
    text: string
  ): boolean;

  /**
   * Set new text in a project caption.
   * @param {string} name - The title of the caption
   * @param {string} text - A new text for the caption
   * @returns {boolean}
   */
  public setProjectCaptionText(name: string, text: string): boolean;

  /**
   * Return the text of the panel caption.
   * @param {string} name - The title of the caption
   * @param {string} panelId - The uniqueId of the panel
   * @returns {string}
   */
  public textOfPanelCaption(name: string, panelId: string): string;

  /**
   * Return the text of the project caption.
   * @param {string} name - The title of Caption
   * @returns {string}
   */
  public textOfProjectCaption(name: string): string;
}

/**
 * The ColorRGBA class defines a four-dimensional container for colors. ColorRGBA objects can be
 * instantiated in the scripting environment.
 * You can use it in both Script Editor and scriptModule.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classColorRGBA.html}
 */
declare class ColorRGBA extends QObject {
  /**
   * Create a new default ColorRGBA (ie. opaque white).
   * @returns {void}
   */
  constructor();

  /**
   * Create a new ColorRGBA.
   * @param {double} r Red value
   * @param {double} g Green value
   * @param {double} b Blue value
   * @param {double} a Alpha value
   * @returns {void}
   */
  constructor(r: double, g: double, b: double, a: double);

  /**
   * alpha value [ 0, 255 ]
   * @returns {int}
   */
  a: int;

  /**
   * blue value [ 0, 255 ]
   * @returns {int}
   */
  b: int;

  /**
   * green value [ 0, 255 ]
   * @returns {int}
   */
  g: int;

  /**
   * red value [ 0, 255 ]
   * @returns {int}
   */
  r: int;
}

/**
 * Enum class for simplified DateEdit class - specifies display order of day, month, year.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classDateEditEnum.html}
 */
declare class DateEditEnum extends QObject {}

/**
 * Interface to operating system Dir operations, ie, mkdir, rmdir, rename, etc.
 * You can use it in Script Editor only.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classDir.html}
 * @example
 * var dir = new Dir;
 * dir.path = this._exportDir;
 * dir.mkdirs();
 */
declare class Dir extends QObject {
  /**
   * @param {string} path
   * @returns {void}
   */
  constructor(path: string);

  /**
   * Get absolute file path form filename give in parameter.
   * @param {string} [file=String::null]
   * @returns {string}
   */
  public absFilePath(file?: string): string;

  /**
   * @returns {string}
   */
  public absPath(): string;

  /**
   * @returns {string}
   */
  public canonicalPath(): string;

  /**
   * change directory to the given direcotry name
   * @param {string} dirName
   * @returns {void}
   */
  public cd(dirName: string): void;

  /**
   * Go up in directory hierarchy.
   * @returns {void}
   */
  public cdUp(): void;

  /**
   * Returns a list of the names of all the files and directories in the directory, ordered according to
   * the name and attribute filters.
   * @param {string} filter
   * @param {int} [filterSpec=-1]
   * @param {int} [sortSpec=-1]
   * @returns {StringList}
   */
  public entryList(
    filter: string,
    filterSpec?: int,
    sortSpec?: int
  ): StringList;

  /**
   * @returns {boolean}
   */
  public exists(): boolean;

  /**
   * Check if the file/folder exist.
   * @param {string} fileName
   * @returns {boolean}
   */
  public fileExists(fileName: string): boolean;

  /**
   * Get file path form current directory from filename give in parameter.
   * @param {string} [file=String::null]
   * @returns {string}
   */
  public filePath(file?: string): string;

  /**
   * @returns {boolean}
   */
  public isReadable(): boolean;

  /**
   * Create a directory with given name.
   * @param {string} [dirName=String::null]
   * @returns {void}
   */
  public mkdir(dirName?: string): void;

  /**
   * Create directory recursively if a path of directory not created is given.
   * @param {string} [dirName=String::null]
   * @returns {void}
   * Note: Does not appear to work on Windows paths.
   */
  public mkdirs(dirName?: string): void;

  /**
   * @returns {string}
   */
  public name(): string;

  /**
   * @returns {string}
   */
  public path(): string;

  /**
   * Remove a file with the given name.
   * @param {string} fileName
   * @returns {void}
   */
  public remove(fileName: string): void;

  /**
   * Rename a file/folder with the name given to the new name.
   * @param {string} oldName
   * @param {string} newName
   * @returns {void}
   */
  public rename(oldName: string, newName: string): void;

  /**
   * Remove a directory with given name.
   * @param {string} [dirName=String::null]
   * @returns {void}
   */
  public rmdir(dirName?: string): void;

  /**
   * Remove directory recursively if a path of directory is given.
   * @param {string} [dirName=String::null]
   * @returns {void}
   */
  public rmdirs(dirName?: string): void;

  /**
   * Sets the application's current working directory to path.
   * @returns {void}
   */
  public setCurrent(): void;

  /**
   * @param {string} newPath
   * @returns {void}
   */
  public setPath(newPath: string): void;

  /**
   * Absolute path of the directory.
   * @returns {string}
   */
  // /* Invalid - Duplicate property name */ absPath: string;

  /**
   * Canonical path of the directory.
   * @returns {string}
   */
  // /* Invalid - Duplicate property name */ canonicalPath: string;

  /**
   * Say if the directory exist.
   * @returns {boolean}
   */
  // /* Invalid - Duplicate property name */ exists: boolean;

  /**
   * Name of the directory.
   * @returns {string}
   */
  // /* Invalid - Duplicate property name */ name: string;

  /**
   * Path of the directory.
   * @returns {string}
   */
  // /* Invalid - Duplicate property name */ path: string;

  /**
   * Say if the directory is readable.
   * @returns {boolean}
   */
  readable: boolean;
}

/**
 * Enum for directory operations.
 * You can use it in Script Editor only.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classDirSpec.html}
 */
declare class DirSpec extends QObject {
  /**
   * @returns {void}
   */
  constructor();

  /**
   * @param {QObject} parent
   * @returns {void}
   */
  constructor(parent: QObject);

  /**
   * @param {DirSpec} rhs
   * @returns {void}
   */
  constructor(rhs: DirSpec);
}

/**
 * DrawingTool params class - used as parameters in drawingTools calls.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classDrawingToolParams.html}
 */
declare class DrawingToolParams extends QObject {
  /**
   * @returns {boolean}
   */
  public applyAllDrawings(): boolean;

  /**
   * @param {boolean} b
   * @returns {void}
   */
  public setApplyAllDrawings(b: boolean): void;

  /**
   * @returns {boolean}
   */
  // /* Invalid - Duplicate property name */ applyAllDrawings: boolean;
}

/**
 * The ExportManager JavaScript class. Export a Storyboard project to an image list or a QuickTime
 * movie.
 * The following examples are provided:
 * Exports the entire storyboard to pdf format, using the "Overview 4x3" pdf profile
 * Exports the scenes 1 through 3 in sequence 1 to the TGA bitmap format, with a resolution of 150 wide
 * by 100 tall, with a 50% zoom factor.
 * Exports scenes 1 through 4 to QuickTime, with a resolution of 400 wide by 300 tall. One movie will
 * be produced for each scene.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classExportManager.html}
 * @example
 * var exp = new ExportManager;
 * exp.setPDFProfile("Overview 4x3");
 * exp.exportToPDF("/home/user/exportTest/untitled.pdf");
 */
declare class ExportManager extends QObject {
  /**
   * Export storyboard panels, taking into consideration the scene camera (layout )
   * Supported bitmap formats are jpg, psd or tga.
   * @param {string} exportDir target directory for export
   * @param {string} filePattern name used for export file
   * @param {string} movieFormat allowable format strings are "jpg", "psd" and "tga"
   * @param {int} resX width of exported image
   * @param {int} resY height of exported image
   * @returns {boolean}
   */
  public exportLayout(
    exportDir: string,
    filePattern: string,
    movieFormat: string,
    resX: int,
    resY: int
  ): boolean;

  /**
   * Export storyboard to Avid Media Composer AAF format.
   * Supported bitmap formats are jpg, psd or tga.
   * @param {string} exportFilePath target aaf file path for export
   * @param {string} filePattern name used for export file (images)
   * @param {string} imageFormat allowable format strings are "jpg", "psd" and "tga"
   * @returns {boolean}
   */
  public exportToAAF(
    exportFilePath: string,
    filePattern: string,
    imageFormat: string
  ): boolean;

  /**
   * Export storyboard to bitmap file.
   * Supported bitmap formats are jpg, psd or tga.
   * @param {string} exportDir target directory for export
   * @param {string} filePattern name used for export file
   * @param {string} bitmapFormat allowable format strings are "jpg", "psd" and "tga"
   * @param {int} resX width of exported image
   * @param {int} resY height of exported image
   * @returns {boolean}
   */
  public exportToBitmap(
    exportDir: string,
    filePattern: string,
    bitmapFormat: string,
    resX: int,
    resY: int
  ): boolean;

  /**
   * Export storyboard to Final Cut Pro XML format.
   * Supported bitmap formats are jpg, psd or tga.
   * @param {string} exportFilePath target xml file path for export
   * @param {string} filePattern name used for export file (images)
   * @param {string} imageFormat allowable format strings are "jpg", "psd" and "tga"
   * @returns {boolean}
   */
  public exportToFCPXML(
    exportFilePath: string,
    filePattern: string,
    imageFormat: string
  ): boolean;

  /**
   * Export storyboard to movie file.
   * Supported movie formats are jpg, mov, swf or tga.
   * @param {string} exportDir target directory for export
   * @param {string} filePattern name used for export file
   * @param {string} movieFormat allowable format strings are "jpg", "mov" and "tga"
   * @param {int} resX width of exported image
   * @param {int} resY height of exported image
   * @returns {boolean}
   */
  public exportToMovie(
    exportDir: string,
    filePattern: string,
    movieFormat: string,
    resX: int,
    resY: int
  ): boolean;

  /**
   * Export storyboard to pdf file.
   * @param {string} fileName name used for export file
   * @returns {boolean}
   */
  public exportToPDF(fileName: string): boolean;

  /**
   * Returns the names of known pdf profiles.
   * @returns {StringList}
   * @example
   * var listOfProfiles = exp.getPDFProfiles();
   * for (var i = 0; i < listOfProfiles.length; i++)
   *     System.println(listOfProfiles[i]);
   */
  public getPDFProfiles(): StringList;

  /**
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setApplyLayerMotionCamera(flag: boolean): void;

  /**
   * Set Fit Camera Path.
   * This ensures that the camera paths and control points appear inside the image. By default, this is
   * true.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setBitmapFitCameraPath(flag: boolean): void;

  /**
   * Set Rectify Static Camera.
   * If enabled, if there is a rotation in the camera, the camera frame will appear as straight, and the
   * image will be rotated instead. If disabled the camera frame appears as rotated and the image is
   * straight. By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setBitmapRectifyStatic(flag: boolean): void;

  /**
   * Allow Camera Scaling.
   * This ensures that when a very wide zoom camera movement is included in the panel, the exported image
   * will be bigger in relation to the camera scaling used. By default, this is true.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setCameraScaling(flag: boolean): void;

  /**
   * Export caption as comments in FCP XML.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setExportCaptions(flag: boolean): void;

  /**
   * Export markers at scene beginning.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setExportMarkers(flag: boolean): void;

  /**
   * Export one image for each layer.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setExportOneImagePerLayer(flag: boolean): void;

  /**
   * Export scenes reference track.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setExportScenesReferenceTrack(flag: boolean): void;

  /**
   * Maintain Size Through Scene. This ensures that all images exported are the same size.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setMaintainSize(flag: boolean): void;

  /**
   * Set the audio/video export settings ( for QuickTime export )
   * This is provided as a work-around to specify explicit QuickTime settings. The easiest way to access
   * a given QuickTime settings string to to save the given setting in the exportMovie dialog, and
   * consult the EXPORT_DLG_MOVIE_VIDEO_CONFIG preference in your user preferences.
   * @param {string} config a string specifying the video settings
   * @returns {void}
   */
  public setMovieConfig(config: string): void;

  /**
   * Notify Flix server when exporting to FCP XML.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setNotifyFlix(flag: boolean): void;

  /**
   * Specify the granularity of movie clip generation.
   * Allowable values are "project", "sequence", "scene", "shot".
   * By default, this is "project".
   * @param {string} perWhat a string specifying project, sequence, scene or shot
   * @returns {boolean}
   */
  public setOneMovieClipPer(perWhat: string): boolean;

  /**
   * Set the pdf profile to be used during the pdf export.
   * By default, this is the profile that is selected in the Export PDF Dialog.
   * @param {string} profile profile used during pdf export
   * @returns {boolean}
   */
  public setPDFProfile(profile: string): boolean;

  /**
   * Sets a selection of panels to be exported.
   * See the SelectStoryboard interface to retrieve a panel Id selection. (The selection interface is not
   * applicable in batch mode.) See the ProjectStoryboard interface to create a list of panelIds by
   * querying the project.
   * If no range is specified, then the entire project is exported.
   * @param {StringList} panels list of panel Ids to be exported
   * @returns {void}
   */
  public setSelectedPanels(panels: StringList): void;

  /**
   * Sets a selection of scenes to be exported.
   * See the SelectStoryboard interface to retrieve a scene Id selection. (The selection interface is not
   * applicable in batch mode.) See the ProjectStoryboard interface to create a list of sceneIds by
   * querying the project.
   * If no range is specified, then the entire project is exported.
   * @param {StringList} scenes list of scene Ids to be exported
   * @returns {void}
   */
  public setSelectedScenes(scenes: StringList): void;

  /**
   * Render 4:3 safety overlay.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setShow43SafetyOverlay(flag: boolean): void;

  /**
   * Render project action safe area overlay.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setShowActionSafeAreaOverlay(flag: boolean): void;

  /**
   * Exports the camera frames black border.
   * By default, this is true.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setShowCamera(flag: boolean): void;

  /**
   * Prints each camera keyframe on the exported images.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setShowCameraKeyFrames(flag: boolean): void;

  /**
   * Display the camera labels.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setShowCameraLabel(flag: boolean): void;

  /**
   * Show the reference frame.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setShowReference(flag: boolean): void;

  /**
   * Render scene/panel name overlay.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setShowScenePanelNamesOverlay(flag: boolean): void;

  /**
   * Render project title safe area overlay.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setShowTitleSafeAreaOverlay(flag: boolean): void;

  /**
   * Sets a transparent background. This is only useful when exporting to Photoshop ( psd files ).
   * By default, this is true.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setTransparentBG(flag: boolean): void;

  /**
   * Export the current panel.
   * Not applicable in batch mode.
   * @param {boolean} flag true or false
   * @returns {boolean}
   */
  public setUseCurrentPanel(flag: boolean): boolean;

  /**
   * Export the current scene.
   * Not applicable in batch mode.
   * @param {boolean} flag true or false
   * @returns {boolean}
   */
  public setUseCurrentScene(flag: boolean): boolean;

  /**
   * Export the selected panel(s)
   * Not applicable in batch mode.
   * @param {boolean} flag true or false
   * @returns {boolean}
   */
  public setUseSelectedPanels(flag: boolean): boolean;

  /**
   * Export the tracked panel(s)
   * Not applicable in batch mode.
   * @param {boolean} flag true or false
   * @returns {boolean}
   */
  public setUseTrackedPanels(flag: boolean): boolean;

  /**
   * Sets the magnification of the image. By default there is no magnification.
   * @param {double} zoom zoom factor
   * @returns {void}
   */
  public setZoomFactor(zoom: double): void;

  /**
   * Signal emitted if export was successful.
   * @returns {void}
   */
  public exportReady: QSignal<() => void>;
}

/**
 * Interface to operating system File operations, ie open, close, read, write...
 * You can use it in Script Editor only.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classFile.html}
 * @example
 * var file = new File(filePath);
 * if (file.exists) {
 *     var message = "The output file \"" + file.name + "\" exists. Do you wish to overwrite it?"
 *     var ans = MessageBox.warning(message, MessageBox.Yes, MessageBox.No);
 *     var check = MessageBox.Yes;
 *
 *     if (ans != MessageBox.Yes)
 *         return false;
 * }
 * return true;
 */
declare class File extends QObject {
  /**
   * @param {string} file
   * @returns {void}
   */
  constructor(file: string);

  /**
   * @returns {string}
   */
  public absFileName(): string;

  /**
   * @returns {string}
   */
  public baseName(): string;

  /**
   * Close the file.
   * @returns {void}
   */
  public close(): void;

  /**
   * @returns {QDateTime}
   */
  public created(): QDateTime;

  /**
   * @returns {boolean}
   */
  public eof(): boolean;

  /**
   * @returns {boolean}
   */
  public exists(): boolean;

  /**
   * @returns {string}
   */
  public extension(): string;

  /**
   * @returns {string}
   */
  public fileName(): string;

  /**
   * @returns {boolean}
   */
  public isExecutable(): boolean;

  /**
   * @returns {boolean}
   */
  public isHidden(): boolean;

  /**
   * @returns {boolean}
   */
  public isReadable(): boolean;

  /**
   * @returns {boolean}
   */
  public isWritable(): boolean;

  /**
   * @returns {QDateTime}
   */
  public lastModified(): QDateTime;

  /**
   * @returns {QDateTime}
   */
  public lastRead(): QDateTime;

  /**
   * Open the file with specific access mode.
   * @param {int} accessMode
   * @returns {void}
   */
  public open(accessMode: int): void;

  /**
   * @returns {string}
   */
  public path(): string;

  /**
   * Read all the file.
   * @returns {string}
   */
  public read(): string;

  /**
   * Read the next char of the file.
   * @returns {int}
   */
  public readByte(): int;

  /**
   * Read one line of the file.
   * @returns {string}
   */
  public readLine(): string;

  /**
   * Read each line of the file.
   * @returns {StringList}
   */
  public readLines(): StringList;

  /**
   * Remove the file.
   * @returns {void}
   */
  public remove(): void;

  /**
   * @returns {int}
   */
  public size(): int;

  /**
   * @returns {string}
   */
  public symLink(): string;

  /**
   * Write a string in the file.
   * @param {string} data
   * @param {int} [length=-1]
   * @returns {void}
   */
  public write(data: string, length?: int): void;

  /**
   * Write a char in the file.
   * @param {int} byte
   * @returns {void}
   */
  public writeByte(byte: int): void;

  /**
   * Write a string in the file and go next line.
   * @param {string} data
   * @returns {void}
   */
  public writeLine(data: string): void;

  /**
   * @returns {string}
   */
  // /* Invalid - Duplicate property name */ baseName: string;

  /**
   * Date when the file was created.
   * @returns {QDateTime}
   */
  // /* Invalid - Duplicate property name */ created: QDateTime;

  /**
   * file reach end
   * @returns {boolean}
   */
  // /* Invalid - Duplicate property name */ eof: boolean;

  /**
   * file executable flag
   * @returns {boolean}
   */
  executable: boolean;

  /**
   * file exist
   * @returns {boolean}
   */
  // /* Invalid - Duplicate property name */ exists: boolean;

  /**
   * file extension
   * @returns {string}
   */
  // /* Invalid - Duplicate property name */ extension: string;

  /**
   * file name
   * @returns {string}
   */
  fullName: string;

  /**
   * file hidden flag
   * @returns {boolean}
   */
  hidden: boolean;

  /**
   * Date when the file was modified.
   * @returns {QDateTime}
   */
  // /* Invalid - Duplicate property name */ lastModified: QDateTime;

  /**
   * date when the file was readed
   * @returns {QDateTime}
   */
  // /* Invalid - Duplicate property name */ lastRead: QDateTime;

  /**
   * file name
   * @returns {string}
   */
  name: string;

  /**
   * file path
   * @returns {string}
   */
  // /* Invalid - Duplicate property name */ path: string;

  /**
   * file readable flag
   * @returns {boolean}
   */
  readable: boolean;

  /**
   * Size of he file.
   * @returns {int}
   */
  // /* Invalid - Duplicate property name */ size: int;

  /**
   * @returns {string}
   */
  // /* Invalid - Duplicate property name */ symLink: string;

  /**
   * file writable flag
   * @returns {boolean}
   */
  writable: boolean;
}

/**
 * Enum to define file operation.
 * You can use it in Script Editor only.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classFileAccess.html}
 * @example
 * var file = new File(filePath);
 * f.open(FileAccess.ReadOnly);
 */
declare class FileAccess extends QObject {
  /**
   * @returns {void}
   */
  constructor();

  /**
   * @param {QObject} parent
   * @returns {void}
   */
  constructor(parent: QObject);

  /**
   * @param {FileAccess} rhs
   * @returns {void}
   */
  constructor(rhs: FileAccess);
}

/**
 * With the Function Manager, you can manipulate the camera functions and the layer functions. Note
 * that for all methods you must give the unique id. For the camera, this is the sceneId. For a layer
 * functions, this is the panelId.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classFunctionManager.html}
 * @example
 * function cameraManip() {
 *     var cm = new MotionManager();
 *     var sb = new StoryboardManager();
 *     var fm = new FunctionManager();
 *
 *     // Camera of first scene in project
 *     var sceneId = sb.sceneInProject(0);
 *
 *     System.println("3dPath is " + cm.linkedCameraFunction(sceneId, "position.attr3dpath"));
 *     System.println("scale x is " + cm.linkedCameraFunction(sceneId, "scale.x"));
 *     System.println("scale y is " + cm.linkedCameraFunction(sceneId, "scale.y"));
 *     System.println("scale z is " + cm.linkedCameraFunction(sceneId, "scale.z"));
 *     System.println("rotation is " + cm.linkedCameraFunction(sceneId, "rotation.anglez"));
 *     System.println("skew is " + cm.linkedCameraFunction(sceneId, "skew"));
 *
 *     var path3d = cm.linkedCameraFunction(sceneId, "position.attr3dpath");
 *     var nbPoints = fm.numberOfPointsPath3d(sceneId, path3d)
 *     System.println(" number of points on the path " + nbPoints);
 *
 *     // 3d path points
 *     for (var i = 0; i < nbPoints; ++i) {
 *         System.println(
 *             "locked At  " + fm.pointLockedAtFrame(sceneId, path3d, i) +
 *             ":  pointx : " + fm.pointXPath3d(sceneId, path3d, i) +
 *             " pointy  : " + fm.pointYPath3d(sceneId, path3d, i) +
 *             " pointz : " + fm.pointZPath3d(sceneId, path3d, i) +
 *             " tension : " + fm.pointTensionPath3d(sceneId, path3d, i) +
 *             " continuity : " + fm.pointContinuityPath3d(sceneId, path3d, i) +
 *             " bias : " + fm.pointBiasPath3d(sceneId, path3d, i)
 *         );
 *     }
 *
 *     // Change the Y value of the path
 *     fm.setPointPath3d(sceneId, path3d, 1, 3.859611992560042, 4.0, -1.2445449829101562, 0.0, 0.0, 0.0);
 *
 *     // Add a key frame at the 2 frame in the shot
 *     fm.addKeyFramePath3d(sceneId, path3d, 3, 3.859611992560042, 4.0, -1.2445449829101562, 0.0, 0.0, 0.0);
 *
 *     // Skew function on camera, which is a bezier
 *     var foc = cm.linkedCameraFunction(sceneId, "skew");
 *
 *     System.println("skew is " + cm.linkedCameraFunction(sceneId, "skew"));
 *     nbPoints = fm.numberOfPoints(sceneId, foc)
 *
 *     for (var i = 0; i < nbPoints; ++i) {
 *         System.println(
 *             "locked At  " + fm.pointLockedAtFrame(sceneId, foc, i) +
 *             ":  pointx : " + fm.pointX(sceneId, foc, i) +
 *             " pointy  : " + fm.pointY(sceneId, foc, i) +
 *             " handle left x : " + fm.pointHandleLeftX(sceneId, foc, i) +
 *             " handle left y : " + fm.pointHandleLeftY(sceneId, foc, i) +
 *             " handle right x : " + fm.pointHandleRightX(sceneId, foc, i) +
 *             " handle right y : " + fm.pointHandleRightY(sceneId, foc, i) +
 *             "  seg : " + fm.pointConstSeg(sceneId, foc, i) +
 *             " continuity : " + fm.pointContinuity(sceneId, foc, i)
 *         );
 *     }
 *
 *     // Scale on camera is a Velobase TV
 *     var foc = cm.linkedCameraFunction(sceneId, "scale.x");
 *
 *     // System.println( "scale is " +  cm.linkedCameraFunction( sceneId, "scale.x" ) );
 *     nbPoints = fm.numberOfPoints(sceneId, foc)
 *     System.println(" nb points on the scale   " + nbPoints);
 *
 *     for (var i = 0; i < nbPoints; ++i) {
 *         System.println(
 *             "locked At  " + fm.pointLockedAtFrame(sceneId, foc, i) +
 *             ":  pointx : " + fm.pointX(sceneId, foc, i) +
 *             " pointy  : " + fm.pointY(sceneId, foc, i)
 *         );
 *     }
 * }
 *
 *
 * function layerManip() {
 *     var cm = new MotionManager();
 *     var sb = new StoryboardManager();
 *     var fm = new FunctionManager();
 *
 *     // 11th panel in project
 *     var panelId = sb.panelInProject(11);
 *
 *     System.println("3dPath is " + cm.linkedLayerFunction(panelId, 0, "offset.attr3dpath"));
 *     System.println("scale x is " + cm.linkedLayerFunction(panelId, 0, "scale.x"));
 *     System.println("scale y is " + cm.linkedLayerFunction(panelId, 0, "scale.y"));
 *     System.println("scale z is " + cm.linkedLayerFunction(panelId, 0, "scale.z"));
 *     System.println("rotation is " + cm.linkedLayerFunction(panelId, 0, "rotation.anglez"));
 *     System.println("skew is " + cm.linkedLayerFunction(panelId, 0, "skew"));
 *
 *     // First layer of the panel, the offset tv
 *     var path3d = cm.linkedLayerFunction(panelId, 0, "offset.attr3dpath");
 *     var nbPoints = fm.numberOfPointsPath3d(panelId, path3d)
 *     System.println(" number of points on the path " + nbPoints);
 *
 *     // 3d path
 *     for (var i = 0; i < nbPoints; ++i) {
 *         System.println(
 *             "locked At  " + fm.pointLockedAtFrame(panelId, path3d, i) +
 *             ":  pointx : " + fm.pointXPath3d(panelId, path3d, i) +
 *             " pointy  : " + fm.pointYPath3d(panelId, path3d, i) +
 *             " pointz : " + fm.pointZPath3d(panelId, path3d, i) +
 *             " tension : " + fm.pointTensionPath3d(panelId, path3d, i) +
 *             " continuity : " + fm.pointContinuityPath3d(panelId, path3d, i) +
 *             " bias : " + fm.pointBiasPath3d(panelId, path3d, i)
 *         );
 *     }
 *
 *     // Change the Y value of the path on the second keyframe
 *     fm.setPointPath3d(panelId, path3d, 1, 2.96, 2.0, 0.0, 0.0, 0.0, 0.0);
 *
 *     // Add a key frame at the 10 frame in the panel, knowing that the panel is always 20 frames long
 *     // fm.addKeyFramePath3d( panelId, path3d, 9, 2.96, 6.0, 0.0, 0.0,0.0,0.0 );
 *     fm.removePointPath3d(panelId, path3d, 9);
 *
 * }
 */
declare class FunctionManager extends QObject {
  /**
   * adds a keyframe after a point on a 3D Path and sets the X, Y and Z values, as well as the tension,
   * continuity and bias
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @param {double} x x value for the point
   * @param {double} y Y value for the point
   * @param {double} z z value for the point
   * @param {double} tension tension value of the keyframe
   * @param {double} continuity continuity value of the keyframe
   * @param {double} bias bias value of the keyframe
   * @returns {boolean}
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
   * adds a keyframe to a 3D Path and sets the X, Y and Z value, as well as the tension, continuity and
   * bias.
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} frame Frame number for the point
   * @param {double} x x value for the point
   * @param {double} y Y value for the point
   * @param {double} z z value for the point
   * @param {double} tension tension value of the keyframe
   * @param {double} continuity continuity value of the keyframe
   * @param {double} bias bias value of the keyframe
   * @returns {boolean}
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
   * returns the angle of the ease-in handle
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public angleEaseIn(shotId: string, columnName: string, point: int): double;

  /**
   * returns the angle of the ease-out handle
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public angleEaseOut(shotId: string, columnName: string, point: int): double;

  /**
   * clears a keyframe on a column
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {double} AtFrame frame
   * @returns {boolean}
   */
  public clearKeyFrame(
    shotId: string,
    columnName: string,
    AtFrame: double
  ): boolean;

  /**
   * returns the type of the function ( Bezier, Ease, VeloBased or 3dPath )
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @returns {string}
   */
  public functionType(shotId: string, columnName: string): string;

  /**
   * gets a value from a column at the given frame
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} subColumn The number value of the sub-column. This only exists in the case of 3D Path columns, which include a group of sub-columns for the X, Y, Z and velocity values on the 3D Path. Each sub-column has a number: X=1 Y=2 Z=3 Velocity = 4
   * @param {double} AtFrame frame
   * @returns {string}
   */
  public getEntry(
    shotId: string,
    columnName: string,
    subColumn: int,
    AtFrame: double
  ): string;

  /**
   * returns the Start value from the Hold Value Editor dialog box, for Bezier and Velo-based Function
   * Editors.
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @returns {int}
   */
  public holdStartFrame(shotId: string, columnName: string): int;

  /**
   * returns the Step value from the Hold Value Editor dialog box, for Bezier, Ease and Velo-based
   * Function Editors
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @returns {int}
   */
  public holdStep(shotId: string, columnName: string): int;

  /**
   * returns the Stop value from the Hold Value Editor dialog box, for Bezier, Ease and Velo-based
   * Function Editors
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @returns {int}
   */
  public holdStopFrame(shotId: string, columnName: string): int;

  /**
   * returns the number of keyframes and control points on a curve
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @returns {int}
   */
  public numberOfPoints(shotId: string, columnName: string): int;

  /**
   * returns the number of keyframes and control points on the 3D Path
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @returns {int}
   */
  public numberOfPointsPath3d(shotId: string, columnName: string): int;

  /**
   * returns the bias value for the specified point on the 3D Path
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointBiasPath3d(
    shotId: string,
    columnName: string,
    point: int
  ): double;

  /**
   * returns a 1 (one) to indicate that the point is on a ant segment, or a 0 (zero) to indicate that the
   * point is not on a ant segment
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {boolean}
   */
  public pointConstSeg(shotId: string, columnName: string, point: int): boolean;

  /**
   * returns the continuity of the curve that follows the point. One of the following values will be
   * returned, in upper-case: SMOOTH, CORNER or STRAIGHT
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {string}
   */
  public pointContinuity(
    shotId: string,
    columnName: string,
    point: int
  ): string;

  /**
   * returns the continuity value (STRAIGHT, SMOOTH or CORNER) for the specified point on the 3D Path.
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointContinuityPath3d(
    shotId: string,
    columnName: string,
    point: int
  ): double;

  /**
   * returns the number of frames in the ease-in
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointEaseIn(shotId: string, columnName: string, point: int): double;

  /**
   * returns the number of frames in the ease-out
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointEaseOut(shotId: string, columnName: string, point: int): double;

  /**
   * returns the X value of the left handle of a point on a curve
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointHandleLeftX(
    shotId: string,
    columnName: string,
    point: int
  ): double;

  /**
   * returns the Y value of the left handle of a point on a curve.
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointHandleLeftY(
    shotId: string,
    columnName: string,
    point: int
  ): double;

  /**
   * returns the X value of the right handle of a point on a curve.
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointHandleRightX(
    shotId: string,
    columnName: string,
    point: int
  ): double;

  /**
   * returns the Y value of the right handle of a point on a curve
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointHandleRightY(
    shotId: string,
    columnName: string,
    point: int
  ): double;

  /**
   * returns the frame at which it's locked, or returns 0 if the point is not locked.
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointLockedAtFrame(
    shotId: string,
    columnName: string,
    point: int
  ): double;

  /**
   * returns the tension value for the specified point on the 3D Path
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointTensionPath3d(
    shotId: string,
    columnName: string,
    point: int
  ): double;

  /**
   * returns the X value (frame number) of a point on a function curve
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointX(shotId: string, columnName: string, point: int): double;

  /**
   * returns the value of the specified point on the X path
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointXPath3d(shotId: string, columnName: string, point: int): double;

  /**
   * returns the Y value of a point on a function curve
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointY(shotId: string, columnName: string, point: int): double;

  /**
   * returns the value of the specified point on the Y path
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointYPath3d(shotId: string, columnName: string, point: int): double;

  /**
   * returns the value of the specified point on the Z path
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointZPath3d(shotId: string, columnName: string, point: int): double;

  /**
   * removePointPath3d may be used to remove either a key frame, or a control point
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {boolean}
   */
  public removePointPath3d(
    shotId: string,
    columnName: string,
    point: int
  ): boolean;

  /**
   * sets the values of a point on a Bezier function curve
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} frame Frame number for the point
   * @param {double} y Y value for the poin
   * @param {double} handleLeftX X value for the left handle of the point
   * @param {double} handleLeftY Y value for the left handle
   * @param {double} handleRightX X value for the right handle
   * @param {double} handleRightY Y value for the right handle
   * @param {boolean} Seg Boolean expression (with a true or false value) to indicate whether the segment is ant or interpolated
   * @param {string} continuity String value for the continuity of the point. The string must be in all upper-case. The following are the acceptable values: STRAIGHT, SMOOTH and CORNER
   * @returns {boolean}
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
   * sets the values of a point on an Ease function curve
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} frame Frame number for the point
   * @param {double} y Y value for the point
   * @param {double} easeIn The number of frames in the ease-in
   * @param {double} angleEaseIn The angle of the ease-in handle
   * @param {double} easeOut The number of frames in the ease-out
   * @param {double} angleEaseOut The angle of the ease-out handle
   * @param {boolean} Seg Boolean expression (with a true or false value) to indicate whether the segment is ant or interpolated
   * @param {string} continuity String value for the continuity of the point. The string must be in all upper-case. The following are the acceptable values: STRAIGHT, SMOOTH and CORNER
   * @returns {boolean}
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
   * sets a value on a column at the given frame
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} subColumn The number value of the sub-column. This only exists in the case of 3D Path columns, which include a group of sub-columns for the X, Y, Z and velocity values on the 3D Path. Each sub-column has a number: X=1 Y=2 Z=3 Velocity = 4
   * @param {double} AtFrame frame
   * @param {string} value the new value
   * @returns {boolean}
   */
  public setEntry(
    shotId: string,
    columnName: string,
    subColumn: int,
    AtFrame: double,
    value: string
  ): boolean;

  /**
   * sets the Start value in the Hold Value Editor dialog box, for Bezier, Ease and Velo-based Function
   * Editors
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} start start frame of the hold
   * @returns {boolean}
   */
  public setHoldStartFrame(
    shotId: string,
    columnName: string,
    start: int
  ): boolean;

  /**
   * sets the Hold value in the Hold Value Editor dialog box, for Bezier, Ease and Velo-based Function
   * Editors.
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} step value of the steps in the hold.
   * @returns {boolean}
   */
  public setHoldStep(shotId: string, columnName: string, step: int): boolean;

  /**
   * sets the Stop value in the Hold Value Editor dialog box, for Bezier, Ease and Velo-based Function
   * Editors
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} stop stop frame of the hold
   * @returns {boolean}
   */
  public setHoldStopFrame(
    shotId: string,
    columnName: string,
    stop: int
  ): boolean;

  /**
   * sets a keyframe on a column
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {double} AtFrame frame
   * @returns {boolean}
   */
  public setKeyFrame(
    shotId: string,
    columnName: string,
    AtFrame: double
  ): boolean;

  /**
   * sets the ant segment flag of point i of path p to b.
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @param {boolean} ant bool flag
   * @returns {boolean}
   */
  public setPath3dPointConstantSegment(
    shotId: string,
    columnName: string,
    point: int,
    ant: boolean
  ): boolean;

  /**
   * sets the ant segment flag of point found at frame f of path p to b.
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {double} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @param {boolean} ant bool flag
   * @returns {boolean}
   */
  public setPath3dPointConstantSegmentForFrame(
    shotId: string,
    columnName: string,
    point: double,
    ant: boolean
  ): boolean;

  /**
   * setPointPath3d may be used to set values in either a key frame, or a control point, but cannot
   * change a key frame into a control point or a control point into a key frame. To change a key frame
   * into a control point or a control point into a key frame, you must remove the point and add a new
   * point.
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @param {double} x x value for the point
   * @param {double} y Y value for the point
   * @param {double} z z value for the point
   * @param {double} tension tension value of the keyframe
   * @param {double} continuity continuity value of the keyframe
   * @param {double} bias bias value of the keyframe
   * @returns {boolean}
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
   * sets the values of a point on an Velobased function curve
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} frame Frame number for the point
   * @param {double} y Y value for the point
   * @returns {boolean}
   */
  public setVeloBasePoint(
    shotId: string,
    columnName: string,
    frame: int,
    y: double
  ): boolean;
}

/**
 * The LayerManager JavaScript class. Access the layers of a given panel.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classLayerManager.html}
 * @example
 * var lm = new LayerManager();
 * var sb = new StoryboardManager();
 *
 * // get the first panel in the project.
 * var panelId = sb.panelInProject(0);
 *
 * // Add 2 blank vector layers and 1 blank bitmap layer. Set the last one to invisible
 * lm.addVectorLayer(panelId, 0, false, "V-A");
 * lm.addVectorLayer(panelId, 1, false, "V-B");
 * lm.addBitmapLayer(panelId, 2, false, "B-A");
 * lm.setLayerVisible(panelId, 2, false);
 *
 * // prepend a new layer by importing an image.
 * lm.importImageAsLayer(panelId, "/fullPath/Image.tga");
 */
declare class LayerManager extends QObject {
  /**
   * Add a bitmap layer.
   * @param {string} panelId - unique id of the panel
   * @param {int} targetLayerIdx - index of sibling layer
   * @param {boolean} before - whether new layer is before or after sibling layer
   * @param {string} suggestedName - suggested Name
   * @returns {boolean}
   */
  public addBitmapLayer(
    panelId: string,
    targetLayerIdx: int,
    before: boolean,
    suggestedName: string
  ): boolean;

  /**
   * Add a vector layer.
   * @param {string} panelId - unique id of the panel
   * @param {int} targetLayerIdx - index of sibling layer
   * @param {boolean} before - whether new layer is before or after sibling layer
   * @param {string} suggestedName - suggested Name
   * @returns {boolean}
   */
  public addVectorLayer(
    panelId: string,
    targetLayerIdx: int,
    before: boolean,
    suggestedName: string
  ): boolean;

  /**
   * Delete a given layer.
   * @param {string} panelId - uniqueId of the panel
   * @param {int} index - index of the layer
   * @returns {boolean}
   */
  public deleteLayer(panelId: string, index: int): boolean;

  /**
* Generate matte from a given layer to a new drawing layer or directly on the source layer.
* @param {string} panelId - The unique id of the panel
* @param {int} index - The index of the layer
* @param {QScriptValue} options - Options used to generate the matte. The option object has the following properties:
Property  Type  Description
onNewLayer  bool  When true, the matte is created on a new layer.
radius  double  The number of the frame.
copyStrokes  bool  (Optional) Set to true to copy source strokes on the new layer. Can only be used if onNewLayer is set to true as well.
replaceLayer  bool  (Optional) Set to true to replace a previously generated matte layer. Can only be used if onNewLayer is set to true as well.
color  int or String  (Optional) Colour used to create the matte. Can be an hex RGB value or a standard W3C colour keyword name in a string. If not specified, the current colour will be used.
* @returns {boolean}
*/
  public generateMatte(
    panelId: string,
    index: int,
    options: {
      /**
       * When true, the matte is created on a new layer.
       */
      onNewLayer: boolean;
      /**
       * The number of the frame.
       */
      radius: double;
      /**
       * (Optional) Set to true to copy source strokes on the new layer. Can only be used if onNewLayer is set to true as well.
       */
      copyStrokes: boolean;
      /**
       * (Optional) Set to true to replace a previously generated matte layer. Can only be used if onNewLayer is set to true as well.
       */
      replaceLayer: boolean;
      /**
       * (Optional) Colour used to create the matte. Can be an hex RGB value or a standard W3C colour keyword name in a string. If not specified, the current colour will be used.
       */
      color: int | string;
    }
  ): boolean;

  /**
   * Generate a new drawing layer making a matte from the given layer. The matte will be of the current
   * selected color.
   * @param {string} panelId - The unique id of the panel
   * @param {int} index - The index of the layer
   * @param {double} radius - The matte radius
   * @param {boolean} copyStrokes - Set to true to copy the strokes
   * @param {boolean} replaceLayer - Set to true to replace the existing layer by one with the same name, false to keep both
   * @returns {boolean}
   */
  public generateMatteLayer(
    panelId: string,
    index: int,
    radius: double,
    copyStrokes: boolean,
    replaceLayer: boolean
  ): boolean;

  /**
   * Generate a new drawing layer making a matte from the given layer. The matte will be of the given
   * color.
   * @param {string} panelId - The unique id of the panel
   * @param {int} index - The index of the layer
   * @param {double} radius - The matte radius
   * @param {boolean} copyStrokes - Set to true to copy the strokes
   * @param {boolean} replaceLayer - Set to true to replace the existing layer by one with the same name, false to keep both
   * @param {int} red - The red channel value (0..255) for the matte. A value higher than 255 will be clamped.
   * @param {int} green - The green channel value (0..255) for the matte. A value higher than 255 will be clamped.
   * @param {int} blue - The blue channel value (0..255) for the matte. A value higher than 255 will be clamped.
   * @returns {boolean}
   */
  public generateMatteLayer(
    panelId: string,
    index: int,
    radius: double,
    copyStrokes: boolean,
    replaceLayer: boolean,
    red: int,
    green: int,
    blue: int
  ): boolean;

  /**
   * Get the path to a layer's drawing.
   * @param {string} panelId - unique id of the panel
   * @param {int} index - index of the layer
   * @param {boolean} fullPath - boolean to determine if the returned path is the full path or the file name
   * @returns {string}
   */
  public getLayerDrawingName(
    panelId: string,
    index: int,
    fullPath: boolean
  ): string;

  /**
   * Return the element id of the layer. May be useful when using the element and Drawing global objects.
   * @param {string} panelId - unique id of the panel
   * @param {int} index - index of the layer
   * @returns {int}
   */
  public getLayerElementId(panelId: string, index: int): int;

  /**
   * Import image and creates a new layer at index 0, returns if successful.
   * @param {string} panelId - unique id of the panel
   * @param {string} fullPathAndFileName - absolute path to image file
   * @returns {boolean}
   */
  public importImageAsLayer(
    panelId: string,
    fullPathAndFileName: string
  ): boolean;

  /**
   * Return true if a layer is a 3D layer.
   * @param {string} panelId - unique id of the panel
   * @param {int} index - index of the layer
   * @returns {boolean}
   */
  public is3DLayer(panelId: string, index: int): boolean;

  /**
   * Return true if a layer is a bitmap.
   * @param {string} panelId - unique id of the panel
   * @param {int} index - index of the layer
   * @returns {boolean}
   */
  public isBitmapLayer(panelId: string, index: int): boolean;

  /**
   * Look at the given layer and return if it is empty or not. A layer is empty if it has no drawing.
   * @param {QScriptValue} layer - an object with the name [String] and panelId properties [String].
   * @returns {boolean}
   */
  public isEmpty(layer: QScriptValue): boolean;

  /**
   * Look at the the given Layer and return if it is shared.
   * @param {QScriptValue} layer a layer is defined by those properties: frame, panelId, name.
   * @returns {boolean}
   */
  public isShared(layer: QScriptValue): boolean;

  /**
   * Return true if a layer is a vector layer.
   * @param {string} panelId - unique id of the panel
   * @param {int} index - index of the layer
   * @returns {boolean}
   */
  public isVectorLayer(panelId: string, index: int): boolean;

  /**
   * Get a layer's alignment value.
   * @param {string} panelId - unique id of the panel
   * @param {int} index - index of the layer
   * @returns {string}
   */
  public layerAlignment(panelId: string, index: int): string;

  /**
   * Return the name of a layer.
   * @param {string} panelId - unique id of the panel
   * @param {int} index - index of the layer
   * @returns {string}
   */
  public layerName(panelId: string, index: int): string;

  /**
   * Get layers opacity value.
   * @param {string} panelId - unique id of the panel
   * @param {int} index - index of the layer
   * @returns {double}
   */
  public layerOpacity(panelId: string, index: int): double;

  /**
   * Get the visibility flag of the layers of a panel.
   * @param {string} panelId - unique id of the panel
   * @param {int} index - index of the layer
   * @returns {boolean}
   */
  public layerVisibility(panelId: string, index: int): boolean;

  /**
   * Merge the given Layers into a single panel.
   * @param {QScriptValue} layers - an array of objects with the name [String] and panelId properties [String].
   * @param {string} newLayerName - new name of the layer created from the merge.
   * @returns {QScriptValue}
   */
  public mergeLayers(layers: QScriptValue, newLayerName: string): QScriptValue;

  /**
   * Return the number of layers in a panel.
   * @param {string} panelId - unique id of the panel
   * @returns {int}
   */
  public numberOfLayers(panelId: string): int;

  /**
   * Rename a given layer.
   * @param {string} panelId - unique id of the panel
   * @param {int} index - index of the layer
   * @param {string} suggestedName - suggested name
   * @returns {boolean}
   */
  public renameLayer(
    panelId: string,
    index: int,
    suggestedName: string
  ): boolean;

  /**
   * Set a layer's alignment value.
   * @param {string} panelId - unique id of the panel
   * @param {int} index - index of the layer
   * @param {string} alignment - value between 0 and 100
   * @returns {boolean}
   */
  public setLayerAlignment(
    panelId: string,
    index: int,
    alignment: string
  ): boolean;

  /**
   * Set a layer's opacity.
   * @param {string} panelId - unique id of the panel
   * @param {int} index - index of the layer
   * @param {double} opacity - value between 0 and 100
   * @returns {boolean}
   */
  public setLayerOpacity(panelId: string, index: int, opacity: double): boolean;

  /**
   * Set the visibility flag of the layers of a panel.
   * @param {string} panelId - unique id of the panel
   * @param {int} index - index of the layer
   * @param {boolean} visible - boolean flag
   * @returns {boolean}
   */
  public setLayerVisible(
    panelId: string,
    index: int,
    visible: boolean
  ): boolean;
}

/**
 * This interface is used to access the shot cameras or the panel layers, and add or remove motion to
 * them.
 * The following examples are provided:
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classMotionManager.html}
 * @example
 *  function AddingLayerMotion() {
 *      var mm = new MotionManager();
 *      var fm = new FunctionManager();
 *
 *      // retrieve the second panel in the project
 *      var sb = new StoryboardManager();
 *      var panelId = sb.panelInProject(1);
 *
 *      // add 3 keyframes to the first layer in the panel
 *      mm.addLayerKeyFrame(panelId, 0, 1);
 *      mm.addLayerKeyFrame(panelId, 0, 10);
 *      mm.addLayerKeyFrame(panelId, 0, 20);
 *
 *      // Get the function representing the motion path
 *      var path3d = mm.linkedLayerFunction(panelId, 0, "offset.attr3dpath");
 *
 *      // Adjust the motion path points ( using the Function Manager )
 *      fm.setPointPath3d(panelId, path3d, 0, 10.0, 10.0, 0.0, 0.0, 0.0, 0.0);
 *      fm.setPointPath3d(panelId, path3d, 1, -10.0, -10.0, 0.0, 0.0, 0.0, 0.0);
 *      fm.setPointPath3d(panelId, path3d, 2, 10.0, 10.0, 0.0, 0.0, 0.0, 0.0);
 *
 *      // mm.removeLayerKeyFrame( panelId, 0, 11);
 *      // mm.clearLayerMotion( panelId, 0 );
 *
 *  }
 */
declare class MotionManager extends QObject {
  /**
   * adds a Keyframe to the camera
   * @param {string} shotId - unique Id of the scene
   * @param {int} offset - offset ( in frames ) into the scene
   * @returns {boolean}
   */
  public addCameraKeyFrame(shotId: string, offset: int): boolean;

  /**
   * creates a new function of the given type within the project or shot or panel
   * @param {string} idString - unique Id of the project, shot or panel
   * @param {string} name - name of the new function
   * @param {string} type - The type of column you want to add. You can add any of the following: 3DPATH, BEZIER, EASE, QUARTERNION .
   * @returns {boolean}
   */
  public addFunction(idString: string, name: string, type: string): boolean;

  /**
   * adds a Keyframe to the layer
   * @param {string} panelId - unique Id of the panel
   * @param {int} layerIndex - index of the layer in the panel
   * @param {int} offset - panels functions are considered to be 20 frames long, thus this int represents the offset into that length.
   * @returns {boolean}
   */
  public addLayerKeyFrame(
    panelId: string,
    layerIndex: int,
    offset: int
  ): boolean;

  /**
   * clears all Motion from the camera
   * @param {string} shotId - unique Id of the scene
   * @returns {boolean}
   */
  public clearCameraMotion(shotId: string): boolean;

  /**
   * clears all Motion from the layer
   * @param {string} panelId - unique Id of the panel
   * @param {int} layerIndex - index of the layer in the panel
   * @returns {boolean}
   */
  public clearLayerMotion(panelId: string, layerIndex: int): boolean;

  /**
   * returns the linked function name for the given node and attribute, which may be manipulated using
   * the FunctionManager
   * @param {string} idString - unique Id of the project, shot or panel
   * @param {string} nodeName - qualified node Name, ructed from the root group to the node leaf
   * @param {string} attrName - name of the attribute function
   * @returns {string}
   */
  public getLinkedFunction(
    idString: string,
    nodeName: string,
    attrName: string
  ): string;

  /**
   * returns the model matrix for the given node.
   * @param {string} idString - unique Id of the project, shot or panel
   * @param {string} nodeName - qualified node Name, ructed from the root group to the node leaf
   * @param {double} atFrame
   * @returns {QObject}
   */
  public getNodeMatrix(
    idString: string,
    nodeName: string,
    atFrame: double
  ): QObject;

  /**
   * Gets the value of a attribute in a module.
   * @param {string} idString - unique Id of the project, shot or panel
   * @param {string} nodeName - qualified node Name, ructed from the root group to the node leaf
   * @param {string} attrName - name of the attribute function
   * @param {double} atFrame - the frame number at which you set the value
   * @returns {string}
   */
  public getTextAttr(
    idString: string,
    nodeName: string,
    attrName: string,
    atFrame: double
  ): string;

  /**
   * retrieves a specific function from the camera, which may be manipulated using the FunctionManager
   * attributes for camera pegs are position.attr3dpath, scale.x, scale.y, scale.z, rotation.anglez, skew
   * @param {string} shotId - unique Id of the scene
   * @param {string} attrName - name of the attribute function
   * @returns {string}
   */
  public linkedCameraFunction(shotId: string, attrName: string): string;

  /**
   * retrieves a specific function from the layer, which may be manipulated using the FunctionManager
   * attributes for layers are offset.attr3dpath, scale.x, scale.y, scale.z, rotation.anglez, skew
   * @param {string} panelId - unique Id of the panel
   * @param {int} layerIndex - index of the layer in the panel
   * @param {string} attrName - name of the attribute function
   * @returns {string}
   */
  public linkedLayerFunction(
    panelId: string,
    layerIndex: int,
    attrName: string
  ): string;

  /**
   * remove Keyframe from the camera
   * @param {string} shotId - unique Id of the scene
   * @param {int} offset - offset ( in frames ) into the scene
   * @returns {boolean}
   */
  public removeCameraKeyFrame(shotId: string, offset: int): boolean;

  /**
   * remove Keyframe from the layer
   * @param {string} panelId - unique Id of the panel
   * @param {int} layerIndex - index of the layer in the panel
   * @param {int} offset - panels functions are considered to be 20 frames long, thus this int represents the offset into that length.
   * @returns {boolean}
   */
  public removeLayerKeyFrame(
    panelId: string,
    layerIndex: int,
    offset: int
  ): boolean;

  /**
   * sets the linked function for the given node and attribute
   * @param {string} idString - unique Id of the project, shot or panel
   * @param {string} nodeName - qualified node Name, ructed from the root group to the node leaf
   * @param {string} attrName - name of the attribute
   * @param {string} functionName
   * @returns {boolean}
   */
  public setLinkedFunction(
    idString: string,
    nodeName: string,
    attrName: string,
    functionName: string
  ): boolean;

  /**
   * Changes the attributes of a module.
   * @param {string} idString - unique Id of the project, shot or panel
   * @param {string} nodeName - qualified node Name, ructed from the root group to the node leaf
   * @param {string} attrName - name of the attribute function
   * @param {double} atFrame - the frame number at which you set the value
   * @param {string} attrValue - new value
   * @returns {boolean}
   */
  public setTextAttr(
    idString: string,
    nodeName: string,
    attrName: string,
    atFrame: double,
    attrValue: string
  ): boolean;
}

/**
 * This interface is used to merge/extract another storyboard into the main storyboard.
 * The following examples are provided:
 * For scene insertion, the source scene must be loaded using loadSourceProject. Once loaded, the
 * sceneIds of the source may be retrieved. Using this information, the insertScene command can be
 * created.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classPrjMgtManager.html}
 * @example
 * var pM = new PrjMgtManager();
 * if (pM.loadSourceProject("/pathToProject/something.sboard")) {
 *     var scenes = pM.sourceProjectSceneIds();
 *     for (var i = 0; i < scenes.length; ++i) {
 *         System.println(scenes[i] + " : " + pM.sourceProjectSequenceName(scenes[i]) + ":" + pM.sourceProjectSceneName(scenes[i]));
 *     }
 *
 *     var SM = new StoryboardManager();
 *     var dstId = SM.sceneInProject(3);
 *
 *     // Insert the first scene from the source after the 3rd scene in the destination.
 *     var overwrite = false;
 *     var before = false;
 *     pM.insertScene(scenes[0], dstId, overwrite, before);
 *
 * }
 */
declare class PrjMgtManager extends QObject {
  /**
   * Extracts the specified range of scenes, and creates a new project with them.
   * Note, projects with modifications MUST be saved prior to the use of this function. ( use
   * scene.saveAll() )
   * @param {string} newProjectPath - path to the directory where the new project is to be saved.
   * @param {string} newProjectName - name of the new project
   * @param {string} fromShotId - used to determine the start of the extraction range ( first frame of the shot is used )
   * @param {string} toShotId - used to determine the end of the extraction range ( last frame of the shot is used )
   * @param {boolean} removeScenes - whether the extracted range is to be removed from the original project
   * @returns {boolean}
   */
  public extractRange(
    newProjectPath: string,
    newProjectName: string,
    fromShotId: string,
    toShotId: string,
    removeScenes: boolean
  ): boolean;

  /**
   * Inserts the specified source panel Id into the project.
   * Note: Adjacent transitions on the target panel will be deleted.
   * @param {string} srcSceneId - uniqueId of the source panel
   * @param {string} dstSceneId - uniqueId of the destination panel
   * @param {boolean} overwrite - if true, overwrites the destination panel, if false, inserts next to it
   * @param {boolean} before - - used when inserting to specify before the target or after
   * @returns {string}
   */
  public insertPanel(
    srcSceneId: string,
    dstSceneId: string,
    overwrite: boolean,
    before: boolean
  ): string;

  /**
   * Inserts the specified source scene Id into the project.
   * Note: Adjacent transitions on the target scene will be deleted.
   * @param {string} srcSceneId - uniqueId of the source shot
   * @param {string} dstSceneId - uniqueId of the destination shot
   * @param {boolean} overwrite - if true, overwrites the destination shot, if false, inserts next to it
   * @param {boolean} before - - used when inserting to specify before the target or after
   * @returns {string}
   */
  public insertScene(
    srcSceneId: string,
    dstSceneId: string,
    overwrite: boolean,
    before: boolean
  ): string;

  /**
   * Loads the specified storyboard project to be used as a source for insertion.
   * @param {string} scenePath - path to project
   * @returns {boolean}
   */
  public loadSourceProject(scenePath: string): boolean;

  /**
   * Map source Captions by caption name, on insert. True by default.
   * @param {boolean} flag - boolean
   * @returns {void}
   */
  public setCaptionRemapByName(flag: boolean): void;

  /**
   * Set the flag to keep the original scenes ( when overwriting ) and move them to the end of the
   * project.
   * @param {boolean} flag - boolean
   * @returns {void}
   */
  public setKeepOriginalScenes(flag: boolean): void;

  /**
   * Set the flag to merge only panels with track changes ( when overwriting scene )
   * @param {boolean} flag - boolean
   * @returns {void}
   */
  public setMergeOnlyTrackChanges(flag: boolean): void;

  /**
   * Set the flag to merge sound clips from the source project.
   * @param {boolean} flag - boolean
   * @returns {void}
   */
  public setMergeSoundClips(flag: boolean): void;

  /**
   * Set the flag to preserve transforms when replace only art work in panels ( when overwriting scene )
   * @param {boolean} flag - boolean
   * @returns {void}
   */
  public setPreserveMasterTransform(flag: boolean): void;

  /**
   * Set the flag to replace only art work in panels ( when overwriting scene )
   * @param {boolean} flag - boolean
   * @returns {void}
   */
  public setReplaceArtWork(flag: boolean): void;

  /**
   * Set the flag to respect locked sound tracks.
   * @param {boolean} flag - boolean
   * @returns {void}
   */
  public setRespectLockedSoundTracks(flag: boolean): void;

  /**
   * Returns a list of captions from the loaded storyboard project.
   * @returns {StringList}
   */
  public sourceProjectCaptionNames(): StringList;

  /**
   * Returns a list of panelIds from the specified scene of the loaded storyboard project.
   * @param {string} sceneId - unique ID of the scene
   * @returns {StringList}
   */
  public sourceProjectPanelIds(sceneId: string): StringList;

  /**
   * Returns a list of sceneIds from the loaded storyboard project.
   * @returns {StringList}
   */
  public sourceProjectSceneIds(): StringList;

  /**
   * Returns the scene Name for a given source project scene Id.
   * @param {string} sceneId
   * @returns {string}
   */
  public sourceProjectSceneName(sceneId: string): string;

  /**
   * Returns the sequence Name for a given source project scene Id.
   * @param {string} sceneId
   * @returns {string}
   */
  public sourceProjectSequenceName(sceneId: string): string;
}

/**
 * The Process class is used to launch an external process. Processes can be instantiated in the
 * scripting environment.
 * You can use it in both Script Editor and scriptModule.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classProcess.html}
 * @example
 * p1 = new Process("rndr -t file.rib"); // create process from single string
 * p2 = new Process("rndr", "-t", "file.rib"); // create process using separate arguments
 *
 * // Both commands execute same process
 * p1.launch();
 * p2.launch();
 *
 * // Launch a new process and detach it from application.
 * // Application will not be monitored by script module.
 * p3 = new Process("rndr -t file.rib");
 * p3.launchAndDetach();
 *
 * // Create a process from a specified PID.
 * p4 = new Process(1234);
 *
 * // Verify if process is still alive and terminate it
 * if (p4.isAlive()) {
 *     p4.terminate();
 * }
 */
declare class Process extends QObject {
  /**
   * Create a new Process. A process created with a pid cannot be launched as it already should have
   * been. terminate() and isAlive() functions can still be called with such a process.
   * @param {int} pid
   * @returns {void}
   */
  constructor(pid: int);

  /**
   * Create a new Process.
   * @param {string} name Path or name of process to execute
   * @returns {void}
   */
  constructor(name: string);

  /**
   * Create a new Process.
   * @param {string} name Path or name of process to execute
   * @param {StringList} list List of arguments
   * @returns {void}
   */
  constructor(name: string, list: StringList);

  /**
   * Create a new Process.
   * @param {string} commandLine Entire command line to launch
   * @returns {void}
   */
  constructor(commandLine: string);

  /**
   * Fetch command line to be executed in this process.
   * @returns {string}
   */
  public commandLine(): string;

  /**
   * Fetch error code.
   * @returns {int}
   */
  public errorCode(): int;

  /**
   * Fetch error message.
   * @returns {string}
   */
  public errorMessage(): string;

  /**
   * Verify if process is still alive.
   * @returns {boolean}
   */
  public isAlive(): boolean;

  /**
   * Launch process.
   * @returns {int}
   */
  public launch(): int;

  /**
   * Launch process and detach it from application.
   * @returns {int}
   */
  public launchAndDetach(): int;

  /**
   * Fetch process PID.
   * @returns {int}
   */
  public pid(): int;

  /**
   * Terminate process.
   * @returns {void}
   */
  public terminate(): void;
}

/**
 * This interface is used to access the properties of the storyboard project.
 * The following examples are provided:
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classPropertiesManager.html}
 * @example
 * var props = new PropertiesManager;
 *
 * props.setTitle("An Amazing Architectural Journey");
 * props.setSubTitle("Memoires of R. J. MacDonald");
 * props.setEpisodeTitle("The First Cruise Ship Arrives");
 */
declare class PropertiesManager extends QObject {
  /**
   * gets the copyright string
   * @returns {string}
   */
  public getCopyright(): string;

  /**
   * returns the duration of the project in frames
   * @returns {int}
   */
  public getDuration(): int;

  /**
   * gets the episode title
   * @returns {string}
   */
  public getEpisodeTitle(): string;

  /**
   * returns the project film width
   * @returns {double}
   */
  public getFilmWidth(): double;

  /**
   * returns the project start time
   * @returns {int}
   */
  public int(): int;

  /**
   * gets the project sub title
   * @returns {string}
   */
  public getSubTitle(): string;

  /**
   * gets the project title
   * @returns {string}
   */
  public getTitle(): string;

  /**
   * sets the project copyright text
   * @param {string} text text of copyright
   * @returns {boolean}
   */
  public setCopyright(text: string): boolean;

  /**
   * sets the edisode title
   * @param {string} title new episode title
   * @returns {boolean}
   */
  public setEpisodeTitle(title: string): boolean;

  /**
   * sets the project film width
   * @param {double} width width in inches
   * @returns {boolean}
   */
  public setFilmWidth(width: double): boolean;

  /**
   * sets the project start time
   * @param {int} nbFrames new start time
   * @returns {boolean}
   */
  public setStartTime(nbFrames: int): boolean;

  /**
   * sets the project sub title
   * @param {string} title new title
   * @returns {boolean}
   */
  public setSubTitle(title: string): boolean;

  /**
   * sets the project title
   * @param {string} title new title
   * @returns {boolean}
   */
  public setTitle(title: string): boolean;
}

/**
 * The SelectionManager JavaScript class. Access and select the Storyboard visual panel, scene,
 * sequence or layers.
 * The following example shows how to print the sequence, scene and panel information.
 * The following example shows how to use the Layer Selection to get the selected layer's index.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classSelectionManager.html}
 * @example
 *  var selection = new SelectionManager();
 *  var storybd = new StoryboardManager();
 *  var selIds = new Array(0);
 *
 *  selIds = selection.getSequenceSelection();
 *  for (var i = 0; i < selIds.length; ++i)
 *      System.println(" seq " + selIds[i] + " : " + storybd.nameOfSequence(selIds[i]))
 *
 *  selIds = selection.getSceneSelection();
 *  for (var i = 0; i < selIds.length; ++i)
 *      System.println(" scene " + selIds[i] + " : " + storybd.nameOfScene(selIds[i]));
 *
 *  selIds = selection.getPanelSelection();
 *  for (var i = 0; i < selIds.length; ++i)
 *      System.println(" panel " + selIds[i] + " : " + storybd.nameOfPanel(selIds[i]));
 */
declare class SelectionManager extends QObject {
  /**
   * Clear the selection.
   * @returns {boolean}
   */
  public clearSelection(): boolean;

  /**
   * Get all the selected Layer and return the indexes in order.
   * @returns {QScriptValue}
   */
  public getLayerSelection(): QScriptValue;

  /**
   * Return a list of selected panels.
   * @returns {StringList}
   */
  public getPanelSelection(): StringList;

  /**
   * Return a list of selected scenes.
   * @returns {StringList}
   */
  public getSceneSelection(): StringList;

  /**
   * Return a list of selected sequences.
   * @returns {StringList}
   */
  public getSequenceSelection(): StringList;

  /**
   * Check if the requested Layers are selected.
   * @param {QScriptValue} layer - Layer object.
   * @returns {boolean}
   */
  public isSelected(layer: QScriptValue): boolean;

  /**
   * Select every panels.
   * @returns {boolean}
   */
  public selectAll(): boolean;

  /**
   * Set the current panel and moves the play head.
   * @param {string} panelId - Unique id of Panel
   * @returns {boolean}
   */
  public setCurrentPanel(panelId: string): boolean;

  /**
   * Select layer(s) on the currently selected Panel.
   * @param {QScriptValue} selection - An Array of Layer objects. A Layer object has name [String] and panelId [String] properties
   * @returns {boolean}
   * @example
   * var selectionManager = new SelectionManager;
   *
   * var panelSelection = selectionManager.getPanelSelection();
   * if (panelSelection.length <= 0)
   *     return;
   *
   * // Select individually each selected layer and set it to the front
   * var originallySelectedLayers = selectionManager.getLayerSelection();
   * for (var i = 0; i < originallySelectedLayers.length; i++) {
   *     selectionManager.clearSelection();
   *
   *     var temporarilySelectedLayers = [];
   *     temporarilySelectedLayers.push(originallySelectedLayers[i]);
   *
   *     selectionManager.setLayerSelection(temporarilySelectedLayers);
   *     // onActionMoveTabToTop() only works when only one layer is selected
   *     Action.perform("onActionMoveTabToTop()");
   * }
   *
   * selectionManager.setLayerSelection(originallySelectedLayers);
   */
  public setLayerSelection(selection: QScriptValue): boolean;

  /**
   * Set Selected Panels.
   * @param {StringList} panelIds - Array of panel Ids.
   * @returns {boolean}
   */
  public setPanelSelection(panelIds: StringList): boolean;

  /**
   * Set Selected Scenes.
   * @param {StringList} sceneIds - Array of scene Ids.
   * @returns {boolean}
   */
  public setSceneSelection(sceneIds: StringList): boolean;

  /**
   * Set Selected Sequences.
   * @param {StringList} sequenceIds - Array of sequence Ids.
   * @returns {boolean}
   */
  public setSequenceSelection(sequenceIds: StringList): boolean;
}

/**
 * scripting object to a sound column... Allow object oriented object interaction with sound sequence.
 * In Harmony, this object is created by the global scripting interface column.getSoundColumn(
 * columnName );
 * In Storyboard, this object is created by the scripting interface SoundTrackManager.getSoundColumn(
 * columnName );
 * It includes methods to iterate over the sound column content. At this moment, it cannot do any
 * modification to the sound column.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classsoundColumnInterface.html}
 */
declare class soundColumnInterface extends QObject {
  /**
   * @returns {string}
   */
  public column(): string;

  /**
   * @returns {soundSequenceInterface[]}
   */
  public sequences(): soundSequenceInterface[];

  /**
   * @returns {string}
   */
  // /* Invalid - Duplicate property name */ column: string;
}

/**
 *
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classsoundSequenceInterface.html}
 */
declare class soundSequenceInterface extends QObject {
  /**
   * @param {int} startFrame
   * @param {int} endFrame
   * @param {float} startTime
   * @param {float} stopTime
   * @param {string} name
   * @param {string} filename
   * @returns {void}
   */
  constructor(
    startFrame: int,
    endFrame: int,
    startTime: float,
    stopTime: float,
    name: string,
    filename: string
  );

  /**
   * path resolved filename
   * @returns {string}
   */
  public filename(): string;

  /**
   * named of this sound sequence - derived from the filename
   * @returns {string}
   */
  public name(): string;

  /**
   * returns the start frame of this sound sequence, 1 based.
   * @returns {int}
   */
  public startFrame(): int;

  /**
   * returns the start time in second from the beginning of the sound file. The start time is sync with
   * ths start frame.
   * @returns {float}
   */
  public startTime(): float;

  /**
   * returns the stop frame of this sound sequence, value is 1 based
   * @returns {int}
   */
  public stopFrame(): int;

  /**
   * returns the stop time in second. sound will stop playing when reaching either the stop time or the
   * stop frame, whichever comes first
   * @returns {float}
   */
  public stopTime(): float;

  /**
   * @returns {int}
   */
  public stopFrame(): int;

  /**
   * @returns {int}
   */
  public startFrame(): int;

  /**
   * @returns {string}
   */
  // /* Invalid - Duplicate property name */ filename: string;

  /**
   * @returns {string}
   */
  // /* Invalid - Duplicate property name */ name: string;

  /**
   * @returns {float}
   */
  // /* Invalid - Duplicate property name */ startTime: float;

  /**
   * @returns {float}
   */
  // /* Invalid - Duplicate property name */ stopTime: float;
}

/**
 * This interface is used to access the audio tracks of a storyboard project.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classSoundTrackManager.html}
 * @example
 * var stb = new SoundTrackManager();
 * var num = stb.numberOfSoundTracks();
 * for (var i = 0; i < num; ++i) {
 *     System.println("Name of sound column is " + stb.nameOfSoundTrack(i));
 * }
 *
 * // Import a sound file at frame 25
 * stb.importSoundBuffer("Sound", "/home/user/Music/Child_French_Stereo.wav", 25);
 *
 * var soundcol = stb.soundColumn("Sound");
 * if (soundcol) {
 *     var sequences = soundcol.sequences();
 *     var numSequences = sequences.length;
 *     for (var sequenceIdx = 0; sequenceIdx < numSequences; ++sequenceIdx) {
 *         var sequence = sequences[sequenceIdx];
 *
 *         var startFrame = sequence.startFrame;
 *         var name = sequence.name;
 *         var filename = sequence.filename;
 *         var len = sequence.stopFrame - sequence.startFrame + 1;
 *
 *         System.println(filename + " has name " + name + " and start " + startFrame + " and length " + len);
 *     }
 * }
 */
declare class SoundTrackManager extends QObject {
  /**
   * add a new empty audio track
   * @returns {string}
   */
  public addSoundTrack(): string;

  /**
   * delete audio track
   * @param {string} columnName - name of the audio track
   * @returns {boolean}
   */
  public deleteSoundTrack(columnName: string): boolean;

  /**
   * return the color of the sound track.
   * @param {string} columnName
   * @returns {string}
   */
  public getSoundTrackColor(columnName: string): string;

  /**
   * import a sound file into a given audio track at the specified frame
   * @param {string} columnName - name of the audio track
   * @param {string} soundFile - path to soundFile ( mp3, aiff, wav )
   * @param {int} targetFrame - frame where audio clip is to be inserted.
   * @returns {boolean}
   */
  public importSoundBuffer(
    columnName: string,
    soundFile: string,
    targetFrame: int
  ): boolean;

  /**
   * return the columnName of the audio track at index
   * @param {int} index - index in the list of project audio tracks
   * @returns {string}
   */
  public nameOfSoundTrack(index: int): string;

  /**
   * return the number of Audio tracks
   * @returns {int}
   */
  public numberOfSoundTracks(): int;

  /**
   * sets the color of the sound track
   * @param {string} columnName
   * @param {string} color
   * @returns {void}
   */
  public setAudioClipColor(columnName: string, color: string): void;

  /**
   * returns a SoundColumnInterface object that contains a reference to that sound column. The
   * SoundColumnInterface object contains a useful interface to introspecting the sound and its sound
   * sequences.
   * @param {string} columnName - name of the audio track
   * @returns {soundColumnInterface}
   */
  public soundColumn(columnName: string): soundColumnInterface;
}

/**
 * The StoryboardManager JavaScript class. Access the main storyboard project and its components.
 * It can be used to query the sequences, scenes, panels and transitions of the project. As well, it
 * can be used to create, delete or rename project objects.
 * Scenes, Panels and Transitions are identified by a unique id. For the sake of clarity, a transition
 * is considered to belong to the shot to it's right. Or, the shot owns the transition to it's left.
 * The following examples are provided:
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classStoryboardManager.html}
 * @example
 * function projectQuery() {
 *     var storyboard = new StoryboardManager();
 *
 *     // Iterate through all sequences
 *     var nbSeqs = storyboard.numberOfSequencesInProject();
 *     for (var i = 0; i < nbSeqs; ++i) {
 *         var id = storyboard.sequenceInProject(i);
 *         System.println("Sequence  is " + id + "  : " + storyboard.nameOfSequence(id));
 *         var nbScenes = storyboard.numberOfScenesInSequence(id);
 *
 *         for (var j = 0; j < nbScenes; ++j) {
 *             var sceneId = storyboard.sceneInSequence(id, j);
 *             System.println("     scene  is " + sceneId + "  : " + storyboard.nameOfScene(sceneId));
 *         }
 *     }
 *
 *     // Alternatively, iterate through all scenes.
 *     var nbShots = storyboard.numberOfScenesInProject();
 *     for (var i = 0; i < nbShots; ++i) {
 *         var sceneId = storyboard.sceneInProject(i);
 *         var seqId = storyboard.sequenceIdOfScene(sceneId);
 *         System.println("Scene  is " + sceneId + ": " + storyboard.nameOfScene(sceneId) + " sequence is " + storyboard.nameOfSequence(seqId));
 *     }
 * }
 *
 * function transitionQuery() {
 *     var sb = new StoryboardManager();
 *     var sceneList = sb.scenesWithTrx();
 *     for (var i = 0; i < sceneList.length; ++i) {
 *         var trxId = sb.trxIdOfScene(sceneList[i]);
 *         System.println(sb.nameOfScene(sceneList[i]) +
 *             " has a transition of type " +
 *             sb.trxType(trxId) +
 *             " and of length " +
 *             sb.trxLength(trxId));
 *     }
 *
 * }
 */
declare class StoryboardManager extends QObject {
  /**
   * Append a panel at the end of the project.
   * @param {string} name - name of new scene
   * @returns {string}
   */
  public appendPanel(name: string): string;

  /**
   * Append a scene at the end of the project.
   * @param {string} name - name of new scene
   * @returns {string}
   */
  public appendScene(name: string): string;

  /**
   * Create a new sequence.
   * @param {string} firstShotId - sceneId of first targetShot
   * @param {string} lastShotId - sceneId of last targetShot
   * @returns {string}
   */
  public createSequence(firstShotId: string, lastShotId: string): string;

  /**
   * Create a transition ( at the beginning of the target shot ), and return the unique ID of the
   * transition.
   * @param {string} shotId - unique ID of the shot
   * @param {int} length - length of transition, must be less than the length of the preceding panel
   * @param {string} stringType - "wipe", "dissolve", "edge wipe", "clock wipe" or "slide"
   * @param {int} [angle=90] - angle in degrees ( used for wipes )
   * @param {boolean} [reverse=false] - bool to reverse the wipe direction.
   * @returns {string}
   */
  public createTrx(
    shotId: string,
    length: int,
    stringType: string,
    angle?: int,
    reverse?: boolean
  ): string;

  /**
   * Deletes a panel.
   * @param {string} panelId - panelId of target panel
   * @returns {boolean}
   */
  public deletePanel(panelId: string): boolean;

  /**
   * Delete a scene.
   * @param {string} sceneId - sceneId of target scene
   * @returns {boolean}
   */
  public deleteScene(sceneId: string): boolean;

  /**
   * Delete a sequence.
   * @param {string} seqId - sceneId of sequence
   * @returns {boolean}
   */
  public deleteSequence(seqId: string): boolean;

  /**
   * Delete a transition.
   * @param {string} trxId - unique ID of the transition
   * @returns {boolean}
   */
  public deleteTrx(trxId: string): boolean;

  /**
   * Get the color of the panel.
   * @param {string} panelId - panelId of the target panel
   * @returns {string}
   */
  public getPanelColor(panelId: string): string;

  /**
   * Get the panel Duration.
   * @param {string} panelId - panelId of target panel
   * @returns {int}
   */
  public getPanelDuration(panelId: string): int;

  /**
   * Insert a new panel.
   * @param {boolean} after - whether the panel should be created after the target panel
   * @param {string} panelId - panelId of target panel
   * @param {string} name - name of new scene
   * @returns {string}
   */
  public insertPanel(after: boolean, panelId: string, name: string): string;

  /**
   * Insert a new scene.
   * @param {boolean} after - whether the scene should be created after the target Shot
   * @param {string} shotId - sceneId of targetShot
   * @param {string} name - name of new scene
   * @returns {string}
   */
  public insertScene(after: boolean, shotId: string, name: string): string;

  /**
   * Modify the transition.
   * @param {string} trxId - unique ID of the transition
   * @param {string} stringType - "wipe", "dissolve", "edge wipe", "clock wipe" or "slide"
   * @param {int} [angle=90] - angle in degrees ( used for wipes )
   * @param {boolean} [revers=false]
   * @returns {boolean}
   */
  public modifyTrx(
    trxId: string,
    stringType: string,
    angle?: int,
    revers?: boolean
  ): boolean;

  /**
   * Return the name of the panel.
   * @param {string} panelId - unique id of panel
   * @returns {string}
   */
  public nameOfPanel(panelId: string): string;

  /**
   * Return the name of the scene.
   * @param {string} sceneId - unique id of scene
   * @returns {string}
   */
  public nameOfScene(sceneId: string): string;

  /**
   * Return the name of the sequence.
   * @param {string} sequenceId - unique id of sequence
   * @returns {string}
   */
  public nameOfSequence(sequenceId: string): string;

  /**
   * Return the number of panels in project.
   * @returns {int}
   */
  public numberOfPanelsInProject(): int;

  /**
   * Return the number of panels in a scene.
   * @param {string} sceneId - unique id of scene
   * @returns {int}
   */
  public numberOfPanelsInScene(sceneId: string): int;

  /**
   * Return the number of scenes in project.
   * @returns {int}
   */
  public numberOfScenesInProject(): int;

  /**
   * Return the number of scenes in a sequence.
   * @param {string} sequenceId - unique id of sequence
   * @returns {int}
   */
  public numberOfScenesInSequence(sequenceId: string): int;

  /**
   * Return the number of sequences in the project.
   * @returns {int}
   */
  public numberOfSequencesInProject(): int;

  /**
   * Return the unique id of the panel.
   * @param {string} sequenceName - name of sequence
   * @param {string} sceneName - name of scene
   * @param {string} panelName - name of panel
   * @returns {string}
   */
  public panelId(
    sequenceName: string,
    sceneName: string,
    panelName: string
  ): string;

  /**
   * Return panelId of the ith panel in the project.
   * @param {int} i - index of the panel in the project
   * @returns {string}
   */
  public panelInProject(i: int): string;

  /**
   * Return the panelId of the ith panel in the scene.
   * @param {string} sceneId - unique id of the scene
   * @param {int} index - panel index in the scene
   * @returns {string}
   */
  public panelInScene(sceneId: string, index: int): string;

  /**
   * Rename a panel.
   * @param {string} panelId - panelId of target panel
   * @param {string} newName - new name
   * @returns {boolean}
   */
  public renamePanel(panelId: string, newName: string): boolean;

  /**
   * Rename a scene.
   * @param {string} sceneId - sceneId of target scene
   * @param {string} newName - new name
   * @returns {boolean}
   */
  public renameScene(sceneId: string, newName: string): boolean;

  /**
   * Rename a sequence.
   * @param {string} seqId - sequenceId of target sequence
   * @param {string} newName - new name
   * @returns {boolean}
   */
  public renameSequence(seqId: string, newName: string): boolean;

  /**
   * Resize a transition.
   * @param {string} trxId - unique ID of the transition
   * @param {int} length - length of transition
   * @returns {boolean}
   */
  public resizeTrx(trxId: string, length: int): boolean;

  /**
   * Return the last frame of a scene.
   * @param {string} shotId - unique ID of scene
   * @returns {int}
   */
  public sceneEndFrame(shotId: string): int;

  /**
   * Return whether a scene has a leading transition.
   * @param {string} shotId - unique ID of the scene
   * @returns {boolean}
   */
  public sceneHasTrx(shotId: string): boolean;

  /**
   * Return the unique id of the scene.
   * @param {string} sequenceName - name of sequence
   * @param {string} sceneName - name of scene
   * @returns {string}
   */
  public sceneId(sequenceName: string, sceneName: string): string;

  /**
   * Return the sceneId of the panel.
   * @param {string} panelId - unique id of panel
   * @returns {string}
   */
  public sceneIdOfPanel(panelId: string): string;

  /**
   * Return the sceneId of the shot to the right of the transition.
   * @param {string} trxId - unique ID of the transition
   * @returns {string}
   */
  public sceneIdOfTrx(trxId: string): string;

  /**
   * Return the sceneId of the ith scene in project.
   * @param {int} i - index in project
   * @returns {string}
   */
  public sceneInProject(i: int): string;

  /**
   * Return sceneId of the ith scene in sequence.
   * @param {string} sequenceId - unique id of sequence
   * @param {int} i - index in sequence
   * @returns {string}
   */
  public sceneInSequence(sequenceId: string, i: int): string;

  /**
   * Return the start frame of a scene.
   * @param {string} shotId - unique ID of scene
   * @returns {int}
   */
  public sceneStartFrame(shotId: string): int;

  /**
   * Return a list of the sceneIds of scenes that have leading transitions.
   * @returns {StringList}
   */
  public scenesWithTrx(): StringList;

  /**
   * Return the unique id of the sequence.
   * @param {string} sequenceName - name of sequence
   * @returns {string}
   */
  public sequenceId(sequenceName: string): string;

  /**
   * Return sequenceId of the sequence of the given scene.
   * @param {string} sceneId - unique id of scene
   * @returns {string}
   */
  public sequenceIdOfScene(sceneId: string): string;

  /**
   * Return the sequenceId of the ith sequence in project.
   * @param {int} i - sequence index in the project
   * @returns {string}
   */
  public sequenceInProject(i: int): string;

  /**
   * Set the panel colour.
   * @param {string} panelId - panelId of the target panel.
   * @param {QScriptValue} color - numerical value (HEX) or the name (See HTML naming convention) of the color we want to set the panel.
   * @returns {void}
   */
  public setPanelColor(panelId: string, color: QScriptValue): void;

  /**
   * Set the panel duration.
   * @param {string} panelId - panelId of target panel
   * @param {int} frames - number of frames
   * @returns {boolean}
   */
  public setPanelDuration(panelId: string, frames: int): boolean;

  /**
   * Split a panel into 2 panels.
   * @param {string} panelId - panelId of target panel
   * @param {int} atFrame - frame at which to split ( measured from start of project )
   * @returns {boolean}
   */
  public splitPanel(panelId: string, atFrame: int): boolean;

  /**
   * Return the transition ID of the transition to the left of the shot.
   * @param {string} shotId - unique ID of the scene
   * @returns {string}
   */
  public trxIdOfScene(shotId: string): string;

  /**
   * Return the length of the transition.
   * @param {string} trxId - unique ID of the transition
   * @returns {int}
   */
  public trxLength(trxId: string): int;

  /**
   * Return a string identifying the transition type.
   * @param {string} trxId - unique ID of the transition
   * @returns {string}
   */
  public trxType(trxId: string): string;
}

/**
 * The ToolPresetManager JavaScript class. Provides methods to set the current tool preset.
 * The tool preset manager returns information about the existing tool presets and provides to the user
 * the functionality to select a tool preset with its "id" property. Presets can be defined by the
 * following properties:
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classToolPresetManager.html}
 * @example
 * // Activate the Preset named "preset"
 * var toolPresetManager = new ToolPresetManager();
 * var presets = toolPresetManager.getPresets();
 * presets.forEach(
 *     function(preset) {
 *         if (preset.name == "preset")
 *             toolPresetManager.setActivePreset(preset);
 *     }
 * );
 */
declare class ToolPresetManager extends QObject {
  /**
   * Get all the presets of the project.
   * @returns {QScriptValue}
   */
  public getPresets(): QScriptValue;

  /**
   * Activate the given preset.
   * @param {QScriptValue} preset A JavaScript object with the "id" property set to the desired tool preset
   * @returns {void}
   */
  public setActivePreset(preset: QScriptValue): void;
}

/**
 * Action interface is used to perform menu or tool bar functions.
 * You can use it in Script Editor only.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classAction.html}
 * @example
 * function callAbout()
 *
 * {
 *
 *     Action.perform("onActionAbout()");
 *
 * }
 */
declare class Action extends SCR_BaseInterface {
  /**
   * using action manager, perform the requested action (slot - menu item, toolbar item,...)
   * @param {string} slot
   * @returns {void}
   */
  public perform(slot: string): void;

  /**
   * using action manager, perform the requested action (slot - menu item, toolbar item,...)
   * @param {string} slot
   * @param {string} responder
   * @returns {void}
   */
  public perform(slot: string, responder: string): void;
}

/**
 * With the drawing functions, you can call some functions on the current drawing to modify it in some
 * ways.
 * You can use it in Script Editor only.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classDrawingTools.html}
 */
declare class DrawingTools extends SCR_BaseInterface {
  /**
   * computes the breaking triangles of the current layer using params.
   * @param {DrawingToolParams} [params=0]
   * @returns {void}
   */
  public computeBreakingTriangles(params?: DrawingToolParams): void;

  /**
   * converts the selected pencil lines in layer of the current drawing using params
   * @param {int} [art=LineArtMask]
   * @param {DrawingToolParams} [params=0]
   * @returns {void}
   */
  public convertPencilToBrush(art?: int, params?: DrawingToolParams): void;

  /**
   * extracts the centreline from srcLayer and puts the extracted line in dstLayer using params.
   * @param {int} [srcArt=LineArtMask]
   * @param {int} [dstArt=ColourArtMask]
   * @param {DrawingToolParams} [params=0]
   * @returns {void}
   */
  public extractCenterline(
    srcArt?: int,
    dstArt?: int,
    params?: DrawingToolParams
  ): void;

  /**
   * sets the current art to be one of the following : underlayArt, colourArt, lineArt or overlayArt
   * @returns {void}
   */
  public setCurrentArt(): void;

  /**
   * sets the current drawing to be from column columnName at frame frame
   * @param {string} columnName
   * @param {int} [frame=1]
   * @returns {boolean}
   */
  public setCurrentDrawingFromColumnName(
    columnName: string,
    frame?: int
  ): boolean;

  /**
   * sets the current drawing to be from node nodeName at frame frame
   * @param {string} nodeName
   * @param {int} [frame=1]
   * @returns {boolean}
   */
  public setCurrentDrawingFromNodeName(nodeName: string, frame?: int): boolean;

  /**
   * readonly property - returns mask for all 4 art layers
   * @returns {int}
   */
  allArts: int;

  /**
   * readonly property - returns colourArt mask
   * @returns {int}
   */
  colourArt: int;

  /**
   * readonly property - returns lineArt mask
   * @returns {int}
   */
  lineArt: int;

  /**
   * readonly property - returns overlayArt mask
   * @returns {int}
   */
  overlayArt: int;

  /**
   * readonly property - returns underlayArt mask
   * @returns {int}
   */
  underlayArt: int;
}

/**
 * Simplified FileDialog interface.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classFileDialog.html}
 */
declare class FileDialog extends SCR_BaseInterface {
  /**
   * function that will return an existing directory selected by the user
   * @param {string} [dir=String::null]
   * @param {string} [title=String::null]
   * @param {QWidget} [parent=0]
   * @returns {QVariant}
   */
  public getExistingDirectory(
    dir?: string,
    title?: string,
    parent?: QWidget
  ): QVariant;

  /**
   * function that returns an existing file selected by the user
   * @param {string} [filter=String::null]
   * @param {string} [title=String::null]
   * @param {QWidget} [parent=0]
   * @returns {QVariant}
   */
  public getOpenFileName(
    filter?: string,
    title?: string,
    parent?: QWidget
  ): QVariant;

  /**
   * function that will return one or more existing files selected by the user
   * @param {string} [dir=String::null]
   * @param {string} [filter=String::null]
   * @param {string} [title=String::null]
   * @param {QWidget} [parent=0]
   * @returns {StringList}
   */
  public getOpenFileNames(
    dir?: string,
    filter?: string,
    title?: string,
    parent?: QWidget
  ): StringList;

  /**
   * function that will return a file name selected by the user
   * @param {string} [filter=String::null]
   * @param {string} [title=String::null]
   * @param {QWidget} [parent=0]
   * @returns {QVariant}
   */
  public getSaveFileName(
    filter?: string,
    title?: string,
    parent?: QWidget
  ): QVariant;
}

/**
 * Map paths from one format to another.
 * You can use it in Script Editor only.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classfileMapper.html}
 */
declare class fileMapper extends SCR_BaseInterface {
  /**
   * returns the complete path of the passed path resolving shortcuts in windows. Will also convert the
   * path separator to '\'.
   * @param {string} path path on Windows
   * @returns {string}
   * @example
   * Your / usadata000 is mapped to a network drive through a shortcut
   *
   * pointing to / server / path / usadata000
   *
   *
   *
   * var remapped = fileMapper.toNativePath("/usadata000/file.txt");
   *
   *
   *
   * remapped will be
   *
   *
   *
   * \\ server\ path\ usadata000\ file.txt
   */
  public toNativePath(path: string): string;

  /**
   * converts a path of the form /USA_DB/jobs/<job>/scene-<scene>/<remainder...> to eg.
   * /usadata000/<job>/scene-<scene>/<remainder...>
   * If working offline (no database) this function will return the input path.
   *  In database mode if the path is not of the form /USA_DB/jobs/<job>/scene-<scene>/<remainder...>
   * this function will return the input path.
   *  In database mode if the scene cannot be located in the database this function will return the input
   * path.
   * @param {string} path path to convert
   * @returns {string}
   */
  public toScenePath(path: string): string;
}

/**
 * The frame JavaScript global object get, set and offset the current frame.
 * This interface is used obtain and change the number of current frame. The current frame is the frame
 * at which the red playhead is in the Timeline view. It is based on the amount of frames since the
 * first frame of the project which, in this interface, is frame 1.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classframe.html}
 * @example
 * function insertMarkersAtFrame(int myFrame) {
 *     // Return the current frame.
 *     var curFrame = frame.current();
 *
 *     // If the current frame is not the same as the one passed as argument, move to it.
 *     if (curFrame <= myFrame)
 *         frame.moveFrames(curFrame - myFrame);
 *     else
 *         frame.moveFrames(myFrame - curFrame);
 * }
 */
declare class frame extends SCR_BaseInterface {
  /**
   * Get the number of the current frame.
   * @returns {int}
   */
  public current(): int;

  /**
   * Offsets the current frame by the given number of frames.
   * @param {int} offset The amount of frames to offset the current frame by. A positive value offsets the current frame to the right and a negative value offsets the current frame to the left.
   * @returns {boolean}
   */
  public moveFrames(offset: int): boolean;

  /**
   * Change the current frame to the given frame number.
   * @param {int} frameNb The number of the frame to move to. The value must be between 1 (first frame) and the amount of frames in the project.
   * @returns {void}
   */
  public setCurrent(frameNb: int): void;
}

/**
 * Access to Simplified Input Dialogs.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classInput.html}
 */
declare class Input extends SCR_BaseInterface {
  /**
   * Function to get an item from the user.
   * @param {string} label
   * @param {StringList} itemList
   * @param {string} [currentItem=String::null]
   * @param {boolean} [editable=false]
   * @param {string} [title=String::null]
   * @param {QWidget} [parent=0]
   * @returns {QVariant}
   */
  public getItem(
    label: string,
    itemList: StringList,
    currentItem?: string,
    editable?: boolean,
    title?: string,
    parent?: QWidget
  ): QVariant;

  /**
   * Function to get an item from the user.
   * @param {StringList} itemList
   * @param {string} [currentItem=String::null]
   * @param {boolean} [editable=false]
   * @param {QWidget} [parent=0]
   * @returns {QVariant}
   */
  public getItem(
    itemList: StringList,
    currentItem?: string,
    editable?: boolean,
    parent?: QWidget
  ): QVariant;

  /**
   * Function to get a number from the user.
   * @param {string} [label=String::null]
   * @param {double} [value=0]
   * @param {int} [decimals=0]
   * @param {double} [minValue=-2147483647]
   * @param {double} [maxValue=2147483647]
   * @param {string} [title=String::null]
   * @param {QWidget} [parent=0]
   * @returns {QVariant}
   */
  public getNumber(
    label?: string,
    value?: double,
    decimals?: int,
    minValue?: double,
    maxValue?: double,
    title?: string,
    parent?: QWidget
  ): QVariant;

  /**
   * Function to get a string from the user.
   * @param {string} [label=String::null]
   * @param {string} [text=String::null]
   * @param {string} [title=String::null]
   * @param {QWidget} [parent=0]
   * @returns {QVariant}
   */
  public getText(
    label?: string,
    text?: string,
    title?: string,
    parent?: QWidget
  ): QVariant;
}

/**
 * Scripting interface class to query key modifiers.
 * You can use it in Script Editor only.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classKeyModifiers.html}
 */
declare class KeyModifiers extends SCR_BaseInterface {
  /**
   * Check if the Alt key is pressed.
   * @returns {boolean}
   */
  public IsAlternatePressed(): boolean;

  /**
   * Check if the Ctrl key is pressed.
   * @returns {boolean}
   */
  public IsControlPressed(): boolean;

  /**
   * Check if the Shift key is pressed.
   * @returns {boolean}
   */
  public IsShiftPressed(): boolean;

  /**
   * Check if the space key is pressed.
   * @returns {boolean}
   */
  public IsSpacePressed(): boolean;
}

/**
 * Simplified MessageBox widget.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classMessageBox.html}
 * @example
 * MessageBox.warning(" This is a warning.");
 */
declare class MessageBox extends SCR_BaseInterface {
  /**
   * critical box. One button, Retry.
   * @returns {QScriptValue}
   */
  public critical(): QScriptValue;

  /**
   * information box. One button, OK.
   * @returns {QScriptValue}
   */
  public information(): QScriptValue;

  /**
   * warning box. Two buttons are Abort and Retry.
   * @returns {QScriptValue}
   */
  public warning(): QScriptValue;
}

/**
 * Allows the user to print messages to the message log window.
 * You can use it in Script Editor only.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classMessageLog.html}
 * @example
 * MessageLog.trace("Export template failed. Nothing selected.");
 */
declare class MessageLog extends SCR_BaseInterface {
  /**
   * writes the message to the message log if debug mode is on
   * @param {string} messageIfDebug
   * @returns {void}
   */
  public debug(messageIfDebug: string): void;

  /**
   * returns whether debug mode is set
   * @returns {boolean}
   */
  public isDebug(): boolean;

  /**
   * sets debug mode to on/off
   * @param {boolean} b
   * @returns {void}
   */
  public setDebug(b: boolean): void;

  /**
   * writes the message to the message log
   * @param {string} message
   * @returns {void}
   */
  public trace(message: string): void;
}

/**
 * This set of functions is used to query/modify the current penstyle and list of penstyles. The list
 * of penstyles includes the brush, pencil and texture styles.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classPenstyleManager.html}
 * @example
 * function queryPenstyles() {
 *     var num = PenstyleManager.getNumberOfPenstyles();
 *     for (var i = 0; i < num; ++i) {
 *         System.println("penstyle name is " + PenstyleManager.getPenstyleName(i));
 *     }
 *
 *     System.println("The current penstyle has min size of " + PenstyleManager.getCurrentPenstyleMinimumSize() +
 *         " and maximum size of " + PenstyleManager.getCurrentPenstyleMaximumSize());
 *
 * }
 */
declare class PenstyleManager extends SCR_BaseInterface {
  /**
   * set the current penstyle centreline smoothness
   * @param {double} smooth - new smoothness value
   * @returns {void}
   */
  public changeCurrentPenstyleCenterlineSmoothness(smooth: double): void;

  /**
   * set the current penstyle maximum size
   * @param {double} maximum - new maximum size
   * @returns {void}
   */
  public changeCurrentPenstyleMaximumSize(maximum: double): void;

  /**
   * set the current penstyle minimum size
   * @param {double} minimum - new minimum size
   * @returns {void}
   */
  public changeCurrentPenstyleMinimumSize(minimum: double): void;

  /**
   * set the current penstyle outline smoothness
   * @param {double} smooth - new smoothness value
   * @returns {void}
   */
  public changeCurrentPenstyleOutlineSmoothness(smooth: double): void;

  /**
   * Formats the penstyle list into a string, which can be used to store the penstyle list and import it
   * later.
   * @returns {string}
   */
  public exportPenstyleListToString(): string;

  /**
   * Create a string representing the penstyle which can be used to store the penstyle and import it
   * later.
   * @param {int} index - index of penstyle
   * @returns {string}
   */
  public exportPenstyleToString(index: int): string;

  /**
   * Gets the current penstyle center line smoothness.
   * @returns {double}
   */
  public getCurrentPenstyleCenterlineSmoothness(): double;

  /**
   * Gets the current penstyle eraser flag.
   * @returns {boolean}
   */
  public getCurrentPenstyleEraserFlag(): boolean;

  /**
   * Gets the index of the current penstyle.
   * @returns {int}
   */
  public getCurrentPenstyleIndex(): int;

  /**
   * Gets the current penstyle maximum size.
   * @returns {double}
   */
  public getCurrentPenstyleMaximumSize(): double;

  /**
   * Gets the current penstyle minimum size.
   * @returns {double}
   */
  public getCurrentPenstyleMinimumSize(): double;

  /**
   * Gets the name of the current penstyle.
   * @returns {string}
   */
  public getCurrentPenstyleName(): string;

  /**
   * Gets the current penstyle outline smoothness.
   * @returns {double}
   */
  public getCurrentPenstyleOutlineSmoothness(): double;

  /**
   * Gets the number of penstyles.
   * @returns {int}
   */
  public getNumberOfPenstyles(): int;

  /**
   * Gets the name of the penstyle.
   * @param {int} index - index of style withing list
   * @returns {string}
   */
  public getPenstyleName(index: int): string;

  /**
   * Imports a penstyle list from a previously formatted penstyle string.
   * @param {string} str - formatted penstyle list ( created from a previous call to exportPenstyleToString or exportPenstyleListToString )
   * @returns {void}
   */
  public importPenstyleListFromString(str: string): void;

  /**
   * Saves the penstyles.
   * @returns {void}
   */
  public savePenstyles(): void;

  /**
   * sets the current penstyle
   * @param {int} index - index of penstyle
   * @returns {void}
   */
  public setCurrentPenstyleByIndex(index: int): void;

  /**
   * sets the current penstyle
   * @param {string} name - name of penstyle
   * @returns {void}
   */
  public setCurrentPenstyleByName(name: string): void;
}

/**
 * With the Preferences functions, you can retrieve information about the whole preference system. The
 * user can set and retrieve the value of any preferences in the software.
 * The actual name and current value of a preference are in stored in the user configuration file.
 * The file prefs.xml contains a description of all preferences recognized by the application. The
 * keyword to access each predefined preference is also found in that file.
 * Scripts can change or retrieve any existing preference, and may create new preferences.
 * You can use it in Script Editor only.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classpreferences.html}
 * @example
 * function toggleAutoSaveLayout() {
 *     var b;
 *     b = preferences.getBool("AUTO_SAVE_LAYOUT", false);
 *     print("preference to automatically save the layout was " + b);
 *     preferences.setBool("AUTO_SAVE_LAYOUT", !b);
 *     b = preferences.getBool("AUTO_SAVE_LAYOUT", false);
 *     print("preference for auto save layout is now " + b);
 * }
 */
declare class preferences extends SCR_BaseInterface {
  /**
   * @param {QObject} parent
   * @param {char} name
   * @returns {void}
   */
  constructor(parent: QObject, name: char);

  /**
   * get the boolean value from the given preference name
   * @param {string} name
   * @param {boolean} defaultValue
   * @returns {boolean}
   */
  public getBool(name: string, defaultValue: boolean): boolean;

  /**
   * get the color from the given preference name
   * @param {string} name
   * @param {ColorRGBA} defaultValue
   * @returns {ColorRGBA}
   */
  public getColor(name: string, defaultValue: ColorRGBA): ColorRGBA;

  /**
   * get the double value from the given preference name
   * @param {string} name
   * @param {double} defaultValue
   * @returns {double}
   */
  public getDouble(name: string, defaultValue: double): double;

  /**
   * @param {string} name
   * @param {int} defaultValue
   * @returns {double}
   */
  public getEnumValue(name: string, defaultValue: int): double;

  /**
   * get the integer value from the given preference name
   * @param {string} name
   * @param {int} defaultValue
   * @returns {double}
   */
  public getInt(name: string, defaultValue: int): double;

  /**
   * get the string value from the given preference name
   * @param {string} name
   * @param {string} defaultValue
   * @returns {string}
   */
  public getString(name: string, defaultValue: string): string;

  /**
   * get the boolean value for the given preference name
   * @param {string} name
   * @param {boolean} value
   * @returns {void}
   */
  public setBool(name: string, value: boolean): void;

  /**
   * set the color for the given preference name
   * @param {string} name
   * @param {ColorRGBA} color
   * @returns {void}
   */
  public setColor(name: string, color: ColorRGBA): void;

  /**
   * set the double value for the given preference name
   * @param {string} name
   * @param {double} value
   * @returns {void}
   */
  public setDouble(name: string, value: double): void;

  /**
   * @param {string} name
   * @param {int} value
   * @returns {void}
   */
  public setEnumValue(name: string, value: int): void;

  /**
   * set the integer value for the given preference name
   * @param {string} name
   * @param {int} value
   * @returns {void}
   */
  public setInt(name: string, value: int): void;

  /**
   * set the string value for the given preference name
   * @param {string} name
   * @param {string} value
   * @returns {void}
   */
  public setString(name: string, value: string): void;
}

/**
 * The scene JavaScript global object. Retrieve and set global scene attributes, like the aspect ratio
 * of the cells in the scene grid.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classscene.html}
 * @example
 * function setScene() {
 *     // Sets the beginning of the undo/redo command wrapper
 *     scene.beginUndoRedoAccum("Set Scene");
 *
 *     // Sets the aspect ratio of the scene to 4, 3
 *     scene.setUnitsAspectRatio(4, 3);
 *
 *     // Sets the number of units in the scene
 *     scene.setNumberOfUnits(1200, 900, 12);
 *
 *     // Sets the value of the center coordinate
 *     scene.setCoordAtCenter(5000, 5000);
 *
 *     // Terminates the undo/redo command wrapper
 *     scene.endUndoRedoAccum();
 * }
 */
declare class scene extends SCR_BaseInterface {
  /**
   * This function starts the accumulation of all of the functions between it and the endUndoRedoAccum
   * function as one command that will appear in the undo/redo list. If you do not use this function with
   * endUndoRedoAccum, each function in the script generates a separate undo/redo entry.
   * @param {string} commandName
   * @returns {void}
   */
  public beginUndoRedoAccum(commandName: string): void;

  /**
   * This function cancels the accumulation of undo/redo commands. No command will be added to the
   * undo/redo list and all commands that have already been executed will be rolled-back (undone).
   * @returns {void}
   */
  public cancelUndoRedoAccum(): void;

  /**
   * Clear command history.
   * @returns {void}
   */
  public clearHistory(): void;

  /**
   * closes the current scene.
   * Exiting functions Anyone of these is final and absolute. Nothing in the script will be executed
   * after these calls.
   * @returns {void}
   */
  public closeScene(): void;

  /**
   * closes the current scene and exits.
   * @returns {void}
   */
  public closeSceneAndExit(): void;

  /**
   * closes the current scene and open the scene specified by env, job, scene and version
   * @param {string} envName
   * @param {string} jobName
   * @param {string} sceneName
   * @param {string} versionName
   * @returns {boolean}
   */
  public closeSceneAndOpen(
    envName: string,
    jobName: string,
    sceneName: string,
    versionName: string
  ): boolean;

  /**
   * returns the X value of the centre coordinate of the scene grid.
   * @returns {int}
   */
  public coordAtCenterX(): int;

  /**
   * returns the Y value of the centre coordinate of the scene grid.
   * @returns {int}
   */
  public coordAtCenterY(): int;

  /**
   * returns the name of the current environment.
   * @returns {string}
   */
  public currentEnvironment(): string;

  /**
   * returns the name of the current job.
   * @returns {string}
   */
  public currentJob(): string;

  /**
   * Return the current project path.
   * @returns {string}
   */
  public currentProjectPath(): string;

  /**
   * For windows, returns the remapped path.
   * @returns {string}
   */
  public currentProjectPathRemapped(): string;

  /**
   * returns the current preview resolution. For example, when the current resolution is 720x540 pixels
   * this function will return 720.
   * @returns {int}
   */
  public currentResolutionX(): int;

  /**
   * returns the current preview resolution. For example, when the current resolution is 720x540 pixels
   * this function will return 540.
   * @returns {int}
   */
  public currentResolutionY(): int;

  /**
   * returns the name of the current scene.
   * @returns {string}
   */
  public currentScene(): string;

  /**
   * returns the ID of the current version.
   * @returns {int}
   */
  public currentVersion(): int;

  /**
   * returns the name or the number of the current scene version.
   * @returns {string}
   */
  public currentVersionName(): string;

  /**
   * returns the default resolution field of view (FOV). The default FOV is a global scene parameter.
   * @returns {double}
   */
  public defaultResolutionFOV(): double;

  /**
   * returns the default resolution name. The resolution name is a global parameter saved with the
   * project. It may be empty when the project is used as a custom resolution, which is not one of the
   * pre-defined resolutions.
   * @returns {string}
   */
  public defaultResolutionName(): string;

  /**
   * returns the default resolution. This resolution is a global parameter saved with the project, not
   * the current preview resolution. For example, when the default scene resolution is 720x540 pixels
   * this function will return 720.
   * @returns {int}
   */
  public defaultResolutionX(): int;

  /**
   * returns the default resolution. This resolution is a global parameter saved with the project, not
   * the current preview resolution. For example, when the default scene resolution is 720x540 pixels
   * this function will return 540.
   * @returns {int}
   */
  public defaultResolutionY(): int;

  /**
   * This function ends the accumulation all of the functions between it and the beginUndoRedoAccum
   * function as one command that will appear in the undo/redo list. If you do not use this function with
   * beginUndoRedoAccum, each function in the script generates a separate undo/redo entry.
   * @returns {void}
   */
  public endUndoRedoAccum(): void;

  /**
   * converts an OGL coordinate into a field coordinate.
   * @param {QObject} pointOrVector can be either a 2D point or a 3D point or a vector object.
   * @returns {QObject}
   */
  public fromOGL(pointOrVector: QObject): QObject;

  /**
   * returns the model matrix for the default camera.
   * @param {int} frame at which frame
   * @returns {QObject}
   */
  public getCameraMatrix(frame: int): QObject;

  /**
   * retrieves default display set in current scene.
   * @returns {string}
   */
  public getDefaultDisplay(): string;

  /**
   * returns the frame rate, as frame per seconds.
   * @returns {int}
   */
  public getFrameRate(): int;

  /**
   * @returns {QScriptValue}
   */
  public getMetadataList(): QScriptValue;

  /**
   * returns all palettes that were either unrecovered or recovered but not yet saved, depending on the
   * arguments of the function.
   * @param {boolean} unrecovered
   * @param {boolean} recoveredNotYetSaved
   * @returns {StringList}
   */
  public getMissingPalettes(
    unrecovered: boolean,
    recoveredNotYetSaved: boolean
  ): StringList;

  /**
   * returns the list of known resolution
   * @returns {StringList}
   */
  public namedResolutions(): StringList;

  /**
   * returns the named resolution. For example, when the named resolution is 720x540 pixels this function
   * will return 720.
   * @param {string} name
   * @returns {int}
   */
  public namedResolutionX(name: string): int;

  /**
   * returns the named resolution. For example, when the named resolution is 720x540 pixels this function
   * will return 540.
   * @param {string} name
   * @returns {int}
   */
  public namedResolutionY(name: string): int;

  /**
   * returns the number of units in the X axis of the scene grid.
   * @returns {int}
   */
  public numberOfUnitsX(): int;

  /**
   * returns the number of units in the Y axis of the scene grid.
   * @returns {int}
   */
  public numberOfUnitsY(): int;

  /**
   * returns the number of units in the Z axis of the scene grid.
   * @returns {int}
   */
  public numberOfUnitsZ(): int;

  /**
   * redoes the last n operation. If n is not specified, it will be 1
   * @param {int} [depth=1]
   * @returns {void}
   */
  public redo(depth?: int): void;

  /**
   * performs the " save all " command. Effectively, this saves the entire project and all modified
   * files.
   * @returns {boolean}
   */
  public saveAll(): boolean;

  /**
   * saves the project as a new version.
   * @param {string} name The name of the version.
   * @param {boolean} markAsDefault This is boolean to indicate to mark this version as the default version.
   * @returns {boolean}
   */
  public saveAsNewVersion(name: string, markAsDefault?: boolean): boolean;

  /**
   * sets the value of the centre (X, Y) coordinates.
   * @param {int} x
   * @param {int} y
   * @returns {boolean}
   */
  public setCoordAtCenter(x: int, y: int): boolean;

  /**
   * allows the default scene resolution and field of view to be changed.
   * @param {int} x
   * @param {int} y
   * @param {double} fov Set the field of view in degree. Typical value is 41.112.
   * @returns {boolean}
   */
  public setDefaultResolution(x: int, y: int, fov: double): boolean;

  /**
   * This function allows the default scene resolution name to be changed.
   * @param {string} name Set the current resolution preset name to this value.
   * @returns {boolean}
   */
  public setDefaultResolutionName(name: string): boolean;

  /**
   * This function allows the default frame rate of the project to be changed. The frame rate is
   * expressed as frame per second. Typical value is 12, 24 or 30.
   * @param {int} frameRate frame rate
   * @returns {boolean}
   */
  public setFrameRate(frameRate: int): boolean;

  /**
   * sets the number of X, Y, and Z units in the scene grid.
   * @param {int} x
   * @param {int} y
   * @param {int} z
   * @returns {boolean}
   */
  public setNumberOfUnits(x: int, y: int, z: int): boolean;

  /**
   * sets the aspect ratio of the scene. The scene's final aspect ratio will be: X * numberOfUnitsX()/Y *
   * numberOfUnitsY()
   * @param {double} x
   * @param {double} y
   * @returns {boolean}
   */
  public setUnitsAspectRatio(x: double, y: double): boolean;

  /**
   * Return the temporary project path.
   * @returns {string}
   */
  public tempProjectPath(): string;

  /**
   * For windows, returns the remapped temporary project path.
   * @returns {string}
   */
  public tempProjectPathRemapped(): string;

  /**
   * converts a field coordinate into an OGL coordinate
   * @param {QObject} pointOrVector can be either a 2D point or a 3D point or a vector object.
   * @returns {QObject}
   */
  public toOGL(pointOrVector: QObject): QObject;

  /**
   * undoes the last n operation. If n is not specified, it will be 1
   * @param {int} [depth=1]
   * @returns {void}
   */
  public undo(depth?: int): void;

  /**
   * returns the X value of the aspect ratio of the cells in the scene grid.
   * @returns {double}
   */
  public unitsAspectRatioX(): double;

  /**
   * returns the Y value of the aspect ratio of the cells in the scene grid.
   * @returns {double}
   */
  public unitsAspectRatioY(): double;
}

/**
 * Provided for backward compatibility with QSA scripts - provides println and getenv
 * You can use it in both Script Editor and scriptModule.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classSystem.html}
 */
declare class System extends SCR_BaseInterface {
  /**
   * retrieve environment variable
   * @param {string} str
   * @returns {string}
   */
  public getenv(str: string): string;

  /**
   * print string to console
   * @param {string} arg
   * @returns {void}
   */
  public println(arg: string): void;

  /**
   * for event processing in while loops. It can not be accessible from scriptModule
   * @returns {void}
   */
  public processOneEvent(): void;
}

/**
 * The TimelineMarker JavaScript global object. Remove or edit timeline markers.
 * This interface is used to access the functionalities of the Timeline Markers such as
 * create/remove/edit markers.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classTimeLineMarker.html}
 * @example
 * function addMarkerAtFrame(int frame) {
 *     var mLength = 0;
 *     var mColor = "red";
 *     var marker = {
 *         frame: 1,
 *         length: mLength,
 *         color: mColor
 *     };
 *     TimelineMarker.createMarker(marker);
 * }
 */
declare class TimeLineMarker extends SCR_BaseInterface {
  /**
* Creates a marker.
* @param {QScriptValue} marker - The marker to create. A marker object has the following properties:
Property  Type  Description
frame  int  The number of the frame.
length  int  (Optional) The length of the marker.
color  int or String  (Optional) The colour of the marker. Can be an integer RGBA value or a standard W3C colour keyword name in a string.
notes  String  (Optional) Notes for the marker
* @returns {QScriptValue}
*/
  public createMarker(marker: {
    /**
     * The number of the frame.
     */
    frame: int;
    /**
     * (Optional) The length of the marker.
     */
    length: int;
    /**
     * (Optional) The colour of the marker. Can be an integer RGBA value or a standard W3C colour keyword name in a string.
     */
    color: int | string;
    /**
     * (Optional) Notes for the marker
     */
    notes: string;
  }): QScriptValue;

  /**
   * Delete the marker
   * @param {QScriptValue} marker - The marker to delete.
   * @returns {boolean}
   */
  public deleteMarker(marker: QScriptValue): boolean;

  /**
   * Return the all the markers in the current Timeline.
   * @returns {QScriptValue}
   */
  public getMarkers(): QScriptValue;

  /**
   * Modifies a marker with marker object.
   * @param {QScriptValue} marker - The marker object to replace the marker with.
   * @returns {QScriptValue}
   */
  public setMarker(marker: QScriptValue): QScriptValue;
}

/**
 * The UILoader interface allows the user to load pre-defined Qt forms that define Qt widgets
 * (generally built within Qt Designer). This allows users to build complex dialogs, using all of the
 * pre-defined widgets that Qt4.8 supports. See Qt documentation for further details: http://qt-
 * project.org/doc/qt-4.8.
 * This is an example of how to build a dialog using a predefined Qt designer file ( *.ui ) All widgets
 * may be addressed directly, but through nested names. That is, if you have a checkbox inside a tab
 * inside a dialog, you should address the widget as dialog.tab.checkbox Once you've figured out its
 * name, you are allowed to modify all of its properties, plus you have access to both its signals and
 * slots ( as well as its inherited properties, signals and slots )
 * This example and the predefined form are part of the installation, so it can be run in the software
 * to see what it does. Look for lightTableExampleUsingPredefinedUI. It will display a non-modal widget
 * that allows the adjustment of the light table settings in the camera view. Please refer to Qt
 * documentation for the list of accessible widget properties.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classUiloader.html}
 * @example
 * function lightTableExampleUsingPredefineUI()
 *
 * {
 *     this.opacityChanged = function(digitValue) {
 *         this.ui.LightTableOpacityValueLabel.text = digitValue / 256.0;
 *         preferences.setDouble("DRAWING_LIGHTTABLE_OPACITY", digitValue / 256.0);
 *     }
 *
 *     this.washChanged = function(digitValue) {
 *         this.ui.LightTableWashValueLabel.text = digitValue / 256.0;
 *         preferences.setDouble("DRAWING_LIGHTTABLE_WASH", digitValue / 256.0);
 *     }
 *
 *     // Load the ui file (created in Qt designer)
 *     localPath = specialFolders.resource;
 *     System.println(localPath);
 *     localPath += "/forms/lighttable.ui";
 *
 *     //System.println( localPath );
 *     this.ui = UiLoader.load(localPath);
 *     // Show the dialog in non-modal fashion.
 *     ui.show();
 *
 *     // Modify any properties that seem interesting
 *     this.ui.windowTitle = "Light Table Values";
 *     this.ui.LightTableWashValueLabel.text = preferences.getDouble("DRAWING_LIGHTTABLE_OPACITY", 0);
 *     this.ui.LightTableOpacityValueLabel.text = preferences.getDouble("DRAWING_LIGHTTABLE_WASH", 0);
 *     this.ui.LightTableWashLabel.text = "LightTable Wash";
 *     this.ui.LightTableOpacityLabel.text = "LightTable Opacity";
 *     this.ui.LightTableWashSlider.minimun = 0;
 *     this.ui.LightTableWashSlider.maximum = 256;
 *     this.ui.LightTableWashSlider.value = preferences.getDouble("DRAWING_LIGHTTABLE_WASH", 0) * 256;
 *     this.ui.LightTableOpacitySlider.minimun = 0;
 *     this.ui.LightTableOpacitySlider.maximum = 256;
 *     this.ui.LightTableOpacitySlider.value = preferences.getDouble("DRAWING_LIGHTTABLE_OPACITY", 0) * 256;
 *
 *     // Connect the sliders signals to a script defined local slot
 *     ui.LightTableOpacitySlider.valueChanged.connect(this, this.opacityChanged);
 *     ui.LightTableWashSlider.valueChanged.connect(this, this.washChanged);
 *
 * }
 */
declare class Uiloader extends SCR_BaseInterface {
  /**
   * quivalent of QAppliction::exec for those scripts that wish to run their loaded UI as a separate app.
   * @param {QScriptContext} context
   * @param {QScriptEngine} engine
   * @returns {QScriptValue}
   */
  public exec(context: QScriptContext, engine: QScriptEngine): QScriptValue;

  /**
   * Takes a path to a predefined Qt widget form and loads that form.
   * @param {QScriptContext} context
   * @param {QScriptEngine} engine
   * @returns {QScriptValue}
   */
  public load(context: QScriptContext, engine: QScriptEngine): QScriptValue;
}

/**
 * The View functions provide information about the contents of selected View windows.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classview.html}
 * @example
 * function viewScript() {
 *     var myView = view.currentView();
 *     System.println(view.type(myView));
 * }
 */
declare class view extends SCR_BaseInterface {
  /**
   * returns the drawing tool manager.
   * @returns {QObject}
   */
  public currentToolManager(): QObject;

  /**
   * returns a unique identifier for the current, active View.
   * @returns {string}
   */
  public currentView(): string;

  /**
   * forces a refresh of the drawing and scene planning views.
   * @returns {void}
   */
  public refreshViews(): void;

  /**
   * returns a string that indicates what type of View the currentView is.
   * @param {string} viewName The current view value, as returned by the currentView function.
   * @returns {string}
   */
  public type(viewName: string): string;
}

/**
 * Simplified CheckBox widget.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classCheckBox.html}
 */
declare class CheckBox extends SCRIPT_QSWidget {
  /**
   * whether or not the checkbox is checked
   * @returns {boolean}
   */
  checked: boolean;

  /**
   * the text shown alongside the checkbox
   * @returns {string}
   */
  text: string;
}

/**
 * Simplified Dialog widget. This class and the associated widget classes are used to build simple
 * dialogs.
 * You can use it in Script Editor only.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classDialog.html}
 * @example
 *  function sampleDialog() {
 *      var d = new Dialog();
 *      d.title = "Sample Dialog";
 *
 *      var inputL = new LineEdit;
 *      inputL.label = "Sample Line Edit";
 *      d.add(inputL);
 *
 *      if (d.exec()) {
 *          var sampleText = inputL.text;
 *          System.println(" the input text is " + sampleText);
 *      }
 *  }
 */
declare class Dialog extends SCRIPT_QSWidget {
  /**
   * add widgets to the dialog
   * @param {SCRIPT_QSWidget} widget
   * @returns {void}
   */
  public add(widget: SCRIPT_QSWidget): void;

  /**
   * add spacers to the dialog layout
   * @param {int} space
   * @returns {void}
   */
  public addSpace(space: int): void;

  /**
   * run the dialog in modal mode. Pressing ok accepts the dialog input. Pressing cancel cancels the
   * dialog.
   * @returns {boolean}
   */
  public exec(): boolean;

  /**
   * add a new column to the dialog
   * @returns {void}
   */
  public newColumn(): void;

  /**
   * add a new tab to the dialog
   * @param {string} label
   * @returns {void}
   */
  public newTab(label: string): void;

  /**
   * it is the name of the cancel button
   * @returns {string}
   */
  cancelButtonText: string;

  /**
   * it is the (legacy, but we still support it ) title of the dialog
   * @returns {string}
   */
  caption: string;

  /**
   * it is the name of the ok button
   * @returns {string}
   */
  okButtonText: string;

  /**
   * it is the title of the dialog
   * @returns {string}
   */
  title: string;

  /**
   * it is the width of the dialog
   * @returns {int}
   */
  width: int;
}

/**
 * Simplified GroupBox widget.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classGroupBox.html}
 */
declare class GroupBox extends SCRIPT_QSWidget {
  /**
   * add widget to groupBox
   * @param {SCRIPT_QSWidget} widget
   * @returns {void}
   */
  public add(widget: SCRIPT_QSWidget): void;

  /**
   * add a spacer to the groupbox.
   * @param {int} space
   * @returns {void}
   */
  public addSpace(space: int): void;

  /**
   * clear all the widget in the group box
   * @returns {void}
   */
  public clear(): void;

  /**
   * create a newColumn in the groupbox. It will be used by all subsequent add operations.
   * @returns {void}
   */
  public newColumn(): void;

  /**
   * Title of groupBox.
   * @returns {string}
   */
  title: string;
}

/**
 * Simplified Label widget.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classLabel.html}
 */
declare class Label extends SCRIPT_QSWidget {
  /**
   * text shown on label
   * @returns {string}
   */
  text: string;
}

/**
 * Simplified RadioButton widget.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classRadioButton.html}
 */
declare class RadioButton extends SCRIPT_QSWidget {
  /**
   * whether or not the radio button is checked
   * @returns {boolean}
   */
  checked: boolean;

  /**
   * text for label
   * @returns {string}
   */
  text: string;
}

/**
 * Simplified TextEdit widget.
 * {@link https://docs.toonboom.com/help/storyboard-pro-6/storyboard/scripting/reference/classTextEdit.html}
 */
declare class TextEdit extends SCRIPT_QSWidget {
  /**
   * text string shown in the widget
   * @returns {string}
   */
  text: string;
}
