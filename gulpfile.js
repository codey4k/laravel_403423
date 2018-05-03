const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

const routes = {
    input : 'resources/assets/sass/app.scss',
    output : 'public/css'
}


gulp.task('sass', function(){
    gulp.src(routes.input)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest(routes.output))
})

gulp.task('default', ()=>{
    gulp.watch(routes.input, ['sass'])
})