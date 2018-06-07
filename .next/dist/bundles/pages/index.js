module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _semanticUiReact = __webpack_require__("semantic-ui-react");

var _routes = __webpack_require__("./routes.js");

var _jsxFileName = "/Users/Bill/Documents/ethereum-projects/WhiskyXChange/components/Header.js";

var _default = function _default() {
  return _react.default.createElement(_semanticUiReact.Menu, {
    style: {
      marginTop: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react.default.createElement(_routes.Link, {
    route: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react.default.createElement("a", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Whisky Marketplace")), _react.default.createElement(_semanticUiReact.Menu.Menu, {
    position: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react.default.createElement(_routes.Link, {
    route: "/register",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react.default.createElement("a", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Register")), _react.default.createElement(_routes.Link, {
    route: "/asset/newasset",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react.default.createElement("a", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "+"))));
};

exports.default = _default;

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _semanticUiReact = __webpack_require__("semantic-ui-react");

var _head = _interopRequireDefault(__webpack_require__("next/head"));

var _Header = _interopRequireDefault(__webpack_require__("./components/Header.js"));

var _jsxFileName = "/Users/Bill/Documents/ethereum-projects/WhiskyXChange/components/Layout.js";

var _default = function _default(props) {
  return _react.default.createElement(_semanticUiReact.Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react.default.createElement(_head.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react.default.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), _react.default.createElement(_Header.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), props.children);
};

exports.default = _default;

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = __webpack_require__("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(__webpack_require__("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("@babel/runtime/helpers/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(__webpack_require__("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _semanticUiReact = __webpack_require__("semantic-ui-react");

var _routes = __webpack_require__("./routes.js");

var superagent = _interopRequireWildcard(__webpack_require__("superagent"));

var _Layout = _interopRequireDefault(__webpack_require__("./components/Layout.js"));

var _jsxFileName = "/Users/Bill/Documents/ethereum-projects/WhiskyXChange/pages/index.js";

var WhiskyIndex =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(WhiskyIndex, _Component);

  function WhiskyIndex() {
    (0, _classCallCheck2.default)(this, WhiskyIndex);
    return (0, _possibleConstructorReturn2.default)(this, (WhiskyIndex.__proto__ || Object.getPrototypeOf(WhiskyIndex)).apply(this, arguments));
  }

  (0, _createClass2.default)(WhiskyIndex, [{
    key: "renderRow",
    value: function renderRow() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      return this.props.list.map(function (item, i) {
        return _react.default.createElement(Row, {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }, _react.default.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, _react.default.createElement(_routes.Link, {
          route: "/asset/".concat(item._id, "/viewdetail"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, _react.default.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, item.name))), _react.default.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, item.year), _react.default.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, item.Producer), _react.default.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, item.country), _react.default.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, item.caskId), _react.default.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, item.value));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body,
          Cell = _semanticUiReact.Table.Cell;
      return _react.default.createElement(_Layout.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "Whisky Index"), _react.default.createElement(_routes.Link, {
        route: '/asset/newasset',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react.default.createElement(_semanticUiReact.Button, {
        primary: true,
        floated: "right",
        style: {
          marginBottom: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "Add Whisky Asset"))), _react.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Name"), _react.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "Year"), _react.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "Producer"), _react.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "Country"), _react.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Cask ID"), _react.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "Value"))), _react.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, this.renderRow())));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var req, db, _list, list;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;

                if (!req) {
                  _context.next = 7;
                  break;
                }

                db = req.db;
                _context.next = 5;
                return db.collection('Whisky').find().toArray();

              case 5:
                _list = _context.sent;
                return _context.abrupt("return", {
                  list: _list
                });

              case 7:
                _context.next = 9;
                return superagent.get("http://".concat(window.location.host, "/api")).then(function (res) {
                  return res.body;
                });

              case 9:
                list = _context.sent;
                return _context.abrupt("return", {
                  list: list
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);
  return WhiskyIndex;
}(_react.Component);

var _default = WhiskyIndex;
exports.default = _default;

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var routes = __webpack_require__("next-routes")();

routes.add('/register', '/register').add('/asset/newasset', '/asset/newasset').add('/asset/:id/viewdetail', '/asset/viewdetail');
module.exports = routes;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "@babel/runtime/helpers/interopRequireDefault":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),

/***/ "@babel/runtime/helpers/interopRequireWildcard":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "superagent":
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map