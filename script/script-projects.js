
const params = new URLSearchParams(window.location.search);

// Obtém os valores individuais
const lang = params.get("lang");   // 'ptbr'
const theme = params.get("theme"); // 'dark'

const html = document.documentElement;
html.classList.add(theme)


if(lang === "ptbr") {
    document.getElementById("titulo_projeto1").innerHTML = "Plataforma de Gerenciamento de Senhas"
    document.getElementById("desc_projeto1").innerHTML = "Plataforma segura para armazenar, gerar e gerenciar senhas com criptografia."
    document.getElementById("button-back").innerHTML = "Voltar"
    document.getElementById("titulo_projeto1").innerHTML = "Gerador de Receitas com IA"
    document.getElementById("desc_projeto1").innerHTML = "Agente inteligente que gera receitas personalizadas com base nos ingredientes fornecidos."

}
else {
    document.getElementById("titulo_projeto1").innerHTML = "Password Management Platform"
    document.getElementById("desc_projeto1").innerHTML = "Secure platform for storing, generating, and managing passwords with encryption."
    document.getElementById("button-back").innerHTML = "Back"
    document.getElementById("titulo_projeto1").innerHTML = "AI Recipe Generator"
    document.getElementById("desc_projeto1").innerHTML = "Intelligent agent that generates personalized recipes based on the ingredients provided."

}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("button-back").addEventListener("click", () => {
        window.location.href = `https://edubatageli.github.io/portifolio/index.html?lang=${lang}&theme=${theme}`;
    });
});