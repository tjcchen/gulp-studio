/**
 * Describe all of our gulp tasks
 */
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

/*
    -- TOP LEVEL FUNCTIONS --
    gulp.task  - Define tasks
    gulp.src   - Point to files to use
    gulp.dest  - Point to folder to output
    gulp.watch - Watch files and folders for changes
*/

// logs message
// cmd: gulp message
gulp.task('message', () => {
    return console.log('gulp is running...');
});

// // copy all HTML pages
gulp.task('copyHtml', () => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

// optimize images
gulp.task('imageMin', () => {
    gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
});

// cmd: gulp
gulp.task('default', function() {
    return console.log('gulp is running...');
});