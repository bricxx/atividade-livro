
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


document.getElementById('btn-go-signup').addEventListener('click', () => {
  showScreen('screen-signup');
});


document.getElementById('btn-go-forgot').addEventListener('click', () => {
  showScreen('screen-forgot');
});


document.getElementById('btn-login-start').addEventListener('click', () => {
  showScreen('screen-dashboard');
});


document.getElementById('btn-create-account').addEventListener('click', () => {
  showScreen('screen-success');
});


document.getElementById('btn-start-producing').addEventListener('click', () => {
  showScreen('screen-dashboard');
});


document.getElementById('btn-send-email').addEventListener('click', () => {
  const emailInput = document.getElementById('forgot-email-input').value;
  
  
  if (emailInput.trim() !== '') {
      
      document.getElementById('forgot-step-1').classList.add('hidden');
      
      document.getElementById('forgot-step-2').classList.remove('hidden');
  }
});


document.getElementById('btn-back-from-signup').addEventListener('click', () => {
  showScreen('screen-login');
});

document.getElementById('btn-back-from-forgot').addEventListener('click', () => {
  showScreen('screen-login');
  
 
  document.getElementById('forgot-email-input').value = '';
  document.getElementById('forgot-step-1').classList.remove('hidden');
  document.getElementById('forgot-step-2').classList.add('hidden');
});

document.getElementById('btn-logout').addEventListener('click', () => {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => input.value = '');
  showScreen('screen-login');
});