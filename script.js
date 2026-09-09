// Função genérica para esconder todas as telas e mostrar apenas a desejada
function showScreen(screenId) {
  const screens = document.querySelectorAll('.screen');
  
  screens.forEach(screen => {
      screen.classList.remove('active');
      screen.classList.add('hidden');
  });

  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
      targetScreen.classList.remove('hidden');
      targetScreen.classList.add('active');
  }
}

// 1. Tela de Login -> "comece sua arte"
document.getElementById('btn-go-signup').addEventListener('click', () => {
  showScreen('screen-signup');
});

// 2. Tela de Login -> "esqueci a senhaa"
document.getElementById('btn-go-forgot').addEventListener('click', () => {
  showScreen('screen-forgot');
});

// 3. Tela de Login -> "Comece!"
document.getElementById('btn-login-start').addEventListener('click', () => {
  showScreen('screen-dashboard');
});

// 4. Tela de Cadastro -> "criar conta"
document.getElementById('btn-create-account').addEventListener('click', () => {
  showScreen('screen-success');
});

// 5. Tela de Sucesso -> "Comece a produzir!"
document.getElementById('btn-start-producing').addEventListener('click', () => {
  showScreen('screen-dashboard');
});

// === NOVA LÓGICA: Enviar E-mail na tela Esqueci a Senha ===
document.getElementById('btn-send-email').addEventListener('click', () => {
  const emailInput = document.getElementById('forgot-email-input').value;
  
  // Verifica se o usuário digitou algo
  if (emailInput.trim() !== '') {
      // Esconde o input e o botão de enviar
      document.getElementById('forgot-step-1').classList.add('hidden');
      // Mostra a mensagem final
      document.getElementById('forgot-step-2').classList.remove('hidden');
  }
});

// === Botões de voltar ===
document.getElementById('btn-back-from-signup').addEventListener('click', () => {
  showScreen('screen-login');
});

document.getElementById('btn-back-from-forgot').addEventListener('click', () => {
  showScreen('screen-login');
  
  // Reseta a tela de esqueci a senha para quando o usuário entrar de novo
  document.getElementById('forgot-email-input').value = '';
  document.getElementById('forgot-step-1').classList.remove('hidden');
  document.getElementById('forgot-step-2').classList.add('hidden');
});

document.getElementById('btn-logout').addEventListener('click', () => {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => input.value = '');
  showScreen('screen-login');
});