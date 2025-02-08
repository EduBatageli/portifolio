const params = new URLSearchParams(window.location.search);

// Obtém os valores individuais
const lang = params.get("lang"); // 'ptbr'
const theme = params.get("theme"); // 'dark'



const html = document.documentElement;
html.classList.add(theme);

if (lang === "ptbr") {
    document.getElementById("title").innerHTML = "Sobre";
    document.getElementById("title-desription").innerHTML = "Analista de Sistemas com sólida expertise em automação, integração de sistemas e otimização de processos de negócios. Apaixonado por inteligência artificial, estou sempre em busca de desenvolver soluções inovadoras que aumentem a eficiência operacional, minimizem erros e gerem resultados mensuráveis, como redução de custos e aumento da produtividade.";   
    document.getElementById("skills").innerHTML = "Habilidades Técnicas"
    document.getElementById("Professional_exp").innerHTML = "Experiencia Profissional"
    document.getElementById("Professional-session").innerHTML = "Analista de Sistemas e Engenheiro de Agentes"
    document.getElementById("timeline").innerHTML = "Skyone | 2024 - Presente"
    document.getElementById("job_desc1").innerHTML = "Desenvolvendo integrações de sistemas, implementando melhorias e automatizando processos por meio de agentes de inteligência artificial. Realizando validação de processos e promovendo a melhoria contínua dos processos internos, com foco em eficiência, inovação e otimização operacional."
    document.getElementById("Professional-session2").innerHTML = "Arquiteto de Soluções de Nuvem"
    document.getElementById("button-back").innerHTML = "Voltar"
    document.getElementById("job-desc2").innerHTML = "Colaborando com a equipe de arquitetura no design de projetos para novos clientes e na execução de upgrades em ambientes de nuvem (Oracle, AWS, Azure) para clientes existentes, garantindo alto desempenho, segurança e escalabilidade das soluções implementadas. Além disso, atuando em conjunto com a equipe de Customer Success para validar ambientes e impulsionar a retenção de clientes, promovendo satisfação e sucesso contínuo em suas operações."

} else {
    document.getElementById("title").innerHTML = "About Me";
    document.getElementById("title-desription").innerHTML =
      "Systems Analyst with solid expertise in automation, systems integration, and business process optimization. Passionate about artificial intelligence, I am constantly seeking to develop innovative solutions that enhance operational efficiency, minimize errors, and deliver measurable results, such as cost reduction and increased productivity";
    document.getElementById("skills").innerHTML = "Technical Skills"
    document.getElementById("Professional_exp").innerHTML = "Professional Experience"
    document.getElementById("Professional-session").innerHTML = "Systems Analyst and Agent Engineer"
    document.getElementById("timeline").innerHTML = "Skyone | 2024 - Present"
    document.getElementById("job_desc1").innerHTML = "Developing system integrations, implementing improvements, and automating processes through artificial intelligence agents. Conducting process validation and driving continuous improvement of internal processes, with a focus on efficiency, innovation, and operational optimization."
    document.getElementById("Professional-session2").innerHTML = "Cloud Solutions Architech"
    document.getElementById("button-back").innerHTML = "Back"
    document.getElementById("job-desc2").innerHTML = "Collaborating with the architecture team in designing projects for new clients and executing upgrades in cloud environments (Oracle, AWS, Azure) for existing clients, ensuring high performance, security, and scalability of the implemented solutions. Additionally, working alongside the Customer Success team to validate environments and drive client retention, fostering satisfaction and ongoing success in their operations"
}
