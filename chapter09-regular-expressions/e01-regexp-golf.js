'use strict';

/* car and cat */
testPattern(/ca(r|t)/, ['car', 'cat', 'cap', 'kat']);
testPattern(/ca[rt]/, ['car', 'cat', 'cap', 'kat']);

/* pop and prop */
testPattern(/pr?op/, ['pop', 'prop', 'poop']);

/* ferret, ferry and ferrari */
testPattern(/ferr(et|y|ari)/, ['ferret', 'ferry', 'ferrari', 'ferrart', 'ferr', 'ferrey']);

/* Any word ending in `ious` */
testPattern(/\w+ious\b/, ['ensidious', 'dious', 'ious', 'ensidiouso']);

/* a whitespace character, followed by a dot, comma, colon or semi-colon */
testPattern(/\s(\.|,|:|;)/, [' ,', '\t;', ' .', ' ;', 'a;', ';;', '.;']);
testPattern(/\s[.,:;]/, [' ,', '\t;', ' .', ' ;', 'a;', ';;', '.;']);

/* a word longer than six letters */
testPattern(/\b\w{6,}\b/, ['twenty', 'bravo', 'javascript', 'long word']);

/* a word without the letter e */
testPattern(/\b[^e]+\b/, ['adrian', 'inma', 'sergio', 'javier']);




function testPattern(pattern, words) {
    function printSeparator() {
        console.log('===================================');
    }

    words.forEach(function(word) {
        console.log(pattern + '.test(' + word + ')=' + pattern.test(word));
    });
    printSeparator();
}
