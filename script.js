const welcomeMessages = [
    "Welcome",             // English
    "Bienvenido",          // Spanish
    "Bienvenue",           // French
    "أهلا وسهلا",           // Arabic
    "Willkommen",          // German
    "Benvenuto",           // Italian
    "Welkom",              // Dutch
    "欢迎",                 // Chinese (Simplified)
    "Добро пожаловать",    // Russian
    "स्वागत हे",            // Hindi
    "ようこそ",             // Japanese
    "환영합니다",           // Korean
    "Bem-vindo",           // Portuguese
    "Καλώς ήρθατε",        // Greek
    "Välkommen"            // Swedish
];

let currentIndex = 0;
const messageElement = document.getElementById("welcome-message");

function changeMessage() {
    messageElement.classList.remove("fade-in");
    void messageElement.offsetWidth;  // Trigger reflow to restart the animation
    messageElement.classList.add("fade-in");
    messageElement.textContent = welcomeMessages[currentIndex];
    currentIndex = (currentIndex + 1) % welcomeMessages.length;
}

// Change message every 2 seconds (2000 milliseconds)
setInterval(changeMessage, 2000);

// Initialize the first message
changeMessage();
