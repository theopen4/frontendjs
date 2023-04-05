export function ajoutListenerAvis(){
    const piecesElements = document.querySelectorAll(".fiches article button");
    
    for(let i = 0; i < piecesElements.length; i++){
        piecesElements[i].addEventListener("click", async function(event){
            const id = event.target.dataset.id;
            const reponse = await fetch(`http://localhost:8081/pieces/${id}/avis`);
            const avis = await reponse.json();
            const pieceElement = event.target.parentElement;
            const avisElement = document.createElement("p");
            for(let i = 0; i < avis.length; i++){
                avisElement.innerHTML += `<b>${avis[i].utilisateur}:</b> ${avis[i].commentaire} <br>`;
            }
            pieceElement.appendChild(avisElement);    
            

        });
    }

}
{id: 782585, title: 'Cannellini Bean and Asparagus Salad with Mushrooms', image: 'https://spoonacular.com/recipeImages/782585-312x231.jpg', imageType: 'jpg'}
1
: 
{id: 716426, title: 'Cauliflower, Brown Rice, and Vegetable Fried Rice', image: 'https://spoonacular.com/recipeImages/716426-312x231.jpg', imageType: 'jpg'}
2
: 
{id: 715497, title: 'Berry Banana Breakfast Smoothie', image: 'https://spoonacular.com/recipeImages/715497-312x231.jpg', imageType: 'jpg'}
3
: 
{id: 715415, title: 'Red Lentil Soup with Chicken and Turnips', image: 'https://spoonacular.com/recipeImages/715415-312x231.jpg', imageType: 'jpg'}
4
: 
{id: 716406, title: 'Asparagus and Pea Soup: Real Convenience Food', image: 'https://spoonacular.com/recipeImages/716406-312x231.jpg', imageType: 'jpg'}
5
: 
{id: 644387, title: 'Garlicky Kale', image: 'https://spoonacular.com/recipeImages/644387-312x231.jpg', imageType: 'jpg'}
6
: 
{id: 715446, title: 'Slow Cooker Beef Stew', image: 'https://spoonacular.com/recipeImages/715446-312x231.jpg', imageType: 'jpg'}
7
: 
{id: 782601, title: 'Red Kidney Bean Jambalaya', image: 'https://spoonacular.com/recipeImages/782601-312x231.jpg', imageType: 'jpg'}
8
: 
{id: 795751, title: 'Chicken Fajita Stuffed Bell Pepper', image: 'https://spoonacular.com/recipeImages/795751-312x231.jpg', imageType: 'jpg'}
9
: 
{id: 766453, title: "Hummus and Za'atar", image: 'https://spoonacular.com/recipeImages/766453-312x231.jpg', imageType: 'jpg'}