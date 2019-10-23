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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/hello_react.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/hello_react.jsx":
/*!**********************************************!*\
  !*** ./app/javascript/packs/hello_react.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/oxana/thereminvox/app/javascript/packs/hello_react.jsx: Identifier 'Hello' has already been declared (10:6)\n\n   8 | import Hello from '../containers/Hello'\n   9 | \n> 10 | const Hello = props => (\n     |       ^\n  11 |   <div>\n  12 |     Hello {props.name}!\n  13 |     <Menubar name={props.name} handleClick={props.handleClick} />\n    at Object.raise (/Users/oxana/thereminvox/node_modules/@babel/parser/lib/index.js:6387:17)\n    at ScopeHandler.checkRedeclarationInScope (/Users/oxana/thereminvox/node_modules/@babel/parser/lib/index.js:3767:12)\n    at ScopeHandler.declareName (/Users/oxana/thereminvox/node_modules/@babel/parser/lib/index.js:3733:12)\n    at Object.checkLVal (/Users/oxana/thereminvox/node_modules/@babel/parser/lib/index.js:8083:22)\n    at Object.parseVarId (/Users/oxana/thereminvox/node_modules/@babel/parser/lib/index.js:10573:10)\n    at Object.parseVar (/Users/oxana/thereminvox/node_modules/@babel/parser/lib/index.js:10548:12)\n    at Object.parseVarStatement (/Users/oxana/thereminvox/node_modules/@babel/parser/lib/index.js:10370:10)\n    at Object.parseStatementContent (/Users/oxana/thereminvox/node_modules/@babel/parser/lib/index.js:9967:21)\n    at Object.parseStatement (/Users/oxana/thereminvox/node_modules/@babel/parser/lib/index.js:9900:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/oxana/thereminvox/node_modules/@babel/parser/lib/index.js:10476:25)\n    at Object.parseBlockBody (/Users/oxana/thereminvox/node_modules/@babel/parser/lib/index.js:10463:10)\n    at Object.parseTopLevel (/Users/oxana/thereminvox/node_modules/@babel/parser/lib/index.js:9829:10)\n    at Object.parse (/Users/oxana/thereminvox/node_modules/@babel/parser/lib/index.js:11341:17)\n    at parse (/Users/oxana/thereminvox/node_modules/@babel/parser/lib/index.js:11377:38)\n    at parser (/Users/oxana/thereminvox/node_modules/@babel/core/lib/transformation/normalize-file.js:166:34)\n    at normalizeFile (/Users/oxana/thereminvox/node_modules/@babel/core/lib/transformation/normalize-file.js:100:11)\n    at runSync (/Users/oxana/thereminvox/node_modules/@babel/core/lib/transformation/index.js:44:43)\n    at runAsync (/Users/oxana/thereminvox/node_modules/@babel/core/lib/transformation/index.js:35:14)\n    at process.nextTick (/Users/oxana/thereminvox/node_modules/@babel/core/lib/transform.js:34:34)\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ })

/******/ });
//# sourceMappingURL=hello_react-1cebc6ff7c1f827d9859.js.map