const STORE=[
  {id:1,name:'Remera Oversize',price:18990,img:'assets/producto1.svg'},
  {id:2,name:'Buzo Hoodie',price:35990,img:'assets/producto2.svg'},
  {id:3,name:'Campera Denim',price:58990,img:'assets/producto3.svg'},
  {id:4,name:'Jogger Cargo',price:27990,img:'assets/producto4.svg'},
  {id:5,name:'Gorra Snapback',price:12990,img:'assets/producto5.svg'},
  {id:6,name:'Zapatillas Urban',price:89990,img:'assets/producto6.svg'},
  {id:7,name:'Camisa Cuadros',price:24990,img:'assets/producto7.svg'},
  {id:8,name:'Cinturón Cuero',price:15990,img:'assets/producto8.svg'}
];
function money(n){return new Intl.NumberFormat('es-AR',{style:'currency',currency:'ARS',maximumFractionDigits:0}).format(n)}
function getCart(){return JSON.parse(localStorage.getItem('CART')||'[]')}
function setCart(items){localStorage.setItem('CART',JSON.stringify(items));updateBadge()}
function addToCart(id){const cart=getCart();const item=cart.find(i=>i.id===id);if(item){item.qty++}else{cart.push({id,qty:1})}setCart(cart);}
function removeFromCart(id){const cart=getCart().filter(i=>i.id!==id);setCart(cart)}
function updateQty(id,qty){const cart=getCart();const it=cart.find(i=>i.id===id);if(!it)return;if(qty<=0){removeFromCart(id)}else{it.qty=qty;setCart(cart)}}
function updateBadge(){const el=document.getElementById('cartCount');if(!el)return;const total=getCart().reduce((a,b)=>a+b.qty,0);el.textContent=total}
document.addEventListener('DOMContentLoaded',updateBadge);