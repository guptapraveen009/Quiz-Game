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
// +++++++++++++++++++++++++++++++++++++++++++++++ Adding Topic Options ++++++++++++++++++++++++++++++++++++++++++++++++ 
const optionscreen = document.getElementById("drop-down-list-screen")
const Droplist = document.getElementById("D-List");
const selectoption = document.getElementById("select");
const gkoption = document.getElementById("gk");
const scienceoption = document.getElementById("science");
const historyoption = document.getElementById("history");
const biooption = document.getElementById("bio");
const ecooption = document.getElementById("eco");
const mathsoption = document.getElementById("maths");
const englishoption = document.getElementById("english");
const geooption = document.getElementById("geo");
const phyoption = document.getElementById("phy");
const caoption = document.getElementById("ca");
const continuebtn = document.getElementById("next");
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
  {
    Question: "What is the capital city of India?",
    Answer: [
      { text: "Mumbai", correct: false },
      { text: "New Delhi", correct: true },
      { text: "Kolkata", correct: false },
      { text: "Chennai", correct: false },
    ],
  },
  {
    Question: "How many days are there in one week?",
    Answer: [
      { text: "Five", correct: false },
      { text: "Six", correct: false },
      { text: "Seven", correct: true },
      { text: "Eight", correct: false },
    ],
  },
  {
    Question: "Which animal is officially recognized as the national animal of India?",
    Answer: [
      { text: "Tiger", correct: true },
      { text: "Elephant", correct: false },
      { text: "Lion", correct: false },
      { text: "Horse", correct: false },
    ],
  },
  {
    Question: "Which continent is the largest in the world by area?",
    Answer: [
      { text: "Africa", correct: false },
      { text: "Australia", correct: false },
      { text: "Europe", correct: false },
      { text: "Asia", correct: true },
    ],
  },
  {
    Question: "Who is known as the Father of the Nation in India?",
    Answer: [
      { text: "Jawaharlal Nehru", correct: false },
      { text: "Subhash Chandra Bose", correct: false },
      { text: "Mahatma Gandhi", correct: true },
      { text: "Sardar Patel", correct: false },
    ],
  },
  {
    Question: "What is the official currency used in India?",
    Answer: [
      { text: "Rupee", correct: true },
      { text: "Euro", correct: false },
      { text: "Pound", correct: false },
      { text: "Dollar", correct: false },
    ],
  },
  {
    Question: "Which river is considered the longest river in the world?",
    Answer: [
      { text: "Amazon", correct: false },
      { text: "Yangtze", correct: false },
      { text: "Nile", correct: true },
      { text: "Ganga", correct: false },
    ],
  },
  {
    Question: "Which desert is the largest hot desert in the world?",
    Answer: [
      { text: "Thar Desert", correct: false },
      { text: "Kalahari Desert", correct: false },
      { text: "Sahara Desert", correct: true },
      { text: "Gobi Desert", correct: false },
    ],
  },
  {
    Question: "Which mountain peak is the highest in the world above sea level?",
    Answer: [
      { text: "Mount Everest", correct: true },
      { text: "Kanchenjunga", correct: false },
      { text: "K2", correct: false },
      { text: "Annapurna", correct: false },
    ],
  },
  {
    Question: "Which was the first artificial satellite launched by India?",
    Answer: [
      { text: "Rohini", correct: false },
      { text: "INSAT", correct: false },
      { text: "Bhaskara", correct: false },
      { text: "Aryabhata", correct: true },
    ],
  },
];

const science = [
  {
    Question: "Which gas do human beings breathe in to survive?",
    Answer: [
      { text: "Nitrogen", correct: false },
      { text: "Carbon dioxide", correct: false },
      { text: "Hydrogen", correct: false },
      { text: "Oxygen", correct: true },
    ],
  },
  {
    Question: "Which sense organ helps us to see objects?",
    Answer: [
      { text: "Ear", correct: false },
      { text: "Nose", correct: false },
      { text: "Eye", correct: true },
      { text: "Skin", correct: false },
    ],
  },
  {
    Question: "At what temperature does water boil under normal conditions?",
    Answer: [
      { text: "50°C", correct: false },
      { text: "90°C", correct: false },
      { text: "100°C", correct: true },
      { text: "120°C", correct: false },
    ],
  },
  {
    Question: "Which planet is known as the Red Planet in our solar system?",
    Answer: [
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Mars", correct: true },
      { text: "Saturn", correct: false },
    ],
  },
  {
    Question: "Which vitamin is produced in the human body when exposed to sunlight?",
    Answer: [
      { text: "Vitamin A", correct: false },
      { text: "Vitamin B", correct: false },
      { text: "Vitamin C", correct: false },
      { text: "Vitamin D", correct: true },
    ],
  },
  {
    Question: "Which is the hardest naturally occurring substance on Earth?",
    Answer: [
      { text: "Gold", correct: false },
      { text: "Iron", correct: false },
      { text: "Silver", correct: false },
      { text: "Diamond", correct: true },
    ],
  },
  {
    Question: "What is the chemical symbol used to represent iron?",
    Answer: [
      { text: "Ir", correct: false },
      { text: "In", correct: false },
      { text: "Fe", correct: true },
      { text: "Fi", correct: false },
    ],
  },
  {
    Question: "Which type of blood cells help the body to fight infections?",
    Answer: [
      { text: "Red Blood Cells", correct: false },
      { text: "Platelets", correct: false },
      { text: "Plasma", correct: false },
      { text: "White Blood Cells", correct: true },
    ],
  },
  {
    Question: "What type of energy is stored in the food we eat?",
    Answer: [
      { text: "Heat energy", correct: false },
      { text: "Light energy", correct: false },
      { text: "Mechanical energy", correct: false },
      { text: "Chemical energy", correct: true },
    ],
  },
  {
    Question: "What is the pH value of pure water?",
    Answer: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ],
  },
]

const history = [
 {
    Question: "Who was the first Prime Minister of independent India?",
    Answer: [
      { text: "Mahatma Gandhi", correct: false },
      { text: "Sardar Patel", correct: false },
      { text: "Jawaharlal Nehru", correct: true },
      { text: "Subhash Chandra Bose", correct: false },
    ],
  },
  {
    Question: "Who discovered America in the year 1492?",
    Answer: [
      { text: "Vasco da Gama", correct: false },
      { text: "Ferdinand Magellan", correct: false },
      { text: "Christopher Columbus", correct: true },
      { text: "James Cook", correct: false },
    ],
  },
  {
    Question: "Who is popularly known as the Iron Man of India?",
    Answer: [
      { text: "Jawaharlal Nehru", correct: false },
      { text: "Subhash Chandra Bose", correct: false },
      { text: "Sardar Vallabhbhai Patel", correct: true },
      { text: "Dr. B. R. Ambedkar", correct: false },
    ],
  },
  {
    Question: "In which year did India gain independence from British rule?",
    Answer: [
      { text: "1945", correct: false },
      { text: "1946", correct: false },
      { text: "1947", correct: true },
      { text: "1950", correct: false },
    ],
  },
  {
    Question: "Who is the author of the ancient epic Ramayana?",
    Answer: [
      { text: "Tulsidas", correct: false },
      { text: "Kalidasa", correct: false },
      { text: "Valmiki", correct: true },
      { text: "Ved Vyasa", correct: false },
    ],
  },
  {
    Question: "In which city is the Taj Mahal located?",
    Answer: [
      { text: "Delhi", correct: false },
      { text: "Jaipur", correct: false },
      { text: "Agra", correct: true },
      { text: "Lucknow", correct: false },
    ],
  },
  {
    Question: "Who was the founder and first ruler of the Mughal Empire in India?",
    Answer: [
      { text: "Akbar", correct: false },
      { text: "Humayun", correct: false },
      { text: "Babur", correct: true },
      { text: "Aurangzeb", correct: false },
    ],
  },
  {
    Question: "Which movement was launched by Mahatma Gandhi in 1942?",
    Answer: [
      { text: "Civil Disobedience Movement", correct: false },
      { text: "Swadeshi Movement", correct: false },
      { text: "Quit India Movement", correct: true },
      { text: "Khilafat Movement", correct: false },
    ],
  },
  {
    Question: "Who was the last Governor-General of independent India?",
    Answer: [
      { text: "Lord Mountbatten", correct: false },
      { text: "Jawaharlal Nehru", correct: false },
      { text: "C. Rajagopalachari", correct: true },
      { text: "Lord Linlithgow", correct: false },
    ],
  },
  {
    Question: "Under which Act was the system of dyarchy introduced in India?",
    Answer: [
      { text: "Indian Councils Act, 1909", correct: false },
      { text: "Government of India Act, 1935", correct: false },
      { text: "Government of India Act, 1919", correct: true },
      { text: "Indian Independence Act, 1947", correct: false },
    ],
  },
]

const biology = [
 {
    Question: "Which organ in the human body pumps blood to all parts?",
    Answer: [
      { text: "Brain", correct: false },
      { text: "Lungs", correct: false },
      { text: "Heart", correct: true },
      { text: "Kidney", correct: false },
    ],
  },
  {
    Question: "Which part of a plant prepares food through photosynthesis?",
    Answer: [
      { text: "Root", correct: false },
      { text: "Stem", correct: false },
      { text: "Leaf", correct: true },
      { text: "Flower", correct: false },
    ],
  },
  {
    Question: "How many lungs does a normal human being have?",
    Answer: [
      { text: "One", correct: false },
      { text: "Three", correct: false },
      { text: "Two", correct: true },
      { text: "Four", correct: false },
    ],
  },
  {
    Question: "Which gas is released during the process of photosynthesis?",
    Answer: [
      { text: "Carbon dioxide", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Oxygen", correct: true },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    Question: "Which organ helps human beings in breathing?",
    Answer: [
      { text: "Heart", correct: false },
      { text: "Brain", correct: false },
      { text: "Lungs", correct: true },
      { text: "Liver", correct: false },
    ],
  },
  {
    Question: "Which is the largest organ in the human body?",
    Answer: [
      { text: "Heart", correct: false },
      { text: "Liver", correct: false },
      { text: "Skin", correct: true },
      { text: "Brain", correct: false },
    ],
  },
  {
    Question: "What is the basic structural and functional unit of life?",
    Answer: [
      { text: "Atom", correct: false },
      { text: "Tissue", correct: false },
      { text: "Cell", correct: true },
      { text: "Organ", correct: false },
    ],
  },
  {
    Question: "Which blood group is known as the universal donor?",
    Answer: [
      { text: "AB+", correct: false },
      { text: "A+", correct: false },
      { text: "B−", correct: false },
      { text: "O−", correct: true },
    ],
  },
  {
    Question: "Which vitamin helps in blood clotting?",
    Answer: [
      { text: "Vitamin A", correct: false },
      { text: "Vitamin B", correct: false },
      { text: "Vitamin C", correct: false },
      { text: "Vitamin K", correct: true },
    ],
  },
  {
    Question: "What is the scientific name of modern human beings?",
    Answer: [
      { text: "Homo erectus", correct: false },
      { text: "Homo habilis", correct: false },
      { text: "Homo sapiens", correct: true },
      { text: "Australopithecus", correct: false },
    ],
  },
]

const economic = [
   {
    Question: "What is the main purpose of money in daily life?",
    Answer: [
      { text: "For decoration purposes", correct: false },
      { text: "For storing items", correct: false },
      { text: "For buying goods and services", correct: true },
      { text: "For traveling only", correct: false },
    ],
  },
  {
    Question: "What do we call a person who buys goods or services?",
    Answer: [
      { text: "Seller", correct: false },
      { text: "Trader", correct: false },
      { text: "Consumer", correct: true },
      { text: "Broker", correct: false },
    ],
  },
  {
    Question: "What do we call a person who produces or sells goods?",
    Answer: [
      { text: "Consumer", correct: false },
      { text: "Buyer", correct: false },
      { text: "Producer", correct: true },
      { text: "User", correct: false },
    ],
  },
  {
    Question: "What does the term income generally mean?",
    Answer: [
      { text: "Savings", correct: false },
      { text: "Tax", correct: false },
      { text: "Earnings received from work or business", correct: true },
      { text: "Loss", correct: false },
    ],
  },
  {
    Question: "What does saving money usually mean?",
    Answer: [
      { text: "Spending money", correct: false },
      { text: "Borrowing money", correct: false },
      { text: "Keeping money for future use", correct: true },
      { text: "Donating money", correct: false },
    ],
  },
  {
    Question: "What is the main function of a bank?",
    Answer: [
      { text: "Playing games", correct: false },
      { text: "Studying books", correct: false },
      { text: "Keeping and managing money", correct: true },
      { text: "Cooking food", correct: false },
    ],
  },
  {
    Question: "What does demand mean in economics?",
    Answer: [
      { text: "Selling goods", correct: false },
      { text: "Producing goods", correct: false },
      { text: "Willingness and ability to buy goods", correct: true },
      { text: "Importing goods", correct: false },
    ],
  },
  {
    Question: "What does supply refer to in economics?",
    Answer: [
      { text: "Price of goods", correct: false },
      { text: "Demand for goods", correct: false },
      { text: "Availability of goods in the market", correct: true },
      { text: "Income of people", correct: false },
    ],
  },
  {
    Question: "Which type of economy does India follow?",
    Answer: [
      { text: "Capitalist economy", correct: false },
      { text: "Socialist economy", correct: false },
      { text: "Mixed economy", correct: true },
      { text: "Traditional economy", correct: false },
    ],
  },
  {
    Question: "What does inflation mean in an economy?",
    Answer: [
      { text: "Fall in prices", correct: false },
      { text: "Stable prices", correct: false },
      { text: "Rise in prices of goods and services", correct: true },
      { text: "No circulation of money", correct: false },
    ],
  },
]

const maths = [
    {
    Question: "What is the sum of five and five?",
    Answer: [
      { text: "Eight", correct: false },
      { text: "Nine", correct: false },
      { text: "Ten", correct: true },
      { text: "Eleven", correct: false },
    ],
  },
  {
    Question: "What is the square of the number four?",
    Answer: [
      { text: "Eight", correct: false },
      { text: "Twelve", correct: false },
      { text: "Sixteen", correct: true },
      { text: "Twenty", correct: false },
    ],
  },
  {
    Question: "How many sides does a triangle have?",
    Answer: [
      { text: "Two sides", correct: false },
      { text: "Four sides", correct: false },
      { text: "Three sides", correct: true },
      { text: "Five sides", correct: false },
    ],
  },
  {
    Question: "What is the result of multiplying ten by ten?",
    Answer: [
      { text: "Ten", correct: false },
      { text: "Fifty", correct: false },
      { text: "One hundred", correct: true },
      { text: "Two hundred", correct: false },
    ],
  },
  {
    Question: "What is the approximate value of pi (π)?",
    Answer: [
      { text: "2.14", correct: false },
      { text: "3", correct: false },
      { text: "3.14", correct: true },
      { text: "4.14", correct: false },
    ],
  },
  {
    Question: "What is the cube of the number two?",
    Answer: [
      { text: "Four", correct: false },
      { text: "Six", correct: false },
      { text: "Eight", correct: true },
      { text: "Ten", correct: false },
    ],
  },
  {
    Question: "Which is the smallest prime number?",
    Answer: [
      { text: "One", correct: false },
      { text: "Three", correct: false },
      { text: "Two", correct: true },
      { text: "Five", correct: false },
    ],
  },
  {
    Question: "What is fifty percent of two hundred?",
    Answer: [
      { text: "Fifty", correct: false },
      { text: "Seventy-five", correct: false },
      { text: "One hundred", correct: true },
      { text: "One hundred fifty", correct: false },
    ],
  },
  {
    Question: "What is the formula for the perimeter of a square?",
    Answer: [
      { text: "a²", correct: false },
      { text: "2a", correct: false },
      { text: "4a", correct: true },
      { text: "a", correct: false },
    ],
  },
  {
    Question: "What is the square root of one hundred forty-four?",
    Answer: [
      { text: "Ten", correct: false },
      { text: "Eleven", correct: false },
      { text: "Twelve", correct: true },
      { text: "Fourteen", correct: false },
    ],
  },
]


const english = [
   {
    Question: "What do we call a word that names a person, place, or thing?",
    Answer: [
      { text: "Action word", correct: false },
      { text: "Quality word", correct: false },
      { text: "Noun", correct: true },
      { text: "Sound word", correct: false },
    ],
  },
  {
    Question: "What does a verb mainly express in a sentence?",
    Answer: [
      { text: "Name", correct: false },
      { text: "Thing", correct: false },
      { text: "Action or state", correct: true },
      { text: "Place", correct: false },
    ],
  },
  {
    Question: "Which article is used before words that begin with a vowel sound?",
    Answer: [
      { text: "A", correct: false },
      { text: "The", correct: false },
      { text: "An", correct: true },
      { text: "No article", correct: false },
    ],
  },
  {
    Question: "What is the plural form of the word 'child'?",
    Answer: [
      { text: "Childs", correct: false },
      { text: "Childes", correct: false },
      { text: "Children", correct: true },
      { text: "Childrens", correct: false },
    ],
  },
  {
    Question: "What is the past tense form of the verb 'go'?",
    Answer: [
      { text: "Goed", correct: false },
      { text: "Going", correct: false },
      { text: "Went", correct: true },
      { text: "Goes", correct: false },
    ],
  },
  {
    Question: "Which of the following words is a pronoun?",
    Answer: [
      { text: "Run", correct: false },
      { text: "Apple", correct: false },
      { text: "He", correct: true },
      { text: "Big", correct: false },
    ],
  },
  {
    Question: "Which word is opposite in meaning to the word 'happy'?",
    Answer: [
      { text: "Glad", correct: false },
      { text: "Smile", correct: false },
      { text: "Sad", correct: true },
      { text: "Joy", correct: false },
    ],
  },
  {
    Question: "Which word has the same meaning as the word 'fast'?",
    Answer: [
      { text: "Slow", correct: false },
      { text: "Late", correct: false },
      { text: "Quick", correct: true },
      { text: "Stop", correct: false },
    ],
  },
  {
    Question: "Which part of speech describes a noun?",
    Answer: [
      { text: "Verb", correct: false },
      { text: "Pronoun", correct: false },
      { text: "Adjective", correct: true },
      { text: "Sentence", correct: false },
    ],
  },
  {
    Question: "Which tense is used in the sentence 'She has eaten food'?",
    Answer: [
      { text: "Past tense", correct: false },
      { text: "Future tense", correct: false },
      { text: "Present perfect tense", correct: true },
      { text: "Continuous tense", correct: false },
    ],
  },
]

const geology = [
   {
    Question: "Which is the largest ocean on the Earth?",
    Answer: [
      { text: "Indian Ocean", correct: false },
      { text: "Atlantic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Arctic Ocean", correct: false },
    ],
  },
  {
    Question: "In which direction does the sun rise every day?",
    Answer: [
      { text: "West", correct: false },
      { text: "North", correct: false },
      { text: "East", correct: true },
      { text: "South", correct: false },
    ],
  },
  {
    Question: "Which planet is considered the hottest planet in the solar system?",
    Answer: [
      { text: "Mercury", correct: false },
      { text: "Mars", correct: false },
      { text: "Venus", correct: true },
      { text: "Jupiter", correct: false },
    ],
  },
  {
    Question: "Which is the longest river flowing entirely in India?",
    Answer: [
      { text: "Yamuna", correct: false },
      { text: "Godavari", correct: false },
      { text: "Ganga", correct: true },
      { text: "Krishna", correct: false },
    ],
  },
  {
    Question: "Which is the coldest continent on Earth?",
    Answer: [
      { text: "Europe", correct: false },
      { text: "Asia", correct: false },
      { text: "Antarctica", correct: true },
      { text: "Africa", correct: false },
    ],
  },
  {
    Question: "Which country does the Tropic of Cancer pass through?",
    Answer: [
      { text: "United States of America", correct: false },
      { text: "China", correct: false },
      { text: "India", correct: true },
      { text: "Japan", correct: false },
    ],
  },
  {
    Question: "What is the actual shape of the Earth called?",
    Answer: [
      { text: "Flat", correct: false },
      { text: "Round", correct: false },
      { text: "Geoid", correct: true },
      { text: "Square", correct: false },
    ],
  },
  {
    Question: "Which is the largest country in the world by area?",
    Answer: [
      { text: "China", correct: false },
      { text: "United States", correct: false },
      { text: "Russia", correct: true },
      { text: "India", correct: false },
    ],
  },
  {
    Question: "Between which continents does the Indian Ocean lie?",
    Answer: [
      { text: "Asia and Europe", correct: false },
      { text: "Europe and Africa", correct: false },
      { text: "Africa and Australia", correct: true },
      { text: "Asia and America", correct: false },
    ],
  },
  {
    Question: "What is the latitude value of the Equator?",
    Answer: [
      { text: "90°", correct: false },
      { text: "23.5°", correct: false },
      { text: "0°", correct: true },
      { text: "66.5°", correct: false },
    ],
  },
]


const physics = [
   {
    Question: "Which force pulls objects toward the Earth?",
    Answer: [
      { text: "Magnetism", correct: false },
      { text: "Friction", correct: false },
      { text: "Gravity", correct: true },
      { text: "Pressure", correct: false },
    ],
  },
  {
    Question: "Which unit is commonly used to measure temperature?",
    Answer: [
      { text: "Meter", correct: false },
      { text: "Joule", correct: false },
      { text: "Celsius", correct: true },
      { text: "Newton", correct: false },
    ],
  },
  {
    Question: "Which type of energy do we receive from the Sun?",
    Answer: [
      { text: "Heat energy", correct: false },
      { text: "Wind energy", correct: false },
      { text: "Solar energy", correct: true },
      { text: "Nuclear energy", correct: false },
    ],
  },
  {
    Question: "Which instrument is used to measure temperature?",
    Answer: [
      { text: "Barometer", correct: false },
      { text: "Ammeter", correct: false },
      { text: "Thermometer", correct: true },
      { text: "Voltmeter", correct: false },
    ],
  },
  {
    Question: "What type of motion does a rotating ceiling fan show?",
    Answer: [
      { text: "Linear motion", correct: false },
      { text: "Random motion", correct: false },
      { text: "Rotational motion", correct: true },
      { text: "Oscillatory motion", correct: false },
    ],
  },
  {
    Question: "What is the SI unit of length?",
    Answer: [
      { text: "Kilometer", correct: false },
      { text: "Centimeter", correct: false },
      { text: "Meter", correct: true },
      { text: "Inch", correct: false },
    ],
  },
  {
    Question: "Which law of motion states that every action has an equal and opposite reaction?",
    Answer: [
      { text: "First law of motion", correct: false },
      { text: "Second law of motion", correct: false },
      { text: "Third law of motion", correct: true },
      { text: "Fourth law of motion", correct: false },
    ],
  },
  {
    Question: "What is the approximate speed of light in vacuum?",
    Answer: [
      { text: "3 × 10⁶ m/s", correct: false },
      { text: "3 × 10⁷ m/s", correct: false },
      { text: "3 × 10⁸ m/s", correct: true },
      { text: "3 × 10⁹ m/s", correct: false },
    ],
  },
  {
    Question: "Which type of lens is used in a magnifying glass?",
    Answer: [
      { text: "Concave lens", correct: false },
      { text: "Plane lens", correct: false },
      { text: "Convex lens", correct: true },
      { text: "Cylindrical lens", correct: false },
    ],
  },
  {
    Question: "What physical quantity is measured in joules?",
    Answer: [
      { text: "Force", correct: false },
      { text: "Power", correct: false },
      { text: "Energy", correct: true },
      { text: "Speed", correct: false },
    ],
  },
]


const currentaffairs = [
  {
    Question: "Who is the current Prime Minister of India?",
    Answer: [
      { text: "Rahul Gandhi", correct: false },
      { text: "Arvind Kejriwal", correct: false },
      { text: "Narendra Modi", correct: true },
      { text: "Yogi Adityanath", correct: false },
    ],
  },
  {
    Question: "What is the capital city of the Indian state of Telangana?",
    Answer: [
      { text: "Warangal", correct: false },
      { text: "Karimnagar", correct: false },
      { text: "Hyderabad", correct: true },
      { text: "Nizamabad", correct: false },
    ],
  },
  {
    Question: "Which sport is played with a bat and a ball and is hugely popular in India?",
    Answer: [
      { text: "Hockey", correct: false },
      { text: "Football", correct: false },
      { text: "Cricket", correct: true },
      { text: "Tennis", correct: false },
    ],
  },
  {
    Question: "Which country hosted the ICC Cricket World Cup in 2023?",
    Answer: [
      { text: "England", correct: false },
      { text: "Australia", correct: false },
      { text: "India", correct: true },
      { text: "South Africa", correct: false },
    ],
  },
  {
    Question: "What is the name of India’s national space agency?",
    Answer: [
      { text: "NASA", correct: false },
      { text: "ESA", correct: false },
      { text: "ISRO", correct: true },
      { text: "ROSCOSMOS", correct: false },
    ],
  },
  {
    Question: "Which Indian festival is popularly called the ‘festival of lights’?",
    Answer: [
      { text: "Holi", correct: false },
      { text: "Eid", correct: false },
      { text: "Diwali", correct: true },
      { text: "Pongal", correct: false },
    ],
  },
  {
    Question: "Who is the current President of India?",
    Answer: [
      { text: "Ram Nath Kovind", correct: false },
      { text: "Narendra Modi", correct: false },
      { text: "Droupadi Murmu", correct: true },
      { text: "Sonia Gandhi", correct: false },
    ],
  },
  {
    Question: "Which lunar mission landed near the South Pole of the Moon in 2023?",
    Answer: [
      { text: "Chandrayaan-2", correct: false },
      { text: "Mangalyaan", correct: false },
      { text: "Chandrayaan-3", correct: true },
      { text: "Gaganyaan", correct: false },
    ],
  },
  {
    Question: "Which Indian city is known as the ‘Silicon Valley of India’?",
    Answer: [
      { text: "Hyderabad", correct: false },
      { text: "Pune", correct: false },
      { text: "Bengaluru", correct: true },
      { text: "Chennai", correct: false },
    ],
  },
  {
    Question: "Which Indian state was formed in the year 2014?",
    Answer: [
      { text: "Chhattisgarh", correct: false },
      { text: "Jharkhand", correct: false },
      { text: "Telangana", correct: true },
      { text: "Uttarakhand", correct: false },
    ],
  },
]

const allQuestions = {
  GK: generalScience,
  Science: science,
  History: history,
  Bio: biology,
  Economics: economic,
  Maths: maths,
  English: english,
  Geo: geology,
  Physics: physics,
  CA: currentaffairs
};
let QuizQuestion = []

// Quiz Code 
let currentQuestionIndex = 0 // When We Start The Question It Will Start With First Question Only.
let score = 0;  // Intial Score When We Start The Quiz
let answersDisabled = false; // AnswerDiabled = false Means When Answer Button Is Clicked answer button will be clickable 

totalQuestionsSpan.textContent = quizQuestions.length; // Total Questions In Quiz
maxScoreSpan.textContent = quizQuestions.length; // Max Score In The Quiz


//Event Listener
//Start Button
startButton.addEventListener("click", function start() {
  startscreen.classList.remove("active");
  optionscreen.classList.add("active")
}) // This Is An Event Listner when You Click On Start Quiz It Move To Quiz

continuebtn.addEventListener("click" , function (){
  let ask = confirm("Do You Want To Continue With The Basic Quiz");
  if(ask){
currentQuestionIndex = 0
  score = 0
  scoreSpan.textContent = score
  optionscreen.classList.remove("active");
  quizScreen.classList.add("active")
   showquestion()
  }
  else{
    quizScreen.classList.remove("active");
    optionscreen.classList.add("active");
  }
})

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


Droplist.addEventListener("change" , function(event){

  totalQuestionsSpan.textContent = Object.keys(allQuestions).length; // Total Questions In Quiz
  maxScoreSpan.textContent = Object.keys(allQuestions).length

    const Topic = event.target.value;
      if(!Topic) return
    QuizQuestion = allQuestions[Topic];
 currentQuestionIndex = 0 
 score = 0; 

 scoreSpan.textContent = score

optionscreen.classList.remove("active");
quizScreen.classList.add("active");

showquestions()
})
function showquestions() {
  answersDisabled = false

  const currentQuestion = QuizQuestion[currentQuestionIndex] // quizQuestion [0]; current question which start with 0 because quizQuestions is an array of Objects .

  currentQuestionSpan.textContent = currentQuestionIndex + 1 // Current Questions start with 1 bocause 0+1 = 1

  const progressPersent = (currentQuestionIndex / QuizQuestion.length) * 100; // (1/5)*100
  progressBar.style.width = progressPersent + "%" // it add ProgressPersent %

  questionText.textContent = currentQuestion.Question;

  answersContainer.innerHTML = "";
  
  currentQuestion.Answer.forEach(answers => {
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
      if (iscorrect === true) {
        score++
        scoreSpan.textContent = score;
      }

      setTimeout(() => {
        currentQuestionIndex++ // Next Question

        // check If There are More Questions
        if (currentQuestionIndex < QuizQuestion.length) {
          showquestions()
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
      const Percentage = (score / QuizQuestion.length) * 100
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