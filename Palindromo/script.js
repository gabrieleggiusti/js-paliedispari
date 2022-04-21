// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Bonus: L’inserimento avviene tramite un campo input

const btnparola = document.querySelector('#btn-parola');

btnparola.addEventListener('click', function(){
  const parola = document.getElementById('parola').value;

  function reverse(parolaInserita){
   let parolaAlContrario = '';
    for (let i = parolaInserita.length - 1; i >= 0; i--) { 
     parolaAlContrario += parolaInserita[i];
    }
    return parolaAlContrario;
  }

  if( parola.toLowerCase() == reverse(parola).toLowerCase()){
    document.querySelector('h1').innerHTML = `${parola} è una parola palindroma`
  }else{
     document.querySelector('h1').innerHTML = `${parola} NON è una parola palindroma`
  } 
})