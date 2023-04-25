const text = document.querySelector(".mudar");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Python";
            }, 0);
            setTimeout(() => {
                text.textContent = "SQL";
            }, 4000);
            setTimeout(() => {
                text.textContent = "Java";
            }, 8000); //1s = 1000 milliseconds
        }

        textLoad();
        setInterval(textLoad, 12000);