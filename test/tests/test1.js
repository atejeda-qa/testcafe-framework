import config from '../../config'
import header from '../page-models/header'
import myBalance from '../page-models/my-balance'
import doLogin from '../actions/login'
import naturalInvestor from '../actors/natural-investor'

fixture `First test`
    .page `${config.test_env.baseUrl}`

test('Fisrt testcase', async t => {
    await t.click(header.loginBtn)
    await doLogin.logIntoAccount(naturalInvestor.email, naturalInvestor.password)
    await t
        .click(header.myBalance)
        .click(myBalance.rechargeBtn)
        .typeText(myBalance.inputAmount, '200000')
        .click(myBalance.continueRechargeBtn)
        .click(myBalance.finalStepRechargeBtn)
        .wait(3000)
        .navigateTo(`${config.test_env.url.baseUrl}`)
        .click(header.myBalance)
})
