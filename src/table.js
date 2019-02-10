export { createTable };

let newTable = document.createElement('table');
newTable.classList.add('table');
newTable.classList.add('table--one');
document.body.appendChild(newTable);

const tableAjax = new XMLHttpRequest();
tableAjax.open('GET','https://tanuhaua.github.io/datas-file-json/visitors.json', true);
tableAjax.send();

let tableParse = [];

tableAjax.onload = () => {
  if (tableAjax.status === 200) {
    tableParse = JSON.parse(tableAjax.responseText).sort( (a, b) => a.id - b.id);    
    createTable(tableParse, document.querySelector('.table--one'));
  }
}

newTable.addEventListener('click', event => {  
  if (newTable.children.length > 0) {
    for (let i = newTable.children.length - 1; i >= 0; i--) {      
      newTable.children[i].remove();
    }
  }

  if (event.target.tagName === 'TH') {        
    if (event.target.innerText === 'CREATEDAT') {
      const newTableParse = tableParse.sort( (a, b) => new Date(a.createdAt) - new Date(b.createdAt));          
      createTable(newTableParse, document.querySelector('.table--one'));        
    } else if (event.target.innerText === 'ID') {
      const newTableParse = tableParse = JSON.parse(tableAjax.responseText).sort( (a, b) => a.id - b.id); 
      createTable(newTableParse, document.querySelector('.table--one'));
    } else {
      const newTableParse = tableParse.sort( (a, b) => {
      const x = event.target.innerText.toLowerCase();
        
       return a[x].toLowerCase().localeCompare(b[x].toLowerCase())}); 
      createTable(newTableParse, document.querySelector('.table--one'));
    } 
  }
});

function createTable(tableParse, newTable) {  
  const tableTrForTd = document.createElement('tr');
  newTable.appendChild(tableTrForTd); 
      
  tableParse.forEach((elem, i) => {     
    const {id, createdAt, name, email, description} = elem; 

    if (newTable.querySelectorAll('TR').length === 1) {        
      for (const key in elem) {
        const tableTd = document.createElement('th');
        tableTd.innerText = key.toUpperCase();
        tableTd.classList.add('table__td--bold');
        tableTrForTd.appendChild(tableTd); 
      }
    }

    const tableTr = document.createElement('tr');
    newTable.appendChild(tableTr); 
    
    const tableThId = document.createElement('td');
    tableThId.innerText = id;
    tableThId.classList.add('table__td');
    tableTr.appendChild(tableThId);

    const tableThCreatedAt = document.createElement('td');
    const date = new Date(createdAt);
    tableThCreatedAt.innerText = `${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`;
    tableThCreatedAt.classList.add('table__td');
    tableTr.appendChild(tableThCreatedAt);

    const tableThName = document.createElement('td');
    tableThName.innerText = name;
    tableThName.classList.add('table__td');
    tableTr.appendChild(tableThName);

    const tableThEmail = document.createElement('td');
    tableThEmail.innerText = email;
    tableThEmail.classList.add('table__td');
    tableTr.appendChild(tableThEmail);

    const tableThDescription = document.createElement('td');
    tableThDescription.innerText = description;
    tableThDescription.classList.add('table__td');
    tableTr.appendChild(tableThDescription);
  });
}