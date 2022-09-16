var gamePattern =[]
var buttonColours =["red","blue","green","yellow"]
var userClickPattern=[]
var started=false
var game_level=0
var game_over=false
var user_turn=false
var user_press=0



$(document).keypress(function(){
    if(started==false && game_over==false ){
    $("#level-title").text("Level "+game_level)
    nextSequence()
    started=true
    user_turn=true
    }
})

$(".btn" ).click(function() {
    if(started==true && game_over==false && user_turn==true){
    var userChosenColour =this.id
    userClickPattern.push(userChosenColour)
    playSound(userChosenColour)
    animatePress(this.id)
    checkAnswer(userClickPattern,gamePattern)
    }
}); 

  function nextSequence(){
    var randomNumber =  Math.round(Math.random()*3)
    var RandomChosenColour= buttonColours[randomNumber]
    gamePattern.push(RandomChosenColour)
    var buttonId ="#"+RandomChosenColour
    $(buttonId).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var soundSrc="sounds/"+RandomChosenColour+".mp3"
    var audio = new Audio(soundSrc);
    audio.play();
    
}
function playSound(name){    

    var soundSrc="sounds/"+name+".mp3"
    var audio = new Audio(soundSrc);
    audio.play();

}
function animatePress(currentColour){
    var button = $("."+currentColour);
    button.addClass("pressed");
    setTimeout(function() {button.removeClass("pressed");}, 100);
}

function checkAnswer(userPattern,correctPattern){
    if (userPattern[user_press]==correctPattern[user_press]){
        if(userPattern.length==correctPattern.length){
        game_level++
        $("#level-title").text("Level "+game_level)
        user_press=0
        userClickPattern=[]
        setTimeout(nextSequence,1000)
        }
        
        else{
            user_press++
            console.log("Success")
        }
    }
    else{
        $("#level-title").text("Game Over");
        setTimeout(function() {$("#level-title").text("Press a key to restart")},1000)
        $("body").addClass("game-over");
        var audio = new Audio('sounds/wrong.mp3');
        audio.play();
        setTimeout(function() {$("body").removeClass("game-over");}, 100);
        started=false
        user_turn=false
        userClickPattern=[]
        gamePattern=[]
        game_level=0
        user_press=0

    }
}

