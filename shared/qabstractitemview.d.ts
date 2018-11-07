declare namespace QAbstractItemView {
  /**
   * Describes the various drag and drop events the view can act upon.
   */
  enum DragDropMode {
    DragOnly,
    DropOnly,
    DragDrop
  }

  /**
   * This enum describes actions which will initiate item editing.
   */
  enum EditTrigger {
    CurrentChanged,
    DoubleClicked,
    SelectedClicked,
    AnyKeyPressed,
    AllEditTriggers
  }

  enum ScrollHint {
    PositionAtTop,
    PositionAtBottom,
    PositionAtCenter
  }

  enum ScrollMode {
    ScrollPerPixel
  }

  enum SelectionBehavior {
    SelectRows,
    SelectColumns
  }

  /**
   * This enum indicates how the view responds to user selections:
   */
  enum SelectionMode {
    SingleSelection,
    MultiSelection,
    ExtendedSelection
  }
}

declare class QAbstractItemView extends QFrame {
  /**
   * Deselects all selected items.
   */
  public clearSelection(): void;

  /**
   * This function is intended to lay out the items in the view.
   */
  public doItemsLayout(): void;

  /**
   * Starts editing the item corresponding to the given index if it is editable.
   */
  public edit(index: QModelIndex): void;

  /**
   * Reset the internal state of the view.
   */
  public reset(): void;

  /**
   * Scrolls the view to the bottom.
   */
  public scrollToBottom(): void;

  /**
   * Scrolls the view to the top.
   */
  public scrollToTop(): void;

  /**
   * Selects all items in the view.
   */
  public selectAll(): void;

  /**
   * Sets the current item to be the item at index.
   */
  public setCurrentIndex(index: QModelIndex): void;

  /**
   * Sets the root item to the item at the given index.
   */
  public setRootIndex(index: QModelIndex): void;

  /**
   * Updates the area occupied by the given index.
   */
  //public update(index: QModelIndex): void;

  /**
   * This signal is emitted when the item specified by index is activated by the user.
   */
  activated: QSignal<(index: QModelIndex) => void>;

  /**
   * This signal is emitted when a mouse button is clicked.
   */
  clicked: QSignal<(index: QModelIndex) => void>;

  /**
   * This signal is emitted when a mouse button is double-clicked.
   */
  doubleClicked: QSignal<(index: QModelIndex) => void>;

  /**
   * This signal is emitted when the mouse cursor enters the item specified by index.
   */
  entered: QSignal<(index: QModelIndex) => void>;

  /**
   * This signal is emitted when a mouse button is pressed.
   */
  pressed: QSignal<(index: QModelIndex) => void>;

  /**
   * This signal is emitted when the mouse cursor enters the viewport.
   */
  viewportEntered: QSignal<() => void>;

  /**
   * Closes the persistent editor for the item at the given index.
   */
  public closePersistentEditor(index: QModelIndex): void;

  /**
   * Returns the model index of the current item.
   */
  public currentIndex(): QModelIndex;

  public hasAutoScroll(): boolean;

  /**
   * Returns the model index of the item at the viewport coordinates point.
   */
  public indexAt(point: QPoint): QModelIndex;

  /**
   * Returns the widget for the item at the given index.
   */
  public indexWidget(index: QModelIndex): QWidget;

  /**
   * Returns the item delegate used by this view and model.
   */
  public itemDelegate(): QAbstractItemDelegate;

  /**
   * Returns the item delegate used by this view and model for the given index.
   */
  public itemDelegate(index: QModelIndex): QAbstractItemDelegate;

  /**
   * Returns the item delegate used by this view and model for the given column.
   */
  public itemDelegateForColumn(column: int): QAbstractItemDelegate;

  /**
   * Returns the item delegate used by this view and model for the given row, or 0 if no delegate has been assigned.
   */
  public itemDelegateForRow(row: int): QAbstractItemDelegate;

  /**
   * Moves to and selects the item best matching the string search.
   */
  public keyboardSearch(search: QString): void;

  /**
   * Returns the model that this view is presenting.
   */
  public model(): QAbstractItemModel;

  /**
   * Opens a persistent editor on the item at the given index.
   */
  public openPersistentEditor(index: QModelIndex): void;

  /**
   * Constructs an abstract item view with the given parent.
   */
  constructor(parent: QWidget);

  /**
   * Returns the model index of the model's root item.
   */
  public rootIndex(): QModelIndex;

  /**
   * Scrolls the view if necessary to ensure that the item at index is visible.
   */
  public scrollTo(index: QModelIndex, hint: QAbstractItemView.ScrollHint): void;

  /**
   * Returns the current selection model.
   */
  public selectionModel(): QItemSelectionModel;

  public setAlternatingRowColors(enable: boolean): void;

  public setAutoScroll(enable: boolean): void;

  public setAutoScrollMargin(margin: int): void;

  public setDefaultDropAction(dropAction: Qt.DropAction): void;

  public setDragDropMode(behavior: QAbstractItemView.DragDropMode): void;

  public setDragDropOverwriteMode(overwrite: boolean): void;

  public setDragEnabled(enable: boolean): void;

  public setDropIndicatorShown(enable: boolean): void;

  public setEditTriggers(triggers: EditTriggers): void;

  public setHorizontalScrollMode(mode: QAbstractItemView.ScrollMode): void;

  public setIconSize(size: QSize): void;

  /**
   * Sets the given widget on the item at the given index, passing the ownership of the widget to the viewport.
   */
  public setIndexWidget(index: QModelIndex, widget: QWidget): void;

  /**
   * Sets the item delegate for this view and its model to delegate.
   */
  public setItemDelegate(delegate: QAbstractItemDelegate): void;

  /**
   * Sets the given item delegate used by this view and model for the given column.
   */
  public setItemDelegateForColumn(column: int, delegate: QAbstractItemDelegate): void;

  /**
   * Sets the given item delegate used by this view and model for the given row.
   */
  public setItemDelegateForRow(row: int, delegate: QAbstractItemDelegate): void;

  /**
   * Sets the model for the view to present.
   */
  public setModel(model: QAbstractItemModel): void;

  public setSelectionBehavior(behavior: QAbstractItemView.SelectionBehavior): void;

  public setSelectionMode(mode: QAbstractItemView.SelectionMode): void;

  /**
   * Sets the current selection model to the given selectionModel.
   */
  public setSelectionModel(selectionModel: QItemSelectionModel): void;

  public setTabKeyNavigation(enable: boolean): void;

  public setTextElideMode(mode: Qt.TextElideMode): void;

  public setVerticalScrollMode(mode: QAbstractItemView.ScrollMode): void;

  /**
   * Returns the width size hint for the specified column or -1 if there is no model.
   */
  public sizeHintForColumn(column: int): int;

  /**
   * Returns the size hint for the item with the specified index or an invalid size for invalid indexes.
   */
  public sizeHintForIndex(index: QModelIndex): QSize;

  /**
   * Returns the height size hint for the specified row or -1 if there is no model.
   */
  public sizeHintForRow(row: int): int;

  /**
   * Returns the rectangle on the viewport occupied by the item at index.
   */
  public visualRect(index: QModelIndex): QRect;

  /**
   * whether to draw the background using alternating colors
   */
  alternatingRowColors: boolean;

  /**
   * whether autoscrolling in drag move events is enabled
   */
  autoScroll: boolean;

  /**
   * the size of the area when auto scrolling is triggered
   */
  autoScrollMargin: int;

  /**
   * the drop action that will be used by default in QAbstractItemView::drag()
   */
  defaultDropAction: Qt.DropAction;

  /**
   * the drag and drop event the view will act upon
   */
  dragDropMode: DragDropMode;

  /**
   * the view's drag and drop behavior
   */
  dragDropOverwriteMode: boolean;

  /**
   * whether the view supports dragging of its own items
   */
  dragEnabled: boolean;

  /**
   * which actions will initiate item editing
   */
  editTriggers: EditTriggers;

  /**
   * how the view scrolls its contents in the horizontal direction
   */
  horizontalScrollMode: ScrollMode;

  /**
   * the size of items' icons
   */
  iconSize: QSize;

  /**
   * which selection behavior the view uses
   */
  selectionBehavior: SelectionBehavior;

  /**
   * which selection mode the view operates in
   */
  selectionMode: SelectionMode;

  /**
   * whether the drop indicator is shown when dragging items and dropping.
   */
  showDropIndicator: boolean;

  /**
   * whether item navigation with tab and backtab is enabled.
   */
  tabKeyNavigation: boolean;

  /**
   * the position of the "..." in elided text.
   */
  textElideMode: Qt.TextElideMode;

  /**
   * how the view scrolls its contents in the vertical direction
   */
  verticalScrollMode: ScrollMode;
}
