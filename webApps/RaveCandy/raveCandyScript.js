$(document).ready(function(){
	//prevent right click pop up window 
    $(document).on("contextmenu", function(e){
        if(e.target.nodeName != "INPUT" && e.target.nodeName != "TEXTAREA")
             e.preventDefault();
     });
 });
 //Lightbox for the desktop version
var  $overLay = $('<a href="rave_candy_gallery.html"><div id="overlay"><div class = "phoneContainer"><img class="phoneImage" src="assets/m8Phone.png"></div></div></a>');
 var $phone = $(' <div class = "phoneContainer"><img class="phoneImage" src="assets/m8Phone.png"></div>' );
 var $image = $("<img class = 'oImage'>");

 //Need Images for left and right arrow!
 var $rightArrow = $("<img src='' class = 'rightArrow'>");
 var $leftArrow = $("<img src='' class = 'leftArrow'>");
 var $next =$("img.btnImage");
 
 $overLay.append($image);
 
 $(".btnImage" ).click(function (event) {
 	$("body").append($overLay);
 	//$("body").append($rightArrow, $leftArrow);
 	$(".oImage").show();
 	$(".gallery").hide();
 	event.preventDefault();
 	var imageLocation = $(this).attr("src");
 	$image.attr("src", imageLocation);
 	$overLay.show(); 
 	
 	if (window.screen.availWidth > 900) {
 		$(".gallery").show();
 		// I'll add this when I figure out the arrow functionalities
 		//$rightArrow.show();
 		//$leftArrow.show();
 	}
 });
 	
 $($overLay).click(function(noScroll) {
 	$(".gallery").show();
 	$overLay.hide();
 	//$rightArrow.hide();
 	//$leftArrow.hide();
 	noScroll.preventDefault();	
 });
 
 
 //Hover causes image to change from png to gif image for preview
$('img.btnImage').on("mouseenter", function() {
    var $img = $(this);
    var src = $img.prop('src');
    if (src.match(/\.png$/)) {
        $img.prop('src', src.replace(/\.png$/, '.gif'));
    }
});

$("img.btnImage").on("mouseleave",function() {
	var $img = $(this);
	var src= $img.prop('src');
	if (src.match(/\.gif$/)) {
		$img.prop('src', src.replace(/\.gif$/, '.png'));
	}
});
//switch between two images (for music and shake buttons) 
function change()	{
   var memory = this.src;
   this.src = this.getAttribute('data-src');
   this.dataset.src = memory;         
}
//Sound button function
var pacman = new Audio("assets/pacman.mp3");
var sound = false;

$("#musicBtn").click(function() {
	if (sound===false) {
		pacman.play();
		sound=true;
	} else {
		pacman.pause();
		sound=false;
	}
});

document.getElementById('musicBtn').onclick =change;
document.getElementById('shakeBtn').onclick =change;



