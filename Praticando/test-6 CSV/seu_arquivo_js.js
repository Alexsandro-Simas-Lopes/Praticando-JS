document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);

let csvData = '"1", "Adriely Pereira Ferreira,Desenvolvedora Front-End, "Analise e Desenvolvimento de Sistemas, "adriely@seduc.net, "02/02/2004, "https://www.linkedin.com/in/adriely-pereira-ferreira-769b76236"'; // Variável para armazenar o conteúdo do CSV

function handleFileSelect(evt) {
    var file = evt.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        csvData = e.target.result;
    };

    reader.readAsText(file);
}

function findNameById() {
    var idToFind = 1; // ID que você deseja procurar (pode ser alterado para outro valor)
    var idColumnIndex = getColumnIndexByName('"1"'); // Índice da coluna "ID"
    var nameColumnIndex = getColumnIndexByName('"0"'); // Índice da coluna "Nome"

    var lines = csvData.split('\n');

    for (var i = 0; i < lines.length; i++) {
        var cells = lines[i].split(',');

        if (cells[idColumnIndex] == idToFind) {
            var name = cells[nameColumnIndex];
            displayResult(name);
            console.log("Foi");
            return;
        }
    }

    // Se o ID não for encontrado, mostrar mensagem de erro
    displayResult("ID não encontrado");
}

function getColumnIndexByName(columnName) {
    var lines = csvData.split('\n');
    var headerCells = lines[0].split(',');

    for (var i = 0; i < headerCells.length; i++) {
        if (headerCells[i] === columnName) {
            console.log("Num Foi");
            return i;
        }
    }

    return -1; // Retorna -1 se a coluna não for encontrada
}

function displayResult(result) {
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = result;
}


