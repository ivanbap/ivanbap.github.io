document.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.getElementById('back-to-top');

    // Função para mostrar ou esconder o botão
    window.onscroll = function() {
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    };

    // Função para rolar suavemente ao topo (opcional, mas melhor UX)
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão do link
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Rola suavemente
        });
    });
});