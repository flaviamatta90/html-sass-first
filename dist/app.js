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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\src\\app.js: Unexpected digit after hash token (1:16)\n\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 1 | \u001b[39m$brand_primary\u001b[33m:\u001b[39m \u001b[33m#\u001b[39m\u001b[35m465775\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 2 | \u001b[39m\u001b[0m\n    at Parser._raise (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\@babel\\parser\\lib\\index.js:766:17)\n    at Parser.raiseWithData (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\@babel\\parser\\lib\\index.js:759:17)\n    at Parser.raise (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\@babel\\parser\\lib\\index.js:753:17)\n    at Parser.readToken_numberSign (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\@babel\\parser\\lib\\index.js:7881:18)\n    at Parser.getTokenFromCode (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\@babel\\parser\\lib\\index.js:8281:14)\n    at Parser.nextToken (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\@babel\\parser\\lib\\index.js:7762:12)\n    at Parser.next (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\@babel\\parser\\lib\\index.js:7687:10)\n    at Parser.eat (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\@babel\\parser\\lib\\index.js:7692:12)\n    at Parser.parseStatementContent (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\@babel\\parser\\lib\\index.js:11564:72)\n    at Parser.parseStatement (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\@babel\\parser\\lib\\index.js:11431:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\@babel\\parser\\lib\\index.js:12013:25)\n    at Parser.parseBlockBody (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\@babel\\parser\\lib\\index.js:11999:10)\n    at Parser.parseTopLevel (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\@babel\\parser\\lib\\index.js:11362:10)\n    at Parser.parse (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\@babel\\parser\\lib\\index.js:13045:10)\n    at parse (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\@babel\\parser\\lib\\index.js:13098:38)\n    at parser (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\@babel\\core\\lib\\transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\gensync\\index.js:254:32)\n    at C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\gensync\\index.js:266:13\n    at async.call.result.err.err (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\gensync\\index.js:216:11)");

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Undefined variable.\n  ╷\n3 │   color: $brand_primary;\r\n  │          ^^^^^^^^^^^^^^\n  ╵\n  C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\src\\app.scss 3:10  root stylesheet\n    at C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass-loader\\dist\\index.js:73:7\n    at Function.call$2 (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:88844:16)\n    at _render_closure1.call$2 (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:78084:12)\n    at _RootZone.runBinary$3$3 (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:26377:18)\n    at _RootZone.runBinary$3 (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:26381:19)\n    at _FutureListener.handleError$1 (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:24870:19)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:25162:49)\n    at Object._Future__propagateToListeners (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:4489:77)\n    at _Future._completeError$2 (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:24996:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:24358:12)\n    at Object._asyncRethrow (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:4238:17)\n    at C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:14330:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:4263:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:24379:12)\n    at _awaitOnObject_closure0.call$2 (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:24371:25)\n    at _RootZone.runBinary$3$3 (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:26377:18)\n    at _RootZone.runBinary$3 (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:26381:19)\n    at _FutureListener.handleError$1 (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:24870:19)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:25162:49)\n    at Object._Future__propagateToListeners (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:4489:77)\n    at _Future._completeError$2 (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:24996:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:24358:12)\n    at Object._asyncRethrow (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:4238:17)\n    at C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:16928:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:4263:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:24379:12)\n    at _awaitOnObject_closure0.call$2 (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:24371:25)\n    at _RootZone.runBinary$3$3 (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:26377:18)\n    at _RootZone.runBinary$3 (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:26381:19)\n    at _FutureListener.handleError$1 (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:24870:19)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:25162:49)\n    at Object._Future__propagateToListeners (C:\\Users\\Luca\\Desktop\\Classe17\\html-sass-first\\node_modules\\sass\\sass.dart.js:4489:77)");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/app.js ./src/app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Luca\Desktop\Classe17\html-sass-first\src\app.js */"./src/app.js");
module.exports = __webpack_require__(/*! C:\Users\Luca\Desktop\Classe17\html-sass-first\src\app.scss */"./src/app.scss");


/***/ })

/******/ });