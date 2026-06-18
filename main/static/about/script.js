document.addEventListener("DOMContentLoaded", () => {

    // 1. Анимация счетчика на плавающем бейдже
    const badge = document.getElementById("counter-badge");
    let count = 0;
    const target = 150; // Конечная цифра для вашего счетчика (например, 150+ проектов/идей)
    const speed = 2000 / target; // Скорость анимации в миллисекундах

    const updateCounter = () => {
        if (count < target) {
            count += Math.ceil(target / 100); // Шаг анимации
            if (count > target) count = target;
            badge.innerText = `${count}+ Идей`;
            setTimeout(updateCounter, speed);
        }
    };

    // Запуск счетчика с небольшой задержкой при загрузке страницы
    setTimeout(updateCounter, 500);

    // 2. Интерактив для кнопки (эффект клика)
    const actionBtn = document.getElementById("actionBtn");
    actionBtn.addEventListener("click", () => {
        // Здесь вы можете прописать логику, например, скролл к следующей секции или открытие модального окна
        alert("Кнопка работает! Здесь может быть открытие формы или переход.");
    });
});
