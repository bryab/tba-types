declare class QTextBrowser extends QTextEdit {
  /**
   * Changes the document displayed to the previous document in the list of documents built by navigating links.
   */
  public backward(): void;

  /**
   * Changes the document displayed to the next document in the list of documents built by navigating links.
   */
  public forward(): void;

  /**
   * Changes the document displayed to be the first document from the history.
   */
  public home(): void;

  /**
   * Reloads the current set source.
   */
  public reload(): void;

  public setSource(name: QUrl): void;

  /**
   * This signal is emitted when the user clicks an anchor.
   */
  anchorClicked: QSignal<(unknown_1: QUrl) => void>;

  /**
   * This signal is emitted when the availability of backward() changes.
   */
  backwardAvailable: QSignal<(unknown_1: boolean) => void>;

  /**
   * This signal is emitted when the availability of forward() changes.
   */
  forwardAvailable: QSignal<(unknown_1: boolean) => void>;

  /**
   * This signal is emitted when the user has selected but not activated an anchor in the document.
   */
  highlighted: QSignal<(unknown_1: QUrl) => void>;

  /**
   * Convenience signal that allows connecting to a slot that takes just a QString, like for example QStatusBar's message().
   */
  //highlighted: QSignal<(unknown_1: QString) => void>;

  /**
   * This signal is emitted when the history changes.
   */
  historyChanged: QSignal<() => void>;

  /**
   * This signal is emitted when the source has changed, src being the new source.
   */
  sourceChanged: QSignal<(unknown_1: QUrl) => void>;

  /**
   * Returns the number of locations backward in the history.
   */
  public backwardHistoryCount(): int;

  /**
   * Clears the history of visited documents and disables the forward and backward navigation.
   */
  public clearHistory(): void;

  /**
   * Returns the number of locations forward in the history.
   */
  public forwardHistoryCount(): int;

  /**
   * Returns the documentTitle() of the HistoryItem.
   */
  public historyTitle(unknown_1: int): QString;

  /**
   * Returns the url of the HistoryItem.
   */
  public historyUrl(unknown_1: int): QUrl;

  /**
   * Returns true if the text browser can go backward in the document history using backward().
   */
  public isBackwardAvailable(): boolean;

  /**
   * Returns true if the text browser can go forward in the document history using forward().
   */
  public isForwardAvailable(): boolean;

  /**
   * This function is called when the document is loaded and for each image in the document.
   */
  public loadResource(type: int, name: QUrl): QVariant;

  /**
   * Constructs an empty QTextBrowser with parent parent.
   */
  constructor(parent: QWidget);

  public setOpenExternalLinks(open: boolean): void;

  public setOpenLinks(open: boolean): void;

  public setSearchPaths(paths: QStringList): void;

  /**
   * Specifies whether QTextBrowser should automatically open links to external sources using QDesktopServices::openUrl() instead of emitting the anchorClicked signal.
   */
  openExternalLinks: boolean;

  /**
   * This property specifies whether QTextBrowser should automatically open links the user tries to activate by mouse or keyboard.
   */
  openLinks: boolean;

  /**
   * the search paths used by the text browser to find supporting content
   */
  searchPaths: QStringList;

  /**
   * the name of the displayed document.
   */
  source: QUrl;
}
