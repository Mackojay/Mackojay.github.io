let clickCount = 0;
const questionElement = document.getElementById('question');
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');

const phrases = [
    "How far fine girl, you go like be my valentine?", 
    "Your shakara just plenty! Say yes jor.", 
    "You know nobody does it badder than me hehe", 
    "Na beg i dey beg you o!", 
    "It's okay na...", 
    "Na wa for you lool",
    "Ngwanu nau, dey play!"
];

function respond(answer) {
    if (answer === 'no') {
        clickCount++;
        
        // Change the question text as per click count
        questionElement.textContent = phrases[Math.min(clickCount, phrases.length - 1)];

        // Enlarge the Yes button
        yesButton.style.transform = `scale(${1 + clickCount * 0.1})`;

        // After 5 clicks, make Yes absurdly large
        if (clickCount >= 5) {
            yesButton.textContent = "Yes (I'm getting too big!)";
        }

        // After 10 clicks, swap the buttons' positions
        if (clickCount >= 10) {
            swapButtons();
        }
    } else if (answer === 'yes') {
        // When "Yes" is clicked, change the question to "Good girl."
        questionElement.textContent = "Good girl.";  // Replace the question text with "Good girl."
    }
}

function swapButtons() {
    // Swap buttons' position by changing their flex order
    if (yesButton.style.order === "2") {
        yesButton.style.order = "1";
        noButton.style.order = "2";
    } else {
        yesButton.style.order = "2";
        noButton.style.order = "1";
    }

    // Reset the scale of Yes button to make it not absurdly big
    yesButton.style.transform = `scale(1)`;
    yesButton.textContent

}