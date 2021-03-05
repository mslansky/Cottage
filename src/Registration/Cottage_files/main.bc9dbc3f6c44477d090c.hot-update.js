webpackHotUpdate("main",{

/***/ "./src/ItemPage/ItemPage.js":
/*!**********************************!*\
  !*** ./src/ItemPage/ItemPage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ItemPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ItemPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemPage.css */ "./src/ItemPage/ItemPage.css");
/* harmony import */ var _ItemPage_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ItemPage_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer_Footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer/Footer.js */ "./src/Footer/Footer.js");
/* harmony import */ var _Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Dropdown/Dropdown */ "./src/Dropdown/Dropdown.js");
/* harmony import */ var _Back_Back_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Back/Back.js */ "./src/Back/Back.js");
/* harmony import */ var _CartButton_CartButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CartButton/CartButton */ "./src/CartButton/CartButton.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./src/config.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/madisonslansky/cottage/src/ItemPage/ItemPage.js";









class ItemPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    const {
      itemId
    } = this.props.match.params;
    this.itemId = itemId;
    this.fetchItem = this.fetchItem.bind(this);
    this.state = {
      shops: [],
      items: []
    };
    this.fetchShops = this.fetchShops.bind(this);
  }

  componentDidMount() {
    this.fetchItem();
    this.fetchShops();
  }

  fetchItem() {
    fetch(`${_config__WEBPACK_IMPORTED_MODULE_6__["default"].API_ENDPOINT}/items/${this.itemId}`, {
      headers: {
        'Authorization': `Bearer ${_config__WEBPACK_IMPORTED_MODULE_6__["default"].API_TOKEN}`
      }
    }).then(response => {
      if (!response.ok) return response.json().then(e => Promise.reject(e));
      return response.json();
    }).then(itemsJson => {
      this.setState(state => ({
        items: itemsJson
      }));
    });
  }

  fetchShops() {
    fetch(`${_config__WEBPACK_IMPORTED_MODULE_6__["default"].API_ENDPOINT}/shops/${this.shopsid}`, {
      headers: {
        'Authorization': `Bearer ${_config__WEBPACK_IMPORTED_MODULE_6__["default"].API_TOKEN}`
      }
    }).then(response => {
      if (!response.ok) return response.json().then(e => Promise.reject(e));
      return response.json();
    }).then(shopsJson => {
      this.setState(state => ({
        shops: shopsJson
      }));
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      className: "items",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_Back_Back_js__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_CartButton_CartButton__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: "item-flex",
        children: [this.state.items.reverse().map((items, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "item-pic",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
            src: items.picUrl,
            className: "macaron"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1400 48",
          preserveAspectRatio: "xMidYMid slice",
          "aria-hidden": "true",
          focusable: "false",
          className: "torn-edge-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("path", {
            d: "M172 48h-4l-1-1-6-3-5-4-2-1h-3l-10 1-5-2-7-3h-8l-3 2h-17l-11-3-3 1-4 1-1-1-9 1-4 1-8 2-10 5-7-1-3-2h-7l-5-1h-2l-5-1-6-1-3-3-9-6L0 3V0h1400l-1 3-1 3-2 3-8 2-4-1-4-3-2-1-7-3-3-1-3-1-8 2h-14l-1-1-5 2-4 3-1 1-10-2-3-1-10 1-4-1-1-1-9 1-5 2h-2l-7-1-3 1h-7l-11 3-11 1-16 1-15-2h-14l-14 1h-9l-15-4-2 1-3 1-5-1h-24l-19-1h-1l-6-2-3 2-4 3-8 6-5 2-9 1-4-2h-2l-9-1-7-1-2-1v-1l-2-2-7 2-4 1-4-2-5 1-12 3-7 1-11 3-12 1h-2l-17 1-5 2-7 5-4 2-7-1-3-1-6-1-7-2-10-1h-5l-7-1-3-1h-2l-5 1h-5l-2 1-8-1-4-3-2 1-4 3-6 3h-6l-6 1-2-1-7-1-4 1-5 1-9-2-9 1h-18l-22-1-10-2-4-3-3-2h-6l-6 1-6 3h-14l-2 2-5 1h-8l-6-2h-4l-7-1h-2l-11 1-12-4-6-2-6-2-4-1-8 4-4-1-4-2-5-1-1 1-4 4h-10l-6 2-12-4-1-2-3-4-2-3-4-3h-3l-3-1V4l-2-2-2 1-2 3-2 1-2-2-3-1-4 3h-3l-7-4-7 1-4 1-10-1-7-3-2-1h-10l-2 1-7 2h-3l-9 7h-2l-2-2-4-1-17-1h-11l-3-2-8-1-7 1h-3l-3 1-7-3-2-1-2-1-2 1-12-1-7 1-4 1-4 4h-2V2h-7l-4-1h-6l-4-1-7 1-20 4-12-1-6 1-18-1h-2l-3 3-4 4-9 2-2-3-4 1h-1l-4 1-5 1-9 3-5 3-3 5-1 1-3 1-4 1-4-2-2 1v1l-2 1-4-2-3 1-7 6-3 1-4 2-4 4-8 2h-2l-9-2-5-1-18 5-8 4z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 174
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "itemBox",
          children: [this.state.items.reverse().map((items, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "item-price",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
              children: items.price
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 11
          }, this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "item-title",
            children: this.state.items.reverse().map((items, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h1", {
              children: items.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 13
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "item-title-shop",
            children: this.state.items.reverse().map((items, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
              to: `/Store/${items.shopId}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h1", {
                children: items.shop
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 13
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "item-desc",
            children: this.state.items.reverse().map((items, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
              children: items.desc
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 13
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1400 48",
          preserveAspectRatio: "xMidYMid slice",
          "aria-hidden": "true",
          focusable: "false",
          className: "torn-edge-item-bottom",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("path", {
            d: "M172 48h-4l-1-1-6-3-5-4-2-1h-3l-10 1-5-2-7-3h-8l-3 2h-17l-11-3-3 1-4 1-1-1-9 1-4 1-8 2-10 5-7-1-3-2h-7l-5-1h-2l-5-1-6-1-3-3-9-6L0 3V0h1400l-1 3-1 3-2 3-8 2-4-1-4-3-2-1-7-3-3-1-3-1-8 2h-14l-1-1-5 2-4 3-1 1-10-2-3-1-10 1-4-1-1-1-9 1-5 2h-2l-7-1-3 1h-7l-11 3-11 1-16 1-15-2h-14l-14 1h-9l-15-4-2 1-3 1-5-1h-24l-19-1h-1l-6-2-3 2-4 3-8 6-5 2-9 1-4-2h-2l-9-1-7-1-2-1v-1l-2-2-7 2-4 1-4-2-5 1-12 3-7 1-11 3-12 1h-2l-17 1-5 2-7 5-4 2-7-1-3-1-6-1-7-2-10-1h-5l-7-1-3-1h-2l-5 1h-5l-2 1-8-1-4-3-2 1-4 3-6 3h-6l-6 1-2-1-7-1-4 1-5 1-9-2-9 1h-18l-22-1-10-2-4-3-3-2h-6l-6 1-6 3h-14l-2 2-5 1h-8l-6-2h-4l-7-1h-2l-11 1-12-4-6-2-6-2-4-1-8 4-4-1-4-2-5-1-1 1-4 4h-10l-6 2-12-4-1-2-3-4-2-3-4-3h-3l-3-1V4l-2-2-2 1-2 3-2 1-2-2-3-1-4 3h-3l-7-4-7 1-4 1-10-1-7-3-2-1h-10l-2 1-7 2h-3l-9 7h-2l-2-2-4-1-17-1h-11l-3-2-8-1-7 1h-3l-3 1-7-3-2-1-2-1-2 1-12-1-7 1-4 1-4 4h-2V2h-7l-4-1h-6l-4-1-7 1-20 4-12-1-6 1-18-1h-2l-3 3-4 4-9 2-2-3-4 1h-1l-4 1-5 1-9 3-5 3-3 5-1 1-3 1-4 1-4-2-2 1v1l-2 1-4-2-3 1-7 6-3 1-4 2-4 4-8 2h-2l-9-2-5-1-18 5-8 4z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 181
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
          className: "add",
          children: "Add to Cart"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this);
  }

}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.bc9dbc3f6c44477d090c.hot-update.js.map