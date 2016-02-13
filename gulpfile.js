var gulp = require('gulp');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');
var eslint = require('gulp-eslint');
var jscs = require('gulp-jscs');
var babelC = require('babel-core/register');
var babel = require('gulp-babel');
var clean = require('gulp-clean');
var Cache = require('gulp-file-cache');
var istanbul = require('gulp-istanbul');
var isparta = require('isparta');

gulp.task('clean', () => {
  gulp.src(['dist', '.gulp-cache'], {read:false}).pipe(clean());
});

var cache = new Cache();

gulp.task('compile', () => {
  return gulp.src(['src/**/*.js'])
      .pipe(cache.filter())
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(cache.cache())
      .pipe(gulp.dest('./dist'));
});

gulp.task('start', ['compile'], () => {
  return nodemon({
    script: 'dist/server/server.js',
    watch: 'src',
    tasks: ['compile'],
    env: {
      'NODE_ENV': 'development'
    }
  });
});

gulp.task('default', ['start']);

gulp.task('test', () => {
  gulp.src(['test/**/*.js'], {
    read: false
  }).pipe(mocha({
    reporter: 'nyan',
    compilers: {
      js: babelC
    }
  }));
});

gulp.task('lint', () => {
  gulp.src(['src/**/*.js', 'tests/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('style', () => {
  gulp.src(['src/**/*.js', 'tests/**/*.js'])
    .pipe(jscs())
    .pipe(jscs.reporter());
});

gulp.task('clean-coverage', () => gulp.src(['coverage'], {read:false}).pipe(clean()));

gulp.task('coverage', ['clean-coverage'], () => {
  gulp.src(['src/**/*.js'])
    .pipe(istanbul({
      instrumenter: isparta.Instrumenter,
      includeUntested: true
    }))
    .pipe(istanbul.hookRequire())
    .on('finish', () => {
      gulp.src('test/**/*.js', {read: false})
        .pipe(mocha({
          reporter: 'nyan',
          compilers: {
            js: babelC
          }
        }))
       .pipe(istanbul.writeReports({
           dir: 'coverage',
           reportOpts: {dir: 'coverage'},
           reporters: ['text', 'text-summary', 'json', 'html']
       }));
    });
});
