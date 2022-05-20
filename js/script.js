let divSquareContainer = document.querySelector(".square-container")

console.dir(divSquareContainer)



// faccio un ciclo per stampare tutti i nueri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // creo variabile testo 
    let testo = ""

    let color = ""

    // se i è divisibile per 3 e per 5 cambio la variabile testo 
    if(i % 3 == 0 && i % 5 == 0){
        testo = "FizzBuzz";
        color = "bg-red"
    }
    // se i è divisibile per 3 cambio la variabile testo 
    else if (i % 3 == 0) {
        testo = "fizz";
        color = "bg-green"
    }
    // se i è divisibile per 5 cambio la variabile testo
    else if (i % 5 == 0){
        testo = "buzz";  
        color = "bg-yellow"
    }
    // in tutti gli altri casi la variabile testo è uguale ad i 
    else{
        testo = i.toString()
        color = "bg-blue"
    }

    // stampo l avariabile testo ad ogni iterazione : la variabile cambia ogni volta volta che si entra in un if diverso 
    console.log(testo)

    divSquareContainer.innerHTML += `<div class="square ${color}">
                                        ${testo}
                                    </div>`    

};