module.exports = function (grunt) {


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            sass: {
                files: "scss/*.scss",
                tasks: ['sass']
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/style.min.css': 'scss/style.scss'
                }
            }
        },

        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                        'js/*.js',
                        'css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        },

        uglify: {
            options: {
                banner: '/* Giglium - Last compiling time: ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */',
                sourceMap: true,
                sourceMapName: 'js/script.map'
            },
            my_target: {
                files: {
                    'js/script.min.js': ['js/script.js']
                }
            }
        },


    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('sync', ['browserSync', 'watch']);
    grunt.registerTask('default', ['sass', 'uglify']);
};
