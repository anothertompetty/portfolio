module.exports = function(grunt) {

  "use strict";

  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.initConfig({

    sass: {

      dev: {
        options: {
          style: "compressed",
          sourcemap : "auto"
        },

        files : {
          "build/css/app.min.css": "app/scss/main.scss"
        }
      }
    },

    uglify: {

      dev: {
        options: {
          compress: true,
          mangle: true,
          preserveComments: false
        },

        files: {
          "build/js/app.min.js" : ["app/js/libs/jquery-1.11.2.min.js", 
                                   "app/js/libs/unveil.js", 
                                   "app/js/app/app.js"]
        }
      }
    },

    connect: {

      server : {
        options: {
          open: true,
        }
      }
    },

    watch: {

      js: {
        files: ["app/js/**/*.js"],
        tasks: ["uglify:dev"],
        options: {
    			livereload: true,
    		}
    },

    scss: {
      files: ["app/scss/**/*.scss"],
      tasks: ["sass:dev"],
      options: {
  			livereload: true,
    		}
      }
    }
  });

  grunt.registerTask("make", ["sass:dev", "uglify:dev", "connect:server", "watch"]);
};