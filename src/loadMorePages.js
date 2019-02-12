import {createTable} from './table';

let count = 1;

const secondTable = document.createElement('table');
secondTable.classList.add('table');
secondTable.classList.add('table--second');
document.body.appendChild(secondTable);

const button = document.createElement('button');
button.classList.add('button');
button.innerText = 'Load more values';
document.body.appendChild(button);

let jasonObj = {};
const jasonArray = [];

loadJason();

button.addEventListener('click', event => {
  if (jasonObj.loadMore) {
    loadJason();    
  }
});

function loadJason() {
  const load = new XMLHttpRequest();
  
  load.open('get', `https://tanuhaua.github.io/datas-file-json/dynamic-loading/${count}/users.json`);  
  count++;

  load.send();
  load.addEventListener('load', () => {
    if (load.status === 200) {
      jasonObj = JSON.parse(load.responseText);
      jasonArray.push(jasonObj.data);
      createTable(jasonArray[jasonArray.length-1], document.querySelector('.table--second'));
      if (!jasonObj.loadMore) {
        button.style.display = 'none';
      }
    }
  });
}