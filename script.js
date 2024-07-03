function likeFeature() {
    let cardImg = document.querySelector("#card");
    let like = document.querySelector("i");

    cardImg.addEventListener("dblclick", function () {
        like.style.transform = 'scale(1)'
        like.style.opacity = 0.8;

        setTimeout(function () {
            like.style.opacity = 0;
        }, 1000)

        setTimeout(function () {
            like.style.transform = 'scale(0)'
        }, 2000)
    })
}
likeFeature();

function customCursor() {
    let body = document.querySelector("body");
    let cursor = document.querySelector(".cursor");

    body.addEventListener("mousemove", function (dets) {
        cursor.style.left = dets.x + "px"
        cursor.style.top = dets.y + "px"
    })
}
customCursor();