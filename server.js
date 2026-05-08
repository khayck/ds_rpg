while (vidaHeroi > 0 && vidaMonstro > 0) {

    function realizarAtaque(dano, vida) {
        return vida - dano
    }
    function ataqueMonstro(dano, vida) {
        return vida - dano
    }

    function iniciarTurno(vidaHeroi, vidaMonstro, ataqueHeroi, danoMonstro) {
        nomeHeroi = "abacaxi"
        vidaHeroi = 100
        ataqueHeroi = 30
        nomeMonstro = "gilgamaesh"
        vidaMonstro = 300
        danoMonstro = 20
        danoCrit = Math.random()

        realizarAtaque(ataqueHeroi, vidaMonstro)

        ataqueMonstro(danoMonstro, vidaHeroi)

        console.log(".......")
        if (vidaHeroi <= 0){
            console.log("vitory !!!!!")
        }
    }
}