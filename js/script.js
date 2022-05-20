let divSquareContainer = document.querySelector(".square-container")

console.dir(divSquareContainer)




// faccio un ciclo per stampare tutti i nueri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // creo variabile testo 
    let testo = ""


    // se i è divisibile per 3 e per 5 cambio la variabile testo e la stampo in console
    if(i % 3 == 0 && i % 5 == 0){
        testo = "FizzBuzz";
        
    }
    // se i è divisibile per 3 cambio la variabile testo e la stampo in console
    else if (i % 3 == 0) {
        testo = "fizz";
        
    }
    // se i è divisibile per 5 cambio la variabile testo e la stampo in console
    else if (i % 5 == 0){
        testo = "buzz";  
        
    }
    // in tutti gli altri casi stampo la i in console
    else{
        testo = i.toString()
        
    }

    // stampo l avariabile testo ad ogni iterazione : la variabile cambia ogni volta volta che si entra in un if diverso 
    console.log(testo)

    divSquareContainer.innerHTML += `<div class="square">
                                        ${testo}
                                    </div>`    

};