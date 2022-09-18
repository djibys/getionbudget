var selectedRow = null;
var selectedRow1 = null;

var totalSalaire = 0;
var totalDepense = 0;
var restant = 0;
displayTotalSalaire();
displayTotalDepense();
totatRestant();

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
  cell2.innerHTML = `
  <a onClick="onEdit(this)">modifier</a>

 
  <a onClick="onDelete(this)">Delete</a>
`;
  // cell2.innerHTML = `<button  type="button" class="btn btn-danger">
  //   <a onClick="onEdit(this)">modifier</a>
  // </button>
  // <button type="button" class="btn btn-primary">
  //   <a onClick="onDelete(this)">Delete</a>
  // </button>`;

  totalSalaire = totalSalaire + parseFloat(data.montant);
  displayTotalSalaire();
  restant = totalSalaire - totalDepense;
  totatRestant();
}
function displayTotalSalaire() {
  document.getElementById("totalSalaire").innerHTML =
    "<h1>totalSalaire : " + totalSalaire + " </h1>";
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
  document.getElementById("titre1").value = "";
  document.getElementById("montant1").value = "";
  selectedRow = null;
  selectedRow1 = null;
}

/////////////////FORMULAIRE 2////////

function envoyer() {
  var formDatad = readFormData1();
  if (selectedRow1 == null) enregistrement1(formDatad);
  else updateRecord1(formDatad);
  resetForm();
}

function readFormData1() {
  var formDatad = {};
  formDatad["titre1"] = document.getElementById("titre1").value;
  formDatad["montant1"] = document.getElementById("montant1").value;
  return formDatad;
}

function displayTotalDepense() {
  document.getElementById("totalDepense").innerHTML =
    "<h1>totalDepense : " + totalDepense + " </h1>";
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
  cell2.innerHTML = `
  <a onClick="onEdit1(this)">modifier</a>

 
  <a onClick="onDelete1(this)">Delete</a>
`;

  totalDepense = totalDepense + parseFloat(data.montant1);
  displayTotalDepense();
  restant = totalSalaire - totalDepense;
  totatRestant();
}
function onEdit1(td) {
  selectedRow1 = td.parentElement.parentElement;
  document.getElementById("titre1").value = selectedRow1.cells[0].innerHTML;
  document.getElementById("montant1").value = selectedRow1.cells[1].innerHTML;
}
function updateRecord1(formDatad) {
  selectedRow1.cells[0].innerHTML = formDatad.titre1;
  selectedRow1.cells[1].innerHTML = formDatad.montant1;
}

function onDelete1(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("depense").deleteRow(row.rowIndex);
    resetForm();
  }
}

function totatRestant() {
  document.getElementById("restant").innerHTML =
    "<h1>totalRestant : " + restant + " </h1>";
}
