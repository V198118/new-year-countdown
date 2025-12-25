// Конфигурация таймера по умолчанию
window.defaultConfig = {
    // Позиция таймера
    position: {
        left: "50%",
        top: "50%"
    },
    
    // Размер и цвет
    fontSize: 200,
    color: "#FFFFFF",
    labelColor: "#FFFFFF",
    
    // Прозрачность затемняющего слоя
    overlayOpacity: 0.3,
    
    // Формат времени (true - часы, false - дни)
    showHours: true,
    
    // Настройки видео
    videoSettings: {
        autoplay: true,
        muted: true,
        loop: true,
        controls: false
    }
};

// Загружаем сохраненную конфигурацию при запуске
(function() {
    const savedConfig = localStorage.getItem('timerConfig');
    if (savedConfig) {
        try {
            window.timerConfig = JSON.parse(savedConfig);
        } catch (e) {
            console.error('Ошибка загрузки конфигурации:', e);
            window.timerConfig = { ...window.defaultConfig };
        }
    } else {
        window.timerConfig = { ...window.defaultConfig };
    }
})();
