'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import imagemin from 'gulp-imagemin';
import browserSync from 'browser-sync';
import csso from 'gulp-csso';
import del from 'del';
import htmlmin from 'gulp-htmlmin';
import terser from 'gulp-terser';
import concat from 'gulp-concat';
const server = browserSync.create();

const paths = {
  styles: {
    src: 'src/css/**/*.css',
    dest: 'dist/css'
  },
  images: {
    src: 'src/images/**',
    dest: 'dist/images'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/js'
  }
};

const watch = () => gulp.watch('src/**', gulp.series([scripts, pages, styles], reload));

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: './dist'
    }
  });
  done();
}
     

  // Images
   export function imagecomp() {
     return gulp.src(paths.images.src)
         .pipe(imagemin([
          imagemin.gifsicle({interlaced: true}),
          imagemin.jpegtran({progressive: true}),
          imagemin.optipng({optimizationLevel: 5}),
          imagemin.svgo({
              plugins: [
                  {removeViewBox: true},
                  {cleanupIDs: false}
              ]
          })
      ]))
         .pipe(gulp.dest(paths.images.dest))
    };


   // Gulp task to minify JavaScript files
export function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(terser())
    .pipe(concat('script.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}


export function styles() {
  return gulp.src(paths.styles.src)
    .pipe(csso())
    .pipe(gulp.dest(paths.styles.dest));
}


// Gulp task to minify HTML files
export function pages() {
  return gulp.src(['./src/*.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./dist'));
};

export const clean = () => del([ 'dist' ]);

export const dev = gulp.series(clean, imagecomp, scripts, styles, pages,  serve, watch);
export const build = gulp.series(clean, imagecomp, scripts, styles, pages);

     

