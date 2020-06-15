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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/TodoItem.scss":
/*!**********************************!*\
  !*** ./components/TodoItem.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/TodoItem.tsx":
/*!*********************************!*\
  !*** ./components/TodoItem.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TodoItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoItem.scss */ "./components/TodoItem.scss");
/* harmony import */ var _TodoItem_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TodoItem_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);
var _dec,
    _class,
    _jsxFileName = "C:\\Users\\pjh86\\Desktop\\Project\\nextjs_first\\components\\TodoItem.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



let TodoItem = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(_class = class TodoItem extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.handleRemoveThis = this.handleRemoveThis.bind(this);
    this.handleTodoFinish = this.handleTodoFinish.bind(this);
  }

  render() {
    const {
      item
    } = this.props;
    return __jsx("li", {
      className: "todolist__item " + (item.isFinished ? "finish" : ""),
      onClick: this.handleTodoFinish,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 4
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }
    }, item.name), __jsx("button", {
      onClick: this.handleRemoveThis,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }
    }, "X"));
  }

  handleRemoveThis() {
    let {
      item,
      store
    } = this.props;
    store.removeTodo(item);
  }

  handleTodoFinish() {
    let {
      item
    } = this.props;
    item.isFinished = !item.isFinished;
    console.log(item.isFinished);
    this.props.store.updateTodo(item);
  }

}) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (TodoItem);

/***/ }),

/***/ "./components/TodoList.scss":
/*!**********************************!*\
  !*** ./components/TodoList.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/TodoList.tsx":
/*!*********************************!*\
  !*** ./components/TodoList.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TodoList_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoList.scss */ "./components/TodoList.scss");
/* harmony import */ var _TodoList_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TodoList_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoItem */ "./components/TodoItem.tsx");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_3__);
var _class,
    _jsxFileName = "C:\\Users\\pjh86\\Desktop\\Project\\nextjs_first\\components\\TodoList.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





let TodoList = Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__["observer"])(_class = class TodoList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      list
    } = this.props;
    const todoItemList = list.map(item => {
      return __jsx(_TodoItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
        item: item,
        key: item.id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }
      });
    });
    return __jsx("ul", {
      className: "todolist",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 10
      }
    }, todoItemList);
  }

}) || _class;

/* harmony default export */ __webpack_exports__["default"] = (TodoList);

/***/ }),

/***/ "./pages/index.scss":
/*!**************************!*\
  !*** ./pages/index.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TodoList */ "./components/TodoList.tsx");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./pages/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_3__);
var _dec,
    _class,
    _jsxFileName = "C:\\Users\\pjh86\\Desktop\\Project\\nextjs_first\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




let Index = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__["observer"])(_class = class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.handleAppendTodo = this.handleAppendTodo.bind(this);
  }

  render() {
    // const { todoStore } = this.props;
    return __jsx("div", {
      id: "app",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: "todo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }
    }, __jsx("input", {
      type: "text",
      className: "todo__input",
      onKeyPress: this.handleAppendTodo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 6
      }
    }), __jsx(_components_TodoList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      list: this.props.store.todolist,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 6
      }
    })));
  }

  handleAppendTodo(e) {
    if (e.key == "Enter") {
      const {
        value
      } = e.target;
      this.props.store.addTodo({
        name: value,
        isFinished: false
      });
    }
  }

}) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pjh86\Desktop\Project\nextjs_first\pages\index.tsx */"./pages/index.tsx");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub2RvSXRlbS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub2RvTGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vYngtcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIlRvZG9JdGVtIiwiaW5qZWN0Iiwib2JzZXJ2ZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJoYW5kbGVSZW1vdmVUaGlzIiwiYmluZCIsImhhbmRsZVRvZG9GaW5pc2giLCJyZW5kZXIiLCJpdGVtIiwiaXNGaW5pc2hlZCIsIm5hbWUiLCJzdG9yZSIsInJlbW92ZVRvZG8iLCJjb25zb2xlIiwibG9nIiwidXBkYXRlVG9kbyIsIlRvZG9MaXN0IiwibGlzdCIsInRvZG9JdGVtTGlzdCIsIm1hcCIsImlkIiwiSW5kZXgiLCJoYW5kbGVBcHBlbmRUb2RvIiwidG9kb2xpc3QiLCJlIiwia2V5IiwidmFsdWUiLCJ0YXJnZXQiLCJhZGRUb2RvIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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c291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuL1RvZG9JdGVtLnNjc3NcIjtcclxuaW1wb3J0IHsgSVRvZG9JdGVtIH0gZnJvbSBcIi4vVG9kb0xpc3RcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIsIGluamVjdCB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG5cdHN0b3JlPzogU3RvcmU7XHJcblx0aXRlbTogSVRvZG9JdGVtO1xyXG59XHJcblxyXG5AaW5qZWN0KFwic3RvcmVcIilcclxuQG9ic2VydmVyXHJcbmNsYXNzIFRvZG9JdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuaGFuZGxlUmVtb3ZlVGhpcyA9IHRoaXMuaGFuZGxlUmVtb3ZlVGhpcy5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5oYW5kbGVUb2RvRmluaXNoID0gdGhpcy5oYW5kbGVUb2RvRmluaXNoLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgaXRlbSB9ID0gdGhpcy5wcm9wcztcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxsaSBjbGFzc05hbWU9e1widG9kb2xpc3RfX2l0ZW0gXCIgKyAoaXRlbS5pc0ZpbmlzaGVkID8gXCJmaW5pc2hcIiA6IFwiXCIpfSBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvZG9GaW5pc2h9PlxyXG5cdFx0XHRcdDxwPntpdGVtLm5hbWV9PC9wPlxyXG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVSZW1vdmVUaGlzfT5YPC9idXR0b24+XHJcblx0XHRcdDwvbGk+XHJcblx0XHQpO1xyXG5cdH1cclxuXHRoYW5kbGVSZW1vdmVUaGlzKCkge1xyXG5cdFx0bGV0IHsgaXRlbSwgc3RvcmUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0c3RvcmUucmVtb3ZlVG9kbyhpdGVtKTtcclxuXHR9XHJcblx0aGFuZGxlVG9kb0ZpbmlzaCgpIHtcclxuXHRcdGxldCB7IGl0ZW0gfSA9IHRoaXMucHJvcHM7XHJcblx0XHRpdGVtLmlzRmluaXNoZWQgPSAhaXRlbS5pc0ZpbmlzaGVkO1xyXG5cdFx0Y29uc29sZS5sb2coaXRlbS5pc0ZpbmlzaGVkKTtcclxuXHRcdHRoaXMucHJvcHMuc3RvcmUudXBkYXRlVG9kbyhpdGVtKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9JdGVtO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vVG9kb0xpc3Quc2Nzc1wiO1xyXG5pbXBvcnQgVG9kb0l0ZW0gZnJvbSBcIi4vVG9kb0l0ZW1cIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVG9kb0l0ZW0ge1xyXG5cdGlkPzogbnVtYmVyO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRpc0ZpbmlzaGVkOiBib29sZWFuO1xyXG59XHJcbkBvYnNlcnZlclxyXG5jbGFzcyBUb2RvTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7IGxpc3Q6IElUb2RvSXRlbVtdIH0+IHtcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IGxpc3QgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0Y29uc3QgdG9kb0l0ZW1MaXN0ID0gbGlzdC5tYXAoKGl0ZW0pID0+IHtcclxuXHRcdFx0cmV0dXJuIDxUb2RvSXRlbSBpdGVtPXtpdGVtfSBrZXk9e2l0ZW0uaWR9PjwvVG9kb0l0ZW0+O1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gPHVsIGNsYXNzTmFtZT1cInRvZG9saXN0XCI+e3RvZG9JdGVtTGlzdH08L3VsPjtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUb2RvTGlzdCwgeyBJVG9kb0l0ZW0gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ub2RvTGlzdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xyXG5pbXBvcnQgeyBpbmplY3QsIG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcblx0c3RvcmU6IFN0b3JlO1xyXG59XHJcblxyXG5AaW5qZWN0KFwic3RvcmVcIilcclxuQG9ic2VydmVyXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuaGFuZGxlQXBwZW5kVG9kbyA9IHRoaXMuaGFuZGxlQXBwZW5kVG9kby5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHRyZW5kZXIoKSB7XHJcblx0XHQvLyBjb25zdCB7IHRvZG9TdG9yZSB9ID0gdGhpcy5wcm9wcztcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgaWQ9XCJhcHBcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZG9cIj5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInRvZG9fX2lucHV0XCIgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVBcHBlbmRUb2RvfSAvPlxyXG5cdFx0XHRcdFx0PFRvZG9MaXN0IGxpc3Q9e3RoaXMucHJvcHMuc3RvcmUudG9kb2xpc3R9PjwvVG9kb0xpc3Q+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcblx0aGFuZGxlQXBwZW5kVG9kbyhlOiBSZWFjdC5LZXlib2FyZEV2ZW50KSB7XHJcblx0XHRpZiAoZS5rZXkgPT0gXCJFbnRlclwiKSB7XHJcblx0XHRcdGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblx0XHRcdHRoaXMucHJvcHMuc3RvcmUuYWRkVG9kbyh7XHJcblx0XHRcdFx0bmFtZTogdmFsdWUsXHJcblx0XHRcdFx0aXNGaW5pc2hlZDogZmFsc2UsXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vYngtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==