# Loggly Light

## a lightweight loggly logger 🌳

A lightweight (~0.5 kb minified) lib to send logs to Loggly. Use it to report
errors, track stats, whatever it is you do.

## Basic example

Install in your project with `npm i loggly-light`. Then:

```
var logger = new Loggly({ customerToken: "abc123" });
logger.log("my loggly tag", {hello: 'world'});
```

## Promise-based interface

You can use the promise-based interface to verify the log made it/catch errors.
This is useful if you want to send the log before an action takes place (eg.
page navigation).

```
logger.log("my loggly tag", {hello: 'world'})
  .then(() => {})
  .catch(() => {});
```

## Example with global Loggly token

You can also store your customer token on `window._loggly_customer_token` for a
config-free init.

```
var logger = new Loggly();
logger.log("my loggly tag", {hello: 'world'});
```

This is useful if you're creating lots of small projects but want to keep your
Loggly customer token centralised.

## Required polyfills

This library uses ES5 syntax so doesn't need to be transpiled, but if you're
using it in older browsers you may need to polyfill
[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
and [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
