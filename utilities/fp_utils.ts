const compose = (f1: unaryFunction, f2: unaryFunction) => (data: any) =>
  f1(f2(data));

const Wrapper = (input: any) => ({
  map: (f: unaryFunction) => Wrapper(f(input)),
  chain: (f: unaryFunction) => f(input),
  fold: (f: unaryFunction) => f(input),
});
const Right = (x: any) => ({
  map: (f: unaryFunction) => Right(f(x)),
  chain: (f: unaryFunction) => f(x),
  fold: (_: any, g: unaryFunction) => g(x),
});
const Left = (x: any, error: any) => ({
  map: () => Left(x, error),
  chain: () => Left(x, error),
  fold: (f: binaryFunction, _: any) => f(x, error),
});

const fromNullable = (x: any, error: any) =>
  x != null ? Right(x) : Left(x, error);

export { compose, Wrapper, Right, Left, fromNullable };
