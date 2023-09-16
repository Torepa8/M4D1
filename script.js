// Ex 1
function n_50(n1, n2) {
    if ((n1 == 50) || (n2 == 50) || ((n1 + n2) == 50)) {
        // document.querySelector("#risultato1").innerHTML = "True"
        console.log("true")
        return true
    }
    else {
        // document.querySelector("#risultato1").innerHTML = "False"
        console.log("false")
        return false
    }
}

n_50(2, 50)

// document.querySelector("#ex1").addEventListener("click", n_50(2, 50));

// Ex 2
function removeletter(word, position) {
    let splitword = word.split("")
    if (splitword.length >= position) {
        splitword.splice(position, 1)
        console.log(splitword.join(""))
        // document.querySelector("#risultato2").innerHTML = splitword.join("")
        return splitword.join("")
    }
    else {
        console.log("Position not avaiable")
        // alert("Position not avaiable")
        return false
    }
}
removeletter("Epicode", 50)

// Ex 3
function controlnumber(x1, x2) {
    if (((x1 >= 40) && (x1 <= 60)) || (((x1 >= 70) && (x1 <= 100)))) {
        if ((x2 >= 40) && (x2 <= 60)) {
            // document.querySelector("#risultato3").innerHTML = "True"
            console.log("true")
            return true
        }
        else if ((x2 >= 70) && (x2 >= 100)) {
            // document.querySelector("#risultato3").innerHTML = "True"
            console.log("true")
            return true
        } else {
            // document.querySelector("#risultato3").innerHTML = "False"
            console.log("false")
            return false
        }
    }
    else {
        // document.querySelector("#risultato3").innerHTML = "False"
        console.log("false")
        return false
    }
}
controlnumber(100, 40)

// Ex4
function los_new(city) {
    const arr3 = []
    for (let i = 0; i < 3; i++) {
        arr3.push(city[i])
    }
    const primetrelettere = arr3.join("")
    // console.log(primetrelettere)
    if ((primetrelettere.toLowerCase() === "los") || (primetrelettere.toLowerCase() === "new")) {
        // console.log("true")
        return city
    }
    else {
        // console.log("false")
        return false
    }
}
console.log(los_new("Ls angeles"))

// Ex5
const numeri = [0, 0, 5, 7, 9, 11, 4]
function sommarray(arraydasommare) {
    let sommatotale = 0
    for (let i = 0; i < arraydasommare.length; i++) {
        sommatotale += arraydasommare[i]
    }
    return sommatotale
}
console.log(sommarray(numeri))

// Ex6
function diversidaunoetre(arraydacontrollare) {
    let controllo1 = true
    let controllo3 = true
    for (let i = 0; i < arraydacontrollare.length; i++) {
        if (arraydacontrollare[i] === 1)
            controllo1 = false
        else if (arraydacontrollare[i] === 3)
            controllo3 = false
    }
    if ((controllo1) || controllo3)
        return true

    else return false
}
console.log(diversidaunoetre(numeri))

// Ex7
function cercaangolo(angolo) {
    if (angolo === 90) {
        return "Angolo retto"
    }
    else if (angolo < 90) {
        return "Angolo acuto"
    }
    else if ((angolo > 90) && (angolo < 180)) {
        return "Angolo ottuso"
    }
    else if (angolo === 180) {
        return "Angolo piatto"
    }
}
console.log(cercaangolo(90))

// Ex8
function creacronimo(frase) {
    let frasedivisa = frase.split(" ")
    let acronimo = ""
    for (let i = 0; i < frasedivisa.length; i++) {
        acronimo += frasedivisa[i][0]
    }
    return acronimo.toUpperCase()
}
console.log(creacronimo("Ciao a Tutti Voi"))
console.log("")

// Extra Facoltativi-1
function carattereusatodipiu(parola) {
    let wordrip = []
    for (let i = 0; i < parola.length; i++) {
        let letrip = { l: "", r: 0 }
        let word = ""
        let rip = 0
        word = parola[i]
        for (const p of parola) {
            if (word === p) {
                rip++
            }
        }
        letrip.l = word
        letrip.r = rip
        controlloletterepresenti = false
        for (const w of wordrip) { //controllo se la lettera è già stata contata
            if (w.l === word)
                controlloletterepresenti = true
        }
        if (!controlloletterepresenti) {
            wordrip.push(letrip)
        }
        rip = 0
        word = ""
    }
    //console.log(wordrip) //visualizza tutte le lettere con rispettiva ripertizione
    // let indicecarattere=0
    let piugrande = wordrip[0]
    for (let i = 0; i < wordrip.length; i++) {
        if (wordrip[i].r > piugrande.r) {
            piugrande = wordrip[i]
        }
    }
    // console.log(piugrande)
    return wordrip //restituisco questo perchè mi occorre dopo ex2
}
console.log("Extra 1")
console.log(carattereusatodipiu("salvatorepau"))
console.log("")


//Extra Facoltativi-2


//utilizzo la funzione precedente per vedere le lettere 
//col proprio numero di ripetizioni e confronto 
//le due parole
function controlloanagrammi(p1, p2) {
    let contarelettere = 0
    // p1 = carattereusatodipiu("tore")
    // p2 = carattereusatodipiu("eotr")
    if (p1.length != p2.length) {
        return false
    }
    else {
        for (let x = 0; x < p1.length; x++) {
            for (let y = 0; y < p2.length; y++) {
                if ((p1[x].l === p2[y].l) && (p1[x].r === p2[y].r)) {
                    contarelettere++
                }
            }
        }
    }
    if (contarelettere === p1.length) {
        return true
    }
}
let parola1 = carattereusatodipiu("salvatore")
let parola2 = carattereusatodipiu("lavastora")
//visualizzo return extra2
console.log("Extra 2")
console.log(controlloanagrammi(parola1, parola2))
console.log("")

//Extra Facoltativi-3
const arrcreato = ["ciao", "domani", "oiac", "coai"]
const parolascelta = "iaoc"
let anagrammi_ok = []
function controllo_parola_array(arraydiparole, wordcontrol) {
    for (let i = 0; i < arraydiparole.length; i++) {
        if (controlloanagrammi(carattereusatodipiu(wordcontrol), carattereusatodipiu(arraydiparole[i]))) {
            anagrammi_ok.push(arraydiparole[i])
        }
    }
    return anagrammi_ok
}
//visualizzo return extra3
console.log("Extra 3")
console.log(controllo_parola_array(arrcreato, parolascelta))
console.log("")

//Extra Facoltativi-4 palindromi


function palindromi(parolaPalindroma) {
    let parInversa = parolaPalindroma.split("").reverse().join("")
    console.log(parInversa)
    if (parolaPalindroma === parInversa)
        return true
    else
        return false
}

console.log("Extra 4")
let parolaData = "alala"
console.log(parolaData)
console.log(palindromi(parolaData))
console.log("")


//Extra Facoltativi-5
function inverti(paroladainvertire) {
    if ((typeof paroladainvertire === "number")){
        let trasformInString = String(paroladainvertire)
        return parseInt(trasformInString.split("").reverse().join(""))
    }
    else{

    }

}

console.log("Extra 5")
let intero = 12345
console.log(intero)
console.log(inverti(intero))
console.log("")


//Extra Facoltativi-6

function scala_hashtag(numeroDato){
    //let hstg=[]
    for(let i=1;i<numeroDato;i++){

    }
}


// 10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:
// Es. N = 2
// `[
//   [1, 2],
//   [4, 3]]
//   `
// N = 3
// `[[1, 2, 3],
//   [8, 9, 4],
//   [7, 6, 5]
// ]`
// N = 4
// `[
//   [1, 2, 3, 4], // j0,
//   [12, 13, 14, 5], // j1
//   [11, 16, 15, 6], // j2
//   [10, 9, 8, 7] // j3
// ]`
// */

// la matrice sarà n * n
// j = 0
// i ++
// fintanto che:

// function createMatrix(n) {
//    const matrix = new Array(n).fill(Array(n).fill(0))

//    let count = 0

//    for (let j = 0; j < n; j++) {

//      for (let i = 0; i < n; i++) {
//        console.log(j, i)    

//        matrix[j][i] = ++count;

//        console.log(matrix[j][i])
//     }
//   }

//    return matrix
//  }

//  console.log(createMatrix(4))

// 0, 0
// 0, 1
// 0, 2
// 0, 3

// // guarda caso adesso che i > n, allora dobbiamo cambiare direzione
// // ci stavamo muovendo con i (in orizzontale), ora dobbiamo muoverci con j
// // ovvero in verticale

// 1, 3
// 2, 3
// 3, 3

// // guarda caso adesso j > n, allora dobbiamo cambiare direzione
// // ci stavamo muovendo con j (in verticale), ora dobbiamo muoverci con i
// // ovvero in orizzontale.
// // Però, i + 1 non è valido, quindi andiamo in direzione opposta.

// // Se i + 1 è valido, prosegui con i++
// // Altrimenti, comincia a sottrarre.........................

// 3, 2
// 3, 1
// 3, 0

// // i-- non è piu valido, prosegui con j
// // Se j + 1 è valido, prosegui con j++
// // Altrimenti, comincia a sottrarre.........................
// 2, 0
// 1, 0

// // 0, 1 è gia occupato, quindi allora dobbiamo cambiare direzione
// 1, 1
// 1, 2

// // 1,3 gia occupato
// 2, 2
// 2, 1

// // count a questo punto sarà === 16 ovvero n*n, basta, abbiamo finito

function spiralMatrix(n) {
    const arr = Array.from({ length: n }, () => []);
    let row = 0;
    let col = 0;
    let rowEnd = n - 1;
    let colEnd = n - 1;
    let counter = 1;
    while (col <= colEnd && row <= rowEnd) {

        // Top row & middle value (Where col === colEnd && row === rowEnd)
        for (let i = col; i <= colEnd; i++) {
            arr[row][i] = counter;
            counter++;
        }
        row++;

        // end column
        for (let i = row; i <= rowEnd; i++) {
            arr[i][colEnd] = counter;
            counter++;
        }
        colEnd--;

        // end row
        for (let i = colEnd; i >= col; i--) {
            arr[rowEnd][i] = counter;
            counter++;
        }
        rowEnd--;

        // First col from end
        for (let i = rowEnd; i >= row; i--) {
            arr[i][col] = counter;
            counter++;
        }
        col++;
    }
    return arr;
}

console.log(spiralMatrix(4))