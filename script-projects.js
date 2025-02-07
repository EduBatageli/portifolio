
const params = new URLSearchParams(window.location.search);

// Obtém os valores individuais
const lang = params.get("lang");   // 'ptbr'
const theme = params.get("theme"); // 'dark'

const html = document.documentElement;
html.classList.add(theme)

// Exibe no console
console.log(`Idioma: ${lang}, Tema: ${theme}`);