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
var reactstrap_2 = require("reactstrap");
require("bootstrap/dist/css/bootstrap.css");
var reactstrap_3 = require("reactstrap");
require("../../style/home.css");
var RobotRecord_1 = require("./RobotRecord");
var RobotTable = (function (_super) {
    __extends(RobotTable, _super);
    function RobotTable(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            has_records: false,
            robots: []
        };
        return _this;
    }
    RobotTable.prototype.render = function () {
        return (React.createElement("div", { className: "robot-table" },
            React.createElement(reactstrap_1.Container, null,
                React.createElement(reactstrap_1.Row, null,
                    React.createElement(reactstrap_1.Col, null,
                        React.createElement(reactstrap_3.Button, { color: "primary" }, "Fetch"))),
                React.createElement(reactstrap_1.Row, null,
                    React.createElement(reactstrap_1.Col, null,
                        React.createElement(reactstrap_2.Table, null,
                            React.createElement("thead", null,
                                React.createElement("tr", null,
                                    React.createElement("th", null, "Id"),
                                    React.createElement("th", null, "Name"),
                                    React.createElement("th", null, "Has sentience"),
                                    React.createElement("th", null, "Has wheels"),
                                    React.createElement("th", null, "Has tracks"),
                                    React.createElement("th", null, "Number of rotors"),
                                    React.createElement("th", null, "Color"))),
                            React.createElement(RobotRecord_1.default, { robots: this.state.robots })))))));
    };
    return RobotTable;
}(React.Component));
exports.default = RobotTable;
