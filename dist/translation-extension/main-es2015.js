(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"full-page-container\" id=\"container\">\n    <div class=\"search-container\">\n        <input type=\"text\" placeholder=\"Search word\" (input)=\"onSearchChange($event.target.value)\">\n    </div>\n    <div class=\"text-wrapper\">\n        <div class=\"time-container\">\n            <p class=\"time\">{{current_time | date : 'shortTime'}}</p>\n            <p class=\"date\">{{current_time | date : 'longDate'}}</p>\n        </div>\n        <p class=\"hint\">Here's a new word for you.. </p>\n        <div>\n            <span class=\"word\">{{selected_word.base}}</span>\n            <span class=\"new-word fa fa-refresh\" (click)=\"getNewWord()\"></span>\n        </div>\n        <div *ngFor=\"let key of keys_list\">\n            <p *ngIf=\"key !== 'base'\">\n                <span class=\"hint\">{{key}}: </span>\n                <span>{{selected_word[key]}}</span>\n            </p>\n        </div>\n    </div>\n    <div *ngIf=\"search_text && filtered_data && filtered_data.length\" class=\"filtered-list\">\n        <ul>\n            <li *ngFor=\"let datum of filtered_data\">\n                <p>{{ datum.base }}</p>\n                <div *ngFor=\"let key of keys_list\">\n                    <p *ngIf=\"key !== 'base'\">\n                        <span class=\"hint\">{{key}}: </span>\n                        <span>{{datum[key]}}</span>\n                    </p>\n                </div>\n            </li>\n        </ul>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");




const routes = [
    {
        path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'translation-extension';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-page-container {\n  height: 100vh;\n}\n.full-page-container .text-wrapper {\n  text-align: center;\n  top: 30vh;\n  position: relative;\n}\n.full-page-container .text-wrapper .time {\n  font-size: 60px;\n  margin: 0;\n}\n.full-page-container .text-wrapper .date {\n  margin: 10px;\n}\n.full-page-container .word {\n  font-size: 20px;\n}\n.full-page-container .hint {\n  font-size: 12px;\n}\n.full-page-container .search-container {\n  display: inline;\n  position: relative;\n  top: 12px;\n  margin-left: 10px;\n}\n.full-page-container input[type=text] {\n  width: 215px;\n  padding: 7px 20px;\n  box-sizing: border-box;\n  background: lightgrey;\n  border-radius: 4px;\n  border: none;\n}\n.full-page-container input[type=text]:focus, .full-page-container input[type=text]:active {\n  border: none;\n}\n.full-page-container .filtered-list p {\n  margin: 0;\n}\n.full-page-container .filtered-list ul {\n  top: 23px;\n  width: 215px;\n  list-style: none;\n  position: fixed;\n  max-height: 70vh;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding-left: 15px;\n}\n.full-page-container .filtered-list ul li {\n  border-bottom: 1px solid lightgrey;\n  padding: 8px 0;\n}\n.full-page-container .new-word {\n  cursor: pointer;\n  color: #0116275c;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFsaW5lZS9Eb2N1bWVudHMvQkFDS1VQL1BlcnNvbmFsU3R1ZmYvc3R1ZHkvdHJhbnNsYXRpb24tZXh0ZW5zaW9uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7QURBRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDRUo7QURESTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FDR047QURESTtFQUNFLFlBQUE7QUNHTjtBREFFO0VBQ0UsZUFBQTtBQ0VKO0FEQUU7RUFDRSxlQUFBO0FDRUo7QURBRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ0VKO0FEQUU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDRUo7QURESTtFQUVFLFlBQUE7QUNFTjtBREVJO0VBQ0UsU0FBQTtBQ0FOO0FERUk7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQU47QURDTTtFQUNFLGtDQUFBO0VBQ0EsY0FBQTtBQ0NSO0FER0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtcGFnZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICAudGV4dC13cmFwcGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdG9wOiAzMHZoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAudGltZSB7XG4gICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5kYXRlIHtcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG4gIH1cbiAgLndvcmQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAuaGludCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5zZWFyY2gtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTJweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuICBpbnB1dFt0eXBlPXRleHRdIHtcbiAgICB3aWR0aDogMjE1cHg7XG4gICAgcGFkZGluZzogN3B4IDIwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICAmOmZvY3VzLFxuICAgICY6YWN0aXZlIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gIH1cbiAgLmZpbHRlcmVkLWxpc3Qge1xuICAgIHAge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICB1bCB7XG4gICAgICB0b3A6IDIzcHg7XG4gICAgICB3aWR0aDogMjE1cHg7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgbWF4LWhlaWdodDogNzB2aDtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICBsaSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAubmV3LXdvcmQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzAxMTYyNzVjO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59IiwiLmZ1bGwtcGFnZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLmZ1bGwtcGFnZS1jb250YWluZXIgLnRleHQtd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAzMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZnVsbC1wYWdlLWNvbnRhaW5lciAudGV4dC13cmFwcGVyIC50aW1lIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBtYXJnaW46IDA7XG59XG4uZnVsbC1wYWdlLWNvbnRhaW5lciAudGV4dC13cmFwcGVyIC5kYXRlIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLmZ1bGwtcGFnZS1jb250YWluZXIgLndvcmQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uZnVsbC1wYWdlLWNvbnRhaW5lciAuaGludCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5mdWxsLXBhZ2UtY29udGFpbmVyIC5zZWFyY2gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uZnVsbC1wYWdlLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdIHtcbiAgd2lkdGg6IDIxNXB4O1xuICBwYWRkaW5nOiA3cHggMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5mdWxsLXBhZ2UtY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIC5mdWxsLXBhZ2UtY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF06YWN0aXZlIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLmZ1bGwtcGFnZS1jb250YWluZXIgLmZpbHRlcmVkLWxpc3QgcCB7XG4gIG1hcmdpbjogMDtcbn1cbi5mdWxsLXBhZ2UtY29udGFpbmVyIC5maWx0ZXJlZC1saXN0IHVsIHtcbiAgdG9wOiAyM3B4O1xuICB3aWR0aDogMjE1cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWF4LWhlaWdodDogNzB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4uZnVsbC1wYWdlLWNvbnRhaW5lciAuZmlsdGVyZWQtbGlzdCB1bCBsaSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIHBhZGRpbmc6IDhweCAwO1xufVxuLmZ1bGwtcGFnZS1jb250YWluZXIgLm5ldy13b3JkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzAxMTYyNzVjO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/data.json */ "./src/assets/data.json");
var _assets_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/data.json */ "./src/assets/data.json", 1);



let HomeComponent = class HomeComponent {
    constructor() {
        this.translated_data = _assets_data_json__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.generateGradient();
        setInterval(() => {
            this.current_time = Date.now();
        }, 1000);
        this.getNewWord();
    }
    generateGradient() {
        var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];
        function populate(a) {
            for (var i = 0; i < 6; i++) {
                var x = Math.round(Math.random() * 14);
                var y = hexValues[x];
                a += y;
            }
            return a;
        }
        var newColor1 = populate('#');
        var newColor2 = populate('#');
        var angle = Math.round(Math.random() * 360);
        var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
        document.getElementById("container").style.background = gradient;
    }
    onSearchChange(filter_text) {
        this.search_text = filter_text;
        let filteredList = [];
        if (this.translated_data.length > 0) {
            filter_text = filter_text.toLowerCase();
            this.translated_data.forEach(item => {
                let propValueList = Object.values(item);
                for (let i = 0; i < propValueList.length; i++) {
                    if (propValueList[i]) {
                        if (propValueList[i].toString().toLowerCase().indexOf(filter_text) > -1) {
                            filteredList.push(item);
                            break;
                        }
                    }
                }
            });
        }
        this.filtered_data = filteredList;
    }
    getNewWord() {
        this.selected_word = _assets_data_json__WEBPACK_IMPORTED_MODULE_2__[Math.floor(Math.random() * _assets_data_json__WEBPACK_IMPORTED_MODULE_2__.length)];
        this.keys_list = Object.keys(this.selected_word);
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/assets/data.json":
/*!******************************!*\
  !*** ./src/assets/data.json ***!
  \******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"base\":\"water\",\"French\":\"l'eau\",\"Tamil\":\"Thaneer\",\"Hindi\":\"Pani\"},{\"base\":\"mother\",\"French\":\"mère\",\"Tamil\":\"amma\"},{\"base\":\"father\",\"French\":\"père\",\"Tamil\":\"appa\"},{\"base\":\"elder brother\",\"French\":\"grand frère\",\"Tamil\":\"anna\"},{\"base\":\"elder sister\",\"French\":\"sœur ainée\",\"Tamil\":\"akka\"},{\"base\":\"younger brother\",\"French\":\"frère cadet\",\"Tamil\":\"thambi\"},{\"base\":\"younger sister\",\"French\":\"sœur cadette\",\"Tamil\":\"thangai\"},{\"base\":\"white\",\"French\":\"blanc\",\"Tamil\":\"venmai\"},{\"base\":\"black\",\"French\":\"noir\",\"Tamil\":\"karuppu\"},{\"base\":\"blue\",\"French\":\"bleu\",\"Tamil\":\"neelam\"},{\"base\":\"red\",\"French\":\"rouge\",\"Tamil\":\"sivappu\"},{\"base\":\"yellow\",\"French\":\"Jaune\",\"Tamil\":\"manjal\"},{\"base\":\"grey\",\"French\":\"gris\",\"Tamil\":\"pazhupu\"},{\"base\":\"Green\",\"French\":\"vert\",\"Tamil\":\"Pachai\"},{\"base\":\"I\",\"French\":\"je\",\"Tamil\":\"Naan\"},{\"base\":\"you\",\"French\":\"toi\",\"Tamil\":\"Nee\"},{\"base\":\"We\",\"French\":\"nous\",\"Tamil\":\"Naam\"},{\"base\":\"He\",\"French\":\"Il\",\"Tamil\":\"Avar\"},{\"base\":\"She\",\"French\":\"Elle\",\"Tamil\":\"Aval\"},{\"base\":\"His\",\"French\":\"Le sien\",\"Tamil\":\"Ivar\"},{\"base\":\"Her\",\"French\":\"Sa\",\"Tamil\":\"Ival\"},{\"base\":\"All of you\",\"French\":\"Vous tous\",\"Tamil\":\"Neengal\"},{\"base\":\"Sorry\",\"French\":\"Pardon\",\"Tamil\":\"Mannipu\"},{\"base\":\"Thanks\",\"French\":\"Merci\",\"Tamil\":\"Nandri\"},{\"base\":\"Taste\",\"French\":\"Goût\",\"Tamil\":\"Suvai\"},{\"base\":\"Come\",\"French\":\"Viens\",\"Tamil\":\"Vaa\"},{\"base\":\"Go\",\"French\":\"Aller\",\"Tamil\":\"Po\"},{\"base\":\"Come(With respect)\",\"French\":\"Venez (En ce qui concerne)\",\"Tamil\":\"Vaanga\"},{\"base\":\"Go(With respect)\",\"French\":\"Go (En ce qui concerne)\",\"Tamil\":\"Ponga\"},{\"base\":\"Today\",\"French\":\"Aujourd'hui\",\"Tamil\":\"Indru\"},{\"base\":\"Yesterday\",\"French\":\"Hier\",\"Tamil\":\"Netru\"},{\"base\":\"Tomorrow\",\"French\":\"Demain\",\"Tamil\":\"Naalai\"},{\"base\":\"Zero\",\"French\":\"Zéro\",\"Tamil\":\"Poojyam\"},{\"base\":\"One\",\"French\":\"Un\",\"Tamil\":\"Ondru\"},{\"base\":\"Two\",\"French\":\"Deux\",\"Tamil\":\"Irandu\"},{\"base\":\"Three\",\"French\":\"Trois\",\"Tamil\":\"Moondru\"},{\"base\":\"Four\",\"French\":\"quatre\",\"Tamil\":\"Naangu\"},{\"base\":\"Five\",\"French\":\"Cinq\",\"Tamil\":\"Aindhu\"},{\"base\":\"Six\",\"French\":\"Six\",\"Tamil\":\"Aaru\"},{\"base\":\"Seven\",\"French\":\"Sept\",\"Tamil\":\"Eazhu\"},{\"base\":\"Eight\",\"French\":\"Huit\",\"Tamil\":\"Ettu\"},{\"base\":\"Nine\",\"French\":\"Neuf\",\"Tamil\":\"Onbadhu\"},{\"base\":\"Ten\",\"French\":\"cette\",\"Tamil\":\"Pathu\"},{\"base\":\"Eleven\",\"French\":\"Onze\",\"Tamil\":\"Pathinondru (Pathu+Ondru)\"},{\"base\":\"Twelve\",\"French\":\"Douze\",\"Tamil\":\"Pannirandu(Pathu+Irandu)\"},{\"base\":\"Thriteen\",\"French\":\"Thriteen\",\"Tamil\":\"Pathimoondru\"},{\"base\":\"Twenty\",\"French\":\"Vingt\",\"Tamil\":\"IruPathu( Irandu+Pathu)\"},{\"base\":\"how\",\"French\":\"Comment\",\"Tamil\":\"Eppadi\"},{\"base\":\"hello\",\"French\":\"salut\",\"Tamil\":\"vanakkam\"},{\"base\":\"Good Morning\",\"French\":\"Bonjour\",\"Tamil\":\"Kaalai vanakkam\"},{\"base\":\"Good Afternoon\",\"French\":\"Bonne après-midi\",\"Tamil\":\"Madhiya vanakkam\"},{\"base\":\"Good Evening\",\"French\":\"Bonsoir\",\"Tamil\":\"Maalai vanakkam\"},{\"base\":\"Good Night\",\"French\":\"Bonne nuit\",\"Tamil\":\"Iniya iravu\"},{\"base\":\"Morning\",\"French\":\"Matin\",\"Tamil\":\"Kaalai\"},{\"base\":\"Afternoon\",\"French\":\"Après midi\",\"Tamil\":\"Madhiyam\"},{\"base\":\"Evening\",\"French\":\"Soirée\",\"Tamil\":\"Maalai\"},{\"base\":\"Night\",\"French\":\"Nuit\",\"Tamil\":\"Iravu\"},{\"base\":\"Hello, What are the food items available ?\",\"French\":\"Salut, Quels sont les produits alimentaires disponibles?\",\"Tamil\":\"Vanakkam, enna unavu vagaigal Iruku ?\"},{\"base\":\"Please give me two idlies\",\"French\":\"S'il vous plaît donnez-moi deux idlies\",\"Tamil\":\"Enaku Irandu Idly kudunga\"},{\"base\":\"Please Give me one coffee\",\"French\":\"Donnez-moi s'il vous plaît un café\",\"Tamil\":\"Enaku oru Coffee kudunga\"},{\"base\":\"No Sugar\",\"French\":\"Sans sucre\",\"Tamil\":\"Sarkarai vendam\"},{\"base\":\"I want strong coffee\",\"French\":\"Je veux du café fort\",\"Tamil\":\"Enaku Thidamana coffee vendum\"},{\"base\":\"How much is the total ?\",\"French\":\"Quelle est l'addition ?\",\"Tamil\":\"Motham Evalavu aachu ?\"},{\"base\":\"Thanks\",\"French\":\"Merci\",\"Tamil\":\"Nandri\"},{\"base\":\"Politics\",\"French\":\"Politique\",\"Tamil\":\"Arasiyal\"},{\"base\":\"Politician\",\"French\":\"Politicien\",\"Tamil\":\"Arasiyalvaadhi\"},{\"base\":\"Male-Man\",\"French\":\"Homme male\",\"Tamil\":\"Aan\"},{\"base\":\"Men\",\"French\":\"mais\",\"Tamil\":\"Aangal\"},{\"base\":\"Female-woman\",\"French\":\"Femme-femme\",\"Tamil\":\"Pen\"},{\"base\":\"Women\",\"French\":\"Femmes\",\"Tamil\":\"Pengal\"},{\"base\":\"Democracy\",\"French\":\"La démocratie\",\"Tamil\":\"Kudiyarasu\"},{\"base\":\"water\",\"French\":\"l'eau\",\"Tamil\":\"thanneer\"},{\"base\":\"Drink(Drink this)\",\"French\":\"Buvez (boire ce)\",\"Tamil\":\"kudi\"},{\"base\":\"Little (small amout of)\",\"French\":\"Little (petite quantité de)\",\"Tamil\":\"Konjam\"},{\"base\":\"More (more of this)\",\"French\":\"Plus (plus de cela)\",\"Tamil\":\"Niraya\"},{\"base\":\"Want\",\"French\":\"Vouloir\",\"Tamil\":\"Vendum\"},{\"base\":\"Dont want\",\"French\":\"ne veulent pas que\",\"Tamil\":\"Vendam\"},{\"base\":\"Drink little water\",\"French\":\"Buvez peu d'eau\",\"Tamil\":\"Konjam Thanneer kudi\"},{\"base\":\"I want more water\",\"French\":\"Je veux plus d'eau\",\"Tamil\":\"Niraya Thanneer vendum\"},{\"base\":\"Road\",\"French\":\"Route\",\"Tamil\":\"Saalai\"},{\"base\":\"Home\",\"French\":\"Accueil\",\"Tamil\":\"Veedu\"},{\"base\":\"Building\",\"French\":\"Bâtiment\",\"Tamil\":\"Katidam\"},{\"base\":\"Church\",\"French\":\"Église\",\"Tamil\":\"Devalayam\"},{\"base\":\"Temple\",\"French\":\"Temple\",\"Tamil\":\"Kovil\"},{\"base\":\"Protect\",\"French\":\"Protéger\",\"Tamil\":\"Kaaval\"},{\"base\":\"Police station\",\"French\":\"Police station\",\"Tamil\":\"Kaaval Nilayam\"},{\"base\":\"Security(Person)\",\"French\":\"Sécurité (personne)\",\"Tamil\":\"Kaavalaali\"},{\"base\":\"Where\",\"French\":\"Où\",\"Tamil\":\"Enge\"},{\"base\":\"What\",\"French\":\"Quoi\",\"Tamil\":\"Enna\"},{\"base\":\"Which\",\"French\":\"Lequel\",\"Tamil\":\"Edhu\"},{\"base\":\"how\",\"French\":\"Comment\",\"Tamil\":\"Eppadi\"},{\"base\":\"Why\",\"French\":\"Pourquoi\",\"Tamil\":\"Edhuku\"},{\"base\":\"For what\",\"French\":\"Pour quoi\",\"Tamil\":\"Edhanaala\"},{\"base\":\"Why\",\"French\":\"Pourquoi\",\"Tamil\":\"Yen\"},{\"base\":\"Where\",\"French\":\"Où\",\"Tamil\":\"Enga\"},{\"base\":\"Who?\",\"French\":\"Qui?\",\"Tamil\":\"Yaar?\"},{\"base\":\"When?\",\"French\":\"Quand?\",\"Tamil\":\"Eppohdhu?\"},{\"base\":\"How much?\",\"French\":\"Combien?\",\"Tamil\":\"Evvalhavu?\"},{\"base\":\"How many?\",\"French\":\"Combien?\",\"Tamil\":\"Eththanai?\"},{\"base\":\"What price?\",\"French\":\"Quel prix?\",\"Tamil\":\"Enna Vilai?\"},{\"base\":\"Which ic the truth?\",\"French\":\"Ce qui ic la vérité?\",\"Tamil\":\"Edhu Unhmai?\"},{\"base\":\"How is the situation?\",\"French\":\"Quelle est la situation?\",\"Tamil\":\"Eppadi Nilaimai?\"},{\"base\":\"Why is it so?\",\"French\":\"Pourquoi est-il?\",\"Tamil\":\"Aen Ippadi?\"},{\"base\":\"Where is he?\",\"French\":\"Où est-il?\",\"Tamil\":\"Engae Avan?\"},{\"base\":\"Who is he?\",\"French\":\"Qui est-il?\",\"Tamil\":\"Yaar Avan?\"},{\"base\":\"When is it required?\",\"French\":\"Quand est-il nécessaire?\",\"Tamil\":\"Eppohdhu vaendum?\"},{\"base\":\"What do you want?\",\"French\":\"Qu'est-ce que vous voulez?\",\"Tamil\":\"Enna Vaendum\"},{\"base\":\"Which do you want?\",\"French\":\"Lequel veux-tu?\",\"Tamil\":\"Edhu Vaendum?\"},{\"base\":\"How do you want?\",\"French\":\"Comment voulez-vous?\",\"Tamil\":\"Eppadi Vaendum?\"},{\"base\":\"Why do you want?\",\"French\":\"Pourquoi veux-tu?\",\"Tamil\":\"Aen Vaendum?\"},{\"base\":\"Where do you want?\",\"French\":\"Où voulez-vous?\",\"Tamil\":\"Engu Vaendum?\"},{\"base\":\"Whom do you) want?\",\"French\":\"Qui vous) voulez?\",\"Tamil\":\"Yaar Vaendum?\"},{\"base\":\"How many do you want?\",\"French\":\"Combien en voulez-vous?\",\"Tamil\":\"Eththanai Vaendum?\"},{\"base\":\"How much do you want?\",\"French\":\"Combien voulez-vous?\",\"Tamil\":\"Evvalhavu Vaendum?\"},{\"base\":\"What is it?\",\"French\":\"Qu'Est-ce que c'est?\",\"Tamil\":\"Adhu Enna?\"},{\"base\":\"Which is it?\",\"French\":\"Lequel est-ce?\",\"Tamil\":\"Adhu Edhu?\"},{\"base\":\"How is it?\",\"French\":\"Comment c'est?\",\"Tamil\":\"Adhu Eppadi?\"},{\"base\":\"Why is it?\",\"French\":\"Pourquoi est-il?\",\"Tamil\":\"Adhu Aen?\"},{\"base\":\"Where is it?\",\"French\":\"Où est-ce?\",\"Tamil\":\"Adhu Engae?\"},{\"base\":\"When is it?\",\"French\":\"Quand est-il?\",\"Tamil\":\"Adhu Eppohdhu?\"},{\"base\":\"How much is it?\",\"French\":\"Combien ça coûte?\",\"Tamil\":\"Adhu Evvalhavu?\"},{\"base\":\"I\",\"French\":\"je\",\"Tamil\":\"Naan\"},{\"base\":\"He\",\"French\":\"Il\",\"Tamil\":\"Avan\"},{\"base\":\"She\",\"French\":\"Elle\",\"Tamil\":\"Aval\"},{\"base\":\"You\",\"French\":\"Toi\",\"Tamil\":\"Nee\"},{\"base\":\"It\",\"French\":\"Il\",\"Tamil\":\"Athu\"},{\"base\":\"A\",\"French\":\"UNE\",\"Tamil\":\"Oru\"},{\"base\":\"They\",\"French\":\"Ils\",\"Tamil\":\"avargal\"},{\"base\":\"Them\",\"French\":\"Leur\",\"Tamil\":\"avargal\"},{\"base\":\"Come\",\"French\":\"Viens\",\"Tamil\":\"Va\"},{\"base\":\"Came\",\"French\":\"Venu\",\"Tamil\":\"Vanthuttan\"},{\"base\":\"Will come\",\"French\":\"Viendra\",\"Tamil\":\"Vanthiruvan\"},{\"base\":\"Open\",\"French\":\"Ouvert\",\"Tamil\":\"Thora\"},{\"base\":\"Opened\",\"French\":\"Ouvert\",\"Tamil\":\"Thoranthiruke\"},{\"base\":\"Will open\",\"French\":\"S'ouvrira\",\"Tamil\":\"Therakum\"},{\"base\":\"Sit\",\"French\":\"Asseoir\",\"Tamil\":\"Ukkarru\"},{\"base\":\"Walk\",\"French\":\"Marche\",\"Tamil\":\"Nadae\"},{\"base\":\"Eat\",\"French\":\"Manger\",\"Tamil\":\"Saapidu\"},{\"base\":\"Drink\",\"French\":\"Boisson\",\"Tamil\":\"Kudi\"},{\"base\":\"Win\",\"French\":\"Gagner\",\"Tamil\":\"Jayie\"},{\"base\":\"Go\",\"French\":\"Aller\",\"Tamil\":\"Po\"},{\"base\":\"Run\",\"French\":\"Courir\",\"Tamil\":\"Odu\"},{\"base\":\"I go\",\"French\":\"je vais\",\"Tamil\":\"Naan porean\"},{\"base\":\"He goes\",\"French\":\"Il part\",\"Tamil\":\"Avan poraan\"},{\"base\":\"He eats an banana\",\"French\":\"Il mange une banane\",\"Tamil\":\"Avan vaalai palam saapiduvaan\"},{\"base\":\"He is eating an banana\",\"French\":\"Il mange une banane\",\"Tamil\":\"Avan vaalai palam saapiduraan\"},{\"base\":\"He ate an banana\",\"French\":\"Il a mangé une banane\",\"Tamil\":\"Avan vaalai palam saapittaan\"},{\"base\":\"I saw the film last week\",\"French\":\"J'ai vu le film la semaine dernière\",\"Tamil\":\"Naan poana vaaram padam paarthean\"},{\"base\":\"She came by bus yesterday\",\"French\":\"Elle est venue en bus hier\",\"Tamil\":\"Aval nethu pearundhu valiya vandha\"},{\"base\":\"They went to the temple\",\"French\":\"Ils sont allés au temple\",\"Tamil\":\"Avankellam kovilluku poannaanga\"},{\"base\":\"He slept the whole night\",\"French\":\"Il a dormi toute la nuit\",\"Tamil\":\"Avan mulu rathiriyum thoonkinaan\"},{\"base\":\"He has eaten\",\"French\":\"Il a mangé\",\"Tamil\":\"Avan saapittu mudichutaan\"},{\"base\":\"He had eaten\",\"French\":\"Il avait mangé\",\"Tamil\":\"Avan saapittaan\"},{\"base\":\"He wrote well in the examination\",\"French\":\"Il a écrit bien dans l'examen\",\"Tamil\":\"Avan paritchayila nalla eluthi irukkaan\"},{\"base\":\"He had gone\",\"French\":\"Il est parti\",\"Tamil\":\"Avan poittaan\"},{\"base\":\"He had come\",\"French\":\"Il était venu\",\"Tamil\":\"Avan vanthutaan\"},{\"base\":\"He will eat\",\"French\":\"Il va manger\",\"Tamil\":\"Avan saapiduvaan\"},{\"base\":\"He will go\",\"French\":\"Il ira\",\"Tamil\":\"Avan povaan\"},{\"base\":\"He will come\",\"French\":\"Il viendra\",\"Tamil\":\"Avan varuvaan\"},{\"base\":\"What is your name?\",\"French\":\"Quel est votre nom?\",\"Tamil\":\"Unga peru enna?\"},{\"base\":\"What\",\"French\":\"Quoi\",\"Tamil\":\"Enna\"},{\"base\":\"Your\",\"French\":\"Votre\",\"Tamil\":\"unga\"},{\"base\":\"Name\",\"French\":\"Nom\",\"Tamil\":\"Paer\"},{\"base\":\"What did you do?\",\"French\":\"Qu'est-ce que tu as fait?\",\"Tamil\":\"Nee enna panra, neenga enna panreenga\"},{\"base\":\"What should I do?\",\"French\":\"Que devrais-je faire?\",\"Tamil\":\"Naan enna seyyanum?\"},{\"base\":\"What are the questions?\",\"French\":\"Quelles sont les questions?\",\"Tamil\":\"Enna kelvigal?\"},{\"base\":\"What were the questions?\",\"French\":\"Quelles étaient les questions?\",\"Tamil\":\"Enna kelvigal irunthithu?\"},{\"base\":\"What is the last question?\",\"French\":\"Quelle est la dernière question?\",\"Tamil\":\"Kadaisi kelvi enna?\"},{\"base\":\"What is written in the letter?\",\"French\":\"Ce qui est écrit dans la lettre?\",\"Tamil\":\"Khadithathil enna ezhuthi iruku?\"},{\"base\":\"What you had been told?\",\"French\":\"Qu'est-ce que vous aviez dit?\",\"Tamil\":\"Unaku enna solli irunthathu?\"},{\"base\":\"What will be the answer?\",\"French\":\"Quelle sera la réponse?\",\"Tamil\":\"Badil enna va irukum?\"},{\"base\":\"Why did you come?\",\"French\":\"Pourquoi es-tu venu?\",\"Tamil\":\"Yean vantha?\"},{\"base\":\"Why did you sleep?\",\"French\":\"Pourquoi avez-vous dormi?\",\"Tamil\":\"En thoonguray?\"},{\"base\":\"Why did you tell him to go?\",\"French\":\"Pourquoi avez-vous lui dire d'aller?\",\"Tamil\":\"Yaen avana poga sonna?\"},{\"base\":\"Why did he bring the bag?\",\"French\":\"Pourquoi at-il mettre le sac?\",\"Tamil\":\"Avan yean pai kondu vanthan?\"},{\"base\":\"Why did she pay the money?\",\"French\":\"Pourquoi at-elle payer l'argent?\",\"Tamil\":\"Aval yaen kaasu koduthal?\"},{\"base\":\"Why did they sit there?\",\"French\":\"Pourquoi ont-ils assis là?\",\"Tamil\":\"Avunga yaen inga utkaanthirukaanga?\"},{\"base\":\"Why do you drive the car?\",\"French\":\"Pourquoi vous conduisez la voiture?\",\"Tamil\":\"Yaen car ottina?\"},{\"base\":\"Why are they late for the meeting?\",\"French\":\"Pourquoi sont-ils en retard pour la réunion?\",\"Tamil\":\"Yean avunga meeting ku thamadama vanthaanga?\"},{\"base\":\"How did you come?\",\"French\":\"Comment es tu venu?\",\"Tamil\":\"Nee eppadi vanthe?\"},{\"base\":\"How did you sleep?\",\"French\":\"As-tu bien dormi?\",\"Tamil\":\"Nee epadi thoongina?\"},{\"base\":\"How did you drive?\",\"French\":\"Comment avez-vous conduit?\",\"Tamil\":\"Nee epadi oattina?\"},{\"base\":\"How did you write?\",\"French\":\"Comment avez-vous écrit?\",\"Tamil\":\"Nee epadi ezhuthina?\"},{\"base\":\"How many apples are there in my hand?\",\"French\":\"Combien de pommes sont là dans ma main?\",\"Tamil\":\"Ethana apple enn kaieilla irukku?\"},{\"base\":\"How many did you take?\",\"French\":\"Combien avez-vous pris?\",\"Tamil\":\"Ethana nee edutha?\"},{\"base\":\"How much did he pay you?\",\"French\":\"Combien at-il payé?\",\"Tamil\":\"Evalavu panam kodutha?\"},{\"base\":\"How much distance to go?\",\"French\":\"Quelle distance pour aller?\",\"Tamil\":\"Evalavu thooram poakanum?\"},{\"base\":\"How was the journey yesterday?\",\"French\":\"Comment était hier voyage?\",\"Tamil\":\"Nethu payanam epadi irrunthathu?\"},{\"base\":\"Which way did you come?\",\"French\":\"De quel côté êtes-vous arrivé?\",\"Tamil\":\"Entha valiya vanthe?\"},{\"base\":\"Which is your favorite color?\",\"French\":\"Quelle est votre couleur préférée?\",\"Tamil\":\"Virupamana niram enna?\"},{\"base\":\"In which room did you sleep?\",\"French\":\"Dans quelle pièce avez-vous dormi?\",\"Tamil\":\"Entha arailla thoongina?\"},{\"base\":\"Which story did you tell?\",\"French\":\"Quelle histoire avez-vous dit?\",\"Tamil\":\"Entha kathaya sonna?\"},{\"base\":\"Which is the sweetest fruit?\",\"French\":\"Quel est le fruit le plus doux?\",\"Tamil\":\"Unnaku rumba inipaana palam ethu?\"},{\"base\":\"Which is the best newspaper in Hindi?\",\"French\":\"Quel est le meilleur journal en hindi?\",\"Tamil\":\"Entha siethithaal nalla irukkum?\"},{\"base\":\"Which Indian state has the largest population?\",\"French\":\"Quel État indien a la plus grande population?\",\"Tamil\":\"Entha indhiya naattu maanilathula romba janathogai irruku?\"},{\"base\":\"Where did you come from?\",\"French\":\"D'où viens-tu?\",\"Tamil\":\"Enga irunthu vandha?\"},{\"base\":\"Where did you sleep?\",\"French\":\"Où as-tu dormi?\",\"Tamil\":\"Enga thoonguna?\"},{\"base\":\"Where is the manager's cabin?\",\"French\":\"Où se trouve la cabine du gestionnaire?\",\"Tamil\":\"Seyalaalar arai enga?\"},{\"base\":\"Where should I go?\",\"French\":\"Où dois-je aller?\",\"Tamil\":\"Naan enga poganum?\"},{\"base\":\"Whom should I contact?\",\"French\":\"Qui dois-je contacter?\",\"Tamil\":\"Yeara santhikanum?\"},{\"base\":\"Is it a book?\",\"French\":\"Est-ce que c'est un livre?\",\"Tamil\":\"Ithu puthakama?\"},{\"base\":\"It is a book\",\"French\":\"C'est un livre\",\"Tamil\":\"Ithu puthakam\"},{\"base\":\"Is it the answer?\",\"French\":\"Est-ce la réponse?\",\"Tamil\":\"Ithuthaan badhila?\"},{\"base\":\"It is the answer\",\"French\":\"Il est la réponse\",\"Tamil\":\"Ithuthaan badhil?\"},{\"base\":\"Will you come with me?\",\"French\":\"Voulez-vous venir avec moi?\",\"Tamil\":\"Enkoda varuviya?\"},{\"base\":\"I shall come with you.\",\"French\":\"Je viendrai avec vous.\",\"Tamil\":\"Naan wunkoda varuven.\"},{\"base\":\"Will you give me your pen?\",\"French\":\"Voulez-vous me donner votre stylo?\",\"Tamil\":\"Peanava kodupeengala?\"},{\"base\":\"Yes, of course.\",\"French\":\"Oui, bien sûr.\",\"Tamil\":\"Aama, pinna.\"},{\"base\":\"I love you\",\"French\":\"je t'aime\",\"Tamil\":\"Naan Unnai Kadalikiren.\"},{\"base\":\"Can you give me your pen?\",\"French\":\"Pouvez-vous me donner votre stylo?\",\"Tamil\":\"Peanava kudukka mudiyuma?\"},{\"base\":\"Can you lift the box?\",\"French\":\"Pouvez-vous soulever la boîte?\",\"Tamil\":\"Pettiya thookka mudiyumma?\"},{\"base\":\"Can you write the exam?\",\"French\":\"Pouvez-vous écrire l'examen?\",\"Tamil\":\"Paritchai elutha mudiyumma?\"},{\"base\":\"Did you have your lunch?\",\"French\":\"As-tu déjeuné?\",\"Tamil\":\"Madhiyaanam saappadu saapittiya?\"},{\"base\":\"good morning\",\"French\":\"Bonjour\",\"Tamil\":\"kalaivanakkam\"},{\"base\":\"good evening\",\"French\":\"Bonsoir\",\"Tamil\":\"maalai vanakkam\"},{\"base\":\"welcome\",\"French\":\"Bienvenue\",\"Tamil\":\"vaazhga\"},{\"base\":\"sorry\",\"French\":\"Pardon\",\"Tamil\":\"manichirunga\"},{\"base\":\"take it\",\"French\":\"prends-le\",\"Tamil\":\"eduthu kollungal\"},{\"base\":\"thanks\",\"French\":\"Merci\",\"Tamil\":\"romba nandri\"},{\"base\":\"how are you?\",\"French\":\"Comment allez-vous?\",\"Tamil\":\"eppadi irukkinga or nalamaa?\"},{\"base\":\"and you?\",\"French\":\"et vous?\",\"Tamil\":\"nienga?\"},{\"base\":\"good/so\",\"French\":\"bien alors\",\"Tamil\":\"sari\"},{\"base\":\"thank you very much\",\"French\":\"Merci beaucoup\",\"Tamil\":\"romba nandri\"},{\"base\":\"you are welcome\",\"French\":\"vous êtes les bienvenus\",\"Tamil\":\"paravaa illa\"},{\"base\":\"hey,friend\",\"French\":\"Hey, ami\",\"Tamil\":\"alo,nanbaa\"},{\"base\":\"i missed you so much\",\"French\":\"tu m'as tellement manqué\",\"Tamil\":\"unnai rumba izhanthu vittean\"},{\"base\":\"waht's new\",\"French\":\"quoi de neuf\",\"Tamil\":\"eanna seithi?\"},{\"base\":\"nothing much\",\"French\":\"pas grand chose\",\"Tamil\":\"onnum illai\"},{\"base\":\"good night\",\"French\":\"bonne nuit\",\"Tamil\":\"iravu vanakkam\"},{\"base\":\"see you later\",\"French\":\"à plus tard\",\"Tamil\":\"aparam paarkalam\"},{\"base\":\"good bye\",\"French\":\"Au revoir\",\"Tamil\":\"poittu varen\"},{\"base\":\"am lost\",\"French\":\"suis perdu\",\"Tamil\":\"enakku vazhi theriyala\"},{\"base\":\"can i help you\",\"French\":\"puis-je vous aider\",\"Tamil\":\"unakku udavattumaa?\"},{\"base\":\"can you help me?\",\"French\":\"Pouvez-vous m'aider?\",\"Tamil\":\"enakku udhavi seivienkala?\"},{\"base\":\"where is the bathroom/pharmacy\",\"French\":\"où est la salle de bain / pharmacie\",\"Tamil\":\"kazhivarai/marundukadai engea?\"},{\"base\":\"go straight then turn left/right\",\"French\":\"aller tout droit puis gauche / droite\",\"Tamil\":\"neraa ponga idathu valathu thirumunga\"},{\"base\":\"one moment please\",\"French\":\"un instant s'il vous plaît\",\"Tamil\":\"oru nimidam\"},{\"base\":\"hold on please\",\"French\":\"tenir s'il vous plaît\",\"Tamil\":\"irunga\"},{\"base\":\"how much is this?\",\"French\":\"combien ça coûte?\",\"Tamil\":\"idhu evvalavu\"},{\"base\":\"excuse me\",\"French\":\"Excusez-moi\",\"Tamil\":\"manikkanum or dhayavu seithu\"},{\"base\":\"come with me\",\"French\":\"viens avec moi\",\"Tamil\":\"ennodu vaa\"},{\"base\":\"You\",\"French\":\"Toi\",\"Tamil\":\"Nee / Neengal / Unnay / Ungalai\"},{\"base\":\"Your\",\"French\":\"Votre\",\"Tamil\":\"Unnudaiya / Ungaludaiya\"},{\"base\":\"Yours\",\"French\":\"Le tiens\",\"Tamil\":\"Unnudaiyathu / Ungaludaiyathu\"},{\"base\":\"He\",\"French\":\"Il\",\"Tamil\":\"Avan\"},{\"base\":\"She\",\"French\":\"Elle\",\"Tamil\":\"Aval\"},{\"base\":\"Him\",\"French\":\"Lui\",\"Tamil\":\"Avanay\"},{\"base\":\"Her\",\"French\":\"Sa\",\"Tamil\":\"Avalai / Avaludaiyathu\"},{\"base\":\"His\",\"French\":\"Le sien\",\"Tamil\":\"Avanudaiya / Avanudaiyathu\"},{\"base\":\"They\",\"French\":\"Ils\",\"Tamil\":\"Avargal / Avai\"},{\"base\":\"Their\",\"French\":\"Leur\",\"Tamil\":\"Avargaludaiya / Avargaludaiyathu\"},{\"base\":\"Theirs\",\"French\":\"Les leurs\",\"Tamil\":\"Avargaludaiyathu / Avaigaludaiyathu\"},{\"base\":\"Them\",\"French\":\"Leur\",\"Tamil\":\"Avargalai / Avaigalai\"},{\"base\":\"It\",\"French\":\"Il\",\"Tamil\":\"Adhu / Adhai\"},{\"base\":\"Its\",\"French\":\"Ses\",\"Tamil\":\"Adhanudaiya / Adhanudaiyathu\"},{\"base\":\"Self\",\"French\":\"Soi\",\"Tamil\":\"Thaan\"},{\"base\":\"Myself\",\"French\":\"Moi même\",\"Tamil\":\"Naanae\"},{\"base\":\"Yourself\",\"French\":\"Toi même\",\"Tamil\":\"Neeyae\"},{\"base\":\"Himself\",\"French\":\"Lui-même\",\"Tamil\":\"Avanae\"},{\"base\":\"Itself\",\"French\":\"lui-même\",\"Tamil\":\"Adhuvae\"},{\"base\":\"Themselves\",\"French\":\"Se\",\"Tamil\":\"Avargalae\"},{\"base\":\"Ourselves\",\"French\":\"Nous-mêmes\",\"Tamil\":\"Naamae / Naangalae\"},{\"base\":\"This\",\"French\":\"Cette\",\"Tamil\":\"Idhu / Ivan / Ival\"},{\"base\":\"That\",\"French\":\"Cette\",\"Tamil\":\"Adhu / Avan / Aval\"},{\"base\":\"These\",\"French\":\"Celles-ci\",\"Tamil\":\"Ivaigal / Ivargal\"},{\"base\":\"Those\",\"French\":\"Ceux\",\"Tamil\":\"Avargal / Avaigal\"},{\"base\":\"Some\",\"French\":\"Certains\",\"Tamil\":\"Sila / Silar\"},{\"base\":\"Somebody\",\"French\":\"quelqu'un\",\"Tamil\":\"Yaaroa\"},{\"base\":\"Anybody\",\"French\":\"N'importe qui\",\"Tamil\":\"Yaarkilum / Yaaravadhu\"},{\"base\":\"Everybody\",\"French\":\"Tout le monde\",\"Tamil\":\"Ellorrum\"},{\"base\":\"Nobody\",\"French\":\"Personne\",\"Tamil\":\"Yaarumillai\"},{\"base\":\"Something\",\"French\":\"Quelque chose\",\"Tamil\":\"Edhavathu Ondru\"},{\"base\":\"Anything\",\"French\":\"N'importe quoi\",\"Tamil\":\"Edhavathu\"},{\"base\":\"Nothing\",\"French\":\"Rien\",\"Tamil\":\"Ondrum illai\"},{\"base\":\"Same\",\"French\":\"Même\",\"Tamil\":\"Adhey\"},{\"base\":\"Such\",\"French\":\"Tel\",\"Tamil\":\"Adhu pondra\"},{\"base\":\"Few\",\"French\":\"Peu\",\"Tamil\":\"Konjam / Sila\"},{\"base\":\"Many\",\"French\":\"Beaucoup\",\"Tamil\":\"Pala / Palar / Nirayya\"},{\"base\":\"Other\",\"French\":\"Autre\",\"Tamil\":\"Martrondru / Vera\"},{\"base\":\"Others\",\"French\":\"Autres\",\"Tamil\":\"Pira / Pirar\"},{\"base\":\"Affectionate\",\"French\":\"Affectueux\",\"Tamil\":\"Paasammikka / Paasamulla / Priyamulla\"},{\"base\":\"Clever\",\"French\":\"Intelligent\",\"Tamil\":\"Thiramaiyana / Buddhisaali\"},{\"base\":\"Generous\",\"French\":\"généreuse\",\"Tamil\":\"Dharaala manapaanmai konda\"},{\"base\":\"Innocent\",\"French\":\"Innocent\",\"Tamil\":\"Veguliaana\"},{\"base\":\"Humorous\",\"French\":\"Humoristique\",\"Tamil\":\"Nagaisuvai unarvulla\"},{\"base\":\"Short tempered\",\"French\":\"court trempé\",\"Tamil\":\"Mun Kobam Konda\"},{\"base\":\"Sensible\",\"French\":\"Sensible\",\"Tamil\":\"Arivulla\"},{\"base\":\"Well educated\",\"French\":\"Bien éduqué\",\"Tamil\":\"Nangu padiththa\"},{\"base\":\"Arrogant\",\"French\":\"Arrogant\",\"Tamil\":\"Garvamudaiya / Aanavamulla\"},{\"base\":\"Brave\",\"French\":\"Courageux\",\"Tamil\":\"Dhairiyamana\"},{\"base\":\"Dangerous\",\"French\":\"Dangereux\",\"Tamil\":\"Aabaththaana\"},{\"base\":\"Helpful\",\"French\":\"Utile\",\"Tamil\":\"Udavikaramaana / Payanudaiya\"},{\"base\":\"Indifferent\",\"French\":\"Indifférent\",\"Tamil\":\"Alatchiyamaana\"},{\"base\":\"Jealous\",\"French\":\"Jaloux\",\"Tamil\":\"Poaraamaiyaana\"},{\"base\":\"Mischivous\",\"French\":\"Mischivous\",\"Tamil\":\"Kurumbuthanamaana\"},{\"base\":\"Proud\",\"French\":\"Fier\",\"Tamil\":\"Garvamaana/Perumidhamaana\"},{\"base\":\"Sensitive\",\"French\":\"Sensible\",\"Tamil\":\"Unarchivasappadum\"},{\"base\":\"Sincere\",\"French\":\"Sincère\",\"Tamil\":\"Unmaiyaana\"},{\"base\":\"Strict\",\"French\":\"Strict\",\"Tamil\":\"Kandipaana\"},{\"base\":\"Timid\",\"French\":\"Timide\",\"Tamil\":\"Dhairiyamilladha\"},{\"base\":\"Violent\",\"French\":\"Violent\",\"Tamil\":\"Kodumaiyana, Muradu\"},{\"base\":\"Weak\",\"French\":\"Faible\",\"Tamil\":\"Melindha / Valimai Kunriya\"},{\"base\":\"Adament\",\"French\":\"adament\",\"Tamil\":\"Pidivathamana\"},{\"base\":\"Efficient\",\"French\":\"Efficace\",\"Tamil\":\"Samarthiyamana, Thiramaimikka\"},{\"base\":\"Famous\",\"French\":\"Célèbre\",\"Tamil\":\"Pugazh vaaindha\"},{\"base\":\"Gentle\",\"French\":\"Doux\",\"Tamil\":\"Mariyaadhaiyaana / Menmaiyaana\"},{\"base\":\"Honest\",\"French\":\"Honnête\",\"Tamil\":\"Nermaiyaana\"},{\"base\":\"Kind\",\"French\":\"Gentil\",\"Tamil\":\"Anbaana\"},{\"base\":\"Notorious\",\"French\":\"Célèbre\",\"Tamil\":\"Theeyavaigallil prabhalamana / Kettap Peyareduththa\"},{\"base\":\"Polite\",\"French\":\"Poli\",\"Tamil\":\"Panivaana\"},{\"base\":\"Quiet\",\"French\":\"Silencieux\",\"Tamil\":\"Amaithiyaana\"},{\"base\":\"Selfish\",\"French\":\"Égoïste\",\"Tamil\":\"Suyanalamaana\"},{\"base\":\"Straight forward\",\"French\":\"Simple\",\"Tamil\":\"Olivumaraivartra, Nermaiyulla\"},{\"base\":\"Talented\",\"French\":\"Talentueux\",\"Tamil\":\"Thiramaiyana\"},{\"base\":\"Useless\",\"French\":\"Inutile\",\"Tamil\":\"Ubayogamatra , Udhavaakarai\"},{\"base\":\"Well off\",\"French\":\"Je gagne bien ma\",\"Tamil\":\"Vasathiyulla\"},{\"base\":\"Slippery\",\"French\":\"Glissant\",\"Tamil\":\"Vazhukkalaana\"},{\"base\":\"Uneven\",\"French\":\"Inégal\",\"Tamil\":\"Samamillaamal\"},{\"base\":\"Narrow\",\"French\":\"Étroit\",\"Tamil\":\"Kurugalaana\"},{\"base\":\"Broad\",\"French\":\"Vaste\",\"Tamil\":\"Agalamaana\"},{\"base\":\"Congested\",\"French\":\"Congestionné\",\"Tamil\":\"Nerisalaana\"},{\"base\":\"Clean\",\"French\":\"Nettoyer\",\"Tamil\":\"Suththamaana\"},{\"base\":\"Crowded\",\"French\":\"Bondé\",\"Tamil\":\"Kuutamaana / Kuutam Niraindha\"},{\"base\":\"Water logged\",\"French\":\"gorgés d'eau\",\"Tamil\":\"Thanneer Thengiya\"},{\"base\":\"Slushy\",\"French\":\"Détrempé\",\"Tamil\":\"Saerum Sagathiyumaaga\"},{\"base\":\"Smooth\",\"French\":\"Lisse\",\"Tamil\":\"Menmaiyaana\"},{\"base\":\"Convenient\",\"French\":\"Pratique\",\"Tamil\":\"Vasathiyaana\"},{\"base\":\"Bright\",\"French\":\"Brillant\",\"Tamil\":\"Vellichchamaana\"},{\"base\":\"Airy\",\"French\":\"Airy\",\"Tamil\":\"Kartrotamaana\"},{\"base\":\"Big and Spacious\",\"French\":\"Grande et spacieuse\",\"Tamil\":\"Periya Visaalamaana\"},{\"base\":\"Stuffy\",\"French\":\"Bouché\",\"Tamil\":\"Adaisalaana\"},{\"base\":\"Untidy\",\"French\":\"Désordonné\",\"Tamil\":\"Ozhungartra\"},{\"base\":\"Remote\",\"French\":\"Éloigné\",\"Tamil\":\"Tholaivil Ulla\"},{\"base\":\"Vacant\",\"French\":\"Vacant\",\"Tamil\":\"Gaaliyaga\"},{\"base\":\"Dilapidated\",\"French\":\"Délabré\",\"Tamil\":\"Pazhadaintha\"},{\"base\":\"Well lentilated\",\"French\":\"Eh bien lentilated\",\"Tamil\":\"Kartrotamaana\"},{\"base\":\"Ago\",\"French\":\"Depuis\",\"Tamil\":\"Munbu / Munnadi\"},{\"base\":\"Afterwards\",\"French\":\"Ensuite\",\"Tamil\":\"Piragu\"},{\"base\":\"Then\",\"French\":\"ensuite\",\"Tamil\":\"Appozhudhu / Piragu\"},{\"base\":\"Lately\",\"French\":\"Dernièrement\",\"Tamil\":\"Kalamthazhndhu / Anmaiyil\"},{\"base\":\"Immediately\",\"French\":\"Immédiatement\",\"Tamil\":\"Udanae\"},{\"base\":\"Yet\",\"French\":\"Encore\",\"Tamil\":\"Idhuvarai / Irundhum\"},{\"base\":\"Daily\",\"French\":\"du quotidien\",\"Tamil\":\"Thinasari / Dhinamthoarum\"},{\"base\":\"Weekly\",\"French\":\"Hebdomadaire\",\"Tamil\":\"Varanthorum\"},{\"base\":\"Monthly\",\"French\":\"Mensuel\",\"Tamil\":\"Madhamthorum\"},{\"base\":\"Yearly\",\"French\":\"Annuel\",\"Tamil\":\"Varudamthorum\"},{\"base\":\"Again\",\"French\":\"Encore\",\"Tamil\":\"Marupadiyum\"},{\"base\":\"Often\",\"French\":\"Souvent\",\"Tamil\":\"Adikkadi\"},{\"base\":\"Always\",\"French\":\"Toujours\",\"Tamil\":\"Eppozhudum\"},{\"base\":\"At that time\",\"French\":\"À ce moment-là\",\"Tamil\":\"Andha Neraththil\"},{\"base\":\"Before\",\"French\":\"Avant\",\"Tamil\":\"Munnal\"},{\"base\":\"Rarely\",\"French\":\"Rarement\",\"Tamil\":\"Arithaga\"},{\"base\":\"Early\",\"French\":\"De bonne heure\",\"Tamil\":\"Munnadhagavae\"},{\"base\":\"Ever\",\"French\":\"Déjà\",\"Tamil\":\"Eppozhudum\"},{\"base\":\"Recently\",\"French\":\"Récemment\",\"Tamil\":\"Anmaiyil\"},{\"base\":\"Frequently\",\"French\":\"Fréquemment\",\"Tamil\":\"Adikkadi\"},{\"base\":\"Already\",\"French\":\"Déjà\",\"Tamil\":\"Munbae\"},{\"base\":\"Quickly\",\"French\":\"Rapidement\",\"Tamil\":\"Viraivaga\"},{\"base\":\"Regularly\",\"French\":\"Régulièrement\",\"Tamil\":\"Thodarnthu /Muraiyaga /Ozhungaga\"},{\"base\":\"Always\",\"French\":\"Toujours\",\"Tamil\":\"Eppozhudum\"},{\"base\":\"Since\",\"French\":\"Puisque\",\"Tamil\":\"Irundhu\"},{\"base\":\"Never\",\"French\":\"Jamais\",\"Tamil\":\"Oru Podhum illai\"},{\"base\":\"Just now\",\"French\":\"Juste maintenant\",\"Tamil\":\"Ipozhudhuthan\"},{\"base\":\"Every day\",\"French\":\"Tous les jours\",\"Tamil\":\"Ovvoru naalum / Ovvuru dhinamum\"},{\"base\":\"Once\",\"French\":\"Une fois que\",\"Tamil\":\"Oru Murai\"},{\"base\":\"So far\",\"French\":\"Jusque là\",\"Tamil\":\"Idhuvarai\"},{\"base\":\"Yesterday\",\"French\":\"Hier\",\"Tamil\":\"Netru\"},{\"base\":\"To-day\",\"French\":\"Aujourd'hui\",\"Tamil\":\"Indru\"},{\"base\":\"Tomorrow\",\"French\":\"Demain\",\"Tamil\":\"Naalai\"},{\"base\":\"For a point of time\",\"French\":\"Pour un point de temps\",\"Tamil\":\"Oru kurupitta kaalam varai\"},{\"base\":\"On time\",\"French\":\"À temps\",\"Tamil\":\"Kuriththa naeraththil\"},{\"base\":\"In time\",\"French\":\"À l'heure\",\"Tamil\":\"Kuriththa naeraththirkul\"},{\"base\":\"Home\",\"French\":\"Accueil\",\"Tamil\":\"Veedu / Veetil\"},{\"base\":\"Out\",\"French\":\"En dehors\",\"Tamil\":\"Velliyae\"},{\"base\":\"Outside\",\"French\":\"À l'extérieur\",\"Tamil\":\"Vellipakkam\"},{\"base\":\"In\",\"French\":\"Dans\",\"Tamil\":\"Ullae\"},{\"base\":\"Inside\",\"French\":\"À l'intérieur\",\"Tamil\":\"Ullpakkam /Utpakkam\"},{\"base\":\"Anywhere\",\"French\":\"Nulle part\",\"Tamil\":\"Endha idathilum\"},{\"base\":\"Somewhere\",\"French\":\"Quelque part\",\"Tamil\":\"Engaeyavathu\"},{\"base\":\"Everywhere\",\"French\":\"Partout\",\"Tamil\":\"Ella Idangalilum / Ella Idathilum\"},{\"base\":\"Nowhere\",\"French\":\"Nulle part\",\"Tamil\":\"Engaeyumillai\"},{\"base\":\"Far away\",\"French\":\"Loin\",\"Tamil\":\"Migath tholaivil / Romba dhoorathil\"},{\"base\":\"Here\",\"French\":\"Ici\",\"Tamil\":\"Ingae\"},{\"base\":\"There\",\"French\":\"Là\",\"Tamil\":\"Angae/ Aear\"},{\"base\":\"Away\",\"French\":\"Un moyen\",\"Tamil\":\"Dhuuram\"},{\"base\":\"Off\",\"French\":\"De\",\"Tamil\":\"Tholaivil\"},{\"base\":\"Up\",\"French\":\"en haut\",\"Tamil\":\"Maelae\"},{\"base\":\"Upstairs\",\"French\":\"En haut\",\"Tamil\":\"Maadiyil / Melthalam\"},{\"base\":\"Down\",\"French\":\"Vers le bas\",\"Tamil\":\"Kizhae\"},{\"base\":\"Downstairs\",\"French\":\"En bas\",\"Tamil\":\"Kizhthalam / kizhthalathil\"},{\"base\":\"Far\",\"French\":\"Loin\",\"Tamil\":\"Tholaivil / Dhoorathil\"},{\"base\":\"Politely\",\"French\":\"Poliment\",\"Tamil\":\"Mariyathaiyaga\"},{\"base\":\"Honestly\",\"French\":\"Honnêtement\",\"Tamil\":\"Nermaiyaga\"},{\"base\":\"Patiently\",\"French\":\"patiemment\",\"Tamil\":\"Porumaiyaga\"},{\"base\":\"Warmly\",\"French\":\"Chaleureusement\",\"Tamil\":\"Priyamaga\"},{\"base\":\"Obediently\",\"French\":\"Obéissant\",\"Tamil\":\"Thazhmaiyaga\"},{\"base\":\"Cleverly\",\"French\":\"Habilement\",\"Tamil\":\"Sathuriyamaga\"},{\"base\":\"Boldly\",\"French\":\"Hardiment\",\"Tamil\":\"Dhairiyamaga\"},{\"base\":\"Bravely\",\"French\":\"Courageusement\",\"Tamil\":\"Thunichalaga\"},{\"base\":\"Perfectly\",\"French\":\"à la perfection\",\"Tamil\":\"Kachithamaga\"},{\"base\":\"Sadly\",\"French\":\"Malheureusement\",\"Tamil\":\"Soagamaga\"},{\"base\":\"Accidentally\",\"French\":\"Accidentellement\",\"Tamil\":\"Ethirparathavidhamaga\"},{\"base\":\"Usually\",\"French\":\"habituellement\",\"Tamil\":\"Vazhakamaga\"},{\"base\":\"Generally\",\"French\":\"Généralement\",\"Tamil\":\"Poduvaga\"},{\"base\":\"Hardly\",\"French\":\"À peine\",\"Tamil\":\"Arithaga\"},{\"base\":\"Normally\",\"French\":\"Normalement\",\"Tamil\":\"Pothuvaga\"},{\"base\":\"Slowly\",\"French\":\"Lentement\",\"Tamil\":\"Meduvaga\"},{\"base\":\"Quickly\",\"French\":\"Rapidement\",\"Tamil\":\"Viraivaga\"},{\"base\":\"Quietly\",\"French\":\"Tranquillement\",\"Tamil\":\"Amaithiyaga\"},{\"base\":\"Indirectly\",\"French\":\"Indirectement\",\"Tamil\":\"Maraimugamaga\"},{\"base\":\"Mostly\",\"French\":\"La plupart\",\"Tamil\":\"Perumpalum\"},{\"base\":\"Indeed\",\"French\":\"En effet\",\"Tamil\":\"Unmaiyil\"},{\"base\":\"Luckily\",\"French\":\"Heureusement\",\"Tamil\":\"Athirshtavasamaga\"},{\"base\":\"Happily\",\"French\":\"Heureusement\",\"Tamil\":\"Sandoshamaga\"},{\"base\":\"Carefully\",\"French\":\"Soigneusement\",\"Tamil\":\"Gavanamaga\"},{\"base\":\"Eagerly\",\"French\":\"Vivement\",\"Tamil\":\"Arvamaga\"},{\"base\":\"Beautifully\",\"French\":\"magnifiquement\",\"Tamil\":\"Azhagaga\"},{\"base\":\"Personally\",\"French\":\"Personnellement\",\"Tamil\":\"Andharangamaga / Neradiyaga\"},{\"base\":\"Nicely\",\"French\":\"Bien\",\"Tamil\":\"Enimaiyaga\"},{\"base\":\"Seriously\",\"French\":\"Sérieusement\",\"Tamil\":\"Abathaga\"},{\"base\":\"Purposely\",\"French\":\"À dessein\",\"Tamil\":\"Vendummenrae\"},{\"base\":\"Loudly\",\"French\":\"Bruyamment\",\"Tamil\":\"Saththamaga\"},{\"base\":\"Proudly\",\"French\":\"Fièrement\",\"Tamil\":\"Garvamaga\"},{\"base\":\"Promptly\",\"French\":\"Rapidement\",\"Tamil\":\"Sariyaga/ Kalam thazhthamal\"},{\"base\":\"Strictly\",\"French\":\"Strictement\",\"Tamil\":\"Kandippaga\"},{\"base\":\"Thoroughly\",\"French\":\"Complètement\",\"Tamil\":\"Muzhumaiyaga\"},{\"base\":\"Unfortunately\",\"French\":\"Malheureusement\",\"Tamil\":\"Thurathirshtavasamaga\"},{\"base\":\"Wholly\",\"French\":\"Entièrement\",\"Tamil\":\"Muzhumaiyaga / Niraivaga\"},{\"base\":\"After\",\"French\":\"Après\",\"Tamil\":\"Piragu\"},{\"base\":\"Although\",\"French\":\"Bien que\",\"Tamil\":\"Irundhalum\"},{\"base\":\"And\",\"French\":\"Et\",\"Tamil\":\"Melum,Kuda\"},{\"base\":\"Because\",\"French\":\"Parce que\",\"Tamil\":\"Yenenil\"},{\"base\":\"Before\",\"French\":\"Avant\",\"Tamil\":\"Munnal\"},{\"base\":\"But\",\"French\":\"Mais\",\"Tamil\":\"Aanaal, Ere, Munbu\"},{\"base\":\"Except\",\"French\":\"Sauf\",\"Tamil\":\"Andri\"},{\"base\":\"For\",\"French\":\"Pour\",\"Tamil\":\"Yenenil\"},{\"base\":\"How\",\"French\":\"Comment\",\"Tamil\":\"Eppadi,Evvaru\"},{\"base\":\"If\",\"French\":\"Si\",\"Tamil\":\"Apadiyaanal\"},{\"base\":\"Neither\",\"French\":\"Ni\",\"Tamil\":\"Idhuve enil Adhuvum illai\"},{\"base\":\"Only\",\"French\":\"Seulement\",\"Tamil\":\"Aayinum,Eninum\"},{\"base\":\"Or\",\"French\":\"Ou\",\"Tamil\":\"Alladhu\"},{\"base\":\"Since\",\"French\":\"Puisque\",\"Tamil\":\"Idhu varai\"},{\"base\":\"So\",\"French\":\"Alors\",\"Tamil\":\"Endraal\"},{\"base\":\"Than\",\"French\":\"Que\",\"Tamil\":\"vida\"},{\"base\":\"That\",\"French\":\"Cette\",\"Tamil\":\"Enave,Adhu\"},{\"base\":\"Then\",\"French\":\"ensuite\",\"Tamil\":\"Apadiyaanal\"},{\"base\":\"Therefore\",\"French\":\"Donc\",\"Tamil\":\"Aagaiyaal\"},{\"base\":\"Though\",\"French\":\"Bien que\",\"Tamil\":\"Ena Irundhalum,Endrapodhilum\"},{\"base\":\"As Though\",\"French\":\"Comme si\",\"Tamil\":\"Endru irundadhu pola\"},{\"base\":\"Unless\",\"French\":\"Sauf si\",\"Tamil\":\"Endrillaamal,Illavidil\"},{\"base\":\"Until\",\"French\":\"Jusqu'à ce que\",\"Tamil\":\"Adhuvaraiyil\"},{\"base\":\"Unto\",\"French\":\"Unto\",\"Tamil\":\"Varai\"},{\"base\":\"Where as\",\"French\":\"Tandis que\",\"Tamil\":\"Apadiyiruka\"},{\"base\":\"While\",\"French\":\"Tandis que\",\"Tamil\":\"Ade samayam,Satru neram\"},{\"base\":\"Whether\",\"French\":\"Qu'il s'agisse\",\"Tamil\":\"Irandinul Edhuvendru\"},{\"base\":\"Yet\",\"French\":\"Encore\",\"Tamil\":\"Melum,Irundhapodhilum\"}]");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shalinee/Documents/BACKUP/PersonalStuff/study/translation-extension/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map