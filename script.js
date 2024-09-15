const questions = [
    {
        question: "What is your name?",
        answers: [
            { text: "abhi", correct: false },
            { text: "ram", correct: false },
            { text: "abhiramreddy", correct: true },
            { text: "none", correct: false }
        ]
    },
    {
        question: "What is your favorite animal?",
        answers: [
            { text: "cat", correct: false },
            { text: "dog", correct: true },
            { text: "rabbit", correct: false },
            { text: "hamster", correct: false }
        ]
    },
    {
        question: "What is your preferred beverage?",
        answers: [
            { text: "coffee", correct: false },
            { text: "tea", correct: true },
            { text: "soda", correct: false },
            { text: "water", correct: false }
        ]
    },
    {
        question: "What is your favorite hobby?",
        answers: [
            { text: "reading", correct: true },
            { text: "cooking", correct: false },
            { text: "painting", correct: false },
            { text: "hiking", correct: false }
        ]
    },
    {
        question: "What is your favorite subject?",
        answers: [
            { text: "math", correct: false },
            { text: "science", correct: true },
            { text: "history", correct: false },
            { text: "literature", correct: false }
        ]
    },
    {
        question: "What is your favorite genre of movie?",
        answers: [
            { text: "action", correct: false },
            { text: "comedy", correct: true },
            { text: "drama", correct: false },
            { text: "horror", correct: false }
        ]
    }
];

let score = 0;
let current = 0;

function start() {
    if (current < questions.length) {
        let questionelement = document.getElementById("question");
        let nextbutton = document.getElementById("next-btn");
        let anselement = document.getElementById("ansbutton");
        
        questionelement.innerHTML = "";
        anselement.innerHTML = "";
        
        questions[current].answers.forEach((answer, index) => {
            let ansbutton = document.createElement("button");
            ansbutton.innerHTML = answer.text;
            ansbutton.setAttribute("data-index", index);
            ansbutton.classList.add("btn");
            ansbutton.addEventListener("click", check);
            anselement.appendChild(ansbutton);
        });

        let q = document.createElement("h2");
        q.innerHTML = `${current + 1}. ${questions[current].question}`;
        questionelement.appendChild(q);
        
        nextbutton.innerHTML = "";
        let button = document.createElement("button");
        button.innerHTML = "Next";
        button.setAttribute("id", "next-btn1");
        button.addEventListener("click", () => {
            current++;
            start();
        });
        nextbutton.appendChild(button);
    } else {
        let d = document.createElement("div");
        d.innerHTML = `Questions are over. Your score is ${score}`;
        let k = document.getElementById("app");
        k.innerHTML = "";
        d.setAttribute("style", "height:400px");
        k.appendChild(d);
    }
}

function check(event) {
    let selectedAnswerIndex = event.target.getAttribute("data-index");
    if (questions[current].answers[selectedAnswerIndex].correct) {
        score++;
    }
}

start();
