webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./store.ts":
/*!******************!*\
  !*** ./store.ts ***!
  \******************/
/*! exports provided: Store, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var _babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/initializerDefineProperty */ "./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/initializerWarningHelper */ "./node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);






var _dec,
    _class,
    _descriptor,
    _temp,
    _s = $RefreshSig$();




Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["useStaticRendering"])(false);
var store;
var Store = (_dec = mobx__WEBPACK_IMPORTED_MODULE_5__["action"].bind, (_class = (_temp = /*#__PURE__*/function () {
  function Store() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Store);

    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "todolist", _descriptor, this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Store, [{
    key: "addTodo",
    value: function addTodo(item) {
      this.todolist.push(item);
    }
  }]);

  return Store;
}(), _temp), (_descriptor = Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "todolist", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "addTodo", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "addTodo"), _class.prototype)), _class));

function initializeStore() {
  var _store2;

  var _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : new Store();

  if (false) {}
  if (!store) store = _store;
  return _store;
}

function useStore() {
  _s();

  var store = Object(react__WEBPACK_IMPORTED_MODULE_7__["useMemo"])(function () {
    return initializeStore();
  }, []);
  return store;
}

_s(useStore, "K8ucUnUnAgJZGJWAL9Ze8IHCmoQ=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS50cyJdLCJuYW1lcyI6WyJ1c2VTdGF0aWNSZW5kZXJpbmciLCJzdG9yZSIsIlN0b3JlIiwiYWN0aW9uIiwiYmluZCIsIml0ZW0iLCJ0b2RvbGlzdCIsInB1c2giLCJvYnNlcnZhYmxlIiwiaW5pdGlhbGl6ZVN0b3JlIiwiX3N0b3JlIiwidXNlU3RvcmUiLCJ1c2VNZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0FBLHFFQUFrQixPQUFsQjtBQUVBLElBQUlDLEtBQUo7QUFFTyxJQUFNQyxLQUFiLFdBR0VDLDJDQUFNLENBQUNDLElBSFQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDRCQUlTQyxJQUpULEVBSTBCO0FBQ3hCLFdBQUtDLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQkYsSUFBbkI7QUFDQTtBQU5GOztBQUFBO0FBQUEsK0pBQ0VHLCtDQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNxQyxFQURyQztBQUFBO0FBQUE7O0FBU0EsU0FBU0MsZUFBVCxHQUEyQjtBQUFBOztBQUMxQixNQUFNQyxNQUFNLGNBQUdULEtBQUgsNkNBQVksSUFBSUMsS0FBSixFQUF4Qjs7QUFFQSxhQUFtQztBQUNuQyxNQUFJLENBQUNELEtBQUwsRUFBWUEsS0FBSyxHQUFHUyxNQUFSO0FBRVosU0FBT0EsTUFBUDtBQUNBOztBQUVNLFNBQVNDLFFBQVQsR0FBb0I7QUFBQTs7QUFDMUIsTUFBTVYsS0FBSyxHQUFHVyxxREFBTyxDQUFDO0FBQUEsV0FBTUgsZUFBZSxFQUFyQjtBQUFBLEdBQUQsRUFBMEIsRUFBMUIsQ0FBckI7QUFDQSxTQUFPUixLQUFQO0FBQ0E7O0dBSGVVLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuMGNiNTExNzRjZDI2M2JiMzcwNzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFjdGlvbiwgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIHJ1bkluQWN0aW9uIH0gZnJvbSBcIm1vYnhcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGljUmVuZGVyaW5nIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJVG9kb0l0ZW0gfSBmcm9tIFwiLi9jb21wb25lbnRzL1RvZG9MaXN0XCI7XHJcblxyXG51c2VTdGF0aWNSZW5kZXJpbmcodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIik7XHJcblxyXG5sZXQgc3RvcmU7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RvcmUge1xyXG5cdEBvYnNlcnZhYmxlIHRvZG9saXN0OiBJVG9kb0l0ZW1bXSA9IFtdO1xyXG5cclxuXHRAYWN0aW9uLmJpbmRcclxuXHRhZGRUb2RvKGl0ZW06IElUb2RvSXRlbSkge1xyXG5cdFx0dGhpcy50b2RvbGlzdC5wdXNoKGl0ZW0pO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZVN0b3JlKCkge1xyXG5cdGNvbnN0IF9zdG9yZSA9IHN0b3JlID8/IG5ldyBTdG9yZSgpO1xyXG5cclxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIF9zdG9yZTtcclxuXHRpZiAoIXN0b3JlKSBzdG9yZSA9IF9zdG9yZTtcclxuXHJcblx0cmV0dXJuIF9zdG9yZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0b3JlKCkge1xyXG5cdGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoKSwgW10pO1xyXG5cdHJldHVybiBzdG9yZTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9