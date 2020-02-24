    
       
          const username= "input[name='username']";
         const password= "input[name='password']";
        const submitButton= "button[type= 'submit']"
        
        
    

    const navigate= ()=> {
        cy.visit('/login');
        cy.wait(5000);
        cy.get(username);
        cy.get(password);
    };
   

    const login = (u, p)=> {
        cy.get(username).type(u);
        cy.get(password).type(p);
        cy.get(submitButton).click();
    };
    export default {
        navigate,
        login,
        }
    