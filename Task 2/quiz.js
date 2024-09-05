const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correct: "Paris"
    },
    {
        question: "Which is the smallest planet in our solar system?",
        options: ["Earth", "Mars", "Mercury", "Venus"],
        correct: "Mercury"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "NaCl"],
        correct: "H2O"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
        correct: "Harper Lee"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
        correct: "Blue Whale"
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Oxygen", "Helium", "Hydrogen", "Nitrogen"],
        correct: "Hydrogen"
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1912", "1905", "1898", "1920"],
        correct: "1912"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Saturn", "Venus"],
        correct: "Mars"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correct: "Leonardo da Vinci"
    },
    {
        question: "Which country hosted the 2016 Summer Olympics?",
        options: ["China", "Brazil", "Japan", "USA"],
        correct: "Brazil"
    }
];

let currentQuestionIndex = 0;
let userAnswers = [];

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById('question-text').innerText = currentQuestion.question;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.innerText = option;
        optionElement.onclick = () => selectOption(option);
        optionsContainer.appendChild(optionElement);
    });
}

function selectOption(option) {
    userAnswers[currentQuestionIndex] = option;

    const options = document.querySelectorAll('.option');
    options.forEach(optionElement => {
        optionElement.style.backgroundColor = optionElement.innerText === option ? '#b3d4fc' : '#e7e7e7';
    });
}

function nextQuestion() {
    if (userAnswers[currentQuestionIndex] !== undefined) {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResults();
        }
    } else {
        alert("Please select an option before proceeding.");
    }
}

function showResults() {
    let score = 0;
    quizData.forEach((question, index) => {
        if (question.correct === userAnswers[index]) {
            score++;
        }
    });

    document.getElementById('quiz-header').innerHTML = `<h2>Quiz Completed</h2>`;
    document.getElementById('quiz-question').innerHTML = `<h3>Your Score: ${score}/${quizData.length}</h3>`;
    document.getElementById('next-button').style.display = 'none';
}

window.onload = loadQuestion;
