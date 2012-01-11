Requirements
===================

Jekyll
------
The file structure is set up to use Jekyll. To use it, [install the gem](https://github.com/mojombo/jekyll/wiki/install).
For more on Jekyll, read [the guide](https://github.com/mojombo/jekyll/wiki/usage).

Using Sass/Bourbon and Jekyll
-------------------------
Watch Sass stylesheet and require Bourbon. This will also pull Twitter Bootstrap styles into your main stylesheet:

    sass --watch stylesheets/sass:stylesheets -r ./stylesheets/sass/bourbon/lib/bourbon.rb

Start the Jekyll server:

    jekyll --server --auto

You can view your running application at [http://localhost:4000](http://localhost:4000).