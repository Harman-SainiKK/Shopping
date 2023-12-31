var arr = [
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71cBRecEqLL._SY741_.jpg",
        paragraph: " &#8377 499",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/617ZPVP7qhL._SY741_.jpg",
        paragraph: " &#8377 599",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71TzNW2FArL._SY741_.jpg",
        paragraph: " &#8377 699",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61Qgrgn6iqL._SX679_.jpg",
        paragraph: " &#8377 999",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41QvMmlReJL._SX466_.jpg",
        paragraph: " &#8377 449",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51zgJauZmeL._AC_UL320_.jpg",
        paragraph: " &#8377 769",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81aWm4pG89L._SX466_.jpg",
        paragraph: " &#8377 999",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61w9KAV4inL._SY741_.jpg",
        paragraph: " &#8377 499",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51gLonI8VsL._SX569_.jpg",
        paragraph: " &#8377 299",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51erlDVGq1L._SX569_.jpg",
        paragraph: " &#8377 399",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/31ESWFjUO9L.jpg",
        paragraph: " &#8377 799",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61x4UcZ9U2L._SY741_.jpg",
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


