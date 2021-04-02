"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var importFromFigma_1 = require("./importFromFigma");
dotenv.config();
importFromFigma_1.importFromFigma({
    figmaToken: process.env.FIGMA_TOKEN,
    projectId: process.env.DOCUMENT_ID,
    exportType: 'react',
    outputDir: './generated'
});
