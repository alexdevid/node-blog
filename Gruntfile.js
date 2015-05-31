module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower_concat: {
            all: {
                dest: 'public/bower/js/vendors.js',
                cssDest: 'public/bower/css/vendors.css'
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'resources/sass',
                    cssDir: 'public/assets/css'
                }
            }
        },
        concat: {
            css:{
                src: ['public/assets/css/*.css'],
                dest: 'public/assets/css/style.css'
            },
            vendorsCss: {
                src: [
                    'public/bower/css/*.css',
                    'src/css/vendors/*.css'
                ],
                dest: 'public/assets/css/vendors.css'
            },
            js: {
                src: [
                    'resources/js/*.js'
                ],
                dest: 'public/assets/js/app.js'
            },
            vendorsJs: {
                src: ['public/bower/js/*.js'],
                dest: 'public/assets/js/vendors.js'
            },
        },
        cssmin: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    'public/assets/css/style.min.css': [
                        'public/assets/css/style.css'
                    ],
                    'public/assets/css/vendors.min.css': [
                        'public/assets/css/vendors.css',
                    ]
                }
            }
        },

        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n',
                mangle: true,
                compress: {},
                sourceMap: false
            },
            app: {
                files: {
                    'public/assets/js/app.min.js': ['public/assets/js/app.js']
                }
            },
            vendors: {
                files: {
                    'public/assets/js/vendors.min.js' : ['public/assets/js/vendors.js']
                }
            }
        },

        watch: {
            stylesheets: {
                files: ['resources/sass/**/*.scss', 'resources/sass/components/**/*.scss'],
                tasks: ['clear:css', 'compass', 'concat:css', 'concat:vendorsCss']
            },
            scripts: {
                files: 'resources/js/**/*.js',
                tasks: ['clear:js', 'concat:js','concat:vendorsJs']
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-concat');

    grunt.registerTask('clear:css', function() {
        grunt.file.delete('public/assets/css');
    });
    grunt.registerTask('clear:js', function() {
        grunt.file.delete('public/assets/js');
    });
    grunt.registerTask('clear:all', function () {
        grunt.file.delete('public/assets');
    });

    grunt.registerTask('default', [
        'clear:all',
        'bower_concat',
        'compass',
        'concat',
        'cssmin',
        'uglify'
    ]);
    grunt.registerTask('bower:install', [
        'bower_concat'
    ]);

};