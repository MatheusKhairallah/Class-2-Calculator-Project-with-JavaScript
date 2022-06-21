class CalcController {

    constructor() {

        /*O comando "this" referencia atributos e métodos. 
        Sendo atributos - váriaveis, e métodos - funções*/

        //"querySelector" seleciona/procura uma tag ou id dentro do documento
        this._locale = "pt-BR";
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();

    }

    initialize() {

        this.setDisplayDateTime();

        setInterval(()=> {

            this.setDisplayDateTime();

        }, 1000);

    }

    initButtonsEvents() {

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index) => {

            /*O addEventListener() anexa um manipulador 
            de eventos ao elemento especificado*/
            btn.addEventListener('click', e=> {

                console.log(btn.className.baseVal.replace("btn-", ""));

            });

        });

    }

    setDisplayDateTime() {

        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

    /*getters e setters permitem definir como acessar os valores*/
    get displayTime() {

        return this._timeEl.innerHTML;

    }

    set displayTime(value) {

        this._timeEl.innerHTML = value;

    }

    get displayDate() {

        return this._dateEl.innerHTML;

    }

    set displayDate(value) {

        this._dateEl.innerHTML = value;

    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        this._currentDate = value;
    }

}