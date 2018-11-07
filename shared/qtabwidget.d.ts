declare namespace QTabWidget {
  /**
   * This enum type defines where QTabWidget draws the tab row:
   */
  enum TabPosition {
    South,
    West,
    East
  }

  /**
   * This enum type defines the shape of the tabs:
   */
  enum TabShape {
    Triangular
  }
}

declare class QTabWidget extends QWidget {
  public setCurrentIndex(index: int): void;

  /**
   * Makes widget the current widget.
   */
  public setCurrentWidget(widget: QWidget): void;

  /**
   * This signal is emitted whenever the current page index changes.
   */
  currentChanged: QSignal<(index: int) => void>;

  /**
   * This signal is emitted when the close button on a tab is clicked.
   */
  tabCloseRequested: QSignal<(index: int) => void>;

  /**
   * Adds a tab with the given page and label to the tab widget, and returns the index of the tab in the tab bar.
   */
  public addTab(widget: QWidget, unknown_2: QString): int;

  /**
   * Removes all the pages, but does not delete them.
   */
  public clear(): void;

  /**
   * Returns the widget shown in the corner of the tab widget or 0.
   */
  public cornerWidget(corner: Qt.Corner): QWidget;

  public count(): int;

  public currentIndex(): int;

  /**
   * Returns a pointer to the page currently being displayed by the tab dialog.
   */
  public currentWidget(): QWidget;

  public documentMode(): boolean;

  public elideMode(): Qt.TextElideMode;

  /**
   * Reimplemented Function
   */
  public heightForWidth(width: int): int;

  public iconSize(): QSize;

  /**
   * Returns the index position of the page occupied by the widget w, or -1 if the widget cannot be found.
   */
  public indexOf(widget: QWidget): int;

  /**
   * Inserts a tab with the given label and page into the tab widget at the specified index, and returns the index of the inserted tab in the tab bar.
   */
  public insertTab(index: int, widget: QWidget, unknown_3: QString): int;

  public isMovable(): boolean;

  /**
   * Returns true if the page at position index is enabled; otherwise returns false.
   */
  public isTabEnabled(index: int): boolean;

  /**
   * Returns a suitable minimum size for the tab widget.
   */
  public minimumSizeHint(): QSize;

  /**
   * Constructs a tabbed widget with parent parent.
   */
  constructor(parent: QWidget);

  /**
   * Removes the tab at position index from this stack of widgets.
   */
  public removeTab(index: int): void;

  /**
   * Sets the given widget to be shown in the specified corner of the tab widget.
   */
  public setCornerWidget(w: QWidget, corner: Qt.Corner): void;

  public setDocumentMode(set: boolean): void;

  public setElideMode(unknown_1: Qt.TextElideMode): void;

  public setIconSize(size: QSize): void;

  public setMovable(movable: boolean): void;

  /**
   * If enable is true, the page at position index is enabled; otherwise the page at position index is disabled.
   */
  public setTabEnabled(index: int, unknown_2: boolean): void;

  /**
   * Sets the icon for the tab at position index.
   */
  public setTabIcon(index: int, icon: QIcon): void;

  public setTabPosition(unknown_1: TabPosition): void;

  public setTabsClosable(closeable: boolean): void;

  public setTabShape(s: TabShape): void;

  /**
   * Defines a new label for the page at position index's tab.
   */
  public setTabText(index: int, unknown_2: QString): void;

  /**
   * Sets the tab tool tip for the page at position index to tip.
   */
  public setTabToolTip(index: int, tip: QString): void;

  /**
   * Sets the What's This help text for the page at position index to text.
   */
  public setTabWhatsThis(index: int, text: QString): void;

  public setUsesScrollButtons(useButtons: boolean): void;

  /**
   * Reimplemented Function
   */
  public sizeHint(): QSize;

  /**
   * Returns the icon for the tab on the page at position index.
   */
  public tabIcon(index: int): QIcon;

  public tabPosition(): TabPosition;

  public tabsClosable(): boolean;

  public tabShape(): TabShape;

  /**
   * Returns the label text for the tab on the page at position index.
   */
  public tabText(index: int): QString;

  /**
   * Returns the tab tool tip for the page at position index or an empty string if no tool tip has been set.
   */
  public tabToolTip(index: int): QString;

  /**
   * Returns the What's This help text for the page at position index, or an empty string if no help text has been set.
   */
  public tabWhatsThis(index: int): QString;

  public usesScrollButtons(): boolean;

  /**
   * Returns the tab page at index position index or 0 if the index is out of range.
   */
  public widget(index: int): QWidget;

  /**
   * This property holds whether the user can move the tabs within the tabbar area.
   */
  movable: boolean;
}
