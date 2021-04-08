// This removes everything in the beginning, and will eventually add all the new elements
const removeNamingBox = function removeNamingBox(){
    $(".pre-game").remove();
    console.log("Name box removed");
};

// This prints the inputted name into a place for the monsters name
const $logName = function $logName() {
    $(".monster-name").text($(".grab-monster-name").val());
}



/**
 * This sets up health bar, after set time reduces health, eventually to 0, then pet dies. I need to tie in other functions so they don't keep running. 
 */

// After submit name,enacts timer(s), moves hidden gameboy over, 
const beginGame = function beginGame(){
    $logName();
    removeNamingBox();
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

        $(".death").text("Your monster has perished");
        $(".death").css("display", "block");

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
   if(level === 1 && hearts > 0){
    level ++;

    $(".egg-img").fadeOut(900);
    $(".monster-img").appendTo(".div-monster-img").show('slow');
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
        $(".death").text("Your monster has fainted from exhaustion");
        $(".death").css("display", "block");
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
     if(social <= 5 && social > 1){

        social --;
        $(".fa-user-friends").eq(0).remove();
        console.log(social);
        console.log("-1 social");
     
    } else if(social === 1 && hearts > 0){
        $(".fa-user-friends").eq(0).remove();
        social --;
        console.log(social);
        $(".death").text("Your monster has perished of loneliness");
        $(".death").css("display", "block");
        return;
     }
 }

const socialTimer = setInterval(socialDecrease, 5000);

const addSocial = function addSocial(){
    if(social != 0 && social < 5){
    social ++;
    $(".social-section").append('<i class="fas fa-user-friends"></i>');
    console.log(social);
    }
}

// Adds social icon unless at 5 or 0
$(".social-button").on("click", addSocial);
}

// Clicking the first button makes everything above happen
$(".submitButton").on("click", beginGame);


