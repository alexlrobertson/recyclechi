module.exports = function (grunt) {
  grunt.config.set('requirejs', {
    compile: {
      options: {
        mainConfigFile: 'assets/js/main.js',
        include:        [
          'main.js'
        ],
        name: 'main',
        out:  'assets/js/main-built.js',
        wrap: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
};

