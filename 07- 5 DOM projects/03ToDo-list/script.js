let listContainer = document.querySelector('.listContainer');
let addInput = document.querySelector('#addInput');
let addBtn = document.querySelector('.addBtn');

let list = [];

renderList = (arr) => {
    listContainer.innerHTML = '';
    arr.map(item => {

        let divElem = document.createElement('div');
        divElem.classList.add('list');
        divElem.innerHTML = `
        <p>${item.text}</p>
   `
        let buttonElem = document.createElement('button');
        buttonElem.innerText = '❌';
        divElem.appendChild(buttonElem);
        divElem.onclick = () => {
            handleRemoveList(item.id)
        }
        listContainer.append(divElem);
    })
}
renderList(list);

handleAddList = () => {
    let obj = {
        id: Date.now(),
        text: addInput.value
    }
    list.unshift(obj);
    renderList(list);
    addInput.value = '';
}
handleRemoveList = (id) => {
    let filteredList = list.filter(obj => {
        return obj.id !== id
    })
    list = filteredList;
    renderList(list);
}

addBtn.addEventListener('click', handleAddList)