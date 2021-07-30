(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  /*****************************************************************
                    表单校验工具类  (qc)       
  *****************************************************************/
  var regexs = {
    // 匹配 max_length(12) => ["max_length",12]
    rule: /^(.+?)\((.+)\)$/,
    // 数字
    numericRegex: /^[0-9]+$/,

    /**
    * @descrition:邮箱规则
    * 1.邮箱以a-z、A-Z、0-9开头，最小长度为1.
    * 2.如果左侧部分包含-、_、.则这些特殊符号的前面必须包一位数字或字母。
    * 3.@符号是必填项
    * 4.右则部分可分为两部分，第一部分为邮件提供商域名地址，第二部分为域名后缀，现已知的最短为2位。最长的为6为。
    * 5.邮件提供商域可以包含特殊字符-、_、.
    */
    email: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,

    /**
     * [ip ipv4、ipv6]
     * "192.168.0.0"
     * "192.168.2.3.1.1"
     * "235.168.2.1"
     * "192.168.254.10"
     * "192.168.254.10.1.1"
     */
    ip: /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])((\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}|(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){5})$/,

    /**
    * @descrition:判断输入的参数是否是个合格的固定电话号码。
    * 待验证的固定电话号码。
    * 国家代码(2到3位)-区号(2到3位)-电话号码(7到8位)-分机号(3位)
    **/
    fax: /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/,

    /**
    *@descrition:手机号码段规则
    * 13段：130、131、132、133、134、135、136、137、138、139
    * 14段：145、147
    * 15段：150、151、152、153、155、156、157、158、159
    * 17段：170、176、177、178
    * 18段：180、181、182、183、184、185、186、187、188、189
    * 国际码 如：中国(+86)
    */
    phone: /^((\+?[0-9]{1,4})|(\(\+86\)))?(13[0-9]|14[57]|15[012356789]|17[03678]|18[0-9])\d{8}$/,

    /**
     * @descrition 匹配 URL
     */
    url: /[a-zA-z]+:\/\/[^\s]/,
    money: /^(0|[1-9]\d*)(\.\d+)?$/,
    english: /^[A-Za-z]+$/,
    chinese: /^[\u0391-\uFFE5]+$/,
    percent: /^(?:[1-9][0-9]?|100)(?:\.[0-9]{1,2})?$/,
    idcard: /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  };

  function backVal(field) {
    return typeof field === 'string' ? field : field.value;
  }

  var is_empty = function is_empty(field) {
    if (field == "" || field == null || field == "undefined") {
      return true;
    } else {
      return false;
    }
  };

  var is_empty_obj = function is_empty_obj(field) {
    for (var key in field) {
      return false;
    }

    return true;
  };

  var is_email = function is_email(field) {
    return regexs.email.test(backVal(field));
  };

  var is_ip = function is_ip(field) {
    return regexs.ip.test(backVal(field));
  };

  var is_fax = function is_fax(field) {
    return regexs.fax.test(backVal(field));
  };

  var is_mobile = function is_mobile(field) {
    return regexs.fax.test(backVal(field));
  };

  var is_phone = function is_phone(field) {
    return regexs.phone.test(backVal(field));
  };

  var is_url = function is_url(field) {
    return regexs.url.test(backVal(field));
  };

  var is_money = function is_money(field) {
    return regexs.money.test(backVal(field));
  };

  var is_english = function is_english(field) {
    return regexs.english.test(backVal(field));
  };

  var is_chinese = function is_chinese(field) {
    return regexs.chinese.test(backVal(field));
  };

  var is_percent = function is_percent(field) {
    return regexs.percent.test(backVal(field));
  };

  var is_idcard = function is_idcard(field) {
    return regexs.idcard.test(backVal(field));
  }; //test的时候使用commonjs规范，module.exports = { ...  }


  var _default = {
    // 验证字符串是否为空
    is_empty: is_empty,
    // 验证对象时候为空
    is_empty_obj: is_empty_obj,
    // 验证身份证
    is_idcard: is_idcard,
    // 验证邮箱
    is_email: is_email,
    // 验证合法 ip 地址
    is_ip: is_ip,
    // 验证传真
    is_fax: is_fax,
    // 验证座机
    is_mobile: is_mobile,
    // 验证手机
    is_phone: is_phone,
    // 验证URL
    is_url: is_url,
    // 验证money
    is_money: is_money,
    // 验证英文
    is_english: is_english,
    // 验证中文
    is_chinese: is_chinese,
    // 验证百分比
    is_percent: is_percent
  };
  _exports["default"] = _default;
});