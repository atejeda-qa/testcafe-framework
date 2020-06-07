import { t, Selector } from 'testcafe'
import logout from '../page-models/header'

class DoLogout {
    async logout() {
        await t
            .click(logout.logoutBtn)     
            .click(logout.confLogoutBtn)
    }
}

export default new DoLogout()
