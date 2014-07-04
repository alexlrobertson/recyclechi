module.exports = function (grunt) {
  grunt.registerTask('deploy', ['bower', 'copy:vendor', 'requirejs', 'stylus']);
};
