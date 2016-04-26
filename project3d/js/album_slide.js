
var imageIndex = 0;
changeImage();

function changeImage () {
	var i;
	var x = document.getElementsByClassName("myPhoto");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	imageIndex++;
	if (imageIndex > x.length) {imageIndex = 1}
	x[imageIndex-1].style.display = "block";
	setTimeout(changeImage, 3000);
}
