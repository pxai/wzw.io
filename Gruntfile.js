
module.exports=function(grunt) {

// Loading
// One task: grunt.loadNpmTasks('grunt-contrib-jshint');
// Many tasks
[
 'grunt-contrib-jshint',
 'grunt-contrib-csslint',
 'grunt-html',
 'grunt-contrib-clean',
 'grunt-contrib-concat',
 'grunt-contrib-cssmin',
 'grunt-contrib-htmlmin',
 'grunt-contrib-uglify',
 'grunt-processhtml',
 'grunt-hashres'
].forEach(function (g) {
	grunt.loadNpmTasks(g);
});

// Configuration
grunt.initConfig({
	jshint: {
		options: {
			curly: true,
			eqeqeq: true
		},
		target1: ['Gruntfile.js','src/public/js/*.js','!src/**/*.js']
	},
    htmllint:  {
            options: {
                path: false,
                reportpath: false // output to console
            },
            src: [
                'src/public/*.html', // Include all HTML files in this directory.
                '!src/public/*.min.html' // Exclude any files ending with `.min.html`
            ]
        },
    csslint:  {
            options: {
           
            },
            src: [
                'src/public/css/*.css', // Include all HTML files in this directory.
                '!src/public/css/*.min.css' // Exclude any files ending with `.min.html`
            ]
        },
  concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/public/js/jquery.js','src/public/js/bootstrap.js','!src/**/*.min.js'],
        dest: 'src/public/stage/js/app.min.js'
      }
    },
    clean : {
    	target1 : {
        	src : [ 'src/**/*.*~', 'src/public/dist/*', 'src/public/stage/*']
    	}
	},
cssmin: {
  minify: {
    files: [{
      expand: true,
      cwd: 'src/public/css',
      src: ['src/public/css/*.css', '!**/*.min.css'],
      dest: 'src/public/dist/css',
      ext: '.min.css'
    }]
  },
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  combine: {
    files: {
      'src/public/dist/css/app.min.css': ['!src/public/dist/css/*.min.css', 'src/public/dist/css/*.css']
    }
  }
},
htmlmin: {
  dist : {                                     // Task
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'src/public/dist/index.html': 'src/public/stage/index.html'     // 'destination': 'source'
      }
  }
 },
 uglify: {
        report: 'min',
	target1: {
		files : {
			'src/public/dist/js/app.min.js':  ['src/public/stage/js/app.min.js']
		}
        }
 },
 processhtml: {
	options: {
	},
	dist : {
		files: {
		  'src/public/stage/index.html': ['src/public/src/index.html']
		}
	}
 }
});

// Default task
grunt.registerTask('default',['clean','cssmin','concat','uglify','processhtml','htmlmin']);
grunt.registerTask('hard',['clean','jshint','csslint','htmllint','concat']);

};