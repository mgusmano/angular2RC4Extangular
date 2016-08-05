(function(global) {

  // map tells the System loader where to look for things
  var map = {
		'app': 												'build/development',
		'angular2-highcharts': 				'node_modules/angular2-highcharts/dist',
		'highcharts/highstock.src': 	'node_modules/highcharts/highstock.js',
		
    'rxjs':                       'node_modules/rxjs',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    '@angular':                   'node_modules/@angular'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': 												{ main: 'app.js',  defaultExtension: 'js' },
		'angular2-highcharts' : 			{ main: 'index', format: 'cjs', defaultExtension: 'js' },
		
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
		'@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade',
  ];

  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);
