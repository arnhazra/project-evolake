"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/NavBarComponent.tsx":
/*!********************************************!*\
  !*** ./src/components/NavBarComponent.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.debounce */ \"./node_modules/lodash.debounce/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _ReactIfComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReactIfComponent */ \"./src/components/ReactIfComponent.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_globalStateProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/globalStateProvider */ \"./src/context/globalStateProvider.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst NavBar = ()=>{\n    _s();\n    const [, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_globalStateProvider__WEBPACK_IMPORTED_MODULE_5__.GlobalContext);\n    const [isAuthorized, setAuthorized] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const searchChangeHandler = (event)=>{\n        const action = {\n            type: \"setDatasetRequestState\",\n            payload: {\n                datasetRequestState: \"\"\n            }\n        };\n        dispatch(action);\n    };\n    const debouncedChangeHandler = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(searchChangeHandler, 1000), []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const accessToken = localStorage.hasOwnProperty(\"accessToken\");\n        if (accessToken) setAuthorized(true);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ReactIfComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                condition: isAuthorized,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar, {\n                    className: \"navbar-authorized\",\n                    variant: \"dark\",\n                    expand: \"lg\",\n                    style: {\n                        zoom: 0.85\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"/datasetlibrary\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar.Brand, {\n                                    style: {\n                                        fontSize: \"1.3rem\"\n                                    },\n                                    children: \"Lenstack\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar.Toggle, {\n                                \"aria-controls\": \"navbarScroll\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar.Collapse, {\n                                id: \"navbarScroll\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav, {\n                                        className: \"me-auto my-2 my-lg-0\",\n                                        style: {\n                                            maxHeight: \"8rem\"\n                                        },\n                                        navbarScroll: true,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                href: \"/subscriptions\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar.Brand, {\n                                                    children: \"Subscriptions\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                href: \"/transactions\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar.Brand, {\n                                                    children: \"Wallet\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                                    lineNumber: 50,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                href: \"/account\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar.Brand, {\n                                                    children: \"Account\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                                        className: \"d-flex\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Control, {\n                                            type: \"text\",\n                                            placeholder: \"Search Library\",\n                                            className: \"searchbar-navbar\",\n                                            maxLength: 40,\n                                            \"aria-label\": \"Search\",\n                                            onChange: debouncedChangeHandler\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ReactIfComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                condition: !isAuthorized,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar, {\n                    className: \"navbar-unauthorized\",\n                    variant: \"dark\",\n                    expand: \"lg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar.Brand, {\n                                    style: {\n                                        fontSize: \"1.3rem\"\n                                    },\n                                    children: \"Lenstack\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar.Toggle, {}, void 0, false, {\n                                fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar.Collapse, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav, {\n                                    className: \"ms-auto\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            href: \"/auth\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar.Brand, {\n                                                children: \"Get Started\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            target: \"_blank\",\n                                            rel: \"noopener noreferrer\",\n                                            href: \"https://www.linkedin.com/in/arnhazra/\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar.Brand, {\n                                                children: \"Creator\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 123\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, undefined);\n};\n_s(NavBar, \"anp0peHLiJfqPpyl/IesQnfvN0U=\");\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZCYXJDb21wb25lbnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ3FEO0FBQzdCO0FBQ3RCO0FBQ1o7QUFDaUM7QUFHN0QsTUFBTWEsU0FBYSxJQUFNOztJQUNyQixNQUFNLEdBQUdDLFNBQVMsR0FBR1osaURBQVVBLENBQUNVLHVFQUFhQTtJQUM3QyxNQUFNLENBQUNHLGNBQWNDLGNBQWMsR0FBR1gsK0NBQVFBLENBQUMsS0FBSztJQUVwRCxNQUFNWSxzQkFBc0IsQ0FBQ0MsUUFBK0M7UUFDeEUsTUFBTUMsU0FBa0I7WUFDcEJDLE1BQU07WUFDTkMsU0FBUztnQkFBRUMscUJBQXFCO1lBQUc7UUFDdkM7UUFDQVIsU0FBU0s7SUFDYjtJQUVBLE1BQU1JLHlCQUF5Qm5CLDhDQUFPQSxDQUFDLElBQ25DSixzREFBUUEsQ0FBQ2lCLHFCQUFxQixPQUM5QixFQUFFO0lBR05kLGdEQUFTQSxDQUFDLElBQU07UUFDWixNQUFNcUIsY0FBY0MsYUFBYUMsY0FBYyxDQUFDO1FBQ2hELElBQUlGLGFBQWFSLGNBQWMsSUFBSTtJQUN2QyxHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ2YsMkNBQVFBOzswQkFDTCw4REFBQ1MseURBQU9BO2dCQUFDaUIsV0FBV1o7MEJBQ2hCLDRFQUFDUixtREFBTUE7b0JBQUNxQixXQUFVO29CQUFvQkMsU0FBUTtvQkFBT0MsUUFBTztvQkFBS0MsT0FBTzt3QkFBRUMsTUFBTTtvQkFBSzs4QkFDakYsNEVBQUMxQixzREFBU0E7OzBDQUNOLDhEQUFDSyxrREFBSUE7Z0NBQUNzQixNQUFLOzBDQUNQLDRFQUFDMUIseURBQVk7b0NBQUN3QixPQUFPO3dDQUFFSSxVQUFVO29DQUFTOzhDQUFHOzs7Ozs7Ozs7OzswQ0FJakQsOERBQUM1QiwwREFBYTtnQ0FBQzhCLGlCQUFjOzs7Ozs7MENBQzdCLDhEQUFDOUIsNERBQWU7Z0NBQUNnQyxJQUFHOztrREFDaEIsOERBQUMvQixnREFBR0E7d0NBQUNvQixXQUFVO3dDQUF1QkcsT0FBTzs0Q0FBRVMsV0FBVzt3Q0FBTzt3Q0FBR0MsWUFBWTs7MERBQzVFLDhEQUFDOUIsa0RBQUlBO2dEQUFDc0IsTUFBSzswREFDUCw0RUFBQzFCLHlEQUFZOzhEQUFDOzs7Ozs7Ozs7OzswREFJbEIsOERBQUNJLGtEQUFJQTtnREFBQ3NCLE1BQUs7MERBQ1AsNEVBQUMxQix5REFBWTs4REFBQzs7Ozs7Ozs7Ozs7MERBSWxCLDhEQUFDSSxrREFBSUE7Z0RBQUNzQixNQUFLOzBEQUNQLDRFQUFDMUIseURBQVk7OERBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUt0Qiw4REFBQ0UsaURBQUlBO3dDQUFDbUIsV0FBVTtrREFDWiw0RUFBQ25CLHlEQUFZOzRDQUNUVyxNQUFLOzRDQUNMdUIsYUFBWTs0Q0FDWmYsV0FBVTs0Q0FDVmdCLFdBQVc7NENBQ1hDLGNBQVc7NENBQ1hDLFVBQVV2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU9sQyw4REFBQ2IseURBQU9BO2dCQUFDaUIsV0FBVyxDQUFDWjswQkFDakIsNEVBQUNSLG1EQUFNQTtvQkFBQ3FCLFdBQVU7b0JBQXNCQyxTQUFRO29CQUFPQyxRQUFPOzhCQUMxRCw0RUFBQ3hCLHNEQUFTQTs7MENBQ04sOERBQUNLLGtEQUFJQTtnQ0FBQ3NCLE1BQUs7MENBQ1AsNEVBQUMxQix5REFBWTtvQ0FBQ3dCLE9BQU87d0NBQUVJLFVBQVU7b0NBQVM7OENBQUc7Ozs7Ozs7Ozs7OzBDQUlqRCw4REFBQzVCLDBEQUFhOzs7OzswQ0FDZCw4REFBQ0EsNERBQWU7MENBQ1osNEVBQUNDLGdEQUFHQTtvQ0FBQ29CLFdBQVU7O3NEQUNYLDhEQUFDakIsa0RBQUlBOzRDQUFDc0IsTUFBSztzREFDUCw0RUFBQzFCLHlEQUFZOzBEQUFDOzs7Ozs7Ozs7OztzREFJbEIsOERBQUN3Qzs0Q0FBRUMsUUFBTzs0Q0FBU0MsS0FBSTs0Q0FBc0JoQixNQUFLO3NEQUF3Qyw0RUFBQzFCLHlEQUFZOzBEQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF4STtHQXpGTU07S0FBQUE7QUEyRk4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyQ29tcG9uZW50LnRzeD85NjFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnXG5pbXBvcnQgeyBDaGFuZ2VFdmVudCwgRkMsIEZyYWdtZW50LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb250YWluZXIsIE5hdmJhciwgTmF2LCBGb3JtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IFJlYWN0SWYgZnJvbSAnLi9SZWFjdElmQ29tcG9uZW50J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dC9nbG9iYWxTdGF0ZVByb3ZpZGVyJ1xuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0AvY29udGV4dC9nbG9iYWxSZWR1Y2VyJ1xuXG5jb25zdCBOYXZCYXI6IEZDID0gKCkgPT4ge1xuICAgIGNvbnN0IFssIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dClcbiAgICBjb25zdCBbaXNBdXRob3JpemVkLCBzZXRBdXRob3JpemVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3Qgc2VhcmNoQ2hhbmdlSGFuZGxlciA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgYWN0aW9uOiBBY3Rpb25zID0ge1xuICAgICAgICAgICAgdHlwZTogJ3NldERhdGFzZXRSZXF1ZXN0U3RhdGUnLFxuICAgICAgICAgICAgcGF5bG9hZDogeyBkYXRhc2V0UmVxdWVzdFN0YXRlOiAnJyB9XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGF0Y2goYWN0aW9uKVxuICAgIH1cblxuICAgIGNvbnN0IGRlYm91bmNlZENoYW5nZUhhbmRsZXIgPSB1c2VNZW1vKCgpID0+XG4gICAgICAgIGRlYm91bmNlKHNlYXJjaENoYW5nZUhhbmRsZXIsIDEwMDApLFxuICAgICAgICBbXVxuICAgIClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gbG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KCdhY2Nlc3NUb2tlbicpXG4gICAgICAgIGlmIChhY2Nlc3NUb2tlbikgc2V0QXV0aG9yaXplZCh0cnVlKVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgPFJlYWN0SWYgY29uZGl0aW9uPXtpc0F1dGhvcml6ZWR9PlxuICAgICAgICAgICAgICAgIDxOYXZiYXIgY2xhc3NOYW1lPSduYXZiYXItYXV0aG9yaXplZCcgdmFyaWFudD0nZGFyaycgZXhwYW5kPSdsZycgc3R5bGU9e3sgem9vbTogMC44NSB9fT5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9kYXRhc2V0bGlicmFyeSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZCBzdHlsZT17eyBmb250U2l6ZTogJzEuM3JlbScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExlbnN0YWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPSduYXZiYXJTY3JvbGwnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPSduYXZiYXJTY3JvbGwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPSdtZS1hdXRvIG15LTIgbXktbGctMCcgc3R5bGU9e3sgbWF4SGVpZ2h0OiAnOHJlbScgfX0gbmF2YmFyU2Nyb2xsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvc3Vic2NyaXB0aW9ucyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1YnNjcmlwdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy90cmFuc2FjdGlvbnMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXYWxsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hY2NvdW50Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9J2QtZmxleCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VhcmNoIExpYnJhcnknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NlYXJjaGJhci1uYXZiYXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezQwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0nU2VhcmNoJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2RlYm91bmNlZENoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyPlxuICAgICAgICAgICAgPC9SZWFjdElmPlxuICAgICAgICAgICAgPFJlYWN0SWYgY29uZGl0aW9uPXshaXNBdXRob3JpemVkfT5cbiAgICAgICAgICAgICAgICA8TmF2YmFyIGNsYXNzTmFtZT0nbmF2YmFyLXVuYXV0aG9yaXplZCcgdmFyaWFudD0nZGFyaycgZXhwYW5kPSdsZyc+XG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zcmVtJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGVuc3RhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlPjwvTmF2YmFyLlRvZ2dsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9J21zLWF1dG8nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYXV0aCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldCBTdGFydGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJyBocmVmPSdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYXJuaGF6cmEvJz48TmF2YmFyLkJyYW5kPkNyZWF0b3I8L05hdmJhci5CcmFuZD48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9OYXZiYXI+XG4gICAgICAgICAgICA8L1JlYWN0SWY+XG4gICAgICAgIDwvRnJhZ21lbnQgPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyIl0sIm5hbWVzIjpbImRlYm91bmNlIiwiRnJhZ21lbnQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiTmF2YmFyIiwiTmF2IiwiRm9ybSIsIlJlYWN0SWYiLCJMaW5rIiwiR2xvYmFsQ29udGV4dCIsIk5hdkJhciIsImRpc3BhdGNoIiwiaXNBdXRob3JpemVkIiwic2V0QXV0aG9yaXplZCIsInNlYXJjaENoYW5nZUhhbmRsZXIiLCJldmVudCIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiZGF0YXNldFJlcXVlc3RTdGF0ZSIsImRlYm91bmNlZENoYW5nZUhhbmRsZXIiLCJhY2Nlc3NUb2tlbiIsImxvY2FsU3RvcmFnZSIsImhhc093blByb3BlcnR5IiwiY29uZGl0aW9uIiwiY2xhc3NOYW1lIiwidmFyaWFudCIsImV4cGFuZCIsInN0eWxlIiwiem9vbSIsImhyZWYiLCJCcmFuZCIsImZvbnRTaXplIiwiVG9nZ2xlIiwiYXJpYS1jb250cm9scyIsIkNvbGxhcHNlIiwiaWQiLCJtYXhIZWlnaHQiLCJuYXZiYXJTY3JvbGwiLCJDb250cm9sIiwicGxhY2Vob2xkZXIiLCJtYXhMZW5ndGgiLCJhcmlhLWxhYmVsIiwib25DaGFuZ2UiLCJhIiwidGFyZ2V0IiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/NavBarComponent.tsx\n"));

/***/ })

});