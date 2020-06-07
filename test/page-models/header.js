import { getByTestId, getByText } from '@testing-library/testcafe'
import { Selector } from 'testcafe'

class Header {
    constructor() {
        this.showcase = getByTestId('showcase-button')
        this.loginBtn = getByTestId('login-button')
        this.registerBtn = getByTestId('register-button')
        this.logoutBtn = Selector('#logout-button')
        this.confirmLogoutBtn = Selector('#logout-confirm-button')
        this.myBalance = Selector('.navbar__balance-container')
    }
}

export default new Header()
