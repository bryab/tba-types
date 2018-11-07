declare class QLabel extends QFrame {
  /**
   * Clears any label contents.
   */
  public clear(): void;

  /**
   * Sets the label contents to movie.
   */
  public setMovie(movie: QMovie): void;

  /**
   * Sets the label contents to plain text containing the textual representation of integer num.
   */
  public setNum(unknown_1: int): void;

  /**
   * Sets the label contents to plain text containing the textual representation of double num.
   */
  public setNum(unknown_1: double): void;

  /**
   * Sets the label contents to picture.
   */
  public setPicture(unknown_1: QPicture): void;

  public setPixmap(unknown_1: QPixmap): void;

  public setText(unknown_1: QString): void;

  /**
   * This signal is emitted when the user clicks a link.
   */
  linkActivated: QSignal<(link: QString) => void>;

  /**
   * This signal is emitted when the user hovers over a link.
   */
  linkHovered: QSignal<(link: QString) => void>;

  public alignment(): Qt.Alignment;

  /**
   * Returns this label's buddy, or 0 if no buddy is currently set.
   */
  public buddy(): QWidget;

  public hasScaledContents(): boolean;

  public hasSelectedText(): boolean;

  /**
   * Reimplemented Function
   */
  public heightForWidth(unknown_1: int): int;

  public indent(): int;

  public margin(): int;

  /**
   * Reimplemented Function
   */
  public minimumSizeHint(): QSize;

  /**
   * Returns a pointer to the label's movie, or 0 if no movie has been set.
   */
  public movie(): QMovie;

  public openExternalLinks(): boolean;

  /**
   * Returns the label's picture or 0 if the label doesn't have a picture.
   */
  public picture(): QPicture;

  public pixmap(): QPixmap;

  /**
   * Constructs an empty label.
   */
  constructor(parent: QWidget, f: Qt.WindowFlags);

  /**
   * Constructs a label that displays the text, text.
   */
  constructor(text: QString, parent: QWidget, f: Qt.WindowFlags);

  public selectedText(): QString;

  /**
   * selectionStart() returns the index of the first selected character in the label or -1 if no text is selected.
   */
  public selectionStart(): int;

  /**
   * Without this function, a call to e.
   */
  public setAlignment(unknown_1: Qt.Alignment): void;

  /**
   * Sets this label's buddy to buddy.
   */
  public setBuddy(unknown: QWidget): void;

  public setIndent(unknown_1: int): void;

  public setMargin(unknown_1: int): void;

  public setOpenExternalLinks(open: boolean): void;

  public setScaledContents(unknown_1: boolean): void;

  /**
   * Selects text from position start and for length characters.
   */
  public setSelection(unknown_1: int, unknown_2: int): void;

  public setTextFormat(unknown_1: Qt.TextFormat): void;

  public setTextInteractionFlags(flags: Qt.TextInteractionFlags): void;

  public setWordWrap(on: boolean): void;

  /**
   * em>Reimplemented Function
   */
  public sizeHint(): QSize;

  public text(): QString;

  public textFormat(): Qt.TextFormat;

  public textInteractionFlags(): Qt.TextInteractionFlags;

  public wordWrap(): boolean;
}
