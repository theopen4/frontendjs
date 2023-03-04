const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();
 
for( let i = 0; i < pieces.length; i++){
    const article = pieces[i];
    const sectionFiches = document.querySelector('.fiches');
    const pieceElement = document.createElement('article');
    const imageElement = document.createElement('img');
    imageElement.src = article.image
    sectionFiches.appendChild(pieceElement);
    pieceElement.appendChild(imageElement); 

}

/*for (let i = 0; i < pieces.length; i++) {

    const article = pieces[i];
    // Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");
    // Création d’une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");
    // Création des balises 
    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    sectionFiches.appendChild(pieceElement);
    // On rattache l’image à pieceElement (la balise article)
    pieceElement.appendChild(imageElement);
}*/