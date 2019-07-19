/**
 * Seems to be a special command with this syntax:
 * [FUNC_NAME] in [FILENAME_RELATIVE_TO_PACKAGE]
 * e.g.
 * launchTest in ./configure.js
 */
declare type ActionDef = string;

declare class ScriptToolbarDef {
  constructor(options: { text: string; customizable: "true" | "false" });
  addButton(options: { text: string; action: ActionDef; icon?: string });
}

declare class ScriptedView {}

declare module ScriptManager {
  function addToolbar(toolbar: ScriptToolbarDef);
  function addView(options: { id: string; text: string; action: ActionDef });
  function getView(id: string): ScriptedView;
  function loadViewUI(scriptedView: ScriptedView, filename: string);
  function addMenu(options: { targetMenuId: string; id: string; text: string });
  function addMenuItem(options: { targetMenuId: string; id: string; text: string; action: ActionDef });
}

/**
 * configure.js signature
 */
declare interface ScriptConfigure {
  (packageFolder: string, packageName: string): void;
}
