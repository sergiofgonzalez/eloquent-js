'use strict';

const list = document.querySelector('select');
const note = document.querySelector('textarea');

let state;

function setState(newState) {
  list.textContent = '';
  for (let name in newState.notes) {
    const option = document.createElement('option');
    option.textContent = name;
    if (newState.selected == name) {
      option.selected = true;
    }
    list.appendChild(option);
  }
  note.value = newState.notes[newState.selected];

  localStorage.setItem('Notes', JSON.stringify(newState));
  state = newState;
}

setState(JSON.parse(localStorage.getItem('Notes')) ?? { notes: { 'shopping list': 'Carrots\nRaising'}, selected: 'shopping list' });

list.addEventListener('change', () => {
  setState({ notes: state.notes, selected: list.value });
});

note.addEventListener('change', () => {
  setState({ notes: Object.assign({}, state.notes, { [state.selected]: note.value }), selected: state.selected });
});

document.querySelector('button').addEventListener('click', () => {
  const name = prompt('Note Title');
  if (name) {
    setState({ notes: Object.assign({}, state.notes, { [name]: '' }), selected: name});
  }
});