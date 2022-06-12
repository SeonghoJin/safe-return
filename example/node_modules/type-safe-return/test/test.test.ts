import safeReturn from '../src/index';

test('env = test', () => {
  const returnValue = safeReturn<string>({
    test: 'hello',
  });

  expect(returnValue).toBe('hello');

  const returnValue2 = safeReturn<string>({
    test: () => 'hello',
  });

  expect(returnValue2).toBe('hello');
});
