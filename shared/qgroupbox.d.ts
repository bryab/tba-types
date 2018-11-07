declare class QGroupBox extends QWidget {
  public setChecked(checked: boolean): void;

  /**
   * This signal is emitted when the check box is activated (i.
   */
  clicked: QSignal<(checked: boolean) => void>;

  /**
   * If the group box is checkable, this signal is emitted when the check box is toggled.
   */
  toggled: QSignal<(unknown_1: boolean) => void>;

  public alignment(): Qt.Alignment;

  public isCheckable(): boolean;

  public isChecked(): boolean;

  public isFlat(): boolean;

  /**
   * Reimplemented Function
   */
  public minimumSizeHint(): QSize;

  /**
   * Constructs a group box widget with the given parent but with no title.
   */
  constructor(parent: QWidget);

  /**
   * Constructs a group box with the given title and parent.
   */
  constructor(title: QString, parent: QWidget);

  public setAlignment(alignment: int): void;

  public setCheckable(checkable: boolean): void;

  public setFlat(flat: boolean): void;

  public setTitle(title: QString): void;

  public title(): QString;
}
