const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');

    // State
    const theme = localStorage.getItem('theme');

    // On mount
    theme && document.body.classList.add('light-mode');

    // Handlers
    const handleThemeToggle = () => {
            document.body.classList.toggle('light-mode');
            if (document.body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light-mode');
            } else {
                localStorage.removeItem('theme');
            }
    };

    // Events
    themeToggleBtns.forEach((btn) => btn.addEventListener('click', handleThemeToggle));
}

export default darkMode;

