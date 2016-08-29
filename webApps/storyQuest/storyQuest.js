var nameText;
var storyContent;
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var storyContent = document.getElementById("storyText2");
var $option1Alt = $("#option1").prop("alt");
var $option2Alt = $("#option2").prop("alt");

function firstLtrCap(names) {
    return names.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}

function hideMenu()	{
	if ($("#userName").val() == "" || $("#bestFriend").val() == "" || $("#closeFriend").val() == "") {
		alert("Oh Come on! You forgot to fill out ALL of the input fields! \n Try Again!");
	} else {
		$("#page1").hide(); //hide
		document.getElementById('page2').style.display= 'block'; //show
		readInput();
		}
}

function readInput () {	
	var userName = document.getElementById('userName').value.toLowerCase();
	var	bestFriend = document.getElementById('bestFriend').value.toLowerCase();
	var	closeFriend = document.getElementById('closeFriend').value.toLowerCase();
	userName = firstLtrCap(userName);
	bestFriend = firstLtrCap(bestFriend);
	closeFriend = firstLtrCap(closeFriend);
	var slide1 = "Don't worry, I'll keep your secret " + userName + ". There's no way " + bestFriend + " or "+ closeFriend + " will say a word of the event either. Oh? Youre wondering what secret I'm taking about?";
	var slide1A = "No? Dammit! Why the hell not?!? Aren't you even a little curious?";
	var slide1B = "Seriously!?! I guess you will probably spend the rest of your life in prison then....I caught your attention now huh?";
	var slide1C = " Okay, you clearly don't care about what happened, so I'm going to tell you anyway. Should I start with the fight or sex?"; 
	var slide1D = " Woah you sure are a naughty one aren't you? Get your head out of the gutter.... you dirty minded person! Anyways! Let's get started!";
	var slide1E = "You're an aggresive one aren't ya? Why would you want to see people get hurt!? Fighting it wrong!....k I admit it, it can be fun. Anyways! lets get started!";
	var slide2 = "I'm glad you decided to hear what I have to say. You apparently forgot! It all started on sunday night last week.... wait I forgot the story! You gotta help me out here! Who did you meet up with that Sunday night first?";
	var slide2A = "Oh yea! " + bestFriend + " was scared to go, so you had to drag that bastard out! You guys then headed to find what in front of the haunted house?";
	var slide2B = "oh right! "+ closeFriend + " was a failure trying to be a ninja by breaking into your house. As if you wouldn't notice the idiot's feet and body behind your room's curtain. You guys then left your room and headed to the haunted house to find what in front?";
	var slide3A = closeFriend + " was waiting in front of the haunted house. You guys decided to go in, but heard a scream coming from the hallway as soon as you all stepped inside.";
	var slide3B = "You ran out of the haunted house! You left " + bestFriend + " and " + closeFriend + " behind! The door behind you closed shut.";
	var slide3C ="You went inside to investigate.The screaming got louder as you got closer, so you  ran towards the scream thinking it was " + bestFriend + ". " + bestFriend +  " was in the middle of the air being chocked to death by an invisible force!";
	var slide3D = "You immediately spring into action and use your lightsaber to cut down the invisible force while " + closeFriend + "  swings a broom randomly into the air. " + bestFriend + " then falls to the  floor. You then get surrounded by a dark force. You hear your friends screams coming from a white door that appears before you.";
	var slide4A = "You saw the door open. You were confused because you thought " + bestFriend + " would be there, but was no where in sight. You and " + closeFriend + " look at each other and wonder if you should wait for " + bestFriend + " or search inside the haunted house."
	var slide4B = "You went inside with " + closeFriend + " to find " + bestFriend + ". " + bestFriend + " was inside looking up at the ceiling. You see " + closeFriend + " look up at the ceiling as well. You see nothing up there, but notice a shadow from another room, so you investigate. The door behind you shuts as you enter the room!";
	var slide4C = "You decided to wait outside with " + closeFriend + ". " + closeFriend + " starts to get impatient and goes inside and asks you to wait outside in case " + bestFriend + " shows up. Moments later you hear " + closeFriend + " and " + bestFriend + " scream.";
	var slide5A = "You went back and were surprised the door opened for you. This is the kind of stuff that happens in movies afterall! It's not expected for that door to open so easily! As you go through the door, you notice " + bestFriend + " and " + closeFriend + " were gone. You suddenly heard " + bestFriend + " and " + closeFriend + " scream!";
	var slide5B = "You decided to leave your friends behind. You went home and hoped that they were okay. The next day you wake up to hear the police knocking in your front door. You were arrested for the murder of " + bestFriend + " and " + closeFriend + "! As you get inside the police car, you see " + bestFriend + " smiling through the window of your house.";
	var slide6A = "You ran towards the screams looking for " + bestFriend + " and " + closeFriend + "! You were surprised to see " + bestFriend + " holding a sword trying to kill " + closeFriend + ". You charged at " + bestFriend + " and dropped them to the floor. When you get up you see the sword accidentally went through " + bestFriend +"'s heart. You and " + closeFriend + " then run out of the haunted house to see the police outside waiting to arrest you guys for the murder of " + bestFriend + "! As you guys enter the police car, you see " + bestFriend + " smiling through the window of the haunted house.";
	var slide6B = "You tried to run out, but the door behind you closes. You try to open the door and run back out, but you suddenly start to fall. As you fall to the floor you see your bloody leg was cut off next to you and "+ bestFriend + " holding a bloody sword in their hand while smiling.";
	var slide6C = "You saw " + bestFriend + " on the floor dead. You freaked out and told " + closeFriend + " that you guys need to run. " + closeFriend + " refused to leave " + bestFriend + " behind. You ran home on your own. As soon as you went in your room. " + bestFriend + " was there waiting for you and shot you in the face!";

	//Index			0		1	      2		   3		4		 5		  6		 7		 8         9	   10
	var slides = [slide1 ,slide1A, slide1B, slide1C, slide1D, slide1E, slide2,slide2A, slide2B, slide3A, slide3B,

	// 			   11		12		13		  14	   15		16		  17	  18		19		 20
				 slide3C, slide3D, slide4A, slide4B, slide4C, slide5A, slide5B, slide6A, slide6B, slide6C];	

	storyContent.innerHTML = slides[0];

	 function readInput1 () {
	 if ($option1Alt == "slide1E" ) {
	 	storyContent.innerHTML = slides[5];
	 	$option1Alt = "slide2";
	 	$("#option1").prop("value", "NEXT");
	 	$("#option2").hide();
	 }
	 
	   else if ($option1Alt == "slide2") {
	 	storyContent.innerHTML = slides[6];
	 	$("#option1").prop("value", bestFriend);
	 	$("#option2").prop("value", closeFriend);
	 	$option1Alt = "slide2A";
	 	$option2Alt = "slide2B";
	 	$("#option2").show();
	 } 
	 else if ($option1Alt == "slide2A") {
	 	storyContent.innerHTML = slides[7];
	 	$("#option1").prop("value", closeFriend);
	 	$("#option2").prop("value", "The Door Open");
	 	$option1Alt = "slide3A";
	 	$option2Alt = "slide4A";
	 } 
	 else if ($option1Alt == "slide3A") {
	 	storyContent.innerHTML = slides[9];
	 	$("#option1").prop("value", "Run");
	 	$("#option2").prop("value", "Investigate");
	 	$option1Alt = "slide3B";
	 	$option2Alt = "slide3C";
	 } 
	 else if ($option1Alt == "slide3B") {
	 	storyContent.innerHTML = slides[10];
	 	$("#option1").prop("value", "Go Back");
	 	$("#option2").prop("value", "Leave");
	 	$option1Alt = "slide5A";
	 	$option2Alt = "slide5B";
	 } 

	 else if ($option1Alt == "slide3D") {
	 	storyContent.innerHTML = slides[12];
	 	$("#option1").prop("value", "Head Towards the Screams");
	 	$("#option2").prop("value", "Run Away");
	 	$option1Alt = "slide6A";
	 	$option2Alt = "slide6B";
	 } 

	 else if ($option1Alt == "slide4B") {
	 	storyContent.innerHTML = slides[14];
	 	$("#option1").prop("value", "Go Back");
	 	$("#option2").prop("value", "Run Home");
	 	$option1Alt = "slide5A";
	 	$option2Alt = "slide6B";
	 } 

	 else if ($option1Alt == "slide5A") {
	 	storyContent.innerHTML = slides[16];
	 	$("#option1").prop("value", "Try to Help");
	 	$("#option2").prop("value", "Run Away");
	 	$option1Alt = "slide6A";
	 	$option2Alt = "slide6B";
	 } 
	 else if ($option1Alt == "slide6A") {
	 	storyContent.innerHTML = slides[18];
	 	$("#option1").hide();
	 	$("#option2").hide();	
	 	$(".storyContainer").css("height", "80vh");
	 } 
	  else if ($option1Alt == "slide6C") {
	 	storyContent.innerHTML = slides[20];
	 	$("#option1").hide();
	 	$("#option2").hide();	
	 	$(".storyContainer").css("height", "80vh");
	 } 
}
	
	 function readInput2 () {

	 	
		if ($option2Alt == "slide1A" ) {
	 	storyContent.innerHTML = slides[1];
	 	$option2Alt = "slide1B";
	 } else if ($option2Alt == "slide1B") {
	 	storyContent.innerHTML = slides[2];
	 	$option2Alt = "slide1C";

	 }  else if ($option2Alt == "slide1C" ) {
	 	storyContent.innerHTML = slides[3];
	 	$("#option1").prop("value", "FIGHT");
	 	$("#option2").prop("value", "SEX");
	 	$option1Alt = "slide1E";
	 	$option2Alt = "slide1D";
	}
		else if ($option2Alt == "slide1D" ) {
	 	storyContent.innerHTML = slides[4];
	 	$option2Alt = "slide2";
	 	$("#option1").hide();
	 	$("#option2").prop("value","NEXT");	
	 }   
	 	else if ($option2Alt == "slide2" ) {
	 	storyContent.innerHTML = slides[6];
	 	$option1Alt = "slide2A";
	 	$option2Alt = "slide2B";
	 	$("#option1").prop("value", bestFriend);
	 	$("#option2").prop("value", closeFriend);
	 	$("#option1").show();
	 } 
	 else if ($option2Alt == "slide2B" ) {
	 	storyContent.innerHTML = slides[8];
	 	$option1Alt = "slide6C";
	 	$option2Alt = "slide4A";
	 	$("#option1").prop("value", bestFriend + " Dead");
	 	$("#option2").prop("value", "The Door Open");
	 } 
	 else if ($option2Alt == "slide3C" ) {
	 	storyContent.innerHTML = slides[11];
	 	$option1Alt = "slide3D";
	 	$option2Alt = "slide6C";
	 	$("#option1").prop("value", "Try to Help");
	 	$("#option2").prop("value", "Run");
	 } 
	 else if ($option2Alt == "slide4A" ) {
	 	storyContent.innerHTML = slides[13];
	 	$option1Alt = "slide4B";
	 	$option2Alt = "slide4C";
	 	$("#option1").prop("value", "Find "  + bestFriend + " inside");
	 	$("#option2").prop("value", "Wait Outside");
	 } 


	 else if ($option2Alt == "slide4C" ) {
	 	storyContent.innerHTML = slides[15];
	 	$option1Alt = "slide6A";
	 	$option2Alt = "slide5B";
	 	$("#option1").prop("value", "Help Friends");
	 	$("#option2").prop("value", "Run Home");
	 }  
	 else if ($option2Alt == "slide5B" ) {
	 	storyContent.innerHTML = slides[17];
	 	$("#option1").hide();
	 	$("#option2").hide();
	 	$(".storyContainer").css("height", "80vh");
	 }  
	 else if ($option2Alt == "slide6B") {
	 	storyContent.innerHTML = slides[19];
	 	$("#option1").hide();
	 	$("#option2").hide();
	 	$(".storyContainer").css("height", "80vh");
	 }  
	 else if ($option2Alt == "slide6C"){
	 	storyContent.innerHTML = slides[20];
	 	$(".storyContainer").css("height", "80vh");
	 	$("#option1").hide();
	 	$("#option2").hide();
	}
}
$("#option1").on("click",function() {
	readInput1();
});

$("#option2").on("click",function() {
	readInput2();
});
		

}








/*var mood = document.getElementById('userLevel').value
	if (mood == 5){
	 * 	}*/


/*switch (name) {
		case "charina": nameText = "Charina";
		break;
		default: nameText = name +" used to secretly smoke and get high off of coffee beans until they were caught by . " + friend1 + " and " +  friend2 + ". " + name + " soon realized that coffee beans weren't that great anymore because other people were doing it. " + name + " decided to set out on a journey to try and find the next big thing! " + name + "eventually found that eating whipcream with pizza, chocolate, and cookies was the most amazing thing ever, but unfortunately died after trying it once. "
			
		}		
			document.getElementById("storyText2").innerHTML = "<p>" +'THIS WORKS! haha ' + name +"</p>" + "<p>" + friend1Text + "</p>";
}

function friendFunc() {
	switch(friend1 || friend2) {
		case 'miguel': friend1Text = "Miguel who is an awesome person. " +   names + " wouldn't be where they are now if it wasn't for Mig who is also a GENIUS!";
		break;
		default: friendText = ""
	}
}
*/