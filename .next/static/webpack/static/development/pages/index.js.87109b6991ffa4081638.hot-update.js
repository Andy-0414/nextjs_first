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
        console.log("KEY");
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiSW5kZXgiLCJpbmplY3QiLCJvYnNlcnZlciIsInByb3BzIiwiaGFuZGxlQXBwZW5kVG9kbyIsImJpbmQiLCJzdG9yZSIsInRvZG9saXN0IiwiZSIsImtleSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImFkZFRvZG8iLCJuYW1lIiwiaXNGaW5pc2hlZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7SUFTTUEsSyxXQUZMQyx5REFBTSxDQUFDLE9BQUQsQyxnQkFDTkMsMkQ7Ozs7O0FBRUEsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDbEIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkMsSUFBdEIseUdBQXhCO0FBRmtCO0FBR2xCOzs7OzZCQUNRO0FBQ1I7QUFDQSxhQUNDO0FBQUssVUFBRSxFQUFDLEtBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGlCQUFTLEVBQUMsYUFBN0I7QUFBMkMsa0JBQVUsRUFBRSxLQUFLRCxnQkFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURELEVBRUMsTUFBQyw0REFBRDtBQUFVLFlBQUksRUFBRSxLQUFLRCxLQUFMLENBQVdHLEtBQVgsQ0FBaUJDLFFBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRCxDQURELENBREQ7QUFRQTs7O3FDQUNnQkMsQyxFQUF3QjtBQUN4QyxVQUFJQSxDQUFDLENBQUNDLEdBQUYsSUFBUyxPQUFiLEVBQXNCO0FBQUEsbUJBQ0hELENBQUMsQ0FBQ0UsTUFEQztBQUFBLFlBQ2JDLEtBRGEsUUFDYkEsS0FEYTtBQUVyQkMsZUFBTyxDQUFDQyxHQUFSLENBQVksS0FBWjtBQUNBLGFBQUtWLEtBQUwsQ0FBV0csS0FBWCxDQUFpQlEsT0FBakIsQ0FBeUI7QUFDeEJDLGNBQUksRUFBRUosS0FEa0I7QUFFeEJLLG9CQUFVLEVBQUU7QUFGWSxTQUF6QjtBQUlBO0FBQ0Q7Ozs7RUF6QmtCQyw0Q0FBSyxDQUFDQyxTO0FBNEJYbEIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjg3MTA5YjY5OTFmZmE0MDgxNjM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUb2RvTGlzdCwgeyBJVG9kb0l0ZW0gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ub2RvTGlzdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xyXG5pbXBvcnQgeyBpbmplY3QsIG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcblx0c3RvcmU6IFN0b3JlO1xyXG59XHJcblxyXG5AaW5qZWN0KFwic3RvcmVcIilcclxuQG9ic2VydmVyXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuaGFuZGxlQXBwZW5kVG9kbyA9IHRoaXMuaGFuZGxlQXBwZW5kVG9kby5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHRyZW5kZXIoKSB7XHJcblx0XHQvLyBjb25zdCB7IHRvZG9TdG9yZSB9ID0gdGhpcy5wcm9wcztcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgaWQ9XCJhcHBcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZG9cIj5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInRvZG9fX2lucHV0XCIgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVBcHBlbmRUb2RvfSAvPlxyXG5cdFx0XHRcdFx0PFRvZG9MaXN0IGxpc3Q9e3RoaXMucHJvcHMuc3RvcmUudG9kb2xpc3R9PjwvVG9kb0xpc3Q+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcblx0aGFuZGxlQXBwZW5kVG9kbyhlOiBSZWFjdC5LZXlib2FyZEV2ZW50KSB7XHJcblx0XHRpZiAoZS5rZXkgPT0gXCJFbnRlclwiKSB7XHJcblx0XHRcdGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiS0VZXCIpO1xyXG5cdFx0XHR0aGlzLnByb3BzLnN0b3JlLmFkZFRvZG8oe1xyXG5cdFx0XHRcdG5hbWU6IHZhbHVlLFxyXG5cdFx0XHRcdGlzRmluaXNoZWQ6IGZhbHNlLFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9