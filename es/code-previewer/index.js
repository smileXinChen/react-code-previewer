import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { Component } from 'react';

var XobjectWidgets = /*#__PURE__*/function (_Component) {
  _inheritsLoose(XobjectWidgets, _Component);

  function XobjectWidgets() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = XobjectWidgets.prototype;

  _proto.render = function render() {
    return React.createElement("div", {
      className: "code-preview-container"
    }, React.createElement("div", {
      className: "cp-component"
    }, React.createElement("div", {
      className: "component-header"
    }, "header"), React.createElement("div", {
      className: "component-content"
    }, "content"), React.createElement("div", {
      className: "component-footer"
    }, "footer")), React.createElement("div", {
      className: "cp-code"
    }, React.createElement("div", {
      className: "code-header"
    }, "code header"), React.createElement("div", {
      className: "code-tabs"
    }, "code tabs"), React.createElement("div", {
      className: "code-content"
    }, "code content")));
  };

  return XobjectWidgets;
}(Component);

export { XobjectWidgets as default };
//# sourceMappingURL=index.js.map