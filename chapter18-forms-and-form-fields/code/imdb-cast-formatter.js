'use strict';

var currentEntry;

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
        currentEntry = castEntry;
        var patternFirstEntry = /^([\w'ë]+(\s+[\w'ë]+)*)\s+\.\.\.\s+(.+)$/;
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

function getCastAsFormattedString(textCutFromImdb) {
  var result;
  try {
    result = getCast(textCutFromImdb)
                .reduce(function(accumulator, castEntry) {
                    return accumulator + castEntry.actor + '...' + castEntry.character + '\n';
                  }, '');
  } catch(e) {
    throw new Error('Error while parsing entry: ' + currentEntry + '; error=' + e.message);
  }
  result = result.slice(0, result.length - 1);

  return result;
}
