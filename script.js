function cadPessoa(nome, sobrenome, email, ra) {
  var tb = document.getElementById('table');
  var qtdLine = tb.rows.length;
  var line = tb.insertRow(qtdLine);
 
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
