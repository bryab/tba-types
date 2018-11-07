declare namespace QWidget {
  /**
   * This enum describes how to render the widget when calling QWidget::render().
   */
  enum RenderFlag {
    DrawChildren,
    IgnoreMask
  }
}

declare class QWidget extends QPaintDevice {
  /**
   * Closes this widget.
   */
  public close(): boolean;

  /**
   * Hides the widget.
   */
  public hide(): void;

  /**
   * Lowers the widget to the bottom of the parent widget's stack.
   */
  public lower(): void;

  /**
   * Raises this widget to the top of the parent widget's stack.
   */
  public raise(): void;

  /**
   * Repaints the widget directly by calling paintEvent() immediately, unless updates are disabled or the widget is hidden.
   */
  public repaint(): void;

  /**
   * Disables widget input events if disable is true; otherwise enables input events.
   */
  public setDisabled(unknown_1: boolean): void;

  public setEnabled(unknown_1: boolean): void;

  /**
   * Gives the keyboard input focus to this widget (or its focus proxy) if this widget or one of its parents is the active window.
   */
  public setFocus(): void;

  /**
   * Convenience function, equivalent to setVisible(!hidden).
   */
  public setHidden(hidden: boolean): void;

  /**
   * Use setVisible(shown) instead.
   */
  public setShown(shown: boolean): void;

  public setStyleSheet(styleSheet: QString): void;

  public setVisible(visible: boolean): void;

  public setWindowModified(unknown_1: boolean): void;

  public setWindowTitle(unknown_1: QString): void;

  /**
   * Shows the widget and its child widgets.
   */
  public show(): void;

  /**
   * Shows the widget in full-screen mode.
   */
  public showFullScreen(): void;

  /**
   * Shows the widget maximized.
   */
  public showMaximized(): void;

  /**
   * Shows the widget minimized, as an icon.
   */
  public showMinimized(): void;

  /**
   * Restores the widget after it has been maximized or minimized.
   */
  public showNormal(): void;

  /**
   * Updates the widget unless updates are disabled or the widget is hidden.
   */
  public update(): void;

  /**
   * This signal is emitted when the widget's contextMenuPolicy is Qt::CustomContextMenu, and the user has requested a context menu on the widget.
   */
  customContextMenuRequested: QSignal<(pos: QPoint) => void>;

  public acceptDrops(): boolean;

  public accessibleDescription(): QString;

  public accessibleName(): QString;

  /**
   * Returns the (possibly empty) list of this widget's actions.
   */
  public actions(): QList<QAction>;

  /**
   * Sets the top-level widget containing this widget to be the active window.
   */
  public activateWindow(): void;

  /**
   * Appends the action action to this widget's list of actions.
   */
  public addAction(action: QAction): void;

  /**
   * Appends the actions actions to this widget's list of actions.
   */
  public addActions(actions: QList<QAction>): void;

  /**
   * Adjusts the size of the widget to fit its contents.
   */
  public adjustSize(): void;

  public autoFillBackground(): boolean;

  /**
   * Returns the background role of the widget.
   */
  public backgroundRole(): any;

  public baseSize(): QSize;

  /**
   * Returns the visible child widget at the position ({x}, {y}) in the widget's coordinate system.
   */
  public childAt(x: int, y: int): QWidget;

  /**
   * Returns the visible child widget at point p in the widget's own coordinate system.
   */
  public childAt(p: QPoint): QWidget;

  public childrenRect(): QRect;

  public childrenRegion(): QRegion;

  /**
   * Takes keyboard input focus from the widget.
   */
  public clearFocus(): void;

  /**
   * Removes any mask set by setMask().
   */
  public clearMask(): void;

  /**
   * The contentsMargins function returns the widget's contents margins.
   */
  public contentsMargins(): QMargins;

  /**
   * Returns the area inside the widget's margins.
   */
  public contentsRect(): QRect;

  public contextMenuPolicy(): Qt.ContextMenuPolicy;

  public createWinId(): void;

  public cursor(): QCursor;

  public devType(): int;

  /**
   * Returns the effective window system identifier of the widget, i.
   */
  public effectiveWinId(): WId;

  /**
   * Ensures that the widget has been polished by QStyle (i.e., has a proper font and palette).
   */
  public ensurePolished(): void;

  public focusPolicy(): Qt.FocusPolicy;

  /**
   * Returns the focus proxy, or 0 if there is no focus proxy.
   */
  public focusProxy(): QWidget;

  /**
   * Returns the last child of this widget that setFocus had been called on.
   */
  public focusWidget(): QWidget;

  public font(): QFont;

  /**
   * Returns the font info for the widget's current font.
   */
  public fontInfo(): QFontInfo;

  /**
   * Returns the font metrics for the widget's current font.
   */
  public fontMetrics(): QFontMetrics;

  /**
   * Returns the foreground role.
   */
  public foregroundRole(): any;

  public frameGeometry(): QRect;

  public frameSize(): QSize;

  public geometry(): QRect;

  /**
   * Returns the widget's contents margins for left, top, right, and bottom.
   */
  public getContentsMargins(left: int, top: int, right: int, bottom: int): void;

  /**
   * Returns the window system handle of the widget, for low-level access.
   */
  public getDC(): HDC;

  /**
   * Subscribes the widget to a given gesture with specific flags.
   */
  public grabGesture(type: Qt.GestureType, flags: Qt.GestureFlags): void;

  /**
   * Grabs the keyboard input.
   */
  public grabKeyboard(): void;

  /**
   * Grabs the mouse input.
   */
  public grabMouse(): void;

  public grabMouse(unknown_1: QCursor): void;

  /**
   * Adds a shortcut to Qt's shortcut system that watches for the given key sequence in the given context.
   */
  public grabShortcut(key: QKeySequence, context: Qt.ShortcutContext): int;

  /**
   * The graphicsEffect function returns a pointer to the widget's graphics effect.
   */
  public graphicsEffect(): QGraphicsEffect;

  /**
   * Returns the proxy widget for the corresponding embedded widget in a graphics view; otherwise returns 0.
   */
  public graphicsProxyWidget(): QGraphicsProxyWidget;

  public hasFocus(): boolean;

  public hasMouseTracking(): boolean;

  public height: int;

  /**
   * Returns the preferred height for this widget, given the width w.
   */
  public heightForWidth(unknown_1: int): int;

  /**
   * This function returns the QInputContext for this widget.
   */
  public inputContext(): QInputContext;

  public inputMethodHints(): any;

  /**
   * This method is only relevant for input widgets.
   */
  public inputMethodQuery(unknown_1: Qt.InputMethodQuery): QVariant;

  /**
   * Inserts the action action to this widget's list of actions, before the action before.
   */
  public insertAction(before: QAction, action: QAction): void;

  /**
   * Inserts the actions actions to this widget's list of actions, before the action before.
   */
  public insertActions(before: QAction, actions: QList<QAction>): void;

  /**
   * Returns the window system identifier of the widget, or 0 if the widget is not created yet.
   */
  public internalWinId(): WId;

  public isActiveWindow(): boolean;

  /**
   * Returns true if this widget is a parent, (or grandparent and so on to any level), of the given child, and both widgets are within the same window; otherwise returns false.
   */
  public isAncestorOf(child: QWidget): boolean;

  public isEnabled(): boolean;

  /**
   * Returns true if this widget would become enabled if ancestor is enabled; otherwise returns false.
   */
  public isEnabledTo(unknown: QWidget): boolean;

  /**
   * This function is deprecated.
   */
  public isEnabledToTLW(): boolean;

  public isFullScreen(): boolean;

  /**
   * Returns true if the widget is hidden, otherwise returns false.
   */
  public isHidden(): boolean;

  public isLeftToRight(): boolean;

  public isMaximized(): boolean;

  public isMinimized(): boolean;

  public isModal(): boolean;

  public isRightToLeft(): boolean;

  /**
   * Use isWindow() instead.
   */
  public isTopLevel(): boolean;

  public isVisible(): boolean;

  /**
   * Returns true if this widget would become visible if ancestor is shown; otherwise returns false.
   */
  public isVisibleTo(unknown: QWidget): boolean;

  /**
   * Returns true if the widget is an independent window, otherwise returns false.
   */
  public isWindow(): boolean;

  public isWindowModified(): boolean;

  /**
   * Returns the layout manager that is installed on this widget, or 0 if no layout manager is installed.
   */
  public layout(): QLayout;

  public layoutDirection(): Qt.LayoutDirection;

  public locale(): QLocale;

  /**
   * Returns the CoreGraphics handle of the widget.
   */
  public macCGHandle(): any;

  /**
   * Returns the QuickDraw handle of the widget.
   */
  public macQDHandle(): any;

  /**
   * Translates the widget coordinate pos from the coordinate system of parent to this widget's coordinate system.
   */
  public mapFrom(unknown_1: QWidget, unknown_2: QPoint): QPoint;

  /**
   * Translates the global screen coordinate pos to widget coordinates.
   */
  public mapFromGlobal(unknown_1: QPoint): QPoint;

  /**
   * Translates the parent widget coordinate pos to widget coordinates.
   */
  public mapFromParent(unknown_1: QPoint): QPoint;

  /**
   * Translates the widget coordinate pos to the coordinate system of parent.
   */
  public mapTo(unknown_1: QWidget, unknown_2: QPoint): QPoint;

  /**
   * Translates the widget coordinate pos to global screen coordinates.
   */
  public mapToGlobal(unknown_1: QPoint): QPoint;

  /**
   * Translates the widget coordinate pos to a coordinate in the parent widget.
   */
  public mapToParent(unknown_1: QPoint): QPoint;

  /**
   * Returns the mask currently set on a widget.
   */
  public mask(): QRegion;

  public maximumHeight(): int;

  public maximumSize(): QSize;

  public maximumWidth(): int;

  public minimumHeight(): int;

  public minimumSize(): QSize;

  public minimumSizeHint(): QSize;

  public minimumWidth(): int;

  /**
   * This corresponds to move(QPoint(x, y)).
   */
  public move(x: int, y: int): void;

  public move(unknown_1: QPoint): void;

  /**
   * Returns the native parent for this widget, i.
   */
  public nativeParentWidget(): QWidget;

  /**
   * Returns the next widget in this widget's focus chain.
   */
  public nextInFocusChain(): QWidget;

  public normalGeometry(): QRect;

  /**
   * Sets the window flags for the widget to flags, without telling the window system.
   */
  public overrideWindowFlags(type: Qt.WindowFlags): void;

  public overrideWindowState(state: any): void;

  /**
   * Returns the widget's paint engine.
   */
  public paintEngine(): QPaintEngine;

  public palette(): QPalette;

  /**
   * Returns the parent of this widget, or 0 if it does not have any parent widget.
   */
  public parentWidget(): QWidget;

  public pos(): QPoint;

  /**
   * The previousInFocusChain function returns the previous widget in this widget's focus chain.
   */
  public previousInFocusChain(): QWidget;

  /**
   * Constructs a widget which is a child of parent, with widget flags set to f.
   */
  constructor(parent?: QWidget, f?: Qt.WindowFlags);

  public rect(): QRect;

  /**
   * Releases the HDC hdc acquired by a previous call to getDC().
   */
  public releaseDC(unknown_1: HDC): void;

  /**
   * Releases the keyboard grab.
   */
  public releaseKeyboard(): void;

  /**
   * Releases the mouse grab.
   */
  public releaseMouse(): void;

  /**
   * Removes the shortcut with the given id from Qt's shortcut system.
   */
  public releaseShortcut(id: int): void;

  /**
   * Removes the action action from this widget's list of actions.
   */
  public removeAction(action: QAction): void;

  /**
   * Renders the sourceRegion of this widget into the target using renderFlags to determine how to render.
   */
  public render(target: QPaintDevice, targetOffset: QPoint, sourceRegion: QRegion, renderFlags: RenderFlags): void;

  /**
   * Renders the widget into the painter's QPainter::device().
   */
  public render(painter: QPainter, targetOffset: QPoint, sourceRegion: QRegion, renderFlags: RenderFlags): void;

  /**
   * This version repaints a rectangle (x, y, w, h) inside the widget.
   */
  public repaint(x: int, y: int, w: int, h: int): void;

  /**
   * This version repaints a rectangle rect inside the widget.
   */
  public repaint(unknown_1: QRect): void;

  /**
   * This version repaints a region rgn inside the widget.
   */
  public repaint(unknown_1: QRegion): void;

  /**
   * This corresponds to resize(QSize(w, h)).
   */
  public resize(w: int, h: int): void;

  public resize(unknown_1: QSize): void;

  /**
   * Restores the geometry and state top-level widgets stored in the byte array geometry.
   */
  public restoreGeometry(geometry: QByteArray): boolean;

  /**
   * Saves the current geometry and state for top-level widgets.
   */
  public saveGeometry(): QByteArray;

  /**
   * Scrolls the widget including its children dx pixels to the right and dy downward.
   */
  public scroll(dx: int, dy: int): void;

  /**
   * This version only scrolls r and does not move the children of the widget.
   */
  public scroll(dx: int, dy: int, unknown_3: QRect): void;

  public setAcceptDrops(on: boolean): void;

  public setAccessibleDescription(description: QString): void;

  public setAccessibleName(name: QString): void;

  /**
   * Sets the attribute attribute on this widget if on is true; otherwise clears the attribute.
   */
  public setAttribute(unknown_1: Qt.WidgetAttribute, on: boolean): void;

  public setAutoFillBackground(enabled: boolean): void;

  /**
   * Sets the background role of the widget to role.
   */
  public setBackgroundRole(unknown_1: any): void;

  public setBaseSize(unknown_1: QSize): void;

  /**
   * This corresponds to setBaseSize(QSize(basew, baseh)).
   */
  public setBaseSize(basew: int, baseh: int): void;

  /**
   * Sets the margins around the contents of the widget to have the sizes left, top, right, and bottom.
   */
  public setContentsMargins(left: int, top: int, right: int, bottom: int): void;

  /**
   * The setContentsMargins function sets the margins around the widget's contents.
   */
  public setContentsMargins(margins: QMargins): void;

  public setContextMenuPolicy(policy: Qt.ContextMenuPolicy): void;

  public setCursor(unknown_1: QCursor): void;

  /**
   * Sets both the minimum and maximum heights of the widget to h without changing the widths.
   */
  public setFixedHeight(h: int): void;

  /**
   * Sets both the minimum and maximum sizes of the widget to s, thereby preventing it from ever growing or shrinking.
   */
  public setFixedSize(unknown_1: QSize): void;

  /**
   * Sets the width of the widget to w and the height to h.
   */
  public setFixedSize(w: int, h: int): void;

  /**
   * Sets both the minimum and maximum width of the widget to w without changing the heights.
   */
  public setFixedWidth(w: int): void;

  /**
   * Gives the keyboard input focus to this widget (or its focus proxy) if this widget or one of its parents is the active window.
   */
  public setFocus(reason: Qt.FocusReason): void;

  public setFocusPolicy(policy: Qt.FocusPolicy): void;

  /**
   * Sets the widget's focus proxy to widget w.
   */
  public setFocusProxy(unknown: QWidget): void;

  /**
   * Use the single-argument overload instead.
   */
  public setFont(unknown_1: QFont): void;

  /**
   * Sets the foreground role of the widget to role.
   */
  public setForegroundRole(unknown_1: any): void;

  /**
   * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.This corresponds to setGeometry(QRect(x, y, w, h)).
   */
  public setGeometry(x: int, y: int, w: int, h: int): void;

  public setGeometry(unknown_1: QRect): void;

  /**
   * The setGraphicsEffect function is for setting the widget's graphics effect.
   */
  public setGraphicsEffect(effect: QGraphicsEffect): void;

  /**
   * This function sets the input context context on this widget.
   */
  public setInputContext(unknown: QInputContext): void;

  public setInputMethodHints(hints: any): void;

  /**
   * Sets the layout manager for this widget to layout.
   */
  public setLayout(unknown: QLayout): void;

  public setLayoutDirection(direction: Qt.LayoutDirection): void;

  public setLocale(locale: QLocale): void;

  /**
   * Causes only the pixels of the widget for which bitmap has a corresponding 1 bit to be visible.
   */
  public setMask(unknown_1: QBitmap): void;

  /**
   * Causes only the parts of the widget which overlap region to be visible.
   */
  public setMask(unknown_1: QRegion): void;

  public setMaximumHeight(maxh: int): void;

  public setMaximumSize(unknown_1: QSize): void;

  /**
   * This function corresponds to setMaximumSize(QSize(maxw, maxh)).
   */
  public setMaximumSize(maxw: int, maxh: int): void;

  public setMaximumWidth(maxw: int): void;

  public setMinimumHeight(minh: int): void;

  public setMinimumSize(unknown_1: QSize): void;

  /**
   * This function corresponds to setMinimumSize(QSize(minw, minh)).
   */
  public setMinimumSize(minw: int, minh: int): void;

  public setMinimumWidth(minw: int): void;

  public setMouseTracking(enable: boolean): void;

  /**
   * Use the single-argument overload instead.
   */
  public setPalette(unknown_1: QPalette): void;

  /**
   * Sets the parent of the widget to parent, and resets the window flags.
   */
  public setParent(parent: QWidget): void;

  /**
   * This function also takes widget flags, f as an argument.
   */
  public setParent(parent: QWidget, f: Qt.WindowFlags): void;

  /**
   * If enable is true, auto repeat of the shortcut with the given id is enabled; otherwise it is disabled.
   */
  public setShortcutAutoRepeat(id: int, enable: boolean): void;

  /**
   * If enable is true, the shortcut with the given id is enabled; otherwise the shortcut is disabled.
   */
  public setShortcutEnabled(id: int, enable: boolean): void;

  public setSizeIncrement(unknown_1: QSize): void;

  /**
   * Sets the x (width) size increment to w and the y (height) size increment to h.
   */
  public setSizeIncrement(w: int, h: int): void;

  public setSizePolicy(unknown_1: QSizePolicy): void;

  /**
   * Sets the size policy of the widget to horizontal and vertical, with standard stretch and no height-for-width.
   */
  public setSizePolicy(horizontal: any, vertical: any): void;

  public setStatusTip(unknown_1: QString): void;

  /**
   * Sets the widget's GUI style to style.
   */
  public setStyle(unknown: QStyle): void;

  public setToolTip(unknown_1: QString): void;

  public setUpdatesEnabled(enable: boolean): void;

  /**
   * Sets up the user interface for the specified widget.
   */
  public setupUi(widget: QWidget): void;

  public setWhatsThis(unknown_1: QString): void;

  public setWindowFilePath(filePath: QString): void;

  public setWindowFlags(type: Qt.WindowFlags): void;

  public setWindowIcon(icon: QIcon): void;

  public setWindowIconText(unknown_1: QString): void;

  public setWindowModality(windowModality: Qt.WindowModality): void;

  public setWindowOpacity(level: qreal): void;

  /**
   * Sets the window's role to role.
   */
  public setWindowRole(unknown_1: QString): void;

  /**
   * Sets the window state to windowState.
   */
  public setWindowState(state: any): void;

  /**
   * Sets the window surface to be the surface specified.
   */
  public setWindowSurface(surface: QWindowSurface): void;

  public size(): QSize;

  public sizeHint(): QSize;

  public sizeIncrement(): QSize;

  public sizePolicy(): QSizePolicy;

  /**
   * Places the widget under w in the parent widget's stack.
   */
  public stackUnder(unknown: QWidget): void;

  public statusTip(): QString;

  public style(): QStyle;

  public styleSheet(): QString;

  /**
   * Returns true if attribute attribute is set on this widget; otherwise returns false.
   */
  public testAttribute(unknown_1: Qt.WidgetAttribute): boolean;

  public toolTip(): QString;

  public topLevelWidget(): QWidget;

  /**
   * Returns true if the widget is under the mouse cursor; otherwise returns false.
   */
  public underMouse(): boolean;

  /**
   * Unsubscribes the widget from a given gesture type.
   */
  public ungrabGesture(type: Qt.GestureType): void;

  public unsetCursor(): void;

  public unsetLayoutDirection(): void;

  public unsetLocale(): void;

  /**
   * This version updates a rectangle (x, y, w, h) inside the widget.
   */
  public update(x: int, y: int, w: int, h: int): void;

  /**
   * This version updates a rectangle rect inside the widget.
   */
  public update(unknown_1: QRect): void;

  /**
   * This version repaints a region rgn inside the widget.
   */
  public update(unknown_1: QRegion): void;

  /**
   * Notifies the layout system that this widget has changed and may need to change geometry.
   */
  public updateGeometry(): void;

  public updatesEnabled(): boolean;

  /**
   * Returns the unobscured region where paint events can occur.
   */
  public visibleRegion(): QRegion;

  public whatsThis(): QString;

  public width: int;

  /**
   * Returns the window for this widget, i.e.
   */
  public window(): QWidget;

  public windowFilePath(): QString;

  /**
   * Window flags are a combination of a type (e.
   */
  public windowFlags(): Qt.WindowFlags;

  public windowIcon(): QIcon;

  public windowIconText(): QString;

  public windowModality(): Qt.WindowModality;

  public windowOpacity(): qreal;

  /**
   * Returns the window's role, or an empty string.
   */
  public windowRole(): QString;

  /**
   * Returns the current window state.
   */
  public windowState(): any;

  /**
   * Returns the QWindowSurface this widget will be drawn into.
   */
  public windowSurface(): QWindowSurface;

  public windowTitle(): QString;

  /**
   * Returns the window type of this widget.
   */
  public windowType(): Qt.WindowType;

  /**
   * Returns the window system identifier of the widget.
   */
  public winId(): WId;

  public x(): int;

  /**
   * Returns information about the configuration of the X display used to display the widget.
   */
  public x11Info(): QX11Info;

  /**
   * Returns the X11 Picture handle of the widget for XRender support.
   */
  public x11PictureHandle(): any;

  public y(): int;
}
