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






var _class,
    _descriptor,
    _temp,
    _s = $RefreshSig$();




Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["useStaticRendering"])(false);
var store;
var Store = (_class = (_temp = /*#__PURE__*/function () {
  function Store() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Store);

    Object(_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "todolist", _descriptor, this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Store, [{
    key: "addTodo",
    value: function addTodo(item) {
      item.id = this.todolist[this.todolist.length - 1].id;
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
}), Object(_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "addTodo", [mobx__WEBPACK_IMPORTED_MODULE_5__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "addTodo"), _class.prototype)), _class);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS50cyJdLCJuYW1lcyI6WyJ1c2VTdGF0aWNSZW5kZXJpbmciLCJzdG9yZSIsIlN0b3JlIiwiaXRlbSIsImlkIiwidG9kb2xpc3QiLCJsZW5ndGgiLCJwdXNoIiwib2JzZXJ2YWJsZSIsImFjdGlvbiIsImluaXRpYWxpemVTdG9yZSIsIl9zdG9yZSIsInVzZVN0b3JlIiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0FBLHFFQUFrQixPQUFsQjtBQUVBLElBQUlDLEtBQUo7QUFFTyxJQUFNQyxLQUFiO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSw0QkFJU0MsSUFKVCxFQUkwQjtBQUN4QkEsVUFBSSxDQUFDQyxFQUFMLEdBQVUsS0FBS0MsUUFBTCxDQUFjLEtBQUtBLFFBQUwsQ0FBY0MsTUFBZCxHQUF1QixDQUFyQyxFQUF3Q0YsRUFBbEQ7QUFDQSxXQUFLQyxRQUFMLENBQWNFLElBQWQsQ0FBbUJKLElBQW5CO0FBQ0E7QUFQRjs7QUFBQTtBQUFBLCtKQUNFSywrQ0FERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDcUMsRUFEckM7QUFBQTtBQUFBLHNJQUdFQywyQ0FIRjs7QUFVQSxTQUFTQyxlQUFULEdBQTJCO0FBQUE7O0FBQzFCLE1BQU1DLE1BQU0sY0FBR1YsS0FBSCw2Q0FBWSxJQUFJQyxLQUFKLEVBQXhCOztBQUVBLGFBQW1DO0FBQ25DLE1BQUksQ0FBQ0QsS0FBTCxFQUFZQSxLQUFLLEdBQUdVLE1BQVI7QUFFWixTQUFPQSxNQUFQO0FBQ0E7O0FBRU0sU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUMxQixNQUFNWCxLQUFLLEdBQUdZLHFEQUFPLENBQUM7QUFBQSxXQUFNSCxlQUFlLEVBQXJCO0FBQUEsR0FBRCxFQUEwQixFQUExQixDQUFyQjtBQUNBLFNBQU9ULEtBQVA7QUFDQTs7R0FIZVcsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5iOGEwMGE1ZGQyZDVhOWM0NmFjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWN0aW9uLCBvYnNlcnZhYmxlLCBjb21wdXRlZCwgcnVuSW5BY3Rpb24gfSBmcm9tIFwibW9ieFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0aWNSZW5kZXJpbmcgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElUb2RvSXRlbSB9IGZyb20gXCIuL2NvbXBvbmVudHMvVG9kb0xpc3RcIjtcclxuXHJcbnVzZVN0YXRpY1JlbmRlcmluZyh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKTtcclxuXHJcbmxldCBzdG9yZTtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdG9yZSB7XHJcblx0QG9ic2VydmFibGUgdG9kb2xpc3Q6IElUb2RvSXRlbVtdID0gW107XHJcblxyXG5cdEBhY3Rpb25cclxuXHRhZGRUb2RvKGl0ZW06IElUb2RvSXRlbSkge1xyXG5cdFx0aXRlbS5pZCA9IHRoaXMudG9kb2xpc3RbdGhpcy50b2RvbGlzdC5sZW5ndGggLSAxXS5pZDtcclxuXHRcdHRoaXMudG9kb2xpc3QucHVzaChpdGVtKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVTdG9yZSgpIHtcclxuXHRjb25zdCBfc3RvcmUgPSBzdG9yZSA/PyBuZXcgU3RvcmUoKTtcclxuXHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBfc3RvcmU7XHJcblx0aWYgKCFzdG9yZSkgc3RvcmUgPSBfc3RvcmU7XHJcblxyXG5cdHJldHVybiBfc3RvcmU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdG9yZSgpIHtcclxuXHRjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZVN0b3JlKCksIFtdKTtcclxuXHRyZXR1cm4gc3RvcmU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==