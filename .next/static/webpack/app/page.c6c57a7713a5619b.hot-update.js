"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/screens/home/ourProjects/OurProjects.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/screens/home/ourProjects/OurProjects.tsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ OurProjects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Our__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Our */ \"(app-pages-browser)/./src/components/screens/home/ourProjects/Our.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction OurProjects(param) {\n    let { title, description, services, btnText, projectsShowed } = param;\n    _s();\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchDataProject() {\n            const res = await fetch(\"https://rcw108.com/wp-json/wp/v2/projects?acf_format=standard\", {\n                next: {\n                    revalidate: 3600\n                }\n            });\n            if (!res.ok) {\n                throw new Error(\"Failed to fetch data\");\n            }\n            const resp = await res.json();\n            setProjects(resp);\n        }\n    }, []);\n    if (projects) {\n        const showedProjects = projectsShowed.map((projId)=>{\n            const showed = projects && projects.find((item)=>item.id === projId);\n            return showed;\n        });\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: projects && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Our__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: title,\n                description: description,\n                services: services,\n                btnText: btnText,\n                showedProjects: showedProjects\n            }, void 0, false, {\n                fileName: \"/Users/a1398/Desktop/vercel test/src/components/screens/home/ourProjects/OurProjects.tsx\",\n                lineNumber: 59,\n                columnNumber: 11\n            }, this)\n        }, void 0, false);\n    } else {\n        return null;\n    }\n}\n_s(OurProjects, \"TSrpuQX6QU8EgjQSxaAzj2u9i4o=\");\n_c = OurProjects;\nvar _c;\n$RefreshReg$(_c, \"OurProjects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NjcmVlbnMvaG9tZS9vdXJQcm9qZWN0cy9PdXJQcm9qZWN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVnRDtBQVF4QjtBQVVULFNBQVNHLFlBQVksS0FNMUI7UUFOMEIsRUFDbENDLEtBQUssRUFDTEMsV0FBVyxFQUNYQyxRQUFRLEVBQ1JDLE9BQU8sRUFDUEMsY0FBYyxFQUNOLEdBTjBCOztJQU9sQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUUzQ0QsZ0RBQVNBLENBQUM7UUFDUixlQUFlVztZQUNiLE1BQU1DLE1BQU0sTUFBTUMsTUFDaEIsaUVBQ0E7Z0JBQ0VDLE1BQU07b0JBQUVDLFlBQVk7Z0JBQUs7WUFDM0I7WUFHRixJQUFJLENBQUNILElBQUlJLEVBQUUsRUFBRTtnQkFDWCxNQUFNLElBQUlDLE1BQU07WUFDbEI7WUFFQSxNQUFNQyxPQUFPLE1BQU1OLElBQUlPLElBQUk7WUFFM0JULFlBQVlRO1FBQ2Q7SUFDRixHQUFHLEVBQUU7SUFFTCxJQUFJVCxVQUFVO1FBQ1osTUFBTVcsaUJBQWlCWixlQUFlYSxHQUFHLENBQUMsQ0FBQ0M7WUFDekMsTUFBTUMsU0FDSmQsWUFBWUEsU0FBU2UsSUFBSSxDQUFDLENBQUNDLE9BQXNCQSxLQUFLQyxFQUFFLEtBQUtKO1lBQy9ELE9BQU9DO1FBQ1Q7UUFFQSxxQkFDRTtzQkFDR2QsMEJBQ0MsOERBQUNQLDRDQUFHQTtnQkFDRkUsT0FBT0E7Z0JBQ1BDLGFBQWFBO2dCQUNiQyxVQUFVQTtnQkFDVkMsU0FBU0E7Z0JBQ1RhLGdCQUFnQkE7Ozs7Ozs7SUFLMUIsT0FBTztRQUNMLE9BQU87SUFDVDtBQUNGO0dBbkR3QmpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NjcmVlbnMvaG9tZS9vdXJQcm9qZWN0cy9PdXJQcm9qZWN0cy50c3g/MjY4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9vdXJQcm9qZWN0cy5tb2R1bGUuc2Nzc1wiO1xuXG5pbXBvcnQgeyBQcm9qZWN0RGF0YSB9IGZyb20gXCJAL2ludGVyZmFjZXMvcHJvamVjdC5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IElTZXJ2aWNlIH0gZnJvbSBcIkAvaW50ZXJmYWNlcy9ob21lLmludGVyZmFjZVwiO1xuaW1wb3J0IFNlcnZpY2VzQmxvY2sgZnJvbSBcIkAvY29tcG9uZW50cy91aS9zZXJ2aWNlc0Jsb2NrL1NlcnZpY2VzQmxvY2tcIjtcbmltcG9ydCBQcm9qZWN0QmxvY2sgZnJvbSBcIkAvY29tcG9uZW50cy91aS9wcm9qZWN0QmxvY2svUHJvamVjdEJsb2NrXCI7XG5pbXBvcnQgT3VyIGZyb20gXCIuL091clwiO1xuXG5pbnRlcmZhY2UgSVNob3dlZCB7XG4gIHByb2plY3RzU2hvd2VkOiBudW1iZXJbXTtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgc2VydmljZXM6IElTZXJ2aWNlW107XG4gIGJ0blRleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3VyUHJvamVjdHMoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIHNlcnZpY2VzLFxuICBidG5UZXh0LFxuICBwcm9qZWN0c1Nob3dlZCxcbn06IElTaG93ZWQpIHtcbiAgY29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGFQcm9qZWN0KCkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIFwiaHR0cHM6Ly9yY3cxMDguY29tL3dwLWpzb24vd3AvdjIvcHJvamVjdHM/YWNmX2Zvcm1hdD1zdGFuZGFyZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgbmV4dDogeyByZXZhbGlkYXRlOiAzNjAwIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBkYXRhXCIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgICAgc2V0UHJvamVjdHMocmVzcCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgaWYgKHByb2plY3RzKSB7XG4gICAgY29uc3Qgc2hvd2VkUHJvamVjdHMgPSBwcm9qZWN0c1Nob3dlZC5tYXAoKHByb2pJZDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBzaG93ZWQgPVxuICAgICAgICBwcm9qZWN0cyAmJiBwcm9qZWN0cy5maW5kKChpdGVtOiBQcm9qZWN0RGF0YSkgPT4gaXRlbS5pZCA9PT0gcHJvaklkKTtcbiAgICAgIHJldHVybiBzaG93ZWQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge3Byb2plY3RzICYmIChcbiAgICAgICAgICA8T3VyXG4gICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICBzZXJ2aWNlcz17c2VydmljZXN9XG4gICAgICAgICAgICBidG5UZXh0PXtidG5UZXh0fVxuICAgICAgICAgICAgc2hvd2VkUHJvamVjdHM9e3Nob3dlZFByb2plY3RzfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJPdXIiLCJPdXJQcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzZXJ2aWNlcyIsImJ0blRleHQiLCJwcm9qZWN0c1Nob3dlZCIsInByb2plY3RzIiwic2V0UHJvamVjdHMiLCJmZXRjaERhdGFQcm9qZWN0IiwicmVzIiwiZmV0Y2giLCJuZXh0IiwicmV2YWxpZGF0ZSIsIm9rIiwiRXJyb3IiLCJyZXNwIiwianNvbiIsInNob3dlZFByb2plY3RzIiwibWFwIiwicHJvaklkIiwic2hvd2VkIiwiZmluZCIsIml0ZW0iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/screens/home/ourProjects/OurProjects.tsx\n"));

/***/ })

});