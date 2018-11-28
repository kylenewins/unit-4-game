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
    console.log("pika")
    starterPick===true;
    $("#pokeText").text("HP: " + pikaHP)
    if (opponentPick===false){
        $(".yourPoke").append(pikachu);
        $(".enemiesAvail").append(bulbasaur);
        $(".enemiesAvail").append(charmander);
        $(".enemiesAvail").append(squirtle);
    } else {
        $(".enemiesAvail").append(pikachu);
    }
})


$("#bulbasaur").on("click", function(){
    console.log("bulbasaur")
    if(starterPick==true){
        opponentPick==true;
    } else if(opponentPick==true){
        $(".defender").append(bulbasaur)
    }
})

$("#charmander").on("click", function(){
    console.log("charmander")
})

$("#squirtle").on("click", function(){
    console.log("squirtle")
})
});
