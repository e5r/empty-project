// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0.
// More license information in https://github.com/e5r/licenses/blob/master/notices/empty-project.rst.

var fs = require('fs'),
    path = require('path'),
    buildMetaFilePath = path.join(path.dirname(module.filename), '../build.json'),
    buildMeta;

function loadBuildMeta() {
    if (!buildMeta && fs.existsSync(buildMetaFilePath)) {
        try {
            buildMeta = require(buildMetaFilePath);
        } catch (_) { }
    }

    return buildMeta || {};
}

module.exports.loadTasks = function () {
    return buildMeta || loadBuildMeta();
}
