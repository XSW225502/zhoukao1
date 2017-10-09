var gulp = require('gulp');
var minjs = require('gulp-uglify');
var concat = require('gulp-concat');
gulp.task('minjs',function(){
    gulp.src(['./a.js','./b.js'])
        .pipe(minjs())
        .pipe(gulp.dest('./js/'));
})
gulp.task('concat',function(){
    gulp.src(['./js/a.js','./js/b.js'])
    .pipe(concat('c.js'))
    .pipe(gulp.dest('./js/'));
})
gulp.task('default',['minjs','concat'])