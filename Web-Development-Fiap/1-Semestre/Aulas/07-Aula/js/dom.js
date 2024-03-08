// Criando variaveis 
const tirarDiv = document.querySelector(".tirarDiv");
const voltarDiv = document.querySelector(".voltarDiv");
const card = document.querySelector(".card");

// Criando funções 
tirarDiv.addEventListener("click", function() {
    // alert("ola")
    card.style.display = "none";
    
})

voltarDiv.addEventListener("click", function(){
    card.style.display = "block";
})
