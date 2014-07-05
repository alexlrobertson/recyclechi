module.exports = function(grunt) {
  var watchOptions = {
    spawn: false,
    cwd: 'stylus'
  };

  grunt.config.set('watch', {
    critical: {
      files: [
        'critical/*.styl',
      ],
      tasks: ['stylus:critical'],
      options: watchOptions
    },
    secondary: {
      files: [
        'secondary/*.styl',
      ],
      tasks: ['stylus:secondary'],
      options: watchOptions
    },
    both: {
      files: [
        'variables/*.styl',
        'mixins/*.styl'
      ],
      tasks: ['stylus'],
      options: watchOptions
    },
    js: {
      files: [
        'assets/js/*.js'
      ],
      exclude: ['assets/js/main-built.js'],
      tasks: ['requirejs'],
      options: {
        spawn: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
