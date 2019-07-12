declare namespace QEventLoop {
  /**
   * This enum controls the types of events processed by the processEvents() functions.
   */
  enum ProcessEventsFlag {
    AllEvents,
    ExcludeUserInputEvents,
    ExcludeSocketNotifiers,
    WaitForMoreEvents,
    DeferredDeletion,
    EventLoopExec,
    DialogExec
  }

  type ProcessEventsFlags = ProcessEventsFlag;
}

declare class QEventLoop {
  /**
   * Tells the event loop to exit normally.
   */
  public quit(): void;

  /**
   * Enters the main event loop and waits until exit() is called.
   */
  public exec(flags?: QEventLoop.ProcessEventsFlags): int;

  /**
   * Tells the event loop to exit with a return code.
   */
  public exit(returnCode: int): void;

  /**
   * Returns true if the event loop is running; otherwise returns false.
   */
  public isRunning(): boolean;

  /**
   * Processes pending events that match flags until there are no more events to process.
   */
  public processEvents(flags: QEventLoop.ProcessEventsFlags): boolean;

  /**
   * Process pending events that match flags for a maximum of maxTime milliseconds, or until there are no more events to process, whichever is shorter.
   */
  public processEvents(flags: QEventLoop.ProcessEventsFlags, maximumTime: int): void;

  /**
   * Constructs an event loop object with the given parent.
   */
  constructor(parent: QObject);

  /**
   * Wakes up the event loop.
   */
  public wakeUp(): void;
}
