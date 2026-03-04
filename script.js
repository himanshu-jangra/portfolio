document.addEventListener('DOMContentLoaded', () => {
    
    // Select the Clickable Text Area and Menu
    const emailTrigger = document.getElementById('emailTrigger');
    const menuBtn = document.querySelector('.menu-btn');

    // Email functionality
    if(emailTrigger) {
        emailTrigger.addEventListener('click', () => {
            const email = "kofi.kingstone.912@gmail.com"; 
            const subject = "Project Inquiry";
            const body = "Hi, I'm interested in working with you.";
            
            // Construct Mailto Link
            window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    }

    // Menu Button Interaction (Simple animation trigger)
    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            console.log("Menu clicked");
            // Simple visual feedback
            menuBtn.style.transform = "scale(0.9)";
            setTimeout(() => menuBtn.style.transform = "scale(1)", 150);
        });
    }
});