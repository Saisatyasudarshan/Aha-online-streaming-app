// JavaScript code for handling playlist item clicks and changing video source
document.addEventListener('DOMContentLoaded', function () {
    const videoPlayer = document.getElementById('streamVideo');
    const playlistItems = document.querySelectorAll('#playlist a');

    playlistItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const videoSource = this.getAttribute('href');
            videoPlayer.src = videoSource;
            videoPlayer.load();
        });
    });
});
