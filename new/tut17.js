console.log("tut 17");

document.getElementById('head-ele').addEventListener('click', function(e){
    console.log('you have clicked');
    let variable = e.target;
    console.log(variable);
} )

document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetX})`;
})

document.querySelector('.child').addEventListener('mouseover', function(e){
        console.log("hover");
})