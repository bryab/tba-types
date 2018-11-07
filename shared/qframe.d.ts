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
  public frameRect(): QRect;

  public frameShadow(): Shadow;

  public frameShape(): Shape;

  /**
   * Returns the frame style.
   */
  public frameStyle(): int;

  public frameWidth(): int;

  public lineWidth(): int;

  public midLineWidth(): int;

  /**
   * Constructs a frame widget with frame style NoFrame and a 1-pixel frame width.
   */
  constructor(parent: QWidget, f: Qt.WindowFlags);

  /**
   * em>Reimplemented Function
   */
  public setFrameRect(unknown_1: QRect): void;

  public setFrameShadow(unknown_1: Shadow): void;

  public setFrameShape(unknown_1: Shape): void;

  /**
   * Sets the frame style to style.
   */
  public setFrameStyle(unknown_1: int): void;

  public setLineWidth(unknown_1: int): void;

  public setMidLineWidth(unknown_1: int): void;

  /**
   * em>Reimplemented Function
   */
  public sizeHint(): QSize;
}
