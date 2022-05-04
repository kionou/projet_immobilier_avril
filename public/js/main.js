console.log('bonjour le monde');
let bars = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar')
console.log(navbar);

bars.addEventListener('click',()=>{
    bars.classList.toggle('fa-times');
    navbar.classList.toggle('active')

})


// $(document).ready(function(){
//     $('#open').click(function(){
//         $('.modal-container').css('transform','scale(1)');
//     });

//      $('#close').click(function(){
//         $('.modal-container').css('transform','scale(1)');
//     });
// })

let modal = document.querySelector('#modal-container');
let open = document.querySelector('#open');
let close = document.querySelector('#close');

open.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}