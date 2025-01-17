const passwordChecker = require('../passwordChecker');


describe('passwordChecker', () => {

    // testé la longueur du mot de passe
    it('should return false if password is less than 8 characters', () => {
        expect(passwordChecker('1234567')).toBe(false);
        expect(passwordChecker('abc!1')).toBe(false);
    });

    it('should return true if password is more or equal to 8 characters', () => {
        expect(passwordChecker('12345678')).toBe(true);
        expect(passwordChecker('abc!12345678')).toBe(true);
    });
});