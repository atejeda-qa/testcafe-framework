import { Selector } from 'testcafe'
import { getByTestId } from '@testing-library/testcafe'

class Login {
    constructor() {
        this.emailInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.loginBtn = getByTestId('_button')
    }
}

export default new Login()
