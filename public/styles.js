(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n.flex-spacer {\n    flex: 1 1 auto;\n  }\n.sidenav {\n    height: 100%;\n    width: 200px;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color:antiquewhite;\n    overflow-x: hidden;\n    padding-top: 20px;\n  }\n/* Style the sidenav links and the dropdown button */\n.sidenav a {\n    padding: 6px 8px 6px 16px;\n    text-decoration: none;\n    font-size: 15px;\n    color:black;\n    display: block;\n    border: none;\n    background: none;\n    width: 100%;\n    text-align: left;\n    cursor: pointer;\n    outline: none;\n  }\n.dropdown-btn {\n    padding: 6px 8px 6px 16px;\n    text-decoration: none;\n    font-size: 15px;\n    background-color: white;\n    color:black;\n    display: block;\n    border: none;\n    background: none;\n    width: 100%;\n    text-align: left;\n    cursor: pointer;\n    outline: none;\n  }\n/* On mouse-over */\n.sidenav a:hover, .dropdown-btn:hover {\n    background-color: white;\n    color: black;\n  }\n/* Main content */\n.main {\n    margin-left: 200px; /* Same as the width of the sidenav */\n    font-size: 15px; /* Increased text to enable scrolling */\n    padding: 0px 10px;\n  }\n/* Add an active class to the active dropdown button */\n.active {\n    background-color: green;\n    color: white;\n  }\n/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */\n.dropdown-container {\n    display: none;\n    background-color: #262626;\n    padding-left: 8px;\n  }\n/* Optional: Style the caret down icon */\n.fa-caret-down {\n    float: right;\n    padding-right: 8px;\n  }\n/* Some media queries for responsiveness */\n@media screen and (max-height: 450px) {\n    .sidenav {padding-top: 15px;}\n    .sidenav a {font-size: 18px;}\n  }", "",{"version":3,"sources":["styles.css"],"names":[],"mappings":"AAAA,8EAA8E;AAC9E;IACI,cAAc;EAChB;AACA;IACE,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,UAAU;IACV,MAAM;IACN,OAAO;IACP,6BAA6B;IAC7B,kBAAkB;IAClB,iBAAiB;EACnB;AAEA,oDAAoD;AACpD;IACE,yBAAyB;IACzB,qBAAqB;IACrB,eAAe;IACf,WAAW;IACX,cAAc;IACd,YAAY;IACZ,gBAAgB;IAChB,WAAW;IACX,gBAAgB;IAChB,eAAe;IACf,aAAa;EACf;AACA;IACE,yBAAyB;IACzB,qBAAqB;IACrB,eAAe;IACf,uBAAuB;IACvB,WAAW;IACX,cAAc;IACd,YAAY;IACZ,gBAAgB;IAChB,WAAW;IACX,gBAAgB;IAChB,eAAe;IACf,aAAa;EACf;AAEA,kBAAkB;AAClB;IACE,uBAAuB;IACvB,YAAY;EACd;AAEA,iBAAiB;AACjB;IACE,kBAAkB,EAAE,qCAAqC;IACzD,eAAe,EAAE,uCAAuC;IACxD,iBAAiB;EACnB;AAEA,sDAAsD;AACtD;IACE,uBAAuB;IACvB,YAAY;EACd;AAEA,wJAAwJ;AACxJ;IACE,aAAa;IACb,yBAAyB;IACzB,iBAAiB;EACnB;AAEA,wCAAwC;AACxC;IACE,YAAY;IACZ,kBAAkB;EACpB;AAEA,0CAA0C;AAC1C;IACE,UAAU,iBAAiB,CAAC;IAC5B,YAAY,eAAe,CAAC;EAC9B","file":"styles.css","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n.flex-spacer {\n    flex: 1 1 auto;\n  }\n  .sidenav {\n    height: 100%;\n    width: 200px;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color:antiquewhite;\n    overflow-x: hidden;\n    padding-top: 20px;\n  }\n  \n  /* Style the sidenav links and the dropdown button */\n  .sidenav a {\n    padding: 6px 8px 6px 16px;\n    text-decoration: none;\n    font-size: 15px;\n    color:black;\n    display: block;\n    border: none;\n    background: none;\n    width: 100%;\n    text-align: left;\n    cursor: pointer;\n    outline: none;\n  }\n  .dropdown-btn {\n    padding: 6px 8px 6px 16px;\n    text-decoration: none;\n    font-size: 15px;\n    background-color: white;\n    color:black;\n    display: block;\n    border: none;\n    background: none;\n    width: 100%;\n    text-align: left;\n    cursor: pointer;\n    outline: none;\n  }\n  \n  /* On mouse-over */\n  .sidenav a:hover, .dropdown-btn:hover {\n    background-color: white;\n    color: black;\n  }\n  \n  /* Main content */\n  .main {\n    margin-left: 200px; /* Same as the width of the sidenav */\n    font-size: 15px; /* Increased text to enable scrolling */\n    padding: 0px 10px;\n  }\n  \n  /* Add an active class to the active dropdown button */\n  .active {\n    background-color: green;\n    color: white;\n  }\n  \n  /* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */\n  .dropdown-container {\n    display: none;\n    background-color: #262626;\n    padding-left: 8px;\n  }\n  \n  /* Optional: Style the caret down icon */\n  .fa-caret-down {\n    float: right;\n    padding-right: 8px;\n  }\n  \n  /* Some media queries for responsiveness */\n  @media screen and (max-height: 450px) {\n    .sidenav {padding-top: 15px;}\n    .sidenav a {font-size: 18px;}\n  }"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\BillGenerator\client\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map