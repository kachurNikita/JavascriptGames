const scoreDisplay = document.getElementById('scoreDisplay');
const questionDisplay = document.getElementById("questionDisplay");

const questions = [
    {
        quiz: ["apple", "banana", "strowbery"],
        options: ['potato', 'cherry'],
        correct: 2
    },
    {
        quiz: ["Nikol", "Eva", "Anastasia"],
        options: ["Sergey", "Alina"],
        correct: 2
    },
    {
        quiz: ["apple", 'nokia', "samsung"],
        options: ["sony", "wii"],
        correct: 1
    },
];

let score = 0;
const clicked = [];

function populateQuestions () {
    questions.forEach(item => {
        const questionBox = document.createElement('div');
        questionBox.classList.add('questionBoxStyle');
        scoreDisplay.innerText = score;
        questionDisplay.append(questionBox);
        item.quiz.forEach((tip, tipIndex) => {
         const tipText = document.createElement('p');
            tipText.innerHTML = tip;
            questionBox.append(tipText)
        })
        const buttonsBlock = document.createElement('div');
        buttonsBlock.classList.add('buttonsBlock')
        item.options.forEach((option, optionIndex) => {
        const buttons = document.createElement('button');
        buttons.classList.add('buttonsStyling');
        buttonsBlock.append(buttons);
        questionBox.append(buttonsBlock);
        buttons.innerHTML = option;
            buttons.addEventListener('click', () => {
                checkAnswer(questionBox, buttons, option, optionIndex + 1, item.correct)
            })
        })
        const answerDisplay = document.createElement('div');
        answerDisplay.classList.add('answerDisplay');
        questionBox.append(answerDisplay);
    })
};

populateQuestions();

function checkAnswer(questionBox, buttons, option, tipIndex, correct) {
    if(tipIndex === correct) {
        score++
        scoreDisplay.innerHTML = score;
        addMessage(questionBox, 'Correct', 'correct')
    } else {
        score--
        scoreDisplay.innerHTML = score;
        addMessage(questionBox, 'Wrong', 'wrong')
    }
    clicked.push(option);
    buttons.disabled = clicked.includes(option);
}

function addMessage(questionBox, text, className) {
    const questBox = questionBox.querySelector('.answerDisplay')
    questBox.classList.remove('correct');
    questBox.classList.remove('wrong');
    questBox.classList.add(className);
    questBox.innerHTML = '';
    questBox.innerHTML = text;
}
