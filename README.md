This repository contains type defintion files for Toon Boom Harmony.

I have tried to preserve the defintions as they are described in the API documentation, including types that do not exist in Javascript.

Some modifications were made where reality differed from documentation.

To use these types, you must specify a reference type in your Typescript document.

```typescript
/// <reference types="tba-types/Harmony/15"/>
```

It is important to omit `DOM` from your `lib` section of your `tsconfig.json` file.  Otherwise, there will be a naming conflict between Toon Boom's `File` object and the DOM `File` object.

For example:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5"],
    ...
  }
}
```