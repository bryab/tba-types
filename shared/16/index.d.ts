/**
 * The about JavaScript global object. Provides information about the main application and the platform on which the script is running
 */
declare module about {
    /**
     * Returns a string that represents the flavor of the application. e.g. Harmony.
     */
    function getFlavorString(): string;
  
    /**
     * Returns the version info string.
     */
    function getVersionInfoStr(): string;
  
    /**
     * Returns the major version number.
     */
    function getMajorVersion(): int;
  
    /**
     * Returns the minor version number.
     */
    function getMinorVersion(): int;
  
    /**
     * Returns the patch version number.
     */
    function getPatchVersion(): int;
  
    /**
     * Returns the build number.
     */
    function getBuildNumber(): int;
  
    /**
     * returns a string that is the name of application.
     */
    function productName(): string;
  
    /**
     * Returns true whenever this application is a Commercial/Full variant.
     */
    function isFullVersion(): boolean;
  
    /**
     * Returns true whenever this application is a Demo variant.
     */
    function isDemoVersion(): boolean;
  
    /**
     * Returns true whenever this application is an Educational variant.
     */
    function isEducVersion(): boolean;
  
    /**
     * Returns true when connected to a database or when compiled with Harmony.
     */
    function isHarmony(): boolean;
  
    /**
     * Returns true whenever the application running is an Essentials variant.
     */
    function isStageEssentials(): boolean;
  
    /**
     * Returns true whenever the application running is an Advanced variant.
     */
    function isStageAdvanced(): boolean;
  
    /**
     * Returns true whenever the application running is Stage.
     */
    function isStage(): boolean;
  
    /**
     * Returns true when running Storyboard.
     */
    function isStoryboard(): boolean;
  
    /**
     * Returns true when running on Windows.
     */
    function isWindowsArch(): boolean;
  
    /**
     * Returns true when running on Linux.
     */
    function isLinuxArch(): boolean;
  
    /**
     * Returns true when running on MacOS.
     */
    function isMacArch(): boolean;
  
    /**
     * Returns true when running on an Apple OS X operating system or when on Mac Intel.
     */
    function isMacIntelArch(): boolean;
  
    /**
     * Returns true when running on an Apple OS X operating system or when on Mac PowerPC.
     */
    function isMacPpcArch(): boolean;
  
    /**
     * Returns true whenever this application is interactive. All application capable of running scripts are interactive.
     */
    function isInteractiveApp(): boolean;
  
    /**
     * Returns true when the application running is Scan.
     */
    function isScanApp(): boolean;
  
    /**
     * Returns true when the application is Harmony or Storyboard, and not a peripheral application.
     */
    function isMainApp(): boolean;
  
    /**
     * Returns true whenever the application running application is ControlCenter.
     */
    function isControlCenterApp(): boolean;
  
    /**
     * Returns true when the application is in Paint mode.
     */
    function isPaintMode(): boolean;
  
    /**
     * Returns true when the application is in Xsheet mode.
     */
    function isXsheetMode(): boolean;
  
    /**
     * Returns true when the application is in Database mode.
     */
    function isDatabaseMode(): boolean;
  
    /**
     * Returns the application. Identical to property "applicationPath".
     */
    function getApplicationPath(): string;
  
    /**
     * Returns the folder where the binaries can be found.
     */
    function getBinaryPath(): string;
  
    /**
     * Returns the folder where the resources can be found.
     */
    function getResourcesPath(): string;
  
    /**
     * Returns the user name.
     */
    function getUserName(): string;
  
    /**
     * See isFullVersion().
     */
    var fullVersion: boolean;
  
    /**
     * See isDemoVersion().
     */
    var demoVersion: boolean;
  
    /**
     * See isEducVersion().
     */
    var educVersion: boolean;
  
    /**
     * See isHarmony().
     */
    var harmony: boolean;
  
    /**
     * See isStageEssentials().
     */
    var essentials: boolean;
  
    /**
     * See isStageAdvanced().
     */
    var advanced: boolean;
  
    /**
     * See isStage().
     */
    var stage: boolean;
  
    /**
     * See isStoryboard().
     */
    var storyboard: boolean;
  
    /**
     * See isWindowsArch().
     */
    var windowsArch: boolean;
  
    /**
     * See isLinuxArch().
     */
    var linuxArch: boolean;
  
    /**
     * See isMacArch().
     */
    var macArch: boolean;
  
    /**
     * See isMacIntelArch().
     */
    var macIntelArch: boolean;
  
    /**
     * See isMacIntelArch().
     */
    var macPpcArch: boolean;
  
    /**
     * See isMainApp().
     */
    var mainApp: boolean;
  
    /**
     * See isInteractiveApp().
     */
    var interactiveApp: boolean;
  
    /**
     * See isScanApp().
     */
    var scanApp: boolean;
  
    /**
     * See isControlCenterApp().
     */
    var controlCenterApp: boolean;
  
    /**
     * See isPaintMode().
     */
    var paintMode: boolean;
  
    /**
     * See isXsheetMode().
     */
    var xsheetMode: boolean;
  
    /**
     * Application with GUI folder (different than binFolder on Mac, same for all other platforms).
     */
    var applicationPath: string;
  
    /**
     * See getBinaryPath().
     */
    var binaryPath: string;
  
    /**
     * See getUserName().
     */
    var userName: string;
  
    /**
     * See getResourcesPath().
     */
    var resourcesPath: string;
  
    /**
     * See isDatabaseMode().
     */
    var databaseMode: boolean;
  
    /**
     * See getMajorVersion.
     */
    var majorVersion: int;
  
    /**
     * See getMinorVersion.
     */
    var minorVersion: int;
  
    /**
     * See getPatchVersion.
     */
    var patchVersion: int;
  
    /**
     * See getBuildNumber.
     */
    var buildNumber: int;
  }