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
        className:  true ? "finish" : undefined,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG9JdGVtLnRzeCJdLCJuYW1lcyI6WyJUb2RvSXRlbSIsImluamVjdCIsIm9ic2VydmVyIiwicHJvcHMiLCJoYW5kbGVSZW1vdmVUaGlzIiwiYmluZCIsImhhbmRsZVRvZG9GaW5pc2giLCJpdGVtIiwibmFtZSIsInN0b3JlIiwicmVtb3ZlVG9kbyIsImlzRmluaXNoZWQiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlVG9kbyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7SUFVTUEsUSxXQUZMQyx5REFBTSxDQUFDLE9BQUQsQyxnQkFDTkMsMkQ7Ozs7O0FBRUEsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDbEIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkMsSUFBdEIseUdBQXhCO0FBQ0EsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JELElBQXRCLHlHQUF4QjtBQUhrQjtBQUlsQjs7Ozs2QkFDUTtBQUFBLFVBQ0FFLElBREEsR0FDUyxLQUFLSixLQURkLENBQ0FJLElBREE7QUFFUixhQUNDO0FBQUksaUJBQVMsRUFBRSxRQUFxQyxRQUFyQyxHQUFnRCxTQUEvRDtBQUFtRSxlQUFPLEVBQUUsS0FBS0QsZ0JBQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUlDLElBQUksQ0FBQ0MsSUFBVCxDQURELEVBRUM7QUFBUSxlQUFPLEVBQUUsS0FBS0osZ0JBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRCxDQUREO0FBTUE7Ozt1Q0FDa0I7QUFBQSx3QkFDSSxLQUFLRCxLQURUO0FBQUEsVUFDWkksSUFEWSxlQUNaQSxJQURZO0FBQUEsVUFDTkUsS0FETSxlQUNOQSxLQURNO0FBR2xCQSxXQUFLLENBQUNDLFVBQU4sQ0FBaUJILElBQWpCO0FBQ0E7Ozt1Q0FDa0I7QUFBQSxVQUNaQSxJQURZLEdBQ0gsS0FBS0osS0FERixDQUNaSSxJQURZO0FBRWxCQSxVQUFJLENBQUNJLFVBQUwsR0FBa0IsQ0FBQ0osSUFBSSxDQUFDSSxVQUF4QjtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWU4sSUFBSSxDQUFDSSxVQUFqQjtBQUNBLFdBQUtSLEtBQUwsQ0FBV00sS0FBWCxDQUFpQkssVUFBakIsQ0FBNEJQLElBQTVCO0FBQ0E7Ozs7RUF6QnFCUSw0Q0FBSyxDQUFDQyxTO0FBNEJkaEIsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmM2MTlmMDYzYjhmZjhlMTBmMjAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vVG9kb0l0ZW0uc2Nzc1wiO1xyXG5pbXBvcnQgeyBJVG9kb0l0ZW0gfSBmcm9tIFwiLi9Ub2RvTGlzdFwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciwgaW5qZWN0IH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcblx0c3RvcmU/OiBTdG9yZTtcclxuXHRpdGVtOiBJVG9kb0l0ZW07XHJcbn1cclxuXHJcbkBpbmplY3QoXCJzdG9yZVwiKVxyXG5Ab2JzZXJ2ZXJcclxuY2xhc3MgVG9kb0l0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5oYW5kbGVSZW1vdmVUaGlzID0gdGhpcy5oYW5kbGVSZW1vdmVUaGlzLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmhhbmRsZVRvZG9GaW5pc2ggPSB0aGlzLmhhbmRsZVRvZG9GaW5pc2guYmluZCh0aGlzKTtcclxuXHR9XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBpdGVtIH0gPSB0aGlzLnByb3BzO1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGxpIGNsYXNzTmFtZT17XCJ0b2RvbGlzdF9faXRlbVwiICsgaXRlbS5pc0ZpbmlzaGVkID8gXCJmaW5pc2hcIiA6IFwiXCJ9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG9kb0ZpbmlzaH0+XHJcblx0XHRcdFx0PHA+e2l0ZW0ubmFtZX08L3A+XHJcblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbW92ZVRoaXN9Plg8L2J1dHRvbj5cclxuXHRcdFx0PC9saT5cclxuXHRcdCk7XHJcblx0fVxyXG5cdGhhbmRsZVJlbW92ZVRoaXMoKSB7XHJcblx0XHRsZXQgeyBpdGVtLCBzdG9yZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRzdG9yZS5yZW1vdmVUb2RvKGl0ZW0pO1xyXG5cdH1cclxuXHRoYW5kbGVUb2RvRmluaXNoKCkge1xyXG5cdFx0bGV0IHsgaXRlbSB9ID0gdGhpcy5wcm9wcztcclxuXHRcdGl0ZW0uaXNGaW5pc2hlZCA9ICFpdGVtLmlzRmluaXNoZWQ7XHJcblx0XHRjb25zb2xlLmxvZyhpdGVtLmlzRmluaXNoZWQpO1xyXG5cdFx0dGhpcy5wcm9wcy5zdG9yZS51cGRhdGVUb2RvKGl0ZW0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0l0ZW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=