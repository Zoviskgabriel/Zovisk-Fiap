window.onload = function() {
    var car = document.querySelector('.car');
    var message = document.getElementById('loveMessage');
    var button = document.getElementById('apertaAi');
    var image = document.getElementById('image');
    var maxWidth = window.innerWidth;
  
    function moveCar() {
      car.style.left = maxWidth + 'px';
      setTimeout(function() {
        car.style.left = '-100px'; // Começa fora da tela na esquerda novamente
        setTimeout(function() {
          message.style.display = 'block'; // Mostra a mensagem após a animação do carro
          button.style.display = 'block'; // Mostra o botão após a mensagem
        }, 5000); // Espera 5 segundos após a animação do carro para mostrar a mensagem e o botão
      }, 5000); // Espera 5 segundos antes de recomeçar a animação do carro
    }
    
    moveCar(); // Inicia a animação
    
    button.addEventListener('click', function() {
      button.style.display = 'none'; // Oculta o botão
      image.style.display = 'block'; // Mostra a imagem
    });
  }
  
  
  