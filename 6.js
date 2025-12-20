function triangleType(p, q, r) {
    if (typeof p !== "number" || typeof q !== "number" || typeof r !== "number") {
      console.log(`Enter valid number.`);
      return;
    }
    if ((p === q) && (q === r)) {
        console.log('given triangle is equilateral.');
        return;
    } else if ((p===r)||(q===r)||(p===q)) {
        console.log("given triangle is isosceles.");
        return;
    } else {
        console.log("given triangle is scalene.");
        return;
    }
}

triangleType(2, 2, 2);
triangleType("5", "76", "5");
triangleType(1, 2, 3);
triangleType(8, 9, 8);