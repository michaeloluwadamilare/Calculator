function valueInput(inputVal){
    document.getElementById('screen').value += inputVal;
}

function calculate (){
    let x = eval(document.getElementById('screen').value);
    document.getElementById('screen').value = x
}
function clr(){
   document.getElementById('screen').value = "";
}
function del(){
    let display = document.getElementById('screen').value;
    display = display.substr(0,display.length - 1);
    document.getElementById('screen').value = display;
}