
let vari = 'harry'; 
let find = document.links; 
Array.from(find).forEach(function(element) { 
    if((element.href).includes(vari)) {
         console.log(element.href);
    }
})


