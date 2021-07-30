# qcfv

Form validation tool

# install
```
yarn install qcfv
```
# api

  * is_empty        // 验证字符串是否为空
  * is_empty_obj    // 验证对象是否为空
  * is_idcard       // 验证身份证
  * is_email        // 验证邮箱
  * is_ip           // 验证合法 ip 地址
  * is_fax          // 验证传真
  * is_mobile       // 验证座机
  * is_phone        // 验证手机
  * is_url          // 验证URL
  * is_money        // 验证money
  * is_english      // 验证英文
  * is_chinese      // 验证中文
  * is_percent      // 验证百分比


# use

* front
```
import qcfv from "qcfv"
...
let str = "";
console.log("empty",qcfv.is_empty(str));

```

* Node.js
```
const qcfv = require("./umd/index.js").default;
...
let obj = {};
console.log("empty obj",qcfv.is_empty_obj(obj));
```
