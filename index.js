var contextMenu = require("sdk/context-menu");
 var menuItem = contextMenu.Item({
  label: "Log Selection",
  context: contextMenu.SelectionContext(),
  contentScript: 'self.on("click", function () {' +
                 '  var text = window.getSelection().toString();' +
                 '  self.postMessage(text);' +
                 '});',
  onMessage: function (selectionText) {
	var {Cc, Ci} = require("chrome");

	var promptSvc = Cc["@mozilla.org/grammarcheck;1"].
					getService(Ci.nsIEditorGrammarCheck);
					
	promptSvc.poke(selectionText);
  }
});