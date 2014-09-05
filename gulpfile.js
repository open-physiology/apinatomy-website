var gulp = require('gulp'),
    sass = require('gulp-sass'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber');

function masterPlumber() {
    return plumber(function(err) {
        gutil.log(gutil.colors.red(err.message));
        this.emit('end');
    });
}

/////////

var NO_LIB = ['!bower_components/**/*.*', '!node_modules/**/*.*'];

/////////

gulp.task('sass', function (callback) {
    gulp.src(['**/*.scss'].concat(NO_LIB))
        .pipe(masterPlumber())
        .pipe(sass())
        .pipe(plumber.stop())
        .pipe(gulp.dest('.'))
        .on('end', callback);
});

gulp.task('build', ['sass']);

gulp.task('watch', function () {
    gulp.watch(['**/*.scss'].concat(NO_LIB), ['sass']);
});
