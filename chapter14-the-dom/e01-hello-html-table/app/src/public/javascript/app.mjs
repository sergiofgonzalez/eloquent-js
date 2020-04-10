'use strict';

import data from './data/mountains.js';
import buildTable from './lib/build-table.js';

const mountains = JSON.parse(data);

const table = buildTable(mountains, 'thead-dark');

const mountainsDiv = document.querySelector('#mountains');
mountainsDiv.appendChild(table);
