/*function toggleVideo(){
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    video.pause();
    trailer.classList.toggle('active');
}*/

function toggleVideo(trailerSelector, videoUrl) {
    const trailer = document.querySelector(trailerSelector);
    const video = trailer.querySelector('video');
    
    if (video) {
        if (video.paused) {
            video.src = videoUrl;
            video.play();
            video.reset();
        }
        trailer.classList.toggle('active');
    }
}


function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const Contents = document.querySelectorAll('.content');
    banner.style.background = `url("./images/movies/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    Contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)){
            content.classList.add('active');
        }
    });
}





document.addEventListener('DOMContentLoaded', function() {
    const toggleMenu = document.querySelector('.toggle-menu');
    const nav = document.querySelector('.nav');

    toggleMenu.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});