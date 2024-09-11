const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    showQuestion();
});

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const answersContainer = document.getElementById('answers-container');
    const question = questions[currentQuestionIndex];

    questionContainer.querySelector('#question-text').textContent = question.question;
    answersContainer.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.className = 'answer-button';
        button.addEventListener('click', () => handleAnswer(index));
        answersContainer.appendChild(button);
    });

    document.getElementById('next-button').style.display = 'none';
}

function handleAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const answerButtons = document.querySelectorAll('.answer-button');
    const correctIndex = question.correct;

    answerButtons.forEach((button, index) => {
        button.disabled = true;
        if (index === correctIndex) {
            button.classList.add('correct');
        } else if (index === selectedIndex) {
            button.classList.add('incorrect');
        }
    });

    if (selectedIndex === correctIndex) {
        score++;
    }

    document.getElementById('next-button').style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    document.getElementById('result-text').textContent = `You scored ${score} out of ${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('result-container').classList.add('hidden');
    showQuestion();
}
