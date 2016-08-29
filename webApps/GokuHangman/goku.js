
$(document).ready(function() {
  //array of words
  var words = ["coding","house","programming","fun","amazing","you","awesome","creative","believe","core","cast","mini","important","shy","outgoing","clean","lazy","picture","korea","gym","gamer","chill","pizza","pokemon","go","funny","cool","sleep","rest","detrimental","sure","shore","crazy","sophisticated","small","big","eager","boisterous","convivial","witty","boring","secured","relax","soften","unwind","recline","harmful","adverse","destructive","diminutive","immense","fragmentary","confined","inadequate","meager","negligible","restricted","limited","spare","thin","toy","register","computer","process","formulate","list","syntax","edit","draft","drag","dry","wet","design","web","book","learn","feed","schedule","forget","disperse","scatter","brainwash","school","church","park","fireworks","war","peace","love","respect","unity","coffee","shop","modify","sharpen","load","train","box","instill","implant","ground","drill","bed","pillow","dragon","ball","anime","exercise","fight"];
  // This function will reset my variables when a button is pressed or when the page is refreshed. It also chooses a random word and adds it to the page in a hidden state.
  function guessLetters () {
    
    var guessArray = [];
    var guess = " ";
    //count variable will be used add each piece of the goku images
    count = 1;
    //lives variable will be used to let user know how many chances they have left
    lives = 8;
    $(".livesCount").text("Lives left: " + lives);
    //created a global variable to choose a random word from the wordsArray
    guess = words[Math.floor(Math.random() * words.length)].toUpperCase().split('');
    // Loop adds the word into the guessArray inside an h2 element within a div
    for (var i = 0; i < guess.length; i++) {
      guessArray.push($("<div><h2 value=" + guess[i] + ">"+ guess[i] +"</h2></div>"));
    } //end of for loop

    //deletes all of the children inside the wordContainer. This keeps the word container from repeating words
    $(".wordContainer").empty();
    //this adds the word to the wordContainer
    $(".wordContainer").append(guessArray);
    //all of the letters which are h2 elements are hidden
    $("h2").hide();
    //goku's torso would pop in the left out of place, so I did this fix. It floats left once .goku3 is visible
    $(".goku2").css({"float":"none"});
    //all of the pieces of goku will be hidden
    $(".goku").hide();
    //changes all of the keyboard keys back to a white background and black text
    $("h1").css({"background-color": "white", "color": "black"});
    //lettersLeft variable is necessary to know how many chars need to be guessed. Once it reaches 0, it prompts user they have won the game
    lettersLeft = guess.length; 
    //chooses a random letter from the current word as a hint to show the user
    hint = guess[Math.floor(Math.random() * guess.length)];
    $(".hint").text("Hint: " + hint);
} //end of guessLetters function

  //runs the guessLetters function when the page is first loaded
  guessLetters();

  //resets everything just as if the page was loaded when the button is clicked
  $(".wordButton").click(guessLetters);

  //function to create the keyboard and add it to the document
	function keys(code1, code2) {
    var charArray = [];

  	for (var i = code1; i < code2; i++) { 
        var chars = String.fromCharCode(i);
        //add h1 element with classname of character and text of character in uppercase to the charArray
    		charArray.push($("<h1>").addClass(chars).text(chars.toUpperCase()));
    } //end of for loop

    //adds charArray to the body
    $(".letterContainer").append(charArray);    
  } // end of keys function

  //65 to 90 is A-Z
 	keys(65, 91);

  function keyRecognition (x) {
    if ($(window).width() < 800) {
      x = $(this).attr("class");
      var $currKey = $("." + x);
      var myKey = x;
   } else {
      var $currKey = $("." + x.key.toUpperCase());
      var myKey = x.key.toUpperCase();

   }
    
      
      console.log($currKey);
      console.log(myKey);
      //checks for the current keys background-color. If it's black it will alert the user that it has been pressed.
      if ($currKey.css("background-color") === "rgb(0, 0, 0)") {
        alert("You guessed this letter already!");
        //if the background color is not black, it will check if the background is white.
       } else if ($currKey.css("background-color") === "rgb(255, 255, 255)") {
          // if the key is pressed and  background is not blk, change to blk
          $currKey.css({"color": "white", "background": "black"}); 
          //for each h2 element which is each individual letter of the chosen word, it will run a function
          $("h2").each(function () {
            //The function it will run will test if the current key pressed matches the h2 elements text
            if ($(this).text() === myKey) {
              //if the current key matches then the background color and text color will change
              $currKey.css({"background-color":"rgb(150, 150, 250)", "color": "white"});
              //each of the h2 elements that matched will also show
              $(this).show();
              //lastly the lettersLeft variable will subtract by 1 each time the h2 element finds a match
              lettersLeft --;
            } //end of if statement that tests for matches

          }); // end of h2 each function

        } //end of else if for background color white 

      if (lettersLeft === 0) {
        alert("CONGRATS! YOU WIN!!");
        guessLetters();
        //if the current keys background is NOT rgb(150,150,250) it will:
      } else if ($currKey.css("background-color") !== "rgb(150, 150, 250)") {
        //goku + count which starts at 1 will show. (These are the goku parts: head,arms,legs,etc.)
          $(".goku" + count).show();
        //adds to count variable by 1 so the next time it shows gokus next piece
          count++;
          //subtracts 1 from lives variable
          lives--;

          $(".livesCount").text("Lives left: " + lives);
          //Once goku3 is visible, goku2 which is the torso will float left to keep goku in place
          if ($(".goku3").is(":visible")) {
            $(".goku2").css({"float":"left"});
          }//end of if statement for goku3 is visible

          // Once count variable is 9, all of the h2 elements will show. Since the user lost, I want them to know the word.
          if (count === 9) {
            $("h2").show();
            alert("Nooo! You lost! Give it another try! ");
            guessLetters();
          } //end of if statement for count ===9

    } //end of else if for background !== to rgb(150,150,250)

  } //end of keyRecognition function

  function mobileResize() {
    
    $(".wordButton").hide();
    $("h1").css({"padding":"7px", "border-radius":"7px", "margin":".2em", "font-size":"2.5vh"});
    $(".letterContainer").css({"width":"97%","bottom":"3%", "height":"auto"});
    $(".wordContainer").css({"bottom":"27vh"});
    $(".hangmanContainer").css({"height":"50%"});
    $(".bottomHalf").css({"height":"50%"});
  }
 	
  if ($(window).width() < 800) {
    $("h1").click(keyRecognition);
    $(".hangmanContainer").mousedown(function () {
      $(".letterContainer").hide();
      $(".wordButton").show();
      $("h1").removeAttr("style");
      $(".letterContainer").removeAttr("style");
      $(".wordContainer").removeAttr("style");
      $(".bottomHalf").removeAttr("style");
      $(".hangmanContainer").removeAttr("style");

    });
    $(".wordContainer").mousedown(function() {
      $(".letterContainer").show();
      mobileResize();
    });
        
  } else if ($(window).width() >= 800){
    $(document).keypress(keyRecognition);
  }
  
});//end of document ready function





