/**
 * Describe all of our gulp tasks
 */
const gulp = require('gulp');

/*
    -- TOP LEVEL FUNCTIONS --
    gulp.task  - Define tasks
    gulp.src   - Point to files to use
    gulp.dest  - Point to folder to output
    gulp.watch - Watch files and folders for changes
*/

// Logs message
// cmd: gulp message
gulp.task('message', () => {
    return console.log('gulp is running...');
});

// copy all HTML pages
gulp.task('copyHtml', () => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

// cmd: gulp
gulp.task('default', function() {
    return console.log('gulp is running...');
});