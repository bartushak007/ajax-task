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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ancestry = new XMLHttpRequest();\nancestry.open('GET', 'https://www.facebook.com/ajax/bz', true);\nancestry.send();\nancestry.addEventListener('load', function () {\n  if (ancestry.status === 200) {\n    createCardList(JSON.parse(ancestry.responseText));\n  }\n});\n\nfunction createCardList(arr) {\n  var array = [],\n      averageFemaleLife = 0,\n      femaleCount = 0,\n      averageMaleLife = 0,\n      maleCount = 0,\n      average = 0,\n      averageCount = 0,\n      current,\n      div,\n      name,\n      sex,\n      born,\n      father,\n      mother,\n      bornAverage,\n      maleLife,\n      femaleLife;\n\n  for (var i = 0; i < arr.length; i++) {\n    if (arr[i]['sex'] === 'f') {\n      averageFemaleLife += arr[i]['died'] - arr[i]['born'];\n      femaleCount++;\n\n      for (var j = 0; j < arr.length; j++) {\n        if (arr[i]['name'] === arr[j]['mother']) {\n          current = +arr[j]['born'] - +arr[i]['born'];\n\n          if (current > 0) {\n            average += current;\n            averageCount++;\n          }\n        }\n      }\n    } else {\n      averageMaleLife += arr[i]['died'] - arr[i]['born'];\n      maleCount++;\n    }\n\n    div = document.createElement('div');\n    div.style.width = '180px';\n    div.style.height = '250px';\n    div.style.display = 'inline-block';\n    div.style.verticalAlign = 'top';\n    div.style.textAlign = 'center';\n    div.style.margin = '18px';\n    div.style.padding = '15px';\n    div.style.backgroundColor = '#f2f2f2';\n    div.style.color = '#996600';\n    div.style.fontFamily = '\"Averia Libre\", cursive';\n    div.style.border = 'solid 2px #996600';\n    div.style.borderRadius = '8px';\n    div.style.boxShadow = '11px 11px 11px 0.6px rgba(0,0,0,0.75)';\n    name = div.appendChild(document.createElement('h3'));\n    name.innerHTML = arr[i]['name'];\n    sex = div.appendChild(document.createElement('h4'));\n\n    if (arr[i]['sex'] === 'f') {\n      sex.innerHTML = 'Female';\n    } else if (arr[i]['sex'] === 'm') {\n      sex.innerHTML = 'Male';\n    }\n\n    born = div.appendChild(document.createElement('p'));\n    born.innerHTML = '( ' + arr[i]['born'] + ' - ' + arr[i]['died'] + ' )';\n\n    if (arr[i]['father']) {\n      father = div.appendChild(document.createElement('h5'));\n      father.innerHTML = 'Father: ' + arr[i]['father'];\n    }\n\n    if (arr[i]['mother']) {\n      mother = div.appendChild(document.createElement('h5'));\n      mother.innerHTML = 'Mother: ' + arr[i]['mother'];\n    }\n\n    document.body.appendChild(div);\n  }\n\n  div = document.createElement('div');\n  div.style.width = '450px';\n  div.style.display = 'block';\n  div.style.verticalAlign = 'top';\n  div.style.textAlign = 'center';\n  div.style.margin = '45px auto';\n  div.style.padding = '15px';\n  div.style.backgroundColor = '#f2f2f2';\n  div.style.color = '#996600';\n  div.style.fontFamily = '\"Averia Libre\", cursive';\n  div.style.border = 'solid 2px #996600';\n  div.style.boxShadow = '0px 0px 26px 6px rgba(0,0,0,0.50)';\n  name = div.appendChild(document.createElement('h2'));\n  name.innerHTML = 'Statistical analysis';\n  bornAverage = div.appendChild(document.createElement('h5'));\n\n  if (averageCount < 1) {\n    bornAverage.innerHTML = 'Not specified';\n  } else {\n    bornAverage.innerHTML = 'Difference in age: ' + Math.floor(average / averageCount);\n  }\n\n  maleLife = div.appendChild(document.createElement('h5'));\n  maleLife.innerHTML = 'Average male life: ' + Math.floor(averageMaleLife / maleCount);\n  femaleLife = div.appendChild(document.createElement('h5'));\n  femaleLife.innerHTML = 'Average female life: ' + Math.floor(averageFemaleLife / femaleCount);\n  document.body.appendChild(div);\n}\n\n//# sourceURL=webpack:///./src/cards.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var phones = new XMLHttpRequest();\nphones.open('GET', 'https://mate-academy.github.io/phone-catalogue-static/phones/phones.json', true);\nphones.send();\nphones.addEventListener('load', function () {\n  console.log(phones.responseText);\n});\nvar newTableContent = new XMLHttpRequest();\nnewTableContent.open('GET', 'https://tanuhaua.github.io/datas-file-json/visitors.json', true);\nnewTableContent.send();\nnewTableContent.addEventListener('load', function () {\n  console.log(newTableContent.responseText);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/loadMorePages.js":
/*!******************************!*\
  !*** ./src/loadMorePages.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table */ \"./src/table.js\");\n\nvar count = 1;\nvar secondTable = document.createElement('table');\nsecondTable.classList.add('table');\nsecondTable.classList.add('table--second');\ndocument.body.appendChild(secondTable);\nvar button = document.createElement('button');\nbutton.classList.add('button');\nbutton.innerText = 'Load more values';\ndocument.body.appendChild(button);\nvar jasonObj = {};\nvar jasonArray = [];\nloadJason();\nbutton.addEventListener('click', function (event) {\n  if (jasonObj.loadMore) {\n    loadJason();\n  }\n});\n\nfunction loadJason() {\n  var load = new XMLHttpRequest();\n  load.open('get', \"https://tanuhaua.github.io/datas-file-json/dynamic-loading/\".concat(count, \"/users.json\"));\n  count++;\n  load.send();\n  load.addEventListener('load', function () {\n    if (load.status === 200) {\n      jasonObj = JSON.parse(load.responseText);\n      jasonArray.push(jasonObj.data);\n      Object(_table__WEBPACK_IMPORTED_MODULE_0__[\"createTable\"])(jasonArray[jasonArray.length - 1], document.querySelector('.table--second'));\n\n      if (!jasonObj.loadMore) {\n        button.style.display = 'none';\n      }\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/loadMorePages.js?");

/***/ }),

/***/ "./src/table.js":
/*!**********************!*\
  !*** ./src/table.js ***!
  \**********************/
/*! exports provided: createTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTable\", function() { return createTable; });\nvar newTable = document.createElement('table');\nnewTable.classList.add('table');\nnewTable.classList.add('table--one');\ndocument.body.appendChild(newTable);\nvar tableAjax = new XMLHttpRequest();\ntableAjax.open('GET', 'https://tanuhaua.github.io/datas-file-json/visitors.json', true);\ntableAjax.send();\nvar tableParse = [];\nvar mark = '';\ntableAjax.addEventListener('load', function () {\n  if (tableAjax.status === 200) {\n    tableParse = JSON.parse(tableAjax.responseText).sort(function (a, b) {\n      return a.id - b.id;\n    });\n    createTable(tableParse, document.querySelector('.table--one'));\n    mark = 'ID';\n  }\n});\nnewTable.addEventListener('click', function (event) {\n  if (newTable.children.length > 0) {\n    for (var i = newTable.children.length - 1; i >= 0; i--) {\n      newTable.children[i].remove();\n    }\n  }\n\n  function sortTable(func) {\n    if (mark === event.target.innerText) {\n      mark = '';\n      tableParse.reverse();\n      createTable(tableParse, document.querySelector('.table--one'));\n    } else {\n      mark = event.target.innerText;\n      tableParse.sort(func);\n      createTable(tableParse, document.querySelector('.table--one'));\n    }\n  }\n\n  if (event.target.tagName === 'TH') {\n    if (event.target.innerText === 'CREATEDAT') {\n      sortTable(function (a, b) {\n        return new Date(a.createdAt) - new Date(b.createdAt);\n      });\n    } else if (event.target.innerText === 'ID') {\n      sortTable(function (a, b) {\n        return a.id - b.id;\n      });\n    } else {\n      var sortedTable = function sortedTable(a, b) {\n        var x = event.target.innerText.toLowerCase();\n        return a[x].toLowerCase().localeCompare(b[x].toLowerCase());\n      };\n\n      sortTable(sortedTable);\n    }\n  }\n});\n\nfunction createTable(tableParse, newTable) {\n  var tableTrForTd = document.createElement('tr');\n  newTable.appendChild(tableTrForTd);\n  tableParse.forEach(function (elem, i) {\n    var id = elem.id,\n        createdAt = elem.createdAt,\n        name = elem.name,\n        email = elem.email,\n        description = elem.description;\n\n    if (newTable.querySelectorAll('TR').length === 1) {\n      var _arr = Object.keys(elem);\n\n      for (var _i = 0; _i < _arr.length; _i++) {\n        var key = _arr[_i];\n        var tableTd = document.createElement('th');\n        tableTd.innerText = key.toUpperCase();\n        tableTd.classList.add('table__td--bold');\n\n        if (newTable.classList.contains('table--one')) {\n          tableTd.title = 'click to sort or invert';\n          tableTd.style.cursor = 'pointer';\n        }\n\n        tableTrForTd.appendChild(tableTd);\n      }\n    }\n\n    var tableTr = document.createElement('tr');\n    newTable.appendChild(tableTr);\n    var tableThId = document.createElement('td');\n    tableThId.innerText = id;\n    tableThId.classList.add('table__td');\n    tableTr.appendChild(tableThId);\n    var tableThCreatedAt = document.createElement('td');\n    var date = new Date(createdAt);\n    tableThCreatedAt.innerText = \"\".concat(date.getFullYear(), \".\").concat(date.getMonth(), \".\").concat(date.getDate());\n    tableThCreatedAt.classList.add('table__td');\n    tableTr.appendChild(tableThCreatedAt);\n    var tableThName = document.createElement('td');\n    tableThName.innerText = name;\n    tableThName.classList.add('table__td');\n    tableTr.appendChild(tableThName);\n    var tableThEmail = document.createElement('td');\n    tableThEmail.innerText = email;\n    tableThEmail.classList.add('table__td');\n    tableTr.appendChild(tableThEmail);\n    var tableThDescription = document.createElement('td');\n    tableThDescription.innerText = description;\n    tableThDescription.classList.add('table__td');\n    tableTr.appendChild(tableThDescription);\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/table.js?");

/***/ }),

/***/ 0:
/*!*********************************************************************************!*\
  !*** multi ./src/index.js ./src/cards.js ./src/table.js ./src/loadMorePages.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n__webpack_require__(/*! ./src/cards.js */\"./src/cards.js\");\n__webpack_require__(/*! ./src/table.js */\"./src/table.js\");\nmodule.exports = __webpack_require__(/*! ./src/loadMorePages.js */\"./src/loadMorePages.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js_./src/cards.js_./src/table.js_./src/loadMorePages.js?");

/***/ })

/******/ });