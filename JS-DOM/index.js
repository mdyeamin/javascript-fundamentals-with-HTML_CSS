let x= 1
document.getElementById("increase").addEventListener("click", function(){
 document.getElementById("count").innerHTML = x++
})

document.getElementById("decrease").addEventListener("click", function(){
 document.getElementById("count").innerHTML = x = x - 1
})