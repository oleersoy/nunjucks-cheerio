# Test Gulp Nunjucks Render with Gulp Cheerio

Clone this repository and run `npm install && gulp test`

### Test Input

`src/test.html` contains:
``` html
   {% for item in ['100', '300'] %}
      <div class="u-color-background-gray-{{item}}>
        <code>u-color-background-gray-{{item}}</code>
      </div>
   {% endfor %}

### Output

``` html
      <div class="u-color-background-gray-100&gt;
        &lt;code&gt;u-color-background-gray-100&lt;/code&gt;
      &lt;/div&gt;
   
      &lt;div class=" u-color-background-gray-300="">
        <code>u-color-background-gray-300</code>
      </div>

```

### For Correct Output

Comment out out the section piping into `gulp-cheerio`:

``` js 
/*
    .pipe(cheerio(function($, file) {
      $('.Test-markup > code').each(function() {
        var markup = $(this).html();
        //Insert the Test-render block after the Test-then block
        //Append the markup block to the Test-render block
        $($(this).parent().next()).after(renderTestBlock).next().append(markup);
      });
    }))*/

```

### Now the output looks like this:

``` html

      <div class="u-color-background-gray-100>
        <code>u-color-background-gray-100</code>
      </div>
   
      <div class="u-color-background-gray-300>
        <code>u-color-background-gray-300</code>
      </div>

```
