/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      assets: {
        cwd: "<%= files.sourceFiles.path %>",
        src: "<%= files.sourceFiles.mask %>",
        dest: "<%= files.assets.path %>",
        expand: true,
      }
    },
    sass: {
      dist: {
        files: {
          "assets/style.css": "assets/style.scss",
        },
      },
    },
    files: {
      sourceFiles: {
        path: 'source-files/',
        mask: '*',
      },
      assets: {
        path: 'assets/',
        mask: '*',
      },
    }
  });
  // Load tasks here.

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Define aliases here.
  grunt.registerTask('default', 'My default task description', function() {
    grunt.log.writeln( 'This is the default grunt task, create a new task and configure.' );
  });

};
