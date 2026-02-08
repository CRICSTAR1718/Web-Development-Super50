const params = new URLSearchParams(window.location.search);
const videoId = params.get("videoId");

const iframe = document.getElementById("video-frame");

if (videoId) {
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
} else {
    document.body.innerHTML = "<h2 style='color:white'>Video not found</h2>";
}
