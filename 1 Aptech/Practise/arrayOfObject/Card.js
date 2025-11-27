let cardrow = document.getElementById('card-row');

let products = [{
    image: 'card1.png_.avif',
    title: 'Zero Evo Wireless',
    price: 'Price 3020',
    discription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius molestias corporis fugiat vitae non nam sapiente eveniet sequi, commodi blanditiis',
    category: 'Grocery'
}, {
    image: 'card2.jpg_.avif',
    title: 'Smart Watch Wireless',
    price: 'Price 2800',
    discription: 'A sleek, wireless smart watch offering seamless connectivity, health tracking, long battery life, and intuitive controls for modern, active lifestyles.',
    category: 'Sumsung'
}, {
    image: 'card3.jpg_.avif',
    title: 'Original HeadPhone ',
    price: 'Price 1020',
    discription: 'Premium original headphones delivering rich sound, deep bass, noise isolation, durable build quality, and all-day comfort for immePriceive music and crystal-clear calls.',
    category: 'Electronic'
}, {
    image: 'card4.jpg_.webp',
    title: 'Lagent Shoes ',
    price: 'Price 1520',
    discription: 'Lightweight Lagent shoes offering breathable comfort, durable grip, cushioned support, stylish design, and reliable performance for daily wear and active lifestyles.',
    category: 'Bata',
}, {
    image: 'card5.jpg_.webp',
    title: 'Airpods_pro protective ',
    price: 'Price 1520',
    discription: 'Protective AirPods Pro case offering shock absorption, scratch resistance, secure fit, lightweight durability, and stylish coverage to keep your earbuds safe anywhere',
    category: 'Electronic'
}, {
    image: 'card6.jpg_.webp',
    title: 'Kashmiri Dhussa ',
    price: 'Price 900',
    discription: 'Handcrafted Kashmiri dhussa featuring soft warm fabric, traditional patterns, durable stitching, elegant texture, and cozy comfort perfect for winter wear and cultural style',
    category: 'J.Brand'
}]

for (let i = 0; i < products.length; i++) {
    cardrow.innerHTML += `
            <div class="col-4">
                <div class="card mb-5" style="width: 18rem;">
                    <img src="${products[i].image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${products[i].title}</h5>
                        <p class="card-text">${products[i].price}</p>
                        <a href="details.html?index=${i}" class="btn btn-primary">More Details</a>
                    </div>
                </div>
            </div>
            `;
}