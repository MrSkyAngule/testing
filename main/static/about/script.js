document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count-up');

    // Анимация плавного набора числовых показателей телеметрии (Create-стиль)
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const suffix = counter.getAttribute('data-suffix') || '';
        const duration = 2000; // Продолжительность наката цифр в мс
        const startTime = performance.now();

        const updateCount = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            // Функция сглаживания (Ease Out) для замедления к концу
            const easeProgress = progress * (2 - progress);
            const currentValue = Math.floor(easeProgress * target);

            counter.innerText = currentValue + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target + suffix;
            }
        };
        requestAnimationFrame(updateCount);
    });
});
