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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"full-page-container\" id=\"container\">\n    <div class=\"search-container\">\n        <input type=\"text\" placeholder=\"Search word\" (input)=\"onSearchChange($event.target.value)\">\n    </div>\n    <div class=\"text-wrapper\">\n        <div class=\"time-container\">\n            <p class=\"time\">{{current_time | date : 'shortTime'}}</p>\n            <p class=\"date\">{{current_time | date : 'longDate'}}</p>\n        </div>\n        <p class=\"hint\">Here's a new word for you.. </p>\n        <div>\n            <span class=\"word\">{{selected_word.english}}</span>\n            <span class=\"new-word fa fa-refresh\" (click)=\"getNewWord()\"></span>\n        </div>\n        <p *ngIf=\"selected_word.tamil\">\n            <span class=\"hint\">Tamil: </span>\n            <span>{{selected_word.tamil}}</span>\n        </p>\n        <p *ngIf=\"selected_word.french\">\n            <span class=\"hint\">French: </span>\n            <span>{{selected_word.french}} </span>\n        </p>\n    </div>\n    <div *ngIf=\"search_text && filtered_data && filtered_data.length\" class=\"filtered-list\">\n        <ul>\n            <li *ngFor=\"let datum of filtered_data\">\n                <p>{{ datum.english }}</p>\n                <p>\n                    <span class=\"hint\">Tamil: </span>\n                    <span>{{ datum.tamil }}</span>\n                </p>\n                <p>\n                    <span class=\"hint\">French: </span>\n                    <span>{{ datum.french }}</span>\n                </p>\n            </li>\n        </ul>\n    </div>\n</div>");

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
        this.selected_word = _assets_data_json__WEBPACK_IMPORTED_MODULE_2__[Math.floor(Math.random() * _assets_data_json__WEBPACK_IMPORTED_MODULE_2__.length)];
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
        this.filtered_data = this.translated_data.filter(datum => (datum.english.indexOf(filter_text) > -1 || datum.tamil.indexOf(filter_text) > -1 || datum.french.indexOf(filter_text) > -1));
    }
    getNewWord() {
        this.selected_word = _assets_data_json__WEBPACK_IMPORTED_MODULE_2__[Math.floor(Math.random() * _assets_data_json__WEBPACK_IMPORTED_MODULE_2__.length)];
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

module.exports = JSON.parse("[{\"english\":\"water\",\"french\":\"l'eau\",\"tamil\":\"Thaneer\"},{\"english\":\"mother\",\"french\":\"mère\",\"tamil\":\"amma\"},{\"english\":\"father\",\"french\":\"père\",\"tamil\":\"appa\"},{\"english\":\"elder brother\",\"french\":\"grand frère\",\"tamil\":\"anna\"},{\"english\":\"elder sister\",\"french\":\"sœur ainée\",\"tamil\":\"akka\"},{\"english\":\"younger brother\",\"french\":\"frère cadet\",\"tamil\":\"thambi\"},{\"english\":\"younger sister\",\"french\":\"sœur cadette\",\"tamil\":\"thangai\"},{\"english\":\"white\",\"french\":\"blanc\",\"tamil\":\"venmai\"},{\"english\":\"black\",\"french\":\"noir\",\"tamil\":\"karuppu\"},{\"english\":\"blue\",\"french\":\"bleu\",\"tamil\":\"neelam\"},{\"english\":\"red\",\"french\":\"rouge\",\"tamil\":\"sivappu\"},{\"english\":\"yellow\",\"french\":\"Jaune\",\"tamil\":\"manjal\"},{\"english\":\"grey\",\"french\":\"gris\",\"tamil\":\"pazhupu\"},{\"english\":\"Green\",\"french\":\"vert\",\"tamil\":\"Pachai\"},{\"english\":\"I\",\"french\":\"je\",\"tamil\":\"Naan\"},{\"english\":\"you\",\"french\":\"toi\",\"tamil\":\"Nee\"},{\"english\":\"We\",\"french\":\"nous\",\"tamil\":\"Naam\"},{\"english\":\"He\",\"french\":\"Il\",\"tamil\":\"Avar\"},{\"english\":\"She\",\"french\":\"Elle\",\"tamil\":\"Aval\"},{\"english\":\"His\",\"french\":\"Le sien\",\"tamil\":\"Ivar\"},{\"english\":\"Her\",\"french\":\"Sa\",\"tamil\":\"Ival\"},{\"english\":\"All of you\",\"french\":\"Vous tous\",\"tamil\":\"Neengal\"},{\"english\":\"Sorry\",\"french\":\"Pardon\",\"tamil\":\"Mannipu\"},{\"english\":\"Thanks\",\"french\":\"Merci\",\"tamil\":\"Nandri\"},{\"english\":\"Taste\",\"french\":\"Goût\",\"tamil\":\"Suvai\"},{\"english\":\"Come\",\"french\":\"Viens\",\"tamil\":\"Vaa\"},{\"english\":\"Go\",\"french\":\"Aller\",\"tamil\":\"Po\"},{\"english\":\"Come(With respect)\",\"french\":\"Venez (En ce qui concerne)\",\"tamil\":\"Vaanga\"},{\"english\":\"Go(With respect)\",\"french\":\"Go (En ce qui concerne)\",\"tamil\":\"Ponga\"},{\"english\":\"Today\",\"french\":\"Aujourd'hui\",\"tamil\":\"Indru\"},{\"english\":\"Yesterday\",\"french\":\"Hier\",\"tamil\":\"Netru\"},{\"english\":\"Tomorrow\",\"french\":\"Demain\",\"tamil\":\"Naalai\"},{\"english\":\"Zero\",\"french\":\"Zéro\",\"tamil\":\"Poojyam\"},{\"english\":\"One\",\"french\":\"Un\",\"tamil\":\"Ondru\"},{\"english\":\"Two\",\"french\":\"Deux\",\"tamil\":\"Irandu\"},{\"english\":\"Three\",\"french\":\"Trois\",\"tamil\":\"Moondru\"},{\"english\":\"Four\",\"french\":\"quatre\",\"tamil\":\"Naangu\"},{\"english\":\"Five\",\"french\":\"Cinq\",\"tamil\":\"Aindhu\"},{\"english\":\"Six\",\"french\":\"Six\",\"tamil\":\"Aaru\"},{\"english\":\"Seven\",\"french\":\"Sept\",\"tamil\":\"Eazhu\"},{\"english\":\"Eight\",\"french\":\"Huit\",\"tamil\":\"Ettu\"},{\"english\":\"Nine\",\"french\":\"Neuf\",\"tamil\":\"Onbadhu\"},{\"english\":\"Ten\",\"french\":\"cette\",\"tamil\":\"Pathu\"},{\"english\":\"Eleven\",\"french\":\"Onze\",\"tamil\":\"Pathinondru (Pathu+Ondru)\"},{\"english\":\"Twelve\",\"french\":\"Douze\",\"tamil\":\"Pannirandu(Pathu+Irandu)\"},{\"english\":\"Thriteen\",\"french\":\"Thriteen\",\"tamil\":\"Pathimoondru\"},{\"english\":\"Twenty\",\"french\":\"Vingt\",\"tamil\":\"IruPathu( Irandu+Pathu)\"},{\"english\":\"how\",\"french\":\"Comment\",\"tamil\":\"Eppadi\"},{\"english\":\"hello\",\"french\":\"salut\",\"tamil\":\"vanakkam\"},{\"english\":\"Good Morning\",\"french\":\"Bonjour\",\"tamil\":\"Kaalai vanakkam\"},{\"english\":\"Good Afternoon\",\"french\":\"Bonne après-midi\",\"tamil\":\"Madhiya vanakkam\"},{\"english\":\"Good Evening\",\"french\":\"Bonsoir\",\"tamil\":\"Maalai vanakkam\"},{\"english\":\"Good Night\",\"french\":\"Bonne nuit\",\"tamil\":\"Iniya iravu\"},{\"english\":\"Morning\",\"french\":\"Matin\",\"tamil\":\"Kaalai\"},{\"english\":\"Afternoon\",\"french\":\"Après midi\",\"tamil\":\"Madhiyam\"},{\"english\":\"Evening\",\"french\":\"Soirée\",\"tamil\":\"Maalai\"},{\"english\":\"Night\",\"french\":\"Nuit\",\"tamil\":\"Iravu\"},{\"english\":\"Hello, What are the food items available ?\",\"french\":\"Salut, Quels sont les produits alimentaires disponibles?\",\"tamil\":\"Vanakkam, enna unavu vagaigal Iruku ?\"},{\"english\":\"Please give me two idlies\",\"french\":\"S'il vous plaît donnez-moi deux idlies\",\"tamil\":\"Enaku Irandu Idly kudunga\"},{\"english\":\"Please Give me one coffee\",\"french\":\"Donnez-moi s'il vous plaît un café\",\"tamil\":\"Enaku oru Coffee kudunga\"},{\"english\":\"No Sugar\",\"french\":\"Sans sucre\",\"tamil\":\"Sarkarai vendam\"},{\"english\":\"I want strong coffee\",\"french\":\"Je veux du café fort\",\"tamil\":\"Enaku Thidamana coffee vendum\"},{\"english\":\"How much is the total ?\",\"french\":\"Quelle est l'addition ?\",\"tamil\":\"Motham Evalavu aachu ?\"},{\"english\":\"Thanks\",\"french\":\"Merci\",\"tamil\":\"Nandri\"},{\"english\":\"Politics\",\"french\":\"Politique\",\"tamil\":\"Arasiyal\"},{\"english\":\"Politician\",\"french\":\"Politicien\",\"tamil\":\"Arasiyalvaadhi\"},{\"english\":\"Male-Man\",\"french\":\"Homme male\",\"tamil\":\"Aan\"},{\"english\":\"Men\",\"french\":\"mais\",\"tamil\":\"Aangal\"},{\"english\":\"Female-woman\",\"french\":\"Femme-femme\",\"tamil\":\"Pen\"},{\"english\":\"Women\",\"french\":\"Femmes\",\"tamil\":\"Pengal\"},{\"english\":\"Democracy\",\"french\":\"La démocratie\",\"tamil\":\"Kudiyarasu\"},{\"english\":\"water\",\"french\":\"l'eau\",\"tamil\":\"thanneer\"},{\"english\":\"Drink(Drink this)\",\"french\":\"Buvez (boire ce)\",\"tamil\":\"kudi\"},{\"english\":\"Little (small amout of)\",\"french\":\"Little (petite quantité de)\",\"tamil\":\"Konjam\"},{\"english\":\"More (more of this)\",\"french\":\"Plus (plus de cela)\",\"tamil\":\"Niraya\"},{\"english\":\"Want\",\"french\":\"Vouloir\",\"tamil\":\"Vendum\"},{\"english\":\"Dont want\",\"french\":\"ne veulent pas que\",\"tamil\":\"Vendam\"},{\"english\":\"Drink little water\",\"french\":\"Buvez peu d'eau\",\"tamil\":\"Konjam Thanneer kudi\"},{\"english\":\"I want more water\",\"french\":\"Je veux plus d'eau\",\"tamil\":\"Niraya Thanneer vendum\"},{\"english\":\"Road\",\"french\":\"Route\",\"tamil\":\"Saalai\"},{\"english\":\"Home\",\"french\":\"Accueil\",\"tamil\":\"Veedu\"},{\"english\":\"Building\",\"french\":\"Bâtiment\",\"tamil\":\"Katidam\"},{\"english\":\"Church\",\"french\":\"Église\",\"tamil\":\"Devalayam\"},{\"english\":\"Temple\",\"french\":\"Temple\",\"tamil\":\"Kovil\"},{\"english\":\"Protect\",\"french\":\"Protéger\",\"tamil\":\"Kaaval\"},{\"english\":\"Police station\",\"french\":\"Police station\",\"tamil\":\"Kaaval Nilayam\"},{\"english\":\"Security(Person)\",\"french\":\"Sécurité (personne)\",\"tamil\":\"Kaavalaali\"},{\"english\":\"Where\",\"french\":\"Où\",\"tamil\":\"Enge\"},{\"english\":\"What\",\"french\":\"Quoi\",\"tamil\":\"Enna\"},{\"english\":\"Which\",\"french\":\"Lequel\",\"tamil\":\"Edhu\"},{\"english\":\"how\",\"french\":\"Comment\",\"tamil\":\"Eppadi\"},{\"english\":\"Why\",\"french\":\"Pourquoi\",\"tamil\":\"Edhuku\"},{\"english\":\"For what\",\"french\":\"Pour quoi\",\"tamil\":\"Edhanaala\"},{\"english\":\"Why\",\"french\":\"Pourquoi\",\"tamil\":\"Yen\"},{\"english\":\"Where\",\"french\":\"Où\",\"tamil\":\"Enga\"},{\"english\":\"Who?\",\"french\":\"Qui?\",\"tamil\":\"Yaar?\"},{\"english\":\"When?\",\"french\":\"Quand?\",\"tamil\":\"Eppohdhu?\"},{\"english\":\"How much?\",\"french\":\"Combien?\",\"tamil\":\"Evvalhavu?\"},{\"english\":\"How many?\",\"french\":\"Combien?\",\"tamil\":\"Eththanai?\"},{\"english\":\"What price?\",\"french\":\"Quel prix?\",\"tamil\":\"Enna Vilai?\"},{\"english\":\"Which ic the truth?\",\"french\":\"Ce qui ic la vérité?\",\"tamil\":\"Edhu Unhmai?\"},{\"english\":\"How is the situation?\",\"french\":\"Quelle est la situation?\",\"tamil\":\"Eppadi Nilaimai?\"},{\"english\":\"Why is it so?\",\"french\":\"Pourquoi est-il?\",\"tamil\":\"Aen Ippadi?\"},{\"english\":\"Where is he?\",\"french\":\"Où est-il?\",\"tamil\":\"Engae Avan?\"},{\"english\":\"Who is he?\",\"french\":\"Qui est-il?\",\"tamil\":\"Yaar Avan?\"},{\"english\":\"When is it required?\",\"french\":\"Quand est-il nécessaire?\",\"tamil\":\"Eppohdhu vaendum?\"},{\"english\":\"What do you want?\",\"french\":\"Qu'est-ce que vous voulez?\",\"tamil\":\"Enna Vaendum\"},{\"english\":\"Which do you want?\",\"french\":\"Lequel veux-tu?\",\"tamil\":\"Edhu Vaendum?\"},{\"english\":\"How do you want?\",\"french\":\"Comment voulez-vous?\",\"tamil\":\"Eppadi Vaendum?\"},{\"english\":\"Why do you want?\",\"french\":\"Pourquoi veux-tu?\",\"tamil\":\"Aen Vaendum?\"},{\"english\":\"Where do you want?\",\"french\":\"Où voulez-vous?\",\"tamil\":\"Engu Vaendum?\"},{\"english\":\"Whom do you) want?\",\"french\":\"Qui vous) voulez?\",\"tamil\":\"Yaar Vaendum?\"},{\"english\":\"How many do you want?\",\"french\":\"Combien en voulez-vous?\",\"tamil\":\"Eththanai Vaendum?\"},{\"english\":\"How much do you want?\",\"french\":\"Combien voulez-vous?\",\"tamil\":\"Evvalhavu Vaendum?\"},{\"english\":\"What is it?\",\"french\":\"Qu'Est-ce que c'est?\",\"tamil\":\"Adhu Enna?\"},{\"english\":\"Which is it?\",\"french\":\"Lequel est-ce?\",\"tamil\":\"Adhu Edhu?\"},{\"english\":\"How is it?\",\"french\":\"Comment c'est?\",\"tamil\":\"Adhu Eppadi?\"},{\"english\":\"Why is it?\",\"french\":\"Pourquoi est-il?\",\"tamil\":\"Adhu Aen?\"},{\"english\":\"Where is it?\",\"french\":\"Où est-ce?\",\"tamil\":\"Adhu Engae?\"},{\"english\":\"When is it?\",\"french\":\"Quand est-il?\",\"tamil\":\"Adhu Eppohdhu?\"},{\"english\":\"How much is it?\",\"french\":\"Combien ça coûte?\",\"tamil\":\"Adhu Evvalhavu?\"},{\"english\":\"I\",\"french\":\"je\",\"tamil\":\"Naan\"},{\"english\":\"He\",\"french\":\"Il\",\"tamil\":\"Avan\"},{\"english\":\"She\",\"french\":\"Elle\",\"tamil\":\"Aval\"},{\"english\":\"You\",\"french\":\"Toi\",\"tamil\":\"Nee\"},{\"english\":\"It\",\"french\":\"Il\",\"tamil\":\"Athu\"},{\"english\":\"A\",\"french\":\"UNE\",\"tamil\":\"Oru\"},{\"english\":\"They\",\"french\":\"Ils\",\"tamil\":\"avargal\"},{\"english\":\"Them\",\"french\":\"Leur\",\"tamil\":\"avargal\"},{\"english\":\"Come\",\"french\":\"Viens\",\"tamil\":\"Va\"},{\"english\":\"Came\",\"french\":\"Venu\",\"tamil\":\"Vanthuttan\"},{\"english\":\"Will come\",\"french\":\"Viendra\",\"tamil\":\"Vanthiruvan\"},{\"english\":\"Open\",\"french\":\"Ouvert\",\"tamil\":\"Thora\"},{\"english\":\"Opened\",\"french\":\"Ouvert\",\"tamil\":\"Thoranthiruke\"},{\"english\":\"Will open\",\"french\":\"S'ouvrira\",\"tamil\":\"Therakum\"},{\"english\":\"Sit\",\"french\":\"Asseoir\",\"tamil\":\"Ukkarru\"},{\"english\":\"Walk\",\"french\":\"Marche\",\"tamil\":\"Nadae\"},{\"english\":\"Eat\",\"french\":\"Manger\",\"tamil\":\"Saapidu\"},{\"english\":\"Drink\",\"french\":\"Boisson\",\"tamil\":\"Kudi\"},{\"english\":\"Win\",\"french\":\"Gagner\",\"tamil\":\"Jayie\"},{\"english\":\"Go\",\"french\":\"Aller\",\"tamil\":\"Po\"},{\"english\":\"Run\",\"french\":\"Courir\",\"tamil\":\"Odu\"},{\"english\":\"I go\",\"french\":\"je vais\",\"tamil\":\"Naan porean\"},{\"english\":\"He goes\",\"french\":\"Il part\",\"tamil\":\"Avan poraan\"},{\"english\":\"He eats an banana\",\"french\":\"Il mange une banane\",\"tamil\":\"Avan vaalai palam saapiduvaan\"},{\"english\":\"He is eating an banana\",\"french\":\"Il mange une banane\",\"tamil\":\"Avan vaalai palam saapiduraan\"},{\"english\":\"He ate an banana\",\"french\":\"Il a mangé une banane\",\"tamil\":\"Avan vaalai palam saapittaan\"},{\"english\":\"I saw the film last week\",\"french\":\"J'ai vu le film la semaine dernière\",\"tamil\":\"Naan poana vaaram padam paarthean\"},{\"english\":\"She came by bus yesterday\",\"french\":\"Elle est venue en bus hier\",\"tamil\":\"Aval nethu pearundhu valiya vandha\"},{\"english\":\"They went to the temple\",\"french\":\"Ils sont allés au temple\",\"tamil\":\"Avankellam kovilluku poannaanga\"},{\"english\":\"He slept the whole night\",\"french\":\"Il a dormi toute la nuit\",\"tamil\":\"Avan mulu rathiriyum thoonkinaan\"},{\"english\":\"He has eaten\",\"french\":\"Il a mangé\",\"tamil\":\"Avan saapittu mudichutaan\"},{\"english\":\"He had eaten\",\"french\":\"Il avait mangé\",\"tamil\":\"Avan saapittaan\"},{\"english\":\"He wrote well in the examination\",\"french\":\"Il a écrit bien dans l'examen\",\"tamil\":\"Avan paritchayila nalla eluthi irukkaan\"},{\"english\":\"He had gone\",\"french\":\"Il est parti\",\"tamil\":\"Avan poittaan\"},{\"english\":\"He had come\",\"french\":\"Il était venu\",\"tamil\":\"Avan vanthutaan\"},{\"english\":\"He will eat\",\"french\":\"Il va manger\",\"tamil\":\"Avan saapiduvaan\"},{\"english\":\"He will go\",\"french\":\"Il ira\",\"tamil\":\"Avan povaan\"},{\"english\":\"He will come\",\"french\":\"Il viendra\",\"tamil\":\"Avan varuvaan\"},{\"english\":\"What is your name?\",\"french\":\"Quel est votre nom?\",\"tamil\":\"Unga peru enna?\"},{\"english\":\"What\",\"french\":\"Quoi\",\"tamil\":\"Enna\"},{\"english\":\"Your\",\"french\":\"Votre\",\"tamil\":\"unga\"},{\"english\":\"Name\",\"french\":\"Nom\",\"tamil\":\"Paer\"},{\"english\":\"What did you do?\",\"french\":\"Qu'est-ce que tu as fait?\",\"tamil\":\"Nee enna panra, neenga enna panreenga\"},{\"english\":\"What should I do?\",\"french\":\"Que devrais-je faire?\",\"tamil\":\"Naan enna seyyanum?\"},{\"english\":\"What are the questions?\",\"french\":\"Quelles sont les questions?\",\"tamil\":\"Enna kelvigal?\"},{\"english\":\"What were the questions?\",\"french\":\"Quelles étaient les questions?\",\"tamil\":\"Enna kelvigal irunthithu?\"},{\"english\":\"What is the last question?\",\"french\":\"Quelle est la dernière question?\",\"tamil\":\"Kadaisi kelvi enna?\"},{\"english\":\"What is written in the letter?\",\"french\":\"Ce qui est écrit dans la lettre?\",\"tamil\":\"Khadithathil enna ezhuthi iruku?\"},{\"english\":\"What you had been told?\",\"french\":\"Qu'est-ce que vous aviez dit?\",\"tamil\":\"Unaku enna solli irunthathu?\"},{\"english\":\"What will be the answer?\",\"french\":\"Quelle sera la réponse?\",\"tamil\":\"Badil enna va irukum?\"},{\"english\":\"Why did you come?\",\"french\":\"Pourquoi es-tu venu?\",\"tamil\":\"Yean vantha?\"},{\"english\":\"Why did you sleep?\",\"french\":\"Pourquoi avez-vous dormi?\",\"tamil\":\"En thoonguray?\"},{\"english\":\"Why did you tell him to go?\",\"french\":\"Pourquoi avez-vous lui dire d'aller?\",\"tamil\":\"Yaen avana poga sonna?\"},{\"english\":\"Why did he bring the bag?\",\"french\":\"Pourquoi at-il mettre le sac?\",\"tamil\":\"Avan yean pai kondu vanthan?\"},{\"english\":\"Why did she pay the money?\",\"french\":\"Pourquoi at-elle payer l'argent?\",\"tamil\":\"Aval yaen kaasu koduthal?\"},{\"english\":\"Why did they sit there?\",\"french\":\"Pourquoi ont-ils assis là?\",\"tamil\":\"Avunga yaen inga utkaanthirukaanga?\"},{\"english\":\"Why do you drive the car?\",\"french\":\"Pourquoi vous conduisez la voiture?\",\"tamil\":\"Yaen car ottina?\"},{\"english\":\"Why are they late for the meeting?\",\"french\":\"Pourquoi sont-ils en retard pour la réunion?\",\"tamil\":\"Yean avunga meeting ku thamadama vanthaanga?\"},{\"english\":\"How did you come?\",\"french\":\"Comment es tu venu?\",\"tamil\":\"Nee eppadi vanthe?\"},{\"english\":\"How did you sleep?\",\"french\":\"As-tu bien dormi?\",\"tamil\":\"Nee epadi thoongina?\"},{\"english\":\"How did you drive?\",\"french\":\"Comment avez-vous conduit?\",\"tamil\":\"Nee epadi oattina?\"},{\"english\":\"How did you write?\",\"french\":\"Comment avez-vous écrit?\",\"tamil\":\"Nee epadi ezhuthina?\"},{\"english\":\"How many apples are there in my hand?\",\"french\":\"Combien de pommes sont là dans ma main?\",\"tamil\":\"Ethana apple enn kaieilla irukku?\"},{\"english\":\"How many did you take?\",\"french\":\"Combien avez-vous pris?\",\"tamil\":\"Ethana nee edutha?\"},{\"english\":\"How much did he pay you?\",\"french\":\"Combien at-il payé?\",\"tamil\":\"Evalavu panam kodutha?\"},{\"english\":\"How much distance to go?\",\"french\":\"Quelle distance pour aller?\",\"tamil\":\"Evalavu thooram poakanum?\"},{\"english\":\"How was the journey yesterday?\",\"french\":\"Comment était hier voyage?\",\"tamil\":\"Nethu payanam epadi irrunthathu?\"},{\"english\":\"Which way did you come?\",\"french\":\"De quel côté êtes-vous arrivé?\",\"tamil\":\"Entha valiya vanthe?\"},{\"english\":\"Which is your favorite color?\",\"french\":\"Quelle est votre couleur préférée?\",\"tamil\":\"Virupamana niram enna?\"},{\"english\":\"In which room did you sleep?\",\"french\":\"Dans quelle pièce avez-vous dormi?\",\"tamil\":\"Entha arailla thoongina?\"},{\"english\":\"Which story did you tell?\",\"french\":\"Quelle histoire avez-vous dit?\",\"tamil\":\"Entha kathaya sonna?\"},{\"english\":\"Which is the sweetest fruit?\",\"french\":\"Quel est le fruit le plus doux?\",\"tamil\":\"Unnaku rumba inipaana palam ethu?\"},{\"english\":\"Which is the best newspaper in Hindi?\",\"french\":\"Quel est le meilleur journal en hindi?\",\"tamil\":\"Entha siethithaal nalla irukkum?\"},{\"english\":\"Which Indian state has the largest population?\",\"french\":\"Quel État indien a la plus grande population?\",\"tamil\":\"Entha indhiya naattu maanilathula romba janathogai irruku?\"},{\"english\":\"Where did you come from?\",\"french\":\"D'où viens-tu?\",\"tamil\":\"Enga irunthu vandha?\"},{\"english\":\"Where did you sleep?\",\"french\":\"Où as-tu dormi?\",\"tamil\":\"Enga thoonguna?\"},{\"english\":\"Where is the manager's cabin?\",\"french\":\"Où se trouve la cabine du gestionnaire?\",\"tamil\":\"Seyalaalar arai enga?\"},{\"english\":\"Where should I go?\",\"french\":\"Où dois-je aller?\",\"tamil\":\"Naan enga poganum?\"},{\"english\":\"Whom should I contact?\",\"french\":\"Qui dois-je contacter?\",\"tamil\":\"Yeara santhikanum?\"},{\"english\":\"Is it a book?\",\"french\":\"Est-ce que c'est un livre?\",\"tamil\":\"Ithu puthakama?\"},{\"english\":\"It is a book\",\"french\":\"C'est un livre\",\"tamil\":\"Ithu puthakam\"},{\"english\":\"Is it the answer?\",\"french\":\"Est-ce la réponse?\",\"tamil\":\"Ithuthaan badhila?\"},{\"english\":\"It is the answer\",\"french\":\"Il est la réponse\",\"tamil\":\"Ithuthaan badhil?\"},{\"english\":\"Will you come with me?\",\"french\":\"Voulez-vous venir avec moi?\",\"tamil\":\"Enkoda varuviya?\"},{\"english\":\"I shall come with you.\",\"french\":\"Je viendrai avec vous.\",\"tamil\":\"Naan wunkoda varuven.\"},{\"english\":\"Will you give me your pen?\",\"french\":\"Voulez-vous me donner votre stylo?\",\"tamil\":\"Peanava kodupeengala?\"},{\"english\":\"Yes, of course.\",\"french\":\"Oui, bien sûr.\",\"tamil\":\"Aama, pinna.\"},{\"english\":\"I love you\",\"french\":\"je t'aime\",\"tamil\":\"Naan Unnai Kadalikiren.\"},{\"english\":\"Can you give me your pen?\",\"french\":\"Pouvez-vous me donner votre stylo?\",\"tamil\":\"Peanava kudukka mudiyuma?\"},{\"english\":\"Can you lift the box?\",\"french\":\"Pouvez-vous soulever la boîte?\",\"tamil\":\"Pettiya thookka mudiyumma?\"},{\"english\":\"Can you write the exam?\",\"french\":\"Pouvez-vous écrire l'examen?\",\"tamil\":\"Paritchai elutha mudiyumma?\"},{\"english\":\"Did you have your lunch?\",\"french\":\"As-tu déjeuné?\",\"tamil\":\"Madhiyaanam saappadu saapittiya?\"},{\"english\":\"good morning\",\"french\":\"Bonjour\",\"tamil\":\"kalaivanakkam\"},{\"english\":\"good evening\",\"french\":\"Bonsoir\",\"tamil\":\"maalai vanakkam\"},{\"english\":\"welcome\",\"french\":\"Bienvenue\",\"tamil\":\"vaazhga\"},{\"english\":\"sorry\",\"french\":\"Pardon\",\"tamil\":\"manichirunga\"},{\"english\":\"take it\",\"french\":\"prends-le\",\"tamil\":\"eduthu kollungal\"},{\"english\":\"thanks\",\"french\":\"Merci\",\"tamil\":\"romba nandri\"},{\"english\":\"how are you?\",\"french\":\"Comment allez-vous?\",\"tamil\":\"eppadi irukkinga or nalamaa?\"},{\"english\":\"and you?\",\"french\":\"et vous?\",\"tamil\":\"nienga?\"},{\"english\":\"good/so\",\"french\":\"bien alors\",\"tamil\":\"sari\"},{\"english\":\"thank you very much\",\"french\":\"Merci beaucoup\",\"tamil\":\"romba nandri\"},{\"english\":\"you are welcome\",\"french\":\"vous êtes les bienvenus\",\"tamil\":\"paravaa illa\"},{\"english\":\"hey,friend\",\"french\":\"Hey, ami\",\"tamil\":\"alo,nanbaa\"},{\"english\":\"i missed you so much\",\"french\":\"tu m'as tellement manqué\",\"tamil\":\"unnai rumba izhanthu vittean\"},{\"english\":\"waht's new\",\"french\":\"quoi de neuf\",\"tamil\":\"eanna seithi?\"},{\"english\":\"nothing much\",\"french\":\"pas grand chose\",\"tamil\":\"onnum illai\"},{\"english\":\"good night\",\"french\":\"bonne nuit\",\"tamil\":\"iravu vanakkam\"},{\"english\":\"see you later\",\"french\":\"à plus tard\",\"tamil\":\"aparam paarkalam\"},{\"english\":\"good bye\",\"french\":\"Au revoir\",\"tamil\":\"poittu varen\"},{\"english\":\"am lost\",\"french\":\"suis perdu\",\"tamil\":\"enakku vazhi theriyala\"},{\"english\":\"can i help you\",\"french\":\"puis-je vous aider\",\"tamil\":\"unakku udavattumaa?\"},{\"english\":\"can you help me?\",\"french\":\"Pouvez-vous m'aider?\",\"tamil\":\"enakku udhavi seivienkala?\"},{\"english\":\"where is the bathroom/pharmacy\",\"french\":\"où est la salle de bain / pharmacie\",\"tamil\":\"kazhivarai/marundukadai engea?\"},{\"english\":\"go straight then turn left/right\",\"french\":\"aller tout droit puis gauche / droite\",\"tamil\":\"neraa ponga idathu valathu thirumunga\"},{\"english\":\"one moment please\",\"french\":\"un instant s'il vous plaît\",\"tamil\":\"oru nimidam\"},{\"english\":\"hold on please\",\"french\":\"tenir s'il vous plaît\",\"tamil\":\"irunga\"},{\"english\":\"how much is this?\",\"french\":\"combien ça coûte?\",\"tamil\":\"idhu evvalavu\"},{\"english\":\"excuse me\",\"french\":\"Excusez-moi\",\"tamil\":\"manikkanum or dhayavu seithu\"},{\"english\":\"come with me\",\"french\":\"viens avec moi\",\"tamil\":\"ennodu vaa\"},{\"english\":\"You\",\"french\":\"Toi\",\"tamil\":\"Nee / Neengal / Unnay / Ungalai\"},{\"english\":\"Your\",\"french\":\"Votre\",\"tamil\":\"Unnudaiya / Ungaludaiya\"},{\"english\":\"Yours\",\"french\":\"Le tiens\",\"tamil\":\"Unnudaiyathu / Ungaludaiyathu\"},{\"english\":\"He\",\"french\":\"Il\",\"tamil\":\"Avan\"},{\"english\":\"She\",\"french\":\"Elle\",\"tamil\":\"Aval\"},{\"english\":\"Him\",\"french\":\"Lui\",\"tamil\":\"Avanay\"},{\"english\":\"Her\",\"french\":\"Sa\",\"tamil\":\"Avalai / Avaludaiyathu\"},{\"english\":\"His\",\"french\":\"Le sien\",\"tamil\":\"Avanudaiya / Avanudaiyathu\"},{\"english\":\"They\",\"french\":\"Ils\",\"tamil\":\"Avargal / Avai\"},{\"english\":\"Their\",\"french\":\"Leur\",\"tamil\":\"Avargaludaiya / Avargaludaiyathu\"},{\"english\":\"Theirs\",\"french\":\"Les leurs\",\"tamil\":\"Avargaludaiyathu / Avaigaludaiyathu\"},{\"english\":\"Them\",\"french\":\"Leur\",\"tamil\":\"Avargalai / Avaigalai\"},{\"english\":\"It\",\"french\":\"Il\",\"tamil\":\"Adhu / Adhai\"},{\"english\":\"Its\",\"french\":\"Ses\",\"tamil\":\"Adhanudaiya / Adhanudaiyathu\"},{\"english\":\"Self\",\"french\":\"Soi\",\"tamil\":\"Thaan\"},{\"english\":\"Myself\",\"french\":\"Moi même\",\"tamil\":\"Naanae\"},{\"english\":\"Yourself\",\"french\":\"Toi même\",\"tamil\":\"Neeyae\"},{\"english\":\"Himself\",\"french\":\"Lui-même\",\"tamil\":\"Avanae\"},{\"english\":\"Itself\",\"french\":\"lui-même\",\"tamil\":\"Adhuvae\"},{\"english\":\"Themselves\",\"french\":\"Se\",\"tamil\":\"Avargalae\"},{\"english\":\"Ourselves\",\"french\":\"Nous-mêmes\",\"tamil\":\"Naamae / Naangalae\"},{\"english\":\"This\",\"french\":\"Cette\",\"tamil\":\"Idhu / Ivan / Ival\"},{\"english\":\"That\",\"french\":\"Cette\",\"tamil\":\"Adhu / Avan / Aval\"},{\"english\":\"These\",\"french\":\"Celles-ci\",\"tamil\":\"Ivaigal / Ivargal\"},{\"english\":\"Those\",\"french\":\"Ceux\",\"tamil\":\"Avargal / Avaigal\"},{\"english\":\"Some\",\"french\":\"Certains\",\"tamil\":\"Sila / Silar\"},{\"english\":\"Somebody\",\"french\":\"quelqu'un\",\"tamil\":\"Yaaroa\"},{\"english\":\"Anybody\",\"french\":\"N'importe qui\",\"tamil\":\"Yaarkilum / Yaaravadhu\"},{\"english\":\"Everybody\",\"french\":\"Tout le monde\",\"tamil\":\"Ellorrum\"},{\"english\":\"Nobody\",\"french\":\"Personne\",\"tamil\":\"Yaarumillai\"},{\"english\":\"Something\",\"french\":\"Quelque chose\",\"tamil\":\"Edhavathu Ondru\"},{\"english\":\"Anything\",\"french\":\"N'importe quoi\",\"tamil\":\"Edhavathu\"},{\"english\":\"Nothing\",\"french\":\"Rien\",\"tamil\":\"Ondrum illai\"},{\"english\":\"Same\",\"french\":\"Même\",\"tamil\":\"Adhey\"},{\"english\":\"Such\",\"french\":\"Tel\",\"tamil\":\"Adhu pondra\"},{\"english\":\"Few\",\"french\":\"Peu\",\"tamil\":\"Konjam / Sila\"},{\"english\":\"Many\",\"french\":\"Beaucoup\",\"tamil\":\"Pala / Palar / Nirayya\"},{\"english\":\"Other\",\"french\":\"Autre\",\"tamil\":\"Martrondru / Vera\"},{\"english\":\"Others\",\"french\":\"Autres\",\"tamil\":\"Pira / Pirar\"},{\"english\":\"Affectionate\",\"french\":\"Affectueux\",\"tamil\":\"Paasammikka / Paasamulla / Priyamulla\"},{\"english\":\"Clever\",\"french\":\"Intelligent\",\"tamil\":\"Thiramaiyana / Buddhisaali\"},{\"english\":\"Generous\",\"french\":\"généreuse\",\"tamil\":\"Dharaala manapaanmai konda\"},{\"english\":\"Innocent\",\"french\":\"Innocent\",\"tamil\":\"Veguliaana\"},{\"english\":\"Humorous\",\"french\":\"Humoristique\",\"tamil\":\"Nagaisuvai unarvulla\"},{\"english\":\"Short tempered\",\"french\":\"court trempé\",\"tamil\":\"Mun Kobam Konda\"},{\"english\":\"Sensible\",\"french\":\"Sensible\",\"tamil\":\"Arivulla\"},{\"english\":\"Well educated\",\"french\":\"Bien éduqué\",\"tamil\":\"Nangu padiththa\"},{\"english\":\"Arrogant\",\"french\":\"Arrogant\",\"tamil\":\"Garvamudaiya / Aanavamulla\"},{\"english\":\"Brave\",\"french\":\"Courageux\",\"tamil\":\"Dhairiyamana\"},{\"english\":\"Dangerous\",\"french\":\"Dangereux\",\"tamil\":\"Aabaththaana\"},{\"english\":\"Helpful\",\"french\":\"Utile\",\"tamil\":\"Udavikaramaana / Payanudaiya\"},{\"english\":\"Indifferent\",\"french\":\"Indifférent\",\"tamil\":\"Alatchiyamaana\"},{\"english\":\"Jealous\",\"french\":\"Jaloux\",\"tamil\":\"Poaraamaiyaana\"},{\"english\":\"Mischivous\",\"french\":\"Mischivous\",\"tamil\":\"Kurumbuthanamaana\"},{\"english\":\"Proud\",\"french\":\"Fier\",\"tamil\":\"Garvamaana/Perumidhamaana\"},{\"english\":\"Sensitive\",\"french\":\"Sensible\",\"tamil\":\"Unarchivasappadum\"},{\"english\":\"Sincere\",\"french\":\"Sincère\",\"tamil\":\"Unmaiyaana\"},{\"english\":\"Strict\",\"french\":\"Strict\",\"tamil\":\"Kandipaana\"},{\"english\":\"Timid\",\"french\":\"Timide\",\"tamil\":\"Dhairiyamilladha\"},{\"english\":\"Violent\",\"french\":\"Violent\",\"tamil\":\"Kodumaiyana, Muradu\"},{\"english\":\"Weak\",\"french\":\"Faible\",\"tamil\":\"Melindha / Valimai Kunriya\"},{\"english\":\"Adament\",\"french\":\"adament\",\"tamil\":\"Pidivathamana\"},{\"english\":\"Efficient\",\"french\":\"Efficace\",\"tamil\":\"Samarthiyamana, Thiramaimikka\"},{\"english\":\"Famous\",\"french\":\"Célèbre\",\"tamil\":\"Pugazh vaaindha\"},{\"english\":\"Gentle\",\"french\":\"Doux\",\"tamil\":\"Mariyaadhaiyaana / Menmaiyaana\"},{\"english\":\"Honest\",\"french\":\"Honnête\",\"tamil\":\"Nermaiyaana\"},{\"english\":\"Kind\",\"french\":\"Gentil\",\"tamil\":\"Anbaana\"},{\"english\":\"Notorious\",\"french\":\"Célèbre\",\"tamil\":\"Theeyavaigallil prabhalamana / Kettap Peyareduththa\"},{\"english\":\"Polite\",\"french\":\"Poli\",\"tamil\":\"Panivaana\"},{\"english\":\"Quiet\",\"french\":\"Silencieux\",\"tamil\":\"Amaithiyaana\"},{\"english\":\"Selfish\",\"french\":\"Égoïste\",\"tamil\":\"Suyanalamaana\"},{\"english\":\"Straight forward\",\"french\":\"Simple\",\"tamil\":\"Olivumaraivartra, Nermaiyulla\"},{\"english\":\"Talented\",\"french\":\"Talentueux\",\"tamil\":\"Thiramaiyana\"},{\"english\":\"Useless\",\"french\":\"Inutile\",\"tamil\":\"Ubayogamatra , Udhavaakarai\"},{\"english\":\"Well off\",\"french\":\"Je gagne bien ma\",\"tamil\":\"Vasathiyulla\"},{\"english\":\"Slippery\",\"french\":\"Glissant\",\"tamil\":\"Vazhukkalaana\"},{\"english\":\"Uneven\",\"french\":\"Inégal\",\"tamil\":\"Samamillaamal\"},{\"english\":\"Narrow\",\"french\":\"Étroit\",\"tamil\":\"Kurugalaana\"},{\"english\":\"Broad\",\"french\":\"Vaste\",\"tamil\":\"Agalamaana\"},{\"english\":\"Congested\",\"french\":\"Congestionné\",\"tamil\":\"Nerisalaana\"},{\"english\":\"Clean\",\"french\":\"Nettoyer\",\"tamil\":\"Suththamaana\"},{\"english\":\"Crowded\",\"french\":\"Bondé\",\"tamil\":\"Kuutamaana / Kuutam Niraindha\"},{\"english\":\"Water logged\",\"french\":\"gorgés d'eau\",\"tamil\":\"Thanneer Thengiya\"},{\"english\":\"Slushy\",\"french\":\"Détrempé\",\"tamil\":\"Saerum Sagathiyumaaga\"},{\"english\":\"Smooth\",\"french\":\"Lisse\",\"tamil\":\"Menmaiyaana\"},{\"english\":\"Convenient\",\"french\":\"Pratique\",\"tamil\":\"Vasathiyaana\"},{\"english\":\"Bright\",\"french\":\"Brillant\",\"tamil\":\"Vellichchamaana\"},{\"english\":\"Airy\",\"french\":\"Airy\",\"tamil\":\"Kartrotamaana\"},{\"english\":\"Big and Spacious\",\"french\":\"Grande et spacieuse\",\"tamil\":\"Periya Visaalamaana\"},{\"english\":\"Stuffy\",\"french\":\"Bouché\",\"tamil\":\"Adaisalaana\"},{\"english\":\"Untidy\",\"french\":\"Désordonné\",\"tamil\":\"Ozhungartra\"},{\"english\":\"Remote\",\"french\":\"Éloigné\",\"tamil\":\"Tholaivil Ulla\"},{\"english\":\"Vacant\",\"french\":\"Vacant\",\"tamil\":\"Gaaliyaga\"},{\"english\":\"Dilapidated\",\"french\":\"Délabré\",\"tamil\":\"Pazhadaintha\"},{\"english\":\"Well lentilated\",\"french\":\"Eh bien lentilated\",\"tamil\":\"Kartrotamaana\"},{\"english\":\"Ago\",\"french\":\"Depuis\",\"tamil\":\"Munbu / Munnadi\"},{\"english\":\"Afterwards\",\"french\":\"Ensuite\",\"tamil\":\"Piragu\"},{\"english\":\"Then\",\"french\":\"ensuite\",\"tamil\":\"Appozhudhu / Piragu\"},{\"english\":\"Lately\",\"french\":\"Dernièrement\",\"tamil\":\"Kalamthazhndhu / Anmaiyil\"},{\"english\":\"Immediately\",\"french\":\"Immédiatement\",\"tamil\":\"Udanae\"},{\"english\":\"Yet\",\"french\":\"Encore\",\"tamil\":\"Idhuvarai / Irundhum\"},{\"english\":\"Daily\",\"french\":\"du quotidien\",\"tamil\":\"Thinasari / Dhinamthoarum\"},{\"english\":\"Weekly\",\"french\":\"Hebdomadaire\",\"tamil\":\"Varanthorum\"},{\"english\":\"Monthly\",\"french\":\"Mensuel\",\"tamil\":\"Madhamthorum\"},{\"english\":\"Yearly\",\"french\":\"Annuel\",\"tamil\":\"Varudamthorum\"},{\"english\":\"Again\",\"french\":\"Encore\",\"tamil\":\"Marupadiyum\"},{\"english\":\"Often\",\"french\":\"Souvent\",\"tamil\":\"Adikkadi\"},{\"english\":\"Always\",\"french\":\"Toujours\",\"tamil\":\"Eppozhudum\"},{\"english\":\"At that time\",\"french\":\"À ce moment-là\",\"tamil\":\"Andha Neraththil\"},{\"english\":\"Before\",\"french\":\"Avant\",\"tamil\":\"Munnal\"},{\"english\":\"Rarely\",\"french\":\"Rarement\",\"tamil\":\"Arithaga\"},{\"english\":\"Early\",\"french\":\"De bonne heure\",\"tamil\":\"Munnadhagavae\"},{\"english\":\"Ever\",\"french\":\"Déjà\",\"tamil\":\"Eppozhudum\"},{\"english\":\"Recently\",\"french\":\"Récemment\",\"tamil\":\"Anmaiyil\"},{\"english\":\"Frequently\",\"french\":\"Fréquemment\",\"tamil\":\"Adikkadi\"},{\"english\":\"Already\",\"french\":\"Déjà\",\"tamil\":\"Munbae\"},{\"english\":\"Quickly\",\"french\":\"Rapidement\",\"tamil\":\"Viraivaga\"},{\"english\":\"Regularly\",\"french\":\"Régulièrement\",\"tamil\":\"Thodarnthu /Muraiyaga /Ozhungaga\"},{\"english\":\"Always\",\"french\":\"Toujours\",\"tamil\":\"Eppozhudum\"},{\"english\":\"Since\",\"french\":\"Puisque\",\"tamil\":\"Irundhu\"},{\"english\":\"Never\",\"french\":\"Jamais\",\"tamil\":\"Oru Podhum illai\"},{\"english\":\"Just now\",\"french\":\"Juste maintenant\",\"tamil\":\"Ipozhudhuthan\"},{\"english\":\"Every day\",\"french\":\"Tous les jours\",\"tamil\":\"Ovvoru naalum / Ovvuru dhinamum\"},{\"english\":\"Once\",\"french\":\"Une fois que\",\"tamil\":\"Oru Murai\"},{\"english\":\"So far\",\"french\":\"Jusque là\",\"tamil\":\"Idhuvarai\"},{\"english\":\"Yesterday\",\"french\":\"Hier\",\"tamil\":\"Netru\"},{\"english\":\"To-day\",\"french\":\"Aujourd'hui\",\"tamil\":\"Indru\"},{\"english\":\"Tomorrow\",\"french\":\"Demain\",\"tamil\":\"Naalai\"},{\"english\":\"For a point of time\",\"french\":\"Pour un point de temps\",\"tamil\":\"Oru kurupitta kaalam varai\"},{\"english\":\"On time\",\"french\":\"À temps\",\"tamil\":\"Kuriththa naeraththil\"},{\"english\":\"In time\",\"french\":\"À l'heure\",\"tamil\":\"Kuriththa naeraththirkul\"},{\"english\":\"Home\",\"french\":\"Accueil\",\"tamil\":\"Veedu / Veetil\"},{\"english\":\"Out\",\"french\":\"En dehors\",\"tamil\":\"Velliyae\"},{\"english\":\"Outside\",\"french\":\"À l'extérieur\",\"tamil\":\"Vellipakkam\"},{\"english\":\"In\",\"french\":\"Dans\",\"tamil\":\"Ullae\"},{\"english\":\"Inside\",\"french\":\"À l'intérieur\",\"tamil\":\"Ullpakkam /Utpakkam\"},{\"english\":\"Anywhere\",\"french\":\"Nulle part\",\"tamil\":\"Endha idathilum\"},{\"english\":\"Somewhere\",\"french\":\"Quelque part\",\"tamil\":\"Engaeyavathu\"},{\"english\":\"Everywhere\",\"french\":\"Partout\",\"tamil\":\"Ella Idangalilum / Ella Idathilum\"},{\"english\":\"Nowhere\",\"french\":\"Nulle part\",\"tamil\":\"Engaeyumillai\"},{\"english\":\"Far away\",\"french\":\"Loin\",\"tamil\":\"Migath tholaivil / Romba dhoorathil\"},{\"english\":\"Here\",\"french\":\"Ici\",\"tamil\":\"Ingae\"},{\"english\":\"There\",\"french\":\"Là\",\"tamil\":\"Angae/ Aear\"},{\"english\":\"Away\",\"french\":\"Un moyen\",\"tamil\":\"Dhuuram\"},{\"english\":\"Off\",\"french\":\"De\",\"tamil\":\"Tholaivil\"},{\"english\":\"Up\",\"french\":\"en haut\",\"tamil\":\"Maelae\"},{\"english\":\"Upstairs\",\"french\":\"En haut\",\"tamil\":\"Maadiyil / Melthalam\"},{\"english\":\"Down\",\"french\":\"Vers le bas\",\"tamil\":\"Kizhae\"},{\"english\":\"Downstairs\",\"french\":\"En bas\",\"tamil\":\"Kizhthalam / kizhthalathil\"},{\"english\":\"Far\",\"french\":\"Loin\",\"tamil\":\"Tholaivil / Dhoorathil\"},{\"english\":\"Politely\",\"french\":\"Poliment\",\"tamil\":\"Mariyathaiyaga\"},{\"english\":\"Honestly\",\"french\":\"Honnêtement\",\"tamil\":\"Nermaiyaga\"},{\"english\":\"Patiently\",\"french\":\"patiemment\",\"tamil\":\"Porumaiyaga\"},{\"english\":\"Warmly\",\"french\":\"Chaleureusement\",\"tamil\":\"Priyamaga\"},{\"english\":\"Obediently\",\"french\":\"Obéissant\",\"tamil\":\"Thazhmaiyaga\"},{\"english\":\"Cleverly\",\"french\":\"Habilement\",\"tamil\":\"Sathuriyamaga\"},{\"english\":\"Boldly\",\"french\":\"Hardiment\",\"tamil\":\"Dhairiyamaga\"},{\"english\":\"Bravely\",\"french\":\"Courageusement\",\"tamil\":\"Thunichalaga\"},{\"english\":\"Perfectly\",\"french\":\"à la perfection\",\"tamil\":\"Kachithamaga\"},{\"english\":\"Sadly\",\"french\":\"Malheureusement\",\"tamil\":\"Soagamaga\"},{\"english\":\"Accidentally\",\"french\":\"Accidentellement\",\"tamil\":\"Ethirparathavidhamaga\"},{\"english\":\"Usually\",\"french\":\"habituellement\",\"tamil\":\"Vazhakamaga\"},{\"english\":\"Generally\",\"french\":\"Généralement\",\"tamil\":\"Poduvaga\"},{\"english\":\"Hardly\",\"french\":\"À peine\",\"tamil\":\"Arithaga\"},{\"english\":\"Normally\",\"french\":\"Normalement\",\"tamil\":\"Pothuvaga\"},{\"english\":\"Slowly\",\"french\":\"Lentement\",\"tamil\":\"Meduvaga\"},{\"english\":\"Quickly\",\"french\":\"Rapidement\",\"tamil\":\"Viraivaga\"},{\"english\":\"Quietly\",\"french\":\"Tranquillement\",\"tamil\":\"Amaithiyaga\"},{\"english\":\"Indirectly\",\"french\":\"Indirectement\",\"tamil\":\"Maraimugamaga\"},{\"english\":\"Mostly\",\"french\":\"La plupart\",\"tamil\":\"Perumpalum\"},{\"english\":\"Indeed\",\"french\":\"En effet\",\"tamil\":\"Unmaiyil\"},{\"english\":\"Luckily\",\"french\":\"Heureusement\",\"tamil\":\"Athirshtavasamaga\"},{\"english\":\"Happily\",\"french\":\"Heureusement\",\"tamil\":\"Sandoshamaga\"},{\"english\":\"Carefully\",\"french\":\"Soigneusement\",\"tamil\":\"Gavanamaga\"},{\"english\":\"Eagerly\",\"french\":\"Vivement\",\"tamil\":\"Arvamaga\"},{\"english\":\"Beautifully\",\"french\":\"magnifiquement\",\"tamil\":\"Azhagaga\"},{\"english\":\"Personally\",\"french\":\"Personnellement\",\"tamil\":\"Andharangamaga / Neradiyaga\"},{\"english\":\"Nicely\",\"french\":\"Bien\",\"tamil\":\"Enimaiyaga\"},{\"english\":\"Seriously\",\"french\":\"Sérieusement\",\"tamil\":\"Abathaga\"},{\"english\":\"Purposely\",\"french\":\"À dessein\",\"tamil\":\"Vendummenrae\"},{\"english\":\"Loudly\",\"french\":\"Bruyamment\",\"tamil\":\"Saththamaga\"},{\"english\":\"Proudly\",\"french\":\"Fièrement\",\"tamil\":\"Garvamaga\"},{\"english\":\"Promptly\",\"french\":\"Rapidement\",\"tamil\":\"Sariyaga/ Kalam thazhthamal\"},{\"english\":\"Strictly\",\"french\":\"Strictement\",\"tamil\":\"Kandippaga\"},{\"english\":\"Thoroughly\",\"french\":\"Complètement\",\"tamil\":\"Muzhumaiyaga\"},{\"english\":\"Unfortunately\",\"french\":\"Malheureusement\",\"tamil\":\"Thurathirshtavasamaga\"},{\"english\":\"Wholly\",\"french\":\"Entièrement\",\"tamil\":\"Muzhumaiyaga / Niraivaga\"},{\"english\":\"After\",\"french\":\"Après\",\"tamil\":\"Piragu\"},{\"english\":\"Although\",\"french\":\"Bien que\",\"tamil\":\"Irundhalum\"},{\"english\":\"And\",\"french\":\"Et\",\"tamil\":\"Melum,Kuda\"},{\"english\":\"Because\",\"french\":\"Parce que\",\"tamil\":\"Yenenil\"},{\"english\":\"Before\",\"french\":\"Avant\",\"tamil\":\"Munnal\"},{\"english\":\"But\",\"french\":\"Mais\",\"tamil\":\"Aanaal, Ere, Munbu\"},{\"english\":\"Except\",\"french\":\"Sauf\",\"tamil\":\"Andri\"},{\"english\":\"For\",\"french\":\"Pour\",\"tamil\":\"Yenenil\"},{\"english\":\"How\",\"french\":\"Comment\",\"tamil\":\"Eppadi,Evvaru\"},{\"english\":\"If\",\"french\":\"Si\",\"tamil\":\"Apadiyaanal\"},{\"english\":\"Neither\",\"french\":\"Ni\",\"tamil\":\"Idhuve enil Adhuvum illai\"},{\"english\":\"Only\",\"french\":\"Seulement\",\"tamil\":\"Aayinum,Eninum\"},{\"english\":\"Or\",\"french\":\"Ou\",\"tamil\":\"Alladhu\"},{\"english\":\"Since\",\"french\":\"Puisque\",\"tamil\":\"Idhu varai\"},{\"english\":\"So\",\"french\":\"Alors\",\"tamil\":\"Endraal\"},{\"english\":\"Than\",\"french\":\"Que\",\"tamil\":\"vida\"},{\"english\":\"That\",\"french\":\"Cette\",\"tamil\":\"Enave,Adhu\"},{\"english\":\"Then\",\"french\":\"ensuite\",\"tamil\":\"Apadiyaanal\"},{\"english\":\"Therefore\",\"french\":\"Donc\",\"tamil\":\"Aagaiyaal\"},{\"english\":\"Though\",\"french\":\"Bien que\",\"tamil\":\"Ena Irundhalum,Endrapodhilum\"},{\"english\":\"As Though\",\"french\":\"Comme si\",\"tamil\":\"Endru irundadhu pola\"},{\"english\":\"Unless\",\"french\":\"Sauf si\",\"tamil\":\"Endrillaamal,Illavidil\"},{\"english\":\"Until\",\"french\":\"Jusqu'à ce que\",\"tamil\":\"Adhuvaraiyil\"},{\"english\":\"Unto\",\"french\":\"Unto\",\"tamil\":\"Varai\"},{\"english\":\"Where as\",\"french\":\"Tandis que\",\"tamil\":\"Apadiyiruka\"},{\"english\":\"While\",\"french\":\"Tandis que\",\"tamil\":\"Ade samayam,Satru neram\"},{\"english\":\"Whether\",\"french\":\"Qu'il s'agisse\",\"tamil\":\"Irandinul Edhuvendru\"},{\"english\":\"Yet\",\"french\":\"Encore\",\"tamil\":\"Melum,Irundhapodhilum\"}]");

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