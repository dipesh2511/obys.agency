const timeline = gsap.timeline();


timeline.from('#page-loader h1', {
    duration: 2,
    y: 200,
    opacity: 0,
    ease: 'power4.out',
    stagger: 0.3
});

function animateLoader() {
    const loaderCounter = document.getElementById('loader-counter');
    const loaderNow = document.getElementById('loader-now');
    loaderCounter.style.color = 'white';
    loaderNow.style.color = 'white';

    let count = 0;
    let flag = true;
    
    const loaderNowInterval = setInterval(() => {
        if (flag) {
            loaderNow.style.fontFamily = 'Silk Serif Light Italic, Arial, sans-serif';
            flag = false;
        } else {
            loaderNow.style.fontFamily = 'Plain Light, Arial, sans-serif';
            flag = true;
        }
    }, 1000);

    const counterInterval = setInterval(() => {
        count++;
        loaderCounter.textContent = `${count} - 100`;

        if (count >= 100) {
            clearInterval(counterInterval);
            clearInterval(loaderNowInterval);
             // Optionally, you can hide the loader after completion
            setTimeout(() => {
                const pageLoader = document.getElementById('page-loader');
                pageLoader.style.display = 'none';
                const mainContent = document.getElementById('main');
                mainContent.style.display = 'block';
            }, 500); // Adjust the delay as needed
        }
    }, 50);
}


timeline.eventCallback('onComplete', animateLoader);