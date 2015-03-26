module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> -' +
            ' <%= pkg.license %> License\n*/\n\n',
    // Compile Sass to CSS -  destination : source
    libsass: {
      compile: {
        options: {
          style: 'compact',
          banner: '<%= banner %>'
        },
        files: {
          'assets/css/compiled_sass.css': 'assets/sass/style.scss'
        },
      },    
    },

    // Concatenate all JavaScript & CSS files
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true,
        separator: ';',
      },
      css: {
        src: ['assets/bower_components/highlightjs/styles/railscasts.css', 
              'assets/css/compiled_sass.css'],

        dest: 'assets/css/style.css'
      },      
    },

    autoprefixer: {
      options: ['last 1 version'],
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/css/',
          src: '{,.css',
          dest: 'assets/css/'
        }]
      }
    },

    //Minify css
    cssmin: {
      css: {
        src: 'assets/css/style.css',
        dest:'assets/css/style.min.css'
      }
    },

    /**
     * Compresses Image files
     * Compresses all jpg, png images
     */
    imagemin: {
      build: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'image_sources/',
          src: '**/*.{jpg,jpeg,png}',
          dest: 'assets/images/'
        }]
      }
    },   

    browserSync: {
      dev: {
        bsFiles: {
            src : [
                    'assets/css/*.css',
                    'assets/images/**/*.jpg',
                    'assets/images/**/*.png',
                    'assets/js/**/*.js',
                    '**/*.html',
                    '**/*.hbs'
                  ]
        },
        options: {
            proxy: "localhost:2368",
            watchTask: true
        }
      }
    },

    // Simple config to run sass, jshint and uglify any time a js or sass file is added, modified or deleted
    watch: {   
      html: {
        files: ['**/*.html'],
      }, 
      hbs: {
        files: ['**/*.hbs'],
      },
      images: {
        files: ['assets/images/**/*.html'],
      },
      libsass: {
        files: ['assets/sass/{,*/}*.scss'],
        tasks: ['libsass']
      },
      concat: {
        files : ['<%= concat.css.src %>'],
        tasks: ['concat']
      },
      cssmin: {
        files : ['<%= cssmin.css.src %>'],
        tasks: ['cssmin']
      },
      imagemin: {
        files: ['image_sources/{,*/}*.jpg','image_sources/{,*/}*.png'],
        tasks: ['imagemin']
      },
      svgmin: {
        files: ['image_sources/{,*/}*.svg','image_sources/{,*/}*.svg'],
        tasks: ['svgmin']
      },      
    },
  });

  // Load the plug-ins
  grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-libsass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default tasks
  grunt.registerTask('default', 
    [ 'libsass',
      'concat',
      'cssmin',
      'imagemin',
      'browserSync',
      'watch'
    ]
  );
};