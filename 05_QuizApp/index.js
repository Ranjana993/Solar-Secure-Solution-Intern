const QuizData = [
    {
        question: "Which is a javaScript Framework.",
        a: "django",
        b: ".net",
        c: "React",
        d: "Flask",
        correct: "c"
    },
    {
        question: "Which is not a programming Language.",
        a: "Html",
        b: "python",
        c: "java",
        d: "JavaScript",
        correct: "a"
    },
    {
        question: "Which is not a Framework.",
        a: "react",
        b: "javaScript",
        c: "angular",
        d: "Django",
        correct: "b"
    },
    {
        question: "CSS stands for.",
        a: "cascading style state",
        b: "cascading style sheet",
        c: "cascading style of sheet",
        d: "none",
        correct: "b"
    }
]


const Quiz = document.getElementById("Quiz")
const answer = document.querySelectorAll(".answer")
const question = document.getElementById("question")
const option_a = document.getElementById("a_Value")
const option_b = document.getElementById("b_Value")
const option_c = document.getElementById("c_Value")
const option_d = document.getElementById("d_Value")
const submitBtn = document.getElementById("submit")


var currentQuestion = 0
var quizScore = 0
loadQuiz()
function loadQuiz() {
    deselect()
    question.innerText = QuizData[currentQuestion].question
    option_a.innerText = QuizData[currentQuestion].a
    option_b.innerText = QuizData[currentQuestion].b
    option_c.innerText = QuizData[currentQuestion].c
    option_d.innerText = QuizData[currentQuestion].d
}

function deselect() {
    answer.forEach(anser => anser.checked = false)
}

submitBtn.addEventListener("click", () => {
    var selectedOption;
    
    answer.forEach(ans => {
        if (ans.checked) {
            selectedOption = ans.id
        }
    })

    if (selectedOption === QuizData[currentQuestion].correct) {
        quizScore = quizScore + 1
    }
    currentQuestion = currentQuestion + 1
    if (currentQuestion === QuizData.length) {
        document.getElementById("Quiz").innerHTML = `<h2>You have answered ${quizScore} correctly out of ${QuizData.length} </h2>`
    } else {
        loadQuiz()
    }
})