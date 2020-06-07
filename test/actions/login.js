import { t } from 'testcafe'
import login from '../page-models/login'

class DoLogin {
    async logIntoAccount(email, password) {
        await t
            .typeText(login.emailInput, email)
            .typeText(login.passwordInput, password)
            .click(login.loginBtn)
    }
}

export default new DoLogin()
