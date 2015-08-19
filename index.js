var contextMenu = require("sdk/context-menu");
 var menuItem = contextMenu.Item({
  label: "Check Grammar",
  context: contextMenu.SelectorContext("textarea, input"),
  contentScript: 'self.on("click", function () {' +
                 '  var selectedTextArea = document.activeElement;' +
                 '  var selection = selectedTextArea.value.substring(selectedTextArea.selectionStart, selectedTextArea.selectionEnd);' +
                 '  self.postMessage(selection);' +
                 '});',
  onMessage: function (selectionText) {
	var {Cc, Ci} = require("chrome");

	var promptSvc = Cc["@mozilla.org/grammarcheck;1"].
					getService(Ci.nsIEditorGrammarCheck);
					
	promptSvc.poke(selectionText);
  }
});