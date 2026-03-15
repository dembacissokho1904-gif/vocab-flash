// app.js

// Function to create a flashcard
function createFlashcard(question, answer) {
    return { question, answer };
}

// Function to shuffle flashcards
function shuffleFlashcards(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
}

// Function to start the flashcard app
function startApp(cards) {
    const shuffledCards = shuffleFlashcards(cards);
    let currentCardIndex = 0;

    function showCard() {
        if (currentCardIndex < shuffledCards.length) {
            console.log(`Question: ${shuffledCards[currentCardIndex].question}`);
            currentCardIndex++;
        } else {
            console.log('No more cards!');
        }
    }

    return { showCard };
}

// Example usage
const flashcards = [
    createFlashcard('What is the capital of France?', 'Paris'),
    createFlashcard('What is 2 + 2?', '4'),
    createFlashcard('What is the color of the sky?', 'Blue')
];

const app = startApp(flashcards);
app.showCard();  // Show the first question
