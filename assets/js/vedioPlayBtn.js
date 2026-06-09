const videoPlayBtn = document.getElementById('video-play-btn');
let playbtnflag = false;

videoPlayBtn.addEventListener('click', () => {
    const videoOverlay = document.getElementById('video-overlay');

    videoOverlay.style.display = playbtnflag ? 'none' : 'block';
    playbtnflag = playbtnflag ? false : true;
});

