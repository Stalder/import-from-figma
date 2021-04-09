import { Config } from "./config"
import { generateDSL } from "./dsl"
import { generateFlutterArtifacts } from "./flutter/flutter_generator"
import { initializeFlutterResource } from "./flutter/resource"
import { initializeLoader, loadRoot } from "./loader"

import { generateReactArtifacts } from "./react/react_generator"
import { initializeReactResource } from "./react/resource"

async function importFromFigma(config: Config) {
    initializeLoader(config);

    const { data } = await loadRoot()
    const { typography, colors, icons } = await generateDSL(data)

    if (config.exportType == 'react') {
        initializeReactResource(config)
        generateReactArtifacts(typography, colors, icons);
    } else if (config.exportType == 'flutter') {
        initializeFlutterResource(config)
        generateFlutterArtifacts(typography, colors, icons);
    }
}

export { importFromFigma }