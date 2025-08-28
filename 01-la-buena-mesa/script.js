document.getElementById('year').textContent=new Date().getFullYear();
function v(){document.getElementById('contacto').scrollIntoView({behavior:'smooth'})}
document.getElementById('ctaBtn').addEventListener('click',v);
document.getElementById('reservarBtn').addEventListener('click',v);
const form=document.getElementById('formReserva');
form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);alert(`¡Gracias ${d.get('nombre')}! Te vamos a escribir para confirmar la reserva.`);form.reset();});