console.log("tut 15");

// let container = document.querySelector('.container');

// // console.log(container.childNodes);

// // console.log(container.children);

// let nodes = container.childNodes[0].nodeName;

// console.log(nodes);

let container = document.querySelector('div.container');

// console.log(container.children[0].children[0].children);

console.log(container.firstElementChild);
console.log(container.lastElementChild);
console.log(container.children[0].children[0].childElementCount);
console.log(container.firstElementChild.parentNode.parentNode);
console.log(container.firstElementChild.nextElementSibling);
