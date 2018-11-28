$(document).ready(function() {
//GLOBAL VARIABLES
var pikaHP = 100;
var pikaATK = 20;

var bulbaHP = 150;
var bulbaATK = 35;

var charHP = 100;
var charATK = 25;

var squirtHP = 100;
var squirtATK = 20;

var starterPick = false;
var opponentPick = false;

var defender = "";
var starter = "";

$("#atkBtn").hide();
$("#newBtn").hide();

var pikaAudio = document.createElement('audio');
    pikaAudio.setAttribute('src', 'assets/audio/pikachu.mp3')
var bulbaAudio = document.createElement('audio');
    bulbaAudio.setAttribute('src', 'assets/audio/bulbasaur.mp3')
var charAudio = document.createElement('audio');
    charAudio.setAttribute('src', 'assets/audio/charmander.mp3')
var squirtAudio = document.createElement('audio');
    squirtAudio.setAttribute('src', 'assets/audio/squirtle.mp3')

//RESET FUNCTION
function gameStart(){
$(".defender .yourPoke .enemiesAvail").empty();
$("#battleText").empty();

$(".charAvail").append(pikachu);
$(".charAvail").append(bulbasaur);
$(".charAvail").append(charmander);
$(".charAvail").append(squirtle);


pikaHP = 100;
pikaATK = 20;

bulbaHP = 150;
bulbaATK = 35;

charHP = 100;
charATK = 25;

squirtHP = 100;
squirtATK = 20;

starterPick = false;
opponentPick = false;

defender = "";
starter = "";

$("#atkBtn").hide()
$("#resetBtn").hide()
$("#newBtn").hide();

$(".enemiesAvail").show();

$("#pikaHP").hide()
$("#bulbaHP").hide()
$("#charHP").hide()
$("#squirtHP").hide()

$("#pikachu").show();
$("#bulbasaur").show();
$("#charmander").show();
$("#squirtle").show();
}


$("#pikachu").on("click", function(){//pikachu placement functions
    $("#pikaHP").text("HP: " + pikaHP)
    $("#pikaHP").show();
    if(opponentPick===true){
        pikaAudio.play();
        $(".defender").append(pikachu);
        defender = "pikachu";
        $("#battleText").append("<br/>" + "A wild Pikachu Appeared!")
        $(".enemiesAvail").hide();
        $("#atkBtn").show();
    }
    else if (opponentPick===false){
        pikaAudio.play();
        starterPick=true;
        opponentPick=true;
        $(".yourPoke").append(pikachu);
        starter = "pikachu";
        $("#battleText").append("You Chose Pikachu!")
        $(".enemiesAvail").append(bulbasaur);
        $(".enemiesAvail").append(charmander);
        $(".enemiesAvail").append(squirtle);

    } else {
        $(".enemiesAvail").append(pikachu);
    } 
    console.log(opponentPick);
});


$("#bulbasaur").on("click", function(){//bulbasaur placement functions
    $("#bulbaHP").text("HP: " + bulbaHP)
    $("#bulbaHP").show();

    if(opponentPick){
        bulbaAudio.play();
        $(".defender").append(bulbasaur);
        defender = "bulbasaur"
        $("#battleText").append("<br/>" + "A wild Bulbasaur Appeared!")
        $(".enemiesAvail").hide();
        $("#atkBtn").show();
    }

    else if (opponentPick===false){
        bulbaAudio.play();
        starterPick=true;
        opponentPick=true;
        $(".yourPoke").append(bulbasaur);
        starter = "bulbasaur";
        $("#battleText").append("You Chose Bulbasaur!")
        $(".enemiesAvail").append(pikachu);
        $(".enemiesAvail").append(charmander);
        $(".enemiesAvail").append(squirtle);
    } else {
        $(".enemiesAvail").append(bulbasaur);
    }
});

$("#charmander").on("click", function(){//charmander placement functions
    $("#charHP").text("HP: " + charHP)
    $("#charHP").show();

    if(opponentPick){
        charAudio.play();
        $(".defender").append(charmander);
        defender = "charmander";
        $("#battleText").append("<br/>" + "A wild Charmander Appeared!")
        $(".enemiesAvail").hide();
        $("#atkBtn").show();
    }
    else if (opponentPick===false){
        charAudio.play();
        starterPick=true;
        opponentPick=true;
        $(".yourPoke").append(charmander);
        starter = "charmander";
        $("#battleText").append("You Chose Charmander!")
        $(".enemiesAvail").append(pikachu);
        $(".enemiesAvail").append(bulbasaur);
        $(".enemiesAvail").append(squirtle);
    } else {
        $(".enemiesAvail").append(charmander);
    }
});

$("#squirtle").on("click", function(){//squirtle placement functions
    $("#squirtHP").text("HP: " + squirtHP)
    $("#squirtHP").show();

    if(opponentPick){
        squirtAudio.play();
        $(".defender").append(squirtle);
        defender = "squirtle";
        $("#battleText").append("<br/>" + "A wild Squirtle Appeared!")
        $(".enemiesAvail").hide();
        $("#atkBtn").show();
    }
    else if (opponentPick===false){
        squirtAudio.play();
        starterPick=true;
        opponentPick=true;
        $(".yourPoke").append(squirtle);
        starter = "squirtle";
        $("#battleText").append("You Chose Squirtle!")
        $(".enemiesAvail").append(pikachu);
        $(".enemiesAvail").append(charmander);
        $(".enemiesAvail").append(bulbasaur);
    } else {
        $(".enemiesAvail").append(squirtle);
    }
})
//ATTACK BUTTON FUNCTIONALITY
$("#atkBtn").on("click",function(){
//PIKACHU ATTACK FUNCTIONS
    if((starter === "pikachu") && (defender === "bulbasaur")){
        bulbaHP -= pikaATK;
        pikaHP -= bulbaATK;
        $("#pikaHP").text("HP: " + pikaHP)
        $("#bulbaHP").text("HP: " + bulbaHP)
        $("#battleText").append("<br/>" + "You Attacked Bulbasaur for " + pikaATK + " damage!")
        $("#battleText").append("<br/>" + "Bulbasaur Attacked You for " + bulbaATK + " damage!")
        pikaATK += 20;
        if(pikaHP<=0){
            $("#battleText").append("<br/>" + "You Lose :(")
            $("#pikachu").hide();
            $("#atkBtn").hide();
            $("#resetBtn").show();
        } else if(bulbaHP<=0){
            $("#battleText").append("<br/>" + "You Defeated Bulbasaur!")
            $("#bulbasaur").hide();
            $("#newBtn").show();
            $("#atkBtn").hide();
        } else {
            
        }
    } else if((starter === "pikachu") && (defender=== "squirtle")){
        squirtHP -= pikaATK;
        pikaHP -= squirtATK;
        $("#pikaHP").text("HP: " + pikaHP)
        $("#squirtHP").text("HP: " + squirtHP)
        $("#battleText").append("<br/>" + "You Attacked Squirtle for " + pikaATK + " damage!")
        $("#battleText").append("<br/>" + "Squirtle Attacked You for " + squirtATK + " damage!")
        pikaATK += 20;
        if(pikaHP<=0){
            $("#battleText").append("<br/>" + "You Lose :(")
            $("#pikachu").hide();
            $("#atkBtn").hide();
            $("#resetBtn").show();
        } else if(squirtHP<=0){
            $("#battleText").append("<br/>" + "You Defeated Squirtle!")
            $("#squirtle").hide();
            $("#newBtn").show();
            $("#atkBtn").hide();
        } 
    } else if((starter==="pikachu") && (defender==="charmander")){
        charHP -= pikaATK;
        pikaHP -= charATK;
        $("#pikaHP").text("HP: " + pikaHP)
        $("#charHP").text("HP: " + charHP)
        $("#battleText").append("<br/>" + "You Attacked Charmander for " + pikaATK + " damage!")
        $("#battleText").append("<br/>" + "Charmander Attacked You for " + charATK + " damage!")
        pikaATK += 20;
        if(pikaHP<=0){
            $("#battleText").append("<br/>" + "You Lose :(")
            $("#pikachu").hide();
            $("#atkBtn").hide();
            $("#resetBtn").show();
        } else if(charHP<=0){
            $("#battleText").append("<br/>" + "You Defeated Charmander!")
            $("#charmander").hide();
            $("#newBtn").show();
            $("#atkBtn").hide();
        } 
    }
//BULBASAUR ATTACK FUNCTIONS
if((starter === "bulbasaur") && (defender === "pikachu")){
    bulbaHP -= pikaATK;
    pikaHP -= bulbaATK;
    $("#pikaHP").text("HP: " + pikaHP)
    $("#bulbaHP").text("HP: " + bulbaHP)
    $("#battleText").append("<br/>" + "You Attacked Pikachu for " + bulbaATK + " damage!")
    $("#battleText").append("<br/>" + "Pikachu Attacked You for " + pikaATK + " damage!")
    bulbaATK += 20;
    if(bulbaHP<=0){
        $("#battleText").append("<br/>" + "You Lose :(")
        $("#bulbasaur").hide();
        $("#atkBtn").hide();
        $("#resetBtn").show();
    } else if(pikaHP<=0){
        $("#battleText").append("<br/>" + "You Defeated Pikachu!")
        $("#pikachu").hide();
        $("#newBtn").show();
        $("#atkBtn").hide();
    }
} else if((starter === "bulbasaur") && (defender=== "squirtle")){
    squirtHP -= bulbaATK;
    bulbaHP -= squirtATK;
    $("#bulbaHP").text("HP: " + bulbaHP)
    $("#squirtHP").text("HP: " + squirtHP)
    $("#battleText").append("<br/>" + "You Attacked Squirtle for " + bulbaATK + " damage!")
    $("#battleText").append("<br/>" + "Squirtle Attacked You for " + squirtATK + " damage!")
    bulbaATK += 20;
    if(bulbaHP<=0){
        $("#battleText").append("<br/>" + "You Lose :(")
        $("#bulbasaur").hide();
        $("#atkBtn").hide();
        $("#resetBtn").show();
    } else if(squirtHP<=0){
        $("#battleText").append("<br/>" + "You Defeated Squirtle!")
        $("#squirtle").hide();
        $("#newBtn").show();
        $("#atkBtn").hide();
    } 
} else if((starter==="bulbasaur") && (defender==="charmander")){
    charHP -= bulbaATK;
    bulbaHP -= charATK;
    $("#bulbaHP").text("HP: " + bulbaHP)
    $("#charHP").text("HP: " + charHP)
    $("#battleText").append("<br/>" + "You Attacked Charmander for " + bulbaATK + " damage!")
    $("#battleText").append("<br/>" + "Charmander Attacked You for " + charATK + " damage!")
    bulbaATK += 20;
    if(bulbaHP<=0){
        $("#battleText").append("<br/>" + "You Lose :(")
        $("#bulbasaur").hide();
        $("#atkBtn").hide();
        $("#resetBtn").show();
    } else if(charHP<=0){
        $("#battleText").append("<br/>" + "You Defeated Charmander!")
        $("#charmander").hide();
        $("#newBtn").show();
        $("#atkBtn").hide();
    } 
}
//CHARMANDER ATTACK FUNCTIONS
if((starter === "charmander") && (defender === "pikachu")){
    charHP -= pikaATK;
    pikaHP -= charATK;
    $("#pikaHP").text("HP: " + pikaHP)
    $("#charHP").text("HP: " + charHP)
    $("#battleText").append("<br/>" + "You Attacked Pikachu for " + charATK + " damage!")
    $("#battleText").append("<br/>" + "Pikachu Attacked You for " + pikaATK + " damage!")
    charATK += 20;
    if(charHP<=0){
        $("#battleText").append("<br/>" + "You Lose :(")
        $("#charmander").hide();
        $("#atkBtn").hide();
        $("#resetBtn").show();
    } else if(pikaHP<=0){
        $("#battleText").append("<br/>" + "You Defeated Pikachu!")
        $("#pikachu").hide();
        $("#newBtn").show();
        $("#atkBtn").hide();
    }
} else if((starter === "charmander") && (defender=== "squirtle")){
    squirtHP -= charATK;
    charHP -= squirtATK;
    $("#charHP").text("HP: " + charHP)
    $("#squirtHP").text("HP: " + squirtHP)
    $("#battleText").append("<br/>" + "You Attacked Squirtle for " + charATK + " damage!")
    $("#battleText").append("<br/>" + "Squirtle Attacked You for " + squirtATK + " damage!")
    charATK += 20;
    if(charHP<=0){
        $("#battleText").append("<br/>" + "You Lose :(")
        $("#charmander").hide();
        $("#atkBtn").hide();
        $("#resetBtn").show();
    } else if(squirtHP<=0){
        $("#battleText").append("<br/>" + "You Defeated Squirtle!")
        $("#squirtle").hide();
        $("#newBtn").show();
        $("#atkBtn").hide();
    } 
} else if((starter==="charmander") && (defender==="bulbasaur")){
    charHP -= bulbaATK;
    bulbaHP -= charATK;
    $("#bulbaHP").text("HP: " + bulbaHP)
    $("#charHP").text("HP: " + charHP)
    $("#battleText").append("<br/>" + "You Attacked Bulbasaur for " + charATK + " damage!")
    $("#battleText").append("<br/>" + "Bulbasaur Attacked You for " + bulbaATK + " damage!")
    charATK += 20;
    if(charHP<=0){
        $("#battleText").append("<br/>" + "You Lose :(")
        $("#charmander").hide();
        $("#atkBtn").hide();
        $("#resetBtn").show();
    } else if(bulbaHP<=0){
        $("#battleText").append("<br/>" + "You Defeated Bulbasaur!")
        $("#bulbasaur").hide();
        $("#newBtn").show();
        $("#atkBtn").hide();
    } 
}//SQUIRTLE ATTACK FUNCTIONS
if((starter === "squirtle") && (defender === "pikachu")){
    squirtHP -= pikaATK;
    pikaHP -= squirtATK;
    $("#pikaHP").text("HP: " + pikaHP)
    $("#squirtHP").text("HP: " + squirtHP)
    $("#battleText").append("<br/>" + "You Attacked Pikachu for " + squirtATK + " damage!")
    $("#battleText").append("<br/>" + "Pikachu Attacked You for " + pikaATK + " damage!")
    squirtATK += 20;
    if(squirtHP<=0){
        $("#battleText").append("<br/>" + "You Lose :(")
        $("#squirtle").hide();
        $("#atkBtn").hide();
        $("#resetBtn").show();
    } else if(pikaHP<=0){
        $("#battleText").append("<br/>" + "You Defeated Pikachu!")
        $("#pikachu").hide();
        $("#newBtn").show();
        $("#atkBtn").hide();
    }
} else if((starter === "squirtle") && (defender=== "charmander")){
    squirtHP -= charATK;
    charHP -= squirtATK;
    $("#charHP").text("HP: " + charHP)
    $("#squirtHP").text("HP: " + squirtHP)
    $("#battleText").append("<br/>" + "You Attacked Charmander for " + squirtATK + " damage!")
    $("#battleText").append("<br/>" + "Charmander Attacked You for " + charATK + " damage!")
    squirtATK += 20;
    if(squirtHP<=0){
        $("#battleText").append("<br/>" + "You Lose :(")
        $("#squirtle").hide();
        $("#atkBtn").hide();
        $("#resetBtn").show();
    } else if(charHP<=0){
        $("#battleText").append("<br/>" + "You Defeated Charmander!")
        $("#charmander").hide();
        $("#newBtn").show();
        $("#atkBtn").hide();
    } 
} else if((starter==="squirtle") && (defender==="bulbasaur")){
    squirtHP -= bulbaATK;
    bulbaHP -= squirtATK;
    $("#bulbaHP").text("HP: " + bulbaHP)
    $("#squirtHP").text("HP: " + charHP)
    $("#battleText").append("<br/>" + "You Attacked Bulbasaur for " + squirtATK + " damage!")
    $("#battleText").append("<br/>" + "Bulbasaur Attacked You for " + bulbaATK + " damage!")
    squirtATK += 20;
    if(squirtHP<=0){
        $("#battleText").append("<br/>" + "You Lose :(")
        $("#squirtle").hide();
        $("#atkBtn").hide();
        $("#resetBtn").show();
    } else if(bulbaHP<=0){
        $("#battleText").append("<br/>" + "You Defeated Bulbasaur!")
        $("#bulbasaur").hide();
        $("#newBtn").show();
        $("#atkBtn").hide();
    } 
}

})//attack button end













$("#resetBtn").on("click", function(){
    gameStart();
})

$("#newBtn").on("click",function(){
    $(".enemiesAvail").show();
    $("#battleText").empty();
    $("#newBtn").hide();
})

gameStart();

});
