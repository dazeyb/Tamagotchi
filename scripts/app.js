// This removes everything in the beginning, and will eventually add all the new elements
const removeNamingBox = function removeNamingBox(){
    $(".pre-game").remove();
    console.log("Name box removed");
};

// This prints the inputted name into a place for the monsters name
const $logName = function $logName() {
    $(".monster-name").text($(".grab-monster-name").val());
}

//Couldn't put this into the death function, timers interrupting action
const blackbkg = function (){
    $(".screen").css("background-color", "#2f2e2e");
};

const death = function death(){
    //$(".screen").css("background-color", "#2f2e2e");
    $(".dead").remove();
    setTimeout(blackbkg, 100);
    setTimeout(blackbkg, 800);
    setTimeout(blackbkg, 1600);
    setTimeout(blackbkg, 2400);
    //$(".div-monster-img").append( and img);
}


// After submits name and runs all timers
const beginGame = function beginGame(){
    $logName();
    removeNamingBox();

let level = 0;
let hearts = 5;
let sleep = 5;
let social = 5;
let light = true;

 function healthDecrease(thing){
    if(social === 0 || sleep === 0){
        clearInterval(healthTimer);
    }

    else if(hearts <= 5 && hearts > 1){
        hearts --;
        $(".fa-heart").eq(0).remove();
     
    } else if(hearts == 1){
        $(".fa-heart").eq(0).remove();
        hearts --;

        $(".death").text("Your monster has perished ");
        $(".death").css("display", "block");
        death();
        clearInterval(healthTimer);
     }
 }

const healthTimer = setInterval(healthDecrease, 5000);



// Adds a heart unless hearts are 5 or 0
const addHeart = function addHeart(){
    if(hearts != 0 && hearts < 5){
    hearts ++;
    $(".heart-section").append('<i class="fas fa-heart"></i>');
    }
}
// Adds a heart, unless the hearts are at 0 or 5
$(".nuke-button").on("click", addHeart);


/** Leveling
 * As long as hearts > 0, levels up monster
 */

 function levelIncrease(thing){
    if(hearts === 0 || social === 0){
        clearInterval(levelTimer);
    }
    
    else if(sleep === 0){
        clearInterval(levelTimer);
    }
    
    else if(level === 5 && hearts > 0){
    level ++;
    $(".monster-level").text(`Level: ${level}`);
    $(".monster-img").appendTo(".div-monster-img").show('fast');
    $(".egg-img").fadeOut(900);
   }
   
   else if(hearts > 0){
   level ++;
   $(".monster-level").text(`Level: ${level}`);
    }
}

 const levelTimer = setInterval(levelIncrease, 4000);

 levelIncrease(levelTimer);


// -------------------------------------------------------------------------------------

/** Sleep functions
 * If not dead, increases exhaustion
 */

 function sleepDecrease(thing){
    if(hearts === 0 || social === 0){
        clearInterval(sleepTimer);
    }

    else if(sleep <= 5 && sleep > 1){

        sleep --;
        $(".sleeping").eq(0).remove();
     
    } else if(sleep === 1){
        $(".sleeping").eq(0).remove();
        sleep --;
        $(".death").text("Your monster has fainted from exhaustion");
        $(".death").css("display", "block");
        death();
        clearInterval(sleepTimer);
     }
}

const sleepTimer = setInterval(sleepDecrease, 7200);

/** Lights Off
 *  If lights are off, heals exhaustion over time
 */

const addSleep = function addSleep(){
    if(light === false) {
    $(".screen").css("background-color", "#47476b");

        if(sleep != 0 && sleep < 5){
        sleep ++;
        $(".sleep-section").append('<div class="sleeping">zzZ</div>');
        }
    }
        else {
        $(".screen").css("background-color", "#edddd4");
        }
}

const lightsOffTimer = setInterval(addSleep, 2500);

// Toggles light
$(".sleep-button").on("click", function(){
    light = !light;
});


//-----------------------------------------------------------------
/** Social Functions
 * If not dead, increases loneliness by decreasing social icons over time
 */

 function socialDecrease(thing){
    if(hearts === 0 || sleep === 0){
        clearInterval(socialTimer);
    }

    else if(social <= 5 && social > 1){

        social --;
        $(".fa-user-friends").eq(0).remove();
     
    } else if(social === 1 && hearts > 0){
        $(".fa-user-friends").eq(0).remove();
        social --;
        $(".death").text("Your monster has perished of loneliness");
        $(".death").css("display", "block");
        death();
        clearInterval(socialTimer);
     }
 }

const socialTimer = setInterval(socialDecrease, 3700);


const addSocial = function addSocial(){
    if(social != 0 && social < 5){
    social ++;
    $(".social-section").append('<i class="fas fa-user-friends"></i>');
    }
}

// Adds social icon unless at 5 or 0
$(".social-button").on("click", addSocial);

}

//------------------------------------------------------------------------------

let bounce = true;

let noBounce = function noBounce(){
    let bounce = !bounce;
    $(".monster-img").removeClass("bounce-2");
}

const $addBounce = function $addBounce (){
    if(bounce = true){
    $(".monster-img").addClass("bounce-2");
    bounce = !bounce;
    }
    else{
    $(".monster-img").removeClass("bounce-2");
    bounce = !bounce;
    }
}

//event listener add pre made function to add class

$(".music-button").on("click", $addBounce);

// Clicking the first button makes everything above happen
$(".submitButton").on("click", beginGame);


