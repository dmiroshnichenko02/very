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

/***/ "(app-pages-browser)/./src/components/screens/home/ourProjects/Our.tsx":
/*!*********************************************************!*\
  !*** ./src/components/screens/home/ourProjects/Our.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_projectBlock_ProjectBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/projectBlock/ProjectBlock */ \"(app-pages-browser)/./src/components/ui/projectBlock/ProjectBlock.tsx\");\n/* harmony import */ var _components_ui_servicesBlock_ServicesBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/servicesBlock/ServicesBlock */ \"(app-pages-browser)/./src/components/ui/servicesBlock/ServicesBlock.tsx\");\n/* harmony import */ var _SliderComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SliderComponent */ \"(app-pages-browser)/./src/components/screens/home/ourProjects/SliderComponent.tsx\");\n/* harmony import */ var _ourProjects_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ourProjects.module.scss */ \"(app-pages-browser)/./src/components/screens/home/ourProjects/ourProjects.module.scss\");\n/* harmony import */ var _ourProjects_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ourProjects_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst Our = (param)=>{\n    let { projects } = param;\n    const showedProjects = projects.projectsShowed && projects.projectsShowed.map((projId)=>{\n        const showed = projects.find((item)=>item.id === projId);\n        return showed;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: projects && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: (_ourProjects_module_scss__WEBPACK_IMPORTED_MODULE_4___default().projects),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_ourProjects_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),\n                    children: projects.title\n                }, void 0, false, {\n                    fileName: \"/Users/a1398/Desktop/vercel test/src/components/screens/home/ourProjects/Our.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_ourProjects_module_scss__WEBPACK_IMPORTED_MODULE_4___default().descr),\n                    children: projects.description\n                }, void 0, false, {\n                    fileName: \"/Users/a1398/Desktop/vercel test/src/components/screens/home/ourProjects/Our.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ourProjects_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrapper),\n                    children: projects.services && projects.services.map((item, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_servicesBlock_ServicesBlock__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: item.title,\n                            img: item.img\n                        }, index, false, {\n                            fileName: \"/Users/a1398/Desktop/vercel test/src/components/screens/home/ourProjects/Our.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/a1398/Desktop/vercel test/src/components/screens/home/ourProjects/Our.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ourProjects_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrapperProjects),\n                    children: showedProjects && showedProjects.map((item)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_projectBlock_ProjectBlock__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            id: item.id,\n                            image: item.acf.image_ts,\n                            title: item.title.rendered,\n                            description: item.excerpt.rendered,\n                            web: item.acf.website\n                        }, item.id, false, {\n                            fileName: \"/Users/a1398/Desktop/vercel test/src/components/screens/home/ourProjects/Our.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 21\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/a1398/Desktop/vercel test/src/components/screens/home/ourProjects/Our.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SliderComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    showedProjects: showedProjects\n                }, void 0, false, {\n                    fileName: \"/Users/a1398/Desktop/vercel test/src/components/screens/home/ourProjects/Our.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ourProjects_module_scss__WEBPACK_IMPORTED_MODULE_4___default().btns),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_ourProjects_module_scss__WEBPACK_IMPORTED_MODULE_4___default().button),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"See All Projects\"\n                            }, void 0, false, {\n                                fileName: \"/Users/a1398/Desktop/vercel test/src/components/screens/home/ourProjects/Our.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                version: \"1.1\",\n                                className: (_ourProjects_module_scss__WEBPACK_IMPORTED_MODULE_4___default().circleSvg1),\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                xmlnsXlink: \"http://www.w3.org/1999/xlink\",\n                                x: \"0px\",\n                                y: \"0px\",\n                                viewBox: \"0 0 149.955 149.955\",\n                                xmlSpace: \"preserve\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M149.945,98.318l-0.906-93.803c-0.022-2.072-1.7-3.75-3.772-3.765L51.634,0l-0.06,7.603l84.735,0.679 L0.011,144.579l5.376,5.376L141.525,13.817l0.816,84.575L149.945,98.318z\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/a1398/Desktop/vercel test/src/components/screens/home/ourProjects/Our.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/a1398/Desktop/vercel test/src/components/screens/home/ourProjects/Our.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/a1398/Desktop/vercel test/src/components/screens/home/ourProjects/Our.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/a1398/Desktop/vercel test/src/components/screens/home/ourProjects/Our.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/a1398/Desktop/vercel test/src/components/screens/home/ourProjects/Our.tsx\",\n            lineNumber: 22,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_c = Our;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Our);\nvar _c;\n$RefreshReg$(_c, \"Our\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NjcmVlbnMvaG9tZS9vdXJQcm9qZWN0cy9PdXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXFFO0FBQ0c7QUFFeEI7QUFFRDtBQUcvQyxNQUFNSSxNQUFrQztRQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUduRCxNQUFNQyxpQkFDSkQsU0FBU0UsY0FBYyxJQUN2QkYsU0FBU0UsY0FBYyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0M7UUFDM0IsTUFBTUMsU0FBU0wsU0FBU00sSUFBSSxDQUFDLENBQUNDLE9BQXNCQSxLQUFLQyxFQUFFLEtBQUtKO1FBQ2hFLE9BQU9DO0lBQ1Q7SUFFRixxQkFDRTtrQkFDR0wsMEJBQ0MsOERBQUNTO1lBQVFDLFdBQVdaLDBFQUFlOzs4QkFDakMsOERBQUNhO29CQUFHRCxXQUFXWix1RUFBWTs4QkFBR0UsU0FBU1ksS0FBSzs7Ozs7OzhCQUM1Qyw4REFBQ0M7b0JBQUVILFdBQVdaLHVFQUFZOzhCQUFHRSxTQUFTZSxXQUFXOzs7Ozs7OEJBQ2pELDhEQUFDQztvQkFBSU4sV0FBV1oseUVBQWM7OEJBQzNCRSxTQUFTa0IsUUFBUSxJQUNoQmxCLFNBQVNrQixRQUFRLENBQUNmLEdBQUcsQ0FDbkIsQ0FBQ0ksTUFBc0NZO3dCQUNyQyxxQkFDRSw4REFBQ3ZCLGtGQUFhQTs0QkFFWmdCLE9BQU9MLEtBQUtLLEtBQUs7NEJBQ2pCUSxLQUFLYixLQUFLYSxHQUFHOzJCQUZSRDs7Ozs7b0JBS1g7Ozs7Ozs4QkFHTiw4REFBQ0g7b0JBQUlOLFdBQVdaLGlGQUFzQjs4QkFDbkNHLGtCQUNDQSxlQUFlRSxHQUFHLENBQ2hCLENBQUNJO3dCQU1DLHFCQUNFLDhEQUFDWixnRkFBWUE7NEJBQ1hhLElBQUlELEtBQUtDLEVBQUU7NEJBRVhjLE9BQU9mLEtBQUtnQixHQUFHLENBQUNDLFFBQVE7NEJBQ3hCWixPQUFPTCxLQUFLSyxLQUFLLENBQUNhLFFBQVE7NEJBQzFCVixhQUFhUixLQUFLbUIsT0FBTyxDQUFDRCxRQUFROzRCQUNsQ0UsS0FBS3BCLEtBQUtnQixHQUFHLENBQUNLLE9BQU87MkJBSmhCckIsS0FBS0MsRUFBRTs7Ozs7b0JBT2xCOzs7Ozs7OEJBR04sOERBQUNYLHdEQUFlQTtvQkFBQ0ksZ0JBQWdCQTs7Ozs7OzhCQUNqQyw4REFBQ2U7b0JBQUlOLFdBQVdaLHNFQUFXOzhCQUN6Qiw0RUFBQ2tCO3dCQUFJTixXQUFXWix3RUFBYTs7MENBQzNCLDhEQUFDaUM7MENBQUs7Ozs7OzswQ0FDTiw4REFBQ0M7Z0NBQ0NDLFNBQVE7Z0NBQ1J2QixXQUFXWiw0RUFBaUI7Z0NBQzVCcUMsT0FBTTtnQ0FDTkMsWUFBVztnQ0FDWEMsR0FBRTtnQ0FDRkMsR0FBRTtnQ0FDRkMsU0FBUTtnQ0FDUkMsVUFBUzswQ0FFVCw0RUFBQ0M7b0NBQ0NDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXBCO0tBN0VNM0M7QUErRU4sK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2NyZWVucy9ob21lL291clByb2plY3RzL091ci50c3g/MmU4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdEJsb2NrIGZyb20gXCJAL2NvbXBvbmVudHMvdWkvcHJvamVjdEJsb2NrL1Byb2plY3RCbG9ja1wiO1xuaW1wb3J0IFNlcnZpY2VzQmxvY2sgZnJvbSBcIkAvY29tcG9uZW50cy91aS9zZXJ2aWNlc0Jsb2NrL1NlcnZpY2VzQmxvY2tcIjtcbmltcG9ydCB7IEZDLCBLZXksIFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2xpZGVyQ29tcG9uZW50IGZyb20gXCIuL1NsaWRlckNvbXBvbmVudFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL291clByb2plY3RzLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBQcm9qZWN0RGF0YSB9IGZyb20gXCJAL2ludGVyZmFjZXMvcHJvamVjdC5pbnRlcmZhY2VcIjtcblxuY29uc3QgT3VyOiBGQzxQcm9wc1dpdGhDaGlsZHJlbjxhbnk+PiA9ICh7IHByb2plY3RzIH0pID0+IHtcblxuXG4gIGNvbnN0IHNob3dlZFByb2plY3RzID1cbiAgICBwcm9qZWN0cy5wcm9qZWN0c1Nob3dlZCAmJlxuICAgIHByb2plY3RzLnByb2plY3RzU2hvd2VkLm1hcCgocHJvaklkOiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHNob3dlZCA9IHByb2plY3RzLmZpbmQoKGl0ZW06IFByb2plY3REYXRhKSA9PiBpdGVtLmlkID09PSBwcm9qSWQpO1xuICAgICAgcmV0dXJuIHNob3dlZDtcbiAgICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cHJvamVjdHMgJiYgKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9qZWN0c30+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57cHJvamVjdHMudGl0bGV9PC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcn0+e3Byb2plY3RzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgICAge3Byb2plY3RzLnNlcnZpY2VzICYmXG4gICAgICAgICAgICAgIHByb2plY3RzLnNlcnZpY2VzLm1hcChcbiAgICAgICAgICAgICAgICAoaXRlbTogeyB0aXRsZTogc3RyaW5nOyBpbWc6IHN0cmluZyB9LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8U2VydmljZXNCbG9ja1xuICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgaW1nPXtpdGVtLmltZ31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlclByb2plY3RzfT5cbiAgICAgICAgICAgIHtzaG93ZWRQcm9qZWN0cyAmJlxuICAgICAgICAgICAgICBzaG93ZWRQcm9qZWN0cy5tYXAoXG4gICAgICAgICAgICAgICAgKGl0ZW06IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICBhY2Y6IHsgaW1hZ2VfdHM6IHN0cmluZzsgd2Vic2l0ZTogc3RyaW5nIH07XG4gICAgICAgICAgICAgICAgICB0aXRsZTogeyByZW5kZXJlZDogc3RyaW5nIH07XG4gICAgICAgICAgICAgICAgICBleGNlcnB0OiB7IHJlbmRlcmVkOiBzdHJpbmcgfTtcbiAgICAgICAgICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdEJsb2NrXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtpdGVtLmFjZi5pbWFnZV90c31cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZS5yZW5kZXJlZH1cbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5leGNlcnB0LnJlbmRlcmVkfVxuICAgICAgICAgICAgICAgICAgICAgIHdlYj17aXRlbS5hY2Yud2Vic2l0ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTbGlkZXJDb21wb25lbnQgc2hvd2VkUHJvamVjdHM9e3Nob3dlZFByb2plY3RzfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnRuc30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XG4gICAgICAgICAgICAgIDxzcGFuPlNlZSBBbGwgUHJvamVjdHM8L3NwYW4+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jaXJjbGVTdmcxfVxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgICAgICAgICAgICB4PVwiMHB4XCJcbiAgICAgICAgICAgICAgICB5PVwiMHB4XCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE0OS45NTUgMTQ5Ljk1NVwiXG4gICAgICAgICAgICAgICAgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgZD1cIk0xNDkuOTQ1LDk4LjMxOGwtMC45MDYtOTMuODAzYy0wLjAyMi0yLjA3Mi0xLjctMy43NS0zLjc3Mi0zLjc2NUw1MS42MzQsMGwtMC4wNiw3LjYwM2w4NC43MzUsMC42NzlcbiAgICAgICAgTDAuMDExLDE0NC41NzlsNS4zNzYsNS4zNzZMMTQxLjUyNSwxMy44MTdsMC44MTYsODQuNTc1TDE0OS45NDUsOTguMzE4elwiXG4gICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE91cjtcbiJdLCJuYW1lcyI6WyJQcm9qZWN0QmxvY2siLCJTZXJ2aWNlc0Jsb2NrIiwiU2xpZGVyQ29tcG9uZW50Iiwic3R5bGVzIiwiT3VyIiwicHJvamVjdHMiLCJzaG93ZWRQcm9qZWN0cyIsInByb2plY3RzU2hvd2VkIiwibWFwIiwicHJvaklkIiwic2hvd2VkIiwiZmluZCIsIml0ZW0iLCJpZCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMiIsInRpdGxlIiwicCIsImRlc2NyIiwiZGVzY3JpcHRpb24iLCJkaXYiLCJ3cmFwcGVyIiwic2VydmljZXMiLCJpbmRleCIsImltZyIsIndyYXBwZXJQcm9qZWN0cyIsImltYWdlIiwiYWNmIiwiaW1hZ2VfdHMiLCJyZW5kZXJlZCIsImV4Y2VycHQiLCJ3ZWIiLCJ3ZWJzaXRlIiwiYnRucyIsImJ1dHRvbiIsInNwYW4iLCJzdmciLCJ2ZXJzaW9uIiwiY2lyY2xlU3ZnMSIsInhtbG5zIiwieG1sbnNYbGluayIsIngiLCJ5Iiwidmlld0JveCIsInhtbFNwYWNlIiwicGF0aCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/screens/home/ourProjects/Our.tsx\n"));

/***/ })

});