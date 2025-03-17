// Плавная прокрутка к разделам
document.querySelectorAll('.navbar__menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Предотвращаем стандартное поведение ссылки

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});