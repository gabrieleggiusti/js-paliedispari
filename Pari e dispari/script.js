// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Bonus: L’inserimento avviene tramite un campo input

const btnPariDispari = document.querySelector('#btnpd');

btnPariDispari.addEventListener('click', function(){
  const scelta = document.getElementById('pd').value;
  const numeroUtente = document.getElementById('numero').value;
  console.log(scelta);

  //funzione genera numero random
  function numeroRandom() {
    return Math.floor(Math.random()* (5) + 1);
  }

  const numeroPC = numeroRandom();
  console.log('utente' + numeroUtente);
  console.log('pc'+ numeroPC);

  const somma = parseInt(numeroUtente) + numeroPC;
  console.log(somma);
  
  // funzione che stabilisce se somma è pari o dispari
  function pariDispari(num) {
    if (num % 2) {
      return 'dispari'
    }else{
      return 'pari'
    }
  }

  document.getElementById('numero-utente').innerHTML = `hai selezionato il numero ${numeroUtente}`
  document.getElementById('numero-pc').innerHTML = `il numero del pc è ${numeroPC}`
  
  if (scelta == pariDispari(somma)){
  document.getElementById('vincitore').innerHTML = `Hai vinto`
  }else{
  document.getElementById('vincitore').innerHTML = `Hai perso`
  }
})