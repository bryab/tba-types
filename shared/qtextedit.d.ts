declare type ExtraSelection = any;

declare namespace QTextEdit {
  enum AutoFormattingFlag {
    AutoBulletList,
    AutoAll
  }

  type AutoFormatting = AutoFormattingFlag;

  enum LineWrapMode {
    WidgetWidth,
    FixedPixelWidth,
    FixedColumnWidth
  }
}

declare class QTextEdit extends QFrame {
  /**
   * Appends a new paragraph with text to the end of the text edit.
   */
  public append(text: QString): void;

  /**
   * Deletes all the text in the text edit.
   */
  public clear(): void;

  /**
   * Copies any selected text to the clipboard.
   */
  public copy(): void;

  /**
   * Copies the selected text to the clipboard and deletes it from the text edit.
   */
  public cut(): void;

  /**
   * Convenience slot that inserts text which is assumed to be of html formatting at the current cursor position.
   */
  public insertHtml(text: QString): void;

  /**
   * Convenience slot that inserts text at the current cursor position.
   */
  public insertPlainText(text: QString): void;

  /**
   * Pastes the text from the clipboard into the text edit at the current cursor position.
   */
  public paste(): void;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public redo(): void;

  /**
   * Scrolls the text edit so that the anchor with the given name is visible; does nothing if the name is empty, or is already visible, or isn't found.
   */
  public scrollToAnchor(name: QString): void;

  /**
   * Selects all text.
   */
  public selectAll(): void;

  /**
   * Sets the alignment of the current paragraph to a.
   */
  public setAlignment(a: Qt.Alignment): void;

  /**
   * Sets the font of the current format to f.
   */
  public setCurrentFont(f: QFont): void;

  /**
   * Sets the font family of the current format to fontFamily.
   */
  public setFontFamily(fontFamily: QString): void;

  /**
   * If italic is true, sets the current format to italic; otherwise sets the current format to non-italic.
   */
  public setFontItalic(b: boolean): void;

  /**
   * Sets the point size of the current format to s.
   */
  public setFontPointSize(s: qreal): void;

  /**
   * If underline is true, sets the current format to underline; otherwise sets the current format to non-underline.
   */
  public setFontUnderline(b: boolean): void;

  /**
   * Sets the font weight of the current format to the given weight, where the value used is in the range defined by the QFont::Weight enum.
   */
  public setFontWeight(w: int): void;

  public setHtml(text: QString): void;

  /**
   * Changes the text of the text edit to the string text.
   */
  public setPlainText(text: QString): void;

  /**
   * Sets the text edit's text.
   */
  public setText(text: QString): void;

  /**
   * Sets the text background color of the current format to c.
   */
  public setTextBackgroundColor(c: QColor): void;

  /**
   * Sets the text color of the current format to c.
   */
  public setTextColor(c: QColor): void;

  /**
   * Undoes the last operation.
   */
  public undo(): void;

  /**
   * Zooms in on the text by making the base font size range points larger and recalculating all font sizes to be the new size.
   */
  public zoomIn(range: int): void;

  /**
   * Zooms out on the text by making the base font size range points smaller and recalculating all font sizes to be the new size.
   */
  public zoomOut(range: int): void;

  /**
   * This signal is emitted when text is selected or de-selected in the text edit.
   */
  copyAvailable: QSignal<(b: boolean) => void>;

  /**
   * This signal is emitted if the current character format has changed, for example caused by a change of the cursor position.
   */
  currentCharFormatChanged: QSignal<(format: QTextCharFormat) => void>;

  /**
   * This signal is emitted whenever the position of the cursor changed.
   */
  cursorPositionChanged: QSignal<() => void>;

  /**
   * This signal is emitted whenever redo operations become available (available is true) or unavailable (available is false).
   */
  redoAvailable: QSignal<(b: boolean) => void>;

  /**
   * This signal is emitted whenever the selection changes.
   */
  selectionChanged: QSignal<() => void>;

  /**
   * This signal is emitted whenever the document's content changes; for example, when text is inserted or deleted, or when formatting is applied.
   */
  textChanged: QSignal<() => void>;

  /**
   * This signal is emitted whenever undo operations become available (available is true) or unavailable (available is false).
   */
  undoAvailable: QSignal<(b: boolean) => void>;

  public acceptRichText(): boolean;

  /**
   * Returns the alignment of the current paragraph.
   */
  public alignment(): Qt.Alignment;

  /**
   * Returns the reference of the anchor at position pos, or an empty string if no anchor exists at that point.
   */
  public anchorAt(pos: QPoint): QString;

  public autoFormatting(): QTextEdit.AutoFormatting;

  /**
   * Returns whether text can be pasted from the clipboard into the textedit.
   */
  public canPaste(): boolean;

  /**
   * This function creates the standard context menu which is shown when the user clicks on the text edit with the right mouse button.
   */
  public createStandardContextMenu(): QMenu;

  /**
   * Returns the char format that is used when inserting new text.
   */
  public currentCharFormat(): QTextCharFormat;

  /**
   * Returns the font of the current format.
   */
  public currentFont(): QFont;

  /**
   * returns a QTextCursor at position pos (in viewport coordinates).
   */
  public cursorForPosition(pos: QPoint): QTextCursor;

  /**
   * returns a rectangle (in viewport coordinates) that includes the cursor.
   */
  public cursorRect(cursor: QTextCursor): QRect;

  public cursorWidth(): int;

  /**
   * Returns a pointer to the underlying document.
   */
  public document(): QTextDocument;

  public documentTitle(): QString;

  /**
   * Ensures that the cursor is visible by scrolling the text edit if necessary.
   */
  public ensureCursorVisible(): void;

  /**
   * Returns previously set extra selections.
   */
  public extraSelections(): QList<ExtraSelection>;

  /**
   * Finds the next occurrence of the string, exp, using the given options.
   */
  public find(exp: QString, options: QTextDocument.FindFlags): boolean;

  /**
   * Returns the font family of the current format.
   */
  public fontFamily(): QString;

  /**
   * Returns true if the font of the current format is italic; otherwise returns false.
   */
  public fontItalic(): boolean;

  /**
   * Returns the point size of the font of the current format.
   */
  public fontPointSize(): qreal;

  /**
   * Returns true if the font of the current format is underlined; otherwise returns false.
   */
  public fontUnderline(): boolean;

  /**
   * Returns the font weight of the current format.
   */
  public fontWeight(): int;

  public isReadOnly(): boolean;

  public isUndoRedoEnabled(): boolean;

  public lineWrapColumnOrWidth(): int;

  public lineWrapMode(): LineWrapMode;

  /**
   * Loads the resource specified by the given type and name.
   */
  public loadResource(type: int, name: QUrl): QVariant;

  /**
   * Merges the properties specified in modifier into the current character format by calling QTextCursor::mergeCharFormat on the editor's cursor.
   */
  public mergeCurrentCharFormat(modifier: QTextCharFormat): void;

  /**
   * Moves the cursor by performing the given operation.
   */
  public moveCursor(operation: QTextCursor.MoveOperation, mode: QTextCursor.MoveMode): void;

  public overwriteMode(): boolean;

  /**
   * Convenience function to print the text edit's document to the given printer.
   */
  public print(printer: QPrinter): void;

  /**
   * Constructs an empty QTextEdit with parent parent.
   */
  constructor(parent: QWidget);

  public setAcceptRichText(accept: boolean): void;

  public setAutoFormatting(features: QTextEdit.AutoFormatting): void;

  /**
   * Sets the char format that is be used when inserting new text to format by calling QTextCursor::setCharFormat() on the editor's cursor.
   */
  public setCurrentCharFormat(format: QTextCharFormat): void;

  public setCursorWidth(width: int): void;

  /**
   * Makes document the new document of the text editor.
   */
  public setDocument(document: QTextDocument): void;

  public setDocumentTitle(title: QString): void;

  /**
   * This function allows temporarily marking certain regions in the document with a given color, specified as selections.
   */
  public setExtraSelections(selections: QList<ExtraSelection>): void;

  public setLineWrapColumnOrWidth(w: int): void;

  public setLineWrapMode(mode: LineWrapMode): void;

  public setOverwriteMode(overwrite: boolean): void;

  public setReadOnly(ro: boolean): void;

  public setTabChangesFocus(b: boolean): void;

  public setTabStopWidth(width: int): void;

  /**
   * Sets the visible cursor.
   */
  public setTextCursor(cursor: QTextCursor): void;

  public setTextInteractionFlags(flags: Qt.TextInteractionFlags): void;

  public setUndoRedoEnabled(enable: boolean): void;

  public setWordWrapMode(policy: QTextOption.WrapMode): void;

  public tabChangesFocus(): boolean;

  public tabStopWidth(): int;

  /**
   * Returns the text background color of the current format.
   */
  public textBackgroundColor(): QColor;

  /**
   * Returns the text color of the current format.
   */
  public textColor(): QColor;

  /**
   * Returns a copy of the QTextCursor that represents the currently visible cursor.
   */
  public textCursor(): QTextCursor;

  public textInteractionFlags(): Qt.TextInteractionFlags;

  public toHtml(): QString;

  /**
   * Returns the text of the text edit as plain text.
   */
  public toPlainText(): QString;

  /**
   * the mode QTextEdit will use when wrapping text by words
   */
  public wordWrapMode(): QTextOption.WrapMode;

  /**
   * This property provides an HTML interface to the text of the text edit.
   */
  html: QString;

  /**
   * This property gets and sets the text editor's contents as plain text.
   */
  plainText: QString;

  /**
   * whether the text edit is read-only
   */
  readOnly: boolean;

  /**
   * whether undo and redo are enabled
   */
  undoRedoEnabled: boolean;
}
