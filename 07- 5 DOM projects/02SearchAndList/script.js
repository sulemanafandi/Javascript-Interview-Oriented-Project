// task list and search
let userContainer = document.querySelector('.userContainer');
let searchInput = document.querySelector('#searchInput');

const users = [{
        profileUrl: 'imageURL',
        name: 'M.Suleman',
        email: 'sulemanafandi18@gmail.com'
    },
    {
        profileUrl: 'imageURL',
        name: 'Usman',
        email: 'usman@gmail.com'
    },
    {
        profileUrl: 'imageURL',
        name: 'Ayan',
        email: 'ayan@gmail.com'
    },
    {
        profileUrl: 'imageURL',
        name: 'MAAZ',
        email: 'maaz@gmail.com'
    },
    {
        profileUrl: 'imageURL',
        name: 'Salman khan',
        email: 'salman@gmail.com'
    }
]

function renderUsers(arr) {
    userContainer.innerHTML = ''
    arr.map((item) => {

        let {
            profileUrl,
            name,
            email
        } = item;

        let divElem = document.createElement('div');
        divElem.className = 'userItem';
        divElem.innerHTML = `
            <div class="image">
            <img src=" ${profileUrl} " alt="">
            </div>

            <div class="userDetails">        
            <h3>${name}</h3>
            <h3>${email}</h3>
            </div>
     `
        userContainer.append(divElem);

    });
}

renderUsers(users);  // initial render

handleSearch = (e) => {
    let searchValue = e.target.value;
    let filteredUsers = users.filter(obj => {
        return (
            obj.name.toLowerCase().includes(searchValue.toLowerCase())
            || obj.email.toLowerCase().includes(searchValue.toLowerCase())
        )
    })
    renderUsers(filteredUsers);
}
searchInput.addEventListener('input', handleSearch);