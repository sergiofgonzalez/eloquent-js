'use strict';

const paragraphs = document.body.getElementsByTagName('p');

alert('About to rearrange the numbers through JavaScript');
document.body.insertBefore(paragraphs[2], paragraphs[0]);

alert('About to remove the first element');
paragraphs[0].remove(); // Three will be removed: note that we didn't have to query the DOM again, paragraphs was updated so that
                        // paragraphs[0] was pointing to Three rather than One!


alert('About to replace nodes');
document.body.replaceChild(paragraphs[1], paragraphs[0]);