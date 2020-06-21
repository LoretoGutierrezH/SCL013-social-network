// importamos la funcion que vamos a testear
import { showOrHideOptions } from '../src/lib/functions.js';
import { auth, db } from '../src/lib/firebaseImports.js';

console.log(auth);
console.log(db);
describe('showOrHideOptions', () => {
  it('should be a function', () => {
    expect(typeof showOrHideOptions).toBe('function');
  });
});
