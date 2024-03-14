let menu = document.querySelector('#menu-bars');
console.log(menu);
let header = document.querySelector('header')
console.log(header);

menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    header.classList.toggle('active')
}
window.onscroll = ()=>{
    menu.classList.remove('fa-times')
    header.classList.remove('active')
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

let links = document.querySelectorAll('a').forEach(links =>{
    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }
});


var data = document.querySelector(".row-2");
var data12 = document.querySelector(".service")
var data13 = document.querySelector(".experience")
var data14 = document.querySelector(".portfolio")
var data15 = document.querySelector(".contact")
window.addEventListener("scroll", function(){
    
    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    const scrolled = window.scrollY;

    console.log(scrolled);

    if(scrolled>=520){
        
            data.style.cssText = "animation-name : imggggg; animation-duration : 2s;  opacity: 1"
    }

    if(scrolled>=1000){
        
            data12.style.cssText = "animation-name : imggg; animation-duration : 2s;  opacity: 1"
    }
    if(scrolled>=1650){
        
            data13.style.cssText = "animation-name : imgggy; animation-duration : 2s;  opacity: 1"
    }
    if(scrolled>=2370){
        
            data14.style.cssText = "animation-name : imgggyi; animation-duration : 2s;  opacity: 1"
    }
    if(scrolled>=2950){
        
            data15.style.cssText = "animation-name : imgggyz; animation-duration : 2s;  opacity: 1"
    }
})