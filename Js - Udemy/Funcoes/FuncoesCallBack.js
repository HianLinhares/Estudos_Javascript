// //Uma função callback é uma função passada a outra função como argumento,
//  que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.



function greeting(name) {
    alert("Olá " + name);
  }
  
  function processUserInput(callback) {
    var name = prompt("Por favor insira seu nome.");
    callback(name);
  }
  
  processUserInput(greeting);