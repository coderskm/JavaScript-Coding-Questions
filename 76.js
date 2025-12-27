function GP(firstTerm, commonRatio, totalTerms) {
    if (typeof firstTerm !== "number" || typeof commonRatio !== "number" || typeof totalTerms !== "number") {
        console.log(`enter valid number.`);
        return;
    }

    let term = firstTerm;

    
    console.log("****************** GEOMETRIC PROGRESSION ******************")
    console.log(`first term :- ${firstTerm}`);
    console.log(`common difference :- ${commonRatio}`);
    console.log(`GP till ${totalTerms} terms :- `)
    for (let i = 0; i < totalTerms; i++){
        console.log(term)
        term = term * commonRatio;
    }
}

GP(3, 4, 5);
GP(6, 2, "7");
