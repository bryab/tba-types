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
