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
var RobotRecord = (function (_super) {
    __extends(RobotRecord, _super);
    function RobotRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RobotRecord.prototype.render = function () {
        var robots = this.props.robots.map(function (robot) {
            return (React.createElement("tr", null,
                React.createElement("td", null, robot.id),
                React.createElement("td", null, robot.name),
                React.createElement("td", null, robot.has_sentience),
                React.createElement("td", null, robot.has_wheels),
                React.createElement("td", null, robot.has_tracks),
                React.createElement("td", null, robot.number_of_rotors),
                React.createElement("td", null, robot.color)));
        });
        return (React.createElement("tbody", null, robots));
    };
    return RobotRecord;
}(React.Component));
exports.default = RobotRecord;
