// This removes everything in the beginning, and will eventually add all the new elements
const removeNamingBox = function removeNamingBox(){
    $(".pre-game").remove();
    console.log("Name box removed");
};

// This prints the inputted name into a place for the monsters name
const $logName = function $logName() {
    $(".monster-name").text($(".grab-monster-name").val());
}

const death = function death(){
    //$(".screen").css("background-color", "#2f2e2e");
    $(".dead").remove();
    //$(".div-monster-img").append( and img);
    
}


/**
 * This sets up health bar, after set time reduces health, eventually to 0, then pet dies. I need to tie in other functions so they don't keep running. 
 */

// After submit name,enacts timer(s), moves hidden gameboy over, 
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
        return
    }

    else if(hearts <= 5 && hearts > 1){
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
        death();
        return;
     }
 }

const healthTimer = setInterval(healthDecrease, 2000);



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

 function levelIncrease(thing){
    if(level === 5 && hearts > 0){
    level ++;
    $(".monster-level").text(`Level: ${level}`);
    $(".egg-img").fadeOut(900);
    $(".monster-img").appendTo(".div-monster-img").show('slow');
   }
   
   else if(hearts > 0){
   level ++;
   $(".monster-level").text(`Level: ${level}`);
    }
   return;   
 }

 const levelTimer = setInterval(levelIncrease, 1000);

 levelIncrease(levelTimer);


// -------------------------------------------------------------------------------------

 function sleepDecrease(thing){
    if(hearts === 0 || social === 0){
        return
    }

    else if(sleep <= 5 && sleep > 1){

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
        death();
        return;
     }
 }

const sleepTimer = setInterval(sleepDecrease, 2000);


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

const lightsOffTimer = setInterval(addSleep, 1000);

// Toggles light
$(".sleep-button").on("click", function(){
    light = !light;
});


//-----------------------------------------------------------------
/**
 * Social Functions
 */

 function socialDecrease(thing){
    if(hearts === 0 || sleep === 0){
        return
    }

    else if(social <= 5 && social > 1){

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
        death();
        return;
     }
 }

const socialTimer = setInterval(socialDecrease, 2000);

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
//------------------------------------------------------------------------------

const test = function test(){
$('.egg-img').show('slide', {direction: 'right'}, 1000);
}

$(".music-button").on("click", test);

// Clicking the first button makes everything above happen
$(".submitButton").on("click", beginGame);


