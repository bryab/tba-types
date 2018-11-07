declare class QRadioButton extends QAbstractButton {
  /**
   * Reimplemented Function
   */
  public minimumSizeHint(): QSize;

  /**
   * Constructs a radio button with the given parent, but with no text or pixmap.
   */
  constructor(parent: QWidget);

  /**
   * Constructs a radio button with the given parent and a text string.
   */
  constructor(text: QString, parent: QWidget);

  /**
   * Reimplemented Function
   */
  public sizeHint(): QSize;
}
