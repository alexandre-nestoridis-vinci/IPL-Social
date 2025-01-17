const passwordChecker = require('../passwordChecker');


describe('passwordChecker', () => {

    // Test de la longueur du mot de passe

        // quand il est en dessous de 8 caractères
    it('should return false if password is less than 8 characters', () => {
        expect(passwordChecker('1234567')).toBe(false);
        expect(passwordChecker('abc!1')).toBe(false);
    });

      // Test de la présence de caractères spéciales
      it('should reject passwords without special characters', () => {
        expect(passwordChecker('password1')).toBe(false);
        expect(passwordChecker('Password123')).toBe(false);
    });

    // Test de la présence de chiffres
    it('should reject passwords without numbers', () => {
        expect(passwordChecker('Password!')).toBe(false);
        expect(passwordChecker('Test@only')).toBe(false);
    });

    // Test de la présence de la chaîne "IPL"
    it('should reject passwords containing "IPL" (case insensitive)', () => {
        expect(passwordChecker('PasswordIPL1!')).toBe(false);
        expect(passwordChecker('passwordipl1!')).toBe(false);
        expect(passwordChecker('PasswIPLord1!')).toBe(false);
    });
  
  
 
});