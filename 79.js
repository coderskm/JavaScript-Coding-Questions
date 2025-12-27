function additionOf2Fractions(a, b, c, d) {
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number" || typeof d !== "number") {
        console.log(`enter valid number.`);
        return;
    }
    console.log(`first fraction's numerator :- ${a}`);
    console.log(`first fraction's denominator :- ${b}`);
    console.log(`second fraction's numerator :- ${c}`);
    console.log(`second fraction's denominator :- ${d}`);
    let sum = ((a * d) + (b * c)) / (b * d);
    console.log(`addition of given fractions :- ${sum}`);
}

additionOf2Fractions(1, 2, 3, 4);
additionOf2Fractions("56", 44, "33", 64);