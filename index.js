
const counterTitle = document.querySelector("h3");
let counter = 0;




const bubbleCreator = () => {
//? Création de la bulle
const bubble = document.createElement("span");

bubble.classList.add("bubble");
document.body.appendChild(bubble);

//? Permet de faire des tailles aléatoires entre 100 et 300
const size = Math.random() * 200 + 100 + "px";

bubble.style.height = size;
bubble.style.width = size;

//? position aléatoire sur la hauteur 
bubble.style.top = Math.random() * 100 + 50+  "%";

//? position aléatoire sur la largeur
bubble.style.left = Math.random() * 100 + "%";

//? permet de faire positif ou négatif
const plusMinus = Math.random() > 0.5 ? 1 : -1;

//? Déporte la bulle vers la gauche avec la variable dans le css 
bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");


//? Supprime la bulle au click
bubble.addEventListener("click", () => {
    bubble.remove();
    counter++;
    counterTitle.textContent = counter + "🫧";
});


//? Supprime automatiquement la bulle au bout de x secondes
setTimeout(() => {
    bubble.remove();
}, 8000);





};

//? création de bulle toutes les x secondes

setInterval(() => {
    bubbleCreator();
}
, 420);
