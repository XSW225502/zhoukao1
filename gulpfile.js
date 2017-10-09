var gulp = require('gulp');
var minjs = require('gulp-uglify');
var concat = require('gulp-concat');
var mincss = require('gulp-clean-css');
var connet = require('gulp-connect');
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
gulp.task('mincss',function(){
    gulp.src('style.css')
    .pipe(mincss())
    .pipe(gulp.dest('./css/'));
})
gulp.task('connect',function(){
    gulp.src(['./js/c.js','./css/style.css'])
         connet.server({
             port:8080,
             livereload:true
         })
})
gulp.task('default',['minjs','concat','mincss','connect'])