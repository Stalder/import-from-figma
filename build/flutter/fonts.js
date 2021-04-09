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
exports.writeFonts = void 0;
var resource_1 = require("./resource");
var change_case_1 = require("change-case");
function formatFont(fontNode) {
    var italic = fontNode.italic, fontWeight = fontNode.fontWeight, fontSize = fontNode.fontSize, lineHeightPx = fontNode.lineHeightPx, fontFamily = fontNode.fontFamily;
    return "TextStyle(\n        fontFamily: '" + fontFamily + "',\n        fontSize: " + fontSize + ",\n        fontWeight: FontWeight.w" + fontWeight + ",\n        color: textColor,\n        letterSpacing: 0,\n      )";
}
function parseColorName(fullName) {
    return change_case_1.camelCase(fullName.replace(/[ -/%()+#,".]+/g, ''));
}
function writeFonts(typographies) {
    return __awaiter(this, void 0, void 0, function () {
        var typographyProps, content;
        return __generator(this, function (_a) {
            typographyProps = typographies
                .map(function (node) { return "  TextStyle get " + parseColorName(node.name) + " => " + formatFont(node) + ";"; })
                .join('\n\t');
            content = "// Generated by import-from-figma. Do not modify by hand\n\nimport 'package:flutter/widgets.dart';\n\nclass TextThemeValues {\n  static const sfText = 'SF-Text';\n  static const sfDisplay = 'SF-Display';\n\n  final Color textColor;\n\n  TextThemeValues({@required this.textColor});\n\n" + typographyProps + "\n}\n";
            resource_1.saveFonts('figma_typography', content);
            return [2 /*return*/];
        });
    });
}
exports.writeFonts = writeFonts;
