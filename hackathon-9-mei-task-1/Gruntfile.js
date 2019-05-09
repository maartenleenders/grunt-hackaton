/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON("package.json"),
    copy: {
      assets: {
        cwd: "source-files/",
        src: "*",
        dest: "assets/",
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
    compress: {
      main: {
        options: {
          archive: "exports/export.zip",
          mode: "zip",
        },
        files: [ {
          expand: true,
          cwd: "assets/",
          src: [ "script.js", "style.css", "!*.css.map"],
          dest: "exports/",
        } ],
      }
    },
  });
  // Load tasks here.

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-compress");
  grunt.loadNpmTasks("grunt-contrib-sass");

  // Define aliases here.
  grunt.registerTask("default", "My default task description", function() {
    grunt.log.writeln( "This is the default grunt task, create a new task and configure." );
  });

};
