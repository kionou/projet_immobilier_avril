console.log('bonjour le monde');
let bars = document.querySelector('.fa-bars');
let navbar = document.querySelector('.toggle')
console.log(navbar);

bars.addEventListener('click',()=>{
    bars.classList.toggle('fa-times');
    navbar.style.display='block'

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

// open.onclick = function() {
//     modal.style.display = "block";
// }

close.onclick = function(e) {
    e.preventDefault()
    modal.style.display = "none";
} 

window.onclick = function(event) {
    event.preventDefault()
    if (event.target == modal) {
        modal.style.display = "none";
    } 
}