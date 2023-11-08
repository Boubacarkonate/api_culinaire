//1 je créé une constante qui contient ma clé de mon api spoonocular
const API_KEY = "a96033c61a2848cd810430c1c3beeed6"

const elementListe = document.getElementById("liste-recette")

//2 Je créé mes éléménts fonction pour afficher la recette
function displayRecipes(recipes){
    elementListe.innerHTML=""
    recipes.forEach((recipe) => {
        const elementHtmlLi= document.createElement("li")
        elementHtmlLi.classList.add("item-liste")
        elementListe.appendChild(elementHtmlLi)
    
        const elementHtmlImg= document.createElement("img")
        elementHtmlImg.src = recipe.image
        // elementHtmlImg.classList.add("item-liste img")
        elementHtmlLi.appendChild(elementHtmlImg)

        const elementHtmlH2= document.createElement("h2")
        elementHtmlH2.innerText = recipe.title
        // elementHtmlLi.classList.add("item-liste h2")
        elementHtmlLi.appendChild(elementHtmlH2)

        const elementHtmlP= document.createElement("p")
        elementHtmlP.innerHTML = `|<strong> Ingredients : </strong> ${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", </br>")}`
        // elementHtmlP.classList.add("item-liste p")
        elementHtmlLi.appendChild(elementHtmlP)

        const elementHtmlA= document.createElement("a")
        // elementHtmlA.classList.add("item-liste a")
        elementHtmlA.href = recipe.sourceUrl
        elementHtmlA.target = "_blank"                          //blank permet d'ouvrir un seul onglet alors que _blank ouvre plusieurs onglets
        elementHtmlA.innerText = "voir la recette"
        elementHtmlLi.appendChild(elementHtmlA)
        
    })
}

//2 je créé une fonction asynchrone getRecipes() qui récupéra les datas de l'api
async function getRecipes(){
    //const pour utiliser la methode fetch pour indiquer où sont les données à récupérer
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
    //cons data qui 
    const data = await response.json()
    return data.recipes     

}

// 3 création d'une fonction tjrs en asynchrone, qui contient la fonction getRecipes()
async function init(){
    const recipes = await getRecipes()
    console.log(recipes);
    displayRecipes(recipes)

}

init()

getRecipes()

