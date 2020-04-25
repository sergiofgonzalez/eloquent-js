'use strict';

const textarea = document.querySelector('textarea');
textarea.addEventListener('keydown', evt => {
  if (evt.key == 'F12') {
    replaceSelection(textarea, 'Khasekhemwy');
    evt.preventDefault();
  }
});

function replaceSelection(field, word) {
  const from = field.selectionStart;
  const to = field.selectionEnd;
  field.value = `${ field.value.slice(0, from) }${ word }${ field.value.slice(to) }`;

  // put the cursor after the word recently inserted
  field.selectionStart = from + word.length;
  field.selectionEnd = from + word.length;
}