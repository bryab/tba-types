/// <reference path="../../shared/qtscript.d.ts" />
/// <reference path="../../shared/tba.d.ts" />
/**
 * String describing path in network, e.g. "Top/Composite"
 */
declare type NodePath = string;
/**
 * String describing attribute, e.g. "SCALE"
 */
declare type AttrKeyword = string;
/**
 * String representing attribute value
 */
declare type AttrStringValue = string;

/**
 * A node's type, e.g. "READ".
 */
declare type NodeType = "AnimatedMatteGenerator" | "ArticulationModule" | "AutoFoldModule" | "AutoMuscleModule" | "AutoPatchModule" | "BLEND_MODE_MODULE" | "BLUR_DIRECTIONAL" | "BLUR_RADIAL" | "BLUR_VARIABLE" | "BOXBLUR-PLUGIN" | "BRIGHTNESS_CONTRAST" | "BendyBoneModule" | "BezierMesh" | "Bloom" | "BoneModule" | "BurnIn" | "CAMERA" | "CHANNEL_SWAP" | "CHROMA_KEYING" | "COLOR2BW" | "COLOR_ART" | "COLOR_CARD" | "COLOR_MASK" | "COLOR_OVERRIDE_TVG" | "COLOR_SCALE" | "COMPOSITE" | "COMPOSITE_GENERIC" | "CONTRAST" | "CROP" | "CUTTER" | "ComputeNormals" | "CurveModule" | "DEPTHBLUR" | "DISPLAY" | "DITHER" | "DeformationCompositeModule" | "DeformationRootModule" | "DeformationScaleModule" | "DeformationSwitchModule" | "DeformationUniformScaleModule" | "DeformationWaveModule" | "DynamicSpring" | "EXTERNAL" | "FADE" | "FIELD_CHART" | "FLATTEN" | "FLICKER_BLUR" | "FOCUS_APPLY" | "FOCUS_SET" | "FilterBanding" | "FoldModule" | "GAUSSIANBLUR-PLUGIN" | "GLCacheLock" | "GLOW" | "GLUE" | "GRADIENT-PLUGIN" | "GRAIN" | "GROUP" | "GameBoneModule" | "Grid" | "HIGHLIGHT" | "HUE_SATURATION" | "ImageSwitch" | "KinematicOutputModule" | "LAYER_SELECTOR" | "LINE_ART" | "LensFlare" | "LightPosition" | "LightShader" | "LuminanceThreshold" | "MATTE_BLUR" | "MATTE_COMPOSITE" | "MATTE_RESIZE" | "MOTION_BLUR" | "MULTIPORT_IN" | "MULTIPORT_OUT" | "MasterController" | "MedianFilter" | "MultiLayerWrite" | "NEGATE" | "NOTE" | "NormalFloat" | "OGLBYPASS" | "ORTHOLOCK" | "OVERLAY" | "ObjectDefinition" | "OffsetModule" | "OpenGLPreview" | "PEG" | "PEG_APPLY3" | "PEG_APPLY3_V2" | "PIXELATE" | "PLUGIN" | "Particle3dRegion" | "ParticleBaker" | "ParticleBkerComposite" | "ParticleBounce" | "ParticleExplosion" | "ParticleGravity" | "ParticleKill" | "ParticleMove" | "ParticlePlanarRegion" | "ParticleRotationVelocity" | "ParticleSink" | "ParticleSize" | "ParticleSprite" | "ParticleSystemComposite" | "ParticleVelocity" | "ParticleVisualizer" | "ParticleVortex" | "ParticleWindFriction" | "PointConstraint2" | "PointConstraint3" | "PointConstraintMulti" | "QUADMAP" | "Quake" | "RADIALBLUR-PLUGIN" | "READ" | "REFRACT" | "REMOVE_TRANSPARENCY" | "SCALE" | "SCRIPT_MODULE" | "SHADOW" | "StaticConstraint" | "SubNodeAnimation" | "SubNodeAnimationFilter" | "Switch" | "TONE" | "TbdColorSelector" | "ToneShader" | "TransformGate" | "TransformLimit" | "TransformationSwitch" | "Turbulence" | "TurbulentNoise" | "UNDERLAY" | "VISIBILITY" | "WRITE";

/**
 * Column Type as returned by column.type()
 */
declare type ColumnType = "DRAWING" | "SOUND" | "3DPATH" | "BEZIER" | "EASE" | "EXPR" | "TIMING" | "QUATERNION" | "ANNOTATION";

/**
 * Type name as returned by Attribute.typeName()
 */
declare type AttrValueType = "ALIAS" | "ARRAY_POSITION_2D" | "ARRAY_STRING" | "BOOL" | "COLOR" | "COMPATIBILITY" | "CUSTOM_NAME" | "DOUBLE" | "DOUBLEVB" | "DRAWING" | "ELEMENT" | "ENABLE" | "FILE_EDITOR" | "FILE_LIBRARY" | "GENERIC_ENUM" | "HSL" | "HUE_RANGE" | "INT" | "LOCKED" | "PATH_3D" | "POINT_2D" | "POSITION_2D" | "POSITION_3D" | "PUSH_BUTTON" | "QUATERNION_PATH" | "ROTATION_3D" | "SCALE_3D" | "SIMPLE_BEZIER" | "STRING" | "TIMING"
/**
* The specialFolders JavaScript global object. Provide the path to application specific paths 
*/
declare module specialFolders {
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
  * read-only property that indicates where the [install]/etc folder is.
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

  /**
  * This is a read-only property that contains the folder where the user scripts are stored.
  */
  var userScripts: string;

}


/**
* 
*/
declare module CELIO {
  function getLayerInformation(path: string): QVariant;

  function getInformation(path: string): QVariant;

  function getInformation(path: string, withLayers: boolean): QVariant;

}




/**
* The Action JavaScript global object. Trigger action associated to menu or tool bar items 
*/
declare module Action {
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
* The Backdrop JavaScript global object. Get, set and add backdrops 
*/
declare module Backdrop {
  /**
  * Return the backdrops of a group.
  */
  function backdrops(group: string): QScriptValue;

  function setBackdrops(group: string, backdrops: QScriptValue): boolean;

  function addBackdrop(group: string, backdrop: QScriptValue): boolean;

}


/**
* The column JavaScript global object. Retrieve add or remove values from columns in your scene 
*/
declare module column {
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


/**
* The compositionOrder JavaScript global object. Extract timeline composition order 
*/
declare module compositionOrder {
  /**
  * returns an array of Composition object using the current default composition order as used by the camera view or the timeline.
  */
  function buildDefaultCompositionOrder(): QScriptValue;

  /**
  * return an array of Composition object using the specified display name.
  */
  function buildCompositionOrderForDisplay(displayNode: string): QScriptValue;

}


/**
* The copyPaste JavaScript global object. Copy paste to/from templates 
*/
declare module copyPaste {
  function createTemplateFromSelection(name: string, path: string): string;

  function useCreateTemplateSpecial(flag: boolean, addModellingDir?: boolean, addScanFiles?: boolean, includeDefaultCameraName?: boolean): void;

  function pasteTemplateIntoScene(templateSrcPath: string, insertColumnName: string, insertFrame: int): boolean;

  function pasteTemplateIntoGroup(srcPath: string, groupName: string, insertFrame: int): boolean;

  function pasteActionTemplateIntoNode(srcPath: string, nodeName: string, insertFrame: int): boolean;

  function usePasteSpecial(flag: boolean): void;

  function setExtendScene(flag: boolean): void;

  function setPasteSpecialCreateNewColumn(flag: boolean): void;

  function setPasteSpecialElementTimingColumnMode(mode: "ELEMENT_AS_ELEMENT_AND_TIMING_AS_TIMING" | "ALL_DRWGS_AS_ELEMENTS" | "ALL_DRWGS_LINKED_THRU_TIMING_COLS"): void;

  function setPasteSpecialAddRemoveMotionKeyFrame(flag: boolean): void;

  function setPasteSpecialAddRemoveVelocityKeyFrame(flag: boolean): void;

  function setPasteSpecialAddRemoveAngleKeyFrame(flag: boolean): void;

  function setPasteSpecialAddRemoveSkewKeyFrame(flag: boolean): void;

  function setPasteSpecialAddRemoveScalingKeyFrame(flag: boolean): void;

  function setPasteSpecialForcesKeyFrameAtBegAndEnd(flag: boolean): void;

  function setPasteSpecialOffsetKeyFrames(flag: boolean): void;

  function setPasteSpecialReplaceExpressionColumns(flag: boolean): void;

  function setPasteSpecialDrawingAction(mode: "DO_NOTHING" | "ADD_OR_REMOVE_EXPOSURE" | "UPDATE_PIVOT"): void;

  function setPasteSpecialDrawingFileMode(mode: "NEVER_CREATE" | "ONLY_CREATE_IF_DOES_NOT_EXIST" | "ALWAYS_CREATE" | "ALWAYS_CREATE_AND_VERSION_IF_NECESSARY"): void;

  function setPasteSpecialDrawingAutomaticExtendExposure(extendExposure: boolean, keyFrameMode: boolean): void;

  function setPasteSpecialColorPaletteOption(mode: "DO_NOTHING" | "REUSE_PALETTES" | "COPY_AND_OVERWRITE_EXISTING_PALETTES" | "COPY_AND_CREATE_NEW_PALETTES" | "COPY_AND_CREATE_NEW_PALETTES_IN_ELEMENT_FOLDER" | "COPY_PALETTE_AND_MERGE_COLOURS" | "COPY_PALETTE_AND_UPDATE_COLOURS" | "LINK_TO_ORIGINAL" | "COPY_SCENE_PALETTE_AND_MERGE_COLOURS" | "COPY_SCENE_PALETTE_AND_UPDATE_COLOURS"): void;

  function copyPaste(parent: QObject, name: char): void;

  function registerObjects(engine: QScriptEngine): void;

  function setPasteSpecialCopyScanFiles(copy: boolean): void;

  function setPasteSpecialCopyModelDir(copy: boolean): void;

  function setPasteSpecialTVPreserveName(preserve: boolean): void;

  function setPasteSpecialDefaultCameraName(flag: boolean): void;

  function setPasteSpecialMatchNodeName(flag: boolean): void;

  function setPasteSpecialFullTransfer(flag: boolean): void;

  function setStartFrameSrc(startFrame: int): void;

  function setNumFramesSrc(nFrames: int): void;

  function getCurrentCreateOptions(): CopyOptions;

  function getCurrentPasteOptions(): PasteOptions;

  /**
  * Create an object that represent a 'copy' of a selection of nodes and a range of frames.
  */
  function copy(selectionOfNodes: StringList, startFrame: int, numFrames: int, createOption: CopyOptions): DragObject;

  /**
  * paste drag object as an action template. Must past over a selection of nodes. No new modules created by this action.
  */
  function paste(dragObject: DragObject, selectionOfNodes: StringList, startFrame: int, numFrames: int, pasteOptions: PasteOptions): boolean;

  function pasteNewNodes(dragObject: DragObject, groupWhereToDrop: string, pasteOptions: PasteOptions): boolean;

  function copyFromTemplate(filename: string, startFrame: int, numFrames: int, createOption: CopyOptions): DragObject;

}


/**
* The Drawing JavaScript global object. Iterate and manipulate the drawings of an element node 
*/
declare module Drawing {
  /**
  * return the # of drawings in the element.
  */
  function numberOf(elementId: int): int;

  /**
  * return the drawing id.
  */
  function name(elementId: int, drawingIndex: int): string;

  /**
  * return true if the given drawing exists in this element.
  */
  function isExists(elementId: int, timing: string): boolean;

  /**
  * create a drawing.
  */
  function create(elementId: int, timing: string, fileExists: boolean, storeInProjectFolder?: boolean): boolean;

  /**
  * return the 'load' filename of this drawing. This filename may be in the temp folder or project folder. Before the project is actually saved, this is where the drawing must reside to be found by the application.
  */
  function filename(elementId: int, drawingName: string): string;

}


/**
* The DrawingTools JavaScript global object. Get information about the currently selected drawing 
*/
declare module DrawingTools {
  /**
  * sets the current art to be one of the following : underlayArt, colourArt, lineArt or overlayArt
  */
  function setCurrentArt(unknown_0: int): void;

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


/**
* The element JavaScript global object. Add, remove, modify or get information about element nodes in the scene 
*/
declare module element {
  /**
  * returns the number of elements in the scene
  */
  function numberOf(): int;

  /**
  * returns the id (key) of the element
  */
  function id(elementIndex: int): int;

  /**
  * return the current element name.
  */
  function getNameById(id: int): string;

  /**
  * returns a string that is the scan type of the element. The scan type is either: COLOR, GRAY_SCALE or BW
  */
  function scanType(id: int): string;

  /**
  * This function returns the field chart size for a given element. The element ID must be provided. The field chart is a number such as 12,16 or 24 field.
  */
  function fieldChart(id: int): double;

  /**
  * This function returns the vector type for the given element. In theory, there is support for multiple types of vector drawing. In practice, only TVG has been implemented. The value 0 : indicates that the element is NOT a vector drawing. It is an IMAGE type. The value 2: indicates that the element is a TVG vector drawing.
  */
  function vectorType(id: int): 0 | 2;

  /**
  * returns the pixmap format for the provided element ID
  */
  function pixmapFormat(id: int): string;

  /**
  * return the actual element folder. This is normally the element name (unless it has been renamed and the project is not saved) but may include the ".<element id>" in the name if multiple elements share the same name.
  */
  function folder(id: int): string;

  /**
  * return the complete element folder. This is normally the element name (unless it has been renamed and the project is not saved) but may include the ".<element id>" in the name if multiple elements share the same name.
  */
  function completeFolder(id: int): string;

  /**
  * return the actual name of the drawings. This is different that the element name if this one has been renamed and the changes have not yet been saved.
  */
  function physicalName(id: int): string;

  /**
  * changes the attributes of the folder of element elem
  */
  function modify(id: int, scanType: string, fieldChart: double, pixmapFormat: string, vectorType: int): boolean;

  /**
  * create a new element. returns the element id of the newly added element if successful, otherwise it returns -1
  */
  function add(name: string, scanType: string, fieldChart: double, fileFormat: string, vectorize: string): int;

  /**
  * remove given element. Also optionally delete the disk files. This function returns true when successful.
  */
  function remove(id: int, deleteDiskFile: boolean): boolean;

  /**
  * rename an existing element. The element ID must be provided
  */
  function renameById(id: int, name: string): boolean;

}


/**
* The exporter JavaScript global object. Provides access to the project export directory 
*/
declare module exporter {
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
* The fileMapper JavaScript global object. Map paths from one format to another 
*/
declare module fileMapper {
  /**
  * returns the complete path of the passed path resolving shortcuts in windows. Will also convert the path separator to '\'.
  */
  function toNativePath(path: string): string;

  /**
  * Converts a path of the form /USA_DB/jobs/[job]/scene-[scene]/[remainder...] to eg. /usadata000/[job]/scene-[scene]/[remainder...].
  */
  function toScenePath(path: string): string;

  function fileURLToPath(url: string): string;

}


/**
* The frame JavaScript global object. Get the current frame or number of frames. Add or remove frames in your scene. Manipulate the timeline marker 
*/
declare module frame {
  /**
  * Returns the number of frames in the scene.
  */
  function numberOf(): int;

  /**
  * Returns the number of the current frame.
  */
  function current(): int;

  /**
  * Inserts frames at the selected frame number.
  */
  function insert(atFrame: int, nbFrames: int): boolean;

  /**
  * Deletes frames starting from the selected frame number.
  */
  function remove(atFrame: int, nbFrames: int): boolean;

  /**
  * Allows you to change the current frame.
  */
  function setCurrent(frame: int): void;

  /**
  * Returns if marker exists at this frame.
  */
  function hasTimelineMarker(frame: int): boolean;

  /**
  * Returns markers text.
  */
  function timelineMarkerNote(frame: int): string;

  /**
  * Returns markers start frame.
  */
  function timelineMarkerStart(frame: int): int;

  /**
  * Returns markers length.
  */
  function timelineMarkerLength(frame: int): int;

}


/**
* The func JavaScript global object. Retrieve and modify values of function curves 
*/
declare module func {
  /**
  * returns the Start value from the Hold Value Editor dialog box, for Bezier, Ease and Velo-based Function Editors.
  */
  function holdStartFrame(columnName: string): int;

  /**
  * returns the Stop value from the Hold Value Editor dialog box, for Bezier, Ease and Velo-based Function Editors
  */
  function holdStopFrame(columnName: string): int;

  /**
  * returns the Step value from the Hold Value Editor dialog box, for Bezier, Ease and Velo-based Function Editors
  */
  function holdStep(columnName: string): int;

  /**
  * returns the number of keyframes and control points on a curve
  */
  function numberOfPoints(columnName: string): int;

  /**
  * returns the X value (frame number) of a point on a function curve
  */
  function pointX(columnName: string, point: int): double;

  /**
  * returns the Y value of a point on a function curve
  */
  function pointY(columnName: string, point: int): double;

  /**
  * returns a 1 (one) to indicate that the point is on a constant segment, or a 0 (zero) to indicate that the point is not on a constant segment
  */
  function pointConstSeg(columnName: string, point: int): boolean;

  /**
  * returns the continuity of the curve that follows the point. One of the following values will be returned, in upper-case: SMOOTH, CORNER or STRAIGHT
  */
  function pointContinuity(columnName: string, point: int): string;

  /**
  * returns the X value of the left handle of a point on a curve
  */
  function pointHandleLeftX(columnName: string, point: int): double;

  /**
  * returns the Y value of the left handle of a point on a curve.
  */
  function pointHandleLeftY(columnName: string, point: int): double;

  /**
  * returns the X value of the right handle of a point on a curve.
  */
  function pointHandleRightX(columnName: string, point: int): double;

  /**
  * returns the Y value of the right handle of a point on a curve
  */
  function pointHandleRightY(columnName: string, point: int): double;

  /**
  * returns the number of frames in the ease-in
  */
  function pointEaseIn(columnName: string, point: int): double;

  /**
  * returns the angle of the ease-in handle
  */
  function angleEaseIn(columnName: string, point: int): double;

  /**
  * returns the number of frames in the ease-out
  */
  function pointEaseOut(columnName: string, point: int): double;

  /**
  * returns the angle of the ease-out handle
  */
  function angleEaseOut(columnName: string, point: int): double;

  /**
  * returns the number of keyframes and control points on the 3D Path
  */
  function numberOfPointsPath3d(columnName: string): int;

  /**
  * returns the value of the specified point on the X path
  */
  function pointXPath3d(columnName: string, point: int): double;

  /**
  * returns the value of the specified point on the Y path
  */
  function pointYPath3d(columnName: string, point: int): double;

  /**
  * returns the value of the specified point on the Z path
  */
  function pointZPath3d(columnName: string, point: int): double;

  /**
  * returns the tension value for the specified point on the 3D Path
  */
  function pointTensionPath3d(columnName: string, point: int): double;

  /**
  * returns the continuity value (STRAIGHT, SMOOTH or CORNER) for the specified point on the 3D Path.
  */
  function pointContinuityPath3d(columnName: string, point: int): double;

  /**
  * returns the bias value for the specified point on the 3D Path
  */
  function pointBiasPath3d(columnName: string, point: int): double;

  /**
  * returns the frame at which it's locked, or returns 0 if the point is not locked.
  */
  function pointLockedAtFrame(columnName: string, point: int): double;

  /**
  * sets the Start value in the Hold Value Editor dialog box, for Bezier, Ease and Velo-based Function Editors
  */
  function setHoldStartFrame(columnName: string, start: int): boolean;

  /**
  * sets the Stop value in the Hold Value Editor dialog box, for Bezier, Ease and Velo-based Function Editors
  */
  function setHoldStopFrame(columnName: string, stop: int): boolean;

  /**
  * sets the Hold value in the Hold Value Editor dialog box, for Bezier, Ease and Velo-based Function Editors.
  */
  function setHoldStep(columnName: string, step: int): boolean;

  /**
  * sets the values of a point on a Bezier function curve
  */
  function setBezierPoint(columnName: string, frame: int, y: double, handleLeftX: double, handleLeftY: double, handleRightX: double, handleRightY: double, constSeg: boolean, continuity: string): boolean;

  /**
  * sets the values of a point on an Ease function curve
  */
  function setEasePoint(columnName: string, frame: int, y: double, easeIn: double, angleEaseIn: double, easeOut: double, angleEaseOut: double, constSeg: boolean, continuity: string): boolean;

  /**
  * sets the values of a point on a Velocity-Based function curve
  */
  function setVeloBasedPoint(columnName: string, frame: int, y: double): boolean;

  /**
  * adds a keyframe to a 3D Path and sets the X, Y and Z value, as well as the tension, continuity and bias.
  */
  function addKeyFramePath3d(columnName: string, frame: int, x: double, y: double, z: double, tension: double, continuity: double, bias: double): boolean;

  /**
  * adds a keyframe after a point on a 3D Path and sets the X, Y and Z values, as well as the tension, continuity and bias
  */
  function addCtrlPointAfterPath3d(columnName: string, point: int, x: double, y: double, z: double, tension: double, continuity: double, bias: double): boolean;

  /**
  * removePointPath3d may be used to remove either a key frame, or a control point
  */
  function removePointPath3d(columnName: string, point: int): boolean;

  /**
  * setPointPath3d may be used to set values in either a key frame, or a control point, but cannot change a key frame into a control point or a control point into a key frame. To change a key frame into a control point or a control point into a key frame, you must remove the point and add a new point.
  */
  function setPointPath3d(columnName: string, point: int, x: double, y: double, z: double, tension: double, continuity: double, bias: double): boolean;

  /**
  * sets the constant segment flag of point i of path p to b.
  */
  function setPath3dPointConstantSegment(columnName: string, point: int, constant: boolean): boolean;

  /**
  * sets the constant segment flag of point found at frame f of path p to b.
  */
  function setPath3dPointConstantSegmentForFrame(columnName: string, point: double, constant: boolean): boolean;

}

/**
* The library JavaScript global object. Select templates, and generate thumbnails or movies for them 
*/
declare module library {
  /**
  * returns the number of files that are selected
  */
  function numberOfTemplatesSelected(): int;

  /**
  * returns the path to the ith file that is selected
  */
  function getSelectedTemplate(i: int): string;

  /**
  * generates the thumbnails for selected templates
  */
  function getThumbnailForSelectedTpl(idx: int, res: int, dstPath: string): boolean;

  /**
  * generates the movies for selected templates
  */
  function getQuicktimeMovieForSelectedTpl(idx: int, start: int, end: int, xRes: int, yRes: int, userName: string, displayModule: string, dstPath: string, withSound: boolean): boolean;

}


/**
* The MessageBox JavaScript class. Simplified MessageBox Qt dialog 
*/
declare module MessageBox {
  /**
  * information box. One button, OK.
  */
  function information(message: QScriptContext, unknown?: QScriptEngine): QScriptValue;

  /**
  * warning box. Two buttons are Abort and Retry.
  */
  function warning(message: QScriptContext, unknown?: QScriptEngine): 524288 | 262144;

  /**
  * critical box. One button, Retry.
  */
  function critical(message: QScriptContext, unknown?: QScriptEngine): QScriptValue;

}


/**
* The MessageLog JavaScript global object. Allows the user to print messages to the message log window 
*/
declare module MessageLog {
  /**
  * writes the message to the message log
  */
  function trace(message: string | any): void;

  /**
  * writes the message to the message log if debug mode is on
  */
  function debug(messageIfDebug: string | any): void;

  /**
  * Prints message to message log as an error.
  */
  function error(message: string | any): void;

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
* The MovieImport JavaScript global object. Import a QuickTime movie in the current scene 
*/
declare module MovieImport {
  /**
  * defines the input movie filename.
  */
  function setMovieFilename(filename: string): void;

  /**
  * defines where to store the extracted images.
  */
  function setImageFolder(folder: string): void;

  /**
  * defines which prefix to use to save the images.
  */
  function setImagePrefix(prefix: string): void;

  /**
  * set the start frame (frame are 1 bound). The default value is 1. This will affect the 'doImport()' command where only these frames are considered.
  */
  function setStartFrame(startFrame: int): void;

  /**
  * set the desired last frame. This will affect the number of frames that will be extracted by 'doImport()' default value: 0 which mean that all frames are imported
  */
  function setStopFrame(stopFrame: int): void;

  /**
  * set the expected audio filename. must be wav format (as this is currently the only one supported ) sound filename can be left empty. if so, there will not be any file created.
  */
  function setAudioFile(audioFilename: string): void;

  /**
  * perform the import - no progress bar.
  */
  function doImport(): boolean;

  /**
  * return the number of imported images from the last import.
  */
  function numberOfImages(): int;

  /**
  * return the complete filename for the imported image 'index' from the last import.
  */
  function image(index: int): string;

  /**
  * return true if a sound file was created at the given filename.
  */
  function isAudioFileCreated(): boolean;

}


/**
* The node JavaScript global object 
*/
declare module node {
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
  function subNodes(parentGroup: string): QScriptValue;

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
  function setTextAttr(node: NodePath, attrName: AttrKeyword, atFrame: int, attrValue: AttrStringValue): boolean;

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
  function getMatrix(node: string, frame: int): QObject;

  /**
  * returns the pivot of the node
  */
  function getPivot(node: string, frame: int): QObject;

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
* The PaletteManager JavaScript global object. Get information about the Colour view current selection 
*/
declare module PaletteManager {
  /**
  * Gets the current color Id from the ColourView.
  */
  function getCurrentColorId(): string;

  /**
  * Gets the current color name from the ColourView.
  */
  function getCurrentColorName(): string;

  /**
  * Gets the current palette id from the ColourView.
  */
  function getCurrentPaletteId(): string;

  /**
  * Gets the current palette name from the ColourView.
  */
  function getCurrentPaletteName(): string;

  /**
  * Gets the current palette path (including palette name) from the ColourView.
  */
  function getCurrentPalettePath(): string;

  /**
  * Sets the current palette in the ColourView.
  */
  function setCurrentPaletteById(palette: string): void;

  /**
  * Sets the current color in the ColourView.
  */
  function setCurrentColorById(color: string): void;

  /**
  * Sets the current palette and colour in the ColourView.
  */
  function setCurrentPaletteAndColorById(palette: string, color: string): void;

  /**
  * gets the length of the current palette in the ColourView
  */
  function getCurrentPaletteSize(): int;

  /**
  * Gets the name of the the colour in the currently selected palette.
  */
  function getColorName(index: int): string;

  /**
  * Gets the id of the the colour in the currently selected palette.
  */
  function getColorId(index: int): string;

  /**
  * Gets number of palettes in the current selected palette list in ColourView list.
  */
  function getNumPalettes(): int;

  /**
  * Gets number of palettes in palette list in ColourView.
  */
  function getNumPalettes(scenePaletteList: boolean): int;

  /**
  * Gets the name of the palette in the current palette list.
  */
  function getPaletteName(index: int): string;

  /**
  * Gets the name of the palette in the current palette list.
  */
  function getPaletteName(index: int, scenePaletteList: boolean): string;

  /**
  * Gets the path (including name) of the palette in the current palette list.
  */
  function getPalettePath(index: int): string;

  /**
  * Gets the path (including name) of the palette in the current palette list.
  */
  function getPalettePath(index: int, scenePaletteList: boolean): string;

  /**
  * Gets the id of the palette in the current palette list.
  */
  function getPaletteId(index: int): string;

  /**
  * Gets the id of the palette in the current palette list.
  */
  function getPaletteId(index: int, scenePaletteList: boolean): string;

}


/**
* The PaletteObjectManager JavaScript global object. Provides access to palette list (PaletteList) and palette (Palette) objects 
*/
declare module PaletteObjectManager {
  /**
  * Load the element palette list specified by the element ID 'id' and return the corresponding PaletteList object.
  */
  function getPaletteListByElementId(id: int): PaletteList;

  /**
  * Load the scene palette list and return the corresponding PaletteList object.
  */
  function getScenePaletteList(): PaletteList;

  /**
  * Return the number of loaded palette lists.
  */
  function getNumPaletteLists(): int;

  /**
  * Returns a PaletteList object for the loaded palette list at position 'index'.
  */
  function getPaletteListByIndex(index: int): PaletteList;

  /**
  * Return a PaletteList object for the loaded palette list with the specified list ID.
  */
  function getPaletteListById(id: string): PaletteList;

  /**
  * Returns a Palette object for the loaded palette with the specified palette ID.
  */
  function getPalette(id: string): Palette;

  function removePaletteReferencesAndDeleteOnDisk(id: string): boolean;

}


/**
* The PenstyleManager JavaScript global object. Query/modify the current penstyle and list of penstyles 
*/
declare module PenstyleManager {
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
  * Gets the current penstyle minimum size.
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
* The preferences JavaScript global object. Set or retrieve user preferences saved in the user local data 
*/
declare module preferences {
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
* The render JavaScript global object. Render the scene or a part of the scene 
*/
declare module render {
  /**
  * Set if rendered frames sets should be combined and in which order. Specify these options if you are rendering in PAL or NTSC format.
  */
  function setCombine(autoCombine: boolean, secondFieldFirst: boolean): void;

  /**
  * Sets the frame output format.
  */
  function setFieldType(type: int): void;

  /**
  * Set the background color to use when rendering in scene machine mode.
  */
  function setBgColor(bgColor: ColorRGBA): void;

  /**
  * Set the scene resolution to use for rendering.
  */
  function setResolution(x: int, y: int): void;

  /**
  * Set the scene resolution to use for rendering.
  */
  function setResolutionName(name: string): void;

  /**
  * Set which display module to use for rendering. "Display All" uses the global unconnected display module.
  */
  function setRenderDisplay(name: string): void;

  /**
  * Enable or disable write modules during the render.
  */
  function setWriteEnabled(enabled: boolean): void;

  /**
  * Enable or disable thumbnail cropping for the render. Mainly used when rendering thumbnails.
  */
  function setAutoThumbnailCropping(enabled: boolean): void;

  /**
  * Enable rendering on a white background. The default is false, which renders on a black background.
  */
  function setWhiteBackground(enabled: boolean): void;

  /**
  * Render a part of the scene.
  */
  function renderScene(fromFrame: int, toFrame: int): void;

  /**
  * Render the complete scene.
  */
  function renderSceneAll(): void;

  /**
  * Interrupt an active render.
  */
  function cancelRender(): void;

  /**
  * disconnect all scripts from signals emited by this object.
  */
  function disconnect(): void;

  /**
  * Event that notifies the script that a certain frame is available and at which location.
  */
  function frameReady(frame: int, frameCel: QObject): void;

  /**
  * Event that notifies the script when the render has completed.
  */
  function renderFinished(): void;

  function render(parent: QObject, name: char): void;

  function attach(impl: TUScriptInterfaceImpl): void;

}


/**
* The scene JavaScript global object. Retrieve and set global scene attributes, like the aspect ratio of the cells in the scene grid 
*/
declare module scene {
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
  function getCameraMatrix(frame: int): QObject;

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
* The selection JavaScript global object. Retrieve information about the nodes or columns that are selected 
*/
declare module selection {
  /**
  * returns the number of modules that are selected.
  */
  function numberOfNodesSelected(): int;

  /**
  * returns the path of the selected node
  */
  function selectedNode(i: int): string;

  /**
  * returns a value for the number of columns selected in the xsheet.
  */
  function numberOfColumnsSelected(): int;

  /**
  * returns the ith column selected in the xsheet.
  */
  function selectedColumn(i: int): string;

  /**
  * Clear the selection.
  */
  function clearSelection(): boolean;

  /**
  * Add a node to the selection.
  */
  function addNodeToSelection(node: string): boolean;

  /**
  * Remove a node from the selection.
  */
  function removeNodeFromSelection(node: string): boolean;

  /**
  * Add a column to the selection.
  */
  function addColumnToSelection(column: string): boolean;

  /**
  * Adds the drawing column and it's associated read node to the selection.
  */
  function addDrawingColumnToSelection(columnName: string): boolean;

  /**
  * Adds the column to the selection. If the column is a drawing column, also adds the associated read node to the selection.
  */
  function extendSelectionWithColumn(columnName: string): boolean;

  /**
  * Sets the selection frame range.
  */
  function setSelectionFrameRange(start: int, length: int): void;

  /**
  * Return true if the selection has a range.
  */
  function isSelectionRange(): boolean;

  /**
  * Return the selected start frame.
  */
  function startFrame(): int;

  /**
  * Return the number of selected frame.
  */
  function numberOfFrames(): int;

  /**
  * selects all nodes and all columns in the scene
  */
  function selectAll(): void;

  /**
  * return an Array of all selected nodes.
  */
  function selectedNodes(): NodePath[];

  /**
  * sub selection - obtains the ID of all the sub selection for the provided node.
  */
  function subSelectionForNode(node: string): QScriptValue;

  /**
  * sub selection - select a set of ID from the sub selection
  */
  function addSubSelectionForNode(node: string, subSelection: QScriptValue): boolean;

  /**
  * clear all subselection on a given node.
  */
  function clearSubSelectionForNode(vnode: string): boolean;

  function selection(parent: QObject, name: char): void;

}


/**
* The sound JavaScript global object. Access the scene soundtrack in part or in whole. The scripting environment can receive notifications when scene frame is ready. See the TB_ExportFLV.js script for an example 
*/
declare module sound {
  /**
  * Sets the number of frames per second. By default the scene frame rate is used.
  */
  function setFrameRate(rate: int): void;

  /**
  * Sets the audio sample rate in Hz (i.e. 22050, 44100, ...).
  */
  function setSampleRate(rate: double): void;

  /**
  * Sets the audio channel size (i.e. 8 or 16 bit).
  */
  function setChannelSize(size: int): void;

  /**
  * Sets the number of audio channels (i.e 1 for mono and 2 for stereo).
  */
  function setChannelCount(count: int): void;

  /**
  * Return a part of the scene's soundtrack in a temporary file in the WAV format.
  */
  function getSoundtrack(fromFrame: int, toFrame: int): QObject;

  /**
  * Return the scene's soundtrack in a temporary file in the WAV format.
  */
  function getSoundtrackAll(): QObject;

  /**
  * Check if the export file path os in unicode.
  */
  function isUnicode(exportFilePath: string): boolean;

  /**
  * Copy the content of the source file to the destination file and say if the copy is done completely.
  */
  function copy(srcFileName: string, dstFileName: string): boolean;

  /**
  * Event that notifies the script when the sound file is available.
  */
  function soundReady(): QSignal<() => void>;

  function sound(parent: QObject, name: char): void;

  function attach(impl: TUScriptInterfaceImpl): void;

}


/**
* The System JavaScript global object. Call system specific command directly 
*/
declare module System {
  function println(arg: string): void;

  function getenv(str: string): string;

  function processOneEvent(): void;

  var globalObject: any;

}


/**
* The Timeline JavaScript global object. Get informations about layers and frames from the Timeline view 
*/
declare module Timeline {
  /**
  * return true if the selIdx points to a column
  */
  function selIsColumn(selIdx: int): boolean;

  /**
  * Convert the selected index to a column.
  */
  function selToColumn(selIdx: int): string;

  /**
  * Convert the selected index to a node.
  */
  function selToNode(selIdx: int): string;

  /**
  * return true if the selected index is a node
  */
  function selIsNode(selIdx: int): boolean;

  /**
  * return true if the layer index is a column
  */
  function layerIsColumn(layerIdx: int): boolean;

  /**
  * return the layer as a column, or the empty string if this layer is not a column.
  */
  function layerToColumn(layerIdx: int): string;

  /**
  * return true if the layer is a node.
  */
  function layerIsNode(layerIdx: int): boolean;

  /**
  * return node associated to the layer, or the empty string if this layer is not a node..
  */
  function layerToNode(layerIdx: int): string;

  /**
  * convert a selection index to a layer index
  */
  function selToLayer(selIdx: int): int;

  /**
  * return the layer index of the parent node
  */
  function parentNodeIndex(layerIdx: int): int;

  /**
  * return true if the parent layer index is an ancestor of the layer index
  */
  function isAncestorOf(parentLayerIdx: int, layerIdx: int): boolean;

  /**
  * return true if display was set to unconnected
  */
  function setDisplayToUnconnected(): boolean;

  /**
  * return the number of layer selected.
  */
  function numLayerSel(): int;

  /**
  * return the first frame selected.
  */
  function firstFrameSel(): int;

  /**
  * return the number of the selected frame, if only one frame is selected. It will return zero (0) if no frames are selected.
  */
  function numFrameSel(): int;

  /**
  * return the number of layers in the timeline.
  */
  var numLayers: int;

}


/**
* The ToolProperties JavaScript global object. Controls the Tool Properties 
*/
declare module ToolProperties {
  /**
  * set the Apply to Line Art and Colour Art checkbox state to b; in the Select Tool Options.
  */
  function setApplyAllArts(b: boolean): void;

  /**
  * toggle the Draw Behind mode of the Brush tool
  */
  function setDrawBehindMode(b: boolean): void;

  /**
  * set the auto create colour art mode of the current tool to b if applicable.
  */
  function setAutoCreateColourArt(b: boolean): void;

  /**
  * set the auto flatten mode if applicable.
  */
  function setAutoFlattenMode(b: boolean): void;

  /**
  * set the Respect Protected Colour mode if applicable.
  */
  function setRespectProtectedColourMode(b: boolean): void;

  /**
  * set the magnifier mode
  */
  function setDrawingMagnifierMode(b: boolean): void;

  /**
  * set the select tool mode selection to Lasso or Marquee. If b is true, the mode will be set to Marquee.
  */
  function setMarkeeMode(b: boolean): void;

  /**
  * set the snapping mode for the contour, align and grid mode all to the modes specified in argument.
  */
  function setSnapping(contour: boolean, align: boolean, grid: boolean): void;

  /**
  * will turn the permanent selection mode on/off depending on the parameter
  */
  function setPermanentSelectionMode(b: boolean): void;

  /**
  * set the select by colour mode of the Select tool .
  */
  function setSelectByColourMode(b: boolean): void;

  /**
  * toggle whether contour editor shows all tool controls or not.
  */
  function setShowHideAllContourEditingControls(b: boolean): void;

  /**
  * set the selection mode of the transform tool to peg mode if b is true
  */
  function setPegSelectionMode(b: boolean): void;

  /**
  * set the align and grid snapping modes of the transform tool.
  */
  function setTransformToolSnapping(align: boolean, grid: boolean): void;

  /**
  * will hide the transform tool manipulator if b is true
  */
  function setShowHideManipulatorControls(b: boolean): void;

  /**
  * instruct the paint tool to remove the opacity texture if b is true.
  */
  function setPaintAndRemoveTextureMode(b: boolean): void;

  /**
  * instruct the paint tool to use the gradient/texture matrix stored in the tool if b is true.
  */
  function setUsedStoredColourGradientMode(b: boolean): void;

  /**
  * If b is true, the paint tool will select the newly painted zone after painting. This can be useful if you want to edit a gradient on multiple zones after painting.
  */
  function setPaintToolShouldSelectPaintedZonesAfterPainting(b: boolean): void;

  /**
  * set the apply all drawing mode to b
  */
  function setApplyAllDrawings(b: boolean): void;

  /**
  * set the apply all visible drawing mode to b
  */
  function setApplyAllVisibleDrawings(b: boolean): void;

  /**
  * set the auto gap closing mode to m. Mode can be 0, 1, 2 or 3, Which corresponds to No Gap, Small, Medium and Large.
  */
  function setAutogapClosingMode(m: int): void;

  /**
  * set the auto fill mode of Rectangle and Ellipse tool to b
  */
  function setAutoFillInside(b: boolean): void;

  /**
  * set the cutter's gesture mode to b
  */
  function setGestureCutter(b: boolean): void;

  /**
  * set the cutter's gesture break mode to b
  */
  function setMouseGestureBreakeMode(b: boolean): void;

  /**
  * show the inkable lines if b is true
  */
  function setShowInkableLines(b: boolean): void;

  /**
  * set the smart ink line connection mode to b
  */
  function setSmartInkLineConnectionMode(b: boolean): void;

  /**
  * instruct the ink tool to select inked lines after inking if b is true
  */
  function setInkLineSelectionMode(b: boolean): void;

  /**
  * instruct the ink tool to bring inked lines on top after inking if b is true
  */
  function setBringInkedLinesOnTop(b: boolean): void;

  /**
  * set the join mode of the inked lines to be joinType. Join type can be one of: "ROUND_JOIN", "MITER_JOIN" or "BEVEL_JOIN"
  */
  function setInkJoinMode(unknown_0: string): void;

  /**
  * set the pencil tip shape used by the eraser, cutter, and ink tools whenever an existing pencil line gets split by the tool.
  */
  function setPencilTipMode(pencilTip: string): void;

  /**
  * set the line building mode of the Pencil tool to b.
  */
  function setLineBuildingMode(b: boolean): void;

  /**
  * set the line pushing mode of the Pencil tool to b.
  */
  function setLinePushingMode(b: boolean): void;

  /**
  * toggle the auto gap closing functionality for the line and pencil tools. When the auto gap functionality is on, the line or pencil tool tries to add a stroke line to cover the gap between the newly created line and any existing line.
  */
  function setLineAutoGapClosing(b: boolean): void;

}





/**
* The view JavaScript global object. Provides information about the contents of selected View windows 
*/
declare module view {
  /**
  * returns a unique identifier for the current, active View.
  */
  function currentView(): string;

  /**
  * returns a string that indicates what type of View the currentView is.
  */
  function type(viewName: string): string;

  /**
  * returns the name of the current Group Module in the active Network View.
  */
  function group(viewName: string): string;

  /**
  * returns the name of the column for the currently displayed function in the Function View.
  */
  function column(viewName: string): string;

  /**
  * forces a refresh of the drawing and scene planning views.
  */
  function refreshViews(): void;

  /**
  * returns the drawing tool manager.
  */
  function currentToolManager(): QObject;

}



/**
* Base class of the script widget classes 
*/
declare class WidgetBase extends MO_SignalEmitter {
  public data(index?: int): Attribute;

  /**
  * signal called on mouse down when picking this widget with the Transform tool
  */
  public dragStarted(dragContext: QScriptValue): void;

  /**
  * signal called when this widget is dragged with the Transform tool
  */
  public drag(dragContext: QScriptValue): void;

  /**
  * signal called on mouse up after having manipulated this widget with the Transform tool
  */
  public dragEnded(): void;

}


/**
* The CustomWidget JavaScript class. A widget for which the attribute, drag_manipulator, painter, picker and local_transformation components are specified at the widget creation 
*/
declare class CustomWidget extends MO_SignalEmitter {
  /**
  * valueChanged signal called when value of the attribute of the widget has changed
  */
  public valueChanged(newValue: string): void;

}


/**
* The Line2dDisplayWidget JavaScript class. A 2 dimensional line linking 2 points 
*/
declare class Line2dDisplayWidget extends MO_SignalEmitter {
}


/**
* The Point2dWidget JavaScript class. A 2 dimensional point widget of various shape 
*/
declare class Point2dWidget extends MO_SignalEmitter {
  /**
  * Signal notifying the user that the 2d point value was modified by the Transform Tool.
  */
  public valueChanged(point2d: QScriptValue): void;

}


/**
* The Rotation3dWidget JavaScript class. A rotatable spherical widget 
*/
declare class Rotation3dWidget extends MO_SignalEmitter {
  /**
  * valueChanged signal called when the Rotation 3D attribute value has changed
  */
  public valueChanged(rotation: QScriptValue): void;

}


/**
* The RotationXWidget JavaScript class. A rotatable circle widget around the x axis 
*/
declare class RotationXWidget extends MO_SignalEmitter {
  public valueChanged(x: float): void;

}


/**
* The RotationYWidget JavaScript class. A rotatable circle widget around the y axis 
*/
declare class RotationYWidget extends MO_SignalEmitter {
  public valueChanged(y: float): void;

}


/**
* The RotationZWidget JavaScript class. A rotatable circle widget around the z axis 
*/
declare class RotationZWidget extends MO_SignalEmitter {
  public valueChanged(z: float): void;

}


/**
* The SliderWidget JavaScript class. A vertical or horizontal slider 
*/
declare class SliderWidget extends MO_SignalEmitter {
  /**
  * Signal notifying the user that the slider value was modified by the Transform Tool.
  */
  public valueChanged(newSliderValue: float): void;

}


/**
* The TranslationXWidget JavaScript class. A translatable arrow in the x axis 
*/
declare class TranslationXWidget extends MO_SignalEmitter {
  /**
  * valueChanged signal called when the x translation value has been modified by the Transform tool.
  */
  public valueChanged(x: float): void;

}


/**
* The TranslationYWidget JavaScript class. A translatable arrow in the y axis 
*/
declare class TranslationYWidget extends MO_SignalEmitter {
  /**
  * valueChanged signal called when the y translation value has been modified by the Transform tool.
  */
  public valueChanged(y: float): void;

}


/**
* The TranslationZWidget JavaScript class. A translatable arrow in the z axis 
*/
declare class TranslationZWidget extends MO_SignalEmitter {
  /**
  * valueChanged signal called when the z translation value has been modified by the Transform tool.
  */
  public valueChanged(z: float): void;

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
* Base class for color and texture pots stored in palettes 
*/
declare class BaseColor extends QObject {
  public setName(n: string): void;

  /**
  * If true, the color pot is a texture.
  */
  isTexture: boolean;

  /**
  * The color pot name.
  */
  name: string;

  /**
  * Unique ID of the color.
  */
  id: string;

  /**
  * Returns true if the color is valid.
  */
  isValid: boolean;

}


/**
* The JavaScript class for manipulating colours. Can be created from a Palette object 
*/
declare class Color extends QObject {
  public setColorType(colorType: string): void;

  public setColorType(t: int): void;

  /**
  * Set the rgba or gradient values of the colour.
  */
  public setColorData(v: QVariant): void;

  /**
  * The type of colour can be: ColorType.SOLID_COLOR, ColorType.LINEAR_GRADIENT or ColorType.RADIAL_GRADIENT.
  */
  colorType: int;

  /**
  * The colour as either an object if the colour is solid or an array of objects if it is a gradient.
  */
  colorData: QVariant;

}


/**
* The JavaScript class for manipulating textures. Can be created from a Palette object 
*/
declare class Texture extends QObject {
  /**
  * Set the tiling attribute.
  */
  public setTiled(unknown_0: boolean): void;

  /**
  * Will load the file in a bitmap and make an internal copy.
  */
  public setTextureFile(filename: string): void;

  /**
  * Will make a copy of the image and store it in the texture.
  */
  public setTextureBitmap(image: QImage): void;

  /**
  * True if the texture is tiled.
  */
  tiled: boolean;

  /**
  * Width of the texture. -1 if invalid texture.
  */
  width: int;

  /**
  * Height of the texture. -1 if invalid texture.
  */
  height: int;

  /**
  * Will return a copy of the texture bitmap.
  */
  bitmap: QImage;

}


/**
* The JavaScript class for manipulating color override nodes. Can be created from the node global object 
*/
declare class ColorOverride extends QObject {
  /**
  * Returns the number of whole palette overrides.
  */
  public getNumPalettes(): int;

  /**
  * Returns the full path (including name and extension) of the palette override at postion 'index'.
  */
  public palettePath(index: int): string;

  /**
  * Set the path (including name and extension) of the palette at position 'index'.
  */
  public setPalettePath(index: int, path: string): void;

  /**
  * Clear the list of whole palette overrides.
  */
  public clearPalettes(): void;

  /**
  * Add a full palette path at the bottom of the list of whole palette overrides.
  */
  public addPalette(path: string): void;

  /**
  * Remove a palette with the supplied path from the list of whole palette overrides.
  */
  public removePalette(path: string): void;

  /**
  * Returns the number of individual colour overrides.
  */
  public getNumColorOverrides(): int;

  /**
  * Returns the path of a texture file for the colour override at the specified position in the list.
  */
  public getOverrideTexturePath(index: int): string;

  /**
  * Sets the path of a texture file for the colour override at the specified position in the list.
  */
  public setOverrideTexturePath(index: int, path: string): void;

  /**
  * Returns the full path (including name and extension) of the palette to which the override colour belongs.
  */
  public getOverridePalettePath(index: int): string;

  /**
  * Sets the full path (including name and extension) of the palette to which the override colour belongs.
  */
  public setOverridePalettePath(index: int, path: string): void;

  /**
  * Returns the number of selected colours.
  */
  public getNumSelectedColors(): int;

  /**
  * Returns the full path (including name and extension) of the palette to which the selected colour belongs.
  */
  public getSelectedPalettePath(index: int): string;

  /**
  * Sets the full path (including name and extension) of the palette to which the selected colour belongs.
  */
  public setSelectedPalettePath(index: int, path: string): void;

}


/**
* The ColorRGBA JavaScript class. Represent an 8 bits per channel Red Green Blue Alpha colour 
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
* The JavaScript class for defining the different color types. Obtain it from Constants 
*/
declare class ColorType extends QObject {
  /**
  * Represents a solid color.
  */
  SOLID_COLOR: int;

  /**
  * Represents a linear gradient color.
  */
  LINEAR_GRADIENT: int;

  /**
  * Represents a radial gradient color.
  */
  RADIAL_GRADIENT: int;

}


/**
* The JavaScript class for getting the composition information of a node. Obtain one from the compositionOrder global object 
*/
declare class CompositionItem extends QObject {
  /**
  * name of this node ( see node interface )
  */
  node: string;

  /**
  * true when this node is a root (it has no parent).
  */
  isNodeRoot: boolean;

  /**
  * true when this node is a normal node and has a parent.
  */
  isNodeNormal: boolean;

  /**
  * true when this node has a parent but the parent is not present in the composition. Some modules, such as composite module, are never listed in the composition, however, they can be the parent of some other modules that will be listed in the composition.
  */
  isNodeBroken: boolean;

  /**
  * parent less node that is within a child group.
  */
  isNodeSubnodeRoot: boolean;

}


/**
* The JavaScript class for getting the constant colour and palette data. Obtain it from PaletteObjectManager 
*/
declare class Constants extends QObject {
  /**
  * Holds the constants to represent a palette location.
  */
  Location: PaletteLocation;

  /**
  * Holds the constants to define the color types.
  */
  ColorType: ColorType;

  PaletteListType: PaletteListType;

}


/**
* The Controller JavaScript object. This object is available in Master Controller callback functions 
*/
declare class Controller extends QObject {
  /**
  * The object type "__master_controller_object__".
  */
  public static name: string;

  /**
  * The node path to the Master Controller node ex: "Top/MyMasterController".
  */
  public static node: string;

  /**
  * The script widget array.
  */
  public static controls: QScriptValue;

  public static data: QScriptValue;

  /**
  * Called when the user shows the Master Controller node controls.
  */
  public static onShowControl: QScriptValue;

  /**
  * Called when the user hides the Master Controller node controls.
  */
  public static onHideControl: QScriptValue;

  /**
  * Called when the current frame of the application changes.
  */
  public static onFrameChanged: QScriptValue;

}


/**
* The JavaScript class for getting or setting the model directory, the scan files and the default camera name flags when copying. Obtain from the copyPaste global object 
*/
declare class CopyOptions extends QObject {
  addModelsDir: boolean;

  addScanFiles: boolean;

  defaultCameraName: boolean;

}

/**
* The JavaScript class for converting position from one coordinate system to another. Obtain it as a parameter to the WidgetBase drag signals 
*/
declare class DragContext extends QObject {
  /**
  * Return the picking point in world coordinates.
  */
  public dragPoint(): QObject;

  /**
  * Project a given point in world coordinates to the screen and then back to the model plane.
  */
  public projectToModelPlane(worldPoint3d: QObject): QObject;

  /**
  * Transform a given point in world coordinates to the model space.
  */
  public transformFromWorldToModel(worldPoint3d: QObject): QObject;

  /**
  * Transform the camera chain model matrix.
  */
  public transformModelMatrix(transformationMatrix: Matrix4x4): QObject;

  /**
  * Multiply by the matrix of transformations associated with the script widgets registered after the current one.
  */
  public multiplyByPostMatrix(modelPoint3d: QObject): QObject;

}


/**
* The JavaScript class representing a dragged object. Obtain from the copyPaste global object copy method 
*/
declare class DragObject extends QObject {
  constructor();

  constructor(dragObject: DD_DragObject);

  public dragObject(): DD_DragObject;

}


/**
* The DrawingToolParams JavaScript class. Set or unset the "apply on all drawings" setting of the DrawingTools methods 
*/
declare class DrawingToolParams extends QObject {
  public applyAllDrawings(): boolean;

  public setApplyAllDrawings(b: boolean): void;

}







/**
* The IO JavaScript global object. Enumerates the different types of stream behaviour the ImageFile can take 
*/
declare class FileIOType extends QObject {
}


/**
* The PermanentFile and TemporaryFile JavaScript classes. Used to represent an actual image file on disk 
*/
declare class FileWrapper extends QObject {
  /**
  * Specify absolute path of this image file. Name of file can not be changed if there is an open stream.
  */
  public setPath(path: string): FileWrapper;

  /**
  * Retrieve file path.
  */
  public path(): string;

  /**
  * Change extension for file name. Extension won't change if there is an open stream.
  */
  public setExtension(ext: string): FileWrapper;

  /**
  * Retrieve file extension.
  */
  public extension(): string;

  /**
  * Verify if file exists on disk.
  */
  public exists(): boolean;

  public remove(): boolean;

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
  public writeFile(file: FileWrapper): void;

  /**
  * Read entire content of stream.
  */
  public read(): string;

  /**
  * Read single line of stream.
  */
  public readLine(): string;

  public move(dest: FileWrapper): boolean;

  public copy(dest: FileWrapper): boolean;

  /**
  * Create a new FileWrapper.
  */
  constructor();

  /**
  * Create a new FileWrapper.
  */
  constructor(path: string);

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
* The JavaScript class providing informations about a specific palette 
*/
declare class Palette extends QObject {
  /**
  * Returns the folder in which this palette is located.
  */
  public getPath(): string;

  /**
  * Returns the name of this palette. The extension (".plt") is not included.
  */
  public getName(): string;

  /**
  * Returns whether the palette object is valid.
  */
  public isValid(): boolean;

  /**
  * Was the palette successfully loaded from disk (true or false)?
  */
  public isLoaded(): boolean;

  /**
  * Was the palette found at the location specified by the path and name (true or false)?
  */
  public isNotFound(): boolean;

  /**
  * Iterate over the colours. Return an invalid colour if the index is out of bound or otherwise invalid.
  */
  public getColorByIndex(index: int): BaseColor;

  /**
  * Retrieve a colour by id. If the colour is not found, the isValid property will be false.
  */
  public getColorById(uniqueId: string): BaseColor;

  /**
  * Try to obtain the database lock. Return true on success, and false on failure. The lock will be held until it is released in script or the ui. Safe to call multiple time to get the lock state.
  */
  public getLock(): boolean;

  /**
  * Release access to the palette. Other users will be able to obtain the access rights to the palette.
  */
  public releaseLock(): boolean;

  /**
  * The following methods test the type of the wrapped palette.
  */
  public isColorPalette(): boolean;

  /**
  * Returns whether the palette is a texture palette.
  */
  public isTexturePalette(): boolean;

  /**
  * sets the type of the palette to be a color palette
  */
  public setToColorPalette(): void;

  /**
  * sets the type of the palette to be a texture palette
  */
  public setToTexturePalette(): void;

  /**
  * Create a new colour of a given type.
  */
  public createNewColor(colorType: int, name: string, colorData: QVariant): Color;

  /**
  * Create a new solid colour.
  */
  public createNewSolidColor(name: string, colorData: QVariant): Color;

  /**
  * Create a new linear gradient colour.
  */
  public createNewLinearGradientColor(name: string, colorData: QVariant): Color;

  /**
  * Create a new radial gradient colour.
  */
  public createNewRadialGradientColor(name: string, colorData: QVariant): Color;

  /**
  * Create a new texture colour object.
  */
  public createNewTexture(name: string, filename: string, tiled: boolean): Texture;

  /**
  * Create a new texture from a QImage object (may not be done from the script).
  */
  public createNewTexture(name: string, bitmap: QImage, tiled: boolean): Texture;

  /**
  * Create a duplicate of a colour object - this colourID is unique.
  */
  public duplicateColor(source: BaseColor): BaseColor;

  /**
  * Create a clone of a colour object - this colourID is identical to original colour.
  */
  public cloneColor(source: BaseColor): BaseColor;

  /**
  * Create a clone of a colour object - resolve the potential ID conflict by either cloning or duplicating the colour.
  */
  public cloneColor(source: BaseColor, replaceOnIDConflict: boolean): BaseColor;

  /**
  * Delete a colour from the palette.
  */
  public removeColor(uniqueId: string): boolean;

  /**
  * Move a colour at the specified index.
  */
  public moveColor(index: int, beforeIndex: int): boolean;

  /**
  * Move a colour to this palette.
  */
  public acquire(color: BaseColor): boolean;

  /**
  * Number of colours in this palette.
  */
  nColors: int;

  /**
  * The palette ID of this palette.
  */
  id: string;

  /**
  * Returns one of the PaletteLocation constants or -1 if the palette is invalid.
  */
  location: int;

  /**
  * Returns the element id in which the palette is stored if location is PaletteLocation ELEMENT. Returns -1 if the palette is not stored in an element.
  */
  elementId: int;

}


/**
* The JavaScript class providing informations about a palette list. Obtain from PaletteObjectManager methods like getPaletteListByElementId, getScenePaletteList or getPaletteListById 
*/
declare class PaletteList extends QObject {
  /**
  * Returns the folder in which this palette list is located.
  */
  public getPath(): string;

  /**
  * Returns whether the javascript wrapper refers to a valid object.
  */
  public isValid(): boolean;

  /**
  * Returns a Palette object for the palette at position 'index'.
  */
  public getPaletteByIndex(index: int): Palette;

  /**
  * Returns a Palette object for the palette with ID 'id'.
  */
  public getPaletteById(id: string): Palette;

  /**
  * Returns a Palette object for the palette with ID 'id'.
  */
  public getPaletteById(id: string, lookInLinkedPalettes: boolean): Palette;

  /**
  * Try getting the database lock, returning true on success or false on failure. Without the lock, methods that change the state of the palette list can fail.
  */
  public getLock(): boolean;

  /**
  * Release the lock.
  */
  public releaseLock(): boolean;

  public createPalette(path: string): Palette;

  public createPalette(path: string, index: int): Palette;

  public createPaletteAtLocation(location: int, elementId: int, diskName: string): Palette;

  public createPaletteAtLocation(location: int, elementId: int, diskName: string, index: int): Palette;

  /**
  * Adds a palette to the end of this palette list, returning a Palette object.
  */
  public addPalette(path: string): Palette;

  /**
  * Adds a palette to this palette list at the position specified by 'index', returning a Palette object.
  */
  public insertPalette(path: string, index: int): Palette;

  /**
  * Adds a palette to the end of this palette list, returning a Palette object.
  */
  public addPaletteAtLocation(location: int, elementId: int, name: string): Palette;

  /**
  * Adds a palette to this palette list at the position specified by 'index', returning a Palette object.
  */
  public insertPaletteAtLocation(location: int, elementId: int, name: string, index: int): Palette;

  /**
  * Remove the palette at the position specified by 'index'.
  */
  public removePaletteByIndex(index: int): boolean;

  /**
  * Remove the palette with the specified palette ID.
  */
  public removePaletteById(id: string): boolean;

  /**
  * Remove the palette by path.
  */
  public removePalette(path: string): boolean;

  /**
  * Search the given color ID and return the first match, also looking in the scene palette list if applicable.
  */
  public findPaletteOfColor(colorId: string): Palette;

  /**
  * Move the specified palette up one place in this palette list.
  */
  public movePaletteUp(id: string): boolean;

  /**
  * Move the specified palette down one place in this palette list.
  */
  public movePaletteDown(id: string): boolean;

  /**
  * Was the palette list successfully loaded from disk (true or false)?
  */
  public isLoaded(): boolean;

  /**
  * Number of palettes in this palette list.
  */
  numPalettes: int;

  /**
  * The palette list ID of this palette list.
  */
  id: string;

  /**
  * The type of palette list. One of the PaletteListType constants.
  */
  type: int;

  /**
  * Will return the elementId of this palette list if the type is PaletteListType.Element will return -1 if the type is PaletteListType.Scene.
  */
  elementId: int;

}


/**
* The JavaScript class for getting the palette list type. Obtain it from Constants 
*/
declare class PaletteListType extends QObject {
  /**
  * The PaletteList is a Scene palette list if its.
  */
  Scene: int;

  /**
  * Represent the Job location of the project. A palette created with this location would be stored in the job folder.
  */
  Element: int;

  /**
  * Represent the Scene location of the project. A palette created with this location would be stored in the scene folder.
  */
  Hidden: int;

  /**
  * The palette list type is unspecified. Maybe the palette list is invalid.
  */
  Unspecified: int;

}


/**
* The JavaScript class for defining the standard palette locations. Obtain it from Constants 
*/
declare class PaletteLocation extends QObject {
  /**
  * Represent the Environment location of the project. A palette created with this location would be stored in the environment folder.
  */
  ENVIRONMENT: int;

  /**
  * Represent the Job location of the project. A palette created with this location would be stored in the job folder.
  */
  JOB: int;

  /**
  * Represent the Scene location of the project. A palette created with this location would be stored in the scene folder.
  */
  SCENE: int;

  /**
  * Represent a location in an element of the project.
  */
  ELEMENT: int;

  /**
  * Represents a location outside the project.
  */
  EXTERNAL: int;

}


/**
* This class is used to retrieve Constants used in the palette and colors 
*/
declare class PaletteLocator extends QObject {
  /**
  * Will return the full palette-library path for a given location.
  */
  public folderForLocation(location: int, elementId: int): string;

  /**
  * Will return the filename of the palette including the .plt extension for a given palette and location.
  */
  public palettePathForLocation(location: int, elementId: int, paletteName: string): string;

  /**
  * Will return the texture folder of the palette for a given palette and location.
  */
  public textureFolderForLocation(location: int, elementId: int, paletteName: string): string;

  public palettesAtLocation(location: int, elementId: int, fullFileName: boolean): StringList;

  public importPaletteAtLocation(palettePath: string, location: int, elementId: int, paletteName: string): boolean;

}


/**
* The JavaScript class for getting or setting the model directory, the scan files and the default camera name flags when pasting. Obtain from the copyPaste global object 
*/
declare class PasteOptions extends QObject {
  extendScene: boolean;

  defaultCameraName: boolean;

  createNewColumn: boolean;

  elementMode: string;

  addRemoveMotionKeyFrame: boolean;

  addRemoveVelocityKeyFrame: boolean;

  addRemoveAngleKeyFrame: boolean;

  addRemoveSkewKeyFrame: boolean;

  addRemoveScalingKeyFrame: boolean;

  forceKeyframeAtBeginningAndEnd: boolean;

  offsetKeyFrame: boolean;

  replaceExpressionColumns: boolean;

  drawingPasteAction: string;

  drawingFileMode: string;

  autoExtendExposure: boolean;

  drawingSubstitution: boolean;

  colourPalette: string;

  copyScanFiles: boolean;

  copyModelsDir: boolean;

  preserveColumnName: boolean;

  fullTransfer: boolean;

  startFrameSource: int;

  numberOfFramesSource: int;

  matchNodeName: int;

  /**
  * set the write mode. Value strings: INSERT,OVERWRITE, DO_NOTHING. Default: OVERWRITE )
  */
  writeMode: string;

  /**
  * set the delete mode. Value strings : REMOVE, EMPTY, DELETE_NOTHING. Default: DELETE_NOTHING )
  */
  deleteMode: string;

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
  public minus(p2: Point3d): Vector3d;

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
* The Process JavaScript class. Launch an external process 
*/
declare class Process extends QObject {

  /**
  * Launch process.
  */
  public launch(): int;

  /**
  * Launch process.
  */
  public static execute(cmd: Array<string>, unknown?: string): int;

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

  public start(env?: StringList): void;

  public launch(buf: string, env?: StringList): void;

  public readStdout(): string;

  public readStderr(): string;

  public canReadLineStdout(): boolean;

  public canReadLineStderr(): boolean;

  public readLineStdout(): string;

  public readLineStderr(): string;

  public tryTerminate(): void;

  public kill(): void;

  public writeToStdin(buffer: string): void;

  public closeStdin(): void;

  public readyReadStdout(): void;

  public readyReadStderr(): void;

  public processExited(): void;

  public wroteToStdin(): void;

  public launchFinished(): void;

  /**
  * Create a new Process. A process created with a pid cannot be launched as it already should have been. terminate() and isAlive() functions can still be called with such a process.
  */
  constructor(pid: int);

  /**
  * Create a new Process.
  */
  constructor(name: string, unknown_1: any);

  /**
  * Create a new Process.
  */
  constructor(name: string, list: StringList);

  /**
  * Create a new Process.
  */
  constructor(commandLine: string);

  constructor(args?: StringList);

  public arguments(): StringList;

  public setArguments(arguments: StringList): void;

  public workingDirectory(): string;

  public setWorkingDirectory(workingDirectory: string): void;

  public running(): boolean;

  public exitStatus(): int;

  objectName: string;

}


/**
* The RemoteCmd JavaScript class. Send one sided commands to a remote host 
*/
declare class RemoteCmd extends QObject {
  public connect(machine: string, port: int): boolean;

  public connectTimeout(machine: string, port: int, timeout: int): boolean;

  public send(cmd: string): boolean;

  public receive(timeout: int): boolean;

  public sendMsg(msg: string): boolean;

  public receiveMsg(timeout: int): boolean;

  public disconnect(): void;

  public connected(): boolean;

  public lastReceived(): string;

  constructor();

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
  public rotate90(): Vector2d;

  /**
  * Rotate Vector2d counter-clockwise of 270 degrees.
  */
  public rotate270(): Vector2d;

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
* The deformation JavaScript global object. Provide deformation node parent matrix transformations 
*/
declare class deformation extends SCR_AbstractInterface {
  public lastDeformMatrix(node: string, frame: int): Matrix4x4;

  public nextDeformMatrix(node: string, frame: int): Matrix4x4;

  public lastRestMatrix(node: string): Matrix4x4;

  public nextRestMatrix(node: string): Matrix4x4;

}


/**
* The WebCCExporter JavaScript global object. Generate movies encoded in H.264 
*/
declare class ExportOH264 extends SCR_AbstractInterface {
  public exportMovieFromWriteModules(fromFrame?: int, toFrame?: int): void;

  public exportMovieFromWriteModule(moduleName: string, firstFrame?: int, lastFrame?: int, withSound?: boolean, movieFile?: string): void;

  public exportMovieFromFiles(movieFilename: string, framesFilenames: StringList, firstFrame?: int, lastFrame?: int, withSound?: boolean): void;

}


/**
* The CheckBox JavaScript class. A simplified CheckBox Qt widget 
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
* The Dialog JavaScript class. A simplified Qt dialog 
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
  * it is the (legacy, but we still support it ) title of the dialog
  */
  caption: string;

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
* The ExportVideoDlg JavaScript class. A dialog that can be used before an export to query the user about various settings 
*/
declare class ExportVideoDlg extends UI_DialogController {
  /**
  * Get the first scene frame index to export.
  */
  public getFromRange(): int;

  /**
  * Get the last scene frame index to export.
  */
  public getToRange(): int;

  /**
  * Get the x resolution of the scene.
  */
  public getResX(): int;

  /**
  * Get the y resolution of the scene.
  */
  public getResY(): int;

  /**
  * Get the name to display.
  */
  public getDisplayName(): string;

  /**
  * Get the output file.
  */
  public getOutputFile(): string;

  /**
  * Get the video configuration.
  */
  public getVideoConfig(): string;

  /**
  * Set the video configuration.
  */
  public setVideoConfig(config: string): void;

  /**
  * Get the audio configuration.
  */
  public getAudioConfig(): string;

  /**
  * Set the audio configuration.
  */
  public setAudioConfig(config: string): void;

  /**
  * Get the both video and audio configuration.
  */
  public getVideoAndAudioConfig(): string;

  /**
  * Set the both video and audio configuration.
  */
  public setVideoAndAudioConfig(config: string): void;

  /**
  * Get the title of the dialog.
  */
  public getTitle(): string;

  /**
  * Set the title of the dialog.
  */
  public setTitle(title: string): void;

  /**
  * Get the prefix used to set preferences.
  */
  public getPrefPrefix(): string;

  /**
  * Set the prefix used to set preferences.
  */
  public setPrefPrefix(prefix: string): void;

  /**
  * Add a file extension to be known by the dialog, displaying it in the file explorer.
  */
  public addFileType(type: string, typeDesc: string): void;

  /**
  * Clear all the file extension and description know.
  */
  public clearFileTypes(): void;

  /**
  * Initialize dialog and settings for export.
  */
  public init(): void;

  /**
  * Open the dialog widget.
  */
  public Exec(): int;

  /**
  * Enable the progress for the export.
  */
  public enableProgress(): void;

  /**
  * Update the progress for the export.
  */
  public updateProgress(progress: int): void;

  /**
  * Open a dialog for the export frame progress.
  */
  public startExport(): void;

  /**
  * Close the export progress dialog.
  */
  public endExport(): void;

  public exportCanceled(): void;

  public showAudioOptions(): void;

  public showVideoOptions(): void;

  public showVideoAndAudioOptions(): void;

  public fileFormatChanged(unknown_0: int): void;

  /**
  * Begin index frame used for export.
  */
  fromFrame: int;

  /**
  * End index frame used for export.
  */
  toFrame: int;

  /**
  * Name displayed of the dialog.
  */
  display: string;

  /**
  * File used for output.
  */
  outputFile: string;

  /**
  * Video configuration.
  */
  videoConfig: string;

  /**
  * Audio configuration.
  */
  audioConfig: string;

  /**
  * title of the dialog
  */
  title: string;

  /**
  * the prefix to use for the preference items
  */
  prefPrefix: string;

}