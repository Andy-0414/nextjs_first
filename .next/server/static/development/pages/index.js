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
  } // TodoItem 삭제


  handleRemoveThis() {
    let {
      item,
      store
    } = this.props;
    store.removeTodo(item);
  } // TodoItem 완료 처리


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
    } = this.props; // TodoItem 컴포넌트 forEach

    const todoItemList = list.map(item => {
      return __jsx(_TodoItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
        item: item,
        key: item.id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }
      });
    });
    return __jsx("ul", {
      className: "todolist",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
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
    _temp,
    _jsxFileName = "C:\\Users\\pjh86\\Desktop\\Project\\nextjs_first\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




let Index = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__["observer"])(_class = (_temp = class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  // 생성자
  constructor(props) {
    super(props);
    this.inputEl = void 0;
    this.handleAppendTodo = this.handleAppendTodo.bind(this);
  } // 랜더링


  render() {
    return __jsx("div", {
      id: "app",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: "todo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }
    }, __jsx("input", {
      type: "text",
      className: "todo__input",
      onKeyPress: this.handleAppendTodo,
      ref: el => this.inputEl = el,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 6
      }
    }), __jsx(_components_TodoList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      list: this.props.store.todolist,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 6
      }
    })));
  } // 엔터 쳤을 시 Todo 추가


  handleAppendTodo(e) {
    if (e.key == "Enter") {
      const {
        value
      } = e.target;
      this.props.store.addTodo({
        name: value,
        isFinished: false
      }); // value 비움

      this.inputEl.value = "";
    }
  }

}, _temp)) || _class) || _class);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub2RvSXRlbS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub2RvTGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vYngtcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIlRvZG9JdGVtIiwiaW5qZWN0Iiwib2JzZXJ2ZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJoYW5kbGVSZW1vdmVUaGlzIiwiYmluZCIsImhhbmRsZVRvZG9GaW5pc2giLCJyZW5kZXIiLCJpdGVtIiwiaXNGaW5pc2hlZCIsIm5hbWUiLCJzdG9yZSIsInJlbW92ZVRvZG8iLCJjb25zb2xlIiwibG9nIiwidXBkYXRlVG9kbyIsIlRvZG9MaXN0IiwibGlzdCIsInRvZG9JdGVtTGlzdCIsIm1hcCIsImlkIiwiSW5kZXgiLCJpbnB1dEVsIiwiaGFuZGxlQXBwZW5kVG9kbyIsImVsIiwidG9kb2xpc3QiLCJlIiwia2V5IiwidmFsdWUiLCJ0YXJnZXQiLCJhZGRUb2RvIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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LGtCQUFVLEVBQUU7QUFGWSxPQUF6QixFQUZxQixDQU1yQjs7QUFDQSxXQUFLYSxPQUFMLENBQWFNLEtBQWIsR0FBcUIsRUFBckI7QUFDQTtBQUNEOztBQTlCeUMsQztBQWlDNUJQLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi9Ub2RvSXRlbS5zY3NzXCI7XHJcbmltcG9ydCB7IElUb2RvSXRlbSB9IGZyb20gXCIuL1RvZG9MaXN0XCI7XHJcbmltcG9ydCB7IG9ic2VydmVyLCBpbmplY3QgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuXHRzdG9yZT86IFN0b3JlO1xyXG5cdGl0ZW06IElUb2RvSXRlbTtcclxufVxyXG5cclxuQGluamVjdChcInN0b3JlXCIpXHJcbkBvYnNlcnZlclxyXG5jbGFzcyBUb2RvSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmhhbmRsZVJlbW92ZVRoaXMgPSB0aGlzLmhhbmRsZVJlbW92ZVRoaXMuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuaGFuZGxlVG9kb0ZpbmlzaCA9IHRoaXMuaGFuZGxlVG9kb0ZpbmlzaC5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IGl0ZW0gfSA9IHRoaXMucHJvcHM7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8bGkgY2xhc3NOYW1lPXtcInRvZG9saXN0X19pdGVtIFwiICsgKGl0ZW0uaXNGaW5pc2hlZCA/IFwiZmluaXNoXCIgOiBcIlwiKX0gb25DbGljaz17dGhpcy5oYW5kbGVUb2RvRmluaXNofT5cclxuXHRcdFx0XHQ8cD57aXRlbS5uYW1lfTwvcD5cclxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlVGhpc30+WDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2xpPlxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdC8vIFRvZG9JdGVtIOyCreygnFxyXG5cdGhhbmRsZVJlbW92ZVRoaXMoKSB7XHJcblx0XHRsZXQgeyBpdGVtLCBzdG9yZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRzdG9yZS5yZW1vdmVUb2RvKGl0ZW0pO1xyXG5cdH1cclxuXHQvLyBUb2RvSXRlbSDsmYTro4wg7LKY66asXHJcblx0aGFuZGxlVG9kb0ZpbmlzaCgpIHtcclxuXHRcdGxldCB7IGl0ZW0gfSA9IHRoaXMucHJvcHM7XHJcblx0XHRpdGVtLmlzRmluaXNoZWQgPSAhaXRlbS5pc0ZpbmlzaGVkO1xyXG5cdFx0Y29uc29sZS5sb2coaXRlbS5pc0ZpbmlzaGVkKTtcclxuXHRcdHRoaXMucHJvcHMuc3RvcmUudXBkYXRlVG9kbyhpdGVtKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9JdGVtO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vVG9kb0xpc3Quc2Nzc1wiO1xyXG5pbXBvcnQgVG9kb0l0ZW0gZnJvbSBcIi4vVG9kb0l0ZW1cIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVG9kb0l0ZW0ge1xyXG5cdGlkPzogbnVtYmVyO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRpc0ZpbmlzaGVkOiBib29sZWFuO1xyXG59XHJcbkBvYnNlcnZlclxyXG5jbGFzcyBUb2RvTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7IGxpc3Q6IElUb2RvSXRlbVtdIH0+IHtcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IGxpc3QgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0Ly8gVG9kb0l0ZW0g7Lu07Y+s64SM7Yq4IGZvckVhY2hcclxuXHRcdGNvbnN0IHRvZG9JdGVtTGlzdCA9IGxpc3QubWFwKChpdGVtKSA9PiB7XHJcblx0XHRcdHJldHVybiA8VG9kb0l0ZW0gaXRlbT17aXRlbX0ga2V5PXtpdGVtLmlkfT48L1RvZG9JdGVtPjtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIDx1bCBjbGFzc05hbWU9XCJ0b2RvbGlzdFwiPnt0b2RvSXRlbUxpc3R9PC91bD47XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVG9kb0xpc3QsIHsgSVRvZG9JdGVtIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9kb0xpc3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuaW1wb3J0IHsgaW5qZWN0LCBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG5cdHN0b3JlOiBTdG9yZTtcclxufVxyXG5cclxuQGluamVjdChcInN0b3JlXCIpXHJcbkBvYnNlcnZlclxyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xyXG5cdGlucHV0RWw6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblx0Ly8g7IOd7ISx7J6QXHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuaGFuZGxlQXBwZW5kVG9kbyA9IHRoaXMuaGFuZGxlQXBwZW5kVG9kby5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHQvLyDrnpzrjZTrp4FcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGlkPVwiYXBwXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b2RvXCI+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0b2RvX19pbnB1dFwiIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlQXBwZW5kVG9kb30gcmVmPXsoZWwpID0+ICh0aGlzLmlucHV0RWwgPSBlbCl9IC8+XHJcblx0XHRcdFx0XHQ8VG9kb0xpc3QgbGlzdD17dGhpcy5wcm9wcy5zdG9yZS50b2RvbGlzdH0+PC9Ub2RvTGlzdD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0Ly8g7JeU7YSwIOyzpOydhCDsi5wgVG9kbyDstpTqsIBcclxuXHRoYW5kbGVBcHBlbmRUb2RvKGU6IFJlYWN0LktleWJvYXJkRXZlbnQpIHtcclxuXHRcdGlmIChlLmtleSA9PSBcIkVudGVyXCIpIHtcclxuXHRcdFx0Y29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHRcdFx0dGhpcy5wcm9wcy5zdG9yZS5hZGRUb2RvKHtcclxuXHRcdFx0XHRuYW1lOiB2YWx1ZSxcclxuXHRcdFx0XHRpc0ZpbmlzaGVkOiBmYWxzZSxcclxuXHRcdFx0fSk7XHJcblx0XHRcdC8vIHZhbHVlIOu5hOybgFxyXG5cdFx0XHR0aGlzLmlucHV0RWwudmFsdWUgPSBcIlwiO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vYngtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==