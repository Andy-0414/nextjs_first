module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.scss":
/*!*************************!*\
  !*** ./pages/_app.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_app.scss */ "./pages/_app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./store.ts");
var _jsxFileName = "C:\\Users\\pjh86\\Desktop\\Project\\nextjs_first\\pages\\_app.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function App({
  Component,
  pageProps
}) {
  // store 사용
  const store = Object(_store__WEBPACK_IMPORTED_MODULE_3__["useStore"])();
  return __jsx(mobx_react__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: store,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 3
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }
  })));
}

/***/ }),

/***/ "./store.ts":
/*!******************!*\
  !*** ./store.ts ***!
  \******************/
/*! exports provided: Store, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _class, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }




Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["useStaticRendering"])(true);
let store;
let Store = (_class = (_temp = class Store {
  constructor() {
    _initializerDefineProperty(this, "todolist", _descriptor, this);
  }

  // TodoItem 추가
  addTodo(item) {
    if (this.todolist.length == 0) item.id = 0;else item.id = this.todolist[this.todolist.length - 1].id + 1;
    this.todolist.push(item);
  } // TodoItem 삭제


  removeTodo(item) {
    let idx = this.todolist.findIndex(i => i.id == item.id);
    if (idx != -1) this.todolist.splice(idx, 1);
  } // TodoItem 갱신


  updateTodo(item) {
    let idx = this.todolist.findIndex(i => i.id == item.id);
    if (idx != -1) this.todolist[idx] = item;
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "todolist", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), _applyDecoratedDescriptor(_class.prototype, "addTodo", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "addTodo"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeTodo", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "removeTodo"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateTodo", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "updateTodo"), _class.prototype)), _class); // store 생성 또는 로드 함수

function initializeStore() {
  var _store2;

  const _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : new Store();

  if (true) return _store;
  if (!store) store = _store;
  return _store;
}

function useStore() {
  const store = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => initializeStore(), []);
  return store;
}

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3RvcmUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9ieFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vYngtcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwidXNlU3RvcmUiLCJ1c2VTdGF0aWNSZW5kZXJpbmciLCJTdG9yZSIsImFkZFRvZG8iLCJpdGVtIiwidG9kb2xpc3QiLCJsZW5ndGgiLCJpZCIsInB1c2giLCJyZW1vdmVUb2RvIiwiaWR4IiwiZmluZEluZGV4IiwiaSIsInNwbGljZSIsInVwZGF0ZVRvZG8iLCJvYnNlcnZhYmxlIiwiYWN0aW9uIiwiaW5pdGlhbGl6ZVN0b3JlIiwiX3N0b3JlIiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBC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Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFwiLi9fYXBwLnNjc3NcIjtcclxuXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgIC8vIHN0b3JlIOyCrOyaqVxyXG5cdGNvbnN0IHN0b3JlID0gdXNlU3RvcmUoKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG5cdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcblx0XHQ8L1Byb3ZpZGVyPlxyXG5cdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWN0aW9uLCBvYnNlcnZhYmxlLCBjb21wdXRlZCwgcnVuSW5BY3Rpb24gfSBmcm9tIFwibW9ieFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0aWNSZW5kZXJpbmcgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElUb2RvSXRlbSB9IGZyb20gXCIuL2NvbXBvbmVudHMvVG9kb0xpc3RcIjtcclxuXHJcbnVzZVN0YXRpY1JlbmRlcmluZyh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKTtcclxuXHJcbmxldCBzdG9yZTtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdG9yZSB7XHJcblx0QG9ic2VydmFibGUgdG9kb2xpc3Q6IElUb2RvSXRlbVtdID0gW107XHJcblxyXG5cdC8vIFRvZG9JdGVtIOy2lOqwgFxyXG5cdEBhY3Rpb25cclxuXHRhZGRUb2RvKGl0ZW06IElUb2RvSXRlbSkge1xyXG5cdFx0aWYgKHRoaXMudG9kb2xpc3QubGVuZ3RoID09IDApIGl0ZW0uaWQgPSAwO1xyXG5cdFx0ZWxzZSBpdGVtLmlkID0gdGhpcy50b2RvbGlzdFt0aGlzLnRvZG9saXN0Lmxlbmd0aCAtIDFdLmlkICsgMTtcclxuXHRcdHRoaXMudG9kb2xpc3QucHVzaChpdGVtKTtcclxuXHR9XHJcblx0Ly8gVG9kb0l0ZW0g7IKt7KCcXHJcblx0QGFjdGlvblxyXG5cdHJlbW92ZVRvZG8oaXRlbTogSVRvZG9JdGVtKSB7XHJcblx0XHRsZXQgaWR4ID0gdGhpcy50b2RvbGlzdC5maW5kSW5kZXgoKGkpID0+IGkuaWQgPT0gaXRlbS5pZCk7XHJcblx0XHRpZiAoaWR4ICE9IC0xKSB0aGlzLnRvZG9saXN0LnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxuXHQvLyBUb2RvSXRlbSDqsLHsi6BcclxuXHRAYWN0aW9uXHJcblx0dXBkYXRlVG9kbyhpdGVtOiBJVG9kb0l0ZW0pIHtcclxuXHRcdGxldCBpZHggPSB0aGlzLnRvZG9saXN0LmZpbmRJbmRleCgoaSkgPT4gaS5pZCA9PSBpdGVtLmlkKTtcclxuXHRcdGlmIChpZHggIT0gLTEpIHRoaXMudG9kb2xpc3RbaWR4XSA9IGl0ZW07XHJcblx0fVxyXG59XHJcblxyXG4vLyBzdG9yZSDsg53shLEg65iQ64qUIOuhnOuTnCDtlajsiJhcclxuZnVuY3Rpb24gaW5pdGlhbGl6ZVN0b3JlKCkge1xyXG5cdGNvbnN0IF9zdG9yZSA9IHN0b3JlID8/IG5ldyBTdG9yZSgpO1xyXG5cclxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIF9zdG9yZTtcclxuXHRpZiAoIXN0b3JlKSBzdG9yZSA9IF9zdG9yZTtcclxuXHJcblx0cmV0dXJuIF9zdG9yZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0b3JlKCkge1xyXG5cdGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoKSwgW10pO1xyXG5cdHJldHVybiBzdG9yZTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb2J4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vYngtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==