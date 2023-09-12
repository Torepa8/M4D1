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
removeletter("Epicode", 5)

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
        console.log("true")
        return true
    }
    else {
        console.log("false")
        return false
    }
}
los_new("Sassari")

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
        controlloletterepresenti=false
        for (const w of wordrip) {
            if(w.l===word)
            controlloletterepresenti=true
        }
        if(!controlloletterepresenti){
            wordrip.push(letrip)
        }
        rip = 0
        word = ""
    }
    console.log(wordrip)
    // let indicecarattere=0
    let piugrande=wordrip[0]
    for (let i=0;i<wordrip.length;i++){
        if(wordrip[i].r>piugrande.r)
        {
            piugrande=wordrip[i]
        }
    }
    console.log(piugrande)
}
carattereusatodipiu("salvatorepau")


