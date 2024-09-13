document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('Usuario').value;
    const password = document.getElementById('senha').value;
    const errorMessage = document.getElementById('error-message');
  
    if (username.trim() === '' || password.trim() === '') {
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'Preencha todos os campos.';
    } else {
      errorMessage.style.display = 'none';
      console.log('Usuario:', username);
      console.log('senha:', password);
      // Aqui você pode adicionar a lógica para enviar os dados para o servidor, por exemplo.
    }
  });
  