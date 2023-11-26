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


