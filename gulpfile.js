'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var sassPaths = ['styles/style.scss'];

gulp.task('sass', function () {
  return gulp.src(sassPaths, {base: './'})
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./'));
});

gulp.task('sass:watch', function () {
  gulp.watch('styles/**/*.scss', ['sass']);
});
