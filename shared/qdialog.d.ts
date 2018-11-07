declare namespace QDialog {
  /**
   * The value returned by a modal dialog.
   */
  enum DialogCode {
    Accepted
  }
}

declare class QDialog extends QWidget {
  /**
   * Hides the modal dialog and sets the result code to Accepted.
   */
  public accept(): void;

  /**
   * Closes the dialog and sets its result code to r.
   */
  public done(unknown_1: int): void;

  /**
   * Shows the dialog as a modal dialog, blocking until the user closes it.
   */
  public exec(): int;

  /**
   * Shows the dialog as a window modal dialog, returning immediately.
   */
  public open(): void;

  /**
   * Hides the modal dialog and sets the result code to Rejected.
   */
  public reject(): void;

  /**
   * If showIt is true, the dialog's extension is shown; otherwise the extension is hidden.
   */
  public showExtension(unknown_1: boolean): void;

  /**
   * This signal is emitted when the dialog has been accepted either by the user or by calling accept() or done() with the QDialog::Accepted argument.
   */
  accepted: QSignal<() => void>;

  /**
   * This signal is emitted when the dialog's result code has been set, either by the user or by calling done(), accept(), or reject().
   */
  finished: QSignal<(result: int) => void>;

  /**
   * This signal is emitted when the dialog has been rejected either by the user or by calling reject() or done() with the QDialog::Rejected argument.
   */
  rejected: QSignal<() => void>;

  /**
   * Returns the dialog's extension or 0 if no extension has been defined.
   */
  public extension(): QWidget;

  public isSizeGripEnabled(): boolean;

  /**
   * Returns the dialog's extension orientation.
   */
  public orientation(): Qt.Orientation;

  /**
   * Constructs a dialog with parent parent.
   */
  constructor(parent: QWidget, f: Qt.WindowFlags);

  /**
   * In general returns the modal dialog's result code, Accepted or Rejected.
   */
  public result(): int;

  /**
   * Sets the widget, extension, to be the dialog's extension, deleting any previous extension.
   */
  public setExtension(extension: QWidget): void;

  public setModal(modal: boolean): void;

  /**
   * If orientation is Qt::Horizontal, the extension will be displayed to the right of the dialog's main area.
   */
  public setOrientation(orientation: Qt.Orientation): void;

  /**
   * Sets the modal dialog's result code to i.
   */
  public setResult(r: int): void;

  public setSizeGripEnabled(unknown_1: boolean): void;

  /**
   * whether show() should pop up the dialog as modal or modeless
   */
  modal: boolean;

  /**
   * whether the size grip is enabled
   */
  sizeGripEnabled: boolean;
}
