declare namespace QProgressBar {
  /**
   * Specifies the reading direction of the text for vertical progress bars.
   */
  enum Direction {
    BottomToTop
  }
}

declare class QProgressBar extends QWidget {
  /**
   * Reset the progress bar.
   */
  public reset(): void;

  public setMaximum(maximum: int): void;

  public setMinimum(minimum: int): void;

  public setOrientation(unknown_1: Qt.Orientation): void;

  /**
   * Sets the progress bar's minimum and maximum values to minimum and maximum respectively.
   */
  public setRange(minimum: int, maximum: int): void;

  public setValue(value: int): void;

  /**
   * This signal is emitted when the value shown in the progress bar changes.
   */
  valueChanged: QSignal<(value: int) => void>;

  public alignment(): Qt.Alignment;

  public format(): QString;

  public invertedAppearance(): boolean;

  public isTextVisible(): boolean;

  public maximum(): int;

  public minimum(): int;

  public orientation(): Qt.Orientation;

  /**
   * Constructs a progress bar with the given parent.
   */
  constructor(parent: QWidget);

  public setAlignment(alignment: Qt.Alignment): void;

  public setFormat(format: QString): void;

  public setInvertedAppearance(invert: boolean): void;

  public setTextDirection(textDirection: QProgressBar.Direction): void;

  public setTextVisible(visible: boolean): void;

  public text(): QString;

  public textDirection(): QProgressBar.Direction;

  public value(): int;

  /**
   * whether the current completed percentage should be displayed
   */
  textVisible: boolean;
}
