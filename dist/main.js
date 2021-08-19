/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/javascript/any.js":
/*!*******************************!*\
  !*** ./app/javascript/any.js ***!
  \*******************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://my-webpack-project/./app/javascript/any.js?");

/***/ }),

/***/ "./app/javascript/fade_in.js":
/*!***********************************!*\
  !*** ./app/javascript/fade_in.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar aboutTitle = document.getElementsByClassName(\"about__header\")[0];\nvar aboutSectionText = document.getElementsByClassName(\"about\")[0];\nvar technologyTitle = document.getElementsByClassName(\"about__section__skills__title\")[0];\nvar technologySectionText = document.getElementsByClassName(\"about__section skills\")[0];\n\nvar framework = function framework(title, section) {\n  var documentHeight = window.innerHeight;\n  console.log(title);\n  var sectionTop = title.getBoundingClientRect().top;\n\n  if (documentHeight > sectionTop) {\n    title.style.opacity = \"1\";\n    section.style.opacity = \"1\";\n  } else {\n    title.style.opacity = \"0\";\n    section.style.opacity = \"0\";\n  }\n};\n\nvar init = function init() {\n  document.addEventListener(\"scroll\", function (e) {\n    framework(aboutTitle, aboutSectionText);\n    framework(technologyTitle, technologySectionText);\n    /*\n    var windowHeight = window.innerHeight;\n    var top = aboutTitle.getBoundingClientRect().top;\n    if (top < windowHeight) {\n      aboutSectionText.style.opacity = \"1\";\n    } else {\n      aboutSectionText.style.opacity = \"0\";\n    }\n    */\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n//# sourceURL=webpack://my-webpack-project/./app/javascript/fade_in.js?");

/***/ }),

/***/ "./app/javascript/navbar.js":
/*!**********************************!*\
  !*** ./app/javascript/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar navbar = document.getElementById(\"mynavbar\");\nvar navAnchorTag = document.getElementsByClassName(\"navbar__anchortag\");\nvar initScroll = 0;\nvar projectNames = [\"home\", \"about\", \"all__projects\", \"form\"];\nvar projectSections = [];\n\nfor (var i = 0; i <= 3; i++) {\n  projectSections.push(document.getElementsByClassName(projectNames[i])[0]);\n}\n\nvar initNavbar = function initNavbar() {\n  navAnchorTag = _toConsumableArray(navAnchorTag);\n  navAnchorTag.map(function (el, index) {\n    console.log(projectSections);\n    console.log(index + \"is index\");\n\n    el.onclick = function () {\n      projectSections[index].scrollIntoView({\n        behavior: \"smooth\",\n        block: \"end\",\n        inline: \"nearest\"\n      });\n    };\n  });\n  /*\n    [...navAnchorTag].map((el, index) => {\n        return el.onclick = () => {\n            about.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});\n        }\n     });\n  */\n\n  window.addEventListener(\"scroll\", function (e) {\n    var formerVal = window.scrollY;\n    var presentVal = window.scrollY;\n    var scrollTop = window.scrollY; // assign value to init scroll\n\n    if (initScroll === 0) {\n      navbar.classList.add(\"toggle2\");\n    } else {\n      navbar.classList.remove(\"toggle2\");\n    }\n\n    if (initScroll <= formerVal) {\n      initScroll = formerVal;\n      navbar.classList.add(\"toggled\");\n      console.log(\"down\"); //down\n    } else {\n      initScroll = presentVal; //up\n\n      if (initScroll === 0) {\n        navbar.classList.remove(\"toggled\");\n        navbar.classList.add(\"toggle2\");\n      } else {\n        navbar.classList.remove(\"toggled\");\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initNavbar);\n\n//# sourceURL=webpack://my-webpack-project/./app/javascript/navbar.js?");

/***/ }),

/***/ "./app/src/index.js":
/*!**************************!*\
  !*** ./app/src/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _javascript_any__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../javascript/any */ \"./app/javascript/any.js\");\n/* harmony import */ var _javascript_any__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_javascript_any__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _javascript_fade_in__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../javascript/fade_in */ \"./app/javascript/fade_in.js\");\n/* harmony import */ var _javascript_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../javascript/navbar */ \"./app/javascript/navbar.js\");\n\n\n\n(0,_javascript_fade_in__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_javascript_navbar__WEBPACK_IMPORTED_MODULE_2__.default)();\n\n//# sourceURL=webpack://my-webpack-project/./app/src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/src/index.js");
/******/ 	
/******/ })()
;