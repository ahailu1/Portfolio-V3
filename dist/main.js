/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./app/javascript/any.js":
      /*!*******************************!*\
  !*** ./app/javascript/any.js ***!
  \*******************************/
      /***/ () => {
        eval(
          "\n\n//# sourceURL=webpack://my-webpack-project/./app/javascript/any.js?"
        );

        /***/
      },

    /***/ "./app/javascript/fade_in.js":
      /*!***********************************!*\
  !*** ./app/javascript/fade_in.js ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar aboutTitle = document.getElementsByClassName("about__header")[0];\nvar aboutSectionText = document.getElementsByClassName("about")[0];\nvar windowHeight = window.innerHeight;\n\nvar init = function init() {\n  document.addEventListener("scroll", function (e) {\n    var top = aboutTitle.getBoundingClientRect().top;\n    console.log(aboutTitle);\n    console.log(aboutSectionText);\n\n    if (top < windowHeight) {\n      aboutSectionText.style.opacity = "1"; //if the section\'s top is less than the window height, it means that it is\n      //within the documents viewport\n    } else {\n      aboutSectionText.style.opacity = "0";\n    }\n\n    console.log("hello");\n    console.log(windowHeight);\n    console.log(top);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n//# sourceURL=webpack://my-webpack-project/./app/javascript/fade_in.js?'
        );

        /***/
      },

    /***/ "./app/src/index.js":
      /*!**************************!*\
  !*** ./app/src/index.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _javascript_any__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../javascript/any */ "./app/javascript/any.js");\n/* harmony import */ var _javascript_any__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_javascript_any__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _javascript_fade_in__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../javascript/fade_in */ "./app/javascript/fade_in.js");\n\n\n(0,_javascript_fade_in__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n//# sourceURL=webpack://my-webpack-project/./app/src/index.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./app/src/index.js");
  /******/
  /******/
})();
