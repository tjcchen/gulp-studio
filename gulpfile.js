/**
 * Describe all of our gulp tasks
 */
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
// const imagemin = require('gulp-imagemin');

/*
    -- TOP LEVEL FUNCTIONS --
    gulp.task  - Define tasks
    gulp.src   - Point to files to use
    gulp.dest  - Point to folder to output
    gulp.watch - Watch files and folders for changes
*/

// logs message
// cmd: gulp message
gulp.task('message', (done) => {
    console.log('gulp is running...');
    done();
});

// copy all HTML pages
gulp.task('copyHtml', (done) => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
    done();
});

// optimize images
// gulp.task('imageMin', () => {
//     gulp.src('src/images/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('dist/images'))
// });

// compress js files
// cmd: gulp minify
gulp.task('minify', (done) => {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
    done();
});

// compile sass
gulp.task('sass', (done) => {
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
    done();
});

// cmd: gulp
// run a group of tasks in one task
gulp.task('default', gulp.series('message', 'copyHtml', 'minify', 'sass'));
