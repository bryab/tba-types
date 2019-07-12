declare namespace QFrame {
  /**
   * This enum type defines the types of shadow that are used to give a 3D effect to frames.
   */
  enum Shadow {
    Raised,
    Sunken
  }

  /**
   * This enum type defines the shapes of frame available.
   */
  enum Shape {
    Box,
    Panel,
    WinPanel,
    VLine,
    StyledPanel
  }

  /**
   * This enum defines two constants that can be used to extract the two components of frameStyle():
   */
  enum StyleMask {
    Shape_Mask
  }
}

declare class QFrame extends QWidget {
  /**
   * Returns the frame style.
   */
  public frameStyle(): int;

  /**
   * Constructs a frame widget with frame style NoFrame and a 1-pixel frame width.
   */
  constructor(parent: QWidget, f: Qt.WindowFlags);

  public setFrameShadow(unknown_1: QFrame.Shadow): void;

  public setFrameShape(unknown_1: QFrame.Shape): void;

  /**
   * Sets the frame style to style.
   */
  public setFrameStyle(unknown_1: int): void;

  public setLineWidth(unknown_1: int): void;

  public setMidLineWidth(unknown_1: int): void;

  /**
   * the frame's rectangle
   */
  frameRect: QRect;

  /**
   * the frame shadow value from the frame style
   */
  frameShadow: Shadow;

  /**
   * the frame shape value from the frame style
   */
  frameShape: Shape;

  /**
   * the width of the frame that is drawn.
   */
  frameWidth: int;

  /**
   * the line width
   */
  lineWidth: int;

  /**
   * the width of the mid-line
   */
  midLineWidth: int;
}
