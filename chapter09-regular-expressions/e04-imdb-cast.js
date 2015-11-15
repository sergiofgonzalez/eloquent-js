'use strict';

var text =
'Chris Pratt    ... \n' +
'Oweni\n' +
'Bryce Dallas Howard Bryce Dallas Howard ... \n' +
'Claire\n' +
'Irrfan Khan Irrfan Khan ... \n' +
'Masrani\n' +
'Vincent D\'Onofrio   Vincent D\'Onofrio   ... \n' +
'Hoskins\n' +
'Ty Simpkins Ty Simpkins ... \n' +
'Gray\n';


function getCast(textCutFromImdb) {
    function extractCastEntryLines(text) {
        var castLines = text.split(/\n/);
        var castEntryLines = [];
        var castEntry;
        castLines.forEach(function(line, index) {
            if (index % 2 === 0) {
                castEntry = line;
            } else {
                castEntryLines.push(castEntry + line);
            }
        });
        return castEntryLines;
    }

    function parseEntry(castEntry) {
        console.log('parsing:', castEntry);
        var patternFirstEntry = /^([\w']+(\s+[\w']+)*)\s+\.\.\.\s+(.+)$/;
        var match = patternFirstEntry.exec(castEntry);
        return {
            actor: match[1],
            character: match[3]
        };
    }

    function fixNonFirstEntry(castElem) {
        console.log('Fixing:', castElem);
        return {
            actor: castElem.actor.slice(0, castElem.actor.length / 2).trim(),
            character: castElem.character
        };
    }

    /*
    console.log('==================================================');
    var castEntry = 'Vincent D\'Onofrio\tVincent D\'Onofrio   ... Hoskins';
    console.log(parseEntry(castEntry));
    console.log('==================================================');
    return;
    */

    var castEntries = extractCastEntryLines(textCutFromImdb);
    var cast = [];
    castEntries.forEach(function(castEntry, index) {
        console.log('parsing element #' + index);
        var castElem = parseEntry(castEntry);
        if (index === 0) {
            cast.push(castElem);
        } else {
            cast.push(fixNonFirstEntry(castElem));
        }
    });
    return cast;
}

console.log(getCast(text));
