function pythagoreanTripletsOrNot(a, b, c) {
    if (typeof a!=="number" || typeof b!=="number" || typeof c!=="number") {
        console.log(`Enter valid number.`);
        return;
    }
    if ((a**2+b**2===c**2)||(b**2+c**2===a**2)||(c**2+a**2===b**2)) {
        console.log(`${a}, ${b} and ${c} are pythagorean triplets.`);
        return;
    } else {
        console.log(`${a}, ${b} and ${c} are not pythagorean triplets.`);
        return;
    }

}

pythagoreanTripletsOrNot(6, 5, 4);
pythagoreanTripletsOrNot(3, 5, 4);
pythagoreanTripletsOrNot("a", "caa", "nnn");