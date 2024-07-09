const btn = document.querySelector('.btn')
const newHeader=document.createElement("h1");
newHeader.textContent="YOUR-NAME is the champion";
newHeader.id="victory";

btn.addEventListener('click', () => {
  const title = document.querySelector('.title')
  title.remove()
})

const list_items = document.querySelectorAll('.list-item')
console.log(list_items)

const spaned = document.getElementById('some-text')
console.log(spaned)

const list_item_three = document.querySelector('.list-item:nth-child(3)')
list_item_three.innerText = 'This item has been changed!'