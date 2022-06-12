import safeReturn from 'type-safe-return';

const testValue = safeReturn({ test: () => 'test' });
const developmentValue = safeReturn({ development: () => 'development' });
const productionValue = safeReturn({ production: () => 'production' });

console.log(testValue);
console.log(developmentValue);
console.log(productionValue);
