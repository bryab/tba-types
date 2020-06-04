declare class QTableWidget extends QAbstractItemView {
  /**
   * Removes all items in the view.
   */
  public clear(): void;

  /**
   * Removes all items not in the headers from the view.
   */
  public clearContents(): void;

  /**
   * Inserts an empty column into the table at column.
   */
  public insertColumn(column: int): void;

  /**
   * Inserts an empty row into the table at row.
   */
  public insertRow(row: int): void;

  /**
   * Removes the column column and all its items from the table.
   */
  public removeColumn(column: int): void;

  /**
   * Removes the row row and all its items from the table.
   */
  public removeRow(row: int): void;

  /**
   * Scrolls the view if necessary to ensure that the item is visible.
   */
  public scrollToItem(item: QTableWidgetItem, hint: QAbstractItemView.ScrollHint): void;

  cellActivated: QSignal<(row: int, column: int) => void>;

  /**
   * This signal is emitted whenever the data of the item in the cell specified by row and column has changed.
   */
  cellChanged: QSignal<(row: int, column: int) => void>;

  /**
   * This signal is emitted whenever a cell in the table is clicked.
   */
  cellClicked: QSignal<(row: int, column: int) => void>;

  /**
   * This signal is emitted whenever a cell in the table is double clicked.
   */
  cellDoubleClicked: QSignal<(row: int, column: int) => void>;

  /**
   * This signal is emitted when the mouse cursor enters a cell.
   */
  cellEntered: QSignal<(row: int, column: int) => void>;

  /**
   * This signal is emitted whenever a cell in the table is pressed.
   */
  cellPressed: QSignal<(row: int, column: int) => void>;

  /**
   * This signal is emitted whenever the current cell changes.
   */
  currentCellChanged: QSignal<(currentRow: int, currentColumn: int, previousRow: int, previousColumn: int) => void>;

  /**
   * This signal is emitted whenever the current item changes.
   */
  currentItemChanged: QSignal<(current: QTableWidgetItem, previous: QTableWidgetItem) => void>;

  /**
   * This signal is emitted when the specified item has been activated.
   */
  itemActivated: QSignal<(item: QTableWidgetItem) => void>;

  /**
   * This signal is emitted whenever the data of item has changed.
   */
  itemChanged: QSignal<(item: QTableWidgetItem) => void>;

  /**
   * This signal is emitted whenever an item in the table is clicked.
   */
  itemClicked: QSignal<(item: QTableWidgetItem) => void>;

  /**
   * This signal is emitted whenever an item in the table is double clicked.
   */
  itemDoubleClicked: QSignal<(item: QTableWidgetItem) => void>;

  /**
   * This signal is emitted when the mouse cursor enters an item.
   */
  itemEntered: QSignal<(item: QTableWidgetItem) => void>;

  /**
   * This signal is emitted whenever an item in the table is pressed.
   */
  itemPressed: QSignal<(item: QTableWidgetItem) => void>;

  /**
   * This signal is emitted whenever the selection changes.
   */
  itemSelectionChanged: QSignal<() => void>;

  /**
   * Returns the widget displayed in the cell in the given row and column.
   */
  public cellWidget(row: int, column: int): QWidget;

  /**
   * Closes the persistent editor for item.
   */
  public closePersistentEditor(item: QTableWidgetItem): void;

  /**
   * Returns the column for the item.
   */
  public column(item: QTableWidgetItem): int;

  /**
   * Returns the column of the current item.
   */
  public currentColumn(): int;

  /**
   * Returns the current item.
   */
  public currentItem(): QTableWidgetItem;

  /**
   * Returns the row of the current item.
   */
  public currentRow(): int;

  /**
   * Starts editing the item if it is editable.
   */
  public editItem(item: QTableWidgetItem): void;

  /**
   * Finds items that matches the text using the given flags.
   */
  public findItems(text: QString, flags: Qt.MatchFlags): QList<QTableWidgetItem>;

  /**
   * Returns the horizontal header item for column, column, if one has been set; otherwise returns 0.
   */
  public horizontalHeaderItem(column: int): QTableWidgetItem;

  /**
   * Returns true if the item is selected, otherwise returns false.
   */
  public isItemSelected(item: QTableWidgetItem): boolean;

  public isSortingEnabled(): boolean;

  /**
   * Returns the item for the given row and column if one has been set; otherwise returns 0.
   */
  public item(row: int, column: int): QTableWidgetItem;

  /**
   * Returns a pointer to the item at the given point, or returns 0 if point is not covered by an item in the table widget.
   */
  public itemAt(p: QPoint): QTableWidgetItem;

  /**
   * Returns the item at the position equivalent to QPoint({ax}, {ay}) in the table widget's coordinate system, or returns 0 if the specified point is not covered by an item in the table widget.
   */
  public itemAt(x: int, y: int): QTableWidgetItem;

  /**
   * Returns the item prototype used by the table.
   */
  public itemPrototype(): QTableWidgetItem;

  /**
   * Opens an editor for the give item.
   */
  public openPersistentEditor(item: QTableWidgetItem): void;

  /**
   * Creates a new table view with the given parent.
   */
  constructor(parent: QWidget);

  /**
   * Creates a new table view with the given rows and columns, and with the given parent.
   */
  constructor(rows: int, columns: int, parent: QWidget);

  /**
   * Removes the widget set on the cell indicated by row and column.
   */
  public removeCellWidget(row: int, column: int): void;

  /**
   * Returns the row for the item.
   */
  public row(item: QTableWidgetItem): int;

  /**
   * Returns a list of all selected items.
   */
  public selectedItems(): QList<QTableWidgetItem>;

  /**
   * Returns a list of all selected ranges.
   */
  public selectedRanges(): QList<QTableWidgetSelectionRange>;

  /**
   * Sets the given widget to be displayed in the cell in the given row and column, passing the ownership of the widget to the table.
   */
  public setCellWidget(row: int, column: int, widget: QWidget): void;

  /**
   * Sets the number of columns in this table's model to columns.
   */
  public setColumnCount(columns: int): void;

  /**
   * Sets the current cell to be the cell at position (row, column).
   */
  public setCurrentCell(row: int, column: int): void;

  /**
   * Sets the current cell to be the cell at position (row, column), using the given command.
   */
  public setCurrentCell(row: int, column: int, command: QItemSelectionModel.SelectionFlags): void;

  /**
   * Sets the current item to item.
   */
  public setCurrentItem(item: QTableWidgetItem): void;

  /**
   * Sets the current item to be item, using the given command.
   */
  public setCurrentItem(item: QTableWidgetItem, command: QItemSelectionModel.SelectionFlags): void;

  /**
   * Sets the horizontal header item for column column to item.
   */
  public setHorizontalHeaderItem(column: int, item: QTableWidgetItem): void;

  /**
   * Sets the horizontal header labels using labels.
   */
  public setHorizontalHeaderLabels(labels: QStringList): void;

  /**
   * Sets the item for the given row and column to item.
   */
  public setItem(row: int, column: int, item: QTableWidgetItem): void;

  /**
   * Sets the item prototype for the table to the specified item.
   */
  public setItemPrototype(item: QTableWidgetItem): void;

  /**
   * Selects or deselects item depending on select.
   */
  public setItemSelected(item: QTableWidgetItem, select: boolean): void;

  /**
   * Selects or deselects the range depending on select.
   */
  public setRangeSelected(range: QTableWidgetSelectionRange, select: boolean): void;

  /**
   * Sets the number of rows in this table's model to rows.
   */
  public setRowCount(rows: int): void;

  public setSortingEnabled(enable: boolean): void;

  /**
   * Sets the vertical header item for row row to item.
   */
  public setVerticalHeaderItem(row: int, item: QTableWidgetItem): void;

  /**
   * Sets the vertical header labels using labels.
   */
  public setVerticalHeaderLabels(labels: QStringList): void;

  /**
   * Sorts all the rows in the table widget based on column and order.
   */
  public sortItems(column: int, order: Qt.SortOrder): void;

  /**
   * Removes the horizontal header item at column from the header without deleting it.
   */
  public takeHorizontalHeaderItem(column: int): QTableWidgetItem;

  /**
   * Removes the item at row and column from the table without deleting it.
   */
  public takeItem(row: int, column: int): QTableWidgetItem;

  /**
   * Removes the vertical header item at row from the header without deleting it.
   */
  public takeVerticalHeaderItem(row: int): QTableWidgetItem;

  /**
   * Returns the vertical header item for row row.
   */
  public verticalHeaderItem(row: int): QTableWidgetItem;

  /**
   * Returns the visual column of the given logicalColumn.
   */
  public visualColumn(logicalColumn: int): int;

  /**
   * Returns the rectangle on the viewport occupied by the item at item.
   */
  public visualItemRect(item: QTableWidgetItem): QRect;

  /**
   * Returns the visual row of the given logicalRow.
   */
  public visualRow(logicalRow: int): int;

  /**
   * the number of columns in the table
   */
  columnCount: int;

  /**
   * the number of rows in the table
   */
  rowCount: int;


  public resizeRowsToContents(): void;
}
