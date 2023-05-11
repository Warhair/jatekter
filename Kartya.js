class Kartya {
    #adat;
    #divElem;
    #imgElem;
   
    constructor(adat, szuloElem) {
        this.#adat = adat;
        this.#imgElem = adat.kep;
        szuloElem.append(`<div class ="kartya card col-lg-3 col-md-4 col-sm-6">
        <img id=${adat.id} src=${adat.kep} alt${adat.id}></div>`);
        this.#divElem = szuloElem.children("div:last-child");
        this.#imgElem = this.#divElem.children("img:last-child");
        this.setKep("./kepek/hatter.jpg")
        this.#imgElem.on("click", () => {
                    this.setKep(this.#adat.kep)
                    this.esemenyTrigger()
                   
                })
                
        

    }
    setElem(adat) {
        this.buttonElem.html(adat);
    }
    setKep(kep){
        this.#imgElem.attr("src",kep)
    }
    
    esemenyTrigger() {
        const esemeny = new CustomEvent("elemKattintas", { detail: this.#adat.id });
        window.dispatchEvent(esemeny);
    }
}

export default Kartya;
