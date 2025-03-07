/// <reference path="../../shared/qtscript.d.ts" />

/**
 * Undocumented types (FIXME)
 */
declare class BAPP_SpecialFolders {}
declare class GlobalObject {}
declare class QScriptable {}
declare class SCRIPT_QSWidget extends QWidget {}
declare class Labeled extends QWidget {}
declare class MO_SignalEmitter extends QWidget {}
declare class SCR_AbstractInterface {}
declare type QScriptContext = any;
declare type QScriptEngine = any;
declare type QScriptValue = any;
declare type DD_DragObject = any;
declare class UI_DialogController {}

/**
 * The path to the current .js file being run.
 * @example
 * var currentFilePath = __file__; Result: /path/to/file.js
 */
declare var __file__: string;

/**
 * The name of the current .js file being run.
 * @example
 * var currentFileName = __FILE__; Result: file.js
 */
declare var __FILE__: string;

declare class SCR_BaseInterface {}

/**
 * The ComboBox JavaScript class. A simplified version of the ComboBox Qt widget.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classComboBox.html}
 * @example
 * var myDialog = new Dialog();
 * myDialog.title = "ComboBox Example";
 *
 * var userInput = new ComboBox();
 * userInput.label = "What is your favourite colour?"
 *
 * userInput.editable = true;
 * userInput.itemList = ["Red", "Green", "Blue", "Yellow", "White", "Pink", "Orange", "Purple", "Black"];
 *
 * myDialog.add(userInput);
 *
 * if (myDialog.exec())
 *     MessageLog.trace("The user�s favourite colour is " + userInput.currentItem + ".");
 */
declare class ComboBox extends Labeled {
  /**
   * The currently selected item.
   * @returns {string}
   */
  currentItem: string;

  /**
   * The index of the current item.
   * @returns {int}
   */
  currentItemPos: int;

  /**
   * Toggle whether the combo box may be edited by the user.
   * @returns {boolean}
   */
  editable: boolean;

  /**
   * The stringlist of items.
   * @returns {StringList}
   */
  itemList: StringList;
}

/**
 * The DateEdit JavaScript class. A simplified version of the DateEdit Qt widget.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classDateEdit.html}
 * @example
 * var myDialog = new Dialog();
 * myDialog.title = "DateEdit Example";
 *
 * var userInput = new DateEdit();
 *
 * //YMD means the order will be changed to Year:Month:Day in the dialog.
 * //The possible orders are DMY, MDY, YMD, YDM.
 * userInput.order = DateEditEnum.YMD;
 *
 * var min = new Date(2010, 1, 1);
 * var max = new Date(2019, 12, 31);
 * var now = new Date();
 *
 * userInput.date = now;
 * userInput.minimum = min;
 * userInput.maximum = max;
 *
 * userInput.label = "Pick a date from this decade: ";
 *
 * myDialog.add(userInput);
 *
 * if (myDialog.exec()) {
 *     var inputDate = userInput.date;
 *     var day = inputDate.getDate();
 *     var month = inputDate.getMonth() + 1;
 *     var year = inputDate.getFullYear();
 *
 *     MessageLog.trace("The selected date is " + day + "/" + month + "/" + year + ".");
 * }
 */
declare class DateEdit extends Labeled {
  /**
   * The date shown.
   * @returns {QDate}
   */
  date: QDate;

  /**
   * The maximum date allowed by DateEdit.
   * @returns {QDate}
   */
  maximum: QDate;

  /**
   * The minimum date allowed by DateEdit.
   * @returns {QDate}
   */
  minimum: QDate;

  /**
   * Whether the date order shown is DMY, MDY, YMD, or YDM.
   * @returns {int}
   */
  order: int;
}

/**
 * The LineEdit JavaScript class. A simplified version of the LineEdit Qt widget.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classLineEdit.html}
 * @example
 * var myDialog = new Dialog();
 * myDialog.title = "LineEdit Example";
 *
 * var userInput = new LineEdit();
 * userInput.label = "What is your favourite colour?";
 * myDialog.add(userInput);
 *
 * if (myDialog.exec()) {
 *     var inputText = userInput.text;
 *     MessageLog.trace("Your favourite colour is " + inputText + "!");
 * }
 */
declare class LineEdit extends Labeled {
  /**
   * Text shown in the LineEdit.
   * @returns {string}
   */
  text: string;
}

/**
 * The NumberEdit JavaScript class. A simplified version of the NumberEdit Qt widget.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classNumberEdit.html}
 * @example
 * var myDialog = new Dialog();
 * myDialog.title = "NumberEdit Example";
 *
 * var userInput = new NumberEdit();
 * userInput.decimals = 3;
 * userInput.minimum = 0;
 * userInput.maximum = 1;
 * userInput.label = "Enter a number between 0 and 1: ";
 * myDialog.add(userInput);
 *
 * if (myDialog.exec()) {
 *     var inputNum = userInput.value;
 *     MessageLog.trace(inputNum);
 * }
 */
declare class NumberEdit extends Labeled {
  /**
   * The precision of the NumberEdit.
   * @returns {double}
   */
  decimals: double;

  /**
   * The maximum value allowed by NumberEdit.
   * @returns {double}
   */
  maximum: double;

  /**
   * The minimum value allowed by NumberEdit.
   * @returns {double}
   */
  minimum: double;

  /**
   * The value shown.
   * @returns {double}
   */
  value: double;
}

/**
 * The Slider JavaScript class. A simplified version of the Slider Qt widget.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classSlider.html}
 * @example
 * var mySlider;
 *
 * function sliderExample() {
 *     var myDialog = new Dialog();
 *     myDialog.title = "Slider Example";
 *
 *     var userInput = new Slider();
 *     userInput.label = "Pick a number."
 *
 *     userInput.minimum = -50;
 *     userInput.maximum = 50;
 *     userInput.value = 0;
 *     userInput.orientation = "Vertical";
 *
 *     //Whenever the valueChanged() signal is sent,
 *     // the current value of the slider will be printed
 *     userInput.callback = "printVal";
 *
 *     mySlider = userInput;
 *
 *     myDialog.add(userInput);
 *
 *     myDialog.exec();
 * }
 *
 * function printVal() {
 *     //This prints a continuous stream of updating values, as they are changed
 *     MessageLog.trace(mySlider.value);
 * }
 */
declare class Slider extends Labeled {
  /**
   * Sets the value in the slider, triggering the callback.
   * @param {int} value
   * @returns {void}
   */
  public valueChanged(value: int): void;

  /**
   * Use this to assign the name of another function. This function will be triggered automatically when
   * the slider value is modified.
   * @returns {string}
   */
  callback: string;

  /**
   * The maximum value of the slider.
   * @returns {int}
   */
  maximum: int;

  /**
   * The minimum value of the slider.
   * @returns {int}
   */
  minimum: int;

  /**
   * Whether or not the slider is horizontal or vertical.
   * @returns {string}
   */
  orientation: string;

  /**
   * The value of the slider.
   * @returns {int}
   */
  value: int;
}

/**
 * The SpinBox JavaScript class. A simplified version of the SpinBox Qt widget.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classSpinBox.html}
 * @example
 * var myDialog = new Dialog();
 * myDialog.title = "SpinBox Example";
 *
 * var userInput = new SpinBox();
 * userInput.label = "Pick a number: ";
 *
 * userInput.maximum = 100;
 * userInput.minimum = 1;
 *
 * myDialog.add(userInput);
 *
 * if (myDialog.exec())
 *     MessageLog.trace("The chosen number is: " + userInput.value + ".");
 */
declare class SpinBox extends Labeled {
  /**
   * The maximum value that the spinBox will ascend to. Default value is 99.
   * @returns {int}
   */
  maximum: int;

  /**
   * The minimum value that the spinBox will descend to. Default value is 0.
   * @returns {int}
   */
  minimum: int;

  /**
   * The value shown in the spinBox. Default value is 0.
   * @returns {int}
   */
  value: int;
}

/**
 * The TimeEdit JavaScript class. A simplified version of the TimeEdit Qt widget.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classTimeEdit.html}
 * @example
 * var myDialog = new Dialog();
 * myDialog.title = "TimeEdit Example";
 *
 * var userInput = new TimeEdit();
 *
 * var min = new QTime(15, 00, 00);
 * var max = new QTime(18, 00, 00);
 * var preset = new QTime(15, 00, 00);
 *
 * userInput.time = preset;
 * userInput.minimum = min;
 * userInput.maximum = max;
 *
 * //These two lines are redundant, as these are already the default values
 * userInput.showSeconds = false;
 * userInput.showAMPM = true;
 *
 * userInput.label = "Pick an appointment time: ";
 *
 * myDialog.add(userInput);
 *
 * if (myDialog.exec())
 *     MessageLog.trace("The chosen time is: " + userInput.time + ".");
 */
declare class TimeEdit extends Labeled {
  /**
   * The maximum time allowed by TimeEdit.
   * @returns {QTime}
   */
  maximum: QTime;

  /**
   * The minimum time allowed by TimeEdit.
   * @returns {QTime}
   */
  minimum: QTime;

  /**
   * Toggle to display the AM : PM display.
   * @returns {boolean}
   */
  showAMPM: boolean;

  /**
   * Toggle to display seconds in the time.
   * @returns {boolean}
   */
  showSeconds: boolean;

  /**
   * The current time.
   * @returns {QTime}
   */
  time: QTime;
}

/**
 * The about JavaScript global object. Provides information about the main application and the platform
 * on which the script is running.
 * The about class allows querying of platform and application specific ants.
 * The about class allows querying of platform and application specific ants.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classabout.html}
 * @example
 * function printAbout() {
 *     // Application: full, demo or educational
 *     MessageLog.trace("Full (commercial) version: " + about.fullVersion);
 *     MessageLog.trace("Demo version: " + about.demoVersion);
 *     MessageLog.trace("Educational version: " + about.educVersion);
 *     MessageLog.trace("Harmony product : " + about.harmony);
 *
 *     // Software/Product
 *     MessageLog.trace("Windows architecture: " + about.windowsArch);
 *     MessageLog.trace("OSX architecture: " + about.macArch);
 *     MessageLog.trace("OSX PowerPC architecture: " + about.macPpcArch);
 *     MessageLog.trace("OSC Intel architecture: " + about.macIntelArch);
 *     MessageLog.trace("Linux architecture: " + about.linuxArch);
 *     MessageLog.trace("Interactive: " + about.interactiveApp);
 *
 *     // Architecture
 *     MessageLog.trace("Harmony mode: " + about.mainApp);
 *     MessageLog.trace("Paint mode: " + about.paintMode);
 *     MessageLog.trace("XSheet mode: " + about.xsheetMode);
 *
 *     // Type of Application
 *     MessageLog.trace("Scan application: " + about.scanApp);
 *     MessageLog.trace("ControlCenter application: " + about.controlCenterApp);
 *     MessageLog.trace("Application path: " + about.applicationPath);
 * }
 */
declare class about extends QObject {
  /**
   * Query current application folder.
   * @returns {string}
   */
  public getApplicationPath(): string;

  /**
   * Returns the application. Identical to property "applicationPath".
   * @returns {string}
   */
  public getApplicationPath(): string;

  /**
   * Query common binary folder.
   * @returns {string}
   */
  public getBinaryPath(): string;

  /**
   * Returns the folder where the binaries can be found.
   * @returns {string}
   */
  public getBinaryPath(): string;

  /**
   * Returns the build number.
   * @returns {int}
   */
  public getBuildNumber(): int;

  /**
   * Returns a string that represents the flavor of the application. e.g. Harmony.
   * @returns {string}
   */
  public getFlavorString(): string;

  /**
   * Returns the major version number.
   * @returns {int}
   */
  public getMajorVersion(): int;

  /**
   * Returns the minor version number.
   * @returns {int}
   */
  public getMinorVersion(): int;

  /**
   * Returns the patch version number.
   * @returns {int}
   */
  public getPatchVersion(): int;

  /**
   * Query common resources folder.
   * @returns {string}
   */
  public getResourcesPath(): string;

  /**
   * Returns the folder where the resources can be found.
   * @returns {string}
   */
  public getResourcesPath(): string;

  /**
   * Returns the user name.
   * @returns {string}
   */
  public getUserName(): string;

  /**
   * Returns the version info string.
   * @returns {string}
   */
  public getVersionInfoStr(): string;

  /**
   * Returns true whenever the application running application is ControlCenter.
   * @returns {boolean}
   */
  public isControlCenterApp(): boolean;

  /**
   * Returns true when the application is in Database mode.
   * @returns {boolean}
   */
  public isDatabaseMode(): boolean;

  /**
   * Returns true whenever this application is a Demo variant.
   * @returns {boolean}
   */
  public isDemoVersion(): boolean;

  /**
   * Returns true whenever this application is an Educational variant.
   * @returns {boolean}
   */
  public isEducVersion(): boolean;

  /**
   * Returns true whenever this application is a Commercial/Full variant.
   * @returns {boolean}
   */
  public isFullVersion(): boolean;

  /**
   * Returns true when connected to a database or when compiled with Harmony.
   * @returns {boolean}
   */
  public isHarmony(): boolean;

  /**
   * Returns true whenever this application is interactive. All application capable of running scripts
   * are interactive.
   * @returns {boolean}
   */
  public isInteractiveApp(): boolean;

  /**
   * Query if current platform is Linux.
   * @returns {boolean}
   */
  public isLinuxArch(): boolean;

  /**
   * Returns true when running on Linux.
   * @returns {boolean}
   */
  public isLinuxArch(): boolean;

  /**
   * Query if current platform is Mac.
   * @returns {boolean}
   */
  public isMacArch(): boolean;

  /**
   * Returns true when running on MacOS.
   * @returns {boolean}
   */
  public isMacArch(): boolean;

  /**
   * Query if current platform is Mac Intel.
   * @returns {boolean}
   */
  public isMacIntelArch(): boolean;

  /**
   * Returns true when running on an Apple OS X operating system or when on Mac Intel.
   * @returns {boolean}
   */
  public isMacIntelArch(): boolean;

  /**
   * Query if current platform is Mac Power PC.
   * @returns {boolean}
   */
  public isMacPpcArch(): boolean;

  /**
   * Returns true when running on an Apple OS X operating system or when on Mac PowerPC.
   * @returns {boolean}
   */
  public isMacPpcArch(): boolean;

  /**
   * Returns true when the application is Harmony or Storyboard, and not a peripheral application.
   * @returns {boolean}
   */
  public isMainApp(): boolean;

  /**
   * Returns true when the application is in Paint mode.
   * @returns {boolean}
   */
  public isPaintMode(): boolean;

  /**
   * Returns true when the application running is Scan.
   * @returns {boolean}
   */
  public isScanApp(): boolean;

  /**
   * Returns true whenever the application running is Stage.
   * @returns {boolean}
   */
  public isStage(): boolean;

  /**
   * Returns true whenever the application running is an Advanced variant.
   * @returns {boolean}
   */
  public isStageAdvanced(): boolean;

  /**
   * Returns true whenever the application running is an Essentials variant.
   * @returns {boolean}
   */
  public isStageEssentials(): boolean;

  /**
   * Returns true when running Storyboard.
   * @returns {boolean}
   */
  public isStoryboard(): boolean;

  /**
   * Query if current platform is Windows.
   * @returns {boolean}
   */
  public isWindowsArch(): boolean;

  /**
   * Returns true when running on Windows.
   * @returns {boolean}
   */
  public isWindowsArch(): boolean;

  /**
   * Returns true when the application is in Xsheet mode.
   * @returns {boolean}
   */
  public isXsheetMode(): boolean;

  /**
   * returns a string that is the name of application.
   * @returns {string}
   */
  public productName(): string;

  /**
   * See isStageAdvanced().
   * @returns {boolean}
   */
  advanced: boolean;

  /**
   * Application with GUI folder (different than binFolder on Mac. Same for all other platforms ).
   * Application with GUI folder (different than binFolder on Mac, same for all other platforms).
   * @returns {string}
   */
  applicationPath: string;

  /**
   * Common binary folder.
   * See getBinaryPath().
   * @returns {string}
   */
  binaryPath: string;

  /**
   * See getBuildNumber.
   * @returns {int}
   */
  buildNumber: int;

  /**
   * See isControlCenterApp().
   * @returns {boolean}
   */
  controlCenterApp: boolean;

  /**
   * See isDatabaseMode().
   * @returns {boolean}
   */
  databaseMode: boolean;

  /**
   * See isDemoVersion().
   * @returns {boolean}
   */
  demoVersion: boolean;

  /**
   * See isEducVersion().
   * @returns {boolean}
   */
  educVersion: boolean;

  /**
   * See isStageEssentials().
   * @returns {boolean}
   */
  essentials: boolean;

  /**
   * See isFullVersion().
   * @returns {boolean}
   */
  fullVersion: boolean;

  /**
   * See isHarmony().
   * @returns {boolean}
   */
  harmony: boolean;

  /**
   * See isInteractiveApp().
   * @returns {boolean}
   */
  interactiveApp: boolean;

  /**
   * Current platform is Linux.
   * See isLinuxArch().
   * @returns {boolean}
   */
  linuxArch: boolean;

  /**
   * Current platform is Mac.
   * See isMacArch().
   * @returns {boolean}
   */
  macArch: boolean;

  /**
   * Current platform is Mac Intel.
   * See isMacIntelArch().
   * @returns {boolean}
   */
  macIntelArch: boolean;

  /**
   * Current platform is Mac Power PC.
   * See isMacIntelArch().
   * @returns {boolean}
   */
  macPpcArch: boolean;

  /**
   * See isMainApp().
   * @returns {boolean}
   */
  mainApp: boolean;

  /**
   * See getMajorVersion.
   * @returns {int}
   */
  majorVersion: int;

  /**
   * See getMinorVersion.
   * @returns {int}
   */
  minorVersion: int;

  /**
   * See isPaintMode().
   * @returns {boolean}
   */
  paintMode: boolean;

  /**
   * See getPatchVersion.
   * @returns {int}
   */
  patchVersion: int;

  /**
   * Common resources folder.
   * See getResourcesPath().
   * @returns {string}
   */
  resourcesPath: string;

  /**
   * See isScanApp().
   * @returns {boolean}
   */
  scanApp: boolean;

  /**
   * See isStage().
   * @returns {boolean}
   */
  stage: boolean;

  /**
   * See isStoryboard().
   * @returns {boolean}
   */
  storyboard: boolean;

  /**
   * See getUserName().
   * @returns {string}
   */
  userName: string;

  /**
   * Current platform is Windows.
   * See isWindowsArch().
   * @returns {boolean}
   */
  windowsArch: boolean;

  /**
   * See isXsheetMode().
   * @returns {boolean}
   */
  xsheetMode: boolean;
}

/**
 * Base class for color and texture pots stored in palettes.
 * Also see Palette.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classBaseColor.html}
 */
declare class BaseColor extends QObject {
  /**
   * @param {string} n
   * @returns {void}
   */
  public setName(n: string): void;

  /**
   * Unique ID of the color.
   * @returns {string}
   */
  id: string;

  /**
   * If true, the color pot is a texture.
   * @returns {boolean}
   */
  isTexture: boolean;

  /**
   * Returns true if the color is valid.
   * @returns {boolean}
   */
  isValid: boolean;

  /**
   * The color pot name.
   * @returns {string}
   */
  name: string;
}

/**
 * The CaptionManager JavaScript class. Access the caption properties of a panel.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classCaptionManager.html}
 * @example
 *  var cm = new CaptionManager();
 *  var sb = new StoryboardManager();
 *
 *  // Retrieve the first panel in the project.
 *  var panelId = sb.panelInProject(0);
 *
 *  var str = "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0//EN\" \"http://www.w3.org/TR/REC-html40/strict.dtd\">\
 *  <html>\
 *    <head>\
 *      <meta name=\"qrichtext\" content=\"1\" />\
 *      <style type=\"text/css\">p, li { white-space: pre-wrap; }</style>\
 *    </head>\
 *    <body style=\" font-family:'Sans Serif'; font-size:9pt; font-weight:400; font-style:normal;\">\
 *     <p style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\">New Text</p>\
 *    </body>\
 *  </html>";
 *
 *  // Add a caption named Private Notes, and assign the string to the caption in the first panel
 *  if (cm.addPanelCaption("Private Notes"))
 *      cm.setPanelCaptionText("Private Notes", panelId, str);
 */
declare class CaptionManager extends QObject {
  /**
   * Add a panel caption.
   * @param {string} name - The title of the caption
   * @returns {boolean}
   */
  public addPanelCaption(name: string): boolean;

  /**
   * Add a panel sketch.
   * @param {string} name - The title of the caption
   * @param {string} panelId - The uniqueId of panel
   * @returns {boolean}
   */
  public addPanelSketch(name: string, panelId: string): boolean;

  /**
   * Add a project caption.
   * @param {string} name - The title of Caption
   * @returns {boolean}
   */
  public addProjectCaption(name: string): boolean;

  /**
   * Delete a panel caption.
   * @param {string} name - The title of the caption
   * @returns {boolean}
   */
  public deletePanelCaption(name: string): boolean;

  /**
   * Delete a panel sketch.
   * @param {string} name - The title of the caption
   * @param {string} panelId - The uniqueId of panel
   * @returns {boolean}
   */
  public deletePanelSketch(name: string, panelId: string): boolean;

  /**
   * Delete a project caption.
   * @param {string} name - The title of the caption
   * @returns {boolean}
   */
  public deleteProjectCaption(name: string): boolean;

  /**
   * Return the name of the panel caption at the given index.
   * @param {int} index - The index of the ith caption in the scene
   * @returns {string}
   */
  public nameOfPanelCaption(index: int): string;

  /**
   * Return the name of the panel caption at the given index.
   * @param {int} index - The position of the caption
   * @returns {string}
   */
  public nameOfProjectCaption(index: int): string;

  /**
   * Return the number of panel captions.
   * @returns {int}
   */
  public numberOfPanelCaptions(): int;

  /**
   * Return the number of project captions.
   * @returns {int}
   */
  public numberOfProjectCaptions(): int;

  /**
   * Rename a panel caption.
   * @param {string} name - The existing title of the caption
   * @param {string} newName - The new title of the caption
   * @returns {boolean}
   */
  public renamePanelCaption(name: string, newName: string): boolean;

  /**
   * Rename a panel sketch.
   * @param {string} name - The title of the caption
   * @param {string} panelId - The uniqueId of panel
   * @param {string} newName - The new title of the caption
   * @returns {boolean}
   */
  public renamePanelSketch(
    name: string,
    panelId: string,
    newName: string
  ): boolean;

  /**
   * Rename a project caption.
   * @param {string} name - The title of the caption
   * @param {string} newName - The new title of the caption
   * @returns {boolean}
   */
  public renameProjectCaption(name: string, newName: string): boolean;

  /**
   * Set text on a panel caption.
   * @param {string} name - The title of the caption
   * @param {string} panelId - The uniqueId of the panel
   * @param {string} text - The new text formated in HTML
   * @returns {boolean}
   */
  public setPanelCaptionText(
    name: string,
    panelId: string,
    text: string
  ): boolean;

  /**
   * Set new text in a project caption.
   * @param {string} name - The title of the caption
   * @param {string} text - A new text for the caption
   * @returns {boolean}
   */
  public setProjectCaptionText(name: string, text: string): boolean;

  /**
   * Return the text of the panel caption.
   * @param {string} name - The title of the caption
   * @param {string} panelId - The uniqueId of the panel
   * @returns {string}
   */
  public textOfPanelCaption(name: string, panelId: string): string;

  /**
   * Return the text of the project caption.
   * @param {string} name - The title of Caption
   * @returns {string}
   */
  public textOfProjectCaption(name: string): string;
}

/**
 * The ColorManager JavaScript class. This interface is used to control the current palette active
 * color.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classColorManager.html}
 * @example
 * // Active the color at index 6 of the current color
 * var cm = new ColorManager();
 * var id = cm.getColorIdFromPosition(6);
 * MessageLog.trace("ColorID: " + id)
 * cm.setActiveColor(id);
 */
declare class ColorManager extends QObject {
  /**
   * Add a new color to the palette with the current RGBA value.
   * @returns {void}
   */
  public addCurrentColorToPalette(): void;

  /**
   * Export the color palette to a .plt file.
   * @param {string} path - full path for the output file (Note: if the file already exists, it will be overwritten)
   * @returns {void}
   */
  public exportColors(path: string): void;

  /**
   * Get the color data of a color from the palette.
   * @param {string} id - id of the color in the palette
   * @returns {BaseColor}
   * @example
   * var cm = new ColorManager();
   * var id = getColorIdFromPosition(5)
   * var color = cm.getColorDataWithId(id);
   *
   * MessageLog.trace("r : " + color.colorData.r);
   * MessageLog.trace("g : " + color.colorData.g);
   * MessageLog.trace("b : " + color.colorData.b);
   * MessageLog.trace("a : " + color.colorData.a);
   */
  public getColorDataWithId(id: string): BaseColor;

  /**
   * Get the color data of a color from the palette.
   * @param {int} index - position of the color in the palette
   * @returns {BaseColor}
   * @example
   * var cm = new ColorManager();
   * var color = cm.getColorDataWithIndex(2);
   *
   * MessageLog.trace("r : " + color.colorData.r);
   * MessageLog.trace("g : " + color.colorData.g);
   * MessageLog.trace("b : " + color.colorData.b);
   * MessageLog.trace("a : " + color.colorData.a);
   */
  public getColorDataWithIndex(index: int): BaseColor;

  /**
   * Gets the Id of a color from the palette.
   * @param {int} index - the position of the color in the palette
   * @returns {string}
   */
  public getColorIdFromPosition(index: int): string;

  /**
   * Get the color data of the currently active color.
   * @returns {ColorRGBA}
   * @example
   * var cm = new ColorManager();
   * var color = cm.getCurrentColorData();
   *
   * MessageLog.trace("r : " + color.r);
   * MessageLog.trace("g : " + color.g);
   * MessageLog.trace("b : " + color.b);
   * MessageLog.trace("a : " + color.a);
   */
  public getCurrentColorData(): ColorRGBA;

  /**
   * Gets the Hue of the currently active color.
   * @returns {int}
   */
  public getCurrentColorH(): int;

  /**
   * Get the opacity of the currently active color.
   * @returns {int}
   */
  public getCurrentColorOpacity(): int;

  /**
   * Gets the Saturation of the currently active color.
   * @returns {int}
   */
  public getCurrentColorS(): int;

  /**
   * Gets the Value of the currently active color.
   * @returns {int}
   */
  public getCurrentColorV(): int;

  /**
   * Import colors from a .plt file.
   * @param {string} path - path to the .plt file
   * @param {boolean} importDuplicate - whether or not duplicate colors will be imported
   * @returns {void}
   */
  public importColors(path: string, importDuplicate: boolean): void;

  /**
   * Import a texture.
   * @param {string} path - path to the texture file
   * @returns {void}
   */
  public importTexture(path: string): void;

  /**
   * Remove the currently selected color from the palette.
   * @returns {void}
   */
  public removeCurrentColor(): void;

  /**
   * @returns {void}
   */
  public saveAsDefaultPalette(): void;

  /**
   * Select a color from the palette to be the active one.
   * @param {string} id - Id of the color
   * @returns {void}
   */
  public setActiveColor(id: string): void;

  /**
   * Set a HSV value to the currently active color.
   * @param {int} h - Hue (between 0 and 255)
   * @param {int} s - Saturation (between 0 and 100)
   * @param {int} v - Value (between 0 and 100)
   * @param {int} a - Alpha (between 0 and 255)
   * @returns {void}
   */
  public setCurrentColorHSVA(h: int, s: int, v: int, a: int): void;

  /**
   * Set the opacity of the currently active color.
   * @param {int} a - alpha (opacity) (between 0 and 255)
   * @returns {void}
   */
  public setCurrentColorOpacity(a: int): void;

  /**
   * Set a RGB value to the currently active color.
   * @param {int} r - Red channel value (between 0 and 255)
   * @param {int} g - Green channel value (between 0 and 255)
   * @param {int} b - Blue channel value (between 0 and 255)
   * @param {int} a - Alpha value (between 0 and 255)
   * @returns {void}
   */
  public setCurrentColorRGBA(r: int, g: int, b: int, a: int): void;
}

/**
 * The ColorRGBA JavaScript class. Represent an 8 bits per channel Red Green Blue Alpha colour.
 * The ColorRGBA class defines a four-dimensional container for colors. ColorRGBA objects can be
 * instantiated in the scripting environment.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classColorRGBA.html}
 */
declare class ColorRGBA extends QObject {
  /**
   * Create a new default ColorRGBA (ie. opaque white).
   * @returns {void}
   */
  constructor();

  /**
   * Create a new ColorRGBA.
   * @param {double} r Red value
   * @param {double} g Green value
   * @param {double} b Blue value
   * @param {double} a Alpha value
   * @returns {void}
   */
  constructor(r: double, g: double, b: double, a: double);

  /**
   * alpha value [ 0, 255 ]
   * @returns {int}
   */
  a: int;

  /**
   * blue value [ 0, 255 ]
   * @returns {int}
   */
  b: int;

  /**
   * green value [ 0, 255 ]
   * @returns {int}
   */
  g: int;

  /**
   * red value [ 0, 255 ]
   * @returns {int}
   */
  r: int;
}

/**
 * The DateEditEnum JavaScript global object. Specifies the type of display order of day, month, year.
 * Use with DateEdit.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classDateEditEnum.html}
 * @example
 * widget.order = DateEditEnum.YDM;
 */
declare class DateEditEnum extends QObject {}

/**
 * The Dir JavaScript class. Interface to operating system Dir operations, e.g. mkdir, rmdir, rename,
 * etc.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classDir.html}
 * @example
 * var dir = new Dir;
 * dir.path = this._exportDir;
 * dir.mkdirs();
 */
declare class Dir extends QObject {
  /**
   * Construct a Dir from a directory path.
   * @param {string} path The path of a directory.
   * @returns {void}
   */
  constructor(path: string);

  /**
   * Get absolute file path for filename given in parameter.
   * @param {string} [file=""] The filename to get the absolute path of.
   * @returns {string}
   */
  public absFilePath(file?: string): string;

  /**
   * Changes the current directory to the given directory name.
   * @param {string} dirName The desired directory name.
   * @returns {void}
   */
  public cd(dirName: string): void;

  /**
   * Go up in directory hierarchy.
   * @returns {void}
   */
  public cdUp(): void;

  /**
   * Returns a list of the names of all the files and directories in the directory, ordered according to
   * the name and attribute filters.
   * @param {string} filter The filter to apply to the directories and files. Ex: "*.js" or "*" for all the content.
   * @param {int} [filterType=-1] (optional) The QDir (see Qt's QDir::Filters documentation) filter type. -1 by default
   * @param {int} [sortFlags=-1] (optional) The QDir (see Qt's QDir::SortFlags documentation) sort flags. -1 by default
   * @returns {StringList}
   * @example
   * var dir = new Dir;
   * dir.path = "c:/myscriptpath/";
   * var scriptsFiles = dir.entryList("*.js"); // retrieve every files with a ".js" extension from the directory c:/myscriptpath
   */
  public entryList(
    filter: string,
    filterType?: int,
    sortFlags?: int
  ): StringList;

  /**
   * Check if the file/folder exist.
   * @param {string} fileName The name of the file/folder.
   * @returns {boolean}
   */
  public fileExists(fileName: string): boolean;

  /**
   * Get file path for the current directory from the file parameter.
   * @param {string} [file=""] The filename to get the path of.
   * @returns {string}
   */
  public filePath(file?: string): string;

  /**
   * Create a directory with given name.
   * @param {string} [dirName=""] The name of the directory to be created.
   * @returns {void}
   */
  public mkdir(dirName?: string): void;

  /**
   * Create directory recursively if a path of a directory not yet created is given.
   * @param {string} [dirName=""] The name of the directory to be created.
   * @returns {void}
   * Note: Does not appear to work on Windows paths.
   */
  public mkdirs(dirName?: string): void;

  /**
   * Remove a file with the given name.
   * @param {string} fileName The name of the file to be removed.
   * @returns {void}
   */
  public remove(fileName: string): void;

  /**
   * Rename a file/folder with the name given to the new name.
   * @param {string} oldName The current name of the file.
   * @param {string} newName The desired name for the file.
   * @returns {void}
   */
  public rename(oldName: string, newName: string): void;

  /**
   * Remove a directory with given name.
   * @param {string} [dirName=""] The name of the directory to be removed.
   * @returns {void}
   */
  public rmdir(dirName?: string): void;

  /**
   * Remove directory recursively if a path of directory is given.
   * @param {string} [dirName=""] The name of the directory to be removed.
   * @returns {void}
   */
  public rmdirs(dirName?: string): void;

  /**
   * Sets the application's current working directory to path.
   * @returns {void}
   */
  public setCurrent(): void;

  /**
   * Returns the absolute path of the directory.
   * @returns {string}
   */
  absPath: string;

  /**
   * Returns the canonical path of the directory.
   * @returns {string}
   */
  canonicalPath: string;

  /**
   * Returns true if the directory exists.
   * @returns {boolean}
   */
  exists: boolean;

  /**
   * Returns the name of the directory.
   * @returns {string}
   */
  name: string;

  /**
   * Returns the path of the directory.
   * @returns {string}
   */
  path: string;

  /**
   * Returns true if the directory is readable.
   * @returns {boolean}
   */
  readable: boolean;
}

/**
 * The DirSpec JavaScript global object. Enum for directory operations.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classDirSpec.html}
 * @example
 * var myDirectorySpec = DirSpec.Dirs;
 */
declare class DirSpec extends QObject {}

/**
 * The DrawingToolParams JavaScript class. Set or unset the "apply on all drawings" setting of the
 * DrawingTools methods.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classDrawingToolParams.html}
 * @example
 * var params = new DrawingToolParams;
 * params.applyAllDrawings = true;
 * DrawingTools.extractCenterline(DrawingTools.lineArt, DrawingTools.colourArt, params);
 */
declare class DrawingToolParams extends QObject {
  /**
   * @returns {boolean}
   */
  public applyAllDrawings(): boolean;

  /**
   * Called when progress updates. Emits signal "pulse".
   * @returns {void}
   */
  public canceled(): void;

  /**
   * Returns the maximum position that pulses will generate.
   * @returns {int}
   */
  public progress(): int;

  /**
   * @returns {int}
   */
  public range(): int;

  /**
   * @param {boolean} b
   * @returns {void}
   */
  public setApplyAllDrawings(b: boolean): void;

  /**
   * Sets the maximum position that pulses will generate.
   * @returns {void}
   */
  public setProgress(): void;

  /**
   * Returns the current progress update.
   * @returns {void}
   */
  public setRange(): void;

  /**
   * Signals cancelation of the processing.
   * @returns {boolean}
   */
  public wasCanceled(): boolean;

  /**
   * Returns true if a cancelation signal was received.
   * @returns {void}
   */
  public pulse: QSignal<() => void>;

  /**
   * @returns {boolean}
   */
  // /* Invalid - Duplicate property name */ applyAllDrawings: boolean;

  /**
   * @returns {int}
   */
  // /* Invalid - Duplicate property name */ progress: int;

  /**
   * @returns {int}
   */
  // /* Invalid - Duplicate property name */ range: int;

  /**
   * @returns {boolean}
   */
  // /* Invalid - Duplicate property name */ wasCanceled: boolean;
}

/**
 * This interface is used to export the storyboard project.
 * The following examples are provided:
 * Exports the entire storyboard to pdf format, using the "Overview 4x3" pdf profile
 * The ExportManager JavaScript class. Export a Storyboard project to an image list or a QuickTime
 * movie.
 * The following examples are provided:
 * Exports the entire storyboard to pdf format, using the "Overview 4x3" pdf profile
 * Exports the scenes 1 through 3 in sequence 1 to the TGA bitmap format, with a resolution of 150 wide
 * by 100 tall, with a 50% zoom factor.
 * Exports scenes 1 through 4 to QuickTime, with a resolution of 400 wide by 300 tall. One movie will
 * be produced for each scene.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classExportManager.html}
 * @example
 * var exp = new ExportManager;
 * exp.setPDFProfile("Overview 4x3");
 * exp.exportToPDF("/home/user/exportTest/untitled.pdf");
 */
declare class ExportManager extends QObject {
  /**
   * Export storyboard panels, taking into consideration the scene camera (layout )
   * Supported bitmap formats are jpg, psd or tga.
   * @param {string} exportDir target directory for export
   * @param {string} filePattern name used for export file
   * @param {string} bitmapFormat allowable format strings are "jpg", "png", "psd" and "tga"
   * @returns {boolean}
   */
  public exportLayout(
    exportDir: string,
    filePattern: string,
    bitmapFormat: string
  ): boolean;

  /**
   * Export storyboard panels, taking into consideration the scene camera (layout )
   * Supported bitmap formats are jpg, psd or tga.
   * @param {string} exportDir target directory for export
   * @param {string} filePattern name used for export file
   * @param {string} bitmapFormat allowable format strings are "jpg", "psd" and "tga"
   * @param {int} resX width of exported image
   * @param {int} resY height of exported image
   * @returns {boolean}
   */
  public exportLayout(
    exportDir: string,
    filePattern: string,
    bitmapFormat: string,
    resX: int,
    resY: int
  ): boolean;

  /**
   * Export storyboard to Avid Media Composer AAF format.
   * Supported bitmap formats are jpg, psd or tga.
   * @param {string} exportFilePath target aaf file path for export
   * @param {string} filePattern name used for export file (images)
   * @param {string} imageFormat allowable format strings are "jpg", "png", "psd" and "tga"
   * @returns {boolean}
   */
  public exportToAAF(
    exportFilePath: string,
    filePattern: string,
    imageFormat: string
  ): boolean;

  /**
   * Export storyboard to bitmap file.
   * Supported bitmap formats are jpg, psd or tga.
   * @param {string} exportDir target directory for export
   * @param {string} filePattern name used for export file
   * @param {string} bitmapFormat allowable format strings are "jpg", "png", "psd" and "tga"
   * @returns {boolean}
   */
  public exportToBitmap(
    exportDir: string,
    filePattern: string,
    bitmapFormat: string
  ): boolean;

  /**
   * Export storyboard to bitmap file.
   * Supported bitmap formats are jpg, psd or tga.
   * @param {string} exportDir target directory for export
   * @param {string} filePattern name used for export file
   * @param {string} bitmapFormat allowable format strings are "jpg", "psd" and "tga"
   * @param {int} resX width of exported image
   * @param {int} resY height of exported image
   * @returns {boolean}
   */
  public exportToBitmap(
    exportDir: string,
    filePattern: string,
    bitmapFormat: string,
    resX: int,
    resY: int
  ): boolean;

  /**
   * Export storyboard to Final Cut Pro XML format.
   * Supported bitmap formats are jpg, psd or tga.
   * @param {string} exportFilePath target xml file path for export
   * @param {string} filePattern name used for export file (images)
   * @param {string} imageFormat allowable format strings are "jpg", "png", "psd" and "tga"
   * @returns {boolean}
   */
  public exportToFCPXML(
    exportFilePath: string,
    filePattern: string,
    imageFormat: string
  ): boolean;

  /**
   * Export storyboard as Toon Boom Harmony scenes.
   * @param {string} exportDir target directory for export
   * @param {string} scenePattern name used for export scene folder
   * @returns {boolean}
   */
  public exportToHarmony(exportDir: string, scenePattern: string): boolean;

  /**
   * Export storyboard to movie file.
   * Supported movie formats are jpg, mov, swf or tga.
   * @param {string} exportDir target directory for export
   * @param {string} filePattern name used for export file
   * @param {string} movieFormat allowable format strings are "jpg", "png", "mov", "openH264" and "tga"
   * @returns {boolean}
   */
  public exportToMovie(
    exportDir: string,
    filePattern: string,
    movieFormat: string
  ): boolean;

  /**
   * Export storyboard to movie file.
   * Supported movie formats are jpg, mov, swf or tga.
   * @param {string} exportDir target directory for export
   * @param {string} filePattern name used for export file
   * @param {string} movieFormat allowable format strings are "jpg", "mov" and "tga"
   * @param {int} resX width of exported image
   * @param {int} resY height of exported image
   * @returns {boolean}
   */
  public exportToMovie(
    exportDir: string,
    filePattern: string,
    movieFormat: string,
    resX: int,
    resY: int
  ): boolean;

  /**
   * Export storyboard for Non-Linear Editing use.
   * @param {string} exportDir target directory for export
   * @param {string} filePattern name used for export files
   * @param {boolean} createEDL true to export to EDL
   * @param {boolean} createAAF true to export to AAF
   * @param {boolean} createXML true to export to XML
   * @param {boolean} generateVideoFiles true to create video files
   * @param {boolean} copyAudioFiles true to copy audio files to exportDir
   * @returns {boolean}
   */
  public exportToNLE(
    exportDir: string,
    filePattern: string,
    createEDL: boolean,
    createAAF: boolean,
    createXML: boolean,
    generateVideoFiles: boolean,
    copyAudioFiles: boolean
  ): boolean;

  /**
   * Export storyboard to pdf file.
   * @param {string} fileName name used for export file
   * @returns {boolean}
   */
  public exportToPDF(fileName: string): boolean;

  /**
   * Returns the names of known pdf profiles.
   * @returns {StringList}
   * @example
   * var listOfProfiles = exp.getPDFProfiles();
   * for (var i = 0; i < listOfProfiles.length; i++)
   *     System.println(listOfProfiles[i]);
   */
  public getPDFProfiles(): StringList;

  /**
   * Set whether or not to add a camera reference layer. Only available when exporting as original
   * scenes.
   * By default, this is false
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setAddCameraRefLayer(flag: boolean): void;

  /**
   * Set whether or not animatic is exported on top. Only available when exporting as rendered animactics
   * with the per sequence option.
   * By default, this is false
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setAnimaticOnTop(flag: boolean): void;

  /**
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setApplyLayerMotionCamera(flag: boolean): void;

  /**
   * Set whether or not transformation is applied on drawings. Only available when exporting as original
   * scenes.
   * By default, this is false
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setApplyTransformationOnDrawing(flag: boolean): void;

  /**
   * Specify how audio is exported to Harmony.
   * Allowable values are "no-process", "process-tracks-individually", "merge-all-tracks", "process-
   * tracks-individually-and-merged"
   * By default, this is "no-process".
   * @param {string} process a string specifying the process
   * @returns {boolean}
   */
  public setAudioExport(process: string): boolean;

  /**
   * Specify Bit Depth for generated audio files.
   * Allowable values are 16 or 8
   * By default, this is 16.
   * @param {int} bitDepth 16 or 8
   * @returns {void}
   */
  public setAudioExportBitDepth(bitDepth: int): void;

  /**
   * Specify the naming pattern for generated audio files.
   * t : Project Title, s : Scene Name, n : Audiotrack #.
   * By default, this is "%t-A%n.wav".
   * @param {string} filePattern a string specifying the file pattern for exported audio files.
   * @returns {void}
   */
  public setAudioExportFilePattern(filePattern: string): void;

  /**
   * Specify Sample Rate for generated audio files (in Hz)
   * By default, this is 22050
   * @param {int} sampleRate Sample Rate in Hz
   * @returns {void}
   */
  public setAudioExportSampleRate(sampleRate: int): void;

  /**
   * Set whether or not to generate stereo audio files.
   * By default, this is true
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setAudioExportStereo(flag: boolean): void;

  /**
   * Set Fit Camera Path.
   * This ensures that the camera paths and control points appear inside the image. By default, this is
   * true.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setBitmapFitCameraPath(flag: boolean): void;

  /**
   * Set Rectify Static Camera.
   * If enabled, if there is a rotation in the camera, the camera frame will appear as straight, and the
   * image will be rotated instead. If disabled the camera frame appears as rotated and the image is
   * straight. By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setBitmapRectifyStatic(flag: boolean): void;

  /**
   * Allow Camera Scaling.
   * This ensures that when a very wide zoom camera movement is included in the panel, the exported image
   * will be bigger in relation to the camera scaling used. By default, this is true.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setCameraScaling(flag: boolean): void;

  /**
   * Set the colour of the background in the caption burn-in.
   * @param {ColorRGBA} color The color to use for the caption burn-in background
   * @returns {void}
   */
  public setCaptionOverlayBgColour(color: ColorRGBA): void;

  /**
   * The caption field to display in the burn-in.
   * @param {string} captionName The name of the caption field
   * @returns {void}
   */
  public setCaptionOverlayField(captionName: string): void;

  /**
   * The font name to use for the caption burn-in.
   * @param {string} fontName The name of the font
   * @returns {void}
   */
  public setCaptionOverlayFont(fontName: string): void;

  /**
   * The height percentage for the caption burn-in.
   * By default, this is 100.
   * @param {int} percent The height percent to use
   * @returns {void}
   */
  public setCaptionOverlayHeightPercentage(percent: int): void;

  /**
   * Set the maximum number shown in the caption burn-in.
   * By default, this is 1
   * @param {int} numLines The number of lines to display
   * @returns {void}
   */
  public setCaptionOverlayMaxLines(numLines: int): void;

  /**
   * Set the position of the caption overlay burn-in.
   * @param {int} position The position to use.
   * @returns {void}
   */
  public setCaptionOverlayPosition(position: int): void;

  /**
   * Set whether or not to display a background behind the caption burn-in.
   * By default, this is false
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setCaptionOverlayShowBgBox(flag: boolean): void;

  /**
   * Set the colour of the text in the caption burn-in.
   * @param {ColorRGBA} color The color to use for the caption burn-in text
   * @returns {void}
   */
  public setCaptionOverlayTextColour(color: ColorRGBA): void;

  /**
   * Sets export colour space.
   * Specify the export colour space.
   * @param {string} colorSpace Color space name to be set.
   * @returns {void}
   */
  public setColorSpace(colorSpace: string): void;

  /**
   * Set whether or not to use custom parameters for the write node.
   * By default, this is false
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setCustomWriteNode(flag: boolean): void;

  /**
   * Set the custom image format to use in the write node.
   * By default, this is "TGA"
   * @param {string} drawingType
   * @returns {void}
   */
  public setCustomWriteNodeDrawingType(drawingType: string): void;

  /**
   * Set the custom file name to use in the write node.
   * By default, this is "final-"
   * @param {string} fileName
   * @returns {void}
   */
  public setCustomWriteNodeFileName(fileName: string): void;

  /**
   * Set the custom path to use in the write node.
   * By default, this is "frames/"
   * @param {string} path a string specifying the path
   * @returns {void}
   */
  public setCustomWriteNodePath(path: string): void;

  /**
   * Export layout in FCP XML By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setExpandRenderAreaToCamera(flag: boolean): void;

  /**
   * Export caption as comments in FCP XML.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setExportCaptions(flag: boolean): void;

  /**
   * Export one image for each layer.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setExportOneImagePerLayer(flag: boolean): void;

  /**
   * Sets export resolution.
   * By default, project resolution is used
   * @param {int} resX width of exported image
   * @param {int} resY height of exported image
   * @returns {void}
   */
  public setExportResolution(resX: int, resY: int): void;

  /**
   * Export markers at scene beginning.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setExportSceneMarkers(flag: boolean): void;

  /**
   * Export scenes reference track.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setExportScenesReferenceTrack(flag: boolean): void;

  /**
   * Export video tracks.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setExportVideoTracks(flag: boolean): void;

  /**
   * Set the default destination folder for FBX exports By default, this is the movies folder.
   * @param {string} path The path to the desired export destination
   * @returns {void}
   */
  public setFBXExportDestination(path: string): void;

  /**
   * Set the default naming pattern for FBX exports By default, this is empty.
   * @param {string} pattern The desired file naming pattern
   * @returns {void}
   */
  public setFBXExportNamingPattern(pattern: string): void;

  /**
   * Set clip's handles length in frames.
   * The default value is 240 frames.
   * @param {int} length length in frame
   * @returns {void}
   */
  public setHandlesLength(length: int): void;

  /**
   * Specify the Harmony format.
   * Allowable values are "harmony-781-standalone", "harmony-781-database", "harmony-92-standalone",
   * "harmony-92-database"
   * By default, this is "harmony-92-standalone".
   * @param {string} target a string specifying the target
   * @returns {boolean}
   */
  public setHarmonyFormat(target: string): boolean;

  /**
   * Maintain Size Through Scene. This ensures that all images exported are the same size.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setMaintainSize(flag: boolean): void;

  /**
   * Set the audio/video export settings ( for QuickTime export )
   * This is provided as a work-around to specify explicit QuickTime settings. The easiest way to access
   * a given QuickTime settings string to to save the given setting in the exportMovie dialog, and
   * consult the EXPORT_DLG_MOVIE_VIDEO_CONFIG preference in your user preferences.
   * @param {string} config a string specifying the video settings
   * @returns {void}
   */
  public setMovieConfig(config: string): void;

  /**
   * Set whether or not panels are nested in symboles. Only available when exporting as original scenes.
   * By default, this is false
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setNestPanelsInSymbols(flag: boolean): void;

  /**
   * Notify Flix server when exporting to FCP XML.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setNotifyFlix(flag: boolean): void;

  /**
   * Specify the granularity of movie clip generation.
   * Allowable values are "project", "sequence", "scene", "shot".
   * By default, this is "project".
   * @param {string} perWhat a string specifying project, sequence, scene or shot
   * @returns {boolean}
   */
  public setOneMovieClipPer(perWhat: string): boolean;

  /**
   * Create a separate video for each panel during NLE export.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setOneMoviePerPanel(flag: boolean): void;

  /**
   * Specify the granularity of scene generation. Only available when exporting as rendered animactics.
   * Allowable values are "shot", "scene", "selection", "sequence", "act".
   * By default, this is "shot".
   * @param {string} perWhat a string specifying either shot, scene, selection, sequence or act
   * @returns {boolean}
   */
  public setOneScenePer(perWhat: string): boolean;

  /**
   * Set whether or not still images are optimized. Only available when exporting as rendered animactics.
   * By default, this is false
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setOptimizeStillImages(flag: boolean): void;

  /**
   * Set the pdf profile to be used during the pdf export.
   * By default, this is the profile that is selected in the Export PDF Dialog.
   * @param {string} profile profile used during pdf export
   * @returns {boolean}
   */
  public setPDFProfile(profile: string): boolean;

  /**
   * Set whether or not to render an animatic or export original scenes.
   * By default, this is false, i.e. export original scenes
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setRenderedAnimatic(flag: boolean): void;

  /**
   * Export Panel and video clips when exporting.
   * By default, this is true.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setRenderImageAndVideo(flag: boolean): void;

  /**
   * Sets a selection of panels to be exported.
   * See the SelectStoryboard interface to retrieve a panel Id selection. (The selection interface is not
   * applicable in batch mode.) See the ProjectStoryboard interface to create a list of panelIds by
   * querying the project.
   * If no range is specified, then the entire project is exported.
   * @param {StringList} panels list of panel Ids to be exported
   * @returns {void}
   */
  public setSelectedPanels(panels: StringList): void;

  /**
   * Sets a selection of scenes to be exported.
   * See the SelectStoryboard interface to retrieve a scene Id selection. (The selection interface is not
   * applicable in batch mode.) See the ProjectStoryboard interface to create a list of sceneIds by
   * querying the project.
   * If no range is specified, then the entire project is exported.
   * @param {StringList} scenes list of scene Ids to be exported
   * @returns {void}
   */
  public setSelectedScenes(scenes: StringList): void;

  /**
   * Render 4:3 safety overlay.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setShow43SafetyOverlay(flag: boolean): void;

  /**
   * Render project action safe area overlay.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setShowActionSafeAreaOverlay(flag: boolean): void;

  /**
   * Render the Additional Duration overlay.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setShowAdditionalDuration(flag: boolean): void;

  /**
   * Exports the camera frames black border.
   * By default, this is true.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setShowCamera(flag: boolean): void;

  /**
   * Prints each camera keyframe on the exported images.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setShowCameraKeyFrames(flag: boolean): void;

  /**
   * Display the camera labels.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setShowCameraLabel(flag: boolean): void;

  /**
   * Render the Caption overlay.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setShowCaptionOverlay(flag: boolean): void;

  /**
   * Show the reference frame.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setShowReference(flag: boolean): void;

  /**
   * Render scene/panel name overlay.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setShowScenePanelNamesOverlay(flag: boolean): void;

  /**
   * Render the TimeCode overlay.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setShowTimeCode(flag: boolean): void;

  /**
   * Render project title safe area overlay.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setShowTitleSafeAreaOverlay(flag: boolean): void;

  /**
   * Set the repeat cycle for additional duration overlay.
   * @param {int} mode The duration display system for the time count.
   * @returns {void}
   */
  public setSplitTimeCountMode(mode: int): void;

  /**
   * Set the unit for additional duration overlay.
   * @param {int} split The unit to split the additional duration overlay by.
   * @returns {void}
   */
  public setSplitTimeCountSplit(split: int): void;

  /**
   * Sets a transparent background.
   * By default, this is false.
   * @param {boolean} flag true or false
   * @returns {void}
   */
  public setTransparentBG(flag: boolean): void;

  /**
   * Export the current panel.
   * Not applicable in batch mode.
   * @param {boolean} flag true or false
   * @returns {boolean}
   */
  public setUseCurrentPanel(flag: boolean): boolean;

  /**
   * Export the current scene.
   * Not applicable in batch mode.
   * @param {boolean} flag true or false
   * @returns {boolean}
   */
  public setUseCurrentScene(flag: boolean): boolean;

  /**
   * Export the selected panel(s)
   * Not applicable in batch mode.
   * @param {boolean} flag true or false
   * @returns {boolean}
   */
  public setUseSelectedPanels(flag: boolean): boolean;

  /**
   * Export the tracked panel(s)
   * Not applicable in batch mode.
   * @param {boolean} flag true or false
   * @returns {boolean}
   */
  public setUseTrackedPanels(flag: boolean): boolean;

  /**
   * Sets the magnification of the image. By default there is no magnification.
   * @param {double} zoom zoom factor
   * @returns {void}
   */
  public setZoomFactor(zoom: double): void;

  /**
   * Signal emitted when a frame has finished exporting.
   * @param {int} frameProgress - Number of frame that are finished exporting in the current scene
   * @returns {void}
   */
  public exportFrameProgress: QSignal<(frameProgress: int) => void>;

  /**
   * Signal emitted if export was successful.
   * @returns {void}
   */
  public exportReady: QSignal<() => void>;

  /**
   * Signal emitted when a scene has finished exporting.
   * Exports scenes 1 through 4 and use the "exportSceneProgress" signal to know when each scene has
   * finished exporting.
   * @param {int} sceneProgress - Number of scene that are finished exporting
   * @returns {void}
   * @example
   * function myExportSceneProgress(sceneProgress) {
   *     MessageLog.trace("Scene number " + sceneProgress + " has been exported");
   * }
   *
   * function myFunction() {
   *     var exp = new ExportManager;
   *     var project = new StoryboardManager;
   *
   *     exp.setExportResolution(400, 300);
   *
   *     var selIds = new Array(0);
   *     selIds.push(project.sceneId("", "1"));
   *     selIds.push(project.sceneId("", "2"));
   *     selIds.push(project.sceneId("", "3"));
   *     selIds.push(project.sceneId("", "4"));
   *
   *     exp.setSelectedScenes(selIds);
   *     exp.setOneMovieClipPer("scene");
   *
   *     exp.exportSceneProgress.connect(myExportSceneProgress);
   *
   *     exp.exportToMovie("/home/user/exportTest", "untitled", "mov");
   * }
   */
  public exportSceneProgress: QSignal<(sceneProgress: int) => void>;
}

/**
 * The File JavaScript class. Open, close, read, write, get information about files.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classFile.html}
 * @example
 * var file = new File(filePath);
 * if (file.exists) {
 *     var message = "The output file \"" + file.name + "\" exists. Do you wish to overwrite it?"
 *     var ans = MessageBox.warning(message, MessageBox.Yes, MessageBox.No);
 *     var check = MessageBox.Yes;
 *
 *     if (ans != MessageBox.Yes)
 *         return false;
 * }
 * return true;
 */
declare class File extends QObject {
  /**
   * @param {string} filename The path to the file.
   * @returns {void}
   */
  constructor(filename: string);

  /**
   * Close the file.
   * @returns {void}
   */
  public close(): void;

  /**
   * Open the file with specific access mode.
   * @param {int} accessMode The specified access mode. See FileAccess for available modes.
   * @returns {void}
   */
  public open(accessMode: int): void;

  /**
   * Read all the file.
   * @returns {string}
   */
  public read(): string;

  /**
   * Read the next char of the file.
   * @returns {int}
   */
  public readByte(): int;

  /**
   * Read one line of the file.
   * @returns {string}
   */
  public readLine(): string;

  /**
   * Read each line of the file.
   * @returns {StringList}
   */
  public readLines(): StringList;

  /**
   * Remove the file.
   * @returns {void}
   */
  public remove(): void;

  /**
   * Write a string in the file.
   * @param {string} data The data to be written to the file.
   * @param {int} [length=-1] The length of the data to be written.
   * @returns {void}
   */
  public write(data: string, length?: int): void;

  /**
   * Write a char in the file.
   * @param {int} byte The char to write to the file.
   * @returns {void}
   */
  public writeByte(byte: int): void;

  /**
   * Write a string in the file and go next line.
   * @param {string} data The data to be written to the file.
   * @returns {void}
   */
  public writeLine(data: string): void;

  /**
   * Base file name.
   * @returns {string}
   */
  baseName: string;

  /**
   * Date when the file was created.
   * @returns {QDateTime}
   */
  created: QDateTime;

  /**
   * File reach end.
   * @returns {boolean}
   */
  eof: boolean;

  /**
   * File executable flag.
   * @returns {boolean}
   */
  executable: boolean;

  /**
   * File exists.
   * @returns {boolean}
   */
  exists: boolean;

  /**
   * File extension.
   * @returns {string}
   */
  extension: string;

  /**
   * File name.
   * @returns {string}
   */
  fullName: string;

  /**
   * File hidden flag.
   * @returns {boolean}
   */
  hidden: boolean;

  /**
   * Date when the file was modified.
   * @returns {QDateTime}
   */
  lastModified: QDateTime;

  /**
   * Date when the file was read.
   * @returns {QDateTime}
   */
  lastRead: QDateTime;

  /**
   * File name.
   * @returns {string}
   */
  name: string;

  /**
   * File path.
   * @returns {string}
   */
  path: string;

  /**
   * File readable flag.
   * @returns {boolean}
   */
  readable: boolean;

  /**
   * Size of the file.
   * @returns {int}
   */
  size: int;

  /**
   * @returns {string}
   */
  symLink: string;

  /**
   * File writable flag.
   * @returns {boolean}
   */
  writable: boolean;
}

/**
 * The FileAccess JavaScript global object. Enum to define file operation.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classFileAccess.html}
 * @example
 * var file = new File(filePath);
 * f.open(FileAccess.ReadOnly);
 */
declare class FileAccess extends QObject {}

/**
 * With the Function Manager, you can manipulate the camera functions and the layer functions. Note
 * that for all methods you must give the unique id. For the camera, this is the sceneId. For a layer
 * functions, this is the panelId.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classFunctionManager.html}
 * @example
 * function cameraManip() {
 *     var cm = new MotionManager();
 *     var sb = new StoryboardManager();
 *     var fm = new FunctionManager();
 *
 *     // Camera of first scene in project
 *     var sceneId = sb.sceneInProject(0);
 *
 *     System.println("3dPath is " + cm.linkedCameraFunction(sceneId, "position.attr3dpath"));
 *     System.println("scale x is " + cm.linkedCameraFunction(sceneId, "scale.x"));
 *     System.println("scale y is " + cm.linkedCameraFunction(sceneId, "scale.y"));
 *     System.println("scale z is " + cm.linkedCameraFunction(sceneId, "scale.z"));
 *     System.println("rotation is " + cm.linkedCameraFunction(sceneId, "rotation.anglez"));
 *     System.println("skew is " + cm.linkedCameraFunction(sceneId, "skew"));
 *
 *     var path3d = cm.linkedCameraFunction(sceneId, "position.attr3dpath");
 *     var nbPoints = fm.numberOfPointsPath3d(sceneId, path3d)
 *     System.println(" number of points on the path " + nbPoints);
 *
 *     // 3d path points
 *     for (var i = 0; i < nbPoints; ++i) {
 *         System.println(
 *             "locked At  " + fm.pointLockedAtFrame(sceneId, path3d, i) +
 *             ":  pointx : " + fm.pointXPath3d(sceneId, path3d, i) +
 *             " pointy  : " + fm.pointYPath3d(sceneId, path3d, i) +
 *             " pointz : " + fm.pointZPath3d(sceneId, path3d, i) +
 *             " tension : " + fm.pointTensionPath3d(sceneId, path3d, i) +
 *             " continuity : " + fm.pointContinuityPath3d(sceneId, path3d, i) +
 *             " bias : " + fm.pointBiasPath3d(sceneId, path3d, i)
 *         );
 *     }
 *
 *     // Change the Y value of the path
 *     fm.setPointPath3d(sceneId, path3d, 1, 3.859611992560042, 4.0, -1.2445449829101562, 0.0, 0.0, 0.0);
 *
 *     // Add a key frame at the 2 frame in the shot
 *     fm.addKeyFramePath3d(sceneId, path3d, 3, 3.859611992560042, 4.0, -1.2445449829101562, 0.0, 0.0, 0.0);
 *
 *     // Skew function on camera, which is a bezier
 *     var foc = cm.linkedCameraFunction(sceneId, "skew");
 *
 *     System.println("skew is " + cm.linkedCameraFunction(sceneId, "skew"));
 *     nbPoints = fm.numberOfPoints(sceneId, foc)
 *
 *     for (var i = 0; i < nbPoints; ++i) {
 *         System.println(
 *             "locked At  " + fm.pointLockedAtFrame(sceneId, foc, i) +
 *             ":  pointx : " + fm.pointX(sceneId, foc, i) +
 *             " pointy  : " + fm.pointY(sceneId, foc, i) +
 *             " handle left x : " + fm.pointHandleLeftX(sceneId, foc, i) +
 *             " handle left y : " + fm.pointHandleLeftY(sceneId, foc, i) +
 *             " handle right x : " + fm.pointHandleRightX(sceneId, foc, i) +
 *             " handle right y : " + fm.pointHandleRightY(sceneId, foc, i) +
 *             "  seg : " + fm.pointConstSeg(sceneId, foc, i) +
 *             " continuity : " + fm.pointContinuity(sceneId, foc, i)
 *         );
 *     }
 *
 *     // Scale on camera is a Velobase TV
 *     var foc = cm.linkedCameraFunction(sceneId, "scale.x");
 *
 *     // System.println( "scale is " +  cm.linkedCameraFunction( sceneId, "scale.x" ) );
 *     nbPoints = fm.numberOfPoints(sceneId, foc)
 *     System.println(" nb points on the scale   " + nbPoints);
 *
 *     for (var i = 0; i < nbPoints; ++i) {
 *         System.println(
 *             "locked At  " + fm.pointLockedAtFrame(sceneId, foc, i) +
 *             ":  pointx : " + fm.pointX(sceneId, foc, i) +
 *             " pointy  : " + fm.pointY(sceneId, foc, i)
 *         );
 *     }
 * }
 *
 *
 * function layerManip() {
 *     var cm = new MotionManager();
 *     var sb = new StoryboardManager();
 *     var fm = new FunctionManager();
 *
 *     // 11th panel in project
 *     var panelId = sb.panelInProject(11);
 *
 *     System.println("3dPath is " + cm.linkedLayerFunction(panelId, 0, "offset.attr3dpath"));
 *     System.println("scale x is " + cm.linkedLayerFunction(panelId, 0, "scale.x"));
 *     System.println("scale y is " + cm.linkedLayerFunction(panelId, 0, "scale.y"));
 *     System.println("scale z is " + cm.linkedLayerFunction(panelId, 0, "scale.z"));
 *     System.println("rotation is " + cm.linkedLayerFunction(panelId, 0, "rotation.anglez"));
 *     System.println("skew is " + cm.linkedLayerFunction(panelId, 0, "skew"));
 *
 *     // First layer of the panel, the offset tv
 *     var path3d = cm.linkedLayerFunction(panelId, 0, "offset.attr3dpath");
 *     var nbPoints = fm.numberOfPointsPath3d(panelId, path3d)
 *     System.println(" number of points on the path " + nbPoints);
 *
 *     // 3d path
 *     for (var i = 0; i < nbPoints; ++i) {
 *         System.println(
 *             "locked At  " + fm.pointLockedAtFrame(panelId, path3d, i) +
 *             ":  pointx : " + fm.pointXPath3d(panelId, path3d, i) +
 *             " pointy  : " + fm.pointYPath3d(panelId, path3d, i) +
 *             " pointz : " + fm.pointZPath3d(panelId, path3d, i) +
 *             " tension : " + fm.pointTensionPath3d(panelId, path3d, i) +
 *             " continuity : " + fm.pointContinuityPath3d(panelId, path3d, i) +
 *             " bias : " + fm.pointBiasPath3d(panelId, path3d, i)
 *         );
 *     }
 *
 *     // Change the Y value of the path on the second keyframe
 *     fm.setPointPath3d(panelId, path3d, 1, 2.96, 2.0, 0.0, 0.0, 0.0, 0.0);
 *
 *     // Add a key frame at the 10 frame in the panel, knowing that the panel is always 20 frames long
 *     // fm.addKeyFramePath3d( panelId, path3d, 9, 2.96, 6.0, 0.0, 0.0,0.0,0.0 );
 *     fm.removePointPath3d(panelId, path3d, 9);
 *
 * }
 */
declare class FunctionManager extends QObject {
  /**
   * adds a keyframe after a point on a 3D Path and sets the X, Y and Z values, as well as the tension,
   * continuity and bias
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @param {double} x x value for the point
   * @param {double} y Y value for the point
   * @param {double} z z value for the point
   * @param {double} tension tension value of the keyframe
   * @param {double} continuity continuity value of the keyframe
   * @param {double} bias bias value of the keyframe
   * @returns {boolean}
   */
  public addCtrlPointAfterPath3d(
    shotId: string,
    columnName: string,
    point: int,
    x: double,
    y: double,
    z: double,
    tension: double,
    continuity: double,
    bias: double
  ): boolean;

  /**
   * adds a keyframe to a 3D Path and sets the X, Y and Z value, as well as the tension, continuity and
   * bias.
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} frame Frame number for the point
   * @param {double} x x value for the point
   * @param {double} y Y value for the point
   * @param {double} z z value for the point
   * @param {double} tension tension value of the keyframe
   * @param {double} continuity continuity value of the keyframe
   * @param {double} bias bias value of the keyframe
   * @returns {boolean}
   */
  public addKeyFramePath3d(
    shotId: string,
    columnName: string,
    frame: int,
    x: double,
    y: double,
    z: double,
    tension: double,
    continuity: double,
    bias: double
  ): boolean;

  /**
   * returns the angle of the ease-in handle
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public angleEaseIn(shotId: string, columnName: string, point: int): double;

  /**
   * returns the angle of the ease-out handle
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public angleEaseOut(shotId: string, columnName: string, point: int): double;

  /**
   * clears a keyframe on a column
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {double} AtFrame frame
   * @returns {boolean}
   */
  public clearKeyFrame(
    shotId: string,
    columnName: string,
    AtFrame: double
  ): boolean;

  /**
   * returns the type of the function ( Bezier, Ease, VeloBased or 3dPath )
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @returns {string}
   */
  public functionType(shotId: string, columnName: string): string;

  /**
   * gets a value from a column at the given frame
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} subColumn The number value of the sub-column. This only exists in the case of 3D Path columns, which include a group of sub-columns for the X, Y, Z and velocity values on the 3D Path. Each sub-column has a number: X=1 Y=2 Z=3 Velocity = 4
   * @param {double} AtFrame frame
   * @returns {string}
   */
  public getEntry(
    shotId: string,
    columnName: string,
    subColumn: int,
    AtFrame: double
  ): string;

  /**
   * returns the Start value from the Hold Value Editor dialog box, for Bezier and Velo-based Function
   * Editors.
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @returns {int}
   */
  public holdStartFrame(shotId: string, columnName: string): int;

  /**
   * returns the Step value from the Hold Value Editor dialog box, for Bezier, Ease and Velo-based
   * Function Editors
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @returns {int}
   */
  public holdStep(shotId: string, columnName: string): int;

  /**
   * returns the Stop value from the Hold Value Editor dialog box, for Bezier, Ease and Velo-based
   * Function Editors
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @returns {int}
   */
  public holdStopFrame(shotId: string, columnName: string): int;

  /**
   * returns the number of keyframes and control points on a curve
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @returns {int}
   */
  public numberOfPoints(shotId: string, columnName: string): int;

  /**
   * returns the number of keyframes and control points on the 3D Path
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @returns {int}
   */
  public numberOfPointsPath3d(shotId: string, columnName: string): int;

  /**
   * returns the bias value for the specified point on the 3D Path
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointBiasPath3d(
    shotId: string,
    columnName: string,
    point: int
  ): double;

  /**
   * returns a 1 (one) to indicate that the point is on a ant segment, or a 0 (zero) to indicate that the
   * point is not on a ant segment
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {boolean}
   */
  public pointConstSeg(shotId: string, columnName: string, point: int): boolean;

  /**
   * returns the continuity of the curve that follows the point. One of the following values will be
   * returned, in upper-case: SMOOTH, CORNER or STRAIGHT
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {string}
   */
  public pointContinuity(
    shotId: string,
    columnName: string,
    point: int
  ): string;

  /**
   * returns the continuity value (STRAIGHT, SMOOTH or CORNER) for the specified point on the 3D Path.
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointContinuityPath3d(
    shotId: string,
    columnName: string,
    point: int
  ): double;

  /**
   * returns the number of frames in the ease-in
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointEaseIn(shotId: string, columnName: string, point: int): double;

  /**
   * returns the number of frames in the ease-out
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointEaseOut(shotId: string, columnName: string, point: int): double;

  /**
   * returns the X value of the left handle of a point on a curve
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointHandleLeftX(
    shotId: string,
    columnName: string,
    point: int
  ): double;

  /**
   * returns the Y value of the left handle of a point on a curve.
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointHandleLeftY(
    shotId: string,
    columnName: string,
    point: int
  ): double;

  /**
   * returns the X value of the right handle of a point on a curve.
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointHandleRightX(
    shotId: string,
    columnName: string,
    point: int
  ): double;

  /**
   * returns the Y value of the right handle of a point on a curve
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointHandleRightY(
    shotId: string,
    columnName: string,
    point: int
  ): double;

  /**
   * returns the frame at which it's locked, or returns 0 if the point is not locked.
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointLockedAtFrame(
    shotId: string,
    columnName: string,
    point: int
  ): double;

  /**
   * returns the tension value for the specified point on the 3D Path
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointTensionPath3d(
    shotId: string,
    columnName: string,
    point: int
  ): double;

  /**
   * returns the X value (frame number) of a point on a function curve
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointX(shotId: string, columnName: string, point: int): double;

  /**
   * returns the value of the specified point on the X path
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointXPath3d(shotId: string, columnName: string, point: int): double;

  /**
   * returns the Y value of a point on a function curve
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointY(shotId: string, columnName: string, point: int): double;

  /**
   * returns the value of the specified point on the Y path
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointYPath3d(shotId: string, columnName: string, point: int): double;

  /**
   * returns the value of the specified point on the Z path
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {double}
   */
  public pointZPath3d(shotId: string, columnName: string, point: int): double;

  /**
   * removePointPath3d may be used to remove either a key frame, or a control point
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @returns {boolean}
   */
  public removePointPath3d(
    shotId: string,
    columnName: string,
    point: int
  ): boolean;

  /**
   * sets the values of a point on a Bezier function curve
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} frame Frame number for the point
   * @param {double} y Y value for the poin
   * @param {double} handleLeftX X value for the left handle of the point
   * @param {double} handleLeftY Y value for the left handle
   * @param {double} handleRightX X value for the right handle
   * @param {double} handleRightY Y value for the right handle
   * @param {boolean} Seg Boolean expression (with a true or false value) to indicate whether the segment is ant or interpolated
   * @param {string} continuity String value for the continuity of the point. The string must be in all upper-case. The following are the acceptable values: STRAIGHT, SMOOTH and CORNER
   * @returns {boolean}
   */
  public setBezierPoint(
    shotId: string,
    columnName: string,
    frame: int,
    y: double,
    handleLeftX: double,
    handleLeftY: double,
    handleRightX: double,
    handleRightY: double,
    Seg: boolean,
    continuity: string
  ): boolean;

  /**
   * sets the values of a point on an Ease function curve
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} frame Frame number for the point
   * @param {double} y Y value for the point
   * @param {double} easeIn The number of frames in the ease-in
   * @param {double} angleEaseIn The angle of the ease-in handle
   * @param {double} easeOut The number of frames in the ease-out
   * @param {double} angleEaseOut The angle of the ease-out handle
   * @param {boolean} Seg Boolean expression (with a true or false value) to indicate whether the segment is ant or interpolated
   * @param {string} continuity String value for the continuity of the point. The string must be in all upper-case. The following are the acceptable values: STRAIGHT, SMOOTH and CORNER
   * @returns {boolean}
   */
  public setEasePoint(
    shotId: string,
    columnName: string,
    frame: int,
    y: double,
    easeIn: double,
    angleEaseIn: double,
    easeOut: double,
    angleEaseOut: double,
    Seg: boolean,
    continuity: string
  ): boolean;

  /**
   * sets a value on a column at the given frame
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} subColumn The number value of the sub-column. This only exists in the case of 3D Path columns, which include a group of sub-columns for the X, Y, Z and velocity values on the 3D Path. Each sub-column has a number: X=1 Y=2 Z=3 Velocity = 4
   * @param {double} AtFrame frame
   * @param {string} value the new value
   * @returns {boolean}
   */
  public setEntry(
    shotId: string,
    columnName: string,
    subColumn: int,
    AtFrame: double,
    value: string
  ): boolean;

  /**
   * sets the Start value in the Hold Value Editor dialog box, for Bezier, Ease and Velo-based Function
   * Editors
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} start start frame of the hold
   * @returns {boolean}
   */
  public setHoldStartFrame(
    shotId: string,
    columnName: string,
    start: int
  ): boolean;

  /**
   * sets the Hold value in the Hold Value Editor dialog box, for Bezier, Ease and Velo-based Function
   * Editors.
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} step value of the steps in the hold.
   * @returns {boolean}
   */
  public setHoldStep(shotId: string, columnName: string, step: int): boolean;

  /**
   * sets the Stop value in the Hold Value Editor dialog box, for Bezier, Ease and Velo-based Function
   * Editors
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} stop stop frame of the hold
   * @returns {boolean}
   */
  public setHoldStopFrame(
    shotId: string,
    columnName: string,
    stop: int
  ): boolean;

  /**
   * sets a keyframe on a column
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {double} AtFrame frame
   * @returns {boolean}
   */
  public setKeyFrame(
    shotId: string,
    columnName: string,
    AtFrame: double
  ): boolean;

  /**
   * sets the ant segment flag of point i of path p to b.
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @param {boolean} ant bool flag
   * @returns {boolean}
   */
  public setPath3dPointConstantSegment(
    shotId: string,
    columnName: string,
    point: int,
    ant: boolean
  ): boolean;

  /**
   * sets the ant segment flag of point found at frame f of path p to b.
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {double} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @param {boolean} ant bool flag
   * @returns {boolean}
   */
  public setPath3dPointConstantSegmentForFrame(
    shotId: string,
    columnName: string,
    point: double,
    ant: boolean
  ): boolean;

  /**
   * setPointPath3d may be used to set values in either a key frame, or a control point, but cannot
   * change a key frame into a control point or a control point into a key frame. To change a key frame
   * into a control point or a control point into a key frame, you must remove the point and add a new
   * point.
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} point The number of the point on the curve, from 0 to n, where n is the total number of points. The last point on the curve is n-1.
   * @param {double} x x value for the point
   * @param {double} y Y value for the point
   * @param {double} z z value for the point
   * @param {double} tension tension value of the keyframe
   * @param {double} continuity continuity value of the keyframe
   * @param {double} bias bias value of the keyframe
   * @returns {boolean}
   */
  public setPointPath3d(
    shotId: string,
    columnName: string,
    point: int,
    x: double,
    y: double,
    z: double,
    tension: double,
    continuity: double,
    bias: double
  ): boolean;

  /**
   * sets the values of a point on an Velobased function curve
   * @param {string} shotId Unique Id of shot ( for camera function ) or panel ( for layer function )
   * @param {string} columnName The name of the column
   * @param {int} frame Frame number for the point
   * @param {double} y Y value for the point
   * @returns {boolean}
   */
  public setVeloBasePoint(
    shotId: string,
    columnName: string,
    frame: int,
    y: double
  ): boolean;
}

/**
 * The ImportManager JavaScript class. Import animatics in Storyboard project.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classImportManager.html}
 * @example
 * // Conform from the xml file
 * var fileName = "/Users/user/Conform/abc.xml";
 * var resources = ["/Users/user/Conform/Conform XML"];
 *
 * var param = {};
 * param.doPanel = true;
 * param.doVideoTrack = true;
 * param.doCaptions = true;
 * param.doMarkers = true;
 *
 * param.doAudio = true;
 *
 * var im = new ImportManager();
 * var result = im.importAnimatic(fileName, param, resources);
 *
 * // Display conformation result and log messages
 * var finalMessage = "Result is " + result.result + " and log contain " + result.log.length + " messages\n";
 * for (var i = 0; i < result.log.length; ++i)
 *     finalMessage += "\n" + result.log[i];
 * MessageBox.information(finalMessage);
 *
 * // Import audio track from a xml file
 * fileName = "/Users/user/AudioProject/Audio.xml";
 * im.importAnimatic(fileName, {
 *     doAudio: true
 * });
 */
declare class ImportManager extends QObject {
  /**
   * Import animatic.
   * doAudio: Boolean true if you want to import audio track
   * @param {string} filename - full path name of the xml of aaf document
   * @param {QScriptValue} inProperties
   * @param {QScriptValue} [inResourcesPaths={}] - array of path where we look for ressources
   * @returns {QScriptValue}
   */
  public importAnimatic(
    filename: string,
    inProperties: QScriptValue,
    inResourcesPaths?: QScriptValue
  ): QScriptValue;
}

/**
 * The LayerManager JavaScript class. Access the layers of a given panel.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classLayerManager.html}
 * @example
 * var lm = new LayerManager();
 * var sb = new StoryboardManager();
 *
 * // get the first panel in the project.
 * var panelId = sb.panelInProject(0);
 *
 * // Add 2 blank vector layers and 1 blank bitmap layer. Set the last one to invisible
 * lm.addVectorLayer(panelId, 0, false, "V-A");
 * lm.addVectorLayer(panelId, 1, false, "V-B");
 * lm.addBitmapLayer(panelId, 2, false, "B-A");
 * lm.setLayerVisible(panelId, "B-A", false);
 *
 * // prepend a new layer by importing an image.
 * lm.importImageAsLayer(panelId, "/fullPath/Image.tga");
 */
declare class LayerManager extends QObject {
  /**
   * Add a bitmap layer.
   * @param {string} panelId - unique id of the panel
   * @param {QVariant} siblingLayerId - id (index or name) of sibling layer
   * @param {boolean} before - whether new layer is before or after sibling layer
   * @param {string} suggestedName - suggested Name
   * @returns {boolean}
   */
  public addBitmapLayer(
    panelId: string,
    siblingLayerId: QVariant,
    before: boolean,
    suggestedName: string
  ): boolean;

  /**
   * Add a group layer.
   * @param {string} panelId - unique id of the panel
   * @param {QVariant} siblingLayerId - id (index or name) of sibling layer
   * @param {boolean} before - whether new layer is before or after sibling layer
   * @param {string} suggestedName - suggested Name
   * @returns {boolean}
   */
  public addGroupLayer(
    panelId: string,
    siblingLayerId: QVariant,
    before: boolean,
    suggestedName: string
  ): boolean;

  /**
   * Add a vector layer.
   * @param {string} panelId - unique id of the panel
   * @param {QVariant} siblingLayerId - id (index or name) of sibling layer
   * @param {boolean} before - whether new layer is before or after sibling layer
   * @param {string} suggestedName - suggested Name
   * @returns {boolean}
   */
  public addVectorLayer(
    panelId: string,
    siblingLayerId: QVariant,
    before: boolean,
    suggestedName: string
  ): boolean;

  /**
   * Apply a blur effect to the given bitmap layer.
   * @param {string} panelId - The unique id of the panel
   * @param {QVariant} layerId - id (index or name) of layer
   * @param {boolean} [skipDialog=false] - Skip the blur dialog and use the previously used blur settings. By default this is false
   * @returns {void}
   */
  public applyBlurToBitmap(
    panelId: string,
    layerId: QVariant,
    skipDialog?: boolean
  ): void;

  /**
   * Apply a directional blur effect to the given bitmap layer.
   * @param {string} panelId - The unique id of the panel
   * @param {QVariant} layerId - id (index or name) of layer
   * @param {boolean} [skipDialog=false] - Skip the blur dialog and use the previously used blur settings. By default this is false
   * @returns {void}
   */
  public applyDirectionalBlurToBitmap(
    panelId: string,
    layerId: QVariant,
    skipDialog?: boolean
  ): void;

  /**
   * Apply a radial zoom blur effect to the given bitmap layer.
   * @param {string} panelId - The unique id of the panel
   * @param {QVariant} layerId - id (index or name) of layer
   * @param {boolean} [skipDialog=false] - Skip the blur dialog and use the previously used blur settings. By default this is false
   * @returns {void}
   */
  public applyRadialZoomBlurToBitmap(
    panelId: string,
    layerId: QVariant,
    skipDialog?: boolean
  ): void;

  /**
   * Delete a given layer.
   * @param {string} panelId - uniqueId of the panel
   * @param {QVariant} layerId - id (index or name) of layer
   * @returns {boolean}
   */
  public deleteLayer(panelId: string, layerId: QVariant): boolean;

  /**
* Generate matte from a given layer to a new drawing layer or directly on the source layer.
* @param {string} panelId - The unique id of the panel
* @param {QVariant} layerId - id (index or name) of layer
* @param {QScriptValue} options - Options used to generate the matte. The option object has the following properties:
Property  Type  Description
onNewLayer  bool  When true, the matte is created on a new layer.
radius  double  The number of the frame.
copyStrokes  bool  (Optional) Set to true to copy source strokes on the new layer. Can only be used if onNewLayer is set to true as well.
replaceLayer  bool  (Optional) Set to true to replace a previously generated matte layer. Can only be used if onNewLayer is set to true as well.
color  int or String  (Optional) Colour used to create the matte. Can be an hex RGB value or a standard W3C colour keyword name in a string. If not specified, the current colour will be used.
* @returns {boolean}
*/
  public generateMatte(
    panelId: string,
    layerId: QVariant,
    options: {
      /**
       * When true, the matte is created on a new layer.
       */
      onNewLayer?: boolean;
      /**
       * The number of the frame.
       */
      radius?: double;
      /**
       * (Optional) Set to true to copy source strokes on the new layer. Can only be used if onNewLayer is set to true as well.
       */
      copyStrokes?: boolean;
      /**
       * (Optional) Set to true to replace a previously generated matte layer. Can only be used if onNewLayer is set to true as well.
       */
      replaceLayer?: boolean;
      /**
       * (Optional) Colour used to create the matte. Can be an hex RGB value or a standard W3C colour keyword name in a string. If not specified, the current colour will be used.
       */
      color?: int | string;
    }
  ): boolean;

  /**
   * Generate a new drawing layer making a matte from the given layer. The matte will be of the current
   * selected color.
   * @param {string} panelId - The unique id of the panel
   * @param {QVariant} layerId - id (index or name) of layer
   * @param {double} radius - The matte radius
   * @param {boolean} copyStrokes - Set to true to copy the strokes
   * @param {boolean} replaceLayer - Set to true to replace the existing layer by one with the same name, false to keep both
   * @returns {boolean}
   */
  public generateMatteLayer(
    panelId: string,
    layerId: QVariant,
    radius: double,
    copyStrokes: boolean,
    replaceLayer: boolean
  ): boolean;

  /**
   * Generate a new drawing layer making a matte from the given layer. The matte will be of the given
   * color.
   * @param {string} panelId - The unique id of the panel
   * @param {QVariant} layerId - id (index or name) of layer
   * @param {double} radius - The matte radius
   * @param {boolean} copyStrokes - Set to true to copy the strokes
   * @param {boolean} replaceLayer - Set to true to replace the existing layer by one with the same name, false to keep both
   * @param {int} red - The red channel value (0..255) for the matte. A value higher than 255 will be clamped.
   * @param {int} green - The green channel value (0..255) for the matte. A value higher than 255 will be clamped.
   * @param {int} blue - The blue channel value (0..255) for the matte. A value higher than 255 will be clamped.
   * @returns {boolean}
   */
  public generateMatteLayer(
    panelId: string,
    layerId: QVariant,
    radius: double,
    copyStrokes: boolean,
    replaceLayer: boolean,
    red: int,
    green: int,
    blue: int
  ): boolean;

  /**
   * Get the path to a layer's drawing.
   * @param {string} panelId - unique id of the panel
   * @param {QVariant} layerId - id (index or name) of layer
   * @param {boolean} fullPath - boolean to determine if the returned path is the full path or the file name
   * @returns {string}
   */
  public getLayerDrawingName(
    panelId: string,
    layerId: QVariant,
    fullPath: boolean
  ): string;

  /**
   * Return the element id of the layer. May be useful when using the element and Drawing global objects.
   * @param {string} panelId - unique id of the panel
   * @param {QVariant} layerId - id (index or name) of layer
   * @returns {int}
   */
  public getLayerElementId(panelId: string, layerId: QVariant): int;

  /**
   * Get the lock flag of the layers of a panel.
   * @param {string} panelId - unique id of the panel
   * @param {QVariant} layerId - id (index or name) of layer
   * @returns {boolean}
   */
  public getLayerLock(panelId: string, layerId: QVariant): boolean;

  /**
   * Return the group index of a layer.
   * @param {string} panelId - unique id of the panel
   * @param {QVariant} layerId - id (index or name) of layer
   * @returns {int}
   */
  public groupOfLayer(panelId: string, layerId: QVariant): int;

  /**
* Import image and creates a new layer at index 0, returns if successful.
* 1 of these 3 values:
* @param {string} panelId - unique id of the panel
* @param {string} fullPathAndFileName - absolute path to image file
* @param {string} [multiLayerOption="AskUser"] - how to handle multi layer image
1 of these 3 values:
"AskUser" - Ask user
"Composite" - Import as one image
"Separate" - Import an image for each layer
* @returns {boolean}
*/
  public importImageAsLayer(
    panelId: string,
    fullPathAndFileName: string,
    multiLayerOption?: string
  ): boolean;

  /**
   * Return true if a layer is a 3D layer.
   * @param {string} panelId - unique id of the panel
   * @param {QVariant} layerId - id (index or name) of layer
   * @returns {boolean}
   */
  public is3DLayer(panelId: string, layerId: QVariant): boolean;

  /**
   * Return true if a layer is a bitmap.
   * @param {string} panelId - unique id of the panel
   * @param {QVariant} layerId - id (index or name) of layer
   * @returns {boolean}
   */
  public isBitmapLayer(panelId: string, layerId: QVariant): boolean;

  /**
   * Look at the given layer and return if it is empty or not. A layer is empty if it has no drawing.
   * @param {string} panelId - The unique id of the panel
   * @param {QVariant} layerId - id (index or name) of layer
   * @returns {boolean}
   */
  public isEmpty(panelId: string, layerId: QVariant): boolean;

  /**
   * Look at the given layer and return if it is empty or not. A layer is empty if it has no drawing.
   * @param {QScriptValue} layer - an object with the name [String] and panelId properties [String].
   * @returns {boolean}
   */
  public isEmpty(layer: QScriptValue): boolean;

  /**
   * Return true if a layer is a group layer.
   * @param {string} panelId - unique id of the panel
   * @param {QVariant} layerId - id (index or name) of layer
   * @returns {boolean}
   */
  public isGroupLayer(panelId: string, layerId: QVariant): boolean;

  /**
   * Look at the the given Layer and return if it is shared.
   * @param {string} panelId - The unique id of the panel
   * @param {QVariant} layerId - id (index or name) of layer
   * @returns {boolean}
   */
  public isShared(panelId: string, layerId: QVariant): boolean;

  /**
   * Look at the the given Layer and return if it is shared.
   * @param {QScriptValue} layer a layer is defined by those properties: frame, panelId, name.
   * @returns {boolean}
   */
  public isShared(layer: QScriptValue): boolean;

  /**
   * Return true if a layer is a vector layer.
   * @param {string} panelId - unique id of the panel
   * @param {QVariant} layerId - id (index or name) of layer
   * @returns {boolean}
   */
  public isVectorLayer(panelId: string, layerId: QVariant): boolean;

  /**
   * Get a layer's alignment value.
   * @param {string} panelId - unique id of the panel
   * @param {QVariant} layerId - id (index or name) of layer
   * @returns {string}
   */
  public layerAlignment(panelId: string, layerId: QVariant): string;

  /**
   * Return the index of layer named layerName.
   * @param {string} panelId - unique id of the panel
   * @param {string} layerName - name of the layer
   * @returns {int}
   */
  public layerIndexFromName(panelId: string, layerName: string): int;

  /**
   * Return the name of a layer.
   * @param {string} panelId - unique id of the panel
   * @param {int} index - index of the layer
   * @returns {string}
   */
  public layerName(panelId: string, index: int): string;

  /**
   * Get layers opacity value.
   * @param {string} panelId - unique id of the panel
   * @param {QVariant} layerId - id (index or name) of layer
   * @param {int} [frame=-1] - specify frame (-1 will use current frame)
   * @returns {double}
   */
  public layerOpacity(panelId: string, layerId: QVariant, frame?: int): double;

  /**
   * Get the visibility flag of the layers of a panel.
   * @param {string} panelId - unique id of the panel
   * @param {QVariant} layerId - id (index or name) of layer
   * @returns {boolean}
   */
  public layerVisibility(panelId: string, layerId: QVariant): boolean;

  /**
   * Merge the given Layers into a single panel.
   * @param {string} panelId - The unique id of the panel
   * @param {QScriptValue} layers - an array of layer's id (index or name)
   * @param {string} newLayerName - new name of the layer created from the merge.
   * @returns {int}
   */
  public mergeLayers(
    panelId: string,
    layers: QScriptValue,
    newLayerName: string
  ): int;

  /**
   * Merge the given Layers into a single panel.
   * @param {QScriptValue} layers - an array of objects with the name [String] and panelId properties [String].
   * @param {string} newLayerName - new name of the layer created from the merge.
   * @returns {QScriptValue}
   */
  public mergeLayers(layers: QScriptValue, newLayerName: string): QScriptValue;

  /**
   * Move layer before the sibbling layer (in the same group)
   * @param {string} panelId - unique id of the panel
   * @param {QVariant} layerId - id (index or name) of layer
   * @param {QVariant} siblingLayerId - id (index or name) of sibling layer
   * @returns {boolean}
   */
  public moveLayerBeforeLayer(
    panelId: string,
    layerId: QVariant,
    siblingLayerId: QVariant
  ): boolean;

  /**
   * Move a layer at the end of a group layer.
   * @param {string} panelId - unique id of the panel
   * @param {QVariant} layerId - id (index or name) of layer
   * @param {QVariant} [groupId=QVariant()] - id (index or name) of group layer
   * @returns {boolean}
   */
  public moveLayerInGroup(
    panelId: string,
    layerId: QVariant,
    groupId?: QVariant
  ): boolean;

  /**
   * Return the number of layers in a panel.
   * @param {string} panelId - unique id of the panel
   * @returns {int}
   */
  public numberOfLayers(panelId: string): int;

  /**
   * Rename a given layer.
   * @param {string} panelId - unique id of the panel
   * @param {QVariant} layerId - id (index or name) of layer
   * @param {string} suggestedName - suggested name
   * @returns {boolean}
   */
  public renameLayer(
    panelId: string,
    layerId: QVariant,
    suggestedName: string
  ): boolean;

  /**
   * Set a layer's alignment value.
   * @param {string} panelId - unique id of the panel
   * @param {QVariant} layerId - id (index or name) of layer
   * @param {string} alignment - The alignment options are: "No Alignment", "Face Camera" and "Pin to Camera".
   * @returns {boolean}
   */
  public setLayerAlignment(
    panelId: string,
    layerId: QVariant,
    alignment: string
  ): boolean;

  /**
   * Set the lock flag of the layers of a panel.
   * @param {string} panelId - unique id of the panel
   * @param {QVariant} layerId - id (index or name) of layer
   * @param {boolean} lock - boolean flag
   * @returns {boolean}
   */
  public setLayerLock(
    panelId: string,
    layerId: QVariant,
    lock: boolean
  ): boolean;

  /**
   * Set a layer's opacity.
   * @param {string} panelId - unique id of the panel
   * @param {QVariant} layerId - id (index or name) of layer
   * @param {double} opacity - value between 0 and 100
   * @param {int} [frame=-1] - specify frame (-1 will use current frame)
   * @returns {boolean}
   */
  public setLayerOpacity(
    panelId: string,
    layerId: QVariant,
    opacity: double,
    frame?: int
  ): boolean;

  /**
   * Set the visibility flag of the layers of a panel.
   * @param {string} panelId - unique id of the panel
   * @param {QVariant} layerId - id (index or name) of layer
   * @param {boolean} visible - boolean flag
   * @returns {boolean}
   */
  public setLayerVisible(
    panelId: string,
    layerId: QVariant,
    visible: boolean
  ): boolean;
}

/**
 * This interface is used to access the shot cameras or the panel layers, and add or remove motion to
 * them.
 * The following examples are provided:
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classMotionManager.html}
 * @example
 *  function AddingLayerMotion() {
 *      var mm = new MotionManager();
 *      var fm = new FunctionManager();
 *
 *      // retrieve the second panel in the project
 *      var sb = new StoryboardManager();
 *      var panelId = sb.panelInProject(1);
 *
 *      // add 3 keyframes to the first layer in the panel
 *      mm.addLayerKeyFrame(panelId, 0, 1);
 *      mm.addLayerKeyFrame(panelId, 0, 10);
 *      mm.addLayerKeyFrame(panelId, 0, 20);
 *
 *      // Get the function representing the motion path
 *      var path3d = mm.linkedLayerFunction(panelId, 0, "offset.attr3dpath");
 *
 *      // Adjust the motion path points ( using the Function Manager )
 *      fm.setPointPath3d(panelId, path3d, 0, 10.0, 10.0, 0.0, 0.0, 0.0, 0.0);
 *      fm.setPointPath3d(panelId, path3d, 1, -10.0, -10.0, 0.0, 0.0, 0.0, 0.0);
 *      fm.setPointPath3d(panelId, path3d, 2, 10.0, 10.0, 0.0, 0.0, 0.0, 0.0);
 *
 *      // mm.removeLayerKeyFrame( panelId, 0, 11);
 *      // mm.clearLayerMotion( panelId, 0 );
 *
 *  }
 */
declare class MotionManager extends QObject {
  /**
   * adds a Keyframe to the camera
   * @param {string} shotId - unique Id of the scene
   * @param {int} offset - offset ( in frames ) into the scene
   * @returns {boolean}
   */
  public addCameraKeyFrame(shotId: string, offset: int): boolean;

  /**
   * creates a new function of the given type within the project or shot or panel
   * @param {string} idString - unique Id of the project, shot or panel
   * @param {string} name - name of the new function
   * @param {string} type - The type of column you want to add. You can add any of the following: 3DPATH, BEZIER, EASE, QUARTERNION .
   * @returns {boolean}
   */
  public addFunction(idString: string, name: string, type: string): boolean;

  /**
   * adds a Keyframe to the layer
   * @param {string} panelId - unique Id of the panel
   * @param {int} layerIndex - index of the layer in the panel
   * @param {int} offset - panels functions are considered to be 20 frames long, thus this int represents the offset into that length.
   * @returns {boolean}
   */
  public addLayerKeyFrame(
    panelId: string,
    layerIndex: int,
    offset: int
  ): boolean;

  /**
   * clears all Motion from the camera
   * @param {string} shotId - unique Id of the scene
   * @returns {boolean}
   */
  public clearCameraMotion(shotId: string): boolean;

  /**
   * clears all Motion from the layer
   * @param {string} panelId - unique Id of the panel
   * @param {int} layerIndex - index of the layer in the panel
   * @returns {boolean}
   */
  public clearLayerMotion(panelId: string, layerIndex: int): boolean;

  /**
   * returns the linked function name for the given node and attribute, which may be manipulated using
   * the FunctionManager
   * @param {string} idString - unique Id of the project, shot or panel
   * @param {string} nodeName - qualified node Name, ructed from the root group to the node leaf
   * @param {string} attrName - name of the attribute function
   * @returns {string}
   */
  public getLinkedFunction(
    idString: string,
    nodeName: string,
    attrName: string
  ): string;

  /**
   * returns the model matrix for the given node.
   * @param {string} idString - unique Id of the project, shot or panel
   * @param {string} nodeName - qualified node Name, ructed from the root group to the node leaf
   * @param {double} atFrame - at which frame
   * @returns {QObject}
   */
  public getNodeMatrix(
    idString: string,
    nodeName: string,
    atFrame: double
  ): QObject;

  /**
   * Gets the value of a attribute in a module.
   * @param {string} idString - unique Id of the project, shot or panel
   * @param {string} nodeName - qualified node Name, ructed from the root group to the node leaf
   * @param {string} attrName - name of the attribute function
   * @param {double} atFrame - the frame number at which you set the value
   * @returns {string}
   */
  public getTextAttr(
    idString: string,
    nodeName: string,
    attrName: string,
    atFrame: double
  ): string;

  /**
   * retrieves a specific function from the camera, which may be manipulated using the FunctionManager
   * attributes for camera pegs are position.attr3dpath, scale.x, scale.y, scale.z, rotation.anglez, skew
   * @param {string} shotId - unique Id of the scene
   * @param {string} attrName - name of the attribute function
   * @returns {string}
   */
  public linkedCameraFunction(shotId: string, attrName: string): string;

  /**
   * retrieves a specific function from the layer, which may be manipulated using the FunctionManager
   * attributes for layers are offset.attr3dpath, scale.x, scale.y, scale.z, rotation.anglez, skew
   * @param {string} panelId - unique Id of the panel
   * @param {int} layerIndex - index of the layer in the panel
   * @param {string} attrName - name of the attribute function
   * @returns {string}
   */
  public linkedLayerFunction(
    panelId: string,
    layerIndex: int,
    attrName: string
  ): string;

  /**
   * (BETA FEATURE) Reframe static camera and center all no animated drawings.
   * @param {string} shotId - unique Id of the scene
   * @returns {boolean}
   */
  public reframeStaticCamera(shotId: string): boolean;

  /**
   * remove Keyframe from the camera
   * @param {string} shotId - unique Id of the scene
   * @param {int} offset - offset ( in frames ) into the scene
   * @returns {boolean}
   */
  public removeCameraKeyFrame(shotId: string, offset: int): boolean;

  /**
   * remove Keyframe from the layer
   * @param {string} panelId - unique Id of the panel
   * @param {int} layerIndex - index of the layer in the panel
   * @param {int} offset - panels functions are considered to be 20 frames long, thus this int represents the offset into that length.
   * @returns {boolean}
   */
  public removeLayerKeyFrame(
    panelId: string,
    layerIndex: int,
    offset: int
  ): boolean;

  /**
   * Enable or disable animation on the given layer.
   * @param {string} panelId - unique Id of the panel
   * @param {int} layerIndex - index of the layer in the panel
   * @param {boolean} animated - true to enable layer animation, false to disable
   * @returns {void}
   */
  public setLayerAnimated(
    panelId: string,
    layerIndex: int,
    animated: boolean
  ): void;

  /**
   * sets the linked function for the given node and attribute
   * @param {string} idString - unique Id of the project, shot or panel
   * @param {string} nodeName - qualified node Name, ructed from the root group to the node leaf
   * @param {string} attrName - name of the attribute
   * @param {string} functionName - name of the function.
   * @returns {boolean}
   */
  public setLinkedFunction(
    idString: string,
    nodeName: string,
    attrName: string,
    functionName: string
  ): boolean;

  /**
   * Changes the attributes of a module.
   * @param {string} idString - unique Id of the project, shot or panel
   * @param {string} nodeName - qualified node Name, ructed from the root group to the node leaf
   * @param {string} attrName - name of the attribute function
   * @param {double} atFrame - the frame number at which you set the value
   * @param {string} attrValue - new value
   * @returns {boolean}
   */
  public setTextAttr(
    idString: string,
    nodeName: string,
    attrName: string,
    atFrame: double,
    attrValue: string
  ): boolean;
}

/**
 * This interface is used to merge/extract another storyboard into the main storyboard.
 * The following examples are provided:
 * For scene insertion, the source scene must be loaded using loadSourceProject. Once loaded, the
 * sceneIds of the source may be retrieved. Using this information, the insertScene command can be
 * created.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classPrjMgtManager.html}
 * @example
 * var pM = new PrjMgtManager();
 * if (pM.loadSourceProject("/pathToProject/something.sboard")) {
 *     var scenes = pM.sourceProjectSceneIds();
 *     for (var i = 0; i < scenes.length; ++i) {
 *         MessageLog.trace(scenes[i] + " : " + pM.sourceProjectSequenceName(scenes[i]) + ":" + pM.sourceProjectSceneName(scenes[i]));
 *     }
 *
 *     var SM = new StoryboardManager();
 *     var dstId = SM.sceneInProject(3);
 *
 *     // Insert the first scene from the source after the 3rd scene in the destination.
 *     var overwrite = false;
 *     var before = false;
 *     pM.insertScene(scenes[0], dstId, overwrite, before);
 */
declare class PrjMgtManager extends QObject {
  /**
   * Extracts the specified range of scenes, and creates a new project with them.
   * @param {string} newProjectPath - path to the directory where the new project is to be saved.
   * @param {string} newProjectName - name of the new project
   * @param {string} fromSceneId - used to determine the start of the extraction range ( first frame of the scene is used )
   * @param {string} toSceneId - used to determine the end of the extraction range ( last frame of the scene is used )
   * @param {boolean} removeScenes - whether the extracted range is to be removed from the original project
   * @param {boolean} [linkExtracted=false] - if true, add a link between extracted and the original project. Default is false.
   * @returns {boolean}
   */
  public extractRange(
    newProjectPath: string,
    newProjectName: string,
    fromSceneId: string,
    toSceneId: string,
    removeScenes: boolean,
    linkExtracted?: boolean
  ): boolean;

  /**
   * Inserts the specified source panel Id into the project.
   * @param {string} srcSceneId - uniqueId of the source panel
   * @param {string} dstSceneId - uniqueId of the destination panel
   * @param {boolean} overwrite - if true, overwrites the destination panel, if false, inserts next to it
   * @param {boolean} before - used when inserting to specify before the target or after
   * @returns {string}
   */
  public insertPanel(
    srcSceneId: string,
    dstSceneId: string,
    overwrite: boolean,
    before: boolean
  ): string;

  /**
   * Insert the loaded source project into the current project before scene designated by beforeSceneId.
   * Will insert at the end if beforeSceneId is invalid or empty.
   * @param {string} beforeSceneId
   * @returns {boolean}
   * @example
   * var pM = new PrjMgtManager();
   * var storyboard = new StoryboardManager();
   *
   * if (pM.loadSourceProject("/pathToProject/something.sboard")) {
   *
   *     pM.setCreateNewAudioTrack(true);
   *
   *     var res = pM.insertProject(storyboard.sceneInProject(0));
   *     MessageLog.trace("Insert result : " + res);
   * }
   */
  public insertProject(beforeSceneId: string): boolean;

  /**
   * Inserts the specified source scene Id into the project.
   * @param {string} srcSceneId - uniqueId of the source scene
   * @param {string} dstSceneId - uniqueId of the destination scene
   * @param {boolean} overwrite - if true, overwrites the destination scene, if false, inserts next to it
   * @param {boolean} before - used when inserting to specify before the target or after
   * @returns {string}
   */
  public insertScene(
    srcSceneId: string,
    dstSceneId: string,
    overwrite: boolean,
    before: boolean
  ): string;

  /**
   * Loads the specified storyboard project to be used as a source for insertion or project merge.
   * @param {string} scenePath - path to project
   * @returns {boolean}
   * @example
   * var pM = new PrjMgtManager();
   * if (pM.loadSourceProject("/pathToProject/something.sboard")) {
   *     // Source project loaded
   * }
   */
  public loadSourceProject(scenePath: string): boolean;

  /**
   * Merge the loaded source project into the current main project by matching the panels by panel Ids.
   * @returns {boolean}
   * @example
   * var pM = new PrjMgtManager();
   * if (pM.loadSourceProject("/pathToProject/something.sboard")) {
   *     // Set merge project options (optional), the default values are used.
   *     pM.setMergeOnlyTrackChanges(false);
   *     pM.setMergeOnlyExistingScenes(false);
   *     pM.setRespectLockedSoundTracks(false);
   *     pM.setPreserveMasterCaptions(false);
   *     pM.setReplaceArtWork(false);
   *     pM.setPreserveMasterTransform(false);
   *     pM.setMergeAdditionalCaptions(false);
   *     pM.setUpdateProjectLink(false);
   *
   *     var res = pM.mergeProject();
   *     MessageLog.trace("Merge result : " + res);
   * }
   */
  public mergeProject(): boolean;

  /**
   * Map source Captions by caption name, on insert. True by default.
   * @param {boolean} flag - boolean
   * @returns {void}
   */
  public setCaptionRemapByName(flag: boolean): void;

  /**
   * Create new audio tracks for inserted projects. True by default.
   * @param {boolean} flag - boolean
   * @returns {void}
   */
  public setCreateNewAudioTrack(flag: boolean): void;

  /**
   * Set the flag to keep the original scenes ( when overwriting ) and move them to the end of the
   * project.
   * @param {boolean} flag - boolean
   * @returns {void}
   */
  public setKeepOriginalScenes(flag: boolean): void;

  /**
   * Set the flag to merge additional captions (when project merge), merge canceled if flag is false and
   * there are new captions fields.
   * @param {boolean} flag - boolean
   * @returns {void}
   */
  public setMergeAdditionalCaptions(flag: boolean): void;

  /**
   * Set the flag to merge the panels only in existing scenes ( when overwriting scene or project merge )
   * @param {boolean} flag - boolean
   * @returns {void}
   */
  public setMergeOnlyExistingScenes(flag: boolean): void;

  /**
   * Set the flag to merge only panels with track changes ( when overwriting scene or project merge )
   * @param {boolean} flag - boolean
   * @returns {void}
   */
  public setMergeOnlyTrackChanges(flag: boolean): void;

  /**
   * Set the flag to merge sound clips from the source project.
   * @param {boolean} flag - boolean
   * @returns {void}
   */
  public setMergeSoundClips(flag: boolean): void;

  /**
   * Set the flag to preserve the panel captions ( when project merge )
   * @param {boolean} flag - boolean
   * @returns {void}
   */
  public setPreserveMasterCaptions(flag: boolean): void;

  /**
   * Set the flag to preserve transforms when replace only art work in panels ( when overwriting scene or
   * project merge )
   * @param {boolean} flag - boolean
   * @returns {void}
   */
  public setPreserveMasterTransform(flag: boolean): void;

  /**
   * Set the flag to replace only art work in panels ( when overwriting scene or project merge )
   * @param {boolean} flag - boolean
   * @returns {void}
   */
  public setReplaceArtWork(flag: boolean): void;

  /**
   * Set the flag to respect locked sound tracks.
   * @param {boolean} flag - boolean
   * @returns {void}
   */
  public setRespectLockedSoundTracks(flag: boolean): void;

  /**
   * Set the flag to update the project link (when project merge).
   * @param {boolean} flag - boolean
   * @returns {void}
   */
  public setUpdateProjectLink(flag: boolean): void;

  /**
   * Use source project name as prefix for inserted scenes. False by default.
   * @param {boolean} flag - boolean
   * @returns {void}
   */
  public setUseProjectNameAsScenePrefix(flag: boolean): void;

  /**
   * Use source project name as prefix for inserted sequences. False by default.
   * @param {boolean} flag - boolean
   * @returns {void}
   */
  public setUseProjectNameAsSequencePrefix(flag: boolean): void;

  /**
   * Returns a list of captions from the loaded storyboard project.
   * @returns {StringList}
   */
  public sourceProjectCaptionNames(): StringList;

  /**
   * Returns a list of panelIds from the specified scene of the loaded storyboard project.
   * @param {string} sceneId - unique ID of the scene
   * @returns {StringList}
   */
  public sourceProjectPanelIds(sceneId: string): StringList;

  /**
   * Returns a list of sceneIds from the loaded storyboard project.
   * @returns {StringList}
   */
  public sourceProjectSceneIds(): StringList;

  /**
   * Returns the scene Name for a given source project scene Id.
   * @param {string} sceneId
   * @returns {string}
   */
  public sourceProjectSceneName(sceneId: string): string;

  /**
   * Returns the sequence Name for a given source project scene Id.
   * @param {string} sceneId
   * @returns {string}
   */
  public sourceProjectSequenceName(sceneId: string): string;
}

/**
 * The Process2 JavaScript class. Used to launch an external process.
 * Processes can be instantiated in the scripting environment.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classProcess.html}
 * @example
 * p1 = new Process2("rndr -t file.rib"); // create process from single string
 * p2 = new Process2("rndr", "-t", "file.rib"); // create process using separate arguments
 *
 * // Both commands execute same process
 * p1.launch();
 * p2.launch();
 *
 * // Launch a new process and detach it from application.
 * // Application will not be monitored by script module.
 * p3 = new Process2("rndr -t file.rib");
 * p3.launchAndDetach();
 *
 * // Create a process from a specified PID.
 * p4 = new Process2(1234);
 *
 * // Verify if process is still alive and terminate it
 * if (p4.isAlive()) {
 *     p4.terminate();
 * }
 */
declare class Process extends QObject {
  /**
   * Create a new Process. A process created with a pid cannot be launched as it already should have
   * been. terminate() and isAlive() functions can still be called with such a process.
   * @param {int} pid PID of already existing process.
   * @returns {void}
   */
  constructor(pid: int);

  /**
   * Create a new Process.
   * @param {string} name Path or name of process to execute.
   * @returns {void}
   */
  constructor(name: string);

  /**
   * Create a new Process.
   * @param {string} name Path or name of process to execute.
   * @param {StringList} list List of arguments.
   * @returns {void}
   */
  constructor(name: string, list: StringList);

  /**
   * Create a new Process.
   * @param {string} commandLine Entire command line to launch.
   * @returns {void}
   */
  constructor(commandLine: string);

  /**
   * Create a new Process.
   * @param {StringList} [args=StringList()] A StringList of arguments.
   * @returns {void}
   */
  constructor(args?: StringList);

  /**
   * @param {string} name
   * @param {string} value
   * @returns {void}
   */
  public addEnvVariable(name: string, value: string): void;

  /**
   * Returns the arguments for the process.
   * @returns {StringList}
   */
  public arguments(): StringList;

  /**
   * Retruns true if you can read the Standard error file line by line.
   * @returns {boolean}
   */
  public canReadLineStderr(): boolean;

  /**
   * Returns true if you can read the Standard output file line by line.
   * @returns {boolean}
   */
  public canReadLineStdout(): boolean;

  /**
   * Closes the Standard input file.
   * @returns {void}
   */
  public closeStdin(): void;

  /**
   * Fetch command line to be executed in this process.
   * @returns {string}
   */
  public commandLine(): string;

  /**
   * Fetch error code.
   * @returns {int}
   */
  public errorCode(): int;

  /**
   * Fetch error message.
   * @returns {string}
   */
  public errorMessage(): string;

  /**
   * Whether or not running the process was a failure. A non-zero exit status indicates failure.
   * @returns {int}
   */
  public exitStatus(): int;

  /**
   * Verify if process is still alive.
   * @returns {boolean}
   */
  public isAlive(): boolean;

  /**
   * Kills the process.
   * @returns {void}
   */
  public kill(): void;

  /**
   * Launch process.
   * @returns {int}
   */
  public launch(): int;

  /**
   * Launches the Process.
   * @param {string} buf The data to write.
   * @param {StringList} [env=0] The process environment.
   * @returns {void}
   */
  public launch(buf: string, env?: StringList): void;

  /**
   * Launch process and detach it from application.
   * @returns {int}
   */
  public launchAndDetach(): int;

  /**
   * Fetch process PID.
   * @returns {int}
   */
  public pid(): int;

  /**
   * Returns the next line of the Standard error file.
   * @returns {string}
   */
  public readLineStderr(): string;

  /**
   * Returns the next line of the Standard output file.
   * @returns {string}
   */
  public readLineStdout(): string;

  /**
   * Returns the contents of the Standard error file.
   * @returns {string}
   */
  public readStderr(): string;

  /**
   * Returns the contents of the Standard output file.
   * @returns {string}
   */
  public readStdout(): string;

  /**
   * @returns {void}
   */
  public resetEnvVariableList(): void;

  /**
   * Returns true if the process is running.
   * @returns {boolean}
   */
  public running(): boolean;

  /**
   * Sets the arguments for running the process.
   * @param {StringList} arguments A StringList of arguments.
   * @returns {void}
   */
  public setArguments(arguments: StringList): void;

  /**
   * Sets the current working directory.
   * @param {string} workingDirectory The path to the desired working directory.
   * @returns {void}
   */
  public setWorkingDirectory(workingDirectory: string): void;

  /**
   * Starts the process.
   * @param {StringList} [env=0] The process environment.
   * @returns {void}
   */
  public start(env?: StringList): void;

  /**
   * Terminates the process.
   * @returns {void}
   */
  public terminate(): void;

  /**
   * Tries to terminate the process.
   * @returns {void}
   */
  public tryTerminate(): void;

  /**
   * Returns the current working directory.
   * @returns {string}
   */
  public workingDirectory(): string;

  /**
   * Writes to the Standard input file.
   * @param {string} buffer The data to write.
   * @returns {void}
   */
  public writeToStdin(buffer: string): void;

  /**
   * @returns {string}
   */
  // /* Invalid - Overriding method in parent class with different parameters */public objectName (): string;

  /**
   * @returns {void}
   */
  public launchFinished: QSignal<() => void>;

  /**
   * @returns {void}
   */
  public processExited: QSignal<() => void>;

  /**
   * @returns {void}
   */
  public readyReadStderr: QSignal<() => void>;

  /**
   * @returns {void}
   */
  public readyReadStdout: QSignal<() => void>;

  /**
   * @returns {void}
   */
  public wroteToStdin: QSignal<() => void>;

  /**
   * @returns {StringList}
   */
  // /* Invalid - Duplicate property name */ arguments: StringList;

  /**
   * @returns {int}
   */
  // /* Invalid - Duplicate property name */ exitStatus: int;

  /**
   * @returns {boolean}
   */
  // /* Invalid - Duplicate property name */ running: boolean;

  /**
   * @returns {string}
   */
  // /* Invalid - Duplicate property name */ workingDirectory: string;
}

/**
 * This interface is used to access the properties of the storyboard project.
 * The following examples are provided:
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classPropertiesManager.html}
 * @example
 * var props = new PropertiesManager;
 *
 * props.setTitle("An Amazing Architectural Journey");
 * props.setSubTitle("Memoires of R. J. MacDonald");
 * props.setEpisodeTitle("The First Cruise Ship Arrives");
 */
declare class PropertiesManager extends QObject {
  /**
   * gets the copyright string
   * @returns {string}
   */
  public getCopyright(): string;

  /**
   * returns the duration of the project in frames
   * @returns {int}
   */
  public getDuration(): int;

  /**
   * gets the episode title
   * @returns {string}
   */
  public getEpisodeTitle(): string;

  /**
   * returns the project film width
   * @returns {double}
   */
  public getFilmWidth(): double;

  /**
   * returns the project start time
   * @returns {int}
   */
  public int(): int;

  /**
   * gets the project sub title
   * @returns {string}
   */
  public getSubTitle(): string;

  /**
   * gets the project title
   * @returns {string}
   */
  public getTitle(): string;

  /**
   * sets the project copyright text
   * @param {string} text text of copyright
   * @returns {boolean}
   */
  public setCopyright(text: string): boolean;

  /**
   * sets the edisode title
   * @param {string} title new episode title
   * @returns {boolean}
   */
  public setEpisodeTitle(title: string): boolean;

  /**
   * sets the project film width
   * @param {double} width width in inches
   * @returns {boolean}
   */
  public setFilmWidth(width: double): boolean;

  /**
   * sets the project start time
   * @param {int} nbFrames new start time
   * @returns {boolean}
   */
  public setStartTime(nbFrames: int): boolean;

  /**
   * sets the project sub title
   * @param {string} title new title
   * @returns {boolean}
   */
  public setSubTitle(title: string): boolean;

  /**
   * sets the project title
   * @param {string} title new title
   * @returns {boolean}
   */
  public setTitle(title: string): boolean;
}

/**
 * The SelectionManager JavaScript class. Access and select the Storyboard visual panel, scene,
 * sequence or layers.
 * The following example shows how to print the sequence, scene and panel information.
 * The following example shows how to use the Layer Selection to get the selected layer's index.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classSelectionManager.html}
 * @example
 *  var selection = new SelectionManager();
 *  var storybd = new StoryboardManager();
 *  var selIds = new Array(0);
 *
 *  selIds = selection.getSequenceSelection();
 *  for (var i = 0; i < selIds.length; ++i)
 *      System.println(" seq " + selIds[i] + " : " + storybd.nameOfSequence(selIds[i]))
 *
 *  selIds = selection.getSceneSelection();
 *  for (var i = 0; i < selIds.length; ++i)
 *      System.println(" scene " + selIds[i] + " : " + storybd.nameOfScene(selIds[i]));
 *
 *  selIds = selection.getPanelSelection();
 *  for (var i = 0; i < selIds.length; ++i)
 *      System.println(" panel " + selIds[i] + " : " + storybd.nameOfPanel(selIds[i]));
 */
declare class SelectionManager extends QObject {
  /**
   * Clear the selection.
   * @returns {boolean}
   */
  public clearSelection(): boolean;

  /**
   * Get all the selected Layer and return the indexes in order.
   * @returns {QScriptValue}
   */
  public getLayerSelection(): QScriptValue;

  /**
   * Return a list of selected panels.
   * @returns {StringList}
   */
  public getPanelSelection(): StringList;

  /**
   * Return a list of selected scenes.
   * @returns {StringList}
   */
  public getSceneSelection(): StringList;

  /**
   * Return a list of selected sequences.
   * @returns {StringList}
   */
  public getSequenceSelection(): StringList;

  /**
   * Check if the requested Layers are selected.
   * @param {QScriptValue} layer - Layer object.
   * @returns {boolean}
   */
  public isSelected(layer: QScriptValue): boolean;

  /**
   * Select every panels.
   * @returns {boolean}
   */
  public selectAll(): boolean;

  /**
   * Set the current panel and moves the play head.
   * @param {string} panelId - Unique id of Panel
   * @returns {boolean}
   */
  public setCurrentPanel(panelId: string): boolean;

  /**
   * Select layer(s) on the currently selected Panel.
   * @param {QScriptValue} selection - An Array of Layer objects. A Layer object has name [String] and panelId [String] properties
   * @returns {boolean}
   * @example
   * var selectionManager = new SelectionManager;
   *
   * var panelSelection = selectionManager.getPanelSelection();
   * if (panelSelection.length <= 0)
   *     return;
   *
   * // Select individually each selected layer and set it to the front
   * var originallySelectedLayers = selectionManager.getLayerSelection();
   * for (var i = 0; i < originallySelectedLayers.length; i++) {
   *     selectionManager.clearSelection();
   *
   *     var temporarilySelectedLayers = [];
   *     temporarilySelectedLayers.push(originallySelectedLayers[i]);
   *
   *     selectionManager.setLayerSelection(temporarilySelectedLayers);
   *     // onActionMoveTabToTop() only works when only one layer is selected
   *     Action.perform("onActionMoveTabToTop()");
   * }
   *
   * selectionManager.setLayerSelection(originallySelectedLayers);
   */
  public setLayerSelection(selection: QScriptValue): boolean;

  /**
   * Set Selected Panels.
   * @param {StringList} panelIds - Array of panel Ids.
   * @returns {boolean}
   */
  public setPanelSelection(panelIds: StringList): boolean;

  /**
   * Set Selected Scenes.
   * @param {StringList} sceneIds - Array of scene Ids.
   * @returns {boolean}
   */
  public setSceneSelection(sceneIds: StringList): boolean;

  /**
   * Set Selected Sequences.
   * @param {StringList} sequenceIds - Array of sequence Ids.
   * @returns {boolean}
   */
  public setSequenceSelection(sequenceIds: StringList): boolean;

  /**
   * Set the currently selected video track.
   * @param {string} trackName - The name of the video track to select.
   * @returns {boolean}
   */
  public setVideoTrackSelection(trackName: string): boolean;
}

/**
 * The soundColumnInterface JavaScript object to a sound column...
 * Allow object oriented object interaction with sound sequence.
 * In Harmony, this object is created by the global scripting interface column.getSoundColumn(
 * columnName );
 * In Storyboard, this object is created by the scripting interface SoundTrackManager.getSoundColumn(
 * columnName );
 * It includes methods to iterate over the sound column content. At this moment, it cannot do any
 * modification to the sound column.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classsoundColumnInterface.html}
 */
declare class soundColumnInterface extends QObject {
  /**
   * @returns {string}
   */
  public column(): string;

  /**
   * @returns {soundSequenceInterface[]}
   */
  public sequences(): soundSequenceInterface[];

  /**
   * Returns an array containing data for printing the sound column's waveform over the given frames. The
   * returned array has 15 entries per frame, and the value is the intensity of the sound.
   * The args parameter should include the following properties (however none are required)
   * @param {QScriptValue} args
   * @returns {QScriptValue}
   * @example
   * var colObj = column.soundColumn("My_Sound_Col");
   * var waveformArr = colObj.waveformInfo({
   *     startFrame: 1,
   *     endFrame: 72,
   *     frameRate: 24.0
   * });
   *
   * var pix = new QPixmap(150, 72 * 15);
   * pix.fill() //Fills with white background
   * var painter = new QPainter();
   * painter.begin(pix);
   *
   * for (var frameCounter = 1; frameCounter <= 72; frameCounter++) {
   *     //Draw some gray lines to show frame delineations
   *     painter.fillRect(0, k * 15, 150, 1, new QColor(Qt.gray));
   * }
   *
   * for (var pixelCounter = 0; pixelCounter < waveformArr.length; pixelCounter++) {
   *     var intensity = waveformArr[pixelCounter];
   *     var newX = 75 - (intensity / 2); //center the intensity in the pixmap
   *     //Draw the waveform intensity
   *     painter.fillRect(newX, pixelCounter, intensity, 1, new QColor(Qt.black));
   * }
   * painter.end();
   *
   * pix.save("My/Desktop/waveform.png");
   */
  public waveformInfo(args: QScriptValue): QScriptValue;

  /**
   * @returns {string}
   */
  // /* Invalid - Duplicate property name */ column: string;
}

/**
 * The soundSequenceInterface JavaScript object to a sound sequence...
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classsoundSequenceInterface.html}
 */
declare class soundSequenceInterface extends QObject {
  /**
   * @param {int} startFrame
   * @param {int} endFrame
   * @param {float} startTime
   * @param {float} stopTime
   * @param {string} name
   * @param {string} filename
   * @returns {void}
   */
  constructor(
    startFrame: int,
    endFrame: int,
    startTime: float,
    stopTime: float,
    name: string,
    filename: string
  );

  /**
   * path resolved filename
   * @returns {string}
   */
  public filename(): string;

  /**
   * named of this sound sequence - derived from the filename
   * @returns {string}
   */
  public name(): string;

  /**
   * returns the start frame of this sound sequence, 1 based.
   * @returns {int}
   */
  public startFrame(): int;

  /**
   * returns the start time in second from the beginning of the sound file. The start time is sync with
   * ths start frame.
   * @returns {float}
   */
  public startTime(): float;

  /**
   * returns the stop frame of this sound sequence, value is 1 based
   * @returns {int}
   */
  public stopFrame(): int;

  /**
   * returns the stop time in second. sound will stop playing when reaching either the stop time or the
   * stop frame, whichever comes first
   * @returns {float}
   */
  public stopTime(): float;

  /**
   * @returns {int}
   */
  public stopFrame(): int;

  /**
   * @returns {int}
   */
  public startFrame(): int;

  /**
   * @returns {string}
   */
  // /* Invalid - Duplicate property name */ filename: string;

  /**
   * @returns {string}
   */
  // /* Invalid - Duplicate property name */ name: string;

  /**
   * @returns {float}
   */
  // /* Invalid - Duplicate property name */ startTime: float;

  /**
   * @returns {float}
   */
  // /* Invalid - Duplicate property name */ stopTime: float;
}

/**
 * This interface is used to access the audio tracks of a storyboard project.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classSoundTrackManager.html}
 * @example
 * var stb = new SoundTrackManager();
 * var num = stb.numberOfSoundTracks();
 * for (var i = 0; i < num; ++i) {
 *     System.println("Name of sound column is " + stb.nameOfSoundTrack(i));
 * }
 *
 * // Import a sound file at frame 25
 * stb.importSoundBuffer("Sound", "/home/user/Music/Child_French_Stereo.wav", 25);
 *
 * var soundcol = stb.soundColumn("Sound");
 * if (soundcol) {
 *     var sequences = soundcol.sequences();
 *     var numSequences = sequences.length;
 *     for (var sequenceIdx = 0; sequenceIdx < numSequences; ++sequenceIdx) {
 *         var sequence = sequences[sequenceIdx];
 *
 *         var startFrame = sequence.startFrame;
 *         var name = sequence.name;
 *         var filename = sequence.filename;
 *         var len = sequence.stopFrame - sequence.startFrame + 1;
 *
 *         System.println(filename + " has name " + name + " and start " + startFrame + " and length " + len);
 *     }
 * }
 */
declare class SoundTrackManager extends QObject {
  /**
   * add a new empty audio track
   * @returns {string}
   */
  public addSoundTrack(): string;

  /**
   * delete audio track
   * @param {string} columnName - name of the audio track
   * @returns {boolean}
   */
  public deleteSoundTrack(columnName: string): boolean;

  /**
   * return the color of the sound track.
   * @param {string} columnName
   * @returns {string}
   */
  public getSoundTrackColor(columnName: string): string;

  /**
   * import a sound file into a given audio track at the specified frame
   * @param {string} columnName - name of the audio track
   * @param {string} soundFile - path to soundFile ( mp3, aiff, wav )
   * @param {int} targetFrame - frame where audio clip is to be inserted.
   * @returns {boolean}
   */
  public importSoundBuffer(
    columnName: string,
    soundFile: string,
    targetFrame: int
  ): boolean;

  /**
   * return the columnName of the audio track at index
   * @param {int} index - index in the list of project audio tracks
   * @returns {string}
   */
  public nameOfSoundTrack(index: int): string;

  /**
   * return the number of Audio tracks
   * @returns {int}
   */
  public numberOfSoundTracks(): int;

  /**
   * sets the color of the sound track
   * @param {string} columnName
   * @param {string} color
   * @returns {void}
   */
  public setAudioClipColor(columnName: string, color: string): void;

  /**
   * returns a SoundColumnInterface object that contains a reference to that sound column. The
   * SoundColumnInterface object contains a useful interface to introspecting the sound and its sound
   * sequences.
   * @param {string} columnName - name of the audio track
   * @returns {soundColumnInterface}
   */
  public soundColumn(columnName: string): soundColumnInterface;
}

/**
 * The StoryboardManager JavaScript class. Access the main storyboard project and its components.
 * It can be used to query the sequences, scenes, panels and transitions of the project. As well, it
 * can be used to create, delete or rename project objects.
 * Scenes, Panels and Transitions are identified by a unique id. For the sake of clarity, a transition
 * is considered to belong to the shot to it's right. Or, the shot owns the transition to it's left.
 * The following examples are provided:
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classStoryboardManager.html}
 * @example
 * function projectQuery() {
 *     var storyboard = new StoryboardManager();
 *
 *     // Iterate through all sequences
 *     var nbSeqs = storyboard.numberOfSequencesInProject();
 *     for (var i = 0; i < nbSeqs; ++i) {
 *         var id = storyboard.sequenceInProject(i);
 *         System.println("Sequence  is " + id + "  : " + storyboard.nameOfSequence(id));
 *         var nbScenes = storyboard.numberOfScenesInSequence(id);
 *
 *         for (var j = 0; j < nbScenes; ++j) {
 *             var sceneId = storyboard.sceneInSequence(id, j);
 *             System.println("     scene  is " + sceneId + "  : " + storyboard.nameOfScene(sceneId));
 *         }
 *     }
 *
 *     // Alternatively, iterate through all scenes.
 *     var nbShots = storyboard.numberOfScenesInProject();
 *     for (var i = 0; i < nbShots; ++i) {
 *         var sceneId = storyboard.sceneInProject(i);
 *         var seqId = storyboard.sequenceIdOfScene(sceneId);
 *         System.println("Scene  is " + sceneId + ": " + storyboard.nameOfScene(sceneId) + " sequence is " + storyboard.nameOfSequence(seqId));
 *     }
 * }
 *
 * function transitionQuery() {
 *     var sb = new StoryboardManager();
 *     var sceneList = sb.scenesWithTrx();
 *     for (var i = 0; i < sceneList.length; ++i) {
 *         var trxId = sb.trxIdOfScene(sceneList[i]);
 *         System.println(sb.nameOfScene(sceneList[i]) +
 *             " has a transition of type " +
 *             sb.trxType(trxId) +
 *             " and of length " +
 *             sb.trxLength(trxId));
 *     }
 *
 * }
 */
declare class StoryboardManager extends QObject {
  /**
   * Return the name of the act.
   * @param {string} shotId - unique ID of scene
   * @returns {string}
   * @example
   * //this example script will print the act name of each scene in the message log
   * var storyboard = new StoryboardManager();
   * var nbShots = storyboard.numberOfScenesInProject();
   * for (var i = 0; i < nbShots; ++i) {
   *     var sceneId = storyboard.sceneInProject(i);
   *     var actName = storyboard.actNameOfScene(sceneId);
   *     MessageLog.trace("Act name of scene " + storyboard.nameOfScene(sceneId) + " is " + actName);
   * }
   */
  public actNameOfScene(shotId: string): string;

  /**
   * Append a panel at the end of the project.
   * @param {string} name - name of new scene
   * @returns {string}
   */
  public appendPanel(name: string): string;

  /**
   * Append a scene at the end of the project.
   * @param {string} name - name of new scene
   * @returns {string}
   */
  public appendScene(name: string): string;

  /**
   * Create a new sequence.
   * @param {string} firstShotId - sceneId of first targetShot
   * @param {string} lastShotId - sceneId of last targetShot
   * @returns {string}
   */
  public createSequence(firstShotId: string, lastShotId: string): string;

  /**
   * Create a transition ( at the beginning of the target shot ), and return the unique ID of the
   * transition.
   * @param {string} shotId - unique ID of the shot
   * @param {int} length - length of transition, must be less than the length of the preceding panel
   * @param {string} stringType - "wipe", "dissolve", "edge wipe", "clock wipe" or "slide"
   * @param {int} [angle=90] - angle in degrees ( used for wipes )
   * @param {boolean} [reverse=false] - bool to reverse the wipe direction.
   * @returns {string}
   */
  public createTrx(
    shotId: string,
    length: int,
    stringType: string,
    angle?: int,
    reverse?: boolean
  ): string;

  /**
   * Deletes a panel.
   * @param {string} panelId - panelId of target panel
   * @returns {boolean}
   */
  public deletePanel(panelId: string): boolean;

  /**
   * Delete a scene.
   * @param {string} sceneId - sceneId of target scene
   * @returns {boolean}
   */
  public deleteScene(sceneId: string): boolean;

  /**
   * Delete a sequence.
   * @param {string} seqId - sceneId of sequence
   * @returns {boolean}
   */
  public deleteSequence(seqId: string): boolean;

  /**
   * Delete a transition.
   * @param {string} trxId - unique ID of the transition
   * @returns {boolean}
   */
  public deleteTrx(trxId: string): boolean;

  /**
   * Get the color of the panel.
   * @param {string} panelId - panelId of the target panel
   * @returns {string}
   */
  public getPanelColor(panelId: string): string;

  /**
   * Get the panel Duration.
   * @param {string} panelId - panelId of target panel
   * @returns {int}
   */
  public getPanelDuration(panelId: string): int;

  /**
   * Return the panel metadata object corresponding to the given name and type.
   * Here is an example of a metadata object:
   * Supported values for type are: string, int, double, bool.
   * @param {string} panelId
   * @param {string} name The name of the metadata object.
   * @param {string} [type=QNTR("string")] The metadata type.
   * @returns {QScriptValue}
   * @example
   * {
   *     "name": "myMetadata",
   *     "type": "string",
   *     "creator": "Storyboard Pro",
   *     "version": "1.0",
   *     "value": "foo"
   * }
   */
  public getPanelMetadata(
    panelId: string,
    name: string,
    type?: string
  ): QScriptValue;

  /**
   * Return the list of metadatas for the specified panel.
   * This method returns an array of javascript objects where each object represent a single metadata
   * object. Here is an example of a metadata object:
   * Supported values for type are: string, int, double, bool.
   * @param {string} panelId
   * @returns {QScriptValue}
   * @example
   * {
   *     "name": "myMetadata",
   *     "type": "string",
   *     "creator": "Storyboard Pro",
   *     "version": "1.0",
   *     "value": "foo"
   * }
   */
  public getPanelMetadatas(panelId: string): QScriptValue;

  /**
   * Return the project metadata object corresponding to the given name and type.
   * Here is an example of a metadata object:
   * Supported values for type are: string, int, double, bool.
   * @param {string} name The name of the metadata object.
   * @param {string} [type=QNTR("string")] The metadata type.
   * @returns {QScriptValue}
   * @example
   * {
   *     "name": "myMetadata",
   *     "type": "string",
   *     "creator": "Storyboard Pro",
   *     "version": "1.0",
   *     "value": "foo"
   * }
   */
  public getProjectMetadata(name: string, type?: string): QScriptValue;

  /**
   * Return the list of metadatas for the current project.
   * This method returns an array of javascript objects where each object represent a single metadata
   * object. Here is an example of a metadata object:
   * Supported values for type are: string, int, double, bool.
   * @returns {QScriptValue}
   * @example
   * {
   *     "name": "myMetadata",
   *     "type": "string",
   *     "creator": "Storyboard Pro",
   *     "version": "1.0",
   *     "value": "foo"
   * }
   */
  public getProjectMetadatas(): QScriptValue;

  /**
   * Returns baseName if valid and unused or return a valid name based on baseName and naming rules.
   * Returns empty string in case of error.
   * @param {string} sceneId - sceneId of target scene
   * @param {string} baseName - name
   * @returns {string}
   */
  public getValidSceneName(sceneId: string, baseName: string): string;

  /**
   * Insert a new panel.
   * @param {boolean} after - whether the panel should be created after the target panel
   * @param {string} panelId - panelId of target panel
   * @param {string} name - name of new scene
   * @returns {string}
   */
  public insertPanel(after: boolean, panelId: string, name: string): string;

  /**
   * Insert a new scene.
   * @param {boolean} after - whether the scene should be created after the target Shot
   * @param {string} shotId - sceneId of targetShot
   * @param {string} name - name of new scene
   * @returns {string}
   */
  public insertScene(after: boolean, shotId: string, name: string): string;

  /**
   * Modify the transition.
   * @param {string} trxId - unique ID of the transition
   * @param {string} stringType - "wipe", "dissolve", "edge wipe", "clock wipe" or "slide"
   * @param {int} [angle=90] - angle in degrees ( used for wipes )
   * @param {boolean} [reverse=false] - bool to reverse the wipe direction.
   * @returns {boolean}
   */
  public modifyTrx(
    trxId: string,
    stringType: string,
    angle?: int,
    reverse?: boolean
  ): boolean;

  /**
   * Return the name of the panel.
   * @param {string} panelId - unique id of panel
   * @returns {string}
   */
  public nameOfPanel(panelId: string): string;

  /**
   * Return the name of the scene.
   * @param {string} sceneId - unique id of scene
   * @returns {string}
   */
  public nameOfScene(sceneId: string): string;

  /**
   * Return the name of the sequence.
   * @param {string} sequenceId - unique id of sequence
   * @returns {string}
   */
  public nameOfSequence(sequenceId: string): string;

  /**
   * Return the number of panels in project.
   * @returns {int}
   */
  public numberOfPanelsInProject(): int;

  /**
   * Return the number of panels in a scene.
   * @param {string} sceneId - unique id of scene
   * @returns {int}
   */
  public numberOfPanelsInScene(sceneId: string): int;

  /**
   * Return the number of scenes in project.
   * @returns {int}
   */
  public numberOfScenesInProject(): int;

  /**
   * Return the number of scenes in a sequence.
   * @param {string} sequenceId - unique id of sequence
   * @returns {int}
   */
  public numberOfScenesInSequence(sequenceId: string): int;

  /**
   * Return the number of sequences in the project.
   * @returns {int}
   */
  public numberOfSequencesInProject(): int;

  /**
   * Return the unique id of the panel.
   * @param {string} sequenceName - name of sequence
   * @param {string} sceneName - name of scene
   * @param {string} panelName - name of panel
   * @returns {string}
   */
  public panelId(
    sequenceName: string,
    sceneName: string,
    panelName: string
  ): string;

  /**
   * Return panelId of the ith panel in the project.
   * @param {int} i - index of the panel in the project
   * @returns {string}
   */
  public panelInProject(i: int): string;

  /**
   * Return the panelId of the ith panel in the scene.
   * @param {string} sceneId - unique id of the scene
   * @param {int} index - panel index in the scene
   * @returns {string}
   */
  public panelInScene(sceneId: string, index: int): string;

  /**
   * Removes a project metadata object from the list of project metadata objects.
   * @param {string} panelId
   * @param {QScriptValue} meta A metadata object.
   * @returns {boolean}
   */
  public removePanelMetadata(panelId: string, meta: QScriptValue): boolean;

  /**
   * Removes a project metadata object from the list of project metadata objects.
   * @param {QScriptValue} meta A metadata object.
   * @returns {boolean}
   */
  public removeProjectMetadata(meta: QScriptValue): boolean;

  /**
   * Rename a panel.
   * @param {string} panelId - panelId of target panel
   * @param {string} newName - new name
   * @returns {boolean}
   */
  public renamePanel(panelId: string, newName: string): boolean;

  /**
   * Rename a scene.
   * @param {string} sceneId - sceneId of target scene
   * @param {string} newName - new name
   * @returns {boolean}
   */
  public renameScene(sceneId: string, newName: string): boolean;

  /**
   * Rename a sequence.
   * @param {string} seqId - sequenceId of target sequence
   * @param {string} newName - new name
   * @returns {boolean}
   */
  public renameSequence(seqId: string, newName: string): boolean;

  /**
   * Resize a transition.
   * @param {string} trxId - unique ID of the transition
   * @param {int} length - length of transition
   * @returns {boolean}
   */
  public resizeTrx(trxId: string, length: int): boolean;

  /**
   * Return the last frame of a scene.
   * @param {string} shotId - unique ID of scene
   * @returns {int}
   */
  public sceneEndFrame(shotId: string): int;

  /**
   * Return whether a scene has a leading transition.
   * @param {string} shotId - unique ID of the scene
   * @returns {boolean}
   */
  public sceneHasTrx(shotId: string): boolean;

  /**
   * Return the unique id of the scene.
   * @param {string} sequenceName - name of sequence
   * @param {string} sceneName - name of scene
   * @returns {string}
   */
  public sceneId(sequenceName: string, sceneName: string): string;

  /**
   * Return the sceneId of the panel.
   * @param {string} panelId - unique id of panel
   * @returns {string}
   */
  public sceneIdOfPanel(panelId: string): string;

  /**
   * Return the sceneId of the shot to the right of the transition.
   * @param {string} trxId - unique ID of the transition
   * @returns {string}
   */
  public sceneIdOfTrx(trxId: string): string;

  /**
   * Return the sceneId of the ith scene in project.
   * @param {int} i - index in project
   * @returns {string}
   */
  public sceneInProject(i: int): string;

  /**
   * Return sceneId of the ith scene in sequence.
   * @param {string} sequenceId - unique id of sequence
   * @param {int} i - index in sequence
   * @returns {string}
   */
  public sceneInSequence(sequenceId: string, i: int): string;

  /**
   * Return the start frame of a scene.
   * @param {string} shotId - unique ID of scene
   * @returns {int}
   */
  public sceneStartFrame(shotId: string): int;

  /**
   * Return a list of the sceneIds of scenes that have leading transitions.
   * @returns {StringList}
   */
  public scenesWithTrx(): StringList;

  /**
   * Return the unique id of the sequence.
   * @param {string} sequenceName - name of sequence
   * @returns {string}
   */
  public sequenceId(sequenceName: string): string;

  /**
   * Return sequenceId of the sequence of the given scene.
   * @param {string} sceneId - unique id of scene
   * @returns {string}
   */
  public sequenceIdOfScene(sceneId: string): string;

  /**
   * Return the sequenceId of the ith sequence in project.
   * @param {int} i - sequence index in the project
   * @returns {string}
   */
  public sequenceInProject(i: int): string;

  /**
   * Set the panel colour.
   * @param {string} panelId - panelId of the target panel.
   * @param {QScriptValue} color - numerical value (HEX) or the name (See HTML naming convention) of the color we want to set the panel.
   * @returns {void}
   */
  public setPanelColor(panelId: string, color: QScriptValue): void;

  /**
   * Set the panel duration.
   * @param {string} panelId - panelId of target panel
   * @param {int} frames - number of frames
   * @returns {boolean}
   */
  public setPanelDuration(panelId: string, frames: int): boolean;

  /**
   * Either inserts a new project metadata object or sets the value of an existing project metadata
   * object.
   * If a metadata object already exist with the given name and type properties, then sets its value with
   * the given value property. Otherwise, inserts a new metadata object with the given name, type(default
   * is string), creator(default is executable), version(default is 1.0) and values properties. Here is
   * an example of a metadata object:
   * Supported values for type are: string, int, double, bool.
   * @param {string} panelId
   * @param {QScriptValue} meta A metadata object.
   * @returns {void}
   * @example
   * {
   *     "name": "myMetadata",
   *     "type": "string",
   *     "creator": "Storyboard Pro",
   *     "version": "1.0",
   *     "value": "foo"
   * }
   */
  public setPanelMetadata(panelId: string, meta: QScriptValue): void;

  /**
   * Either inserts a new project metadata object or sets the value of an existing project metadata
   * object.
   * If a metadata object already exist with the given name and type properties, then sets its value with
   * the given value property. Otherwise, inserts a new metadata object with the given name, type(default
   * is string), creator(default is executable), version(default is 1.0) and values properties. Here is
   * an example of a metadata object:
   * Supported values for type are: string, int, double, bool.
   * @param {QScriptValue} meta A metadata object.
   * @returns {void}
   * @example
   * {
   *     "name": "myMetadata",
   *     "type": "string",
   *     "creator": "Storyboard Pro",
   *     "version": "1.0",
   *     "value": "foo"
   * }
   */
  public setProjectMetadata(meta: QScriptValue): void;

  /**
   * Split a panel into 2 panels.
   * @param {string} panelId - panelId of target panel
   * @param {int} atFrame - frame at which to split ( measured from start of project )
   * @returns {boolean}
   */
  public splitPanel(panelId: string, atFrame: int): boolean;

  /**
   * Return the transition ID of the transition to the left of the shot.
   * @param {string} shotId - unique ID of the scene
   * @returns {string}
   */
  public trxIdOfScene(shotId: string): string;

  /**
   * Return the length of the transition.
   * @param {string} trxId - unique ID of the transition
   * @returns {int}
   */
  public trxLength(trxId: string): int;

  /**
   * Return a string identifying the transition type.
   * @param {string} trxId - unique ID of the transition
   * @returns {string}
   */
  public trxType(trxId: string): string;
}

/**
 * The ToolPresetManager JavaScript class. Provides methods to set the current tool preset.
 * The tool preset manager returns information about the existing tool presets and provides to the user
 * the functionality to select a tool preset with its "id" property. Presets can be defined by the
 * following properties:
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classToolPresetManager.html}
 * @example
 * // Activate the Preset named "preset"
 * var toolPresetManager = new ToolPresetManager();
 * var presets = toolPresetManager.getPresets();
 * presets.forEach(
 *     function(preset) {
 *         if (preset.name == "preset")
 *             toolPresetManager.setActivePreset(preset);
 *     }
 * );
 */
declare class ToolPresetManager extends QObject {
  /**
   * Get all the presets of the project.
   * @returns {QScriptValue}
   */
  public getPresets(): QScriptValue;

  /**
   * Activate the given preset.
   * @param {QScriptValue} preset A JavaScript object with the "id" property set to the desired tool preset
   * @returns {void}
   */
  public setActivePreset(preset: QScriptValue): void;
}

/**
 * The Action JavaScript global object. Trigger action associated to menu or tool bar items.
 * Call either global actions or actions associated to a specific responder.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classAction.html}
 * @example
 * function callAbout() {
 *     // Call the global action onActionAbout() which will show the About dialog.
 *     Action.perform("onActionAbout()");
 * }
 *
 * function callDisable3DSubnode() {
 *     // Validate if the action is available right now. In this example, it will fail if no subnode is selected.
 *     if (Action.validate("onActionHideSubNode()", "graph3dresponder").isEnabled) {
 *         // Call the hide subnode action from the 3D Graph menu (or toolbar).
 *         Action.perform("onActionHideSubNode()", "graph3dresponder");
 *     }
 * }
 */
declare class Action extends SCR_BaseInterface {
  /**
   * Retrieve the list of actions for a given responder.
   * Example usage:
   * @param {string} responder responder identity to investigate.
   * @returns {StringList}
   * @example
   * var aList = Action.getActionList("Node View");
   * for (var i = 0; i < aList.length; ++i) {
   *     MessageLog.trace("availableAction=" + aList[i]);
   * }
   */
  public getActionList(responder: string): StringList;

  /**
   * Retrieve the list of responder names.
   * Example usage:
   * @returns {StringList}
   * @example
   * var rList = Action.getResponderList();
   * for (var i = 0; i < rList.length; ++i) {
   *     MessageLog.trace("ResponderIdentity=" + rList[i]);
   * }
   */
  public getResponderList(): StringList;

  /**
   * Perform the requested action (slot - menu item, toolbar item,...)
   * Perform the requested action for the main application responder. If the main responder doesn't own
   * the requested action, try to use the current view with focus as the responder.
   * @param {string} slot The action function name (ex: onMyAction()).
   * @returns {void}
   * @example
   * Action.perform("onActionAbout()");
   */
  public perform(slot: string): void;

  /**
   * Perform the requested action (slot - menu item, toolbar item,...)
   * Perform the requested action for a specific responder.
   * @param {string} slot The action function name (ex: onMyAction()).
   * @param {string} responder The responder to the function name (ex: drawingView).
   * @returns {void}
   * @example
   * Action.perform("onActionToggleApplyToolToAllLayers()", "drawingView");
   */
  public perform(slot: string, responder: string): void;

  /**
   * Execute an action using the action manager on the given responder with parameters.
   * Example usage:
   * @param {string} slot action to execute. See Action.getActionList() for action list.
   * @param {string} responder command target. See Action.getResponderList() for responder list.
   * @param {QVariant} parameters action parameter(s). Use an array [] to provide multiple action parameters.
   * @returns {void}
   * @example
   * Action.perform("onActionShowDeformer(String)", "miniPegModuleResponder", "Top/Deformation-Drawing");
   */
  public perform(slot: string, responder: string, parameters: QVariant): void;

  /**
   * Execute an action using the action manager on all responder instances.
   * Example usage:
   * @param {string} slot action to execute. See Action.getActionList() for action list.
   * @param {string} responder command target. See Action.getResponderList() for responder list.
   * @returns {void}
   * @example
   * Action.perform("onActionFocusOnSelectionNV()", "Node View");
   */
  public performForEach(slot: string, responder: string): void;

  /**
   * Validate the requested action (slot - menu item, toolbar item,...)
   * Validate the requested action for the main application responder. If the main responder doesn't own
   * the requested action, try to use the current view with focus as the responder.
   * @param {string} slot The action function name(ex : onMyAction()).
   * @returns {QVariant}
   * @example
   * var validateData = Action.validate("onActionAbout()");
   */
  public validate(slot: string): QVariant;

  /**
   * Validate the requested action (slot - menu item, toolbar item,...)
   * Validate the requested action for a specific responder.
   * @param {string} slot The action function name (ex: onMyAction()).
   * @param {string} responder The responder to the function name (ex: drawingView).
   * @returns {QVariant}
   * @example
   * // Toggle on the Apply Tool to Line and Colour Art option only if it's off.
   * var validateData = Action.validate("onActionToggleApplyToolToAllLayers()", "drawingView");
   * if (!validateData.checked)
   *     Action.perform("onActionToggleApplyToolToAllLayers()", "drawingView");
   */
  public validate(slot: string, responder: string): QVariant;
}

/**
 * The DrawingTools JavaScript global object. Get information about the currently selected drawing.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classDrawingTools.html}
 * @example
 * var params = new DrawingToolParams;
 * params.applyAllDrawings = true;
 * DrawingTools.extractCenterline(DrawingTools.lineArt, DrawingTools.colourArt, params);
 */
declare namespace DrawingTools {
  /**
   * Computes the breaking triangles of the current layer using params.
   * @param {DrawingToolParams} [params=0] The DrawingToolParams.
   * @returns {void}
   */
  function computeBreakingTriangles(params?: DrawingToolParams): void;

  /**
   * Converts the selected pencil lines in layer of the current drawing using params.
   * @param {int} [art=LineArtMask] The current drawing.
   * @param {DrawingToolParams} [params=0] The DrawingToolParams.
   * @returns {void}
   */
  function convertPencilToBrush(art?: int, params?: DrawingToolParams): void;

  /**
   * Extracts the centerline from srcArt and puts the extracted line in dstArt using params.
   * @param {int} [srcArt=LineArtMask] The source art.
   * @param {int} [dstArt=ColourArtMask] The destination art layer.
   * @param {DrawingToolParams} [params=0] The DrawingToolParams.
   * @returns {void}
   */
  function extractCenterline(
    srcArt?: int,
    dstArt?: int,
    params?: DrawingToolParams
  ): void;

  /**
   * Sets the current art to be one of the following : underlayArt, colourArt, lineArt or overlayArt.
   * @param {int} currentArt
   * @returns {void}
   */
  function setCurrentArt(currentArt: int): void;

  /**
   * @param {string} columnName The name of the column to start the drawing at.
   * @param {int} [frame=1] The frame number to set the current drawing at.
   * @returns {boolean}
   */
  function setCurrentDrawingFromColumnName(
    columnName: string,
    frame?: int
  ): boolean;

  /**
   * Sets the current drawing to be from node nodeName at frame frame.
   * @param {string} nodeName The name of the node to start the drawing at.
   * @param {int} [frame=1] The frame number to set the current drawing at.
   * @returns {boolean}
   */
  function setCurrentDrawingFromNodeName(
    nodeName: string,
    frame?: int
  ): boolean;

  /**
   * Returns the mask for all 4 art layers.
   * @returns {int}
   */
  var allArts: int;

  /**
   * Returns the colourArt mask.
   * @returns {int}
   */
  var colourArt: int;

  /**
   * Returns the lineArt mask.
   * @returns {int}
   */
  var lineArt: int;

  /**
   * Returns the overlayArt mask.
   * @returns {int}
   */
  var overlayArt: int;

  /**
   * Returns the underlayArt mask.
   * @returns {int}
   */
  var underlayArt: int;
}

/**
 * The FileDialog JavaScript global object. A simplified version of the Qt file dialogs.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classFileDialog.html}
 */
declare class FileDialog extends SCR_BaseInterface {
  /**
   * Function that will return an existing directory selected by the user.
   * @param {string} [dir=""] The directory to open the file dialog to.
   * @param {string} [title=""] The title for the file dialog.
   * @param {QWidget} [parent=0] Unused.
   * @returns {QVariant}
   */
  public getExistingDirectory(
    dir?: string,
    title?: string,
    parent?: QWidget
  ): QVariant;

  /**
   * Function that returns an existing file selected by the user.
   * @param {string} [filter=""] The filter for which files to select.
   * @param {string} [title=""] The title for the file dialog.
   * @param {QWidget} [parent=0] Unused.
   * @returns {QVariant}
   */
  public getOpenFileName(
    filter?: string,
    title?: string,
    parent?: QWidget
  ): QVariant;

  /**
   * Function that will return one or more existing files selected by the user.
   * @param {string} [dir=""] The directory to open the file dialog to.
   * @param {string} [filter=""] The filter for which files to select.
   * @param {string} [title=""] The title for the file dialog.
   * @param {QWidget} [parent=0] Unused.
   * @returns {StringList}
   */
  public getOpenFileNames(
    dir?: string,
    filter?: string,
    title?: string,
    parent?: QWidget
  ): StringList;

  /**
   * Function that will return a file name selected by the user.
   * @param {string} [filter=""] The filter for which files to select.
   * @param {string} [title=""] The title for the file dialog.
   * @param {QWidget} [parent=0] Unused.
   * @returns {QVariant}
   */
  public getSaveFileName(
    filter?: string,
    title?: string,
    parent?: QWidget
  ): QVariant;
}

/**
 * The fileMapper JavaScript global object. Map paths from one format to another.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classfileMapper.html}
 */
declare class fileMapper extends SCR_BaseInterface {
  /**
   * Converts a URL to a path of the form eg. /usadata000/[job]/scene-[scene]/[remainder...].
   * @param {string} url The url to convert.
   * @returns {string}
   */
  public fileURLToPath(url: string): string;

  /**
   * Returns the complete path of the passed path resolving shortcuts in windows. Will also convert the
   * path separator to '\'.
   * By example, /usadata000 is mapped to a network drive through a shortcut pointing to
   * /server/path/usadata000.
   * The path will be remapped to \\server\path\usadata000\file.txt.
   * @param {string} path The Path on Windows.
   * @returns {string}
   * @example
   * var remapped = fileMapper.toNativePath("/usadata000/file.txt");
   */
  public toNativePath(path: string): string;

  /**
   * Converts a path of the form /USA_DB/jobs/[job]/scene-[scene]/[remainder...] to eg.
   * /usadata000/[job]/scene-[scene]/[remainder...].
   * If working offline (no database) this function will return the input path.
   *  In database mode if the path is not of the form
   * this function will return the input path.
   *  In database mode if the scene cannot be located in the database this function will return the input
   * path.
   * @param {string} path The path to convert.
   * @returns {string}
   * @example
   * /USA_DB/jobs / [job] / scene - [scene] / [remainder...]
   */
  public toScenePath(path: string): string;
}

/**
 * The frame JavaScript global object get, set and offset the current frame.
 * This interface is used obtain and change the number of current frame. The current frame is the frame
 * at which the red playhead is in the Timeline view. It is based on the amount of frames since the
 * first frame of the project which, in this interface, is frame 1.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classframe.html}
 * @example
 * function insertMarkersAtFrame(int myFrame) {
 *     // Return the current frame.
 *     var curFrame = frame.current();
 *
 *     // If the current frame is not the same as the one passed as argument, move to it.
 *     if (curFrame <= myFrame)
 *         frame.moveFrames(curFrame - myFrame);
 *     else
 *         frame.moveFrames(myFrame - curFrame);
 * }
 */
declare class frame extends SCR_BaseInterface {
  /**
   * Get the number of the current frame.
   * @returns {int}
   */
  public current(): int;

  /**
   * Offsets the current frame by the given number of frames.
   * @param {int} offset The amount of frames to offset the current frame by. A positive value offsets the current frame to the right and a negative value offsets the current frame to the left.
   * @returns {boolean}
   */
  public moveFrames(offset: int): boolean;

  /**
   * Change the current frame to the given frame number.
   * @param {int} frameNb The number of the frame to move to. The value must be between 1 (first frame) and the amount of frames in the project.
   * @returns {void}
   */
  public setCurrent(frameNb: int): void;
}

/**
 * The Input JavaScript global object. A simplified version of the Qt input dialogs.
 * Provides a simple convenient dialog to get a single value from the user.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classInput.html}
 */
declare class Input extends SCR_BaseInterface {
  /**
   * Function to get an item from the user.
   * @param {string} label A prompt for the input you want.
   * @param {StringList} itemList A list of items for the user to choose from.
   * @param {string} [currentItem=""] The currently selected item from the list.
   * @param {boolean} [editable=false] Whether or not the user can enter their own item.
   * @param {string} [title=""] The title for the dialog box.
   * @param {QWidget} [parent=0] Unused.
   * @returns {QVariant}
   */
  public getItem(
    label: string,
    itemList: StringList,
    currentItem?: string,
    editable?: boolean,
    title?: string,
    parent?: QWidget
  ): QVariant;

  /**
   * Function to get an item from the user.
   * @param {StringList} itemList A list of items for the user to choose from.
   * @param {string} [currentItem=""] The currently selected item from the list.
   * @param {boolean} [editable=false] Whether or not the user can enter their own item.
   * @param {QWidget} [parent=0] Unused.
   * @returns {QVariant}
   */
  public getItem(
    itemList: StringList,
    currentItem?: string,
    editable?: boolean,
    parent?: QWidget
  ): QVariant;

  /**
   * Function to get a number from the user.
   * @param {string} [label=""] A prompt for the input you want.
   * @param {double} [value=0] Number to appear in the dialog box number field when opened.
   * @param {int} [decimals=0] The number of decimals that will be allowed in the input.
   * @param {double} [minValue=-2147483647] The minimum value allowed for the input.
   * @param {double} [maxValue=2147483647] The maximum value allowed for the input.
   * @param {string} [title=""] The title for the dialog box.
   * @param {QWidget} [parent=0] Unused.
   * @returns {QVariant}
   */
  public getNumber(
    label?: string,
    value?: double,
    decimals?: int,
    minValue?: double,
    maxValue?: double,
    title?: string,
    parent?: QWidget
  ): QVariant;

  /**
   * Function to get a string from the user.
   * @param {string} [label=""] A prompt for the input you want.
   * @param {string} [text=""] Text to appear in the dialog box text field when opened.
   * @param {string} [title=""] The title for the dialog box.
   * @param {QWidget} [parent=0] Unused.
   * @returns {QVariant}
   */
  public getText(
    label?: string,
    text?: string,
    title?: string,
    parent?: QWidget
  ): QVariant;
}

/**
 * The KeyModifiers JavaScript global object. Query key modifiers.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classKeyModifiers.html}
 */
declare class KeyModifiers extends SCR_BaseInterface {
  /**
   * Check if the Alt key is pressed.
   * @returns {boolean}
   */
  public IsAlternatePressed(): boolean;

  /**
   * Check if the Ctrl key is pressed.
   * @returns {boolean}
   */
  public IsControlPressed(): boolean;

  /**
   * Check if the Shift key is pressed.
   * @returns {boolean}
   */
  public IsShiftPressed(): boolean;

  /**
   * Check if the space key is pressed.
   * @returns {boolean}
   */
  public IsSpacePressed(): boolean;
}

/**
 * The MessageBox JavaScript class. A simplified version of the MessageBox Qt dialog.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classMessageBox.html}
 * @example
 * MessageBox.warning(" This is a warning.");
 */
declare class MessageBox extends SCR_BaseInterface {
  /**
   * A critical box. By default has one button labeled 'Retry'.
   * @param {string} text The text to display in the information box body.
   * @param {int} button0 Default = 1. 1 to display the first button.
   * @param {int} button1 Default = 0. 1 to display the second button.
   * @param {int} button2 Default = 0. 1 to display the third button.
   * @param {string} title The text to display in the title.
   * @param {QWidget} parent The parent widget to inherit.
   * @returns {QScriptValue}
   */
  public critical(
    text: string,
    button0?: int,
    button1?: int,
    button2?: int,
    title?: string,
    parent?: QWidget
  ): QScriptValue;

  /**
   * An information box. By default has one button labeled 'OK'.
   * @param {string} text The text to display in the information box body.
   * @param {int} button0 Default = 1. 1 to display the first button.
   * @param {int} button1 Default = 0. 1 to display the second button.
   * @param {int} button2 Default = 0. 1 to display the third button.
   * @param {string} title The text to display in the title.
   * @param {QWidget} parent The parent widget to inherit.
   * @returns {QScriptValue}
   */
  public information(
    text: string,
    button0?: int,
    button1?: int,
    button2?: int,
    title?: string,
    parent?: QWidget
  ): QScriptValue;

  /**
   * A warning box. By default has two buttons labeled 'Abort' and 'Retry'.
   * @param {string} text The text to display in the information box body.
   * @param {int} button0 Default = 1. 1 to display the first button.
   * @param {int} button1 Default = 0. 1 to display the second button.
   * @param {int} button2 Default = 0. 1 to display the third button.
   * @param {string} title The text to display in the title.
   * @param {QWidget} parent The parent widget to inherit.
   * @returns {QScriptValue}
   */
  public warning(
    text: string,
    button0?: int,
    button1?: int,
    button2?: int,
    title?: string,
    parent?: QWidget
  ): QScriptValue;
}

/**
 * The MessageLog JavaScript global object. Allows the user to print messages to the message log
 * window.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classMessageLog.html}
 * @example
 * MessageLog.trace("Export template failed. Nothing selected.");
 */
declare class MessageLog extends SCR_BaseInterface {
  /**
   * Clears the message log.
   * The same as clearing the message log through the ui. Cleared content can still be retrieved with
   * getLog().
   * @returns {void}
   */
  public clearLog(): void;

  /**
   * Writes the message to the message log if debug mode is on.
   * @param {string} messageIfDebug The message to be written to the message log if debug mode is on.
   * @returns {void}
   */
  public debug(messageIfDebug: string): void;

  /**
   * Prints message to message log as an error.
   * When running as an interactive application, this will report the error in a modal dialog box (at the
   * end of the script only). In batch mode, the error is logged to the log file, like trace().
   * @param {string} message The message to the written to the message log as an error.
   * @returns {void}
   */
  public error(message: string): void;

  /**
   * Returns the content of the message log.
   * @returns {string}
   */
  public getLog(): string;

  /**
   * Returns whether the debug mode is set.
   * @returns {boolean}
   */
  public isDebug(): boolean;

  /**
   * Sets the debug mode to on/off.
   * @param {boolean} b If true sets the debug mode to on.
   * @returns {void}
   */
  public setDebug(b: boolean): void;

  /**
   * Writes the message to the message log.
   * @param {string} message The message to be written to the message log.
   * @returns {void}
   */
  public trace(message: string): void;
}

/**
 * The PenstyleManager JavaScript global object. Query/modify the current penstyle and list of
 * penstyles.
 * The list of penstyles differs by active tool. Query the currentToolId to know which list is active.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classPenstyleManager.html}
 * @example
 * function queryPenstyles() {
 *     // work on the brush pen styles by activating the tool
 *     Action.perform("onActionChooseBrushTool()", "sceneUI");
 *
 *     var num = PenstyleManager.getNumberOfPenstyles();
 *     for (var i = 0; i < num; ++i) {
 *         MessageLog.trace("penstyle name is " + PenstyleManager.getPenstyleName(i));
 *     }
 *
 *     MessageLog.trace("The current penstyle has min size of " + PenstyleManager.getCurrentPenstyleMinimumSize() +
 *         " and maximum size of " + PenstyleManager.getCurrentPenstyleMaximumSize());
 *
 * }
 */
declare class PenstyleManager extends SCR_BaseInterface {
  /**
   * Sets the current penstyle centreline smoothness.
   * @param {double} smooth New centreline smoothness value.
   * @returns {void}
   */
  public changeCurrentPenstyleCenterlineSmoothness(smooth: double): void;

  /**
   * Sets the current penstyle maximum size.
   * @param {double} maximum New maximum size.
   * @returns {void}
   */
  public changeCurrentPenstyleMaximumSize(maximum: double): void;

  /**
   * Sets the current penstyle minimum size.
   * @param {double} minimum New minimum size.
   * @returns {void}
   */
  public changeCurrentPenstyleMinimumSize(minimum: double): void;

  /**
   * Sets the current penstyle outline smoothness.
   * @param {double} smooth New outline smoothness value.
   * @returns {void}
   */
  public changeCurrentPenstyleOutlineSmoothness(smooth: double): void;

  /**
   * Returns the name of the currently active tool.
   * Pen styles are separated by tools. Use this value to know which set of pen styles are currently
   * active.
   * @returns {string}
   */
  public currentToolName(): string;

  /**
   * Formats the penstyle list into a string, which can be used to store the penstyle list and import it
   * later.
   * @returns {string}
   */
  public exportPenstyleListToString(): string;

  /**
   * Create a string representing the penstyle which can be used to store the penstyle and import it
   * later.
   * @param {int} index Index of the penstyle.
   * @returns {string}
   */
  public exportPenstyleToString(index: int): string;

  /**
   * Gets the current penstyle centerline smoothness.
   * @returns {double}
   */
  public getCurrentPenstyleCenterlineSmoothness(): double;

  /**
   * Gets the current penstyle eraser flag.
   * @returns {boolean}
   */
  public getCurrentPenstyleEraserFlag(): boolean;

  /**
   * Returns the index of the current penstyle for the active tool.
   * @returns {int}
   */
  public getCurrentPenstyleIndex(): int;

  /**
   * Gets the current penstyle maximum size.
   * @returns {double}
   */
  public getCurrentPenstyleMaximumSize(): double;

  /**
   * Gets the current penstyle minimum size.
   * @returns {double}
   */
  public getCurrentPenstyleMinimumSize(): double;

  /**
   * Returns the name of the current penstyle for the active tool.
   * @returns {string}
   */
  public getCurrentPenstyleName(): string;

  /**
   * Gets the current penstyle outline smoothness.
   * @returns {double}
   */
  public getCurrentPenstyleOutlineSmoothness(): double;

  /**
   * Returns the number of penstyles.
   * @returns {int}
   */
  public getNumberOfPenstyles(): int;

  /**
   * Returns the name of the penstyle at the given index for the current tool.
   * @param {int} index Index of the penstyle.
   * @returns {string}
   */
  public getPenstyleName(index: int): string;

  /**
   * Imports a penstyle list from a previously formatted penstyle string.
   * @param {string} str A formatted penstyle or penstyle list, which can be created from exportPenstyleToString or exportPenstylesListToString.
   * @returns {void}
   */
  public importPenstyleListFromString(str: string): void;

  /**
   * Saves the penstyles.
   * @returns {void}
   */
  public savePenstyles(): void;

  /**
   * Sets the current penstyle for the active tool.
   * @param {int} index Index of penstyle to be set as current penstyle.
   * @returns {void}
   */
  public setCurrentPenstyleByIndex(index: int): void;

  /**
   * Sets the current penstyle for the active tool.
   * @param {string} name Name of the penstyle to be set as current penstyle.
   * @returns {void}
   */
  public setCurrentPenstyleByName(name: string): void;
}

/**
 * The preferences JavaScript global object. Set or retrieve user preferences saved in the user local
 * data.
 * The actual name and current value of a preference are in stored in the user configuration file. The
 * file prefs.xml contains a description of all preferences recognized by the application. The keyword
 * to access each predefined preference is also found in that file. Scripts can change or retrieve any
 * existing preference, and may create new preferences.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classpreferences.html}
 * @example
 * function toggleAutoSaveLayout() {
 *     var b;
 *     b = preferences.getBool("AUTO_SAVE_LAYOUT", false);
 *     MessageLog.trace("preference to automatically save the layout was " + b);
 *     preferences.setBool("AUTO_SAVE_LAYOUT", !b);
 *     b = preferences.getBool("AUTO_SAVE_LAYOUT", false);
 *     MessageLog.trace("preference for auto save layout is now " + b);
 * }
 */
declare class preferences extends SCR_BaseInterface {
  /**
   * Gets the boolean value from the given preference name.
   * @param {string} name The name of the preference.
   * @param {boolean} defaultValue The default value of the preference.
   * @returns {boolean}
   */
  public getBool(name: string, defaultValue?: boolean): boolean;

  /**
   * Gets the color from the given preference name.
   * @param {string} name The preference name.
   * @param {ColorRGBA} defaultValue The default value of the preference.
   * @returns {ColorRGBA}
   */
  public getColor(name: string, defaultValue?: ColorRGBA): ColorRGBA;

  /**
   * Gets the double value from the given preference name.
   * @param {string} name The preference name.
   * @param {double} defaultValue The default value of the preference.
   * @returns {double}
   */
  public getDouble(name: string, defaultValue?: double): double;

  /**
   * Gets the integer value from the given preference name.
   * @param {string} name The preference name.
   * @param {int} defaultValue The default value of the preference.
   * @returns {double}
   */
  public getInt(name: string, defaultValue?: int): double;

  /**
   * Gets the string value from the given preference name.
   * @param {string} name The name of the preference.
   * @param {string} defaultValue The default value of the preference.
   * @returns {string}
   */
  public getString(name: string, defaultValue?: string): string;

  /**
   * Gets the boolean value for the given preference name.
   * @param {string} name The name of the preference.
   * @param {boolean} value The boolean to set the preference to.
   * @returns {void}
   */
  public setBool(name: string, value: boolean): void;

  /**
   * Sets the color for the given preference name.
   * @param {string} name The preference name.
   * @param {ColorRGBA} color The color to set the preference to.
   * @returns {void}
   */
  public setColor(name: string, color: ColorRGBA): void;

  /**
   * Sets the double value for the given preference name.
   * @param {string} name The preference name.
   * @param {double} value The double to set the preference to.
   * @returns {void}
   */
  public setDouble(name: string, value: double): void;

  /**
   * Sets the integer value for the given preference name.
   * @param {string} name The preference name.
   * @param {int} value The integer to set the preference to.
   * @returns {void}
   */
  public setInt(name: string, value: int): void;

  /**
   * Sets the string value for the given preference name.
   * @param {string} name The name of the preference.
   * @param {string} value The string to set the preference to.
   * @returns {void}
   */
  public setString(name: string, value: string): void;
}

/**
 * The project JavaScript global object. Retrieve and set global project attributes.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classproject.html}
 */
declare class project extends SCR_BaseInterface {
  /**
   * This function starts the accumulation of all of the functions between it and the endUndoRedoAccum
   * function as one command that will appear in the undo/redo list. If you do not use this function with
   * endUndoRedoAccum, each function in the script generates a separate undo/redo entry.
   * @param {string} commandName The name of the command to be added to the undo/redo list.
   * @returns {void}
   */
  public beginUndoRedoAccum(commandName: string): void;

  /**
   * This function cancels the accumulation of undo/redo commands. No command will be added to the
   * undo/redo list and all commands that have already been executed will be rolled-back (undone).
   * @returns {void}
   */
  public cancelUndoRedoAccum(): void;

  /**
   * Clears the command history.
   * @returns {void}
   */
  public clearHistory(): void;

  /**
   * Returns the X value of the centre coordinate of the grid.
   * @returns {int}
   */
  public coordAtCenterX(): int;

  /**
   * Returns the Y value of the centre coordinate of the grid.
   * @returns {int}
   */
  public coordAtCenterY(): int;

  /**
   * Returns the current project path.
   * @returns {string}
   */
  public currentProjectPath(): string;

  /**
   * For windows, returns the remapped path.
   * @returns {string}
   */
  public currentProjectPathRemapped(): string;

  /**
   * Returns the X value of the current preview resolution.
   * For example, when the current resolution is 720x540 pixels this function will return 720.
   * @returns {int}
   */
  public currentResolutionX(): int;

  /**
   * Returns the Y value of the current preview resolution.
   * For example, when the current resolution is 720x540 pixels this function will return 540.
   * @returns {int}
   */
  public currentResolutionY(): int;

  /**
   * Returns the default resolution field of view (FOV). The default FOV is a global project parameter.
   * @returns {double}
   */
  public defaultResolutionFOV(): double;

  /**
   * Returns the default resolution name.
   * The resolution name is a global parameter saved with the project. It may be empty when the project
   * is used as a custom resolution, which is not one of the pre-defined resolutions.
   * @returns {string}
   */
  public defaultResolutionName(): string;

  /**
   * Returns the X value of the default resolution.
   * This resolution is a global parameter saved with the project, not the current preview resolution.
   * For example, when the default project resolution is 720x540 pixels this function will return 720.
   * @returns {int}
   */
  public defaultResolutionX(): int;

  /**
   * Returns the Y value of the default resolution.
   * This resolution is a global parameter saved with the project, not the current preview resolution.
   * For example, when the default project resolution is 720x540 pixels this function will return 540.
   * @returns {int}
   */
  public defaultResolutionY(): int;

  /**
   * This function ends the accumulation all of the functions between it and the beginUndoRedoAccum
   * function as one command that will appear in the undo/redo list. If you do not use this function with
   * beginUndoRedoAccum, each function in the script generates a separate undo/redo entry.
   * @returns {void}
   */
  public endUndoRedoAccum(): void;

  /**
   * Returns the frame rate, as frames per second.
   * @returns {double}
   */
  public getFrameRate(): double;

  /**
   * Returns true if the project was ever modified.
   * It will return true even if the modifications have been saved.
   * @returns {boolean}
   */
  public hasBeenDirty(): boolean;

  /**
   * Tells if the project has been modified since its last save.
   * @returns {boolean}
   */
  public isDirty(): boolean;

  /**
   * Return a metadata object corresponding to the given name and type.
   * Here is an example of a metadata object:
   * Supported values for type are: string, int, double, bool.
   * @param {string} name The name of the metadata object.
   * @param {string} [type=QNTR("string")] The metadata type.
   * @returns {QScriptValue}
   * @example
   * {
   *     "name": "myMetadata",
   *     "type": "string",
   *     "creator": "Storyboard Pro",
   *     "version": "1.0",
   *     "value": "foo"
   * }
   */
  public metadata(name: string, type?: string): QScriptValue;

  /**
   * Return the list of metadatas for the current project.
   * This method returns an array of javascript objects where each object represent a single metadata
   * object. Here is an example of a metadata object:
   * Supported values for type are: string, int, double, bool.
   * @returns {QScriptValue}
   * @example
   * {
   *     "name": "myMetadata",
   *     "type": "string",
   *     "creator": "Storyboard Pro",
   *     "version": "1.0",
   *     "value": "foo"
   * }
   */
  public metadatas(): QScriptValue;

  /**
   * Returns the list of known resolutions.
   * @returns {StringList}
   */
  public namedResolutions(): StringList;

  /**
   * Returns the X value of the named resolution. For example, when the named resolution is 720x540
   * pixels this function will return 720.
   * @param {string} name The name of the resolution to get the value from.
   * @returns {int}
   */
  public namedResolutionX(name: string): int;

  /**
   * Returns the Y value of the named resolution. For example, when the named resolution is 720x540
   * pixels this function will return 540.
   * @param {string} name The name of the resolution to get the value from.
   * @returns {int}
   */
  public namedResolutionY(name: string): int;

  /**
   * Returns the number of units in the X axis of the grid.
   * @returns {int}
   */
  public numberOfUnitsX(): int;

  /**
   * Returns the number of units in the Y axis of the grid.
   * @returns {int}
   */
  public numberOfUnitsY(): int;

  /**
   * Returns the number of units in the Z axis of the grid.
   * @returns {int}
   */
  public numberOfUnitsZ(): int;

  /**
   * Closes the current project, and open the one specified by it's file path.
   * @param {string} filePath The full path to the file to open.
   * @returns {boolean}
   */
  public openProject(filePath: string): boolean;

  /**
   * Returns the ID of the current version.
   * @returns {int}
   */
  public projectVersion(): int;

  /**
   * Returns the name of the current project version.
   * @returns {string}
   */
  public projectVersionName(): string;

  /**
   * Redoes the last n operations. If n is not specified, it will be 1.
   * @param {int} [depth=1] The number of operations to redo.
   * @returns {void}
   */
  public redo(depth?: int): void;

  /**
   * Removes a metadata object from the list of metadata objects.
   * @param {QScriptValue} meta A metadata object.
   * @returns {boolean}
   */
  public removeMetadata(meta: QScriptValue): boolean;

  /**
   * Performs the "save all" command. Effectively, this saves the entire project and all modified files.
   * @returns {boolean}
   */
  public saveAll(): boolean;

  /**
   * Save the current project to the specified folder.
   * Save the current project to the specified folder. Folder must not exists. The current project is
   * updated to use that folder. Any error or message is reported using the standard error logger (so, in
   * non batch mode, user will see message popup).
   * This API only works in standalone as you cannot 'Save As' in database.
   * @param {string} pathname New folder of the project (ie: /Users/a_user/Documents/my_save_as_project )
   * @returns {boolean}
   */
  public saveAs(pathname: string): boolean;

  /**
   * Saves the project as a new version.
   * @param {string} name The name of the version.
   * @param {boolean} markAsDefault This is boolean to indicate to mark this version as the default version.
   * @returns {boolean}
   */
  public saveAsNewVersion(name: string, markAsDefault?: boolean): boolean;

  /**
   * Sets the value of the centre (X, Y) coordinates.
   * @param {int} x The value of the X coordinate at the centre of the grid.
   * @param {int} y The value of the Y coordinate at the centre of the grid.
   * @returns {boolean}
   */
  public setCoordAtCenter(x: int, y: int): boolean;

  /**
   * Sets the default project resolution and field of view.
   * @param {int} x Set the X resolution for the project in pixels.
   * @param {int} y Set the Y resolution for the project in pixels.
   * @param {double} fov Set the field of view in degree. Typical value is 41.112.
   * @returns {boolean}
   */
  public setDefaultResolution(x: int, y: int, fov: double): boolean;

  /**
   * This function sets the default project resolution name.
   * @param {string} name Set the current resolution preset name to this value.
   * @returns {boolean}
   */
  public setDefaultResolutionName(name: string): boolean;

  /**
   * This function set the default frame rate of the project. The frame rate is expressed as frames per
   * second. Typical value is 12, 24 or 30.
   * @param {double} frameRate The new frame rate.
   * @returns {boolean}
   */
  public setFrameRate(frameRate: double): boolean;

  /**
   * Either inserts a new metadata object or sets the value of an existing metadata object.
   * If a metadata object already exist with the given name and type properties, then sets its value with
   * the given value property. Otherwise, inserts a new metadata object with the given name, type(default
   * is string), creator(default is executable), version(default is 1.0) and values properties. Here is
   * an example of a metadata object:
   * Supported values for type are: string, int, double, bool.
   * @param {QScriptValue} meta A metadata object.
   * @returns {void}
   * @example
   * {
   *     "name": "myMetadata",
   *     "type": "string",
   *     "creator": "Storyboard Pro",
   *     "version": "1.0",
   *     "value": "foo"
   * }
   */
  public setMetadata(meta: QScriptValue): void;

  /**
   * Sets the number of X, Y, and Z units in the grid.
   * @param {int} x The X value of the grid.
   * @param {int} y The Y value of the grid.
   * @param {int} z The Z value of the grid.
   * @returns {boolean}
   */
  public setNumberOfUnits(x: int, y: int, z: int): boolean;

  /**
   * Sets the aspect ratio of the project. The project's final aspect ratio will be: X *
   * numberOfUnitsX()/Y * numberOfUnitsY().
   * @param {double} x The X value of the new aspect ratio.
   * @param {double} y The Y value of the new aspect ratio.
   * @returns {boolean}
   */
  public setUnitsAspectRatio(x: double, y: double): boolean;

  /**
   * Undoes the last n operations. If n is not specified, it will be 1.
   * @param {int} [depth=1] The number of operations to undo.
   * @returns {void}
   */
  public undo(depth?: int): void;

  /**
   * Returns the X value of the aspect ratio of the cells in the grid.
   * @returns {double}
   */
  public unitsAspectRatioX(): double;

  /**
   * Returns the Y value of the aspect ratio of the cells in the grid.
   * @returns {double}
   */
  public unitsAspectRatioY(): double;
}

/**
 * The scene interface has been deprecated in Storyboard Pro. Project interface should be used instead.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classscene.html}
 */
declare class scene extends SCR_BaseInterface {
  /**
   * Save the current project to the specified folder or sbpz file.
   * Save the current project to the specified folder or sbpz file. The current project is updated to use
   * that folder or sbpz file. Any error or message is reported using the standard error logger, user
   * will see message popup. Cannot be use in batch mode.
   * @param {string} pathname New folder of the project (ie: /Users/a_user/Documents/my_save_as_project ) or new sbpz file /Users/a_user/Documents/my_save_as_project.sbpz )
   * @returns {boolean}
   */
  public saveAs(pathname: string): boolean;
}

/**
 * The System JavaScript global object. Call system specific command directly.
 * SCR_SystemInterface allows access to environment variables and printing to the command prompt or
 * Terminal.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classSystem.html}
 * @example
 * System.println("This text is printed in the command prompt or the Terminal");
 * var tempFolder = System.getenv("TEMP");
 */
declare class System extends SCR_BaseInterface {
  /**
   * Gets the value of an environment variable or the operating system.
   * @param {string} environmentVariable The desired environment variable.
   * @returns {string}
   */
  public getenv(environmentVariable: string): string;

  /**
   * Prints a string to Terminal (Unix) or Command Prompt (Windows).
   * @param {string} text The text to print to the console.
   * @returns {void}
   */
  public println(text: string): void;

  /**
   * Processes the next event in a while loop. It can not be accessed from the scriptModule, neither from
   * writeModule.
   * @returns {void}
   */
  public processOneEvent(): void;
}

/**
 * The TimelineMarker JavaScript global object. Remove or edit timeline markers.
 * This interface is used to access the functionalities of the Timeline Markers such as
 * create/remove/edit markers.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classTimelineMarker.html}
 * @example
 * function addMarkerAtFrame(int frame) {
 *     var mLength = 0;
 *     var mColor = "red";
 *     var marker = {
 *         frame: 1,
 *         length: mLength,
 *         color: mColor
 *     };
 *     TimelineMarker.createMarker(marker);
 * }
 */
declare class TimelineMarker extends SCR_BaseInterface {
  /**
* Creates a marker.
* @param {QScriptValue} marker - The marker to create. A marker object has the following properties:
Property  Type  Description
frame  int  The number of the frame.
length  int  (Optional) The length of the marker.
color  int or String  (Optional) The colour of the marker. Can be an integer RGBA value or a standard W3C colour keyword name in a string.
name  String  (Optional) Name for the marker
notes  String  (Optional) Notes for the marker
* @returns {QScriptValue}
*/
  public createMarker(marker: {
    /**
     * The number of the frame.
     */
    frame?: int;
    /**
     * (Optional) The length of the marker.
     */
    length?: int;
    /**
     * (Optional) The colour of the marker. Can be an integer RGBA value or a standard W3C colour keyword name in a string.
     */
    color?: int | string;
    /**
     * (Optional) Name for the marker
     */
    name?: string;
    /**
     * (Optional) Notes for the marker
     */
    notes?: string;
  }): QScriptValue;

  /**
   * Delete the marker.
   * @param {QScriptValue} marker - The marker to delete.
   * @returns {boolean}
   */
  public deleteMarker(marker: QScriptValue): boolean;

  /**
   * Returns all the markers in the current Timeline.
   * @returns {QScriptValue}
   */
  public getAllMarkers(): QScriptValue;

  /**
   * Return a markers in the current Timeline that overlap the given frame.
   * @param {int} atFrame
   * @returns {QScriptValue}
   */
  public getFirstMarkerAt(atFrame: int): QScriptValue;

  /**
   * Returns all the markers in the current Timeline.
   * @returns {QScriptValue}
   */
  public getMarkers(): QScriptValue;

  /**
   * Return all the markers in the current Timeline that overlap the given frame.
   * @param {int} atFrame
   * @returns {QScriptValue}
   */
  public getMarkersAtFrame(atFrame: int): QScriptValue;

  /**
   * Modifies a marker with marker object.
   * @param {QScriptValue} marker - The marker object to replace the marker with.
   * @returns {QScriptValue}
   */
  public setMarker(marker: QScriptValue): QScriptValue;
}

/**
 * The UiLoader JavaScript global object allows the user to load pre-defined Qt forms that define Qt
 * widgets (generally built within Qt Designer).
 * This allows users to build complex dialogs, using all of the pre-defined widgets that Qt4.8
 * supports. See Qt documentation for further details: http://qt-project.org/doc/qt-4.8.
 * This is an example of how to build a dialog using a predefined Qt designer file ( *.ui ) All widgets
 * may be addressed directly, but through nested names. That is, if you have a checkbox inside a tab
 * inside a dialog, you should address the widget as dialog.tab.checkbox Once you've figured out its
 * name, you are allowed to modify all of its properties, plus you have access to both its signals and
 * slots ( as well as its inherited properties, signals and slots )
 * This example and the predefined form are part of the installation, so it can be run in the software
 * to see what it does. Look for lightTableExampleUsingPredefinedUI. It will display a non-modal widget
 * that allows the adjustment of the light table settings in the camera view. Please refer to Qt
 * documentation for the list of accessible widget properties.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classUiloader.html}
 * @example
 * function lightTableExampleUsingPredefineUI() {
 *     this.opacityChanged = function(digitValue) {
 *         this.ui.LightTableOpacityValueLabel.text = digitValue / 256.0;
 *         preferences.setDouble("DRAWING_LIGHTTABLE_OPACITY", digitValue / 256.0);
 *     }
 *
 *     this.washChanged = function(digitValue) {
 *         this.ui.LightTableWashValueLabel.text = digitValue / 256.0;
 *         preferences.setDouble("DRAWING_LIGHTTABLE_WASH", digitValue / 256.0);
 *     }
 *
 *     // Load the ui file (created in Qt designer)
 *     localPath = specialFolders.resource;
 *     System.println(localPath);
 *     localPath += "/forms/lighttable.ui";
 *
 *     //System.println( localPath );
 *     this.ui = UiLoader.load(localPath);
 *     // Show the dialog in non-modal fashion.
 *     ui.show();
 *
 *     // Modify any properties that seem interesting
 *     this.ui.windowTitle = "Light Table Values";
 *     this.ui.LightTableWashValueLabel.text = preferences.getDouble("DRAWING_LIGHTTABLE_OPACITY", 0);
 *     this.ui.LightTableOpacityValueLabel.text = preferences.getDouble("DRAWING_LIGHTTABLE_WASH", 0);
 *     this.ui.LightTableWashLabel.text = "LightTable Wash";
 *     this.ui.LightTableOpacityLabel.text = "LightTable Opacity";
 *     this.ui.LightTableWashSlider.minimun = 0;
 *     this.ui.LightTableWashSlider.maximum = 256;
 *     this.ui.LightTableWashSlider.value = preferences.getDouble("DRAWING_LIGHTTABLE_WASH", 0) * 256;
 *     this.ui.LightTableOpacitySlider.minimun = 0;
 *     this.ui.LightTableOpacitySlider.maximum = 256;
 *     this.ui.LightTableOpacitySlider.value = preferences.getDouble("DRAWING_LIGHTTABLE_OPACITY", 0) * 256;
 *
 *     // Connect the sliders signals to a script defined local slot
 *     ui.LightTableOpacitySlider.valueChanged.connect(this, this.opacityChanged);
 *     ui.LightTableWashSlider.valueChanged.connect(this, this.washChanged);
 * }
 */
declare class Uiloader extends SCR_BaseInterface {
  /**
   * Takes a DPI-independent pixel dimension (100% DPI scaling on an HD screen) and scales it to the
   * current DPI setting.
   * @param {QScriptContext} context
   * @param {QScriptEngine} engine
   * @returns {QScriptValue}
   */
  public dpiScale(context: QScriptContext, engine: QScriptEngine): QScriptValue;

  /**
   * Equivalent of QAppliction::exec for those scripts that wish to run their loaded UI as a separate
   * app.
   * @param {QScriptContext} context
   * @param {QScriptEngine} engine
   * @returns {QScriptValue}
   */
  public exec(context: QScriptContext, engine: QScriptEngine): QScriptValue;

  /**
   * Takes a path to a predefined Qt widget form and loads that form.
   * @param {QScriptContext} context
   * @param {QScriptEngine} engine
   * @returns {QScriptValue}
   */
  public load(context: QScriptContext, engine: QScriptEngine): QScriptValue;

  /**
   * @param {QScriptContext} context
   * @param {QScriptEngine} engine
   * @returns {QScriptValue}
   */
  public setSvgIcon(
    context: QScriptContext,
    engine: QScriptEngine
  ): QScriptValue;
}

/**
 * The View functions provide information about the contents of selected View windows.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classview.html}
 * @example
 * function viewScript() {
 *     var myView = view.currentView();
 *     System.println(view.type(myView));
 * }
 */
declare class view extends SCR_BaseInterface {
  /**
   * Returns the drawing tool manager.
   * If no argument is passed, returns the drawing tool manager from the current view.
   * @param {string} [viewName=""] The name of the view to get the drawing tool manager from.
   * @returns {QObject}
   */
  public currentToolManager(viewName?: string): QObject;

  /**
   * returns a unique identifier for the current, active View.
   * @returns {string}
   */
  public currentView(): string;

  /**
   * forces a refresh of the drawing and scene planning views.
   * @returns {void}
   */
  public refreshViews(): void;

  /**
   * returns a string that indicates what type of View the currentView is.
   * @param {string} viewName The current view value, as returned by the currentView function.
   * @returns {ColumnType}
   */
  public type(viewName: string): ColumnType;

  /**
   * Returns a list of available views of the given type.
   * @param {string} [viewType=""] The type of view to get the list of available views for.
   * @returns {StringList}
   */
  public viewList(viewType?: string): StringList;

  /**
   * Returns the position of the top left corner of the given view.
   * The point (0,0) is the top left corner of the main display.
   * @param {string} viewName The name of the view to get the position of.
   * @returns {QPoint}
   */
  public viewPosition(viewName: string): QPoint;
}

/**
 * The CheckBox JavaScript class. A simplified version of the CheckBox Qt widget.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classCheckBox.html}
 * @example
 * var myDialog = new Dialog();
 * myDialog.title = "CheckBox Example";
 *
 * var userInput = new CheckBox();
 * userInput.text = "Is this guide helpful?"
 *
 * myDialog.add(userInput);
 *
 * if (myDialog.exec()) {
 *     if (userInput.checked);
 *     MessageLog.trace("The guide is helpful!");
 * }
 */
declare class CheckBox extends SCRIPT_QSWidget {
  /**
   * Toggle whether or not the CheckBox is checked.
   * @returns {boolean}
   */
  checked: boolean;

  /**
   * The text shown alongside the CheckBox.
   * @returns {string}
   */
  text: string;
}

/**
 * The Dialog JavaScript class. A simplified version of the Qt dialog.
 * This class and the associated widget classes are used to build simple dialogs.
 * The widgets you can add to a Dialog are: LineEdit, NumberEdit, TimeEdit, DateEdit, SpinBox,
 * CheckBox, RadioButton, ComboBox, GroupBox, Slider, SCRIPT_QSButton and Label
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classDialog.html}
 * @example
 * function sampleDialog() {
 *     var d = new Dialog();
 *     d.title = "Sample Dialog";
 *
 *     var inputL = new LineEdit;
 *     inputL.label = "Sample Line Edit";
 *     d.add(inputL);
 *
 *     if (d.exec()) {
 *         var sampleText = inputL.text;
 *         MessageLog.trace("The input text is " + sampleText + ".");
 *     }
 * }
 */
declare class Dialog extends SCRIPT_QSWidget {
  /**
   * Adds a widget to the dialog.
   * @param {SCRIPT_QSWidget} widget
   * @returns {void}
   */
  public add(widget: SCRIPT_QSWidget): void;

  /**
   * Adds spacers to the dialog layout.
   * @param {int} space
   * @returns {void}
   * @example
   * myDialog.addSpace(25);
   */
  public addSpace(space: int): void;

  /**
   * Run the dialog in modal mode. Pressing ok accepts the dialog input. Pressing cancel cancels the
   * dialog.
   * @returns {boolean}
   */
  public exec(): boolean;

  /**
   * Add a new column to the dialog.
   * @returns {void}
   * @example
   * myDialog.newColumn();
   */
  public newColumn(): void;

  /**
   * Adds a new tab to the dialog.
   * @param {string} label
   * @returns {void}
   * @example
   * myDialog.newTab("This is your tab label");
   */
  public newTab(label: string): void;

  /**
   * The label of the Cancel button.
   * @returns {string}
   * @example
   * myDialog.cancelButtonText = "Click here to reject";
   */
  cancelButtonText: string;

  /**
   * The title of the dialog. (Legacy, but still supported)
   * @returns {string}
   * @example
   * myDialog.caption = "My First Dialog";
   */
  caption: string;

  /**
   * The label of the OK button.
   * @returns {string}
   * @example
   * myDialog.okButtonText = "Click here to accept";
   */
  okButtonText: string;

  /**
   * The title of the dialog.
   * @returns {string}
   * @example
   * myDialog.title = "My First Dialog";
   */
  title: string;

  /**
   * The width of the dialog in pixels.
   * @returns {int}
   * @example
   * myDialog.width = 500;
   */
  width: int;
}

/**
 * The GroupBox JavaScript class. A simplified version of the GroupBox Qt widget.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classGroupBox.html}
 * @example
 * var groupBox = new GroupBox();
 * groupBox.title = "Group One";
 * myDialog.add(groupBox);
 */
declare class GroupBox extends SCRIPT_QSWidget {
  /**
   * Adds a widget to the groupBox.
   * @param {SCRIPT_QSWidget} widget
   * @returns {void}
   */
  public add(widget: SCRIPT_QSWidget): void;

  /**
   * Adds a spacer to the groupbox.
   * @param {int} space
   * @returns {void}
   * @example
   * groupBox.addSpace(15);
   */
  public addSpace(space: int): void;

  /**
   * Clears all the widgets in the group box.
   * @returns {void}
   * @example
   * groupBox.clear;
   */
  public clear(): void;

  /**
   * Creates a newColumn in the groupbox. It will be used by all subsequent add operations.
   * @returns {void}
   * @example
   * groupBox.newColumn();
   */
  public newColumn(): void;

  /**
   * Title of groupBox.
   * @returns {string}
   */
  title: string;
}

/**
 * The Label JavaScript class. A simplified version of the Label Qt widget.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classLabel.html}
 * @example
 * var bodyText = new Label();
 * bodyText.text = "This is will be displayed in the body of the dialog.";
 * myDialog.add(bodyText);
 */
declare class Label extends SCRIPT_QSWidget {
  /**
   * Text shown on the label.
   * @returns {string}
   */
  text: string;
}

/**
 * The RadioButton JavaScript class. A simplified version of the RadioButton Qt widget.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classRadioButton.html}
 * @example
 * var myDialog = new Dialog();
 * myDialog.title = "RadioButton Example";
 *
 * var optionOne = new RadioButton();
 * optionOne.text = "Pick me!";
 * var optionTwo = new RadioButton();
 * optionTwo.text = "No, pick me!";
 *
 * myDialog.add(optionOne);
 * myDialog.newColumn();
 * myDialog.add(optionTwo);
 *
 * if (myDialog.exec()) {
 *     if (optionOne.checked)
 *         MessageLog.trace("You picked the first option.");
 *     else if (optionTwo.checked)
 *         MessageLog.trace("You picked the second option.");
 *     else
 *         MessageLog.trace("Neither option was selected.");
 * }
 */
declare class RadioButton extends SCRIPT_QSWidget {
  /**
   * Toggle whether or not the RadioButton is checked.
   * @returns {boolean}
   */
  checked: boolean;

  /**
   * The text for the RadioButton label.
   * @returns {string}
   */
  text: string;
}

/**
 * The Button JavaScript class. A simplified Button Qt widget.
 * This example creates a button with the label "Set Colour" that will call a function that sets the
 * colour of something whenever the button is pressed.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classSCRIPT__QSButton.html}
 * @example
 * var setter = new Button();
 * setter.label = "Set Colour";
 * setter.callback = "colourSetter";
 */
declare class SCRIPT_QSButton extends SCRIPT_QSWidget {
  /**
   * Use this to assign the name of another function. This function will be triggered automatically when
   * the button is pressed.
   * @returns {string}
   */
  callback: string;

  /**
   * Set the text on the button.
   * @returns {string}
   */
  label: string;
}

/**
 * The TextEdit JavaScript class. A simplified version of the TextEdit Qt widget.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classTextEdit.html}
 * @example
 * var myDialog = new Dialog();
 * myDialog.title = "TextEdit Example";
 *
 * var userInput = new TextEdit();
 * userInput.text = "Tell us how you feel about this tutorial."
 * myDialog.add(userInput);
 *
 * if (myDialog.exec()) {
 *     var inputText = userInput.text;
 *     MessageLog.trace(inputText);
 * }
 */
declare class TextEdit extends SCRIPT_QSWidget {
  /**
   * The text string shown in the widget.
   * @returns {string}
   */
  text: string;
}

/**
 * The specialFolders JavaScript global object. Provide the path to application specific paths.
 * By using the SpecialFolders functions, you can retrieve information about the different folders
 * (directories) used by the application. All of the functions are read-only. They return strings that
 * represent folders in use by the various applications. Depending on the application (e.g. Toon Boom
 * Harmony versus Toon Boom AnimatePro), the same content is stored in a different location.
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classspecialFolders.html}
 * @example
 * var scriptFolder = specialFolders.resource + "/scripts";
 */
declare class specialFolders {
  /**
   * A read-only property containing the folder where the platforms specific applications are stored.
   * Application and Binary folders are different on OS X, but are identical on all other platforms.
   * @returns {string}
   */
  app: string;

  /**
   * This is a read-only property that contains the folder where the platforms specific binaries are
   * stored. Application and Binary folders are different on OS X. They are identical on all other
   * platforms.
   * @returns {string}
   */
  bin: string;

  /**
   * This is a read-only property that contains the folder where the platforms specific 32-bit binaries
   * are stored.
   * @returns {string}
   */
  bin32: string;

  /**
   * read-only property that contains the folder where application configuration files are stored.
   * Normally, this is the /etc folder.
   * @returns {string}
   */
  config: string;

  /**
   * This is a read-only property that contains the database folder.
   * @returns {string}
   */
  database: string;

  /**
   * read-only property that indicates where the [install]/etc folder is.
   * @returns {string}
   */
  etc: string;

  /**
   * This is a read-only property that contains the folder where the html help folder is.
   * @returns {string}
   */
  htmlHelp: string;

  /**
   * read-only property that contains the folder where the language files are stored.
   * @returns {string}
   */
  lang: string;

  /**
   * Location where the plugins that were designed for the previous SDK are stored. Replaces the plugins
   * property.
   * @returns {string}
   */
  legacyPlugins: string;

  /**
   * This is a read-only property that contains the folder where the platforms specific libraries are
   * stored.
   * @returns {string}
   */
  library: string;

  /**
   * read-only property that contains the platform specific folder.
   * @returns {string}
   */
  platform: string;

  /**
   * Location where the plugins that comply with the current SDK are stored.
   * @returns {string}
   */
  plugins: string;

  /**
   * read-only property that contains where the resources files are stored.
   * @returns {string}
   */
  resource: string;

  /**
   * read-only property for the root installation folder
   * @returns {string}
   */
  root: string;

  /**
   * This is a read-only property that contains where the application will create its temporary files.
   * @returns {string}
   */
  temp: string;

  /**
   * This is a read-only property that contains the folder where templates are stored.
   * @returns {string}
   */
  templateLibrary: string;

  /**
   * This is a read-only property that contains the folder where the user configuration is stored.
   * @returns {string}
   */
  userConfig: string;

  /**
   * This is a read-only property that contains the folder where the user layouts are stored.
   * @returns {string}
   */
  userLayouts: string;

  /**
   * This is a read-only property that contains the folder where the user scripts are stored.
   * @returns {string}
   */
  userScripts: string;
}

/**
 *
 * {@link https://docs.toonboom.com/help/storyboard-pro-22/storyboard/scripting/reference/classWID__StandardLocaleDoubleValidator.html}
 */
declare class WID_StandardLocaleDoubleValidator {}
