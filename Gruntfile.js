module.exports = function(grunt){
  // Project configuration.
  grunt.initConfig({
    connect: {
      server: {
        options: {
          keepalive: true,
          debug: false,
          port: 9000,
          protocol: 'http'
        }
      }
    }
  });
  // Load Connect
  grunt.loadNpmTasks('grunt-contrib-connect');
};