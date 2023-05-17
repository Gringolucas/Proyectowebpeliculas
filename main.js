let burger = document.querySelector('.hamburger');
let link = document.querySelector('.links-menu');
let bars = document.querySelectorAll('.hamburger span');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('ul li a');


burger.addEventListener('click', () => {
  link.classList.toggle('active')
  bars.forEach(child => {child.classList.toggle('animate')});
});

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('ul li a[href*=' + id + ']').classList.add('active');
      });
    };
  });
};

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  var nombre = document.getElementById('nombre').value;
  if(nombre.length == 0) {
    alert('No has escrito nada en el nombre');
    return;
  }
  function validar_email( email ) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
  }
    var email = document.getElementById('email').value;
    if( validar_email(email) ){
    alert("El email es correcto");
  }
  else
  {
    alert("El email NO es correcto");
    return;
  }
  this.submit();
  alert("Muchas gracias por enviar el formulario");
   	document.fvalida.submit();
}