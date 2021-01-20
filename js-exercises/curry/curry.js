function curry(functionToBeCurried) {
  return function curriedFunction(...args) {
    if (args.length >= functionToBeCurried.length) {
      return functionToBeCurried.apply(this, args);
    }
    return (...argsLocal) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      curriedFunction.apply(this, [...args, ...argsLocal]);
  };
}

export { curry };
