const videoOverlay = document.querySelector(".video-overlay"),
    watchBtn = document.querySelector(".watch_video-btn"),
    closeBtn = document.querySelector(".video-close"),
    body = document.querySelector("body"),
    videoBlock = document.querySelector(".video-overlay .video");

let overlayShow = function () {
    videoBlock.insertAdjacentHTML(
        "afterbegin",
        `<iframe width="925" height="550"
            src="https://www.youtube.com/embed/EDIFIBFRoXA?rel=0&modestbranding=1&autoplay=1"
            frameborder="0" allowfullscreen>
        </iframe>`
    );

    videoOverlay.classList.remove("hidden");
    body.style.overflowY = "hidden";
};

let overlayHide = function () {
    videoOverlay.classList.add("hidden");
    body.style.overflowY = "scroll";

    let videoIframe = videoBlock.querySelector("iframe");

    videoBlock.removeChild(videoIframe);
};

watchBtn.addEventListener("click", overlayShow);

closeBtn.addEventListener("click", overlayHide);

videoOverlay.addEventListener("click", (e) => {
    e.target == videoOverlay ? overlayHide() : null;
});

