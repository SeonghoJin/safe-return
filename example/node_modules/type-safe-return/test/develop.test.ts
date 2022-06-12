import safeReturn from '../src/index';

test('env = development', () => {
  const returnValue = safeReturn<string>({
    development: 'hello',
  });

  expect(returnValue).toBe('hello');

  const returnValue2 = safeReturn<string>({
    development: () => 'hello',
  });

  expect(returnValue2).toBe('hello');
});
