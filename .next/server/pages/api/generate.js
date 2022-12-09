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
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    const completion = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        prompt: generatePrompt(req.body.input),\n        temperature: 0.7,\n        max_tokens: 556,\n        top_p: 1,\n        frequency_penalty: 0,\n        presence_penalty: 0\n    });\n    res.status(200).json({\n        result: completion.data.choices[0].text.trim()\n    });\n};\nfunction generatePrompt(input) {\n    return `Describe as if Vladimir Nakobov wrote it: ${input}`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGFBQWEsR0FBRyxJQUFJRixpREFBYSxDQUFDO0lBQ3RDRyxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjO0NBQ25DLENBQUM7QUFDRixNQUFNQyxNQUFNLEdBQUcsSUFBSU4sNkNBQVMsQ0FBQ0MsYUFBYSxDQUFDO0FBRTNDLDZCQUFlLDBDQUFnQk0sR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdkMsTUFBTUMsVUFBVSxHQUFHLE1BQU1ILE1BQU0sQ0FBQ0ksZ0JBQWdCLENBQUM7UUFDL0NDLEtBQUssRUFBRSxrQkFBa0I7UUFDekJDLE1BQU0sRUFBRUMsY0FBYyxDQUFDTixHQUFHLENBQUNPLElBQUksQ0FBQ0MsS0FBSyxDQUFDO1FBQ3RDQyxXQUFXLEVBQUUsR0FBRztRQUNoQkMsVUFBVSxFQUFFLEdBQUc7UUFDZkMsS0FBSyxFQUFFLENBQUM7UUFDUkMsaUJBQWlCLEVBQUUsQ0FBQztRQUNwQkMsZ0JBQWdCLEVBQUUsQ0FBQztLQUVwQixDQUFDO0lBQ0ZaLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsTUFBTSxFQUFFZCxVQUFVLENBQUNlLElBQUksQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUNDLElBQUksRUFBRTtLQUFFLENBQUMsQ0FBQztDQUMxRTtBQUVELFNBQVNkLGNBQWMsQ0FBQ0UsS0FBSyxFQUFFO0lBQzdCLE9BQU8sQ0FBQywwQ0FBMEMsRUFBRUEsS0FBSyxDQUFDLENBQUMsQ0FBQztDQUM3RCIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5haS1xdWlja3N0YXJ0LW5vZGUvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanM/NjI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tIFwib3BlbmFpXCI7XG5cbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVksXG59KTtcbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUlBcGkoY29uZmlndXJhdGlvbik7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgb3BlbmFpLmNyZWF0ZUNvbXBsZXRpb24oe1xuICAgIG1vZGVsOiBcInRleHQtZGF2aW5jaS0wMDNcIixcbiAgICBwcm9tcHQ6IGdlbmVyYXRlUHJvbXB0KHJlcS5ib2R5LmlucHV0KSxcbiAgICB0ZW1wZXJhdHVyZTogMC43LFxuICAgIG1heF90b2tlbnM6IDU1NixcbiAgICB0b3BfcDogMSxcbiAgICBmcmVxdWVuY3lfcGVuYWx0eTogMCxcbiAgICBwcmVzZW5jZV9wZW5hbHR5OiAwLFxuXG4gIH0pO1xuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHJlc3VsdDogY29tcGxldGlvbi5kYXRhLmNob2ljZXNbMF0udGV4dC50cmltKCkgfSk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvbXB0KGlucHV0KSB7XG4gIHJldHVybiBgRGVzY3JpYmUgYXMgaWYgVmxhZGltaXIgTmFrb2JvdiB3cm90ZSBpdDogJHtpbnB1dH1gO1xufVxuIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJjb25maWd1cmF0aW9uIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwib3BlbmFpIiwicmVxIiwicmVzIiwiY29tcGxldGlvbiIsImNyZWF0ZUNvbXBsZXRpb24iLCJtb2RlbCIsInByb21wdCIsImdlbmVyYXRlUHJvbXB0IiwiYm9keSIsImlucHV0IiwidGVtcGVyYXR1cmUiLCJtYXhfdG9rZW5zIiwidG9wX3AiLCJmcmVxdWVuY3lfcGVuYWx0eSIsInByZXNlbmNlX3BlbmFsdHkiLCJzdGF0dXMiLCJqc29uIiwicmVzdWx0IiwiZGF0YSIsImNob2ljZXMiLCJ0ZXh0IiwidHJpbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();