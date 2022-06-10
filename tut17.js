console.log("events");

document.getElementById("head-ele").addEventListener('click', function(e){
    let ele = document.createElement('li');
    ele.innerHTML = '<b>Hello</b>';

    ele.style.color = 'blue';    
    let ul = document.querySelector('.this');

    ul.appendChild(ele);
    let variable = e.target;
    console.log(e);
    console.log(variable.innerText);
    console.log(variable.className);
    console.log(variable.classList);
})