const countries = [
  
    { name: "Francia", capital: "París", options: ["París", "Roma", "Madrid"] }, // Fácil
    { name: "Bután", capital: "Thimphu", options: ["Thimphu", "Katmandú", "Colombo"] }, // Difícil
    { name: "España", capital: "Madrid", options: ["Lisboa", "Madrid", "Barcelona"] }, // Fácil
    { name: "Kirguistán", capital: "Biskek", options: ["Biskek", "Tashkent", "Dusambé"] }, // Difícil
    { name: "Italia", capital: "Roma", options: ["Roma", "Venecia", "Milán"] }, // Fácil
    { name: "Eritrea", capital: "Asmara", options: ["Asmara", "Addis Abeba", "Jartum"] }, // Difícil
    { name: "Estados Unidos", capital: "Washington D.C.", options: ["Nueva York", "Washington D.C.", "Los Ángeles"] }, // Fácil
    { name: "Malaui", capital: "Lilongüe", options: ["Lilongüe", "Maputo", "Lusaka"] }, // Difícil
    { name: "Reino Unido", capital: "Londres", options: ["Londres", "Dublín", "Edimburgo"] }, // Fácil
    { name: "Islas Salomón", capital: "Honiara", options: ["Honiara", "Port Moresby", "Apia"] }, // Difícil
    { name: "México", capital: "Ciudad de México", options: ["Ciudad de México", "Guadalajara", "Monterrey"] }, // Fácil
    { name: "Surinam", capital: "Paramaribo", options: ["Paramaribo", "Georgetown", "Cayena"] }, // Difícil
    { name: "Brasil", capital: "Brasilia", options: ["Brasilia", "Río de Janeiro", "São Paulo"] }, // Fácil
    { name: "Tayikistán", capital: "Dusambé", options: ["Dusambé", "Biskek", "Tashkent"] }, // Difícil
    { name: "Argentina", capital: "Buenos Aires", options: ["Buenos Aires", "Lima", "Santiago"] }, // Fácil
    { name: "Comoras", capital: "Moroni", options: ["Moroni", "Port Louis", "Malé"] }, // Difícil
    { name: "Alemania", capital: "Berlín", options: ["Berlín", "Múnich", "Hamburgo"] }, // Fácil
    { name: "Lesoto", capital: "Maseru", options: ["Maseru", "Mbabane", "Pretoria"] }, // Difícil
    { name: "Japón", capital: "Tokio", options: ["Tokio", "Osaka", "Seúl"] }, // Fácil
    { name: "Esuatini", capital: "Mbabane", options: ["Mbabane", "Lobamba", "Harare"] }, // Difícil
    { name: "Rusia", capital: "Moscú", options: ["Moscú", "San Petersburgo", "Kiev"] }, // Fácil
    { name: "Vanuatu", capital: "Port Vila", options: ["Port Vila", "Suva", "Numea"] }, // Difícil
    { name: "Australia", capital: "Canberra", options: ["Canberra", "Sídney", "Melbourne"] }, // Fácil
    { name: "Palau", capital: "Ngerulmud", options: ["Ngerulmud", "Majuro", "Tarawa"] }, // Difícil
    { name: "Canadá", capital: "Ottawa", options: ["Ottawa", "Toronto", "Montreal"] }, // Fácil
    { name: "Togo", capital: "Lomé", options: ["Lomé", "Cotonú", "Libreville"] }, // Difícil
    { name: "India", capital: "Nueva Delhi", options: ["Nueva Delhi", "Bombay", "Calcuta"] }, // Fácil
    { name: "Yibuti", capital: "Yibuti", options: ["Yibuti", "Mogadiscio", "Asmara"] } // Difícil
  
  
];

let currentQuestionIndex = 0;
let score = 0;
let timer = 30;
let countdown;

function startGame() {
  // Ocultar pantalla inicial y resultados, mostrar el juego
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('result').style.display = 'none';
  document.getElementById('game').style.display = 'block';

  // Reiniciar variables
  score = 0;
  currentQuestionIndex = 0;
  document.getElementById('score').textContent = `Puntaje: ${score}`;
  
  // Iniciar el temporizador y mostrar la primera pregunta
  startTimer();
  showQuestion();
}

function startTimer() {
  timer = 30;
  document.getElementById('timer').textContent = `Tiempo: ${timer}`;
  countdown = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.getElementById('timer').textContent = `Tiempo: ${timer}`;
    } else {
      endGame();
    }
  }, 1000);
}

function showQuestion() {
  const currentQuestion = countries[currentQuestionIndex];
  document.getElementById('country-name').textContent = `¿Cuál es la capital de ${currentQuestion.name}?`;

  const options = document.querySelectorAll('.option');
  currentQuestion.options.forEach((option, index) => {
    options[index].textContent = option;
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = countries[currentQuestionIndex];
  const isCorrect = currentQuestion.options[selectedOption] === currentQuestion.capital;

  if (isCorrect) {
    score++;
    document.getElementById('score').textContent = `Puntaje: ${score}`;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < countries.length) {
    showQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  clearInterval(countdown);
  document.getElementById('game').style.display = 'none';
  document.getElementById('result').style.display = 'block';
  document.getElementById('final-score').textContent = score;
}
