// async function fetchData() {
//     let response = await fetch('https://dummyjson.com/products', {
//         method: 'get'
//     });
//     let data = await response.json();
//     data = data.products;
//     console.log(data[0].title);
// }
// fetchData();

let productsRow = document.getElementById('productsRow');
async function fetchData() {
    let response = await fetch('https://dummyjson.com/products', {
        method: 'get'
    });
    let data = await response.json();
    data = data.products;

    productsRow.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        productsRow.innerHTML += `
        <div class="col-4 py-4">
                <div class="card" style="width: 18rem;">
                    <img src="${data[i].thumbnail}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data[i].title}</h5>
                        <p class="card-text">${data[i].description}</p>
                        <h6>$${data[i].price}</h6>
                        <a href="#" class="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>
        `
    }
}
fetchData();