function quadraticEquationsRoots(a, b, c) {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    console.log(`enter valid number.`);
    return;
  }
  if (a === 0) {
    console.log(`value of first coefficient cannot be 0.`);
    return;
  }

  let discriminant = Math.sqrt((b ** 2) - (4 * a * c));
  let root1 = (-b + discriminant) / (2 * a);
  let root2 = (-b - discriminant) / (2 * a);

  if (discriminant > 0) {
    console.log(`roots are real and unequal.`);
  } else if (discriminant === 0) {
    console.log(`roots are real and equal.`);
  } else {
    console.log(`roots are complex and imaginary.`);
    return;
  }

  console.log(`for given quadratic equation :- ${a}x^2 + ${b}x + ${c} = 0 , following are the roots :- 
        root1 = ${root1.toFixed(2)}
        root2 = ${root2.toFixed(2)}`);
}

quadraticEquationsRoots(2, 14, 16);
quadraticEquationsRoots(2, 4, 6);
quadraticEquationsRoots(0, -5, 8);
quadraticEquationsRoots(2, 4, "");
