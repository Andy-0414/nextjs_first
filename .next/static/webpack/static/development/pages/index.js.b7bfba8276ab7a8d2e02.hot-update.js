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

      if (e.key == "Enter") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsInRvZG9saXN0IiwibmFtZSIsImlzRmluaXNoZWQiLCJoYW5kbGVBcHBlbmRUb2RvIiwiYmluZCIsInN0YXRlIiwiZSIsImtleSIsInRhcmdldCIsInZhbHVlIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztJQUVNQSxLOzs7OztBQUNMLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2xCLDhCQUFNQSxLQUFOOztBQURrQixnTkFLWDtBQUNQQyxjQUFRLEVBQUUsQ0FBQztBQUFFQyxZQUFJLEVBQUUsT0FBUjtBQUFpQkMsa0JBQVUsRUFBRTtBQUE3QixPQUFEO0FBREgsS0FMVzs7QUFFbEIsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLHlHQUF4QjtBQUZrQjtBQUdsQjs7Ozs2QkFLUTtBQUNSO0FBQ0EsYUFDQztBQUFLLFVBQUUsRUFBQyxLQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixpQkFBUyxFQUFDLGFBQTdCO0FBQTJDLGtCQUFVLEVBQUUsS0FBS0QsZ0JBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERCxFQUVDLE1BQUMsNERBQUQ7QUFBVSxZQUFJLEVBQUUsS0FBS0UsS0FBTCxDQUFXTCxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkQsQ0FERCxDQUREO0FBUUE7OztxQ0FDZ0JNLEMsRUFBd0I7QUFBQTs7QUFDeEMsVUFBSUEsQ0FBQyxDQUFDQyxHQUFGLElBQVMsT0FBYixFQUFzQjtBQUFBLG1CQUNIRCxDQUFDLENBQUNFLE1BREM7QUFBQSxZQUNiQyxLQURhLFFBQ2JBLEtBRGE7QUFFckIsYUFBS0osS0FBTCxDQUFXTCxRQUFYLENBQW9CVSxJQUFwQixDQUF5QjtBQUN4QlQsY0FBSSxFQUFFUSxLQURrQjtBQUV4QlAsb0JBQVUsRUFBRTtBQUZZLFNBQXpCO0FBSUFTLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtQLEtBQUwsQ0FBV0wsUUFBdkI7QUFDQSxhQUFLYSxRQUFMLENBQWM7QUFBQSxpQkFBTztBQUNwQmIsb0JBQVEsRUFBRSxNQUFJLENBQUNLLEtBQUwsQ0FBV0w7QUFERCxXQUFQO0FBQUEsU0FBZDtBQUdBO0FBQ0Q7Ozs7RUFoQ2tCYyw0Q0FBSyxDQUFDQyxTOztBQW1DWGpCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5iN2JmYmE4Mjc2YWI3YThkMmUwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVG9kb0xpc3QsIHsgSVRvZG9JdGVtIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9kb0xpc3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5oYW5kbGVBcHBlbmRUb2RvID0gdGhpcy5oYW5kbGVBcHBlbmRUb2RvLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRzdGF0ZSA9IHtcclxuXHRcdHRvZG9saXN0OiBbeyBuYW1lOiBcIkhlbGxvXCIsIGlzRmluaXNoZWQ6IGZhbHNlIH1dLFxyXG5cdH07XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Ly8gY29uc3QgeyB0b2RvU3RvcmUgfSA9IHRoaXMucHJvcHM7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGlkPVwiYXBwXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b2RvXCI+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0b2RvX19pbnB1dFwiIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlQXBwZW5kVG9kb30gLz5cclxuXHRcdFx0XHRcdDxUb2RvTGlzdCBsaXN0PXt0aGlzLnN0YXRlLnRvZG9saXN0fT48L1RvZG9MaXN0PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG5cdGhhbmRsZUFwcGVuZFRvZG8oZTogUmVhY3QuS2V5Ym9hcmRFdmVudCkge1xyXG5cdFx0aWYgKGUua2V5ID09IFwiRW50ZXJcIikge1xyXG5cdFx0XHRjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cdFx0XHR0aGlzLnN0YXRlLnRvZG9saXN0LnB1c2goe1xyXG5cdFx0XHRcdG5hbWU6IHZhbHVlLFxyXG5cdFx0XHRcdGlzRmluaXNoZWQ6IGZhbHNlLFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y29uc29sZS5sb2codGhpcy5zdGF0ZS50b2RvbGlzdCk7XHJcblx0XHRcdHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcclxuXHRcdFx0XHR0b2RvbGlzdDogdGhpcy5zdGF0ZS50b2RvbGlzdCxcclxuXHRcdFx0fSkpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=