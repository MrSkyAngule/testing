document.addEventListener("DOMContentLoaded", () => {

    const card = document.getElementById("mainCard");
    const blob1 = document.getElementById("blob1");
    const blob2 = document.getElementById("blob2");
    const infoItems = document.querySelectorAll(".info-item");

    // 1. ПРЕМИАЛЬНЫЙ 3D PARALLAX НАКЛОН КАРТОЧКИ (Для десктопов)
    if (window.innerWidth > 768) {
        document.addEventListener("mousemove", (e) => {
            // Координаты мыши относительно центра экрана
            const ax = -(window.innerWidth / 2 - e.clientX) / 45;
            const ay = (window.innerHeight / 2 - e.clientY) / 45;

            // Наклон основной карточки
            card.style.transform = `rotateY(${ax}deg) rotateX(${ay}deg)`;

            // Плавное смещение фоновых неоновых сфер в противоход
            const blobX = (e.clientX - window.innerWidth / 2) * 0.08;
            const blobY = (e.clientY - window.innerHeight / 2) * 0.08;
            blob1.style.transform = `translate(${blobX}px, ${blobY}px)`;
            blob2.style.transform = `translate(${-blobX}px, ${-blobY}px)`;
        });

        // Плавный сброс 3D наклона, когда мышь уходит за пределы экрана
        document.addEventListener("mouseleave", () => {
            card.style.transform = "rotateY(0deg) rotateX(0deg)";
            blob1.style.transform = "none";
            blob2.style.transform = "none";
        });
    }

    // 2. СВЕТОВОЙ СЛЕД МЫШИ (Mouse Glow) внутри маленьких карточек
    infoItems.forEach(item => {
        item.addEventListener("mousemove", (e) => {
            const rect = item.getBoundingClientRect();
            // Вычисляем точную позицию курсора внутри конкретного блока
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Передаем координаты напрямую в CSS-переменные
            item.style.setProperty("--x", `${x}px`);
            item.style.setProperty("--y", `${y}px`);
        });
    });

    // 3. ПЛАВНОЕ ПОЯВЛЕНИЕ ЭЛЕМЕНТОВ (Intersection Observer)
    const reveals = document.querySelectorAll(".reveal");
    const observerOptions = {
        root: null,
        threshold: 0.05, // Элемент начнет появляться, как только покажется на 5%
        rootMargin: "0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Добавляем микрозадержку для поочередного появления (каскад)
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, index * 80);
                observer.unobserve(entry.target); // Отключаем слежку после появления
            }
        });
    }, observerOptions);

    reveals.forEach(el => revealObserver.observe(el));
});
