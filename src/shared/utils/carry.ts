export const carry = (a: number) => {
  return function (b: number) {
    return a * b;
  };
};
