// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var addsrc = require('gulp-add-src');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var angularTemplates = require('gulp-angular-templatecache');
var shell = require('gulp-shell');
var minifyHTML = require('gulp-minify-html');
var ngAnnotate = require('gulp-ng-annotate');
var notify = require("gulp-notify");

//Task to Minify all vendors JSs
gulp.task('vendors', function(){
    gulp.src([
        'www/lib/angular/angular.min.js',
        'www/lib/angular-aria/angular-aria.min.js',
        'www/lib/angular-resource/angular-resource.min.js',
        'www/lib/angular-sanitize/angular-sanitize.min.js',
        'www/lib/angular-animate/angular-animate.min.js',
        'www/lib/angular-material/angular-material.min.js',
        'www/lib/angular-material-icons/angular-material-icons.min.js',
        'www/lib/angular-translate/angular-translate.min.js',
        'www/lib/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
        'www/lib/angular-touch/angular-touch.min.js',
        'www/lib/fastclick/lib/fastclick.js',
        'www/lib/ngCordova/dist/ng-cordova.min.js',
        'www/lib/angular-ui-router/release/angular-ui-router.min.js'

    ])
        .pipe(concat('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('www/js'))
        .pipe(notify("Vendors compiled"));

});

// Put HTML templates on Angular JS $templateCache to Speed Things up!
gulp.task('views', function () {
    return gulp.src('www/webapp/views/**/*.html')
        .pipe(minifyHTML({empty:true}))
        .pipe(angularTemplates('acs.tpls.min.js', {module:"AssemanyCordovaStarter", root:"webapp/views" }))
        .pipe(gulp.dest('www/js'))
        .pipe(notify("Views compiled"));
});

//Concatenate & Minify App
gulp.task('acs', function() {
    return gulp.src(['www/webapp/**/*.js', 'www/webapp/*/*.js'])
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        //.pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('www/js'))
        .pipe(notify("App compiled"));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['www/webapp/**/*.js','webapp/app/*/*.js'], ['acs']);
    gulp.watch('www/webapp/views/**/*.html', ['views']);
    gulp.watch('www/lib/*', ['vendors']);
});

//Build the app by executing all tasks
gulp.task('build', ['views', 'acs'])

// Default Task
gulp.task('default', ['watch']);
