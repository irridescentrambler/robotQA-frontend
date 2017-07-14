"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
exports.incrementCounter = function (delta) { return ({
    type: 'INCREMENT_COUNTER',
    delta: delta,
}); };
exports.resetCounter = function () { return ({
    type: 'RESET_COUNTER',
}); };
var initialState = {
    value: 0,
};
function counter(state, action) {
    if (state === void 0) { state = initialState; }
    var value = state.value;
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            var newValue = value + action.delta;
            return { value: newValue };
        case 'RESET_COUNTER':
            return { value: 0 };
    }
    return state;
}
var store = redux_1.createStore(counter);
