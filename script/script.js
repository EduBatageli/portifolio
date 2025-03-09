document.addEventListener("DOMContentLoaded", () => {
    // Verifica se a URL já possui parâmetros ou não.
    const params = new URLSearchParams(window.location.search);
    let lang = params.get("lang") || (document.body.classList.contains("ptbr") ? "ptbr" : "en");
    let theme = params.get("theme") || (document.documentElement.classList.contains("light") ? "light" : "dark");

    // Atualiza a URL para incluir os parâmetros de idioma e tema (se não estiver presente)
    const currentURL = window.location.origin + window.location.pathname;
    if (!params.has("lang") || !params.has("theme")) {
        window.history.replaceState(null, '', `${currentURL}?lang=${lang}&theme=${theme}`);
    }
});

// Rota para aba de projetos com atributos de lang e tema
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn-portfolio").addEventListener("click", () => {
        const lang = document.body.classList.contains("ptbr") ? "ptbr" : "en";
        const theme = document.documentElement.classList.contains("light") ? "light" : "dark";
        // Atualiza a URL quando clicar no botão de projetos
        window.location.href = `${window.location.origin}https://edubatageli.github.io/portifolio/src/views/projects.html?lang=${lang}&theme=${theme}`;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn-sumary").addEventListener("click", () => {
        const lang = document.body.classList.contains("ptbr") ? "ptbr" : "en";
        const theme = document.documentElement.classList.contains("light") ? "light" : "dark";
        // Atualiza a URL quando clicar no botão de resumo
        window.location.href = `https://edubatageli.github.io/portifolio/src/views/sumary.html?lang=${lang}&theme=${theme}`;
    });
});

// Atualiza a classe do body e html com base na URL
const params = new URLSearchParams(window.location.search);
const lang = params.get("lang");   // 'ptbr'
const theme = params.get("theme"); // 'dark'

console.log(lang);

// Atualiza as classes do body e html de acordo com a URL
const body = document.body;
body.classList.toggle(lang);

const html = document.documentElement;
html.classList.toggle(theme);

// Função para alterar o modo (tema)
function alterMode() {
    const html = document.documentElement;
    html.classList.toggle("light");
    html.classList.toggle("dark"); // Garantir que a troca de tema seja mutuamente exclusiva
    updateURL(); // Atualiza a URL após a troca de tema
}

// Função para alterar o idioma
function alterLang() {
    const body = document.body;

    if (body.classList.contains("ptbr")) {
        body.classList.remove("ptbr");

        document.getElementById("description").innerHTML = "System Analyst | Agent Engineer (A.I)";
        document.getElementById("btn-portfolio").innerHTML = "Projects";
        document.getElementById("btn-sumary").innerHTML = "Summary";
    } else {
        body.classList.add("ptbr");

        document.getElementById("description").innerHTML = "Analista de Sistemas | Engenheiro de Agente (IA)";
        document.getElementById("btn-portfolio").innerHTML = "Projetos";
        document.getElementById("btn-sumary").innerHTML = "Resumo";
    }
    updateURL(); // Atualiza a URL após a troca de idioma
}

// Função para atualizar a URL com os parâmetros de tema e idioma
function updateURL() {
    const lang = document.body.classList.contains("ptbr") ? "ptbr" : "en";
    const theme = document.documentElement.classList.contains("light") ? "light" : "dark";
    const currentURL = window.location.origin + window.location.pathname;
    window.history.replaceState(null, '', `${currentURL}?lang=${lang}&theme=${theme}`);
}

// Adicionar eventos para alternar tema e idioma
document.getElementById("theme-toggle-btn")?.addEventListener("click", alterMode);
document.getElementById("lang-toggle-btn")?.addEventListener("click", alterLang);
