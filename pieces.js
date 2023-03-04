const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();
const article = pieces[0];
const imageElement = document.createElement('img');
imageElement.src = article.image;
const pieceElement = document.createElement("article");
const sectionFiches = document.querySelector('.fiches');
pieceElement.appendChild(imageElement)
sectionFiches.appendChild(pieceElement);