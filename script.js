const questions = [
    {
        question: "What do you enjoy the most?",
        options: ["Coding and problem-solving", "Designing user interfaces", "Managing IT systems", "Helping people with tech problems"]
    },
    {
        question: "What type of work environment do you prefer?",
        options: ["Solo work", "Team collaboration", "Flexible work from home", "Customer interaction"]
    },
    // Add more questions here
];

let currentQuestion = 0;

const progressBarFill = document.getElementById("progress-bar-fill");
const progressText = document.getElementById("progress-text");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const resultsSection = document.getElementById("results");
const careerRecommendation = document.getElementById("career-recommendation");

function loadQuestion() {
    const questionElement = document.querySelector(".question h2");
    const answersElement = document.querySelector(".answers");
    
    // Set current question text
    questionElement.textContent = questions[currentQuestion].question;
    
    // Set the options
    answersElement.innerHTML = '';
    questions[currentQuestion].options.forEach((option, index) => {
        answersElement.innerHTML += `
            <input type="radio" id="option${index + 1}" name="question${currentQuestion}" value="option${index + 1}">
            <label for="option${index + 1}">${option}</label><br>
        `;
    });

    // Update progress bar
    progressBarFill.style.width = `${(currentQuestion + 1) / questions.length * 100}%`;
    progressText.textContent = `${currentQuestion + 1} of ${questions.length}`;

    // Disable previous button if it's the first question
    prevBtn.disabled = currentQuestion === 0;
    
    // Show "Next" or "Finish" depending on the question
    nextBtn.textContent = currentQuestion === questions.length - 1 ? "Finish" : "Next";
}

function showResults() {
    const recommendation = "Based on your answers, you should consider roles like: Software Developer, UX Designer, System Administrator, or IT Support.";
    careerRecommendation.textContent = recommendation;
    resultsSection.style.display = "block";
    document.querySelector(".quiz-container").style.display = "none";
}

nextBtn.addEventListener("click", () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResults();
    }
});

prevBtn.addEventListener("click", () => {
    currentQuestion--;
    loadQuestion();
});

// Initial load
loadQuestion();
