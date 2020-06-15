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
      if (this.todolist.length == 0) item.id = 0;else item.id = this.todolist[this.todolist.length - 1].id + 1;
      this.todolist.push(item);
    }
  }, {
    key: "removeTodo",
    value: function removeTodo(item) {
      var idx = this.todolist.findIndex(function (i) {
        return i.id == item.id;
      });
      if (idx != -1) this.todolist.splice(idx, 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS50cyJdLCJuYW1lcyI6WyJ1c2VTdGF0aWNSZW5kZXJpbmciLCJzdG9yZSIsIlN0b3JlIiwiaXRlbSIsInRvZG9saXN0IiwibGVuZ3RoIiwiaWQiLCJwdXNoIiwiaWR4IiwiZmluZEluZGV4IiwiaSIsInNwbGljZSIsIm9ic2VydmFibGUiLCJhY3Rpb24iLCJpbml0aWFsaXplU3RvcmUiLCJfc3RvcmUiLCJ1c2VTdG9yZSIsInVzZU1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBQSxxRUFBa0IsT0FBbEI7QUFFQSxJQUFJQyxLQUFKO0FBRU8sSUFBTUMsS0FBYjtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsNEJBSVNDLElBSlQsRUFJMEI7QUFDeEIsVUFBSSxLQUFLQyxRQUFMLENBQWNDLE1BQWQsSUFBd0IsQ0FBNUIsRUFBK0JGLElBQUksQ0FBQ0csRUFBTCxHQUFVLENBQVYsQ0FBL0IsS0FDS0gsSUFBSSxDQUFDRyxFQUFMLEdBQVUsS0FBS0YsUUFBTCxDQUFjLEtBQUtBLFFBQUwsQ0FBY0MsTUFBZCxHQUF1QixDQUFyQyxFQUF3Q0MsRUFBeEMsR0FBNkMsQ0FBdkQ7QUFDTCxXQUFLRixRQUFMLENBQWNHLElBQWQsQ0FBbUJKLElBQW5CO0FBQ0E7QUFSRjtBQUFBO0FBQUEsK0JBU1lBLElBVFosRUFTNkI7QUFDM0IsVUFBSUssR0FBRyxHQUFHLEtBQUtKLFFBQUwsQ0FBY0ssU0FBZCxDQUF3QixVQUFDQyxDQUFEO0FBQUEsZUFBT0EsQ0FBQyxDQUFDSixFQUFGLElBQVFILElBQUksQ0FBQ0csRUFBcEI7QUFBQSxPQUF4QixDQUFWO0FBQ0EsVUFBSUUsR0FBRyxJQUFJLENBQUMsQ0FBWixFQUFlLEtBQUtKLFFBQUwsQ0FBY08sTUFBZCxDQUFxQkgsR0FBckIsRUFBMEIsQ0FBMUI7QUFDZjtBQVpGOztBQUFBO0FBQUEsK0pBQ0VJLCtDQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNxQyxFQURyQztBQUFBO0FBQUEsc0lBR0VDLDJDQUhGOztBQWVBLFNBQVNDLGVBQVQsR0FBMkI7QUFBQTs7QUFDMUIsTUFBTUMsTUFBTSxjQUFHZCxLQUFILDZDQUFZLElBQUlDLEtBQUosRUFBeEI7O0FBRUEsYUFBbUM7QUFDbkMsTUFBSSxDQUFDRCxLQUFMLEVBQVlBLEtBQUssR0FBR2MsTUFBUjtBQUVaLFNBQU9BLE1BQVA7QUFDQTs7QUFFTSxTQUFTQyxRQUFULEdBQW9CO0FBQUE7O0FBQzFCLE1BQU1mLEtBQUssR0FBR2dCLHFEQUFPLENBQUM7QUFBQSxXQUFNSCxlQUFlLEVBQXJCO0FBQUEsR0FBRCxFQUEwQixFQUExQixDQUFyQjtBQUNBLFNBQU9iLEtBQVA7QUFDQTs7R0FIZWUsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5mZWVmN2UzMzZkN2M5ZWY2MTBhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWN0aW9uLCBvYnNlcnZhYmxlLCBjb21wdXRlZCwgcnVuSW5BY3Rpb24gfSBmcm9tIFwibW9ieFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0aWNSZW5kZXJpbmcgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElUb2RvSXRlbSB9IGZyb20gXCIuL2NvbXBvbmVudHMvVG9kb0xpc3RcIjtcclxuXHJcbnVzZVN0YXRpY1JlbmRlcmluZyh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKTtcclxuXHJcbmxldCBzdG9yZTtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdG9yZSB7XHJcblx0QG9ic2VydmFibGUgdG9kb2xpc3Q6IElUb2RvSXRlbVtdID0gW107XHJcblxyXG5cdEBhY3Rpb25cclxuXHRhZGRUb2RvKGl0ZW06IElUb2RvSXRlbSkge1xyXG5cdFx0aWYgKHRoaXMudG9kb2xpc3QubGVuZ3RoID09IDApIGl0ZW0uaWQgPSAwO1xyXG5cdFx0ZWxzZSBpdGVtLmlkID0gdGhpcy50b2RvbGlzdFt0aGlzLnRvZG9saXN0Lmxlbmd0aCAtIDFdLmlkICsgMTtcclxuXHRcdHRoaXMudG9kb2xpc3QucHVzaChpdGVtKTtcclxuXHR9XHJcblx0cmVtb3ZlVG9kbyhpdGVtOiBJVG9kb0l0ZW0pIHtcclxuXHRcdGxldCBpZHggPSB0aGlzLnRvZG9saXN0LmZpbmRJbmRleCgoaSkgPT4gaS5pZCA9PSBpdGVtLmlkKTtcclxuXHRcdGlmIChpZHggIT0gLTEpIHRoaXMudG9kb2xpc3Quc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplU3RvcmUoKSB7XHJcblx0Y29uc3QgX3N0b3JlID0gc3RvcmUgPz8gbmV3IFN0b3JlKCk7XHJcblxyXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gX3N0b3JlO1xyXG5cdGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlO1xyXG5cclxuXHRyZXR1cm4gX3N0b3JlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoKSB7XHJcblx0Y29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZSgpLCBbXSk7XHJcblx0cmV0dXJuIHN0b3JlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=