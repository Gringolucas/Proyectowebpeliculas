
let header= `
<nav>
      <a href="#" class="logo">Proyecto 2</a>
      <ul class="links-menu">
        <li><a href="#home" class="active">Inicio</a></li>
        <li><a href="#personajes">Personajes</a></li>
        <li><a href="#about">Nosotros</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <button class="hamburger" type="button">
        <span class="br-1"></span>
        <span class="br-2"></span>
        <span class="br-3"></span>
      </button>
    </nav>
`
document.querySelector("header").innerHTML=header;

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



