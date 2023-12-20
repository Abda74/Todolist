
//Prendre en compte la taille du clavier
const metas = document.getElementsByTagName("meta");
metas[1].content = `width=device-width, ${innerHeight}, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0`

//recuperaton de la balise form
const form = document.getElementById("form");
const ol = document.getElementById("ol");
const noTache = document.getElementById("notache");
 form.addEventListener("submit", function (even){

     const champ = document.getElementById("champ");


     //Creation d'une liste
     const li =document.createElement("li")
     const texte = document.createElement("span");
     const spanli = document.createElement("span");
     const spanUrge = document.createElement("span");

     texte.classList.add("texte");
     spanli.classList.add("delete");
     spanUrge.classList.add("urge");

     texte.textContent = champ.value;

     spanli.innerHTML = "<i class=\"fa-solid fa-trash-can\"></i>"; //icone corbeile;
     spanUrge.innerHTML = "<i class=\"fa-regular fa-star\"></i>" ; //icone etoile

     //Ajout des spans creer dans la liste
     li.appendChild(texte);
     li.appendChild(spanUrge)
     li.appendChild(spanli)
     ol.appendChild(li);

     //Vider le champ input de type texte lorsqu'une tâche a été ajouter
     champ.value = "";
     noTache.style.display = (ol.innerHTML === "")? "block":"none";
     localStorage.setItem("list" , ol.innerHTML);
     even.preventDefault();

     //Suppression d'une liste
     spanli.addEventListener("click", function (){
         del(li);
         localStorage.setItem("list" , ol.innerHTML);
         noTache.style.display = (ol.innerHTML === "")? "block":"none";
     });

     //Ajouter une liste comme favorie
     spanUrge.addEventListener("click", function () {
         spanUrge.classList.toggle("gold");
     });



})

function del(element) {
    element.remove();
}

    ol.innerHTML = localStorage.getItem("list");

const spanDel = document.querySelectorAll(".delete");
spanDel.forEach(span =>
    span.addEventListener("click" , ()=>{
        del(span.parentElement);
        localStorage.setItem("list" , ol.innerHTML);
    }));
noTache.style.display = (ol.innerHTML === "")? "block":"none";

const installbtn = document.getElementById("installBtn");
    setTimeout(()=>{
        installbtn.classList.add("slide");
    }, 3000);

setTimeout(()=>{
    installbtn.classList.remove("slide");
}, 6000);


