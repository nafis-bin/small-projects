const questions = [
  {
    question: 'What is the largest animal in the world',
    answers: [
      { text: 'shark', correct: false },
      { text: 'blue Whale', correct: true },
      { text: 'elephant', correct: false },
      { text: 'giraffe', correct: false },
    ]
  },

  {
    question: 'What is the smallest country animal in the world',
    answers: [
      { text: 'vatican city', correct: true },
      { text: 'bhutan', correct: false },
      { text: 'nepal', correct: false },
      { text: 'srilanka', correct: false },
    ]
  },

  {
    question: 'What is the largest desert in the world',
    answers: [
      { text: 'kalahari', correct: false },
      { text: 'gobi', correct: false },
      { text: 'sahara', correct: false },
      { text: 'antartica', correct: true },
    ]
  },

  {
    question: 'What is the smallest continent in the world',
    answers: [
      { text: 'asia', correct: false },
      { text: 'australia', correct: true },
      { text: 'europe', correct: false },
      { text: 'africa', correct: false },
    ]
  },
]


const question = document.querySelector('#question');
const ansBtns = document.querySelector('#answer-buttons');
const nextBtn = document.querySelector('#next-btn');

let qIdx = 0;
let score = 0;

function startQuiz() {
  qIdx = 0;
  score = 0;

  nextBtn.innerHTML = 'Next';
  showQuestion();
}

function showQuestion() {
  resetState();

  let curr_ques = questions[qIdx];

  question.innerHTML = (qIdx + 1) + '. ' + curr_ques.question;

  curr_ques.answers.forEach(ans => {
    const button = document.createElement('button');
    button.innerHTML = ans.text;
    button.classList.add('btn');
    ansBtns.appendChild(button);

    if (ans.correct) {
      button.dataset.correct = ans.correct;
    }


    button.addEventListener('click', selectAnswer);
  })
}

function resetState() {
  nextBtn.style.display = 'none';
  while (ansBtns.firstChild) {
    ansBtns.removeChild(ansBtns.firstChild)
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';

  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(ansBtns.children).forEach(btn => {
    if (btn.dataset.correct === 'true') {
      btn.classList.add('correct');
    }

    btn.disabled = true;
  })

  nextBtn.style.display = 'block';
}


function showScore() {
  resetState();
  question.innerHTML = `You scored ${score} out of ${questions.length}`
  nextBtn.innerHTML = 'Play again';
  nextBtn.style.display = 'block';
}

function handleNextBtn() {
  qIdx++;

  if (qIdx < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextBtn.addEventListener('click', () => {
  if (qIdx < questions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});

startQuiz();

