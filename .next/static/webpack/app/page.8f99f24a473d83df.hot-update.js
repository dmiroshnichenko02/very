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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ OurProjects; },\n/* harmony export */   getStaticProps: function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Our__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Our */ \"(app-pages-browser)/./src/components/screens/home/ourProjects/Our.tsx\");\n\n\nasync function OurProjects(param) {\n    let { title, description, services, btnText, projectsShowed, projects, project } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: project && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Our__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            title: title,\n            description: description,\n            services: services,\n            btnText: btnText,\n            projectsShowed: projectsShowed,\n            projects: projects,\n            project: project\n        }, void 0, false, {\n            fileName: \"/Users/a1398/Desktop/vercel test/src/components/screens/home/ourProjects/OurProjects.tsx\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_c = OurProjects;\nasync function getStaticProps() {\n    try {\n        const res = await fetch(\"https://rcw108.com/wp-json/wp/v2/projects?acf_format=standard\", {\n            next: {\n                revalidate: 3600\n            }\n        });\n        if (!res.ok) {\n            throw new Error(\"Failed to fetch data\");\n        }\n        const project = await res.json();\n        return {\n            props: {\n                project\n            },\n            revalidate: 3600\n        };\n    } catch (error) {\n        console.error(error);\n        return {\n            props: {\n                project: null\n            },\n            revalidate: 3600\n        };\n    }\n}\nvar _c;\n$RefreshReg$(_c, \"OurProjects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NjcmVlbnMvaG9tZS9vdXJQcm9qZWN0cy9PdXJQcm9qZWN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDd0I7QUFhVCxlQUFlQyxZQUFZLEtBUWhDO1FBUmdDLEVBQ3hDQyxLQUFLLEVBQ0xDLFdBQVcsRUFDWEMsUUFBUSxFQUNSQyxPQUFPLEVBQ1BDLGNBQWMsRUFDZEMsUUFBUSxFQUNSQyxPQUFPLEVBQ0MsR0FSZ0M7SUFTeEMscUJBQ0U7a0JBQ0dBLHlCQUNDLDhEQUFDUiw0Q0FBR0E7WUFDRkUsT0FBT0E7WUFDUEMsYUFBYUE7WUFDYkMsVUFBVUE7WUFDVkMsU0FBU0E7WUFDVEMsZ0JBQWdCQTtZQUNoQkMsVUFBVUE7WUFDVkMsU0FBU0E7Ozs7Ozs7QUFLbkI7S0F4QjhCUDtBQTBCdkIsZUFBZVE7SUFDcEIsSUFBSTtRQUNGLE1BQU1DLE1BQU0sTUFBTUMsTUFDaEIsaUVBQ0E7WUFDRUMsTUFBTTtnQkFBRUMsWUFBWTtZQUFLO1FBQzNCO1FBR0YsSUFBSSxDQUFDSCxJQUFJSSxFQUFFLEVBQUU7WUFDWCxNQUFNLElBQUlDLE1BQU07UUFDbEI7UUFFQSxNQUFNUCxVQUFVLE1BQU1FLElBQUlNLElBQUk7UUFFOUIsT0FBTztZQUNMQyxPQUFPO2dCQUNMVDtZQUNGO1lBQ0FLLFlBQVk7UUFDZDtJQUNGLEVBQUUsT0FBT0ssT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUNBO1FBRWQsT0FBTztZQUNMRCxPQUFPO2dCQUNMVCxTQUFTO1lBQ1g7WUFDQUssWUFBWTtRQUNkO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zY3JlZW5zL2hvbWUvb3VyUHJvamVjdHMvT3VyUHJvamVjdHMudHN4PzI2OGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVNlcnZpY2UgfSBmcm9tIFwiQC9pbnRlcmZhY2VzL2hvbWUuaW50ZXJmYWNlXCI7XG5pbXBvcnQgT3VyIGZyb20gXCIuL091clwiO1xuaW1wb3J0IHsgUHJvamVjdERhdGEgfSBmcm9tIFwiQC9pbnRlcmZhY2VzL3Byb2plY3QuaW50ZXJmYWNlXCI7XG5cbmludGVyZmFjZSBJU2hvd2VkIHtcbiAgcHJvamVjdHNTaG93ZWQ6IG51bWJlcltdO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBzZXJ2aWNlczogSVNlcnZpY2VbXTtcbiAgYnRuVGV4dDogc3RyaW5nO1xuICBwcm9qZWN0czogbnVtYmVyW107XG4gIHByb2plY3Q6IGFueVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBPdXJQcm9qZWN0cyh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgc2VydmljZXMsXG4gIGJ0blRleHQsXG4gIHByb2plY3RzU2hvd2VkLFxuICBwcm9qZWN0cyxcbiAgcHJvamVjdFxufTogSVNob3dlZCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cHJvamVjdCAmJiAoXG4gICAgICAgIDxPdXJcbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIHNlcnZpY2VzPXtzZXJ2aWNlc31cbiAgICAgICAgICBidG5UZXh0PXtidG5UZXh0fVxuICAgICAgICAgIHByb2plY3RzU2hvd2VkPXtwcm9qZWN0c1Nob3dlZH1cbiAgICAgICAgICBwcm9qZWN0cz17cHJvamVjdHN9XG4gICAgICAgICAgcHJvamVjdD17cHJvamVjdH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly9yY3cxMDguY29tL3dwLWpzb24vd3AvdjIvcHJvamVjdHM/YWNmX2Zvcm1hdD1zdGFuZGFyZFwiLFxuICAgICAge1xuICAgICAgICBuZXh0OiB7IHJldmFsaWRhdGU6IDM2MDAgfSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBkYXRhXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3QgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHByb2plY3QsXG4gICAgICB9LFxuICAgICAgcmV2YWxpZGF0ZTogMzYwMCwgLy8g0L7QsdC90L7QstC70LXQvdC40LUg0LTQsNC90L3Ri9GFINC60LDQttC00YvQuSDRh9Cw0YFcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHByb2plY3Q6IG51bGwsXG4gICAgICB9LFxuICAgICAgcmV2YWxpZGF0ZTogMzYwMCxcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiT3VyIiwiT3VyUHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic2VydmljZXMiLCJidG5UZXh0IiwicHJvamVjdHNTaG93ZWQiLCJwcm9qZWN0cyIsInByb2plY3QiLCJnZXRTdGF0aWNQcm9wcyIsInJlcyIsImZldGNoIiwibmV4dCIsInJldmFsaWRhdGUiLCJvayIsIkVycm9yIiwianNvbiIsInByb3BzIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/screens/home/ourProjects/OurProjects.tsx\n"));

/***/ })

});