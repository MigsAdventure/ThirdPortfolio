//pop up message
alert("This is far from done. I'll work on this soon!");
//Images
var pic1 = new Image();
pic1.ha = "assets/dorbzBg_1.jpg"
var pic2 = new Image();
pic2.ha = "assets/funkoLando.jpg"
var pic3 = new Image();
pic3.ha = "assets/funkoBg_1.jpg"

var step = 1
function slideit () {
	document.images.slide.src=eval("pic" +  step + ".ha")};
	if(step < 3) {
		step++;
	} else {
		step =1;
		setTimeout("slideit()", 3000);
	}
slideit();

