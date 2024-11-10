const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyperlinks and text Markup Language", correct: false },
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyper Text Markup language", correct: true },
            { text: "Hyperlinks Text Main Language", correct: false }
        ]
    },
    {
        question: "Which HTML element is used for the largest heading?",
        answers: [
            { text: "<h6>", correct: false },
            { text: "<header>", correct: false },
            { text: "<h1>", correct: true },
            { text: "<h2>", correct: false }
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Cascading Style sheets", correct: true },
            { text: "Computer Style sheets", correct: false },
            { text: "Creative Style sheets", correct: false },
            { text: "Colorful Style sheets", correct: false }
        ]
    },
    {
        question: "Which of the following tags is used to create a link in HTML?",
        answers: [
            { text: "<img>", correct: false },
            { text: "<a>", correct: true },
            { text: "<link>", correct: false },
            { text: "<href>", correct: false }
        ]
    },
    {
        question: "In JavaScript, which of the following is a correct way to declare a variable?",
        answers: [
            { text: "var myVariable", correct: false },
            { text: "variable myVariable", correct: false },
            { text: "let myVariable", correct: false },
            { text: "both A and C", correct: true }
        ]
    },
    {
        question: "Which CSS property is used to change the background color of an element?",
        answers: [
            { text: "color", correct: false },
            { text: "background-color", correct: true },
            { text: "bgcolor", correct: false },
            { text: "background", correct: false }
        ]
    },
    {
        question: "What does the === operator mean in JavaScript?",
        answers: [
            { text: "Assignment", correct: false },
            { text: "Equality comparison", correct: false },
            { text: "Strict equality comparison", correct: true },
            { text: "Greater than or equal to", correct: false }
        ]
    },
    {
        question: "which method can be used to find the length of a string in JavaScript?",
        answers: [
            { text: "size()", correct: false },
            { text: "length()", correct: false },
            { text: "strlength", correct: false },
            { text: "string.length", correct: true }
        ]
    },
    {
        question: "Which HTML attribute is used to specify inline styles?",
        answers: [
            { text: "style", correct: true },
            { text: "class", correct: false },
            { text: "id", correct: false },
            { text: "inline", correct: false }
        ]
    },
    {
        question: "What does JSON stand for?",
        answers: [
            { text: "JavaScript Output Name", correct: false },
            { text: "Java Standard Object Notation", correct: false },
            { text: "JavaScript Object Notation", correct: true },
            { text: "JavaScript Object Number", correct: false }
        ]
    },
    {
        question: "In CSS, how do you select an element with the id header?",
        answers: [
            { text: ".header", correct: false },
            { text: "#header", correct: true },
            { text: "header", correct: false },
            { text: "*header", correct: false}
        ]
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        answers: [
            { text: "Number", correct: false },
            { text: "Boolean", correct: false },
            { text: "Array", correct: false },
            { text: "Character", correct: true }
        ]
    },
    {
        question: "How do you write a comment in JavaScript?",
        answers: [
            { text: "// This is a comment", correct: false },
            { text: "<!-- This is a comment -->", correct: false },
            { text: "/* This is a comment */", correct: false },
            { text: "Both A and C", correct: true }
        ]
    },
    {
        question: "Which HTML element is used to create a dropdown list?",
        answers: [
            { text: "<dropdown>", correct: false },
            { text: "<select>", correct: true },
            { text: "<input>", correct: false },
            { text: "<list>", correct: false }
        ]
    },
    {
        question: "What does DOM stand for?",
        answers: [
            { text: "Data Object Model", correct: false },
            { text: "Document Object Model", correct: true },
            { text: "Document Output Model", correct: false },
            { text: "Data Output Model", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to control the text size of an element?",
        answers: [
            { text: "font-style", correct: false },
            { text: "font-size", correct: true },
            { text: "text-style", correct: false },
            { text: "text-size", correct: false }
        ]
    },
    {
        question: "Which keyword is used to create a constant variable in JavaScript?",
        answers: [
            { text: "let", correct: false },
            { text: "var", correct: false },
            { text: "constant", correct: false },
            { text: "const", correct: true }
        ]
    },
    {
        question: "Which function is used to display an alert box in JavaScript?",
        answers: [
            { text: "alertBox", correct: false },
            { text: "alert", correct: true },
            { text: "msgBox", correct: false },
            { text: "showAlert", correct: false }
        ]
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        answers: [
            { text: "<lb>", correct: false },
            { text: "<break>", correct: false },
            { text: "<br>", correct: true },
            { text: "ln", correct: false }
        ]
    },
    {
        question: "Which of the following is a JavaScript framework?",
        answers: [
            { text: "HTML", correct: false },
            { text: "Angular", correct: true },
            { text: "CSS", correct: false },
            { text: "SQL", correct: false }
        ]
    },
    {
        question: "In JavaScript, which method is used to round a number to the nearest integer?",
        answers: [
            { text: "round()", correct: false },
            { text: "Math.round()", correct: true },
            { text: "Math.nearest", correct: false },
            { text: "number.round()", correct: false }
        ]
    },
    {
        question: "what does API stand for?",
        answers: [
            { text: "Application Programming Interface", correct: false },
            { text: "Application Protocol Interface", correct: false },
            { text: "Application Programming Language", correct: false },
            { text: "Application Programming Interface", correct: true }
        ]
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image if the image cannot be displayed?",
        answers: [
            { text: "title", correct: false },
            { text: "alt", correct: true },
            { text: "src", correct: false },
            { text: "href", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to make the text bold?",
        answers: [
            { text: "font-weight", correct: true },
            { text: "bold", correct: false },
            { text: "text-weight", correct: false },
            { text: "font-bold", correct: false}
        ]
    },
    {
        question: "In JavaScript, which method can be used to convert a string to uppercase?",
        answers: [
            { text: "upperCase()", correct: false },
            { text: "toUpper()", correct: false },
            { text: "toUpperCase()", correct: true },
            { text: "uppercase()", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;

const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time-left");

function startQuiz() {
    showQuestion(questions[currentQuestionIndex]);
    startTimer();
}

function showQuestion(question) {
    questionText.innerText = question.question;
    answerButtons.innerHTML = "";
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("answer-button");
        button.addEventListener("click", () => selectAnswer(button, answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(button, answer) {
    clearInterval(timer);
    if (answer.correct) {
        score++;
        scoreDisplay.innerText = score;
    } else {
        button.classList.add("wrong");
    }
    document.getElementById("next-button").style.display = "block";
}

function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.lenth) {
        showQuestion(questions[currentQuestionIndex]);
        resetTimer();
    } else {
        showFinalScore();
    }
}

function startTimer() {
    timeLeft = 10;
    timeDisplay.innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timeDisplay.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            loadNextQuestion();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    startTimer();
}

function showFinalScore() {
    questionText.innerText = `Quis Complete! Your final score is ${score}.`;
    answerButtons.innerHTML = "";
    document.getElementById("next-button").style.display = "none";
}
startQuiz();
