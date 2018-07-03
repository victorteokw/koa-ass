# koa-ass

Koa middleware that passes value to context.

## Install

```js
npm install --save koa-ass
```

## Usage

```js
const ass = require('koa-ass');

const config = loadConfig();

app.use(ass({ config }));
```
