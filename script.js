const questions = {
    // EASY LEVELS (1-3)
    level1: [
        {
            question: "What is the capital of France?",
            answers: ["London", "Berlin", "Paris", "Madrid"],
            correct: 2
        },
        {
            question: "Which planet is closest to the Sun?",
            answers: ["Venus", "Mars", "Mercury", "Earth"],
            correct: 2
        },
        {
            question: "What is 5 + 7?",
            answers: ["10", "12", "13", "11"],
            correct: 1
        }
    ],
    level2: [
        {
            question: "Which color is made by mixing blue and yellow?",
            answers: ["Purple", "Orange", "Green", "Brown"],
            correct: 2
        },
        {
            question: "How many continents are there?",
            answers: ["5", "6", "7", "8"],
            correct: 2
        },
        {
            question: "What is the largest mammal in the world?",
            answers: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            correct: 1
        }
    ],
    level3: [
        {
            question: "Which is the longest river in the world?",
            answers: ["Amazon", "Nile", "Mississippi", "Yangtze"],
            correct: 1
        },
        {
            question: "How many days are in a leap year?",
            answers: ["365", "366", "364", "367"],
            correct: 1
        },
        {
            question: "What is the chemical symbol for gold?",
            answers: ["Ag", "Fe", "Au", "Cu"],
            correct: 2
        }
    ],

    // INTERMEDIATE LEVELS (4-7)
    level4: [
        {
            question: "Which element has the atomic number 1?",
            answers: ["Helium", "Hydrogen", "Carbon", "Oxygen"],
            correct: 1
        },
        {
            question: "What is the square root of 144?",
            answers: ["12", "14", "10", "16"],
            correct: 0
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            answers: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
            correct: 1
        }
    ],
    level5: [
        {
            question: "What is the capital of Japan?",
            answers: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
            correct: 2
        },
        {
            question: "Which programming language was created by James Gosling?",
            answers: ["Python", "Java", "C++", "JavaScript"],
            correct: 1
        },
        {
            question: "What is the speed of light (in km/s)?",
            answers: ["299,792", "199,792", "399,792", "499,792"],
            correct: 0
        }
    ],
    level6: [
        {
            question: "Which planet is known as the 'Morning Star'?",
            answers: ["Mars", "Jupiter", "Venus", "Mercury"],
            correct: 2
        },
        {
            question: "What is the chemical formula for table salt?",
            answers: ["NaCl", "H2O", "CO2", "CaCO3"],
            correct: 0
        },
        {
            question: "Who painted the 'Starry Night'?",
            answers: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
            correct: 1
        }
    ],
    level7: [
        {
            question: "What is the largest organ in the human body?",
            answers: ["Heart", "Brain", "Liver", "Skin"],
            correct: 3
        },
        {
            question: "Which year did World War II end?",
            answers: ["1945", "1944", "1946", "1943"],
            correct: 0
        },
        {
            question: "What is the value of π (pi) to two decimal places?",
            answers: ["3.14", "3.16", "3.12", "3.18"],
            correct: 0
        }
    ],

    // ADVANCED LEVELS (8-10)
    level8: [
        {
            question: "What is the Pythagorean theorem?",
            answers: ["a² + b² = c²", "E = mc²", "F = ma", "PV = nRT"],
            correct: 0
        },
        {
            question: "Which particle has a negative charge?",
            answers: ["Proton", "Neutron", "Electron", "Positron"],
            correct: 2
        },
        {
            question: "What is the capital of Kazakhstan?",
            answers: ["Almaty", "Astana", "Bishkek", "Tashkent"],
            correct: 1
        }
    ],
    level9: [
        {
            question: "What is the half-life of Carbon-14?",
            answers: ["4,730 years", "5,730 years", "6,730 years", "7,730 years"],
            correct: 1
        },
        {
            question: "Which algorithm is commonly used for sorting?",
            answers: ["Quick Sort", "Fast Sort", "Speed Sort", "Rapid Sort"],
            correct: 0
        },
        {
            question: "What is the molecular formula for glucose?",
            answers: ["C6H12O6", "C6H6O6", "C12H22O11", "C6H10O5"],
            correct: 0
        }
    ],
    level10: [
        {
            question: "What is quantum entanglement?",
            answers: [
                "Particles existing in multiple states",
                "Particles sharing quantum states regardless of distance",
                "Particles changing their spin",
                "Particles moving at light speed"
            ],
            correct: 1
        },
        {
            question: "Which mathematical constant is known as Euler's number?",
            answers: ["π (pi)", "e", "i", "φ (phi)"],
            correct: 1
        },
        {
            question: "What is the time complexity of binary search?",
            answers: ["O(n)", "O(n²)", "O(log n)", "O(n log n)"],
            correct: 2
        }
    ]
};

class QuizApp {
    constructor() {
        this.currentLevel = 1;
        this.currentQuestionInLevel = 0;
        this.score = 0;
        this.startTime = null;
        this.initializeElements();
        this.attachEventListeners();
        this.loadHighScores();
        
        // Add these new properties
        this.nezuko = document.querySelector('.nezuko');
        this.speechBubble = document.querySelector('.speech-bubble');
        this.encouragements = [
            'すごい! (Amazing!)',
            'よくできました! (Well done!)',
            '完璧! (Perfect!)',
            'その通り! (That\'s right!)',
            '素晴らしい! (Wonderful!)'
        ];
    }

    initializeElements() {
        // Screens
        this.startScreen = document.getElementById('start-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultsScreen = document.getElementById('results-screen');
        this.highscoresScreen = document.getElementById('highscores-screen');

        // Buttons
        this.startBtn = document.getElementById('start-btn');
        this.highscoresBtn = document.getElementById('highscores-btn');
        this.saveScoreBtn = document.getElementById('save-score');
        this.retryBtn = document.getElementById('retry-btn');
        this.backBtn = document.getElementById('back-btn');
        this.clearScoresBtn = document.getElementById('clear-scores');

        // Quiz elements
        this.questionText = document.getElementById('question-text');
        this.answersGrid = document.getElementById('answers');
        this.progressBar = document.getElementById('progress');
        this.questionNumber = document.getElementById('question-number');
        this.currentScoreDisplay = document.getElementById('current-score');
        
        // Results elements
        this.finalScore = document.getElementById('final-score');
        this.timeTaken = document.getElementById('time-taken');
        this.username = document.getElementById('username');
        this.highscoresList = document.getElementById('highscores-list');
    }

    attachEventListeners() {
        this.startBtn.addEventListener('click', () => this.startQuiz());
        this.highscoresBtn.addEventListener('click', () => this.showHighScores());
        this.saveScoreBtn.addEventListener('click', () => this.saveScore());
        this.retryBtn.addEventListener('click', () => this.startQuiz());
        this.backBtn.addEventListener('click', () => this.showScreen(this.startScreen));
        this.clearScoresBtn.addEventListener('click', () => this.clearHighScores());
    }

    showScreen(screen) {
        [this.startScreen, this.quizScreen, this.resultsScreen, this.highscoresScreen]
            .forEach(s => s.classList.add('hide'));
        screen.classList.remove('hide');
    }

    startQuiz() {
        this.currentLevel = 1;
        this.currentQuestionInLevel = 0;
        this.score = 0;
        this.startTime = new Date();
        this.showScreen(this.quizScreen);
        this.displayQuestion();
    }

    displayQuestion() {
        const levelQuestions = this.getCurrentLevelQuestions();
        const question = levelQuestions[this.currentQuestionInLevel];
        
        this.questionText.textContent = `Level ${this.currentLevel} - ${question.question}`;
        this.answersGrid.innerHTML = '';
        
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.classList.add('answer-btn');
            button.textContent = answer;
            button.addEventListener('click', () => this.handleAnswer(index));
            this.answersGrid.appendChild(button);
        });

        this.updateProgress();
    }

    handleAnswer(selectedIndex) {
        const levelQuestions = this.getCurrentLevelQuestions();
        const correct = levelQuestions[this.currentQuestionInLevel].correct;
        const buttons = this.answersGrid.getElementsByClassName('answer-btn');
        
        Array.from(buttons).forEach(button => {
            button.disabled = true;
        });

        if (selectedIndex === correct) {
            buttons[selectedIndex].classList.add('correct');
            this.score++;
            this.showCatAnimation();
        } else {
            buttons[selectedIndex].classList.add('wrong');
            buttons[correct].classList.add('correct');
        }

        setTimeout(() => this.nextQuestion(), 1500);
    }

    nextQuestion() {
        this.currentQuestionInLevel++;
        
        if (this.currentQuestionInLevel >= 3) {
            this.currentQuestionInLevel = 0;
            this.currentLevel++;
            
            if (this.currentLevel > 10) {
                this.showResults();
                return;
            }
        }
        
        this.displayQuestion();
    }

    updateProgress() {
        const totalQuestions = 30; // 10 levels * 3 questions
        const questionsDone = ((this.currentLevel - 1) * 3) + this.currentQuestionInLevel;
        const progress = (questionsDone / totalQuestions) * 100;
        
        this.progressBar.style.width = `${progress}%`;
        this.questionNumber.textContent = `Level ${this.currentLevel} - Question ${this.currentQuestionInLevel + 1}/3`;
        this.currentScoreDisplay.textContent = `Score: ${this.score}`;
    }

    showResults() {
        const endTime = new Date();
        const timeDiff = Math.round((endTime - this.startTime) / 1000);
        const minutes = Math.floor(timeDiff / 60);
        const seconds = timeDiff % 60;

        this.finalScore.textContent = `${this.score} out of 30`;
        this.timeTaken.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        this.showScreen(this.resultsScreen);
    }

    loadHighScores() {
        const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
        return highScores;
    }

    saveScore() {
        if (!this.username.value) return;

        const newScore = {
            name: this.username.value,
            score: this.score,
            time: this.timeTaken.textContent
        };

        let highScores = this.loadHighScores();
        highScores.push(newScore);
        highScores.sort((a, b) => b.score - a.score);
        highScores = highScores.slice(0, 10);

        localStorage.setItem('highScores', JSON.stringify(highScores));
        this.showHighScores();
    }

    showHighScores() {
        this.highscoresList.innerHTML = '';
        const highScores = this.loadHighScores();

        highScores.forEach((score, index) => {
            const scoreElement = document.createElement('div');
            scoreElement.classList.add('highscore-item');
            scoreElement.innerHTML = `
                <span>${index + 1}. ${score.name}</span>
                <span>Score: ${score.score} (Time: ${score.time})</span>
            `;
            this.highscoresList.appendChild(scoreElement);
        });

        this.showScreen(this.highscoresScreen);
    }

    clearHighScores() {
        localStorage.removeItem('highScores');
        this.highscoresList.innerHTML = '';
    }

    getCurrentLevelQuestions() {
        return questions[`level${this.currentLevel}`];
    }

    showCatAnimation() {
        const cat = document.querySelector('.chibi-cat');
        const speechBubble = document.querySelector('.speech-bubble');
        
        // Hide any existing animation
        cat.classList.add('hidden');
        speechBubble.classList.add('hidden');
        
        // Force reflow
        void cat.offsetWidth;
        
        // Show cat and speech bubble
        cat.classList.remove('hidden');
        speechBubble.classList.remove('hidden');
        
        // Encouraging messages
        const messages = [
            'Meow! 🎉',
            'Purrfect! ⭐',
            'Yay! 🌟',
            'Great! 🎊',
            'Nice! 💫'
        ];
        
        speechBubble.textContent = messages[
            Math.floor(Math.random() * messages.length)
        ];
        
        // Add show classes for animation
        setTimeout(() => {
            cat.classList.add('show');
            speechBubble.classList.add('show');
        }, 100);
        
        // Hide after animation
        setTimeout(() => {
            cat.classList.remove('show');
            speechBubble.classList.remove('show');
        }, 3000);
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
}); 