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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var D_Projects_openai_quickstart_node_master_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_Projects_openai_quickstart_node_master_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Projects_openai_quickstart_node_master_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n// your code\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), animalInput = ref[0], setAnimalInput = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), result = ref1[0], setResult = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    console.log(\"s\");\n    function onSubmit(event) {\n        return _onSubmit.apply(this, arguments);\n    }\n    function _onSubmit() {\n        _onSubmit = _asyncToGenerator(D_Projects_openai_quickstart_node_master_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var response, data;\n            return D_Projects_openai_quickstart_node_master_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        _ctx.next = 3;\n                        return fetch(\"/api/generate\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                animal: animalInput\n                            })\n                        });\n                    case 3:\n                        response = _ctx.sent;\n                        _ctx.next = 6;\n                        return response.json();\n                    case 6:\n                        data = _ctx.sent;\n                        setResult(data.result);\n                        setAnimalInput(\"\");\n                        ref2.current.value = data.result;\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _onSubmit.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Shento's Text generator\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\openai-quickstart-node-master\\\\pages\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/dog.png\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\openai-quickstart-node-master\\\\pages\\\\index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\openai-quickstart-node-master\\\\pages\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                        children: \"Generate something\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\openai-quickstart-node-master\\\\pages\\\\index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                        name: \"animal\",\n                        placeholder: \"Enter your text here.\",\n                        value: animalInput,\n                        onChange: function(e) {\n                            return setAnimalInput(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\openai-quickstart-node-master\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Generate sex\",\n                        onSubmit: onSubmit\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\openai-quickstart-node-master\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().vak),\n                        ref: ref2\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\openai-quickstart-node-master\\\\pages\\\\index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\openai-quickstart-node-master\\\\pages\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\openai-quickstart-node-master\\\\pages\\\\index.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"NRBWvXaHI8dMPW6ZMWF8lJM5HSA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0k7QUFDTztBQUNYOztBQUM3QixZQUFZO0FBRUcsU0FBU0ksSUFBSSxHQUFHOztJQUM3QixJQUFzQ0gsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVBwRCxXQU9vQixHQUFvQkEsR0FBWSxHQUFoQyxFQVBwQixjQU9vQyxHQUFJQSxHQUFZLEdBQWhCO0lBQ2xDLElBQTRCQSxJQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFSeEMsTUFRZSxHQUFlQSxJQUFVLEdBQXpCLEVBUmYsU0FRMEIsR0FBSUEsSUFBVSxHQUFkO0lBRXhCLElBQU1RLElBQUcsR0FBR04sNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFDeEJPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBRUZDLFFBQVEsQ0FBQ0MsS0FBSztlQUFkRCxTQUFROzthQUFSQSxTQUFRO1FBQVJBLFNBQVEsR0FBdkIsdUxBQXdCQyxLQUFLLEVBQUU7Z0JBRXZCQyxRQUFRLEVBT1JDLElBQUk7Ozs7d0JBUlZGLEtBQUssQ0FBQ0csY0FBYyxFQUFFLENBQUM7OytCQUNBQyxLQUFLLENBQUMsZUFBZSxFQUFFOzRCQUM1Q0MsTUFBTSxFQUFFLE1BQU07NEJBQ2RDLE9BQU8sRUFBRTtnQ0FDUCxjQUFjLEVBQUUsa0JBQWtCOzZCQUNuQzs0QkFDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztnQ0FBRUMsTUFBTSxFQUFFbEIsV0FBVzs2QkFBRSxDQUFDO3lCQUM5QyxDQUFDOzt3QkFOSVMsUUFBUSxZQU1aOzsrQkFDaUJBLFFBQVEsQ0FBQ1UsSUFBSSxFQUFFOzt3QkFBNUJULElBQUksWUFBd0I7d0JBRWxDUCxTQUFTLENBQUNPLElBQUksQ0FBQ1IsTUFBTSxDQUFDLENBQUM7d0JBQ3ZCRCxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ25CRyxJQUFHLENBQUNnQixPQUFPLENBQUNDLEtBQUssR0FBR1gsSUFBSSxDQUFDUixNQUFNLENBQUM7Ozs7OztTQUNqQztlQWRjSyxTQUFROztJQWdCdkIscUJBQ0UsOERBQUNlLEtBQUc7OzBCQUNGLDhEQUFDM0Isa0RBQUk7O2tDQUNILDhEQUFDNEIsT0FBSztrQ0FBQyx5QkFBdUI7Ozs7OzRCQUFRO2tDQUN0Qyw4REFBQ0MsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyxVQUFVOzs7Ozs0QkFBRzs7Ozs7O29CQUM5QjswQkFFUCw4REFBQ0MsTUFBSTtnQkFBQ0MsU0FBUyxFQUFFL0IsK0RBQVc7O2tDQUMxQiw4REFBQ2dDLElBQUU7a0NBQUMsb0JBQWtCOzs7Ozs0QkFBSztrQ0FHM0IsOERBQUNDLFVBQVE7d0JBQUNDLElBQUksRUFBQyxRQUFRO3dCQUFDQyxXQUFXLEVBQUMsdUJBQXVCO3dCQUFDWCxLQUFLLEVBQUVyQixXQUFXO3dCQUFFaUMsUUFBUSxFQUFFLFNBQUNDLENBQUM7bUNBQUtqQyxjQUFjLENBQUNpQyxDQUFDLENBQUNDLE1BQU0sQ0FBQ2QsS0FBSyxDQUFDO3lCQUFBOzs7Ozs0QkFBYTtrQ0FDNUksOERBQUNlLE9BQUs7d0JBQUNDLElBQUksRUFBQyxRQUFRO3dCQUFDaEIsS0FBSyxFQUFDLGNBQWM7d0JBQUNkLFFBQVEsRUFBRUEsUUFBUTs7Ozs7NEJBQUc7a0NBRS9ELDhEQUFDdUIsVUFBUTt3QkFBQ0YsU0FBUyxFQUFFL0IsOERBQVU7d0JBQUVPLEdBQUcsRUFBRUEsSUFBRzs7Ozs7NEJBQWE7Ozs7OztvQkFDakQ7Ozs7OztZQUNILENBQ047Q0FDSDtHQXpDdUJMLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7dXNlUmVmfSBmcm9tICdyZWFjdCc7XG4vLyB5b3VyIGNvZGVcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2FuaW1hbElucHV0LCBzZXRBbmltYWxJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zb2xlLmxvZygncycpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZVwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGFuaW1hbDogYW5pbWFsSW5wdXQgfSksXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBcbiAgICBzZXRSZXN1bHQoZGF0YS5yZXN1bHQpO1xuICAgIHNldEFuaW1hbElucHV0KFwiXCIpO1xuICAgIHJlZi5jdXJyZW50LnZhbHVlID0gZGF0YS5yZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNoZW50bydzIFRleHQgZ2VuZXJhdG9yPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZG9nLnBuZ1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDM+R2VuZXJhdGUgc29tZXRoaW5nPC9oMz5cbiAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiYW5pbWFsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHRleHQgaGVyZS5cIiB2YWx1ZT17YW5pbWFsSW5wdXR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0QW5pbWFsSW5wdXQoZS50YXJnZXQudmFsdWUpfT48L3RleHRhcmVhPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiR2VuZXJhdGUgc2V4XCIgb25TdWJtaXQ9e29uU3VibWl0fS8+XG5cbiAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT17c3R5bGVzLnZha30gcmVmPXtyZWZ9PjwvdGV4dGFyZWE+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVN0YXRlIiwic3R5bGVzIiwidXNlUmVmIiwiSG9tZSIsImFuaW1hbElucHV0Iiwic2V0QW5pbWFsSW5wdXQiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJyZWYiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJldmVudCIsInJlc3BvbnNlIiwiZGF0YSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhbmltYWwiLCJqc29uIiwiY3VycmVudCIsInZhbHVlIiwiZGl2IiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJoMyIsInRleHRhcmVhIiwibmFtZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaW5wdXQiLCJ0eXBlIiwidmFrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});