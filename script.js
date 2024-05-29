// Fonction pour ajouter une ligne d'employé au tableau
function addEmployeeRow(nom, prenom, telephone, departement) {
    const tableBody = document.getElementById("employeeTable").getElementsByTagName("tbody")[0];
    const newRow = tableBody.insertRow();
    const cell1 = newRow.insertCell();
    const cell2 = newRow.insertCell();
    const cell3 = newRow.insertCell();
    const cell4 = newRow.insertCell();
    const cell5 = newRow.insertCell();
    cell1.innerHTML = nom;
    cell2.innerHTML = prenom;
    cell3.innerHTML = telephone;
    cell4.innerHTML = departement;
    cell5.innerHTML = `
        <button onclick="deleteEmployeeRow(this)">Supprimer</button>
        <button onclick="updateEmployeeRow(this)">Modifier</button>
    `;
}

// Fonction pour supprimer une ligne d'employé
function deleteEmployeeRow(button) {
    button.parentNode.parentNode.remove();
}

// Fonction pour modifier une ligne d'employé
function updateEmployeeRow(button) {
    const row = button.parentNode.parentNode;
    const cells = row.getElementsByTagName("td");

    const nom = prompt("Modifier le nom:", cells[0].innerHTML);
    const prenom = prompt("Modifier le prénom:", cells[1].innerHTML);
    const telephone = prompt("Modifier le téléphone:", cells[2].innerHTML);
    const departement = prompt("Modifier le département:", cells[3].innerHTML);

    if (nom !== null && prenom !== null && telephone !== null && departement !== null) {
        cells[0].innerHTML = nom;
        cells[1].innerHTML = prenom;
        cells[2].innerHTML = telephone;
        cells[3].innerHTML = departement;
    }
}

// Gestion du formulaire d'ajout d'employé
const employeeForm = document.getElementById("employeeForm");
employeeForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs du formulaire
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const telephone = document.getElementById("telephone").value;
    const departement = document.getElementById("departement").value;

    // Ajouter la ligne d'employé au tableau
    addEmployeeRow(nom, prenom, telephone, departement);

    // Réinitialiser le formulaire
    employeeForm.reset();
});

// Remplissage initial du tableau
addEmployeeRow("Diop", "Modou", "7877 7771", "Finance");
addEmployeeRow("Martin", "Lamine", "7877 7776", "Finance");
