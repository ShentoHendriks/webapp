"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var D_Projects_openai_quickstart_node_master_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_Projects_openai_quickstart_node_master_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Projects_openai_quickstart_node_master_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n// your code\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), animalInput = ref[0], setAnimalInput = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), result = ref1[0], setResult = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    console.log(\"s\");\n    function onSubmit(event) {\n        return _onSubmit.apply(this, arguments);\n    }\n    function _onSubmit() {\n        _onSubmit = _asyncToGenerator(D_Projects_openai_quickstart_node_master_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var response, data;\n            return D_Projects_openai_quickstart_node_master_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        _ctx.next = 3;\n                        return fetch(\"/api/generate\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                animal: animalInput\n                            })\n                        });\n                    case 3:\n                        response = _ctx.sent;\n                        _ctx.next = 6;\n                        return response.json();\n                    case 6:\n                        data = _ctx.sent;\n                        setResult(data.result);\n                        setAnimalInput(\"\");\n                        ref2.current.value = data.result;\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _onSubmit.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Shento's Text generator\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\openai-quickstart-node-master\\\\pages\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/dog.png\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\openai-quickstart-node-master\\\\pages\\\\index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\openai-quickstart-node-master\\\\pages\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                        children: \"Generate something\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\openai-quickstart-node-master\\\\pages\\\\index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"animal\",\n                                placeholder: \"Enter your text here\",\n                                value: animalInput,\n                                onChange: function(e) {\n                                    return setAnimalInput(e.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\openai-quickstart-node-master\\\\pages\\\\index.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                                name: \"animal\",\n                                placeholder: \"Enter your text here.\",\n                                value: animalInput,\n                                onChange: function(e) {\n                                    return setAnimalInput(e.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\openai-quickstart-node-master\\\\pages\\\\index.js\",\n                                lineNumber: 48,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Generate sex\",\n                                onSubmit: onSubmit\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\openai-quickstart-node-master\\\\pages\\\\index.js\",\n                                lineNumber: 49,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\openai-quickstart-node-master\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().vak),\n                        ref: ref2\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\openai-quickstart-node-master\\\\pages\\\\index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\openai-quickstart-node-master\\\\pages\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\openai-quickstart-node-master\\\\pages\\\\index.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"NRBWvXaHI8dMPW6ZMWF8lJM5HSA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRCQUN4RDtrQ0FDUCw4REFBQytCLFVBQVE7d0JBQUNWLFNBQVMsRUFBRS9CLDhEQUFVO3dCQUFFTyxHQUFHLEVBQUVBLElBQUc7Ozs7OzRCQUFhOzs7Ozs7b0JBQ2pEOzs7Ozs7WUFDSCxDQUNOO0NBQ0g7R0FoRHVCTCxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQge3VzZVJlZn0gZnJvbSAncmVhY3QnO1xuLy8geW91ciBjb2RlXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFthbmltYWxJbnB1dCwgc2V0QW5pbWFsSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc29sZS5sb2coJ3MnKTtcblxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZ2VuZXJhdGVcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBhbmltYWw6IGFuaW1hbElucHV0IH0pLFxuICAgIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgXG4gICAgc2V0UmVzdWx0KGRhdGEucmVzdWx0KTtcbiAgICBzZXRBbmltYWxJbnB1dChcIlwiKTtcbiAgICByZWYuY3VycmVudC52YWx1ZSA9IGRhdGEucmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TaGVudG8ncyBUZXh0IGdlbmVyYXRvcjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2RvZy5wbmdcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgzPkdlbmVyYXRlIHNvbWV0aGluZzwvaDM+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwiYW5pbWFsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciB0ZXh0IGhlcmVcIlxuICAgICAgICAgICAgdmFsdWU9e2FuaW1hbElucHV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBbmltYWxJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICBcbiAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJhbmltYWxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgdGV4dCBoZXJlLlwiIHZhbHVlPXthbmltYWxJbnB1dH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRBbmltYWxJbnB1dChlLnRhcmdldC52YWx1ZSl9PjwvdGV4dGFyZWE+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJHZW5lcmF0ZSBzZXhcIiBvblN1Ym1pdD17b25TdWJtaXR9Lz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXtzdHlsZXMudmFrfSByZWY9e3JlZn0+PC90ZXh0YXJlYT5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJ1c2VSZWYiLCJIb21lIiwiYW5pbWFsSW5wdXQiLCJzZXRBbmltYWxJbnB1dCIsInJlc3VsdCIsInNldFJlc3VsdCIsInJlZiIsImNvbnNvbGUiLCJsb2ciLCJvblN1Ym1pdCIsImV2ZW50IiwicmVzcG9uc2UiLCJkYXRhIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFuaW1hbCIsImpzb24iLCJjdXJyZW50IiwidmFsdWUiLCJkaXYiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsImgzIiwiZm9ybSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInRleHRhcmVhIiwidmFrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});