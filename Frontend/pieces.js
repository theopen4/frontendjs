// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();
// Création des balises 
// const article = pieces[0];
// const imageElement = document.createElement("img");
// imageElement.src = article.image;
// const nomElement = document.createElement("h2");
// nomElement.innerText = article.nom;
// const prixElement = document.createElement("p");
// prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
// const categorieElement = document.createElement("p");
// categorieElement.innerText = article.categorie ?? "(aucune catégorie)";

//Création des élements pour l'exercice
// const descriptionElement = document.createElement("p");
// descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";

// const stockElement = document.createElement("p");
// stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";

// //Rattachement de nos balises au DOM
// const sectionFiches = document.querySelector(".fiches");
// sectionFiches.appendChild(imageElement);
// sectionFiches.appendChild(nomElement);
// sectionFiches.appendChild(prixElement);
// sectionFiches.appendChild(categorieElement);

// //Ajout des éléments au DOM pour l'exercice
// sectionFiches.appendChild(descriptionElement);
// sectionFiches.appendChild(stockElement);
const sectionFiches = document.querySelector(".fiches");


for(let i = 0; i < pieces.length; i++ ){
    const article = pieces[i];
    const imageElement = document.createElement("img");
    imageElement.src = article.image
    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;
    const prixElement = document.createElement("p");
    prixElement.innerText = `prix: ${article.prix} $ (${article.prix < 35 ?'$' : '$$$'})`
    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie ?? "(aucune categorie)";
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description ?? "(pas de description)"
    const stockElement = document.createElement("p");
    stockElement.innerText = article.disponibilite ? "en stock" : "en rupture"
    const articleFiche = document.createElement("article");
    articleFiche.appendChild(imageElement);
    articleFiche.appendChild(nomElement);
    articleFiche.appendChild(prixElement);
    articleFiche.appendChild(categorieElement);
    articleFiche.appendChild(descriptionElement);
    articleFiche.appendChild(stockElement);
    sectionFiches.appendChild(articleFiche);
}
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function(){
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort((a,b) => a.prix - b.prix);
    console.log(piecesOrdonnees);
})