let OpenModelbtn = document.querySelector('.OpenModelbtn');
let modelContainer = document.querySelector('.modelContainer');

OpenModelbtn.addEventListener('click',()=>{
    modelContainer.style.display = 'flex';
})

modelContainer.addEventListener('click',(e)=>{
    if(e.target.className === 'modelContainer' ){
    modelContainer.style.display = 'none';
}
})