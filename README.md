# \<lay-them>
webcomponents to easily create layouts for your app, by arranging your html elements in rows, column and stack, in a declarative fashion.

## Usage
```html
<script type="module">
  import 'lay-them/lay-them.js';
</script>
<!--ma=MainAxis and ca=crossAxis, for column ma is along its height and ca is along its width, for row ma is along its width and ca is along its height-->
<!--places the item at center-->
<lay-them ma="center" ca="center">
  <div>something1</div>
</lay-them>

<!--places the items in row-->
<lay-them in="row" ma="center" ca="stretch">
  <div>something1</div>
  <div>something2</div>
  <div>something3</div>
</lay-them>

<!--places the items in column-->
<lay-them in="column" ma="center" ca="stretch">
  <div>something1</div>
  <div>something2</div>
  <div>something3</div>
</lay-them>

<!--places items in stack-->
<lay-them in="stack">
  <div>something1</div>
  <div style="position: relative; right : 100px;">something2</div>
  <div>something3</div>
</lay-them>

<!--Default is column-->
<lay-them>
  <div>something1</div>
  <div>something2</div>
  <div>something3</div>
</lay-them>

```
## Installation
```bash
npm i lay-them
```

## Testing with Web Test Runner
To run the suite of Web Test Runner tests, run
```bash
npm run test
```

To run the tests in watch mode (for <abbr title="test driven development">TDD</abbr>, for example), run

```bash
npm run test:watch
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`
