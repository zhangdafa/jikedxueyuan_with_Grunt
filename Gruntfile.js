module.exports = function(grunt) {
    // 插件配置
    grunt.initConfig({
        uglify: {
            options: {
                stripBanners: true
            },
            my_target: {
                files: [{
                    src: 'js/index.js',
                    dest: 'dest/index.min.js'
                }]
            }
        },
        htmlmin:{
            aaa:{
                options: {                                 
                    removeComments: true,
                    collapseWhitespace: true
                },
                files:{
                    'index.min.html':'index.html'
                }
            }
        },
        cssmin:{
            target:{
                files:{
                    'dest/result.min.css':'css/result.css'
                }
            }
        },
        watch: {
            //lesswatch
            less: {
                files: ['css/index.less'],
                tasks: ['less','cssmin'],
                options: {
                    spawn: false,
                }
            },
            //htmlwatch
            html:{
                files: ['index.html'],
                tasks: ['htmlmin'],
                options: {
                    spawn: false,
                }
            },
            //jswatch
            js:{
                files: ['js/index.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                }
            },
            //csswatch
            css:{
                files: ['css/result.css'],
                tasks: ['cssmin'],
                options: {
                    spawn: false,
                }
            }
        },
        //less编译
        less: {
            development: {
                // options: {
                //     paths: ['css']
                // },
                files: {
                    'css/result.css': 'css/index.less'
                }
            }
        }
    });
    // 插件导入
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    // 注册插件
    grunt.registerTask('default', ['htmlmin','cssmin','uglify','less']);

};
