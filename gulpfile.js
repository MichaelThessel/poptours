'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var webpack = require('gulp-webpack');
var del = require('del');

var sassPaths = ['styles/style.scss'];

/*
 * Compile and minimize SCSS
 */
gulp.task('sass:compile', function () {
    return gulp.src(sassPaths, {base: './'})
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./'));
});

/*
 * Watch scss files for changes
 */
gulp.task('sass:watch', function () {
    return gulp.watch(['styles/**/*.scss', 'app/**/*.scss'], ['sass:compile']);
});

/*
 * Clean build directory
 */
gulp.task('clean', function () {
    return del('dist/**/*')
});

/*
 * Compile Typescript
 */
gulp.task('pack', function () {
    return gulp.src('app/main.js')
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest('dist/'));
});

/*
 * Copy libs
 */
gulp.task('copy:libs', ['clean'], function () {
    return gulp
        .src([
            'node_modules/**/*'
        ])
        .pipe(gulp.dest('dist/node_modules'));
});
/*
 * Copy assets
 */
gulp.task('copy:assets', ['clean'], function() {
    return gulp
        .src(['app/**/*', '!app/**/*.ts', 'bundle.js', 'index.html', 'styles/style.css', 'media/**/*' , 'fonts/**/*'], { base : './' })
        .pipe(gulp.dest('dist'));
});


// Build the app for deployment
gulp.task('build', ['pack', 'sass:compile', 'copy:libs', 'copy:assets']);
