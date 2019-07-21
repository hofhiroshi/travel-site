var gulp = require('gulp'), 
postcss = require('gulp-postcss'), 
autoprefixer = require('autoprefixer'), 
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'), 
cssImport = require('postcss-import');


gulp.task('styles', function(){
    console.log('processing post css tasks');
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});