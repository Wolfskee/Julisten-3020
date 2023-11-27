gsap.from("#logo", {
    duration: 0.75,
    scale: 0.5,
    ease: "bounce.out",
    opacity: 0,
    y: -100
});

gsap.from("header", {
    duration: 1.5,
    scale: 0.9,
    opacity: 0,
    ease: "expo.out",
    y: 20,
    rotationX: 10,
    transformOrigin: "center bottom"
});


const links = document.querySelector('nav').children;
function handleLinkClick(event) {

  console.log(links);

  event.preventDefault();

  `links.forEach(link => {
    link.classList.remove('enlarged');
  });`
  for (var i = 0; i < links.length; i++) {
    var child = links[i];
    child.classList.remove('enlarged');
  }

  event.currentTarget.classList.add('enlarged');
}


for (var i = 0; i < links.length; i++) {
  var child = links[i];
  child.addEventListener('click', handleLinkClick);
}

`links.forEach(link => {
  link.addEventListener('click', handleLinkClick);
});`
