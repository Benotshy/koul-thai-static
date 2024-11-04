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

const messageElement = document.getElementById("welcome-message");
let currentIndex = 0;


function changeMessage() {
  messageElement.classList.remove("fade-in");
  requestAnimationFrame(() => {
      messageElement.classList.add("fade-in");
      messageElement.textContent = welcomeMessages[currentIndex];
      currentIndex = (currentIndex + 1) % welcomeMessages.length;
  });
}

setInterval(changeMessage, 2000);


messageElement.textContent = welcomeMessages[currentIndex];
messageElement.classList.add("fade-in");
