fetch()
.then(response => response.json())
.then(data => {console.log(data);
document.querySelector("div").innerHTML="lo que tiene que decir: "+data})












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
/*esto es del slider*/