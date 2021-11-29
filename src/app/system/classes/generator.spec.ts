import { Generator } from './generator';

describe('Generator', () => {
  it('should create an instance', () => {
    expect(new Generator(true, true, true, true)).toBeTruthy();
  });
});
