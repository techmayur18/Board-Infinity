const quadraticEquation = (a, b, c) => {

    let r1, r2,
        discriminant = b * b - 4 * a * c;
    r1 = (-b + Math.sqrt(discriminant) / (2 * a));
    r2 = (-b - Math.sqrt(discriminant) / (2 * a));
    console.log((r1.toFixed(2)), (r2).toFixed(2));
}
quadraticEquation(1, 5, 6);