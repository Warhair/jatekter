import { OBJEKTUMLISTA } from "./adatok.js"

import Kartya from "./Kartya.js";

class Jatekter {
    #kepeklista = []
    #kivalasztotKepeklista = []
    constructor() {
        console.log(OBJEKTUMLISTA);
        const SZULOELEM = $("article");
        for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
            const tl = new Kartya(OBJEKTUMLISTA[index], SZULOELEM);
        }
        $(window).on("elemKattintas", (event) => {
            this.#kivalasztotKepeklista.push(event.detail);
            console.log(this.#kivalasztotKepeklista)
        }
        )
    }
}
export default Jatekter;