module.exports = function reverse (n) {
    n = n.toString()
    let revNumber = "";
    for (let i = n.length - 1; i >= 0; i--) {
        revNumber += n[i]
    }
    return revNumber;
}
