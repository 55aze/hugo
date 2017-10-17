var gulp         = require("gulp"),
sass         = require("gulp-sass"),
autoprefixer = require("gulp-autoprefixer")
hash         = require("gulp-hash"),
del          = require("del")

// Compile SCSS files to CSS
gulp.task("scss", function () {

    //Delete our old css files
    del(["static/css/**/*"])
    
    //compile hashed css files
    gulp.src("src/scss/**/*.scss")
    .pipe(sass({
        outputStyle : "compressed"
    }))
    .pipe(autoprefixer({
        browsers : ["last 20 versions"]
    }))
    .pipe(hash())
    .pipe(gulp.dest("static/css"))
})

// Hash images
gulp.task("images", function () {
    del(["static/images/**/*"])
    gulp.src("src/images/**/*")
        .pipe(hash())
        .pipe(gulp.dest("static/images"))
})

// Hash javascript
gulp.task("js", function () {
    del(["static/js/**/*"])
    gulp.src("src/js/**/*")
        .pipe(hash())
        .pipe(gulp.dest("static/js"))
})

// Watch asset folder for changes
gulp.task("watch", ["scss", "images", "js"], function () {
    gulp.watch("src/scss/**/*", ["scss"])
    gulp.watch("src/images/**/*", ["images"])
    gulp.watch("src/js/**/*", ["js"])
})

// Set watch as default task
gulp.task("default", ["watch"])