// two ways to create variables: 
// var gulp = require('gulp');
// var watch = require('gulp-watch');

var gulp = require('gulp'), 
watch = require('gulp-watch'), 
postcss = require('gulp-postcss'), 
autoprefixer = require('autoprefixer'), 
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'), 
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();

gulp.task('default', function(){
    console.log("Hoory - you created a Gulp task. ")
});

gulp.task('html', function(){
    console.log("imagdine something useful being done to your HTML here"); 
});

gulp.task('styles', function(){
    console.log('processing post css tasks');
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});


gulp.task('watch', function(){

    browserSync.init({
        notify: false, 
        server: {
            baseDir: "app"
        }
    })

    watch('./app/index.html', function(){
        browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('cssInject');
    });

});

gulp.task('cssInject', ['styles'], function(){
    console.log('starting csInject task');
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
    
        