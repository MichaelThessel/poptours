'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var tscConfig = require('./tsconfig.json');

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
gulp.task('ts:compile', ['clean'], function () {
    return gulp
        .src('app/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/app'));
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
        .src(['app/**/*', 'index.html', 'systemjs.config.js', 'styles/style.css', '!app/**/*.ts', 'media/**/*' , 'fonts/**/*'], { base : './' })
        .pipe(gulp.dest('dist'));
});


// Build the app for deployment
gulp.task('build', ['sass:compile', 'ts:compile', 'copy:libs', 'copy:assets']);
