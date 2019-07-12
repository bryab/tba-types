/// <reference path="../index.d.ts" />
/// <reference path="../../shared/15/index.d.ts" />
/**
 * The scene JavaScript global object. Retrieve and set global scene attributes, like the aspect ratio of the cells in the scene grid
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
   * returns the path of the current environment.
   */
  function currentEnvironmentPath(): string;

  /**
   * returns the name of the current job.
   */
  function currentJob(): string;

  /**
   * returns the path of the current job.
   */
  function currentJobPath(): string;

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
   * Save the current project to the specified folder.
    Save the current project to the specified folder. Folder must not exists. The current project is updated to use that folder. Any error or message is reported using the standard error logger (so, in non batch mode, user will see message popup).
    This API only works in standalone as you cannot 'Save As' in database.
    Returns true if successfully saved the project.
    Added 15.0.5
   */
  function saveAs(pathname: string): boolean;

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
  function toOGL(pointOrVector: Point2d): Point2d;

  /**
   * converts an OGL coordinate into a field coordinate.
   */
  function fromOGL(pointOrVector: Point2d): Point2d;

  /**
   * converts a field coordinate into an OGL coordinate
   */
  function toOGL(pointOrVector: Point3d): Point3d;

  /**
   * converts an OGL coordinate into a field coordinate.
   */
  function fromOGL(pointOrVector: Point3d): Point3d;

  /**
   * converts a field coordinate into an OGL coordinate
   */
  function toOGL(pointOrVector: Vector2d): Vector2d;

  /**
   * converts an OGL coordinate into a field coordinate.
   */
  function fromOGL(pointOrVector: Vector2d): Vector2d;
  /**
   * retrieves default display set in current scene.
   */
  /**
   * converts a field coordinate into an OGL coordinate
   */
  function toOGL(pointOrVector: Vector3d): Vector3d;

  /**
   * converts an OGL coordinate into a field coordinate.
   */
  function fromOGL(pointOrVector: Vector3d): Vector3d;

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
  function closeSceneAndOpen(envName: string, jobName: string, sceneName: string, versionName: string): boolean;

  /**
   * returns all palettes that were either unrecovered or recovered but not yet saved, depending on the arguments of the function.
   */
  function getMissingPalettes(unrecovered: boolean, recoveredNotYetSaved: boolean): StringList;

  function metadatas(): QScriptValue;

  function metadata(name: string, type?: string): QScriptValue;

  function setMetadata(meta: QScriptValue): void;

  function defaultPixelPerModelUnitForBitmapLayers(): double;

  /**
   * Performs the same operation as the "Scene->Check Files..." menu item.
   */
  function checkFiles(options: QVariant): void;
}

/**
 * The JavaScript class encapsulating a node attribute. Obtain one from the node getAttr or getAttrList methods
 */
declare class Attribute extends QObject {
  /**
   * Attribute keyword.
   */
  public keyword(): string;

  /**
   * Attribute name.
   */
  public name(): string;

  /**
   * Attribute typeName.
   */
  public typeName(): AttrValueType;

  /**
   * Fetch boolean value from Attribute at current frame.
   */
  public boolValue(): boolean;

  /**
   * Fetch integer value from Attribute at current frame.
   */
  public intValue(): int;

  /**
   * Fetch double value from Attribute at current frame.
   */
  public doubleValue(): double;

  /**
   * Fetch String value from Attribute at current frame.
   */
  public textValue(): string;

  /**
   * Fetch ColorRGBA value from Attribute at current frame.
   */
  public colorValue(): ColorRGBA;

  /**
   * Fetch Point2d value from Attribute at current frame.
   */
  public pos2dValue(): Point2d;

  /**
   * Fetch Point3d value from Attribute at current frame.
   */
  public pos3dValue(): Point3d;

  /**
   * Fetch boolean value from Attribute at the specified frame.
   */
  public boolValueAt(frame: double): boolean;

  /**
   * Fetch integer value from Attribute at the specified frame.
   */
  public intValueAt(frame: double): int;

  /**
   * Fetch double value from Attribute at the specified frame.
   */
  public doubleValueAt(frame: double): double;

  /**
   * Fetch String value from Attribute at the specified frame.
   */
  public textValueAt(frame: double): string;

  /**
   * Fetch ColorRGBA value from Attribute at the specified frame.
   */
  public colorValueAt(frame: double): ColorRGBA;

  /**
   * Fetch Point2d value from Attribute at the specified frame.
   */
  public pos2dValueAt(frame: double): Point2d;

  /**
   * Fetch Point3d value from Attribute at the specified frame.
   */
  public pos3dValueAt(frame: double): Point3d;

  /**
   * Set attribute value.
   * Note: Does not work for all attributes in my experience (such as CurveModule's offset)
   */
  public setValue(v: string | number | boolean | Point2d | Point3d | ColorRGBA): void;

  public hasSubAttributes(): boolean;
}

/**
 * The exporter JavaScript global object. Provides access to the project export directory
 */
declare namespace exporter {
  /**
   * removes all files from the project export directory.
   */
  function cleanExportDir(): void;

  /**
   * returns the path of the project export directory.
   */
  function getExportDir(): string;

  /**
   * returns true if a scene was exported to a QuickTime in the specified directory
   */
  function exportToQuicktime(displayName: string, startFrame: int, lastFrame: int, withSound: boolean, resX: int, resY: int, dstPath: string, displayModule: string, generateThumbnail: boolean, thumbnailFrame: int): boolean;

  /**
   * export OGL frames to a QuickTime movie. Without QuickTime it will try to fallback to other supported formats.
   */
  function exportOGLToQuicktime(fileName: string, dstPath: string, startFrame?: int, lastFrame?: int, resX?: int, resY?: int): void;
}

/**
 * The Action JavaScript global object. Trigger action associated to menu or tool bar items
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

  /**
   * using action manager, validates the requested action (slot - menu item, toolbar item,...)
   */
  function validate(slot: string): QVariant;

  /**
   * using action manager, validates the requested action (slot - menu item, toolbar item,...)
   */
  function validate(slot: string, responder: string): QVariant;
}

/**
 * The column JavaScript global object. Retrieve add or remove values from columns in your scene
 */
declare namespace column {
  /**
   * returns the number of columns in the scene
   */
  function numberOf(): int;

  /**
   * returns the unique identifier that names the column. This is not the display name shown in the xsheet
   */
  function getName(columnNumber: int): string;

  /**
   * returns the displayable name (similar to the one displayed in the xsheet view) of a column.
   */
  function getDisplayName(columnName: string): string;

  /**
   * returns the colour for the given column
   */
  function getColorForXSheet(columnName: string): ColorRGBA;

  /**
   * sets the colour for an Xsheet column
   */
  function setColorForXSheet(columnName: string, color: ColorRGBA): void;

  function type(columnName: string): ColumnType;

  function velocityType(columnName: string): string;

  /**
   * returns the value of a cell in a column.
   */
  function getEntry(columnName: string, subColumn: int, atFrame: double): string;

  /**
   * returns true or false indicating if a cell in a column is a keyframe.
   */
  function isKeyFrame(columnName: string, subColumn: int, atFrame: double): boolean;

  /**
   * Returns the element id associated with a drawing column.
   */
  function getElementIdOfDrawing(columnName: string): int;

  /**
   * returns the expression text in the identified column.
   */
  function getTextOfExpr(columnName: string): string;

  /**
   * adds a column with the specified name and type
   */
  function add(columnName: string, columnType: ColumnType, position?: string): boolean;

  /**
   * removes the sound column called name from the scene
   */
  function removeSoundColumn(columnName: string): boolean;

  /**
   * removes an unlinked function column called name from the scene
   */
  function removeUnlinkedFunctionColumn(columnName: string): boolean;

  /**
   * renames the specified column
   */
  function rename(oldName: string, newName: string): boolean;

  /**
   * sets the value of a cell in a column
   */
  function setEntry(columnName: string, subColumn: int, atFrame: double, value: string): boolean;

  /**
   * makes a cell in a column a keyframe
   */
  function setKeyFrame(columnName: string, atFrame: double): boolean;

  /**
   * removes a keyframe from a cell in a column.
   */
  function clearKeyFrame(columnName: string, atFrame: double): boolean;

  /**
   * links an empty Drawing column to an element.
   */
  function setElementIdOfDrawing(columnName: string, elementId: int): boolean;

  /**
   * returns a list of all drawing types used in the drawing column. K = key drawings, I = inbetween, B = breakdown
   */
  function getDrawingType(columnName: string, atFrame: double): string;

  /**
   * sts the Drawing type at frame f from column col to be newType. K = key drawings, I = inbetween, B = breakdown
   */
  function setDrawingType(columnName: string, atFrame: double, drawingType: string): void;

  /**
   * Retrieves the list of names of drawing timing columns.
   */
  function getDrawingColumnList(): StringList;

  /**
   * Retrieves the list of names of timing columns of the given type.
   */
  function getColumnListOfType(type: ColumnType): StringList;

  /**
   * Retrieves the list of timings used in a drawing column.
   */
  function getDrawingTimings(columnName: string): StringList;

  /**
   * returns the next key drawing in a drawing column.
   */
  function getNextKeyDrawing(columnName: string, startFrame: int): int;

  /**
   * Retrieves the current version of a timing.
   */
  function getCurrentVersionForDrawing(columnName: string, timingName: string): int;

  /**
   * Import a sound file in the specified column at the specified frame. This function returns a Boolean indicating the.
   */
  function importSound(columnName: string, atFrame: int, soundFilePath: string): boolean;

  /**
   * sets the value in the Expression column to the specified text.
   */
  function setTextOfExpr(columnName: string, text: string): boolean;

  /**
   * returns the drawing name for the specified column at the specified frame
   */
  function getDrawingName(columnName: string, frame: int): string;

  function generateTiming(columnName: string, forFrame: double, fileExists: boolean): string;

  /**
   * creates an empty drawing in the specified column
   */
  function createDrawing(columnName: string, timing: string): boolean;

  /**
   * renames the specified drawing to the new name,in the specified column
   */
  function renameDrawing(columnName: string, oldTiming: string, newTiming: string): boolean;

  /**
   * prepends the prefix to the drawing name in the specified column
   */
  function renameDrawingWithPrefix(columnName: string, oldTiming: string, prefix: string): boolean;

  /**
   * deletes the drawing at the specified frame in the specified column
   */
  function deleteDrawingAt(columnName: string, frame: int): boolean;

  /**
   * duplicates the drawing at the specified frame in the specified column
   */
  function duplicateDrawingAt(columnName: string, frame: int): boolean;

  /**
   * add a key drawing exposure at the specified frame in the specified column.
   */
  function addKeyDrawingExposureAt(columnName: string, frame: int): boolean;

  /**
   * remove a key drawing exposure at the specified frame in the specified column.
   */
  function removeKeyDrawingExposureAt(columnName: string, frame: int): boolean;

  /**
   * remove duplicate key drawing exposure at the specified frame in the specified column.
   */
  function removeDuplicateKeyDrawingExposureAt(columnName: string, frameNumber: int): boolean;

  /**
   * fill with previous exposed drawings for the given range of frame.
   */
  function fillEmptyCels(columnName: string, startFrame: int, endFrame: int): boolean;

  /**
   * fills the drawings from frame fromFrame to frame toFrame with drawing duplicates named with prefix prefix in column col.
   */
  function lineTestFill(columnName: string, startFrame: int, nbFrames: int, prefix: string, keyFramesOnly: boolean): boolean;

  /**
   * return a SoundColumnInterface object that contains a reference to that sound column. The SoundColumnInterface object contains a useful interface to introspecting the sound and its sound sequences.
   */
  function soundColumn(columnName: string): QObject;
}
