/*
Utilizzando i dati forniti, creare un array di
 oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni:
 nome, ruolo e foto.

 MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le 
informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di
 stringhe

 BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede

Wayne Barnett	  Founder & CEO	         wayne-barnett-founder-ceo.jpg
Angela Caroll	  Chief Editor	         angela-caroll-chief-editor.jpg
Walter Gordon	  Office Manager	     walter-gordon-office-manager.jpg
Angela Lopez	  Social Media Manager	 angela-lopez-social-media-manager.jpg
Scott Estrada	  Developer	             scott-estrada-developer.jpg
Barbara Ramos	  Graphic Designer	     barbara-ramos-graphic-designer.jpg

-creare array nomi (x usare function più avanti)
-creare array ruoli (x usare function più avanti)
-creare array img (x usare function più avanti)

-creare array oggetto
-For indice<arraynomi.length i++
    arrayoggetto.push(newObject(arraynomi[i],ruoli,img...))

-creare function newObject(nome,ruolo,img)
    -let newObject = {
        name = nome,
        role = ruolo,
        photo = img
    };
    -return newObject;

-For indice < arrayOggetto.length i++

    console.log(arrayOggetto[i].nome +
                arrayOggetto[i].ruolo +
                arrayOggetto[i].img )

    document.createelement("li").innerText= arrayOggetto[i].nome +
                                            arrayOggetto[i].ruolo +
                                            arrayOggetto[i].img 

-dopo pensare a bonus

*/

let arrayNomi = ["Wayne Barnett",
                "Angela Caroll",
                "Walter Gordon",
                "Angela Lopez",
                "Scott Estrada",
                "Barbara Ramos"
];

let arrayRuoli = ["Founder & CEO",	      
                "Chief Editor",
                "Office Manager",
                "Social Media Manager",
                "Developer",
                "Graphic Designer",
];

let arrayImg = ["img/wayne-barnett-founder-ceo.jpg",
                "img/angela-caroll-chief-editor.jpg",
                "img/walter-gordon-office-manager.jpg",
                "img/angela-lopez-social-media-manager.jpg",
                "img/scott-estrada-developer.jpg",
                "img/barbara-ramos-graphic-designer.jpg"
];

let arrayObject = [];
let teamContainerEl = document.getElementById("contenitore-team")

for (let i=0; i<arrayNomi.length; i++){
    arrayObject.push(newObject(arrayNomi[i],arrayRuoli[i],arrayImg[i]));
}

for (let i=0; i < arrayObject.length; i++){
   for(let chiave in arrayObject[i]){
    console.log(arrayObject[i][chiave]);
   }

   let newCard = createNewCard(arrayObject[i]);

}








/*funzioni--------------------------------------------------*/

function newObject(user,role,urlImg){
    let newObject = {
        nome : user,
        ruolo : role,
        img : urlImg
    };
    return newObject;
}

function createNewCard(array){
    let newCard = document.createElement("div");
    newCard.classList.add("card");
    teamContainerEl.append(newCard);
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    let img = document.createElement("img");
    img.classList.add("my-img");
    let cardName = document.createElement("span");
    cardName.classList.add("nome");
    let cardRole = document.createElement("span");
    cardRole.classList.add("ruolo");
    
    newCard.append(imgContainer);
    newCard.append(cardName);
    newCard.append(cardRole);
    imgContainer.append(img);

    img.src = array.img;
    cardName.innerHTML = array.nome;
    cardRole.innerHTML = array.ruolo;

    return newCard;
    


}