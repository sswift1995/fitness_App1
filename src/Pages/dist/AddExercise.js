"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var material_1 = require("@mui/material");
var Event_1 = require("@mui/icons-material/Event");
var x_date_pickers_1 = require("@mui/x-date-pickers");
var AdapterDateFns_1 = require("@mui/x-date-pickers/AdapterDateFns");
var AddExercise = function () {
    var navigate = react_router_dom_1.useNavigate();
    var _a = react_1.useState(null), selectedDate = _a[0], setSelectedDate = _a[1];
    var _b = react_1.useState(''), date = _b[0], setDate = _b[1];
    var handleDateChange = function (date) {
        setSelectedDate(date);
        setDate(date ? date.toISOString().slice(0, 10) : '');
    };
    var handleSubmit = function (event) {
        event.preventDefault();
        // Rest of the code...
        // You can use selectedDate as needed in your data object.
    };
    return (react_1["default"].createElement("div", { style: { padding: '50px' } },
        react_1["default"].createElement("h3", null, "Add an exercise"),
        react_1["default"].createElement("form", { onSubmit: handleSubmit },
            react_1["default"].createElement(x_date_pickers_1.LocalizationProvider, { dateAdapter: AdapterDateFns_1.AdapterDateFns },
                react_1["default"].createElement(x_date_pickers_1.DatePicker, { label: "Date", value: selectedDate, onChange: handleDateChange, renderInput: function (params) { return (react_1["default"].createElement(material_1.TextField, __assign({}, params, { name: "date", id: "date", variant: "standard", required: true, InputProps: {
                            startAdornment: (react_1["default"].createElement(material_1.InputAdornment, { position: "start" },
                                react_1["default"].createElement(Event_1["default"], null)))
                        }, sx: { width: '200px', height: '56px' } }))); } })))));
};
exports["default"] = AddExercise;
