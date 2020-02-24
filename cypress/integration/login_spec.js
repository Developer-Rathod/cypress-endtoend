/// refrence
import LoginPage from './Pages/LoginPage';

describe('Login Functionality', () =>{

    before(()=>{
        LoginPage.navigate();
    })

    it('Navigate to login page',()=>{      
       cy.url().then(url => expect(url).to.contain('/#/login'));
    });

    it('Login to the page', () =>{
        LoginPage.login('demo','demo');
    });

});