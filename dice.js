function initialize(){
    diceContainer = document.getElementById("diceform");

    numberDice = "";
    numberRolls = "";
}

function recordData(){
    numberDice = parseInt(diceContainer.dicenum.value);
    numberRolls = parseInt(diceContainer.rollsnum.value);

    runDiceRoll();
}

function runDiceRoll(){
    mean = 0;
    median = 0;
    mode = 0;
    if (numberDice == 1){
        result1 = 0;
        result2 = 0;
        result3 = 0;
        result4 = 0;
        result5 = 0;
        result6 = 0;
        for (i = 0; i < numberRolls; i++){
            rolledNum = parseInt(Math.random() * 6) + 1;
            (result)
        }
    }
    if (numberDice == 2){
        doubles = 0;
    }
    if (numberDice == 3){
        triples = 0;
    }
}