declare class QAbstractButton extends QWidget {
  /**
   * Performs an animated click: the button is pressed immediately, and released msec milliseconds later (the default is 100 ms).
   */
  public animateClick(msec: int): void;

  /**
   * Performs a click.
   */
  public click(): void;

  public setChecked(unknown_1: boolean): void;

  public setIconSize(size: QSize): void;

  /**
   * Toggles the state of a checkable button.
   */
  public toggle(): void;

  /**
   * This signal is emitted when the button is activated (i.e.
   */
  clicked: QSignal<(checked: boolean) => void>;

  /**
   * This signal is emitted when the button is pressed down.
   */
  pressed: QSignal<() => void>;

  /**
   * This signal is emitted when the button is released.
   */
  released: QSignal<() => void>;

  /**
   * This signal is emitted whenever a checkable button changes its state.
   */
  toggled: QSignal<(checked: boolean) => void>;

  public autoExclusive(): boolean;

  public autoRepeat(): boolean;

  public autoRepeatDelay(): int;

  public autoRepeatInterval(): int;

  /**
   * Returns the group that this button belongs to.
   */
  public group(): QButtonGroup;

  public icon(): QIcon;

  public iconSize(): QSize;

  public isCheckable(): boolean;

  public isChecked(): boolean;

  public isDown(): boolean;

  /**
   * Constructs an abstract button with a parent.
   */
  constructor(parent: QWidget);

  public setAutoExclusive(unknown_1: boolean): void;

  public setAutoRepeat(unknown_1: boolean): void;

  public setAutoRepeatDelay(unknown_1: int): void;

  public setAutoRepeatInterval(unknown_1: int): void;

  public setCheckable(unknown_1: boolean): void;

  public setDown(unknown_1: boolean): void;

  public setIcon(icon: QIcon): void;

  public setShortcut(key: QKeySequence): void;

  public setText(text: QString): void;

  public shortcut(): QKeySequence;

  public text(): QString;

  /**
   * whether the button is checkable
   */
  checkable: boolean;

  /**
   * whether the button is checked
   */
  checked: boolean;

  /**
   * whether the button is pressed down
   */
  down: boolean;
}
