# Ninamori

![Preview](https://raw.githubusercontent.com/ImStuartJones/ninamori/master/screenshot.png)

A simple and clean theme for Ghost using Twitter Bootstrap 3, Font Awesome Icons, SASS, Bower, and Grunt.

## Features

Ninamori was designed and tested for version 0.6 of the Ghost blogging platform. It supports the standard theme features of Ghost up until that point, including:

* Blog Image
* Blog Cover
* Customizable Navbar
* Tags

Ninamori was designed as a single user portfolio site theme, so it does not show post authors.

In addition to these standard features, Ninamori also includes:

* Auto-hiding navbar with scroll-up reveal
* Tag specific cover images
* Link-Blog Support

## Demo

Ninamori powers my site! Check it out at http://stuart-jones.com/

## Getting Started

Ninamori uses [Bower](http://bower.io/) for dependency management, and [Grunt](http://gruntjs.com/) as the task runner. Both of these tools require Node and npm, which should already be installed on a system running Ghost. Instructions on how to use Bower and Grunt can be found on their respective websites. To get started using the theme, clone it to your Ghost's content/themes/ folder.

    git clone https://github.com/ImStuartJones/ninamori.git

Use NPM to install the required development packages.

	npm install

Next, run Bower to download the necessary web frameworks. (Bootstrap, Jquery, etc.)

    bower install

Bower should run and install the necessary packages into assets/bower_components/. Next we need to run Grunt to compile Ninamori's .sass and .js files.

	grunt

The gruntfile is also configured to be run in watch mode with the following task.

    grunt watch

Finally, Ninamori's gruntfile also supports BrowserSync. BrowserSync is a live browser reload package which streamlines web development and device testing. More information can be found at the [BrowserSync](www.browsersync.io) website.

	grunt browsersync

Your Ninamori instance should be ready for Ghost to use at this point. Login to your Ghost instance and change the theme on the main page of the Settings screen.

## Changing the Tag Cover Images

By default, Ninamori comes with a variety of cover images for posts based on their tag. The image files can be found in assets/images/. New tags can be defined in the partials/post_header.hbs file. It uses a simple Handlebar has/else waterfall, so a post with multile tags will use the first one referenced.

```hbs
{{! Post Header has custom images based off of tags.}}
{{#post}}
{{#has tag="tech"}}
<div class="image-header-post" style="background-image: url('{{asset 'images/post-bg-tech.jpg'}}');">
{{else}}
	{{#has tag="board-games"}}
		<div class="image-header-post" style="background-image: url('{{asset 'images/post-bg-board.jpg'}}');">
	{{else}}
		{{#has tag="video-games"}}
			<div class="image-header-post" style="background-image: url('{{asset 'images/post-bg-video.jpg'}}');">
		{{else}}
			{{#has tag="lgbt"}}
				<div class="image-header-post" style="background-image: url('{{asset 'images/post-bg-lgbt.jpg'}}');">
			{{else}}
				{{#has tag="news"}}
					<div class="image-header-post" style="background-image: url('{{asset 'images/post-bg-news.jpg'}}');">
				{{else}}
					<div class="image-header-post" style="background-image: url('{{asset 'images/post-bg.jpg'}}');">
				{{/has}}
			{{/has}}
		{{/has}}
	{{/has}}
{{/has}}
{{/post}}
```
## Link-Blog Support

My site contains a small link-blog for collecting links to interesting news stories and sites. Any blog post which contains the "link-blog" tag will not show up on the main page. These posts instead exclusively show up custom site.com/tag/link-blog/ page. If you would like to use this feature, you will need to add a link to the link-blog tag page on your navbar. Otherwise it can be ignored and your site will continue functioning as normal.

## Licensing

Ninamori and its included images are covered under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International license.
