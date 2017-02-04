var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var cheerio = require('gulp-cheerio');

//---------------------------------
gulp.task('test', function() {
  return gulp
    .src("src/**")
    .pipe(nunjucksRender({
      path: ["src"]
    }))
    .pipe(cheerio(function($, file) {
      $('.Test-markup > code').each(function() {
        var markup = $(this).html();
        //Insert the Test-render block after the Test-then block
        //Append the markup block to the Test-render block
        $($(this).parent().next()).after(renderTestBlock).next().append(markup);
      });
    }))
    .pipe(gulp.dest("dist"));
});
