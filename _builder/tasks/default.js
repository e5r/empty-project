// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    run = require('run-sequence'),

    log = gutil.log,
    tasks = [
        'clean',
        'build',
        'dist'
    ];

gulp.task('default', [], function () {
    log('~*~*~*~*~*~*~*~*~*~*~*~*~*~*~* E5R BUILDER STARTED *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~');
    run(tasks);
    log('~*~*~*~*~*~*~*~*~*~*~*~*~*~*~* E5R BUILDER FINISHED *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~');
});
