This repository contains type definition files for Toon Boom Harmony and Storyboard Pro.

These definitions were parsed from the official API documentation, but have been modified where the documentation was lacking.

To use these types, you must specify a reference type in your Typescript document.

```typescript
/// <reference types="tba-types/Harmony/15"/>
```

```typescript
/// <reference types="tba-types/StoryboardPro/5"/>
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