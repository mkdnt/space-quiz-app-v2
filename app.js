//Setup store with array of questions and global variables to grab later
const store = {

  questions: [
    {
      question: 'How many planets are in the solar system?',
      answers: [
        '10 planets',
        '7 planets',
        '9 planets',
        '8 planets'
      ],
      correctAnswer: '8 planets',
    },
    {
      question: 'What entity boasts a gravitational pull so powerful that even light cannot escape?',
      answers: [
        'Black hole',
        'Sun',
        'Neutron Star',
        'Jupiter',
      ],
      correctAnswer: 'Black hole',
    },
    {
      question: 'What is the closest star to earth after the sun?',
      answers: [
        'Beta Centauri',
        'Milky Way',
        'Alpha Centauri A',
        'North Star',
      ],
      correctAnswer: 'Alpha Centauri A',
    },
    {
      question: 'How old is the solar system?',
      answers: [
        '800 Million Years Old',
        '11.2 Million Years Old',
        '11 Billion Years Old',
        '13.8 Billion Years Old',
      ],
      correctAnswer: '13.8 Billion Years Old',
    },
    {
      question: 'What planet does the moon Europa orbit?',
      answers: [
        'Neptune',
        'Jupiter',
        'Venus',
        'Pluto',
      ],
      correctAnswer: 'Jupiter',
    }],
  //variables that need to be stored outside of a function
  quizStarted: false,
  questionNumber: 0,
  score: 0,
};

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return JUST HTML templates to be inserted into DOM via render functions below

function startPage() {
  let startPage = `
  <header>
  <h1>Space Quiz</h1>
  </header>
  <div class="card">
  <h2>Welcome to the Final Frontier!</h2>
  <p>Test your knowledge about the deep abyss that is all around you...</p>
  <button id="start">Start Quiz</button>
</div>`;
  return startPage;
}
//Grab questions, score, and questionNumber from store
function questionPage() {
  let question = store.questions[store.questionNumber];

  let questionPage = `
  <header>
  <h1>Space Quiz</h1>
  </header>
  <div class="card">
    <h2>Question ${store.questionNumber + 1} of ${store.questions.length}</h2>
  <fieldset>
    <legend><h3>${question.question}</h3>
    <form>
        <div class="form">
        <input type="radio" class="radio" name="answer" required="required" id= "${question.answers[0]}" value="${question.answers[0]}">
        <label for='${question.answers[0]}'>${question.answers[0]}</label>
        <br>
        <input type="radio" class="radio" name="answer" required="required" id= "${question.answers[1]}" value="${question.answers[1]}">
        <label for='${question.answers[1]}'>${question.answers[1]}</label>
        <br>
        <input type="radio" class="radio" name="answer" required="required" id= "${question.answers[2]}" value="${question.answers[2]}">
        <label for='${question.answers[2]}'>${question.answers[2]}</label>
        <br>
        <input type="radio" class="radio" name="answer" required="required" id= "${question.answers[3]}" value="${question.answers[3]}">
        <label for='${question.answers[3]}'>${question.answers[3]}</label>
        <br>
        </div>
        <button type="submit">Submit your answer</button>
    </form>
  </fieldset>
    <br>
    <p> Current Score: ${store.score} out of ${store.questionNumber}</p>
  </div>`;
  return questionPage;
}


function correctResultPage() {
  //get current question number
  const currentQuestionNumber = store.questionNumber - 1;
  let correctResultPage = `
  <header>
  <h1>Space Quiz</h1>
  </header>
    <div class="card">
    <h1>Out of this World!</h1>
    <p>You got it right - ${store.questions[currentQuestionNumber].correctAnswer} is correct!</p>
    <p>Your current score is ${store.score} out of ${currentQuestionNumber + 1}.</p>
    <button id="next">Next Question</button>
    </div>`;
  return correctResultPage;
}

function correctResultFinalPreviewPage() {
  const currentQuestionNumber = store.questionNumber - 1;
  let correctResultFinalPreviewPage = `
  <header>
  <h1>Space Quiz</h1>
  </header>
  <div class="card">
  <h1>Out of this World!</h1>
  <p>You got it right - ${store.questions[currentQuestionNumber].correctAnswer} is correct!</p>
  <p>Go to the next page to see your final results!</p>
  <button id="final">Final Results</button>
  </div>`;
  return correctResultFinalPreviewPage;
}

function incorrectResultPage() {
  const currentQuestionNumber = store.questionNumber - 1;
  let incorrectResultPage = `
  <header>
  <h1>Space Quiz</h1>
  </header>
  <div class="card">
    <h1>Oh no!</h1>
    <p>You chose the wrong answer. The correct answer was ${store.questions[currentQuestionNumber].correctAnswer}.</p>
    <p>Your current score is ${store.score} out of ${currentQuestionNumber + 1}.</p>
    <button id="next">Next Question</button>
    </div>`;
  return incorrectResultPage;
}


function incorrectResultFinalPreviewPage() {
  const currentQuestionNumber = store.questionNumber - 1;
  let incorrectResultFinalPreviewPage = `
  <header>
  <h1>Space Quiz</h1>
  </header>
  <div class="card">
  <h1>Oh no!</h1>
  <p>You chose the wrong answer. The correct answer was ${store.questions[currentQuestionNumber].correctAnswer}.</p>
  <p>Go to the next page to see your final results!</p>
  <button id="final">Final Results</button>
  </div>`;
  return incorrectResultFinalPreviewPage;
}

function finalResultsPage() {
  let finalResultsPage =
    `<header>
  <h1>Space Quiz</h1>
  </header>
    <div class="card">
      <h1>Congrats you Finished!</h1>
      <p>Your total score is ${store.score} out of a possible ${store.questionNumber}.</p>
      <button id="restart">Restart Quiz</button>
      </div>`;
  return finalResultsPage;
}

/********** RENDER FUNCTION(S) **********/

// These functions conditionally replace the contents of the <main> tag based on the state of the store
//every "page" given specific rendering function

function render() {
  $('main').html(startPage());
}

function renderStart() {
  $('main').html(questionPage());
}

function renderIncorrectResultPreviewPage() {
  $('main').html(incorrectResultFinalPreviewPage());
}

function renderIncorrectResultPage() {
  $('main').html(incorrectResultPage());
}

function renderCorrectResultPreviewPage() {
  $('main').html(correctResultFinalPreviewPage());
}

function renderCorrectResultPage() {
  $('main').html(correctResultPage());
}

function renderFinalResults() {
  $('main').html(finalResultsPage());
}
/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
//tells DOM what to do next when specified events happen
//manipulates the store
function handleStartQuiz() {
  $('main').on('click', '#start', function (evt) {
    evt.preventDefault();
    store.questionNumber = 0;
    store.score = 0;
    store.quizStarted = true;
    renderStart();
  });
}

function handleAnswerSubmit() {
  $('main').on('submit', 'form', function (evt) {
    evt.preventDefault();
    store.questionNumber++;
    checkAnswer();
  });
}

function handleNextQuestion() {
  $('main').on('click', '#next', function () {
    quizStart();
  });
}

function handleFinalResults() {
  $('main').on('click', '#final', function () {
    renderFinalResults();
  });
}

function handleRestartQuiz() {
  $('main').on('click', '#restart', function () {
    store.quizStarted = false;
    render();
  });
}

function handleCorrectAnswer(){
  store.score++;
  whichCorrectResultPage();
}

//*************Flow Logic Functions*********
//functions that controls what pages get rendered 
function quizStart() {
  if (store.quizStarted === false) {
    render();
  }
  else if (store.quizStarted) {
    renderStart();
  }
}

function checkAnswer() {
  const selectedAnswer = $('input[name="answer"]:checked').val();
  if (selectedAnswer === store.questions[store.questionNumber -1].correctAnswer) {
    handleCorrectAnswer();
  }
  else if (selectedAnswer !== store.questions[store.questionNumber -1].correctAnswer) {
    whichIncorrectResultPage();
  }
}

function whichCorrectResultPage() {
  if (store.questionNumber !== store.questions.length) {
    renderCorrectResultPage();
  }
  else if (store.questionNumber === store.questions.length) {
    renderCorrectResultPreviewPage();
  }
}

function whichIncorrectResultPage() {
  if (store.questionNumber !== store.questions.length) {
    renderIncorrectResultPage();
  }

  else if (store.questionNumber === store.questions.length) {
    renderIncorrectResultPreviewPage();
  }
}
//functions that let the user "control" the app that are loaded at the beginning
function main() {
  quizStart();
  handleStartQuiz();
  handleAnswerSubmit();
  handleNextQuestion();
  handleRestartQuiz();
  handleFinalResults();
}



$(main);