webpackHotUpdate("static\\development\\pages\\index.js",{

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

      var list = this.props.list; // TodoItem 컴포넌트 forEach

      var todoItemList = list.map(function (item) {
        return __jsx(_TodoItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          item: item,
          key: item.id,
          __self: _this,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG9MaXN0LnRzeCJdLCJuYW1lcyI6WyJUb2RvTGlzdCIsIm9ic2VydmVyIiwibGlzdCIsInByb3BzIiwidG9kb0l0ZW1MaXN0IiwibWFwIiwiaXRlbSIsImlkIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFRTUEsUSxHQURMQywyRDs7Ozs7Ozs7Ozs7Ozs2QkFFUztBQUFBOztBQUFBLFVBQ0FDLElBREEsR0FDUyxLQUFLQyxLQURkLENBQ0FELElBREEsRUFHUjs7QUFDQSxVQUFNRSxZQUFZLEdBQUdGLElBQUksQ0FBQ0csR0FBTCxDQUFTLFVBQUNDLElBQUQsRUFBVTtBQUN2QyxlQUFPLE1BQUMsaURBQUQ7QUFBVSxjQUFJLEVBQUVBLElBQWhCO0FBQXNCLGFBQUcsRUFBRUEsSUFBSSxDQUFDQyxFQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDQSxPQUZvQixDQUFyQjtBQUdBLGFBQU87QUFBSSxpQkFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUEwQkgsWUFBMUIsQ0FBUDtBQUNBOzs7O0VBVHFCSSw0Q0FBSyxDQUFDQyxTOztBQVlkVCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZTRjMjAyZTA5ZjRlZjQ2N2Q0NDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi9Ub2RvTGlzdC5zY3NzXCI7XHJcbmltcG9ydCBUb2RvSXRlbSBmcm9tIFwiLi9Ub2RvSXRlbVwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUb2RvSXRlbSB7XHJcblx0aWQ/OiBudW1iZXI7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdGlzRmluaXNoZWQ6IGJvb2xlYW47XHJcbn1cclxuQG9ic2VydmVyXHJcbmNsYXNzIFRvZG9MaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHsgbGlzdDogSVRvZG9JdGVtW10gfT4ge1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgbGlzdCB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHQvLyBUb2RvSXRlbSDsu7Ttj6zrhIztirggZm9yRWFjaFxyXG5cdFx0Y29uc3QgdG9kb0l0ZW1MaXN0ID0gbGlzdC5tYXAoKGl0ZW0pID0+IHtcclxuXHRcdFx0cmV0dXJuIDxUb2RvSXRlbSBpdGVtPXtpdGVtfSBrZXk9e2l0ZW0uaWR9PjwvVG9kb0l0ZW0+O1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gPHVsIGNsYXNzTmFtZT1cInRvZG9saXN0XCI+e3RvZG9JdGVtTGlzdH08L3VsPjtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9