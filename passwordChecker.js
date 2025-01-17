function passwordChecker(password) {
    if (typeof password !== 'string') return false;
    if (password.length < 8) return false;
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false; // Vérifie la présence de caractères spéciaux

    return true;
}

module.exports = passwordChecker;