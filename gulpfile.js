var gulp = require('gulp');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');
var eslint = require('gulp-eslint');
var jscs = require('gulp-jscs');
var babelC = require('babel-core/register');
var babel = require('gulp-babel');

gulp.task('compile', () => {
  gulp.src(['bot/**/*.js', 'server.js'])
      .pipe(babel())
      .pipe(gulp.dest('dist'));
});

gulp.task('start', ['compile'], () => {
  nodemon({
    script: 'dist/server.js',
    ext: 'js',
    tasks: ['compile'],
    env: {
      'NODE_ENV': 'development'
    }
  });
});

gulp.task('default', ['start']);

gulp.task('test', () => {
  return gulp.src(['tests/**/*.js'], {
    read: false
  }).pipe(mocha({
    reporter: 'nyan',
    compilers: {
      js: babelC
    }
  }));
});

gulp.task('lint', () => {
  return gulp.src(['bot/**/*.js', 'tests/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('style', () => {
  return gulp.src(['bot/**/*.js', 'tests/**/*.js'])
    .pipe(jscs())
    .pipe(jscs.reporter());
});
