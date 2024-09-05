let list = document.getElementsByClassName("list");
let item = document.getElementsByClassName("item");
let dots = document.querySelectorAll(".dots li");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let active = 0

next.addEventListener("click", function(){
    active++
    if (active == dots.length){
        active = 0
    }
    for (let i = 0; i < dots.length; i++){
        dots[i].classList.remove("active")
    }
    dots[active].classList.add("active")
    list[0].style.marginLeft = `-${active * 100}vw`
})

prev.addEventListener("click", function(){
    active--
    if (active < 0){
        active = dots.length - 1
    }
    for (let i = 0; i < dots.length; i++){
        dots[i].classList.remove("active")
    }
    dots[active].classList.add("active")
    list[0].style.marginLeft = `-${active * 100}vw`
})

dots.forEach((li,key) =>{
    li.addEventListener("click", function(){
        for (let i = 0; i < dots.length; i++){
            dots[i].classList.remove("active")
        }
        dots[key].classList.add("active")
        list[0].style.marginLeft = `-${key * 100}vw`
    })
})

function startSlider(){
    refreshSlider = setInterval(()=>{next.click()},3000);
}
function stopSlider(){
    clearInterval(refreshSlider);
}

list[0].addEventListener('mouseover', stopSlider);
list[0].addEventListener('mouseout', startSlider);

