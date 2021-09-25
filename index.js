var isBold = true;
function controlBold() {
	isBold = !isBold;
	if (isBold) {
		document.getElementById("intro-to-web-dev").style.fontWeight = "bold"
	} else {
		document.getElementById("intro-to-web-dev").style.fontWeight = "normal"
	}
}