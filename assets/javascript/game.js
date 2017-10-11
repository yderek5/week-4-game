// when you click a character it moves it to the YOUR CHARACTERS area --> done
// after you select a character it moves the unselected characters to EMEMIES AVAILABLE --> done
// you then must select an enemy to attack and they move to DEFENDER area --> done
// give the button an on click event that attacks the defender and triggers a counter attack to the chosen player --> done
$(document).ready(function() {
    // Create the health, name, and attack points of the characters
    var Luke = {
        name: "luke",
        health: 120,
        atkPts: 1
    };
    var Ben = {
        name: "ben",
        health: 100,
        atkPts: 12
    };
    var Boba = {
        name: "boba",
        health: 100,
        atkPts: 1.5
    };
    var Vader = {
        name: "vader",
        health: 150,
        atkPts: 3
    };
    var isCharacterChosen = false;
    var isEnemyChosen = false;
    var currentCharacter;
    var currentEnemy = '';
    $(".healthpointsLuke").html(Luke.health);
    $(".healthpointsBen").html(Ben.health);
    $(".healthpointsBoba").html(Boba.health);
    $(".healthpointsVader").html(Vader.health);


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
        };
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
        };
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
        };
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
        };
    });


    $("#attack-button").on("click", function() {
        for (var i = 0; i < 1; i++) {
            if (isCharacterChosen && isEnemyChosen) {
                currentCharacter.atkPts *= 2;
                currentEnemy.health = currentEnemy.health - currentCharacter.atkPts;
                currentCharacter.health = currentCharacter.health - currentEnemy.atkPts;
                $(".healthpointsLuke").html(Luke.health);
                $(".healthpointsBen").html(Ben.health);
                $(".healthpointsBoba").html(Boba.health);
                $(".healthpointsVader").html(Vader.health);
                if (currentCharacter.health <= 0) {
                    alert("You lose!");
                } else if (currentEnemy.health <= 0) {
                    alert("You have defeated your enemy!");
                    isEnemyChosen = false;
                    if (currentEnemy.name == "boba") {
                        $("#boba").appendTo("#graveyard");
                    }
                    if (currentEnemy.name == "luke") {
                        $("#luke").appendTo("#graveyard");
                    }
                    if (currentEnemy.name == "ben") {
                        $("#ben").appendTo("#graveyard");
                    }
                    if (currentEnemy.name == "vader") {
                        $("#vader").appendTo("#graveyard");
                    }

                }
            }
        }
    });





});