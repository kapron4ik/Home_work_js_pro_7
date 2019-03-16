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
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classworks_mediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classworks/mediator */ \"./classworks/mediator.js\");\n// import Mediator from './mediator';\r\n\r\n\r\n// Mediator();\r\nObject(_classworks_mediator__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) ();\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ }),

/***/ "./classworks/mediator.js":
/*!********************************!*\
  !*** ./classworks/mediator.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\r\n  Написать медиатор для группы студентов.\r\n\r\n  Профессор отвечает только на вопросы старосты.\r\n\r\n  У Студента есть имя и группа которой он пренадлежит.\r\n  Он может запросить старосту задать вопрос или получить ответ.\r\n\r\n  Староста может добавлять студентов в группу и передавать вопрос профессору.\r\n*/\r\n\r\nconst Mediator = () => {\r\n\r\n  // console.log( 'your code ');\r\n\r\n  class Professor {\r\n    answerTheQuestion( student, question ){\r\n      if( student.type !== 'monitor'){\r\n        console.error('It\\' not your bussines');\r\n      } else {\r\n        console.log('Yes, my dear?!');\r\n      }\r\n    }\r\n  }\r\n\r\n  class Student {\r\n    constructor(name){\r\n      this.name = name;\r\n      this.type = 'nerd';\r\n      this.monitor = null;\r\n      this.professor = null;\r\n\r\n      console.log(`New student ${this.name} enrolled`);\r\n    }\r\n    //получить ответ\r\n    getAnswer(answer, from){\r\n      console.log(`${from.name} to ${this.name}: ${answer}`)\r\n    }\r\n    //задать вопрос\r\n    tipTheMonitor(question){\r\n      console.log(`${this.name} asks: ${question} `);\r\n      this.monitor.askProfessor(question, this)\r\n    }\r\n  }\r\n\r\n  // Monitor == Староста\r\n  class Monitor extends Student{\r\n    constructor(name){\r\n      super(name);\r\n      this.type = 'monitor';\r\n      this.group = {};\r\n\r\n    }\r\n    //добавить в группу\r\n    addToGroup(student){\r\n      this.group[student.name] = student;\r\n      student.monitor = this;\r\n      student.professor = new Professor;\r\n\r\n    }\r\n    //спросить проффесора\r\n    askProfessor(question, student){\r\n      this.professor.answerTheQuestion( this, question );\r\n      student.getAnswer('Proffesor ready to answer any question', this)\r\n    }\r\n  }\r\n\r\n  let Pavel = new Student ('Pavel');\r\n  let Viktor = new Monitor ('Viktor');\r\n  Viktor.addToGroup(Viktor);\r\n  Viktor.addToGroup(Pavel);\r\n\r\n  console.log ('Pavel',Pavel)\r\n  // console.log ('Viktor',Viktor)\r\n\r\n  // Pavel.professor.answerTheQuestion( Viktor, 'How are you?' );\r\n  Pavel.tipTheMonitor('How are you?');\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mediator);\r\n\n\n//# sourceURL=webpack:///./classworks/mediator.js?");

/***/ })

/******/ });