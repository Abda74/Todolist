//recuperation des ids

const champ = document.getElementById("champ");
const ol = document.getElementById("ol");
const form = document.getElementById("form");
const noTache = document.getElementById("notache");


 form.addEventListener("submit", function (even){
     const li =document.createElement("li")

     const texte = document.createElement("span");
     texte.classList.add("texte");
     texte.textContent = champ.value;

     const spanli = document.createElement("span");
     spanli.classList.add("delete")
     spanli.innerHTML = "<i class=\"fa-solid fa-trash-can\"></i>" ;
     const spanUrge = document.createElement("span");
     spanUrge.classList.add("urge");
     spanUrge.innerHTML = "<i class=\"fa-regular fa-star\"></i>" ;


     li.appendChild(texte);
     li.appendChild(spanUrge)
     li.appendChild(spanli)

     ol.appendChild(li);
     champ.value = "";
     noTache.style.display = "none" ;
     localStorage.setItem("list",ol.innerHTML);
     even.preventDefault();

     spanli.addEventListener("click", function (){
         li.remove();
         noTache.style.display = (ol.innerHTML === "")? "block":"none";
         localStorage.setItem("list",ol.innerHTML);
     })

     spanUrge.addEventListener("click", function () {
         spanUrge.classList.toggle("gold");
     })


})


ol.innerHTML = localStorage.getItem("list");

const spanDel = document.querySelectorAll(".delete");
for (let span of spanDel){
    span.addEventListener("click", function (){
        span.parentElement.remove();
    })
}
noTache.style.display = (ol.innerHTML === "")? "block":"none";

const metas = document.getElementsByTagName("meta");
metas[1].content = `width=device-width, ${innerHeight}, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0`

window.addEventListener('load', () => {
    // Is service worker available?
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').then(() => {
            console.log('Service worker registered!');
        }).catch((error) => {
            console.warn('Error registering service worker:');
            console.warn(error);
        });
    }
});

const installbtn = document.getElementById("installBtn");

window.addEventListener("", function (event) {


})

window.beforinstallprompt = (event)=> {
    event.preventDefault();

    installbtn.classList.add("slide");

    installbtn.addEventListener("click", function () {
        installbtn.classList.remove("slide");
        setTimeout( ()=> installbtn.style.display="none", 800);
        event.prompt;
    });
}



