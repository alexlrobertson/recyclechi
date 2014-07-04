module.exports = function (grunt) {
  grunt.config.set('requirejs', {
    compile: {
      options: {
        mainConfigFile: 'assets/js/main.js',
        include:        [
          'main.js'
        ],
        name: 'vendor/almond/almond',
        out:  'assets/js/main-built.js',
        wrap: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
};

