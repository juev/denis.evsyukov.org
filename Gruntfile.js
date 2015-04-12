'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    clean: {
      src: ['public/assets/*.js', 'public/assets/*.css']
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed',
          compass: true,
          sourcemap: 'none'
        },
        files: {                         // Dictionary of files
          'public/assets/fonts.css': 'source/sass/fonts.scss'
        }
      }
    },
    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({browsers: 'last 1 version'}).postcss,
          require('csswring').postcss
        ]
      },
      dist: {
        src: 'public/assets/*.css'
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');

  // Default task.
  grunt.registerTask('default', ['clean', 'sass', 'postcss']);
};
