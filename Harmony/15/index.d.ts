/// <reference path="../index.d.ts" />
/// <reference path="../../shared/15/index.d.ts" />
/**
 * The node JavaScript global object
 */
declare namespace node {
  /**
   * returns the name of the Top level in the network, which is "Top".
   */
  function root(): string;

  /**
   * returns a true or false value indicating if the node is a Group.
   */
  function isGroup(node: string): boolean;

  /**
   * returns the name of a node
   */
  function getName(node: string): string;

  /**
   * returns the node type. These are all of the built-in node types available from the Stage node like: READ, COMPOSITE, PEG, QUADMAP, SHADOW, etc
   */
  function type(node: string): NodeType;

  /**
   * returns an integer that indicates the number of nodes contained in a group.
   */
  function numberOfSubNodes(parent: string): int;

  /**
   * return an array of sub nodes.
   */
  function subNodes(parentGroup: string): NodePath[];

  /**
   * returns the path of a node in a group. Nodes are counted starting with zero
   */
  function subNode(parent: string, iSubNode: int): string;

  /**
   * This function returns the full path name of a child node belonging to a parent group. This function will validate that the parent group exists and that the child node exists in that parent. This function should be used instead of manually concatenating the full path name of child nodes.
   */
  function subNodeByName(parent: string, name: string): string;

  /**
   * returns the path of the parent level of a node contained in a group
   */
  function parentNode(node: string): string;

  /**
   * returns the null string that is returned by other functions when there is an error.
   */
  function noNode(): string;

  /**
   * returns true or false to indicate if a node path is equal to another. Used to compare node paths.
   */
  function equals(node1: string, node2: string): boolean;

  /**
   * returns the value(s) of the node selected attribute(s).
   */
  function getTextAttr(node: string, atFrame: double, attrName: string): string;

  /**
   * returns a Attribute object that represents the node selected attribute(s).
   */
  function getAttr(node: string, atFrame: double, attrName: string): Attribute;

  /**
   * returns a list of Attribute objects in specified node or node complex attribute.
   */
  function getAttrList(node: string, atFrame: double, attrName?: string): QList<Attribute>;

  /**
   * returns the name of the column that an attribute is linked to. If the attribute is not linked to a column, the function returns the null string.
   */
  function linkedColumn(node: string, attrName: string): string;

  /**
   * returns an integer indicating the X position of a node in the network
   */
  function coordX(node: string): int;

  /**
   * returns an integer indicating the Y position of a node in the network
   */
  function coordY(node: string): int;

  /**
   * returns an integer indicating the Z position of a node in the network
   */
  function coordZ(node: string): int;

  /**
   * returns the width of a given node. This width / height parameter is useful for computing the position of nodes in the Network view. It uses the same unit system as the coordX() and coordY() functions.
   */
  function width(node: string): int;

  /**
   * returns the height of a given node. This width / height parameter is useful for computing the position of nodes in the Network view. It uses the same unit system as the coordX() and coordY() functions.
   */
  function height(node: string): int;

  /**
   * sets the position of a node in the network.
   */
  function setCoord(node: string, x: int, y: int): boolean;

  /**
   * sets the position of a node in the network.
   */
  function setCoord(node: string, x: int, y: int, z: int): boolean;

  /**
   * the number of input ports on the node.
   */
  function numberOfInputPorts(node: string): int;

  /**
   * returns true or false to indicate if a port is connected to another node.
   */
  function isLinked(node: string, iPort: int): boolean;

  /**
   * returns the path for the node that the port is linked to.
   */
  function srcNode(node: string, iPort: int): string;

  /**
   * If the srcNode is a Group, this function returns the path of the node inside the Group node that is the source. If the source is not inside a group, the flatSrcNode function behaves like the srcNode function.
   */
  function flatSrcNode(node: string, iPort: int): string;

  /**
   * returns the source node path, the port number and the link ID for this destination node is connected to.
   */
  function srcNodeInfo(node: string, iPort: int): QScriptValue;

  /**
   * the number of output ports on a node.
   */
  function numberOfOutputPorts(node: string): int;

  /**
   * the number of nodes actually linked from the output ports.
   */
  function numberOfOutputLinks(node: string, iPort: int): int;

  /**
   * returns the path of the destination node linked to by the output port on the source node.
   */
  function dstNode(sourceNode: string, iPort: int, iLink: int): string;

  /**
   * returns the path and addition information of the destination node linked to the source node.
   */
  function dstNodeInfo(sourceNode: string, iPort: int, iLink: int): QScriptValue;

  /**
   * returns true if the peg's groupAtNetworkBuilding attribute is true.
   */
  function groupAtNetworkBuilding(node: string): boolean;

  /**
   * returns the value of the "Add Composite To Group" attribute of the peg-node. This method is obsolete.
   */
  function addCompositeToGroup(node: string): boolean;

  /**
   * adds a node to the network.
   */
  function add(parentGroup: string, name: string, type: string, x: int, y: int, z: int): string;

  /**
   * Return existing or add a group multi port in node.
   */
  function getGroupInputModule(parentGroup: string, name: string, x: int, y: int, z: int): string;

  /**
   * Return existing or add a group multi port out node.
   */
  function getGroupOutputModule(parentGroup: string, name: string, x: int, y: int, z: int): string;

  /**
   * Delete a single node. Optionally, delete all columns and element associated to that node. The column and element would only be removed when no other nodes refer to them. This function returns true when successful.
   */
  function deleteNode(nodePath: string, deleteTimedValues?: boolean, deleteElements?: boolean): boolean;

  /**
   * Create a group from the selection of nodes. The list of nodes is a string where the nodes are separated by commas. The actual name of each node in the list of nodes must include the full path of that node. The function returns the full path of the created group, or an empty string if the creation of the node failed.
   */
  function createGroup(nodes: string, groupName: string): string;

  /**
   * moves the specified node within the specified group. Similar to performing a drag and drop of a node to a group from the timeline.
   */
  function moveToGroup(nodeName: string, groupName: string): string;

  /**
   * Explode a group into its parent group. This function is identical to the "Explode Selected Group" from the Network view.
   */
  function explodeGroup(groupName: string): boolean;

  /**
   * changes the name of a node.
   */
  function rename(node: string, newName: string): boolean;

  /**
   * Create a new attribute for the given node.
   */
  function createDynamicAttr(node: string, type: string, attrName: string, displayName: string, linkable: boolean): boolean;

  /**
   * Remove a dynamic attribute for the given node.
   */
  function removeDynamicAttr(node: string, attrName: string): boolean;

  /**
   * changes the value of an attribute in a node.
   */
  function setTextAttr(node: NodePath, attrName: AttrKeyword, atFrame: int, attrValue: string | number): boolean;

  /**
   * links an attribute to a function column in the Xsheet View.
   */
  function linkAttr(node: string, attrName: string, columnName: string): boolean;

  /**
   * unlinks an attribute from a function column.
   */
  function unlinkAttr(node: string, attrName: string): boolean;

  /**
   * links a port on a node to a port on another node.
   */
  function link(srcNode: string, srcPort: int, dstNode: string, dstPort: int): boolean;

  /**
   * links a port on a node to a port on another node. Fancy version that allow easier connecting to a group node, or setup the proper connection order.
   */
  function link(srcNode: string, srcPort: int, dstNode: string, dstPort: int, mayAddOutputPort: boolean, mayAddInputPort: boolean): boolean;

  /**
   * unlinks a port on one node from the port on another node.
   */
  function unlink(dstNode: string, inPort: int): boolean;

  /**
   * Setters and getters for the enable/disable property of a node.
   */
  function setEnable(node: string, flag: boolean): boolean;

  /**
   * returns whether a node is enabled or not.
   */
  function getEnable(node: string): boolean;

  /**
   * Setters and getters for the lock/unlock property of a node.
   */
  function setLocked(node: string, lock: boolean): boolean;

  /**
   * returns the lock flag
   */
  function getLocked(node: string): boolean;

  /**
   * sets the timeline tag flag
   */
  function setTimelineTag(node: string, tag: boolean): boolean;

  /**
   * returns the timeline tag flag
   */
  function getTimelineTag(node: string): boolean;

  function getTimelineTagList(node?: string, list?: StringList): StringList;

  /**
   * sets the node color
   */
  function setColor(node: string, color: ColorRGBA): boolean;

  /**
   * resets the node color
   */
  function resetColor(node: string): boolean;

  /**
   * returns the node color
   */
  function getColor(node: string): ColorRGBA;

  /**
   * This function changes the global display used in the application. The node must be the full path of a display node.
   */
  function setAsGlobalDisplay(node: string): boolean;

  /**
   * This function changes the global display used by the application to "Display All" pseudo-display.
   */
  function setGlobalToDisplayAll(): boolean;

  /**
   * Setters and getters for the default camera.
   */
  function setAsDefaultCamera(node: string): boolean;

  /**
   * returns the name of the default camera.
   */
  function getDefaultCamera(): string;

  /**
   * Returns a list of all cameras within the scene.
   */
  function getCameras(): StringList;

  function getMaxVersionNumber(node: string): int;

  function getVersion(node: string): int;

  function setVersion(node: string, version: int): void;

  /**
   * Returns a collection of node paths for nodes of specified types.
   */
  function getNodes(types: StringList): StringList;

  /**
   * returns the model matrix of a node.
   */
  function getMatrix(node: string, frame: int): Matrix4x4;

  /**
   * returns the pivot of the node
   */
  function getPivot(node: string, frame: int): Point3d;

  /**
   * returns the ColorOverride object for the colour override node
   */
  function getColorOverride(node: string): ColorOverride;

  function getElementId(nodeName: string): int;

  /**
   * This function creates a group for each exposure of the element where there is a symbol and will put the content of the symbol in that group. If disable element is TRUE, will disable the element afterwards. If clearExposure is TRUE, will clear the exposures where there were symbols afterwards. Will use prefix as the prefix for the generated group names.
   */
  function explodeElementSymbolsInGroups(element: string, disableElement: boolean, clearExposure: boolean, prefix?: string): void;

  /**
   * sets the show/hide timeline thumbnails on drawing layers
   */
  function setShowTimelineThumbnails(node: string, bShow: boolean): boolean;

  /**
   * return the show/hide timeline thumbnails flags on drawing layers
   */
  function getShowTimelineThumbnails(node: string): boolean;
}

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
  function soundColumn(columnName: string): SoundColumnInterface;
}

/** Config for DrawingTools.clearArt
 * drawing : Drawing Key
 * art : int The art to clear. 0 = Underlay, 1 = Colour Art, 2 = Line Art, 3 = Overlay
 */

declare interface ClearArtConfig {
  drawing: string;
  art?: DrawingLayer;
}

/**
 * The DrawingTools JavaScript global object. Get information about the currently selected drawing
 */
declare namespace DrawingTools {
  /**
   * sets the current art to be one of the following : underlayArt, colourArt, lineArt or overlayArt
   */
  function setCurrentArt(layer: DrawingLayer): void;

  /**
   * sets the current drawing to be from column columnName at frame frame
   */
  function setCurrentDrawingFromColumnName(columnName: string, frame?: int): boolean;

  /**
   * sets the current drawing to be from node nodeName at frame frame
   */
  function setCurrentDrawingFromNodeName(nodeName: string, frame?: int): boolean;

  /**
   * converts the selected pencil lines in layer of the current drawing using params
   */
  function convertPencilToBrush(art?: int, params?: DrawingToolParams): void;

  /**
   * extracts the centerline from srcLayer and puts the extracted line in dstLayer using params.
   */
  function extractCenterline(srcArt?: int, dstArt?: int, params?: DrawingToolParams): void;

  /**
   * Clears an art of a drawing.
     Takes an object that can contain: drawing : Drawing Key art : int The art to clear. 0 = Underlay, 1 = Colour Art, 2 = Line Art, 3 = Overlay
     Added in 15.0.5
   */
  function clearArt(config: ClearArtConfig): void;
  /**
   * computes the breaking triangles of the current layer using params.
   */
  function computeBreakingTriangles(params?: DrawingToolParams): void;

  function recolorDrawing(): void;

  function getDrawingUsedColors(): QScriptValue;

  function getDrawingUsedColorsWithSource(): QScriptValue;

  function getMultipleDrawingsUsedColors(): QScriptValue;

  /**
   * Performs the same operation as Drawing->Optimize->Optimize menu item.
   */
  function optimize(config: QVariant): boolean;

  /**
   * Performs the same operation as Drawing->Optimize->Flatten menu item.
   */
  function flatten(config: QVariant): boolean;

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

declare interface SliderWidgetConfig extends WidgetConfig {
  /**
   * The name of the automatically generated double floating point attribute (if none is provided). The value will range from min to max.
   * or, An attribute of double (floating point) type that can be shared with another widget or node.
   */
  data: string | Attribute;
  /**
  The length of the slider in fields. 
  Default: 0.5
  */
  length?: float;
  /**
   * The radius of the slider handle in fields.
   * Default: 0.03
   */
  radius?: float;
  /**
   * Paint a shadow under the slider.
   * Default: false
   */
  drop_shadow?: boolean;
  /**
   * Make the slider appears horizontal. Vertical if false.
   * Default: false
   */
  horizontal?: boolean;
  /**
   * Minimum value of the slider.
   * Default: 0
   */
  min?: float;
  /**
   * Maximum value of the slider.
   * Default: 100
   */
  max?: float;
  /**
   * The colour of the handle of the slider.
   * Default: white
   */
  slider_color?: ColorRGBA;
  /**
   * The colour of the circle highlighting the handle of the slider.
   * Default: dark gray
   */
  contour_color?: ColorRGBA;
  /**
   * The colour of the handle of the slider when selected.
   * Default: 125,125,255
   */
  slider_selection_color?: ColorRGBA;
  /**
   * The colour of the frame of the slider.
   * Default: 200,200,200
   */
  frame_color?: ColorRGBA;
  /**
   * The colour of the frame of the slider when selected.
   * Default: 125,125,255
   */
  frame_selection_color?: ColorRGBA;

  /**
   * Default translation in the x axis for the bottom left corner of the slider frame. In fields.
   * Default: -0.05
   */
  xmin?: number;
  /**
   * Default translation in the y axis for the bottom left corner of the slider frame. In fields.
   * Default: -0.1
   */
  ymin?: number;
}
/**
 * The SliderWidget JavaScript class. A vertical or horizontal slider
 */
declare class SliderWidget extends WidgetBase {
  constructor(config: SliderWidgetConfig);
  /**
   * Signal notifying the user that the slider value was modified by the Transform Tool.
   */
  public valueChanged: QSignal<(newSliderValue: float) => void>;
}

declare interface Point2dWidgetConfig extends WidgetConfig {
  /**
   * The name of the automatically generated 2d position attribute (if none is provided)
   * or, An attribute of 2d position type that can be shared with another widget or node.
   */
  data: string | Attribute;
  /**
   * The size (diameter) of the point manipulator in fields.
   * Default: 0.01
   */
  size?: float;
  /**
   * The colour of the point manipulator.
   * Default: 255,0,0
   */
  color?: ColorRGBA;
  /**
   * The colour of the inner point manipulator (override the color property if both are found).
   */
  inner_color?: ColorRGBA;
  /**
   * The colour of the outer point manipulator (override the color property if both are found).
   */
  outer_color?: ColorRGBA;
  /**
   * The colour of the point manipulator when selected.
   * Default: light blue
   */
  selection_color?: ColorRGBA;
  /**
   * The left boundary of the point bounding box in fields.
   */
  xmin?: float;
  /**
   * The right boundary of the point bounding box in fields.
   */
  xmax?: float;
  /**
   * The bottom boundary of the point bounding box in fields.
   */
  ymin?: float;
  /**
   * The top boundary of the point bounding box in fields.
   */
  ymax?: float;
}

/**
 * The Point2dWidget JavaScript class. A 2 dimensional point widget of various shape
 */
declare class Point2dWidget extends WidgetBase {
  constructor(config: Point2dWidgetConfig);
  /**
   * Signal notifying the user that the 2d point value was modified by the Transform Tool.
   */
  public valueChanged: QSignal<(point2d: Point2d) => void>;
}

declare class MCUIPoint2D extends Point2dWidget {}


declare class SoundColumnInterface extends QObject {

  public sequences(): SCR_SoundSequenceInterface[];
}

declare class SCR_SoundSequenceInterface extends QObject {
  startFrame: number;
  stopFrame: number;
  startTime: number;
  name: string;
  filename: string;
}