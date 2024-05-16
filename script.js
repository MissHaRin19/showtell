document.addEventListener("DOMContentLoaded", function() {
    let counter = 1;
    const counterElement = document.getElementById('counter');
    const loadingPage = document.getElementById('loading-page');
    
    const interval = setInterval(() => {
        counterElement.textContent = counter;
        if (counter >= 100) {
            clearInterval(interval);
            loadingPage.style.transform = "translateY(100%)";
            setTimeout(() => {
                loadingPage.style.display = "none";
            }, 1000); // Match the transition time in CSS
        }
        counter++;
    }, 30); // Adjust the speed of the counter here
});
