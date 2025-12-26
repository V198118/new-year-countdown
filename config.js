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
    
    // Настройки шрифта
    fontSettings: {
        family: "'Inter', sans-serif",
        weight: "800", // Extra Bold
        style: "normal"
    },
    
    // Настройки видео
    videoSettings: {
        autoplay: true,
        muted: true,
        loop: true,
        controls: false
    }
};

// Пресеты для разных шрифтов (если захотите добавить другие варианты)
window.fontPresets = {
    interExtraBold: {
        fontSettings: {
            family: "'Inter', sans-serif",
            weight: "800",
            style: "normal"
        }
    },
    interBlack: {
        fontSettings: {
            family: "'Inter', sans-serif",
            weight: "900",
            style: "normal"
        }
    },
    robotoBold: {
        fontSettings: {
            family: "'Roboto', sans-serif",
            weight: "700",
            style: "normal"
        }
    }
};

// Загружаем сохраненную конфигурацию при запуске
(function() {
    const savedConfig = localStorage.getItem('timerConfig');
    if (savedConfig) {
        try {
            window.timerConfig = JSON.parse(savedConfig);
            // Убедимся, что настройки шрифта есть
            if (!window.timerConfig.fontSettings) {
                window.timerConfig.fontSettings = { ...window.defaultConfig.fontSettings };
            }
        } catch (e) {
            console.error('Ошибка загрузки конфигурации:', e);
            window.timerConfig = { ...window.defaultConfig };
        }
    } else {
        window.timerConfig = { ...window.defaultConfig };
    }
})();
