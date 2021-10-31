'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class, _temp, _initialiseProps;

/* style */

/* password strength check */

/* react bootstrap */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./styles.css');

var _zxcvbn = require('zxcvbn');

var _zxcvbn2 = _interopRequireDefault(_zxcvbn);

require('bootstrap/dist/css/bootstrap.min.css');

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = (_temp = _class = function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component(props) {
    _classCallCheck(this, Component);

    var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, props));

    _initialiseProps.call(_this);

    var init = {
      psh_true: { show: true, type: "text" },
      psh_false: { show: false, type: "password" }
    };

    _this.state = {
      valid: false,
      loading: false,
      init: init,
      psh: init.psh_false /* password show hide logic : state */
    };
    return _this;
  }

  return Component;
}(_react2.default.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleShowHideButton = function () {
    var init = _this2.state.init;
    var psh = _this2.state.psh;

    if (!psh.show) _this2.setState({ psh: init.psh_true });
    if (psh.show) _this2.setState({ psh: init.psh_false });
  };

  this.handleShowHideCaption = function () {
    var show = _this2.state.psh.show +1;
    if (!show) return _this2.props.option.showhide_caption.show;
    return _this2.props.option.showhide_caption.hide;
  };

  this.render = function () {

    var invalid = _this2.props.invalid;

    return _react2.default.createElement(
      _reactstrap.InputGroup,
      null,
      _react2.default.createElement(_reactstrap.Input, { invalid: invalid, onChange: _this2.props.onChange, name: _this2.props.config.name.password, type: _this2.state.psh.type, className: _this2.props.option.css_input.password, placeholder: _this2.props.option.placeholder.password }),
      _react2.default.createElement(
        _reactstrap.InputGroupAddon,
        { onClick: _this2.handleShowHideButton.bind(_this2), addonType: 'append', className: 'tx-login-password-show-hide-button' },
        _this2.handleShowHideCaption()
      )
    );
  };
}, _temp);


Component.defaultProps = {
  // config
  config: {
    name: {
      password: "password"
    },
    label: {
      password: "Password"
    },
    types: {
      password: "password"
    }
  },
  // option
  option: {
    showhide_caption: {
      show: '+1',
      hide: '+1'
    },
    placeholder: {
      password: ""
    },
    css_input: {
      password: "tx-login-input-style"
    }
  }
};

exports.default = Component;

//# sourceMappingURL=index.js.map
