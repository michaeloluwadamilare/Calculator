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
