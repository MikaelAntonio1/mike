const elementosParaRevelar = document.querySelectorAll('.revelar-esquerda');

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('ativo');
        } else {
            entrada.target.classList.remove('ativo');
        }
    });
}, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
});

elementosParaRevelar.forEach(elemento => {
    observador.observe(elemento);
});