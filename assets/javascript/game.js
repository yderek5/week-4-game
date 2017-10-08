// when you click a character it moves it to the YOUR CHARACTERS area
// after you select a character it moves the unselected characters to EMEMIES AVAILABLE
// you then must select an enemy to attack and they move to DEFENDER area


$(document).ready(function() {
    //Display the health of the characters
var lukeHealthPoints = "120";
var benHealthPoints = "100";
var bobaHealthPoints = "100";
var vaderHealthPoints = "150";
var lukeAttackPoints = 5;
var benAttackPoints = 12;
var bobaAttackPoints = 8;
var vaderAttackPoints = 16;
var isCharacterChosen = false;
var isEnemyChosen = false;
    $(".healthpointsLuke").html(lukeHealthPoints);
    $(".healthpointsBen").html(benHealthPoints);
    $(".healthpointsBoba").html(bobaHealthPoints);
    $(".healthpointsVader").html(vaderHealthPoints);


    //User clicks luke
    //check to see if character is chosen
    $("#luke").on("click", function() {
    if(isEnemyChosen) {
        alert("You can only fight one at a time!");
        ("#luke").appendTo("#enemies-to-attack");
    }
        if (isCharacterChosen) {
            isEnemyChosen = true;
            $("#luke").appendTo("#defender");
        } else {
            isCharacterChosen = true;
            isEnemyChosen = false;
            $("#luke").appendTo("#your-character");
            $("#ben").appendTo("#enemies-to-attack");
            $("#ben").addClass("redBorder");
            $("#boba").appendTo("#enemies-to-attack");
            $("#boba").addClass("redBorder");
            $("#vader").appendTo("#enemies-to-attack");
            $("#vader").addClass("redBorder");
        };
    });
    //User clicks ben
    //check to see if character is chosen
    $("#ben").on("click", function() {
        if(isEnemyChosen) {
        alert("You can only fight one at a time!");
        ("#ben").appendTo("#enemies-to-attack");
    }
        if (isCharacterChosen) {
            isEnemyChosen = true;
            $("#ben").appendTo("#defender");
        } else {
            isCharacterChosen = true;
            $("#ben").appendTo("#your-character");
            $("#luke").appendTo("#enemies-to-attack");
            $("#luke").addClass("redBorder");
            $("#boba").appendTo("#enemies-to-attack");
            $("#boba").addClass("redBorder");
            $("#vader").appendTo("#enemies-to-attack");
            $("#vader").addClass("redBorder");
        };
    });
    //User clicks boba
    //check to see if character is chosen
    $("#boba").on("click", function() {
        if(isEnemyChosen) {
        alert("You can only fight one at a time!");
        ("#boba").appendTo("#enemies-to-attack");
    }
        if (isCharacterChosen) {
            isEnemyChosen = true;
            $("#boba").appendTo("#defender");
        } else {
            isCharacterChosen = true;
            $("#boba").appendTo("#your-character");
            $("#ben").appendTo("#enemies-to-attack");
            $("#ben").addClass("redBorder");
            $("#luke").appendTo("#enemies-to-attack");
            $("#luke").addClass("redBorder");
            $("#vader").appendTo("#enemies-to-attack");
            $("#vader").addClass("redBorder");
        };
    });
    //User clicks vader
    //check to see if character is chosen
    $("#vader").on("click", function() {
        if(isEnemyChosen) {
        alert("You can only fight one at a time!");
        ("#vader").appendTo("#enemies-to-attack");
    }
        if (isCharacterChosen) {
            isEnemyChosen = true;
            $("#vader").appendTo("#defender");
        } else {
            isCharacterChosen = true;
            $("#vader").appendTo("#your-character");
            $("#ben").appendTo("#enemies-to-attack");
            $("#ben").addClass("redBorder");
            $("#boba").appendTo("#enemies-to-attack");
            $("#boba").addClass("redBorder");
            $("#luke").appendTo("#enemies-to-attack");
            $("#luke").addClass("redBorder");
        };
    });









});