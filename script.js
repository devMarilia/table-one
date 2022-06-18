function cadPessoa(nome, sobrenome, email, ra) {
  var tb = document.getElementById('table');
  var qtdLine = tb.rows.length;
  var line = tb.insertRow(qtdLine);
  var msgError = document.getElementById('msgError');

  if(nome === "" || sobrenome === "" || email === "" || ra === "") { // Verifica se os campos estão vazios
    msgError.innerHTML = "Preencha todos os campos!"; // Exibe mensagem de erro
    return;
  } else if (ra.length !== 8 || ra.length < 8) { // Verifica se o RA tem 8 caracteres
    msgError.innerHTML = "RA deve conter 8 caracteres!";  
    return;
  } else if (email.indexOf('@') === -1) { // verifica se existe o @
    msgError.innerHTML = "Email inválido!"; //se não existir, mostra mensagem de erro
    return; // se não existir, retorna
  } if (email.indexOf('.') === -1) { // verifica se existe o .
    msgError.innerHTML = "Email inválido!"; //se não existir, mostra mensagem de erro
    return; // se não existir, retorna
  }
  else {
    msgError.innerHTML = "";
  }
 
  var cellName = line.insertCell(0);
  var cellSobrenome = line.insertCell(1);
  var cellEmail = line.insertCell(2);
  var cellRa = line.insertCell(3);
 
  cellName.innerHTML = nome;
  cellSobrenome.innerHTML = sobrenome;
  cellEmail.innerHTML = email;
  cellRa.innerHTML = ra;

  var btn = document.createElement('button');
    
 }

 
