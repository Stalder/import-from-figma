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
exports.saveIconSvg = exports.saveIconComponent = exports.saveFontsCss = exports.saveColorTheme = exports.initializeReactResource = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var shelljs_1 = require("shelljs");
var prettier_1 = require("prettier");
var BASE_FOLDER;
var FONTS_FOLDER;
var COLORS_FOLDER;
var ICONS_FOLDER;
var BASE_PRETTIER_CONFIG = {
    printWidth: 100,
    singleQuote: true,
    tabWidth: 2,
    useTabs: false,
    trailingComma: 'es5',
    semi: false
};
var TS_PRETTIER_CONFIG = __assign(__assign({}, BASE_PRETTIER_CONFIG), { parser: 'babel' });
var CSS_PRETTIER_CONFIG = __assign(__assign({}, BASE_PRETTIER_CONFIG), { parser: 'css' });
function initializeReactResource(config) {
    var outputDir = config.outputDir, iconsDir = config.iconsDir, colorsDir = config.colorsDir, typographyDir = config.typographyDir;
    BASE_FOLDER = outputDir;
    FONTS_FOLDER = typographyDir ? path_1.join(BASE_FOLDER, typographyDir) : path_1.join(BASE_FOLDER, 'css', 'fonts');
    COLORS_FOLDER = colorsDir ? path_1.join(BASE_FOLDER, colorsDir) : path_1.join(BASE_FOLDER, 'css', 'colors');
    ICONS_FOLDER = iconsDir ? path_1.join(BASE_FOLDER, iconsDir) : path_1.join(BASE_FOLDER, 'icons');
    fs_1.rmdirSync(FONTS_FOLDER, { recursive: true });
    fs_1.rmdirSync(COLORS_FOLDER, { recursive: true });
    fs_1.rmdirSync(ICONS_FOLDER, { recursive: true });
    shelljs_1.mkdir('-p', FONTS_FOLDER);
    shelljs_1.mkdir('-p', COLORS_FOLDER);
    shelljs_1.mkdir('-p', ICONS_FOLDER);
}
exports.initializeReactResource = initializeReactResource;
function saveColorTheme(name, content) {
    var formattedContent = prettier_1.format(content, CSS_PRETTIER_CONFIG);
    fs_1.writeFileSync(path_1.join(COLORS_FOLDER, name + ".css"), formattedContent, {
        encoding: 'utf-8'
    });
}
exports.saveColorTheme = saveColorTheme;
function saveFontsCss(content) {
    var formattedContent = prettier_1.format(content, CSS_PRETTIER_CONFIG);
    fs_1.writeFileSync(path_1.join(FONTS_FOLDER, 'common.css'), formattedContent, {
        encoding: 'utf-8'
    });
}
exports.saveFontsCss = saveFontsCss;
function saveIconSvg(name, content) {
    fs_1.writeFileSync(path_1.join(ICONS_FOLDER, name + ".svg"), content, {
        encoding: 'utf-8'
    });
}
exports.saveIconSvg = saveIconSvg;
function saveIconComponent(name, content) {
    var formattedContent = prettier_1.format(content, TS_PRETTIER_CONFIG);
    fs_1.writeFileSync(path_1.join(ICONS_FOLDER, name + ".tsx"), formattedContent, {
        encoding: 'utf-8'
    });
}
exports.saveIconComponent = saveIconComponent;
