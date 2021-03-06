// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0.
// More license information in https://github.com/e5r/licenses/blob/master/notices/empty-project.rst.

var util = require('../util'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    run = require('run-sequence'),

    log = gutil.log,
    tasks = util.loadTasks().distTasks || [];

gulp.task('dist', [], function () {
    if (0 < tasks.length) {
        run.apply(run, tasks);
    }
});
