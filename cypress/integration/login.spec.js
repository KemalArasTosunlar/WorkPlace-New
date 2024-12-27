describe('Login Component', () => {
    beforeEach(() => {
        cy.visit('/'); // Visit the root URL
    });

    it('should successfully log in with valid credentials', () => {
        cy.get('input[type="email"]').type('test@example.com');
        cy.get('input[type="password"]').type('Password123');
        cy.get('input[type="checkbox"]').check(); // Accept terms
        cy.get('button[type="submit"]').click();

        // Verify that the success page is displayed
        cy.url().should('include', '/success');
        cy.contains('Login Successful!').should('be.visible');
    });

    it('should show an error message for invalid email', () => {
        cy.get('input[type="email"]').type('invalid-email');
        cy.get('input[type="password"]').type('Password123');
        cy.get('input[type="checkbox"]').check(); // Accept terms
        cy.get('button[type="submit"]').click();

        // Verify that the error message is displayed
        cy.contains('Invalid email address').should('be.visible');
    });

    it('should show an error message for invalid password', () => {
        cy.get('input[type="email"]').type('test@example.com');
        cy.get('input[type="password"]').type('short');
        cy.get('input[type="checkbox"]').check(); // Accept terms
        cy.get('button[type="submit"]').click();

        // Verify that the error message is displayed
        cy.contains('Password must be at least 8 characters long and contain at least one letter and one number').should('be.visible');
    });

    it('should show an error message if terms are not accepted', () => {
        cy.get('input[type="email"]').type('test@example.com');
        cy.get('input[type="password"]').type('Password123');
        cy.get('button[type="submit"]').click();

        // Verify that the error message is displayed
        cy.contains('You must accept the terms and conditions').should('be.visible');
    });
});
