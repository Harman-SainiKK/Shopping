var arr = [
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/416UE70qJ0L._SX679_.jpg",
        paragraph: " &#8377 499",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41dFq2Y3ScL._SX679_.jpg",
        paragraph: " &#8377 599",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/418lbXrqBWL._SX679_.jpg",
        paragraph: " &#8377 699",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51u9BEzQ5gL._SX679_.jpg",
        paragraph: " &#8377 999",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51HBGIvBC3L._SX679_.jpg",
        paragraph: " &#8377 449",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41STApZizVL._SX679_.jpg",
        paragraph: " &#8377 769",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41i17lednkL._SX679_.jpg",
        paragraph: " &#8377 999",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41812-2CscL._SX679_.jpg",
        paragraph: " &#8377 499",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51azuJhzeRL._SX679_.jpg",
        paragraph: " &#8377 299",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/517UKrNyq2L._SX679_.jpg",
        paragraph: " &#8377 399",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/511GoMvffQL._SX679_.jpg",
        paragraph: " &#8377 799",
        icon: "ri-shopping-cart-2-line"
    },
    {
        photo: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51jLSssKVkL._SX679_.jpg",
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
