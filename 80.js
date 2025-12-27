function areaOfCircle(radius) {
    if (typeof radius !== "number") {
        console.log(`enter valid number`);
        return;
    }
    let area = Math.PI * (radius ** 2);
    console.log(`area of circle with radius ${radius} :- ${area.toFixed(2)}.`);
}

areaOfCircle(5);
areaOfCircle("5");
