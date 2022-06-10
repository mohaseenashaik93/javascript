console.log('tut 21');

const ele = document.createElement('div');

ele.className ="new_element";

ele.id ="insert";

ele.innerHTML = 'New div element';

ele.setAttribute("contenteditable", "true");

ele.style.color = 'blue';

document.body.appendChild(ele);


document.getElementById("insert").addEventListener("input", function() {
    console.log("input event fired");
}, false);

document.getElementById("insert").addEventListener("blur", myBlurFunction, true);
  
function myBlurFunction() {
    localStorage.setItem("Values",document.getElementById("insert").innerHTML);
}

  
