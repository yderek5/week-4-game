// when you click a character it moves it to the YOUR CHARACTERS area
// after you select a character it moves the unselected characters to EMEMIES AVAILABLE
// you then must select an enemy to attack


var lukeHealthPoints = "120";
var benHealthPoints = "100";
var bobaHealthPoints = "100";
var vaderHealthPoints = "150";
var lukeAttackPoints = 5;
var benAttackPoints = 12;
var bobaAttackPoints = 8;
var vaderAttackPoints = 16;
var isCharacterChosen = false;

$(document).ready(function() {
    //Display the health of the characters
    $(".healthpointsLuke").html(lukeHealthPoints);
    $(".healthpointsBen").html(benHealthPoints);
    $(".healthpointsBoba").html(bobaHealthPoints);
    $(".healthpointsVader").html(vaderHealthPoints);

    //User clicks luke"
    $("#luke").on("click", function() {
        isCharacterChosen = true;
        $("#luke").appendTo("#your-character");
        $("#ben").appendTo("#enemies-to-attack");
        $("#ben").addClass("redBorder");
        $("#boba").appendTo("#enemies-to-attack");
        $("#boba").addClass("redBorder");
        $("#vader").appendTo("#enemies-to-attack");
        $("#vader").addClass("redBorder");
    });
});