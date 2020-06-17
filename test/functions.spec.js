// importamos la funcion que vamos a testear
import { showOrHideOptions } from '../src/lib/functions.js';

describe('showOrHideOptions', () => {
  it('should be a function', () => {
    expect(typeof showOrHideOptions).toBe('function');
  });
});
