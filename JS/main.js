
let header= `
<nav>
      <a href="#home" class="logo">Part of the Universe</a>
      <ul class="links-menu">
        <li><a href="index.html#home" class="active">Inicio</a></li>
        <li><a href="index.html#personajes">Personajes</a></li>
        <li><a href="index.html#estrenos">Estrenos</a></li>
        <li><a href="index.html#nosotros">Nosotros</a></li>
        <li><a href="contacto.html">Contacto</a></li>
      </ul>
      <button class="hamburger" type="button">
        <span class="br-1"></span>
        <span class="br-2"></span>
        <span class="br-3"></span>
      </button>
    </nav>
`

let footer= `
<div class="footer-container">
    <div class="social-icons">
      <a href="https://www.facebook.com/MarvelLatinoamerica/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
      <a href="https://twitter.com/Marvel?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><i class="fa-brands fa-twitter"></i></a>
      <a href="https://www.instagram.com/marvel/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
    </div>
    <div class="footer-nav">
      <ul>
        <li><a href="index.html#home" class="active">Inicio</a></li>
        <li><a href="index.html#personajes">Personajes</a></li>
        <li><a href="index.html#nosotros">Nosotros</a></li>
        <li><a href="contacto.html">Contacto</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>Copyright &copy; 2023 - Designed by Milu, Lucas y Norberto / Comisión 23022 Codo a Codo</p>
  </div>
  `

document.querySelector("header").innerHTML=header;
document.querySelector("footer").innerHTML=footer;

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
    let top = window.scrollX;
    let offset = sec.offsetTop;
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

/*esto es del slider*/
let sliderInner = document.querySelector(".slider--inner");
let images =
sliderInner.querySelectorAll("img");

let index = 1;

setInterval(function() {
  let percentage = index * -100;
  sliderInner.style.transform = 
  "translateX(" + percentage + "%)";
  index++;
  if (index > images.length - 1) {
    index = 0;
  }
 
}, 5000);
/*fin del slider*/

/* Porción de código para validar formulario*/
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
  function calcularEdad(fecha_nacimiento) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha_nacimiento);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
  }
    var edad = calcularEdad("2000/08/10");
    if(edad >= 18){
    alert("Eres mayor de edad :D ");
    }else{
    alert("Eres menor de edad :( ");
    }
  this.submit();
  alert("Muchas gracias por enviar el formulario");
   	document.fvalida.submit();
}



