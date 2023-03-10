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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _context_globalStateProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/globalStateProvider */ \"./src/context/globalStateProvider.tsx\");\n/* harmony import */ var _ReactIfComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReactIfComponent */ \"./src/components/ReactIfComponent.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst NavBar = ()=>{\n    _s();\n    const [, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_globalStateProvider__WEBPACK_IMPORTED_MODULE_2__.GlobalContext);\n    const [isAuthorized, setAuthorized] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const searchChangeHandler = (event)=>{\n        const action = {\n            payload: {\n                searchInput: event.target.value\n            }\n        };\n        dispatch(action);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const accessToken = localStorage.hasOwnProperty(\"accessToken\");\n        if (accessToken) setAuthorized(true);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ReactIfComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                condition: isAuthorized,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar, {\n                    className: \"navbar-authorized\",\n                    variant: \"dark\",\n                    expand: \"lg\",\n                    style: {\n                        zoom: 0.85\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"/datasetlibrary\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Brand, {\n                                    style: {\n                                        fontSize: \"1.3rem\"\n                                    },\n                                    children: \"Lenstack\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Toggle, {\n                                \"aria-controls\": \"navbarScroll\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Collapse, {\n                                id: \"navbarScroll\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Nav, {\n                                        className: \"me-auto my-2 my-lg-0\",\n                                        style: {\n                                            maxHeight: \"8rem\"\n                                        },\n                                        navbarScroll: true,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                href: \"/subscriptions\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Brand, {\n                                                    children: \"Subscriptions\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                                    lineNumber: 40,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                                lineNumber: 39,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                href: \"/transactions\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Brand, {\n                                                    children: \"Wallet\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                href: \"/account\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Brand, {\n                                                    children: \"Account\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                                    lineNumber: 50,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form, {\n                                        className: \"d-flex\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control, {\n                                            type: \"text\",\n                                            placeholder: \"Search Library\",\n                                            className: \"searchbar-navbar\",\n                                            maxLength: 40,\n                                            \"aria-label\": \"Search\",\n                                            onChange: searchChangeHandler\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ReactIfComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                condition: !isAuthorized,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar, {\n                    className: \"navbar-unauthorized\",\n                    variant: \"dark\",\n                    expand: \"lg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Brand, {\n                                    style: {\n                                        fontSize: \"1.3rem\"\n                                    },\n                                    children: \"Lenstack\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Toggle, {}, void 0, false, {\n                                fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Collapse, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Nav, {\n                                    className: \"ms-auto\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            href: \"/auth\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Brand, {\n                                                children: \"Get Started\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            target: \"_blank\",\n                                            rel: \"noopener noreferrer\",\n                                            href: \"https://www.linkedin.com/in/arnhazra/\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar.Brand, {\n                                                children: \"Creator\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 123\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\components\\\\NavBarComponent.tsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n_s(NavBar, \"SV+6gpLmxx/EgpS510ctyXwOcd8=\");\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZCYXJDb21wb25lbnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUMyRjtBQUM3QjtBQUNBO0FBQ3RCO0FBQ1o7QUFHNUIsTUFBTVcsU0FBYSxJQUFNOztJQUNyQixNQUFNLEdBQUdDLFNBQVMsR0FBR1gsaURBQVVBLENBQUNPLHVFQUFhQTtJQUM3QyxNQUFNLENBQUNLLGNBQWNDLGNBQWMsR0FBR1gsK0NBQVFBLENBQUMsS0FBSztJQUVwRCxNQUFNWSxzQkFBc0IsQ0FBQ0MsUUFBK0M7UUFDeEUsTUFBTUMsU0FBa0I7WUFDcEJDLFNBQVM7Z0JBQUVDLGFBQWFILE1BQU1JLE1BQU0sQ0FBQ0MsS0FBSztZQUFDO1FBQy9DO1FBQ0FULFNBQVNLO0lBQ2I7SUFHQWYsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLE1BQU1vQixjQUFjQyxhQUFhQyxjQUFjLENBQUM7UUFDaEQsSUFBSUYsYUFBYVIsY0FBYyxJQUFJO0lBQ3ZDLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDZCwyQ0FBUUE7OzBCQUNMLDhEQUFDUyx5REFBT0E7Z0JBQUNnQixXQUFXWjswQkFDaEIsNEVBQUNSLG1EQUFNQTtvQkFBQ3FCLFdBQVU7b0JBQW9CQyxTQUFRO29CQUFPQyxRQUFPO29CQUFLQyxPQUFPO3dCQUFFQyxNQUFNO29CQUFLOzhCQUNqRiw0RUFBQzFCLHNEQUFTQTs7MENBQ04sOERBQUNNLGtEQUFJQTtnQ0FBQ3FCLE1BQUs7MENBQ1AsNEVBQUMxQix5REFBWTtvQ0FBQ3dCLE9BQU87d0NBQUVJLFVBQVU7b0NBQVM7OENBQUc7Ozs7Ozs7Ozs7OzBDQUlqRCw4REFBQzVCLDBEQUFhO2dDQUFDOEIsaUJBQWM7Ozs7OzswQ0FDN0IsOERBQUM5Qiw0REFBZTtnQ0FBQ2dDLElBQUc7O2tEQUNoQiw4REFBQy9CLGdEQUFHQTt3Q0FBQ29CLFdBQVU7d0NBQXVCRyxPQUFPOzRDQUFFUyxXQUFXO3dDQUFPO3dDQUFHQyxZQUFZOzswREFDNUUsOERBQUM3QixrREFBSUE7Z0RBQUNxQixNQUFLOzBEQUNQLDRFQUFDMUIseURBQVk7OERBQUM7Ozs7Ozs7Ozs7OzBEQUlsQiw4REFBQ0ssa0RBQUlBO2dEQUFDcUIsTUFBSzswREFDUCw0RUFBQzFCLHlEQUFZOzhEQUFDOzs7Ozs7Ozs7OzswREFJbEIsOERBQUNLLGtEQUFJQTtnREFBQ3FCLE1BQUs7MERBQ1AsNEVBQUMxQix5REFBWTs4REFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBS3RCLDhEQUFDRSxpREFBSUE7d0NBQUNtQixXQUFVO2tEQUNaLDRFQUFDbkIseURBQVk7NENBQ1RrQyxNQUFLOzRDQUNMQyxhQUFZOzRDQUNaaEIsV0FBVTs0Q0FDVmlCLFdBQVc7NENBQ1hDLGNBQVc7NENBQ1hDLFVBQVU5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU9sQyw4REFBQ04seURBQU9BO2dCQUFDZ0IsV0FBVyxDQUFDWjswQkFDakIsNEVBQUNSLG1EQUFNQTtvQkFBQ3FCLFdBQVU7b0JBQXNCQyxTQUFRO29CQUFPQyxRQUFPOzhCQUMxRCw0RUFBQ3hCLHNEQUFTQTs7MENBQ04sOERBQUNNLGtEQUFJQTtnQ0FBQ3FCLE1BQUs7MENBQ1AsNEVBQUMxQix5REFBWTtvQ0FBQ3dCLE9BQU87d0NBQUVJLFVBQVU7b0NBQVM7OENBQUc7Ozs7Ozs7Ozs7OzBDQUlqRCw4REFBQzVCLDBEQUFhOzs7OzswQ0FDZCw4REFBQ0EsNERBQWU7MENBQ1osNEVBQUNDLGdEQUFHQTtvQ0FBQ29CLFdBQVU7O3NEQUNYLDhEQUFDaEIsa0RBQUlBOzRDQUFDcUIsTUFBSztzREFDUCw0RUFBQzFCLHlEQUFZOzBEQUFDOzs7Ozs7Ozs7OztzREFJbEIsOERBQUN5Qzs0Q0FBRTFCLFFBQU87NENBQVMyQixLQUFJOzRDQUFzQmhCLE1BQUs7c0RBQXdDLDRFQUFDMUIseURBQVk7MERBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXhJO0dBcEZNTTtLQUFBQTtBQXNGTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZCYXJDb21wb25lbnQudHN4Pzk2MWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSdcbmltcG9ydCB7IENoYW5nZUV2ZW50LCBGQywgRnJhZ21lbnQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbnRhaW5lciwgTmF2YmFyLCBOYXYsIEZvcm0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9nbG9iYWxTdGF0ZVByb3ZpZGVyJ1xuaW1wb3J0IFJlYWN0SWYgZnJvbSAnLi9SZWFjdElmQ29tcG9uZW50J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0AvY29udGV4dC9nbG9iYWxSZWR1Y2VyJ1xuXG5jb25zdCBOYXZCYXI6IEZDID0gKCkgPT4ge1xuICAgIGNvbnN0IFssIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dClcbiAgICBjb25zdCBbaXNBdXRob3JpemVkLCBzZXRBdXRob3JpemVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3Qgc2VhcmNoQ2hhbmdlSGFuZGxlciA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgYWN0aW9uOiBBY3Rpb25zID0ge1xuICAgICAgICAgICAgcGF5bG9hZDogeyBzZWFyY2hJbnB1dDogZXZlbnQudGFyZ2V0LnZhbHVlIH1cbiAgICAgICAgfVxuICAgICAgICBkaXNwYXRjaChhY3Rpb24pXG4gICAgfVxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgnYWNjZXNzVG9rZW4nKVxuICAgICAgICBpZiAoYWNjZXNzVG9rZW4pIHNldEF1dGhvcml6ZWQodHJ1ZSlcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxSZWFjdElmIGNvbmRpdGlvbj17aXNBdXRob3JpemVkfT5cbiAgICAgICAgICAgICAgICA8TmF2YmFyIGNsYXNzTmFtZT0nbmF2YmFyLWF1dGhvcml6ZWQnIHZhcmlhbnQ9J2RhcmsnIGV4cGFuZD0nbGcnIHN0eWxlPXt7IHpvb206IDAuODUgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvZGF0YXNldGxpYnJhcnknPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgc3R5bGU9e3sgZm9udFNpemU6ICcxLjNyZW0nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZW5zdGFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz0nbmF2YmFyU2Nyb2xsJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD0nbmF2YmFyU2Nyb2xsJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT0nbWUtYXV0byBteS0yIG15LWxnLTAnIHN0eWxlPXt7IG1heEhlaWdodDogJzhyZW0nIH19IG5hdmJhclNjcm9sbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3N1YnNjcmlwdGlvbnMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJzY3JpcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvdHJhbnNhY3Rpb25zJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2FsbGV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYWNjb3VudCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPSdkLWZsZXgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1NlYXJjaCBMaWJyYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzZWFyY2hiYXItbmF2YmFyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXs0MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9J1NlYXJjaCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZWFyY2hDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L05hdmJhcj5cbiAgICAgICAgICAgIDwvUmVhY3RJZj5cbiAgICAgICAgICAgIDxSZWFjdElmIGNvbmRpdGlvbj17IWlzQXV0aG9yaXplZH0+XG4gICAgICAgICAgICAgICAgPE5hdmJhciBjbGFzc05hbWU9J25hdmJhci11bmF1dGhvcml6ZWQnIHZhcmlhbnQ9J2RhcmsnIGV4cGFuZD0nbGcnPlxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZCBzdHlsZT17eyBmb250U2l6ZTogJzEuM3JlbScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExlbnN0YWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZT48L05hdmJhci5Ub2dnbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPSdtcy1hdXRvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2F1dGgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXQgU3RhcnRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcicgaHJlZj0naHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FybmhhenJhLyc+PE5hdmJhci5CcmFuZD5DcmVhdG9yPC9OYXZiYXIuQnJhbmQ+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyPlxuICAgICAgICAgICAgPC9SZWFjdElmPlxuICAgICAgICA8L0ZyYWdtZW50ID5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhciJdLCJuYW1lcyI6WyJGcmFnbWVudCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsIk5hdmJhciIsIk5hdiIsIkZvcm0iLCJHbG9iYWxDb250ZXh0IiwiUmVhY3RJZiIsIkxpbmsiLCJOYXZCYXIiLCJkaXNwYXRjaCIsImlzQXV0aG9yaXplZCIsInNldEF1dGhvcml6ZWQiLCJzZWFyY2hDaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJhY3Rpb24iLCJwYXlsb2FkIiwic2VhcmNoSW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFjY2Vzc1Rva2VuIiwibG9jYWxTdG9yYWdlIiwiaGFzT3duUHJvcGVydHkiLCJjb25kaXRpb24iLCJjbGFzc05hbWUiLCJ2YXJpYW50IiwiZXhwYW5kIiwic3R5bGUiLCJ6b29tIiwiaHJlZiIsIkJyYW5kIiwiZm9udFNpemUiLCJUb2dnbGUiLCJhcmlhLWNvbnRyb2xzIiwiQ29sbGFwc2UiLCJpZCIsIm1heEhlaWdodCIsIm5hdmJhclNjcm9sbCIsIkNvbnRyb2wiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJtYXhMZW5ndGgiLCJhcmlhLWxhYmVsIiwib25DaGFuZ2UiLCJhIiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/NavBarComponent.tsx\n"));

/***/ })

});