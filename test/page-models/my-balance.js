import { getByTestId } from '@testing-library/testcafe'
import { Selector } from 'testcafe'

class MyBalance {
    constructor() {
        this.rechargeBtn = Selector('#go-to-recharge')
        this.inputAmount = Selector('#input-amount')
        this.continueRechargeBtn = getByTestId('save-button-recharge')
        this.finalStepRechargeBtn = Selector('#continue-button')
    }
}

export default new MyBalance()
