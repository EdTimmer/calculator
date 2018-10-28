export const additionFn = (a, b) => {
  const f1 = parseFloat(a);
  const f2 = parseFloat(b);
  const f3 = f1.add(f2)
  return f3;
}
export const subtractionFn = (a, b) => {
  const f1 = parseFloat(a);
  const f2 = parseFloat(b);
  const f3 = f1.sub(f2);
  return f3;
}
export const multiplicationFn = (a, b) => {
  const f1 = parseFloat(a);
  const f2 = parseFloat(b);
  const f3 = f1.mul(f2);
  return f3;
}
export const divisionFn = (a, b) => {
  const f1 = parseFloat(a);
  const f2 = parseFloat(b);
  const f3 = f1.div(f2);
  return f3;
}

