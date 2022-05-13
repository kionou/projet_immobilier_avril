
function menuToggle(){
    const menuToggle= document.querySelector('.menu');
    menuToggle.classList.toggle('active')
}

function logout(){
    location.href = "/logout"
}

function non(){
    location.href = "/profil"
}

function supp(id) {  
    location.href ='/delete/' + id    
}

function editer(id) {  
    window.location ='/editer/' + id    
}

let modale = document.querySelector('#modal');
let open = document.querySelector('#open');
let closer = document.querySelector('#closer');



open.onclick = function() {
    modale.style.display = "block";
}

closer.onclick = function(e) {
    e.preventDefault()
    modale.style.display = "none";
} 

/* window.onclick = function(event) {
    event.preventDefault()
    if (event.target == modale) {
        modale.style.display = "none";
    } 
} */


// let barre = document.querySelector('.barre');
// let inpute = document.querySelector('.input-content');
// let profile = document.querySelector('.container-profil')



let formulaire = document.querySelector('#form');
let envoyer = document .querySelector('#submit')


envoyer.addEventListener('click',async (e)=>{
  console.log('qfsqgbds',e.target);
  console.log('formulaire',formulaire);
  e.preventDefault()
 

  const url = 'http://localhost:7000/editer';
  let data = new FormData(formulaire)
  let dataSerialized = Object.fromEntries(data);
  const jsonObject = {...dataSerialized,
    sendToSelf : dataSerialized.sendToself ? true : false,

}
  console.log('dataSerialized',jsonObject);

try {
 const response =  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(jsonObject),
    headers: { 
       'content-type': 'application/json'
    }
     });
     const json = await response.json()
     console.log(json);
} catch (e) {
    console.log('errr',e);
}

})


