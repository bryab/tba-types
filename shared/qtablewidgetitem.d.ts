declare namespace QTableWidgetItem {
  /**
   * This enum describes the types that are used to describe table widget items.
   */
  enum ItemType {
    UserType,
  }
}

declare class QTableWidgetItem {
  /**
   * Returns the brush used to render the item's background.
   */
  public background(): QBrush;

  /**
   * This function is deprecated.
   */
  public backgroundColor(): QColor;

  /**
   * Returns the checked state of the table item.
   */
  public checkState(): Qt.CheckState;

  /**
   * Creates a copy of the item.
   */
  public clone(): QTableWidgetItem;

  /**
   * Returns the column of the item in the table.
   */
  public column(): int;

  /**
   * Returns the item's data for the given role.
   */
  public data(role: int): QVariant;

  /**
   * Returns the flags used to describe the item.
   */
  public flags(): Qt.ItemFlags;

  /**
   * Returns the font used to render the item's text.
   */
  public font(): QFont;

  /**
   * Returns the brush used to render the item's foreground (e.
   */
  public foreground(): QBrush;

  /**
   * Returns the item's icon.
   */
  public icon(): QIcon;

  /**
   * Returns true if the item is selected, otherwise returns false.
   */
  public isSelected(): boolean;

  /**
   * Constructs a table item of the specified type that does not belong to any table.
   */
  constructor(type?: int);

  /**
   * Constructs a table item with the given text.
   */
  constructor(text: QString, type?: int);

  /**
   * Constructs a table item with the given icon and text.
   */
  constructor(icon: QIcon, text: QString, type: int);

  /**
   * Constructs a copy of other.
   */
  constructor(other: QTableWidgetItem);

  /**
   * Reads the item from stream in.
   */
  public read(_in: QDataStream): void;

  /**
   * Returns the row of the item in the table.
   */
  public row(): int;

  /**
   * Sets the item's background brush to the specified brush.
   */
  public setBackground(brush: QBrush): void;

  /**
   * This function is deprecated.
   */
  public setBackgroundColor(color: QColor): void;

  /**
   * Sets the check state of the table item to be state.
   */
  public setCheckState(state: Qt.CheckState): void;

  /**
   * Sets the item's data for the given role to the specified value.
   */
  public setData(role: int, value: QVariant): void;

  /**
   * Sets the flags for the item to the given flags.
   */
  public setFlags(flags: Qt.ItemFlags): void;

  /**
   * Sets the font used to display the item's text to the given font.
   */
  public setFont(font: QFont): void;

  /**
   * Sets the item's foreground brush to the specified brush.
   */
  public setForeground(brush: QBrush): void;

  /**
   * Sets the item's icon to the icon specified.
   */
  public setIcon(icon: QIcon): void;

  /**
   * Sets the selected state of the item to select.
   */
  public setSelected(select: boolean): void;

  /**
   * Sets the size hint for the table item to be size.
   */
  public setSizeHint(size: QSize): void;

  /**
   * Sets the status tip for the table item to the text specified by statusTip.
   */
  public setStatusTip(statusTip: QString): void;

  /**
   * Sets the item's text to the text specified.
   */
  public setText(text: QString): void;

  /**
   * Sets the text alignment for the item's text to the alignment specified.
   */
  public setTextAlignment(alignment: int): void;

  /**
   * This function is deprecated.
   */
  public setTextColor(color: QColor): void;

  /**
   * Sets the item's tooltip to the string specified by toolTip.
   */
  public setToolTip(toolTip: QString): void;

  /**
   * Sets the item's "What's This?" help to the string specified by whatsThis.
   */
  public setWhatsThis(whatsThis: QString): void;

  /**
   * Returns the size hint set for the table item.
   */
  public sizeHint(): QSize;

  /**
   * Returns the item's status tip.
   */
  public statusTip(): QString;

  /**
   * Returns the table widget that contains the item.
   */
  public tableWidget(): QTableWidget;

  /**
   * Returns the item's text.
   */
  public text(): QString;

  /**
   * Returns the text alignment for the item's text.
   */
  public textAlignment(): int;

  /**
   * This function is deprecated.
   */
  public textColor(): QColor;

  /**
   * Returns the item's tooltip.
   */
  public toolTip(): QString;

  /**
   * Returns the type passed to the QTableWidgetItem constructor.
   */
  public type(): int;

  /**
   * Returns the item's "What's This?" help.
   */
  public whatsThis(): QString;

  /**
   * Writes the item to stream out.
   */
  public write(out: QDataStream): void;

  d: QTableWidgetItemPrivate;

  itemFlags: Qt.ItemFlags;

  rtti: int;

  values: QVector<QWidgetItemData>;

  view: QTableWidget;
}

type QWidgetItemData = any;
