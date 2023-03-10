"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/account";
exports.ids = ["pages/account"];
exports.modules = {

/***/ "./src/constants/Endpoints.ts":
/*!************************************!*\
  !*** ./src/constants/Endpoints.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst apiOrigin =  true ? \"http://localhost:7000\" : 0;\nconst endPoints = {\n    generateAuthCodeEndpoint: `${apiOrigin}/api/auth/generateauthcode`,\n    verifyAuthCodeEndpoint: `${apiOrigin}/api/auth/verifyauthcode`,\n    signOutEndpoint: `${apiOrigin}/api/auth/signout`,\n    checkAuthEndpoint: `${apiOrigin}/api/auth/checkauth`,\n    createTxEndpoint: `${apiOrigin}/api/wallet/createtx`,\n    walletTransactionEndpoint: `${apiOrigin}/api/wallet/transactions`,\n    walletLivePriceEndpoint: `${apiOrigin}/api/wallet/getliveprice`,\n    datasetSortAndFilterOptionsEndpoint: `${apiOrigin}/api/dataset/getsortandfilteroptions`,\n    datasetLibraryEndpoint: `${apiOrigin}/api/dataset/library`,\n    datasetSubscriptionEndpoint: `${apiOrigin}/api/dataset/mysubscriptions`,\n    datasetViewEndpoint: `${apiOrigin}/api/dataset/viewone`,\n    findsimilarDatasets: `${apiOrigin}/api/dataset/findsimilar`,\n    subscribeEndpoint: `${apiOrigin}/api/subscription/subscribe`,\n    checkSubscriptionEndpoint: `${apiOrigin}/api/subscription/issubscribed`,\n    etherScanEndpoint: `https://goerli.etherscan.io/tx`\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endPoints);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzL0VuZHBvaW50cy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsWUFBWUMsS0FBeUIsR0FBZ0IsMEJBQTBCLENBQUU7QUFDdkYsTUFBTUMsWUFBWTtJQUNkQywwQkFBMEIsQ0FBQyxFQUFFSCxVQUFVLDBCQUEwQixDQUFDO0lBQ2xFSSx3QkFBd0IsQ0FBQyxFQUFFSixVQUFVLHdCQUF3QixDQUFDO0lBQzlESyxpQkFBaUIsQ0FBQyxFQUFFTCxVQUFVLGlCQUFpQixDQUFDO0lBQ2hETSxtQkFBbUIsQ0FBQyxFQUFFTixVQUFVLG1CQUFtQixDQUFDO0lBQ3BETyxrQkFBa0IsQ0FBQyxFQUFFUCxVQUFVLG9CQUFvQixDQUFDO0lBQ3BEUSwyQkFBMkIsQ0FBQyxFQUFFUixVQUFVLHdCQUF3QixDQUFDO0lBQ2pFUyx5QkFBeUIsQ0FBQyxFQUFFVCxVQUFVLHdCQUF3QixDQUFDO0lBQy9EVSxxQ0FBcUMsQ0FBQyxFQUFFVixVQUFVLG9DQUFvQyxDQUFDO0lBQ3ZGVyx3QkFBd0IsQ0FBQyxFQUFFWCxVQUFVLG9CQUFvQixDQUFDO0lBQzFEWSw2QkFBNkIsQ0FBQyxFQUFFWixVQUFVLDRCQUE0QixDQUFDO0lBQ3ZFYSxxQkFBcUIsQ0FBQyxFQUFFYixVQUFVLG9CQUFvQixDQUFDO0lBQ3ZEYyxxQkFBcUIsQ0FBQyxFQUFFZCxVQUFVLHdCQUF3QixDQUFDO0lBQzNEZSxtQkFBbUIsQ0FBQyxFQUFFZixVQUFVLDJCQUEyQixDQUFDO0lBQzVEZ0IsMkJBQTJCLENBQUMsRUFBRWhCLFVBQVUsOEJBQThCLENBQUM7SUFDdkVpQixtQkFBbUIsQ0FBQyw4QkFBOEIsQ0FBQztBQUN2RDtBQUVBLGlFQUFlZixTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbnN0YW50cy9FbmRwb2ludHMudHM/YzY3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcGlPcmlnaW4gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/ICdodHRwOi8vbG9jYWxob3N0OjcwMDAnIDogJydcbmNvbnN0IGVuZFBvaW50cyA9IHtcbiAgICBnZW5lcmF0ZUF1dGhDb2RlRW5kcG9pbnQ6IGAke2FwaU9yaWdpbn0vYXBpL2F1dGgvZ2VuZXJhdGVhdXRoY29kZWAsXG4gICAgdmVyaWZ5QXV0aENvZGVFbmRwb2ludDogYCR7YXBpT3JpZ2lufS9hcGkvYXV0aC92ZXJpZnlhdXRoY29kZWAsXG4gICAgc2lnbk91dEVuZHBvaW50OiBgJHthcGlPcmlnaW59L2FwaS9hdXRoL3NpZ25vdXRgLFxuICAgIGNoZWNrQXV0aEVuZHBvaW50OiBgJHthcGlPcmlnaW59L2FwaS9hdXRoL2NoZWNrYXV0aGAsXG4gICAgY3JlYXRlVHhFbmRwb2ludDogYCR7YXBpT3JpZ2lufS9hcGkvd2FsbGV0L2NyZWF0ZXR4YCxcbiAgICB3YWxsZXRUcmFuc2FjdGlvbkVuZHBvaW50OiBgJHthcGlPcmlnaW59L2FwaS93YWxsZXQvdHJhbnNhY3Rpb25zYCxcbiAgICB3YWxsZXRMaXZlUHJpY2VFbmRwb2ludDogYCR7YXBpT3JpZ2lufS9hcGkvd2FsbGV0L2dldGxpdmVwcmljZWAsXG4gICAgZGF0YXNldFNvcnRBbmRGaWx0ZXJPcHRpb25zRW5kcG9pbnQ6IGAke2FwaU9yaWdpbn0vYXBpL2RhdGFzZXQvZ2V0c29ydGFuZGZpbHRlcm9wdGlvbnNgLFxuICAgIGRhdGFzZXRMaWJyYXJ5RW5kcG9pbnQ6IGAke2FwaU9yaWdpbn0vYXBpL2RhdGFzZXQvbGlicmFyeWAsXG4gICAgZGF0YXNldFN1YnNjcmlwdGlvbkVuZHBvaW50OiBgJHthcGlPcmlnaW59L2FwaS9kYXRhc2V0L215c3Vic2NyaXB0aW9uc2AsXG4gICAgZGF0YXNldFZpZXdFbmRwb2ludDogYCR7YXBpT3JpZ2lufS9hcGkvZGF0YXNldC92aWV3b25lYCxcbiAgICBmaW5kc2ltaWxhckRhdGFzZXRzOiBgJHthcGlPcmlnaW59L2FwaS9kYXRhc2V0L2ZpbmRzaW1pbGFyYCxcbiAgICBzdWJzY3JpYmVFbmRwb2ludDogYCR7YXBpT3JpZ2lufS9hcGkvc3Vic2NyaXB0aW9uL3N1YnNjcmliZWAsXG4gICAgY2hlY2tTdWJzY3JpcHRpb25FbmRwb2ludDogYCR7YXBpT3JpZ2lufS9hcGkvc3Vic2NyaXB0aW9uL2lzc3Vic2NyaWJlZGAsXG4gICAgZXRoZXJTY2FuRW5kcG9pbnQ6IGBodHRwczovL2dvZXJsaS5ldGhlcnNjYW4uaW8vdHhgLFxufVxuXG5leHBvcnQgZGVmYXVsdCBlbmRQb2ludHMiXSwibmFtZXMiOlsiYXBpT3JpZ2luIiwicHJvY2VzcyIsImVuZFBvaW50cyIsImdlbmVyYXRlQXV0aENvZGVFbmRwb2ludCIsInZlcmlmeUF1dGhDb2RlRW5kcG9pbnQiLCJzaWduT3V0RW5kcG9pbnQiLCJjaGVja0F1dGhFbmRwb2ludCIsImNyZWF0ZVR4RW5kcG9pbnQiLCJ3YWxsZXRUcmFuc2FjdGlvbkVuZHBvaW50Iiwid2FsbGV0TGl2ZVByaWNlRW5kcG9pbnQiLCJkYXRhc2V0U29ydEFuZEZpbHRlck9wdGlvbnNFbmRwb2ludCIsImRhdGFzZXRMaWJyYXJ5RW5kcG9pbnQiLCJkYXRhc2V0U3Vic2NyaXB0aW9uRW5kcG9pbnQiLCJkYXRhc2V0Vmlld0VuZHBvaW50IiwiZmluZHNpbWlsYXJEYXRhc2V0cyIsInN1YnNjcmliZUVuZHBvaW50IiwiY2hlY2tTdWJzY3JpcHRpb25FbmRwb2ludCIsImV0aGVyU2NhbkVuZHBvaW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/constants/Endpoints.ts\n");

/***/ }),

/***/ "./src/context/globalReducer.ts":
/*!**************************************!*\
  !*** ./src/context/globalReducer.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalReducer\": () => (/* binding */ GlobalReducer)\n/* harmony export */ });\nconst GlobalReducer = (state, action)=>{\n    switch(action.type){\n        case \"setUserState\":\n            return {\n                ...state,\n                userState: {\n                    ...state.userState,\n                    ...action.payload\n                }\n            };\n        case \"setDatasetRequestState\":\n            return {\n                ...state,\n                datasetRequestState: {\n                    ...state.datasetRequestState,\n                    ...action.payload\n                }\n            };\n        default:\n            return state;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9nbG9iYWxSZWR1Y2VyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFtQk8sTUFBTUEsZ0JBQWdCLENBQUNDLE9BQW9CQyxTQUFpQztJQUMvRSxPQUFRQSxPQUFPQyxJQUFJO1FBQ2YsS0FBSztZQUNELE9BQU87Z0JBQ0gsR0FBR0YsS0FBSztnQkFBRUcsV0FBVztvQkFBRSxHQUFHSCxNQUFNRyxTQUFTO29CQUFFLEdBQUdGLE9BQU9HLE9BQU87Z0JBQUM7WUFDakU7UUFFSixLQUFLO1lBQ0QsT0FBTztnQkFDSCxHQUFHSixLQUFLO2dCQUFFSyxxQkFBcUI7b0JBQUUsR0FBR0wsTUFBTUssbUJBQW1CO29CQUFFLEdBQUdKLE9BQU9HLE9BQU87Z0JBQUM7WUFDckY7UUFFSjtZQUNJLE9BQU9KO0lBQ2Y7QUFDSixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbnRleHQvZ2xvYmFsUmVkdWNlci50cz82NDU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJTdGF0ZSwgRGF0YXNldFJlcXVlc3RTdGF0ZSB9IGZyb20gJy4uL3R5cGVzL1N0YXRlcydcblxuZXhwb3J0IHR5cGUgR2xvYmFsU3RhdGUgPSB7XG4gICAgdXNlclN0YXRlOiBVc2VyU3RhdGVcbiAgICBkYXRhc2V0UmVxdWVzdFN0YXRlOiBEYXRhc2V0UmVxdWVzdFN0YXRlXG59XG5cbmV4cG9ydCB0eXBlIEFjdGlvbnNNYXAgPSB7XG4gICAgc2V0VXNlclN0YXRlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IGJvb2xlYW4gfVxuICAgIHNldERhdGFzZXRSZXF1ZXN0U3RhdGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cbn1cblxuZXhwb3J0IHR5cGUgQWN0aW9ucyA9IHtcbiAgICBbS2V5IGluIGtleW9mIEFjdGlvbnNNYXBdOiB7XG4gICAgICAgIHR5cGU6IEtleVxuICAgICAgICBwYXlsb2FkOiBBY3Rpb25zTWFwW0tleV1cbiAgICB9XG59W2tleW9mIEFjdGlvbnNNYXBdXG5cbmV4cG9ydCBjb25zdCBHbG9iYWxSZWR1Y2VyID0gKHN0YXRlOiBHbG9iYWxTdGF0ZSwgYWN0aW9uOiBBY3Rpb25zKTogR2xvYmFsU3RhdGUgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnc2V0VXNlclN0YXRlJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIHVzZXJTdGF0ZTogeyAuLi5zdGF0ZS51c2VyU3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdzZXREYXRhc2V0UmVxdWVzdFN0YXRlJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIGRhdGFzZXRSZXF1ZXN0U3RhdGU6IHsgLi4uc3RhdGUuZGF0YXNldFJlcXVlc3RTdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59Il0sIm5hbWVzIjpbIkdsb2JhbFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ1c2VyU3RhdGUiLCJwYXlsb2FkIiwiZGF0YXNldFJlcXVlc3RTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/globalReducer.ts\n");

/***/ }),

/***/ "./src/context/globalStateProvider.tsx":
/*!*********************************************!*\
  !*** ./src/context/globalStateProvider.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalContext\": () => (/* binding */ GlobalContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _globalReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globalReducer */ \"./src/context/globalReducer.ts\");\n\n\n\nconst initialState = {\n    userState: {\n        userid: \"\",\n        name: \"\",\n        isLoaded: false\n    },\n    datasetRequestState: {\n        searchInput: \"\",\n        selectedFilter: \"All\",\n        selectedSortOption: \"Freshness\"\n    }\n};\nconst GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)([\n    initialState,\n    ()=>undefined\n]);\nconst GlobalStateProvider = ({ children  })=>{\n    const [state, _dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_globalReducer__WEBPACK_IMPORTED_MODULE_2__.GlobalReducer, initialState);\n    const dispatch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((type, ...payload)=>{\n        _dispatch({\n            type,\n            payload: payload[0]\n        });\n    }, []);\n    const values = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[\n            state,\n            dispatch\n        ], [\n        state\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n        value: values,\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\context\\\\globalStateProvider.tsx\",\n        lineNumber: 35,\n        columnNumber: 12\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStateProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9nbG9iYWxTdGF0ZVByb3ZpZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRjtBQUNMO0FBT2pGLE1BQU1LLGVBQWU7SUFDakJDLFdBQVc7UUFDUEMsUUFBUTtRQUNSQyxNQUFNO1FBQ05DLFVBQVUsS0FBSztJQUNuQjtJQUVBQyxxQkFBcUI7UUFDakJDLGFBQWE7UUFDYkMsZ0JBQWdCO1FBQ2hCQyxvQkFBb0I7SUFDeEI7QUFDSjtBQUVPLE1BQU1DLDhCQUFnQmQsb0RBQWFBLENBQXlCO0lBQUNLO0lBQWUsSUFBWVU7Q0FBVyxFQUFDO0FBTTNHLE1BQU1DLHNCQUFvRCxDQUFDLEVBQUVDLFNBQVEsRUFBRSxHQUFLO0lBQ3hFLE1BQU0sQ0FBQ0MsT0FBT0MsVUFBVSxHQUFHaEIsaURBQVVBLENBQUNDLHlEQUFhQSxFQUFFQztJQUNyRCxNQUFNZSxXQUF1Qm5CLGtEQUFXQSxDQUFDLENBQUNvQixNQUFNLEdBQUdDLFVBQVk7UUFDM0RILFVBQVU7WUFBRUU7WUFBTUMsU0FBU0EsT0FBTyxDQUFDLEVBQUU7UUFBQztJQUMxQyxHQUFHLEVBQUU7SUFDTCxNQUFNQyxTQUFTckIsOENBQU9BLENBQUMsSUFBTTtZQUFDZ0I7WUFBT0U7U0FBUyxFQUE0QjtRQUFDRjtLQUFNO0lBQ2pGLHFCQUFPLDhEQUFDSixjQUFjVSxRQUFRO1FBQUNDLE9BQU9GO2tCQUFTTjs7Ozs7O0FBQ25EO0FBRUEsaUVBQWVELG1CQUFtQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9jb250ZXh0L2dsb2JhbFN0YXRlUHJvdmlkZXIudHN4P2FjYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMsIFJlYWN0Tm9kZSwgY3JlYXRlQ29udGV4dCwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEdsb2JhbFN0YXRlLCBBY3Rpb25zLCBBY3Rpb25zTWFwLCBHbG9iYWxSZWR1Y2VyIH0gZnJvbSAnLi9nbG9iYWxSZWR1Y2VyJ1xuXG5leHBvcnQgdHlwZSBEaXNwYXRjaGVyID0gPFR5cGUgZXh0ZW5kcyBBY3Rpb25zWyd0eXBlJ10sIFBheWxvYWQgZXh0ZW5kcyBBY3Rpb25zTWFwW1R5cGVdPih0eXBlOiBUeXBlLFxuICAgIC4uLnBheWxvYWQ6IFBheWxvYWQgZXh0ZW5kcyB1bmRlZmluZWQgPyBbdW5kZWZpbmVkP10gOiBbUGF5bG9hZF0pID0+IHZvaWRcblxudHlwZSBHbG9iYWxDb250ZXh0SW50ZXJmYWNlID0gcmVhZG9ubHkgW0dsb2JhbFN0YXRlLCBEaXNwYXRjaGVyXVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdXNlclN0YXRlOiB7XG4gICAgICAgIHVzZXJpZDogJycsXG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBpc0xvYWRlZDogZmFsc2UsXG4gICAgfSxcblxuICAgIGRhdGFzZXRSZXF1ZXN0U3RhdGU6IHtcbiAgICAgICAgc2VhcmNoSW5wdXQ6ICcnLFxuICAgICAgICBzZWxlY3RlZEZpbHRlcjogJ0FsbCcsXG4gICAgICAgIHNlbGVjdGVkU29ydE9wdGlvbjogJ0ZyZXNobmVzcydcbiAgICB9LFxufVxuXG5leHBvcnQgY29uc3QgR2xvYmFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8R2xvYmFsQ29udGV4dEludGVyZmFjZT4oW2luaXRpYWxTdGF0ZSwgKCgpOiB2b2lkID0+IHVuZGVmaW5lZCldKVxuXG5pbnRlcmZhY2UgR2xvYmFsU3RhdGVQcm92aWRlclByb3BzIHtcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlXG59XG5cbmNvbnN0IEdsb2JhbFN0YXRlUHJvdmlkZXI6IEZDPEdsb2JhbFN0YXRlUHJvdmlkZXJQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgW3N0YXRlLCBfZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihHbG9iYWxSZWR1Y2VyLCBpbml0aWFsU3RhdGUpXG4gICAgY29uc3QgZGlzcGF0Y2g6IERpc3BhdGNoZXIgPSB1c2VDYWxsYmFjaygodHlwZSwgLi4ucGF5bG9hZCkgPT4ge1xuICAgICAgICBfZGlzcGF0Y2goeyB0eXBlLCBwYXlsb2FkOiBwYXlsb2FkWzBdIH0gYXMgQWN0aW9ucylcbiAgICB9LCBbXSlcbiAgICBjb25zdCB2YWx1ZXMgPSB1c2VNZW1vKCgpID0+IFtzdGF0ZSwgZGlzcGF0Y2hdIGFzIEdsb2JhbENvbnRleHRJbnRlcmZhY2UsIFtzdGF0ZV0pXG4gICAgcmV0dXJuIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZXN9PntjaGlsZHJlbn08L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0YXRlUHJvdmlkZXIiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsInVzZVJlZHVjZXIiLCJHbG9iYWxSZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwidXNlclN0YXRlIiwidXNlcmlkIiwibmFtZSIsImlzTG9hZGVkIiwiZGF0YXNldFJlcXVlc3RTdGF0ZSIsInNlYXJjaElucHV0Iiwic2VsZWN0ZWRGaWx0ZXIiLCJzZWxlY3RlZFNvcnRPcHRpb24iLCJHbG9iYWxDb250ZXh0IiwidW5kZWZpbmVkIiwiR2xvYmFsU3RhdGVQcm92aWRlciIsImNoaWxkcmVuIiwic3RhdGUiLCJfZGlzcGF0Y2giLCJkaXNwYXRjaCIsInR5cGUiLCJwYXlsb2FkIiwidmFsdWVzIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/globalStateProvider.tsx\n");

/***/ }),

/***/ "./src/pages/account.tsx":
/*!*******************************!*\
  !*** ./src/pages/account.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_signOutService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/signOutService */ \"./src/services/signOutService.ts\");\n/* harmony import */ var _context_globalStateProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/globalStateProvider */ \"./src/context/globalStateProvider.tsx\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_signOutService__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_5__]);\n([_services_signOutService__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst AccountPage = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [{ userState  }, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_globalStateProvider__WEBPACK_IMPORTED_MODULE_4__.GlobalContext);\n    const signOut = ()=>{\n        dispatch(\"setUserState\", {\n            isLoaded: true\n        });\n        localStorage.removeItem(\"accessToken\");\n        router.push(\"/\");\n    };\n    const signOutFromAllDevices = async ()=>{\n        try {\n            await (0,_services_signOutService__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n            dispatch(\"setUserState\", {\n                isLoaded: true\n            });\n            localStorage.removeItem(\"accessToken\");\n            router.push(\"/\");\n        } catch (error) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.error(\"Please try again\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"box\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"branding\",\n                    children: \"Account\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\pages\\\\account.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"boxtext\",\n                    children: \"Access your account information and manage your preference\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\pages\\\\account.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"boxtext\",\n                    children: [\n                        \"Signed in as \",\n                        userState.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\pages\\\\account.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"mt-2 btn btnbox\",\n                    onClick: signOut,\n                    children: [\n                        \"Sign Out\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fa-solid fa-circle-arrow-right\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\pages\\\\account.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 79\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\pages\\\\account.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\pages\\\\account.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 138\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"all-device-signout\",\n                    onClick: signOutFromAllDevices,\n                    children: \"Sign Out From All Devices\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\pages\\\\account.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\pages\\\\account.tsx\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\LENSTACK\\\\client\\\\src\\\\pages\\\\account.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWNjb3VudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDSztBQUNXO0FBQ087QUFDdkI7QUFFdkMsTUFBTU0sY0FBYyxJQUFNO0lBQ3RCLE1BQU1DLFNBQVNQLHNEQUFTQTtJQUN4QixNQUFNLENBQUMsRUFBRVEsVUFBUyxFQUFFLEVBQUVDLFNBQVMsR0FBR1AsaURBQVVBLENBQUNFLHVFQUFhQTtJQUUxRCxNQUFNTSxVQUFVLElBQU07UUFDbEJELFNBQVMsZ0JBQWdCO1lBQUVFLFVBQVUsSUFBSTtRQUFDO1FBQzFDQyxhQUFhQyxVQUFVLENBQUM7UUFDeEJOLE9BQU9PLElBQUksQ0FBQztJQUNoQjtJQUVBLE1BQU1DLHdCQUF3QixVQUFZO1FBQ3RDLElBQUk7WUFDQSxNQUFNWixvRUFBY0E7WUFDcEJNLFNBQVMsZ0JBQWdCO2dCQUFFRSxVQUFVLElBQUk7WUFBQztZQUMxQ0MsYUFBYUMsVUFBVSxDQUFDO1lBQ3hCTixPQUFPTyxJQUFJLENBQUM7UUFDaEIsRUFBRSxPQUFPRSxPQUFPO1lBQ1pYLHdEQUFXLENBQUM7UUFDaEI7SUFDSjtJQUVBLHFCQUNJLDhEQUFDSiwyQ0FBUUE7a0JBQ0wsNEVBQUNnQjtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0M7b0JBQUVELFdBQVU7OEJBQVc7Ozs7Ozs4QkFDeEIsOERBQUNDO29CQUFFRCxXQUFVOzhCQUFVOzs7Ozs7OEJBQ3ZCLDhEQUFDQztvQkFBRUQsV0FBVTs7d0JBQVU7d0JBQWNWLFVBQVVZLElBQUk7Ozs7Ozs7OEJBQ25ELDhEQUFDQztvQkFBT0gsV0FBVTtvQkFBa0JJLFNBQVNaOzt3QkFBUztzQ0FBUSw4REFBQ2E7NEJBQUVMLFdBQVU7Ozs7Ozs7Ozs7Ozs4QkFBOEMsOERBQUNNOzs7Ozs4QkFDMUgsOERBQUNMO29CQUFFRCxXQUFVO29CQUFxQkksU0FBU1A7OEJBQXVCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlsRjtBQUVBLGlFQUFlVCxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3BhZ2VzL2FjY291bnQudHN4Pzc0MzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzaWduT3V0U2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9zaWduT3V0U2VydmljZSdcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvZ2xvYmFsU3RhdGVQcm92aWRlcidcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnXHJcblxyXG5jb25zdCBBY2NvdW50UGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBbeyB1c2VyU3RhdGUgfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KVxyXG5cclxuICAgIGNvbnN0IHNpZ25PdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goJ3NldFVzZXJTdGF0ZScsIHsgaXNMb2FkZWQ6IHRydWUgfSlcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWNjZXNzVG9rZW4nKVxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaWduT3V0RnJvbUFsbERldmljZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgc2lnbk91dFNlcnZpY2UoKVxyXG4gICAgICAgICAgICBkaXNwYXRjaCgnc2V0VXNlclN0YXRlJywgeyBpc0xvYWRlZDogdHJ1ZSB9KVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWNjZXNzVG9rZW4nKVxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoJ1BsZWFzZSB0cnkgYWdhaW4nKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JveCc+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2JyYW5kaW5nJz5BY2NvdW50PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdib3h0ZXh0Jz5BY2Nlc3MgeW91ciBhY2NvdW50IGluZm9ybWF0aW9uIGFuZCBtYW5hZ2UgeW91ciBwcmVmZXJlbmNlPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdib3h0ZXh0Jz5TaWduZWQgaW4gYXMge3VzZXJTdGF0ZS5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdtdC0yIGJ0biBidG5ib3gnIG9uQ2xpY2s9e3NpZ25PdXR9PlNpZ24gT3V0PGkgY2xhc3NOYW1lPSdmYS1zb2xpZCBmYS1jaXJjbGUtYXJyb3ctcmlnaHQnPjwvaT48L2J1dHRvbj48YnIgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYWxsLWRldmljZS1zaWdub3V0JyBvbkNsaWNrPXtzaWduT3V0RnJvbUFsbERldmljZXN9PlNpZ24gT3V0IEZyb20gQWxsIERldmljZXM8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY291bnRQYWdlIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkZyYWdtZW50IiwidXNlQ29udGV4dCIsInNpZ25PdXRTZXJ2aWNlIiwiR2xvYmFsQ29udGV4dCIsInRvYXN0IiwiQWNjb3VudFBhZ2UiLCJyb3V0ZXIiLCJ1c2VyU3RhdGUiLCJkaXNwYXRjaCIsInNpZ25PdXQiLCJpc0xvYWRlZCIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJwdXNoIiwic2lnbk91dEZyb21BbGxEZXZpY2VzIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/account.tsx\n");

/***/ }),

/***/ "./src/services/signOutService.ts":
/*!****************************************!*\
  !*** ./src/services/signOutService.ts ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _constants_Endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/Endpoints */ \"./src/constants/Endpoints.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst signOutService = ()=>{\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(_constants_Endpoints__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signOutEndpoint);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (signOutService);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc2lnbk91dFNlcnZpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBQ3FCO0FBRTlDLE1BQU1FLGlCQUFpQixJQUFNO0lBQ3pCLE9BQU9GLGtEQUFVLENBQUNDLDRFQUF5QjtBQUMvQztBQUVBLGlFQUFlQyxjQUFjQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3NlcnZpY2VzL3NpZ25PdXRTZXJ2aWNlLnRzPzdhOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IGVuZFBvaW50cyBmcm9tICcuLi9jb25zdGFudHMvRW5kcG9pbnRzJ1xuXG5jb25zdCBzaWduT3V0U2VydmljZSA9ICgpID0+IHtcbiAgICByZXR1cm4gYXhpb3MucG9zdChlbmRQb2ludHMuc2lnbk91dEVuZHBvaW50KVxufVxuXG5leHBvcnQgZGVmYXVsdCBzaWduT3V0U2VydmljZSJdLCJuYW1lcyI6WyJheGlvcyIsImVuZFBvaW50cyIsInNpZ25PdXRTZXJ2aWNlIiwicG9zdCIsInNpZ25PdXRFbmRwb2ludCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/signOutService.ts\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/account.tsx"));
module.exports = __webpack_exports__;

})();