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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.module.css":
/*!********************************!*\
  !*** ./pages/index.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"index_main__3wZvj\",\n\t\"bigfont\": \"index_bigfont__TP8zL\",\n\t\"firasans\": \"index_firasans__7Fe3b\",\n\t\"button\": \"index_button__g8ljY\",\n\t\"margintop\": \"index_margintop__3tDFU\",\n\t\"vakinput\": \"index_vakinput__Ft6CH\",\n\t\"vakouput\": \"index_vakouput__LifHp\",\n\t\"wrapper\": \"index_wrapper___mRPR\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVuYWktcXVpY2tzdGFydC1ub2RlLy4vcGFnZXMvaW5kZXgubW9kdWxlLmNzcz80ODM2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJpbmRleF9tYWluX18zd1p2alwiLFxuXHRcImJpZ2ZvbnRcIjogXCJpbmRleF9iaWdmb250X19UUDh6TFwiLFxuXHRcImZpcmFzYW5zXCI6IFwiaW5kZXhfZmlyYXNhbnNfXzdGZTNiXCIsXG5cdFwiYnV0dG9uXCI6IFwiaW5kZXhfYnV0dG9uX19nOGxqWVwiLFxuXHRcIm1hcmdpbnRvcFwiOiBcImluZGV4X21hcmdpbnRvcF9fM3RERlVcIixcblx0XCJ2YWtpbnB1dFwiOiBcImluZGV4X3Zha2lucHV0X19GdDZDSFwiLFxuXHRcInZha291cHV0XCI6IFwiaW5kZXhfdmFrb3VwdXRfX0xpZkhwXCIsXG5cdFwid3JhcHBlclwiOiBcImluZGV4X3dyYXBwZXJfX19tUlBSXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction Home() {\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const author = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const output = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const detail = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const maxwords = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const randomness = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var input_prompt = \"\";\n    async function onSubmit(event) {\n        event.preventDefault();\n        // Setup The prompt\n        input_prompt = `Rewrite as if ${author.current.value} has written it:\\n${ref.current.value}`;\n        if (detail.current.value == \"Rewrite the sentence\") {\n            input_prompt = `Rewrite as if ${author.current.value} has written it:\\n'\\n${ref.current.value}\\n'\\n`;\n        }\n        if (detail.current.value == \"Add more detail\") {\n            input_prompt = `Rewrite as if ${author.current.value} has written it. Add more detail:\\n'\\n${ref.current.value}\\n'\\n`;\n        }\n        if (detail.current.value == \"Add as many detail as possible\") {\n            input_prompt = `Rewrite as if ${author.current.value} has written it. Add as many details as possible. Write as much as you can:\\n'\\n${ref.current.value}\\n'\\n`;\n        }\n        // Max words\n        function isNumeric(value) {\n            return /^-?\\d+$/.test(value);\n        }\n        var number_for_prompt = 250;\n        if (isNumeric(maxwords.current.value) == true) {\n            number_for_prompt = parseInt(maxwords.current.value / 0.75);\n        }\n        var randomness_holder = 0.7;\n        if (isNumeric(randomness.current.value) == true) {\n            randomness_holder = parseInt(randomness.current.value);\n        }\n        const response = await fetch(\"/api/generate\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            /* Send the data to the generate.js */ body: JSON.stringify({\n                input: input_prompt,\n                maxwordsCount: number_for_prompt,\n                randomness: randomness_holder\n            })\n        });\n        const data = await response.json();\n        /* Letter generation in forms*/ for(let i1 = 0; i1 < data.result.length; i1++){\n            task(i1);\n        }\n        function task(i) {\n            setTimeout(function() {\n                if (i == 0) {\n                    output.current.value = \"\";\n                }\n                output.current.value += data.result.charAt(i);\n            }, 15 * i);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Shento's Text generator\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/dog.png\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Verbosity: Rewrite your prose into something beautiful.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Developed and created by: Shento Hendriks\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: \"Choose your Author:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().bigfont),\n                            ref: author,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"Vladimir Nabokov\",\n                                    children: \"Vladimir Nabokov\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"Ernest Hemingway\",\n                                    children: \"Ernest Hemingway\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"F. Scott Fitzgerald\",\n                                    children: \"F. Scott Fitzgerald\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"J. R. R. Tolkien\",\n                                    children: \"J. R. R. Tolkien\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"Virginia Woolf\",\n                                    children: \"Virginia Woolf\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"A poet\",\n                                    children: \"A Poet\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().margintop),\n                            children: \"Choose amount of detail:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().bigfont),\n                            ref: detail,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"Rewrite the sentence\",\n                                    children: \"Rewrite the sentence\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"Add more detail\",\n                                    children: \"Add more detail\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"Add as many detail as possible\",\n                                    children: \"Add as many detail as possible\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().margintop),\n                            children: \"Generate max word count (1-1000) Default = 250:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().bigfont),\n                            ref: maxwords\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().margintop),\n                            children: \"Randomness (0-1) Default = 0.7:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().bigfont),\n                            ref: randomness\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: onSubmit,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                                type: \"submit\",\n                                value: \"Rewrite\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().vakinput),\n                            ref: ref,\n                            placeholder: \"I want to describe...\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().vakouput),\n                            placeholder: \"Rewritten Text...\",\n                            ref: output\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Shento\\\\Documents\\\\GitHub\\\\webapp\\\\pages\\\\index.js\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTtzQ0FDdkYsOERBQUMyQixPQUFLOzRCQUFDd0IsSUFBSSxFQUFDLE1BQU07NEJBQUNSLFNBQVMsRUFBRTNDLGtFQUFjOzRCQUFFRyxHQUFHLEVBQUVJLFFBQVE7Ozs7O2dDQUFVO3NDQUVyRSw4REFBQzhCLEtBQUc7NEJBQUNNLFNBQVMsRUFBRTNDLG9FQUFnQjtzQ0FBRSxpQ0FBK0I7Ozs7O2dDQUFNO3NDQUN2RSw4REFBQzJCLE9BQUs7NEJBQUN3QixJQUFJLEVBQUMsTUFBTTs0QkFBQ1IsU0FBUyxFQUFFM0Msa0VBQWM7NEJBQUVHLEdBQUcsRUFBRUssVUFBVTs7Ozs7Z0NBQVU7c0NBRXZFLDhEQUFDNEMsTUFBSTs0QkFBQzFDLFFBQVEsRUFBRUEsUUFBUTtzQ0FDdEIsNEVBQUNpQixPQUFLO2dDQUFDZ0IsU0FBUyxFQUFFM0MsaUVBQWE7Z0NBQUVtRCxJQUFJLEVBQUMsUUFBUTtnQ0FBQ3JDLEtBQUssRUFBQyxTQUFTOzs7OztvQ0FBRzs7Ozs7Z0NBQzVEO3NDQUVQLDhEQUFDd0MsVUFBUTs0QkFBQ1gsU0FBUyxFQUFFM0MsbUVBQWU7NEJBQUVHLEdBQUcsRUFBRUEsR0FBRzs0QkFBRXFELFdBQVcsRUFBQyx1QkFBdUI7Ozs7O2dDQUFZO3NDQUMvRiw4REFBQ0YsVUFBUTs0QkFBQ1gsU0FBUyxFQUFFM0MsbUVBQWU7NEJBQUV3RCxXQUFXLEVBQUMsbUJBQW1COzRCQUFDckQsR0FBRyxFQUFFRSxNQUFNOzs7OztnQ0FBYTs7Ozs7O3dCQUMxRjs7Ozs7b0JBR0Q7Ozs7OztZQUNILENBQ047Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5haS1xdWlja3N0YXJ0LW5vZGUvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgYXV0aG9yID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IG91dHB1dCA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBkZXRhaWwgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgbWF4d29yZHMgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgcmFuZG9tbmVzcyA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgdmFyIGlucHV0X3Byb21wdCA9IFwiXCI7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0KGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vIFNldHVwIFRoZSBwcm9tcHRcclxuXHJcbiAgICBpbnB1dF9wcm9tcHQgPSBgUmV3cml0ZSBhcyBpZiAke2F1dGhvci5jdXJyZW50LnZhbHVlfSBoYXMgd3JpdHRlbiBpdDpcXG4ke3JlZi5jdXJyZW50LnZhbHVlfWBcclxuXHJcbiAgICBpZiAoZGV0YWlsLmN1cnJlbnQudmFsdWUgPT0gXCJSZXdyaXRlIHRoZSBzZW50ZW5jZVwiKSB7XHJcbiAgICAgIGlucHV0X3Byb21wdCA9IGBSZXdyaXRlIGFzIGlmICR7YXV0aG9yLmN1cnJlbnQudmFsdWV9IGhhcyB3cml0dGVuIGl0OlxcbidcXG4ke3JlZi5jdXJyZW50LnZhbHVlfVxcbidcXG5gXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRldGFpbC5jdXJyZW50LnZhbHVlID09IFwiQWRkIG1vcmUgZGV0YWlsXCIpIHtcclxuICAgICAgaW5wdXRfcHJvbXB0ID0gYFJld3JpdGUgYXMgaWYgJHthdXRob3IuY3VycmVudC52YWx1ZX0gaGFzIHdyaXR0ZW4gaXQuIEFkZCBtb3JlIGRldGFpbDpcXG4nXFxuJHtyZWYuY3VycmVudC52YWx1ZX1cXG4nXFxuYFxyXG4gICAgfVxyXG4gICAgaWYgKGRldGFpbC5jdXJyZW50LnZhbHVlID09IFwiQWRkIGFzIG1hbnkgZGV0YWlsIGFzIHBvc3NpYmxlXCIpIHtcclxuICAgICAgaW5wdXRfcHJvbXB0ID0gYFJld3JpdGUgYXMgaWYgJHthdXRob3IuY3VycmVudC52YWx1ZX0gaGFzIHdyaXR0ZW4gaXQuIEFkZCBhcyBtYW55IGRldGFpbHMgYXMgcG9zc2libGUuIFdyaXRlIGFzIG11Y2ggYXMgeW91IGNhbjpcXG4nXFxuJHtyZWYuY3VycmVudC52YWx1ZX1cXG4nXFxuYFxyXG4gICAgfVxyXG5cclxuICAgIC8vIE1heCB3b3Jkc1xyXG4gICAgZnVuY3Rpb24gaXNOdW1lcmljKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiAvXi0/XFxkKyQvLnRlc3QodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBudW1iZXJfZm9yX3Byb21wdCA9IDI1MDsgXHJcbiAgICBpZiAoaXNOdW1lcmljKG1heHdvcmRzLmN1cnJlbnQudmFsdWUpID09IHRydWUpIHtcclxuICAgICAgbnVtYmVyX2Zvcl9wcm9tcHQgPSBwYXJzZUludChtYXh3b3Jkcy5jdXJyZW50LnZhbHVlLzAuNzUpXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHJhbmRvbW5lc3NfaG9sZGVyID0gMC43OyBcclxuICAgIGlmIChpc051bWVyaWMocmFuZG9tbmVzcy5jdXJyZW50LnZhbHVlKSA9PSB0cnVlKSB7XHJcbiAgICAgIHJhbmRvbW5lc3NfaG9sZGVyID0gcGFyc2VJbnQocmFuZG9tbmVzcy5jdXJyZW50LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZVwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgLyogU2VuZCB0aGUgZGF0YSB0byB0aGUgZ2VuZXJhdGUuanMgKi9cclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGlucHV0OiBpbnB1dF9wcm9tcHQsXHJcbiAgICAgICAgbWF4d29yZHNDb3VudDogbnVtYmVyX2Zvcl9wcm9tcHQsXHJcbiAgICAgICAgcmFuZG9tbmVzczogcmFuZG9tbmVzc19ob2xkZXIsXHJcbiAgICAgIH0pLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIC8qIExldHRlciBnZW5lcmF0aW9uIGluIGZvcm1zKi9cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5yZXN1bHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGFzayhpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0YXNrKGkpIHtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgb3V0cHV0LmN1cnJlbnQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvdXRwdXQuY3VycmVudC52YWx1ZSArPSBkYXRhLnJlc3VsdC5jaGFyQXQoaSlcclxuICAgICAgfSwgMTUgKiBpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+U2hlbnRvJ3MgVGV4dCBnZW5lcmF0b3I8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2RvZy5wbmdcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgPGgxPlZlcmJvc2l0eTogUmV3cml0ZSB5b3VyIHByb3NlIGludG8gc29tZXRoaW5nIGJlYXV0aWZ1bC48L2gxPlxyXG4gICAgICAgICAgPGgzPkRldmVsb3BlZCBhbmQgY3JlYXRlZCBieTogU2hlbnRvIEhlbmRyaWtzPC9oMz5cclxuXHJcbiAgICAgICAgICA8ZGl2PkNob29zZSB5b3VyIEF1dGhvcjo8L2Rpdj5cclxuICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPXtzdHlsZXMuYmlnZm9udH0gcmVmPXthdXRob3J9PlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVmxhZGltaXIgTmFib2tvdlwiPlZsYWRpbWlyIE5hYm9rb3Y8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVybmVzdCBIZW1pbmd3YXlcIj5Fcm5lc3QgSGVtaW5nd2F5PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGLiBTY290dCBGaXR6Z2VyYWxkXCI+Ri4gU2NvdHQgRml0emdlcmFsZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSi4gUi4gUi4gVG9sa2llblwiPkouIFIuIFIuIFRvbGtpZW48L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlZpcmdpbmlhIFdvb2xmXCI+VmlyZ2luaWEgV29vbGY8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkEgcG9ldFwiPkEgUG9ldDwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW50b3B9PkNob29zZSBhbW91bnQgb2YgZGV0YWlsOjwvZGl2PlxyXG4gICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9e3N0eWxlcy5iaWdmb250fSByZWY9e2RldGFpbH0+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJSZXdyaXRlIHRoZSBzZW50ZW5jZVwiPlJld3JpdGUgdGhlIHNlbnRlbmNlPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBZGQgbW9yZSBkZXRhaWxcIj5BZGQgbW9yZSBkZXRhaWw8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFkZCBhcyBtYW55IGRldGFpbCBhcyBwb3NzaWJsZVwiPkFkZCBhcyBtYW55IGRldGFpbCBhcyBwb3NzaWJsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW50b3B9PkdlbmVyYXRlIG1heCB3b3JkIGNvdW50ICgxLTEwMDApIERlZmF1bHQgPSAyNTA6PC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9e3N0eWxlcy5iaWdmb250fSByZWY9e21heHdvcmRzfT48L2lucHV0PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFyZ2ludG9wfT5SYW5kb21uZXNzICgwLTEpIERlZmF1bHQgPSAwLjc6PC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9e3N0eWxlcy5iaWdmb250fSByZWY9e3JhbmRvbW5lc3N9PjwvaW5wdXQ+XHJcblxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiUmV3cml0ZVwiIC8+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT17c3R5bGVzLnZha2lucHV0fSByZWY9e3JlZn0gcGxhY2Vob2xkZXI9XCJJIHdhbnQgdG8gZGVzY3JpYmUuLi5cIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT17c3R5bGVzLnZha291cHV0fSBwbGFjZWhvbGRlcj1cIlJld3JpdHRlbiBUZXh0Li4uXCIgcmVmPXtvdXRwdXR9PjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJIZWFkIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJ1c2VSZWYiLCJIb21lIiwicmVmIiwiYXV0aG9yIiwib3V0cHV0IiwiZGV0YWlsIiwibWF4d29yZHMiLCJyYW5kb21uZXNzIiwiaW5wdXRfcHJvbXB0Iiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwiaXNOdW1lcmljIiwidGVzdCIsIm51bWJlcl9mb3JfcHJvbXB0IiwicGFyc2VJbnQiLCJyYW5kb21uZXNzX2hvbGRlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbnB1dCIsIm1heHdvcmRzQ291bnQiLCJkYXRhIiwianNvbiIsImkiLCJyZXN1bHQiLCJsZW5ndGgiLCJ0YXNrIiwic2V0VGltZW91dCIsImNoYXJBdCIsImRpdiIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiY2xhc3NOYW1lIiwid3JhcHBlciIsImgxIiwiaDMiLCJzZWxlY3QiLCJiaWdmb250Iiwib3B0aW9uIiwibWFyZ2ludG9wIiwidHlwZSIsImZvcm0iLCJidXR0b24iLCJ0ZXh0YXJlYSIsInZha2lucHV0IiwicGxhY2Vob2xkZXIiLCJ2YWtvdXB1dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();