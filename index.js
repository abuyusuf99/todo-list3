const list = document.getElementById("list");
const input = document.getElementById("input");
const button = document.getElementById("button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  li.classList.add('list_item')
  li.style.display = 'flex'
  li.style.alignItems = 'center'
const checkbox = document.createElement('input')
checkbox.type = "checkbox"
  const remove = document.createElement("button");
  remove.style.height = '20px'
  const p = document.createElement('p')
p.textContent = input.value
  remove.textContent = "x";
  remove.addEventListener('click',(e)=>{
e.target.parentElement.remove()
  })
  checkbox.addEventListener("click", (e)=>{
    p.style.color = 'gray'
})
input.value = "";
li.append(checkbox)
li.append(p)
  li.append(remove);
  list.append(li);
});


