## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url]

> Get the number of seconds/milliseconds in a day.

## Install
```
npm i --save day-seconds
npm test
```


## API
> For more use-cases see the [tests](./test.js)

### [daySeconds](./index.js#L35)
> Get the number of seconds/milliseconds in a day.

- `[bool]` **{Boolean}** when `true`, returns seconds, otherwise milliseconds
- `return` **{Number}**

**Example:**

```js
var daySeconds = require('day-seconds');

daySeconds(false);
//=> 86400000

daySeconds();
//=> 86400000

daySeconds('str');
//=> 86400000

daySeconds([1,2,3]);
//=> 86400000

daySeconds(/regex/gm);
//=> 86400000

daySeconds({});
//=> 86400000

daySeconds(true);
//=> 86400
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014-2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/day-seconds
[npmjs-img]: https://img.shields.io/npm/v/day-seconds.svg?style=flat&label=day-seconds

[coveralls-url]: https://coveralls.io/r/datetime/day-seconds?branch=master
[coveralls-img]: https://img.shields.io/coveralls/datetime/day-seconds.svg?style=flat

[license-url]: https://github.com/datetime/day-seconds/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/datetime/day-seconds
[travis-img]: https://img.shields.io/travis/datetime/day-seconds.svg?style=flat

[daviddm-url]: https://david-dm.org/datetime/day-seconds
[daviddm-img]: https://img.shields.io/david/datetime/day-seconds.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/datetime/day-seconds/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), March 02, 2015_