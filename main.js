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