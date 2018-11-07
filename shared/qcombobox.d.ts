declare namespace QComboBox {
  /**
   * This enum specifies what the QComboBox should do when a new string is entered by the user.
   */
  enum InsertPolicy {
    InsertAtTop,
    InsertAtCurrent,
    InsertAtBottom,
    InsertBeforeCurrent,
    InsertAlphabetically
  }

  /**
   * This enum specifies how the size hint of the QComboBox should adjust when new content is added or content changes.
   */
  enum SizeAdjustPolicy {
    AdjustToContentsOnFirstShow,
    AdjustToMinimumContentsLength,
    AdjustToMinimumContentsLengthWithIcon
  }
}

declare class QComboBox extends QWidget {
  /**
   * Clears the combobox, removing all items.
   */
  public clear(): void;

  /**
   * Clears the contents of the line edit used for editing in the combobox.
   */
  public clearEditText(): void;

  public setCurrentIndex(index: int): void;

  /**
   * Sets the text in the combobox's text edit.
   */
  public setEditText(text: QString): void;

  /**
   * This signal is sent when the user chooses an item in the combobox.
   */
  activated: QSignal<(index: int) => void>;

  /**
   * This signal is sent when the user chooses an item in the combobox.
   */
  //activated: QSignal<(unknown_1: QString) => void>;

  /**
   * This signal is sent whenever the currentIndex in the combobox changes either through user interaction or programmatically.
   */
  currentIndexChanged: QSignal<(index: int) => void>;

  /**
   * This signal is sent whenever the currentIndex in the combobox changes either through user interaction or programmatically.
   */
  c; //urrentIndexChanged: QSignal<(unknown_1: QString) => void>;

  /**
   * This signal is emitted when the text in the combobox's line edit widget is changed.
   */
  editTextChanged: QSignal<(unknown_1: QString) => void>;

  /**
   * This signal is sent when an item in the combobox popup list is highlighted by the user.
   */
  highlighted: QSignal<(index: int) => void>;

  /**
   * This signal is sent when an item in the combobox popup list is highlighted by the user.
   */
  //highlighted: QSignal<(unknown_1: QString) => void>;

  /**
   * Adds an item to the combobox with the given text, and containing the specified userData (stored in the Qt::UserRole).
   */
  public addItem(text: QString, userData?: QVariant): void;

  /**
   * Adds an item to the combobox with the given icon and text, and containing the specified userData (stored in the Qt::UserRole).
   */
  public addItem(icon: QIcon, text: QString, userData?: QVariant): void;

  /**
   * Adds each of the strings in the given texts to the combobox.
   */
  public addItems(texts: QStringList): void;

  /**
   * Returns the completer that is used to auto complete text input for the combobox.
   */
  public completer(): QCompleter;

  /**
   * Returns the index of the item containing the given data for the given role; otherwise returns -1.
   */
  public findData(data: QVariant, role: int, flags: Qt.MatchFlags): int;

  /**
   * Returns the index of the item containing the given text; otherwise returns -1.
   */
  public findText(text: QString, flags: Qt.MatchFlags): int;

  public hasFrame(): boolean;

  /**
   * Hides the list of items in the combobox if it is currently visible and resets the internal state, so that if the custom pop-up was shown inside the reimplemented showPopup(), then you also need to reimplement the hidePopup() function to hide your custom pop-up and call the base class implementation to reset the internal state whenever your custom pop-up widget is hidden.
   */
  public hidePopup(): void;

  /**
   * Inserts the text and userData (stored in the Qt::UserRole) into the combobox at the given index.
   */
  public insertItem(index: int, text: QString, userData: QVariant): void;

  /**
   * Inserts the icon, text and userData (stored in the Qt::UserRole) into the combobox at the given index.
   */
  public insertItem(index: int, icon: QIcon, text: QString, userData: QVariant): void;

  /**
   * Inserts the strings from the list into the combobox as separate items, starting at the index specified.
   */
  public insertItems(index: int, texts: QStringList): void;

  /**
   * Inserts a separator item into the combobox at the given index.
   */
  public insertSeparator(index: int): void;

  public isEditable(): boolean;

  /**
   * Returns the data for the given role in the given index in the combobox, or QVariant::Invalid if there is no data for this role.
   */
  public itemData(index: int, role: int): QVariant;

  /**
   * Returns the item delegate used by the popup list view.
   */
  public itemDelegate(): QAbstractItemDelegate;

  /**
   * Returns the icon for the given index in the combobox.
   */
  public itemIcon(index: int): QIcon;

  /**
   * Returns the text for the given index in the combobox.
   */
  public itemText(index: int): QString;

  /**
   * Returns the line edit used to edit items in the combobox, or 0 if there is no line edit.
   */
  public lineEdit(): QLineEdit;

  /**
   * Returns the model used by the combobox.
   */
  public model(): QAbstractItemModel;

  /**
   * Constructs a combobox with the given parent, using the default model QStandardItemModel.
   */
  constructor(parent?: QWidget);

  /**
   * Removes the item at the given index from the combobox.
   */
  public removeItem(index: int): void;

  /**
   * Returns the root model item index for the items in the combobox.
   */
  public rootModelIndex(): QModelIndex;

  /**
   * Use setCompleter() instead.
   */
  public setAutoCompletion(enable: boolean): void;

  /**
   * Use setCompleter() and QCompleter::setCaseSensitivity() instead.
   */
  public setAutoCompletionCaseSensitivity(sensitivity: Qt.CaseSensitivity): void;

  public setCompleter(c: QCompleter): void;

  public setDuplicatesEnabled(enable: boolean): void;

  public setEditable(editable: boolean): void;

  public setFrame(unknown_1: boolean): void;

  public setIconSize(size: QSize): void;

  public setInsertPolicy(policy: QComboBox.InsertPolicy): void;

  /**
   * Sets the data role for the item on the given index in the combobox to the specified value.
   */
  public setItemData(index: int, value: QVariant, role: int): void;

  /**
   * Sets the item delegate for the popup list view.
   */
  public setItemDelegate(delegate: QAbstractItemDelegate): void;

  /**
   * Sets the icon for the item on the given index in the combobox.
   */
  public setItemIcon(index: int, icon: QIcon): void;

  /**
   * Sets the text for the item on the given index in the combobox.
   */
  public setItemText(index: int, text: QString): void;

  /**
   * Sets the line edit to use instead of the current line edit widget.
   */
  public setLineEdit(edit: QLineEdit): void;

  public setMaxCount(max: int): void;

  public setMaxVisibleItems(maxItems: int): void;

  public setMinimumContentsLength(characters: int): void;

  /**
   * Sets the model to be model.
   */
  public setModel(model: QAbstractItemModel): void;

  public setModelColumn(visibleColumn: int): void;

  /**
   * Sets the root model item index for the items in the combobox.
   */
  public setRootModelIndex(index: QModelIndex): void;

  public setSizeAdjustPolicy(policy: QComboBox.SizeAdjustPolicy): void;

  /**
   * Sets the validator to use instead of the current validator.
   */
  public setValidator(v: QValidator): void;

  /**
   * Sets the view to be used in the combobox popup to the given itemView.
   */
  public setView(itemView: QAbstractItemView): void;

  /**
   * Displays the list of items in the combobox.
   */
  public showPopup(): void;

  /**
   * This implementation caches the size hint to avoid resizing when the contents change dynamically.
   */
  //public sizeHint(): QSize;

  /**
   * Returns the validator that is used to constrain text input for the combobox.
   */
  public validator(): QValidator;

  /**
   * Returns the list view used for the combobox popup.
   */
  public view(): QAbstractItemView;

  /**
   * whether the combobox provides auto-completion for editable items
   */
  autoCompletion: boolean;

  /**
   * whether string comparisons are case-sensitive or case-insensitive for auto-completion
   */
  autoCompletionCaseSensitivity: Qt.CaseSensitivity;

  /**
   * the number of items in the combobox
   */
  count: int;

  /**
   * the index of the current item in the combobox.
   */
  currentIndex: int;

  /**
   * the current text
   */
  currentText: QString;

  /**
   * whether the user can enter duplicate items into the combobox
   */
  duplicatesEnabled: boolean;

  /**
   * whether the combo box can be edited by the user
   */
  editable: boolean;

  /**
   * whether the combo box draws itself with a frame
   */
  frame: boolean;

  /**
   * the size of the icons shown in the combobox.
   */
  iconSize: QSize;

  /**
   * the policy used to determine where user-inserted items should appear in the combobox
   */
  insertPolicy: InsertPolicy;

  /**
   * the maximum number of items allowed in the combobox
   */
  maxCount: int;

  /**
   * the maximum allowed size on screen of the combo box, measured in items
   */
  maxVisibleItems: int;

  /**
   * the minimum number of characters that should fit into the combobox.
   */
  minimumContentsLength: int;

  /**
   * the column in the model that is visible.
   */
  modelColumn: int;

  /**
   * the policy describing how the size of the combobox changes when the content changes
   */
  sizeAdjustPolicy: SizeAdjustPolicy;
}
