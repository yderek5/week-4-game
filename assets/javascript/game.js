// when you click a character it moves it to the YOUR CHARACTERS area --> done
// after you select a character it moves the unselected characters to EMEMIES AVAILABLE --> done
// you then must select an enemy to attack and they move to DEFENDER area --> done
// give the button an on click event that attacks the defender and triggers a counter attack to the chosen player --> done
$(document).ready(function() {
    // Create the health, name, and attack points of the characters
    var Luke = {
        name: "Luke Skywalker",
        health: 100,
        baseAtk: 5,
        atkPts: 5
    };
    var Ben = {
        name: "Ben Kenobi",
        health: 120,
        baseAtk: 8,
        atkPts: 8
    };
    var Boba = {
        name: "Boba Fett",
        health: 150,
        baseAtk: 20,
        atkPts: 20
    };
    var Vader = {
        name: "Darth Vader",
        health: 180,
        baseAtk: 25,
        atkPts: 25
    };
    var isCharacterChosen = false;
    var isEnemyChosen = false;
    var currentCharacter;
    var currentEnemy;
    var defeatedEnemies = 0;
    $(".healthpointsLuke").html(Luke.health);
    $(".healthpointsBen").html(Ben.health);
    $(".healthpointsBoba").html(Boba.health);
    $(".healthpointsVader").html(Vader.health);
    $("#character-combat").text("Please select a character and then an enemy to start.");
    //User clicks luke
    //check to see if character is chosen
    $("#luke").on("click", function() {
        if (isEnemyChosen) { // <-- This checks to see if you already chose an enemy
            alert("You can only fight one at a time!"); // <-- If you have.....
            ("#luke").appendTo("#enemies-to-attack");
        }
        if (isCharacterChosen) { // <-- This checks to see if you already chose a character
            isEnemyChosen = true; // <-- If you have and you click on luke... append him to defender area
            console.log(isEnemyChosen);
            $("#luke").appendTo("#defender");
            currentEnemy = Luke;
            console.log(currentEnemy);
        } else {
            isCharacterChosen = true; // <-- If you havent selected a character or an enemy..
            console.log(isCharacterChosen);
            $("#luke").appendTo("#your-character");
            currentCharacter = Luke;
            console.log(currentCharacter);
            $("#ben").appendTo("#enemies-to-attack");
            $("#ben").addClass("redBorder");
            $("#boba").appendTo("#enemies-to-attack");
            $("#boba").addClass("redBorder");
            $("#vader").appendTo("#enemies-to-attack");
            $("#vader").addClass("redBorder");
        }
    });
    //User clicks ben
    //check to see if character is chosen
    $("#ben").on("click", function() {
        if (isEnemyChosen) { // <-- This checks to see if you already chose an enemy
            alert("You can only fight one at a time!"); // <-- If you have......
            ("#ben").appendTo("#enemies-to-attack");
        }
        if (isCharacterChosen) { // <-- This checks to see if you already chose a character
            isEnemyChosen = true; // <-- If you have and you click on ben... append him to defender area
            console.log(isEnemyChosen);
            $("#ben").appendTo("#defender");
            currentEnemy = Ben;
            console.log(currentEnemy);
        } else {
            isCharacterChosen = true;
            console.log(isCharacterChosen);
            $("#ben").appendTo("#your-character");
            currentCharacter = Ben;
            console.log(currentCharacter);
            $("#luke").appendTo("#enemies-to-attack");
            $("#luke").addClass("redBorder");
            $("#boba").appendTo("#enemies-to-attack");
            $("#boba").addClass("redBorder");
            $("#vader").appendTo("#enemies-to-attack");
            $("#vader").addClass("redBorder");
        }
    });
    //User clicks boba
    //check to see if character is chosen
    $("#boba").on("click", function() {
        if (isEnemyChosen) { // <-- This checks to see if you already chose an enemy
            alert("You can only fight one at a time!"); // <-- If you have......
            ("#boba").appendTo("#enemies-to-attack");
        }
        if (isCharacterChosen) { // <-- This checks to see if you already chose a character
            isEnemyChosen = true; // <-- If you have and you click on boba fett... append him to defender area
            console.log(isEnemyChosen);
            $("#boba").appendTo("#defender");
            currentEnemy = Boba;
            console.log(currentEnemy);
        } else {
            isCharacterChosen = true;
            console.log(isCharacterChosen);
            $("#boba").appendTo("#your-character");
            currentCharacter = Boba;
            console.log(currentCharacter);
            $("#ben").appendTo("#enemies-to-attack");
            $("#ben").addClass("redBorder");
            $("#luke").appendTo("#enemies-to-attack");
            $("#luke").addClass("redBorder");
            $("#vader").appendTo("#enemies-to-attack");
            $("#vader").addClass("redBorder");
        }
    });
    //User clicks vader
    //check to see if character is chosen
    $("#vader").on("click", function() {
        if (isEnemyChosen) { // <-- This checks to see if you already chose an enemy
            alert("You can only fight one at a time!"); // <-- If you have......
            ("#vader").appendTo("#enemies-to-attack");
        }
        if (isCharacterChosen) { // <-- This checks to see if you already chose a character
            isEnemyChosen = true; // <-- If you have and you click on darth vader... append him to defender area
            console.log(isEnemyChosen);
            $("#vader").appendTo("#defender");
            currentEnemy = Vader;
            console.log(currentEnemy);
        } else {
            isCharacterChosen = true;
            console.log(isCharacterChosen);
            $("#vader").appendTo("#your-character");
            currentCharacter = Vader;
            console.log(currentCharacter);
            $("#ben").appendTo("#enemies-to-attack");
            $("#ben").addClass("redBorder");
            $("#boba").appendTo("#enemies-to-attack");
            $("#boba").addClass("redBorder");
            $("#luke").appendTo("#enemies-to-attack");
            $("#luke").addClass("redBorder");
        }
    });
    $("#attack-button").on("click", function() {
        for (var i = 0; i < 1; i++) {
            if (isEnemyChosen === false) {
                $("#enemy-combat").text("You need an enemy to attack first!");
            }

            if (isCharacterChosen && isEnemyChosen) {
                currentEnemy.health = currentEnemy.health - currentCharacter.atkPts; // You damage enemy
                $("#character-combat").text("You attacked " + currentEnemy.name + " for " + currentCharacter.atkPts + " damage.");
                currentCharacter.atkPts += currentCharacter.baseAtk; // This increases your characters attack power every time you click attack
                if (currentEnemy.health > 0) {
                    currentCharacter.health = currentCharacter.health - currentEnemy.atkPts;
                } else {
                    currentCharacter.health - 0; // Enemy counters you as long as their health isn't 0 or less
                }
                $("#enemy-combat").text(currentEnemy.name + " attacked you back for " + currentEnemy.atkPts + " damage.");
                $(".healthpointsLuke").html(Luke.health);
                $(".healthpointsBen").html(Ben.health);
                $(".healthpointsBoba").html(Boba.health);
                $(".healthpointsVader").html(Vader.health);
                if (currentCharacter.health <= 0) {
                    alert("You lose!");
                } else if (currentEnemy.health <= 0) {
                    alert("You have defeated an enemy!");
                    defeatedEnemies += 1;
                    if (defeatedEnemies === 3) {
                        alert("You have defeated all enemies!");
                    }
                    isEnemyChosen = false;
                    if (currentEnemy.name == "Boba Fett") {
                        $("#defender").empty();
                    }
                    if (currentEnemy.name == "Luke Skywalker") {
                        $("#defender").empty();
                    }
                    if (currentEnemy.name == "Ben Kenobi") {
                        $("#defender").empty();
                    }
                    if (currentEnemy.name == "Darth Vader") {
                        $("#defender").empty();
                    }
                }
            }
        }
    });
    $("#reset").on("click", function() {
        window.location.reload();
    });
});
