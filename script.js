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
const scoption = document.getElementById("sc");
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

const social = [
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
  {
  Question: "Which state is known as the 'Spice Garden of India'?",
  Answer: [
    { text: "Kerala", correct: true },
    { text: "Punjab", correct: false },
    { text: "Rajasthan", correct: false },
    { text: "Bihar", correct: false },
  ],
},
{
  Question: "Which freedom fighter gave the slogan 'Give me blood, and I shall give you freedom'?",
  Answer: [
    { text: "Mahatma Gandhi", correct: false },
    { text: "Bhagat Singh", correct: false },
    { text: "Subhash Chandra Bose", correct: true },
    { text: "Sardar Patel", correct: false },
  ],
},
{
  Question: "Which is the largest ocean in the world?",
  Answer: [
    { text: "Indian Ocean", correct: false },
    { text: "Pacific Ocean", correct: true },
    { text: "Atlantic Ocean", correct: false },
    { text: "Arctic Ocean", correct: false },
  ],
},
{
  Question: "Which country is known as the Land of the Rising Sun?",
  Answer: [
    { text: "China", correct: false },
    { text: "Thailand", correct: false },
    { text: "Japan", correct: true },
    { text: "Korea", correct: false },
  ],
},
{
  Question: "How many states are there in India?",
  Answer: [
    { text: "25", correct: false },
    { text: "28", correct: true },
    { text: "30", correct: false },
    { text: "29", correct: false },
  ],
},
{
  Question: "Which planet is known as the Red Planet?",
  Answer: [
    { text: "Venus", correct: false },
    { text: "Mars", correct: true },
    { text: "Jupiter", correct: false },
    { text: "Saturn", correct: false },
  ],
},
{
  Question: "Which festival is known as the Festival of Lights?",
  Answer: [
    { text: "Holi", correct: false },
    { text: "Eid", correct: false },
    { text: "Diwali", correct: true },
    { text: "Christmas", correct: false },
  ],
},
{
  Question: "Who was the first Prime Minister of India?",
  Answer: [
    { text: "Indira Gandhi", correct: false },
    { text: "Jawaharlal Nehru", correct: true },
    { text: "Rajiv Gandhi", correct: false },
    { text: "Lal Bahadur Shastri", correct: false },
  ],
},
{
  Question: "Which is the smallest continent in the world?",
  Answer: [
    { text: "Europe", correct: false },
    { text: "Australia", correct: true },
    { text: "Antarctica", correct: false },
    { text: "South America", correct: false },
  ],
},
{
  Question: "Which Indian city is known as the Pink City?",
  Answer: [
    { text: "Jaipur", correct: true },
    { text: "Udaipur", correct: false },
    { text: "Jodhpur", correct: false },
    { text: "Bhopal", correct: false },
  ],
}

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
      { text: "100°F", correct: false },
      { text: "100°C", correct: true },
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
      { text: "Diamond", correct: true },
      { text: "Iron", correct: false },
      { text: "Silver", correct: false },
      { text: "Obsidian", correct: false },
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
      { text: "Chemical energy", correct: true },
      { text: "Mechanical energy", correct: false },
      { text: "Light Energy", correct: false },
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
  {
    Question: "What is the SI unit of pressure?",
    Answer: [
      { text: "Pascal", correct: true },
      { text: "Newton", correct: false },
      { text: "Joule", correct: false },
      { text: "Watt", correct: false },
    ],
  },
  {
    Question: "Which organ helps in breathing?",
    Answer: [
      { text: "Heart", correct: false },
      { text: "Lungs", correct: true },
      { text: "Kidney", correct: false },
      { text: "Brain", correct: false },
    ],
  },
  {
    Question: "Which vitamin helps in blood clotting?",
    Answer: [
      { text: "Vitamin A", correct: false },
      { text: "Vitamin K", correct: true },
      { text: "Vitamin C", correct: false },
      { text: "Vitamin D", correct: false },
    ],
  },
  {
    Question: "Which planet is closest to the Sun?",
    Answer: [
      { text: "Venus", correct: false },
      { text: "Mercury", correct: true },
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
    ],
  },
  {
    Question: "What is the chemical symbol of Gold?",
    Answer: [
      { text: "Go", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
      { text: "Gd", correct: false },
    ],
  },
  {
    Question: "Which gas do plants release during photosynthesis?",
    Answer: [
      { text: "Oxygen", correct: true },
      { text: "Carbon dioxide", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    Question: "Which part of the brain controls balance?",
    Answer: [
      { text: "Cerebrum", correct: false },
      { text: "Cerebellum", correct: true },
      { text: "Medulla", correct: false },
      { text: "Spinal cord", correct: false },
    ],
  },
  {
    Question: "Speed is distance divided by?",
    Answer: [
      { text: "Time", correct: true },
      { text: "Mass", correct: false },
      { text: "Force", correct: false },
      { text: "Energy", correct: false },
    ],
  },
  {
    Question: "Which metal is used in electric wires?",
    Answer: [
      { text: "Iron", correct: false },
      { text: "Copper", correct: true },
      { text: "Silver", correct: false },
      { text: "Gold", correct: false },
    ],
  },
  {
    Question: "What is the pH value of pure water?",
    Answer: [
      { text: "5", correct: false },
      { text: "7", correct: true },
      { text: "9", correct: false },
      { text: "1", correct: false },
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
      { text: "Christopher Columbus", correct: true },
      { text: "Ferdinand Magellan", correct: false },
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
      { text: "1947", correct: true },
      { text: "1946", correct: false },
      { text: "1934", correct: false },
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
      { text: "Lucknow", correct: false },
      { text: "Agra", correct: true },
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
      { text: "C. Rajagopalachari", correct: true },
      { text: "Jawaharlal Nehru", correct: false },
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
  {
    Question: "Who was the first Governor-General of independent India?",
    Answer: [
      { text: "Lord Mountbatten", correct: false },
      { text: "C. Rajagopalachari", correct: true },
      { text: "Jawaharlal Nehru", correct: false },
      { text: "Dr. Rajendra Prasad", correct: false },
    ],
  },
  {
    Question: "In which year did World War II end?",
    Answer: [
      { text: "1942", correct: false },
      { text: "1945", correct: true },
      { text: "1939", correct: false },
      { text: "1950", correct: false },
    ],
  },
  {
    Question: "Who founded the Gupta Empire?",
    Answer: [
      { text: "Samudragupta", correct: false },
      { text: "Chandragupta I", correct: true },
      { text: "Ashoka", correct: false },
      { text: "Harsha", correct: false },
    ],
  },
  {
    Question: "The Revolt of 1857 started in which city?",
    Answer: [
      { text: "Delhi", correct: false },
      { text: "Meerut", correct: true },
      { text: "Kanpur", correct: false },
      { text: "Lucknow", correct: false },
    ],
  },
  {
    Question: "Who was known as the Nightingale of India?",
    Answer: [
      { text: "Indira Gandhi", correct: false },
      { text: "Sarojini Naidu", correct: true },
      { text: "Annie Besant", correct: false },
      { text: "Kasturba Gandhi", correct: false },
    ],
  },
  {
    Question: "Who wrote 'Discovery of India'?",
    Answer: [
      { text: "Mahatma Gandhi", correct: false },
      { text: "Jawaharlal Nehru", correct: true },
      { text: "Tagore", correct: false },
      { text: "Subhash Bose", correct: false },
    ],
  },
  {
    Question: "Who built the Red Fort in Delhi?",
    Answer: [
      { text: "Akbar", correct: false },
      { text: "Shah Jahan", correct: true },
      { text: "Babur", correct: false },
      { text: "Humayun", correct: false },
    ],
  },
  {
    Question: "When did the French Revolution begin?",
    Answer: [
      { text: "1789", correct: true },
      { text: "1776", correct: false },
      { text: "1800", correct: false },
      { text: "1757", correct: false },
    ],
  },
  {
    Question: "Who was the first woman Prime Minister of India?",
    Answer: [
      { text: "Sarojini Naidu", correct: false },
      { text: "Indira Gandhi", correct: true },
      { text: "Pratibha Patil", correct: false },
      { text: "Sonia Gandhi", correct: false },
    ],
  },
  {
    Question: "The Non-Cooperation Movement started in which year?",
    Answer: [
      { text: "1920", correct: true },
      { text: "1919", correct: false },
      { text: "1930", correct: false },
      { text: "1942", correct: false },
    ],
  },
]

const biology = [
  {
    Question: "Which organ in the human body pumps blood to all parts?",
    Answer: [
      { text: "Heart", correct: true },
      { text: "Lungs", correct: false },
      { text: "Veins", correct: false },
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
      { text: "Oxgyen", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Carbon dioxide", correct: false },
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
      { text: "Cell", correct: true },
      { text: "Tissue", correct: false },
      { text: "Atom", correct: false },
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
      { text: "Vitamin K", correct: true },
      { text: "Vitamin C", correct: false },
      { text: "Vitamin B", correct: false },
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
  {
    Question: "What is the basic unit of life?",
    Answer: [
      { text: "Tissue", correct: false },
      { text: "Cell", correct: true },
      { text: "Organ", correct: false },
      { text: "Atom", correct: false },
    ],
  },
  {
    Question: "Which blood cells fight infection?",
    Answer: [
      { text: "RBC", correct: false },
      { text: "WBC", correct: true },
      { text: "Platelets", correct: false },
      { text: "Plasma", correct: false },
    ],
  },
  {
    Question: "Which organ purifies blood?",
    Answer: [
      { text: "Heart", correct: false },
      { text: "Kidney", correct: true },
      { text: "Lungs", correct: false },
      { text: "Brain", correct: false },
    ],
  },
  {
    Question: "Photosynthesis occurs in which part of plant?",
    Answer: [
      { text: "Root", correct: false },
      { text: "Leaf", correct: true },
      { text: "Stem", correct: false },
      { text: "Flower", correct: false },
    ],
  },
  {
    Question: "How many chambers are in human heart?",
    Answer: [
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
    ],
  },
  {
    Question: "Which vitamin is good for eyes?",
    Answer: [
      { text: "Vitamin A", correct: true },
      { text: "Vitamin C", correct: false },
      { text: "Vitamin D", correct: false },
      { text: "Vitamin B", correct: false },
    ],
  },
  {
    Question: "Which organ helps in digestion?",
    Answer: [
      { text: "Stomach", correct: true },
      { text: "Lungs", correct: false },
      { text: "Brain", correct: false },
      { text: "Heart", correct: false },
    ],
  },
  {
    Question: "Which part carries oxygen in blood?",
    Answer: [
      { text: "Platelets", correct: false },
      { text: "RBC", correct: true },
      { text: "WBC", correct: false },
      { text: "Plasma", correct: false },
    ],
  },
  {
    Question: "Which is the largest organ in human body?",
    Answer: [
      { text: "Liver", correct: false },
      { text: "Skin", correct: true },
      { text: "Heart", correct: false },
      { text: "Brain", correct: false },
    ],
  },
  {
    Question: "DNA stands for?",
    Answer: [
      { text: "Deoxyribonucleic Acid", correct: true },
      { text: "Ribonucleic Acid", correct: false },
      { text: "Dynamic Acid", correct: false },
      { text: "Double Acid", correct: false },
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
      { text: "Consumer", correct: true },
      { text: "Trader", correct: false },
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
      { text: "Loss", correct: false },
      { text: "Earnings received from work or business", correct: true },
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
      { text: "Keeping and managing money", correct: true },
      { text: "Studying books", correct: false },
      { text: "Playing Games", correct: false },
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
      { text: "Availability of goods in the market", correct: true },
      { text: "Demand For Goods", correct: false },
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
  {
    Question: "What is the currency of India?",
    Answer: [
      { text: "Dollar", correct: false },
      { text: "Rupee", correct: true },
      { text: "Euro", correct: false },
      { text: "Yen", correct: false },
    ],
  },
  {
    Question: "GDP stands for?",
    Answer: [
      { text: "Gross Domestic Product", correct: true },
      { text: "Global Domestic Product", correct: false },
      { text: "General Domestic Product", correct: false },
      { text: "Gross Development Product", correct: false },
    ],
  },
  {
    Question: "Bank that controls money supply in India?",
    Answer: [
      { text: "SBI", correct: false },
      { text: "RBI", correct: true },
      { text: "ICICI", correct: false },
      { text: "PNB", correct: false },
    ],
  },
  {
    Question: "Inflation means?",
    Answer: [
      { text: "Rise in prices", correct: true },
      { text: "Fall in prices", correct: false },
      { text: "Increase in salary", correct: false },
      { text: "Decrease in tax", correct: false },
    ],
  },
  {
    Question: "Demand increases when price?",
    Answer: [
      { text: "Rises", correct: false },
      { text: "Falls", correct: true },
      { text: "Stays same", correct: false },
      { text: "Doubles", correct: false },
    ],
  },
  {
    Question: "Budget is presented by?",
    Answer: [
      { text: "Prime Minister", correct: false },
      { text: "Finance Minister", correct: true },
      { text: "President", correct: false },
      { text: "Governor", correct: false },
    ],
  },
  {
    Question: "Tax paid on goods is called?",
    Answer: [
      { text: "Income Tax", correct: false },
      { text: "GST", correct: true },
      { text: "Service Tax", correct: false },
      { text: "Road Tax", correct: false },
    ],
  },
  {
    Question: "Money deposited in bank earns?",
    Answer: [
      { text: "Loss", correct: false },
      { text: "Interest", correct: true },
      { text: "Tax", correct: false },
      { text: "Fine", correct: false },
    ],
  },
  {
    Question: "Export means?",
    Answer: [
      { text: "Buy goods", correct: false },
      { text: "Sell goods to other countries", correct: true },
      { text: "Pay tax", correct: false },
      { text: "Save money", correct: false },
    ],
  },
  {
    Question: "Import means?",
    Answer: [
      { text: "Sell goods", correct: false },
      { text: "Buy goods from other countries", correct: true },
      { text: "Save goods", correct: false },
      { text: "Manufacture goods", correct: false },
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
      { text: "Five sides", correct: false },
      { text: "Three sides", correct: true },
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
      { text: "Eight", correct: true },
      { text: "Six", correct: false },
      { text: "Ten", correct: false },
    ],
  },
  {
    Question: "Which is the smallest prime number?",
    Answer: [
      { text: "Two", correct: true },
      { text: "Three", correct: false },
      { text: "Four", correct: false },
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
      { text: "a", correct: false },
      { text: "4a", correct: true },
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
  {
    Question: "What is 25 × 4?",
    Answer: [
      { text: "50", correct: false },
      { text: "75", correct: false },
      { text: "100", correct: true },
      { text: "125", correct: false },
    ],
  },
  {
    Question: "What is the square root of 64?",
    Answer: [
      { text: "6", correct: false },
      { text: "7", correct: false },
      { text: "8", correct: true },
      { text: "9", correct: false },
    ],
  },
  {
    Question: "What is 100 ÷ 5?",
    Answer: [
      { text: "10", correct: false },
      { text: "20", correct: true },
      { text: "25", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    Question: "What is 12²?",
    Answer: [
      { text: "124", correct: false },
      { text: "144", correct: true },
      { text: "122", correct: false },
      { text: "154", correct: false },
    ],
  },
  {
    Question: "What is 45 + 55?",
    Answer: [
      { text: "90", correct: false },
      { text: "100", correct: true },
      { text: "110", correct: false },
      { text: "95", correct: false },
    ],
  },
  {
    Question: "What is 7 × 8?",
    Answer: [
      { text: "54", correct: false },
      { text: "56", correct: true },
      { text: "64", correct: false },
      { text: "48", correct: false },
    ],
  },
  {
    Question: "What is 81 ÷ 9?",
    Answer: [
      { text: "8", correct: false },
      { text: "9", correct: true },
      { text: "7", correct: false },
      { text: "6", correct: false },
    ],
  },
  {
    Question: "What is 15% of 200?",
    Answer: [
      { text: "25", correct: false },
      { text: "30", correct: true },
      { text: "35", correct: false },
      { text: "20", correct: false },
    ],
  },
  {
    Question: "What is the value of π (approx)?",
    Answer: [
      { text: "3.14", correct: true },
      { text: "2.14", correct: false },
      { text: "4.13", correct: false },
      { text: "3.41", correct: false },
    ],
  },
  {
    Question: "What is 9³?",
    Answer: [
      { text: "729", correct: true },
      { text: "81", correct: false },
      { text: "512", correct: false },
      { text: "243", correct: false },
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
      { text: "Place", correct: false },
      { text: "Action or state", correct: true },
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
      { text: "Childrens", correct: false },
      { text: "Children", correct: true },
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
      { text: "He", correct: true },
      { text: "Apple", correct: false },
      { text: "Run", correct: false },
      { text: "Big", correct: false },
    ],
  },
  {
    Question: "Which word is opposite in meaning to the word 'happy'?",
    Answer: [
      { text: "Glad", correct: false },
      { text: "Sad", correct: true },
      { text: "Smile", correct: false },
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
      { text: "Adjective", correct: true },
      { text: "Pronoun", correct: false },
      { text: "Verb", correct: false },
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
  {
    Question: "What is the synonym of 'Happy'?",
    Answer: [
      { text: "Sad", correct: false },
      { text: "Joyful", correct: true },
      { text: "Angry", correct: false },
      { text: "Tired", correct: false },
    ],
  },
  {
    Question: "What is the antonym of 'Big'?",
    Answer: [
      { text: "Large", correct: false },
      { text: "Huge", correct: false },
      { text: "Small", correct: true },
      { text: "Wide", correct: false },
    ],
  },
  {
    Question: "Choose the correct spelling:",
    Answer: [
      { text: "Recieve", correct: false },
      { text: "Receive", correct: true },
      { text: "Receeve", correct: false },
      { text: "Receve", correct: false },
    ],
  },
  {
    Question: "Which is a noun?",
    Answer: [
      { text: "Run", correct: false },
      { text: "Quickly", correct: false },
      { text: "School", correct: true },
      { text: "Blue", correct: false },
    ],
  },
  {
    Question: "Choose the correct tense: She ___ to school daily.",
    Answer: [
      { text: "go", correct: false },
      { text: "goes", correct: true },
      { text: "gone", correct: false },
      { text: "going", correct: false },
    ],
  },
  {
    Question: "What is the plural of 'Child'?",
    Answer: [
      { text: "Childs", correct: false },
      { text: "Children", correct: true },
      { text: "Childes", correct: false },
      { text: "Childrens", correct: false },
    ],
  },
  {
    Question: "Which is a verb?",
    Answer: [
      { text: "Dance", correct: true },
      { text: "Beauty", correct: false },
      { text: "Honest", correct: false },
      { text: "Table", correct: false },
    ],
  },
  {
    Question: "Fill in the blank: He is ___ honest man.",
    Answer: [
      { text: "a", correct: false },
      { text: "an", correct: true },
      { text: "the", correct: false },
      { text: "no article", correct: false },
    ],
  },
  {
    Question: "Which is a pronoun?",
    Answer: [
      { text: "He", correct: true },
      { text: "Run", correct: false },
      { text: "Beautiful", correct: false },
      { text: "Chair", correct: false },
    ],
  },
  {
    Question: "Choose the correct sentence:",
    Answer: [
      { text: "She don't like tea.", correct: false },
      { text: "She doesn't like tea.", correct: true },
      { text: "She not like tea.", correct: false },
      { text: "She didn't likes tea.", correct: false },
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
      { text: "East", correct: true },
      { text: "North", correct: false },
      { text: "West", correct: false },
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
      { text: "Ganga", correct: true },
      { text: "Godavari", correct: false },
      { text: "Yamuna", correct: false },
      { text: "Krishna", correct: false },
    ],
  },
  {
    Question: "Which is the coldest continent on Earth?",
    Answer: [
      { text: "Europe", correct: false },
      { text: "Antarctica", correct: true },
      { text: "Asia", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  {
    Question: "Which country does the Tropic of Cancer pass through?",
    Answer: [
      { text: "United States of America", correct: false },
      { text: "India", correct: true },
      { text: "China", correct: false },
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
      { text: "Russia", correct: true },
      { text: "United States", correct: false },
      { text: "China", correct: false },
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
      { text: "0°", correct: true },
      { text: "23.5°", correct: false },
      { text: "90°", correct: false },
      { text: "66.5°", correct: false },
    ],
  },
  {
    Question: "Which is the largest continent?",
    Answer: [
      { text: "Africa", correct: false },
      { text: "Asia", correct: true },
      { text: "Europe", correct: false },
      { text: "Australia", correct: false },
    ],
  },
  {
    Question: "Which is the longest river in India?",
    Answer: [
      { text: "Yamuna", correct: false },
      { text: "Ganga", correct: true },
      { text: "Godavari", correct: false },
      { text: "Krishna", correct: false },
    ],
  },
  {
    Question: "Which is the highest plateau in the world?",
    Answer: [
      { text: "Deccan Plateau", correct: false },
      { text: "Tibetan Plateau", correct: true },
      { text: "Malwa Plateau", correct: false },
      { text: "Chotanagpur Plateau", correct: false },
    ],
  },
  {
    Question: "Which line divides the Earth into two equal halves?",
    Answer: [
      { text: "Tropic of Cancer", correct: false },
      { text: "Equator", correct: true },
      { text: "Prime Meridian", correct: false },
      { text: "Arctic Circle", correct: false },
    ],
  },
  {
    Question: "Which is the largest ocean?",
    Answer: [
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Atlantic Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
    ],
  },
  {
    Question: "Which country has the largest population?",
    Answer: [
      { text: "USA", correct: false },
      { text: "India", correct: true },
      { text: "Russia", correct: false },
      { text: "Brazil", correct: false },
    ],
  },
  {
    Question: "Which desert is located in India?",
    Answer: [
      { text: "Sahara", correct: false },
      { text: "Thar", correct: true },
      { text: "Gobi", correct: false },
      { text: "Kalahari", correct: false },
    ],
  },
  {
    Question: "Which is the coldest continent?",
    Answer: [
      { text: "Asia", correct: false },
      { text: "Antarctica", correct: true },
      { text: "Europe", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  {
    Question: "Which is the smallest continent?",
    Answer: [
      { text: "Australia", correct: true },
      { text: "Europe", correct: false },
      { text: "Antarctica", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  {
    Question: "Mount Everest is located in which mountain range?",
    Answer: [
      { text: "Andes", correct: false },
      { text: "Himalayas", correct: true },
      { text: "Alps", correct: false },
      { text: "Rockies", correct: false },
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
      { text: "Newton", correct: false },
      { text: "Celsius", correct: true },
    ],
  },
  {
    Question: "Which type of energy do we receive from the Sun?",
    Answer: [
      { text: "Heat energy", correct: false },
      { text: "Solar energy", correct: true },
      { text: "Wind energy", correct: false },
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
      { text: "Rotational motion", correct: true },
      { text: "Random motion", correct: false },
      { text: "Oscillatory motion", correct: false },
    ],
  },
  {
    Question: "What is the SI unit of length?",
    Answer: [
      { text: "Meter", correct: true },
      { text: "Centimeter", correct: false },
      { text: "Kilometer", correct: false },
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
      { text: "Convex lens", correct: true },
      { text: "Plane lens", correct: false },
      { text: "Concave lens", correct: false },
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
  {
    Question: "What is the unit of electric current?",
    Answer: [
      { text: "Volt", correct: false },
      { text: "Ampere", correct: true },
      { text: "Watt", correct: false },
      { text: "Ohm", correct: false },
    ],
  },
  {
    Question: "Who discovered gravity?",
    Answer: [
      { text: "Einstein", correct: false },
      { text: "Newton", correct: true },
      { text: "Galileo", correct: false },
      { text: "Tesla", correct: false },
    ],
  },
  {
    Question: "Speed of light is approximately?",
    Answer: [
      { text: "3 × 10^8 m/s", correct: true },
      { text: "3 × 10^6 m/s", correct: false },
      { text: "3 × 10^5 m/s", correct: false },
      { text: "3 × 10^3 m/s", correct: false },
    ],
  },
  {
    Question: "Which mirror is used in vehicles?",
    Answer: [
      { text: "Plane mirror", correct: false },
      { text: "Concave mirror", correct: false },
      { text: "Convex mirror", correct: true },
      { text: "None", correct: false },
    ],
  },
  {
    Question: "Unit of power is?",
    Answer: [
      { text: "Watt", correct: true },
      { text: "Joule", correct: false },
      { text: "Newton", correct: false },
      { text: "Pascal", correct: false },
    ],
  },
  {
    Question: "Sound travels fastest in?",
    Answer: [
      { text: "Air", correct: false },
      { text: "Water", correct: false },
      { text: "Solid", correct: true },
      { text: "Vacuum", correct: false },
    ],
  },
  {
    Question: "Device used to measure temperature?",
    Answer: [
      { text: "Barometer", correct: false },
      { text: "Thermometer", correct: true },
      { text: "Ammeter", correct: false },
      { text: "Voltmeter", correct: false },
    ],
  },
  {
    Question: "What type of energy is stored in a battery?",
    Answer: [
      { text: "Mechanical", correct: false },
      { text: "Chemical", correct: true },
      { text: "Nuclear", correct: false },
      { text: "Solar", correct: false },
    ],
  },
  {
    Question: "Which lens is used to correct short sight?",
    Answer: [
      { text: "Convex", correct: false },
      { text: "Concave", correct: true },
      { text: "Plane", correct: false },
      { text: "None", correct: false },
    ],
  },
  {
    Question: "Force = Mass × ?",
    Answer: [
      { text: "Speed", correct: false },
      { text: "Acceleration", correct: true },
      { text: "Distance", correct: false },
      { text: "Time", correct: false },
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
      { text: "Hyderabad", correct: true },
      { text: "Karimnagar", correct: false },
      { text: "Warangal", correct: false },
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
      { text: "India", correct: true },
      { text: "Australia", correct: false },
      { text: "South Africa", correct: false },
    ],
  },
  {
    Question: "What is the name of India’s national space agency?",
    Answer: [
      { text: "NASA", correct: false },
      { text: "ISRO", correct: true },
      { text: "ESA", correct: false },
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
      { text: "Droupadi Murmu", correct: true },
      { text: "Narendra Modi", correct: false },
      { text: "Ram Nath Kovind", correct: false },
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
      { text: "Chennai", correct: false },
      { text: "Bengaluru", correct: true },
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
  {
    Question: "Who is the current President of India (2025)?",
    Answer: [
      { text: "Droupadi Murmu", correct: true },
      { text: "Narendra Modi", correct: false },
      { text: "Amit Shah", correct: false },
      { text: "Rajnath Singh", correct: false },
    ],
  },
  {
    Question: "G20 Summit 2023 was hosted by which country?",
    Answer: [
      { text: "USA", correct: false },
      { text: "India", correct: true },
      { text: "China", correct: false },
      { text: "UK", correct: false },
    ],
  },
  {
    Question: "Chandrayaan-3 mission belongs to which country?",
    Answer: [
      { text: "USA", correct: false },
      { text: "India", correct: true },
      { text: "Russia", correct: false },
      { text: "China", correct: false },
    ],
  },
  {
    Question: "Which organization conducts IPL?",
    Answer: [
      { text: "ICC", correct: false },
      { text: "BCCI", correct: true },
      { text: "FIFA", correct: false },
      { text: "IOC", correct: false },
    ],
  },
  {
    Question: "Digital India campaign was launched in?",
    Answer: [
      { text: "2014", correct: false },
      { text: "2015", correct: true },
      { text: "2016", correct: false },
      { text: "2013", correct: false },
    ],
  },
  {
    Question: "Which country won Cricket World Cup 2023?",
    Answer: [
      { text: "India", correct: false },
      { text: "Australia", correct: true },
      { text: "England", correct: false },
      { text: "Pakistan", correct: false },
    ],
  },
  {
    Question: "ISRO headquarters is located in?",
    Answer: [
      { text: "Mumbai", correct: false },
      { text: "Bengaluru", correct: true },
      { text: "Delhi", correct: false },
      { text: "Hyderabad", correct: false },
    ],
  },
  {
    Question: "Which Indian state launched 'Gruha Lakshmi' scheme?",
    Answer: [
      { text: "Telangana", correct: false },
      { text: "Karnataka", correct: true },
      { text: "Tamil Nadu", correct: false },
      { text: "Kerala", correct: false },
    ],
  },
  {
    Question: "UPI stands for?",
    Answer: [
      { text: "Unified Payment Interface", correct: true },
      { text: "United Payment India", correct: false },
      { text: "Universal Pay Interface", correct: false },
      { text: "Unified Private Interface", correct: false },
    ],
  },
  {
    Question: "Which country hosted Olympics 2024?",
    Answer: [
      { text: "USA", correct: false },
      { text: "France", correct: true },
      { text: "Japan", correct: false },
      { text: "China", correct: false },
    ],
  },
]

const allQuestions = {
  SC: social,
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

continuebtn.addEventListener("click", function () {
  let ask = confirm("Do You Want To Continue With The Basic Quiz");
  if (ask) {
    currentQuestionIndex = 0
    score = 0
    scoreSpan.textContent = score
    optionscreen.classList.remove("active");
    quizScreen.classList.add("active")
    showquestion()
  }
  else {
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
      if (iscorrect === true) {
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


Droplist.addEventListener("change", function (event) {

  totalQuestionsSpan.textContent = Object.keys(allQuestions).length; // Total Questions In Quiz
  maxScoreSpan.textContent = Object.keys(allQuestions).length

  const Topic = event.target.value;
  if (!Topic) return
  let RandomQuestion  = allQuestions[Topic];
  QuizQuestion = getRandomQuestions(RandomQuestion , 10);
  currentQuestionIndex = 0
  score = 0;

  scoreSpan.textContent = score

  optionscreen.classList.remove("active");
  quizScreen.classList.add("active");

  showquestions()
})
function getRandomQuestions(questionArray, limit) {
  let shuffled = [...questionArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, limit);
}

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