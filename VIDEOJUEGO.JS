const countries = [
    { name: "Francia", capital: "París", options: ["Roma", "Madrid", "París"] },
    { name: "España", capital: "Madrid", options: ["Roma", "Madrid", "Londres"] },
    { name: "Italia", capital: "Roma", options: ["Roma", "Berlín", "Lisboa"] },
    { name: "Japón", capital: "Tokio", options: ["Seúl", "Pekín", "Tokio"] },
    { name: "Reino Unido", capital: "Londres", options: ["Edimburgo", "Londres", "Dublín"] },
    { name: "Estados Unidos", capital: "Washington D.C.", options: ["Nueva York", "Los Ángeles", "Washington D.C."] },
    { name: "México", capital: "Ciudad de México", options: ["Guadalajara", "Ciudad de México", "Monterrey"] },
    { name: "Argentina", capital: "Buenos Aires", options: ["Buenos Aires", "Lima", "Santiago"] },
    { name: "Brasil", capital: "Brasilia", options: ["Brasilia", "Río de Janeiro", "São Paulo"] },
    { name: "Alemania", capital: "Berlín", options: ["Berlín", "Hamburgo", "Múnich"] },
    { name: "Canadá", capital: "Ottawa", options: ["Toronto", "Ottawa", "Vancouver"] },
    { name: "China", capital: "Pekín", options: ["Shanghái", "Pekín", "Hong Kong"] },
    { name: "Australia", capital: "Canberra", options: ["Sídney", "Melbourne", "Canberra"] },
    { name: "India", capital: "Nueva Delhi", options: ["Mumbai", "Kolkata", "Nueva Delhi"] },
    { name: "Rusia", capital: "Moscú", options: ["Moscú", "San Petersburgo", "Kazan"] },
    { name: "Sudáfrica", capital: "Pretoria", options: ["Ciudad del Cabo", "Johannesburgo", "Pretoria"] },
    { name: "Egipto", capital: "El Cairo", options: ["El Cairo", "Alejandría", "Luxor"] },
    { name: "Italia", capital: "Roma", options: ["Roma", "Milán", "Venecia"] },
    { name: "Egipto", capital: "El Cairo", options: ["El Cairo", "Tánger", "Damasco"] },
    { name: "Suecia", capital: "Estocolmo", options: ["Estocolmo", "Copenhague", "Oslo"] },
    { name: "Noruega", capital: "Oslo", options: ["Oslo", "Helsinki", "Estocolmo"] },
    { name: "Finlandia", capital: "Helsinki", options: ["Helsinki", "Tallin", "Riga"] },
    { name: "Países Bajos", capital: "Ámsterdam", options: ["Ámsterdam", "Rotterdam", "La Haya"] },
    { name: "Bélgica", capital: "Bruselas", options: ["Bruselas", "Gante", "Amberes"] },
    { name: "Portugal", capital: "Lisboa", options: ["Lisboa", "Oporto", "Coímbra"] },
    { name: "Grecia", capital: "Atenas", options: ["Atenas", "Salónica", "Heraclión"] },
    { name: "Turquía", capital: "Ankara", options: ["Estambul", "Ankara", "Esmirna"] }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timer = 30;
  let countdown;
  let gameActive = false;
  
  function startGame() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById('score').textContent = `Puntaje: ${score}`;
    document.getElementById('result').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    startTimer();
    showQuestion();
    gameActive = true;
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
    gameActive = false;
    document.getElementById('game').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('final-score').textContent = score;
  }
  
  startGame();
  