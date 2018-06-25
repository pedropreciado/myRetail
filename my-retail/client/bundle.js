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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/actions/product_actions.js":
/*!*******************************************!*\
  !*** ./client/actions/product_actions.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fetchProducts = exports.RECEIVE_ALL_PRODUCTS = undefined;\n\nvar _product_api_util = __webpack_require__(/*! ../utils/product_api_util */ \"./client/utils/product_api_util.js\");\n\nvar ProductAPIUtil = _interopRequireWildcard(_product_api_util);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar RECEIVE_ALL_PRODUCTS = exports.RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';\n\nvar fetchProducts = exports.fetchProducts = function fetchProducts() {\n  return function (dispatch) {\n    ProductAPIUtil.fetchProducts().then(function (res) {\n      return res.json();\n    }).then(function (_ref) {\n      var CatalogEntryView = _ref.CatalogEntryView;\n\n      dispatch(receiveAllProducts(CatalogEntryView));\n    }).catch(function (err) {\n      console.log(err);\n    });\n  };\n};\n\nvar receiveAllProducts = function receiveAllProducts(products) {\n  return {\n    type: 'RECEIVE_ALL_PRODUCTS',\n    products: products\n  };\n};\n\n//# sourceURL=webpack:///./client/actions/product_actions.js?");

/***/ }),

/***/ "./client/components/App.js":
/*!**********************************!*\
  !*** ./client/components/App.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _product_show_demo_container = __webpack_require__(/*! ./product/show/product_show_demo_container */ \"./client/components/product/show/product_show_demo_container.js\");\n\nvar _product_show_demo_container2 = _interopRequireDefault(_product_show_demo_container);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import ProductIndexContainer from './product/product_index_container';\n\nvar App = function App(_ref) {\n  var store = _ref.store;\n  return _react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(_product_show_demo_container2.default, null)\n  );\n};\n\nexports.default = App;\n\n//# sourceURL=webpack:///./client/components/App.js?");

/***/ }),

/***/ "./client/components/product/show/product_cart.js":
/*!********************************************************!*\
  !*** ./client/components/product/show/product_cart.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _fa = __webpack_require__(/*! react-icons/lib/fa */ \"./node_modules/react-icons/lib/fa/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ProductCart = function (_React$Component) {\n  _inherits(ProductCart, _React$Component);\n\n  function ProductCart(props) {\n    _classCallCheck(this, ProductCart);\n\n    var _this = _possibleConstructorReturn(this, (ProductCart.__proto__ || Object.getPrototypeOf(ProductCart)).call(this, props));\n\n    _this.state = {\n      quantity: 1\n    };\n\n    _this.renderPromotions = _this.renderPromotions.bind(_this);\n    _this.renderQuantityField = _this.renderQuantityField.bind(_this);\n    _this.handleQuantityChange = _this.handleQuantityChange.bind(_this);\n    _this.renderCartButtons = _this.renderCartButtons.bind(_this);\n    _this.renderReturnsInfo = _this.renderReturnsInfo.bind(_this);\n    _this.renderCartOptions = _this.renderCartOptions.bind(_this);\n    return _this;\n  }\n\n  _createClass(ProductCart, [{\n    key: 'handleQuantityChange',\n    value: function handleQuantityChange(num) {\n      var quantity = this.state.quantity + num;\n\n      this.setState({ quantity: !quantity ? 1 : quantity });\n    }\n  }, {\n    key: 'renderReturnsInfo',\n    value: function renderReturnsInfo() {\n      return _react2.default.createElement(\n        'div',\n        { id: 'returns-container' },\n        _react2.default.createElement(\n          'div',\n          { id: 'returns-left' },\n          'returns'\n        ),\n        _react2.default.createElement(\n          'div',\n          { id: 'returns-right' },\n          'This item must be returned within 30 days of the ship date. See return policy for details. Prices, promotions, styles an availability may vary by store and online.'\n        )\n      );\n    }\n  }, {\n    key: 'renderCartOptions',\n    value: function renderCartOptions() {\n      return _react2.default.createElement(\n        'div',\n        { id: 'cart-options-container' },\n        _react2.default.createElement(\n          'div',\n          { className: 'option-button' },\n          'ADD TO REGISTRY'\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'option-button' },\n          'ADD TO LIST'\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'option-button' },\n          'SHARE'\n        )\n      );\n    }\n  }, {\n    key: 'renderCartButtons',\n    value: function renderCartButtons() {\n      var code = this.props.code;\n\n      var buttons = [_react2.default.createElement(\n        'div',\n        {\n          key: 0,\n          className: 'cart-button',\n          id: 'add-to-cart',\n          onClick: function onClick() {\n            return alert('Added to cart!');\n          }\n        },\n        'ADD TO CART'\n      ), _react2.default.createElement(\n        'div',\n        {\n          key: 1,\n          className: 'cart-button',\n          onClick: function onClick() {\n            return alert('Searching for nearest store ...');\n          },\n          id: 'pick-up' },\n        'PICK UP IN STORE'\n      )];\n\n      if (code === 1) {\n        buttons = buttons.slice(0, 1);\n      } else if (code === 2) {\n        buttons = buttons.slice(1, 2);\n      }\n\n      return _react2.default.createElement(\n        'div',\n        { id: 'cart-buttons-container' },\n        buttons\n      );\n    }\n  }, {\n    key: 'renderQuantityField',\n    value: function renderQuantityField() {\n      var _this2 = this;\n\n      var quantity = this.state.quantity;\n\n\n      return _react2.default.createElement(\n        'div',\n        { id: 'quantity-field' },\n        _react2.default.createElement(\n          'a',\n          null,\n          'quantity: '\n        ),\n        _react2.default.createElement(\n          'div',\n          { id: 'quantity-button-container' },\n          _react2.default.createElement(\n            'div',\n            {\n              onClick: function onClick() {\n                return _this2.handleQuantityChange(-1);\n              },\n              className: 'quantity-button',\n              id: 'minus' },\n            ' - '\n          ),\n          quantity,\n          _react2.default.createElement(\n            'div',\n            {\n              onClick: function onClick() {\n                return _this2.handleQuantityChange(1);\n              },\n              className: 'quantity-button',\n              id: 'plus' },\n            ' + '\n          )\n        )\n      );\n    }\n  }, {\n    key: 'renderPromotions',\n    value: function renderPromotions() {\n      var promotions = this.props.promotions;\n\n\n      return promotions.map(function (promo, idx) {\n        return _react2.default.createElement(\n          'div',\n          { key: idx, className: 'promo' },\n          _react2.default.createElement(_fa.FaTag, { color: 'red' }),\n          _react2.default.createElement(\n            'a',\n            null,\n            promo\n          )\n        );\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props$offers = this.props.offers,\n          price = _props$offers.price,\n          qualifier = _props$offers.qualifier;\n\n\n      return _react2.default.createElement(\n        'div',\n        { id: 'cart-container' },\n        _react2.default.createElement(\n          'div',\n          { id: 'price-container' },\n          _react2.default.createElement(\n            'a',\n            null,\n            price\n          ),\n          _react2.default.createElement(\n            'a',\n            { id: 'price-qualifier' },\n            qualifier\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { id: 'promo-container' },\n          this.renderPromotions()\n        ),\n        this.renderQuantityField(),\n        this.renderCartButtons(),\n        this.renderReturnsInfo(),\n        this.renderCartOptions()\n      );\n    }\n  }]);\n\n  return ProductCart;\n}(_react2.default.Component);\n\nexports.default = ProductCart;\n\n//# sourceURL=webpack:///./client/components/product/show/product_cart.js?");

/***/ }),

/***/ "./client/components/product/show/product_features.js":
/*!************************************************************!*\
  !*** ./client/components/product/show/product_features.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ProductFeatures = function ProductFeatures(_ref) {\n    var features = _ref.features;\n\n    return _react2.default.createElement(\n        'div',\n        { id: 'product-feature-container' },\n        _react2.default.createElement(\n            'div',\n            null,\n            'product highlights'\n        ),\n        _react2.default.createElement(\n            'ul',\n            null,\n            features.map(function (feature, idx) {\n                return _react2.default.createElement(\n                    'li',\n                    { className: 'feature-item', key: idx },\n                    feature\n                );\n            })\n        )\n    );\n};\n\nexports.default = ProductFeatures;\n\n//# sourceURL=webpack:///./client/components/product/show/product_features.js?");

/***/ }),

/***/ "./client/components/product/show/product_image_slide.js":
/*!***************************************************************!*\
  !*** ./client/components/product/show/product_image_slide.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _mod = __webpack_require__(/*! ../../../utils/mod */ \"./client/utils/mod.js\");\n\nvar _mod2 = _interopRequireDefault(_mod);\n\nvar _fa = __webpack_require__(/*! react-icons/lib/fa */ \"./node_modules/react-icons/lib/fa/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ProductImageSlide = function (_React$Component) {\n  _inherits(ProductImageSlide, _React$Component);\n\n  function ProductImageSlide(props) {\n    _classCallCheck(this, ProductImageSlide);\n\n    var _this = _possibleConstructorReturn(this, (ProductImageSlide.__proto__ || Object.getPrototypeOf(ProductImageSlide)).call(this, props));\n\n    var currentImageIdx = props.currentImageIdx,\n        images = props.images,\n        leftIdx = (currentImageIdx - 1) % images.length,\n        midIdx = currentImageIdx,\n        rightIdx = (currentImageIdx + 1) % images.length;\n\n\n    _this.state = {\n      leftIdx: leftIdx,\n      midIdx: midIdx,\n      rightIdx: rightIdx\n    };\n\n    _this.handleImageClick = _this.handleImageClick.bind(_this);\n    _this.handleArrowClick = _this.handleArrowClick.bind(_this);\n    return _this;\n  }\n\n  _createClass(ProductImageSlide, [{\n    key: 'handleImageClick',\n    value: function handleImageClick(midIdx) {\n      var leftIdx = (0, _mod2.default)(midIdx - 1, this.props.images.length),\n          rightIdx = (0, _mod2.default)(midIdx + 1, this.props.images.length);\n\n      this.props.changeImage(midIdx);\n\n      this.setState({ leftIdx: leftIdx, midIdx: midIdx, rightIdx: rightIdx });\n    }\n  }, {\n    key: 'handleArrowClick',\n    value: function handleArrowClick(direction) {\n      var _this2 = this;\n\n      var shift = function shift(shiftIdx) {\n        var midIdx = (_this2.state.midIdx + shiftIdx) % _this2.props.images.length;\n\n        _this2.handleImageClick(midIdx);\n      };\n\n      shift(direction === 'left' ? -1 : 1);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var images = this.props.images;\n      var _state = this.state,\n          leftIdx = _state.leftIdx,\n          midIdx = _state.midIdx,\n          rightIdx = _state.rightIdx;\n\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'product-image-slide-container' },\n        _react2.default.createElement(\n          'div',\n          {\n            className: 'slide-image image-slide-arrow',\n            onClick: function onClick() {\n              return _this3.handleArrowClick('left');\n            }\n          },\n          _react2.default.createElement(_fa.FaChevronLeft, null)\n        ),\n        _react2.default.createElement('img', { className: 'slide-image',\n          onClick: function onClick() {\n            return _this3.handleImageClick(leftIdx);\n          },\n          src: images[leftIdx]\n        }),\n        _react2.default.createElement('img', { className: 'slide-image current', src: images[midIdx] }),\n        _react2.default.createElement('img', { className: 'slide-image',\n          onClick: function onClick() {\n            return _this3.handleImageClick(rightIdx);\n          },\n          src: images[rightIdx]\n        }),\n        _react2.default.createElement(\n          'div',\n          {\n            className: 'slide-image image-slide-arrow',\n            onClick: function onClick() {\n              return _this3.handleArrowClick('right');\n            }\n          },\n          _react2.default.createElement(_fa.FaChevronRight, null)\n        )\n      );\n    }\n  }]);\n\n  return ProductImageSlide;\n}(_react2.default.Component);\n\nexports.default = ProductImageSlide;\n\n//# sourceURL=webpack:///./client/components/product/show/product_image_slide.js?");

/***/ }),

/***/ "./client/components/product/show/product_images.js":
/*!**********************************************************!*\
  !*** ./client/components/product/show/product_images.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _fa = __webpack_require__(/*! react-icons/lib/fa */ \"./node_modules/react-icons/lib/fa/index.js\");\n\nvar _reactModal = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n\nvar _reactModal2 = _interopRequireDefault(_reactModal);\n\nvar _product_image_slide = __webpack_require__(/*! ./product_image_slide */ \"./client/components/product/show/product_image_slide.js\");\n\nvar _product_image_slide2 = _interopRequireDefault(_product_image_slide);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ProductImages = function (_React$Component) {\n  _inherits(ProductImages, _React$Component);\n\n  function ProductImages(props) {\n    _classCallCheck(this, ProductImages);\n\n    var _this = _possibleConstructorReturn(this, (ProductImages.__proto__ || Object.getPrototypeOf(ProductImages)).call(this, props));\n\n    var primaryImageIdx = props.primaryImageIdx;\n\n\n    _this.state = {\n      currentImageIdx: primaryImageIdx,\n      modalIsOpen: false\n    };\n\n    _this.changeImage = _this.changeImage.bind(_this);\n    _this.toggleModal = _this.toggleModal.bind(_this);\n    return _this;\n  }\n\n  _createClass(ProductImages, [{\n    key: 'toggleModal',\n    value: function toggleModal() {\n      var modalIsOpen = !this.state.modalIsOpen;\n      this.setState({ modalIsOpen: modalIsOpen });\n    }\n  }, {\n    key: 'changeImage',\n    value: function changeImage(currentImageIdx) {\n      this.setState({ currentImageIdx: currentImageIdx });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          images = _props.images,\n          itemTitle = _props.itemTitle;\n      var _state = this.state,\n          currentImageIdx = _state.currentImageIdx,\n          modalIsOpen = _state.modalIsOpen;\n\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'product-image-container' },\n        _react2.default.createElement('img', { onClick: this.toggleModal, id: 'primary-image', src: images[currentImageIdx] }),\n        _react2.default.createElement(\n          'a',\n          { onClick: this.toggleModal, id: 'zoom-image' },\n          _react2.default.createElement(_fa.FaSearchPlus, null),\n          'view larger'\n        ),\n        _react2.default.createElement(_product_image_slide2.default, {\n          images: images,\n          currentImageIdx: currentImageIdx,\n          changeImage: this.changeImage\n        }),\n        _react2.default.createElement(\n          _reactModal2.default,\n          {\n            isOpen: modalIsOpen,\n            onRequestClose: this.toggleModal,\n            contentLabel: itemTitle,\n            ariaHideApp: false\n          },\n          _react2.default.createElement('img', {\n            onClick: this.toggleModal,\n            id: 'in-modal',\n            src: images[currentImageIdx]\n          })\n        )\n      );\n    }\n  }]);\n\n  return ProductImages;\n}(_react2.default.Component);\n\nexports.default = ProductImages;\n\n//# sourceURL=webpack:///./client/components/product/show/product_images.js?");

/***/ }),

/***/ "./client/components/product/show/product_review_body.js":
/*!***************************************************************!*\
  !*** ./client/components/product/show/product_review_body.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactStarRatings = __webpack_require__(/*! react-star-ratings */ \"./node_modules/react-star-ratings/build/index.js\");\n\nvar _reactStarRatings2 = _interopRequireDefault(_reactStarRatings);\n\nvar _date_parser = __webpack_require__(/*! ../../../utils/date_parser */ \"./client/utils/date_parser.js\");\n\nvar _date_parser2 = _interopRequireDefault(_date_parser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ReviewBody = function ReviewBody(props) {\n  var _props$review = props.review,\n      datePosted = _props$review.datePosted,\n      overallRating = _props$review.overallRating,\n      review = _props$review.review,\n      screenName = _props$review.screenName,\n      title = _props$review.title;\n\n  var _dateParser = (0, _date_parser2.default)(datePosted),\n      day = _dateParser.day,\n      month = _dateParser.month,\n      year = _dateParser.year;\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'div',\n      { className: 'pro-con-body other-review' },\n      _react2.default.createElement(\n        'div',\n        { className: 'pro-con-body-header' },\n        _react2.default.createElement(_reactStarRatings2.default, {\n          rating: Number(overallRating), starRatedColor: 'red',\n          numberOfStars: 5, name: 'rating',\n          starDimension: '10px', starSpacing: '2.5px'\n        }),\n        _react2.default.createElement(\n          'a',\n          null,\n          title\n        )\n      ),\n      _react2.default.createElement(\n        'p',\n        { className: 'pro-con-review' },\n        review\n      ),\n      _react2.default.createElement(\n        'a',\n        { className: 'pro-con-review author' },\n        screenName + ' ' + month + ' ' + day + ', ' + year\n      )\n    )\n  );\n};\n\nexports.default = ReviewBody;\n\n//# sourceURL=webpack:///./client/components/product/show/product_review_body.js?");

/***/ }),

/***/ "./client/components/product/show/product_reviews.js":
/*!***********************************************************!*\
  !*** ./client/components/product/show/product_reviews.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactStarRatings = __webpack_require__(/*! react-star-ratings */ \"./node_modules/react-star-ratings/build/index.js\");\n\nvar _reactStarRatings2 = _interopRequireDefault(_reactStarRatings);\n\nvar _product_review_body = __webpack_require__(/*! ./product_review_body */ \"./client/components/product/show/product_review_body.js\");\n\nvar _product_review_body2 = _interopRequireDefault(_product_review_body);\n\nvar _date_parser = __webpack_require__(/*! ../../../utils/date_parser */ \"./client/utils/date_parser.js\");\n\nvar _date_parser2 = _interopRequireDefault(_date_parser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.state = {\n      showReviews: false\n    };\n\n    _this.renderProCon = _this.renderProCon.bind(_this);\n    _this.renderReviews = _this.renderReviews.bind(_this);\n    _this.handleAllReviewsClick = _this.handleAllReviewsClick.bind(_this);\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: 'handleAllReviewsClick',\n    value: function handleAllReviewsClick() {\n      var showReviews = !this.state.showReviews;\n\n      this.setState({ showReviews: showReviews });\n    }\n  }, {\n    key: 'renderReviews',\n    value: function renderReviews() {\n      var reviews = this.props.reviews;\n\n\n      return reviews.map(function (review, idx) {\n        return _react2.default.createElement(_product_review_body2.default, { key: idx, review: review });\n      });\n    }\n  }, {\n    key: 'renderProCon',\n    value: function renderProCon(reviewType) {\n      var _props$reviewType = this.props[reviewType],\n          review = _props$reviewType.review,\n          datePosted = _props$reviewType.datePosted,\n          overallRating = _props$reviewType.overallRating,\n          screenName = _props$reviewType.screenName,\n          title = _props$reviewType.title;\n\n      var _dateParser = (0, _date_parser2.default)(datePosted),\n          month = _dateParser.month,\n          day = _dateParser.day,\n          year = _dateParser.year;\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'pro-con-inner-container' },\n        _react2.default.createElement(\n          'div',\n          { className: 'pro-con-header' },\n          reviewType.toUpperCase(),\n          _react2.default.createElement(\n            'a',\n            null,\n            'most helpful \\n          ' + (reviewType === 'pro' ? '4-5' : '1-2') + ' star review'\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'pro-con-body' },\n          _react2.default.createElement(\n            'div',\n            { className: 'pro-con-body-header' },\n            _react2.default.createElement(_reactStarRatings2.default, {\n              rating: Number(overallRating), starRatedColor: 'red',\n              numberOfStars: 5, name: 'rating',\n              starDimension: '10px', starSpacing: '2.5px'\n            }),\n            _react2.default.createElement(\n              'a',\n              null,\n              title\n            )\n          ),\n          _react2.default.createElement(\n            'p',\n            { className: 'pro-con-review' },\n            review\n          ),\n          _react2.default.createElement(\n            'a',\n            { className: 'pro-con-review author' },\n            screenName + ' ' + month + ' ' + day + ', ' + year\n          )\n        )\n      );\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          rating = _props.rating,\n          reviews = _props.reviews;\n      var showReviews = this.state.showReviews;\n\n\n      return _react2.default.createElement(\n        'div',\n        { id: 'ratings-container' },\n        _react2.default.createElement(\n          'div',\n          { id: 'ratings-header' },\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(_reactStarRatings2.default, {\n              rating: Number(rating), starRatedColor: 'red',\n              numberOfStars: 5, name: 'rating',\n              starDimension: '20px', starSpacing: '5px'\n            }),\n            ' overall'\n          ),\n          _react2.default.createElement(\n            'div',\n            { id: 'all-reviews-button', onClick: this.handleAllReviewsClick },\n            _react2.default.createElement(\n              'a',\n              null,\n              (showReviews ? 'hide' : 'show') + ' all ' + reviews.length + ' reviews'\n            )\n          )\n        ),\n        showReviews ? _react2.default.createElement(\n          'div',\n          { id: 'reviews-container' },\n          this.renderReviews()\n        ) : _react2.default.createElement(\n          'div',\n          { id: 'pro-con-outer-container' },\n          this.renderProCon('pro'),\n          this.renderProCon('con')\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react2.default.Component);\n\nexports.default = _class;\n\n//# sourceURL=webpack:///./client/components/product/show/product_reviews.js?");

/***/ }),

/***/ "./client/components/product/show/product_show.js":
/*!********************************************************!*\
  !*** ./client/components/product/show/product_show.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _product_images = __webpack_require__(/*! ./product_images */ \"./client/components/product/show/product_images.js\");\n\nvar _product_images2 = _interopRequireDefault(_product_images);\n\nvar _product_reviews = __webpack_require__(/*! ./product_reviews */ \"./client/components/product/show/product_reviews.js\");\n\nvar _product_reviews2 = _interopRequireDefault(_product_reviews);\n\nvar _product_cart = __webpack_require__(/*! ./product_cart */ \"./client/components/product/show/product_cart.js\");\n\nvar _product_cart2 = _interopRequireDefault(_product_cart);\n\nvar _product_features = __webpack_require__(/*! ./product_features */ \"./client/components/product/show/product_features.js\");\n\nvar _product_features2 = _interopRequireDefault(_product_features);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ProductShow = function (_React$Component) {\n  _inherits(ProductShow, _React$Component);\n\n  function ProductShow(props) {\n    _classCallCheck(this, ProductShow);\n\n    var _this = _possibleConstructorReturn(this, (ProductShow.__proto__ || Object.getPrototypeOf(ProductShow)).call(this, props));\n\n    _this.state = {\n      screenWidth: 0\n    };\n\n    _this.renderImages = _this.renderImages.bind(_this);\n    _this.renderReviews = _this.renderReviews.bind(_this);\n    _this.renderCart = _this.renderCart.bind(_this);\n    _this.renderFeatures = _this.renderFeatures.bind(_this);\n    _this.updateWidth = _this.updateWidth.bind(_this);\n    _this.renderMobile = _this.renderMobile.bind(_this);\n    _this.renderNormal = _this.renderNormal.bind(_this);\n    return _this;\n  }\n\n  _createClass(ProductShow, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      this.updateWidth();\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.fetchProducts();\n      window.addEventListener('resize', this.updateWidth);\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      window.removeEventListener('resize', this.updateWidth);\n    }\n  }, {\n    key: 'updateWidth',\n    value: function updateWidth() {\n      var screenWidth = window.innerWidth;\n      this.setState({ screenWidth: screenWidth });\n    }\n  }, {\n    key: 'renderMobile',\n    value: function renderMobile(title) {\n      return _react2.default.createElement(\n        'div',\n        { id: 'product-show-mobile' },\n        _react2.default.createElement(\n          'div',\n          { className: 'show-component product-name' },\n          title\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'show-component product-images' },\n          this.renderImages()\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'show-component product-cart-container' },\n          this.renderCart()\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'show-component' },\n          this.renderFeatures()\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'show-component product-reviews-container' },\n          this.renderReviews()\n        )\n      );\n    }\n  }, {\n    key: 'renderNormal',\n    value: function renderNormal(title) {\n      return _react2.default.createElement(\n        'div',\n        { id: 'product-show-normal' },\n        _react2.default.createElement(\n          'div',\n          { className: 'product-show-split' },\n          _react2.default.createElement(\n            'div',\n            { className: 'show-component product-name' },\n            title\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'show-component product-images' },\n            this.renderImages()\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'show-component product-reviews-container' },\n            this.renderReviews()\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'product-show-split' },\n          _react2.default.createElement(\n            'div',\n            { className: 'show-component product-cart-container' },\n            this.renderCart()\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'show-component' },\n            this.renderFeatures()\n          )\n        )\n      );\n    }\n  }, {\n    key: 'renderCart',\n    value: function renderCart() {\n      var _props$product = this.props.product,\n          Offers = _props$product.Offers,\n          Promotions = _props$product.Promotions,\n          purchasingChannelCode = _props$product.purchasingChannelCode;\n\n\n      var promotions = Promotions.map(function (promo) {\n        return promo.Description[0].shortDescription;\n      }),\n          offers = {\n        price: Offers[0].OfferPrice[0].formattedPriceValue,\n        qualifier: Offers[0].OfferPrice[0].priceQualifier\n      };\n\n      return _react2.default.createElement(_product_cart2.default, {\n        promotions: promotions,\n        offers: offers,\n        code: purchasingChannelCode\n      });\n    }\n  }, {\n    key: 'renderImages',\n    value: function renderImages() {\n      var _props$product$Images = this.props.product.Images[0],\n          PrimaryImage = _props$product$Images.PrimaryImage,\n          AlternateImages = _props$product$Images.AlternateImages;\n\n      var images = AlternateImages.map(function (imgObj) {\n        return imgObj.image;\n      });\n      images.push(PrimaryImage[0].image);\n\n      return _react2.default.createElement(_product_images2.default, {\n        primaryImageIdx: images.length - 1,\n        images: images\n      });\n    }\n  }, {\n    key: 'renderReviews',\n    value: function renderReviews() {\n      var _props$product$Custom = this.props.product.CustomerReview[0],\n          consolidatedOverallRating = _props$product$Custom.consolidatedOverallRating,\n          Reviews = _props$product$Custom.Reviews,\n          Pro = _props$product$Custom.Pro,\n          Con = _props$product$Custom.Con;\n\n\n      return _react2.default.createElement(_product_reviews2.default, {\n        pro: Pro[0], con: Con[0],\n        rating: consolidatedOverallRating,\n        reviews: Reviews\n      });\n    }\n  }, {\n    key: 'renderFeatures',\n    value: function renderFeatures() {\n      var features = this.props.product.ItemDescription[0].features;\n\n      features = features.map(function (feature) {\n        return feature.split('<strong>').join(' ').split('</strong>').join(' ');\n      });\n\n      return _react2.default.createElement(_product_features2.default, { features: features });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      if (!this.props.product) {\n        return _react2.default.createElement(\n          'a',\n          null,\n          'Loading ...'\n        );\n      }\n\n      var title = this.props.product.title;\n      var screenWidth = this.state.screenWidth;\n\n      var mobile = screenWidth < 950 ? true : false;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        mobile ? this.renderMobile(title) : this.renderNormal(title)\n      );\n    }\n  }]);\n\n  return ProductShow;\n}(_react2.default.Component);\n\nexports.default = ProductShow;\n\n//# sourceURL=webpack:///./client/components/product/show/product_show.js?");

/***/ }),

/***/ "./client/components/product/show/product_show_demo_container.js":
/*!***********************************************************************!*\
  !*** ./client/components/product/show/product_show_demo_container.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _product_actions = __webpack_require__(/*! ../../../actions/product_actions */ \"./client/actions/product_actions.js\");\n\nvar _product_show = __webpack_require__(/*! ./product_show */ \"./client/components/product/show/product_show.js\");\n\nvar _product_show2 = _interopRequireDefault(_product_show);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n  var products = _ref.products;\n\n  var product = Object.keys(products).map(function (id) {\n    return products[id];\n  })[0];\n\n  return { product: product };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    fetchProducts: function fetchProducts() {\n      return dispatch((0, _product_actions.fetchProducts)());\n    }\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_product_show2.default);\n\n//# sourceURL=webpack:///./client/components/product/show/product_show_demo_container.js?");

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _App = __webpack_require__(/*! ./components/App */ \"./client/components/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _store = __webpack_require__(/*! ./store/store */ \"./client/store/store.js\");\n\nvar _store2 = _interopRequireDefault(_store);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var store = (0, _store2.default)();\n\n  _reactDom2.default.render(_react2.default.createElement(_App2.default, { store: store }), document.getElementById('root'));\n});\n\n//# sourceURL=webpack:///./client/index.js?");

/***/ }),

/***/ "./client/reducers/product_reducer.js":
/*!********************************************!*\
  !*** ./client/reducers/product_reducer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _product_actions = __webpack_require__(/*! ../actions/product_actions */ \"./client/actions/product_actions.js\");\n\nvar ProductReducer = function ProductReducer() {\n  var oldState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments[1];\n\n  Object.freeze(oldState);\n\n  switch (action.type) {\n    case _product_actions.RECEIVE_ALL_PRODUCTS:\n      var products = action.products;\n\n\n      return Object.assign({}, oldState, products);\n    default:\n      return oldState;\n  }\n};\n\nexports.default = ProductReducer;\n\n//# sourceURL=webpack:///./client/reducers/product_reducer.js?");

/***/ }),

/***/ "./client/reducers/root_reducer.js":
/*!*****************************************!*\
  !*** ./client/reducers/root_reducer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nvar _product_reducer = __webpack_require__(/*! ./product_reducer */ \"./client/reducers/product_reducer.js\");\n\nvar _product_reducer2 = _interopRequireDefault(_product_reducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n  products: _product_reducer2.default\n});\n\n//# sourceURL=webpack:///./client/reducers/root_reducer.js?");

/***/ }),

/***/ "./client/store/store.js":
/*!*******************************!*\
  !*** ./client/store/store.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _root_reducer = __webpack_require__(/*! ../reducers/root_reducer */ \"./client/reducers/root_reducer.js\");\n\nvar _root_reducer2 = _interopRequireDefault(_root_reducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar configureStore = function configureStore() {\n  var preloadedState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  return (0, _redux.createStore)(_root_reducer2.default, preloadedState, (0, _redux.applyMiddleware)(_reduxThunk2.default));\n};\n// import { logger } from 'redux-logger';\nexports.default = configureStore;\n\n//# sourceURL=webpack:///./client/store/store.js?");

/***/ }),

/***/ "./client/utils/date_parser.js":
/*!*************************************!*\
  !*** ./client/utils/date_parser.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar dateParser = function dateParser(dateString) {\n  var dateList = dateString.split(' ');\n\n  return {\n    month: dateList[1],\n    day: dateList[2],\n    year: dateList[5]\n  };\n};\n\nexports.default = dateParser;\n\n//# sourceURL=webpack:///./client/utils/date_parser.js?");

/***/ }),

/***/ "./client/utils/mod.js":
/*!*****************************!*\
  !*** ./client/utils/mod.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar realMod = function realMod(x, n) {\n  return (x % n + n) % n;\n};\n\nexports.default = realMod;\n\n//# sourceURL=webpack:///./client/utils/mod.js?");

/***/ }),

/***/ "./client/utils/product_api_util.js":
/*!******************************************!*\
  !*** ./client/utils/product_api_util.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar fetchProducts = exports.fetchProducts = function fetchProducts() {\n  return fetch('http://localhost:8000/products');\n};\n\n//# sourceURL=webpack:///./client/utils/product_api_util.js?");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/PedroPreciadoIII/Desktop/codingChallenges/Target/myRetail/my-retail/node_modules/react-dom/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/react-dom/index.js?");

/***/ }),

/***/ "./node_modules/react-icons/lib/fa/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-icons/lib/fa/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/PedroPreciadoIII/Desktop/codingChallenges/Target/myRetail/my-retail/node_modules/react-icons/lib/fa/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/react-icons/lib/fa/index.js?");

/***/ }),

/***/ "./node_modules/react-modal/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-modal/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/PedroPreciadoIII/Desktop/codingChallenges/Target/myRetail/my-retail/node_modules/react-modal/lib/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/react-modal/lib/index.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! exports provided: Provider, createProvider, connectAdvanced, connect */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/PedroPreciadoIII/Desktop/codingChallenges/Target/myRetail/my-retail/node_modules/react-redux/es/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/index.js?");

/***/ }),

/***/ "./node_modules/react-star-ratings/build/index.js":
/*!********************************************************!*\
  !*** ./node_modules/react-star-ratings/build/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/PedroPreciadoIII/Desktop/codingChallenges/Target/myRetail/my-retail/node_modules/react-star-ratings/build/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/react-star-ratings/build/index.js?");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/PedroPreciadoIII/Desktop/codingChallenges/Target/myRetail/my-retail/node_modules/react/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/react/index.js?");

/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/PedroPreciadoIII/Desktop/codingChallenges/Target/myRetail/my-retail/node_modules/redux-thunk/es/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/redux-thunk/es/index.js?");

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose, __DO_NOT_USE__ActionTypes */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/PedroPreciadoIII/Desktop/codingChallenges/Target/myRetail/my-retail/node_modules/redux/es/redux.js'\");\n\n//# sourceURL=webpack:///./node_modules/redux/es/redux.js?");

/***/ })

/******/ });