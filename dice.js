function initialize(){
    diceForm = document.getElementById("diceForm");
    numDiceInput = document.getElementById("numDice");
    numRollsInput = document.getElementById("numRolls");
    rollButton = document.getElementById("rollButton");
    
    results = [];
    
    frequencies = {};
    
    numDoubles = 0;
    numTriples = 0;
    
    mean = 0;
    median = 0;
    mode = 0;
}


function rollDice() {
    console.log("test");
   numDice = parseInt(numDiceInput.value, 10);
   numRolls = parseInt(numRollsInput.value, 10);

  results = [];
  frequencies = {};

  numDoubles = 0;
  numTriples = 0;

  for (let i = 0; i < numRolls; i++) {
    let rollResult = 0;
    for (let j = 0; j < numDice; j++) {
      rollResult += Math.floor(Math.random() * 6) + 1;
    }
    results.push(rollResult);

    if (frequencies[rollResult]) {
      frequencies[rollResult]++;
    } else {
      frequencies[rollResult] = 1;
    }

    if (numDice > 1 && rollResult % 2 === 0) {
      numDoubles++;
    }
    if (numDice > 2 && rollResult % 3 === 0) {
      numTriples++;
    }
  }

  mean = results.reduce((a, b) => a + b, 0) / numRolls;
  median = results.sort()[Math.floor(numRolls / 2)];
  let maxFrequency = 0;
  for ( result in frequencies) {
    if (frequencies[result] > maxFrequency) {
        maxFrequency = frequencies[result];
        mode = parseInt(result, 10);
      }
    }

     tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
  

    for ( result in frequencies) {
       row = document.createElement("tr");
  
       resultCell = document.createElement("td");
      resultCell.textContent = result;
      row.appendChild(resultCell);
  
       frequencyCell = document.createElement("td");
      frequencyCell.textContent = frequencies[result];
      row.appendChild(frequencyCell);
  
      tableBody.appendChild(row);
    }
  

     doublesCell = document.getElementById("doublesCell");
    doublesCell.textContent = numDoubles;
  
     triplesCell = document.getElementById("triplesCell");
    triplesCell.textContent = numTriples;
  

     meanCell = document.getElementById("meanCell");
    meanCell.textContent = mean.toFixed(2);
  
     medianCell = document.getElementById("medianCell");
    medianCell.textContent = median;
  
     modeCell = document.getElementById("modeCell");
    modeCell.textContent = mode;
  }