const buttonMedicamentos = document.querySelector("#medicamentos");
const listaRemedios = document.querySelector(".remedios");

// Variaveis da validação
const campoNome = document.querySelector("#nome");
const campoCidade = document.querySelector("#cidade");
const buttonValidacao = document.querySelector("button");

function clearForm() {
    campoNome.value = '';
    campoCidade.value = '';
}

// função da validação
buttonValidacao.addEventListener("click", function(event){
    event.preventDefault();
    // console.log("aqui e o evento", event);
    // console.log(campoNome.value);
   
    if(campoNome.value.trim() === '') {
        alert("Preencha o campo nome");
        return false;
    }

    if(campoCidade.value.trim() === '') {
        alert("Preencha o campo cidade");
        return false;
    }
clearForm()
    
});

buttonMedicamentos.addEventListener("click", function(){
    listaRemedios.classList.add("d-block");
})