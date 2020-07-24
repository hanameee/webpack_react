/*!
 * commitVersion: 057a4f2
 * Build Date: 2020. 7. 25. 오전 12:18:48
 * Author: hanameee
 * 
 */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["controller"],{

/***/ "./src/controllers/MainController.js":
/*!*******************************************!*\
  !*** ./src/controllers/MainController.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainController; });\n/* harmony import */ var _views_KeywordView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/KeywordView */ \"./src/views/KeywordView.js\");\n/* harmony import */ var _models_KeywordModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/KeywordModel */ \"./src/models/KeywordModel.js\");\n\n\n\nclass MainController {\n    constructor() {\n        const keywordViewEl = document.querySelector(\"#search-keyword\");\n        this.keywordView = new _views_KeywordView__WEBPACK_IMPORTED_MODULE_0__[\"default\"](keywordViewEl);\n        this.renderView();\n    }\n    async renderView() {\n        if (false) {}\n        const data = await _models_KeywordModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list();\n        this.keywordView.mount(data);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/controllers/MainController.js?");

/***/ }),

/***/ "./src/models/KeywordModel.js":
/*!************************************!*\
  !*** ./src/models/KeywordModel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ \"./src/models/request.js\");\n\n\nconst headers = new Headers({\n    \"Content-Type\": \"text/xml\",\n    credentials: \"include\",\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    async list() {\n        const data = await Object(_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"get\", \"/api/test\");\n        return data;\n    },\n    // async list() {\n    //     const response = await fetch(\"http://localhost:3001/api/test\", {\n    //         headers,\n    //     });\n    //     const data = response.json();\n    //     return data;\n    // },\n});\n\n\n//# sourceURL=webpack:///./src/models/KeywordModel.js?");

/***/ }),

/***/ "./src/models/request.js":
/*!*******************************!*\
  !*** ./src/models/request.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return request; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n\nasync function request(method, url, data, headers) {\n    const result = await axios__WEBPACK_IMPORTED_MODULE_0___default()({\n        method,\n        url,\n        data,\n        headers,\n    });\n\n    return result.data;\n}\n\n\n//# sourceURL=webpack:///./src/models/request.js?");

/***/ }),

/***/ "./src/views/KeywordView.js":
/*!**********************************!*\
  !*** ./src/views/KeywordView.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return KeywordView; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/views/View.js\");\n\n\nclass KeywordView extends _View_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(el) {\n        super(el);\n        this._messages = {\n            NO_KEYWORDS: \"추천 검색어가 없습니다\",\n        };\n        return this;\n    }\n\n    mount(data = []) {\n        this.el.innerHTML = data.length\n            ? this.getKeywordHtml(data)\n            : this._messages.NO_KEYWORDS;\n        this._bindClickEvent();\n        return this;\n    }\n\n    getKeywordHtml(data) {\n        return (\n            data.reduce((html, item, index) => {\n                html += `<li data-keyword=\"${\n                    item.keyword\n                }\"><span class=\"number\">${index + 1}. </span>${\n                    item.keyword\n                }</li>`;\n                return html;\n            }, '<ul class=\"KeywordView\">') + \"</ul>\"\n        );\n    }\n\n    _bindClickEvent() {\n        Array.from(this.el.querySelectorAll(\"li\")).forEach((li) => {\n            li.addEventListener(\"click\", (e) => this._onClickKeyword(e));\n        });\n    }\n\n    _onClickKeyword(e) {\n        console.log(e.currentTarget.dataset);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/views/KeywordView.js?");

/***/ }),

/***/ "./src/views/View.js":
/*!***************************!*\
  !*** ./src/views/View.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return View; });\nclass View {\n    constructor(el) {\n        if (!el) throw el;\n        this.el = el;\n        return this;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/views/View.js?");

/***/ })

}]);