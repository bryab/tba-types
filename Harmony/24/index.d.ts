/// <reference path="../../shared/qtscript.d.ts" />

/**
 * Undocumented types (FIXME)
 */
declare class BAPP_SpecialFolders {}
declare class GlobalObject {}
declare class QScriptable {}
declare class SCRIPT_QSWidget extends QWidget {}
declare class Labeled extends QWidget {}
declare class MO_SignalEmitter extends QWidget {}
declare class SCR_AbstractInterface {}
declare type QScriptContext = any;
declare type QScriptEngine = any;
declare type QScriptValue = any;
declare type DD_DragObject = any;

declare class UI_DialogController {}

/**
 * The path to the current .js file being run.
 * @example
 * var currentFilePath = __file__; Result: /path/to/file.js
 */
declare var __file__: string;

/**
 * The name of the current .js file being run.
 * @example
 * var currentFileName = __FILE__; Result: file.js
 */
declare var __FILE__: string;

/**
 * DrawingKey
 * Using in the 'Drawing' class, but all of its properties are unknown to me (FIXME)
 */
declare interface DrawingKey {
  [key: string]: any;
  isValid?: boolean;
}

/**
 *  The properties of this interface are not documented in full (FIXME)
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/extended/module-Drawing_Text_.html}
 */
declare interface TextLayer {
  id?: number;
  text?: string;
  fontsize?: number;
  x?: number;
  y?: number;
  colorId?: number;
  fontId?: string;
  alignment: string;
  colorMatrix?: object;
  width?: number;
  underLayer?: number;
}

//Unknown types in Harmony 24
type TUSceneChangeManager = any;

// A few Qt6 types referenced in the documentation - Qt defs are currently based on Qt4

type QProcessEnvironment = any;

/**
 * The CELIO JavaScript global object. Provide information about image file.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classCELIO.html}
 */
declare namespace CELIO {
  /**
   * Returns information about the resolution of an image file.
   * @param {string} path
   * @returns {QScriptValue}
   */
  function getInformation(path: string): QScriptValue;

  /**
   * Returns information about the resolution of an image file. Will also return the layer information if
   * withLayer argument is true.
   * @param {string} path
   * @param {boolean} withLayers
   * @returns {QScriptValue}
   */
  function getInformation(path: string, withLayers: boolean): QScriptValue;

  /**
   * @param {string} filename Path to the image file.
   * @returns {QScriptValue}
   */
  function getLayerGroupInformation(filename: string): QScriptValue;

  /**
   * Returns an array describing each layer of a multi-layer image. Currently, only the PSD has multi-
   * layer information.
   * @param {string} path
   * @returns {QScriptValue}
   */
  function getLayerInformation(path: string): QScriptValue;

  /**
   * Create a multi-layer grouped file from a hierarchical data structure of groups, sub-groups, and
   * layers.
   * @param {string} format The format of the output file (e.g.: "psd")
   * @param {string} options The format related options (e.g.: for 'psd', this could be "PSD3", "PSD4", "PSD1", "PSDDP4", "PSDDP3")
   * @param {QScriptValue} groupArray An array of Drawing and Group objects. A Group object should have a 'name' string property and a 'children' property that is an array of sub items. A Drawing object should have a 'name' string property and a 'file' string property.
   * @param {string} outputFile The full path to the output file.
   * @param {int} [dpi=72] optional Dots per Inches (aka Pixels per Inches) to override the default of 72, range from 1 to 20,000
   * @returns {boolean}
   * @example
   * var items = [{
   *             name: 'firstGroup',
   *             children: [{
   *                     name: 'a_sub_group',
   *                     children: [getMoreRecuriveSubGroups(), {
   *                         name: '1',
   *                         file: '/path/to/file-a-sub-1.png'
   *                     }]
   *                 }, {
   *                     name: '1',
   *                     file: '/path/to/file-1.png'
   *                 }, {
   *                     name: 'two',
   *                     file: /path/to / file - two.psd ' }
   *                 ]
   *             },
   *             {
   *                 name: 'secondGroup',
   *                 children: [{
   *                     name: 'foo',
   *                     file: '/path/to/foo.png'
   *                 }]
   *             },
   *             {
   *                 name: 'bar',
   *                 file: '/path/to/bar.png'
   *             }
   *         ];
   *         var result = CELIO.writeLayeredFile('psd', 'PSD4', items, '/path/to/output.psd');
   */
  function writeLayeredFile(
    format: string,
    options: string,
    groupArray: QScriptValue,
    outputFile: string,
    dpi?: int
  ): boolean;
}

/**
 * The about JavaScript global object. Provides information about the main application and the platform
 * on which the script is running.
 * The about class allows querying of platform and application specific constants.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classabout.html}
 * @example
 * function printAbout() {
 *     // Application: full, demo or educational
 *     MessageLog.trace("Full (commercial) version: " + about.fullVersion);
 *     MessageLog.trace("Demo version: " + about.demoVersion);
 *     MessageLog.trace("Educational version: " + about.educVersion);
 *     MessageLog.trace("Harmony product : " + about.harmony);
 *
 *     // Software/Product
 *     MessageLog.trace("Windows architecture: " + about.windowsArch);
 *     MessageLog.trace("OSX architecture: " + about.macArch);
 *     MessageLog.trace("OSX PowerPC architecture: " + about.macPpcArch);
 *     MessageLog.trace("OSC Intel architecture: " + about.macIntelArch);
 *     MessageLog.trace("Linux architecture: " + about.linuxArch);
 *     MessageLog.trace("Interactive: " + about.interactiveApp);
 *
 *     // Architecture
 *     MessageLog.trace("Harmony mode: " + about.mainApp);
 *     MessageLog.trace("Paint mode: " + about.paintMode);
 *     MessageLog.trace("XSheet mode: " + about.xsheetMode);
 *
 *     // Type of Application
 *     MessageLog.trace("Scan application: " + about.scanApp);
 *     MessageLog.trace("ControlCenter application: " + about.controlCenterApp);
 *     MessageLog.trace("Application path: " + about.applicationPath);
 * }
 */
declare namespace about {
  /**
   * Returns the application. Identical to property "applicationPath".
   * @returns {string}
   */
  function getApplicationPath(): string;

  /**
   * Returns the folder where the binaries can be found.
   * @returns {string}
   */
  function getBinaryPath(): string;

  /**
   * Returns the build number.
   * @returns {int}
   */
  function getBuildNumber(): int;

  /**
   * Returns a string that represents the flavor of the application. e.g. Harmony.
   * @returns {string}
   */
  function getFlavorString(): string;

  /**
   * Returns the major version number.
   * @returns {int}
   */
  function getMajorVersion(): int;

  /**
   * Returns the minor version number.
   * @returns {int}
   */
  function getMinorVersion(): int;

  /**
   * Returns the patch version number.
   * @returns {int}
   */
  function getPatchVersion(): int;

  /**
   * Returns the folder where the resources can be found.
   * @returns {string}
   */
  function getResourcesPath(): string;

  /**
   * Returns the user name.
   * @returns {string}
   */
  function getUserName(): string;

  /**
   * Returns the version info string.
   * @returns {string}
   */
  function getVersionInfoStr(): string;

  /**
   * Returns true whenever the application running application is ControlCenter.
   * @returns {boolean}
   */
  function isControlCenterApp(): boolean;

  /**
   * Returns true when the application is in Database mode.
   * @returns {boolean}
   */
  function isDatabaseMode(): boolean;

  /**
   * Returns true whenever this application is a Demo variant.
   * @returns {boolean}
   */
  function isDemoVersion(): boolean;

  /**
   * Returns true whenever this application is an Educational variant.
   * @returns {boolean}
   */
  function isEducVersion(): boolean;

  /**
   * Returns true whenever this application is a Commercial/Full variant.
   * @returns {boolean}
   */
  function isFullVersion(): boolean;

  /**
   * Returns true when running Game Storyboard.
   * @returns {boolean}
   */
  function isGameStoryboard(): boolean;

  /**
   * Returns true when running Game Studio.
   * @returns {boolean}
   */
  function isGameStudio(): boolean;

  /**
   * Returns true when connected to a database or when compiled with Harmony.
   * @returns {boolean}
   */
  function isHarmony(): boolean;

  /**
   * Returns true whenever this application is interactive. All application capable of running scripts
   * are interactive.
   * @returns {boolean}
   */
  function isInteractiveApp(): boolean;

  /**
   * Returns true when running on Linux.
   * @returns {boolean}
   */
  function isLinuxArch(): boolean;

  /**
   * Returns true when running on MacOS.
   * @returns {boolean}
   */
  function isMacArch(): boolean;

  /**
   * Returns true when running on an Apple OS X operating system or when on Mac Intel.
   * @returns {boolean}
   */
  function isMacIntelArch(): boolean;

  /**
   * Returns true when running on an Apple OS X operating system or when on Mac PowerPC.
   * @returns {boolean}
   */
  function isMacPpcArch(): boolean;

  /**
   * Returns true when the application is Harmony or Storyboard, and not a peripheral application.
   * @returns {boolean}
   */
  function isMainApp(): boolean;

  /**
   * Returns true when the application is in Paint mode.
   * @returns {boolean}
   */
  function isPaintMode(): boolean;

  /**
   * Returns true when the application running is Scan.
   * @returns {boolean}
   */
  function isScanApp(): boolean;

  /**
   * Returns true whenever the application running is Stage.
   * @returns {boolean}
   */
  function isStage(): boolean;

  /**
   * Returns true whenever the application running is an Advanced variant.
   * @returns {boolean}
   */
  function isStageAdvanced(): boolean;

  /**
   * Returns true whenever the application running is an Essentials variant.
   * @returns {boolean}
   */
  function isStageEssentials(): boolean;

  /**
   * Returns true when running Storyboard.
   * @returns {boolean}
   */
  function isStoryboard(): boolean;

  /**
   * Returns true when running on Windows.
   * @returns {boolean}
   */
  function isWindowsArch(): boolean;

  /**
   * Returns true when the application is in Xsheet mode.
   * @returns {boolean}
   */
  function isXsheetMode(): boolean;

  /**
   * returns a string that is the name of application.
   * @returns {string}
   */
  function productName(): string;

  /**
   * See isStageAdvanced().
   * @returns {boolean}
   */
  var advanced: boolean;

  /**
   * Application with GUI folder (different than binFolder on Mac, same for all other platforms).
   * @returns {string}
   */
  var applicationPath: string;

  /**
   * See getBinaryPath().
   * @returns {string}
   */
  var binaryPath: string;

  /**
   * See getBuildNumber.
   * @returns {int}
   */
  var buildNumber: int;

  /**
   * See isControlCenterApp().
   * @returns {boolean}
   */
  var controlCenterApp: boolean;

  /**
   * See isDatabaseMode().
   * @returns {boolean}
   */
  var databaseMode: boolean;

  /**
   * See isDemoVersion().
   * @returns {boolean}
   */
  var demoVersion: boolean;

  /**
   * See isEducVersion().
   * @returns {boolean}
   */
  var educVersion: boolean;

  /**
   * See isStageEssentials().
   * @returns {boolean}
   */
  var essentials: boolean;

  /**
   * See isFullVersion().
   * @returns {boolean}
   */
  var fullVersion: boolean;

  /**
   * See isHarmony().
   * @returns {boolean}
   */
  var harmony: boolean;

  /**
   * See isInteractiveApp().
   * @returns {boolean}
   */
  var interactiveApp: boolean;

  /**
   * See isLinuxArch().
   * @returns {boolean}
   */
  var linuxArch: boolean;

  /**
   * See isMacArch().
   * @returns {boolean}
   */
  var macArch: boolean;

  /**
   * See isMacIntelArch().
   * @returns {boolean}
   */
  var macIntelArch: boolean;

  /**
   * See isMacIntelArch().
   * @returns {boolean}
   */
  var macPpcArch: boolean;

  /**
   * See isMainApp().
   * @returns {boolean}
   */
  var mainApp: boolean;

  /**
   * See getMajorVersion.
   * @returns {int}
   */
  var majorVersion: int;

  /**
   * See getMinorVersion.
   * @returns {int}
   */
  var minorVersion: int;

  /**
   * See isPaintMode().
   * @returns {boolean}
   */
  var paintMode: boolean;

  /**
   * See getPatchVersion.
   * @returns {int}
   */
  var patchVersion: int;

  /**
   * See getResourcesPath().
   * @returns {string}
   */
  var resourcesPath: string;

  /**
   * See isScanApp().
   * @returns {boolean}
   */
  var scanApp: boolean;

  /**
   * See isStage().
   * @returns {boolean}
   */
  var stage: boolean;

  /**
   * See isStoryboard().
   * @returns {boolean}
   */
  var storyboard: boolean;

  /**
   * See getUserName().
   * @returns {string}
   */
  var userName: string;

  /**
   * See isWindowsArch().
   * @returns {boolean}
   */
  var windowsArch: boolean;

  /**
   * See isXsheetMode().
   * @returns {boolean}
   */
  var xsheetMode: boolean;
}

/**
 * The Action JavaScript global object. Trigger action associated to menu or tool bar items.
 * Call either global actions or actions associated to a specific responder.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classAction.html}
 * @example
 * function callAbout() {
 *     // Call the global action onActionAbout() which will show the About dialog.
 *     Action.perform("onActionAbout()");
 * }
 *
 * function callDisable3DSubnode() {
 *     // Validate if the action is available right now. In this example, it will fail if no subnode is selected.
 *     if (Action.validate("onActionHideSubNode()", "graph3dresponder").isEnabled) {
 *         // Call the hide subnode action from the 3D Graph menu (or toolbar).
 *         Action.perform("onActionHideSubNode()", "graph3dresponder");
 *     }
 * }
 */
declare namespace Action {
  /**
   * Retrieve the list of actions for a given responder.
   * Example usage:
   * @param {string} responder responder identity to investigate.
   * @returns {StringList}
   * @example
   * var aList = Action.getActionList("Node View");
   * for (var i = 0; i < aList.length; ++i) {
   *     MessageLog.trace("availableAction=" + aList[i]);
   * }
   */
  function getActionList(responder: string): StringList;

  /**
   * Retrieve the list of responder names.
   * Example usage:
   * @returns {StringList}
   * @example
   * var rList = Action.getResponderList();
   * for (var i = 0; i < rList.length; ++i) {
   *     MessageLog.trace("ResponderIdentity=" + rList[i]);
   * }
   */
  function getResponderList(): StringList;

  /**
   * Perform the requested action (slot - menu item, toolbar item,...)
   * Perform the requested action for the main application responder. If the main responder doesn't own
   * the requested action, try to use the current view with focus as the responder.
   * @param {string} slot The action function name (ex: onMyAction()).
   * @returns {void}
   * @example
   * Action.perform("onActionAbout()");
   */
  function perform(slot: string): void;

  /**
   * Perform the requested action (slot - menu item, toolbar item,...)
   * Perform the requested action for a specific responder.
   * @param {string} slot The action function name (ex: onMyAction()).
   * @param {string} responder The responder to the function name (ex: drawingView).
   * @returns {void}
   * @example
   * Action.perform("onActionToggleApplyToolToAllLayers()", "drawingView");
   */
  function perform(slot: string, responder: string): void;

  /**
   * Execute an action using the action manager on the given responder with parameters.
   * Example usage:
   * @param {string} slot action to execute. See Action.getActionList() for action list.
   * @param {string} responder command target. See Action.getResponderList() for responder list.
   * @param {QVariant} parameters action parameter(s). Use an array [] to provide multiple action parameters.
   * @returns {void}
   * @example
   * Action.perform("onActionShowDeformer(String)", "miniPegModuleResponder", "Top/Deformation-Drawing");
   */
  function perform(slot: string, responder: string, parameters: QVariant): void;

  /**
   * Execute an action using the action manager on all responder instances.
   * Example usage:
   * @param {string} slot action to execute. See Action.getActionList() for action list.
   * @param {string} responder command target. See Action.getResponderList() for responder list.
   * @returns {void}
   * @example
   * Action.perform("onActionFocusOnSelectionNV()", "Node View");
   */
  function performForEach(slot: string, responder: string): void;

  /**
   * Validate the requested action (slot - menu item, toolbar item,...)
   * Validate the requested action for the main application responder. If the main responder doesn't own
   * the requested action, try to use the current view with focus as the responder.
   * @param {string} slot The action function name(ex : onMyAction()).
   * @returns {QVariant}
   * @example
   * var validateData = Action.validate("onActionAbout()");
   */
  function validate(slot: string): QVariant;

  /**
   * Validate the requested action (slot - menu item, toolbar item,...)
   * Validate the requested action for a specific responder.
   * @param {string} slot The action function name (ex: onMyAction()).
   * @param {string} responder The responder to the function name (ex: drawingView).
   * @returns {QVariant}
   * @example
   * // Toggle on the Apply Tool to Line and Colour Art option only if it's off.
   * var validateData = Action.validate("onActionToggleApplyToolToAllLayers()", "drawingView");
   * if (!validateData.checked)
   *     Action.perform("onActionToggleApplyToolToAllLayers()", "drawingView");
   */
  function validate(slot: string, responder: string): QVariant;
}

/**
 * The Backdrop JavaScript global object. Get, set and add backdrops.
 * The Backdrop methods sometimes use backdrop JavaScript objects which are described as follows:
 * Color is a integer representation of a RGBA value. It can be obtained with the following
 * computation.
 * Here's an example demonstrating how to customize a backdrop
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classBackdrop.html}
 * @example
 * {
 *     "position": {
 *         "x": -1030,
 *         "y": -1191,
 *         "w": 376,
 *         "h": 284
 *     },
 *     "title": {
 *         "text": "HAIR",
 *         "color": 4278190080,
 *         "size": 14,
 *         "font": "Arial"
 *     },
 *     "description": {
 *         "text": "This backdrop include all the modules of hair.\n",
 *         "color": 4278190080,
 *         "size": 14,
 *         "font": "Arial"
 *     },
 *     "color": 4286859713
 * }
 */
declare namespace Backdrop {
  /**
   * Adds a single backdrop. The new backdrop is displayed on top of all the others.
   * @param {string} groupPath The full qualified group node path.
   * @param {QScriptValue} backdrop A backdrop JavaScript object, as described in the Backdrop class description.
   * @returns {QScriptValue}
   * @example
   * var myBackdrop = {
   *     "position": {
   *         "x": -100,
   *         "y": -100,
   *         "w": 300,
   *         "h": 300
   *     },
   *     "title": {
   *         "text": "My Title",
   *         "color": fromRGBAtoInt(255, 100, 100, 255),
   *         "size": 14,
   *         "font": "Arial"
   *     },
   *     "description": {
   *         "text": "This is a new backdrop that will include the node covered by its area.\n",
   *         "color": fromRGBAtoInt(100, 255, 100, 255),
   *         "size": 14,
   *         "font": "Arial"
   *     },
   *     "color": fromRGBAtoInt(100, 100, 0, 255)
   * };
   *
   * Backdrop.addBackdrop("Top/MyGroup", myBackdrop);
   */
  function addBackdrop(groupPath: string, backdrop: QScriptValue): QScriptValue;

  /**
   * Returns the backdrops of a group.
   * This method returns an array of JavaScript objects where each object represent a single backdrop.
   * Since backdrop do not have keys/unique ID, all backdrops are returned in the order they are defined
   * in the group. The group node's path must be provided as input.
   * @param {string} groupPath The full qualified group node path.
   * @returns {QScriptValue}
   */
  function backdrops(groupPath: string): QScriptValue;

  /**
   * Returns true if a node is contained in the backdrop.
   * @param {QScriptValue} backdrop The backdrop object, provided from Backdrop.backdrops( groupPath ).
   * @param {QScriptValue} node The node or nodes to search for within the backdrop.
   * @returns {boolean}
   */
  function contains(backdrop: QScriptValue, node: QScriptValue): boolean;

  /**
   * Provides a list of all nodes contained within a backdrop.
   * @param {QScriptValue} backdrop The backdrop object, provided from Backdrop.backdrops( groupPath ).
   * @returns {QScriptValue}
   */
  function nodes(backdrop: QScriptValue): QScriptValue;

  /**
   * Removes a single backdrop.
   * @param {QScriptValue} backdrop A backdrop JavaScript object, as described in the Backdrop class description.
   * @returns {boolean}
   */
  function removeBackdrop(backdrop: QScriptValue): boolean;

  /**
   * Removes a single backdrop.
   * @param {string} groupPath
   * @param {uint} idx Remove the backdrop at the given index in the group's backdrop list.
   * @returns {boolean}
   */
  function removeBackdrop(groupPath: string, idx: uint): boolean;

  /**
   * Sets the backdrops for the specified group.
   * This replaces all the backdrops in the group. The backdrop is in the format as the array returned by
   * 'Backdrop.backdrops(groupPath). The code will parse the JavaScript object, as described in the
   * Backdrop class description.
   * @param {string} groupPath The full qualified group node path.
   * @param {QScriptValue} backdrops An array of backdrop objects or a single backdrop object. See the Backdrop class description for information on the backdrop object.
   * @returns {boolean}
   */
  function setBackdrops(groupPath: string, backdrops: QScriptValue): boolean;
}

/**
 * The column JavaScript global object. Retrieve add or remove values from columns in your scene.
 * The function below prints information about each column in your scene. For example, one line of
 * output may be ' element = 2 drawingcolumn (DRAWING) myColumn myElement'.
 * The function below adds a new annotation column to the XSheet, and moves it to the left most
 * position.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classcolumn.html}
 * @example
 * function printColumnInfo() {
 *     n = column.numberOf();
 *     MessageLog.trace("Columns");
 *     for (i = 0; i < n; ++i) {
 *         var line;
 *         var name = column.getName(i);
 *         var displayName = column.getDisplayName(name);
 *         var type = column.type(name);
 *         var line = i + " " + name + "(" + type + ")  " + displayName;
 *         if (type == "DRAWING")
 *             line += " element = " +
 *             column.getElementIdOfDrawing(name);
 *         MessageLog.trace(line);
 *     }
 * }
 */
declare namespace column {
  /**
   * Adds a column with the specified name and type.
   * Example usage:
   * @param {string} columnName The name of the column
   * @param {string} columnType The type of column you want to add. You can add any of the following: DRAWING, SOUND, 3DPATH, BEZIER, EASE, EXPR (for expression), TIMING, QUARTERNION, ANNOTATION and FILE_LIBRARY.
   * @param {string} [position=tr("BOTTOM")] Unused.
   * @returns {boolean}
   * @example
   * column.add("ATV-0000000000000501", "FILE_LIBRARY");
   */
  function add(
    columnName: string,
    columnType: string,
    position?: string
  ): boolean;

  /**
   * Adds a key drawing exposure at the specified frame in the specified column.
   * @param {string} columnName The name of the drawing column.
   * @param {int} frame The frame number.
   * @returns {boolean}
   */
  function addKeyDrawingExposureAt(columnName: string, frame: int): boolean;

  /**
   * Removes a keyframe from a cell in a column.
   * @param {string} columnName The name of the column.
   * @param {double} atFrame The frame number where you want to clear the keyframe.
   * @returns {boolean}
   */
  function clearKeyFrame(columnName: string, atFrame: double): boolean;

  /**
   * Returns the column marker interface for the given column.
   * @param {string} columnName The name of the column for which to get the column marker.
   * @returns {columnMarkers}
   */
  function columnMarkers(columnName: string): columnMarkers;

  /**
   * Creates an empty drawing in the specified column.
   * @param {string} columnName The name of the drawing column.
   * @param {string} timing The timing as shown in the xsheet.
   * @returns {boolean}
   */
  function createDrawing(columnName: string, timing: string): boolean;

  /**
   * Deletes the drawing at the specified frame in the specified column.
   * @param {string} columnName The name of the drawing column.
   * @param {int} frame The frame number.
   * @returns {boolean}
   */
  function deleteDrawingAt(columnName: string, frame: int): boolean;

  /**
   * Duplicates the drawing at the specified frame in the specified column.
   * @param {string} columnName The name of the drawing column.
   * @param {int} frame The frame number.
   * @returns {boolean}
   */
  function duplicateDrawingAt(columnName: string, frame: int): boolean;

  /**
   * Fill with previous exposed drawings for the given range of frame.
   * @param {string} columnName The name of the drawing column.
   * @param {int} startFrame The starting frame.
   * @param {int} endFrame The ending frame, just after the last filled frame.
   * @returns {boolean}
   */
  function fillEmptyCels(
    columnName: string,
    startFrame: int,
    endFrame: int
  ): boolean;

  /**
   * Generate a unique anonymous name in the "ATV-XXXXXXXXXXXXXXXX" format, which can be used in
   * conjunction with column.add() to prevent name collisions.
   * Example usage:
   * @returns {string}
   * @example
   * var colName = column.generateAnonymousName();
   */
  function generateAnonymousName(): string;

  /**
   * Returns a timing created for the given column at the given frame.
   * @param {string} columnName The name of the drawing column.
   * @param {double} forFrame The desired frame to generate a timing for.
   * @param {boolean} fileExists True if the file exists already.
   * @returns {string}
   */
  function generateTiming(
    columnName: string,
    forFrame: double,
    fileExists: boolean
  ): string;

  /**
   * Returns the colour for the given column.
   * @param {string} columnName The name of the column.
   * @returns {ColorRGBA}
   */
  function getColorForXSheet(columnName: string): ColorRGBA;

  /**
   * Retrieves the list of names of timing columns of the given type.
   * @param {string} type The type of column string,i.e."DRAWING".
   * @returns {StringList}
   */
  function getColumnListOfType(type: string): StringList;

  /**
   * Retrieves the current version of a timing.
   * @param {string} columnName The name of the drawing column.
   * @param {string} timingName The timing as shown in the xsheet.
   * @returns {int}
   */
  function getCurrentVersionForDrawing(
    columnName: string,
    timingName: string
  ): int;

  /**
   * Returns the displayable name (similar to the one displayed in the xsheet view) of a column.
   * @param {string} columnName The name of the column.
   * @returns {string}
   */
  function getDisplayName(columnName: string): string;

  /**
   * Retrieves the list of names of drawing timing columns.
   * @returns {StringList}
   */
  function getDrawingColumnList(): StringList;

  /**
   * Returns the drawing name for the specified column at the specified frame.
   * @param {string} columnName The name of the column.
   * @param {int} frame The frame number.
   * @returns {string}
   */
  function getDrawingName(columnName: string, frame: int): string;

  /**
   * Retrieves the list of timings used in a drawing column.
   * @param {string} columnName The name of the column.
   * @returns {StringList}
   */
  function getDrawingTimings(columnName: string): StringList;

  /**
   * Returns a list of all drawing types used in the drawing column. K = key drawings, I = inbetween, B =
   * breakdown.
   * @param {string} columnName The name of the column.
   * @param {double} atFrame The frame number.
   * @returns {string}
   */
  function getDrawingType(columnName: string, atFrame: double): string;

  /**
   * Returns the element id associated with a drawing column.
   * @param {string} columnName The name of the column.
   * @returns {int}
   */
  function getElementIdOfDrawing(columnName: string): int;

  /**
* Returns the value of a cell in a column.
* @param {string} columnName name of column
* @param {int} subColumnIndex The index of the sub-column. Only 3D Path columns support sub-column. They have sub-columns for the X, Y, Z and velocity values on the 3D Path. Each sub-column has an index:
X = 1
Y = 2
Z = 3
Velocity = 4
* @param {double} atFrame The frame number that you want to retrieve the value from.
* @returns {string}
*/
  function getEntry(
    columnName: string,
    subColumnIndex: int,
    atFrame: double
  ): string;

  /**
   * Returns the annotation image for a given column, for the range of frames requested. The returned
   * image is filled to include empty frames, so it can be easily aligned by client scripts.
   * @param {string} columnName Name of the column.
   * @param {int} startFrame The starting frame.
   * @param {int} nbFrames The desired length.
   * @returns {QImage}
   */
  function getImageBlock(
    columnName: string,
    startFrame: int,
    nbFrames: int
  ): QImage;

  /**
   * Returns the unique identifier that names the column. This is not the display name shown in the
   * xsheet.
   * @param {int} columnNumber This is an integer that represents the numerical value of the column. This integer is between 0 and column.numberOf.
   * @returns {string}
   */
  function getName(columnNumber: int): string;

  /**
   * Returns the next key drawing in a drawing column.
   * @param {string} columnName The name of the column.
   * @param {int} startFrame This is the frame number that specifies the search start point.
   * @returns {int}
   */
  function getNextKeyDrawing(columnName: string, startFrame: int): int;

  /**
   * Returns the column's position in the XSheet View.
   * This is between 0 and column.numberOf()-1, and is different than the column's index.
   * @param {string} columnName The name of the column to get the position of.
   * @returns {int}
   */
  function getPos(columnName: string): int;

  /**
   * Returns the expression text in the identified column.
   * @param {string} columnName The name of the column.
   * @returns {string}
   */
  function getTextOfExpr(columnName: string): string;

  /**
   * Returns an object containing timesheet values for the column and frame requested. That object will
   * have those properties: displayText, heldFrame, emptyCell, isCtrlPnt, isSymbol.
   * @param {string} columnName name of the column.
   * @param {int} subColumn The number value of the sub-column. This only exists in the case of 3D Path columns, which include a group of sub-columns for the X, Y, Z and velocity values on the 3D Path. Each sub-column has a number: X=1 Y=2 Z=3 Velocity = 4
   * @param {double} atFrame The frame number.
   * @returns {QScriptValue}
   */
  function getTimesheetEntry(
    columnName: string,
    subColumn: int,
    atFrame: double
  ): QScriptValue;

  /**
   * Import a sound file in the specified column at the specified frame. This function returns a Boolean
   * indicating the success of the operation.
   * @param {string} columnName The name of the column.
   * @param {int} atFrame The frame number.
   * @param {string} soundFilePath The path to the sound file.
   * @returns {boolean}
   */
  function importSound(
    columnName: string,
    atFrame: int,
    soundFilePath: string
  ): boolean;

  /**
* Returns true or false indicating if a cell in a column is a keyframe.
* @param {string} columnName name of column
* @param {int} subColumn The number value of the sub-column. This only exists in the case of 3D Path columns, which include a group of sub-columns for the X, Y, Z and velocity values on the 3D Path. Each sub-column has a number:
X = 1
Y = 2
Z = 3
Velocity = 4
* @param {double} atFrame The frame number that you want to retrieve the value from.
* @returns {boolean}
*/
  function isKeyFrame(
    columnName: string,
    subColumn: int,
    atFrame: double
  ): boolean;

  /**
   * Fills the drawings from startFrame to startFrame+nbFrames with drawing duplicates named with a
   * prefix.
   * @param {string} columnName The name of the column.
   * @param {int} startFrame The starting frame.
   * @param {int} nbFrames The desired length.
   * @param {string} prefix The desired prefix.
   * @param {boolean} keyFramesOnly It will perform this operation only on drawings marked as "K" if keyOnly is true.
   * @returns {boolean}
   */
  function lineTestFill(
    columnName: string,
    startFrame: int,
    nbFrames: int,
    prefix: string,
    keyFramesOnly: boolean
  ): boolean;

  /**
   * Sets the column at position columnFrom to position columnTo.
   * Retrieve the position of a column with getPos(). The position of a column is not the same as it's
   * index.
   * @param {int} columnFrom The position of the column you want to move in the XSheet.
   * @param {int} columnTo The position the column will be moved to.
   * @returns {void}
   */
  function move(columnFrom: int, columnTo: int): void;

  /**
   * Returns the number of columns in the scene.
   * @returns {int}
   */
  function numberOf(): int;

  /**
   * Removes duplicate key drawing exposure at the specified frame in the specified column.
   * @param {string} columnName The name of the drawing column.
   * @param {int} frameNumber The frame number.
   * @returns {boolean}
   */
  function removeDuplicateKeyDrawingExposureAt(
    columnName: string,
    frameNumber: int
  ): boolean;

  /**
   * Removes a key drawing exposure at the specified frame in the specified column.
   * @param {string} columnName The name of the drawing column.
   * @param {int} frame The frame number.
   * @returns {boolean}
   */
  function removeKeyDrawingExposureAt(columnName: string, frame: int): boolean;

  /**
   * removes the sound column called name from the scene
   * @param {string} columnName The name of the column.
   * @returns {boolean}
   */
  function removeSoundColumn(columnName: string): boolean;

  /**
   * Removes an unlinked function column called name from the scene.
   * In order to unlink the function column from it's module, use node.unlinkAttr on it first.
   * @param {string} columnName The name of the column.
   * @returns {boolean}
   */
  function removeUnlinkedFunctionColumn(columnName: string): boolean;

  /**
   * Renames the specified column.
   * @param {string} oldName The original name of the column you want to change.
   * @param {string} newName The new name of the column.
   * @returns {boolean}
   */
  function rename(oldName: string, newName: string): boolean;

  /**
   * Renames the specified drawing to the new name, in the specified column.
   * @param {string} columnName The name of the drawing column.
   * @param {string} oldTiming The old timing as shown in the xsheet.
   * @param {string} newTiming The desired timing as shown in the xsheet.
   * @returns {boolean}
   */
  function renameDrawing(
    columnName: string,
    oldTiming: string,
    newTiming: string
  ): boolean;

  /**
   * Prepends the prefix to the drawing name in the specified column.
   * @param {string} columnName The name of drawing the column.
   * @param {string} oldTiming The old timing as shown in the xsheet.
   * @param {string} prefix The new prefix.
   * @returns {boolean}
   */
  function renameDrawingWithPrefix(
    columnName: string,
    oldTiming: string,
    prefix: string
  ): boolean;

  /**
   * Resests the colour for an Xsheet column.
   * Ex. resets a pure RED colour object and sets this colour to the column name Drawing
   * @param {string} columnName The name of the column.
   * @returns {void}
   * @example
   * var colId = node.linkedColumn(nodeName, "DRAWING.ELEMENT");
   * column.resetColorForXSheet(colId);
   */
  function resetColorForXSheet(columnName: string): void;

  /**
   * Returns the name of the selected column in the XSheet view, including annotation columns.
   * @returns {string}
   */
  function selected(): string;

  /**
   * Sets the colour for an Xsheet column.
   * Ex. create a pure RED colour object and sets this colour to the column name Drawing
   * @param {string} columnName The name of the column.
   * @param {ColorRGBA} color A colour object of type Color.
   * @returns {void}
   * @example
   * var c = new ColorRGBA(255, 0, 0);
   * column.setColorForXSheet("Drawing", c);
   */
  function setColorForXSheet(columnName: string, color: ColorRGBA): void;

  /**
   * Sets the Drawing type at frame f from column col to be newType.
   * K = key drawings, I = inbetween, B = breakdown
   * @param {string} columnName The name of the column.
   * @param {double} atFrame The frame number.
   * @param {string} drawingType K = key drawings, I = inbetween, B = breakdown.
   * @returns {void}
   */
  function setDrawingType(
    columnName: string,
    atFrame: double,
    drawingType: string
  ): void;

  /**
   * Links an empty Drawing column to an element.
   * @param {string} columnName The name of the column.
   * @param {int} elementId The id of the element you want to link to the column.
   * @returns {boolean}
   */
  function setElementIdOfDrawing(columnName: string, elementId: int): boolean;

  /**
   * Sets the value of a cell in a column.
   * Example usage:
   * @param {string} columnName The name of the column
   * @param {int} subColumn The number value of the sub-column. This only exists in the case of 3D Path columns, which include a group of sub-columns for the X, Y, Z and velocity values on the 3D Path. Each sub-column has a number: X=1 Y=2 Z=3 Velocity = 4
   * @param {double} atFrame The frame number that you want to retrieve the value from.
   * @param {string} value the new value
   * @returns {boolean}
   * @example
   * column.setEntry("ATV-0000000000000501", 1, 1, "scripts");
   */
  function setEntry(
    columnName: string,
    subColumn: int,
    atFrame: double,
    value: string
  ): boolean;

  /**
   * Makes a cell in a column a keyframe.
   * @param {string} columnName The name of the column.
   * @param {double} atFrame The frame number where you want to set the keyframe.
   * @returns {boolean}
   */
  function setKeyFrame(columnName: string, atFrame: double): boolean;

  /**
   * Sets the value in the Expression column to the specified text.
   * @param {string} columnName The name of the column.
   * @param {string} text The expression text.
   * @returns {boolean}
   */
  function setTextOfExpr(columnName: string, text: string): boolean;

  /**
   * Returns a column object that contains a reference to that sound column. The column object contains a
   * useful interface to introspecting the sound and its sound sequences.
   * @param {string} columnName The name of the sound column.
   * @returns {soundColumnInterface}
   */
  function soundColumn(columnName: string): soundColumnInterface;

  /**
   * This function returns the column type.
   * There are nine column types: drawing (DRAWING), sound (SOUND), 3D Path (3DPATH), Bezier Curve
   * (BEZIER), Ease Curve (EASE), Expression (EXPR), Timing (TIMING) for timing columns, Quaternion path
   * (QUATERNIONPATH) for 3D rotation and Annotation (ANNOTATION) for annotation columns.
   * @param {string} columnName The name of the column.
   * @returns {ColumnType}
   */
  function type(columnName: string): ColumnType;

  /**
   * Updates the XSheet with all newly added and moved columns.
   * update() needs to be called before moving a newly added column.
   * @returns {void}
   */
  function update(): void;

  /**
   * This function returns the column type of nested velocity.
   * If column is of 3D Path (3DPATH) type, retrieve nested velocity type. Either Bezier Curve (BEZIER)
   * or Ease Curve (EASE).
   * @param {string} columnName The name of the column.
   * @returns {string}
   */
  function velocityType(columnName: string): string;
}

/**
 * The JavaScript class for using XSheet column markers. Obtain it by calling columnMarkers from the
 * column global object.
 * Column marker allows access to markers attached to a column.
 * Here is an example on how to add an inbetween marker in the first cell column at frame 3, of length
 * 1 (Japanese timesheet):
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classcolumnMarkers.html}
 * @example
 * var nbCols = column.numberOf();
 * if (nbCols == 0)
 *     return;
 *
 * var columnName = column.getName(0);
 *
 * var markers = column.columnMarkers(columnName);
 *
 * var markerId = markers.createMarker(3, 1, "com.toonboom.timesheet.actioninbetween");
 *
 * markers.setValue(markerId, "MyKey", 1000);
 * var valueEquelTo1000 = markers.value(markerId, "MyKey");
 */
declare class columnMarkers {
  /**
   * Creates a new marker on the current column and returns an ID to further manipulate it.
   * @param {int} startFrame Which frame the marker will start on.
   * @param {int} length Length of the new marker.
   * @param {string} type User-customizable string determining the functionality of the marker.
   * @returns {int}
   */
  public createMarker(startFrame: int, length: int, type: string): int;

  /**
   * Returns the array of property keys that the marker contains.
   * @param {int} markerId Marker to query.
   * @returns {QScriptValue}
   */
  public keyValues(markerId: int): QScriptValue;

  /**
   * Queries the length of a column marker.
   * @param {int} markerId Id of the marker which we want to know the length.
   * @returns {int}
   */
  public length(markerId: int): int;

  /**
   * Gets a marker ID from the requested frame, of the given type, if there is one.
   * @param {int} startFrame Frame where to look for a marker.
   * @param {string} type Specific marker type looked for.
   * @returns {int}
   */
  public marker(startFrame: int, type: string): int;

  /**
   * Returns the IDs of all markers in the column managed by this marker manager.
   * @returns {QScriptValue}
   */
  public markers(): QScriptValue;

  /**
   * Returns an array containing all the marker IDs at the requested frame.
   * @param {int} startFrame Requested frame.
   * @returns {QScriptValue}
   */
  public markers(startFrame: int): QScriptValue;

  /**
   * Moves a marker around on the same column and potentially change its length.
   * @param {int} markerId ID of the marker to move.
   * @param {int} newStart New starting frame.
   * @param {int} newLength New length of the marker.
   * @returns {void}
   */
  public moveMarker(markerId: int, newStart: int, newLength: int): void;

  /**
   * Looks up all the markers that would overlap with the requested frame.
   * @param {int} startFrame
   * @returns {QScriptValue}
   */
  public overlapingMarkers(startFrame: int): QScriptValue;

  /**
   * Deletes the requested marker ID.
   * @param {int} id ID of the marker to delete.
   * @returns {boolean}
   */
  public removeMarker(id: int): boolean;

  /**
   * Sets a key/value pair on the given marker.
   * If a pair with the same key already exists it is updated with the new value.
   * @param {int} markerId Marker to manipulate.
   * @param {string} propertyName Key of the value to set.
   * @param {QVariant} value Value to set in the key/value pair.
   * @returns {void}
   */
  public setValue(markerId: int, propertyName: string, value: QVariant): void;

  /**
   * Return the start frame of a given marker.
   * @param {int} markerId ID of the queried marker.
   * @returns {int}
   */
  public startFrame(markerId: int): int;

  /**
   * Gets a property value given its key from the list of key/value pairs.
   * Returns a null value if the property does not exist (which is different from returning an empty
   * QVariant; we could still set an empty value to a property value.)
   * @param {int} markerId Marker to query.
   * @param {string} propertyName Key to query from the marker.
   * @returns {QScriptValue}
   */
  public value(markerId: int, propertyName: string): QScriptValue;
}

/**
 * The compositionOrder JavaScript global object. Extract the Timeline view's composition order.
 * Scriptable interface for extracting the Timeline composition order.
 * or
 * This builds the composition using the node_timeline internal service and return an JavaScript array
 * of CompositionItem object.
 *  The array returned is ordered. The first entry is the top most node in the composition order, or is
 * a parent of nodes.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classcompositionOrder.html}
 * @example
 * var composition = compositionOrder.buildDefaultCompositionOrder();
 */
declare namespace compositionOrder {
  /**
   * Returns an array of Composition objects using the specified display name.
   * This method is similar to buildDefaultCompositionOrder(), however, instead of working with the
   * current display, it requires a display module. This method can be used to generate the composition
   * order from any display module in the project.
   * @param {string} displayNode The display module name to build the array of Composition objects from.
   * @returns {QScriptValue}
   */
  function buildCompositionOrderForDisplay(displayNode: string): QScriptValue;

  /**
   * Returns an array of Composition objects using the current default composition order as used by the
   * camera view or the timeline.
   * Using the current display, return the tree-like composition as normally returned by the internal
   * node_timeline service. This method return the "Display All" composite order.
   * The depth of each Composition can be used to find the parent-child. Top level nodes or parentless
   * nodes have a depth at 0. Child of this node will have a depth 1 level greater.
   * @returns {QScriptValue}
   */
  function buildDefaultCompositionOrder(): QScriptValue;
}

/**
 * The copyPaste JavaScript global object. Copy paste to/from templates.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classcopyPaste.html}
 */
declare namespace copyPaste {
  /**
   * Create an object that represent a 'copy' of a selection of nodes and a range of frames.
   * Create an object that represent a 'copy' of a selection of nodes and a range of frames. This object
   * can be pasted or saved in the template library. It is practically identical to what the user would
   * copy from a selection of layers and frames in the timeline.
   * @param {StringList} selectionOfNodes The list of nodes to be copied.
   * @param {int} startFrame The start frame for the selection. First frame is 1.
   * @param {int} numFrames The number of frames to copy.
   * @param {CopyOptions} createOption Options that should be used when doing the creating the copy. See CopyOptions for more information about these options.
   * @returns {DragObject}
   */
  function copy(
    selectionOfNodes: StringList,
    startFrame: int,
    numFrames: int,
    createOption: CopyOptions
  ): DragObject;

  /**
   * Load a template from the file system onto a drag object, which can then be pasted onto the scene.
   * @param {string} filename - the exact filename of the .tpl folder. Need to be the folder, not the .xstage file.
   * @param {int} startFrame start frames for the data pasted. Starting at 1. However, if 0 is provided, the whole template is copied.
   * @param {int} numFrames - number of frames to paste, up to the maximum number of frames. If 'startFrame' is 0, this parameter is disregarded.
   * @param {CopyOptions} createOption - options that should be used when doing the code. See CopyOptions for more information about these options.
   * @returns {DragObject}
   */
  function copyFromTemplate(
    filename: string,
    startFrame: int,
    numFrames: int,
    createOption: CopyOptions
  ): DragObject;

  /**
   * Creates template from the current selection in the scene, using only the current drawing versions.
   * No template is created when there is nothing selected, when the path is not valid or when there is
   * an IO error.
   * @param {string} name The name of the new template.
   * @param {string} path The location of the new template.
   * @returns {string}
   */
  function createTemplateFromSelection(name: string, path: string): string;

  /**
   * Returns a copy of the current copy options.
   * To be used with copy(). There used to be an API to set these parameters globally, for the next
   * drag&drop
   * @returns {CopyOptions}
   */
  function getCurrentCreateOptions(): CopyOptions;

  /**
   * Returns a copy of the current paste options.
   * To be used with paste()
   * @returns {PasteOptions}
   */
  function getCurrentPasteOptions(): PasteOptions;

  /**
   * Pastes the drag object as an action template. Must paste over a selection of nodes. No new nodes are
   * created by this action.
   * @param {DragObject} dragObject The dragObject to be pasted.
   * @param {StringList} selectionOfNodes The list of nodes to be pasted over.
   * @param {int} startFrame The start frame for the selection. First frame is 1.
   * @param {int} numFrames The number of frames to paste across.
   * @param {PasteOptions} pasteOptions Options that should be used when pasting. See PasteOptions for more information about these options.
   * @returns {boolean}
   */
  function paste(
    dragObject: DragObject,
    selectionOfNodes: StringList,
    startFrame: int,
    numFrames: int,
    pasteOptions: PasteOptions
  ): boolean;

  /**
   * Pastes the action template into the scene and excludes nodes that are in the list.
   * @param {string} srcPath The path of the template.
   * @param {string} nodeName The name of the existing node in which we will insert template.
   * @param {int} insertFrame The frame at which insert commences.
   * @param {QScriptValue} [compositionOptions={}] Defines how to handle the selection of nodes onto which to paste. Separately controls to paste of groups, effects and composite nodes when building the selection. Default value: { "groups": true, "effects": true, "composites": false }
   * @returns {boolean}
   */
  function pasteActionTemplateIntoNode(
    srcPath: string,
    nodeName: string,
    insertFrame: int,
    compositionOptions?: QScriptValue
  ): boolean;

  /**
   * Paste an external drag object as new nodes. This is similar to pasting on the node view where new
   * nodes are created (from an external selection).
   * @param {DragObject} dragObject - the actual drag object - see copy() or copyFromTemplate() to create this drag object.
   * @param {string} groupWhereToDrop - root group where the new nodes will be created. If empty string is provided, it will paste at the root.
   * @param {PasteOptions} pasteOptions - paste special options (ie. create keyframes, drawings, new columns, or relink columns,.... - see paste special dialog and PasteOptions).
   * @returns {boolean}
   */
  function pasteNewNodes(
    dragObject: DragObject,
    groupWhereToDrop: string,
    pasteOptions: PasteOptions
  ): boolean;

  /**
   * Pastes the template into a group of the scene.
   * @param {string} srcPath The path of the template.
   * @param {string} groupName The name of the existing column in which we will insert template.
   * @param {int} insertFrame The frame at which insert commences.
   * @returns {boolean}
   */
  function pasteTemplateIntoGroup(
    srcPath: string,
    groupName: string,
    insertFrame: int
  ): boolean;

  /**
   * Pastes the template into the scene.
   * @param {string} templateSrcPath The path of the template.
   * @param {string} insertColumnName The name of the existing column in which we will insert template.
   * @param {int} insertFrame The frame at which insert commences.
   * @returns {boolean}
   */
  function pasteTemplateIntoScene(
    templateSrcPath: string,
    insertColumnName: string,
    insertFrame: int
  ): boolean;

  /**
   * @param {QScriptEngine} engine
   * @returns {void}
   */
  function registerObjects(engine: QScriptEngine): void;

  /**
   * PasteSpecial Structure value. Default value is false.
   * @param {boolean} flag The new value.
   * @returns {void}
   */
  function setExtendScene(flag: boolean): void;

  /**
   * When pasting an external template or local content, this functions controls the number of frames of
   * the content that will be pasted.
   * The default number of frames is 0, which effectively turn off this override feature and make it
   * paste the entire copied content length. Set this length to anything >0 to override the number of
   * frames pasted.
   * Must be using the paste special mode.
   * @param {int} nFrames The number of frames that the content will be pasted.
   * @returns {void}
   */
  function setNumFramesSrc(nFrames: int): void;

  /**
   * PasteSpecial Structure value. Default value is true.
   * @param {boolean} flag The new value.
   * @returns {void}
   */
  function setPasteSpecialAddRemoveAngleKeyFrame(flag: boolean): void;

  /**
   * PasteSpecial Structure value. Default value is true.
   * @param {boolean} flag The new value.
   * @returns {void}
   */
  function setPasteSpecialAddRemoveMotionKeyFrame(flag: boolean): void;

  /**
   * PasteSpecial Structure value. Default value is true.
   * @param {boolean} flag The new value.
   * @returns {void}
   */
  function setPasteSpecialAddRemoveScalingKeyFrame(flag: boolean): void;

  /**
   * PasteSpecial Structure value. Default value is true.
   * @param {boolean} flag The new value.
   * @returns {void}
   */
  function setPasteSpecialAddRemoveSkewKeyFrame(flag: boolean): void;

  /**
   * PasteSpecial Structure value. Default value is true.
   * @param {boolean} flag The new value.
   * @returns {void}
   */
  function setPasteSpecialAddRemoveVelocityKeyFrame(flag: boolean): void;

  /**
   * PasteSpecial Structure value. Default value is REUSE_PALETTES.
   * Acceptable Strings are: DO_NOTHING REUSE_PALETTES COPY_AND_OVERWRITE_EXISTING_PALETTES
   * COPY_AND_CREATE_NEW_PALETTES COPY_AND_CREATE_NEW_PALETTES_IN_ELEMENT_FOLDER
   * COPY_PALETTE_AND_MERGE_COLOURS COPY_PALETTE_AND_UPDATE_COLOURS LINK_TO_ORIGINAL
   * COPY_SCENE_PALETTE_AND_MERGE_COLOURS COPY_SCENE_PALETTE_AND_UPDATE_COLOURS
   * @param {string} mode The Color Palette Option mode.
   * @returns {void}
   */
  function setPasteSpecialColorPaletteOption(mode: string): void;

  /**
   * Set to true to copy the model directory.
   * @param {boolean} copy Whether or not to copy the model directory.
   * @returns {void}
   */
  function setPasteSpecialCopyModelDir(copy: boolean): void;

  /**
   * Set to true to copy the scan files associated to the selected drawings.
   * @param {boolean} copy Whether or not to copy the scan files associated to the selected drawings.
   * @returns {void}
   */
  function setPasteSpecialCopyScanFiles(copy: boolean): void;

  /**
   * PasteSpecial Structure value. Default value is false.
   * @param {boolean} flag The new value.
   * @returns {void}
   */
  function setPasteSpecialCreateNewColumn(flag: boolean): void;

  /**
   * Use this when you want the camera in a template to be set as default camera in the target scene.
   * @param {boolean} flag Whether or not to set the camera in the template to be set as the default camera in the target scene.
   * @returns {void}
   */
  function setPasteSpecialDefaultCameraName(flag?: boolean): void;

  /**
   * PasteSpecial Structure value. Default value is ADD_OR_REMOVE_EXPOSURE.
   * Drawings action Acceptable Strings are: DO_NOTHING ADD_OR_REMOVE_EXPOSURE UPDATE_PIVOT
   * @param {"DO_NOTHING" | "ADD_OR_REMOVE_EXPOSURE" | "UPDATE_PIVOT"} mode The Drawing Action mode.
   * @returns {void}
   */
  function setPasteSpecialDrawingAction(
    mode: "DO_NOTHING" | "ADD_OR_REMOVE_EXPOSURE" | "UPDATE_PIVOT"
  ): void;

  /**
   * PasteSpecial Structure value. Default values are extendExposure : false, keyFrameMode: true.
   * @param {boolean} extendExposure Whether or not to automatically extend the exposure.
   * @param {boolean} keyFrameMode Whether or not to enable key frame mode.
   * @returns {void}
   */
  function setPasteSpecialDrawingAutomaticExtendExposure(
    extendExposure: boolean,
    keyFrameMode: boolean
  ): void;

  /**
   * PasteSpecial Structure value. Default value is ALWAYS_CREATE if LIBRARY_PASTE_CREATE_NEW_DRAWING is
   * set, otherwise it is ONLY_CREATE_IF_DOES_NOT_EXIST.
   * Sets the drawing file mode - only used if the DrawingAction is set to ADD_OR_REMOVE_EXPOSURE
   * Acceptable Strings are: NEVER_CREATE ONLY_CREATE_IF_DOES_NOT_EXIST ALWAYS_CREATE
   * ALWAYS_CREATE_AND_VERSION_IF_NECESSARY REPLACE_EXISTING
   * @param {"NEVER_CREATE"|"ONLY_CREATE_IF_DOES_NOT_EXIST"|"ALWAYS_CREATE"|"ALWAYS_CREATE_AND_VERSION_IF_NECESSARY"} mode The Drawing File mode.
   * @returns {void}
   */
  function setPasteSpecialDrawingFileMode(
    mode:
      | "NEVER_CREATE"
      | "ONLY_CREATE_IF_DOES_NOT_EXIST"
      | "ALWAYS_CREATE"
      | "ALWAYS_CREATE_AND_VERSION_IF_NECESSARY"
  ): void;

  /**
   * PasteSpecial Structure value. Default value is ELEMENT_AS_ELEMENT_AND_TIMING_AS_TIMING.
   * Sets the paste special elementtiming mode for calls to pasteTemplateIntoScene Acceptable strings
   * are:
   * ELEMENT_AS_ELEMENT_AND_TIMING_AS_TIMING ALL_DRWGS_AS_ELEMENTS ALL_DRWGS_LINKED_THRU_TIMING_COLS
   * @param {string} mode
   * @returns {void}
   */
  function setPasteSpecialElementTimingColumnMode(mode: string): void;

  /**
   * PasteSpecial Structure value. Default value is true.
   * @param {boolean} flag The new value.
   * @returns {void}
   */
  function setPasteSpecialForcesKeyFrameAtBegAndEnd(flag: boolean): void;

  /**
   * Use this when you want to control the paste of all non animate attributes and all local values of a
   * node.
   * The default is true.
   * @param {boolean} flag Whether or not to control the paste of all non animate attributes and all local values of a node.
   * @returns {void}
   */
  function setPasteSpecialFullTransfer(flag: boolean): void;

  /**
   * Use this when you want to paste a template and use the actual node names for matching nodes instead
   * of basic algorithm of composition order.
   * In this mode, it is important to make sure that all nodes of the template are found in the
   * destination's group.
   * @param {boolean} flag Whether or not to use the actual node names for matching nodes when pasting a template.
   * @returns {void}
   */
  function setPasteSpecialMatchNodeName(flag: boolean): void;

  /**
   * PasteSpecial Structure value. Default value is false.
   * @param {boolean} flag The new value.
   * @returns {void}
   */
  function setPasteSpecialOffsetKeyFrames(flag: boolean): void;

  /**
   * PasteSpecial Structure value. Default value is true.
   * @param {boolean} flag The new value.
   * @returns {void}
   */
  function setPasteSpecialReplaceExpressionColumns(flag: boolean): void;

  /**
   * Set to true to keep timed values names intact, even if cloned i.e. Drawing(3).
   * @param {boolean} preserve Whether or not to keep timed values names intact.
   * @returns {void}
   */
  function setPasteSpecialTVPreserveName(preserve: boolean): void;

  /**
   * When pasting an external template or local content, this functions controls the start frame of the
   * content that will be pasted.
   * The default start frame is 1, which means that it will be pasting starting from the first frame of
   * the copied content. Set this to a value >= 1 to specific the frame to use as a starting frame. Must
   * be using the paste special mode.
   * @param {int} startFrame The frame to start at when pasting an external template or local content.
   * @returns {void}
   */
  function setStartFrameSrc(startFrame: int): void;

  /**
   * Allows 2 extra options in the template creation.
   * @param {boolean} flag Set that the copy paste manager is in use.
   * @param {boolean} [addModellingDir=true] Copies the modeling directory into the template.
   * @param {boolean} [addScanFiles=true] Copies the *.scans that match the drawings.
   * @param {boolean} [includeDefaultCameraName=true] Deprecated in 7.8. As long as the camera node is in the selection, it will be copied into the template automatically.
   * @returns {void}
   */
  function useCreateTemplateSpecial(
    flag: boolean,
    addModellingDir?: boolean,
    addScanFiles?: boolean,
    includeDefaultCameraName?: boolean
  ): void;

  /**
   * Enables PasteSpecial.
   * This is a STATIC structure - once initialized it may be re-used for the duration of the session. By
   * default, it is NOT used until usePasteSpecial(true) is called.
   * The structure defaults are:
   * NODE
   * PEG
   * DRAWING
   * PALETTE
   * SRC FRAMES
   * If Drawing add/remove exposure is set, the following modes are available:
   * @param {boolean} flag True to enable PasteSpecial.
   * @returns {void}
   */
  function usePasteSpecial(flag: boolean): void;
}

/**
 * The Drawing JavaScript global object. Iterate and manipulate the drawings of an element node.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classDrawing.html}
 * @example
 * var nodes = node.subNodes("Top");
 * for (var nodeIndex in nodes) {
 *     var layerName = node.getTextAttr(nodes[nodeIndex], 1, "drawing.element.layer");
 *     var elementId = node.getElementId(nodes[nodeIndex]);
 *     for (var j = 0; j < Drawing.numberOf(elementId); j++) {
 *         var drawingId = Drawing.name(elementId, j);
 *         var drawingKey = Drawing.Key({
 *             elementId: elementId,
 *             layer: layerName,
 *             exposure: drawingId
 *         });
 *         DrawingTools.recolorDrawing(drawingKey, colorMapping);
 *     }
 * }
 */
declare namespace Drawing {
  /**
   * Creates a new drawing inside an element.
   * Create a new empty drawing inside the given element. The drawing file will physically exists in the
   * temporary folder until the project is saved. Then, the file will reside in (scene
   * folder)/elements/MyElement/ (where MyElement is the name of the element linked to the given
   * elementId).
   * @param {int} elementId The unique id of the element.
   * @param {string} timing The proposed drawing name.
   * @param {boolean} fileExists Used to indicate that the drawing exists. By default, drawings exist in the temporary folder.
   * @param {boolean} [storeInProjectFolder=false] Indicate that the drawing exits in the project folder, not in a temporary folder.
   * @returns {boolean}
   * @example
   * var nodePath = "Top/MyDrawing";
   * var elementId = node.getElementId(nodePath);
   *
   * // Add the drawing to the scene. For now it's just a placeholder until we copy the drawing file into the temp or project folder.
   * var exposure = "MyExposure"; // exposure in the Xsheet
   * Drawing.create(elementId, exposure, true);
   *
   * // Copy the external image file into the temp (if the file wasn't saved since the addition of the element node) / project (if the element was saved) folder
   * var filename = sourceFileName(frameIndex, lowQuality);
   * var sourceFile = "c:/myFolder/MyExternalImage.png;  // The extension of the file must match the file format of the element. @sa element::add
   * var destinationFile = Drawing.filename(elementId, exposure);
   * copyFile(sourceFile, destinationFile); // @sa PermanentFile
   *
   * // Set the added drawing as the current drawing on the element node's drawing column.
   * var drawingColumn = node.linkedColumn(nodePath, "DRAWING.ELEMENT");
   * column.setEntry(drawingColumn, 1, frame.current(), exposure);
   */
  function create(
    elementId: int,
    timing: string,
    fileExists?: boolean,
    storeInProjectFolder?: boolean
  ): boolean;

  /**
   * Returns the filename of this drawing on disk.
   * This filename may be in the temp folder or project folder. Before the project is actually saved, the
   * temporary folder is where the drawing must reside to be found by the application.
   * @param {int} elementId The unique id of the element.
   * @param {string} drawingName The drawing name.
   * @returns {string}
   */
  function filename(elementId: int, drawingName: string): string;

  /**
   * Returns true if the given drawing exists in this element.
   * @param {int} elementId The unique id of the element.
   * @param {string} timing The drawing name.
   * @returns {boolean}
   */
  function isExists(elementId: int, timing: string): boolean;

  /**
   * Create a drawing key which can be used to test the availability of a drawing.
   * Create a drawing key from an object having one of the following property set.
   * As a more complete example, here's how to get the properties of a drawing key from an element node.
   * @param {QScriptValue} object an object with the following properties (see the example below). // Point to a drawing from the file systemvar fileDrawingKey ={ filename : "C:/MySceneFolder/elements/Drawing/Drawing-1.tvg"};var drawingKey = Drawing.Key(fileDrawingKey);if(!drawingKey.isValid) return; // Point to the drawing of a node exposed to a given framevar nodeDrawingKey ={ node : "Top/MyDrawing", frame : 1};var drawingKey = Drawing.Key(nodeDrawingKey);if(!drawingKey.isValid) return; // Point to a drawing from an elementvar exposureDrawingKey ={  elementId : 1,  exposure : "2",  layer : "Drawing_1" // [Optional] Name of the synced drawing layer. Get it from the "DRAWING.ELEMENT.LAYER" attribute from an element node. DO NOT SPECIFY if the drawing isn't a drawing layer.};var drawingKey = Drawing.Key(exposureDrawingKey);if(!drawingKey.isValid) return;
   * @returns {QScriptValue}
   * @example
   * // Point to a drawing from the file system
   * var fileDrawingKey = {
   *     filename: "C:/MySceneFolder/elements/Drawing/Drawing-1.tvg"
   * };
   * var drawingKey = Drawing.Key(fileDrawingKey);
   * if (!drawingKey.isValid)
   *     return;
   */
  function Key(object: QScriptValue): QScriptValue;

  /**
   * Returns the drawing id.
   * @param {int} elementId The unique id of the element.
   * @param {int} drawingIndex The drawing index.
   * @returns {string}
   */
  function name(elementId: int, drawingIndex: int): string;

  /**
   * Returns the number of drawings in the element.
   * @param {int} elementId The unique id of the element.
   * @returns {int}
   */
  function numberOf(elementId: int): int;
}

/**
 * The DrawingTools JavaScript global object. Get information about the currently selected drawing.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classDrawingTools.html}
 * @example
 * var params = new DrawingToolParams;
 * params.applyAllDrawings = true;
 * DrawingTools.extractCenterline(DrawingTools.lineArt, DrawingTools.colourArt, params);
 */
declare namespace DrawingTools {
  /**
   * Changes the bitmap layer resolution of a given drawing.
   * The example below uses DrawingTools.changeDrawingBitmapLayerResolution(..) to change all art layers
   * (0=underlay, 1=line art, 2=color art, 3=overlay) resolutions of the 2nd drawing associated with a
   * given node timing column.
   * @param {QScriptValue} drawingKey The drawing identifier
   * @param {double} pixelPerModelUnit The new normalized pixel density (1.0 = 100%)
   * @param {QScriptValue} [options={}] Optional parameters. The following properties are supported :
   * @returns {void}
   * @example
   * var columnId = node.linkedColumn("Top/Drawing_2", "DRAWING.ELEMENT");
   * var elementKey = column.getElementIdOfDrawing(columnId);
   * var timings = column.getDrawingTimings(columnId);
   * var dk = Drawing.Key(elementKey, timings[1]);
   * DrawingTools.changeDrawingBitmapLayerResolution(dk, 0.1, {
   *     resampleBitmap: true,
   *     art: [2]
   * });
   */
  function changeDrawingBitmapLayerResolution(
    drawingKey: QScriptValue,
    pixelPerModelUnit: double,
    options?: QScriptValue
  ): void;

  /**
   * Changes the vector layer resolution of a given drawing.
   * The example below uses DrawingTools.changeDrawingVectorLayerResolution(..) to change all art layers
   * (0=underlay, 1=line art, 2=color art, 3=overlay) resolutions of the first drawing associated with a
   * given node timing column.
   * @param {QScriptValue} drawingKey The drawing identifier
   * @param {double} pixelPerModelUnit The new normalized pixel density (1.0 = 100%)
   * @param {QScriptValue} [options={}] Optional parameters. The following properties are supported :
   * @returns {void}
   * @example
   * var columnId = node.linkedColumn("Top/Drawing_1", "DRAWING.ELEMENT");
   * var elementKey = column.getElementIdOfDrawing(columnId);
   * var timings = column.getDrawingTimings(columnId);
   * var dk = Drawing.Key(elementKey, timings[0]);
   * DrawingTools.changeDrawingVectorLayerResolution(dk, 0.1, {
   *     applyToExistingStrokes: true,
   *     art: [0, 1, 2, 3]
   * });
   */
  function changeDrawingVectorLayerResolution(
    drawingKey: QScriptValue,
    pixelPerModelUnit: double,
    options?: QScriptValue
  ): void;

  /**
   * Clears an art of a drawing.
   * Takes an object that can contain: drawing : Drawing Key art : int The art to clear. 0 = Underlay, 1
   * = Colour Art, 2 = Line Art, 3 = Overlay
   * @param {QVariant} config
   * @returns {boolean}
   */
  function clearArt(config: QVariant): boolean;

  /**
   * Computes the breaking triangles of the current layer using params.
   * @param {DrawingToolParams} [params=0] The DrawingToolParams.
   * @returns {void}
   */
  function computeBreakingTriangles(params?: DrawingToolParams): void;

  /**
   * Converts the selected pencil lines in layer of the current drawing using params.
   * @param {int} [art=LineArtMask] The current drawing.
   * @param {DrawingToolParams} [params=0] The DrawingToolParams.
   * @returns {void}
   */
  function convertPencilToBrush(art?: int, params?: DrawingToolParams): void;

  /**
   * Extracts the centerline from srcArt and puts the extracted line in dstArt using params.
   * @param {int} [srcArt=LineArtMask] The source art.
   * @param {int} [dstArt=ColourArtMask] The destination art layer.
   * @param {DrawingToolParams} [params=0] The DrawingToolParams.
   * @returns {void}
   */
  function extractCenterline(
    srcArt?: int,
    dstArt?: int,
    params?: DrawingToolParams
  ): void;

  /**
   * Performs the same operation as Drawing->Optimize->Flatten menu item.
   * Takes an object that can contain: drawing : Drawing Key removeInvisibleLines : bool default false
   * @param {QVariant} config
   * @returns {boolean}
   */
  function flatten(config: QVariant): boolean;

  /**
   * Returns an array containing the set of colour ids used by the drawing.
   * @param {QScriptValue} drawingKey A key identifying a drawing from a file, an exposure on an element node or drawing of an element.
   * @returns {QScriptValue}
   */
  function getDrawingUsedColors(drawingKey: QScriptValue): QScriptValue;

  /**
   * Returns an array of objects describing the set of colour ids used by the drawing along with the
   * source of the colour.
   * @param {QScriptValue} drawingKey A key identifying a drawing from a file, an exposure on an element node or drawing of an element.
   * @returns {QScriptValue}
   * @example
   * {
   *     "colorId": < string > ,
   *     "colorSource": < "COLOR" | "PENCIL_TEXTURE" >
   * }
   */
  function getDrawingUsedColorsWithSource(
    drawingKey: QScriptValue
  ): QScriptValue;

  /**
   * Return an array containing the set of colour ids used by all drawings in the array.
   * @param {QScriptValue} drawingKeyArray An array of keys identifying a drawing from a file, an exposure on an element node or drawing of an element.
   * @returns {QScriptValue}
   */
  function getMultipleDrawingsUsedColors(
    drawingKeyArray: QScriptValue
  ): QScriptValue;

  /**
   * Performs the same operation as Drawing->Optimize->Optimize menu item.
   * Takes an object that can contain: drawing : Drawing Key removeInvisibleLines : bool default false
   * @param {QVariant} config
   * @returns {boolean}
   */
  function optimize(config: QVariant): boolean;

  /**
   * Recolours the drawing identified by a drawing key.
   * DrawingKey : A drawing key, built from { ElementID : id, exposure : "drawingName"}, or {node:
   * "Qualified_name", frame : i}
   * ColorMap : An array of colour mappings of the format [ {from : "colorId", to : "colorId"}, ...
   * ,{...} ].
   * @param {QScriptValue} drawingKey
   * @param {QScriptValue} colorMap
   * @returns {void}
   */
  function recolorDrawing(
    drawingKey: QScriptValue,
    colorMap: QScriptValue
  ): void;

  /**
   * Sets the current art to be one of the following : underlayArt, colourArt, lineArt or overlayArt.
   * @param {int} currentArt
   * @returns {void}
   */
  function setCurrentArt(currentArt: int): void;

  /**
   * @param {string} columnName The name of the column to start the drawing at.
   * @param {int} [frame=1] The frame number to set the current drawing at.
   * @returns {boolean}
   */
  function setCurrentDrawingFromColumnName(
    columnName: string,
    frame?: int
  ): boolean;

  /**
   * Sets the current drawing to be from node nodeName at frame frame.
   * @param {string} nodeName The name of the node to start the drawing at.
   * @param {int} [frame=1] The frame number to set the current drawing at.
   * @returns {boolean}
   */
  function setCurrentDrawingFromNodeName(
    nodeName: string,
    frame?: int
  ): boolean;

  /**
   * vectorize function; Can be called with a variable list of arguments.
   * The list of options available for the vectorize method can be obtained by calling
   * DrawingTools.vectorize.help();
   * @returns {QVariant}
   * @example
   *  vectorize({
   *      node: "Top/Drawing",
   *      frame: 1
   *  }, {
   *      node: "Top/Output",
   *      frame: 1
   *  }, "-threshold 0.5");
   *  vectorize("-file", {
   *      node: "Top/Drawing",
   *      frame: 1
   *  }, "-outfile", {
   *      node: "Top/Output",
   *      frame: 1
   *  }, "-threshold 0.5");
   *  vectorize("-file", "full_path.png", "-outfile", "full_path.tvg", "-threshold 0.5");
   *  var descriptor = Drawing.Key({
   *              elementId: 1,
   *              exposure: "12",
   *              layer: "eye");
   *          var outputDescriptor = {
   *              node: "Top/Eye_v",
   *              frame: 12
   *          };
   *          // It can work with all the return values of Drawing.Key();
   *          vectorize(descriptor, outputDescriptor, "-threshold 0.5");
   *
   *          // A more detailed example
   *          function vectorizeExample() {
   *              if (selection.numberOfNodesSelected() != 1) {
   *                  MessageLog.trace("Please select one Element Node");
   *                  return;
   *              }
   *
   *              var n = selection.selectedNode(0);
   *              if (node.type(n) != "READ") {
   *                  MessageLog.trace("The selected node is NOT an Element Node. ");
   *                  return;
   *              }
   *              var attrType = node.getTextAttr(n, 1, "lineArtDrawingMode");
   *              if (attrType != "Bitmap") {
   *                  MessageLog.trace("The selected node must be an Element Node with bitmap line art.");
   *                  return;
   *              }
   *
   *              var destination = n + "_vect";
   *              if (!node.getName(destination)) {
   *                  MessageLog.trace("Please make sure there is a node named " + node.getName(n) + "_vect in the same group as the selected node");
   *              }
   *
   *              var options = {
   *                  no_break: true,
   *                  thresh: 0.01,
   *                  rmv_hairs: 5
   *              };
   *              var optionsLine = "-no_break -thresh 0.01 -rmv_hairs 5";
   *
   *              scene.beginUndoRedoAccum("Vectorize drawings of " + node.getName(n) + " to " + node.getName(destination));
   *              for (var i = 1; i < frame.numberOf(); ++i) {
   *                  var keySrc = Drawing.Key({
   *                      node: n,
   *                      frame: i
   *                  });
   *                  var keyDst = Drawing.Key({
   *                      node: destination,
   *                      frame: i
   *                  });
   *                  if (keySrc.isNull || keyDst.isNull) {
   *                      continue;
   *                  }
   *                  var r = DrawingTools.vectorize(keySrc, keyDst, options);
   *              }
   *              scene.endUndoRedoAccum();
   *          }
   */
  function vectorize(): QVariant;

  /**
   * Returns the mask for all 4 art layers.
   * @returns {int}
   */
  var allArts: int;

  /**
   * Returns the colourArt mask.
   * @returns {int}
   */
  var colourArt: int;

  /**
   * Returns the lineArt mask.
   * @returns {int}
   */
  var lineArt: int;

  /**
   * Returns the overlayArt mask.
   * @returns {int}
   */
  var overlayArt: int;

  /**
   * Returns the underlayArt mask.
   * @returns {int}
   */
  var underlayArt: int;
}

/**
 * The element JavaScript global object. Add, remove, modify or get information about element nodes in
 * the scene.
 * An element is a physical group of drawings that can be found in the scene's element folder. The
 * element folder will be located in the temporary folder until the scene is saved. The element global
 * object can add, remove or retrieve information about the elements of a scene. Each element has an
 * index (0..nbElements-1) and an integer id (key of the element in the database) which is unique.
 * Their name is not guaranteed to be unique.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classelement.html}
 * @example
 * function addElement() {
 *     var id = element.add("newDrawing", "BW", 12, "TVG", "SCAN");
 * }
 */
declare namespace element {
  /**
   * Creates a new element. Returns the element id of the newly added element if successful, otherwise it
   * returns -1.
   * @param {string} name The name of the element.
   * @param {string} scanType "COLOR", "GRAY_SCALE" or "BW" (for black and white).
   * @param {double} fieldChart 12, 16 or 24.
   * @param {string} fileFormat Use "SCAN" when importing TVGs. "OPT" when importing optimized TVGs and "TGA", "PSD", "PNG", "JPEG", "BMP", "TIFF" or "OMF" when importing files of those formats.
   * @param {string} vectorFormat "TVG" for files of "SCAN" or "OPT" formats. "None" when importing file as is (ex: "TGA", "PNG", "JPEG", etc.). "PNT" is a deprecated option.
   * @returns {int}
   * @example
   * // Create a new element to hold TVGs
   * var elementId = element.add("MyElement", "COLOR", 12, "SCAN", "TVG");
   */
  function add(
    name: string,
    scanType: string,
    fieldChart: double,
    fileFormat: string,
    vectorFormat: string
  ): int;

  /**
   * Returns the complete element folder. This is normally the element name (unless it has been renamed
   * and the project is not saved) but may include the ".<element id>" in the name if multiple elements
   * share the same name.
   * @param {int} elementId The unique id of the elements.
   * @returns {string}
   */
  function completeFolder(elementId: int): string;

  /**
   * This function returns the field chart size for a given element. The element ID must be provided. The
   * field chart is a number such as 12,16 or 24 field.
   * @param {int} elementId The unique id of the element.
   * @returns {double}
   */
  function fieldChart(elementId: int): double;

  /**
   * Returns the actual element folder. This is normally the element name (unless it has been renamed and
   * the project is not saved) but may include the ".<element id>" in the name if multiple elements share
   * the same name.
   * @param {int} elementId The unique id of the element.
   * @returns {string}
   */
  function folder(elementId: int): string;

  /**
   * Returns the current element name.
   * @param {int} elementId The unique id of the element.
   * @returns {string}
   */
  function getNameById(elementId: int): string;

  /**
   * Returns the id (key) of the element.
   * @param {int} elementIndex An integer from 0 to the value returned by the function element.numberOf, representing the index number of the element. The id and the index are not always the same value.
   * @returns {int}
   */
  function id(elementIndex: int): int;

  /**
   * Changes the attributes of the folder of element elem.
   * @param {int} elementId The unique id of the element.
   * @param {string} scanType "COLOR", "GRAY_SCALE" or "BW" (for black and white).
   * @param {double} fieldChart 12, 16 or 24.
   * @param {string} pixmapFormat 1 for OPT, 3 for SCAN, 4 for SGI, 5 for TGA, 7 for YUV, 9 for OMF or 10 for PSD, 11 for PNG, 12 for JPEG, 13 for BMP, 15 for TIFF.
   * @param {int} vectorType 0 (None), 1 (PNT) or 2 (TVG).
   * @returns {boolean}
   */
  function modify(
    elementId: int,
    scanType: string,
    fieldChart: double,
    pixmapFormat: string,
    vectorType: int
  ): boolean;

  /**
   * Returns the number of elements in the scene.
   * @returns {int}
   */
  function numberOf(): int;

  /**
   * Returns the actual name of the drawings. This is different that the element name if this one has
   * been renamed and the changes have not yet been saved.
   * @param {int} elementId The unique id of the element.
   * @returns {string}
   */
  function physicalName(elementId: int): string;

  /**
   * Returns the pixmap format for the provided element ID.
   * @param {int} elementId The unique id of the element.
   * @returns {string}
   */
  function pixmapFormat(elementId: int): string;

  /**
   * Removes the given element. Optionally delete the disk files. This function returns true when
   * successful.
   * @param {int} elementId The unique id of the element.
   * @param {boolean} deleteDiskFile Optionally, delete the element from the disk.
   * @returns {boolean}
   */
  function remove(elementId: int, deleteDiskFile: boolean): boolean;

  /**
   * Renames an existing element. The element ID must be provided.
   * Rename the physical element (and its folder) of the given id in the scene's folder (i.e. the element
   * folder found in specialFolder.currentProjectPath() + "/elements/" + element.folder(elementId);). The
   * folder will see its name changed the next time the scene will be saved.
   * @param {int} elementId The unique id of the element.
   * @param {string} name The new name of the element. This name must be unique. This operation will physically rename all the files associated to this element.
   * @returns {boolean}
   * @example
   * var nodePath = "Top/Drawing";
   * var elementId = node.getElementId(nodePath);
   *
   * var newElementName = "MyNewElementName";
   * element.renameById(elementId, newElementName);
   */
  function renameById(elementId: int, name: string): boolean;

  /**
   * Returns a string that is the scan type of the element. The scan type is either: COLOR, GRAY_SCALE or
   * BW.
   * @param {int} elementId The unique id of the element.
   * @returns {string}
   */
  function scanType(elementId: int): string;

  /**
   * This function returns the vector type for the given element. For standard vector or Toon Boom bitmap
   * drawing, the vector type will be TVG.
   * The value 0: indicates that the element is NOT a vector drawing (It is an IMAGE type, ex: PNG, TGA,
   * PSD images). The value 1: indicates that the element is a PNT (obsolete) vector drawing. The value
   * 2: indicates that the element is a TVG vector drawing.
   * @param {int} elementId The unique id of the element.
   * @returns {int}
   */
  function vectorType(elementId: int): int;
}

/**
 * The exporter JavaScript global object. Provides access to the project export directory.
 * The example below writes the palette list to a file.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classexporter.html}
 * @example
 * var exportDir = exporter.getExportDir();
 * var exportFile = exportDir + "paletteList.txt";
 *
 * var logFile = new File(exportFile);
 *
 * // FileAccess is a 10.1 interface, 10.0 should use integers
 * //  ReadOnly  = 0x0001
 * //  WriteOnly = 0x0002
 * //  ReadWrite = 0x0003
 * //  Append    = 0x0004
 * //  Truncate  = 0x0008
 * //  Translate = 0x0010
 * logFile.open(FileAccess.WriteOnly);
 *
 * logFile.writeLine(scene.currentScene() + " palettes:");
 *
 * logFile.writeLine("");
 * var numPalettes = PaletteManager.getNumPalettes();
 *
 * for (i = 0; i < numPalettes; ++i) {
 *
 *     var paletteName = PaletteManager.getPaletteName(i);
 *
 *     logFile.writeLine(paletteName);
 *
 * }
 *
 * MessageBox.information("Palette list exported to: " + exportFile);
 */
declare namespace exporter {
  /**
   * Removes all files from the project export directory.
   * @returns {void}
   */
  function cleanExportDir(): void;

  /**
* Render the scene and export an animated GIF from its rendering.
* @param {QScriptValue} params An export parameters object with following properties:
Property  Type  Description
fileName  String  The complete file path to the generated animated GIF.
displayName  String  (Optional) The display node name. The default display is used if the property isn't specified or if it is an empty string.
startFrame  int  (Optional) The first frame to be exported. The first frame of the scene if the property isn't specified or if it is set to 0.
stopFrame  int  (Optional) The last frame to be exported. The last frame of the scene if the property isn't specified or if it is set to 0.
resX  int  (Optional) The horizontal pixel resolution. The x resolution of the scene if 0 or not specified.
resY  int  (Optional) The vertical pixel resolution. The y resolution of the scene if 0 or not specified.
dith  int  (Optional) The dithering to use. exporter.None if not specified.
loop  bool  (Optional) Set the animation to loop. true by default.
* @returns {QScriptValue}
* @example
* try {
*     var res = exporter.exportGIF({
*         fileName: "C:/myPath/myGif.gif",
*         displayName: "",
*         startFame: 1,
*         stopFrame: 10,
*         resX: 1024,
*         resY: 554,
*         dith: exporter.None,
*         loop: true
*     });
* 
*     if (res)
*         MessageBox.information('The GIF export has succeeded);
*             else
*                 MessageBox.information('The GIF export has failed);
* 
*                     exporter.exportGIF({
*                         fileName: "C:/myPath/animated2.gif",
*                         stopFrame: 5,
*                         dith: 0
*                     });
*                 }
*             catch (err) {
*                 MessageBox.critical(err.message);
*             }
*/
  function exportGIF(params?: {
    /**
     * The complete file path to the generated animated GIF.
     */
    fileName?: string;
    /**
     * (Optional) The display node name. The default display is used if the property isn't specified or if it is an empty string.
     */
    displayName?: string;
    /**
     * (Optional) The first frame to be exported. The first frame of the scene if the property isn't specified or if it is set to 0.
     */
    startFrame?: int;
    /**
     * (Optional) The last frame to be exported. The last frame of the scene if the property isn't specified or if it is set to 0.
     */
    stopFrame?: int;
    /**
     * (Optional) The horizontal pixel resolution. The x resolution of the scene if 0 or not specified.
     */
    resX?: int;
    /**
     * (Optional) The vertical pixel resolution. The y resolution of the scene if 0 or not specified.
     */
    resY?: int;
    /**
     * (Optional) The dithering to use. exporter.None if not specified.
     */
    dith?: int;
    /**
     * (Optional) Set the animation to loop. true by default.
     */
    loop?: boolean;
  }): QScriptValue;

  /**
* Render the scene and export it using the codec passed in parameter.
* var filename = scene.currentProjectPathRemapped() + "/frames/my-export.mov";
* @param {QScriptValue} params An export parameters object with following properties:
Property  Type  Description
dstPath  String  The output file location.
startFrame  int  (Optional) The start range of playback, default value is the start of the playback toolbar, or if -1.
lastFrame  int  (Optional) The end range of playback, default value is the stop of the playback toolbar, or if -1.
withSound  bool  (Optional) Whether or not the movie will have sound, default value is true.
stereo  bool  (Optional) Whether or not the movie will have stereo sound, default value is true. Used only in prores codecs.
audioSampleRate  int  (Optional) The audio samples per second to be used, default value is 22050. Only used in prores codecs
codec  int,string  (Optional) The codec of the movie, default value is ""
withAlpha  bool  (Optional) Whether or not the movie will have alpha, default value is true (used only when codec supports an alpha channel). Only used in prores codecs
resX  int  (Optional) The horizontal resolution, default value the preview resolution, or if -1.
resY  int  (Optional) The vertical resolution default value is the preview resolution, or if -1.
displayModule  String  (Optional) The display module, default is empty string.
thumbnail  bool  (Optional) Generate a thumbnail. Not available for prores.
thumbnailFrame  int  (Optional) Which frame to use as thumbnail. Not available for prores.
* @returns {void}
* @example
* try {
*     exporter.exportMovie({
*         codec: "openH264",
*         startFrame: 1,
*         lastFrame: frame.numberOf(),
*         dstPath: filename,
*         resX: 1920,
*         resY: 1080
*     })
* } catch (err) {
*     MessageBox.critical(err.message);
* }
*/
  function exportMovie(params?: {
    /**
     * The output file location.
     */
    dstPath?: string;
    /**
     * (Optional) The start range of playback, default value is the start of the playback toolbar, or if -1.
     */
    startFrame?: int;
    /**
     * (Optional) The end range of playback, default value is the stop of the playback toolbar, or if -1.
     */
    lastFrame?: int;
    /**
     * (Optional) Whether or not the movie will have sound, default value is true.
     */
    withSound?: boolean;
    /**
     * (Optional) Whether or not the movie will have stereo sound, default value is true. Used only in prores codecs.
     */
    stereo?: boolean;
    /**
     * (Optional) The audio samples per second to be used, default value is 22050. Only used in prores codecs
     */
    audioSampleRate?: int;
    /**
     * (Optional) The codec of the movie, default value is ""
     */
    codec?: int;
    string;
    /**
     * (Optional) Whether or not the movie will have alpha, default value is true (used only when codec supports an alpha channel). Only used in prores codecs
     */
    withAlpha?: boolean;
    /**
     * (Optional) The horizontal resolution, default value the preview resolution, or if -1.
     */
    resX?: int;
    /**
     * (Optional) The vertical resolution default value is the preview resolution, or if -1.
     */
    resY?: int;
    /**
     * (Optional) The display module, default is empty string.
     */
    displayModule?: string;
    /**
     * (Optional) Generate a thumbnail. Not available for prores.
     */
    thumbnail?: boolean;
    /**
     * (Optional) Which frame to use as thumbnail. Not available for prores.
     */
    thumbnailFrame?: int;
  }): void;

  /**
   * Export OGL frames to a QuickTime movie. Without QuickTime it will try to fallback to other supported
   * formats.
   * @param {string} fileName The output file name.
   * @param {string} dstPath The output file location.
   * @param {int} [startFrame=-1] The start range of playback, default to playback toolbar start if -1.
   * @param {int} [lastFrame=-1] The end range of playback, default to playback toolbar stop if -1.
   * @param {int} [resX=-1] The horizontal resolution, default to preview resolution if -1.
   * @param {int} [resY=-1] The vertical resolution default to preview resolution if -1.
   * @returns {void}
   */
  function exportOGLToQuicktime(
    fileName: string,
    dstPath: string,
    startFrame?: int,
    lastFrame?: int,
    resX?: int,
    resY?: int
  ): void;

  /**
* Render the scene and export a ProRes movie.
* @param {QScriptValue} params An export parameters object with following properties:
Property  Type  Description
dstPath  String  The output file location.
startFrame  int  (Optional) The start range of playback, default value is the start of the playback toolbar, or if -1.
lastFrame  int  (Optional) The end range of playback, default value is the stop of the playback toolbar, or if -1.
withSound  bool  (Optional) Whether or not the movie will have sound, default value is true.
stereo  bool  (Optional) Whether or not the movie will have stereo sound, default value is true.
audioSampleRate  int  (Optional) The audio samples per second to be used, default value is 22050.
codec  int  (Optional) The codec of the movie, default value is exporter.prores4444
withAlpha  bool  (Optional) Whether or not the movie will have alpha, default value is true (used only when codec supports an alpha channel).
resX  int  (Optional) The horizontal resolution, default value the preview resolution, or if -1.
resY  int  (Optional) The vertical resolution default value is the preview resolution, or if -1.
displayModule  String  (Optional) The display module, default is empty string.
* @returns {QScriptValue}
* @example
* try {
*     // Export with default parameters
*     var res = exporter.exportToProRes({
*         dstPath: "C:/myPath/movie1.mov"
*     });
*     if (res)
*         MessageBox.information("The export has succeeded");
*     else
*         MessageBox.information("The export has failed");
* 
*     // Export specifing parameters
*     exporter.exportToProRes({
*         dstPath: "C:/myPath/movie2.mov",
*         startFrame: 1,
*         lastFrame: frame.numberOf(),
*         withSound: true,
*         stereo: true,
*         audioSampleRate: 22050,
*         codec: exporter.prores4444,
*         withAlpha: true,
*         resX: (scene.currentResolutionX() / 4),
*         resY: (scene.currentResolutionY() / 4)
*     });
* } catch (err) {
*     MessageBox.critical(err.message);
* }
*/
  function exportToProRes(params?: {
    /**
     * The output file location.
     */
    dstPath?: string;
    /**
     * (Optional) The start range of playback, default value is the start of the playback toolbar, or if -1.
     */
    startFrame?: int;
    /**
     * (Optional) The end range of playback, default value is the stop of the playback toolbar, or if -1.
     */
    lastFrame?: int;
    /**
     * (Optional) Whether or not the movie will have sound, default value is true.
     */
    withSound?: boolean;
    /**
     * (Optional) Whether or not the movie will have stereo sound, default value is true.
     */
    stereo?: boolean;
    /**
     * (Optional) The audio samples per second to be used, default value is 22050.
     */
    audioSampleRate?: int;
    /**
     * (Optional) The codec of the movie, default value is exporter.prores4444
     */
    codec?: int;
    /**
     * (Optional) Whether or not the movie will have alpha, default value is true (used only when codec supports an alpha channel).
     */
    withAlpha?: boolean;
    /**
     * (Optional) The horizontal resolution, default value the preview resolution, or if -1.
     */
    resX?: int;
    /**
     * (Optional) The vertical resolution default value is the preview resolution, or if -1.
     */
    resY?: int;
    /**
     * (Optional) The display module, default is empty string.
     */
    displayModule?: string;
  }): QScriptValue;

  /**
   * Returns true if a scene was exported to a QuickTime in the specified directory. This method only
   * supports the default quicktime export or the openH264 codec. For ProRes export, use the
   * exporter.exportMovie function instead.
   * @param {string} codecName The codec to use. If the value is "openH264", the openH264 codec will be used. Any other value will use the Quicktime format.
   * @param {int} startFrame The start range of playback, default to playback toolbar start if -1.
   * @param {int} lastFrame The end range of playback, default to playback toolbar stop if -1.
   * @param {boolean} withSound Whether or not the movie will have sound.
   * @param {int} resX The horizontal resolution, default to preview resolution if -1.
   * @param {int} resY The vertical resolution default to preview resolution if -1.
   * @param {string} dstPath The output file location.
   * @param {string} displayModule The display module.
   * @param {boolean} generateThumbnail Whether or not to generate a thumbnail for the QuickTime.
   * @param {int} thumbnailFrame The frame to use for the thumbnail.
   * @returns {boolean}
   */
  function exportToQuicktime(
    codecName: string,
    startFrame?: int,
    lastFrame?: int,
    withSound?: boolean,
    resX?: int,
    resY?: int,
    dstPath?: string,
    displayModule?: string,
    generateThumbnail?: boolean,
    thumbnailFrame?: int
  ): boolean;

  /**
   * Returns the path of the project export directory.
   * @returns {string}
   */
  function getExportDir(): string;
}

/**
 * The FileDialog JavaScript global object. A simplified version of the Qt file dialogs.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classFileDialog.html}
 */
declare namespace FileDialog {
  /**
   * Function that will return an existing directory selected by the user.
   * @param {string} [dir=""] The directory to open the file dialog to.
   * @param {string} [title=""] The title for the file dialog.
   * @param {QWidget} [parent=0] Unused.
   * @returns {QVariant}
   */
  function getExistingDirectory(
    dir?: string,
    title?: string,
    parent?: QWidget
  ): QVariant;

  /**
   * Function that returns an existing file selected by the user.
   * @param {string} [filter=""] The filter for which files to select.
   * @param {string} [title=""] The title for the file dialog.
   * @param {QWidget} [parent=0] Unused.
   * @returns {QVariant}
   */
  function getOpenFileName(
    filter?: string,
    title?: string,
    parent?: QWidget
  ): QVariant;

  /**
   * Function that will return one or more existing files selected by the user.
   * @param {string} [dir=""] The directory to open the file dialog to.
   * @param {string} [filter=""] The filter for which files to select.
   * @param {string} [title=""] The title for the file dialog.
   * @param {QWidget} [parent=0] Unused.
   * @returns {StringList}
   */
  function getOpenFileNames(
    dir?: string,
    filter?: string,
    title?: string,
    parent?: QWidget
  ): StringList;

  /**
   * Function that will return a file name selected by the user.
   * @param {string} [filter=""] The filter for which files to select.
   * @param {string} [title=""] The title for the file dialog.
   * @param {QWidget} [parent=0] Unused.
   * @returns {QVariant}
   */
  function getSaveFileName(
    filter?: string,
    title?: string,
    parent?: QWidget
  ): QVariant;
}

/**
 * The fileMapper JavaScript global object. Map paths from one format to another.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classfileMapper.html}
 */
declare namespace fileMapper {
  /**
   * Converts a URL to a path of the form eg. /usadata000/[job]/scene-[scene]/[remainder...].
   * @param {string} url The url to convert.
   * @returns {string}
   */
  function fileURLToPath(url: string): string;

  /**
   * Returns the complete path of the passed path resolving shortcuts in windows. Will also convert the
   * path separator to '\'.
   * By example, /usadata000 is mapped to a network drive through a shortcut pointing to
   * /server/path/usadata000.
   * The path will be remapped to \\server\path\usadata000\file.txt.
   * @param {string} path The Path on Windows.
   * @returns {string}
   * @example
   * var remapped = fileMapper.toNativePath("/usadata000/file.txt");
   */
  function toNativePath(path: string): string;

  /**
   * Converts a path of the form /USA_DB/jobs/[job]/scene-[scene]/[remainder...] to eg.
   * /usadata000/[job]/scene-[scene]/[remainder...].
   * If working offline (no database) this function will return the input path.
   *  In database mode if the path is not of the form
   * this function will return the input path.
   *  In database mode if the scene cannot be located in the database this function will return the input
   * path.
   * @param {string} path The path to convert.
   * @returns {string}
   * @example
   * /USA_DB/jobs / [job] / scene - [scene] / [remainder...]
   */
  function toScenePath(path: string): string;
}

/**
 * The frame JavaScript global object. Get the current frame or number of frames. Add or remove frames
 * in your scene. Manipulate the timeline marker.
 * The frame global object can only be used in the Script Editor or the Master Controller node.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classframe.html}
 * @example
 * function sceneOpened() {
 *     // this part of the function launches the newScene function if
 *     // the scene has only one frame
 *     if (frame.numberOf() == 1)
 *         newScene();
 * }
 *
 * function newScene() {
 *     // this function opens a dialog box named Create New Scene, which
 *     // allows users to enter the number of frames to add to the scene
 *     var d = new Dialog;
 *     d.title = "Create New Scene";
 *     var nbFrames = new SpinBox;
 *     nbFrames.label = "Number of Frames";
 *     nbFrames.minimum = 1;
 *     nbFrames.maximum = 300;
 *     nbFrames.value = 60;
 *     d.add(nbFrames);
 *     if (d.exec()) {
 *         var oldNbFrames = frame.numberOf();
 *         frame.insert(0, nbFrames.value - oldNbFrames);
 *     }
 * }
 */
declare namespace frame {
  /**
   * Returns the number of the current frame.
   * @returns {int}
   */
  function current(): int;

  /**
* Inserts frames at the selected frame number.
* atFrame = 0 -> insert before first frame. atFrame = n -> insert after frame n. atFrame =
* Application.frame.numberOf() -> insert at end.
* @param {int} atFrame The frame number at which the frames will be inserted. Frames are inserted after the frame indicated. Use 0 to insert frames before the first frame.
* @param {int} nbFrames The number of frames to insert
* @param {QScriptValue} [options={}] This optional parameter should be an object with the desired behaviours for when the frames are inserted // This example will insert 7 new frames at frame 3, ripple the scene markers afterwards, and extend the exposures.var options = { ripple_markers : true,               extend_exposure : true };frame.insert(3, 7, options);
Option  Default Value  Effect
ripple_markers  false  Move the scene markers down the scene when inserting frames.
extend_exposure  false  Extend the exposure of existing drawings when inserting frames.
* @returns {boolean}
* @example
* // This example will insert 7 new frames at frame 3, ripple the scene markers afterwards, and extend the exposures.
* var options = {
*     ripple_markers: true,
*     extend_exposure: true
* };
* frame.insert(3, 7, options);
*/
  function insert(
    atFrame: int,
    nbFrames: int,
    options?: {
      /**
       * Move the scene markers down the scene when inserting frames.
       */
      ripple_markers?: false;
      /**
       * Extend the exposure of existing drawings when inserting frames.
       */
      extend_exposure?: false;
    }
  ): boolean;

  /**
   * Returns the number of frames in the scene.
   * @returns {int}
   */
  function numberOf(): int;

  /**
* Deletes frames starting from the selected frame number.
* atFrame = 0 -> delete at the beginning atFrame = n -> delete frames following the nth frame atFrame
* = Application.frame.nbFrames() -> won't delete anything
* @param {int} atFrame The frame number at which the frames will be removed. Frames are removed after the frame indicated. Use 0 to remove frames before the first frame.
* @param {int} nbFrames The number of frames to remove
* @param {QScriptValue} [options={}] This optional parameter should be an object with the desired behaviours for when the frames are removed // This example will remove 3 frames at frame 7, and ripple the scene markers afterwards.var options = { ripple_markers : true };frame.remove(7, 3, options);
Option  Default Value  Effect
ripple_markers  false  Trim and/or delete the scene markers when removing frames.
* @returns {boolean}
* @example
* // This example will remove 3 frames at frame 7, and ripple the scene markers afterwards.
* var options = {
*     ripple_markers: true
* };
* frame.remove(7, 3, options);
*/
  function remove(
    atFrame: int,
    nbFrames: int,
    options?: {
      /**
       * Trim and/or delete the scene markers when removing frames.
       */
      ripple_markers?: false;
    }
  ): boolean;

  /**
   * Allows you to change the current frame.
   * @param {int} frame The new current frame
   * @returns {void}
   */
  function setCurrent(frame: int): void;

  /**
   * Allows you to change the number of frames in the scene.
   * @param {int} nbFrames The number of frames in the scene
   * @returns {void}
   */
  function setNumberOf(nbFrames: int): void;
}

/**
 * The func JavaScript global object. Retrieve and modify values of function curves.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classfunc.html}
 * @example
 * function addSetFunctions() {
 *     //creates the function columns if needed
 *     if (!column.add("3DPATH_FUNC", "3DPATH"))
 *         MessageLog.trace("Error creating 3dpath column");
 *
 *     if (!column.add("BEZIER_FUNC", "BEZIER"))
 *         MessageLog.trace("Error creating bezier column");
 *
 *     if (!column.add("EASE_FUNC", "EASE"))
 *         MessageLog.trace("Error creating ease column");
 *
 *     // adds 2 keyframes on a 3DPATH at frame 6 and 12
 *     // with values x=2, y=2, z=1, tension=3, continuity=-1, bias=1
 *     func.addKeyFramePath3d("3DPATH_FUNC", 6, 2, 2, 1, 3, -1, 1);
 *     func.addKeyFramePath3d("3DPATH_FUNC", 12, 2, 2, 1, 3, -1, 1);
 *
 *     // removes a keyframe on 3DPATH at frame 12
 *     func.removePoint3DPath("3DPATH_FUNC", 12);
 *
 *     // prints the number of points on a 3DPath column
 *     var pathPoints = func.numberOfPointsPath3d("3DPATH_FUNC");
 *     MessageLog.trace("3DPATH_FUNC column has " + pathPoints + "points");
 *
 *     // adds a keyframe on a BEZIER at frame 10 with values y=5,
 *     // handle_leftx=9, handle_lefty=5, handle_rightx=12,
 *     // handle_righty=-0.5, constant seg=false, continuity=smooth
 *     if (!func.setBezierPoint("BEZIER_FUNC", 10, 5, 9, 5, 12, -0.5, false, "SMOOTH"))
 *         MessageLog.trace("Error creating point on bezier");
 *
 *     // sets the step value for a function column starting at frame 1 upto frame 15 hold 2
 *     func.setHoldStartFrame("BEZIER_FUNC", 1);
 *     func.setHoldStopFrame("BEZIER_FUNC", 15);
 *     func.setHoldStep("BEZIER_FUNC", 2);
 *
 *     // prints the number of points on a function column
 *     var bezPoints = func.numberOfPoints("BEZIER_FUNC");
 *     MessageLog.trace("BEZIER_FUNC column has " + bezPoints + " points");
 *
 *     // adds a keyframe on an EASE at frame 10 with values y=5,
 *     // ease_inx=0, ease_iny=0, ease_outx=0, ease_outy=180
 *     // constant seg=true, continuity=straight
 *     if (!func.setEasePoint("EASE_FUNC", 10, 6, 0, 0, 0, 180, true, "STRAIGHT"))
 *         MessageLog.trace("Error creating point on ease");
 * }
 */
declare namespace func {
  /**
   * Adds a keyframe after a point on a 3D Path and sets the X, Y and Z values, as well as the tension,
   * continuity and bias.
   * @param {string} columnName The name of the column.
   * @param {int} point The number of the point on the curve, from 0 to n-1, where n is the total number of points.
   * @param {double} x X value for the point.
   * @param {double} y Y value for the point.
   * @param {double} z Z value for the point.
   * @param {double} tension The tension value of the keyframe.
   * @param {double} continuity The continuity value of the keyframe.
   * @param {double} bias The bias value of the keyframe.
   * @returns {boolean}
   */
  function addCtrlPointAfterPath3d(
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
   * Adds a keyframe to a 3D Path and sets the X, Y and Z value, as well as the tension, continuity and
   * bias.
   * @param {string} columnName The name of the column.
   * @param {int} frame Frame number for the point.
   * @param {double} x X value for the point.
   * @param {double} y Y value for the point.
   * @param {double} z Z value for the point.
   * @param {double} tension The tension value of the keyframe.
   * @param {double} continuity The continuity value of the keyframe.
   * @param {double} bias The bias value of the keyframe.
   * @returns {boolean}
   */
  function addKeyFramePath3d(
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
   * Returns the angle of the ease-in handle.
   * @param {string} columnName The name of the column.
   * @param {int} point The number of the point on the curve, from 0 to n-1, where n is the total number of points.
   * @returns {double}
   */
  function angleEaseIn(columnName: string, point: int): double;

  /**
   * Returns the angle of the ease-out handle.
   * @param {string} columnName The name of the column.
   * @param {int} point The number of the point on the curve, from 0 to n-1, where n is the total number of points.
   * @returns {double}
   */
  function angleEaseOut(columnName: string, point: int): double;

  /**
   * Converts a 3D Path to a Separate, tuple of three beziers, and select it.
   * The example below converts a 3D Path to a Separate with the chosen algorithm. Then links to the
   * Separate beziers (node.linkAttr).
   * With conversionAlgo = "TRANSFORM_MATRIX" : returns a identical spline except for the frame rate,
   * i.e. there will be a slight change on frame's positions on the spline. When using "TRANSFORM_MATRIX"
   * the velocity information is not preserved. With conversionAlgo = "BEZIER_FITTER" : Prioritize frame
   * rate and velocity changes over spline's integrity.
   * @param {string} columnName The name of the column.
   * @param {string} conversionAlgo The name of the conversion method used. Either "TRANSFORM_MATRIX" or "BEZIER_FITTER".
   * @returns {QScriptValue}
   * @example
   * function TB_ConvertToSeparate() {
   *     var conversionAlgo = "TRANSFORM_MATRIX";
   *     var selectedNode = selection.selectedNode(0);
   *     if (selectedNode == "" || node.type(selectedNode) != "READ")
   *         return;
   *
   *     var path3dColumn = node.linkedColumn(selectedNode, "offset.attr3dpath");
   *
   *     scene.beginUndoRedoAccum("Convert 3D Path to Separate with " + conversionAlgo);
   *     var beziers = func.convertToSeparate(path3dColumn, conversionAlgo);
   *
   *     var offsetAttrType = node.getAttr(selectedNode, frame.current, "offset.separate");
   *     offsetAttrType.setValueAt(true, frame.current);
   *
   *     if (offsetAttrType.boolValue()) {
   *         node.unlinkAttr(selectedNode, "offset.x");
   *         node.unlinkAttr(selectedNode, "offset.y");
   *         node.unlinkAttr(selectedNode, "offset.z");
   *     }
   *
   *     node.linkAttr(selectedNode, "offset.x", beziers[0]);
   *     node.linkAttr(selectedNode, "offset.y", beziers[1]);
   *     node.linkAttr(selectedNode, "offset.z", beziers[2]);
   *
   *     scene.endUndoRedoAccum();
   * }
   */
  function convertToSeparate(
    columnName: string,
    conversionAlgo: string
  ): QScriptValue;

  /**
   * Returns the Start value from the Hold Value Editor dialog box, for Bezier, Ease and Velo-based
   * Function Editors.
   * @param {string} columnName The name of the column.
   * @returns {int}
   */
  function holdStartFrame(columnName: string): int;

  /**
   * Returns the Step value from the Hold Value Editor dialog box, for Bezier, Ease and Velo-based
   * Function Editors.
   * @param {string} columnName The name of the column.
   * @returns {int}
   */
  function holdStep(columnName: string): int;

  /**
   * Returns the Stop value from the Hold Value Editor dialog box, for Bezier, Ease and Velo-based
   * Function Editors.
   * @param {string} columnName The name of the column.
   * @returns {int}
   */
  function holdStopFrame(columnName: string): int;

  /**
   * Returns the number of keyframes and control points on a curve.
   * @param {string} columnName The name of the column.
   * @returns {int}
   */
  function numberOfPoints(columnName: string): int;

  /**
   * Returns the number of keyframes and control points on the 3D Path.
   * @param {string} columnName The name of the column.
   * @returns {int}
   */
  function numberOfPointsPath3d(columnName: string): int;

  /**
   * Returns the bias value for the specified point on the 3D Path.
   * @param {string} columnName The name of the column.
   * @param {int} point The number of the point on the curve, from 0 to n-1, where n is the total number of points.
   * @returns {double}
   */
  function pointBiasPath3d(columnName: string, point: int): double;

  /**
   * Returns true to indicate that the point is on a constant segment, or false to indicate that the
   * point is not on a constant segment.
   * @param {string} columnName The name of the column.
   * @param {int} point The number of the point on the curve, from 0 to n-1, where n is the total number of points.
   * @returns {boolean}
   */
  function pointConstSeg(columnName: string, point: int): boolean;

  /**
   * Returns the continuity of the curve that follows the point. One of the following values will be
   * returned, in upper-case: SMOOTH, CORNER or STRAIGHT.
   * @param {string} columnName The name of the column.
   * @param {int} point The number of the point on the curve, from 0 to n-1, where n is the total number of points.
   * @returns {string}
   */
  function pointContinuity(columnName: string, point: int): string;

  /**
   * Returns the continuity value (STRAIGHT, SMOOTH or CORNER) for the specified point on the 3D Path.
   * @param {string} columnName The name of the column.
   * @param {int} point The number of the point on the curve, from 0 to n-1, where n is the total number of points.
   * @returns {double}
   */
  function pointContinuityPath3d(columnName: string, point: int): double;

  /**
   * Returns the number of frames in the ease-in.
   * @param {string} columnName The name of the column.
   * @param {int} point The number of the point on the curve, from 0 to n-1, where n is the total number of points.
   * @returns {double}
   */
  function pointEaseIn(columnName: string, point: int): double;

  /**
   * Returns the number of frames in the ease-out.
   * @param {string} columnName The name of the column.
   * @param {int} point The number of the point on the curve, from 0 to n-1, where n is the total number of points.
   * @returns {double}
   */
  function pointEaseOut(columnName: string, point: int): double;

  /**
   * Returns the X value of the left handle of a point on a curve.
   * @param {string} columnName The name of the column.
   * @param {int} point The number of the point on the curve, from 0 to n-1, where n is the total number of points.
   * @returns {double}
   */
  function pointHandleLeftX(columnName: string, point: int): double;

  /**
   * Returns the Y value of the left handle of a point on a curve.
   * @param {string} columnName The name of the column.
   * @param {int} point The number of the point on the curve, from 0 to n-1, where n is the total number of points.
   * @returns {double}
   */
  function pointHandleLeftY(columnName: string, point: int): double;

  /**
   * Returns the X value of the right handle of a point on a curve.
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n-1, where n is the total number of points.
   * @returns {double}
   */
  function pointHandleRightX(columnName: string, point: int): double;

  /**
   * Returns the Y value of the right handle of a point on a curve.
   * @param {string} columnName The name of the column.
   * @param {int} point The number of the point on the curve, from 0 to n-1, where n is the total number of points.
   * @returns {double}
   */
  function pointHandleRightY(columnName: string, point: int): double;

  /**
   * Returns the frame at which it's locked, or returns 0 if the point is not locked.
   * @param {string} columnName The name of the column.
   * @param {int} point The number of the point on the curve, from 0 to n-1, where n is the total number of points.
   * @returns {double}
   */
  function pointLockedAtFrame(columnName: string, point: int): double;

  /**
   * Returns the tension value for the specified point on the 3D Path.
   * @param {string} columnName The name of the column.
   * @param {int} point The number of the point on the curve, from 0 to n-1, where n is the total number of points.
   * @returns {double}
   */
  function pointTensionPath3d(columnName: string, point: int): double;

  /**
   * Returns the X value (frame number) of a point on a function curve.
   * @param {string} columnName The name of the column.
   * @param {int} point The number of the point on the curve, from 0 to n-1, where n is the total number of points.
   * @returns {double}
   */
  function pointX(columnName: string, point: int): double;

  /**
   * Returns the value of the specified point on the X path.
   * @param {string} columnName The name of the column.
   * @param {int} point The number of the point on the curve, from 0 to n-1, where n is the total number of points.
   * @returns {double}
   */
  function pointXPath3d(columnName: string, point: int): double;

  /**
   * Returns the Y value of a point on a function curve.
   * @param {string} columnName The name of the column.
   * @param {int} point The number of the point on the curve, from 0 to n-1, where n is the total number of points.
   * @returns {double}
   */
  function pointY(columnName: string, point: int): double;

  /**
   * Returns the value of the specified point on the Y path.
   * @param {string} columnName The name of the column.
   * @param {int} point The number of the point on the curve, from 0 to n-1, where n is the total number of points.
   * @returns {double}
   */
  function pointYPath3d(columnName: string, point: int): double;

  /**
   * Returns the value of the specified point on the Z path.
   * @param {string} columnName The name of the column.
   * @param {int} point The number of the point on the curve, from 0 to n-1, where n is the total number of points.
   * @returns {double}
   */
  function pointZPath3d(columnName: string, point: int): double;

  /**
   * Used to remove either a key frame, or a control point.
   * @param {string} columnName The name of the column.
   * @param {int} point The number of the point on the curve, from 0 to n-1, where n is the total number of points.
   * @returns {boolean}
   */
  function removePointPath3d(columnName: string, point: int): boolean;

  /**
   * Sets the values of a point on a Bezier function curve.
   * @param {string} columnName The name of the column.
   * @param {int} frame Frame number for the point.
   * @param {double} y Y value for the point.
   * @param {double} handleLeftX X value for the left handle of the point.
   * @param {double} handleLeftY Y value for the left handle.
   * @param {double} handleRightX X value for the right handle.
   * @param {double} handleRightY Y value for the right handle.
   * @param {boolean} constSeg Boolean expression (with a true or false value) to indicate whether the segment is constant or interpolated.
   * @param {string} continuity String value for the continuity of the point. The string must be in all upper-case. The following are the acceptable values: STRAIGHT, SMOOTH and CORNER.
   * @returns {boolean}
   */
  function setBezierPoint(
    columnName: string,
    frame: int,
    y: double,
    handleLeftX: double,
    handleLeftY: double,
    handleRightX: double,
    handleRightY: double,
    constSeg: boolean,
    continuity: string
  ): boolean;

  /**
   * Sets the values of a point on an Ease function curve.
   * @param {string} columnName The name of the column.
   * @param {int} frame Frame number for the point.
   * @param {double} y Y value for the point.
   * @param {double} easeIn The number of frames in the ease-in.
   * @param {double} angleEaseIn The angle of the ease-in handle.
   * @param {double} easeOut The number of frames in the ease-out.
   * @param {double} angleEaseOut The angle of the ease-out handle.
   * @param {boolean} constSeg Boolean expression (with a true or false value) to indicate whether the segment is constant or interpolated.
   * @param {string} continuity String value for the continuity of the point. The string must be in all upper-case. The following are the acceptable values: STRAIGHT, SMOOTH and CORNER.
   * @returns {boolean}
   */
  function setEasePoint(
    columnName: string,
    frame: int,
    y: double,
    easeIn: double,
    angleEaseIn: double,
    easeOut: double,
    angleEaseOut: double,
    constSeg: boolean,
    continuity: string
  ): boolean;

  /**
   * Sets the Start value in the Hold Value Editor dialog box, for Bezier, Ease and Velo-based Function
   * Editors.
   * @param {string} columnName The name of the column.
   * @param {int} start The start frame of the hold.
   * @returns {boolean}
   */
  function setHoldStartFrame(columnName: string, start: int): boolean;

  /**
   * Sets the Hold value in the Hold Value Editor dialog box, for Bezier, Ease and Velo-based Function
   * Editors.
   * @param {string} columnName The name of the column.
   * @param {int} step The value of the steps in the hold.
   * @returns {boolean}
   */
  function setHoldStep(columnName: string, step: int): boolean;

  /**
   * Sets the Stop value in the Hold Value Editor dialog box, for Bezier, Ease and Velo-based Function
   * Editors.
   * @param {string} columnName The name of the column.
   * @param {int} stop The stop frame of the hold.
   * @returns {boolean}
   */
  function setHoldStopFrame(columnName: string, stop: int): boolean;

  /**
   * Sets the constant segment flag of point i of path p to b.
   * @param {string} columnName The name of the column.
   * @param {int} point The number of the point on the curve, from 0 to n-1, where n is the total number of points.
   * @param {boolean} constant bool flag.
   * @returns {boolean}
   */
  function setPath3dPointConstantSegment(
    columnName: string,
    point: int,
    constant: boolean
  ): boolean;

  /**
   * Sets the constant segment flag of point found at frame f of path p to b.
   * @param {string} columnName The name of the column.
   * @param {double} frame The frame number at which the point to modify is located
   * @param {boolean} constant bool flag.
   * @returns {boolean}
   */
  function setPath3dPointConstantSegmentForFrame(
    columnName: string,
    frame: double,
    constant: boolean
  ): boolean;

  /**
   * Used to set values in either a key frame, or a control point, but cannot change a key frame into a
   * control point or a control point into a key frame.
   * To change a key frame into a control point or a control point into a key frame, you must remove the
   * point and add a new point.
   * @param {string} columnName The name of the column.
   * @param {int} point The number of the point on the curve, from 0 to n-1, where n is the total number of points.
   * @param {double} x X value for the point.
   * @param {double} y Y value for the point.
   * @param {double} z Z value for the point.
   * @param {double} tension The tension value of the keyframe.
   * @param {double} continuity The continuity value of the keyframe.
   * @param {double} bias The bias value of the keyframe.
   * @returns {boolean}
   */
  function setPointPath3d(
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
   * Sets the values of a point on a Velocity-Based function curve.
   * @param {string} columnName The name of the column.
   * @param {int} frame Frame number for the point.
   * @param {double} y Y value for the point.
   * @returns {boolean}
   */
  function setVeloBasedPoint(
    columnName: string,
    frame: int,
    y: double
  ): boolean;

  /**
   * Returns the tension of the ease column.
   * @param {string} columnName The name of the column.
   * @returns {double}
   */
  function tensionEase(columnName: string): double;
}

/**
 * The Input JavaScript global object. A simplified version of the Qt input dialogs.
 * Provides a simple convenient dialog to get a single value from the user.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classInput.html}
 */
declare namespace Input {
  /**
   * Function to get an item from the user.
   * @param {string} label A prompt for the input you want.
   * @param {StringList} itemList A list of items for the user to choose from.
   * @param {string} [currentItem=""] The currently selected item from the list.
   * @param {boolean} [editable=false] Whether or not the user can enter their own item.
   * @param {string} [title=""] The title for the dialog box.
   * @param {QWidget} [parent=0] Unused.
   * @returns {QVariant}
   */
  function getItem(
    label: string,
    itemList: StringList,
    currentItem?: string,
    editable?: boolean,
    title?: string,
    parent?: QWidget
  ): QVariant;

  /**
   * Function to get an item from the user.
   * @param {StringList} itemList A list of items for the user to choose from.
   * @param {string} [currentItem=""] The currently selected item from the list.
   * @param {boolean} [editable=false] Whether or not the user can enter their own item.
   * @param {QWidget} [parent=0] Unused.
   * @returns {QVariant}
   */
  function getItem(
    itemList: StringList,
    currentItem?: string,
    editable?: boolean,
    parent?: QWidget
  ): QVariant;

  /**
   * Function to get a number from the user.
   * @param {string} [label=""] A prompt for the input you want.
   * @param {double} [value=0] Number to appear in the dialog box number field when opened.
   * @param {int} [decimals=0] The number of decimals that will be allowed in the input.
   * @param {double} [minValue=-2147483647] The minimum value allowed for the input.
   * @param {double} [maxValue=2147483647] The maximum value allowed for the input.
   * @param {string} [title=""] The title for the dialog box.
   * @param {QWidget} [parent=0] Unused.
   * @returns {QVariant}
   */
  function getNumber(
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
   * @param {string} [label=""] A prompt for the input you want.
   * @param {string} [text=""] Text to appear in the dialog box text field when opened.
   * @param {string} [title=""] The title for the dialog box.
   * @param {QWidget} [parent=0] Unused.
   * @returns {QVariant}
   */
  function getText(
    label?: string,
    text?: string,
    title?: string,
    parent?: QWidget
  ): QVariant;
}

/**
 * The KeyModifiers JavaScript global object. Query key modifiers.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classKeyModifiers.html}
 */
declare namespace KeyModifiers {
  /**
   * Check if the Alt key is pressed.
   * @returns {boolean}
   */
  function IsAlternatePressed(): boolean;

  /**
   * Check if the Ctrl key is pressed.
   * @returns {boolean}
   */
  function IsControlPressed(): boolean;

  /**
   * Check if the Shift key is pressed.
   * @returns {boolean}
   */
  function IsShiftPressed(): boolean;

  /**
   * Check if the space key is pressed.
   * @returns {boolean}
   */
  function IsSpacePressed(): boolean;
}

/**
 * The library JavaScript global object. Select templates, and generate thumbnails or movies for them.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classlibrary.html}
 */
declare namespace library {
  /**
   * Generates the movies for selected templates.
   * @param {int} idx The index of the templates to generate QuickTime Movie(s) for.
   * @param {int} start The starting frame for the generated QuickTime Movie(s).
   * @param {int} end The ending frame for the generated QuickTime Movie(s).
   * @param {int} xRes Number of pixels in the x-axis.
   * @param {int} yRes Number of pixels in the y-axis.
   * @param {string} userName The desired user name.
   * @param {string} displayNode The display node.
   * @param {string} dstPath The destination path.
   * @param {boolean} withSound Whether or not the generated movie(s) will have sound.
   * @returns {boolean}
   */
  function getQuicktimeMovieForSelectedTpl(
    idx: int,
    start: int,
    end: int,
    xRes: int,
    yRes: int,
    userName: string,
    displayNode: string,
    dstPath: string,
    withSound: boolean
  ): boolean;

  /**
   * Returns the path to the ith file that is selected.
   * @param {int} i The index of the target file in the currently selected files.
   * @returns {string}
   */
  function getSelectedTemplate(i: int): string;

  /**
   * Generates the thumbnails for selected templates.
   * @param {int} idx The index of the templates to generate thumbnails for.
   * @param {int} res The desired resolution of the thumbnails.
   * @param {string} dstPath The destination path for the generated thumbnails.
   * @returns {boolean}
   */
  function getThumbnailForSelectedTpl(
    idx: int,
    res: int,
    dstPath: string
  ): boolean;

  /**
   * Returns the number of files that are selected.
   * @returns {int}
   */
  function numberOfTemplatesSelected(): int;
}

/**
 * The MessageBox JavaScript class. A simplified version of the MessageBox Qt dialog.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classMessageBox.html}
 * @example
 * MessageBox.warning(" This is a warning.");
 */
declare namespace MessageBox {
  /**
   * A critical box. By default has one button labeled 'Retry'.
   * @param {string} text The text to display in the information box body.
   * @param {int} button0 Default = 1. 1 to display the first button.
   * @param {int} button1 Default = 0. 1 to display the second button.
   * @param {int} button2 Default = 0. 1 to display the third button.
   * @param {string} title The text to display in the title.
   * @param {QWidget} parent The parent widget to inherit.
   * @returns {QScriptValue}
   */
  function critical(
    text: string,
    button0?: int,
    button1?: int,
    button2?: int,
    title?: string,
    parent?: QWidget
  ): QScriptValue;

  /**
   * An information box. By default has one button labeled 'OK'.
   * @param {string} text The text to display in the information box body.
   * @param {int} button0 Default = 1. 1 to display the first button.
   * @param {int} button1 Default = 0. 1 to display the second button.
   * @param {int} button2 Default = 0. 1 to display the third button.
   * @param {string} title The text to display in the title.
   * @param {QWidget} parent The parent widget to inherit.
   * @returns {QScriptValue}
   */
  function information(
    text: string,
    button0?: int,
    button1?: int,
    button2?: int,
    title?: string,
    parent?: QWidget
  ): QScriptValue;

  /**
   * A warning box. By default has two buttons labeled 'Abort' and 'Retry'.
   * @param {string} text The text to display in the information box body.
   * @param {int} button0 Default = 1. 1 to display the first button.
   * @param {int} button1 Default = 0. 1 to display the second button.
   * @param {int} button2 Default = 0. 1 to display the third button.
   * @param {string} title The text to display in the title.
   * @param {QWidget} parent The parent widget to inherit.
   * @returns {QScriptValue}
   */
  function warning(
    text: string,
    button0?: int,
    button1?: int,
    button2?: int,
    title?: string,
    parent?: QWidget
  ): QScriptValue;
}

/**
 * The MessageLog JavaScript global object. Allows the user to print messages to the message log
 * window.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classMessageLog.html}
 * @example
 * MessageLog.trace("Export template failed. Nothing selected.");
 */
declare namespace MessageLog {
  /**
   * Clears the message log.
   * The same as clearing the message log through the ui. Cleared content can still be retrieved with
   * getLog().
   * @returns {void}
   */
  function clearLog(): void;

  /**
   * Writes the message to the message log if debug mode is on.
   * @param {string} messageIfDebug The message to be written to the message log if debug mode is on.
   * @returns {void}
   */
  function debug(messageIfDebug: string): void;

  /**
   * Prints message to message log as an error.
   * When running as an interactive application, this will report the error in a modal dialog box (at the
   * end of the script only). In batch mode, the error is logged to the log file, like trace().
   * @param {string} message The message to the written to the message log as an error.
   * @returns {void}
   */
  function error(message: string): void;

  /**
   * Returns the content of the message log.
   * @returns {string}
   */
  function getLog(): string;

  /**
   * Returns whether the debug mode is set.
   * @returns {boolean}
   */
  function isDebug(): boolean;

  /**
   * Sets the debug mode to on/off.
   * @param {boolean} b If true sets the debug mode to on.
   * @returns {void}
   */
  function setDebug(b: boolean): void;

  /**
   * Writes the message to the message log.
   * @param {string} message The message to be written to the message log.
   * @returns {void}
   */
  function trace(message: string): void;
}

/**
 * The MovieImport JavaScript global object. Import a QuickTime movie in the current scene.
 * This object is used to import a QuickTime movie in the scene. First the user needs to set up the
 * importing parameters using the functions: setMovieFilename, setImageFolder, setImagePrefix and
 * setAudioFile. Then call doImport and after that, the user can iterate over the number of images, the
 * current image filename and whether an audio file was created or not.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classMovieImport.html}
 */
declare namespace MovieImport {
  /**
   * Performs the import - no progress bar.
   * @returns {boolean}
   */
  function doImport(): boolean;

  /**
   * Returns the complete filename for the imported image 'index' from the last import.
   * @param {int} index The index of the desired image from the last import.
   * @returns {string}
   */
  function image(index: int): string;

  /**
   * Returns true if a sound file was created at the given filename.
   * @returns {boolean}
   */
  function isAudioFileCreated(): boolean;

  /**
   * Returns the number of imported images from the last import.
   * @returns {int}
   */
  function numberOfImages(): int;

  /**
   * Sets the expected audio filename. must be wav format (as this is currently the only one supported)
   * sound filename can be left empty. if so, there will not be any file created.
   * The audio created will contains the sound covered by the range defined by 'startFrame' to
   * 'stopFrame'.
   * @param {string} audioFilename The expected audio filename.
   * @returns {void}
   */
  function setAudioFile(audioFilename: string): void;

  /**
   * Defines where to store the extracted images.
   * @param {string} folder The folder to store extracted images.
   * @returns {void}
   */
  function setImageFolder(folder: string): void;

  /**
   * Defines which prefix to use to save the images.
   * @param {string} prefix The prefix to use to save the images.
   * @returns {void}
   */
  function setImagePrefix(prefix: string): void;

  /**
   * Defines the input movie filename.
   * @param {string} filename The input movie filename.
   * @returns {void}
   */
  function setMovieFilename(filename: string): void;

  /**
   * Sets the start frame (frame are 1 bound). The default value is 1. This will affect the 'doImport()'
   * command where only these frames are considered.
   * @param {int} startFrame The frame to start from.
   * @returns {void}
   */
  function setStartFrame(startFrame: int): void;

  /**
   * Sets the desired last frame. This will affect the number of frames that will be extracted by the
   * 'doImport()' default value: 0 which mean that all frames are imported.
   * @param {int} stopFrame The frame to stop at.
   * @returns {void}
   */
  function setStopFrame(stopFrame: int): void;
}

/**
 * The node JavaScript global object.
 * Nodes are synonymous with Filter, IO, Move and Group in the Node View. With node methods, retrieve
 * values from nodes, effects and composite. Add, link or set their attributes. Nodes can have
 * identical names, so, their full path is needed to identify a them. The full path always starts with
 * the root group name which is Top. Then, the other parent group names follow it separated by a "/".
 * e.g. "Top/MyFirstGroup/MySecondGroup/MyNodeName". The nomenclature is a bit confusing, but node name
 * methods use the path as the node name most of the time. The parentNode method from this class adds
 * the Composite node in the parent group of the selected nodes. The link method, in a loop, connects
 * all selected nodes to the new Composite node. The setCoord() method positions a new node in the Node
 * View. The syntax for a node paths is: "Top/Group_Name/Node_Name".
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classnode.html}
 * @example
 * function compose() {
 *     var n = selection.numberOfNodesSelected();
 *     var i, posx, posy;
 *     if (n > 0) {
 *         var comp = node.add(node.parentNode(selection.selectedNode(0)), "comp", "COMPOSITE", 0, 0, 0);
 *         posx = 0;
 *         posy = -10000;
 *         for (i = 0; i < n; ++i) {
 *             var selNode = selection.selectedNode(i);
 *             node.link(selNode, 0, comp, i);
 *             posx += node.coordX(selNode);
 *             if (node.coordY(selNode) > posy)
 *                 posy = node.coordY(selNode);
 *         }
 *         posx /= n;
 *         posy += 50;
 *         node.setCoord(comp, posx, posy);
 *     }
 * }
 */
declare namespace node {
  /**
   * Add a node to the Node View.
   * For an example usage of add, see the above Detailed Description.
   * @param {string} parentGroup The path of the parent node into which you want to add this node.
   * @param {string} name The name of the node you will add.
   * @param {string} type The type of node you will add. The node types are like: READ, COMPOSITE, PEG, QUADMAP, SHADOW, etc.
   * @param {int} x The X position of the node in the Node View.
   * @param {int} y The Y position of the node in the Node View.
   * @param {int} z The Z position of the node in the Node View. This property is important when two nodes overlap.
   * @returns {string}
   */
  function add(
    parentGroup: string,
    name: string,
    type: string,
    x: int,
    y: int,
    z: int
  ): string;

  /**
   * Return the value of the "Add Composite To Group" attribute of the peg-node. This method is obsolete.
   * @param {string} node The path of the node.
   * @returns {boolean}
   */
  function addCompositeToGroup(node: string): boolean;

  /**
   * Clears the disabled cache state for all cached nodes.
   * @returns {void}
   */
  function clearCacheDisabledState(): void;

  /**
   * Clears the disabled cache state for the vNodes passed in param.
   * @param {StringList} vNodes
   * @returns {void}
   */
  function clearCacheDisabledState(vNodes: StringList): void;

  /**
   * Clears the disabled cache state for the vNode passed in param.
   * @param {string} vNode
   * @returns {void}
   */
  function clearCacheDisabledState(vNode: string): void;

  /**
   * Returns an integer indicating the X position of a node in the Node View.
   * The example below takes the path of a group node, uses coordX to retrieve it's X coordinate in the
   * Node View, then moves it to the right by 50 units.
   * @param {string} node The path of the node.
   * @returns {int}
   * @example
   * function shiftGroup(exNode) {
   *     if (node.isGroup(exNode)) {
   *         var x = node.coordX(exNode);
   *         var y = node.coordY(exNode);
   *         x += 50;
   *         node.setCoord(exNode, x, y);
   *     }
   * }
   */
  function coordX(node: string): int;

  /**
   * Returns an integer indicating the Y position of a node in the Node View.
   * The example below takes the path of a group node, uses coordY to retrieve it's Y coordinate in the
   * Node View, then moves it to the down by 50 units.
   * @param {string} node The path of the node.
   * @returns {int}
   * @example
   * function shiftGroup(exNode) {
   *     if (node.isGroup(exNode)) {
   *         var x = node.coordX(exNode);
   *         var y = node.coordY(exNode);
   *         y += 50;
   *         node.setCoord(exNode, x, y);
   *     }
   * }
   */
  function coordY(node: string): int;

  /**
   * Returns an integer indicating the Z position of a node in the Node View.
   * The example below takes the path of a group node and then shifts its position 50 units to the right,
   * and down. It also moves its position in the z-axis to the back.
   * @param {string} node The path of the node.
   * @returns {int}
   * @example
   * function shiftGroup(exNode) {
   *     if (node.isGroup(exNode)) {
   *         var x = node.coordX(exNode);
   *         var y = node.coordY(exNode);
   *         var z = node.coordZ(exNode);
   *         x += 50;
   *         y += 50;
   *         if (z >= 0)
   *             z = -1;
   *         node.setCoord(exNode, x, y, z);
   *     }
   * }
   */
  function coordZ(node: string): int;

  /**
   * Create a new attribute for the given node.
   * The example below enables the boolean value of a given attribute. If the attribute does not exist,
   * it creates it and sets it to true.
   * @param {string} node The name of the node.
   * @param {string} type Type of attribute to create.
   * @param {string} attrName The name of the attribute.
   * @param {string} displayName The name of the attribute as it will appear in the UI.
   * @param {boolean} linkable Linkable status.
   * @returns {boolean}
   * @example
   * function toggleBool(nodeName, attrName) {
   *     var attr = node.getAttr(nodeName, 1.0, attrName);
   *     if (attr.keyword() == "") {
   *         var visualAttrName = attrName;
   *         var idx = attrName.lastIndexOf(".");
   *         if (idx >= 0) {
   *             visualAttrName = attrName.substr(idx);
   *         }
   *
   *         if (node.createDynamicAttr(nodeName, "BOOL", attrName, visualAttrName, false)) {
   *             attr = node.getAttr(nodeName, 1.0, attrName);
   *         }
   *
   *         if (attr.keyword() != "") {
   *             node.setTextAttr(nodeName, attrName, 1.0, "true");
   *         }
   *     }
   * }
   */
  function createDynamicAttr(
    node: string,
    type: string,
    attrName: string,
    displayName: string,
    linkable: boolean
  ): boolean;

  /**
   * Create a group from the selection of nodes. The list of nodes is a string where the nodes are
   * separated by commas. The actual name of each node in the list of nodes must include the full path of
   * that node.
   * The parent of the group is implicitly specified. It will be the same as the parent of the first node
   * in the list. The following example creates a group from the currently selected nodes, and verifies
   * that all of the selected nodes were added.
   * @param {string} nodes This is a comma delimited list of names of nodes. e.g. (node0,node1,node2)
   * @param {string} groupName The name of the group to create.
   * @returns {string}
   * @example
   * function groupExample() {
   *     var selected = selection.selectedNodes();
   *     var nodesToGroup = selected.join();
   *     var origParent = node.parentNode(selection.selectedNode(0));
   *     var group = node.createGroup(nodesToGroup, "group");
   *
   *     for (var i = 0; i < selected.length; i++) {
   *         if (node.parentNode(selection.selectedNode(i) == origParent) MessageLog.trace("Problem adding \"" + selection.selectedNode(i) + "\" to the new group.");
   *         }
   *     }
   */
  function createGroup(nodes: string, groupName: string): string;

  /**
   * Delete a single node. Optionally, delete all columns and element associated to that node. The column
   * and element would only be removed when no other nodes refer to them.
   * The following example deletes the currently selected node.
   * @param {string} nodePath The path of the node.
   * @param {boolean} [deleteTimedValues=false] A boolean that indicates if the columns referenced by that node shall be removed if they are no longer in use.
   * @param {boolean} [deleteElements=false] A boolean that indicates if the element should also be removed, if they are no longer in use.
   * @returns {boolean}
   * @example
   * node.deleteNode(selection.selectedNode(0), false, false);
   */
  function deleteNode(
    nodePath: string,
    deleteTimedValues?: boolean,
    deleteElements?: boolean
  ): boolean;

  /**
   * Returns the path of the destination node linked to by the output port on the source node.
   * The following example returns a list of all of the destination nodes of the node passed in the
   * parameter.
   * @param {string} sourceNode The path of the node.
   * @param {int} iPort The port number on which you want to find the connected node. This value is between 0 and the results of the numberOfOutputPorts() method, minus one.
   * @param {int} iLink The link number whose destination node you want to find. This value is between 0 and the results of the numberOfOutputLinks() method, minus one.
   * @returns {string}
   * @example
   * function destinationNodes(exampleNode) {
   *     var numOutput = node.numberOfOutputPorts(exampleNode);
   *     var listOfDestinationNodes = [];
   *
   *     for (var i = 0; i < numOutput; i++)
   *         listOfDestinationNodes.push(node.dstNode(exampleNode, i, 0));
   *
   *     return listOfDestinationNodes;
   * }
   * // For another example use of dstNode, see link().
   */
  function dstNode(sourceNode: string, iPort: int, iLink: int): string;

  /**
   * Returns the path and addition information of the destination node linked to the source node.
   * The example below shows the relationship between dstNodeInfo and srcNode.
   * @param {string} sourceNode The path of the source node.
   * @param {int} iPort The output port number on which you want to find the connected node. This value is between 0 and the results of the numberOfOutputPorts() method, minus one.
   * @param {int} iLink The link number whose destination node you want to find. This value is between 0 and the results of the numberOfOutputLinks() method, minus one.
   * @returns {QScriptValue}
   * @example
   * var exNode = selection.selectedNode(0);
   * var destination = node.dstNodeInfo(exNode, 0, 0);
   *
   * //You can use the 2 properties of the source object to use srcNode()
   * var source = node.srcNode(destination.node, destination.port);
   * MessageLog.trace(node.equals(source, exNode); //This will print true
   */
  function dstNodeInfo(
    sourceNode: string,
    iPort: int,
    iLink: int
  ): QScriptValue;

  /**
   * Returns true or false to indicate if a node path is equal to another. Used to compare node paths.
   * The example below deconstructs and then rebuilds a node path using subNodeByName, then compares the
   * original to the rebuilt path. This example will print true. exNode is the full name of a node, such
   * as "Top/MyGroup/MyNode".
   * @param {string} node1 The path of the first node.
   * @param {string} node2 The path of the second node.
   * @returns {boolean}
   * @example
   * function nodePathRebuild(exNode) {
   *     var name = node.getName(exNode);
   *     var parent = node.parentNode(exNode);
   *
   *     //With both the parent path and the node name, you can rebuild the original node with subNodeByName
   *     var rebuiltNode = node.subNodeByName(parent, exNode);
   *     //This rebuilt node will be equal to the original node
   *     MessageLog.trace(node.equals(exNode, rebuiltNode)); //This will print true
   *
   *     MessageLog.trace(node.equals(exNode, node.noNode()); //Since exNode is a valid node, this will print false
   *     }
   */
  function equals(node1: string, node2: string): boolean;

  /**
   * Create a group for each exposure of the element where there is a symbol and will put the content of
   * the symbol in that group.
   * If disable element is TRUE, will disable the element afterwards. If clearExposure is TRUE, will
   * clear the exposures where there were symbols afterwards. Will use prefix as the prefix for the
   * generated group names.
   * A symbol combines animation, artwork or layers into a single object that you can control in one
   * layer.
   * The example below executes explodeElementSymbolsInGroup for the currently selected drawing node, and
   * positions the newly created node groups to the left of the original node.
   * @param {string} element Element node path.
   * @param {boolean} disableElement True to disable the exploded element.
   * @param {boolean} clearExposure True to clear the exposure.
   * @param {string} [prefix=""] Add a prefix to the symbols.
   * @returns {void}
   * @example
   * function explodeSymbol() {
   *     var symbolNode = selection.selectedNode(0);
   *
   *     //Creates a symbol out of the currently selected drawing
   *     Action.perform("onActionCreateSymbolFromSelection()", "timelineView");
   *
   *     var prefix = node.getName(symbolNode) + "_";
   *     var parent = node.parentNode(symbolNode);
   *     var path = parent + "/" + prefix;
   *     var i = 1;
   *     var x = node.coordX(symbolNode);
   *     var y = node.coordY(symbolNode);
   *     var flag = false;
   *
   *     node.explodeElementSymbolsInGroup(symbolNode, true, false, prefix);
   *
   *     while (i <= frame.numberOf() && flag == false) {
   *         if (node.type(path + i) != "") {
   *             node.setCoord((path + i), x, y);
   *         } else {
   *             flag = true;
   *         }
   *         y = y + 20;
   *         i++;
   *     }
   * }
   */
  function explodeElementSymbolsInGroups(
    element: string,
    disableElement: boolean,
    clearExposure: boolean,
    prefix?: string
  ): void;

  /**
   * Explode a group into its parent group. This method is identical to the "Explode Selected Group" from
   * the Node View.
   * The following example creates a group then explodes the group if it was successful.
   * @param {string} groupName The name of the node.
   * @returns {boolean}
   * @example
   * function groupExample() {
   *     var selected = selection.selectedNodes();
   *     var nodesToGroup = selected.join();
   *     var group = node.createGroup(nodesToGroup, "group");
   *
   *     if (node.isGroup(group))
   *         MessageLog.trace(node.explodeGroup(group));
   * }
   */
  function explodeGroup(groupName: string): boolean;

  /**
   * If the Source node is a Group, this method returns the path of the node inside the Group node that
   * is the source. If the source is not inside a group, the flatSrcNode() method behaves like the
   * srcNode() method.
   * The example below prints the source inside the group, and the source outisde the group of the
   * currently selected node if it is in a group and has a source.
   * @param {string} node The path of the node.
   * @param {int} iPort The port number on the destination node whose source node you want to find. This value is between 0 and the results of the numberOfInputPorts() method, minus one.
   * @returns {string}
   * @example
   * function sourceFinder() {
   *     var myNode = selection.selectedNode(0);
   *     var parentNode = node.parentNode(myNode);
   *
   *     if (node.isGroup() && node.isLinked(myNode, 0)) {
   *         var source = node.srcNode(myNode, 0);
   *         var flatSource = node.flatSrcNode(myNode, 0);
   *         MessageLog.trace("Source inside the group: " + source);
   *         if (source != flatSource)
   *             MessageLog.trace("Source outside the group: " + flatSource);
   *     }
   * }
   */
  function flatSrcNode(node: string, iPort: int): string;

  /**
   * Returns a list of the keywords of all of the Attribute objects of the given node.
   * @param {string} node The path of the node.
   * @returns {StringList}
   */
  function getAllAttrKeywords(node: string): StringList;

  /**
   * Returns a list of the names of all of the Attribute objects of the given node.
   * @param {string} node The path of the node.
   * @returns {StringList}
   */
  function getAllAttrNames(node: string): StringList;

  /**
   * Returns all nodes that are cached.
   * The following example prints the list of all cached nodes in a group and its subgroups.
   * @param {string} root The name of a group.
   * @returns {StringList}
   * @example
   * function printCachedNodes() {
   *     var cachedNodes = node.getAllCachedNodes(node.root());
   *     for (var i = 0; i < cachedNodes.length; ++i)
   *         MessageLog.trace("Node " + cachedNodes[i] + " is cached");
   * }
   */
  function getAllCachedNodes(root: string): StringList;

  /**
   * Returns all nodes that are cached.
   * The following example prints the list of all cached nodes in the scene.
   * @returns {StringList}
   * @example
   * function printCachedNodes() {
   *     var cachedNodes = node.getAllCachedNodes();
   *     for (var i = 0; i < cachedNodes.length; ++i)
   *         MessageLog.trace("Node " + cachedNodes[i] + " is cached");
   * }
   */
  function getAllCachedNodes(): StringList;

  /**
   * Returns the Attribute of the given node. The attribute value is for the given frame.
   * The example below gets the attribute with the corresponding name and returns it's type.
   * This is just a simple helper function, see createDynamicAttr() or removeDynamicAttr() for a more
   * complex example using getAttr().
   * Here is another example that gets the Transformation Names attribute from the first Transformation
   * Switch node in the scene, then lists its sub-attributes.
   * @param {string} node The path of the node.
   * @param {double} atFrame The frame number at which the attribute value is extracted. This parameter isn't used if the value isn't animated (a local value).
   * @param {string} attrName The name of the attribute. Access a child attribute by concatenating the parent attribute name with the child name separated by a dot ('.'). The name is case sensitive.
   * @returns {Attribute}
   * @example
   * function attrType(nodeName, attrName) {
   *     var attr = node.getAttr(nodeName, frame.current(), attrName);
   *
   *     return attr.typeName();
   * }
   */
  function getAttr(node: string, atFrame: double, attrName: string): Attribute;

  /**
   * Returns a list of Attribute objects of the given node.
   * This example returns a list of all the attributes of a node, including all the sub attributes.
   * @param {string} node The path of the node.
   * @param {double} atFrame The frame number at which the attribute value is extracted. This parameter isn't used if the value isn't animated (a local value).
   * @param {string} [attrName=""] The name of the attribute or an empty string for all top level attributes. Access a child attribute by concatenating the parent attribute name with the child name separated by a dot ('.').
   * @returns {QList<Attribute>}
   * @example
   * function getAttributes(attribute, attributeList) {
   *     attributeList.push(attribute);
   *
   *     var subAttrList = attribute.getSubAttributes();
   *     for (var j = 0; j < subAttrList.length; ++j) {
   *         if (typeof(subAttrList[j].keyword()) === 'undefined' || subAttrList[j].keyword().length == 0)
   *             continue;
   *
   *         getAttributes(subAttrList[j], attributeList);
   *     }
   * }
   *
   * function getFullAttributeList(nodePath) {
   *     var attributeList = [];
   *     var topAttributeList = node.getAttrList(nodePath, 1);
   *
   *     for (var i = 0; i < topAttributeList.length; ++i) {
   *         getAttributes(topAttributeList[i], attributeList);
   *     }
   *     return attributeList;
   * }
   */
  function getAttrList(
    node: string,
    atFrame: double,
    attrName?: string
  ): QList<Attribute>;

  /**
   * Set the cached flag for a node.
   * The following example mark this node to be cached, if it is not cached.
   * @param {string} node The name of the node.
   * @returns {boolean}
   * @example
   * function cacheNode(exNode) {
   *     if (node.getCached(exNode) == false)
   *         node.setCached(exNode, false);
   * }
   */
  function getCached(node: string): boolean;

  /**
   * Returns how much of the cache capacity is filled up. [0,1].
   * @returns {double}
   */
  function getCacheFillLevel(): double;

  /**
   * Returns a list of all cameras within the scene.
   * The example below changes the default camera if a second camera exists.
   * @returns {StringList}
   * @example
   * function changeCamera() {
   *     var cameras = node.getCameras();
   *     if (cameras.length > 1 && cameras[1]) {
   *         node.setAsDefaultCamera("Top/MyCamera2");
   *         MessageLog.trace("New default camera: " + node.getDefaultCamera());
   *     }
   * }
   */
  function getCameras(): StringList;

  /**
   * Returns the node colour.
   * The example below takes two nodes as parameters, changes the colour of the first node to the colour
   * of the second node, then resets the second node's colour.
   * @param {string} node The name of the node.
   * @returns {ColorRGBA}
   * @example
   * function swapAndReset(node1, node2) {
   *     var newColor = node.getColor(node2);
   *
   *     node.setColor(node1, newColor);
   * }
   */
  function getColor(node: string): ColorRGBA;

  /**
   * Returns the ColorOverride object for the color override node.
   * If the selected node is a color override node, returns the ColorOverride object. See the
   * ColorOverride class for more information about ColorOverride objects.
   * @param {string} node The name of the node.
   * @returns {ColorOverride}
   * @example
   * var myNode = selection.selectedNode(0));
   *
   * if (node.type(myNode) == "COLOR_OVERRIDE_TVG") {
   *     return node.getColorOverride(myNode);
   * }
   */
  function getColorOverride(node: string): ColorOverride;

  /**
   * Returns the name of the default camera.
   * The example below halves the field of view of the current camera view.
   * @returns {string}
   * @example
   * var cameraNode = "Top/" + node.getDefaultCamera();
   * var FOV = node.getAttr(cameraNode, frame.current(), "FOV").doubleValue();
   * node.setTextAttr(cameraNode, "FOV", frame.current(), FOV / 2);
   */
  function getDefaultCamera(): string;

  /**
   * Returns the Element Id of the node. Has to be an element node, identified with type :: READ.
   * Returns -1 on fail. The example below uses the Element Ids of all the selected nodes (stored in a
   * variable named allNodes) to recolour all of the drawings selected.
   * @param {string} nodeName The name of the node.
   * @returns {int}
   * @example
   * var elementId = node.getElementId("Top/MyDrawing");
   *
   * // Add the drawing to the scene. For now it's just a placeholder.
   * var frameIndex = fileFrameIndex(x, y);
   * var exposure = "MyExposure"; // as seen in the Xsheet
   * Drawing.create(elementId, exposure, false);
   */
  function getElementId(nodeName: string): int;

  /**
   * Returns whether a node is enabled or not.
   * The following example disables a node if it is currently enabled.
   * @param {string} node The name of the node.
   * @returns {boolean}
   * @example
   * function disableNode(exNode) {
   *     if (node.getEnable(exNode))
   *         node.setEnable(exNode, false);
   * }
   */
  function getEnable(node: string): boolean;

  /**
   * Returns existing or add a group multi port in node.
   * Add a multi port in node inside the selected group. There can only be a single such node per group.
   * If there is already such type of node in the group, it will return it. It returns NULL if it cannot
   * add such node. You cannot add this type of node in the top group of a scene. The following example
   * creates a group from the currently selected nodes, then returns the input and output modules in an
   * object.
   * @param {string} parentGroup The path to the parent group into which you want to add this node.
   * @param {string} name The name of the node you will add.
   * @param {int} x The X position of the node in the Node View.
   * @param {int} y The Y position of the node in the Node View.
   * @param {int} z The Z position of the node in the Node View. This property is important when two nodes overlap.
   * @returns {string}
   * @example
   * function createGroupFromSelected() {
   *     var selected = selection.selectedNodes();
   *     var nodesToGroup = selected.join();
   *     var group = node.createGroup(nodesToGroup, "group");
   *
   *     var inputModule = node.getGroupInputModule(group, "", 0, 0, 0);
   *     var outputModule = node.getGroupOutputModule(group, "", 0, 0, 0);
   *
   *     return {
   *         input: inputModule,
   *         output: outputModule
   *     };
   * }
   */
  function getGroupInputModule(
    parentGroup: string,
    name: string,
    x: int,
    y: int,
    z: int
  ): string;

  /**
   * Returns existing or add a group multi port out node.
   * Add a multi port out node inside the selected group. There can only be a single such node per group,
   * so, if there is already such node, it returns it. It returns NULL if it cannot add such node. You
   * cannot add this type of node in the top group of a scene. The following example creates a group from
   * the currently selected nodes, then returns the input and output modules in an object.
   * @param {string} parentGroup The path of the parent group into which you want to add this node.
   * @param {string} name The name of the node you will add.
   * @param {int} x The X position of the node in the Node View.
   * @param {int} y The Y position of the node in the Node View.
   * @param {int} z The Z position of the node in the Node View. This property is important when two nodes overlap.
   * @returns {string}
   * @example
   * function createGroupFromSelected() {
   *     var selected = selection.selectedNodes();
   *     var nodesToGroup = selected.join();
   *     var group = node.createGroup(nodesToGroup, "group");
   *
   *     var inputModule = node.getGroupInputModule(group, "", 0, 0, 0);
   *     var outputModule = node.getGroupOutputModule(group, "", 0, 0, 0);
   *
   *     return {
   *         input: inputModule,
   *         output: outputModule
   *     };
   * }
   */
  function getGroupOutputModule(
    parentGroup: string,
    name: string,
    x: int,
    y: int,
    z: int
  ): string;

  /**
   * Returns the lock flag.
   * @param {string} node The name of the node.
   * @returns {boolean}
   * @example
   * MessageLog.trace("Lock flag: " + node.getLocked(exNode));
   * node.setLocked(exNode, true);
   */
  function getLocked(node: string): boolean;

  /**
   * Returns the model matrix of a node.
   * @param {string} node The name of the node.
   * @param {int} frame Is the int that specifies the frame number.
   * @returns {QObject}
   * @example
   * var myNodeModelMatrix = node.getMatrix("Top/MyNode", frame.current());
   * var myNodeWorldPosition = myNodeModelMatrix.multiply(new Point3d);
   *
   * var myOtherNodeModelMatrix = node.getMatrix("Top/MyOtherNode", frame.current());
   * var myOtherNodeWorldPosition = myOtherNodeModelMatrix.multiply(new Point3d);
   * if (myNodeWorldPosition.z > myOtherNodeWorldPosition.z)
   *     MessageLog.trace("My node is in front of the other node");
   */
  function getMatrix(node: string, frame: int): QObject;

  /**
   * Returns the number of versions of the node available.
   * The example below sets current version number of a node to the maximum version number.
   * @param {string} node The name of the node.
   * @returns {int}
   * @example
   * node.setVersion(exNode, node.getMaxVersionNumber(exNode));
   */
  function getMaxVersionNumber(node: string): int;

  /**
   * Returns the name of a node.
   * @param {string} node The path of the node.
   * @returns {string}
   */
  function getName(node: string): string;

  /**
   * Returns a collection of node paths for nodes of specified types.
   * Example usage:
   * @param {StringList} types
   * @returns {StringList}
   * @example
   * var sl = ["READ", "WRITE", "COLOR_OVERRIDE_TVG"];
   * var nl = node.getNodes(sl);
   * for (var i = 0; i < nl.length; ++i) {
   *     var path = nl[i];
   *     if (node.type(path) == "COLOR_OVERRIDE_TVG") {
   *         MessageLog.trace("Colour Override: " + node.getName(path));
   *         var conode = node.getColorOverride(path);
   *     } else if (node.type(path) == "READ") {
   *         MessageLog.trace("Read: " + node.getName(path));
   *     } else if (node.type(path) == "WRITE") {
   *         MessageLog.trace("Write: " + node.getName(path));
   *     }
   * }
   */
  function getNodes(types: StringList): StringList;

  /**
   * Returns the pivot of the node.
   * The example below uses the pivot of a node to extract the rotation, position and scale of the node
   * from it's model matrix.
   * @param {string} node The name of the node.
   * @param {int} frame Is the int that specifies the frame number.
   * @returns {QObject}
   * @example
   * var myNodePivot = node.getPivot("Top/MyNode", frame.current());
   * var myNodeModelMatrix = node.getMatrix("Top/MyNode", frame.current());
   *
   * var rotation = myNodeModelMatrix.extractRotation(myNodePivot, false);
   * var position = myNodeModelMatrix.extractPosition(myNodePivot, false);
   * var scale = myNodeModelMatrix.extractScale(myNodePivot, false);
   *
   * return [rotation, position, scale];
   */
  function getPivot(node: string, frame: int): QObject;

  /**
   * Returns the show/hide timeline thumbnail flags on drawing layers.
   * @param {string} node The name of the node.
   * @returns {boolean}
   * @example
   * MessageLog.trace("Show timeline thumbnails: " + node.getShowTimelineThumbnails(exNode));
   * node.setShowTimelineThumbnails(exNode, true);
   */
  function getShowTimelineThumbnails(node: string): boolean;

  /**
   * Returns the value(s) of the node selected attribute(s).
   * The example below adds the current palette path to the currently selected colour override node.
   * For example, use the attribute PALETTES.NUMBER to return the number of palettes in the colour
   * override node palette list. Or, use the attribute PALETTES.x to return the palette at index x from
   * the colour override node palette list. In this case, x is a number between 0 and the number of
   * palettes in the list, minus one. If x is not given (argument is "PALETTES") or x is not valid (< 0
   * or out of range) then 0 is assumed.
   * @param {string} node The path of the node.
   * @param {double} atFrame The frame number from which you want to extract the attribute value. If the value is static, you must still pass a value. You can, for example, pass 1 to take the value at the first frame.
   * @param {string} attrName The attribute whose value you want.
   * @returns {string}
   * @example
   * function fillColourOverride() {
   *     var myNode = selection.selectedNode(0);
   *     if (node.type(myNode) == "COLOR_OVERRIDE_TVG") {
   *         var num1 = node.getTextAttr(myNode, frame.current(), "PALETTES.NUMBER");
   *         var palettePath = PaletteManager.getCurrentPalettePath();
   *
   *         node.setTextAttr(myNode, "PALETTES.ADD", frame.current(), palettePath);
   *
   *         var num2 = node.getTextAttr(myNode, frame.current(), "PALETTES.NUMBER");
   *         if (num2 > num1)
   *             MessageLog.trace("Palette successfully added.");
   *     }
   * }
   */
  function getTextAttr(node: string, atFrame: double, attrName: string): string;

  /**
   * Returns the timeline tag flag.
   * If a timeline tag is set to true, it will be shown when "View Tagged Layers" is selected.
   * @param {string} node The name of the node.
   * @returns {boolean}
   * @example
   * MessageLog.trace("Timeline tag: " + node.getTimelineTag(exNode));
   * node.setTimelineTag(exNode, true);
   */
  function getTimelineTag(node: string): boolean;

  /**
   * Returns a list of timeline tag flags.
   * @param {string} [node=QNTR("Top")] The name of the top node.
   * @param {StringList} [list=StringList()] The list of nodes to retrieve timeline tag flags.
   * @returns {StringList}
   * @example
   * function getSetFlags(exNode) {
   *     if (selection.numberOfNodesSelected <= 1)
   *         MessageLog.trace("Timeline tag: " + node.getTimelineTag(exNode));
   *     else {
   *         var list = selection.selectedNodes();
   *         MessageLog.trace("Timeline tags: " + node.getTimelineTagList("Top", list.toString()));
   *     }
   * }
   */
  function getTimelineTagList(node?: string, list?: StringList): StringList;

  /**
   * Returns the current version of the node.
   * The node may have multiple versions if their rendering output have changed over time.
   * @param {string} node The name of the node.
   * @returns {int}
   * @example
   * MessageLog.trace("Current node version number: " + node.getVersion(exNode));
   */
  function getVersion(node: string): int;

  /**
   * Returns true if the peg's groupAtNetworkBuilding() attribute is true.
   * @param {string} node The path of the node.
   * @returns {boolean}
   */
  function groupAtNetworkBuilding(node: string): boolean;

  /**
   * Returns the height of a given node.
   * This height parameter is useful for computing the position of nodes in the Node View. It uses the
   * same unit system as the coordX() and coordY() methods. The example below takes 2 nodes as parameters
   * and moves them one on top of the other in the node view.
   * @param {string} node The path of the node.
   * @returns {int}
   * @example
   * function nodeLine(node1, node2) //node1 and node2 are paths of 2 nodes
   * {
   *     var x = node.coordX(node1);
   *     var y = node.coordY(node1);
   *     y -= node.height(node1);
   *
   *     node.setCoord(node2, x, y);
   * }
   */
  function height(node: string): int;

  /**
   * Returns true or false to indicate if a node controls are currently shown.
   * The example below returns the state of the controls for a peg ("Top/Drawing-P"). The resulting
   * information message can be seen in the Message Log.
   * @param {string} node The path to the node.
   * @returns {boolean}
   * @example
   * MessageLog.trace("Shown? " + node.isControlShown("Top/Drawing-P"));
   */
  function isControlShown(node: string): boolean;

  /**
   * Returns a true or false value indicating if the node is a group.
   * The example below uses isGroup to confirm that the node is a group node before printing some
   * information about it.
   * @param {string} node The path of the node.
   * @returns {boolean}
   * @example
   * function sourceFinder() {
   *     var myNode = selection.selectedNode(0);
   *     var parentNode = node.parentNode(myNode);
   *
   *     if (node.isGroup(myNode) && node.isLinked(myNode, 0)) {
   *         var source = node.srcNode(myNode, 0);
   *         var flatSource = node.flatSrcNode(myNode, 0);
   *         MessageLog.trace("Source inside the group: " + source);
   *         MessageLog.trace("Source outside the group: " + flatSource);
   *     }
   * }
   */
  function isGroup(node: string): boolean;

  /**
   * Returns true or false to indicate if a port is connected to another node.
   * The example below inserts a new Peg node inbetween the selected node and it's parent. The new node's
   * parent is the original parent of the selected node, and the new parent of the selected note is the
   * created peg.
   * @param {string} node The path of the node.
   * @param {int} iPort The number of the port whose link status you want to check. This value is between 0 and the results of the numberOfInputPorts() method, minus one.
   * @returns {boolean}
   * @example
   * function insertPeg() {
   *     var myNode = selection.selectedNode(0);
   *     var parentNode = node.parentNode(myNode);
   *
   *     var newPeg = node.add(parent, "New Peg", "PEG", 0, -50, 0);
   *     var myNodeDestination = node.dstNode(myNode, 0, 0);
   *
   *     if (node.isLinked(myNode, 0)) {
   *         node.unlink(myNodeDestination, 0);
   *         node.link(myNode, 0, newPeg, 0);
   *         node.link(newPeg, 0, myNodeDestination, 0);
   *     }
   * }
   */
  function isLinked(node: string, iPort: int): boolean;

  /**
   * Returns true if the node can be cached.
   * The following example mark this node to be cached, if it is not cached and if it supports caching.
   * @param {string} node The name of the node.
   * @returns {boolean}
   * @example
   * function cacheNode(exNode) {
   *     if (node.isSupportingCache(exNode) && node.getCached(exNode) == false)
   *         node.setCached(exNode, false);
   * }
   */
  function isSupportingCache(node: string): boolean;

  /**
   * Link a port on a node to a port on another node.
   * For another example usage of link, see the above Detailed Description.
   * @param {string} srcNode The path of the node whose output port you want to link to a destination node.
   * @param {int} srcPort The port that you want to link to the input port on the destination node. This value is between 0 and the results of the numberOfOutputPorts() method, minus one.
   * @param {string} dstNode The path of the node whose input port you want to link to the source node.
   * @param {int} dstPort The port on the destination node that you want to link to the output port from the source node. This value is between 0 and the results of the numberOfInputPorts() method, minus one.
   * @returns {boolean}
   * @example
   * // Get a node parent and children. The node will be inserted in a group and the parent/children will be connected to the group.
   * var myNewGroupPath = "Top/MyGroup/MyNewGroup";
   * var myNodePath = "Top/MyGroup/Drawing";
   * var srcNodePath = node.srcNode(myNodePath, 0);
   * var dstNodePaths = [];
   * for (var i = 0; i < node.numberOfOutputLinks(myNodePath, 0); i++) {
   *     dstNodePaths.push(node.dstNode(myNodePath, 0, i));
   * }
   *
   * // Move the node into the group.
   * // moveToGroup creates a composite on which to connect the READ node automatically.
   * node.moveToGroup(myNodePath, myNewGroupPath);
   *
   * // Connect the new group to the parent/children of the node.
   * node.link(srcNodePath, 0, myNewGroupPath, 0, false, true);
   *
   * for (var i = 0; i < dstNodePaths.length; i++) {
   *     node.link(myNewGroupPath, 0, dstNodePaths[i], 0, true, true);
   * }
   */
  function link(
    srcNode: string,
    srcPort: int,
    dstNode: string,
    dstPort: int
  ): boolean;

  /**
   * Link a port of a node to a port of another node. This version of the method allows connecting to a
   * group node, or setup the proper connection order.
   * @param {string} srcNode The path of the node whose output port you want to link to a destination node.
   * @param {int} srcPort The port that you want to link to the input port on the destination node. This value is between 0 and the results of the numberOfOutputPorts() method, minus one.
   * @param {string} dstNode The path of the node whose input port you want to link to the source node.
   * @param {int} dstPort The port on the destination node that you want to link to the output port from the source node. This value is between 0 and the results of the numberOfInputPorts() method, minus one.
   * @param {boolean} mayAddOutputPort used by group multiport nodes - automatically create a new output port for these nodes.
   * @param {boolean} mayAddInputPort used by group multiport and composite - automatically create input ports for these nodes.
   * @returns {boolean}
   * @example
   * // Get a node parent and children. The node will be inserted in a group and the parent/children will be connected to the group.
   * var myNewGroupPath = "Top/MyGroup/MyNewGroup";
   * var myNodePath = "Top/MyGroup/Drawing";
   * var srcNodePath = node.srcNode(myNodePath, 0);
   * var dstNodePaths = [];
   * for (var i = 0; i < node.numberOfOutputLinks(myNodePath, 0); i++) {
   *     dstNodePaths.push(node.dstNode(myNodePath, 0, i));
   * }
   *
   * // Move the node into the group.
   * // moveToGroup creates a composite on which to connect the READ node automatically.
   * node.moveToGroup(myNodePath, myNewGroupPath);
   *
   * // Connect the new group to the parent/children of the node.
   * node.link(srcNodePath, 0, myNewGroupPath, 0, false, true);
   *
   * for (var i = 0; i < dstNodePaths.length; i++) {
   *     node.link(myNewGroupPath, 0, dstNodePaths[i], 0, true, true);
   * }
   */
  function link(
    srcNode: string,
    srcPort: int,
    dstNode: string,
    dstPort: int,
    mayAddOutputPort: boolean,
    mayAddInputPort: boolean
  ): boolean;

  /**
   * Link an attribute to a function column in the Xsheet View.
   * The example below links the attributes of a camera peg to two columns to create a camera pan.
   * @param {string} node The name of the node.
   * @param {string} attrName The name of the attribute.
   * @param {string} columnName The name of the column that you want to link to the attribute.
   * @returns {boolean}
   * @example
   * function addCameraPan() {
   *     var myCamPeg = "Top/Camera_Peg";
   *
   *     node.linkAttr(myCamPeg, "POSITION.3DPATH", "Camera_Peg_Path");
   *     node.linkAttr(myCamPeg, "ROTATION.ANGLEZ", "Camera_Peg_Angle");
   *
   *     node.link("myCamPeg", 0, "Top/Camera", 0);
   * }
   */
  function linkAttr(
    node: string,
    attrName: string,
    columnName: string
  ): boolean;

  /**
   * Returns the name of the column that an attribute is linked to. If the attribute is not linked to a
   * column, the method returns the null string.
   * @param {string} node The path of the node.
   * @param {string} attrName The attribute you want to check to see if it is linked to a column.
   * @returns {string}
   * @example
   * function addCameraPan() {
   *     if (node.getName("Top/Camera_Peg") == "") {
   *         var myNode = node.add(node.root(), "Camera_Peg", "PEG", -50, 0, 0);
   *
   *         column.add("Camera_Peg_Path", "3DPATH");
   *
   *         if (node.linkedColumn(myNode, "POSITION.3DPATH") == "") {
   *             node.linkAttr(myNode, "POSITION.3DPATH", "Camera_Peg_Path");
   *
   *             column.setEntry("Camera_Peg_Path", 1, 1, globalStartX);
   *             column.setEntry("Camera_Peg_Path", 1, globalEndFrame, globalEndX);
   *
   *             column.setEntry("Camera_Peg_Path", 2, 1, globalStartY);
   *             column.setEntry("Camera_Peg_Path", 2, globalEndFrame, globalEndY);
   *
   *             column.setEntry("Camera_Peg_Path", 3, 1, globalStartZ);
   *             column.setEntry("Camera_Peg_Path", 3, globalEndFrame, globalEndZ);
   *
   *             column.add("Camera_Peg_Angle", "BEZIER");
   *             node.linkAttr(myNode, "ROTATION.ANGLEZ", "Camera_Peg_Angle");
   *
   *             column.setEntry("Camera_Peg_Angle", 1, globalStartFrame, globalStartAngleZ);
   *             column.setEntry("Camera_Peg_Angle", 1, globalEndFrame, globalEndAngleZ);
   *         }
   *     }
   *
   *     if (node.getName("Top/Camera") == "") {
   *         node.add(node.root(), "Camera", "CAMERA", -50, 50, 0);
   *     }
   *
   *     node.link("Top/Camera_Peg", 0, "Top/Camera", 0);
   *
   *     node.setTextAttr("Top/Camera", "OFFSET.Z", 0, 0);
   * }
   */
  function linkedColumn(node: string, attrName: string): string;

  /**
   * Move the specified node within the specified group.
   * This method is equivalent to the drag and drop of a node to a group from the timeline. If an element
   * node is moved into a group, a composite node will automatically be created to connect the element
   * node.
   * @param {string} node The path to the node to group.
   * @param {string} groupName The path of the target group.
   * @returns {string}
   * @example
   * node.moveToGroup("Top/MyGroup/Drawing", "Top/MyGroup/MyNewGroup");
   */
  function moveToGroup(node: string, groupName: string): string;

  /**
   * Returns the node path to an invalid node.
   * Methods that returns a node path will return this value if an error occurred.
   * @returns {string}
   * @example
   * var parentNodePath = node.parentNode("Top/MyNode");
   * if (parentNodePath == node.noNode())
   *     return; // something wrong happened
   */
  function noNode(): string;

  /**
   * The number of input ports on the node.
   * The example below uses numberOfInputPorts to get the path to the source node of the parameter.
   * exNode is the full name of a node, such as "Top/MyGroup/MyNode".
   * @param {string} node The path of the node.
   * @returns {int}
   * @example
   * var numInput = node.numberOfInputPorts(exNode);
   * var source = node.srcNode(exNode, (numInput - 1));
   *
   * //Note: This source node is different than the parent node. The source node is the node connected to one of the input ports of the node. The parent is the parent group of the node.
   * var parent = node.parentNode(exNode);
   * MessageLog.trace(node.equals(parent, source)); //This will print false
   */
  function numberOfInputPorts(node: string): int;

  /**
   * The number of nodes actually linked from the output ports.
   * For an example use of numberOfOutputLinks see link().
   * @param {string} node The path of the node.
   * @param {int} iPort The port number on which you want to locate the node that is connected to it. This value is between 0 and the results of the numberOfInputPorts() method, minus one.
   * @returns {int}
   */
  function numberOfOutputLinks(node: string, iPort: int): int;

  /**
   * The number of output ports on a node.
   * The following example returns a list of all of the destination nodes of the node passed in the
   * parameter.
   * @param {string} node The path of the node.
   * @returns {int}
   * @example
   * function getAllDstNodes(startingNode) {
   *     var listOfDestinationNodes = [];
   *     var numOutputPorts = node.numberOfOutputPorts(startingNode);
   *     for (var i = 0; i < numOutputPorts; i++) {
   *         var portIdx = i;
   *         var numLinks = node.numberOfOutputLinks(startingNode, portIdx);
   *         for (var j = 0; j < numLinks; j++) {
   *             var linkIdx = j;
   *             var dstNode = node.dstNode(startingNode, portIdx, linkIdx)
   *             listOfDestinationNodes.push(dstNode);
   *         }
   *     }
   *     return listOfDestinationNodes;
   * }
   */
  function numberOfOutputPorts(node: string): int;

  /**
   * Returns an integer that indicates the number of nodes contained in a group.
   * The example below prints all of the sub nodes of a node if the node's type is GROUP. exNode is the
   * full name of a node, such as "Top/MyGroup".
   * Sample output of the above example to the Message Log view:
   * The node Top/MyGroup has 2 sub nodes.
   * Top/MyGroup/MyNode1
   * Top/MyGroup/MyNode2
   * @param {string} parent The path of the parent node.
   * @returns {int}
   * @example
   * function groupInfo(exNode) {
   *     var i = 0;
   *     if (node.isGroup(exNode)) {
   *         MessageLog.trace("The node " + exNode + " has " + node.numberOfSubNodes(exNode) + " sub nodes.");
   *         while (i < node.numberOfSubNodes(exNode)) {
   *             MessageLog.trace(node.subNode(exNode, i));
   *             i++;
   *         }
   *     }
   * }
   */
  function numberOfSubNodes(parent: string): int;

  /**
   * Returns the path of the parent level of a node contained in a group.
   * The parent of a node is the parent group that the node is currently in. If the node is not in a
   * group, it's parent is "Top".
   * The example below uses the path to the parent of a node to explode the group it is in. exNode is the
   * full name of a node, such as "Top/MyGroup/MyNode".
   * @param {string} node The path of the node.
   * @returns {string}
   * @example
   * var parent = node.parentNode(exNode);
   *
   * node.explodeGroup(parent);
   */
  function parentNode(node: string): string;

  /**
   * Remove a dynamic attribute for the given node.
   * The example below attempts to remove the dynamic attribbute for the given node and attribute name.
   * It will do nothing if that attribute does not exist.
   * @param {string} node The name of the node.
   * @param {string} attrName The name of the attribute.
   * @returns {boolean}
   * @example
   * node.removeDynamicAttr(nodeName, attrName);
   */
  function removeDynamicAttr(node: string, attrName: string): boolean;

  /**
   * Changes the name of a node.
   * The following example renames a node with the path "Top/myNode".
   * @param {string} node The name of the node.
   * @param {string} newName The new name for the node.
   * @param {boolean} [renameElement=false] A boolean that indicates if element should also be renamed (if node is an element node)
   * @returns {boolean}
   * @example
   * node.rename("Top/myNode", "myNodeWithANewName");
   */
  function rename(
    node: string,
    newName: string,
    renameElement?: boolean
  ): boolean;

  /**
   * Reset the node colour.
   * The example below takes two nodes as parameters, changes the colour of the first node to the colour
   * of the second node, then resets the second node's colour.
   * @param {string} node The name of the node.
   * @returns {boolean}
   * @example
   * function swapAndReset(node1, node2) {
   *     var newColor = node.getColor(node2);
   *
   *     node.setColor(node1, newColor);
   *     node.resetColor(node2);
   * }
   */
  function resetColor(node: string): boolean;

  /**
   * Returns the name of the Top level in the Node View, which is "Top".
   * @returns {string}
   */
  function root(): string;

  /**
   * Setters and getters for the default camera.
   * Set the default camera in the scene. Returns whether successful or not.
   * The example below changes the camera if a second camera exists.
   * @param {string} node The name of the camera.
   * @returns {boolean}
   * @example
   * function changeCamera() {
   *     var cameras = node.getCameras();
   *     if (cameras[1]) {
   *         node.setAsDefaultCamera(cameras[1]);
   *         MessageLog.trace("New default camera: " + node.getDefaultCamera());
   *     }
   * }
   */
  function setAsDefaultCamera(node: string): boolean;

  /**
   * Change the global display used in the application. The node must be the full path of a display node.
   * The example below sets the global display to the node in the parameter. If that node is not a
   * display node, it sets the global display to "Display All".
   * @param {string} node The full path of a display node.
   * @returns {boolean}
   * @example
   * function globalDisplaySetter(exNode) {
   *     if (node.type(exNode) == "DISPLAY") {
   *         node.setAsGlobalDisplay(exNode);
   *     } else {
   *         node.setGlobalToDisplayAll();
   *     }
   * }
   */
  function setAsGlobalDisplay(node: string): boolean;

  /**
   * Set the cached flag for a node.
   * The following example mark this node to be cached, if it is not cached.
   * @param {string} node The name of the node.
   * @param {boolean} cached If true, marks the node to be cached.
   * @returns {boolean}
   * @example
   * function cacheNode(exNode) {
   *     if (node.getCached(exNode) == false)
   *         node.setCached(exNode, false);
   * }
   */
  function setCached(node: string, cached: boolean): boolean;

  /**
   * Set the node colour.
   * The example below changes the colour of a node to solid red.
   * @param {string} node The name of the node.
   * @param {ColorRGBA} color The new colour set for the node. This must be a ColorRGBA object.
   * @returns {boolean}
   * @example
   * function swapAndReset(exNode) {
   *     //The parameters here are the Red, Green, Blue and Alpha values. (255, 0, 0, 255) is a solid red colour.
   *     var newColor = new ColorRGBA(255, 0, 0, 255);
   *
   *     node.setColor(exNode, newColor);
   * }
   */
  function setColor(node: string, color: ColorRGBA): boolean;

  /**
   * Set the position of a node in the Node View.
   * The example below takes the path of a group node and then shifts its position 50 units to the right,
   * and down in the node view.
   * @param {string} node The path of the node.
   * @param {int} x The X position of the node in the Node View.
   * @param {int} y The Y position of the node in the Node View.
   * @returns {boolean}
   * @example
   * function shiftGroup(exNode) {
   *     if (node.isGroup(exNode)) {
   *         var x = node.coordX(exNode);
   *         var y = node.coordY(exNode);
   *         x += 50;
   *         y += 50;
   *         node.setCoord(exNode, x, y);
   *     }
   * }
   */
  function setCoord(node: string, x: int, y: int): boolean;

  /**
   * Set the position of a node in the Node View.
   * The example below takes the path of a group node and then shifts its position 50 units to the right,
   * and down in the node view. It also moves the group node's position in the z-axis to the back.
   * @param {string} node The path of the node.
   * @param {int} x The X position of the node in the Node View.
   * @param {int} y The Y position of the node in the Node View.
   * @param {int} z The Z position of the node in the Node View.
   * @returns {boolean}
   * @example
   * function shiftGroup(exNode) {
   *     if (node.isGroup(exNode)) {
   *         var x = node.coordX(exNode);
   *         var y = node.coordY(exNode);
   *         var z = node.coordZ(exNode);
   *         x += 50;
   *         y += 50;
   *         if (z >= 0)
   *             z = -1;
   *         node.setCoord(exNode, x, y, z);
   *     }
   * }
   */
  function setCoord(node: string, x: int, y: int, z: int): boolean;

  /**
   * Setters and getters for the enable/disable property of a node.
   * Set the enable flag of the node.
   * The following example disables a node if it is currently enabled.
   * @param {string} node The name of the node.
   * @param {boolean} flag If true, enable the node.
   * @returns {boolean}
   * @example
   * function disableNode(exNode) {
   *     if (node.getEnable(exNode))
   *         node.setEnable(exNode, false);
   * }
   */
  function setEnable(node: string, flag: boolean): boolean;

  /**
   * Change the global display used by the application to "Display All" pseudo-display.
   * The example below sets the global display to the node in the parameter. If that node is not a
   * display node, it sets the global display to "Display All".
   * @returns {boolean}
   * @example
   * function globalDisplaySetter(exNode) {
   *     if (node.type(exNode) == "DISPLAY") {
   *         node.setAsGlobalDisplay(exNode);
   *     } else {
   *         node.setGlobalToDisplayAll();
   *     }
   * }
   */
  function setGlobalToDisplayAll(): boolean;

  /**
   * Setters and getters for the lock/unlock property of a node.
   * Set the lock flag of the node.
   * @param {string} node The name of the node.
   * @param {boolean} lock If true, lock the node.
   * @returns {boolean}
   * @example
   * MessageLog.trace("Lock flag: " + node.getLocked(exNode));
   * node.setLocked(exNode, true);
   */
  function setLocked(node: string, lock: boolean): boolean;

  /**
   * Sets the outline mode of the given node.
   * @param {string} node The name of the node.
   * @param {boolean} bOutlineMode The mode to set the outline to.
   * @returns {boolean}
   */
  function setOutlineMode(node: string, bOutlineMode: boolean): boolean;

  /**
   * Set the show/hide timeline thumbnails on drawing layers.
   * @param {string} node The name of the node.
   * @param {boolean} bShow True to show thumbnails.
   * @returns {boolean}
   * @example
   * node.setShowTimelineThumbnails(exNode, true);
   */
  function setShowTimelineThumbnails(node: string, bShow: boolean): boolean;

  /**
   * Change the value of an attribute in a node.
   * Additions specific to the Colour Override node:
   * Use the attribute PALETTES.CLEAR to clear the palette list in the colour override node.
   * Use the attribute PALETTES.ADD to add a palette to the palette list of the colour override node.
   * Attemping to add a palette that already exists will cause setTextAttr to do nothing.
   * Use the attribute PALETTES.REMOVE to remove a palette from the palette list of the colour override
   * node.
   * The example below adds the current palette path to the currently selected colour override node.
   * @param {string} node The name of the node.
   * @param {string} attrName The name of the attribute whose value you want to change.
   * @param {int} atFrame The frame number at which you set the value.
   * @param {string} attrValue The new value of the attribute.
   * @returns {boolean}
   * @example
   * function fillColourOverride() {
   *     var myNode = selection.selectedNode(0);
   *     if (node.type(myNode) == "COLOR_OVERRIDE_TVG") {
   *         var num1 = node.getTextAttr(myNode, frame.current(), "PALETTES.NUMBER");
   *         var palettePath = PaletteManager.getCurrentPalettePath();
   *
   *         node.setTextAttr(myNode, "PALETTES.ADD", frame.current(), palettePath);
   *
   *         var num2 = node.getTextAttr(myNode, frame.current(), "PALETTES.NUMBER");
   *         if (num2 > num1)
   *             MessageLog.trace("Palette successfully added.");
   *     }
   * }
   */
  function setTextAttr(
    node: string,
    attrName: string,
    atFrame: int,
    attrValue: string
  ): boolean;

  /**
   * Set the timeline tag flag of the node.
   * If a timeline tag is set to true, it will be shown when "View Tagged Layers" is selected.
   * @param {string} node The name of the node.
   * @param {boolean} tag New tag state of the node.
   * @returns {boolean}
   * @example
   * MessageLog.trace("Timeline tag: " + node.getTimelineTag(exNode));
   * node.setTimelineTag(exNode, true);
   */
  function setTimelineTag(node: string, tag: boolean): boolean;

  /**
   * Set the version of the node to use.
   * The example below sets current version number of a node to the maximum version number.
   * @param {string} node The name of the node.
   * @param {int} version The new version of the node.
   * @returns {void}
   * @example
   * node.setVersion(exNode, node.getMaxVersionNumber(exNode));
   */
  function setVersion(node: string, version: int): void;

  /**
   * Shows or hide the controls associated to a node. Similar to hitting "Show Controls" in the Camera
   * View.
   * The example below show the controls of a peg ("Top/Drawing-P").
   * @param {string} node The path to the node.
   * @param {boolean} show True to show the controls of the node, false to hide.
   * @returns {boolean}
   * @example
   * node.showControls("Top/Drawing-P", true);
   */
  function showControls(node: string, show: boolean): boolean;

  /**
   * Returns the path for the node that the port is linked to.
   * The example below uses numberOfInputPorts to get the path to the source node of the parameter.
   * exNode is the full name of a node, such as "Top/MyGroup/MyNode".
   * @param {string} node The path of the node.
   * @param {int} iPort The port number on the destination node whose source node you want to find. This value is between 0 and the results of the numberOfInputPorts() method, minus one.
   * @returns {string}
   * @example
   * var numInput = node.numberOfInputPorts(exNode);
   * var source = node.srcNode(exNode, (numInput - 1));
   *
   * //Note: This source node is different than the parent node. The source node is the node connected to one of the input ports of the node. The parent is the parent group of the node.
   * var parent = node.parentNode(exNode);
   * MessageLog.trace(node.equals(parent, source)); //This will print false
   */
  function srcNode(node: string, iPort: int): string;

  /**
   * Returns the source node path, the output port number and the link ID for this source node that this
   * destination node is connected to.
   * The example below shows the relationship between srcNodeInfo and dstNode.
   * node - the path of the source node this destination node is linked to. This is the same value as the
   * value returned by srcNode().
   * port - this is the output port number in the source node that this destination node is connected to.
   * link - this is the link number in the output port of the source node for this connection.
   * @param {string} node The path of the source node.
   * @param {int} iPort the port number of which you want to locate the node that is connected to it. This value is between 0 and the result of numberOfInputPorts() method, minus one. This method is similar to srcNode(), however, it returns an object that contains 3 properties:
   * @returns {QScriptValue}
   * @example
   * var exNode = selection.selectedNode(0);
   * var numInput = node.numberOfInputPorts(exNode);
   * var source = node.srcNodeInfo(exNode, 0);
   *
   * //Note: This source node is different than the parent node. The source node is the node connected to one of the input ports of the node. The parent is the parent group of the node.
   * var parent = node.parentNode(exNode);
   * MessageLog.trace(node.equals(parent, source.node)); //This will print false
   *
   * //You can use the 3 properties of the source object to use dstNode()
   * var destination = node.dstNode(source.node, source.port, source.link);
   * MessageLog.trace(node.equals(destination, exNode); //This will print true
   */
  function srcNodeInfo(node: string, iPort: int): QScriptValue;

  /**
   * Returns whether or not the source port on the given node is a Matte Port.
   * @param {string} node The path of the source node.
   * @param {int} iPort The port number to check whether or not it is a Matte Port. This value is between 0 and the result of numberOfInputPorts() minus one.
   * @returns {boolean}
   */
  function srcPortIsMattePort(node: string, iPort: int): boolean;

  /**
   * Returns the path of a node in a group. Nodes are counted starting with zero.
   * The example below prints all of the sub nodes of a node if the node's type is GROUP. exNode is the
   * full name of a node, such as "Top/MyGroup".
   * Sample output of the above example to the Message Log view:
   * The node Top/MyGroup has 2 sub nodes.
   * Top/MyGroup/MyNode1
   * Top/MyGroup/MyNode2
   * @param {string} parent The path of the parent node.
   * @param {int} iSubNode An integer representing the numerical value of the node. This value must be between 0 and the numberOfSubNodes() method, minus one, for that point.
   * @returns {string}
   * @example
   * function groupInfo(exNode) {
   *     var i = 0;
   *     if (node.isGroup(exNode)) {
   *         MessageLog.trace("The node " + exNode + " has " + node.numberOfSubNodes(exNode) + " sub nodes.");
   *         while (i < node.numberOfSubNodes(exNode)) {
   *             MessageLog.trace(node.subNode(exNode, i));
   *             i++;
   *         }
   *     }
   * }
   */
  function subNode(parent: string, iSubNode: int): string;

  /**
   * Returns the full path of a child node belonging to a parent group.
   * The existence of the parent group is validated as well as the existence of the child node in that
   * parent. Use this method instead of manually concatenating the full path name of child nodes. The
   * example below deconstructs and then rebuilds a node path using subNodeByName. exNode is the full
   * name of a node, such as "Top/MyGroup/MyNode".
   * @param {string} parent Fully qualified path of the parent group.
   * @param {string} name The actual node name suffix. This one is only the short name, not the full path of the node.
   * @returns {string}
   * @example
   * var name = node.getName(exNode);
   * var parent = node.parentNode(exNode);
   *
   * //With both the parent path and the node name, you can rebuild the original node with subNodeByName
   * var rebuiltNode = node.subNodeByName(parent, exNode);
   * //This rebuilt node will be equal to the original node
   * MessageLog.trace(node.equals(exNode, rebuiltNode)); //This will print true
   */
  function subNodeByName(parent: string, name: string): string;

  /**
   * Returns an array of sub nodes.
   * The example below prints an array of a node's subnodes if the node's type is GROUP. exNode is the
   * full name of a node, such as "Top/MyGroup".
   * Sample output of the above example to the Message Log view:
   * The node Top/MyGroup has 2 sub nodes.
   * Top/MyGroup/MyNode1,Top/MyGroup/MyNode2
   * @param {string} parentGroup The path of the parent node.
   * @returns {QScriptValue}
   * @example
   * function groupInfo(exNode) {
   *     var i = 0;
   *     if (node.isGroup(exNode)) {
   *         MessageLog.trace("The node " + exNode + " has " + node.numberOfSubNodes(exNode) + " sub nodes.");
   *         MessageLog.trace(node.subNodes(exNode);
   *         }
   *     }
   */
  function subNodes(parentGroup: string): QScriptValue;

  /**
   * Returns the node type. These are all of the built-in node types available from the Harmony node
   * like: READ, COMPOSITE, PEG, QUADMAP, SHADOW, etc.
   * The example below prints all of the sub nodes of a node if the node's type is GROUP. exNode is the
   * full name of a node, such as "Top/MyGroup".
   * Sample output of the above example to the Message Log view:
   * The node Top/MyGroup has 2 sub nodes.
   * Top/MyGroup/MyNode1
   * Top/MyGroup/MyNode2
   * Other example uses of type can be found in getTextAttr(), setTextAttr(),
   * explodeElementSymbolsInGroups().
   * @param {string} node The path of the node.
   * @returns {ColumnType}
   * @example
   * function groupInfo(exNode) {
   *     var i = 0;
   *     if (node.type(exNode) == GROUP) {
   *         MessageLog.trace("The node " + exNode + " has " + node.numberOfSubNodes(exNode) + " sub nodes.");
   *         while (i < node.numberOfSubNodes(exNode)) {
   *             MessageLog.trace(node.subNode(exNode, i));
   *             i++;
   *         }
   *     }
   * }
   */
  function type(node: string): ColumnType;

  /**
   * Unlink a port on one node from the port on another node.
   * The example below inserts a new Peg node inbetween the selected node and it's parent. After
   * unlinking the original node from it's original parent, the original parent is linked to the new
   * node, and the new node becomes the parent of the original node.
   * @param {string} dstNode The path of the node whose input port you want to unlink from the source node.
   * @param {int} inPort The input port that you want to unlink. This value is between 0 and the results of the numberOfInputPorts() method, minus one.
   * @returns {boolean}
   * @example
   * function insertPeg() {
   *     var myNode = selection.selectedNode(0);
   *     var parentNode = node.parentNode(myNode);
   *
   *     var newPeg = node.add(parent, "New Peg", "PEG", 0, -50, 0);
   *     var myNodeDestination = node.dstNode(myNode, 0, 0);
   *
   *     if (node.isLinked(myNode, 0)) {
   *         node.unlink(myNodeDestination, 0);
   *         node.link(myNode, 0, newPeg, 0);
   *         node.link(newPeg, 0, myNodeDestination, 0);
   *     }
   * }
   */
  function unlink(dstNode: string, inPort: int): boolean;

  /**
   * Unlink an attribute from a function column.
   * The example below removes a camera pan by unlinking it from the column. It would undo the example
   * shown for linkAttr() and linkedColumn().
   * @param {string} node The name of the node.
   * @param {string} attrName The name of the attribute that you want to unlink.
   * @returns {boolean}
   * @example
   * if (node.linkedColumn(myNode, "POSITION.3DPATH") != "")
   *     node.unlinkAttr(myNode, "POSITION.3DPATH");
   */
  function unlinkAttr(node: string, attrName: string): boolean;

  /**
   * Returns the width of a given node.
   * This width parameter is useful for computing the position of nodes in the Node View. It uses the
   * same unit system as the coordX() and coordY() methods. The example below takes 2 nodes as parameters
   * and moves them side by side in the node view.
   * @param {string} node The path of the node.
   * @returns {int}
   * @example
   * function nodeLine(node1, node2) //node1 and node2 are paths of 2 nodes
   * {
   *     var x = node.coordX(node1);
   *     var y = node.coordY(node1);
   *     x -= node.width(node1);
   *
   *     node.setCoord(node2, x, y);
   * }
   */
  function width(node: string): int;
}

/**
 * The PaletteManager JavaScript global object. Used to get information about the Colour view current
 * selection.
 * An example of how to use the palette override attributes of the colour override node, using the
 * PaletteManager:
 * Available attributes for getTextAttr:
 * If no x, or it's invalid, assume a value of 0
 * Available attributes for setTextAttr:
 * Note that the frame number argument (to node.getTextAttr() and node.setTextAttr()) is unused, and
 * the attribute value in "PALETTES.CLEAR" is unused.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classPaletteManager.html}
 * @example
 * function paletteOverrideExample() {
 *     if (selection.numberOfNodesSelected() != 1)
 *         return;
 *
 *     // not strictly necessary, depends on whether each setTextAttr() call should be undoable individually
 *     scene.beginUndoRedoAccum("Palette Overrides");
 *     var node = selection.selectedNode(0);
 *
 *     // return the number of palettes in the palette override list
 *     var num = node.getTextAttr(node, 1, "PALETTES.NUMBER");
 *
 *     // return the first (top-most) palette name in the palette override list (will be "" if the list is empty).
 *     // note that no palette number is supplied in this example, so 0 is assumed (equivalent to "PALETTES.0")
 *     var palette = node.getTextAttr(node, 1, "PALETTES");
 *
 *     // clear (empty) the list
 *     node.setTextAttr(node, "PALETTES.CLEAR", 1, "");
 *
 *     // should be 0
 *     num = node.getTextAttr(node, 1, "PALETTES.NUMBER");
 *
 *     // add a palette to the palette override list
 *     var curpath = PaletteManager.getCurrentPalettePath();
 *
 *     node.setTextAttr(node, "PALETTES.ADD", 1, curpath);
 *
 *     // can also specify a full path for the palette
 *     // node.setTextAttr(node, "PALETTES.ADD", 1, "/usadata000/.../example.plt");
 *
 *     // return the first two palette names (we added one, so one should be non-empty)
 *     palette = node.getTextAttr(node, 1, "PALETTES.0");
 *
 *     // this one should be "", only one in the list
 *     var palette1 = node.getTextAttr(node, 1, "PALETTES.1");
 *
 *     // return the name of the last palette that we added
 *     num = node.getTextAttr(node, 1, "PALETTES.NUMBER");
 *     var index = parseInt(num);
 *     index--;
 *
 *     var attr = "PALETTES." + index;
 *     palette = node.getTextAttr(node, 1, attr);
 *
 *     // remove one from the list
 *     node.setTextAttr(node, "PALETTES.REMOVE", 1, palette);
 *
 *     num = node.getTextAttr(node, 1, "PALETTES.NUMBER");
 *
 *     scene.endUndoRedoAccum();
 * }
 */
declare namespace PaletteManager {
  /**
   * Applies the current colour selection to the current drawing selection.
   * @returns {void}
   */
  function applyColorSelection(): void;

  /**
   * Gets the Id of the colour in the currently selected palette.
   * @param {int} index Index of colour in palette.
   * @returns {string}
   */
  function getColorId(index: int): string;

  /**
   * Gets the name of the colour in the currently selected palette.
   * @param {int} index Index of colour in palette.
   * @returns {string}
   */
  function getColorName(index: int): string;

  /**
   * Gets the current colour Id from the ColourView.
   * @returns {string}
   */
  function getCurrentColorId(): string;

  /**
   * Gets the current colour name from the ColourView.
   * @returns {string}
   */
  function getCurrentColorName(): string;

  /**
   * Gets the current palette Id from the ColourView.
   * @returns {string}
   */
  function getCurrentPaletteId(): string;

  /**
   * Gets the current palette name from the ColourView.
   * @returns {string}
   */
  function getCurrentPaletteName(): string;

  /**
   * Gets the current palette path (including palette name) from the ColourView.
   * @returns {string}
   */
  function getCurrentPalettePath(): string;

  /**
   * Gets the length of the current palette in the ColourView.
   * @returns {int}
   */
  function getCurrentPaletteSize(): int;

  /**
   * Gets number of palettes in the currently selected palette list in the ColourView list.
   * @returns {int}
   */
  function getNumPalettes(): int;

  /**
   * Gets number of palettes in the palette list in the ColourView.
   * @param {boolean} scenePaletteList Whether to check scene palette list or element palette list.
   * @returns {int}
   */
  function getNumPalettes(scenePaletteList: boolean): int;

  /**
   * Gets the Id of the palette in the current palette list.
   * @param {int} index Index of palette within palette list.
   * @returns {string}
   */
  function getPaletteId(index: int): string;

  /**
   * Gets the Id of the palette in the current palette list.
   * @param {int} index Index of palette within palette list.
   * @param {boolean} scenePaletteList Whether to check scene palette list or element palette list.
   * @returns {string}
   */
  function getPaletteId(index: int, scenePaletteList: boolean): string;

  /**
   * Gets the name of the palette in the current palette list.
   * @param {int} index Index of palette within palette list.
   * @returns {string}
   */
  function getPaletteName(index: int): string;

  /**
   * Gets the name of the palette in the current palette list.
   * @param {int} index Index of palette within palette list.
   * @param {boolean} scenePaletteList Whether to check scene palette list or element palette list.
   * @returns {string}
   */
  function getPaletteName(index: int, scenePaletteList: boolean): string;

  /**
   * Gets the path (including name) of the palette in the current palette list.
   * @param {int} index Index of palette within palette list
   * @returns {string}
   */
  function getPalettePath(index: int): string;

  /**
   * Gets the path (including name) of the palette in the current palette list.
   * @param {int} index Index of palette within palette list.
   * @param {boolean} scenePaletteList Whether to check scene palette list or element palette list.
   * @returns {string}
   */
  function getPalettePath(index: int, scenePaletteList: boolean): string;

  /**
   * Removes unused palettes from the scene.
   * @param {boolean} deleteFiles If true, delete the unused palettes from the disk
   * @returns {void}
   */
  function removeUnusedFiles(deleteFiles: boolean): void;

  /**
   * Sets the current colour in the ColourView.
   * @param {string} color Id of colour.
   * @returns {void}
   */
  function setCurrentColorById(color: string): void;

  /**
   * Sets the current palette and colour in the ColourView.
   * @param {string} palette Palette Id.
   * @param {string} color Colour Id.
   * @returns {void}
   */
  function setCurrentPaletteAndColorById(palette: string, color: string): void;

  /**
   * Sets the current palette in the ColourView.
   * @param {string} palette Id of palette.
   * @returns {void}
   */
  function setCurrentPaletteById(palette: string): void;

  /**
   * @param {string} texture
   * @returns {void}
   */
  function setCurrentPencilTextureById(texture: string): void;
}

/**
 * The PaletteObjectManager JavaScript global object. Provides access to palette list (PaletteList) and
 * palette (Palette) objects.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classPaletteObjectManager.html}
 * @example
 * function isScenePaletteList(paletteList) {
 *     // Palette list with an element id of -1 are scene palette lists.
 *     return paletteList.elementId == -1;
 * }
 *
 * function getMyPalette() {
 *     // Find the first element palette list that owns a palette named "MyPalette"
 *     var numPaletteLists = PaletteObjectManager.getNumPaletteLists();
 *     for (var i = 0; i < numPaletteLists; ++i) {
 *         var paletteList = PaletteObjectManager.getPaletteListByIndex(i);
 *         if (isScenePaletteList(paletteList))
 *             continue;
 *
 *         for (var j = 0; j < paletteList.numPalettes; ++j) {
 *             var palette = paletteList.getPaletteByIndex(j);
 *             if (palette.getName() == "MyPalette")
 *                 return palette;
 *         }
 *     }
 * }
 *
 * function renamePalette(paletteID, newName) {
 *     // Find the first element palette list that owns a palette named "MyPalette"
 *     var numPaletteLists = PaletteObjectManager.getNumPaletteLists();
 *     for (var i = 0; i < numPaletteLists; ++i) {
 *         var paletteList = PaletteObjectManager.getPaletteListByIndex(i);
 *         for (var j = 0; j < paletteList.numPalettes; ++j) {
 *             var palette = paletteList.getPaletteByIndex(j);
 *             if (palette.id === paletteID)
 *                 palette.setName(newName);
 *         }
 *     }
 * }
 */
declare namespace PaletteObjectManager {
  /**
   * Returns the number of loaded palette lists.
   * @returns {int}
   */
  function getNumPaletteLists(): int;

  /**
   * Returns a Palette object for the loaded palette with the specified palette ID.
   * @param {string} id The ID of palette to retrieve.
   * @returns {Palette}
   */
  function getPalette(id: string): Palette;

  /**
   * Loads the element palette list specified by the element ID 'id' and return the corresponding
   * PaletteList object.
   * If the palette list isn't already loaded, the method will load the palette list from the disk.
   * @param {int} id The element ID.
   * @returns {PaletteList}
   */
  function getPaletteListByElementId(id: int): PaletteList;

  /**
   * Returns a PaletteList object for the loaded palette list with the specified list ID.
   * @param {string} id The ID of palette list to retrieve.
   * @returns {PaletteList}
   */
  function getPaletteListById(id: string): PaletteList;

  /**
   * Returns a PaletteList object for the loaded palette list at position 'index'.
   * @param {int} index The index of palette list to retrieve.
   * @returns {PaletteList}
   */
  function getPaletteListByIndex(index: int): PaletteList;

  /**
   * Loads the scene palette list and return the corresponding PaletteList object.
   * If the palette list isn't already loaded, the method will load the palette list from the disk.
   * @returns {PaletteList}
   */
  function getScenePaletteList(): PaletteList;

  /**
   * Removes a palette from the scene and all elements, and schedule the file for deletion on next save.
   * The method needs to acquire the locks for the palette and each palette list, and throws a JavaScript
   * exception if it can't get ownership. Returns true on success. Deleting the palette on disk may
   * affect any drawing which link to the palette, even in other projects.
   * @param {string} id The ID of palette to remove.
   * @returns {boolean}
   */
  function removePaletteReferencesAndDeleteOnDisk(id: string): boolean;
}

/**
 * The PenstyleManager JavaScript global object. Query/modify the current penstyle and list of
 * penstyles.
 * The list of penstyles differs by active tool. Query the currentToolId to know which list is active.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classPenstyleManager.html}
 * @example
 * function queryPenstyles() {
 *     // work on the brush pen styles by activating the tool
 *     Action.perform("onActionChooseBrushTool()", "sceneUI");
 *
 *     var num = PenstyleManager.getNumberOfPenstyles();
 *     for (var i = 0; i < num; ++i) {
 *         MessageLog.trace("penstyle name is " + PenstyleManager.getPenstyleName(i));
 *     }
 *
 *     MessageLog.trace("The current penstyle has min size of " + PenstyleManager.getCurrentPenstyleMinimumSize() +
 *         " and maximum size of " + PenstyleManager.getCurrentPenstyleMaximumSize());
 *
 * }
 */
declare namespace PenstyleManager {
  /**
   * Sets the current penstyle centreline smoothness.
   * @param {double} smooth New centreline smoothness value.
   * @returns {void}
   */
  function changeCurrentPenstyleCenterlineSmoothness(smooth: double): void;

  /**
   * Sets the current penstyle maximum size.
   * @param {double} maximum New maximum size.
   * @returns {void}
   */
  function changeCurrentPenstyleMaximumSize(maximum: double): void;

  /**
   * Sets the current penstyle minimum size.
   * @param {double} minimum New minimum size.
   * @returns {void}
   */
  function changeCurrentPenstyleMinimumSize(minimum: double): void;

  /**
   * Sets the current penstyle outline smoothness.
   * @param {double} smooth New outline smoothness value.
   * @returns {void}
   */
  function changeCurrentPenstyleOutlineSmoothness(smooth: double): void;

  /**
   * Returns the name of the currently active tool.
   * Pen styles are separated by tools. Use this value to know which set of pen styles are currently
   * active.
   * @returns {string}
   */
  function currentToolName(): string;

  /**
   * Formats the penstyle list into a string, which can be used to store the penstyle list and import it
   * later.
   * @returns {string}
   */
  function exportPenstyleListToString(): string;

  /**
   * Create a string representing the penstyle which can be used to store the penstyle and import it
   * later.
   * @param {int} index Index of the penstyle.
   * @returns {string}
   */
  function exportPenstyleToString(index: int): string;

  /**
   * Gets the current penstyle centerline smoothness.
   * @returns {double}
   */
  function getCurrentPenstyleCenterlineSmoothness(): double;

  /**
   * Gets the current penstyle eraser flag.
   * @returns {boolean}
   */
  function getCurrentPenstyleEraserFlag(): boolean;

  /**
   * Returns the index of the current penstyle for the active tool.
   * @returns {int}
   */
  function getCurrentPenstyleIndex(): int;

  /**
   * Gets the current penstyle maximum size.
   * @returns {double}
   */
  function getCurrentPenstyleMaximumSize(): double;

  /**
   * Gets the current penstyle minimum size.
   * @returns {double}
   */
  function getCurrentPenstyleMinimumSize(): double;

  /**
   * Returns the name of the current penstyle for the active tool.
   * @returns {string}
   */
  function getCurrentPenstyleName(): string;

  /**
   * Gets the current penstyle outline smoothness.
   * @returns {double}
   */
  function getCurrentPenstyleOutlineSmoothness(): double;

  /**
   * Returns the number of penstyles.
   * @returns {int}
   */
  function getNumberOfPenstyles(): int;

  /**
   * Returns the name of the penstyle at the given index for the current tool.
   * @param {int} index Index of the penstyle.
   * @returns {string}
   */
  function getPenstyleName(index: int): string;

  /**
   * Imports a penstyle list from a previously formatted penstyle string.
   * @param {string} str A formatted penstyle or penstyle list, which can be created from exportPenstyleToString or exportPenstylesListToString.
   * @returns {void}
   */
  function importPenstyleListFromString(str: string): void;

  /**
   * Saves the penstyles.
   * @returns {void}
   */
  function savePenstyles(): void;

  /**
   * Sets the current penstyle for the active tool.
   * @param {int} index Index of penstyle to be set as current penstyle.
   * @returns {void}
   */
  function setCurrentPenstyleByIndex(index: int): void;

  /**
   * Sets the current penstyle for the active tool.
   * @param {string} name Name of the penstyle to be set as current penstyle.
   * @returns {void}
   */
  function setCurrentPenstyleByName(name: string): void;
}

/**
 * The preferences JavaScript global object. Set or retrieve user preferences saved in the user local
 * data.
 * The actual name and current value of a preference are in stored in the user configuration file. The
 * file prefs.xml contains a description of all preferences recognized by the application. The keyword
 * to access each predefined preference is also found in that file. Scripts can change or retrieve any
 * existing preference, and may create new preferences.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classpreferences.html}
 * @example
 * function toggleAutoSaveLayout() {
 *     var b;
 *     b = preferences.getBool("AUTO_SAVE_LAYOUT", false);
 *     MessageLog.trace("preference to automatically save the layout was " + b);
 *     preferences.setBool("AUTO_SAVE_LAYOUT", !b);
 *     b = preferences.getBool("AUTO_SAVE_LAYOUT", false);
 *     MessageLog.trace("preference for auto save layout is now " + b);
 * }
 */
declare namespace preferences {
  /**
   * Gets the boolean value from the given preference name.
   * @param {string} name The name of the preference.
   * @param {boolean} defaultValue The default value of the preference.
   * @returns {boolean}
   */
  function getBool(name: string, defaultValue?: boolean): boolean;

  /**
   * Gets the color from the given preference name.
   * @param {string} name The preference name.
   * @param {ColorRGBA} defaultValue The default value of the preference.
   * @returns {ColorRGBA}
   */
  function getColor(name: string, defaultValue?: ColorRGBA): ColorRGBA;

  /**
   * Gets the double value from the given preference name.
   * @param {string} name The preference name.
   * @param {double} defaultValue The default value of the preference.
   * @returns {double}
   */
  function getDouble(name: string, defaultValue?: double): double;

  /**
   * Gets the integer value from the given preference name.
   * @param {string} name The preference name.
   * @param {int} defaultValue The default value of the preference.
   * @returns {double}
   */
  function getInt(name: string, defaultValue?: int): double;

  /**
   * Gets the string value from the given preference name.
   * @param {string} name The name of the preference.
   * @param {string} defaultValue The default value of the preference.
   * @returns {string}
   */
  function getString(name: string, defaultValue?: string): string;

  /**
   * Gets the boolean value for the given preference name.
   * @param {string} name The name of the preference.
   * @param {boolean} value The boolean to set the preference to.
   * @returns {void}
   */
  function setBool(name: string, value: boolean): void;

  /**
   * Sets the color for the given preference name.
   * @param {string} name The preference name.
   * @param {ColorRGBA} color The color to set the preference to.
   * @returns {void}
   */
  function setColor(name: string, color: ColorRGBA): void;

  /**
   * Sets the double value for the given preference name.
   * @param {string} name The preference name.
   * @param {double} value The double to set the preference to.
   * @returns {void}
   */
  function setDouble(name: string, value: double): void;

  /**
   * Sets the integer value for the given preference name.
   * @param {string} name The preference name.
   * @param {int} value The integer to set the preference to.
   * @returns {void}
   */
  function setInt(name: string, value: int): void;

  /**
   * Sets the string value for the given preference name.
   * @param {string} name The name of the preference.
   * @param {string} value The string to set the preference to.
   * @returns {void}
   */
  function setString(name: string, value: string): void;
}

/**
 * The render JavaScript global object. Render the scene or a part of the scene.
 * The scripting environment can receive notifications when the scene frame is ready.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classrender.html}
 * @example
 * function frameReady(frame, celImage) {
 *     MessageLog.trace("Frame " + frame + " Ready.");
 *     // Save the image here.
 *     celImage.imageFile("c:/tmp/myimage" + frame + ".png");
 * }
 *
 * function renderFinished() {
 *     MessageBox.information("Render Finished");
 * }
 *
 * render.renderFinished.connect(renderFinished);
 * render.frameReady.connect(frameReady);
 *
 *
 * render.setRenderDisplay("Top/Display");
 * render.renderSceneAll();
 *
 * render.renderFinished.disconnect(renderFinished);
 * render.frameReady.disconnect(frameReady);
 */
declare namespace render {
  /**
   * Interrupt an active render.
   * @returns {void}
   */
  function cancelRender(): void;

  /**
   * disconnect all scripts from signals emitted by this object.
   * @returns {void}
   */
  function disconnect(): void;

  /**
   * Render a set of specific nodes in a frame range.
   * After a frame is rendered, a frameReady signal will be emitted. Connect to it to save the rendered
   * frame.
   * @param {QScriptValue} nodeNameList list of nodes to render
   * @param {int} fromFrame render start frame
   * @param {int} toFrame render end frame
   * @returns {void}
   */
  function renderNodes(
    nodeNameList: QScriptValue,
    fromFrame: int,
    toFrame: int
  ): void;

  /**
   * Render a part of the scene.
   * After a frame is rendered, a frameReady signal will be emitted. Connect to it to save the rendered
   * frame.
   * @param {int} fromFrame render start frame
   * @param {int} toFrame render end frame
   * @returns {void}
   */
  function renderScene(fromFrame: int, toFrame: int): void;

  /**
   * Render the complete scene.
   * @returns {void}
   */
  function renderSceneAll(): void;

  /**
   * Enable or disable thumbnail cropping for the render. Mainly used when rendering thumbnails.
   * @param {boolean} enabled enable or disable cropping during render.
   * @returns {void}
   */
  function setAutoThumbnailCropping(enabled: boolean): void;

  /**
   * Set the background color to use when rendering in scene machine mode.
   * @param {ColorRGBA} bgColor background color
   * @returns {void}
   */
  function setBgColor(bgColor: ColorRGBA): void;

  /**
   * Set if rendered frames sets should be combined and in which order. Specify these options if you are
   * rendering in PAL or NTSC format.
   * @param {boolean} autoCombine automatically combine the two rendered frame field sets
   * @param {boolean} secondFieldFirst insert the second frame field set at the beginning
   * @returns {void}
   */
  function setCombine(autoCombine: boolean, secondFieldFirst: boolean): void;

  /**
   * Sets the frame output format.
   * @param {int} type frame output format: 0 - None, 1 - NTSC, 2 - PAL
   * @returns {void}
   */
  function setFieldType(type: int): void;

  /**
   * Set which display module to use for rendering. "Display All" uses the global unconnected display
   * module.
   * @param {string} name display name
   * @returns {void}
   */
  function setRenderDisplay(name: string): void;

  /**
   * Set the scene resolution to use for rendering.
   * @param {int} x width pixels
   * @param {int} y height pixels
   * @returns {void}
   */
  function setResolution(x: int, y: int): void;

  /**
   * Set the scene resolution to use for rendering.
   * @param {string} name a resolution name.
   * @returns {void}
   */
  function setResolutionName(name: string): void;

  /**
   * Enable rendering on a white background. The default is false, which renders on a black background.
   * @param {boolean} enabled When true enables rendering on a white background.
   * @returns {void}
   */
  function setWhiteBackground(enabled: boolean): void;

  /**
   * Enable or disable write modules during the render.
   * @param {boolean} enabled enable or disable write modules
   * @returns {void}
   */
  function setWriteEnabled(enabled: boolean): void;

  /**
   * Event that notifies the script that a certain frame is available and at which location.
   * @param {int} frame rendered frame number
   * @param {QObject} frameCel rendered frame Cel
   * @returns {void}
   */
  const frameReady: QSignal<(frame: int, frameCel: QObject) => void>;

  /**
   * Similarly to frameReady(), this event notifies the script that a certain frame is available and at
   * which location, specifying the respective node the frame belongs to.
   * @param {int} frame rendered frame number
   * @param {QObject} frameCel rendered frame Cel
   * @param {string} nodePath the respective node path from which the frame belongs to
   * @returns {void}
   */
  const nodeFrameReady: QSignal<
    (frame: int, frameCel: QObject, nodePath: string) => void
  >;

  /**
   * Event that notifies the script when the render has completed.
   * @returns {void}
   */
  const renderFinished: QSignal<() => void>;
}

/**
 * The scene JavaScript global object. Retrieve and set global scene attributes, like the aspect ratio
 * of the cells in the scene grid.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classscene.html}
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
declare namespace scene {
  /**
   * This function starts the accumulation of all of the functions between it and the endUndoRedoAccum
   * function as one command that will appear in the undo/redo list. If you do not use this function with
   * endUndoRedoAccum, each function in the script generates a separate undo/redo entry.
   * @param {string} commandName The name of the command to be added to the undo/redo list.
   * @returns {void}
   */
  function beginUndoRedoAccum(commandName: string): void;

  /**
   * This function cancels the accumulation of undo/redo commands. No command will be added to the
   * undo/redo list and all commands that have already been executed will be rolled-back (undone).
   * @returns {void}
   */
  function cancelUndoRedoAccum(): void;

  /**
   * Performs the same operation as the "Scene->Check Files..." menu item.
   * It can be passed an object that contains options.
   * report : default false ; returns a human-readable report in the report field summary : default false
   * ; returns a human-readable summary in the summary field colors : default true ; returns a list of
   * missing colors in the missingColors field moreInfo : default false ; returns information about the
   * bitmaps found in the scene layers : default true ; returns layer information of bitmaps when
   * moreInfo is true (for PSD files) allFiles : default true ; returns the list of TVG and bitmaps if
   * true. If false returns only TVG files.
   * The function can also be passed true to make all the options true.
   * e.g.
   * @param {QVariant} options
   * @returns {void}
   * @example
   * var r = scene.checkFiles(true); // turns on all options to true
   *
   * var s = scene.checkFiles({
   *     allFiles: false
   * }); // Will check only TVG files.
   *
   * var t = scene.checkFiles({
   *     allFiles: true,
   *     modeInfo: true,
   *     report: true
   * }); // Will check all files and display bitmap information and layer informations on bitmap files. Will return a human-readable report in the report field of the returned object
   */
  function checkFiles(options: QVariant): void;

  /**
   * Clears the command history.
   * @returns {void}
   */
  function clearHistory(): void;

  /**
   * Clears the redo command history.
   * @returns {void}
   */
  function clearRedo(): void;

  /**
   * Closes the current scene.
   * Exiting functions Anyone of these is final and absolute. Nothing in the script will be executed
   * after these calls.
   * @returns {void}
   */
  function closeScene(): void;

  /**
   * Closes the current scene and exits.
   * @returns {void}
   */
  function closeSceneAndExit(): void;

  /**
   * Closes the current scene and open the scene specified by env, job, scene and version.
   * @param {string} envName The environment name.
   * @param {string} jobName The job name.
   * @param {string} sceneName The scene name.
   * @param {string} [versionName="0"] The version name.
   * @param {boolean} [isReadOnly=false] If the scene should be opened in readonly mode
   * @returns {boolean}
   */
  function closeSceneAndOpen(
    envName: string,
    jobName: string,
    sceneName: string,
    versionName?: string,
    isReadOnly?: boolean
  ): boolean;

  /**
   * Closes the current scene and open the scene specified by it's file path.
   * @param {string} filePath The full path to the file to open.
   * @returns {boolean}
   */
  function closeSceneAndOpenOffline(filePath: string): boolean;

  /**
   * Returns the scene working colour space name.
   * The empty name corresponds to disabled colour space management.
   * @returns {string}
   */
  function colorSpace(): string;

  /**
   * Returns the list of supported colour space names.
   * The list is empty if colour space management is disabled.
   * @returns {StringList}
   */
  function colorSpaceNames(): StringList;

  /**
   * Returns the X value of the centre coordinate of the scene grid.
   * @returns {int}
   */
  function coordAtCenterX(): int;

  /**
   * Returns the Y value of the centre coordinate of the scene grid.
   * @returns {int}
   */
  function coordAtCenterY(): int;

  /**
   * Returns the current project path or archive path if this is archive format.
   * @returns {string}
   */
  function currentContainerPath(): string;

  /**
   * Returns the name of the current environment.
   * @returns {string}
   */
  function currentEnvironment(): string;

  /**
   * Returns the path of the current environment.
   * @returns {string}
   */
  function currentEnvironmentPath(): string;

  /**
   * Returns the name of the current job.
   * @returns {string}
   */
  function currentJob(): string;

  /**
   * Returns the path of the current job.
   * @returns {string}
   */
  function currentJobPath(): string;

  /**
   * Returns the current project path.
   * @returns {string}
   */
  function currentProjectPath(): string;

  /**
   * For windows, returns the remapped path.
   * @returns {string}
   */
  function currentProjectPathRemapped(): string;

  /**
   * Returns the X value of the current preview resolution.
   * For example, when the current resolution is 720x540 pixels this function will return 720.
   * @returns {int}
   */
  function currentResolutionX(): int;

  /**
   * Returns the Y value of the current preview resolution.
   * For example, when the current resolution is 720x540 pixels this function will return 540.
   * @returns {int}
   */
  function currentResolutionY(): int;

  /**
   * Returns the name of the current scene.
   * @returns {string}
   */
  function currentScene(): string;

  /**
   * Returns the ID of the current version.
   * @returns {int}
   */
  function currentVersion(): int;

  /**
   * Returns the name or the number of the current scene version.
   * @returns {string}
   */
  function currentVersionName(): string;

  /**
   * Returns the default resolution field of view (FOV). The default FOV is a global scene parameter.
   * @returns {double}
   */
  function defaultResolutionFOV(): double;

  /**
   * Returns the default resolution name.
   * The resolution name is a global parameter saved with the project. It may be empty when the project
   * is used as a custom resolution, which is not one of the pre-defined resolutions.
   * @returns {string}
   */
  function defaultResolutionName(): string;

  /**
   * Returns the X value of the default resolution.
   * This resolution is a global parameter saved with the project, not the current preview resolution.
   * For example, when the default scene resolution is 720x540 pixels this function will return 720.
   * @returns {int}
   */
  function defaultResolutionX(): int;

  /**
   * Returns the Y value of the default resolution.
   * This resolution is a global parameter saved with the project, not the current preview resolution.
   * For example, when the default scene resolution is 720x540 pixels this function will return 540.
   * @returns {int}
   */
  function defaultResolutionY(): int;

  /**
   * Get the description that will be set for the imported scene version.
   * @returns {string}
   */
  function description(): string;

  /**
   * This function ends the accumulation all of the functions between it and the beginUndoRedoAccum
   * function as one command that will appear in the undo/redo list. If you do not use this function with
   * beginUndoRedoAccum, each function in the script generates a separate undo/redo entry.
   * @returns {void}
   */
  function endUndoRedoAccum(): void;

  /**
   * Converts an OGL coordinate into a field coordinate.
   * @param {QObject} pointOrVector can be either a 2D point or a 3D point or a vector object.
   * @returns {QScriptValue}
   */
  function fromOGL(pointOrVector: QObject): QScriptValue;

  /**
   * Converts the X-value of an OpenGL coordinate to the X-value of a field coordinate.
   * @param {double} oglX The X-value of an OpenGL coordinate.
   * @returns {double}
   */
  function fromOGLX(oglX: double): double;

  /**
   * Converts the Y-value of an OpenGL coordinate to the Y-value of a field coordinate.
   * @param {double} oglY The Y-value of an OpenGL coordinate.
   * @returns {double}
   */
  function fromOGLY(oglY: double): double;

  /**
   * Converts the Z-value of an OpenGL coordinate to the Z-value of a field coordinate.
   * @param {double} oglZ The Z-value of an OpenGL coordinate.
   * @returns {double}
   */
  function fromOGLZ(oglZ: double): double;

  /**
   * Returns the model matrix for the default camera.
   * @param {int} frame The frame to retrieve the camera matrix at.
   * @returns {QObject}
   */
  function getCameraMatrix(frame: int): QObject;

  /**
   * Retrieves the default display set in the current scene.
   * @returns {string}
   */
  function getDefaultDisplay(): string;

  /**
   * Returns the frame rate, as frames per second.
   * @returns {double}
   */
  function getFrameRate(): double;

  /**
   * Returns all palettes that were either unrecovered or recovered but not yet saved, depending on the
   * arguments of the function.
   * @param {boolean} unrecovered Whether or not to return unrecovered palettes.
   * @param {boolean} recoveredNotYetSaved Whether or not to return recovered but not yet saved palettes.
   * @returns {StringList}
   */
  function getMissingPalettes(
    unrecovered: boolean,
    recoveredNotYetSaved: boolean
  ): StringList;

  /**
   * Returns the scene's active bit depth.
   * @returns {int}
   */
  function getProcessingBitDepth(): int;

  /**
   * Returns the scene start frame.
   * @returns {int}
   */
  function getStartFrame(): int;

  /**
   * Returns the scene stop frame.
   * @returns {int}
   */
  function getStopFrame(): int;

  /**
   * Returns true if the scene was ever modified.
   * It will return true even if the modifications have been saved.
   * @returns {boolean}
   */
  function hasBeenDirty(): boolean;

  /**
   * Tells if the scene has been modified since its last save.
   * @returns {boolean}
   */
  function isDirty(): boolean;

  /**
   * Return a metadata object corresponding to the given name and type.
   * Here is an example of a metadata object:
   * Supported values for type are: string, int, double, bool.
   * @param {string} name The name of the metadata object.
   * @param {string} [type=QNTR("string")] The metadata type.
   * @returns {QScriptValue}
   * @example
   * {
   *     "name": "myMetadata",
   *     "type": "string",
   *     "creator": "Harmony Premium",
   *     "version": "1.0",
   *     "value": "foo"
   * }
   */
  function metadata(name: string, type?: string): QScriptValue;

  /**
   * Return the list of metadatas for the current scene.
   * This method returns an array of javascript objects where each object represent a single metadata
   * object. Here is an example of a metadata object:
   * Supported values for type are: string, int, double, bool.
   * @returns {QScriptValue}
   * @example
   * {
   *     "name": "myMetadata",
   *     "type": "string",
   *     "creator": "Harmony Premium",
   *     "version": "1.0",
   *     "value": "foo"
   * }
   */
  function metadatas(): QScriptValue;

  /**
   * Returns the list of known resolutions.
   * @returns {StringList}
   */
  function namedResolutions(): StringList;

  /**
   * Returns the X value of the named resolution. For example, when the named resolution is 720x540
   * pixels this function will return 720.
   * @param {string} name The name of the resolution to get the value from.
   * @returns {int}
   */
  function namedResolutionX(name: string): int;

  /**
   * Returns the Y value of the named resolution. For example, when the named resolution is 720x540
   * pixels this function will return 540.
   * @param {string} name The name of the resolution to get the value from.
   * @returns {int}
   */
  function namedResolutionY(name: string): int;

  /**
   * Returns the number of units in the X axis of the scene grid.
   * @returns {int}
   */
  function numberOfUnitsX(): int;

  /**
   * Returns the number of units in the Y axis of the scene grid.
   * @returns {int}
   */
  function numberOfUnitsY(): int;

  /**
   * Returns the number of units in the Z axis of the scene grid.
   * @returns {int}
   */
  function numberOfUnitsZ(): int;

  /**
   * Redoes the last n operations. If n is not specified, it will be 1.
   * @param {int} [depth=1] The number of operations to redo.
   * @returns {void}
   */
  function redo(depth?: int): void;

  /**
   * Removes a metadata object from the list of metadata objects.
   * @param {QScriptValue} meta A metadata object.
   * @returns {boolean}
   */
  function removeMetadata(meta: QScriptValue): boolean;

  /**
   * Performs the "save all" command. Effectively, this saves the entire project and all modified files.
   * @returns {boolean}
   */
  function saveAll(): boolean;

  /**
   * Save the current project to the specified folder.
   * Save the current project to the specified folder. Folder must not exists. The current project is
   * updated to use that folder. Any error or message is reported using the standard error logger (so, in
   * non batch mode, user will see message popup).
   * This API only works in standalone as you cannot 'Save As' in database.
   * @param {string} pathname New folder of the project (ie: /Users/a_user/Documents/my_save_as_project )
   * @returns {boolean}
   */
  function saveAs(pathname: string): boolean;

  /**
   * Saves the project as a new version.
   * @param {string} name The name of the version.
   * @param {boolean} markAsDefault This is boolean to indicate to mark this version as the default version.
   * @returns {boolean}
   */
  function saveAsNewVersion(name: string, markAsDefault?: boolean): boolean;

  /**
   * This function sets the scene working colour space name.
   * @param {string} name Set the scene working colour space name.
   * @returns {boolean}
   */
  function setColorSpace(name: string): boolean;

  /**
   * Sets the value of the centre (X, Y) coordinates.
   * @param {int} x The value of the X coordinate at the centre of the grid.
   * @param {int} y The value of the Y coordinate at the centre of the grid.
   * @returns {boolean}
   */
  function setCoordAtCenter(x: int, y: int): boolean;

  /**
   * Sets the default scene resolution and field of view.
   * @param {int} x Set the X resolution for the scene in pixels.
   * @param {int} y Set the Y resolution for the scene in pixels.
   * @param {double} fov Set the field of view in degree. Typical value is 41.112.
   * @returns {boolean}
   */
  function setDefaultResolution(x: int, y: int, fov: double): boolean;

  /**
   * This function sets the default scene resolution name.
   * @param {string} name Set the current resolution preset name to this value.
   * @returns {boolean}
   */
  function setDefaultResolutionName(name: string): boolean;

  /**
   * Changes the default texture pixel density for new Bitmap Drawings.
   * The example below uses scene.setDefaultTexturePixelDensityforBitmapDrawings() to reduce the scene
   * settings' default pixel density for bitmap drawings to 20%.
   * @param {double} normalizedDensity The new normalized default pixel density (1.0 = 100%)
   * @returns {void}
   * @example
   * scene.setDefaultTexturePixelDensityforBitmapDrawings(0.2);
   */
  function setDefaultTexturePixelDensityforBitmapDrawings(
    normalizedDensity?: double
  ): void;

  /**
   * Changes the default texture pixel density for new Vector Drawings.
   * The example below uses scene.setDefaultTexturePixelDensityforVectorDrawings() to increase the scene
   * settings' default pixel density for vector drawings to 300%.
   * @param {double} normalizedDensity The new normalized default pixel density (1.0 = 100%)
   * @returns {void}
   * @example
   * scene.setDefaultTexturePixelDensityforVectorDrawings(3.0);
   */
  function setDefaultTexturePixelDensityforVectorDrawings(
    normalizedDensity?: double
  ): void;

  /**
   * Set the description that will be set for the imported scene version.
   * @param {string} description The description
   * @returns {void}
   */
  function setDescription(description: string): void;

  /**
   * This function set the default frame rate of the project. The frame rate is expressed as frames per
   * second. Typical value is 12, 24 or 30.
   * @param {double} frameRate The new frame rate.
   * @returns {boolean}
   */
  function setFrameRate(frameRate: double): boolean;

  /**
   * Either inserts a new metadata object or sets the value of an existing metadata object.
   * If a metadata object already exist with the given name and type properties, then sets its value with
   * the given value property. Otherwise, inserts a new metadata object with the given name, type(default
   * is string), creator(default is executable), version(default is 1.0) and values properties. Here is
   * an example of a metadata object:
   * Supported values for type are: string, int, double, bool.
   * @param {QScriptValue} meta A metadata object.
   * @returns {void}
   * @example
   * {
   *     "name": "myMetadata",
   *     "type": "string",
   *     "creator": "Harmony Premium",
   *     "version": "1.0",
   *     "value": "foo"
   * }
   */
  function setMetadata(meta: QScriptValue): void;

  /**
   * Sets the number of X, Y, and Z units in the scene grid.
   * @param {int} x The X value of the scene grid.
   * @param {int} y The Y value of the scene grid.
   * @param {int} z The Z value of the scene grid.
   * @returns {boolean}
   */
  function setNumberOfUnits(x: int, y: int, z: int): boolean;

  /**
   * Sets the scene's active bit depth.
   * @param {int} bitDepth The bit depth, either '16' or '32'.
   * @returns {void}
   */
  function setProcessingBitDepth(bitDepth: int): void;

  /**
   * This function sets the scene start frame. The value is validated to be below the number of frames,
   * the stop frame is adjusted too if the specified value is bigger.
   * @param {int} frame The scene start frame.
   * @returns {boolean}
   */
  function setStartFrame(frame: int): boolean;

  /**
   * This function sets the scene stop frame. The value is validated to be below the number of frames,
   * the start frame is adjusted too if the specified value is smaller.
   * @param {int} frame The scene stop frame.
   * @returns {boolean}
   */
  function setStopFrame(frame: int): boolean;

  /**
   * Sets the aspect ratio of the scene. The scene's final aspect ratio will be: X * numberOfUnitsX()/Y *
   * numberOfUnitsY().
   * @param {double} x The X value of the new aspect ratio.
   * @param {double} y The Y value of the new aspect ratio.
   * @returns {boolean}
   */
  function setUnitsAspectRatio(x: double, y: double): boolean;

  /**
   * Returns the temporary project path.
   * @returns {string}
   */
  function tempProjectPath(): string;

  /**
   * For windows, returns the remapped temporary project path.
   * The remapped temporary project path.
   * @returns {string}
   */
  function tempProjectPathRemapped(): string;

  /**
   * Converts a field coordinate into an OGL coordinate.
   * @param {QObject} pointOrVector can be either a 2D point or a 3D point or a vector object.
   * @returns {QScriptValue}
   */
  function toOGL(pointOrVector: QObject): QScriptValue;

  /**
   * Converts the X-value of a field coordinate to the X-value of an OpenGL coordinate.
   * @param {double} fieldX The X-value of a field coordinate.
   * @returns {double}
   */
  function toOGLX(fieldX: double): double;

  /**
   * Converts the Y-value of a field coordinate to the Y-value of an OpenGL coordinate.
   * @param {double} fieldY The Y-value of a field coordinate.
   * @returns {double}
   */
  function toOGLY(fieldY: double): double;

  /**
   * Converts the Z-value of a field coordinate to the Z-value of an OpenGL coordinate.
   * @param {double} fieldZ The Z-value of a field coordinate.
   * @returns {double}
   */
  function toOGLZ(fieldZ: double): double;

  /**
   * Undoes the last n operations. If n is not specified, it will be 1.
   * @param {int} [depth=1] The number of operations to undo.
   * @returns {void}
   */
  function undo(depth?: int): void;

  /**
   * Returns the X value of the aspect ratio of the cells in the scene grid.
   * @returns {double}
   */
  function unitsAspectRatioX(): double;

  /**
   * Returns the Y value of the aspect ratio of the cells in the scene grid.
   * @returns {double}
   */
  function unitsAspectRatioY(): double;
}

/**
 * The SceneOffline JavaScript global object. Provides utilities for offline scene updates.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classSceneOffline.html}
 */
declare namespace SceneOffline {
  /**
   * Create partial package to update database scene.
   * @param {string} package Full path name of the compressed package to be created.
   * @returns {boolean}
   */
  function createDatabasePartialUpdatePackage(package: string): boolean;
}

/**
 * The selection JavaScript global object. Retrieve information about the nodes or columns that are
 * selected.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classselection.html}
 * @example
 * function dumpSelectedColumn() {
 *     // The numberOfColumnsSelected function loops to check all of the selected columns and determine their frame values.
 *     // The selectedColumn function prints the name of the selected column to the shell and
 *     // then loops through the values in the column to print them as well.
 *
 *     var ncol = selection.numberOfColumnsSelected();
 *     var nframe = frame.numberOf();
 *     var i;
 *
 *     for (i = 0; i < ncol; ++i) {
 *         var f;
 *         var c = selection.selectedColumn(i);
 *         MessageLog.trace("Column " + c);
 *         for (f = 1; f <= nframe; ++f) {
 *             var value = column.getEntry(c, 1, f);
 *             var keyframe = column.isKeyFrame(c, 1, f);
 *             if (keyframe) value += " (keyframe)";
 *             MessageLog.trace(" " + f + ": " + value);
 *         }
 *     }
 * }
 */
declare namespace selection {
  /**
   * Adds a backdrop to the selection.
   * If multiple backdrops of a given group share the same title, all of them will be added to the
   * selection.
   * @param {QScriptValue} backdrop The backdrop object provided from Backdrop.backdrops( groupPath )
   * @returns {boolean}
   */
  function addBackdropToSelection(backdrop: QScriptValue): boolean;

  /**
   * Adds a backdrop to the selection.
   * If multiple backdrops of a given group share the same title, all of them will be added to the
   * selection.
   * @param {string} groupPath
   * @param {uint} idx The index of the backdrop in the group.
   * @returns {boolean}
   */
  function addBackdropToSelection(groupPath: string, idx: uint): boolean;

  /**
   * Add a column to the selection.
   * returns whether columns was located and successfully added to the selection
   * @param {string} column name of column
   * @returns {boolean}
   */
  function addColumnToSelection(column: string): boolean;

  /**
   * Adds the drawing column and it's associated read node to the selection.
   * @param {string} columnName The displayed name of column.
   * @returns {boolean}
   */
  function addDrawingColumnToSelection(columnName: string): boolean;

  /**
   * Adds an array of nodes to the selection.
   * @param {QScriptValue} nodes An array containing the qualified name of nodes to be selected.
   * @returns {void}
   */
  function addNodesToSelection(nodes: QScriptValue): void;

  /**
   * Adds a node to the selection.
   * @param {string} node The name of node to add to the selection.
   * @returns {boolean}
   */
  function addNodeToSelection(node: string): boolean;

  /**
   * Selects/deselects a set of IDs from the sub selection.
   * Select a set of sub objects. If the sub object is already selected, this method will deselect it.
   * @param {string} node The path to the node (ex: "Top/MyNode").
   * @param {QScriptValue} subSelection An array of sub object IDs or the id (integer) of one sub object.
   * @returns {boolean}
   * @example
   * // Load a previous selection from a JSON file.
   * var mySelectionFile = System.getenv("TEMP") + "/myHarmonySelection_001.json";
   * var myFile = new PermanentFile(mySelectionFile);
   * myFile.open(1);
   * var jsonFileContent = myFile.read();
   * myFile.close();
   *
   * // Restore the read selection in Harmony.
   * var newSelection = JSON.parse(jsonFileContent);
   * selection.addNodeToSelection(newSelection.node);
   * selection.addSubSelectionForNode(newSelection.node, newSelection.subobjects);
   */
  function addSubSelectionForNode(
    node: string,
    subSelection: QScriptValue
  ): boolean;

  /**
   * Add a waypoint to the selection.
   * returns whether waypoint was located and successfully added to the selection
   * @param {string} waypoint qualified name of waypoint
   * @returns {boolean}
   */
  function addWaypointToSelection(waypoint: string): boolean;

  /**
   * Get the Attribute associated to the given sub selection id of the given node.
   * @param {string} node The node owning the desired attribute.
   * @param {int} subSelectionId The sub selection id associated to the attribute.
   * @returns {Attribute}
   * @example
   * var selectedNode = selection.selectedNode(0);
   * if (selectedNode == "")
   *     return;
   *
   * // Remove the selected attribute from the node
   * var subSelection = selection.subSelectionForNode(selectedNode);
   * for (var i = 0; i < subSelection.length; ++i) {
   *     var attribute = selection.attributeFromSubSelectionId(selectedNode, subSelection[i]);
   *
   *     MessageLog.trace("Removing " + attribute.name() + " " + attribute.fullKeyword());
   *     node.removeDynamicAttr(selectedNode, attribute.fullKeyword());
   * }
   */
  function attributeFromSubSelectionId(
    node: string,
    subSelectionId: int
  ): Attribute;

  /**
   * Clears the selection.
   * @returns {boolean}
   */
  function clearSelection(): boolean;

  /**
   * Clears all the sub selection on the given node.
   * @param {string} node The path to the node (ex: "Top/MyNode").
   * @returns {boolean}
   * @example
   * selection.clearSubSelectionForNode("Top/My-Subnode-Animation");
   */
  function clearSubSelectionForNode(node: string): boolean;

  /**
   * Adds the column to the selection. If the column is a drawing column, also adds the associated read
   * node to the selection.
   * @param {string} columnName The displayed name of column.
   * @returns {boolean}
   */
  function extendSelectionWithColumn(columnName: string): boolean;

  /**
   * Returns true if the selection has a range.
   * @returns {boolean}
   */
  function isSelectionRange(): boolean;

  /**
   * Returns a value for the number of columns selected in the xsheet.
   * @returns {int}
   */
  function numberOfColumnsSelected(): int;

  /**
   * Returns the number of selected frames.
   * @returns {int}
   */
  function numberOfFrames(): int;

  /**
   * Returns the number of nodes that are selected.
   * @returns {int}
   */
  function numberOfNodesSelected(): int;

  /**
   * Removes a backdrop to the selection.
   * If multiple backdrops of a given group share the same title, all of them will be removed from the
   * selection.
   * @param {QScriptValue} backdrop The backdrop object provided from Backdrop.backdrops( groupPath )
   * @returns {boolean}
   */
  function removeBackdropFromSelection(backdrop: QScriptValue): boolean;

  /**
   * Removes a backdrop to the selection.
   * If multiple backdrops of a given group share the same title, all of them will be removed from the
   * selection.
   * @param {string} groupPath
   * @param {uint} idx The index of the backdrop in the group.
   * @returns {boolean}
   */
  function removeBackdropFromSelection(groupPath: string, idx: uint): boolean;

  /**
   * Removes a node from the selection.
   * @param {string} node The name of node to be removed from the selection.
   * @returns {boolean}
   */
  function removeNodeFromSelection(node: string): boolean;

  /**
   * Remove a waypoint from the selection.
   * returns whether waypoint was located and successfully removed from the selection
   * @param {string} waypoint qualified name of waypoint
   * @returns {boolean}
   */
  function removeWaypointFromSelection(waypoint: string): boolean;

  /**
   * Selects all nodes and all columns in the scene.
   * @returns {void}
   */
  function selectAll(): void;

  /**
   * Returns an Array of all selected backdrops.
   * @returns {QScriptValue}
   */
  function selectedBackdrops(): QScriptValue;

  /**
   * Returns the ith column selected in the xsheet.
   * @param {int} i The index of the column.
   * @returns {string}
   */
  function selectedColumn(i: int): string;

  /**
   * Returns the path of the selected node.
   * @param {int} i The index of the node.
   * @returns {string}
   */
  function selectedNode(i: int): string;

  /**
   * Returns an Array of all selected nodes.
   * @returns {QScriptValue}
   */
  function selectedNodes(): QScriptValue;

  /**
   * Returns the path of the selected waypoint.
   * @param {int} i The index of the waypoint.
   * @returns {string}
   */
  function selectedWaypoint(i: int): string;

  /**
   * Returns an Array of all selected waypoints.
   * @returns {QScriptValue}
   */
  function selectedWaypoints(): QScriptValue;

  /**
   * Sets the selection frame range.
   * @param {int} start The beginning frame.
   * @param {int} length The number of frames selected.
   * @returns {void}
   */
  function setSelectionFrameRange(start: int, length: int): void;

  /**
   * Returns the selected start frame.
   * @returns {int}
   */
  function startFrame(): int;

  /**
   * Obtains the IDs of the selectable sub objects of the given node.
   * @param {string} node The path to the node (ex: "Top/MyNode").
   * @returns {QScriptValue}
   * @example
   * // Get the current selection and save it in a JSON file.
   * var selectedNodeCount = selection.numberOfNodesSelected();
   * if (selectedNodeCount != 1)
   *     return;
   *
   * var newSelection = new Object;
   * newSelection.node = selection.selectedNode(0);
   * newSelection.subobjects = selection.subSelectionForNode(newSelection.node);
   *
   * // Save the javascript object containing the selection information in a JSON file in the temp folder.
   * var mySelectionFile = System.getenv("TEMP") + "/myHarmonySelection_001.json";
   * var myFile = new PermanentFile(mySelectionFile);
   * myFile.open(2);
   * myFile.write(JSON.stringify(newSelection));
   * myFile.close();
   */
  function subSelectionForNode(node: string): QScriptValue;

  /**
   * Get the sub selection id corresponding to the given Attribute object.
   * The attribute has to be selectable. By example, the subnode animation module's subnode
   * transformation attributes.
   * @param {QScriptValue} attribute An Attribute of a selected node.
   * @returns {int}
   * @example
   * var selectedNode = selection.selectedNode(0);
   * if (selectedNode == "" || node.type(selectedNode) != "SubNodeAnimation")
   *     return;
   *
   * var attributeType = "SUB_NODE_TRANSFORMATION";
   * var attributeName = "my_subnode_Key";
   * var linkable = false; // not used
   * node.createDynamicAttr(selectedNode, attributeType, attributeName, attributeName, linkable);
   *
   * var nameAttribute = node.getAttr(selectedNode, frame.current, attributeName + ".NODE_NAME");
   * nameAttribute.setValue(attributeName);
   *
   * var addedAttribute = node.getAttr(selectedNode, frame.current(), attributeName);
   *
   * var attributeSelectionId = selection.subSelectionIdFromAttribute(addedAttribute);
   * selection.clearSubSelectionForNode(selectedNode);
   *
   * var subSelectionIdArray = [];
   * subSelectionIdArray[0] = attributeSelectionId;
   * selection.addSubSelectionForNode(selectedNode, subSelectionIdArray);
   * MessageLog.trace("Added attribute " + addedAttribute.name() + " with sub selection id: " + attributeSelectionId);
   */
  function subSelectionIdFromAttribute(attribute: QScriptValue): int;
}

/**
 * The sound JavaScript global object. Access the scene soundtrack in part or in whole. The scripting
 * environment can receive notifications when scene frame is ready. See the TB_ExportFLV.js script for
 * an example.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classsound.html}
 * @example
 * // Retrieves a 16 bit 48 KHz stereo soundtrack of frames 50 to 100
 *
 * sound.setSampleRate(48000);
 * sound.setChannelSize(16);
 * sound.setChannelCount(2);
 * var soundFile = sound.getSoundtrack(50, 100);
 * MessageBox.information("Soundtrack file location: " + soundFile.path());
 */
declare namespace sound {
  /**
   * Copy the content of the source file to the destination file and say if the copy is done completely.
   * @param {string} srcFileName The source file to be copied from.
   * @param {string} dstFileName The destination file to be copied to.
   * @returns {boolean}
   */
  function copy(srcFileName: string, dstFileName: string): boolean;

  /**
   * Return a part of the scene's soundtrack in a temporary file in the WAV format.
   * @param {int} fromFrame The soundtrack start frame.
   * @param {int} toFrame The soundtrack end frame.
   * @returns {QObject}
   */
  function getSoundtrack(fromFrame: int, toFrame: int): QObject;

  /**
   * Return the scene's soundtrack in a temporary file in the WAV format.
   * @returns {QObject}
   */
  function getSoundtrackAll(): QObject;

  /**
   * Check if the export file path is in unicode.
   * @param {string} exportFilePath The export file path to check.
   * @returns {boolean}
   */
  function isUnicode(exportFilePath: string): boolean;

  /**
   * Sets the number of audio channels (i.e 1 for mono and 2 for stereo).
   * @param {int} count The audio channel count.
   * @returns {void}
   */
  function setChannelCount(count: int): void;

  /**
   * Sets the audio channel size (i.e. 8 or 16 bit).
   * @param {int} size The audio channel size.
   * @returns {void}
   */
  function setChannelSize(size: int): void;

  /**
   * Sets the number of frames per second. By default the scene frame rate is used.
   * @param {double} rate The desired frame rate.
   * @returns {void}
   */
  function setFrameRate(rate: double): void;

  /**
   * Sets the audio sample rate in Hz (i.e. 22050, 44100, ...).
   * @param {double} rate The desired audio sample rate.
   * @returns {void}
   */
  function setSampleRate(rate: double): void;

  /**
   * Event that notifies the script when the sound file is available.
   * @returns {void}
   */
  const soundReady: QSignal<() => void>;
}

/**
 * The Synclayer JavaScript global object. Provides utilities for sync and unsync drawing layers.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classSyncLayer.html}
 */
declare namespace SyncLayer {
  /**
   * Sync the specified layer with the specified parent drawing layer.
   * Convert the specified layer to the synced drawing layer and sync it with the specified parent
   * drawing layer. The specified sync drawing must not be already synced drawing layer, neither parent
   * drawing layer. Moreover the specified sync and parent drawings must be different.
   * @param {string} drawingToSync The name of the layer to be converted to synced drawing layer
   * @param {string} parentDrawing The name of the parent drawing layer
   * @returns {boolean}
   * @example
   * var ret = SyncLayer.syncLayers("Top/Drawing", "Top/Drawing_1");
   * System.println("Sync operation return : " + ret);
   */
  function syncLayers(drawingToSync: string, parentDrawing: string): boolean;

  /**
   * Unsync the specified synced drawing layer.
   * @param {string} syncedDrawing The name of the synced drawing layer to unsync
   * @returns {boolean}
   * @example
   * var ret = SyncLayer.unsyncLayer("Top/Drawing");
   * System.println("Unsync operation return : " + ret);
   */
  function unsyncLayer(syncedDrawing: string): boolean;
}

/**
 * The System JavaScript global object. Call system specific command directly.
 * SCR_SystemInterface allows access to environment variables and printing to the command prompt or
 * Terminal.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classSystem.html}
 * @example
 * System.println("This text is printed in the command prompt or the Terminal");
 * var tempFolder = System.getenv("TEMP");
 */
declare namespace System {
  /**
   * Gets the value of an environment variable or the operating system.
   * @param {string} environmentVariable The desired environment variable.
   * @returns {string}
   */
  function getenv(environmentVariable: string): string;

  /**
   * Prints a string to Terminal (Unix) or Command Prompt (Windows).
   * @param {string} text The text to print to the console.
   * @returns {void}
   */
  function println(text: string): void;

  /**
   * Processes the next event in a while loop. It can not be accessed from the scriptModule, neither from
   * writeModule.
   * @returns {void}
   */
  function processOneEvent(): void;
}

/**
 * The Timeline JavaScript global object. Used to get informations about layers and frames from the
 * Timeline view.
 * There are two main groups of Timeline functions:
 * The layerIdx and selIdx parameters are used in many of the functions:
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classTimeline.html}
 * @example
 *  function printTimelineLayerInformation() {
 *      //
 *      // Print out information for all layers
 *      //
 *      var numLayers = Timeline.numLayers;
 *      for (var i = 0; i < numLayers; i++) {
 *          if (Timeline.layerIsNode(i))
 *              MessageLog.trace(i + ": is a node named " + Timeline.layerToNode(i));
 *
 *          if (Timeline.layerIsColumn(i))
 *              MessageLog.trace(" " + i + ": also has an xsheet column named " + Timeline.layerToColumn(i));
 *      }
 *
 *      MessageLog.trace("number of frames selected is " + Timeline.numFrameSel + " starting at " + Timeline.firstFrameSel);
 *
 *
 *      //
 *      // Print out information on selected layers
 *      //
 *
 *      var numSelLayers = Timeline.numLayerSel;
 *      for (var i = 0; i < numSelLayers; i++) {
 *          if (Timeline.selIsNode(i))
 *              MessageLog.trace(" " + i + ": is a SELECTED node layer with name " + Timeline.selToNode(i));
 *
 *          if (Timeline.selIsColumn(i))
 *              MessageLog.trace(i + ": SELECTED layer name is " + Timeline.selToColumn(i));
 *
 *      }
 *  }
 */
declare namespace Timeline {
  /**
   * Centers the timeline view on the given frame.
   * @param {int} frameNum The frame number to center on
   * @returns {void}
   */
  function centerOnFrame(frameNum: int): void;

  /**
   * Changes the type of a Timeline Frame Marker.
   * @param {int} layerIndex The layer index in the timeline layer.
   * @param {int} markerId The id of the marker to move.
   * @param {string} markerType The type to change the marker to.
   * @returns {boolean}
   */
  function changeFrameMarkerType(
    layerIndex: int,
    markerId: int,
    markerType: string
  ): boolean;

  /**
   * Creates a Timeline Frame Marker with the given properties.
   * The objects have the following properties:
   * type - The type of the frame marker. By default, these are the colours of the frame markers.
   * frame - The frame number.
   * id - The id of the frame marker. These are unique within the layer.
   * @param {int} layerIndex The layer index in the timeline layer.
   * @param {string} markerType The type of frame marker to create.
   * @param {int} frameNumber The frame to create the marker on.
   * @returns {int}
   */
  function createFrameMarker(
    layerIndex: int,
    markerType: string,
    frameNumber: int
  ): int;

  /**
   * Deletes the Timeline Frame Marker with the given id.
   * @param {int} layerIndex The layer index in the timeline layer.
   * @param {int} markerId The id of the marker to delete.
   * @returns {boolean}
   */
  function deleteFrameMarker(layerIndex: int, markerId: int): boolean;

  /**
   * Return an array of object representing the Timeline Frame Markers for the given layer index, with
   * the given type.
   * The objects have the following properties:
   * type - The type of the frame marker. By default, these are the colours of the frame markers.
   * frame - The frame number.
   * id - The id of the frame marker. These are unique within the layer.
   * @param {int} layerIndex The layer index in the timeline layer.
   * @param {string} markerType The type of frame marker to filter for.
   * @returns {QScriptValue}
   */
  function filterFrameMarkers(
    layerIndex: int,
    markerType: string
  ): QScriptValue;

  /**
   * Returns the first frame selected.
   * @returns {int}
   */
  function firstFrameSel(): int;

  /**
   * Returns a list of Timeline Frame Marker types.
   * @returns {StringList}
   */
  function frameMarkerTypes(): StringList;

  /**
   * Return an array of object representing the Timeline Frame Markers for the given layer index.
   * The objects have the following properties:
   * type - The type of the frame marker. By default, these are the colours of the frame markers.
   * frame - The frame number.
   * id - The id of the frame marker. These are unique within the layer.
   * @param {int} layerIndex The layer index in the timeline layer.
   * @returns {QScriptValue}
   */
  function getAllFrameMarkers(layerIndex: int): QScriptValue;

  /**
   * Return an object representing the Timeline Frame Marker at the given frame for the given layer
   * index.
   * The object has the following properties:
   * type - The type of the frame marker. By default, these are the colours of the frame markers.
   * frame - The frame number.
   * id - The id of the frame marker. These are unique within the layer.
   * @param {int} layerIndex The layer index in the timeline layer.
   * @param {int} frameNumber The frame number.
   * @returns {QScriptValue}
   */
  function getFrameMarker(layerIndex: int, frameNumber: int): QScriptValue;

  /**
   * Returns true if the parent layer index is an ancestor of the layer index.
   * @param {int} parentLayerIndex The parent layer index in the timeline layer.
   * @param {int} layerIndex The layer index in the timeline layer.
   * @returns {boolean}
   */
  function isAncestorOf(parentLayerIndex: int, layerIndex: int): boolean;

  /**
   * Returns true if the layer index is a column.
   * @param {int} layerIndex The layer index in the timeline layer.
   * @returns {boolean}
   */
  function layerIsColumn(layerIndex: int): boolean;

  /**
   * Returns true if the layer is a node.
   * @param {int} layerIndex The layer index in the timeline layer.
   * @returns {boolean}
   */
  function layerIsNode(layerIndex: int): boolean;

  /**
   * Returns the layer as a column, or the empty string if this layer is not a column.
   * @param {int} layerIndex The layer index in the timeline layer.
   * @returns {string}
   */
  function layerToColumn(layerIndex: int): string;

  /**
   * Returns the node associated to the layer, or the empty string if this layer is not a node.
   * @param {int} layerIndex The layer index in the timeline layer.
   * @returns {string}
   */
  function layerToNode(layerIndex: int): string;

  /**
   * Moves a Timeline Frame Marker from it's current frame to the new frame.
   * @param {int} layerIndex The layer index in the timeline layer.
   * @param {int} markerId The id of the marker to move.
   * @param {int} newFrame The frame to move to the marker to.
   * @returns {boolean}
   */
  function moveFrameMarker(
    layerIndex: int,
    markerId: int,
    newFrame: int
  ): boolean;

  /**
   * Returns the number of the selected frame, if only one frame is selected. It will return zero (0) if
   * no frames are selected.
   * @returns {int}
   */
  function numFrameSel(): int;

  /**
   * Returns the number of layers in the timeline.
   * @returns {int}
   */
  function numLayers(): int;

  /**
   * Returns the number of layer selected.
   * @returns {int}
   */
  function numLayerSel(): int;

  /**
   * Returns the layer index of the parent node.
   * @param {int} layerIndex The layer index in the timeline layer.
   * @returns {int}
   */
  function parentNodeIndex(layerIndex: int): int;

  /**
   * Returns true if the selectionIndex points to a column.
   * @param {int} selectionIndex The selection index in the timeline layer.
   * @returns {boolean}
   */
  function selIsColumn(selectionIndex: int): boolean;

  /**
   * Returns true if the selection index is a node.
   * @param {int} selectionIndex The selection index in the timeline layer.
   * @returns {boolean}
   */
  function selIsNode(selectionIndex: int): boolean;

  /**
   * Converts the selection index to a column.
   * @param {int} selectionIndex The selection index in the timeline layer.
   * @returns {string}
   */
  function selToColumn(selectionIndex: int): string;

  /**
   * Converts a selection index to a layer index.
   * @param {int} selectionIndex The selection index in the timeline layer.
   * @returns {int}
   */
  function selToLayer(selectionIndex: int): int;

  /**
   * Converts the selection index to a node.
   * @param {int} selectionIndex The selecton index in the timeline layer.
   * @returns {string}
   */
  function selToNode(selectionIndex: int): string;

  /**
   * Returns true if the display was set to unconnected.
   * @returns {boolean}
   */
  function setDisplayToUnconnected(): boolean;

  /**
   * Returns the first selected frame number.
   * @returns {int}
   */
  // /* Invalid - Duplicate property name */ var firstFrameSel: int;

  /**
   * Returns the number of selected the frame. If only 1 frame is selected.
   * @returns {int}
   */
  // /* Invalid - Duplicate property name */ var numFrameSel: int;

  /**
   * Returns the number of layers in the timeline.
   * @returns {int}
   */
  // /* Invalid - Duplicate property name */ var numLayers: int;

  /**
   * Returns the number of selected layers.
   * @returns {int}
   */
  // /* Invalid - Duplicate property name */ var numLayerSel: int;
}

/**
 * The TimelineMarker JavaScript global object. Remove or edit timeline markers.
 * This interface is used to access the functionalities of the Timeline Markers such as
 * create/remove/edit markers.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classTimelineMarker.html}
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
declare namespace TimelineMarker {
  /**
* Creates a marker.
* @param {QScriptValue} marker - The marker to create. A marker object has the following properties:
Property  Type  Description
frame  int  The number of the frame.
length  int  (Optional) The length of the marker.
color  int or String  (Optional) The colour of the marker. Can be an integer RGBA value or a standard W3C colour keyword name in a string.
name  String  (Optional) Name for the marker
notes  String  (Optional) Notes for the marker
* @returns {QScriptValue}
*/
  function createMarker(marker: {
    /**
     * The number of the frame.
     */
    frame?: int;
    /**
     * (Optional) The length of the marker.
     */
    length?: int;
    /**
     * (Optional) The colour of the marker. Can be an integer RGBA value or a standard W3C colour keyword name in a string.
     */
    color?: int | string;
    /**
     * (Optional) Name for the marker
     */
    name?: string;
    /**
     * (Optional) Notes for the marker
     */
    notes?: string;
  }): QScriptValue;

  /**
   * Delete the marker.
   * @param {QScriptValue} marker - The marker to delete.
   * @returns {boolean}
   */
  function deleteMarker(marker: QScriptValue): boolean;

  /**
   * Returns all the markers in the current Timeline.
   * @returns {QScriptValue}
   */
  function getAllMarkers(): QScriptValue;

  /**
   * Return a markers in the current Timeline that overlap the given frame.
   * @param {int} atFrame
   * @returns {QScriptValue}
   */
  function getFirstMarkerAt(atFrame: int): QScriptValue;

  /**
   * Return all the markers in the current Timeline that overlap the given frame.
   * @param {int} atFrame
   * @returns {QScriptValue}
   */
  function getMarkersAtFrame(atFrame: int): QScriptValue;

  /**
   * Modifies a marker with marker object.
   * @param {QScriptValue} marker - The marker object to replace the marker with.
   * @returns {QScriptValue}
   */
  function setMarker(marker: QScriptValue): QScriptValue;
}

/**
 * The ToolProperties JavaScript global object. Controls the Tool Properties.
 * This object controls most of the tool properties that can be found on the Tool Properties Panel. The
 * Tool Presets view must have been loaded for these function to be available.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classToolProperties.html}
 */
declare namespace ToolProperties {
  /**
   * Gets all of the global properties.
   * A global property is a tool property that is unique to a tool, or is set globally for all tools.
   * @returns {QScriptValue}
   */
  function getAllGlobalProperties(): QScriptValue;

  /**
   * Gets all of the specific properties of the given tool.
   * @param {string} toolName The tool to get the properties of.
   * @returns {QScriptValue}
   */
  function getAllToolSpecificProperties(toolName: string): QScriptValue;

  /**
   * Gets the antialiasing mode property.
   * Possible values are: AntialiasingOff = 0 AntialiasingOn = 1
   * @returns {int}
   */
  function getAntialiasingMode(): int;

  /**
   * Gets the apply to all layers property.
   * @returns {boolean}
   */
  function getApplyToAllLayers(): boolean;

  /**
   * Gets the auto fill inside property of the given tool.
   * @param {string} toolName The tool to get the property of.
   * @returns {boolean}
   */
  function getAutoFillInside(toolName: string): boolean;

  /**
   * Gets the auto flatten mode property.
   * @returns {boolean}
   */
  function getAutoFlattenMode(): boolean;

  /**
   * Gets the auto gap closing mode property.
   * Possible values are: NONE = 0 SMALL = 1 MEDIUM = 2 LARGE = 3
   * @returns {int}
   */
  function getAutoGapClosingMode(): int;

  /**
   * Gets the auto gap line closing property.
   * @returns {boolean}
   */
  function getAutoGapLineClosing(): boolean;

  /**
   * Gets the text auto kerning property.
   * @returns {boolean}
   */
  function getAutoKerning(): boolean;

  /**
   * Gets the bitmap paint alpha property.
   * @returns {int}
   */
  function getBitmapPaintAlpha(): int;

  /**
   * Gets the bitmap paint color tolerance property.
   * @returns {int}
   */
  function getBitmapPaintColorTolerance(): int;

  /**
   * Gets the bitmap paint max overlap property.
   * @returns {int}
   */
  function getBitmapPaintMaxOverlap(): int;

  /**
   * Gets the bitmap paint source art property.
   * Possible values are: BitmapPaintSourceUnderlayArt = 0 BitmapPaintSourceColorArt = 1
   * BitmapPaintSourceLineArt = 2 BitmapPaintSourceOverlayArt = 3 BitmapPaintSourceCurrentArt = 255
   * @returns {int}
   */
  function getBitmapPaintSourceArt(): int;

  /**
   * Gets the bounding box movable property.
   * @returns {boolean}
   */
  function getBoundingBoxMovable(): boolean;

  /**
   * Gets the brush mode property.
   * Possible values are: OverlayBrushMode = 0 RepaintBrushMode = 1
   * @returns {int}
   */
  function getBrushMode(): int;

  /**
   * Gets the change symbol pivot on all frames property.
   * @returns {boolean}
   */
  function getChangeSymbolPivotOnAllFrames(): boolean;

  /**
   * Gets the control point selection mode property.
   * Possible values are: Drawing = 0 ControlPoint = 1
   * @returns {int}
   */
  function getControlPointSelectionMode(): int;

  /**
   * Gets the create color art on brush property.
   * @returns {boolean}
   */
  function getCreateColorArtOnBrush(): boolean;

  /**
   * Gets the enable break gesture property.
   * @returns {boolean}
   */
  function getCutEnableBreakGesture(): boolean;

  /**
   * Gets the enable cutter gesture property.
   * @returns {boolean}
   */
  function getCutEnableCutterGesture(): boolean;

  /**
   * Gets the hide pivot manipulator controls property.
   * @returns {boolean}
   */
  function getDisablePivotManipulatorControl(): boolean;

  /**
   * Gets the draw behind property of the given tool.
   * @param {string} toolName The tool to get the property of.
   * @returns {boolean}
   */
  function getDrawBehind(toolName: string): boolean;

  /**
   * Gets the drawing magnifier property.
   * @returns {boolean}
   */
  function getDrawingMagnifier(): boolean;

  /**
   * Gets the drawing type property.
   * Possible values are: DrawingVector = 0 DrawingBitmap = 1
   * @returns {int}
   */
  function getDrawingType(): int;

  /**
   * Gets the element mode property.
   * Possible values are: SelectedElements = 0 VisibleElements = 1 LinkedElements = 2
   * @returns {int}
   */
  function getElementMode(): int;

  /**
   * Gets the frame mode property.
   * Possible values are: CurrentFrame = 0 AllFrames = 1 OnionSkinFrames = 2
   * @returns {int}
   */
  function getFrameMode(): int;

  /**
   * Gets hide manipulator controls property.
   * @returns {boolean}
   */
  function getHideManipulatorControls(): boolean;

  /**
   * Gets the hide rotate manipulator controls property.
   * @returns {boolean}
   */
  function getHideRotateManipulatorControls(): boolean;

  /**
   * Gets the hide scale manipulator controls property.
   * @returns {boolean}
   */
  function getHideScaleManipulatorControls(): boolean;

  /**
   * Gets the hide translate manipulator controls property.
   * @returns {boolean}
   */
  function getHideTranslateManipulatorControls(): boolean;

  /**
   * Gets the ink intelligent mode property.
   * @returns {boolean}
   */
  function getInkIntelligentMode(): boolean;

  /**
   * Gets the ink join mode property.
   * Possible values are: UNDEFINED_JOIN = 0 ROUND_JOIN = 1 MITER_JOIN = 2 BEVEL_JOIN = 3
   * @returns {int}
   */
  function getInkJoinMode(): int;

  /**
   * Gets the ink raise mode property.
   * @returns {boolean}
   */
  function getInkRaiseMode(): boolean;

  /**
   * Gets the ink selection mode property.
   * @returns {boolean}
   */
  function getInkSelectionMode(): boolean;

  /**
   * Gets the show inkable lines property.
   * @returns {boolean}
   */
  function getInkShowInkableLines(): boolean;

  /**
   * Gets keep proportions property of the given tool.
   * @param {string} toolName The tool to get the property of.
   * @returns {boolean}
   */
  function getKeepProportions(toolName: string): boolean;

  /**
   * Gets the line building mode property.
   * @returns {boolean}
   */
  function getLineBuildingMode(): boolean;

  /**
   * Gets the line mode property of the given tool.
   * @param {string} toolName The tool to get the property of.
   * @returns {boolean}
   */
  function getLineMode(toolName: string): boolean;

  /**
   * Gets the line pushing mode property.
   * @returns {boolean}
   */
  function getLinePushingMode(): boolean;

  /**
   * Returns the line tool mode. 1: normal, 2: Quadratic, 3: Cubic.
   * @returns {int}
   */
  function getLineToolMode(): int;

  /**
   * Gets the lock color property of the given tool.
   * @param {string} toolName The tool to get the property of.
   * @returns {boolean}
   */
  function getLockColor(toolName: string): boolean;

  /**
   * Gets the lock pen style width property of the given tool.
   * @param {string} toolName The tool to get the property of.
   * @returns {boolean}
   */
  function getLockPenStyleWidth(toolName: string): boolean;

  /**
   * Gets the merge with top layer property.
   * @returns {boolean}
   */
  function getMergeWithTopLayer(): boolean;

  /**
   * Gets the paint destroy texture property.
   * @returns {boolean}
   */
  function getPaintDestroyTexture(): boolean;

  /**
   * Gets the paint element mode property.
   * Possible values are: SelectedElements = 0 VisibleElements = 1 LinkedElements = 2
   * @returns {int}
   */
  function getPaintElementMode(): int;

  /**
   * Gets the paint mode property.
   * Possible values are: PAINT = 0 UNPAINT = 1 REPAINT = 2 PAINT_UNPAINTED = 3
   * @returns {int}
   */
  function getPaintMode(): int;

  /**
   * Gets the pencil tip mode property of the given tool.
   * @param {string} toolName The tool to get the property of.
   * @returns {int}
   */
  function getPencilTipMode(toolName: string): int;

  /**
   * Gets the permanent selection mode property.
   * @returns {boolean}
   */
  function getPermanentSelectionMode(): boolean;

  /**
   * Gets the perspective mode property.
   * Possible values are: PerspectiveMode = 0 LatticeMode = 1
   * @returns {int}
   */
  function getPerspectiveMode(): int;

  /**
   * Gets the prevent drawing property.
   * @returns {boolean}
   */
  function getPreventDrawing(): boolean;

  /**
   * Gets the prevent scene planning property.
   * @returns {boolean}
   */
  function getPreventScenePlanning(): boolean;

  /**
   * Gets the respect sticky color property.
   * @returns {boolean}
   */
  function getRespectStickyColor(): boolean;

  /**
   * Gets the retrace mode property.
   * @returns {boolean}
   */
  function getRetraceMode(): boolean;

  /**
   * Gets the maximum retrace noise property.
   * @returns {double}
   */
  function getRetraceNoiseMax(): double;

  /**
   * Gets the maximum retrace offset property.
   * @returns {double}
   */
  function getRetraceOffsetMax(): double;

  /**
   * Gets the retrace probability property.
   * @returns {double}
   */
  function getRetraceProbability(): double;

  /**
   * Gets the maximum retrace tilt property.
   * @returns {double}
   */
  function getRetraceTiltMax(): double;

  /**
   * Gets the select after paint or ink property.
   * @returns {boolean}
   */
  function getSelectAfterPaintOrInk(): boolean;

  /**
   * Gets the select by color property.
   * @returns {boolean}
   */
  function getSelectByColor(): boolean;

  /**
   * Gets the selection is lasso property.
   * Possible values are: Lasso mode = true Markee mode = false
   * @returns {boolean}
   */
  function getSelectionIsLasso(): boolean;

  /**
   * Gets the selection mode property.
   * Possible values are: NORMAL_SELECTION = 0 ELEMENT_SELECTION = 1 PEG_SELECTION = 2 TOP_MOST_SELECTION
   * = 3
   * @returns {int}
   */
  function getSelectionMode(): int;

  /**
   * Gets the show advanced controls property.
   * @returns {boolean}
   */
  function getShowAdvancedControls(): boolean;

  /**
   * Gets the show all conotur editing controls property.
   * @returns {boolean}
   */
  function getShowAllContourEditingControls(): boolean;

  /**
   * Gets the show other drawing thumbnail property.
   * @returns {boolean}
   */
  function getShowOtherDrawingThumbnail(): boolean;

  /**
   * Gets the smooth pen style center smooth property.
   * @returns {double}
   */
  function getSmoothPenStyleCenterSmooth(): double;

  /**
   * Gets the smooth pen style maximum property.
   * @returns {double}
   */
  function getSmoothPenStyleMax(): double;

  /**
   * Gets the smooth pen style minimum property.
   * @returns {double}
   */
  function getSmoothPenStyleMin(): double;

  /**
   * Gets the smooth pen style minimum ratio property.
   * @returns {double}
   */
  function getSmoothPenStyleMinRatio(): double;

  /**
   * Gets the smooth selector property.
   * Possible values are: SMOOTH_BRUSH = 0 SMOOTH_MARQUEE = 1 SMOOTH_LASSO = 2
   * @returns {int}
   */
  function getSmoothSelector(): int;

  /**
   * Gets the smooth show points property.
   * @returns {boolean}
   */
  function getSmoothShowPoints(): boolean;

  /**
   * Gets the snap mode property of the given tool.
   * @param {string} toolName The tool to get the property of.
   * @returns {boolean}
   */
  function getSnapMode(toolName: string): boolean;

  /**
   * Gets the snap to 3D mode property.
   * @returns {boolean}
   */
  function getSnapTo3DMode(): boolean;

  /**
   * Gets the snap to bounding boxes property.
   * @returns {boolean}
   */
  function getSnapToBoundingBoxes(): boolean;

  /**
   * Gets the snap to contour property.
   * @returns {boolean}
   */
  function getSnapToContour(): boolean;

  /**
   * Gets the snap to grid property.
   * @returns {boolean}
   */
  function getSnapToGrid(): boolean;

  /**
   * Gets the stroke smooth value property.
   * @returns {double}
   */
  function getStrokeSmoothValue(): double;

  /**
   * Gets the text alignment property.
   * @returns {int}
   */
  function getTextAlignment(): int;

  /**
   * Gets the text font property.
   * @returns {int}
   */
  function getTextFont(): int;

  /**
   * Gets the text indent property.
   * @returns {int}
   */
  function getTextIndent(): int;

  /**
   * Gets the text kerning property.
   * @returns {int}
   */
  function getTextKerning(): int;

  /**
   * Gets the text line space property.
   * @returns {int}
   */
  function getTextLineSpace(): int;

  /**
   * Gets the text size property.
   * @returns {int}
   */
  function getTextSize(): int;

  /**
   * Gets the text style property.
   * @returns {int}
   */
  function getTextStyle(): int;

  /**
   * Gets the thickness adjust mode property.
   * @returns {boolean}
   */
  function getThicknessAdjustMode(): boolean;

  /**
   * @param {string} toolName
   * @returns {QScriptValue}
   */
  function getToolIdFromName(toolName: string): QScriptValue;

  /**
   * Gets the tool resolution height property.
   * @returns {int}
   */
  function getToolResolutionHeight(): int;

  /**
   * Gets the tool resolution width property.
   * @returns {int}
   */
  function getToolResolutionWidth(): int;

  /**
   * Gets the trim extra lines property of the given tool.
   * @param {string} toolName The tool to get the property of.
   * @returns {boolean}
   */
  function getTrimExtraLines(toolName: string): boolean;

  /**
   * Gets the trim extra lines match property of the given tool.
   * @param {string} toolName The tool to get the property of.
   * @returns {boolean}
   */
  function getTrimExtraLinesMatch(toolName: string): boolean;

  /**
   * Gets the zoom in mode property.
   * @returns {boolean}
   */
  function getZoomInMode(): boolean;

  /**
   * Sets the specific properties of the given tool.
   * @param {string} toolName The tool to set the properties of.
   * @param {QScriptValue} newValues An object storing the new values of all or some of the specified tool's properties.
   * @returns {void}
   */
  function setAllToolSpecificProperties(
    toolName: string,
    newValues: QScriptValue
  ): void;

  /**
   * Sets the antialiasing mode property.
   * Possible values are: AntialiasingOff = 0 AntialiasingOn = 1
   * @param {int} mode The value to set the antialiasing mode to.
   * @returns {void}
   */
  function setAntialiasingMode(mode: int): void;

  /**
   * Sets the Apply to Line Art and Colour Art checkbox state to b; in the Select Tool Options.
   * @param {boolean} b When true sets the Apply to Line Art and Colour Art checkbox state to checked. When false, unchecks it.
   * @returns {void}
   */
  function setApplyAllArts(b: boolean): void;

  /**
   * Sets the apply all drawing mode to b.
   * @param {boolean} b When true enables the apply all drawing mode.
   * @returns {void}
   */
  function setApplyAllDrawings(b: boolean): void;

  /**
   * Sets the apply all visible drawing mode to b.
   * @param {boolean} b When true enables the apply all visible drawing mode.
   * @returns {void}
   */
  function setApplyAllVisibleDrawings(b: boolean): void;

  /**
   * Sets the apply to all layers property.
   * @param {boolean} b The new apply to all layers flag.
   * @returns {void}
   */
  function setApplyToAllLayers(b: boolean): void;

  /**
   * Sets the auto create colour art mode of the current tool to b if applicable.
   * @param {boolean} b When true enables the auto create colour art mode of the current tool. When false disables it.
   * @returns {void}
   */
  function setAutoCreateColourArt(b: boolean): void;

  /**
   * Sets the auto fill mode of Rectangle and Ellipse tools to b.
   * @param {boolean} b When true enables the auto fill mode of the Rectangle and Ellipse tools.
   * @returns {void}
   */
  function setAutoFillInside(b: boolean): void;

  /**
   * Sets the auto fill inside property of the given tool.
   * @param {string} toolName The tool to set the property of.
   * @param {boolean} b The new auto fill inside flag.
   * @returns {void}
   */
  function setAutoFillInside(toolName: string, b: boolean): void;

  /**
   * Sets the auto flatten mode if applicable.
   * @param {boolean} b When true enables the auto flatten mode if applicable. When false disables it.
   * @returns {void}
   */
  function setAutoFlattenMode(b: boolean): void;

  /**
   * Sets the auto gap closing mode to m. Mode can be 0, 1, 2 or 3, which corresponds to No Gap, Small,
   * Medium and Large.
   * @param {int} m Sets the auto gap closing mode to 0, 1, 2 or 3, which corresponds to No Gap, Small, Medium and Large.
   * @returns {void}
   */
  function setAutogapClosingMode(m: int): void;

  /**
   * Sets the auto gap line closing property.
   * @param {boolean} b The new auto gap line closing flag.
   * @returns {void}
   */
  function setAutoGapLineClosing(b: boolean): void;

  /**
   * Sets the text auto kerning property.
   * @param {boolean} b The new text auto kerning flag.
   * @returns {void}
   */
  function setAutoKerning(b: boolean): void;

  /**
   * Sets the bitmap paint alpha property.
   * @param {int} value The new bitmap paint alpha value.
   * @returns {void}
   */
  function setBitmapPaintAlpha(value: int): void;

  /**
   * Sets the bitmap paint color tolerance property.
   * @param {int} value The new bitmap paint color tolerance value.
   * @returns {void}
   */
  function setBitmapPaintColorTolerance(value: int): void;

  /**
   * Sets the bitmap paint max overlap property.
   * @param {int} value The new bitmap paint max overlap value.
   * @returns {void}
   */
  function setBitmapPaintMaxOverlap(value: int): void;

  /**
   * Sets the bitmap paint source art property.
   * Possible values are: BitmapPaintSourceUnderlayArt = 0 BitmapPaintSourceColorArt = 1
   * BitmapPaintSourceLineArt = 2 BitmapPaintSourceOverlayArt = 3 BitmapPaintSourceCurrentArt = 255
   * @param {int} mode The mode to set the bitmap paint source art to.
   * @returns {void}
   */
  function setBitmapPaintSourceArt(mode: int): void;

  /**
   * Sets the bounding box movable property.
   * @param {boolean} b The new bounding box movable flag.
   * @returns {void}
   */
  function setBoundingBoxMovable(b: boolean): void;

  /**
   * Instructs the ink tool to bring inked lines on top after inking if b is true.
   * @param {boolean} b When true instructs the ink tool to bring inked lines on top after inking.
   * @returns {void}
   */
  function setBringInkedLinesOnTop(b: boolean): void;

  /**
   * Sets the brush mode property.
   * Possible values are: OverlayBrushMode = 0 RepaintBrushMode = 1
   * @param {int} mode The value to set the stencil brush mode to.
   * @returns {void}
   */
  function setBrushMode(mode: int): void;

  /**
   * Sets the change symbol pivot on all frames property.
   * @param {boolean} b The new change symbol pivot on all frames flag.
   * @returns {void}
   */
  function setChangeSymbolPivotOnAllFrames(b: boolean): void;

  /**
   * Sets the control point selection mode property.
   * Possible values are: Drawing = 0 ControlPoint = 1
   * @param {int} mode The value to set the control point selection mode to.
   * @returns {void}
   */
  function setControlPointSelectionMode(mode: int): void;

  /**
   * Sets create color art on brush property.
   * @param {boolean} b The create color art on brush flag.
   * @returns {void}
   */
  function setCreateColorArtOnBrush(b: boolean): void;

  /**
   * Sets the enable break gesture property.
   * @param {boolean} b The new enable break gesture flag.
   * @returns {void}
   */
  function setCutEnableBreakGesture(b: boolean): void;

  /**
   * Sets the enable cutter gesture property.
   * @param {boolean} b The new enable cutter gesture flag.
   * @returns {void}
   */
  function setCutEnableCutterGesture(b: boolean): void;

  /**
   * Disables the pivot Transform tool manipulator if b is true. A pivot control will still be displayed
   * but will not be manipulatable.
   * @param {boolean} b When true disables the pivot Transform tool manipulator.
   * @returns {void}
   */
  function setDisablePivotControl(b: boolean): void;

  /**
   * Sets the hide pivot manipulator controls property.
   * @param {boolean} b The new hide pivot manipulator controls flag.
   * @returns {void}
   */
  function setDisablePivotManipulatorControl(b: boolean): void;

  /**
   * Sets the draw behind property of the given tool.
   * @param {string} toolName The tool to set the property of.
   * @param {boolean} b The new draw behind flag.
   * @returns {void}
   */
  function setDrawBehind(toolName: string, b: boolean): void;

  /**
   * Toggles the Draw Behind mode of the Brush tool.
   * @param {boolean} b When true enables the Draw Behind mode of the Brush tool. When false, disables it.
   * @returns {void}
   */
  function setDrawBehindMode(b: boolean): void;

  /**
   * Sets the drawing magnifier property.
   * @param {boolean} b The new drawing magnifier flag.
   * @returns {void}
   */
  function setDrawingMagnifier(b: boolean): void;

  /**
   * Sets the magnifier mode.
   * @param {boolean} b When true enables the magnifier mode. When false disables it.
   * @returns {void}
   */
  function setDrawingMagnifierMode(b: boolean): void;

  /**
   * Sets the drawing type property.
   * Possible values are: DrawingVector = 0 DrawingBitmap = 1
   * @param {int} mode The value to set the drawing type to.
   * @returns {void}
   */
  function setDrawingType(mode: int): void;

  /**
   * Sets the element mode property.
   * Possible values are: SelectedElements = 0 VisibleElements = 1 LinkedElements = 2
   * @param {int} mode The value to set the element mode to.
   * @returns {void}
   */
  function setElementMode(mode: int): void;

  /**
   * Sets the frame mode property.
   * Possible values are: CurrentFrame = 0 AllFrames = 1 OnionSkinFrames = 2
   * @param {int} mode The value to set the frame mode to.
   * @returns {void}
   */
  function setFrameMode(mode: int): void;

  /**
   * Set the cutter's gesture mode to b.
   * @param {boolean} b When true enables the cutter's gesture mode.
   * @returns {void}
   */
  function setGestureCutter(b: boolean): void;

  /**
   * Sets the global properties found in the parameter.
   * A global property is a tool property that is unique to a tool, or is set globally for all tools.
   * @param {QScriptValue} newValues An object storing all or some of the global properties to set new values of.
   * @returns {void}
   */
  function setGlobalProperties(newValues: QScriptValue): void;

  /**
   * Sets the hide manipulator controls property.
   * @param {boolean} b The new hide manipulator controls flag.
   * @returns {void}
   */
  function setHideManipulatorControls(b: boolean): void;

  /**
   * Sets the hide rotate manipulator controls property.
   * @param {boolean} b The new hide rotate manipulator controls flag.
   * @returns {void}
   */
  function setHideRotateManipulatorControls(b: boolean): void;

  /**
   * Sets the hide scale manipulator controls property.
   * @param {boolean} b The new hide scale manipulator controls flag.
   * @returns {void}
   */
  function setHideScaleManipulatorControls(b: boolean): void;

  /**
   * Sets the hide translate manipulator controls property.
   * @param {boolean} b The new hide translate manipulator controls flag.
   * @returns {void}
   */
  function setHideTranslateManipulatorControls(b: boolean): void;

  /**
   * Sets the ink intelligent mode property.
   * @param {boolean} b The new ink intelligent mode.
   * @returns {void}
   */
  function setInkIntelligentMode(b: boolean): void;

  /**
   * Sets the join mode of the inked lines to be joinType. Join type can be one of: "ROUND_JOIN",
   * "MITER_JOIN" or "BEVEL_JOIN".
   * @param {string} joinType Sets the join mode of the inked lines to be joinType.
   * @returns {void}
   */
  function setInkJoinMode(joinType: string): void;

  /**
   * Sets the ink join mode property.
   * Possible values are: UNDEFINED_JOIN = 0 ROUND_JOIN = 1 MITER_JOIN = 2 BEVEL_JOIN = 3
   * @param {int} mode The value to set the ink join mode to.
   * @returns {void}
   */
  function setInkJoinMode(mode: int): void;

  /**
   * Instructs the ink tool to select inked lines after inking if b is true.
   * @param {boolean} b When true instructs the ink tool to select inked lines after inking.
   * @returns {void}
   */
  function setInkLineSelectionMode(b: boolean): void;

  /**
   * Sets the ink raise mode property.
   * @param {boolean} b The new ink raise mode.
   * @returns {void}
   */
  function setInkRaiseMode(b: boolean): void;

  /**
   * Sets the ink selection mode property.
   * @param {boolean} b The new ink selection mode.
   * @returns {void}
   */
  function setInkSelectionMode(b: boolean): void;

  /**
   * Sets the show inkable lines property.
   * @param {boolean} b The new show inkable lines flag.
   * @returns {void}
   */
  function setInkShowInkableLines(b: boolean): void;

  /**
   * Sets the keep proportions property of the given tool.
   * @param {string} toolName The tool to set the property of.
   * @param {boolean} b The new keep proportions flag.
   * @returns {void}
   */
  function setKeepProportions(toolName: string, b: boolean): void;

  /**
   * Toggles the auto gap closing functionality for the line and pencil tools. When the auto gap
   * functionality is on, the line or pencil tool tries to add a stroke line to cover the gap between the
   * newly created line and any existing line.
   * @param {boolean} b When true enables the auto gap closing functionality for the Line and Pencil tools.
   * @returns {void}
   */
  function setLineAutoGapClosing(b: boolean): void;

  /**
   * Sets the line building mode property.
   * @param {boolean} b The new line building mode.
   * @returns {void}
   */
  function setLineBuildingMode(b: boolean): void;

  /**
   * Sets the line mode property of the given tool.
   * @param {string} toolName The tool to set the property of.
   * @param {boolean} b The new line mode flag.
   * @returns {void}
   */
  function setLineMode(toolName: string, b: boolean): void;

  /**
   * Sets the line pushing mode property.
   * @param {boolean} b The new line pushing mode.
   * @returns {void}
   */
  function setLinePushingMode(b: boolean): void;

  /**
   * Sets the line tool mode. 1: normal, 2: Quadratic, 3: Cubic.
   * @returns {void}
   */
  function setLineToolMode(): void;

  /**
   * Shortcut for setLineToolMode(3)
   * @returns {void}
   */
  function setLineToolModeCubic(): void;

  /**
   * Shortcut for setLineToolMode(1)
   * @returns {void}
   */
  function setLineToolModeNormal(): void;

  /**
   * Shortcut for setLineToolMode(2)
   * @returns {void}
   */
  function setLineToolModeQuadratic(): void;

  /**
   * Sets the lock color property of the given tool.
   * @param {string} toolName The tool to set the property of.
   * @param {boolean} b The new lock color flag.
   * @returns {void}
   */
  function setLockColor(toolName: string, b: boolean): void;

  /**
   * Sets the lock pen style width property of the given tool.
   * @param {string} toolName The tool to set the property of.
   * @param {boolean} b The new lock pen style width flag.
   * @returns {void}
   */
  function setLockPenStyleWidth(toolName: string, b: boolean): void;

  /**
   * Sets the select tool mode selection to Lasso or Marquee. If b is true, the mode will be set to
   * Marquee.
   * @param {boolean} b When true sets the selection mode to Marquee. When false sets the selection mode to Lasso.
   * @returns {void}
   */
  function setMarkeeMode(b: boolean): void;

  /**
   * Sets the merge with top layer property.
   * @param {boolean} b The new merge with top layer flag.
   * @returns {void}
   */
  function setMergeWithTopLayer(b: boolean): void;

  /**
   * Set the cutter's gesture break mode to b.
   * @param {boolean} b When true enables the cutter's gesture break mode.
   * @returns {void}
   */
  function setMouseGestureBreakeMode(b: boolean): void;

  /**
   * Instruct the paint tool to remove the opacity texture if b is true.
   * @param {boolean} b When true enables the remove texture when painting mode is turned on.
   * @returns {void}
   */
  function setPaintAndRemoveTextureMode(b: boolean): void;

  /**
   * Sets the paint destroy texture property.
   * @param {boolean} b The new paint destroy texture flag.
   * @returns {void}
   */
  function setPaintDestroyTexture(b: boolean): void;

  /**
   * Sets paint element mode property.
   * Possible values are: SelectedElements = 0 VisibleElements = 1 LinkedElements = 2
   * @param {int} mode The value to set the paint element mode to.
   * @returns {void}
   */
  function setPaintElementMode(mode: int): void;

  /**
   * Sets the paint mode property.
   * Possible values are: PAINT = 0 UNPAINT = 1 REPAINT = 2 PAINT_UNPAINTED = 3
   * @param {int} mode The value to set the paint mode to.
   * @returns {void}
   */
  function setPaintMode(mode: int): void;

  /**
   * If b is true, the paint tool will select the newly painted zone after painting. This can be useful
   * if you want to edit a gradient on multiple zones after painting.
   * @param {boolean} b When true the paint tool will select the newly painted zone after painting.
   * @returns {void}
   */
  function setPaintToolShouldSelectPaintedZonesAfterPainting(b: boolean): void;

  /**
   * Sets the selection mode of the transform tool to peg mode if b is true.
   * @param {boolean} b When true enables the selection mode of the transform tool to peg mode.
   * @returns {void}
   */
  function setPegSelectionMode(b: boolean): void;

  /**
   * Sets the pencil tip shape used by the eraser, cutter, and ink tools whenever an existing pencil line
   * gets split by the tool.
   * @param {string} pencilTip Can have one of the following values: "ROUND_TIP", "FLAT_TIP" or "BEVEL_TIP".
   * @returns {void}
   */
  function setPencilTipMode(pencilTip: string): void;

  /**
   * Sets the pencil tip mode property of the given tool.
   * @param {string} toolName The tool to set the property of.
   * @param {int} mode The new pencil tip mode.
   * @returns {void}
   */
  function setPencilTipMode(toolName: string, mode: int): void;

  /**
   * Toggles the permanent selection mode.
   * @param {boolean} b When true enables the permanent selection mode. When false disables it.
   * @returns {void}
   */
  function setPermanentSelectionMode(b: boolean): void;

  /**
   * Sets the perspective mode property.
   * Possible values are: PerspectiveMode = 0 LatticeMode = 1
   * @param {int} mode The value to set the perspective mode to.
   * @returns {void}
   */
  function setPerspectiveMode(mode: int): void;

  /**
   * Sets the prevent drawing property.
   * @param {boolean} b The new prevent drawing flag.
   * @returns {void}
   */
  function setPreventDrawing(b: boolean): void;

  /**
   * Sets the prevent scene planning property.
   * @param {boolean} b The new prevent drawing flag.
   * @returns {void}
   */
  function setPreventScenePlanning(b: boolean): void;

  /**
   * Sets the Respect Protected Colour mode if applicable.
   * @param {boolean} b When true enables the Respect Protected Colour mode. When false disables it.
   * @returns {void}
   */
  function setRespectProtectedColourMode(b: boolean): void;

  /**
   * Sets the retrace mode property.
   * @param {boolean} b The new retrace mode.
   * @returns {void}
   */
  function setRetraceMode(b: boolean): void;

  /**
   * Sets the maximum retrace noise property.
   * @param {double} max The new maximum retrace noise value.
   * @returns {void}
   */
  function setRetraceNoiseMax(max: double): void;

  /**
   * Sets the maximum retrace offset property.
   * @param {double} max The new maximum retrace offset value.
   * @returns {void}
   */
  function setRetraceOffsetMax(max: double): void;

  /**
   * Sets the retrace probability property.
   * @param {double} probability The new retrace probability value.
   * @returns {void}
   */
  function setRetraceProbability(probability: double): void;

  /**
   * Sets the maximum retrace tilt property.
   * @param {double} max The new maximum retrace tilt value.
   * @returns {void}
   */
  function setRetraceTiltMax(max: double): void;

  /**
   * Sets the select after paint or ink property.
   * @param {boolean} b The new select after paint or ink flag.
   * @returns {void}
   */
  function setSelectAfterPaintOrInk(b: boolean): void;

  /**
   * Sets the select by color property.
   * @param {boolean} b The new select by color flag.
   * @returns {void}
   */
  function setSelectByColor(b: boolean): void;

  /**
   * Sets the select by colour mode of the Select tool .
   * @param {boolean} b When true enables the select by color mode of the Select tool. When false disables it.
   * @returns {void}
   */
  function setSelectByColourMode(b: boolean): void;

  /**
   * Sets the selection is lasso property.
   * Possible values are: Lasso mode = true Markee mode = false
   * @param {boolean} b True to set the selection mode to lasso, false for markee.
   * @returns {void}
   */
  function setSelectionIsLasso(b: boolean): void;

  /**
   * Sets the selection mode property.
   * Possible values are: NORMAL_SELECTION = 0 ELEMENT_SELECTION = 1 PEG_SELECTION = 2 TOP_MOST_SELECTION
   * = 3
   * @param {int} mode The value to set the selection mode to.
   * @returns {void}
   */
  function setSelectionMode(mode: int): void;

  /**
   * Sets the show advanced controls property.
   * @param {boolean} b The new show advanced controls flag.
   * @returns {void}
   */
  function setShowAdvancedControls(b: boolean): void;

  /**
   * Toggles whether contour editor shows all tool controls or not.
   * @param {boolean} b When true contour editer shows all tool controls. When false hides them.
   * @returns {void}
   */
  function setShowHideAllContourEditingControls(b: boolean): void;

  /**
   * Hides the transform tool manipulator if b is true.
   * @param {boolean} b When true hides the transform tool manipulator.
   * @returns {void}
   */
  function setShowHideManipulatorControls(b: boolean): void;

  /**
   * Shows the inkable lines if b is true.
   * @param {boolean} b When true shows the inkable lines.
   * @returns {void}
   */
  function setShowInkableLines(b: boolean): void;

  /**
   * Sets the show other drawing thumbnail property.
   * @param {boolean} b The new show other drawing thumbnail flag.
   * @returns {void}
   */
  function setShowOtherDrawingThumbnail(b: boolean): void;

  /**
   * Sets the smart ink line connection mode to b.
   * @param {boolean} b When true enables the smart ink line connection mode.
   * @returns {void}
   */
  function setSmartInkLineConnectionMode(b: boolean): void;

  /**
   * Sets the smooth pen style center smooth property.
   * @param {double} value The new smooth pen style center smooth value.
   * @returns {void}
   */
  function setSmoothPenStyleCenterSmooth(value: double): void;

  /**
   * Sets the smooth pen style maximum property.
   * @param {double} value The new smooth pen style maximum value.
   * @returns {void}
   */
  function setSmoothPenStyleMax(value: double): void;

  /**
   * Sets the smooth pen style minimum property.
   * @param {double} value The new smooth pen style minimum value.
   * @returns {void}
   */
  function setSmoothPenStyleMin(value: double): void;

  /**
   * Sets the smooth pen style minimum ratio property.
   * @param {double} value The new smooth pen style minimum ratio value.
   * @returns {void}
   */
  function setSmoothPenStyleMinRatio(value: double): void;

  /**
   * Sets the smooth selector property.
   * Possible values are: SMOOTH_BRUSH = 0 SMOOTH_MARQUEE = 1 SMOOTH_LASSO = 2
   * @param {int} mode The value to set the smooth selector mode to.
   * @returns {void}
   */
  function setSmoothSelector(mode: int): void;

  /**
   * Sets the smooth show points property.
   * @param {boolean} b The new smooth show points flag.
   * @returns {void}
   */
  function setSmoothShowPoints(b: boolean): void;

  /**
   * Sets the snap mode property of the given tool.
   * @param {string} toolName The tool to set the property of.
   * @param {boolean} b The new snap mode flag.
   * @returns {void}
   */
  function setSnapMode(toolName: string, b: boolean): void;

  /**
   * Sets the snapping mode for the contour, align and grid mode all to the modes specified in argument.
   * @param {boolean} contour When true enables the snapping mode for the contour mode. When false disables it.
   * @param {boolean} align When true enables the snapping mode for the align mode. When false disables it.
   * @param {boolean} grid When true enables the snapping mode for the grid mode. When false disables it.
   * @returns {void}
   */
  function setSnapping(contour: boolean, align: boolean, grid: boolean): void;

  /**
   * Sets the snap to 3D mode property.
   * @param {boolean} b The new snap to 3D mode flag.
   * @returns {void}
   */
  function setSnapTo3DMode(b: boolean): void;

  /**
   * Sets the snap to bounding boxes property.
   * @param {boolean} b The new snap to bounding boxes flag.
   * @returns {void}
   */
  function setSnapToBoundingBoxes(b: boolean): void;

  /**
   * Sets the snap to contour property.
   * @param {boolean} b The new snap to contour flag.
   * @returns {void}
   */
  function setSnapToContour(b: boolean): void;

  /**
   * Sets the snap to grid property.
   * @param {boolean} b The new snap to grid flag.
   * @returns {void}
   */
  function setSnapToGrid(b: boolean): void;

  /**
   * Sets the stroke smooth value property.
   * @param {double} d The new stroke smooth value.
   * @returns {void}
   */
  function setStrokeSmoothValue(d: double): void;

  /**
   * Sets the text alignment property.
   * @param {int} alignment The new text alignment.
   * @returns {void}
   */
  function setTextAlignment(alignment: int): void;

  /**
   * Sets the text font property.
   * @param {int} font The new text font.
   * @returns {void}
   */
  function setTextFont(font: int): void;

  /**
   * Sets the text indent property.
   * @param {int} indent The new text indent value.
   * @returns {void}
   */
  function setTextIndent(indent: int): void;

  /**
   * Sets the text kerning property.
   * @param {int} kerning The new text kerning.
   * @returns {void}
   */
  function setTextKerning(kerning: int): void;

  /**
   * Sets the text line space property.
   * @param {int} lineSpace The new text line space value.
   * @returns {void}
   */
  function setTextLineSpace(lineSpace: int): void;

  /**
   * Sets the text size property.
   * @param {int} size The new text size.
   * @returns {void}
   */
  function setTextSize(size: int): void;

  /**
   * Sets the text style property.
   * @param {int} style The new text style.
   * @returns {void}
   */
  function setTextStyle(style: int): void;

  /**
   * Sets the thickness adjust mode property.
   * @param {boolean} b The new thickness adjust mode.
   * @returns {void}
   */
  function setThicknessAdjustMode(b: boolean): void;

  /**
   * Sets the tool resolution height property.
   * @param {int} height The new tool resolution height.
   * @returns {void}
   */
  function setToolResolutionHeight(height: int): void;

  /**
   * Sets the tool resolution width property.
   * @param {int} width The new tool resolution width.
   * @returns {void}
   */
  function setToolResolutionWidth(width: int): void;

  /**
   * Sets the align and grid snapping modes of the transform tool.
   * @param {boolean} align When true enables the align snapping mode of the transform tool. When false disables it.
   * @param {boolean} grid When true enables the grid snapping mode of the transform tool. When false disables it.
   * @returns {void}
   */
  function setTransformToolSnapping(align: boolean, grid: boolean): void;

  /**
   * Sets the trim extra lines property of the given tool.
   * @param {string} toolName The tool to set the property of.
   * @param {boolean} b The new trim extra lines flag.
   * @returns {void}
   */
  function setTrimExtraLines(toolName: string, b: boolean): void;

  /**
   * Sets the trim extra lines match property of the given tool.
   * @param {string} toolName The tool to set the property of.
   * @param {boolean} b The new trim extra lines match flag.
   * @returns {void}
   */
  function setTrimExtraLinesMatch(toolName: string, b: boolean): void;

  /**
   * Instruct the paint tool to use the gradient/texture matrix stored in the tool if b is true.
   * @param {boolean} b When true the paint tool will use the gradient/texture matrix stores in the tool.
   * @returns {void}
   */
  function setUsedStoredColourGradientMode(b: boolean): void;

  /**
   * Sets the zoom in mode property.
   * @param {boolean} b The new zoom in mode flag.
   * @returns {void}
   */
  function setZoomInMode(b: boolean): void;

  /**
   * Gets all of the available tools.
   * @returns {QScriptValue}
   */
  function toolNames(): QScriptValue;
}

/**
 * The UiLoader JavaScript global object allows the user to load pre-defined Qt forms that define Qt
 * widgets (generally built within Qt Designer).
 * This allows users to build complex dialogs, using all of the pre-defined widgets that Qt4.8
 * supports. See Qt documentation for further details: http://qt-project.org/doc/qt-4.8.
 * This is an example of how to build a dialog using a predefined Qt designer file ( *.ui ) All widgets
 * may be addressed directly, but through nested names. That is, if you have a checkbox inside a tab
 * inside a dialog, you should address the widget as dialog.tab.checkbox Once you've figured out its
 * name, you are allowed to modify all of its properties, plus you have access to both its signals and
 * slots ( as well as its inherited properties, signals and slots )
 * This example and the predefined form are part of the installation, so it can be run in the software
 * to see what it does. Look for lightTableExampleUsingPredefinedUI. It will display a non-modal widget
 * that allows the adjustment of the light table settings in the camera view. Please refer to Qt
 * documentation for the list of accessible widget properties.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classUiloader.html}
 * @example
 * function lightTableExampleUsingPredefineUI() {
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
 * }
 */
declare namespace Uiloader {
  /**
   * Takes a DPI-independent pixel dimension (100% DPI scaling on an HD screen) and scales it to the
   * current DPI setting.
   * @param {QScriptContext} context
   * @param {QScriptEngine} engine
   * @returns {QScriptValue}
   */
  function dpiScale(
    context: QScriptContext,
    engine: QScriptEngine
  ): QScriptValue;

  /**
   * Equivalent of QAppliction::exec for those scripts that wish to run their loaded UI as a separate
   * app.
   * @param {QScriptContext} context
   * @param {QScriptEngine} engine
   * @returns {QScriptValue}
   */
  function exec(context: QScriptContext, engine: QScriptEngine): QScriptValue;

  /**
   * Takes a path to a predefined Qt widget form and loads that form.
   * @param {QScriptContext} context
   * @param {QScriptEngine} engine
   * @returns {QScriptValue}
   */
  function load(context: QScriptContext, engine: QScriptEngine): QScriptValue;

  /**
   * @param {QScriptContext} context
   * @param {QScriptEngine} engine
   * @returns {QScriptValue}
   */
  function setSvgIcon(
    context: QScriptContext,
    engine: QScriptEngine
  ): QScriptValue;
}

/**
 * The view JavaScript global object. Provides information about the contents of selected View windows.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classview.html}
 * @example
 * function viewScript() {
 *     var myView = view.currentView();
 *     MessageLog.trace(view.type(myView));
 * }
 */
declare namespace view {
  /**
   * Returns the name of the column for the currently displayed function in the Function View.
   * @param {string} viewName The current view value, as returned by the currentView function.
   * @returns {string}
   */
  function column(viewName: string): string;

  /**
   * Returns the drawing tool manager.
   * If no argument is passed, returns the drawing tool manager from the current view.
   * @param {string} [viewName=""] The name of the view to get the drawing tool manager from.
   * @returns {QObject}
   */
  function currentToolManager(viewName?: string): QObject;

  /**
   * Returns a unique identifier for the current, active view.
   * @returns {string}
   */
  function currentView(): string;

  /**
   * Returns the name of the current Group Node in the active Network View.
   * @param {string} viewName The current view value, as returned by the currentView function.
   * @returns {string}
   */
  function group(viewName: string): string;

  /**
   * Forces a refresh of the drawing and scene planning views.
   * @returns {void}
   */
  function refreshViews(): void;

  /**
   * Returns a string that indicates what type of View the currentView is.
   * @param {string} viewName The current view value, as returned by the currentView function.
   * @returns {ColumnType}
   */
  function type(viewName: string): ColumnType;

  /**
   * Returns a list of available views of the given type.
   * @param {string} [viewType=""] The type of view to get the list of available views for.
   * @returns {StringList}
   */
  function viewList(viewType?: string): StringList;

  /**
   * Returns the position of the top left corner of the given view.
   * The point (0,0) is the top left corner of the main display.
   * @param {string} viewName The name of the view to get the position of.
   * @returns {QPoint}
   */
  function viewPosition(viewName: string): QPoint;
}

/**
 * The waypoint JavaScript global object.
 * Waypoints are graphical objects used in the Node View to control the path of a cable linking modules
 * together. With waypoint methods, it is possible to Add, link, remove, move and get position of any
 * waypoint. The naming convention for waypoints is highly similar to naming convention for nodes. The
 * qualified name of a waypoint is the concatenation of its parent group qualified name and its
 * instance name, e.g. "Top/MyFirstGroup/MyWaypointName".
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classwaypoint.html}
 * @example
 * waypoint.add("Top", "MyWaypoint1", -110, 10);
 * waypoint.add("Top", "MyWaypoint2", -110, 60);
 * waypoint.linkOutportToWaypoint("Top/Drawing", 0, "Top/MyWaypoint1");
 * waypoint.linkWaypointToWaypoint("Top/MyWaypoint1", "Top/MyWaypoint2");
 * waypoint.linkWaypointToInport("Top/MyWaypoint2", "Top/Composite", 0, true);
 */
declare namespace waypoint {
  /**
   * Add a waypoint to the Node View.
   * For an example usage of add, see the above Detailed Description.
   * @param {string} parentGroup The path of the parent group node into which you want to add this waypoint.
   * @param {string} instanceName The suggested name of the waypoint you want to add.
   * @param {int} x The X position of the waypoint in the Node View.
   * @param {int} y The Y position of the waypoint in the Node View.
   * @returns {string}
   */
  function add(
    parentGroup: string,
    instanceName: string,
    x: int,
    y: int
  ): string;

  /**
   * Retrieve the list of children ports directly connected to the specified waypoint.
   * Meant to be used in conjunction with waypoint.childNodes().
   * @param {string} wpQualifiedName The path to the waypoint.
   * @returns {QScriptValue}
   * @example
   * var childNodes = waypoint.childNodes("Top/waypoint_1");
   * var childInports = waypoint.childInports("Top/waypoint_1");
   * for (var i = 0; i < childNodes.length; ++i)
   *     MessageLog.trace("child name:" + childNodes[i] + " Inport:" + childInports[i]);
   */
  function childInports(wpQualifiedName: string): QScriptValue;

  /**
   * Retrieve the list of children port nodes directly connected to the specified waypoint.
   * Meant to be used in conjunction with waypoint.childInports().
   * @param {string} wpQualifiedName The path to the waypoint.
   * @returns {StringList}
   * @example
   * var childNodes = waypoint.childNodes("Top/waypoint_1");
   * var childInports = waypoint.childInports("Top/waypoint_1");
   * for (var i = 0; i < childNodes.length; ++i)
   *     MessageLog.trace("child name:" + childNodes[i] + " Inport:" + childInports[i]);
   */
  function childNodes(wpQualifiedName: string): StringList;

  /**
   * Retrieve the list of children waypoints.
   * @param {string} wpQualifiedName The path to the waypoint.
   * @returns {StringList}
   * @example
   * var childWps = waypoint.childWaypoints("Top/waypoint_1");
   * MessageLog.trace(childWps);
   */
  function childWaypoints(wpQualifiedName: string): StringList;

  /**
   * Retrieve the list of waypoints directly linked to the specified node output port.
   * @param {string} nodeQualifiedName The path of the node.
   * @param {int} outPortId The out port from which waypoints are linked. This value is between 0 and the number of node out ports, minus one.
   * @returns {StringList}
   * @example
   * var childWps = waypoint.childWaypoints("Top/composite", 0);
   * MessageLog.trace(childWps);
   */
  function childWaypoints(
    nodeQualifiedName: string,
    outPortId: int
  ): StringList;

  /**
   * Returns an integer indicating the X position of a waypoint in the Node View.
   * The example below takes the path of a waypoint, uses coordX to retrieve it's X coordinate in the
   * Node View, then moves it to the right by 50 units.
   * @param {string} qualifiedName The path of the waypoint.
   * @returns {int}
   * @example
   * function shiftWaypoint(exWaypoint) {
   *     var x = waypoint.coordX(exWaypoint);
   *     var y = waypoint.coordY(exWaypoint);
   *     x += 50;
   *     waypoint.setCoord(exWaypoint, x, y);
   * }
   */
  function coordX(qualifiedName: string): int;

  /**
   * Returns an integer indicating the X position of a waypoint in the Node View.
   * The example below takes the path of a waypoint, uses coordY to retrieve it's X coordinate in the
   * Node View, then moves it to the down by 50 units.
   * @param {string} qualifiedName The path of the waypoint.
   * @returns {int}
   * @example
   * function shiftWaypoint(exWaypoint) {
   *     var x = waypoint.coordX(exWaypoint);
   *     var y = waypoint.coordY(exWaypoint);
   *     y += 50;
   *     waypoint.setCoord(exWaypoint, x, y);
   * }
   */
  function coordY(qualifiedName: string): int;

  /**
   * Delete a single waypoint.
   * The following example deletes the currently selected waypoint. Existing links will bypass the
   * deleted waypoint.
   * @param {string} qualifiedName The path of the waypoint.
   * @returns {boolean}
   * @example
   * waypoint.deleteWaypoint(selection.selectedWaypoint(0));
   */
  function deleteWaypoint(qualifiedName: string): boolean;

  /**
   * Retrieve all the waypoints found along the cable of the specified node input port.
   * @param {string} nodeQualifiedName The path of the node.
   * @param {int} inPortId The in port from which the waypoint path starts. This value is between 0 and the number of node in ports, minus one.
   * @returns {StringList}
   */
  function getAllWaypointsAbove(
    nodeQualifiedName: string,
    inPortId: int
  ): StringList;

  /**
   * Retrieve all the waypoints found along the cable tree under the specified node output port.
   * @param {string} nodeQualifiedName The path of the node.
   * @param {int} outPortId The out port from which waypoints are linked. This value is between 0 and the number of node out ports, minus one.
   * @returns {StringList}
   */
  function getAllWaypointsBelow(
    nodeQualifiedName: string,
    outPortId: int
  ): StringList;

  /**
   * Retrieve the waypoint list for the specified group.
   * @param {string} groupQualifiedName The path of the group.
   * @returns {StringList}
   * @example
   * var groupWps = waypoint.getWaypointsInGroup("Top");
   * MessageLog.trace(groupWps);
   */
  function getWaypointsInGroup(groupQualifiedName: string): StringList;

  /**
   * Link an output port from a node to a waypoint.
   * @param {string} nodeQualifiedName The path of the node whose output port you want to link to a destination waypoint.
   * @param {int} outPortId The port that you want to link to the input port on the destination waypoint. This value is between 0 and the results of the numberOfOutputPorts() method, minus one.
   * @param {string} wpQualifiedName The path of the waypoint you want to link to the source node.
   * @returns {boolean}
   * @example
   * waypoint.add("Top", "MyWaypoint1", -110, 10);
   * waypoint.linkOutportToWaypoint("Top/Drawing", 0, "Top/MyWaypoint1");
   */
  function linkOutportToWaypoint(
    nodeQualifiedName: string,
    outPortId: int,
    wpQualifiedName: string
  ): boolean;

  /**
   * Link a waypoint to an input port.
   * @param {string} wpQualifiedName The path of the source waypoint you want to link from.
   * @param {string} nodeQualifiedName The path of the destination node you want to link to.
   * @param {int} inPortId The port on the destination node that you want to link to the waypoint source. This value is between 0 and the results of the numberOfInputPorts() method, minus one.
   * @param {boolean} [insertMode=false] This flag allows to either insert a new port on the destination node (true) or link to an existing port (false) if one exists at the specified index.
   * @returns {boolean}
   * @example
   * waypoint.add("Top", "MyWaypoint1", -110, 10);
   * waypoint.linkWaypointToInport("Top/MyWaypoint1", "Top/Composite", 0, true);
   */
  function linkWaypointToInport(
    wpQualifiedName: string,
    nodeQualifiedName: string,
    inPortId: int,
    insertMode?: boolean
  ): boolean;

  /**
   * Link a waypoint to another waypoint.
   * @param {string} srcQualifiedName The path of the source waypoint you want to link from.
   * @param {string} dstQualifiedName The path of the destination waypoint you want to link to.
   * @returns {boolean}
   * @example
   * waypoint.add("Top", "MyWaypoint1", -110, 10);
   * waypoint.add("Top", "MyWaypoint2", -110, 60);
   * waypoint.linkWaypointToWaypoint("Top/MyWaypoint1", "Top/MyWaypoint2");
   */
  function linkWaypointToWaypoint(
    srcQualifiedName: string,
    dstQualifiedName: string
  ): boolean;

  /**
   * Get parent node path, if applicable.
   * @param {string} wpQualifiedName The path to the waypoint.
   * @returns {string}
   * @example
   * var parentNode = waypoint.parentNode("Top/waypoint_1");
   * MessageLog.trace(parentNode);
   */
  function parentNode(wpQualifiedName: string): string;

  /**
   * Get parent outport index, if applicable.
   * @param {string} wpQualifiedName The path to the waypoint.
   * @returns {int}
   * @example
   * var parentOutport = waypoint.parentOutport("Top/waypoint_1");
   * MessageLog.trace(parentOutport);
   */
  function parentOutport(wpQualifiedName: string): int;

  /**
   * Get parent waypoint path.
   * @param {string} wpQualifiedName The path to the waypoint.
   * @returns {string}
   * @example
   * var parentWp = waypoint.parentWaypoint("Top/waypoint_1");
   * MessageLog.trace(parentWp);
   */
  function parentWaypoint(wpQualifiedName: string): string;

  /**
   * Retrieve the waypoint above a node port, linked to the specified input port.
   * @param {string} nodeQualifiedName The path of the node.
   * @param {int} inPortId The in port to which a waypoint is linked. This value is between 0 and the number of node in ports, minus one.
   * @returns {string}
   * @example
   * var parentWp = waypoint.parentWaypoint("Top/composite", 0);
   * MessageLog.trace(parentWp);
   */
  function parentWaypoint(nodeQualifiedName: string, inPortId: int): string;

  /**
   * Set the position of a waypoint in the Node View.
   * The example below takes the path of a waypoint and then shifts its position 50 units to the right,
   * and down in the node view.
   * @param {string} qualifiedName The path of the waypoint.
   * @param {int} x The X position of the waypoint in the Node View.
   * @param {int} y The Y position of the waypoint in the Node View.
   * @returns {void}
   * @example
   * function shiftWaypoint(exWaypoint) {
   *     var x = waypoint.coordX(exWaypoint);
   *     var y = waypoint.coordY(exWaypoint);
   *     x += 50;
   *     y += 50;
   *     waypoint.setCoord(exWaypoint, x, y);
   * }
   */
  function setCoord(qualifiedName: string, x: int, y: int): void;

  /**
   * Unlink all children node and children waypoints from the specified waypoint.
   * This method will also disconnect all destination ports below the waypoint.
   * @param {string} wpQualifiedName The parent waypoint.
   * @returns {boolean}
   * @example
   * waypoint.unlinkAllChildren("Top/waypoint_1");
   */
  function unlinkAllChildren(wpQualifiedName: string): boolean;

  /**
   * Unlink the child input port from the waypoint.
   * @param {string} wpQualifiedName The path of the waypoint.
   * @param {string} nodeQualifiedName The path to the destination node.
   * @param {int} inPortId The index of the port to unlink.
   * @returns {boolean}
   * @example
   * waypoint.unlinkChildInport("Top/waypoint_1", "Top/Composite", 1);
   */
  function unlinkChildInport(
    wpQualifiedName: string,
    nodeQualifiedName: string,
    inPortId: int
  ): boolean;

  /**
   * Unlink the destination node from the waypoint source.
   * @param {string} wpQualifiedName The path of the waypoint.
   * @param {string} nodeQualifiedName The path to the destination node.
   * @returns {boolean}
   * @example
   * waypoint.unlinkChildNode("Top/waypoint_1", "Top/Composite_1");
   */
  function unlinkChildNode(
    wpQualifiedName: string,
    nodeQualifiedName: string
  ): boolean;

  /**
   * Unlink the child waypoint from the specified waypoint.
   * This method will also disconnect all destination ports below the child waypoint.
   * @param {string} wpQualifiedName The parent waypoint.
   * @param {string} childWpQualifiedName The child waypoint to unlink.
   * @returns {boolean}
   * @example
   * waypoint.unlinkChildWaypoint("Top/waypoint_1", "Top/waypoint_2");
   */
  function unlinkChildWaypoint(
    wpQualifiedName: string,
    childWpQualifiedName: string
  ): boolean;

  /**
   * Unlink the waypoint from its parent node or waypoint.
   * @param {string} wpQualifiedName The path of the waypoint.
   * @returns {boolean}
   * @example
   * waypoint.unlinkParent("Top/waypoint_1");
   */
  function unlinkParent(wpQualifiedName: string): boolean;
}

/**
 * The xsheet JavaScript global object. Enables manipulation of the XSheet view from scripting. For
 * example, allows a script to auto-advance the XSheet cell independently of the current timeline
 * selection.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classxsheet.html}
 */
declare namespace xsheet {
  /**
   * Simulates the effect of auto-advancing the cursor in the XSheet after entering values.
   * @returns {void}
   */
  function autoAdvance(): void;

  /**
   * Returns an array containing the current xsheet table cursor position and selection: [ leftColumn,
   * topRow, rightColumn, bottomRow ].
   * @returns {QScriptValue}
   */
  function getCursorPosition(): QScriptValue;

  /**
   * The number of frames that cells are exposed by default when editing timings.
   * @returns {QScriptValue}
   */
  function holdValue(): QScriptValue;

  /**
   * Returns the column ID associated with the visible column at given index.
   * @param {int} i Visible index of the column in the XSheet. Note that hidden columns don't count in that index.
   * @returns {string}
   */
  function visibleLinkedColumn(i: int): string;
}

/**
 * The ComboBox JavaScript class. A simplified version of the ComboBox Qt widget.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classComboBox.html}
 * @example
 * var myDialog = new Dialog();
 * myDialog.title = "ComboBox Example";
 *
 * var userInput = new ComboBox();
 * userInput.label = "What is your favourite colour?"
 *
 * userInput.editable = true;
 * userInput.itemList = ["Red", "Green", "Blue", "Yellow", "White", "Pink", "Orange", "Purple", "Black"];
 *
 * myDialog.add(userInput);
 *
 * if (myDialog.exec())
 *     MessageLog.trace("The user�s favourite colour is " + userInput.currentItem + ".");
 */
declare class ComboBox extends Labeled {
  /**
   * The currently selected item.
   * @returns {string}
   */
  currentItem: string;

  /**
   * The index of the current item.
   * @returns {int}
   */
  currentItemPos: int;

  /**
   * Toggle whether the combo box may be edited by the user.
   * @returns {boolean}
   */
  editable: boolean;

  /**
   * The stringlist of items.
   * @returns {StringList}
   */
  itemList: StringList;
}

/**
 * The DateEdit JavaScript class. A simplified version of the DateEdit Qt widget.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classDateEdit.html}
 * @example
 * var myDialog = new Dialog();
 * myDialog.title = "DateEdit Example";
 *
 * var userInput = new DateEdit();
 *
 * //YMD means the order will be changed to Year:Month:Day in the dialog.
 * //The possible orders are DMY, MDY, YMD, YDM.
 * userInput.order = DateEditEnum.YMD;
 *
 * var min = new Date(2010, 1, 1);
 * var max = new Date(2019, 12, 31);
 * var now = new Date();
 *
 * userInput.date = now;
 * userInput.minimum = min;
 * userInput.maximum = max;
 *
 * userInput.label = "Pick a date from this decade: ";
 *
 * myDialog.add(userInput);
 *
 * if (myDialog.exec()) {
 *     var inputDate = userInput.date;
 *     var day = inputDate.getDate();
 *     var month = inputDate.getMonth() + 1;
 *     var year = inputDate.getFullYear();
 *
 *     MessageLog.trace("The selected date is " + day + "/" + month + "/" + year + ".");
 * }
 */
declare class DateEdit extends Labeled {
  /**
   * The date shown.
   * @returns {QDate}
   */
  date: QDate;

  /**
   * The maximum date allowed by DateEdit.
   * @returns {QDate}
   */
  maximum: QDate;

  /**
   * The minimum date allowed by DateEdit.
   * @returns {QDate}
   */
  minimum: QDate;

  /**
   * Whether the date order shown is DMY, MDY, YMD, or YDM.
   * @returns {int}
   */
  order: int;
}

/**
 * The LineEdit JavaScript class. A simplified version of the LineEdit Qt widget.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classLineEdit.html}
 * @example
 * var myDialog = new Dialog();
 * myDialog.title = "LineEdit Example";
 *
 * var userInput = new LineEdit();
 * userInput.label = "What is your favourite colour?";
 * myDialog.add(userInput);
 *
 * if (myDialog.exec()) {
 *     var inputText = userInput.text;
 *     MessageLog.trace("Your favourite colour is " + inputText + "!");
 * }
 */
declare class LineEdit extends Labeled {
  /**
   * Text shown in the LineEdit.
   * @returns {string}
   */
  text: string;
}

/**
 * The NumberEdit JavaScript class. A simplified version of the NumberEdit Qt widget.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classNumberEdit.html}
 * @example
 * var myDialog = new Dialog();
 * myDialog.title = "NumberEdit Example";
 *
 * var userInput = new NumberEdit();
 * userInput.decimals = 3;
 * userInput.minimum = 0;
 * userInput.maximum = 1;
 * userInput.label = "Enter a number between 0 and 1: ";
 * myDialog.add(userInput);
 *
 * if (myDialog.exec()) {
 *     var inputNum = userInput.value;
 *     MessageLog.trace(inputNum);
 * }
 */
declare class NumberEdit extends Labeled {
  /**
   * The precision of the NumberEdit.
   * @returns {double}
   */
  decimals: double;

  /**
   * The maximum value allowed by NumberEdit.
   * @returns {double}
   */
  maximum: double;

  /**
   * The minimum value allowed by NumberEdit.
   * @returns {double}
   */
  minimum: double;

  /**
   * The value shown.
   * @returns {double}
   */
  value: double;
}

/**
 * The Slider JavaScript class. A simplified version of the Slider Qt widget.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classSlider.html}
 * @example
 * var mySlider;
 *
 * function sliderExample() {
 *     var myDialog = new Dialog();
 *     myDialog.title = "Slider Example";
 *
 *     var userInput = new Slider();
 *     userInput.label = "Pick a number."
 *
 *     userInput.minimum = -50;
 *     userInput.maximum = 50;
 *     userInput.value = 0;
 *     userInput.orientation = "Vertical";
 *
 *     //Whenever the valueChanged() signal is sent,
 *     // the current value of the slider will be printed
 *     userInput.callback = "printVal";
 *
 *     mySlider = userInput;
 *
 *     myDialog.add(userInput);
 *
 *     myDialog.exec();
 * }
 *
 * function printVal() {
 *     //This prints a continuous stream of updating values, as they are changed
 *     MessageLog.trace(mySlider.value);
 * }
 */
declare class Slider extends Labeled {
  /**
   * Sets the value in the slider, triggering the callback.
   * @param {int} value
   * @returns {void}
   */
  public valueChanged(value: int): void;

  /**
   * Use this to assign the name of another function. This function will be triggered automatically when
   * the slider value is modified.
   * @returns {string}
   */
  callback: string;

  /**
   * The maximum value of the slider.
   * @returns {int}
   */
  maximum: int;

  /**
   * The minimum value of the slider.
   * @returns {int}
   */
  minimum: int;

  /**
   * Whether or not the slider is horizontal or vertical.
   * @returns {string}
   */
  orientation: string;

  /**
   * The value of the slider.
   * @returns {int}
   */
  value: int;
}

/**
 * The SpinBox JavaScript class. A simplified version of the SpinBox Qt widget.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classSpinBox.html}
 * @example
 * var myDialog = new Dialog();
 * myDialog.title = "SpinBox Example";
 *
 * var userInput = new SpinBox();
 * userInput.label = "Pick a number: ";
 *
 * userInput.maximum = 100;
 * userInput.minimum = 1;
 *
 * myDialog.add(userInput);
 *
 * if (myDialog.exec())
 *     MessageLog.trace("The chosen number is: " + userInput.value + ".");
 */
declare class SpinBox extends Labeled {
  /**
   * The maximum value that the spinBox will ascend to. Default value is 99.
   * @returns {int}
   */
  maximum: int;

  /**
   * The minimum value that the spinBox will descend to. Default value is 0.
   * @returns {int}
   */
  minimum: int;

  /**
   * The value shown in the spinBox. Default value is 0.
   * @returns {int}
   */
  value: int;
}

/**
 * The TimeEdit JavaScript class. A simplified version of the TimeEdit Qt widget.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classTimeEdit.html}
 * @example
 * var myDialog = new Dialog();
 * myDialog.title = "TimeEdit Example";
 *
 * var userInput = new TimeEdit();
 *
 * var min = new QTime(15, 00, 00);
 * var max = new QTime(18, 00, 00);
 * var preset = new QTime(15, 00, 00);
 *
 * userInput.time = preset;
 * userInput.minimum = min;
 * userInput.maximum = max;
 *
 * //These two lines are redundant, as these are already the default values
 * userInput.showSeconds = false;
 * userInput.showAMPM = true;
 *
 * userInput.label = "Pick an appointment time: ";
 *
 * myDialog.add(userInput);
 *
 * if (myDialog.exec())
 *     MessageLog.trace("The chosen time is: " + userInput.time + ".");
 */
declare class TimeEdit extends Labeled {
  /**
   * The maximum time allowed by TimeEdit.
   * @returns {QTime}
   */
  maximum: QTime;

  /**
   * The minimum time allowed by TimeEdit.
   * @returns {QTime}
   */
  minimum: QTime;

  /**
   * Toggle to display the AM : PM display.
   * @returns {boolean}
   */
  showAMPM: boolean;

  /**
   * Toggle to display seconds in the time.
   * @returns {boolean}
   */
  showSeconds: boolean;

  /**
   * The current time.
   * @returns {QTime}
   */
  time: QTime;
}

/**
 * Base class of the script widget classes.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classWidgetBase.html}
 */
declare class WidgetBase extends MO_SignalEmitter {
  /**
   * Return the attribute at the given index. If no index is provide, return the first attribute.
   * @param {int} [index=0] corresponding to the order in which they were provided at the widget creation. The indexes start at 0.
   * @returns {Attribute}
   */
  public data(index?: int): Attribute;

  /**
   * @param {QScriptValue} properties
   * @returns {void}
   */
  public updateProperties(properties: QScriptValue): void;

  /**
   * signal called when this widget is dragged with the Transform tool
   * @param {QScriptValue} dragContext A DragContext giving information about the currently dragged node and the picking point.
   * @returns {void}
   */
  public drag: QSignal<(dragContext: QScriptValue) => void>;

  /**
   * signal called on mouse up after having manipulated this widget with the Transform tool
   * @returns {void}
   */
  public dragEnded: QSignal<() => void>;

  /**
   * signal called on mouse down when picking this widget with the Transform tool
   * @param {QScriptValue} dragContext A DragContext giving information about the currently dragged node and the picking point.
   * @returns {void}
   */
  public dragStarted: QSignal<(dragContext: QScriptValue) => void>;
}

/**
 * The ButtonWidget JavaScript class. A button widget.
 * This widget must be linked to a BOOL attribute. The widget manipulator is a circular area. The color
 * for the on/off states can be specified at object creation. When the area is clicked, the BOOL
 * attribute is set to true, the button is shown in its pressed state, and the valueChanged signal is
 * emitted. If the "toggle" property is set to true, the button will remain in its pressed state until
 * it is pushed again.
 * The following properties are supported by the widget:
 * The following components constitute the widget:
 * Create this widget to add a floating Master Controller in the camera view:
 * Make sure to setup the Master Controller node specifications properly. e.g.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classButtonWidget.html}
 * @example
 * Controller.onShowControl = function() {
 *     MessageLog.trace("\n\n\n");
 *     MessageLog.trace(" ---------------------------------------------------------------------------");
 *     MessageLog.trace("| Button Widget Test");
 *     MessageLog.trace(" ---------------------------------------------------------------------------");
 *
 *     var valAttr = node.getAttr(Controller.node, frame.current(), "button_value");
 *     var mcColor = node.getAttr(Controller.node, frame.current(), "widget_color").colorValueAt(frame.current());
 *     var mcSize = node.getAttr(Controller.node, frame.current(), "button_size").doubleValue();
 *     var screen_space = node.getAttr(Controller.node, frame.current(), "screen_space").boolValue();
 *     var val_label_text = node.getAttr(Controller.node, frame.current(), "label").textValue();
 *     var val_label_font = node.getAttr(Controller.node, frame.current(), "label_font").textValue();
 *     var val_label_size = node.getAttr(Controller.node, frame.current(), "label_size").doubleValue();
 *     var val_label_color = node.getAttr(Controller.node, frame.current(), "label_color").colorValueAt(frame.current());
 *     var val_label_bg_color = node.getAttr(Controller.node, frame.current(), "label_bg_color").colorValueAt(frame.current());
 *
 *     var mcNameCapture = Controller.node;
 *
 *     var buttonWidget = new ButtonWidget({
 *         data: valAttr,
 *         position: Point2d(0., 0.),
 *         screen_space: screen_space,
 *         pressed_color: mcColor,
 *         outer_color: ColorRGBA(0, 0, 0, 255),
 *         on_color: ColorRGBA(0, 255, 0, 255),
 *         off_color: ColorRGBA(255, 0, 0, 255),
 *         toggle: false,
 *         size: mcSize,
 *         label: val_label_text,
 *         label_color: val_label_color,
 *         label_bg_color: val_label_bg_color,
 *         label_font: val_label_font,
 *         label_size: val_label_size,
 *         label_pos: Point2d(0, 0),
 *         label_screenspace_offset: Point2d(0, -400),
 *         label_justify: "Center",
 *         label_screenspace: screen_space
 *     });
 *
 *     buttonWidget.valueChanged.connect(function(toggleValue) {
 *         MessageLog.trace("buttonWidget.valueChanged!");
 *     });
 *
 *     Controller.controls = [buttonWidget];
 *     MessageLog.trace("Done.");
 * }
 */
declare class ButtonWidget extends WidgetBase {
  /**
   * Reimplemented from WidgetBase.
   * @param {MC_DragContext} dragContext
   * @returns {void}
   */
  public onDrag(dragContext: MC_DragContext): void;

  /**
   * Signal notifying the user that the value was modified by the Transform Tool.
   * @param {boolean} value the toggle value. value is of JavaScript type bool
   * @returns {void}
   */
  public valueChanged: QSignal<(value: boolean) => void>;
}

/**
 * The CheckboxWidget JavaScript class. A checkbox widget.
 * This widget must be linked to a BOOL attribute. The widget manipulator is a square area. The color
 * for the on/off states can be specified at object creation. When the area is clicked, the BOOL
 * attribute is set to true, a cross is displayed in the widget box, and the "on" color is shown.
 * The following properties are supported by the widget:
 * The following components constitute the widget:
 * Create this widget to add a floating Master Controller in the camera view:
 * Make sure to setup the Master Controller node specifications properly. e.g.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classCheckboxWidget.html}
 * @example
 * Controller.onShowControl = function() {
 *     MessageLog.trace("\n\n\n");
 *     MessageLog.trace(" ---------------------------------------------------------------------------");
 *     MessageLog.trace("| Checkbox Widget Test");
 *     MessageLog.trace(" ---------------------------------------------------------------------------");
 *
 *     var valAttr = node.getAttr(Controller.node, frame.current(), "checkbox_value");
 *
 *     var mcNameCapture = Controller.node;
 *
 *     var checkboxWidget = new CheckboxWidget({
 *         data: valAttr,
 *         position: Point2d(0., 0.),
 *         screen_space: false,
 *         outer_color: ColorRGBA(0, 0, 0, 255),
 *         on_color: ColorRGBA(0, 255, 0, 128),
 *         off_color: ColorRGBA(255, 0, 0, 128),
 *         size: 1,
 *         label: "myText",
 *         label_color: ColorRGBA(0, 0, 0, 255),
 *         label_bg_color: ColorRGBA(0, 0, 0, 128),
 *         label_font: "Arial",
 *         label_size: 18,
 *         label_pos: Point2d(0, 0),
 *         label_screenspace_offset: Point2d(0, -400),
 *         label_justify: "Center",
 *         label_screenspace: false
 *     });
 *     checkboxWidget.valueChanged.connect(function(toggleValue) {
 *         MessageLog.trace("checkboxWidget.valueChanged!");
 *     });
 *
 *     Controller.controls = [checkboxWidget];
 *     MessageLog.trace("Done.");
 * }
 */
declare class CheckboxWidget extends WidgetBase {
  /**
   * Reimplemented from WidgetBase.
   * @param {MC_DragContext} dragContext
   * @returns {void}
   */
  public onDrag(dragContext: MC_DragContext): void;

  /**
   * Signal notifying the user that the value was modified by the Transform Tool.
   * @param {boolean} value the toggle value. value is of JavaScript type bool
   * @returns {void}
   */
  public valueChanged: QSignal<(value: boolean) => void>;
}

/**
 * The CustomWidget JavaScript class. A widget for which the attribute, drag_manipulator, painter,
 * picker and local_transformation components are specified at the widget creation.
 * A widget that can have its look, drag manipulation, transformation and picking be customized. The
 * look of the widget can be set at the widget creation by specifying a painter property. By example,
 * the widget can be drawn as a circle, a slider, a point, a plane, an arrow or sphere.
 * Local transformations let the widget have attributes that affects the widget registered after them.
 * By example, a translation widget could be declared first and enable the user to drag the widgets
 * registered after it. The local transformation is specified by the local_transformation property.
 * The picker property enables the user to choose the selection behaviour after being picked.
 * The drag_manipulator property enables the user to choose the behavior of the widget when it is
 * dragged. Please note that the drag behaviour can also be implemented in a javaScript callback with
 * the CustomWidget.
 * If a drag manipulator property hasn't been provided, connect the custom widget drag signals to
 * implement the desired behaviour.
 * When connecting to a dragStarted or drag signal, the provided context offers methods to compute the
 * location of the dragging point. See DragContext for more information.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classCustomWidget.html}
 * @example
 * var drag_offset = new Vector3d;
 *
 * function onDragStart(context) {
 *     var projectedPoint = context.projectToModelPlane(context.dragPoint());
 *     var modelPickingPoint = context.multiplyByPostMatrix(projectedPoint);
 *     var pegPoint = node.getAttr("Top/MyPeg", frame.current(), "POSITION").pos3dValue();
 *     var modelOriginPoint = scene.toOGL(pegPoint);
 *
 *     drag_offset = modelOriginPoint.minus(modelPickingPoint);
 * }
 *
 * function onDragTransX(context) {
 *     var projectedPoint = context.projectToModelPlane(context.dragPoint());
 *     var localPoint = context.multiplyByPostMatrix(projectedPoint);
 *     var fieldPoint = scene.fromOGL(localPoint.add(drag_offset));
 *
 *     var newValue = fieldPoint.x;
 *
 *     node.setTextAttr("Top/MyController", "TranslationX", frame.current(), newValue);
 *     node.setTextAttr("Top/MyPeg", "POSITION.X", frame.current(), newValue);
 * }
 *
 * Controller.onShowControl = function() {
 *     Controller.controls = [];
 *
 *     var customWidget = new CustomWidget({
 *         data: "TranslationX",
 *         attribute: "DOUBLE",
 *         drag_manipulator: "SCRIPT",
 *         painter: "ARROW_X",
 *         picker: "MONO",
 *         local_transformation: "TRANSLATION_X"
 *     });
 *
 *     // Register a callback for when a transformation tool value changes.
 *     customWidget.dragStarted.connect(onDragStart);
 *     customWidget.drag.connect(onDragTransX);
 *     Controller.controls.push(customWidget);
 * }
 */
declare class CustomWidget extends WidgetBase {
  /**
   * valueChanged signal called when value of the attribute of the widget has changed
   * @param {string} newValue The new value of the attribute of the widget in text format. The given value is the equivalent of calling node.getTextAttr() with the widget attribute as the method attribute parameter.
   * @returns {void}
   */
  public valueChanged: QSignal<(newValue: string) => void>;
}

/**
 * The LabelWidget JavaScript class. A floating Label display widget.
 * This widget must be linked to a POSITION_2D attribute and a STRING attribute. This is a display
 * widget, it has no manipulator. The label text is updated dynamically, following the attribute
 * value..
 * The following properties are supported by the widget:
 * The following components constitute the widget:
 * Create this widget to add a floating Master Controller in the camera view:
 * Make sure to setup the Master Controller node specifications properly. e.g.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classLabelWidget.html}
 * @example
 * Controller.onShowControl = function() {
 *     MessageLog.trace("\n\n\n");
 *     MessageLog.trace(" ---------------------------------------------------------------------------");
 *     MessageLog.trace("| Label Widget Test");
 *     MessageLog.trace(" ---------------------------------------------------------------------------");
 *
 *     var posAttr = node.getAttr(Controller.node, frame.current(), "widget_pos");
 *     var txtAttr = node.getAttr(Controller.node, frame.current(), "label");
 *     var mcColor = node.getAttr(Controller.node, frame.current(), "widget_color").colorValueAt(frame.current());
 *     var mcSize = node.getAttr(Controller.node, frame.current(), "widget_size").doubleValue();
 *     var mcSliderLen = 3.0;
 *     var val_label_screen_space = node.getAttr(Controller.node, frame.current(), "label_screen_space").boolValue();
 *     var val_label_font = node.getAttr(Controller.node, frame.current(), "label_font").textValue();
 *     var val_label_size = node.getAttr(Controller.node, frame.current(), "label_size").doubleValue();
 *     var val_label_color = node.getAttr(Controller.node, frame.current(), "label_color").colorValueAt(frame.current());
 *     var val_label_bg_color = node.getAttr(Controller.node, frame.current(), "label_bg_color").colorValueAt(frame.current());
 *
 *     var mcNameCapture = Controller.node;
 *
 *     var labelWidget = new LabelWidget({
 *         data: [posAttr, txtAttr],
 *         screen_space: false,
 *         label: "myLabelText",
 *         label_color: val_label_color,
 *         label_bg_color: val_label_bg_color,
 *         label_font: val_label_font,
 *         label_size: val_label_size,
 *         label_pos: Point2d(0, 0),
 *         label_justify: "Center",
 *         label_screenspace: val_label_screen_space
 *     });
 *
 *     Controller.controls = [labelWidget];
 *     MessageLog.trace("Done.");
 * }
 */
declare class LabelWidget extends WidgetBase {}

/**
 * The Line2dDisplayWidget JavaScript class. A 2 dimensional line linking 2 points.
 * A simple 2 dimensional line display script widget. This widget offers a 2D visual line in the Camera
 * view. It is intended to show the relation between 2 distinct points. The line 2D widget cannot be
 * instantiated without providing it with an array of 2 2D point attributes.
 * The following properties are supported by the widget:
 * The following components constitute the widget:
 * Set the data properties of this widget to an array of 2 2d point attributes at the widget creation.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classLine2dDisplayWidget.html}
 * @example
 * Controller.onShowControl = function() {
 *         Controller.controls = [];
 *
 *         var myPointWidgetA = new Point2dWidget();
 *         var myPointWidgetB = new Point2dWidget();
 *         var myLine2dDisplayWidget = new Line2dDisplayWidget({
 *             data: [myPointWidgetA.data(), myPointWidgetB.data()],
 *             size: 0.05,
 *             color: ColorRGBA(20, 20, 20)
 *         });
 *
 *         myLine2dDisplayWidget.data(0).setValue(new Point2d(2, 2));
 *         myLine2dDisplayWidget.data(1).setValue(new Point2d(-2, -2));
 *
 *         Controller.controls.push(myPointWidgetA);
 *         Controller.controls.push(myPointWidgetB);
 *         Controller.controls.push(myLine2dDisplayWidget);
 */
declare class Line2dDisplayWidget extends WidgetBase {}

/**
 * The Point2dWidget JavaScript class. A 2 dimensional point widget of various shape.
 * A 2 dimensional point script widget that can be dragged inside a bounding box specified by the user.
 * The widget manipulator is 2 concentric circles. The color of each circle can be specified at the
 * object creation. The widget can be dragged in the Camera view while using the Transform tool.
 * Dragging the widget will modify the value of the widget position in model Field coordinates.
 * If no 2d position attribute is given at the construction of this object, the object will generate
 * one of the proper type.
 * The following properties are supported by the widget:
 * The following components constitute the widget:
 * Connect to this scriptWidget valueChanged signal to be notified when a modification has been applied
 * to the widget. In the callback function, transfer the new widget value into an action (like
 * modifying a peg attribute value).
 * Create a point 2d widget in the Controller onShowControl method. Extrapolate its default valuel from
 * a peg position.
 * When the value of the script widget changes, update the peg position from the point position in its
 * bounding box.
 * When the current frame changes, update the widget position from the position of the peg at the new
 * current frame.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classPoint2dWidget.html}
 * @example
 * Controller.onShowControl = function() {
 *     Controller.controls = [];
 *
 *     var point2dWidget = new Point2dWidget({
 *         data: "MyPoint",
 *
 *         // bounding box properties
 *         xmin: -1,
 *         xmax: 1,
 *         ymin: -0.5,
 *         ymax: 0.5,
 *
 *         // color properties
 *         color: ColorRGBA(155, 0, 0),
 *         selection_color: ColorRGBA(255, 0, 0)
 *     });
 *
 *     // Set the widget default value.
 *     point2dWidget.data().setValue(getPoint2dValue()); // getPoint2dValue() returns a Point2d
 *
 *     // Connect the widget valueChanged signal to the point2dValueChanged slot.
 *     point2dWidget.valueChanged.connect(point2dValueChanged);
 *
 *     // Register the widget to the Controller.
 *     Controller.controls.push(point2dWidget);
 * }
 */
declare class Point2dWidget extends WidgetBase {
  /**
   * Signal notifying the user that the 2d point value was modified by the Transform Tool.
   * @param {QScriptValue} point2d the new 2d point value. point2d is of JavaScript type Point2d
   * @returns {void}
   */
  public valueChanged: QSignal<(point2d: QScriptValue) => void>;
}

/**
 * The Rotation3dWidget JavaScript class. A rotatable spherical widget.
 * A 3 dimensional rotation script widget. This widget offers a 3D sphere manipulator that can dragged
 * in the Camera view while using the Transform tool. Dragging the sphere generates a 3D rotation. If
 * no attribute is given at the construction of this object, the object will generate a 3D rotation
 * attribute.
 * The following properties are supported by the widget:
 * The following components constitute the widget:
 * Connect to this scriptWidget valueChanged signal to be notified when a modification has been applied
 * to the widget.
 * In the callback function, convert the widget value into an action (like modifying a peg attribute
 * value).
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classRotation3dWidget.html}
 * @example
 * Controller.onShowControl = function() {
 *     var myRotation3dWidget = new Rotation3dWidget({
 *         data: "Rotation3D",
 *         radius: 2,
 *         line_width: 0.03,
 *         color: ColorRGBA(0, 255, 0, 120),
 *         selected_color: ColorRGBA(0, 255, 0, 120)
 *     });
 *
 *     // Register a callback for when a transformation tool value changes.
 *     myRotation3dWidget.valueChanged.connect(my3dRotationChangedFunction);
 *
 *     Controller.controls.push(myRotation3dWidget);
 * }
 */
declare class Rotation3dWidget extends WidgetBase {
  /**
   * valueChanged signal called when the Rotation 3D attribute value has changed
   * @param {QScriptValue} rotation The new 3D rotation value. To retrieve the rotation per individual axis, get the following properties: rotation.x rotation.y rotation.z
   * @returns {void}
   */
  public valueChanged: QSignal<(rotation: QScriptValue) => void>;
}

/**
 * The RotationXWidget JavaScript class. A rotatable circle widget around the x axis.
 * A rotation script widget along the x axis. This widget offers a circle in the YZ axis. The circle
 * can be picked and dragged by the user to generate a rotation around the x axis. The following
 * properties are supported by the widget:
 * The following components constitute the widget:
 * Connect to this scriptWidget valueChanged signal to be notified when a modification has been applied
 * to the widget.
 * In the callback function, convert the widget value into an action.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classRotationXWidget.html}
 * @example
 * Controller.onShowControl = function() {
 *     Controller.controls = [];
 *
 *     var myRotationXdWidget = new RotationXWidget({
 *         data: "myRotation",
 *         radius: 2,
 *         width: 0.05,
 *         color: ColorRGBA(255, 0, 0, 120),
 *         selected_color: ColorRGBA(255, 128, 128, 120)
 *     });
 *
 *     // Register a callback for when a transformation tool value changes.
 *     myRotationXdWidget.valueChanged.connect(myRotationChanged);
 *
 *     Controller.controls.push(myRotationXdWidget);
 * }
 */
declare class RotationXWidget extends WidgetBase {
  /**
   * @param {float} x
   * @returns {void}
   */
  public valueChanged: QSignal<(x: float) => void>;
}

/**
 * The RotationYWidget JavaScript class. A rotatable circle widget around the y axis.
 * A rotation script widget along the y axis. This widget offers a circle in the XZ axis. The circle
 * can be picked and dragged by the user to generate a rotation around the y axis. The following
 * properties are supported by the widget:
 * The following components constitute the widget:
 * Connect to this scriptWidget valueChanged signal to be notified when a modification has been applied
 * to the widget.
 * In the callback function, convert the widget value into an action.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classRotationYWidget.html}
 * @example
 * Controller.onShowControl = function() {
 *     Controller.controls = [];
 *     var myRotationYdWidget = new RotationYWidget({
 *         data: "myRotation",
 *         radius: 2,
 *         width: 0.05,
 *         color: ColorRGBA(0, 255, 0, 120),
 *         selected_color: ColorRGBA(128, 255, 128, 120)
 *     });
 *
 *     // Register a callback for when a transformation tool value changes.
 *     myRotationYdWidget.valueChanged.connect(myRotationChanged);
 *     Controller.controls.push(myRotationYdWidget);
 * }
 */
declare class RotationYWidget extends WidgetBase {
  /**
   * @param {float} y
   * @returns {void}
   */
  public valueChanged: QSignal<(y: float) => void>;
}

/**
 * The RotationZWidget JavaScript class. A rotatable circle widget around the z axis.
 * A rotation script widget along the z axis. This widget offers a circle in the YZ axis. The circle
 * can be picked and dragged by the user to generate a rotation around the z axis. The following
 * properties are supported by the widget:
 * The following components constitute the widget:
 * Connect to this scriptWidget valueChanged signal to be notified when a modification has been applied
 * to the widget.
 * In the callback function, convert the widget value into an action.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classRotationZWidget.html}
 * @example
 * Controller.onShowControl = function() {
 *     Controller.controls = [];
 *
 *     var myRotationZdWidget = new RotationZWidget({
 *         data: "myRotation",
 *         radius: 2,
 *         width: 0.05,
 *         color: ColorRGBA(0, 0, 255, 120),
 *         selected_color: ColorRGBA(128, 128, 255, 120)
 *     });
 *
 *     // Register a callback for when a transformation tool value changes.
 *     myRotationZdWidget.valueChanged.connect(myRotationChanged);
 *     Controller.controls.push(myRotationZdWidget);
 * }
 */
declare class RotationZWidget extends WidgetBase {
  /**
   * @param {float} z
   * @returns {void}
   */
  public valueChanged: QSignal<(z: float) => void>;
}

/**
 * The SliderWidget JavaScript class. A vertical or horizontal slider.
 * Slider widgets provide to the user a vertical or horizontal slider Camera view control. Its handle
 * can be slided and dragged by using the Transform tool. The slider value goes from a user defined
 * minimum value to a user defined maximum value. The user defined values can be specified at the
 * widget construction. The slider can also be translated by having the user pick and drag its frame.
 * If no attribute is given at the construction of this object, the object will generate one of the
 * proper type.
 * The following properties are supported by the widget:
 * The following components are used for the slider handle.
 * The following components are used for the slider frame.
 * Connect to this scriptWidget valueChanged signal to be notified when a modification has been applied
 * to the widget. In the callback function, transfer the widget value into an action (like modifying a
 * peg attribute value).
 * The previous example demonstrates how to instantiate a new widget and register it in the Controller
 * global object.
 * This example shows how to apply a new slider value to a peg.
 * This example shows how to update the slider widget value when the current frame changes.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classSliderWidget.html}
 * @example
 * // Helper function to get the slider value from a Peg value. Completely arbitrary.
 * function getSliderValueFromPeg() {
 *     // slider max slider value * (peg position x + 1 (field)) * 2 (fields)
 *     return 100 * ((node.getAttr("Top/MyPeg_A", frame.current(), "POSITION.X").doubleValue() + 1) / 2 + min slider value(0));
 * }
 *
 * Controller.onShowControl = function() {
 *     var sliderWidget = new SliderWidget({
 *         data: "Slider",
 *         position: Point2d(-2.0, 1.0),
 *         length: 5.0,
 *         radius: 0.3,
 *         frame_color: ColorRGBA(120, 80, 120, 200),
 *         slider_color: ColorRGBA(170, 135, 0, 200),
 *         slider_selection_color: ColorRGBA(150, 150, 150, 150),
 *         frame_selection_color: ColorRGBA(150, 150, 150, 150),
 *         screen_space: false
 *     });
 *
 *     // Initialize the slider attribute from the controlled Peg position.
 *     var initialValue = getSliderValueFromPeg();
 *     sliderWidget.data().setValue(initialValue); // initialValue is a float
 *
 *     // Register a callback for when a transformation tool changes the value of the slider.
 *     sliderWidget.valueChanged.connect(mySliderValueChanged);
 *
 *     // Register the widget to the Controller.
 *     Controller.controls = [];
 *     Controller.controls.push(sliderWidget);
 * }
 */
declare class SliderWidget extends WidgetBase {
  /**
   * Signal notifying the user that the slider value was modified by the Transform Tool.
   * @param {float} newSliderValue the new slider value
   * @returns {void}
   */
  public valueChanged: QSignal<(newSliderValue: float) => void>;
}

/**
 * The TranslationXWidget JavaScript class. A translatable arrow in the x axis.
 * A translation along the x axis script widget. This widget offers an arrow manipulators that can be
 * dragged in the Camera view while using the Transform tool. Dragging the arrow will generate a
 * translation in the x axis. If no attribute is given at the construction of this object, the object
 * will generate a double floating point attribute.
 * The following properties are supported by the widget:
 * The following components constitute the widget:
 * Connect to this scriptWidget valueChanged signal to be notified when a modification has been applied
 * to the widget. In the callback function, transfer the widget value into an action (like modifying a
 * peg attribute value).
 * The previous example demonstrates how to instantiate a new widget and register it in the Controller
 * global object.
 * This example shows how to apply the difference in translation of a translation widget on an
 * arbitrary peg in the scene.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classTranslationXWidget.html}
 * @example
 * Controller.onShowControl = function() {
 *     // Set the widget properties at its creation.
 *     var translationWidget = new TranslationXWidget({
 *         data: "TranslationX",
 *         min: 0.5,
 *         width: 1,
 *         color: ColorRGBA(155, 0, 0),
 *         selection_color: ColorRGBA(255, 0, 0)
 *     });
 *
 *     // Set the widget initial value.
 *     translationWidget.data().setValue(3);
 *
 *     // Register a callback for when a transformation tool value changes.
 *     translationWidget.valueChanged.connect(translationXChanged);
 *     // Register a callback for when the widget is beginning to be dragged
 *     translationWidget.dragStarted.connect(translationDragStart);
 *
 *     // Register the widget in the Controller
 *     Controller.controls = [];
 *     Controller.controls.push(translationWidget);
 * }
 */
declare class TranslationXWidget extends WidgetBase {
  /**
   * valueChanged signal called when the x translation value has been modified by the Transform tool.
   * @param {float} x the new x translation value
   * @returns {void}
   */
  public valueChanged: QSignal<(x: float) => void>;
}

/**
 * The TranslationYWidget JavaScript class. A translatable arrow in the y axis.
 * A translation along the y axis script widget. This widget offers an arrow manipulators that can be
 * dragged in the Camera view while using the Transform tool. Dragging the arrow will generate a
 * translation in the y axis. If no attribute is given at the construction of this object, the object
 * will generate a double floating point attribute.
 * The following properties are supported by the widget:
 * The following components constitute the widget:
 * Connect to this scriptWidget valueChanged signal to be notified when a modification has been applied
 * to the widget. In the callback function, transfer the widget value into an action (like modifying a
 * peg attribute value).
 * The previous example demonstrates how to instantiate a new widget and register it in the Controller
 * global object.
 * This example shows how to apply the difference in translation of a translation widget on an
 * arbitrary peg in the scene.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classTranslationYWidget.html}
 * @example
 * Controller.onShowControl = function() {
 *     // Set the widget properties at its creation.
 *     var translationWidget = new TranslationYWidget({
 *         data: "TranslationY",
 *         min: 0.5,
 *         width: 1,
 *         color: ColorRGBA(0, 155, 0),
 *         selection_color: ColorRGBA(0, 255, 0)
 *     });
 *
 *     // Set the widget initial value.
 *     translationWidget.data().setValue(3);
 *
 *     // Register a callback for when a transformation tool value changes.
 *     translationWidget.valueChanged.connect(translationYChanged);
 *     // Register a callback for when the widget is beginning to be dragged
 *     translationWidget.dragStarted.connect(translationDragStart);
 *
 *     // Register the widget in the Controller
 *     Controller.controls = [];
 *     Controller.controls.push(translationWidget);
 * }
 */
declare class TranslationYWidget extends WidgetBase {
  /**
   * valueChanged signal called when the y translation value has been modified by the Transform tool.
   * @param {float} y the new y translation value
   * @returns {void}
   */
  public valueChanged: QSignal<(y: float) => void>;
}

/**
 * The TranslationZWidget JavaScript class. A translatable arrow in the z axis.
 * A translation along the z axis script widget. This widget offers an arrow manipulators that can be
 * dragged in the Camera view while using the Transform tool. Dragging the arrow will generate a
 * translation in the z axis. If no attribute is given at the construction of this object, the object
 * will generate a double floating point attribute.
 * The following properties are supported by the widget:
 * The following components constitute the widget:
 * Connect to this scriptWidget valueChanged signal to be notified when a modification has been applied
 * to the widget. In the callback function, transfer the widget value into an action (like modifying a
 * peg attribute value).
 * The previous example demonstrates how to instantiate a new widget and register it in the Controller
 * global object.
 * This example shows how to apply the difference in translation of a translation widget on an
 * arbitrary peg in the scene.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classTranslationZWidget.html}
 * @example
 * Controller.onShowControl = function() {
 *     // Set the widget properties at its creation.
 *     var translationWidget = new TranslationZWidget({
 *         data: "TranslationZ",
 *         min: 0.5,
 *         width: 1,
 *         color: ColorRGBA(0, 0, 155),
 *         selection_color: ColorRGBA(0, 0, 255)
 *     });
 *
 *     // Set the widget initial value.
 *     translationWidget.data().setValue(3);
 *
 *     // Register a callback for when a transformation tool value changes.
 *     translationWidget.valueChanged.connect(translationZChanged);
 *     // Register a callback for when the widget is beginning to be dragged
 *     translationWidget.dragStarted.connect(translationDragStart);
 *
 *     // Register the widget in the Controller
 *     Controller.controls = [];
 *     Controller.controls.push(translationWidget);
 * }
 */
declare class TranslationZWidget extends WidgetBase {
  /**
   * valueChanged signal called when the z translation value has been modified by the Transform tool.
   * @param {float} z the new z translation value
   * @returns {void}
   */
  public valueChanged: QSignal<(z: float) => void>;
}

/**
 * The JavaScript class encapsulating a node attribute. Obtain one from the node getAttr or getAttrList
 * methods.
 * This class is polymorphic and can be used to handle multiple types as long as they are compatible
 * with the initial attribute.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classAttribute.html}
 */
declare class Attribute extends QObject {
  /**
   * Fetches the boolean value from the Attribute at the current frame.
   * This example prints just the boolean values from a list of attributes of a selected node.
   * @returns {boolean}
   * @example
   * function printValue() {
   *     if (selection.numberOfNodesSelected() != 1) {
   *         MessageLog.trace("Please select only one node");
   *         return;
   *     }
   *
   *     var sNode = selection.selectedNode(0);
   *     var attrList = getFlatAttrList(sNode);
   *
   *     MessageLog.trace("Node name: \"" + sNode + "\"");
   *
   *     for (var j = 0; j < attrList.length; j++) {
   *         var wAttr = node.getAttr(sNode, 1, attrList[j]);
   *         if (wAttr.typeName() == "BOOL") {
   *             MessageLog.trace(" \"" + attrList[j] + "\"(" + wAttr.typeName() + ")");
   *             MessageLog.trace(wAttr.boolValue());
   *         }
   *     }
   * }
   */
  public boolValue(): boolean;

  /**
   * Fetches the boolean value from the Attribute at the specified frame.
   * This example prints just the boolean values from a list of attributes of a selected node.
   * @param {double} frame The frame number.
   * @returns {boolean}
   * @example
   * function printValue() {
   *     if (selection.numberOfNodesSelected() != 1) {
   *         MessageLog.trace("Please select only one node");
   *         return;
   *     }
   *     var sNode = selection.selectedNode(0);
   *     var attrList = getFlatAttrList(sNode);
   *
   *     MessageLog.trace("Node name: \"" + sNode + "\"");
   *
   *     for (var j = 0; j < attrList.length; j++) {
   *         var wAttr = node.getAttr(sNode, 1, attrList[j]);
   *         if (wAttr.typeName() == "BOOL") {
   *             MessageLog.trace(" \"" + attrList[j] + "\"(" + wAttr.typeName() + ")");
   *             //frame.current() is used here making it functionally identical to wAttr.boolValue()
   *             MessageLog.trace(wAttr.boolValueAt(frame.current()));
   *         }
   *     }
   * }
   */
  public boolValueAt(frame: double): boolean;

  /**
   * Fetches the ColorRGBA value from the Attribute at the current frame.
   * This example sets the colour value of a colour card to a bright green, and prints the new colour
   * value.
   * @returns {ColorRGBA}
   * @example
   * function greenColorCard() {
   *     var sNode = selection.selectedNode(0);
   *
   *     if (node.type(sNode) == "COLOR_CARD") {
   *         var myAttr = node.getAttrList(sNode, frame.current(), "");
   *         var myColor = new ColorRGBA(86, 255, 0, 255);
   *
   *         for (i = 0; i < myAttr.length; i++) {
   *             if (myAttr[i].typeName() == "COLOR") {
   *                 myAttr[i].setValue(myColor);
   *                 MessageLog.trace(myAttr[i].colorValue());
   *             }
   *         }
   *     }
   * }
   */
  public colorValue(): ColorRGBA;

  /**
   * Fetches the ColorRGBA value from the Attribute at the specified frame.
   * This example sets the colour value of a colour card to a bright green, and prints the new colour
   * value.
   * @param {double} frame The frame number.
   * @returns {ColorRGBA}
   * @example
   * function greenColorCard() {
   *     var sNode = selection.selectedNode(0);
   *
   *     if (node.type(sNode) == "COLOR_CARD") {
   *         var myAttr = node.getAttrList(sNode, frame.current(), "");
   *         var myColor = new ColorRGBA(86, 255, 0, 255);
   *
   *         for (i = 0; i < myAttr.length; i++) {
   *             if (myAttr[i].typeName() == "COLOR") {
   *                 myAttr[i].setValue(myColor);
   *                 //frame.current() is used here, making it functionally identical to myAttr[i].colorValue()
   *                 MessageLog.trace(myAttr[i].colorValueAt(frame.current()));
   *             }
   *         }
   *     }
   * }
   */
  public colorValueAt(frame: double): ColorRGBA;

  /**
   * Fetches the double value from the Attribute at the current frame.
   * This example prints just the double values from a list of attributes of a selected node.
   * @returns {double}
   * @example
   * function printValue() {
   *     if (selection.numberOfNodesSelected() != 1) {
   *         MessageLog.trace("Please select only one node");
   *         return;
   *     }
   *     var sNode = selection.selectedNode(0);
   *     var attrList = getFlatAttrList(sNode);
   *
   *     MessageLog.trace("Node name: \"" + sNode + "\"");
   *
   *     for (var j = 0; j < attrList.length; j++) {
   *         var wAttr = node.getAttr(sNode, 1, attrList[j]);
   *         if (wAttr.typeName() == "DOUBLE") {
   *             MessageLog.trace(" \"" + attrList[j] + "\"(" + wAttr.typeName() + ")");
   *             MessageLog.trace(wAttr.doubleValue());
   *         }
   *     }
   * }
   */
  public doubleValue(): double;

  /**
   * Fetches the double value from the Attribute at the specified frame.
   * This example prints just the double values from a list of attributes of a selected node.
   * @param {double} frame The frame number.
   * @returns {double}
   * @example
   * function printValue() {
   *     if (selection.numberOfNodesSelected() != 1) {
   *         MessageLog.trace("Please select only one node");
   *         return;
   *     }
   *     var sNode = selection.selectedNode(0);
   *     var attrList = getFlatAttrList(sNode);
   *
   *     MessageLog.trace("Node name: \"" + sNode + "\"");
   *
   *     for (var j = 0; j < attrList.length; j++) {
   *         var wAttr = node.getAttr(sNode, 1, attrList[j]);
   *         if (wAttr.typeName() == "DOUBLE") {
   *             MessageLog.trace(" \"" + attrList[j] + "\"(" + wAttr.typeName() + ")");
   *             //frame.current() is used here making it functionally identical to wAttr.doubleValue()
   *             MessageLog.trace(wAttr.doubleValueAt(frame.current()));
   *         }
   *     }
   * }
   */
  public doubleValueAt(frame: double): double;

  /**
   * Return the full keyword of the Attribute.
   * If the Attribute has a parent attribute, the full keyword will include it, where just keyword() will
   * not.
   * Full keywords are of the form "Parent.SubAttribute", whereas the keyword would be "SubAttribute".
   * @returns {string}
   */
  public fullKeyword(): string;

  /**
   * Returns a list of the sub attributes of the Attribute.
   * Sub attributes, or child attributes, are of the form "PARENT.CHILD", such as "POSITION.X".
   * @returns {QList<Attribute>}
   */
  public getSubAttributes(): QList<Attribute>;

  /**
   * Returns true if the Attribute has sub attributes.
   * This example prints the attributes of a drawing node that have sub attributes.
   * @returns {boolean}
   * @example
   * function printHasSubAttributes() {
   *     var sNode = selection.selectedNode(0);
   *
   *     if (node.type(sNode) == "READ") {
   *         var myAttr = node.getAttrList(sNode, frame.current(), "");
   *
   *         for (i = 0; i < myAttr.length; i++) {
   *             if (myAttr[i].hasSubAttributes()) {
   *                 MessageLog.trace("The attribute \"" + myAttr[i].name() + "\" has at least one sub attribute.");
   *             }
   *         }
   *     }
   * }
   */
  public hasSubAttributes(): boolean;

  /**
   * Fetches the integer value from the Attribute at the current frame.
   * This example prints just the integer values from a list of attributes of a selected node.
   * @returns {int}
   * @example
   * function printValue() {
   *     if (selection.numberOfNodesSelected() != 1) {
   *         MessageLog.trace("Please select only one node");
   *         return;
   *     }
   *     var sNode = selection.selectedNode(0);
   *     var attrList = getFlatAttrList(sNode);
   *
   *     MessageLog.trace("Node name: \"" + sNode + "\"");
   *
   *     for (var j = 0; j < attrList.length; j++) {
   *         var wAttr = node.getAttr(sNode, 1, attrList[j]);
   *         if (wAttr.typeName() == "INT") {
   *             MessageLog.trace(" \"" + attrList[j] + "\"(" + wAttr.typeName() + ")");
   *             MessageLog.trace(wAttr.intValue());
   *         }
   *     }
   * }
   */
  public intValue(): int;

  /**
   * Fetches the integer value from the Attribute at the specified frame.
   * This example prints just the integer values from a list of attributes of a selected node.
   * @param {double} frame The frame number.
   * @returns {int}
   * @example
   * function printValue() {
   *     if (selection.numberOfNodesSelected() != 1) {
   *         MessageLog.trace("Please select only one node");
   *         return;
   *     }
   *     var sNode = selection.selectedNode(0);
   *     var attrList = getFlatAttrList(sNode);
   *
   *     MessageLog.trace("Node name: \"" + sNode + "\"");
   *
   *     for (var j = 0; j < attrList.length; j++) {
   *         var wAttr = node.getAttr(sNode, 1, attrList[j]);
   *         if (wAttr.typeName() == "INT") {
   *             MessageLog.trace(" \"" + attrList[j] + "\"(" + wAttr.typeName() + ")");
   *             //frame.current() is used here making it functionally identical to wAttr.intValue()
   *             MessageLog.trace(wAttr.intValueAt(frame.current()));
   *         }
   *     }
   * }
   */
  public intValueAt(frame: double): int;

  /**
   * The keyword associated with the Attribute.
   * This example returns a list of all the attributes of a node, including all the sub attributes.
   * @returns {string}
   * @example
   * function getFlatAttrList(sNode, sAttr) {
   *     var subAttrs = node.getAttrList(sNode, frame.current(), sAttr);
   *     if (subAttrs.length == 0)
   *         return [sAttr];
   *     var subAttrList = [];
   *     for (var i = 0; i < subAttrs.length; i++) {
   *         var subAttrKeyword = (sAttr === undefined) ? subAttrs[i].keyword() :
   *             sAttr + "." + subAttrs[i].keyword();
   *         subAttrList = subAttrList.concat(getFlatAttrList(sNode, subAttrKeyword));
   *     }
   *     return subAttrList;
   * }
   */
  public keyword(): string;

  /**
   * The name of the Attribute.
   * This is the name as seen in the Layer Properties or Timeline views. The name of an Attribute is not
   * unique within an attribute set.
   * This example sets the 3d position of a drawing to the 3d point (5,10,0) using name() while iterating
   * through the list of attributes.
   * @returns {string}
   * @example
   * function moveDrawing() {
   *     var sNode = selection.selectedNode(0);
   *
   *     if (node.type(sNode) == "READ") {
   *         var myAttr = node.getAttrList(sNode, frame.current(), "");
   *         var position = new Point3d(5, 10, 0);
   *
   *         for (i = 0; i < myAttr.length; i++) {
   *             if (myAttr[i].name() == "Position") {
   *                 myAttr[i].setValue(position);
   *             }
   *         }
   *     }
   * }
   */
  public name(): string;

  /**
   * Fetches the Point2d value from the Attribute at the current frame.
   * This example prints just the Point2d values from a list of attributes of a selected node.
   * @returns {Point2d}
   * @example
   * function printValue() {
   *     if (selection.numberOfNodesSelected() != 1) {
   *         MessageLog.trace("Please select only one node");
   *         return;
   *     }
   *     var sNode = selection.selectedNode(0);
   *     var attrList = getFlatAttrList(sNode);
   *
   *     MessageLog.trace("Node name: \"" + sNode + "\"");
   *
   *     for (var j = 0; j < attrList.length; j++) {
   *         var wAttr = node.getAttr(sNode, 1, attrList[j]);
   *         if (wAttr.typeName() == "POSITION_2D") {
   *             MessageLog.trace(" \"" + attrList[j] + "\"(" + wAttr.typeName() + ")");
   *             MessageLog.trace(wAttr.pos2dValue(frame.current()));
   *         }
   *     }
   * }
   */
  public pos2dValue(): Point2d;

  /**
   * Fetches the Point2d value from the Attribute at the specified frame.
   * This example prints just the Point2d values from a list of attributes of a selected node.
   * @param {double} frame The frame number.
   * @returns {Point2d}
   * @example
   * function printValue() {
   *     if (selection.numberOfNodesSelected() != 1) {
   *         MessageLog.trace("Please select only one node");
   *         return;
   *     }
   *     var sNode = selection.selectedNode(0);
   *     var attrList = getFlatAttrList(sNode);
   *
   *     MessageLog.trace("Node name: \"" + sNode + "\"");
   *
   *     for (var j = 0; j < attrList.length; j++) {
   *         var wAttr = node.getAttr(sNode, 1, attrList[j]);
   *         if (wAttr.typeName() == "POSITION_2D") {
   *             MessageLog.trace(" \"" + attrList[j] + "\"(" + wAttr.typeName() + ")");
   *             //frame.current() is used here making it functionally identical to wAttr.pos2dValue()
   *             MessageLog.trace(wAttr.pos2dValueAt(frame.current()));
   *         }
   *     }
   * }
   */
  public pos2dValueAt(frame: double): Point2d;

  /**
   * Fetches the Point3d value from Attribute at current frame.
   * This example prints just the Point3d values from a list of attributes of a selected node.
   * @returns {Point3d}
   * @example
   * function printValue() {
   *     if (selection.numberOfNodesSelected() != 1) {
   *         MessageLog.trace("Please select only one node");
   *         return;
   *     }
   *     var sNode = selection.selectedNode(0);
   *     var attrList = getFlatAttrList(sNode);
   *
   *     MessageLog.trace("Node name: \"" + sNode + "\"");
   *
   *     for (var j = 0; j < attrList.length; j++) {
   *         var wAttr = node.getAttr(sNode, 1, attrList[j]);
   *         if (wAttr.typeName() == "POSITION_3D") {
   *             MessageLog.trace(" \"" + attrList[j] + "\"(" + wAttr.typeName() + ")");
   *             MessageLog.trace(wAttr.pos3dValueAt(frame.current()));
   *         }
   *     }
   * }
   */
  public pos3dValue(): Point3d;

  /**
   * Fetches the Point3d value from the Attribute at the specified frame.
   * This example prints just the Point3d values from a list of attributes of a selected node.
   * @param {double} frame The frame number.
   * @returns {Point3d}
   * @example
   * function printValue() {
   *     if (selection.numberOfNodesSelected() != 1) {
   *         MessageLog.trace("Please select only one node");
   *         return;
   *     }
   *     var sNode = selection.selectedNode(0);
   *     var attrList = getFlatAttrList(sNode);
   *
   *     MessageLog.trace("Node name: \"" + sNode + "\"");
   *
   *     for (var j = 0; j < attrList.length; j++) {
   *         var wAttr = node.getAttr(sNode, 1, attrList[j]);
   *         if (wAttr.typeName() == "POSITION_3D") {
   *             MessageLog.trace(" \"" + attrList[j] + "\"(" + wAttr.typeName() + ")");
   *             //frame.current() is used here making it functionally identical to wAttr.pos3dValue()
   *             MessageLog.trace(wAttr.pos3dValueAt(frame.current()));
   *         }
   *     }
   * }
   */
  public pos3dValueAt(frame: double): Point3d;

  /**
   * Return a list of possible text values this Attribute can have.
   * If the Attribute is an SCR_EnumAttributeWrapper or an SCR_ChoiceAttributeWrapper, it returns the
   * possible text values it can have.
   * @returns {StringList}
   */
  public possibleTextValues(): StringList;

  /**
   * Sets the value of the Attribute.
   * This example sets the 3d position of a drawing to the 3d point (5,10,0).
   * @param {QObject} value The QObject (such as Point3d or ColorRGBA) value to set the Attribute to.
   * @returns {void}
   * @example
   * function moveDrawing() {
   *     var sNode = selection.selectedNode(0);
   *
   *     if (node.type(sNode) == "READ") {
   *         var myAttr = node.getAttrList(sNode, frame.current(), "");
   *         var position = new Point3d(5, 10, 0);
   *
   *         for (i = 0; i < myAttr.length; i++) {
   *             if (myAttr[i].name() == "Position") {
   *                 myAttr[i].setValue(position);
   *             }
   *         }
   *     }
   * }
   */
  public setValue(value: QObject): void;

  /**
   * Sets the value of the Attribute.
   * This example sets the Pencil Lines Smoothing attribute of a drawing node to 100.
   * @param {int} value The integer value to set the Attribute to.
   * @returns {void}
   * @example
   * function setPencilLinesSmoothing() {
   *     var sNode = selection.selectedNode(0);
   *
   *     if (node.type(sNode) == "READ") {
   *         var myAttr = node.getAttrList(sNode, frame.current(), "");
   *
   *         for (i = 0; i < myAttr.length; i++) {
   *             if (myAttr[i].name() == "Pencil Lines Smoothing" && myAttr[i].typeName() == "INT") {
   *                 myAttr[i].setValue(100);
   *             }
   *         }
   *     }
   * }
   */
  public setValue(value: int): void;

  /**
   * Sets the value of the Attribute.
   * This example sets the Skew value of a drawing to 50 via the list of attributes of the selected node.
   * If the selected node is not a drawing node, it does nothing.
   * @param {double} value The double value to set the Attribute to.
   * @returns {void}
   * @example
   * function setSkew() {
   *     if (selection.numberOfNodesSelected() != 1) {
   *         MessageLog.trace("Please select only one node");
   *         return;
   *     }
   *     var sNode = selection.selectedNode(0);
   *     var attrList = getFlatAttrList(sNode);
   *
   *     for (var j = 0; j < attrList.length; j++) {
   *         var wAttr = node.getAttr(sNode, 1, attrList[j]);
   *         if (attrList[j] == "SKEW") {
   *             MessageLog.trace(" \"" + attrList[j] + "\"(" + wAttr.typeName() + ")");
   *             wAttr.setValue(50);
   *         }
   *     }
   * }
   */
  public setValue(value: double): void;

  /**
   * Sets the value of the Attribute.
   * This example flips a drawing horizontally.
   * @param {boolean} value The boolean value to set the Attribute to.
   * @returns {void}
   * @example
   * function moveDrawing() {
   *     var sNode = selection.selectedNode(0);
   *
   *     if (node.type(sNode) == "READ") {
   *         var myAttr = node.getAttrList(sNode, frame.current(), "");
   *
   *         for (i = 0; i < myAttr.length; i++) {
   *             if (myAttr[i].name() == "Flip Horizontal" && myAttr[i].typeName() == "BOOL") {
   *                 myAttr[i].setValue(!myAttr[i].boolValue());
   *             }
   *         }
   *     }
   * }
   */
  public setValue(value: boolean): void;

  /**
   * Sets the value of the Attribute.
   * This example changes the Palette Name attribute of a node. The composite node has this attribute.
   * @param {string} value The String value to set the Attribute to.
   * @returns {void}
   * @example
   * function setLocalName(newName) {
   *     var sNode = selection.selectedNode(0);
   *     var myAttr = node.getAttrList(sNode, frame.current(), "");
   *
   *     for (i = 0; i < myAttr.length; i++) {
   *         if (myAttr[i].name() == "Palette Name" && myAttr[i].typeName() == "STRING") {
   *             myAttr[i].setValue(newName);
   *         }
   *     }
   * }
   */
  public setValue(value: string): void;

  /**
   * @param {QObject} value
   * @param {double} frame
   * @returns {void}
   */
  public setValueAt(value: QObject, frame: double): void;

  /**
   * @param {int} value
   * @param {double} frame
   * @returns {void}
   */
  public setValueAt(value: int, frame: double): void;

  /**
   * @param {double} value
   * @param {double} frame
   * @returns {void}
   */
  public setValueAt(value: double, frame: double): void;

  /**
   * @param {boolean} value
   * @param {double} frame
   * @returns {void}
   */
  public setValueAt(value: boolean, frame: double): void;

  /**
   * @param {string} value
   * @param {double} frame
   * @returns {void}
   */
  public setValueAt(value: string, frame: double): void;

  /**
   * Fetches the String value from the Attribute at the current frame.
   * This example prints just the string values from a list of attributes of a selected node.
   * @returns {string}
   * @example
   * function printValue() {
   *     if (selection.numberOfNodesSelected() != 1) {
   *         MessageLog.trace("Please select only one node");
   *         return;
   *     }
   *     var sNode = selection.selectedNode(0);
   *     var attrList = getFlatAttrList(sNode);
   *
   *     MessageLog.trace("Node name: \"" + sNode + "\"");
   *
   *     for (var j = 0; j < attrList.length; j++) {
   *         var wAttr = node.getAttr(sNode, 1, attrList[j]);
   *         if (wAttr.typeName() == "STRING") {
   *             MessageLog.trace(" \"" + attrList[j] + "\"(" + wAttr.typeName() + ")");
   *             MessageLog.trace(wAttr.textValue());
   *         }
   *     }
   * }
   */
  public textValue(): string;

  /**
   * Fetches the String value from the Attribute at the specified frame.
   * This example prints just the string values from a list of attributes of a selected node.
   * @param {double} frame The frame number.
   * @returns {string}
   * @example
   * function printValue() {
   *     if (selection.numberOfNodesSelected() != 1) {
   *         MessageLog.trace("Please select only one node");
   *         return;
   *     }
   *     var sNode = selection.selectedNode(0);
   *     var attrList = getFlatAttrList(sNode);
   *
   *     MessageLog.trace("Node name: \"" + sNode + "\"");
   *
   *     for (var j = 0; j < attrList.length; j++) {
   *         var wAttr = node.getAttr(sNode, 1, attrList[j]);
   *         if (wAttr.typeName() == "STRING") {
   *             MessageLog.trace(" \"" + attrList[j] + "\"(" + wAttr.typeName() + ")");
   *             //frame.current() is used here making it functionally identical to wAttr.textValue()
   *             MessageLog.trace(wAttr.textValueAt(frame.current()));
   *         }
   *     }
   * }
   */
  public textValueAt(frame: double): string;

  /**
   * The typeName value associated with the Attribute type.
   * This example uses typeName to print just the boolean values from a list of attributes of a selected
   * node.
   * @returns {AttrValueType}
   * @example
   * function copyAttr(node1, node2, attrKeyword) {
   *     var attrList = getFlatAttrList(node1);
   *
   *     for (var j = 0; j < attrList.length; j++) {
   *         var wAttr = node.getAttr(sNode, 1, attrList[j]);
   *         if (wAttr.keyword() == attrKeyword) {
   *             node.createDynamicAttr(node2, wAttr.typeName(), wAttr.keyword(), wAttr.name(), true);
   *         }
   *     }
   * }
   */
  public typeName(): AttrValueType;
}

/**
 * The AttrState JavaScript class. Represents the state of an attribute associated to a given pose.
 * A AttrState is a snapshot of the state of an attribute. This class is opaque and should be
 * manipulated through a NodeState or RigState object.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classAttrState.html}
 * @example
 * //Create a snapshot of "Top/Master-P" position, rotation and scale node attributes at frames 1 and 9,
 * var pegDataA = new NodeState("Top/Master-P", 1, ["POSITION", "SCALE", "ROTATION"]);
 * for (var i = 0; i < pegDataA.getAttrCount(); ++i) {
 *     MessageLog.trace("  Attr:" + getAttr(i).keyword);
 * }
 */
declare class AttrState extends QObject {
  /**
   * @returns {string}
   */
  keyword: string;
}

/**
 * Base class for color and texture pots stored in palettes.
 * Also see Palette.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classBaseColor.html}
 */
declare class BaseColor extends QObject {
  /**
   * @param {string} n
   * @returns {void}
   */
  public setName(n: string): void;

  /**
   * Unique ID of the color.
   * @returns {string}
   */
  id: string;

  /**
   * If true, the color pot is a texture.
   * @returns {boolean}
   */
  isTexture: boolean;

  /**
   * Returns true if the color is valid.
   * @returns {boolean}
   */
  isValid: boolean;

  /**
   * The color pot name.
   * @returns {string}
   */
  name: string;
}

/**
 * The JavaScript class for manipulating colours. Can be created from a Palette object.
 * A Color object can be a solid colour, a linear gradient or a radial gradient.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classColor.html}
 * @example
 * var myColor = palette.createNewSolidColor("myColorName", ColorRGBA(120, 120, 120, 120);
 */
declare class Color extends BaseColor {
  /**
   * Set the rgba or gradient values of the colour.
   * @param {QVariant} v Is either an object for solid colours or an array of objects for gradients
   * @returns {void}
   * @example
   * var paletteList = PaletteObjectManager.getScenePaletteList();
   *
   * if (paletteList.numPalettes < 1)
   *     return;
   *
   * var myPalette = paletteList.getPaletteByIndex(0);
   *
   * if (myPalette.nColors < 1)
   *     return;
   *
   * var myColor = myPalette.getColorByIndex(0);
   * myColor.setColorData({
   *     r: 255,
   *     g: 0,
   *     b: 0,
   *     a: 255
   * });
   */
  public setColorData(v: QVariant): void;

  /**
   * @param {string} colorType One of the ColorType, ex: "SOLID_COLOR", "LINEAR_GRADIENT" or "RADIAL_GRADIENT"
   * @returns {void}
   */
  public setColorType(colorType: string): void;

  /**
   * @param {int} t A constant from the ColorType class.
   * @returns {void}
   */
  public setColorType(t: int): void;

  /**
   * The colour as either an object if the colour is solid or an array of objects if it is a gradient.
   * For example: The solid colour red:
   * The gradient colour going from red to green:
   * @returns {QVariant}
   * @example
   * {
   *     r: 255,
   *     g: 0,
   *     b: 0,
   *     a: 255
   * }
   */
  colorData: QVariant;

  /**
   * The type of colour can be: ColorType.SOLID_COLOR, ColorType.LINEAR_GRADIENT or
   * ColorType.RADIAL_GRADIENT.
   * @returns {int}
   */
  colorType: int;
}

/**
 * The JavaScript class for manipulating textures. Can be created from a Palette object.
 * Class for texture color pots. The texture bitmap is stored internally in the palette once the
 * texture color pot has been created.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classTexture.html}
 * @example
 * var myTexture = myPalette.createNewTexture("myTextureName", filename, false);
 */
declare class Texture extends BaseColor {
  /**
   * Will make a copy of the image and store it in the texture.
   * @param {QImage} image
   * @returns {void}
   */
  public setTextureBitmap(image: QImage): void;

  /**
   * Will load the file in a bitmap and make an internal copy.
   * @param {string} filename
   * @returns {void}
   */
  public setTextureFile(filename: string): void;

  /**
   * Set the tiling attribute.
   * @returns {void}
   */
  public setTiled(): void;

  /**
   * Will return a copy of the texture bitmap.
   * @returns {QImage}
   */
  bitmap: QImage;

  /**
   * Height of the texture. -1 if invalid texture.
   * @returns {int}
   */
  height: int;

  /**
   * True if the texture is tiled.
   * @returns {boolean}
   */
  tiled: boolean;

  /**
   * Width of the texture. -1 if invalid texture.
   * @returns {int}
   */
  width: int;
}

/**
 * The Cel JavaScript class. Adds file storage capabilities to cels.
 * A cel JavaScript object can be obtained by calling render::frameReady()
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classCel.html}
 */
declare class Cel extends QObject {
  /**
   * Retrieve allocated area of sparse image. Is equal to full area for non-sparse images.
   * @returns {QList<int>}
   */
  public allocatedRect(): QList<int>;

  /**
   * Convert cel colour space.
   * @param {string} fromColorSpace the name of the colour space to convert from.
   * @param {string} toColorSpace the name of the colour space to convert to.
   * @returns {boolean}
   * @example
   * function frameReady(frame, celImage) {
   *     MessageLog.trace("Frame " + frame + " Ready.");
   *     celImage.convertColorSpace("ACEScg", "Rec.2020");
   *
   *     // Save the image
   *     celImage.imageFile("c:/tmp/myimage" + frame + ".png");
   * }
   *
   * render.frameReady.connect(frameReady);
   * render.setRenderDisplay("Top/Display");
   * render.renderSceneAll();
   * render.frameReady.disconnect(frameReady);
   */
  public convertColorSpace(
    fromColorSpace: string,
    toColorSpace: string
  ): boolean;

  /**
   * Get a permanent copy of cel image file. This function without parameters is valid only for ports
   * that point to a physically valid file on disk.
   * @returns {FileWrapper}
   */
  public imageFile(): FileWrapper;

  /**
   * Get a permanent copy of cel image file of specific format.
   * @param {string} name Name of file to create
   * @returns {FileWrapper}
   */
  public imageFile(name: string): FileWrapper;

  /**
   * Get a permanent copy of cel image file of specific format.
   * @param {string} name Name of file to create
   * @param {string} formatstring Format to convert image into
   * @param {string} optionstring Image extension specific option (ie. TGA, TGA3, TGA4, SGIDP)
   * @returns {FileWrapper}
   */
  public imageFileAs(
    name: string,
    formatstring: string,
    optionstring: string
  ): FileWrapper;

  /**
   * @returns {boolean}
   */
  public isCel3D(): boolean;

  /**
   * Retrieve full area of image.
   * @returns {QList<int>}
   */
  public rect(): QList<int>;

  /**
   * Set wrapped cel as empty.
   * @returns {void}
   */
  public setEmpty(): void;

  /**
   * Get a temporary copy of cel image file.
   * @returns {FileWrapper}
   */
  public workingCopy(): FileWrapper;

  /**
   * Get a temporary copy of cel image file of specific format.
   * @param {string} ext Extension of image file to create
   * @param {string} [formatstring=""] Format to convert image into
   * @param {string} [optionstring=""] Image extension specific option
   * @returns {FileWrapper}
   */
  public workingCopyAs(
    ext: string,
    formatstring?: string,
    optionstring?: string
  ): FileWrapper;
}

/**
 * The JavaScript class for manipulating colour override nodes. Created from the node global object.
 * Used to get information about palettes associated to a colour override node, or to add or remove a
 * palette from the node.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classColorOverride.html}
 * @example
 * var myColorOverride = node.getColorOverride("Top/MyColorOverrideNode");
 */
declare class ColorOverride extends QObject {
  /**
   * Add an Individual Color Override with a specific mode, colour and texture filename.
   * Valid types include the following: RGB,
   *  ALPHA,
   *  RGBA,
   *  TEXTURE, TEX_GLOBAL_BBOX, TEX_GLOBAL_BBOX_CENTRE, TEX_LOCAL_BBOX, TEX_SCREEN, TEX_PENCIL_RGBA,
   * TEX_PENCIL_RGBA_COMBINE_MATRIX, TEX_PENCIL_MATRIX, TEX_PENCIL_COMBINE_MATRIX,
   * TEXTURE_DYNAMIC_CENTERING, TEXTURE_REPLACE_MATRIX, TEXTURE_COMBINE_MATRIX, TEX_PEG, TEX_DYNAMIC
   * An example of creating and extending a Colour-Override node.
   * @param {string} palettePath The palette path for the color to override.
   * @param {string} colorId
   * @param {QObject} newValue The new colour value to which the id is overridden � defined as a ColorRGBA object.
   * @param {string} mode The string that defines the color override mode.
   * @param {string} [texture=""] The file path for the texture.
   * @returns {int}
   * @example
   * var myColorOverride = node.getColorOverride("Top/MyColorOverrideNode");
   * myColorOverride.addColorOverride("palette-library/ScenePalette.plt", "0b5482a850701084", new ColorRGBA(255, 255, 255, 255), "RGBA", "");
   */
  public addColorOverride(
    palettePath: string,
    colorId: string,
    newValue: QObject,
    mode: string,
    texture?: string
  ): int;

  /**
   * Add a full palette path at the bottom of the list of whole palette overrides.
   * @param {string} path Path of this new palette override.
   * @returns {void}
   */
  public addPalette(path: string): void;

  /**
   * Clear the list of whole palette overrides.
   * @returns {void}
   */
  public clearPalettes(): void;

  /**
   * Returns the number of individual colour overrides.
   * @returns {int}
   */
  public getNumColorOverrides(): int;

  /**
   * Returns the number of whole palette overrides.
   * @returns {int}
   */
  public getNumPalettes(): int;

  /**
   * Returns the number of selected colours.
   * @returns {int}
   */
  public getNumSelectedColors(): int;

  /**
   * Get the override color of a color override entry on a node.
   * @param {int} index The index of the color override in the node's color override list.
   * @returns {ColorRGBA}
   */
  public getOverrideColor(index: int): ColorRGBA;

  /**
   * Get the override mode of a color override entry on a node.
   * @param {int} index The index of the color override in the node's color override list.
   * @returns {string}
   */
  public getOverrideMode(index: int): string;

  /**
   * Get the paletteId of a color override entry on a node.
   * @param {int} index The index of the color override in the node's color override list.
   * @returns {string}
   */
  public getOverridePaletteId(index: int): string;

  /**
   * Returns the full path (including name and extension) of the palette to which the override colour
   * belongs.
   * @param {int} index Index in the list of individual colour overrides.
   * @returns {string}
   */
  public getOverridePalettePath(index: int): string;

  /**
   * Returns the path of a texture file for the colour override at the specified position in the list.
   * @param {int} index Index in the list of individual colour overrides. Applies for one of the modes that references a texture.
   * @returns {string}
   */
  public getOverrideTexturePath(index: int): string;

  /**
   * Returns the full path (including name and extension) of the palette to which the selected colour
   * belongs.
   * @param {int} index Index in the list of selected colours.
   * @returns {string}
   */
  public getSelectedPalettePath(index: int): string;

  /**
   * Returns the full path (including name and extension) of the palette override at postion 'index'.
   * @param {int} index Index of the palette in the list of palette overrides.
   * @returns {string}
   */
  public palettePath(index: int): string;

  /**
   * Removes a specific color override at the given index.
   * @param {int} idx
   * @returns {boolean}
   */
  public removeColorOverride(idx: int): boolean;

  /**
   * Remove a palette with the supplied path from the list of whole palette overrides.
   * @param {string} path Path of this palette to remove.
   * @returns {void}
   */
  public removePalette(path: string): void;

  /**
   * Change the override color of a color override entry on a node.
   * @param {int} index The index of the color override in the node's color override list.
   * @param {QObject} newValue
   * @returns {boolean}
   * @example
   * var myColorOverride = node.getColorOverride("Top/MyColorOverrideNode");
   * myColorOverride.setOverrideColor(0, new ColorRGBA(255, 0, 0, 255));
   */
  public setOverrideColor(index: int, newValue: QObject): boolean;

  /**
   * Change the override mode of a color override entry on a node.
   * Valid types include the following: RGB, ALPHA, RGBA, TEXTURE, TEX_GLOBAL_BBOX,
   * TEX_GLOBAL_BBOX_CENTRE, TEX_LOCAL_BBOX, TEX_SCREEN, TEX_PENCIL_RGBA, TEX_PENCIL_RGBA_COMBINE_MATRIX,
   * TEX_PENCIL_MATRIX, TEX_PENCIL_COMBINE_MATRIX, TEXTURE_DYNAMIC_CENTERING, TEXTURE_REPLACE_MATRIX,
   * TEXTURE_COMBINE_MATRIX, TEX_PEG, TEX_DYNAMIC
   * @param {int} index The index of the color override in the node's color override list.
   * @param {string} mode The mode for the color override type.
   * @returns {boolean}
   * @example
   * var myColorOverride = node.getColorOverride("Top/MyColorOverrideNode");
   * myColorOverride.setOverrideMode(0, "RGBA");
   */
  public setOverrideMode(index: int, mode: string): boolean;

  /**
   * Change the paletteId of a color override entry on a node.
   * @param {int} index The index of the color override in the node's color override list.
   * @param {string} paletteId The palette ID of the color to override.
   * @returns {boolean}
   */
  public setOverridePaletteId(index: int, paletteId: string): boolean;

  /**
   * Sets the full path (including name and extension) of the palette to which the override colour
   * belongs.
   * @param {int} index Index in the list of individual colour overrides.
   * @param {string} path New path for the palette.
   * @returns {void}
   */
  public setOverridePalettePath(index: int, path: string): void;

  /**
   * Sets the path of a texture file for the colour override at the specified position in the list.
   * Applies for one of the modes that references a texture.
   * @param {int} index Index in the list of individual colour overrides.
   * @param {string} path Texture path.
   * @returns {void}
   */
  public setOverrideTexturePath(index: int, path: string): void;

  /**
   * Set the path (including name and extension) of the palette at position 'index'.
   * @param {int} index Index of the palette in the list of palette overrides.
   * @param {string} path New path of this palette override.
   * @returns {void}
   */
  public setPalettePath(index: int, path: string): void;

  /**
   * Sets the full path (including name and extension) of the palette to which the selected colour
   * belongs.
   * @param {int} index Index in the list of selected colours.
   * @param {string} path New path for the palette.
   * @returns {void}
   */
  public setSelectedPalettePath(index: int, path: string): void;
}

/**
 * The ColorRGBA JavaScript class. Represent an 8 bits per channel Red Green Blue Alpha colour.
 * The ColorRGBA class defines a four-dimensional container for colors. ColorRGBA objects can be
 * instantiated in the scripting environment.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classColorRGBA.html}
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
 * The JavaScript class for defining the different color types. Obtain it from Constants.
 * The constants can be used in Palette and Color methods.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classColorType.html}
 * @example
 * myPalette.createNewColor(PaletteObjectManager.Constants.ColorType.SOLID_COLOR, "myPaletteName", {
 *     r: 255,
 *     g: 0,
 *     b: 0,
 *     a: 255
 * });
 */
declare class ColorType extends QObject {
  /**
   * Represents a linear gradient color.
   * @returns {int}
   */
  LINEAR_GRADIENT: int;

  /**
   * Represents a radial gradient color.
   * @returns {int}
   */
  RADIAL_GRADIENT: int;

  /**
   * Represents a solid color.
   * @returns {int}
   */
  SOLID_COLOR: int;
}

/**
 * The JavaScript class for getting the composition information of a node. Obtain one from the
 * compositionOrder global object.
 * Represent a single entry in the composition order. The composition is an array of composition items.
 * Each item contains all the information for rebuilding the composition.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classCompositionItem.html}
 */
declare class CompositionItem extends QObject {
  /**
   * Number of children listed in the composition attached to node.
   * @returns {int}
   */
  public numChildren(): int;

  /**
   * Depth level of this node. Depths starts at zero for parent less node and increases for every level
   * of parent this node has.
   * @returns {int}
   */
  public depth(): int;

  /**
   * True when this node has a parent but the parent is not present in the composition. Some modules,
   * such as composite module, are never listed in the composition, however, they can be the parent of
   * some other modules that will be listed in the composition.
   * @returns {boolean}
   */
  isNodeBroken: boolean;

  /**
   * True when this node is a normal node and has a parent.
   * @returns {boolean}
   */
  isNodeNormal: boolean;

  /**
   * True when this node is a root (it has no parent).
   * @returns {boolean}
   */
  isNodeRoot: boolean;

  /**
   * Parent less node that is within a child group.
   * @returns {boolean}
   */
  isNodeSubnodeRoot: boolean;

  /**
   * The name of this node ( see node interface ).
   * @returns {string}
   */
  node: string;
}

/**
 * The JavaScript class for getting the constant colour and palette data. Obtain it from
 * PaletteObjectManager.
 * How to retrieve the palette locations:
 * How to get the colour type constants:
 * How to get the palette list type constants:
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classConstants.html}
 * @example
 * var envPath = PaletteObjectManager.Constants.Location.ENVIRONMENT;
 */
declare class Constants extends QObject {
  /**
   * Holds the constants to define the color types.
   * @returns {ColorType}
   */
  ColorType: ColorType;

  /**
   * Holds the constants to represent a palette location.
   * @returns {PaletteLocation}
   */
  Location: PaletteLocation;

  /**
   * @returns {PaletteListType}
   */
  PaletteListType: PaletteListType;
}

/**
 * The Controller JavaScript object. This object is available in Master Controller callback functions.
 * Controller is created and added to the scripting environment of the master controller and allows the
 * script running in that context to do a variety of tasks, such as:
 * The Controller object is only available in its callback functions like onShowControl or
 * onFrameChanged. However, it is possible to store a reference to it in the global scope of the Master
 * Controller script.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classController.html}
 * @example
 * var myController = Controller; // Capture the Controller
 * function sliderValueChanged(newSliderValue) {
 *     // Use the captured Controller here.
 *     var layerSpacing = node.getAttr(myController.node, frame.current(), "Layer_Spacing").doubleValue();
 *     repositionNodes(layerSpacing);
 * }
 *
 * // The Controller object is available in its callback functions.
 * Controller.onShowControl = function() {
 *     Controller.controls = [];
 *     Controller.controls.push(new SliderWidget({
 *         data: "myAttribute"
 *     }));
 *     Controller.controls.push(new SliderWidget({
 *         xmin: 4
 *     }));
 *     Controller.controls[0].valueChanged.connect(sliderValueChanged);
 * }
 *
 * Controller.onHideControl = function() {
 *     MessageLog("Number of controls " + Controller.controls.length);
 * }
 *
 * Controller.onFrameChanged = function() {
 *     // Synchronize the 2 sliders values on frame change.
 *     var value = node.getAttr(Controller.node, frame.current(), "myAttribute").doubleValue();
 *     Controller.controls[1].data().setValue(value);
 * }
 */
declare class Controller extends QObject {
  /**
   * The script widget array.
   * @returns {QScriptValue}
   * @example
   * Controller.controls = [];
   * Controller.controls.push(new SliderWidget());
   * Controller.controls.push(new SliderWidget());
   *
   * // Use the standard default value.
   * Controller.controls[0].data().setValue(25);
   * Controller.controls[1].data().setValue(60);
   */
  controls: QScriptValue;

  /**
   * @returns {QScriptValue}
   */
  data: QScriptValue;

  /**
   * The object type "__master_controller_object__".
   * @returns {string}
   */
  name: string;

  /**
   * The node path to the Master Controller node ex: "Top/MyMasterController".
   * @returns {string}
   * @example
   * var myController = Controller; // Capture the Controller to be able to use it elsewhere than in its callback functions.
   * function sliderValueChanged(newSliderValue) {
   *     var myOtherWidgetValue = node.getAttr(myController.node, frame.current(), "MyOtherSlider").doubleValue();
   *     // ...
   * }
   */
  node: string;

  /**
   * Called when the current frame of the application changes.
   * @returns {QScriptValue}
   * @example
   * Controller.onFrameChanged = function() {
   *     var value = 100 * (node.getAttr("Top/MyPeg", frame.current(), "POSITION.X").doubleValue() + 1) / 2;
   *     myController.controls[0].data().setValue(value);
   * }
   */
  onFrameChanged: QScriptValue;

  /**
   * Called when the user hides the Master Controller node controls.
   * @returns {QScriptValue}
   * @example
   * Controller.onHideControl = function() {
   *     MessageLog.trace("Hide the script widget");
   * }
   */
  onHideControl: QScriptValue;

  /**
   * Called when the current Master Controller node properties change.
   * @returns {QScriptValue}
   * @example
   * Controller.onNodeChanged = function() {
   *     var value = 100 * (node.getAttr("Top/MyPeg", frame.current(), "POSITION.X").doubleValue() + 1) / 2;
   *     myController.controls[0].data().setValue(value);
   * }
   */
  onNodeChanged: QScriptValue;

  /**
   * Called when the user shows the Master Controller node controls.
   * @returns {QScriptValue}
   * @example
   * Controller.onShowControl = function() {
   *     // Create the controls array
   *     Controller.controls = [];
   *
   *     // Create a 2d point widget.
   *     Controller.controls.push(new Point2dWidget());
   *     Controller.controls[0].valueChanged.connect(point2dValueChanged);
   * }
   */
  onShowControl: QScriptValue;
}

/**
 * The JavaScript class for getting or setting the model directory, the scan files and the default
 * camera name flags when copying. Obtain from the copyPaste global object.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classCopyOptions.html}
 * @example
 * var myCopyOptions = copyPaste.getCurrentCreateOptions();
 * myCopyOptions.addModelsDir = false;
 *
 * copyPaste.copy(selectionOfNodes, startFrame, numFrames, myCopyOptions);
 */
declare class CopyOptions extends QObject {
  /**
   * @returns {boolean}
   */
  addModelsDir: boolean;

  /**
   * @returns {boolean}
   */
  addScanFiles: boolean;

  /**
   * @returns {boolean}
   */
  defaultCameraName: boolean;
}

/**
 * The DateEditEnum JavaScript global object. Specifies the type of display order of day, month, year.
 * Use with DateEdit.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classDateEditEnum.html}
 * @example
 * widget.order = DateEditEnum.YDM;
 */
declare class DateEditEnum extends QObject {}

/**
 * The Dir JavaScript class. Interface to operating system Dir operations, e.g. mkdir, rmdir, rename,
 * etc.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classDir.html}
 * @example
 * var dir = new Dir;
 * dir.path = this._exportDir;
 * dir.mkdirs();
 */
declare class Dir extends QObject {
  /**
   * Construct a Dir from a directory path.
   * @param {string} path The path of a directory.
   * @returns {void}
   */
  constructor(path: string);

  /**
   * Get absolute file path for filename given in parameter.
   * @param {string} [file=""] The filename to get the absolute path of.
   * @returns {string}
   */
  public absFilePath(file?: string): string;

  /**
   * Changes the current directory to the given directory name.
   * @param {string} dirName The desired directory name.
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
   * @param {string} filter The filter to apply to the directories and files. Ex: "*.js" or "*" for all the content.
   * @param {int} [filterType=-1] (optional) The QDir (see Qt's QDir::Filters documentation) filter type. -1 by default
   * @param {int} [sortFlags=-1] (optional) The QDir (see Qt's QDir::SortFlags documentation) sort flags. -1 by default
   * @returns {StringList}
   * @example
   * var dir = new Dir;
   * dir.path = "c:/myscriptpath/";
   * var scriptsFiles = dir.entryList("*.js"); // retrieve every files with a ".js" extension from the directory c:/myscriptpath
   */
  public entryList(
    filter: string,
    filterType?: int,
    sortFlags?: int
  ): StringList;

  /**
   * Check if the file/folder exist.
   * @param {string} fileName The name of the file/folder.
   * @returns {boolean}
   */
  public fileExists(fileName: string): boolean;

  /**
   * Get file path for the current directory from the file parameter.
   * @param {string} [file=""] The filename to get the path of.
   * @returns {string}
   */
  public filePath(file?: string): string;

  /**
   * Create a directory with given name.
   * @param {string} [dirName=""] The name of the directory to be created.
   * @returns {void}
   */
  public mkdir(dirName?: string): void;

  /**
   * Create directory recursively if a path of a directory not yet created is given.
   * @param {string} [dirName=""] The name of the directory to be created.
   * @returns {void}
   * Note: Does not appear to work on Windows paths.
   */
  public mkdirs(dirName?: string): void;

  /**
   * Remove a file with the given name.
   * @param {string} fileName The name of the file to be removed.
   * @returns {void}
   */
  public remove(fileName: string): void;

  /**
   * Rename a file/folder with the name given to the new name.
   * @param {string} oldName The current name of the file.
   * @param {string} newName The desired name for the file.
   * @returns {void}
   */
  public rename(oldName: string, newName: string): void;

  /**
   * Remove a directory with given name.
   * @param {string} [dirName=""] The name of the directory to be removed.
   * @returns {void}
   */
  public rmdir(dirName?: string): void;

  /**
   * Remove directory recursively if a path of directory is given.
   * @param {string} [dirName=""] The name of the directory to be removed.
   * @returns {void}
   */
  public rmdirs(dirName?: string): void;

  /**
   * Sets the application's current working directory to path.
   * @returns {void}
   */
  public setCurrent(): void;

  /**
   * Returns the absolute path of the directory.
   * @returns {string}
   */
  absPath: string;

  /**
   * Returns the canonical path of the directory.
   * @returns {string}
   */
  canonicalPath: string;

  /**
   * Returns true if the directory exists.
   * @returns {boolean}
   */
  exists: boolean;

  /**
   * Returns the name of the directory.
   * @returns {string}
   */
  name: string;

  /**
   * Returns the path of the directory.
   * @returns {string}
   */
  path: string;

  /**
   * Returns true if the directory is readable.
   * @returns {boolean}
   */
  readable: boolean;
}

/**
 * The DirSpec JavaScript global object. Enum for directory operations.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classDirSpec.html}
 * @example
 * var myDirectorySpec = DirSpec.Dirs;
 */
declare class DirSpec extends QObject {}

/**
 * The JavaScript class for converting position from one coordinate system to another. Obtain it as a
 * parameter to the WidgetBase drag signals.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classDragContext.html}
 * @example
 * var drag_offset = new Vector3d;
 *
 * function onDragStart(context) {
 *     var projectedPoint = context.projectToModelPlane(context.dragPoint());
 *     var modelPickingPoint = context.multiplyByPostMatrix(projectedPoint);
 *     var modelOriginPoint = scene.toOGL(Point3d(getPosX(), getPosY(), getPosZ()));
 *
 *     drag_offset = modelOriginPoint.minus(modelPickingPoint);
 * }
 *
 * var drag_offsetZ = new Vector3d;
 *
 * function onDragStartZ(context) {
 *     var planeRotation = new Matrix4x4;
 *     planeRotation.rotateDegrees(90, Vector3d(0, 1, 0));
 *     context.transformModelMatrix(planeRotation);
 *
 *     var projectedPoint = context.projectToModelPlane(context.dragPoint());
 *
 *     var inversePlaneRotation = new Matrix4x4;
 *     inversePlaneRotation.rotateDegrees(-90, Vector3d(0, 1, 0));
 *     context.transformModelMatrix(inversePlaneRotation);
 *
 *     var modelPickingPoint = context.multiplyByPostMatrix(planeRotation.multiply(Point3d(projectedPoint.x, projectedPoint.y, 0)));
 *
 *     var modelOriginPoint = scene.toOGL(Point3d(getPosX(), getPosY(), getPosZ()));
 *     drag_offsetZ = modelOriginPoint.minus(modelPickingPoint);
 * }
 */
declare class DragContext extends QObject {
  /**
   * Return the picking point in world coordinates.
   * @returns {QObject}
   */
  public dragPoint(): QObject;

  /**
   * Multiply by the matrix of transformations associated with the script widgets registered after the
   * current one.
   * @param {QObject} modelPoint3d A Point3d in the context node model coordinates
   * @returns {QObject}
   */
  public multiplyByPostMatrix(modelPoint3d: QObject): QObject;

  /**
   * Project a given point in world coordinates to the screen and then back to the model plane.
   * @param {QObject} worldPoint3d A Point3d or Point2d (Point2d will have their z at 0) in world coordinates
   * @returns {QObject}
   */
  public projectToModelPlane(worldPoint3d: QObject): QObject;

  /**
   * Transform a given point in world coordinates to the model space.
   * Apply the model matrix of the camera chain to the world 3d point given as a parameter.If the input
   * is a 2d point, its z value is set to 0.
   * @param {QObject} worldPoint3d A Point2d or Point3d in world coordinates
   * @returns {QObject}
   */
  public transformFromWorldToModel(worldPoint3d: QObject): QObject;

  /**
   * Transform the camera chain model matrix.
   * @param {Matrix4x4} transformationMatrix The Matrix4x4 to apply to the model matrix.
   * @returns {QObject}
   */
  public transformModelMatrix(transformationMatrix: Matrix4x4): QObject;
}

/**
 * The JavaScript class representing a dragged object. Obtain from the copyPaste global object copy
 * method.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classDragObject.html}
 * @example
 * var myCopyOptions = copyPaste.getCurrentCreateOptions();
 * myCopyOptions.addModelsDir = false;
 *
 * var myDragObject = copyPaste.copy(selectionOfNodes, startFrame, numFrames, myCopyOptions);
 */
declare class DragObject extends QObject {
  /**
   * @returns {void}
   */
  constructor();

  /**
   * @param {DD_DragObject} dragObject
   * @returns {void}
   */
  constructor(dragObject: DD_DragObject);

  /**
   * @returns {DD_DragObject}
   */
  public dragObject(): DD_DragObject;
}

/**
 * The DrawingToolParams JavaScript class. Set or unset the "apply on all drawings" setting of the
 * DrawingTools methods.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classDrawingToolParams.html}
 * @example
 * var params = new DrawingToolParams;
 * params.applyAllDrawings = true;
 * DrawingTools.extractCenterline(DrawingTools.lineArt, DrawingTools.colourArt, params);
 */
declare class DrawingToolParams extends QObject {
  /**
   * @returns {boolean}
   */
  public applyAllDrawings(): boolean;

  /**
   * Called when progress updates. Emits signal "pulse".
   * @returns {void}
   */
  public canceled(): void;

  /**
   * Returns the maximum position that pulses will generate.
   * @returns {int}
   */
  public progress(): int;

  /**
   * @returns {int}
   */
  public range(): int;

  /**
   * @param {boolean} b
   * @returns {void}
   */
  public setApplyAllDrawings(b: boolean): void;

  /**
   * Sets the maximum position that pulses will generate.
   * @returns {void}
   */
  public setProgress(): void;

  /**
   * Returns the current progress update.
   * @returns {void}
   */
  public setRange(): void;

  /**
   * Signals cancelation of the processing.
   * @returns {boolean}
   */
  public wasCanceled(): boolean;

  /**
   * Returns true if a cancelation signal was received.
   * @returns {void}
   */
  public pulse: QSignal<() => void>;

  /**
   * @returns {boolean}
   */
  // /* Invalid - Duplicate property name */ applyAllDrawings: boolean;

  /**
   * @returns {int}
   */
  // /* Invalid - Duplicate property name */ progress: int;

  /**
   * @returns {int}
   */
  // /* Invalid - Duplicate property name */ range: int;

  /**
   * @returns {boolean}
   */
  // /* Invalid - Duplicate property name */ wasCanceled: boolean;
}

/**
 * The File JavaScript class. Open, close, read, write, get information about files.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classFile.html}
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
   * @param {string} filename The path to the file.
   * @returns {void}
   */
  constructor(filename: string);

  /**
   * Close the file.
   * @returns {void}
   */
  public close(): void;

  /**
   * Open the file with specific access mode.
   * @param {int} accessMode The specified access mode. See FileAccess for available modes.
   * @returns {void}
   */
  public open(accessMode: int): void;

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
   * Write a string in the file.
   * @param {string} data The data to be written to the file.
   * @param {int} [length=-1] The length of the data to be written.
   * @returns {void}
   */
  public write(data: string, length?: int): void;

  /**
   * Write a char in the file.
   * @param {int} byte The char to write to the file.
   * @returns {void}
   */
  public writeByte(byte: int): void;

  /**
   * Write a string in the file and go next line.
   * @param {string} data The data to be written to the file.
   * @returns {void}
   */
  public writeLine(data: string): void;

  /**
   * Base file name.
   * @returns {string}
   */
  baseName: string;

  /**
   * Date when the file was created.
   * @returns {QDateTime}
   */
  created: QDateTime;

  /**
   * File reach end.
   * @returns {boolean}
   */
  eof: boolean;

  /**
   * File executable flag.
   * @returns {boolean}
   */
  executable: boolean;

  /**
   * File exists.
   * @returns {boolean}
   */
  exists: boolean;

  /**
   * File extension.
   * @returns {string}
   */
  extension: string;

  /**
   * File name.
   * @returns {string}
   */
  fullName: string;

  /**
   * File hidden flag.
   * @returns {boolean}
   */
  hidden: boolean;

  /**
   * Date when the file was modified.
   * @returns {QDateTime}
   */
  lastModified: QDateTime;

  /**
   * Date when the file was read.
   * @returns {QDateTime}
   */
  lastRead: QDateTime;

  /**
   * File name.
   * @returns {string}
   */
  name: string;

  /**
   * File path.
   * @returns {string}
   */
  path: string;

  /**
   * File readable flag.
   * @returns {boolean}
   */
  readable: boolean;

  /**
   * Size of the file.
   * @returns {int}
   */
  size: int;

  /**
   * @returns {string}
   */
  symLink: string;

  /**
   * File writable flag.
   * @returns {boolean}
   */
  writable: boolean;
}

/**
 * The FileAccess JavaScript global object. Enum to define file operation.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classFileAccess.html}
 * @example
 * var file = new File(filePath);
 * f.open(FileAccess.ReadOnly);
 */
declare class FileAccess extends QObject {}

/**
 * The IO JavaScript global object. Enumerates the different types of stream behaviour the ImageFile
 * can take.
 * The FileIOType class enumerates the different types of stream behaviour the ImageFile can take. An
 * instance of this class is directly accessible through the scripting environment.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classFileIOType.html}
 */
declare class FileIOType extends QObject {}

/**
 * The PermanentFile and TemporaryFile JavaScript classes. Used to represent an actual image file on
 * disk.
 * Files can be instantiated in the scripting environment or retrieved in an SM_InputPortWrapper
 * object.
 * There are two possible constructors: the PermanentFile or TemporaryFile. The PermanentFile takes the
 * name of a file as an argument.
 * The TemporaryFile takes an extension as an argument, an returns a temporary file with that
 * extension. The temporary file and its containing directory will be deleted on exit.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classFileWrapper.html}
 * @example
 * file = new PermanentFile("C:\file.txt");
 *
 * file.open(IO.WRITE_ONLY); // open with write only stream
 * file.writeLine("Hello World!"); // write line to file
 * file.close(); // close file
 */
declare class FileWrapper extends QObject {
  /**
   * Create a new FileWrapper.
   * @returns {void}
   */
  constructor();

  /**
   * Create a new FileWrapper.
   * @param {string} path Path to physical FileWrapper
   * @returns {void}
   */
  constructor(path: string);

  /**
   * Gets the md5 hash representative of the full binary read of the file.
   * @returns {string}
   */
  public binaryHash(): string;

  /**
   * Closes the file stream.
   * @returns {boolean}
   */
  public close(): boolean;

  /**
   * Copy current FileWrapper to new FileWrapper destination.
   * @param {FileWrapper} dest The desired destination of the FileWrapper.
   * @returns {boolean}
   */
  public copy(dest: FileWrapper): boolean;

  /**
   * Verify if file exists on the disk.
   * @returns {boolean}
   */
  public exists(): boolean;

  /**
   * Retrieve file extension.
   * @returns {string}
   */
  public extension(): string;

  /**
   * Retrieves the file containing folder.
   * @returns {string}
   */
  public folder(): string;

  /**
   * Checks if the file is closed.
   * @returns {boolean}
   */
  public isClose(): boolean;

  /**
   * Check if file is opened.
   * @returns {boolean}
   */
  public isOpen(): boolean;

  /**
   * Gets the last modified date of the file.
   * @returns {string}
   */
  public lastModified(): string;

  /**
   * Moves the current FileWrapper to a new FileWrapper destination.
   * @param {FileWrapper} dest The desired destination of the FileWrapper.
   * @returns {boolean}
   */
  public move(dest: FileWrapper): boolean;

  /**
   * Opens the file stream for read/write.
   * @param {int} [m=int(FileIOType::WRITE_ONLY)] IO stream descriptor.
   * @returns {boolean}
   */
  public open(m?: int): boolean;

  /**
   * Retrieves the full file path.
   * @returns {string}
   */
  public path(): string;

  /**
   * Read entire content of stream.
   * @returns {string}
   */
  public read(): string;

  /**
   * Read single line of stream.
   * @returns {string}
   */
  public readLine(): string;

  /**
   * Remove physical file manually. Cannot remove file if there is an open stream.
   * @returns {boolean}
   */
  public remove(): boolean;

  /**
   * Change extension for file name. Extension won't change if there is an open stream.
   * @param {string} ext Extension String of image file.
   * @returns {FileWrapper}
   */
  public setExtension(ext: string): FileWrapper;

  /**
   * Specify absolute path of this image file. Name of file can not be changed if there is an open
   * stream.
   * @param {string} path Absolute path String of image file.
   * @returns {FileWrapper}
   */
  public setPath(path: string): FileWrapper;

  /**
   * Sets the codec for this file wrapper for the encoding specified by codecName. Common values for
   * codecName include "ISO 8859-1", "UTF-8", and "UTF-16".
   * @param {string} codecName the codec name
   * @returns {void}
   */
  public setTextCodec(codecName: string): void;

  /**
   * Write string in current stream.
   * @param {string} text Text to write.
   * @returns {void}
   */
  public write(text: string): void;

  /**
   * Write entire contents of the parameter file in the current stream.
   * @param {FileWrapper} file FileWrapper object.
   * @returns {void}
   */
  public writeFile(file: FileWrapper): void;

  /**
   * Write string line in current stream.
   * @param {string} text Text to write.
   * @returns {void}
   */
  public writeLine(text: string): void;
}

/**
 * The LayoutExport JavaScript class. Pop up a dialog, render layout and manage the export progress
 * bar.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classLayoutExport.html}
 */
declare class LayoutExport extends QObject {
  /**
   * Add a node to be rendered.
   * @param {LayoutExportParams} params The layout export parameters of the dialog when the dialog is closed. Passed as a reference.
   * @returns {boolean}
   */
  public addRender(params: LayoutExportParams): boolean;

  /**
   * Show the Layout Export dialog.
   * @param {LayoutExportParams} params The layout export parameters of the dialog when the dialog is closed. Passed as a reference.
   * @param {boolean} showExportMultiple Display the export multiple files checkbox.
   * @param {boolean} showImageSize Display the image size group of widget.
   * @param {string} dialogTitle The dialog's title
   * @returns {boolean}
   */
  public execDialog(
    params: LayoutExportParams,
    showExportMultiple: boolean,
    showImageSize: boolean,
    dialogTitle: string
  ): boolean;

  /**
   * Render the nodes.
   * @returns {void}
   */
  public flush(): void;

  /**
   * @returns {void}
   */
  public hideProgress(): void;

  /**
   * Get the path to the output files.
   * @param {LayoutExportParams} params
   * @returns {string}
   */
  public outputFilePath(params: LayoutExportParams): string;

  /**
   * @returns {boolean}
   */
  public progressCanceled(): boolean;

  /**
   * @param {LayoutExportParams} params
   * @returns {boolean}
   */
  public save(params: LayoutExportParams): boolean;

  /**
   * @param {LayoutExportParams} params
   * @returns {void}
   */
  public saveXli(params: LayoutExportParams): void;

  /**
   * @param {string} lbl
   * @returns {void}
   */
  public setProgressLabel(lbl: string): void;

  /**
   * @param {int} totalSteps
   * @returns {void}
   */
  public showProgress(totalSteps: int): void;

  /**
   * @param {int} progress
   * @returns {void}
   */
  public updateProgress(progress: int): void;
}

/**
 * The LayoutExportParams JavaScript class. Use a set parameters for the LayoutExport dialog.
 * Layout Export parameters
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classLayoutExportParams.html}
 * @example
 *  var le = new LayoutExport;
 *  var params = new LayoutExportParams;
 *
 *  //  Fetch export values from dialog
 *  if (le.execDialog(params, true, true, translator.tr("Export Layout Images from Selection")) == false)
 *      return;
 *
 *  if (le.save(params)) {
 *      le.saveXli(params);
 *      MessageLog.trace(le.outputFilePath(params) + " was successfully exported.");
 *  }
 */
declare class LayoutExportParams extends QObject {
  /**
   * @returns {double}
   */
  public borderScale(): double;

  /**
   * @returns {int}
   */
  public cameraScope(): int;

  /**
   * @returns {int}
   */
  public customScopeFirst(): int;

  /**
   * @returns {int}
   */
  public customScopeLast(): int;

  /**
   * @returns {boolean}
   */
  public exportAllCameraFrame(): boolean;

  /**
   * @returns {boolean}
   */
  public exportCameraFrame(): boolean;

  /**
   * @returns {boolean}
   */
  public exportCameraFrameLabel(): boolean;

  /**
   * @returns {string}
   */
  public exportedFrames(): string;

  /**
   * @returns {boolean}
   */
  public exportMultipleFiles(): boolean;

  /**
   * @returns {string}
   */
  public fileDirectory(): string;

  /**
   * @returns {string}
   */
  public fileFormat(): string;

  /**
   * @returns {string}
   */
  public filePattern(): string;

  /**
   * @returns {int}
   */
  public frame(): int;

  /**
   * @returns {boolean}
   */
  public keepColorCardVisible(): boolean;

  /**
   * @returns {boolean}
   */
  public keepLockedElementsVisible(): boolean;

  /**
   * @returns {string}
   */
  public keepVisible(): string;

  /**
   * @returns {string}
   */
  public layoutname(): string;

  /**
   * @returns {string}
   */
  public node(): string;

  /**
   * @returns {boolean}
   */
  public readColor(): boolean;

  /**
   * @returns {boolean}
   */
  public readLine(): boolean;

  /**
   * @returns {boolean}
   */
  public readOverlay(): boolean;

  /**
   * @returns {boolean}
   */
  public readUnderlay(): boolean;

  /**
   * @returns {boolean}
   */
  public renderStaticCameraAtSceneRes(): boolean;

  /**
   * @param {double} borderScale
   * @returns {void}
   */
  public setBorderScale(borderScale: double): void;

  /**
   * @param {int} i
   * @returns {void}
   */
  public setCameraScope(i: int): void;

  /**
   * @param {int} i
   * @returns {void}
   */
  public setCustomScopeFirst(i: int): void;

  /**
   * @param {int} i
   * @returns {void}
   */
  public setCustomScopeLast(i: int): void;

  /**
   * @param {boolean} b
   * @returns {void}
   */
  public setExportAllCameraFrame(b: boolean): void;

  /**
   * @param {boolean} b
   * @returns {void}
   */
  public setExportCameraFrame(b: boolean): void;

  /**
   * @param {boolean} b
   * @returns {void}
   */
  public setExportCameraFrameLabel(b: boolean): void;

  /**
   * @param {string} e
   * @returns {void}
   */
  public setExportedFrames(e: string): void;

  /**
   * @param {boolean} b
   * @returns {void}
   */
  public setExportMultipleFiles(b: boolean): void;

  /**
   * @param {string} fileDirectory
   * @returns {void}
   */
  public setFileDirectory(fileDirectory: string): void;

  /**
   * @param {string} fileFormat
   * @returns {void}
   */
  public setFileFormat(fileFormat: string): void;

  /**
   * @param {string} filePattern
   * @returns {void}
   */
  public setFilePattern(filePattern: string): void;

  /**
   * @param {int} i
   * @returns {void}
   */
  public setFrame(i: int): void;

  /**
   * @param {boolean} b
   * @returns {void}
   */
  public setKeepColorCardVisible(b: boolean): void;

  /**
   * @param {boolean} b
   * @returns {void}
   */
  public setKeepLockedElementsVisible(b: boolean): void;

  /**
   * @param {string} k
   * @returns {void}
   */
  public setKeepVisible(k: string): void;

  /**
   * @param {string} layoutname
   * @returns {void}
   */
  public setLayoutname(layoutname: string): void;

  /**
   * @param {string} node
   * @returns {void}
   */
  public setNode(node: string): void;

  /**
   * @param {boolean} b
   * @returns {void}
   */
  public setReadColor(b: boolean): void;

  /**
   * @param {boolean} b
   * @returns {void}
   */
  public setReadLine(b: boolean): void;

  /**
   * @param {boolean} b
   * @returns {void}
   */
  public setReadOverlay(b: boolean): void;

  /**
   * @param {boolean} b
   * @returns {void}
   */
  public setReadUnderlay(b: boolean): void;

  /**
   * @param {boolean} b
   * @returns {void}
   */
  public setRenderStaticCameraAtSceneRes(b: boolean): void;

  /**
   * @param {boolean} b
   * @returns {void}
   */
  public setWhiteBackground(b: boolean): void;

  /**
   * @param {double} zoomScale
   * @returns {void}
   */
  public setZoomScale(zoomScale: double): void;

  /**
   * @returns {boolean}
   */
  public whiteBackground(): boolean;

  /**
   * @returns {double}
   */
  public zoomScale(): double;

  /**
   * @returns {double}
   */
  // /* Invalid - Duplicate property name */ borderScale: double;

  /**
   * @returns {int}
   */
  // /* Invalid - Duplicate property name */ cameraScope: int;

  /**
   * @returns {int}
   */
  // /* Invalid - Duplicate property name */ customScopeFirst: int;

  /**
   * @returns {int}
   */
  // /* Invalid - Duplicate property name */ customScopeLast: int;

  /**
   * @returns {boolean}
   */
  // /* Invalid - Duplicate property name */ exportAllCameraFrame: boolean;

  /**
   * @returns {boolean}
   */
  // /* Invalid - Duplicate property name */ exportCameraFrame: boolean;

  /**
   * @returns {boolean}
   */
  // /* Invalid - Duplicate property name */ exportCameraFrameLabel: boolean;

  /**
   * @returns {string}
   */
  // /* Invalid - Duplicate property name */ exportedFrames: string;

  /**
   * @returns {boolean}
   */
  // /* Invalid - Duplicate property name */ exportMultipleFiles: boolean;

  /**
   * @returns {string}
   */
  // /* Invalid - Duplicate property name */ fileDirectory: string;

  /**
   * @returns {string}
   */
  // /* Invalid - Duplicate property name */ fileFormat: string;

  /**
   * @returns {string}
   */
  // /* Invalid - Duplicate property name */ filePattern: string;

  /**
   * @returns {int}
   */
  // /* Invalid - Duplicate property name */ frame: int;

  /**
   * @returns {boolean}
   */
  // /* Invalid - Duplicate property name */ keepColorCardVisible: boolean;

  /**
   * @returns {boolean}
   */
  // /* Invalid - Duplicate property name */ keepLockedElementsVisible: boolean;

  /**
   * @returns {string}
   */
  // /* Invalid - Duplicate property name */ keepVisible: string;

  /**
   * @returns {string}
   */
  // /* Invalid - Duplicate property name */ layoutname: string;

  /**
   * @returns {string}
   */
  // /* Invalid - Duplicate property name */ node: string;

  /**
   * @returns {boolean}
   */
  // /* Invalid - Duplicate property name */ readColor: boolean;

  /**
   * @returns {boolean}
   */
  // /* Invalid - Duplicate property name */ readLine: boolean;

  /**
   * @returns {boolean}
   */
  // /* Invalid - Duplicate property name */ readOverlay: boolean;

  /**
   * @returns {boolean}
   */
  // /* Invalid - Duplicate property name */ readUnderlay: boolean;

  /**
   * @returns {boolean}
   */
  // /* Invalid - Duplicate property name */ renderStaticCameraAtSceneRes: boolean;

  /**
   * @returns {boolean}
   */
  // /* Invalid - Duplicate property name */ whiteBackground: boolean;

  /**
   * @returns {double}
   */
  // /* Invalid - Duplicate property name */ zoomScale: double;
}

/**
 * The Matrix4x4 JavaScript class. Defines a four by four matrix container.
 * Matrix4x4 objects can be instantiated in the scripting environment.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classMatrix4x4.html}
 * @example
 * m = new Matrix4x4(); // create empty matrix
 * raxis = new Vector3d(0, 0, 1); // create new axis Vector3d
 * m.rotateDegrees(90, raxis); // rotate matrix 90 degrees on z axis
 * m.scale(2.0, 1.0, 2.0); // scale matrix non-uniformly
 */
declare class Matrix4x4 extends QObject {
  /**
   * Create a new empty Matrix4x4.
   * @returns {void}
   */
  constructor();

  /**
   * Retrieve axis from Matrix4x4.
   * @param {int} axisIndex Axis index 0 for the X axis, 1 for Y axis, 2 for Z axis.
   * @returns {Vector3d}
   */
  public axis(axisIndex: int): Vector3d;

  /**
   * Clear current Matrix4x4.
   * @returns {Matrix4x4}
   */
  public clear(): Matrix4x4;

  /**
   * Extract position from matrix.
   * @param {Point3d} [pivot=NULL]
   * @param {boolean} [force3d=false]
   * @returns {Point3d}
   */
  public extractPosition(pivot?: Point3d, force3d?: boolean): Point3d;

  /**
   * Extract rotation from matrix.
   * @param {Point3d} [pivot=NULL]
   * @param {boolean} [force3d=false]
   * @returns {Point3d}
   */
  public extractRotation(pivot?: Point3d, force3d?: boolean): Point3d;

  /**
   * Extract scale from matrix.
   * @param {Point3d} [pivot=NULL]
   * @param {boolean} [force3d=false]
   * @returns {Point3d}
   */
  public extractScale(pivot?: Point3d, force3d?: boolean): Point3d;

  /**
   * Extract skew from matrix.
   * @param {Point3d} [pivot=NULL]
   * @returns {double}
   */
  public extractSkew(pivot?: Point3d): double;

  /**
   * Invert current Matrix4x4.
   * @returns {Matrix4x4}
   */
  public getInverse(): Matrix4x4;

  /**
   * Transpose current Matrix4x4.
   * @returns {Matrix4x4}
   */
  public getTranspose(): Matrix4x4;

  /**
   * Invert current Matrix4x4.
   * @returns {Matrix4x4}
   */
  public inverse(): Matrix4x4;

  /**
   * Test if Matrix4x4 is empty.
   * @returns {boolean}
   */
  public isEmpty(): boolean;

  /**
   * Multiply current Matrix4x4 with specified Matrix4x4.
   * @param {Matrix4x4} m2 Second Matrix4x4
   * @returns {QObject}
   */
  public multiply(m2: Matrix4x4): QObject;

  /**
   * Multiply specified Point3d with current Matrix4x4.
   * @param {Point3d} p Point3d
   * @returns {Point3d}
   */
  public multiply(p: Point3d): Point3d;

  /**
   * Multiply specified Vector3d with current Matrix4x4.
   * @param {Vector3d} v Vector3d
   * @returns {QObject}
   */
  public multiply(v: Vector3d): QObject;

  /**
   * Multiply current Matrix4x4 with specified Matrix4x4.
   * @param {Matrix4x4} m2 Second Matrix4x4
   * @returns {Matrix4x4}
   */
  public multiplyEq(m2: Matrix4x4): Matrix4x4;

  /**
   * Normalize current Matrix4x4.
   * @returns {Matrix4x4}
   */
  public normalize(): Matrix4x4;

  /**
   * Retrieve Matrix4x4 origin.
   * @returns {Point3d}
   */
  public origin(): Point3d;

  /**
   * Calculate an orthogonal projection Matrix4x4.
   * @param {double} left Left volume value
   * @param {double} right Right volume value
   * @param {double} bottom Bottom volume value
   * @param {double} top Top volume value
   * @param {double} zNear Near volume value
   * @param {double} zFar Far volume value
   * @returns {Matrix4x4}
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
   * @param {double} left Left volume value
   * @param {double} right Right volume value
   * @param {double} bottom Bottom volume value
   * @param {double} top Top volume value
   * @param {double} zNear Near volume value
   * @param {double} zFar Far volume value
   * @returns {Matrix4x4}
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
   * @param {double} fovy Vertical field of view angle in radians
   * @param {double} ratio Screen ratio
   * @param {double} zNear Near clipping plane
   * @param {double} zFar Far clipping plane
   * @returns {Matrix4x4}
   */
  public perspectiveProject(
    fovy: double,
    ratio: double,
    zNear: double,
    zFar: double
  ): Matrix4x4;

  /**
   * @param {string} label
   * @returns {void}
   */
  public print(label: string): void;

  /**
   * Rotate current Matrix4x4.
   * @param {double} deg Angle in degrees
   * @param {Vector3d} v Axis of rotation
   * @returns {Matrix4x4}
   */
  public rotateDegrees(deg: double, v: Vector3d): Matrix4x4;

  /**
   * Rotate current Matrix4x4.
   * @param {Vector3d} v Axis of plane
   * @param {Point3d} p Center of plane
   * @returns {Matrix4x4}
   */
  public rotatePlane(v: Vector3d, p: Point3d): Matrix4x4;

  /**
   * Rotate current Matrix4x4.
   * @param {double} rad Angle in radians
   * @param {Vector3d} v Axis of rotation
   * @returns {Matrix4x4}
   */
  public rotateRadians(rad: double, v: Vector3d): Matrix4x4;

  /**
   * Scale current Matrix4x4.
   * @param {double} sx Scale value on x axis
   * @param {double} sy Scale value on y axis
   * @param {double} [sz=1.0] Scale value on z axis
   * @returns {Matrix4x4}
   */
  public scale(sx: double, sy: double, sz?: double): Matrix4x4;

  /**
   * Set matrix rotation from Euler angles.
   * @param {double} rx Euler Angle first component
   * @param {double} ry Euler Angle second component
   * @param {double} rz Euler Angle third component
   * @returns {Matrix4x4}
   */
  public setFromEulerAngles(rx: double, ry: double, rz: double): Matrix4x4;

  /**
   * Shear current Matrix4x4.
   * @param {double} sk Shear value
   * @returns {Matrix4x4}
   */
  public skew(sk: double): Matrix4x4;

  /**
   * Translate current Matrix4x4 with specified Vector3d.
   * @param {Vector3d} v Vector3d
   * @returns {Matrix4x4}
   */
  public translate(v: Vector3d): Matrix4x4;

  /**
   * Translate current Matrix4x4.
   * @param {double} dx Translation distance on x axis
   * @param {double} dy Translation distance on y axis
   * @param {double} [dz=0.0] Translation distance on z axis
   * @returns {Matrix4x4}
   */
  public translate(dx: double, dy: double, dz?: double): Matrix4x4;

  /**
   * Transpose current Matrix4x4.
   * @returns {Matrix4x4}
   */
  public transpose(): Matrix4x4;

  /**
   * Retrieve single value from Matrix4x4.
   * @param {int} row Row value
   * @param {int} column Column value
   * @returns {double}
   */
  public value(row: int, column: int): double;

  /**
   * 1st row and 1st column value
   * @returns {double}
   */
  m00: double;

  /**
   * 1st row and 2nd column value
   * @returns {double}
   */
  m01: double;

  /**
   * 1st row and 3rd column value
   * @returns {double}
   */
  m02: double;

  /**
   * 1st row and 4th column value
   * @returns {double}
   */
  m03: double;

  /**
   * 2nd row and 1st column value
   * @returns {double}
   */
  m10: double;

  /**
   * 2nd row and 2nd column value
   * @returns {double}
   */
  m11: double;

  /**
   * 2nd row and 3rd column value
   * @returns {double}
   */
  m12: double;

  /**
   * 2nd row and 4th column value
   * @returns {double}
   */
  m13: double;

  /**
   * 3rd row and 1st column value
   * @returns {double}
   */
  m20: double;

  /**
   * 3rd row and 2nd column value
   * @returns {double}
   */
  m21: double;

  /**
   * 3rd row and 3rd column value
   * @returns {double}
   */
  m22: double;

  /**
   * 3rd row and 4th column value
   * @returns {double}
   */
  m23: double;

  /**
   * 4th row and 1st column value
   * @returns {double}
   */
  m30: double;

  /**
   * 4th row and 2nd column value
   * @returns {double}
   */
  m31: double;

  /**
   * 4th row and 3rd column value
   * @returns {double}
   */
  m32: double;

  /**
   * 4th row and 4th column value
   * @returns {double}
   */
  m33: double;
}

/**
 * The Model3d JavaScript class.
 * A Model3d is used to get information about a 3d Model.
 * A 3d Model is represented in Harmony by a tree structure of Subnodes that each contain an element of
 * the model. This tree can be seen in the 3D Graph View. A Model3d object can be used to retrieve
 * information about this tree structure and about each of the Subnodes within the tree.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classModel3d.html}
 */
declare class Model3d {
  /**
   * Creates a new Model3d object.
   * @param {string} nodeName The name of the node corresponding to the 3d Model. This can also be a SubnodeTransformation node.
   * @param {double} frame The frame number.
   * @returns {void}
   */
  constructor(nodeName: string, frame: double);

  /**
   * Returns an array of all of a subnode's children.
   * A subnodes children are the subnodes one level below it in the tree structure.
   * @param {string} subnodeName The subnode to get the children of.
   * @returns {QScriptValue}
   */
  public children(subnodeName: string): QScriptValue;

  /**
   * Returns a Matrix4x4 representing the transformations done up to and including the subnode in the
   * parameter.
   * @param {string} subnodeName The name of the subnode to get the transformations of.
   * @returns {Matrix4x4}
   */
  public computeMatrix(subnodeName: string): Matrix4x4;

  /**
   * Returns an array of objects representing the tree structure of the 3d Model.
   * The array is filled with objects of the form { Name : "string", Children : [array of objects] }
   * Where the Name is the name of the subnode, and Children is an array of objects of the same form as
   * it (with a name and array of children). The returned array has 1 element for each of the root nodes.
   * For example, in the case of a very simple 3d Model, with one root subnode named "Root", that has 2
   * children, "Child1" and "Child2", this will return an array like this:
   * @returns {QScriptValue}
   * @example
   * [{
   *     Name: "Root",
   *     Children: [{
   *         Name: "Child1",
   *         Children: []
   *     }, {
   *         Name: "Child2",
   *         Children: []
   *     }]
   * }]
   */
  public graph(): QScriptValue;

  /**
   * Returns the name of a subnode's parent subnode.
   * A subnode's parent is the subnode one level above it in the tree structure.
   * @param {string} subnodeName The subnode to get the parent of.
   * @returns {string}
   */
  public parent(subnodeName: string): string;

  /**
   * Returns the root(s) of the 3d Model's tree structure.
   * @returns {QScriptValue}
   */
  public root(): QScriptValue;
}

/**
 * The NodeState JavaScript class. Represents the state of a node for a given pose.
 * A NodeState is a snapshot of the state of a node and of its selected attributes. This snapshot can
 * be stored, blended, and applied to a scene destination frame. It aims at making it easier to
 * manipulate node data by offering a simple, high-level interface to represent the state of a node.
 * Internally, a NodeState object contains a list of attributes with their values for a given pose or
 * frame number.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classNodeState.html}
 * @example
 * //Create a snapshot of "Top/Master-P" position, rotation and scale node attributes at frames 1 and 9,
 * var pegDataA = new NodeState("Top/Master-P", 1, ["POSITION", "SCALE", "ROTATION"]);
 * var pegDataB = new NodeState("Top/Master-P", 9, ["POSITION", "SCALE", "ROTATION"]);
 * //Create a new blended NodeState with a ratio of 25% for pegDataA and 75% for pegDataB
 * var interpolatedData = pegDataA.interpolate(0.75, pegDataB);
 * //Apply the result to "Top/Master-P" on frame 4
 * interpolatedData.applyState(4);
 */
declare class NodeState extends QObject {
  /**
   * Apply the values of the current NodeState snapshot to the scene, at the specified frame.
   * The example below transfers ["POSITION", "SCALE", "ROTATION"] properties of node "Top/Master-P" from
   * frame 1 to frame 20.
   * @param {int} frameNo The destination frame number, where the NodeState snapshot values are applied.
   * @returns {void}
   * @example
   * var pegData = new NodeState("Top/Master-P", 1, ["POSITION", "SCALE", "ROTATION"]);
   * pegData.applyState(20);
   */
  public applyState(frameNo: int): void;

  /**
   * Get a copy of the AttrState contained in the current NodeState object at the specified index.
   * This example creates a NodeState containing position, scale and rotation attributes of
   * "Top/Master-P" node. It then returns the AttrState for the second attribute (scale)
   * @param {int} index The index of the AttrState to retrieve. Must be within [0-getAttrCount[.
   * @returns {AttrState}
   * @example
   * var pegData = new NodeState("Top/Master-P", 1, ["POSITION", "SCALE", "ROTATION"]);
   * var scaleAttrState = pegData.getAttr(1);
   */
  public getAttr(index: int): AttrState;

  /**
   * Get the attribute count tracked by this NodeState.
   * This example creates a RigState from the "Top" group, then gets the first NodeState from it and
   * displays its attribute count.
   * @returns {int}
   * @example
   * var rigState = new RigState("Entire rig", 15, "Top");
   * var nodeState = rigState.getNodeState(0);
   * var attrCount = nodeState.getAttrCount();
   * MessageLog.trace("Node state \"Top/Master-P\" tracks " + attrCount + " attributes.");
   */
  public getAttrCount(): int;

  /**
   * Create a new NodeState, by linearly interpolating the current one with the other one given in
   * argument.
   * The example below interpolates poseA with poseB, giving a weight of 25% to state A and 75% to state
   * B.
   * @param {float} a The normalized weight given to state b.
   * @param {NodeState} b The state to interpolate the current one with (node and attributes must match)
   * @returns {NodeState}
   * @example
   * var pegDataA = new NodeState("Top/Master-P", 1, ["POSITION", "SCALE", "ROTATION"]);
   * var pegDataB = new NodeState("Top/Master-P", 9, ["POSITION", "SCALE", "ROTATION"]);
   * var interpolatedData = pegDataA.interpolate(0.75, pegDataB);
   */
  public interpolate(a: float, b: NodeState): NodeState;

  /**
   * Create a new NodeState, by performing a bilinear interpolation of the current one with the 3 other
   * ones given in argument.
   * The example below illustrates the long and short way to perform a bilinear interpolation.
   * @param {float} u First axis interpolation weight
   * @param {float} v Second axis interpolation weight
   * @param {NodeState} b The second NodeState of the bilinear interpolation
   * @param {NodeState} c The third NodeState of the bilinear interpolation
   * @param {NodeState} d The fourth NodeState of the bilinear interpolation
   * @returns {NodeState}
   * @example
   * var u = 0.3;
   * var v = 0.8;
   * var stateA = new NodeState("Top/Master-P", 1, ["POSITION", "SCALE", "ROTATION"]);
   * var stateB = new NodeState("Top/Master-P", 2, ["POSITION", "SCALE", "ROTATION"]);
   * var stateC = new NodeState("Top/Master-P", 3, ["POSITION", "SCALE", "ROTATION"]);
   * var stateD = new NodeState("Top/Master-P", 4, ["POSITION", "SCALE", "ROTATION"]);
   * //Long version
   * var interpolatedStateAB = stateA.interpolate(u, stateB);
   * var interpolatedStateCD = stateC.interpolate(u, stateD);
   * var interpolatedStateABCD_long = interpolatedStateAB.interpolate(v, interpolatedStateCD);
   * //Shorter version
   * var interpolatedStateABCD_quick = stateA.interpolate2d(u, v, stateB, stateC, stateD);
   */
  public interpolate2d(
    u: float,
    v: float,
    b: NodeState,
    c: NodeState,
    d: NodeState
  ): NodeState;

  /**
   * Restore a NodeState from a previously generated NodeState string representation.
   * This example creates a string representation .
   * @param {string} sData The string containing the NodeState data.
   * @param {int} nPos The start index in the string (typicaly zero)
   * @param {string} sRelativePath The qualified name of the root character group (optional). When provided, this argument makes it possible to adjust data generated from a character group that was renamed.
   * @returns {int}
   * @example
   * //Create a snapshot of "Top/Master-P" position, rotation and scale node attributes at frames 1 and 9,
   * var pegDataA = new NodeState("Top/Master-P", 1, ["POSITION", "SCALE", "ROTATION"]);
   * var dataString = pegDataA.toString("");
   * var restoredState = new NodeState();
   * restoredState.loadFromString(dataString, 0, "");
   */
  public loadFromString(sData: string, nPos: int, sRelativePath: string): int;

  /**
   * Generate a string representation of the current NodeState data.
   * This example creates a new node state, generates the string representation and saves the data to a
   * file.
   * @param {string} sRelativePath (optional) : The qualified name of the root character group (optional). When provided, node paths are stored relative to this group, making it possible to rename or move the character group node without invalidating the data.
   * @returns {string}
   * @example
   * //Create a snapshot of "Top/Master-P" position, rotation and scale node attributes at frames 1 and 9,
   * var pegDataA = new NodeState("Top/Master-P", 1, ["POSITION", "SCALE", "ROTATION"]);
   * var dataString = pegDataA.toString("Top");
   * MessageLog.trace("dataString=" + dataString);
   */
  public toString(sRelativePath: string): string;

  /**
   * The qualified name of the node associated with the current NodeState object.
   * @returns {string}
   */
  sNodePath: string;
}

/**
 * The JavaScript class providing information about a specific palette.
 * A Palette object can be obtained from PaletteList methods like getPaletteByIndex, getPaletteById or
 * createPalette or from the PaletteObjectManager method getPalette. The Palette class defines a
 * palette of colours. It provides access to functionalities of palettes like:
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classPalette.html}
 * @example
 * var paletteList = PaletteObjectManager.getPaletteListByElementId(elementId);
 * for (var j = 0; j < paletteList.numPalettes; ++j) {
 *     var myPalette = paletteList.getPaletteByIndex(j);
 *     var path = myPalette.getPath() + "/" + myPalette.getName();
 * }
 */
declare class Palette extends QObject {
  /**
   * Move a color to this palette.
   * Will remove the colour from its original palette and move it to this one. Returns false if the
   * colour is invalid or if this is the same palette as the current colour palette. If this palette has
   * a colour with the same colour ID as the source colour, it will return false also.
   * @param {BaseColor} color The colour to be acquired.
   * @returns {boolean}
   */
  public acquire(color: BaseColor): boolean;

  /**
   * Create a clone of a colour object - this colorID is identical to original colour.
   * Will create a copy of the colour with all the same values including the colorID. The source must be
   * from another palette otherwise it will return an invalid color.
   * @param {BaseColor} source The source colour to be cloned.
   * @returns {BaseColor}
   */
  public cloneColor(source: BaseColor): BaseColor;

  /**
   * Create a clone of a colour object - resolve the potential ID conflict by either cloning or
   * duplicating the colour.
   * This version allow you to specify whether to replace an already existing color when cloning the
   * palette.
   * @param {BaseColor} source The source colour to be cloned.
   * @param {boolean} replaceOnIDConflict True to replace an already existing colour when cloning the palette.
   * @returns {BaseColor}
   */
  public cloneColor(source: BaseColor, replaceOnIDConflict: boolean): BaseColor;

  /**
   * Returns true if this palette contains a colour used in a drawing in the scene.
   * @param {QScriptValue} colors An array of color ids used in the scene.
   * @returns {boolean}
   * @example
   * function checkContainsUsedColors(nodeName) {
   *     //nodeName is the full path of a node, such as "Top/Group_Name/Node_Name"
   *     var layerName = node.getTextAttr(nodeName, 1, "drawing.element.layer");
   *     var elementId = node.getElementId(nodeName);
   *     var colorList = [];
   *     for (var j = 0; j < Drawing.numberOf(elementId); j++) {
   *         var drawingId = Drawing.name(elementId, j);
   *         var drawingKey = Drawing.Key({
   *             elementId: elementId,
   *             layer: layerName,
   *             exposure: drawingId
   *         });
   *         var currentList = DrawingTools.getDrawingUsedColors(drawingKey);
   *         for (var i in currentList) {
   *             colorList.push(currentList[i]);
   *         }
   *     }
   *
   *     var list = PaletteObjectManager.getScenePaletteList();
   *     for (var i = 0; i < list.numPalettes; i++) {
   *         var palette = list.getPaletteByIndex(i);
   *
   *         MessageLog.trace(palette.getName());
   *         MessageLog.trace(palette.containsUsedColors(colorList));
   *     }
   * }
   */
  public containsUsedColors(colors: QScriptValue): boolean;

  /**
* Create a new colour of a given type.
* @param {int} colorType colorType can be:
ColorType.SOLID_COLOR
ColorType.LINEAR_GRADIENT
ColorType.RADIAL_GRADIENT
* @param {string} name The name of the colour to be created.
* @param {QVariant} colorData Depending on the value of colorType argument, colorData has to be either an array of objects or an object. If the colorType argument is SOLID_COLOR, the colorData must be an object defined like this: { r : 255, g: 0, b: 0, a : 255 } to represent a solid red colour. If the colorType argument is one of the gradients, there must be an array of objects, one for each gradient tack. For example: [ { r : 255, g: 0, b: 0, a : 255, t: 0 }, { r : 0, g: 0, b: 255, a : 255, t: 1 } ] would define a gradient going from red to blue. The t parameter in each object represents the tack position and is a double value going from 0 to 1.
* @returns {Color}
*/
  public createNewColor(
    colorType: int,
    name: string,
    colorData: QVariant
  ): Color;

  /**
   * Create a new linear gradient colour.
   * Same as createNewColor(ColorType.LINEAR_GRADIENT, name, colorData);
   * @param {string} name The name of the colour to be created.
   * @param {QVariant} colorData colorData must be an array of objects, one for each gradient tack. For example: [ { r : 255, g: 0, b: 0, a : 255, t: 0 }, { r : 0, g: 0, b: 255, a : 255, t: 1 } ] would define a gradient going from red to blue. The t parameter in each object represents the tack position and is a double value going from 0 to 1.
   * @returns {Color}
   */
  public createNewLinearGradientColor(name: string, colorData: QVariant): Color;

  /**
   * Create a new radial gradient colour.
   * Same as createNewColor(ColorType.RADIAL_GRADIENT, name, colorData);
   * @param {string} name The name of the colour to be created.
   * @param {QVariant} colorData colorData must be an array of objects, one for each gradient tack. For example: [ { r : 255, g: 0, b: 0, a : 255, t: 0 }, { r : 0, g: 0, b: 255, a : 255, t: 1 } ] would define a gradient going from red to blue. The t parameter in each object represents the tack position and is a double value going from 0 to 1.
   * @returns {Color}
   */
  public createNewRadialGradientColor(name: string, colorData: QVariant): Color;

  /**
   * Create a new solid colour.
   * Same as createNewColor(ColorType.SOLID_COLOR, name, colorData);
   * @param {string} name The name of the colour to be created.
   * @param {QVariant} colorData colorData must be an object defined like this example: { r : 255, g: 0, b: 0, a : 255 } which represents a solid red colour.
   * @returns {Color}
   */
  public createNewSolidColor(name: string, colorData: QVariant): Color;

  /**
   * Create a new texture colour object.
   * Creates a texture pot. Copies the bitmap file internally to the palette.
   * @param {string} name The name of the texture to be created.
   * @param {string} filename The name of the file to be turned into a texture.
   * @param {boolean} tiled Whether or not the texture will be tiled or not.
   * @returns {Texture}
   */
  public createNewTexture(
    name: string,
    filename: string,
    tiled: boolean
  ): Texture;

  /**
   * Create a new texture from a QImage object (may not be done from the script).
   * Creates a texture pot. Will copy the bitmap data internally to the palette.
   * @param {string} name The name of the texture to be created.
   * @param {QImage} bitmap The bitmap to be turned into a texture.
   * @param {boolean} tiled Whether or not the texture will be tiled or not.
   * @returns {Texture}
   */
  public createNewTexture(
    name: string,
    bitmap: QImage,
    tiled: boolean
  ): Texture;

  /**
   * Create a duplicate of a colour object - this colorID is unique.
   * Creates a copy of the colour with all the same values as source except for the colorID which will be
   * a new uniqueID.
   * @param {BaseColor} source The source colour to be duplicated.
   * @returns {BaseColor}
   */
  public duplicateColor(source: BaseColor): BaseColor;

  /**
   * Returns the colour found by the given Id. If the colour is not found, the isValid property will be
   * false.
   * @param {string} uniqueId The id of the colour.
   * @returns {BaseColor}
   */
  public getColorById(uniqueId: string): BaseColor;

  /**
   * Returns the colour found at the given index. Returns an invalid colour if the index is out of bound
   * or otherwise invalid.
   * @param {int} index The zero based index of the colour.
   * @returns {BaseColor}
   */
  public getColorByIndex(index: int): BaseColor;

  /**
   * Try to obtain the database lock. Return true on success, and false on failure. The lock will be held
   * until it is released in script or the ui. Safe to call multiple time to get the lock state.
   * @returns {boolean}
   */
  public getLock(): boolean;

  /**
   * Returns the name of this palette. The extension (".plt") is not included.
   * @returns {string}
   */
  public getName(): string;

  /**
   * Returns the folder in which this palette is located.
   * @returns {string}
   */
  public getPath(): string;

  /**
   * Returns whether the palette is a colour palette.
   * @returns {boolean}
   */
  public isColorPalette(): boolean;

  /**
   * Returns true if the palette was successfully loaded from the disk.
   * @returns {boolean}
   */
  public isLoaded(): boolean;

  /**
   * Returns true if the palette was found at the location specified by the path and name.
   * @returns {boolean}
   */
  public isNotFound(): boolean;

  /**
   * Returns whether the palette is a texture palette.
   * @returns {boolean}
   */
  public isTexturePalette(): boolean;

  /**
   * Returns true if the palette object is valid.
   * @returns {boolean}
   */
  public isValid(): boolean;

  /**
   * Moves a colour at the specified index.
   * Moves the colour at given index just before the colour at beforeIndex in the list. Moves the colour
   * at the end if beforeIndex is -1.
   * @param {int} index The index of the colour to be moved.
   * @param {int} beforeIndex The index of the colour that the color will be moved before.
   * @returns {boolean}
   */
  public moveColor(index: int, beforeIndex: int): boolean;

  /**
   * Release access to the palette. Other users will be able to obtain the access rights to the palette.
   * @returns {boolean}
   */
  public releaseLock(): boolean;

  /**
   * Delete a colour from the palette.
   * Permanently delete a colour.
   * @param {string} uniqueId The uniqueID of the colour to be removed.
   * @returns {boolean}
   */
  public removeColor(uniqueId: string): boolean;

  /**
   * Sets the name of the palette.
   * @param {string} name The new name of the palette.
   * @returns {void}
   */
  public setName(name: string): void;

  /**
   * Sets the type of the palette to be a colour palette.
   * @returns {void}
   */
  public setToColorPalette(): void;

  /**
   * Sets the type of the palette to be a texture palette.
   * @returns {void}
   */
  public setToTexturePalette(): void;

  /**
   * Returns the element id in which the palette is stored if location is PaletteLocation ELEMENT.
   * Returns -1 if the palette is not stored in an element.
   * @returns {int}
   */
  elementId: int;

  /**
   * The palette ID of this palette.
   * @returns {string}
   */
  id: string;

  /**
   * Returns one of the PaletteLocation constants or -1 if the palette is invalid.
   * @returns {int}
   */
  location: int;

  /**
   * Number of colours in this palette.
   * @returns {int}
   */
  nColors: int;
}

/**
 * The JavaScript class providing information about a palette list. Obtain from PaletteObjectManager
 * methods like getPaletteListByElementId, getScenePaletteList or getPaletteListById.
 * Defines a collection of palettes.
 * Provides access to some of the standard functionality of palette lists. Some methods change the
 * state of the palette list. If the database access lock cannot be obtained, they will throw a
 * javascript exception.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classPaletteList.html}
 */
declare class PaletteList extends QObject {
  /**
   * Adds a palette to the end of this palette list, returning a Palette object.
   * @param {string} path Path to existing palette file.
   * @returns {Palette}
   */
  public addPalette(path: string): Palette;

  /**
   * Adds a palette to the end of this palette list, returning a Palette object.
   * @param {int} location One of the valid PaletteLocation constants in that context. Any value except PaletteLocation.EXTERNAL.
   * @param {int} elementId The element ID if location is PaletteLocation.ELEMENT. Ignored in other cases.
   * @param {string} name The disk name of the palette.
   * @returns {Palette}
   */
  public addPaletteAtLocation(
    location: int,
    elementId: int,
    name: string
  ): Palette;

  /**
   * Create a new palette from a path String.
   * If the file indicated by path already exists, it will append a number to the path to create a unique
   * name.
   * @param {string} path The path to create the palette from.
   * @returns {Palette}
   */
  public createPalette(path: string): Palette;

  /**
   * Create a palette from a path String, inserted at position Index.
   * If the file indicated by path already exists, it will append a number to the path to create a unique
   * name.
   * @param {string} path The path to create the palette from.
   * @param {int} index The index for the created palette to be inserted at.
   * @returns {Palette}
   */
  public createPalette(path: string, index: int): Palette;

  /**
   * Create a Palette at a physical location relative to the project.
   * If the location is not in an element, the parameter element ID is ignored.
   * @param {int} location The location for the palette to be created at.
   * @param {int} elementId The Id of the element found at the location.
   * @param {string} diskName The name of the disk.
   * @returns {Palette}
   */
  public createPaletteAtLocation(
    location: int,
    elementId: int,
    diskName: string
  ): Palette;

  /**
   * Create a Palette at a physical location relative to the project, inserted at index in the
   * paletteList.
   * If the location is not in an element, the parameter element ID is ignored.
   * @param {int} location The location for the palette to be created at.
   * @param {int} elementId The Id of the element found at the location.
   * @param {string} diskName The name of the disk.
   * @param {int} index The index that the new plaette will be inserted at.
   * @returns {Palette}
   */
  public createPaletteAtLocation(
    location: int,
    elementId: int,
    diskName: string,
    index: int
  ): Palette;

  /**
   * Search the given color ID and return the first match, also looking in the scene palette list if
   * applicable.
   * @param {string} colorId The color ID to search.
   * @returns {Palette}
   */
  public findPaletteOfColor(colorId: string): Palette;

  /**
   * Try getting the database lock, returning true on success or false on failure. Without the lock,
   * methods that change the state of the palette list can fail.
   * @returns {boolean}
   */
  public getLock(): boolean;

  /**
   * Returns a Palette object for the palette with ID 'id'.
   * @param {string} id palette ID of palette in this palette list.
   * @returns {Palette}
   */
  public getPaletteById(id: string): Palette;

  /**
   * Returns a Palette object for the palette with ID 'id'.
   * @param {string} id Palette ID of palette in this palette list.
   * @param {boolean} lookInLinkedPalettes whether to look in other accessible palettes, typically the scene palette List when searching from an element palette list.
   * @returns {Palette}
   */
  public getPaletteById(id: string, lookInLinkedPalettes: boolean): Palette;

  /**
   * Returns a Palette object for the palette at position 'index'.
   * @param {int} index Index of palette in this palette list.
   * @returns {Palette}
   */
  public getPaletteByIndex(index: int): Palette;

  /**
   * Returns the folder in which this palette list is located.
   * @returns {string}
   */
  public getPath(): string;

  /**
   * Adds a palette to this palette list at the position specified by 'index', returning a Palette
   * object.
   * @param {string} path Path to existing palette file.
   * @param {int} index The index of the position where the palette is inserted.
   * @returns {Palette}
   */
  public insertPalette(path: string, index: int): Palette;

  /**
   * Adds a palette to this palette list at the position specified by 'index', returning a Palette
   * object.
   * @param {int} location One of the valid PaletteLocation constants in that context. Any value except PaletteLocation.EXTERNAL.
   * @param {int} elementId The element ID if location is PaletteLocation.ELEMENT. Ignored in other cases.
   * @param {string} name Path to existing palette file.
   * @param {int} index The index of the position where the palette is inserted.
   * @returns {Palette}
   */
  public insertPaletteAtLocation(
    location: int,
    elementId: int,
    name: string,
    index: int
  ): Palette;

  /**
   * Returns true if the palette was successfully loaded from the disk.
   * @returns {boolean}
   */
  public isLoaded(): boolean;

  /**
   * Returns true if the palette list object is valid.
   * @returns {boolean}
   */
  public isValid(): boolean;

  /**
   * Move the specified palette down one place in this palette list.
   * @param {string} id ID of the palette to move.
   * @returns {boolean}
   */
  public movePaletteDown(id: string): boolean;

  /**
   * Move the specified palette up one place in this palette list.
   * @param {string} id ID of the palette to move.
   * @returns {boolean}
   */
  public movePaletteUp(id: string): boolean;

  /**
   * Release the lock.
   * @returns {boolean}
   */
  public releaseLock(): boolean;

  /**
   * Remove the palette by path.
   * @param {string} path The path of the palette to remove.
   * @returns {boolean}
   */
  public removePalette(path: string): boolean;

  /**
   * Remove the palette with the specified palette ID.
   * @param {string} id ID of the palette to remove.
   * @returns {boolean}
   */
  public removePaletteById(id: string): boolean;

  /**
   * Remove the palette at the position specified by 'index'.
   * @param {int} index Index of palette to remove.
   * @returns {boolean}
   */
  public removePaletteByIndex(index: int): boolean;

  /**
   * Will return the elementId of this palette list if the type is PaletteListType.Element. Will return
   * -1 if the type is PaletteListType.Scene.
   * @returns {int}
   */
  elementId: int;

  /**
   * The palette list ID of this palette list.
   * @returns {string}
   */
  id: string;

  /**
   * Number of palettes in this palette list.
   * @returns {int}
   */
  numPalettes: int;

  /**
   * The type of palette list. One of the PaletteListType constants.
   * @returns {int}
   */
  type: int;
}

/**
 * The JavaScript class for getting the palette list type. Obtain it from Constants.
 * Defines the types of palette list. They can be Scene, Element, Hidden or Unspecified.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classPaletteListType.html}
 * @example
 * var paletteListType = PaletteObjectManager.Constants.PaletteListType.Scene;
 */
declare class PaletteListType extends QObject {
  /**
   * Represent the Job location of the project. A palette created with this location would be stored in
   * the job folder.
   * @returns {int}
   */
  Element: int;

  /**
   * Represent the Scene location of the project. A palette created with this location would be stored in
   * the scene folder.
   * @returns {int}
   */
  Hidden: int;

  /**
   * The PaletteList is a Scene palette list if its.
   * @returns {int}
   */
  Scene: int;

  /**
   * The palette list type is unspecified. Maybe the palette list is invalid.
   * @returns {int}
   */
  Unspecified: int;
}

/**
 * The JavaScript class for defining the standard palette locations. Obtain it from Constants.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classPaletteLocation.html}
 * @example
 * var envPath = PaletteObjectManager.Constants.Location.ENVIRONMENT;
 * var jobPath = PaletteObjectManager.Constants.Location.JOB;
 * var scenePath = PaletteObjectManager.Constants.Location.SCENE;
 * var elementPath = PaletteObjectManager.Constants.Location.ELEMENT;
 * var externalPath = PaletteObjectManager.Constants.Location.EXTERNAL;
 */
declare class PaletteLocation extends QObject {
  /**
   * Represent a location in an element of the project.
   * @returns {int}
   */
  ELEMENT: int;

  /**
   * Represent the Environment location of the project. A palette created with this location would be
   * stored in the environment folder.
   * @returns {int}
   */
  ENVIRONMENT: int;

  /**
   * Represents a location outside the project.
   * @returns {int}
   */
  EXTERNAL: int;

  /**
   * Represent the Job location of the project. A palette created with this location would be stored in
   * the job folder.
   * @returns {int}
   */
  JOB: int;

  /**
   * Represent the Scene location of the project. A palette created with this location would be stored in
   * the scene folder.
   * @returns {int}
   */
  SCENE: int;
}

/**
 * This class is used to retrieve location of palette and texture files.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classPaletteLocator.html}
 */
declare class PaletteLocator extends QObject {
  /**
   * Will return the full palette-library path for a given location.
   * @param {int} location One of the PaletteLocation constants.
   * @param {int} elementId If location is PaletteLocation.ELEMENT, the element id
   * @returns {string}
   */
  public folderForLocation(location: int, elementId: int): string;

  /**
   * Will copy the plt file at the specified location in the project.
   * @param {string} palettePath The full source palette file path.
   * @param {int} location One of the PaletteLocation constants.
   * @param {int} elementId If location is PaletteLocation.ELEMENT, the element id
   * @param {string} paletteName The name the palette will have in the project.
   * @returns {boolean}
   */
  public importPaletteAtLocation(
    palettePath: string,
    location: int,
    elementId: int,
    paletteName: string
  ): boolean;

  /**
   * Will return the filename of the palette including the .plt extension for a given palette and
   * location.
   * @param {int} location One of the PaletteLocation constants.
   * @param {int} elementId If location is PaletteLocation.ELEMENT, the element id
   * @param {string} paletteName The palette name without the .plt extension
   * @returns {string}
   */
  public palettePathForLocation(
    location: int,
    elementId: int,
    paletteName: string
  ): string;

  /**
   * Will return the list of all .plt files at a given location.
   * @param {int} location One of the PaletteLocation constants.
   * @param {int} elementId If location is PaletteLocation.ELEMENT, the element id
   * @param {boolean} fullFileName If true will return the complete path list. Will return only the names otherwise.
   * @returns {StringList}
   */
  public palettesAtLocation(
    location: int,
    elementId: int,
    fullFileName: boolean
  ): StringList;

  /**
   * Will return the texture folder of the palette for a given palette and location.
   * @param {int} location One of the PaletteLocation constants.
   * @param {int} elementId If location is PaletteLocation.ELEMENT, the element id
   * @param {string} paletteName The palette name without the .plt extension
   * @returns {string}
   */
  public textureFolderForLocation(
    location: int,
    elementId: int,
    paletteName: string
  ): string;
}

/**
 * The JavaScript class for getting or setting the model directory, the scan files and the default
 * camera name flags when pasting. Obtain from the copyPaste global object.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classPasteOptions.html}
 * @example
 * var myPasteOptions = copyPaste.getCurrentPasteOptions();
 * myPasteOptions.extendScene = false;
 * myPasteOptions.defaultCameraName = true;
 *
 * copyPaste.paste(dragObject, selectionOfNodes, startFrame, numFrames, myPasteOptions);
 */
declare class PasteOptions extends QObject {
  /**
   * @returns {boolean}
   */
  actionTemplateMode: boolean;

  /**
   * @returns {boolean}
   */
  addRemoveAngleKeyFrame: boolean;

  /**
   * @returns {boolean}
   */
  addRemoveMotionKeyFrame: boolean;

  /**
   * @returns {boolean}
   */
  addRemoveScalingKeyFrame: boolean;

  /**
   * @returns {boolean}
   */
  addRemoveSkewKeyFrame: boolean;

  /**
   * @returns {boolean}
   */
  addRemoveVelocityKeyFrame: boolean;

  /**
   * @returns {boolean}
   */
  autoExtendExposure: boolean;

  /**
   * @returns {string}
   */
  colourPalette: string;

  /**
   * @returns {boolean}
   */
  copyModelsDir: boolean;

  /**
   * @returns {boolean}
   */
  copyScanFiles: boolean;

  /**
   * @returns {boolean}
   */
  createNewColumn: boolean;

  /**
   * @returns {boolean}
   */
  defaultCameraName: boolean;

  /**
   * set the delete mode. Value strings : REMOVE, EMPTY, DELETE_NOTHING. Default: DELETE_NOTHING )
   * @returns {string}
   */
  deleteMode: string;

  /**
   * @returns {string}
   */
  drawingFileMode: string;

  /**
   * @returns {string}
   */
  drawingPasteAction: string;

  /**
   * @returns {boolean}
   */
  drawingSubstitution: boolean;

  /**
   * @returns {string}
   */
  elementMode: string;

  /**
   * @returns {boolean}
   */
  extendScene: boolean;

  /**
   * @returns {boolean}
   */
  forceKeyframeAtBeginningAndEnd: boolean;

  /**
   * @returns {boolean}
   */
  fullTransfer: boolean;

  /**
   * @returns {boolean}
   */
  matchNodeName: boolean;

  /**
   * @returns {int}
   */
  numberOfFramesSource: int;

  /**
   * @returns {boolean}
   */
  offsetKeyFrame: boolean;

  /**
   * @returns {boolean}
   */
  preserveColumnName: boolean;

  /**
   * @returns {boolean}
   */
  replaceExpressionColumns: boolean;

  /**
   * @returns {int}
   */
  startDeleteFrame: int;

  /**
   * @returns {int}
   */
  startFrameSource: int;

  /**
   * set the write mode. Value strings: INSERT,OVERWRITE, DO_NOTHING. Default: OVERWRITE )
   * @returns {string}
   */
  writeMode: string;
}

/**
 * The Point2d JavaScript class. Defines a two dimensional point.
 * The Point2d class defines a bi-dimensional point container. Point2d objects can be instantiated in
 * the scripting environment.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classPoint2d.html}
 */
declare class Point2d extends QObject {
  /**
   * Create a new empty Point2d.
   * @returns {void}
   */
  constructor();

  /**
   * Create a new Point2d.
   * @param {double} x X value
   * @param {double} y Y value
   * @returns {void}
   */
  constructor(x: double, y: double);

  /**
   * Add specified Vector2d to current Point2d.
   * @param {Vector2d} v Vector2d
   * @returns {Point2d}
   */
  public add(v: Vector2d): Point2d;

  /**
   * Add specified Vector2d to current Point2d.
   * @param {Vector2d} v Vector2d
   * @returns {Point2d}
   */
  public addEq(v: Vector2d): Point2d;

  /**
   * Calculate distance between two points.
   * @param {Point2d} p2 Second Point2d
   * @returns {double}
   */
  public distance(p2: Point2d): double;

  /**
   * Calculate square distance between two points.
   * @param {Point2d} p2 Second Point2d
   * @returns {double}
   */
  public distanceSq(p2: Point2d): double;

  /**
   * Calculate Point2d as interpolation between two points.
   * @param {double} t Factor of interpolation [ 0, 1 ]
   * @param {Point2d} p1 First Point2d
   * @param {Point2d} p2 Second Point2d
   * @returns {Point2d}
   */
  public interpolate(t: double, p1: Point2d, p2: Point2d): Point2d;

  /**
   * Substracts current Point2d with specified Point2d.
   * @param {Point2d} p2 Second Point2d
   * @returns {Vector2d}
   */
  public minus(p2: Point2d): Vector2d;

  /**
   * Substracts current Point2d with specified Vector2d.
   * @param {Vector2d} v Vector2d
   * @returns {Point2d}
   */
  public minus(v: Vector2d): Point2d;

  /**
   * Substract current Point2d with specified Vector2d.
   * @param {Vector2d} v Vector2d
   * @returns {Point2d}
   */
  public minusEq(v: Vector2d): Point2d;

  /**
   * round x and y to floor with a resolution of 1.0/64.0
   * @returns {Point2d}
   */
  public round(): Point2d;

  /**
   * round x and y to floor with a resolution given
   * @param {double} quantum
   * @returns {Point2d}
   */
  public round(quantum: double): Point2d;

  /**
   * Rounds this point in the direction of the given vector and using the resolution of 1.0/64.0.
   * @param {Vector2d} v
   * @returns {Point2d}
   */
  public round(v: Vector2d): Point2d;

  /**
   * Rounds this point in the direction of the given vector and using the given resolution.
   * @param {Vector2d} v
   * @param {double} quantum
   * @returns {Point2d}
   */
  public round(v: Vector2d, quantum: double): Point2d;

  /**
   * Set the value of x, y coordinate.
   * @returns {void}
   */
  public setXY(): void;

  /**
   * Copy Point2d into a Vector2d container.
   * @returns {Vector2d}
   */
  public toVector2d(): Vector2d;

  /**
   * x value
   * @returns {double}
   */
  x: double;

  /**
   * y value
   * @returns {double}
   */
  y: double;
}

/**
 * The Point3d JavaScript class. Defines a three dimensional point.
 * The Point3d class defines a three dimensional point container. Point3d objects can be instantiated
 * in the scripting environment.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classPoint3d.html}
 */
declare class Point3d extends QObject {
  /**
   * Create a new empty Point3d.
   * @returns {void}
   */
  constructor();

  /**
   * Create a new Point3d.
   * @param {double} x X value
   * @param {double} y Y value
   * @param {double} z Z value
   * @returns {void}
   */
  constructor(x: double, y: double, z: double);

  /**
   * Add specified Vector3d to current Point3d.
   * @param {Vector3d} v Vector3d
   * @returns {Point3d}
   */
  public add(v: Vector3d): Point3d;

  /**
   * Add specified Vector3d to current Point3d.
   * @param {Vector3d} v Vector3d
   * @returns {Point3d}
   */
  public addEq(v: Vector3d): Point3d;

  /**
   * Calculate distance between current Point3d and specified Point3d.
   * @param {Point3d} p2 Second Point3d
   * @returns {double}
   */
  public distance(p2: Point3d): double;

  /**
   * Calculate square distance between current Point3d and specified Point3d.
   * @param {Point3d} p2 Second Point3d
   * @returns {double}
   */
  public distanceSq(p2: Point3d): double;

  /**
   * Calculate Point3d as interpolation between two points.
   * @param {double} t Factor of interpolation [ 0, 1 ]
   * @param {Point3d} p1 First Point3d
   * @param {Point3d} p2 Second Point3d
   * @returns {Point3d}
   */
  public interpolate(t: double, p1: Point3d, p2: Point3d): Point3d;

  /**
   * Test if current Point3d is equal to specified Point3d.
   * @param {Point3d} p2 Second Point3d
   * @returns {boolean}
   */
  public isEqual(p2: Point3d): boolean;

  /**
   * Test if current Point3d is not equal to specified Point3d.
   * @param {Point3d} p2 Second Point3d
   * @returns {boolean}
   */
  public isNotEqual(p2: Point3d): boolean;

  /**
   * Test if Point3d is at origin.
   * @returns {boolean}
   */
  public isOrigin(): boolean;

  /**
   * Substracts current Point3d with specified Vector3d.
   * @param {Vector3d} v Vector3d
   * @returns {Point3d}
   */
  public minus(v: Vector3d): Point3d;

  /**
   * Substracts current Point3d with specified Point3d.
   * @param {Point3d} p2 Second Point3d
   * @returns {Vector3d}
   */
  public minus(p2: Point3d): Vector3d;

  /**
   * Substract current Point3d with specified Vector3d.
   * @param {Vector3d} v Vector3d
   * @returns {Point3d}
   */
  public minusEq(v: Vector3d): Point3d;

  /**
   * Round x, y coordinate to floor with the given resolution.
   * @param {double} quantum
   * @returns {Point3d}
   */
  public round(quantum: double): Point3d;

  /**
   * Set the x, y, z coordinate to the given.
   * @param {double} x
   * @param {double} y
   * @param {double} z
   * @returns {void}
   */
  public setXYZ(x: double, y: double, z: double): void;

  /**
   * Convert current Point3d to bi-dimensional Point2d.
   * @returns {Point2d}
   */
  public toPoint2d(): Point2d;

  /**
   * @returns {double}
   */
  x: double;

  /**
   * @returns {double}
   */
  y: double;

  /**
   * @returns {double}
   */
  z: double;
}

/**
 * The Process2 JavaScript class. Used to launch an external process.
 * Processes can be instantiated in the scripting environment.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classProcess2.html}
 * @example
 * p1 = new Process2("rndr -t file.rib"); // create process from single string
 * p2 = new Process2("rndr", "-t", "file.rib"); // create process using separate arguments
 *
 * // Both commands execute same process
 * p1.launch();
 * p2.launch();
 *
 * // Launch a new process and detach it from application.
 * // Application will not be monitored by script module.
 * p3 = new Process2("rndr -t file.rib");
 * p3.launchAndDetach();
 *
 * // Create a process from a specified PID.
 * p4 = new Process2(1234);
 *
 * // Verify if process is still alive and terminate it
 * if (p4.isAlive()) {
 *     p4.terminate();
 * }
 */
declare class Process2 extends QObject {
  /**
   * Create a new Process. A process created with a pid cannot be launched as it already should have
   * been. terminate() and isAlive() functions can still be called with such a process.
   * @param {int} pid PID of already existing process.
   * @returns {void}
   */
  constructor(pid: int);

  /**
   * Create a new Process.
   * @param {string} name Path or name of process to execute.
   * @returns {void}
   */
  constructor(name: string);

  /**
   * Create a new Process.
   * @param {string} name Path or name of process to execute.
   * @param {StringList} list List of arguments.
   * @returns {void}
   */
  constructor(name: string, list: StringList);

  /**
   * Create a new Process.
   * @param {string} commandLine Entire command line to launch.
   * @returns {void}
   */
  constructor(commandLine: string);

  /**
   * @param {string} name
   * @param {string} value
   * @returns {void}
   */
  public addEnvVariable(name: string, value: string): void;

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
   * @returns {void}
   */
  public resetEnvVariableList(): void;

  /**
   * Terminates the process.
   * @returns {void}
   */
  public terminate(): void;
}

/**
 * The ProcessManager class. Singleton used to monitor and control detached child processes.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classProcessManager.html}
 */
declare class ProcessManager extends QObject {
  /**
   * @param {StringList} o_names
   * @returns {void}
   */
  public children(o_names: StringList): void;

  /**
   * @param {TUSceneChangeManager} sceneChangeMgr
   * @returns {void}
   */
  public connectToScene(sceneChangeMgr: TUSceneChangeManager): void;

  /**
   * @returns {ProcessManager}
   */
  public instance(): ProcessManager;

  /**
   * @param {string} name
   * @returns {boolean}
   */
  public isRunning(name: string): boolean;

  /**
   * @param {string} name
   * @param {string} program
   * @param {StringList} args
   * @param {QProcessEnvironment} [additionalEnvironment=QProcessEnvironment()]
   * @returns {boolean}
   */
  public launchAndDetach(
    name: string,
    program: string,
    args: StringList,
    additionalEnvironment?: QProcessEnvironment
  ): boolean;

  /**
   * @param {string} name
   * @returns {void}
   */
  public terminate(name: string): void;

  /**
   * @returns {void}
   */
  public terminateAll(): void;

  /**
   * @returns {void}
   */
  public update(): void;
}

/**
 * The Quaternion Javascript class. Defines a 4 dimensional value.
 * The Quaternion class defines a 4 dimensional value container, and is used to represent a rotation of
 * a 3-D object.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classQuaternion.html}
 */
declare class Quaternion extends QObject {
  /**
   * Create a new identity Quaternion.
   * The identity Quaternion is [1, 0, 0, 0].
   * @returns {void}
   */
  constructor();

  /**
   * Create a new Quaternion.
   * @param {double} w W value.
   * @param {double} x X value.
   * @param {double} y Y value.
   * @param {double} z Z value.
   * @returns {void}
   */
  constructor(w: double, x: double, y: double, z: double);

  /**
   * Initialize the quaternion from a trio of 3 successive Euler angles(degrees or radians).
   * @param {double} eulerX The angle around the x axis
   * @param {double} eulerY The angle around the y axis
   * @param {double} eulerZ The angle around the z axis
   * @param {boolean} [degree=true] True if the given angles are in degrees, false if they are in radians.
   * @returns {void}
   * @example
   * var newRotation = new Quaternion;
   * newRotation.setEuler(90, 45, 45, true); // set the initial values of a quaternion from angles in degrees.
   */
  public fromEuler(
    eulerX: double,
    eulerY: double,
    eulerZ: double,
    degree?: boolean
  ): void;

  /**
   * Returns the conjugate of the Quaternion.
   * Changes the Quaternion to its inverse. When the norm of a Quaternion is 1, this is the same as
   * invert().
   * @returns {Quaternion}
   */
  public getConjugate(): Quaternion;

  /**
   * Returns the dot product of the given Quaternion parameters.
   * The dot product of two Quaternions is the angle between the two rotations.
   * @param {Quaternion} q2 The second Quaternion to use in the calculation.
   * @returns {double}
   */
  public getDotProduct(q2: Quaternion): double;

  /**
   * Returns the inverse of the Quaternion.
   * Changes the Quaternion to its inverse. When the norm of a Quaternion is 1, this is the same as
   * conjugate(), but less efficient.
   * @returns {Quaternion}
   */
  public getInverse(): Quaternion;

  /**
   * Returns the norm of the Quaternion.
   * The norm is the 4 dimensional euclidean length of the Quaternion.
   * @returns {double}
   */
  public getNorm(): double;

  /**
   * Returns the normalized Quaternion.
   * Normalizing a Quaternion eliminates any errors in its calculation caused by floating-point
   * precision.
   * A normalized Quaternion is one with a euclidean length (norm) of 1 (Unit length).
   * @returns {Quaternion}
   */
  public getNormalized(): Quaternion;

  /**
   * Returns true if two Quaternions are equal.
   * @param {Quaternion} q2 The Quaternion to compare to.
   * @returns {boolean}
   */
  public isEqual(q2: Quaternion): boolean;

  /**
   * Returns true if the Quaternion is the identity Quaternion.
   * The identity Quaternion is [1, 0, 0, 0].
   * @returns {boolean}
   */
  public isIdentity(): boolean;

  /**
   * Returns true if two Quaternions are NOT equal.
   * @param {Quaternion} q2 The Quaternion to compare to.
   * @returns {boolean}
   */
  public isNotEqual(q2: Quaternion): boolean;

  /**
   * Returns the multiplication product of the given Quaternion parameters.
   * The multiplication of two Quaternions is the combination of the 2 angles of the quaternions.
   * @param {Quaternion} q2 The second Quaternion to use in the calculation.
   * @returns {Quaternion}
   */
  public multiply(q2: Quaternion): Quaternion;

  /**
   * Rotates a vector by the angle the Quaternion represents.
   * @param {Vector3d} vect The Vector3d to be rotated.
   * @returns {Vector3d}
   */
  public rotateVector(vect: Vector3d): Vector3d;

  /**
   * Sets the w, x, y, z values to the given values.
   * @param {double} w W value.
   * @param {double} x X value.
   * @param {double} y Y value.
   * @param {double} z Z value.
   * @returns {void}
   */
  public setWXYZ(w: double, x: double, y: double, z: double): void;

  /**
   * Returns a Point3d loaded with the Euler Angles corresponding to the Quaternion.
   * @param {boolean} [degrees=true] Whether or not the Euler Angles are in degrees or radians. (true for degrees)
   * @returns {Point3d}
   */
  public toEuler(degrees?: boolean): Point3d;

  /**
   * Returns a Matrix4x4 loaded with the Rotation Matrix corresponding to the Quaternion.
   * The Rotation Matrix is a 3x3 matrix used for rotating vectors.
   * @returns {Matrix4x4}
   */
  public toMatrix(): Matrix4x4;

  /**
   * The w value.
   * @returns {double}
   */
  w: double;

  /**
   * The x value.
   * @returns {double}
   */
  x: double;

  /**
   * The y value.
   * @returns {double}
   */
  y: double;

  /**
   * The z value.
   * @returns {double}
   */
  z: double;
}

/**
 * The RemoteCmd JavaScript class. Send one sided commands to a remote host.
 * RemoteCmd allows user to send one sided commands to a remote host.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classRemoteCmd.html}
 * @example
 * // Connect to a Maya server and issue a Maya command remotely.
 *
 * // Connect to the remote machine running Maya.
 * var remote = new RemoteCmd();
 * var machine = "mayaServer"; // Example Maya server machine
 * var port = 7777; // Example Maya server port
 *
 * if (!remote.connect(machine, port)) {
 *     MessageBox.critical("Cannot connect to Maya server \"" + machine + "\" at port " + port);
 *     return;
 * }
 *
 * // Ask Maya to create a sphere
 * remote.send("sphere;");
 *
 * // Wait for response (10 second timeout)
 * if (remote.receive(10000)) {
 *     MessageBox.information("Maya response: " + remote.lastReceived());
 * }
 *
 * remote.disconnect();
 */
declare class RemoteCmd {
  /**
   * Create a new RemoteCmd remote command object.
   * @returns {void}
   */
  constructor();

  /**
   * Connect to a remote machine.
   * @param {string} machine String Machine name
   * @param {int} port Port number
   * @returns {boolean}
   */
  public connect(machine: string, port: int): boolean;

  /**
   * Retrieve connection status
   * @returns {boolean}
   */
  public connected(): boolean;

  /**
   * Connect to a remote machine.
   * @param {string} machine String Machine name
   * @param {int} port Port number
   * @param {int} timeout Timeout value
   * @returns {boolean}
   */
  public connectTimeout(machine: string, port: int, timeout: int): boolean;

  /**
   * Disconnect from remote machine.
   * @returns {void}
   */
  public disconnect(): void;

  /**
   * Retrieve last received response from server.
   * @returns {string}
   */
  public lastReceived(): string;

  /**
   * Query response from server.
   * @param {int} timeout Time out value in milliseconds. -1 for infinity.
   * @returns {boolean}
   */
  public receive(timeout: int): boolean;

  /**
   * Query a packaged response from server.
   * @param {int} timeout Time out value in milliseconds. -1 for infinity.
   * @returns {boolean}
   */
  public receiveMsg(timeout: int): boolean;

  /**
   * Send a command to remote machine.
   * @param {string} cmd String command
   * @returns {boolean}
   */
  public send(cmd: string): boolean;

  /**
   * Send a packaged message to remote machine.
   * @param {string} msg String message
   * @returns {boolean}
   */
  public sendMsg(msg: string): boolean;
}

/**
 * The RigState JavaScript class. Represents the state of a rig for a given pose.
 * A RigState is a snapshot of a part of the node network. It can store all attributes values
 * associated to a rig state, such as position, color, effects parameters, scale, deformation,
 * drawings, etc. These snapshots, or RigStates, can be stored, blended, and applied to a rig. It aims
 * at making it easier to manipulate rig data by offering a simple, high-level interface to represent
 * the state of a rig. Internally, a RigState object contains a list of nodes and attributes with their
 * values for a given pose.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classRigState.html}
 * @example
 * //Create a snapshot of "head_neck" group nodes at frame 15
 * var angryPose = new RigState("Angry", 15, "Top/CH001_Beaver/head_neck");
 * //Create a snapshot of "head_neck" group nodes at frame 11
 * var happyPose = new RigState("Happy", 11, "Top/CH001_Beaver/head_neck");
 * //Generate a new pose by blending the 2 poses above,
 * //using .25 weight factor (25% happy, 75% angry)
 * var blendedPose = angryPose.interpolate(0.25, happyPose);
 * scene.beginUndoRedoAccum("Pose API test");
 * //Apply the blended pose changes on the rig, at the current frame.
 * blendedPose.applyState(frame.current());
 * scene.endUndoRedoAccum();
 */
declare class RigState extends QObject {
  /**
   * Create a new RigState.
   * The example below transfers a head pose from frame 15 to frame 20.
   * @param {string} stateName The identifier given to this new state
   * @param {int} frameNo The frame index used to create the state snapshot
   * @param {string} nodeQualifiedName The qualified name of the root group under which all sub-node attribute values will be captured in the snapshot.
   * @returns {void}
   * @example
   * var angryHeadPose = new RigState("Angry", 15, "Top/CH001_Beaver/head_neck");
   * angryHeadPose.applyState(20);
   */
  constructor(stateName: string, frameNo: int, nodeQualifiedName: string);

  /**
   * Add node attributes to the current RigState snapshot.
   * This example creates an empty RigState and then adds the POSITION attribute for the Master-P node.
   * @param {string} sNodePath The node qualified name to add.
   * @param {QScriptValue} sAttrArray An array of attribute names to add.
   * @param {int} frameNo The frame number to use while fetching attribute values.
   * @returns {void}
   * @example
   * var masterPegState = new RigState("Master-Peg", 15);
   * masterPegState.addNodeAttrList("Top/CH001_Beaver/master-P", ["POSITION"], 15);
   */
  public addNodeAttrList(
    sNodePath: string,
    sAttrArray: QScriptValue,
    frameNo: int
  ): void;

  /**
   * Apply the values of the current snapshot to the scene, at the specified frame.
   * The example below transfers the properties of all nodes under the group "Top/CH001_Beaver/head_neck"
   * from frame 15 to frame 20.
   * @param {int} frameNo The destination frame number, where the RigState snapshot values are applied.
   * @returns {void}
   * @example
   * var headPose = new RigState("myHeadPose", 15, "Top/CH001_Beaver/head_neck");
   * headPose.applyState(20);
   */
  public applyState(frameNo: int): void;

  /**
   * Get a copy of the NodeState contained in the current RigState object at the specified index.
   * This example iterates all node states.
   * @param {int} index The index of the node state to retrieve. Must be within [0-nodeCount[.
   * @returns {NodeState}
   * @example
   * var headState = new RigState("headState", 15, "Top/CH001_Beaver/head_neck");
   * for (var i = 0; i < headState.nodeCount(); ++i) {
   *     var nodeStateCopy = headState.getNodeState(i);
   *     MessageLog.trace("Node State [" + i + "]: " + nodeStateCopy.sNodePath);
   * }
   */
  public getNodeState(index: int): NodeState;

  /**
   * Create a new RigState, by linearly interpolating the current one with the other one given in
   * argument.
   * The example below interpolates poseA with poseB, giving a weight of 75% to pose A and 25% to poseB.
   * @param {float} a The normalized weight given to pose b.
   * @param {RigState} b The pose to interpolate the current one with
   * @returns {RigState}
   * @example
   * var poseA = new RigState("A", 15, "Top/CH001_Beaver/head_neck");
   * var poseB = new RigState("B", 16, "Top/CH001_Beaver/head_neck");
   * var interpolatedPose = poseA.interpolate(0.25, poseB);
   */
  public interpolate(a: float, b: RigState): RigState;

  /**
   * Create a new RigState, by performing a bilinear interpolation of the current one with the 3 other
   * ones given in argument.
   * The example below illustrates the long and short way to perform a bilinear interpolation.
   * @param {float} u First axis interpolation weight
   * @param {float} v Second axis interpolation weight
   * @param {RigState} b The second pose of the bilinear interpolation
   * @param {RigState} c The third pose of the bilinear interpolation
   * @param {RigState} d The fourth pose of the bilinear interpolation
   * @returns {RigState}
   * @example
   * var u = 0.3;
   * var v = 0.8;
   * var poseA = new RigState("A", 15, "Top/CH001_Beaver/head_neck");
   * var poseB = new RigState("B", 16, "Top/CH001_Beaver/head_neck");
   * var poseC = new RigState("C", 17, "Top/CH001_Beaver/head_neck");
   * var poseD = new RigState("D", 18, "Top/CH001_Beaver/head_neck");
   * //Long version
   * var interpolatedPoseAB = poseA.interpolate(u, poseB);
   * var interpolatedPoseCD = poseC.interpolate(u, poseD);
   * var interpolatedPoseABCD_long = interpolatedPoseAB.interpolate(v, interpolatedPoseCD);
   * //Shorter version
   * var interpolatedPoseABCD_quick = poseA.interpolate2d(u, v, poseB, poseC, poseD);
   * interpolatedPoseABCD_quick.applyState(frame.current());
   */
  public interpolate2d(
    u: float,
    v: float,
    b: RigState,
    c: RigState,
    d: RigState
  ): RigState;

  /**
   * Restore a RigState from a previously generated RigState string representation.
   * This example loads a string representation from a saved file and restores the original RigState.
   * @param {string} sData The string containing the pose data.
   * @param {int} nPos The start index in the string
   * @param {string} sRelativePath The qualified name of the root character group (optional). When provided, this argument makes it possible to adjust data generated from a character group that was renamed.
   * @returns {int}
   * @example
   * var file = new File(scene.currentProjectPath() + "/scripts/test.txt");
   * file.open(1); //1=FileAccess.ReadOnly Flag
   * var dataString = file.read();
   * file.close();
   * var restoredState = new RigState(); //Create a new empty state
   * restoredState.loadFromString(dataString, 0, "Top/CH001_Beaver");
   */
  public loadFromString(sData: string, nPos: int, sRelativePath: string): int;

  /**
   * Get the node count contained in this RigState.
   * This example creates a RigState from a given group node qualified path and returns the number of
   * nodes included in the pose snapshot.
   * @returns {int}
   * @example
   * var headState = new RigState("Head Snapshot", 15, "Top/CH001_Beaver/head_neck");
   * var nCount = headState.nodeCount();
   * MessageLog.trace("This RigState contains information about " + nCount + " nodes.");
   */
  public nodeCount(): int;

  /**
   * Generate a string representation of the current RigState data.
   * This example creates a new state, generates the string representation and saves the data to a file.
   * @param {string} sRelativePath (optional) : The qualified name of the root character group (optional). When provided, node paths are stored relative to this group, making it possible to rename or move the character group node without invalidating the data.
   * @returns {string}
   * @example
   * var angryPose = new RigState("AngryState", 15, "Top/CH001_Beaver/head_neck");
   * var dataString = angryPose.toString("Top/CH001_Beaver");
   * var file = new File(scene.currentProjectPath() + "/scripts/test.txt");
   * file.open(2); //2=Write File Access Flag
   * file.write(dataString);
   * file.close();
   */
  public toString(sRelativePath: string): string;

  /**
   * The source frame number associated to the current RigState snapshot, at creation. Note :
   * interpolated states have no source frame number.
   * @returns {int}
   */
  frameNo: int;

  /**
   * The given name of the current RigState snapshot.
   * @returns {string}
   */
  stateName: string;
}

/**
 * The SceneChangeNotifier JavaScript class. Execute client code upon scene change events.
 * User can connect a function to any available signal from this class. Once a function is connected to
 * a signal, the client code will be executed when the specific event is triggered in the scene, until
 * the parent object is destroyed.
 * Example with a MasterController:
 * Example with a Dialog:
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classSceneChangeNotifier.html}
 * @example
 * Controller.onShowControl = function() {
 *     //Create the SceneChangeNotifier, using the Controller for parent
 *     var scn = new SceneChangeNotifier(Controller);
 *
 *     //Connect a local function to "nodeChanged" signal.
 *     //The connected function will be executed when the signal is triggered,
 *     //for as long as the parent object is alive (until the Controller is hidden).
 *     scn.nodeChanged.connect(function(nodeList) {
 *         MessageLog.trace("nodeChanged Callback!");
 *         for (var i = 0; i < nodeList.length; ++i) {
 *             MessageLog.trace("    affected node: " + nodeList[i]);
 *         }
 *     });
 * }
 */
declare class SceneChangeNotifier extends QObject {
  /**
   * Create a new SceneChangeNotifier.
   * @param {QObject} parent The parent object, controlling the newly created object life duration.
   * @returns {void}
   * @example
   * var dialog = UiLoader.load("myDialog.ui");
   * var myNotifier = new SceneChangeNotifier(dialog);
   */
  constructor(parent: QObject);

  /**
   * Disconnect all signals, to stop callback invocation.
   * @returns {void}
   * @example
   * myNotifier.disconnectAll();
   */
  public disconnectAll(): void;

  /**
   * Signal emitted upon change of the column / timed Values.
   * @param {StringList} columnNames
   * @returns {void}
   * @example
   * myNotifier.columnValuesChanged.connect(function(columnList) {
   *     MessageLog.trace("columnValuesChanged Callback!");
   *     for (var i = 0; i < columnList.length; ++i) {
   *         MessageLog.trace("    affected column: " + columnList[i]);
   *     }
   * });
   */
  public columnValuesChanged: QSignal<(columnNames: StringList) => void>;

  /**
   * Signal emitted upon changes related to node, plugin or interface control.
   * @returns {void}
   * @example
   * myNotifier.controlChanged.connect(function() {
   *     //Code your callback logic here...
   *     MessageLog.trace("control changed!");
   * });
   */
  public controlChanged: QSignal<() => void>;

  /**
   * Signal emitted upon change of the current frame in the scene.
   * @returns {void}
   * @example
   * myNotifier.currentFrameChanged.connect(function() {
   *     //Code your callback logic here...
   *     MessageLog.trace("currentFrameChanged Callback!");
   * });
   */
  public currentFrameChanged: QSignal<() => void>;

  /**
   * Signal emitted when a deformation is reset.
   * @param {StringList} list The list of reset deformation groups
   * @returns {void}
   * @example
   * myNotifier.networkChanged.connect(function(nodeList) {
   *     //Code your callback logic here...
   *     MessageLog.trace("deformerReset Callback!");
   *     for (var i = 0; i < nodeList.length; ++i) {
   *         MessageLog.trace("    affected node: " + nodeList[i]);
   *     }
   * });
   */
  public deformerReset: QSignal<(list: StringList) => void>;

  /**
   * Signal emitted when a deformation current frame is reset.
   * @param {StringList} list The list of reset deformation groups
   * @returns {void}
   * @example
   * myNotifier.networkChanged.connect(function(nodeList) {
   *     //Code your callback logic here...
   *     MessageLog.trace("deformerResetCurrentFrame Callback!");
   *     for (var i = 0; i < nodeList.length; ++i) {
   *         MessageLog.trace("    affected node: " + nodeList[i]);
   *     }
   * });
   */
  public deformerResetCurrentFrame: QSignal<(list: StringList) => void>;

  /**
   * Signal emitted upon change of the node network links.
   * @param {StringList} list The list of nodes which are concerned by the current network changes.
   * @returns {void}
   * @example
   * myNotifier.networkChanged.connect(function(nodeList) {
   *     //Code your callback logic here...
   *     MessageLog.trace("networkChanged Callback!");
   *     for (var i = 0; i < nodeList.length; ++i) {
   *         MessageLog.trace("    affected node: " + nodeList[i]);
   *     }
   * });
   */
  public networkChanged: QSignal<(list: StringList) => void>;

  /**
   * Signal emitted upon change of the node property or attribute value.
   * @param {StringList} list The list of nodes which are concerned by the current network changes.
   * @returns {void}
   * @example
   * myNotifier.nodeChanged.connect(function(nodeList) {
   *     //Code your callback logic here...
   *     MessageLog.trace("nodeChanged Callback!");
   *     for (var i = 0; i < nodeList.length; ++i) {
   *         MessageLog.trace("    affected node: " + nodeList[i]);
   *     }
   * });
   */
  public nodeChanged: QSignal<(list: StringList) => void>;

  /**
   * Signal emitted upon change of the node property or attribute value.
   * @param {StringList} list The list of nodes which had metadata changed, added, or removed.
   * @returns {void}
   * @example
   * myNotifier.nodeMetadataChanged.connect(function(nodeList) {
   *     //Code your callback logic here...
   *     MessageLog.trace("nodeMetadataChanged Callback!");
   *     for (var i = 0; i < nodeList.length; ++i) {
   *         MessageLog.trace("    affected node: " + nodeList[i]);
   *     }
   * });
   */
  public nodeMetadataChanged: QSignal<(list: StringList) => void>;

  /**
   * Signal emitted upon change of the scene.
   * @returns {void}
   * @example
   * myNotifier.sceneChanged.connect(function(nodeList) {
   *     //Code your callback logic here...
   *     MessageLog.trace("sceneChanged Callback!");
   * });
   */
  public sceneChanged: QSignal<() => void>;

  /**
   * Signal emitted when Timeline Scene Markers are added, deleted or changed.
   * @returns {void}
   * @example
   * myNotifier.sceneMakersChanged.connect(function() {
   *     //Code your callback logic here...
   *     MessageLog.trace("Scene Markers changed!");
   * });
   */
  public sceneMarkersChanged: QSignal<() => void>;

  /**
   * Signal emitted upon change of the current selection.
   * @returns {void}
   * @example
   * myNotifier.selectionChanged.connect(function() {
   *     //Code your callback logic here...
   *     MessageLog.trace("selectionChanged Callback!");
   * });
   */
  public selectionChanged: QSignal<() => void>;
}

/**
 * The SessionSocketMgr JavaScript class, creates and keeps sockets bounded throughout a session.
 * SCR_NetworkSessionSocketMgrWrapper manages non-blocking socket servers (bound ports) which can
 * exchange text messages with clients (connected ports). Messages are encoded in utf-8 and respect a
 * protocol. (The protocol encapsulates messages between bytes 0x2 and 0x3 - the ASCII table bytes for
 * start text and end text respectively.)
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classSCR__NetworkSessionSocketMgrWrapper.html}
 * @example
 * // Bind a new socket
 * var serverPort = SessionSocketMgr.bindNewPort();
 * var serverPortBound = false;
 * var serverPorts = SessionSocketMgr.boundPorts();
 * for (i = 0; i < serverPorts.length; i++) {
 *     if (serverPorts[i] == serverPort) {
 *         serverPortBound = true;
 *         break;
 *     }
 * }
 *
 * if (serverPortBound) {
 *     // Create a client to connect to the created socket
 *     var client = new RemoteCmd();
 *     if (client.connect("localhost", serverPort)) {
 *         // Accept client, with a 5 second timeout and support a queue of 10 messages
 *         clientSocketId = SessionSocketMgr.acceptAtPort(serverPort, 5000, 10);
 *         if (0 < clientSocketId) {
 *             // Exchange message
 *             MessageLog.trace("Connection established between client and server!");
 *
 *             var msg = "Message to server";
 *             MessageLog.trace("Client will send to server: '" + msg + "'");
 *
 *             // Encapsulate the message
 *             encMsg = '\2' + msg + '\3';
 *
 *             // Send it
 *             client.send(encMsg)
 *             if (SessionSocketMgr.recv(clientSocketId, 5000)) // Wait 5 seconds
 *             {
 *                 MessageLog.trace("Server received: '" + SessionSocketMgr.lastReceivedMsg(clientSocketId) + "'");
 *             } else {
 *                 MessageLog.trace("Client failed to receive message!");
 *             }
 *         } else {
 *             MessageLog.trace("Client accept timeout!");
 *         }
 *
 *         client.disconnect()
 *     } else {
 *         MessageLog.trace("Cannot connect to bound socket at port: " + serverPort);
 *     }
 * } else {
 *     MessageLog.trace("Cannot bind socket at port: " + serverPort);
 * }
 * // Close all bound sockets
 * SessionSocketMgr.removeSocketConnection(clientSocketId);
 */
declare class SCR_NetworkSessionSocketMgrWrapper extends QObject {
  /**
   * @param {int} port
   * @param {int} timeoutMS
   * @param {int} [msgBufferSize=20]
   * @returns {int}
   */
  public acceptAtPort(port: int, timeoutMS: int, msgBufferSize?: int): int;

  /**
   * @returns {int}
   */
  public bindNewPort(): int;

  /**
   * @returns {QScriptValue}
   */
  public boundPorts(): QScriptValue;

  /**
   * @param {int} clientSocketId
   * @returns {boolean}
   */
  public clientSocketConnected(clientSocketId: int): boolean;

  /**
   * @returns {void}
   */
  public closeAll(): void;

  /**
   * @param {int} clientSocketId
   * @returns {void}
   */
  public flushReceivedMsgsBuffer(clientSocketId: int): void;

  /**
   * @param {int} clientSocketId
   * @returns {QScriptValue}
   */
  public receivedMsgs(clientSocketId: int): QScriptValue;

  /**
   * @param {int} clientSocketId
   * @param {int} timeoutMS
   * @returns {boolean}
   */
  public recv(clientSocketId: int, timeoutMS: int): boolean;

  /**
   * @param {int} clientSocketId
   * @returns {void}
   */
  public removeSocketConnection(clientSocketId: int): void;

  /**
   * @param {int} clientSocketId
   * @param {string} msg
   * @param {int} [timeoutMS=1000]
   * @returns {boolean}
   */
  public send(clientSocketId: int, msg: string, timeoutMS?: int): boolean;

  /**
   * @param {int} port
   * @returns {void}
   */
  public unbindPort(port: int): void;
}

/**
 * The SCR_ProcessManagerWrapper JavaScript class. Singleton interface used to monitor, create and
 * control detached child processes by name.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classSCR__ProcessManagerWrapper.html}
 * @example
 * // Build command line
 * childName = "Child Process"
 * executable = "C://Windows//System32//mspaint.exe"
 * arguments = ["HarmonyPremium.ico"]
 * environment = {
 *     "CustomKey": "CustomValue"
 * }
 *
 * // Attempt to launch the child process
 * MessageLog.trace("Executing child process named: '" + childName + "' with executable '" + executable + "'" + " and arguments '" + arguments.join(' ') + "'");
 * if (!SessionProcessMgr.launchAndDetach(childName, executable, arguments, environment))
 *     MessageLog.error("Failed to launch the child process: '" + childName + "'");
 *
 * if (SessionProcessMgr.isRunning(childName))
 *     MessageLog.trace("Child process: '" + childName + "' is running.");
 * else
 *     MessageLog.error("Child process: '" + childName + "' is not running.");
 *
 * MessageLog.trace("Running child processes: '" + SessionProcessMgr.children() + "'");
 *
 * // Optionally terminate the process
 * //SessionProcessMgr.terminate(childName)
 */
declare class SCR_ProcessManagerWrapper extends QObject {
  /**
   * @returns {QScriptValue}
   */
  public children(): QScriptValue;

  /**
   * @param {string} name
   * @returns {boolean}
   */
  public isRunning(name: string): boolean;

  /**
   * @param {string} name
   * @param {string} program
   * @param {StringList} args
   * @param {QScriptValue} [additionalEnvironmentMap={}]
   * @returns {boolean}
   */
  public launchAndDetach(
    name: string,
    program: string,
    args: StringList,
    additionalEnvironmentMap?: QScriptValue
  ): boolean;

  /**
   * @param {string} name
   * @returns {void}
   */
  public terminate(name: string): void;
}

/**
 * The SessionChangeNotifier JavaScript class. Execute client code upon session change events.
 * User can connect a function to any available signal from this class. Once a function is connected to
 * a signal, the client code will be executed when the specific event is triggered in the session,
 * until the parent object is destroyed.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classSessionChangeNotifier.html}
 */
declare class SessionChangeNotifier extends QObject {
  /**
   * Create a new SessionChangeNotifier.
   * @param {QObject} parent The parent object, controlling the newly created object life duration.
   * @returns {void}
   * @example
   * var dialog = UiLoader.load("myDialog.ui");
   * var myNotifier = new SessionChangeNotifier(dialog);
   */
  constructor(parent: QObject);

  /**
   * Disconnect all signals, to stop callback invocation.
   * @returns {void}
   * @example
   * myNotifier.disconnectAll();
   */
  public disconnectAll(): void;

  /**
   * Signal emitted when the project has been saved.
   * @returns {void}
   * @example
   * myNotifier.saveSuccessful.connect(function() {
   *     //Code your callback logic here...
   *     MessageLog.trace("saveSuccessful Callback!");
   * });
   */
  public saveSuccessful: QSignal<() => void>;
}

/**
 *
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classSessionSocketManager.html}
 */
declare class SessionSocketManager extends QObject {
  /**
   * @param {int} port
   * @param {int} timeoutMS
   * @param {int} [msgBufferSize=20]
   * @returns {int}
   */
  public acceptAtPort(port: int, timeoutMS: int, msgBufferSize?: int): int;

  /**
   * @returns {int}
   */
  public bindNewPort(): int;

  /**
   * @param {QVector< int >} o_ports
   * @returns {void}
   */
  public boundPorts(o_ports: QVector<int>): void;

  /**
   * @param {int} clientSocketId
   * @param {int} [timeoutMS=1000]
   * @returns {boolean}
   */
  public clientSocketConnected(clientSocketId: int, timeoutMS?: int): boolean;

  /**
   * @param {TUSceneChangeManager} changeMgr
   * @returns {void}
   */
  public connectToScene(changeMgr: TUSceneChangeManager): void;

  /**
   * @param {int} clientSocketId
   * @returns {void}
   */
  public flushReceivedMsgsBuffer(clientSocketId: int): void;

  /**
   * @returns {SessionSocketManager}
   */
  public instance(): SessionSocketManager;

  /**
   * @param {int} clientSocketId
   * @param {QVector< String >} o_messages
   * @returns {void}
   */
  public receivedMsgs(clientSocketId: int, o_messages: QVector<String>): void;

  /**
   * @param {int} clientSocketId
   * @param {int} timeoutMS
   * @returns {boolean}
   */
  public recv(clientSocketId: int, timeoutMS: int): boolean;

  /**
   * @param {int} clientSocketId
   * @returns {void}
   */
  public removeSocketConnection(clientSocketId: int): void;

  /**
   * @param {int} clientSocketId
   * @param {string} msg
   * @param {int} [timeoutMS=1000]
   * @returns {boolean}
   */
  public send(clientSocketId: int, msg: string, timeoutMS?: int): boolean;

  /**
   * @returns {void}
   */
  public unbindAll(): void;

  /**
   * @param {int} port
   * @returns {void}
   */
  public unbindPort(port: int): void;
}

/**
 * The SubnodeData Javascript class.
 * Subnodes are the 3d objects that make up a 3d Model, and can be found in the 3D Graph View. The
 * SubnodeData methods allow access and editing of subnode properties.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classSubnodeData.html}
 */
declare class SubnodeData extends QObject {
  /**
   * Create a new SubnodeData object.
   * @param {string} subnodeName The name, or key, of the subnode found in the 3D Graph View.
   * @param {string} nodeName The name of the node corresponding to the 3d Model. This can also be a SubnodeTransformation node.
   * @param {double} frame The frame number.
   * @returns {void}
   */
  constructor(subnodeName: string, nodeName: string, frame: double);

  /**
   * Returns true if the subnode is enabled, false if it is disabled.
   * @returns {boolean}
   */
  public enabled(): boolean;

  /**
   * Returns the Matrix4x4 representing the transformations done locally to this subnode.
   * @returns {Matrix4x4}
   */
  public localTransformation(): Matrix4x4;

  /**
   * Returns the name of the subnode. This is the Key used when the SubnodeData object was created.
   * @returns {string}
   */
  public name(): string;

  /**
   * Returns the Point3d position of the subnode's pivot.
   * @returns {Point3d}
   */
  public pivot(): Point3d;

  /**
   * Returns the Point3d position of the subnode's position, or offset.
   * @returns {Point3d}
   */
  public position(): Point3d;

  /**
   * Returns the Quaternion representation of the subnode's rotation.
   * @returns {Quaternion}
   */
  public rotation(): Quaternion;

  /**
   * Returns a Point3d representation of the subnode's scale.
   * @returns {Point3d}
   */
  public scale(): Point3d;

  /**
   * Sets whether or not the subnode is enabled.
   * @param {boolean} enabled true to enable the subnode, false to disable it.
   * @returns {void}
   */
  public setEnabled(enabled: boolean): void;

  /**
   * Sets the coordinates of the subnode's pivot.
   * @param {Point3d} pivot The Point3d to set the subnode's pivot to in field units.
   * @returns {void}
   */
  public setPivot(pivot: Point3d): void;

  /**
   * Sets the coordinates of the subnode's position.
   * @param {Point3d} position The Point3d to set the subnode's position to in field units.
   * @returns {void}
   */
  public setPosition(position: Point3d): void;

  /**
   * Sets the subnode's rotation.
   * @param {Quaternion} rotation The Quaternion to set the subnode's rotation to.
   * @returns {void}
   */
  public setRotation(rotation: Quaternion): void;

  /**
   * Sets the Subnode's scale.
   * @param {Point3d} scale The Point3d to set the subnode's scale to.
   * @returns {void}
   */
  public setScale(scale: Point3d): void;

  /**
   * Sets whether or not the subnode is visible.
   * @param {boolean} visible true to show the Subnode, false to hide it.
   * @returns {void}
   */
  public setVisible(visible: boolean): void;

  /**
   * Returns true if the subnode is visible, false if it is hidden.
   * @returns {boolean}
   */
  public visible(): boolean;

  /**
   * See enabled() and setEnabled().
   * @returns {boolean}
   */
  // /* Invalid - Duplicate property name */ enabled: boolean;

  /**
   * See localTransformation().
   * @returns {Matrix4x4}
   */
  // /* Invalid - Duplicate property name */ localTransformation: Matrix4x4;

  /**
   * See name().
   * @returns {string}
   */
  // /* Invalid - Duplicate property name */ name: string;

  /**
   * See pivot() and setPivot().
   * @returns {Point3d}
   */
  // /* Invalid - Duplicate property name */ pivot: Point3d;

  /**
   * See position() and setPosition().
   * @returns {Point3d}
   */
  // /* Invalid - Duplicate property name */ position: Point3d;

  /**
   * See rotation() and setRotation().
   * @returns {Quaternion}
   */
  // /* Invalid - Duplicate property name */ rotation: Quaternion;

  /**
   * See scale() and setScale().
   * @returns {Point3d}
   */
  // /* Invalid - Duplicate property name */ scale: Point3d;

  /**
   * See visible() and setVisible().
   * @returns {boolean}
   */
  // /* Invalid - Duplicate property name */ visible: boolean;
}

/**
 * The Vector2d JavaScript class. Defines a two dimensional vector.
 * The Vector2d class defines a bi-dimensional vector container. Vector2d objects can be instantiated
 * in the scripting environment.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classVector2d.html}
 */
declare class Vector2d extends QObject {
  /**
   * Create a new empty Vector2d.
   * @returns {void}
   */
  constructor();

  /**
   * Create a new Vector2d.
   * @param {double} x X value
   * @param {double} y Y value
   * @returns {void}
   */
  constructor(x: double, y: double);

  /**
   * Retrieve degree angle defined by Vector2d.
   * @returns {double}
   */
  public degreeAngle(): double;

  /**
   * Calculate dot product between current Vector2d and specified Vector2d.
   * @param {Vector2d} v2 Second Vector2d
   * @returns {double}
   */
  public dot(v2: Vector2d): double;

  /**
   * Normalize current Vector2d.
   * @returns {Vector2d}
   */
  public getNormalized(): Vector2d;

  /**
   * Project current Vector2d onto specified Vector2d.
   * @param {Vector2d} v2 Vector2d to project onto
   * @returns {Vector2d}
   */
  public getProjection(v2: Vector2d): Vector2d;

  /**
   * Test if the two vectors are equals.
   * @param {Vector2d} v2 Second Vector2d
   * @returns {boolean}
   */
  public isEqual(v2: Vector2d): boolean;

  /**
   * Test if the two vectors are not equals.
   * @param {Vector2d} v2 Second Vector2d
   * @returns {boolean}
   */
  public isNotEqual(v2: Vector2d): boolean;

  /**
   * Test if Vector2d is zero.
   * @returns {boolean}
   */
  public isZero(): boolean;

  /**
   * Retrieve length of Vector2d.
   * @returns {double}
   */
  public length(): double;

  /**
   * Retrieve square length of Vector2d.
   * @returns {double}
   */
  public lengthSq(): double;

  /**
   * Negate current Vector2d.
   * @returns {Vector2d}
   */
  public negate(): Vector2d;

  /**
   * Normalize current Vector2d.
   * @returns {Vector2d}
   */
  public normalize(): Vector2d;

  /**
   * Project current Vector2d onto specified Vector2d.
   * @param {Vector2d} v2 Vector2d to project onto
   * @returns {Vector2d}
   */
  public project(v2: Vector2d): Vector2d;

  /**
   * Retrieve radian angle defined by Vector2d.
   * @returns {double}
   */
  public radianAngle(): double;

  /**
   * Rotate Vector2d counter-clockwise of specified radian angle.
   * @param {double} rad Radian angle
   * @returns {Vector2d}
   */
  public rotate(rad: double): Vector2d;

  /**
   * Rotate Vector2d counter-clockwise of 270 degrees.
   * @returns {Vector2d}
   */
  public rotate270(): Vector2d;

  /**
   * Rotate Vector2d counter-clockwise of 90 degrees.
   * @returns {Vector2d}
   */
  public rotate90(): Vector2d;

  /**
   * x value
   * @returns {double}
   */
  x: double;

  /**
   * y value
   * @returns {double}
   */
  y: double;
}

/**
 * The Vector3d JavaScript class. Defines a three dimensional vector.
 * The Vector3d class defines a three-dimensional vector container. Vector3d objects can be
 * instantiated in the scripting environment.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classVector3d.html}
 */
declare class Vector3d extends QObject {
  /**
   * Create a new empty Vector3d.
   * @returns {void}
   */
  constructor();

  /**
   * Create a new Vector3d.
   * @param {double} x X value
   * @param {double} y Y value
   * @param {double} z Z value
   * @returns {void}
   */
  constructor(x: double, y: double, z: double);

  /**
   * Calculate cross product between current Vector3d and specified Vector3d.
   * @param {Vector3d} v2 Second Vector3d
   * @returns {Vector3d}
   */
  public cross(v2: Vector3d): Vector3d;

  /**
   * Calculate dot product between current Vector3d and specified Vector3d.
   * @param {Vector3d} v2 Second Vector3d
   * @returns {double}
   */
  public dot(v2: Vector3d): double;

  /**
   * Calculate cosine angle between current Vector3d and specified Vector3d.
   * @param {Vector3d} v2 Second Vector3d
   * @returns {double}
   */
  public getCos(v2: Vector3d): double;

  /**
   * Normalize current Vector3d.
   * @returns {Vector3d}
   */
  public getNormalized(): Vector3d;

  /**
   * Project current Vector3d onto specified Vector3d.
   * @param {Vector3d} v2 Vector3d to project onto
   * @returns {Vector3d}
   */
  public getProjection(v2: Vector3d): Vector3d;

  /**
   * Get ratio from projection of current Vector3d onto specified Vector3d.
   * @param {Vector3d} v2 Vector3d to project onto
   * @returns {double}
   */
  public getProjectionRatio(v2: Vector3d): double;

  /**
   * Calculate sine angle between current Vector3d and specified Vector3d.
   * @param {Vector3d} v2 Second Vector3d
   * @returns {double}
   */
  public getSin(v2: Vector3d): double;

  /**
   * Test if the two vectors are equals.
   * @param {Vector3d} v2 Second Vector3d
   * @returns {boolean}
   */
  public isEqual(v2: Vector3d): boolean;

  /**
   * Test if the two vectors are not equals.
   * @param {Vector3d} v2 Second Vector3d
   * @returns {boolean}
   */
  public isNotEqual(v2: Vector3d): boolean;

  /**
   * Test if Vector3d is zero.
   * @returns {boolean}
   */
  public isZero(): boolean;

  /**
   * Retrieve length of Vector3d.
   * @returns {double}
   */
  public length(): double;

  /**
   * Retrieve square length of Vector3d.
   * @returns {double}
   */
  public lengthSq(): double;

  /**
   * Negate current Vector3d.
   * @returns {Vector3d}
   */
  public negate(): Vector3d;

  /**
   * Normalize current Vector3d.
   * @returns {Vector3d}
   */
  public normalize(): Vector3d;

  /**
   * Project current Vector3d onto specified Vector3d.
   * @param {Vector3d} v2 Vector3d to project onto
   * @returns {Vector3d}
   */
  public project(v2: Vector3d): Vector3d;

  /**
   * Set the x, y, z coordinate to the given.
   * @param {double} x
   * @param {double} y
   * @param {double} z
   * @returns {void}
   */
  public setXYZ(x: double, y: double, z: double): void;

  /**
   * x value
   * @returns {double}
   */
  x: double;

  /**
   * y value
   * @returns {double}
   */
  y: double;

  /**
   * z value
   * @returns {double}
   */
  z: double;
}

/**
 * The WriteNode JavaScript object. Provide information about rendered images and the movie to
 * generate.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classWriteNode.html}
 */
declare class WriteNode extends QObject {
  /**
   * Return the scene's soundtrack in a temporary file in the WAV format.
   * @param {int} channelSize the audio channel size (i.e. 8 or 16 bit).
   * @param {int} channelCount the number of audio channels (i.e 1 for mono and 2 for stereo).
   * @param {int} sampleRate the audio sample rate in Hz (i.e. 22050, 44100, ...)..
   * @returns {string}
   */
  public exportSound(
    channelSize: int,
    channelCount: int,
    sampleRate: int
  ): string;

  /**
   * Returns the frame rate, as frames per second.
   * @returns {double}
   */
  public frameRate(): double;

  /**
   * Return true if exported scene contains sounds.
   * @returns {boolean}
   */
  public hasSound(): boolean;

  /**
   * Return list of generated images.
   * @returns {StringList}
   */
  public imageFiles(): StringList;

  /**
   * Return the pattern of generated images.
   * @returns {string}
   */
  public imageFilesPattern(): string;

  /**
   * Return movie folder.
   * @returns {string}
   */
  public movieDir(): string;

  /**
   * Return movie name.
   * @returns {string}
   */
  public movieName(): string;

  /**
   * Returns the start frame to be exported.
   * @returns {int}
   */
  public startFrame(): int;

  /**
   * Returns the stop frame to be exported.
   * @returns {int}
   */
  public stopFrame(): int;
}

/**
 * The deformation JavaScript global object. Provide deformation node parent matrix transformations.
 * Node interface specific to deformation networks.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classdeformation.html}
 * @example
 * function correctBoneMatrixFromPrevBone(prevBone, startMatrix, prevMatrix) {
 *     var correctedMatrix = bones[prevBone];
 *     if (correctedMatrix) {
 *         // override startMatrix and prevMatrix with prevbone correction
 *         startMatrix.clear();
 *         prevMatrix.clear();
 *         startMatrix.multiplyEq(correctedMatrix);
 *         prevMatrix.multiplyEq(correctedMatrix);
 *     }
 * }
 *
 * function correctBoneLength(nodeName, restLength, restOrientation, minLength, startMatrix, endMatrix) {
 *
 *     if (restLength < minLength) {
 *         var lengthOffset = new Vector2d(minLength, 0);
 *         lengthOffset = scene.toOGL(lengthOffset);
 *
 *         // redo matrix
 *         endMatrix.clear();
 *         endMatrix.multiplyEq(startMatrix);
 *         endMatrix.rotateDegrees(restOrientation, new Vector3d(0, 0, 1));
 *         endMatrix.translate(lengthOffset.x, lengthOffset.y, 0.0);
 *
 *         bones[nodeName] = new Matrix4x4().multiply(endMatrix);
 *     }
 * }
 *
 * function correctDeformBone(prevBone, nodeName, nextBone, startMatrix, endMatrix, prevMatrix, i) {
 *     if (prevBone != "") {
 *         var nodeNameKey = nodeName + i.toString();
 *         var prevBoneKey = prevBone + i.toString();
 *
 *         var length = Number(node.getTextAttr(nodeName, i, "length"));
 *         var radius = Number(node.getTextAttr(nodeName, i, "radius"));
 *         var orientation = Number(node.getTextAttr(nodeName, i, "orientation"));
 *         var nextBoneRadius = nextBone != "" ? Number(node.getTextAttr(nextBone, i, "radius")) : 0.0;
 *         var minLength = radius + nextBoneRadius + 1 / 32;
 *
 *         correctBoneMatrixFromPrevBone(prevBoneKey, startMatrix, prevMatrix);
 *         correctBoneLength(nodeNameKey, length, orientation, minLength, startMatrix, endMatrix);
 *     }
 * }
 *
 * startMatrix = deformation.lastDeformMatrix(nodeName, 0);
 * endMatrix = deformation.nextDeformMatrix(nodeName, 0);
 * prevMatrix = (prevBone != "") ? deformation.nextDeformMatrix(prevBone, 0) : (new Matrix4x4());
 *
 * correctDeformBone(prevBone, nodeName, nextBone, startMatrix, endMatrix, prevMatrix, i);
 */
declare class deformation extends SCR_AbstractInterface {
  /**
   * @param {string} node
   * @returns {boolean}
   */
  public isDeformationShown(node: string): boolean;

  /**
   * @param {string} node
   * @param {int} frame
   * @returns {Matrix4x4}
   */
  public lastDeformMatrix(node: string, frame: int): Matrix4x4;

  /**
   * @param {string} node
   * @returns {Matrix4x4}
   */
  public lastRestMatrix(node: string): Matrix4x4;

  /**
   * @param {string} node
   * @param {int} frame
   * @returns {Matrix4x4}
   */
  public nextDeformMatrix(node: string, frame: int): Matrix4x4;

  /**
   * @param {string} node
   * @returns {Matrix4x4}
   */
  public nextRestMatrix(node: string): Matrix4x4;
}

/**
 * The WebCCExporter JavaScript global object. Generate movies encoded in H.264.
 * This is an interface used by WebCC to generate a movie encoded in H.264 using a plugin that must be
 * downloaded separately from Cisco website. The plugin name is OpenH264.
 *  Using this API, user may generate valid H264 movie without using the QuickTime Technology from
 * Apple. This plugin works on Linux, where QuickTime is not available and will also work on Windows
 * and OSX.
 * See usage example in script: TB_WebCC_Render.js
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classWebCCExporter.html}
 */
declare class WebCCExporter extends SCR_AbstractInterface {
  /**
   * Generate a H264 movie with or without sound, using a list of images. The range of frames is only
   * used when including sound. The frame rate of the movie is the scene frame rate.
   * Typically, you would use this function in a two stage render:
   * @param {string} movieFilename the filename of the movie to generate
   * @param {StringList} framesFilenames an Array of filenames, each of the filename is a frame of the movie.
   * @param {int} [firstFrame=1] the initial start frame of the movie - used when extracting soundtrack - default : 1
   * @param {int} [lastFrame=-1] the last frame rendered - default: -1 (all frames)
   * @param {boolean} [withSound=true] include soundtrack or not - default: true
   * @param {int} [maxQp=33] max Quantization Parameter in range 18...51. Large values for more compression (and lower quality) - default: 33
   * @param {int} [iFramePeriod=1] duration between i-frames - default: 1
   * @returns {void}
   */
  public exportMovieFromFiles(
    movieFilename: string,
    framesFilenames: StringList,
    firstFrame?: int,
    lastFrame?: int,
    withSound?: boolean,
    maxQp?: int,
    iFramePeriod?: int
  ): void;

  /**
   * Generates a movie for the specified WRITE node. The node must be configured to render for QUICKTIME.
   * This function triggers a softrender for the specified write, it captures the images and sends them
   * to the OpenH264 plugins to generate a movie. If sound is required, it will also produce a
   * soundtrack, uncompressed.
   * The user can control the start frame and end frame.
   * @param {string} moduleName the name of the WRITE module - as used by the node interface (ie. 'Top/Write' ).
   * @param {int} [firstFrame=1] the initial start frame of the movie - default : 1
   * @param {int} [lastFrame=-1] the last frame rendered - default: -1 (all frames)
   * @param {boolean} [withSound=true] include soundtrack or not - default: true
   * @param {string} [movieFile=""] the name of the movie file generated - default: empty - so, it uses the filename specified in the WRITE node.
   * @param {int} [maxQp=33] max Quantization Parameter in range 18...51. Large values for more compression (and lower quality) - default: 33
   * @param {int} [iFramePeriod=1] duration between i-frames - default: 1
   * @returns {void}
   */
  public exportMovieFromWriteModule(
    moduleName: string,
    firstFrame?: int,
    lastFrame?: int,
    withSound?: boolean,
    movieFile?: string,
    maxQp?: int,
    iFramePeriod?: int
  ): void;

  /**
   * Generates a movie for each WRITE node configured to render with QuickTime. Basically, this function
   * scans the whole scene and trigger a softrender for each write nodes. The write node must be enabled
   * and must already configured to render with QuickTime (ie. render a movie, at least).
   * The sound track is rendered in movie.
   * The user can control the start frame and end frame.
   * @param {int} [fromFrame=1] the initial start frame of each movies - default : 1
   * @param {int} [toFrame=-1] the last frame rendered - default: -1 (all frames)
   * @param {int} [maxQp=33] max Quantization Parameter in range 18...51. Large values for more compression (and lower quality) - default: 33
   * @param {int} [iFramePeriod=1] duration between i-frames - default: 1
   * @returns {void}
   */
  public exportMovieFromWriteModules(
    fromFrame?: int,
    toFrame?: int,
    maxQp?: int,
    iFramePeriod?: int
  ): void;
}

/**
 * The Button JavaScript class. A simplified Button Qt widget.
 * This example creates a button with the label "Set Colour" that will call a function that sets the
 * colour of something whenever the button is pressed.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classButton.html}
 * @example
 * var setter = new Button();
 * setter.label = "Set Colour";
 * setter.callback = "colourSetter";
 */
declare class Button extends SCRIPT_QSWidget {
  /**
   * Use this to assign the name of another function. This function will be triggered automatically when
   * the button is pressed.
   * @returns {string}
   */
  callback: string;

  /**
   * Set the text on the button.
   * @returns {string}
   */
  label: string;
}

/**
 * The CheckBox JavaScript class. A simplified version of the CheckBox Qt widget.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classCheckBox.html}
 * @example
 * var myDialog = new Dialog();
 * myDialog.title = "CheckBox Example";
 *
 * var userInput = new CheckBox();
 * userInput.text = "Is this guide helpful?"
 *
 * myDialog.add(userInput);
 *
 * if (myDialog.exec()) {
 *     if (userInput.checked);
 *     MessageLog.trace("The guide is helpful!");
 * }
 */
declare class CheckBox extends SCRIPT_QSWidget {
  /**
   * Toggle whether or not the CheckBox is checked.
   * @returns {boolean}
   */
  checked: boolean;

  /**
   * The text shown alongside the CheckBox.
   * @returns {string}
   */
  text: string;
}

/**
 * The Dialog JavaScript class. A simplified version of the Qt dialog.
 * This class and the associated widget classes are used to build simple dialogs.
 * The widgets you can add to a Dialog are: LineEdit, NumberEdit, TimeEdit, DateEdit, SpinBox,
 * CheckBox, RadioButton, ComboBox, GroupBox, Slider, Button and Label
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classDialog.html}
 * @example
 * function sampleDialog() {
 *     var d = new Dialog();
 *     d.title = "Sample Dialog";
 *
 *     var inputL = new LineEdit;
 *     inputL.label = "Sample Line Edit";
 *     d.add(inputL);
 *
 *     if (d.exec()) {
 *         var sampleText = inputL.text;
 *         MessageLog.trace("The input text is " + sampleText + ".");
 *     }
 * }
 */
declare class Dialog extends SCRIPT_QSWidget {
  /**
   * Adds a widget to the dialog.
   * @param {SCRIPT_QSWidget} widget
   * @returns {void}
   */
  public add(widget: SCRIPT_QSWidget): void;

  /**
   * Adds spacers to the dialog layout.
   * @param {int} space
   * @returns {void}
   * @example
   * myDialog.addSpace(25);
   */
  public addSpace(space: int): void;

  /**
   * Run the dialog in modal mode. Pressing ok accepts the dialog input. Pressing cancel cancels the
   * dialog.
   * @returns {boolean}
   */
  public exec(): boolean;

  /**
   * Add a new column to the dialog.
   * @returns {void}
   * @example
   * myDialog.newColumn();
   */
  public newColumn(): void;

  /**
   * Adds a new tab to the dialog.
   * @param {string} label
   * @returns {void}
   * @example
   * myDialog.newTab("This is your tab label");
   */
  public newTab(label: string): void;

  /**
   * The label of the Cancel button.
   * @returns {string}
   * @example
   * myDialog.cancelButtonText = "Click here to reject";
   */
  cancelButtonText: string;

  /**
   * The title of the dialog. (Legacy, but still supported)
   * @returns {string}
   * @example
   * myDialog.caption = "My First Dialog";
   */
  caption: string;

  /**
   * The label of the OK button.
   * @returns {string}
   * @example
   * myDialog.okButtonText = "Click here to accept";
   */
  okButtonText: string;

  /**
   * The title of the dialog.
   * @returns {string}
   * @example
   * myDialog.title = "My First Dialog";
   */
  title: string;

  /**
   * The width of the dialog in pixels.
   * @returns {int}
   * @example
   * myDialog.width = 500;
   */
  width: int;
}

/**
 * The GroupBox JavaScript class. A simplified version of the GroupBox Qt widget.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classGroupBox.html}
 * @example
 * var groupBox = new GroupBox();
 * groupBox.title = "Group One";
 * myDialog.add(groupBox);
 */
declare class GroupBox extends SCRIPT_QSWidget {
  /**
   * Adds a widget to the groupBox.
   * @param {SCRIPT_QSWidget} widget
   * @returns {void}
   */
  public add(widget: SCRIPT_QSWidget): void;

  /**
   * Adds a spacer to the groupbox.
   * @param {int} space
   * @returns {void}
   * @example
   * groupBox.addSpace(15);
   */
  public addSpace(space: int): void;

  /**
   * Clears all the widgets in the group box.
   * @returns {void}
   * @example
   * groupBox.clear;
   */
  public clear(): void;

  /**
   * Creates a newColumn in the groupbox. It will be used by all subsequent add operations.
   * @returns {void}
   * @example
   * groupBox.newColumn();
   */
  public newColumn(): void;

  /**
   * Title of groupBox.
   * @returns {string}
   */
  title: string;
}

/**
 * The Label JavaScript class. A simplified version of the Label Qt widget.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classLabel.html}
 * @example
 * var bodyText = new Label();
 * bodyText.text = "This is will be displayed in the body of the dialog.";
 * myDialog.add(bodyText);
 */
declare class Label extends SCRIPT_QSWidget {
  /**
   * Text shown on the label.
   * @returns {string}
   */
  text: string;
}

/**
 * The RadioButton JavaScript class. A simplified version of the RadioButton Qt widget.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classRadioButton.html}
 * @example
 * var myDialog = new Dialog();
 * myDialog.title = "RadioButton Example";
 *
 * var optionOne = new RadioButton();
 * optionOne.text = "Pick me!";
 * var optionTwo = new RadioButton();
 * optionTwo.text = "No, pick me!";
 *
 * myDialog.add(optionOne);
 * myDialog.newColumn();
 * myDialog.add(optionTwo);
 *
 * if (myDialog.exec()) {
 *     if (optionOne.checked)
 *         MessageLog.trace("You picked the first option.");
 *     else if (optionTwo.checked)
 *         MessageLog.trace("You picked the second option.");
 *     else
 *         MessageLog.trace("Neither option was selected.");
 * }
 */
declare class RadioButton extends SCRIPT_QSWidget {
  /**
   * Toggle whether or not the RadioButton is checked.
   * @returns {boolean}
   */
  checked: boolean;

  /**
   * The text for the RadioButton label.
   * @returns {string}
   */
  text: string;
}

/**
 * The TextEdit JavaScript class. A simplified version of the TextEdit Qt widget.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classTextEdit.html}
 * @example
 * var myDialog = new Dialog();
 * myDialog.title = "TextEdit Example";
 *
 * var userInput = new TextEdit();
 * userInput.text = "Tell us how you feel about this tutorial."
 * myDialog.add(userInput);
 *
 * if (myDialog.exec()) {
 *     var inputText = userInput.text;
 *     MessageLog.trace(inputText);
 * }
 */
declare class TextEdit extends SCRIPT_QSWidget {
  /**
   * The text string shown in the widget.
   * @returns {string}
   */
  text: string;
}

/**
 * The specialFolders JavaScript global object. Provide the path to application specific paths.
 * By using the SpecialFolders functions, you can retrieve information about the different folders
 * (directories) used by the application. All of the functions are read-only. They return strings that
 * represent folders in use by the various applications. Depending on the application (e.g. Toon Boom
 * Harmony versus Toon Boom AnimatePro), the same content is stored in a different location.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classspecialFolders.html}
 * @example
 * var scriptFolder = specialFolders.resource + "/scripts";
 */
declare class specialFolders {
  /**
   * A read-only property containing the folder where the platforms specific applications are stored.
   * Application and Binary folders are different on OS X, but are identical on all other platforms.
   * @returns {string}
   */
  app: string;

  /**
   * This is a read-only property that contains the folder where the platforms specific binaries are
   * stored. Application and Binary folders are different on OS X. They are identical on all other
   * platforms.
   * @returns {string}
   */
  bin: string;

  /**
   * This is a read-only property that contains the folder where the platforms specific 32-bit binaries
   * are stored.
   * @returns {string}
   */
  bin32: string;

  /**
   * read-only property that contains the folder where application configuration files are stored.
   * Normally, this is the /etc folder.
   * @returns {string}
   */
  config: string;

  /**
   * This is a read-only property that contains the database folder.
   * @returns {string}
   */
  database: string;

  /**
   * read-only property that indicates where the [install]/etc folder is.
   * @returns {string}
   */
  etc: string;

  /**
   * This is a read-only property that contains the folder where the html help folder is.
   * @returns {string}
   */
  htmlHelp: string;

  /**
   * read-only property that contains the folder where the language files are stored.
   * @returns {string}
   */
  lang: string;

  /**
   * Location where the plugins that were designed for the previous SDK are stored. Replaces the plugins
   * property.
   * @returns {string}
   */
  legacyPlugins: string;

  /**
   * This is a read-only property that contains the folder where the platforms specific libraries are
   * stored.
   * @returns {string}
   */
  library: string;

  /**
   * read-only property that contains the platform specific folder.
   * @returns {string}
   */
  platform: string;

  /**
   * Location where the plugins that comply with the current SDK are stored.
   * @returns {string}
   */
  plugins: string;

  /**
   * read-only property that contains where the resources files are stored.
   * @returns {string}
   */
  resource: string;

  /**
   * read-only property for the root installation folder
   * @returns {string}
   */
  root: string;

  /**
   * This is a read-only property that contains where the application will create its temporary files.
   * @returns {string}
   */
  temp: string;

  /**
   * This is a read-only property that contains the folder where templates are stored.
   * @returns {string}
   */
  templateLibrary: string;

  /**
   * This is a read-only property that contains the folder where the user configuration is stored.
   * @returns {string}
   */
  userConfig: string;

  /**
   * This is a read-only property that contains the folder where the user layouts are stored.
   * @returns {string}
   */
  userLayouts: string;

  /**
   * This is a read-only property that contains the folder where the user scripts are stored.
   * @returns {string}
   */
  userScripts: string;
}

/**
 * The ExportVideoDlg JavaScript class. A dialog that can be used before an export to query the user
 * about various settings.
 * By default, it provides a field for asking an output file location, for specifying a range of frame
 * and for specifying a vertical and horizontal resolution. However, it does not provide an exporting
 * backend module.
 * It is then your responsibility to export the video in a fitting format. To support audio and video
 * options, you have to connect to the showAudioOptions and showVideoOptions signals and show an
 * appropriate dialog whenever the signals are sent. Additionally, you must register the file formats
 * available from your exporter. If there are more than one, you should listen to the fileFormatChanged
 * signal and rewire the video and audio options if needed. To retrieve the options, use the getters
 * for the settings property after the dialog is closed. The start export/update progress/end export
 * serves to provides a progress bar if desired
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/classExportVideoDlg.html}
 */
declare class ExportVideoDlg extends UI_DialogController {
  /**
   * Add a file extension to be known by the dialog, displaying it in the file explorer.
   * @param {string} type The desired file type to be added.
   * @param {string} typeDesc A description of the file type to be added.
   * @param {string} [key=""] (optional) Unique identifier for the file type, if not provided, type will be used
   * @returns {void}
   */
  public addFileType(type: string, typeDesc: string, key?: string): void;

  /**
   * Clear all the file extensions.
   * @returns {void}
   */
  public clearFileTypes(): void;

  /**
   * Disable AV buttons.
   * @returns {void}
   */
  public disableAVButtons(): void;

  /**
   * Disable Resolution box.
   * @returns {void}
   */
  public disableResolution(): void;

  /**
   * Enable the progress bar for the export.
   * @returns {void}
   */
  public enableProgress(): void;

  /**
   * Close the export progress dialog.
   * @returns {void}
   */
  public endExport(): void;

  /**
   * Open the dialog widget.
   * @returns {int}
   */
  public Exec(): int;

  /**
   * Get the audio configuration.
   * @returns {string}
   */
  public getAudioConfig(): string;

  /**
   * Get colour space.
   * @returns {string}
   */
  public getColorSpace(): string;

  /**
   * Get the name to display.
   * @returns {string}
   */
  public getDisplayName(): string;

  /**
   * Get the first scene frame index to export.
   * @returns {int}
   */
  public getFromRange(): int;

  /**
   * Get the output file.
   * @returns {string}
   */
  public getOutputFile(): string;

  /**
   * Get the output file with appended frame number.
   * @param {int} frame
   * @returns {string}
   */
  public getOutputFrameFile(frame: int): string;

  /**
   * Get the prefix used to set preferences.
   * @returns {string}
   */
  public getPrefPrefix(): string;

  /**
   * Get the x resolution of the scene.
   * @returns {int}
   */
  public getResX(): int;

  /**
   * Get the y resolution of the scene.
   * @returns {int}
   */
  public getResY(): int;

  /**
   * Get the title of the dialog.
   * @returns {string}
   */
  public getTitle(): string;

  /**
   * Get the last scene frame index to export.
   * @returns {int}
   */
  public getToRange(): int;

  /**
   * Get the video and audio configuration.
   * @returns {string}
   */
  public getVideoAndAudioConfig(): string;

  /**
   * Get the video configuration.
   * @returns {string}
   */
  public getVideoConfig(): string;

  /**
   * Initialize dialog and settings for export.
   * @returns {void}
   */
  public init(): void;

  /**
   * Set the audio configuration.
   * @param {string} config The audio configuration.
   * @returns {void}
   */
  public setAudioConfig(config: string): void;

  /**
   * Set colour space.
   * @param {string} colorSpace Color space name to be set.
   * @returns {void}
   */
  public setColorSpace(colorSpace: string): void;

  /**
   * Set the prefix used to set preferences.
   * @param {string} prefix The desired prefix used to set preferences.
   * @returns {void}
   */
  public setPrefPrefix(prefix: string): void;

  /**
   * Set the title of the dialog.
   * @param {string} title The desired title of the dialog.
   * @returns {void}
   */
  public setTitle(title: string): void;

  /**
   * Set the both video and audio configuration.
   * @param {string} config The video and audio configuration.
   * @returns {void}
   */
  public setVideoAndAudioConfig(config: string): void;

  /**
   * Set the video configuration.
   * @param {string} config The video configuration.
   * @returns {void}
   */
  public setVideoConfig(config: string): void;

  /**
   * Open a dialog for the export frame progress.
   * @returns {void}
   */
  public startExport(): void;

  /**
   * Update the progress for the export.
   * @param {int} progress The current progress.
   * @returns {void}
   */
  public updateProgress(progress: int): void;

  /**
   * Reports when the export is canceled.
   * @returns {void}
   */
  public exportCanceled: QSignal<() => void>;

  /**
   * Sends the index of the newly selected format, depending on the order of format registration.
   * @returns {void}
   */
  public fileFormatChanged: QSignal<() => void>;

  /**
   * Support audio options.
   * @returns {void}
   */
  public showAudioOptions: QSignal<() => void>;

  /**
   * Support video and audio options.
   * @returns {void}
   */
  public showVideoAndAudioOptions: QSignal<() => void>;

  /**
   * Support video options.
   * @returns {void}
   */
  public showVideoOptions: QSignal<() => void>;

  /**
   * Audio configuration.
   * @returns {string}
   */
  audioConfig: string;

  /**
   * Colour space name.
   * @returns {string}
   */
  colorSpace: string;

  /**
   * Name displayed of the dialog.
   * @returns {string}
   */
  display: string;

  /**
   * Begin index frame used for export.
   * @returns {int}
   */
  fromFrame: int;

  /**
   * File used for output.
   * @returns {string}
   */
  outputFile: string;

  /**
   * the prefix to use for the preference items
   * @returns {string}
   */
  prefPrefix: string;

  /**
   * title of the dialog
   * @returns {string}
   */
  title: string;

  /**
   * End index frame used for export.
   * @returns {int}
   */
  toFrame: int;

  /**
   * Video configuration.
   * @returns {string}
   */
  videoConfig: string;
}

/**
 * Deformation utility functions.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/namespaceDeformationUtils.html}
 */
declare namespace DeformationUtils {
  /**
   * Return a VertexTransform to apply a deformation node transformation.
   * @param {string} node the path to the last node in a deformation chain (ex: "Top/LastDeformationOfAChain")
   * @returns {QScriptValue}
   * @example
   * var vertexTransform = createVertexTransform("Top/LastDeformationOfAChain");
   * var fieldOffset = node.getAttr("Top/myOffset", frame.current(), "offset").pos2dValue();
   * // Apply the deformation chain deformation to the offset point.
   * // By example, use this function to apply a deformation chain on another deformation chain.
   * var newFieldOffset = vertexTransform.applyVertexTransform(fieldOffset);
   */
  function createVertexTransform(node: string): QScriptValue;

  /**
   * Return the deformation matrix describing the parent deformation.
   * @param {string} node the path to the node (ex: "Top/MyDeformation")
   * @param {double} frame the frame at which the parent transformation is evaluated Ex: var parentMatrix = getDeformationComponentMatrix("Top/MyDeformation", frame.current());var newPoint = parentMatrix.multiply(myPoint);
   * @returns {QScriptValue}
   * @example
   * var parentMatrix = getDeformationComponentMatrix("Top/MyDeformation", frame.current());
   * var newPoint = parentMatrix.multiply(myPoint);
   */
  function getDeformationComponentMatrix(
    node: string,
    frame: double
  ): QScriptValue;
}

/**
 *
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/script/namespaceMath.html}
 */
declare namespace Math {}

/**
 *
 *     This object is used to call Python functions.
 *
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/extended/module-PythonManager-PyObjectWrapper.html}
 */
declare class PyObjectWrapper {
  /**
   * This object is used to call Python functions.
   * @example
   * //JavaScript file
   * var myPythonObject = PythonManager.createPyObject("C:/pathToScript/pythonScript.py");
   *
   * var result = myPythonObject.py.add(6,6); //the name of the function, "add", corresponds to a Python function with the same name defined in a Python script.
   * MessageLog.trace(result); //show "12" in the MessageLog
   */
  constructor();

  /**
   * Add an abject, variable, function or script interface to the Python object.
   * Skip adding to avoid object reloading if an object with this name already exists.
   * @param {string} name Name of the object in Python
   * @param {Object} value Value of the object
   * @returns {boolean}
   */
  public addObject(name: string, value: Object): boolean;

  /**
   * Validate if the Python object contains a variable, object, function or script interface with the
   * specified name.
   * @param {string} name Name of the object in Python
   * @returns {boolean}
   */
  public hasObject(name: string): boolean;

  /**
   * Set an object, variable, function or script interface in the Python object.
   * Add a new object with the specified name if not yet existed, else override existing one.
   * @param {string} name Name of the object in Python
   * @param {Object} value Value of the object
   * @returns {boolean}
   */
  public setObject(name: string, value: Object): boolean;
}

/**
 *
 *     Constructor to be called in scripting.
 *
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/extended/ScriptToolbarDef.html}
 */
declare class ScriptToolbarDef {
  /**
   * Constructor to be called in scripting.
   * @param {Object} toolbarDef The definition of the toolbar.
   */
  constructor(toolbarDef: {
    /**
     * The unique id of the toolbar. Use of reverse DNS is recommended to avoid conflicts with other organizations.
     */
    id?: string;
    /**
     * The textual name of the toolbar as will appear in the toolbar menu.
     */
    text?: string;
    /**
     * The definition of the toolbar.
     */
    customizable?: boolean;
  });

  /**
   * This method adds a button to a toolbar.
   * @param {Object} button An object defining the properties of the button.
   */
  public addButton(button: {
    /**
     * The tooltip of the button.
     */
    text?: string;
    /**
     * The icon displayed in the toolbar.
     */
    icon?: string;
    /**
     * If true, the button will be checkable.
     */
    checkable?: boolean;
    /**
     * The action id if the action was added using ScriptManager.addAction or the name of a function in the current file or using the syntax: functionName in file.js.
     */
    action?: string;
    /**
     * The slot to call. If action is provided, this item is not needed.
     */
    slot?: string;
    /**
     * The first parameter value of the slot to call.
     */
    itemParameter?: string;
    /**
     * The shortcut id that can trigger this action.
     */
    shortcut?: string;
  }): void;
}

/**
 * This module provides functions to query drawing content. It contains these submodules: geometry and
 * query.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/extended/module-Drawing.html}
 */
declare namespace Drawing {
  /**
   * Each drawig has a set of metadata that can be defined and retrieved. These metadata are stored in
   * the drawing file. Each metadata is assigned to a key.
   * @param {Object} args Dictionary of arguments.
   * @example
   *  var settings = Tools.getToolSettings();
   *  var config = {
   *     drawing  : settings.currentDrawing,
   *     owner : "com.mycompany.script"
   *  };
   *  var metadata = Drawing.getMetaData(config);
   */
  function getMetaData(args: {
    /**
     * Drawing descriptor.
     */
    drawing?: Object;
    /**
     * The metada data unique identifier. It is strongly suggested to use reverse DNS to make sure your key is not conflicting with another one.
     */
    owner?: string;
  }): void;

  /**
   * At any time, a drawing has a modification counter. No drawing can have the same modification
   * counter. When a drawing changes, this counter increases. Capturing this can be useful for situation
   * where a complex computation needs to be cached until the drawing is changed.
   * @param {Object} args Dictionary of arguments.
   * @example
   *   var settings = Tools.getToolSettings();
   *   var config = {
   *      drawing  : settings.currentDrawing
   *   };
   *   var counter = Drawing.getModificationCounter(config);
   *  // If there are no current drawing
   *  counter = false;
   *  // example of returned value
   *  counter = 59;
   *  // Add a brush in the drawing... and run the example again
   *  counter = 72;
   */
  function getModificationCounter(args: {
    /**
     * Drawing descriptor.
     */
    drawing?: Object;
  }): void;

  /**
   * Returns the drawing pivot.
   * @param {Object} args Dictionary of arguments.
   * @example
   *   var settings = Tools.getToolSettings();
   *   var config = {
   *      drawing  : settings.currentDrawing
   *   };
   *   var pivot = Drawing.getPivot(config);
   *   // Example of return value
   *   pivot = {
   *     x: 534.2, y: 20.1
   *   };
   *   pivot = false; // If the drawing is invalid.
   */
  function getPivot(args: {
    /**
     * Drawing descriptor.
     */
    drawing?: Object;
  }): void;

  /**
   * Returns the drawing pivot.
   * @param {Objet} args Dictionary of arguments
   * @example
   *  var settings = Tools.getToolSettings();
   *  var complexObject = {
   *     strings : [ "a", "b"],
   *     a : 12
   *  };
   *  var arguments = {
   *    owner: "com.mycompany.script",
   *    drawing: settings.currentDrawing,
   *    metadata: [
   *       { key: "key1", value: "1"},
   *       { key: "key2", value: "2"},
   *       { key: "key3", value: JSON.stringify(complexObject)}
   *    ]
   *  }
   *  Drawing.setMetaData(arguments);
   *  var retrieved = Drawing.getMetaData({ drawing : arguments.drawing, owner : arguments.owner});
   *
   *  // The key/value at index 2 is a complex object. Parse it.
   *  if (retrieved)
   *     retrieved[2].value = JSON.parse(retrieved[2].value);
   *  System.println("retrieved: " + JSON.stringify(retrieved));
   * // console displays:
   * // retrieved: [{"key":"key1","value":"1"},{"key":"key2","value":"2"},{"key":"key3","value":{"strings":["a","b"],"a":12}}]
   */
  function setMetaData(args: {
    /**
     * Drawing descriptor.
     */
    drawing?: Object;
    /**
     * The metada data unique identifier. It is strongly suggested to use reverse DNS to make sure your key is not conflicting with another one.
     */
    owner?: string;
    /**
     * An array of key/value pairs. The key and value must be strings. If you want to store a more complex object, you can store its JSON representation using JSON.stringify() and restore it on reading using JSON.parse().
     */
    metadata?: any[];
  }): void;

  /**
   * Returns the drawing pivot.
   * @param {Object} args Dictionary of arguments.
   * @example
   *   var settings = Tools.getToolSettings();
   *   var config = {
   *      drawing  : settings.currentDrawing
   *   };
   *   var pivot = Drawing.getPivot(config);
   *   System.println("pivot before = " + JSON.stringify(pivot, null, ' ') + ";");
   *   pivot.x += 100;
   *   config.pivot = pivot;
   *   Drawing.setPivot(config);
   *   pivot = Drawing.getPivot(config);
   *   System.println("pivot after = " + JSON.stringify(pivot, null, ' ') + ";");
   */
  function setPivot(args: {
    /**
     * Drawing descriptor.
     */
    drawing?: Object;
    /**
     * Pivot object.
     */
    pivot?: Object;
  }): void;
}

declare namespace Drawing {
  /**
   * This module provides functions to retrieve fonts present in the system.
   * {@link https://docs.toonboom.com/help/harmony-24/scripting/extended/module-Drawing_font.html}
   */
  namespace font {
    /**
     * This function returns the default font id of the system.
     */
    function getDefaultId(): void;

    /**
     * This function returns the font identifier associated to a font. Note that the font id must not be
     * stored because it can change between runs when new fonts are installed.
     * @param {string} font The font name.
     */
    function getId(font: string): void;

    /**
     * This function returns the text layers in the drawing identified by the drawing key and art
     */
    function getList(): void;
  }
}

declare namespace Drawing {
  /**
   * This module provides functions to generate geometry like circle or rectangle or manipulate Bezier
   * paths.
   * Notes:
   *
   * The units for the drawings in the Toon Boom Animation's vector drawing are in the range [-2500,
   * 2500] for the x axis
   *   of a 12 field grid. Since the grid has an aspect ratio of 4/3, the vertical range (y axis) is in
   * the [-1875, 1875] range.
   *   The Toon Boom Animation's vector drawing coordinate system is not finite which means coordinates
   * can be bigger than the 2500 value
   *   of the 12 fields. For numerical stability reasons, it is not recommended to use coordinates higher
   * than 64000 because for very big numbers,
   *   there will be a loss of precision on the fractional part of the numbers.
   *
   * {@link https://docs.toonboom.com/help/harmony-24/scripting/extended/module-Drawing_geometry.html}
   */
  namespace geometry {
    /**
     * This function returns a bezier path that approximates a circle with 4 cubic beziers
     * @param {Object} arg Parameters for the generated circle
     * @returns {{x: double, y: double, onCurve: boolean}[]}
     * @example
     *    var arg = {
     *       path : [ {x: 0, y: 0, onCurve: true}, {x: 100, y: 100, onCurve: true} ],
     *       params : [ 0.25, 0.5, 0.75]
     *    }
     *    var newPath = Drawing.geometry.insertPoints(arg);
     *   // newPath now contains:
     *   newPath = [
     *   {"x":0,"y":0,"onCurve":true},
     *   {"x":25,"y":25,"onCurve":true},
     *   {"x":50,"y":50,"onCurve":true},
     *   {"x":75,"y":75,"onCurve":true},
     *   {"x":100,"y":100,"onCurve":true}
     *   ];
     */
    function createCircle(arg: {
      /**
       * The x coordinate of the center of the circle.
       */
      x?: double;
      /**
       * The y coordinate of the center of the circle.
       */
      y?: double;
      /**
       * The radius of the circle. This parameter is mandatory if radiusX and radiusY are not used.
       */
      radius?: double;
      /**
       * The x radius of the circle in the case of an ellipse.
       */
      radiusX?: double;
      /**
       * The y radius of the circle in the case of an ellipse.
       */
      radiusY?: double;
    }): { x: double; y: double; onCurve: boolean }[];

    /**
     * This function returns a rectangular bezier path
     * @param {Box2d} box
     * @example
     *    var arg = {
     *       path : [ {x: 0, y: 0, onCurve: true}, {x: 100, y: 100, onCurve: true} ],
     *       params : [ 0.25, 0.5, 0.75]
     *    }
     *    var newPath = Drawing.geometry.insertPoints(arg);
     *   // newPath now contains:
     *   newPath = [
     *   {"x":0,"y":0,"onCurve":true},
     *   {"x":25,"y":25,"onCurve":true},
     *   {"x":50,"y":50,"onCurve":true},
     *   {"x":75,"y":75,"onCurve":true},
     *   {"x":100,"y":100,"onCurve":true}
     *   ];
     */
    function createRectangle(box: {
      /**
       * The min x coordinate.
       */
      x0?: double;
      /**
       * The max x coordinate.
       */
      x1?: double;
      /**
       * The min y coordinate.
       */
      y0?: double;
      /**
       * The max y coordinate.
       */
      y1?: double;
    }): void;

    /**
     * This function returns a polyline from a cubic or quadratic bezier path
     * @param {Object} arg A dictionary of options
     * @returns {{x: double, y: double}[]}
     * @example
     *    var arg = {
     *       path : [ {x: 0, y: 0, onCurve: true}, {x: 100, y: 100, onCurve: true} ],
     *       params : [ 0.25, 0.5, 0.75]
     *    }
     *    var newPath = Drawing.geometry.insertPoints(arg);
     *   // newPath now contains:
     *   newPath = [
     *   {"x":0,"y":0,"onCurve":true},
     *   {"x":25,"y":25,"onCurve":true},
     *   {"x":50,"y":50,"onCurve":true},
     *   {"x":75,"y":75,"onCurve":true},
     *   {"x":100,"y":100,"onCurve":true}
     *   ];
     */
    function discretize(arg: {
      /**
       * The needed precision. 0-100.
       */
      precision?: double;
      /**
       * The Bezier path to be discretized.
       */
      path?: BezierPoint[];
    }): { x: double; y: double }[];

    /**
     * This function evaluates a bezier path at different parameter values
     * @param {Object} arg
     * @returns {{x:double, y:double, t:double}[]}
     * @example
     *    var arg = {
     *       path : [ {x: 0, y: 0, onCurve: true}, {x: 100, y: 100, onCurve: true} ],
     *       params : [ 0.25, 0.5, 0.75]
     *    }
     *    var newPath = Drawing.geometry.insertPoints(arg);
     *   // newPath now contains:
     *   newPath = [
     *   {"x":0,"y":0,"onCurve":true},
     *   {"x":25,"y":25,"onCurve":true},
     *   {"x":50,"y":50,"onCurve":true},
     *   {"x":75,"y":75,"onCurve":true},
     *   {"x":100,"y":100,"onCurve":true}
     *   ];
     */
    function evaluate(arg: {
      /**
       * The Bezier path to be discretized.
       */
      path?: BezierPoint[];
      /**
       * A list parameters to evaluate the path at.
       */
      params?: double[];
    }): { x: double; y: double; t: double }[];

    /**
     * This function returns a fitted bezier path from a polyline bezier path
     * @param {Object} arg
     * @returns {BezierPoint[]}
     * @example
     *    var arg = {
     *       path : [ {x: 0, y: 0, onCurve: true}, {x: 100, y: 100, onCurve: true} ],
     *       params : [ 0.25, 0.5, 0.75]
     *    }
     *    var newPath = Drawing.geometry.insertPoints(arg);
     *   // newPath now contains:
     *   newPath = [
     *   {"x":0,"y":0,"onCurve":true},
     *   {"x":25,"y":25,"onCurve":true},
     *   {"x":50,"y":50,"onCurve":true},
     *   {"x":75,"y":75,"onCurve":true},
     *   {"x":100,"y":100,"onCurve":true}
     *   ];
     */
    function fit(arg: {
      /**
       * If true, fits a single bezier otherwise generates a bezier path with any number of beziers.
       */
      oneBezier?: boolean;
      path?: Point2d[];
    }): BezierPoint[];

    /**
     * Returns the closest point to each points of a list
     * @param {Object} arg
     * @example
     *    var arg = {
     *       path : [ {x: 0, y: 0, onCurve: true}, {x: 100, y: 100, onCurve: true} ],
     *       params : [ 0.25, 0.5, 0.75]
     *    }
     *    var newPath = Drawing.geometry.insertPoints(arg);
     *   // newPath now contains:
     *   newPath = [
     *   {"x":0,"y":0,"onCurve":true},
     *   {"x":25,"y":25,"onCurve":true},
     *   {"x":50,"y":50,"onCurve":true},
     *   {"x":75,"y":75,"onCurve":true},
     *   {"x":100,"y":100,"onCurve":true}
     *   ];
     */
    function getClosestPoint(arg: {
      /**
       * The bezier path.
       */
      path?: BezierPoint[];
      /**
       * List of points.
       */
      points?: Point2d[];
    }): void;

    /**
     * This function returns intersections from bezier paths
     * @param {Object} arg
     * @example
     *    var arg = {
     *       path : [ {x: 0, y: 0, onCurve: true}, {x: 100, y: 100, onCurve: true} ],
     *       params : [ 0.25, 0.5, 0.75]
     *    }
     *    var newPath = Drawing.geometry.insertPoints(arg);
     *   // newPath now contains:
     *   newPath = [
     *   {"x":0,"y":0,"onCurve":true},
     *   {"x":25,"y":25,"onCurve":true},
     *   {"x":50,"y":50,"onCurve":true},
     *   {"x":75,"y":75,"onCurve":true},
     *   {"x":100,"y":100,"onCurve":true}
     *   ];
     */
    function getIntersections(arg: {
      /**
       * The first Bezier path
       */
      path0?: BezierPoint[];
      /**
       * The second Bezier path
       */
      path1?: BezierPoint[];
    }): void;

    /**
     * This function insert points at the given parameters t on a Bezier path
     * @param {Object} arg
     * @returns {BezierPoint[]}
     * @example
     *    var arg = {
     *       path : [ {x: 0, y: 0, onCurve: true}, {x: 100, y: 100, onCurve: true} ],
     *       params : [ 0.25, 0.5, 0.75]
     *    }
     *    var newPath = Drawing.geometry.insertPoints(arg);
     *   // newPath now contains:
     *   newPath = [
     *   {"x":0,"y":0,"onCurve":true},
     *   {"x":25,"y":25,"onCurve":true},
     *   {"x":50,"y":50,"onCurve":true},
     *   {"x":75,"y":75,"onCurve":true},
     *   {"x":100,"y":100,"onCurve":true}
     *   ];
     */
    function insertPoints(arg: {
      /**
       * The bezier path.
       */
      path?: BezierPoint[];
      /**
       * Parameters to insert points at.
       */
      params?: double[];
    }): BezierPoint[];

    /**
     * This function returns true if points provided in an array a contained withing a closed bezier path
     * @param {Object} arg
     * @returns {boolean[]}
     */
    function pathIsContaining(arg: {
      /**
       * The closed bezier path.
       */
      path?: BezierPoint[];
      /**
       * The 2d points to test.
       */
      points?: Point2d[];
    }): boolean[];

    /**
     * This function splits a Bezier path in different paths at given parameters
     * @param {Object} arg
     * @returns {BezierPoint[][]}
     */
    function split(arg: {
      /**
       * The bezier path.
       */
      path?: BezierPoint[];
      /**
       * Parameters to split at.
       */
      params?: double[];
    }): BezierPoint[][];

    /**
     * This function returns the constants used in the geometry computations
     * @returns {GeometryConstants}
     */
    function getConstants(): GeometryConstants;
  }
}

declare namespace Drawing {
  /**
   * This module mainly provides functions to query drawing content.
   * {@link https://docs.toonboom.com/help/harmony-24/scripting/extended/module-Drawing_query.html}
   */
  namespace query {
    /**
     * Evaluates a list of strokes of a drawing at specified params. This method can be used to sample a
     * drawing's strokes
     *  at regular parameters.
     * @param {EvaluateStrokesArgument} arg A list or options.
     * @example
     *  var settings = Tools.getToolSettings();
     *  if (!settings.currentDrawing) return;
     *  var config = {
     *     drawing  : settings.currentDrawing,
     *     art : settings.activeArt,
     *     paths : [
     *        { polygon: true, path : [ {x: 0, y: 0}, {x : 2500, y: 1875}]}
     *     ]
     *  };
     *  var intersection = Drawing.query.getIntersections(config);
     *
     * // Here is an example of the return value of this method.
     * // It returns an array of intersecting of intersections for each intersecting stroke.
     * intersections =
     * [
     *    [
     *       {
     *          "layer":1,
     *          "strokeIndex":0,
     *          "intersections":[
     *             {
     *                "x0":1143.9253778337531,   // x0, y0, x1 and y1 are the raw evaluation
     *                "y0":857.9440333753148,    // of the input path and the strokes at the intersection point.
     *                "t0":0.45757015113350125,  // The parameter t on the input path.
     *                "x1":1143.9253778337531,
     *                "y1":857.9440333753149,
     *                "t1":4.9557816435768265,  // The parameter t on the intersected drawing stroke
     *                "x":1143.921875,          // The rounded intersection x
     *                "y":857.9375              // The rounded intersection y
     *             },
     *             {
     *                "x0":1471.1965339233038,
     *                "y0":1103.3974004424779,
     *                "t0":0.5884786135693215,
     *                "x1":1471.1965339233038,
     *                "y1":1103.3974004424779,
     *                "t1":11.477369100294986,
     *                "x":1471.203125,
     *                "y":1103.390625
     *             }
     *          ]
     *       },
     *       {
     *          "layer":0,
     *          "strokeIndex":0,
     *          "intersections":[
     *             {
     *                "x0":719.0348772321428,
     *                "y0":539.2761579241071,
     *                "t0":0.28761395089285713,
     *                "x1":719.0348772321429,
     *                "y1":539.2761579241071,
     *                "t1":4.998731340680804,
     *                "x":719.03125,
     *                "y":539.28125
     *             }
     *          ]
     *       }
     *    ]
     * ];
     */
    function evaluateStrokes(arg: {
      /**
       * The drawing descriptor.
       */
      drawing?: Object;
      /**
       * The list of stroke to evaluate with the param at which to evaluate them.
       */
      strokes?: StrokeDescriptorAndParams[];
    }): void;

    /**
     * Returns the bounding box of a drawing
     * @param {DrawingQueryBasicArguments} args Dictionary of arguments
     * @example
     *  var settings = Tools.getToolSettings();
     *  if (!settings.currentDrawing) return;
     *  var config = {
     *     drawing  : settings.currentDrawing,
     *     art : settings.activeArt,
     *     paths : [
     *        { polygon: true, path : [ {x: 0, y: 0}, {x : 2500, y: 1875}]}
     *     ]
     *  };
     *  var intersection = Drawing.query.getIntersections(config);
     *
     * // Here is an example of the return value of this method.
     * // It returns an array of intersecting of intersections for each intersecting stroke.
     * intersections =
     * [
     *    [
     *       {
     *          "layer":1,
     *          "strokeIndex":0,
     *          "intersections":[
     *             {
     *                "x0":1143.9253778337531,   // x0, y0, x1 and y1 are the raw evaluation
     *                "y0":857.9440333753148,    // of the input path and the strokes at the intersection point.
     *                "t0":0.45757015113350125,  // The parameter t on the input path.
     *                "x1":1143.9253778337531,
     *                "y1":857.9440333753149,
     *                "t1":4.9557816435768265,  // The parameter t on the intersected drawing stroke
     *                "x":1143.921875,          // The rounded intersection x
     *                "y":857.9375              // The rounded intersection y
     *             },
     *             {
     *                "x0":1471.1965339233038,
     *                "y0":1103.3974004424779,
     *                "t0":0.5884786135693215,
     *                "x1":1471.1965339233038,
     *                "y1":1103.3974004424779,
     *                "t1":11.477369100294986,
     *                "x":1471.203125,
     *                "y":1103.390625
     *             }
     *          ]
     *       },
     *       {
     *          "layer":0,
     *          "strokeIndex":0,
     *          "intersections":[
     *             {
     *                "x0":719.0348772321428,
     *                "y0":539.2761579241071,
     *                "t0":0.28761395089285713,
     *                "x1":719.0348772321429,
     *                "y1":539.2761579241071,
     *                "t1":4.998731340680804,
     *                "x":719.03125,
     *                "y":539.28125
     *             }
     *          ]
     *       }
     *    ]
     * ];
     */
    function getBox(args: DrawingQueryBasicArguments): void;

    /**
     * Returns the closest point in a drawing for a list of points
     * @param {DrawingQueryBasicArguments} args Dictionary of arguments
     * @example
     *  var settings = Tools.getToolSettings();
     *  if (!settings.currentDrawing) return;
     *  var config = {
     *     drawing  : settings.currentDrawing,
     *     art : settings.activeArt,
     *     paths : [
     *        { polygon: true, path : [ {x: 0, y: 0}, {x : 2500, y: 1875}]}
     *     ]
     *  };
     *  var intersection = Drawing.query.getIntersections(config);
     *
     * // Here is an example of the return value of this method.
     * // It returns an array of intersecting of intersections for each intersecting stroke.
     * intersections =
     * [
     *    [
     *       {
     *          "layer":1,
     *          "strokeIndex":0,
     *          "intersections":[
     *             {
     *                "x0":1143.9253778337531,   // x0, y0, x1 and y1 are the raw evaluation
     *                "y0":857.9440333753148,    // of the input path and the strokes at the intersection point.
     *                "t0":0.45757015113350125,  // The parameter t on the input path.
     *                "x1":1143.9253778337531,
     *                "y1":857.9440333753149,
     *                "t1":4.9557816435768265,  // The parameter t on the intersected drawing stroke
     *                "x":1143.921875,          // The rounded intersection x
     *                "y":857.9375              // The rounded intersection y
     *             },
     *             {
     *                "x0":1471.1965339233038,
     *                "y0":1103.3974004424779,
     *                "t0":0.5884786135693215,
     *                "x1":1471.1965339233038,
     *                "y1":1103.3974004424779,
     *                "t1":11.477369100294986,
     *                "x":1471.203125,
     *                "y":1103.390625
     *             }
     *          ]
     *       },
     *       {
     *          "layer":0,
     *          "strokeIndex":0,
     *          "intersections":[
     *             {
     *                "x0":719.0348772321428,
     *                "y0":539.2761579241071,
     *                "t0":0.28761395089285713,
     *                "x1":719.0348772321429,
     *                "y1":539.2761579241071,
     *                "t1":4.998731340680804,
     *                "x":719.03125,
     *                "y":539.28125
     *             }
     *          ]
     *       }
     *    ]
     * ];
     */
    function getClosestPoint(args: DrawingQueryBasicArguments): void;

    /**
     * This function returns all the data of the drawing using contours and pencil strokes.
     *  This method differs from the Drawing.query.getStrokes() method. For example, it returns
     *  the color definitions and is thus more suitable to make export functions rather than vector
     *  drawing manipulations.
     * @param {Object} args Dictionary of arguments.
     * @example
     *  var settings = Tools.getToolSettings();
     *  if (!settings.currentDrawing) return;
     *  var config = {
     *     drawing  : settings.currentDrawing,
     *     art : settings.activeArt,
     *     paths : [
     *        { polygon: true, path : [ {x: 0, y: 0}, {x : 2500, y: 1875}]}
     *     ]
     *  };
     *  var intersection = Drawing.query.getIntersections(config);
     *
     * // Here is an example of the return value of this method.
     * // It returns an array of intersecting of intersections for each intersecting stroke.
     * intersections =
     * [
     *    [
     *       {
     *          "layer":1,
     *          "strokeIndex":0,
     *          "intersections":[
     *             {
     *                "x0":1143.9253778337531,   // x0, y0, x1 and y1 are the raw evaluation
     *                "y0":857.9440333753148,    // of the input path and the strokes at the intersection point.
     *                "t0":0.45757015113350125,  // The parameter t on the input path.
     *                "x1":1143.9253778337531,
     *                "y1":857.9440333753149,
     *                "t1":4.9557816435768265,  // The parameter t on the intersected drawing stroke
     *                "x":1143.921875,          // The rounded intersection x
     *                "y":857.9375              // The rounded intersection y
     *             },
     *             {
     *                "x0":1471.1965339233038,
     *                "y0":1103.3974004424779,
     *                "t0":0.5884786135693215,
     *                "x1":1471.1965339233038,
     *                "y1":1103.3974004424779,
     *                "t1":11.477369100294986,
     *                "x":1471.203125,
     *                "y":1103.390625
     *             }
     *          ]
     *       },
     *       {
     *          "layer":0,
     *          "strokeIndex":0,
     *          "intersections":[
     *             {
     *                "x0":719.0348772321428,
     *                "y0":539.2761579241071,
     *                "t0":0.28761395089285713,
     *                "x1":719.0348772321429,
     *                "y1":539.2761579241071,
     *                "t1":4.998731340680804,
     *                "x":719.03125,
     *                "y":539.28125
     *             }
     *          ]
     *       }
     *    ]
     * ];
     */
    function getData(args: {
      /**
       * Drawing descriptor.
       */
      drawing?: Object;
    }): void;

    /**
     * This method is similar to Drawing.query.getStrokes. There is an additional layers parameter to
     * specify which layer
     *  to return the strokes for. This could be used, for example in a function that would only modify the
     * top layer of a drawing.
     * @param {DrawingQueryBasicArguments} args Dictionary of arguments
     * @example
     *  var settings = Tools.getToolSettings();
     *  if (!settings.currentDrawing) return;
     *  var config = {
     *     drawing  : settings.currentDrawing,
     *     art : settings.activeArt,
     *     paths : [
     *        { polygon: true, path : [ {x: 0, y: 0}, {x : 2500, y: 1875}]}
     *     ]
     *  };
     *  var intersection = Drawing.query.getIntersections(config);
     *
     * // Here is an example of the return value of this method.
     * // It returns an array of intersecting of intersections for each intersecting stroke.
     * intersections =
     * [
     *    [
     *       {
     *          "layer":1,
     *          "strokeIndex":0,
     *          "intersections":[
     *             {
     *                "x0":1143.9253778337531,   // x0, y0, x1 and y1 are the raw evaluation
     *                "y0":857.9440333753148,    // of the input path and the strokes at the intersection point.
     *                "t0":0.45757015113350125,  // The parameter t on the input path.
     *                "x1":1143.9253778337531,
     *                "y1":857.9440333753149,
     *                "t1":4.9557816435768265,  // The parameter t on the intersected drawing stroke
     *                "x":1143.921875,          // The rounded intersection x
     *                "y":857.9375              // The rounded intersection y
     *             },
     *             {
     *                "x0":1471.1965339233038,
     *                "y0":1103.3974004424779,
     *                "t0":0.5884786135693215,
     *                "x1":1471.1965339233038,
     *                "y1":1103.3974004424779,
     *                "t1":11.477369100294986,
     *                "x":1471.203125,
     *                "y":1103.390625
     *             }
     *          ]
     *       },
     *       {
     *          "layer":0,
     *          "strokeIndex":0,
     *          "intersections":[
     *             {
     *                "x0":719.0348772321428,
     *                "y0":539.2761579241071,
     *                "t0":0.28761395089285713,
     *                "x1":719.0348772321429,
     *                "y1":539.2761579241071,
     *                "t1":4.998731340680804,
     *                "x":719.03125,
     *                "y":539.28125
     *             }
     *          ]
     *       }
     *    ]
     * ];
     */
    function getIntersections(args: DrawingQueryBasicArguments): void;

    /**
     * This method is similar to Drawing.query.getStrokes. There is an additional layers parameter to
     * specify which layer
     *  to return the strokes for. This could be used, for example in a function that would only modify the
     * top layer of a drawing.
     * @param {Object} args Dictionary of arguments.
     * @example
     *   var settings = Tools.getToolSettings();
     *   if (!settings.currentDrawing) return;
     *   var config = {
     *      drawing  : settings.currentDrawing,
     *      art : settings.activeArt
     *   };
     *   var strokes = Drawing.query.getStrokes(config);
     *   // Here is an example of the returned value for an unbordered painted rectangle.
     *   // Refer to the tutorial on the vector model to know how to interpret this data
     *   strokes =
     *   {
     *    "layers":[
     *       {
     *          "index":0,
     *          "shaders":[
     *             {
     *                "colorId":"08e9426feb78d771"
     *             }
     *          ],
     *          "joints":[
     *             {
     *                "x":-1205.5625, "y":1004.15625,
     *                "strokes":[
     *                   {
     *                      "strokeIndex":0, "vertex":0
     *                   },
     *                   {
     *                      "strokeIndex":0,  "vertex":4
     *                   }
     *                ]
     *             }
     *          ],
     *          "strokes":[
     *             {
     *                "fromJoint":0,
     *                "toJoint":0,
     *                "path":[
     *                {"x":-1205.5625,"y":1004.15625,"onCurve":true},
     *                {"x":-1205.5625,"y":-523.625,"onCurve":true},
     *                {"x":721.515625,"y":-523.625,"onCurve":true},
     *                {"x":721.515625,"y":1004.15625,"onCurve":true},
     *                {"x":-1205.5625,"y":1004.15625,"onCurve":true}
     *                ],
     *                "numBeziers":4,
     *                "closed":true,
     *                "shaderRight":0
     *             }
     *          ]
     *       }
     *    ],
     *    "drawing":{
     *       "drawingId":"11",
     *       "elementId":1,
     *       "projectId":"08ec74b9f20ec3c2",
     *       "isValid":true
     *    },
     *    "art":2
     * };
     */
    function getLayerStrokes(args: {
      /**
       * Drawing descriptor.
       */
      drawing?: Object;
      /**
       * Art index.
       */
      art?: Object;
      /**
       * List of layer indices.
       */
      layers?: any[];
    }): void;

    /**
     * Returns the number of layers in a drawing
     * @param {Object} args Dictionary of arguments.
     * @example
     *   var settings = Tools.getToolSettings();
     *   if (!settings.currentDrawing) return;
     *   var config = {
     *      drawing  : settings.currentDrawing,
     *      art : settings.activeArt
     *   };
     *   var strokes = Drawing.query.getStrokes(config);
     *   // Here is an example of the returned value for an unbordered painted rectangle.
     *   // Refer to the tutorial on the vector model to know how to interpret this data
     *   strokes =
     *   {
     *    "layers":[
     *       {
     *          "index":0,
     *          "shaders":[
     *             {
     *                "colorId":"08e9426feb78d771"
     *             }
     *          ],
     *          "joints":[
     *             {
     *                "x":-1205.5625, "y":1004.15625,
     *                "strokes":[
     *                   {
     *                      "strokeIndex":0, "vertex":0
     *                   },
     *                   {
     *                      "strokeIndex":0,  "vertex":4
     *                   }
     *                ]
     *             }
     *          ],
     *          "strokes":[
     *             {
     *                "fromJoint":0,
     *                "toJoint":0,
     *                "path":[
     *                {"x":-1205.5625,"y":1004.15625,"onCurve":true},
     *                {"x":-1205.5625,"y":-523.625,"onCurve":true},
     *                {"x":721.515625,"y":-523.625,"onCurve":true},
     *                {"x":721.515625,"y":1004.15625,"onCurve":true},
     *                {"x":-1205.5625,"y":1004.15625,"onCurve":true}
     *                ],
     *                "numBeziers":4,
     *                "closed":true,
     *                "shaderRight":0
     *             }
     *          ]
     *       }
     *    ],
     *    "drawing":{
     *       "drawingId":"11",
     *       "elementId":1,
     *       "projectId":"08ec74b9f20ec3c2",
     *       "isValid":true
     *    },
     *    "art":2
     * };
     */
    function getNumberOfLayers(args: {
      /**
       * Drawing descriptor.
       */
      drawing?: Object;
      /**
       * Art index.
       */
      art?: Object;
    }): void;

    /**
     * This function returns all the strokes of the drawing.
     * @param {DrawingQueryBasicArguments} args Dictionary of arguments
     * @returns {Object}
     * @example
     *   var settings = Tools.getToolSettings();
     *   if (!settings.currentDrawing) return;
     *   var config = {
     *      drawing  : settings.currentDrawing,
     *      art : settings.activeArt
     *   };
     *   var strokes = Drawing.query.getStrokes(config);
     *   // Here is an example of the returned value for an unbordered painted rectangle.
     *   // Refer to the tutorial on the vector model to know how to interpret this data
     *   strokes =
     *   {
     *    "layers":[
     *       {
     *          "index":0,
     *          "shaders":[
     *             {
     *                "colorId":"08e9426feb78d771"
     *             }
     *          ],
     *          "joints":[
     *             {
     *                "x":-1205.5625, "y":1004.15625,
     *                "strokes":[
     *                   {
     *                      "strokeIndex":0, "vertex":0
     *                   },
     *                   {
     *                      "strokeIndex":0,  "vertex":4
     *                   }
     *                ]
     *             }
     *          ],
     *          "strokes":[
     *             {
     *                "fromJoint":0,
     *                "toJoint":0,
     *                "path":[
     *                {"x":-1205.5625,"y":1004.15625,"onCurve":true},
     *                {"x":-1205.5625,"y":-523.625,"onCurve":true},
     *                {"x":721.515625,"y":-523.625,"onCurve":true},
     *                {"x":721.515625,"y":1004.15625,"onCurve":true},
     *                {"x":-1205.5625,"y":1004.15625,"onCurve":true}
     *                ],
     *                "numBeziers":4,
     *                "closed":true,
     *                "shaderRight":0
     *             }
     *          ]
     *       }
     *    ],
     *    "drawing":{
     *       "drawingId":"11",
     *       "elementId":1,
     *       "projectId":"08ec74b9f20ec3c2",
     *       "isValid":true
     *    },
     *    "art":2
     * };
     */
    function getStrokes(args: {
      /**
       * Drawing descriptor
       */
      drawing?: Object;
      /**
       * The art number
       */
      art?: int;
    }): Object;
  }
}

declare namespace Drawing {
  /**
   * This module provides functions to manipulate the drawing selection.
   * {@link https://docs.toonboom.com/help/harmony-24/scripting/extended/module-Drawing_selection.html}
   */
  namespace selection {
    /**
     * Clears all the selected strokes and contours for all drawings and arts.
     */
    function clear(): void;

    /**
     * Returns the list of selected strokes in a drawing.
     * @param {Object} args Dictionary of arguments
     */
    function get(args: {
      /**
       * Drawing descriptor
       */
      drawing?: Object;
      /**
       * art index
       */
      art?: Object;
    }): void;

    /**
     *
     * @param {Object} args Dictionary of arguments
     */
    function set(args: {
      /**
       * Drawing descriptor
       */
      drawing?: Object;
      /**
       * art index
       */
      art?: Object;
      /**
       * List of selected strokes descriptor
       */
      selectedStrokes?: Object[];
    }): void;
  }
}

declare namespace Drawing {
  /**
   * This module provides functions to retrieve text layers in the Toonboom vector drawings.
   * Notes:
   *
   *  This module being a query, its name is Drawing.text with text in lowercase to distinguish from
   * Drawing.Text which is for operations on text layers.
   *
   * {@link https://docs.toonboom.com/help/harmony-24/scripting/extended/module-Drawing_text.html}
   */
  namespace text {
    /**
     * This function returns the text layers in the drawing identified by the drawing key and art
     * @param {Object} arg
     */
    function getTextLayers(arg: {
      /**
       * The drawing key.
       */
      drawing?: DrawingKey;
      /**
       * The art identifier
       */
      art?: int;
    }): void;
  }
}

declare namespace Drawing {
  /**
   * This module provides functions to manipulate text layers in the Toonboom vector drawings.
   * {@link https://docs.toonboom.com/help/harmony-24/scripting/extended/module-Drawing_Text_.html}
   */
  namespace Text {
    /**
     * This function appends text to a specified text layer. This can be useful if someone wants to write a
     * line of text with different sizes or colors.
     * @param {Object} arg
     */
    function appendToTextLayers(arg: {
      /**
       * The drawing key.
       */
      drawing?: DrawingKey;
      /**
       * The art identifier
       */
      art?: int;
      /**
       * The text layers.
       */
      layers?: TextLayer[];
    }): void;

    /**
     * This function creates new text layers in the specified drawing
     * @param {Object} arg
     */
    function createTextLayers(arg: {
      /**
       * The drawing key.
       */
      drawing?: DrawingKey;
      /**
       * The art identifier
       */
      art?: int;
      /**
       * The text layers.
       */
      layers?: TextLayer[];
    }): void;

    /**
     * This function deletes a list of text layers. Be careful to the order of the text layer ids when
     * removing many layers.
     * They must be in decreasing order.
     * @param {Object} arg
     */
    function eraseTextLayers(arg: {
      /**
       * The drawing key.
       */
      drawing?: DrawingKey;
      /**
       * The art identifier
       */
      art?: int;
      /**
       * The text layers ids.
       */
      layers?: int[];
    }): void;
  }
}

/**
 * This module provides functions to manipulate the layers of a Drawing. All the operations are
 * executed
 *  upon call. When calling any of the methods, the indices of the layers and the strokes in a layer
 * might end up
 *  modified.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/extended/module-DrawingTools.html}
 */
declare namespace DrawingTools {
  /**
   * This function is used to create a layer in a specified drawing
   * @param {Object} arg A dictionary of options
   * @example
   *  var n = selection.selectedNode(0); // First selected node
   *  DrawingTools.createLayers( {
   *    label : "My Modify layer Example",
   *    drawing : {node: n, frame: frame.current()},
   *    art: 2, // Line art
   *    masks : [
   *       {
   *          polygon: true,
   *          path: [ {x: 60, y: 60},
   *                   {x: 70, y: 60},
   *                   {x: 70, y: 70},
   *                   {x: 60, y: 70},
   *                   {x: 60, y: 60}],
   *          holes : [
   *             [ {x: 65, y: 65},
   *             {x: 65, y: 68},
   *             {x: 68, y: 68},
   *             {x: 68, y: 65},
   *             {x: 65, y: 65}]
   *          ]
   *       }
   *    ],
   *    layers : [
   *       {
   *          shaders : [
   *             { colorId : "0000000000000003" }  // This is the default vectorization color
   *          ],
   *          under : false,
   *          referenceLayer: 0,
   *          strokes : [
   *          {
   *             shaderLeft: 0,
   *          stroke : true,
   *          pencilColorId : "0000000000000003", // This is the default vectorization color
   *          thickness: 1,
   *          polygon: true,
   *          path: [ {x: 0, y: 0},
   *                   {x: 2500/12, y: 0},
   *                   {x: 2500/12, y: 1875/12},
   *                   {x: 0, y: 1875/12},
   *                   {x: 0, y: 0}]
   *          }
   *       ] }
   *    ]
   *    });
   */
  function createLayers(arg: {
    /**
     * Drawing descriptor
     */
    drawing?: Object;
    /**
     * The drawing's art index. Must be 0, 1, 2 or 3.
     */
    art?: Object;
    /**
     * The undo command label.
     */
    label?: string;
    /**
     * A list of layers definitions
     */
    layers?: Object[];
    /**
     * A list of masks that to be applied to the newly created layers.
     */
    masks?: BezierContour[];
  }): void;

  /**
   * This function is used to delete layers in a specified drawing
   * @param {Object} arg A dictionary of options
   * @example
   *  var config = {
   *     label : "Delete bottom layer",
   *     drawing  : { node : selection.selectedNode(), frame : frame.current() },
   *     art : 2, // 0 = underlay, 1 = color art, 2 = line art, 3 = overlay
   *     layers : [ 0 ] // bottom layer
   *  };
   *  DrawingTools.deleteLayers(config);
   */
  function deleteLayers(arg: {
    /**
     * Drawing descriptor
     */
    drawing?: Object;
    /**
     * The drawing's art index. Must be 0, 1, 2 or 3.
     */
    art?: Object;
    /**
     * The undo command label.
     */
    label?: string;
    /**
     * A list of layer indices.
     */
    layers?: int[];
  }): void;

  /**
   * This function is used to delete strokes in a layer of a specified drawing. If a
   * stroke is part of a painted contour, this will have the effect of unpainting the contour.
   * @param {Object} arg A dictionary of options
   * @example
   *  var config = {
   *     label : "Modify one stroke",
   *     drawing  : { node : "Top/Drawing", frame : 1 },
   *     art : 2, // 0 = underlay, 1 = color art, 2 = line art, 3 = overlay
   *     strokes : [ {
   *        layer: 0, strokeIndex: 0, insertPoints : [ 0.5, 1.5 ] // Will insert 2 points in the bezier path
   *     } ]
   *  };
   *  DrawingTools.modifyStrokes(config);
   *
   *
   */
  function deleteStrokes(arg: {
    /**
     * Drawing descriptor
     */
    drawing?: Object;
    /**
     * The drawing's art index. Must be 0, 1, 2 or 3.
     */
    art?: Object;
    /**
     * The undo command label.
     */
    label?: string;
    /**
     * The list of strokes to delete.
     */
    strokes?: Object[];
  }): void;

  /**
   * This function is used to insert eraser contours in layers of a specified drawing. Please note, that
   * this is not the same as deleteLayers.
   * The deleteLayers function completely erases layers whereas eraseLayers is like using the Eraser Tool
   * on a list of layers.
   * @param {Object} arg A dictionary of options
   * @example
   *  var config = {
   *     label : "Modify one stroke",
   *     drawing  : { node : "Top/Drawing", frame : 1 },
   *     art : 2, // 0 = underlay, 1 = color art, 2 = line art, 3 = overlay
   *     strokes : [ {
   *        layer: 0, strokeIndex: 0, insertPoints : [ 0.5, 1.5 ] // Will insert 2 points in the bezier path
   *     } ]
   *  };
   *  DrawingTools.modifyStrokes(config);
   *
   *
   */
  function eraseLayers(arg: {
    /**
     * Drawing descriptor
     */
    drawing?: Object;
    /**
     * The drawing's art index. Must be 0, 1, 2 or 3.
     */
    art?: Object;
    /**
     * The undo command label.
     */
    label?: string;
    /**
     * The list of layer indices to be modified. If empty or unspecified, all the layers of the drawing are erased.
     */
    layers?: int[];
    /**
     * A list of masks that to be applied to the newly created layers.
     */
    masks?: BezierContour[];
  }): void;

  /**
   * This function is used to modify a layer in a specified drawing by replacing all of its strokes by
   * other strokes. This method works exaclty
   * as the createLayers method with the exception that a layer index must be specified by each object.
   * One could replace the call to modifyLayers
   * by a call to deleteLayers followed by a call to createLayers. The only problem with this approach is
   * the index computation because the layer
   * indices of the drawing change after the deletion.  The use of modifyLayers prevent the user from
   * having to compute the new indices of the layer
   * for the createLayers.
   * @param {Object} arg A dictionary of options
   * @example
   *  var config = {
   *     label : "Modify one stroke",
   *     drawing  : { node : "Top/Drawing", frame : 1 },
   *     art : 2, // 0 = underlay, 1 = color art, 2 = line art, 3 = overlay
   *     strokes : [ {
   *        layer: 0, strokeIndex: 0, insertPoints : [ 0.5, 1.5 ] // Will insert 2 points in the bezier path
   *     } ]
   *  };
   *  DrawingTools.modifyStrokes(config);
   *
   *
   */
  function modifyLayers(arg: {
    /**
     * Drawing descriptor
     */
    drawing?: Object;
    /**
     * The drawing's art index. Must be 0, 1, 2 or 3.
     */
    art?: Object;
    /**
     * The undo command label.
     */
    label?: string;
    /**
     * A list of layers definitions
     */
    layers?: Object[];
    /**
     * A list of masks that to be applied to the newly created layers.
     */
    masks?: BezierContour[];
  }): void;

  /**
   * This function is used to modify strokes in a layer of a specified drawing
   * @param {Object} arg A dictionary of options
   * @example
   *  var config = {
   *     label : "Modify one stroke",
   *     drawing  : { node : "Top/Drawing", frame : 1 },
   *     art : 2, // 0 = underlay, 1 = color art, 2 = line art, 3 = overlay
   *     strokes : [ {
   *        layer: 0, strokeIndex: 0, insertPoints : [ 0.5, 1.5 ] // Will insert 2 points in the bezier path
   *     } ]
   *  };
   *  DrawingTools.modifyStrokes(config);
   *
   *
   */
  function modifyStrokes(arg: {
    /**
     * Drawing descriptor
     */
    drawing?: Object;
    /**
     * The drawing's art index. Must be 0, 1, 2 or 3.
     */
    art?: Object;
    /**
     * The undo command label.
     */
    label?: string;
    /**
     * The list of strokes to modify.
     */
    strokes?: Object[];
  }): void;

  /**
   * This function is used to paint at a specific point in a drawing like using the paint tool.
   * @param {Object} arg A dictionary of options
   * @example
   *  var n = selection.selectedNode(0);
   *  var f = frame.current();
   *  DrawingTools.paintAt(
   *     {
   *        label : "Paint at (0,0)",
   *        drawing : {node: n, frame: f},
   *            art: 2,
   *        points :
   *           [
   *              {
   *                 x: 0, y: 0, colorId : "0000000000000003"
   *              }
   *           ]
   *     }
   *
   *  );
   */
  function paintAt(arg: {
    /**
     * Drawing descriptor
     */
    drawing?: Object;
    /**
     * The drawing's art index. Must be 0, 1, 2 or 3.
     */
    art?: Object;
    /**
     * The undo command label.
     */
    label?: string;
    /**
     * The list of points and colors to using when painting.
     */
    points?: Object[];
  }): void;
}

/**
 * This module is used to manage the Python interpreter and to create a Python object in JavaScript.
 *  For documentation on how to call Python function, check the PyObjectWrapper class.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/extended/module-PythonManager.html}
 */
declare namespace PythonManager {
  /**
   * Add a path to the Python sys.path, allowing the user to import a Python library located in that
   * path.
   *  Its also possible to edit the environment variable "PYTHONPATH" instead of using this function.
   * Note: Once a library is imported, Python will cache a copy of that library. So even if you remove
   * the line calling "addSysPath", Python will still be able to import that library in every other
   * script execution.
   *  The only way to remove a libray from the cache is to restart the application.
   * @param {string} path path where some Python module are located.
   * @example
   *  # Python file
   *  def testJsFunction(f):
   *    tuple = (5, 2, 8)
   *    result = f.call(tuple)
   *    print result # print 15
   */
  function addSysPath(path: string): void;

  /**
   * Create or return existing Python object created with the specified Python script and associated with
   * Python 'moduleName' module.
   *  The returned object will have a 'py' property having the functions declared in the Python script as
   * properties, allowing the user to call those Python functions.
   *  See the documentation on the PyObjectWrapper class for information on how to call Python function.
   * Note: Python module will be reloaded if the Python script has been changed. In this case the module
   * functions will be updated, but the removed Python functions will remain in memory.
   * @param {string} path The path where a Python script is located.
   * @param {string} moduleName The name of the Python module associated with loaded script. If not specified or empty, the script file base name is used.
   * @returns {PyObjectWrapper}
   * @example
   *  # Python file
   *  def testJsFunction(f):
   *    tuple = (5, 2, 8)
   *    result = f.call(tuple)
   *    print result # print 15
   */
  function createPyObject(path: string, moduleName: string): PyObjectWrapper;

  /**
   * Return a collection of created Python objects (see createPyObject) by name of the Python module
   * associated with loaded scripts.
   * @returns {{[key: string] : ObjectWrapper}}
   * @example
   *  # Python file
   *  def testJsFunction(f):
   *    tuple = (5, 2, 8)
   *    result = f.call(tuple)
   *    print result # print 15
   */
  function getPyObjects(): { [key: string]: ObjectWrapper };

  /**
   * Wrap a JavaScript function.
   *  The returned object can then be send as a parameter to a Python function
   * @param {QObject} jsFunction a JavaScript function
   * @returns {QObject}
   * @example
   *  # Python file
   *  def testJsFunction(f):
   *    tuple = (5, 2, 8)
   *    result = f.call(tuple)
   *    print result # print 15
   */
  function wrapFunction(jsFunction: QObject): QObject;
}

/**
 * This module provides many functions to integrate scripted functionalities in the UI of Harmony.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/extended/module-ScriptManager.html}
 */
declare namespace ScriptManager {
  /**
   * This method defines an action that can be called by a menu, a shortcut or a toolbar button. Please
   * note that callback functions must be quick if defined because they might have a performance impact
   * on the whole application.
   * @param {Object} action The definition of the action.
   * @example
   *  // Defining the action
   *  var toggleCoordinatesAction = {
   *   id: "com.toonboom.toggleMouseCoordinateDisplay",
   *   text: "Toggle Mouse Coordinates Display Settings",
   *   icon: "earth.png",
   *   checkable: true,
   *   isEnabled: true,
   *   isChecked: preferences.getBool("DRAWING_VIEW_SHOW_RAW_MOUSE_COORDINATES", false),
   *   onPreferenceChanged: function () {
   *     this.isChecked = preferences.getBool("DRAWING_VIEW_SHOW_RAW_MOUSE_COORDINATES", false);
   *   },
   *   onTrigger: function () {
   *     this.isChecked = !this.isChecked;
   *     preferences.setBool("DRAWING_VIEW_SHOW_RAW_MOUSE_COORDINATES", this.isChecked);
   *   }
   * };
   * // Adding the action to the system
   * ScriptManager.addAction(toggleCoordinatesAction);
   *
   * // Adding the action in a menu of Harmony
   * ScriptManager.addMenuItem({
   *     targetMenuId: "View",
   *     id: toggleCoordinatesAction.id,
   *     text: toggleCoordinatesAction.text,
   *     action: toggleCoordinatesAction.id
   *  });
   *
   *  // Here is how to call the action from the Action object
   *  Action.perform("onTriggerScriptAction(QString)", "ScriptManagerResponder", toggleCoordinatesAction.id);
   */
  function addAction(action: {
    /**
     * The action uniqueId. Is is recommended to use reverse DNS notation.
     */
    id?: string;
    /**
     * The action label.
     */
    text?: string;
    /**
     * The icon for the action
     */
    icon?: string;
    /**
     * If true, the action is checkable
     */
    checkable?: boolean;
    /**
     * If true, the action is enabled. If a function is provided, the action must return true or false.
     */
    isEnabled?: boolean | ((...args: any[]) => boolean);
    /**
     * If true, the action is checked. If a function is provided, the action must return true or false.
     */
    isChecked?: boolean | ((...args: any[]) => boolean);
    /**
     * The function to call if the action is triggered in any way (ActionManager, menu item, toolbar).
     */
    onTrigger?: (...args: any[]) => any;
    /**
     * Callback function called when the selection changes.
     */
    onSelectionChanged?: (...args: any[]) => any;
    /**
     * Callback called when the current frame of the scene changes.
     */
    onCurrentFrameChanged?: (...args: any[]) => any;
    /**
     * Callback called when connections have been changed in the network view or if new modules have been created.
     */
    onNetworkChanged?: (...args: any[]) => any;
    /**
     * Callback called when a preference has changed.
     */
    onPreferenceChanged?: (...args: any[]) => any;
  }): void;

  /**
   * This method adds a shortcut to the list of Harmony shortcuts.
   * @param {Object} action
   */
  function addShortcut(action: {
    /**
     * The action uniqueId. Is is recommended to use reverse DNS notation.
     */
    id?: string;
    /**
     * The action label.
     */
    text?: string;
    /**
     * The action id if the action was added using ScriptManager.addAction or the name of a function in the current file or using the syntax: functionName in file.js.
     */
    action?: string;
    longDesc?: string;
    order?: string;
    categoryId?: string;
    categoryText?: string;
  }): void;

  /**
   * This method adds a toolbar to Harmony.
   * @param {ScriptToolbarDef} toolbar The toolbar to add
   */
  function addToolbar(toolbar: ScriptToolbarDef): void;

  /**
   * @param {Object} arg
   */
  function addMenuItem(arg: {
    /**
     * The action uniqueId. Is is recommended to use reverse DNS notation.
     */
    id?: string;
    /**
     * The action label.
     */
    text?: string;
    /**
     * The action id if the action was added using ScriptManager.addAction or the name of a function in the current file or using the syntax: functionName in file.js.
     */
    action?: string;
    /**
     * The icon for the action
     */
    icon?: string;
    targetMenuId?: string;
    /**
     * The shortcut id that can trigger this action.
     */
    shortcut?: string;
  }): void;
}

/**
 * This module provides functions to create interactive javascript tools. These tools allow
 *  the developer to handle mouse interaction with the objective to create or modify any drawing or
 * node in the scene.
 * {@link https://docs.toonboom.com/help/harmony-24/scripting/extended/module-Tools.html}
 */
declare namespace Tools {
  /**
   * Creates a drawing for the current selected element.
   * @example
   *  var settings = Tools.getToolSettings();
   *     if (settings.currentDrawing) {
   *       return;
   *     }
   *     scene.beginUndoRedoAccum("Create Drawing example");
   *     settings = Tools.createDrawing();
   *     scene.endUndoRedoAccum();
   */
  function createDrawing(): void;

  /**
   * Creates a drawing for the current selected element.
   * @param {Object} params The parameters to the function.
   * @example
   *     scene.beginUndoRedoAccum("Create Drawing example");
   *     var settings = Tools.createDrawing({ frame : 2, numFrames : 10});
   *     scene.endUndoRedoAccum();
   */
  function createDrawing(params: {
    /**
     * The frame at which to create the drawing. Defaults to frame.current().
     */
    frame?: string;
    /**
     * If true, will fill the exposure to the end of the scene.
     */
    allFrames?: string;
    /**
     * The unumber of frames to expose the newly created drawing. Defaults to 1.
     */
    numFrames?: string;
  }): void;

  /**
   * This function is used to retrieve tool settings informations.
   * @example
   *  var tid = Tools.registerTool({
   *      name : "com.toonboom.regularPolygonTool",
   *      displayName : "Regular Polygon Tool",
   *      icon : "MyTool.png",
   *      toolType : "drawing",
   *      canBeOverridenBySelectOrTransformTool : false,
   *      options : {
   *       numSides: 6,
   *       createStar : false,
   *       ratio : 0.5
   *      },
   *      resourceFolder : "resources",
   *      preferenceName : function() {
   *       return this.name + ".settings";
   *      },
   *      defaultOptions : {
   *         numSides: 6,
   *         createStar : false,
   *         ratio : 0.5
   *      },
   *      loadFromPreferences : function() {
   *       try {
   *         var v = preferences.getString(this.preferenceName(), JSON.stringify(this.defaultOptions));
   *         this.options = JSON.parse(v);
   *       }
   *       catch (e)
   *       {
   *         this.options = this.defaultOptions;
   *       }
   *      },
   *      storeToPreferences : function() {
   *       preferences.setString(this.preferenceName(), JSON.stringify(this.options));
   *      },
   *      onRegister : function()
   *      {
   *        // This is called once when registering the tool
   *        // Here the developer can, for example, initialize the tool options
   *        // from the preferences
   *        System.println("Registered tool : " + this.resourceFolder);
   *        this.loadFromPreferences();
   *      },
   *      onCreate : function(ctx) {
   *        // This is called once for each instance in a view
   *        // The context could be populated with instance data
   *      },
   *      onMouseDown : function(ctx) {
   *         MessageLog.trace("On mouse down");
   *         var settings = Tools.getToolSettings();
   *         if (!settings.currentDrawing)
   *           return false;
   *
   *         ctx.origin = ctx.currentPoint;
   *         System.println("ctx: " + JSON.stringify(ctx));
   *         return true;
   *      },
   *      onMouseMove : function(ctx) {
   *         // Here, we build the current overlay based on the current mouse move
   *         // This overlay will be drawn by the system
   *         this.buildPolygon(ctx, ctx.currentPoint);
   *         return true;
   *      },
   *      onMouseUp : function(ctx) {
   *       MessageLog.trace("On mouse up");
   *       var settings = Tools.getToolSettings();
   *       var cid = PaletteManager.getCurrentColorId();
   *
   *       // Here, we get a chance to capture the current overlay
   *       // data and build a new drawing layer painted using the
   *       // current selected color.
   *       DrawingTools.createLayers( {
   *         label : "Regular polygon tool",
   *         drawing : settings.currentDrawing,
   *             art: 2,
   *             layers : [
   *                {
   *                   contours : [
   *                   {
   *                    stroke : true,
   *                    colorId : cid,
   *                    polygon: true,
   *                    path: ctx.overlay.paths[0].path
   *                   }
   *                ] }
   *             ]
   *       });
   *       ctx.overlay = {};
   *       return true;
   *    },
   *    onResetTool : function(ctx)
   *    {
   *     // Make sure there are no left over
   *     // from the last tool usage
   *     ctx.overlay = {};
   *    },
   *    loadPanel : function(dialog, responder) {
   *       // This method loads the ui file or creates it.
   *       // It must load the ui in the dialog passed in parameter.
   *       var uiFile = this.resourceFolder + "/regularPolygonTool.ui";
   *       System.println("UIfilename:" + uiFile);
   *       try
   *       {
   *         var ui = UiLoader.load( { uiFile : uiFile, parent : dialog, folder : this.resourceFolder } );
   *
   *         this.ui = ui;
   *
   *         ui.options.numSides.setValue(this.options.numSides);
   *         ui.options.numSides['valueChanged(int)'].connect(this, function(v) {
   *           this.options.numSides = v;
   *           this.storeToPreferences();
   *         });
   *         ui.options.createStar.setChecked(this.options.createStar);
   *         ui.options.createStar.toggled.connect(this, function(checked) {
   *           this.options.createStar = checked;
   *           ui.options.ratio.setEnabled(this.options.createStar);
   *           this.storeToPreferences();
   *         });
   *         ui.options.ratio.setEnabled(this.options.createStar);
   *         ui.options.ratio.setValue(Math.round(this.options.ratio * 1000));
   *         ui.options.ratio['valueChanged(int)'].connect(this, function(v) {
   *           this.options.ratio = v / 1000.0;
   *           this.storeToPreferences();
   *         });
   *       }
   *       catch (e)
   *       {
   *         System.println("Exception: " + e);
   *       }
   *      },
   *      refreshPanel : function(dialog, responder)
   *      {
   *        // In here, the panel could react to changes in the selection or other external sources
   *        System.println("Refresh panel");
   *      },
   *      buildPolygon : function(ctx, pt)
   *      {
   *        var dx = pt.x - ctx.origin.x;
   *        var dy = pt.y - ctx.origin.y;
   *        var l = Math.sqrt(dx*dx+dy*dy);
   *        var angle = Math.atan2(dy, dx);
   *        var poly = [];
   *        var numSides = this.options.numSides;
   *        var createStar = this.options.createStar;
   *        var r1 = 1;
   *        if (createStar)
   *        {
   *          r1 = this.options.ratio;
   *         numSides *= 2;
   *        }
   *        var d =  Math.PI*2/numSides;
   *        for(var i=0 ; i< numSides; i++)
   *        {
   *          var r = 1;
   *          if (i%2)
   *            r = r1;
   *          poly.push({ x : ctx.origin.x + r * l * Math.cos(angle + i*d), y : ctx.origin.y + r * l * Math.sin(angle + i*d)} );
   *        }
   *        poly.push(poly[0]);
   *        ctx.overlay = { paths : [ { path: poly, color: { r: 0, g: 0, b: 255, a: 255} } ]}
   *      }
   * });
   * }
   */
  function getToolSettings(): void;

  /**
   * This function is used to create a layer in a specified drawing. The function takes a tool definition
   * object in parameter. This
   * definition object must contain methods that will be called during the tool lifecycle.
   * @param {Object} toolDefinition The definition of the tool.
   * @returns {number}
   * @example
   *  var tid = Tools.registerTool({
   *      name : "com.toonboom.regularPolygonTool",
   *      displayName : "Regular Polygon Tool",
   *      icon : "MyTool.png",
   *      toolType : "drawing",
   *      canBeOverridenBySelectOrTransformTool : false,
   *      options : {
   *       numSides: 6,
   *       createStar : false,
   *       ratio : 0.5
   *      },
   *      resourceFolder : "resources",
   *      preferenceName : function() {
   *       return this.name + ".settings";
   *      },
   *      defaultOptions : {
   *         numSides: 6,
   *         createStar : false,
   *         ratio : 0.5
   *      },
   *      loadFromPreferences : function() {
   *       try {
   *         var v = preferences.getString(this.preferenceName(), JSON.stringify(this.defaultOptions));
   *         this.options = JSON.parse(v);
   *       }
   *       catch (e)
   *       {
   *         this.options = this.defaultOptions;
   *       }
   *      },
   *      storeToPreferences : function() {
   *       preferences.setString(this.preferenceName(), JSON.stringify(this.options));
   *      },
   *      onRegister : function()
   *      {
   *        // This is called once when registering the tool
   *        // Here the developer can, for example, initialize the tool options
   *        // from the preferences
   *        System.println("Registered tool : " + this.resourceFolder);
   *        this.loadFromPreferences();
   *      },
   *      onCreate : function(ctx) {
   *        // This is called once for each instance in a view
   *        // The context could be populated with instance data
   *      },
   *      onMouseDown : function(ctx) {
   *         MessageLog.trace("On mouse down");
   *         var settings = Tools.getToolSettings();
   *         if (!settings.currentDrawing)
   *           return false;
   *
   *         ctx.origin = ctx.currentPoint;
   *         System.println("ctx: " + JSON.stringify(ctx));
   *         return true;
   *      },
   *      onMouseMove : function(ctx) {
   *         // Here, we build the current overlay based on the current mouse move
   *         // This overlay will be drawn by the system
   *         this.buildPolygon(ctx, ctx.currentPoint);
   *         return true;
   *      },
   *      onMouseUp : function(ctx) {
   *       MessageLog.trace("On mouse up");
   *       var settings = Tools.getToolSettings();
   *       var cid = PaletteManager.getCurrentColorId();
   *
   *       // Here, we get a chance to capture the current overlay
   *       // data and build a new drawing layer painted using the
   *       // current selected color.
   *       DrawingTools.createLayers( {
   *         label : "Regular polygon tool",
   *         drawing : settings.currentDrawing,
   *             art: 2,
   *             layers : [
   *                {
   *                   contours : [
   *                   {
   *                    stroke : true,
   *                    colorId : cid,
   *                    polygon: true,
   *                    path: ctx.overlay.paths[0].path
   *                   }
   *                ] }
   *             ]
   *       });
   *       ctx.overlay = {};
   *       return true;
   *    },
   *    onResetTool : function(ctx)
   *    {
   *     // Make sure there are no left over
   *     // from the last tool usage
   *     ctx.overlay = {};
   *    },
   *    loadPanel : function(dialog, responder) {
   *       // This method loads the ui file or creates it.
   *       // It must load the ui in the dialog passed in parameter.
   *       var uiFile = this.resourceFolder + "/regularPolygonTool.ui";
   *       System.println("UIfilename:" + uiFile);
   *       try
   *       {
   *         var ui = UiLoader.load( { uiFile : uiFile, parent : dialog, folder : this.resourceFolder } );
   *
   *         this.ui = ui;
   *
   *         ui.options.numSides.setValue(this.options.numSides);
   *         ui.options.numSides['valueChanged(int)'].connect(this, function(v) {
   *           this.options.numSides = v;
   *           this.storeToPreferences();
   *         });
   *         ui.options.createStar.setChecked(this.options.createStar);
   *         ui.options.createStar.toggled.connect(this, function(checked) {
   *           this.options.createStar = checked;
   *           ui.options.ratio.setEnabled(this.options.createStar);
   *           this.storeToPreferences();
   *         });
   *         ui.options.ratio.setEnabled(this.options.createStar);
   *         ui.options.ratio.setValue(Math.round(this.options.ratio * 1000));
   *         ui.options.ratio['valueChanged(int)'].connect(this, function(v) {
   *           this.options.ratio = v / 1000.0;
   *           this.storeToPreferences();
   *         });
   *       }
   *       catch (e)
   *       {
   *         System.println("Exception: " + e);
   *       }
   *      },
   *      refreshPanel : function(dialog, responder)
   *      {
   *        // In here, the panel could react to changes in the selection or other external sources
   *        System.println("Refresh panel");
   *      },
   *      buildPolygon : function(ctx, pt)
   *      {
   *        var dx = pt.x - ctx.origin.x;
   *        var dy = pt.y - ctx.origin.y;
   *        var l = Math.sqrt(dx*dx+dy*dy);
   *        var angle = Math.atan2(dy, dx);
   *        var poly = [];
   *        var numSides = this.options.numSides;
   *        var createStar = this.options.createStar;
   *        var r1 = 1;
   *        if (createStar)
   *        {
   *          r1 = this.options.ratio;
   *         numSides *= 2;
   *        }
   *        var d =  Math.PI*2/numSides;
   *        for(var i=0 ; i< numSides; i++)
   *        {
   *          var r = 1;
   *          if (i%2)
   *            r = r1;
   *          poly.push({ x : ctx.origin.x + r * l * Math.cos(angle + i*d), y : ctx.origin.y + r * l * Math.sin(angle + i*d)} );
   *        }
   *        poly.push(poly[0]);
   *        ctx.overlay = { paths : [ { path: poly, color: { r: 0, g: 0, b: 255, a: 255} } ]}
   *      }
   * });
   * }
   */
  function registerTool(toolDefinition: {
    /**
     * The internal name of the tool. We recommand using a reverse DNS notation (e.g. com.toonboom.myTool) to avoid creating conflicts with other organizations. The function will return false if this value is empty or not provided.
     */
    name?: string;
    /**
     * The name that will be shown to the user in menus or tooltips.  The function will return false if this value is empty or not provided.
     */
    displayName?: string;
    /**
     * The icon file name for the tool if that tool should need to be associated with an icon.
     */
    icon?: string;
    /**
     * The tool type. It can be either "drawing" or "scenePlanning".
     */
    toolType?: string;
    /**
     * The resource folder for this tool. A relative folder can be passed. If it is the case, during registration, the full path value will be computed by the system and be replaced.
     */
    resourceFolder?: string;
    /**
     * If false, your tool will not be overriden by the select/transform tool when pressing the CTRL key.
     */
    canBeOverridenBySelectOrTransformTool?: boolean;
    /**
     * A method that is called once during the registration of the tool.
     */
    onRegister?: (...args: any[]) => any;
    /**
     * A method that is called once for each instance of the tool. There are one instance per view.
     */
    onCreate?: (...args: any[]) => any;
    /**
     * This method is called when the user clicks on the camera or drawing view. If the tool can operate and process the mouse move and up events, it must return true.
     */
    onMouseDown?: (...args: any[]) => any;
    /**
     * Called at each mouse move if the tool returned true in the onMouseDown method.
     */
    onMouseMove?: (...args: any[]) => any;
    /**
     * Called when the mouse is released if the tool returned true in the onMouseDown method. This is typically in this method that the operation should be done.
     */
    onMouseUp?: (...args: any[]) => any;
    /**
     * Called when tool must be reset for external reason like selection change, frame change etc. This is the oportunity for the tool to clear its overlay or reset its manipulator.
     */
    onResetTool?: (...args: any[]) => any;
    /**
     * This class method is called shortly after registration for the tool to create its property panel. The panel will be shared among all the instance of the tool.
     */
    loadPanel?: (...args: any[]) => any;
  }): number;

  /**
* This function is used to change tool settings informations. Note : you cannot change the
* currentDrawing with this function.
* @param {string
|

number} tool The tool's internal name or its unique id.
* @returns {boolean}
* @example
*   Tools.setCurrentTool("com.toonboom.regularPolygonTool");
*/
  function setCurrentTool(tool: string | number): boolean;

  /**
   * This function is used to change tool settings informations. Note : you cannot change the
   * currentDrawing with this function.
   * @param {Object} arg A dictionary of options
   * @returns {Object}
   */
  function setToolSettings(arg: {
    /**
     * The index of the art to activate. Must be in [0-3] range.
     */
    activeArt?: Object;
    /**
     * The current tool descriptor
     */
    currentTool?: Object;
    /**
     * The animation mode descriptor
     */
    animationMode?: Object;
  }): Object;
}

/**
 * Definition of a Bezier contour with potential holes in it.
 */
declare interface BezierContour {
  /**
   * Use true if the path and holes are polygons. This makes the data much smaller than using onCurve for each vertex.
   */
  polygon: Boolean;
  /**
   * A list of vertices
   */
  path: BezierPoint[];
  /**
   * A list of list of vertices
   */
  holes: BezierPoint[][];
}
/**
 * Definition of a Bezier path.
 */
declare interface BezierPath {
  /**
   * A list of vertices
   */
  path: BezierPoint[];
}
/**
 * A vertex of a Bezier curve.
 */
declare interface BezierPoint {
  /**
   * x coordinate
   */
  x: double;
  /**
   * y coordinate
   */
  y: double;
  /**
   * Use true is the vertex is on the curve. This means it is not a bezier handle.
   */
  onCurve: Boolean;
}
/**
 * A 2d box.
 */
declare interface Box2d {
  /**
   * The min x coordinate
   */
  x0: double;
  /**
   * The max x coordinate
   */
  x1: double;
  /**
   * The min y coordinate
   */
  y0: double;
  /**
   * The max y coordinate
   */
  y1: double;
}
/**
 * Basic argument definitions to DrawingTools functions
 */
declare interface DrawingQueryBasicArguments {
  /**
   * The drawing descriptor
   */
  drawing: Object;
  /**
   * The art index // 0 = underlay, 1 = color art, 2 = line art, 3 = overlay
   */
  art: int;
}
/**
 * The argument to the evaluateStrokes method
 */
declare interface EvaluateStrokesArgument {
  strokes: StrokeDescriptorAndParams[];
}
/**
 * Constants used in the geometry computations
 */
declare interface GeometryConstants {
  /**
   * Equals 4.
   */
  splitPerimeter: double;
  /**
   * Equals 1.0 / 64.0.
   */
  roundingQuantum: double;
}
/**
 * A 2d vertex
 */
declare interface GetIntersectionArgument {
  /**
   * The first Bezier path
   */
  path0: BezierPoint[];
  /**
   * The second Bezier path
   */
  path1: BezierPoint[];
}
/**
 * A 2d vertex
 */
declare interface Point2d {
  /**
   * x coordinate
   */
  x: double;
  /**
   * y coordinate
   */
  y: double;
}
/**
 * The argument to the evaluateStrokes method
 */
declare interface StrokeDescriptorAndParams {
  /**
   * The layer index of the stroke
   */
  layer: int;
  /**
   * The stroke index within this layer
   */
  strokeIndex: int;
  /**
   * The list of params to evaluate the stroke at
   */
  params: double[];
}

declare class PermanentFile extends FileWrapper {}
declare class TemporaryFile extends FileWrapper {}

/**
 * scripting object to a sound column... Allow object oriented object interaction with sound sequence.
 * In Harmony, this object is created by the global scripting interface column.getSoundColumn(
 * columnName );
 * In Storyboard, this object is created by the scripting interface SoundTrackManager.getSoundColumn(
 * columnName );
 * It includes methods to iterate over the sound column content. At this moment, it cannot do any
 * modification to the sound column.
 * {@link https://docs.toonboom.com/help/storyboard-pro-7/storyboard/scripting/reference/classsoundColumnInterface.html}
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
 * {@link https://docs.toonboom.com/help/storyboard-pro-7/storyboard/scripting/reference/classsoundSequenceInterface.html}
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

declare class MC_DragContext extends QObject {}

/**
 * Helpful custom interfaces below
 */

/**
 * Column Type as returned by column.type()
 */
declare type ColumnType =
  | "DRAWING"
  | "SOUND"
  | "3DPATH"
  | "BEZIER"
  | "EASE"
  | "EXPR"
  | "TIMING"
  | "QUATERNION"
  | "QUATERNIONPATH"
  | "ANNOTATION";

/**
 * Type name as returned by Attribute.typeName()
 */
declare type AttrValueType =
  | "ALIAS"
  | "ARRAY_POSITION_2D"
  | "ARRAY_STRING"
  | "BOOL"
  | "COLOR"
  | "COMPATIBILITY"
  | "CUSTOM_NAME"
  | "DOUBLE"
  | "DOUBLEVB"
  | "DRAWING"
  | "ELEMENT"
  | "ENABLE"
  | "FILE_EDITOR"
  | "FILE_LIBRARY"
  | "GENERIC_ENUM"
  | "HSL"
  | "HUE_RANGE"
  | "INT"
  | "LOCKED"
  | "PATH_3D"
  | "POINT_2D"
  | "POSITION_2D"
  | "POSITION_3D"
  | "PUSH_BUTTON"
  | "QUATERNION_PATH"
  | "ROTATION_3D"
  | "SCALE_3D"
  | "SIMPLE_BEZIER"
  | "STRING"
  | "TIMING";
declare type ObjectWrapper = PyObjectWrapper;
