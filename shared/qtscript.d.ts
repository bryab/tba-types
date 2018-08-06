/**
 * Below are mostly unfinished definitions for QTScript objects.
 * 
 * A script needs to be written to parse the complete QTScript documentation into Typescript definitions.
 */

 /**
 * Toon Boom's documentation uses these C++ types, and I have preserved their usage in the type definitions.
 */
declare type bool = boolean;
declare type uint = int;
declare type int = number;
declare type double = number;
declare type float = number;
declare type char = string;


/**
 * QTScript aliases
 */
declare type QList<T> = T[];
declare type StringList = string[];
declare type QScriptValue = any;

/**
 * Unknown types (Unknown how they appear in Javascript)
 */

declare type QTime = any;
declare type QVariant = any;
declare type QImage = any;
declare type TUScriptInterfaceImpl = any;
declare type QDateTime = any;
declare type QDate = any;
declare type DD_DragObject = any;

/**
 * WTF are these?  They are the arguments for MessageBox functions.
 * http://doc.qt.io/qt-5/qscriptcontext.html
 */
declare type QScriptContext = any;
declare type QScriptEngine = any;

/**
 * More unknown objects that are parent objects
 */
declare class Labeled {
    label: string;
}
declare class MO_SignalEmitter {
    constructor(config)
}
declare class SCRIPT_QSWidget {}
declare class UI_DialogController {}
declare class SCR_AbstractInterface {}

/**
 * Other stuff that is not in the API Documentation
 */

 /**
  * Include contents of a Javascript file.
  */
declare function include(jsPath: string);

declare class QTableWidgetItem extends QObject {
    constructor(...args:any[])
}

declare type WFlags = int;
declare type Orientation = any;
declare type QSize = any;
declare type QPoint = any;
declare type QPixmap = any;
declare type QColor = any;
declare type QRegion = any;
declare type QSizePolicy = any;
declare type QColorGroup = any;
declare type QPalette = any;
declare type QBrush = any;
declare type QStyle = any;
declare type QLayout = any;
declare type QString = string;
declare type QFont = any;
declare type QCursor = any;
declare type QFontMetrics = any;
declare type QFontInfo = any;
declare type QWidgetMapper = any;
declare type WState = any;
declare type CGContextRef = any;
declare type QGfx = any;

declare namespace Qt {
    var Checked: any;
    var UnChecked: any;
}

declare class QRect {
    constructor()
    constructor(topLeft: QPoint, bottomRight: QPoint)
    constructor(topLeft: QPoint, size: QSize)
    constructor(x: int, y: int, width: int, height: int)

    adjust(dx1: int, dy1: int, dx2: int, dy2: int): void
    adjusted(dx1: int, dy1: int, dx2: int, dy2: int): QRect
    bottom(): int
    bottomLeft(): QPoint
    bottomRight(): QPoint
    center(): QPoint
    contains(point: QPoint, proper?: bool): bool
    contains(x: int, y: int, proper: bool): bool
    contains(x: int, y: int): bool
    contains(rectangle: QRect, proper?: bool): bool
    getCoords(x1: int, y1: int, x2: int, y2: int): void
    getRect(x: int, y: int, width: int, height: int): void
    height(): int
    intersected(rectangle: QRect): QRect
    intersects(rectangle: QRect): bool
    isEmpty(): bool
    isNull(): bool
    isValid(): bool
    left(): int
    moveBottom(y: int): void
    moveBottomLeft(position: QPoint): void
    moveBottomRight(position: QPoint): void
    moveCenter(position: QPoint): void
    moveLeft(x: int): void
    moveRight(x: int): void
    moveTo(x: int, y: int): void
    moveTo(position: QPoint): void
    moveTop(y: int): void
    moveTopLeft(position: QPoint): void
    moveTopRight(position: QPoint): void
    normalized(): QRect
    right(): int
    setBottom(y: int): void
    setBottomLeft(position: QPoint): void
    setBottomRight(position: QPoint): void
    setCoords(x1: int, y1: int, x2: int, y2: int): void
    setHeight(height: int): void
    setLeft(x: int): void
    setRect(x: int, y: int, width: int, height: int): void
    setRight(x: int): void
    setSize(size: QSize): void
    setTop(y: int): void
    setTopLeft(position: QPoint): void
    setTopRight(position: QPoint): void
    setWidth(width: int): void
    setX(x: int): void
    setY(y: int): void
    size(): QSize
    top(): int
    topLeft(): QPoint
    topRight(): QPoint
    translate(dx: int, dy: int): void
    translate(offset: QPoint): void
    translated(dx: int, dy: int): QRect
    translated(offset: QPoint): QRect
    united(rectangle: QRect): QRect
    width(): int
    x(): int
    y(): int
    // operator&( QRect & rectangle)  : QRect
    // &	operator&=( QRect & rectangle) : QRect
    // operator|( QRect & rectangle)  : QRect
    // &	operator|=( QRect & rectangle) : QRect

}

declare module QSizePolicy {
    type SizeType = any;
}

declare enum BackgroundMode {

}
declare enum FocusPolicy {

}
declare enum BackgroundOrigin {

}

declare class QSignal<T> {
    connect(context: any, slot: T);
    disconnect(context: any, slot: T);
}

declare class QObject extends Object {
    destroyed: QSignal<Slot>;
}

// declare class QWidget extends QWidgetBase {
//     /**
//      * Child QWidgets are accessed directly by name in this manner.
//      * Not sure how to have typed members and also arbitrary members that are only of one type (QWidget)...
//      * 
//      * This kinda negates the usefulness of Intellisense.
//      */
//     [key: string]: any;
// }

declare class QWidget extends QObject {

    isTopLevel: bool;
    isDialog: bool;
    isModal: bool;
    isPopup: bool;
    isDesktop: bool;
    enabled: bool;
    geometry: QRect;
    frameGeometry: QRect;
    x: int;
    y: int;
    pos: QPoint;
    frameSize: QSize;
    size: QSize;
    width: int;
    height: int;
    rect: QRect;
    childrenRect: QRect;
    childrenRegion: QRegion;
    sizePolicy: QSizePolicy;
    minimumSize: QSize;
    maximumSize: QSize;
    minimumWidth: int;
    minimumHeight: int;
    maximumWidth: int;
    maximumHeight: int;
    sizeIncrement: QSize;
    baseSize: QSize;
    backgroundMode: BackgroundMode;
    paletteForegroundColor: QColor;
    paletteBackgroundColor: QColor;
    paletteBackgroundPixmap: QPixmap;
    backgroundBrush: QBrush;
    colorGroup: QColorGroup;
    palette: QPalette;
    backgroundOrigin: BackgroundOrigin;
    ownPalette: bool;
    font: QFont;
    ownFont: bool;
    cursor: QCursor;
    ownCursor: bool;
    caption: QString;
    icon: QPixmap;
    iconText: QString;
    mouseTracking: bool;
    underMouse: bool;
    isActiveWindow: bool;
    focusEnabled: bool;
    focusPolicy: FocusPolicy;
    focus: bool;
    updatesEnabled: bool;
    visible: bool;
    visibleRect: QRect;
    hidden: bool;
    shown: bool;
    minimized: bool;
    maximized: bool;
    fullScreen: bool;
    sizeHint: QSize;
    minimumSizeHint: QSize;
    microFocusHint: QRect;
    acceptDrops: bool;
    autoMask: bool;
    customWhatsThis: bool;
    inputMethodEnabled: bool;
    windowOpacity: double;
    //public winId () : WId		;
    public setName(name: char): void;
    public style(): QStyle;
    public setStyle(): void;
    public setStyle(): QStyle;
    public isEnabled(): bool;
    public isEnabledTo(): bool;
    public isEnabledToTLW(): bool;
    public setEnabled(enabled: bool): void;
    public setDisabled(disabled:bool): void;
    public setMinimumSize(): void;
    public setMinimumSize(minw: int, minh: int): void;
    public setMaximumSize(): void;
    public setMaximumSize(maxw: int, maxh: int): void;
    public setMinimumWidth(minw: int): void;
    public setMinimumHeight(minh: int): void;
    public setMaximumWidth(maxw: int): void;
    public setMaximumHeight(maxh: int): void;
    public setSizeIncrement(): void;
    public setSizeIncrement(w: int, h: int): void;
    public setBaseSize(): void;
    public setBaseSize(basew: int, baseh: int): void;
    public setFixedSize(): void;
    public setFixedSize(w: int, h: int): void;
    public setFixedWidth(w: int): void;
    public setFixedHeight(h: int): void;
    public mapToGlobal(): QPoint;
    public mapFromGlobal(): QPoint;
    public mapToParent(): QPoint;
    public mapFromParent(): QPoint;
    public mapTo(): QPoint;
    public mapFrom(): QPoint;
    public topLevelWidget(): QWidget;
    public setBackgroundMode(): void;
    public setBackgroundMode(): void;
    public foregroundColor(): QColor;
    public eraseColor(): QColor;
    public setEraseColor(): void;
    public erasePixmap(): QPixmap;
    public setErasePixmap(): void;
    public setPalette(): void;
    public unsetPalette(): void;
    public setPaletteForegroundColor(): void;
    public setPaletteBackgroundColor(): void;
    public setPaletteBackgroundPixmap(): void;
    public setFont(): void;
    public unsetFont(): void;
    public fontMetrics(): QFontMetrics;
    public fontInfo(): QFontInfo;
    public setCursor(): void;
    public unsetCursor(): void;
    public hasMouseTracking(): bool;
    public hasMouse(): bool;
    public setMask(): void;
    public setMask(): void;
    public clearMask(): void;
    public backgroundColor(): QColor;
    public setBackgroundColor(): void;
    public backgroundPixmap(): QPixmap;
    public setBackgroundPixmap(): void;
    public setCaption(): void;
    public setIcon(): void;
    public setIconText(): void;
    public setMouseTracking(enable: bool): void;
    public setFocus(): void;
    public clearFocus(): void;
    public setActiveWindow(): void;
    public isFocusEnabled(): bool;
    public setFocusPolicy(): void;
    public hasFocus(): bool;
    public static setTabOrder(): void;
    public setFocusProxy(): void;
    public focusProxy(): QWidget;
    public setInputMethodEnabled(b: bool): void;
    public isInputMethodEnabled(): bool;
    public grabMouse(): void;
    public grabMouse(): void;
    public releaseMouse(): void;
    public grabKeyboard(): void;
    public releaseKeyboard(): void;
    public static mouseGrabber(): QWidget;
    public static keyboardGrabber(): QWidget;
    public isUpdatesEnabled(): bool;
    public repaintUnclipped(): void;
    public setUpdatesEnabled(enable: bool): void;
    public update(): void;
    public update(x: int, y: int, w: int, h: int): void;
    public update(): void;
    public repaint(): void;
    public repaint(erase: bool): void;
    public repaint(x: int, y: int, w: int, h: int, erase?: bool): void;
    public show(): void;
    public hide(): void;
    public setShown(show: bool): void;
    public setHidden(hide: bool): void;
    public showMinimized(): void
    iconify(): void;
    public showMinimized(): void;
    public showMaximized(): void;
    public showFullScreen(): void;
    public showNormal(): void;
    public polish(): void;
    public Polish(): void;
    public close(): bool;
    public raise(): void;
    public lower(): void;
    public stackUnder(): void;
    public move(x: int, y: int): void;
    public move(): void;
    public resize(w: int, h: int): void;
    public resize(): void;
    public setGeometry(x: int, y: int, w: int, h: int): void;
    public setGeometry(): void;
    public close(alsoDelete: bool): bool;
    public isVisible(): bool;
    public isVisibleTo(): bool;
    public isVisibleToTLW(): bool;
    public isHidden(): bool;
    public isShown(): bool;
    public isMinimized(): bool;
    public isMaximized(): bool;
    public isFullScreen(): bool;
    public windowState(): uint;
    public setWindowState(windowState: uint): void;
    public setSizePolicy(): void;
    public setSizePolicy(hor: QSizePolicy.SizeType, ver: QSizePolicy.SizeType, hfw: bool): void;
    public heightForWidth(): int;
    public clipRegion(): QRegion;
    public adjustSize(): void;
    public layout(): QLayout;
    public updateGeometry(): void;
    public reparent(): void;
    public erase(): void;
    public erase(x: int, y: int, w: int, h: int): void;
    public scroll(dx: int, dy: int): void;
    public scroll(): void;
    public drawText(): void;
    public drawText(): void;
    public focusWidget(): QWidget;
    public setAcceptDrops(on: bool): void;
    public setAutoMask(): void;
    public setBackgroundOrigin(): void;
    public backgroundOffset(): QPoint;
    public parentWidget(sameWindow: bool): QWidget;
    public testWState(s: WState): WState;
    public testWFlags(f: WFlags): WFlags;
    public static find(): QWidget;
    public static wmapper(): QWidgetMapper;
    public childAt(x: int, y: int, includeThis: bool): QWidget;
    public childAt(): QWidget;
    public graphicsContext(clip_children?: bool): QGfx;
    public clippedRegion(do_children?: bool): QRegion;
    public clippedSerial(do_children?: bool): uint;
    public macCGContext(clipped?: bool): CGContextRef;
    public setWindowOpacity(level: double): void;

    customContextMenuRequested: QSignal<Slot>;
    windowIconChanged: QSignal<Slot>;
    windowTitleChanged: QSignal<Slot>;

}

interface Slot {
    (): void;
}

declare class QDialog extends QWidget {
    constructor(parent?: QWidget, name?: string, modal?: boolean,
        f?: WFlags);


    // public move(x: int, y: int): void;
    // public move(p: QPoint): void;
    // public resize(w: int, h: int): void;
    // public resize(s: QSize): void;
    //public setGeometry(r: QRect): void;
    public setOrientation(orientation: Orientation): void;
    public orientation(): Orientation;
    public setExtension(extension: QWidget): void;
    public extension(): QWidget;
    public sizeGripEnabled: boolean;

    /**
     * Slots
     */
    public exec(): int;
    public open(): void;
    public result(): int;

    public done(r: int): void;
    public accept(): void;

    /**
     * Signals
     */
    accepted: QSignal<Slot>;
    finished: QSignal<(result: int) => void>;
    rejected: QSignal<Slot>;
}

declare class QAbstractButton extends QWidget {
    clicked: QSignal<(checked?: boolean) => void>;
    pressed: QSignal<Slot>;
    released: QSignal<Slot>;
    toggled: QSignal<(checked: boolean) => void>;
}

declare class QCheckBox extends QAbstractButton {
    [key: string] : any; // FIXME
    stateChanged: QSignal<(state: int) => void>;
}

declare class QPushButton extends QAbstractButton {

}

declare class QRadioButton extends QAbstractButton {

}

declare class QToolButton extends QAbstractButton {

}

declare class QSpinBox extends QWidget{
    
}

interface QComboBoxSlotText {
    (text: string): void;
}

interface QComboBoxSlotIndex {
    (index: int): void;
}

declare class QComboBox extends QWidget {
    [key: string] : any;
    activated: QSignal<QComboBoxSlotText | QComboBoxSlotIndex>;
    currentIndexChanged: QSignal<QComboBoxSlotText>;
    currentTextChanged: QSignal<QComboBoxSlotText>;
    editTextChanged: QSignal<QComboBoxSlotText>;
    highlighted: QSignal<QComboBoxSlotText | QComboBoxSlotIndex>;
}

declare enum DialogCode { Rejected, Accepted }


declare class QGroupBox extends QWidget {
    clicked: QSignal<(checked?: boolean) => void>;
    toggled: QSignal<(on: boolean) => void>;
}

declare class QFrame extends QWidget {

}
declare class QAbstractScrollArea extends QFrame {

}

declare type TextFormat = any;
declare type QStyleSheet = any;
declare type QMimeSourceFactory = any;
declare type AnchorAttribute = any;
declare type QSyntaxHighlighter = any;
declare type QEvent = any;
declare type QCString = string;
declare type QTextFormat = any;
declare type QTextCursor = any;

declare enum WordWrap {
    NoWrap,
    WidgetWidth,
    FixedPixelWidth,
    FixedColumnWidth
}

declare enum WrapPolicy {
    AtWordBoundary,
    AtWhiteSpace = 0,
    Anywhere,
    AtWordOrDocumentBoundary
}

declare enum AutoFormatting {
    AutoNone = 0,
    AutoBulletList = 0x00000001,
    AutoAll = 0xffffffff
}

declare enum KeyboardAction {
    ActionBackspace,
    ActionDelete,
    ActionReturn,
    ActionKill,
    ActionWordBackspace,
    ActionWordDelete
}

declare enum CursorAction {
    MoveBackward,
    MoveForward,
    MoveWordBackward,
    MoveWordForward,
    MoveUp,
    MoveDown,
    MoveLineStart,
    MoveLineEnd,
    MoveHome,
    MoveEnd,
    MovePgUp,
    MovePgDown
}

declare enum VerticalAlignment {
    AlignNormal,
    AlignSuperScript,
    AlignSubScript
}

declare enum TextInsertionFlags {
    RedoIndentation = 0x0001,
    CheckNewLines = 0x0002,
    RemoveSelected = 0x0004
}

declare class QTextEdit extends QAbstractScrollArea {


    public clearTags(): void;
    textFormat: TextFormat;
    text: QString;
    paper: QBrush;
    linkUnderline: bool;
    documentTitle: QString;
    length: int;
    wordWrap: WordWrap;
    wrapColumnOrWidth: int;
    wrapPolicy: WrapPolicy;
    hasSelectedText: bool;
    selectedText: QString;
    undoDepth: int;
    overwriteMode: bool;
    modified: bool;
    readOnly: bool;
    undoRedoEnabled: bool;
    tabStopWidth: int;
    tabChangesFocus: bool;
    autoFormatting: AutoFormatting;
    public setPalette(): void;
    public context(): QString;
    public paragraphs(): int;
    public lines(): int;
    public linesOfParagraph(para: int): int;
    public lineOfChar(para: int, chr: int): int;
    public paragraphRect(para: int): QRect;
    public paragraphAt(pos: QPoint): int;
    public charAt(pos: QPoint, para: int): int;
    public paragraphLength(para: int): int;
    public styleSheet(): QStyleSheet;
    public mimeSourceFactory(): QMimeSourceFactory;
    //public heightForWidth(w: int): int;
    public isUndoAvailable(): bool;
    public isRedoAvailable(): bool;
    public anchorAt(pos: QPoint): QString;
    public anchorAt(pos: QPoint, a: AnchorAttribute): QString;
    public isReadOnly(): bool;
    public getCursorPosition(parag: int, index: int): void;
    public isModified(): bool;
    public italic(): bool;
    public bold(): bool;
    public underline(): bool;
    public family(): QString;
    public pointSize(): int;
    public color(): QColor;
    public currentFont(): QFont;
    public alignment(): int;
    public getFormat(para: int, index: int, font: QFont, color: QColor, verticalAlignment: VerticalAlignment): bool;
    public isOverwriteMode(): bool;
    public paragraphBackgroundColor(para: int): QColor;
    public isUndoRedoEnabled(): bool;
    public eventFilter(o: QObject, e: QEvent): bool;
    public setAutoFormatting(features: uint): void;
    public syntaxHighlighter(): QSyntaxHighlighter;
    public setEnabled(): void;
    public setMimeSourceFactory(factory: QMimeSourceFactory): void;
    public setStyleSheet(styleSheet: QStyleSheet): void;
    public scrollToAnchor(name: QString): void;
    public setPaper(pap: QBrush): void;
    public setLinkUnderline(): void;
    public setWordWrap(mode: WordWrap): void;
    public setWrapColumnOrWidth(): void;
    public setWrapPolicy(policy: WrapPolicy): void;
    public copy(): void;
    public append(text: QString): void;
    public setText(txt?: QString, context?: QString): void;
    public setTextFormat(f: TextFormat): void;
    public selectAll(select: bool): void;
    public setTabStopWidth(ts: int): void;
    public zoomIn(range?: int): void;
    public zoomOut(range?: int): void;
    public zoomTo(size: int): void;
    public sync(): void;
    public setReadOnly(b: bool): void;
    public undo(): void;
    public redo(): void;
    public cut(): void;
    public paste(): void;
    public pasteSubType(subtype: QCString): void;
    public clear(): void;
    public del(): void;
    public indent(): void;
    public setItalic(b: bool): void;
    public setBold(b: bool): void;
    public setUnderline(b: bool): void;
    public setFamily(f: QString): void;
    public setPointSize(s: int): void;
    public setColor(c: QColor): void;
    public setVerticalAlignment(a: VerticalAlignment): void;
    public setAlignment(a: int): void;
    //public setParagType(dm: QStyleSheetItem:: DisplayMode, listStyle: QStyleSheetItem:: ListStyle): void;
    public setCursorPosition(parag: int, index: int): void;
    public setSelection(parag_from: int, index_from: int, parag_to: int, index_to: int, selNum: int): void;
    public setSelectionAttributes(selNum: int, back: QColor, invertText: bool): void;
    public setModified(m: bool): void;
    public resetFormat(): void;
    public setUndoDepth(d: int): void;
    public setFormat(f: QTextFormat, flags: int): void;
    public ensureCursorVisible(): void;
    public placeCursor(pos: QPoint, c: QTextCursor): void;
    public moveCursor(action: CursorAction, select: bool): void;
    public doKeyboardAction(action: KeyboardAction): void;
    public removeSelectedText(selNum: int): void;
    public removeSelection(selNum: int): void;
    public setCurrentFont(f: QFont): void;
    public setOverwriteMode(b: bool): void;
    public scrollToBottom(): void;
    public insert(text: QString, insertionFlags: uint): void;
    public insert(): void;
    public insertAt(text: QString, para: int, index: int): void;
    public removeParagraph(para: int): void;
    public insertParagraph(text: QString, para: int): void;
    public setParagraphBackgroundColor(para: int, bg: QColor): void;
    public clearParagraphBackground(para: int): void;
    public setUndoRedoEnabled(b: bool): void;
    public setTabChangesFocus(b: bool): void;
    public polish(): void;
    public setMaxLogLines(numLines: int): void;
    public maxLogLines(): int;
    public textChanged: QSignal<() => void>;
    public selectionChanged: QSignal<() => void>;
    public copyAvailable: QSignal<() => void>;
    public undoAvailable: QSignal<(yes: bool) => void>;
    public redoAvailable: QSignal<(yes: bool) => void>;
    public currentFontChanged: QSignal<(f: QFont) => void>;
    public currentColorChanged: QSignal<(c: QColor) => void>;
    public currentAlignmentChanged: QSignal<(a: int) => void>;
    public currentVerticalAlignmentChanged: QSignal<(a: VerticalAlignment) => void>;
    public cursorPositionChanged: QSignal<(c: QTextCursor) => void>;
    //public cursorPositionChanged: QSignal<(para: int, pos: int) => void>;
    public returnPressed: QSignal<() => void>;
    public modificationChanged: QSignal<(m: bool) => void>;
    public clicked: QSignal<(parag: int, index: int) => void>;
    public doubleClicked: QSignal<(parag: int, index: int) => void>;

}

declare type QUrl = any;

declare class QTextBrowser extends QTextEdit {
    anchorClicked: QSignal<(link: QUrl) => void>;
    backwardAvailable: QSignal<(available: bool) => void>;
    forwardAvailable: QSignal<(available: bool) => void>;
    highlighted: QSignal<(link: QUrl) => void>;
    hi//ghlighted: QSignal<(link:QString) => void>;
    historyChanged: QSignal<Slot>;
    ourceChanged: QSignal<(src: QUrl) => void>;

}

declare enum Alignment {
    AlignLeft,
    AlignRight,
    AlignHCenter,
    AlignJustify,
    AlignTop,
    AlignBottom,
    AlignVCenter
}

declare enum Direction {
    TopToBottom,
    BottomToTop
}

declare class QProgressBar extends QWidget {

    public minimum(): int;
    public maximum(): int;
    public value(): int;
    public text(): QString;
    public setTextVisible(visible: bool): void;
    public isTextVisible(): bool;
    public alignment(): Alignment;
    public setAlignment(alignment: Alignment): void;
    // public sizeHint () : QSize;
    //public minimumSizeHint () : QSize;
    public orientation(): Orientation;
    public setInvertedAppearance(invert: bool): void;
    public invertedAppearance(): bool;
    public setTextDirection(textDirection: Direction): void;
    public textDirection(): Direction;
    public setFormat(format: QString): void;
    public resetFormat(): void;
    public format(): QString;
    public reset(): void;
    public setRange(minimum: int, maximum: int): void;
    public setMinimum(minimum: int): void;
    public setMaximum(maximum: int): void;
    public setValue(value: int): void;
    public setOrientation(): void;


    valueChanged: QSignal<(value: int) => void>;
}

declare namespace QApplication {
    enum Type { Tty, GuiClient, GuiServer }
}

declare type QIcon = any;

declare class QDesktopWidget extends QWidget {
    public isVirtualDesktop(): bool;
    public numScreens(): int;
    public screenCount(): int;
    public primaryScreen(): int;
    public screenNumber(widget: QWidget): int;
    public screenNumber(): int;
    public screen(screen: int): QWidget;
    public screenGeometry(screen?: int): QRect;
    public screenGeometry(widget: QWidget): QRect;
    public screenGeometry(point: QPoint): QRect;
    public availableGeometry(screen?: int): QRect;
    public availableGeometry(widget: QWidget): QRect;
    public availableGeometry(point: QPoint): QRect;

    public resized(): void;
    public workAreaResized(): void;
    public screenCountChanged(): void;

}

declare type QWidgetList = Array<QWidget>;

declare type QClipboard = any;

declare type QSymbianEvent = any;

declare class QApplication {

    public static type(): QApplication.Type;
    public static style(): QStyle;
    public static setStyle(): void;
    public static setStyle(): QStyle;
    public static colorSpec(): int;
    public static setColorSpec(): void;
    public static setGraphicsSystem(): void;
    public static overrideCursor(): QCursor;
    public static setOverrideCursor(): void;
    public static changeOverrideCursor(): void;
    public static restoreOverrideCursor(): void;
    public static palette(): QPalette;
    public static palette(): QPalette;
    public static palette(className: char): QPalette;
    public static setPalette(): void;
    public static font(): QFont;
    public static font(): QFont;
    public static font(className: char): QFont;
    public static setFont(): void;
    public static fontMetrics(): QFontMetrics;
    public static setWindowIcon(icon: QIcon): void;
    public static windowIcon(): QIcon;
    public static mainWidget(): QWidget;
    public static setMainWidget(): void;
    public static allWidgets(): QWidgetList;
    public static topLevelWidgets(): QWidgetList;
    public static desktop(): QDesktopWidget;
    public static activePopupWidget(): QWidget;
    public static activeModalWidget(): QWidget;
    public static clipboard(): QClipboard;
    public static focusWidget(): QWidget;
    public static activeWindow(): QWidget;
    public static setActiveWindow(act: QWidget): void;
    public static widgetAt(p: QPoint): QWidget;
    //public static widgetAt () :  inline QWidget widgetAt(int x, int y) { return;
    public static topLevelAt(p: QPoint): QWidget;
    //public static topLevelAt () :  inline QWidget topLevelAt(int x, int y)  { return;
    public static syncX(): void;
    public static beep(): void;
    public static alert(widget: QWidget, duration: int): void;
    //public static keyboardModifiers () :  Qt::KeyboardModifiers;
    //public static queryKeyboardModifiers () :  Qt::KeyboardModifiers;
    //public static mouseButtons () :  Qt::MouseButtons;
    public static setDesktopSettingsAware(): void;
    public static desktopSettingsAware(): bool;
    public static setCursorFlashTime(): void;
    public static cursorFlashTime(): int;
    public static setDoubleClickInterval(): void;
    public static doubleClickInterval(): int;
    public static setKeyboardInputInterval(): void;
    public static keyboardInputInterval(): int;
    public static setWheelScrollLines(): void;
    public static wheelScrollLines(): int;
    public static setGlobalStrut(): void;
    public static globalStrut(): QSize;
    public static setStartDragTime(ms: int): void;
    public static startDragTime(): int;
    public static setStartDragDistance(l: int): void;
    public static startDragDistance(): int;
    //public static setLayoutDirection (direction : Qt::LayoutDirection) :  void;
    //public static layoutDirection () :  Qt::LayoutDirection;
    //public static layoutDirection () :  inline bool isRightToLeft() { return;
    //public static layoutDirection () :  inline bool isLeftToRight() { return;
    public static isEffectEnabled(): bool;
    public static setEffectEnabled(): void;
    public macEventFilter(): bool;
    public x11EventFilter(): bool;
    public x11ClientMessage(): int;
    public x11ProcessEvent(): int;
    public symbianProcessEvent(event: QSymbianEvent): int;
    public symbianEventFilter(event: QSymbianEvent): bool;
    public qwsEventFilter(): bool;
    public qwsProcessEvent(): int;
    //public qwsSetCustomColors (colortable : QRgb,start : int,numColors : int) : void;
    //public static qwsDecoration () :  QDecoration;
    public static qwsSetDecoration(): void;
    //public static qwsSetDecoration (decoration : QString) :  QDecoration;
    //public static platformNativeInterface () :  QPlatformNativeInterface;
    public winFocus(): void;
    public static winMouseButtonUp(): void;
    public isSessionRestored(): bool;
    public sessionId(): QString;
    public sessionKey(): QString;
    //public commitData (sm : QSessionManager) :  void;
    //public saveState (sm : QSessionManager) :  void;
    public setInputContext(): void;
    //public inputContext () : QInputContext;
    //public static keyboardInputLocale () :  QLocale;
    //public static keyboardInputDirection () :  Qt::LayoutDirection;
    public static exec(): int;
    public notify(): bool;
    public static setQuitOnLastWindowClosed(quit: bool): void;
    public static quitOnLastWindowClosed(): bool;
    //public static setKeypadNavigationEnabled () :  Q_DECL_DEPRECATED void;
    public static keypadNavigationEnabled(): bool;
    //public static setNavigationMode (mode : Qt::NavigationMode) :  void;
    //public static navigationMode () :  Qt::NavigationMode;
    public lastWindowClosed(): void;
    public focusChanged(old: QWidget, now: QWidget): void;
    public fontDatabaseChanged(): void;
    //public commitDataRequest (sessionManager : QSessionManager) : void;
    //public saveStateRequest (sessionManager : QSessionManager) : void;
    public aboutToReleaseGpuResources(): void;
    public aboutToUseGpuResources(): void;
    public styleSheet(): QString;
    public setStyleSheet(sheet: QString): void;
    public setAutoMaximizeThreshold(threshold: int): void;
    public autoMaximizeThreshold(): int;
    public setAutoSipEnabled(enabled: bool): void;
    public autoSipEnabled(): bool;
    public static closeAllWindows(): void;
    public static aboutQt(): void;

}
