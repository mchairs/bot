var gulp = require('gulp');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');
var eslint = require('gulp-eslint');
var clean = require('gulp-clean');
var istanbul = require('gulp-istanbul');
var isparta = require('isparta');

gulp.task('start', () => {
    return nodemon({
        script: 'src/server/server.js',
        watch: 'src',
        env: {
            'NODE_ENV': 'development'
        }
    });
});

gulp.task('default', ['start']);

gulp.task('test', function() {
    gulp.src(['./src/**/*.spec.js'], {read: false})
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('lint', () => {
    gulp.src(['src/**/*.js', 'tests/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('check', ['lint', 'cover']);

gulp.task('clean-cover', () => gulp.src(['coverage'], {read:false}).pipe(clean()));

gulp.task('cover', ['clean-cover'], () => {
    gulp.src(['src/**/*.js', '!src/**/*.spec.js'])
        .pipe(istanbul({
            instrumenter: isparta.Instrumenter,
            includeUntested: true
        }))
        .pipe(istanbul.hookRequire())
        .on('finish', () => {
            gulp.src('src/**/*.spec.js', {read: false})
            .pipe(mocha({
                reporter: 'nyan'
            }))
            .pipe(istanbul.writeReports({
                dir: 'coverage',
                reportOpts: {dir: 'coverage'},
                reporters: ['lcov', 'text', 'text-summary', 'json', 'html']
            }));
        });
});
