import { Selector } from "testcafe";

class Transfiriendo {
    constructor() {
        this.continueBtn = Selector('#divCuerpo > div:nth-child(3) > div.col-sm-4.text-right > a')
        this.option = Selector('#cmbBancosPse > option:nth-child(3)')
        this.confirmPaymentBtn = Selector('#btnPagar')
        this.endPayment = Selector('#btnFinalizar')
    }
}

export default new Transfiriendo()
