let CodeMirror = require('codemirror');
// the 'fork-and-fixed' jsonlint file
window['jsonlint'] = require('./jsonlint');

CodeMirror.registerHelper("lint", "json", function(text) {
  let found = [];
  if (!window.jsonlint) {
    if (window.console) {
      window.console.error("Error: window.jsonlint not defined, CodeMirror JSON linting cannot run.");
    }
    return found;
  }
  let jsonlint = window.jsonlint.parser;
  jsonlint.parseError = function(str, hash) {
    let loc = hash.loc;
    found.push({from: CodeMirror.Pos(loc.first_line - 1, loc.first_column),
                to: CodeMirror.Pos(loc.last_line - 1, loc.last_column),
                message: str});
  };
  try { jsonlint.parse(text); }
  catch(e) {}
  return found;
});
