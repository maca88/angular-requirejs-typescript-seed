module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        typescript: {
          base: {
            src: ['app/**/*.ts'],
            dest: './',
            options: {
              module: 'amd', //or commonjs
              target: 'es5', //or es3
              sourceMap: false,
              declaration: false,
            }
          }
        },
        watch: {
            files: '**/*.ts',
            tasks: ['typescript']
        },
    });

    grunt.registerTask('default', ['watch']);

}