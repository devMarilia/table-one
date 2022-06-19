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
  })
  
  let validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  if (nome === "" ) { // Verifica se o nome está vazio
    msgError.innerHTML = "Preencha o nome!"; // Exibe mensagem de erro
    return;
    } else if (sobrenome === "" ) { // Verifica se o sobrenome está vazio   (sobrenome)
    msgError.innerHTML = "Preencha o sobrenome!"; // Exibe mensagem de erro
    return;
  }else if (!validateEmail(email)) { // Verifica se o email é valido
    msgError.innerHTML = "Email inválido!";
    return;
  } else if (ra.length !== 8 ) { // Verifica se o RA tem 8 caracteres
    msgError.innerHTML = `O RA deve ter 8 caracteres!`; // Exibe mensagem de erro
    return;
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



  let btnDelete = document.createElement('td');
    btnDelete.innerHTML = 'Delete';
    btnDelete.setAttribute('onclick', 'deletarPessoa()');
    btnDelete.setAttribute('class', 'btn btn-danger');
    line.appendChild(btnDelete);

  let btnEdit = document.createElement('td');
    btnEdit.innerHTML = 'Editar';
    btnEdit.setAttribute('onclick', 'editarPessoa()');
    btnEdit.setAttribute('class', 'btnEdit btn-warning');
    line.appendChild(btnEdit);
 }
 
  function deletarPessoa() {
    let tb = document.getElementById('table');
    let qtdLine = tb.rows.length;
    let line = tb.deleteRow(qtdLine - 1);
  }

  function closeModal() {
    let modal = document.getElementById('modal');
    modal.style.display = 'none';
  }


  function editarPessoa() {
    let modal = document.getElementById('modal');
    modal.style.display = 'flex';
    let btn = document.getElementById('btn');
    btn.addEventListener('click', function() {
      modal.style.display = 'none';
    }
    )

    salvarPessoa()
  }

  //salvar pessoa 
  function salvarPessoa() {
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let email = document.getElementById('email').value;
    let ra = document.getElementById('ra').value;
    cadPessoa(nome, sobrenome, email, ra);

    let modal = document.getElementById('modal');
    modal.style.display = 'none';

  }

  

  

 
