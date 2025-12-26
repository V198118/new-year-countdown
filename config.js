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
    
    // Видеофон (по умолчанию)
    videoUrl: "background.mp4",
    
    // Формат времени
    showHours: true,
    
    // Настройки шрифта
    fontSettings: {
        family: "'Inter', sans-serif",
        weight: "800",
        style: "normal"
    },
    
    // Настройки видео
    videoSettings: {
        autoplay: true,
        muted: true,
        loop: true,
        controls: false,
        volume: 0
    }
};

// Список поддерживаемых видео
window.videoLibrary = [
    {
        name: "Новогоднее видео",
        path: "background.mp4",
        type: "mp4",
        resolution: "7360×1620",
        size: "~50MB"
    },
    {
        name: "Старое видео",
        path: "old.mp4",
        type: "mp4",
        resolution: "7360×1620",
        size: "~45MB"
    },
    {
        name: "Фейерверки",
        path: "videos/fireworks.mp4",
        type: "mp4",
        resolution: "7360×1620",
        size: "~60MB"
    },
    {
        name: "Снегопад",
        path: "videos/snowfall.mp4",
        type: "mp4",
        resolution: "7360×1620",
        size: "~40MB"
    },
    {
        name: "Северное сияние",
        path: "videos/aurora.mp4",
        type: "mp4",
        resolution: "7360×1620",
        size: "~55MB"
    }
];

// Загружаем сохраненную конфигурацию при запуске
(function() {
    const savedConfig = localStorage.getItem('timerConfig');
    if (savedConfig) {
        try {
            window.timerConfig = JSON.parse(savedConfig);
            
            // Убедимся, что все обязательные поля есть
            window.timerConfig = {
                ...window.defaultConfig,
                ...window.timerConfig
            };
            
        } catch (e) {
            console.error('Ошибка загрузки конфигурации:', e);
            window.timerConfig = { ...window.defaultConfig };
        }
    } else {
        window.timerConfig = { ...window.defaultConfig };
    }
})();
