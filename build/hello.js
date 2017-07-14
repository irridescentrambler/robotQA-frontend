"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var reactstrap_1 = require("reactstrap");
require("bootstrap/dist/css/bootstrap.css");
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            on: true
        };
        _this.changeState = _this.changeState.bind(_this);
        _this.getState = _this.getState.bind(_this);
        return _this;
    }
    Hello.prototype.changeState = function () {
        this.setState({
            on: !this.state.on
        });
    };
    Hello.prototype.getState = function () {
        return this.state.on;
    };
    Hello.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(reactstrap_1.Button, { onClick: this.changeState, color: "danger" }, "Click me"),
            React.createElement("h1", null,
                " State is ",
                "'" + this.state.on + "'")));
    };
    return Hello;
}(React.Component));
exports.default = Hello;
