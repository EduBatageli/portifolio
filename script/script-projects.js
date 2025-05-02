
const params = new URLSearchParams(window.location.search);

// Obtém os valores individuais
const lang = params.get("lang");   // 'ptbr'
const theme = params.get("theme"); // 'dark'

const html = document.documentElement;
html.classList.add(theme)


if(lang === "ptbr") {
    document.getElementById("button-back").innerHTML = "Voltar"
    document.getElementById("titulo_projeto1").innerHTML = "Gerador de Receitas com IA"
    document.getElementById("desc_projeto1").innerHTML = "Agente inteligente que gera receitas personalizadas com base nos ingredientes fornecidos."
    document.getElementById("titulo_projeto2").innerHTML = "Gerenciador de Senhas"
    document.getElementById("desc_projeto2").innerHTML = "Um gerenciador de senhas seguro e fácil de usar que permite aos usuários armazenar, organizar e acessar suas credenciais."

}
else {
    document.getElementById("button-back").innerHTML = "Back"
    document.getElementById("titulo_projeto1").innerHTML = "AI Recipe Generator"
    document.getElementById("desc_projeto1").innerHTML = "Intelligent agent that generates personalized recipes based on the ingredients provided."
    document.getElementById("titulo_projeto2").innerHTML = "Password Manager"
    document.getElementById("desc_projeto2").innerHTML = "A secure and user-friendly password manager that allows users to store, organize, and access their credentials."

}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("button-back").addEventListener("click", () => {
        window.location.href = `https://edubatageli.github.io/portifolio/index.html?lang=${lang}&theme=${theme}`;
    });
});