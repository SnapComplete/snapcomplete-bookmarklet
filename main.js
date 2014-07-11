var fs = require('fs');
var qs = require('querystring');

var jade = require('jade');
var UglifyJS = require('uglify-js');

var code = __dirname + '/src/snapcomplete.js';
var template = __dirname + '/views/index.jade';
var target = __dirname + '/public/index.html';

var bookmarklet = 'javascript:' + qs.escape(UglifyJS.minify(code).code);
var html = jade.renderFile(template, {
  bookmarklet: bookmarklet
});
fs.writeFileSync(target, html);
