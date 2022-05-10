console.log('bgfe')

let users = document.querySelector('.users');
let bien = document.querySelector('.right');
let nav = document.querySelector('.left');
let contact = document.querySelector('.contact')


function contactuser(){
  users.style.display='none'
  contact.style.display='block'
}

function bienuser(){
  users.style.display='none'
  bien.style.display='block'
  contact.style.display='none'
   nav.style.display='none'
}
function client(){
//   users.style.display='none'
  bien.style.display='none'
  contact.style.display='none'
//    nav.style.display='none'
}
