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
        },
				notify: false
    });
};

gulp.task ('default', def);
gulp.task ('sass-compile', sassCompile);
gulp.task ('browser-sync', sync);
gulp.task ('watch', function () {
	sync ();
	gulp.watch('app/scss/**/*.scss', gulp.series('sass-compile'));
	gulp.watch('app/*.html').on('change', browserSync.reload);
	gulp.watch('app/css/*.css').on('change', browserSync.reload);
});
