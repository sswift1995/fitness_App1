"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var App_1 = require("./App");
var react_router_dom_1 = require("react-router-dom");
var rootElement = document.getElementById('root'); // Add the type here
var root = react_dom_1["default"].createroot(rootElement);
root.render(react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
    react_1["default"].createElement(App_1["default"], { id: undefined })));
