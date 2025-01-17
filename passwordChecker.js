function passwordChecker(password) {
    if (typeof password !== 'string') return false;
    if (password.length < 8) return false;

    return true;
}


module.exports = passwordChecker;
