declare namespace QItemSelectionModel {
  /**
   * This enum describes the way the selection model will be updated.
   */
  enum SelectionFlag {
    Clear,
    Select,
    Deselect,
    Current,
    Rows,
    Columns,
    ToggleCurrent,
    ClearAndSelect
  }

  type SelectionFlags = SelectionFlag;
}

declare class QItemSelectionModel {
  /**
   * Clears the selection model.
   */
  public clear(): void;

  /**
   * Clears the selection in the selection model.
   */
  public clearSelection(): void;

  /**
   * Clears the selection model.
   */
  public reset(): void;

  /**
   * Selects the model item index using the specified command, and emits selectionChanged().
   */
  public select(index: QModelIndex, command: QItemSelectionModel.SelectionFlags): void;

  /**
   * Selects the item selection using the specified command, and emits selectionChanged().
   */
  public select(selection: QItemSelection, command: QItemSelectionModel.SelectionFlags): void;

  /**
   * Sets the model item index to be the current item, and emits currentChanged().
   */
  public setCurrentIndex(index: QModelIndex, command: QItemSelectionModel.SelectionFlags): void;

  /**
   * This signal is emitted whenever the current item changes.
   */
  currentChanged: QSignal<(current: QModelIndex, previous: QModelIndex) => void>;

  /**
   * This signal is emitted if the current item changes and its column is different to the column of the previous current item.
   */
  currentColumnChanged: QSignal<(current: QModelIndex, previous: QModelIndex) => void>;

  /**
   * This signal is emitted if the current item changes and its row is different to the row of the previous current item.
   */
  currentRowChanged: QSignal<(current: QModelIndex, previous: QModelIndex) => void>;

  /**
   * This signal is emitted whenever the selection changes.
   */
  selectionChanged: QSignal<(selected: QItemSelection, deselected: QItemSelection) => void>;

  /**
   * Returns true if there are any items selected in the column with the given parent.
   */
  public columnIntersectsSelection(column: int, parent: QModelIndex): boolean;

  /**
   * Returns the model item index for the current item, or an invalid index if there is no current item.
   */
  public currentIndex(): QModelIndex;

  /**
   * Returns true if the selection model contains any selection ranges; otherwise returns false.
   */
  public hasSelection(): boolean;

  /**
   * Returns true if all items are selected in the column with the given parent.
   */
  public isColumnSelected(column: int, parent: QModelIndex): boolean;

  /**
   * Returns true if all items are selected in the row with the given parent.
   */
  public isRowSelected(row: int, parent: QModelIndex): boolean;

  /**
   * Returns true if the given model item index is selected.
   */
  public isSelected(index: QModelIndex): boolean;

  /**
   * Returns the item model operated on by the selection model.
   */
  public model(): QAbstractItemModel;

  /**
   * Constructs a selection model that operates on the specified item model.
   */
  constructor(model: QAbstractItemModel);

  /**
   * Constructs a selection model that operates on the specified item model with parent.
   */
  constructor(model: QAbstractItemModel, parent: QObject);

  /**
   * Returns true if there are any items selected in the row with the given parent.
   */
  public rowIntersectsSelection(row: int, parent: QModelIndex): boolean;

  /**
   * Returns the indexes in the given row for columns where all rows are selected.
   */
  public selectedColumns(row: int): QModelIndexList;

  /**
   * Returns a list of all selected model item indexes.
   */
  public selectedIndexes(): QModelIndexList;

  /**
   * Returns the indexes in the given column for the rows where all columns are selected.
   */
  public selectedRows(column: int): QModelIndexList;

  /**
   * Returns the selection ranges stored in the selection model.
   */
  public selection(): QItemSelection;
}
