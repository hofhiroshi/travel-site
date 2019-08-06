var gulp = require('gulp'), 
postcss = require('gulp-postcss'), 
autoprefixer = require('autoprefixer'), 
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'), 
cssImport = require('postcss-import'), 
mixins = require('postcss-mixins'), 
hexrgba = require('postcss-hexrgba');

/* function swallowError (error){
    console.log(error.toString());
    this.emit('end');
}

gulp.task('styles', function(){
    console.log('processing post css tasks');
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .on('error', swallowError)
    .pipe(gulp.dest('./app/temp/styles'));
}); */

gulp.task('styles', function(){
    console.log('processing post css tasks');
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba ,autoprefixer]))
    .on('error', function(errorInfo){
        console.log(errorInfo.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});



