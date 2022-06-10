let a = document;

// a= document.forms;
// a= document.all;
// Array.from(a).forEach(function(element){
//     console.log(element);
// })
a = document.links;
a = document.links[0];
a = document.images;
//a = document.scripts;
Array.from(a).forEach(function(element){
        console.log(element);
    })
console.log(a);

