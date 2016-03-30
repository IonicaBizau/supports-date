# supports-date [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/supports-date.svg)](https://www.npmjs.com/package/supports-date) [![Downloads](https://img.shields.io/npm/dt/supports-date.svg)](https://www.npmjs.com/package/supports-date) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Check if your browser has support for date inputs.

[![supports-date](http://i.imgur.com/DVUS6VF.jpg)](#)

## :cloud: Installation

Check out the [`dist`](/dist) directory to download the needed files and include them on your page.

## :clipboard: Example

```js
const supportsDate = require("supports-date");

console.log(supportsDate());
// => true
```

## :memo: Documentation

### `supportsDate()`
Checks if the date input is supported by the browser.

#### Return
- **Boolean** `true` if the date input is supported. `false` otherwise.

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md