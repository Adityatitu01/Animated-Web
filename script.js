gsap.to(".nav-bar",{
    backgroundColor:"rgba(0,0,0,1)",
    durarion:0.5,
    height:"65px",
    scrollTrigger:{
        trigger:".nav-bar",
        scroller:"body",
        start:"top -15%",
        end:"top -17%",
        scrub:1

        
    }
    
})
gsap.to("#main", {
backgroundColor:"rgba(0,0,0,0.7)",
scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    start:"top -25%",
    end:"top -70%",
    scrub:3
}
})