/// <reference path="./index.d.ts" />
/**
 * This file contains the API features that Harmony 16 and 17 share.
 * Some features were modified in 17.  The Harmony 16 versions of these are stored in ./16/index.d.ts
 */

/**
 * The about JavaScript global object. Provides information about the main application and the platform on which the script is running
 */
declare module about {
  /**
   * Returns a string that represents the flavor of the application. e.g. Harmony.
   */
  function getFlavorString(): string;

  /**
   * Returns the version info string.
   */
  function getVersionInfoStr(): string;

  /**
   * Returns the major version number.
   */
  function getMajorVersion(): int;

  /**
   * Returns the minor version number.
   */
  function getMinorVersion(): int;

  /**
   * Returns the patch version number.
   */
  function getPatchVersion(): int;

  /**
   * Returns the build number.
   */
  function getBuildNumber(): int;

  /**
   * returns a string that is the name of application.
   */
  function productName(): string;

  /**
   * Returns true whenever this application is a Commercial/Full variant.
   */
  function isFullVersion(): boolean;

  /**
   * Returns true whenever this application is a Demo variant.
   */
  function isDemoVersion(): boolean;

  /**
   * Returns true whenever this application is an Educational variant.
   */
  function isEducVersion(): boolean;

  /**
   * Returns true when connected to a database or when compiled with Harmony.
   */
  function isHarmony(): boolean;

  /**
   * Returns true whenever the application running is an Essentials variant.
   */
  function isStageEssentials(): boolean;

  /**
   * Returns true whenever the application running is an Advanced variant.
   */
  function isStageAdvanced(): boolean;

  /**
   * Returns true whenever the application running is Stage.
   */
  function isStage(): boolean;

  /**
   * Returns true when running Storyboard.
   */
  function isStoryboard(): boolean;

  /**
   * Returns true when running on Windows.
   */
  function isWindowsArch(): boolean;

  /**
   * Returns true when running on Linux.
   */
  function isLinuxArch(): boolean;

  /**
   * Returns true when running on MacOS.
   */
  function isMacArch(): boolean;

  /**
   * Returns true when running on an Apple OS X operating system or when on Mac Intel.
   */
  function isMacIntelArch(): boolean;

  /**
   * Returns true when running on an Apple OS X operating system or when on Mac PowerPC.
   */
  function isMacPpcArch(): boolean;

  /**
   * Returns true whenever this application is interactive. All application capable of running scripts are interactive.
   */
  function isInteractiveApp(): boolean;

  /**
   * Returns true when the application running is Scan.
   */
  function isScanApp(): boolean;

  /**
   * Returns true when the application is Harmony or Storyboard, and not a peripheral application.
   */
  function isMainApp(): boolean;

  /**
   * Returns true whenever the application running application is ControlCenter.
   */
  function isControlCenterApp(): boolean;

  /**
   * Returns true when the application is in Paint mode.
   */
  function isPaintMode(): boolean;

  /**
   * Returns true when the application is in Xsheet mode.
   */
  function isXsheetMode(): boolean;

  /**
   * Returns true when the application is in Database mode.
   */
  function isDatabaseMode(): boolean;

  /**
   * Returns the application. Identical to property "applicationPath".
   */
  function getApplicationPath(): string;

  /**
   * Returns the folder where the binaries can be found.
   */
  function getBinaryPath(): string;

  /**
   * Returns the folder where the resources can be found.
   */
  function getResourcesPath(): string;

  /**
   * Returns the user name.
   */
  function getUserName(): string;

  /**
   * See isFullVersion().
   */
  var fullVersion: boolean;

  /**
   * See isDemoVersion().
   */
  var demoVersion: boolean;

  /**
   * See isEducVersion().
   */
  var educVersion: boolean;

  /**
   * See isHarmony().
   */
  var harmony: boolean;

  /**
   * See isStageEssentials().
   */
  var essentials: boolean;

  /**
   * See isStageAdvanced().
   */
  var advanced: boolean;

  /**
   * See isStage().
   */
  var stage: boolean;

  /**
   * See isStoryboard().
   */
  var storyboard: boolean;

  /**
   * See isWindowsArch().
   */
  var windowsArch: boolean;

  /**
   * See isLinuxArch().
   */
  var linuxArch: boolean;

  /**
   * See isMacArch().
   */
  var macArch: boolean;

  /**
   * See isMacIntelArch().
   */
  var macIntelArch: boolean;

  /**
   * See isMacIntelArch().
   */
  var macPpcArch: boolean;

  /**
   * See isMainApp().
   */
  var mainApp: boolean;

  /**
   * See isInteractiveApp().
   */
  var interactiveApp: boolean;

  /**
   * See isScanApp().
   */
  var scanApp: boolean;

  /**
   * See isControlCenterApp().
   */
  var controlCenterApp: boolean;

  /**
   * See isPaintMode().
   */
  var paintMode: boolean;

  /**
   * See isXsheetMode().
   */
  var xsheetMode: boolean;

  /**
   * Application with GUI folder (different than binFolder on Mac, same for all other platforms).
   */
  var applicationPath: string;

  /**
   * See getBinaryPath().
   */
  var binaryPath: string;

  /**
   * See getUserName().
   */
  var userName: string;

  /**
   * See getResourcesPath().
   */
  var resourcesPath: string;

  /**
   * See isDatabaseMode().
   */
  var databaseMode: boolean;

  /**
   * See getMajorVersion.
   */
  var majorVersion: int;

  /**
   * See getMinorVersion.
   */
  var minorVersion: int;

  /**
   * See getPatchVersion.
   */
  var patchVersion: int;

  /**
   * See getBuildNumber.
   */
  var buildNumber: int;
}

/**
 * The scene JavaScript global object. Retrieve and set global scene attributes, like the aspect ratio of the cells in the scene grid
 */
declare module scene {
  /**
   * Returns the ID of the current version.
   */
  function currentVersion(): int;

  /**
   * Returns the name or the number of the current scene version.
   */
  function currentVersionName(): string;

  /**
   * Returns the name of the current environment.
   */
  function currentEnvironment(): string;

  /**
   * Returns the path of the current environment.
   */
  function currentEnvironmentPath(): string;

  /**
   * Returns the name of the current job.
   */
  function currentJob(): string;

  /**
   * Returns the path of the current job.
   */
  function currentJobPath(): string;

  /**
   * Returns the name of the current scene.
   */
  function currentScene(): string;

  /**
   * Returns the current project path.
   */
  function currentProjectPath(): string;

  /**
   * For windows, returns the remapped path.
   */
  function currentProjectPathRemapped(): string;

  /**
   * Returns the temporary project path.
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
   * Undoes the last n operations. If n is not specified, it will be 1.
   */
  function undo(depth?: int): void;

  /**
   * Redoes the last n operations. If n is not specified, it will be 1.
   */
  function redo(depth?: int): void;

  /**
   * Clears the command history.
   */
  function clearHistory(): void;

  /**
   * Returns the X value of the aspect ratio of the cells in the scene grid.
   */
  function unitsAspectRatioX(): double;

  /**
   * Returns the Y value of the aspect ratio of the cells in the scene grid.
   */
  function unitsAspectRatioY(): double;

  /**
   * Returns the number of units in the X axis of the scene grid.
   */
  function numberOfUnitsX(): int;

  /**
   * Returns the number of units in the Y axis of the scene grid.
   */
  function numberOfUnitsY(): int;

  /**
   * Returns the number of units in the Z axis of the scene grid.
   */
  function numberOfUnitsZ(): int;

  /**
   * Returns the X value of the centre coordinate of the scene grid.
   */
  function coordAtCenterX(): int;

  /**
   * Returns the Y value of the centre coordinate of the scene grid.
   */
  function coordAtCenterY(): int;

  /**
   * Returns the X value of the current preview resolution.
   */
  function currentResolutionX(): int;

  /**
   * Returns the Y value of the current preview resolution.
   */
  function currentResolutionY(): int;

  /**
   * Returns the default resolution name.
   */
  function defaultResolutionName(): string;

  /**
   * Returns the X value of the default resolution.
   */
  function defaultResolutionX(): int;

  /**
   * Returns the Y value of the default resolution.
   */
  function defaultResolutionY(): int;

  /**
   * Returns the default resolution field of view (FOV). The default FOV is a global scene parameter.
   */
  function defaultResolutionFOV(): double;

  /**
   * Returns the list of known resolutions.
   */
  function namedResolutions(): StringList;

  /**
   * Returns the X value of the named resolution. For example, when the named resolution is 720x540 pixels this function will return 720.
   */
  function namedResolutionX(name: string): int;

  /**
   * Returns the Y value of the named resolution. For example, when the named resolution is 720x540 pixels this function will return 540.
   */
  function namedResolutionY(name: string): int;

  /**
   * Returns the frame rate, as frames per second.
   */
  function getFrameRate(): double;

  /**
   * Changes the default texture pixel density for new Vector Drawings.
   */
  function setDefaultTexturePixelDensityforVectorDrawings(normalizedDensity: double): void;

  /**
   * Changes the default texture pixel density for new Bitmap Drawings.
   */
  function setDefaultTexturePixelDensityforBitmapDrawings(normalizedDensity: double): void;

  /**
   * Returns the scene start frame.
   */
  function getStartFrame(): int;

  /**
   * Returns the scene stop frame.
   */
  function getStopFrame(): int;

  /**
   * Tells if the scene has been modified since its last save.
   */
  function isDirty(): boolean;

  /**
   * Returns true if the scene was ever modified.
   */
  function hasBeenDirty(): boolean;

  /**
   * Performs the "save all" command. Effectively, this saves the entire project and all modified files.
   */
  function saveAll(): boolean;

  /**
   * Saves the project as a new version.
   */
  function saveAsNewVersion(name: string, markAsDefault: boolean): boolean;

  /**
   * Save the current project to the specified folder.
   */
  function saveAs(pathname: string): boolean;

  /**
   * Performs the same operation as the "Scene->Check Files..." menu item.
   */
  function checkFiles(options: QVariant): void;

  /**
   * Sets the aspect ratio of the scene. The scene's final aspect ratio will be: X * numberOfUnitsX()/Y * numberOfUnitsY().
   */
  function setUnitsAspectRatio(x: double, y: double): boolean;

  /**
   * Sets the number of X, Y, and Z units in the scene grid.
   */
  function setNumberOfUnits(x: int, y: int, z: int): boolean;

  /**
   * Sets the value of the centre (X, Y) coordinates.
   */
  function setCoordAtCenter(x: int, y: int): boolean;

  /**
   * Sets the default scene resolution and field of view.
   */
  function setDefaultResolution(x: int, y: int, fov: double): boolean;

  /**
   * This function sets the default scene resolution name.
   */
  function setDefaultResolutionName(name: string): boolean;

  /**
   * This function set the default frame rate of the project. The frame rate is expressed as frames per second. Typical value is 12, 24 or 30.
   */
  function setFrameRate(frameRate: double): boolean;

  /**
   * This function sets the scene start frame. The value is validated to be below the number of frames, the stop frame is adjusted too if the specified value is bigger.
   */
  function setStartFrame(frame: int): boolean;

  /**
   * This function sets the scene stop frame. The value is validated to be below the number of frames, the start frame is adjusted too if the specified value is smaller.
   */
  function setStopFrame(frame: int): boolean;

  /**
   * Returns the model matrix for the default camera.
   */
  function getCameraMatrix(frame: int): Matrix4x4;

  /**
   * Converts a field coordinate into an OGL coordinate.
   */
  function toOGL<T extends Point2d | Point3d | Vector2d | Vector3d>(pointOrVector: T): T;

  /**
   * Converts the X-value of a field coordinate to the X-value of an OpenGL coordinate.
   */
  function toOGLX(fieldX: double): double;

  /**
   * Converts the Y-value of a field coordinate to the Y-value of an OpenGL coordinate.
   */
  function toOGLY(fieldY: double): double;

  /**
   * Converts the Z-value of a field coordinate to the Z-value of an OpenGL coordinate.
   */
  function toOGLZ(fieldZ: double): double;

  /**
   * Converts an OGL coordinate into a field coordinate.
   */
  function fromOGL<T extends Point2d | Point3d | Vector2d | Vector3d>(pointOrVector: T): T;

  /**
   * Converts the X-value of an OpenGL coordinate to the X-value of a field coordinate.
   */
  function fromOGLX(oglX: double): double;

  /**
   * Converts the Y-value of an OpenGL coordinate to the Y-value of a field coordinate.
   */
  function fromOGLY(oglY: double): double;

  /**
   * Converts the Z-value of an OpenGL coordinate to the Z-value of a field coordinate.
   */
  function fromOGLZ(oglZ: double): double;

  /**
   * Retrieves the default display set in the current scene.
   */
  function getDefaultDisplay(): string;

  /**
   * Closes the current scene.
   */
  function closeScene(): void;

  /**
   * Closes the current scene and exits.
   */
  function closeSceneAndExit(): void;

  /**
   * Closes the current scene and open the scene specified by env, job, scene and version.
   */
  function closeSceneAndOpen(envName: string, jobName: string, sceneName: string, versionName: string): boolean;

  /**
   * Returns all palettes that were either unrecovered or recovered but not yet saved, depending on the arguments of the function.
   */
  function getMissingPalettes(unrecovered: boolean, recoveredNotYetSaved: boolean): StringList;

  /**
   * Return the list of metadatas for the current scene.
   */
  function metadatas(): QScriptValue;

  /**
   * Return a metadata object corresponding to the given name and type.
   */
  function metadata(name: string, type?: string): QScriptValue;

  /**
   * Either inserts a new metadata object or sets the value of an existing metadata object.
   */
  function setMetadata(meta: QScriptValue): void;

  /**
   * Removes a metadata object from the list of metadata objects.
   */
  function removeMetadata(meta: QScriptValue): boolean;
}

/**
 * The JavaScript class encapsulating a node attribute. Obtain one from the node getAttr or getAttrList methods
 */
declare class Attribute extends QObject {
  /**
   * The keyword associated with the Attribute.
   */
  public keyword(): string;

  /**
   * The name of the Attribute.
   */
  public name(): string;

  /**
   * The typeName value associated with the Attribute type.
   */
  public typeName(): AttrValueType;

  /**
   * Fetches the boolean value from the Attribute at the current frame.
   */
  public boolValue(): boolean;

  /**
   * Fetches the integer value from the Attribute at the current frame.
   */
  public intValue(): int;

  /**
   * Fetches the double value from the Attribute at the current frame.
   */
  public doubleValue(): double;

  /**
   * Fetches the String value from the Attribute at the current frame.
   */
  public textValue(): string;

  /**
   * Fetches the ColorRGBA value from the Attribute at the current frame.
   */
  public colorValue(): ColorRGBA;

  /**
   * Fetches the Point2d value from the Attribute at the current frame.
   */
  public pos2dValue(): Point2d;

  /**
   * Fetches the Point3d value from Attribute at current frame.
   */
  public pos3dValue(): Point3d;

  /**
   * Fetches the boolean value from the Attribute at the specified frame.
   */
  public boolValueAt(frame: double): boolean;

  /**
   * Fetches the integer value from the Attribute at the specified frame.
   */
  public intValueAt(frame: double): int;

  /**
   * Fetches the double value from the Attribute at the specified frame.
   */
  public doubleValueAt(frame: double): double;

  /**
   * Fetches the String value from the Attribute at the specified frame.
   */
  public textValueAt(frame: double): string;

  /**
   * Fetches the ColorRGBA value from the Attribute at the specified frame.
   */
  public colorValueAt(frame: double): ColorRGBA;

  /**
   * Fetches the Point2d value from the Attribute at the specified frame.
   */
  public pos2dValueAt(frame: double): Point2d;

  /**
   * Fetches the Point3d value from the Attribute at the specified frame.
   */
  public pos3dValueAt(frame: double): Point3d;

  /**
   * Sets the value of the Attribute.
   */
  public setValue(value: QObject): void;

  /**
   * Sets the value of the Attribute.
   */
  public setValue(value: int): void;

  /**
   * Sets the value of the Attribute.
   */
  public setValue(value: double): void;

  /**
   * Sets the value of the Attribute.
   */
  public setValue(value: boolean): void;

  /**
   * Sets the value of the Attribute.
   */
  public setValue(value: string): void;

  public setValueAt(value: QObject, frame: double): void;

  public setValueAt(value: int, frame: double): void;

  public setValueAt(value: double, frame: double): void;

  public setValueAt(value: boolean, frame: double): void;

  public setValueAt(value: string, frame: double): void;

  /**
   * Returns a list of the sub attributes of the Attribute.
   */
  public getSubAttributes(): QList<Attribute>;

  /**
   * Returns true if the Attribute has sub attributes.
   */
  public hasSubAttributes(): boolean;

  /**
   * Return the full keyword of the Attribute.
   */
  public fullKeyword(): string;
}

/**
 * The Quaternion Javascript class. Defines a 4 dimensional value
 */
declare class Quaternion extends QObject {
  /**
   * Sets the w, x, y, z values to the given values.
   */
  public setWXYZ(w: double, x: double, y: double, z: double): void;

  /**
   * Returns the conjugate of the Quaternion.
   */
  public getConjugate(): Quaternion;

  /**
   * Returns the inverse of the Quaternion.
   */
  public getInverse(): Quaternion;

  /**
   * Returns true if the Quaternion is the identity Quaternion.
   */
  public isIdentity(): boolean;

  /**
   * Returns true if two Quaternions are equal.
   */
  public isEqual(q2: Quaternion): boolean;

  /**
   * Returns true if two Quaternions are NOT equal.
   */
  public isNotEqual(q2: Quaternion): boolean;

  /**
   * Returns a Point3d loaded with the Euler Angles corresponding to the Quaternion.
   */
  public toEuler(degrees?: boolean): Point3d;

  /**
   * Initialize the quaternion from a trio of 3 successive Euler angles(degrees or radians).
   */
  public fromEuler(eulerX: double, eulerY: double, eulerZ: double, degree?: boolean): void;

  /**
   * Returns a Matrix4x4 loaded with the Rotation Matrix corresponding to the Quaternion.
   */
  public toMatrix(): Matrix4x4;

  /**
   * Returns the norm of the Quaternion.
   */
  public getNorm(): double;

  /**
   * Returns the dot product of the given Quaternion parameters.
   */
  public getDotProduct(q2: Quaternion): double;

  /**
   * Returns the multiplication product of the given Quaternion parameters.
   */
  public multiply(q2: Quaternion): Quaternion;

  /**
   * Returns the normalized Quaternion.
   */
  public getNormalized(): Quaternion;

  /**
   * Rotates a vector by the angle the Quaternion represents.
   */
  public rotateVector(vect: Vector3d): Vector3d;

  /**
   * Create a new identity Quaternion.
   */
  constructor();

  /**
   * Create a new Quaternion.
   */
  constructor(w: double, x: double, y: double, z: double);

  /**
   * The w value.
   */
  w: double;

  /**
   * The x value.
   */
  x: double;

  /**
   * The y value.
   */
  y: double;

  /**
   * The z value.
   */
  z: double;
}

/**
 * The SubnodeData Javascript class
 */
declare class SubnodeData extends QObject {
  /**
   * Returns true if the subnode is visible, false if it is hidden.
   */
  public visible(): boolean;

  /**
   * Sets whether or not the subnode is visible.
   */
  public setVisible(visible: boolean): void;

  /**
   * Returns true if the subnode is enabled, false if it is disabled.
   */
  public enabled(): boolean;

  /**
   * Sets whether or not the subnode is enabled.
   */
  public setEnabled(enabled: boolean): void;

  /**
   * Returns the name of the subnode. This is the Key used when the SubnodeData object was created.
   */
  public name(): string;

  /**
   * Returns the Matrix4x4 representing the transformations done locally to this subnode.
   */
  public localTransformation(): Matrix4x4;

  /**
   * Returns the Point3d position of the subnode's pivot.
   */
  public pivot(): Point3d;

  /**
   * Sets the coordinates of the subnode's pivot.
   */
  public setPivot(pivot: Point3d): void;

  /**
   * Returns the Point3d position of the subnode's position, or offset.
   */
  public position(): Point3d;

  /**
   * Sets the coordinates of the subnode's position.
   */
  public setPosition(position: Point3d): void;

  /**
   * Returns a Point3d representation of the subnode's scale.
   */
  public scale(): Point3d;

  /**
   * Sets the Subnode's scale.
   */
  public setScale(scale: Point3d): void;

  /**
   * Returns the Quaternion representation of the subnode's rotation.
   */
  public rotation(): Quaternion;

  /**
   * Sets the subnode's rotation.
   */
  public setRotation(rotation: Quaternion): void;

  /**
   * Create a new SubnodeData object.
   */
  constructor(subnodeName: string, nodeName: string, frame: double);
}

/**
 * The Model3d JavaScript class
 */
declare class Model3d extends QObject {
  /**
   * Returns a Matrix4x4 representing the transformations done up to and including the subnode in the parameter.
   */
  public computeMatrix(subnodeName: string): Matrix4x4;

  /**
   * Returns the root(s) of the 3d Model's tree structure.
   */
  public root(): QScriptValue;

  /**
   * Returns an array of all of a subnode's children.
   */
  //public children(subnodeName: string): QScriptValue;

  /**
   * Returns the name of a subnode's parent subnode.
   */
  //public parent(subnodeName: string): string;

  /**
   * Returns an array of objects representing the tree structure of the 3d Model.
   */
  public graph(): QScriptValue;

  /**
   * Creates a new Model3d object.
   */
  constructor(nodeName: string, frame: double);
}

/**
 * The exporter JavaScript global object. Provides access to the project export directory
 */
declare namespace exporter {
  /**
   * Removes all files from the project export directory.
   */
  function cleanExportDir(): void;

  /**
   * Returns the path of the project export directory.
   */
  function getExportDir(): string;

  /**
   * Returns true if a scene was exported to a QuickTime in the specified directory.
   */
  function exportToQuicktime(displayName: string, startFrame: int, lastFrame: int, withSound: boolean, resX: int, resY: int, dstPath: string, displayModule: string, generateThumbnail: boolean, thumbnailFrame: int): boolean;

  /**
   * Export OGL frames to a QuickTime movie. Without QuickTime it will try to fallback to other supported formats.
   */
  function exportOGLToQuicktime(fileName: string, dstPath: string, startFrame?: int, lastFrame?: int, resX?: int, resY?: int): void;

  /**
   * Render the scene and export an animated GIF from its rendering.
   */
  function exportGIF(params: QScriptValue): QScriptValue;
}

/**
 * The Action JavaScript global object. Trigger action associated to menu or tool bar items
 */
declare namespace Action {
  /**
   * Perform the requested action (slot - menu item, toolbar item,...)
   */
  function perform(slot: string): void;

  /**
   * Perform the requested action (slot - menu item, toolbar item,...)
   */
  function perform(slot: string, responder: string): void;

  /**
   * Execute an action using the action manager on the given responder with parameters.
   */
  function perform(slot: string, responder: string, parameters: QVariant): void;

  /**
   * Execute an action using the action manager on all responder instances.
   */
  function performForEach(slot: string, responder: string): void;

  /**
   * Validate the requested action (slot - menu item, toolbar item,...)
   */
  function validate(slot: string): QVariant;

  /**
   * Validate the requested action (slot - menu item, toolbar item,...)
   */
  function validate(slot: string, responder: string): QVariant;

  /**
   * Retrieve the list of responder names.
   */
  function getResponderList(): StringList;

  /**
   * Retrieve the list of actions for a given responder.
   */
  function getActionList(responder: string): StringList;
}

/**
 * The SceneChangeNotifier JavaScript class. Execute client code upon scene change events
 */
declare class SceneChangeNotifier extends QObject {
  /**
   * Disconnect all signals, to stop callback invocation.
   */
  public disconnectAll(): void;

  /**
   * Signal emitted upon change of the current frame in the scene.
   */
  public currentFrameChanged(): QSignal<() => void>;

  /**
   * Signal emitted upon change of the node network links.
   */
  public networkChanged(list: StringList): QSignal<() => void>;

  /**
   * Signal emitted upon change of the node property or attribute value.
   */
  public nodeChanged(list: StringList): QSignal<() => void>;

  /**
   * Signal emitted upon change of the scene.
   */
  public sceneChanged: QSignal<() => void>;

  /**
   * Signal emitted upon change of the current selection.
   */
  public selectionChanged: QSignal<() => void>;

  /**
   * Signal emitted upon change of the column / timed Values.
   */
  public columnValuesChanged(columnNames: StringList): QSignal<() => void>;

  /**
   * Create a new SceneChangeNotifier.
   */
  constructor(parent: QObject);
}

/**
 * The waypoint JavaScript global object
 */
declare module waypoint {
  /**
   * Add a waypoint to the Node View.
   */
  function add(parentGroup: string, instanceName: string, x: int, y: int): string;

  /**
   * Delete a single waypoint.
   */
  function deleteWaypoint(qualifiedName: string): boolean;

  /**
   * Link an output port from a node to a waypoint.
   */
  function linkOutportToWaypoint(nodeQualifiedName: string, outPortId: int, wpQualifiedName: string): boolean;

  /**
   * Link a waypoint to another waypoint.
   */
  function linkWaypointToWaypoint(srcQualifiedName: string, dstQualifiedName: string): boolean;

  /**
   * Link a waypoint to an input port.
   */
  function linkWaypointToInport(wpQualifiedName: string, nodeQualifiedName: string, inPortId: int, insertMode?: boolean): boolean;

  /**
   * Retrieve all the waypoints found along the cable of the specified node input port.
   */
  function getAllWaypointsAbove(nodeQualifiedName: string, inPortId: int): StringList;

  /**
   * Retrieve all the waypoints found along the cable tree under the specified node output port.
   */
  function getAllWaypointsBelow(nodeQualifiedName: string, outPortId: int): StringList;

  /**
   * Retrieve the waypoint list for the specified group.
   */
  function getWaypointsInGroup(groupQualifiedName: string): StringList;

  /**
   * Unlink the waypoint from its parent node or waypoint.
   */
  function unlinkParent(wpQualifiedName: string): boolean;

  /**
   * Unlink the child input port from the waypoint.
   */
  function unlinkChildInport(wpQualifiedName: string, nodeQualifiedName: string, inPortId: int): boolean;

  /**
   * Unlink the destination node from the waypoint source.
   */
  function unlinkChildNode(wpQualifiedName: string, nodeQualifiedName: string): boolean;

  /**
   * Unlink the child waypoint from the specified waypoint.
   */
  function unlinkChildWaypoint(wpQualifiedName: string, childWpQualifiedName: string): boolean;

  /**
   * Unlink all children node and children waypoints from the specified waypoint.
   */
  function unlinkAllChildren(wpQualifiedName: string): boolean;

  /**
   * Retrieve the list of children ports directly connected to the specified waypoint.
   */
  function childInports(wpQualifiedName: string): QScriptValue;

  /**
   * Retrieve the list of children port nodes directly connected to the specified waypoint.
   */
  function childNodes(wpQualifiedName: string): StringList;

  /**
   * Retrieve the list of children waypoints.
   */
  function childWaypoints(wpQualifiedName: string): StringList;

  /**
   * Retrieve the list of waypoints directly linked to the specified node output port.
   */
  function childWaypoints(nodeQualifiedName: string, outPortId: int): StringList;

  /**
   * Get parent waypoint path.
   */
  function parentWaypoint(wpQualifiedName: string): string;

  /**
   * Retrieve the waypoint above a node port, linked to the specified input port.
   */
  function parentWaypoint(nodeQualifiedName: string, inPortId: int): string;

  /**
   * Get parent node path, if applicable.
   */
  function parentNode(wpQualifiedName: string): string;

  /**
   * Get parent outport index, if applicable.
   */
  function parentOutport(wpQualifiedName: string): int;

  /**
   * Set the position of a waypoint in the Node View.
   */
  function setCoord(qualifiedName: string, x: int, y: int): void;

  /**
   * Returns an integer indicating the X position of a waypoint in the Node View.
   */
  function coordX(qualifiedName: string): int;

  /**
   * Returns an integer indicating the X position of a waypoint in the Node View.
   */
  function coordY(qualifiedName: string): int;
}

/**
 * The JavaScript class for using XSheet column markers. Obtain it by calling columnMarkers from the column global object
 */
declare class columnMarkers {
  /**
   * Creates a new marker on the current column and returns an ID to further manipulate it.
   */
  public createMarker(startFrame: int, length: int, type: string): int;

  public removeMarker(id: int): boolean;

  public markers(): QScriptValue;

  /**
   * Returns an array containing all the marker IDs at the requested frame.
   */
  public markers(startFrame: int): QScriptValue;

  /**
   * Gets a marker ID from the requested frame, of the given type, if there is one.
   */
  public marker(startFrame: int, type: string): int;

  /**
   * Return the start frame of a given marker.
   */
  public startFrame(markerId: int): int;

  /**
   * Queries the length of a column marker.
   */
  public length(markerId: int): int;

  /**
   * Moves a marker around on the same column and potentially change its length.
   */
  public moveMarker(markerId: int, newStart: int, newLength: int): void;

  /**
   * Looks up all the markers that would overlap with the requested frame.
   */
  public overlapingMarkers(startFrame: int): QScriptValue;

  /**
   * Gets a property value given its key from the list of key/value pairs.
   */
  public value(markerId: int, propertyName: string): QScriptValue;

  /**
   * Sets a key/value pair on the given marker.
   */
  public setValue(markerId: int, propertyName: string, value: QVariant): void;

  /**
   * Returns the array of property keys that the marker contains.
   */
  public keyValues(markerId: int): QScriptValue;
}

/**
 * The column JavaScript global object. Retrieve add or remove values from columns in your scene
 */
declare module column {
  /**
   * Returns the number of columns in the scene.
   */
  function numberOf(): int;

  /**
   * Returns the unique identifier that names the column. This is not the display name shown in the xsheet.
   */
  function getName(columnNumber: int): string;

  /**
   * Returns the displayable name (similar to the one displayed in the xsheet view) of a column.
   */
  function getDisplayName(columnName: string): string;

  /**
   * Returns the colour for the given column.
   */
  function getColorForXSheet(columnName: string): ColorRGBA;

  /**
   * Sets the colour for an Xsheet column.
   */
  function setColorForXSheet(columnName: string, color: ColorRGBA): void;

  /**
   * This function returns the column type.
   */
  function type(columnName: string): string;

  /**
   * This function returns the column type of nested velocity.
   */
  function velocityType(columnName: string): string;

  /**
   * Returns the value of a cell in a column.
   */
  function getEntry(columnName: string, subColumn: int, atFrame: double): string;

  /**
   * Returns true or false indicating if a cell in a column is a keyframe.
   */
  function isKeyFrame(columnName: string, subColumn: int, atFrame: double): boolean;

  /**
   * Returns the element id associated with a drawing column.
   */
  function getElementIdOfDrawing(columnName: string): int;

  /**
   * Returns the expression text in the identified column.
   */
  function getTextOfExpr(columnName: string): string;

  /**
   * Adds a column with the specified name and type.
   */
  function add(columnName: string, columnType: string, position?: string): boolean;

  /**
   * Generate a unique anonymous name in the "ATV-XXXXXXXXXXXXXXXX" format, which can be used in conjunction with column.add() to prevent name collisions.
   */
  function generateAnonymousName(): string;

  /**
   * removes the sound column called name from the scene
   */
  function removeSoundColumn(columnName: string): boolean;

  /**
   * Removes an unlinked function column called name from the scene.
   */
  function removeUnlinkedFunctionColumn(columnName: string): boolean;

  /**
   * Renames the specified column.
   */
  function rename(oldName: string, newName: string): boolean;

  /**
   * Sets the value of a cell in a column.
   */
  function setEntry(columnName: string, subColumn: int, atFrame: double, value: string): boolean;

  /**
   * Makes a cell in a column a keyframe.
   */
  function setKeyFrame(columnName: string, atFrame: double): boolean;

  /**
   * Removes a keyframe from a cell in a column.
   */
  function clearKeyFrame(columnName: string, atFrame: double): boolean;

  /**
   * Links an empty Drawing column to an element.
   */
  function setElementIdOfDrawing(columnName: string, elementId: int): boolean;

  /**
   * Returns a list of all drawing types used in the drawing column. K = key drawings, I = inbetween, B = breakdown.
   */
  function getDrawingType(columnName: string, atFrame: double): string;

  /**
   * Sets the Drawing type at frame f from column col to be newType.
   */
  function setDrawingType(columnName: string, atFrame: double, drawingType: string): void;

  /**
   * Retrieves the list of names of drawing timing columns.
   */
  function getDrawingColumnList(): StringList;

  /**
   * Retrieves the list of names of timing columns of the given type.
   */
  function getColumnListOfType(type: string): StringList;

  /**
   * Retrieves the list of timings used in a drawing column.
   */
  function getDrawingTimings(columnName: string): StringList;

  /**
   * Returns the next key drawing in a drawing column.
   */
  function getNextKeyDrawing(columnName: string, startFrame: int): int;

  /**
   * Retrieves the current version of a timing.
   */
  function getCurrentVersionForDrawing(columnName: string, timingName: string): int;

  /**
   * Import a sound file in the specified column at the specified frame. This function returns a Boolean indicating the success of the operation.
   */
  function importSound(columnName: string, atFrame: int, soundFilePath: string): boolean;

  /**
   * Sets the value in the Expression column to the specified text.
   */
  function setTextOfExpr(columnName: string, text: string): boolean;

  /**
   * Returns the drawing name for the specified column at the specified frame.
   */
  function getDrawingName(columnName: string, frame: int): string;

  /**
   * Returns the column's position in the XSheet View.
   */
  function getPos(columnName: string): int;

  /**
   * Sets the column at position columnFrom to position columnTo.
   */
  function move(columnFrom: int, columnTo: int): void;

  /**
   * Updates the XSheet with all newly added and moved columns.
   */
  function update(): void;

  /**
   * Returns the name of the selected column in the XSheet view, including annotation columns.
   */
  function selected(): string;

  /**
   * Returns a timing created for the given column at the given frame.
   */
  function generateTiming(columnName: string, forFrame: double, fileExists: boolean): string;

  /**
   * Creates an empty drawing in the specified column.
   */
  function createDrawing(columnName: string, timing: string): boolean;

  /**
   * Renames the specified drawing to the new name, in the specified column.
   */
  function renameDrawing(columnName: string, oldTiming: string, newTiming: string): boolean;

  /**
   * Prepends the prefix to the drawing name in the specified column.
   */
  function renameDrawingWithPrefix(columnName: string, oldTiming: string, prefix: string): boolean;

  /**
   * Deletes the drawing at the specified frame in the specified column.
   */
  function deleteDrawingAt(columnName: string, frame: int): boolean;

  /**
   * Duplicates the drawing at the specified frame in the specified column.
   */
  function duplicateDrawingAt(columnName: string, frame: int): boolean;

  /**
   * Adds a key drawing exposure at the specified frame in the specified column.
   */
  function addKeyDrawingExposureAt(columnName: string, frame: int): boolean;

  /**
   * Removes a key drawing exposure at the specified frame in the specified column.
   */
  function removeKeyDrawingExposureAt(columnName: string, frame: int): boolean;

  /**
   * Removes duplicate key drawing exposure at the specified frame in the specified column.
   */
  function removeDuplicateKeyDrawingExposureAt(columnName: string, frameNumber: int): boolean;

  /**
   * Fill with previous exposed drawings for the given range of frame.
   */
  function fillEmptyCels(columnName: string, startFrame: int, endFrame: int): boolean;

  /**
   * Fills the drawings from startFrame to startFrame+nbFrames with drawing duplicates named with a prefix.
   */
  function lineTestFill(columnName: string, startFrame: int, nbFrames: int, prefix: string, keyFramesOnly: boolean): boolean;

  /**
   * Returns a column object that contains a reference to that sound column. The column object contains a useful interface to introspecting the sound and its sound sequences.
   */
  function soundColumn(columnName: string): QObject;

  /**
   * Returns the column marker interface for the given column.
   */
  function columnMarkers(columnName: string): columnMarkers;

  /**
   * Returns an object containing timesheet values for the column and frame requested. That object will have those properties: displayText, heldFrame, emptyCell, isCtrlPnt, isSymbol.
   */
  function getTimesheetEntry(columnName: string, subColumn: int, atFrame: double): QScriptValue;

  /**
   * Returns the annotation image for a given column, for the range of frames requested. The returned image is filled to include empty frames, so it can be easily aligned by client scripts.
   */
  function getImageBlock(columnName: string, startFrame: int, nbFrames: int): QImage;
}

/**
 * The Backdrop JavaScript global object. Get, set and add backdrops
 */
declare module Backdrop {
  /**
   * Returns the backdrops of a group.
   */
  function backdrops(group: string): QScriptValue;

  /**
   * Sets the backdrops for the specified group.
   */
  function setBackdrops(group: string, backdrops: QScriptValue): boolean;

  /**
   * Adds a single backdrop. The new backdrop is displayed on top of all the others.
   */
  function addBackdrop(group: string, backdrop: QScriptValue): boolean;
}

/**
 * The DrawingTools JavaScript global object. Get information about the currently selected drawing
 */
declare module DrawingTools {
  /**
   * Sets the current art to be one of the following : underlayArt, colourArt, lineArt or overlayArt.
   */
  function setCurrentArt(currentArt: int): void;

  function setCurrentDrawingFromColumnName(columnName: string, frame?: int): boolean;

  /**
   * Sets the current drawing to be from node nodeName at frame frame.
   */
  function setCurrentDrawingFromNodeName(nodeName: string, frame?: int): boolean;

  /**
   * Converts the selected pencil lines in layer of the current drawing using params.
   */
  function convertPencilToBrush(art?: int, params?: DrawingToolParams): void;

  /**
   * Extracts the centerline from srcArt and puts the extracted line in dstArt using params.
   */
  function extractCenterline(srcArt?: int, dstArt?: int, params?: DrawingToolParams): void;

  /**
   * Computes the breaking triangles of the current layer using params.
   */
  function computeBreakingTriangles(params?: DrawingToolParams): void;

  /**
   * Recolours the drawing identified by a DrawingKey.
   */
  function recolorDrawing(): void;

  /**
   * Changes the vector layer resolution of a given drawing.
   */
  function changeDrawingVectorLayerResolution(
    drawingKey: QScriptValue,
    pixelPerModelUnit: double,
    options?: {
      /**
      Will only apply the resolution to new strokes if set to false.
      Default: true
      */
      applyToExistingStrokes: bool;
      /**
      Controls which art layers are targeted by the function call (0=underlay, 1=line art, 2=color art, 3=overlay)
      Default: [0,1,2,3]
      */
      art: number[];
    }
  ): void;

  /**
   * Changes the bitmap layer resolution of a given drawing.
   */
  function changeDrawingBitmapLayerResolution(drawingKey: QScriptValue, pixelPerModelUnit: double, options?: QScriptValue): void;

  /**
   * Returns an array containing the set of colour ids used by the drawing.
   */
  function getDrawingUsedColors(): QScriptValue;

  /**
   * Returns an array of objects describing the set of colour ids used by the drawing along with the source of the colour.
   */
  function getDrawingUsedColorsWithSource(): QScriptValue;

  /**
   * Return an array containing the set of colour ids used by all drawings in the array.
   */
  function getMultipleDrawingsUsedColors(): QScriptValue;

  function vectorize(unknown_0: any): QVariant;

  /**
   * Performs the same operation as Drawing->Optimize->Optimize menu item.
   */
  function optimize(config: QVariant): boolean;

  /**
   * Performs the same operation as Drawing->Optimize->Flatten menu item.
   */
  function flatten(config: QVariant): boolean;

  /**
   * Clears an art of a drawing.
   */
  function clearArt(config: { drawing: string; art?: DrawingLayer }): boolean;

  /**
   * Returns the underlayArt mask.
   */
  var underlayArt: int;

  /**
   * Returns the colourArt mask.
   */
  var colourArt: int;

  /**
   * Returns the lineArt mask.
   */
  var lineArt: int;

  /**
   * Returns the overlayArt mask.
   */
  var overlayArt: int;

  /**
   * Returns the mask for all 4 art layers.
   */
  var allArts: int;
}
