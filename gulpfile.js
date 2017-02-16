// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

var customTasksPath = './scripts/tasks',
    requireDir = require('require-dir'),
    fs = require('fs');

requireDir('./_builder/tasks', { recurse: false });

if (fs.existsSync(customTasksPath)) {
    requireDir(customTasksPath, { recurse: true });
}
