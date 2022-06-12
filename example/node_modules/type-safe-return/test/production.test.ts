import safeReturn from '../src/index';

test('env = production', () => {
  const returnValue = safeReturn<string>({
    production: 'hello',
  });

  expect(returnValue).toBe('hello');

  const returnValue2 = safeReturn<string>({
    production: () => 'hello',
  });

  expect(returnValue2).toBe('hello');
});
