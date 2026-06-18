document.addEventListener("DOMContentLoaded", () => {
    const gridBg = document.getElementById("gridBg");

    // Интерактивный микро-параллакс для клетчатого поля
    document.addEventListener("mousemove", (e) => {
        // Вычисляем отклонение от центра экрана
        const moveX = (e.clientX - window.innerWidth / 2) * 0.03;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.03;

        // Передаем значения смещения сетки в CSS-переменные
        if (gridBg) {
            gridBg.style.setProperty("--mx", `${moveX}px`);
            gridBg.style.setProperty("--my", `${moveY}px`);
        }
    });
});
