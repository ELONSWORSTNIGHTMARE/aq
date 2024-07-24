document.addEventListener('DOMContentLoaded', () => {
    const createAccountBtn = document.querySelector('.create-account-btn');
    const backToLoginBtn = document.querySelector('.back-to-login-btn');
    const loginSection = document.querySelector('.login-section');
    const signupSection = document.querySelector('.signup-section');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    createAccountBtn.addEventListener('click', () => {
        loginSection.style.display = 'none';
        signupSection.style.display = 'flex';
    });

    backToLoginBtn.addEventListener('click', () => {
        signupSection.style.display = 'none';
        loginSection.style.display = 'flex';
    });

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            themeToggleBtn.textContent = 'Toggle Light Mode';
        } else {
            themeToggleBtn.textContent = 'Toggle Dark Mode';
        }
    });

    
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        
        console.log(`Logging in with username: ${username} and password: ${password}`);
        
    });

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = signupForm.querySelector('input[type="text"]').value;
        const email = signupForm.querySelector('input[type="email"]').value;
        const password = signupForm.querySelector('input[type="password"]').value;
       
        console.log(`Signing up with username: ${username}, email: ${email}, and password: ${password}`);
        
    });
    
    // Set initial theme based on localStorage or user preferences
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.classList.add(currentTheme);

    if (currentTheme === 'dark') {
        themeToggleBtn.textContent = 'Toggle Light Mode';
    } else {
        themeToggleBtn.textContent = 'Toggle Dark Mode';
    }
});
