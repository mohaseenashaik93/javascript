console.log("tut 16");

let element = document.createElement('li');

element.className = 'child';

element.id = 'lastid';

element.innerText = 'inserted by Mohaseena';

element.innerHTML = '<b>rewrited by me</b>';

let ul = document.querySelector('.this');

element.style.color= 'red'

ul.appendChild(element);

// console.log(element.parentElement.innerText);

element.previousElementSibling.style.color= 'blue';

const ele2 = document.createElement('h3');

ele2.className = 'ele2';

ele2.innerHTML = "<h6>Repalcing</h6>";

element.replaceWith(ele2);

const ele3 = document.createElement('a');
ele3.innerText = 'go to harry';

ele3.setAttribute('href','https://codewithharry.com/');

ele3.setAttribute('title','check');

console.log(ele3);
ele2.replaceWith(ele3);

