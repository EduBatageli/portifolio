
// rota para aba de projetos com atributos de lang e tema
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn-portfolio").addEventListener("click", () => {
        const lang = document.body.classList.contains("ptbr") ? "ptbr" : "en";
        const theme = document.documentElement.classList.contains("light") ? "light" : "dark"
        window.location.href = `https://edubatageli.github.io/portifolio/src/views/projects.html?lang=${lang}&theme=${theme}`;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn-sumary").addEventListener("click", () => {
        const lang = document.body.classList.contains("ptbr") ? "ptbr" : "en";
        const theme = document.documentElement.classList.contains("light") ? "light" : "dark"
        window.location.href = `https://edubatageli.github.io/portifolio/src/views/sumary.html?lang=${lang}&theme=${theme}`;
    });
});

function alterMode() {
    const html = document.documentElement;
    html.classList.toggle("light");
}

function alterLang() {
    const body = document.body;

    if (body.classList.contains("ptbr")) {
        body.classList.remove("ptbr");

        document.getElementById("description").innerHTML = "System Analyst | Agent Engineer (A.I)";
        document.getElementById("btn-portfolio").innerHTML = "Projects";
        document.getElementById("btn-contact").innerHTML = "Contact";
        document.getElementById("btn-sumary").innerHTML = "Summary";
    } else {
        body.classList.add("ptbr");

        document.getElementById("description").innerHTML = "Analista de Sistemas | Engenheiro de Agente (IA)";
        document.getElementById("btn-portfolio").innerHTML = "Projetos";
        document.getElementById("btn-contact").innerHTML = "Contato";
        document.getElementById("btn-sumary").innerHTML = "Resumo";
    }
}
