/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/calculator.js":
/*!***************************!*\
  !*** ./src/calculator.js ***!
  \***************************/
/*! exports provided: inputData, tryAgain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputData\", function() { return inputData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tryAgain\", function() { return tryAgain; });\n\nfunction getData(name1, name2) {\n  fetch(\n    `https://love-calculator.p.rapidapi.com/getPercentage?fname=${name1}&sname=${name2}`,\n    {\n      method: \"GET\",\n      headers: {\n        \"x-rapidapi-host\": \"love-calculator.p.rapidapi.com\",\n        \"x-rapidapi-key\": \"c38e9d2aa8msh02613669b7e4ad6p1100d6jsn1dad9fcb46e4\"\n      }\n    }\n  )\n    .then(response => {\n      response.json()\n          .then(res => displayData(res));\n    })\n    .catch(err => {\n      // console.log(err);\n    });\n\n}\n\nfunction displayData(obj) {\n  const results = document.querySelector(\"#results\");\n  const percentage = obj.percentage;\n  results.innerHTML = `\n    <div>\n      <h1>\n        You two are ${percentage}% compatible!\n      </h1>\n      <div>\n        <div>\n          You: ${obj.fname}\n        </div>\n        <div>\n          Your Partner: ${obj.sname}\n        </div>\n        <div>\n          Result: ${obj.result}\n        </div>\n      </div>\n    </div>\n  `;\n\n  return results;\n}\n\nconst inputData = function() {\n  const results = document.querySelector(\"#results\");\n  let form = document.querySelector(\".form\");\n\n  form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    let n1 = e.target.children.name1.value;\n    let n2 = e.target.children.name2.value;\n    results.innerHTML = \"Calculating...\";\n    \n    if (n1.length===0 || n2.length === 0) {\n      results.innerHTML = \"Please enter both names to continue\";\n    }\n    let inputs = document.querySelectorAll(\"#name\");\n\n    inputs.forEach( input => {\n      input.disabled = true;\n    });\n    \n    getData(n1, n2);\n  });\n};\n\nconst tryAgain = function() {\n  let btn = document.querySelector(\".try-again\");\n  const results = document.querySelector(\"#results\");\n\n  btn.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n\n      let inputs = document.querySelectorAll(\"#name\");\n      results.innerHTML = \"\";\n\n      inputs.forEach(input => {\n        input.value = '';\n        input.disabled = false;\n      });\n  });\n};\n\n\n\n\n//# sourceURL=webpack:///./src/calculator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator */ \"./src/calculator.js\");\n\n// console.log(\"working\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  Object(_calculator__WEBPACK_IMPORTED_MODULE_0__[\"inputData\"])();\n  Object(_calculator__WEBPACK_IMPORTED_MODULE_0__[\"tryAgain\"])();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });