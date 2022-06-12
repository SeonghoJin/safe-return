import safeReturn from '../src/index';

test('env = any', () => {
  expect(() =>
    safeReturn<string>({
      test: 'hello',
      development: 'hi',
      production: 'no',
    }),
  ).toThrowError();

  expect(() =>
    safeReturn<string>({
      test: () => 'hello',
      development: () => 'hi',
      production: () => 'no',
    }),
  ).toThrowError();
});
