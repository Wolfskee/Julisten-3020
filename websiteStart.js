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

gsap.to("#droppable", {
    duration: 4,
    y: "-20px",
    rotationX: 10,
    rotationY: 5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});



