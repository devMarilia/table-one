function cadPessoa(nome, sobrenome, email, ra) {
  let ifExistePessoa = [];
  let tb = document.getElementById('table');
  let qtdLine = tb.rows.length;
  let line = tb.insertRow(qtdLine);
  let msgError = document.getElementById('msgError');
  let Rows = document.querySelectorAll('#table > tbody > tr > td');

  Array.from(Rows).forEach((element) => { // verifica se ja existe a pessoa
    if (element.innerHTML === sobrenome) { // se ja existe a pessoa
      ifExistePessoa.push(element); // armazena a pessoa
    } else if (element.innerHTML === email) { // se ja existe o email
      ifExistePessoa.push(element); // armazena o email
    } else if (element.innerHTML === ra) { // se ja existe o ra
      ifExistePessoa.push(element); //  armazena o ra
    } else { // se nao existe a pessoa
      msgError.innerHTML = 'Pessoa já cadastrada'; // mostra mensagem de erro
    }
  });
  

  if(nome === "" || sobrenome === "" || email === "" || ra === "") { // Verifica se os campos estão vazios
    msgError.innerHTML = "Preencha todos os campos!"; // Exibe mensagem de erro
    return;
  } else if (ra.length !== 8 ) { // Verifica se o RA tem 8 caracteres
    msgError.innerHTML = "RA deve conter 8 caracteres!";  
    return;
  } else if (email.indexOf('@') === -1) { // verifica se existe o @
    msgError.innerHTML = "Email inválido!"; //se não existir, mostra mensagem de erro
    return; // se não existir, retorna
  } else if (email.indexOf('.') === -1) { // verifica se existe o .
    msgError.innerHTML = "Email inválido!"; //se não existir, mostra mensagem de erro
    return; // se não existir, retorna
  } else if (ifExistePessoa.length > 0) { // verifica se existe alguma pessoa com o mesmo nome, sobrenome, email ou ra
    msgError.innerHTML = "Pessoa já cadastrada!"; //se existir, mostra mensagem de erro
    return; // se existir, retorna
  } else {
    msgError.innerHTML = "";
  }
 
  let cellName = line.insertCell(0);
  let cellSobrenome = line.insertCell(1);
  let cellEmail = line.insertCell(2);
  let cellRa = line.insertCell(3);
 
  cellName.innerHTML = nome;
  cellSobrenome.innerHTML = sobrenome;
  cellEmail.innerHTML = email;
  cellRa.innerHTML = ra;

  let btn = document.createElement('button');
    
 }
 

 
