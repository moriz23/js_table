
/* Event listener for add button*/

document.getElementById("addButton").addEventListener("click", emptyField);

/* Function that giver alert if user leaves any input blank */

function emptyField() {
  var inputsArray = document.getElementsByTagName("input");
  var elementText;
  var validationCheck = 0;

  for(var i = 0; i < inputsArray.length; i++) {
    if(inputsArray[i].value === "") {
      switch(i) {
        case 0:
          elementText = "First Name";
          validationCheck = 1;
          break;
        case 1:
          elementText ="Last Name";
          validationCheck = 1;
          break;
        case 2:
          elementText = "Email";
          validationCheck = 1;
          break;
      }
      inputsArray[i]
      alert("You left the " + elementText + " input empty!");
      break;
    }
    
  }

  if (validationCheck === 0) {
    insertRow(); //Calls insertRow function
  }
}

function insertRow() {

  /* Get Element by Id = mainTable*/
  var table = document.getElementById("mainTable");

  /* Create an empty row <tr> element and add it to the last row of the table */
  var rowInsert = table.insertRow(table.rows.length-1);
  var inputs = document.getElementsByClassName("new-input");

  //Insert new table cells (td) elements at the first, second, and third position of the (tr) element
  var cell1 = rowInsert.insertCell(0); 
  var cell2 = rowInsert.insertCell(1);
  var cell3 = rowInsert.insertCell(2);
  var cell1Val = inputs[0].value;
  var cell2Val = inputs[1].value;
  var cell3Val = inputs[2].value;

  //Text will be added to new row cells:
  cell1.innerHTML = inputs[0].value;
  cell2.innerHTML = inputs[1].value;
  cell3.innerHTML = inputs[2].value;
}

