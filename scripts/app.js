// This removes everything in the beginning, and will eventually add all the new elements
const removeNamingBox = function removeNamingBox(){
    $(".pre-game").remove();
    console.log("Name box removed");
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
        console.log("Your monster has perished");
        return;
     }
 }

 const healthTimer = setInterval(healthDecrease, 10000);



// Adds a heart unless hearts are 5 or 0
const addHeart = function addHeart(){
    if(hearts != 0 && hearts < 5){
    hearts ++;
    $(".heart-section").append('<i class="fas fa-heart"></i>');
    console.log(hearts);
    }
}
// Adds a heart, unless the hearts are at 0 or 5
$(".nuke-button").on("click", addHeart);


/**
 * As long as hearts > 0, levels up monster. Need to add transform functionality here
 */
let level = 0;

 function levelIncrease(thing){
   if(level = 2 && hearts >0){
    $(".monster-img").fadeOut(2000);
    $(".monster-img").attr(:src",)

   }
   
   else if(hearts > 0){
   level ++;
   $(".monster-level").text(`Level: ${level}`);
    }
   return;   
 }

 const levelTimer = setInterval(levelIncrease, 7000);
 levelIncrease(levelTimer);


// -------------------------------------------------------------------------------------

 let sleep = 5;

 function sleepDecrease(thing){
     if(sleep <= 5 && sleep > 1){

        sleep --;
        $(".sleeping").eq(0).remove();
        console.log(sleep);
        console.log("-1 sleep");
     
    } else if(sleep === 1){
        $(".sleeping").eq(0).remove();
        sleep --;
        console.log(sleep);
        console.log("Your monster has fainted from exhaustion");
        return;
     }
 }

const sleepTimer = setInterval(sleepDecrease, 5000);



let light = true;

const addSleep = function addSleep(){
    if(light === false) {
    $(".screen").css("background-color", "#47476b");

        if(sleep != 0 && sleep < 5){
        sleep ++;
        $(".sleep-section").append('<div class="sleeping">zzZ</div>');
        console.log(sleep);
        }
    }

        else {
        $(".screen").css("background-color", "#edddd4");
        }
}

const lightsOffTimer = setInterval(addSleep, 2000);

// Toggles light
$(".sleep-button").on("click", function(){
    light = !light;
});


//-----------------------------------------------------------------
/**
 * Social Functions
 */

 let social = 5;

 function socialDecrease(thing){
     if(social <= 5 && social > 1 && hearts > 0){

        social --;
        $(".fa-user-friends").eq(0).remove();
        console.log(social);
        console.log("-1 social");
     
    } else if(social === 1 && hearts > 0){
        $(".fa-user-friends").eq(0).remove();
        social --;
        console.log(social);
        console.log("Your monster has perished of loneliness");
        return;
     }
 }

 const socialTimer = setInterval(socialDecrease, 5000);



// Adds a sleep unless sleep is at 5 or 0
const addSocial = function addSocial(){
    if(social != 0 && social < 5){h
    social ++;
    $(".social-section").append('<i class="fas fa-user-friends"></i>');
    console.log(social);
    }
}
// Adds sleep, unless sleep is at 0 or 5
$(".social-button").on("click", addSocial);



// Stage 1: 


// Player will click a button on the screen and entering name, and the game will begin. 


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


