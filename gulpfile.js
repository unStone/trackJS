const path = require('path');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const rename = require("gulp-rename");
const babel = require("gulp-babel");
const uglify = require('gulp-uglify');

const entryTs = path.resolve(__dirname, './track/index.ts');
const output = path.resolve(__dirname, './');

gulp.task('product', ['productWatch'], function() {
  gulp.src(entryTs)
    .pipe(ts({
      noImplicitAny: true,
    }))
    .pipe(babel({  
      presets: ['es2015']  
    })) 
    .pipe(uglify())
    .pipe(gulp.dest(output))
})

gulp.task('test', ['testWatch'], function() {
  gulp.src(entryTs)
    .pipe(ts({
      noImplicitAny: true,
    }))
    .pipe(babel({  
      presets: ['es2015']  
    }))
    .pipe(rename("test.js"))
    .pipe(gulp.dest(output))
})

gulp.task('productWatch', () => {
  gulp.watch(entryTs, ['product'])
})
gulp.task('testWatch', () => {
  gulp.watch(entryTs, ['test'])
})