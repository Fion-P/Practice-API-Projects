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
/*! exports provided: inputData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputData\", function() { return inputData; });\n\nfunction getData(name1, name2) {\n  fetch(\n    `https://love-calculator.p.rapidapi.com/getPercentage?fname=${name1}&sname=${name2}`,\n    {\n      method: \"GET\",\n      // mode: 'no-cors',\n      headers: {\n        \"x-rapidapi-host\": \"love-calculator.p.rapidapi.com\",\n        \"x-rapidapi-key\": \"c38e9d2aa8msh02613669b7e4ad6p1100d6jsn1dad9fcb46e4\"\n      }\n    }\n  )\n    .then(response => {\n      // console.log(response);\n      response.json()\n          .then(res => displayData(res));\n    })\n    .catch(err => {\n      handleError();\n    });\n\n}\n\nfunction handleError() {\n  const container = document.querySelector(\".container\");\n  container.innerHTML = `\n    <div class=\"err-message\"> Something went wrong, click button to try again </div>\n    <button class=\"try-again\" onClick=\"window.location.reload();\"> Try Again </button>\n  `;\n}\n\nfunction displayData(obj) {\n  const container = document.querySelector(\".container\");\n  let percentage = obj.percentage;\n  let res = obj.result;\n\n  if (\n    (obj.fname.toLowerCase() === \"julia\" &&\n      obj.sname.toLowerCase() === \"carlos\") ||\n    (obj.fname.toLowerCase() === \"carlos\" &&\n      obj.sname.toLowerCase() === \"julia\")\n  ) {\n    percentage = 100;\n    res = \"Perfect Match\";\n  }\n\n  container.innerHTML = `\n    <div class=\"results\">\n      <h1 class=\"res-header\"> \n        ${res}\n      </h1>\n      <div class=\"res-content\">\n        <div class=\"res-names\">\n          <p style=\"font-weight: bold; padding: 0\">You:</p> ${obj.fname}\n        </div>\n        <div class=\"res-names\">\n          <p style=\"font-weight: bold\">Your Partner:</p> ${obj.sname}\n        </div>\n        <div class=\"res-results\">\n          <p style=\"font-weight: bold\">Compatability:</p> ${percentage}%\n        </div>\n      </div>\n    </div>\n    <button class=\"try-again\" onClick=\"window.location.reload();\"> Reset </button>\n  `;\n\n  return container;\n}\n\nconst inputData = function() {\n  // const results = document.querySelector(\"#results\");\n  const container = document.querySelector(\".container\");\n  let form = document.querySelector(\".form\");\n\n  if (form) {\n    form.addEventListener(\"submit\", (e) => {\n      e.preventDefault();\n  \n      let n1 = document.querySelector('input[name=\"name1\"]').value;\n      let n2 = document.querySelector('input[name=\"name2\"]').value;\n  \n      container.innerHTML = '<div class=\"calculating\"> Calculating... </div>';\n      \n      if (n1.length===0 || n2.length === 0) {\n        results.innerHTML = \"Please enter both names to continue\";\n        return;\n      }\n      \n      getData(n1, n2);\n    });\n  }\n};\n\n\n\n\n\n//# sourceURL=webpack:///./src/calculator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator */ \"./src/calculator.js\");\n\n// console.log(\"working\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  Object(_calculator__WEBPACK_IMPORTED_MODULE_0__[\"inputData\"])();\n  // tryAgain();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });