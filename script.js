// linguist-language=JavaScript
// Quiz Application Logic
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correct: 1
  },
  // Add more questions
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById('question').textContent = q.question;
  
  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';
  
  q.options.forEach((option, index) => {
    const optionElement = document.createElement('div');
    optionElement.className = 'option';
    optionElement.textContent = option;
    optionElement.addEventListener('click', () => checkAnswer(index));
    optionsContainer.appendChild(optionElement);
  });
}

function checkAnswer(selectedIndex) {
  const correctIndex = quizData[currentQuestion].correct;
  const options = document.querySelectorAll('.option');
  
  options[correctIndex].classList.add('correct');
  if (selectedIndex !== correctIndex) {
    options[selectedIndex].classList.add('wrong');
  }
  
  if (selectedIndex === correctIndex) {
    score++;
  }
  
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }, 1500);
}

function showResults() {
  const quizContainer = document.querySelector('.quiz-container');
  quizContainer.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your score: ${score}/${quizData.length}</p>
    <button onclick="location.reload()">Restart Quiz</button>
  `;
}

// Initialize quiz
document.addEventListener('DOMContentLoaded', loadQuestion);
