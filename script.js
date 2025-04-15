// Changes text content dynamically.
const para = document.getElementById("demo");

para.textContent = "Lorem Ipsum";


// Modifies CSS styles
const main_content = document.getElementById("main_para");
const head1 = document.querySelector("h1");

main_content.style.backgroundColor = "green";
head1.style.textTransform = "uppercase";



// Adds or removes an element when a button is clicked
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const itemList = document.getElementById("itemList");


let count = 1;


addBtn.addEventListener("click", function () {
  const li = document.createElement("li");
  li.textContent = `Item ${count++}`;
  itemList.appendChild(li);
});


removeBtn.addEventListener("click", function () {
  const lastItem = itemList.lastElementChild;
  if (lastItem) {
    itemList.removeChild(lastItem);
    count--;
  }
});