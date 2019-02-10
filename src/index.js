const phones = new XMLHttpRequest();
phones.open('GET','https://mate-academy.github.io/phone-catalogue-static/phones/phones.json', true);
phones.send();

phones.addEventListener('load', () => {  
  console.log(phones.responseText);  
})

const newTableContent = new XMLHttpRequest();
newTableContent.open('GET', 'https://tanuhaua.github.io/datas-file-json/visitors.json', true);
newTableContent.send();

newTableContent.addEventListener('load', () => {  
  console.log(newTableContent.responseText);  
})

