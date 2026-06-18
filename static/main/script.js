// Логика копирования IP адреса при клике
document.getElementById('copy-ip-btn').addEventListener('click', function() {
    const ipText = "play.createcraft.ru"; // Замените на реальный IP вашего сервера

    // Копирование в буфер обмена
    navigator.clipboard.writeText(ipText).then(() => {
        const btnText = document.getElementById('ip-text');
        const originalText = btnText.innerText;

        // Визуальный отклик успешного копирования
        btnText.innerText = "Скопировано!";
        btnText.style.color = "#2ecc71";

        // Возвращаем текст назад через 2 секунды
        setTimeout(() => {
            btnText.innerText = originalText;
            btnText.style.color = "";
        }, 2000);
    }).catch(err => {
        console.error('Не удалось скопировать IP: ', err);
    });
});

// Пример динамического обновления онлайна (заглушка)
// При необходимости сюда можно подключить API (например, mcapi.us или minetools.im)
function updateOnline() {
    const playerCountElement = document.getElementById('player-count');
    // Генерируем небольшое колебание онлайна для симуляции живого сервера
    const currentOnline = Math.floor(Math.random() * (48 - 35 + 1)) + 35;
    playerCountElement.innerText = currentOnline;
}

// Обновляем онлайн каждые 30 секунд
setInterval(updateOnline, 30000);
updateOnline();
