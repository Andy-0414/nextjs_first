(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./components/TodoItem.tsx":
/*!*********************************!*\
  !*** ./components/TodoItem.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TodoItem_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TodoItem.scss */ "./components/TodoItem.scss");
/* harmony import */ var _TodoItem_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_TodoItem_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");







var _dec,
    _class,
    _jsxFileName = "C:\\Users\\pjh86\\Desktop\\Project\\nextjs_first\\components\\TodoItem.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var TodoItem = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["observer"])(_class = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TodoItem, _React$Component);

  var _super = _createSuper(TodoItem);

  function TodoItem(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TodoItem);

    _this = _super.call(this, props);
    _this.handleRemoveThis = _this.handleRemoveThis.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleTodoFinish = _this.handleTodoFinish.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TodoItem, [{
    key: "render",
    value: function render() {
      var item = this.props.item;
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
  }, {
    key: "handleRemoveThis",
    value: function handleRemoveThis() {
      var _this$props = this.props,
          item = _this$props.item,
          store = _this$props.store;
      store.removeTodo(item);
    }
  }, {
    key: "handleTodoFinish",
    value: function handleTodoFinish() {
      var item = this.props.item;
      item.isFinished = !item.isFinished;
      console.log(item.isFinished);
      this.props.store.updateTodo(item);
    }
  }]);

  return TodoItem;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component)) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (TodoItem);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/TodoList.tsx":
/*!*********************************!*\
  !*** ./components/TodoList.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TodoList_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TodoList.scss */ "./components/TodoList.scss");
/* harmony import */ var _TodoList_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TodoList_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TodoItem */ "./components/TodoItem.tsx");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");






var _class,
    _jsxFileName = "C:\\Users\\pjh86\\Desktop\\Project\\nextjs_first\\components\\TodoList.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var TodoList = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["observer"])(_class = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(TodoList, _React$Component);

  var _super = _createSuper(TodoList);

  function TodoList() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TodoList);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TodoList, [{
    key: "render",
    value: function render() {
      var _this = this;

      var list = this.props.list;
      var todoItemList = list.map(function (item) {
        return __jsx(_TodoItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          item: item,
          key: item.id,
          __self: _this,
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
  }]);

  return TodoList;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component)) || _class;

/* harmony default export */ __webpack_exports__["default"] = (TodoList);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/mobx-react-lite/dist/mobxreactlite.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/mobx-react-lite/dist/mobxreactlite.esm.js ***!
  \****************************************************************/
/*! exports provided: Observer, isObserverBatched, isUsingStaticRendering, observer, observerBatching, observerBatchingOptOut, useAsObservableSource, useForceUpdate, useLocalStore, useObserver, useStaticRendering */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return ObserverComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObserverBatched", function() { return isObserverBatched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUsingStaticRendering", function() { return isUsingStaticRendering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return observer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observerBatching", function() { return observerBatching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observerBatchingOptOut", function() { return observerBatchingOptOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAsObservableSource", function() { return useAsObservableSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForceUpdate", function() { return useForceUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLocalStore", function() { return useLocalStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useObserver", function() { return useObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticRendering", function() { return useStaticRendering; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



if (!react__WEBPACK_IMPORTED_MODULE_1__["useState"]) {
  throw new Error("mobx-react-lite requires React with Hooks support");
}

if (!mobx__WEBPACK_IMPORTED_MODULE_0__["spy"]) {
  throw new Error("mobx-react-lite requires mobx at least version 4 to be available");
}

var globalIsUsingStaticRendering = false;
function useStaticRendering(enable) {
  globalIsUsingStaticRendering = enable;
}
function isUsingStaticRendering() {
  return globalIsUsingStaticRendering;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function useForceUpdate() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      setTick = _useState[1];

  var update = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setTick(function (tick) {
      return tick + 1;
    });
  }, []);
  return update;
}
function isPlainObject(value) {
  if (!value || typeof value !== "object") {
    return false;
  }

  var proto = Object.getPrototypeOf(value);
  return !proto || proto === Object.prototype;
}
function getSymbol(name) {
  if (typeof Symbol === "function") {
    return Symbol.for(name);
  }

  return "__$mobx-react " + name + "__";
}
var mockGlobal = {};
function getGlobal() {
  if (typeof window !== "undefined") {
    return window;
  }

  if (typeof global !== "undefined") {
    return global;
  }

  if (typeof self !== "undefined") {
    return self;
  }

  return mockGlobal;
}

var observerBatchingConfiguredSymbol =
/*#__PURE__*/
getSymbol("observerBatching");
var observerBatching = function observerBatching(reactionScheduler) {
  if (typeof reactionScheduler === "function") {
    Object(mobx__WEBPACK_IMPORTED_MODULE_0__["configure"])({
      reactionScheduler: reactionScheduler
    });
  }

  getGlobal()[observerBatchingConfiguredSymbol] = true;
};
var observerBatchingOptOut = function observerBatchingOptOut() {
  Object(mobx__WEBPACK_IMPORTED_MODULE_0__["configure"])({
    reactionScheduler: undefined
  });
  getGlobal()[observerBatchingConfiguredSymbol] = true;
};
var isObserverBatched = function isObserverBatched() {
  return getGlobal()[observerBatchingConfiguredSymbol];
};

function printDebugValue(v) {
  return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["getDependencyTree"])(v);
}

function createTrackingData(reaction) {
  var trackingData = {
    cleanAt: Date.now() + CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS,
    reaction: reaction
  };
  return trackingData;
}
/**
 * The minimum time before we'll clean up a Reaction created in a render
 * for a component that hasn't managed to run its effects. This needs to
 * be big enough to ensure that a component won't turn up and have its
 * effects run without being re-rendered.
 */

var CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS = 10000;
/**
 * The frequency with which we'll check for leaked reactions.
 */

var CLEANUP_TIMER_LOOP_MILLIS = 10000;
/**
 * Reactions created by components that have yet to be fully mounted.
 */

var uncommittedReactionRefs =
/*#__PURE__*/
new Set();
/**
 * Latest 'uncommitted reactions' cleanup timer handle.
 */

var reactionCleanupHandle;

function ensureCleanupTimerRunning() {
  if (reactionCleanupHandle === undefined) {
    reactionCleanupHandle = setTimeout(cleanUncommittedReactions, CLEANUP_TIMER_LOOP_MILLIS);
  }
}

function scheduleCleanupOfReactionIfLeaked(ref) {
  uncommittedReactionRefs.add(ref);
  ensureCleanupTimerRunning();
}
function recordReactionAsCommitted(reactionRef) {
  uncommittedReactionRefs.delete(reactionRef);
}
/**
 * Run by the cleanup timer to dispose any outstanding reactions
 */

function cleanUncommittedReactions() {
  reactionCleanupHandle = undefined; // Loop through all the candidate leaked reactions; those older
  // than CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS get tidied.

  var now = Date.now();
  uncommittedReactionRefs.forEach(function (ref) {
    var tracking = ref.current;

    if (tracking) {
      if (now >= tracking.cleanAt) {
        // It's time to tidy up this leaked reaction.
        tracking.reaction.dispose();
        ref.current = null;
        uncommittedReactionRefs.delete(ref);
      }
    }
  });

  if (uncommittedReactionRefs.size > 0) {
    // We've just finished a round of cleanups but there are still
    // some leak candidates outstanding.
    ensureCleanupTimerRunning();
  }
}

var EMPTY_OBJECT = {};

function observerComponentNameFor(baseComponentName) {
  return "observer" + baseComponentName;
}

var warnedAboutBatching = false;
function useObserver(fn, baseComponentName, options) {
  if (baseComponentName === void 0) {
    baseComponentName = "observed";
  }

  if (options === void 0) {
    options = EMPTY_OBJECT;
  }

  if (isUsingStaticRendering()) {
    return fn();
  }

  if ( true && !warnedAboutBatching && !isObserverBatched()) {
    console.warn("[MobX] You haven't configured observer batching which might result in unexpected behavior in some cases. See more at https://github.com/mobxjs/mobx-react-lite/#observer-batching");
    warnedAboutBatching = true;
  }

  var wantedForceUpdateHook = options.useForceUpdate || useForceUpdate;
  var forceUpdate = wantedForceUpdateHook(); // StrictMode/ConcurrentMode/Suspense may mean that our component is
  // rendered and abandoned multiple times, so we need to track leaked
  // Reactions.

  var reactionTrackingRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);

  if (!reactionTrackingRef.current) {
    // First render for this component (or first time since a previous
    // reaction from an abandoned render was disposed).
    var newReaction = new mobx__WEBPACK_IMPORTED_MODULE_0__["Reaction"](observerComponentNameFor(baseComponentName), function () {
      // Observable has changed, meaning we want to re-render
      // BUT if we're a component that hasn't yet got to the useEffect()
      // stage, we might be a component that _started_ to render, but
      // got dropped, and we don't want to make state changes then.
      // (It triggers warnings in StrictMode, for a start.)
      if (trackingData.mounted) {
        // We have reached useEffect(), so we're mounted, and can trigger an update
        forceUpdate();
      } else {
        // We haven't yet reached useEffect(), so we'll need to trigger a re-render
        // when (and if) useEffect() arrives.  The easiest way to do that is just to
        // drop our current reaction and allow useEffect() to recreate it.
        newReaction.dispose();
        reactionTrackingRef.current = null;
      }
    });
    var trackingData = createTrackingData(newReaction);
    reactionTrackingRef.current = trackingData;
    scheduleCleanupOfReactionIfLeaked(reactionTrackingRef);
  }

  var reaction = reactionTrackingRef.current.reaction;
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useDebugValue(reaction, printDebugValue);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    // Called on first mount only
    recordReactionAsCommitted(reactionTrackingRef);

    if (reactionTrackingRef.current) {
      // Great. We've already got our reaction from our render;
      // all we need to do is to record that it's now mounted,
      // to allow future observable changes to trigger re-renders
      reactionTrackingRef.current.mounted = true;
    } else {
      // The reaction we set up in our render has been disposed.
      // This is either due to bad timings of renderings, e.g. our
      // component was paused for a _very_ long time, and our
      // reaction got cleaned up, or we got a observable change
      // between render and useEffect
      // Re-create the reaction
      reactionTrackingRef.current = {
        reaction: new mobx__WEBPACK_IMPORTED_MODULE_0__["Reaction"](observerComponentNameFor(baseComponentName), function () {
          // We've definitely already been mounted at this point
          forceUpdate();
        }),
        cleanAt: Infinity
      };
      forceUpdate();
    }

    return function () {
      reactionTrackingRef.current.reaction.dispose();
      reactionTrackingRef.current = null;
    };
  }, []); // render the original component, but have the
  // reaction track the observables, so that rendering
  // can be invalidated (see above) once a dependency changes

  var rendering;
  var exception;
  reaction.track(function () {
    try {
      rendering = fn();
    } catch (e) {
      exception = e;
    }
  });

  if (exception) {
    throw exception; // re-throw any exceptions catched during rendering
  }

  return rendering;
}

function observer(baseComponent, options) {
  // The working of observer is explained step by step in this talk: https://www.youtube.com/watch?v=cPF4iBedoF0&feature=youtu.be&t=1307
  if (isUsingStaticRendering()) {
    return baseComponent;
  }

  var realOptions = _extends({
    forwardRef: false
  }, options);

  var baseComponentName = baseComponent.displayName || baseComponent.name;

  var wrappedComponent = function wrappedComponent(props, ref) {
    return useObserver(function () {
      return baseComponent(props, ref);
    }, baseComponentName);
  };

  wrappedComponent.displayName = baseComponentName; // memo; we are not interested in deep updates
  // in props; we assume that if deep objects are changed,
  // this is in observables, which would have been tracked anyway

  var memoComponent;

  if (realOptions.forwardRef) {
    // we have to use forwardRef here because:
    // 1. it cannot go before memo, only after it
    // 2. forwardRef converts the function into an actual component, so we can't let the baseComponent do it
    //    since it wouldn't be a callable function anymore
    memoComponent = Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(wrappedComponent));
  } else {
    memoComponent = Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(wrappedComponent);
  }

  copyStaticProperties(baseComponent, memoComponent);
  memoComponent.displayName = baseComponentName;
  return memoComponent;
} // based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js

var hoistBlackList = {
  $$typeof: true,
  render: true,
  compare: true,
  type: true
};

function copyStaticProperties(base, target) {
  Object.keys(base).forEach(function (key) {
    if (!hoistBlackList[key]) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
    }
  });
}

function ObserverComponent(_ref) {
  var children = _ref.children,
      render = _ref.render;
  var component = children || render;

  if (typeof component !== "function") {
    return null;
  }

  return useObserver(component);
}

ObserverComponent.propTypes = {
  children: ObserverPropsCheck,
  render: ObserverPropsCheck
};
ObserverComponent.displayName = "Observer";

function ObserverPropsCheck(props, key, componentName, location, propFullName) {
  var extraKey = key === "children" ? "render" : "children";
  var hasProp = typeof props[key] === "function";
  var hasExtraProp = typeof props[extraKey] === "function";

  if (hasProp && hasExtraProp) {
    return new Error("MobX Observer: Do not use children and render in the same time in`" + componentName);
  }

  if (hasProp || hasExtraProp) {
    return null;
  }

  return new Error("Invalid prop `" + propFullName + "` of type `" + typeof props[key] + "` supplied to" + " `" + componentName + "`, expected `function`.");
}

function useAsObservableSourceInternal(current, usedByLocalStore) {
  var culprit = usedByLocalStore ? "useLocalStore" : "useAsObservableSource";

  if ( true && usedByLocalStore) {
    var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(current),
        initialSource = _React$useState[0];

    if (initialSource !== undefined && current === undefined || initialSource === undefined && current !== undefined) {
      throw new Error("make sure you never pass `undefined` to " + culprit);
    }
  }

  if (usedByLocalStore && current === undefined) {
    return undefined;
  }

  if ( true && !isPlainObject(current)) {
    throw new Error(culprit + " expects a plain object as " + (usedByLocalStore ? "second" : "first") + " argument");
  }

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(function () {
    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["observable"])(current, {}, {
      deep: false
    });
  }),
      res = _React$useState2[0];

  if ( true && Object.keys(res).length !== Object.keys(current).length) {
    throw new Error("the shape of objects passed to " + culprit + " should be stable");
  }

  Object(mobx__WEBPACK_IMPORTED_MODULE_0__["runInAction"])(function () {
    Object.assign(res, current);
  });
  return res;
}
function useAsObservableSource(current) {
  return useAsObservableSourceInternal(current, false);
}

function useLocalStore(initializer, current) {
  var source = useAsObservableSourceInternal(current, true);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(function () {
    var local = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["observable"])(initializer(source));

    if (isPlainObject(local)) {
      Object(mobx__WEBPACK_IMPORTED_MODULE_0__["runInAction"])(function () {
        Object.keys(local).forEach(function (key) {
          var value = local[key];

          if (typeof value === "function") {
            // @ts-ignore No idea why ts2536 is popping out here
            local[key] = wrapInTransaction(value, local);
          }
        });
      });
    }

    return local;
  })[0];
} // tslint:disable-next-line: ban-types

function wrapInTransaction(fn, context) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["transaction"])(function () {
      return fn.apply(context, args);
    });
  };
}


//# sourceMappingURL=mobxreactlite.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/mobx-react/dist/mobxreact.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/mobx-react/dist/mobxreact.esm.js ***!
  \*******************************************************/
/*! exports provided: Observer, isObserverBatched, isUsingStaticRendering, observerBatching, observerBatchingOptOut, useAsObservableSource, useLocalStore, useObserver, useStaticRendering, MobXProviderContext, PropTypes, Provider, disposeOnUnmount, inject, observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobXProviderContext", function() { return MobXProviderContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropTypes", function() { return PropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disposeOnUnmount", function() { return disposeOnUnmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return inject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return observer; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/mobxreactlite.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["Observer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObserverBatched", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["isObserverBatched"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUsingStaticRendering", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["isUsingStaticRendering"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observerBatching", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observerBatching"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observerBatchingOptOut", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observerBatchingOptOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsObservableSource", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["useAsObservableSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocalStore", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["useLocalStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useObserver", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["useObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStaticRendering", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["useStaticRendering"]; });






var symbolId = 0;

function createSymbol(name) {
  if (typeof Symbol === "function") {
    return Symbol(name);
  }

  var symbol = "__$mobx-react " + name + " (" + symbolId + ")";
  symbolId++;
  return symbol;
}

var createdSymbols = {};
function newSymbol(name) {
  if (!createdSymbols[name]) {
    createdSymbols[name] = createSymbol(name);
  }

  return createdSymbols[name];
}
function shallowEqual(objA, objB) {
  //From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (is(objA, objB)) return true;

  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

function is(x, y) {
  // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
} // based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js


var hoistBlackList = {
  $$typeof: 1,
  render: 1,
  compare: 1,
  type: 1,
  childContextTypes: 1,
  contextType: 1,
  contextTypes: 1,
  defaultProps: 1,
  getDefaultProps: 1,
  getDerivedStateFromError: 1,
  getDerivedStateFromProps: 1,
  mixins: 1,
  propTypes: 1
};
function copyStaticProperties(base, target) {
  var protoProps = Object.getOwnPropertyNames(Object.getPrototypeOf(base));
  Object.getOwnPropertyNames(base).forEach(function (key) {
    if (!hoistBlackList[key] && protoProps.indexOf(key) === -1) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
    }
  });
}
/**
 * Helper to set `prop` to `this` as non-enumerable (hidden prop)
 * @param target
 * @param prop
 * @param value
 */

function setHiddenProp(target, prop, value) {
  if (!Object.hasOwnProperty.call(target, prop)) {
    Object.defineProperty(target, prop, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: value
    });
  } else {
    target[prop] = value;
  }
}
/**
 * Utilities for patching componentWillUnmount, to make sure @disposeOnUnmount works correctly icm with user defined hooks
 * and the handler provided by mobx-react
 */

var mobxMixins =
/*#__PURE__*/
newSymbol("patchMixins");
var mobxPatchedDefinition =
/*#__PURE__*/
newSymbol("patchedDefinition");

function getMixins(target, methodName) {
  var mixins = target[mobxMixins] = target[mobxMixins] || {};
  var methodMixins = mixins[methodName] = mixins[methodName] || {};
  methodMixins.locks = methodMixins.locks || 0;
  methodMixins.methods = methodMixins.methods || [];
  return methodMixins;
}

function wrapper(realMethod, mixins) {
  var _this = this;

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  // locks are used to ensure that mixins are invoked only once per invocation, even on recursive calls
  mixins.locks++;

  try {
    var retVal;

    if (realMethod !== undefined && realMethod !== null) {
      retVal = realMethod.apply(this, args);
    }

    return retVal;
  } finally {
    mixins.locks--;

    if (mixins.locks === 0) {
      mixins.methods.forEach(function (mx) {
        mx.apply(_this, args);
      });
    }
  }
}

function wrapFunction(realMethod, mixins) {
  var fn = function fn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    wrapper.call.apply(wrapper, [this, realMethod, mixins].concat(args));
  };

  return fn;
}

function patch(target, methodName, mixinMethod) {
  var mixins = getMixins(target, methodName);

  if (mixins.methods.indexOf(mixinMethod) < 0) {
    mixins.methods.push(mixinMethod);
  }

  var oldDefinition = Object.getOwnPropertyDescriptor(target, methodName);

  if (oldDefinition && oldDefinition[mobxPatchedDefinition]) {
    // already patched definition, do not repatch
    return;
  }

  var originalMethod = target[methodName];
  var newDefinition = createDefinition(target, methodName, oldDefinition ? oldDefinition.enumerable : undefined, mixins, originalMethod);
  Object.defineProperty(target, methodName, newDefinition);
}

function createDefinition(target, methodName, enumerable, mixins, originalMethod) {
  var _ref;

  var wrappedFunc = wrapFunction(originalMethod, mixins);
  return _ref = {}, _ref[mobxPatchedDefinition] = true, _ref.get = function get() {
    return wrappedFunc;
  }, _ref.set = function set(value) {
    if (this === target) {
      wrappedFunc = wrapFunction(value, mixins);
    } else {
      // when it is an instance of the prototype/a child prototype patch that particular case again separately
      // since we need to store separate values depending on wether it is the actual instance, the prototype, etc
      // e.g. the method for super might not be the same as the method for the prototype which might be not the same
      // as the method for the instance
      var newDefinition = createDefinition(this, methodName, enumerable, mixins, value);
      Object.defineProperty(this, methodName, newDefinition);
    }
  }, _ref.configurable = true, _ref.enumerable = enumerable, _ref;
}

var mobxAdminProperty = mobx__WEBPACK_IMPORTED_MODULE_0__["$mobx"] || "$mobx";
var mobxIsUnmounted =
/*#__PURE__*/
newSymbol("isUnmounted");
var skipRenderKey =
/*#__PURE__*/
newSymbol("skipRender");
var isForcingUpdateKey =
/*#__PURE__*/
newSymbol("isForcingUpdate");
function makeClassComponentObserver(componentClass) {
  var target = componentClass.prototype;
  if (target.componentWillReact) throw new Error("The componentWillReact life-cycle event is no longer supported");

  if (componentClass["__proto__"] !== react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
    if (!target.shouldComponentUpdate) target.shouldComponentUpdate = observerSCU;else if (target.shouldComponentUpdate !== observerSCU) // n.b. unequal check, instead of existence check, as @observer might be on superclass as well
      throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.");
  } // this.props and this.state are made observable, just to make sure @computed fields that
  // are defined inside the component, and which rely on state or props, re-compute if state or props change
  // (otherwise the computed wouldn't update and become stale on props change, since props are not observable)
  // However, this solution is not without it's own problems: https://github.com/mobxjs/mobx-react/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Aobservable-props-or-not+


  makeObservableProp(target, "props");
  makeObservableProp(target, "state");
  var baseRender = target.render;

  target.render = function () {
    return makeComponentReactive.call(this, baseRender);
  };

  patch(target, "componentWillUnmount", function () {
    if (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["isUsingStaticRendering"])() === true) return;

    if (this.render[mobxAdminProperty]) {
      this.render[mobxAdminProperty].dispose();
    } else if (true) {
      var displayName = getDisplayName(this);
      console.warn("The render function for an observer component (" + displayName + ") was modified after MobX attached. This is not supported, since the new function can't be triggered by MobX.");
    }

    this[mobxIsUnmounted] = true;
  });
  return componentClass;
} // Generates a friendly name for debugging

function getDisplayName(comp) {
  return comp.displayName || comp.name || comp.constructor && (comp.constructor.displayName || comp.constructor.name) || "<component>";
}

function makeComponentReactive(render) {
  var _this = this;

  if (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["isUsingStaticRendering"])() === true) return render.call(this);
  /**
   * If props are shallowly modified, react will render anyway,
   * so atom.reportChanged() should not result in yet another re-render
   */

  setHiddenProp(this, skipRenderKey, false);
  /**
   * forceUpdate will re-assign this.props. We don't want that to cause a loop,
   * so detect these changes
   */

  setHiddenProp(this, isForcingUpdateKey, false);
  var initialName = getDisplayName(this);
  var baseRender = render.bind(this);
  var isRenderingPending = false;
  var reaction = new mobx__WEBPACK_IMPORTED_MODULE_0__["Reaction"](initialName + ".render()", function () {
    if (!isRenderingPending) {
      // N.B. Getting here *before mounting* means that a component constructor has side effects (see the relevant test in misc.js)
      // This unidiomatic React usage but React will correctly warn about this so we continue as usual
      // See #85 / Pull #44
      isRenderingPending = true;

      if (_this[mobxIsUnmounted] !== true) {
        var hasError = true;

        try {
          setHiddenProp(_this, isForcingUpdateKey, true);
          if (!_this[skipRenderKey]) react__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype.forceUpdate.call(_this);
          hasError = false;
        } finally {
          setHiddenProp(_this, isForcingUpdateKey, false);
          if (hasError) reaction.dispose();
        }
      }
    }
  });
  reaction["reactComponent"] = this;
  reactiveRender[mobxAdminProperty] = reaction;
  this.render = reactiveRender;

  function reactiveRender() {
    isRenderingPending = false;
    var exception = undefined;
    var rendering = undefined;
    reaction.track(function () {
      try {
        rendering = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateChanges"])(false, baseRender);
      } catch (e) {
        exception = e;
      }
    });

    if (exception) {
      throw exception;
    }

    return rendering;
  }

  return reactiveRender.call(this);
}

function observerSCU(nextProps, nextState) {
  if (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["isUsingStaticRendering"])()) {
    console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.");
  } // update on any state changes (as is the default)


  if (this.state !== nextState) {
    return true;
  } // update if props are shallowly not equal, inspired by PureRenderMixin
  // we could return just 'false' here, and avoid the `skipRender` checks etc
  // however, it is nicer if lifecycle events are triggered like usually,
  // so we return true here if props are shallowly modified.


  return !shallowEqual(this.props, nextProps);
}

function makeObservableProp(target, propName) {
  var valueHolderKey = newSymbol("reactProp_" + propName + "_valueHolder");
  var atomHolderKey = newSymbol("reactProp_" + propName + "_atomHolder");

  function getAtom() {
    if (!this[atomHolderKey]) {
      setHiddenProp(this, atomHolderKey, Object(mobx__WEBPACK_IMPORTED_MODULE_0__["createAtom"])("reactive " + propName));
    }

    return this[atomHolderKey];
  }

  Object.defineProperty(target, propName, {
    configurable: true,
    enumerable: true,
    get: function get() {
      var prevReadState = false;

      if (mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsStart"] && mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsEnd"]) {
        prevReadState = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsStart"])(true);
      }

      getAtom.call(this).reportObserved();

      if (mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsStart"] && mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsEnd"]) {
        Object(mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsEnd"])(prevReadState);
      }

      return this[valueHolderKey];
    },
    set: function set(v) {
      if (!this[isForcingUpdateKey] && !shallowEqual(this[valueHolderKey], v)) {
        setHiddenProp(this, valueHolderKey, v);
        setHiddenProp(this, skipRenderKey, true);
        getAtom.call(this).reportChanged();
        setHiddenProp(this, skipRenderKey, false);
      } else {
        setHiddenProp(this, valueHolderKey, v);
      }
    }
  });
}

var hasSymbol = typeof Symbol === "function" && Symbol.for; // Using react-is had some issues (and operates on elements, not on types), see #608 / #609

var ReactForwardRefSymbol = hasSymbol ?
/*#__PURE__*/
Symbol.for("react.forward_ref") : typeof react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"] === "function" &&
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function (props) {
  return null;
})["$$typeof"];
var ReactMemoSymbol = hasSymbol ?
/*#__PURE__*/
Symbol.for("react.memo") : typeof react__WEBPACK_IMPORTED_MODULE_1__["memo"] === "function" &&
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(function (props) {
  return null;
})["$$typeof"];
/**
 * Observer function / decorator
 */

function observer(component) {
  if (component["isMobxInjector"] === true) {
    console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'");
  }

  if (ReactMemoSymbol && component["$$typeof"] === ReactMemoSymbol) {
    throw new Error("Mobx observer: You are trying to use 'observer' on a function component wrapped in either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");
  } // Unwrap forward refs into `<Observer>` component
  // we need to unwrap the render, because it is the inner render that needs to be tracked,
  // not the ForwardRef HoC


  if (ReactForwardRefSymbol && component["$$typeof"] === ReactForwardRefSymbol) {
    var baseRender = component["render"];
    if (typeof baseRender !== "function") throw new Error("render property of ForwardRef was not a function");
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function ObserverForwardRef() {
      var args = arguments;
      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["Observer"], null, function () {
        return baseRender.apply(undefined, args);
      });
    });
  } // Function component


  if (typeof component === "function" && (!component.prototype || !component.prototype.render) && !component["isReactClass"] && !Object.prototype.isPrototypeOf.call(react__WEBPACK_IMPORTED_MODULE_1__["Component"], component)) {
    return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observer"])(component);
  }

  return makeClassComponentObserver(component);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var MobXProviderContext =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({});
function Provider(props) {
  var children = props.children,
      stores = _objectWithoutPropertiesLoose(props, ["children"]);

  var parentValue = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(MobXProviderContext);
  var mutableProviderRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(_extends({}, parentValue, {}, stores));
  var value = mutableProviderRef.current;

  if (true) {
    var newValue = _extends({}, value, {}, stores); // spread in previous state for the context based stores


    if (!shallowEqual(value, newValue)) {
      throw new Error("MobX Provider: The set of provided stores has changed. See: https://github.com/mobxjs/mobx-react#the-set-of-provided-stores-has-changed-error.");
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MobXProviderContext.Provider, {
    value: value
  }, children);
}
Provider.displayName = "MobXProvider";

/**
 * Store Injection
 */

function createStoreInjector(grabStoresFn, component, injectNames, makeReactive) {
  // Support forward refs
  var Injector = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (props, ref) {
    var newProps = _extends({}, props);

    var context = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(MobXProviderContext);
    Object.assign(newProps, grabStoresFn(context || {}, newProps) || {});

    if (ref) {
      newProps.ref = ref;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(component, newProps);
  });
  if (makeReactive) Injector = observer(Injector);
  Injector["isMobxInjector"] = true; // assigned late to suppress observer warning
  // Static fields from component should be visible on the generated Injector

  copyStaticProperties(component, Injector);
  Injector["wrappedComponent"] = component;
  Injector.displayName = getInjectName(component, injectNames);
  return Injector;
}

function getInjectName(component, injectNames) {
  var displayName;
  var componentName = component.displayName || component.name || component.constructor && component.constructor.name || "Component";
  if (injectNames) displayName = "inject-with-" + injectNames + "(" + componentName + ")";else displayName = "inject(" + componentName + ")";
  return displayName;
}

function grabStoresByName(storeNames) {
  return function (baseStores, nextProps) {
    storeNames.forEach(function (storeName) {
      if (storeName in nextProps // prefer props over stores
      ) return;
      if (!(storeName in baseStores)) throw new Error("MobX injector: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
      nextProps[storeName] = baseStores[storeName];
    });
    return nextProps;
  };
}
/**
 * higher order component that injects stores to a child.
 * takes either a varargs list of strings, which are stores read from the context,
 * or a function that manually maps the available stores from the context to props:
 * storesToProps(mobxStores, props, context) => newProps
 */


function inject() {
  for (var _len = arguments.length, storeNames = new Array(_len), _key = 0; _key < _len; _key++) {
    storeNames[_key] = arguments[_key];
  }

  if (typeof arguments[0] === "function") {
    var grabStoresFn = arguments[0];
    return function (componentClass) {
      return createStoreInjector(grabStoresFn, componentClass, grabStoresFn.name, true);
    };
  } else {
    return function (componentClass) {
      return createStoreInjector(grabStoresByName(storeNames), componentClass, storeNames.join("-"), false);
    };
  }
}

var protoStoreKey =
/*#__PURE__*/
newSymbol("disposeOnUnmountProto");
var instStoreKey =
/*#__PURE__*/
newSymbol("disposeOnUnmountInst");

function runDisposersOnWillUnmount() {
  var _this = this;
  [].concat(this[protoStoreKey] || [], this[instStoreKey] || []).forEach(function (propKeyOrFunction) {
    var prop = typeof propKeyOrFunction === "string" ? _this[propKeyOrFunction] : propKeyOrFunction;

    if (prop !== undefined && prop !== null) {
      if (Array.isArray(prop)) prop.map(function (f) {
        return f();
      });else prop();
    }
  });
}

function disposeOnUnmount(target, propertyKeyOrFunction) {
  if (Array.isArray(propertyKeyOrFunction)) {
    return propertyKeyOrFunction.map(function (fn) {
      return disposeOnUnmount(target, fn);
    });
  }

  var c = Object.getPrototypeOf(target).constructor || Object.getPrototypeOf(target.constructor);
  var c2 = Object.getPrototypeOf(target.constructor);

  if (!(c === react__WEBPACK_IMPORTED_MODULE_1___default.a.Component || c === react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent || c2 === react__WEBPACK_IMPORTED_MODULE_1___default.a.Component || c2 === react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent)) {
    throw new Error("[mobx-react] disposeOnUnmount only supports direct subclasses of React.Component or React.PureComponent.");
  }

  if (typeof propertyKeyOrFunction !== "string" && typeof propertyKeyOrFunction !== "function" && !Array.isArray(propertyKeyOrFunction)) {
    throw new Error("[mobx-react] disposeOnUnmount only works if the parameter is either a property key or a function.");
  } // decorator's target is the prototype, so it doesn't have any instance properties like props


  var isDecorator = typeof propertyKeyOrFunction === "string"; // add property key / function we want run (disposed) to the store

  var componentWasAlreadyModified = !!target[protoStoreKey] || !!target[instStoreKey];
  var store = isDecorator ? // decorators are added to the prototype store
  target[protoStoreKey] || (target[protoStoreKey] = []) : // functions are added to the instance store
  target[instStoreKey] || (target[instStoreKey] = []);
  store.push(propertyKeyOrFunction); // tweak the component class componentWillUnmount if not done already

  if (!componentWasAlreadyModified) {
    patch(target, "componentWillUnmount", runDisposersOnWillUnmount);
  } // return the disposer as is if invoked as a non decorator


  if (typeof propertyKeyOrFunction !== "string") {
    return propertyKeyOrFunction;
  }
}

function createChainableTypeChecker(validator) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      rest[_key - 6] = arguments[_key];
    }

    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["untracked"])(function () {
      componentName = componentName || "<<anonymous>>";
      propFullName = propFullName || propName;

      if (props[propName] == null) {
        if (isRequired) {
          var actual = props[propName] === null ? "null" : "undefined";
          return new Error("The " + location + " `" + propFullName + "` is marked as required " + "in `" + componentName + "`, but its value is `" + actual + "`.");
        }

        return null;
      } else {
        // @ts-ignore rest arg is necessary for some React internals - fails tests otherwise
        return validator.apply(void 0, [props, propName, componentName, location, propFullName].concat(rest));
      }
    });
  }

  var chainedCheckType = checkType.bind(null, false); // Add isRequired to satisfy Requirable

  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
} // Copied from React.PropTypes


function isSymbol(propType, propValue) {
  // Native Symbol.
  if (propType === "symbol") {
    return true;
  } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


  if (propValue["@@toStringTag"] === "Symbol") {
    return true;
  } // Fallback for non-spec compliant Symbols which are polyfilled.


  if (typeof Symbol === "function" && propValue instanceof Symbol) {
    return true;
  }

  return false;
} // Copied from React.PropTypes


function getPropType(propValue) {
  var propType = typeof propValue;

  if (Array.isArray(propValue)) {
    return "array";
  }

  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return "object";
  }

  if (isSymbol(propType, propValue)) {
    return "symbol";
  }

  return propType;
} // This handles more types than `getPropType`. Only used for error messages.
// Copied from React.PropTypes


function getPreciseType(propValue) {
  var propType = getPropType(propValue);

  if (propType === "object") {
    if (propValue instanceof Date) {
      return "date";
    } else if (propValue instanceof RegExp) {
      return "regexp";
    }
  }

  return propType;
}

function createObservableTypeCheckerCreator(allowNativeType, mobxType) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["untracked"])(function () {
      if (allowNativeType) {
        if (getPropType(props[propName]) === mobxType.toLowerCase()) return null;
      }

      var mobxChecker;

      switch (mobxType) {
        case "Array":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableArray"];
          break;

        case "Object":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableObject"];
          break;

        case "Map":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableMap"];
          break;

        default:
          throw new Error("Unexpected mobxType: " + mobxType);
      }

      var propValue = props[propName];

      if (!mobxChecker(propValue)) {
        var preciseType = getPreciseType(propValue);
        var nativeTypeExpectationMessage = allowNativeType ? " or javascript `" + mobxType.toLowerCase() + "`" : "";
        return new Error("Invalid prop `" + propFullName + "` of type `" + preciseType + "` supplied to" + " `" + componentName + "`, expected `mobx.Observable" + mobxType + "`" + nativeTypeExpectationMessage + ".");
      }

      return null;
    });
  });
}

function createObservableArrayOfTypeChecker(allowNativeType, typeChecker) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
      rest[_key2 - 5] = arguments[_key2];
    }

    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["untracked"])(function () {
      if (typeof typeChecker !== "function") {
        return new Error("Property `" + propFullName + "` of component `" + componentName + "` has " + "invalid PropType notation.");
      } else {
        var error = createObservableTypeCheckerCreator(allowNativeType, "Array")(props, propName, componentName, location, propFullName);
        if (error instanceof Error) return error;
        var propValue = props[propName];

        for (var i = 0; i < propValue.length; i++) {
          error = typeChecker.apply(void 0, [propValue, i, componentName, location, propFullName + "[" + i + "]"].concat(rest));
          if (error instanceof Error) return error;
        }

        return null;
      }
    });
  });
}

var observableArray =
/*#__PURE__*/
createObservableTypeCheckerCreator(false, "Array");
var observableArrayOf =
/*#__PURE__*/
createObservableArrayOfTypeChecker.bind(null, false);
var observableMap =
/*#__PURE__*/
createObservableTypeCheckerCreator(false, "Map");
var observableObject =
/*#__PURE__*/
createObservableTypeCheckerCreator(false, "Object");
var arrayOrObservableArray =
/*#__PURE__*/
createObservableTypeCheckerCreator(true, "Array");
var arrayOrObservableArrayOf =
/*#__PURE__*/
createObservableArrayOfTypeChecker.bind(null, true);
var objectOrObservableObject =
/*#__PURE__*/
createObservableTypeCheckerCreator(true, "Object");
var PropTypes = {
  observableArray: observableArray,
  observableArrayOf: observableArrayOf,
  observableMap: observableMap,
  observableObject: observableObject,
  arrayOrObservableArray: arrayOrObservableArray,
  arrayOrObservableArrayOf: arrayOrObservableArrayOf,
  objectOrObservableObject: objectOrObservableObject
};

if (!react__WEBPACK_IMPORTED_MODULE_1__["Component"]) throw new Error("mobx-react requires React to be available");
if (!mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]) throw new Error("mobx-react requires mobx to be available");


//# sourceMappingURL=mobxreact.esm.js.map


/***/ }),

/***/ "./node_modules/mobx/lib/mobx.module.js":
/*!**********************************************!*\
  !*** ./node_modules/mobx/lib/mobx.module.js ***!
  \**********************************************/
/*! exports provided: $mobx, FlowCancellationError, IDerivationState, ObservableMap, ObservableSet, Reaction, _allowStateChanges, _allowStateChangesInsideComputed, _allowStateReadsEnd, _allowStateReadsStart, _endAction, _getAdministration, _getGlobalState, _interceptReads, _isComputingDerivation, _resetGlobalState, _startAction, action, autorun, comparer, computed, configure, createAtom, decorate, entries, extendObservable, flow, get, getAtom, getDebugName, getDependencyTree, getObserverTree, has, intercept, isAction, isArrayLike, isBoxedObservable, isComputed, isComputedProp, isFlowCancellationError, isObservable, isObservableArray, isObservableMap, isObservableObject, isObservableProp, isObservableSet, keys, observable, observe, onBecomeObserved, onBecomeUnobserved, onReactionError, reaction, remove, runInAction, set, spy, toJS, trace, transaction, untracked, values, when */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$mobx", function() { return $mobx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowCancellationError", function() { return FlowCancellationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDerivationState", function() { return IDerivationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableMap", function() { return ObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableSet", function() { return ObservableSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reaction", function() { return Reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateChanges", function() { return allowStateChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateChangesInsideComputed", function() { return allowStateChangesInsideComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateReadsEnd", function() { return allowStateReadsEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateReadsStart", function() { return allowStateReadsStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_endAction", function() { return _endAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getAdministration", function() { return getAdministration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getGlobalState", function() { return getGlobalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_interceptReads", function() { return interceptReads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isComputingDerivation", function() { return isComputingDerivation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_resetGlobalState", function() { return resetGlobalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_startAction", function() { return _startAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autorun", function() { return autorun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comparer", function() { return comparer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAtom", function() { return createAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decorate", function() { return decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return entries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendObservable", function() { return extendObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flow", function() { return flow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAtom", function() { return getAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDebugName", function() { return getDebugName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependencyTree", function() { return getDependencyTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObserverTree", function() { return getObserverTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intercept", function() { return intercept; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAction", function() { return isAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoxedObservable", function() { return isObservableValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputed", function() { return isComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputedProp", function() { return isComputedProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFlowCancellationError", function() { return isFlowCancellationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableArray", function() { return isObservableArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableMap", function() { return isObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableObject", function() { return isObservableObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableProp", function() { return isObservableProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableSet", function() { return isObservableSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBecomeObserved", function() { return onBecomeObserved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBecomeUnobserved", function() { return onBecomeUnobserved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onReactionError", function() { return onReactionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reaction", function() { return reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runInAction", function() { return runInAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spy", function() { return spy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJS", function() { return toJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return trace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transaction", function() { return transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untracked", function() { return untracked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "when", function() { return when; });
/** MobX - (c) Michel Weststrate 2015 - 2020 - MIT Licensed */
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
    };
    return __assign.apply(this, arguments);
};

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

var OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is a production build.";
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
function getNextId() {
    return ++globalState.mobxGuid;
}
function fail(message) {
    invariant(false, message);
    throw "X"; // unreachable
}
function invariant(check, message) {
    if (!check)
        throw new Error("[mobx] " + (message || OBFUSCATED_ERROR));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated(msg, thing) {
    if (false)
        {}
    if (thing) {
        return deprecated("'" + msg + "', use '" + thing + "' instead.");
    }
    if (deprecatedMessages.indexOf(msg) !== -1)
        return false;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
    return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once(func) {
    var invoked = false;
    return function () {
        if (invoked)
            return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop = function () { };
function unique(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
function isObject(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
function addHiddenProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function isPropertyConfigurable(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
}
function assertPropertyConfigurable(object, prop) {
    if ( true && !isPropertyConfigurable(object, prop))
        fail("Cannot make property '" + prop.toString() + "' observable, it is not configurable and writable in the target object");
}
function createInstanceofPredicate(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function (x) {
        return isObject(x) && x[propName] === true;
    };
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */
function isArrayLike(x) {
    return Array.isArray(x) || isObservableArray(x);
}
function isES6Map(thing) {
    return thing instanceof Map;
}
function isES6Set(thing) {
    return thing instanceof Set;
}
/**
 * Returns the following: own keys, prototype keys & own symbol keys, if they are enumerable.
 */
function getPlainObjectKeys(object) {
    var enumerables = new Set();
    for (var key in object)
        enumerables.add(key); // *all* enumerables
    Object.getOwnPropertySymbols(object).forEach(function (k) {
        if (Object.getOwnPropertyDescriptor(object, k).enumerable)
            enumerables.add(k);
    }); // *own* symbols
    // Note: this implementation is missing enumerable, inherited, symbolic property names! That would however pretty expensive to add,
    // as there is no efficient iterator that returns *all* properties
    return Array.from(enumerables);
}
function stringifyKey(key) {
    if (key && key.toString)
        return key.toString();
    else
        return new String(key).toString();
}
function getMapLikeKeys(map) {
    if (isPlainObject(map))
        return Object.keys(map);
    if (Array.isArray(map))
        return map.map(function (_a) {
            var _b = __read(_a, 1), key = _b[0];
            return key;
        });
    if (isES6Map(map) || isObservableMap(map))
        return Array.from(map.keys());
    return fail("Cannot get keys from '" + map + "'");
}
function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
}

var $mobx = Symbol("mobx administration");
var Atom = /** @class */ (function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom(name) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        this.name = name;
        this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
        this.isBeingObserved = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.NOT_TRACKING;
    }
    Atom.prototype.onBecomeObserved = function () {
        if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    Atom.prototype.onBecomeUnobserved = function () {
        if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     * Returns true if there is currently a reactive context.
     */
    Atom.prototype.reportObserved = function () {
        return reportObserved(this);
    };
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    Atom.prototype.reportChanged = function () {
        startBatch();
        propagateChanged(this);
        endBatch();
    };
    Atom.prototype.toString = function () {
        return this.name;
    };
    return Atom;
}());
var isAtom = createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop; }
    if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop; }
    var atom = new Atom(name);
    // default `noop` listener will not initialize the hook Set
    if (onBecomeObservedHandler !== noop) {
        onBecomeObserved(atom, onBecomeObservedHandler);
    }
    if (onBecomeUnobservedHandler !== noop) {
        onBecomeUnobserved(atom, onBecomeUnobservedHandler);
    }
    return atom;
}

function identityComparer(a, b) {
    return a === b;
}
function structuralComparer(a, b) {
    return deepEqual(a, b);
}
function shallowComparer(a, b) {
    return deepEqual(a, b, 1);
}
function defaultComparer(a, b) {
    return Object.is(a, b);
}
var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    default: defaultComparer,
    shallow: shallowComparer
};

var mobxDidRunLazyInitializersSymbol = Symbol("mobx did run lazy initializers");
var mobxPendingDecorators = Symbol("mobx pending decorators");
var enumerableDescriptorCache = {};
var nonEnumerableDescriptorCache = {};
function createPropertyInitializerDescriptor(prop, enumerable) {
    var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
    return (cache[prop] ||
        (cache[prop] = {
            configurable: true,
            enumerable: enumerable,
            get: function () {
                initializeInstance(this);
                return this[prop];
            },
            set: function (value) {
                initializeInstance(this);
                this[prop] = value;
            }
        }));
}
function initializeInstance(target) {
    var e_1, _a;
    if (target[mobxDidRunLazyInitializersSymbol] === true)
        return;
    var decorators = target[mobxPendingDecorators];
    if (decorators) {
        addHiddenProp(target, mobxDidRunLazyInitializersSymbol, true);
        // Build property key array from both strings and symbols
        var keys = __spread(Object.getOwnPropertySymbols(decorators), Object.keys(decorators));
        try {
            for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                var key = keys_1_1.value;
                var d = decorators[key];
                d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
}
function createPropDecorator(propertyInitiallyEnumerable, propertyCreator) {
    return function decoratorFactory() {
        var decoratorArguments;
        var decorator = function decorate(target, prop, descriptor, applyImmediately
        // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
        // as the instance to apply the decorator to equals the target
        ) {
            if (applyImmediately === true) {
                propertyCreator(target, prop, descriptor, target, decoratorArguments);
                return null;
            }
            if ( true && !quacksLikeADecorator(arguments))
                fail("This function is a decorator, but it wasn't invoked like a decorator");
            if (!Object.prototype.hasOwnProperty.call(target, mobxPendingDecorators)) {
                var inheritedDecorators = target[mobxPendingDecorators];
                addHiddenProp(target, mobxPendingDecorators, __assign({}, inheritedDecorators));
            }
            target[mobxPendingDecorators][prop] = {
                prop: prop,
                propertyCreator: propertyCreator,
                descriptor: descriptor,
                decoratorTarget: target,
                decoratorArguments: decoratorArguments
            };
            return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
        };
        if (quacksLikeADecorator(arguments)) {
            // @decorator
            decoratorArguments = EMPTY_ARRAY;
            return decorator.apply(null, arguments);
        }
        else {
            // @decorator(args)
            decoratorArguments = Array.prototype.slice.call(arguments);
            return decorator;
        }
    };
}
function quacksLikeADecorator(args) {
    return (((args.length === 2 || args.length === 3) &&
        (typeof args[1] === "string" || typeof args[1] === "symbol")) ||
        (args.length === 4 && args[3] === true));
}

function deepEnhancer(v, _, name) {
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return observable.array(v, { name: name });
    if (isPlainObject(v))
        return observable.object(v, undefined, { name: name });
    if (isES6Map(v))
        return observable.map(v, { name: name });
    if (isES6Set(v))
        return observable.set(v, { name: name });
    return v;
}
function shallowEnhancer(v, _, name) {
    if (v === undefined || v === null)
        return v;
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v))
        return v;
    if (Array.isArray(v))
        return observable.array(v, { name: name, deep: false });
    if (isPlainObject(v))
        return observable.object(v, undefined, { name: name, deep: false });
    if (isES6Map(v))
        return observable.map(v, { name: name, deep: false });
    if (isES6Set(v))
        return observable.set(v, { name: name, deep: false });
    return fail( true &&
        "The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function referenceEnhancer(newValue) {
    // never turn into an observable
    return newValue;
}
function refStructEnhancer(v, oldValue, name) {
    if ( true && isObservable(v))
        throw "observable.struct should not be used with observable values";
    if (deepEqual(v, oldValue))
        return oldValue;
    return v;
}

function createDecoratorForEnhancer(enhancer) {
    invariant(enhancer);
    var decorator = createPropDecorator(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
        if (true) {
            invariant(!descriptor || !descriptor.get, "@observable cannot be used on getter (property \"" + stringifyKey(propertyName) + "\"), use @computed instead.");
        }
        var initialValue = descriptor
            ? descriptor.initializer
                ? descriptor.initializer.call(target)
                : descriptor.value
            : undefined;
        asObservableObject(target).addObservableProp(propertyName, initialValue, enhancer);
    });
    var res = 
    // Extra process checks, as this happens during module initialization
    typeof process !== "undefined" && process.env && "development" !== "production"
        ? function observableDecorator() {
            // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
            // and simply return the created prop decorator
            if (arguments.length < 2)
                return fail("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
            return decorator.apply(null, arguments);
        }
        : decorator;
    res.enhancer = enhancer;
    return res;
}

// Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases
var defaultCreateObservableOptions = {
    deep: true,
    name: undefined,
    defaultDecorator: undefined,
    proxy: true
};
Object.freeze(defaultCreateObservableOptions);
function assertValidOption(key) {
    if (!/^(deep|name|equals|defaultDecorator|proxy)$/.test(key))
        fail("invalid option for (extend)observable: " + key);
}
function asCreateObservableOptions(thing) {
    if (thing === null || thing === undefined)
        return defaultCreateObservableOptions;
    if (typeof thing === "string")
        return { name: thing, deep: true, proxy: true };
    if (true) {
        if (typeof thing !== "object")
            return fail("expected options object");
        Object.keys(thing).forEach(assertValidOption);
    }
    return thing;
}
var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
function getEnhancerFromOptions(options) {
    return options.defaultDecorator
        ? options.defaultDecorator.enhancer
        : options.deep === false
            ? referenceEnhancer
            : deepEnhancer;
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v, arg2, arg3) {
    // @observable someProp;
    if (typeof arguments[1] === "string" || typeof arguments[1] === "symbol") {
        return deepDecorator.apply(null, arguments);
    }
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    var res = isPlainObject(v)
        ? observable.object(v, arg2, arg3)
        : Array.isArray(v)
            ? observable.array(v, arg2)
            : isES6Map(v)
                ? observable.map(v, arg2)
                : isES6Set(v)
                    ? observable.set(v, arg2)
                    : v;
    // this value could be converted to a new observable data structure, return it
    if (res !== v)
        return res;
    // otherwise, just box it
    fail( true &&
        "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
}
var observableFactories = {
    box: function (value, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("box");
        var o = asCreateObservableOptions(options);
        return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
    },
    array: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("array");
        var o = asCreateObservableOptions(options);
        return createObservableArray(initialValues, getEnhancerFromOptions(o), o.name);
    },
    map: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("map");
        var o = asCreateObservableOptions(options);
        return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
    },
    set: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("set");
        var o = asCreateObservableOptions(options);
        return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
    },
    object: function (props, decorators, options) {
        if (typeof arguments[1] === "string")
            incorrectlyUsedAsDecorator("object");
        var o = asCreateObservableOptions(options);
        if (o.proxy === false) {
            return extendObservable({}, props, decorators, o);
        }
        else {
            var defaultDecorator = getDefaultDecoratorFromObjectOptions(o);
            var base = extendObservable({}, undefined, undefined, o);
            var proxy = createDynamicObservableObject(base);
            extendObservableObjectWithProperties(proxy, props, decorators, defaultDecorator);
            return proxy;
        }
    },
    ref: refDecorator,
    shallow: shallowDecorator,
    deep: deepDecorator,
    struct: refStructDecorator
};
var observable = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
Object.keys(observableFactories).forEach(function (name) { return (observable[name] = observableFactories[name]); });
function incorrectlyUsedAsDecorator(methodName) {
    fail(
    // process.env.NODE_ENV !== "production" &&
    "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

var computedDecorator = createPropDecorator(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
    var get = descriptor.get, set = descriptor.set; // initialValue is the descriptor for get / set props
    // Optimization: faster on decorator target or instance? Assuming target
    // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
    // Forcing instance now, fixes hot reloadig issues on React Native:
    var options = decoratorArgs[0] || {};
    asObservableObject(instance).addComputedProp(instance, propertyName, __assign({ get: get,
        set: set, context: instance }, options));
});
var computedStructDecorator = computedDecorator({ equals: comparer.structural });
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed = function computed(arg1, arg2, arg3) {
    if (typeof arg2 === "string") {
        // @computed
        return computedDecorator.apply(null, arguments);
    }
    if (arg1 !== null && typeof arg1 === "object" && arguments.length === 1) {
        // @computed({ options })
        return computedDecorator.apply(null, arguments);
    }
    // computed(expr, options?)
    if (true) {
        invariant(typeof arg1 === "function", "First argument to `computed` should be an expression.");
        invariant(arguments.length < 3, "Computed takes one or two arguments if used as function");
    }
    var opts = typeof arg2 === "object" ? arg2 : {};
    opts.get = arg1;
    opts.set = typeof arg2 === "function" ? arg2 : opts.set;
    opts.name = opts.name || arg1.name || ""; /* for generated name */
    return new ComputedValue(opts);
};
computed.struct = computedStructDecorator;

var IDerivationState;
(function (IDerivationState) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(IDerivationState || (IDerivationState = {}));
var TraceMode;
(function (TraceMode) {
    TraceMode[TraceMode["NONE"] = 0] = "NONE";
    TraceMode[TraceMode["LOG"] = 1] = "LOG";
    TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));
var CaughtException = /** @class */ (function () {
    function CaughtException(cause) {
        this.cause = cause;
        // Empty
    }
    return CaughtException;
}());
function isCaughtException(e) {
    return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute(derivation) {
    switch (derivation.dependenciesState) {
        case IDerivationState.UP_TO_DATE:
            return false;
        case IDerivationState.NOT_TRACKING:
        case IDerivationState.STALE:
            return true;
        case IDerivationState.POSSIBLY_STALE: {
            // state propagation can occur outside of action/reactive context #2195
            var prevAllowStateReads = allowStateReadsStart(true);
            var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
            var obs = derivation.observing, l = obs.length;
            for (var i = 0; i < l; i++) {
                var obj = obs[i];
                if (isComputedValue(obj)) {
                    if (globalState.disableErrorBoundaries) {
                        obj.get();
                    }
                    else {
                        try {
                            obj.get();
                        }
                        catch (e) {
                            // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                            untrackedEnd(prevUntracked);
                            allowStateReadsEnd(prevAllowStateReads);
                            return true;
                        }
                    }
                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                    // and `derivation` is an observer of `obj`
                    // invariantShouldCompute(derivation)
                    if (derivation.dependenciesState === IDerivationState.STALE) {
                        untrackedEnd(prevUntracked);
                        allowStateReadsEnd(prevAllowStateReads);
                        return true;
                    }
                }
            }
            changeDependenciesStateTo0(derivation);
            untrackedEnd(prevUntracked);
            allowStateReadsEnd(prevAllowStateReads);
            return false;
        }
    }
}
// function invariantShouldCompute(derivation: IDerivation) {
//     const newDepState = (derivation as any).dependenciesState
//     if (
//         process.env.NODE_ENV === "production" &&
//         (newDepState === IDerivationState.POSSIBLY_STALE ||
//             newDepState === IDerivationState.NOT_TRACKING)
//     )
//         fail("Illegal dependency state")
// }
function isComputingDerivation() {
    return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
    var hasObservers = atom.observers.size > 0;
    // Should never be possible to change an observed observable from inside computed, see #798
    if (globalState.computationDepth > 0 && hasObservers)
        fail( true &&
            "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name);
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "strict"))
        fail( true &&
            (globalState.enforceActions
                ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: "
                : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") +
                atom.name);
}
function checkIfStateReadsAreAllowed(observable) {
    if ( true &&
        !globalState.allowStateReads &&
        globalState.observableRequiresReaction) {
        console.warn("[mobx] Observable " + observable.name + " being read outside a reactive context");
    }
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction(derivation, f, context) {
    var prevAllowStateReads = allowStateReadsStart(true);
    // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    changeDependenciesStateTo0(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    var result;
    if (globalState.disableErrorBoundaries === true) {
        result = f.call(context);
    }
    else {
        try {
            result = f.call(context);
        }
        catch (e) {
            result = new CaughtException(e);
        }
    }
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    warnAboutDerivationWithoutDependencies(derivation);
    allowStateReadsEnd(prevAllowStateReads);
    return result;
}
function warnAboutDerivationWithoutDependencies(derivation) {
    if (false)
        {}
    if (derivation.observing.length !== 0)
        return;
    if (globalState.reactionRequiresObservable || derivation.requiresObservable) {
        console.warn("[mobx] Derivation " + derivation.name + " is created/updated without reading any observable value");
    }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing;
    var observing = (derivation.observing = derivation.newObserving);
    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0, l = derivation.unboundDepsCount;
    for (var i = 0; i < l; i++) {
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i)
                observing[i0] = dep;
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (dep.diffValue === 0) {
            removeObserver(dep, derivation);
        }
        dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffValue === 1) {
            dep.diffValue = 0;
            addObserver(dep, derivation);
        }
    }
    // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
        derivation.dependenciesState = lowestNewObservingDerivationState;
        derivation.onBecomeStale();
    }
}
function clearObserving(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing;
    derivation.observing = [];
    var i = obs.length;
    while (i--)
        removeObserver(obs[i], derivation);
    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}
function untracked(action) {
    var prev = untrackedStart();
    try {
        return action();
    }
    finally {
        untrackedEnd(prev);
    }
}
function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
}
function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
    var prev = globalState.allowStateReads;
    globalState.allowStateReads = allowStateReads;
    return prev;
}
function allowStateReadsEnd(prev) {
    globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
        return;
    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i = obs.length;
    while (i--)
        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
}

// we don't use globalState for these in order to avoid possible issues with multiple
// mobx versions
var currentActionId = 0;
var nextActionId = 1;
var functionNameDescriptor = Object.getOwnPropertyDescriptor(function () { }, "name");
var isFunctionNameConfigurable = functionNameDescriptor && functionNameDescriptor.configurable;
function createAction(actionName, fn, ref) {
    if (true) {
        invariant(typeof fn === "function", "`action` can only be invoked on functions");
        if (typeof actionName !== "string" || !actionName)
            fail("actions should have valid names, got: '" + actionName + "'");
    }
    var res = function () {
        return executeAction(actionName, fn, ref || this, arguments);
    };
    res.isMobxAction = true;
    if (true) {
        if (isFunctionNameConfigurable) {
            Object.defineProperty(res, "name", { value: actionName });
        }
    }
    return res;
}
function executeAction(actionName, fn, scope, args) {
    var runInfo = _startAction(actionName, scope, args);
    try {
        return fn.apply(scope, args);
    }
    catch (err) {
        runInfo.error = err;
        throw err;
    }
    finally {
        _endAction(runInfo);
    }
}
function _startAction(actionName, scope, args) {
    var notifySpy = isSpyEnabled() && !!actionName;
    var startTime = 0;
    if (notifySpy && "development" !== "production") {
        startTime = Date.now();
        var l = (args && args.length) || 0;
        var flattendArgs = new Array(l);
        if (l > 0)
            for (var i = 0; i < l; i++)
                flattendArgs[i] = args[i];
        spyReportStart({
            type: "action",
            name: actionName,
            object: scope,
            arguments: flattendArgs
        });
    }
    var prevDerivation = untrackedStart();
    startBatch();
    var prevAllowStateChanges = allowStateChangesStart(true);
    var prevAllowStateReads = allowStateReadsStart(true);
    var runInfo = {
        prevDerivation: prevDerivation,
        prevAllowStateChanges: prevAllowStateChanges,
        prevAllowStateReads: prevAllowStateReads,
        notifySpy: notifySpy,
        startTime: startTime,
        actionId: nextActionId++,
        parentActionId: currentActionId
    };
    currentActionId = runInfo.actionId;
    return runInfo;
}
function _endAction(runInfo) {
    if (currentActionId !== runInfo.actionId) {
        fail("invalid action stack. did you forget to finish an action?");
    }
    currentActionId = runInfo.parentActionId;
    if (runInfo.error !== undefined) {
        globalState.suppressReactionErrors = true;
    }
    allowStateChangesEnd(runInfo.prevAllowStateChanges);
    allowStateReadsEnd(runInfo.prevAllowStateReads);
    endBatch();
    untrackedEnd(runInfo.prevDerivation);
    if (runInfo.notifySpy && "development" !== "production") {
        spyReportEnd({ time: Date.now() - runInfo.startTime });
    }
    globalState.suppressReactionErrors = false;
}
function allowStateChanges(allowStateChanges, func) {
    var prev = allowStateChangesStart(allowStateChanges);
    var res;
    try {
        res = func();
    }
    finally {
        allowStateChangesEnd(prev);
    }
    return res;
}
function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
}
function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
}
function allowStateChangesInsideComputed(func) {
    var prev = globalState.computationDepth;
    globalState.computationDepth = 0;
    var res;
    try {
        res = func();
    }
    finally {
        globalState.computationDepth = prev;
    }
    return res;
}

var ObservableValue = /** @class */ (function (_super) {
    __extends(ObservableValue, _super);
    function ObservableValue(value, enhancer, name, notifySpy, equals) {
        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
        if (notifySpy === void 0) { notifySpy = true; }
        if (equals === void 0) { equals = comparer.default; }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.name = name;
        _this.equals = equals;
        _this.hasUnreportedChange = false;
        _this.value = enhancer(value, undefined, name);
        if (notifySpy && isSpyEnabled() && "development" !== "production") {
            // only notify spy if this is a stand-alone observable
            spyReport({ type: "create", name: _this.name, newValue: "" + _this.value });
        }
        return _this;
    }
    ObservableValue.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableValue.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            if (notifySpy && "development" !== "production") {
                spyReportStart({
                    type: "update",
                    name: this.name,
                    newValue: newValue,
                    oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
    };
    ObservableValue.prototype.prepareNewValue = function (newValue) {
        checkIfStateModificationsAreAllowed(this);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this,
                type: "update",
                newValue: newValue
            });
            if (!change)
                return globalState.UNCHANGED;
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.equals(this.value, newValue) ? globalState.UNCHANGED : newValue;
    };
    ObservableValue.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners(this)) {
            notifyListeners(this, {
                type: "update",
                object: this,
                newValue: newValue,
                oldValue: oldValue
            });
        }
    };
    ObservableValue.prototype.get = function () {
        this.reportObserved();
        return this.dehanceValue(this.value);
    };
    ObservableValue.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableValue.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately)
            listener({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: undefined
            });
        return registerListener(this, listener);
    };
    ObservableValue.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    ObservableValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    ObservableValue.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ObservableValue;
}(Atom));
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue = /** @class */ (function () {
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce a new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue(options) {
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = null; // during tracking it's an array with new observed observers
        this.isBeingObserved = false;
        this.isPendingUnobservation = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.value = new CaughtException(null);
        this.isComputing = false; // to check for cycles
        this.isRunningSetter = false;
        this.isTracing = TraceMode.NONE;
        invariant(options.get, "missing option for computed: get");
        this.derivation = options.get;
        this.name = options.name || "ComputedValue@" + getNextId();
        if (options.set)
            this.setter = createAction(this.name + "-setter", options.set);
        this.equals =
            options.equals ||
                (options.compareStructural || options.struct
                    ? comparer.structural
                    : comparer.default);
        this.scope = options.context;
        this.requiresReaction = !!options.requiresReaction;
        this.keepAlive = !!options.keepAlive;
    }
    ComputedValue.prototype.onBecomeStale = function () {
        propagateMaybeChanged(this);
    };
    ComputedValue.prototype.onBecomeObserved = function () {
        if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    ComputedValue.prototype.onBecomeUnobserved = function () {
        if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ComputedValue.prototype.get = function () {
        if (this.isComputing)
            fail("Cycle detected in computation " + this.name + ": " + this.derivation);
        if (globalState.inBatch === 0 && this.observers.size === 0 && !this.keepAlive) {
            if (shouldCompute(this)) {
                this.warnAboutUntrackedRead();
                startBatch(); // See perf test 'computed memoization'
                this.value = this.computeValue(false);
                endBatch();
            }
        }
        else {
            reportObserved(this);
            if (shouldCompute(this))
                if (this.trackAndCompute())
                    propagateChangeConfirmed(this);
        }
        var result = this.value;
        if (isCaughtException(result))
            throw result.cause;
        return result;
    };
    ComputedValue.prototype.peek = function () {
        var res = this.computeValue(false);
        if (isCaughtException(res))
            throw res.cause;
        return res;
    };
    ComputedValue.prototype.set = function (value) {
        if (this.setter) {
            invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
                this.setter.call(this.scope, value);
            }
            finally {
                this.isRunningSetter = false;
            }
        }
        else
            invariant(false,  true &&
                "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
    };
    ComputedValue.prototype.trackAndCompute = function () {
        if (isSpyEnabled() && "development" !== "production") {
            spyReport({
                object: this.scope,
                type: "compute",
                name: this.name
            });
        }
        var oldValue = this.value;
        var wasSuspended = 
        /* see #1208 */ this.dependenciesState === IDerivationState.NOT_TRACKING;
        var newValue = this.computeValue(true);
        var changed = wasSuspended ||
            isCaughtException(oldValue) ||
            isCaughtException(newValue) ||
            !this.equals(oldValue, newValue);
        if (changed) {
            this.value = newValue;
        }
        return changed;
    };
    ComputedValue.prototype.computeValue = function (track) {
        this.isComputing = true;
        globalState.computationDepth++;
        var res;
        if (track) {
            res = trackDerivedFunction(this, this.derivation, this.scope);
        }
        else {
            if (globalState.disableErrorBoundaries === true) {
                res = this.derivation.call(this.scope);
            }
            else {
                try {
                    res = this.derivation.call(this.scope);
                }
                catch (e) {
                    res = new CaughtException(e);
                }
            }
        }
        globalState.computationDepth--;
        this.isComputing = false;
        return res;
    };
    ComputedValue.prototype.suspend = function () {
        if (!this.keepAlive) {
            clearObserving(this);
            this.value = undefined; // don't hold on to computed value!
        }
    };
    ComputedValue.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart();
                listener({
                    type: "update",
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue.prototype.warnAboutUntrackedRead = function () {
        if (false)
            {}
        if (this.requiresReaction === true) {
            fail("[mobx] Computed value " + this.name + " is read outside a reactive context");
        }
        if (this.isTracing !== TraceMode.NONE) {
            console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
        }
        if (globalState.computedRequiresReaction) {
            console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
        }
    };
    ComputedValue.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    ComputedValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    ComputedValue.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ComputedValue;
}());
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);

/**
 * These values will persist if global state is reset
 */
var persistentKeys = [
    "mobxGuid",
    "spyListeners",
    "enforceActions",
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "allowStateReads",
    "disableErrorBoundaries",
    "runId",
    "UNCHANGED"
];
var MobXGlobals = /** @class */ (function () {
    function MobXGlobals() {
        /**
         * MobXGlobals version.
         * MobX compatiblity with other versions loaded in memory as long as this version matches.
         * It indicates that the global state still stores similar information
         *
         * N.B: this version is unrelated to the package version of MobX, and is only the version of the
         * internal state storage of MobX, and can be the same across many different package versions
         */
        this.version = 5;
        /**
         * globally unique token to signal unchanged
         */
        this.UNCHANGED = {};
        /**
         * Currently running derivation
         */
        this.trackingDerivation = null;
        /**
         * Are we running a computation currently? (not a reaction)
         */
        this.computationDepth = 0;
        /**
         * Each time a derivation is tracked, it is assigned a unique run-id
         */
        this.runId = 0;
        /**
         * 'guid' for general purpose. Will be persisted amongst resets.
         */
        this.mobxGuid = 0;
        /**
         * Are we in a batch block? (and how many of them)
         */
        this.inBatch = 0;
        /**
         * Observables that don't have observers anymore, and are about to be
         * suspended, unless somebody else accesses it in the same batch
         *
         * @type {IObservable[]}
         */
        this.pendingUnobservations = [];
        /**
         * List of scheduled, not yet executed, reactions.
         */
        this.pendingReactions = [];
        /**
         * Are we currently processing reactions?
         */
        this.isRunningReactions = false;
        /**
         * Is it allowed to change observables at this point?
         * In general, MobX doesn't allow that when running computations and React.render.
         * To ensure that those functions stay pure.
         */
        this.allowStateChanges = true;
        /**
         * Is it allowed to read observables at this point?
         * Used to hold the state needed for `observableRequiresReaction`
         */
        this.allowStateReads = true;
        /**
         * If strict mode is enabled, state changes are by default not allowed
         */
        this.enforceActions = false;
        /**
         * Spy callbacks
         */
        this.spyListeners = [];
        /**
         * Globally attached error handlers that react specifically to errors in reactions
         */
        this.globalReactionErrorHandlers = [];
        /**
         * Warn if computed values are accessed outside a reactive context
         */
        this.computedRequiresReaction = false;
        /**
         * (Experimental)
         * Warn if you try to create to derivation / reactive context without accessing any observable.
         */
        this.reactionRequiresObservable = false;
        /**
         * (Experimental)
         * Warn if observables are accessed outside a reactive context
         */
        this.observableRequiresReaction = false;
        /**
         * Allows overwriting of computed properties, useful in tests but not prod as it can cause
         * memory leaks. See https://github.com/mobxjs/mobx/issues/1867
         */
        this.computedConfigurable = false;
        /*
         * Don't catch and rethrow exceptions. This is useful for inspecting the state of
         * the stack when an exception occurs while debugging.
         */
        this.disableErrorBoundaries = false;
        /*
         * If true, we are already handling an exception in an action. Any errors in reactions should be suppressed, as
         * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
         */
        this.suppressReactionErrors = false;
    }
    return MobXGlobals;
}());
var mockGlobal = {};
function getGlobal() {
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    return mockGlobal;
}
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = (function () {
    var global = getGlobal();
    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals)
        canMergeGlobalState = false;
    if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version)
        canMergeGlobalState = false;
    if (!canMergeGlobalState) {
        setTimeout(function () {
            if (!isolateCalled) {
                fail("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
            }
        }, 1);
        return new MobXGlobals();
    }
    else if (global.__mobxGlobals) {
        global.__mobxInstanceCount += 1;
        if (!global.__mobxGlobals.UNCHANGED)
            global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible
        return global.__mobxGlobals;
    }
    else {
        global.__mobxInstanceCount = 1;
        return (global.__mobxGlobals = new MobXGlobals());
    }
})();
function isolateGlobalState() {
    if (globalState.pendingReactions.length ||
        globalState.inBatch ||
        globalState.isRunningReactions)
        fail("isolateGlobalState should be called before MobX is running any reactions");
    isolateCalled = true;
    if (canMergeGlobalState) {
        if (--getGlobal().__mobxInstanceCount === 0)
            getGlobal().__mobxGlobals = undefined;
        globalState = new MobXGlobals();
    }
}
function getGlobalState() {
    return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */
function resetGlobalState() {
    var defaultGlobals = new MobXGlobals();
    for (var key in defaultGlobals)
        if (persistentKeys.indexOf(key) === -1)
            globalState[key] = defaultGlobals[key];
    globalState.allowStateChanges = !globalState.enforceActions;
}

function hasObservers(observable) {
    return observable.observers && observable.observers.size > 0;
}
function getObservers(observable) {
    return observable.observers;
}
// function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }
function addObserver(observable, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    observable.observers.add(node);
    if (observable.lowestObserverState > node.dependenciesState)
        observable.lowestObserverState = node.dependenciesState;
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    observable.observers.delete(node);
    if (observable.observers.size === 0) {
        // deleting last observer
        queueForUnobservation(observable);
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation(observable) {
    if (observable.isPendingUnobservation === false) {
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable.isPendingUnobservation = true;
        globalState.pendingUnobservations.push(observable);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch() {
    globalState.inBatch++;
}
function endBatch() {
    if (--globalState.inBatch === 0) {
        runReactions();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState.pendingUnobservations;
        for (var i = 0; i < list.length; i++) {
            var observable = list[i];
            observable.isPendingUnobservation = false;
            if (observable.observers.size === 0) {
                if (observable.isBeingObserved) {
                    // if this observable had reactive observers, trigger the hooks
                    observable.isBeingObserved = false;
                    observable.onBecomeUnobserved();
                }
                if (observable instanceof ComputedValue) {
                    // computed values are automatically teared down when the last observer leaves
                    // this process happens recursively, this computed might be the last observabe of another, etc..
                    observable.suspend();
                }
            }
        }
        globalState.pendingUnobservations = [];
    }
}
function reportObserved(observable) {
    checkIfStateReadsAreAllowed(observable);
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
        /**
         * Simple optimization, give each derivation run an unique id (runId)
         * Check if last time this observable was accessed the same runId is used
         * if this is the case, the relation is already known
         */
        if (derivation.runId !== observable.lastAccessedBy) {
            observable.lastAccessedBy = derivation.runId;
            // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...
            derivation.newObserving[derivation.unboundDepsCount++] = observable;
            if (!observable.isBeingObserved) {
                observable.isBeingObserved = true;
                observable.onBecomeObserved();
            }
        }
        return true;
    }
    else if (observable.observers.size === 0 && globalState.inBatch > 0) {
        queueForUnobservation(observable);
    }
    return false;
}
// function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged(observable) {
    // invariantLOS(observable, "changed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    // Ideally we use for..of here, but the downcompiled version is really slow...
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
        d.dependenciesState = IDerivationState.STALE;
    });
    // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed(observable) {
    // invariantLOS(observable, "confirmed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE)
            d.dependenciesState = IDerivationState.STALE;
        else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
        )
            observable.lowestObserverState = IDerivationState.UP_TO_DATE;
    });
    // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged(observable) {
    // invariantLOS(observable, "maybe start");
    if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE)
        return;
    observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
    });
    // invariantLOS(observable, "maybe end");
}
function logTraceInfo(derivation, observable) {
    console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");
    if (derivation.isTracing === TraceMode.BREAK) {
        var lines = [];
        printDepTree(getDependencyTree(derivation), lines, 1);
        // prettier-ignore
        new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
}
function printDepTree(tree, lines, depth) {
    if (lines.length >= 1000) {
        lines.push("(and many more)");
        return;
    }
    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
    if (tree.dependencies)
        tree.dependencies.forEach(function (child) { return printDepTree(child, lines, depth + 1); });
}

var Reaction = /** @class */ (function () {
    function Reaction(name, onInvalidate, errorHandler, requiresObservable) {
        if (name === void 0) { name = "Reaction@" + getNextId(); }
        if (requiresObservable === void 0) { requiresObservable = false; }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.errorHandler = errorHandler;
        this.requiresObservable = requiresObservable;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = [];
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
        this.isTracing = TraceMode.NONE;
    }
    Reaction.prototype.onBecomeStale = function () {
        this.schedule();
    };
    Reaction.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState.pendingReactions.push(this);
            runReactions();
        }
    };
    Reaction.prototype.isScheduled = function () {
        return this._isScheduled;
    };
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    Reaction.prototype.runReaction = function () {
        if (!this.isDisposed) {
            startBatch();
            this._isScheduled = false;
            if (shouldCompute(this)) {
                this._isTrackPending = true;
                try {
                    this.onInvalidate();
                    if (this._isTrackPending &&
                        isSpyEnabled() &&
                        "development" !== "production") {
                        // onInvalidate didn't trigger track right away..
                        spyReport({
                            name: this.name,
                            type: "scheduled-reaction"
                        });
                    }
                }
                catch (e) {
                    this.reportExceptionInDerivation(e);
                }
            }
            endBatch();
        }
    };
    Reaction.prototype.track = function (fn) {
        if (this.isDisposed) {
            return;
            // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
        }
        startBatch();
        var notify = isSpyEnabled();
        var startTime;
        if (notify && "development" !== "production") {
            startTime = Date.now();
            spyReportStart({
                name: this.name,
                type: "reaction"
            });
        }
        this._isRunning = true;
        var result = trackDerivedFunction(this, fn, undefined);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving(this);
        }
        if (isCaughtException(result))
            this.reportExceptionInDerivation(result.cause);
        if (notify && "development" !== "production") {
            spyReportEnd({
                time: Date.now() - startTime
            });
        }
        endBatch();
    };
    Reaction.prototype.reportExceptionInDerivation = function (error) {
        var _this = this;
        if (this.errorHandler) {
            this.errorHandler(error, this);
            return;
        }
        if (globalState.disableErrorBoundaries)
            throw error;
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
        if (globalState.suppressReactionErrors) {
            console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)"); // prettier-ignore
        }
        else {
            console.error(message, error);
            /** If debugging brought you here, please, read the above message :-). Tnx! */
        }
        if (isSpyEnabled()) {
            spyReport({
                type: "error",
                name: this.name,
                message: message,
                error: "" + error
            });
        }
        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
    };
    Reaction.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                startBatch();
                clearObserving(this);
                endBatch();
            }
        }
    };
    Reaction.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r[$mobx] = this;
        return r;
    };
    Reaction.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    Reaction.prototype.trace = function (enterBreakPoint) {
        if (enterBreakPoint === void 0) { enterBreakPoint = false; }
        trace(this, enterBreakPoint);
    };
    return Reaction;
}());
function onReactionError(handler) {
    globalState.globalReactionErrorHandlers.push(handler);
    return function () {
        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0)
            globalState.globalReactionErrorHandlers.splice(idx, 1);
    };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function (f) { return f(); };
function runReactions() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState.inBatch > 0 || globalState.isRunningReactions)
        return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++)
            remainingReactions[i].runReaction();
    }
    globalState.isRunningReactions = false;
}
var isReaction = createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
}

function isSpyEnabled() {
    return  true && !!globalState.spyListeners.length;
}
function spyReport(event) {
    if (false)
        {} // dead code elimination can do the rest
    if (!globalState.spyListeners.length)
        return;
    var listeners = globalState.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++)
        listeners[i](event);
}
function spyReportStart(event) {
    if (false)
        {}
    var change = __assign(__assign({}, event), { spyReportStart: true });
    spyReport(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd(change) {
    if (false)
        {}
    if (change)
        spyReport(__assign(__assign({}, change), { spyReportEnd: true }));
    else
        spyReport(END_EVENT);
}
function spy(listener) {
    if (false) {}
    else {
        globalState.spyListeners.push(listener);
        return once(function () {
            globalState.spyListeners = globalState.spyListeners.filter(function (l) { return l !== listener; });
        });
    }
}

function dontReassignFields() {
    fail( true && "@action fields are not reassignable");
}
function namedActionDecorator(name) {
    return function (target, prop, descriptor) {
        if (descriptor) {
            if ( true && descriptor.get !== undefined) {
                return fail("@action cannot be used with getters");
            }
            // babel / typescript
            // @action method() { }
            if (descriptor.value) {
                // typescript
                return {
                    value: createAction(name, descriptor.value),
                    enumerable: false,
                    configurable: true,
                    writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)
                };
            }
            // babel only: @action method = () => {}
            var initializer_1 = descriptor.initializer;
            return {
                enumerable: false,
                configurable: true,
                writable: true,
                initializer: function () {
                    // N.B: we can't immediately invoke initializer; this would be wrong
                    return createAction(name, initializer_1.call(this));
                }
            };
        }
        // bound instance methods
        return actionFieldDecorator(name).apply(this, arguments);
    };
}
function actionFieldDecorator(name) {
    // Simple property that writes on first invocation to the current instance
    return function (target, prop, descriptor) {
        Object.defineProperty(target, prop, {
            configurable: true,
            enumerable: false,
            get: function () {
                return undefined;
            },
            set: function (value) {
                addHiddenProp(this, prop, action(name, value));
            }
        });
    };
}
function boundActionDecorator(target, propertyName, descriptor, applyToInstance) {
    if (applyToInstance === true) {
        defineBoundAction(target, propertyName, descriptor.value);
        return null;
    }
    if (descriptor) {
        // if (descriptor.value)
        // Typescript / Babel: @action.bound method() { }
        // also: babel @action.bound method = () => {}
        return {
            configurable: true,
            enumerable: false,
            get: function () {
                defineBoundAction(this, propertyName, descriptor.value || descriptor.initializer.call(this));
                return this[propertyName];
            },
            set: dontReassignFields
        };
    }
    // field decorator Typescript @action.bound method = () => {}
    return {
        enumerable: false,
        configurable: true,
        set: function (v) {
            defineBoundAction(this, propertyName, v);
        },
        get: function () {
            return undefined;
        }
    };
}

var action = function action(arg1, arg2, arg3, arg4) {
    // action(fn() {})
    if (arguments.length === 1 && typeof arg1 === "function")
        return createAction(arg1.name || "<unnamed action>", arg1);
    // action("name", fn() {})
    if (arguments.length === 2 && typeof arg2 === "function")
        return createAction(arg1, arg2);
    // @action("name") fn() {}
    if (arguments.length === 1 && typeof arg1 === "string")
        return namedActionDecorator(arg1);
    // @action fn() {}
    if (arg4 === true) {
        // apply to instance immediately
        addHiddenProp(arg1, arg2, createAction(arg1.name || arg2, arg3.value, this));
    }
    else {
        return namedActionDecorator(arg2).apply(null, arguments);
    }
};
action.bound = boundActionDecorator;
function runInAction(arg1, arg2) {
    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
    var fn = typeof arg1 === "function" ? arg1 : arg2;
    if (true) {
        invariant(typeof fn === "function" && fn.length === 0, "`runInAction` expects a function without arguments");
        if (typeof actionName !== "string" || !actionName)
            fail("actions should have valid names, got: '" + actionName + "'");
    }
    return executeAction(actionName, fn, this, undefined);
}
function isAction(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
}
function defineBoundAction(target, propertyName, fn) {
    addHiddenProp(target, propertyName, createAction(propertyName, fn.bind(target)));
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */
function autorun(view, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT; }
    if (true) {
        invariant(typeof view === "function", "Autorun expects a function as first argument");
        invariant(isAction(view) === false, "Autorun does not accept actions since actions are untrackable");
    }
    var name = (opts && opts.name) || view.name || "Autorun@" + getNextId();
    var runSync = !opts.scheduler && !opts.delay;
    var reaction;
    if (runSync) {
        // normal autorun
        reaction = new Reaction(name, function () {
            this.track(reactionRunner);
        }, opts.onError, opts.requiresObservable);
    }
    else {
        var scheduler_1 = createSchedulerFromOptions(opts);
        // debounced autorun
        var isScheduled_1 = false;
        reaction = new Reaction(name, function () {
            if (!isScheduled_1) {
                isScheduled_1 = true;
                scheduler_1(function () {
                    isScheduled_1 = false;
                    if (!reaction.isDisposed)
                        reaction.track(reactionRunner);
                });
            }
        }, opts.onError, opts.requiresObservable);
    }
    function reactionRunner() {
        view(reaction);
    }
    reaction.schedule();
    return reaction.getDisposer();
}
var run = function (f) { return f(); };
function createSchedulerFromOptions(opts) {
    return opts.scheduler
        ? opts.scheduler
        : opts.delay
            ? function (f) { return setTimeout(f, opts.delay); }
            : run;
}
function reaction(expression, effect, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT; }
    if (true) {
        invariant(typeof expression === "function", "First argument to reaction should be a function");
        invariant(typeof opts === "object", "Third argument of reactions should be an object");
    }
    var name = opts.name || "Reaction@" + getNextId();
    var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
    var runSync = !opts.scheduler && !opts.delay;
    var scheduler = createSchedulerFromOptions(opts);
    var firstTime = true;
    var isScheduled = false;
    var value;
    var equals = opts.compareStructural
        ? comparer.structural
        : opts.equals || comparer.default;
    var r = new Reaction(name, function () {
        if (firstTime || runSync) {
            reactionRunner();
        }
        else if (!isScheduled) {
            isScheduled = true;
            scheduler(reactionRunner);
        }
    }, opts.onError, opts.requiresObservable);
    function reactionRunner() {
        isScheduled = false; // Q: move into reaction runner?
        if (r.isDisposed)
            return;
        var changed = false;
        r.track(function () {
            var nextValue = expression(r);
            changed = firstTime || !equals(value, nextValue);
            value = nextValue;
        });
        if (firstTime && opts.fireImmediately)
            effectAction(value, r);
        if (!firstTime && changed === true)
            effectAction(value, r);
        if (firstTime)
            firstTime = false;
    }
    r.schedule();
    return r.getDisposer();
}
function wrapErrorHandler(errorHandler, baseFn) {
    return function () {
        try {
            return baseFn.apply(this, arguments);
        }
        catch (e) {
            errorHandler.call(this, e);
        }
    };
}

function onBecomeObserved(thing, arg2, arg3) {
    return interceptHook("onBecomeObserved", thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
    return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
    var cb = typeof arg3 === "function" ? arg3 : arg2;
    var listenersKey = hook + "Listeners";
    if (atom[listenersKey]) {
        atom[listenersKey].add(cb);
    }
    else {
        atom[listenersKey] = new Set([cb]);
    }
    var orig = atom[hook];
    if (typeof orig !== "function")
        return fail( true && "Not an atom that can be (un)observed");
    return function () {
        var hookListeners = atom[listenersKey];
        if (hookListeners) {
            hookListeners.delete(cb);
            if (hookListeners.size === 0) {
                delete atom[listenersKey];
            }
        }
    };
}

function configure(options) {
    var enforceActions = options.enforceActions, computedRequiresReaction = options.computedRequiresReaction, computedConfigurable = options.computedConfigurable, disableErrorBoundaries = options.disableErrorBoundaries, reactionScheduler = options.reactionScheduler, reactionRequiresObservable = options.reactionRequiresObservable, observableRequiresReaction = options.observableRequiresReaction;
    if (options.isolateGlobalState === true) {
        isolateGlobalState();
    }
    if (enforceActions !== undefined) {
        if (typeof enforceActions === "boolean" || enforceActions === "strict")
            deprecated("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
        var ea = void 0;
        switch (enforceActions) {
            case true:
            case "observed":
                ea = true;
                break;
            case false:
            case "never":
                ea = false;
                break;
            case "strict":
            case "always":
                ea = "strict";
                break;
            default:
                fail("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
        }
        globalState.enforceActions = ea;
        globalState.allowStateChanges = ea === true || ea === "strict" ? false : true;
    }
    if (computedRequiresReaction !== undefined) {
        globalState.computedRequiresReaction = !!computedRequiresReaction;
    }
    if (reactionRequiresObservable !== undefined) {
        globalState.reactionRequiresObservable = !!reactionRequiresObservable;
    }
    if (observableRequiresReaction !== undefined) {
        globalState.observableRequiresReaction = !!observableRequiresReaction;
        globalState.allowStateReads = !globalState.observableRequiresReaction;
    }
    if (computedConfigurable !== undefined) {
        globalState.computedConfigurable = !!computedConfigurable;
    }
    if (disableErrorBoundaries !== undefined) {
        if (disableErrorBoundaries === true)
            console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
        globalState.disableErrorBoundaries = !!disableErrorBoundaries;
    }
    if (reactionScheduler) {
        setReactionScheduler(reactionScheduler);
    }
}

function decorate(thing, decorators) {
     true &&
        invariant(isPlainObject(decorators), "Decorators should be a key value map");
    var target = typeof thing === "function" ? thing.prototype : thing;
    var _loop_1 = function (prop) {
        var propertyDecorators = decorators[prop];
        if (!Array.isArray(propertyDecorators)) {
            propertyDecorators = [propertyDecorators];
        }
         true &&
            invariant(propertyDecorators.every(function (decorator) { return typeof decorator === "function"; }), "Decorate: expected a decorator function or array of decorator functions for '" + prop + "'");
        var descriptor = Object.getOwnPropertyDescriptor(target, prop);
        var newDescriptor = propertyDecorators.reduce(function (accDescriptor, decorator) { return decorator(target, prop, accDescriptor); }, descriptor);
        if (newDescriptor)
            Object.defineProperty(target, prop, newDescriptor);
    };
    for (var prop in decorators) {
        _loop_1(prop);
    }
    return thing;
}

function extendObservable(target, properties, decorators, options) {
    if (true) {
        invariant(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
        invariant(typeof target === "object", "'extendObservable' expects an object as first argument");
        invariant(!isObservableMap(target), "'extendObservable' should not be used on maps, use map.merge instead");
    }
    options = asCreateObservableOptions(options);
    var defaultDecorator = getDefaultDecoratorFromObjectOptions(options);
    initializeInstance(target); // Fixes #1740
    asObservableObject(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props
    if (properties)
        extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator);
    return target;
}
function getDefaultDecoratorFromObjectOptions(options) {
    return options.defaultDecorator || (options.deep === false ? refDecorator : deepDecorator);
}
function extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator) {
    var e_1, _a, e_2, _b;
    if (true) {
        invariant(!isObservable(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
        if (decorators) {
            var keys = getPlainObjectKeys(decorators);
            try {
                for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                    var key = keys_1_1.value;
                    if (!(key in properties))
                        fail("Trying to declare a decorator for unspecified property '" + stringifyKey(key) + "'");
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    }
    startBatch();
    try {
        var keys = getPlainObjectKeys(properties);
        try {
            for (var keys_2 = __values(keys), keys_2_1 = keys_2.next(); !keys_2_1.done; keys_2_1 = keys_2.next()) {
                var key = keys_2_1.value;
                var descriptor = Object.getOwnPropertyDescriptor(properties, key);
                if (true) {
                    if (!isPlainObject(properties))
                        fail("'extendObservabe' only accepts plain objects as second argument");
                    if (isComputed(descriptor.value))
                        fail("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
                }
                var decorator = decorators && key in decorators
                    ? decorators[key]
                    : descriptor.get
                        ? computedDecorator
                        : defaultDecorator;
                if ( true && typeof decorator !== "function")
                    fail("Not a valid decorator for '" + stringifyKey(key) + "', got: " + decorator);
                var resultDescriptor = decorator(target, key, descriptor, true);
                if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
                )
                    Object.defineProperty(target, key, resultDescriptor);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (keys_2_1 && !keys_2_1.done && (_b = keys_2.return)) _b.call(keys_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    finally {
        endBatch();
    }
}

function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name
    };
    if (node.observing && node.observing.length > 0)
        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
    return result;
}
function getObserverTree(thing, property) {
    return nodeToObserverTree(getAtom(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name
    };
    if (hasObservers(node))
        result.observers = Array.from(getObservers(node)).map(nodeToObserverTree);
    return result;
}

var generatorId = 0;
function FlowCancellationError() {
    this.message = "FLOW_CANCELLED";
}
FlowCancellationError.prototype = Object.create(Error.prototype);
function isFlowCancellationError(error) {
    return error instanceof FlowCancellationError;
}
function flow(generator) {
    if (arguments.length !== 1)
        fail( true && "Flow expects 1 argument and cannot be used as decorator");
    var name = generator.name || "<unnamed flow>";
    // Implementation based on https://github.com/tj/co/blob/master/index.js
    return function () {
        var ctx = this;
        var args = arguments;
        var runId = ++generatorId;
        var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
        var rejector;
        var pendingPromise = undefined;
        var promise = new Promise(function (resolve, reject) {
            var stepId = 0;
            rejector = reject;
            function onFulfilled(res) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function onRejected(err) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function next(ret) {
                if (ret && typeof ret.then === "function") {
                    // an async iterator
                    ret.then(next, reject);
                    return;
                }
                if (ret.done)
                    return resolve(ret.value);
                pendingPromise = Promise.resolve(ret.value);
                return pendingPromise.then(onFulfilled, onRejected);
            }
            onFulfilled(undefined); // kick off the process
        });
        promise.cancel = action(name + " - runid: " + runId + " - cancel", function () {
            try {
                if (pendingPromise)
                    cancelPromise(pendingPromise);
                // Finally block can return (or yield) stuff..
                var res = gen.return(undefined);
                // eat anything that promise would do, it's cancelled!
                var yieldedPromise = Promise.resolve(res.value);
                yieldedPromise.then(noop, noop);
                cancelPromise(yieldedPromise); // maybe it can be cancelled :)
                // reject our original promise
                rejector(new FlowCancellationError());
            }
            catch (e) {
                rejector(e); // there could be a throwing finally block
            }
        });
        return promise;
    };
}
function cancelPromise(promise) {
    if (typeof promise.cancel === "function")
        promise.cancel();
}

function interceptReads(thing, propOrHandler, handler) {
    var target;
    if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
        target = getAdministration(thing);
    }
    else if (isObservableObject(thing)) {
        if (typeof propOrHandler !== "string")
            return fail( true &&
                "InterceptReads can only be used with a specific property, not with an object in general");
        target = getAdministration(thing, propOrHandler);
    }
    else {
        return fail( true &&
            "Expected observable map, object or array as first array");
    }
    if (target.dehancer !== undefined)
        return fail( true && "An intercept reader was already established");
    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
    return function () {
        target.dehancer = undefined;
    };
}

function intercept(thing, propOrHandler, handler) {
    if (typeof handler === "function")
        return interceptProperty(thing, propOrHandler, handler);
    else
        return interceptInterceptable(thing, propOrHandler);
}
function interceptInterceptable(thing, handler) {
    return getAdministration(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
    return getAdministration(thing, property).intercept(handler);
}

function _isComputed(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableObject(value) === false)
            return false;
        if (!value[$mobx].values.has(property))
            return false;
        var atom = getAtom(value, property);
        return isComputedValue(atom);
    }
    return isComputedValue(value);
}
function isComputed(value) {
    if (arguments.length > 1)
        return fail( true &&
            "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isComputed(value);
}
function isComputedProp(value, propName) {
    if (typeof propName !== "string")
        return fail( true &&
            "isComputed expected a property name as second argument");
    return _isComputed(value, propName);
}

function _isObservable(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if ( true &&
            (isObservableMap(value) || isObservableArray(value)))
            return fail("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
        if (isObservableObject(value)) {
            return value[$mobx].values.has(property);
        }
        return false;
    }
    // For first check, see #701
    return (isObservableObject(value) ||
        !!value[$mobx] ||
        isAtom(value) ||
        isReaction(value) ||
        isComputedValue(value));
}
function isObservable(value) {
    if (arguments.length !== 1)
        fail( true &&
            "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isObservable(value);
}
function isObservableProp(value, propName) {
    if (typeof propName !== "string")
        return fail( true && "expected a property name as second argument");
    return _isObservable(value, propName);
}

function keys(obj) {
    if (isObservableObject(obj)) {
        return obj[$mobx].getKeys();
    }
    if (isObservableMap(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableArray(obj)) {
        return obj.map(function (_, index) { return index; });
    }
    return fail( true &&
        "'keys()' can only be used on observable objects, arrays, sets and maps");
}
function values(obj) {
    if (isObservableObject(obj)) {
        return keys(obj).map(function (key) { return obj[key]; });
    }
    if (isObservableMap(obj)) {
        return keys(obj).map(function (key) { return obj.get(key); });
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.values());
    }
    if (isObservableArray(obj)) {
        return obj.slice();
    }
    return fail( true &&
        "'values()' can only be used on observable objects, arrays, sets and maps");
}
function entries(obj) {
    if (isObservableObject(obj)) {
        return keys(obj).map(function (key) { return [key, obj[key]]; });
    }
    if (isObservableMap(obj)) {
        return keys(obj).map(function (key) { return [key, obj.get(key)]; });
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.entries());
    }
    if (isObservableArray(obj)) {
        return obj.map(function (key, index) { return [index, key]; });
    }
    return fail( true &&
        "'entries()' can only be used on observable objects, arrays and maps");
}
function set(obj, key, value) {
    if (arguments.length === 2 && !isObservableSet(obj)) {
        startBatch();
        var values_1 = key;
        try {
            for (var key_1 in values_1)
                set(obj, key_1, values_1[key_1]);
        }
        finally {
            endBatch();
        }
        return;
    }
    if (isObservableObject(obj)) {
        var adm = obj[$mobx];
        var existingObservable = adm.values.get(key);
        if (existingObservable) {
            adm.write(key, value);
        }
        else {
            adm.addObservableProp(key, value, adm.defaultEnhancer);
        }
    }
    else if (isObservableMap(obj)) {
        obj.set(key, value);
    }
    else if (isObservableSet(obj)) {
        obj.add(key);
    }
    else if (isObservableArray(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant(key >= 0, "Not a valid index: '" + key + "'");
        startBatch();
        if (key >= obj.length)
            obj.length = key + 1;
        obj[key] = value;
        endBatch();
    }
    else {
        return fail( true &&
            "'set()' can only be used on observable objects, arrays and maps");
    }
}
function remove(obj, key) {
    if (isObservableObject(obj)) {
        obj[$mobx].remove(key);
    }
    else if (isObservableMap(obj)) {
        obj.delete(key);
    }
    else if (isObservableSet(obj)) {
        obj.delete(key);
    }
    else if (isObservableArray(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant(key >= 0, "Not a valid index: '" + key + "'");
        obj.splice(key, 1);
    }
    else {
        return fail( true &&
            "'remove()' can only be used on observable objects, arrays and maps");
    }
}
function has(obj, key) {
    if (isObservableObject(obj)) {
        // return keys(obj).indexOf(key) >= 0
        var adm = getAdministration(obj);
        return adm.has(key);
    }
    else if (isObservableMap(obj)) {
        return obj.has(key);
    }
    else if (isObservableSet(obj)) {
        return obj.has(key);
    }
    else if (isObservableArray(obj)) {
        return key >= 0 && key < obj.length;
    }
    else {
        return fail( true &&
            "'has()' can only be used on observable objects, arrays and maps");
    }
}
function get(obj, key) {
    if (!has(obj, key))
        return undefined;
    if (isObservableObject(obj)) {
        return obj[key];
    }
    else if (isObservableMap(obj)) {
        return obj.get(key);
    }
    else if (isObservableArray(obj)) {
        return obj[key];
    }
    else {
        return fail( true &&
            "'get()' can only be used on observable objects, arrays and maps");
    }
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
    if (typeof cbOrFire === "function")
        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else
        return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration(thing, property).observe(listener, fireImmediately);
}

var defaultOptions = {
    detectCycles: true,
    exportMapsAsObjects: true,
    recurseEverything: false
};
function cache(map, key, value, options) {
    if (options.detectCycles)
        map.set(key, value);
    return value;
}
function toJSHelper(source, options, __alreadySeen) {
    if (!options.recurseEverything && !isObservable(source))
        return source;
    if (typeof source !== "object")
        return source;
    // Directly return null if source is null
    if (source === null)
        return null;
    // Directly return the Date object itself if contained in the observable
    if (source instanceof Date)
        return source;
    if (isObservableValue(source))
        return toJSHelper(source.get(), options, __alreadySeen);
    // make sure we track the keys of the object
    if (isObservable(source))
        keys(source);
    var detectCycles = options.detectCycles === true;
    if (detectCycles && source !== null && __alreadySeen.has(source)) {
        return __alreadySeen.get(source);
    }
    if (isObservableArray(source) || Array.isArray(source)) {
        var res_1 = cache(__alreadySeen, source, [], options);
        var toAdd = source.map(function (value) { return toJSHelper(value, options, __alreadySeen); });
        res_1.length = toAdd.length;
        for (var i = 0, l = toAdd.length; i < l; i++)
            res_1[i] = toAdd[i];
        return res_1;
    }
    if (isObservableSet(source) || Object.getPrototypeOf(source) === Set.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_2 = cache(__alreadySeen, source, new Set(), options);
            source.forEach(function (value) {
                res_2.add(toJSHelper(value, options, __alreadySeen));
            });
            return res_2;
        }
        else {
            var res_3 = cache(__alreadySeen, source, [], options);
            source.forEach(function (value) {
                res_3.push(toJSHelper(value, options, __alreadySeen));
            });
            return res_3;
        }
    }
    if (isObservableMap(source) || Object.getPrototypeOf(source) === Map.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_4 = cache(__alreadySeen, source, new Map(), options);
            source.forEach(function (value, key) {
                res_4.set(key, toJSHelper(value, options, __alreadySeen));
            });
            return res_4;
        }
        else {
            var res_5 = cache(__alreadySeen, source, {}, options);
            source.forEach(function (value, key) {
                res_5[key] = toJSHelper(value, options, __alreadySeen);
            });
            return res_5;
        }
    }
    // Fallback to the situation that source is an ObservableObject or a plain object
    var res = cache(__alreadySeen, source, {}, options);
    getPlainObjectKeys(source).forEach(function (key) {
        res[key] = toJSHelper(source[key], options, __alreadySeen);
    });
    return res;
}
function toJS(source, options) {
    // backward compatibility
    if (typeof options === "boolean")
        options = { detectCycles: options };
    if (!options)
        options = defaultOptions;
    options.detectCycles =
        options.detectCycles === undefined
            ? options.recurseEverything === true
            : options.detectCycles === true;
    var __alreadySeen;
    if (options.detectCycles)
        __alreadySeen = new Map();
    return toJSHelper(source, options, __alreadySeen);
}

function trace() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var enterBreakPoint = false;
    if (typeof args[args.length - 1] === "boolean")
        enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);
    if (!derivation) {
        return fail( true &&
            "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    }
    if (derivation.isTracing === TraceMode.NONE) {
        console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
    }
    derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}
function getAtomFromArgs(args) {
    switch (args.length) {
        case 0:
            return globalState.trackingDerivation;
        case 1:
            return getAtom(args[0]);
        case 2:
            return getAtom(args[0], args[1]);
    }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction(action, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    startBatch();
    try {
        return action.apply(thisArg);
    }
    finally {
        endBatch();
    }
}

function when(predicate, arg1, arg2) {
    if (arguments.length === 1 || (arg1 && typeof arg1 === "object"))
        return whenPromise(predicate, arg1);
    return _when(predicate, arg1, arg2 || {});
}
function _when(predicate, effect, opts) {
    var timeoutHandle;
    if (typeof opts.timeout === "number") {
        timeoutHandle = setTimeout(function () {
            if (!disposer[$mobx].isDisposed) {
                disposer();
                var error = new Error("WHEN_TIMEOUT");
                if (opts.onError)
                    opts.onError(error);
                else
                    throw error;
            }
        }, opts.timeout);
    }
    opts.name = opts.name || "When@" + getNextId();
    var effectAction = createAction(opts.name + "-effect", effect);
    var disposer = autorun(function (r) {
        if (predicate()) {
            r.dispose();
            if (timeoutHandle)
                clearTimeout(timeoutHandle);
            effectAction();
        }
    }, opts);
    return disposer;
}
function whenPromise(predicate, opts) {
    if ( true && opts && opts.onError)
        return fail("the options 'onError' and 'promise' cannot be combined");
    var cancel;
    var res = new Promise(function (resolve, reject) {
        var disposer = _when(predicate, resolve, __assign(__assign({}, opts), { onError: reject }));
        cancel = function () {
            disposer();
            reject("WHEN_CANCELLED");
        };
    });
    res.cancel = cancel;
    return res;
}

function getAdm(target) {
    return target[$mobx];
}
function isPropertyKey(val) {
    return typeof val === "string" || typeof val === "number" || typeof val === "symbol";
}
// Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!
var objectProxyTraps = {
    has: function (target, name) {
        if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol)
            return true;
        var adm = getAdm(target);
        // MWE: should `in` operator be reactive? If not, below code path will be faster / more memory efficient
        // TODO: check performance stats!
        // if (adm.values.get(name as string)) return true
        if (isPropertyKey(name))
            return adm.has(name);
        return name in target;
    },
    get: function (target, name) {
        if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol)
            return target[name];
        var adm = getAdm(target);
        var observable = adm.values.get(name);
        if (observable instanceof Atom) {
            var result = observable.get();
            if (result === undefined) {
                // This fixes #1796, because deleting a prop that has an
                // undefined value won't retrigger a observer (no visible effect),
                // the autorun wouldn't subscribe to future key changes (see also next comment)
                adm.has(name);
            }
            return result;
        }
        // make sure we start listening to future keys
        // note that we only do this here for optimization
        if (isPropertyKey(name))
            adm.has(name);
        return target[name];
    },
    set: function (target, name, value) {
        if (!isPropertyKey(name))
            return false;
        set(target, name, value);
        return true;
    },
    deleteProperty: function (target, name) {
        if (!isPropertyKey(name))
            return false;
        var adm = getAdm(target);
        adm.remove(name);
        return true;
    },
    ownKeys: function (target) {
        var adm = getAdm(target);
        adm.keysAtom.reportObserved();
        return Reflect.ownKeys(target);
    },
    preventExtensions: function (target) {
        fail("Dynamic observable objects cannot be frozen");
        return false;
    }
};
function createDynamicObservableObject(base) {
    var proxy = new Proxy(base, objectProxyTraps);
    base[$mobx].proxy = proxy;
    return proxy;
}

function hasInterceptors(interceptable) {
    return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
}
function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1)
            interceptors.splice(idx, 1);
    });
}
function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
        // Interceptor can modify the array, copy it to avoid concurrent modification, see #1950
        var interceptors = __spread((interceptable.interceptors || []));
        for (var i = 0, l = interceptors.length; i < l; i++) {
            change = interceptors[i](change);
            invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
            if (!change)
                break;
        }
        return change;
    }
    finally {
        untrackedEnd(prevU);
    }
}

function hasListeners(listenable) {
    return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
}
function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1)
            listeners.splice(idx, 1);
    });
}
function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners;
    if (!listeners)
        return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](change);
    }
    untrackedEnd(prevU);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
var arrayTraps = {
    get: function (target, name) {
        if (name === $mobx)
            return target[$mobx];
        if (name === "length")
            return target[$mobx].getArrayLength();
        if (typeof name === "number") {
            return arrayExtensions.get.call(target, name);
        }
        if (typeof name === "string" && !isNaN(name)) {
            return arrayExtensions.get.call(target, parseInt(name));
        }
        if (arrayExtensions.hasOwnProperty(name)) {
            return arrayExtensions[name];
        }
        return target[name];
    },
    set: function (target, name, value) {
        if (name === "length") {
            target[$mobx].setArrayLength(value);
        }
        if (typeof name === "number") {
            arrayExtensions.set.call(target, name, value);
        }
        if (typeof name === "symbol" || isNaN(name)) {
            target[name] = value;
        }
        else {
            // numeric string
            arrayExtensions.set.call(target, parseInt(name), value);
        }
        return true;
    },
    preventExtensions: function (target) {
        fail("Observable arrays cannot be frozen");
        return false;
    }
};
function createObservableArray(initialValues, enhancer, name, owned) {
    if (name === void 0) { name = "ObservableArray@" + getNextId(); }
    if (owned === void 0) { owned = false; }
    var adm = new ObservableArrayAdministration(name, enhancer, owned);
    addHiddenFinalProp(adm.values, $mobx, adm);
    var proxy = new Proxy(adm.values, arrayTraps);
    adm.proxy = proxy;
    if (initialValues && initialValues.length) {
        var prev = allowStateChangesStart(true);
        adm.spliceWithArray(0, 0, initialValues);
        allowStateChangesEnd(prev);
    }
    return proxy;
}
var ObservableArrayAdministration = /** @class */ (function () {
    function ObservableArrayAdministration(name, enhancer, owned) {
        this.owned = owned;
        this.values = [];
        this.proxy = undefined;
        this.lastKnownLength = 0;
        this.atom = new Atom(name || "ObservableArray@" + getNextId());
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
    }
    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableArrayAdministration.prototype.dehanceValues = function (values) {
        if (this.dehancer !== undefined && values.length > 0)
            return values.map(this.dehancer);
        return values;
    };
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        if (fireImmediately) {
            listener({
                object: this.proxy,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0)
            throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for (var i = 0; i < newLength - currentLength; i++)
                newItems[i] = undefined; // No Array.fill everywhere...
            this.spliceWithArray(currentLength, 0, newItems);
        }
        else
            this.spliceWithArray(newLength, currentLength - newLength);
    };
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
        this.lastKnownLength += delta;
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this.atom);
        var length = this.values.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined)
            newItems = EMPTY_ARRAY;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change)
                return EMPTY_ARRAY;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems = newItems.length === 0 ? newItems : newItems.map(function (v) { return _this.enhancer(v, undefined); });
        if (true) {
            var lengthDelta = newItems.length - deleteCount;
            this.updateArrayLength(length, lengthDelta); // checks if internal array wasn't modified
        }
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0)
            this.notifyArraySplice(index, newItems, res);
        return this.dehanceValues(res);
    };
    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
        var _a;
        if (newItems.length < MAX_SPLICE_SIZE) {
            return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
        }
        else {
            var res = this.values.slice(index, index + deleteCount);
            this.values = this.values
                .slice(0, index)
                .concat(newItems, this.values.slice(index + deleteCount));
            return res;
        }
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "update",
                index: index,
                newValue: newValue,
                oldValue: oldValue
            }
            : null;
        // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
        // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled
        if (notifySpy && "development" !== "production")
            spyReportStart(__assign(__assign({}, change), { name: this.atom.name }));
        this.atom.reportChanged();
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "splice",
                index: index,
                removed: removed,
                added: added,
                removedCount: removed.length,
                addedCount: added.length
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart(__assign(__assign({}, change), { name: this.atom.name }));
        this.atom.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd();
    };
    return ObservableArrayAdministration;
}());
var arrayExtensions = {
    intercept: function (handler) {
        return this[$mobx].intercept(handler);
    },
    observe: function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        var adm = this[$mobx];
        return adm.observe(listener, fireImmediately);
    },
    clear: function () {
        return this.splice(0);
    },
    replace: function (newItems) {
        var adm = this[$mobx];
        return adm.spliceWithArray(0, adm.values.length, newItems);
    },
    /**
     * Converts this array back to a (shallow) javascript structure.
     * For a deep clone use mobx.toJS
     */
    toJS: function () {
        return this.slice();
    },
    toJSON: function () {
        // Used by JSON.stringify
        return this.toJS();
    },
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    splice: function (index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        var adm = this[$mobx];
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return adm.spliceWithArray(index);
            case 2:
                return adm.spliceWithArray(index, deleteCount);
        }
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    spliceWithArray: function (index, deleteCount, newItems) {
        var adm = this[$mobx];
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    push: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx];
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    },
    pop: function () {
        return this.splice(Math.max(this[$mobx].values.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx];
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    },
    reverse: function () {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        // so we deviate from the default and just make it an dervitation
        if (true) {
            console.warn("[mobx] `observableArray.reverse()` will not update the array in place. Use `observableArray.slice().reverse()` to suppress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().reverse())` to reverse & update in place");
        }
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    },
    sort: function (compareFn) {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        if (true) {
            console.warn("[mobx] `observableArray.sort()` will not update the array in place. Use `observableArray.slice().sort()` to suppress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().sort())` to sort & update in place");
        }
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    },
    remove: function (value) {
        var adm = this[$mobx];
        var idx = adm.dehanceValues(adm.values).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    },
    get: function (index) {
        var adm = this[$mobx];
        if (adm) {
            if (index < adm.values.length) {
                adm.atom.reportObserved();
                return adm.dehanceValue(adm.values[index]);
            }
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + adm.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
        return undefined;
    },
    set: function (index, newValue) {
        var adm = this[$mobx];
        var values = adm.values;
        if (index < values.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed(adm.atom);
            var oldValue = values[index];
            if (hasInterceptors(adm)) {
                var change = interceptChange(adm, {
                    type: "update",
                    object: adm.proxy,
                    index: index,
                    newValue: newValue
                });
                if (!change)
                    return;
                newValue = change.newValue;
            }
            newValue = adm.enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        }
        else if (index === values.length) {
            // add a new item
            adm.spliceWithArray(index, 0, [newValue]);
        }
        else {
            // out of bounds
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
        }
    }
};
[
    "concat",
    "every",
    "filter",
    "forEach",
    "indexOf",
    "join",
    "lastIndexOf",
    "map",
    "reduce",
    "reduceRight",
    "slice",
    "some",
    "toString",
    "toLocaleString"
].forEach(function (funcName) {
    arrayExtensions[funcName] = function () {
        var adm = this[$mobx];
        adm.atom.reportObserved();
        var res = adm.dehanceValues(adm.values);
        return res[funcName].apply(res, arguments);
    };
});
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}

var _a;
var ObservableMapMarker = {};
// just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556
var ObservableMap = /** @class */ (function () {
    function ObservableMap(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
        this.enhancer = enhancer;
        this.name = name;
        this[_a] = ObservableMapMarker;
        this._keysAtom = createAtom(this.name + ".keys()");
        this[Symbol.toStringTag] = "Map";
        if (typeof Map !== "function") {
            throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
        }
        this._data = new Map();
        this._hasMap = new Map();
        this.merge(initialData);
    }
    ObservableMap.prototype._has = function (key) {
        return this._data.has(key);
    };
    ObservableMap.prototype.has = function (key) {
        var _this = this;
        if (!globalState.trackingDerivation)
            return this._has(key);
        var entry = this._hasMap.get(key);
        if (!entry) {
            // todo: replace with atom (breaking change)
            var newEntry = (entry = new ObservableValue(this._has(key), referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false));
            this._hasMap.set(key, newEntry);
            onBecomeUnobserved(newEntry, function () { return _this._hasMap.delete(key); });
        }
        return entry.get();
    };
    ObservableMap.prototype.set = function (key, value) {
        var hasKey = this._has(key);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change)
                return this;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        }
        else {
            this._addValue(key, value);
        }
        return this;
    };
    ObservableMap.prototype.delete = function (key) {
        var _this = this;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change)
                return false;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: this._data.get(key).value,
                    name: key
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            transaction(function () {
                _this._keysAtom.reportChanged();
                _this._updateHasMapEntry(key, false);
                var observable = _this._data.get(key);
                observable.setNewValue(undefined);
                _this._data.delete(key);
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
        var entry = this._hasMap.get(key);
        if (entry) {
            entry.setNewValue(value);
        }
    };
    ObservableMap.prototype._updateValue = function (key, newValue) {
        var observable = this._data.get(key);
        newValue = observable.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this,
                    oldValue: observable.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
    };
    ObservableMap.prototype._addValue = function (key, newValue) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._keysAtom);
        transaction(function () {
            var observable = new ObservableValue(newValue, _this.enhancer, _this.name + "." + stringifyKey(key), false);
            _this._data.set(key, observable);
            newValue = observable.value; // value might have been changed
            _this._updateHasMapEntry(key, true);
            _this._keysAtom.reportChanged();
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd();
    };
    ObservableMap.prototype.get = function (key) {
        if (this.has(key))
            return this.dehanceValue(this._data.get(key).get());
        return this.dehanceValue(undefined);
    };
    ObservableMap.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableMap.prototype.keys = function () {
        this._keysAtom.reportObserved();
        return this._data.keys();
    };
    ObservableMap.prototype.values = function () {
        var self = this;
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        return makeIterable({
            next: function () {
                return nextIndex < keys.length
                    ? { value: self.get(keys[nextIndex++]), done: false }
                    : { done: true };
            }
        });
    };
    ObservableMap.prototype.entries = function () {
        var self = this;
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        return makeIterable({
            next: function () {
                if (nextIndex < keys.length) {
                    var key = keys[nextIndex++];
                    return {
                        value: [key, self.get(key)],
                        done: false
                    };
                }
                return { done: true };
            }
        });
    };
    ObservableMap.prototype[(_a = $mobx, Symbol.iterator)] = function () {
        return this.entries();
    };
    ObservableMap.prototype.forEach = function (callback, thisArg) {
        var e_1, _b;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), key = _e[0], value = _e[1];
                callback.call(thisArg, value, key, this);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /** Merge another object into this object, returns this. */
    ObservableMap.prototype.merge = function (other) {
        var _this = this;
        if (isObservableMap(other)) {
            other = other.toJS();
        }
        transaction(function () {
            if (isPlainObject(other))
                getPlainObjectKeys(other).forEach(function (key) { return _this.set(key, other[key]); });
            else if (Array.isArray(other))
                other.forEach(function (_b) {
                    var _c = __read(_b, 2), key = _c[0], value = _c[1];
                    return _this.set(key, value);
                });
            else if (isES6Map(other)) {
                if (other.constructor !== Map)
                    fail("Cannot initialize from classes that inherit from Map: " + other.constructor.name); // prettier-ignore
                other.forEach(function (value, key) { return _this.set(key, value); });
            }
            else if (other !== null && other !== undefined)
                fail("Cannot initialize map from " + other);
        });
        return this;
    };
    ObservableMap.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                var e_2, _b;
                try {
                    for (var _c = __values(_this.keys()), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var key = _d.value;
                        _this.delete(key);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            });
        });
    };
    ObservableMap.prototype.replace = function (values) {
        var _this = this;
        transaction(function () {
            // grab all the keys that are present in the new map but not present in the current map
            // and delete them from the map, then merge the new map
            // this will cause reactions only on changed values
            var newKeys = getMapLikeKeys(values);
            var oldKeys = Array.from(_this.keys());
            var missingKeys = oldKeys.filter(function (k) { return newKeys.indexOf(k) === -1; });
            missingKeys.forEach(function (k) { return _this.delete(k); });
            _this.merge(values);
        });
        return this;
    };
    Object.defineProperty(ObservableMap.prototype, "size", {
        get: function () {
            this._keysAtom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a plain object that represents this map.
     * Note that all the keys being stringified.
     * If there are duplicating keys after converting them to strings, behaviour is undetermined.
     */
    ObservableMap.prototype.toPOJO = function () {
        var e_3, _b;
        var res = {};
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), key = _e[0], value = _e[1];
                // We lie about symbol key types due to https://github.com/Microsoft/TypeScript/issues/1863
                res[typeof key === "symbol" ? key : stringifyKey(key)] = value;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return res;
    };
    /**
     * Returns a shallow non observable object clone of this map.
     * Note that the values migth still be observable. For a deep clone use mobx.toJS.
     */
    ObservableMap.prototype.toJS = function () {
        return new Map(this);
    };
    ObservableMap.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toPOJO();
    };
    ObservableMap.prototype.toString = function () {
        var _this = this;
        return (this.name +
            "[{ " +
            Array.from(this.keys())
                .map(function (key) { return stringifyKey(key) + ": " + ("" + _this.get(key)); })
                .join(", ") +
            " }]");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableMap.prototype.observe = function (listener, fireImmediately) {
         true &&
            invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
        return registerListener(this, listener);
    };
    ObservableMap.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableMap;
}());
/* 'var' fixes small-build issue */
var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);

var _a$1;
var ObservableSetMarker = {};
var ObservableSet = /** @class */ (function () {
    function ObservableSet(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableSet@" + getNextId(); }
        this.name = name;
        this[_a$1] = ObservableSetMarker;
        this._data = new Set();
        this._atom = createAtom(this.name);
        this[Symbol.toStringTag] = "Set";
        if (typeof Set !== "function") {
            throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
        }
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name); };
        if (initialData) {
            this.replace(initialData);
        }
    }
    ObservableSet.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableSet.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                var e_1, _b;
                try {
                    for (var _c = __values(_this._data.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var value = _d.value;
                        _this.delete(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
        });
    };
    ObservableSet.prototype.forEach = function (callbackFn, thisArg) {
        var e_2, _b;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var value = _d.value;
                callbackFn.call(thisArg, value, value, this);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    Object.defineProperty(ObservableSet.prototype, "size", {
        get: function () {
            this._atom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    ObservableSet.prototype.add = function (value) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._atom);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "add",
                object: this,
                newValue: value
            });
            if (!change)
                return this;
            // TODO: ideally, value = change.value would be done here, so that values can be
            // changed by interceptor. Same applies for other Set and Map api's.
        }
        if (!this.has(value)) {
            transaction(function () {
                _this._data.add(_this.enhancer(value, undefined));
                _this._atom.reportChanged();
            });
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "add",
                    object: this,
                    newValue: value
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(change);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
        return this;
    };
    ObservableSet.prototype.delete = function (value) {
        var _this = this;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                oldValue: value
            });
            if (!change)
                return false;
        }
        if (this.has(value)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: value
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name }));
            transaction(function () {
                _this._atom.reportChanged();
                _this._data.delete(value);
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableSet.prototype.has = function (value) {
        this._atom.reportObserved();
        return this._data.has(this.dehanceValue(value));
    };
    ObservableSet.prototype.entries = function () {
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        var values = Array.from(this.values());
        return makeIterable({
            next: function () {
                var index = nextIndex;
                nextIndex += 1;
                return index < values.length
                    ? { value: [keys[index], values[index]], done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet.prototype.keys = function () {
        return this.values();
    };
    ObservableSet.prototype.values = function () {
        this._atom.reportObserved();
        var self = this;
        var nextIndex = 0;
        var observableValues = Array.from(this._data.values());
        return makeIterable({
            next: function () {
                return nextIndex < observableValues.length
                    ? { value: self.dehanceValue(observableValues[nextIndex++]), done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet.prototype.replace = function (other) {
        var _this = this;
        if (isObservableSet(other)) {
            other = other.toJS();
        }
        transaction(function () {
            if (Array.isArray(other)) {
                _this.clear();
                other.forEach(function (value) { return _this.add(value); });
            }
            else if (isES6Set(other)) {
                _this.clear();
                other.forEach(function (value) { return _this.add(value); });
            }
            else if (other !== null && other !== undefined) {
                fail("Cannot initialize set from " + other);
            }
        });
        return this;
    };
    ObservableSet.prototype.observe = function (listener, fireImmediately) {
        // TODO 'fireImmediately' can be true?
         true &&
            invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with sets.");
        return registerListener(this, listener);
    };
    ObservableSet.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableSet.prototype.toJS = function () {
        return new Set(this);
    };
    ObservableSet.prototype.toString = function () {
        return this.name + "[ " + Array.from(this).join(", ") + " ]";
    };
    ObservableSet.prototype[(_a$1 = $mobx, Symbol.iterator)] = function () {
        return this.values();
    };
    return ObservableSet;
}());
var isObservableSet = createInstanceofPredicate("ObservableSet", ObservableSet);

var ObservableObjectAdministration = /** @class */ (function () {
    function ObservableObjectAdministration(target, values, name, defaultEnhancer) {
        if (values === void 0) { values = new Map(); }
        this.target = target;
        this.values = values;
        this.name = name;
        this.defaultEnhancer = defaultEnhancer;
        this.keysAtom = new Atom(name + ".keys");
    }
    ObservableObjectAdministration.prototype.read = function (key) {
        return this.values.get(key).get();
    };
    ObservableObjectAdministration.prototype.write = function (key, newValue) {
        var instance = this.target;
        var observable = this.values.get(key);
        if (observable instanceof ComputedValue) {
            observable.set(newValue);
            return;
        }
        // intercept
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "update",
                object: this.proxy || instance,
                name: key,
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        newValue = observable.prepareNewValue(newValue);
        // notify spy & observers
        if (newValue !== globalState.UNCHANGED) {
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this.proxy || instance,
                    oldValue: observable.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
    };
    ObservableObjectAdministration.prototype.has = function (key) {
        var map = this.pendingKeys || (this.pendingKeys = new Map());
        var entry = map.get(key);
        if (entry)
            return entry.get();
        else {
            var exists = !!this.values.get(key);
            // Possible optimization: Don't have a separate map for non existing keys,
            // but store them in the values map instead, using a special symbol to denote "not existing"
            entry = new ObservableValue(exists, referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false);
            map.set(key, entry);
            return entry.get(); // read to subscribe
        }
    };
    ObservableObjectAdministration.prototype.addObservableProp = function (propName, newValue, enhancer) {
        if (enhancer === void 0) { enhancer = this.defaultEnhancer; }
        var target = this.target;
        assertPropertyConfigurable(target, propName);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy || target,
                name: propName,
                type: "add",
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        var observable = new ObservableValue(newValue, enhancer, this.name + "." + stringifyKey(propName), false);
        this.values.set(propName, observable);
        newValue = observable.value; // observableValue might have changed it
        Object.defineProperty(target, propName, generateObservablePropConfig(propName));
        this.notifyPropertyAddition(propName, newValue);
    };
    ObservableObjectAdministration.prototype.addComputedProp = function (propertyOwner, // where is the property declared?
    propName, options) {
        var target = this.target;
        options.name = options.name || this.name + "." + stringifyKey(propName);
        this.values.set(propName, new ComputedValue(options));
        if (propertyOwner === target || isPropertyConfigurable(propertyOwner, propName))
            Object.defineProperty(propertyOwner, propName, generateComputedPropConfig(propName));
    };
    ObservableObjectAdministration.prototype.remove = function (key) {
        if (!this.values.has(key))
            return;
        var target = this.target;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy || target,
                name: key,
                type: "remove"
            });
            if (!change)
                return;
        }
        try {
            startBatch();
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var oldObservable = this.values.get(key);
            var oldValue = oldObservable && oldObservable.get();
            oldObservable && oldObservable.set(undefined);
            // notify key and keyset listeners
            this.keysAtom.reportChanged();
            this.values.delete(key);
            if (this.pendingKeys) {
                var entry = this.pendingKeys.get(key);
                if (entry)
                    entry.set(false);
            }
            // delete the prop
            delete this.target[key];
            var change = notify || notifySpy
                ? {
                    type: "remove",
                    object: this.proxy || target,
                    oldValue: oldValue,
                    name: key
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
        finally {
            endBatch();
        }
    };
    ObservableObjectAdministration.prototype.illegalAccess = function (owner, propName) {
        /**
         * This happens if a property is accessed through the prototype chain, but the property was
         * declared directly as own property on the prototype.
         *
         * E.g.:
         * class A {
         * }
         * extendObservable(A.prototype, { x: 1 })
         *
         * classB extens A {
         * }
         * console.log(new B().x)
         *
         * It is unclear whether the property should be considered 'static' or inherited.
         * Either use `console.log(A.x)`
         * or: decorate(A, { x: observable })
         *
         * When using decorate, the property will always be redeclared as own property on the actual instance
         */
        console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
         true &&
            invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener(this, callback);
    };
    ObservableObjectAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableObjectAdministration.prototype.notifyPropertyAddition = function (key, newValue) {
        var notify = hasListeners(this);
        var notifySpy = isSpyEnabled();
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this.proxy || this.target,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd();
        if (this.pendingKeys) {
            var entry = this.pendingKeys.get(key);
            if (entry)
                entry.set(true);
        }
        this.keysAtom.reportChanged();
    };
    ObservableObjectAdministration.prototype.getKeys = function () {
        var e_1, _a;
        this.keysAtom.reportObserved();
        // return Reflect.ownKeys(this.values) as any
        var res = [];
        try {
            for (var _b = __values(this.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                if (value instanceof ObservableValue)
                    res.push(key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return res;
    };
    return ObservableObjectAdministration;
}());
function asObservableObject(target, name, defaultEnhancer) {
    if (name === void 0) { name = ""; }
    if (defaultEnhancer === void 0) { defaultEnhancer = deepEnhancer; }
    if (Object.prototype.hasOwnProperty.call(target, $mobx))
        return target[$mobx];
     true &&
        invariant(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
    if (!isPlainObject(target))
        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
    if (!name)
        name = "ObservableObject@" + getNextId();
    var adm = new ObservableObjectAdministration(target, new Map(), stringifyKey(name), defaultEnhancer);
    addHiddenProp(target, $mobx, adm);
    return adm;
}
var observablePropertyConfigs = Object.create(null);
var computedPropertyConfigs = Object.create(null);
function generateObservablePropConfig(propName) {
    return (observablePropertyConfigs[propName] ||
        (observablePropertyConfigs[propName] = {
            configurable: true,
            enumerable: true,
            get: function () {
                return this[$mobx].read(propName);
            },
            set: function (v) {
                this[$mobx].write(propName, v);
            }
        }));
}
function getAdministrationForComputedPropOwner(owner) {
    var adm = owner[$mobx];
    if (!adm) {
        // because computed props are declared on proty,
        // the current instance might not have been initialized yet
        initializeInstance(owner);
        return owner[$mobx];
    }
    return adm;
}
function generateComputedPropConfig(propName) {
    return (computedPropertyConfigs[propName] ||
        (computedPropertyConfigs[propName] = {
            configurable: globalState.computedConfigurable,
            enumerable: false,
            get: function () {
                return getAdministrationForComputedPropOwner(this).read(propName);
            },
            set: function (v) {
                getAdministrationForComputedPropOwner(this).write(propName, v);
            }
        }));
}
var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function isObservableObject(thing) {
    if (isObject(thing)) {
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        return isObservableObjectAdministration(thing[$mobx]);
    }
    return false;
}

function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray(thing)) {
            if (property !== undefined)
                fail( true &&
                    "It is not possible to get index atoms from arrays");
            return thing[$mobx].atom;
        }
        if (isObservableSet(thing)) {
            return thing[$mobx];
        }
        if (isObservableMap(thing)) {
            var anyThing = thing;
            if (property === undefined)
                return anyThing._keysAtom;
            var observable = anyThing._data.get(property) || anyThing._hasMap.get(property);
            if (!observable)
                fail( true &&
                    "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
            return observable;
        }
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        if (property && !thing[$mobx])
            thing[property]; // See #1072
        if (isObservableObject(thing)) {
            if (!property)
                return fail( true && "please specify a property");
            var observable = thing[$mobx].values.get(property);
            if (!observable)
                fail( true &&
                    "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
            return observable;
        }
        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
            return thing;
        }
    }
    else if (typeof thing === "function") {
        if (isReaction(thing[$mobx])) {
            // disposer function
            return thing[$mobx];
        }
    }
    return fail( true && "Cannot obtain atom from " + thing);
}
function getAdministration(thing, property) {
    if (!thing)
        fail("Expecting some object");
    if (property !== undefined)
        return getAdministration(getAtom(thing, property));
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
        return thing;
    if (isObservableMap(thing) || isObservableSet(thing))
        return thing;
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance(thing);
    if (thing[$mobx])
        return thing[$mobx];
    fail( true && "Cannot obtain administration from " + thing);
}
function getDebugName(thing, property) {
    var named;
    if (property !== undefined)
        named = getAtom(thing, property);
    else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing))
        named = getAdministration(thing);
    else
        named = getAtom(thing); // valid for arrays as well
    return named.name;
}

var toString = Object.prototype.toString;
function deepEqual(a, b, depth) {
    if (depth === void 0) { depth = -1; }
    return eq(a, b, depth);
}
// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.
function eq(a, b, depth, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b)
        return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null)
        return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a)
        return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object")
        return false;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b))
        return false;
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case "[object RegExp]":
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case "[object String]":
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return "" + a === "" + b;
        case "[object Number]":
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a)
                return +b !== +b;
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
        case "[object Symbol]":
            return (typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b));
        case "[object Map]":
        case "[object Set]":
            // Maps and Sets are unwrapped to arrays of entry-pairs, adding an incidental level.
            // Hide this extra level by increasing the depth.
            if (depth >= 0) {
                depth++;
            }
            break;
    }
    // Unwrap any wrapped objects.
    a = unwrap(a);
    b = unwrap(b);
    var areArrays = className === "[object Array]";
    if (!areArrays) {
        if (typeof a != "object" || typeof b != "object")
            return false;
        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor &&
            !(typeof aCtor === "function" &&
                aCtor instanceof aCtor &&
                typeof bCtor === "function" &&
                bCtor instanceof bCtor) &&
            ("constructor" in a && "constructor" in b)) {
            return false;
        }
    }
    if (depth === 0) {
        return false;
    }
    else if (depth < 0) {
        depth = -1;
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a)
            return bStack[length] === b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length)
            return false;
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
            if (!eq(a[length], b[length], depth - 1, aStack, bStack))
                return false;
        }
    }
    else {
        // Deep compare objects.
        var keys = Object.keys(a);
        var key = void 0;
        length = keys.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (Object.keys(b).length !== length)
            return false;
        while (length--) {
            // Deep compare each member
            key = keys[length];
            if (!(has$1(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack)))
                return false;
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
}
function unwrap(a) {
    if (isObservableArray(a))
        return a.slice();
    if (isES6Map(a) || isObservableMap(a))
        return Array.from(a.entries());
    if (isES6Set(a) || isObservableSet(a))
        return Array.from(a.entries());
    return a;
}
function has$1(a, key) {
    return Object.prototype.hasOwnProperty.call(a, key);
}

function makeIterable(iterator) {
    iterator[Symbol.iterator] = getSelf;
    return iterator;
}
function getSelf() {
    return this;
}

/*
The only reason for this file to exist is pure horror:
Without it rollup can make the bundling fail at any point in time; when it rolls up the files in the wrong order
it will cause undefined errors (for example because super classes or local variables not being hoisted).
With this file that will still happen,
but at least in this file we can magically reorder the imports with trial and error until the build succeeds again.
*/

/**
 * (c) Michel Weststrate 2015 - 2018
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
if (typeof Proxy === "undefined" || typeof Symbol === "undefined") {
    throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
}
try {
    // define process.env if needed
    // if this is not a production build in the first place
    // (in which case the expression below would be substituted with 'production')
    "development";
}
catch (e) {
    var g = getGlobal();
    if (typeof process === "undefined")
        g.process = {};
    g.process.env = {};
}
(function () {
    function testCodeMinification() { }
    if (testCodeMinification.name !== "testCodeMinification" &&
        "development" !== "production" &&
        typeof process !== 'undefined' && process.env.IGNORE_MOBX_MINIFY_WARNING !== "true") {
        // trick so it doesn't get replaced
        var varName = ["process", "env", "NODE_ENV"].join(".");
        console.warn("[mobx] you are running a minified build, but '" + varName + "' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle");
    }
})();
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    // See: https://github.com/andykog/mobx-devtools/
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: spy,
        extras: {
            getDebugName: getDebugName
        },
        $mobx: $mobx
    });
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cpjh86%5CDesktop%5CProject%5Cnextjs_first%5Cpages%5Cindex.tsx!./":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cpjh86%5CDesktop%5CProject%5Cnextjs_first%5Cpages%5Cindex.tsx ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ec7d9c0249b2ef52b74c ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ec7d9c0249b2ef52b74c */ "dll-reference dll_ec7d9c0249b2ef52b74c"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TodoList */ "./components/TodoList.tsx");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.scss */ "./pages/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");







var _dec,
    _class,
    _jsxFileName = "C:\\Users\\pjh86\\Desktop\\Project\\nextjs_first\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Index = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_9__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_9__["observer"])(_class = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = _super.call(this, props);
    _this.handleAppendTodo = _this.handleAppendTodo.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
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
      }), __jsx(_components_TodoList__WEBPACK_IMPORTED_MODULE_7__["default"], {
        list: this.props.store.todolist,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 6
        }
      })));
    }
  }, {
    key: "handleAppendTodo",
    value: function handleAppendTodo(e) {
      if (e.key == "Enter") {
        var _ref = e.target,
            value = _ref.value;
        this.props.store.addTodo({
          name: value,
          isFinished: false
        });
      }
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component)) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 2:
/*!********************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5Cpjh86%5CDesktop%5CProject%5Cnextjs_first%5Cpages%5Cindex.tsx ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5Cpjh86%5CDesktop%5CProject%5Cnextjs_first%5Cpages%5Cindex.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cpjh86%5CDesktop%5CProject%5Cnextjs_first%5Cpages%5Cindex.tsx!./");


/***/ }),

/***/ "dll-reference dll_ec7d9c0249b2ef52b74c":
/*!*******************************************!*\
  !*** external "dll_ec7d9c0249b2ef52b74c" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ec7d9c0249b2ef52b74c;

/***/ })

},[[2,"static/runtime/webpack.js","styles"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG9JdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG9MaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9ieC1yZWFjdC1saXRlL2Rpc3QvbW9ieHJlYWN0bGl0ZS5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QvZGlzdC9tb2J4cmVhY3QuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb2J4L2xpYi9tb2J4Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBkbGxfZWM3ZDljMDI0OWIyZWY1MmI3NGMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImRsbF9lYzdkOWMwMjQ5YjJlZjUyYjc0Y1wiIl0sIm5hbWVzIjpbIlRvZG9JdGVtIiwiaW5qZWN0Iiwib2JzZXJ2ZXIiLCJwcm9wcyIsImhhbmRsZVJlbW92ZVRoaXMiLCJiaW5kIiwiaGFuZGxlVG9kb0ZpbmlzaCIsIml0ZW0iLCJpc0ZpbmlzaGVkIiwibmFtZSIsInN0b3JlIiwicmVtb3ZlVG9kbyIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVUb2RvIiwiUmVhY3QiLCJDb21wb25lbnQiLCJUb2RvTGlzdCIsImxpc3QiLCJ0b2RvSXRlbUxpc3QiLCJtYXAiLCJpZCIsIkluZGV4IiwiaGFuZGxlQXBwZW5kVG9kbyIsInRvZG9saXN0IiwiZSIsImtleSIsInRhcmdldCIsInZhbHVlIiwiYWRkVG9kbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0lBVU1BLFEsV0FGTEMseURBQU0sQ0FBQyxPQUFELEMsZ0JBQ05DLDJEOzs7OztBQUVBLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2xCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLHlH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QjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTSxnQkFBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEtBQXFDO0FBQzdDLFFBQVEsRUFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsWUFBWSxLQUFxQztBQUNqRCxZQUFZLEVBQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUlBQW1JLDJCQUEyQjtBQUM5SjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBLG9EQUFvRCw4Q0FBOEMsRUFBRTtBQUNwRzs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRSw0Q0FBNEMsNEJBQTRCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIseUNBQXlDO0FBQ25FLDJCQUEyQixlQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyw0Q0FBNEM7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGFBQW9CO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSxRQUFRLGFBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUU2a0M7Ozs7Ozs7Ozs7Ozs7O0FDLzhJN2tDO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyw0Q0FBb0U7QUFDM0Y7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7O0FDdkx0QyxnSzs7Ozs7Ozs7Ozs7QUNBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUVBO0FBQ0E7SUFTTUssSyxXQUZMckIseURBQU0sQ0FBQyxPQUFELEMsZ0JBQ05DLDJEOzs7OztBQUVBLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2xCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS29CLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCbEIsSUFBdEIseUdBQXhCO0FBRmtCO0FBR2xCOzs7OzZCQUNRO0FBQ1I7QUFDQSxhQUNDO0FBQUssVUFBRSxFQUFDLEtBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGlCQUFTLEVBQUMsYUFBN0I7QUFBMkMsa0JBQVUsRUFBRSxLQUFLa0IsZ0JBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERCxFQUVDLE1BQUMsNERBQUQ7QUFBVSxZQUFJLEVBQUUsS0FBS3BCLEtBQUwsQ0FBV08sS0FBWCxDQUFpQmMsUUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZELENBREQsQ0FERDtBQVFBOzs7cUNBQ2dCQyxDLEVBQXdCO0FBQ3hDLFVBQUlBLENBQUMsQ0FBQ0MsR0FBRixJQUFTLE9BQWIsRUFBc0I7QUFBQSxtQkFDSEQsQ0FBQyxDQUFDRSxNQURDO0FBQUEsWUFDYkMsS0FEYSxRQUNiQSxLQURhO0FBRXJCLGFBQUt6QixLQUFMLENBQVdPLEtBQVgsQ0FBaUJtQixPQUFqQixDQUF5QjtBQUN4QnBCLGNBQUksRUFBRW1CLEtBRGtCO0FBRXhCcEIsb0JBQVUsRUFBRTtBQUZZLFNBQXpCO0FBSUE7QUFDRDs7OztFQXhCa0JPLDRDQUFLLENBQUNDLFM7QUEyQlhNLG9FQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQSwwQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vVG9kb0l0ZW0uc2Nzc1wiO1xyXG5pbXBvcnQgeyBJVG9kb0l0ZW0gfSBmcm9tIFwiLi9Ub2RvTGlzdFwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciwgaW5qZWN0IH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcblx0c3RvcmU/OiBTdG9yZTtcclxuXHRpdGVtOiBJVG9kb0l0ZW07XHJcbn1cclxuXHJcbkBpbmplY3QoXCJzdG9yZVwiKVxyXG5Ab2JzZXJ2ZXJcclxuY2xhc3MgVG9kb0l0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5oYW5kbGVSZW1vdmVUaGlzID0gdGhpcy5oYW5kbGVSZW1vdmVUaGlzLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmhhbmRsZVRvZG9GaW5pc2ggPSB0aGlzLmhhbmRsZVRvZG9GaW5pc2guYmluZCh0aGlzKTtcclxuXHR9XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBpdGVtIH0gPSB0aGlzLnByb3BzO1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGxpIGNsYXNzTmFtZT17XCJ0b2RvbGlzdF9faXRlbSBcIiArIChpdGVtLmlzRmluaXNoZWQgPyBcImZpbmlzaFwiIDogXCJcIil9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG9kb0ZpbmlzaH0+XHJcblx0XHRcdFx0PHA+e2l0ZW0ubmFtZX08L3A+XHJcblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbW92ZVRoaXN9Plg8L2J1dHRvbj5cclxuXHRcdFx0PC9saT5cclxuXHRcdCk7XHJcblx0fVxyXG5cdGhhbmRsZVJlbW92ZVRoaXMoKSB7XHJcblx0XHRsZXQgeyBpdGVtLCBzdG9yZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRzdG9yZS5yZW1vdmVUb2RvKGl0ZW0pO1xyXG5cdH1cclxuXHRoYW5kbGVUb2RvRmluaXNoKCkge1xyXG5cdFx0bGV0IHsgaXRlbSB9ID0gdGhpcy5wcm9wcztcclxuXHRcdGl0ZW0uaXNGaW5pc2hlZCA9ICFpdGVtLmlzRmluaXNoZWQ7XHJcblx0XHRjb25zb2xlLmxvZyhpdGVtLmlzRmluaXNoZWQpO1xyXG5cdFx0dGhpcy5wcm9wcy5zdG9yZS51cGRhdGVUb2RvKGl0ZW0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0l0ZW07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi9Ub2RvTGlzdC5zY3NzXCI7XHJcbmltcG9ydCBUb2RvSXRlbSBmcm9tIFwiLi9Ub2RvSXRlbVwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUb2RvSXRlbSB7XHJcblx0aWQ/OiBudW1iZXI7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdGlzRmluaXNoZWQ6IGJvb2xlYW47XHJcbn1cclxuQG9ic2VydmVyXHJcbmNsYXNzIFRvZG9MaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHsgbGlzdDogSVRvZG9JdGVtW10gfT4ge1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgbGlzdCB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRjb25zdCB0b2RvSXRlbUxpc3QgPSBsaXN0Lm1hcCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gPFRvZG9JdGVtIGl0ZW09e2l0ZW19IGtleT17aXRlbS5pZH0+PC9Ub2RvSXRlbT47XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiA8dWwgY2xhc3NOYW1lPVwidG9kb2xpc3RcIj57dG9kb0l0ZW1MaXN0fTwvdWw+O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZlwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuLi8uLi9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn0iLCJpbXBvcnQgeyBzcHksIGNvbmZpZ3VyZSwgZ2V0RGVwZW5kZW5jeVRyZWUsIFJlYWN0aW9uLCBvYnNlcnZhYmxlLCBydW5JbkFjdGlvbiwgdHJhbnNhY3Rpb24gfSBmcm9tICdtb2J4JztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmlmICghdXNlU3RhdGUpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwibW9ieC1yZWFjdC1saXRlIHJlcXVpcmVzIFJlYWN0IHdpdGggSG9va3Mgc3VwcG9ydFwiKTtcbn1cblxuaWYgKCFzcHkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwibW9ieC1yZWFjdC1saXRlIHJlcXVpcmVzIG1vYnggYXQgbGVhc3QgdmVyc2lvbiA0IHRvIGJlIGF2YWlsYWJsZVwiKTtcbn1cblxudmFyIGdsb2JhbElzVXNpbmdTdGF0aWNSZW5kZXJpbmcgPSBmYWxzZTtcbmZ1bmN0aW9uIHVzZVN0YXRpY1JlbmRlcmluZyhlbmFibGUpIHtcbiAgZ2xvYmFsSXNVc2luZ1N0YXRpY1JlbmRlcmluZyA9IGVuYWJsZTtcbn1cbmZ1bmN0aW9uIGlzVXNpbmdTdGF0aWNSZW5kZXJpbmcoKSB7XG4gIHJldHVybiBnbG9iYWxJc1VzaW5nU3RhdGljUmVuZGVyaW5nO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiB1c2VGb3JjZVVwZGF0ZSgpIHtcbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKDApLFxuICAgICAgc2V0VGljayA9IF91c2VTdGF0ZVsxXTtcblxuICB2YXIgdXBkYXRlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHNldFRpY2soZnVuY3Rpb24gKHRpY2spIHtcbiAgICAgIHJldHVybiB0aWNrICsgMTtcbiAgICB9KTtcbiAgfSwgW10pO1xuICByZXR1cm4gdXBkYXRlO1xufVxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSk7XG4gIHJldHVybiAhcHJvdG8gfHwgcHJvdG8gPT09IE9iamVjdC5wcm90b3R5cGU7XG59XG5mdW5jdGlvbiBnZXRTeW1ib2wobmFtZSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIFN5bWJvbC5mb3IobmFtZSk7XG4gIH1cblxuICByZXR1cm4gXCJfXyRtb2J4LXJlYWN0IFwiICsgbmFtZSArIFwiX19cIjtcbn1cbnZhciBtb2NrR2xvYmFsID0ge307XG5mdW5jdGlvbiBnZXRHbG9iYWwoKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIGdsb2JhbDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgcmV0dXJuIG1vY2tHbG9iYWw7XG59XG5cbnZhciBvYnNlcnZlckJhdGNoaW5nQ29uZmlndXJlZFN5bWJvbCA9XG4vKiNfX1BVUkVfXyovXG5nZXRTeW1ib2woXCJvYnNlcnZlckJhdGNoaW5nXCIpO1xudmFyIG9ic2VydmVyQmF0Y2hpbmcgPSBmdW5jdGlvbiBvYnNlcnZlckJhdGNoaW5nKHJlYWN0aW9uU2NoZWR1bGVyKSB7XG4gIGlmICh0eXBlb2YgcmVhY3Rpb25TY2hlZHVsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbmZpZ3VyZSh7XG4gICAgICByZWFjdGlvblNjaGVkdWxlcjogcmVhY3Rpb25TY2hlZHVsZXJcbiAgICB9KTtcbiAgfVxuXG4gIGdldEdsb2JhbCgpW29ic2VydmVyQmF0Y2hpbmdDb25maWd1cmVkU3ltYm9sXSA9IHRydWU7XG59O1xudmFyIG9ic2VydmVyQmF0Y2hpbmdPcHRPdXQgPSBmdW5jdGlvbiBvYnNlcnZlckJhdGNoaW5nT3B0T3V0KCkge1xuICBjb25maWd1cmUoe1xuICAgIHJlYWN0aW9uU2NoZWR1bGVyOiB1bmRlZmluZWRcbiAgfSk7XG4gIGdldEdsb2JhbCgpW29ic2VydmVyQmF0Y2hpbmdDb25maWd1cmVkU3ltYm9sXSA9IHRydWU7XG59O1xudmFyIGlzT2JzZXJ2ZXJCYXRjaGVkID0gZnVuY3Rpb24gaXNPYnNlcnZlckJhdGNoZWQoKSB7XG4gIHJldHVybiBnZXRHbG9iYWwoKVtvYnNlcnZlckJhdGNoaW5nQ29uZmlndXJlZFN5bWJvbF07XG59O1xuXG5mdW5jdGlvbiBwcmludERlYnVnVmFsdWUodikge1xuICByZXR1cm4gZ2V0RGVwZW5kZW5jeVRyZWUodik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRyYWNraW5nRGF0YShyZWFjdGlvbikge1xuICB2YXIgdHJhY2tpbmdEYXRhID0ge1xuICAgIGNsZWFuQXQ6IERhdGUubm93KCkgKyBDTEVBTlVQX0xFQUtFRF9SRUFDVElPTlNfQUZURVJfTUlMTElTLFxuICAgIHJlYWN0aW9uOiByZWFjdGlvblxuICB9O1xuICByZXR1cm4gdHJhY2tpbmdEYXRhO1xufVxuLyoqXHJcbiAqIFRoZSBtaW5pbXVtIHRpbWUgYmVmb3JlIHdlJ2xsIGNsZWFuIHVwIGEgUmVhY3Rpb24gY3JlYXRlZCBpbiBhIHJlbmRlclxyXG4gKiBmb3IgYSBjb21wb25lbnQgdGhhdCBoYXNuJ3QgbWFuYWdlZCB0byBydW4gaXRzIGVmZmVjdHMuIFRoaXMgbmVlZHMgdG9cclxuICogYmUgYmlnIGVub3VnaCB0byBlbnN1cmUgdGhhdCBhIGNvbXBvbmVudCB3b24ndCB0dXJuIHVwIGFuZCBoYXZlIGl0c1xyXG4gKiBlZmZlY3RzIHJ1biB3aXRob3V0IGJlaW5nIHJlLXJlbmRlcmVkLlxyXG4gKi9cblxudmFyIENMRUFOVVBfTEVBS0VEX1JFQUNUSU9OU19BRlRFUl9NSUxMSVMgPSAxMDAwMDtcbi8qKlxyXG4gKiBUaGUgZnJlcXVlbmN5IHdpdGggd2hpY2ggd2UnbGwgY2hlY2sgZm9yIGxlYWtlZCByZWFjdGlvbnMuXHJcbiAqL1xuXG52YXIgQ0xFQU5VUF9USU1FUl9MT09QX01JTExJUyA9IDEwMDAwO1xuLyoqXHJcbiAqIFJlYWN0aW9ucyBjcmVhdGVkIGJ5IGNvbXBvbmVudHMgdGhhdCBoYXZlIHlldCB0byBiZSBmdWxseSBtb3VudGVkLlxyXG4gKi9cblxudmFyIHVuY29tbWl0dGVkUmVhY3Rpb25SZWZzID1cbi8qI19fUFVSRV9fKi9cbm5ldyBTZXQoKTtcbi8qKlxyXG4gKiBMYXRlc3QgJ3VuY29tbWl0dGVkIHJlYWN0aW9ucycgY2xlYW51cCB0aW1lciBoYW5kbGUuXHJcbiAqL1xuXG52YXIgcmVhY3Rpb25DbGVhbnVwSGFuZGxlO1xuXG5mdW5jdGlvbiBlbnN1cmVDbGVhbnVwVGltZXJSdW5uaW5nKCkge1xuICBpZiAocmVhY3Rpb25DbGVhbnVwSGFuZGxlID09PSB1bmRlZmluZWQpIHtcbiAgICByZWFjdGlvbkNsZWFudXBIYW5kbGUgPSBzZXRUaW1lb3V0KGNsZWFuVW5jb21taXR0ZWRSZWFjdGlvbnMsIENMRUFOVVBfVElNRVJfTE9PUF9NSUxMSVMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNjaGVkdWxlQ2xlYW51cE9mUmVhY3Rpb25JZkxlYWtlZChyZWYpIHtcbiAgdW5jb21taXR0ZWRSZWFjdGlvblJlZnMuYWRkKHJlZik7XG4gIGVuc3VyZUNsZWFudXBUaW1lclJ1bm5pbmcoKTtcbn1cbmZ1bmN0aW9uIHJlY29yZFJlYWN0aW9uQXNDb21taXR0ZWQocmVhY3Rpb25SZWYpIHtcbiAgdW5jb21taXR0ZWRSZWFjdGlvblJlZnMuZGVsZXRlKHJlYWN0aW9uUmVmKTtcbn1cbi8qKlxyXG4gKiBSdW4gYnkgdGhlIGNsZWFudXAgdGltZXIgdG8gZGlzcG9zZSBhbnkgb3V0c3RhbmRpbmcgcmVhY3Rpb25zXHJcbiAqL1xuXG5mdW5jdGlvbiBjbGVhblVuY29tbWl0dGVkUmVhY3Rpb25zKCkge1xuICByZWFjdGlvbkNsZWFudXBIYW5kbGUgPSB1bmRlZmluZWQ7IC8vIExvb3AgdGhyb3VnaCBhbGwgdGhlIGNhbmRpZGF0ZSBsZWFrZWQgcmVhY3Rpb25zOyB0aG9zZSBvbGRlclxuICAvLyB0aGFuIENMRUFOVVBfTEVBS0VEX1JFQUNUSU9OU19BRlRFUl9NSUxMSVMgZ2V0IHRpZGllZC5cblxuICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgdW5jb21taXR0ZWRSZWFjdGlvblJlZnMuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgdmFyIHRyYWNraW5nID0gcmVmLmN1cnJlbnQ7XG5cbiAgICBpZiAodHJhY2tpbmcpIHtcbiAgICAgIGlmIChub3cgPj0gdHJhY2tpbmcuY2xlYW5BdCkge1xuICAgICAgICAvLyBJdCdzIHRpbWUgdG8gdGlkeSB1cCB0aGlzIGxlYWtlZCByZWFjdGlvbi5cbiAgICAgICAgdHJhY2tpbmcucmVhY3Rpb24uZGlzcG9zZSgpO1xuICAgICAgICByZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgIHVuY29tbWl0dGVkUmVhY3Rpb25SZWZzLmRlbGV0ZShyZWYpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHVuY29tbWl0dGVkUmVhY3Rpb25SZWZzLnNpemUgPiAwKSB7XG4gICAgLy8gV2UndmUganVzdCBmaW5pc2hlZCBhIHJvdW5kIG9mIGNsZWFudXBzIGJ1dCB0aGVyZSBhcmUgc3RpbGxcbiAgICAvLyBzb21lIGxlYWsgY2FuZGlkYXRlcyBvdXRzdGFuZGluZy5cbiAgICBlbnN1cmVDbGVhbnVwVGltZXJSdW5uaW5nKCk7XG4gIH1cbn1cblxudmFyIEVNUFRZX09CSkVDVCA9IHt9O1xuXG5mdW5jdGlvbiBvYnNlcnZlckNvbXBvbmVudE5hbWVGb3IoYmFzZUNvbXBvbmVudE5hbWUpIHtcbiAgcmV0dXJuIFwib2JzZXJ2ZXJcIiArIGJhc2VDb21wb25lbnROYW1lO1xufVxuXG52YXIgd2FybmVkQWJvdXRCYXRjaGluZyA9IGZhbHNlO1xuZnVuY3Rpb24gdXNlT2JzZXJ2ZXIoZm4sIGJhc2VDb21wb25lbnROYW1lLCBvcHRpb25zKSB7XG4gIGlmIChiYXNlQ29tcG9uZW50TmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgYmFzZUNvbXBvbmVudE5hbWUgPSBcIm9ic2VydmVkXCI7XG4gIH1cblxuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IEVNUFRZX09CSkVDVDtcbiAgfVxuXG4gIGlmIChpc1VzaW5nU3RhdGljUmVuZGVyaW5nKCkpIHtcbiAgICByZXR1cm4gZm4oKTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIXdhcm5lZEFib3V0QmF0Y2hpbmcgJiYgIWlzT2JzZXJ2ZXJCYXRjaGVkKCkpIHtcbiAgICBjb25zb2xlLndhcm4oXCJbTW9iWF0gWW91IGhhdmVuJ3QgY29uZmlndXJlZCBvYnNlcnZlciBiYXRjaGluZyB3aGljaCBtaWdodCByZXN1bHQgaW4gdW5leHBlY3RlZCBiZWhhdmlvciBpbiBzb21lIGNhc2VzLiBTZWUgbW9yZSBhdCBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngtcmVhY3QtbGl0ZS8jb2JzZXJ2ZXItYmF0Y2hpbmdcIik7XG4gICAgd2FybmVkQWJvdXRCYXRjaGluZyA9IHRydWU7XG4gIH1cblxuICB2YXIgd2FudGVkRm9yY2VVcGRhdGVIb29rID0gb3B0aW9ucy51c2VGb3JjZVVwZGF0ZSB8fCB1c2VGb3JjZVVwZGF0ZTtcbiAgdmFyIGZvcmNlVXBkYXRlID0gd2FudGVkRm9yY2VVcGRhdGVIb29rKCk7IC8vIFN0cmljdE1vZGUvQ29uY3VycmVudE1vZGUvU3VzcGVuc2UgbWF5IG1lYW4gdGhhdCBvdXIgY29tcG9uZW50IGlzXG4gIC8vIHJlbmRlcmVkIGFuZCBhYmFuZG9uZWQgbXVsdGlwbGUgdGltZXMsIHNvIHdlIG5lZWQgdG8gdHJhY2sgbGVha2VkXG4gIC8vIFJlYWN0aW9ucy5cblxuICB2YXIgcmVhY3Rpb25UcmFja2luZ1JlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICBpZiAoIXJlYWN0aW9uVHJhY2tpbmdSZWYuY3VycmVudCkge1xuICAgIC8vIEZpcnN0IHJlbmRlciBmb3IgdGhpcyBjb21wb25lbnQgKG9yIGZpcnN0IHRpbWUgc2luY2UgYSBwcmV2aW91c1xuICAgIC8vIHJlYWN0aW9uIGZyb20gYW4gYWJhbmRvbmVkIHJlbmRlciB3YXMgZGlzcG9zZWQpLlxuICAgIHZhciBuZXdSZWFjdGlvbiA9IG5ldyBSZWFjdGlvbihvYnNlcnZlckNvbXBvbmVudE5hbWVGb3IoYmFzZUNvbXBvbmVudE5hbWUpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBPYnNlcnZhYmxlIGhhcyBjaGFuZ2VkLCBtZWFuaW5nIHdlIHdhbnQgdG8gcmUtcmVuZGVyXG4gICAgICAvLyBCVVQgaWYgd2UncmUgYSBjb21wb25lbnQgdGhhdCBoYXNuJ3QgeWV0IGdvdCB0byB0aGUgdXNlRWZmZWN0KClcbiAgICAgIC8vIHN0YWdlLCB3ZSBtaWdodCBiZSBhIGNvbXBvbmVudCB0aGF0IF9zdGFydGVkXyB0byByZW5kZXIsIGJ1dFxuICAgICAgLy8gZ290IGRyb3BwZWQsIGFuZCB3ZSBkb24ndCB3YW50IHRvIG1ha2Ugc3RhdGUgY2hhbmdlcyB0aGVuLlxuICAgICAgLy8gKEl0IHRyaWdnZXJzIHdhcm5pbmdzIGluIFN0cmljdE1vZGUsIGZvciBhIHN0YXJ0LilcbiAgICAgIGlmICh0cmFja2luZ0RhdGEubW91bnRlZCkge1xuICAgICAgICAvLyBXZSBoYXZlIHJlYWNoZWQgdXNlRWZmZWN0KCksIHNvIHdlJ3JlIG1vdW50ZWQsIGFuZCBjYW4gdHJpZ2dlciBhbiB1cGRhdGVcbiAgICAgICAgZm9yY2VVcGRhdGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFdlIGhhdmVuJ3QgeWV0IHJlYWNoZWQgdXNlRWZmZWN0KCksIHNvIHdlJ2xsIG5lZWQgdG8gdHJpZ2dlciBhIHJlLXJlbmRlclxuICAgICAgICAvLyB3aGVuIChhbmQgaWYpIHVzZUVmZmVjdCgpIGFycml2ZXMuICBUaGUgZWFzaWVzdCB3YXkgdG8gZG8gdGhhdCBpcyBqdXN0IHRvXG4gICAgICAgIC8vIGRyb3Agb3VyIGN1cnJlbnQgcmVhY3Rpb24gYW5kIGFsbG93IHVzZUVmZmVjdCgpIHRvIHJlY3JlYXRlIGl0LlxuICAgICAgICBuZXdSZWFjdGlvbi5kaXNwb3NlKCk7XG4gICAgICAgIHJlYWN0aW9uVHJhY2tpbmdSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdmFyIHRyYWNraW5nRGF0YSA9IGNyZWF0ZVRyYWNraW5nRGF0YShuZXdSZWFjdGlvbik7XG4gICAgcmVhY3Rpb25UcmFja2luZ1JlZi5jdXJyZW50ID0gdHJhY2tpbmdEYXRhO1xuICAgIHNjaGVkdWxlQ2xlYW51cE9mUmVhY3Rpb25JZkxlYWtlZChyZWFjdGlvblRyYWNraW5nUmVmKTtcbiAgfVxuXG4gIHZhciByZWFjdGlvbiA9IHJlYWN0aW9uVHJhY2tpbmdSZWYuY3VycmVudC5yZWFjdGlvbjtcbiAgUmVhY3QudXNlRGVidWdWYWx1ZShyZWFjdGlvbiwgcHJpbnREZWJ1Z1ZhbHVlKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBDYWxsZWQgb24gZmlyc3QgbW91bnQgb25seVxuICAgIHJlY29yZFJlYWN0aW9uQXNDb21taXR0ZWQocmVhY3Rpb25UcmFja2luZ1JlZik7XG5cbiAgICBpZiAocmVhY3Rpb25UcmFja2luZ1JlZi5jdXJyZW50KSB7XG4gICAgICAvLyBHcmVhdC4gV2UndmUgYWxyZWFkeSBnb3Qgb3VyIHJlYWN0aW9uIGZyb20gb3VyIHJlbmRlcjtcbiAgICAgIC8vIGFsbCB3ZSBuZWVkIHRvIGRvIGlzIHRvIHJlY29yZCB0aGF0IGl0J3Mgbm93IG1vdW50ZWQsXG4gICAgICAvLyB0byBhbGxvdyBmdXR1cmUgb2JzZXJ2YWJsZSBjaGFuZ2VzIHRvIHRyaWdnZXIgcmUtcmVuZGVyc1xuICAgICAgcmVhY3Rpb25UcmFja2luZ1JlZi5jdXJyZW50Lm1vdW50ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGUgcmVhY3Rpb24gd2Ugc2V0IHVwIGluIG91ciByZW5kZXIgaGFzIGJlZW4gZGlzcG9zZWQuXG4gICAgICAvLyBUaGlzIGlzIGVpdGhlciBkdWUgdG8gYmFkIHRpbWluZ3Mgb2YgcmVuZGVyaW5ncywgZS5nLiBvdXJcbiAgICAgIC8vIGNvbXBvbmVudCB3YXMgcGF1c2VkIGZvciBhIF92ZXJ5XyBsb25nIHRpbWUsIGFuZCBvdXJcbiAgICAgIC8vIHJlYWN0aW9uIGdvdCBjbGVhbmVkIHVwLCBvciB3ZSBnb3QgYSBvYnNlcnZhYmxlIGNoYW5nZVxuICAgICAgLy8gYmV0d2VlbiByZW5kZXIgYW5kIHVzZUVmZmVjdFxuICAgICAgLy8gUmUtY3JlYXRlIHRoZSByZWFjdGlvblxuICAgICAgcmVhY3Rpb25UcmFja2luZ1JlZi5jdXJyZW50ID0ge1xuICAgICAgICByZWFjdGlvbjogbmV3IFJlYWN0aW9uKG9ic2VydmVyQ29tcG9uZW50TmFtZUZvcihiYXNlQ29tcG9uZW50TmFtZSksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSd2ZSBkZWZpbml0ZWx5IGFscmVhZHkgYmVlbiBtb3VudGVkIGF0IHRoaXMgcG9pbnRcbiAgICAgICAgICBmb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2xlYW5BdDogSW5maW5pdHlcbiAgICAgIH07XG4gICAgICBmb3JjZVVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZWFjdGlvblRyYWNraW5nUmVmLmN1cnJlbnQucmVhY3Rpb24uZGlzcG9zZSgpO1xuICAgICAgcmVhY3Rpb25UcmFja2luZ1JlZi5jdXJyZW50ID0gbnVsbDtcbiAgICB9O1xuICB9LCBbXSk7IC8vIHJlbmRlciB0aGUgb3JpZ2luYWwgY29tcG9uZW50LCBidXQgaGF2ZSB0aGVcbiAgLy8gcmVhY3Rpb24gdHJhY2sgdGhlIG9ic2VydmFibGVzLCBzbyB0aGF0IHJlbmRlcmluZ1xuICAvLyBjYW4gYmUgaW52YWxpZGF0ZWQgKHNlZSBhYm92ZSkgb25jZSBhIGRlcGVuZGVuY3kgY2hhbmdlc1xuXG4gIHZhciByZW5kZXJpbmc7XG4gIHZhciBleGNlcHRpb247XG4gIHJlYWN0aW9uLnRyYWNrKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgcmVuZGVyaW5nID0gZm4oKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBleGNlcHRpb24gPSBlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGV4Y2VwdGlvbikge1xuICAgIHRocm93IGV4Y2VwdGlvbjsgLy8gcmUtdGhyb3cgYW55IGV4Y2VwdGlvbnMgY2F0Y2hlZCBkdXJpbmcgcmVuZGVyaW5nXG4gIH1cblxuICByZXR1cm4gcmVuZGVyaW5nO1xufVxuXG5mdW5jdGlvbiBvYnNlcnZlcihiYXNlQ29tcG9uZW50LCBvcHRpb25zKSB7XG4gIC8vIFRoZSB3b3JraW5nIG9mIG9ic2VydmVyIGlzIGV4cGxhaW5lZCBzdGVwIGJ5IHN0ZXAgaW4gdGhpcyB0YWxrOiBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWNQRjRpQmVkb0YwJmZlYXR1cmU9eW91dHUuYmUmdD0xMzA3XG4gIGlmIChpc1VzaW5nU3RhdGljUmVuZGVyaW5nKCkpIHtcbiAgICByZXR1cm4gYmFzZUNvbXBvbmVudDtcbiAgfVxuXG4gIHZhciByZWFsT3B0aW9ucyA9IF9leHRlbmRzKHtcbiAgICBmb3J3YXJkUmVmOiBmYWxzZVxuICB9LCBvcHRpb25zKTtcblxuICB2YXIgYmFzZUNvbXBvbmVudE5hbWUgPSBiYXNlQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IGJhc2VDb21wb25lbnQubmFtZTtcblxuICB2YXIgd3JhcHBlZENvbXBvbmVudCA9IGZ1bmN0aW9uIHdyYXBwZWRDb21wb25lbnQocHJvcHMsIHJlZikge1xuICAgIHJldHVybiB1c2VPYnNlcnZlcihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYmFzZUNvbXBvbmVudChwcm9wcywgcmVmKTtcbiAgICB9LCBiYXNlQ29tcG9uZW50TmFtZSk7XG4gIH07XG5cbiAgd3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSA9IGJhc2VDb21wb25lbnROYW1lOyAvLyBtZW1vOyB3ZSBhcmUgbm90IGludGVyZXN0ZWQgaW4gZGVlcCB1cGRhdGVzXG4gIC8vIGluIHByb3BzOyB3ZSBhc3N1bWUgdGhhdCBpZiBkZWVwIG9iamVjdHMgYXJlIGNoYW5nZWQsXG4gIC8vIHRoaXMgaXMgaW4gb2JzZXJ2YWJsZXMsIHdoaWNoIHdvdWxkIGhhdmUgYmVlbiB0cmFja2VkIGFueXdheVxuXG4gIHZhciBtZW1vQ29tcG9uZW50O1xuXG4gIGlmIChyZWFsT3B0aW9ucy5mb3J3YXJkUmVmKSB7XG4gICAgLy8gd2UgaGF2ZSB0byB1c2UgZm9yd2FyZFJlZiBoZXJlIGJlY2F1c2U6XG4gICAgLy8gMS4gaXQgY2Fubm90IGdvIGJlZm9yZSBtZW1vLCBvbmx5IGFmdGVyIGl0XG4gICAgLy8gMi4gZm9yd2FyZFJlZiBjb252ZXJ0cyB0aGUgZnVuY3Rpb24gaW50byBhbiBhY3R1YWwgY29tcG9uZW50LCBzbyB3ZSBjYW4ndCBsZXQgdGhlIGJhc2VDb21wb25lbnQgZG8gaXRcbiAgICAvLyAgICBzaW5jZSBpdCB3b3VsZG4ndCBiZSBhIGNhbGxhYmxlIGZ1bmN0aW9uIGFueW1vcmVcbiAgICBtZW1vQ29tcG9uZW50ID0gbWVtbyhmb3J3YXJkUmVmKHdyYXBwZWRDb21wb25lbnQpKTtcbiAgfSBlbHNlIHtcbiAgICBtZW1vQ29tcG9uZW50ID0gbWVtbyh3cmFwcGVkQ29tcG9uZW50KTtcbiAgfVxuXG4gIGNvcHlTdGF0aWNQcm9wZXJ0aWVzKGJhc2VDb21wb25lbnQsIG1lbW9Db21wb25lbnQpO1xuICBtZW1vQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gYmFzZUNvbXBvbmVudE5hbWU7XG4gIHJldHVybiBtZW1vQ29tcG9uZW50O1xufSAvLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vbXJpZGd3YXkvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvYmxvYi9tYXN0ZXIvc3JjL2luZGV4LmpzXG5cbnZhciBob2lzdEJsYWNrTGlzdCA9IHtcbiAgJCR0eXBlb2Y6IHRydWUsXG4gIHJlbmRlcjogdHJ1ZSxcbiAgY29tcGFyZTogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gY29weVN0YXRpY1Byb3BlcnRpZXMoYmFzZSwgdGFyZ2V0KSB7XG4gIE9iamVjdC5rZXlzKGJhc2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghaG9pc3RCbGFja0xpc3Rba2V5XSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIGtleSkpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIE9ic2VydmVyQ29tcG9uZW50KF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIHJlbmRlciA9IF9yZWYucmVuZGVyO1xuICB2YXIgY29tcG9uZW50ID0gY2hpbGRyZW4gfHwgcmVuZGVyO1xuXG4gIGlmICh0eXBlb2YgY29tcG9uZW50ICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB1c2VPYnNlcnZlcihjb21wb25lbnQpO1xufVxuXG5PYnNlcnZlckNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBPYnNlcnZlclByb3BzQ2hlY2ssXG4gIHJlbmRlcjogT2JzZXJ2ZXJQcm9wc0NoZWNrXG59O1xuT2JzZXJ2ZXJDb21wb25lbnQuZGlzcGxheU5hbWUgPSBcIk9ic2VydmVyXCI7XG5cbmZ1bmN0aW9uIE9ic2VydmVyUHJvcHNDaGVjayhwcm9wcywga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gIHZhciBleHRyYUtleSA9IGtleSA9PT0gXCJjaGlsZHJlblwiID8gXCJyZW5kZXJcIiA6IFwiY2hpbGRyZW5cIjtcbiAgdmFyIGhhc1Byb3AgPSB0eXBlb2YgcHJvcHNba2V5XSA9PT0gXCJmdW5jdGlvblwiO1xuICB2YXIgaGFzRXh0cmFQcm9wID0gdHlwZW9mIHByb3BzW2V4dHJhS2V5XSA9PT0gXCJmdW5jdGlvblwiO1xuXG4gIGlmIChoYXNQcm9wICYmIGhhc0V4dHJhUHJvcCkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoXCJNb2JYIE9ic2VydmVyOiBEbyBub3QgdXNlIGNoaWxkcmVuIGFuZCByZW5kZXIgaW4gdGhlIHNhbWUgdGltZSBpbmBcIiArIGNvbXBvbmVudE5hbWUpO1xuICB9XG5cbiAgaWYgKGhhc1Byb3AgfHwgaGFzRXh0cmFQcm9wKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gbmV3IEVycm9yKFwiSW52YWxpZCBwcm9wIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBvZiB0eXBlIGBcIiArIHR5cGVvZiBwcm9wc1trZXldICsgXCJgIHN1cHBsaWVkIHRvXCIgKyBcIiBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLCBleHBlY3RlZCBgZnVuY3Rpb25gLlwiKTtcbn1cblxuZnVuY3Rpb24gdXNlQXNPYnNlcnZhYmxlU291cmNlSW50ZXJuYWwoY3VycmVudCwgdXNlZEJ5TG9jYWxTdG9yZSkge1xuICB2YXIgY3VscHJpdCA9IHVzZWRCeUxvY2FsU3RvcmUgPyBcInVzZUxvY2FsU3RvcmVcIiA6IFwidXNlQXNPYnNlcnZhYmxlU291cmNlXCI7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiB1c2VkQnlMb2NhbFN0b3JlKSB7XG4gICAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGN1cnJlbnQpLFxuICAgICAgICBpbml0aWFsU291cmNlID0gX1JlYWN0JHVzZVN0YXRlWzBdO1xuXG4gICAgaWYgKGluaXRpYWxTb3VyY2UgIT09IHVuZGVmaW5lZCAmJiBjdXJyZW50ID09PSB1bmRlZmluZWQgfHwgaW5pdGlhbFNvdXJjZSA9PT0gdW5kZWZpbmVkICYmIGN1cnJlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwibWFrZSBzdXJlIHlvdSBuZXZlciBwYXNzIGB1bmRlZmluZWRgIHRvIFwiICsgY3VscHJpdCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHVzZWRCeUxvY2FsU3RvcmUgJiYgY3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIWlzUGxhaW5PYmplY3QoY3VycmVudCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoY3VscHJpdCArIFwiIGV4cGVjdHMgYSBwbGFpbiBvYmplY3QgYXMgXCIgKyAodXNlZEJ5TG9jYWxTdG9yZSA/IFwic2Vjb25kXCIgOiBcImZpcnN0XCIpICsgXCIgYXJndW1lbnRcIik7XG4gIH1cblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMiA9IFJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZShjdXJyZW50LCB7fSwge1xuICAgICAgZGVlcDogZmFsc2VcbiAgICB9KTtcbiAgfSksXG4gICAgICByZXMgPSBfUmVhY3QkdXNlU3RhdGUyWzBdO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgT2JqZWN0LmtleXMocmVzKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKGN1cnJlbnQpLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInRoZSBzaGFwZSBvZiBvYmplY3RzIHBhc3NlZCB0byBcIiArIGN1bHByaXQgKyBcIiBzaG91bGQgYmUgc3RhYmxlXCIpO1xuICB9XG5cbiAgcnVuSW5BY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgIE9iamVjdC5hc3NpZ24ocmVzLCBjdXJyZW50KTtcbiAgfSk7XG4gIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiB1c2VBc09ic2VydmFibGVTb3VyY2UoY3VycmVudCkge1xuICByZXR1cm4gdXNlQXNPYnNlcnZhYmxlU291cmNlSW50ZXJuYWwoY3VycmVudCwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiB1c2VMb2NhbFN0b3JlKGluaXRpYWxpemVyLCBjdXJyZW50KSB7XG4gIHZhciBzb3VyY2UgPSB1c2VBc09ic2VydmFibGVTb3VyY2VJbnRlcm5hbChjdXJyZW50LCB0cnVlKTtcbiAgcmV0dXJuIFJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbG9jYWwgPSBvYnNlcnZhYmxlKGluaXRpYWxpemVyKHNvdXJjZSkpO1xuXG4gICAgaWYgKGlzUGxhaW5PYmplY3QobG9jYWwpKSB7XG4gICAgICBydW5JbkFjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGxvY2FsKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBsb2NhbFtrZXldO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIE5vIGlkZWEgd2h5IHRzMjUzNiBpcyBwb3BwaW5nIG91dCBoZXJlXG4gICAgICAgICAgICBsb2NhbFtrZXldID0gd3JhcEluVHJhbnNhY3Rpb24odmFsdWUsIGxvY2FsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvY2FsO1xuICB9KVswXTtcbn0gLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBiYW4tdHlwZXNcblxuZnVuY3Rpb24gd3JhcEluVHJhbnNhY3Rpb24oZm4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IHsgT2JzZXJ2ZXJDb21wb25lbnQgYXMgT2JzZXJ2ZXIsIGlzT2JzZXJ2ZXJCYXRjaGVkLCBpc1VzaW5nU3RhdGljUmVuZGVyaW5nLCBvYnNlcnZlciwgb2JzZXJ2ZXJCYXRjaGluZywgb2JzZXJ2ZXJCYXRjaGluZ09wdE91dCwgdXNlQXNPYnNlcnZhYmxlU291cmNlLCB1c2VGb3JjZVVwZGF0ZSwgdXNlTG9jYWxTdG9yZSwgdXNlT2JzZXJ2ZXIsIHVzZVN0YXRpY1JlbmRlcmluZyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW9ieHJlYWN0bGl0ZS5lc20uanMubWFwXG4iLCJpbXBvcnQgeyBSZWFjdGlvbiwgX2FsbG93U3RhdGVDaGFuZ2VzLCBfYWxsb3dTdGF0ZVJlYWRzU3RhcnQsIF9hbGxvd1N0YXRlUmVhZHNFbmQsICRtb2J4LCBjcmVhdGVBdG9tLCB1bnRyYWNrZWQsIGlzT2JzZXJ2YWJsZU1hcCwgaXNPYnNlcnZhYmxlT2JqZWN0LCBpc09ic2VydmFibGVBcnJheSwgb2JzZXJ2YWJsZSB9IGZyb20gJ21vYngnO1xuaW1wb3J0IFJlYWN0X19kZWZhdWx0LCB7IFB1cmVDb21wb25lbnQsIENvbXBvbmVudCwgZm9yd2FyZFJlZiwgbWVtbywgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzVXNpbmdTdGF0aWNSZW5kZXJpbmcsIE9ic2VydmVyLCBvYnNlcnZlciBhcyBvYnNlcnZlciQxIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJztcbmV4cG9ydCB7IE9ic2VydmVyLCBpc09ic2VydmVyQmF0Y2hlZCwgaXNVc2luZ1N0YXRpY1JlbmRlcmluZywgb2JzZXJ2ZXJCYXRjaGluZywgb2JzZXJ2ZXJCYXRjaGluZ09wdE91dCwgdXNlQXNPYnNlcnZhYmxlU291cmNlLCB1c2VMb2NhbFN0b3JlLCB1c2VPYnNlcnZlciwgdXNlU3RhdGljUmVuZGVyaW5nIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJztcblxudmFyIHN5bWJvbElkID0gMDtcblxuZnVuY3Rpb24gY3JlYXRlU3ltYm9sKG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiBTeW1ib2wobmFtZSk7XG4gIH1cblxuICB2YXIgc3ltYm9sID0gXCJfXyRtb2J4LXJlYWN0IFwiICsgbmFtZSArIFwiIChcIiArIHN5bWJvbElkICsgXCIpXCI7XG4gIHN5bWJvbElkKys7XG4gIHJldHVybiBzeW1ib2w7XG59XG5cbnZhciBjcmVhdGVkU3ltYm9scyA9IHt9O1xuZnVuY3Rpb24gbmV3U3ltYm9sKG5hbWUpIHtcbiAgaWYgKCFjcmVhdGVkU3ltYm9sc1tuYW1lXSkge1xuICAgIGNyZWF0ZWRTeW1ib2xzW25hbWVdID0gY3JlYXRlU3ltYm9sKG5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZWRTeW1ib2xzW25hbWVdO1xufVxuZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgLy9Gcm9tOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL2M2OTkwNGE1MTFiOTAwMjY2OTM1MTY4MjIzMDYzZGQ4NzcyZGZjNDAvcGFja2FnZXMvZmJqcy9zcmMvY29yZS9zaGFsbG93RXF1YWwuanNcbiAgaWYgKGlzKG9iakEsIG9iakIpKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAodHlwZW9mIG9iakEgIT09IFwib2JqZWN0XCIgfHwgb2JqQSA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqQiAhPT0gXCJvYmplY3RcIiB8fCBvYmpCID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChvYmpCLCBrZXlzQVtpXSkgfHwgIWlzKG9iakFba2V5c0FbaV1dLCBvYmpCW2tleXNBW2ldXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXMoeCwgeSkge1xuICAvLyBGcm9tOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL2M2OTkwNGE1MTFiOTAwMjY2OTM1MTY4MjIzMDYzZGQ4NzcyZGZjNDAvcGFja2FnZXMvZmJqcy9zcmMvY29yZS9zaGFsbG93RXF1YWwuanNcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgfVxufSAvLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vbXJpZGd3YXkvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvYmxvYi9tYXN0ZXIvc3JjL2luZGV4LmpzXG5cblxudmFyIGhvaXN0QmxhY2tMaXN0ID0ge1xuICAkJHR5cGVvZjogMSxcbiAgcmVuZGVyOiAxLFxuICBjb21wYXJlOiAxLFxuICB0eXBlOiAxLFxuICBjaGlsZENvbnRleHRUeXBlczogMSxcbiAgY29udGV4dFR5cGU6IDEsXG4gIGNvbnRleHRUeXBlczogMSxcbiAgZGVmYXVsdFByb3BzOiAxLFxuICBnZXREZWZhdWx0UHJvcHM6IDEsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogMSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiAxLFxuICBtaXhpbnM6IDEsXG4gIHByb3BUeXBlczogMVxufTtcbmZ1bmN0aW9uIGNvcHlTdGF0aWNQcm9wZXJ0aWVzKGJhc2UsIHRhcmdldCkge1xuICB2YXIgcHJvdG9Qcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlKSk7XG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGJhc2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghaG9pc3RCbGFja0xpc3Rba2V5XSAmJiBwcm90b1Byb3BzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBrZXkpKTtcbiAgICB9XG4gIH0pO1xufVxuLyoqXHJcbiAqIEhlbHBlciB0byBzZXQgYHByb3BgIHRvIGB0aGlzYCBhcyBub24tZW51bWVyYWJsZSAoaGlkZGVuIHByb3ApXHJcbiAqIEBwYXJhbSB0YXJnZXRcclxuICogQHBhcmFtIHByb3BcclxuICogQHBhcmFtIHZhbHVlXHJcbiAqL1xuXG5mdW5jdGlvbiBzZXRIaWRkZW5Qcm9wKHRhcmdldCwgcHJvcCwgdmFsdWUpIHtcbiAgaWYgKCFPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIHByb3ApKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcCwge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICB9XG59XG4vKipcclxuICogVXRpbGl0aWVzIGZvciBwYXRjaGluZyBjb21wb25lbnRXaWxsVW5tb3VudCwgdG8gbWFrZSBzdXJlIEBkaXNwb3NlT25Vbm1vdW50IHdvcmtzIGNvcnJlY3RseSBpY20gd2l0aCB1c2VyIGRlZmluZWQgaG9va3NcclxuICogYW5kIHRoZSBoYW5kbGVyIHByb3ZpZGVkIGJ5IG1vYngtcmVhY3RcclxuICovXG5cbnZhciBtb2J4TWl4aW5zID1cbi8qI19fUFVSRV9fKi9cbm5ld1N5bWJvbChcInBhdGNoTWl4aW5zXCIpO1xudmFyIG1vYnhQYXRjaGVkRGVmaW5pdGlvbiA9XG4vKiNfX1BVUkVfXyovXG5uZXdTeW1ib2woXCJwYXRjaGVkRGVmaW5pdGlvblwiKTtcblxuZnVuY3Rpb24gZ2V0TWl4aW5zKHRhcmdldCwgbWV0aG9kTmFtZSkge1xuICB2YXIgbWl4aW5zID0gdGFyZ2V0W21vYnhNaXhpbnNdID0gdGFyZ2V0W21vYnhNaXhpbnNdIHx8IHt9O1xuICB2YXIgbWV0aG9kTWl4aW5zID0gbWl4aW5zW21ldGhvZE5hbWVdID0gbWl4aW5zW21ldGhvZE5hbWVdIHx8IHt9O1xuICBtZXRob2RNaXhpbnMubG9ja3MgPSBtZXRob2RNaXhpbnMubG9ja3MgfHwgMDtcbiAgbWV0aG9kTWl4aW5zLm1ldGhvZHMgPSBtZXRob2RNaXhpbnMubWV0aG9kcyB8fCBbXTtcbiAgcmV0dXJuIG1ldGhvZE1peGlucztcbn1cblxuZnVuY3Rpb24gd3JhcHBlcihyZWFsTWV0aG9kLCBtaXhpbnMpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICAvLyBsb2NrcyBhcmUgdXNlZCB0byBlbnN1cmUgdGhhdCBtaXhpbnMgYXJlIGludm9rZWQgb25seSBvbmNlIHBlciBpbnZvY2F0aW9uLCBldmVuIG9uIHJlY3Vyc2l2ZSBjYWxsc1xuICBtaXhpbnMubG9ja3MrKztcblxuICB0cnkge1xuICAgIHZhciByZXRWYWw7XG5cbiAgICBpZiAocmVhbE1ldGhvZCAhPT0gdW5kZWZpbmVkICYmIHJlYWxNZXRob2QgIT09IG51bGwpIHtcbiAgICAgIHJldFZhbCA9IHJlYWxNZXRob2QuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldFZhbDtcbiAgfSBmaW5hbGx5IHtcbiAgICBtaXhpbnMubG9ja3MtLTtcblxuICAgIGlmIChtaXhpbnMubG9ja3MgPT09IDApIHtcbiAgICAgIG1peGlucy5tZXRob2RzLmZvckVhY2goZnVuY3Rpb24gKG14KSB7XG4gICAgICAgIG14LmFwcGx5KF90aGlzLCBhcmdzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB3cmFwRnVuY3Rpb24ocmVhbE1ldGhvZCwgbWl4aW5zKSB7XG4gIHZhciBmbiA9IGZ1bmN0aW9uIGZuKCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHdyYXBwZXIuY2FsbC5hcHBseSh3cmFwcGVyLCBbdGhpcywgcmVhbE1ldGhvZCwgbWl4aW5zXS5jb25jYXQoYXJncykpO1xuICB9O1xuXG4gIHJldHVybiBmbjtcbn1cblxuZnVuY3Rpb24gcGF0Y2godGFyZ2V0LCBtZXRob2ROYW1lLCBtaXhpbk1ldGhvZCkge1xuICB2YXIgbWl4aW5zID0gZ2V0TWl4aW5zKHRhcmdldCwgbWV0aG9kTmFtZSk7XG5cbiAgaWYgKG1peGlucy5tZXRob2RzLmluZGV4T2YobWl4aW5NZXRob2QpIDwgMCkge1xuICAgIG1peGlucy5tZXRob2RzLnB1c2gobWl4aW5NZXRob2QpO1xuICB9XG5cbiAgdmFyIG9sZERlZmluaXRpb24gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgbWV0aG9kTmFtZSk7XG5cbiAgaWYgKG9sZERlZmluaXRpb24gJiYgb2xkRGVmaW5pdGlvblttb2J4UGF0Y2hlZERlZmluaXRpb25dKSB7XG4gICAgLy8gYWxyZWFkeSBwYXRjaGVkIGRlZmluaXRpb24sIGRvIG5vdCByZXBhdGNoXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsTWV0aG9kID0gdGFyZ2V0W21ldGhvZE5hbWVdO1xuICB2YXIgbmV3RGVmaW5pdGlvbiA9IGNyZWF0ZURlZmluaXRpb24odGFyZ2V0LCBtZXRob2ROYW1lLCBvbGREZWZpbml0aW9uID8gb2xkRGVmaW5pdGlvbi5lbnVtZXJhYmxlIDogdW5kZWZpbmVkLCBtaXhpbnMsIG9yaWdpbmFsTWV0aG9kKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbWV0aG9kTmFtZSwgbmV3RGVmaW5pdGlvbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlZmluaXRpb24odGFyZ2V0LCBtZXRob2ROYW1lLCBlbnVtZXJhYmxlLCBtaXhpbnMsIG9yaWdpbmFsTWV0aG9kKSB7XG4gIHZhciBfcmVmO1xuXG4gIHZhciB3cmFwcGVkRnVuYyA9IHdyYXBGdW5jdGlvbihvcmlnaW5hbE1ldGhvZCwgbWl4aW5zKTtcbiAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZlttb2J4UGF0Y2hlZERlZmluaXRpb25dID0gdHJ1ZSwgX3JlZi5nZXQgPSBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIHdyYXBwZWRGdW5jO1xuICB9LCBfcmVmLnNldCA9IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgIGlmICh0aGlzID09PSB0YXJnZXQpIHtcbiAgICAgIHdyYXBwZWRGdW5jID0gd3JhcEZ1bmN0aW9uKHZhbHVlLCBtaXhpbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB3aGVuIGl0IGlzIGFuIGluc3RhbmNlIG9mIHRoZSBwcm90b3R5cGUvYSBjaGlsZCBwcm90b3R5cGUgcGF0Y2ggdGhhdCBwYXJ0aWN1bGFyIGNhc2UgYWdhaW4gc2VwYXJhdGVseVxuICAgICAgLy8gc2luY2Ugd2UgbmVlZCB0byBzdG9yZSBzZXBhcmF0ZSB2YWx1ZXMgZGVwZW5kaW5nIG9uIHdldGhlciBpdCBpcyB0aGUgYWN0dWFsIGluc3RhbmNlLCB0aGUgcHJvdG90eXBlLCBldGNcbiAgICAgIC8vIGUuZy4gdGhlIG1ldGhvZCBmb3Igc3VwZXIgbWlnaHQgbm90IGJlIHRoZSBzYW1lIGFzIHRoZSBtZXRob2QgZm9yIHRoZSBwcm90b3R5cGUgd2hpY2ggbWlnaHQgYmUgbm90IHRoZSBzYW1lXG4gICAgICAvLyBhcyB0aGUgbWV0aG9kIGZvciB0aGUgaW5zdGFuY2VcbiAgICAgIHZhciBuZXdEZWZpbml0aW9uID0gY3JlYXRlRGVmaW5pdGlvbih0aGlzLCBtZXRob2ROYW1lLCBlbnVtZXJhYmxlLCBtaXhpbnMsIHZhbHVlKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBtZXRob2ROYW1lLCBuZXdEZWZpbml0aW9uKTtcbiAgICB9XG4gIH0sIF9yZWYuY29uZmlndXJhYmxlID0gdHJ1ZSwgX3JlZi5lbnVtZXJhYmxlID0gZW51bWVyYWJsZSwgX3JlZjtcbn1cblxudmFyIG1vYnhBZG1pblByb3BlcnR5ID0gJG1vYnggfHwgXCIkbW9ieFwiO1xudmFyIG1vYnhJc1VubW91bnRlZCA9XG4vKiNfX1BVUkVfXyovXG5uZXdTeW1ib2woXCJpc1VubW91bnRlZFwiKTtcbnZhciBza2lwUmVuZGVyS2V5ID1cbi8qI19fUFVSRV9fKi9cbm5ld1N5bWJvbChcInNraXBSZW5kZXJcIik7XG52YXIgaXNGb3JjaW5nVXBkYXRlS2V5ID1cbi8qI19fUFVSRV9fKi9cbm5ld1N5bWJvbChcImlzRm9yY2luZ1VwZGF0ZVwiKTtcbmZ1bmN0aW9uIG1ha2VDbGFzc0NvbXBvbmVudE9ic2VydmVyKGNvbXBvbmVudENsYXNzKSB7XG4gIHZhciB0YXJnZXQgPSBjb21wb25lbnRDbGFzcy5wcm90b3R5cGU7XG4gIGlmICh0YXJnZXQuY29tcG9uZW50V2lsbFJlYWN0KSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY29tcG9uZW50V2lsbFJlYWN0IGxpZmUtY3ljbGUgZXZlbnQgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZFwiKTtcblxuICBpZiAoY29tcG9uZW50Q2xhc3NbXCJfX3Byb3RvX19cIl0gIT09IFB1cmVDb21wb25lbnQpIHtcbiAgICBpZiAoIXRhcmdldC5zaG91bGRDb21wb25lbnRVcGRhdGUpIHRhcmdldC5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBvYnNlcnZlclNDVTtlbHNlIGlmICh0YXJnZXQuc2hvdWxkQ29tcG9uZW50VXBkYXRlICE9PSBvYnNlcnZlclNDVSkgLy8gbi5iLiB1bmVxdWFsIGNoZWNrLCBpbnN0ZWFkIG9mIGV4aXN0ZW5jZSBjaGVjaywgYXMgQG9ic2VydmVyIG1pZ2h0IGJlIG9uIHN1cGVyY2xhc3MgYXMgd2VsbFxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSXQgaXMgbm90IGFsbG93ZWQgdG8gdXNlIHNob3VsZENvbXBvbmVudFVwZGF0ZSBpbiBvYnNlcnZlciBiYXNlZCBjb21wb25lbnRzLlwiKTtcbiAgfSAvLyB0aGlzLnByb3BzIGFuZCB0aGlzLnN0YXRlIGFyZSBtYWRlIG9ic2VydmFibGUsIGp1c3QgdG8gbWFrZSBzdXJlIEBjb21wdXRlZCBmaWVsZHMgdGhhdFxuICAvLyBhcmUgZGVmaW5lZCBpbnNpZGUgdGhlIGNvbXBvbmVudCwgYW5kIHdoaWNoIHJlbHkgb24gc3RhdGUgb3IgcHJvcHMsIHJlLWNvbXB1dGUgaWYgc3RhdGUgb3IgcHJvcHMgY2hhbmdlXG4gIC8vIChvdGhlcndpc2UgdGhlIGNvbXB1dGVkIHdvdWxkbid0IHVwZGF0ZSBhbmQgYmVjb21lIHN0YWxlIG9uIHByb3BzIGNoYW5nZSwgc2luY2UgcHJvcHMgYXJlIG5vdCBvYnNlcnZhYmxlKVxuICAvLyBIb3dldmVyLCB0aGlzIHNvbHV0aW9uIGlzIG5vdCB3aXRob3V0IGl0J3Mgb3duIHByb2JsZW1zOiBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngtcmVhY3QvaXNzdWVzP3V0Zjg9JUUyJTlDJTkzJnE9aXMlM0Fpc3N1ZStsYWJlbCUzQW9ic2VydmFibGUtcHJvcHMtb3Itbm90K1xuXG5cbiAgbWFrZU9ic2VydmFibGVQcm9wKHRhcmdldCwgXCJwcm9wc1wiKTtcbiAgbWFrZU9ic2VydmFibGVQcm9wKHRhcmdldCwgXCJzdGF0ZVwiKTtcbiAgdmFyIGJhc2VSZW5kZXIgPSB0YXJnZXQucmVuZGVyO1xuXG4gIHRhcmdldC5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG1ha2VDb21wb25lbnRSZWFjdGl2ZS5jYWxsKHRoaXMsIGJhc2VSZW5kZXIpO1xuICB9O1xuXG4gIHBhdGNoKHRhcmdldCwgXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGlzVXNpbmdTdGF0aWNSZW5kZXJpbmcoKSA9PT0gdHJ1ZSkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMucmVuZGVyW21vYnhBZG1pblByb3BlcnR5XSkge1xuICAgICAgdGhpcy5yZW5kZXJbbW9ieEFkbWluUHJvcGVydHldLmRpc3Bvc2UoKTtcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gZ2V0RGlzcGxheU5hbWUodGhpcyk7XG4gICAgICBjb25zb2xlLndhcm4oXCJUaGUgcmVuZGVyIGZ1bmN0aW9uIGZvciBhbiBvYnNlcnZlciBjb21wb25lbnQgKFwiICsgZGlzcGxheU5hbWUgKyBcIikgd2FzIG1vZGlmaWVkIGFmdGVyIE1vYlggYXR0YWNoZWQuIFRoaXMgaXMgbm90IHN1cHBvcnRlZCwgc2luY2UgdGhlIG5ldyBmdW5jdGlvbiBjYW4ndCBiZSB0cmlnZ2VyZWQgYnkgTW9iWC5cIik7XG4gICAgfVxuXG4gICAgdGhpc1ttb2J4SXNVbm1vdW50ZWRdID0gdHJ1ZTtcbiAgfSk7XG4gIHJldHVybiBjb21wb25lbnRDbGFzcztcbn0gLy8gR2VuZXJhdGVzIGEgZnJpZW5kbHkgbmFtZSBmb3IgZGVidWdnaW5nXG5cbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKGNvbXApIHtcbiAgcmV0dXJuIGNvbXAuZGlzcGxheU5hbWUgfHwgY29tcC5uYW1lIHx8IGNvbXAuY29uc3RydWN0b3IgJiYgKGNvbXAuY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgY29tcC5jb25zdHJ1Y3Rvci5uYW1lKSB8fCBcIjxjb21wb25lbnQ+XCI7XG59XG5cbmZ1bmN0aW9uIG1ha2VDb21wb25lbnRSZWFjdGl2ZShyZW5kZXIpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICBpZiAoaXNVc2luZ1N0YXRpY1JlbmRlcmluZygpID09PSB0cnVlKSByZXR1cm4gcmVuZGVyLmNhbGwodGhpcyk7XG4gIC8qKlxyXG4gICAqIElmIHByb3BzIGFyZSBzaGFsbG93bHkgbW9kaWZpZWQsIHJlYWN0IHdpbGwgcmVuZGVyIGFueXdheSxcclxuICAgKiBzbyBhdG9tLnJlcG9ydENoYW5nZWQoKSBzaG91bGQgbm90IHJlc3VsdCBpbiB5ZXQgYW5vdGhlciByZS1yZW5kZXJcclxuICAgKi9cblxuICBzZXRIaWRkZW5Qcm9wKHRoaXMsIHNraXBSZW5kZXJLZXksIGZhbHNlKTtcbiAgLyoqXHJcbiAgICogZm9yY2VVcGRhdGUgd2lsbCByZS1hc3NpZ24gdGhpcy5wcm9wcy4gV2UgZG9uJ3Qgd2FudCB0aGF0IHRvIGNhdXNlIGEgbG9vcCxcclxuICAgKiBzbyBkZXRlY3QgdGhlc2UgY2hhbmdlc1xyXG4gICAqL1xuXG4gIHNldEhpZGRlblByb3AodGhpcywgaXNGb3JjaW5nVXBkYXRlS2V5LCBmYWxzZSk7XG4gIHZhciBpbml0aWFsTmFtZSA9IGdldERpc3BsYXlOYW1lKHRoaXMpO1xuICB2YXIgYmFzZVJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICB2YXIgaXNSZW5kZXJpbmdQZW5kaW5nID0gZmFsc2U7XG4gIHZhciByZWFjdGlvbiA9IG5ldyBSZWFjdGlvbihpbml0aWFsTmFtZSArIFwiLnJlbmRlcigpXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWlzUmVuZGVyaW5nUGVuZGluZykge1xuICAgICAgLy8gTi5CLiBHZXR0aW5nIGhlcmUgKmJlZm9yZSBtb3VudGluZyogbWVhbnMgdGhhdCBhIGNvbXBvbmVudCBjb25zdHJ1Y3RvciBoYXMgc2lkZSBlZmZlY3RzIChzZWUgdGhlIHJlbGV2YW50IHRlc3QgaW4gbWlzYy5qcylcbiAgICAgIC8vIFRoaXMgdW5pZGlvbWF0aWMgUmVhY3QgdXNhZ2UgYnV0IFJlYWN0IHdpbGwgY29ycmVjdGx5IHdhcm4gYWJvdXQgdGhpcyBzbyB3ZSBjb250aW51ZSBhcyB1c3VhbFxuICAgICAgLy8gU2VlICM4NSAvIFB1bGwgIzQ0XG4gICAgICBpc1JlbmRlcmluZ1BlbmRpbmcgPSB0cnVlO1xuXG4gICAgICBpZiAoX3RoaXNbbW9ieElzVW5tb3VudGVkXSAhPT0gdHJ1ZSkge1xuICAgICAgICB2YXIgaGFzRXJyb3IgPSB0cnVlO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgc2V0SGlkZGVuUHJvcChfdGhpcywgaXNGb3JjaW5nVXBkYXRlS2V5LCB0cnVlKTtcbiAgICAgICAgICBpZiAoIV90aGlzW3NraXBSZW5kZXJLZXldKSBDb21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlLmNhbGwoX3RoaXMpO1xuICAgICAgICAgIGhhc0Vycm9yID0gZmFsc2U7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgc2V0SGlkZGVuUHJvcChfdGhpcywgaXNGb3JjaW5nVXBkYXRlS2V5LCBmYWxzZSk7XG4gICAgICAgICAgaWYgKGhhc0Vycm9yKSByZWFjdGlvbi5kaXNwb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZWFjdGlvbltcInJlYWN0Q29tcG9uZW50XCJdID0gdGhpcztcbiAgcmVhY3RpdmVSZW5kZXJbbW9ieEFkbWluUHJvcGVydHldID0gcmVhY3Rpb247XG4gIHRoaXMucmVuZGVyID0gcmVhY3RpdmVSZW5kZXI7XG5cbiAgZnVuY3Rpb24gcmVhY3RpdmVSZW5kZXIoKSB7XG4gICAgaXNSZW5kZXJpbmdQZW5kaW5nID0gZmFsc2U7XG4gICAgdmFyIGV4Y2VwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB2YXIgcmVuZGVyaW5nID0gdW5kZWZpbmVkO1xuICAgIHJlYWN0aW9uLnRyYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlbmRlcmluZyA9IF9hbGxvd1N0YXRlQ2hhbmdlcyhmYWxzZSwgYmFzZVJlbmRlcik7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGV4Y2VwdGlvbiA9IGU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZXhjZXB0aW9uKSB7XG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbmRlcmluZztcbiAgfVxuXG4gIHJldHVybiByZWFjdGl2ZVJlbmRlci5jYWxsKHRoaXMpO1xufVxuXG5mdW5jdGlvbiBvYnNlcnZlclNDVShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICBpZiAoaXNVc2luZ1N0YXRpY1JlbmRlcmluZygpKSB7XG4gICAgY29uc29sZS53YXJuKFwiW21vYngtcmVhY3RdIEl0IHNlZW1zIHRoYXQgYSByZS1yZW5kZXJpbmcgb2YgYSBSZWFjdCBjb21wb25lbnQgaXMgdHJpZ2dlcmVkIHdoaWxlIGluIHN0YXRpYyAoc2VydmVyLXNpZGUpIG1vZGUuIFBsZWFzZSBtYWtlIHN1cmUgY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgb25seSBvbmNlIHNlcnZlci1zaWRlLlwiKTtcbiAgfSAvLyB1cGRhdGUgb24gYW55IHN0YXRlIGNoYW5nZXMgKGFzIGlzIHRoZSBkZWZhdWx0KVxuXG5cbiAgaWYgKHRoaXMuc3RhdGUgIT09IG5leHRTdGF0ZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIHVwZGF0ZSBpZiBwcm9wcyBhcmUgc2hhbGxvd2x5IG5vdCBlcXVhbCwgaW5zcGlyZWQgYnkgUHVyZVJlbmRlck1peGluXG4gIC8vIHdlIGNvdWxkIHJldHVybiBqdXN0ICdmYWxzZScgaGVyZSwgYW5kIGF2b2lkIHRoZSBgc2tpcFJlbmRlcmAgY2hlY2tzIGV0Y1xuICAvLyBob3dldmVyLCBpdCBpcyBuaWNlciBpZiBsaWZlY3ljbGUgZXZlbnRzIGFyZSB0cmlnZ2VyZWQgbGlrZSB1c3VhbGx5LFxuICAvLyBzbyB3ZSByZXR1cm4gdHJ1ZSBoZXJlIGlmIHByb3BzIGFyZSBzaGFsbG93bHkgbW9kaWZpZWQuXG5cblxuICByZXR1cm4gIXNoYWxsb3dFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpO1xufVxuXG5mdW5jdGlvbiBtYWtlT2JzZXJ2YWJsZVByb3AodGFyZ2V0LCBwcm9wTmFtZSkge1xuICB2YXIgdmFsdWVIb2xkZXJLZXkgPSBuZXdTeW1ib2woXCJyZWFjdFByb3BfXCIgKyBwcm9wTmFtZSArIFwiX3ZhbHVlSG9sZGVyXCIpO1xuICB2YXIgYXRvbUhvbGRlcktleSA9IG5ld1N5bWJvbChcInJlYWN0UHJvcF9cIiArIHByb3BOYW1lICsgXCJfYXRvbUhvbGRlclwiKTtcblxuICBmdW5jdGlvbiBnZXRBdG9tKCkge1xuICAgIGlmICghdGhpc1thdG9tSG9sZGVyS2V5XSkge1xuICAgICAgc2V0SGlkZGVuUHJvcCh0aGlzLCBhdG9tSG9sZGVyS2V5LCBjcmVhdGVBdG9tKFwicmVhY3RpdmUgXCIgKyBwcm9wTmFtZSkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzW2F0b21Ib2xkZXJLZXldO1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcE5hbWUsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBwcmV2UmVhZFN0YXRlID0gZmFsc2U7XG5cbiAgICAgIGlmIChfYWxsb3dTdGF0ZVJlYWRzU3RhcnQgJiYgX2FsbG93U3RhdGVSZWFkc0VuZCkge1xuICAgICAgICBwcmV2UmVhZFN0YXRlID0gX2FsbG93U3RhdGVSZWFkc1N0YXJ0KHRydWUpO1xuICAgICAgfVxuXG4gICAgICBnZXRBdG9tLmNhbGwodGhpcykucmVwb3J0T2JzZXJ2ZWQoKTtcblxuICAgICAgaWYgKF9hbGxvd1N0YXRlUmVhZHNTdGFydCAmJiBfYWxsb3dTdGF0ZVJlYWRzRW5kKSB7XG4gICAgICAgIF9hbGxvd1N0YXRlUmVhZHNFbmQocHJldlJlYWRTdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzW3ZhbHVlSG9sZGVyS2V5XTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHYpIHtcbiAgICAgIGlmICghdGhpc1tpc0ZvcmNpbmdVcGRhdGVLZXldICYmICFzaGFsbG93RXF1YWwodGhpc1t2YWx1ZUhvbGRlcktleV0sIHYpKSB7XG4gICAgICAgIHNldEhpZGRlblByb3AodGhpcywgdmFsdWVIb2xkZXJLZXksIHYpO1xuICAgICAgICBzZXRIaWRkZW5Qcm9wKHRoaXMsIHNraXBSZW5kZXJLZXksIHRydWUpO1xuICAgICAgICBnZXRBdG9tLmNhbGwodGhpcykucmVwb3J0Q2hhbmdlZCgpO1xuICAgICAgICBzZXRIaWRkZW5Qcm9wKHRoaXMsIHNraXBSZW5kZXJLZXksIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEhpZGRlblByb3AodGhpcywgdmFsdWVIb2xkZXJLZXksIHYpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLmZvcjsgLy8gVXNpbmcgcmVhY3QtaXMgaGFkIHNvbWUgaXNzdWVzIChhbmQgb3BlcmF0ZXMgb24gZWxlbWVudHMsIG5vdCBvbiB0eXBlcyksIHNlZSAjNjA4IC8gIzYwOVxuXG52YXIgUmVhY3RGb3J3YXJkUmVmU3ltYm9sID0gaGFzU3ltYm9sID9cbi8qI19fUFVSRV9fKi9cblN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSA6IHR5cGVvZiBmb3J3YXJkUmVmID09PSBcImZ1bmN0aW9uXCIgJiZcbi8qI19fUFVSRV9fKi9cbmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBudWxsO1xufSlbXCIkJHR5cGVvZlwiXTtcbnZhciBSZWFjdE1lbW9TeW1ib2wgPSBoYXNTeW1ib2wgP1xuLyojX19QVVJFX18qL1xuU3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikgOiB0eXBlb2YgbWVtbyA9PT0gXCJmdW5jdGlvblwiICYmXG4vKiNfX1BVUkVfXyovXG5tZW1vKGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbnVsbDtcbn0pW1wiJCR0eXBlb2ZcIl07XG4vKipcclxuICogT2JzZXJ2ZXIgZnVuY3Rpb24gLyBkZWNvcmF0b3JcclxuICovXG5cbmZ1bmN0aW9uIG9ic2VydmVyKGNvbXBvbmVudCkge1xuICBpZiAoY29tcG9uZW50W1wiaXNNb2J4SW5qZWN0b3JcIl0gPT09IHRydWUpIHtcbiAgICBjb25zb2xlLndhcm4oXCJNb2J4IG9ic2VydmVyOiBZb3UgYXJlIHRyeWluZyB0byB1c2UgJ29ic2VydmVyJyBvbiBhIGNvbXBvbmVudCB0aGF0IGFscmVhZHkgaGFzICdpbmplY3QnLiBQbGVhc2UgYXBwbHkgJ29ic2VydmVyJyBiZWZvcmUgYXBwbHlpbmcgJ2luamVjdCdcIik7XG4gIH1cblxuICBpZiAoUmVhY3RNZW1vU3ltYm9sICYmIGNvbXBvbmVudFtcIiQkdHlwZW9mXCJdID09PSBSZWFjdE1lbW9TeW1ib2wpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNb2J4IG9ic2VydmVyOiBZb3UgYXJlIHRyeWluZyB0byB1c2UgJ29ic2VydmVyJyBvbiBhIGZ1bmN0aW9uIGNvbXBvbmVudCB3cmFwcGVkIGluIGVpdGhlciBhbm90aGVyIG9ic2VydmVyIG9yICdSZWFjdC5tZW1vJy4gVGhlIG9ic2VydmVyIGFscmVhZHkgYXBwbGllcyAnUmVhY3QubWVtbycgZm9yIHlvdS5cIik7XG4gIH0gLy8gVW53cmFwIGZvcndhcmQgcmVmcyBpbnRvIGA8T2JzZXJ2ZXI+YCBjb21wb25lbnRcbiAgLy8gd2UgbmVlZCB0byB1bndyYXAgdGhlIHJlbmRlciwgYmVjYXVzZSBpdCBpcyB0aGUgaW5uZXIgcmVuZGVyIHRoYXQgbmVlZHMgdG8gYmUgdHJhY2tlZCxcbiAgLy8gbm90IHRoZSBGb3J3YXJkUmVmIEhvQ1xuXG5cbiAgaWYgKFJlYWN0Rm9yd2FyZFJlZlN5bWJvbCAmJiBjb21wb25lbnRbXCIkJHR5cGVvZlwiXSA9PT0gUmVhY3RGb3J3YXJkUmVmU3ltYm9sKSB7XG4gICAgdmFyIGJhc2VSZW5kZXIgPSBjb21wb25lbnRbXCJyZW5kZXJcIl07XG4gICAgaWYgKHR5cGVvZiBiYXNlUmVuZGVyICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcihcInJlbmRlciBwcm9wZXJ0eSBvZiBGb3J3YXJkUmVmIHdhcyBub3QgYSBmdW5jdGlvblwiKTtcbiAgICByZXR1cm4gZm9yd2FyZFJlZihmdW5jdGlvbiBPYnNlcnZlckZvcndhcmRSZWYoKSB7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KE9ic2VydmVyLCBudWxsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBiYXNlUmVuZGVyLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSAvLyBGdW5jdGlvbiBjb21wb25lbnRcblxuXG4gIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSBcImZ1bmN0aW9uXCIgJiYgKCFjb21wb25lbnQucHJvdG90eXBlIHx8ICFjb21wb25lbnQucHJvdG90eXBlLnJlbmRlcikgJiYgIWNvbXBvbmVudFtcImlzUmVhY3RDbGFzc1wiXSAmJiAhT2JqZWN0LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mLmNhbGwoQ29tcG9uZW50LCBjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIG9ic2VydmVyJDEoY29tcG9uZW50KTtcbiAgfVxuXG4gIHJldHVybiBtYWtlQ2xhc3NDb21wb25lbnRPYnNlcnZlcihjb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxudmFyIE1vYlhQcm92aWRlckNvbnRleHQgPVxuLyojX19QVVJFX18qL1xuUmVhY3RfX2RlZmF1bHQuY3JlYXRlQ29udGV4dCh7fSk7XG5mdW5jdGlvbiBQcm92aWRlcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIHN0b3JlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJjaGlsZHJlblwiXSk7XG5cbiAgdmFyIHBhcmVudFZhbHVlID0gUmVhY3RfX2RlZmF1bHQudXNlQ29udGV4dChNb2JYUHJvdmlkZXJDb250ZXh0KTtcbiAgdmFyIG11dGFibGVQcm92aWRlclJlZiA9IFJlYWN0X19kZWZhdWx0LnVzZVJlZihfZXh0ZW5kcyh7fSwgcGFyZW50VmFsdWUsIHt9LCBzdG9yZXMpKTtcbiAgdmFyIHZhbHVlID0gbXV0YWJsZVByb3ZpZGVyUmVmLmN1cnJlbnQ7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHZhciBuZXdWYWx1ZSA9IF9leHRlbmRzKHt9LCB2YWx1ZSwge30sIHN0b3Jlcyk7IC8vIHNwcmVhZCBpbiBwcmV2aW91cyBzdGF0ZSBmb3IgdGhlIGNvbnRleHQgYmFzZWQgc3RvcmVzXG5cblxuICAgIGlmICghc2hhbGxvd0VxdWFsKHZhbHVlLCBuZXdWYWx1ZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk1vYlggUHJvdmlkZXI6IFRoZSBzZXQgb2YgcHJvdmlkZWQgc3RvcmVzIGhhcyBjaGFuZ2VkLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb2J4anMvbW9ieC1yZWFjdCN0aGUtc2V0LW9mLXByb3ZpZGVkLXN0b3Jlcy1oYXMtY2hhbmdlZC1lcnJvci5cIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTW9iWFByb3ZpZGVyQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB2YWx1ZVxuICB9LCBjaGlsZHJlbik7XG59XG5Qcm92aWRlci5kaXNwbGF5TmFtZSA9IFwiTW9iWFByb3ZpZGVyXCI7XG5cbi8qKlxyXG4gKiBTdG9yZSBJbmplY3Rpb25cclxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlSW5qZWN0b3IoZ3JhYlN0b3Jlc0ZuLCBjb21wb25lbnQsIGluamVjdE5hbWVzLCBtYWtlUmVhY3RpdmUpIHtcbiAgLy8gU3VwcG9ydCBmb3J3YXJkIHJlZnNcbiAgdmFyIEluamVjdG9yID0gUmVhY3RfX2RlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAgIHZhciBuZXdQcm9wcyA9IF9leHRlbmRzKHt9LCBwcm9wcyk7XG5cbiAgICB2YXIgY29udGV4dCA9IFJlYWN0X19kZWZhdWx0LnVzZUNvbnRleHQoTW9iWFByb3ZpZGVyQ29udGV4dCk7XG4gICAgT2JqZWN0LmFzc2lnbihuZXdQcm9wcywgZ3JhYlN0b3Jlc0ZuKGNvbnRleHQgfHwge30sIG5ld1Byb3BzKSB8fCB7fSk7XG5cbiAgICBpZiAocmVmKSB7XG4gICAgICBuZXdQcm9wcy5yZWYgPSByZWY7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBuZXdQcm9wcyk7XG4gIH0pO1xuICBpZiAobWFrZVJlYWN0aXZlKSBJbmplY3RvciA9IG9ic2VydmVyKEluamVjdG9yKTtcbiAgSW5qZWN0b3JbXCJpc01vYnhJbmplY3RvclwiXSA9IHRydWU7IC8vIGFzc2lnbmVkIGxhdGUgdG8gc3VwcHJlc3Mgb2JzZXJ2ZXIgd2FybmluZ1xuICAvLyBTdGF0aWMgZmllbGRzIGZyb20gY29tcG9uZW50IHNob3VsZCBiZSB2aXNpYmxlIG9uIHRoZSBnZW5lcmF0ZWQgSW5qZWN0b3JcblxuICBjb3B5U3RhdGljUHJvcGVydGllcyhjb21wb25lbnQsIEluamVjdG9yKTtcbiAgSW5qZWN0b3JbXCJ3cmFwcGVkQ29tcG9uZW50XCJdID0gY29tcG9uZW50O1xuICBJbmplY3Rvci5kaXNwbGF5TmFtZSA9IGdldEluamVjdE5hbWUoY29tcG9uZW50LCBpbmplY3ROYW1lcyk7XG4gIHJldHVybiBJbmplY3Rvcjtcbn1cblxuZnVuY3Rpb24gZ2V0SW5qZWN0TmFtZShjb21wb25lbnQsIGluamVjdE5hbWVzKSB7XG4gIHZhciBkaXNwbGF5TmFtZTtcbiAgdmFyIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnQuZGlzcGxheU5hbWUgfHwgY29tcG9uZW50Lm5hbWUgfHwgY29tcG9uZW50LmNvbnN0cnVjdG9yICYmIGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lIHx8IFwiQ29tcG9uZW50XCI7XG4gIGlmIChpbmplY3ROYW1lcykgZGlzcGxheU5hbWUgPSBcImluamVjdC13aXRoLVwiICsgaW5qZWN0TmFtZXMgKyBcIihcIiArIGNvbXBvbmVudE5hbWUgKyBcIilcIjtlbHNlIGRpc3BsYXlOYW1lID0gXCJpbmplY3QoXCIgKyBjb21wb25lbnROYW1lICsgXCIpXCI7XG4gIHJldHVybiBkaXNwbGF5TmFtZTtcbn1cblxuZnVuY3Rpb24gZ3JhYlN0b3Jlc0J5TmFtZShzdG9yZU5hbWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYmFzZVN0b3JlcywgbmV4dFByb3BzKSB7XG4gICAgc3RvcmVOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZU5hbWUpIHtcbiAgICAgIGlmIChzdG9yZU5hbWUgaW4gbmV4dFByb3BzIC8vIHByZWZlciBwcm9wcyBvdmVyIHN0b3Jlc1xuICAgICAgKSByZXR1cm47XG4gICAgICBpZiAoIShzdG9yZU5hbWUgaW4gYmFzZVN0b3JlcykpIHRocm93IG5ldyBFcnJvcihcIk1vYlggaW5qZWN0b3I6IFN0b3JlICdcIiArIHN0b3JlTmFtZSArIFwiJyBpcyBub3QgYXZhaWxhYmxlISBNYWtlIHN1cmUgaXQgaXMgcHJvdmlkZWQgYnkgc29tZSBQcm92aWRlclwiKTtcbiAgICAgIG5leHRQcm9wc1tzdG9yZU5hbWVdID0gYmFzZVN0b3Jlc1tzdG9yZU5hbWVdO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXh0UHJvcHM7XG4gIH07XG59XG4vKipcclxuICogaGlnaGVyIG9yZGVyIGNvbXBvbmVudCB0aGF0IGluamVjdHMgc3RvcmVzIHRvIGEgY2hpbGQuXHJcbiAqIHRha2VzIGVpdGhlciBhIHZhcmFyZ3MgbGlzdCBvZiBzdHJpbmdzLCB3aGljaCBhcmUgc3RvcmVzIHJlYWQgZnJvbSB0aGUgY29udGV4dCxcclxuICogb3IgYSBmdW5jdGlvbiB0aGF0IG1hbnVhbGx5IG1hcHMgdGhlIGF2YWlsYWJsZSBzdG9yZXMgZnJvbSB0aGUgY29udGV4dCB0byBwcm9wczpcclxuICogc3RvcmVzVG9Qcm9wcyhtb2J4U3RvcmVzLCBwcm9wcywgY29udGV4dCkgPT4gbmV3UHJvcHNcclxuICovXG5cblxuZnVuY3Rpb24gaW5qZWN0KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgc3RvcmVOYW1lcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBzdG9yZU5hbWVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBncmFiU3RvcmVzRm4gPSBhcmd1bWVudHNbMF07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjb21wb25lbnRDbGFzcykge1xuICAgICAgcmV0dXJuIGNyZWF0ZVN0b3JlSW5qZWN0b3IoZ3JhYlN0b3Jlc0ZuLCBjb21wb25lbnRDbGFzcywgZ3JhYlN0b3Jlc0ZuLm5hbWUsIHRydWUpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjb21wb25lbnRDbGFzcykge1xuICAgICAgcmV0dXJuIGNyZWF0ZVN0b3JlSW5qZWN0b3IoZ3JhYlN0b3Jlc0J5TmFtZShzdG9yZU5hbWVzKSwgY29tcG9uZW50Q2xhc3MsIHN0b3JlTmFtZXMuam9pbihcIi1cIiksIGZhbHNlKTtcbiAgICB9O1xuICB9XG59XG5cbnZhciBwcm90b1N0b3JlS2V5ID1cbi8qI19fUFVSRV9fKi9cbm5ld1N5bWJvbChcImRpc3Bvc2VPblVubW91bnRQcm90b1wiKTtcbnZhciBpbnN0U3RvcmVLZXkgPVxuLyojX19QVVJFX18qL1xubmV3U3ltYm9sKFwiZGlzcG9zZU9uVW5tb3VudEluc3RcIik7XG5cbmZ1bmN0aW9uIHJ1bkRpc3Bvc2Vyc09uV2lsbFVubW91bnQoKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG4gIFtdLmNvbmNhdCh0aGlzW3Byb3RvU3RvcmVLZXldIHx8IFtdLCB0aGlzW2luc3RTdG9yZUtleV0gfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKHByb3BLZXlPckZ1bmN0aW9uKSB7XG4gICAgdmFyIHByb3AgPSB0eXBlb2YgcHJvcEtleU9yRnVuY3Rpb24gPT09IFwic3RyaW5nXCIgPyBfdGhpc1twcm9wS2V5T3JGdW5jdGlvbl0gOiBwcm9wS2V5T3JGdW5jdGlvbjtcblxuICAgIGlmIChwcm9wICE9PSB1bmRlZmluZWQgJiYgcHJvcCAhPT0gbnVsbCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcCkpIHByb3AubWFwKGZ1bmN0aW9uIChmKSB7XG4gICAgICAgIHJldHVybiBmKCk7XG4gICAgICB9KTtlbHNlIHByb3AoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNwb3NlT25Vbm1vdW50KHRhcmdldCwgcHJvcGVydHlLZXlPckZ1bmN0aW9uKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHByb3BlcnR5S2V5T3JGdW5jdGlvbikpIHtcbiAgICByZXR1cm4gcHJvcGVydHlLZXlPckZ1bmN0aW9uLm1hcChmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiBkaXNwb3NlT25Vbm1vdW50KHRhcmdldCwgZm4pO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KS5jb25zdHJ1Y3RvciB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0LmNvbnN0cnVjdG9yKTtcbiAgdmFyIGMyID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldC5jb25zdHJ1Y3Rvcik7XG5cbiAgaWYgKCEoYyA9PT0gUmVhY3RfX2RlZmF1bHQuQ29tcG9uZW50IHx8IGMgPT09IFJlYWN0X19kZWZhdWx0LlB1cmVDb21wb25lbnQgfHwgYzIgPT09IFJlYWN0X19kZWZhdWx0LkNvbXBvbmVudCB8fCBjMiA9PT0gUmVhY3RfX2RlZmF1bHQuUHVyZUNvbXBvbmVudCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieC1yZWFjdF0gZGlzcG9zZU9uVW5tb3VudCBvbmx5IHN1cHBvcnRzIGRpcmVjdCBzdWJjbGFzc2VzIG9mIFJlYWN0LkNvbXBvbmVudCBvciBSZWFjdC5QdXJlQ29tcG9uZW50LlwiKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcHJvcGVydHlLZXlPckZ1bmN0aW9uICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiBwcm9wZXJ0eUtleU9yRnVuY3Rpb24gIT09IFwiZnVuY3Rpb25cIiAmJiAhQXJyYXkuaXNBcnJheShwcm9wZXJ0eUtleU9yRnVuY3Rpb24pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiW21vYngtcmVhY3RdIGRpc3Bvc2VPblVubW91bnQgb25seSB3b3JrcyBpZiB0aGUgcGFyYW1ldGVyIGlzIGVpdGhlciBhIHByb3BlcnR5IGtleSBvciBhIGZ1bmN0aW9uLlwiKTtcbiAgfSAvLyBkZWNvcmF0b3IncyB0YXJnZXQgaXMgdGhlIHByb3RvdHlwZSwgc28gaXQgZG9lc24ndCBoYXZlIGFueSBpbnN0YW5jZSBwcm9wZXJ0aWVzIGxpa2UgcHJvcHNcblxuXG4gIHZhciBpc0RlY29yYXRvciA9IHR5cGVvZiBwcm9wZXJ0eUtleU9yRnVuY3Rpb24gPT09IFwic3RyaW5nXCI7IC8vIGFkZCBwcm9wZXJ0eSBrZXkgLyBmdW5jdGlvbiB3ZSB3YW50IHJ1biAoZGlzcG9zZWQpIHRvIHRoZSBzdG9yZVxuXG4gIHZhciBjb21wb25lbnRXYXNBbHJlYWR5TW9kaWZpZWQgPSAhIXRhcmdldFtwcm90b1N0b3JlS2V5XSB8fCAhIXRhcmdldFtpbnN0U3RvcmVLZXldO1xuICB2YXIgc3RvcmUgPSBpc0RlY29yYXRvciA/IC8vIGRlY29yYXRvcnMgYXJlIGFkZGVkIHRvIHRoZSBwcm90b3R5cGUgc3RvcmVcbiAgdGFyZ2V0W3Byb3RvU3RvcmVLZXldIHx8ICh0YXJnZXRbcHJvdG9TdG9yZUtleV0gPSBbXSkgOiAvLyBmdW5jdGlvbnMgYXJlIGFkZGVkIHRvIHRoZSBpbnN0YW5jZSBzdG9yZVxuICB0YXJnZXRbaW5zdFN0b3JlS2V5XSB8fCAodGFyZ2V0W2luc3RTdG9yZUtleV0gPSBbXSk7XG4gIHN0b3JlLnB1c2gocHJvcGVydHlLZXlPckZ1bmN0aW9uKTsgLy8gdHdlYWsgdGhlIGNvbXBvbmVudCBjbGFzcyBjb21wb25lbnRXaWxsVW5tb3VudCBpZiBub3QgZG9uZSBhbHJlYWR5XG5cbiAgaWYgKCFjb21wb25lbnRXYXNBbHJlYWR5TW9kaWZpZWQpIHtcbiAgICBwYXRjaCh0YXJnZXQsIFwiY29tcG9uZW50V2lsbFVubW91bnRcIiwgcnVuRGlzcG9zZXJzT25XaWxsVW5tb3VudCk7XG4gIH0gLy8gcmV0dXJuIHRoZSBkaXNwb3NlciBhcyBpcyBpZiBpbnZva2VkIGFzIGEgbm9uIGRlY29yYXRvclxuXG5cbiAgaWYgKHR5cGVvZiBwcm9wZXJ0eUtleU9yRnVuY3Rpb24gIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gcHJvcGVydHlLZXlPckZ1bmN0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRvcikge1xuICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbiA+IDYgPyBfbGVuIC0gNiA6IDApLCBfa2V5ID0gNjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgcmVzdFtfa2V5IC0gNl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHVudHJhY2tlZChmdW5jdGlvbiAoKSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBcIjw8YW5vbnltb3VzPj5cIjtcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgdmFyIGFjdHVhbCA9IHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCA/IFwibnVsbFwiIDogXCJ1bmRlZmluZWRcIjtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFwiVGhlIFwiICsgbG9jYXRpb24gKyBcIiBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgaXMgbWFya2VkIGFzIHJlcXVpcmVkIFwiICsgXCJpbiBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLCBidXQgaXRzIHZhbHVlIGlzIGBcIiArIGFjdHVhbCArIFwiYC5cIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgcmVzdCBhcmcgaXMgbmVjZXNzYXJ5IGZvciBzb21lIFJlYWN0IGludGVybmFscyAtIGZhaWxzIHRlc3RzIG90aGVyd2lzZVxuICAgICAgICByZXR1cm4gdmFsaWRhdG9yLmFwcGx5KHZvaWQgMCwgW3Byb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZV0uY29uY2F0KHJlc3QpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpOyAvLyBBZGQgaXNSZXF1aXJlZCB0byBzYXRpc2Z5IFJlcXVpcmFibGVcblxuICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcbiAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG59IC8vIENvcGllZCBmcm9tIFJlYWN0LlByb3BUeXBlc1xuXG5cbmZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgaWYgKHByb3BUeXBlID09PSBcInN5bWJvbFwiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcblxuXG4gIGlmIChwcm9wVmFsdWVbXCJAQHRvU3RyaW5nVGFnXCJdID09PSBcIlN5bWJvbFwiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuXG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0gLy8gQ29waWVkIGZyb20gUmVhY3QuUHJvcFR5cGVzXG5cblxuZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgIHJldHVybiBcImFycmF5XCI7XG4gIH1cblxuICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgIHJldHVybiBcIm9iamVjdFwiO1xuICB9XG5cbiAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgcmV0dXJuIFwic3ltYm9sXCI7XG4gIH1cblxuICByZXR1cm4gcHJvcFR5cGU7XG59IC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbi8vIENvcGllZCBmcm9tIFJlYWN0LlByb3BUeXBlc1xuXG5cbmZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuXG4gIGlmIChwcm9wVHlwZSA9PT0gXCJvYmplY3RcIikge1xuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICByZXR1cm4gXCJkYXRlXCI7XG4gICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIHJldHVybiBcInJlZ2V4cFwiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wVHlwZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2YWJsZVR5cGVDaGVja2VyQ3JlYXRvcihhbGxvd05hdGl2ZVR5cGUsIG1vYnhUeXBlKSB7XG4gIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihmdW5jdGlvbiAocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgcmV0dXJuIHVudHJhY2tlZChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoYWxsb3dOYXRpdmVUeXBlKSB7XG4gICAgICAgIGlmIChnZXRQcm9wVHlwZShwcm9wc1twcm9wTmFtZV0pID09PSBtb2J4VHlwZS50b0xvd2VyQ2FzZSgpKSByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIG1vYnhDaGVja2VyO1xuXG4gICAgICBzd2l0Y2ggKG1vYnhUeXBlKSB7XG4gICAgICAgIGNhc2UgXCJBcnJheVwiOlxuICAgICAgICAgIG1vYnhDaGVja2VyID0gaXNPYnNlcnZhYmxlQXJyYXk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIk9iamVjdFwiOlxuICAgICAgICAgIG1vYnhDaGVja2VyID0gaXNPYnNlcnZhYmxlT2JqZWN0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJNYXBcIjpcbiAgICAgICAgICBtb2J4Q2hlY2tlciA9IGlzT2JzZXJ2YWJsZU1hcDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgbW9ieFR5cGU6IFwiICsgbW9ieFR5cGUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gICAgICBpZiAoIW1vYnhDaGVja2VyKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgdmFyIG5hdGl2ZVR5cGVFeHBlY3RhdGlvbk1lc3NhZ2UgPSBhbGxvd05hdGl2ZVR5cGUgPyBcIiBvciBqYXZhc2NyaXB0IGBcIiArIG1vYnhUeXBlLnRvTG93ZXJDYXNlKCkgKyBcImBcIiA6IFwiXCI7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJJbnZhbGlkIHByb3AgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIHR5cGUgYFwiICsgcHJlY2lzZVR5cGUgKyBcImAgc3VwcGxpZWQgdG9cIiArIFwiIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGV4cGVjdGVkIGBtb2J4Lk9ic2VydmFibGVcIiArIG1vYnhUeXBlICsgXCJgXCIgKyBuYXRpdmVUeXBlRXhwZWN0YXRpb25NZXNzYWdlICsgXCIuXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmFibGVBcnJheU9mVHlwZUNoZWNrZXIoYWxsb3dOYXRpdmVUeXBlLCB0eXBlQ2hlY2tlcikge1xuICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZnVuY3Rpb24gKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IG5ldyBBcnJheShfbGVuMiA+IDUgPyBfbGVuMiAtIDUgOiAwKSwgX2tleTIgPSA1OyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICByZXN0W19rZXkyIC0gNV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiB1bnRyYWNrZWQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJQcm9wZXJ0eSBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgb2YgY29tcG9uZW50IGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAgaGFzIFwiICsgXCJpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uLlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBlcnJvciA9IGNyZWF0ZU9ic2VydmFibGVUeXBlQ2hlY2tlckNyZWF0b3IoYWxsb3dOYXRpdmVUeXBlLCBcIkFycmF5XCIpKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSByZXR1cm4gZXJyb3I7XG4gICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBlcnJvciA9IHR5cGVDaGVja2VyLmFwcGx5KHZvaWQgMCwgW3Byb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArIFwiW1wiICsgaSArIFwiXVwiXS5jb25jYXQocmVzdCkpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbnZhciBvYnNlcnZhYmxlQXJyYXkgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlT2JzZXJ2YWJsZVR5cGVDaGVja2VyQ3JlYXRvcihmYWxzZSwgXCJBcnJheVwiKTtcbnZhciBvYnNlcnZhYmxlQXJyYXlPZiA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVPYnNlcnZhYmxlQXJyYXlPZlR5cGVDaGVja2VyLmJpbmQobnVsbCwgZmFsc2UpO1xudmFyIG9ic2VydmFibGVNYXAgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlT2JzZXJ2YWJsZVR5cGVDaGVja2VyQ3JlYXRvcihmYWxzZSwgXCJNYXBcIik7XG52YXIgb2JzZXJ2YWJsZU9iamVjdCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVPYnNlcnZhYmxlVHlwZUNoZWNrZXJDcmVhdG9yKGZhbHNlLCBcIk9iamVjdFwiKTtcbnZhciBhcnJheU9yT2JzZXJ2YWJsZUFycmF5ID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZU9ic2VydmFibGVUeXBlQ2hlY2tlckNyZWF0b3IodHJ1ZSwgXCJBcnJheVwiKTtcbnZhciBhcnJheU9yT2JzZXJ2YWJsZUFycmF5T2YgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlT2JzZXJ2YWJsZUFycmF5T2ZUeXBlQ2hlY2tlci5iaW5kKG51bGwsIHRydWUpO1xudmFyIG9iamVjdE9yT2JzZXJ2YWJsZU9iamVjdCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVPYnNlcnZhYmxlVHlwZUNoZWNrZXJDcmVhdG9yKHRydWUsIFwiT2JqZWN0XCIpO1xudmFyIFByb3BUeXBlcyA9IHtcbiAgb2JzZXJ2YWJsZUFycmF5OiBvYnNlcnZhYmxlQXJyYXksXG4gIG9ic2VydmFibGVBcnJheU9mOiBvYnNlcnZhYmxlQXJyYXlPZixcbiAgb2JzZXJ2YWJsZU1hcDogb2JzZXJ2YWJsZU1hcCxcbiAgb2JzZXJ2YWJsZU9iamVjdDogb2JzZXJ2YWJsZU9iamVjdCxcbiAgYXJyYXlPck9ic2VydmFibGVBcnJheTogYXJyYXlPck9ic2VydmFibGVBcnJheSxcbiAgYXJyYXlPck9ic2VydmFibGVBcnJheU9mOiBhcnJheU9yT2JzZXJ2YWJsZUFycmF5T2YsXG4gIG9iamVjdE9yT2JzZXJ2YWJsZU9iamVjdDogb2JqZWN0T3JPYnNlcnZhYmxlT2JqZWN0XG59O1xuXG5pZiAoIUNvbXBvbmVudCkgdGhyb3cgbmV3IEVycm9yKFwibW9ieC1yZWFjdCByZXF1aXJlcyBSZWFjdCB0byBiZSBhdmFpbGFibGVcIik7XG5pZiAoIW9ic2VydmFibGUpIHRocm93IG5ldyBFcnJvcihcIm1vYngtcmVhY3QgcmVxdWlyZXMgbW9ieCB0byBiZSBhdmFpbGFibGVcIik7XG5cbmV4cG9ydCB7IE1vYlhQcm92aWRlckNvbnRleHQsIFByb3BUeXBlcywgUHJvdmlkZXIsIGRpc3Bvc2VPblVubW91bnQsIGluamVjdCwgb2JzZXJ2ZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vYnhyZWFjdC5lc20uanMubWFwXG4iLCIvKiogTW9iWCAtIChjKSBNaWNoZWwgV2VzdHN0cmF0ZSAyMDE1IC0gMjAyMCAtIE1JVCBMaWNlbnNlZCAqL1xuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxudmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cblxudmFyIE9CRlVTQ0FURURfRVJST1IgPSBcIkFuIGludmFyaWFudCBmYWlsZWQsIGhvd2V2ZXIgdGhlIGVycm9yIGlzIG9iZnVzY2F0ZWQgYmVjYXVzZSB0aGlzIGlzIGEgcHJvZHVjdGlvbiBidWlsZC5cIjtcclxudmFyIEVNUFRZX0FSUkFZID0gW107XHJcbk9iamVjdC5mcmVlemUoRU1QVFlfQVJSQVkpO1xyXG52YXIgRU1QVFlfT0JKRUNUID0ge307XHJcbk9iamVjdC5mcmVlemUoRU1QVFlfT0JKRUNUKTtcclxuZnVuY3Rpb24gZ2V0TmV4dElkKCkge1xyXG4gICAgcmV0dXJuICsrZ2xvYmFsU3RhdGUubW9ieEd1aWQ7XHJcbn1cclxuZnVuY3Rpb24gZmFpbChtZXNzYWdlKSB7XHJcbiAgICBpbnZhcmlhbnQoZmFsc2UsIG1lc3NhZ2UpO1xyXG4gICAgdGhyb3cgXCJYXCI7IC8vIHVucmVhY2hhYmxlXHJcbn1cclxuZnVuY3Rpb24gaW52YXJpYW50KGNoZWNrLCBtZXNzYWdlKSB7XHJcbiAgICBpZiAoIWNoZWNrKVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4XSBcIiArIChtZXNzYWdlIHx8IE9CRlVTQ0FURURfRVJST1IpKTtcclxufVxyXG4vKipcclxuICogUHJpbnRzIGEgZGVwcmVjYXRpb24gbWVzc2FnZSwgYnV0IG9ubHkgb25lIHRpbWUuXHJcbiAqIFJldHVybnMgZmFsc2UgaWYgdGhlIGRlcHJlY2F0ZWQgbWVzc2FnZSB3YXMgYWxyZWFkeSBwcmludGVkIGJlZm9yZVxyXG4gKi9cclxudmFyIGRlcHJlY2F0ZWRNZXNzYWdlcyA9IFtdO1xyXG5mdW5jdGlvbiBkZXByZWNhdGVkKG1zZywgdGhpbmcpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKHRoaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlcHJlY2F0ZWQoXCInXCIgKyBtc2cgKyBcIicsIHVzZSAnXCIgKyB0aGluZyArIFwiJyBpbnN0ZWFkLlwiKTtcclxuICAgIH1cclxuICAgIGlmIChkZXByZWNhdGVkTWVzc2FnZXMuaW5kZXhPZihtc2cpICE9PSAtMSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBkZXByZWNhdGVkTWVzc2FnZXMucHVzaChtc2cpO1xyXG4gICAgY29uc29sZS5lcnJvcihcIlttb2J4XSBEZXByZWNhdGVkOiBcIiArIG1zZyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG4vKipcclxuICogTWFrZXMgc3VyZSB0aGF0IHRoZSBwcm92aWRlZCBmdW5jdGlvbiBpcyBpbnZva2VkIGF0IG1vc3Qgb25jZS5cclxuICovXHJcbmZ1bmN0aW9uIG9uY2UoZnVuYykge1xyXG4gICAgdmFyIGludm9rZWQgPSBmYWxzZTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGludm9rZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpbnZva2VkID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxufVxyXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHsgfTtcclxuZnVuY3Rpb24gdW5pcXVlKGxpc3QpIHtcclxuICAgIHZhciByZXMgPSBbXTtcclxuICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIGlmIChyZXMuaW5kZXhPZihpdGVtKSA9PT0gLTEpXHJcbiAgICAgICAgICAgIHJlcy5wdXNoKGl0ZW0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiO1xyXG59XHJcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTtcclxuICAgIHJldHVybiBwcm90byA9PT0gT2JqZWN0LnByb3RvdHlwZSB8fCBwcm90byA9PT0gbnVsbDtcclxufVxyXG5mdW5jdGlvbiBhZGRIaWRkZW5Qcm9wKG9iamVjdCwgcHJvcE5hbWUsIHZhbHVlKSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wTmFtZSwge1xyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEhpZGRlbkZpbmFsUHJvcChvYmplY3QsIHByb3BOYW1lLCB2YWx1ZSkge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcE5hbWUsIHtcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICB3cml0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gaXNQcm9wZXJ0eUNvbmZpZ3VyYWJsZShvYmplY3QsIHByb3ApIHtcclxuICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3ApO1xyXG4gICAgcmV0dXJuICFkZXNjcmlwdG9yIHx8IChkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSAhPT0gZmFsc2UgJiYgZGVzY3JpcHRvci53cml0YWJsZSAhPT0gZmFsc2UpO1xyXG59XHJcbmZ1bmN0aW9uIGFzc2VydFByb3BlcnR5Q29uZmlndXJhYmxlKG9iamVjdCwgcHJvcCkge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhaXNQcm9wZXJ0eUNvbmZpZ3VyYWJsZShvYmplY3QsIHByb3ApKVxyXG4gICAgICAgIGZhaWwoXCJDYW5ub3QgbWFrZSBwcm9wZXJ0eSAnXCIgKyBwcm9wLnRvU3RyaW5nKCkgKyBcIicgb2JzZXJ2YWJsZSwgaXQgaXMgbm90IGNvbmZpZ3VyYWJsZSBhbmQgd3JpdGFibGUgaW4gdGhlIHRhcmdldCBvYmplY3RcIik7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShuYW1lLCBjbGF6eikge1xyXG4gICAgdmFyIHByb3BOYW1lID0gXCJpc01vYlhcIiArIG5hbWU7XHJcbiAgICBjbGF6ei5wcm90b3R5cGVbcHJvcE5hbWVdID0gdHJ1ZTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIHJldHVybiBpc09iamVjdCh4KSAmJiB4W3Byb3BOYW1lXSA9PT0gdHJ1ZTtcclxuICAgIH07XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciB0aGUgYXJndW1lbnQgaXMgYW4gYXJyYXksIGRpc3JlZ2FyZGluZyBvYnNlcnZhYmlsaXR5LlxyXG4gKi9cclxuZnVuY3Rpb24gaXNBcnJheUxpa2UoeCkge1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoeCkgfHwgaXNPYnNlcnZhYmxlQXJyYXkoeCk7XHJcbn1cclxuZnVuY3Rpb24gaXNFUzZNYXAodGhpbmcpIHtcclxuICAgIHJldHVybiB0aGluZyBpbnN0YW5jZW9mIE1hcDtcclxufVxyXG5mdW5jdGlvbiBpc0VTNlNldCh0aGluZykge1xyXG4gICAgcmV0dXJuIHRoaW5nIGluc3RhbmNlb2YgU2V0O1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBmb2xsb3dpbmc6IG93biBrZXlzLCBwcm90b3R5cGUga2V5cyAmIG93biBzeW1ib2wga2V5cywgaWYgdGhleSBhcmUgZW51bWVyYWJsZS5cclxuICovXHJcbmZ1bmN0aW9uIGdldFBsYWluT2JqZWN0S2V5cyhvYmplY3QpIHtcclxuICAgIHZhciBlbnVtZXJhYmxlcyA9IG5ldyBTZXQoKTtcclxuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpXHJcbiAgICAgICAgZW51bWVyYWJsZXMuYWRkKGtleSk7IC8vICphbGwqIGVudW1lcmFibGVzXHJcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xyXG4gICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgaykuZW51bWVyYWJsZSlcclxuICAgICAgICAgICAgZW51bWVyYWJsZXMuYWRkKGspO1xyXG4gICAgfSk7IC8vICpvd24qIHN5bWJvbHNcclxuICAgIC8vIE5vdGU6IHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbWlzc2luZyBlbnVtZXJhYmxlLCBpbmhlcml0ZWQsIHN5bWJvbGljIHByb3BlcnR5IG5hbWVzISBUaGF0IHdvdWxkIGhvd2V2ZXIgcHJldHR5IGV4cGVuc2l2ZSB0byBhZGQsXHJcbiAgICAvLyBhcyB0aGVyZSBpcyBubyBlZmZpY2llbnQgaXRlcmF0b3IgdGhhdCByZXR1cm5zICphbGwqIHByb3BlcnRpZXNcclxuICAgIHJldHVybiBBcnJheS5mcm9tKGVudW1lcmFibGVzKTtcclxufVxyXG5mdW5jdGlvbiBzdHJpbmdpZnlLZXkoa2V5KSB7XHJcbiAgICBpZiAoa2V5ICYmIGtleS50b1N0cmluZylcclxuICAgICAgICByZXR1cm4ga2V5LnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmcoa2V5KS50b1N0cmluZygpO1xyXG59XHJcbmZ1bmN0aW9uIGdldE1hcExpa2VLZXlzKG1hcCkge1xyXG4gICAgaWYgKGlzUGxhaW5PYmplY3QobWFwKSlcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KG1hcCkpXHJcbiAgICAgICAgcmV0dXJuIG1hcC5tYXAoZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHZhciBfYiA9IF9fcmVhZChfYSwgMSksIGtleSA9IF9iWzBdO1xyXG4gICAgICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIH0pO1xyXG4gICAgaWYgKGlzRVM2TWFwKG1hcCkgfHwgaXNPYnNlcnZhYmxlTWFwKG1hcCkpXHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20obWFwLmtleXMoKSk7XHJcbiAgICByZXR1cm4gZmFpbChcIkNhbm5vdCBnZXQga2V5cyBmcm9tICdcIiArIG1hcCArIFwiJ1wiKTtcclxufVxyXG5mdW5jdGlvbiB0b1ByaW1pdGl2ZSh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsID8gbnVsbCA6IHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiA/IFwiXCIgKyB2YWx1ZSA6IHZhbHVlO1xyXG59XG5cbnZhciAkbW9ieCA9IFN5bWJvbChcIm1vYnggYWRtaW5pc3RyYXRpb25cIik7XHJcbnZhciBBdG9tID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgYXRvbS4gRm9yIGRlYnVnZ2luZyBwdXJwb3NlcyBpdCBpcyByZWNvbW1lbmRlZCB0byBnaXZlIGl0IGEgbmFtZS5cclxuICAgICAqIFRoZSBvbkJlY29tZU9ic2VydmVkIGFuZCBvbkJlY29tZVVub2JzZXJ2ZWQgY2FsbGJhY2tzIGNhbiBiZSB1c2VkIGZvciByZXNvdXJjZSBtYW5hZ2VtZW50LlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBBdG9tKG5hbWUpIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7IG5hbWUgPSBcIkF0b21AXCIgKyBnZXROZXh0SWQoKTsgfVxyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5pc1BlbmRpbmdVbm9ic2VydmF0aW9uID0gZmFsc2U7IC8vIGZvciBlZmZlY3RpdmUgdW5vYnNlcnZpbmcuIEJhc2VBdG9tIGhhcyB0cnVlLCBmb3IgZXh0cmEgb3B0aW1pemF0aW9uLCBzbyBpdHMgb25CZWNvbWVVbm9ic2VydmVkIG5ldmVyIGdldHMgY2FsbGVkLCBiZWNhdXNlIGl0J3Mgbm90IG5lZWRlZFxyXG4gICAgICAgIHRoaXMuaXNCZWluZ09ic2VydmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgdGhpcy5kaWZmVmFsdWUgPSAwO1xyXG4gICAgICAgIHRoaXMubGFzdEFjY2Vzc2VkQnkgPSAwO1xyXG4gICAgICAgIHRoaXMubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuTk9UX1RSQUNLSU5HO1xyXG4gICAgfVxyXG4gICAgQXRvbS5wcm90b3R5cGUub25CZWNvbWVPYnNlcnZlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5vbkJlY29tZU9ic2VydmVkTGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25CZWNvbWVPYnNlcnZlZExpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gbGlzdGVuZXIoKTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEF0b20ucHJvdG90eXBlLm9uQmVjb21lVW5vYnNlcnZlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5vbkJlY29tZVVub2JzZXJ2ZWRMaXN0ZW5lcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkJlY29tZVVub2JzZXJ2ZWRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIGxpc3RlbmVyKCk7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEludm9rZSB0aGlzIG1ldGhvZCB0byBub3RpZnkgbW9ieCB0aGF0IHlvdXIgYXRvbSBoYXMgYmVlbiB1c2VkIHNvbWVob3cuXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlcmUgaXMgY3VycmVudGx5IGEgcmVhY3RpdmUgY29udGV4dC5cclxuICAgICAqL1xyXG4gICAgQXRvbS5wcm90b3R5cGUucmVwb3J0T2JzZXJ2ZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9ydE9ic2VydmVkKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlIHRoaXMgbWV0aG9kIF9hZnRlcl8gdGhpcyBtZXRob2QgaGFzIGNoYW5nZWQgdG8gc2lnbmFsIG1vYnggdGhhdCBhbGwgaXRzIG9ic2VydmVycyBzaG91bGQgaW52YWxpZGF0ZS5cclxuICAgICAqL1xyXG4gICAgQXRvbS5wcm90b3R5cGUucmVwb3J0Q2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzdGFydEJhdGNoKCk7XHJcbiAgICAgICAgcHJvcGFnYXRlQ2hhbmdlZCh0aGlzKTtcclxuICAgICAgICBlbmRCYXRjaCgpO1xyXG4gICAgfTtcclxuICAgIEF0b20ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEF0b207XHJcbn0oKSk7XHJcbnZhciBpc0F0b20gPSBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiQXRvbVwiLCBBdG9tKTtcclxuZnVuY3Rpb24gY3JlYXRlQXRvbShuYW1lLCBvbkJlY29tZU9ic2VydmVkSGFuZGxlciwgb25CZWNvbWVVbm9ic2VydmVkSGFuZGxlcikge1xyXG4gICAgaWYgKG9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyID09PSB2b2lkIDApIHsgb25CZWNvbWVPYnNlcnZlZEhhbmRsZXIgPSBub29wOyB9XHJcbiAgICBpZiAob25CZWNvbWVVbm9ic2VydmVkSGFuZGxlciA9PT0gdm9pZCAwKSB7IG9uQmVjb21lVW5vYnNlcnZlZEhhbmRsZXIgPSBub29wOyB9XHJcbiAgICB2YXIgYXRvbSA9IG5ldyBBdG9tKG5hbWUpO1xyXG4gICAgLy8gZGVmYXVsdCBgbm9vcGAgbGlzdGVuZXIgd2lsbCBub3QgaW5pdGlhbGl6ZSB0aGUgaG9vayBTZXRcclxuICAgIGlmIChvbkJlY29tZU9ic2VydmVkSGFuZGxlciAhPT0gbm9vcCkge1xyXG4gICAgICAgIG9uQmVjb21lT2JzZXJ2ZWQoYXRvbSwgb25CZWNvbWVPYnNlcnZlZEhhbmRsZXIpO1xyXG4gICAgfVxyXG4gICAgaWYgKG9uQmVjb21lVW5vYnNlcnZlZEhhbmRsZXIgIT09IG5vb3ApIHtcclxuICAgICAgICBvbkJlY29tZVVub2JzZXJ2ZWQoYXRvbSwgb25CZWNvbWVVbm9ic2VydmVkSGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXRvbTtcclxufVxuXG5mdW5jdGlvbiBpZGVudGl0eUNvbXBhcmVyKGEsIGIpIHtcclxuICAgIHJldHVybiBhID09PSBiO1xyXG59XHJcbmZ1bmN0aW9uIHN0cnVjdHVyYWxDb21wYXJlcihhLCBiKSB7XHJcbiAgICByZXR1cm4gZGVlcEVxdWFsKGEsIGIpO1xyXG59XHJcbmZ1bmN0aW9uIHNoYWxsb3dDb21wYXJlcihhLCBiKSB7XHJcbiAgICByZXR1cm4gZGVlcEVxdWFsKGEsIGIsIDEpO1xyXG59XHJcbmZ1bmN0aW9uIGRlZmF1bHRDb21wYXJlcihhLCBiKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmlzKGEsIGIpO1xyXG59XHJcbnZhciBjb21wYXJlciA9IHtcclxuICAgIGlkZW50aXR5OiBpZGVudGl0eUNvbXBhcmVyLFxyXG4gICAgc3RydWN0dXJhbDogc3RydWN0dXJhbENvbXBhcmVyLFxyXG4gICAgZGVmYXVsdDogZGVmYXVsdENvbXBhcmVyLFxyXG4gICAgc2hhbGxvdzogc2hhbGxvd0NvbXBhcmVyXHJcbn07XG5cbnZhciBtb2J4RGlkUnVuTGF6eUluaXRpYWxpemVyc1N5bWJvbCA9IFN5bWJvbChcIm1vYnggZGlkIHJ1biBsYXp5IGluaXRpYWxpemVyc1wiKTtcclxudmFyIG1vYnhQZW5kaW5nRGVjb3JhdG9ycyA9IFN5bWJvbChcIm1vYnggcGVuZGluZyBkZWNvcmF0b3JzXCIpO1xyXG52YXIgZW51bWVyYWJsZURlc2NyaXB0b3JDYWNoZSA9IHt9O1xyXG52YXIgbm9uRW51bWVyYWJsZURlc2NyaXB0b3JDYWNoZSA9IHt9O1xyXG5mdW5jdGlvbiBjcmVhdGVQcm9wZXJ0eUluaXRpYWxpemVyRGVzY3JpcHRvcihwcm9wLCBlbnVtZXJhYmxlKSB7XHJcbiAgICB2YXIgY2FjaGUgPSBlbnVtZXJhYmxlID8gZW51bWVyYWJsZURlc2NyaXB0b3JDYWNoZSA6IG5vbkVudW1lcmFibGVEZXNjcmlwdG9yQ2FjaGU7XHJcbiAgICByZXR1cm4gKGNhY2hlW3Byb3BdIHx8XHJcbiAgICAgICAgKGNhY2hlW3Byb3BdID0ge1xyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGVudW1lcmFibGUsXHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZUluc3RhbmNlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbcHJvcF07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplSW5zdGFuY2UodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzW3Byb3BdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbn1cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZUluc3RhbmNlKHRhcmdldCkge1xyXG4gICAgdmFyIGVfMSwgX2E7XHJcbiAgICBpZiAodGFyZ2V0W21vYnhEaWRSdW5MYXp5SW5pdGlhbGl6ZXJzU3ltYm9sXSA9PT0gdHJ1ZSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB2YXIgZGVjb3JhdG9ycyA9IHRhcmdldFttb2J4UGVuZGluZ0RlY29yYXRvcnNdO1xyXG4gICAgaWYgKGRlY29yYXRvcnMpIHtcclxuICAgICAgICBhZGRIaWRkZW5Qcm9wKHRhcmdldCwgbW9ieERpZFJ1bkxhenlJbml0aWFsaXplcnNTeW1ib2wsIHRydWUpO1xyXG4gICAgICAgIC8vIEJ1aWxkIHByb3BlcnR5IGtleSBhcnJheSBmcm9tIGJvdGggc3RyaW5ncyBhbmQgc3ltYm9sc1xyXG4gICAgICAgIHZhciBrZXlzID0gX19zcHJlYWQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhkZWNvcmF0b3JzKSwgT2JqZWN0LmtleXMoZGVjb3JhdG9ycykpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleXNfMSA9IF9fdmFsdWVzKGtleXMpLCBrZXlzXzFfMSA9IGtleXNfMS5uZXh0KCk7ICFrZXlzXzFfMS5kb25lOyBrZXlzXzFfMSA9IGtleXNfMS5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzXzFfMS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHZhciBkID0gZGVjb3JhdG9yc1trZXldO1xyXG4gICAgICAgICAgICAgICAgZC5wcm9wZXJ0eUNyZWF0b3IodGFyZ2V0LCBkLnByb3AsIGQuZGVzY3JpcHRvciwgZC5kZWNvcmF0b3JUYXJnZXQsIGQuZGVjb3JhdG9yQXJndW1lbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleXNfMV8xICYmICFrZXlzXzFfMS5kb25lICYmIChfYSA9IGtleXNfMS5yZXR1cm4pKSBfYS5jYWxsKGtleXNfMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjcmVhdGVQcm9wRGVjb3JhdG9yKHByb3BlcnR5SW5pdGlhbGx5RW51bWVyYWJsZSwgcHJvcGVydHlDcmVhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdG9yRmFjdG9yeSgpIHtcclxuICAgICAgICB2YXIgZGVjb3JhdG9yQXJndW1lbnRzO1xyXG4gICAgICAgIHZhciBkZWNvcmF0b3IgPSBmdW5jdGlvbiBkZWNvcmF0ZSh0YXJnZXQsIHByb3AsIGRlc2NyaXB0b3IsIGFwcGx5SW1tZWRpYXRlbHlcclxuICAgICAgICAvLyBUaGlzIGlzIGEgc3BlY2lhbCBwYXJhbWV0ZXIgdG8gc2lnbmFsIHRoZSBkaXJlY3QgYXBwbGljYXRpb24gb2YgYSBkZWNvcmF0b3IsIGFsbG93IGV4dGVuZE9ic2VydmFibGUgdG8gc2tpcCB0aGUgZW50aXJlIHR5cGUgZGVjb3JhdGlvbiBwYXJ0LFxyXG4gICAgICAgIC8vIGFzIHRoZSBpbnN0YW5jZSB0byBhcHBseSB0aGUgZGVjb3JhdG9yIHRvIGVxdWFscyB0aGUgdGFyZ2V0XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChhcHBseUltbWVkaWF0ZWx5ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUNyZWF0b3IodGFyZ2V0LCBwcm9wLCBkZXNjcmlwdG9yLCB0YXJnZXQsIGRlY29yYXRvckFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFxdWFja3NMaWtlQURlY29yYXRvcihhcmd1bWVudHMpKVxyXG4gICAgICAgICAgICAgICAgZmFpbChcIlRoaXMgZnVuY3Rpb24gaXMgYSBkZWNvcmF0b3IsIGJ1dCBpdCB3YXNuJ3QgaW52b2tlZCBsaWtlIGEgZGVjb3JhdG9yXCIpO1xyXG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIG1vYnhQZW5kaW5nRGVjb3JhdG9ycykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmhlcml0ZWREZWNvcmF0b3JzID0gdGFyZ2V0W21vYnhQZW5kaW5nRGVjb3JhdG9yc107XHJcbiAgICAgICAgICAgICAgICBhZGRIaWRkZW5Qcm9wKHRhcmdldCwgbW9ieFBlbmRpbmdEZWNvcmF0b3JzLCBfX2Fzc2lnbih7fSwgaW5oZXJpdGVkRGVjb3JhdG9ycykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhcmdldFttb2J4UGVuZGluZ0RlY29yYXRvcnNdW3Byb3BdID0ge1xyXG4gICAgICAgICAgICAgICAgcHJvcDogcHJvcCxcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5Q3JlYXRvcjogcHJvcGVydHlDcmVhdG9yLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvcjogZGVzY3JpcHRvcixcclxuICAgICAgICAgICAgICAgIGRlY29yYXRvclRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgZGVjb3JhdG9yQXJndW1lbnRzOiBkZWNvcmF0b3JBcmd1bWVudHNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVByb3BlcnR5SW5pdGlhbGl6ZXJEZXNjcmlwdG9yKHByb3AsIHByb3BlcnR5SW5pdGlhbGx5RW51bWVyYWJsZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAocXVhY2tzTGlrZUFEZWNvcmF0b3IoYXJndW1lbnRzKSkge1xyXG4gICAgICAgICAgICAvLyBAZGVjb3JhdG9yXHJcbiAgICAgICAgICAgIGRlY29yYXRvckFyZ3VtZW50cyA9IEVNUFRZX0FSUkFZO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVjb3JhdG9yLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBAZGVjb3JhdG9yKGFyZ3MpXHJcbiAgICAgICAgICAgIGRlY29yYXRvckFyZ3VtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWNvcmF0b3I7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBxdWFja3NMaWtlQURlY29yYXRvcihhcmdzKSB7XHJcbiAgICByZXR1cm4gKCgoYXJncy5sZW5ndGggPT09IDIgfHwgYXJncy5sZW5ndGggPT09IDMpICYmXHJcbiAgICAgICAgKHR5cGVvZiBhcmdzWzFdID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBhcmdzWzFdID09PSBcInN5bWJvbFwiKSkgfHxcclxuICAgICAgICAoYXJncy5sZW5ndGggPT09IDQgJiYgYXJnc1szXSA9PT0gdHJ1ZSkpO1xyXG59XG5cbmZ1bmN0aW9uIGRlZXBFbmhhbmNlcih2LCBfLCBuYW1lKSB7XHJcbiAgICAvLyBpdCBpcyBhbiBvYnNlcnZhYmxlIGFscmVhZHksIGRvbmVcclxuICAgIGlmIChpc09ic2VydmFibGUodikpXHJcbiAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAvLyBzb21ldGhpbmcgdGhhdCBjYW4gYmUgY29udmVydGVkIGFuZCBtdXRhdGVkP1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodikpXHJcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUuYXJyYXkodiwgeyBuYW1lOiBuYW1lIH0pO1xyXG4gICAgaWYgKGlzUGxhaW5PYmplY3QodikpXHJcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUub2JqZWN0KHYsIHVuZGVmaW5lZCwgeyBuYW1lOiBuYW1lIH0pO1xyXG4gICAgaWYgKGlzRVM2TWFwKHYpKVxyXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLm1hcCh2LCB7IG5hbWU6IG5hbWUgfSk7XHJcbiAgICBpZiAoaXNFUzZTZXQodikpXHJcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUuc2V0KHYsIHsgbmFtZTogbmFtZSB9KTtcclxuICAgIHJldHVybiB2O1xyXG59XHJcbmZ1bmN0aW9uIHNoYWxsb3dFbmhhbmNlcih2LCBfLCBuYW1lKSB7XHJcbiAgICBpZiAodiA9PT0gdW5kZWZpbmVkIHx8IHYgPT09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIHY7XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHYpIHx8IGlzT2JzZXJ2YWJsZUFycmF5KHYpIHx8IGlzT2JzZXJ2YWJsZU1hcCh2KSB8fCBpc09ic2VydmFibGVTZXQodikpXHJcbiAgICAgICAgcmV0dXJuIHY7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2KSlcclxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5hcnJheSh2LCB7IG5hbWU6IG5hbWUsIGRlZXA6IGZhbHNlIH0pO1xyXG4gICAgaWYgKGlzUGxhaW5PYmplY3QodikpXHJcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUub2JqZWN0KHYsIHVuZGVmaW5lZCwgeyBuYW1lOiBuYW1lLCBkZWVwOiBmYWxzZSB9KTtcclxuICAgIGlmIChpc0VTNk1hcCh2KSlcclxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5tYXAodiwgeyBuYW1lOiBuYW1lLCBkZWVwOiBmYWxzZSB9KTtcclxuICAgIGlmIChpc0VTNlNldCh2KSlcclxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5zZXQodiwgeyBuYW1lOiBuYW1lLCBkZWVwOiBmYWxzZSB9KTtcclxuICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgIFwiVGhlIHNoYWxsb3cgbW9kaWZpZXIgLyBkZWNvcmF0b3IgY2FuIG9ubHkgdXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIGFycmF5cywgb2JqZWN0cywgbWFwcyBhbmQgc2V0c1wiKTtcclxufVxyXG5mdW5jdGlvbiByZWZlcmVuY2VFbmhhbmNlcihuZXdWYWx1ZSkge1xyXG4gICAgLy8gbmV2ZXIgdHVybiBpbnRvIGFuIG9ic2VydmFibGVcclxuICAgIHJldHVybiBuZXdWYWx1ZTtcclxufVxyXG5mdW5jdGlvbiByZWZTdHJ1Y3RFbmhhbmNlcih2LCBvbGRWYWx1ZSwgbmFtZSkge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBpc09ic2VydmFibGUodikpXHJcbiAgICAgICAgdGhyb3cgXCJvYnNlcnZhYmxlLnN0cnVjdCBzaG91bGQgbm90IGJlIHVzZWQgd2l0aCBvYnNlcnZhYmxlIHZhbHVlc1wiO1xyXG4gICAgaWYgKGRlZXBFcXVhbCh2LCBvbGRWYWx1ZSkpXHJcbiAgICAgICAgcmV0dXJuIG9sZFZhbHVlO1xyXG4gICAgcmV0dXJuIHY7XHJcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVjb3JhdG9yRm9yRW5oYW5jZXIoZW5oYW5jZXIpIHtcclxuICAgIGludmFyaWFudChlbmhhbmNlcik7XHJcbiAgICB2YXIgZGVjb3JhdG9yID0gY3JlYXRlUHJvcERlY29yYXRvcih0cnVlLCBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IsIF9kZWNvcmF0b3JUYXJnZXQsIGRlY29yYXRvckFyZ3MpIHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGludmFyaWFudCghZGVzY3JpcHRvciB8fCAhZGVzY3JpcHRvci5nZXQsIFwiQG9ic2VydmFibGUgY2Fubm90IGJlIHVzZWQgb24gZ2V0dGVyIChwcm9wZXJ0eSBcXFwiXCIgKyBzdHJpbmdpZnlLZXkocHJvcGVydHlOYW1lKSArIFwiXFxcIiksIHVzZSBAY29tcHV0ZWQgaW5zdGVhZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpbml0aWFsVmFsdWUgPSBkZXNjcmlwdG9yXHJcbiAgICAgICAgICAgID8gZGVzY3JpcHRvci5pbml0aWFsaXplclxyXG4gICAgICAgICAgICAgICAgPyBkZXNjcmlwdG9yLmluaXRpYWxpemVyLmNhbGwodGFyZ2V0KVxyXG4gICAgICAgICAgICAgICAgOiBkZXNjcmlwdG9yLnZhbHVlXHJcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIGFzT2JzZXJ2YWJsZU9iamVjdCh0YXJnZXQpLmFkZE9ic2VydmFibGVQcm9wKHByb3BlcnR5TmFtZSwgaW5pdGlhbFZhbHVlLCBlbmhhbmNlcik7XHJcbiAgICB9KTtcclxuICAgIHZhciByZXMgPSBcclxuICAgIC8vIEV4dHJhIHByb2Nlc3MgY2hlY2tzLCBhcyB0aGlzIGhhcHBlbnMgZHVyaW5nIG1vZHVsZSBpbml0aWFsaXphdGlvblxyXG4gICAgdHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2Vzcy5lbnYgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiXHJcbiAgICAgICAgPyBmdW5jdGlvbiBvYnNlcnZhYmxlRGVjb3JhdG9yKCkge1xyXG4gICAgICAgICAgICAvLyBUaGlzIHdyYXBwZXIgZnVuY3Rpb24gaXMganVzdCB0byBkZXRlY3QgaWxsZWdhbCBkZWNvcmF0b3IgaW52b2NhdGlvbnMsIGRlcHJlY2F0ZSBpbiBhIG5leHQgdmVyc2lvblxyXG4gICAgICAgICAgICAvLyBhbmQgc2ltcGx5IHJldHVybiB0aGUgY3JlYXRlZCBwcm9wIGRlY29yYXRvclxyXG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFpbChcIkluY29ycmVjdCBkZWNvcmF0b3IgaW52b2NhdGlvbi4gQG9ic2VydmFibGUgZGVjb3JhdG9yIGRvZXNuJ3QgZXhwZWN0IGFueSBhcmd1bWVudHNcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWNvcmF0b3IuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgOiBkZWNvcmF0b3I7XHJcbiAgICByZXMuZW5oYW5jZXIgPSBlbmhhbmNlcjtcclxuICAgIHJldHVybiByZXM7XHJcbn1cblxuLy8gUHJlZGVmaW5lZCBiYWdzIG9mIGNyZWF0ZSBvYnNlcnZhYmxlIG9wdGlvbnMsIHRvIGF2b2lkIGFsbG9jYXRpbmcgdGVtcG9yYXJpbHkgb3B0aW9uIG9iamVjdHNcclxuLy8gaW4gdGhlIG1ham9yaXR5IG9mIGNhc2VzXHJcbnZhciBkZWZhdWx0Q3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMgPSB7XHJcbiAgICBkZWVwOiB0cnVlLFxyXG4gICAgbmFtZTogdW5kZWZpbmVkLFxyXG4gICAgZGVmYXVsdERlY29yYXRvcjogdW5kZWZpbmVkLFxyXG4gICAgcHJveHk6IHRydWVcclxufTtcclxuT2JqZWN0LmZyZWV6ZShkZWZhdWx0Q3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMpO1xyXG5mdW5jdGlvbiBhc3NlcnRWYWxpZE9wdGlvbihrZXkpIHtcclxuICAgIGlmICghL14oZGVlcHxuYW1lfGVxdWFsc3xkZWZhdWx0RGVjb3JhdG9yfHByb3h5KSQvLnRlc3Qoa2V5KSlcclxuICAgICAgICBmYWlsKFwiaW52YWxpZCBvcHRpb24gZm9yIChleHRlbmQpb2JzZXJ2YWJsZTogXCIgKyBrZXkpO1xyXG59XHJcbmZ1bmN0aW9uIGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnModGhpbmcpIHtcclxuICAgIGlmICh0aGluZyA9PT0gbnVsbCB8fCB0aGluZyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHJldHVybiBkZWZhdWx0Q3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnM7XHJcbiAgICBpZiAodHlwZW9mIHRoaW5nID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB7IG5hbWU6IHRoaW5nLCBkZWVwOiB0cnVlLCBwcm94eTogdHJ1ZSB9O1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpbmcgIT09IFwib2JqZWN0XCIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWlsKFwiZXhwZWN0ZWQgb3B0aW9ucyBvYmplY3RcIik7XHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpbmcpLmZvckVhY2goYXNzZXJ0VmFsaWRPcHRpb24pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaW5nO1xyXG59XHJcbnZhciBkZWVwRGVjb3JhdG9yID0gY3JlYXRlRGVjb3JhdG9yRm9yRW5oYW5jZXIoZGVlcEVuaGFuY2VyKTtcclxudmFyIHNoYWxsb3dEZWNvcmF0b3IgPSBjcmVhdGVEZWNvcmF0b3JGb3JFbmhhbmNlcihzaGFsbG93RW5oYW5jZXIpO1xyXG52YXIgcmVmRGVjb3JhdG9yID0gY3JlYXRlRGVjb3JhdG9yRm9yRW5oYW5jZXIocmVmZXJlbmNlRW5oYW5jZXIpO1xyXG52YXIgcmVmU3RydWN0RGVjb3JhdG9yID0gY3JlYXRlRGVjb3JhdG9yRm9yRW5oYW5jZXIocmVmU3RydWN0RW5oYW5jZXIpO1xyXG5mdW5jdGlvbiBnZXRFbmhhbmNlckZyb21PcHRpb25zKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBvcHRpb25zLmRlZmF1bHREZWNvcmF0b3JcclxuICAgICAgICA/IG9wdGlvbnMuZGVmYXVsdERlY29yYXRvci5lbmhhbmNlclxyXG4gICAgICAgIDogb3B0aW9ucy5kZWVwID09PSBmYWxzZVxyXG4gICAgICAgICAgICA/IHJlZmVyZW5jZUVuaGFuY2VyXHJcbiAgICAgICAgICAgIDogZGVlcEVuaGFuY2VyO1xyXG59XHJcbi8qKlxyXG4gKiBUdXJucyBhbiBvYmplY3QsIGFycmF5IG9yIGZ1bmN0aW9uIGludG8gYSByZWFjdGl2ZSBzdHJ1Y3R1cmUuXHJcbiAqIEBwYXJhbSB2IHRoZSB2YWx1ZSB3aGljaCBzaG91bGQgYmVjb21lIG9ic2VydmFibGUuXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZhYmxlKHYsIGFyZzIsIGFyZzMpIHtcclxuICAgIC8vIEBvYnNlcnZhYmxlIHNvbWVQcm9wO1xyXG4gICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMV0gPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gXCJzeW1ib2xcIikge1xyXG4gICAgICAgIHJldHVybiBkZWVwRGVjb3JhdG9yLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbiAgICAvLyBpdCBpcyBhbiBvYnNlcnZhYmxlIGFscmVhZHksIGRvbmVcclxuICAgIGlmIChpc09ic2VydmFibGUodikpXHJcbiAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAvLyBzb21ldGhpbmcgdGhhdCBjYW4gYmUgY29udmVydGVkIGFuZCBtdXRhdGVkP1xyXG4gICAgdmFyIHJlcyA9IGlzUGxhaW5PYmplY3QodilcclxuICAgICAgICA/IG9ic2VydmFibGUub2JqZWN0KHYsIGFyZzIsIGFyZzMpXHJcbiAgICAgICAgOiBBcnJheS5pc0FycmF5KHYpXHJcbiAgICAgICAgICAgID8gb2JzZXJ2YWJsZS5hcnJheSh2LCBhcmcyKVxyXG4gICAgICAgICAgICA6IGlzRVM2TWFwKHYpXHJcbiAgICAgICAgICAgICAgICA/IG9ic2VydmFibGUubWFwKHYsIGFyZzIpXHJcbiAgICAgICAgICAgICAgICA6IGlzRVM2U2V0KHYpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBvYnNlcnZhYmxlLnNldCh2LCBhcmcyKVxyXG4gICAgICAgICAgICAgICAgICAgIDogdjtcclxuICAgIC8vIHRoaXMgdmFsdWUgY291bGQgYmUgY29udmVydGVkIHRvIGEgbmV3IG9ic2VydmFibGUgZGF0YSBzdHJ1Y3R1cmUsIHJldHVybiBpdFxyXG4gICAgaWYgKHJlcyAhPT0gdilcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgLy8gb3RoZXJ3aXNlLCBqdXN0IGJveCBpdFxyXG4gICAgZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgICAgICBcIlRoZSBwcm92aWRlZCB2YWx1ZSBjb3VsZCBub3QgYmUgY29udmVydGVkIGludG8gYW4gb2JzZXJ2YWJsZS4gSWYgeW91IHdhbnQganVzdCBjcmVhdGUgYW4gb2JzZXJ2YWJsZSByZWZlcmVuY2UgdG8gdGhlIG9iamVjdCB1c2UgJ29ic2VydmFibGUuYm94KHZhbHVlKSdcIik7XHJcbn1cclxudmFyIG9ic2VydmFibGVGYWN0b3JpZXMgPSB7XHJcbiAgICBib3g6IGZ1bmN0aW9uICh2YWx1ZSwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMilcclxuICAgICAgICAgICAgaW5jb3JyZWN0bHlVc2VkQXNEZWNvcmF0b3IoXCJib3hcIik7XHJcbiAgICAgICAgdmFyIG8gPSBhc0NyZWF0ZU9ic2VydmFibGVPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZVZhbHVlKHZhbHVlLCBnZXRFbmhhbmNlckZyb21PcHRpb25zKG8pLCBvLm5hbWUsIHRydWUsIG8uZXF1YWxzKTtcclxuICAgIH0sXHJcbiAgICBhcnJheTogZnVuY3Rpb24gKGluaXRpYWxWYWx1ZXMsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpXHJcbiAgICAgICAgICAgIGluY29ycmVjdGx5VXNlZEFzRGVjb3JhdG9yKFwiYXJyYXlcIik7XHJcbiAgICAgICAgdmFyIG8gPSBhc0NyZWF0ZU9ic2VydmFibGVPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVPYnNlcnZhYmxlQXJyYXkoaW5pdGlhbFZhbHVlcywgZ2V0RW5oYW5jZXJGcm9tT3B0aW9ucyhvKSwgby5uYW1lKTtcclxuICAgIH0sXHJcbiAgICBtYXA6IGZ1bmN0aW9uIChpbml0aWFsVmFsdWVzLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKVxyXG4gICAgICAgICAgICBpbmNvcnJlY3RseVVzZWRBc0RlY29yYXRvcihcIm1hcFwiKTtcclxuICAgICAgICB2YXIgbyA9IGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlTWFwKGluaXRpYWxWYWx1ZXMsIGdldEVuaGFuY2VyRnJvbU9wdGlvbnMobyksIG8ubmFtZSk7XHJcbiAgICB9LFxyXG4gICAgc2V0OiBmdW5jdGlvbiAoaW5pdGlhbFZhbHVlcywgb3B0aW9ucykge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMilcclxuICAgICAgICAgICAgaW5jb3JyZWN0bHlVc2VkQXNEZWNvcmF0b3IoXCJzZXRcIik7XHJcbiAgICAgICAgdmFyIG8gPSBhc0NyZWF0ZU9ic2VydmFibGVPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZVNldChpbml0aWFsVmFsdWVzLCBnZXRFbmhhbmNlckZyb21PcHRpb25zKG8pLCBvLm5hbWUpO1xyXG4gICAgfSxcclxuICAgIG9iamVjdDogZnVuY3Rpb24gKHByb3BzLCBkZWNvcmF0b3JzLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMV0gPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIGluY29ycmVjdGx5VXNlZEFzRGVjb3JhdG9yKFwib2JqZWN0XCIpO1xyXG4gICAgICAgIHZhciBvID0gYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyhvcHRpb25zKTtcclxuICAgICAgICBpZiAoby5wcm94eSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4dGVuZE9ic2VydmFibGUoe30sIHByb3BzLCBkZWNvcmF0b3JzLCBvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBkZWZhdWx0RGVjb3JhdG9yID0gZ2V0RGVmYXVsdERlY29yYXRvckZyb21PYmplY3RPcHRpb25zKG8pO1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IGV4dGVuZE9ic2VydmFibGUoe30sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBvKTtcclxuICAgICAgICAgICAgdmFyIHByb3h5ID0gY3JlYXRlRHluYW1pY09ic2VydmFibGVPYmplY3QoYmFzZSk7XHJcbiAgICAgICAgICAgIGV4dGVuZE9ic2VydmFibGVPYmplY3RXaXRoUHJvcGVydGllcyhwcm94eSwgcHJvcHMsIGRlY29yYXRvcnMsIGRlZmF1bHREZWNvcmF0b3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gcHJveHk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlZjogcmVmRGVjb3JhdG9yLFxyXG4gICAgc2hhbGxvdzogc2hhbGxvd0RlY29yYXRvcixcclxuICAgIGRlZXA6IGRlZXBEZWNvcmF0b3IsXHJcbiAgICBzdHJ1Y3Q6IHJlZlN0cnVjdERlY29yYXRvclxyXG59O1xyXG52YXIgb2JzZXJ2YWJsZSA9IGNyZWF0ZU9ic2VydmFibGU7XHJcbi8vIHdlaXJkIHRyaWNrIHRvIGtlZXAgb3VyIHR5cGluZ3MgbmljZWx5IHdpdGggb3VyIGZ1bmNzLCBhbmQgc3RpbGwgZXh0ZW5kIHRoZSBvYnNlcnZhYmxlIGZ1bmN0aW9uXHJcbk9iamVjdC5rZXlzKG9ic2VydmFibGVGYWN0b3JpZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIChvYnNlcnZhYmxlW25hbWVdID0gb2JzZXJ2YWJsZUZhY3Rvcmllc1tuYW1lXSk7IH0pO1xyXG5mdW5jdGlvbiBpbmNvcnJlY3RseVVzZWRBc0RlY29yYXRvcihtZXRob2ROYW1lKSB7XHJcbiAgICBmYWlsKFxyXG4gICAgLy8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICBcIkV4cGVjdGVkIG9uZSBvciB0d28gYXJndW1lbnRzIHRvIG9ic2VydmFibGUuXCIgKyBtZXRob2ROYW1lICsgXCIuIERpZCB5b3UgYWNjaWRlbnRhbGx5IHRyeSB0byB1c2Ugb2JzZXJ2YWJsZS5cIiArIG1ldGhvZE5hbWUgKyBcIiBhcyBkZWNvcmF0b3I/XCIpO1xyXG59XG5cbnZhciBjb21wdXRlZERlY29yYXRvciA9IGNyZWF0ZVByb3BEZWNvcmF0b3IoZmFsc2UsIGZ1bmN0aW9uIChpbnN0YW5jZSwgcHJvcGVydHlOYW1lLCBkZXNjcmlwdG9yLCBkZWNvcmF0b3JUYXJnZXQsIGRlY29yYXRvckFyZ3MpIHtcclxuICAgIHZhciBnZXQgPSBkZXNjcmlwdG9yLmdldCwgc2V0ID0gZGVzY3JpcHRvci5zZXQ7IC8vIGluaXRpYWxWYWx1ZSBpcyB0aGUgZGVzY3JpcHRvciBmb3IgZ2V0IC8gc2V0IHByb3BzXHJcbiAgICAvLyBPcHRpbWl6YXRpb246IGZhc3RlciBvbiBkZWNvcmF0b3IgdGFyZ2V0IG9yIGluc3RhbmNlPyBBc3N1bWluZyB0YXJnZXRcclxuICAgIC8vIE9wdGltaXphdGlvbjogZmluZCBvdXQgaWYgZGVjbGFyaW5nIG9uIGluc3RhbmNlIGlzbid0IGp1c3QgZmFzdGVyLiAoYWxzbyBtYWtlcyB0aGUgcHJvcGVydHkgZGVzY3JpcHRvciBzaW1wbGVyKS4gQnV0LCBtb3JlIG1lbW9yeSB1c2FnZS4uXHJcbiAgICAvLyBGb3JjaW5nIGluc3RhbmNlIG5vdywgZml4ZXMgaG90IHJlbG9hZGlnIGlzc3VlcyBvbiBSZWFjdCBOYXRpdmU6XHJcbiAgICB2YXIgb3B0aW9ucyA9IGRlY29yYXRvckFyZ3NbMF0gfHwge307XHJcbiAgICBhc09ic2VydmFibGVPYmplY3QoaW5zdGFuY2UpLmFkZENvbXB1dGVkUHJvcChpbnN0YW5jZSwgcHJvcGVydHlOYW1lLCBfX2Fzc2lnbih7IGdldDogZ2V0LFxyXG4gICAgICAgIHNldDogc2V0LCBjb250ZXh0OiBpbnN0YW5jZSB9LCBvcHRpb25zKSk7XHJcbn0pO1xyXG52YXIgY29tcHV0ZWRTdHJ1Y3REZWNvcmF0b3IgPSBjb21wdXRlZERlY29yYXRvcih7IGVxdWFsczogY29tcGFyZXIuc3RydWN0dXJhbCB9KTtcclxuLyoqXHJcbiAqIERlY29yYXRvciBmb3IgY2xhc3MgcHJvcGVydGllczogQGNvbXB1dGVkIGdldCB2YWx1ZSgpIHsgcmV0dXJuIGV4cHI7IH0uXHJcbiAqIEZvciBsZWdhY3kgcHVycG9zZXMgYWxzbyBpbnZva2FibGUgYXMgRVM1IG9ic2VydmFibGUgY3JlYXRlZDogYGNvbXB1dGVkKCgpID0+IGV4cHIpYDtcclxuICovXHJcbnZhciBjb21wdXRlZCA9IGZ1bmN0aW9uIGNvbXB1dGVkKGFyZzEsIGFyZzIsIGFyZzMpIHtcclxuICAgIGlmICh0eXBlb2YgYXJnMiA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIC8vIEBjb21wdXRlZFxyXG4gICAgICAgIHJldHVybiBjb21wdXRlZERlY29yYXRvci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZzEgIT09IG51bGwgJiYgdHlwZW9mIGFyZzEgPT09IFwib2JqZWN0XCIgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIC8vIEBjb21wdXRlZCh7IG9wdGlvbnMgfSlcclxuICAgICAgICByZXR1cm4gY29tcHV0ZWREZWNvcmF0b3IuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxuICAgIH1cclxuICAgIC8vIGNvbXB1dGVkKGV4cHIsIG9wdGlvbnM/KVxyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgIGludmFyaWFudCh0eXBlb2YgYXJnMSA9PT0gXCJmdW5jdGlvblwiLCBcIkZpcnN0IGFyZ3VtZW50IHRvIGBjb21wdXRlZGAgc2hvdWxkIGJlIGFuIGV4cHJlc3Npb24uXCIpO1xyXG4gICAgICAgIGludmFyaWFudChhcmd1bWVudHMubGVuZ3RoIDwgMywgXCJDb21wdXRlZCB0YWtlcyBvbmUgb3IgdHdvIGFyZ3VtZW50cyBpZiB1c2VkIGFzIGZ1bmN0aW9uXCIpO1xyXG4gICAgfVxyXG4gICAgdmFyIG9wdHMgPSB0eXBlb2YgYXJnMiA9PT0gXCJvYmplY3RcIiA/IGFyZzIgOiB7fTtcclxuICAgIG9wdHMuZ2V0ID0gYXJnMTtcclxuICAgIG9wdHMuc2V0ID0gdHlwZW9mIGFyZzIgPT09IFwiZnVuY3Rpb25cIiA/IGFyZzIgOiBvcHRzLnNldDtcclxuICAgIG9wdHMubmFtZSA9IG9wdHMubmFtZSB8fCBhcmcxLm5hbWUgfHwgXCJcIjsgLyogZm9yIGdlbmVyYXRlZCBuYW1lICovXHJcbiAgICByZXR1cm4gbmV3IENvbXB1dGVkVmFsdWUob3B0cyk7XHJcbn07XHJcbmNvbXB1dGVkLnN0cnVjdCA9IGNvbXB1dGVkU3RydWN0RGVjb3JhdG9yO1xuXG52YXIgSURlcml2YXRpb25TdGF0ZTtcclxuKGZ1bmN0aW9uIChJRGVyaXZhdGlvblN0YXRlKSB7XHJcbiAgICAvLyBiZWZvcmUgYmVpbmcgcnVuIG9yIChvdXRzaWRlIGJhdGNoIGFuZCBub3QgYmVpbmcgb2JzZXJ2ZWQpXHJcbiAgICAvLyBhdCB0aGlzIHBvaW50IGRlcml2YXRpb24gaXMgbm90IGhvbGRpbmcgYW55IGRhdGEgYWJvdXQgZGVwZW5kZW5jeSB0cmVlXHJcbiAgICBJRGVyaXZhdGlvblN0YXRlW0lEZXJpdmF0aW9uU3RhdGVbXCJOT1RfVFJBQ0tJTkdcIl0gPSAtMV0gPSBcIk5PVF9UUkFDS0lOR1wiO1xyXG4gICAgLy8gbm8gc2hhbGxvdyBkZXBlbmRlbmN5IGNoYW5nZWQgc2luY2UgbGFzdCBjb21wdXRhdGlvblxyXG4gICAgLy8gd29uJ3QgcmVjYWxjdWxhdGUgZGVyaXZhdGlvblxyXG4gICAgLy8gdGhpcyBpcyB3aGF0IG1ha2VzIG1vYnggZmFzdFxyXG4gICAgSURlcml2YXRpb25TdGF0ZVtJRGVyaXZhdGlvblN0YXRlW1wiVVBfVE9fREFURVwiXSA9IDBdID0gXCJVUF9UT19EQVRFXCI7XHJcbiAgICAvLyBzb21lIGRlZXAgZGVwZW5kZW5jeSBjaGFuZ2VkLCBidXQgZG9uJ3Qga25vdyBpZiBzaGFsbG93IGRlcGVuZGVuY3kgY2hhbmdlZFxyXG4gICAgLy8gd2lsbCByZXF1aXJlIHRvIGNoZWNrIGZpcnN0IGlmIFVQX1RPX0RBVEUgb3IgUE9TU0lCTFlfU1RBTEVcclxuICAgIC8vIGN1cnJlbnRseSBvbmx5IENvbXB1dGVkVmFsdWUgd2lsbCBwcm9wYWdhdGUgUE9TU0lCTFlfU1RBTEVcclxuICAgIC8vXHJcbiAgICAvLyBoYXZpbmcgdGhpcyBzdGF0ZSBpcyBzZWNvbmQgYmlnIG9wdGltaXphdGlvbjpcclxuICAgIC8vIGRvbid0IGhhdmUgdG8gcmVjb21wdXRlIG9uIGV2ZXJ5IGRlcGVuZGVuY3kgY2hhbmdlLCBidXQgb25seSB3aGVuIGl0J3MgbmVlZGVkXHJcbiAgICBJRGVyaXZhdGlvblN0YXRlW0lEZXJpdmF0aW9uU3RhdGVbXCJQT1NTSUJMWV9TVEFMRVwiXSA9IDFdID0gXCJQT1NTSUJMWV9TVEFMRVwiO1xyXG4gICAgLy8gQSBzaGFsbG93IGRlcGVuZGVuY3kgaGFzIGNoYW5nZWQgc2luY2UgbGFzdCBjb21wdXRhdGlvbiBhbmQgdGhlIGRlcml2YXRpb25cclxuICAgIC8vIHdpbGwgbmVlZCB0byByZWNvbXB1dGUgd2hlbiBpdCdzIG5lZWRlZCBuZXh0LlxyXG4gICAgSURlcml2YXRpb25TdGF0ZVtJRGVyaXZhdGlvblN0YXRlW1wiU1RBTEVcIl0gPSAyXSA9IFwiU1RBTEVcIjtcclxufSkoSURlcml2YXRpb25TdGF0ZSB8fCAoSURlcml2YXRpb25TdGF0ZSA9IHt9KSk7XHJcbnZhciBUcmFjZU1vZGU7XHJcbihmdW5jdGlvbiAoVHJhY2VNb2RlKSB7XHJcbiAgICBUcmFjZU1vZGVbVHJhY2VNb2RlW1wiTk9ORVwiXSA9IDBdID0gXCJOT05FXCI7XHJcbiAgICBUcmFjZU1vZGVbVHJhY2VNb2RlW1wiTE9HXCJdID0gMV0gPSBcIkxPR1wiO1xyXG4gICAgVHJhY2VNb2RlW1RyYWNlTW9kZVtcIkJSRUFLXCJdID0gMl0gPSBcIkJSRUFLXCI7XHJcbn0pKFRyYWNlTW9kZSB8fCAoVHJhY2VNb2RlID0ge30pKTtcclxudmFyIENhdWdodEV4Y2VwdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENhdWdodEV4Y2VwdGlvbihjYXVzZSkge1xyXG4gICAgICAgIHRoaXMuY2F1c2UgPSBjYXVzZTtcclxuICAgICAgICAvLyBFbXB0eVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIENhdWdodEV4Y2VwdGlvbjtcclxufSgpKTtcclxuZnVuY3Rpb24gaXNDYXVnaHRFeGNlcHRpb24oZSkge1xyXG4gICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBDYXVnaHRFeGNlcHRpb247XHJcbn1cclxuLyoqXHJcbiAqIEZpbmRzIG91dCB3aGV0aGVyIGFueSBkZXBlbmRlbmN5IG9mIHRoZSBkZXJpdmF0aW9uIGhhcyBhY3R1YWxseSBjaGFuZ2VkLlxyXG4gKiBJZiBkZXBlbmRlbmNpZXNTdGF0ZSBpcyAxIHRoZW4gaXQgd2lsbCByZWNhbGN1bGF0ZSBkZXBlbmRlbmNpZXMsXHJcbiAqIGlmIGFueSBkZXBlbmRlbmN5IGNoYW5nZWQgaXQgd2lsbCBwcm9wYWdhdGUgaXQgYnkgY2hhbmdpbmcgZGVwZW5kZW5jaWVzU3RhdGUgdG8gMi5cclxuICpcclxuICogQnkgaXRlcmF0aW5nIG92ZXIgdGhlIGRlcGVuZGVuY2llcyBpbiB0aGUgc2FtZSBvcmRlciB0aGF0IHRoZXkgd2VyZSByZXBvcnRlZCBhbmRcclxuICogc3RvcHBpbmcgb24gdGhlIGZpcnN0IGNoYW5nZSwgYWxsIHRoZSByZWNhbGN1bGF0aW9ucyBhcmUgb25seSBjYWxsZWQgZm9yIENvbXB1dGVkVmFsdWVzXHJcbiAqIHRoYXQgd2lsbCBiZSB0cmFja2VkIGJ5IGRlcml2YXRpb24uIFRoYXQgaXMgYmVjYXVzZSB3ZSBhc3N1bWUgdGhhdCBpZiB0aGUgZmlyc3QgeFxyXG4gKiBkZXBlbmRlbmNpZXMgb2YgdGhlIGRlcml2YXRpb24gZG9lc24ndCBjaGFuZ2UgdGhlbiB0aGUgZGVyaXZhdGlvbiBzaG91bGQgcnVuIHRoZSBzYW1lIHdheVxyXG4gKiB1cCB1bnRpbCBhY2Nlc3NpbmcgeC10aCBkZXBlbmRlbmN5LlxyXG4gKi9cclxuZnVuY3Rpb24gc2hvdWxkQ29tcHV0ZShkZXJpdmF0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGUpIHtcclxuICAgICAgICBjYXNlIElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURTpcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGNhc2UgSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkc6XHJcbiAgICAgICAgY2FzZSBJRGVyaXZhdGlvblN0YXRlLlNUQUxFOlxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBjYXNlIElEZXJpdmF0aW9uU3RhdGUuUE9TU0lCTFlfU1RBTEU6IHtcclxuICAgICAgICAgICAgLy8gc3RhdGUgcHJvcGFnYXRpb24gY2FuIG9jY3VyIG91dHNpZGUgb2YgYWN0aW9uL3JlYWN0aXZlIGNvbnRleHQgIzIxOTVcclxuICAgICAgICAgICAgdmFyIHByZXZBbGxvd1N0YXRlUmVhZHMgPSBhbGxvd1N0YXRlUmVhZHNTdGFydCh0cnVlKTtcclxuICAgICAgICAgICAgdmFyIHByZXZVbnRyYWNrZWQgPSB1bnRyYWNrZWRTdGFydCgpOyAvLyBubyBuZWVkIGZvciB0aG9zZSBjb21wdXRlZHMgdG8gYmUgcmVwb3J0ZWQsIHRoZXkgd2lsbCBiZSBwaWNrZWQgdXAgaW4gdHJhY2tEZXJpdmVkRnVuY3Rpb24uXHJcbiAgICAgICAgICAgIHZhciBvYnMgPSBkZXJpdmF0aW9uLm9ic2VydmluZywgbCA9IG9icy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0gb2JzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzQ29tcHV0ZWRWYWx1ZShvYmopKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdsb2JhbFN0YXRlLmRpc2FibGVFcnJvckJvdW5kYXJpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmdldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5nZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgYXJlIG5vdCBpbnRlcmVzdGVkIGluIHRoZSB2YWx1ZSAqb3IqIGV4Y2VwdGlvbiBhdCB0aGlzIG1vbWVudCwgYnV0IGlmIHRoZXJlIGlzIG9uZSwgbm90aWZ5IGFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW50cmFja2VkRW5kKHByZXZVbnRyYWNrZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dTdGF0ZVJlYWRzRW5kKHByZXZBbGxvd1N0YXRlUmVhZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgQ29tcHV0ZWRWYWx1ZSBgb2JqYCBhY3R1YWxseSBjaGFuZ2VkIGl0IHdpbGwgYmUgY29tcHV0ZWQgYW5kIHByb3BhZ2F0ZWQgdG8gaXRzIG9ic2VydmVycy5cclxuICAgICAgICAgICAgICAgICAgICAvLyBhbmQgYGRlcml2YXRpb25gIGlzIGFuIG9ic2VydmVyIG9mIGBvYmpgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW52YXJpYW50U2hvdWxkQ29tcHV0ZShkZXJpdmF0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLlNUQUxFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVudHJhY2tlZEVuZChwcmV2VW50cmFja2VkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dTdGF0ZVJlYWRzRW5kKHByZXZBbGxvd1N0YXRlUmVhZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hhbmdlRGVwZW5kZW5jaWVzU3RhdGVUbzAoZGVyaXZhdGlvbik7XHJcbiAgICAgICAgICAgIHVudHJhY2tlZEVuZChwcmV2VW50cmFja2VkKTtcclxuICAgICAgICAgICAgYWxsb3dTdGF0ZVJlYWRzRW5kKHByZXZBbGxvd1N0YXRlUmVhZHMpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIGZ1bmN0aW9uIGludmFyaWFudFNob3VsZENvbXB1dGUoZGVyaXZhdGlvbjogSURlcml2YXRpb24pIHtcclxuLy8gICAgIGNvbnN0IG5ld0RlcFN0YXRlID0gKGRlcml2YXRpb24gYXMgYW55KS5kZXBlbmRlbmNpZXNTdGF0ZVxyXG4vLyAgICAgaWYgKFxyXG4vLyAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4vLyAgICAgICAgIChuZXdEZXBTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5QT1NTSUJMWV9TVEFMRSB8fFxyXG4vLyAgICAgICAgICAgICBuZXdEZXBTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkcpXHJcbi8vICAgICApXHJcbi8vICAgICAgICAgZmFpbChcIklsbGVnYWwgZGVwZW5kZW5jeSBzdGF0ZVwiKVxyXG4vLyB9XHJcbmZ1bmN0aW9uIGlzQ29tcHV0aW5nRGVyaXZhdGlvbigpIHtcclxuICAgIHJldHVybiBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24gIT09IG51bGw7IC8vIGZpbHRlciBvdXQgYWN0aW9ucyBpbnNpZGUgY29tcHV0YXRpb25zXHJcbn1cclxuZnVuY3Rpb24gY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQoYXRvbSkge1xyXG4gICAgdmFyIGhhc09ic2VydmVycyA9IGF0b20ub2JzZXJ2ZXJzLnNpemUgPiAwO1xyXG4gICAgLy8gU2hvdWxkIG5ldmVyIGJlIHBvc3NpYmxlIHRvIGNoYW5nZSBhbiBvYnNlcnZlZCBvYnNlcnZhYmxlIGZyb20gaW5zaWRlIGNvbXB1dGVkLCBzZWUgIzc5OFxyXG4gICAgaWYgKGdsb2JhbFN0YXRlLmNvbXB1dGF0aW9uRGVwdGggPiAwICYmIGhhc09ic2VydmVycylcclxuICAgICAgICBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICAgICBcIkNvbXB1dGVkIHZhbHVlcyBhcmUgbm90IGFsbG93ZWQgdG8gY2F1c2Ugc2lkZSBlZmZlY3RzIGJ5IGNoYW5naW5nIG9ic2VydmFibGVzIHRoYXQgYXJlIGFscmVhZHkgYmVpbmcgb2JzZXJ2ZWQuIFRyaWVkIHRvIG1vZGlmeTogXCIgKyBhdG9tLm5hbWUpO1xyXG4gICAgLy8gU2hvdWxkIG5vdCBiZSBwb3NzaWJsZSB0byBjaGFuZ2Ugb2JzZXJ2ZWQgc3RhdGUgb3V0c2lkZSBzdHJpY3QgbW9kZSwgZXhjZXB0IGR1cmluZyBpbml0aWFsaXphdGlvbiwgc2VlICM1NjNcclxuICAgIGlmICghZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXMgJiYgKGhhc09ic2VydmVycyB8fCBnbG9iYWxTdGF0ZS5lbmZvcmNlQWN0aW9ucyA9PT0gXCJzdHJpY3RcIikpXHJcbiAgICAgICAgZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgICAgICAgICAgKGdsb2JhbFN0YXRlLmVuZm9yY2VBY3Rpb25zXHJcbiAgICAgICAgICAgICAgICA/IFwiU2luY2Ugc3RyaWN0LW1vZGUgaXMgZW5hYmxlZCwgY2hhbmdpbmcgb2JzZXJ2ZWQgb2JzZXJ2YWJsZSB2YWx1ZXMgb3V0c2lkZSBhY3Rpb25zIGlzIG5vdCBhbGxvd2VkLiBQbGVhc2Ugd3JhcCB0aGUgY29kZSBpbiBhbiBgYWN0aW9uYCBpZiB0aGlzIGNoYW5nZSBpcyBpbnRlbmRlZC4gVHJpZWQgdG8gbW9kaWZ5OiBcIlxyXG4gICAgICAgICAgICAgICAgOiBcIlNpZGUgZWZmZWN0cyBsaWtlIGNoYW5naW5nIHN0YXRlIGFyZSBub3QgYWxsb3dlZCBhdCB0aGlzIHBvaW50LiBBcmUgeW91IHRyeWluZyB0byBtb2RpZnkgc3RhdGUgZnJvbSwgZm9yIGV4YW1wbGUsIHRoZSByZW5kZXIgZnVuY3Rpb24gb2YgYSBSZWFjdCBjb21wb25lbnQ/IFRyaWVkIHRvIG1vZGlmeTogXCIpICtcclxuICAgICAgICAgICAgICAgIGF0b20ubmFtZSk7XHJcbn1cclxuZnVuY3Rpb24gY2hlY2tJZlN0YXRlUmVhZHNBcmVBbGxvd2VkKG9ic2VydmFibGUpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgICAgICAhZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZVJlYWRzICYmXHJcbiAgICAgICAgZ2xvYmFsU3RhdGUub2JzZXJ2YWJsZVJlcXVpcmVzUmVhY3Rpb24pIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieF0gT2JzZXJ2YWJsZSBcIiArIG9ic2VydmFibGUubmFtZSArIFwiIGJlaW5nIHJlYWQgb3V0c2lkZSBhIHJlYWN0aXZlIGNvbnRleHRcIik7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIEV4ZWN1dGVzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBgZmAgYW5kIHRyYWNrcyB3aGljaCBvYnNlcnZhYmxlcyBhcmUgYmVpbmcgYWNjZXNzZWQuXHJcbiAqIFRoZSB0cmFja2luZyBpbmZvcm1hdGlvbiBpcyBzdG9yZWQgb24gdGhlIGBkZXJpdmF0aW9uYCBvYmplY3QgYW5kIHRoZSBkZXJpdmF0aW9uIGlzIHJlZ2lzdGVyZWRcclxuICogYXMgb2JzZXJ2ZXIgb2YgYW55IG9mIHRoZSBhY2Nlc3NlZCBvYnNlcnZhYmxlcy5cclxuICovXHJcbmZ1bmN0aW9uIHRyYWNrRGVyaXZlZEZ1bmN0aW9uKGRlcml2YXRpb24sIGYsIGNvbnRleHQpIHtcclxuICAgIHZhciBwcmV2QWxsb3dTdGF0ZVJlYWRzID0gYWxsb3dTdGF0ZVJlYWRzU3RhcnQodHJ1ZSk7XHJcbiAgICAvLyBwcmUgYWxsb2NhdGUgYXJyYXkgYWxsb2NhdGlvbiArIHJvb20gZm9yIHZhcmlhdGlvbiBpbiBkZXBzXHJcbiAgICAvLyBhcnJheSB3aWxsIGJlIHRyaW1tZWQgYnkgYmluZERlcGVuZGVuY2llc1xyXG4gICAgY2hhbmdlRGVwZW5kZW5jaWVzU3RhdGVUbzAoZGVyaXZhdGlvbik7XHJcbiAgICBkZXJpdmF0aW9uLm5ld09ic2VydmluZyA9IG5ldyBBcnJheShkZXJpdmF0aW9uLm9ic2VydmluZy5sZW5ndGggKyAxMDApO1xyXG4gICAgZGVyaXZhdGlvbi51bmJvdW5kRGVwc0NvdW50ID0gMDtcclxuICAgIGRlcml2YXRpb24ucnVuSWQgPSArK2dsb2JhbFN0YXRlLnJ1bklkO1xyXG4gICAgdmFyIHByZXZUcmFja2luZyA9IGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbjtcclxuICAgIGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbiA9IGRlcml2YXRpb247XHJcbiAgICB2YXIgcmVzdWx0O1xyXG4gICAgaWYgKGdsb2JhbFN0YXRlLmRpc2FibGVFcnJvckJvdW5kYXJpZXMgPT09IHRydWUpIHtcclxuICAgICAgICByZXN1bHQgPSBmLmNhbGwoY29udGV4dCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBmLmNhbGwoY29udGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBDYXVnaHRFeGNlcHRpb24oZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uID0gcHJldlRyYWNraW5nO1xyXG4gICAgYmluZERlcGVuZGVuY2llcyhkZXJpdmF0aW9uKTtcclxuICAgIHdhcm5BYm91dERlcml2YXRpb25XaXRob3V0RGVwZW5kZW5jaWVzKGRlcml2YXRpb24pO1xyXG4gICAgYWxsb3dTdGF0ZVJlYWRzRW5kKHByZXZBbGxvd1N0YXRlUmVhZHMpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiB3YXJuQWJvdXREZXJpdmF0aW9uV2l0aG91dERlcGVuZGVuY2llcyhkZXJpdmF0aW9uKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIGlmIChkZXJpdmF0aW9uLm9ic2VydmluZy5sZW5ndGggIT09IDApXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgaWYgKGdsb2JhbFN0YXRlLnJlYWN0aW9uUmVxdWlyZXNPYnNlcnZhYmxlIHx8IGRlcml2YXRpb24ucmVxdWlyZXNPYnNlcnZhYmxlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiW21vYnhdIERlcml2YXRpb24gXCIgKyBkZXJpdmF0aW9uLm5hbWUgKyBcIiBpcyBjcmVhdGVkL3VwZGF0ZWQgd2l0aG91dCByZWFkaW5nIGFueSBvYnNlcnZhYmxlIHZhbHVlXCIpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBkaWZmcyBuZXdPYnNlcnZpbmcgd2l0aCBvYnNlcnZpbmcuXHJcbiAqIHVwZGF0ZSBvYnNlcnZpbmcgdG8gYmUgbmV3T2JzZXJ2aW5nIHdpdGggdW5pcXVlIG9ic2VydmFibGVzXHJcbiAqIG5vdGlmeSBvYnNlcnZlcnMgdGhhdCBiZWNvbWUgb2JzZXJ2ZWQvdW5vYnNlcnZlZFxyXG4gKi9cclxuZnVuY3Rpb24gYmluZERlcGVuZGVuY2llcyhkZXJpdmF0aW9uKSB7XHJcbiAgICAvLyBpbnZhcmlhbnQoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSAhPT0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkcsIFwiSU5URVJOQUwgRVJST1IgYmluZERlcGVuZGVuY2llcyBleHBlY3RzIGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGUgIT09IC0xXCIpO1xyXG4gICAgdmFyIHByZXZPYnNlcnZpbmcgPSBkZXJpdmF0aW9uLm9ic2VydmluZztcclxuICAgIHZhciBvYnNlcnZpbmcgPSAoZGVyaXZhdGlvbi5vYnNlcnZpbmcgPSBkZXJpdmF0aW9uLm5ld09ic2VydmluZyk7XHJcbiAgICB2YXIgbG93ZXN0TmV3T2JzZXJ2aW5nRGVyaXZhdGlvblN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFO1xyXG4gICAgLy8gR28gdGhyb3VnaCBhbGwgbmV3IG9ic2VydmFibGVzIGFuZCBjaGVjayBkaWZmVmFsdWU6ICh0aGlzIGxpc3QgY2FuIGNvbnRhaW4gZHVwbGljYXRlcyk6XHJcbiAgICAvLyAgIDA6IGZpcnN0IG9jY3VycmVuY2UsIGNoYW5nZSB0byAxIGFuZCBrZWVwIGl0XHJcbiAgICAvLyAgIDE6IGV4dHJhIG9jY3VycmVuY2UsIGRyb3AgaXRcclxuICAgIHZhciBpMCA9IDAsIGwgPSBkZXJpdmF0aW9uLnVuYm91bmREZXBzQ291bnQ7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIHZhciBkZXAgPSBvYnNlcnZpbmdbaV07XHJcbiAgICAgICAgaWYgKGRlcC5kaWZmVmFsdWUgPT09IDApIHtcclxuICAgICAgICAgICAgZGVwLmRpZmZWYWx1ZSA9IDE7XHJcbiAgICAgICAgICAgIGlmIChpMCAhPT0gaSlcclxuICAgICAgICAgICAgICAgIG9ic2VydmluZ1tpMF0gPSBkZXA7XHJcbiAgICAgICAgICAgIGkwKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFVwY2FzdCBpcyAnc2FmZScgaGVyZSwgYmVjYXVzZSBpZiBkZXAgaXMgSU9ic2VydmFibGUsIGBkZXBlbmRlbmNpZXNTdGF0ZWAgd2lsbCBiZSB1bmRlZmluZWQsXHJcbiAgICAgICAgLy8gbm90IGhpdHRpbmcgdGhlIGNvbmRpdGlvblxyXG4gICAgICAgIGlmIChkZXAuZGVwZW5kZW5jaWVzU3RhdGUgPiBsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGUpIHtcclxuICAgICAgICAgICAgbG93ZXN0TmV3T2JzZXJ2aW5nRGVyaXZhdGlvblN0YXRlID0gZGVwLmRlcGVuZGVuY2llc1N0YXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9ic2VydmluZy5sZW5ndGggPSBpMDtcclxuICAgIGRlcml2YXRpb24ubmV3T2JzZXJ2aW5nID0gbnVsbDsgLy8gbmV3T2JzZXJ2aW5nIHNob3VsZG4ndCBiZSBuZWVkZWQgb3V0c2lkZSB0cmFja2luZyAoc3RhdGVtZW50IG1vdmVkIGRvd24gdG8gd29yayBhcm91bmQgRkYgYnVnLCBzZWUgIzYxNClcclxuICAgIC8vIEdvIHRocm91Z2ggYWxsIG9sZCBvYnNlcnZhYmxlcyBhbmQgY2hlY2sgZGlmZlZhbHVlOiAoaXQgaXMgdW5pcXVlIGFmdGVyIGxhc3QgYmluZERlcGVuZGVuY2llcylcclxuICAgIC8vICAgMDogaXQncyBub3QgaW4gbmV3IG9ic2VydmFibGVzLCB1bm9ic2VydmUgaXRcclxuICAgIC8vICAgMTogaXQga2VlcHMgYmVpbmcgb2JzZXJ2ZWQsIGRvbid0IHdhbnQgdG8gbm90aWZ5IGl0LiBjaGFuZ2UgdG8gMFxyXG4gICAgbCA9IHByZXZPYnNlcnZpbmcubGVuZ3RoO1xyXG4gICAgd2hpbGUgKGwtLSkge1xyXG4gICAgICAgIHZhciBkZXAgPSBwcmV2T2JzZXJ2aW5nW2xdO1xyXG4gICAgICAgIGlmIChkZXAuZGlmZlZhbHVlID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZU9ic2VydmVyKGRlcCwgZGVyaXZhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlcC5kaWZmVmFsdWUgPSAwO1xyXG4gICAgfVxyXG4gICAgLy8gR28gdGhyb3VnaCBhbGwgbmV3IG9ic2VydmFibGVzIGFuZCBjaGVjayBkaWZmVmFsdWU6IChub3cgaXQgc2hvdWxkIGJlIHVuaXF1ZSlcclxuICAgIC8vICAgMDogaXQgd2FzIHNldCB0byAwIGluIGxhc3QgbG9vcC4gZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZy5cclxuICAgIC8vICAgMTogaXQgd2Fzbid0IG9ic2VydmVkLCBsZXQncyBvYnNlcnZlIGl0LiBzZXQgYmFjayB0byAwXHJcbiAgICB3aGlsZSAoaTAtLSkge1xyXG4gICAgICAgIHZhciBkZXAgPSBvYnNlcnZpbmdbaTBdO1xyXG4gICAgICAgIGlmIChkZXAuZGlmZlZhbHVlID09PSAxKSB7XHJcbiAgICAgICAgICAgIGRlcC5kaWZmVmFsdWUgPSAwO1xyXG4gICAgICAgICAgICBhZGRPYnNlcnZlcihkZXAsIGRlcml2YXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIFNvbWUgbmV3IG9ic2VydmVkIGRlcml2YXRpb25zIG1heSBiZWNvbWUgc3RhbGUgZHVyaW5nIHRoaXMgZGVyaXZhdGlvbiBjb21wdXRhdGlvblxyXG4gICAgLy8gc28gdGhleSBoYXZlIGhhZCBubyBjaGFuY2UgdG8gcHJvcGFnYXRlIHN0YWxlbmVzcyAoIzkxNilcclxuICAgIGlmIChsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGUgIT09IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURSkge1xyXG4gICAgICAgIGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGUgPSBsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGU7XHJcbiAgICAgICAgZGVyaXZhdGlvbi5vbkJlY29tZVN0YWxlKCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gY2xlYXJPYnNlcnZpbmcoZGVyaXZhdGlvbikge1xyXG4gICAgLy8gaW52YXJpYW50KGdsb2JhbFN0YXRlLmluQmF0Y2ggPiAwLCBcIklOVEVSTkFMIEVSUk9SIGNsZWFyT2JzZXJ2aW5nIHNob3VsZCBiZSBjYWxsZWQgb25seSBpbnNpZGUgYmF0Y2hcIik7XHJcbiAgICB2YXIgb2JzID0gZGVyaXZhdGlvbi5vYnNlcnZpbmc7XHJcbiAgICBkZXJpdmF0aW9uLm9ic2VydmluZyA9IFtdO1xyXG4gICAgdmFyIGkgPSBvYnMubGVuZ3RoO1xyXG4gICAgd2hpbGUgKGktLSlcclxuICAgICAgICByZW1vdmVPYnNlcnZlcihvYnNbaV0sIGRlcml2YXRpb24pO1xyXG4gICAgZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuTk9UX1RSQUNLSU5HO1xyXG59XHJcbmZ1bmN0aW9uIHVudHJhY2tlZChhY3Rpb24pIHtcclxuICAgIHZhciBwcmV2ID0gdW50cmFja2VkU3RhcnQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbigpO1xyXG4gICAgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdW50cmFja2VkRW5kKHByZXYpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHVudHJhY2tlZFN0YXJ0KCkge1xyXG4gICAgdmFyIHByZXYgPSBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb247XHJcbiAgICBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24gPSBudWxsO1xyXG4gICAgcmV0dXJuIHByZXY7XHJcbn1cclxuZnVuY3Rpb24gdW50cmFja2VkRW5kKHByZXYpIHtcclxuICAgIGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbiA9IHByZXY7XHJcbn1cclxuZnVuY3Rpb24gYWxsb3dTdGF0ZVJlYWRzU3RhcnQoYWxsb3dTdGF0ZVJlYWRzKSB7XHJcbiAgICB2YXIgcHJldiA9IGdsb2JhbFN0YXRlLmFsbG93U3RhdGVSZWFkcztcclxuICAgIGdsb2JhbFN0YXRlLmFsbG93U3RhdGVSZWFkcyA9IGFsbG93U3RhdGVSZWFkcztcclxuICAgIHJldHVybiBwcmV2O1xyXG59XHJcbmZ1bmN0aW9uIGFsbG93U3RhdGVSZWFkc0VuZChwcmV2KSB7XHJcbiAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlUmVhZHMgPSBwcmV2O1xyXG59XHJcbi8qKlxyXG4gKiBuZWVkZWQgdG8ga2VlcCBgbG93ZXN0T2JzZXJ2ZXJTdGF0ZWAgY29ycmVjdC4gd2hlbiBjaGFuZ2luZyBmcm9tICgyIG9yIDEpIHRvIDBcclxuICpcclxuICovXHJcbmZ1bmN0aW9uIGNoYW5nZURlcGVuZGVuY2llc1N0YXRlVG8wKGRlcml2YXRpb24pIHtcclxuICAgIGlmIChkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEUpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURTtcclxuICAgIHZhciBvYnMgPSBkZXJpdmF0aW9uLm9ic2VydmluZztcclxuICAgIHZhciBpID0gb2JzLmxlbmd0aDtcclxuICAgIHdoaWxlIChpLS0pXHJcbiAgICAgICAgb2JzW2ldLmxvd2VzdE9ic2VydmVyU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEU7XHJcbn1cblxuLy8gd2UgZG9uJ3QgdXNlIGdsb2JhbFN0YXRlIGZvciB0aGVzZSBpbiBvcmRlciB0byBhdm9pZCBwb3NzaWJsZSBpc3N1ZXMgd2l0aCBtdWx0aXBsZVxyXG4vLyBtb2J4IHZlcnNpb25zXHJcbnZhciBjdXJyZW50QWN0aW9uSWQgPSAwO1xyXG52YXIgbmV4dEFjdGlvbklkID0gMTtcclxudmFyIGZ1bmN0aW9uTmFtZURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGZ1bmN0aW9uICgpIHsgfSwgXCJuYW1lXCIpO1xyXG52YXIgaXNGdW5jdGlvbk5hbWVDb25maWd1cmFibGUgPSBmdW5jdGlvbk5hbWVEZXNjcmlwdG9yICYmIGZ1bmN0aW9uTmFtZURlc2NyaXB0b3IuY29uZmlndXJhYmxlO1xyXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb24oYWN0aW9uTmFtZSwgZm4sIHJlZikge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgIGludmFyaWFudCh0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIiwgXCJgYWN0aW9uYCBjYW4gb25seSBiZSBpbnZva2VkIG9uIGZ1bmN0aW9uc1wiKTtcclxuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbk5hbWUgIT09IFwic3RyaW5nXCIgfHwgIWFjdGlvbk5hbWUpXHJcbiAgICAgICAgICAgIGZhaWwoXCJhY3Rpb25zIHNob3VsZCBoYXZlIHZhbGlkIG5hbWVzLCBnb3Q6ICdcIiArIGFjdGlvbk5hbWUgKyBcIidcIik7XHJcbiAgICB9XHJcbiAgICB2YXIgcmVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBleGVjdXRlQWN0aW9uKGFjdGlvbk5hbWUsIGZuLCByZWYgfHwgdGhpcywgYXJndW1lbnRzKTtcclxuICAgIH07XHJcbiAgICByZXMuaXNNb2J4QWN0aW9uID0gdHJ1ZTtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICBpZiAoaXNGdW5jdGlvbk5hbWVDb25maWd1cmFibGUpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcywgXCJuYW1lXCIsIHsgdmFsdWU6IGFjdGlvbk5hbWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxufVxyXG5mdW5jdGlvbiBleGVjdXRlQWN0aW9uKGFjdGlvbk5hbWUsIGZuLCBzY29wZSwgYXJncykge1xyXG4gICAgdmFyIHJ1bkluZm8gPSBfc3RhcnRBY3Rpb24oYWN0aW9uTmFtZSwgc2NvcGUsIGFyZ3MpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gZm4uYXBwbHkoc2NvcGUsIGFyZ3MpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJ1bkluZm8uZXJyb3IgPSBlcnI7XHJcbiAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgX2VuZEFjdGlvbihydW5JbmZvKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBfc3RhcnRBY3Rpb24oYWN0aW9uTmFtZSwgc2NvcGUsIGFyZ3MpIHtcclxuICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKSAmJiAhIWFjdGlvbk5hbWU7XHJcbiAgICB2YXIgc3RhcnRUaW1lID0gMDtcclxuICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICB2YXIgbCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoKSB8fCAwO1xyXG4gICAgICAgIHZhciBmbGF0dGVuZEFyZ3MgPSBuZXcgQXJyYXkobCk7XHJcbiAgICAgICAgaWYgKGwgPiAwKVxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKylcclxuICAgICAgICAgICAgICAgIGZsYXR0ZW5kQXJnc1tpXSA9IGFyZ3NbaV07XHJcbiAgICAgICAgc3B5UmVwb3J0U3RhcnQoe1xyXG4gICAgICAgICAgICB0eXBlOiBcImFjdGlvblwiLFxyXG4gICAgICAgICAgICBuYW1lOiBhY3Rpb25OYW1lLFxyXG4gICAgICAgICAgICBvYmplY3Q6IHNjb3BlLFxyXG4gICAgICAgICAgICBhcmd1bWVudHM6IGZsYXR0ZW5kQXJnc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdmFyIHByZXZEZXJpdmF0aW9uID0gdW50cmFja2VkU3RhcnQoKTtcclxuICAgIHN0YXJ0QmF0Y2goKTtcclxuICAgIHZhciBwcmV2QWxsb3dTdGF0ZUNoYW5nZXMgPSBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0KHRydWUpO1xyXG4gICAgdmFyIHByZXZBbGxvd1N0YXRlUmVhZHMgPSBhbGxvd1N0YXRlUmVhZHNTdGFydCh0cnVlKTtcclxuICAgIHZhciBydW5JbmZvID0ge1xyXG4gICAgICAgIHByZXZEZXJpdmF0aW9uOiBwcmV2RGVyaXZhdGlvbixcclxuICAgICAgICBwcmV2QWxsb3dTdGF0ZUNoYW5nZXM6IHByZXZBbGxvd1N0YXRlQ2hhbmdlcyxcclxuICAgICAgICBwcmV2QWxsb3dTdGF0ZVJlYWRzOiBwcmV2QWxsb3dTdGF0ZVJlYWRzLFxyXG4gICAgICAgIG5vdGlmeVNweTogbm90aWZ5U3B5LFxyXG4gICAgICAgIHN0YXJ0VGltZTogc3RhcnRUaW1lLFxyXG4gICAgICAgIGFjdGlvbklkOiBuZXh0QWN0aW9uSWQrKyxcclxuICAgICAgICBwYXJlbnRBY3Rpb25JZDogY3VycmVudEFjdGlvbklkXHJcbiAgICB9O1xyXG4gICAgY3VycmVudEFjdGlvbklkID0gcnVuSW5mby5hY3Rpb25JZDtcclxuICAgIHJldHVybiBydW5JbmZvO1xyXG59XHJcbmZ1bmN0aW9uIF9lbmRBY3Rpb24ocnVuSW5mbykge1xyXG4gICAgaWYgKGN1cnJlbnRBY3Rpb25JZCAhPT0gcnVuSW5mby5hY3Rpb25JZCkge1xyXG4gICAgICAgIGZhaWwoXCJpbnZhbGlkIGFjdGlvbiBzdGFjay4gZGlkIHlvdSBmb3JnZXQgdG8gZmluaXNoIGFuIGFjdGlvbj9cIik7XHJcbiAgICB9XHJcbiAgICBjdXJyZW50QWN0aW9uSWQgPSBydW5JbmZvLnBhcmVudEFjdGlvbklkO1xyXG4gICAgaWYgKHJ1bkluZm8uZXJyb3IgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGdsb2JhbFN0YXRlLnN1cHByZXNzUmVhY3Rpb25FcnJvcnMgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgYWxsb3dTdGF0ZUNoYW5nZXNFbmQocnVuSW5mby5wcmV2QWxsb3dTdGF0ZUNoYW5nZXMpO1xyXG4gICAgYWxsb3dTdGF0ZVJlYWRzRW5kKHJ1bkluZm8ucHJldkFsbG93U3RhdGVSZWFkcyk7XHJcbiAgICBlbmRCYXRjaCgpO1xyXG4gICAgdW50cmFja2VkRW5kKHJ1bkluZm8ucHJldkRlcml2YXRpb24pO1xyXG4gICAgaWYgKHJ1bkluZm8ubm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgIHNweVJlcG9ydEVuZCh7IHRpbWU6IERhdGUubm93KCkgLSBydW5JbmZvLnN0YXJ0VGltZSB9KTtcclxuICAgIH1cclxuICAgIGdsb2JhbFN0YXRlLnN1cHByZXNzUmVhY3Rpb25FcnJvcnMgPSBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiBhbGxvd1N0YXRlQ2hhbmdlcyhhbGxvd1N0YXRlQ2hhbmdlcywgZnVuYykge1xyXG4gICAgdmFyIHByZXYgPSBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0KGFsbG93U3RhdGVDaGFuZ2VzKTtcclxuICAgIHZhciByZXM7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJlcyA9IGZ1bmMoKTtcclxuICAgIH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIGFsbG93U3RhdGVDaGFuZ2VzRW5kKHByZXYpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxufVxyXG5mdW5jdGlvbiBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0KGFsbG93U3RhdGVDaGFuZ2VzKSB7XHJcbiAgICB2YXIgcHJldiA9IGdsb2JhbFN0YXRlLmFsbG93U3RhdGVDaGFuZ2VzO1xyXG4gICAgZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXMgPSBhbGxvd1N0YXRlQ2hhbmdlcztcclxuICAgIHJldHVybiBwcmV2O1xyXG59XHJcbmZ1bmN0aW9uIGFsbG93U3RhdGVDaGFuZ2VzRW5kKHByZXYpIHtcclxuICAgIGdsb2JhbFN0YXRlLmFsbG93U3RhdGVDaGFuZ2VzID0gcHJldjtcclxufVxyXG5mdW5jdGlvbiBhbGxvd1N0YXRlQ2hhbmdlc0luc2lkZUNvbXB1dGVkKGZ1bmMpIHtcclxuICAgIHZhciBwcmV2ID0gZ2xvYmFsU3RhdGUuY29tcHV0YXRpb25EZXB0aDtcclxuICAgIGdsb2JhbFN0YXRlLmNvbXB1dGF0aW9uRGVwdGggPSAwO1xyXG4gICAgdmFyIHJlcztcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmVzID0gZnVuYygpO1xyXG4gICAgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgZ2xvYmFsU3RhdGUuY29tcHV0YXRpb25EZXB0aCA9IHByZXY7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG59XG5cbnZhciBPYnNlcnZhYmxlVmFsdWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoT2JzZXJ2YWJsZVZhbHVlLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gT2JzZXJ2YWJsZVZhbHVlKHZhbHVlLCBlbmhhbmNlciwgbmFtZSwgbm90aWZ5U3B5LCBlcXVhbHMpIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7IG5hbWUgPSBcIk9ic2VydmFibGVWYWx1ZUBcIiArIGdldE5leHRJZCgpOyB9XHJcbiAgICAgICAgaWYgKG5vdGlmeVNweSA9PT0gdm9pZCAwKSB7IG5vdGlmeVNweSA9IHRydWU7IH1cclxuICAgICAgICBpZiAoZXF1YWxzID09PSB2b2lkIDApIHsgZXF1YWxzID0gY29tcGFyZXIuZGVmYXVsdDsgfVxyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG5hbWUpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuZW5oYW5jZXIgPSBlbmhhbmNlcjtcclxuICAgICAgICBfdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICBfdGhpcy5lcXVhbHMgPSBlcXVhbHM7XHJcbiAgICAgICAgX3RoaXMuaGFzVW5yZXBvcnRlZENoYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgIF90aGlzLnZhbHVlID0gZW5oYW5jZXIodmFsdWUsIHVuZGVmaW5lZCwgbmFtZSk7XHJcbiAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBpc1NweUVuYWJsZWQoKSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgLy8gb25seSBub3RpZnkgc3B5IGlmIHRoaXMgaXMgYSBzdGFuZC1hbG9uZSBvYnNlcnZhYmxlXHJcbiAgICAgICAgICAgIHNweVJlcG9ydCh7IHR5cGU6IFwiY3JlYXRlXCIsIG5hbWU6IF90aGlzLm5hbWUsIG5ld1ZhbHVlOiBcIlwiICsgX3RoaXMudmFsdWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGUuZGVoYW5jZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVoYW5jZXIgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZXIodmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xyXG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgbmV3VmFsdWUgPSB0aGlzLnByZXBhcmVOZXdWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBnbG9iYWxTdGF0ZS5VTkNIQU5HRUQpIHtcclxuICAgICAgICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xyXG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TmV3VmFsdWUobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLnByZXBhcmVOZXdWYWx1ZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xyXG4gICAgICAgIGNoZWNrSWZTdGF0ZU1vZGlmaWNhdGlvbnNBcmVBbGxvd2VkKHRoaXMpO1xyXG4gICAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcclxuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIWNoYW5nZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBnbG9iYWxTdGF0ZS5VTkNIQU5HRUQ7XHJcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gY2hhbmdlLm5ld1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBhcHBseSBtb2RpZmllclxyXG4gICAgICAgIG5ld1ZhbHVlID0gdGhpcy5lbmhhbmNlcihuZXdWYWx1ZSwgdGhpcy52YWx1ZSwgdGhpcy5uYW1lKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5lcXVhbHModGhpcy52YWx1ZSwgbmV3VmFsdWUpID8gZ2xvYmFsU3RhdGUuVU5DSEFOR0VEIDogbmV3VmFsdWU7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS5zZXROZXdWYWx1ZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xyXG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIHRoaXMucmVwb3J0Q2hhbmdlZCgpO1xyXG4gICAgICAgIGlmIChoYXNMaXN0ZW5lcnModGhpcykpIHtcclxuICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucmVwb3J0T2JzZXJ2ZWQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlVmFsdWUodGhpcy52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS5pbnRlcmNlcHQgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xyXG4gICAgICAgIHJldHVybiByZWdpc3RlckludGVyY2VwdG9yKHRoaXMsIGhhbmRsZXIpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XHJcbiAgICAgICAgaWYgKGZpcmVJbW1lZGlhdGVseSlcclxuICAgICAgICAgICAgbGlzdGVuZXIoe1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcclxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB0aGlzLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVnaXN0ZXJMaXN0ZW5lcih0aGlzLCBsaXN0ZW5lcik7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lICsgXCJbXCIgKyB0aGlzLnZhbHVlICsgXCJdXCI7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS52YWx1ZU9mID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0b1ByaW1pdGl2ZSh0aGlzLmdldCgpKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlW1N5bWJvbC50b1ByaW1pdGl2ZV0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlVmFsdWU7XHJcbn0oQXRvbSkpO1xyXG52YXIgaXNPYnNlcnZhYmxlVmFsdWUgPSBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiT2JzZXJ2YWJsZVZhbHVlXCIsIE9ic2VydmFibGVWYWx1ZSk7XG5cbi8qKlxyXG4gKiBBIG5vZGUgaW4gdGhlIHN0YXRlIGRlcGVuZGVuY3kgcm9vdCB0aGF0IG9ic2VydmVzIG90aGVyIG5vZGVzLCBhbmQgY2FuIGJlIG9ic2VydmVkIGl0c2VsZi5cclxuICpcclxuICogQ29tcHV0ZWRWYWx1ZSB3aWxsIHJlbWVtYmVyIHRoZSByZXN1bHQgb2YgdGhlIGNvbXB1dGF0aW9uIGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIGJhdGNoLCBvclxyXG4gKiB3aGlsZSBiZWluZyBvYnNlcnZlZC5cclxuICpcclxuICogRHVyaW5nIHRoaXMgdGltZSBpdCB3aWxsIHJlY29tcHV0ZSBvbmx5IHdoZW4gb25lIG9mIGl0cyBkaXJlY3QgZGVwZW5kZW5jaWVzIGNoYW5nZWQsXHJcbiAqIGJ1dCBvbmx5IHdoZW4gaXQgaXMgYmVpbmcgYWNjZXNzZWQgd2l0aCBgQ29tcHV0ZWRWYWx1ZS5nZXQoKWAuXHJcbiAqXHJcbiAqIEltcGxlbWVudGF0aW9uIGRlc2NyaXB0aW9uOlxyXG4gKiAxLiBGaXJzdCB0aW1lIGl0J3MgYmVpbmcgYWNjZXNzZWQgaXQgd2lsbCBjb21wdXRlIGFuZCByZW1lbWJlciByZXN1bHRcclxuICogICAgZ2l2ZSBiYWNrIHJlbWVtYmVyZWQgcmVzdWx0IHVudGlsIDIuIGhhcHBlbnNcclxuICogMi4gRmlyc3QgdGltZSBhbnkgZGVlcCBkZXBlbmRlbmN5IGNoYW5nZSwgcHJvcGFnYXRlIFBPU1NJQkxZX1NUQUxFIHRvIGFsbCBvYnNlcnZlcnMsIHdhaXQgZm9yIDMuXHJcbiAqIDMuIFdoZW4gaXQncyBiZWluZyBhY2Nlc3NlZCwgcmVjb21wdXRlIGlmIGFueSBzaGFsbG93IGRlcGVuZGVuY3kgY2hhbmdlZC5cclxuICogICAgaWYgcmVzdWx0IGNoYW5nZWQ6IHByb3BhZ2F0ZSBTVEFMRSB0byBhbGwgb2JzZXJ2ZXJzLCB0aGF0IHdlcmUgUE9TU0lCTFlfU1RBTEUgZnJvbSB0aGUgbGFzdCBzdGVwLlxyXG4gKiAgICBnbyB0byBzdGVwIDIuIGVpdGhlciB3YXlcclxuICpcclxuICogSWYgYXQgYW55IHBvaW50IGl0J3Mgb3V0c2lkZSBiYXRjaCBhbmQgaXQgaXNuJ3Qgb2JzZXJ2ZWQ6IHJlc2V0IGV2ZXJ5dGhpbmcgYW5kIGdvIHRvIDEuXHJcbiAqL1xyXG52YXIgQ29tcHV0ZWRWYWx1ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGNvbXB1dGVkIHZhbHVlIGJhc2VkIG9uIGEgZnVuY3Rpb24gZXhwcmVzc2lvbi5cclxuICAgICAqXHJcbiAgICAgKiBUaGUgYG5hbWVgIHByb3BlcnR5IGlzIGZvciBkZWJ1ZyBwdXJwb3NlcyBvbmx5LlxyXG4gICAgICpcclxuICAgICAqIFRoZSBgZXF1YWxzYCBwcm9wZXJ0eSBzcGVjaWZpZXMgdGhlIGNvbXBhcmVyIGZ1bmN0aW9uIHRvIHVzZSB0byBkZXRlcm1pbmUgaWYgYSBuZXdseSBwcm9kdWNlZFxyXG4gICAgICogdmFsdWUgZGlmZmVycyBmcm9tIHRoZSBwcmV2aW91cyB2YWx1ZS4gVHdvIGNvbXBhcmVycyBhcmUgcHJvdmlkZWQgaW4gdGhlIGxpYnJhcnk7IGBkZWZhdWx0Q29tcGFyZXJgXHJcbiAgICAgKiBjb21wYXJlcyBiYXNlZCBvbiBpZGVudGl0eSBjb21wYXJpc29uICg9PT0pLCBhbmQgYHN0cnVjdHVhbENvbXBhcmVyYCBkZWVwbHkgY29tcGFyZXMgdGhlIHN0cnVjdHVyZS5cclxuICAgICAqIFN0cnVjdHVyYWwgY29tcGFyaXNvbiBjYW4gYmUgY29udmVuaWVudCBpZiB5b3UgYWx3YXlzIHByb2R1Y2UgYSBuZXcgYWdncmVnYXRlZCBvYmplY3QgYW5kXHJcbiAgICAgKiBkb24ndCB3YW50IHRvIG5vdGlmeSBvYnNlcnZlcnMgaWYgaXQgaXMgc3RydWN0dXJhbGx5IHRoZSBzYW1lLlxyXG4gICAgICogVGhpcyBpcyB1c2VmdWwgZm9yIHdvcmtpbmcgd2l0aCB2ZWN0b3JzLCBtb3VzZSBjb29yZGluYXRlcyBldGMuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIENvbXB1dGVkVmFsdWUob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuZGVwZW5kZW5jaWVzU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLk5PVF9UUkFDS0lORztcclxuICAgICAgICB0aGlzLm9ic2VydmluZyA9IFtdOyAvLyBub2RlcyB3ZSBhcmUgbG9va2luZyBhdC4gT3VyIHZhbHVlIGRlcGVuZHMgb24gdGhlc2Ugbm9kZXNcclxuICAgICAgICB0aGlzLm5ld09ic2VydmluZyA9IG51bGw7IC8vIGR1cmluZyB0cmFja2luZyBpdCdzIGFuIGFycmF5IHdpdGggbmV3IG9ic2VydmVkIG9ic2VydmVyc1xyXG4gICAgICAgIHRoaXMuaXNCZWluZ09ic2VydmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1BlbmRpbmdVbm9ic2VydmF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgdGhpcy5kaWZmVmFsdWUgPSAwO1xyXG4gICAgICAgIHRoaXMucnVuSWQgPSAwO1xyXG4gICAgICAgIHRoaXMubGFzdEFjY2Vzc2VkQnkgPSAwO1xyXG4gICAgICAgIHRoaXMubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURTtcclxuICAgICAgICB0aGlzLnVuYm91bmREZXBzQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuX19tYXBpZCA9IFwiI1wiICsgZ2V0TmV4dElkKCk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG5ldyBDYXVnaHRFeGNlcHRpb24obnVsbCk7XHJcbiAgICAgICAgdGhpcy5pc0NvbXB1dGluZyA9IGZhbHNlOyAvLyB0byBjaGVjayBmb3IgY3ljbGVzXHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmdTZXR0ZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzVHJhY2luZyA9IFRyYWNlTW9kZS5OT05FO1xyXG4gICAgICAgIGludmFyaWFudChvcHRpb25zLmdldCwgXCJtaXNzaW5nIG9wdGlvbiBmb3IgY29tcHV0ZWQ6IGdldFwiKTtcclxuICAgICAgICB0aGlzLmRlcml2YXRpb24gPSBvcHRpb25zLmdldDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgXCJDb21wdXRlZFZhbHVlQFwiICsgZ2V0TmV4dElkKCk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuc2V0KVxyXG4gICAgICAgICAgICB0aGlzLnNldHRlciA9IGNyZWF0ZUFjdGlvbih0aGlzLm5hbWUgKyBcIi1zZXR0ZXJcIiwgb3B0aW9ucy5zZXQpO1xyXG4gICAgICAgIHRoaXMuZXF1YWxzID1cclxuICAgICAgICAgICAgb3B0aW9ucy5lcXVhbHMgfHxcclxuICAgICAgICAgICAgICAgIChvcHRpb25zLmNvbXBhcmVTdHJ1Y3R1cmFsIHx8IG9wdGlvbnMuc3RydWN0XHJcbiAgICAgICAgICAgICAgICAgICAgPyBjb21wYXJlci5zdHJ1Y3R1cmFsXHJcbiAgICAgICAgICAgICAgICAgICAgOiBjb21wYXJlci5kZWZhdWx0KTtcclxuICAgICAgICB0aGlzLnNjb3BlID0gb3B0aW9ucy5jb250ZXh0O1xyXG4gICAgICAgIHRoaXMucmVxdWlyZXNSZWFjdGlvbiA9ICEhb3B0aW9ucy5yZXF1aXJlc1JlYWN0aW9uO1xyXG4gICAgICAgIHRoaXMua2VlcEFsaXZlID0gISFvcHRpb25zLmtlZXBBbGl2ZTtcclxuICAgIH1cclxuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLm9uQmVjb21lU3RhbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcHJvcGFnYXRlTWF5YmVDaGFuZ2VkKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLm9uQmVjb21lT2JzZXJ2ZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub25CZWNvbWVPYnNlcnZlZExpc3RlbmVycykge1xyXG4gICAgICAgICAgICB0aGlzLm9uQmVjb21lT2JzZXJ2ZWRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIGxpc3RlbmVyKCk7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS5vbkJlY29tZVVub2JzZXJ2ZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub25CZWNvbWVVbm9ic2VydmVkTGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25CZWNvbWVVbm9ic2VydmVkTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7IHJldHVybiBsaXN0ZW5lcigpOyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoaXMgY29tcHV0ZWQgdmFsdWUuXHJcbiAgICAgKiBXaWxsIGV2YWx1YXRlIGl0cyBjb21wdXRhdGlvbiBmaXJzdCBpZiBuZWVkZWQuXHJcbiAgICAgKi9cclxuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0NvbXB1dGluZylcclxuICAgICAgICAgICAgZmFpbChcIkN5Y2xlIGRldGVjdGVkIGluIGNvbXB1dGF0aW9uIFwiICsgdGhpcy5uYW1lICsgXCI6IFwiICsgdGhpcy5kZXJpdmF0aW9uKTtcclxuICAgICAgICBpZiAoZ2xvYmFsU3RhdGUuaW5CYXRjaCA9PT0gMCAmJiB0aGlzLm9ic2VydmVycy5zaXplID09PSAwICYmICF0aGlzLmtlZXBBbGl2ZSkge1xyXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29tcHV0ZSh0aGlzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53YXJuQWJvdXRVbnRyYWNrZWRSZWFkKCk7XHJcbiAgICAgICAgICAgICAgICBzdGFydEJhdGNoKCk7IC8vIFNlZSBwZXJmIHRlc3QgJ2NvbXB1dGVkIG1lbW9pemF0aW9uJ1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuY29tcHV0ZVZhbHVlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGVuZEJhdGNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcG9ydE9ic2VydmVkKHRoaXMpO1xyXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29tcHV0ZSh0aGlzKSlcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyYWNrQW5kQ29tcHV0ZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BhZ2F0ZUNoYW5nZUNvbmZpcm1lZCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYgKGlzQ2F1Z2h0RXhjZXB0aW9uKHJlc3VsdCkpXHJcbiAgICAgICAgICAgIHRocm93IHJlc3VsdC5jYXVzZTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJlcyA9IHRoaXMuY29tcHV0ZVZhbHVlKGZhbHNlKTtcclxuICAgICAgICBpZiAoaXNDYXVnaHRFeGNlcHRpb24ocmVzKSlcclxuICAgICAgICAgICAgdGhyb3cgcmVzLmNhdXNlO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9O1xyXG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGVyKSB7XHJcbiAgICAgICAgICAgIGludmFyaWFudCghdGhpcy5pc1J1bm5pbmdTZXR0ZXIsIFwiVGhlIHNldHRlciBvZiBjb21wdXRlZCB2YWx1ZSAnXCIgKyB0aGlzLm5hbWUgKyBcIicgaXMgdHJ5aW5nIHRvIHVwZGF0ZSBpdHNlbGYuIERpZCB5b3UgaW50ZW5kIHRvIHVwZGF0ZSBhbiBfb2JzZXJ2YWJsZV8gdmFsdWUsIGluc3RlYWQgb2YgdGhlIGNvbXB1dGVkIHByb3BlcnR5P1wiKTtcclxuICAgICAgICAgICAgdGhpcy5pc1J1bm5pbmdTZXR0ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0ZXIuY2FsbCh0aGlzLnNjb3BlLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUnVubmluZ1NldHRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgaW52YXJpYW50KGZhbHNlLCBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgICAgICAgICAgICAgIFwiW0NvbXB1dGVkVmFsdWUgJ1wiICsgdGhpcy5uYW1lICsgXCInXSBJdCBpcyBub3QgcG9zc2libGUgdG8gYXNzaWduIGEgbmV3IHZhbHVlIHRvIGEgY29tcHV0ZWQgdmFsdWUuXCIpO1xyXG4gICAgfTtcclxuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLnRyYWNrQW5kQ29tcHV0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoaXNTcHlFbmFibGVkKCkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHNweVJlcG9ydCh7XHJcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMuc2NvcGUsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImNvbXB1dGVcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgICAgICB2YXIgd2FzU3VzcGVuZGVkID0gXHJcbiAgICAgICAgLyogc2VlICMxMjA4ICovIHRoaXMuZGVwZW5kZW5jaWVzU3RhdGUgPT09IElEZXJpdmF0aW9uU3RhdGUuTk9UX1RSQUNLSU5HO1xyXG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHRoaXMuY29tcHV0ZVZhbHVlKHRydWUpO1xyXG4gICAgICAgIHZhciBjaGFuZ2VkID0gd2FzU3VzcGVuZGVkIHx8XHJcbiAgICAgICAgICAgIGlzQ2F1Z2h0RXhjZXB0aW9uKG9sZFZhbHVlKSB8fFxyXG4gICAgICAgICAgICBpc0NhdWdodEV4Y2VwdGlvbihuZXdWYWx1ZSkgfHxcclxuICAgICAgICAgICAgIXRoaXMuZXF1YWxzKG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2hhbmdlZDtcclxuICAgIH07XHJcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS5jb21wdXRlVmFsdWUgPSBmdW5jdGlvbiAodHJhY2spIHtcclxuICAgICAgICB0aGlzLmlzQ29tcHV0aW5nID0gdHJ1ZTtcclxuICAgICAgICBnbG9iYWxTdGF0ZS5jb21wdXRhdGlvbkRlcHRoKys7XHJcbiAgICAgICAgdmFyIHJlcztcclxuICAgICAgICBpZiAodHJhY2spIHtcclxuICAgICAgICAgICAgcmVzID0gdHJhY2tEZXJpdmVkRnVuY3Rpb24odGhpcywgdGhpcy5kZXJpdmF0aW9uLCB0aGlzLnNjb3BlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChnbG9iYWxTdGF0ZS5kaXNhYmxlRXJyb3JCb3VuZGFyaWVzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXMgPSB0aGlzLmRlcml2YXRpb24uY2FsbCh0aGlzLnNjb3BlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gdGhpcy5kZXJpdmF0aW9uLmNhbGwodGhpcy5zY29wZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IG5ldyBDYXVnaHRFeGNlcHRpb24oZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZ2xvYmFsU3RhdGUuY29tcHV0YXRpb25EZXB0aC0tO1xyXG4gICAgICAgIHRoaXMuaXNDb21wdXRpbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfTtcclxuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLnN1c3BlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmtlZXBBbGl2ZSkge1xyXG4gICAgICAgICAgICBjbGVhck9ic2VydmluZyh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDsgLy8gZG9uJ3QgaG9sZCBvbiB0byBjb21wdXRlZCB2YWx1ZSFcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgZmlyc3RUaW1lID0gdHJ1ZTtcclxuICAgICAgICB2YXIgcHJldlZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHJldHVybiBhdXRvcnVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gX3RoaXMuZ2V0KCk7XHJcbiAgICAgICAgICAgIGlmICghZmlyc3RUaW1lIHx8IGZpcmVJbW1lZGlhdGVseSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHByZXZVID0gdW50cmFja2VkU3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVyKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogX3RoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBwcmV2VmFsdWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdW50cmFja2VkRW5kKHByZXZVKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaXJzdFRpbWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcHJldlZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUud2FybkFib3V0VW50cmFja2VkUmVhZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMucmVxdWlyZXNSZWFjdGlvbiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBmYWlsKFwiW21vYnhdIENvbXB1dGVkIHZhbHVlIFwiICsgdGhpcy5uYW1lICsgXCIgaXMgcmVhZCBvdXRzaWRlIGEgcmVhY3RpdmUgY29udGV4dFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUcmFjaW5nICE9PSBUcmFjZU1vZGUuTk9ORSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlttb2J4LnRyYWNlXSAnXCIgKyB0aGlzLm5hbWUgKyBcIicgaXMgYmVpbmcgcmVhZCBvdXRzaWRlIGEgcmVhY3RpdmUgY29udGV4dC4gRG9pbmcgYSBmdWxsIHJlY29tcHV0ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdsb2JhbFN0YXRlLmNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieF0gQ29tcHV0ZWQgdmFsdWUgXCIgKyB0aGlzLm5hbWUgKyBcIiBpcyBiZWluZyByZWFkIG91dHNpZGUgYSByZWFjdGl2ZSBjb250ZXh0LiBEb2luZyBhIGZ1bGwgcmVjb21wdXRlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCk7XHJcbiAgICB9O1xyXG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSArIFwiW1wiICsgdGhpcy5kZXJpdmF0aW9uLnRvU3RyaW5nKCkgKyBcIl1cIjtcclxuICAgIH07XHJcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS52YWx1ZU9mID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0b1ByaW1pdGl2ZSh0aGlzLmdldCgpKTtcclxuICAgIH07XHJcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZVtTeW1ib2wudG9QcmltaXRpdmVdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29tcHV0ZWRWYWx1ZTtcclxufSgpKTtcclxudmFyIGlzQ29tcHV0ZWRWYWx1ZSA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJDb21wdXRlZFZhbHVlXCIsIENvbXB1dGVkVmFsdWUpO1xuXG4vKipcclxuICogVGhlc2UgdmFsdWVzIHdpbGwgcGVyc2lzdCBpZiBnbG9iYWwgc3RhdGUgaXMgcmVzZXRcclxuICovXHJcbnZhciBwZXJzaXN0ZW50S2V5cyA9IFtcclxuICAgIFwibW9ieEd1aWRcIixcclxuICAgIFwic3B5TGlzdGVuZXJzXCIsXHJcbiAgICBcImVuZm9yY2VBY3Rpb25zXCIsXHJcbiAgICBcImNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvblwiLFxyXG4gICAgXCJyZWFjdGlvblJlcXVpcmVzT2JzZXJ2YWJsZVwiLFxyXG4gICAgXCJvYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvblwiLFxyXG4gICAgXCJhbGxvd1N0YXRlUmVhZHNcIixcclxuICAgIFwiZGlzYWJsZUVycm9yQm91bmRhcmllc1wiLFxyXG4gICAgXCJydW5JZFwiLFxyXG4gICAgXCJVTkNIQU5HRURcIlxyXG5dO1xyXG52YXIgTW9iWEdsb2JhbHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNb2JYR2xvYmFscygpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNb2JYR2xvYmFscyB2ZXJzaW9uLlxyXG4gICAgICAgICAqIE1vYlggY29tcGF0aWJsaXR5IHdpdGggb3RoZXIgdmVyc2lvbnMgbG9hZGVkIGluIG1lbW9yeSBhcyBsb25nIGFzIHRoaXMgdmVyc2lvbiBtYXRjaGVzLlxyXG4gICAgICAgICAqIEl0IGluZGljYXRlcyB0aGF0IHRoZSBnbG9iYWwgc3RhdGUgc3RpbGwgc3RvcmVzIHNpbWlsYXIgaW5mb3JtYXRpb25cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIE4uQjogdGhpcyB2ZXJzaW9uIGlzIHVucmVsYXRlZCB0byB0aGUgcGFja2FnZSB2ZXJzaW9uIG9mIE1vYlgsIGFuZCBpcyBvbmx5IHRoZSB2ZXJzaW9uIG9mIHRoZVxyXG4gICAgICAgICAqIGludGVybmFsIHN0YXRlIHN0b3JhZ2Ugb2YgTW9iWCwgYW5kIGNhbiBiZSB0aGUgc2FtZSBhY3Jvc3MgbWFueSBkaWZmZXJlbnQgcGFja2FnZSB2ZXJzaW9uc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMudmVyc2lvbiA9IDU7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogZ2xvYmFsbHkgdW5pcXVlIHRva2VuIHRvIHNpZ25hbCB1bmNoYW5nZWRcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLlVOQ0hBTkdFRCA9IHt9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEN1cnJlbnRseSBydW5uaW5nIGRlcml2YXRpb25cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnRyYWNraW5nRGVyaXZhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQXJlIHdlIHJ1bm5pbmcgYSBjb21wdXRhdGlvbiBjdXJyZW50bHk/IChub3QgYSByZWFjdGlvbilcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmNvbXB1dGF0aW9uRGVwdGggPSAwO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEVhY2ggdGltZSBhIGRlcml2YXRpb24gaXMgdHJhY2tlZCwgaXQgaXMgYXNzaWduZWQgYSB1bmlxdWUgcnVuLWlkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5ydW5JZCA9IDA7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogJ2d1aWQnIGZvciBnZW5lcmFsIHB1cnBvc2UuIFdpbGwgYmUgcGVyc2lzdGVkIGFtb25nc3QgcmVzZXRzLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMubW9ieEd1aWQgPSAwO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFyZSB3ZSBpbiBhIGJhdGNoIGJsb2NrPyAoYW5kIGhvdyBtYW55IG9mIHRoZW0pXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5pbkJhdGNoID0gMDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBPYnNlcnZhYmxlcyB0aGF0IGRvbid0IGhhdmUgb2JzZXJ2ZXJzIGFueW1vcmUsIGFuZCBhcmUgYWJvdXQgdG8gYmVcclxuICAgICAgICAgKiBzdXNwZW5kZWQsIHVubGVzcyBzb21lYm9keSBlbHNlIGFjY2Vzc2VzIGl0IGluIHRoZSBzYW1lIGJhdGNoXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAdHlwZSB7SU9ic2VydmFibGVbXX1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnBlbmRpbmdVbm9ic2VydmF0aW9ucyA9IFtdO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIExpc3Qgb2Ygc2NoZWR1bGVkLCBub3QgeWV0IGV4ZWN1dGVkLCByZWFjdGlvbnMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5wZW5kaW5nUmVhY3Rpb25zID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQXJlIHdlIGN1cnJlbnRseSBwcm9jZXNzaW5nIHJlYWN0aW9ucz9cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmlzUnVubmluZ1JlYWN0aW9ucyA9IGZhbHNlO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElzIGl0IGFsbG93ZWQgdG8gY2hhbmdlIG9ic2VydmFibGVzIGF0IHRoaXMgcG9pbnQ/XHJcbiAgICAgICAgICogSW4gZ2VuZXJhbCwgTW9iWCBkb2Vzbid0IGFsbG93IHRoYXQgd2hlbiBydW5uaW5nIGNvbXB1dGF0aW9ucyBhbmQgUmVhY3QucmVuZGVyLlxyXG4gICAgICAgICAqIFRvIGVuc3VyZSB0aGF0IHRob3NlIGZ1bmN0aW9ucyBzdGF5IHB1cmUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5hbGxvd1N0YXRlQ2hhbmdlcyA9IHRydWU7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSXMgaXQgYWxsb3dlZCB0byByZWFkIG9ic2VydmFibGVzIGF0IHRoaXMgcG9pbnQ/XHJcbiAgICAgICAgICogVXNlZCB0byBob2xkIHRoZSBzdGF0ZSBuZWVkZWQgZm9yIGBvYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvbmBcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmFsbG93U3RhdGVSZWFkcyA9IHRydWU7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSWYgc3RyaWN0IG1vZGUgaXMgZW5hYmxlZCwgc3RhdGUgY2hhbmdlcyBhcmUgYnkgZGVmYXVsdCBub3QgYWxsb3dlZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZW5mb3JjZUFjdGlvbnMgPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTcHkgY2FsbGJhY2tzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5zcHlMaXN0ZW5lcnMgPSBbXTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHbG9iYWxseSBhdHRhY2hlZCBlcnJvciBoYW5kbGVycyB0aGF0IHJlYWN0IHNwZWNpZmljYWxseSB0byBlcnJvcnMgaW4gcmVhY3Rpb25zXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5nbG9iYWxSZWFjdGlvbkVycm9ySGFuZGxlcnMgPSBbXTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBXYXJuIGlmIGNvbXB1dGVkIHZhbHVlcyBhcmUgYWNjZXNzZWQgb3V0c2lkZSBhIHJlYWN0aXZlIGNvbnRleHRcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIChFeHBlcmltZW50YWwpXHJcbiAgICAgICAgICogV2FybiBpZiB5b3UgdHJ5IHRvIGNyZWF0ZSB0byBkZXJpdmF0aW9uIC8gcmVhY3RpdmUgY29udGV4dCB3aXRob3V0IGFjY2Vzc2luZyBhbnkgb2JzZXJ2YWJsZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnJlYWN0aW9uUmVxdWlyZXNPYnNlcnZhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogKEV4cGVyaW1lbnRhbClcclxuICAgICAgICAgKiBXYXJuIGlmIG9ic2VydmFibGVzIGFyZSBhY2Nlc3NlZCBvdXRzaWRlIGEgcmVhY3RpdmUgY29udGV4dFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZVJlcXVpcmVzUmVhY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbGxvd3Mgb3ZlcndyaXRpbmcgb2YgY29tcHV0ZWQgcHJvcGVydGllcywgdXNlZnVsIGluIHRlc3RzIGJ1dCBub3QgcHJvZCBhcyBpdCBjYW4gY2F1c2VcclxuICAgICAgICAgKiBtZW1vcnkgbGVha3MuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngvaXNzdWVzLzE4NjdcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmNvbXB1dGVkQ29uZmlndXJhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBEb24ndCBjYXRjaCBhbmQgcmV0aHJvdyBleGNlcHRpb25zLiBUaGlzIGlzIHVzZWZ1bCBmb3IgaW5zcGVjdGluZyB0aGUgc3RhdGUgb2ZcclxuICAgICAgICAgKiB0aGUgc3RhY2sgd2hlbiBhbiBleGNlcHRpb24gb2NjdXJzIHdoaWxlIGRlYnVnZ2luZy5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmRpc2FibGVFcnJvckJvdW5kYXJpZXMgPSBmYWxzZTtcclxuICAgICAgICAvKlxyXG4gICAgICAgICAqIElmIHRydWUsIHdlIGFyZSBhbHJlYWR5IGhhbmRsaW5nIGFuIGV4Y2VwdGlvbiBpbiBhbiBhY3Rpb24uIEFueSBlcnJvcnMgaW4gcmVhY3Rpb25zIHNob3VsZCBiZSBzdXBwcmVzc2VkLCBhc1xyXG4gICAgICAgICAqIHRoZXkgYXJlIG5vdCB0aGUgY2F1c2UsIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L2lzc3Vlcy8xODM2XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5zdXBwcmVzc1JlYWN0aW9uRXJyb3JzID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTW9iWEdsb2JhbHM7XHJcbn0oKSk7XHJcbnZhciBtb2NrR2xvYmFsID0ge307XHJcbmZ1bmN0aW9uIGdldEdsb2JhbCgpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbDtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHJldHVybiBzZWxmO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vY2tHbG9iYWw7XHJcbn1cclxudmFyIGNhbk1lcmdlR2xvYmFsU3RhdGUgPSB0cnVlO1xyXG52YXIgaXNvbGF0ZUNhbGxlZCA9IGZhbHNlO1xyXG52YXIgZ2xvYmFsU3RhdGUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGdsb2JhbCA9IGdldEdsb2JhbCgpO1xyXG4gICAgaWYgKGdsb2JhbC5fX21vYnhJbnN0YW5jZUNvdW50ID4gMCAmJiAhZ2xvYmFsLl9fbW9ieEdsb2JhbHMpXHJcbiAgICAgICAgY2FuTWVyZ2VHbG9iYWxTdGF0ZSA9IGZhbHNlO1xyXG4gICAgaWYgKGdsb2JhbC5fX21vYnhHbG9iYWxzICYmIGdsb2JhbC5fX21vYnhHbG9iYWxzLnZlcnNpb24gIT09IG5ldyBNb2JYR2xvYmFscygpLnZlcnNpb24pXHJcbiAgICAgICAgY2FuTWVyZ2VHbG9iYWxTdGF0ZSA9IGZhbHNlO1xyXG4gICAgaWYgKCFjYW5NZXJnZUdsb2JhbFN0YXRlKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNvbGF0ZUNhbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgZmFpbChcIlRoZXJlIGFyZSBtdWx0aXBsZSwgZGlmZmVyZW50IHZlcnNpb25zIG9mIE1vYlggYWN0aXZlLiBNYWtlIHN1cmUgTW9iWCBpcyBsb2FkZWQgb25seSBvbmNlIG9yIHVzZSBgY29uZmlndXJlKHsgaXNvbGF0ZUdsb2JhbFN0YXRlOiB0cnVlIH0pYFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgICAgIHJldHVybiBuZXcgTW9iWEdsb2JhbHMoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGdsb2JhbC5fX21vYnhHbG9iYWxzKSB7XHJcbiAgICAgICAgZ2xvYmFsLl9fbW9ieEluc3RhbmNlQ291bnQgKz0gMTtcclxuICAgICAgICBpZiAoIWdsb2JhbC5fX21vYnhHbG9iYWxzLlVOQ0hBTkdFRClcclxuICAgICAgICAgICAgZ2xvYmFsLl9fbW9ieEdsb2JhbHMuVU5DSEFOR0VEID0ge307IC8vIG1ha2UgbWVyZ2UgYmFja3dhcmQgY29tcGF0aWJsZVxyXG4gICAgICAgIHJldHVybiBnbG9iYWwuX19tb2J4R2xvYmFscztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGdsb2JhbC5fX21vYnhJbnN0YW5jZUNvdW50ID0gMTtcclxuICAgICAgICByZXR1cm4gKGdsb2JhbC5fX21vYnhHbG9iYWxzID0gbmV3IE1vYlhHbG9iYWxzKCkpO1xyXG4gICAgfVxyXG59KSgpO1xyXG5mdW5jdGlvbiBpc29sYXRlR2xvYmFsU3RhdGUoKSB7XHJcbiAgICBpZiAoZ2xvYmFsU3RhdGUucGVuZGluZ1JlYWN0aW9ucy5sZW5ndGggfHxcclxuICAgICAgICBnbG9iYWxTdGF0ZS5pbkJhdGNoIHx8XHJcbiAgICAgICAgZ2xvYmFsU3RhdGUuaXNSdW5uaW5nUmVhY3Rpb25zKVxyXG4gICAgICAgIGZhaWwoXCJpc29sYXRlR2xvYmFsU3RhdGUgc2hvdWxkIGJlIGNhbGxlZCBiZWZvcmUgTW9iWCBpcyBydW5uaW5nIGFueSByZWFjdGlvbnNcIik7XHJcbiAgICBpc29sYXRlQ2FsbGVkID0gdHJ1ZTtcclxuICAgIGlmIChjYW5NZXJnZUdsb2JhbFN0YXRlKSB7XHJcbiAgICAgICAgaWYgKC0tZ2V0R2xvYmFsKCkuX19tb2J4SW5zdGFuY2VDb3VudCA9PT0gMClcclxuICAgICAgICAgICAgZ2V0R2xvYmFsKCkuX19tb2J4R2xvYmFscyA9IHVuZGVmaW5lZDtcclxuICAgICAgICBnbG9iYWxTdGF0ZSA9IG5ldyBNb2JYR2xvYmFscygpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldEdsb2JhbFN0YXRlKCkge1xyXG4gICAgcmV0dXJuIGdsb2JhbFN0YXRlO1xyXG59XHJcbi8qKlxyXG4gKiBGb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5OyB0aGlzIHdpbGwgYnJlYWsgdGhlIGludGVybmFsIHN0YXRlIG9mIGV4aXN0aW5nIG9ic2VydmFibGVzLFxyXG4gKiBidXQgY2FuIGJlIHVzZWQgdG8gZ2V0IGJhY2sgYXQgYSBzdGFibGUgc3RhdGUgYWZ0ZXIgdGhyb3dpbmcgZXJyb3JzXHJcbiAqL1xyXG5mdW5jdGlvbiByZXNldEdsb2JhbFN0YXRlKCkge1xyXG4gICAgdmFyIGRlZmF1bHRHbG9iYWxzID0gbmV3IE1vYlhHbG9iYWxzKCk7XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdEdsb2JhbHMpXHJcbiAgICAgICAgaWYgKHBlcnNpc3RlbnRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpXHJcbiAgICAgICAgICAgIGdsb2JhbFN0YXRlW2tleV0gPSBkZWZhdWx0R2xvYmFsc1trZXldO1xyXG4gICAgZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXMgPSAhZ2xvYmFsU3RhdGUuZW5mb3JjZUFjdGlvbnM7XHJcbn1cblxuZnVuY3Rpb24gaGFzT2JzZXJ2ZXJzKG9ic2VydmFibGUpIHtcclxuICAgIHJldHVybiBvYnNlcnZhYmxlLm9ic2VydmVycyAmJiBvYnNlcnZhYmxlLm9ic2VydmVycy5zaXplID4gMDtcclxufVxyXG5mdW5jdGlvbiBnZXRPYnNlcnZlcnMob2JzZXJ2YWJsZSkge1xyXG4gICAgcmV0dXJuIG9ic2VydmFibGUub2JzZXJ2ZXJzO1xyXG59XHJcbi8vIGZ1bmN0aW9uIGludmFyaWFudE9ic2VydmVycyhvYnNlcnZhYmxlOiBJT2JzZXJ2YWJsZSkge1xyXG4vLyAgICAgY29uc3QgbGlzdCA9IG9ic2VydmFibGUub2JzZXJ2ZXJzXHJcbi8vICAgICBjb25zdCBtYXAgPSBvYnNlcnZhYmxlLm9ic2VydmVyc0luZGV4ZXNcclxuLy8gICAgIGNvbnN0IGwgPSBsaXN0Lmxlbmd0aFxyXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuLy8gICAgICAgICBjb25zdCBpZCA9IGxpc3RbaV0uX19tYXBpZFxyXG4vLyAgICAgICAgIGlmIChpKSB7XHJcbi8vICAgICAgICAgICAgIGludmFyaWFudChtYXBbaWRdID09PSBpLCBcIklOVEVSTkFMIEVSUk9SIG1hcHMgZGVyaXZhdGlvbi5fX21hcGlkIHRvIGluZGV4IGluIGxpc3RcIikgLy8gZm9yIHBlcmZvcm1hbmNlXHJcbi8vICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgaW52YXJpYW50KCEoaWQgaW4gbWFwKSwgXCJJTlRFUk5BTCBFUlJPUiBvYnNlcnZlciBvbiBpbmRleCAwIHNob3VsZG4ndCBiZSBoZWxkIGluIG1hcC5cIikgLy8gZm9yIHBlcmZvcm1hbmNlXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgaW52YXJpYW50KFxyXG4vLyAgICAgICAgIGxpc3QubGVuZ3RoID09PSAwIHx8IE9iamVjdC5rZXlzKG1hcCkubGVuZ3RoID09PSBsaXN0Lmxlbmd0aCAtIDEsXHJcbi8vICAgICAgICAgXCJJTlRFUk5BTCBFUlJPUiB0aGVyZSBpcyBubyBqdW5rIGluIG1hcFwiXHJcbi8vICAgICApXHJcbi8vIH1cclxuZnVuY3Rpb24gYWRkT2JzZXJ2ZXIob2JzZXJ2YWJsZSwgbm9kZSkge1xyXG4gICAgLy8gaW52YXJpYW50KG5vZGUuZGVwZW5kZW5jaWVzU3RhdGUgIT09IC0xLCBcIklOVEVSTkFMIEVSUk9SLCBjYW4gYWRkIG9ubHkgZGVwZW5kZW5jaWVzU3RhdGUgIT09IC0xXCIpO1xyXG4gICAgLy8gaW52YXJpYW50KG9ic2VydmFibGUuX29ic2VydmVycy5pbmRleE9mKG5vZGUpID09PSAtMSwgXCJJTlRFUk5BTCBFUlJPUiBhZGQgYWxyZWFkeSBhZGRlZCBub2RlXCIpO1xyXG4gICAgLy8gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGUpO1xyXG4gICAgb2JzZXJ2YWJsZS5vYnNlcnZlcnMuYWRkKG5vZGUpO1xyXG4gICAgaWYgKG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA+IG5vZGUuZGVwZW5kZW5jaWVzU3RhdGUpXHJcbiAgICAgICAgb2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlID0gbm9kZS5kZXBlbmRlbmNpZXNTdGF0ZTtcclxuICAgIC8vIGludmFyaWFudE9ic2VydmVycyhvYnNlcnZhYmxlKTtcclxuICAgIC8vIGludmFyaWFudChvYnNlcnZhYmxlLl9vYnNlcnZlcnMuaW5kZXhPZihub2RlKSAhPT0gLTEsIFwiSU5URVJOQUwgRVJST1IgZGlkbid0IGFkZCBub2RlXCIpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZU9ic2VydmVyKG9ic2VydmFibGUsIG5vZGUpIHtcclxuICAgIC8vIGludmFyaWFudChnbG9iYWxTdGF0ZS5pbkJhdGNoID4gMCwgXCJJTlRFUk5BTCBFUlJPUiwgcmVtb3ZlIHNob3VsZCBiZSBjYWxsZWQgb25seSBpbnNpZGUgYmF0Y2hcIik7XHJcbiAgICAvLyBpbnZhcmlhbnQob2JzZXJ2YWJsZS5fb2JzZXJ2ZXJzLmluZGV4T2Yobm9kZSkgIT09IC0xLCBcIklOVEVSTkFMIEVSUk9SIHJlbW92ZSBhbHJlYWR5IHJlbW92ZWQgbm9kZVwiKTtcclxuICAgIC8vIGludmFyaWFudE9ic2VydmVycyhvYnNlcnZhYmxlKTtcclxuICAgIG9ic2VydmFibGUub2JzZXJ2ZXJzLmRlbGV0ZShub2RlKTtcclxuICAgIGlmIChvYnNlcnZhYmxlLm9ic2VydmVycy5zaXplID09PSAwKSB7XHJcbiAgICAgICAgLy8gZGVsZXRpbmcgbGFzdCBvYnNlcnZlclxyXG4gICAgICAgIHF1ZXVlRm9yVW5vYnNlcnZhdGlvbihvYnNlcnZhYmxlKTtcclxuICAgIH1cclxuICAgIC8vIGludmFyaWFudE9ic2VydmVycyhvYnNlcnZhYmxlKTtcclxuICAgIC8vIGludmFyaWFudChvYnNlcnZhYmxlLl9vYnNlcnZlcnMuaW5kZXhPZihub2RlKSA9PT0gLTEsIFwiSU5URVJOQUwgRVJST1IgcmVtb3ZlIGFscmVhZHkgcmVtb3ZlZCBub2RlMlwiKTtcclxufVxyXG5mdW5jdGlvbiBxdWV1ZUZvclVub2JzZXJ2YXRpb24ob2JzZXJ2YWJsZSkge1xyXG4gICAgaWYgKG9ic2VydmFibGUuaXNQZW5kaW5nVW5vYnNlcnZhdGlvbiA9PT0gZmFsc2UpIHtcclxuICAgICAgICAvLyBpbnZhcmlhbnQob2JzZXJ2YWJsZS5fb2JzZXJ2ZXJzLmxlbmd0aCA9PT0gMCwgXCJJTlRFUk5BTCBFUlJPUiwgc2hvdWxkIG9ubHkgcXVldWUgZm9yIHVub2JzZXJ2YXRpb24gdW5vYnNlcnZlZCBvYnNlcnZhYmxlc1wiKTtcclxuICAgICAgICBvYnNlcnZhYmxlLmlzUGVuZGluZ1Vub2JzZXJ2YXRpb24gPSB0cnVlO1xyXG4gICAgICAgIGdsb2JhbFN0YXRlLnBlbmRpbmdVbm9ic2VydmF0aW9ucy5wdXNoKG9ic2VydmFibGUpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBCYXRjaCBzdGFydHMgYSB0cmFuc2FjdGlvbiwgYXQgbGVhc3QgZm9yIHB1cnBvc2VzIG9mIG1lbW9pemluZyBDb21wdXRlZFZhbHVlcyB3aGVuIG5vdGhpbmcgZWxzZSBkb2VzLlxyXG4gKiBEdXJpbmcgYSBiYXRjaCBgb25CZWNvbWVVbm9ic2VydmVkYCB3aWxsIGJlIGNhbGxlZCBhdCBtb3N0IG9uY2UgcGVyIG9ic2VydmFibGUuXHJcbiAqIEF2b2lkcyB1bm5lY2Vzc2FyeSByZWNhbGN1bGF0aW9ucy5cclxuICovXHJcbmZ1bmN0aW9uIHN0YXJ0QmF0Y2goKSB7XHJcbiAgICBnbG9iYWxTdGF0ZS5pbkJhdGNoKys7XHJcbn1cclxuZnVuY3Rpb24gZW5kQmF0Y2goKSB7XHJcbiAgICBpZiAoLS1nbG9iYWxTdGF0ZS5pbkJhdGNoID09PSAwKSB7XHJcbiAgICAgICAgcnVuUmVhY3Rpb25zKCk7XHJcbiAgICAgICAgLy8gdGhlIGJhdGNoIGlzIGFjdHVhbGx5IGFib3V0IHRvIGZpbmlzaCwgYWxsIHVub2JzZXJ2aW5nIHNob3VsZCBoYXBwZW4gaGVyZS5cclxuICAgICAgICB2YXIgbGlzdCA9IGdsb2JhbFN0YXRlLnBlbmRpbmdVbm9ic2VydmF0aW9ucztcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIG9ic2VydmFibGUgPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICBvYnNlcnZhYmxlLmlzUGVuZGluZ1Vub2JzZXJ2YXRpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKG9ic2VydmFibGUub2JzZXJ2ZXJzLnNpemUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYnNlcnZhYmxlLmlzQmVpbmdPYnNlcnZlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgb2JzZXJ2YWJsZSBoYWQgcmVhY3RpdmUgb2JzZXJ2ZXJzLCB0cmlnZ2VyIHRoZSBob29rc1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmFibGUuaXNCZWluZ09ic2VydmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YWJsZS5vbkJlY29tZVVub2JzZXJ2ZWQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvYnNlcnZhYmxlIGluc3RhbmNlb2YgQ29tcHV0ZWRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbXB1dGVkIHZhbHVlcyBhcmUgYXV0b21hdGljYWxseSB0ZWFyZWQgZG93biB3aGVuIHRoZSBsYXN0IG9ic2VydmVyIGxlYXZlc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgcHJvY2VzcyBoYXBwZW5zIHJlY3Vyc2l2ZWx5LCB0aGlzIGNvbXB1dGVkIG1pZ2h0IGJlIHRoZSBsYXN0IG9ic2VydmFiZSBvZiBhbm90aGVyLCBldGMuLlxyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmFibGUuc3VzcGVuZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdsb2JhbFN0YXRlLnBlbmRpbmdVbm9ic2VydmF0aW9ucyA9IFtdO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHJlcG9ydE9ic2VydmVkKG9ic2VydmFibGUpIHtcclxuICAgIGNoZWNrSWZTdGF0ZVJlYWRzQXJlQWxsb3dlZChvYnNlcnZhYmxlKTtcclxuICAgIHZhciBkZXJpdmF0aW9uID0gZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uO1xyXG4gICAgaWYgKGRlcml2YXRpb24gIT09IG51bGwpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTaW1wbGUgb3B0aW1pemF0aW9uLCBnaXZlIGVhY2ggZGVyaXZhdGlvbiBydW4gYW4gdW5pcXVlIGlkIChydW5JZClcclxuICAgICAgICAgKiBDaGVjayBpZiBsYXN0IHRpbWUgdGhpcyBvYnNlcnZhYmxlIHdhcyBhY2Nlc3NlZCB0aGUgc2FtZSBydW5JZCBpcyB1c2VkXHJcbiAgICAgICAgICogaWYgdGhpcyBpcyB0aGUgY2FzZSwgdGhlIHJlbGF0aW9uIGlzIGFscmVhZHkga25vd25cclxuICAgICAgICAgKi9cclxuICAgICAgICBpZiAoZGVyaXZhdGlvbi5ydW5JZCAhPT0gb2JzZXJ2YWJsZS5sYXN0QWNjZXNzZWRCeSkge1xyXG4gICAgICAgICAgICBvYnNlcnZhYmxlLmxhc3RBY2Nlc3NlZEJ5ID0gZGVyaXZhdGlvbi5ydW5JZDtcclxuICAgICAgICAgICAgLy8gVHJpZWQgc3RvcmluZyBuZXdPYnNlcnZpbmcsIG9yIG9ic2VydmluZywgb3IgYm90aCBhcyBTZXQsIGJ1dCBwZXJmb3JtYW5jZSBkaWRuJ3QgY29tZSBjbG9zZS4uLlxyXG4gICAgICAgICAgICBkZXJpdmF0aW9uLm5ld09ic2VydmluZ1tkZXJpdmF0aW9uLnVuYm91bmREZXBzQ291bnQrK10gPSBvYnNlcnZhYmxlO1xyXG4gICAgICAgICAgICBpZiAoIW9ic2VydmFibGUuaXNCZWluZ09ic2VydmVkKSB7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlLmlzQmVpbmdPYnNlcnZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlLm9uQmVjb21lT2JzZXJ2ZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG9ic2VydmFibGUub2JzZXJ2ZXJzLnNpemUgPT09IDAgJiYgZ2xvYmFsU3RhdGUuaW5CYXRjaCA+IDApIHtcclxuICAgICAgICBxdWV1ZUZvclVub2JzZXJ2YXRpb24ob2JzZXJ2YWJsZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuLy8gZnVuY3Rpb24gaW52YXJpYW50TE9TKG9ic2VydmFibGU6IElPYnNlcnZhYmxlLCBtc2c6IHN0cmluZykge1xyXG4vLyAgICAgLy8gaXQncyBleHBlbnNpdmUgc28gYmV0dGVyIG5vdCBydW4gaXQgaW4gcHJvZHVjaXRvbi4gYnV0IHRlbXBvcmFyaWx5IGhlbHBmdWwgZm9yIHRlc3RpbmdcclxuLy8gICAgIGNvbnN0IG1pbiA9IGdldE9ic2VydmVycyhvYnNlcnZhYmxlKS5yZWR1Y2UoKGEsIGIpID0+IE1hdGgubWluKGEsIGIuZGVwZW5kZW5jaWVzU3RhdGUpLCAyKVxyXG4vLyAgICAgaWYgKG1pbiA+PSBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGUpIHJldHVybiAvLyA8LSB0aGUgb25seSBhc3N1bXB0aW9uIGFib3V0IGBsb3dlc3RPYnNlcnZlclN0YXRlYFxyXG4vLyAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4vLyAgICAgICAgIFwibG93ZXN0T2JzZXJ2ZXJTdGF0ZSBpcyB3cm9uZyBmb3IgXCIgK1xyXG4vLyAgICAgICAgICAgICBtc2cgK1xyXG4vLyAgICAgICAgICAgICBcIiBiZWNhdXNlIFwiICtcclxuLy8gICAgICAgICAgICAgbWluICtcclxuLy8gICAgICAgICAgICAgXCIgPCBcIiArXHJcbi8vICAgICAgICAgICAgIG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZVxyXG4vLyAgICAgKVxyXG4vLyB9XHJcbi8qKlxyXG4gKiBOT1RFOiBjdXJyZW50IHByb3BhZ2F0aW9uIG1lY2hhbmlzbSB3aWxsIGluIGNhc2Ugb2Ygc2VsZiByZXJ1bmluZyBhdXRvcnVucyBiZWhhdmUgdW5leHBlY3RlZGx5XHJcbiAqIEl0IHdpbGwgcHJvcGFnYXRlIGNoYW5nZXMgdG8gb2JzZXJ2ZXJzIGZyb20gcHJldmlvdXMgcnVuXHJcbiAqIEl0J3MgaGFyZCBvciBtYXliZSBpbXBvc3NpYmxlICh3aXRoIHJlYXNvbmFibGUgcGVyZikgdG8gZ2V0IGl0IHJpZ2h0IHdpdGggY3VycmVudCBhcHByb2FjaFxyXG4gKiBIb3BlZnVsbHkgc2VsZiByZXJ1bmluZyBhdXRvcnVucyBhcmVuJ3QgYSBmZWF0dXJlIHBlb3BsZSBzaG91bGQgZGVwZW5kIG9uXHJcbiAqIEFsc28gbW9zdCBiYXNpYyB1c2UgY2FzZXMgc2hvdWxkIGJlIG9rXHJcbiAqL1xyXG4vLyBDYWxsZWQgYnkgQXRvbSB3aGVuIGl0cyB2YWx1ZSBjaGFuZ2VzXHJcbmZ1bmN0aW9uIHByb3BhZ2F0ZUNoYW5nZWQob2JzZXJ2YWJsZSkge1xyXG4gICAgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwiY2hhbmdlZCBzdGFydFwiKTtcclxuICAgIGlmIChvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGUgPT09IElEZXJpdmF0aW9uU3RhdGUuU1RBTEUpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgb2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5TVEFMRTtcclxuICAgIC8vIElkZWFsbHkgd2UgdXNlIGZvci4ub2YgaGVyZSwgYnV0IHRoZSBkb3duY29tcGlsZWQgdmVyc2lvbiBpcyByZWFsbHkgc2xvdy4uLlxyXG4gICAgb2JzZXJ2YWJsZS5vYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgIGlmIChkLmRlcGVuZGVuY2llc1N0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEUpIHtcclxuICAgICAgICAgICAgaWYgKGQuaXNUcmFjaW5nICE9PSBUcmFjZU1vZGUuTk9ORSkge1xyXG4gICAgICAgICAgICAgICAgbG9nVHJhY2VJbmZvKGQsIG9ic2VydmFibGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGQub25CZWNvbWVTdGFsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkLmRlcGVuZGVuY2llc1N0YXRlID0gSURlcml2YXRpb25TdGF0ZS5TVEFMRTtcclxuICAgIH0pO1xyXG4gICAgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwiY2hhbmdlZCBlbmRcIik7XHJcbn1cclxuLy8gQ2FsbGVkIGJ5IENvbXB1dGVkVmFsdWUgd2hlbiBpdCByZWNhbGN1bGF0ZSBhbmQgaXRzIHZhbHVlIGNoYW5nZWRcclxuZnVuY3Rpb24gcHJvcGFnYXRlQ2hhbmdlQ29uZmlybWVkKG9ic2VydmFibGUpIHtcclxuICAgIC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcImNvbmZpcm1lZCBzdGFydFwiKTtcclxuICAgIGlmIChvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGUgPT09IElEZXJpdmF0aW9uU3RhdGUuU1RBTEUpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgb2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5TVEFMRTtcclxuICAgIG9ic2VydmFibGUub2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICBpZiAoZC5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5QT1NTSUJMWV9TVEFMRSlcclxuICAgICAgICAgICAgZC5kZXBlbmRlbmNpZXNTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuU1RBTEU7XHJcbiAgICAgICAgZWxzZSBpZiAoZC5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFIC8vIHRoaXMgaGFwcGVucyBkdXJpbmcgY29tcHV0aW5nIG9mIGBkYCwganVzdCBrZWVwIGxvd2VzdE9ic2VydmVyU3RhdGUgdXAgdG8gZGF0ZS5cclxuICAgICAgICApXHJcbiAgICAgICAgICAgIG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURTtcclxuICAgIH0pO1xyXG4gICAgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwiY29uZmlybWVkIGVuZFwiKTtcclxufVxyXG4vLyBVc2VkIGJ5IGNvbXB1dGVkIHdoZW4gaXRzIGRlcGVuZGVuY3kgY2hhbmdlZCwgYnV0IHdlIGRvbid0IHdhbid0IHRvIGltbWVkaWF0ZWx5IHJlY29tcHV0ZS5cclxuZnVuY3Rpb24gcHJvcGFnYXRlTWF5YmVDaGFuZ2VkKG9ic2VydmFibGUpIHtcclxuICAgIC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcIm1heWJlIHN0YXJ0XCIpO1xyXG4gICAgaWYgKG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZSAhPT0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuUE9TU0lCTFlfU1RBTEU7XHJcbiAgICBvYnNlcnZhYmxlLm9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgaWYgKGQuZGVwZW5kZW5jaWVzU3RhdGUgPT09IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURSkge1xyXG4gICAgICAgICAgICBkLmRlcGVuZGVuY2llc1N0YXRlID0gSURlcml2YXRpb25TdGF0ZS5QT1NTSUJMWV9TVEFMRTtcclxuICAgICAgICAgICAgaWYgKGQuaXNUcmFjaW5nICE9PSBUcmFjZU1vZGUuTk9ORSkge1xyXG4gICAgICAgICAgICAgICAgbG9nVHJhY2VJbmZvKGQsIG9ic2VydmFibGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGQub25CZWNvbWVTdGFsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwibWF5YmUgZW5kXCIpO1xyXG59XHJcbmZ1bmN0aW9uIGxvZ1RyYWNlSW5mbyhkZXJpdmF0aW9uLCBvYnNlcnZhYmxlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlttb2J4LnRyYWNlXSAnXCIgKyBkZXJpdmF0aW9uLm5hbWUgKyBcIicgaXMgaW52YWxpZGF0ZWQgZHVlIHRvIGEgY2hhbmdlIGluOiAnXCIgKyBvYnNlcnZhYmxlLm5hbWUgKyBcIidcIik7XHJcbiAgICBpZiAoZGVyaXZhdGlvbi5pc1RyYWNpbmcgPT09IFRyYWNlTW9kZS5CUkVBSykge1xyXG4gICAgICAgIHZhciBsaW5lcyA9IFtdO1xyXG4gICAgICAgIHByaW50RGVwVHJlZShnZXREZXBlbmRlbmN5VHJlZShkZXJpdmF0aW9uKSwgbGluZXMsIDEpO1xyXG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gICAgICAgIG5ldyBGdW5jdGlvbihcImRlYnVnZ2VyO1xcbi8qXFxuVHJhY2luZyAnXCIgKyBkZXJpdmF0aW9uLm5hbWUgKyBcIidcXG5cXG5Zb3UgYXJlIGVudGVyaW5nIHRoaXMgYnJlYWsgcG9pbnQgYmVjYXVzZSBkZXJpdmF0aW9uICdcIiArIGRlcml2YXRpb24ubmFtZSArIFwiJyBpcyBiZWluZyB0cmFjZWQgYW5kICdcIiArIG9ic2VydmFibGUubmFtZSArIFwiJyBpcyBub3cgZm9yY2luZyBpdCB0byB1cGRhdGUuXFxuSnVzdCBmb2xsb3cgdGhlIHN0YWNrdHJhY2UgeW91IHNob3VsZCBub3cgc2VlIGluIHRoZSBkZXZ0b29scyB0byBzZWUgcHJlY2lzZWx5IHdoYXQgcGllY2Ugb2YgeW91ciBjb2RlIGlzIGNhdXNpbmcgdGhpcyB1cGRhdGVcXG5UaGUgc3RhY2tmcmFtZSB5b3UgYXJlIGxvb2tpbmcgZm9yIGlzIGF0IGxlYXN0IH42LTggc3RhY2stZnJhbWVzIHVwLlxcblxcblwiICsgKGRlcml2YXRpb24gaW5zdGFuY2VvZiBDb21wdXRlZFZhbHVlID8gZGVyaXZhdGlvbi5kZXJpdmF0aW9uLnRvU3RyaW5nKCkucmVwbGFjZSgvWypdXFwvL2csIFwiL1wiKSA6IFwiXCIpICsgXCJcXG5cXG5UaGUgZGVwZW5kZW5jaWVzIGZvciB0aGlzIGRlcml2YXRpb24gYXJlOlxcblxcblwiICsgbGluZXMuam9pbihcIlxcblwiKSArIFwiXFxuKi9cXG4gICAgXCIpKCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcHJpbnREZXBUcmVlKHRyZWUsIGxpbmVzLCBkZXB0aCkge1xyXG4gICAgaWYgKGxpbmVzLmxlbmd0aCA+PSAxMDAwKSB7XHJcbiAgICAgICAgbGluZXMucHVzaChcIihhbmQgbWFueSBtb3JlKVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsaW5lcy5wdXNoKFwiXCIgKyBuZXcgQXJyYXkoZGVwdGgpLmpvaW4oXCJcXHRcIikgKyB0cmVlLm5hbWUpOyAvLyBNV0U6IG5vdCB0aGUgZmFzdGVzdCwgYnV0IHRoZSBlYXNpZXN0IHdheSA6KVxyXG4gICAgaWYgKHRyZWUuZGVwZW5kZW5jaWVzKVxyXG4gICAgICAgIHRyZWUuZGVwZW5kZW5jaWVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBwcmludERlcFRyZWUoY2hpbGQsIGxpbmVzLCBkZXB0aCArIDEpOyB9KTtcclxufVxuXG52YXIgUmVhY3Rpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZWFjdGlvbihuYW1lLCBvbkludmFsaWRhdGUsIGVycm9ySGFuZGxlciwgcmVxdWlyZXNPYnNlcnZhYmxlKSB7XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IHZvaWQgMCkgeyBuYW1lID0gXCJSZWFjdGlvbkBcIiArIGdldE5leHRJZCgpOyB9XHJcbiAgICAgICAgaWYgKHJlcXVpcmVzT2JzZXJ2YWJsZSA9PT0gdm9pZCAwKSB7IHJlcXVpcmVzT2JzZXJ2YWJsZSA9IGZhbHNlOyB9XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLm9uSW52YWxpZGF0ZSA9IG9uSW52YWxpZGF0ZTtcclxuICAgICAgICB0aGlzLmVycm9ySGFuZGxlciA9IGVycm9ySGFuZGxlcjtcclxuICAgICAgICB0aGlzLnJlcXVpcmVzT2JzZXJ2YWJsZSA9IHJlcXVpcmVzT2JzZXJ2YWJsZTtcclxuICAgICAgICB0aGlzLm9ic2VydmluZyA9IFtdOyAvLyBub2RlcyB3ZSBhcmUgbG9va2luZyBhdC4gT3VyIHZhbHVlIGRlcGVuZHMgb24gdGhlc2Ugbm9kZXNcclxuICAgICAgICB0aGlzLm5ld09ic2VydmluZyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZGVwZW5kZW5jaWVzU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLk5PVF9UUkFDS0lORztcclxuICAgICAgICB0aGlzLmRpZmZWYWx1ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5ydW5JZCA9IDA7XHJcbiAgICAgICAgdGhpcy51bmJvdW5kRGVwc0NvdW50ID0gMDtcclxuICAgICAgICB0aGlzLl9fbWFwaWQgPSBcIiNcIiArIGdldE5leHRJZCgpO1xyXG4gICAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2lzU2NoZWR1bGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5faXNUcmFja1BlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9pc1J1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzVHJhY2luZyA9IFRyYWNlTW9kZS5OT05FO1xyXG4gICAgfVxyXG4gICAgUmVhY3Rpb24ucHJvdG90eXBlLm9uQmVjb21lU3RhbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgpO1xyXG4gICAgfTtcclxuICAgIFJlYWN0aW9uLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzU2NoZWR1bGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzU2NoZWR1bGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgZ2xvYmFsU3RhdGUucGVuZGluZ1JlYWN0aW9ucy5wdXNoKHRoaXMpO1xyXG4gICAgICAgICAgICBydW5SZWFjdGlvbnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVhY3Rpb24ucHJvdG90eXBlLmlzU2NoZWR1bGVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc1NjaGVkdWxlZDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIGludGVybmFsLCB1c2Ugc2NoZWR1bGUoKSBpZiB5b3UgaW50ZW5kIHRvIGtpY2sgb2ZmIGEgcmVhY3Rpb25cclxuICAgICAqL1xyXG4gICAgUmVhY3Rpb24ucHJvdG90eXBlLnJ1blJlYWN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0QmF0Y2goKTtcclxuICAgICAgICAgICAgdGhpcy5faXNTY2hlZHVsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHNob3VsZENvbXB1dGUodGhpcykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzVHJhY2tQZW5kaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkludmFsaWRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNUcmFja1BlbmRpbmcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTcHlFbmFibGVkKCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uSW52YWxpZGF0ZSBkaWRuJ3QgdHJpZ2dlciB0cmFjayByaWdodCBhd2F5Li5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3B5UmVwb3J0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic2NoZWR1bGVkLXJlYWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcG9ydEV4Y2VwdGlvbkluRGVyaXZhdGlvbihlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbmRCYXRjaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUudHJhY2sgPSBmdW5jdGlvbiAoZm4pIHtcclxuICAgICAgICBpZiAodGhpcy5pc0Rpc3Bvc2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKFwiUmVhY3Rpb24gYWxyZWFkeSBkaXNwb3NlZFwiKSAvLyBOb3RlOiBOb3QgYSB3YXJuaW5nIC8gZXJyb3IgaW4gbW9ieCA0IGVpdGhlclxyXG4gICAgICAgIH1cclxuICAgICAgICBzdGFydEJhdGNoKCk7XHJcbiAgICAgICAgdmFyIG5vdGlmeSA9IGlzU3B5RW5hYmxlZCgpO1xyXG4gICAgICAgIHZhciBzdGFydFRpbWU7XHJcbiAgICAgICAgaWYgKG5vdGlmeSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJyZWFjdGlvblwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9pc1J1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB0cmFja0Rlcml2ZWRGdW5jdGlvbih0aGlzLCBmbiwgdW5kZWZpbmVkKTtcclxuICAgICAgICB0aGlzLl9pc1J1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9pc1RyYWNrUGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGlzcG9zZWQpIHtcclxuICAgICAgICAgICAgLy8gZGlzcG9zZWQgZHVyaW5nIGxhc3QgcnVuLiBDbGVhbiB1cCBldmVyeXRoaW5nIHRoYXQgd2FzIGJvdW5kIGFmdGVyIHRoZSBkaXNwb3NlIGNhbGwuXHJcbiAgICAgICAgICAgIGNsZWFyT2JzZXJ2aW5nKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNDYXVnaHRFeGNlcHRpb24ocmVzdWx0KSlcclxuICAgICAgICAgICAgdGhpcy5yZXBvcnRFeGNlcHRpb25JbkRlcml2YXRpb24ocmVzdWx0LmNhdXNlKTtcclxuICAgICAgICBpZiAobm90aWZ5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgICAgICBzcHlSZXBvcnRFbmQoe1xyXG4gICAgICAgICAgICAgICAgdGltZTogRGF0ZS5ub3coKSAtIHN0YXJ0VGltZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZW5kQmF0Y2goKTtcclxuICAgIH07XHJcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUucmVwb3J0RXhjZXB0aW9uSW5EZXJpdmF0aW9uID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5lcnJvckhhbmRsZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIoZXJyb3IsIHRoaXMpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnbG9iYWxTdGF0ZS5kaXNhYmxlRXJyb3JCb3VuZGFyaWVzKVxyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB2YXIgbWVzc2FnZSA9IFwiW21vYnhdIEVuY291bnRlcmVkIGFuIHVuY2F1Z2h0IGV4Y2VwdGlvbiB0aGF0IHdhcyB0aHJvd24gYnkgYSByZWFjdGlvbiBvciBvYnNlcnZlciBjb21wb25lbnQsIGluOiAnXCIgKyB0aGlzICsgXCInXCI7XHJcbiAgICAgICAgaWYgKGdsb2JhbFN0YXRlLnN1cHByZXNzUmVhY3Rpb25FcnJvcnMpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW21vYnhdIChlcnJvciBpbiByZWFjdGlvbiAnXCIgKyB0aGlzLm5hbWUgKyBcIicgc3VwcHJlc3NlZCwgZml4IGVycm9yIG9mIGNhdXNpbmcgYWN0aW9uIGJlbG93KVwiKTsgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UsIGVycm9yKTtcclxuICAgICAgICAgICAgLyoqIElmIGRlYnVnZ2luZyBicm91Z2h0IHlvdSBoZXJlLCBwbGVhc2UsIHJlYWQgdGhlIGFib3ZlIG1lc3NhZ2UgOi0pLiBUbnghICovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1NweUVuYWJsZWQoKSkge1xyXG4gICAgICAgICAgICBzcHlSZXBvcnQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiICsgZXJyb3JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdsb2JhbFN0YXRlLmdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmKGVycm9yLCBfdGhpcyk7IH0pO1xyXG4gICAgfTtcclxuICAgIFJlYWN0aW9uLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5faXNSdW5uaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBkaXNwb3NlZCB3aGlsZSBydW5uaW5nLCBjbGVhbiB1cCBsYXRlci4gTWF5YmUgbm90IG9wdGltYWwsIGJ1dCByYXJlIGNhc2VcclxuICAgICAgICAgICAgICAgIHN0YXJ0QmF0Y2goKTtcclxuICAgICAgICAgICAgICAgIGNsZWFyT2JzZXJ2aW5nKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgZW5kQmF0Y2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUuZ2V0RGlzcG9zZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHIgPSB0aGlzLmRpc3Bvc2UuYmluZCh0aGlzKTtcclxuICAgICAgICByWyRtb2J4XSA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9O1xyXG4gICAgUmVhY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcIlJlYWN0aW9uW1wiICsgdGhpcy5uYW1lICsgXCJdXCI7XHJcbiAgICB9O1xyXG4gICAgUmVhY3Rpb24ucHJvdG90eXBlLnRyYWNlID0gZnVuY3Rpb24gKGVudGVyQnJlYWtQb2ludCkge1xyXG4gICAgICAgIGlmIChlbnRlckJyZWFrUG9pbnQgPT09IHZvaWQgMCkgeyBlbnRlckJyZWFrUG9pbnQgPSBmYWxzZTsgfVxyXG4gICAgICAgIHRyYWNlKHRoaXMsIGVudGVyQnJlYWtQb2ludCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlYWN0aW9uO1xyXG59KCkpO1xyXG5mdW5jdGlvbiBvblJlYWN0aW9uRXJyb3IoaGFuZGxlcikge1xyXG4gICAgZ2xvYmFsU3RhdGUuZ2xvYmFsUmVhY3Rpb25FcnJvckhhbmRsZXJzLnB1c2goaGFuZGxlcik7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpZHggPSBnbG9iYWxTdGF0ZS5nbG9iYWxSZWFjdGlvbkVycm9ySGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKTtcclxuICAgICAgICBpZiAoaWR4ID49IDApXHJcbiAgICAgICAgICAgIGdsb2JhbFN0YXRlLmdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcclxuICAgIH07XHJcbn1cclxuLyoqXHJcbiAqIE1hZ2ljIG51bWJlciBhbGVydCFcclxuICogRGVmaW5lcyB3aXRoaW4gaG93IG1hbnkgdGltZXMgYSByZWFjdGlvbiBpcyBhbGxvd2VkIHRvIHJlLXRyaWdnZXIgaXRzZWxmXHJcbiAqIHVudGlsIGl0IGlzIGFzc3VtZWQgdGhhdCB0aGlzIGlzIGdvbm5hIGJlIGEgbmV2ZXIgZW5kaW5nIGxvb3AuLi5cclxuICovXHJcbnZhciBNQVhfUkVBQ1RJT05fSVRFUkFUSU9OUyA9IDEwMDtcclxudmFyIHJlYWN0aW9uU2NoZWR1bGVyID0gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYoKTsgfTtcclxuZnVuY3Rpb24gcnVuUmVhY3Rpb25zKCkge1xyXG4gICAgLy8gVHJhbXBvbGluaW5nLCBpZiBydW5SZWFjdGlvbnMgYXJlIGFscmVhZHkgcnVubmluZywgbmV3IHJlYWN0aW9ucyB3aWxsIGJlIHBpY2tlZCB1cFxyXG4gICAgaWYgKGdsb2JhbFN0YXRlLmluQmF0Y2ggPiAwIHx8IGdsb2JhbFN0YXRlLmlzUnVubmluZ1JlYWN0aW9ucylcclxuICAgICAgICByZXR1cm47XHJcbiAgICByZWFjdGlvblNjaGVkdWxlcihydW5SZWFjdGlvbnNIZWxwZXIpO1xyXG59XHJcbmZ1bmN0aW9uIHJ1blJlYWN0aW9uc0hlbHBlcigpIHtcclxuICAgIGdsb2JhbFN0YXRlLmlzUnVubmluZ1JlYWN0aW9ucyA9IHRydWU7XHJcbiAgICB2YXIgYWxsUmVhY3Rpb25zID0gZ2xvYmFsU3RhdGUucGVuZGluZ1JlYWN0aW9ucztcclxuICAgIHZhciBpdGVyYXRpb25zID0gMDtcclxuICAgIC8vIFdoaWxlIHJ1bm5pbmcgcmVhY3Rpb25zLCBuZXcgcmVhY3Rpb25zIG1pZ2h0IGJlIHRyaWdnZXJlZC5cclxuICAgIC8vIEhlbmNlIHdlIHdvcmsgd2l0aCB0d28gdmFyaWFibGVzIGFuZCBjaGVjayB3aGV0aGVyXHJcbiAgICAvLyB3ZSBjb252ZXJnZSB0byBubyByZW1haW5pbmcgcmVhY3Rpb25zIGFmdGVyIGEgd2hpbGUuXHJcbiAgICB3aGlsZSAoYWxsUmVhY3Rpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBpZiAoKytpdGVyYXRpb25zID09PSBNQVhfUkVBQ1RJT05fSVRFUkFUSU9OUykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVhY3Rpb24gZG9lc24ndCBjb252ZXJnZSB0byBhIHN0YWJsZSBzdGF0ZSBhZnRlciBcIiArIE1BWF9SRUFDVElPTl9JVEVSQVRJT05TICsgXCIgaXRlcmF0aW9ucy5cIiArXHJcbiAgICAgICAgICAgICAgICAoXCIgUHJvYmFibHkgdGhlcmUgaXMgYSBjeWNsZSBpbiB0aGUgcmVhY3RpdmUgZnVuY3Rpb246IFwiICsgYWxsUmVhY3Rpb25zWzBdKSk7XHJcbiAgICAgICAgICAgIGFsbFJlYWN0aW9ucy5zcGxpY2UoMCk7IC8vIGNsZWFyIHJlYWN0aW9uc1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVtYWluaW5nUmVhY3Rpb25zID0gYWxsUmVhY3Rpb25zLnNwbGljZSgwKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHJlbWFpbmluZ1JlYWN0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspXHJcbiAgICAgICAgICAgIHJlbWFpbmluZ1JlYWN0aW9uc1tpXS5ydW5SZWFjdGlvbigpO1xyXG4gICAgfVxyXG4gICAgZ2xvYmFsU3RhdGUuaXNSdW5uaW5nUmVhY3Rpb25zID0gZmFsc2U7XHJcbn1cclxudmFyIGlzUmVhY3Rpb24gPSBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiUmVhY3Rpb25cIiwgUmVhY3Rpb24pO1xyXG5mdW5jdGlvbiBzZXRSZWFjdGlvblNjaGVkdWxlcihmbikge1xyXG4gICAgdmFyIGJhc2VTY2hlZHVsZXIgPSByZWFjdGlvblNjaGVkdWxlcjtcclxuICAgIHJlYWN0aW9uU2NoZWR1bGVyID0gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGZuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJhc2VTY2hlZHVsZXIoZik7IH0pOyB9O1xyXG59XG5cbmZ1bmN0aW9uIGlzU3B5RW5hYmxlZCgpIHtcclxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgISFnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMubGVuZ3RoO1xyXG59XHJcbmZ1bmN0aW9uIHNweVJlcG9ydChldmVudCkge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICByZXR1cm47IC8vIGRlYWQgY29kZSBlbGltaW5hdGlvbiBjYW4gZG8gdGhlIHJlc3RcclxuICAgIGlmICghZ2xvYmFsU3RhdGUuc3B5TGlzdGVuZXJzLmxlbmd0aClcclxuICAgICAgICByZXR1cm47XHJcbiAgICB2YXIgbGlzdGVuZXJzID0gZ2xvYmFsU3RhdGUuc3B5TGlzdGVuZXJzO1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbDsgaSsrKVxyXG4gICAgICAgIGxpc3RlbmVyc1tpXShldmVudCk7XHJcbn1cclxuZnVuY3Rpb24gc3B5UmVwb3J0U3RhcnQoZXZlbnQpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgdmFyIGNoYW5nZSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBldmVudCksIHsgc3B5UmVwb3J0U3RhcnQ6IHRydWUgfSk7XHJcbiAgICBzcHlSZXBvcnQoY2hhbmdlKTtcclxufVxyXG52YXIgRU5EX0VWRU5UID0geyBzcHlSZXBvcnRFbmQ6IHRydWUgfTtcclxuZnVuY3Rpb24gc3B5UmVwb3J0RW5kKGNoYW5nZSkge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICByZXR1cm47XHJcbiAgICBpZiAoY2hhbmdlKVxyXG4gICAgICAgIHNweVJlcG9ydChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY2hhbmdlKSwgeyBzcHlSZXBvcnRFbmQ6IHRydWUgfSkpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHNweVJlcG9ydChFTkRfRVZFTlQpO1xyXG59XHJcbmZ1bmN0aW9uIHNweShsaXN0ZW5lcikge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlttb2J4LnNweV0gSXMgYSBuby1vcCBpbiBwcm9kdWN0aW9uIGJ1aWxkc1wiKTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZ2xvYmFsU3RhdGUuc3B5TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgICAgIHJldHVybiBvbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZ2xvYmFsU3RhdGUuc3B5TGlzdGVuZXJzID0gZ2xvYmFsU3RhdGUuc3B5TGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAobCkgeyByZXR1cm4gbCAhPT0gbGlzdGVuZXI7IH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIGRvbnRSZWFzc2lnbkZpZWxkcygpIHtcclxuICAgIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIFwiQGFjdGlvbiBmaWVsZHMgYXJlIG5vdCByZWFzc2lnbmFibGVcIik7XHJcbn1cclxuZnVuY3Rpb24gbmFtZWRBY3Rpb25EZWNvcmF0b3IobmFtZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHByb3AsIGRlc2NyaXB0b3IpIHtcclxuICAgICAgICBpZiAoZGVzY3JpcHRvcikge1xyXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGRlc2NyaXB0b3IuZ2V0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsKFwiQGFjdGlvbiBjYW5ub3QgYmUgdXNlZCB3aXRoIGdldHRlcnNcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gYmFiZWwgLyB0eXBlc2NyaXB0XHJcbiAgICAgICAgICAgIC8vIEBhY3Rpb24gbWV0aG9kKCkgeyB9XHJcbiAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0eXBlc2NyaXB0XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjcmVhdGVBY3Rpb24obmFtZSwgZGVzY3JpcHRvci52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlIC8vIGZvciB0eXBlc2NyaXB0LCB0aGlzIG11c3QgYmUgd3JpdGFibGUsIG90aGVyd2lzZSBpdCBjYW5ub3QgaW5oZXJpdCA6LyAoc2VlIGluaGVyaXRhYmxlIGFjdGlvbnMgdGVzdClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gYmFiZWwgb25seTogQGFjdGlvbiBtZXRob2QgPSAoKSA9PiB7fVxyXG4gICAgICAgICAgICB2YXIgaW5pdGlhbGl6ZXJfMSA9IGRlc2NyaXB0b3IuaW5pdGlhbGl6ZXI7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBOLkI6IHdlIGNhbid0IGltbWVkaWF0ZWx5IGludm9rZSBpbml0aWFsaXplcjsgdGhpcyB3b3VsZCBiZSB3cm9uZ1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVBY3Rpb24obmFtZSwgaW5pdGlhbGl6ZXJfMS5jYWxsKHRoaXMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gYm91bmQgaW5zdGFuY2UgbWV0aG9kc1xyXG4gICAgICAgIHJldHVybiBhY3Rpb25GaWVsZERlY29yYXRvcihuYW1lKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBhY3Rpb25GaWVsZERlY29yYXRvcihuYW1lKSB7XHJcbiAgICAvLyBTaW1wbGUgcHJvcGVydHkgdGhhdCB3cml0ZXMgb24gZmlyc3QgaW52b2NhdGlvbiB0byB0aGUgY3VycmVudCBpbnN0YW5jZVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHByb3AsIGRlc2NyaXB0b3IpIHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wLCB7XHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGFkZEhpZGRlblByb3AodGhpcywgcHJvcCwgYWN0aW9uKG5hbWUsIHZhbHVlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gYm91bmRBY3Rpb25EZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IsIGFwcGx5VG9JbnN0YW5jZSkge1xyXG4gICAgaWYgKGFwcGx5VG9JbnN0YW5jZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGRlZmluZUJvdW5kQWN0aW9uKHRhcmdldCwgcHJvcGVydHlOYW1lLCBkZXNjcmlwdG9yLnZhbHVlKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChkZXNjcmlwdG9yKSB7XHJcbiAgICAgICAgLy8gaWYgKGRlc2NyaXB0b3IudmFsdWUpXHJcbiAgICAgICAgLy8gVHlwZXNjcmlwdCAvIEJhYmVsOiBAYWN0aW9uLmJvdW5kIG1ldGhvZCgpIHsgfVxyXG4gICAgICAgIC8vIGFsc286IGJhYmVsIEBhY3Rpb24uYm91bmQgbWV0aG9kID0gKCkgPT4ge31cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGRlZmluZUJvdW5kQWN0aW9uKHRoaXMsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvci52YWx1ZSB8fCBkZXNjcmlwdG9yLmluaXRpYWxpemVyLmNhbGwodGhpcykpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbcHJvcGVydHlOYW1lXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBkb250UmVhc3NpZ25GaWVsZHNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gZmllbGQgZGVjb3JhdG9yIFR5cGVzY3JpcHQgQGFjdGlvbi5ib3VuZCBtZXRob2QgPSAoKSA9PiB7fVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICBkZWZpbmVCb3VuZEFjdGlvbih0aGlzLCBwcm9wZXJ0eU5hbWUsIHYpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxuXG52YXIgYWN0aW9uID0gZnVuY3Rpb24gYWN0aW9uKGFyZzEsIGFyZzIsIGFyZzMsIGFyZzQpIHtcclxuICAgIC8vIGFjdGlvbihmbigpIHt9KVxyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZzEgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICByZXR1cm4gY3JlYXRlQWN0aW9uKGFyZzEubmFtZSB8fCBcIjx1bm5hbWVkIGFjdGlvbj5cIiwgYXJnMSk7XHJcbiAgICAvLyBhY3Rpb24oXCJuYW1lXCIsIGZuKCkge30pXHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YgYXJnMiA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIHJldHVybiBjcmVhdGVBY3Rpb24oYXJnMSwgYXJnMik7XHJcbiAgICAvLyBAYWN0aW9uKFwibmFtZVwiKSBmbigpIHt9XHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJnMSA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gbmFtZWRBY3Rpb25EZWNvcmF0b3IoYXJnMSk7XHJcbiAgICAvLyBAYWN0aW9uIGZuKCkge31cclxuICAgIGlmIChhcmc0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgLy8gYXBwbHkgdG8gaW5zdGFuY2UgaW1tZWRpYXRlbHlcclxuICAgICAgICBhZGRIaWRkZW5Qcm9wKGFyZzEsIGFyZzIsIGNyZWF0ZUFjdGlvbihhcmcxLm5hbWUgfHwgYXJnMiwgYXJnMy52YWx1ZSwgdGhpcykpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG5hbWVkQWN0aW9uRGVjb3JhdG9yKGFyZzIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbn07XHJcbmFjdGlvbi5ib3VuZCA9IGJvdW5kQWN0aW9uRGVjb3JhdG9yO1xyXG5mdW5jdGlvbiBydW5JbkFjdGlvbihhcmcxLCBhcmcyKSB7XHJcbiAgICB2YXIgYWN0aW9uTmFtZSA9IHR5cGVvZiBhcmcxID09PSBcInN0cmluZ1wiID8gYXJnMSA6IGFyZzEubmFtZSB8fCBcIjx1bm5hbWVkIGFjdGlvbj5cIjtcclxuICAgIHZhciBmbiA9IHR5cGVvZiBhcmcxID09PSBcImZ1bmN0aW9uXCIgPyBhcmcxIDogYXJnMjtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICBpbnZhcmlhbnQodHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIgJiYgZm4ubGVuZ3RoID09PSAwLCBcImBydW5JbkFjdGlvbmAgZXhwZWN0cyBhIGZ1bmN0aW9uIHdpdGhvdXQgYXJndW1lbnRzXCIpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uTmFtZSAhPT0gXCJzdHJpbmdcIiB8fCAhYWN0aW9uTmFtZSlcclxuICAgICAgICAgICAgZmFpbChcImFjdGlvbnMgc2hvdWxkIGhhdmUgdmFsaWQgbmFtZXMsIGdvdDogJ1wiICsgYWN0aW9uTmFtZSArIFwiJ1wiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBleGVjdXRlQWN0aW9uKGFjdGlvbk5hbWUsIGZuLCB0aGlzLCB1bmRlZmluZWQpO1xyXG59XHJcbmZ1bmN0aW9uIGlzQWN0aW9uKHRoaW5nKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSBcImZ1bmN0aW9uXCIgJiYgdGhpbmcuaXNNb2J4QWN0aW9uID09PSB0cnVlO1xyXG59XHJcbmZ1bmN0aW9uIGRlZmluZUJvdW5kQWN0aW9uKHRhcmdldCwgcHJvcGVydHlOYW1lLCBmbikge1xyXG4gICAgYWRkSGlkZGVuUHJvcCh0YXJnZXQsIHByb3BlcnR5TmFtZSwgY3JlYXRlQWN0aW9uKHByb3BlcnR5TmFtZSwgZm4uYmluZCh0YXJnZXQpKSk7XHJcbn1cblxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuYW1lZCByZWFjdGl2ZSB2aWV3IGFuZCBrZWVwcyBpdCBhbGl2ZSwgc28gdGhhdCB0aGUgdmlldyBpcyBhbHdheXNcclxuICogdXBkYXRlZCBpZiBvbmUgb2YgdGhlIGRlcGVuZGVuY2llcyBjaGFuZ2VzLCBldmVuIHdoZW4gdGhlIHZpZXcgaXMgbm90IGZ1cnRoZXIgdXNlZCBieSBzb21ldGhpbmcgZWxzZS5cclxuICogQHBhcmFtIHZpZXcgVGhlIHJlYWN0aXZlIHZpZXdcclxuICogQHJldHVybnMgZGlzcG9zZXIgZnVuY3Rpb24sIHdoaWNoIGNhbiBiZSB1c2VkIHRvIHN0b3AgdGhlIHZpZXcgZnJvbSBiZWluZyB1cGRhdGVkIGluIHRoZSBmdXR1cmUuXHJcbiAqL1xyXG5mdW5jdGlvbiBhdXRvcnVuKHZpZXcsIG9wdHMpIHtcclxuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IEVNUFRZX09CSkVDVDsgfVxyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgIGludmFyaWFudCh0eXBlb2YgdmlldyA9PT0gXCJmdW5jdGlvblwiLCBcIkF1dG9ydW4gZXhwZWN0cyBhIGZ1bmN0aW9uIGFzIGZpcnN0IGFyZ3VtZW50XCIpO1xyXG4gICAgICAgIGludmFyaWFudChpc0FjdGlvbih2aWV3KSA9PT0gZmFsc2UsIFwiQXV0b3J1biBkb2VzIG5vdCBhY2NlcHQgYWN0aW9ucyBzaW5jZSBhY3Rpb25zIGFyZSB1bnRyYWNrYWJsZVwiKTtcclxuICAgIH1cclxuICAgIHZhciBuYW1lID0gKG9wdHMgJiYgb3B0cy5uYW1lKSB8fCB2aWV3Lm5hbWUgfHwgXCJBdXRvcnVuQFwiICsgZ2V0TmV4dElkKCk7XHJcbiAgICB2YXIgcnVuU3luYyA9ICFvcHRzLnNjaGVkdWxlciAmJiAhb3B0cy5kZWxheTtcclxuICAgIHZhciByZWFjdGlvbjtcclxuICAgIGlmIChydW5TeW5jKSB7XHJcbiAgICAgICAgLy8gbm9ybWFsIGF1dG9ydW5cclxuICAgICAgICByZWFjdGlvbiA9IG5ldyBSZWFjdGlvbihuYW1lLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhY2socmVhY3Rpb25SdW5uZXIpO1xyXG4gICAgICAgIH0sIG9wdHMub25FcnJvciwgb3B0cy5yZXF1aXJlc09ic2VydmFibGUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdmFyIHNjaGVkdWxlcl8xID0gY3JlYXRlU2NoZWR1bGVyRnJvbU9wdGlvbnMob3B0cyk7XHJcbiAgICAgICAgLy8gZGVib3VuY2VkIGF1dG9ydW5cclxuICAgICAgICB2YXIgaXNTY2hlZHVsZWRfMSA9IGZhbHNlO1xyXG4gICAgICAgIHJlYWN0aW9uID0gbmV3IFJlYWN0aW9uKG5hbWUsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFpc1NjaGVkdWxlZF8xKSB7XHJcbiAgICAgICAgICAgICAgICBpc1NjaGVkdWxlZF8xID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHNjaGVkdWxlcl8xKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1NjaGVkdWxlZF8xID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWFjdGlvbi5pc0Rpc3Bvc2VkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdGlvbi50cmFjayhyZWFjdGlvblJ1bm5lcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIG9wdHMub25FcnJvciwgb3B0cy5yZXF1aXJlc09ic2VydmFibGUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVhY3Rpb25SdW5uZXIoKSB7XHJcbiAgICAgICAgdmlldyhyZWFjdGlvbik7XHJcbiAgICB9XHJcbiAgICByZWFjdGlvbi5zY2hlZHVsZSgpO1xyXG4gICAgcmV0dXJuIHJlYWN0aW9uLmdldERpc3Bvc2VyKCk7XHJcbn1cclxudmFyIHJ1biA9IGZ1bmN0aW9uIChmKSB7IHJldHVybiBmKCk7IH07XHJcbmZ1bmN0aW9uIGNyZWF0ZVNjaGVkdWxlckZyb21PcHRpb25zKG9wdHMpIHtcclxuICAgIHJldHVybiBvcHRzLnNjaGVkdWxlclxyXG4gICAgICAgID8gb3B0cy5zY2hlZHVsZXJcclxuICAgICAgICA6IG9wdHMuZGVsYXlcclxuICAgICAgICAgICAgPyBmdW5jdGlvbiAoZikgeyByZXR1cm4gc2V0VGltZW91dChmLCBvcHRzLmRlbGF5KTsgfVxyXG4gICAgICAgICAgICA6IHJ1bjtcclxufVxyXG5mdW5jdGlvbiByZWFjdGlvbihleHByZXNzaW9uLCBlZmZlY3QsIG9wdHMpIHtcclxuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IEVNUFRZX09CSkVDVDsgfVxyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgIGludmFyaWFudCh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJmdW5jdGlvblwiLCBcIkZpcnN0IGFyZ3VtZW50IHRvIHJlYWN0aW9uIHNob3VsZCBiZSBhIGZ1bmN0aW9uXCIpO1xyXG4gICAgICAgIGludmFyaWFudCh0eXBlb2Ygb3B0cyA9PT0gXCJvYmplY3RcIiwgXCJUaGlyZCBhcmd1bWVudCBvZiByZWFjdGlvbnMgc2hvdWxkIGJlIGFuIG9iamVjdFwiKTtcclxuICAgIH1cclxuICAgIHZhciBuYW1lID0gb3B0cy5uYW1lIHx8IFwiUmVhY3Rpb25AXCIgKyBnZXROZXh0SWQoKTtcclxuICAgIHZhciBlZmZlY3RBY3Rpb24gPSBhY3Rpb24obmFtZSwgb3B0cy5vbkVycm9yID8gd3JhcEVycm9ySGFuZGxlcihvcHRzLm9uRXJyb3IsIGVmZmVjdCkgOiBlZmZlY3QpO1xyXG4gICAgdmFyIHJ1blN5bmMgPSAhb3B0cy5zY2hlZHVsZXIgJiYgIW9wdHMuZGVsYXk7XHJcbiAgICB2YXIgc2NoZWR1bGVyID0gY3JlYXRlU2NoZWR1bGVyRnJvbU9wdGlvbnMob3B0cyk7XHJcbiAgICB2YXIgZmlyc3RUaW1lID0gdHJ1ZTtcclxuICAgIHZhciBpc1NjaGVkdWxlZCA9IGZhbHNlO1xyXG4gICAgdmFyIHZhbHVlO1xyXG4gICAgdmFyIGVxdWFscyA9IG9wdHMuY29tcGFyZVN0cnVjdHVyYWxcclxuICAgICAgICA/IGNvbXBhcmVyLnN0cnVjdHVyYWxcclxuICAgICAgICA6IG9wdHMuZXF1YWxzIHx8IGNvbXBhcmVyLmRlZmF1bHQ7XHJcbiAgICB2YXIgciA9IG5ldyBSZWFjdGlvbihuYW1lLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGZpcnN0VGltZSB8fCBydW5TeW5jKSB7XHJcbiAgICAgICAgICAgIHJlYWN0aW9uUnVubmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFpc1NjaGVkdWxlZCkge1xyXG4gICAgICAgICAgICBpc1NjaGVkdWxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHNjaGVkdWxlcihyZWFjdGlvblJ1bm5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgb3B0cy5vbkVycm9yLCBvcHRzLnJlcXVpcmVzT2JzZXJ2YWJsZSk7XHJcbiAgICBmdW5jdGlvbiByZWFjdGlvblJ1bm5lcigpIHtcclxuICAgICAgICBpc1NjaGVkdWxlZCA9IGZhbHNlOyAvLyBROiBtb3ZlIGludG8gcmVhY3Rpb24gcnVubmVyP1xyXG4gICAgICAgIGlmIChyLmlzRGlzcG9zZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgIHIudHJhY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbmV4dFZhbHVlID0gZXhwcmVzc2lvbihyKTtcclxuICAgICAgICAgICAgY2hhbmdlZCA9IGZpcnN0VGltZSB8fCAhZXF1YWxzKHZhbHVlLCBuZXh0VmFsdWUpO1xyXG4gICAgICAgICAgICB2YWx1ZSA9IG5leHRWYWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZmlyc3RUaW1lICYmIG9wdHMuZmlyZUltbWVkaWF0ZWx5KVxyXG4gICAgICAgICAgICBlZmZlY3RBY3Rpb24odmFsdWUsIHIpO1xyXG4gICAgICAgIGlmICghZmlyc3RUaW1lICYmIGNoYW5nZWQgPT09IHRydWUpXHJcbiAgICAgICAgICAgIGVmZmVjdEFjdGlvbih2YWx1ZSwgcik7XHJcbiAgICAgICAgaWYgKGZpcnN0VGltZSlcclxuICAgICAgICAgICAgZmlyc3RUaW1lID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByLnNjaGVkdWxlKCk7XHJcbiAgICByZXR1cm4gci5nZXREaXNwb3NlcigpO1xyXG59XHJcbmZ1bmN0aW9uIHdyYXBFcnJvckhhbmRsZXIoZXJyb3JIYW5kbGVyLCBiYXNlRm4pIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIGJhc2VGbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBlcnJvckhhbmRsZXIuY2FsbCh0aGlzLCBlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XG5cbmZ1bmN0aW9uIG9uQmVjb21lT2JzZXJ2ZWQodGhpbmcsIGFyZzIsIGFyZzMpIHtcclxuICAgIHJldHVybiBpbnRlcmNlcHRIb29rKFwib25CZWNvbWVPYnNlcnZlZFwiLCB0aGluZywgYXJnMiwgYXJnMyk7XHJcbn1cclxuZnVuY3Rpb24gb25CZWNvbWVVbm9ic2VydmVkKHRoaW5nLCBhcmcyLCBhcmczKSB7XHJcbiAgICByZXR1cm4gaW50ZXJjZXB0SG9vayhcIm9uQmVjb21lVW5vYnNlcnZlZFwiLCB0aGluZywgYXJnMiwgYXJnMyk7XHJcbn1cclxuZnVuY3Rpb24gaW50ZXJjZXB0SG9vayhob29rLCB0aGluZywgYXJnMiwgYXJnMykge1xyXG4gICAgdmFyIGF0b20gPSB0eXBlb2YgYXJnMyA9PT0gXCJmdW5jdGlvblwiID8gZ2V0QXRvbSh0aGluZywgYXJnMikgOiBnZXRBdG9tKHRoaW5nKTtcclxuICAgIHZhciBjYiA9IHR5cGVvZiBhcmczID09PSBcImZ1bmN0aW9uXCIgPyBhcmczIDogYXJnMjtcclxuICAgIHZhciBsaXN0ZW5lcnNLZXkgPSBob29rICsgXCJMaXN0ZW5lcnNcIjtcclxuICAgIGlmIChhdG9tW2xpc3RlbmVyc0tleV0pIHtcclxuICAgICAgICBhdG9tW2xpc3RlbmVyc0tleV0uYWRkKGNiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGF0b21bbGlzdGVuZXJzS2V5XSA9IG5ldyBTZXQoW2NiXSk7XHJcbiAgICB9XHJcbiAgICB2YXIgb3JpZyA9IGF0b21baG9va107XHJcbiAgICBpZiAodHlwZW9mIG9yaWcgIT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgXCJOb3QgYW4gYXRvbSB0aGF0IGNhbiBiZSAodW4pb2JzZXJ2ZWRcIik7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBob29rTGlzdGVuZXJzID0gYXRvbVtsaXN0ZW5lcnNLZXldO1xyXG4gICAgICAgIGlmIChob29rTGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgIGhvb2tMaXN0ZW5lcnMuZGVsZXRlKGNiKTtcclxuICAgICAgICAgICAgaWYgKGhvb2tMaXN0ZW5lcnMuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGF0b21bbGlzdGVuZXJzS2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cblxuZnVuY3Rpb24gY29uZmlndXJlKG9wdGlvbnMpIHtcclxuICAgIHZhciBlbmZvcmNlQWN0aW9ucyA9IG9wdGlvbnMuZW5mb3JjZUFjdGlvbnMsIGNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvbiA9IG9wdGlvbnMuY29tcHV0ZWRSZXF1aXJlc1JlYWN0aW9uLCBjb21wdXRlZENvbmZpZ3VyYWJsZSA9IG9wdGlvbnMuY29tcHV0ZWRDb25maWd1cmFibGUsIGRpc2FibGVFcnJvckJvdW5kYXJpZXMgPSBvcHRpb25zLmRpc2FibGVFcnJvckJvdW5kYXJpZXMsIHJlYWN0aW9uU2NoZWR1bGVyID0gb3B0aW9ucy5yZWFjdGlvblNjaGVkdWxlciwgcmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGUgPSBvcHRpb25zLnJlYWN0aW9uUmVxdWlyZXNPYnNlcnZhYmxlLCBvYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvbiA9IG9wdGlvbnMub2JzZXJ2YWJsZVJlcXVpcmVzUmVhY3Rpb247XHJcbiAgICBpZiAob3B0aW9ucy5pc29sYXRlR2xvYmFsU3RhdGUgPT09IHRydWUpIHtcclxuICAgICAgICBpc29sYXRlR2xvYmFsU3RhdGUoKTtcclxuICAgIH1cclxuICAgIGlmIChlbmZvcmNlQWN0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBlbmZvcmNlQWN0aW9ucyA9PT0gXCJib29sZWFuXCIgfHwgZW5mb3JjZUFjdGlvbnMgPT09IFwic3RyaWN0XCIpXHJcbiAgICAgICAgICAgIGRlcHJlY2F0ZWQoXCJEZXByZWNhdGVkIHZhbHVlIGZvciAnZW5mb3JjZUFjdGlvbnMnLCB1c2UgJ2ZhbHNlJyA9PiAnXFxcIm5ldmVyXFxcIicsICd0cnVlJyA9PiAnXFxcIm9ic2VydmVkXFxcIicsICdcXFwic3RyaWN0XFxcIicgPT4gXFxcIidhbHdheXMnXFxcIiBpbnN0ZWFkXCIpO1xyXG4gICAgICAgIHZhciBlYSA9IHZvaWQgMDtcclxuICAgICAgICBzd2l0Y2ggKGVuZm9yY2VBY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgY2FzZSBcIm9ic2VydmVkXCI6XHJcbiAgICAgICAgICAgICAgICBlYSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICAgICAgY2FzZSBcIm5ldmVyXCI6XHJcbiAgICAgICAgICAgICAgICBlYSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzdHJpY3RcIjpcclxuICAgICAgICAgICAgY2FzZSBcImFsd2F5c1wiOlxyXG4gICAgICAgICAgICAgICAgZWEgPSBcInN0cmljdFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBmYWlsKFwiSW52YWxpZCB2YWx1ZSBmb3IgJ2VuZm9yY2VBY3Rpb25zJzogJ1wiICsgZW5mb3JjZUFjdGlvbnMgKyBcIicsIGV4cGVjdGVkICduZXZlcicsICdhbHdheXMnIG9yICdvYnNlcnZlZCdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdsb2JhbFN0YXRlLmVuZm9yY2VBY3Rpb25zID0gZWE7XHJcbiAgICAgICAgZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXMgPSBlYSA9PT0gdHJ1ZSB8fCBlYSA9PT0gXCJzdHJpY3RcIiA/IGZhbHNlIDogdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChjb21wdXRlZFJlcXVpcmVzUmVhY3Rpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGdsb2JhbFN0YXRlLmNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvbiA9ICEhY29tcHV0ZWRSZXF1aXJlc1JlYWN0aW9uO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlYWN0aW9uUmVxdWlyZXNPYnNlcnZhYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBnbG9iYWxTdGF0ZS5yZWFjdGlvblJlcXVpcmVzT2JzZXJ2YWJsZSA9ICEhcmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGU7XHJcbiAgICB9XHJcbiAgICBpZiAob2JzZXJ2YWJsZVJlcXVpcmVzUmVhY3Rpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGdsb2JhbFN0YXRlLm9ic2VydmFibGVSZXF1aXJlc1JlYWN0aW9uID0gISFvYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvbjtcclxuICAgICAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlUmVhZHMgPSAhZ2xvYmFsU3RhdGUub2JzZXJ2YWJsZVJlcXVpcmVzUmVhY3Rpb247XHJcbiAgICB9XHJcbiAgICBpZiAoY29tcHV0ZWRDb25maWd1cmFibGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGdsb2JhbFN0YXRlLmNvbXB1dGVkQ29uZmlndXJhYmxlID0gISFjb21wdXRlZENvbmZpZ3VyYWJsZTtcclxuICAgIH1cclxuICAgIGlmIChkaXNhYmxlRXJyb3JCb3VuZGFyaWVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAoZGlzYWJsZUVycm9yQm91bmRhcmllcyA9PT0gdHJ1ZSlcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiV0FSTklORzogRGVidWcgZmVhdHVyZSBvbmx5LiBNb2JYIHdpbGwgTk9UIHJlY292ZXIgZnJvbSBlcnJvcnMgd2hlbiBgZGlzYWJsZUVycm9yQm91bmRhcmllc2AgaXMgZW5hYmxlZC5cIik7XHJcbiAgICAgICAgZ2xvYmFsU3RhdGUuZGlzYWJsZUVycm9yQm91bmRhcmllcyA9ICEhZGlzYWJsZUVycm9yQm91bmRhcmllcztcclxuICAgIH1cclxuICAgIGlmIChyZWFjdGlvblNjaGVkdWxlcikge1xyXG4gICAgICAgIHNldFJlYWN0aW9uU2NoZWR1bGVyKHJlYWN0aW9uU2NoZWR1bGVyKTtcclxuICAgIH1cclxufVxuXG5mdW5jdGlvbiBkZWNvcmF0ZSh0aGluZywgZGVjb3JhdG9ycykge1xyXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgaW52YXJpYW50KGlzUGxhaW5PYmplY3QoZGVjb3JhdG9ycyksIFwiRGVjb3JhdG9ycyBzaG91bGQgYmUgYSBrZXkgdmFsdWUgbWFwXCIpO1xyXG4gICAgdmFyIHRhcmdldCA9IHR5cGVvZiB0aGluZyA9PT0gXCJmdW5jdGlvblwiID8gdGhpbmcucHJvdG90eXBlIDogdGhpbmc7XHJcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICAgICAgdmFyIHByb3BlcnR5RGVjb3JhdG9ycyA9IGRlY29yYXRvcnNbcHJvcF07XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BlcnR5RGVjb3JhdG9ycykpIHtcclxuICAgICAgICAgICAgcHJvcGVydHlEZWNvcmF0b3JzID0gW3Byb3BlcnR5RGVjb3JhdG9yc107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICAgICBpbnZhcmlhbnQocHJvcGVydHlEZWNvcmF0b3JzLmV2ZXJ5KGZ1bmN0aW9uIChkZWNvcmF0b3IpIHsgcmV0dXJuIHR5cGVvZiBkZWNvcmF0b3IgPT09IFwiZnVuY3Rpb25cIjsgfSksIFwiRGVjb3JhdGU6IGV4cGVjdGVkIGEgZGVjb3JhdG9yIGZ1bmN0aW9uIG9yIGFycmF5IG9mIGRlY29yYXRvciBmdW5jdGlvbnMgZm9yICdcIiArIHByb3AgKyBcIidcIik7XHJcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcCk7XHJcbiAgICAgICAgdmFyIG5ld0Rlc2NyaXB0b3IgPSBwcm9wZXJ0eURlY29yYXRvcnMucmVkdWNlKGZ1bmN0aW9uIChhY2NEZXNjcmlwdG9yLCBkZWNvcmF0b3IpIHsgcmV0dXJuIGRlY29yYXRvcih0YXJnZXQsIHByb3AsIGFjY0Rlc2NyaXB0b3IpOyB9LCBkZXNjcmlwdG9yKTtcclxuICAgICAgICBpZiAobmV3RGVzY3JpcHRvcilcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcCwgbmV3RGVzY3JpcHRvcik7XHJcbiAgICB9O1xyXG4gICAgZm9yICh2YXIgcHJvcCBpbiBkZWNvcmF0b3JzKSB7XHJcbiAgICAgICAgX2xvb3BfMShwcm9wKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGluZztcclxufVxuXG5mdW5jdGlvbiBleHRlbmRPYnNlcnZhYmxlKHRhcmdldCwgcHJvcGVydGllcywgZGVjb3JhdG9ycywgb3B0aW9ucykge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgIGludmFyaWFudChhcmd1bWVudHMubGVuZ3RoID49IDIgJiYgYXJndW1lbnRzLmxlbmd0aCA8PSA0LCBcIidleHRlbmRPYnNlcnZhYmxlJyBleHBlY3RlZCAyLTQgYXJndW1lbnRzXCIpO1xyXG4gICAgICAgIGludmFyaWFudCh0eXBlb2YgdGFyZ2V0ID09PSBcIm9iamVjdFwiLCBcIidleHRlbmRPYnNlcnZhYmxlJyBleHBlY3RzIGFuIG9iamVjdCBhcyBmaXJzdCBhcmd1bWVudFwiKTtcclxuICAgICAgICBpbnZhcmlhbnQoIWlzT2JzZXJ2YWJsZU1hcCh0YXJnZXQpLCBcIidleHRlbmRPYnNlcnZhYmxlJyBzaG91bGQgbm90IGJlIHVzZWQgb24gbWFwcywgdXNlIG1hcC5tZXJnZSBpbnN0ZWFkXCIpO1xyXG4gICAgfVxyXG4gICAgb3B0aW9ucyA9IGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICB2YXIgZGVmYXVsdERlY29yYXRvciA9IGdldERlZmF1bHREZWNvcmF0b3JGcm9tT2JqZWN0T3B0aW9ucyhvcHRpb25zKTtcclxuICAgIGluaXRpYWxpemVJbnN0YW5jZSh0YXJnZXQpOyAvLyBGaXhlcyAjMTc0MFxyXG4gICAgYXNPYnNlcnZhYmxlT2JqZWN0KHRhcmdldCwgb3B0aW9ucy5uYW1lLCBkZWZhdWx0RGVjb3JhdG9yLmVuaGFuY2VyKTsgLy8gbWFrZSBzdXJlIG9iamVjdCBpcyBvYnNlcnZhYmxlLCBldmVuIHdpdGhvdXQgaW5pdGlhbCBwcm9wc1xyXG4gICAgaWYgKHByb3BlcnRpZXMpXHJcbiAgICAgICAgZXh0ZW5kT2JzZXJ2YWJsZU9iamVjdFdpdGhQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcGVydGllcywgZGVjb3JhdG9ycywgZGVmYXVsdERlY29yYXRvcik7XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcbmZ1bmN0aW9uIGdldERlZmF1bHREZWNvcmF0b3JGcm9tT2JqZWN0T3B0aW9ucyhvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gb3B0aW9ucy5kZWZhdWx0RGVjb3JhdG9yIHx8IChvcHRpb25zLmRlZXAgPT09IGZhbHNlID8gcmVmRGVjb3JhdG9yIDogZGVlcERlY29yYXRvcik7XHJcbn1cclxuZnVuY3Rpb24gZXh0ZW5kT2JzZXJ2YWJsZU9iamVjdFdpdGhQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcGVydGllcywgZGVjb3JhdG9ycywgZGVmYXVsdERlY29yYXRvcikge1xyXG4gICAgdmFyIGVfMSwgX2EsIGVfMiwgX2I7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgaW52YXJpYW50KCFpc09ic2VydmFibGUocHJvcGVydGllcyksIFwiRXh0ZW5kaW5nIGFuIG9iamVjdCB3aXRoIGFub3RoZXIgb2JzZXJ2YWJsZSAob2JqZWN0KSBpcyBub3Qgc3VwcG9ydGVkLiBQbGVhc2UgY29uc3RydWN0IGFuIGV4cGxpY2l0IHByb3BlcnR5bWFwLCB1c2luZyBgdG9KU2AgaWYgbmVlZC4gU2VlIGlzc3VlICM1NDBcIik7XHJcbiAgICAgICAgaWYgKGRlY29yYXRvcnMpIHtcclxuICAgICAgICAgICAgdmFyIGtleXMgPSBnZXRQbGFpbk9iamVjdEtleXMoZGVjb3JhdG9ycyk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXlzXzEgPSBfX3ZhbHVlcyhrZXlzKSwga2V5c18xXzEgPSBrZXlzXzEubmV4dCgpOyAha2V5c18xXzEuZG9uZTsga2V5c18xXzEgPSBrZXlzXzEubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXNfMV8xLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiBwcm9wZXJ0aWVzKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbChcIlRyeWluZyB0byBkZWNsYXJlIGEgZGVjb3JhdG9yIGZvciB1bnNwZWNpZmllZCBwcm9wZXJ0eSAnXCIgKyBzdHJpbmdpZnlLZXkoa2V5KSArIFwiJ1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxyXG4gICAgICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleXNfMV8xICYmICFrZXlzXzFfMS5kb25lICYmIChfYSA9IGtleXNfMS5yZXR1cm4pKSBfYS5jYWxsKGtleXNfMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGFydEJhdGNoKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZhciBrZXlzID0gZ2V0UGxhaW5PYmplY3RLZXlzKHByb3BlcnRpZXMpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleXNfMiA9IF9fdmFsdWVzKGtleXMpLCBrZXlzXzJfMSA9IGtleXNfMi5uZXh0KCk7ICFrZXlzXzJfMS5kb25lOyBrZXlzXzJfMSA9IGtleXNfMi5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzXzJfMS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm9wZXJ0aWVzLCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNQbGFpbk9iamVjdChwcm9wZXJ0aWVzKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbChcIidleHRlbmRPYnNlcnZhYmUnIG9ubHkgYWNjZXB0cyBwbGFpbiBvYmplY3RzIGFzIHNlY29uZCBhcmd1bWVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNDb21wdXRlZChkZXNjcmlwdG9yLnZhbHVlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbChcIlBhc3NpbmcgYSAnY29tcHV0ZWQnIGFzIGluaXRpYWwgcHJvcGVydHkgdmFsdWUgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCBieSBleHRlbmRPYnNlcnZhYmxlLiBVc2UgYSBnZXR0ZXIgb3IgZGVjb3JhdG9yIGluc3RlYWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgZGVjb3JhdG9yID0gZGVjb3JhdG9ycyAmJiBrZXkgaW4gZGVjb3JhdG9yc1xyXG4gICAgICAgICAgICAgICAgICAgID8gZGVjb3JhdG9yc1trZXldXHJcbiAgICAgICAgICAgICAgICAgICAgOiBkZXNjcmlwdG9yLmdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGNvbXB1dGVkRGVjb3JhdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVmYXVsdERlY29yYXRvcjtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgdHlwZW9mIGRlY29yYXRvciAhPT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgICAgIGZhaWwoXCJOb3QgYSB2YWxpZCBkZWNvcmF0b3IgZm9yICdcIiArIHN0cmluZ2lmeUtleShrZXkpICsgXCInLCBnb3Q6IFwiICsgZGVjb3JhdG9yKTtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHREZXNjcmlwdG9yID0gZGVjb3JhdG9yKHRhcmdldCwga2V5LCBkZXNjcmlwdG9yLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHREZXNjcmlwdG9yIC8vIG90aGVyd2lzZSwgYXNzdW1lIGFscmVhZHkgYXBwbGllZCwgZHVlIHRvIGBhcHBseVRvSW5zdGFuY2VgXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByZXN1bHREZXNjcmlwdG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleXNfMl8xICYmICFrZXlzXzJfMS5kb25lICYmIChfYiA9IGtleXNfMi5yZXR1cm4pKSBfYi5jYWxsKGtleXNfMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIGVuZEJhdGNoKCk7XHJcbiAgICB9XHJcbn1cblxuZnVuY3Rpb24gZ2V0RGVwZW5kZW5jeVRyZWUodGhpbmcsIHByb3BlcnR5KSB7XHJcbiAgICByZXR1cm4gbm9kZVRvRGVwZW5kZW5jeVRyZWUoZ2V0QXRvbSh0aGluZywgcHJvcGVydHkpKTtcclxufVxyXG5mdW5jdGlvbiBub2RlVG9EZXBlbmRlbmN5VHJlZShub2RlKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0ge1xyXG4gICAgICAgIG5hbWU6IG5vZGUubmFtZVxyXG4gICAgfTtcclxuICAgIGlmIChub2RlLm9ic2VydmluZyAmJiBub2RlLm9ic2VydmluZy5sZW5ndGggPiAwKVxyXG4gICAgICAgIHJlc3VsdC5kZXBlbmRlbmNpZXMgPSB1bmlxdWUobm9kZS5vYnNlcnZpbmcpLm1hcChub2RlVG9EZXBlbmRlbmN5VHJlZSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIGdldE9ic2VydmVyVHJlZSh0aGluZywgcHJvcGVydHkpIHtcclxuICAgIHJldHVybiBub2RlVG9PYnNlcnZlclRyZWUoZ2V0QXRvbSh0aGluZywgcHJvcGVydHkpKTtcclxufVxyXG5mdW5jdGlvbiBub2RlVG9PYnNlcnZlclRyZWUobm9kZSkge1xyXG4gICAgdmFyIHJlc3VsdCA9IHtcclxuICAgICAgICBuYW1lOiBub2RlLm5hbWVcclxuICAgIH07XHJcbiAgICBpZiAoaGFzT2JzZXJ2ZXJzKG5vZGUpKVxyXG4gICAgICAgIHJlc3VsdC5vYnNlcnZlcnMgPSBBcnJheS5mcm9tKGdldE9ic2VydmVycyhub2RlKSkubWFwKG5vZGVUb09ic2VydmVyVHJlZSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XG5cbnZhciBnZW5lcmF0b3JJZCA9IDA7XHJcbmZ1bmN0aW9uIEZsb3dDYW5jZWxsYXRpb25FcnJvcigpIHtcclxuICAgIHRoaXMubWVzc2FnZSA9IFwiRkxPV19DQU5DRUxMRURcIjtcclxufVxyXG5GbG93Q2FuY2VsbGF0aW9uRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xyXG5mdW5jdGlvbiBpc0Zsb3dDYW5jZWxsYXRpb25FcnJvcihlcnJvcikge1xyXG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgRmxvd0NhbmNlbGxhdGlvbkVycm9yO1xyXG59XHJcbmZ1bmN0aW9uIGZsb3coZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gMSlcclxuICAgICAgICBmYWlsKCEhcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgXCJGbG93IGV4cGVjdHMgMSBhcmd1bWVudCBhbmQgY2Fubm90IGJlIHVzZWQgYXMgZGVjb3JhdG9yXCIpO1xyXG4gICAgdmFyIG5hbWUgPSBnZW5lcmF0b3IubmFtZSB8fCBcIjx1bm5hbWVkIGZsb3c+XCI7XHJcbiAgICAvLyBJbXBsZW1lbnRhdGlvbiBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vdGovY28vYmxvYi9tYXN0ZXIvaW5kZXguanNcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGN0eCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICAgICAgdmFyIHJ1bklkID0gKytnZW5lcmF0b3JJZDtcclxuICAgICAgICB2YXIgZ2VuID0gYWN0aW9uKG5hbWUgKyBcIiAtIHJ1bmlkOiBcIiArIHJ1bklkICsgXCIgLSBpbml0XCIsIGdlbmVyYXRvcikuYXBwbHkoY3R4LCBhcmdzKTtcclxuICAgICAgICB2YXIgcmVqZWN0b3I7XHJcbiAgICAgICAgdmFyIHBlbmRpbmdQcm9taXNlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICB2YXIgc3RlcElkID0gMDtcclxuICAgICAgICAgICAgcmVqZWN0b3IgPSByZWplY3Q7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uRnVsZmlsbGVkKHJlcykge1xyXG4gICAgICAgICAgICAgICAgcGVuZGluZ1Byb21pc2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmV0O1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICByZXQgPSBhY3Rpb24obmFtZSArIFwiIC0gcnVuaWQ6IFwiICsgcnVuSWQgKyBcIiAtIHlpZWxkIFwiICsgc3RlcElkKyssIGdlbi5uZXh0KS5jYWxsKGdlbiwgcmVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5leHQocmV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBvblJlamVjdGVkKGVycikge1xyXG4gICAgICAgICAgICAgICAgcGVuZGluZ1Byb21pc2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmV0O1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICByZXQgPSBhY3Rpb24obmFtZSArIFwiIC0gcnVuaWQ6IFwiICsgcnVuSWQgKyBcIiAtIHlpZWxkIFwiICsgc3RlcElkKyssIGdlbi50aHJvdykuY2FsbChnZW4sIGVycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuZXh0KHJldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gbmV4dChyZXQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXQgJiYgdHlwZW9mIHJldC50aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbiBhc3luYyBpdGVyYXRvclxyXG4gICAgICAgICAgICAgICAgICAgIHJldC50aGVuKG5leHQsIHJlamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJldC5kb25lKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBwZW5kaW5nUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShyZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBlbmRpbmdQcm9taXNlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9uRnVsZmlsbGVkKHVuZGVmaW5lZCk7IC8vIGtpY2sgb2ZmIHRoZSBwcm9jZXNzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcHJvbWlzZS5jYW5jZWwgPSBhY3Rpb24obmFtZSArIFwiIC0gcnVuaWQ6IFwiICsgcnVuSWQgKyBcIiAtIGNhbmNlbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGVuZGluZ1Byb21pc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsUHJvbWlzZShwZW5kaW5nUHJvbWlzZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBGaW5hbGx5IGJsb2NrIGNhbiByZXR1cm4gKG9yIHlpZWxkKSBzdHVmZi4uXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzID0gZ2VuLnJldHVybih1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAgICAgLy8gZWF0IGFueXRoaW5nIHRoYXQgcHJvbWlzZSB3b3VsZCBkbywgaXQncyBjYW5jZWxsZWQhXHJcbiAgICAgICAgICAgICAgICB2YXIgeWllbGRlZFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUocmVzLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHlpZWxkZWRQcm9taXNlLnRoZW4obm9vcCwgbm9vcCk7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxQcm9taXNlKHlpZWxkZWRQcm9taXNlKTsgLy8gbWF5YmUgaXQgY2FuIGJlIGNhbmNlbGxlZCA6KVxyXG4gICAgICAgICAgICAgICAgLy8gcmVqZWN0IG91ciBvcmlnaW5hbCBwcm9taXNlXHJcbiAgICAgICAgICAgICAgICByZWplY3RvcihuZXcgRmxvd0NhbmNlbGxhdGlvbkVycm9yKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3RvcihlKTsgLy8gdGhlcmUgY291bGQgYmUgYSB0aHJvd2luZyBmaW5hbGx5IGJsb2NrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gY2FuY2VsUHJvbWlzZShwcm9taXNlKSB7XHJcbiAgICBpZiAodHlwZW9mIHByb21pc2UuY2FuY2VsID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgcHJvbWlzZS5jYW5jZWwoKTtcclxufVxuXG5mdW5jdGlvbiBpbnRlcmNlcHRSZWFkcyh0aGluZywgcHJvcE9ySGFuZGxlciwgaGFuZGxlcikge1xyXG4gICAgdmFyIHRhcmdldDtcclxuICAgIGlmIChpc09ic2VydmFibGVNYXAodGhpbmcpIHx8IGlzT2JzZXJ2YWJsZUFycmF5KHRoaW5nKSB8fCBpc09ic2VydmFibGVWYWx1ZSh0aGluZykpIHtcclxuICAgICAgICB0YXJnZXQgPSBnZXRBZG1pbmlzdHJhdGlvbih0aGluZyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVPYmplY3QodGhpbmcpKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wT3JIYW5kbGVyICE9PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgICAgICAgICAgICAgIFwiSW50ZXJjZXB0UmVhZHMgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIGEgc3BlY2lmaWMgcHJvcGVydHksIG5vdCB3aXRoIGFuIG9iamVjdCBpbiBnZW5lcmFsXCIpO1xyXG4gICAgICAgIHRhcmdldCA9IGdldEFkbWluaXN0cmF0aW9uKHRoaW5nLCBwcm9wT3JIYW5kbGVyKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICAgICBcIkV4cGVjdGVkIG9ic2VydmFibGUgbWFwLCBvYmplY3Qgb3IgYXJyYXkgYXMgZmlyc3QgYXJyYXlcIik7XHJcbiAgICB9XHJcbiAgICBpZiAodGFyZ2V0LmRlaGFuY2VyICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIFwiQW4gaW50ZXJjZXB0IHJlYWRlciB3YXMgYWxyZWFkeSBlc3RhYmxpc2hlZFwiKTtcclxuICAgIHRhcmdldC5kZWhhbmNlciA9IHR5cGVvZiBwcm9wT3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIgPyBwcm9wT3JIYW5kbGVyIDogaGFuZGxlcjtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGFyZ2V0LmRlaGFuY2VyID0gdW5kZWZpbmVkO1xyXG4gICAgfTtcclxufVxuXG5mdW5jdGlvbiBpbnRlcmNlcHQodGhpbmcsIHByb3BPckhhbmRsZXIsIGhhbmRsZXIpIHtcclxuICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIHJldHVybiBpbnRlcmNlcHRQcm9wZXJ0eSh0aGluZywgcHJvcE9ySGFuZGxlciwgaGFuZGxlcik7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIGludGVyY2VwdEludGVyY2VwdGFibGUodGhpbmcsIHByb3BPckhhbmRsZXIpO1xyXG59XHJcbmZ1bmN0aW9uIGludGVyY2VwdEludGVyY2VwdGFibGUodGhpbmcsIGhhbmRsZXIpIHtcclxuICAgIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZykuaW50ZXJjZXB0KGhhbmRsZXIpO1xyXG59XHJcbmZ1bmN0aW9uIGludGVyY2VwdFByb3BlcnR5KHRoaW5nLCBwcm9wZXJ0eSwgaGFuZGxlcikge1xyXG4gICAgcmV0dXJuIGdldEFkbWluaXN0cmF0aW9uKHRoaW5nLCBwcm9wZXJ0eSkuaW50ZXJjZXB0KGhhbmRsZXIpO1xyXG59XG5cbmZ1bmN0aW9uIF9pc0NvbXB1dGVkKHZhbHVlLCBwcm9wZXJ0eSkge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHZhbHVlKSA9PT0gZmFsc2UpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoIXZhbHVlWyRtb2J4XS52YWx1ZXMuaGFzKHByb3BlcnR5KSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHZhciBhdG9tID0gZ2V0QXRvbSh2YWx1ZSwgcHJvcGVydHkpO1xyXG4gICAgICAgIHJldHVybiBpc0NvbXB1dGVkVmFsdWUoYXRvbSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNDb21wdXRlZFZhbHVlKHZhbHVlKTtcclxufVxyXG5mdW5jdGlvbiBpc0NvbXB1dGVkKHZhbHVlKSB7XHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcbiAgICAgICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgICAgIFwiaXNDb21wdXRlZCBleHBlY3RzIG9ubHkgMSBhcmd1bWVudC4gVXNlIGlzT2JzZXJ2YWJsZVByb3AgdG8gaW5zcGVjdCB0aGUgb2JzZXJ2YWJpbGl0eSBvZiBhIHByb3BlcnR5XCIpO1xyXG4gICAgcmV0dXJuIF9pc0NvbXB1dGVkKHZhbHVlKTtcclxufVxyXG5mdW5jdGlvbiBpc0NvbXB1dGVkUHJvcCh2YWx1ZSwgcHJvcE5hbWUpIHtcclxuICAgIGlmICh0eXBlb2YgcHJvcE5hbWUgIT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgICAgIFwiaXNDb21wdXRlZCBleHBlY3RlZCBhIHByb3BlcnR5IG5hbWUgYXMgc2Vjb25kIGFyZ3VtZW50XCIpO1xyXG4gICAgcmV0dXJuIF9pc0NvbXB1dGVkKHZhbHVlLCBwcm9wTmFtZSk7XHJcbn1cblxuZnVuY3Rpb24gX2lzT2JzZXJ2YWJsZSh2YWx1ZSwgcHJvcGVydHkpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGlmIChwcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICAgICAoaXNPYnNlcnZhYmxlTWFwKHZhbHVlKSB8fCBpc09ic2VydmFibGVBcnJheSh2YWx1ZSkpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFpbChcImlzT2JzZXJ2YWJsZShvYmplY3QsIHByb3BlcnR5TmFtZSkgaXMgbm90IHN1cHBvcnRlZCBmb3IgYXJyYXlzIGFuZCBtYXBzLiBVc2UgbWFwLmhhcyBvciBhcnJheS5sZW5ndGggaW5zdGVhZC5cIik7XHJcbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlWyRtb2J4XS52YWx1ZXMuaGFzKHByb3BlcnR5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gRm9yIGZpcnN0IGNoZWNrLCBzZWUgIzcwMVxyXG4gICAgcmV0dXJuIChpc09ic2VydmFibGVPYmplY3QodmFsdWUpIHx8XHJcbiAgICAgICAgISF2YWx1ZVskbW9ieF0gfHxcclxuICAgICAgICBpc0F0b20odmFsdWUpIHx8XHJcbiAgICAgICAgaXNSZWFjdGlvbih2YWx1ZSkgfHxcclxuICAgICAgICBpc0NvbXB1dGVkVmFsdWUodmFsdWUpKTtcclxufVxyXG5mdW5jdGlvbiBpc09ic2VydmFibGUodmFsdWUpIHtcclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICE9PSAxKVxyXG4gICAgICAgIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgICAgIFwiaXNPYnNlcnZhYmxlIGV4cGVjdHMgb25seSAxIGFyZ3VtZW50LiBVc2UgaXNPYnNlcnZhYmxlUHJvcCB0byBpbnNwZWN0IHRoZSBvYnNlcnZhYmlsaXR5IG9mIGEgcHJvcGVydHlcIik7XHJcbiAgICByZXR1cm4gX2lzT2JzZXJ2YWJsZSh2YWx1ZSk7XHJcbn1cclxuZnVuY3Rpb24gaXNPYnNlcnZhYmxlUHJvcCh2YWx1ZSwgcHJvcE5hbWUpIHtcclxuICAgIGlmICh0eXBlb2YgcHJvcE5hbWUgIT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIFwiZXhwZWN0ZWQgYSBwcm9wZXJ0eSBuYW1lIGFzIHNlY29uZCBhcmd1bWVudFwiKTtcclxuICAgIHJldHVybiBfaXNPYnNlcnZhYmxlKHZhbHVlLCBwcm9wTmFtZSk7XHJcbn1cblxuZnVuY3Rpb24ga2V5cyhvYmopIHtcclxuICAgIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xyXG4gICAgICAgIHJldHVybiBvYmpbJG1vYnhdLmdldEtleXMoKTtcclxuICAgIH1cclxuICAgIGlmIChpc09ic2VydmFibGVNYXAob2JqKSkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG9iai5rZXlzKCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZVNldChvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20ob2JqLmtleXMoKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xyXG4gICAgICAgIHJldHVybiBvYmoubWFwKGZ1bmN0aW9uIChfLCBpbmRleCkgeyByZXR1cm4gaW5kZXg7IH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgXCIna2V5cygpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzLCBzZXRzIGFuZCBtYXBzXCIpO1xyXG59XHJcbmZ1bmN0aW9uIHZhbHVlcyhvYmopIHtcclxuICAgIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xyXG4gICAgICAgIHJldHVybiBrZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIG9ialtrZXldOyB9KTtcclxuICAgIH1cclxuICAgIGlmIChpc09ic2VydmFibGVNYXAob2JqKSkge1xyXG4gICAgICAgIHJldHVybiBrZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIG9iai5nZXQoa2V5KTsgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlU2V0KG9iaikpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShvYmoudmFsdWVzKCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KG9iaikpIHtcclxuICAgICAgICByZXR1cm4gb2JqLnNsaWNlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgICAgICBcIid2YWx1ZXMoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cywgc2V0cyBhbmQgbWFwc1wiKTtcclxufVxyXG5mdW5jdGlvbiBlbnRyaWVzKG9iaikge1xyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdChvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gW2tleSwgb2JqW2tleV1dOyB9KTtcclxuICAgIH1cclxuICAgIGlmIChpc09ic2VydmFibGVNYXAob2JqKSkge1xyXG4gICAgICAgIHJldHVybiBrZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIFtrZXksIG9iai5nZXQoa2V5KV07IH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZVNldChvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20ob2JqLmVudHJpZXMoKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xyXG4gICAgICAgIHJldHVybiBvYmoubWFwKGZ1bmN0aW9uIChrZXksIGluZGV4KSB7IHJldHVybiBbaW5kZXgsIGtleV07IH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgXCInZW50cmllcygpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCBtYXBzXCIpO1xyXG59XHJcbmZ1bmN0aW9uIHNldChvYmosIGtleSwgdmFsdWUpIHtcclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmICFpc09ic2VydmFibGVTZXQob2JqKSkge1xyXG4gICAgICAgIHN0YXJ0QmF0Y2goKTtcclxuICAgICAgICB2YXIgdmFsdWVzXzEgPSBrZXk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZm9yICh2YXIga2V5XzEgaW4gdmFsdWVzXzEpXHJcbiAgICAgICAgICAgICAgICBzZXQob2JqLCBrZXlfMSwgdmFsdWVzXzFba2V5XzFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIGVuZEJhdGNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xyXG4gICAgICAgIHZhciBhZG0gPSBvYmpbJG1vYnhdO1xyXG4gICAgICAgIHZhciBleGlzdGluZ09ic2VydmFibGUgPSBhZG0udmFsdWVzLmdldChrZXkpO1xyXG4gICAgICAgIGlmIChleGlzdGluZ09ic2VydmFibGUpIHtcclxuICAgICAgICAgICAgYWRtLndyaXRlKGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYWRtLmFkZE9ic2VydmFibGVQcm9wKGtleSwgdmFsdWUsIGFkbS5kZWZhdWx0RW5oYW5jZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZU1hcChvYmopKSB7XHJcbiAgICAgICAgb2JqLnNldChrZXksIHZhbHVlKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZVNldChvYmopKSB7XHJcbiAgICAgICAgb2JqLmFkZChrZXkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xyXG4gICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICBrZXkgPSBwYXJzZUludChrZXksIDEwKTtcclxuICAgICAgICBpbnZhcmlhbnQoa2V5ID49IDAsIFwiTm90IGEgdmFsaWQgaW5kZXg6ICdcIiArIGtleSArIFwiJ1wiKTtcclxuICAgICAgICBzdGFydEJhdGNoKCk7XHJcbiAgICAgICAgaWYgKGtleSA+PSBvYmoubGVuZ3RoKVxyXG4gICAgICAgICAgICBvYmoubGVuZ3RoID0ga2V5ICsgMTtcclxuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIGVuZEJhdGNoKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgICAgICAgICAgXCInc2V0KCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMgYW5kIG1hcHNcIik7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcmVtb3ZlKG9iaiwga2V5KSB7XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KG9iaikpIHtcclxuICAgICAgICBvYmpbJG1vYnhdLnJlbW92ZShrZXkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlTWFwKG9iaikpIHtcclxuICAgICAgICBvYmouZGVsZXRlKGtleSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVTZXQob2JqKSkge1xyXG4gICAgICAgIG9iai5kZWxldGUoa2V5KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KG9iaikpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAga2V5ID0gcGFyc2VJbnQoa2V5LCAxMCk7XHJcbiAgICAgICAgaW52YXJpYW50KGtleSA+PSAwLCBcIk5vdCBhIHZhbGlkIGluZGV4OiAnXCIgKyBrZXkgKyBcIidcIik7XHJcbiAgICAgICAgb2JqLnNwbGljZShrZXksIDEpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgICAgIFwiJ3JlbW92ZSgpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCBtYXBzXCIpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGhhcyhvYmosIGtleSkge1xyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdChvYmopKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIGtleXMob2JqKS5pbmRleE9mKGtleSkgPj0gMFxyXG4gICAgICAgIHZhciBhZG0gPSBnZXRBZG1pbmlzdHJhdGlvbihvYmopO1xyXG4gICAgICAgIHJldHVybiBhZG0uaGFzKGtleSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVNYXAob2JqKSkge1xyXG4gICAgICAgIHJldHVybiBvYmouaGFzKGtleSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVTZXQob2JqKSkge1xyXG4gICAgICAgIHJldHVybiBvYmouaGFzKGtleSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVBcnJheShvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleSA+PSAwICYmIGtleSA8IG9iai5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgICAgICAgICAgXCInaGFzKCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMgYW5kIG1hcHNcIik7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0KG9iaiwga2V5KSB7XHJcbiAgICBpZiAoIWhhcyhvYmosIGtleSkpXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xyXG4gICAgICAgIHJldHVybiBvYmpba2V5XTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZU1hcChvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iai5nZXQoa2V5KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KG9iaikpIHtcclxuICAgICAgICByZXR1cm4gb2JqW2tleV07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgICAgICAgICAgXCInZ2V0KCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMgYW5kIG1hcHNcIik7XHJcbiAgICB9XHJcbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZSh0aGluZywgcHJvcE9yQ2IsIGNiT3JGaXJlLCBmaXJlSW1tZWRpYXRlbHkpIHtcclxuICAgIGlmICh0eXBlb2YgY2JPckZpcmUgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICByZXR1cm4gb2JzZXJ2ZU9ic2VydmFibGVQcm9wZXJ0eSh0aGluZywgcHJvcE9yQ2IsIGNiT3JGaXJlLCBmaXJlSW1tZWRpYXRlbHkpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBvYnNlcnZlT2JzZXJ2YWJsZSh0aGluZywgcHJvcE9yQ2IsIGNiT3JGaXJlKTtcclxufVxyXG5mdW5jdGlvbiBvYnNlcnZlT2JzZXJ2YWJsZSh0aGluZywgbGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSkge1xyXG4gICAgcmV0dXJuIGdldEFkbWluaXN0cmF0aW9uKHRoaW5nKS5vYnNlcnZlKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpO1xyXG59XHJcbmZ1bmN0aW9uIG9ic2VydmVPYnNlcnZhYmxlUHJvcGVydHkodGhpbmcsIHByb3BlcnR5LCBsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XHJcbiAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcsIHByb3BlcnR5KS5vYnNlcnZlKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpO1xyXG59XG5cbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIGRldGVjdEN5Y2xlczogdHJ1ZSxcclxuICAgIGV4cG9ydE1hcHNBc09iamVjdHM6IHRydWUsXHJcbiAgICByZWN1cnNlRXZlcnl0aGluZzogZmFsc2VcclxufTtcclxuZnVuY3Rpb24gY2FjaGUobWFwLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgICBpZiAob3B0aW9ucy5kZXRlY3RDeWNsZXMpXHJcbiAgICAgICAgbWFwLnNldChrZXksIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5mdW5jdGlvbiB0b0pTSGVscGVyKHNvdXJjZSwgb3B0aW9ucywgX19hbHJlYWR5U2Vlbikge1xyXG4gICAgaWYgKCFvcHRpb25zLnJlY3Vyc2VFdmVyeXRoaW5nICYmICFpc09ic2VydmFibGUoc291cmNlKSlcclxuICAgICAgICByZXR1cm4gc291cmNlO1xyXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09IFwib2JqZWN0XCIpXHJcbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcclxuICAgIC8vIERpcmVjdGx5IHJldHVybiBudWxsIGlmIHNvdXJjZSBpcyBudWxsXHJcbiAgICBpZiAoc291cmNlID09PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgLy8gRGlyZWN0bHkgcmV0dXJuIHRoZSBEYXRlIG9iamVjdCBpdHNlbGYgaWYgY29udGFpbmVkIGluIHRoZSBvYnNlcnZhYmxlXHJcbiAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgRGF0ZSlcclxuICAgICAgICByZXR1cm4gc291cmNlO1xyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZVZhbHVlKHNvdXJjZSkpXHJcbiAgICAgICAgcmV0dXJuIHRvSlNIZWxwZXIoc291cmNlLmdldCgpLCBvcHRpb25zLCBfX2FscmVhZHlTZWVuKTtcclxuICAgIC8vIG1ha2Ugc3VyZSB3ZSB0cmFjayB0aGUga2V5cyBvZiB0aGUgb2JqZWN0XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlKHNvdXJjZSkpXHJcbiAgICAgICAga2V5cyhzb3VyY2UpO1xyXG4gICAgdmFyIGRldGVjdEN5Y2xlcyA9IG9wdGlvbnMuZGV0ZWN0Q3ljbGVzID09PSB0cnVlO1xyXG4gICAgaWYgKGRldGVjdEN5Y2xlcyAmJiBzb3VyY2UgIT09IG51bGwgJiYgX19hbHJlYWR5U2Vlbi5oYXMoc291cmNlKSkge1xyXG4gICAgICAgIHJldHVybiBfX2FscmVhZHlTZWVuLmdldChzb3VyY2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KHNvdXJjZSkgfHwgQXJyYXkuaXNBcnJheShzb3VyY2UpKSB7XHJcbiAgICAgICAgdmFyIHJlc18xID0gY2FjaGUoX19hbHJlYWR5U2Vlbiwgc291cmNlLCBbXSwgb3B0aW9ucyk7XHJcbiAgICAgICAgdmFyIHRvQWRkID0gc291cmNlLm1hcChmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHRvSlNIZWxwZXIodmFsdWUsIG9wdGlvbnMsIF9fYWxyZWFkeVNlZW4pOyB9KTtcclxuICAgICAgICByZXNfMS5sZW5ndGggPSB0b0FkZC5sZW5ndGg7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0b0FkZC5sZW5ndGg7IGkgPCBsOyBpKyspXHJcbiAgICAgICAgICAgIHJlc18xW2ldID0gdG9BZGRbaV07XHJcbiAgICAgICAgcmV0dXJuIHJlc18xO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZVNldChzb3VyY2UpIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihzb3VyY2UpID09PSBTZXQucHJvdG90eXBlKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuZXhwb3J0TWFwc0FzT2JqZWN0cyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdmFyIHJlc18yID0gY2FjaGUoX19hbHJlYWR5U2Vlbiwgc291cmNlLCBuZXcgU2V0KCksIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJlc18yLmFkZCh0b0pTSGVscGVyKHZhbHVlLCBvcHRpb25zLCBfX2FscmVhZHlTZWVuKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzXzI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcmVzXzMgPSBjYWNoZShfX2FscmVhZHlTZWVuLCBzb3VyY2UsIFtdLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXNfMy5wdXNoKHRvSlNIZWxwZXIodmFsdWUsIG9wdGlvbnMsIF9fYWxyZWFkeVNlZW4pKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNfMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlTWFwKHNvdXJjZSkgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHNvdXJjZSkgPT09IE1hcC5wcm90b3R5cGUpIHtcclxuICAgICAgICBpZiAob3B0aW9ucy5leHBvcnRNYXBzQXNPYmplY3RzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB2YXIgcmVzXzQgPSBjYWNoZShfX2FscmVhZHlTZWVuLCBzb3VyY2UsIG5ldyBNYXAoKSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICByZXNfNC5zZXQoa2V5LCB0b0pTSGVscGVyKHZhbHVlLCBvcHRpb25zLCBfX2FscmVhZHlTZWVuKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzXzQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcmVzXzUgPSBjYWNoZShfX2FscmVhZHlTZWVuLCBzb3VyY2UsIHt9LCBvcHRpb25zKTtcclxuICAgICAgICAgICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJlc181W2tleV0gPSB0b0pTSGVscGVyKHZhbHVlLCBvcHRpb25zLCBfX2FscmVhZHlTZWVuKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNfNTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBGYWxsYmFjayB0byB0aGUgc2l0dWF0aW9uIHRoYXQgc291cmNlIGlzIGFuIE9ic2VydmFibGVPYmplY3Qgb3IgYSBwbGFpbiBvYmplY3RcclxuICAgIHZhciByZXMgPSBjYWNoZShfX2FscmVhZHlTZWVuLCBzb3VyY2UsIHt9LCBvcHRpb25zKTtcclxuICAgIGdldFBsYWluT2JqZWN0S2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIHJlc1trZXldID0gdG9KU0hlbHBlcihzb3VyY2Vba2V5XSwgb3B0aW9ucywgX19hbHJlYWR5U2Vlbik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXM7XHJcbn1cclxuZnVuY3Rpb24gdG9KUyhzb3VyY2UsIG9wdGlvbnMpIHtcclxuICAgIC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJib29sZWFuXCIpXHJcbiAgICAgICAgb3B0aW9ucyA9IHsgZGV0ZWN0Q3ljbGVzOiBvcHRpb25zIH07XHJcbiAgICBpZiAoIW9wdGlvbnMpXHJcbiAgICAgICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xyXG4gICAgb3B0aW9ucy5kZXRlY3RDeWNsZXMgPVxyXG4gICAgICAgIG9wdGlvbnMuZGV0ZWN0Q3ljbGVzID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBvcHRpb25zLnJlY3Vyc2VFdmVyeXRoaW5nID09PSB0cnVlXHJcbiAgICAgICAgICAgIDogb3B0aW9ucy5kZXRlY3RDeWNsZXMgPT09IHRydWU7XHJcbiAgICB2YXIgX19hbHJlYWR5U2VlbjtcclxuICAgIGlmIChvcHRpb25zLmRldGVjdEN5Y2xlcylcclxuICAgICAgICBfX2FscmVhZHlTZWVuID0gbmV3IE1hcCgpO1xyXG4gICAgcmV0dXJuIHRvSlNIZWxwZXIoc291cmNlLCBvcHRpb25zLCBfX2FscmVhZHlTZWVuKTtcclxufVxuXG5mdW5jdGlvbiB0cmFjZSgpIHtcclxuICAgIHZhciBhcmdzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHZhciBlbnRlckJyZWFrUG9pbnQgPSBmYWxzZTtcclxuICAgIGlmICh0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdID09PSBcImJvb2xlYW5cIilcclxuICAgICAgICBlbnRlckJyZWFrUG9pbnQgPSBhcmdzLnBvcCgpO1xyXG4gICAgdmFyIGRlcml2YXRpb24gPSBnZXRBdG9tRnJvbUFyZ3MoYXJncyk7XHJcbiAgICBpZiAoIWRlcml2YXRpb24pIHtcclxuICAgICAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgICAgICAgICAgXCIndHJhY2UoYnJlYWs/KScgY2FuIG9ubHkgYmUgdXNlZCBpbnNpZGUgYSB0cmFja2VkIGNvbXB1dGVkIHZhbHVlIG9yIGEgUmVhY3Rpb24uIENvbnNpZGVyIHBhc3NpbmcgaW4gdGhlIGNvbXB1dGVkIHZhbHVlIG9yIHJlYWN0aW9uIGV4cGxpY2l0bHlcIik7XHJcbiAgICB9XHJcbiAgICBpZiAoZGVyaXZhdGlvbi5pc1RyYWNpbmcgPT09IFRyYWNlTW9kZS5OT05FKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJbbW9ieC50cmFjZV0gJ1wiICsgZGVyaXZhdGlvbi5uYW1lICsgXCInIHRyYWNpbmcgZW5hYmxlZFwiKTtcclxuICAgIH1cclxuICAgIGRlcml2YXRpb24uaXNUcmFjaW5nID0gZW50ZXJCcmVha1BvaW50ID8gVHJhY2VNb2RlLkJSRUFLIDogVHJhY2VNb2RlLkxPRztcclxufVxyXG5mdW5jdGlvbiBnZXRBdG9tRnJvbUFyZ3MoYXJncykge1xyXG4gICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgcmV0dXJuIGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbjtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRBdG9tKGFyZ3NbMF0pO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgcmV0dXJuIGdldEF0b20oYXJnc1swXSwgYXJnc1sxXSk7XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIER1cmluZyBhIHRyYW5zYWN0aW9uIG5vIHZpZXdzIGFyZSB1cGRhdGVkIHVudGlsIHRoZSBlbmQgb2YgdGhlIHRyYW5zYWN0aW9uLlxyXG4gKiBUaGUgdHJhbnNhY3Rpb24gd2lsbCBiZSBydW4gc3luY2hyb25vdXNseSBub25ldGhlbGVzcy5cclxuICpcclxuICogQHBhcmFtIGFjdGlvbiBhIGZ1bmN0aW9uIHRoYXQgdXBkYXRlcyBzb21lIHJlYWN0aXZlIHN0YXRlXHJcbiAqIEByZXR1cm5zIGFueSB2YWx1ZSB0aGF0IHdhcyByZXR1cm5lZCBieSB0aGUgJ2FjdGlvbicgcGFyYW1ldGVyLlxyXG4gKi9cclxuZnVuY3Rpb24gdHJhbnNhY3Rpb24oYWN0aW9uLCB0aGlzQXJnKSB7XHJcbiAgICBpZiAodGhpc0FyZyA9PT0gdm9pZCAwKSB7IHRoaXNBcmcgPSB1bmRlZmluZWQ7IH1cclxuICAgIHN0YXJ0QmF0Y2goKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5hcHBseSh0aGlzQXJnKTtcclxuICAgIH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIGVuZEJhdGNoKCk7XHJcbiAgICB9XHJcbn1cblxuZnVuY3Rpb24gd2hlbihwcmVkaWNhdGUsIGFyZzEsIGFyZzIpIHtcclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxIHx8IChhcmcxICYmIHR5cGVvZiBhcmcxID09PSBcIm9iamVjdFwiKSlcclxuICAgICAgICByZXR1cm4gd2hlblByb21pc2UocHJlZGljYXRlLCBhcmcxKTtcclxuICAgIHJldHVybiBfd2hlbihwcmVkaWNhdGUsIGFyZzEsIGFyZzIgfHwge30pO1xyXG59XHJcbmZ1bmN0aW9uIF93aGVuKHByZWRpY2F0ZSwgZWZmZWN0LCBvcHRzKSB7XHJcbiAgICB2YXIgdGltZW91dEhhbmRsZTtcclxuICAgIGlmICh0eXBlb2Ygb3B0cy50aW1lb3V0ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgdGltZW91dEhhbmRsZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIWRpc3Bvc2VyWyRtb2J4XS5pc0Rpc3Bvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwb3NlcigpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKFwiV0hFTl9USU1FT1VUXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdHMub25FcnJvcilcclxuICAgICAgICAgICAgICAgICAgICBvcHRzLm9uRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgb3B0cy50aW1lb3V0KTtcclxuICAgIH1cclxuICAgIG9wdHMubmFtZSA9IG9wdHMubmFtZSB8fCBcIldoZW5AXCIgKyBnZXROZXh0SWQoKTtcclxuICAgIHZhciBlZmZlY3RBY3Rpb24gPSBjcmVhdGVBY3Rpb24ob3B0cy5uYW1lICsgXCItZWZmZWN0XCIsIGVmZmVjdCk7XHJcbiAgICB2YXIgZGlzcG9zZXIgPSBhdXRvcnVuKGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgaWYgKHByZWRpY2F0ZSgpKSB7XHJcbiAgICAgICAgICAgIHIuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICBpZiAodGltZW91dEhhbmRsZSlcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SGFuZGxlKTtcclxuICAgICAgICAgICAgZWZmZWN0QWN0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgb3B0cyk7XHJcbiAgICByZXR1cm4gZGlzcG9zZXI7XHJcbn1cclxuZnVuY3Rpb24gd2hlblByb21pc2UocHJlZGljYXRlLCBvcHRzKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG9wdHMgJiYgb3B0cy5vbkVycm9yKVxyXG4gICAgICAgIHJldHVybiBmYWlsKFwidGhlIG9wdGlvbnMgJ29uRXJyb3InIGFuZCAncHJvbWlzZScgY2Fubm90IGJlIGNvbWJpbmVkXCIpO1xyXG4gICAgdmFyIGNhbmNlbDtcclxuICAgIHZhciByZXMgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgdmFyIGRpc3Bvc2VyID0gX3doZW4ocHJlZGljYXRlLCByZXNvbHZlLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0cyksIHsgb25FcnJvcjogcmVqZWN0IH0pKTtcclxuICAgICAgICBjYW5jZWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGRpc3Bvc2VyKCk7XHJcbiAgICAgICAgICAgIHJlamVjdChcIldIRU5fQ0FOQ0VMTEVEXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHJlcy5jYW5jZWwgPSBjYW5jZWw7XHJcbiAgICByZXR1cm4gcmVzO1xyXG59XG5cbmZ1bmN0aW9uIGdldEFkbSh0YXJnZXQpIHtcclxuICAgIHJldHVybiB0YXJnZXRbJG1vYnhdO1xyXG59XHJcbmZ1bmN0aW9uIGlzUHJvcGVydHlLZXkodmFsKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsID09PSBcIm51bWJlclwiIHx8IHR5cGVvZiB2YWwgPT09IFwic3ltYm9sXCI7XHJcbn1cclxuLy8gT3B0aW1pemF0aW9uOiB3ZSBkb24ndCBuZWVkIHRoZSBpbnRlcm1lZGlhdGUgb2JqZWN0cyBhbmQgY291bGQgaGF2ZSBhIGNvbXBsZXRlbHkgY3VzdG9tIGFkbWluaXN0cmF0aW9uIGZvciBEeW5hbWljT2JqZWN0cyxcclxuLy8gYW5kIHNraXAgZWl0aGVyIHRoZSBpbnRlcm5hbCB2YWx1ZXMgbWFwLCBvciB0aGUgYmFzZSBvYmplY3Qgd2l0aCBpdHMgcHJvcGVydHkgZGVzY3JpcHRvcnMhXHJcbnZhciBvYmplY3RQcm94eVRyYXBzID0ge1xyXG4gICAgaGFzOiBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lKSB7XHJcbiAgICAgICAgaWYgKG5hbWUgPT09ICRtb2J4IHx8IG5hbWUgPT09IFwiY29uc3RydWN0b3JcIiB8fCBuYW1lID09PSBtb2J4RGlkUnVuTGF6eUluaXRpYWxpemVyc1N5bWJvbClcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgdmFyIGFkbSA9IGdldEFkbSh0YXJnZXQpO1xyXG4gICAgICAgIC8vIE1XRTogc2hvdWxkIGBpbmAgb3BlcmF0b3IgYmUgcmVhY3RpdmU/IElmIG5vdCwgYmVsb3cgY29kZSBwYXRoIHdpbGwgYmUgZmFzdGVyIC8gbW9yZSBtZW1vcnkgZWZmaWNpZW50XHJcbiAgICAgICAgLy8gVE9ETzogY2hlY2sgcGVyZm9ybWFuY2Ugc3RhdHMhXHJcbiAgICAgICAgLy8gaWYgKGFkbS52YWx1ZXMuZ2V0KG5hbWUgYXMgc3RyaW5nKSkgcmV0dXJuIHRydWVcclxuICAgICAgICBpZiAoaXNQcm9wZXJ0eUtleShuYW1lKSlcclxuICAgICAgICAgICAgcmV0dXJuIGFkbS5oYXMobmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gdGFyZ2V0O1xyXG4gICAgfSxcclxuICAgIGdldDogZnVuY3Rpb24gKHRhcmdldCwgbmFtZSkge1xyXG4gICAgICAgIGlmIChuYW1lID09PSAkbW9ieCB8fCBuYW1lID09PSBcImNvbnN0cnVjdG9yXCIgfHwgbmFtZSA9PT0gbW9ieERpZFJ1bkxhenlJbml0aWFsaXplcnNTeW1ib2wpXHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRbbmFtZV07XHJcbiAgICAgICAgdmFyIGFkbSA9IGdldEFkbSh0YXJnZXQpO1xyXG4gICAgICAgIHZhciBvYnNlcnZhYmxlID0gYWRtLnZhbHVlcy5nZXQobmFtZSk7XHJcbiAgICAgICAgaWYgKG9ic2VydmFibGUgaW5zdGFuY2VvZiBBdG9tKSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBvYnNlcnZhYmxlLmdldCgpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgZml4ZXMgIzE3OTYsIGJlY2F1c2UgZGVsZXRpbmcgYSBwcm9wIHRoYXQgaGFzIGFuXHJcbiAgICAgICAgICAgICAgICAvLyB1bmRlZmluZWQgdmFsdWUgd29uJ3QgcmV0cmlnZ2VyIGEgb2JzZXJ2ZXIgKG5vIHZpc2libGUgZWZmZWN0KSxcclxuICAgICAgICAgICAgICAgIC8vIHRoZSBhdXRvcnVuIHdvdWxkbid0IHN1YnNjcmliZSB0byBmdXR1cmUga2V5IGNoYW5nZXMgKHNlZSBhbHNvIG5leHQgY29tbWVudClcclxuICAgICAgICAgICAgICAgIGFkbS5oYXMobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbWFrZSBzdXJlIHdlIHN0YXJ0IGxpc3RlbmluZyB0byBmdXR1cmUga2V5c1xyXG4gICAgICAgIC8vIG5vdGUgdGhhdCB3ZSBvbmx5IGRvIHRoaXMgaGVyZSBmb3Igb3B0aW1pemF0aW9uXHJcbiAgICAgICAgaWYgKGlzUHJvcGVydHlLZXkobmFtZSkpXHJcbiAgICAgICAgICAgIGFkbS5oYXMobmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldFtuYW1lXTtcclxuICAgIH0sXHJcbiAgICBzZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCFpc1Byb3BlcnR5S2V5KG5hbWUpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgc2V0KHRhcmdldCwgbmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuICAgIGRlbGV0ZVByb3BlcnR5OiBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lKSB7XHJcbiAgICAgICAgaWYgKCFpc1Byb3BlcnR5S2V5KG5hbWUpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgdmFyIGFkbSA9IGdldEFkbSh0YXJnZXQpO1xyXG4gICAgICAgIGFkbS5yZW1vdmUobmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgb3duS2V5czogZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIHZhciBhZG0gPSBnZXRBZG0odGFyZ2V0KTtcclxuICAgICAgICBhZG0ua2V5c0F0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5vd25LZXlzKHRhcmdldCk7XHJcbiAgICB9LFxyXG4gICAgcHJldmVudEV4dGVuc2lvbnM6IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICBmYWlsKFwiRHluYW1pYyBvYnNlcnZhYmxlIG9iamVjdHMgY2Fubm90IGJlIGZyb3plblwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn07XHJcbmZ1bmN0aW9uIGNyZWF0ZUR5bmFtaWNPYnNlcnZhYmxlT2JqZWN0KGJhc2UpIHtcclxuICAgIHZhciBwcm94eSA9IG5ldyBQcm94eShiYXNlLCBvYmplY3RQcm94eVRyYXBzKTtcclxuICAgIGJhc2VbJG1vYnhdLnByb3h5ID0gcHJveHk7XHJcbiAgICByZXR1cm4gcHJveHk7XHJcbn1cblxuZnVuY3Rpb24gaGFzSW50ZXJjZXB0b3JzKGludGVyY2VwdGFibGUpIHtcclxuICAgIHJldHVybiBpbnRlcmNlcHRhYmxlLmludGVyY2VwdG9ycyAhPT0gdW5kZWZpbmVkICYmIGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzLmxlbmd0aCA+IDA7XHJcbn1cclxuZnVuY3Rpb24gcmVnaXN0ZXJJbnRlcmNlcHRvcihpbnRlcmNlcHRhYmxlLCBoYW5kbGVyKSB7XHJcbiAgICB2YXIgaW50ZXJjZXB0b3JzID0gaW50ZXJjZXB0YWJsZS5pbnRlcmNlcHRvcnMgfHwgKGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzID0gW10pO1xyXG4gICAgaW50ZXJjZXB0b3JzLnB1c2goaGFuZGxlcik7XHJcbiAgICByZXR1cm4gb25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGlkeCA9IGludGVyY2VwdG9ycy5pbmRleE9mKGhhbmRsZXIpO1xyXG4gICAgICAgIGlmIChpZHggIT09IC0xKVxyXG4gICAgICAgICAgICBpbnRlcmNlcHRvcnMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBpbnRlcmNlcHRDaGFuZ2UoaW50ZXJjZXB0YWJsZSwgY2hhbmdlKSB7XHJcbiAgICB2YXIgcHJldlUgPSB1bnRyYWNrZWRTdGFydCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBJbnRlcmNlcHRvciBjYW4gbW9kaWZ5IHRoZSBhcnJheSwgY29weSBpdCB0byBhdm9pZCBjb25jdXJyZW50IG1vZGlmaWNhdGlvbiwgc2VlICMxOTUwXHJcbiAgICAgICAgdmFyIGludGVyY2VwdG9ycyA9IF9fc3ByZWFkKChpbnRlcmNlcHRhYmxlLmludGVyY2VwdG9ycyB8fCBbXSkpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gaW50ZXJjZXB0b3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBjaGFuZ2UgPSBpbnRlcmNlcHRvcnNbaV0oY2hhbmdlKTtcclxuICAgICAgICAgICAgaW52YXJpYW50KCFjaGFuZ2UgfHwgY2hhbmdlLnR5cGUsIFwiSW50ZXJjZXB0IGhhbmRsZXJzIHNob3VsZCByZXR1cm4gbm90aGluZyBvciBhIGNoYW5nZSBvYmplY3RcIik7XHJcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaGFuZ2U7XHJcbiAgICB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB1bnRyYWNrZWRFbmQocHJldlUpO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIGhhc0xpc3RlbmVycyhsaXN0ZW5hYmxlKSB7XHJcbiAgICByZXR1cm4gbGlzdGVuYWJsZS5jaGFuZ2VMaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCAmJiBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVycy5sZW5ndGggPiAwO1xyXG59XHJcbmZ1bmN0aW9uIHJlZ2lzdGVyTGlzdGVuZXIobGlzdGVuYWJsZSwgaGFuZGxlcikge1xyXG4gICAgdmFyIGxpc3RlbmVycyA9IGxpc3RlbmFibGUuY2hhbmdlTGlzdGVuZXJzIHx8IChsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVycyA9IFtdKTtcclxuICAgIGxpc3RlbmVycy5wdXNoKGhhbmRsZXIpO1xyXG4gICAgcmV0dXJuIG9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpZHggPSBsaXN0ZW5lcnMuaW5kZXhPZihoYW5kbGVyKTtcclxuICAgICAgICBpZiAoaWR4ICE9PSAtMSlcclxuICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gbm90aWZ5TGlzdGVuZXJzKGxpc3RlbmFibGUsIGNoYW5nZSkge1xyXG4gICAgdmFyIHByZXZVID0gdW50cmFja2VkU3RhcnQoKTtcclxuICAgIHZhciBsaXN0ZW5lcnMgPSBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVycztcclxuICAgIGlmICghbGlzdGVuZXJzKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSgpO1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgbGlzdGVuZXJzW2ldKGNoYW5nZSk7XHJcbiAgICB9XHJcbiAgICB1bnRyYWNrZWRFbmQocHJldlUpO1xyXG59XG5cbnZhciBNQVhfU1BMSUNFX1NJWkUgPSAxMDAwMDsgLy8gU2VlIGUuZy4gaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L2lzc3Vlcy84NTlcclxudmFyIGFycmF5VHJhcHMgPSB7XHJcbiAgICBnZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUpIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gJG1vYngpXHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRbJG1vYnhdO1xyXG4gICAgICAgIGlmIChuYW1lID09PSBcImxlbmd0aFwiKVxyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0WyRtb2J4XS5nZXRBcnJheUxlbmd0aCgpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXlFeHRlbnNpb25zLmdldC5jYWxsKHRhcmdldCwgbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIiAmJiAhaXNOYU4obmFtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5RXh0ZW5zaW9ucy5nZXQuY2FsbCh0YXJnZXQsIHBhcnNlSW50KG5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFycmF5RXh0ZW5zaW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXlFeHRlbnNpb25zW25hbWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0W25hbWVdO1xyXG4gICAgfSxcclxuICAgIHNldDogZnVuY3Rpb24gKHRhcmdldCwgbmFtZSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJsZW5ndGhcIikge1xyXG4gICAgICAgICAgICB0YXJnZXRbJG1vYnhdLnNldEFycmF5TGVuZ3RoKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIGFycmF5RXh0ZW5zaW9ucy5zZXQuY2FsbCh0YXJnZXQsIG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiIHx8IGlzTmFOKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gbnVtZXJpYyBzdHJpbmdcclxuICAgICAgICAgICAgYXJyYXlFeHRlbnNpb25zLnNldC5jYWxsKHRhcmdldCwgcGFyc2VJbnQobmFtZSksIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgcHJldmVudEV4dGVuc2lvbnM6IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICBmYWlsKFwiT2JzZXJ2YWJsZSBhcnJheXMgY2Fubm90IGJlIGZyb3plblwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn07XHJcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmFibGVBcnJheShpbml0aWFsVmFsdWVzLCBlbmhhbmNlciwgbmFtZSwgb3duZWQpIHtcclxuICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwiT2JzZXJ2YWJsZUFycmF5QFwiICsgZ2V0TmV4dElkKCk7IH1cclxuICAgIGlmIChvd25lZCA9PT0gdm9pZCAwKSB7IG93bmVkID0gZmFsc2U7IH1cclxuICAgIHZhciBhZG0gPSBuZXcgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24obmFtZSwgZW5oYW5jZXIsIG93bmVkKTtcclxuICAgIGFkZEhpZGRlbkZpbmFsUHJvcChhZG0udmFsdWVzLCAkbW9ieCwgYWRtKTtcclxuICAgIHZhciBwcm94eSA9IG5ldyBQcm94eShhZG0udmFsdWVzLCBhcnJheVRyYXBzKTtcclxuICAgIGFkbS5wcm94eSA9IHByb3h5O1xyXG4gICAgaWYgKGluaXRpYWxWYWx1ZXMgJiYgaW5pdGlhbFZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgcHJldiA9IGFsbG93U3RhdGVDaGFuZ2VzU3RhcnQodHJ1ZSk7XHJcbiAgICAgICAgYWRtLnNwbGljZVdpdGhBcnJheSgwLCAwLCBpbml0aWFsVmFsdWVzKTtcclxuICAgICAgICBhbGxvd1N0YXRlQ2hhbmdlc0VuZChwcmV2KTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcm94eTtcclxufVxyXG52YXIgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbihuYW1lLCBlbmhhbmNlciwgb3duZWQpIHtcclxuICAgICAgICB0aGlzLm93bmVkID0gb3duZWQ7XHJcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnByb3h5ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMubGFzdEtub3duTGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLmF0b20gPSBuZXcgQXRvbShuYW1lIHx8IFwiT2JzZXJ2YWJsZUFycmF5QFwiICsgZ2V0TmV4dElkKCkpO1xyXG4gICAgICAgIHRoaXMuZW5oYW5jZXIgPSBmdW5jdGlvbiAobmV3Viwgb2xkVikgeyByZXR1cm4gZW5oYW5jZXIobmV3Viwgb2xkViwgbmFtZSArIFwiWy4uXVwiKTsgfTtcclxuICAgIH1cclxuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5kZWhhbmNlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlcih2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5kZWhhbmNlVmFsdWVzID0gZnVuY3Rpb24gKHZhbHVlcykge1xyXG4gICAgICAgIGlmICh0aGlzLmRlaGFuY2VyICE9PSB1bmRlZmluZWQgJiYgdmFsdWVzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXMubWFwKHRoaXMuZGVoYW5jZXIpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLmludGVyY2VwdCA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVySW50ZXJjZXB0b3IodGhpcywgaGFuZGxlcik7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAobGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSkge1xyXG4gICAgICAgIGlmIChmaXJlSW1tZWRpYXRlbHkgPT09IHZvaWQgMCkgeyBmaXJlSW1tZWRpYXRlbHkgPSBmYWxzZTsgfVxyXG4gICAgICAgIGlmIChmaXJlSW1tZWRpYXRlbHkpIHtcclxuICAgICAgICAgICAgbGlzdGVuZXIoe1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzcGxpY2VcIixcclxuICAgICAgICAgICAgICAgIGluZGV4OiAwLFxyXG4gICAgICAgICAgICAgICAgYWRkZWQ6IHRoaXMudmFsdWVzLnNsaWNlKCksXHJcbiAgICAgICAgICAgICAgICBhZGRlZENvdW50OiB0aGlzLnZhbHVlcy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVkOiBbXSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZWRDb3VudDogMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyTGlzdGVuZXIodGhpcywgbGlzdGVuZXIpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5nZXRBcnJheUxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmF0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMubGVuZ3RoO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5zZXRBcnJheUxlbmd0aCA9IGZ1bmN0aW9uIChuZXdMZW5ndGgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG5ld0xlbmd0aCAhPT0gXCJudW1iZXJcIiB8fCBuZXdMZW5ndGggPCAwKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieC5hcnJheV0gT3V0IG9mIHJhbmdlOiBcIiArIG5ld0xlbmd0aCk7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRMZW5ndGggPSB0aGlzLnZhbHVlcy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKG5ld0xlbmd0aCA9PT0gY3VycmVudExlbmd0aClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGVsc2UgaWYgKG5ld0xlbmd0aCA+IGN1cnJlbnRMZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIG5ld0l0ZW1zID0gbmV3IEFycmF5KG5ld0xlbmd0aCAtIGN1cnJlbnRMZW5ndGgpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0xlbmd0aCAtIGN1cnJlbnRMZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgIG5ld0l0ZW1zW2ldID0gdW5kZWZpbmVkOyAvLyBObyBBcnJheS5maWxsIGV2ZXJ5d2hlcmUuLi5cclxuICAgICAgICAgICAgdGhpcy5zcGxpY2VXaXRoQXJyYXkoY3VycmVudExlbmd0aCwgMCwgbmV3SXRlbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc3BsaWNlV2l0aEFycmF5KG5ld0xlbmd0aCwgY3VycmVudExlbmd0aCAtIG5ld0xlbmd0aCk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLnVwZGF0ZUFycmF5TGVuZ3RoID0gZnVuY3Rpb24gKG9sZExlbmd0aCwgZGVsdGEpIHtcclxuICAgICAgICBpZiAob2xkTGVuZ3RoICE9PSB0aGlzLmxhc3RLbm93bkxlbmd0aClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiW21vYnhdIE1vZGlmaWNhdGlvbiBleGNlcHRpb246IHRoZSBpbnRlcm5hbCBzdHJ1Y3R1cmUgb2YgYW4gb2JzZXJ2YWJsZSBhcnJheSB3YXMgY2hhbmdlZC5cIik7XHJcbiAgICAgICAgdGhpcy5sYXN0S25vd25MZW5ndGggKz0gZGVsdGE7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLnNwbGljZVdpdGhBcnJheSA9IGZ1bmN0aW9uIChpbmRleCwgZGVsZXRlQ291bnQsIG5ld0l0ZW1zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCh0aGlzLmF0b20pO1xyXG4gICAgICAgIHZhciBsZW5ndGggPSB0aGlzLnZhbHVlcy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICBlbHNlIGlmIChpbmRleCA+IGxlbmd0aClcclxuICAgICAgICAgICAgaW5kZXggPSBsZW5ndGg7XHJcbiAgICAgICAgZWxzZSBpZiAoaW5kZXggPCAwKVxyXG4gICAgICAgICAgICBpbmRleCA9IE1hdGgubWF4KDAsIGxlbmd0aCArIGluZGV4KTtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSlcclxuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSBsZW5ndGggLSBpbmRleDtcclxuICAgICAgICBlbHNlIGlmIChkZWxldGVDb3VudCA9PT0gdW5kZWZpbmVkIHx8IGRlbGV0ZUNvdW50ID09PSBudWxsKVxyXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDA7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGRlbGV0ZUNvdW50LCBsZW5ndGggLSBpbmRleCkpO1xyXG4gICAgICAgIGlmIChuZXdJdGVtcyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBuZXdJdGVtcyA9IEVNUFRZX0FSUkFZO1xyXG4gICAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcclxuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHksXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNwbGljZVwiLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlZENvdW50OiBkZWxldGVDb3VudCxcclxuICAgICAgICAgICAgICAgIGFkZGVkOiBuZXdJdGVtc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRU1QVFlfQVJSQVk7XHJcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gY2hhbmdlLnJlbW92ZWRDb3VudDtcclxuICAgICAgICAgICAgbmV3SXRlbXMgPSBjaGFuZ2UuYWRkZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld0l0ZW1zID0gbmV3SXRlbXMubGVuZ3RoID09PSAwID8gbmV3SXRlbXMgOiBuZXdJdGVtcy5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIF90aGlzLmVuaGFuY2VyKHYsIHVuZGVmaW5lZCk7IH0pO1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgdmFyIGxlbmd0aERlbHRhID0gbmV3SXRlbXMubGVuZ3RoIC0gZGVsZXRlQ291bnQ7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQXJyYXlMZW5ndGgobGVuZ3RoLCBsZW5ndGhEZWx0YSk7IC8vIGNoZWNrcyBpZiBpbnRlcm5hbCBhcnJheSB3YXNuJ3QgbW9kaWZpZWRcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlcyA9IHRoaXMuc3BsaWNlSXRlbXNJbnRvVmFsdWVzKGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpO1xyXG4gICAgICAgIGlmIChkZWxldGVDb3VudCAhPT0gMCB8fCBuZXdJdGVtcy5sZW5ndGggIT09IDApXHJcbiAgICAgICAgICAgIHRoaXMubm90aWZ5QXJyYXlTcGxpY2UoaW5kZXgsIG5ld0l0ZW1zLCByZXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlaGFuY2VWYWx1ZXMocmVzKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuc3BsaWNlSXRlbXNJbnRvVmFsdWVzID0gZnVuY3Rpb24gKGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgaWYgKG5ld0l0ZW1zLmxlbmd0aCA8IE1BWF9TUExJQ0VfU0laRSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKF9hID0gdGhpcy52YWx1ZXMpLnNwbGljZS5hcHBseShfYSwgX19zcHJlYWQoW2luZGV4LCBkZWxldGVDb3VudF0sIG5ld0l0ZW1zKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcmVzID0gdGhpcy52YWx1ZXMuc2xpY2UoaW5kZXgsIGluZGV4ICsgZGVsZXRlQ291bnQpO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlcyA9IHRoaXMudmFsdWVzXHJcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAuY29uY2F0KG5ld0l0ZW1zLCB0aGlzLnZhbHVlcy5zbGljZShpbmRleCArIGRlbGV0ZUNvdW50KSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5ub3RpZnlBcnJheUNoaWxkVXBkYXRlID0gZnVuY3Rpb24gKGluZGV4LCBuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICB2YXIgbm90aWZ5U3B5ID0gIXRoaXMub3duZWQgJiYgaXNTcHlFbmFibGVkKCk7XHJcbiAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcclxuICAgICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweVxyXG4gICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5wcm94eSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgLy8gVGhlIHJlYXNvbiB3aHkgdGhpcyBpcyBvbiByaWdodCBoYW5kIHNpZGUgaGVyZSAoYW5kIG5vdCBhYm92ZSksIGlzIHRoaXMgd2F5IHRoZSB1Z2xpZmllciB3aWxsIGRyb3AgaXQsIGJ1dCBpdCB3b24ndFxyXG4gICAgICAgIC8vIGNhdXNlIGFueSBydW50aW1lIG92ZXJoZWFkIGluIGRldmVsb3BtZW50IG1vZGUgd2l0aG91dCBOT0RFX0VOViBzZXQsIHVubGVzcyBzcHlpbmcgaXMgZW5hYmxlZFxyXG4gICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgICAgICBzcHlSZXBvcnRTdGFydChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY2hhbmdlKSwgeyBuYW1lOiB0aGlzLmF0b20ubmFtZSB9KSk7XHJcbiAgICAgICAgdGhpcy5hdG9tLnJlcG9ydENoYW5nZWQoKTtcclxuICAgICAgICBpZiAobm90aWZ5KVxyXG4gICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnModGhpcywgY2hhbmdlKTtcclxuICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICAgICAgc3B5UmVwb3J0RW5kKCk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLm5vdGlmeUFycmF5U3BsaWNlID0gZnVuY3Rpb24gKGluZGV4LCBhZGRlZCwgcmVtb3ZlZCkge1xyXG4gICAgICAgIHZhciBub3RpZnlTcHkgPSAhdGhpcy5vd25lZCAmJiBpc1NweUVuYWJsZWQoKTtcclxuICAgICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xyXG4gICAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5XHJcbiAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzcGxpY2VcIixcclxuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICAgICAgICAgIHJlbW92ZWQ6IHJlbW92ZWQsXHJcbiAgICAgICAgICAgICAgICBhZGRlZDogYWRkZWQsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVkQ291bnQ6IHJlbW92ZWQubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRDb3VudDogYWRkZWQubGVuZ3RoXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgICAgICBzcHlSZXBvcnRTdGFydChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY2hhbmdlKSwgeyBuYW1lOiB0aGlzLmF0b20ubmFtZSB9KSk7XHJcbiAgICAgICAgdGhpcy5hdG9tLnJlcG9ydENoYW5nZWQoKTtcclxuICAgICAgICAvLyBjb25mb3JtOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9vYnNlcnZlXHJcbiAgICAgICAgaWYgKG5vdGlmeSlcclxuICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSk7XHJcbiAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXHJcbiAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbjtcclxufSgpKTtcclxudmFyIGFycmF5RXh0ZW5zaW9ucyA9IHtcclxuICAgIGludGVyY2VwdDogZnVuY3Rpb24gKGhhbmRsZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1skbW9ieF0uaW50ZXJjZXB0KGhhbmRsZXIpO1xyXG4gICAgfSxcclxuICAgIG9ic2VydmU6IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XHJcbiAgICAgICAgaWYgKGZpcmVJbW1lZGlhdGVseSA9PT0gdm9pZCAwKSB7IGZpcmVJbW1lZGlhdGVseSA9IGZhbHNlOyB9XHJcbiAgICAgICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xyXG4gICAgICAgIHJldHVybiBhZG0ub2JzZXJ2ZShsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KTtcclxuICAgIH0sXHJcbiAgICBjbGVhcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwbGljZSgwKTtcclxuICAgIH0sXHJcbiAgICByZXBsYWNlOiBmdW5jdGlvbiAobmV3SXRlbXMpIHtcclxuICAgICAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XHJcbiAgICAgICAgcmV0dXJuIGFkbS5zcGxpY2VXaXRoQXJyYXkoMCwgYWRtLnZhbHVlcy5sZW5ndGgsIG5ld0l0ZW1zKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIHRoaXMgYXJyYXkgYmFjayB0byBhIChzaGFsbG93KSBqYXZhc2NyaXB0IHN0cnVjdHVyZS5cclxuICAgICAqIEZvciBhIGRlZXAgY2xvbmUgdXNlIG1vYngudG9KU1xyXG4gICAgICovXHJcbiAgICB0b0pTOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2xpY2UoKTtcclxuICAgIH0sXHJcbiAgICB0b0pTT046IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBVc2VkIGJ5IEpTT04uc3RyaW5naWZ5XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9KUygpO1xyXG4gICAgfSxcclxuICAgIC8qXHJcbiAgICAgKiBmdW5jdGlvbnMgdGhhdCBkbyBhbHRlciB0aGUgaW50ZXJuYWwgc3RydWN0dXJlIG9mIHRoZSBhcnJheSwgKGJhc2VkIG9uIGxpYi5lczYuZC50cylcclxuICAgICAqIHNpbmNlIHRoZXNlIGZ1bmN0aW9ucyBhbHRlciB0aGUgaW5uZXIgc3RydWN0dXJlIG9mIHRoZSBhcnJheSwgdGhlIGhhdmUgc2lkZSBlZmZlY3RzLlxyXG4gICAgICogQmVjYXVzZSB0aGUgaGF2ZSBzaWRlIGVmZmVjdHMsIHRoZXkgc2hvdWxkIG5vdCBiZSB1c2VkIGluIGNvbXB1dGVkIGZ1bmN0aW9uLFxyXG4gICAgICogYW5kIGZvciB0aGF0IHJlYXNvbiB0aGUgZG8gbm90IGNhbGwgZGVwZW5kZW5jeVN0YXRlLm5vdGlmeU9ic2VydmVkXHJcbiAgICAgKi9cclxuICAgIHNwbGljZTogZnVuY3Rpb24gKGluZGV4LCBkZWxldGVDb3VudCkge1xyXG4gICAgICAgIHZhciBuZXdJdGVtcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIG5ld0l0ZW1zW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XHJcbiAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkbS5zcGxpY2VXaXRoQXJyYXkoaW5kZXgpO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWRtLnNwbGljZVdpdGhBcnJheShpbmRleCwgZGVsZXRlQ291bnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWRtLnNwbGljZVdpdGhBcnJheShpbmRleCwgZGVsZXRlQ291bnQsIG5ld0l0ZW1zKTtcclxuICAgIH0sXHJcbiAgICBzcGxpY2VXaXRoQXJyYXk6IGZ1bmN0aW9uIChpbmRleCwgZGVsZXRlQ291bnQsIG5ld0l0ZW1zKSB7XHJcbiAgICAgICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xyXG4gICAgICAgIHJldHVybiBhZG0uc3BsaWNlV2l0aEFycmF5KGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpO1xyXG4gICAgfSxcclxuICAgIHB1c2g6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBpdGVtc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XHJcbiAgICAgICAgYWRtLnNwbGljZVdpdGhBcnJheShhZG0udmFsdWVzLmxlbmd0aCwgMCwgaXRlbXMpO1xyXG4gICAgICAgIHJldHVybiBhZG0udmFsdWVzLmxlbmd0aDtcclxuICAgIH0sXHJcbiAgICBwb3A6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcGxpY2UoTWF0aC5tYXgodGhpc1skbW9ieF0udmFsdWVzLmxlbmd0aCAtIDEsIDApLCAxKVswXTtcclxuICAgIH0sXHJcbiAgICBzaGlmdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwbGljZSgwLCAxKVswXTtcclxuICAgIH0sXHJcbiAgICB1bnNoaWZ0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgaXRlbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xyXG4gICAgICAgIGFkbS5zcGxpY2VXaXRoQXJyYXkoMCwgMCwgaXRlbXMpO1xyXG4gICAgICAgIHJldHVybiBhZG0udmFsdWVzLmxlbmd0aDtcclxuICAgIH0sXHJcbiAgICByZXZlcnNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gcmV2ZXJzZSBieSBkZWZhdWx0IG11dGF0ZXMgaW4gcGxhY2UgYmVmb3JlIHJldHVybmluZyB0aGUgcmVzdWx0XHJcbiAgICAgICAgLy8gd2hpY2ggbWFrZXMgaXQgYm90aCBhICdkZXJpdmF0aW9uJyBhbmQgYSAnbXV0YXRpb24nLlxyXG4gICAgICAgIC8vIHNvIHdlIGRldmlhdGUgZnJvbSB0aGUgZGVmYXVsdCBhbmQganVzdCBtYWtlIGl0IGFuIGRlcnZpdGF0aW9uXHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieF0gYG9ic2VydmFibGVBcnJheS5yZXZlcnNlKClgIHdpbGwgbm90IHVwZGF0ZSB0aGUgYXJyYXkgaW4gcGxhY2UuIFVzZSBgb2JzZXJ2YWJsZUFycmF5LnNsaWNlKCkucmV2ZXJzZSgpYCB0byBzdXBwcmVzcyB0aGlzIHdhcm5pbmcgYW5kIHBlcmZvcm0gdGhlIG9wZXJhdGlvbiBvbiBhIGNvcHksIG9yIGBvYnNlcnZhYmxlQXJyYXkucmVwbGFjZShvYnNlcnZhYmxlQXJyYXkuc2xpY2UoKS5yZXZlcnNlKCkpYCB0byByZXZlcnNlICYgdXBkYXRlIGluIHBsYWNlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY2xvbmUgPSB0aGlzLnNsaWNlKCk7XHJcbiAgICAgICAgcmV0dXJuIGNsb25lLnJldmVyc2UuYXBwbHkoY2xvbmUsIGFyZ3VtZW50cyk7XHJcbiAgICB9LFxyXG4gICAgc29ydDogZnVuY3Rpb24gKGNvbXBhcmVGbikge1xyXG4gICAgICAgIC8vIHNvcnQgYnkgZGVmYXVsdCBtdXRhdGVzIGluIHBsYWNlIGJlZm9yZSByZXR1cm5pbmcgdGhlIHJlc3VsdFxyXG4gICAgICAgIC8vIHdoaWNoIGdvZXMgYWdhaW5zdCBhbGwgZ29vZCBwcmFjdGljZXMuIExldCdzIG5vdCBjaGFuZ2UgdGhlIGFycmF5IGluIHBsYWNlIVxyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW21vYnhdIGBvYnNlcnZhYmxlQXJyYXkuc29ydCgpYCB3aWxsIG5vdCB1cGRhdGUgdGhlIGFycmF5IGluIHBsYWNlLiBVc2UgYG9ic2VydmFibGVBcnJheS5zbGljZSgpLnNvcnQoKWAgdG8gc3VwcHJlc3MgdGhpcyB3YXJuaW5nIGFuZCBwZXJmb3JtIHRoZSBvcGVyYXRpb24gb24gYSBjb3B5LCBvciBgb2JzZXJ2YWJsZUFycmF5LnJlcGxhY2Uob2JzZXJ2YWJsZUFycmF5LnNsaWNlKCkuc29ydCgpKWAgdG8gc29ydCAmIHVwZGF0ZSBpbiBwbGFjZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNsb25lID0gdGhpcy5zbGljZSgpO1xyXG4gICAgICAgIHJldHVybiBjbG9uZS5zb3J0LmFwcGx5KGNsb25lLCBhcmd1bWVudHMpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZTogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xyXG4gICAgICAgIHZhciBpZHggPSBhZG0uZGVoYW5jZVZhbHVlcyhhZG0udmFsdWVzKS5pbmRleE9mKHZhbHVlKTtcclxuICAgICAgICBpZiAoaWR4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBnZXQ6IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4XTtcclxuICAgICAgICBpZiAoYWRtKSB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA8IGFkbS52YWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBhZG0uYXRvbS5yZXBvcnRPYnNlcnZlZCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkbS5kZWhhbmNlVmFsdWUoYWRtLnZhbHVlc1tpbmRleF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlttb2J4LmFycmF5XSBBdHRlbXB0IHRvIHJlYWQgYW4gYXJyYXkgaW5kZXggKFwiICsgaW5kZXggKyBcIikgdGhhdCBpcyBvdXQgb2YgYm91bmRzIChcIiArIGFkbS52YWx1ZXMubGVuZ3RoICsgXCIpLiBQbGVhc2UgY2hlY2sgbGVuZ3RoIGZpcnN0LiBPdXQgb2YgYm91bmQgaW5kaWNlcyB3aWxsIG5vdCBiZSB0cmFja2VkIGJ5IE1vYlhcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9LFxyXG4gICAgc2V0OiBmdW5jdGlvbiAoaW5kZXgsIG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xyXG4gICAgICAgIHZhciB2YWx1ZXMgPSBhZG0udmFsdWVzO1xyXG4gICAgICAgIGlmIChpbmRleCA8IHZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgLy8gdXBkYXRlIGF0IGluZGV4IGluIHJhbmdlXHJcbiAgICAgICAgICAgIGNoZWNrSWZTdGF0ZU1vZGlmaWNhdGlvbnNBcmVBbGxvd2VkKGFkbS5hdG9tKTtcclxuICAgICAgICAgICAgdmFyIG9sZFZhbHVlID0gdmFsdWVzW2luZGV4XTtcclxuICAgICAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyhhZG0pKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKGFkbSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiBhZG0ucHJveHksXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNoYW5nZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGFkbS5lbmhhbmNlcihuZXdWYWx1ZSwgb2xkVmFsdWUpO1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlZCA9IG5ld1ZhbHVlICE9PSBvbGRWYWx1ZTtcclxuICAgICAgICAgICAgaWYgKGNoYW5nZWQpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGFkbS5ub3RpZnlBcnJheUNoaWxkVXBkYXRlKGluZGV4LCBuZXdWYWx1ZSwgb2xkVmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSB2YWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vIGFkZCBhIG5ldyBpdGVtXHJcbiAgICAgICAgICAgIGFkbS5zcGxpY2VXaXRoQXJyYXkoaW5kZXgsIDAsIFtuZXdWYWx1ZV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gb3V0IG9mIGJvdW5kc1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieC5hcnJheV0gSW5kZXggb3V0IG9mIGJvdW5kcywgXCIgKyBpbmRleCArIFwiIGlzIGxhcmdlciB0aGFuIFwiICsgdmFsdWVzLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5bXHJcbiAgICBcImNvbmNhdFwiLFxyXG4gICAgXCJldmVyeVwiLFxyXG4gICAgXCJmaWx0ZXJcIixcclxuICAgIFwiZm9yRWFjaFwiLFxyXG4gICAgXCJpbmRleE9mXCIsXHJcbiAgICBcImpvaW5cIixcclxuICAgIFwibGFzdEluZGV4T2ZcIixcclxuICAgIFwibWFwXCIsXHJcbiAgICBcInJlZHVjZVwiLFxyXG4gICAgXCJyZWR1Y2VSaWdodFwiLFxyXG4gICAgXCJzbGljZVwiLFxyXG4gICAgXCJzb21lXCIsXHJcbiAgICBcInRvU3RyaW5nXCIsXHJcbiAgICBcInRvTG9jYWxlU3RyaW5nXCJcclxuXS5mb3JFYWNoKGZ1bmN0aW9uIChmdW5jTmFtZSkge1xyXG4gICAgYXJyYXlFeHRlbnNpb25zW2Z1bmNOYW1lXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XHJcbiAgICAgICAgYWRtLmF0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcclxuICAgICAgICB2YXIgcmVzID0gYWRtLmRlaGFuY2VWYWx1ZXMoYWRtLnZhbHVlcyk7XHJcbiAgICAgICAgcmV0dXJuIHJlc1tmdW5jTmFtZV0uYXBwbHkocmVzLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxufSk7XHJcbnZhciBpc09ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uID0gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIk9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uXCIsIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uKTtcclxuZnVuY3Rpb24gaXNPYnNlcnZhYmxlQXJyYXkodGhpbmcpIHtcclxuICAgIHJldHVybiBpc09iamVjdCh0aGluZykgJiYgaXNPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbih0aGluZ1skbW9ieF0pO1xyXG59XG5cbnZhciBfYTtcclxudmFyIE9ic2VydmFibGVNYXBNYXJrZXIgPSB7fTtcclxuLy8ganVzdCBleHRlbmQgTWFwPyBTZWUgYWxzbyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9uZXN0aGFydXMvMTNiNGQ3NGYyZWY0YTJmNDM1N2RiZDNmYzIzYzFlNTRcclxuLy8gQnV0OiBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngvaXNzdWVzLzE1NTZcclxudmFyIE9ic2VydmFibGVNYXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlTWFwKGluaXRpYWxEYXRhLCBlbmhhbmNlciwgbmFtZSkge1xyXG4gICAgICAgIGlmIChlbmhhbmNlciA9PT0gdm9pZCAwKSB7IGVuaGFuY2VyID0gZGVlcEVuaGFuY2VyOyB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IHZvaWQgMCkgeyBuYW1lID0gXCJPYnNlcnZhYmxlTWFwQFwiICsgZ2V0TmV4dElkKCk7IH1cclxuICAgICAgICB0aGlzLmVuaGFuY2VyID0gZW5oYW5jZXI7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzW19hXSA9IE9ic2VydmFibGVNYXBNYXJrZXI7XHJcbiAgICAgICAgdGhpcy5fa2V5c0F0b20gPSBjcmVhdGVBdG9tKHRoaXMubmFtZSArIFwiLmtleXMoKVwiKTtcclxuICAgICAgICB0aGlzW1N5bWJvbC50b1N0cmluZ1RhZ10gPSBcIk1hcFwiO1xyXG4gICAgICAgIGlmICh0eXBlb2YgTWFwICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibW9ieC5tYXAgcmVxdWlyZXMgTWFwIHBvbHlmaWxsIGZvciB0aGUgY3VycmVudCBicm93c2VyLiBDaGVjayBiYWJlbC1wb2x5ZmlsbCBvciBjb3JlLWpzL2VzNi9tYXAuanNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2RhdGEgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5faGFzTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMubWVyZ2UoaW5pdGlhbERhdGEpO1xyXG4gICAgfVxyXG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuX2hhcyA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YS5oYXMoa2V5KTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoIWdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbilcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhcyhrZXkpO1xyXG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMuX2hhc01hcC5nZXQoa2V5KTtcclxuICAgICAgICBpZiAoIWVudHJ5KSB7XHJcbiAgICAgICAgICAgIC8vIHRvZG86IHJlcGxhY2Ugd2l0aCBhdG9tIChicmVha2luZyBjaGFuZ2UpXHJcbiAgICAgICAgICAgIHZhciBuZXdFbnRyeSA9IChlbnRyeSA9IG5ldyBPYnNlcnZhYmxlVmFsdWUodGhpcy5faGFzKGtleSksIHJlZmVyZW5jZUVuaGFuY2VyLCB0aGlzLm5hbWUgKyBcIi5cIiArIHN0cmluZ2lmeUtleShrZXkpICsgXCI/XCIsIGZhbHNlKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhc01hcC5zZXQoa2V5LCBuZXdFbnRyeSk7XHJcbiAgICAgICAgICAgIG9uQmVjb21lVW5vYnNlcnZlZChuZXdFbnRyeSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX2hhc01hcC5kZWxldGUoa2V5KTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbnRyeS5nZXQoKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciBoYXNLZXkgPSB0aGlzLl9oYXMoa2V5KTtcclxuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XHJcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogaGFzS2V5ID8gXCJ1cGRhdGVcIiA6IFwiYWRkXCIsXHJcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBrZXlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIHZhbHVlID0gY2hhbmdlLm5ld1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaGFzS2V5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVZhbHVlKGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fYWRkVmFsdWUoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcclxuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImRlbGV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgbmFtZToga2V5XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIWNoYW5nZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2hhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcclxuICAgICAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcclxuICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVsZXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiB0aGlzLl9kYXRhLmdldChrZXkpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KF9fYXNzaWduKF9fYXNzaWduKHt9LCBjaGFuZ2UpLCB7IG5hbWU6IHRoaXMubmFtZSwga2V5OiBrZXkgfSkpO1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fa2V5c0F0b20ucmVwb3J0Q2hhbmdlZCgpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX3VwZGF0ZUhhc01hcEVudHJ5KGtleSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9ic2VydmFibGUgPSBfdGhpcy5fZGF0YS5nZXQoa2V5KTtcclxuICAgICAgICAgICAgICAgIG9ic2VydmFibGUuc2V0TmV3VmFsdWUodW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLl9kYXRhLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKG5vdGlmeSlcclxuICAgICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xyXG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLl91cGRhdGVIYXNNYXBFbnRyeSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5faGFzTWFwLmdldChrZXkpO1xyXG4gICAgICAgIGlmIChlbnRyeSkge1xyXG4gICAgICAgICAgICBlbnRyeS5zZXROZXdWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLl91cGRhdGVWYWx1ZSA9IGZ1bmN0aW9uIChrZXksIG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgdmFyIG9ic2VydmFibGUgPSB0aGlzLl9kYXRhLmdldChrZXkpO1xyXG4gICAgICAgIG5ld1ZhbHVlID0gb2JzZXJ2YWJsZS5wcmVwYXJlTmV3VmFsdWUobmV3VmFsdWUpO1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gZ2xvYmFsU3RhdGUuVU5DSEFOR0VEKSB7XHJcbiAgICAgICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcclxuICAgICAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcclxuICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvYnNlcnZhYmxlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcclxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRTdGFydChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY2hhbmdlKSwgeyBuYW1lOiB0aGlzLm5hbWUsIGtleToga2V5IH0pKTtcclxuICAgICAgICAgICAgb2JzZXJ2YWJsZS5zZXROZXdWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChub3RpZnkpXHJcbiAgICAgICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnModGhpcywgY2hhbmdlKTtcclxuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRFbmQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuX2FkZFZhbHVlID0gZnVuY3Rpb24gKGtleSwgbmV3VmFsdWUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGNoZWNrSWZTdGF0ZU1vZGlmaWNhdGlvbnNBcmVBbGxvd2VkKHRoaXMuX2tleXNBdG9tKTtcclxuICAgICAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGVWYWx1ZShuZXdWYWx1ZSwgX3RoaXMuZW5oYW5jZXIsIF90aGlzLm5hbWUgKyBcIi5cIiArIHN0cmluZ2lmeUtleShrZXkpLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIF90aGlzLl9kYXRhLnNldChrZXksIG9ic2VydmFibGUpO1xyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IG9ic2VydmFibGUudmFsdWU7IC8vIHZhbHVlIG1pZ2h0IGhhdmUgYmVlbiBjaGFuZ2VkXHJcbiAgICAgICAgICAgIF90aGlzLl91cGRhdGVIYXNNYXBFbnRyeShrZXksIHRydWUpO1xyXG4gICAgICAgICAgICBfdGhpcy5fa2V5c0F0b20ucmVwb3J0Q2hhbmdlZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcclxuICAgICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xyXG4gICAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5XHJcbiAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJhZGRcIixcclxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcclxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQoX19hc3NpZ24oX19hc3NpZ24oe30sIGNoYW5nZSksIHsgbmFtZTogdGhpcy5uYW1lLCBrZXk6IGtleSB9KSk7XHJcbiAgICAgICAgaWYgKG5vdGlmeSlcclxuICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSk7XHJcbiAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXHJcbiAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICBpZiAodGhpcy5oYXMoa2V5KSlcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZVZhbHVlKHRoaXMuX2RhdGEuZ2V0KGtleSkuZ2V0KCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlaGFuY2VWYWx1ZSh1bmRlZmluZWQpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLmRlaGFuY2VWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmRlaGFuY2VyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZXIodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9rZXlzQXRvbS5yZXBvcnRPYnNlcnZlZCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLmtleXMoKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBuZXh0SW5kZXggPSAwO1xyXG4gICAgICAgIHZhciBrZXlzID0gQXJyYXkuZnJvbSh0aGlzLmtleXMoKSk7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VJdGVyYWJsZSh7XHJcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0SW5kZXggPCBrZXlzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgID8geyB2YWx1ZTogc2VsZi5nZXQoa2V5c1tuZXh0SW5kZXgrK10pLCBkb25lOiBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgOiB7IGRvbmU6IHRydWUgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBuZXh0SW5kZXggPSAwO1xyXG4gICAgICAgIHZhciBrZXlzID0gQXJyYXkuZnJvbSh0aGlzLmtleXMoKSk7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VJdGVyYWJsZSh7XHJcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuZXh0SW5kZXggPCBrZXlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW25leHRJbmRleCsrXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW2tleSwgc2VsZi5nZXQoa2V5KV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlWyhfYSA9ICRtb2J4LCBTeW1ib2wuaXRlcmF0b3IpXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbnRyaWVzKCk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdGhpc0FyZykge1xyXG4gICAgICAgIHZhciBlXzEsIF9iO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9jID0gX192YWx1ZXModGhpcyksIF9kID0gX2MubmV4dCgpOyAhX2QuZG9uZTsgX2QgPSBfYy5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfZSA9IF9fcmVhZChfZC52YWx1ZSwgMiksIGtleSA9IF9lWzBdLCB2YWx1ZSA9IF9lWzFdO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB2YWx1ZSwga2V5LCB0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9kICYmICFfZC5kb25lICYmIChfYiA9IF9jLnJldHVybikpIF9iLmNhbGwoX2MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqIE1lcmdlIGFub3RoZXIgb2JqZWN0IGludG8gdGhpcyBvYmplY3QsIHJldHVybnMgdGhpcy4gKi9cclxuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoaXNPYnNlcnZhYmxlTWFwKG90aGVyKSkge1xyXG4gICAgICAgICAgICBvdGhlciA9IG90aGVyLnRvSlMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaXNQbGFpbk9iamVjdChvdGhlcikpXHJcbiAgICAgICAgICAgICAgICBnZXRQbGFpbk9iamVjdEtleXMob3RoZXIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gX3RoaXMuc2V0KGtleSwgb3RoZXJba2V5XSk7IH0pO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KG90aGVyKSlcclxuICAgICAgICAgICAgICAgIG90aGVyLmZvckVhY2goZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9jID0gX19yZWFkKF9iLCAyKSwga2V5ID0gX2NbMF0sIHZhbHVlID0gX2NbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnNldChrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChpc0VTNk1hcChvdGhlcikpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvdGhlci5jb25zdHJ1Y3RvciAhPT0gTWFwKVxyXG4gICAgICAgICAgICAgICAgICAgIGZhaWwoXCJDYW5ub3QgaW5pdGlhbGl6ZSBmcm9tIGNsYXNzZXMgdGhhdCBpbmhlcml0IGZyb20gTWFwOiBcIiArIG90aGVyLmNvbnN0cnVjdG9yLm5hbWUpOyAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgICAgICAgICAgICAgIG90aGVyLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHsgcmV0dXJuIF90aGlzLnNldChrZXksIHZhbHVlKTsgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAob3RoZXIgIT09IG51bGwgJiYgb3RoZXIgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIGZhaWwoXCJDYW5ub3QgaW5pdGlhbGl6ZSBtYXAgZnJvbSBcIiArIG90aGVyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdW50cmFja2VkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlXzIsIF9iO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfYyA9IF9fdmFsdWVzKF90aGlzLmtleXMoKSksIF9kID0gX2MubmV4dCgpOyAhX2QuZG9uZTsgX2QgPSBfYy5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IF9kLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxyXG4gICAgICAgICAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9kICYmICFfZC5kb25lICYmIChfYiA9IF9jLnJldHVybikpIF9iLmNhbGwoX2MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiAodmFsdWVzKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIGdyYWIgYWxsIHRoZSBrZXlzIHRoYXQgYXJlIHByZXNlbnQgaW4gdGhlIG5ldyBtYXAgYnV0IG5vdCBwcmVzZW50IGluIHRoZSBjdXJyZW50IG1hcFxyXG4gICAgICAgICAgICAvLyBhbmQgZGVsZXRlIHRoZW0gZnJvbSB0aGUgbWFwLCB0aGVuIG1lcmdlIHRoZSBuZXcgbWFwXHJcbiAgICAgICAgICAgIC8vIHRoaXMgd2lsbCBjYXVzZSByZWFjdGlvbnMgb25seSBvbiBjaGFuZ2VkIHZhbHVlc1xyXG4gICAgICAgICAgICB2YXIgbmV3S2V5cyA9IGdldE1hcExpa2VLZXlzKHZhbHVlcyk7XHJcbiAgICAgICAgICAgIHZhciBvbGRLZXlzID0gQXJyYXkuZnJvbShfdGhpcy5rZXlzKCkpO1xyXG4gICAgICAgICAgICB2YXIgbWlzc2luZ0tleXMgPSBvbGRLZXlzLmZpbHRlcihmdW5jdGlvbiAoaykgeyByZXR1cm4gbmV3S2V5cy5pbmRleE9mKGspID09PSAtMTsgfSk7XHJcbiAgICAgICAgICAgIG1pc3NpbmdLZXlzLmZvckVhY2goZnVuY3Rpb24gKGspIHsgcmV0dXJuIF90aGlzLmRlbGV0ZShrKTsgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLm1lcmdlKHZhbHVlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9ic2VydmFibGVNYXAucHJvdG90eXBlLCBcInNpemVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9rZXlzQXRvbS5yZXBvcnRPYnNlcnZlZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGF0YS5zaXplO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgcGxhaW4gb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGlzIG1hcC5cclxuICAgICAqIE5vdGUgdGhhdCBhbGwgdGhlIGtleXMgYmVpbmcgc3RyaW5naWZpZWQuXHJcbiAgICAgKiBJZiB0aGVyZSBhcmUgZHVwbGljYXRpbmcga2V5cyBhZnRlciBjb252ZXJ0aW5nIHRoZW0gdG8gc3RyaW5ncywgYmVoYXZpb3VyIGlzIHVuZGV0ZXJtaW5lZC5cclxuICAgICAqL1xyXG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUudG9QT0pPID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlXzMsIF9iO1xyXG4gICAgICAgIHZhciByZXMgPSB7fTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfYyA9IF9fdmFsdWVzKHRoaXMpLCBfZCA9IF9jLm5leHQoKTsgIV9kLmRvbmU7IF9kID0gX2MubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2UgPSBfX3JlYWQoX2QudmFsdWUsIDIpLCBrZXkgPSBfZVswXSwgdmFsdWUgPSBfZVsxXTtcclxuICAgICAgICAgICAgICAgIC8vIFdlIGxpZSBhYm91dCBzeW1ib2wga2V5IHR5cGVzIGR1ZSB0byBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzE4NjNcclxuICAgICAgICAgICAgICAgIHJlc1t0eXBlb2Yga2V5ID09PSBcInN5bWJvbFwiID8ga2V5IDogc3RyaW5naWZ5S2V5KGtleSldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVfM18xKSB7IGVfMyA9IHsgZXJyb3I6IGVfM18xIH07IH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChfZCAmJiAhX2QuZG9uZSAmJiAoX2IgPSBfYy5yZXR1cm4pKSBfYi5jYWxsKF9jKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMykgdGhyb3cgZV8zLmVycm9yOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgc2hhbGxvdyBub24gb2JzZXJ2YWJsZSBvYmplY3QgY2xvbmUgb2YgdGhpcyBtYXAuXHJcbiAgICAgKiBOb3RlIHRoYXQgdGhlIHZhbHVlcyBtaWd0aCBzdGlsbCBiZSBvYnNlcnZhYmxlLiBGb3IgYSBkZWVwIGNsb25lIHVzZSBtb2J4LnRvSlMuXHJcbiAgICAgKi9cclxuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLnRvSlMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXAodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIFVzZWQgYnkgSlNPTi5zdHJpbmdpZnlcclxuICAgICAgICByZXR1cm4gdGhpcy50b1BPSk8oKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiAodGhpcy5uYW1lICtcclxuICAgICAgICAgICAgXCJbeyBcIiArXHJcbiAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy5rZXlzKCkpXHJcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHN0cmluZ2lmeUtleShrZXkpICsgXCI6IFwiICsgKFwiXCIgKyBfdGhpcy5nZXQoa2V5KSk7IH0pXHJcbiAgICAgICAgICAgICAgICAuam9pbihcIiwgXCIpICtcclxuICAgICAgICAgICAgXCIgfV1cIik7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZlcyB0aGlzIG9iamVjdC4gVHJpZ2dlcnMgZm9yIHRoZSBldmVudHMgJ2FkZCcsICd1cGRhdGUnIGFuZCAnZGVsZXRlJy5cclxuICAgICAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L29ic2VydmVcclxuICAgICAqIGZvciBjYWxsYmFjayBkZXRhaWxzXHJcbiAgICAgKi9cclxuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAobGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSkge1xyXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICAgICBpbnZhcmlhbnQoZmlyZUltbWVkaWF0ZWx5ICE9PSB0cnVlLCBcImBvYnNlcnZlYCBkb2Vzbid0IHN1cHBvcnQgZmlyZUltbWVkaWF0ZWx5PXRydWUgaW4gY29tYmluYXRpb24gd2l0aCBtYXBzLlwiKTtcclxuICAgICAgICByZXR1cm4gcmVnaXN0ZXJMaXN0ZW5lcih0aGlzLCBsaXN0ZW5lcik7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuaW50ZXJjZXB0ID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcclxuICAgICAgICByZXR1cm4gcmVnaXN0ZXJJbnRlcmNlcHRvcih0aGlzLCBoYW5kbGVyKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZU1hcDtcclxufSgpKTtcclxuLyogJ3ZhcicgZml4ZXMgc21hbGwtYnVpbGQgaXNzdWUgKi9cclxudmFyIGlzT2JzZXJ2YWJsZU1hcCA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJPYnNlcnZhYmxlTWFwXCIsIE9ic2VydmFibGVNYXApO1xuXG52YXIgX2EkMTtcclxudmFyIE9ic2VydmFibGVTZXRNYXJrZXIgPSB7fTtcclxudmFyIE9ic2VydmFibGVTZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlU2V0KGluaXRpYWxEYXRhLCBlbmhhbmNlciwgbmFtZSkge1xyXG4gICAgICAgIGlmIChlbmhhbmNlciA9PT0gdm9pZCAwKSB7IGVuaGFuY2VyID0gZGVlcEVuaGFuY2VyOyB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IHZvaWQgMCkgeyBuYW1lID0gXCJPYnNlcnZhYmxlU2V0QFwiICsgZ2V0TmV4dElkKCk7IH1cclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXNbX2EkMV0gPSBPYnNlcnZhYmxlU2V0TWFya2VyO1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgdGhpcy5fYXRvbSA9IGNyZWF0ZUF0b20odGhpcy5uYW1lKTtcclxuICAgICAgICB0aGlzW1N5bWJvbC50b1N0cmluZ1RhZ10gPSBcIlNldFwiO1xyXG4gICAgICAgIGlmICh0eXBlb2YgU2V0ICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibW9ieC5zZXQgcmVxdWlyZXMgU2V0IHBvbHlmaWxsIGZvciB0aGUgY3VycmVudCBicm93c2VyLiBDaGVjayBiYWJlbC1wb2x5ZmlsbCBvciBjb3JlLWpzL2VzNi9zZXQuanNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW5oYW5jZXIgPSBmdW5jdGlvbiAobmV3Viwgb2xkVikgeyByZXR1cm4gZW5oYW5jZXIobmV3Viwgb2xkViwgbmFtZSk7IH07XHJcbiAgICAgICAgaWYgKGluaXRpYWxEYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwbGFjZShpbml0aWFsRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGUuZGVoYW5jZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVoYW5jZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlcih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdW50cmFja2VkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlXzEsIF9iO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfYyA9IF9fdmFsdWVzKF90aGlzLl9kYXRhLnZhbHVlcygpKSwgX2QgPSBfYy5uZXh0KCk7ICFfZC5kb25lOyBfZCA9IF9jLm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBfZC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGVsZXRlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxyXG4gICAgICAgICAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9kICYmICFfZC5kb25lICYmIChfYiA9IF9jLnJldHVybikpIF9iLmNhbGwoX2MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVTZXQucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2tGbiwgdGhpc0FyZykge1xyXG4gICAgICAgIHZhciBlXzIsIF9iO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9jID0gX192YWx1ZXModGhpcyksIF9kID0gX2MubmV4dCgpOyAhX2QuZG9uZTsgX2QgPSBfYy5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IF9kLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tGbi5jYWxsKHRoaXNBcmcsIHZhbHVlLCB2YWx1ZSwgdGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChfZCAmJiAhX2QuZG9uZSAmJiAoX2IgPSBfYy5yZXR1cm4pKSBfYi5jYWxsKF9jKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYnNlcnZhYmxlU2V0LnByb3RvdHlwZSwgXCJzaXplXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5fYXRvbS5yZXBvcnRPYnNlcnZlZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGF0YS5zaXplO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCh0aGlzLl9hdG9tKTtcclxuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XHJcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJhZGRcIixcclxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcclxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB2YWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgLy8gVE9ETzogaWRlYWxseSwgdmFsdWUgPSBjaGFuZ2UudmFsdWUgd291bGQgYmUgZG9uZSBoZXJlLCBzbyB0aGF0IHZhbHVlcyBjYW4gYmVcclxuICAgICAgICAgICAgLy8gY2hhbmdlZCBieSBpbnRlcmNlcHRvci4gU2FtZSBhcHBsaWVzIGZvciBvdGhlciBTZXQgYW5kIE1hcCBhcGkncy5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhcyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX2RhdGEuYWRkKF90aGlzLmVuaGFuY2VyKHZhbHVlLCB1bmRlZmluZWQpKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLl9hdG9tLnJlcG9ydENoYW5nZWQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcclxuICAgICAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcclxuICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWRkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KGNoYW5nZSk7XHJcbiAgICAgICAgICAgIGlmIChub3RpZnkpXHJcbiAgICAgICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnModGhpcywgY2hhbmdlKTtcclxuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRFbmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XHJcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJkZWxldGVcIixcclxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcclxuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiB2YWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmhhcyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xyXG4gICAgICAgICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweVxyXG4gICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkZWxldGVcIixcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQoX19hc3NpZ24oX19hc3NpZ24oe30sIGNoYW5nZSksIHsgbmFtZTogdGhpcy5uYW1lIH0pKTtcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX2F0b20ucmVwb3J0Q2hhbmdlZCgpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX2RhdGEuZGVsZXRlKHZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChub3RpZnkpXHJcbiAgICAgICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnModGhpcywgY2hhbmdlKTtcclxuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRFbmQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9hdG9tLnJlcG9ydE9ic2VydmVkKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEuaGFzKHRoaXMuZGVoYW5jZVZhbHVlKHZhbHVlKSk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbmV4dEluZGV4ID0gMDtcclxuICAgICAgICB2YXIga2V5cyA9IEFycmF5LmZyb20odGhpcy5rZXlzKCkpO1xyXG4gICAgICAgIHZhciB2YWx1ZXMgPSBBcnJheS5mcm9tKHRoaXMudmFsdWVzKCkpO1xyXG4gICAgICAgIHJldHVybiBtYWtlSXRlcmFibGUoe1xyXG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBuZXh0SW5kZXg7XHJcbiAgICAgICAgICAgICAgICBuZXh0SW5kZXggKz0gMTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleCA8IHZhbHVlcy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICA/IHsgdmFsdWU6IFtrZXlzW2luZGV4XSwgdmFsdWVzW2luZGV4XV0sIGRvbmU6IGZhbHNlIH1cclxuICAgICAgICAgICAgICAgICAgICA6IHsgZG9uZTogdHJ1ZSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMoKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fYXRvbS5yZXBvcnRPYnNlcnZlZCgpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgbmV4dEluZGV4ID0gMDtcclxuICAgICAgICB2YXIgb2JzZXJ2YWJsZVZhbHVlcyA9IEFycmF5LmZyb20odGhpcy5fZGF0YS52YWx1ZXMoKSk7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VJdGVyYWJsZSh7XHJcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0SW5kZXggPCBvYnNlcnZhYmxlVmFsdWVzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgID8geyB2YWx1ZTogc2VsZi5kZWhhbmNlVmFsdWUob2JzZXJ2YWJsZVZhbHVlc1tuZXh0SW5kZXgrK10pLCBkb25lOiBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgOiB7IGRvbmU6IHRydWUgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVTZXQucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmIChpc09ic2VydmFibGVTZXQob3RoZXIpKSB7XHJcbiAgICAgICAgICAgIG90aGVyID0gb3RoZXIudG9KUygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG90aGVyKSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIG90aGVyLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBfdGhpcy5hZGQodmFsdWUpOyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpc0VTNlNldChvdGhlcikpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICBvdGhlci5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gX3RoaXMuYWRkKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAob3RoZXIgIT09IG51bGwgJiYgb3RoZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZmFpbChcIkNhbm5vdCBpbml0aWFsaXplIHNldCBmcm9tIFwiICsgb3RoZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XHJcbiAgICAgICAgLy8gVE9ETyAnZmlyZUltbWVkaWF0ZWx5JyBjYW4gYmUgdHJ1ZT9cclxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgICAgICAgICAgaW52YXJpYW50KGZpcmVJbW1lZGlhdGVseSAhPT0gdHJ1ZSwgXCJgb2JzZXJ2ZWAgZG9lc24ndCBzdXBwb3J0IGZpcmVJbW1lZGlhdGVseT10cnVlIGluIGNvbWJpbmF0aW9uIHdpdGggc2V0cy5cIik7XHJcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyTGlzdGVuZXIodGhpcywgbGlzdGVuZXIpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVTZXQucHJvdG90eXBlLmludGVyY2VwdCA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVySW50ZXJjZXB0b3IodGhpcywgaGFuZGxlcik7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGUudG9KUyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNldCh0aGlzKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lICsgXCJbIFwiICsgQXJyYXkuZnJvbSh0aGlzKS5qb2luKFwiLCBcIikgKyBcIiBdXCI7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGVbKF9hJDEgPSAkbW9ieCwgU3ltYm9sLml0ZXJhdG9yKV0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGVTZXQ7XHJcbn0oKSk7XHJcbnZhciBpc09ic2VydmFibGVTZXQgPSBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiT2JzZXJ2YWJsZVNldFwiLCBPYnNlcnZhYmxlU2V0KTtcblxudmFyIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbih0YXJnZXQsIHZhbHVlcywgbmFtZSwgZGVmYXVsdEVuaGFuY2VyKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlcyA9PT0gdm9pZCAwKSB7IHZhbHVlcyA9IG5ldyBNYXAoKTsgfVxyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0RW5oYW5jZXIgPSBkZWZhdWx0RW5oYW5jZXI7XHJcbiAgICAgICAgdGhpcy5rZXlzQXRvbSA9IG5ldyBBdG9tKG5hbWUgKyBcIi5rZXlzXCIpO1xyXG4gICAgfVxyXG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5yZWFkID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5nZXQoa2V5KS5nZXQoKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKGtleSwgbmV3VmFsdWUpIHtcclxuICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLnRhcmdldDtcclxuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaXMudmFsdWVzLmdldChrZXkpO1xyXG4gICAgICAgIGlmIChvYnNlcnZhYmxlIGluc3RhbmNlb2YgQ29tcHV0ZWRWYWx1ZSkge1xyXG4gICAgICAgICAgICBvYnNlcnZhYmxlLnNldChuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaW50ZXJjZXB0XHJcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHkgfHwgaW5zdGFuY2UsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBrZXksXHJcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3VmFsdWUgPSBvYnNlcnZhYmxlLnByZXBhcmVOZXdWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgLy8gbm90aWZ5IHNweSAmIG9ic2VydmVyc1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gZ2xvYmFsU3RhdGUuVU5DSEFOR0VEKSB7XHJcbiAgICAgICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcclxuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcclxuICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5IHx8IGluc3RhbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvYnNlcnZhYmxlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcclxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRTdGFydChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY2hhbmdlKSwgeyBuYW1lOiB0aGlzLm5hbWUsIGtleToga2V5IH0pKTtcclxuICAgICAgICAgICAgb2JzZXJ2YWJsZS5zZXROZXdWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChub3RpZnkpXHJcbiAgICAgICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnModGhpcywgY2hhbmdlKTtcclxuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRFbmQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgdmFyIG1hcCA9IHRoaXMucGVuZGluZ0tleXMgfHwgKHRoaXMucGVuZGluZ0tleXMgPSBuZXcgTWFwKCkpO1xyXG4gICAgICAgIHZhciBlbnRyeSA9IG1hcC5nZXQoa2V5KTtcclxuICAgICAgICBpZiAoZW50cnkpXHJcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5nZXQoKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGV4aXN0cyA9ICEhdGhpcy52YWx1ZXMuZ2V0KGtleSk7XHJcbiAgICAgICAgICAgIC8vIFBvc3NpYmxlIG9wdGltaXphdGlvbjogRG9uJ3QgaGF2ZSBhIHNlcGFyYXRlIG1hcCBmb3Igbm9uIGV4aXN0aW5nIGtleXMsXHJcbiAgICAgICAgICAgIC8vIGJ1dCBzdG9yZSB0aGVtIGluIHRoZSB2YWx1ZXMgbWFwIGluc3RlYWQsIHVzaW5nIGEgc3BlY2lhbCBzeW1ib2wgdG8gZGVub3RlIFwibm90IGV4aXN0aW5nXCJcclxuICAgICAgICAgICAgZW50cnkgPSBuZXcgT2JzZXJ2YWJsZVZhbHVlKGV4aXN0cywgcmVmZXJlbmNlRW5oYW5jZXIsIHRoaXMubmFtZSArIFwiLlwiICsgc3RyaW5naWZ5S2V5KGtleSkgKyBcIj9cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICBtYXAuc2V0KGtleSwgZW50cnkpO1xyXG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZ2V0KCk7IC8vIHJlYWQgdG8gc3Vic2NyaWJlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuYWRkT2JzZXJ2YWJsZVByb3AgPSBmdW5jdGlvbiAocHJvcE5hbWUsIG5ld1ZhbHVlLCBlbmhhbmNlcikge1xyXG4gICAgICAgIGlmIChlbmhhbmNlciA9PT0gdm9pZCAwKSB7IGVuaGFuY2VyID0gdGhpcy5kZWZhdWx0RW5oYW5jZXI7IH1cclxuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XHJcbiAgICAgICAgYXNzZXJ0UHJvcGVydHlDb25maWd1cmFibGUodGFyZ2V0LCBwcm9wTmFtZSk7XHJcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcclxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5wcm94eSB8fCB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBwcm9wTmFtZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYWRkXCIsXHJcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZVZhbHVlKG5ld1ZhbHVlLCBlbmhhbmNlciwgdGhpcy5uYW1lICsgXCIuXCIgKyBzdHJpbmdpZnlLZXkocHJvcE5hbWUpLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy52YWx1ZXMuc2V0KHByb3BOYW1lLCBvYnNlcnZhYmxlKTtcclxuICAgICAgICBuZXdWYWx1ZSA9IG9ic2VydmFibGUudmFsdWU7IC8vIG9ic2VydmFibGVWYWx1ZSBtaWdodCBoYXZlIGNoYW5nZWQgaXRcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wTmFtZSwgZ2VuZXJhdGVPYnNlcnZhYmxlUHJvcENvbmZpZyhwcm9wTmFtZSkpO1xyXG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlBZGRpdGlvbihwcm9wTmFtZSwgbmV3VmFsdWUpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuYWRkQ29tcHV0ZWRQcm9wID0gZnVuY3Rpb24gKHByb3BlcnR5T3duZXIsIC8vIHdoZXJlIGlzIHRoZSBwcm9wZXJ0eSBkZWNsYXJlZD9cclxuICAgIHByb3BOYW1lLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMudGFyZ2V0O1xyXG4gICAgICAgIG9wdGlvbnMubmFtZSA9IG9wdGlvbnMubmFtZSB8fCB0aGlzLm5hbWUgKyBcIi5cIiArIHN0cmluZ2lmeUtleShwcm9wTmFtZSk7XHJcbiAgICAgICAgdGhpcy52YWx1ZXMuc2V0KHByb3BOYW1lLCBuZXcgQ29tcHV0ZWRWYWx1ZShvcHRpb25zKSk7XHJcbiAgICAgICAgaWYgKHByb3BlcnR5T3duZXIgPT09IHRhcmdldCB8fCBpc1Byb3BlcnR5Q29uZmlndXJhYmxlKHByb3BlcnR5T3duZXIsIHByb3BOYW1lKSlcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BlcnR5T3duZXIsIHByb3BOYW1lLCBnZW5lcmF0ZUNvbXB1dGVkUHJvcENvbmZpZyhwcm9wTmFtZSkpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIGlmICghdGhpcy52YWx1ZXMuaGFzKGtleSkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XHJcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcclxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5wcm94eSB8fCB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBrZXksXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInJlbW92ZVwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIWNoYW5nZSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc3RhcnRCYXRjaCgpO1xyXG4gICAgICAgICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCk7XHJcbiAgICAgICAgICAgIHZhciBvbGRPYnNlcnZhYmxlID0gdGhpcy52YWx1ZXMuZ2V0KGtleSk7XHJcbiAgICAgICAgICAgIHZhciBvbGRWYWx1ZSA9IG9sZE9ic2VydmFibGUgJiYgb2xkT2JzZXJ2YWJsZS5nZXQoKTtcclxuICAgICAgICAgICAgb2xkT2JzZXJ2YWJsZSAmJiBvbGRPYnNlcnZhYmxlLnNldCh1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAvLyBub3RpZnkga2V5IGFuZCBrZXlzZXQgbGlzdGVuZXJzXHJcbiAgICAgICAgICAgIHRoaXMua2V5c0F0b20ucmVwb3J0Q2hhbmdlZCgpO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlcy5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVuZGluZ0tleXMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMucGVuZGluZ0tleXMuZ2V0KGtleSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkpXHJcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuc2V0KGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBkZWxldGUgdGhlIHByb3BcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMudGFyZ2V0W2tleV07XHJcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5XHJcbiAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJlbW92ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5wcm94eSB8fCB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KF9fYXNzaWduKF9fYXNzaWduKHt9LCBjaGFuZ2UpLCB7IG5hbWU6IHRoaXMubmFtZSwga2V5OiBrZXkgfSkpO1xyXG4gICAgICAgICAgICBpZiAobm90aWZ5KVxyXG4gICAgICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSk7XHJcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0RW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBlbmRCYXRjaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLmlsbGVnYWxBY2Nlc3MgPSBmdW5jdGlvbiAob3duZXIsIHByb3BOYW1lKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhpcyBoYXBwZW5zIGlmIGEgcHJvcGVydHkgaXMgYWNjZXNzZWQgdGhyb3VnaCB0aGUgcHJvdG90eXBlIGNoYWluLCBidXQgdGhlIHByb3BlcnR5IHdhc1xyXG4gICAgICAgICAqIGRlY2xhcmVkIGRpcmVjdGx5IGFzIG93biBwcm9wZXJ0eSBvbiB0aGUgcHJvdG90eXBlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogRS5nLjpcclxuICAgICAgICAgKiBjbGFzcyBBIHtcclxuICAgICAgICAgKiB9XHJcbiAgICAgICAgICogZXh0ZW5kT2JzZXJ2YWJsZShBLnByb3RvdHlwZSwgeyB4OiAxIH0pXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBjbGFzc0IgZXh0ZW5zIEEge1xyXG4gICAgICAgICAqIH1cclxuICAgICAgICAgKiBjb25zb2xlLmxvZyhuZXcgQigpLngpXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBJdCBpcyB1bmNsZWFyIHdoZXRoZXIgdGhlIHByb3BlcnR5IHNob3VsZCBiZSBjb25zaWRlcmVkICdzdGF0aWMnIG9yIGluaGVyaXRlZC5cclxuICAgICAgICAgKiBFaXRoZXIgdXNlIGBjb25zb2xlLmxvZyhBLngpYFxyXG4gICAgICAgICAqIG9yOiBkZWNvcmF0ZShBLCB7IHg6IG9ic2VydmFibGUgfSlcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIFdoZW4gdXNpbmcgZGVjb3JhdGUsIHRoZSBwcm9wZXJ0eSB3aWxsIGFsd2F5cyBiZSByZWRlY2xhcmVkIGFzIG93biBwcm9wZXJ0eSBvbiB0aGUgYWN0dWFsIGluc3RhbmNlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiUHJvcGVydHkgJ1wiICsgcHJvcE5hbWUgKyBcIicgb2YgJ1wiICsgb3duZXIgKyBcIicgd2FzIGFjY2Vzc2VkIHRocm91Z2ggdGhlIHByb3RvdHlwZSBjaGFpbi4gVXNlICdkZWNvcmF0ZScgaW5zdGVhZCB0byBkZWNsYXJlIHRoZSBwcm9wIG9yIGFjY2VzcyBpdCBzdGF0aWNhbGx5IHRocm91Z2ggaXQncyBvd25lclwiKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmVzIHRoaXMgb2JqZWN0LiBUcmlnZ2VycyBmb3IgdGhlIGV2ZW50cyAnYWRkJywgJ3VwZGF0ZScgYW5kICdkZWxldGUnLlxyXG4gICAgICogU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3Qvb2JzZXJ2ZVxyXG4gICAgICogZm9yIGNhbGxiYWNrIGRldGFpbHNcclxuICAgICAqL1xyXG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBmaXJlSW1tZWRpYXRlbHkpIHtcclxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgICAgICAgICAgaW52YXJpYW50KGZpcmVJbW1lZGlhdGVseSAhPT0gdHJ1ZSwgXCJgb2JzZXJ2ZWAgZG9lc24ndCBzdXBwb3J0IHRoZSBmaXJlIGltbWVkaWF0ZWx5IHByb3BlcnR5IGZvciBvYnNlcnZhYmxlIG9iamVjdHMuXCIpO1xyXG4gICAgICAgIHJldHVybiByZWdpc3Rlckxpc3RlbmVyKHRoaXMsIGNhbGxiYWNrKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLmludGVyY2VwdCA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVySW50ZXJjZXB0b3IodGhpcywgaGFuZGxlcik7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5ub3RpZnlQcm9wZXJ0eUFkZGl0aW9uID0gZnVuY3Rpb24gKGtleSwgbmV3VmFsdWUpIHtcclxuICAgICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xyXG4gICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcclxuICAgICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweVxyXG4gICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYWRkXCIsXHJcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHkgfHwgdGhpcy50YXJnZXQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBrZXksXHJcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXHJcbiAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KF9fYXNzaWduKF9fYXNzaWduKHt9LCBjaGFuZ2UpLCB7IG5hbWU6IHRoaXMubmFtZSwga2V5OiBrZXkgfSkpO1xyXG4gICAgICAgIGlmIChub3RpZnkpXHJcbiAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xyXG4gICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgICAgICBzcHlSZXBvcnRFbmQoKTtcclxuICAgICAgICBpZiAodGhpcy5wZW5kaW5nS2V5cykge1xyXG4gICAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnBlbmRpbmdLZXlzLmdldChrZXkpO1xyXG4gICAgICAgICAgICBpZiAoZW50cnkpXHJcbiAgICAgICAgICAgICAgICBlbnRyeS5zZXQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMua2V5c0F0b20ucmVwb3J0Q2hhbmdlZCgpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuZ2V0S2V5cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZV8xLCBfYTtcclxuICAgICAgICB0aGlzLmtleXNBdG9tLnJlcG9ydE9ic2VydmVkKCk7XHJcbiAgICAgICAgLy8gcmV0dXJuIFJlZmxlY3Qub3duS2V5cyh0aGlzLnZhbHVlcykgYXMgYW55XHJcbiAgICAgICAgdmFyIHJlcyA9IFtdO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXModGhpcy52YWx1ZXMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2QgPSBfX3JlYWQoX2MudmFsdWUsIDIpLCBrZXkgPSBfZFswXSwgdmFsdWUgPSBfZFsxXTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9ic2VydmFibGVWYWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICByZXMucHVzaChrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb247XHJcbn0oKSk7XHJcbmZ1bmN0aW9uIGFzT2JzZXJ2YWJsZU9iamVjdCh0YXJnZXQsIG5hbWUsIGRlZmF1bHRFbmhhbmNlcikge1xyXG4gICAgaWYgKG5hbWUgPT09IHZvaWQgMCkgeyBuYW1lID0gXCJcIjsgfVxyXG4gICAgaWYgKGRlZmF1bHRFbmhhbmNlciA9PT0gdm9pZCAwKSB7IGRlZmF1bHRFbmhhbmNlciA9IGRlZXBFbmhhbmNlcjsgfVxyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsICRtb2J4KSlcclxuICAgICAgICByZXR1cm4gdGFyZ2V0WyRtb2J4XTtcclxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgIGludmFyaWFudChPYmplY3QuaXNFeHRlbnNpYmxlKHRhcmdldCksIFwiQ2Fubm90IG1ha2UgdGhlIGRlc2lnbmF0ZWQgb2JqZWN0IG9ic2VydmFibGU7IGl0IGlzIG5vdCBleHRlbnNpYmxlXCIpO1xyXG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KHRhcmdldCkpXHJcbiAgICAgICAgbmFtZSA9ICh0YXJnZXQuY29uc3RydWN0b3IubmFtZSB8fCBcIk9ic2VydmFibGVPYmplY3RcIikgKyBcIkBcIiArIGdldE5leHRJZCgpO1xyXG4gICAgaWYgKCFuYW1lKVxyXG4gICAgICAgIG5hbWUgPSBcIk9ic2VydmFibGVPYmplY3RAXCIgKyBnZXROZXh0SWQoKTtcclxuICAgIHZhciBhZG0gPSBuZXcgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uKHRhcmdldCwgbmV3IE1hcCgpLCBzdHJpbmdpZnlLZXkobmFtZSksIGRlZmF1bHRFbmhhbmNlcik7XHJcbiAgICBhZGRIaWRkZW5Qcm9wKHRhcmdldCwgJG1vYngsIGFkbSk7XHJcbiAgICByZXR1cm4gYWRtO1xyXG59XHJcbnZhciBvYnNlcnZhYmxlUHJvcGVydHlDb25maWdzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxudmFyIGNvbXB1dGVkUHJvcGVydHlDb25maWdzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuZnVuY3Rpb24gZ2VuZXJhdGVPYnNlcnZhYmxlUHJvcENvbmZpZyhwcm9wTmFtZSkge1xyXG4gICAgcmV0dXJuIChvYnNlcnZhYmxlUHJvcGVydHlDb25maWdzW3Byb3BOYW1lXSB8fFxyXG4gICAgICAgIChvYnNlcnZhYmxlUHJvcGVydHlDb25maWdzW3Byb3BOYW1lXSA9IHtcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzWyRtb2J4XS5yZWFkKHByb3BOYW1lKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAgICAgdGhpc1skbW9ieF0ud3JpdGUocHJvcE5hbWUsIHYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG59XHJcbmZ1bmN0aW9uIGdldEFkbWluaXN0cmF0aW9uRm9yQ29tcHV0ZWRQcm9wT3duZXIob3duZXIpIHtcclxuICAgIHZhciBhZG0gPSBvd25lclskbW9ieF07XHJcbiAgICBpZiAoIWFkbSkge1xyXG4gICAgICAgIC8vIGJlY2F1c2UgY29tcHV0ZWQgcHJvcHMgYXJlIGRlY2xhcmVkIG9uIHByb3R5LFxyXG4gICAgICAgIC8vIHRoZSBjdXJyZW50IGluc3RhbmNlIG1pZ2h0IG5vdCBoYXZlIGJlZW4gaW5pdGlhbGl6ZWQgeWV0XHJcbiAgICAgICAgaW5pdGlhbGl6ZUluc3RhbmNlKG93bmVyKTtcclxuICAgICAgICByZXR1cm4gb3duZXJbJG1vYnhdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFkbTtcclxufVxyXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbXB1dGVkUHJvcENvbmZpZyhwcm9wTmFtZSkge1xyXG4gICAgcmV0dXJuIChjb21wdXRlZFByb3BlcnR5Q29uZmlnc1twcm9wTmFtZV0gfHxcclxuICAgICAgICAoY29tcHV0ZWRQcm9wZXJ0eUNvbmZpZ3NbcHJvcE5hbWVdID0ge1xyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGdsb2JhbFN0YXRlLmNvbXB1dGVkQ29uZmlndXJhYmxlLFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb25Gb3JDb21wdXRlZFByb3BPd25lcih0aGlzKS5yZWFkKHByb3BOYW1lKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAgICAgZ2V0QWRtaW5pc3RyYXRpb25Gb3JDb21wdXRlZFByb3BPd25lcih0aGlzKS53cml0ZShwcm9wTmFtZSwgdik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbn1cclxudmFyIGlzT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uID0gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIk9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvblwiLCBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24pO1xyXG5mdW5jdGlvbiBpc09ic2VydmFibGVPYmplY3QodGhpbmcpIHtcclxuICAgIGlmIChpc09iamVjdCh0aGluZykpIHtcclxuICAgICAgICAvLyBJbml0aWFsaXplcnMgcnVuIGxhemlseSB3aGVuIHRyYW5zcGlsaW5nIHRvIGJhYmVsLCBzbyBtYWtlIHN1cmUgdGhleSBhcmUgcnVuLi4uXHJcbiAgICAgICAgaW5pdGlhbGl6ZUluc3RhbmNlKHRoaW5nKTtcclxuICAgICAgICByZXR1cm4gaXNPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24odGhpbmdbJG1vYnhdKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxuXG5mdW5jdGlvbiBnZXRBdG9tKHRoaW5nLCBwcm9wZXJ0eSkge1xyXG4gICAgaWYgKHR5cGVvZiB0aGluZyA9PT0gXCJvYmplY3RcIiAmJiB0aGluZyAhPT0gbnVsbCkge1xyXG4gICAgICAgIGlmIChpc09ic2VydmFibGVBcnJheSh0aGluZykpIHtcclxuICAgICAgICAgICAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFwiSXQgaXMgbm90IHBvc3NpYmxlIHRvIGdldCBpbmRleCBhdG9tcyBmcm9tIGFycmF5c1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaW5nWyRtb2J4XS5hdG9tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNPYnNlcnZhYmxlU2V0KHRoaW5nKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpbmdbJG1vYnhdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNPYnNlcnZhYmxlTWFwKHRoaW5nKSkge1xyXG4gICAgICAgICAgICB2YXIgYW55VGhpbmcgPSB0aGluZztcclxuICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYW55VGhpbmcuX2tleXNBdG9tO1xyXG4gICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IGFueVRoaW5nLl9kYXRhLmdldChwcm9wZXJ0eSkgfHwgYW55VGhpbmcuX2hhc01hcC5nZXQocHJvcGVydHkpO1xyXG4gICAgICAgICAgICBpZiAoIW9ic2VydmFibGUpXHJcbiAgICAgICAgICAgICAgICBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFwidGhlIGVudHJ5ICdcIiArIHByb3BlcnR5ICsgXCInIGRvZXMgbm90IGV4aXN0IGluIHRoZSBvYnNlcnZhYmxlIG1hcCAnXCIgKyBnZXREZWJ1Z05hbWUodGhpbmcpICsgXCInXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZXJzIHJ1biBsYXppbHkgd2hlbiB0cmFuc3BpbGluZyB0byBiYWJlbCwgc28gbWFrZSBzdXJlIHRoZXkgYXJlIHJ1bi4uLlxyXG4gICAgICAgIGluaXRpYWxpemVJbnN0YW5jZSh0aGluZyk7XHJcbiAgICAgICAgaWYgKHByb3BlcnR5ICYmICF0aGluZ1skbW9ieF0pXHJcbiAgICAgICAgICAgIHRoaW5nW3Byb3BlcnR5XTsgLy8gU2VlICMxMDcyXHJcbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCh0aGluZykpIHtcclxuICAgICAgICAgICAgaWYgKCFwcm9wZXJ0eSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBcInBsZWFzZSBzcGVjaWZ5IGEgcHJvcGVydHlcIik7XHJcbiAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlID0gdGhpbmdbJG1vYnhdLnZhbHVlcy5nZXQocHJvcGVydHkpO1xyXG4gICAgICAgICAgICBpZiAoIW9ic2VydmFibGUpXHJcbiAgICAgICAgICAgICAgICBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFwibm8gb2JzZXJ2YWJsZSBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eSArIFwiJyBmb3VuZCBvbiB0aGUgb2JzZXJ2YWJsZSBvYmplY3QgJ1wiICsgZ2V0RGVidWdOYW1lKHRoaW5nKSArIFwiJ1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0F0b20odGhpbmcpIHx8IGlzQ29tcHV0ZWRWYWx1ZSh0aGluZykgfHwgaXNSZWFjdGlvbih0aGluZykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaW5nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHR5cGVvZiB0aGluZyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgaWYgKGlzUmVhY3Rpb24odGhpbmdbJG1vYnhdKSkge1xyXG4gICAgICAgICAgICAvLyBkaXNwb3NlciBmdW5jdGlvblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpbmdbJG1vYnhdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBcIkNhbm5vdCBvYnRhaW4gYXRvbSBmcm9tIFwiICsgdGhpbmcpO1xyXG59XHJcbmZ1bmN0aW9uIGdldEFkbWluaXN0cmF0aW9uKHRoaW5nLCBwcm9wZXJ0eSkge1xyXG4gICAgaWYgKCF0aGluZylcclxuICAgICAgICBmYWlsKFwiRXhwZWN0aW5nIHNvbWUgb2JqZWN0XCIpO1xyXG4gICAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgcmV0dXJuIGdldEFkbWluaXN0cmF0aW9uKGdldEF0b20odGhpbmcsIHByb3BlcnR5KSk7XHJcbiAgICBpZiAoaXNBdG9tKHRoaW5nKSB8fCBpc0NvbXB1dGVkVmFsdWUodGhpbmcpIHx8IGlzUmVhY3Rpb24odGhpbmcpKVxyXG4gICAgICAgIHJldHVybiB0aGluZztcclxuICAgIGlmIChpc09ic2VydmFibGVNYXAodGhpbmcpIHx8IGlzT2JzZXJ2YWJsZVNldCh0aGluZykpXHJcbiAgICAgICAgcmV0dXJuIHRoaW5nO1xyXG4gICAgLy8gSW5pdGlhbGl6ZXJzIHJ1biBsYXppbHkgd2hlbiB0cmFuc3BpbGluZyB0byBiYWJlbCwgc28gbWFrZSBzdXJlIHRoZXkgYXJlIHJ1bi4uLlxyXG4gICAgaW5pdGlhbGl6ZUluc3RhbmNlKHRoaW5nKTtcclxuICAgIGlmICh0aGluZ1skbW9ieF0pXHJcbiAgICAgICAgcmV0dXJuIHRoaW5nWyRtb2J4XTtcclxuICAgIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIFwiQ2Fubm90IG9idGFpbiBhZG1pbmlzdHJhdGlvbiBmcm9tIFwiICsgdGhpbmcpO1xyXG59XHJcbmZ1bmN0aW9uIGdldERlYnVnTmFtZSh0aGluZywgcHJvcGVydHkpIHtcclxuICAgIHZhciBuYW1lZDtcclxuICAgIGlmIChwcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIG5hbWVkID0gZ2V0QXRvbSh0aGluZywgcHJvcGVydHkpO1xyXG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHRoaW5nKSB8fCBpc09ic2VydmFibGVNYXAodGhpbmcpIHx8IGlzT2JzZXJ2YWJsZVNldCh0aGluZykpXHJcbiAgICAgICAgbmFtZWQgPSBnZXRBZG1pbmlzdHJhdGlvbih0aGluZyk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgbmFtZWQgPSBnZXRBdG9tKHRoaW5nKTsgLy8gdmFsaWQgZm9yIGFycmF5cyBhcyB3ZWxsXHJcbiAgICByZXR1cm4gbmFtZWQubmFtZTtcclxufVxuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xyXG5mdW5jdGlvbiBkZWVwRXF1YWwoYSwgYiwgZGVwdGgpIHtcclxuICAgIGlmIChkZXB0aCA9PT0gdm9pZCAwKSB7IGRlcHRoID0gLTE7IH1cclxuICAgIHJldHVybiBlcShhLCBiLCBkZXB0aCk7XHJcbn1cclxuLy8gQ29waWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2phc2hrZW5hcy91bmRlcnNjb3JlL2Jsb2IvNWMyMzdhN2M2ODJmYjY4ZmQ1Mzc4MjAzZjBiZjIyZGNlMTYyNDg1NC91bmRlcnNjb3JlLmpzI0wxMTg2LUwxMjg5XHJcbi8vIEludGVybmFsIHJlY3Vyc2l2ZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBgaXNFcXVhbGAuXHJcbmZ1bmN0aW9uIGVxKGEsIGIsIGRlcHRoLCBhU3RhY2ssIGJTdGFjaykge1xyXG4gICAgLy8gSWRlbnRpY2FsIG9iamVjdHMgYXJlIGVxdWFsLiBgMCA9PT0gLTBgLCBidXQgdGhleSBhcmVuJ3QgaWRlbnRpY2FsLlxyXG4gICAgLy8gU2VlIHRoZSBbSGFybW9ueSBgZWdhbGAgcHJvcG9zYWxdKGh0dHA6Ly93aWtpLmVjbWFzY3JpcHQub3JnL2Rva3UucGhwP2lkPWhhcm1vbnk6ZWdhbCkuXHJcbiAgICBpZiAoYSA9PT0gYilcclxuICAgICAgICByZXR1cm4gYSAhPT0gMCB8fCAxIC8gYSA9PT0gMSAvIGI7XHJcbiAgICAvLyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgb25seSBlcXVhbCB0byBpdHNlbGYgKHN0cmljdCBjb21wYXJpc29uKS5cclxuICAgIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIC8vIGBOYU5gcyBhcmUgZXF1aXZhbGVudCwgYnV0IG5vbi1yZWZsZXhpdmUuXHJcbiAgICBpZiAoYSAhPT0gYSlcclxuICAgICAgICByZXR1cm4gYiAhPT0gYjtcclxuICAgIC8vIEV4aGF1c3QgcHJpbWl0aXZlIGNoZWNrc1xyXG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgYTtcclxuICAgIGlmICh0eXBlICE9PSBcImZ1bmN0aW9uXCIgJiYgdHlwZSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgYiAhPSBcIm9iamVjdFwiKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIC8vIENvbXBhcmUgYFtbQ2xhc3NdXWAgbmFtZXMuXHJcbiAgICB2YXIgY2xhc3NOYW1lID0gdG9TdHJpbmcuY2FsbChhKTtcclxuICAgIGlmIChjbGFzc05hbWUgIT09IHRvU3RyaW5nLmNhbGwoYikpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgc3dpdGNoIChjbGFzc05hbWUpIHtcclxuICAgICAgICAvLyBTdHJpbmdzLCBudW1iZXJzLCByZWd1bGFyIGV4cHJlc3Npb25zLCBkYXRlcywgYW5kIGJvb2xlYW5zIGFyZSBjb21wYXJlZCBieSB2YWx1ZS5cclxuICAgICAgICBjYXNlIFwiW29iamVjdCBSZWdFeHBdXCI6XHJcbiAgICAgICAgLy8gUmVnRXhwcyBhcmUgY29lcmNlZCB0byBzdHJpbmdzIGZvciBjb21wYXJpc29uIChOb3RlOiAnJyArIC9hL2kgPT09ICcvYS9pJylcclxuICAgICAgICBjYXNlIFwiW29iamVjdCBTdHJpbmddXCI6XHJcbiAgICAgICAgICAgIC8vIFByaW1pdGl2ZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgb2JqZWN0IHdyYXBwZXJzIGFyZSBlcXVpdmFsZW50OyB0aHVzLCBgXCI1XCJgIGlzXHJcbiAgICAgICAgICAgIC8vIGVxdWl2YWxlbnQgdG8gYG5ldyBTdHJpbmcoXCI1XCIpYC5cclxuICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyBhID09PSBcIlwiICsgYjtcclxuICAgICAgICBjYXNlIFwiW29iamVjdCBOdW1iZXJdXCI6XHJcbiAgICAgICAgICAgIC8vIGBOYU5gcyBhcmUgZXF1aXZhbGVudCwgYnV0IG5vbi1yZWZsZXhpdmUuXHJcbiAgICAgICAgICAgIC8vIE9iamVjdChOYU4pIGlzIGVxdWl2YWxlbnQgdG8gTmFOLlxyXG4gICAgICAgICAgICBpZiAoK2EgIT09ICthKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICtiICE9PSArYjtcclxuICAgICAgICAgICAgLy8gQW4gYGVnYWxgIGNvbXBhcmlzb24gaXMgcGVyZm9ybWVkIGZvciBvdGhlciBudW1lcmljIHZhbHVlcy5cclxuICAgICAgICAgICAgcmV0dXJuICthID09PSAwID8gMSAvICthID09PSAxIC8gYiA6ICthID09PSArYjtcclxuICAgICAgICBjYXNlIFwiW29iamVjdCBEYXRlXVwiOlxyXG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IEJvb2xlYW5dXCI6XHJcbiAgICAgICAgICAgIC8vIENvZXJjZSBkYXRlcyBhbmQgYm9vbGVhbnMgdG8gbnVtZXJpYyBwcmltaXRpdmUgdmFsdWVzLiBEYXRlcyBhcmUgY29tcGFyZWQgYnkgdGhlaXJcclxuICAgICAgICAgICAgLy8gbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zLiBOb3RlIHRoYXQgaW52YWxpZCBkYXRlcyB3aXRoIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9uc1xyXG4gICAgICAgICAgICAvLyBvZiBgTmFOYCBhcmUgbm90IGVxdWl2YWxlbnQuXHJcbiAgICAgICAgICAgIHJldHVybiArYSA9PT0gK2I7XHJcbiAgICAgICAgY2FzZSBcIltvYmplY3QgU3ltYm9sXVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLnZhbHVlT2YuY2FsbChhKSA9PT0gU3ltYm9sLnZhbHVlT2YuY2FsbChiKSk7XHJcbiAgICAgICAgY2FzZSBcIltvYmplY3QgTWFwXVwiOlxyXG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IFNldF1cIjpcclxuICAgICAgICAgICAgLy8gTWFwcyBhbmQgU2V0cyBhcmUgdW53cmFwcGVkIHRvIGFycmF5cyBvZiBlbnRyeS1wYWlycywgYWRkaW5nIGFuIGluY2lkZW50YWwgbGV2ZWwuXHJcbiAgICAgICAgICAgIC8vIEhpZGUgdGhpcyBleHRyYSBsZXZlbCBieSBpbmNyZWFzaW5nIHRoZSBkZXB0aC5cclxuICAgICAgICAgICAgaWYgKGRlcHRoID49IDApIHtcclxuICAgICAgICAgICAgICAgIGRlcHRoKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICAvLyBVbndyYXAgYW55IHdyYXBwZWQgb2JqZWN0cy5cclxuICAgIGEgPSB1bndyYXAoYSk7XHJcbiAgICBiID0gdW53cmFwKGIpO1xyXG4gICAgdmFyIGFyZUFycmF5cyA9IGNsYXNzTmFtZSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xyXG4gICAgaWYgKCFhcmVBcnJheXMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGEgIT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgYiAhPSBcIm9iamVjdFwiKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8gT2JqZWN0cyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVpdmFsZW50LCBidXQgYE9iamVjdGBzIG9yIGBBcnJheWBzXHJcbiAgICAgICAgLy8gZnJvbSBkaWZmZXJlbnQgZnJhbWVzIGFyZS5cclxuICAgICAgICB2YXIgYUN0b3IgPSBhLmNvbnN0cnVjdG9yLCBiQ3RvciA9IGIuY29uc3RydWN0b3I7XHJcbiAgICAgICAgaWYgKGFDdG9yICE9PSBiQ3RvciAmJlxyXG4gICAgICAgICAgICAhKHR5cGVvZiBhQ3RvciA9PT0gXCJmdW5jdGlvblwiICYmXHJcbiAgICAgICAgICAgICAgICBhQ3RvciBpbnN0YW5jZW9mIGFDdG9yICYmXHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgYkN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG4gICAgICAgICAgICAgICAgYkN0b3IgaW5zdGFuY2VvZiBiQ3RvcikgJiZcclxuICAgICAgICAgICAgKFwiY29uc3RydWN0b3JcIiBpbiBhICYmIFwiY29uc3RydWN0b3JcIiBpbiBiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGRlcHRoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGVwdGggPCAwKSB7XHJcbiAgICAgICAgZGVwdGggPSAtMTtcclxuICAgIH1cclxuICAgIC8vIEFzc3VtZSBlcXVhbGl0eSBmb3IgY3ljbGljIHN0cnVjdHVyZXMuIFRoZSBhbGdvcml0aG0gZm9yIGRldGVjdGluZyBjeWNsaWNcclxuICAgIC8vIHN0cnVjdHVyZXMgaXMgYWRhcHRlZCBmcm9tIEVTIDUuMSBzZWN0aW9uIDE1LjEyLjMsIGFic3RyYWN0IG9wZXJhdGlvbiBgSk9gLlxyXG4gICAgLy8gSW5pdGlhbGl6aW5nIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxyXG4gICAgLy8gSXQncyBkb25lIGhlcmUgc2luY2Ugd2Ugb25seSBuZWVkIHRoZW0gZm9yIG9iamVjdHMgYW5kIGFycmF5cyBjb21wYXJpc29uLlxyXG4gICAgYVN0YWNrID0gYVN0YWNrIHx8IFtdO1xyXG4gICAgYlN0YWNrID0gYlN0YWNrIHx8IFtdO1xyXG4gICAgdmFyIGxlbmd0aCA9IGFTdGFjay5sZW5ndGg7XHJcbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcclxuICAgICAgICAvLyBMaW5lYXIgc2VhcmNoLiBQZXJmb3JtYW5jZSBpcyBpbnZlcnNlbHkgcHJvcG9ydGlvbmFsIHRvIHRoZSBudW1iZXIgb2ZcclxuICAgICAgICAvLyB1bmlxdWUgbmVzdGVkIHN0cnVjdHVyZXMuXHJcbiAgICAgICAgaWYgKGFTdGFja1tsZW5ndGhdID09PSBhKVxyXG4gICAgICAgICAgICByZXR1cm4gYlN0YWNrW2xlbmd0aF0gPT09IGI7XHJcbiAgICB9XHJcbiAgICAvLyBBZGQgdGhlIGZpcnN0IG9iamVjdCB0byB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXHJcbiAgICBhU3RhY2sucHVzaChhKTtcclxuICAgIGJTdGFjay5wdXNoKGIpO1xyXG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIGFuZCBhcnJheXMuXHJcbiAgICBpZiAoYXJlQXJyYXlzKSB7XHJcbiAgICAgICAgLy8gQ29tcGFyZSBhcnJheSBsZW5ndGhzIHRvIGRldGVybWluZSBpZiBhIGRlZXAgY29tcGFyaXNvbiBpcyBuZWNlc3NhcnkuXHJcbiAgICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gYi5sZW5ndGgpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyBEZWVwIGNvbXBhcmUgdGhlIGNvbnRlbnRzLCBpZ25vcmluZyBub24tbnVtZXJpYyBwcm9wZXJ0aWVzLlxyXG4gICAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xyXG4gICAgICAgICAgICBpZiAoIWVxKGFbbGVuZ3RoXSwgYltsZW5ndGhdLCBkZXB0aCAtIDEsIGFTdGFjaywgYlN0YWNrKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyBEZWVwIGNvbXBhcmUgb2JqZWN0cy5cclxuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGEpO1xyXG4gICAgICAgIHZhciBrZXkgPSB2b2lkIDA7XHJcbiAgICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XHJcbiAgICAgICAgLy8gRW5zdXJlIHRoYXQgYm90aCBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUgbnVtYmVyIG9mIHByb3BlcnRpZXMgYmVmb3JlIGNvbXBhcmluZyBkZWVwIGVxdWFsaXR5LlxyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhiKS5sZW5ndGggIT09IGxlbmd0aClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xyXG4gICAgICAgICAgICAvLyBEZWVwIGNvbXBhcmUgZWFjaCBtZW1iZXJcclxuICAgICAgICAgICAga2V5ID0ga2V5c1tsZW5ndGhdO1xyXG4gICAgICAgICAgICBpZiAoIShoYXMkMShiLCBrZXkpICYmIGVxKGFba2V5XSwgYltrZXldLCBkZXB0aCAtIDEsIGFTdGFjaywgYlN0YWNrKSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBvYmplY3QgZnJvbSB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXHJcbiAgICBhU3RhY2sucG9wKCk7XHJcbiAgICBiU3RhY2sucG9wKCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5mdW5jdGlvbiB1bndyYXAoYSkge1xyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KGEpKVxyXG4gICAgICAgIHJldHVybiBhLnNsaWNlKCk7XHJcbiAgICBpZiAoaXNFUzZNYXAoYSkgfHwgaXNPYnNlcnZhYmxlTWFwKGEpKVxyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGEuZW50cmllcygpKTtcclxuICAgIGlmIChpc0VTNlNldChhKSB8fCBpc09ic2VydmFibGVTZXQoYSkpXHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYS5lbnRyaWVzKCkpO1xyXG4gICAgcmV0dXJuIGE7XHJcbn1cclxuZnVuY3Rpb24gaGFzJDEoYSwga2V5KSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEsIGtleSk7XHJcbn1cblxuZnVuY3Rpb24gbWFrZUl0ZXJhYmxlKGl0ZXJhdG9yKSB7XHJcbiAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZ2V0U2VsZjtcclxuICAgIHJldHVybiBpdGVyYXRvcjtcclxufVxyXG5mdW5jdGlvbiBnZXRTZWxmKCkge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbn1cblxuLypcclxuVGhlIG9ubHkgcmVhc29uIGZvciB0aGlzIGZpbGUgdG8gZXhpc3QgaXMgcHVyZSBob3Jyb3I6XHJcbldpdGhvdXQgaXQgcm9sbHVwIGNhbiBtYWtlIHRoZSBidW5kbGluZyBmYWlsIGF0IGFueSBwb2ludCBpbiB0aW1lOyB3aGVuIGl0IHJvbGxzIHVwIHRoZSBmaWxlcyBpbiB0aGUgd3Jvbmcgb3JkZXJcclxuaXQgd2lsbCBjYXVzZSB1bmRlZmluZWQgZXJyb3JzIChmb3IgZXhhbXBsZSBiZWNhdXNlIHN1cGVyIGNsYXNzZXMgb3IgbG9jYWwgdmFyaWFibGVzIG5vdCBiZWluZyBob2lzdGVkKS5cclxuV2l0aCB0aGlzIGZpbGUgdGhhdCB3aWxsIHN0aWxsIGhhcHBlbixcclxuYnV0IGF0IGxlYXN0IGluIHRoaXMgZmlsZSB3ZSBjYW4gbWFnaWNhbGx5IHJlb3JkZXIgdGhlIGltcG9ydHMgd2l0aCB0cmlhbCBhbmQgZXJyb3IgdW50aWwgdGhlIGJ1aWxkIHN1Y2NlZWRzIGFnYWluLlxyXG4qL1xuXG4vKipcclxuICogKGMpIE1pY2hlbCBXZXN0c3RyYXRlIDIwMTUgLSAyMDE4XHJcbiAqIE1JVCBMaWNlbnNlZFxyXG4gKlxyXG4gKiBXZWxjb21lIHRvIHRoZSBtb2J4IHNvdXJjZXMhIFRvIGdldCBhbiBnbG9iYWwgb3ZlcnZpZXcgb2YgaG93IE1vYlggaW50ZXJuYWxseSB3b3JrcyxcclxuICogdGhpcyBpcyBhIGdvb2QgcGxhY2UgdG8gc3RhcnQ6XHJcbiAqIGh0dHBzOi8vbWVkaXVtLmNvbS9AbXdlc3RzdHJhdGUvYmVjb21pbmctZnVsbHktcmVhY3RpdmUtYW4taW4tZGVwdGgtZXhwbGFuYXRpb24tb2YtbW9ic2VydmFibGUtNTU5OTUyNjJhMjU0Iy54dmJoNnFkNzRcclxuICpcclxuICogU291cmNlIGZvbGRlcnM6XHJcbiAqID09PT09PT09PT09PT09PVxyXG4gKlxyXG4gKiAtIGFwaS8gICAgIE1vc3Qgb2YgdGhlIHB1YmxpYyBzdGF0aWMgbWV0aG9kcyBleHBvc2VkIGJ5IHRoZSBtb2R1bGUgY2FuIGJlIGZvdW5kIGhlcmUuXHJcbiAqIC0gY29yZS8gICAgSW1wbGVtZW50YXRpb24gb2YgdGhlIE1vYlggYWxnb3JpdGhtOyBhdG9tcywgZGVyaXZhdGlvbnMsIHJlYWN0aW9ucywgZGVwZW5kZW5jeSB0cmVlcywgb3B0aW1pemF0aW9ucy4gQ29vbCBzdHVmZiBjYW4gYmUgZm91bmQgaGVyZS5cclxuICogLSB0eXBlcy8gICBBbGwgdGhlIG1hZ2ljIHRoYXQgaXMgbmVlZCB0byBoYXZlIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCB2YWx1ZXMgaXMgaW4gdGhpcyBmb2xkZXIuIEluY2x1ZGluZyB0aGUgbW9kaWZpZXJzIGxpa2UgYGFzRmxhdGAuXHJcbiAqIC0gdXRpbHMvICAgVXRpbGl0eSBzdHVmZi5cclxuICpcclxuICovXHJcbmlmICh0eXBlb2YgUHJveHkgPT09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiW21vYnhdIE1vYlggNSsgcmVxdWlyZXMgUHJveHkgYW5kIFN5bWJvbCBvYmplY3RzLiBJZiB5b3VyIGVudmlyb25tZW50IGRvZXNuJ3Qgc3VwcG9ydCBTeW1ib2wgb3IgUHJveHkgb2JqZWN0cywgcGxlYXNlIGRvd25ncmFkZSB0byBNb2JYIDQuIEZvciBSZWFjdCBOYXRpdmUgQW5kcm9pZCwgY29uc2lkZXIgdXBncmFkaW5nIEpTQ29yZS5cIik7XHJcbn1cclxudHJ5IHtcclxuICAgIC8vIGRlZmluZSBwcm9jZXNzLmVudiBpZiBuZWVkZWRcclxuICAgIC8vIGlmIHRoaXMgaXMgbm90IGEgcHJvZHVjdGlvbiBidWlsZCBpbiB0aGUgZmlyc3QgcGxhY2VcclxuICAgIC8vIChpbiB3aGljaCBjYXNlIHRoZSBleHByZXNzaW9uIGJlbG93IHdvdWxkIGJlIHN1YnN0aXR1dGVkIHdpdGggJ3Byb2R1Y3Rpb24nKVxyXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XHJcbn1cclxuY2F0Y2ggKGUpIHtcclxuICAgIHZhciBnID0gZ2V0R2xvYmFsKCk7XHJcbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgZy5wcm9jZXNzID0ge307XHJcbiAgICBnLnByb2Nlc3MuZW52ID0ge307XHJcbn1cclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIHRlc3RDb2RlTWluaWZpY2F0aW9uKCkgeyB9XHJcbiAgICBpZiAodGVzdENvZGVNaW5pZmljYXRpb24ubmFtZSAhPT0gXCJ0ZXN0Q29kZU1pbmlmaWNhdGlvblwiICYmXHJcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuZW52LklHTk9SRV9NT0JYX01JTklGWV9XQVJOSU5HICE9PSBcInRydWVcIikge1xyXG4gICAgICAgIC8vIHRyaWNrIHNvIGl0IGRvZXNuJ3QgZ2V0IHJlcGxhY2VkXHJcbiAgICAgICAgdmFyIHZhck5hbWUgPSBbXCJwcm9jZXNzXCIsIFwiZW52XCIsIFwiTk9ERV9FTlZcIl0uam9pbihcIi5cIik7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiW21vYnhdIHlvdSBhcmUgcnVubmluZyBhIG1pbmlmaWVkIGJ1aWxkLCBidXQgJ1wiICsgdmFyTmFtZSArIFwiJyB3YXMgbm90IHNldCB0byAncHJvZHVjdGlvbicgaW4geW91ciBidW5kbGVyLiBUaGlzIHJlc3VsdHMgaW4gYW4gdW5uZWNlc3NhcmlseSBsYXJnZSBhbmQgc2xvdyBidW5kbGVcIik7XHJcbiAgICB9XHJcbn0pKCk7XHJcbmlmICh0eXBlb2YgX19NT0JYX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gPT09IFwib2JqZWN0XCIpIHtcclxuICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZHlrb2cvbW9ieC1kZXZ0b29scy9cclxuICAgIF9fTU9CWF9ERVZUT09MU19HTE9CQUxfSE9PS19fLmluamVjdE1vYngoe1xyXG4gICAgICAgIHNweTogc3B5LFxyXG4gICAgICAgIGV4dHJhczoge1xyXG4gICAgICAgICAgICBnZXREZWJ1Z05hbWU6IGdldERlYnVnTmFtZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJG1vYng6ICRtb2J4XHJcbiAgICB9KTtcclxufVxuXG5leHBvcnQgeyAkbW9ieCwgRmxvd0NhbmNlbGxhdGlvbkVycm9yLCBJRGVyaXZhdGlvblN0YXRlLCBPYnNlcnZhYmxlTWFwLCBPYnNlcnZhYmxlU2V0LCBSZWFjdGlvbiwgYWxsb3dTdGF0ZUNoYW5nZXMgYXMgX2FsbG93U3RhdGVDaGFuZ2VzLCBhbGxvd1N0YXRlQ2hhbmdlc0luc2lkZUNvbXB1dGVkIGFzIF9hbGxvd1N0YXRlQ2hhbmdlc0luc2lkZUNvbXB1dGVkLCBhbGxvd1N0YXRlUmVhZHNFbmQgYXMgX2FsbG93U3RhdGVSZWFkc0VuZCwgYWxsb3dTdGF0ZVJlYWRzU3RhcnQgYXMgX2FsbG93U3RhdGVSZWFkc1N0YXJ0LCBfZW5kQWN0aW9uLCBnZXRBZG1pbmlzdHJhdGlvbiBhcyBfZ2V0QWRtaW5pc3RyYXRpb24sIGdldEdsb2JhbFN0YXRlIGFzIF9nZXRHbG9iYWxTdGF0ZSwgaW50ZXJjZXB0UmVhZHMgYXMgX2ludGVyY2VwdFJlYWRzLCBpc0NvbXB1dGluZ0Rlcml2YXRpb24gYXMgX2lzQ29tcHV0aW5nRGVyaXZhdGlvbiwgcmVzZXRHbG9iYWxTdGF0ZSBhcyBfcmVzZXRHbG9iYWxTdGF0ZSwgX3N0YXJ0QWN0aW9uLCBhY3Rpb24sIGF1dG9ydW4sIGNvbXBhcmVyLCBjb21wdXRlZCwgY29uZmlndXJlLCBjcmVhdGVBdG9tLCBkZWNvcmF0ZSwgZW50cmllcywgZXh0ZW5kT2JzZXJ2YWJsZSwgZmxvdywgZ2V0LCBnZXRBdG9tLCBnZXREZWJ1Z05hbWUsIGdldERlcGVuZGVuY3lUcmVlLCBnZXRPYnNlcnZlclRyZWUsIGhhcywgaW50ZXJjZXB0LCBpc0FjdGlvbiwgaXNBcnJheUxpa2UsIGlzT2JzZXJ2YWJsZVZhbHVlIGFzIGlzQm94ZWRPYnNlcnZhYmxlLCBpc0NvbXB1dGVkLCBpc0NvbXB1dGVkUHJvcCwgaXNGbG93Q2FuY2VsbGF0aW9uRXJyb3IsIGlzT2JzZXJ2YWJsZSwgaXNPYnNlcnZhYmxlQXJyYXksIGlzT2JzZXJ2YWJsZU1hcCwgaXNPYnNlcnZhYmxlT2JqZWN0LCBpc09ic2VydmFibGVQcm9wLCBpc09ic2VydmFibGVTZXQsIGtleXMsIG9ic2VydmFibGUsIG9ic2VydmUsIG9uQmVjb21lT2JzZXJ2ZWQsIG9uQmVjb21lVW5vYnNlcnZlZCwgb25SZWFjdGlvbkVycm9yLCByZWFjdGlvbiwgcmVtb3ZlLCBydW5JbkFjdGlvbiwgc2V0LCBzcHksIHRvSlMsIHRyYWNlLCB0cmFuc2FjdGlvbiwgdW50cmFja2VkLCB2YWx1ZXMsIHdoZW4gfTtcbiIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccGpoODZcXFxcRGVza3RvcFxcXFxQcm9qZWN0XFxcXG5leHRqc19maXJzdFxcXFxwYWdlc1xcXFxpbmRleC50c3hcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGRsbF9lYzdkOWMwMjQ5YjJlZjUyYjc0YyAqLyBcImRsbC1yZWZlcmVuY2UgZGxsX2VjN2Q5YzAyNDliMmVmNTJiNzRjXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzXCIpOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUb2RvTGlzdCwgeyBJVG9kb0l0ZW0gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ub2RvTGlzdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xyXG5pbXBvcnQgeyBpbmplY3QsIG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcblx0c3RvcmU6IFN0b3JlO1xyXG59XHJcblxyXG5AaW5qZWN0KFwic3RvcmVcIilcclxuQG9ic2VydmVyXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuaGFuZGxlQXBwZW5kVG9kbyA9IHRoaXMuaGFuZGxlQXBwZW5kVG9kby5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHRyZW5kZXIoKSB7XHJcblx0XHQvLyBjb25zdCB7IHRvZG9TdG9yZSB9ID0gdGhpcy5wcm9wcztcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgaWQ9XCJhcHBcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZG9cIj5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInRvZG9fX2lucHV0XCIgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVBcHBlbmRUb2RvfSAvPlxyXG5cdFx0XHRcdFx0PFRvZG9MaXN0IGxpc3Q9e3RoaXMucHJvcHMuc3RvcmUudG9kb2xpc3R9PjwvVG9kb0xpc3Q+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcblx0aGFuZGxlQXBwZW5kVG9kbyhlOiBSZWFjdC5LZXlib2FyZEV2ZW50KSB7XHJcblx0XHRpZiAoZS5rZXkgPT0gXCJFbnRlclwiKSB7XHJcblx0XHRcdGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblx0XHRcdHRoaXMucHJvcHMuc3RvcmUuYWRkVG9kbyh7XHJcblx0XHRcdFx0bmFtZTogdmFsdWUsXHJcblx0XHRcdFx0aXNGaW5pc2hlZDogZmFsc2UsXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gZGxsX2VjN2Q5YzAyNDliMmVmNTJiNzRjOyJdLCJzb3VyY2VSb290IjoiIn0=