gsap.from("#logo", {
    duration: 1.5,
    scale: 0.8, 
    ease: "elastic.out(1, 0.3)", 
    opacity: 0, 
    y: -50, 
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

var tl = gsap.timeline({ repeat: -1, yoyo: true });

tl.to("#droppable", {
    duration: 4,
    y: "-20px",
    scale: 0.9,
    rotationX: 10,
    rotationY: 5,
    ease: "power1.inOut"
});

tl.to("#droppable", {
    duration: 4,
    y: "0px",
    scale: 1,
    rotationX: 0,
    rotationY: 0,
    ease: "power1.inOut"
});

