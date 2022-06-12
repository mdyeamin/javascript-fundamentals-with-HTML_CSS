


// const li = document.createElement("li");

// const setText = li.innerText = "title-5";

// document.getElementById("title-list").appendChild(li)

document.getElementById("submit").addEventListener ("click",function(){

    const li = document.createElement("li");
    const input = document.getElementById("input");
    let inputValue =   input.value;
    let  setText = li.innerText = inputValue;
    console.log(setText);
    const  ul = document.getElementById("title-list");
    input.value = ""
    ul.appendChild(li)


// console.log(inputValue);
    
    
    
})