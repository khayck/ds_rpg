let nomeHeroi = "Abacaxi";
let vidaHeroi = 100;
let ataqueHeroi = 50;

let nomeMonstro = "Gilgamesh";
let vidaMonstro = 300;
let danoMonstro = 15;

function realizarAtaque(dano, vidaAlvo, nomeAtacante, nomeDefensor) {
    let danoFinal = dano;
    let critico = Math.random(); 
    if (critico > 0.7) {
        danoFinal = dano * 2;
        console.log(`✨ CRÍTICO! ${nomeAtacante} acertou um golpe avassalador!`);
    }

    let novaVida = vidaAlvo - danoFinal;
    if (novaVida < 0) novaVida = 0; 

    console.log(`⚔️ ${nomeAtacante} atacou ${nomeDefensor} e causou ${danoFinal} de dano.`);
    console.log(`❤️ Vida restante de ${nomeDefensor}: ${novaVida}`);
    
    return novaVida;
}
let turno = 1;


while (vidaHeroi > 0 && vidaMonstro > 0) {
    console.log(`\n--- TURNO ${turno} ---`);

    vidaMonstro = realizarAtaque(ataqueHeroi, vidaMonstro, nomeHeroi, nomeMonstro);

    if (vidaMonstro > 0) {
        vidaHeroi = realizarAtaque(danoMonstro, vidaHeroi, nomeMonstro, nomeHeroi);
    }

    turno++;
}

console.log("\n==========================================");
if (vidaHeroi > 0) {
    console.log(`🏆 VITÓRIA DO ${nomeHeroi.toUpperCase()}!!!!! O monstro ${nomeMonstro} caiu.`);
} else {
    console.log(`💀 GAME OVER! ${nomeMonstro} destruiu o herói ${nomeHeroi}.`);
}
console.log("==========================================");
