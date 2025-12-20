function areaOfCircle(rad) {
    const area = Math.PI * (rad ** 2);
    console.log(`Area of circle with radius ${rad} is ${area.toFixed(4)}.`);
    return;
}

areaOfCircle(7);