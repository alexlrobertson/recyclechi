module.exports = function(grunt) {
  var stylusOptions = {
    // compress: false,
    // linenos: true,
    'paths': ['stylus'],
    'import': [
      'variables/variables',
      'mixins/mixins',
      'nib'
    ]
  };

  grunt.config.set('stylus', {
    critical: {
      options: stylusOptions,
      files: {
        'assets/css/critical.css': [
          'bower_components/normalize.styl/normalize.styl',
          'stylus/critical/critical.styl'
        ]
      }
    },
    secondary: {
      options: stylusOptions,
      files: {
        'assets/css/secondary.css': [
          'stylus/secondary/secondary.styl'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
};
