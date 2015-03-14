var should = require('should');
var stylus = require('stylus');
var fs = require('fs');
var path = require('path');

describe('IBM DL Colors', function(){
  it('palette()', function(){
    var inPath = path.normalize(__dirname + '/fixtures/index.styl');
    var expectedPath = path.normalize(__dirname + '/expected/index.css');
    var $in = fs.readFileSync(inPath, {encoding: 'utf8'});
    var $expected = fs.readFileSync(expectedPath, {encoding: 'utf8'});
    stylus.render($in, {filename: inPath}, function(err, $out){
      if (err) throw err;
      $expected.trim().should.eql( $out.trim() );
    });
  });
});