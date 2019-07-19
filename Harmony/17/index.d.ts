/// <reference path="../harmony16.d.ts" />
/**
 * Harmony 17 added more widgets and more parameters to some old widgets.
 */

declare interface ButtonWidgetConfig {
  /**
    The name of the automatically generated position attribute (if none is provided)
    Default: -
    */
  data: String | Attribute;
  /**
    The size (half-extent) of the box.
    Default: 1.00
    */
  size?: float;
  /**
    When set to true, the button position becomes relative to the screen rather than the scene.
    Default: false
    */
  screen_space?: bool;
  /**
    Position of the box center in the scene, specified in fields.
    Default: Point2d(0,0)
    */
  position?: Point2d;
  /**
    The outer colour of the box.
    Default: 0, 0, 0,255
    */
  outer_color?: ColorRGBA;
  /**
    The inner colour of the box, when pressed.
    Default: 0,255, 0,128
    */
  on_color?: ColorRGBA;
  /**
    The outer colour of the box, when released.
    Default: 255, 0, 0,128
    */
  off_color?: ColorRGBA;
  /**
    When set to true, the button will stay in pressed state until pressed again.
    Default: false
    */
  toggle?: bool;
  /**
    Label text
    Default: "text"
    */
  label?: String;
  /**
    Label foreground (text) color.
    Default: 255,255,255,255
    */
  label_color?: ColorRGBA;
  /**
    Label background color. Accepts transparency values.
    Default: 0, 0, 0,128
    */
  label_bg_color?: ColorRGBA;
  /**
    Label font name.
    Default: "Arial"
    */
  label_font?: String;
  /**
    Label font size, in points.
    Default: 10.0
    */
  label_size?: float;
  /**
    Label position, in fields.
    Default: Point2d(0,0)
    */
  label_pos?: Point2d;
  /**
    Horizontal label text alignment ("Left"/"Center").
    Default: "Left"
    */
  label_justify?: String;
  /**
    Forces the label size to remain constant relative to screen.
    Default: true
    */
  label_screenspace?: bool;
  /**
    Label position offset, in screen space.
    Default: Point2d(0,0)
    */
  label_screenspace_offset?: Point2d;
}

/**
 * The ButtonWidget JavaScript class. A button widget
 */
declare class ButtonWidget extends WidgetBase {
  constructor(config: ButtonWidgetConfig);
  /**
   * Signal notifying the user that the value was modified by the Transform Tool.
   */
  public valueChanged: QSignal<(value: boolean) => void>;

  public onDrag(dragContext: DragContext): void;
}

declare interface CheckboxWidgetConfig {
  /**
  The name of the automatically generated position attribute (if none is provided)
  Default: -
  */
  data: String | Attribute;
  /**
  The size (half-extent) of the box.
  Default: 1.00
  */
  size?: float;
  /**
  When set to true, the checkbox position becomes relative to the screen rather than the scene.
  Default: false
  */
  screen_space?: bool;
  /**
  Position of the box center in the scene, specified in fields.
  Default: Point2d(0,0)
  */
  position?: Point2d;
  /**
  The outer colour of the box.
  Default: 0, 0, 0,255
  */
  outer_color?: ColorRGBA;
  /**
  The inner colour of the box, when checked.
  Default: 0,255, 0,128
  */
  on_color?: ColorRGBA;
  /**
  The outer colour of the box, when unchecked.
  Default: 255, 0, 0,128
  */
  off_color?: ColorRGBA;
  /**
  Label text
  Default: "text"
  */
  label?: String;
  /**
  Label foreground (text) color.
  Default: 255,255,255,255
  */
  label_color?: ColorRGBA;
  /**
  Label background color. Accepts transparency values.
  Default: 0, 0, 0,128
  */
  label_bg_color?: ColorRGBA;
  /**
  Label font name.
  Default: "Arial"
  */
  label_font?: String;
  /**
  Label font size, in points.
  Default: 10.0
  */
  label_size?: float;
  /**
  Label position, in fields.
  Default: Point2d(0,0)
  */
  label_pos?: Point2d;
  /**
  Horizontal label text alignment ("Left"/"Center").
  Default: "Left"
  */
  label_justify?: String;
  /**
  Forces the label size to remain constant relative to screen.
  Default: true
  */
  label_screenspace?: bool;
  /**
  Label position offset, in screen space.
  Default: Point2d(0,0)
  */
  label_screenspace_offset?: Point2d;
}

/**
 * The CheckboxWidget JavaScript class. A checkbox widget
 */
declare class CheckboxWidget extends MO_SignalEmitter {
  constructor(config: CheckboxWidgetConfig);
  /**
   * Signal notifying the user that the value was modified by the Transform Tool.
   */
  public valueChanged: QSignal<(value: boolean) => void>;

  public onDrag(dragContext: DragContext): void;
}

declare interface SliderWidgetConfig {
  /**
  The name of the automatically generated double floating point attribute (if none is provided). The value will range from min to max.
  Default: -
  */
  data: String | Attribute;
  /**
  The length of the slider in fields.
  Default: 0.5
  */
  length?: float;
  /**
  The radius of the slider handle in fields.
  Default: 0.03
  */
  radius?: float;
  /**
  When set to false, this option prevents interpolation between steps
  Default: true
  */
  continuous?: bool;
  /**
  Paint a shadow under the slider.
  Default: false
  */
  drop_shadow?: bool;
  /**
  Make the slider appears horizontal. Vertical if false.
  Default: false
  */
  horizontal?: bool;
  /**
  Minimum value of the slider.
  Default: 0
  */
  min?: float;
  /**
  Maximum value of the slider.
  Default: 100
  */
  max?: float;
  /**
  The colour of the handle of the slider.
  Default: white
  */
  slider_color?: ColorRGBA;
  /**
  The colour of the circle highlighting the handle of the slider.
  Default: dark gray
  */
  contour_color?: ColorRGBA;
  /**
  The colour of the handle of the slider when selected.
  Default: 125,125,255
  */
  slider_selection_color?: ColorRGBA;
  /**
  The colour of the frame of the slider.
  Default: 200,200,200
  */
  frame_color?: ColorRGBA;
  /**
  The colour of the frame of the slider when selected.
  Default: 125,125,255
  */
  frame_selection_color?: ColorRGBA;
  /**
  Default position of the slider frame bottom left corner. In fields.
  Default: 0.,0.
  */
  position?: Point2d;
  /**
  When set to true, the slider position becomes relative to the screen rather than the scene.
  Default: false
  */
  screen_space?: bool;
  /**
  [optional] Automatically generated attribute, which can be changed during slider usage.
  Default: -
  */
  dynamic_label_data?: String;
  /**
  Label text
  Default: "text"
  */
  label?: String;
  /**
  Label foreground (text) color.
  Default: 255, 255, 255
  */
  label_color?: ColorRGBA;
  /**
  Label background color. Accepts transparency values.
  Default: 0, 0, 0, 128
  */
  label_bg_color?: ColorRGBA;
  /**
  Label font name.
  Default: "Arial"
  */
  label_font?: String;
  /**
  Label font size, in points.
  Default: 10.0
  */
  label_size?: float;
  /**
  Label position, in fields.
  Default: Point2d(0,0)
  */
  label_pos?: Point2d;
  /**
  Horizontal label text alignment ("Left"/"Center").
  Default: "Left"
  */
  label_justify?: String;
  /**
  Forces the label size to remain constant relative to screen.
  Default: true
  */
  label_screenspace?: bool;
  /**
  Label position offset, in screen space.
  Default: Point2d(0,0)
  */
  label_screenspace_offset?: Point2d;
}

/**
 * The SliderWidget JavaScript class. A vertical or horizontal slider
 */
declare class SliderWidget extends MO_SignalEmitter {
  constructor(config: SliderWidgetConfig);
  /**
   * Signal notifying the user that the slider value was modified by the Transform Tool.
   */
  public valueChanged: QSignal<(newSliderValue: float) => void>;
}

declare interface LabelWidgetConfig {
  /**
  An array containing the Position 2D and the String Attribute
  Default: 
  */
  data: [Attribute, String];
  /**
  Label text
  Default: "text"
  */
  label?: String;
  /**
  Label foreground (text) color.
  Default: 255,255,255,255
  */
  label_color?: ColorRGBA;
  /**
  Label background color. Accepts transparency values.
  Default: 0, 0, 0,128
  */
  label_bg_color?: ColorRGBA;
  /**
  Label font name.
  Default: "Arial"
  */
  label_font?: String;
  /**
  Label font size, in points.
  Default: 10.0
  */
  label_size?: float;
  /**
  Label position, in fields.
  Default: Point2d(0,0)
  */
  label_pos?: Point2d;
  /**
  Horizontal label text alignment ("Left"/"Center").
  Default: "Left"
  */
  label_justify?: String;
  /**
  Forces the label size to remain constant relative to screen.
  Default: true
  */
  label_screenspace?: bool;
  /**
  Label position offset, in screen space.
  Default: Point2d(0,0)
  */
  label_screenspace_offset?: Point2d;
}

/**
 * The LabelWidget JavaScript class. A floating Label display widget
 */
declare class LabelWidget extends WidgetBase {
  constructor(config: LabelWidgetConfig);
}

declare interface Point2dWidgetConfig {
  /**
  The name of the automatically generated 2d position attribute (if none is provided)
  Default: -
  */
  data: String | Attribute;
  /**
  The size (diameter) of the point manipulator in percentage of 350 pixels.
  Default: 0.01
  */
  size?: float;
  /**
  The colour of the point manipulator.
  Default: 255, 0, 0
  */
  color?: ColorRGBA;
  /**
  The colour of the inner point manipulator (override the color property if both are found).
  Default: color value
  */
  inner_color?: ColorRGBA;
  /**
  The colour of the outer point manipulator (override the color property if both are found).
  Default: color value
  */
  outer_color?: ColorRGBA;
  /**
  The colour of the point manipulator when selected.
  Default: light blue
  */
  selection_color?: ColorRGBA;
  /**
  The left boundary of the point bounding box in fields.
  Default: -float max
  */
  xmin?: float;
  /**
  The right boundary of the point bounding box in fields.
  Default: float max
  */
  xmax?: float;
  /**
  The bottom boundary of the point bounding box in fields.
  Default: -float max
  */
  ymin?: float;
  /**
  The top boundary of the point bounding box in fields.
  Default: float max
  */
  ymax?: float;
  /**
  Draw the bounding box
  Default: false
  */
  show_limits?: bool;
  /**
  Bounding box color
  Default: 0, 0, 0
  */
  box_color?: ColorRGBA;
  /**
  Point Style ("Circle","Square","Triangle", "Diamond")
  Default: "Circle"
  */
  point_style?: String;
  /**
  Label text
  Default: "text"
  */
  label?: String;
  /**
  Label foreground (text) color.
  Default: 255, 255, 255
  */
  label_color?: ColorRGBA;
  /**
  Label background color. Accepts transparency values.
  Default: 0, 0, 0, 128
  */
  label_bg_color?: ColorRGBA;
  /**
  Label font name.
  Default: "Arial"
  */
  label_font?: String;
  /**
  Label font size, in points.
  Default: 10.0
  */
  label_size?: float;
  /**
  Label position, in fields.
  Default: Point2d(0,0)
  */
  label_pos?: Point2d;
  /**
  Horizontal label text alignment ("Left"/"Center").
  Default: "Left"
  */
  label_justify?: String;
  /**
  Forces the label size to remain constant relative to screen.
  Default: true
  */
  label_screenspace?: bool;
  /**
  Label position offset, in screen space.
  Default: Point2d(0,0)
  */
  label_screenspace_offset?: Point2d;
}

/**
 * The Point2dWidget JavaScript class. A 2 dimensional point widget of various shape
 */
declare class Point2dWidget extends WidgetBase {
  constructor(config: Point2dWidgetConfig);
  /**
   * Signal notifying the user that the 2d point value was modified by the Transform Tool.
   */
  public valueChanged: QSignal<(point2d: QScriptValue) => void>;
}

declare class MCUIPoint2D extends Point2dWidget {}
