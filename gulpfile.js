let gulp = require ('gulp'),
		sass = require ('gulp-sass');

function def () {
	return console.log ('Ready!');
}

gulp.task ('default', def);
