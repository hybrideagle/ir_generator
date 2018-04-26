/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index_node.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./input_examples/assign_expr.json":
/*!*****************************************!*\
  !*** ./input_examples/assign_expr.json ***!
  \*****************************************/
/*! exports provided: type, operator, left, right, default */
/***/ (function(module) {

eval("module.exports = {\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"Identifier\",\"name\":\"i\"},\"right\":{\"type\":\"Literal\",\"kind\":\"int\",\"value\":\"1\"}};\n\n//# sourceURL=webpack:///./input_examples/assign_expr.json?");

/***/ }),

/***/ "./input_examples/do_while.json":
/*!**************************************!*\
  !*** ./input_examples/do_while.json ***!
  \**************************************/
/*! exports provided: type, body, test, default */
/***/ (function(module) {

eval("module.exports = {\"type\":\"DoWhileStatement\",\"body\":{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"Identifier\",\"name\":\"a\"},\"right\":{\"type\":\"BinaryExpression\",\"left\":{\"type\":\"Identifier\",\"name\":\"a\"},\"right\":{\"type\":\"Identifier\",\"name\":\"x\"},\"operator\":\"+\"}},\"test\":{\"type\":\"BinaryExpression\",\"left\":{\"type\":\"Identifier\",\"name\":\"a\"},\"right\":{\"type\":\"Literal\",\"kind\":\"int\",\"value\":\"10\"},\"operator\":\"<\"}};\n\n//# sourceURL=webpack:///./input_examples/do_while.json?");

/***/ }),

/***/ "./input_examples/expression.json":
/*!****************************************!*\
  !*** ./input_examples/expression.json ***!
  \****************************************/
/*! exports provided: type, expression, default */
/***/ (function(module) {

eval("module.exports = {\"type\":\"Expression\",\"expression\":{\"type\":\"BinaryExpression\",\"left\":{\"type\":\"BinaryExpression\",\"left\":{\"type\":\"BinaryExpression\",\"left\":{\"type\":\"Identifier\",\"name\":\"x2\"},\"operator\":\"+\"},\"operator\":\"+\",\"right\":{\"type\":\"Identifier\",\"name\":\"x3\"}},\"operator\":\"+\",\"right\":{\"type\":\"Identifier\",\"name\":\"x4\"}}};\n\n//# sourceURL=webpack:///./input_examples/expression.json?");

/***/ }),

/***/ "./input_examples/for_loop.json":
/*!**************************************!*\
  !*** ./input_examples/for_loop.json ***!
  \**************************************/
/*! exports provided: type, init, test, update, body, default */
/***/ (function(module) {

eval("module.exports = {\"type\":\"ForStatement\",\"init\":{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"Identifier\",\"name\":\"a\"},\"right\":{\"type\":\"Literal\",\"kind\":\"int\",\"value\":\"10\"}},\"test\":{\"type\":\"BinaryExpression\",\"left\":{\"type\":\"Identifier\",\"name\":\"a\"},\"right\":{\"type\":\"Literal\",\"kind\":\"int\",\"value\":\"10\"},\"operator\":\"<\"},\"update\":{\"type\":\"UnaryExpression\",\"operator\":\"++\",\"argument\":{\"type\":\"Identifier\",\"name\":\"a\"},\"prefix\":\"false\"},\"body\":{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"Identifier\",\"name\":\"a\"},\"right\":{\"type\":\"ExpressionStatement\",\"expression\":{\"type\":\"BinaryExpression\",\"left\":{\"type\":\"Identifier\",\"name\":\"a\"},\"right\":{\"type\":\"Literal\",\"kind\":\"int\",\"value\":\"10\"},\"operator\":\"+\"}}}};\n\n//# sourceURL=webpack:///./input_examples/for_loop.json?");

/***/ }),

/***/ "./input_examples/if_else.json":
/*!*************************************!*\
  !*** ./input_examples/if_else.json ***!
  \*************************************/
/*! exports provided: type, test, consequent, alternative, default */
/***/ (function(module) {

eval("module.exports = {\"type\":\"IfStatement\",\"test\":{\"type\":\"BinaryExpression\",\"left\":{\"type\":\"Identifier\",\"name\":\"a\"},\"right\":{\"type\":\"Literal\",\"kind\":\"int\",\"value\":\"10\"},\"operator\":\"<\"},\"consequent\":{\"type\":\"WhileStatement\",\"test\":{\"type\":\"BinaryExpression\",\"left\":{\"type\":\"Identifier\",\"name\":\"a\"},\"right\":{\"type\":\"Literal\",\"kind\":\"int\",\"value\":\"10\"},\"operator\":\"<\"},\"body\":{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"Identifier\",\"name\":\"a\"},\"right\":{\"type\":\"BinaryExpression\",\"left\":{\"type\":\"Identifier\",\"name\":\"a\"},\"right\":{\"type\":\"Identifier\",\"name\":\"x\"},\"operator\":\"+\"}}},\"alternative\":{\"type\":\"WhileStatement\",\"test\":{\"type\":\"BinaryExpression\",\"left\":{\"type\":\"Identifier\",\"name\":\"a\"},\"right\":{\"type\":\"Literal\",\"kind\":\"int\",\"value\":\"10\"},\"operator\":\">\"},\"body\":{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"Identifier\",\"name\":\"a\"},\"right\":{\"type\":\"BinaryExpression\",\"left\":{\"type\":\"Identifier\",\"name\":\"a\"},\"right\":{\"type\":\"Identifier\",\"name\":\"x\"},\"operator\":\"-\"}}}};\n\n//# sourceURL=webpack:///./input_examples/if_else.json?");

/***/ }),

/***/ "./input_examples/while_loop.json":
/*!****************************************!*\
  !*** ./input_examples/while_loop.json ***!
  \****************************************/
/*! exports provided: type, test, body, default */
/***/ (function(module) {

eval("module.exports = {\"type\":\"WhileStatement\",\"test\":{\"type\":\"BinaryExpression\",\"left\":{\"type\":\"Identifier\",\"name\":\"a\"},\"right\":{\"type\":\"Literal\",\"kind\":\"int\",\"value\":\"10\"},\"operator\":\"<\"},\"body\":{\"type\":\"AssignmentExpression\",\"operator\":\"=\",\"left\":{\"type\":\"Identifier\",\"name\":\"a\"},\"right\":{\"type\":\"BinaryExpression\",\"left\":{\"type\":\"Identifier\",\"name\":\"a\"},\"right\":{\"type\":\"Identifier\",\"name\":\"x\"},\"operator\":\"+\"}}};\n\n//# sourceURL=webpack:///./input_examples/while_loop.json?");

/***/ }),

/***/ "./src/convert.js":
/*!************************!*\
  !*** ./src/convert.js ***!
  \************************/
/*! exports provided: convertForStatement, convertDoWhileStatement, convertAssignExpression, convertWhileStatement, convertAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertForStatement\", function() { return convertForStatement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertDoWhileStatement\", function() { return convertDoWhileStatement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertAssignExpression\", function() { return convertAssignExpression; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertWhileStatement\", function() { return convertWhileStatement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertAll\", function() { return convertAll; });\n/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assert */ \"assert\");\n/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\n\n\n/**\n *  Coverts a node to a simplified series of nodes\n *  @param   node The node to convert(JS object)\n *  @return       An array of nodes repesenting the simplified construct\n */\n\n function convertIfElseStatement(node) {\n    // console.log(\"Hello:\",node.type)\n    assert__WEBPACK_IMPORTED_MODULE_0___default.a.ok(node.type == 'IfStatement', node.type, \"invalid node type(IfStatement) expected\");\n\n     let ifGuard = {\n         type: \"LabeledStatement\",\n         body: {\n             type: \"IfGotoStatement\",\n             test: node.test,\n             label: null\n         },\n         label: Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"GenLabel\"])(),\n         inherited: false\n     };\n     let topGoto = {\n         type: \"GotoStatement\",\n         label: null\n     }\n     let body = {\n         type: \"LabeledStatement\",\n         label: Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"GenLabel\"])(),\n         body: convertAll(node.consequent),\n         inherited: false\n     }\n\n     let elseBody = {\n         type: \"LabeledStatement\",\n         label: Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"GenLabel\"])(),\n         body: convertAll(node.alternative),\n         inherited: false\n     }\n     ifGuard.body.label = body.label;\n     topGoto.label = elseBody.label;\n\n     let endGoto = {\n         type: \"GotoStatement\",\n         label: null\n     }\n\n     let ifelseExit = {\n         type: 'LabeledStatement',\n         label: Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"GenLabel\"])(),\n         body: {\n             type: \"EmptyStatement\"\n         },\n         inherited: false\n     }\n     endGoto.label = ifelseExit.label;\n\n     return {\n         type: \"SequenceExpression\",\n         statements: [ifGuard, topGoto, body, endGoto, elseBody, endGoto, ifelseExit]\n     }\n }\n\n function convertForStatement(node) {\n\n     assert__WEBPACK_IMPORTED_MODULE_0___default.a.ok(node.type == 'ForStatement', node.type, \"invalid node type(Assign expected)\");\n\n     let initial= {\n           type:\"SingleAssignmentExpression\",\n           target: node.init.left,\n           operand1: node.init.right\n\n     }\n     let ifGuard = {\n         type: \"LabeledStatement\",\n         body: {\n             type: \"IfGotoStatement\",\n             test: node.test,\n             label: null\n         },\n         label: Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"GenLabel\"])(),\n         inherited: false\n     };\n     let topGoto = {\n         type: \"GotoStatement\",\n         label: null\n     }\n     let body = {\n         type: \"LabeledStatement\",\n         label: Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"GenLabel\"])(),\n         body: convertAll(node.body),\n         inherited: false\n     }\n     ifGuard.body.label = body.label;\n     let inc={\n       type :\"UnaryExpression\",\n       operator : node.update.operator,\n       argument : node.update.argument,\n\n       prefix :  node.update.prefix\n     }\n     let endGoto = {\n         type: \"GotoStatement\",\n         label: ifGuard.label\n     }\n     let loopExit = {\n         type: 'LabeledStatement',\n         label: Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"GenLabel\"])(),\n         body: {\n             type: \"EmptyStatement\"\n         },\n         inherited: false\n     }\n     topGoto.label = loopExit.label;\n\n     return {\n         type: \"SequenceExpression\",\n         statements: [initial, ifGuard, topGoto, body, inc, endGoto, loopExit]\n     }\n }\n\n function convertDoWhileStatement(node) {\n\n     assert__WEBPACK_IMPORTED_MODULE_0___default.a.ok(node.type == 'DoWhileStatement', node.type, \"invalid node type(Assign expected)\");\n\n\n     let body = {\n         type: \"LabeledStatement\",\n         label: Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"GenLabel\"])(),\n         body: convertAll(node.body),\n         inherited: false\n     }\n     let ifGuard = {\n        type: \"IfGotoStatement\",\n        test: node.test,\n        label: null\n    };\n    ifGuard.label = body.label;\n    let loopExit = {\n        type: 'LabeledStatement',\n        label: Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"GenLabel\"])(),\n        body: {\n            type: \"EmptyStatement\"\n        },\n        inherited: false\n    }\n     let endGoto = {\n         type: \"GotoStatement\",\n         label: null\n     }\n     endGoto.label = loopExit.label\n     return {\n         type: \"Sequence\",\n         statements: [ body, ifGuard,  endGoto, loopExit]\n     }\n }\n\n\n\nfunction convertAssignExpression(node) {\n    assert__WEBPACK_IMPORTED_MODULE_0___default.a.ok(node.type == 'AssignmentExpression',`invalid node type(Assign expected),got ${node.type}`);\n\n    let tempBlock = {\n        type: \"SingleAssignmentExpression\",\n        target: Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"genTemp\"])(),\n        operand1: node.right\n    };\n\n    let assignblock = {\n        type: \"SingleAssignmentExpression\",\n        target: node.left,\n        operand1: tempBlock.target\n    };\n    return {\n        type: \"Sequence\",\n        statements: [tempBlock, assignblock]\n    }\n\n}\n\nfunction convertWhileStatement(node) {\n\n    assert__WEBPACK_IMPORTED_MODULE_0___default.a.ok(node.type == 'WhileStatement', node.type, \"invalid node type(Assign expected)\");\n\n    let ifGuard = {\n        type: \"LabeledStatement\",\n        body: {\n            type: \"IfGotoStatement\",\n            test: node.test,\n            label: null\n        },\n        label: Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"GenLabel\"])(),\n        inherited: false\n    };\n    let topGoto = {\n        type: \"GotoStatement\",\n        label: null\n    }\n    let body = {\n        type: \"LabeledStatement\",\n        label: Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"GenLabel\"])(),\n        body: convertAll(node.body),\n        inherited: false\n    }\n    ifGuard.body.label = body.label;\n    let endGoto = {\n        type: \"GotoStatement\",\n        label: ifGuard.label\n    }\n    let loopExit = {\n        type: 'LabeledStatement',\n        label: Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"GenLabel\"])(),\n        body: {\n            type: \"EmptyStatement\"\n        },\n        inherited: false\n    }\n    topGoto.label = loopExit.label;\n\n    return {\n        type: \"SequenceExpression\",\n        statements: [ifGuard, topGoto, body, endGoto, loopExit]\n    }\n}\n\nfunction convertAll(node) {\n    if (node == null || typeof node == 'undefined')\n        return;\n\n    switch (node.type) {\n        case \"WhileStatement\":\n            node = convertWhileStatement(node);\n            break;\n        case \"DoWhileStatement\":\n            node = convertDoWhileStatement(node);\n            break;\n        case \"ForStatement\":\n            node = convertForStatement(node);\n            break;\n        case \"IfStatement\":\n            node = convertIfElseStatement(node);\n            break;\n        case \"AssignmentExpression\":\n            node = convertAssignExpression(node);\n            break;\n        case \"ExpressionStatement\":\n            node = convertExpressionStatement(node);\n            break;\n        default:\n            console.log(`[Warning] ${node.type} transformation not supported`);\n    }\n    return node;\n}\n\n\n//# sourceURL=webpack:///./src/convert.js?");

/***/ }),

/***/ "./src/convertIC.js":
/*!**************************!*\
  !*** ./src/convertIC.js ***!
  \**************************/
/*! exports provided: convertNodeObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertNodeObject\", function() { return convertNodeObject; });\n/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assert */ \"assert\");\n/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\n\n\n/**\n *  Coverts a simplified node to a IC\n *  @param   node The node to convert(JS object)\n *  @return       An array of nodes repesenting the simplified construct\n */\n\nfunction convertNodeIC(node) {\n    var generatedIC = \"\";\n    // console.log(node.type);\n    switch (node.type) {\n        case 'Identifier':\n            generatedIC = node.name;\n            break;\n        case 'Literal':\n            generatedIC = node.value;\n            break;\n        case 'EmptyStatement':\n            generatedIC = '.....';\n            break;\n        case 'SingleAssignmentExpression':\n            generatedIC = convertNodeIC(node.target) + '=' + convertNodeIC(node.operand1);\n            break;\n        case 'LabeledStatement':\n            if (!node.inherited) {\n                generatedIC = node.label + \": \";\n            }\n            generatedIC += '\\n\\t';\n            generatedIC += convertNodeIC(node.body);\n            // console.log(\"DEBUG:\", generatedIC);\n            break;\n        case 'SingleAssignmentExpression':\n            generatedIC = node.target + \" = \" + node.operand1;\n            break;\n        case 'UnaryExpression':\n            generatedIC = convertNodeIC(node.argument) + node.operator;\n            break;\n        case 'Sequence':\n            var tempIC = node.statements.map(entry => convertNodeIC(entry));\n            var i;\n            for (i = 0; i < tempIC.length; i++) {\n                // console.log(\"DEBUG:\", tempIC[i]);\n                generatedIC += tempIC[i];\n                // console.log(\"DEBUG GEN:\", generatedIC);\n                generatedIC += '\\n';\n            }\n            break;;\n        case 'SequenceExpression':\n            var tempIC = node.statements.map(entry => convertNodeIC(entry));\n            var i;\n            for (i = 0; i < tempIC.length; i++) {\n                // console.log(\"DEBUG:\", tempIC[i]);\n                generatedIC += tempIC[i];\n                // console.log(\"DEBUG GEN:\", generatedIC);\n                generatedIC += '\\n';\n            }\n            break;\n        case 'ExpressionStatement':\n            generatedIC += convertNodeIC(node.expression);\n            break;\n        case 'GotoStatement':\n            generatedIC = \"goto \" + node.label;\n            break;;\n        case 'IfGotoStatement':\n            generatedIC = \"if \" + convertNodeIC(node.test) + \" goto \" + node.label;\n            break;\n        case 'BinaryExpression':\n            generatedIC = convertNodeIC(node.left) + \" \" + node.operator + \" \" + convertNodeIC(node.right);\n            break;\n        case 'LogicalExpression':\n            generatedIC = convertNodeIC(node.left) + \" \" + node.operator + \" \" + convertNodeIC(node.right);\n            break;\n        default:\n            console.log(\"DEBUG: \", node);\n            generatedIC = \"Unsupported\";\n            break;\n    }\n    return generatedIC;\n}\n\nfunction convertNodeObject(node) {\n    return convertNodeIC(node);\n}\n\n\n//# sourceURL=webpack:///./src/convertIC.js?");

/***/ }),

/***/ "./src/index_node.js":
/*!***************************!*\
  !*** ./src/index_node.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _convert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convert */ \"./src/convert.js\");\n/* harmony import */ var _input_examples_while_loop_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input_examples/while_loop.json */ \"./input_examples/while_loop.json\");\nvar _input_examples_while_loop_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/Object.assign({}, _input_examples_while_loop_json__WEBPACK_IMPORTED_MODULE_1__, {\"default\": _input_examples_while_loop_json__WEBPACK_IMPORTED_MODULE_1__});\n/* harmony import */ var _input_examples_assign_expr_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input_examples/assign_expr.json */ \"./input_examples/assign_expr.json\");\nvar _input_examples_assign_expr_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/Object.assign({}, _input_examples_assign_expr_json__WEBPACK_IMPORTED_MODULE_2__, {\"default\": _input_examples_assign_expr_json__WEBPACK_IMPORTED_MODULE_2__});\n/* harmony import */ var _input_examples_for_loop_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input_examples/for_loop.json */ \"./input_examples/for_loop.json\");\nvar _input_examples_for_loop_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/Object.assign({}, _input_examples_for_loop_json__WEBPACK_IMPORTED_MODULE_3__, {\"default\": _input_examples_for_loop_json__WEBPACK_IMPORTED_MODULE_3__});\n/* harmony import */ var _input_examples_if_else_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input_examples/if_else.json */ \"./input_examples/if_else.json\");\nvar _input_examples_if_else_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/Object.assign({}, _input_examples_if_else_json__WEBPACK_IMPORTED_MODULE_4__, {\"default\": _input_examples_if_else_json__WEBPACK_IMPORTED_MODULE_4__});\n/* harmony import */ var _input_examples_do_while_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../input_examples/do_while.json */ \"./input_examples/do_while.json\");\nvar _input_examples_do_while_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/Object.assign({}, _input_examples_do_while_json__WEBPACK_IMPORTED_MODULE_5__, {\"default\": _input_examples_do_while_json__WEBPACK_IMPORTED_MODULE_5__});\n/* harmony import */ var _input_examples_expression_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../input_examples/expression.json */ \"./input_examples/expression.json\");\nvar _input_examples_expression_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/Object.assign({}, _input_examples_expression_json__WEBPACK_IMPORTED_MODULE_6__, {\"default\": _input_examples_expression_json__WEBPACK_IMPORTED_MODULE_6__});\n/* harmony import */ var _convertIC__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./convertIC */ \"./src/convertIC.js\");\n/* harmony import */ var _intercleanup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./intercleanup */ \"./src/intercleanup.js\");\n\n//import while_loop from '../input_examples/while_loop.json';\n\n\n\n\n\n\n\n\n//import {readFileSync} from 'fs';\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nlet input = fs.readFileSync(0);\n\n\nlet input_obj = JSON.parse(input);\nlet output = Object(_convert__WEBPACK_IMPORTED_MODULE_0__[\"convertAll\"])(input_obj);\nlet cleanInter = Object(_intercleanup__WEBPACK_IMPORTED_MODULE_8__[\"cleanUp\"])(output);\nlet icout = Object(_convertIC__WEBPACK_IMPORTED_MODULE_7__[\"convertNodeObject\"])(cleanInter);\nconsole.log(icout);\n\n\n//# sourceURL=webpack:///./src/index_node.js?");

/***/ }),

/***/ "./src/intercleanup.js":
/*!*****************************!*\
  !*** ./src/intercleanup.js ***!
  \*****************************/
/*! exports provided: cleanUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cleanUp\", function() { return cleanUp; });\n/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assert */ \"assert\");\n/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\n\n\n/**\n *  Intermediate node is cleaned removing extra labels\n *  @param   node The node to convert(JS object)\n *  @return       An array of nodes repesenting the simplified construct\n */\n\n\n function cleanNode(node){\n    var tempLabel = \"\";\n    var child;\n    switch(node.type){\n        case 'LabeledStatement':\n            if(node.body.type == \"Sequence\" || node.body.type == \"SequenceExpression\"){\n                child = node.body.statements;\n                if(child[0].type == \"LabeledStatement\"){\n                    child[0].inherited = true;\n                    tempLabel += child[0].label;\n                    child[0].label = node.label;\n                    var i;\n                    for(i = 0;i < child.length;i++){\n                        if(child[i].label == tempLabel){\n                            child[i].label = node.label;\n                        }\n                    }\n                }\n            }\n    }\n    return node;\n }\n\n\n function cleanUp(node){\n    // console.log(node); \n    var cleanedNode = node.statements.map(e => cleanNode(e));\n    // console.log(cleanedNode);\n    return node;\n }\n\n//# sourceURL=webpack:///./src/intercleanup.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: cleanupGenerators, GenLabel, genTemp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cleanupGenerators\", function() { return cleanupGenerators; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GenLabel\", function() { return GenLabel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genTemp\", function() { return genTemp; });\nvar labelCount = 0;\nvar tempCount = 0;\n\nfunction cleanupGenerators() {\n    labelCount = 0;\n    tempCount = 0;\n}\n/**\n *  Create a new label\n *  @param  name Custom label name, optional\n *  @return      A string\n */\nfunction GenLabel(name) {\n    if (name == null)\n        return `L${labelCount++}`;\n    else\n        return name;\n    }\n\nfunction genTemp(name) {\n    let temp = {\n        type: \"Identifier\",\n        name: null\n    }\n    if (name == null)\n        temp.name = `t${tempCount++}`;\n    else\n        temp.name = name;\n    return temp;\n}\n\nfunction gen(...args) {\n    let output = \"\";\n    args.map((arg) => {\n        if (typeof arg == 'object')\n            //do something here\n            return name;\n        else\n            return arg;\n        }\n    );\n    return args.join(\"\");\n}\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"assert\");\n\n//# sourceURL=webpack:///external_%22assert%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });