/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHome */ \"./src/loadHome.js\");\n/* harmony import */ var _loadMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadMenu */ \"./src/loadMenu.js\");\n/* harmony import */ var _loadContact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadContact */ \"./src/loadContact.js\");\n\n\n\n\nfunction setupTabs() {\n  document.getElementById('homeBtn').addEventListener('click', _loadHome__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  document.getElementById('menuBtn').addEventListener('click', _loadMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  document.getElementById('contactBtn').addEventListener('click', _loadContact__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_loadHome__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();      // Load default tab\n  setupTabs();     // Set up tab navigation\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ }),

/***/ "./src/loadContact.js":
/*!****************************!*\
  !*** ./src/loadContact.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\n  const content = document.getElementById('content');\n  content.textContent = '';\n\n  const heading = document.createElement('h1');\n  heading.textContent = 'Contact Us';\n\n  const email = document.createElement('p');\n  email.textContent = 'Email: contact@example.com';\n\n  content.appendChild(heading);\n  content.appendChild(email);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/loadContact.js?\n}");

/***/ }),

/***/ "./src/loadHome.js":
/*!*************************!*\
  !*** ./src/loadHome.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\n  const content = document.getElementById('content');\n  content.textContent = '';\n\n  const homeDiv = document.createElement('div');\n  homeDiv.classList.add('tab-content');\n\n  const heading = document.createElement('h1');\n  heading.textContent = 'Welcome to Our Restaurant';\n\n  const para = document.createElement('p');\n  para.textContent = 'We serve the best food in town.';\n\n  homeDiv.appendChild(heading);\n  homeDiv.appendChild(para);\n  content.appendChild(homeDiv);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/loadHome.js?\n}");

/***/ }),

/***/ "./src/loadMenu.js":
/*!*************************!*\
  !*** ./src/loadMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\n  const content = document.getElementById('content');\n  content.textContent = '';\n\n  const menuDiv = document.createElement('div');\n  menuDiv.classList.add('tab-content');\n\n  const heading = document.createElement('h1');\n  heading.textContent = 'Our Menu';\n\n  const list = document.createElement('ul');\n  ['Pizza', 'Pasta', 'Salad'].forEach(item => {\n    const li = document.createElement('li');\n    li.textContent = item;\n    list.appendChild(li);\n  });\n\n  menuDiv.appendChild(heading);\n  menuDiv.appendChild(list);\n  content.appendChild(menuDiv);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/loadMenu.js?\n}");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;