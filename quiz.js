const quizData = [{
    question: "1. Which operator is used to assign a value to a variable?",
    a: "=",
    b: "*",
    c: "&",
    d: "==",
    correct: "a",
}, {
    question: "2. Inside which HTML element do we put the JavaScript?",
    a: "<script>",
    b: "<js>",
    c: "<scripting>",
    d: "<javascript>",
    correct: "a",
}, {
    question: "3. What is an event occured when a button clicked?",
    a: "onchange",
    b: "onmouseover",
    c: "onclick",
    d: "onmousedown",
    correct: "c",
}, {
    question: "4. What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
}, ];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};
const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = ` <h2>You answered ${score}/${quizData.length} questions correctly</h2> 
                <button onclick="history.go(0)">Play Again</button> `
        }
    }
});