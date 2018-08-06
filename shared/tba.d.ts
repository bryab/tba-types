/**
 * The Toon Boom File object
 */
declare class File {
  
    /**
    * Open the file with specific access mode.
    */
    open(accessMode: int): void;
  
    /**
    * Close the file.
    */
    close(): void;
  
    /**
    * Remove the file.
    */
    remove(): void;
  
    /**
    * Read the next char of the file.
    */
    readByte(): int;
  
    /**
    * Read all the file.
    */
    read(): string;
  
    /**
    * Read one line of the file.
    */
    readLine(): string;
  
    /**
    * Read each line of the file.
    */
    readLines(): StringList;
  
    /**
    * Write a char in the file.
    */
    writeByte(byte: int): void;
  
    /**
    * Write a string in the file.
    */
    write(data: string, length?: int): void;
  
    /**
    * Write a string in the file and go next line.
    */
    writeLine(data: string): void;
  
    constructor(file: string);
  
    /**
    * file name
    */
    name: string;
  
    /**
    * file path
    */
    path: string;
  
    /**
    * file name
    */
    fullName: string;
  
    baseName: string;
  
    /**
    * file extension
    */
    extension: string;
  
    symLink: string;
  
    /**
    * file exist
    */
    exists: boolean;
  
    /**
    * file readable flag
    */
    readable: boolean;
  
    /**
    * file writable flag
    */
    writable: boolean;
  
    /**
    * file executable flag
    */
    executable: boolean;
  
    /**
    * file hidden flag
    */
    hidden: boolean;
  
    /**
    * file reach end
    */
    eof: boolean;
  
    /**
    * Date when the file was created.
    */
    created: QDateTime;
  
    /**
    * Date when the file was modified.
    */
    lastModified: QDateTime;
  
    /**
    * date when the file was readed
    */
    lastRead: QDateTime;
  
    /**
    * Size of he file.
    */
    size: int;
  
  }