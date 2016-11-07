function bgimgChange(bgimg) {
	document.getElementsByTagName("section")[0].style.backgroundImage = "url('"+bgimg.src+"')";
}
function bgimgRecover(){
	document.getElementsByTagName("section")[0].style.backgroundImage = "none";
}
