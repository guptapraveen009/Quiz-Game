const startscreen = document.getElementById("start-screen");    // this  line connects javascript to html element using id
const quizScreen = document.getElementById("quiz-screen");   // this  line connects javascript to html element using id
const resultScreen = document.getElementById("result-screen");   // this  line connects javascript to html element using id
const startButton = document.getElementById("start-btn");   // this  line connects javascript to html element using id
const questionText = document.getElementById("questions-text");   // this line connects javascript to html element using id 
const answersContainer = document.getElementById("answer-container");   // this line connects javascript to html element using id 
const currentQuestionSpan = document.getElementById("current-question");   // this line connects javascript to html element using id 
const totalQuestionsSpan = document.getElementById("total-questions");   // this line connects javascript to html element using id 
const scoreSpan = document.getElementById("score");   // this line connects javascript to html element using id 
const finalScoreSpan = document.getElementById("final-score");   // this line connects javascript to html element using id 
const maxScoreSpan = document.getElementById("max-score");   // this line connects javascript to html element using id 
const resultMessage = document.getElementById("result-message");   // this  line connects javascript to html element using id
const restartButton = document.getElementById("restart-btn");   // this line connects javascript to html element using id 
const progressBar = document.getElementById("progress");   // this  line connects javascript to html element using id

const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },

  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },

  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },

  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },

  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];  // This a array of objects which contain questions and answers of the quiz 
const generalScience = [
  
];

// Quiz Code 
let currentQuestionIndex = 0 // When We Start The Question It Will Start With First Question Only.
let score = 0;  // Intial Score When We Start The Quiz
let answersDisabled = false; // AnswerDiabled = false Means When Answer Button Is Clicked answer button will be clickable 

totalQuestionsSpan.textContent = quizQuestions.length; // Total Questions In Quiz
maxScoreSpan.textContent = quizQuestions.length; // Max Score In The Quiz


//Event Listener
//Start Button
startButton.addEventListener("click", function start() {
  currentQuestionIndex = 0
  score = 0
  scoreSpan.textContent = score

  startscreen.classList.remove("active");
  quizScreen.classList.add("active")

  showquestion()
}) // This Is An Event Listner when You Click On Start Quiz It Move To Quiz 

function showquestion() {
  answersDisabled = false

  const currentQuestion = quizQuestions[currentQuestionIndex] // quizQuestion [0]; current question which start with 0 because quizQuestions is an array of Objects .

  currentQuestionSpan.textContent = currentQuestionIndex + 1 // Current Questions start with 1 bocause 0+1 = 1

  const progressPersent = (currentQuestionIndex / quizQuestions.length) * 100; // (1/5)*100
  progressBar.style.width = progressPersent + "%" // it add ProgressPersent %

  questionText.textContent = currentQuestion.question

  

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach(answers => {
    const button = document.createElement("button");
    button.textContent = answers.text
    button.classList.add("answer-btn");
    // data Set = It Is Property Of Button Element that allow you to Store Custom Data.
    button.dataset.correct = answers.correct

    button.addEventListener("click", function (event) {
      if (answersDisabled) {
        return answersDisabled = false
      }

      const selectButton = event.target;
      let iscorrect = selectButton.dataset.correct === "true"

      Array.from(answersContainer.children).forEach(button => { // So answersCoantianer Is A div element which is present in html in which answers button will be added but it will return and html collections on which we cannot perform forEach Operation.
        if (button.dataset.correct === "true") {
          button.classList.add("correct");
        } else {
          button.classList.add("incorrect")
        }
      })
        // Score Update
      if (iscorrect = true) {
        score++
        scoreSpan.textContent = score;
      }

      setTimeout(() => {
        currentQuestionIndex++ // Next Question

        // check If There are More Questions
        if (currentQuestionIndex < quizQuestions.length) {
          showquestion()
        } else {
          showresult()
        }
      }, 1000)
    });

    function showresult() {
      quizScreen.classList.remove("active");

      resultScreen.classList.add("active");

      finalScoreSpan.textContent = score;
      // Get Percentage 
      const Percentage = (score / quizQuestions.length) * 100
      if (Percentage === 100) {
        resultMessage.textContent = "You Have Done It Congratulations😊"
      } else if (Percentage >= 60 && Percentage <= 90) {
        resultMessage.textContent = "Good Job!"
      } else if (Percentage >= 30 && Percentage <= 50) {
        resultMessage.textContent = "You Have Tried Hard You Can Do Better Than This"
      } else {
        resultMessage.textContent = "Better Luck Next Time!"

      }
    }

    answersContainer.appendChild(button)
  })
}
// console.log(answersContainer.children);
// Restart Button 
restartButton.addEventListener("click", function restart() {
  let yn = confirm("Do You Want To Restat The Quiz");
  if (yn) {
    resultScreen.classList.remove("active");

    startscreen.classList.add("active");
  }
})