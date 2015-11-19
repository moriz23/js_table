var deleteButton = document.getElementsByClassName('deleteButton')

for (var i = 0; i < deleteButton.length;  i++) {
  deleteButton[i].addEventListener("click", deleteRecord)
}

function deleteRecord() {
  this.parentElement.parentElement.remove();
}


