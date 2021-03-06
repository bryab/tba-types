declare namespace Qt {
  const Checked;
  const UnChecked;
  const DecorationRole;
  type HANDLE = any;

  enum AlignmentFlag {
    AlignLeft,
    AlignLeading,
    AlignRight,
    AlignTrailing,
    AlignJustify,
    AlignAbsolute,
    AlignHorizontal_Mask,
    AlignBottom,
    AlignVCenter,
    AlignVertical_Mask
  }

  type AlignmentFlags = AlignmentFlag;
  type Alignment = AlignmentFlag;
  enum AnchorAttribute {
    AnchorName,
    AnchorHref
  }

  enum WindowFlag {}
  type WindowFlags = WindowFlag;

  enum AnchorPoint {
    AnchorLeft,
    AnchorHorizontalCenter,
    AnchorRight,
    AnchorTop,
    AnchorBottom
  }

  enum ApplicationAttribute {
    AA_ImmediateWidgetCreation,
    AA_MSWindowsUseDirect3DByDefault,
    AA_DontShowIconsInMenus,
    AA_NativeWindows,
    AA_MacPluginApplication,
    AA_DontUseNativeMenuBar,
    AA_MacDontSwapCtrlAndMeta,
    AA_S60DisablePartialScreenInputMode,
    AA_X11InitThreads,
    AA_CaptureMultimediaKeys
  }

  enum ArrowType {
    NoArrow,
    UpArrow,
    DownArrow,
    LeftArrow
  }

  enum AspectRatioMode {
    IgnoreAspectRatio,
    KeepAspectRatio,
    KeepAspectRatioByExpanding
  }

  enum Axis {
    XAxis,
    YAxis,
    ZAxis
  }

  enum BGMode {
    TransparentMode,
    OpaqueMode
  }

  enum BrushStyle {
    NoBrush,
    SolidPattern,
    Dense1Pattern,
    Dense2Pattern,
    Dense4Pattern,
    Dense5Pattern,
    Dense6Pattern,
    HorPattern,
    VerPattern,
    CrossPattern,
    FDiagPattern,
    DiagCrossPattern,
    LinearGradientPattern,
    ConicalGradientPattern,
    TexturePattern
  }

  enum CaseSensitivity {
    CaseInsensitive,
    CaseSensitive
  }

  enum CheckState {
    Unchecked,
    PartiallyChecked,
    Checked
  }

  enum ClipOperation {
    NoClip,
    ReplaceClip,
    IntersectClip,
    UniteClip
  }

  enum ConnectionType {
    AutoConnection,
    DirectConnection,
    QueuedConnection,
    AutoCompatConnection,
    UniqueConnection
  }

  enum ContextMenuPolicy {
    NoContextMenu,
    DefaultContextMenu,
    ActionsContextMenu,
    CustomContextMenu
  }

  enum CoordinateSystem {
    DeviceCoordinates,
    LogicalCoordinates
  }

  enum Corner {
    TopLeftCorner,
    TopRightCorner,
    BottomLeftCorner,
    BottomRightCorner
  }

  /**
   * This enum describes the movement style available to text cursors.
   */
  enum CursorMoveStyle {
    LogicalMoveStyle,
    VisualMoveStyle
  }

  enum CursorShape {
    ArrowCursor,
    UpArrowCursor,
    CrossCursor,
    WaitCursor,
    SizeVerCursor,
    SizeHorCursor,
    SizeBDiagCursor,
    SizeAllCursor,
    BlankCursor,
    SplitVCursor,
    PointingHandCursor,
    ForbiddenCursor,
    WhatsThisCursor,
    OpenHandCursor,
    ClosedHandCursor,
    DragCopyCursor,
    DragLinkCursor,
    LastCursor,
    BitmapCursor
  }

  enum DateFormat {
    TextDate,
    ISODate,
    SystemLocaleDate,
    LocalDate,
    SystemLocaleShortDate,
    SystemLocaleLongDate,
    DefaultLocaleShortDate
  }

  enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Saturday,
    Sunday
  }

  enum DockWidgetArea {
    LeftDockWidgetArea,
    RightDockWidgetArea,
    TopDockWidgetArea,
    BottomDockWidgetArea,
    AllDockWidgetAreas,
    NoDockWidgetArea
  }

  enum DockWidgetAreaSizes {
    NDockWidgetAreas
  }

  enum DropAction {
    CopyAction,
    MoveAction,
    LinkAction,
    ActionMask,
    IgnoreAction
  }

  enum EventPriority {
    HighEventPriority,
    NormalEventPriority,
    LowEventPriority
  }

  enum FillRule {
    OddEvenFill,
    WindingFill
  }

  enum FocusPolicy {
    NoFocus,
    TabFocus,
    ClickFocus,
    StrongFocus
  }

  enum FocusReason {
    MouseFocusReason,
    TabFocusReason,
    BacktabFocusReason,
    ActiveWindowFocusReason,
    ShortcutFocusReason,
    MenuBarFocusReason,
    OtherFocusReason
  }

  enum GestureFlag {
    DontStartGestureOnChildren,
    ReceivePartialGestures,
    IgnoredGesturesPropagateToParent
  }

  type GestureFlags = GestureFlag;
  enum GestureState {
    NoGesture,
    GestureStarted,
    GestureUpdated,
    GestureFinished
  }

  enum GestureType {
    TapGesture,
    TapAndHoldGesture,
    PanGesture,
    PinchGesture,
    CustomGesture,
    LastGestureType
  }

  enum GlobalColor {
    color0,
    color1,
    black,
    white,
    gray,
    lightGray,
    red,
    blue,
    cyan,
    magenta,
    darkRed,
    darkGreen,
    darkBlue,
    darkMagenta,
    darkYellow,
    transparent
  }

  enum HitTestAccuracy {
    ExactHit,
    FuzzyHit
  }

  enum ImageConversionFlag {
    ColorMode_Mask,
    AutoColor,
    ColorOnly,
    MonoOnly,
    ThresholdAlphaDither,
    OrderedAlphaDither,
    DiffuseAlphaDither,
    Dither_Mask,
    DiffuseDither,
    OrderedDither,
    DitherMode_Mask,
    AutoDither,
    PreferDither,
    NoOpaqueDetection,
    NoFormatConversion
  }

  type ImageConversionFlags = ImageConversionFlag;
  enum Initialization {
    Uninitialized
  }

  enum InputMethodHint {
    ImhNone,
    ImhHiddenText,
    ImhNoAutoUppercase,
    ImhPreferNumbers,
    ImhPreferLowercase,
    ImhNoPredictiveText,
    ImhDigitsOnly,
    ImhUppercaseOnly,
    ImhLowercaseOnly,
    ImhDialableCharactersOnly,
    ImhUrlCharactersOnly,
    ImhExclusiveInputMask
  }

  type InputMethodHints = InputMethodHint;

  enum InputMethodQuery {
    ImMicroFocus,
    ImFont,
    ImCursorPosition,
    ImSurroundingText,
    ImMaximumTextLength,
    ImAnchorPosition
  }

  enum ItemDataRole {
    DisplayRole,
    DecorationRole,
    EditRole,
    ToolTipRole,
    WhatsThisRole,
    FontRole,
    TextAlignmentRole,
    BackgroundRole,
    TextColorRole,
    ForegroundRole,
    AccessibleTextRole,
    AccessibleDescriptionRole,
    SizeHintRole,
    DisplayPropertyRole,
    DecorationPropertyRole,
    ToolTipPropertyRole,
    WhatsThisPropertyRole,
    UserRole
  }

  enum ItemFlag {
    NoItemFlags,
    ItemIsSelectable,
    ItemIsEditable,
    ItemIsDragEnabled,
    ItemIsUserCheckable,
    ItemIsEnabled,
    ItemIsTristate
  }

  type ItemFlags = ItemFlag;
  enum ItemSelectionMode {
    ContainsItemShape,
    IntersectsItemShape,
    ContainsItemBoundingRect,
    IntersectsItemBoundingRect
  }

  enum Key {
    Key_Escape,
    Key_Tab,
    Key_Backtab,
    Key_Backspace,
    Key_Enter,
    Key_Insert,
    Key_Delete,
    Key_Print,
    Key_SysReq,
    Key_Clear,
    Key_End,
    Key_Left,
    Key_Up,
    Key_Down,
    Key_PageUp,
    Key_PageDown,
    Key_Control,
    Key_Meta,
    Key_Alt,
    Key_NumLock,
    Key_ScrollLock,
    Key_F1,
    Key_F3,
    Key_F4,
    Key_F5,
    Key_F7,
    Key_F8,
    Key_F9,
    Key_F11,
    Key_F12,
    Key_F13,
    Key_F15,
    Key_F16,
    Key_F17,
    Key_F19,
    Key_F20,
    Key_F21,
    Key_F23,
    Key_F24,
    Key_F25,
    Key_F27,
    Key_F28,
    Key_F29,
    Key_F31,
    Key_F32,
    Key_F33,
    Key_F35,
    Key_Super_L,
    Key_Super_R,
    Key_Hyper_L,
    Key_Hyper_R,
    Key_Help,
    Key_Direction_R,
    Key_Space,
    Key_Any,
    Key_QuoteDbl,
    Key_NumberSign,
    Key_Dollar,
    Key_Ampersand,
    Key_Apostrophe,
    Key_ParenLeft,
    Key_Asterisk,
    Key_Plus,
    Key_Comma,
    Key_Period,
    Key_Slash,
    Key_0,
    Key_2,
    Key_3,
    Key_4,
    Key_6,
    Key_7,
    Key_8,
    Key_Colon,
    Key_Semicolon,
    Key_Less,
    Key_Greater,
    Key_Question,
    Key_At,
    Key_B,
    Key_C,
    Key_D,
    Key_F,
    Key_G,
    Key_H,
    Key_J,
    Key_K,
    Key_L,
    Key_N,
    Key_O,
    Key_P,
    Key_R,
    Key_S,
    Key_T,
    Key_V,
    Key_W,
    Key_X,
    Key_Z,
    Key_BracketLeft,
    Key_Backslash,
    Key_AsciiCircum,
    Key_Underscore,
    Key_QuoteLeft,
    Key_Bar,
    Key_BraceRight,
    Key_AsciiTilde,
    Key_exclamdown,
    Key_cent,
    Key_sterling,
    Key_yen,
    Key_brokenbar,
    Key_section,
    Key_copyright,
    Key_ordfeminine,
    Key_guillemotleft,
    Key_hyphen,
    Key_registered,
    Key_macron,
    Key_plusminus,
    Key_twosuperior,
    Key_threesuperior,
    Key_mu,
    Key_paragraph,
    Key_periodcentered,
    Key_onesuperior,
    Key_masculine,
    Key_guillemotright,
    Key_onehalf,
    Key_threequarters,
    Key_questiondown,
    Key_Aacute,
    Key_Acircumflex,
    Key_Atilde,
    Key_Aring,
    Key_AE,
    Key_Ccedilla,
    Key_Eacute,
    Key_Ecircumflex,
    Key_Ediaeresis,
    Key_Iacute,
    Key_Icircumflex,
    Key_Idiaeresis,
    Key_Ntilde,
    Key_Ograve,
    Key_Oacute,
    Key_Otilde,
    Key_Odiaeresis,
    Key_multiply,
    Key_Ugrave,
    Key_Uacute,
    Key_Ucircumflex,
    Key_Yacute,
    Key_THORN,
    Key_ssharp,
    Key_ydiaeresis,
    Key_AltGr,
    Key_Multi_key,
    Key_SingleCandidate,
    Key_MultipleCandidate,
    Key_PreviousCandidate,
    Key_Kanji,
    Key_Muhenkan,
    Key_Henkan,
    Key_Hiragana,
    Key_Katakana,
    Key_Hiragana_Katakana,
    Key_Hankaku,
    Key_Zenkaku_Hankaku,
    Key_Touroku,
    Key_Kana_Lock,
    Key_Kana_Shift,
    Key_Eisu_Shift,
    Key_Hangul,
    Key_Hangul_Start,
    Key_Hangul_End,
    Key_Hangul_Jamo,
    Key_Hangul_Romaja,
    Key_Hangul_Jeonja,
    Key_Hangul_PreHanja,
    Key_Hangul_PostHanja,
    Key_Hangul_Special,
    Key_Dead_Acute,
    Key_Dead_Circumflex,
    Key_Dead_Tilde,
    Key_Dead_Breve,
    Key_Dead_Abovedot,
    Key_Dead_Diaeresis,
    Key_Dead_Doubleacute,
    Key_Dead_Caron,
    Key_Dead_Cedilla,
    Key_Dead_Iota,
    Key_Dead_Voiced_Sound,
    Key_Dead_Semivoiced_Sound,
    Key_Dead_Hook,
    Key_Dead_Horn,
    Key_Back,
    Key_Stop,
    Key_Refresh,
    Key_VolumeDown,
    Key_VolumeUp,
    Key_BassBoost,
    Key_BassUp,
    Key_TrebleUp,
    Key_TrebleDown,
    Key_MediaPlay,
    Key_MediaPrevious,
    Key_MediaNext,
    Key_MediaRecord,
    Key_MediaTogglePlayPause,
    Key_HomePage,
    Key_Favorites,
    Key_Standby,
    Key_OpenUrl,
    Key_LaunchMail,
    Key_Launch0,
    Key_Launch1,
    Key_Launch2,
    Key_Launch4,
    Key_Launch5,
    Key_Launch6,
    Key_Launch8,
    Key_Launch9,
    Key_LaunchA,
    Key_LaunchC,
    Key_LaunchD,
    Key_LaunchE,
    Key_MonBrightnessUp,
    Key_MonBrightnessDown,
    Key_KeyboardLightOnOff,
    Key_KeyboardBrightnessDown,
    Key_PowerOff,
    Key_WakeUp,
    Key_ScreenSaver,
    Key_WWW,
    Key_Memo,
    Key_Shop,
    Key_History,
    Key_AddFavorite,
    Key_BrightnessAdjust,
    Key_Finance,
    Key_Community,
    Key_BackForward,
    Key_ApplicationLeft,
    Key_ApplicationRight,
    Key_CD,
    Key_Calculator,
    Key_ToDoList,
    Key_Close,
    Key_Copy,
    Key_Cut,
    Key_DOS,
    Key_Documents,
    Key_Excel,
    Key_Game,
    Key_Go,
    Key_iTouch,
    Key_Market,
    Key_Meeting,
    Key_MenuKB,
    Key_MySites,
    Key_News,
    Key_OfficeHome,
    Key_Paste,
    Key_Phone,
    Key_Calendar,
    Key_Reload,
    Key_RotateWindows,
    Key_RotationPB,
    Key_Save,
    Key_Send,
    Key_Spell,
    Key_Support,
    Key_TaskPane,
    Key_Terminal,
    Key_Travel,
    Key_Video,
    Key_Word,
    Key_ZoomIn,
    Key_ZoomOut,
    Key_Away,
    Key_WebCam,
    Key_MailForward,
    Key_Pictures,
    Key_Battery,
    Key_Bluetooth,
    Key_WLAN,
    Key_AudioForward,
    Key_AudioRepeat,
    Key_AudioRandomPlay,
    Key_AudioCycleTrack,
    Key_Time,
    Key_Hibernate,
    Key_TopMenu,
    Key_PowerDown,
    Key_Suspend,
    Key_LaunchG,
    Key_LaunchH,
    Key_MediaLast,
    Key_Yes,
    Key_No,
    Key_Cancel,
    Key_Execute,
    Key_Sleep,
    Key_Play,
    Key_Context1,
    Key_Context2,
    Key_Context3,
    Key_Call,
    Key_Hangup,
    Key_Flip,
    Key_VoiceDial,
    Key_LastNumberRedial,
    Key_Camera,
    Key_unknown
  }

  enum KeyboardModifier {
    NoModifier,
    ShiftModifier,
    ControlModifier,
    AltModifier,
    KeypadModifier,
    GroupSwitchModifier,
    KeyboardModifierMask
  }

  enum LayoutDirection {
    LeftToRight,
    RightToLeft,
    LayoutDirectionAuto
  }

  enum MaskMode {
    MaskInColor,
    MaskOutColor
  }

  enum MatchFlag {
    MatchExactly,
    MatchContains,
    MatchStartsWith,
    MatchEndsWith,
    MatchWildcard,
    MatchFixedString,
    MatchCaseSensitive,
    MatchRecursive
  }

  type MatchFlags = MatchFlag;
  enum Modifier {
    META,
    SHIFT,
    CTRL,
    ALT,
    UNICODE_ACCEL
  }

  enum MouseButton {
    NoButton,
    LeftButton,
    RightButton,
    MidButton,
    XButton1,
    XButton2,
    MouseButtonMask
  }

  enum NavigationMode {
    NavigationModeNone,
    NavigationModeKeypadTabOrder,
    NavigationModeKeypadDirectional,
    NavigationModeCursorAuto
  }

  enum Orientation {
    Horizontal,
    Vertical
  }

  enum PenCapStyle {
    FlatCap,
    SquareCap,
    RoundCap,
    MPenCapStyle
  }

  enum PenJoinStyle {
    MiterJoin,
    BevelJoin,
    RoundJoin,
    SvgMiterJoin
  }

  enum PenStyle {
    NoPen,
    SolidLine,
    DashLine,
    DotLine,
    DashDotDotLine,
    CustomDashLine,
    MPenStyle
  }

  enum ScrollBarPolicy {
    ScrollBarAsNeeded,
    ScrollBarAlwaysOff,
    ScrollBarAlwaysOn
  }

  enum ShortcutContext {
    WidgetShortcut,
    WindowShortcut,
    ApplicationShortcut,
    WidgetWithChildrenShortcut
  }

  enum SizeHint {
    MinimumSize,
    PreferredSize,
    MaximumSize,
    MinimumDescent
  }

  enum SizeMode {
    AbsoluteSize,
    RelativeSize
  }

  enum SortOrder {
    AscendingOrder,
    DescendingOrder
  }

  enum TextElideMode {
    ElideLeft,
    ElideRight,
    ElideMiddle,
    ElideNone
  }

  enum TextFlag {
    TextSingleLine,
    TextDontClip,
    TextExpandTabs,
    TextShowMnemonic,
    TextWrapAnywhere,
    TextDontPrint,
    TextIncludeTrailingSpaces,
    TextJustificationForced,
    TextForceLeftToRight,
    TextForceRightToLeft,
    TextBypassShaping
  }

  type TextFlags = TextFlag;
  enum TextFormat {
    PlainText,
    RichText,
    AutoText,
    LogText
  }

  enum TextInteractionFlag {
    NoTextInteraction,
    TextSelectableByMouse,
    TextSelectableByKeyboard,
    LinksAccessibleByMouse,
    TextEditable,
    TextEditorInteraction,
    TextBrowserInteraction
  }

  type TextInteractionFlags = TextInteractionFlag;
  enum TileRule {
    StretchTile,
    RepeatTile,
    RoundTile
  }

  enum TimeSpec {
    LocalTime,
    UTC,
    OffsetFromUTC
  }

  enum ToolBarArea {
    LeftToolBarArea,
    RightToolBarArea,
    TopToolBarArea,
    BottomToolBarArea,
    AllToolBarAreas,
    NoToolBarArea
  }

  enum ToolBarAreaSizes {
    NToolBarAreas
  }

  enum ToolButtonStyle {
    ToolButtonIconOnly,
    ToolButtonTextOnly,
    ToolButtonTextBesideIcon,
    ToolButtonTextUnderIcon
  }

  /**
   * This enum represents the state of a touch point at the time the QTouchEvent occurred.
   */
  enum TouchPointState {
    TouchPointPressed,
    TouchPointMoved,
    TouchPointStationary,
    TouchPointReleased,
    TouchPointPrimary
  }

  enum TransformationMode {
    FastTransformation,
    SmoothTransformation
  }

  enum UIEffect {
    UI_General,
    UI_AnimateMenu,
    UI_FadeMenu,
    UI_AnimateCombo,
    UI_FadeTooltip,
    UI_AnimateToolBox
  }

  enum WhiteSpaceMode {
    WhiteSpaceNormal,
    WhiteSpacePre,
    WhiteSpaceNoWrap,
    WhiteSpaceModeUndefined
  }

  enum WidgetAttribute {
    WA_Disabled,
    WA_UnderMouse,
    WA_MouseTracking,
    WA_ContentsPropagated,
    WA_NoBackground,
    WA_StaticContents,
    WA_LaidOut,
    WA_NoSystemBackground,
    WA_UpdatesDisabled,
    WA_Mapped,
    WA_PaintOutsidePaintEvent,
    WA_InputMethodEnabled,
    WA_WState_Visible,
    WA_ForceDisabled,
    WA_KeyCompression,
    WA_PendingMoveEvent,
    WA_SetPalette,
    WA_SetFont,
    WA_SetCursor,
    WA_WindowModified,
    WA_Resized,
    WA_Moved,
    WA_InvalidSize,
    WA_MacBrushedMetal,
    WA_MacMetalStyle,
    WA_LayoutOnEntireRect,
    WA_OutsideWSRange,
    WA_GrabbedShortcut,
    WA_PaintUnclipped,
    WA_SetWindowIcon,
    WA_NoMouseReplay,
    WA_RightToLeft,
    WA_SetLayoutDirection,
    WA_NoChildEventsForParent,
    WA_WState_Created,
    WA_WState_CompressKeys,
    WA_WState_InPaintEvent,
    WA_WState_ConfigPending,
    WA_WState_Polished,
    WA_WState_DND,
    WA_WState_ExplicitShowHide,
    WA_ShowModal,
    WA_MouseNoMask,
    WA_NoMousePropagation,
    WA_Hover,
    WA_InputMethodTransparent,
    WA_KeyboardFocusChange,
    WA_AcceptDrops,
    WA_DropSiteRegistered,
    WA_WindowPropagation,
    WA_NoX11EventCompression,
    WA_TintedBackground,
    WA_AlwaysShowToolTips,
    WA_MacOpaqueSizeGrip,
    WA_SetStyle,
    WA_MacShowFocusRect,
    WA_MacNormalSize,
    WA_MacSmallSize,
    WA_LayoutUsesWidgetRect,
    WA_StyledBackground,
    WA_MSWindowsUseDirect3D,
    WA_MacAlwaysShowToolWindow,
    WA_StyleSheet,
    WA_ShowWithoutActivating,
    WA_NativeWindow,
    WA_DontCreateNativeAncestors,
    WA_MacVariableSize,
    WA_X11NetWmWindowTypeDesktop,
    WA_X11NetWmWindowTypeDock,
    WA_X11NetWmWindowTypeToolBar,
    WA_X11NetWmWindowTypeUtility,
    WA_X11NetWmWindowTypeSplash,
    WA_X11NetWmWindowTypeDialog,
    WA_X11NetWmWindowTypePopupMenu,
    WA_X11NetWmWindowTypeToolTip,
    WA_X11NetWmWindowTypeNotification,
    WA_X11NetWmWindowTypeDND,
    WA_MacFrameworkScaled,
    WA_SetWindowModality,
    WA_TranslucentBackground,
    WA_AcceptTouchEvents,
    WA_WState_AcceptedTouchBeginEvent,
    WA_MergeSoftkeys,
    WA_MergeSoftkeysRecursively,
    WA_LockPortraitOrientation,
    WA_AutoOrientation,
    WA_X11DoNotAcceptFocus,
    WA_SymbianNoSystemRotation,
    WA_AttributeCount
  }

  enum WindowFrameSection {
    NoSection,
    LeftSection,
    TopLeftSection,
    TopSection,
    RightSection,
    BottomRightSection,
    BottomSection,
    TitleBarArea
  }

  enum WindowModality {
    NonModal,
    WindowModal,
    ApplicationModal
  }

  enum WindowState {
    WindowNoState,
    WindowMinimized,
    WindowMaximized,
    WindowFullScreen
  }

  type WindowStates = WindowState;

  enum WindowType {
    Widget,
    Window,
    Dialog,
    Sheet,
    Popup,
    Tool,
    ToolTip,
    Desktop,
    SubWindow,
    WindowType_Mask,
    MSWindowsOwnDC,
    X11BypassWindowManagerHint,
    FramelessWindowHint,
    WindowSystemMenuHint,
    WindowMinimizeButtonHint,
    WindowMaximizeButtonHint,
    WindowContextHelpButtonHint,
    WindowShadeButtonHint,
    WindowStaysOnTopHint,
    WindowStaysOnBottomHint,
    WindowCloseButtonHint,
    MacWindowToolBarButtonHint,
    WindowOkButtonHint,
    WindowCancelButtonHint,
    WindowSoftkeysVisibleHint
  }
}
