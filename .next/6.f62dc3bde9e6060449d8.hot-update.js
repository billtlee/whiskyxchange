webpackHotUpdate(6,{

/***/ "./pages/asset/viewdetail.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _semanticUiReact = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");

var superagent = _interopRequireWildcard(__webpack_require__("./node_modules/superagent/lib/client.js"));

var _Layout = _interopRequireDefault(__webpack_require__("./components/Layout.js"));

var _web = _interopRequireDefault(__webpack_require__("./ethereum/web3.js"));

var _whiskyAsset = _interopRequireDefault(__webpack_require__("./ethereum/whiskyAsset.js"));

var _jsxFileName = "/Users/Bill/Documents/ethereum-projects/WhiskyXChange/pages/asset/viewdetail.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var ViewDetail =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ViewDetail, _Component);
  (0, _createClass2.default)(ViewDetail, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(props) {
        var assetId;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assetId = props.query.id;
                return _context.abrupt("return", {
                  assetId: assetId
                });

              case 2:
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

  function ViewDetail(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ViewDetail);
    _this = (0, _possibleConstructorReturn2.default)(this, (ViewDetail.__proto__ || Object.getPrototypeOf(ViewDetail)).call(this, props));
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        loadingListForSale: false,
        loadingBuyAsset: false,
        errorMessage: ''
      }
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "listForSale", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2() {
          var whiskyAsset, accounts, res;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  whiskyAsset = (0, _whiskyAsset.default)(_this.state.contractAddress);
                  console.log('contract address: ', _this.state.contractAddress);
                  _context2.t0 = console;
                  _context2.next = 5;
                  return whiskyAsset.methods.owner().call();

                case 5:
                  _context2.t1 = _context2.sent;

                  _context2.t0.log.call(_context2.t0, 'contract owner: ', _context2.t1);

                  _this.setState({
                    loading: true,
                    errorMessage: ''
                  });

                  _context2.prev = 8;
                  _context2.next = 11;
                  return _web.default.eth.getAccounts();

                case 11:
                  accounts = _context2.sent;
                  _context2.next = 14;
                  return whiskyAsset.methods.initiateSale().send({
                    from: accounts[0]
                  });

                case 14:
                  res = _context2.sent;
                  console.log('res: ', res);

                  _this.setState({
                    selling: true
                  });

                  _context2.next = 22;
                  break;

                case 19:
                  _context2.prev = 19;
                  _context2.t2 = _context2["catch"](8);

                  _this.setState({
                    errorMessage: _context2.t2.message
                  });

                case 22:
                  _this.setState({
                    loading: false
                  });

                case 23:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[8, 19]]);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), "buyAsset", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value2 = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee4() {
          var whiskyAsset, accounts, res, owner;
          return _regenerator.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  whiskyAsset = (0, _whiskyAsset.default)(_this.state.contractAddress);

                  _this.setState({
                    loading: true,
                    errorMessage: ''
                  });

                  _context4.prev = 2;
                  _context4.next = 5;
                  return _web.default.eth.getAccounts();

                case 5:
                  accounts = _context4.sent;
                  _context4.next = 8;
                  return whiskyAsset.methods.buyWhisky().send({
                    from: accounts[0],
                    value: _web.default.utils.toWei(_this.state.etherValue)
                  });

                case 8:
                  res = _context4.sent;
                  console.log('res: ', res);
                  _context4.next = 12;
                  return whiskyAsset.methods.owner().call();

                case 12:
                  owner = _context4.sent;
                  superagent.patch("http://".concat(window.location.host, "/api/update/").concat(_this.state._id), {
                    owner: owner
                  }).then(
                  /*#__PURE__*/
                  function () {
                    var _ref = (0, _asyncToGenerator2.default)(
                    /*#__PURE__*/
                    _regenerator.default.mark(function _callee3(res) {
                      return _regenerator.default.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3, this);
                    }));

                    return function (_x2) {
                      return _ref.apply(this, arguments);
                    };
                  }()).catch(function (err) {
                    return console.error(err.stack);
                  });

                  _this.setState({
                    owner: owner
                  });

                  _context4.next = 20;
                  break;

                case 17:
                  _context4.prev = 17;
                  _context4.t0 = _context4["catch"](2);

                  _this.setState({
                    errorMessage: _context4.t0.message
                  });

                case 20:
                  _this.setState({
                    loading: false
                  });

                case 21:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this, [[2, 17]]);
        }));

        return function value() {
          return _value2.apply(this, arguments);
        };
      }()
    });
    _this.state = {};
    return _this;
  }

  (0, _createClass2.default)(ViewDetail, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5() {
        var detail, whiskyAsset, etherValue, accounts, selling;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return superagent.get("http://".concat(window.location.host, "/api/viewdetail/").concat(this.props.assetId)).then(function (res) {
                  return res.body;
                });

              case 2:
                detail = _context5.sent;
                this.setState(detail[0]);
                whiskyAsset = (0, _whiskyAsset.default)(detail[0].contractAddress);
                _context5.next = 7;
                return whiskyAsset.methods.value().call();

              case 7:
                etherValue = _context5.sent;
                _context5.next = 10;
                return _web.default.eth.getAccounts();

              case 10:
                accounts = _context5.sent;
                this.state.owner === accounts[0] ? this.setState({
                  isOwner: true
                }) : this.setState({
                  isOwner: false
                });
                _context5.next = 14;
                return whiskyAsset.methods.selling().call();

              case 14:
                selling = _context5.sent;
                this.setState({
                  selling: selling,
                  etherValue: _web.default.utils.fromWei(etherValue)
                });

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var detail = this.state;
      console.log('selling: ', this.state.selling);
      console.log('isowner: ', this.state.isOwner);
      return _react.default.createElement(_Layout.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, "Whisky Detail"), _react.default.createElement(_semanticUiReact.Table, {
        definition: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react.default.createElement(_semanticUiReact.Table.Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, "Name"), _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, detail.name)), _react.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, "Producer"), _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, detail.producer)), _react.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "Country"), _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, detail.country)), _react.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, "Region"), _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, detail.region)), _react.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "Subregion"), _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, detail.subregion)), _react.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, "Size"), _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, detail.size)), _react.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, "Color"), _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, detail.color)), _react.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, "Year"), _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, detail.year)), _react.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, "Degree of Alcohol"), _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, detail.degreeOfAlcohol)), _react.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, "Wood Type"), _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, detail.woodType)), _react.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, "Cask ID"), _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, detail.caskId)), _react.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, "Value in USD"), _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, detail.value)), _react.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, "Value in Ether"), _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, detail.etherValue)), _react.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, "Owner"), _react.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, detail.owner)))), _react.default.createElement(_semanticUiReact.Button, {
        primary: true,
        loading: this.state.loadingListForSale,
        onClick: this.listForSale,
        disabled: !(this.state.isOwner && !this.state.selling),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, "List for Sale"), _react.default.createElement(_semanticUiReact.Button, {
        primary: true,
        loading: this.state.loadingBuyAsset,
        onClick: this.buyAsset,
        disabled: !(!this.state.isOwner && this.state.selling),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, "Buy"));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return ViewDetail;
}(_react.Component);

var _default = ViewDetail;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ViewDetail, "ViewDetail", "/Users/Bill/Documents/ethereum-projects/WhiskyXChange/pages/asset/viewdetail.js");
  reactHotLoader.register(_default, "default", "/Users/Bill/Documents/ethereum-projects/WhiskyXChange/pages/asset/viewdetail.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/asset/viewdetail")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.f62dc3bde9e6060449d8.hot-update.js.map