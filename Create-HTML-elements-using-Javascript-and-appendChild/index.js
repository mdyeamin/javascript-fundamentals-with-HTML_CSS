// const li = document.createElement("li");

// const setText = li.innerText = "title-5";

// document.getElementById("title-list").appendChild(li)

document.getElementById("submit").addEventListener("click", function () {
  const li = document.createElement("li");
  const input = document.getElementById("input");
  let inputValue = input.value;
  let setText = (li.innerText = inputValue);

  const ul = document.getElementById("title-list");
  if (setText === "") {
    return;
  }
  ul.appendChild(li);
  input.value = "";

  // console.log(inputValue);
});
