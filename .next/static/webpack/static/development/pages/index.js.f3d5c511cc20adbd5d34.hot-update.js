webpackHotUpdate("static\\development\\pages\\index.js",{

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
        className: "todolist__item",
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG9JdGVtLnRzeCJdLCJuYW1lcyI6WyJUb2RvSXRlbSIsImluamVjdCIsIm9ic2VydmVyIiwicHJvcHMiLCJoYW5kbGVSZW1vdmVUaGlzIiwiYmluZCIsImhhbmRsZVRvZG9GaW5pc2giLCJpdGVtIiwibmFtZSIsInN0b3JlIiwicmVtb3ZlVG9kbyIsImlzRmluaXNoZWQiLCJ1cGRhdGVUb2RvIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtJQVVNQSxRLFdBRkxDLHlEQUFNLENBQUMsT0FBRCxDLGdCQUNOQywyRDs7Ozs7QUFFQSxvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNsQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCQyxJQUF0Qix5R0FBeEI7QUFDQSxVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkQsSUFBdEIseUdBQXhCO0FBSGtCO0FBSWxCOzs7OzZCQUNRO0FBQUEsVUFDQUUsSUFEQSxHQUNTLEtBQUtKLEtBRGQsQ0FDQUksSUFEQTtBQUVSLGFBQ0M7QUFBSSxpQkFBUyxFQUFDLGdCQUFkO0FBQStCLGVBQU8sRUFBRSxLQUFLRCxnQkFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSUMsSUFBSSxDQUFDQyxJQUFULENBREQsRUFFQztBQUFRLGVBQU8sRUFBRSxLQUFLSixnQkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZELENBREQ7QUFNQTs7O3VDQUNrQjtBQUFBLHdCQUNJLEtBQUtELEtBRFQ7QUFBQSxVQUNaSSxJQURZLGVBQ1pBLElBRFk7QUFBQSxVQUNORSxLQURNLGVBQ05BLEtBRE07QUFHbEJBLFdBQUssQ0FBQ0MsVUFBTixDQUFpQkgsSUFBakI7QUFDQTs7O3VDQUNrQjtBQUFBLFVBQ1pBLElBRFksR0FDSCxLQUFLSixLQURGLENBQ1pJLElBRFk7QUFFbEJBLFVBQUksQ0FBQ0ksVUFBTCxHQUFrQixDQUFDSixJQUFJLENBQUNJLFVBQXhCO0FBQ0EsV0FBS1IsS0FBTCxDQUFXTSxLQUFYLENBQWlCRyxVQUFqQixDQUE0QkwsSUFBNUI7QUFDQTs7OztFQXhCcUJNLDRDQUFLLENBQUNDLFM7QUEyQmRkLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5mM2Q1YzUxMWNjMjBhZGJkNWQzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuL1RvZG9JdGVtLnNjc3NcIjtcclxuaW1wb3J0IHsgSVRvZG9JdGVtIH0gZnJvbSBcIi4vVG9kb0xpc3RcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIsIGluamVjdCB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG5cdHN0b3JlPzogU3RvcmU7XHJcblx0aXRlbTogSVRvZG9JdGVtO1xyXG59XHJcblxyXG5AaW5qZWN0KFwic3RvcmVcIilcclxuQG9ic2VydmVyXHJcbmNsYXNzIFRvZG9JdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuaGFuZGxlUmVtb3ZlVGhpcyA9IHRoaXMuaGFuZGxlUmVtb3ZlVGhpcy5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5oYW5kbGVUb2RvRmluaXNoID0gdGhpcy5oYW5kbGVUb2RvRmluaXNoLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgaXRlbSB9ID0gdGhpcy5wcm9wcztcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxsaSBjbGFzc05hbWU9XCJ0b2RvbGlzdF9faXRlbVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG9kb0ZpbmlzaH0+XHJcblx0XHRcdFx0PHA+e2l0ZW0ubmFtZX08L3A+XHJcblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbW92ZVRoaXN9Plg8L2J1dHRvbj5cclxuXHRcdFx0PC9saT5cclxuXHRcdCk7XHJcblx0fVxyXG5cdGhhbmRsZVJlbW92ZVRoaXMoKSB7XHJcblx0XHRsZXQgeyBpdGVtLCBzdG9yZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRzdG9yZS5yZW1vdmVUb2RvKGl0ZW0pO1xyXG5cdH1cclxuXHRoYW5kbGVUb2RvRmluaXNoKCkge1xyXG5cdFx0bGV0IHsgaXRlbSB9ID0gdGhpcy5wcm9wcztcclxuXHRcdGl0ZW0uaXNGaW5pc2hlZCA9ICFpdGVtLmlzRmluaXNoZWQ7XHJcblx0XHR0aGlzLnByb3BzLnN0b3JlLnVwZGF0ZVRvZG8oaXRlbSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvSXRlbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==