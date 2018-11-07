declare namespace QLineEdit {
  /**
   * This enum type describes how a line edit should display its contents.
   */
  enum EchoMode {
    NoEcho,
    Password,
    PasswordEchoOnEdit
  }
}

declare class QLineEdit extends QWidget {
  /**
   * Clears the contents of the line edit.
   */
  public clear(): void;

  /**
   * Copies the selected text to the clipboard, if there is any, and if echoMode() is Normal .
   */
  public copy(): void;

  /**
   * Copies the selected text to the clipboard and deletes it, if there is any, and if echoMode() is Normal .
   */
  public cut(): void;

  /**
   * Inserts the clipboard's text at the cursor position, deleting any selected text, providing the line edit is not read-only.
   */
  public paste(): void;

  /**
   * Redoes the last operation if redo is available.
   */
  public redo(): void;

  /**
   * Selects all the text (i.e.
   */
  public selectAll(): void;

  public setText(unknown_1: QString): void;

  /**
   * Undoes the last operation if undo is available.
   */
  public undo(): void;

  /**
   * This signal is emitted whenever the cursor moves.
   */
  cursorPositionChanged: QSignal<(unknown_1: int, unknown_2: int) => void>;

  /**
   * This signal is emitted when the Return or Enter key is pressed or the line edit loses focus.
   */
  editingFinished: QSignal<() => void>;

  /**
   * This signal is emitted when the Return or Enter key is pressed.
   */
  returnPressed: QSignal<() => void>;

  /**
   * This signal is emitted whenever the selection changes.
   */
  selectionChanged: QSignal<() => void>;

  /**
   * This signal is emitted whenever the text changes.
   */
  textChanged: QSignal<(unknown_1: QString) => void>;

  /**
   * This signal is emitted whenever the text is edited.
   */
  textEdited: QSignal<(unknown_1: QString) => void>;

  public alignment(): Qt.Alignment;

  /**
   * If no text is selected, deletes the character to the left of the text cursor and moves the cursor one position to the left.
   */
  public backspace(): void;

  /**
   * Returns the current QCompleter that provides completions.
   */
  public completer(): QCompleter;

  /**
   * This function creates the standard context menu which is shown when the user clicks on the line edit with the right mouse button.
   */
  public createStandardContextMenu(): QMenu;

  /**
   * Moves the cursor back steps characters.
   */
  public cursorBackward(mark: boolean, steps: int): void;

  /**
   * Moves the cursor forward steps characters.
   */
  public cursorForward(mark: boolean, steps: int): void;

  public cursorMoveStyle(): Qt.CursorMoveStyle;

  public cursorPosition(): int;

  /**
   * Returns the cursor position under the point pos.
   */
  public cursorPositionAt(pos: QPoint): int;

  /**
   * Moves the cursor one word backward.
   */
  public cursorWordBackward(mark: boolean): void;

  /**
   * Moves the cursor one word forward.
   */
  public cursorWordForward(mark: boolean): void;

  /**
   * If no text is selected, deletes the character to the right of the text cursor.
   */
  public del(): void;

  /**
   * Deselects any selected text.
   */
  public deselect(): void;

  public displayText(): QString;

  public dragEnabled(): boolean;

  public echoMode(): EchoMode;

  /**
   * Moves the text cursor to the end of the line unless it is already there.
   */
  public end(mark: boolean): void;

  /**
   * Reimplemented Function
   */
  public event(unknown: QEvent): boolean;

  /**
   * Returns the widget's text margins for left, top, right, and bottom.
   */
  public getTextMargins(left: int, top: int, right: int, bottom: int): void;

  public hasAcceptableInput(): boolean;

  public hasFrame(): boolean;

  public hasSelectedText(): boolean;

  /**
   * Moves the text cursor to the beginning of the line unless it is already there.
   */
  public home(mark: boolean): void;

  public inputMask(): QString;

  /**
   * em>Reimplemented Function
   */
  public inputMethodQuery(unknown_1: Qt.InputMethodQuery): QVariant;

  /**
   * Deletes any selected text, inserts newText, and validates the result.
   */
  public insert(unknown_1: QString): void;

  public isModified(): boolean;

  public isReadOnly(): boolean;

  public isRedoAvailable(): boolean;

  public isUndoAvailable(): boolean;

  public maxLength(): int;

  /**
   * Returns a minimum size for the line edit.
   */
  public minimumSizeHint(): QSize;

  public placeholderText(): QString;

  /**
   * Constructs a line edit with no text.
   */
  constructor(parent: QWidget);

  /**
   * Constructs a line edit containing the text contents.
   */
  constructor(unknown_1: QString, parent: QWidget);

  public selectedText(): QString;

  /**
   * selectionStart() returns the index of the first selected character in the line edit or -1 if no text is selected.
   */
  public selectionStart(): int;

  public setAlignment(flag: Qt.Alignment): void;

  /**
   * Sets this line edit to provide auto completions from the completer, c.
   */
  public setCompleter(completer: QCompleter): void;

  /**
   * Sets the movement style for the cursor in the line edit to the given style.
   */
  public setCursorMoveStyle(style: Qt.CursorMoveStyle): void;

  public setCursorPosition(unknown_1: int): void;

  public setDragEnabled(b: boolean): void;

  public setEchoMode(unknown_1: EchoMode): void;

  public setFrame(unknown_1: boolean): void;

  public setInputMask(inputMask: QString): void;

  public setMaxLength(unknown_1: int): void;

  public setModified(unknown_1: boolean): void;

  public setPlaceholderText(unknown_1: QString): void;

  public setReadOnly(unknown_1: boolean): void;

  /**
   * Selects text from position start and for length characters.
   */
  public setSelection(unknown_1: int, unknown_2: int): void;

  /**
   * Sets the margins around the text inside the frame to have the sizes left, top, right, and bottom.
   */
  public setTextMargins(left: int, top: int, right: int, bottom: int): void;

  /**
   * Sets the margins around the text inside the frame.
   */
  public setTextMargins(margins: QMargins): void;

  /**
   * Sets this line edit to only accept input that the validator, v, will accept.
   */
  public setValidator(unknown: QValidator): void;

  /**
   * Returns a recommended size for the widget.
   */
  public sizeHint(): QSize;

  public text: QString;

  /**
   * Returns the widget's text margins.
   */
  public textMargins(): QMargins;

  /**
   * Returns a pointer to the current input validator, or 0 if no validator has been set.
   */
  public validator(): QValidator;
}
