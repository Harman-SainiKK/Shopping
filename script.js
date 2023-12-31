var signup = document.querySelector(".signup")
var btn = document.querySelector(".nav button")
var page1 = document.querySelector("#page1")
var acname = document.querySelector(".signup #identity")
var passwrd = document.querySelector(".signup #password")
var conform_passwrd = document.querySelector(".signup #conform-password")

btn.addEventListener("click",function(){
    signup.style.display = "block"
})

page1.addEventListener("click",function(){
    signup.style.display = "none"
    passwrd.value = ""
    conform_passwrd.value = ""
    acname.value = ""
})





// gsap start😎

var tl = gsap.timeline()

// page 1

tl.from(".nav a, .nav input, .nav i,.nav h2,.nav button",{
    y: -80,
    opacity:0,
    duration: 0.5,
    stagger: 0.3
})


tl.from("#page1 #clothes",{
    x: -800,
    opacity: 0,
    duration: 0.6
})
tl.from("#page1 #clothes #content .image",{
    scale: 0.6,
    opacity: 0,
    stagger: 0.2
})
tl.from("#page1 #clothes #heading h1,#page1 #clothes #heading button",{
    y: 300,
    opacity: 0,
    duration: 0.4,
    stagger: 0.2
})

//page2



gsap.from("#page2 #clothes",{
    x: -800,
    opacity: 0,
    duration: 0.6,
    scrollTrigger:{
            trigger: "#page2 #clothes",
            scroller: "body",
            
            start: "top 60%",
    }
})
gsap.from("#page2 #clothes #content .image",{
    scale: 0.6,
    opacity: 0,
    delay: 1,
    stagger: 0.2,
    scrollTrigger:{
        trigger: "#page2 #clothes",
        scroller: "body",
}

})
gsap.from("#page2 #clothes #heading h1,#page2 #clothes #heading button",{
    y: 300,
    opacity: 0,
    duration: 0.4,
    delay:1.2,
    stagger: 0.3,
    scrollTrigger:{
        trigger: "#page2 #clothes",
        scroller: "body",
}
})


// page3

gsap.from("#page3 #clothes",{
    x: -800,
    opacity: 0,
    duration: 0.6,
    scrollTrigger:{
            trigger: "#page3 #clothes",
            scroller: "body",
            
            start: "top 60%",
    }
})
gsap.from("#page3 #clothes #content .image",{
    scale: 0.6,
    opacity: 0,
    delay: 1,
    stagger: 0.2,
    scrollTrigger:{
        trigger: "#page3 #clothes",
        scroller: "body",
}
})
gsap.from("#page3 #clothes #heading h1,#page3 #clothes #heading button",{
    y: 300,
    opacity: 0,
    duration: 0.4,
    delay:1.2,
    stagger: 0.3,
    scrollTrigger:{
        trigger: "#page3 #clothes",
        scroller: "body",
}
})

gsap.from("#footer",{
    y:80,
    opacity:0,
    duration: 0.6,
    scrollTrigger:{
        trigger: "#footer",
        scroller: "body",
    }
})
gsap.to("#footer i",{
    y: 10,
    repeat:-1,
    duration: 0.6,
    yoyo:true
})