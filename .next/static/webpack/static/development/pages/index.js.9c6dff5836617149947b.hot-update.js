webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TodoList */ "./components/TodoList.tsx");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.scss */ "./pages/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "D:\\develop\\next_first\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      todolist: [{
        name: "Hello",
        isFinished: false
      }]
    });

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
          lineNumber: 18,
          columnNumber: 4
        }
      }, __jsx("div", {
        className: "todo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 5
        }
      }, __jsx("input", {
        type: "text",
        className: "todo__input",
        onKeyPress: this.handleAppendTodo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 6
        }
      }), __jsx(_components_TodoList__WEBPACK_IMPORTED_MODULE_8__["default"], {
        list: this.state.todolist,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 6
        }
      })));
    }
  }, {
    key: "handleAppendTodo",
    value: function handleAppendTodo(e) {
      var _this2 = this;

      if (e.keyCode == 13) {
        var _ref = e.target,
            value = _ref.value;
        this.state.todolist.push({
          name: value,
          isFinished: false
        });
        console.log(this.state.todolist);
        this.setState(function () {
          return {
            todolist: _this2.state.todolist
          };
        });
      }
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsInRvZG9saXN0IiwibmFtZSIsImlzRmluaXNoZWQiLCJoYW5kbGVBcHBlbmRUb2RvIiwiYmluZCIsInN0YXRlIiwiZSIsImtleUNvZGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7SUFFTUEsSzs7Ozs7QUFDTCxpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNsQiw4QkFBTUEsS0FBTjs7QUFEa0IsZ05BS1g7QUFDUEMsY0FBUSxFQUFFLENBQUM7QUFBRUMsWUFBSSxFQUFFLE9BQVI7QUFBaUJDLGtCQUFVLEVBQUU7QUFBN0IsT0FBRDtBQURILEtBTFc7O0FBRWxCLFVBQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCQyxJQUF0Qix5R0FBeEI7QUFGa0I7QUFHbEI7Ozs7NkJBS1E7QUFDUjtBQUNBLGFBQ0M7QUFBSyxVQUFFLEVBQUMsS0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsaUJBQVMsRUFBQyxhQUE3QjtBQUEyQyxrQkFBVSxFQUFFLEtBQUtELGdCQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQsRUFFQyxNQUFDLDREQUFEO0FBQVUsWUFBSSxFQUFFLEtBQUtFLEtBQUwsQ0FBV0wsUUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZELENBREQsQ0FERDtBQVFBOzs7cUNBQ2dCTSxDLEVBQXdCO0FBQUE7O0FBQ3hDLFVBQUlBLENBQUMsQ0FBQ0MsT0FBRixJQUFhLEVBQWpCLEVBQXFCO0FBQUEsbUJBQ0ZELENBQUMsQ0FBQ0UsTUFEQTtBQUFBLFlBQ1pDLEtBRFksUUFDWkEsS0FEWTtBQUVwQixhQUFLSixLQUFMLENBQVdMLFFBQVgsQ0FBb0JVLElBQXBCLENBQXlCO0FBQ3hCVCxjQUFJLEVBQUVRLEtBRGtCO0FBRXhCUCxvQkFBVSxFQUFFO0FBRlksU0FBekI7QUFJQVMsZUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS1AsS0FBTCxDQUFXTCxRQUF2QjtBQUNBLGFBQUthLFFBQUwsQ0FBYztBQUFBLGlCQUFPO0FBQ3BCYixvQkFBUSxFQUFFLE1BQUksQ0FBQ0ssS0FBTCxDQUFXTDtBQURELFdBQVA7QUFBQSxTQUFkO0FBR0E7QUFDRDs7OztFQWhDa0JjLDRDQUFLLENBQUNDLFM7O0FBbUNYakIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjljNmRmZjU4MzY2MTcxNDk5NDdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUb2RvTGlzdCwgeyBJVG9kb0l0ZW0gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ub2RvTGlzdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLmhhbmRsZUFwcGVuZFRvZG8gPSB0aGlzLmhhbmRsZUFwcGVuZFRvZG8uYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdHN0YXRlID0ge1xyXG5cdFx0dG9kb2xpc3Q6IFt7IG5hbWU6IFwiSGVsbG9cIiwgaXNGaW5pc2hlZDogZmFsc2UgfV0sXHJcblx0fTtcclxuXHRyZW5kZXIoKSB7XHJcblx0XHQvLyBjb25zdCB7IHRvZG9TdG9yZSB9ID0gdGhpcy5wcm9wcztcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgaWQ9XCJhcHBcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZG9cIj5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInRvZG9fX2lucHV0XCIgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVBcHBlbmRUb2RvfSAvPlxyXG5cdFx0XHRcdFx0PFRvZG9MaXN0IGxpc3Q9e3RoaXMuc3RhdGUudG9kb2xpc3R9PjwvVG9kb0xpc3Q+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcblx0aGFuZGxlQXBwZW5kVG9kbyhlOiBSZWFjdC5LZXlib2FyZEV2ZW50KSB7XHJcblx0XHRpZiAoZS5rZXlDb2RlID09IDEzKSB7XHJcblx0XHRcdGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblx0XHRcdHRoaXMuc3RhdGUudG9kb2xpc3QucHVzaCh7XHJcblx0XHRcdFx0bmFtZTogdmFsdWUsXHJcblx0XHRcdFx0aXNGaW5pc2hlZDogZmFsc2UsXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnRvZG9saXN0KTtcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xyXG5cdFx0XHRcdHRvZG9saXN0OiB0aGlzLnN0YXRlLnRvZG9saXN0LFxyXG5cdFx0XHR9KSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==