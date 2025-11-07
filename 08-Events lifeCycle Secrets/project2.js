let ListContainer = document.querySelector('.ListContainer');
let ListItem = document.querySelector('.ListItem');

ListContainer.addEventListener('click',(event)=>{
    if(event.target.classList.contains('ListItem')){
    console.log(event.target.style.textDecoration = 'line-through') 
    }
})