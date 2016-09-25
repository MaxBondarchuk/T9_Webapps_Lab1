// region Image zoom
// todo Add check for display height
function zoomImage(image) {
    var modal = document.getElementById("zoomImageDiv");
    var modalImg = document.getElementById("zoomedImage");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;
}

function closeZoomedImage() {
    var modal = document.getElementById("zoomImageDiv");
    modal.style.display = "none";
}
// endregion

// region Main page
function buy(id) {
    $.post("buy", {jewel: id}, function (result) {
        location.href = 'home';
        // alert(result);
    });
}
// endregion Main page