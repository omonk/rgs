
// browserify = require('browserify')
var argv = require('yargs').argv
	, gp = require('gulp-load-plugins')()
	, gulp = require('gulp')

// gulp.task('assets', ['sass', 'scripts', 'media'])

// gulp.task('media', () => gulp.src([`${sourceDir}/{img,fonts,admin}/**/*`]).pipe(gulp.dest(publicDir)))

gulp.task('sass', function() {
	return gulp.src('./scss/styles.scss')
		.pipe(gp.plumber({errorHandler: gp.notify.onError('Error: <%= error.message %>')}))
		.pipe(gp.sass({
			errLogToConsole: true
		}))
		.pipe(gp.autoprefixer())
		.pipe(gulp.dest(`./css`))
})

// var bundleErrHandler = function(err) {
// 	gp.util.log(err.toString())
// 	gp.notify.onError('Error: <%= error.message %>')
// 	console.log(err.stack);
// 	deploy ? process.exit(1) : this.end()
// }

// gulp.task('scripts', function() {

// 	const babelOpts = {
// 		optional: [
// 			'es7.objectRestSpread',
// 			'es7.decorators',
// 			'es7.classProperties',
// 		],
// 	}

// 	const bundler = browserify({
// 		entries: [`${sourceDir}/scripts/${jsFile}`],
// 		transform: [babelify.configure(babelOpts)],
// 		debug: true,
// 		cache: {}, packageCache: {}, fullPaths: true,
// 	})

// 	const watcher = watching ? watchify(bundler) : bundler

// 	const compile = function(bundle) {
// 		bundle
// 			.bundle()
// 			.on('error', bundleErrHandler)
// 			.pipe(source(jsFile))
// 			.pipe(buffer())
// 			.pipe(gp.if(deploy, gp.uglify()))
// 			.pipe(gulp.dest(`${publicDir}/scripts`))
// 		gp.util.log(`Browserify built: ${(new Date).toTimeString()}`)
// 		return bundle
// 	}

// 	watcher.on('update', () => compile(watcher))
// 	compile(watcher)
// })

gulp.task('default', function(callback) {

	watching = true

	gulp.watch(`./scss/**/*.scss`, ['sass'])
	gulp.watch(`./fonts/**/*`, ['fonts'])
	gulp.watch(`./img/**/*`, ['images'])
})

// gulp.task('build', function(callback) {
// 	deploy = true
// })
