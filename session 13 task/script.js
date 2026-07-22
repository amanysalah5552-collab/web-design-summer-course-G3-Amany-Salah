let firstClick = true;
let firstImage = true;

function changeImg() {

    let img = document.getElementById("myImg");

    img.style.display = "block";

    if (firstClick) {
        img.src = "images/download (1).jfif";
        firstClick = false;
        return;
    }

    if (firstImage) {
        img.src = "images/download.jfif";
    } else {
        img.src = "images/download (1).jfif";
    }

    firstImage = !firstImage;
}