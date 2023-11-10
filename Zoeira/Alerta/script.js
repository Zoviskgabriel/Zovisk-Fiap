const mostrarAlertaBtn = document.getElementById("mostrarAlerta");
const alerta = document.getElementById("alerta");
const fecharAlerta = document.getElementById("fecharAlerta");

mostrarAlertaBtn.addEventListener("click", function() {
  alerta.style.display = "block";
});

fecharAlerta.addEventListener("click", function() {
  alerta.style.display = "none";
});
