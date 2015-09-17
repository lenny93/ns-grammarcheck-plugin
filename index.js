var {Cc, Ci} = require("chrome");

var gcSvc = Cc["@mozilla.org/grammarcheck;1"].
				getService(Ci.nsIEditorGrammarCheck);
				

function handleWord(word) 
{
	var startPos = [0,4];
	var endPos = [2,9];
	
	gcSvc.errorsFound(startPos, endPos, startPos.length);
	gcSvc.addSuggestionForError(0, "[this will be replaced]", "desc");
	gcSvc.addSuggestionForError(0, "[this will be replaced2]", "desc2");
	gcSvc.addSuggestionForError(1, "[another suggestion]", "desc");
}

				
gcSvc.registerAddon(handleWord);