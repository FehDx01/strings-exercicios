//"Jorge tem uma casa verde e com portão azul, com os dizeres: "`BOAS VINDAS

const frase = '"Jorge tem uma casa verde e com portão azul, com os dizeres: "`BOAS VINDAS, mas não deixe o gato sair`"'

function receberFrase(){

    const fraseAlterada = frase.replace("verde", "rosa")
    const fraseAlterada1 = fraseAlterada.replace("azul", "laranja")
    
   /*  const verificaFrase = fraseAlterada1.includes("verde" && "laranja") */
    /* console.log(verificaFrase) */
    
    console.log(fraseAlterada1)
    console.log(fraseAlterada1.includes("verde"))
    console.log(fraseAlterada1.includes("laranja"))    
    
    /* console.log(fraseAlterada1.includes("laranja")) */
    
    //Extra

    let letrao = "mas não deixe o gato sair"
    let maiusculaFim = letrao.toUpperCase("mas não deixe o gato sair")

    console.log(`"Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS ${maiusculaFim}`)
}

receberFrase()




