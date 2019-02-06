let gulp = require ('gulp'),
		sass = require ('gulp-sass'),
		concat = require('gulp-concat'),
		browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

function def () {
	return console.log ('Ready!');
}

function sassCompile () {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
		.pipe(concat('main.css'))
    .pipe(gulp.dest('app/css'));
};

function sync () {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
};

gulp.task ('default', def);
gulp.task ('sass-compile', sassCompile);
gulp.task ('browser-sync', sync);
gulp.task ('watch', function () {
	gulp.watch('app/scss/**/*.scss', gulp.series('sass-compile'));
});
