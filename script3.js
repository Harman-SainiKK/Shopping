var arr = [
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61-glkZF5TL._SX625_.jpg",
        paragraph: " &#8377 499",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51U7ifnvlhL._SX625_.jpg",
        paragraph: " &#8377 599",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61BwndehQ-L._SY625_.jpg",
        paragraph: " &#8377 699",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61x63wCTIIL._SY625_.jpg",
        paragraph: " &#8377 999",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61T31J0XDOL._AC_UL320_.jpg",
        paragraph: " &#8377 449",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71cflgAolqL._SY625_.jpg",
        paragraph: " &#8377 769",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/6143nGlNWKL._SY625_.jpg",
        paragraph: " &#8377 999",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/613JYxJjt2L._SY625_.jpg",
        paragraph: " &#8377 499",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71ZUdgFci0L._SY625_.jpg",
        paragraph: " &#8377 299",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61QJ+2lv8EL._SY625_.jpg",
        paragraph: " &#8377 399",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61FMl0cnaBL._SY575_.jpg",
        paragraph: " &#8377 799",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61uNOuFK5yL._SY575_.jpg ",
        paragraph: " &#8377 1099",
        icon: "ri-shopping-cart-2-line"
    }
]

var container = document.querySelector("#container")
var clutter = ""

arr.forEach(function (elem) {
    clutter += `
    <div class="images">
        <img  src="${elem.photo}" alt="">  
        <div class="about">
            <p>${elem.paragraph}</p>
            <i class="${elem.icon}"></i>
         </div>
    </div>
    `

})
container.innerHTML = clutter



var signup = document.querySelector(".signup")
var btn = document.querySelector(".nav button")
var container = document.querySelector("#container")
var acname = document.querySelector(".signup #identity")
var passwrd = document.querySelector(".signup #password")
var conform_passwrd = document.querySelector(".signup #conform-password")

btn.addEventListener("click",function(){
    signup.style.display = "block"
})

container.addEventListener("click",function(){
    signup.style.display = "none"
    passwrd.value = ""
    conform_passwrd.value = ""
    acname.value = ""
})
