$(document).ready(function() {
    var listNumRandom = [];
    var numRandom;
    var numUtente;
    var listNumUtente = [];
    var numeriGiusti = [];
    // creo un ciclo che si ripeterà fino a quando l'arrey è composta da 5 elementi
    while (listNumRandom.length < 5) {
        // genero il numero random grazie alla mia funzione e l'attribuisco alla mia variabile d'appoggio
        numRandom = Random(1,100);
        // controllo che dentro l'arrey non ci sia gia il numero appena generato grazie alla mia funzione e se la condizione è vera inserisco il numero generato dentro l'arrey
        if (isInArrey(listNumRandom, numRandom) == false) {
            listNumRandom.push(numRandom);
        }
    }
    $(".random h3").text(listNumRandom);

    $(".start").click(function() {
        $(".random h3").addClass("hide");
        // avvio un ritardo sull'esecuzione del prompt di 30 secondi
        setTimeout(function() {
            // creo un ciclo dove verrà chiesto all'utente di inserire un numero per 5 volte
            for (i=0; i < 5; i++) {
                do {
                    numUtente = parseInt(prompt("inserisci un numero"));
                    // se il numero inserito dall'utente è uguale ad uno dei numeri presenti nella lista allora richiede un nuovo numero
                } while (isInArrey(listNumUtente, numUtente) == true || numUtente > 100);
                listNumUtente.push(numUtente);
                // se il numero inserito dall'utente è uguale ad uno dei numeri generati randomicamente allora inserisci quel numero dentro l'arrey che contiene i numeri giusti
                if (isInArrey(listNumRandom, numUtente) == true) {
                    numeriGiusti.push(numUtente);
                }
            }
            // alert("hai indovinato " + numeriGiusti.length + " numeri. I numeri ricordati sono: " + numeriGiusti);
            $(".summary h3").text("hai indovinato " + numeriGiusti.length + " numeri. I numeri ricordati sono: " + numeriGiusti);
            $(".random h3").removeClass("hide");
            $(".restart").removeClass("hide");
        }, 3000);
        })

        $(".restart").click(function() {
            location.reload();
        })
});

// FUNZIONI
// creo una funzione che mi crea numeri casuali con un range definito
function Random(min,max) {
    return Math.floor(Math.random() * (max - min + 1) +min);
}

// creo una funzione per verificare se un'elemento è dentro un'arrey
function isInArrey(arrey, value) {
    var flag = false;
    for(var i=0; i < arrey.length && flag == false; i++) {
        if (value == arrey[i])
            flag = true;
    }
    return flag;
}  