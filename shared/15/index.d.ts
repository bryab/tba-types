/**
 * Returns information about the current application running the script and its environment. You can use it in both Script Editor and scriptModule
 */
declare namespace about {
  /**
   * Query if current platform is Windows.
   */
  function isWindowsArch(): boolean;

  /**
   * Query if current platform is Linux.
   */
  function isLinuxArch(): boolean;

  /**
   * Query if current platform is Mac.
   */
  function isMacArch(): boolean;

  /**
   * Query if current platform is Mac Intel.
   */
  function isMacIntelArch(): boolean;

  /**
   * Query if current platform is Mac Power PC.
   */
  function isMacPpcArch(): boolean;

  /**
   * Query current application folder.
   */
  function getApplicationPath(): string;

  /**
   * Query common binary folder.
   */
  function getBinaryPath(): string;

  /**
   * Query common resources folder.
   */
  function getResourcesPath(): string;

  /**
   * returns a string that represents the flavour of the application, e.g. Harmony,
   */
  function getFlavorString(): string;

  /**
   * returns the version info string.
   */
  function getVersionInfoStr(): string;

  /**
   * returns a string that is the name of application.
   */
  function productName(): string;

  /**
   * returns true whenever this application is a Commercial/Full variant.
   */
  function isFullVersion(): boolean;

  /**
   * returns true whenever this application is a Demo variant.
   */
  function isDemoVersion(): boolean;

  /**
   * returns true whenever this application is an Educational variant.
   */
  function isEducVersion(): boolean;

  /**
   * true when connected to a database or when compiled with Harmony.
   */
  function isHarmony(): boolean;

  /**
   * only true when running as Stage Essentials.
   */
  function isStageEssentials(): boolean;

  /**
   * only true when running as Stage Advanced
   */
  function isStageAdvanced(): boolean;

  /**
   * only true when running as Stage.
   */
  function isStage(): boolean;

  /**
   * only true when running as Storyboard.
   */
  function isStoryboard(): boolean;

  /**
   * returns true when running on Windows.
   */
  function isWindowsArch(): boolean;

  /**
   * returns true when running on linux.
   */
  function isLinuxArch(): boolean;

  /**
   * returns true when running on MacOS.
   */
  function isMacArch(): boolean;

  /**
   * returns true when running on an Apple OS X operating system and on a Mac Intel.
   */
  function isMacIntelArch(): boolean;

  /**
   * returns true when running on an Apple OS X operating system and on a Mac PowerPC.
   */
  function isMacPpcArch(): boolean;

  /**
   * returns true whenever this application is interactive. All application capable of running scripts are interactive.
   */
  function isInteractiveApp(): boolean;

  /**
   * true when this application is Scan.
   */
  function isScanApp(): boolean;

  /**
   * returns true when this application is Stage, or Storyboard, and not a peripheral application.
   */
  function isMainApp(): boolean;

  /**
   * returns true whenever this application running application is ControlCenter
   */
  function isControlCenterApp(): boolean;

  /**
   * returns true when this application is in Paint mode.
   */
  function isPaintMode(): boolean;

  /**
   * returns true when this application is in Xsheet mode.
   */
  function isXsheetMode(): boolean;

  /**
   * returns the application. Identical to property "applicationPath".
   */
  function getApplicationPath(): string;

  /**
   * returns the folder where the binaries can be found.
   */
  function getBinaryPath(): string;

  /**
   * returns the folder where the resources can be found.
   */
  function getResourcesPath(): string;

  /**
   * Return the user name.
   */
  function getUserName(): string;

  /**
   * Current platform is Windows.
   */
  var windowsArch: boolean;

  /**
   * Current platform is Linux.
   */
  var linuxArch: boolean;

  /**
   * Current platform is Mac.
   */
  var macArch: boolean;

  /**
   * Current platform is Mac Intel.
   */
  var macIntelArch: boolean;

  /**
   * Current platform is Mac Power PC.
   */
  var macPpcArch: boolean;

  /**
   * Application with GUI folder (different than binFolder on Mac. Same for all other platforms ).
   */
  var applicationPath: string;

  /**
   * Common binary folder.
   */
  var binaryPath: string;

  /**
   * Common resources folder.
   */
  var resourcesPath: string;

  /**
   * See isFullVersion.
   */
  var fullVersion: boolean;

  /**
   * See isDemoVersion.
   */
  var demoVersion: boolean;

  /**
   * See isEducVersion.
   */
  var educVersion: boolean;

  /**
   * See isHarmony.
   */
  var harmony: boolean;

  /**
   * See isStageEssentials.
   */
  var essentials: boolean;

  /**
   * See isStageAdvanced.
   */
  var advanced: boolean;

  /**
   * See isStage.
   */
  var state: boolean;

  /**
   * See isStoryboard.
   */
  var storyboard: boolean;

  /**
   * See isMainApp.
   */
  var mainApp: boolean;

  /**
   * See isInteractiveApp.
   */
  var interactiveApp: boolean;

  /**
   * See isScanApp.
   */
  var scanApp: boolean;

  /**
   * See isControlCenterApp.
   */
  var controlCenterApp: boolean;

  /**
   * See isPaintMode.
   */
  var paintMode: boolean;

  /**
   * See isXsheetMode.
   */
  var xsheetMode: boolean;

  var userName: string;
}
