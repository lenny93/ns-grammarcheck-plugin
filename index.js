var {Cc, Ci} = require("chrome");

var gcSvc = Cc["@mozilla.org/grammarcheck;1"].
				getService(Ci.nsIEditorGrammarCheck);
var { setTimeout, clearTimeout } = require("sdk/timers");	

var currentText;
var startPos = [1,4];
var endPos = [2,9];

function dispatchErrors(text)
{
	if(currentText != text)
		return;
	
	gcSvc.errorsFound(startPos, endPos, startPos.length);
	gcSvc.addSuggestionForError(0, "description long description very long", "even longer tooltip Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada euismod suscipit.", true);
	gcSvc.addSuggestionForError(1, "suggestion1", "message for error 2");
	gcSvc.addSuggestionForError(1, "suggestion2", "message for error 2");
}

function handleWord(word) 
{
	currentText = word;
	
	console.error(word);
	

	setTimeout(function() { dispatchErrors(word) }, 500);
}

				
gcSvc.registerAddon(handleWord);