document.addEventListener("DOMContentLoaded", () => {
    const gridBg = document.getElementById("gridBg");
    const glowPointer = document.getElementById("glowPointer");

    // Интерактивное управление фоном и подсветкой через мышь
    document.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;

        // 1. Движение неонового блика за курсором
        if (glowPointer) {
            glowPointer.style.opacity = "1";
            glowPointer.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        }

        // 2. Эффект микро-параллакса для андезитовой сетки
        const moveX = (x - window.innerWidth / 2) * 0.02;
        const moveY = (y - window.innerHeight / 2) * 0.02;

        if (gridBg) {
            gridBg.style.setProperty("--mx", `${moveX}px`);
            gridBg.style.setProperty("--my", `${moveY}px`);
        }
    });

    // Скрываем неоновый блик, если мышь покинула окно браузера
    document.addEventListener("mouseleave", () => {
        if (glowPointer) glowPointer.style.opacity = "0";
    });
});
