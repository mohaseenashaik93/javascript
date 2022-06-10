let element = document.getElementById('first');

// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'green';
element.innerText = 'Mohaseena is good girl';
element.innerHTML = '<b>This is my own text</b>';
let a = document.querySelector('#first');
a = document.getElementsByTagName('div');
// a = document.querySelector('b');
console.log(a);

Array.from(a).forEach(function(element) {
    console.log(element);
 element.style.color = 'red';    
});

   