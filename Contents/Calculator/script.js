const display1 = document.getElementById("display")
function appendDisplay(input){
  display1.value += input;
}

function calculate(){
  try {
    display1.value = eval(display1.value);
  }
  catch (error) {
    display1.value = "ERROR";
  }
}

function display(){
  display1.value = "";
}