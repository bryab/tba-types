declare namespace QMetaMethod {
  /**
   * This enum describes the access level of a method, following the conventions used in C++.
   */
  enum Access {
    Protected,
    Public
  }

  enum Attributes {
    Cloned,
    Scriptable
  }

  enum MethodType {
    Signal,
    Slot,
    Constructor
  }
}

declare class QMetaMethod {
  /**
   * Returns the access specification of this method (private, protected, or public).
   */
  public access(): QMetaMethod.Access;

  public attributes(): int;

  public enclosingMetaObject(): QMetaObject;

  /**
   * Invokes this method on the object object.
   */
  public invoke(object: QObject, connectionType: Qt.ConnectionType, returnValue: QGenericReturnArgument, val0: QGenericArgument, val1: QGenericArgument, val2: QGenericArgument, val3: QGenericArgument, val4: QGenericArgument, val5: QGenericArgument, val6: QGenericArgument, val7: QGenericArgument, val8: QGenericArgument, val9: QGenericArgument): boolean;

  public invoke(object: QObject, returnValue: QGenericReturnArgument, val0: QGenericArgument, val1: QGenericArgument, val2: QGenericArgument, val3: QGenericArgument, val4: QGenericArgument, val5: QGenericArgument, val6: QGenericArgument, val7: QGenericArgument, val8: QGenericArgument, val9: QGenericArgument): boolean;

  public invoke(object: QObject, connectionType: Qt.ConnectionType, val0: QGenericArgument, val1: QGenericArgument, val2: QGenericArgument, val3: QGenericArgument, val4: QGenericArgument, val5: QGenericArgument, val6: QGenericArgument, val7: QGenericArgument, val8: QGenericArgument, val9: QGenericArgument): boolean;

  public invoke(object: QObject, val0: QGenericArgument, val1: QGenericArgument, val2: QGenericArgument, val3: QGenericArgument, val4: QGenericArgument, val5: QGenericArgument, val6: QGenericArgument, val7: QGenericArgument, val8: QGenericArgument, val9: QGenericArgument): boolean;

  /**
   * Returns this method's index.
   */
  public methodIndex(): int;

  /**
   * Returns the type of this method (signal, slot, or method).
   */
  public methodType(): QMetaMethod.MethodType;

  /**
   * Returns a list of parameter names.
   */
  public parameterNames(): QList<QByteArray>;

  /**
   * Returns a list of parameter types.
   */
  public parameterTypes(): QList<QByteArray>;

  constructor();

  /**
   * Returns the method revision if one was specified by Q_REVISION, otherwise returns 0.
   */
  public revision(): int;

  /**
   * Returns the signature of this method (e.g., setValue(double)).
   */
  public signature(): char;

  /**
   * Returns the tag associated with this method.
   */
  public tag(): char;

  /**
   * Returns the return type of this method, or an empty string if the return type is void.
   */
  public typeName(): char;

  handle: uint;

  mobj: QMetaObject;
}
