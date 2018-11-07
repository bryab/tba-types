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

  /**
   * Returns this label's buddy, or 0 if no buddy is currently set.
   */
  public buddy(): QWidget;

  public hasScaledContents(): boolean;

  /**
   * Returns a pointer to the label's movie, or 0 if no movie has been set.
   */
  public movie(): QMovie;

  /**
   * Returns the label's picture or 0 if the label doesn't have a picture.
   */
  public picture(): QPicture;

  /**
   * Constructs an empty label.
   */
  constructor(parent: QWidget, f: Qt.WindowFlags);

  /**
   * Constructs a label that displays the text, text.
   */
  constructor(text: QString, parent: QWidget, f: Qt.WindowFlags);

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
   * the alignment of the label's contents
   */
  alignment: Qt.Alignment;

  /**
   * whether there is any text selected
   */
  hasSelectedText: boolean;

  /**
   * the label's text indent in pixels
   */
  indent: int;

  /**
   * the width of the margin
   */
  margin: int;

  /**
   * Specifies whether QLabel should automatically open links using QDesktopServices::openUrl() instead of emitting the linkActivated() signal.
   */
  openExternalLinks: boolean;

  /**
   * the label's pixmap
   */
  pixmap: QPixmap;

  /**
   * whether the label will scale its contents to fill all available space.
   */
  scaledContents: boolean;

  /**
   * the selected text
   */
  selectedText: QString;

  /**
   * the label's text
   */
  text: QString;

  /**
   * the label's text format
   */
  textFormat: Qt.TextFormat;

  /**
   * Specifies how the label should interact with user input if it displays text.
   */
  textInteractionFlags: Qt.TextInteractionFlags;

  /**
   * the label's word-wrapping policy
   */
  wordWrap: boolean;
}
