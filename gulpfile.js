var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer")
    hash         = require("gulp-hash"),
    del          = require("del")

// Compile SCSS files to CSS
gulp.task("scss", function (done) {

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

        //Create a hash map
        .pipe(hash.manifest("hash.json"))
        //Put the map in the data directory
        .pipe(gulp.dest("data/css"))

        done();
});

// Hash images
gulp.task("images", function (done) {  
    del(["static/img/**/*"])
    gulp.src("src/img/**/*")
        .pipe(gulp.dest("static/img"))

     done();
});

// Hash javascript
gulp.task("js", function (done) {
    del(["static/js/**/*"])
    gulp.src("src/js/**/*")
        .pipe(hash())
        .pipe(gulp.dest("static/js"))
        .pipe(hash.manifest("hash.json"))
        .pipe(gulp.dest("data/js"))

    done();

});

// Watch asset folder for changes
gulp.task("watch", gulp.series(gulp.parallel('scss', 'images','js'), function (done) {
    gulp.watch("src/scss/**/*", gulp.series('scss'))
    gulp.watch("src/img/**/*", gulp.series('images'))
    gulp.watch("src/js/**/*", gulp.series('js'))

    done();
}));

// Set watch as default task
gulp.task("default", gulp.series('watch', function (done){
    done ();
}));


