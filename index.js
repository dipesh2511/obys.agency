const timeline = gsap.timeline();

const loaderCount = document.querySelector('#loader .line h5');
const nowHeading = document.querySelector('.line h2');

const mainPageAnimation = () =>{
    timeline.from("#page1 #nav",{
        opacity:0,
        duration:0.5,
        delay:0.5
    })
};


const startCounting = () => {
    let count = 0;

    // loaderCounterDiv.style.opacity = 1;
    nowHeading.style.opacity = 1;
    nowHeading.style.animation = 'loader-now 2s linear infinite';

    const interval = setInterval(() => {
        if (count >= 100) {
            clearInterval(interval)
        }
        loaderCount.innerText = count;
        count++;
    }, 40)
}

const loaderInitiated = () => {

    // loading text of hero
    timeline.from('#loader .line h1', {
        y: 200,
        duration: 0.5,
        stagger: 0.5,
        delay: 0.5
    });

    timeline.to('#line1-part1 , .line h2 ', {
        opacity: 1,
        duration: 0.3,
        onComplete: startCounting
    });

    timeline.to('#loader', {
        y: '-100%',
        duration: 0.5,
        delay: 5,
        display: 'none'
    });

    mainPageAnimation();
}

loaderInitiated();