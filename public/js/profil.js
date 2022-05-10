console.log('bonjour');


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

let modale = document.querySelector('#modal');
let opene = document.querySelector('#opene');
let closer = document.querySelector('#closer');

console.log(opene);



opene.onclick = function() {
    modale.style.display = "block";
}

closer.onclick = function(e) {
    e.preventDefault()
    modale.style.display = "none";
} 

window.onclick = function(event) {
    event.preventDefault()
    if (event.target == modale) {
        modale.style.display = "none";
         
    } 
}


let barre = document.querySelector('.barre');
let inpute = document.querySelector('.input-content');
let profile = document.querySelector('.container-profil')
let elements = document.querySelectorAll('#inputvalue')
console.log(elements);

let formulaire = document.querySelector('#form');
let envoyer = document .querySelector('#submit')


// envoyer.addEventListener('click', (e)=>{
//   console.log('qfsqgbds',e.target);
//   console.log('formulaire',formulaire);
//   e.preventDefault()
 

//   const url = 'http://localhost:7000/editer';
//   let data = new FormData(formulaire)

//   console.log('data',data.keys);
// //   console.warn(xhr.responseText)

// //   var request = new Request(url, {
// //     method: 'POST',
// //     body: data,
// //   })

//   fetch(url, {
//     method: 'POST',
//     body: data,
//     // headers: { 
//     //    'content-type': 'text/plain'
//     // }
    
//   })
// .then(function(res) {
//   console.log('resqqq',res);
// }).catch(function (err) {
//     console.log('front ero',err);
// })
// })

    envoyer.addEventListener('click', (e)=>{
        e.preventDefault()
        var formData ;
        for (let i = 0; i < elements.length; i++) {
            formData= JSON.stringify(elements[i].name,elements[i].value)  
        console.log(elements[i].name);

        }
        let xhr = new XMLHttpRequest();
        const url = 'http://localhost:7000/editer';
        let data = new FormData(formData)
         xhr.open("post",url,true);
         xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200){
        console.log(xhr.responseText);

        }
    };
    xhr.send(formData)

    })
