// Конфигурация таймера с видео-фоном
window.timerConfig = {
    // Позиция таймера
    position: {
        left: "80%",
        top: "50%"
    },
    
    // Размер и цвет
    fontSize: 220,
    color: "#FFFFFF",
    labelColor: "#FFFFFF",
    
    // Прозрачность затемняющего слоя (0 = прозрачно, 1 = полностью черный)
    overlayOpacity: 0,
    
    // Настройки видео (если нужно управлять из JS)
    videoSettings: {
        autoplay: true,
        muted: true,
        loop: true,
        volume: 0.5
    }
};

// Пресеты для разных сценариев
window.videoPresets = {
    // Новогодний стиль
    newYearGold: {
        position: { left: "50%", top: "70%" },
        fontSize: 250,
        color: "#FFD700",
        labelColor: "#FFA500",
        overlayOpacity: 0.4
    },
    
    // Ледяной стиль
    iceBlue: {
        position: { left: "60%", top: "60%" },
        fontSize: 200,
        color: "#00FFFF",
        labelColor: "#87CEEB",
        overlayOpacity: 0.2
    },
    
    // Красный праздничный
    festiveRed: {
        position: { left: "40%", top: "80%" },
        fontSize: 180,
        color: "#FF0000",
        labelColor: "#FF6666",
        overlayOpacity: 0.25
    }
};

// Функция применения пресета
window.applyPreset = function(presetName) {
    if (window.videoPresets[presetName]) {
        window.timerConfig = { ...window.timerConfig, ...window.videoPresets[presetName] };
        applyConfig();
        return true;
    }
    return false;
};
