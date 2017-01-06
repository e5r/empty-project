// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

var customTasksPath = './scripts/tasks',
    requireDir = require('require-dir'),
    e5rDev = require('e5r-dev');

requireDir('./_builder/tasks', { recurse: false });

if (e5rDev.directoryExists(customTasksPath)) {
    requireDir(customTasksPath, { recurse: true });
}
