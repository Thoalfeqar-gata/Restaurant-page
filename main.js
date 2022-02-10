/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./pexels-pixabay-262978.jpg */ "./src/pexels-pixabay-262978.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\r\n    --dark-brown: #534A40;\r\n    --light-green: #5EE383;\r\n    --primary-light-brown: #F6F8EA; \r\n    --secondary-light-brown: #c08a16;\r\n}\r\n\r\n*\r\n{\r\n    font-family : sans-serif;\r\n}\r\n\r\nbody\r\n{\r\n    margin : 0px;\r\n    height : 100vh;\r\n    background-image : url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size : cover;\r\n    background-attachment : fixed;\r\n}\r\n\r\nmain\r\n{\r\n    display: flex;\r\n    justify-content : center;\r\n}\r\n\r\na\r\n{\r\n    display : inline;\r\n    font-size : bold;\r\n    color : rgb(255, 129, 0);\r\n}\r\n\r\n#content \r\n{\r\n    display : flex;\r\n    flex-direction : column;\r\n    justify-content : space-between;\r\n    height : 100%;\r\n}\r\n/*header*/\r\n.header\r\n{\r\n    display : flex;\r\n    flex-direction : column;\r\n    justify-content : space-between;\r\n    align-items : center;\r\n    padding : 0px 20px 5px;\r\n    background-color : rgba(246, 248, 234, 0.822);\r\n}\r\n\r\n.tabs\r\n{\r\n    margin: 10px;\r\n}\r\n.logo\r\n{\r\n    display : flex;\r\n    align-items : center; \r\n    color : var(--secondary-light-brown);\r\n    font-size : 32px;\r\n    font-weight : 550;\r\n    padding-right : 20px;\r\n}\r\n\r\n\r\n.contactTab, .menuTab, .homeTab\r\n{\r\n   background : none;\r\n   border : none;\r\n   padding : 0; \r\n   color : rgb(219, 118, 36);\r\n   font-size : 28px;\r\n   font-weight : 550;\r\n   border-bottom : 3px solid transparent;\r\n   margin : 0px 40px;\r\n   transition : 200ms;\r\n}\r\n\r\n.homeTab:hover\r\n{\r\n    cursor : pointer;  \r\n    transform : translateY(-15%); \r\n}\r\n\r\n.menuTab:hover\r\n{\r\n    cursor : pointer; \r\n    transform : translateY(-15%);   \r\n}\r\n\r\n.contactTab:hover\r\n{\r\n    cursor : pointer;  \r\n    transform : translateY(-15%);  \r\n}\r\n\r\n.active\r\n{\r\n    border-bottom : 3px solid rgb(219, 118, 36);\r\n}\r\n\r\n\r\n\r\n/*home*/\r\n.home\r\n{\r\n    display : flex;\r\n    justify-content : center;\r\n    align-items : center;\r\n    padding : 15px;\r\n    gap : 10%;\r\n\r\n    flex-grow : 1;\r\n}\r\n\r\n\r\n.welcomeContainer\r\n{\r\n    background-color :rgba(0, 0, 0, 0.767);\r\n    padding : 20px;\r\n    display : flex;\r\n    flex-direction : column;\r\n    align-items : center;\r\n    justify-content : center;\r\n}\r\n.welcomeContainer > h1\r\n{\r\n    font-size : 50px;\r\n    text-align : center;\r\n    color : rgb(255, 129, 0);\r\n}\r\n\r\n.welcomeContainer > p\r\n{\r\n    font-size : 25px;\r\n    text-align : center;\r\n    color : rgb(255, 129, 0);\r\n}\r\n\r\n/* food menu */\r\n\r\n.menu\r\n{\r\n    display : flex;\r\n    align-items : center;\r\n    justify-content : center;\r\n    padding : 15px;\r\n}\r\n.menuCard > img\r\n{\r\n    padding : 10px;\r\n    width : 50%;\r\n    min-width: 100px;\r\n    border-radius : 50%;\r\n}\r\n.menuCard\r\n{\r\n    text-align : center;\r\n    color : rgb(219, 118, 36);\r\n    border : 1px solid black;\r\n    font-size : 20px;\r\n    display : flex;\r\n    flex-direction : column;\r\n    justify-content : center;\r\n    align-items : center;\r\n    background-color : rgba(255, 255, 255, 0.15);\r\n    max-width : 500px;\r\n    padding : 10px;\r\n    transition-duration : 400ms;\r\n}\r\n\r\n.menuCard:hover\r\n{\r\n    color : rgb(255, 115, 0);\r\n    background-color : rgba(255, 255, 255, 0.4);\r\n}\r\n\r\n.menuBackground\r\n{\r\n    padding : 50px;\r\n    background-color : rgba(0, 0, 0, 0.767);\r\n    border : 2px solid black;\r\n    display : flex;\r\n    flex-direction : row;\r\n    flex-wrap: wrap;\r\n    justify-content : center;\r\n    gap : 15px;\r\n    width : 65%;\r\n}\r\n\r\n/* contact tab*/\r\n\r\n.contactBackground\r\n{\r\n    padding : 18px;\r\n    color : rgb(255, 129, 0);\r\n    text-align : center;\r\n    font-size : 32px;\r\n    background-color : rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n/*footer*/\r\n.footer\r\n{\r\n    background-color : var(--dark-brown);\r\n    display : flex;\r\n    padding : 20px;\r\n    font-size : 24px;\r\n    justify-content : center;\r\n    align-items : center;\r\n    color : white;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,sBAAsB;IACtB,8BAA8B;IAC9B,gCAAgC;AACpC;;AAEA;;IAEI,wBAAwB;AAC5B;;AAEA;;IAEI,YAAY;IACZ,cAAc;IACd,0DAAqD;IACrD,uBAAuB;IACvB,6BAA6B;AACjC;;AAEA;;IAEI,aAAa;IACb,wBAAwB;AAC5B;;AAEA;;IAEI,gBAAgB;IAChB,gBAAgB;IAChB,wBAAwB;AAC5B;;AAEA;;IAEI,cAAc;IACd,uBAAuB;IACvB,+BAA+B;IAC/B,aAAa;AACjB;AACA,SAAS;AACT;;IAEI,cAAc;IACd,uBAAuB;IACvB,+BAA+B;IAC/B,oBAAoB;IACpB,sBAAsB;IACtB,6CAA6C;AACjD;;AAEA;;IAEI,YAAY;AAChB;AACA;;IAEI,cAAc;IACd,oBAAoB;IACpB,oCAAoC;IACpC,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;AACxB;;;AAGA;;GAEG,iBAAiB;GACjB,aAAa;GACb,WAAW;GACX,yBAAyB;GACzB,gBAAgB;GAChB,iBAAiB;GACjB,qCAAqC;GACrC,iBAAiB;GACjB,kBAAkB;AACrB;;AAEA;;IAEI,gBAAgB;IAChB,4BAA4B;AAChC;;AAEA;;IAEI,gBAAgB;IAChB,4BAA4B;AAChC;;AAEA;;IAEI,gBAAgB;IAChB,4BAA4B;AAChC;;AAEA;;IAEI,2CAA2C;AAC/C;;;;AAIA,OAAO;AACP;;IAEI,cAAc;IACd,wBAAwB;IACxB,oBAAoB;IACpB,cAAc;IACd,SAAS;;IAET,aAAa;AACjB;;;AAGA;;IAEI,sCAAsC;IACtC,cAAc;IACd,cAAc;IACd,uBAAuB;IACvB,oBAAoB;IACpB,wBAAwB;AAC5B;AACA;;IAEI,gBAAgB;IAChB,mBAAmB;IACnB,wBAAwB;AAC5B;;AAEA;;IAEI,gBAAgB;IAChB,mBAAmB;IACnB,wBAAwB;AAC5B;;AAEA,cAAc;;AAEd;;IAEI,cAAc;IACd,oBAAoB;IACpB,wBAAwB;IACxB,cAAc;AAClB;AACA;;IAEI,cAAc;IACd,WAAW;IACX,gBAAgB;IAChB,mBAAmB;AACvB;AACA;;IAEI,mBAAmB;IACnB,yBAAyB;IACzB,wBAAwB;IACxB,gBAAgB;IAChB,cAAc;IACd,uBAAuB;IACvB,wBAAwB;IACxB,oBAAoB;IACpB,4CAA4C;IAC5C,iBAAiB;IACjB,cAAc;IACd,2BAA2B;AAC/B;;AAEA;;IAEI,wBAAwB;IACxB,2CAA2C;AAC/C;;AAEA;;IAEI,cAAc;IACd,uCAAuC;IACvC,wBAAwB;IACxB,cAAc;IACd,oBAAoB;IACpB,eAAe;IACf,wBAAwB;IACxB,UAAU;IACV,WAAW;AACf;;AAEA,eAAe;;AAEf;;IAEI,cAAc;IACd,wBAAwB;IACxB,mBAAmB;IACnB,gBAAgB;IAChB,qCAAqC;AACzC;;AAEA,SAAS;AACT;;IAEI,oCAAoC;IACpC,cAAc;IACd,cAAc;IACd,gBAAgB;IAChB,wBAAwB;IACxB,oBAAoB;IACpB,aAAa;AACjB","sourcesContent":[":root{\r\n    --dark-brown: #534A40;\r\n    --light-green: #5EE383;\r\n    --primary-light-brown: #F6F8EA; \r\n    --secondary-light-brown: #c08a16;\r\n}\r\n\r\n*\r\n{\r\n    font-family : sans-serif;\r\n}\r\n\r\nbody\r\n{\r\n    margin : 0px;\r\n    height : 100vh;\r\n    background-image : url(\"./pexels-pixabay-262978.jpg\");\r\n    background-size : cover;\r\n    background-attachment : fixed;\r\n}\r\n\r\nmain\r\n{\r\n    display: flex;\r\n    justify-content : center;\r\n}\r\n\r\na\r\n{\r\n    display : inline;\r\n    font-size : bold;\r\n    color : rgb(255, 129, 0);\r\n}\r\n\r\n#content \r\n{\r\n    display : flex;\r\n    flex-direction : column;\r\n    justify-content : space-between;\r\n    height : 100%;\r\n}\r\n/*header*/\r\n.header\r\n{\r\n    display : flex;\r\n    flex-direction : column;\r\n    justify-content : space-between;\r\n    align-items : center;\r\n    padding : 0px 20px 5px;\r\n    background-color : rgba(246, 248, 234, 0.822);\r\n}\r\n\r\n.tabs\r\n{\r\n    margin: 10px;\r\n}\r\n.logo\r\n{\r\n    display : flex;\r\n    align-items : center; \r\n    color : var(--secondary-light-brown);\r\n    font-size : 32px;\r\n    font-weight : 550;\r\n    padding-right : 20px;\r\n}\r\n\r\n\r\n.contactTab, .menuTab, .homeTab\r\n{\r\n   background : none;\r\n   border : none;\r\n   padding : 0; \r\n   color : rgb(219, 118, 36);\r\n   font-size : 28px;\r\n   font-weight : 550;\r\n   border-bottom : 3px solid transparent;\r\n   margin : 0px 40px;\r\n   transition : 200ms;\r\n}\r\n\r\n.homeTab:hover\r\n{\r\n    cursor : pointer;  \r\n    transform : translateY(-15%); \r\n}\r\n\r\n.menuTab:hover\r\n{\r\n    cursor : pointer; \r\n    transform : translateY(-15%);   \r\n}\r\n\r\n.contactTab:hover\r\n{\r\n    cursor : pointer;  \r\n    transform : translateY(-15%);  \r\n}\r\n\r\n.active\r\n{\r\n    border-bottom : 3px solid rgb(219, 118, 36);\r\n}\r\n\r\n\r\n\r\n/*home*/\r\n.home\r\n{\r\n    display : flex;\r\n    justify-content : center;\r\n    align-items : center;\r\n    padding : 15px;\r\n    gap : 10%;\r\n\r\n    flex-grow : 1;\r\n}\r\n\r\n\r\n.welcomeContainer\r\n{\r\n    background-color :rgba(0, 0, 0, 0.767);\r\n    padding : 20px;\r\n    display : flex;\r\n    flex-direction : column;\r\n    align-items : center;\r\n    justify-content : center;\r\n}\r\n.welcomeContainer > h1\r\n{\r\n    font-size : 50px;\r\n    text-align : center;\r\n    color : rgb(255, 129, 0);\r\n}\r\n\r\n.welcomeContainer > p\r\n{\r\n    font-size : 25px;\r\n    text-align : center;\r\n    color : rgb(255, 129, 0);\r\n}\r\n\r\n/* food menu */\r\n\r\n.menu\r\n{\r\n    display : flex;\r\n    align-items : center;\r\n    justify-content : center;\r\n    padding : 15px;\r\n}\r\n.menuCard > img\r\n{\r\n    padding : 10px;\r\n    width : 50%;\r\n    min-width: 100px;\r\n    border-radius : 50%;\r\n}\r\n.menuCard\r\n{\r\n    text-align : center;\r\n    color : rgb(219, 118, 36);\r\n    border : 1px solid black;\r\n    font-size : 20px;\r\n    display : flex;\r\n    flex-direction : column;\r\n    justify-content : center;\r\n    align-items : center;\r\n    background-color : rgba(255, 255, 255, 0.15);\r\n    max-width : 500px;\r\n    padding : 10px;\r\n    transition-duration : 400ms;\r\n}\r\n\r\n.menuCard:hover\r\n{\r\n    color : rgb(255, 115, 0);\r\n    background-color : rgba(255, 255, 255, 0.4);\r\n}\r\n\r\n.menuBackground\r\n{\r\n    padding : 50px;\r\n    background-color : rgba(0, 0, 0, 0.767);\r\n    border : 2px solid black;\r\n    display : flex;\r\n    flex-direction : row;\r\n    flex-wrap: wrap;\r\n    justify-content : center;\r\n    gap : 15px;\r\n    width : 65%;\r\n}\r\n\r\n/* contact tab*/\r\n\r\n.contactBackground\r\n{\r\n    padding : 18px;\r\n    color : rgb(255, 129, 0);\r\n    text-align : center;\r\n    font-size : 32px;\r\n    background-color : rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n/*footer*/\r\n.footer\r\n{\r\n    background-color : var(--dark-brown);\r\n    display : flex;\r\n    padding : 20px;\r\n    font-size : 24px;\r\n    justify-content : center;\r\n    align-items : center;\r\n    color : white;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/pages/contactPage.js":
/*!**********************************!*\
  !*** ./src/pages/contactPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactLoad": () => (/* binding */ contactLoad)
/* harmony export */ });
let contactLoad = () =>
{
    let contactMain = document.createElement("main");
    let background = document.createElement("div");
    background.classList.add("contactBackground");

    let header = document.createElement("h2");
    header.textContent = "Hi there!";
    let text = document.createElement("p");
    text.innerHTML =  '<p>My name is Thoalfeqar.\r\nI hope that you like my little website. If you want to, you can reach me through my github<a href = "https://github.com/Thoalfeqar-gata" target = "_blank"> account.</a></p>';
    background.appendChild(header);
    background.appendChild(text);
    contactMain.appendChild(background);
    return contactMain;
}



/***/ }),

/***/ "./src/pages/homePage.js":
/*!*******************************!*\
  !*** ./src/pages/homePage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeLoad": () => (/* binding */ homeLoad)
/* harmony export */ });
const homeLoad = () =>
{
    const home = document.createElement("main");
    const welcomeContainer = document.createElement("div");
    const welcomeHeader = document.createElement("h1");
    const welcomeText = document.createElement("p");
    
    home.classList.add("home");
    welcomeContainer.classList.add("welcomeContainer");
    welcomeHeader.textContent = "Iraq restaurant, beyond traditional.";
    welcomeText.textContent = "Best traditional dishes in town.\nA place that you will never forget!";
    welcomeContainer.appendChild(welcomeHeader);
    welcomeContainer.appendChild(welcomeText);

    home.appendChild(welcomeContainer);
    return home;
};



/***/ }),

/***/ "./src/pages/menuPage.js":
/*!*******************************!*\
  !*** ./src/pages/menuPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuLoad": () => (/* binding */ menuLoad)
/* harmony export */ });
/* harmony import */ var _Dolma_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Dolma.jpg */ "./src/Dolma.jpg");
/* harmony import */ var _Bamia_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Bamia.jpg */ "./src/Bamia.jpg");
/* harmony import */ var _Mahshi_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Mahshi.jpg */ "./src/Mahshi.jpg");
/* harmony import */ var _Maqluba_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Maqluba.jpg */ "./src/Maqluba.jpg");




let createCard = (foodName, image, discription) =>
{
    let card = document.createElement("div");
    
    let img = new Image();
    img.src = image;
    
    let name = document.createElement("h2");
    name.textContent = foodName;
    
    let disc = document.createElement("p");
    disc.textContent = discription;



    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(disc);
    card.classList.add("menuCard");
    return card;
}


let menuLoad = () =>
{
    const menu = document.createElement("main");
    menu.classList.add("menu");
    const background = document.createElement("div");
    background.classList.add("menuBackground");
    
    const dolma = createCard("Dolma", _Dolma_jpg__WEBPACK_IMPORTED_MODULE_0__, "Vegetables wrapped in rice and meat.");
    const bamia = createCard("Bamia and rice", _Bamia_jpg__WEBPACK_IMPORTED_MODULE_1__, "Bamia broth made from tomato sauce and okra.");
    const mahshi = createCard("Mahshi", _Mahshi_jpg__WEBPACK_IMPORTED_MODULE_2__, "Similar to dolma, but more sauce!");
    const maqluba = createCard("maqluba", _Maqluba_jpg__WEBPACK_IMPORTED_MODULE_3__, "Rice and potatoes with eggplants and vegetables.");
    background.appendChild(dolma);
    background.appendChild(bamia);
    background.appendChild(mahshi);
    background.appendChild(maqluba);
    menu.appendChild(background);
    return menu;
}



/***/ }),

/***/ "./src/Bamia.jpg":
/*!***********************!*\
  !*** ./src/Bamia.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b30b008fe791ed8d11d6.jpg";

/***/ }),

/***/ "./src/Dolma.jpg":
/*!***********************!*\
  !*** ./src/Dolma.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7df6c5b587c062b115a3.jpg";

/***/ }),

/***/ "./src/Mahshi.jpg":
/*!************************!*\
  !*** ./src/Mahshi.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "96a193055bd404ca8c54.jpg";

/***/ }),

/***/ "./src/Maqluba.jpg":
/*!*************************!*\
  !*** ./src/Maqluba.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b2da923e4f15dbd38993.jpg";

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2bc916018a885d3681c.png";

/***/ }),

/***/ "./src/pexels-pixabay-262978.jpg":
/*!***************************************!*\
  !*** ./src/pexels-pixabay-262978.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7836d0265e42821a6705.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.png */ "./src/logo.png");
/* harmony import */ var _pages_homePage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/homePage.js */ "./src/pages/homePage.js");
/* harmony import */ var _pages_menuPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menuPage.js */ "./src/pages/menuPage.js");
/* harmony import */ var _pages_contactPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contactPage.js */ "./src/pages/contactPage.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const content = document.getElementById("content");

const headerLoad = () =>
{
    const head = document.createElement("header");
    head.classList.add("header");

    const logo = document.createElement("div");
    logo.classList.add("logo");
    const headImg = new Image();
    headImg.src = _logo_png__WEBPACK_IMPORTED_MODULE_0__;
    logo.appendChild(headImg);

    const headText = document.createElement("p");
    headText.textContent = "Iraq restaurant";
    logo.appendChild(headText);

    head.appendChild(logo);
    head.appendChild(tabsLoad());
    return head;
}

const tabsLoad = () =>
{
    const tabsList = document.createElement("nav");
    tabsList.classList.add("tabs");
    const homeTab = document.createElement("button");
    const menuTab = document.createElement("button");
    const contactTab = document.createElement("button");

    //temporary for assigning event listeners.
    const buttons = [homeTab, contactTab, menuTab];
    homeTab.addEventListener("click", e =>
    {
        for(let btn of buttons)
        {
            btn.classList.remove("active");
        }
        homeTab.classList.add("active");

        content.replaceChild((0,_pages_homePage_js__WEBPACK_IMPORTED_MODULE_1__.homeLoad)(), document.querySelector("main"))
    });

    menuTab.addEventListener("click", e =>
    {
        for(let btn of buttons)
        {
            btn.classList.remove("active");
        }

        menuTab.classList.add("active");
        content.replaceChild((0,_pages_menuPage_js__WEBPACK_IMPORTED_MODULE_2__.menuLoad)(), document.querySelector("main"))
    });

    contactTab.addEventListener("click", e =>
    {
        for(let btn of buttons)
        {
            btn.classList.remove("active");
        }
        contactTab.classList.add("active");
        content.replaceChild((0,_pages_contactPage_js__WEBPACK_IMPORTED_MODULE_3__.contactLoad)(), document.querySelector("main"))
    });
    

    homeTab.classList.add("active");
    homeTab.classList.add("homeTab");
    menuTab.classList.add("menuTab");
    contactTab.classList.add("contactTab");

    menuTab.textContent = "Menu";
    contactTab.textContent = "Contact";
    homeTab.textContent = "Home";
    tabsList.appendChild(homeTab);
    tabsList.appendChild(menuTab);
    tabsList.appendChild(contactTab);
    return tabsList;
};

const footerLoad = () =>
{
    const footer = document.createElement("div");
    footer.classList.add("footer");
    footer.textContent = "Copyright © Thoalfeqar 2022";
    return footer;
};


content.appendChild(headerLoad());
content.appendChild((0,_pages_homePage_js__WEBPACK_IMPORTED_MODULE_1__.homeLoad)());
content.appendChild(footerLoad());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0REFBUTtBQUM1QixrQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9jb250YWN0UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9wZXhlbHMtcGl4YWJheS0yNjI5NzguanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxyXFxuICAgIC0tZGFyay1icm93bjogIzUzNEE0MDtcXHJcXG4gICAgLS1saWdodC1ncmVlbjogIzVFRTM4MztcXHJcXG4gICAgLS1wcmltYXJ5LWxpZ2h0LWJyb3duOiAjRjZGOEVBOyBcXHJcXG4gICAgLS1zZWNvbmRhcnktbGlnaHQtYnJvd246ICNjMDhhMTY7XFxyXFxufVxcclxcblxcclxcbipcXHJcXG57XFxyXFxuICAgIGZvbnQtZmFtaWx5IDogc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keVxcclxcbntcXHJcXG4gICAgbWFyZ2luIDogMHB4O1xcclxcbiAgICBoZWlnaHQgOiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZSA6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZSA6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQgOiBmaXhlZDtcXHJcXG59XFxyXFxuXFxyXFxubWFpblxcclxcbntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50IDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hXFxyXFxue1xcclxcbiAgICBkaXNwbGF5IDogaW5saW5lO1xcclxcbiAgICBmb250LXNpemUgOiBib2xkO1xcclxcbiAgICBjb2xvciA6IHJnYigyNTUsIDEyOSwgMCk7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IFxcclxcbntcXHJcXG4gICAgZGlzcGxheSA6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uIDogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQgOiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBoZWlnaHQgOiAxMDAlO1xcclxcbn1cXHJcXG4vKmhlYWRlciovXFxyXFxuLmhlYWRlclxcclxcbntcXHJcXG4gICAgZGlzcGxheSA6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uIDogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQgOiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZyA6IDBweCAyMHB4IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvciA6IHJnYmEoMjQ2LCAyNDgsIDIzNCwgMC44MjIpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFic1xcclxcbntcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG4ubG9nb1xcclxcbntcXHJcXG4gICAgZGlzcGxheSA6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zIDogY2VudGVyOyBcXHJcXG4gICAgY29sb3IgOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQtYnJvd24pO1xcclxcbiAgICBmb250LXNpemUgOiAzMnB4O1xcclxcbiAgICBmb250LXdlaWdodCA6IDU1MDtcXHJcXG4gICAgcGFkZGluZy1yaWdodCA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jb250YWN0VGFiLCAubWVudVRhYiwgLmhvbWVUYWJcXHJcXG57XFxyXFxuICAgYmFja2dyb3VuZCA6IG5vbmU7XFxyXFxuICAgYm9yZGVyIDogbm9uZTtcXHJcXG4gICBwYWRkaW5nIDogMDsgXFxyXFxuICAgY29sb3IgOiByZ2IoMjE5LCAxMTgsIDM2KTtcXHJcXG4gICBmb250LXNpemUgOiAyOHB4O1xcclxcbiAgIGZvbnQtd2VpZ2h0IDogNTUwO1xcclxcbiAgIGJvcmRlci1ib3R0b20gOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgbWFyZ2luIDogMHB4IDQwcHg7XFxyXFxuICAgdHJhbnNpdGlvbiA6IDIwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZVRhYjpob3ZlclxcclxcbntcXHJcXG4gICAgY3Vyc29yIDogcG9pbnRlcjsgIFxcclxcbiAgICB0cmFuc2Zvcm0gOiB0cmFuc2xhdGVZKC0xNSUpOyBcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVUYWI6aG92ZXJcXHJcXG57XFxyXFxuICAgIGN1cnNvciA6IHBvaW50ZXI7IFxcclxcbiAgICB0cmFuc2Zvcm0gOiB0cmFuc2xhdGVZKC0xNSUpOyAgIFxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdFRhYjpob3ZlclxcclxcbntcXHJcXG4gICAgY3Vyc29yIDogcG9pbnRlcjsgIFxcclxcbiAgICB0cmFuc2Zvcm0gOiB0cmFuc2xhdGVZKC0xNSUpOyAgXFxyXFxufVxcclxcblxcclxcbi5hY3RpdmVcXHJcXG57XFxyXFxuICAgIGJvcmRlci1ib3R0b20gOiAzcHggc29saWQgcmdiKDIxOSwgMTE4LCAzNik7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qaG9tZSovXFxyXFxuLmhvbWVcXHJcXG57XFxyXFxuICAgIGRpc3BsYXkgOiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zIDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nIDogMTVweDtcXHJcXG4gICAgZ2FwIDogMTAlO1xcclxcblxcclxcbiAgICBmbGV4LWdyb3cgOiAxO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ud2VsY29tZUNvbnRhaW5lclxcclxcbntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvciA6cmdiYSgwLCAwLCAwLCAwLjc2Nyk7XFxyXFxuICAgIHBhZGRpbmcgOiAyMHB4O1xcclxcbiAgICBkaXNwbGF5IDogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb24gOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zIDogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XFxyXFxufVxcclxcbi53ZWxjb21lQ29udGFpbmVyID4gaDFcXHJcXG57XFxyXFxuICAgIGZvbnQtc2l6ZSA6IDUwcHg7XFxyXFxuICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yIDogcmdiKDI1NSwgMTI5LCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLndlbGNvbWVDb250YWluZXIgPiBwXFxyXFxue1xcclxcbiAgICBmb250LXNpemUgOiAyNXB4O1xcclxcbiAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xcclxcbiAgICBjb2xvciA6IHJnYigyNTUsIDEyOSwgMCk7XFxyXFxufVxcclxcblxcclxcbi8qIGZvb2QgbWVudSAqL1xcclxcblxcclxcbi5tZW51XFxyXFxue1xcclxcbiAgICBkaXNwbGF5IDogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXMgOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZyA6IDE1cHg7XFxyXFxufVxcclxcbi5tZW51Q2FyZCA+IGltZ1xcclxcbntcXHJcXG4gICAgcGFkZGluZyA6IDEwcHg7XFxyXFxuICAgIHdpZHRoIDogNTAlO1xcclxcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzIDogNTAlO1xcclxcbn1cXHJcXG4ubWVudUNhcmRcXHJcXG57XFxyXFxuICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yIDogcmdiKDIxOSwgMTE4LCAzNik7XFxyXFxuICAgIGJvcmRlciA6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgZm9udC1zaXplIDogMjBweDtcXHJcXG4gICAgZGlzcGxheSA6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uIDogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zIDogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcXHJcXG4gICAgbWF4LXdpZHRoIDogNTAwcHg7XFxyXFxuICAgIHBhZGRpbmcgOiAxMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uIDogNDAwbXM7XFxyXFxufVxcclxcblxcclxcbi5tZW51Q2FyZDpob3ZlclxcclxcbntcXHJcXG4gICAgY29sb3IgOiByZ2IoMjU1LCAxMTUsIDApO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUJhY2tncm91bmRcXHJcXG57XFxyXFxuICAgIHBhZGRpbmcgOiA1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogcmdiYSgwLCAwLCAwLCAwLjc2Nyk7XFxyXFxuICAgIGJvcmRlciA6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgZGlzcGxheSA6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uIDogcm93O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjtcXHJcXG4gICAgZ2FwIDogMTVweDtcXHJcXG4gICAgd2lkdGggOiA2NSU7XFxyXFxufVxcclxcblxcclxcbi8qIGNvbnRhY3QgdGFiKi9cXHJcXG5cXHJcXG4uY29udGFjdEJhY2tncm91bmRcXHJcXG57XFxyXFxuICAgIHBhZGRpbmcgOiAxOHB4O1xcclxcbiAgICBjb2xvciA6IHJnYigyNTUsIDEyOSwgMCk7XFxyXFxuICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZSA6IDMycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3IgOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxufVxcclxcblxcclxcbi8qZm9vdGVyKi9cXHJcXG4uZm9vdGVyXFxyXFxue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogdmFyKC0tZGFyay1icm93bik7XFxyXFxuICAgIGRpc3BsYXkgOiBmbGV4O1xcclxcbiAgICBwYWRkaW5nIDogMjBweDtcXHJcXG4gICAgZm9udC1zaXplIDogMjRweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50IDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcXHJcXG4gICAgY29sb3IgOiB3aGl0ZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLGdDQUFnQztBQUNwQzs7QUFFQTs7SUFFSSx3QkFBd0I7QUFDNUI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGNBQWM7SUFDZCwwREFBcUQ7SUFDckQsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtBQUNqQzs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsd0JBQXdCO0FBQzVCOztBQUVBOztJQUVJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLGFBQWE7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7O0lBRUksY0FBYztJQUNkLHVCQUF1QjtJQUN2QiwrQkFBK0I7SUFDL0Isb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0Qiw2Q0FBNkM7QUFDakQ7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjtBQUNBOztJQUVJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOzs7QUFHQTs7R0FFRyxpQkFBaUI7R0FDakIsYUFBYTtHQUNiLFdBQVc7R0FDWCx5QkFBeUI7R0FDekIsZ0JBQWdCO0dBQ2hCLGlCQUFpQjtHQUNqQixxQ0FBcUM7R0FDckMsaUJBQWlCO0dBQ2pCLGtCQUFrQjtBQUNyQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsNEJBQTRCO0FBQ2hDOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQiw0QkFBNEI7QUFDaEM7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLDRCQUE0QjtBQUNoQzs7QUFFQTs7SUFFSSwyQ0FBMkM7QUFDL0M7Ozs7QUFJQSxPQUFPO0FBQ1A7O0lBRUksY0FBYztJQUNkLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLFNBQVM7O0lBRVQsYUFBYTtBQUNqQjs7O0FBR0E7O0lBRUksc0NBQXNDO0lBQ3RDLGNBQWM7SUFDZCxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQix3QkFBd0I7QUFDNUI7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtBQUM1Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtBQUM1Qjs7QUFFQSxjQUFjOztBQUVkOztJQUVJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLDRDQUE0QztJQUM1QyxpQkFBaUI7SUFDakIsY0FBYztJQUNkLDJCQUEyQjtBQUMvQjs7QUFFQTs7SUFFSSx3QkFBd0I7SUFDeEIsMkNBQTJDO0FBQy9DOztBQUVBOztJQUVJLGNBQWM7SUFDZCx1Q0FBdUM7SUFDdkMsd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBLGVBQWU7O0FBRWY7O0lBRUksY0FBYztJQUNkLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFDQUFxQztBQUN6Qzs7QUFFQSxTQUFTO0FBQ1Q7O0lBRUksb0NBQW9DO0lBQ3BDLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXHJcXG4gICAgLS1kYXJrLWJyb3duOiAjNTM0QTQwO1xcclxcbiAgICAtLWxpZ2h0LWdyZWVuOiAjNUVFMzgzO1xcclxcbiAgICAtLXByaW1hcnktbGlnaHQtYnJvd246ICNGNkY4RUE7IFxcclxcbiAgICAtLXNlY29uZGFyeS1saWdodC1icm93bjogI2MwOGExNjtcXHJcXG59XFxyXFxuXFxyXFxuKlxcclxcbntcXHJcXG4gICAgZm9udC1mYW1pbHkgOiBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5XFxyXFxue1xcclxcbiAgICBtYXJnaW4gOiAwcHg7XFxyXFxuICAgIGhlaWdodCA6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlIDogdXJsKFxcXCIuL3BleGVscy1waXhhYmF5LTI2Mjk3OC5qcGdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplIDogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudCA6IGZpeGVkO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluXFxyXFxue1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmFcXHJcXG57XFxyXFxuICAgIGRpc3BsYXkgOiBpbmxpbmU7XFxyXFxuICAgIGZvbnQtc2l6ZSA6IGJvbGQ7XFxyXFxuICAgIGNvbG9yIDogcmdiKDI1NSwgMTI5LCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQgXFxyXFxue1xcclxcbiAgICBkaXNwbGF5IDogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb24gOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudCA6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGhlaWdodCA6IDEwMCU7XFxyXFxufVxcclxcbi8qaGVhZGVyKi9cXHJcXG4uaGVhZGVyXFxyXFxue1xcclxcbiAgICBkaXNwbGF5IDogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb24gOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudCA6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zIDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nIDogMHB4IDIwcHggNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogcmdiYSgyNDYsIDI0OCwgMjM0LCAwLjgyMik7XFxyXFxufVxcclxcblxcclxcbi50YWJzXFxyXFxue1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcbi5sb2dvXFxyXFxue1xcclxcbiAgICBkaXNwbGF5IDogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXMgOiBjZW50ZXI7IFxcclxcbiAgICBjb2xvciA6IHZhcigtLXNlY29uZGFyeS1saWdodC1icm93bik7XFxyXFxuICAgIGZvbnQtc2l6ZSA6IDMycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0IDogNTUwO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0IDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNvbnRhY3RUYWIsIC5tZW51VGFiLCAuaG9tZVRhYlxcclxcbntcXHJcXG4gICBiYWNrZ3JvdW5kIDogbm9uZTtcXHJcXG4gICBib3JkZXIgOiBub25lO1xcclxcbiAgIHBhZGRpbmcgOiAwOyBcXHJcXG4gICBjb2xvciA6IHJnYigyMTksIDExOCwgMzYpO1xcclxcbiAgIGZvbnQtc2l6ZSA6IDI4cHg7XFxyXFxuICAgZm9udC13ZWlnaHQgOiA1NTA7XFxyXFxuICAgYm9yZGVyLWJvdHRvbSA6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICBtYXJnaW4gOiAwcHggNDBweDtcXHJcXG4gICB0cmFuc2l0aW9uIDogMjAwbXM7XFxyXFxufVxcclxcblxcclxcbi5ob21lVGFiOmhvdmVyXFxyXFxue1xcclxcbiAgICBjdXJzb3IgOiBwb2ludGVyOyAgXFxyXFxuICAgIHRyYW5zZm9ybSA6IHRyYW5zbGF0ZVkoLTE1JSk7IFxcclxcbn1cXHJcXG5cXHJcXG4ubWVudVRhYjpob3ZlclxcclxcbntcXHJcXG4gICAgY3Vyc29yIDogcG9pbnRlcjsgXFxyXFxuICAgIHRyYW5zZm9ybSA6IHRyYW5zbGF0ZVkoLTE1JSk7ICAgXFxyXFxufVxcclxcblxcclxcbi5jb250YWN0VGFiOmhvdmVyXFxyXFxue1xcclxcbiAgICBjdXJzb3IgOiBwb2ludGVyOyAgXFxyXFxuICAgIHRyYW5zZm9ybSA6IHRyYW5zbGF0ZVkoLTE1JSk7ICBcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZVxcclxcbntcXHJcXG4gICAgYm9yZGVyLWJvdHRvbSA6IDNweCBzb2xpZCByZ2IoMjE5LCAxMTgsIDM2KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLypob21lKi9cXHJcXG4uaG9tZVxcclxcbntcXHJcXG4gICAgZGlzcGxheSA6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXMgOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmcgOiAxNXB4O1xcclxcbiAgICBnYXAgOiAxMCU7XFxyXFxuXFxyXFxuICAgIGZsZXgtZ3JvdyA6IDE7XFxyXFxufVxcclxcblxcclxcblxcclxcbi53ZWxjb21lQ29udGFpbmVyXFxyXFxue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDpyZ2JhKDAsIDAsIDAsIDAuNzY3KTtcXHJcXG4gICAgcGFkZGluZyA6IDIwcHg7XFxyXFxuICAgIGRpc3BsYXkgOiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbiA6IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXMgOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjtcXHJcXG59XFxyXFxuLndlbGNvbWVDb250YWluZXIgPiBoMVxcclxcbntcXHJcXG4gICAgZm9udC1zaXplIDogNTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcXHJcXG4gICAgY29sb3IgOiByZ2IoMjU1LCAxMjksIDApO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VsY29tZUNvbnRhaW5lciA+IHBcXHJcXG57XFxyXFxuICAgIGZvbnQtc2l6ZSA6IDI1cHg7XFxyXFxuICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yIDogcmdiKDI1NSwgMTI5LCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9vZCBtZW51ICovXFxyXFxuXFxyXFxuLm1lbnVcXHJcXG57XFxyXFxuICAgIGRpc3BsYXkgOiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50IDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nIDogMTVweDtcXHJcXG59XFxyXFxuLm1lbnVDYXJkID4gaW1nXFxyXFxue1xcclxcbiAgICBwYWRkaW5nIDogMTBweDtcXHJcXG4gICAgd2lkdGggOiA1MCU7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXMgOiA1MCU7XFxyXFxufVxcclxcbi5tZW51Q2FyZFxcclxcbntcXHJcXG4gICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcXHJcXG4gICAgY29sb3IgOiByZ2IoMjE5LCAxMTgsIDM2KTtcXHJcXG4gICAgYm9yZGVyIDogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBmb250LXNpemUgOiAyMHB4O1xcclxcbiAgICBkaXNwbGF5IDogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb24gOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXMgOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3IgOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcclxcbiAgICBtYXgtd2lkdGggOiA1MDBweDtcXHJcXG4gICAgcGFkZGluZyA6IDEwcHg7XFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb24gOiA0MDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVDYXJkOmhvdmVyXFxyXFxue1xcclxcbiAgICBjb2xvciA6IHJnYigyNTUsIDExNSwgMCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3IgOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxyXFxufVxcclxcblxcclxcbi5tZW51QmFja2dyb3VuZFxcclxcbntcXHJcXG4gICAgcGFkZGluZyA6IDUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3IgOiByZ2JhKDAsIDAsIDAsIDAuNzY3KTtcXHJcXG4gICAgYm9yZGVyIDogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBkaXNwbGF5IDogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb24gOiByb3c7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50IDogY2VudGVyO1xcclxcbiAgICBnYXAgOiAxNXB4O1xcclxcbiAgICB3aWR0aCA6IDY1JTtcXHJcXG59XFxyXFxuXFxyXFxuLyogY29udGFjdCB0YWIqL1xcclxcblxcclxcbi5jb250YWN0QmFja2dyb3VuZFxcclxcbntcXHJcXG4gICAgcGFkZGluZyA6IDE4cHg7XFxyXFxuICAgIGNvbG9yIDogcmdiKDI1NSwgMTI5LCAwKTtcXHJcXG4gICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplIDogMzJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvciA6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLypmb290ZXIqL1xcclxcbi5mb290ZXJcXHJcXG57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3IgOiB2YXIoLS1kYXJrLWJyb3duKTtcXHJcXG4gICAgZGlzcGxheSA6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmcgOiAyMHB4O1xcclxcbiAgICBmb250LXNpemUgOiAyNHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zIDogY2VudGVyO1xcclxcbiAgICBjb2xvciA6IHdoaXRlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibGV0IGNvbnRhY3RMb2FkID0gKCkgPT5cclxue1xyXG4gICAgbGV0IGNvbnRhY3RNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgICBsZXQgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0QmFja2dyb3VuZFwiKTtcclxuXHJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJIaSB0aGVyZSFcIjtcclxuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICB0ZXh0LmlubmVySFRNTCA9ICAnPHA+TXkgbmFtZSBpcyBUaG9hbGZlcWFyLlxcclxcbkkgaG9wZSB0aGF0IHlvdSBsaWtlIG15IGxpdHRsZSB3ZWJzaXRlLiBJZiB5b3Ugd2FudCB0bywgeW91IGNhbiByZWFjaCBtZSB0aHJvdWdoIG15IGdpdGh1YjxhIGhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9UaG9hbGZlcWFyLWdhdGFcIiB0YXJnZXQgPSBcIl9ibGFua1wiPiBhY2NvdW50LjwvYT48L3A+JztcclxuICAgIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICBjb250YWN0TWFpbi5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKTtcclxuICAgIHJldHVybiBjb250YWN0TWFpbjtcclxufVxyXG5cclxuZXhwb3J0IHtjb250YWN0TG9hZH07IiwiY29uc3QgaG9tZUxvYWQgPSAoKSA9PlxyXG57XHJcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgICBjb25zdCB3ZWxjb21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHdlbGNvbWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBjb25zdCB3ZWxjb21lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgXHJcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xyXG4gICAgd2VsY29tZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwid2VsY29tZUNvbnRhaW5lclwiKTtcclxuICAgIHdlbGNvbWVIZWFkZXIudGV4dENvbnRlbnQgPSBcIklyYXEgcmVzdGF1cmFudCwgYmV5b25kIHRyYWRpdGlvbmFsLlwiO1xyXG4gICAgd2VsY29tZVRleHQudGV4dENvbnRlbnQgPSBcIkJlc3QgdHJhZGl0aW9uYWwgZGlzaGVzIGluIHRvd24uXFxuQSBwbGFjZSB0aGF0IHlvdSB3aWxsIG5ldmVyIGZvcmdldCFcIjtcclxuICAgIHdlbGNvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQod2VsY29tZUhlYWRlcik7XHJcbiAgICB3ZWxjb21lQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlbGNvbWVUZXh0KTtcclxuXHJcbiAgICBob21lLmFwcGVuZENoaWxkKHdlbGNvbWVDb250YWluZXIpO1xyXG4gICAgcmV0dXJuIGhvbWU7XHJcbn07XHJcblxyXG5leHBvcnQge2hvbWVMb2FkfTsiLCJpbXBvcnQgZG9sbWFJbWcgZnJvbSBcIi4uL0RvbG1hLmpwZ1wiO1xyXG5pbXBvcnQgYmFtaWFJbWcgZnJvbSBcIi4uL0JhbWlhLmpwZ1wiO1xyXG5pbXBvcnQgbWFoc2hpSW1nIGZyb20gXCIuLi9NYWhzaGkuanBnXCI7XHJcbmltcG9ydCBtYXFsdWJhSW1nIGZyb20gXCIuLi9NYXFsdWJhLmpwZ1wiO1xyXG5sZXQgY3JlYXRlQ2FyZCA9IChmb29kTmFtZSwgaW1hZ2UsIGRpc2NyaXB0aW9uKSA9PlxyXG57XHJcbiAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBcclxuICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZy5zcmMgPSBpbWFnZTtcclxuICAgIFxyXG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBuYW1lLnRleHRDb250ZW50ID0gZm9vZE5hbWU7XHJcbiAgICBcclxuICAgIGxldCBkaXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBkaXNjLnRleHRDb250ZW50ID0gZGlzY3JpcHRpb247XHJcblxyXG5cclxuXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKG5hbWUpO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChkaXNjKTtcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcIm1lbnVDYXJkXCIpO1xyXG4gICAgcmV0dXJuIGNhcmQ7XHJcbn1cclxuXHJcblxyXG5sZXQgbWVudUxvYWQgPSAoKSA9PlxyXG57XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xyXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoXCJtZW51QmFja2dyb3VuZFwiKTtcclxuICAgIFxyXG4gICAgY29uc3QgZG9sbWEgPSBjcmVhdGVDYXJkKFwiRG9sbWFcIiwgZG9sbWFJbWcsIFwiVmVnZXRhYmxlcyB3cmFwcGVkIGluIHJpY2UgYW5kIG1lYXQuXCIpO1xyXG4gICAgY29uc3QgYmFtaWEgPSBjcmVhdGVDYXJkKFwiQmFtaWEgYW5kIHJpY2VcIiwgYmFtaWFJbWcsIFwiQmFtaWEgYnJvdGggbWFkZSBmcm9tIHRvbWF0byBzYXVjZSBhbmQgb2tyYS5cIik7XHJcbiAgICBjb25zdCBtYWhzaGkgPSBjcmVhdGVDYXJkKFwiTWFoc2hpXCIsIG1haHNoaUltZywgXCJTaW1pbGFyIHRvIGRvbG1hLCBidXQgbW9yZSBzYXVjZSFcIik7XHJcbiAgICBjb25zdCBtYXFsdWJhID0gY3JlYXRlQ2FyZChcIm1hcWx1YmFcIiwgbWFxbHViYUltZywgXCJSaWNlIGFuZCBwb3RhdG9lcyB3aXRoIGVnZ3BsYW50cyBhbmQgdmVnZXRhYmxlcy5cIik7XHJcbiAgICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGRvbG1hKTtcclxuICAgIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQoYmFtaWEpO1xyXG4gICAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZChtYWhzaGkpO1xyXG4gICAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZChtYXFsdWJhKTtcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZCk7XHJcbiAgICByZXR1cm4gbWVudTtcclxufVxyXG5cclxuZXhwb3J0IHttZW51TG9hZH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgbG9nb1BhdGggZnJvbSBcIi4vbG9nby5wbmdcIjtcclxuaW1wb3J0IHtob21lTG9hZH0gZnJvbSAnLi9wYWdlcy9ob21lUGFnZS5qcyc7XHJcbmltcG9ydCB7bWVudUxvYWR9IGZyb20gJy4vcGFnZXMvbWVudVBhZ2UuanMnO1xyXG5pbXBvcnQge2NvbnRhY3RMb2FkfSBmcm9tICcuL3BhZ2VzL2NvbnRhY3RQYWdlLmpzJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcblxyXG5jb25zdCBoZWFkZXJMb2FkID0gKCkgPT5cclxue1xyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgICBoZWFkLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XHJcblxyXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xyXG4gICAgY29uc3QgaGVhZEltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaGVhZEltZy5zcmMgPSBsb2dvUGF0aDtcclxuICAgIGxvZ28uYXBwZW5kQ2hpbGQoaGVhZEltZyk7XHJcblxyXG4gICAgY29uc3QgaGVhZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGhlYWRUZXh0LnRleHRDb250ZW50ID0gXCJJcmFxIHJlc3RhdXJhbnRcIjtcclxuICAgIGxvZ28uYXBwZW5kQ2hpbGQoaGVhZFRleHQpO1xyXG5cclxuICAgIGhlYWQuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgICBoZWFkLmFwcGVuZENoaWxkKHRhYnNMb2FkKCkpO1xyXG4gICAgcmV0dXJuIGhlYWQ7XHJcbn1cclxuXHJcbmNvbnN0IHRhYnNMb2FkID0gKCkgPT5cclxue1xyXG4gICAgY29uc3QgdGFic0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gICAgdGFic0xpc3QuY2xhc3NMaXN0LmFkZChcInRhYnNcIik7XHJcbiAgICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblxyXG4gICAgLy90ZW1wb3JhcnkgZm9yIGFzc2lnbmluZyBldmVudCBsaXN0ZW5lcnMuXHJcbiAgICBjb25zdCBidXR0b25zID0gW2hvbWVUYWIsIGNvbnRhY3RUYWIsIG1lbnVUYWJdO1xyXG4gICAgaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PlxyXG4gICAge1xyXG4gICAgICAgIGZvcihsZXQgYnRuIG9mIGJ1dHRvbnMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICBjb250ZW50LnJlcGxhY2VDaGlsZChob21lTG9hZCgpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKSlcclxuICAgIH0pO1xyXG5cclxuICAgIG1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT5cclxuICAgIHtcclxuICAgICAgICBmb3IobGV0IGJ0biBvZiBidXR0b25zKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgY29udGVudC5yZXBsYWNlQ2hpbGQobWVudUxvYWQoKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikpXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+XHJcbiAgICB7XHJcbiAgICAgICAgZm9yKGxldCBidG4gb2YgYnV0dG9ucylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250YWN0VGFiLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgY29udGVudC5yZXBsYWNlQ2hpbGQoY29udGFjdExvYWQoKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikpXHJcbiAgICB9KTtcclxuICAgIFxyXG5cclxuICAgIGhvbWVUYWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGhvbWVUYWIuY2xhc3NMaXN0LmFkZChcImhvbWVUYWJcIik7XHJcbiAgICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoXCJtZW51VGFiXCIpO1xyXG4gICAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFRhYlwiKTtcclxuXHJcbiAgICBtZW51VGFiLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgICBjb250YWN0VGFiLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcbiAgICBob21lVGFiLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbiAgICB0YWJzTGlzdC5hcHBlbmRDaGlsZChob21lVGFiKTtcclxuICAgIHRhYnNMaXN0LmFwcGVuZENoaWxkKG1lbnVUYWIpO1xyXG4gICAgdGFic0xpc3QuYXBwZW5kQ2hpbGQoY29udGFjdFRhYik7XHJcbiAgICByZXR1cm4gdGFic0xpc3Q7XHJcbn07XHJcblxyXG5jb25zdCBmb290ZXJMb2FkID0gKCkgPT5cclxue1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xyXG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gXCJDb3B5cmlnaHQgwqkgVGhvYWxmZXFhciAyMDIyXCI7XHJcbiAgICByZXR1cm4gZm9vdGVyO1xyXG59O1xyXG5cclxuXHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyTG9hZCgpKTtcclxuY29udGVudC5hcHBlbmRDaGlsZChob21lTG9hZCgpKTtcclxuY29udGVudC5hcHBlbmRDaGlsZChmb290ZXJMb2FkKCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==