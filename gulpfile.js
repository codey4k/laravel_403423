const gulp = require('gulp'),
    sass = require('gulp-sass')

const routes = {
    input : 'resources/assets/sass/app.scss',
    output : 'public/css'
}


gulp.task('sass', function(){
    gulp.src(routes.input)
        .pipe(sass())
        .pipe(gulp.dest(routes.output))
})

gulp.task('default', ()=>{
    gulp.watch(routes.input, ['sass'])
})