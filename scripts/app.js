// This removes everything in the beginning, and will eventually add all the new elements
const removeNamingBox = function removeNamingBox(){
    $(".pre-game").remove();
    console.log("testing");
};

// This prints the inputted name into a place for the monsters name
const $logName = function $logName() {
    $(".monster-name").text($(".grab-monster-name").val());
}

// After submit name,enacts timer(s), moves hidden gameboy over, 
const beginGame = function beginGame(){
    $logName();
    removeNamingBox();
}

// Clicking the first button makes everything above happen
 $(".submitButton").on("click", beginGame);

/**
 * This sets up health bar, after set time reduces health, eventually to 0, then pet dies. I need to tie in other functions so they don't keep running. 
 */
let hearts = 5;

 function healthDecrease(thing){
     if(hearts <= 5 && hearts > 1){

        hearts --;
        $(".fa-heart").eq(0).remove();
        console.log(hearts);
        console.log("-1 heart");
     
    } else if(hearts == 1){
        $(".fa-heart").eq(0).remove();
        hearts --;
        console.log(hearts);
        console.log("You're dead mate");
        return;
     }
    
 }

 const healthTimer = setInterval(healthDecrease, 15000);
 healthDecrease(healthTimer);


/**
 * As long as hearts > 0, levels up monster. Need to add transform functionality here
 */
let level = 0;
 function levelIncrease(thing){
   if(hearts > 0){
   level ++;
   $(".monster-level").text(`Level: ${level}`);
    }
   return;   
 }

 const levelTimer = setInterval(levelIncrease, 7000);
 levelIncrease(levelTimer);




// Stage 1: 


// Player will click a button on the screen and entering name, and the game will begin. 
//     Button in HTML with a textbox
//     Event listener on click, returns a value/creates div with class as name, and text as name
    
// An egg will appear on the screen, one life bar, one button for radiation.
// Changes opacity of egg to 100% on click
// Creates life bar, or changes opacity and begins countdown
// and life bar
// Creates age class, value 0

// A timer will start for age, and one will start for health bar.
// Hmmmm

// Health bar will decrease over time (bars sliding left? JQuery effects)
// If health bar = 0, end game and say "Name has died"
//     variable that keeps count 


// Clicking nuke button will increase health value
//     onclick (only available after game start)

// if X time passes and age = X, and monster health != 0, enter stage 2



// Stage 2: 

// Monster transforms. Changes image.
//     Jquery DOM manipulation on DIV with the egg photo 
    

// New, smaller bar appears showing health at full.

//     Append 3 sections into topBar section
//     Have them be styled by class, defined in CSS

//         New bar appears showing boredom.
//         New bar appears showing Sleepiness

// 3 new buttons for nuke, playing, lights out (https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/)
// -Can reuse nuke button, squish into same section as playing and lights out
//     Lights out button reverses light 


// New timer for age (necessary?), keeping old values


// ? Can I utilize one timer for all?
// Timer for health
// timer for Sleepiness
// timer for boredom       

// console log "Died of hunger, or sleeping, or boredom, if any bars <=0 "



// Stage 3: 

// if health sleepiness boredom != 0, & age = X
//     attached to age timer method/function

// TRANSFORM to Mechagodzilla


// Timer for health
// timer for Sleepiness
// timer for boredom   

// age timer continues






// Create a repo for your tomagotchi pet
// make a commit after you finish each one of the following
// Instatiate your Tomagotchi
// Display a character of your choice on the screen to represent your pet
// Display the following metrics for your pet:
// Hunger (1-10 scale)
// Sleepiness (1-10 scale)
// Boredom (1-10 scale)
// Age
// Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
// Add the ability to name your pet.
// Style the page.
// Increase your pet's age every x minutes
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// You pet should die if Hunger, Boredom, or Sleepiness hits 1
// Morph your pet at certain ages: Egg, Godzilla, Mechagodzilla
// Animate your pet across the screen while it's alive.