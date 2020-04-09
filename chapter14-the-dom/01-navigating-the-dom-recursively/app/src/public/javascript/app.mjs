import talksAbout from './lib/talks-about.mjs';

if (talksAbout(document.body, 'book')) {
  alert('The scanned document talks about books');
} else {
  alert('The scanned document does not talk about books');
}

if (talksAbout(document.body, 'sports')) {
  alert('The scanned document talks about sports');
} else {
  alert('The scanned document does not talk about sports');
}
