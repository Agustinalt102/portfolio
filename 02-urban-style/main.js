const grid=document.getElementById('productGrid');document.getElementById('year').textContent=new Date().getFullYear();
function render(){grid.innerHTML=STORE.map(p=>`
  <article class="card">
    <a href="product.html?id=${p.id}"><img src="${p.img}" alt="${p.name}"></a>
    <h3>${p.name}</h3>
    <p class="price">${money(p.price)}</p>
    <div class="card-actions"><button class="btn" onclick="addToCart(${p.id})">Agregar al carrito</button></div>
  </article>`).join('')}
render();