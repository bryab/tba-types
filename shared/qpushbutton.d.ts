declare class QPushButton extends QAbstractButton {
  /**
   * Shows (pops up) the associated popup menu.
   */
  public showMenu(): void;

  public isDefault(): boolean;

  public isFlat(): boolean;

  /**
   * Returns the button's associated popup menu or 0 if no popup menu has been set.
   */
  public menu(): QMenu;

  /**
   * Constructs a push button with no text and a parent.
   */
  constructor(parent: QWidget);

  /**
   * Constructs a push button with the parent parent and the text text.
   */
  constructor(text: QString, parent: QWidget);

  /**
   * Constructs a push button with an icon and a text, and a parent.
   */
  constructor(icon: QIcon, text: QString, parent: QWidget);

  public setAutoDefault(unknown_1: boolean): void;

  public setDefault(unknown_1: boolean): void;

  public setFlat(unknown_1: boolean): void;

  /**
   * Associates the popup menu menu with this push button.
   */
  public setMenu(menu: QMenu): void;

  /**
   * whether the push button is an auto default button
   */
  autoDefault: boolean;

  /**
   * whether the push button is the default button
   */
  default: boolean;

  /**
   * whether the button border is raised
   */
  flat: boolean;
}
