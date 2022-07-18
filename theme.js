function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
    console.log('ping')
};

document.querySelector('.theme-toggle').addEventListener('click', setTheme)