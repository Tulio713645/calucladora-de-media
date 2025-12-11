const btnCa = document.querySelector("#btnCalculara")
const btnCb = document.querySelector("#btnCalcularb")

function calculara() {
    const inputB1 = document.querySelector("#b1")
    const inputB2 = document.querySelector("#b2")
    const inputB3 = document.querySelector("#b3")
    const inputB4 = document.querySelector("#b4")
    const pSituacaoa = document.querySelector("#situacaoa")

    const b1 = parseFloat(inputB1.value)
    const b2 = parseFloat(inputB2.value)
    const b3 = parseFloat(inputB3.value)
    const b4 = parseFloat(inputB4.value)

    const mediaa = (b1 + b2 + b3 + b4) / 4

    if (mediaa >= 6) {
        pSituacaoa.style.color = "green"
        pSituacaoa.innerHTML = `Aprovado (sobrando: ${(mediaa - 6).toFixed(1)})`
    } else {
        pSituacaoa.style.color = "red"
        pSituacaoa.innerHTML = `Reprovado (faltando: ${(mediaa - 6).toFixed(1)})`
    }

}

btnCa.addEventListener("click", calculara)

function calcularb() {
    const inputP = document.querySelector("#parcial")
    const inputG = document.querySelector("#global")
    const inputQ = document.querySelector("#qualitativa")
    const inputPe = document.querySelector("#pe")
    const pNota = document.querySelector("#nota")
    const pSituacaob = document.querySelector("#situacaob")

    const parcial = parseFloat(inputP.value)
    const global = parseFloat(inputG.value)
    const qualitativa = parseFloat(inputQ.value)
    const pe = parseFloat(inputPe.value)

    let mediab = 0

    if (!pe) {
        mediab = (parcial + global + qualitativa) / 3
    } else {
        mediab = (parcial + global + qualitativa) / 3 + pe
    }

    pNota.innerHTML = (mediab.toFixed(1))

    if (mediab >= 6 ) {
        pSituacaob.style.color = "green"
        pSituacaob.innerHTML = `Aprovado (sobrando: ${((mediab) - 6).toFixed(1)})`
    } else {
        pSituacaob.style.color = "red"
        pSituacaob.innerHTML = `Reprovado (faltando: ${(mediab - 6).toFixed(1)})`
    }
    
}

btnCb.addEventListener("click", calcularb)