'use strict';

var iniFileContents =
'searchengine=http://www.google.com/search?q=$1\n' +
'spitefulness=9.7\n' +
'\n' +
'; comments are preceded by a semicolon...\n' +
'; each section is a group of parameters\n' +
'[larry]\n' +
'fullname=Larry Doe\n' +
'type=kindergarten bully\n' +
'website=http://www.geocities.com/capeCanaveral/11451\n' +
'\n' +
'[gargamel]\n' +
'fullname=Gargamel\n' +
'type=evil sorcerer\n' +
'outputdir=/home/marijn/enemies/gargamel\n';


function parseINI(str) {
    console.log('About to process:\n', iniFileContents);
    printSeparator();

    var fileLines = str.split(/\r?\n/);
    console.log(fileLines);

    var currentSection = { name: null, fields: [] };
    var categories = [currentSection];

    fileLines.forEach(function(line) {
        var match;
        if (/^\s*(;.*)?$/.test(line)) {
            return;
        } else if (match = line.match(/^\[(.*)\]$/)) {
            currentSection = { name : match[1], fields: [] };
            categories.push(currentSection);
        } else if (match = line.match(/^(\w+)=(.*)$/)) {
            currentSection.fields.push({ name: match[1], value: match[2] });
        } else {
            throw new Error('Line ' + line + ' is invalid.');
        }
    });

    return categories;

    function printSeparator() {
        console.log('================================================================');
    }
}

var parsingResult = parseINI(iniFileContents);
parsingResult.forEach(function(section) {
    console.log('+ ' + section.name);
    section.fields.forEach(function(entry) {
        console.log('\t-' + entry.name + ': ' + entry.value);
    });
});
