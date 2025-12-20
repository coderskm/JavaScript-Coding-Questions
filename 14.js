function maxNumOfHandshakes(n) {
    if (typeof n !== "number") {
      console.log(`enter valid number.`);
      return;
    }
    const totalHandShakes = (n * (n - 1)) / 2;
    console.log(`total number of handshakes between ${n} people :- ${totalHandShakes}`);
    return;
}

maxNumOfHandshakes(9);
maxNumOfHandshakes("54");
maxNumOfHandshakes(90);


