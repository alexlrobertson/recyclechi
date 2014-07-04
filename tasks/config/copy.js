module.exports = function (grunt) {
  grunt.config.set('copy', {
    vendor: {
      files: [
        {
          expand: true,
          cwd: 'bower_components',
          src: ['almond/almond.js'],
          dest: 'assets/js/vendor'
        }
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
