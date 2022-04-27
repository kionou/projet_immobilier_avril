console.log('bonjour le monde');
let bars = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar')
console.log(navbar);

bars.addEventListener('click',()=>{
    bars.classList.toggle('fa-times');
    navbar.classList.toggle('active')

})