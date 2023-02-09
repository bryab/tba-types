This is an example of how to setup your project so that Visual Studio Code will give you Intellisense for your Toon Boom Javascript code, without using Typescript.

Install tba-types:

`npm install github:bryab/tba-types`

Create a file called `jsconfig.json` with `checkJs` set to `true`:

```json
{
  "compilerOptions": {
    "checkJs": true
  }
}
```
