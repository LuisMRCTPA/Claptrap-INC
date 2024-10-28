document.addEventListener('DOMContentLoaded', function () {
    const modeSelector = document.getElementById('mode-selector');
    const toggleModeBtn = document.getElementById('toggle-mode-btn');
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Aplicar el tema guardado en localStorage
    document.body.classList.add(`${currentTheme}-mode`);
    modeSelector.value = currentTheme; // Establece el valor en el select

    // Evento para aplicar el modo seleccionado
    toggleModeBtn.addEventListener('click', function () {
        const selectedMode = modeSelector.value;

        // Actualizar clase en el body
        document.body.classList.remove('light-mode', 'dark-mode', 'colorblind-mode');
        document.body.classList.add(`${selectedMode}-mode`);

        // Guardar la preferencia del usuario en localStorage
        localStorage.setItem('theme', selectedMode);
    });
});