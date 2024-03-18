document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const message = document.getElementById("message");
    const continueButton = document.getElementById("continueButton");
    const myImage = document.getElementById("myImage");
    const restartButton = document.getElementById("restartButton");
    const title = document.querySelector("h1"); // Seleciona o título "Para Minha Namorada"

    startButton.addEventListener("click", function () {
        startButton.classList.add("hidden");
        title.classList.add("hidden"); // Oculta o título "Para Minha Namorada"
        message.textContent = "NÃO EXISTEM PALAVRAS PARA DESCREVER O QUANTO EU TE AMO SOFIA MESQUITA";
        message.style.fontFamily = "Trebuchet MS";
        message.classList.remove("hidden");
        setTimeout(function () {
            message.classList.add("hidden");
            continueButton.classList.remove("hidden");
        }, 5000); // Exibir a mensagem por 15 segundos
    });

    continueButton.addEventListener("click", function () {
        continueButton.classList.add("hidden"); // Oculta o botão continuar
        myImage.classList.remove("hidden");
        document.body.style.overflow = "auto"; // Permitir rolar a página
        setTimeout(function () {
            myImage.classList.add("hidden");
            restartButton.classList.remove("hidden");
        }, 20000); // Exibir a imagem por 20 segundos
    });

    restartButton.addEventListener("click", function () {
        location.reload();
    });
});

// Função para trocar a cor de fundo a cada 2 segundos
setInterval(function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}, 2000);
