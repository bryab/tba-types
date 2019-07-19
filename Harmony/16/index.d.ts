/// <reference path="../index.d.ts" />
/// <reference path="../../shared/15/index.d.ts" />
/// <reference path="../harmony16.d.ts" />
/**
 * Harmony 16 added many new API features
 */
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
  /**
   * Draw the bounding box
   */
  show_limits?: boolean;
  /**
   * Bounding box color
   */
  box_color?: ColorRGBA;
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
   * Default position of the slider frame bottom left corner. In fields.
   * Default: 0,0
   */
  position?: Point2d;

  /**
   * When set to true, the slider position becomes relative to the screen rather than the scene.
   * Default: false
   */
  screen_space?: boolean;

  /**
   * Deprecated: Use 'position' attribute
   * Default translation in the x axis for the bottom left corner of the slider frame. In fields.
   * Default: -0.05
   */
  xmin?: number;
  /**
   * Deprecated: Use 'position' attribute
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

/**
 * The node JavaScript global object
 */
declare module node {
  /**
   * Returns the name of the Top level in the Node View, which is "Top".
   */
  function root(): string;

  /**
   * Returns a true or false value indicating if the node is a group.
   */
  function isGroup(node: string): boolean;

  /**
   * Returns the name of a node.
   */
  function getName(node: string): string;

  /**
   * Returns the node type. These are all of the built-in node types available from the Harmony node like: READ, COMPOSITE, PEG, QUADMAP, SHADOW, etc.
   */
  function type(node: string): string;

  /**
   * Returns an integer that indicates the number of nodes contained in a group.
   */
  function numberOfSubNodes(parent: string): int;

  /**
   * Returns an array of sub nodes.
   */
  function subNodes(parentGroup: string): NodePath[];

  /**
   * Return the value of the "Add Composite To Group" attribute of the peg-node. This method is obsolete.
   */
  function addCompositeToGroup(node: string): boolean;

  /**
   * Returns the path of a node in a group. Nodes are counted starting with zero.
   */
  function subNode(parent: string, iSubNode: int): string;

  /**
   * Returns the full path of a child node belonging to a parent group.
   */
  function subNodeByName(parent: string, name: string): string;

  /**
   * Returns the path of the parent level of a node contained in a group.
   */
  function parentNode(node: string): string;

  /**
   * Returns the node path to an invalid node.
   */
  function noNode(): string;

  /**
   * Returns true or false to indicate if a node path is equal to another. Used to compare node paths.
   */
  function equals(node1: string, node2: string): boolean;

  /**
   * Returns the value(s) of the node selected attribute(s).
   */
  function getTextAttr(node: string, atFrame: double, attrName: string): string;

  /**
   * Returns the Attribute of the given node. The attribute value is for the given frame.
   */
  function getAttr(node: string, atFrame: double, attrName: string): Attribute;

  /**
   * Returns a list of Attribute objects of the given node.
   */
  function getAttrList(node: string, atFrame: double, attrName?: string): QList<Attribute>;

  /**
   * Returns a list of the names of all of the Attribute objects of the given node.
   */
  function getAllAttrNames(node: string): StringList;

  /**
   * Returns a list of the keywords of all of the Attribute objects of the given node.
   */
  function getAllAttrKeywords(node: string): StringList;

  /**
   * Returns the name of the column that an attribute is linked to. If the attribute is not linked to a column, the method returns the null string.
   */
  function linkedColumn(node: string, attrName: string): string;

  /**
   * Returns an integer indicating the X position of a node in the Node View.
   */
  function coordX(node: string): int;

  /**
   * Returns an integer indicating the Y position of a node in the Node View.
   */
  function coordY(node: string): int;

  /**
   * Returns an integer indicating the Z position of a node in the Node View.
   */
  function coordZ(node: string): int;

  /**
   * Returns the width of a given node.
   */
  function width(node: string): int;

  /**
   * Returns the height of a given node.
   */
  function height(node: string): int;

  /**
   * Set the position of a node in the Node View.
   */
  function setCoord(node: string, x: int, y: int): boolean;

  /**
   * Set the position of a node in the Node View.
   */
  function setCoord(node: string, x: int, y: int, z: int): boolean;

  /**
   * The number of input ports on the node.
   */
  function numberOfInputPorts(node: string): int;

  /**
   * Returns true or false to indicate if a port is connected to another node.
   */
  function isLinked(node: string, iPort: int): boolean;

  /**
   * Returns the path for the node that the port is linked to.
   */
  function srcNode(node: string, iPort: int): string;

  /**
   * If the Source node is a Group, this method returns the path of the node inside the Group node that is the source. If the source is not inside a group, the flatSrcNode() method behaves like the srcNode() method.
   */
  function flatSrcNode(node: string, iPort: int): string;

  /**
   * Returns the source node path, the output port number and the link ID for this source node that this destination node is connected to.
   */
  function srcNodeInfo(node: string, iPort: int): QScriptValue;

  /**
   * The number of output ports on a node.
   */
  function numberOfOutputPorts(node: string): int;

  /**
   * The number of nodes actually linked from the output ports.
   */
  function numberOfOutputLinks(node: string, iPort: int): int;

  /**
   * Returns the path of the destination node linked to by the output port on the source node.
   */
  function dstNode(sourceNode: string, iPort: int, iLink: int): string;

  /**
   * Returns the path and addition information of the destination node linked to the source node.
   */
  function dstNodeInfo(sourceNode: string, iPort: int, iLink: int): QScriptValue;

  /**
   * Deprecated: Please use node.getAttr("MyPeg", 1.0, "GROUP_AT_NETWORK_BUILDING").boolValue());
   * Returns true if the peg's groupAtNetworkBuilding() attribute is true.
   */
  function groupAtNetworkBuilding(node: string): boolean;

  /**
   * Add a node to the Node View.
   */
  function add(parentGroup: string, name: string, type: string, x: int, y: int, z: int): string;

  /**
   * Returns existing or add a group multi port in node.
   */
  function getGroupInputModule(parentGroup: string, name: string, x: int, y: int, z: int): string;

  /**
   * Returns existing or add a group multi port out node.
   */
  function getGroupOutputModule(parentGroup: string, name: string, x: int, y: int, z: int): string;

  /**
   * Delete a single node. Optionally, delete all columns and element associated to that node. The column and element would only be removed when no other nodes refer to them.
   */
  function deleteNode(nodePath: string, deleteTimedValues?: boolean, deleteElements?: boolean): boolean;

  /**
   * Create a group from the selection of nodes. The list of nodes is a string where the nodes are separated by commas. The actual name of each node in the list of nodes must include the full path of that node.
   */
  function createGroup(nodes: string, groupName: string): string;

  /**
   * Move the specified node within the specified group.
   */
  function moveToGroup(node: string, groupName: string): string;

  /**
   * Explode a group into its parent group. This method is identical to the "Explode Selected Group" from the Node View.
   */
  function explodeGroup(groupName: string): boolean;

  /**
   * Changes the name of a node.
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
   * Change the value of an attribute in a node.
   */
  function setTextAttr(node: string, attrName: string, atFrame: int, attrValue: string | number): boolean;

  /**
   * Link an attribute to a function column in the Xsheet View.
   */
  function linkAttr(node: string, attrName: string, columnName: string): boolean;

  /**
   * Unlink an attribute from a function column.
   */
  function unlinkAttr(node: string, attrName: string): boolean;

  /**
   * Link a port on a node to a port on another node.
   */
  function link(srcNode: string, srcPort: int, dstNode: string, dstPort: int): boolean;

  /**
   * Link a port of a node to a port of another node. This version of the method allows connecting to a group node, or setup the proper connection order.
   */
  function link(srcNode: string, srcPort: int, dstNode: string, dstPort: int, mayAddOutputPort: boolean, mayAddInputPort: boolean): boolean;

  /**
   * Unlink a port on one node from the port on another node.
   */
  function unlink(dstNode: string, inPort: int): boolean;

  /**
   * Setters and getters for the enable/disable property of a node.
   */
  function setEnable(node: string, flag: boolean): boolean;

  /**
   * Returns whether a node is enabled or not.
   */
  function getEnable(node: string): boolean;

  /**
   * Setters and getters for the lock/unlock property of a node.
   */
  function setLocked(node: string, lock: boolean): boolean;

  /**
   * Returns the lock flag.
   */
  function getLocked(node: string): boolean;

  /**
   * Set the timeline tag flag of the node.
   */
  function setTimelineTag(node: string, tag: boolean): boolean;

  /**
   * Returns the timeline tag flag.
   */
  function getTimelineTag(node: string): boolean;

  /**
   * Returns a list of timeline tag flags.
   */
  function getTimelineTagList(node?: string, list?: StringList): StringList;

  /**
   * Set the node colour.
   */
  function setColor(node: string, color: ColorRGBA): boolean;

  /**
   * Reset the node colour.
   */
  function resetColor(node: string): boolean;

  /**
   * Returns the node colour.
   */
  function getColor(node: string): ColorRGBA;

  /**
   * Change the global display used in the application. The node must be the full path of a display node.
   */
  function setAsGlobalDisplay(node: string): boolean;

  /**
   * Change the global display used by the application to "Display All" pseudo-display.
   */
  function setGlobalToDisplayAll(): boolean;

  /**
   * Setters and getters for the default camera.
   */
  function setAsDefaultCamera(node: string): boolean;

  /**
   * Returns the name of the default camera.
   */
  function getDefaultCamera(): string;

  /**
   * Returns a list of all cameras within the scene.
   */
  function getCameras(): StringList;

  /**
   * Returns the number of versions of the node available.
   */
  function getMaxVersionNumber(node: string): int;

  /**
   * Returns the current version of the node.
   */
  function getVersion(node: string): int;

  /**
   * Set the version of the node to use.
   */
  function setVersion(node: string, version: int): void;

  /**
   * Returns a collection of node paths for nodes of specified types.
   */
  function getNodes(types: StringList): StringList;

  /**
   * Returns the model matrix of a node.
   */
  function getMatrix(node: string, frame: int): Matrix4x4;

  /**
   * Returns the pivot of the node.
   */
  function getPivot(node: string, frame: int): Point3d;

  /**
   * Returns the ColorOverride object for the color override node.
   */
  function getColorOverride(node: string): ColorOverride;

  /**
   * Returns the Element Id of the node. Has to be an element node, identified with type :: READ.
   */
  function getElementId(nodeName: string): int;

  /**
   * Create a group for each exposure of the element where there is a symbol and will put the content of the symbol in that group.
   */
  function explodeElementSymbolsInGroups(element: string, disableElement: boolean, clearExposure: boolean, prefix?: string): void;

  /**
   * Set the show/hide timeline thumbnails on drawing layers.
   */
  function setShowTimelineThumbnails(node: string, bShow: boolean): boolean;

  /**
   * Returns the show/hide timeline thumbnail flags on drawing layers.
   */
  function getShowTimelineThumbnails(node: string): boolean;
}
