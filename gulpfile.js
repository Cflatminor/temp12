let gulp = require ('gulp'),
		sass = require ('gulp-sass'),
		concat = require ('gulp-concat'),
		autoprefixer = require ('gulp-autoprefixer'),
		browserSync = require ('browser-sync').create();

sass.compiler = require ('node-sass');

function def () {
	return console.log ('Ready!');
};

function sassCompile () {
  return gulp.src ('app/scss/**/*.scss')
    .pipe (sass.sync ().on('error', sass.logError))
		.pipe (autoprefixer (['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
		.pipe (concat ('main.css'))
    .pipe (gulp.dest ('app/css'));
};

function concatJs () {
	return gulp.src ('app/js/index.js')
		.pipe (concat ('app.min.js'))
		.pipe (gulp.dest ('app/js'));
};

function sync () {
    browserSync.init ({
        server: {
            baseDir: "app"
        },
				notify: false
    });
};

gulp.task ('default', def);
gulp.task ('sass-compile', sassCompile);
gulp.task ('js-concat', concatJs);
gulp.task ('browser-sync', sync);
gulp.task ('watch', function () {
	sync ();
	gulp.watch('app/scss/**/*.scss', gulp.series('sass-compile'));
	// gulp.watch(['app/js/**/*.js', '!app/js/app.min.js'], gulp.series('js-concat'));
	gulp.watch('app/*.html').on('change', browserSync.reload);
	gulp.watch('app/css/*.css').on('change', browserSync.reload);
	gulp.watch(['app/js/main.js',
							'app/js/createElements.js',
							'app/js/arrays.js',
							'app/js/task.js',
							'app/js/queries.js',
							'app/js/objects.js',
							'app/js/animation.js'])
							.on('change', browserSync.reload);
});
