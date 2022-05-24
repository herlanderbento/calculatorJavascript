class CalcController {
    constructor() {
        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
    }

    initialize() {
        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "2000";
        dateEl.innerHTML = "24/02/2022";
        timeEl.innerHTML = "20:00";
    }

    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc(value) {
        return this._displayCalc = value
    }

    get currentDate() {
        return this._currentDate;
    }

    set currentDate(value) {
        return this._currentDate = value
    }
}