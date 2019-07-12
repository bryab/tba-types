declare class QCheckBox extends QAbstractButton {
  /**
   * This signal is emitted whenever the check box's state changes, i.
   */
  stateChanged: QSignal<(unknown_1: int) => void>;

  /**
   * Returns the check box's check state.
   */
  public checkState(): Qt.CheckState;

  public isTristate(): boolean;

  /**
   * Constructs a checkbox with the given parent, but with no text.
   */
  constructor(parent: QWidget);

  /**
   * Constructs a checkbox with the given parent and text.
   */
  constructor(text: QString, parent: QWidget);

  /**
   * Sets the check box's check state to state.
   */
  public setCheckState(state: Qt.CheckState): void;

  public setTristate(y: boolean): void;

  /**
   * whether the checkbox is a tri-state checkbox
   */
  tristate: boolean;
}
