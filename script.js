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