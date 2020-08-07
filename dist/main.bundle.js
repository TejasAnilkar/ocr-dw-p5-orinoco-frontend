/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/favicon.ico":
/*!*************************!*\
  !*** ./src/favicon.ico ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"favicon.ico\");\n\n//# sourceURL=webpack:///./src/favicon.ico?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/app.scss */ \"./src/sass/app.scss\");\n/* harmony import */ var _sass_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_app_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _favicon_ico__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favicon.ico */ \"./src/favicon.ico\");\n/* harmony import */ var _robots_txt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./robots.txt */ \"./src/robots.txt\");\n/* harmony import */ var _manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manifest.json */ \"./src/manifest.json\");\n/* harmony import */ var _js_allPages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/allPages */ \"./src/js/allPages.js\");\n/* harmony import */ var _js_allProducts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/allProducts */ \"./src/js/allProducts.js\");\n/* harmony import */ var _js_oneProduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/oneProduct */ \"./src/js/oneProduct.js\");\n/* harmony import */ var _js_allBasket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/allBasket */ \"./src/js/allBasket.js\");\n/* harmony import */ var _js_validForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/validForm */ \"./src/js/validForm.js\");\n/* harmony import */ var _js_orderPlaced__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/orderPlaced */ \"./src/js/orderPlaced.js\");\n/**\n * @name : orinoco\n * @create : 2020/04/05\n * @version : 1.0.0\n * @author : François, Joël Lesenne\n * @depot : <https://github.com/joellesenne/ocr-dw-p5-orinoco-frontend>\n * @licence : MIT <https://mit-license.org/>\n */\n\n/**\n * @load modules APP\n */\n\n\n\n\n\n\n\n\n\n\nwindow.addEventListener('load', function () {\n  /**\n   * @desc Get All Pages\n   */\n  Object(_js_allPages__WEBPACK_IMPORTED_MODULE_4__[\"getUserConnect\"])();\n  Object(_js_allPages__WEBPACK_IMPORTED_MODULE_4__[\"quantityBasket\"])();\n  Object(_js_allPages__WEBPACK_IMPORTED_MODULE_4__[\"getCurrentYear\"])();\n  /**\n   * @desc Get Home Page all articles\n   */\n\n  Object(_js_allProducts__WEBPACK_IMPORTED_MODULE_5__[\"getAllArticlesData\"])();\n  /**\n   * @desc Get Home Page one article\n   */\n\n  Object(_js_oneProduct__WEBPACK_IMPORTED_MODULE_6__[\"getArticleByIdData\"])();\n  /**\n   * @desc Get all basket page\n   */\n\n  Object(_js_allBasket__WEBPACK_IMPORTED_MODULE_7__[\"allBasket\"])();\n  /**\n   * @desc Get order Placed\n   */\n\n  Object(_js_orderPlaced__WEBPACK_IMPORTED_MODULE_9__[\"orderPlaced\"])();\n  /**\n   * @desc Get valid user for form\n   */\n\n  Object(_js_validForm__WEBPACK_IMPORTED_MODULE_8__[\"validForm\"])();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/allBasket.js":
/*!*****************************!*\
  !*** ./src/js/allBasket.js ***!
  \*****************************/
/*! exports provided: allBasket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allBasket\", function() { return allBasket; });\n/* harmony import */ var _makeRequestQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeRequestQuery */ \"./src/js/makeRequestQuery.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global */ \"./src/js/global.js\");\n/* eslint-disable no-underscore-dangle */\n\n/**\n * @name : orinoco\n * @create : 2020/04/05\n * @version : 1.0.0\n * @author : François, Joël Lesenne\n * @site : <https://joellesenne.github.io/ocr-dw-p5-orinoco/index.html>\n * @depot : <https://github.com/joellesenne/ocr-dw-p5-orinoco>\n * @licence : MIT <https://mit-license.org/>\n */\n\n/**\n * @load modules APP\n */\n\n\n\n/**\n * @desc Generate URL API\n */\n\nvar GET_URL = _config__WEBPACK_IMPORTED_MODULE_1__[\"API_URL\"]._HOST + _config__WEBPACK_IMPORTED_MODULE_1__[\"API_URL\"]._DIR + _config__WEBPACK_IMPORTED_MODULE_1__[\"API_URL\"]._CATEGORY;\n/**\n * @desc Select elements for the DOM\n */\n\nvar items = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-allBasket');\nvar totalContent = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-totalPay');\n/**\n * @desc Dynamic management for all bracket\n */\n\nvar allBasket = function allBasket() {\n  // Request XHR\n  var promise = Object(_makeRequestQuery__WEBPACK_IMPORTED_MODULE_0__[\"getRequestQuery\"])('GET', GET_URL);\n  promise.then(function (data) {\n    var totalPay = 0;\n\n    for (var i = 0; i < data.length; i += 1) {\n      for (var j = 0; j < _global__WEBPACK_IMPORTED_MODULE_2__[\"userBasket\"].length; j += 1) {\n        if (_global__WEBPACK_IMPORTED_MODULE_2__[\"userBasket\"][j][0] === data[i]._id) {\n          if (items) {\n            items.innerHTML += \"<td>\".concat(data[i].name, \"</td><td>\").concat(data[i].price / 100, \"</td><td>\").concat(_global__WEBPACK_IMPORTED_MODULE_2__[\"userBasket\"][j][2], \"</td><td>\").concat(_global__WEBPACK_IMPORTED_MODULE_2__[\"userBasket\"][j][1], \"</td><td>\").concat(data[i].price / 100 * _global__WEBPACK_IMPORTED_MODULE_2__[\"userBasket\"][j][1], \"\\u20AC</td>\");\n            totalPay += data[i].price / 100 * _global__WEBPACK_IMPORTED_MODULE_2__[\"userBasket\"][j][1];\n          }\n        }\n      }\n    }\n\n    if (totalPay >= 1) {\n      if (totalContent) {\n        totalContent.textContent = \"R\\xE9capitulatif de votre commande d'un total de : \".concat(totalPay, \"\\u20AC\");\n      } else {\n        totalContent.textContent = \"Vous n'avez pas d'article dans le panier actuellement\";\n      }\n    }\n  });\n  promise[\"catch\"](function () {\n    console.log('will not execute');\n  });\n};\n/**\n * @export modules\n */\n\n\n\n\n//# sourceURL=webpack:///./src/js/allBasket.js?");

/***/ }),

/***/ "./src/js/allPages.js":
/*!****************************!*\
  !*** ./src/js/allPages.js ***!
  \****************************/
/*! exports provided: quantityBasket, getCurrentYear, getUserConnect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"quantityBasket\", function() { return quantityBasket; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentYear\", function() { return getCurrentYear; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUserConnect\", function() { return getUserConnect; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ \"./src/js/global.js\");\n/**\n * @name : orinoco\n * @create : 2020/04/05\n * @version : 1.0.0\n * @author : François, Joël Lesenne\n * @site : <https://joellesenne.github.io/ocr-dw-p5-orinoco/index.html>\n * @depot : <https://github.com/joellesenne/ocr-dw-p5-orinoco>\n * @licence : MIT <https://mit-license.org/>\n */\n\n/**\n * @load modules APP\n */\n\n\n/**\n * @desc Select elements in the DOM\n */\n\nvar quantity = Object(_global__WEBPACK_IMPORTED_MODULE_1__[\"$\"])('.js-quantityBasket');\nvar userConnect = Object(_global__WEBPACK_IMPORTED_MODULE_1__[\"$\"])('.js-userConnect');\n/**\n * @desc Dynamic management for the quantity basket\n */\n\nvar quantityBasket = function quantityBasket() {\n  var data = _global__WEBPACK_IMPORTED_MODULE_1__[\"userBasket\"];\n\n  if (data.length >= 1) {\n    quantity.innerHTML = data.length;\n  } else {\n    quantity.innerHTML = '';\n  }\n};\n/**\n * @desc Dynamic management for the current year\n */\n\n\nvar getCurrentYear = function getCurrentYear() {\n  var date = new Date().getFullYear('Y');\n  var dateFullYear = Object(_global__WEBPACK_IMPORTED_MODULE_1__[\"$\"])('.js-currentYear'); // eslint-disable-next-line no-return-assign\n\n  dateFullYear.textContent = date;\n};\n/**\n * @desc Dynamic management for the users\n */\n\n\nvar getUserConnect = function getUserConnect() {\n  if (userConnect !== null) {\n    userConnect.textContent = \"\".concat(_config__WEBPACK_IMPORTED_MODULE_0__[\"USERS\"].firstName, \" \").concat(_config__WEBPACK_IMPORTED_MODULE_0__[\"USERS\"].lastName);\n  } else {\n    userConnect.textContent = 'Connectez-vous';\n  }\n};\n/**\n * @export modules\n */\n\n\n\n\n//# sourceURL=webpack:///./src/js/allPages.js?");

/***/ }),

/***/ "./src/js/allProducts.js":
/*!*******************************!*\
  !*** ./src/js/allProducts.js ***!
  \*******************************/
/*! exports provided: getAllArticlesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllArticlesData\", function() { return getAllArticlesData; });\n/* harmony import */ var _makeRequestQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeRequestQuery */ \"./src/js/makeRequestQuery.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global */ \"./src/js/global.js\");\n/**\n * @name : orinoco\n * @create : 2020/04/05\n * @version : 1.0.0\n * @author : François, Joël Lesenne\n * @site : <https://joellesenne.github.io/ocr-dw-p5-orinoco/index.html>\n * @depot : <https://github.com/joellesenne/ocr-dw-p5-orinoco>\n * @licence : MIT <https://mit-license.org/>\n */\n\n/**\n * @load modules APP\n */\n\n\n\n/**\n * @desc Generate URL API\n */\n\nvar GET_URL = _config__WEBPACK_IMPORTED_MODULE_1__[\"API_URL\"]._HOST + _config__WEBPACK_IMPORTED_MODULE_1__[\"API_URL\"]._DIR + _config__WEBPACK_IMPORTED_MODULE_1__[\"API_URL\"]._CATEGORY;\n/**\n * @desc Select elements for the DOM\n */\n\nvar items = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-allArticlesByCategory');\n/**\n * @desc Dynamic management for get all articles\n */\n\nvar getAllArticlesData = function getAllArticlesData() {\n  try {\n    var data = Object(_makeRequestQuery__WEBPACK_IMPORTED_MODULE_0__[\"getRequestQuery\"])('GET', GET_URL);\n\n    for (var i = 0; i < data.length; i += 1) {\n      items.innerHTML += \"<li class=\\\"articles__lists--item cards__item\\\">\\n      <div class=\\\"cards__item__thumb\\\">\\n        <img class=\\\"cards__item__thumb--img\\\" src=\\\"\".concat(data[i].imageUrl, \"\\\" alt=\\\"Appareil photo vintage \").concat(data[i].name, \"\\\">\\n      </div>\\n      <div class=\\\"cards__item__body\\\">\\n        <h3 class=\\\"cards__item__body--title\\\">Appareil photo vintage \").concat(data[i].name, \"</h3>\\n        <p class=\\\"cards__item__body--name\\\"><strong>Marque : </strong>\").concat(data[i].name, \"</p>\\n        <p class=\\\"cards__item__body--lenses\\\"><strong>Lentilles : </strong>\").concat(data[i].lenses.join(' – '), \"</p>\\n        <P class=\\\"cards__item__body--description\\\"><strong>Description : </strong>\").concat(data[i].description.substr(0, 50), \"...</P>\\n        <p class=\\\"cards__item__body--price\\\"><strong>Prix : </strong>\").concat(data[i].price / 100, \"\\u20AC</p>\\n        <div class=\\\"cards__item--button\\\">\\n        <a class=\\\"btn\\\" href=\\\"produit.html?id=\").concat(data[i]._id, \"\\\" aria-label=\\\"S\\xE9lectionner l\\u2019appareil photo vintage \").concat(data[i].name, \"\\\">S\\xE9lectionner</a>\\n      </div>\\n      </div>\\n    </li>\");\n    }\n  } catch (ex) {\n    console.log('will not execute');\n  }\n};\n/**\n * @export modules\n */\n\n\n\n\n//# sourceURL=webpack:///./src/js/allProducts.js?");

/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/*! exports provided: API_URL, USERS, ORDER_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL\", function() { return API_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USERS\", function() { return USERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ORDER_ID\", function() { return ORDER_ID; });\n/**\n * @name : orinoco\n * @create : 2020/04/05\n * @version : 1.0.0\n * @author : François, Joël Lesenne\n * @site : <https://joellesenne.github.io/ocr-dw-p5-orinoco/index.html>\n * @depot : <https://github.com/joellesenne/ocr-dw-p5-orinoco>\n * @licence : MIT <https://mit-license.org/>\n */\n\n/**\n * @desc Build URL / ID\n */\nvar a = window.location.search;\nvar b = new URLSearchParams(a);\nvar ID_URL = b.get('id');\n/**\n * @desc Object Category API\n */\n\nvar categories = {\n  cat1: 'cameras',\n  cat2: 'teddies',\n  cat3: 'furniture'\n};\n/**\n * @desc Object Users\n */\n\nvar USERS = {\n  firstName: 'Alain',\n  lastName: 'Dupont',\n  address: '20 rue Henry Durant',\n  city: 'Lyon',\n  email: 'alain-dupont@gmail.com'\n};\n/**\n * @desc Generate URL API\n */\n\nvar API_URL = {\n  _HOST: 'http://localhost:3000/',\n  _DIR: 'api/',\n  _CATEGORY: categories.cat1,\n  _ID: ID_URL,\n  _ORDER: 'order'\n};\nvar ORDER_ID = Math.round(Math.random() * 9654782366987);\n/**\n * @export module\n */\n\n\n\n//# sourceURL=webpack:///./src/js/config.js?");

/***/ }),

/***/ "./src/js/global.js":
/*!**************************!*\
  !*** ./src/js/global.js ***!
  \**************************/
/*! exports provided: $, $$, userBasket, confirmShoppingCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return $; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$$\", function() { return $$; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userBasket\", function() { return userBasket; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"confirmShoppingCart\", function() { return confirmShoppingCart; });\n/**\n * @name : orinoco\n * @create : 2020/04/05\n * @version : 1.0.0\n * @author : François, Joël Lesenne\n * @site : <https://joellesenne.github.io/ocr-dw-p5-orinoco/index.html>\n * @depot : <https://github.com/joellesenne/ocr-dw-p5-orinoco>\n * @licence : MIT <https://mit-license.org/>\n */\n\n/**\n * @desc Select an element in the dom\n *\n * @param   {string}  args\n */\nvar $ = function $() {\n  var _document;\n\n  return (_document = document).querySelector.apply(_document, arguments);\n};\n/**\n * @desc Build an element in the dom\n *\n * @param   {string}  args\n */\n\n\nvar $$ = function $$() {\n  var _document2;\n\n  return (_document2 = document).createElement.apply(_document2, arguments);\n};\n/**\n * @desc User basket Init Object\n *\n * @param {Object} userBasket\n */\n\n\nif (window.localStorage.getItem('userBasket')) {\n  console.log('User basket init and available in local browser storage');\n} else {\n  var userBasketInit = [];\n  window.localStorage.setItem('userBasket', JSON.stringify(userBasketInit));\n}\n/**\n * @desc Confirm shopping cart\n *\n * @param {Object} confirmShoppingCart\n */\n\n\nif (window.localStorage.getItem('confirmShoppingCart')) {\n  console.log('Confirm shopping cart and available in local browser storage');\n} else {\n  var confirmShoppingCartInit = [];\n  window.localStorage.setItem('confirmShoppingCart', JSON.stringify(confirmShoppingCartInit));\n}\n/**\n * @desc Initialize local Storage\n */\n\n\nvar userBasket = JSON.parse(window.localStorage.getItem('userBasket'));\nvar confirmShoppingCart = JSON.parse(window.localStorage.getItem('confirmShoppingCart'));\n/**\n * @export modules\n */\n\n\n\n//# sourceURL=webpack:///./src/js/global.js?");

/***/ }),

/***/ "./src/js/makeRequestQuery.js":
/*!************************************!*\
  !*** ./src/js/makeRequestQuery.js ***!
  \************************************/
/*! exports provided: getRequestQuery, postRequestQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRequestQuery\", function() { return getRequestQuery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postRequestQuery\", function() { return postRequestQuery; });\n/**\n * @name : orinoco\n * @create : 2020/04/05\n * @version : 1.0.0\n * @author : François, Joël Lesenne\n * @site : <https://ocr-dw.s3.eu-west-3.amazonaws.com/orinoco/index.html>\n * @depot : <https://github.com/joellesenne/orinoco>\n * @licence : MIT <https://mit-license.org/>\n */\n\n/**\n * @desc Get XHR request with promise <https://gomakethings.com/promise-based-xhr/>\n *\n * @param {String} URL Request URL\n */\nvar getRequestQuery = function getRequestQuery() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  // Create the XHR request\n  var XHR = new window.XMLHttpRequest(); // Return it as a Promise\n\n  return new Promise(function (resolve, reject) {\n    // Setup our listener to process completed requests\n    XHR.onreadystatechange = function () {\n      // Only run if the request is complete\n      if (XHR.readyState !== 4) return; // Process the response\n\n      if (XHR.status >= 200 && XHR.status < 300) {\n        // If successful\n        resolve(JSON.parse(XHR.response));\n      } else {\n        // If failed\n        reject(new Error({\n          status: XHR.status,\n          statusText: XHR.statusText\n        }));\n      }\n    }; // Setup our HTTP request\n\n\n    XHR.open.apply(XHR, args.concat([true]));\n    XHR.setRequestHeader('Content-Type', 'application/json'); // Send the request\n\n    XHR.send();\n  });\n};\n/**\n * @desc Get XHR request with promise <https://gomakethings.com/promise-based-xhr/>\n *\n * @param {String} URL Request URL\n */\n\n\nvar postRequestQuery = function postRequestQuery() {\n  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n    args[_key2] = arguments[_key2];\n  }\n\n  // Create the XHR request\n  var XHR = new window.XMLHttpRequest(); // Return it as a Promise\n\n  return new Promise(function (resolve, reject) {\n    // Setup our listener to process completed requests\n    XHR.onreadystatechange = function () {\n      // Only run if the request is complete\n      if (XHR.readyState !== 4) return; // Process the response\n\n      if (XHR.status >= 200 && XHR.status < 300) {\n        // If successful\n        resolve(JSON.parse(XHR.response));\n      } else {\n        // If failed\n        reject(new Error({\n          status: XHR.status,\n          statusText: XHR.statusText\n        }));\n      }\n    }; // Setup our HTTP request\n\n\n    XHR.open.apply(XHR, args.concat([true]));\n    XHR.setRequestHeader('Content-Type', 'application/json');\n    var order = args[args.length - 1]; // Send the request\n\n    XHR.send(order);\n  });\n};\n/**\n * @export modules\n */\n\n\n\n\n//# sourceURL=webpack:///./src/js/makeRequestQuery.js?");

/***/ }),

/***/ "./src/js/oneProduct.js":
/*!******************************!*\
  !*** ./src/js/oneProduct.js ***!
  \******************************/
/*! exports provided: getArticleByIdData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getArticleByIdData\", function() { return getArticleByIdData; });\n/* harmony import */ var _makeRequestQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeRequestQuery */ \"./src/js/makeRequestQuery.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global */ \"./src/js/global.js\");\n/* eslint-disable no-underscore-dangle */\n\n/**\n * @name : orinoco\n * @create : 2020/04/05\n * @version : 1.0.0\n * @author : François, Joël Lesenne\n * @site : <https://ocr-dw.s3.eu-west-3.amazonaws.com/orinoco/index.html>\n * @depot : <https://github.com/joellesenne/orinoco>\n * @licence : MIT <https://mit-license.org/>\n */\n\n/**\n * @load modules dependencies\n */\n\n\n\n/**\n * @desc Generate URL API\n */\n\nvar GET_URL = \"\".concat(_config__WEBPACK_IMPORTED_MODULE_1__[\"API_URL\"]._HOST + _config__WEBPACK_IMPORTED_MODULE_1__[\"API_URL\"]._DIR + _config__WEBPACK_IMPORTED_MODULE_1__[\"API_URL\"]._CATEGORY, \"/\").concat(_config__WEBPACK_IMPORTED_MODULE_1__[\"API_URL\"]._ID);\n/**\n * @desc Select elements for the DOM\n */\n\nvar imgProduct = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-imgProduct');\nvar titleProduct = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-titleProduct');\nvar markProduct = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-markProduct');\nvar lensesProduct = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-lensesProduct');\nvar descriptionProduct = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-descriptionProduct');\nvar priceProduct = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-priceProduct');\nvar selectOptionProduct = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-selectOptionProduct');\nvar changeOption = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-changeOption');\nvar resultIsActive = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-resultIsActive');\nvar resultOption = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-resultOption');\nvar activeButtonAdd = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-activeButtonAdd');\nvar activeButtonDelete = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-activeButtonDelete');\nvar activeButtonValid = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-activeButtonValid');\nvar addBasket = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-addBasket');\nvar deleteBasket = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-deleteBasket');\nvar quantityIsActive = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-quantityIsActive');\nvar quantityMessage = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-quantityMessage');\nvar quantityBasket = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-quantityBasket');\n/**\n * @desc Dynamic management for get article by ID\n */\n\nvar getArticleByIdData = function getArticleByIdData() {\n  // Request XHR\n  var promise = Object(_makeRequestQuery__WEBPACK_IMPORTED_MODULE_0__[\"getRequestQuery\"])('GET', GET_URL);\n  promise.then(function (data) {\n    console.log(\"data getArticleByIdData() : \".concat(data));\n    imgProduct.setAttribute('src', \"\".concat(data.imageUrl));\n    imgProduct.setAttribute('alt', \"Appareil photo vintage \".concat(data.name));\n    imgProduct.setAttribute('width', '450');\n    imgProduct.setAttribute('height', '300');\n    imgProduct.setAttribute('loading', 'lazy');\n    imgProduct.style.display = 'block';\n    titleProduct.innerHTML = data.name;\n    markProduct.innerHTML += data.name;\n    lensesProduct.innerHTML += data.lenses.join(' – ');\n    descriptionProduct.innerHTML += data.description;\n    priceProduct.innerHTML += \"\".concat(data.price / 100, \"\\u20AC\");\n\n    for (var i = 0; i < data.lenses.length; i += 1) {\n      var option = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$$\"])('option');\n      option.setAttribute('class', 'card__form__select--option js-selectOption');\n      option.value = data.lenses[i];\n      option.innerHTML = data.lenses[i];\n      selectOptionProduct.appendChild(option);\n    }\n  });\n  promise.then(function () {\n    /**\n     * Change select option\n     */\n    if (changeOption) {\n      changeOption.addEventListener('change', function (event) {\n        event.preventDefault();\n        resultIsActive.style.display = 'block';\n        resultOption.textContent = event.target.value;\n        activeButtonAdd.style.display = 'inline-block';\n      });\n    }\n  });\n  /**\n   * @desc Add product in basket\n   */\n\n  promise.then(function (data) {\n    addBasket.addEventListener('click', function (event) {\n      event.preventDefault();\n      quantityIsActive.style.display = 'block';\n      quantityMessage.textContent = Number(quantityMessage.textContent) + 1;\n      quantityBasket.textContent = Number(quantityBasket.textContent) + 1;\n\n      if (quantityMessage.textContent <= 1) {\n        if (!resultOption.textContent) {\n          console.log(resultOption.textContent = 'Boîtier nu');\n        } else {\n          console.log(resultOption.textContent);\n        }\n\n        _global__WEBPACK_IMPORTED_MODULE_2__[\"userBasket\"].push([data._id, quantityMessage.textContent, resultOption.textContent]);\n      } else {\n        _global__WEBPACK_IMPORTED_MODULE_2__[\"userBasket\"].push([data._id, '1', resultOption.textContent]);\n      }\n\n      if (window.localStorage.getItem('userBasket', JSON.stringify(_global__WEBPACK_IMPORTED_MODULE_2__[\"userBasket\"])) !== null) {\n        window.localStorage.setItem('userBasket', JSON.stringify(_global__WEBPACK_IMPORTED_MODULE_2__[\"userBasket\"]));\n      }\n\n      activeButtonDelete.style.display = 'inline-block';\n      activeButtonValid.style.display = 'block';\n    });\n  });\n  /**\n   * @desc Delete product in basket\n   */\n\n  promise.then(function (data) {\n    deleteBasket.addEventListener('click', function (event) {\n      event.preventDefault();\n      quantityMessage.textContent = Number(quantityMessage.textContent) - 1;\n      quantityBasket.textContent = Number(quantityBasket.textContent) - 1; // console.log(quantityMessage.textContent);\n\n      if (Number(quantityMessage.textContent) >= 1) {\n        _global__WEBPACK_IMPORTED_MODULE_2__[\"userBasket\"].pop(data);\n        window.localStorage.setItem('userBasket', JSON.stringify(_global__WEBPACK_IMPORTED_MODULE_2__[\"userBasket\"]));\n      } else {\n        activeButtonDelete.style.display = 'none';\n        quantityIsActive.style.display = 'none';\n        activeButtonValid.style.display = 'none';\n      }\n    });\n  });\n  promise[\"catch\"](function (ex) {\n    console.log('will not execute');\n  });\n};\n/**\n * @export modules\n */\n\n\n\n\n//# sourceURL=webpack:///./src/js/oneProduct.js?");

/***/ }),

/***/ "./src/js/orderPlaced.js":
/*!*******************************!*\
  !*** ./src/js/orderPlaced.js ***!
  \*******************************/
/*! exports provided: orderPlaced */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderPlaced\", function() { return orderPlaced; });\n/* harmony import */ var _makeRequestQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeRequestQuery */ \"./src/js/makeRequestQuery.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global */ \"./src/js/global.js\");\n/* eslint-disable no-underscore-dangle */\n\n/*\n  @name : orinoco\n  @create : 2020/04/05\n  @version : 1.0.0\n  @author : François, Joël Lesenne\n  @site : <https://ocr-dw.s3.eu-west-3.amazonaws.com/orinoco/index.html>\n  @depot : <https://github.com/joellesenne/orinoco>\n  @licence : MIT <https://mit-license.org/>\n*/\n\n/**\n * @load modules APP\n */\n\n\n\n/**\n * @desc Generate URL API\n */\n\nvar GET_URL = _config__WEBPACK_IMPORTED_MODULE_1__[\"API_URL\"]._HOST + _config__WEBPACK_IMPORTED_MODULE_1__[\"API_URL\"]._DIR + _config__WEBPACK_IMPORTED_MODULE_1__[\"API_URL\"]._CATEGORY;\n/**\n * @desc Select elements\n */\n\nvar orderInfo = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-orderInfo');\nvar returnPageHome = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-retourHome');\n\nvar orderPlaced = function orderPlaced() {\n  var promise = Object(_makeRequestQuery__WEBPACK_IMPORTED_MODULE_0__[\"getRequestQuery\"])('GET', GET_URL);\n  promise.then(function (data) {\n    if (orderInfo) {\n      if (_global__WEBPACK_IMPORTED_MODULE_2__[\"confirmShoppingCart\"] !== null) {\n        orderInfo.innerHTML = \"<h2 class=\\\"modal__title\\\">Votre commande a bien \\xE9t\\xE9 valid\\xE9e</h2><p>Mr. <strong>\".concat(_global__WEBPACK_IMPORTED_MODULE_2__[\"confirmShoppingCart\"][0][1], \" \").concat(_global__WEBPACK_IMPORTED_MODULE_2__[\"confirmShoppingCart\"][0][2], \"</strong>, voici votre num\\xE9ro ID : <strong>\").concat(_global__WEBPACK_IMPORTED_MODULE_2__[\"confirmShoppingCart\"][0][0], \"</strong> de votre commande d'un prix total de : <strong>\").concat(\n        /* EXEMPLE */\n        data.length\n        /* TODO All Price */\n        , \"</strong>\\u20AC.<br>Nous restons \\xE0 votre disposition pour toutes vos r\\xE9clamations.<br>Toute l'\\xE9quipe vous remercie pour votre achat en esp\\xE9rant qu'il vous conviendra.</p>\");\n      } else {\n        orderInfo.innerHtml = '<h2 class=\"modal__title\">Il y a un problème avec votre commande</h2><p><a href=\"./panier.html\">Retour au panier</a></p>';\n      }\n    }\n\n    if (returnPageHome) {\n      returnPageHome.addEventListener('click', function (event) {\n        event.preventDefault();\n        window.localStorage.clear();\n        window.setTimeout(function () {\n          window.location = 'index.html';\n        }, 2000);\n      });\n    }\n  });\n  promise[\"catch\"](function (ex) {\n    console.log(\"Page error orderPlacedJS : \".concat(JSON.stringify(ex)));\n  });\n};\n/**\n * @export modules\n */\n\n\n\n\n//# sourceURL=webpack:///./src/js/orderPlaced.js?");

/***/ }),

/***/ "./src/js/validForm.js":
/*!*****************************!*\
  !*** ./src/js/validForm.js ***!
  \*****************************/
/*! exports provided: validForm, createOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validForm\", function() { return validForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createOrder\", function() { return createOrder; });\n/* harmony import */ var _makeRequestQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeRequestQuery */ \"./src/js/makeRequestQuery.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global */ \"./src/js/global.js\");\n/* eslint-disable camelcase */\n\n/**\n * @name : orinoco\n * @create : 2020/04/05\n * @version : 1.0.0\n * @author : François, Joël Lesenne\n * @site : <https://ocr-dw.s3.eu-west-3.amazonaws.com/orinoco/index.html>\n * @depot : <https://github.com/joellesenne/orinoco>\n * Licence : MIT <https://mit-license.org/>\n */\n\n/**\n * @load modules APP\n */\n\n\n\n/**\n * @desc Generate URL API\n */\n\nvar POST_URL = \"\".concat(_config__WEBPACK_IMPORTED_MODULE_1__[\"API_URL\"]._HOST + _config__WEBPACK_IMPORTED_MODULE_1__[\"API_URL\"]._DIR + _config__WEBPACK_IMPORTED_MODULE_1__[\"API_URL\"]._CATEGORY, \"/\").concat(_config__WEBPACK_IMPORTED_MODULE_1__[\"API_URL\"]._ORDER);\nconsole.log(\"POST_URL :\".concat(POST_URL));\n/**\n * @desc Select elements for DOM\n */\n\nvar familyName = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-familyName');\nvar givenName = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-givenName');\nvar email = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-email');\nvar addressLine1 = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-addressLine1');\nvar addressLevel1 = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-addressLevel1');\nvar submitForm = Object(_global__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('.js-submitForm');\n\nvar validForm = function validForm() {\n  /**\n   * @desc Auto complete user information\n   */\n  familyName.value = _config__WEBPACK_IMPORTED_MODULE_1__[\"USERS\"].lastName;\n  givenName.value = _config__WEBPACK_IMPORTED_MODULE_1__[\"USERS\"].firstName;\n  email.value = _config__WEBPACK_IMPORTED_MODULE_1__[\"USERS\"].email;\n  addressLine1.value = _config__WEBPACK_IMPORTED_MODULE_1__[\"USERS\"].address;\n  addressLevel1.value = _config__WEBPACK_IMPORTED_MODULE_1__[\"USERS\"].city;\n  submitForm.addEventListener('click', function (event) {\n    event.preventDefault();\n\n    if (familyName.value !== _config__WEBPACK_IMPORTED_MODULE_1__[\"USERS\"].lastName) {\n      console.log('Votre Nom de famille ne correspond pas à notre base de données !');\n    } else if (givenName.value !== _config__WEBPACK_IMPORTED_MODULE_1__[\"USERS\"].firstName) {\n      console.log('Votre prénom ne correspond pas à notre base de données !');\n    } else if (email.value !== _config__WEBPACK_IMPORTED_MODULE_1__[\"USERS\"].email) {\n      console.log('Votre email ne correspond pas à notre base de données !');\n    } else if (addressLine1.value !== _config__WEBPACK_IMPORTED_MODULE_1__[\"USERS\"].address) {\n      console.log('Votre adresse ne correspond pas à notre base de données !');\n    } else if (addressLevel1.value !== _config__WEBPACK_IMPORTED_MODULE_1__[\"USERS\"].city) {\n      console.log('Le nom de votre ville ne correspond pas à notre base de données !');\n    } else {\n      console.log(\"Tous c'est bien passée\");\n      _global__WEBPACK_IMPORTED_MODULE_2__[\"confirmShoppingCart\"].push([_config__WEBPACK_IMPORTED_MODULE_1__[\"ORDER_ID\"], _config__WEBPACK_IMPORTED_MODULE_1__[\"USERS\"].firstName, _config__WEBPACK_IMPORTED_MODULE_1__[\"USERS\"].lastName, _global__WEBPACK_IMPORTED_MODULE_2__[\"userBasket\"]]); // userBasket.clear();\n\n      if (window.localStorage.getItem('confirmShoppingCart', JSON.stringify(_global__WEBPACK_IMPORTED_MODULE_2__[\"confirmShoppingCart\"])) !== null) {\n        window.localStorage.setItem('confirmShoppingCart', JSON.stringify(_global__WEBPACK_IMPORTED_MODULE_2__[\"confirmShoppingCart\"]));\n      }\n\n      if (window.localStorage.getItem('userBasket', JSON.stringify(_global__WEBPACK_IMPORTED_MODULE_2__[\"userBasket\"])) !== null) {\n        window.localStorage.setItem('userBasket', JSON.stringify(_global__WEBPACK_IMPORTED_MODULE_2__[\"userBasket\"]));\n      }\n    }\n\n    window.setTimeout(function () {\n      window.location = 'confirmation.html';\n    }, 2000);\n  });\n};\n\nvar createOrder = function createOrder() {\n  // Request XHR\n  var promise = Object(_makeRequestQuery__WEBPACK_IMPORTED_MODULE_0__[\"postRequestQuery\"])('POST', POST_URL);\n  promise.then(function (data) {\n    console.log(\"data 'POST' ? \".concat(data)); // TODO request POST\n  });\n  promise[\"catch\"](function (ex) {\n    console.error(\"Page error validFormJS : \".concat(JSON.stringify(ex)));\n  });\n};\n/**\n * @export modules\n */\n\n\n\n\n//# sourceURL=webpack:///./src/js/validForm.js?");

/***/ }),

/***/ "./src/manifest.json":
/*!***************************!*\
  !*** ./src/manifest.json ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"manifest.json\");\n\n//# sourceURL=webpack:///./src/manifest.json?");

/***/ }),

/***/ "./src/robots.txt":
/*!************************!*\
  !*** ./src/robots.txt ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"robots.txt\");\n\n//# sourceURL=webpack:///./src/robots.txt?");

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/app.scss?");

/***/ })

/******/ });