function display(num) {
    document.getElementById("textarea").value += num
}

function calculate() {
let value = document.getElementById("textarea").value
let result = eval(value)
document.getElementById("textarea").value=result 
}
function clr(){
    document.getElementById("textarea").value = ""
}