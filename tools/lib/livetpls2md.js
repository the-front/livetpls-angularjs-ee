var fs      = require('fs'),
    path    = require('path'),
    Q       = require('q'),
    xml2js  = require('xml2js');

//---

var parser = new xml2js.Parser();

var fs_readfile   = Q.denodeify( fs.readFile );
var fs_writeFile  = Q.denodeify( fs.writeFile );
var parseString   = Q.denodeify( parser.parseString );

//---

function processXml( xmlPath, tplGroupName, lang ) {
  return fs_readfile( xmlPath )
    .then(function fileContent( content ) {
      return parseString( content );
    })
    .then(function processXML( xml ) {
      return processLivetpls( xml, tplGroupName, lang );
    });
}

//---

function processLivetpls( xml, tplGroupName, lang ) {

  var output = '';

  var templateSet = xml.templateSet;

  output += '## ' + tplGroupName + '\n';
  output += '> templateSet group name: ' + templateSet.$.group;

  for (var i = templateSet.template.length - 1; i >= 0; i--) {
    output += processTemplate( templateSet.template[i], lang );
  }

  return output;

}

function processTemplate( template, lang ) {
  var output = '\n\n';

  output += '`' + template.$.name + '` - ' + template.$.description + '\n\n';
  output += '```'+ lang + '\n';
  output += template.$.value;
  output += '\n```';

  return output;
}

//==============================================================================

module.exports = function( options ) {
  var output = '';

  output += '# ' + options.title + '\n';

  var promises = [];

  for (var i = options.templates.length - 1; i >= 0; i--) {
    var template = options.templates[i];
    promises.push(
      processXml(
        template.file,
        template.tplGroupName,
        template.lang
      )
    );
  }

  return Q.all(promises)
    .then(function mdTxts( results ) {
      for (var i = results.length - 1; i >= 0; i--) {
        output += '\n\n' + results[i];
      }
      return output;
    })
    .then(function mdOutputText( mdText ) {

      // console.log( mdText );

      // console.log( options.outputFile );
      // console.log( 'write file...' );

      return fs_writeFile(
        options.outputFile,
        mdText
      );

    });

};
