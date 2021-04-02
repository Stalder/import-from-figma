"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.writeIcons = void 0;
var resource_1 = require("./resource");
var currentColor = 'black';
var currentColorRegexp = new RegExp(currentColor, 'g');
var namesMap = {};
function formatComponentName(name) {
    var words = name
        .replace(/[^a-z0-9]+/gi, ' ')
        .trim()
        .split(' ');
    return words.map(function (word) { return word.slice(0, 1).toLocaleUpperCase() + word.slice(1); }).join('');
}
function saveIcon(name, text) {
    if (!text) {
        console.log("incorrect icon: " + name);
        return;
    }
    var componentName = formatComponentName(name);
    var svgText = text.replace(currentColorRegexp, 'currentColor');
    if (namesMap[componentName]) {
        console.log("Name conflict: '" + name + "' and '" + namesMap[componentName] + "'");
        return;
    }
    namesMap[componentName] = name;
    var component = "\n    import React, { FC } from 'react'\n    \n    const " + componentName + ": FC<{}> = () => {\n        return <div\n        dangerouslySetInnerHTML={{\n          __html: `" + svgText + "`,\n        }}\n      />\n    }\n        \n    export { " + componentName + " }\n";
    resource_1.saveIconComponent(componentName, component);
    // saveIconSvg(componentName, svgText)
}
function writeIcons(icons) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            Object.keys(icons).forEach(function (key) { return saveIcon(key, icons[key]); });
            return [2 /*return*/];
        });
    });
}
exports.writeIcons = writeIcons;
