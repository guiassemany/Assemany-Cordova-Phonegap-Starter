# Assemany Cordova/Phonegap Starter


## What is it?

This is a repo for a starter application featuring the acclaimed front-end framework AngularJS and the Cordova/Phonegap technology to make Hybrid Apps. Just clone this repo, install and you have a good foundation for building any application.

#### Features:

* Angular Material (https://material.angularjs.org/)
* Gulp (http://gulpjs.com/)
* Best Angular Modules.


## How to install

Installation proccess is very simple.

You must have:
* [node/npm](https://nodejs.org/en/download/),
* [git](http://git-scm.org/),
* Bower
* Gulp.

And I recommend installing Bower and Gulp globally: (If you already have these tools, running this command will update them.)

```code
npm install -g bower
```
```code
npm install -g gulp
```

#### With these tools ready, go inside the project directory
```code
cd Assemany-Cordova-Phonegap-Starter (Or the directory you put the files in)
```
And run:
```code
npm install
```
And after that
```code
bower install
```

And thats it. You can start developing you own app.


## Basic Development Workflow

Open the terminal at project folder:

Run: `gulp watch` - Read below for more information about this task.

Run: `phonegap serve` or `cordova serve` to view the app on browser.

If you want to preview on your phone, read the section below.

Edit/Create files as you normally would with your favorite editor/IDE.

All changes detected will trigger a specific gulp task to compile the necessary files for the app.

If previewing on browser, the browser will automatically reload after a change was made. This feature **will not** work with `cordova serve`. I will try to fix it later.



## Device Preview


Make sure to add the platform you wish, but before, check if its not already added.

With these commands you can verify which platforms are installed and available:
* `phonegap platform ls` or `cordova platform ls`

**Note: If you are on a windows machine, you can remove iOS platform by running `phonegap platform rm ios` or `cordova platform rm ios`**

And then, if your device is plugged in your computer, with proper configurations(SDK, Debug Mode), running the commands bellow will install the app on your device.

If no device is found, then you will need to have an emulator for the desired platform.

* `cordova run android`
* `phonegap run android`
* `cordova run ios`
* `phonegap run ios`

In case you are using Phonegap, an alternative is to download the [Phonegap Developer App](http://app.phonegap.com/). It is a fast way to preview apps on your phone skipping all the needed configs.





## Available Gulp Tasks


### Gulp Watch
```code
gulp watch
```
This command will watch for file changes at:
* www/webapp/\*\*/*.js - If a file change here, it will automatically execute `gulp acs`
* www/webapp/views/\*\*/*.html - If a file change here, it will automatically execute `gulp views`
* www/lib/* - If a file change here, it will automatically execute `gulp vendors`

If any changes are detected, the respective task will be called.

---

### Gulp Build
```code
gulp build
```
This task will run gulp acs and gulp views.

---

### Gulp Acs
```code
gulp acs
```

This taks will compile all Javascript of the application (That can be found here -> 'www/webapp') into a single file called 'app.min.js' that will be located at 'www/js' folder.
Thats that only file we need to call on our index.html.

If you edit your js files, dont forget to run this task. Of course, if you are running **gulp watch**, the views will be automatically compiled when a change is detected.

---

### Gulp Views
```code
gulp views
```

This task will compile the views into a single file called 'acs.tpls.min.js'. The application will look for this file when point to a view. In this case, we are using angular-template-cache to make things faster.

If you change your views, dont forget to run this task. Of course, if you are running **gulp watch**, the views will be automatically compiled when a change is detected.

---


### Gulp Vendors
```code
gulp vendors
```

This task will compile all vendors js files into a single file called `vendors.min.js`. Thats the only file we need to call on our index.html to import all vendors files.

To include a new Vendor, read the FAQ Below.


## FAQ

### How do I add a new Vendor?

* If possible, include it on you bower.json file then run `bower update` to download the vendor's files. If the vendor cannot be installed with bower, put the folder with the needed js file inside the `www/lib` directory.
* Open the file `gulpfile.js` and add the path to the vendor js file on the vendors array
``` gulp gulp.task('vendors', function(){
gulp.src([
'www/lib/angular/angular.min.js',
'www/lib/angular-aria/angular-aria.min.js',
'....',
'www/lib/Path_to_Your_new_vendor_js_file'
])
...
```
* Run `gulp vendors` to compile all the vendors into a single file called `vendors.min.js`. After compiled, this file can be found at `www/js/`.
* The file `vendors.min.js` is already added to the index.html, so you dont have to worry about including it.

### Why `npm install`?

Install these Dependencies on 'node_modules' folder

* gulp
* gulp-add-src
* gulp-angular-templatecache
* gulp-concat
* gulp-jshint
* gulp-less
* gulp-minify-css
* gulp-minify-html
* gulp-ng-annotate
* gulp-notify
* gulp-rename
* gulp-shell
* gulp-uglify

Read the Gulp tasks sections to find more information about it.

### Why `bower install` ?

Install these Dependencies on 'www/lib' folder

* angular-animate
* angular-material
* angular-material-icons
* angular-resource
* angular-route
* angular-sanitize
* angular-touch
* angular-translate
* angular-translate-loader-static-files
* fastclick
* ngCordova
