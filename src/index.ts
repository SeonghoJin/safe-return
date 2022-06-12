const ENV = process.env.NODE_ENV;

type Params<ReturnValue> = {
  development?: (() => ReturnValue) | ReturnValue;
  production?: (() => ReturnValue) | ReturnValue;
  test?: (() => ReturnValue) | ReturnValue;
};

export default <ReturnValue>({ development, production, test }: Params<ReturnValue>): ReturnValue | null => {
  if (ENV === 'development') {
    if (development === undefined) {
      return null;
    }

    if (typeof development === 'function') {
      return (development as () => ReturnValue)();
    }

    return development;
  }

  if (ENV === 'test') {
    if (test === undefined) {
      return null;
    }

    if (typeof test === 'function') {
      return (test as () => ReturnValue)();
    }

    return test;
  }

  if (ENV === 'production') {
    if (production === undefined) {
      return null;
    }

    if (typeof production === 'function') {
      return (production as () => ReturnValue)();
    }

    return production;
  }

  throw new Error('The env variable must be one of production, development, and test.');
};
