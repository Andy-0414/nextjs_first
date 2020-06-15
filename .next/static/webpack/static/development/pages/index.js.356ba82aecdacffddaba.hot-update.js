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
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TodoItem_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TodoItem.scss */ "./components/TodoItem.scss");
/* harmony import */ var _TodoItem_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TodoItem_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");






var _dec,
    _class,
    _jsxFileName = "C:\\Users\\pjh86\\Desktop\\Project\\nextjs_first\\components\\TodoItem.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var TodoItem = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["observer"])(_class = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(TodoItem, _React$Component);

  var _super = _createSuper(TodoItem);

  function TodoItem() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TodoItem);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TodoItem, [{
    key: "render",
    value: function render() {
      var item = this.props.item;
      return __jsx("li", {
        className: "todolist__item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 4
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 5
        }
      }, item.name), __jsx("button", {
        onClick: this.handleRemoveThis,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 5
        }
      }, "X"));
    }
  }, {
    key: "handleRemoveThis",
    value: function handleRemoveThis() {
      this.props.store.removeTodo(this.props.item);
    }
  }]);

  return TodoItem;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component)) || _class) || _class);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG9JdGVtLnRzeCJdLCJuYW1lcyI6WyJUb2RvSXRlbSIsImluamVjdCIsIm9ic2VydmVyIiwiaXRlbSIsInByb3BzIiwibmFtZSIsImhhbmRsZVJlbW92ZVRoaXMiLCJzdG9yZSIsInJlbW92ZVRvZG8iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtJQVVNQSxRLFdBRkxDLHlEQUFNLENBQUMsT0FBRCxDLGdCQUNOQywyRDs7Ozs7Ozs7Ozs7Ozs2QkFFUztBQUFBLFVBQ0FDLElBREEsR0FDUyxLQUFLQyxLQURkLENBQ0FELElBREE7QUFFUixhQUNDO0FBQUksaUJBQVMsRUFBQyxnQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJQSxJQUFJLENBQUNFLElBQVQsQ0FERCxFQUVDO0FBQVEsZUFBTyxFQUFFLEtBQUtDLGdCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkQsQ0FERDtBQU1BOzs7dUNBQ2tCO0FBQ2xCLFdBQUtGLEtBQUwsQ0FBV0csS0FBWCxDQUFpQkMsVUFBakIsQ0FBNEIsS0FBS0osS0FBTCxDQUFXRCxJQUF2QztBQUNBOzs7O0VBWnFCTSw0Q0FBSyxDQUFDQyxTO0FBZWRWLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4zNTZiYTgyYWVjZGFjZmZkZGFiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuL1RvZG9JdGVtLnNjc3NcIjtcclxuaW1wb3J0IHsgSVRvZG9JdGVtIH0gZnJvbSBcIi4vVG9kb0xpc3RcIjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIsIGluamVjdCB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG5cdHN0b3JlOiBTdG9yZTtcclxuXHRpdGVtOiBJVG9kb0l0ZW07XHJcbn1cclxuXHJcbkBpbmplY3QoXCJzdG9yZVwiKVxyXG5Ab2JzZXJ2ZXJcclxuY2xhc3MgVG9kb0l0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IGl0ZW0gfSA9IHRoaXMucHJvcHM7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8bGkgY2xhc3NOYW1lPVwidG9kb2xpc3RfX2l0ZW1cIj5cclxuXHRcdFx0XHQ8cD57aXRlbS5uYW1lfTwvcD5cclxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlVGhpc30+WDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2xpPlxyXG5cdFx0KTtcclxuXHR9XHJcblx0aGFuZGxlUmVtb3ZlVGhpcygpIHtcclxuXHRcdHRoaXMucHJvcHMuc3RvcmUucmVtb3ZlVG9kbyh0aGlzLnByb3BzLml0ZW0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0l0ZW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=