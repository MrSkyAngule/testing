<script>
    document.addEventListener('DOMContentLoaded', () => {
        const card = document.querySelector('.project-card');
        const statsBoxes = document.querySelectorAll('.stat-box');

        // --- 1. ЭФФЕКТ 3D НАКЛОНА КАРТОЧКИ (Card Tilt) ---
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();

            // Находим координаты курсора относительно центра карточки
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Вычисляем углы наклона (макс. 6 градусов для аккуратности)
            const degX = -(y / (rect.height / 2)) * 6;
            const degY = (x / (rect.width / 2)) * 6;

            // Применяем 3D-вращение
            card.style.transform = `rotateX(${degX}deg) rotateY(${degY}deg) translateY(-6px)`;
        });

        // Возвращаем карточку в исходное положение, когда мышь уходит
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(0px)';
        });


        // --- 2. ЭФФЕКТ СЛЕДУЮЩЕГО БЛИКА (Spotlight Glow) ---
        statsBoxes.forEach(box => {
            box.addEventListener('mousemove', (e) => {
                const rect = box.getBoundingClientRect();

                // Вычисляем локальную позицию курсора внутри маленького блока
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                // Передаем координаты прямо в CSS-переменные блока
                box.style.setProperty('--mouse-x', `${x}px`);
                box.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    });
</script>
