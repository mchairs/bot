var gulp = require('gulp');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');
var eslint = require('gulp-eslint');
var jscs = require('gulp-jscs');

gulp.task('default', function() {
  nodemon({
    script: 'server.js',
    ext: 'js html',
    env: {
      'NODE_ENV': 'development'
    }
  });
});

gulp.task('test', function() {
  return gulp.src(['tests/**.js'], {
    read: false
  }).pipe(mocha({
    reporter: 'nyan'
  }));
});

gulp.task('lint', function() {
  return gulp.src(['bot/**/*.js', 'tests/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('style', function() {
  return gulp.src(['bot/**/*.js', 'tests/**/*.js'])
    .pipe(jscs())
    .pipe(jscs.reporter());
});
