const passwordChecker = require('../passwordChecker');


describe('passwordChecker', () => {

    // Test de la longueur du mot de passe

        // quand il est en dessous de 8 caractères
    it('should return false if password is less than 8 characters', () => {
        expect(passwordChecker('1234567')).toBe(false);
        expect(passwordChecker('abc!1')).toBe(false);
    });


  
 
});