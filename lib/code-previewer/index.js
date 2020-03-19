"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var XobjectWidgets = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(XobjectWidgets, _Component);

  function XobjectWidgets() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = XobjectWidgets.prototype;

  _proto.render = function render() {
    return _react["default"].createElement("div", {
      className: "code-preview-container"
    }, _react["default"].createElement("div", {
      className: "cp-component"
    }, _react["default"].createElement("div", {
      className: "component-header"
    }, "header"), _react["default"].createElement("div", {
      className: "component-content"
    }, "content"), _react["default"].createElement("div", {
      className: "component-footer"
    }, "footer")), _react["default"].createElement("div", {
      className: "cp-code"
    }, _react["default"].createElement("div", {
      className: "code-header"
    }, "code header"), _react["default"].createElement("div", {
      className: "code-tabs"
    }, "code tabs"), _react["default"].createElement("div", {
      className: "code-content"
    }, "code content")));
  };

  return XobjectWidgets;
}(_react.Component);

exports["default"] = XobjectWidgets;
//# sourceMappingURL=index.js.map