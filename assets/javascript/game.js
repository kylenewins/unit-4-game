$(document).ready(function() {

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



$("#pikachu").on("click", function(){
    $("#pikaHP").text("HP: " + pikaHP)
    if(opponentPick===true){
        $(".defender").append(pikachu);
        $(".enemiesAvail").hide();
    }
    else if (opponentPick===false){
        starterPick=true;
        opponentPick=true;
        $(".yourPoke").append(pikachu);
        $(".enemiesAvail").append(bulbasaur);
        $(".enemiesAvail").append(charmander);
        $(".enemiesAvail").append(squirtle);
    } else {
        $(".enemiesAvail").append(pikachu);
    } 
    console.log(opponentPick);
});


$("#bulbasaur").on("click", function(){
    $("#bulbaHP").text("HP: " + bulbaHP)

    if(opponentPick){
        $(".defender").append(bulbasaur);
        $(".enemiesAvail").hide();
    }

    else if (opponentPick===false){
        starterPick=true;
        opponentPick=true;
        $(".yourPoke").append(bulbasaur);
        $(".enemiesAvail").append(pikachu);
        $(".enemiesAvail").append(charmander);
        $(".enemiesAvail").append(squirtle);
    } else {
        $(".enemiesAvail").append(bulbasaur);
    }
});

$("#charmander").on("click", function(){
    $("#charHP").text("HP: " + charHP)
    if(opponentPick){
        $(".defender").append(charmander);
        $(".enemiesAvail").hide();
    }
    else if (opponentPick===false){
        starterPick=true;
        opponentPick=true;
        $(".yourPoke").append(charmander);
        $(".enemiesAvail").append(pikachu);
        $(".enemiesAvail").append(bulbasaur);
        $(".enemiesAvail").append(squirtle);
    } else {
        $(".enemiesAvail").append(charmander);
    }
});

$("#squirtle").on("click", function(){
    $("#squirtHP").text("HP: " + squirtHP)
    if(opponentPick){
        $(".defender").append(squirtle);
        $(".enemiesAvail").hide();
    }
    else if (opponentPick===false){
        starterPick=true;
        opponentPick=true;
        $(".yourPoke").append(squirtle);
        $(".enemiesAvail").append(pikachu);
        $(".enemiesAvail").append(charmander);
        $(".enemiesAvail").append(bulbasaur);
    } else {
        $(".enemiesAvail").append(squirtle);
    }
})
});
