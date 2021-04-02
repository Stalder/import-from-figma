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
exports.generateDSL = void 0;
var node_fetch_1 = require("node-fetch");
var loader_1 = require("./loader");
var QUEUE_SIZE = 4;
function generateDSL(rawData) {
    return __awaiter(this, void 0, void 0, function () {
        var typographyPage, colorsPage, iconsPage, _a, _b, _c;
        var _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    typographyPage = rawData.document.children.find(function (page) { return page.name === 'Typography'; });
                    colorsPage = rawData.document.children.find(function (page) { return page.name === 'Colors'; });
                    iconsPage = rawData.document.children.find(function (page) { return page.name === 'Icons'; });
                    _d = {};
                    if (!typographyPage) return [3 /*break*/, 2];
                    return [4 /*yield*/, parseTypography(typographyPage.id)];
                case 1:
                    _a = _e.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = undefined;
                    _e.label = 3;
                case 3:
                    _d.typography = _a;
                    if (!colorsPage) return [3 /*break*/, 5];
                    return [4 /*yield*/, parseColors(colorsPage.id)];
                case 4:
                    _b = _e.sent();
                    return [3 /*break*/, 6];
                case 5:
                    _b = undefined;
                    _e.label = 6;
                case 6:
                    _d.colors = _b;
                    if (!iconsPage) return [3 /*break*/, 8];
                    return [4 /*yield*/, parseIcons(iconsPage.id)];
                case 7:
                    _c = _e.sent();
                    return [3 /*break*/, 9];
                case 8:
                    _c = undefined;
                    _e.label = 9;
                case 9: return [2 /*return*/, (_d.icons = _c,
                        _d)];
            }
        });
    });
}
exports.generateDSL = generateDSL;
function parseTypography(pageId) {
    return __awaiter(this, void 0, void 0, function () {
        var node, styles, textKeys, textNodes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loader_1.loadNode(pageId)];
                case 1:
                    node = _a.sent();
                    if (!(node === null || node === void 0 ? void 0 : node.styles)) {
                        return [2 /*return*/];
                    }
                    styles = node.styles;
                    textKeys = Object.keys(styles).filter(function (v) { return styles[v].styleType == 'TEXT'; });
                    return [4 /*yield*/, loader_1.loadNodes(textKeys)];
                case 2:
                    textNodes = (_a.sent())
                        .map(function (v) { return v.document; })
                        .map(function (v) { return (__assign({ name: v.name }, v.style)); });
                    return [2 /*return*/, textNodes];
            }
        });
    });
}
function parseColors(pageId) {
    return __awaiter(this, void 0, void 0, function () {
        var node, styles, fillKeys, nodes, colors;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loader_1.loadNode(pageId)];
                case 1:
                    node = _a.sent();
                    if (!(node === null || node === void 0 ? void 0 : node.styles)) {
                        return [2 /*return*/];
                    }
                    styles = node.styles;
                    fillKeys = Object.keys(styles).filter(function (v) { return styles[v].styleType == 'FILL'; });
                    return [4 /*yield*/, loader_1.loadNodes(fillKeys)];
                case 2:
                    nodes = _a.sent();
                    colors = nodes.map(function (node) { return node === null || node === void 0 ? void 0 : node.document; }).map(function (node) { return ({
                        name: node.name,
                        color: node.fills[0].color,
                        opacity: node.fills[0].opacity
                    }); });
                    return [2 /*return*/, colors];
            }
        });
    });
}
function parseIcons(pageId) {
    return __awaiter(this, void 0, void 0, function () {
        var node, components, ids, images, icons, queue, _loop_1, _i, ids_1, id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loader_1.loadNode(pageId)];
                case 1:
                    node = _a.sent();
                    if (!(node === null || node === void 0 ? void 0 : node.components)) {
                        return [2 /*return*/];
                    }
                    components = node.components;
                    ids = Object.keys(components);
                    return [4 /*yield*/, loader_1.loadSvgUrls(ids)];
                case 2:
                    images = (_a.sent()).data.images;
                    icons = {};
                    queue = [];
                    _loop_1 = function (id) {
                        var iconUrl, saveIconPromise;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    iconUrl = images[id];
                                    saveIconPromise = node_fetch_1["default"](iconUrl)
                                        .then(function (res) { return res.text(); })
                                        .then(function (iconText) { return icons[components[id].name] = iconText; })["catch"](function (e) { return console.log(e); });
                                    queue.push(saveIconPromise);
                                    if (!(queue.length === QUEUE_SIZE)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, Promise.all(queue)];
                                case 1:
                                    _b.sent();
                                    queue.length = 0;
                                    _b.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    };
                    _i = 0, ids_1 = ids;
                    _a.label = 3;
                case 3:
                    if (!(_i < ids_1.length)) return [3 /*break*/, 6];
                    id = ids_1[_i];
                    return [5 /*yield**/, _loop_1(id)];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    _i++;
                    return [3 /*break*/, 3];
                case 6: return [4 /*yield*/, Promise.all(queue)];
                case 7:
                    _a.sent();
                    return [2 /*return*/, icons];
            }
        });
    });
}
