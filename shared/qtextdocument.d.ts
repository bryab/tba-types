declare namespace QTextDocument {
  /**
   * This enum describes the options available to QTextDocument's find function.
   */
  enum FindFlag {
    FindCaseSensitively,
    FindWholeWords
  }

  type FindFlags = FindFlag;

  /**
   * This enum describes the different types of meta information that can be added to a document.
   */
  enum MetaInformation {
    DocumentUrl
  }

  /**
   * This enum describes the types of resources that can be loaded by QTextDocument's loadResource() function.
   */
  enum ResourceType {
    ImageResource,
    StyleSheetResource,
    UserResource
  }

  enum Stacks {
    RedoStack,
    UndoAndRedoStacks
  }
}

declare class QTextDocument {
  /**
   * Appends a custom undo item to the undo stack.
   */
  public appendUndoItem(unknown: QAbstractUndoItem): void;

  /**
   * Redoes the last editing operation on the document if redo is available.
   */
  public redo(): void;

  public setModified(m: boolean): void;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
   */
  public undo(): void;

  /**
   * This signal is emitted when the total number of text blocks in the document changes.
   */
  blockCountChanged: QSignal<(newBlockCount: int) => void>;

  /**
   * This signal is emitted whenever the document's content changes; for example, when text is inserted or deleted, or when formatting is applied.
   */
  contentsChange: QSignal<(from: int, charsRemoves: int, charsAdded: int) => void>;

  /**
   * This signal is emitted whenever the document's content changes; for example, when text is inserted or deleted, or when formatting is applied.
   */
  contentsChanged: QSignal<() => void>;

  /**
   * This signal is emitted whenever the position of a cursor changed due to an editing operation.
   */
  cursorPositionChanged: QSignal<(cursor: QTextCursor) => void>;

  /**
   * This signal is emitted when a new document layout is set.
   */
  documentLayoutChanged: QSignal<() => void>;

  /**
   * This signal is emitted whenever the content of the document changes in a way that affects the modification state.
   */
  modificationChanged: QSignal<(m: boolean) => void>;

  /**
   * This signal is emitted whenever redo operations become available (available is true) or unavailable (available is false).
   */
  redoAvailable: QSignal<(unknown_1: boolean) => void>;

  /**
   * This signal is emitted whenever undo operations become available (available is true) or unavailable (available is false).
   */
  undoAvailable: QSignal<(unknown_1: boolean) => void>;

  /**
   * This signal is emitted every time a new level of undo is added to the QTextDocument.
   */
  undoCommandAdded: QSignal<() => void>;

  /**
   * Adds the resource resource to the resource cache, using type and name as identifiers.
   */
  public addResource(type: int, name: QUrl, resource: QVariant): void;

  /**
   * Adjusts the document to a reasonable size.
   */
  public adjustSize(): void;

  /**
   * Returns a vector of text formats for all the formats used in the document.
   */
  public allFormats(): QVector<QTextFormat>;

  /**
   * Returns the number of available redo steps.
   */
  public availableRedoSteps(): int;

  /**
   * Returns the number of available undo steps.
   */
  public availableUndoSteps(): int;

  /**
   * Returns the document's first text block.
   */
  public begin(): QTextBlock;

  /**
   * Returns the character at position pos, or a null character if the position is out of range.
   */
  public characterAt(pos: int): QChar;

  /**
   * Returns the number of characters of this document.
   */
  public characterCount(): int;

  /**
   * Clears the document.
   */
  public clear(): void;

  /**
   * Clears the stacks specified by stacksToClear.
   */
  public clearUndoRedoStacks(historyToClear: QTextDocument.Stacks): void;

  /**
   * Creates a new QTextDocument that is a copy of this text document.
   */
  public clone(parent: QObject): QTextDocument;

  /**
   * The default cursor movement style is used by all QTextCursor objects created from the document.
   */
  public defaultCursorMoveStyle(): Qt.CursorMoveStyle;

  /**
   * the default text option will be set on all QTextLayout in the document.
   */
  public defaultTextOption(): QTextOption;

  /**
   * So that not all classes have to be friends of each other.
   */
  public docHandle(): QTextDocumentPrivate;

  /**
   * Returns the document layout for this document.
   */
  public documentLayout(): QAbstractTextDocumentLayout;

  /**
   * Draws the content of the document with painter p, clipped to rect.
   */
  public drawContents(painter: QPainter, rect: QRectF): void;

  /**
   * This function returns a block to test for the end of the document while iterating over it.
   */
  public end(): QTextBlock;

  /**
   * Finds the next occurrence of the string, subString, in the document.
   */
  public find(subString: QString, from: int, options: FindFlags): QTextCursor;

  /**
   * Finds the next occurrence of the string, subString, in the document.
   */
  public find(subString: QString, from: QTextCursor, options: FindFlags): QTextCursor;

  /**
   * Finds the next occurrence, matching the regular expression, expr, in the document.
   */
  public find(expr: QRegExp, from: int, options: FindFlags): QTextCursor;

  /**
   * Finds the next occurrence, matching the regular expression, expr, in the document.
   */
  public find(expr: QRegExp, from: QTextCursor, options: FindFlags): QTextCursor;

  /**
   * Returns the text block that contains the {pos}-th character.
   */
  public findBlock(pos: int): QTextBlock;

  /**
   * Returns the text block that contains the specified lineNumber.
   */
  public findBlockByLineNumber(blockNumber: int): QTextBlock;

  /**
   * Returns the text block with the specified blockNumber.
   */
  public findBlockByNumber(blockNumber: int): QTextBlock;

  /**
   * Returns the document's first text block.
   */
  public firstBlock(): QTextBlock;

  /**
   * Returns the frame that contains the text cursor position pos.
   */
  public frameAt(pos: int): QTextFrame;

  /**
   * Returns the ideal width of the text document.
   */
  public idealWidth(): qreal;

  /**
   * Returns true if the document is empty; otherwise returns false.
   */
  public isEmpty(): boolean;

  public isModified(): boolean;

  /**
   * Returns true if redo is available; otherwise returns false.
   */
  public isRedoAvailable(): boolean;

  /**
   * Returns true if undo is available; otherwise returns false.
   */
  public isUndoAvailable(): boolean;

  public isUndoRedoEnabled(): boolean;

  /**
   * Returns the document's last (valid) text block.
   */
  public lastBlock(): QTextBlock;

  /**
   * Returns the number of lines of this document (if the layout supports this).
   */
  public lineCount(): int;

  /**
   * Marks the contents specified by the given position and length as "dirty", informing the document that it needs to be laid out again.
   */
  public markContentsDirty(from: int, length: int): void;

  /**
   * Returns meta information about the document of the type specified by info.
   */
  public metaInformation(info: QTextDocument.MetaInformation): QString;

  /**
   * Returns the text object associated with the given objectIndex.
   */
  public object(objectIndex: int): QTextObject;

  /**
   * Returns the text object associated with the format f.
   */
  public objectForFormat(unknown_1: QTextFormat): QTextObject;

  /**
   * returns the number of pages in this document.
   */
  public pageCount(): int;

  /**
   * Prints the document to the given printer.
   */
  public print(printer: QPrinter): void;

  /**
   * Constructs an empty QTextDocument with the given parent.
   */
  constructor(parent: QObject);

  /**
   * Constructs a QTextDocument containing the plain (unformatted) text specified, and with the given parent.
   */
  constructor(text: QString, parent: QObject);

  /**
   * Redoes the last editing operation on the document if redo is available.
   */
  public redo(cursor: QTextCursor): void;

  /**
   * Returns data of the specified type from the resource with the given name.
   */
  public resource(type: int, name: QUrl): QVariant;

  /**
   * Returns the document's revision (if undo is enabled).
   */
  public revision(): int;

  /**
   * Returns the document's root frame.
   */
  public rootFrame(): QTextFrame;

  /**
   * Sets the default cursor movement style to the given style.
   */
  public setDefaultCursorMoveStyle(style: Qt.CursorMoveStyle): void;

  /**
   * Sets the default font to use in the document layout.
   */
  public setDefaultFont(font: QFont): void;

  public setDefaultStyleSheet(sheet: QString): void;

  /**
   * Sets the default text option.
   */
  public setDefaultTextOption(option: QTextOption): void;

  /**
   * Sets the document to use the given layout.
   */
  public setDocumentLayout(layout: QAbstractTextDocumentLayout): void;

  public setDocumentMargin(margin: qreal): void;

  /**
   * Replaces the entire contents of the document with the given HTML-formatted text in the html string.
   */
  public setHtml(html: QString): void;

  /**
   * Sets the width used for text list and text block indenting.
   */
  public setIndentWidth(width: qreal): void;

  public setMaximumBlockCount(maximum: int): void;

  /**
   * Sets the document's meta information of the type specified by info to the given string.
   */
  public setMetaInformation(info: QTextDocument.MetaInformation, unknown_2: QString): void;

  public setPageSize(size: QSizeF): void;

  /**
   * Replaces the entire contents of the document with the given plain text.
   */
  public setPlainText(text: QString): void;

  public setTextWidth(width: qreal): void;

  public setUndoRedoEnabled(enable: boolean): void;

  public setUseDesignMetrics(b: boolean): void;

  /**
   * Returns a string containing an HTML representation of the document.
   */
  public toHtml(encoding: QByteArray): QString;

  /**
   * Returns the plain text contained in the document.
   */
  public toPlainText(): QString;

  /**
   * Undoes the last editing operation on the document if undo is available.
   */
  public undo(cursor: QTextCursor): void;

  /**
   * Returns the number of text blocks in the document.
   */
  blockCount: int;

  /**
   * the default font used to display the document's text
   */
  defaultFont: QFont;

  /**
   * The default style sheet is applied to all newly HTML formatted text that is inserted into the document, for example using setHtml() or QTextCursor::insertHtml().
   */
  defaultStyleSheet: QString;

  /**
   * The margin around the document.
   */
  documentMargin: qreal;

  /**
   * Returns the width used for text list and text block indenting.
   */
  indentWidth: qreal;

  /**
   * Specifies the limit for blocks in the document.
   */
  maximumBlockCount: int;

  /**
   * whether the document has been modified by the user
   */
  modified: boolean;

  /**
   * the page size that should be used for laying out the document
   */
  pageSize: QSizeF;

  /**
   * Returns the actual size of the document.
   */
  size: QSizeF;

  /**
   * The text width specifies the preferred width for text in the document.
   */
  textWidth: qreal;

  /**
   * whether undo/redo are enabled for this document
   */
  undoRedoEnabled: boolean;

  /**
   * whether the document uses design metrics of fonts to improve the accuracy of text layout
   */
  useDesignMetrics: boolean;
}
