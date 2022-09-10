var selectedRow = null;

function onFormSubmit() {
  var formData = readFormData();
  if (selectedRow == null) insertNewRecord(formData);
  else updateRecord(formData);
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["titre"] = document.getElementById("titre").value;
  formData["montant"] = document.getElementById("montant").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("salaire")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.titre;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.montant;
  cell2 = newRow.insertCell(2);
  cell2.innerHTML = `<a onClick="onEdit(this)">Edit</a>
  <a onClick="onDelete(this)">Delete</a>`;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("titre").value = selectedRow.cells[0].innerHTML;
  document.getElementById("montant").value = selectedRow.cells[1].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.titre;
  selectedRow.cells[1].innerHTML = formData.montant;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("salaire").deleteRow(row.rowIndex);
    resetForm();
  }
}
function resetForm() {
  document.getElementById("titre").value = "";
  document.getElementById("montant").value = "";
  selectedRow = null;
}

function envoyer() {
  var formDatad = readFormData1();
  if (selectedRow == null) enregistrement1(formDatad);
  else updateRecord(formDatad);
  resetForm();
}

function readFormData1() {
  var formDatad = {};
  formDatad["titre1"] = document.getElementById("titre1").value;
  formDatad["montant1"] = document.getElementById("montant1").value;
  return formDatad;
}

function enregistrement1(data) {
  var tabled = document
    .getElementById("depense")
    .getElementsByTagName("tbody")[0];
  var newRow = tabled.insertRow(tabled.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.titre1;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.montant1;
  cell2 = newRow.insertCell(2);
  cell2.innerHTML = `<a onClick="onEdit(this)">Edit</a>
  <a onClick="onDelete(this)">Delete</a>`;
}
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("titre1").value = selectedRow.cells[0].innerHTML;
  document.getElementById("montant1").value = selectedRow.cells[1].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.titre1;
  selectedRow.cells[1].innerHTML = formData.montant1;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("depense").deleteRow(row.rowIndex);
    resetForm();
  }
}
