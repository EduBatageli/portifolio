function alterMode(){

    const html = document.documentElement

    if(html.classList.contains("light")) {
        html.classList.remove("light")
    } else {
        html.classList.add("light")
    }

}

function alterLang(){

    const body = document.body

    if(body.classList.contains("ptbr")) {
        document.getElementById("description").innerHTML = "Sistem Analyst | Agent Engineer (A.I)"
        document.getElementById("btn-portfolio").innerHTML = "Projects"
        document.getElementById("btn-contact").innerHTML = "Contact"
        document.getElementById("btn-sumary").innerHTML = "Summary"
        document.getElementById("description").innerHTML = "Sistem Analyst | Agent Engineer (A.I)"

    } else {
        body.classList.add("ptbr")
        document.getElementById("description").innerHTML = "Analista de Sistemas | Engenheiro de Agente(IA)"
        document.getElementById("btn-portfolio").innerHTML = "Projetos"
        document.getElementById("btn-contact").innerHTML = "Contato"
        document.getElementById("btn-sumary").innerHTML = "Resumo"
    }

}
