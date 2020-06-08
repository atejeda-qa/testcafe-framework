import config from '../../config'
import header from '../page-objects/header'
import myBalance from '../page-objects/my-balance'
import transfiriendo from '../page-objects/transfiriendo'
import doLogin from '../actions/login'
import naturalInvestor from '../actors/natural-investor'
import { Selector } from 'testcafe'

fixture `First test`
    .page `${config.test_env.baseUrl}`

test('Fisrt testcase', async t => {
    await t
        .maximizeWindow()
        .click(header.loginBtn)
    await doLogin.logIntoAccount(naturalInvestor.email, naturalInvestor.password)
    await t
        .click(header.myBalance)
        .click(myBalance.rechargeBtn)
        .typeText(myBalance.inputAmount, '200000')
        .click(myBalance.continueRechargeBtn)
        .click(myBalance.finalStepRechargeBtn)
        .wait(3000)
        .click(transfiriendo.continueBtn)
        .click(transfiriendo.option)
        .click(transfiriendo.confirmPaymentBtn)
        .click(transfiriendo.endPayment)
        .navigateTo(`${config.test_env.baseUrl}`) 
        .click(header.myBalance)
})
