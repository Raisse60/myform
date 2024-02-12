function recupData() {
  var dossierNumber = document.getElementById("dossierNumber").value;
  var docNumber = document.getElementById("docNumber").value;
  var clientName = document.getElementById("clientName").value;
  var clientLastName = document.getElementById("clientLastName").value;
  var loanAmount = document.getElementById("loanAmount").value;
  var rembMonth = document.getElementById("rembMonth").value;
  var loanTarea = document.getElementById("loanTarea").value;
  var rembLoanMonth = document.getElementById("rembLoanMonth").value;
  var totalRembLoan = document.getElementById("totalRembLoan").value;
  var loanStatut = document.getElementById("loanStatut").value;
  var decaissementDate = document.getElementById("decaissementDate").value;
  var taxLoanData = document.getElementById("taxLoanData").value;
  var myForm = document.getElementById("myForm");
  var devise = "$";

  var createCard = document.createElement("div");
  var createCardHeader = document.createElement("div");
  var createCardBody = document.createElement("div");
  var createCardFooter = document.createElement("div");

  //Ajout d'une class à chacun des card
  createCard.classList = "card";
  createCardHeader.classList = ("card-header", "cardHeader1");
  createCardBody.classList = "card-body";
  createCardFooter.classList = "card-footer";
  createCard.style.marginBottom = "2cm";

  createCard.appendChild(createCardHeader); //Ajout du card HEADER
  createCard.appendChild(createCardBody); // Ajout du card body
  createCard.appendChild(createCardFooter); // Ajout du card footer
  document.body.appendChild(createCard); //Ajout du card au Body

  //AJOUT DE CARDTITLE AU CardHEADER

  var cardHeaderText = document.createElement("p");
  cardHeaderText.classList = ("p1", "card-title");
  cardHeaderText.textContent = `¡Felicitaciones! ¡El archivo de crédito número ${dossierNumber} ha sido aprobado!`;
  cardHeaderText.style.marginBottom = "10px";
  cardHeaderText.style.fontSize = "20px";
  cardHeaderText.style.fontFamily = "Nunito";
  cardHeaderText.style.textAlign = "center";

  var cardHeaterTitle = document.createElement("div");
  cardHeaterTitle.classList = ("h1", "card-title");
  cardHeaterTitle.textContent = loanAmount + ` ${devise}`;
  createCardHeader.style.padding = "50px";
  createCardHeader.style.color = "green";
  createCardHeader.style.fontSize = "50px";
  createCardHeader.style.fontFamily = "Nunito";
  createCardHeader.style.textAlign = "center";

  createCardHeader.appendChild(cardHeaterTitle); // Ajout du cardTitle au CardHeader
  createCardHeader.appendChild(cardHeaderText);

  var cardTable = document.createElement("table");
  cardTable.classList = ("table-striped", "table");
  cardTable.style.paddingLeft = "15px";
  cardTable.style.paddingRight = "15px";

  //line 1
  var cardTableLine1 = cardTable.insertRow(0);
  var line1Cell1 = cardTableLine1.insertCell(0);
  var line1Cell2 = cardTableLine1.insertCell(1);
  line1Cell1.textContent = "Número de crédito";
  line1Cell2.textContent = dossierNumber;
  line1Cell2.style.textAlign = "right";

  //line 2
  var cardTableLine1 = cardTable.insertRow(1);
  var line1Cell1 = cardTableLine1.insertCell(0);
  var line1Cell2 = cardTableLine1.insertCell(1);
  line1Cell1.textContent = "Documento núm";
  line1Cell2.textContent = docNumber;
  line1Cell2.style.textAlign = "right";

  //line 3
  var cardTableLine1 = cardTable.insertRow(2);
  var line1Cell1 = cardTableLine1.insertCell(0);
  var line1Cell2 = cardTableLine1.insertCell(1);
  line1Cell1.textContent = "Apellido";
  line1Cell2.textContent = clientName;
  line1Cell2.style.textAlign = "right";
  line1Cell2.style.textTransform = "Capitalize";

  //line 4
  var cardTableLine1 = cardTable.insertRow(3);
  var line1Cell1 = cardTableLine1.insertCell(0);
  var line1Cell2 = cardTableLine1.insertCell(1);
  line1Cell1.textContent = "Nombre";
  line1Cell2.textContent = clientLastName;
  line1Cell2.style.textAlign = "right";
  line1Cell2.style.textTransform = "Capitalize"

  //line 5
  var cardTableLine1 = cardTable.insertRow(4);
  var line1Cell1 = cardTableLine1.insertCell(0);
  var line1Cell2 = cardTableLine1.insertCell(1);
  line1Cell1.textContent = "Monto del credito";
  line1Cell2.textContent = loanAmount + ` ${devise}`;
  line1Cell2.style.textAlign = "right";

  //line 5
  var cardTableLine1 = cardTable.insertRow(5);
  var line1Cell1 = cardTableLine1.insertCell(0);
  var line1Cell2 = cardTableLine1.insertCell(1);
  line1Cell1.textContent = "Mes de reembolso";
  line1Cell2.textContent = rembMonth + ` mois`;
  line1Cell2.style.textAlign = "right";

  //line 6
  var cardTableLine1 = cardTable.insertRow(6);
  var line1Cell1 = cardTableLine1.insertCell(0);
  var line1Cell2 = cardTableLine1.insertCell(1);
  line1Cell1.textContent = "Tasas de interés";
  line1Cell2.textContent = loanTarea + ` %`;
  line1Cell2.style.textAlign = "right";

  //line 7
  var cardTableLine1 = cardTable.insertRow(7);
  var line1Cell1 = cardTableLine1.insertCell(0);
  var line1Cell2 = cardTableLine1.insertCell(1);
  line1Cell1.textContent = "Pago mensual";
  line1Cell2.textContent = rembLoanMonth + ` ${devise}`;
  line1Cell2.style.textAlign = "right";

  //line 8
  var cardTableLine1 = cardTable.insertRow(8);
  var line1Cell1 = cardTableLine1.insertCell(0);
  var line1Cell2 = cardTableLine1.insertCell(1);
  line1Cell1.textContent = "Reembolso total";
  line1Cell2.textContent = totalRembLoan + ` ${devise}`;
  line1Cell2.style.textAlign = "right";

  //line 9
  var cardTableLine1 = cardTable.insertRow(9);
  var line1Cell1 = cardTableLine1.insertCell(0);
  var line1Cell2 = cardTableLine1.insertCell(1);
  line1Cell1.textContent = "Fecha de desembolso";
  line1Cell2.textContent = decaissementDate;
  line1Cell2.style.textAlign = "right";

  //line 10
  var cardTableLine1 = cardTable.insertRow(10);
  var line1Cell1 = cardTableLine1.insertCell(0);
  var line1Cell2 = cardTableLine1.insertCell(1);
  line1Cell1.textContent = "Tarifa de archivo de crédito";
  line1Cell2.textContent = taxLoanData + ` ${devise}`;
  line1Cell2.style.textAlign = "right";

  var cardFooterTable = document.createElement("table");
  cardFooterTable.classList = ("table-striped", "table");
  cardFooterTable.style.textAlign = "center";

  //line11

  var cardFooterTableLine1 = cardFooterTable.insertRow(0);
  var cardFooterTableCell1 = cardFooterTableLine1.insertCell(0);
  var cardFooterTableCell2 = cardFooterTableLine1.insertCell(1);
  cardFooterTableCell1.textContent = "Estado del archivo de crédito";
  cardFooterTableCell2.textContent = loanStatut;
  cardFooterTableCell1.style.textAlign = "left";
  cardFooterTableCell2.style.textAlign = "right";
  cardFooterTableCell2.style.color = "green";
  cardFooterTableCell2.style.fontWeight = "bold";

  //line12
    var cardFooterTableLine1 = cardFooterTable.insertRow(1);
    var cardFooterTableCell1 = cardFooterTableLine1.insertCell(0);
    cardFooterTableCell1.colSpan = 2;
    cardFooterTableCell1.textContent = `Estimado cliente ${clientName} ${clientLastName} le agradecemos su paciencia y lo invitamos al pago de costos administrativos para el desembolso de su crédito`;
    cardFooterTableCell1.style.fontSize = '15px';
    cardFooterTableCell1.style.color = "#6d6d6d";

  //AJOUT DE STYLE AU CARDBODY
  createCardBody.style.fontFamily = "Nunito";

  createCardBody.appendChild(cardTable); // Ajout de la cardTable au cardBody
  createCardFooter.appendChild(cardFooterTable); // Ajout de la cardTable au cardFOOTER
}

var myButton = document.getElementById("myButton");

myButton.addEventListener("click", function (event) {
  event.preventDefault();

  var myForm = document.getElementById("myForm");
  var myCardHeader = document.getElementById("myCardHeader");
  var myCardBody = document.getElementById("myCardBody");
  recupData();
  if (myForm.checkValidity()) {
          myForm.style.display = "none";
          myCardHeader.style.display = "none";
          myCardBody.style.display = "none";
          
        } else {
          alert("Veuillez remplir tous les champs obligatoires.");
        }
});
