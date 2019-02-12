let ancestry = new XMLHttpRequest();
ancestry.open('GET','https://tanuhaua.github.io/datas-file-json/data.json', true);
ancestry.send();

ancestry.addEventListener('load',() => {
  if (ancestry.status === 200) {
    createCardList(JSON.parse(ancestry.responseText));
  }
});

function createCardList(arr) {
  var array = [],
   averageFemaleLife = 0,
   femaleCount = 0,
   averageMaleLife = 0,
   maleCount = 0,
   average = 0,
   averageCount = 0,
   current,
   div,
   name,
   sex,
   born,
   father,
   mother,   
   bornAverage,
   maleLife,
   femaleLife;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]['sex'] === 'f') {
      averageFemaleLife += arr[i]['died'] - arr[i]['born'];
      femaleCount++;

      for (var j = 0; j < arr.length; j++) {
        if (arr[i]['name'] === arr[j]['mother']) {          
          current = +arr[j]['born'] - +arr[i]['born'];
          if (current > 0) {
            average += current;
            averageCount++;
          }
        }
      }
    } else {
      averageMaleLife += arr[i]['died'] - arr[i]['born'];
      maleCount++;
    }

    div = document.createElement('div');
    div.style.width = '180px';
    div.style.height = '250px';
    div.style.display = 'inline-block';
    div.style.verticalAlign = 'top';
    div.style.textAlign = 'center';
    div.style.margin = '18px';
    div.style.padding = '15px';
    div.style.backgroundColor = '#f2f2f2';
    div.style.color = '#996600';
    div.style.fontFamily = '"Averia Libre", cursive';
    div.style.border = 'solid 2px #996600';
    div.style.borderRadius = '8px';
    div.style.boxShadow = '11px 11px 11px 0.6px rgba(0,0,0,0.75)';

    name = div.appendChild(document.createElement('h3'));
    name.innerHTML = arr[i]['name'];

    sex = div.appendChild(document.createElement('h4'));

    if (arr[i]['sex'] === 'f') {
      sex.innerHTML = 'Female';
    } else if (arr[i]['sex'] === 'm') {
      sex.innerHTML = 'Male';
    }

    born = div.appendChild(document.createElement('p'));
    born.innerHTML = '( ' + arr[i]['born'] + ' - ' + arr[i]['died'] + ' )';

    if (arr[i]['father']) {
      father = div.appendChild(document.createElement('h5'));
      father.innerHTML = 'Father: ' + arr[i]['father'];
    }

    if (arr[i]['mother']) {
      mother = div.appendChild(document.createElement('h5'));
      mother.innerHTML = 'Mother: ' + arr[i]['mother'];
    }    
    
    document.body.appendChild(div);
  }

  div = document.createElement('div');
  div.style.width = '450px';
  div.style.display = 'block';
  div.style.verticalAlign = 'top';
  div.style.textAlign = 'center';
  div.style.margin = '45px auto';
  div.style.padding = '15px';
  div.style.backgroundColor = '#f2f2f2';
  div.style.color = '#996600';
  div.style.fontFamily = '"Averia Libre", cursive';
  div.style.border = 'solid 2px #996600';
  div.style.boxShadow = '0px 0px 26px 6px rgba(0,0,0,0.50)';

  name = div.appendChild(document.createElement('h2'));
  name.innerHTML = 'Statistical analysis';

  bornAverage = div.appendChild(document.createElement('h5'));  
  if (averageCount < 1) {
    bornAverage.innerHTML = 'Not specified';
  } else {    
    bornAverage.innerHTML = 'Difference in age: ' + Math.floor(average / averageCount);
  }  

  maleLife = div.appendChild(document.createElement('h5'));
  maleLife.innerHTML = 'Average male life: ' + Math.floor(averageMaleLife / maleCount);

  femaleLife = div.appendChild(document.createElement('h5'));
  femaleLife.innerHTML = 'Average female life: ' + Math.floor(averageFemaleLife / femaleCount);

  document.body.appendChild(div);
}